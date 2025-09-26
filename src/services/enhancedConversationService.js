// Enhanced Conversation Service with Advanced Language Understanding
// Integrates dictionary, grammar, and contextual understanding

import languageUnderstandingService from './languageUnderstandingService.js'
import firebaseService from './firebaseService.js'

class EnhancedConversationService {
  constructor() {
    this.conversationSessions = new Map()
    this.userProfiles = new Map()
    this.contextMemory = new Map()
    
    console.log('🧠 Enhanced Conversation Service initialized')
  }

  // Process user message with advanced understanding
  async processUserMessage(userId, message, context = {}) {
    try {
      // Get or create conversation session
      const session = this.getOrCreateSession(userId)
      
      // Enhanced text analysis
      const analysis = languageUnderstandingService.understandConversation(message, {
        ...context,
        sessionId: session.id,
        userId: userId
      })
      
      // Update session context
      session.context = analysis.context
      session.messages.push({
        timestamp: new Date(),
        type: 'user',
        content: message,
        analysis: analysis.analysis
      })
      
      // Generate intelligent response
      const response = await this.generateIntelligentResponse(analysis, session)
      
      // Add AI response to session
      session.messages.push({
        timestamp: new Date(),
        type: 'assistant',
        content: response.message,
        analysis: response.analysis,
        suggestions: response.suggestions,
        nextSteps: response.nextSteps
      })
      
      // Save conversation to Firebase
      await this.saveConversation(userId, session)
      
      return {
        message: response.message,
        analysis: analysis.analysis,
        suggestions: response.suggestions,
        nextSteps: response.nextSteps,
        confidence: analysis.analysis.confidence,
        context: session.context
      }
      
    } catch (error) {
      console.error('Error processing user message:', error)
      return {
        message: "I apologize, but I'm having trouble understanding that. Could you please rephrase your request?",
        analysis: { intent: { type: 'error', confidence: 0 } },
        suggestions: [],
        nextSteps: [],
        confidence: 0,
        context: {}
      }
    }
  }

  // Generate intelligent response based on analysis
  async generateIntelligentResponse(analysis, session) {
    const intent = analysis.analysis.intent.type
    const confidence = analysis.analysis.confidence
    const entities = analysis.analysis.entities
    const sentiment = analysis.analysis.sentiment
    
    // High confidence responses
    if (confidence > 0.8) {
      return await this.generateHighConfidenceResponse(intent, entities, session)
    }
    
    // Medium confidence responses
    if (confidence > 0.5) {
      return await this.generateMediumConfidenceResponse(intent, entities, session)
    }
    
    // Low confidence responses
    return await this.generateLowConfidenceResponse(analysis, session)
  }

  // Generate high confidence response
  async generateHighConfidenceResponse(intent, entities, session) {
    switch (intent) {
      case 'create_app':
        return await this.handleCreateAppRequest(entities, session)
      
      case 'add_feature':
        return await this.handleAddFeatureRequest(entities, session)
      
      case 'modify_existing':
        return await this.handleModifyRequest(entities, session)
      
      case 'question':
        return await this.handleQuestionRequest(entities, session)
      
      case 'get_help':
        return await this.handleHelpRequest(entities, session)
      
      default:
        return await this.handleGenericRequest(entities, session)
    }
  }

  // Handle create app request
  async handleCreateAppRequest(entities, session) {
    const appTypes = this.extractAppTypes(entities)
    const features = this.extractFeatures(entities)
    
    let response = "I'll help you create that app! "
    
    if (appTypes.length > 0) {
      response += `I can see you want a ${appTypes.join(' and ')} app. `
    }
    
    if (features.length > 0) {
      response += `I'll include features like ${features.join(', ')}. `
    }
    
    response += "Let me generate the code for you. What specific functionality should the app have?"
    
    return {
      message: response,
      analysis: { intent: 'create_app', confidence: 0.9 },
      suggestions: [
        "Specify the main purpose of the app",
        "Describe the target users",
        "Choose a technology stack"
      ],
      nextSteps: [
        "Define app requirements",
        "Select UI components",
        "Configure backend services"
      ]
    }
  }

