// Advanced Conversation Service
// Provides sophisticated back-and-forth communication with context awareness

import conversationService from './conversationService.js'
import incrementalDevelopmentService from './incrementalDevelopmentService.js'

class AdvancedConversationService {
  constructor() {
    this.conversationHistory = []
    this.currentContext = null
    this.userPreferences = {}
    this.conversationState = 'idle' // idle, analyzing, generating, clarifying
    this.lastUserIntent = null
    this.followUpQuestions = []
  }

  // Initialize advanced conversation
  async initializeConversation(projectData) {
    await conversationService.initializeConversation(projectData.id, projectData)
    this.currentContext = conversationService.getConversationContext()
    this.conversationHistory = conversationService.getConversationHistory()
    
    console.log('🧠 Advanced conversation initialized')
    return this.currentContext
  }

  // Process user message with advanced understanding
  async processUserMessage(userMessage) {
    console.log('💬 Processing user message:', userMessage)
    
    // Update conversation state
    this.conversationState = 'analyzing'
    
    // Analyze user intent and context
    const analysis = await this.analyzeUserIntent(userMessage)
    console.log('🎯 Intent analysis:', analysis)
    
    // Generate contextual response
    const response = await this.generateContextualResponse(userMessage, analysis)
    
    // Update conversation history
    await this.updateConversationHistory(userMessage, response, analysis)
    
    // Update conversation state
    this.conversationState = 'idle'
    
    return response
  }

  // Advanced intent analysis
  async analyzeUserIntent(message) {
    const lowerMessage = message.toLowerCase()
    
    // Intent classification
    const intents = {
      // Development intents
      create: this.detectIntent(lowerMessage, ['create', 'build', 'make', 'develop', 'start', 'new app', 'new project']),
      add: this.detectIntent(lowerMessage, ['add', 'include', 'implement', 'integrate', 'insert', 'put in']),
      modify: this.detectIntent(lowerMessage, ['modify', 'change', 'update', 'edit', 'alter', 'fix', 'improve']),
      remove: this.detectIntent(lowerMessage, ['remove', 'delete', 'take out', 'eliminate', 'get rid of']),
      
      // Information intents
      explain: this.detectIntent(lowerMessage, ['explain', 'tell me', 'what is', 'how does', 'describe', 'clarify']),
      ask: this.detectIntent(lowerMessage, ['what', 'how', 'why', 'when', 'where', 'which', 'can you', 'could you']),
      show: this.detectIntent(lowerMessage, ['show', 'display', 'see', 'view', 'look at', 'demonstrate']),
      
      // Help intents
      help: this.detectIntent(lowerMessage, ['help', 'assist', 'support', 'guide', 'tutorial', 'how to']),
      recommend: this.detectIntent(lowerMessage, ['recommend', 'suggest', 'advise', 'what should', 'best practice']),
      
      // Confirmation intents
      yes: this.detectIntent(lowerMessage, ['yes', 'yeah', 'yep', 'sure', 'ok', 'okay', 'agree', 'confirm']),
      no: this.detectIntent(lowerMessage, ['no', 'nope', 'not', 'disagree', 'cancel', 'stop']),
      
      // Clarification intents
      clarify: this.detectIntent(lowerMessage, ['clarify', 'explain more', 'more details', 'elaborate', 'expand']),
      repeat: this.detectIntent(lowerMessage, ['repeat', 'again', 'once more', 'restate']),
      
      // Technical intents
      debug: this.detectIntent(lowerMessage, ['debug', 'error', 'bug', 'issue', 'problem', 'fix', 'broken']),
      optimize: this.detectIntent(lowerMessage, ['optimize', 'performance', 'speed', 'faster', 'better', 'improve']),
      test: this.detectIntent(lowerMessage, ['test', 'testing', 'validate', 'check', 'verify']),
      
      // Project management intents
      status: this.detectIntent(lowerMessage, ['status', 'progress', 'where are we', 'what\'s done', 'current state']),
      plan: this.detectIntent(lowerMessage, ['plan', 'roadmap', 'next steps', 'what\'s next', 'timeline']),
      review: this.detectIntent(lowerMessage, ['review', 'check', 'audit', 'analyze', 'evaluate'])
    }

    // Extract entities and features
    const entities = this.extractEntities(message)
    const features = this.extractFeatureMentions(message)
    const technicalTerms = this.extractTechnicalTerms(message)
    
    // Determine primary intent
    const primaryIntent = Object.keys(intents).find(intent => intents[intent]) || 'general'
    
    // Determine conversation flow
    const conversationFlow = this.determineConversationFlow(primaryIntent, entities, features)
    
    // Generate follow-up questions
    const followUpQuestions = this.generateFollowUpQuestions(primaryIntent, entities, features)
    
    return {
      primaryIntent,
      intents,
      entities,
      features,
      technicalTerms,
      conversationFlow,
      followUpQuestions,
      confidence: this.calculateConfidence(intents, entities, features),
      requiresClarification: this.needsClarification(primaryIntent, entities, features)
    }
  }

