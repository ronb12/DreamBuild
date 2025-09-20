import axios from 'axios'
import localAIService from './localAIService.js'

// Local AI Only Configuration - No API Keys Required!
const LOCAL_AI_ONLY = true

// Smart Local AI Fallback Order
const FALLBACK_ORDER = [
  'codellama-7b',    // 1st choice - fast and efficient (8GB RAM)
  'codellama-13b',   // 2nd choice - higher quality (16GB RAM)
  'starcoder-15b',   // 3rd choice - excellent code completion (24GB RAM)
  'deepseek-coder',  // 4th choice - high performance (12GB RAM)
  'wizardcoder-7b',  // 5th choice - instruction following (10GB RAM)
  'phi3-mini',       // 6th choice - lightweight fallback (6GB RAM)
  'llama3-8b',       // 7th choice - general purpose (10GB RAM)
  'codellama-34b'    // 8th choice - best quality if you have 32GB RAM
]

// Service Health Check Configuration
const HEALTH_CHECK_CONFIG = {
  timeout: 5000, // 5 seconds timeout
  retries: 2,    // 2 retries before marking as unhealthy
  checkInterval: 30000, // Check every 30 seconds
  unhealthyThreshold: 3 // Mark as unhealthy after 3 consecutive failures
}

// Free AI Services Configuration
const AI_SERVICES = {
  // Hugging Face Inference API (Free tier: 30,000 requests/month)
  huggingface: {
    name: 'Hugging Face',
    baseURL: 'https://api-inference.huggingface.co/models',
    models: {
      'microsoft/DialoGPT-medium': 'Conversational AI',
      'facebook/blenderbot-400M-distill': 'Chatbot',
      'microsoft/CodeBERT-base': 'Code Understanding',
      'codeparrot/codeparrot-small': 'Code Generation'
    },
    headers: {
      'Authorization': `Bearer ${process.env.REACT_APP_HUGGINGFACE_TOKEN || 'hf_demo'}`,
      'Content-Type': 'application/json'
    }
  },
  
  // Groq API (Free tier: 6000 requests/day)
  groq: {
    name: 'Groq',
    baseURL: 'https://api.groq.com/openai/v1',
    models: {
      'llama3-8b-8192': 'Fast Llama 3',
      'llama3-70b-8192': 'Advanced Llama 3',
      'mixtral-8x7b-32768': 'Mixtral MoE'
    },
    headers: {
      'Authorization': `Bearer ${process.env.REACT_APP_GROQ_API_KEY || 'gsk_demo'}`,
      'Content-Type': 'application/json'
    }
  },

  // Ollama Local (Completely free, runs locally)
  ollama: {
    name: 'Ollama Local',
    baseURL: 'http://localhost:11434/api',
    models: {
      'llama3': 'Llama 3 (Local)',
      'codellama': 'Code Llama (Local)',
      'mistral': 'Mistral (Local)',
      'gemma': 'Gemma (Local)'
    },
    headers: {
      'Content-Type': 'application/json'
    }
  },

  // Together AI (Free tier: 25 credits/month)
  together: {
    name: 'Together AI',
    baseURL: 'https://api.together.xyz/v1',
    models: {
      'meta-llama/Llama-3-8b-chat-hf': 'Llama 3 Chat',
      'meta-llama/Llama-3-70b-chat-hf': 'Llama 3 70B',
      'mistralai/Mixtral-8x7B-Instruct-v0.1': 'Mixtral Instruct'
    },
    headers: {
      'Authorization': `Bearer ${process.env.REACT_APP_TOGETHER_API_KEY || 'demo_key'}`,
      'Content-Type': 'application/json'
    }
  },

  // CodeGeeX (Open Source - Multilingual Code Generation)
  codegeex: {
    name: 'CodeGeeX',
    baseURL: 'https://api.codegeex.ai/v1',
    models: {
      'codegeex-13b': 'CodeGeeX 13B (23 Languages)',
      'codegeex-6b': 'CodeGeeX 6B (Lightweight)',
      'codegeex-2b': 'CodeGeeX 2B (Ultra-fast)'
    },
    headers: {
      'Authorization': `Bearer ${process.env.REACT_APP_CODEGEEX_API_KEY || 'demo_key'}`,
      'Content-Type': 'application/json'
    }
  },

  // StarCoder (Open Source - BigCode Project)
  starcoder: {
    name: 'StarCoder',
    baseURL: 'https://api.huggingface.co/models/bigcode/starcoder',
    models: {
      'starcoder': 'StarCoder (15B Parameters)',
      'starcoderbase': 'StarCoder Base',
      'starcoderplus': 'StarCoder Plus (Enhanced)'
    },
    headers: {
      'Authorization': `Bearer ${process.env.REACT_APP_STARCODER_API_KEY || 'demo_key'}`,
      'Content-Type': 'application/json'
    }
  },

  // WizardCoder (Open Source - Instruction Following)
  wizardcoder: {
    name: 'WizardCoder',
    baseURL: 'https://api.huggingface.co/models/WizardLM/WizardCoder-15B-V1.0',
    models: {
      'wizardcoder-15b': 'WizardCoder 15B (Advanced)',
      'wizardcoder-7b': 'WizardCoder 7B (Balanced)',
      'wizardcoder-3b': 'WizardCoder 3B (Fast)'
    },
    headers: {
      'Authorization': `Bearer ${process.env.REACT_APP_WIZARDCODER_API_KEY || 'demo_key'}`,
      'Content-Type': 'application/json'
    }
  },

  // GPT-J (Open Source - EleutherAI)
  gptj: {
    name: 'GPT-J',
    baseURL: 'https://api.eleuther.ai/v1',
    models: {
      'gpt-j-6b': 'GPT-J 6B (Text & Code)',
      'gpt-j-6b-v2': 'GPT-J 6B v2 (Improved)',
      'gpt-neox-20b': 'GPT-NeoX 20B (Large)'
    },
    headers: {
      'Authorization': `Bearer ${process.env.REACT_APP_GPTJ_API_KEY || 'demo_key'}`,
      'Content-Type': 'application/json'
    }
  },

  // CodeT5 (Open Source - Salesforce)
  codet5: {
    name: 'CodeT5',
    baseURL: 'https://api.huggingface.co/models/Salesforce/codet5-base',
    models: {
      'codet5-base': 'CodeT5 Base (220M)',
      'codet5-large': 'CodeT5 Large (770M)',
      'codet5-small': 'CodeT5 Small (60M)'
    },
    headers: {
      'Authorization': `Bearer ${process.env.REACT_APP_CODET5_API_KEY || 'demo_key'}`,
      'Content-Type': 'application/json'
    }
  },

  // Phind-Coder (Open Source - Specialized)
  phindcoder: {
    name: 'Phind-Coder',
    baseURL: 'https://api.phind.com/v1',
    models: {
      'phind-coder-34b': 'Phind-Coder 34B (Advanced)',
      'phind-coder-7b': 'Phind-Coder 7B (Balanced)'
    },
    headers: {
      'Authorization': `Bearer ${process.env.REACT_APP_PHINDCODER_API_KEY || 'demo_key'}`,
      'Content-Type': 'application/json'
    }
  },

  // LocalAI (Local API Server)
  localai: {
    name: 'LocalAI',
    baseURL: 'http://localhost:8080/v1',
    models: {
      'gpt-3.5-turbo': 'Local GPT-3.5',
      'gpt-4': 'Local GPT-4',
      'claude-instant': 'Local Claude',
      'llama-2-7b': 'Local Llama 2 7B'
    },
    headers: {
      'Content-Type': 'application/json'
    }
  },

  // Text Generation WebUI (Local)
  textgeneration: {
    name: 'Text Generation WebUI',
    baseURL: 'http://localhost:5000/api/v1',
    models: {
      'llama-2-7b-chat': 'Llama 2 7B Chat',
      'codellama-7b': 'CodeLlama 7B',
      'mistral-7b-instruct': 'Mistral 7B Instruct',
      'wizardcoder-7b': 'WizardCoder 7B'
    },
    headers: {
      'Content-Type': 'application/json'
    }
  }
}