  // Handle add feature request
  async handleAddFeatureRequest(entities, session) {
    const features = this.extractFeatures(entities)
    
    let response = "I'll add that feature to your existing app! "
    
    if (features.length > 0) {
      response += `I'll implement ${features.join(', ')}. `
    }
    
    response += "Where would you like this feature to be added in your current project?"
    
    return {
      message: response,
      analysis: { intent: 'add_feature', confidence: 0.9 },
      suggestions: [
        "Specify the location in the app",
        "Describe the feature behavior",
        "Choose integration approach"
      ],
      nextSteps: [
        "Locate existing code",
        "Implement new feature",
        "Test integration"
      ]
    }
  }

  // Handle modify request
  async handleModifyRequest(entities, session) {
    const modifications = this.extractModifications(entities)
    
    let response = "I'll help you modify your existing app! "
    
    if (modifications.length > 0) {
      response += `I'll update ${modifications.join(', ')}. `
    }
    
    response += "What specific changes would you like me to make?"
    
    return {
      message: response,
      analysis: { intent: 'modify_existing', confidence: 0.9 },
      suggestions: [
        "Specify what to change",
        "Describe the new behavior",
        "Choose modification approach"
      ],
      nextSteps: [
        "Identify code to modify",
        "Implement changes",
        "Test modifications"
      ]
    }
  }

  // Handle question request
  async handleQuestionRequest(entities, session) {
    const questionTypes = this.extractQuestionTypes(entities)
    
    let response = "I'd be happy to help answer your question! "
    
    if (questionTypes.length > 0) {
      response += `I can help with ${questionTypes.join(' and ')}. `
    }
    
    response += "What specific information do you need?"
    
    return {
      message: response,
      analysis: { intent: 'question', confidence: 0.8 },
      suggestions: [
        "Ask about specific features",
        "Request code examples",
        "Get implementation guidance"
      ],
      nextSteps: [
        "Provide detailed answer",
        "Show code examples",
        "Offer additional resources"
      ]
    }
  }

  // Handle help request
  async handleHelpRequest(entities, session) {
    const helpTopics = this.extractHelpTopics(entities)
    
    let response = "I'm here to help! "
    
    if (helpTopics.length > 0) {
      response += `I can assist with ${helpTopics.join(', ')}. `
    }
    
    response += "What would you like help with today?"
    
    return {
      message: response,
      analysis: { intent: 'get_help', confidence: 0.8 },
      suggestions: [
        "Browse available features",
        "Get step-by-step guidance",
        "Access documentation"
      ],
      nextSteps: [
        "Provide help content",
        "Show tutorials",
        "Connect to resources"
      ]
    }
  }

  // Handle generic request
  async handleGenericRequest(entities, session) {
    return {
      message: "I understand you want help with something. Could you provide more details about what you'd like to build or modify?",
      analysis: { intent: 'generic', confidence: 0.6 },
      suggestions: [
        "Describe your project idea",
        "Specify what you want to create",
        "Ask for specific help"
      ],
      nextSteps: [
        "Gather more information",
        "Provide clarification",
        "Offer suggestions"
      ]
    }
  }

  // Generate medium confidence response
  async generateMediumConfidenceResponse(intent, entities, session) {
    return {
      message: `I think you want to ${intent.replace('_', ' ')}. Could you provide more details to help me understand exactly what you need?`,
      analysis: { intent: intent, confidence: 0.6 },
      suggestions: [
        "Provide more specific details",
        "Use different words to describe it",
        "Give an example"
      ],
      nextSteps: [
        "Clarify the request",
        "Ask follow-up questions",
        "Provide options"
      ]
    }
  }

  // Generate low confidence response
  async generateLowConfidenceResponse(analysis, session) {
    return {
      message: "I'm not quite sure what you're asking for. Could you rephrase your request or provide more details?",
      analysis: analysis.analysis,
      suggestions: [
        "Try rephrasing your request",
        "Use simpler language",
        "Break it into smaller parts"
      ],
      nextSteps: [
        "Ask for clarification",
        "Provide examples",
        "Offer alternative approaches"
      ]
    }
  }

  // Extract app types from entities
  extractAppTypes(entities) {
    const appTypes = []
    const appTypeMap = {
      'web': ['website', 'web app', 'web application'],
      'mobile': ['mobile app', 'phone app', 'android', 'ios'],
      'desktop': ['desktop app', 'computer app', 'windows', 'mac'],
      'dashboard': ['dashboard', 'admin panel', 'control panel']
    }
    
    entities.forEach(entity => {
      for (const [type, keywords] of Object.entries(appTypeMap)) {
        if (keywords.some(keyword => keyword.includes(entity.word))) {
          appTypes.push(type)
        }
      }
    })
    
    return [...new Set(appTypes)]
  }