  // Detect if message contains specific intent keywords
  detectIntent(message, keywords) {
    return keywords.some(keyword => message.includes(keyword))
  }

  // Extract entities from message
  extractEntities(message) {
    const entities = {
      technologies: [],
      features: [],
      files: [],
      numbers: [],
      timeframes: [],
      priorities: []
    }

    // Technology detection
    const techKeywords = [
      'react', 'vue', 'angular', 'javascript', 'typescript', 'python', 'java', 'php',
      'node', 'express', 'mongodb', 'mysql', 'postgresql', 'firebase', 'aws', 'azure',
      'html', 'css', 'bootstrap', 'tailwind', 'sass', 'less', 'webpack', 'vite'
    ]
    
    techKeywords.forEach(tech => {
      if (message.toLowerCase().includes(tech)) {
        entities.technologies.push(tech)
      }
    })

    // Feature detection
    const featureKeywords = [
      'authentication', 'login', 'register', 'database', 'api', 'search', 'filter',
      'upload', 'download', 'payment', 'notification', 'email', 'chat', 'messaging',
      'calendar', 'scheduling', 'analytics', 'dashboard', 'admin', 'user management'
    ]
    
    featureKeywords.forEach(feature => {
      if (message.toLowerCase().includes(feature)) {
        entities.features.push(feature)
      }
    })

    // File detection
    const filePattern = /\b\w+\.(js|jsx|ts|tsx|html|css|scss|json|md|txt)\b/g
    const files = message.match(filePattern) || []
    entities.files = files

    // Number detection
    const numberPattern = /\b\d+\b/g
    const numbers = message.match(numberPattern) || []
    entities.numbers = numbers

    return entities
  }

  // Extract feature mentions
  extractFeatureMentions(message) {
    const lowerMessage = message.toLowerCase()
    const features = []
    
    const featureMap = {
      'authentication': ['login', 'signin', 'register', 'signup', 'auth', 'user account'],
      'database': ['database', 'db', 'storage', 'data', 'persist', 'save'],
      'api': ['api', 'endpoint', 'service', 'backend', 'server'],
      'ui': ['interface', 'ui', 'design', 'layout', 'styling', 'theme'],
      'responsive': ['mobile', 'responsive', 'tablet', 'phone', 'screen size'],
      'search': ['search', 'find', 'filter', 'query', 'lookup'],
      'payment': ['payment', 'billing', 'stripe', 'paypal', 'checkout', 'money'],
      'notification': ['notification', 'alert', 'message', 'email', 'push'],
      'file': ['upload', 'download', 'file', 'image', 'document', 'attachment'],
      'security': ['security', 'secure', 'encryption', 'password', 'protection'],
      'testing': ['test', 'testing', 'unit test', 'integration', 'quality'],
      'deployment': ['deploy', 'hosting', 'production', 'live', 'publish']
    }

    Object.entries(featureMap).forEach(([feature, keywords]) => {
      if (keywords.some(keyword => lowerMessage.includes(keyword))) {
        features.push(feature)
      }
    })

    return features
  }

