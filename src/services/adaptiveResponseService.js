import firebaseService from './firebaseService'

const STORAGE_KEY = 'dreambuild-adaptive-learning'
const MAX_EVENTS = 80
const MAX_PROMPTS = 12

class AdaptiveResponseService {
  constructor() {
    this.state = this.loadState()
  }

  loadState() {
    try {
      if (typeof localStorage === 'undefined') return this.createEmptyState()
      const stored = localStorage.getItem(STORAGE_KEY)
      if (!stored) return this.createEmptyState()
      return { ...this.createEmptyState(), ...JSON.parse(stored) }
    } catch (error) {
      console.warn('Adaptive learning reset after invalid local cache:', error)
      return this.createEmptyState()
    }
  }

  createEmptyState() {
    return {
      interactions: [],
      feedback: [],
      successfulPrompts: [],
      avoidedPatterns: [],
      preferredTraits: {
        clarity: 0,
        completeness: 0,
        codeQuality: 0,
        designPolish: 0,
        directness: 0
      },
      updatedAt: null
    }
  }

  saveState() {
    this.state.updatedAt = new Date().toISOString()
    if (typeof localStorage === 'undefined') return
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state))
  }

  async recordInteraction({ projectId, prompt, response, context = {} }) {
    const event = {
      id: `interaction-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      projectId,
      prompt,
      responseType: response?.type || 'unknown',
      generatedFiles: response?.files ? Object.keys(response.files) : [],
      appType: context.appType || 'web',
      isIncremental: Boolean(context.isIncremental),
      createdAt: new Date().toISOString()
    }

    this.state.interactions = [event, ...this.state.interactions].slice(0, MAX_EVENTS)

    if (event.generatedFiles.length > 0 || response?.type === 'incremental_update') {
      this.rememberSuccessfulPrompt(prompt)
    }

    this.saveState()
    await this.storeRemotePattern(projectId, {
      kind: 'interaction',
      event
    })

    return event
  }

  async recordFeedback({ projectId, message, rating, activePrompt, projectContext = {} }) {
    const feedback = {
      id: `feedback-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      projectId,
      messageId: message?.id,
      rating,
      messageType: message?.type,
      messageSummary: this.summarize(message?.content || ''),
      activePrompt: activePrompt || '',
      traits: this.inferTraits(message?.content || '', rating),
      createdAt: new Date().toISOString()
    }

    this.state.feedback = [feedback, ...this.state.feedback].slice(0, MAX_EVENTS)
    this.updateTraitScores(feedback.traits, rating)

    if (rating === 'up' && activePrompt) {
      this.rememberSuccessfulPrompt(activePrompt)
    }

    if (rating === 'down') {
      this.state.avoidedPatterns = [
        {
          summary: feedback.messageSummary,
          reason: 'User marked response as not useful',
          createdAt: feedback.createdAt
        },
        ...this.state.avoidedPatterns
      ].slice(0, 20)
    }

    this.saveState()
    await this.storeRemotePattern(projectId, {
      kind: 'feedback',
      feedback,
      projectContext
    })

    return feedback
  }

  rememberSuccessfulPrompt(prompt) {
    const cleanPrompt = this.cleanPrompt(prompt)
    if (!cleanPrompt) return

    const existing = this.state.successfulPrompts.find((item) => item.prompt === cleanPrompt)
    if (existing) {
      existing.uses += 1
      existing.lastUsedAt = new Date().toISOString()
      return
    }

    this.state.successfulPrompts = [
      {
        prompt: cleanPrompt,
        uses: 1,
        lastUsedAt: new Date().toISOString()
      },
      ...this.state.successfulPrompts
    ].slice(0, MAX_PROMPTS)
  }

  getAdaptiveContext(currentPrompt = '') {
    const topTraits = Object.entries(this.state.preferredTraits)
      .filter(([, score]) => score > 0)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([trait]) => trait)

    const relatedPrompts = this.state.successfulPrompts
      .filter((item) => this.isRelated(currentPrompt, item.prompt))
      .slice(0, 3)
      .map((item) => item.prompt)

    return {
      enabled: true,
      disclaimer: 'Adaptive learning improves prompt context and suggestions over time; it is not consciousness or guaranteed self-repair.',
      topPreferredTraits: topTraits,
      relatedSuccessfulPrompts: relatedPrompts,
      avoidedPatterns: this.state.avoidedPatterns.slice(0, 3),
      feedbackCount: this.state.feedback.length,
      interactionCount: this.state.interactions.length,
      lastUpdated: this.state.updatedAt
    }
  }

  getPromptSuggestions(defaultPrompts = []) {
    const learned = this.state.successfulPrompts.map((item) => item.prompt)
    return [...learned, ...defaultPrompts].filter((prompt, index, list) => {
      return prompt && list.indexOf(prompt) === index
    }).slice(0, 5)
  }

  getLearningSummary() {
    return {
      feedbackCount: this.state.feedback.length,
      interactionCount: this.state.interactions.length,
      successfulPromptCount: this.state.successfulPrompts.length,
      topTraits: this.getAdaptiveContext().topPreferredTraits,
      updatedAt: this.state.updatedAt
    }
  }

  inferTraits(content, rating) {
    const lower = content.toLowerCase()
    const traits = []

    if (lower.includes('step') || lower.includes('summary')) traits.push('clarity')
    if (lower.includes('file') || lower.includes('generated') || lower.includes('complete')) traits.push('completeness')
    if (lower.includes('error') || lower.includes('test') || lower.includes('validate')) traits.push('codeQuality')
    if (lower.includes('design') || lower.includes('layout') || lower.includes('professional')) traits.push('designPolish')
    if (content.length < 420) traits.push('directness')

    return rating === 'up' ? traits : traits.map((trait) => `avoid_${trait}`)
  }

  updateTraitScores(traits, rating) {
    traits.forEach((trait) => {
      if (trait.startsWith('avoid_')) {
        const cleanTrait = trait.replace('avoid_', '')
        if (this.state.preferredTraits[cleanTrait] !== undefined) {
          this.state.preferredTraits[cleanTrait] = Math.max(0, this.state.preferredTraits[cleanTrait] - 1)
        }
        return
      }

      if (this.state.preferredTraits[trait] !== undefined) {
        this.state.preferredTraits[trait] += rating === 'up' ? 1 : -1
      }
    })
  }

  async storeRemotePattern(projectId, pattern) {
    if (!projectId) return

    try {
      await firebaseService.storeAILearningPattern(projectId, pattern)
    } catch (error) {
      console.warn('Adaptive learning saved locally only:', error.message)
    }
  }

  cleanPrompt(prompt) {
    return String(prompt || '').trim().replace(/\s+/g, ' ').slice(0, 220)
  }

  summarize(content) {
    return String(content || '').trim().replace(/\s+/g, ' ').slice(0, 240)
  }

  isRelated(currentPrompt, savedPrompt) {
    const currentWords = this.keywordSet(currentPrompt)
    const savedWords = this.keywordSet(savedPrompt)
    if (currentWords.size === 0) return true

    let matches = 0
    currentWords.forEach((word) => {
      if (savedWords.has(word)) matches += 1
    })

    return matches > 0
  }

  keywordSet(text) {
    const stopWords = new Set(['the', 'and', 'for', 'with', 'that', 'this', 'make', 'build', 'create', 'app', 'website'])
    return new Set(
      String(text || '')
        .toLowerCase()
        .split(/[^a-z0-9]+/)
        .filter((word) => word.length > 3 && !stopWords.has(word))
    )
  }
}

export default new AdaptiveResponseService()