  // Extract features from entities
  extractFeatures(entities) {
    const features = []
    const featureMap = {
      'authentication': ['login', 'signin', 'auth', 'security'],
      'database': ['database', 'storage', 'data'],
      'search': ['search', 'find', 'lookup'],
      'forms': ['form', 'input', 'submit'],
      'navigation': ['menu', 'navbar', 'navigation'],
      'dashboard': ['dashboard', 'analytics', 'stats']
    }
    
    entities.forEach(entity => {
      for (const [feature, keywords] of Object.entries(featureMap)) {
        if (keywords.some(keyword => keyword.includes(entity.word))) {
          features.push(feature)
        }
      }
    })
    
    return [...new Set(features)]
  }

  // Extract modifications from entities
  extractModifications(entities) {
    const modifications = []
    const modificationMap = {
      'ui': ['interface', 'design', 'layout', 'styling'],
      'functionality': ['feature', 'function', 'behavior'],
      'performance': ['speed', 'optimization', 'performance'],
      'security': ['security', 'protection', 'safety']
    }
    
    entities.forEach(entity => {
      for (const [mod, keywords] of Object.entries(modificationMap)) {
        if (keywords.some(keyword => keyword.includes(entity.word))) {
          modifications.push(mod)
        }
      }
    })
    
    return [...new Set(modifications)]
  }

  // Extract question types from entities
  extractQuestionTypes(entities) {
    const questionTypes = []
    const questionMap = {
      'implementation': ['how', 'implement', 'create', 'build'],
      'explanation': ['what', 'explain', 'define', 'meaning'],
      'troubleshooting': ['error', 'problem', 'issue', 'fix'],
      'best_practices': ['best', 'recommend', 'suggest', 'advice']
    }
    
    entities.forEach(entity => {
      for (const [type, keywords] of Object.entries(questionMap)) {
        if (keywords.some(keyword => keyword.includes(entity.word))) {
          questionTypes.push(type)
        }
      }
    })
    
    return [...new Set(questionTypes)]
  }

  // Extract help topics from entities
  extractHelpTopics(entities) {
    const helpTopics = []
    const helpMap = {
      'getting_started': ['start', 'begin', 'tutorial', 'guide'],
      'features': ['feature', 'function', 'capability'],
      'troubleshooting': ['error', 'problem', 'issue', 'help'],
      'advanced': ['advanced', 'complex', 'expert', 'pro']
    }
    
    entities.forEach(entity => {
      for (const [topic, keywords] of Object.entries(helpMap)) {
        if (keywords.some(keyword => keyword.includes(entity.word))) {
          helpTopics.push(topic)
        }
      }
    })
    
    return [...new Set(helpTopics)]
  }

  // Get or create conversation session
  getOrCreateSession(userId) {
    if (!this.conversationSessions.has(userId)) {
      this.conversationSessions.set(userId, {
        id: `session_${Date.now()}`,
        userId: userId,
        startTime: new Date(),
        messages: [],
        context: {},
        insights: {}
      })
    }
    
    return this.conversationSessions.get(userId)
  }

  // Save conversation to Firebase
  async saveConversation(userId, session) {
    try {
      await firebaseService.saveConversation(userId, {
        sessionId: session.id,
        messages: session.messages,
        context: session.context,
        timestamp: new Date()
      })
    } catch (error) {
      console.error('Error saving conversation:', error)
    }
  }

  // Get conversation history
  async getConversationHistory(userId, limit = 50) {
    try {
      return await firebaseService.getConversationHistory(userId, limit)
    } catch (error) {
      console.error('Error getting conversation history:', error)
      return []
    }
  }

  // Get conversation insights
  getConversationInsights(userId) {
    const session = this.conversationSessions.get(userId)
    if (!session) return null
    
    return {
      sessionId: session.id,
      messageCount: session.messages.length,
      duration: Date.now() - session.startTime.getTime(),
      insights: languageUnderstandingService.getConversationInsights(),
      context: session.context
    }
  }

  // Clear conversation session
  clearSession(userId) {
    this.conversationSessions.delete(userId)
    this.contextMemory.delete(userId)
  }
}

export default new EnhancedConversationService()