  // Extract technical terms
  extractTechnicalTerms(message) {
    const technicalTerms = [
      'component', 'function', 'class', 'method', 'variable', 'constant',
      'array', 'object', 'string', 'number', 'boolean', 'null', 'undefined',
      'async', 'await', 'promise', 'callback', 'event', 'handler',
      'state', 'props', 'hook', 'effect', 'context', 'reducer',
      'route', 'path', 'url', 'endpoint', 'request', 'response',
      'error', 'exception', 'validation', 'sanitization', 'security'
    ]

    return technicalTerms.filter(term => 
      message.toLowerCase().includes(term)
    )
  }

  // Determine conversation flow
  determineConversationFlow(intent, entities, features) {
    const flows = {
      create: 'development',
      add: 'incremental_development',
      modify: 'modification',
      explain: 'educational',
      ask: 'informational',
      help: 'support',
      recommend: 'advisory',
      debug: 'troubleshooting',
      optimize: 'optimization',
      test: 'testing',
      status: 'project_management',
      plan: 'planning',
      review: 'analysis'
    }

    return flows[intent] || 'general'
  }

  // Generate follow-up questions
  generateFollowUpQuestions(intent, entities, features) {
    const questionTemplates = {
      create: [
        "What type of app would you like to create?",
        "What features should it have?",
        "What's your target audience?",
        "Do you have any specific requirements?"
      ],
      add: [
        "Which specific feature would you like to add?",
        "How should this feature work?",
        "Where should it be integrated?",
        "Do you have any specific requirements for this feature?"
      ],
      modify: [
        "What exactly would you like to change?",
        "How should it work differently?",
        "What's the current behavior vs. desired behavior?",
        "Are there any specific constraints?"
      ],
      explain: [
        "What specific aspect would you like me to explain?",
        "What's your current understanding?",
        "Do you need a high-level overview or detailed explanation?",
        "Are you looking for code examples?"
      ],
      help: [
        "What specific area do you need help with?",
        "What are you trying to accomplish?",
        "What's your current skill level?",
        "Do you prefer step-by-step guidance or general advice?"
      ],
      debug: [
        "What error are you seeing?",
        "When does this issue occur?",
        "What were you doing when it happened?",
        "Can you share the error message or code?"
      ]
    }

    return questionTemplates[intent] || []
  }

  // Calculate confidence score
  calculateConfidence(intents, entities, features) {
    let confidence = 0
    
    // Intent confidence
    const intentCount = Object.values(intents).filter(Boolean).length
    confidence += intentCount * 0.3
    
    // Entity confidence
    const entityCount = Object.values(entities).flat().length
    confidence += Math.min(entityCount * 0.1, 0.3)
    
    // Feature confidence
    confidence += features.length * 0.1
    
    return Math.min(confidence, 1)
  }

  // Check if clarification is needed
  needsClarification(intent, entities, features) {
    // Low confidence or ambiguous requests
    if (this.calculateConfidence({}, entities, features) < 0.3) {
      return true
    }
    
    // Intent requires more context
    const clarificationIntents = ['create', 'add', 'modify', 'help']
    if (clarificationIntents.includes(intent) && entities.features.length === 0) {
      return true
    }
    
    return false
  }

