// DreamBuild Simple AI Service - 100% Local, No API Keys
// This replaces all the complex API services with just local AI

import localAIService from './localAIService.js'

class SimpleAIService {
  constructor() {
    this.currentService = 'local-ai'
    this.usageStats = {
      totalRequests: 0,
      successfulRequests: 0,
      failedRequests: 0,
      averageResponseTime: 0
    }
    
    console.log('🤖 Simple AI Service initialized - Local AI only!')
  }

  // Get available services (just local AI)
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
  getAllTemplates() {
    return localAIService.getAllTemplates()
  }

  // Generate template by ID
  generateTemplateById(templateId, customizations = {}) {
    return localAIService.generateTemplateById(templateId, customizations)
  }

  // Search templates
  searchTemplates(query) {
    return localAIService.searchTemplates(query)
  }

  // Get popular templates
  getPopularTemplates() {
    return localAIService.getPopularTemplates()
  }

  // Generate code using local AI
  async generateCode(prompt, context = {}) {
    const startTime = Date.now()
    this.usageStats.totalRequests++
    
    try {
      console.log('🚀 Generating code with Local AI...')
      
      // Check if local AI is available
      if (!localAIService.isHealthy) {
        console.log('⚠️ Local AI not available, using template fallback')
        return localAIService.createFallbackResponse(prompt, context)
      }
      
      // Use local AI service
      const response = await localAIService.generateCode(prompt, context)
      
      // Track successful generation
      const duration = Date.now() - startTime
      this.usageStats.successfulRequests++
      this.usageStats.averageResponseTime = (this.usageStats.averageResponseTime + duration) / 2
      
      console.log('✅ Code generated successfully with Local AI!')
      return response
      
    } catch (error) {
      console.error('❌ Local AI generation failed:', error)
      this.usageStats.failedRequests++
      
      // Fallback to template generation
      console.log('🔄 Falling back to template generation...')
      return localAIService.createFallbackResponse(prompt, context)
    }
  }

  // Get service health status
  getServiceHealth() {
    return localAIService.modelHealth
  }

  // Get usage statistics
  getUsageStats() {
    return this.usageStats
  }

  // Get user preferences (simplified)
  getUserPreferences() {
    return {
      preferredService: 'local-ai',
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
    return ['local-ai']
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
    return localAIService.isHealthy ? [] : ['local-ai']
  }

  // Check if service has valid API key (always true for local AI)
  hasValidApiKey(serviceName) {
    return serviceName === 'local-ai'
  }

  // Set current service (always local-ai)
  setService(serviceName) {
    if (serviceName === 'local-ai') {
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