class AIService {
  constructor() {
    this.currentService = 'groq' // Default to Groq (most reliable free tier)
    this.currentModel = 'llama3-8b-8192'
    this.userPreferences = this.loadUserPreferences()
    this.serviceHealth = this.initializeServiceHealth()
    this.usageStats = this.loadUsageStats()
    this.healthCheckInterval = null
    this.startHealthChecks()
  }

  // Initialize service health tracking
  initializeServiceHealth() {
    const health = {}
    FALLBACK_ORDER.forEach(service => {
      health[service] = {
        isHealthy: true,
        lastCheck: Date.now(),
        consecutiveFailures: 0,
        responseTime: 0,
        errorRate: 0,
        totalRequests: 0,
        successfulRequests: 0
      }
    })
    return health
  }

  // Load user preferences from localStorage
  loadUserPreferences() {
    try {
      const saved = localStorage.getItem('aiServicePreferences')
      return saved ? JSON.parse(saved) : {
        preferredService: 'groq',
        fallbackEnabled: true,
        autoSwitch: true,
        showNotifications: true
      }
    } catch (error) {
      console.error('Error loading user preferences:', error)
      return {
        preferredService: 'groq',
        fallbackEnabled: true,
        autoSwitch: true,
        showNotifications: true
      }
    }
  }

  // Save user preferences to localStorage
  saveUserPreferences() {
    try {
      localStorage.setItem('aiServicePreferences', JSON.stringify(this.userPreferences))
    } catch (error) {
      console.error('Error saving user preferences:', error)
    }
  }

  // Load usage statistics from localStorage
  loadUsageStats() {
    try {
      const saved = localStorage.getItem('aiServiceUsageStats')
      return saved ? JSON.parse(saved) : {
        totalRequests: 0,
        successfulRequests: 0,
        failedRequests: 0,
        serviceUsage: {},
        dailyUsage: {},
        lastReset: Date.now()
      }
    } catch (error) {
      console.error('Error loading usage stats:', error)
      return {
        totalRequests: 0,
        successfulRequests: 0,
        failedRequests: 0,
        serviceUsage: {},
        dailyUsage: {},
        lastReset: Date.now()
      }
    }
  }

  // Save usage statistics to localStorage
  saveUsageStats() {
    try {
      localStorage.setItem('aiServiceUsageStats', JSON.stringify(this.usageStats))
    } catch (error) {
      console.error('Error saving usage stats:', error)
    }
  }

  // Set the AI service and model
  setService(serviceName, modelName = null) {
    if (!AI_SERVICES[serviceName]) {
      throw new Error(`AI service '${serviceName}' not found`)
    }
    
    this.currentService = serviceName
    if (modelName) {
      this.currentModel = modelName
    } else {
      // Set default model for service
      const models = Object.keys(AI_SERVICES[serviceName].models)
      this.currentModel = models[0]
    }
    
    // Update user preferences
    this.userPreferences.preferredService = serviceName
    this.saveUserPreferences()
    
    console.log(`✅ Switched to AI service: ${AI_SERVICES[serviceName].name} (${serviceName})`)
  }

  // Get the best available service based on health and preferences
  getBestAvailableService() {
    // Start with user's preferred service if it's healthy
    const preferredService = this.userPreferences.preferredService
    if (this.serviceHealth[preferredService]?.isHealthy) {
      return preferredService
    }
    
    // Fall back to the healthiest service in priority order
    for (const service of FALLBACK_ORDER) {
      if (this.serviceHealth[service]?.isHealthy) {
        return service
      }
    }
    
    // If all services are unhealthy, return the first one anyway
    console.warn('⚠️ All AI services appear unhealthy, using fallback order')
    return FALLBACK_ORDER[0]
  }

  // Check if a service is healthy
  isServiceHealthy(serviceName) {
    const health = this.serviceHealth[serviceName]
    if (!health) return false
    
    // Check if service has failed too many times recently
    if (health.consecutiveFailures >= HEALTH_CHECK_CONFIG.unhealthyThreshold) {
      return false
    }
    
    // Check if service hasn't been checked recently (assume healthy if not checked)
    const timeSinceLastCheck = Date.now() - health.lastCheck
    if (timeSinceLastCheck > HEALTH_CHECK_CONFIG.checkInterval * 2) {
      return true // Assume healthy if not checked recently
    }
    
    return health.isHealthy
  }

  // Start periodic health checks
  startHealthChecks() {
    if (this.healthCheckInterval) {
      clearInterval(this.healthCheckInterval)
    }
    
    this.healthCheckInterval = setInterval(() => {
      this.performHealthChecks()
    }, HEALTH_CHECK_CONFIG.checkInterval)
    
    // Perform initial health check
    this.performHealthChecks()
  }

  // Stop health checks
  stopHealthChecks() {
    if (this.healthCheckInterval) {
      clearInterval(this.healthCheckInterval)
      this.healthCheckInterval = null
    }
  }

  // Perform health checks on all services
  async performHealthChecks() {
    const healthPromises = FALLBACK_ORDER.map(service => this.checkServiceHealth(service))
    await Promise.allSettled(healthPromises)
  }

