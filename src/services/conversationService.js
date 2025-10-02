// DreamBuild Conversation Service
// Handles continuous conversations, context memory, and intelligent feature recommendations

import firebaseService from './firebaseService.js'

class ConversationService {
  constructor() {
    this.currentConversation = null
    this.conversationHistory = []
    this.projectContext = {}
    this.featureRecommendations = []
    this.industryStandards = this.getIndustryStandards()
    this.isSaving = false // Prevent infinite recursion
  }

  // Initialize conversation for a project
  async initializeConversation(projectId, projectData = {}) {
    try {
      this.currentConversation = {
        id: projectId || `conv_${Date.now()}`,
        projectData,
        messages: [],
        context: {
          currentFeatures: projectData.features || [],
          techStack: projectData.techStack || [],
          appType: projectData.appType || 'web',
          complexity: projectData.complexity || 'basic',
          industry: projectData.industry || 'general'
        },
        createdAt: new Date(),
        lastModified: new Date()
      }

      // Load existing conversation if available
      await this.loadConversationHistory(projectId)
      
      console.log('🔄 Conversation initialized for project:', projectId)
      return this.currentConversation
    } catch (error) {
      console.error('Failed to initialize conversation:', error)
      throw error
    }
  }

  // Add a message to the conversation
  async addMessage(userMessage, aiResponse = null, messageType = 'user') {
    if (!this.currentConversation) {
      throw new Error('No active conversation. Initialize conversation first.')
    }

    const message = {
      id: `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      type: messageType,
      content: userMessage,
      aiResponse: aiResponse,
      timestamp: new Date(),
      context: {
        projectState: { ...this.currentConversation.context },
        features: [...this.currentConversation.context.currentFeatures]
      }
    }

    this.currentConversation.messages.push(message)
    this.currentConversation.lastModified = new Date()

    // TEMPORARILY DISABLED: Firebase saving disabled due to quota exhaustion
    // This allows code generation to work while quota is exhausted
    // await this.saveConversation()
    console.log('⚠️ Conversation saving temporarily disabled (quota exhausted)')

    return message
  }

  // Get conversation context for AI
  getConversationContext() {
    if (!this.currentConversation) return null

    const recentMessages = this.currentConversation.messages.slice(-10) // Last 10 messages
    const context = {
      project: this.currentConversation.projectData,
      currentFeatures: this.currentConversation.context.currentFeatures,
      techStack: this.currentConversation.context.techStack,
      appType: this.currentConversation.context.appType,
      complexity: this.currentConversation.context.complexity,
      industry: this.currentConversation.context.industry,
      recentMessages: recentMessages.map(msg => ({
        type: msg.type,
        content: msg.content,
        timestamp: msg.timestamp
      })),
      conversationId: this.currentConversation.id
    }

    return context
  }

  // Generate intelligent feature recommendations
  async generateFeatureRecommendations() {
    if (!this.currentConversation) return []

    // Check if the last message was a general question (not code generation)
    const lastMessage = this.currentConversation.messages[this.currentConversation.messages.length - 1]
    if (lastMessage && lastMessage.aiResponse && lastMessage.aiResponse.type === 'conversational_response') {
      console.log('❓ Last message was conversational, skipping feature recommendations')
      return []
    }

    const context = this.getConversationContext()
    const currentFeatures = context.currentFeatures || []
    const appType = context.appType || 'web'
    const industry = context.industry || 'general'
    const complexity = context.complexity || 'basic'

    // Get industry-specific recommendations
    const industryRecs = this.getIndustrySpecificRecommendations(industry, appType)
    
    // Get complexity-based recommendations
    const complexityRecs = this.getComplexityBasedRecommendations(complexity, appType)
    
    // Get missing essential features
    const essentialRecs = this.getEssentialFeatureRecommendations(currentFeatures, appType)
    
    // Get advanced feature suggestions
    const advancedRecs = this.getAdvancedFeatureRecommendations(currentFeatures, appType, industry)

    // Combine and prioritize recommendations
    const allRecommendations = [
      ...essentialRecs,
      ...industryRecs,
      ...complexityRecs,
      ...advancedRecs
    ]

    // Remove duplicates and already implemented features
    const uniqueRecommendations = this.deduplicateRecommendations(allRecommendations, currentFeatures)
    
    // Sort by priority and relevance
    const prioritizedRecommendations = this.prioritizeRecommendations(uniqueRecommendations, context)

    this.featureRecommendations = prioritizedRecommendations.slice(0, 10) // Top 10 recommendations
    return this.featureRecommendations
  }

  // Get industry-specific recommendations
  getIndustrySpecificRecommendations(industry, appType) {
    const industryMap = {
      'ecommerce': [
        { name: 'Shopping Cart', description: 'Add shopping cart functionality with add/remove items', priority: 'high', category: 'core' },
        { name: 'Payment Integration', description: 'Integrate payment processing (Stripe, PayPal)', priority: 'high', category: 'payment' },
        { name: 'Product Search', description: 'Add search and filter functionality for products', priority: 'medium', category: 'search' },
        { name: 'User Reviews', description: 'Allow customers to review and rate products', priority: 'medium', category: 'social' },
        { name: 'Inventory Management', description: 'Track product stock and availability', priority: 'high', category: 'management' }
      ],
      'healthcare': [
        { name: 'Patient Records', description: 'Secure patient data management system', priority: 'high', category: 'data' },
        { name: 'Appointment Scheduling', description: 'Calendar system for booking appointments', priority: 'high', category: 'scheduling' },
        { name: 'HIPAA Compliance', description: 'Ensure healthcare data privacy compliance', priority: 'critical', category: 'security' },
        { name: 'Prescription Management', description: 'Digital prescription tracking and management', priority: 'medium', category: 'management' },
        { name: 'Telemedicine', description: 'Video consultation capabilities', priority: 'medium', category: 'communication' }
      ],
      'education': [
        { name: 'Course Management', description: 'Create and manage educational courses', priority: 'high', category: 'content' },
        { name: 'Progress Tracking', description: 'Track student learning progress and analytics', priority: 'high', category: 'analytics' },
        { name: 'Quiz System', description: 'Interactive quizzes and assessments', priority: 'medium', category: 'assessment' },
        { name: 'Discussion Forums', description: 'Student and teacher discussion boards', priority: 'medium', category: 'social' },
        { name: 'Certificate Generation', description: 'Automated certificate creation and delivery', priority: 'low', category: 'certification' }
      ],
      'finance': [
        { name: 'Transaction History', description: 'Detailed financial transaction tracking', priority: 'high', category: 'data' },
        { name: 'Budget Planning', description: 'Personal or business budget management tools', priority: 'high', category: 'planning' },
        { name: 'Security Features', description: 'Two-factor authentication and encryption', priority: 'critical', category: 'security' },
        { name: 'Reporting Dashboard', description: 'Financial reports and analytics dashboard', priority: 'medium', category: 'analytics' },
        { name: 'Investment Tracking', description: 'Portfolio and investment performance tracking', priority: 'medium', category: 'investment' }
      ],
      'general': [
        { name: 'User Authentication', description: 'Secure user login and registration system', priority: 'high', category: 'auth' },
        { name: 'Data Validation', description: 'Input validation and error handling', priority: 'high', category: 'validation' },
        { name: 'Responsive Design', description: 'Mobile-friendly responsive layout', priority: 'high', category: 'ui' },
        { name: 'Search Functionality', description: 'Search and filter capabilities', priority: 'medium', category: 'search' },
        { name: 'Analytics Integration', description: 'User behavior and performance analytics', priority: 'medium', category: 'analytics' }
      ]
    }

    return industryMap[industry] || industryMap['general']
  }

  // Get complexity-based recommendations
  getComplexityBasedRecommendations(complexity, appType) {
    const complexityMap = {
      'basic': [
        { name: 'Basic CRUD Operations', description: 'Create, Read, Update, Delete functionality', priority: 'high', category: 'core' },
        { name: 'Form Validation', description: 'Client-side and server-side form validation', priority: 'high', category: 'validation' },
        { name: 'Error Handling', description: 'Comprehensive error handling and user feedback', priority: 'medium', category: 'ux' }
      ],
      'intermediate': [
        { name: 'API Integration', description: 'Connect to external APIs and services', priority: 'high', category: 'integration' },
        { name: 'State Management', description: 'Advanced state management (Redux, Context)', priority: 'medium', category: 'architecture' },
        { name: 'Caching Strategy', description: 'Implement caching for better performance', priority: 'medium', category: 'performance' },
        { name: 'Testing Suite', description: 'Unit and integration tests', priority: 'medium', category: 'testing' }
      ],
      'advanced': [
        { name: 'Microservices Architecture', description: 'Break down into microservices', priority: 'high', category: 'architecture' },
        { name: 'Real-time Features', description: 'WebSocket or Server-Sent Events', priority: 'high', category: 'realtime' },
        { name: 'Advanced Security', description: 'OAuth, JWT, rate limiting, security headers', priority: 'high', category: 'security' },
        { name: 'Performance Optimization', description: 'Code splitting, lazy loading, CDN', priority: 'high', category: 'performance' },
        { name: 'Monitoring & Logging', description: 'Application monitoring and logging system', priority: 'medium', category: 'monitoring' }
      ]
    }

    return complexityMap[complexity] || complexityMap['basic']
  }

  // Get essential feature recommendations
  getEssentialFeatureRecommendations(currentFeatures, appType) {
    const essentialFeatures = [
      { name: 'Error Boundaries', description: 'React error boundaries for graceful error handling', priority: 'high', category: 'reliability' },
      { name: 'Loading States', description: 'Loading indicators and skeleton screens', priority: 'high', category: 'ux' },
      { name: 'Accessibility (a11y)', description: 'WCAG compliance and screen reader support', priority: 'high', category: 'accessibility' },
      { name: 'SEO Optimization', description: 'Meta tags, structured data, sitemap', priority: 'medium', category: 'seo' },
      { name: 'Performance Monitoring', description: 'Core Web Vitals and performance tracking', priority: 'medium', category: 'performance' }
    ]

    return essentialFeatures.filter(feature => 
      !currentFeatures.some(current => 
        current.toLowerCase().includes(feature.name.toLowerCase()) ||
        feature.name.toLowerCase().includes(current.toLowerCase())
      )
    )
  }

  // Get advanced feature recommendations
  getAdvancedFeatureRecommendations(currentFeatures, appType, industry) {
    const advancedFeatures = [
      { name: 'PWA Support', description: 'Progressive Web App capabilities', priority: 'medium', category: 'mobile' },
      { name: 'Offline Support', description: 'Service worker for offline functionality', priority: 'medium', category: 'offline' },
      { name: 'Internationalization', description: 'Multi-language support (i18n)', priority: 'low', category: 'localization' },
      { name: 'Dark Mode', description: 'Theme switching and dark mode support', priority: 'low', category: 'ui' },
      { name: 'Advanced Analytics', description: 'User behavior tracking and heatmaps', priority: 'low', category: 'analytics' }
    ]

    return advancedFeatures
  }

  // Deduplicate recommendations
  deduplicateRecommendations(recommendations, currentFeatures) {
    const seen = new Set()
    return recommendations.filter(rec => {
      const key = rec.name.toLowerCase()
      if (seen.has(key)) return false
      if (currentFeatures.some(feature => 
        feature.toLowerCase().includes(key) || key.includes(feature.toLowerCase())
      )) return false
      seen.add(key)
      return true
    })
  }

  // Prioritize recommendations based on context
  prioritizeRecommendations(recommendations, context) {
    return recommendations.sort((a, b) => {
      const priorityOrder = { 'critical': 4, 'high': 3, 'medium': 2, 'low': 1 }
      const aPriority = priorityOrder[a.priority] || 0
      const bPriority = priorityOrder[b.priority] || 0
      
      if (aPriority !== bPriority) return bPriority - aPriority
      
      // If same priority, sort by category relevance
      const categoryRelevance = {
        'core': 4, 'security': 4, 'auth': 3, 'validation': 3, 'ux': 2, 'performance': 2
      }
      const aRelevance = categoryRelevance[a.category] || 1
      const bRelevance = categoryRelevance[b.category] || 1
      
      return bRelevance - aRelevance
    })
  }

  // Get industry standards checklist
  getIndustryStandards() {
    return {
      'security': [
        'Input validation and sanitization',
        'HTTPS enforcement',
        'Authentication and authorization',
        'Rate limiting and DDoS protection',
        'Security headers (CSP, HSTS, etc.)',
        'Regular security audits'
      ],
      'performance': [
        'Core Web Vitals optimization',
        'Image optimization and lazy loading',
        'Code splitting and tree shaking',
        'CDN implementation',
        'Caching strategies',
        'Database query optimization'
      ],
      'accessibility': [
        'WCAG 2.1 AA compliance',
        'Keyboard navigation support',
        'Screen reader compatibility',
        'Color contrast ratios',
        'Alt text for images',
        'Focus management'
      ],
      'code_quality': [
        'TypeScript implementation',
        'ESLint and Prettier configuration',
        'Unit and integration tests',
        'Code documentation',
        'Error handling and logging',
        'Code review process'
      ],
      'deployment': [
        'CI/CD pipeline setup',
        'Environment configuration',
        'Monitoring and alerting',
        'Backup and recovery',
        'Scalability planning',
        'Documentation and runbooks'
      ]
    }
  }

  // Check project against industry standards
  async checkIndustryStandards(projectData) {
    const standards = this.getIndustryStandards()
    const currentFeatures = projectData.features || []
    const results = {}

    Object.keys(standards).forEach(category => {
      results[category] = {
        total: standards[category].length,
        implemented: 0,
        missing: [],
        score: 0
      }

      standards[category].forEach(standard => {
        const isImplemented = currentFeatures.some(feature => 
          feature.toLowerCase().includes(standard.toLowerCase()) ||
          standard.toLowerCase().includes(feature.toLowerCase())
        )

        if (isImplemented) {
          results[category].implemented++
        } else {
          results[category].missing.push(standard)
        }
      })

      results[category].score = Math.round((results[category].implemented / results[category].total) * 100)
    })

    return results
  }

  // Generate conversation summary
  generateConversationSummary() {
    if (!this.currentConversation) return null

    const messages = this.currentConversation.messages
    const features = this.currentConversation.context.currentFeatures
    const recommendations = this.featureRecommendations

    return {
      conversationId: this.currentConversation.id,
      messageCount: messages.length,
      currentFeatures: features,
      recommendations: recommendations.slice(0, 5), // Top 5 recommendations
      lastActivity: this.currentConversation.lastModified,
      projectType: this.currentConversation.context.appType,
      industry: this.currentConversation.context.industry
    }
  }

  // Save conversation to Firebase
  async saveConversation() {
    if (!this.currentConversation) return

    // Prevent infinite recursion
    if (this.isSaving) {
      console.log('⚠️ Already saving conversation, skipping duplicate save')
      return
    }

    try {
      // Skip saving if no valid conversation ID
      if (!this.currentConversation.id) {
        console.log('⚠️ No conversation ID, skipping save')
        return
      }
      
      this.isSaving = true
      await firebaseService.saveConversation(this.currentConversation)
      console.log('💾 Conversation saved to Firebase')
    } catch (error) {
      // Handle quota exceeded errors gracefully
      if (error.code === 'resource-exhausted' || error.message?.includes('Quota exceeded')) {
        console.warn('⚠️ Firebase quota exceeded - conversation NOT saved (app continues normally)')
        console.warn('💡 To save conversations: wait for quota reset or upgrade to Blaze plan')
        // Don't throw - allow the app to continue
        return
      }
      console.error('Failed to save conversation:', error)
      // Don't throw for other errors either - just log them
    } finally {
      this.isSaving = false
    }
  }

  // Load conversation history
  async loadConversationHistory(projectId) {
    try {
      // Skip loading if projectId is null or undefined
      if (!projectId) {
        console.log('⚠️ No projectId provided, skipping conversation history load')
        return
      }
      
      const conversation = await firebaseService.getConversation(projectId)
      if (conversation) {
        this.currentConversation = conversation
        this.conversationHistory = conversation.messages || []
        console.log('📚 Conversation history loaded')
      }
    } catch (error) {
      console.error('Failed to load conversation history:', error)
    }
  }

  // Get conversation history
  getConversationHistory() {
    return this.currentConversation ? this.currentConversation.messages : []
  }

  // Clear conversation
  clearConversation() {
    this.currentConversation = null
    this.conversationHistory = []
    this.projectContext = {}
    this.featureRecommendations = []
  }
}

export default new ConversationService()
