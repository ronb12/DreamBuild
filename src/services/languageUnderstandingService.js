// Advanced Language Understanding Service for DreamBuild
// Enhanced dictionary, grammar, and conversational AI capabilities

class LanguageUnderstandingService {
  constructor() {
    this.dictionary = new Map()
    this.grammarRules = new Map()
    this.contextMemory = new Map()
    this.conversationHistory = []
    this.intentPatterns = new Map()
    
    this.initializeDictionary()
    this.initializeGrammarRules()
    this.initializeIntentPatterns()
    
    // Language Understanding Service initialized
  }

  // Initialize comprehensive dictionary
  initializeDictionary() {
    // Technical terms
    this.dictionary.set('app', {
      type: 'noun',
      synonyms: ['application', 'program', 'software', 'platform'],
      context: 'development',
      examples: ['mobile app', 'web app', 'desktop app']
    })
    
    this.dictionary.set('build', {
      type: 'verb',
      synonyms: ['create', 'develop', 'make', 'construct', 'generate'],
      context: 'development',
      examples: ['build an app', 'build a website', 'build a dashboard']
    })
    
    this.dictionary.set('dashboard', {
      type: 'noun',
      synonyms: ['control panel', 'admin panel', 'analytics page', 'overview'],
      context: 'development',
      examples: ['admin dashboard', 'analytics dashboard', 'user dashboard']
    })
    
    // UI/UX terms
    this.dictionary.set('button', {
      type: 'noun',
      synonyms: ['clickable element', 'action element', 'trigger'],
      context: 'ui',
      examples: ['submit button', 'navigation button', 'action button']
    })
    
    this.dictionary.set('form', {
      type: 'noun',
      synonyms: ['input form', 'data entry', 'user input'],
      context: 'ui',
      examples: ['contact form', 'login form', 'registration form']
    })
    
    // Database terms
    this.dictionary.set('database', {
      type: 'noun',
      synonyms: ['data storage', 'data store', 'repository'],
      context: 'backend',
      examples: ['user database', 'product database', 'analytics database']
    })
    
    // Add more comprehensive dictionary entries...
    this.addDictionaryEntries()
  }

  // Add more dictionary entries
  addDictionaryEntries() {
    const entries = [
      // Development concepts
      { word: 'api', type: 'noun', synonyms: ['interface', 'endpoint', 'service'], context: 'backend' },
      { word: 'frontend', type: 'noun', synonyms: ['client-side', 'user interface', 'UI'], context: 'development' },
      { word: 'backend', type: 'noun', synonyms: ['server-side', 'server', 'API'], context: 'development' },
      { word: 'database', type: 'noun', synonyms: ['data store', 'storage', 'repository'], context: 'backend' },
      
      // UI Components
      { word: 'modal', type: 'noun', synonyms: ['popup', 'dialog', 'overlay'], context: 'ui' },
      { word: 'navbar', type: 'noun', synonyms: ['navigation bar', 'menu bar', 'header'], context: 'ui' },
      { word: 'sidebar', type: 'noun', synonyms: ['side panel', 'navigation panel'], context: 'ui' },
      { word: 'card', type: 'noun', synonyms: ['panel', 'container', 'widget'], context: 'ui' },
      
      // Actions
      { word: 'create', type: 'verb', synonyms: ['build', 'make', 'generate', 'develop'], context: 'action' },
      { word: 'update', type: 'verb', synonyms: ['modify', 'edit', 'change', 'revise'], context: 'action' },
      { word: 'delete', type: 'verb', synonyms: ['remove', 'destroy', 'eliminate'], context: 'action' },
      { word: 'display', type: 'verb', synonyms: ['show', 'render', 'present'], context: 'action' },
      
      // Features
      { word: 'authentication', type: 'noun', synonyms: ['login', 'auth', 'security'], context: 'feature' },
      { word: 'authorization', type: 'noun', synonyms: ['permissions', 'access control'], context: 'feature' },
      { word: 'search', type: 'noun', synonyms: ['find', 'query', 'lookup'], context: 'feature' },
      { word: 'filter', type: 'noun', synonyms: ['sort', 'organize', 'categorize'], context: 'feature' }
    ]
    
    entries.forEach(entry => {
      this.dictionary.set(entry.word, {
        type: entry.type,
        synonyms: entry.synonyms,
        context: entry.context,
        examples: []
      })
    })
  }

  // Initialize grammar rules
  initializeGrammarRules() {
    this.grammarRules.set('question_patterns', [
      /^(what|how|where|when|why|which|who)\s+/i,
      /^(can|could|would|should|will|shall)\s+/i,
      /^(is|are|was|were|do|does|did|have|has|had)\s+/i
    ])
    
    this.grammarRules.set('command_patterns', [
      /^(create|build|make|generate|develop)\s+/i,
      /^(add|insert|include|implement)\s+/i,
      /^(remove|delete|eliminate)\s+/i,
      /^(update|modify|change|edit)\s+/i
    ])
    
    this.grammarRules.set('request_patterns', [
      /^(i want|i need|i would like)\s+/i,
      /^(please|can you|could you)\s+/i,
      /^(help me|assist me)\s+/i
    ])
  }