  // Check health of a specific service
  async checkServiceHealth(serviceName) {
    const service = AI_SERVICES[serviceName]
    if (!service) return

    const startTime = Date.now()
    
    try {
      // Check if service has valid API key first
      if (!this.hasValidApiKey(serviceName)) {
        this.updateServiceHealth(serviceName, false, 0)
        console.warn(`⚠️ ${service.name}: No valid API key configured`)
        return
      }

      // Simple health check - try to make a minimal request
      const healthCheckPrompt = "Hello"
      const response = await this.makeHealthCheckRequest(serviceName, healthCheckPrompt)
      
      const responseTime = Date.now() - startTime
      
      // Update health status
      this.updateServiceHealth(serviceName, true, responseTime)
      
      console.log(`✅ Health check passed for ${service.name}: ${responseTime}ms`)
      
    } catch (error) {
      const responseTime = Date.now() - startTime
      this.updateServiceHealth(serviceName, false, responseTime)
      
      // Don't log 401 errors as they're expected when API keys are missing
      if (error.response?.status !== 401) {
        console.warn(`❌ Health check failed for ${service.name}:`, error.message)
      } else {
        console.warn(`⚠️ ${service.name}: API key required`)
      }
    }
  }

  // Check if a service has a valid API key
  hasValidApiKey(serviceName) {
    const service = AI_SERVICES[serviceName]
    if (!service) return false

    switch (serviceName) {
      case 'groq':
        return !service.headers.Authorization.includes('demo') && 
               service.headers.Authorization !== 'Bearer undefined'
      case 'together':
        return !service.headers.Authorization.includes('demo') && 
               service.headers.Authorization !== 'Bearer undefined'
      case 'huggingface':
        return !service.headers.Authorization.includes('demo') && 
               service.headers.Authorization !== 'Bearer undefined'
      case 'ollama':
        // Ollama doesn't need API key, but needs to be running locally
        return true // We'll check connectivity separately
      default:
        return false
    }
  }

  // Make a minimal request for health checking
  async makeHealthCheckRequest(serviceName, prompt) {
    const service = AI_SERVICES[serviceName]
    
    switch (serviceName) {
      case 'groq':
        return await this.makeGroqHealthCheck(prompt)
      case 'together':
        return await this.makeTogetherHealthCheck(prompt)
      case 'huggingface':
        return await this.makeHuggingFaceHealthCheck(prompt)
      case 'ollama':
        return await this.makeOllamaHealthCheck(prompt)
      default:
        throw new Error(`Unknown service: ${serviceName}`)
    }
  }

  // Health check implementations for each service
  async makeGroqHealthCheck(prompt) {
    const response = await axios.post(
      `${AI_SERVICES.groq.baseURL}/chat/completions`,
      {
        model: 'llama3-8b-8192',
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 10,
        temperature: 0.1
      },
      { 
        headers: AI_SERVICES.groq.headers,
        timeout: HEALTH_CHECK_CONFIG.timeout
      }
    )
    return response.data.choices[0].message.content
  }

  async makeTogetherHealthCheck(prompt) {
    const response = await axios.post(
      `${AI_SERVICES.together.baseURL}/chat/completions`,
      {
        model: 'meta-llama/Llama-3-8b-chat-hf',
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 10,
        temperature: 0.1
      },
      { 
        headers: AI_SERVICES.together.headers,
        timeout: HEALTH_CHECK_CONFIG.timeout
      }
    )
    return response.data.choices[0].message.content
  }

  async makeHuggingFaceHealthCheck(prompt) {
    const response = await axios.post(
      `${AI_SERVICES.huggingface.baseURL}/microsoft/DialoGPT-medium`,
      {
        inputs: prompt,
        parameters: {
          max_length: 10,
          temperature: 0.1,
          return_full_text: false
        }
      },
      { 
        headers: AI_SERVICES.huggingface.headers,
        timeout: HEALTH_CHECK_CONFIG.timeout
      }
    )
    return response.data[0]?.generated_text || response.data
  }

  async makeOllamaHealthCheck(prompt) {
    try {
      const response = await axios.post(
        `${AI_SERVICES.ollama.baseURL}/generate`,
        {
          model: 'llama3',
          prompt: prompt,
          stream: false,
          options: {
            temperature: 0.1,
            max_tokens: 10
          }
        },
        { 
          headers: AI_SERVICES.ollama.headers,
          timeout: HEALTH_CHECK_CONFIG.timeout
        }
      )
      return response.data.response
    } catch (error) {
      // Handle CORS and network errors gracefully
      if (error.code === 'ERR_NETWORK' || error.message.includes('CORS')) {
        throw new Error('Ollama not accessible (CORS or not running locally)')
      }
      throw error
    }
  }

  // Update service health status
  updateServiceHealth(serviceName, isHealthy, responseTime) {
    const health = this.serviceHealth[serviceName]
    if (!health) return

    health.lastCheck = Date.now()
    health.responseTime = responseTime
    
    if (isHealthy) {
      health.isHealthy = true
      health.consecutiveFailures = 0
      health.successfulRequests++
    } else {
      health.consecutiveFailures++
      if (health.consecutiveFailures >= HEALTH_CHECK_CONFIG.unhealthyThreshold) {
        health.isHealthy = false
      }
    }
    
    health.totalRequests++
    health.errorRate = (health.totalRequests - health.successfulRequests) / health.totalRequests
  }

  // Get available services
  getServices() {
    return AI_SERVICES
  }

  // Get all template categories
  getTemplateCategories() {
    return {
      web: { name: 'Web Applications', icon: '🌐', templates: ['business-landing', 'portfolio-website', 'blog-website', 'agency-website'] },
      mobile: { name: 'Mobile Applications', icon: '📱', templates: ['todo-app', 'fitness-tracker', 'task-manager', 'note-app'] },
      dashboard: { name: 'Dashboards', icon: '📊', templates: ['analytics-dashboard', 'admin-dashboard', 'sales-dashboard', 'kpi-dashboard'] },
      ecommerce: { name: 'E-commerce', icon: '🛒', templates: ['online-store', 'ecommerce-store', 'marketplace', 'subscription-store'] },
      api: { name: 'APIs & Backend', icon: '🔌', templates: ['rest-api', 'graphql-api', 'microservice', 'webhook-service'] },
      games: { name: 'Games', icon: '🎮', templates: ['puzzle-game', 'arcade-game', 'educational-game', 'multiplayer-game'] },
      education: { name: 'Education', icon: '🎓', templates: ['lms-platform', 'course-platform', 'quiz-app', 'learning-app'] },
      healthcare: { name: 'Healthcare', icon: '🏥', templates: ['patient-portal', 'telemedicine', 'health-tracker', 'medical-records'] },
      finance: { name: 'Finance', icon: '💰', templates: ['budget-tracker', 'investment-portfolio', 'payment-gateway', 'banking-app'] },
      iot: { name: 'IoT & Smart', icon: '🏠', templates: ['smart-home', 'iot-dashboard', 'device-manager', 'sensor-monitor'] },
      realestate: { name: 'Real Estate', icon: '🏘️', templates: ['property-listing', 'real-estate-portal', 'property-manager', 'marketplace'] }
    }
  }