  // Generate contextual response
  async generateContextualResponse(userMessage, analysis) {
    const { primaryIntent, entities, features, requiresClarification } = analysis
    
    // If clarification is needed, ask follow-up questions
    if (requiresClarification) {
      return this.generateClarificationResponse(analysis)
    }
    
    // Generate response based on intent
    switch (primaryIntent) {
      case 'create':
        return await this.handleCreateIntent(userMessage, analysis)
      case 'add':
        return await this.handleAddIntent(userMessage, analysis)
      case 'modify':
        return await this.handleModifyIntent(userMessage, analysis)
      case 'explain':
        return await this.handleExplainIntent(userMessage, analysis)
      case 'ask':
        return await this.handleAskIntent(userMessage, analysis)
      case 'help':
        return await this.handleHelpIntent(userMessage, analysis)
      case 'recommend':
        return await this.handleRecommendIntent(userMessage, analysis)
      case 'debug':
        return await this.handleDebugIntent(userMessage, analysis)
      case 'optimize':
        return await this.handleOptimizeIntent(userMessage, analysis)
      case 'test':
        return await this.handleTestIntent(userMessage, analysis)
      case 'status':
        return await this.handleStatusIntent(userMessage, analysis)
      case 'plan':
        return await this.handlePlanIntent(userMessage, analysis)
      case 'review':
        return await this.handleReviewIntent(userMessage, analysis)
      default:
        return await this.handleGeneralIntent(userMessage, analysis)
    }
  }

  // Handle create intent
  async handleCreateIntent(userMessage, analysis) {
    const { entities, features } = analysis
    const context = this.currentContext
    
    if (features.length > 0) {
      return `I'll help you create a new app with ${features.join(', ')} features! Based on your request, I can build a ${context?.appType || 'web'} application. Let me generate the initial code structure for you.`
    } else {
      return `I'd be happy to help you create a new app! To give you the best solution, could you tell me what type of app you want to build and what features it should have?`
    }
  }

  // Handle add intent
  async handleAddIntent(userMessage, analysis) {
    const { entities, features } = analysis
    const context = this.currentContext
    const currentFeatures = context?.currentFeatures || []
    
    if (features.length > 0) {
      const newFeatures = features.filter(f => !currentFeatures.includes(f))
      if (newFeatures.length > 0) {
        return `Perfect! I'll add ${newFeatures.join(', ')} to your existing app. I can see you currently have ${currentFeatures.join(', ')}. I'll integrate the new features without affecting your existing code.`
      } else {
        return `I notice you already have ${features.join(', ')} in your app. Would you like me to enhance these features or add something different?`
      }
    } else {
      return `I'd be happy to add new features to your app! What specific features would you like me to add? I can help with authentication, database integration, API connections, and much more.`
    }
  }

  // Handle modify intent
  async handleModifyIntent(userMessage, analysis) {
    const { entities, features } = analysis
    const context = this.currentContext
    const currentFeatures = context?.currentFeatures || []
    
    if (features.length > 0) {
      const existingFeatures = features.filter(f => currentFeatures.includes(f))
      if (existingFeatures.length > 0) {
        return `I'll help you modify ${existingFeatures.join(', ')} in your app. What specific changes would you like me to make to these features?`
      } else {
        return `I don't see ${features.join(', ')} in your current app. Would you like me to add these features instead, or are you referring to something else?`
      }
    } else {
      return `I'd be happy to help you modify your app! What specific aspects would you like to change? I can help with code improvements, feature enhancements, or structural changes.`
    }
  }

  // Handle explain intent
  async handleExplainIntent(userMessage, analysis) {
    const { entities, features } = analysis
    
    if (features.length > 0) {
      return `I'd be happy to explain ${features.join(', ')}! Let me provide you with a detailed explanation of how these features work and how to implement them effectively.`
    } else if (entities.technologies.length > 0) {
      return `I'll explain ${entities.technologies.join(', ')} for you! Let me break down how these technologies work and how they can benefit your project.`
    } else {
      return `I'd be happy to explain anything you'd like to know! What specific topic or concept would you like me to clarify?`
    }
  }

  // Handle ask intent
  async handleAskIntent(userMessage, analysis) {
    const { entities, features } = analysis
    
    return `Great question! Based on your query about ${features.length > 0 ? features.join(', ') : 'your project'}, let me provide you with a comprehensive answer. I'll make sure to cover all the important aspects you need to know.`
  }

  // Handle help intent
  async handleHelpIntent(userMessage, analysis) {
    const { entities, features } = analysis
    
    if (features.length > 0) {
      return `I'll help you with ${features.join(', ')}! Let me provide you with step-by-step guidance and best practices for implementing these features effectively.`
    } else {
      return `I'm here to help! I can assist you with development, debugging, optimization, and much more. What specific area would you like help with?`
    }
  }

