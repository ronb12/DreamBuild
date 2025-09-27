// DreamBuild Simple AI Service - Cloud AI with Open Source Models
// Uses Hugging Face Inference API for open source models

import localAIService from './localAIService.js'
import cloudAIService from './cloudAIService.js'

class SimpleAIService {
  constructor() {
    this.currentService = 'local-ai' // Default to local AI (no API keys required)
    this.usageStats = {
      totalRequests: 0,
      successfulRequests: 0,
      failedRequests: 0,
      averageResponseTime: 0
    }
    
    console.log('🤖 Simple AI Service initialized - Local AI with Open Source Models (No API Keys Required)!')
  }

  // Get available services (local AI only)
  getServices() {
    return {
      'local-ai': {
        name: 'Local AI Models',
        type: 'Local',
        description: 'Self-hosted AI models - no API keys required',
        models: localAIService.getAvailableModels()
      }
    }
  }

  // Get all template categories
  getTemplateCategories() {
    return localAIService.getTemplateCategories()
  }

  // Get templates by category
  getTemplatesByCategory(category) {
    return localAIService.getTemplatesByCategory(category)
  }

  // Get all available templates
  async getAllTemplates() {
    return await localAIService.getAllTemplates()
  }

  // Generate template by ID
  async generateTemplateById(templateId, customizations = {}) {
    return await localAIService.generateTemplateById(templateId, customizations)
  }

  // Search templates
  async searchTemplates(query) {
    return await localAIService.searchTemplates(query)
  }

  // Get popular templates
  async getPopularTemplates() {
    return await localAIService.getPopularTemplates()
  }

  // Generate code using local AI (primary) or cloud AI (fallback)
  async generateCode(prompt, context = {}) {
    const startTime = Date.now()
    this.usageStats.totalRequests++
    
    try {
      // Check if this is a general question first
      if (localAIService.isGeneralQuestion(prompt)) {
        console.log('❓ General question detected, using local AI for conversational response...')
        const response = await localAIService.generateCode(prompt, context)
        
        // Track successful generation
        const duration = Date.now() - startTime
        this.usageStats.successfulRequests++
        this.usageStats.averageResponseTime = (this.usageStats.averageResponseTime + duration) / 2
        
        console.log('✅ Conversational response generated successfully!')
        return response
      }
      
      console.log('🚀 Generating code with Local AI...')
      
      // Use local AI only (no API keys required)
      console.log('🚀 Using Local AI only (cloud AI disabled)...')
      const response = await localAIService.generateCode(prompt, context)
      
      // Track successful generation
      const duration = Date.now() - startTime
      this.usageStats.successfulRequests++
      this.usageStats.averageResponseTime = (this.usageStats.averageResponseTime + duration) / 2
      
      console.log('✅ Code generated successfully with Local AI!')
      return response
      
    } catch (error) {
      console.error('❌ AI generation failed:', error)
      this.usageStats.failedRequests++
      
      // Fallback to local AI template generation
      console.log('🔄 Falling back to local AI template generation...')
      return localAIService.createFallbackResponse(prompt, context)
    }
  }

  // Get service health status
  getServiceHealth() {
    return {
      'local-ai': localAIService.modelHealth,
      'cloud-ai': { isHealthy: false, reason: 'Disabled - using local AI only' }
    }
  }

  // Get usage statistics
  getUsageStats() {
    return this.usageStats
  }

  // Get user preferences (simplified)
  getUserPreferences() {
    return {
      preferredService: 'cloud-ai',
      fallbackEnabled: true,
      autoHealthCheck: true
    }
  }

  // Update user preferences (simplified)
  updateUserPreferences(preferences) {
    // Store in localStorage
    localStorage.setItem('dreambuild-preferences', JSON.stringify(preferences))
  }

  // Load user preferences (simplified)
  loadUserPreferences() {
    const stored = localStorage.getItem('dreambuild-preferences')
    return stored ? JSON.parse(stored) : this.getUserPreferences()
  }

  // Get service status
  getServiceStatus() {
    return {
      'cloud-ai': {
        isHealthy: cloudAIService.isHealthy,
        models: cloudAIService.getHealthyModels().length,
        totalModels: cloudAIService.getAvailableModels().length
      },
      'local-ai': {
        isHealthy: localAIService.isHealthy,
        models: localAIService.getHealthyModels().length,
        totalModels: localAIService.getAvailableModels().length
      }
    }
  }

  // Reset service health
  resetServiceHealth() {
    localAIService.modelHealth = {}
  }

  // Get fallback order
  getFallbackOrder() {
    return ['cloud-ai', 'local-ai']
  }

  // Check if fallback is enabled
  isFallbackEnabled() {
    return true
  }

  // Set fallback enabled
  setFallbackEnabled(enabled) {
    // Always enabled for local AI
    return true
  }

  // Get setup instructions
  getSetupInstructions() {
    return {
      'cloud-ai': {
        title: 'Cloud AI Setup',
        description: 'Open source AI models via Hugging Face - no setup required',
        steps: [
          '1. Cloud AI is ready to use with open source models',
          '2. No API keys or installation required',
          '3. Models include CodeLlama, StarCoder, DeepSeek, and more',
          '4. Start generating code immediately!'
        ],
        isSetup: cloudAIService.isHealthy
      },
      'local-ai': {
        title: 'Local AI Setup',
        description: 'Set up local AI models for code generation',
        steps: [
          '1. Install Ollama from https://ollama.ai',
          '2. Run: ollama pull codellama:7b',
          '3. Run: ollama serve',
          '4. Refresh DreamBuild to start using local AI'
        ],
        isSetup: localAIService.isHealthy
      }
    }
  }

  // Get services needing setup
  getServicesNeedingSetup() {
    const needsSetup = []
    if (!cloudAIService.isHealthy) needsSetup.push('cloud-ai')
    if (!localAIService.isHealthy) needsSetup.push('local-ai')
    return needsSetup
  }

  // Check if service has valid API key (always true for cloud AI and local AI)
  hasValidApiKey(serviceName) {
    return serviceName === 'cloud-ai' || serviceName === 'local-ai'
  }

  // Set current service (cloud-ai or local-ai)
  setService(serviceName) {
    if (serviceName === 'cloud-ai' || serviceName === 'local-ai') {
      this.currentService = serviceName
    }
  }

  // Get current service
  getCurrentService() {
    return this.currentService
  }
}

// Export singleton instance
export default new SimpleAIService()