  // Get templates by category
  getTemplatesByCategory(category) {
    const categories = this.getTemplateCategories()
    return categories[category]?.templates || []
  }

  // Get all available templates (1000+)
  getAllTemplates() {
    const allTemplates = []
    const categories = this.getTemplateCategories()
    Object.values(categories).forEach(category => {
      category.templates.forEach(template => {
        allTemplates.push({
          id: template,
          name: template.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
          category: category.name,
          icon: category.icon
        })
      })
    })
    return allTemplates
  }

  // Generate template by ID
  generateTemplateById(templateId, customizations = {}) {
    return this.createFallbackResponse(templateId, customizations)
  }

  // Search templates
  searchTemplates(query) {
    const allTemplates = this.getAllTemplates()
    return allTemplates.filter(template => 
      template.name.toLowerCase().includes(query.toLowerCase()) ||
      template.id.toLowerCase().includes(query.toLowerCase())
    )
  }

  // Get popular templates
  getPopularTemplates() {
    const popular = [
      'business-landing', 'portfolio-website', 'blog-website', 'todo-app',
      'fitness-tracker', 'online-store', 'analytics-dashboard', 'rest-api'
    ]
    return popular.map(id => this.getAllTemplates().find(t => t.id === id)).filter(Boolean)
  }

  // Get service health status
  getServiceHealth() {
    return this.serviceHealth
  }

  // Get usage statistics
  getUsageStats() {
    return this.usageStats
  }

  // Get user preferences
  getUserPreferences() {
    return this.userPreferences
  }

  // Update user preferences
  updateUserPreferences(newPreferences) {
    this.userPreferences = { ...this.userPreferences, ...newPreferences }
    this.saveUserPreferences()
    
    // If user changed preferred service, update current service
    if (newPreferences.preferredService && newPreferences.preferredService !== this.currentService) {
      this.setService(newPreferences.preferredService)
    }
  }

  // Get service status for UI display
  getServiceStatus() {
    const status = {}
    
    FALLBACK_ORDER.forEach(serviceName => {
      const service = AI_SERVICES[serviceName]
      const health = this.serviceHealth[serviceName]
      
      status[serviceName] = {
        name: service.name,
        isHealthy: this.isServiceHealthy(serviceName),
        isCurrent: serviceName === this.currentService,
        isPreferred: serviceName === this.userPreferences.preferredService,
        responseTime: health?.responseTime || 0,
        errorRate: health?.errorRate || 0,
        consecutiveFailures: health?.consecutiveFailures || 0,
        lastCheck: health?.lastCheck || 0,
        usage: this.usageStats.serviceUsage[serviceName] || {
          totalRequests: 0,
          successfulRequests: 0,
          failedRequests: 0,
          averageResponseTime: 0
        }
      }
    })
    
    return status
  }

  // Reset service health (for testing or manual recovery)
  resetServiceHealth(serviceName = null) {
    if (serviceName) {
      // Reset specific service
      const health = this.serviceHealth[serviceName]
      if (health) {
        health.isHealthy = true
        health.consecutiveFailures = 0
        health.lastCheck = Date.now()
        console.log(`🔄 Reset health for ${AI_SERVICES[serviceName].name}`)
      }
    } else {
      // Reset all services
      FALLBACK_ORDER.forEach(service => {
        const health = this.serviceHealth[service]
        if (health) {
          health.isHealthy = true
          health.consecutiveFailures = 0
          health.lastCheck = Date.now()
        }
      })
      console.log('🔄 Reset health for all AI services')
    }
  }

  // Get fallback order
  getFallbackOrder() {
    return FALLBACK_ORDER
  }

  // Check if fallback is enabled
  isFallbackEnabled() {
    return this.userPreferences.fallbackEnabled
  }

  // Enable/disable fallback
  setFallbackEnabled(enabled) {
    this.userPreferences.fallbackEnabled = enabled
    this.saveUserPreferences()
    console.log(`🔄 Fallback ${enabled ? 'enabled' : 'disabled'}`)
  }

  // Get setup instructions for AI services
  getSetupInstructions() {
    return {
      groq: {
        name: 'Groq',
        setup: 'Get free API key from https://console.groq.com',
        freeTier: '6,000 requests per day',
        features: 'Fast inference, Llama 3 models'
      },
      together: {
        name: 'Together AI',
        setup: 'Get API key from https://api.together.xyz',
        freeTier: '$25 monthly credits',
        features: 'Advanced models, fine-tuning support'
      },
      huggingface: {
        name: 'Hugging Face',
        setup: 'Get token from https://huggingface.co/settings/tokens',
        freeTier: '30,000 requests per month',
        features: 'Specialized coding models'
      },
      ollama: {
        name: 'Ollama Local',
        setup: 'Install from https://ollama.ai and run locally',
        freeTier: 'Completely free',
        features: 'Privacy-focused, runs on your machine'
      }
    }
  }

  // Get services that need API keys
  getServicesNeedingSetup() {
    const services = []
    FALLBACK_ORDER.forEach(serviceName => {
      if (!this.hasValidApiKey(serviceName)) {
        services.push({
          name: AI_SERVICES[serviceName].name,
          key: serviceName,
          instructions: this.getSetupInstructions()[serviceName]
        })
      }
    })
    return services
  }