  // Initialize intent patterns
  initializeIntentPatterns() {
    this.intentPatterns.set('create_app', [
      /create.*app/i,
      /build.*app/i,
      /make.*app/i,
      /develop.*app/i,
      /generate.*app/i
    ])
    
    this.intentPatterns.set('add_feature', [
      /add.*feature/i,
      /include.*feature/i,
      /implement.*feature/i,
      /add.*functionality/i
    ])
    
    this.intentPatterns.set('modify_existing', [
      /update.*existing/i,
      /modify.*current/i,
      /change.*app/i,
      /edit.*project/i
    ])
    
    this.intentPatterns.set('get_help', [
      /help/i,
      /how.*do/i,
      /what.*is/i,
      /explain/i,
      /tutorial/i
    ])
  }

  // Enhanced text analysis
  analyzeText(text) {
    const tokens = this.tokenize(text)
    const intent = this.detectIntent(text)
    const entities = this.extractEntities(text)
    const sentiment = this.analyzeSentiment(text)
    const grammar = this.analyzeGrammar(text)
    
    const analysis = {
      originalText: text,
      tokens: tokens,
      intent: intent,
      entities: entities,
      sentiment: sentiment,
      grammar: grammar,
      suggestions: this.generateSuggestions(text, entities),
      confidence: 0
    }
    
    analysis.confidence = this.calculateConfidence(analysis)
    return analysis
  }

  // Tokenize text
  tokenize(text) {
    return text.toLowerCase()
      .replace(/[^\w\s]/g, ' ')
      .split(/\s+/)
      .filter(token => token.length > 0)
  }

  // Detect user intent
  detectIntent(text) {
    for (const [intent, patterns] of this.intentPatterns) {
      for (const pattern of patterns) {
        if (pattern.test(text)) {
          return {
            type: intent,
            confidence: 0.9,
            matchedPattern: pattern.source
          }
        }
      }
    }
    
    // Fallback to grammar analysis
    if (this.grammarRules.get('question_patterns').some(pattern => pattern.test(text))) {
      return { type: 'question', confidence: 0.7 }
    }
    
    if (this.grammarRules.get('command_patterns').some(pattern => pattern.test(text))) {
      return { type: 'command', confidence: 0.8 }
    }
    
    return { type: 'unknown', confidence: 0.3 }
  }

  // Extract entities from text
  extractEntities(text) {
    const entities = []
    const tokens = this.tokenize(text)
    
    for (const token of tokens) {
      if (this.dictionary.has(token)) {
        const entry = this.dictionary.get(token)
        entities.push({
          word: token,
          type: entry.type,
          context: entry.context,
          synonyms: entry.synonyms
        })
      }
    }
    
    return entities
  }

  // Analyze sentiment
  analyzeSentiment(text) {
    const positiveWords = ['good', 'great', 'excellent', 'amazing', 'perfect', 'love', 'like']
    const negativeWords = ['bad', 'terrible', 'awful', 'hate', 'dislike', 'wrong', 'error']
    
    const tokens = this.tokenize(text)
    let score = 0
    
    tokens.forEach(token => {
      if (positiveWords.includes(token)) score += 1
      if (negativeWords.includes(token)) score -= 1
    })
    
    if (score > 0) return 'positive'
    if (score < 0) return 'negative'
    return 'neutral'
  }

  // Analyze grammar
  analyzeGrammar(text) {
    const analysis = {
      hasQuestion: this.grammarRules.get('question_patterns').some(pattern => pattern.test(text)),
      hasCommand: this.grammarRules.get('command_patterns').some(pattern => pattern.test(text)),
      hasRequest: this.grammarRules.get('request_patterns').some(pattern => pattern.test(text)),
      wordCount: this.tokenize(text).length,
      complexity: this.calculateComplexity(text)
    }
    
    return analysis
  }

  // Calculate text complexity
  calculateComplexity(text) {
    const tokens = this.tokenize(text)
    const avgWordLength = tokens.reduce((sum, token) => sum + token.length, 0) / tokens.length
    const uniqueWords = new Set(tokens).size
    const complexity = (avgWordLength * uniqueWords) / tokens.length
    
    if (complexity > 5) return 'high'
    if (complexity > 3) return 'medium'
    return 'low'
  }

  // Generate suggestions
  generateSuggestions(text, entities = []) {
    const suggestions = []
    
    // Suggest synonyms for better understanding
    entities.forEach(entity => {
      if (entity.synonyms && entity.synonyms.length > 0) {
        suggestions.push({
          type: 'synonym',
          original: entity.word,
          suggestions: entity.synonyms.slice(0, 3)
        })
      }
    })
    
    return suggestions
  }