  // Handle recommend intent
  async handleRecommendIntent(userMessage, analysis) {
    const { entities, features } = analysis
    const context = this.currentContext
    const currentFeatures = context?.currentFeatures || []
    
    return `Based on your current app with ${currentFeatures.join(', ')}, I recommend focusing on essential features first. Let me suggest some specific improvements that would benefit your project.`
  }

  // Handle debug intent
  async handleDebugIntent(userMessage, analysis) {
    const { entities, features } = analysis
    
    return `I'll help you debug this issue! Let me analyze the problem and provide you with a solution. Can you share more details about the error or issue you're experiencing?`
  }

  // Handle optimize intent
  async handleOptimizeIntent(userMessage, analysis) {
    const { entities, features } = analysis
    
    return `I'll help you optimize your app! Let me analyze your current setup and provide specific recommendations for improving performance, code quality, and user experience.`
  }

  // Handle test intent
  async handleTestIntent(userMessage, analysis) {
    const { entities, features } = analysis
    
    return `I'll help you implement testing for your app! Let me set up a comprehensive testing strategy that covers unit tests, integration tests, and quality assurance.`
  }

  // Handle status intent
  async handleStatusIntent(userMessage, analysis) {
    const context = this.currentContext
    const currentFeatures = context?.currentFeatures || []
    
    return `Here's your current project status: You have a ${context?.appType || 'web'} app with ${currentFeatures.length} features: ${currentFeatures.join(', ')}. The app is ready for further development or deployment.`
  }

  // Handle plan intent
  async handlePlanIntent(userMessage, analysis) {
    const context = this.currentContext
    const currentFeatures = context?.currentFeatures || []
    
    return `Let me create a development plan for you! Based on your current features (${currentFeatures.join(', ')}), I'll suggest the next steps and prioritize what to work on next.`
  }

  // Handle review intent
  async handleReviewIntent(userMessage, analysis) {
    const context = this.currentContext
    const currentFeatures = context?.currentFeatures || []
    
    return `I'll conduct a comprehensive review of your app! Let me analyze your current implementation, check for best practices, and provide recommendations for improvement.`
  }

  // Handle general intent
  async handleGeneralIntent(userMessage, analysis) {
    const { entities, features } = analysis
    
    return `I understand you want to work on: "${userMessage}". I can help you with development, feature suggestions, debugging, optimization, or any other aspect of your project. What would you like to focus on?`
  }

  // Generate clarification response
  generateClarificationResponse(analysis) {
    const { followUpQuestions } = analysis
    
    if (followUpQuestions.length > 0) {
      return `I'd be happy to help! To give you the best solution, could you clarify: ${followUpQuestions[0]}`
    } else {
      return `I'd be happy to help! Could you provide more details about what you'd like to accomplish?`
    }
  }

  // Update conversation history
  async updateConversationHistory(userMessage, response, analysis) {
    const message = {
      id: `msg_${Date.now()}`,
      type: 'user',
      content: userMessage,
      timestamp: new Date(),
      analysis: analysis
    }

    const aiResponse = {
      id: `msg_${Date.now()}_ai`,
      type: 'ai',
      content: response,
      timestamp: new Date(),
      intent: analysis.primaryIntent,
      confidence: analysis.confidence
    }

    this.conversationHistory.push(message, aiResponse)
    
    // Save to conversation service
    await conversationService.addMessage(userMessage, response, 'ai')
  }

  // Get conversation summary
  getConversationSummary() {
    return {
      messageCount: this.conversationHistory.length,
      lastIntent: this.lastUserIntent,
      currentState: this.conversationState,
      context: this.currentContext
    }
  }

  // Reset conversation
  reset() {
    this.conversationHistory = []
    this.currentContext = null
    this.conversationState = 'idle'
    this.lastUserIntent = null
    this.followUpQuestions = []
  }
}

export default new AdvancedConversationService()