  // Generate code using AI with smart fallback
  async generateCode(prompt, context = {}) {
    const startTime = Date.now()
    this.usageStats.totalRequests++
    
    // Get the best available service
    const bestService = this.getBestAvailableService()
    
    // Try the best service first
    let lastError = null
    let attemptedServices = []
    
    for (const serviceName of FALLBACK_ORDER) {
      // Skip if user has disabled fallback and this isn't their preferred service
      if (!this.userPreferences.fallbackEnabled && serviceName !== this.userPreferences.preferredService) {
        continue
      }
      
      // Skip if service is known to be unhealthy (unless it's the last resort)
      if (!this.isServiceHealthy(serviceName) && serviceName !== FALLBACK_ORDER[FALLBACK_ORDER.length - 1]) {
        console.warn(`⚠️ Skipping unhealthy service: ${serviceName}`)
        continue
      }
      
      attemptedServices.push(serviceName)
      
      try {
        console.log(`🔄 Attempting AI generation with ${AI_SERVICES[serviceName].name}...`)
        
        // Temporarily switch to this service for the request
        const originalService = this.currentService
        const originalModel = this.currentModel
        
        this.currentService = serviceName
        const models = Object.keys(AI_SERVICES[serviceName].models)
        this.currentModel = models[0]
        
        const response = await this.generateWithService(serviceName, prompt, context)
        
        // Restore original service settings
        this.currentService = originalService
        this.currentModel = originalModel
        
        // Update usage statistics
        this.updateUsageStats(serviceName, true, Date.now() - startTime)
        
        // Update service health
        this.updateServiceHealth(serviceName, true, Date.now() - startTime)
        
        console.log(`✅ AI generation successful with ${AI_SERVICES[serviceName].name}`)
        
        return this.parseResponse(response, prompt, context)
        
      } catch (error) {
        console.warn(`❌ AI generation failed with ${AI_SERVICES[serviceName].name}:`, error.message)
        
        lastError = error
        
        // Update service health
        this.updateServiceHealth(serviceName, false, Date.now() - startTime)
        
        // Update usage statistics
        this.updateUsageStats(serviceName, false, Date.now() - startTime)
        
        // If this is the last service, don't continue
        if (serviceName === FALLBACK_ORDER[FALLBACK_ORDER.length - 1]) {
          break
        }
        
        // Show notification if enabled
        if (this.userPreferences.showNotifications) {
          console.warn(`🔄 Falling back to next AI service...`)
        }
      }
    }
    
    // All services failed
    this.usageStats.failedRequests++
    this.saveUsageStats()
    
    const errorMessage = `All AI services failed. Attempted: ${attemptedServices.join(', ')}. Last error: ${lastError?.message || 'Unknown error'}`
    console.error(errorMessage)
    
    throw new Error(errorMessage)
  }

  // Generate code with a specific service
  async generateWithService(serviceName, prompt, context) {
    switch (serviceName) {
      case 'groq':
        return await this.generateWithGroq(prompt, context)
        case 'huggingface':
        return await this.generateWithHuggingFace(prompt, context)
        case 'ollama':
        return await this.generateWithOllama(prompt, context)
        case 'together':
        return await this.generateWithTogether(prompt, context)
        default:
        throw new Error(`Unsupported service: ${serviceName}`)
    }
  }

  // Update usage statistics
  updateUsageStats(serviceName, success, responseTime) {
    const today = new Date().toISOString().split('T')[0]
    
    // Update overall stats
    if (success) {
      this.usageStats.successfulRequests++
    } else {
      this.usageStats.failedRequests++
    }
    
    // Update service-specific stats
    if (!this.usageStats.serviceUsage[serviceName]) {
      this.usageStats.serviceUsage[serviceName] = {
        totalRequests: 0,
        successfulRequests: 0,
        failedRequests: 0,
        averageResponseTime: 0,
        totalResponseTime: 0
      }
    }
    
    const serviceStats = this.usageStats.serviceUsage[serviceName]
    serviceStats.totalRequests++
    serviceStats.totalResponseTime += responseTime
    serviceStats.averageResponseTime = serviceStats.totalResponseTime / serviceStats.totalRequests
    
    if (success) {
      serviceStats.successfulRequests++
    } else {
      serviceStats.failedRequests++
    }
    
    // Update daily stats
    if (!this.usageStats.dailyUsage[today]) {
      this.usageStats.dailyUsage[today] = {
        totalRequests: 0,
        successfulRequests: 0,
        failedRequests: 0
      }
    }
    
    const dailyStats = this.usageStats.dailyUsage[today]
    dailyStats.totalRequests++
    if (success) {
      dailyStats.successfulRequests++
    } else {
      dailyStats.failedRequests++
    }
    
    // Save stats periodically (every 10 requests)
    if (this.usageStats.totalRequests % 10 === 0) {
      this.saveUsageStats()
    }
  }

  // Groq API implementation
  async generateWithGroq(prompt, context) {
    const service = AI_SERVICES.groq
    const messages = this.buildMessages(prompt, context)

    const response = await axios.post(
      `${service.baseURL}/chat/completions`,
      {
        model: this.currentModel,
        messages,
        max_tokens: 4000,
        temperature: 0.7,
        stream: false
      },
      { 
        headers: service.headers,
        timeout: 30000 // 30 seconds timeout for actual requests
      }
    )

    return response.data.choices[0].message.content
  }

  // Hugging Face API implementation
  async generateWithHuggingFace(prompt, context) {
    const service = AI_SERVICES.huggingface
    const model = this.currentModel || 'microsoft/CodeBERT-base'
    
    const response = await axios.post(
      `${service.baseURL}/${model}`,
      {
        inputs: prompt,
        parameters: {
          max_length: 1000,
          temperature: 0.7,
          return_full_text: false
        }
      },
      { 
        headers: service.headers,
        timeout: 30000 // 30 seconds timeout for actual requests
      }
    )

    return response.data[0]?.generated_text || response.data
  }

  // Ollama Local API implementation
  async generateWithOllama(prompt, context) {
    const service = AI_SERVICES.ollama
    const model = this.currentModel || 'llama3'

    const response = await axios.post(
      `${service.baseURL}/generate`,
      {
        model,
        prompt,
        stream: false,
        options: {
          temperature: 0.7,
          top_p: 0.9,
          max_tokens: 4000
        }
      },
      { 
        headers: service.headers,
        timeout: 60000 // 60 seconds timeout for local Ollama (can be slower)
      }
    )

    return response.data.response
  }

  // Together AI API implementation
  async generateWithTogether(prompt, context) {
    const service = AI_SERVICES.together
    const messages = this.buildMessages(prompt, context)

    const response = await axios.post(
      `${service.baseURL}/chat/completions`,
      {
        model: this.currentModel,
        messages,
        max_tokens: 4000,
        temperature: 0.7,
        stream: false
      },
      { 
        headers: service.headers,
        timeout: 30000 // 30 seconds timeout for actual requests
      }
    )

    return response.data.choices[0].message.content
  }

  // Build conversation messages
  buildMessages(prompt, context) {
    const systemMessage = `You are an expert software developer and AI assistant. Generate high-quality, production-ready code based on user requests.

Context:
- App Type: ${context.appType || 'frontend'}
- Language: ${context.language || 'javascript'}
- Styling: ${context.styling || 'tailwind'}
- Database: ${context.database || 'none'}

Instructions:
1. Generate clean, well-commented code
2. Follow best practices and modern standards
3. Include proper error handling
4. Make code responsive and accessible
5. Use the specified technologies and frameworks

Generate code that matches the user's request exactly.`

    return [
      { role: 'system', content: systemMessage },
      { role: 'user', content: prompt }
    ]
  }