  // Calculate confidence score
  calculateConfidence(analysis) {
    let confidence = 0
    
    // Intent confidence
    confidence += analysis.intent.confidence * 0.4
    
    // Entity recognition
    confidence += Math.min(analysis.entities.length / 5, 1) * 0.3
    
    // Grammar analysis
    if (analysis.grammar.hasCommand || analysis.grammar.hasRequest) {
      confidence += 0.2
    }
    
    // Context from conversation history
    if (this.conversationHistory.length > 0) {
      confidence += 0.1
    }
    
    return Math.min(confidence, 1)
  }

  // Enhanced conversation understanding
  understandConversation(userMessage, context = {}) {
    const analysis = this.analyzeText(userMessage)
    
    // Add to conversation history
    this.conversationHistory.push({
      timestamp: new Date(),
      message: userMessage,
      analysis: analysis,
      context: context
    })
    
    // Keep only last 10 messages
    if (this.conversationHistory.length > 10) {
      this.conversationHistory.shift()
    }
    
    // Generate contextual response
    const response = this.generateContextualResponse(analysis, context)
    
    return {
      analysis: analysis,
      response: response,
      context: this.buildContext(analysis, context)
    }
  }

  // Generate contextual response
  generateContextualResponse(analysis, context) {
    const responses = {
      create_app: [
        "I'll help you create that app! What type of app would you like to build?",
        "Great! Let's build your app. What features should it have?",
        "Perfect! I can create that for you. What's the main purpose of the app?"
      ],
      add_feature: [
        "I'll add that feature to your existing app. What specific functionality do you need?",
        "Great idea! Let me implement that feature. Can you describe it in more detail?",
        "I'll help you add that feature. What should it do exactly?"
      ],
      question: [
        "I'd be happy to help! What would you like to know?",
        "Great question! Let me explain that for you.",
        "I can help with that! What specific information do you need?"
      ],
      command: [
        "I'll execute that command for you. Let me know if you need any modifications.",
        "Perfect! I'll handle that right away.",
        "I'll take care of that for you. Anything else you'd like me to do?"
      ]
    }
    
    const intentType = analysis.intent.type
    const responseList = responses[intentType] || responses.command
    
    return {
      message: responseList[Math.floor(Math.random() * responseList.length)],
      suggestions: analysis.suggestions,
      confidence: analysis.confidence,
      nextSteps: this.suggestNextSteps(analysis)
    }
  }

  // Suggest next steps
  suggestNextSteps(analysis) {
    const steps = []
    
    if (analysis.intent.type === 'create_app') {
      steps.push('Specify the app type (web, mobile, desktop)')
      steps.push('Describe the main features')
      steps.push('Choose a technology stack')
    } else if (analysis.intent.type === 'add_feature') {
      steps.push('Describe the feature in detail')
      steps.push('Specify where to add it')
      steps.push('Choose implementation approach')
    }
    
    return steps
  }

  // Build context from analysis
  buildContext(analysis, existingContext) {
    return {
      ...existingContext,
      intent: analysis.intent,
      entities: analysis.entities,
      sentiment: analysis.sentiment,
      complexity: analysis.grammar.complexity,
      timestamp: new Date(),
      conversationLength: this.conversationHistory.length
    }
  }

  // Get conversation insights
  getConversationInsights() {
    const insights = {
      totalMessages: this.conversationHistory.length,
      commonIntents: this.getCommonIntents(),
      averageComplexity: this.getAverageComplexity(),
      userPreferences: this.getUserPreferences()
    }
    
    return insights
  }

  // Get common intents
  getCommonIntents() {
    const intentCounts = {}
    this.conversationHistory.forEach(entry => {
      const intent = entry.analysis.intent.type
      intentCounts[intent] = (intentCounts[intent] || 0) + 1
    })
    
    return Object.entries(intentCounts)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 5)
  }

  // Get average complexity
  getAverageComplexity() {
    if (this.conversationHistory.length === 0) return 0
    
    const totalComplexity = this.conversationHistory.reduce((sum, entry) => {
      return sum + (entry.analysis.grammar.complexity === 'high' ? 3 : 
                   entry.analysis.grammar.complexity === 'medium' ? 2 : 1)
    }, 0)
    
    return totalComplexity / this.conversationHistory.length
  }

  // Get user preferences
  getUserPreferences() {
    const preferences = {
      preferredIntents: this.getCommonIntents().slice(0, 3),
      averageMessageLength: this.conversationHistory.reduce((sum, entry) => 
        sum + entry.analysis.grammar.wordCount, 0) / this.conversationHistory.length,
      commonEntities: this.getCommonEntities()
    }
    
    return preferences
  }

  // Get common entities
  getCommonEntities() {
    const entityCounts = {}
    this.conversationHistory.forEach(entry => {
      entry.analysis.entities.forEach(entity => {
        entityCounts[entity.word] = (entityCounts[entity.word] || 0) + 1
      })
    })
    
    return Object.entries(entityCounts)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 10)
  }
}

export default new LanguageUnderstandingService()