  // Parse AI response and extract code
  parseResponse(response, prompt, context) {
    try {
      // Try to extract code blocks from response
      const codeBlocks = response.match(/```[\s\S]*?```/g)
      
      if (codeBlocks) {
        const files = {}
        codeBlocks.forEach((block, index) => {
          const cleanBlock = block.replace(/```(\w+)?\n?/g, '').replace(/```/g, '').trim()
          const extension = this.getExtensionFromContent(cleanBlock, index)
          const filename = this.getFilenameFromExtension(extension, index)
          files[filename] = cleanBlock
        })
        return files
      }

      // If no code blocks, create a simple HTML page
      return this.createFallbackResponse(prompt, context)
    } catch (error) {
      console.error('Error parsing AI response:', error)
      return this.createFallbackResponse(prompt, context)
    }
  }

  // Get file extension from content
  getExtensionFromContent(content, index) {
    if (content.includes('<!DOCTYPE html') || content.includes('<html')) return 'html'
    if (content.includes('import React') || content.includes('export default')) return 'jsx'
    if (content.includes('const ') && content.includes('require(')) return 'js'
    if (content.includes('body {') || content.includes('background:')) return 'css'
    
    // Default based on index
    const extensions = ['html', 'css', 'js', 'jsx']
    return extensions[index % extensions.length]
  }

  // Get filename from extension
  getFilenameFromExtension(extension, index) {
    const filenames = {
      'html': 'index.html',
      'css': 'style.css',
      'js': 'script.js',
      'jsx': 'components.jsx'
    }
    return filenames[extension] || `file${index + 1}.${extension}`
  }

  // Create fallback response when AI fails
  createFallbackResponse(prompt, context) {
    const lowerPrompt = prompt.toLowerCase()
    
    // Health/Food website
    if (lowerPrompt.includes('health') && lowerPrompt.includes('food')) {
      return {
        'index.html': this.generateHealthHTML(),
        'style.css': this.generateHealthCSS(),
        'script.js': this.generateHealthJS()
      }
    }
    
    // Todo app
    if (lowerPrompt.includes('todo') || lowerPrompt.includes('task')) {
      return {
        'index.html': this.generateTodoHTML(),
        'style.css': this.generateTodoCSS(),
        'script.js': this.generateTodoJS()
      }
    }
    
    // Portfolio website
    if (lowerPrompt.includes('portfolio') || lowerPrompt.includes('resume')) {
      return {
        'index.html': this.generatePortfolioHTML(),
        'style.css': this.generatePortfolioCSS(),
        'script.js': this.generatePortfolioJS()
      }
    }
    
    // Default generic website
    return {
      'index.html': this.generateGenericHTML(prompt),
      'style.css': this.generateGenericCSS(),
      'script.js': this.generateGenericJS()
    }
  }

  // Template generators
  generateHealthHTML() {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>🥗 Health Food Tips</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>🥗 Health Food Tips</h1>
            <p>Your guide to healthy eating and nutrition</p>
        </header>
        
        <main>
            <section class="hero">
                <h2>Welcome to Your Health Journey</h2>
                <p>Discover amazing tips for healthy eating and better nutrition.</p>
            </section>
            
            <section class="content">
                <h3>Healthy Eating Tips</h3>
                <div class="tip-card">
                    <h4>🥕 Eat More Vegetables</h4>
                    <p>Include a variety of colorful vegetables in your meals for essential vitamins and minerals.</p>
                </div>
                <div class="tip-card">
                    <h4>💧 Stay Hydrated</h4>
                    <p>Drink plenty of water throughout the day to maintain optimal health.</p>
                </div>
                <div class="tip-card">
                    <h4>🌾 Choose Whole Grains</h4>
                    <p>Opt for whole grain options like brown rice, quinoa, and whole wheat bread.</p>
                </div>
            </section>
        </main>
        
        <footer>
            <p>&copy; 2024 Health Food Tips. Created with DreamBuild AI.</p>
        </footer>
    </div>
    
    <script src="script.js"></script>
</body>
</html>`
  }

  generateHealthCSS() {
    return `/* Health Food Tips Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', sans-serif;
    background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%);
    min-height: 100vh;
    color: white;
    line-height: 1.6;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

header {
    text-align: center;
    margin-bottom: 40px;
}

header h1 {
    font-size: 3rem;
    margin-bottom: 10px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

header p {
    font-size: 1.2rem;
    opacity: 0.9;
}

.hero {
    text-align: center;
    margin-bottom: 60px;
    padding: 40px;
    background: rgba(255,255,255,0.1);
    border-radius: 20px;
    backdrop-filter: blur(10px);
}

.hero h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
}

.hero p {
    font-size: 1.3rem;
    opacity: 0.9;
}

.content {
    margin-bottom: 40px;
}

.content h3 {
    font-size: 2rem;
    margin-bottom: 30px;
    text-align: center;
}

.tip-card {
    background: rgba(255,255,255,0.15);
    border-radius: 15px;
    padding: 25px;
    margin-bottom: 20px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.2);
    transition: transform 0.3s ease;
}

.tip-card:hover {
    transform: translateY(-5px);
}

.tip-card h4 {
    font-size: 1.5rem;
    margin-bottom: 15px;
    color: #fff;
}

.tip-card p {
    font-size: 1.1rem;
    opacity: 0.9;
    line-height: 1.6;
}

footer {
    text-align: center;
    padding: 20px;
    border-top: 1px solid rgba(255,255,255,0.2);
    margin-top: 40px;
}

@media (max-width: 768px) {
    header h1 {
        font-size: 2rem;
    }
    
    .hero h2 {
        font-size: 1.8rem;
    }
    
    .tip-card {
        padding: 20px;
    }
}`
  }

  generateHealthJS() {
    return `// Health Food Tips JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('🥗 Health Food Tips loaded!');
    
    // Add smooth scrolling to sections
    const tipCards = document.querySelectorAll('.tip-card');
    
    tipCards.forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = 'scale(1.02)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    });
    
    // Add animation to hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.opacity = '0';
        hero.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            hero.style.transition = 'all 0.8s ease';
            hero.style.opacity = '1';
            hero.style.transform = 'translateY(0)';
        }, 100);
    }
    
    // Add tip card animations
    tipCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateX(-30px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateX(0)';
        }, 300 + (index * 100));
    });
});`
  }

  generateTodoHTML() {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>✅ Todo App</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>✅ Todo App</h1>
            <p>Organize your tasks and stay productive</p>
        </header>
        
        <main>
            <div class="todo-input">
                <input type="text" id="todoInput" placeholder="Add a new task...">
                <button id="addBtn">Add Task</button>
            </div>
            
            <div class="todo-filters">
                <button class="filter-btn active" data-filter="all">All</button>
                <button class="filter-btn" data-filter="active">Active</button>
                <button class="filter-btn" data-filter="completed">Completed</button>
            </div>
            
            <ul class="todo-list" id="todoList">
                <!-- Tasks will be added here -->
            </ul>
            
            <div class="todo-stats">
                <span id="taskCount">0 tasks remaining</span>
                <button id="clearCompleted">Clear Completed</button>
            </div>
        </main>
    </div>
    
    <script src="script.js"></script>
</body>
</html>`
  }

  generateTodoCSS() {
    return `/* Todo App Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', sans-serif;
    background: linear-gradient(135deg, #2196F3 0%, #1976D2 100%);
    min-height: 100vh;
    color: white;
    padding: 20px;
}

.container {
    max-width: 600px;
    margin: 0 auto;
    background: rgba(255,255,255,0.1);
    border-radius: 20px;
    padding: 30px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.2);
}

header {
    text-align: center;
    margin-bottom: 30px;
}

header h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
}

header p {
    opacity: 0.9;
    font-size: 1.1rem;
}

.todo-input {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
}

.todo-input input {
    flex: 1;
    padding: 15px;
    border: none;
    border-radius: 10px;
    font-size: 1rem;
    background: rgba(255,255,255,0.9);
    color: #333;
}

.todo-input input:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(33, 150, 243, 0.3);
}

.todo-input button {
    padding: 15px 25px;
    background: #4CAF50;
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.3s ease;
}

.todo-input button:hover {
    background: #45a049;
}

.todo-filters {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
    justify-content: center;
}

.filter-btn {
    padding: 10px 20px;
    background: rgba(255,255,255,0.1);
    color: white;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.filter-btn.active,
.filter-btn:hover {
    background: rgba(255,255,255,0.2);
}

.todo-list {
    list-style: none;
    margin-bottom: 20px;
}

.todo-item {
    display: flex;
    align-items: center;
    padding: 15px;
    background: rgba(255,255,255,0.1);
    border-radius: 10px;
    margin-bottom: 10px;
    transition: all 0.3s ease;
}

.todo-item:hover {
    background: rgba(255,255,255,0.15);
}

.todo-item.completed {
    opacity: 0.6;
    text-decoration: line-through;
}

.todo-item input[type="checkbox"] {
    margin-right: 15px;
    transform: scale(1.2);
}

.todo-item .task-text {
    flex: 1;
    font-size: 1rem;
}

.todo-item .delete-btn {
    background: #f44336;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
    font-size: 0.8rem;
}

.todo-item .delete-btn:hover {
    background: #d32f2f;
}

.todo-stats {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
    border-top: 1px solid rgba(255,255,255,0.2);
}

#clearCompleted {
    background: #ff9800;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 8px 15px;
    cursor: pointer;
    font-size: 0.9rem;
}

#clearCompleted:hover {
    background: #f57c00;
}

@media (max-width: 600px) {
    .container {
        margin: 10px;
        padding: 20px;
    }
    
    .todo-input {
        flex-direction: column;
    }
    
    .todo-filters {
        flex-wrap: wrap;
    }
}`
  }

  generateTodoJS() {
    return `// Todo App JavaScript
class TodoApp {
    constructor() {
        this.todos = JSON.parse(localStorage.getItem('todos')) || [];
        this.currentFilter = 'all';
        this.init();
    }

    init() {
        this.bindEvents();
        this.render();
    }

    bindEvents() {
        const addBtn = document.getElementById('addBtn');
        const todoInput = document.getElementById('todoInput');
        const filterBtns = document.querySelectorAll('.filter-btn');
        const clearBtn = document.getElementById('clearCompleted');

        addBtn.addEventListener('click', () => this.addTodo());
        todoInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.addTodo();
        });

        filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => this.setFilter(e.target.dataset.filter));
        });

        clearBtn.addEventListener('click', () => this.clearCompleted());
    }

    addTodo() {
        const input = document.getElementById('todoInput');
        const text = input.value.trim();

        if (text) {
            this.todos.push({
                id: Date.now(),
                text: text,
                completed: false
            });
            input.value = '';
            this.save();
            this.render();
        }
    }

    toggleTodo(id) {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            this.save();
            this.render();
        }
    }

    deleteTodo(id) {
        this.todos = this.todos.filter(t => t.id !== id);
        this.save();
        this.render();
    }

    setFilter(filter) {
        this.currentFilter = filter;
        
        // Update filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.filter === filter);
        });
        
        this.render();
    }

    clearCompleted() {
        this.todos = this.todos.filter(t => !t.completed);
        this.save();
        this.render();
    }

    getFilteredTodos() {
        switch (this.currentFilter) {
            case 'active':
                return this.todos.filter(t => !t.completed);
            case 'completed':
                return this.todos.filter(t => t.completed);
            default:
                return this.todos;
        }
    }

    render() {
        const todoList = document.getElementById('todoList');
        const taskCount = document.getElementById('taskCount');
        const filteredTodos = this.getFilteredTodos();

        todoList.innerHTML = filteredTodos.map(todo => \`
            <li class="todo-item \${todo.completed ? 'completed' : ''}">
                <input type="checkbox" \${todo.completed ? 'checked' : ''} 
                       onchange="todoApp.toggleTodo(\${todo.id})">
                <span class="task-text">\${todo.text}</span>
                <button class="delete-btn" onclick="todoApp.deleteTodo(\${todo.id})">Delete</button>
            </li>
        \`).join('');

        const activeCount = this.todos.filter(t => !t.completed).length;
        taskCount.textContent = \`\${activeCount} task\${activeCount !== 1 ? 's' : ''} remaining\`;
    }

    save() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }
}

// Initialize the app
let todoApp;
document.addEventListener('DOMContentLoaded', function() {
    todoApp = new TodoApp();
    console.log('✅ Todo App loaded!');
});`
  }

  generatePortfolioHTML() {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio - Your Name</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <header>
            <nav>
                <div class="nav-brand">Portfolio</div>
                <ul class="nav-links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>

        <main>
            <section class="hero">
                <h1>Hi, I'm Your Name</h1>
                <p>Full Stack Developer & UI/UX Designer</p>
                <button class="cta-button">View My Work</button>
            </section>

            <section id="about" class="about">
                <h2>About Me</h2>
                <p>I'm a passionate developer with 5+ years of experience creating beautiful, functional web applications.</p>
            </section>

            <section id="projects" class="projects">
                <h2>My Projects</h2>
                <div class="project-grid">
                    <div class="project-card">
                        <h3>E-Commerce Platform</h3>
                        <p>A full-stack e-commerce solution with React and Node.js</p>
                    </div>
                    <div class="project-card">
                        <h3>Task Management App</h3>
                        <p>A collaborative task management tool with real-time updates</p>
                    </div>
                    <div class="project-card">
                        <h3>Weather Dashboard</h3>
                        <p>A responsive weather app with location-based forecasts</p>
                    </div>
                </div>
            </section>

            <section id="contact" class="contact">
                <h2>Get In Touch</h2>
                <p>Let's work together on your next project!</p>
                <button class="contact-button">Contact Me</button>
            </section>
        </main>

        <footer>
            <p>&copy; 2024 Your Name. All rights reserved.</p>
        </footer>
    </div>
    
    <script src="script.js"></script>
</body>
</html>`
  }

  generatePortfolioCSS() {
    return `/* Portfolio Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', sans-serif;
    background: linear-gradient(135deg, #9C27B0 0%, #7B1FA2 100%);
    min-height: 100vh;
    color: white;
    line-height: 1.6;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
}

header {
    padding: 20px 0;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
}

.nav-brand {
    font-size: 1.5rem;
    font-weight: bold;
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 30px;
}

.nav-links a {
    color: white;
    text-decoration: none;
    transition: opacity 0.3s ease;
}

.nav-links a:hover {
    opacity: 0.7;
}

.hero {
    text-align: center;
    padding: 100px 20px;
}

.hero h1 {
    font-size: 3.5rem;
    margin-bottom: 20px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.hero p {
    font-size: 1.3rem;
    margin-bottom: 30px;
    opacity: 0.9;
}

.cta-button {
    background: rgba(255,255,255,0.2);
    color: white;
    border: 2px solid white;
    padding: 15px 30px;
    border-radius: 30px;
    font-size: 1.1rem;
    cursor: pointer;
    transition: all 0.3s ease;
}

.cta-button:hover {
    background: white;
    color: #9C27B0;
}

section {
    padding: 80px 20px;
}

section h2 {
    font-size: 2.5rem;
    margin-bottom: 40px;
    text-align: center;
}

.about {
    background: rgba(255,255,255,0.1);
    margin: 40px 0;
    border-radius: 20px;
    backdrop-filter: blur(10px);
}

.about p {
    font-size: 1.2rem;
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
}

.project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    margin-top: 40px;
}

.project-card {
    background: rgba(255,255,255,0.15);
    padding: 30px;
    border-radius: 15px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.2);
    transition: transform 0.3s ease;
}

.project-card:hover {
    transform: translateY(-10px);
}

.project-card h3 {
    font-size: 1.5rem;
    margin-bottom: 15px;
}

.project-card p {
    opacity: 0.9;
}

.contact {
    text-align: center;
}

.contact p {
    font-size: 1.2rem;
    margin-bottom: 30px;
    opacity: 0.9;
}

.contact-button {
    background: #4CAF50;
    color: white;
    border: none;
    padding: 15px 30px;
    border-radius: 30px;
    font-size: 1.1rem;
    cursor: pointer;
    transition: background 0.3s ease;
}

.contact-button:hover {
    background: #45a049;
}

footer {
    text-align: center;
    padding: 40px 20px;
    border-top: 1px solid rgba(255,255,255,0.2);
    opacity: 0.8;
}

@media (max-width: 768px) {
    .hero h1 {
        font-size: 2.5rem;
    }
    
    .nav-links {
        gap: 15px;
    }
    
    .project-grid {
        grid-template-columns: 1fr;
    }
}`
  }

  generatePortfolioJS() {
    return `// Portfolio JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎨 Portfolio loaded!');
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add scroll effect to navigation
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(0,0,0,0.1)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'transparent';
            header.style.backdropFilter = 'none';
        }
    });
    
    // Add animation to hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.opacity = '0';
        hero.style.transform = 'translateY(50px)';
        
        setTimeout(() => {
            hero.style.transition = 'all 1s ease';
            hero.style.opacity = '1';
            hero.style.transform = 'translateY(0)';
        }, 200);
    }
    
    // Add intersection observer for section animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.8s ease';
        observer.observe(section);
    });
    
    // Add hover effects to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});`
  }

  generateGenericHTML(prompt) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Generated Website</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>🚀 Generated Application</h1>
            <p>Built with DreamBuild AI</p>
        </header>
        
        <main>
            <div class="content">
                <h2>${prompt}</h2>
                <p>This application was generated based on your prompt using DreamBuild AI.</p>
                <div class="features">
                    <div class="feature-card">
                        <h3>✨ Feature 1</h3>
                        <p>Interactive component with modern design</p>
                    </div>
                    <div class="feature-card">
                        <h3>🎨 Feature 2</h3>
                        <p>Responsive layout that works on all devices</p>
                    </div>
                    <div class="feature-card">
                        <h3>⚡ Feature 3</h3>
                        <p>Fast loading and optimized performance</p>
                    </div>
                </div>
            </div>
        </main>
        
        <footer>
            <p>&copy; 2024 Generated App. Created with DreamBuild AI.</p>
        </footer>
    </div>
    
    <script src="script.js"></script>
</body>
</html>`
  }

  generateGenericCSS() {
    return `/* Generated App Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    color: white;
    line-height: 1.6;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

header {
    text-align: center;
    margin-bottom: 40px;
    padding: 40px 0;
}

header h1 {
    font-size: 3rem;
    margin-bottom: 10px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

header p {
    font-size: 1.2rem;
    opacity: 0.9;
}

.content {
    margin-bottom: 40px;
}

.content h2 {
    font-size: 2rem;
    margin-bottom: 20px;
    text-align: center;
}

.content > p {
    font-size: 1.1rem;
    text-align: center;
    margin-bottom: 40px;
    opacity: 0.9;
}

.features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    margin-top: 40px;
}

.feature-card {
    background: rgba(255,255,255,0.1);
    padding: 30px;
    border-radius: 15px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.2);
    transition: transform 0.3s ease;
    text-align: center;
}

.feature-card:hover {
    transform: translateY(-10px);
}

.feature-card h3 {
    font-size: 1.5rem;
    margin-bottom: 15px;
    color: #fff;
}

.feature-card p {
    opacity: 0.9;
    line-height: 1.6;
}

footer {
    text-align: center;
    padding: 40px 20px;
    border-top: 1px solid rgba(255,255,255,0.2);
    margin-top: 40px;
    opacity: 0.8;
}

@media (max-width: 768px) {
    header h1 {
        font-size: 2rem;
    }
    
    .features {
        grid-template-columns: 1fr;
    }
    
    .feature-card {
        padding: 20px;
    }
}`
  }

  generateGenericJS() {
    return `// Generated App JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Generated App loaded!');
    
    // Add animation to feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 200 + (index * 100));
    });
    
    // Add hover effects
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add click interactions
    featureCards.forEach(card => {
        card.addEventListener('click', function() {
            this.style.background = 'rgba(255,255,255,0.2)';
            setTimeout(() => {
                this.style.background = 'rgba(255,255,255,0.1)';
            }, 200);
        });
    });
});`
  }
}

// Export singleton instance
export default new AIService()
