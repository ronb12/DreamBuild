// DreamBuild Cloud AI Service - Open Source AI Models via Cloud APIs
// Uses Hugging Face Inference API for open source models

import axios from 'axios'
import incrementalDevelopmentService from './incrementalDevelopmentService.js'
import appNamingService from './appNamingService.js'
import colorThemeService from './colorThemeService.js'
import appValidationService from './appValidationService.js'
import explanationService from './explanationService.js'

class CloudAIService {
  constructor() {
    this.isHealthy = true
    this.baseURL = 'https://api-inference.huggingface.co/models'
    this.apiKey = import.meta.env.VITE_HUGGINGFACE_API_KEY || 'hf_your_api_key_here'
    
    // Open source models available via Hugging Face
    this.availableModels = {
      'codellama-7b': {
        name: 'CodeLlama 7B',
        model: 'codellama/CodeLlama-7b-Python-hf',
        description: 'Fast and efficient code generation',
        maxTokens: 2048,
        temperature: 0.7
      },
      'codellama-13b': {
        name: 'CodeLlama 13B', 
        model: 'codellama/CodeLlama-13b-Python-hf',
        description: 'Higher quality code generation',
        maxTokens: 2048,
        temperature: 0.7
      },
      'starcoder-15b': {
        name: 'StarCoder 15B',
        model: 'bigcode/starcoder',
        description: 'Excellent code completion',
        maxTokens: 2048,
        temperature: 0.7
      },
      'deepseek-coder': {
        name: 'DeepSeek Coder',
        model: 'deepseek-ai/deepseek-coder-6.7b-instruct',
        description: 'High-performance generation',
        maxTokens: 2048,
        temperature: 0.7
      },
      'wizardcoder-7b': {
        name: 'WizardCoder 7B',
        model: 'WizardLM/WizardCoder-15B-V1.0',
        description: 'Great at following instructions',
        maxTokens: 2048,
        temperature: 0.7
      },
      'phi3-mini': {
        name: 'Phi-3 Mini',
        model: 'microsoft/Phi-3-mini-4k-instruct',
        description: 'Lightweight but powerful',
        maxTokens: 2048,
        temperature: 0.7
      },
      'llama3-8b': {
        name: 'Llama 3 8B',
        model: 'meta-llama/Llama-3-8B-Instruct',
        description: 'General purpose model',
        maxTokens: 2048,
        temperature: 0.7
      },
      'mistral-7b': {
        name: 'Mistral 7B',
        model: 'mistralai/Mistral-7B-Instruct-v0.1',
        description: 'Fast and efficient coding assistant',
        maxTokens: 2048,
        temperature: 0.7
      },
      'gemma-7b': {
        name: 'Gemma 7B',
        model: 'google/gemma-7b-it',
        description: 'Google\'s lightweight model',
        maxTokens: 2048,
        temperature: 0.7
      },
      'qwen-7b': {
        name: 'Qwen 7B',
        model: 'Qwen/Qwen-7B-Chat',
        description: 'Alibaba\'s coding model',
        maxTokens: 2048,
        temperature: 0.7
      }
    }
    
    // Cloud AI Service initialized with open source models
  }

  // Get available models
  getAvailableModels() {
    return Object.values(this.availableModels)
  }

  // Get healthy models (all cloud models are considered healthy)
  getHealthyModels() {
    return Object.keys(this.availableModels)
  }

  // Check if the prompt is a general question (not a code generation request)
  isGeneralQuestion(prompt) {
    const lowerPrompt = prompt.toLowerCase()
    
    // General question indicators
    const generalQuestionKeywords = [
      'what is', 'what are', 'what was', 'what will', 'what does', 'what do',
      'how is', 'how are', 'how was', 'how will', 'how does', 'how do',
      'when is', 'when are', 'when was', 'when will', 'when does', 'when do',
      'where is', 'where are', 'where was', 'where will', 'where does', 'where do',
      'why is', 'why are', 'why was', 'why will', 'why does', 'why do',
      'who is', 'who are', 'who was', 'who will', 'who does', 'who do',
      'weather', 'temperature', 'forecast', 'climate', 'rain', 'sunny', 'cloudy',
      'news', 'current events', 'today', 'recent', 'latest', 'breaking',
      'cook', 'recipe', 'food', 'ingredients', 'cooking', 'bake', 'fry', 'boil',
      'travel', 'vacation', 'destination', 'hotel', 'flight', 'trip', 'visit',
      'health', 'medicine', 'exercise', 'fitness', 'doctor', 'hospital', 'sick',
      'education', 'learn', 'study', 'school', 'university', 'college', 'course',
      'science', 'research', 'study', 'theory', 'experiment', 'discovery',
      'history', 'historical', 'past', 'ancient', 'century', 'war', 'battle',
      'business', 'finance', 'economy', 'market', 'stock', 'investment', 'money',
      'sports', 'game', 'team', 'player', 'football', 'basketball', 'soccer',
      'entertainment', 'movie', 'music', 'book', 'film', 'song', 'album',
      'explain', 'tell me about', 'describe', 'define', 'meaning', 'definition',
      'help me understand', 'can you explain', 'what does it mean', 'how does it work',
      'is it', 'are you', 'do you', 'can you', 'will you', 'would you',
      'should i', 'could i', 'would i', 'might i', 'may i'
    ]
    
    // Code generation indicators
    const codeGenerationKeywords = [
      'build', 'create', 'make', 'develop', 'generate', 'code',
      'app', 'application', 'website', 'web app', 'mobile app',
      'component', 'function', 'class', 'module', 'library',
      'api', 'database', 'server', 'backend', 'frontend',
      'react', 'vue', 'angular', 'node', 'python', 'javascript',
      'html', 'css', 'js', 'ts', 'jsx', 'tsx',
      'todo', 'calculator', 'dashboard', 'portfolio', 'blog',
      'ecommerce', 'shop', 'store', 'landing page'
    ]
    
    // Check for general question patterns
    const hasGeneralKeywords = generalQuestionKeywords.some(keyword => 
      lowerPrompt.includes(keyword)
    )
    
    // Check for code generation patterns
    const hasCodeKeywords = codeGenerationKeywords.some(keyword => 
      lowerPrompt.includes(keyword)
    )
    
    // If it has code keywords, it's definitely a code generation request
    if (hasCodeKeywords) {
      return false
    }
    
    // If it has general keywords, it's likely a general question
    if (hasGeneralKeywords) {
      return true
    }
    
    // If it starts with question words, it's likely a general question
    if (lowerPrompt.startsWith('what') || lowerPrompt.startsWith('how') || 
        lowerPrompt.startsWith('when') || lowerPrompt.startsWith('where') || 
        lowerPrompt.startsWith('why') || lowerPrompt.startsWith('who') ||
        lowerPrompt.startsWith('is') || lowerPrompt.startsWith('are') ||
        lowerPrompt.startsWith('do') || lowerPrompt.startsWith('does') ||
        lowerPrompt.startsWith('can') || lowerPrompt.startsWith('will') ||
        lowerPrompt.startsWith('would') || lowerPrompt.startsWith('should') ||
        lowerPrompt.startsWith('could') || lowerPrompt.startsWith('explain') ||
        lowerPrompt.startsWith('tell') || lowerPrompt.startsWith('describe') ||
        lowerPrompt.startsWith('define')) {
      return true
    }
    
    // If it ends with a question mark, it's likely a general question
    if (lowerPrompt.endsWith('?')) {
      return true
    }
    
    // If it contains question patterns, it's likely a general question
    if (lowerPrompt.includes('?') && (
        lowerPrompt.includes('what') || lowerPrompt.includes('how') ||
        lowerPrompt.includes('when') || lowerPrompt.includes('where') ||
        lowerPrompt.includes('why') || lowerPrompt.includes('who') ||
        lowerPrompt.includes('is') || lowerPrompt.includes('are') ||
        lowerPrompt.includes('do') || lowerPrompt.includes('does') ||
        lowerPrompt.includes('can') || lowerPrompt.includes('will') ||
        lowerPrompt.includes('would') || lowerPrompt.includes('should') ||
        lowerPrompt.includes('could') || lowerPrompt.includes('explain') ||
        lowerPrompt.includes('tell') || lowerPrompt.includes('describe') ||
        lowerPrompt.includes('define')
      )) {
      return true
    }
    
    return false
  }

  // Answer general questions directly (like ChatGPT)
  async answerGeneralQuestion(prompt, context) {
    console.log('💬 Answering general question:', prompt)
    
    try {
      // Use web context if available
      let webContext = context.webContext
      
      // If no web context, try to get it
      if (!webContext) {
        console.log('🌐 No web context available, searching for information...')
        // This would typically call the web search service
        // For now, we'll create a basic response
      }
      
      // Create a conversational response
      const response = await this.createConversationalResponse(prompt, webContext)
      
      return {
        type: 'conversational_response',
        message: response.message,
        summary: response.summary,
        details: response.details,
        sources: response.sources,
        prompt: prompt,
        generatedAt: new Date().toISOString(),
        context: context
      }
      
    } catch (error) {
      console.error('❌ Failed to answer general question:', error)
      
      // Fallback response
      return {
        type: 'conversational_response',
        message: `I understand you're asking about "${prompt}". While I'm primarily designed for code generation, I can help with general questions when I have access to current information. For the most accurate and up-to-date answers, I'd recommend checking reliable sources or using a general-purpose AI assistant.`,
        summary: 'General question response',
        details: ['This is a general question that requires current information'],
        sources: [],
        prompt: prompt,
        generatedAt: new Date().toISOString(),
        context: context
      }
    }
  }

  // Create conversational response for general questions
  async createConversationalResponse(prompt, webContext) {
    const lowerPrompt = prompt.toLowerCase()
    
    // Weather questions
    if (lowerPrompt.includes('weather') || lowerPrompt.includes('temperature') || lowerPrompt.includes('forecast')) {
      return {
        message: `I'd be happy to help with weather information for your location. However, I don't have access to real-time weather data. For current weather conditions, I recommend checking a reliable weather service like Weather.com, AccuWeather, or your local weather app.`,
        summary: 'Weather information request',
        details: [
          'Weather data requires real-time access to meteorological services',
          'Recommended sources: Weather.com, AccuWeather, local weather apps',
          'For accurate forecasts, use official weather services'
        ],
        sources: ['Weather.com', 'AccuWeather', 'National Weather Service']
      }
    }
    
    // Cooking questions
    if (lowerPrompt.includes('cook') || lowerPrompt.includes('recipe') || lowerPrompt.includes('food')) {
      return {
        message: `I can help with cooking questions! For recipes and cooking techniques, I recommend checking reliable cooking websites like AllRecipes.com, Food Network, or Serious Eats. These sources provide tested recipes and expert cooking advice.`,
        summary: 'Cooking and recipe information',
        details: [
          'Cooking requires specific recipes and techniques',
          'Recommended sources: AllRecipes.com, Food Network, Serious Eats',
          'Always follow food safety guidelines when cooking'
        ],
        sources: ['AllRecipes.com', 'Food Network', 'Serious Eats']
      }
    }
    
    // General information questions
    return {
      message: `I understand you're asking about "${prompt}". While I'm primarily designed for code generation and development tasks, I can provide general information when I have access to current data. For the most accurate and up-to-date information, I recommend checking reliable sources or using a general-purpose AI assistant.`,
      summary: 'General information request',
      details: [
        'This appears to be a general knowledge question',
        'For current information, check reliable sources',
        'I can help with code generation and development tasks'
      ],
      sources: ['Wikipedia', 'Reliable news sources', 'Official websites']
    }
  }

  // Generate code using cloud AI with context awareness
  async generateCode(prompt, context = {}) {
    console.log('🚀 Generating code with Cloud AI...')
    
    // Check if this is a general question (not a code generation request)
    if (this.isGeneralQuestion(prompt)) {
      console.log('❓ General question detected, providing direct answer...')
      return await this.answerGeneralQuestion(prompt, context)
    }
    
    // Check if web context is available
    if (context.webContext) {
      console.log('🌐 Web context available:', context.webContext.summary)
      console.log('📊 Best practices found:', context.webContext.bestPractices?.length || 0)
      console.log('🔗 Resources found:', context.webContext.resources?.length || 0)
      console.log('💡 Recommendations:', context.webContext.recommendations?.length || 0)
    }
    
    try {
      // Check if this is an incremental development request
      if (context.isIncremental && context.existingProject) {
        return await this.generateIncrementalCode(prompt, context)
      }
      
      // Enhanced context analysis with conversation history
      const enhancedContext = this.analyzeProjectContext(context)
      
      // Add conversation context if available
      if (context.conversationContext) {
        enhancedContext.conversationHistory = context.conversationHistory || []
        enhancedContext.recentMessages = context.conversationContext.recentMessages || []
        enhancedContext.projectContext = context.conversationContext
      }
      
      console.log('🧠 Enhanced context analysis:', enhancedContext)
      
      // Generate code with full context awareness
      const generatedCode = await this.generateContextAwareCode(prompt, enhancedContext)
      
      // Generate intelligent app name
      const appName = appNamingService.generateAppName(prompt, enhancedContext)
      
      // Automatically select and apply color theme
      const selectedTheme = this.selectAutomaticTheme(prompt, enhancedContext)
      const themedCode = this.applyAutomaticTheme(generatedCode, selectedTheme)
      
      // Add real-time preview support
      const previewData = this.generatePreviewData(themedCode, appName)
      
      // Validate the generated app
      console.log('🔍 Validating generated app...')
      const validationResults = await appValidationService.validateApp(themedCode, appName, prompt)
      
      // Generate comprehensive explanation
      console.log('📝 Generating app explanation...')
      const explanation = await explanationService.generateExplanation(themedCode, appName, prompt, validationResults)
      
      console.log('✅ Code generated successfully!')
      console.log('🏷️ App name:', appName)
      console.log('🎨 Selected theme:', selectedTheme.name)
      console.log('👁️ Preview data generated')
      console.log('🔍 Validation completed:', validationResults.summary?.overallScore || 'N/A', 'score')
      console.log('📝 Explanation generated:', explanation.summary ? 'Yes' : 'No')
      console.log('📁 Generated files:', Object.keys(themedCode))
      console.log('📄 File contents preview:', Object.entries(themedCode).map(([name, content]) => ({ name, length: content.length, preview: content.substring(0, 100) })))
      
      // Return enhanced response (like Lovable)
      return {
        files: themedCode,
        appName: appName,
        validation: validationResults,
        explanation: explanation,
        prompt: prompt,
        generatedAt: new Date().toISOString(),
        preview: previewData,
        context: enhancedContext,
        iterations: [], // For iterative development
        dependencies: this.extractDependencies(themedCode),
        buildInstructions: this.generateBuildInstructions(themedCode),
        theme: selectedTheme
      }
      
    } catch (error) {
      console.error('❌ Code generation failed:', error)
      // Enhanced fallback
      const fallbackCode = await this.createFallbackResponse(prompt, context)
      const appName = appNamingService.generateAppName(prompt, context)
      
      // Apply automatic theme to fallback code
      const selectedTheme = this.selectAutomaticTheme(prompt, context)
      const themedFallbackCode = this.applyAutomaticTheme(fallbackCode, selectedTheme)
      
      // Validate the fallback app
      console.log('🔍 Validating fallback app...')
      const validationResults = await appValidationService.validateApp(themedFallbackCode, appName, prompt)
      
      // Generate comprehensive explanation for fallback
      console.log('📝 Generating fallback app explanation...')
      const explanation = await explanationService.generateExplanation(themedFallbackCode, appName, prompt, validationResults)
      
      return {
        files: themedFallbackCode,
        appName: appName,
        validation: validationResults,
        explanation: explanation,
        prompt: prompt,
        generatedAt: new Date().toISOString(),
        preview: this.generatePreviewData(themedFallbackCode, appName),
        context: this.analyzeProjectContext(context),
        iterations: [],
        dependencies: this.extractDependencies(themedFallbackCode),
        buildInstructions: this.generateBuildInstructions(themedFallbackCode),
        theme: selectedTheme
      }
    }
  }

  // Generate incremental code for existing projects
  async generateIncrementalCode(prompt, context) {
    console.log('🔄 Generating incremental code...')
    
    try {
      // Initialize incremental development service
      await incrementalDevelopmentService.initializeProject(context.existingProject)
      
      // Process the feature request
      const result = await incrementalDevelopmentService.processFeatureRequest(prompt, context)
      
      if (result.type === 'no_new_features') {
        return {
          type: 'no_changes',
          message: result.message,
          existingFeatures: result.existingFeatures,
          files: context.existingProject.files || {}
        }
      }
      
      if (result.type === 'incremental_update') {
        // Merge new code with existing files
        const updatedFiles = { ...context.existingProject.files, ...result.code }
        
        return {
          type: 'incremental_update',
          files: updatedFiles,
          newFeatures: result.newFeatures,
          updatedFiles: result.updatedFiles,
          message: result.message,
          appName: context.existingProject.name || 'Updated App',
          prompt: prompt,
          generatedAt: new Date().toISOString(),
          preview: this.generatePreviewData(updatedFiles, context.existingProject.name),
          context: this.analyzeProjectContext(context),
          iterations: incrementalDevelopmentService.featureHistory,
          dependencies: this.extractDependencies(updatedFiles),
          buildInstructions: this.generateBuildInstructions(updatedFiles)
        }
      }
      
    } catch (error) {
      console.error('❌ Incremental code generation failed:', error)
      throw error
    }
  }

  // Enhanced context analysis (like modern IDEs)
  analyzeProjectContext(context) {
    return {
      // Project structure analysis
      projectType: this.detectProjectType(context),
      existingFiles: context.previousFiles || [],
      dependencies: this.analyzeDependencies(context),
      codingStandards: this.detectCodingStandards(context),
      architecture: this.detectArchitecture(context),
      frameworks: this.detectFrameworks(context),
      // User preferences
      userPreferences: this.extractUserPreferences(context),
      // Development environment
      environment: this.detectEnvironment(context)
    }
  }

  // Context-aware code generation (like modern IDEs)
  async generateContextAwareCode(prompt, context) {
    console.log('🧠 Context-aware generation:', context)
    
    // Use context to inform code generation
    const analysis = this.analyzeUserRequest(prompt)
    const contextualCode = await this.generateSpecificCode(prompt, analysis)
    
    // Enhance with context awareness
    const enhancedCode = this.enhanceWithContext(contextualCode, context)
    
    console.log('🔧 Enhanced code generated with context awareness')
    return enhancedCode
  }

  // Generate preview data (like Lovable)
  generatePreviewData(generatedCode, appName) {
    return {
      title: appName,
      description: `A ${appName} application generated by DreamBuild AI`,
      features: this.extractFeatures(generatedCode),
      screenshots: this.generateScreenshots(generatedCode),
      liveDemo: this.generateLiveDemo(generatedCode),
      techStack: this.extractTechStack(generatedCode),
      deployment: this.generateDeploymentInfo(generatedCode)
    }
  }

  // Extract dependencies (like Lovable)
  extractDependencies(generatedCode) {
    const dependencies = new Set()
    
    Object.values(generatedCode).forEach(content => {
      // Check for React
      if (content.includes('React') || content.includes('react')) {
        dependencies.add('react')
        dependencies.add('react-dom')
      }
      // Check for Vue
      if (content.includes('Vue') || content.includes('vue')) {
        dependencies.add('vue')
      }
      // Check for Angular
      if (content.includes('Angular') || content.includes('angular')) {
        dependencies.add('@angular/core')
      }
      // Check for Node.js
      if (content.includes('express') || content.includes('node')) {
        dependencies.add('express')
      }
      // Check for CSS frameworks
      if (content.includes('tailwind') || content.includes('bootstrap')) {
        dependencies.add('tailwindcss')
      }
    })
    
    return Array.from(dependencies)
  }

  // Generate build instructions (like Lovable)
  generateBuildInstructions(generatedCode) {
    const hasReact = Object.values(generatedCode).some(content => 
      content.includes('React') || content.includes('react')
    )
    const hasNode = Object.values(generatedCode).some(content => 
      content.includes('express') || content.includes('node')
    )
    
    if (hasReact) {
      return {
        install: 'npm install',
        start: 'npm start',
        build: 'npm run build',
        dev: 'npm run dev'
      }
    } else if (hasNode) {
      return {
        install: 'npm install',
        start: 'node server.js',
        dev: 'nodemon server.js'
      }
    } else {
      return {
        install: 'No dependencies required',
        start: 'Open index.html in browser',
        build: 'No build process required'
      }
    }
  }

  // Generate intelligent code based on prompt analysis
  generateIntelligentCode(prompt, context = {}) {
    console.log('🧠 Analyzing prompt:', prompt)
    
    // Parse the user's request to understand what they actually want
    const analysis = this.analyzeUserRequest(prompt)
    console.log('📋 Analysis result:', analysis)
    
    // Generate code based on the specific request
    return this.generateSpecificCode(prompt, analysis)
  }

  // Analyze what the user actually wants
  analyzeUserRequest(prompt) {
    // Ensure prompt is a string
    const promptString = typeof prompt === 'string' ? prompt : JSON.stringify(prompt)
    const lowerPrompt = promptString.toLowerCase()
    
    return {
      // Detect specific functionality
      hasButton: lowerPrompt.includes('button') || lowerPrompt.includes('click'),
      hasForm: lowerPrompt.includes('form') || lowerPrompt.includes('input') || lowerPrompt.includes('submit'),
      hasCalculator: lowerPrompt.includes('calculator') || lowerPrompt.includes('calculate') || lowerPrompt.includes('math'),
      hasColorChange: lowerPrompt.includes('color') || lowerPrompt.includes('change color'),
      hasCounter: lowerPrompt.includes('counter') || lowerPrompt.includes('count') || lowerPrompt.includes('increment'),
      hasTodo: lowerPrompt.includes('todo') || lowerPrompt.includes('task') || lowerPrompt.includes('list'),
      hasGame: lowerPrompt.includes('game') || lowerPrompt.includes('play') || lowerPrompt.includes('guess'),
      hasAnimation: lowerPrompt.includes('animation') || lowerPrompt.includes('animate') || lowerPrompt.includes('spinning'),
      hasAPI: lowerPrompt.includes('api') || lowerPrompt.includes('fetch') || lowerPrompt.includes('request'),
      
      // Detect technology preferences
      wantsReact: lowerPrompt.includes('react') || lowerPrompt.includes('component'),
      wantsVue: lowerPrompt.includes('vue'),
      wantsAngular: lowerPrompt.includes('angular'),
      wantsPython: lowerPrompt.includes('python') || lowerPrompt.includes('flask') || lowerPrompt.includes('django'),
      wantsNode: lowerPrompt.includes('node') || lowerPrompt.includes('express'),
      
      // Detect specific features
      wantsDatabase: lowerPrompt.includes('database') || lowerPrompt.includes('store') || lowerPrompt.includes('save'),
      wantsAuth: lowerPrompt.includes('login') || lowerPrompt.includes('auth') || lowerPrompt.includes('user'),
      wantsResponsive: lowerPrompt.includes('responsive') || lowerPrompt.includes('mobile'),
      wantsStyling: lowerPrompt.includes('css') || lowerPrompt.includes('style') || lowerPrompt.includes('design'),
      
      // Extract specific requirements
      specificFeature: this.extractSpecificFeature(prompt),
      appName: this.extractAppName(prompt),
      targetLanguage: this.detectTargetLanguage(prompt)
    }
  }

  // Extract specific feature from prompt
  extractSpecificFeature(prompt) {
    const promptString = typeof prompt === 'string' ? prompt : JSON.stringify(prompt)
    const lowerPrompt = promptString.toLowerCase()
    
    if (lowerPrompt.includes('factorial')) return 'factorial'
    if (lowerPrompt.includes('fibonacci')) return 'fibonacci'
    if (lowerPrompt.includes('prime')) return 'prime'
    if (lowerPrompt.includes('sort')) return 'sort'
    if (lowerPrompt.includes('search')) return 'search'
    if (lowerPrompt.includes('timer')) return 'timer'
    if (lowerPrompt.includes('clock')) return 'clock'
    if (lowerPrompt.includes('weather')) return 'weather'
    if (lowerPrompt.includes('chat')) return 'chat'
    if (lowerPrompt.includes('quiz')) return 'quiz'
    
    return null
  }

  // Detect target programming language
  detectTargetLanguage(prompt) {
    const promptString = typeof prompt === 'string' ? prompt : JSON.stringify(prompt)
    const lowerPrompt = promptString.toLowerCase()
    
    if (lowerPrompt.includes('python')) return 'python'
    if (lowerPrompt.includes('javascript') || lowerPrompt.includes('js')) return 'javascript'
    if (lowerPrompt.includes('react')) return 'react'
    if (lowerPrompt.includes('vue')) return 'vue'
    if (lowerPrompt.includes('angular')) return 'angular'
    if (lowerPrompt.includes('html')) return 'html'
    if (lowerPrompt.includes('css')) return 'css'
    
    return 'html' // Default to HTML
  }

  // Generate specific code based on analysis using AI
  async generateSpecificCode(prompt, analysis) {
    console.log('🎯 Generating specific code for:', analysis.specificFeature || 'general app')
    
    try {
      // Use AI to generate code based on the actual prompt
      const systemPrompt = this.createSystemPrompt({
        projectType: 'web',
        existingFiles: [],
        dependencies: [],
        architecture: 'monolithic',
        frameworks: ['html', 'css', 'javascript']
      })
      
      const fullPrompt = `${systemPrompt}\n\nUser Request: ${prompt}\n\nGenerate a complete, working application with all the features requested. Return the code as a JSON object with files.`
      
      // Select the best model for the task
      const model = this.selectBestModel(prompt, {})
      const modelKey = this.availableModels[model]?.model || 'codellama/CodeLlama-7b-Python-hf'
      
      console.log('🤖 Using AI model:', modelKey)
      console.log('📝 Full prompt:', fullPrompt)
      
      // Call AI API to generate code
      const aiResponse = await this.callHuggingFaceAPI(
        modelKey,
        fullPrompt,
        2048, // max tokens
        0.7   // temperature
      )
      
      console.log('🤖 AI Response received:', aiResponse)
      
      // Parse AI response
      const generatedCode = await this.parseAIResponse(aiResponse, prompt)
      
      if (generatedCode && Object.keys(generatedCode).length > 0) {
        console.log('✅ AI generated code successfully')
        return generatedCode
      } else {
        console.log('⚠️ AI response was empty, using fallback')
        return await this.createFallbackResponse(prompt, {})
      }
      
    } catch (error) {
      console.error('❌ AI code generation failed:', error)
      console.log('🔄 Falling back to template generation...')
      
      // Fallback to templates only if AI fails
      if (analysis.hasTodo) {
        return this.createTodoTemplate(prompt)
      }
      
      if (analysis.hasAPI) {
        return this.createAPITemplate(prompt)
      }
      
      if (analysis.specificFeature === 'weather') {
        return this.generateWeatherApp(prompt)
      }
      
      // Default fallback
      return this.createDefaultTemplate(prompt)
    }
  }

  // Select the best model for the task
  selectBestModel(prompt, context) {
    const promptString = typeof prompt === 'string' ? prompt : JSON.stringify(prompt)
    const lowerPrompt = promptString.toLowerCase()
    
    // Code-specific models
    if (lowerPrompt.includes('python') || lowerPrompt.includes('django') || lowerPrompt.includes('flask')) {
      return 'codellama-7b'
    }
    if (lowerPrompt.includes('javascript') || lowerPrompt.includes('react') || lowerPrompt.includes('node')) {
      return 'starcoder-15b'
    }
    if (lowerPrompt.includes('java') || lowerPrompt.includes('spring')) {
      return 'deepseek-coder'
    }
    if (lowerPrompt.includes('c++') || lowerPrompt.includes('cpp') || lowerPrompt.includes('rust')) {
      return 'codellama-13b'
    }
    if (lowerPrompt.includes('web') || lowerPrompt.includes('html') || lowerPrompt.includes('css')) {
      return 'wizardcoder-7b'
    }
    
    // Default to CodeLlama 7B for general code generation
    return 'codellama-7b'
  }

  // Call Hugging Face Inference API
  async callHuggingFaceAPI(model, prompt, maxTokens, temperature) {
    const response = await axios.post(
      `${this.baseURL}/${model}`,
      {
        inputs: prompt,
        parameters: {
          max_new_tokens: maxTokens,
          temperature: temperature,
          return_full_text: false,
          do_sample: true
        }
      },
      {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json'
        },
        timeout: 30000
      }
    )
    
    return response.data
  }

  // Create system prompt
  createSystemPrompt(context = {}) {
    const conversationContext = context.conversationHistory?.length > 0 ? 
      `\n\nConversation Context:
- Previous messages: ${context.conversationHistory.length} messages
- Recent conversation: ${context.recentMessages?.slice(-3).map(msg => `${msg.type}: ${msg.content}`).join('\n') || 'none'}
- Project context: ${JSON.stringify(context.projectContext || {})}` : ''

    // Add web context if available
    const webContext = context.webContext ? 
      `\n\nWeb Search Context (Current Information):
- Summary: ${context.webContext.summary || 'No summary available'}
- Best Practices: ${context.webContext.bestPractices?.slice(0, 5).join(', ') || 'None found'}
- Current Resources: ${context.webContext.resources?.length || 0} resources found
- Recommendations: ${context.webContext.recommendations?.slice(0, 3).join(', ') || 'None found'}
- Current Trends: ${context.webContext.trends?.length || 0} trends identified
- Key Information: ${context.webContext.currentInfo?.slice(0, 3).map(info => info.title).join(', ') || 'None found'}` : ''

    return `You are an expert software developer and code generator with advanced conversation capabilities. Generate complete, working applications based on user requests and maintain context across conversations.

Guidelines:
1. Always generate complete, runnable code
2. Include all necessary files (HTML, CSS, JS, etc.)
3. Use modern best practices
4. Make the code clean and well-commented
5. Ensure the application is functional and user-friendly
6. Maintain conversation context and remember previous requests
7. Handle corrections and improvements intelligently
8. Provide incremental updates when requested
9. Suggest additional features based on context
10. Use web search context to provide current, accurate information
11. Incorporate best practices from web search results
12. Reference current trends and technologies when relevant
13. Apply industry-specific knowledge from web context

Context:
- Project Type: ${context.projectType || 'web'}
- Existing Files: ${context.existingFiles?.length || 0} files
- Dependencies: ${context.dependencies?.join(', ') || 'none'}
- Architecture: ${context.architecture || 'monolithic'}
- Frameworks: ${context.frameworks?.join(', ') || 'vanilla'}${conversationContext}${webContext}

Return your response as a JSON object with this structure:
{
  "files": {
    "filename1.ext": "file content here",
    "filename2.ext": "file content here"
  },
  "description": "Brief description of what was generated",
  "instructions": "How to run or use the generated code",
  "message": "Conversational response to the user",
  "suggestions": ["Additional feature suggestions based on context"]
}

Generate practical, working applications that users can immediately use. If this is a correction or improvement request, modify the existing code appropriately while maintaining functionality.`
  }

  // Parse AI response
  async parseAIResponse(response, originalPrompt) {
    try {
      // Handle different response formats from Hugging Face
      let content = ''
      
      if (Array.isArray(response) && response.length > 0) {
        content = response[0].generated_text || response[0].text || ''
      } else if (response.generated_text) {
        content = response.generated_text
      } else if (response.text) {
        content = response.text
      } else {
        content = JSON.stringify(response)
      }
      
      // Try to extract JSON from the response
      const jsonMatch = content.match(/\{[\s\S]*\}/)
      if (jsonMatch) {
        const parsed = JSON.parse(jsonMatch[0])
        if (parsed.files) {
          return parsed.files
        }
      }
      
      // If no valid JSON, create fallback response
      return await this.createFallbackResponse(originalPrompt, {})
      
    } catch (error) {
      console.error('❌ Failed to parse AI response:', error)
      return await this.createFallbackResponse(originalPrompt, {})
    }
  }

  // Generate Web Application
  generateWebApp(prompt) {
    const appName = this.extractAppName(prompt) || 'Web App'
    return {
      'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${appName}</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>${appName}</h1>
        <p>Generated based on: "${prompt}"</p>
        
        <div class="content">
            <button id="colorButton" class="btn">Click me to change color!</button>
            <div id="output" class="output"></div>
        </div>
    </div>
    
    <script src="script.js"></script>
</body>
</html>`,
      'styles.css': `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  color: white;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.content {
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 1rem;
  margin-top: 2rem;
}

.btn {
  background: #007bff;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn:hover {
  background: #0056b3;
  transform: translateY(-2px);
}

.output {
  margin-top: 2rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  min-height: 100px;
}`,
      'script.js': `// ${appName} - Generated by DreamBuild AI
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('colorButton');
    const output = document.getElementById('output');
    
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3'];
    let currentColorIndex = 0;
    
    button.addEventListener('click', function() {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        button.style.backgroundColor = randomColor;
        
        output.innerHTML = \`
            <h3>Button clicked!</h3>
            <p>Color changed to: <span style="color: \${randomColor}">\${randomColor}</span></p>
            <p>Timestamp: \${new Date().toLocaleTimeString()}</p>
        \`;
        
        // Add some animation
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 150);
    });

});`,
      'package.json': `{
  "name": "${appName.toLowerCase().replace(/\s+/g, '-')}",
  "version": "1.0.0",
  "description": "Generated by DreamBuild AI",
  "main": "index.html",
  "scripts": {
    "start": "python -m http.server 8000",
    "dev": "python -m http.server 8000"
  },
  "keywords": ["web", "html", "javascript"],
  "author": "DreamBuild AI",
  "license": "MIT"
}`
    }
  }

  // Generate React Application
  generateReactApp(prompt) {
    const appName = this.extractAppName(prompt) || 'React App'
    return {
      'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${appName}</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div id="root"></div>
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/babel" src="App.jsx"></script>
</body>
</html>`,
      'App.jsx': `import React, { useState } from 'react';

function ${appName.replace(/\s+/g, '')}() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('Hello from React!');

  const handleClick = () => {
    setCount(count + 1);
    setMessage(\`Button clicked \${count + 1} times!\`);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>${appName}</h1>
        <p>Generated based on: "${prompt}"</p>
      </header>
      
      <main className="app-content">
        <div className="card">
          <h2>Interactive Counter</h2>
          <p className="message">{message}</p>
          <button onClick={handleClick} className="btn">
            Count: {count}
          </button>
        </div>
        
        <div className="card">
          <h2>Features</h2>
          <ul>
            <li>React Hooks (useState)</li>
            <li>Event Handling</li>
            <li>Dynamic Content</li>
            <li>Modern Styling</li>
          </ul>
        </div>
      </main>
    </div>
  );
}

ReactDOM.render(<${appName.replace(/\s+/g, '')} />, document.getElementById('root'));`,
      'styles.css': `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  color: white;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-header {
  text-align: center;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.1);
}

.app-header h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.app-content {
  flex: 1;
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.card {
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 1rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.card h2 {
  margin-bottom: 1rem;
  color: #fff;
}

.message {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #4ecdc4;
}

.btn {
  background: #007bff;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn:hover {
  background: #0056b3;
  transform: translateY(-2px);
}

ul {
  list-style: none;
  padding: 0;
}

li {
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

li:before {
  content: "✓ ";
  color: #4ecdc4;
  font-weight: bold;
}`,
      'package.json': `{
  "name": "${appName.toLowerCase().replace(/\s+/g, '-')}",
  "version": "1.0.0",
  "description": "Generated by DreamBuild AI",
  "main": "index.html",
  "scripts": {
    "start": "python -m http.server 8000",
    "dev": "python -m http.server 8000"
  },
  "keywords": ["react", "javascript", "frontend"],
  "author": "DreamBuild AI",
  "license": "MIT"
}`
    }
  }

  // Generate JavaScript Application
  generateJavaScriptApp(prompt) {
    const appName = this.extractAppName(prompt) || 'JavaScript App'
    return {
      'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${appName}</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>${appName}</h1>
        <p>Generated based on: "${prompt}"</p>
        
        <div class="content">
            <div class="input-group">
                <input type="text" id="userInput" placeholder="Enter something...">
                <button id="processBtn" class="btn">Process</button>
            </div>
            <div id="result" class="result"></div>
        </div>
    </div>
    
    <script src="script.js"></script>
</body>
</html>`,
      'script.js': `// ${appName} - Generated by DreamBuild AI
class ${appName.replace(/\s+/g, '')} {
    constructor() {
        this.input = document.getElementById('userInput');
        this.button = document.getElementById('processBtn');
        this.result = document.getElementById('result');
        
        this.init();
    }
    
    init() {
        this.button.addEventListener('click', () => this.processInput());
        this.input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.processInput();
        });

    }
    
    processInput() {
        const value = this.input.value.trim();
        if (!value) {
            this.showResult('Please enter something!', 'error');
            return;
        }
        
        // Process the input
        const processed = this.processValue(value);
        this.showResult(processed, 'success');
    }
    
    processValue(value) {
        // Example processing functions
        const functions = {
            reverse: () => value.split('').reverse().join(''),
            uppercase: () => value.toUpperCase(),
            lowercase: () => value.toLowerCase(),
            length: () => \`Length: \${value.length} characters\`,
            words: () => \`Words: \${value.split(' ').length}\`,
            palindrome: () => {
                const reversed = value.split('').reverse().join('');
                return \`Is palindrome: \${value === reversed}\`;
            }
        };
        
        const results = Object.entries(functions).map(([name, fn]) => 
            \`<strong>\${name}:</strong> \${fn()}\`
        ).join('<br>');
        
        return \`
            <h3>Processing Results:</h3>
            <p><strong>Original:</strong> \${value}</p>
            <div class="results">\${results}</div>
        \`;
    }
    
    showResult(message, type) {
        this.result.innerHTML = message;
        this.result.className = 'result ' + type;
        
        // Clear input
        this.input.value = '';
        this.input.focus();
    }
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    new ${appName.replace(/\s+/g, '')}();
});`,
      'styles.css': `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  color: white;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.content {
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 1rem;
  margin-top: 2rem;
}

.input-group {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}

input {
  flex: 1;
  padding: 1rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.9);
  color: #333;
}

.btn {
  background: #007bff;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn:hover {
  background: #0056b3;
  transform: translateY(-2px);
}

.result {
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 0.5rem;
  text-align: left;
  min-height: 100px;
}

.result.success {
  border-left: 4px solid #4ecdc4;
}

.result.error {
  border-left: 4px solid #ff6b6b;
}

.results {
  margin-top: 1rem;
  line-height: 1.6;
}`,
      'package.json': `{
  "name": "${appName.toLowerCase().replace(/\s+/g, '-')}",
  "version": "1.0.0",
  "description": "Generated by DreamBuild AI",
  "main": "index.html",
  "scripts": {
    "start": "python -m http.server 8000",
    "dev": "python -m http.server 8000"
  },
  "keywords": ["javascript", "web", "interactive"],
  "author": "DreamBuild AI",
  "license": "MIT"
}`
    }
  }

  // Generate specific features
  generateSpecificFeature(prompt, feature) {
    console.log('🎯 Generating specific feature:', feature)
    
    switch (feature) {
      case 'factorial':
        return this.generateFactorialApp(prompt)
      case 'fibonacci':
        return this.generateFibonacciApp(prompt)
      case 'prime':
        return this.generatePrimeApp(prompt)
      case 'sort':
        return this.generateSortApp(prompt)
      case 'search':
        return this.generateSearchApp(prompt)
      case 'timer':
        return this.generateTimerApp(prompt)
      case 'clock':
        return this.generateClockApp(prompt)
      case 'weather':
        return this.generateWeatherApp(prompt)
      case 'chat':
        return this.generateChatApp(prompt)
      case 'quiz':
        return this.generateQuizApp(prompt)
      default:
        return this.generateWebApp(prompt)
    }
  }

  // Generate Factorial Calculator
  generateFactorialApp(prompt) {
    const appName = this.extractAppName(prompt) || 'Factorial Calculator'
    return {
      'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${appName}</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>${appName}</h1>
        <p>Calculate the factorial of any number</p>
        
        <div class="calculator">
            <div class="input-group">
                <label for="numberInput">Enter a number:</label>
                <input type="number" id="numberInput" placeholder="Enter a number" min="0" max="170">
                <button id="calculateBtn" class="btn">Calculate Factorial</button>
            </div>
            
            <div id="result" class="result"></div>
            
            <div class="examples">
                <h3>Examples:</h3>
                <ul>
                    <li>5! = 120</li>
                    <li>10! = 3,628,800</li>
                    <li>0! = 1</li>
                </ul>
            </div>
        </div>
    </div>
    
    <script src="script.js"></script>
</body>
</html>`,
      'script.js': `// ${appName} - Generated by DreamBuild AI
class FactorialCalculator {
    constructor() {
        this.input = document.getElementById('numberInput');
        this.button = document.getElementById('calculateBtn');
        this.result = document.getElementById('result');
        
        this.init();
    }
    
    init() {
        this.button.addEventListener('click', () => this.calculateFactorial());
        this.input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.calculateFactorial();
        });

    }
    
    calculateFactorial() {
        const number = parseInt(this.input.value);
        
        if (isNaN(number) || number < 0) {
            this.showResult('Please enter a valid non-negative number!', 'error');
            return;
        }
        
        if (number > 170) {
            this.showResult('Number too large! Please enter a number ≤ 170', 'error');
            return;
        }
        
        const startTime = performance.now();
        const factorial = this.computeFactorial(number);
        const endTime = performance.now();
        const timeTaken = (endTime - startTime).toFixed(2);
        
        this.showResult(\`
            <h3>Result: \${number}!</h3>
            <p class="factorial-result">\${this.formatNumber(factorial)}</p>
            <p class="time-taken">Calculated in \${timeTaken}ms</p>
            <p class="explanation">\${this.getExplanation(number, factorial)}\</p>
        \`, 'success');
    }
    
    computeFactorial(n) {
        if (n === 0 || n === 1) return 1;
        
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
    
    formatNumber(num) {
        return num.toLocaleString();
    }
    
    getExplanation(n, result) {
        if (n === 0) return "0! = 1 (by definition)";
        if (n === 1) return "1! = 1";
        return \`\${n}! = \${Array.from({length: n}, (_, i) => i + 1).join(' × ')} = \${this.formatNumber(result)}\`;
    }
    
    showResult(message, type) {
        this.result.innerHTML = message;
        this.result.className = 'result ' + type;
    }
}

// Initialize the calculator
document.addEventListener('DOMContentLoaded', () => {
    new FactorialCalculator();
});`,
      'styles.css': `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  color: white;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.calculator {
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 1rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin-top: 2rem;
}

.input-group {
  margin-bottom: 2rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  background: rgba(255, 255, 255, 0.9);
  color: #333;
  margin-bottom: 1rem;
}

.btn {
  background: #007bff;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
}

.btn:hover {
  background: #0056b3;
  transform: translateY(-2px);
}

.result {
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
  text-align: left;
}

.result.success {
  border-left: 4px solid #4ecdc4;
}

.result.error {
  border-left: 4px solid #ff6b6b;
}

.factorial-result {
  font-size: 2rem;
  font-weight: bold;
  color: #4ecdc4;
  margin: 1rem 0;
}

.time-taken {
  color: #ffd700;
  font-style: italic;
}

.explanation {
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 0.5rem;
  margin-top: 1rem;
  font-family: monospace;
}

.examples {
  text-align: left;
}

.examples h3 {
  margin-bottom: 1rem;
  color: #4ecdc4;
}

.examples ul {
  list-style: none;
  padding: 0;
}

.examples li {
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  font-family: monospace;
}`,
      'package.json': `{
  "name": "${appName.toLowerCase().replace(/\s+/g, '-')}",
  "version": "1.0.0",
  "description": "Generated by DreamBuild AI",
  "main": "index.html",
  "scripts": {
    "start": "python -m http.server 8000",
    "dev": "python -m http.server 8000"
  },
  "keywords": ["factorial", "calculator", "math"],
  "author": "DreamBuild AI",
  "license": "MIT"
}`
    }
  }

  // Generate Fibonacci Calculator
  generateFibonacciApp(prompt) {
    const appName = this.extractAppName(prompt) || 'Fibonacci Calculator'
    return {
      'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${appName}</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>${appName}</h1>
        <p>Generate Fibonacci sequence up to any number</p>
        
        <div class="calculator">
            <div class="input-group">
                <label for="numberInput">Enter number of terms:</label>
                <input type="number" id="numberInput" placeholder="Enter number of terms" min="1" max="50">
                <button id="calculateBtn" class="btn">Generate Fibonacci</button>
            </div>
            
            <div id="result" class="result"></div>
            
            <div class="examples">
                <h3>Fibonacci Sequence:</h3>
                <p>Each number is the sum of the two preceding ones: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...</p>
            </div>
        </div>
    </div>
    
    <script src="script.js"></script>
</body>
</html>`,
      'script.js': `// ${appName} - Generated by DreamBuild AI
class FibonacciCalculator {
    constructor() {
        this.input = document.getElementById('numberInput');
        this.button = document.getElementById('calculateBtn');
        this.result = document.getElementById('result');
        
        this.init();
    }
    
    init() {
        this.button.addEventListener('click', () => this.generateFibonacci());
        this.input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.generateFibonacci();
        });

    }
    
    generateFibonacci() {
        const terms = parseInt(this.input.value);
        
        if (isNaN(terms) || terms < 1) {
            this.showResult('Please enter a valid positive number!', 'error');
            return;
        }
        
        if (terms > 50) {
            this.showResult('Please enter a number ≤ 50 for better performance', 'error');
            return;
        }
        
        const startTime = performance.now();
        const sequence = this.computeFibonacci(terms);
        const endTime = performance.now();
        const timeTaken = (endTime - startTime).toFixed(2);
        
        this.showResult(\`
            <h3>Fibonacci Sequence (first \${terms} terms):</h3>
            <div class="sequence">\${this.formatSequence(sequence)}</div>
            <p class="time-taken">Generated in \${timeTaken}ms</p>
            <p class="golden-ratio">Golden Ratio: \${this.calculateGoldenRatio(sequence)}</p>
        \`, 'success');
    }
    
    computeFibonacci(n) {
        if (n === 1) return [0];
        if (n === 2) return [0, 1];
        
        const sequence = [0, 1];
        for (let i = 2; i < n; i++) {
            sequence.push(sequence[i - 1] + sequence[i - 2]);
        }
        return sequence;
    }
    
    formatSequence(sequence) {
        return sequence.map((num, index) => 
            \`<span class="fib-number">F\${index} = \${num.toLocaleString()}</span>\`
        ).join('<br>');
    }
    
    calculateGoldenRatio(sequence) {
        if (sequence.length < 2) return 'N/A';
        const last = sequence[sequence.length - 1];
        const secondLast = sequence[sequence.length - 2];
        if (secondLast === 0) return 'N/A';
        return (last / secondLast).toFixed(6);
    }
    
    showResult(message, type) {
        this.result.innerHTML = message;
        this.result.className = 'result ' + type;
    }
}

// Initialize the calculator
document.addEventListener('DOMContentLoaded', () => {
    new FibonacciCalculator();
});`,
      'styles.css': `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  color: white;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.calculator {
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 1rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin-top: 2rem;
}

.input-group {
  margin-bottom: 2rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  background: rgba(255, 255, 255, 0.9);
  color: #333;
  margin-bottom: 1rem;
}

.btn {
  background: #007bff;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
}

.btn:hover {
  background: #0056b3;
  transform: translateY(-2px);
}

.result {
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
  text-align: left;
}

.result.success {
  border-left: 4px solid #4ecdc4;
}

.result.error {
  border-left: 4px solid #ff6b6b;
}

.sequence {
  font-family: monospace;
  line-height: 1.8;
  margin: 1rem 0;
}

.fib-number {
  display: inline-block;
  background: rgba(255, 255, 255, 0.1);
  padding: 0.5rem;
  margin: 0.25rem;
  border-radius: 0.25rem;
  font-weight: bold;
}

.time-taken {
  color: #ffd700;
  font-style: italic;
  margin: 1rem 0;
}

.golden-ratio {
  color: #4ecdc4;
  font-weight: bold;
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 0.5rem;
  margin-top: 1rem;
}

.examples {
  text-align: left;
}

.examples h3 {
  margin-bottom: 1rem;
  color: #4ecdc4;
}`,
      'package.json': `{
  "name": "${appName.toLowerCase().replace(/\s+/g, '-')}",
  "version": "1.0.0",
  "description": "Generated by DreamBuild AI",
  "main": "index.html",
  "scripts": {
    "start": "python -m http.server 8000",
    "dev": "python -m http.server 8000"
  },
  "keywords": ["fibonacci", "sequence", "math"],
  "author": "DreamBuild AI",
  "license": "MIT"
}`
    }
  }

  // Generate Weather App
  generateWeatherApp(prompt) {
    const appName = this.extractAppName(prompt) || 'Weather App'
    return {
      'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${appName}</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>${appName}</h1>
        <p>Get current weather and forecast for any city</p>
        
        <div class="weather-app">
            <div class="search-section">
                <div class="input-group">
                    <input type="text" id="cityInput" placeholder="Enter city name" />
                    <button id="searchBtn" class="btn">Get Weather</button>
                </div>
                <div class="location-info">
                    <button id="currentLocationBtn" class="btn-secondary">Use Current Location</button>
                </div>
            </div>
            
            <div id="loading" class="loading hidden">
                <div class="spinner"></div>
                <p>Loading weather data...</p>
            </div>
            
            <div id="error" class="error hidden">
                <p>Unable to fetch weather data. Please try again.</p>
            </div>
            
            <div id="weatherData" class="weather-data hidden">
                <div class="current-weather">
                    <h2 id="cityName"></h2>
                    <div class="weather-main">
                        <div class="temperature">
                            <span id="currentTemp"></span>
                            <span class="unit">°C</span>
                        </div>
                        <div class="weather-icon">
                            <img id="weatherIcon" src="" alt="Weather Icon" />
                        </div>
                    </div>
                    <p id="weatherDescription" class="description"></p>
                    <div class="weather-details">
                        <div class="detail">
                            <span class="label">Feels like:</span>
                            <span id="feelsLike"></span>
                        </div>
                        <div class="detail">
                            <span class="label">Humidity:</span>
                            <span id="humidity"></span>
                        </div>
                        <div class="detail">
                            <span class="label">Wind:</span>
                            <span id="windSpeed"></span>
                        </div>
                        <div class="detail">
                            <span class="label">Pressure:</span>
                            <span id="pressure"></span>
                        </div>
                    </div>
                </div>
                
                <div class="forecast">
                    <h3>5-Day Forecast</h3>
                    <div id="forecastList" class="forecast-list"></div>
                </div>
            </div>
        </div>
    </div>
    
    <script src="script.js"></script>
</body>
</html>`,
      'script.js': `// ${appName} - Generated by DreamBuild AI
class WeatherApp {
    constructor() {
        this.apiKey = 'demo'; // In production, use a real API key
        this.baseURL = 'https://api.openweathermap.org/data/2.5';
        this.cityInput = document.getElementById('cityInput');
        this.searchBtn = document.getElementById('searchBtn');
        this.currentLocationBtn = document.getElementById('currentLocationBtn');
        this.loading = document.getElementById('loading');
        this.error = document.getElementById('error');
        this.weatherData = document.getElementById('weatherData');
        
        this.init();
    }
    
    init() {
        this.searchBtn.addEventListener('click', () => this.searchWeather());
        this.currentLocationBtn.addEventListener('click', () => this.getCurrentLocationWeather());
        this.cityInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.searchWeather();
        });

    }
    
    async searchWeather() {
        const city = this.cityInput.value.trim();
        if (!city) {
            this.showError('Please enter a city name');
            return;
        }
        
        this.showLoading();
        try {
            const weatherData = await this.fetchWeatherData(city);
            this.displayWeather(weatherData);
        } catch (error) {
            this.showError('Unable to fetch weather data. Please try again.');
        }
    }
    
    async getCurrentLocationWeather() {
        if (!navigator.geolocation) {
            this.showError('Geolocation is not supported by this browser.');
            return;
        }
        
        this.showLoading();
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                try {
                    const { latitude, longitude } = position.coords;
                    const weatherData = await this.fetchWeatherByCoords(latitude, longitude);
                    this.displayWeather(weatherData);
                } catch (error) {
                    this.showError('Unable to fetch weather data for your location.');
                }
            },
            (error) => {
                this.showError('Unable to get your location. Please enter a city name.');
            }
        );
    }
    
    async fetchWeatherData(city) {
        // Simulate API call with demo data
        return new Promise((resolve) => {
            setTimeout(() => {
                const demoData = this.getDemoWeatherData(city);
                resolve(demoData);
            }, 1000);
        });
    }
    
    async fetchWeatherByCoords(lat, lon) {
        // Simulate API call with demo data
        return new Promise((resolve) => {
            setTimeout(() => {
                const demoData = this.getDemoWeatherData('Current Location');
                resolve(demoData);
            }, 1000);
        });
    }
    
    getDemoWeatherData(city) {
        const cities = {
            'london': { name: 'London', temp: 15, description: 'Cloudy', humidity: 75, wind: 12, pressure: 1013 },
            'new york': { name: 'New York', temp: 22, description: 'Sunny', humidity: 60, wind: 8, pressure: 1015 },
            'tokyo': { name: 'Tokyo', temp: 18, description: 'Rainy', humidity: 85, wind: 15, pressure: 1008 },
            'paris': { name: 'Paris', temp: 16, description: 'Partly Cloudy', humidity: 70, wind: 10, pressure: 1012 },
            'sydney': { name: 'Sydney', temp: 25, description: 'Clear', humidity: 55, wind: 6, pressure: 1020 }
        };
        
        const cityKey = city.toLowerCase();
        const cityData = cities[cityKey] || {
            name: city,
            temp: Math.floor(Math.random() * 30) + 5,
            description: ['Sunny', 'Cloudy', 'Rainy', 'Clear', 'Partly Cloudy'][Math.floor(Math.random() * 5)],
            humidity: Math.floor(Math.random() * 40) + 40,
            wind: Math.floor(Math.random() * 20) + 5,
            pressure: Math.floor(Math.random() * 20) + 1000
        };
        
        return {
            current: {
                name: cityData.name,
                temp: cityData.temp,
                description: cityData.description,
                feels_like: cityData.temp + Math.floor(Math.random() * 4) - 2,
                humidity: cityData.humidity,
                wind_speed: cityData.wind,
                pressure: cityData.pressure,
                icon: this.getWeatherIcon(cityData.description)
            },
            forecast: this.generateForecast(cityData.temp, cityData.description)
        };
    }
    
    getWeatherIcon(description) {
        const icons = {
            'sunny': '☀️',
            'clear': '☀️',
            'cloudy': '☁️',
            'rainy': '🌧️',
            'partly cloudy': '⛅'
        };
        return icons[description.toLowerCase()] || '🌤️';
    }
    
    generateForecast(baseTemp, baseDescription) {
        const forecast = [];
        for (let i = 1; i <= 5; i++) {
            const temp = baseTemp + Math.floor(Math.random() * 10) - 5;
            const description = ['Sunny', 'Cloudy', 'Rainy', 'Clear', 'Partly Cloudy'][Math.floor(Math.random() * 5)];
            forecast.push({
                day: new Date(Date.now() + i * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { weekday: 'short' }),
                temp: temp,
                description: description,
                icon: this.getWeatherIcon(description)
            });
        }
        return forecast;
    }
    
    displayWeather(data) {
        this.hideLoading();
        this.hideError();
        
        // Current weather
        document.getElementById('cityName').textContent = data.current.name;
        document.getElementById('currentTemp').textContent = data.current.temp;
        document.getElementById('weatherDescription').textContent = data.current.description;
        document.getElementById('feelsLike').textContent = \`\${data.current.feels_like}°C\`;
        document.getElementById('humidity').textContent = \`\${data.current.humidity}%\`;
        document.getElementById('windSpeed').textContent = \`\${data.current.wind_speed} km/h\`;
        document.getElementById('pressure').textContent = \`\${data.current.pressure} hPa\`;
        document.getElementById('weatherIcon').src = \`data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y="50" font-size="50">\${data.current.icon}</text></svg>\`;
        
        // Forecast
        const forecastList = document.getElementById('forecastList');
        forecastList.innerHTML = data.forecast.map(day => \`
            <div class="forecast-item">
                <div class="day">\${day.day}</div>
                <div class="icon">\${day.icon}</div>
                <div class="temp">\${day.temp}°C</div>
                <div class="desc">\${day.description}</div>
            </div>
        \`).join('');
        
        this.weatherData.classList.remove('hidden');
    }
    
    showLoading() {
        this.loading.classList.remove('hidden');
        this.error.classList.add('hidden');
        this.weatherData.classList.add('hidden');
    }
    
    hideLoading() {
        this.loading.classList.add('hidden');
    }
    
    showError(message) {
        this.hideLoading();
        this.error.querySelector('p').textContent = message;
        this.error.classList.remove('hidden');
        this.weatherData.classList.add('hidden');
    }
    
    hideError() {
        this.error.classList.add('hidden');
    }
}

// Initialize the weather app
document.addEventListener('DOMContentLoaded', () => {
    new WeatherApp();
});`,
      'styles.css': `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(135deg, #74b9ff 0%, #0984e3 100%);
  min-height: 100vh;
  color: white;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.weather-app {
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 1rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin-top: 2rem;
}

.search-section {
  margin-bottom: 2rem;
}

.input-group {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

input {
  flex: 1;
  padding: 1rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1.1rem;
  background: rgba(255, 255, 255, 0.9);
  color: #333;
}

.btn {
  background: #007bff;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn:hover {
  background: #0056b3;
  transform: translateY(-2px);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 0.8rem 1.5rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.3);
}

.weather-data {
  text-align: left;
}

.current-weather {
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 1rem;
  margin-bottom: 2rem;
}

.weather-main {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.temperature {
  font-size: 4rem;
  font-weight: bold;
  color: #ffd700;
}

.unit {
  font-size: 2rem;
  color: #ffd700;
}

.weather-icon {
  font-size: 4rem;
}

.description {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-transform: capitalize;
}

.weather-details {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.detail {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.label {
  font-weight: bold;
  color: #ffd700;
}

.forecast {
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 1rem;
}

.forecast h3 {
  margin-bottom: 1rem;
  color: #ffd700;
}

.forecast-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
}

.forecast-item {
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 0.5rem;
  text-align: center;
}

.day {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.icon {
  font-size: 2rem;
  margin: 0.5rem 0;
}

.temp {
  font-size: 1.2rem;
  font-weight: bold;
  color: #ffd700;
}

.desc {
  font-size: 0.9rem;
  opacity: 0.8;
  text-transform: capitalize;
}

.loading, .error {
  text-align: center;
  padding: 2rem;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 1rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.hidden {
  display: none;
}

.error {
  color: #ff6b6b;
  background: rgba(255, 107, 107, 0.1);
  border: 1px solid rgba(255, 107, 107, 0.3);
  border-radius: 0.5rem;
  padding: 1rem;
}

@media (max-width: 768px) {
  .input-group {
    flex-direction: column;
  }
  
  .weather-main {
    flex-direction: column;
    text-align: center;
  }
  
  .temperature {
    font-size: 3rem;
  }
  
  .weather-details {
    grid-template-columns: 1fr;
  }
}`,
      'package.json': `{
  "name": "${appName.toLowerCase().replace(/\s+/g, '-')}",
  "version": "1.0.0",
  "description": "Generated by DreamBuild AI",
  "main": "index.html",
  "scripts": {
    "start": "python -m http.server 8000",
    "dev": "python -m http.server 8000"
  },
  "keywords": ["weather", "forecast", "api"],
  "author": "DreamBuild AI",
  "license": "MIT"
}`
    }
  }

  // Helper methods for context analysis
  detectProjectType(context) {
    const files = context.previousFiles || []
    if (files.some(f => f.includes('package.json'))) return 'node'
    if (files.some(f => f.includes('.jsx') || f.includes('.tsx'))) return 'react'
    if (files.some(f => f.includes('.vue'))) return 'vue'
    if (files.some(f => f.includes('.html'))) return 'web'
    return 'web'
  }

  analyzeDependencies(context) {
    // Analyze existing dependencies from context
    return context.dependencies || []
  }

  detectCodingStandards(context) {
    // Detect coding standards from existing code
    return {
      indentation: '2 spaces',
      quotes: 'single',
      semicolons: true,
      trailingCommas: true
    }
  }

  detectArchitecture(context) {
    // Detect project architecture
    const files = context.previousFiles || []
    if (files.some(f => f.includes('components'))) return 'component-based'
    if (files.some(f => f.includes('pages'))) return 'page-based'
    return 'monolithic'
  }

  detectFrameworks(context) {
    const frameworks = []
    const files = context.previousFiles || []
    
    if (files.some(f => f.includes('react'))) frameworks.push('react')
    if (files.some(f => f.includes('vue'))) frameworks.push('vue')
    if (files.some(f => f.includes('angular'))) frameworks.push('angular')
    if (files.some(f => f.includes('express'))) frameworks.push('express')
    
    return frameworks
  }

  extractUserPreferences(context) {
    return {
      preferredFramework: 'react',
      styling: 'tailwind',
      stateManagement: 'hooks',
      testing: 'jest'
    }
  }

  detectEnvironment(context) {
    return {
      nodeVersion: '18+',
      packageManager: 'npm',
      bundler: 'vite',
      deployment: 'firebase'
    }
  }

  enhanceWithContext(code, context) {
    console.log('🔧 Enhancing code with context:', context)
    
    // Add context-aware enhancements
    const enhancedCode = { ...code }
    
    // Add context-aware comments to files
    Object.keys(enhancedCode).forEach(filename => {
      if (filename.endsWith('.js') || filename.endsWith('.jsx')) {
        const originalContent = enhancedCode[filename]
        const contextComment = `// Generated by DreamBuild AI with context awareness
// Project Type: ${context.projectType || 'web'}
// Architecture: ${context.architecture || 'monolithic'}
// Frameworks: ${context.frameworks?.join(', ') || 'vanilla'}
// Environment: ${context.environment?.nodeVersion || '18+'}

${originalContent}`
        enhancedCode[filename] = contextComment
      }
    })
    
    console.log('✅ Code enhanced with context awareness')
    return enhancedCode
  }

  extractFeatures(generatedCode) {
    const features = []
    const content = Object.values(generatedCode).join(' ').toLowerCase()
    
    console.log('🔍 Extracting features from generated code...')
    
    // Interactive features
    if (content.includes('addeventlistener') || content.includes('onclick') || content.includes('onchange')) {
      features.push('Interactive Elements')
    }
    
    // Data persistence
    if (content.includes('localstorage') || content.includes('sessionstorage') || content.includes('indexeddb')) {
      features.push('Data Persistence')
    }
    
    // API integration
    if (content.includes('fetch') || content.includes('axios') || content.includes('xhr') || content.includes('api')) {
      features.push('API Integration')
    }
    
    // Responsive design
    if (content.includes('responsive') || content.includes('mobile') || content.includes('media query') || content.includes('@media')) {
      features.push('Responsive Design')
    }
    
    // Animations
    if (content.includes('animation') || content.includes('transition') || content.includes('transform') || content.includes('keyframes')) {
      features.push('Animations')
    }
    
    // Forms
    if (content.includes('form') || content.includes('input') || content.includes('textarea') || content.includes('select')) {
      features.push('Form Handling')
    }
    
    // Authentication
    if (content.includes('login') || content.includes('auth') || content.includes('password') || content.includes('token')) {
      features.push('Authentication')
    }
    
    // Real-time features
    if (content.includes('websocket') || content.includes('socket') || content.includes('realtime') || content.includes('live')) {
      features.push('Real-time Updates')
    }
    
    // File handling
    if (content.includes('file') || content.includes('upload') || content.includes('download') || content.includes('blob')) {
      features.push('File Handling')
    }
    
    // Default features if none detected
    if (features.length === 0) {
      features.push('Modern UI', 'Interactive Elements', 'Responsive Design')
    }
    
    console.log('✅ Features extracted:', features)
    return features
  }

  generateScreenshots(generatedCode) {
    // Generate mock screenshots for preview
    return [
      'https://via.placeholder.com/800x600/4F46E5/FFFFFF?text=App+Preview+1',
      'https://via.placeholder.com/800x600/7C3AED/FFFFFF?text=App+Preview+2'
    ]
  }

  generateLiveDemo(generatedCode) {
    // Generate live demo URL
    return 'https://dreambuild-2024-app.web.app/preview'
  }

  extractTechStack(generatedCode) {
    const techStack = []
    const content = Object.values(generatedCode).join(' ').toLowerCase()
    
    console.log('🔍 Extracting tech stack from generated code...')
    
    // Frontend frameworks
    if (content.includes('react') || content.includes('jsx')) techStack.push('React')
    if (content.includes('vue') || content.includes('vue.js')) techStack.push('Vue.js')
    if (content.includes('angular')) techStack.push('Angular')
    if (content.includes('svelte')) techStack.push('Svelte')
    
    // Backend frameworks
    if (content.includes('express') || content.includes('node')) techStack.push('Node.js')
    if (content.includes('django') || content.includes('flask')) techStack.push('Python')
    if (content.includes('spring') || content.includes('java')) techStack.push('Java')
    
    // Web technologies
    if (content.includes('html')) techStack.push('HTML5')
    if (content.includes('css')) techStack.push('CSS3')
    if (content.includes('javascript') || content.includes('js')) techStack.push('JavaScript')
    if (content.includes('typescript') || content.includes('ts')) techStack.push('TypeScript')
    
    // CSS frameworks
    if (content.includes('tailwind') || content.includes('tailwindcss')) techStack.push('Tailwind CSS')
    if (content.includes('bootstrap')) techStack.push('Bootstrap')
    if (content.includes('material') || content.includes('mui')) techStack.push('Material-UI')
    
    // Databases
    if (content.includes('mongodb') || content.includes('mongo')) techStack.push('MongoDB')
    if (content.includes('mysql') || content.includes('sql')) techStack.push('SQL')
    if (content.includes('firebase')) techStack.push('Firebase')
    
    // Default tech stack if none detected
    if (techStack.length === 0) {
      techStack.push('HTML5', 'CSS3', 'JavaScript')
    }
    
    console.log('✅ Tech stack extracted:', techStack)
    return techStack
  }

  generateDeploymentInfo(generatedCode) {
    return {
      platform: 'Firebase Hosting',
      url: 'https://dreambuild-2024-app.web.app',
      status: 'Ready to deploy',
      instructions: 'Click deploy to publish your app'
    }
  }

  // Extract app name from prompt
  extractAppName(prompt) {
    const promptString = typeof prompt === 'string' ? prompt : JSON.stringify(prompt)
    const words = promptString.split(' ');
    const nameIndex = words.findIndex(word => 
      word.toLowerCase().includes('app') || 
      word.toLowerCase().includes('application') ||
      word.toLowerCase().includes('website') ||
      word.toLowerCase().includes('page')
    );
    
    if (nameIndex > 0) {
      return words.slice(0, nameIndex).join(' ');
    }
    
    return null;
  }

  // Generate a creative app name based on the prompt
  generateAppName(prompt) {
    const promptString = typeof prompt === 'string' ? prompt : JSON.stringify(prompt)
    const lowerPrompt = promptString.toLowerCase();
    
    // Extract key words from the prompt
    const keyWords = promptString.split(' ').filter(word => 
      word.length > 3 && 
      !['create', 'build', 'make', 'generate', 'app', 'application', 'website', 'page'].includes(word.toLowerCase())
    );
    
    // Generate creative names based on content
    if (lowerPrompt.includes('weather')) {
      return 'WeatherCast Pro';
    }
    if (lowerPrompt.includes('calculator')) {
      return 'CalcMaster';
    }
    if (lowerPrompt.includes('todo') || lowerPrompt.includes('task')) {
      return 'TaskFlow';
    }
    if (lowerPrompt.includes('game')) {
      return 'GameZone';
    }
    if (lowerPrompt.includes('chat')) {
      return 'ChatConnect';
    }
    if (lowerPrompt.includes('dashboard')) {
      return 'DashBoard Pro';
    }
    if (lowerPrompt.includes('ecommerce') || lowerPrompt.includes('store')) {
      return 'ShopMaster';
    }
    if (lowerPrompt.includes('blog')) {
      return 'BlogCraft';
    }
    if (lowerPrompt.includes('portfolio')) {
      return 'Portfolio Pro';
    }
    if (lowerPrompt.includes('social')) {
      return 'SocialConnect';
    }
    if (lowerPrompt.includes('music')) {
      return 'MusicHub';
    }
    if (lowerPrompt.includes('photo') || lowerPrompt.includes('image')) {
      return 'PhotoGallery';
    }
    if (lowerPrompt.includes('news')) {
      return 'NewsReader';
    }
    if (lowerPrompt.includes('recipe')) {
      return 'RecipeBook';
    }
    if (lowerPrompt.includes('fitness') || lowerPrompt.includes('workout')) {
      return 'FitTracker';
    }
    if (lowerPrompt.includes('finance') || lowerPrompt.includes('budget')) {
      return 'FinanceTracker';
    }
    if (lowerPrompt.includes('education') || lowerPrompt.includes('learn')) {
      return 'LearnHub';
    }
    if (lowerPrompt.includes('travel')) {
      return 'TravelGuide';
    }
    if (lowerPrompt.includes('food') || lowerPrompt.includes('restaurant')) {
      return 'FoodFinder';
    }
    if (lowerPrompt.includes('book') || lowerPrompt.includes('library')) {
      return 'BookShelf';
    }
    if (lowerPrompt.includes('calendar') || lowerPrompt.includes('schedule')) {
      return 'SchedulePro';
    }
    
    // Use key words to create a name
    if (keyWords.length > 0) {
      const firstWord = keyWords[0].charAt(0).toUpperCase() + keyWords[0].slice(1);
      const secondWord = keyWords.length > 1 ? keyWords[1].charAt(0).toUpperCase() + keyWords[1].slice(1) : 'App';
      return `${firstWord}${secondWord}`;
    }
    
    // Default creative names
    const creativeNames = [
      'DreamApp', 'InnovateHub', 'CreativeSpace', 'TechFlow', 'SmartApp',
      'NextGen', 'FutureApp', 'ProApp', 'EliteApp', 'MasterApp',
      'UltimateApp', 'PrimeApp', 'SuperApp', 'MegaApp', 'TurboApp'
    ];
    
    return creativeNames[Math.floor(Math.random() * creativeNames.length)];
  }

  // Select automatic theme based on prompt and context
  selectAutomaticTheme(prompt, context = {}) {
    console.log('🎨 Selecting automatic theme for prompt:', prompt)
    
    const promptString = typeof prompt === 'string' ? prompt : JSON.stringify(prompt)
    const lowerPrompt = promptString.toLowerCase()
    
    // Theme selection logic based on app type and context
    const themeSelection = {
      // Business/Professional apps
      business: {
        keywords: ['business', 'dashboard', 'admin', 'management', 'enterprise', 'professional', 'corporate'],
        theme: 'monochrome',
        confidence: 0.9
      },
      
      // Entertainment/Gaming apps
      entertainment: {
        keywords: ['game', 'entertainment', 'fun', 'play', 'music', 'video', 'media'],
        theme: 'vibrant',
        confidence: 0.9
      },
      
      // Health/Fitness apps
      health: {
        keywords: ['health', 'fitness', 'workout', 'medical', 'wellness', 'care', 'diet'],
        theme: 'forest',
        confidence: 0.8
      },
      
      // Education/Learning apps
      education: {
        keywords: ['learn', 'education', 'study', 'course', 'tutorial', 'knowledge', 'school'],
        theme: 'ocean',
        confidence: 0.8
      },
      
      // Creative/Design apps
      creative: {
        keywords: ['design', 'art', 'creative', 'draw', 'paint', 'edit', 'photo', 'image'],
        theme: 'purple',
        confidence: 0.8
      },
      
      // Communication/Social apps
      communication: {
        keywords: ['chat', 'social', 'message', 'connect', 'network', 'community', 'talk'],
        theme: 'sunset',
        confidence: 0.7
      },
      
      // Utility/Tool apps
      utility: {
        keywords: ['calculator', 'tool', 'utility', 'helper', 'converter', 'widget'],
        theme: 'modern',
        confidence: 0.6
      },
      
      // Dark theme preference
      dark: {
        keywords: ['dark', 'night', 'minimal', 'simple', 'clean'],
        theme: 'dark',
        confidence: 0.9
      },
      
      // Color-specific requests
      colorSpecific: {
        keywords: ['blue', 'green', 'red', 'purple', 'orange', 'pink', 'yellow'],
        theme: 'custom',
        confidence: 0.8
      }
    }
    
    // Check for specific theme requests
    if (lowerPrompt.includes('dark theme') || lowerPrompt.includes('dark mode')) {
      return {
        name: 'dark',
        colors: colorThemeService.getThemeColors('dark'),
        reason: 'Dark theme requested',
        confidence: 1.0
      }
    }
    
    if (lowerPrompt.includes('light theme') || lowerPrompt.includes('bright')) {
      return {
        name: 'modern',
        colors: colorThemeService.getThemeColors('modern'),
        reason: 'Light theme requested',
        confidence: 1.0
      }
    }
    
    // Check for color-specific requests
    if (lowerPrompt.includes('blue')) {
      return {
        name: 'ocean',
        colors: colorThemeService.getThemeColors('ocean'),
        reason: 'Blue color requested',
        confidence: 0.9
      }
    }
    
    if (lowerPrompt.includes('green')) {
      return {
        name: 'forest',
        colors: colorThemeService.getThemeColors('forest'),
        reason: 'Green color requested',
        confidence: 0.9
      }
    }
    
    if (lowerPrompt.includes('purple')) {
      return {
        name: 'purple',
        colors: colorThemeService.getThemeColors('purple'),
        reason: 'Purple color requested',
        confidence: 0.9
      }
    }
    
    if (lowerPrompt.includes('orange') || lowerPrompt.includes('sunset')) {
      return {
        name: 'sunset',
        colors: colorThemeService.getThemeColors('sunset'),
        reason: 'Orange/sunset color requested',
        confidence: 0.9
      }
    }
    
    // Analyze prompt for app type
    let bestMatch = { theme: 'modern', confidence: 0.5, reason: 'Default modern theme' }
    
    Object.entries(themeSelection).forEach(([category, config]) => {
      const keywordMatches = config.keywords.filter(keyword => 
        lowerPrompt.includes(keyword)
      ).length
      
      if (keywordMatches > 0 && config.confidence > bestMatch.confidence) {
        bestMatch = {
          theme: config.theme,
          confidence: config.confidence,
          reason: `${category} app detected (${keywordMatches} keywords)`
        }
      }
    })
    
    // Get theme colors
    const themeColors = colorThemeService.getThemeColors(bestMatch.theme)
    
    const selectedTheme = {
      name: bestMatch.theme,
      colors: themeColors,
      reason: bestMatch.reason,
      confidence: bestMatch.confidence
    }
    
    console.log('🎨 Selected theme:', selectedTheme)
    return selectedTheme
  }

  // Apply automatic theme to generated code
  applyAutomaticTheme(generatedCode, theme) {
    console.log('🎨 Applying theme to generated code:', theme.name)
    
    const themedCode = {}
    
    Object.entries(generatedCode).forEach(([filename, content]) => {
      if (typeof content === 'string') {
        // Apply theme to CSS files
        if (filename.endsWith('.css')) {
          themedCode[filename] = this.applyThemeToCSS(content, theme)
        }
        // Apply theme to HTML files
        else if (filename.endsWith('.html')) {
          themedCode[filename] = this.applyThemeToHTML(content, theme)
        }
        // Apply theme to JavaScript files (for inline styles)
        else if (filename.endsWith('.js') || filename.endsWith('.jsx')) {
          themedCode[filename] = this.applyThemeToJS(content, theme)
        }
        // Keep other files as-is
        else {
          themedCode[filename] = content
        }
      } else {
        themedCode[filename] = content
      }
    })
    
    return themedCode
  }

  // Apply theme to CSS content
  applyThemeToCSS(cssContent, theme) {
    let themedCSS = cssContent
    
    // Replace common color patterns with theme colors
    const colorReplacements = {
      '#667eea': theme.colors.primary,
      '#764ba2': theme.colors.secondary,
      '#f093fb': theme.colors.accent,
      '#f8fafc': theme.colors.background,
      '#ffffff': theme.colors.surface,
      '#1a202c': theme.colors.text,
      '#4a5568': theme.colors.textSecondary,
      '#48bb78': theme.colors.success,
      '#ed8936': theme.colors.warning,
      '#f56565': theme.colors.error,
      '#4299e1': theme.colors.info
    }
    
    Object.entries(colorReplacements).forEach(([oldColor, newColor]) => {
      themedCSS = themedCSS.replace(new RegExp(oldColor, 'g'), newColor)
    })
    
    // Add theme-specific CSS variables if not present
    if (!themedCSS.includes('--primary-color')) {
      const themeVariables = `
/* Theme Variables */
:root {
  --primary-color: ${theme.colors.primary};
  --secondary-color: ${theme.colors.secondary};
  --accent-color: ${theme.colors.accent};
  --background-color: ${theme.colors.background};
  --surface-color: ${theme.colors.surface};
  --text-color: ${theme.colors.text};
  --text-secondary-color: ${theme.colors.textSecondary};
  --success-color: ${theme.colors.success};
  --warning-color: ${theme.colors.warning};
  --error-color: ${theme.colors.error};
  --info-color: ${theme.colors.info};
}

${themedCSS}`
      return themeVariables
    }
    
    return themedCSS
  }

  // Apply theme to HTML content
  applyThemeToHTML(htmlContent, theme) {
    let themedHTML = htmlContent
    
    // Update title if it contains generic names
    if (themedHTML.includes('Web App') || themedHTML.includes('React App') || themedHTML.includes('JavaScript App')) {
      // Title will be updated by the app naming service
    }
    
    // Add theme-specific meta tags
    if (themedHTML.includes('<head>')) {
      const themeMeta = `
    <meta name="theme-color" content="${theme.colors.primary}">
    <meta name="color-scheme" content="${theme.name === 'dark' ? 'dark' : 'light'}">`
      
      themedHTML = themedHTML.replace('<head>', `<head>${themeMeta}`)
    }
    
    return themedHTML
  }

  // Apply theme to JavaScript content
  applyThemeToJS(jsContent, theme) {
    let themedJS = jsContent
    
    // Replace hardcoded colors in JavaScript
    const colorReplacements = {
      '#667eea': theme.colors.primary,
      '#764ba2': theme.colors.secondary,
      '#f093fb': theme.colors.accent,
      '#f8fafc': theme.colors.background,
      '#ffffff': theme.colors.surface,
      '#1a202c': theme.colors.text,
      '#4a5568': theme.colors.textSecondary
    }
    
    Object.entries(colorReplacements).forEach(([oldColor, newColor]) => {
      themedJS = themedJS.replace(new RegExp(oldColor, 'g'), newColor)
    })
    
    return themedJS
  }

  // Create fallback response using AI generation
  async createFallbackResponse(prompt, context = {}) {
    console.log('🔄 Creating AI-generated fallback response for prompt:', prompt)
    
    // Check if this is a general question (not a code generation request)
    if (this.isGeneralQuestion(prompt)) {
      console.log('❓ General question detected, providing conversational response...')
      return this.createConversationalResponse(prompt, context)
    }
    
    try {
      // Try to generate code using AI with a simpler prompt
      const simplePrompt = `Create a complete web application based on this request: ${prompt}. 
      
      Generate HTML, CSS, and JavaScript files that implement the requested features. 
      Return the code as a JSON object with this structure:
      {
        "files": {
          "index.html": "HTML content here",
          "styles.css": "CSS content here", 
          "script.js": "JavaScript content here"
        }
      }
      
      Make sure the application is fully functional and includes all requested features.`
      
      // Use a reliable model for fallback
      const modelKey = 'codellama/CodeLlama-7b-Python-hf'
      
      console.log('🤖 Fallback: Using AI model:', modelKey)
      
      const aiResponse = await this.callHuggingFaceAPI(
        modelKey,
        simplePrompt,
        1500, // max tokens
        0.5   // lower temperature for more consistent output
      )
      
      console.log('🤖 Fallback AI Response received:', aiResponse)
      
      // Parse AI response
      const generatedCode = await this.parseAIResponse(aiResponse, prompt)
      
      if (generatedCode && Object.keys(generatedCode).length > 0) {
        console.log('✅ Fallback AI generated code successfully')
        return generatedCode
      }
      
    } catch (error) {
      console.error('❌ Fallback AI generation failed:', error)
    }
    
    // Only use templates as absolute last resort
    console.log('⚠️ Using template as absolute last resort')
    const promptString = typeof prompt === 'string' ? prompt : JSON.stringify(prompt)
    const lowerPrompt = promptString.toLowerCase()
    
    if (lowerPrompt.includes('todo') || lowerPrompt.includes('task')) {
      return this.createTodoTemplate(prompt)
    } else if (lowerPrompt.includes('dashboard') || lowerPrompt.includes('analytics')) {
      return this.createDashboardTemplate(prompt)
    } else if (lowerPrompt.includes('ecommerce') || lowerPrompt.includes('store') || lowerPrompt.includes('shop')) {
      return this.createEcommerceTemplate(prompt)
    } else if (lowerPrompt.includes('api') || lowerPrompt.includes('backend')) {
      return this.createAPITemplate(prompt)
    } else {
      return this.createDefaultTemplate(prompt)
    }
  }

  // Create dashboard template
  createDashboardTemplate(prompt) {
    return {
      'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Analytics Dashboard</title>
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        background: #f5f7fa;
        color: #333;
      }

      .dashboard {
        min-height: 100vh;
        padding: 2rem;
      }

      .dashboard-header {
        background: white;
        padding: 2rem;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        margin-bottom: 2rem;
        text-align: center;
      }

      .dashboard-header h1 {
        font-size: 2.5rem;
        margin-bottom: 0.5rem;
        color: #2c3e50;
      }

      .dashboard-header p {
        color: #7f8c8d;
        font-size: 1.1rem;
      }

      .stats-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1.5rem;
        margin-bottom: 2rem;
      }

      .stat-card {
        background: white;
        padding: 2rem;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        text-align: center;
        transition: transform 0.3s;
      }

      .stat-card:hover {
        transform: translateY(-4px);
      }

      .stat-card h3 {
        color: #7f8c8d;
        font-size: 0.9rem;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-bottom: 0.5rem;
      }

      .stat-number {
        font-size: 2.5rem;
        font-weight: bold;
        color: #2c3e50;
        margin-bottom: 0.5rem;
      }

      .stat-change {
        font-size: 0.9rem;
        color: #27ae60;
      }

      .controls {
        background: white;
        padding: 2rem;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        margin-bottom: 2rem;
        text-align: center;
      }

      .controls h2 {
        margin-bottom: 1rem;
        color: #2c3e50;
      }

      .button-group {
        display: flex;
        gap: 1rem;
        justify-content: center;
        flex-wrap: wrap;
      }

      button {
        background: #3498db;
        color: white;
        border: none;
        padding: 0.75rem 1.5rem;
        border-radius: 6px;
        cursor: pointer;
        font-size: 1rem;
        transition: all 0.3s;
        margin: 0.25rem;
      }

      button:hover {
        background: #2980b9;
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(52, 152, 219, 0.3);
      }

      button:active {
        transform: translateY(0);
      }

      .refresh-btn {
        background: #27ae60;
      }

      .refresh-btn:hover {
        background: #229954;
      }

      .export-btn {
        background: #e74c3c;
      }

      .export-btn:hover {
        background: #c0392b;
      }

      .chart-container {
        background: white;
        padding: 2rem;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        text-align: center;
      }

      .chart-placeholder {
        height: 300px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 1.2rem;
        margin: 1rem 0;
      }

      .alert {
        background: #d4edda;
        color: #155724;
        padding: 1rem;
        border-radius: 4px;
        margin: 1rem 0;
        border: 1px solid #c3e6cb;
      }

      .alert.hidden {
        display: none;
      }
    </style>
</head>
<body>
    <div class="dashboard">
        <div class="dashboard-header">
            <h1>Analytics Dashboard</h1>
            <p>Welcome to your business dashboard</p>
        </div>
        
        <div class="stats-grid">
            <div class="stat-card">
                <h3>Total Users</h3>
                <p class="stat-number" id="users">1,250</p>
                <p class="stat-change">+12.5% from last month</p>
            </div>
            <div class="stat-card">
                <h3>Revenue</h3>
                <p class="stat-number" id="revenue">$45,230</p>
                <p class="stat-change">+8.2% from last month</p>
            </div>
            <div class="stat-card">
                <h3>Orders</h3>
                <p class="stat-number" id="orders">89</p>
                <p class="stat-change">+15.3% from last month</p>
            </div>
            <div class="stat-card">
                <h3>Growth</h3>
                <p class="stat-number" id="growth">+12.5%</p>
                <p class="stat-change">+2.1% from last month</p>
            </div>
        </div>

        <div class="controls">
            <h2>Dashboard Controls</h2>
            <div class="button-group">
                <button id="refreshDataBtn">Refresh Data</button>
                <button class="refresh-btn" id="updateStatsBtn">Update Stats</button>
                <button class="export-btn" id="exportDataBtn">Export Data</button>
                <button id="showAlertBtn">Show Alert</button>
            </div>
            <div class="alert hidden" id="alert">
                Dashboard updated successfully!
            </div>
        </div>

        <div class="chart-container">
            <h2>Analytics Chart</h2>
            <div class="chart-placeholder">
                Interactive Chart Area
            </div>
            <button id="generateChartBtn">Generate New Chart</button>
        </div>
    </div>

    <script>
        let stats = {
            users: 1250,
            revenue: 45230,
            orders: 89,
            growth: 12.5
        };

        function initDashboard() {
            console.log('Dashboard initializing...');
            updateDisplay();
        }

        function updateDisplay() {
            document.getElementById('users').textContent = stats.users.toLocaleString();
            document.getElementById('revenue').textContent = '$' + stats.revenue.toLocaleString();
            document.getElementById('orders').textContent = stats.orders;
            document.getElementById('growth').textContent = '+' + stats.growth + '%';
        }

        function refreshData() {
            console.log('Refreshing data...');
            // Simulate data refresh
            stats.users += Math.floor(Math.random() * 10);
            stats.revenue += Math.floor(Math.random() * 1000);
            stats.orders += Math.floor(Math.random() * 5);
            stats.growth += (Math.random() - 0.5) * 2;
            
            updateDisplay();
            showAlert('Data refreshed successfully!');
        }

        function updateStats() {
            console.log('Updating stats...');
            // Simulate API call
            setTimeout(() => {
                stats.users = 1250 + Math.floor(Math.random() * 100);
                stats.revenue = 45230 + Math.floor(Math.random() * 5000);
                stats.orders = 89 + Math.floor(Math.random() * 20);
                stats.growth = 12.5 + (Math.random() - 0.5) * 5;
                
                updateDisplay();
                showAlert('Stats updated successfully!');
            }, 1000);
        }

        function exportData() {
            console.log('Exporting data...');
            const data = {
                timestamp: new Date().toISOString(),
                stats: stats
            };
            
            const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'dashboard-data.json';
            a.click();
            URL.revokeObjectURL(url);
            
            showAlert('Data exported successfully!');
        }

        function showAlert(message = 'Dashboard updated successfully!') {
            const alert = document.getElementById('alert');
            alert.textContent = message;
            alert.classList.remove('hidden');
            
            setTimeout(() => {
                alert.classList.add('hidden');
            }, 3000);
        }

        function generateChart() {
            console.log('Generating new chart...');
            const chartPlaceholder = document.querySelector('.chart-placeholder');
            chartPlaceholder.innerHTML = 'Chart generated at ' + new Date().toLocaleTimeString();
            showAlert('New chart generated!');
        }

        // Initialize the dashboard with proper event listeners
        function initDashboardWithEvents() {
            console.log('Dashboard initializing with event listeners...');
            
            // Get button elements
            const refreshBtn = document.getElementById('refreshDataBtn');
            const updateBtn = document.getElementById('updateStatsBtn');
            const exportBtn = document.getElementById('exportDataBtn');
            const alertBtn = document.getElementById('showAlertBtn');
            const chartBtn = document.getElementById('generateChartBtn');
            
            // Add event listeners
            if (refreshBtn) {
                refreshBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    refreshData();
                });
                console.log('Refresh button listener added');
            }
            
            if (updateBtn) {
                updateBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    updateStats();
                });
                console.log('Update button listener added');
            }
            
            if (exportBtn) {
                exportBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    exportData();
                });
                console.log('Export button listener added');
            }
            
            if (alertBtn) {
                alertBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    showAlert();
                });
                console.log('Alert button listener added');
            }
            
            if (chartBtn) {
                chartBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    generateChart();
                });
                console.log('Chart button listener added');
            }
            
            // Initialize dashboard
            initDashboard();
            console.log('Dashboard initialized successfully!');
        }

        // Multiple initialization methods for maximum compatibility
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initDashboardWithEvents);
        } else {
            initDashboardWithEvents();
        }
        
        // Also try on window load as fallback
        window.addEventListener('load', initDashboardWithEvents);
    </script>
</body>
</html>`,
      'App.jsx': `import React, { useState } from 'react';

function Dashboard() {
  const [stats, setStats] = useState({
    users: 1250,
    revenue: 45230,
    orders: 89,
    growth: 12.5
  });

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Analytics Dashboard</h1>
        <p>Welcome to your business dashboard</p>
      </header>
      
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Users</h3>
          <p className="stat-number">{stats.users.toLocaleString()}</p>
        </div>
        <div className="stat-card">
          <h3>Revenue</h3>
          <p className="stat-number">$${stats.revenue.toLocaleString()}</p>
        </div>
        <div className="stat-card">
          <h3>Orders</h3>
          <p className="stat-number">{stats.orders}</p>
        </div>
        <div className="stat-card">
          <h3>Growth</h3>
          <p className="stat-number">+{stats.growth}%</p>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<Dashboard />, document.getElementById('root'));`,
      'styles.css': `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
}

.dashboard {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.dashboard-header {
  text-align: center;
  margin-bottom: 3rem;
  color: white;
}

.dashboard-header h1 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.dashboard-header p {
  font-size: 1.2rem;
  opacity: 0.9;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.stat-card {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
}

.stat-card h3 {
  color: #666;
  font-size: 1rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
}`,
      'package.json': `{
  "name": "dashboard-app",
  "version": "1.0.0",
  "description": "Generated by DreamBuild",
  "main": "index.html",
  "scripts": {
    "start": "python -m http.server 8000",
    "dev": "python -m http.server 8000"
  },
  "keywords": ["dashboard", "analytics", "react"],
  "author": "DreamBuild",
  "license": "MIT"
}`
    }
  }

  // Create comprehensive todo template with 10+ features
  createTodoTemplate(prompt) {
    return {
      'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Advanced Todo App - 10 Features</title>
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        min-height: 100vh;
        padding: 1rem;
      }

      .todo-app {
        max-width: 800px;
        margin: 0 auto;
        background: white;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 20px 40px rgba(0,0,0,0.1);
      }

      h1 {
        text-align: center;
        color: #333;
        margin-bottom: 2rem;
        font-size: 2.5rem;
      }

      .stats {
        display: flex;
        justify-content: space-around;
        margin-bottom: 2rem;
        padding: 1rem;
        background: #f8f9fa;
        border-radius: 8px;
      }

      .stat {
        text-align: center;
      }

      .stat-number {
        font-size: 1.5rem;
        font-weight: bold;
        color: #667eea;
      }

      .stat-label {
        font-size: 0.9rem;
        color: #6c757d;
      }

      .input-container {
        display: flex;
        gap: 1rem;
        margin-bottom: 1rem;
        flex-wrap: wrap;
      }

      input[type="text"] {
        flex: 1;
        min-width: 200px;
        padding: 1rem;
        border: 2px solid #e1e5e9;
        border-radius: 8px;
        font-size: 1rem;
        outline: none;
        transition: border-color 0.3s;
      }

      input[type="text"]:focus {
        border-color: #667eea;
      }

      input[type="date"] {
        padding: 1rem;
        border: 2px solid #e1e5e9;
        border-radius: 8px;
        font-size: 1rem;
        outline: none;
        transition: border-color 0.3s;
      }

      select {
        padding: 1rem;
        border: 2px solid #e1e5e9;
        border-radius: 8px;
        font-size: 1rem;
        outline: none;
        background: white;
        cursor: pointer;
      }

      button {
        padding: 1rem 1.5rem;
        background: #667eea;
        color: white;
        border: none;
        border-radius: 8px;
        font-size: 1rem;
        cursor: pointer;
        transition: all 0.3s;
        font-weight: 500;
        white-space: nowrap;
      }

      button:hover {
        background: #5a6fd8;
        transform: translateY(-1px);
        box-shadow: 0 4px 8px rgba(102, 126, 234, 0.3);
      }

      button:active {
        transform: translateY(0);
      }

      .secondary-btn {
        background: #6c757d;
        padding: 0.5rem 1rem;
        font-size: 0.9rem;
      }

      .secondary-btn:hover {
        background: #5a6268;
      }

      .danger-btn {
        background: #dc3545;
        padding: 0.5rem 1rem;
        font-size: 0.9rem;
      }

      .danger-btn:hover {
        background: #c82333;
      }

      .success-btn {
        background: #28a745;
        padding: 0.5rem 1rem;
        font-size: 0.9rem;
      }

      .success-btn:hover {
        background: #218838;
      }

      .controls {
        display: flex;
        gap: 1rem;
        margin-bottom: 2rem;
        flex-wrap: wrap;
        align-items: center;
      }

      .search-container {
        flex: 1;
        min-width: 200px;
      }

      .search-container input {
        width: 100%;
        margin-bottom: 0;
      }

      .todos {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        margin-bottom: 2rem;
      }

      .todo-item {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
        background: #f8f9fa;
        border-radius: 8px;
        transition: all 0.3s;
        border-left: 4px solid #e9ecef;
      }

      .todo-item:hover {
        background: #e9ecef;
        transform: translateX(4px);
      }

      .todo-item.completed {
        opacity: 0.7;
        border-left-color: #28a745;
      }

      .todo-item.high-priority {
        border-left-color: #dc3545;
      }

      .todo-item.medium-priority {
        border-left-color: #ffc107;
      }

      .todo-item.low-priority {
        border-left-color: #17a2b8;
      }

      .todo-item.completed .todo-text {
        text-decoration: line-through;
        color: #6c757d;
      }

      .todo-text {
        flex: 1;
        cursor: pointer;
        font-size: 1.1rem;
        word-break: break-word;
      }

      .todo-meta {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        font-size: 0.8rem;
        color: #6c757d;
        min-width: 120px;
      }

      .todo-actions {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
      }

      .no-todos {
        text-align: center;
        color: #6c757d;
        font-style: italic;
        margin: 2rem 0;
        padding: 2rem;
        background: #f8f9fa;
        border-radius: 8px;
      }

      .filter-active {
        background: #667eea !important;
        color: white !important;
      }

      .priority-badge {
        padding: 0.25rem 0.5rem;
        border-radius: 4px;
        font-size: 0.7rem;
        font-weight: bold;
        text-transform: uppercase;
      }

      .priority-high {
        background: #dc3545;
        color: white;
      }

      .priority-medium {
        background: #ffc107;
        color: #212529;
      }

      .priority-low {
        background: #17a2b8;
        color: white;
      }

      .due-date {
        font-size: 0.8rem;
        color: #6c757d;
      }

      .due-date.overdue {
        color: #dc3545;
        font-weight: bold;
      }

      .due-date.due-today {
        color: #ffc107;
        font-weight: bold;
      }

      @media (max-width: 768px) {
        .todo-app {
          padding: 1rem;
        }
        
        .input-container {
          flex-direction: column;
        }
        
        .controls {
          flex-direction: column;
          align-items: stretch;
        }
        
        .todo-item {
          flex-direction: column;
          align-items: flex-start;
          gap: 0.5rem;
        }
        
        .todo-actions {
          width: 100%;
          justify-content: space-between;
        }
      }
    </style>
</head>
<body>
    <div class="todo-app">
        <h1>🚀 Advanced Todo App</h1>
        <p style="text-align: center; color: #6c757d; margin-bottom: 2rem;">10 Powerful Features for Maximum Productivity</p>
        
        <!-- Stats Dashboard -->
        <div class="stats">
            <div class="stat">
                <div class="stat-number" id="totalTodos">0</div>
                <div class="stat-label">Total</div>
            </div>
            <div class="stat">
                <div class="stat-number" id="activeTodos">0</div>
                <div class="stat-label">Active</div>
            </div>
            <div class="stat">
                <div class="stat-number" id="completedTodos">0</div>
                <div class="stat-label">Completed</div>
            </div>
            <div class="stat">
                <div class="stat-number" id="overdueTodos">0</div>
                <div class="stat-label">Overdue</div>
            </div>
        </div>
        
        <!-- Input Form -->
        <div class="input-container">
            <input type="text" id="todoInput" placeholder="Add a new todo..." />
            <input type="date" id="dueDate" />
            <select id="priority">
                <option value="low">Low Priority</option>
                <option value="medium" selected>Medium Priority</option>
                <option value="high">High Priority</option>
            </select>
            <button id="addBtn">Add Todo</button>
        </div>
        
        <!-- Controls -->
        <div class="controls">
            <div class="search-container">
                <input type="text" id="searchInput" placeholder="Search todos..." />
            </div>
            <button id="filterAll" class="secondary-btn filter-active">All</button>
            <button id="filterActive" class="secondary-btn">Active</button>
            <button id="filterCompleted" class="secondary-btn">Completed</button>
            <button id="sortBtn" class="secondary-btn">Sort by Date</button>
            <button id="clearCompleted" class="danger-btn">Clear Completed</button>
        </div>
        
        <!-- Todos List -->
        <div class="todos" id="todos"></div>
        
        <p class="no-todos" id="noTodos" style="display: none;">No todos yet. Add one above to get started! 🎯</p>
    </div>

    <script>
        // Global variables
        let todos = [];
        let nextId = 1;
        let currentFilter = 'all';
        let sortBy = 'date';

        // Initialize the app
        function initApp() {
            console.log('Advanced Todo app initializing...');
            loadTodos();
            setupEventListeners();
            renderTodos();
            updateStats();
        }

        function setupEventListeners() {
            // Add todo
            const input = document.getElementById('todoInput');
            const addBtn = document.getElementById('addBtn');
            
            if (input) {
                input.addEventListener('keypress', function(e) {
                    if (e.key === 'Enter') {
                        e.preventDefault();
                        addTodo();
                    }
                });
            }
            
            if (addBtn) {
                addBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    addTodo();
                });
            }

            // Search
            const searchInput = document.getElementById('searchInput');
            if (searchInput) {
                searchInput.addEventListener('input', function() {
                    renderTodos();
                });
            }

            // Filters
            document.getElementById('filterAll').addEventListener('click', () => setFilter('all'));
            document.getElementById('filterActive').addEventListener('click', () => setFilter('active'));
            document.getElementById('filterCompleted').addEventListener('click', () => setFilter('completed'));

            // Sort
            document.getElementById('sortBtn').addEventListener('click', toggleSort);

            // Clear completed
            document.getElementById('clearCompleted').addEventListener('click', clearCompleted);
        }

        function addTodo() {
            const input = document.getElementById('todoInput');
            const dueDate = document.getElementById('dueDate');
            const priority = document.getElementById('priority');
            
            if (!input) return;
            
            const text = input.value.trim();
            if (!text) return;
            
            const newTodo = {
                id: nextId++,
                text: text,
                completed: false,
                priority: priority.value,
                dueDate: dueDate.value || null,
                createdAt: new Date().toISOString(),
                completedAt: null
            };
            
            todos.push(newTodo);
            input.value = '';
            dueDate.value = '';
            priority.value = 'medium';
            
            saveTodos();
            renderTodos();
            updateStats();
            
            console.log('Todo added:', newTodo);
        }

        function toggleTodo(id) {
            const todo = todos.find(t => t.id === id);
            if (todo) {
                todo.completed = !todo.completed;
                todo.completedAt = todo.completed ? new Date().toISOString() : null;
                saveTodos();
                renderTodos();
                updateStats();
                console.log('Todo toggled:', todo);
            }
        }

        function deleteTodo(id) {
            todos = todos.filter(t => t.id !== id);
            saveTodos();
            renderTodos();
            updateStats();
            console.log('Todo deleted');
        }

        function editTodo(id) {
            const todo = todos.find(t => t.id === id);
            if (!todo) return;
            
            const newText = prompt('Edit todo:', todo.text);
            if (newText && newText.trim() !== todo.text) {
                todo.text = newText.trim();
                saveTodos();
                renderTodos();
                console.log('Todo edited:', todo);
            }
        }

        function setFilter(filter) {
            currentFilter = filter;
            
            // Update filter buttons
            document.querySelectorAll('.filter-active').forEach(btn => {
                btn.classList.remove('filter-active');
            });
            document.getElementById('filter' + filter.charAt(0).toUpperCase() + filter.slice(1)).classList.add('filter-active');
            
            renderTodos();
        }

        function toggleSort() {
            sortBy = sortBy === 'date' ? 'priority' : 'date';
            document.getElementById('sortBtn').textContent = sortBy === 'date' ? 'Sort by Priority' : 'Sort by Date';
            renderTodos();
        }

        function clearCompleted() {
            if (confirm('Are you sure you want to clear all completed todos?')) {
                todos = todos.filter(t => !t.completed);
                saveTodos();
                renderTodos();
                updateStats();
                console.log('Completed todos cleared');
            }
        }

        function getFilteredTodos() {
            let filtered = todos;
            
            // Apply search filter
            const searchTerm = document.getElementById('searchInput').value.toLowerCase();
            if (searchTerm) {
                filtered = filtered.filter(todo => 
                    todo.text.toLowerCase().includes(searchTerm)
                );
            }
            
            // Apply status filter
            switch (currentFilter) {
                case 'active':
                    filtered = filtered.filter(todo => !todo.completed);
                    break;
                case 'completed':
                    filtered = filtered.filter(todo => todo.completed);
                    break;
            }
            
            // Apply sorting
            filtered.sort((a, b) => {
                if (sortBy === 'priority') {
                    const priorityOrder = { high: 3, medium: 2, low: 1 };
                    return priorityOrder[b.priority] - priorityOrder[a.priority];
                } else {
                    return new Date(a.createdAt) - new Date(b.createdAt);
                }
            });
            
            return filtered;
        }

        function renderTodos() {
            const container = document.getElementById('todos');
            const noTodos = document.getElementById('noTodos');
            
            if (!container) return;
            
            const filteredTodos = getFilteredTodos();
            container.innerHTML = '';
            
            if (filteredTodos.length === 0) {
                noTodos.style.display = 'block';
                return;
            }
            
            noTodos.style.display = 'none';
            
            filteredTodos.forEach(todo => {
                const todoElement = document.createElement('div');
                todoElement.className = 'todo-item ' + (todo.completed ? 'completed' : '') + ' ' + todo.priority + '-priority';
                
                const textSpan = document.createElement('span');
                textSpan.className = 'todo-text';
                textSpan.textContent = todo.text;
                textSpan.addEventListener('click', () => toggleTodo(todo.id));
                
                const metaDiv = document.createElement('div');
                metaDiv.className = 'todo-meta';
                
                const prioritySpan = document.createElement('span');
                prioritySpan.className = 'priority-badge priority-' + todo.priority;
                prioritySpan.textContent = todo.priority;
                
                const dueDateSpan = document.createElement('span');
                dueDateSpan.className = 'due-date';
                if (todo.dueDate) {
                    const dueDate = new Date(todo.dueDate);
                    const today = new Date();
                    today.setHours(0, 0, 0, 0);
                    dueDate.setHours(0, 0, 0, 0);
                    
                    if (dueDate < today && !todo.completed) {
                        dueDateSpan.classList.add('overdue');
                        dueDateSpan.textContent = 'Overdue: ' + dueDate.toLocaleDateString();
                    } else if (dueDate.getTime() === today.getTime()) {
                        dueDateSpan.classList.add('due-today');
                        dueDateSpan.textContent = 'Due today';
                    } else {
                        dueDateSpan.textContent = 'Due: ' + dueDate.toLocaleDateString();
                    }
                } else {
                    dueDateSpan.textContent = 'No due date';
                }
                
                metaDiv.appendChild(prioritySpan);
                metaDiv.appendChild(dueDateSpan);
                
                const actionsDiv = document.createElement('div');
                actionsDiv.className = 'todo-actions';
                
                const editBtn = document.createElement('button');
                editBtn.className = 'secondary-btn';
                editBtn.textContent = 'Edit';
                editBtn.addEventListener('click', () => editTodo(todo.id));
                
                const deleteBtn = document.createElement('button');
                deleteBtn.className = 'danger-btn';
                deleteBtn.textContent = 'Delete';
                deleteBtn.addEventListener('click', () => deleteTodo(todo.id));
                
                actionsDiv.appendChild(editBtn);
                actionsDiv.appendChild(deleteBtn);
                
                todoElement.appendChild(textSpan);
                todoElement.appendChild(metaDiv);
                todoElement.appendChild(actionsDiv);
                container.appendChild(todoElement);
            });
        }

        function updateStats() {
            const total = todos.length;
            const active = todos.filter(t => !t.completed).length;
            const completed = todos.filter(t => t.completed).length;
            const overdue = todos.filter(t => {
                if (!t.dueDate || t.completed) return false;
                const dueDate = new Date(t.dueDate);
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                dueDate.setHours(0, 0, 0, 0);
                return dueDate < today;
            }).length;
            
            document.getElementById('totalTodos').textContent = total;
            document.getElementById('activeTodos').textContent = active;
            document.getElementById('completedTodos').textContent = completed;
            document.getElementById('overdueTodos').textContent = overdue;
        }

        function saveTodos() {
            localStorage.setItem('advancedTodos', JSON.stringify(todos));
        }

        function loadTodos() {
            const saved = localStorage.getItem('advancedTodos');
            if (saved) {
                todos = JSON.parse(saved);
                nextId = Math.max(...todos.map(t => t.id), 0) + 1;
            }
        }

        // Initialize when DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initApp);
        } else {
            initApp();
        }
    </script>
</body>
</html>`,
      'styles.css': `/* Advanced Todo App Styles */
.todo-app {
  max-width: 800px;
  margin: 0 auto;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 2rem;
  font-size: 2.5rem;
}

.stats {
  display: flex;
  justify-content: space-around;
  margin-bottom: 2rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
}

.stat {
  text-align: center;
}

.stat-number {
  font-size: 1.5rem;
  font-weight: bold;
  color: #667eea;
}

.stat-label {
  font-size: 0.9rem;
  color: #6c757d;
}

.input-container {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

input[type="text"] {
  flex: 1;
  min-width: 200px;
  padding: 1rem;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s;
}

input[type="text"]:focus {
  border-color: #667eea;
}

input[type="date"] {
  padding: 1rem;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s;
}

select {
  padding: 1rem;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  background: white;
  cursor: pointer;
}

button {
  padding: 1rem 1.5rem;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: 500;
  white-space: nowrap;
}

button:hover {
  background: #5a6fd8;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(102, 126, 234, 0.3);
}

button:active {
  transform: translateY(0);
}

.secondary-btn {
  background: #6c757d;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
}

.secondary-btn:hover {
  background: #5a6268;
}

.danger-btn {
  background: #dc3545;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
}

.danger-btn:hover {
  background: #c82333;
}

.success-btn {
  background: #28a745;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
}

.success-btn:hover {
  background: #218838;
}

.controls {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  align-items: center;
}

.search-container {
  flex: 1;
  min-width: 200px;
}

.search-container input {
  width: 100%;
  margin-bottom: 0;
}

.todos {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.todo-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  transition: all 0.3s;
  border-left: 4px solid #e9ecef;
}

.todo-item:hover {
  background: #e9ecef;
  transform: translateX(4px);
}

.todo-item.completed {
  opacity: 0.7;
  border-left-color: #28a745;
}

.todo-item.high-priority {
  border-left-color: #dc3545;
}

.todo-item.medium-priority {
  border-left-color: #ffc107;
}

.todo-item.low-priority {
  border-left-color: #17a2b8;
}

.todo-item.completed .todo-text {
  text-decoration: line-through;
  color: #6c757d;
}

.todo-text {
  flex: 1;
  cursor: pointer;
  font-size: 1.1rem;
  word-break: break-word;
}

.todo-meta {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: 0.8rem;
  color: #6c757d;
  min-width: 120px;
}

.todo-actions {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.no-todos {
  text-align: center;
  color: #6c757d;
  font-style: italic;
  margin: 2rem 0;
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 8px;
}

.filter-active {
  background: #667eea !important;
  color: white !important;
}

.priority-badge {
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.7rem;
  font-weight: bold;
  text-transform: uppercase;
}

.priority-high {
  background: #dc3545;
  color: white;
}

.priority-medium {
  background: #ffc107;
  color: #212529;
}

.priority-low {
  background: #17a2b8;
  color: white;
}

.due-date {
  font-size: 0.8rem;
  color: #6c757d;
}

.due-date.overdue {
  color: #dc3545;
  font-weight: bold;
}

.due-date.due-today {
  color: #ffc107;
  font-weight: bold;
}

@media (max-width: 768px) {
  .todo-app {
    padding: 1rem;
  }
  
  .input-container {
    flex-direction: column;
  }
  
  .controls {
    flex-direction: column;
    align-items: stretch;
  }
  
  .todo-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .todo-actions {
    width: 100%;
    justify-content: space-between;
  }
}`,
      'package.json': `{
  "name": "advanced-todo-app",
  "version": "2.0.0",
  "description": "A comprehensive todo list application with 10+ advanced features",
  "main": "index.html",
  "scripts": {
    "start": "npx serve .",
    "dev": "npx live-server ."
  },
  "keywords": ["todo", "productivity", "task-management", "advanced", "features"],
  "author": "DreamBuild",
  "license": "MIT",
  "features": [
    "Add/Edit/Delete todos",
    "Mark complete/incomplete",
    "Priority levels (High/Medium/Low)",
    "Due dates with overdue detection",
    "Search functionality",
    "Filter by status (All/Active/Completed)",
    "Sort by date or priority",
    "Statistics dashboard",
    "Local storage persistence",
    "Responsive mobile design"
  ]
}`
    }
  }

  // Create ecommerce template
  createEcommerceTemplate(prompt) {
    return {
      'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>E-commerce Store</title>
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        background: #f5f5f5;
        color: #333;
      }

      .header {
        background: white;
        padding: 1rem 2rem;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .cart {
        background: #4CAF50;
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 20px;
        cursor: pointer;
        transition: background 0.3s;
      }

      .cart:hover {
        background: #45a049;
      }

      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem;
      }

      .products {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        margin-top: 2rem;
      }

      .product {
        background: white;
        border-radius: 8px;
        padding: 1.5rem;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        transition: transform 0.3s;
      }

      .product:hover {
        transform: translateY(-4px);
      }

      .product img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-radius: 4px;
        margin-bottom: 1rem;
      }

      .product h3 {
        margin-bottom: 0.5rem;
        color: #333;
      }

      .product .price {
        font-size: 1.5rem;
        font-weight: bold;
        color: #4CAF50;
        margin-bottom: 1rem;
      }

      .add-to-cart {
        background: #4CAF50;
        color: white;
        border: none;
        padding: 0.75rem 1.5rem;
        border-radius: 4px;
        cursor: pointer;
        font-size: 1rem;
        transition: background 0.3s;
        width: 100%;
      }

      .add-to-cart:hover {
        background: #45a049;
      }

      .add-to-cart:active {
        transform: translateY(1px);
      }

      .cart-modal {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        z-index: 1000;
      }

      .cart-content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        padding: 2rem;
        border-radius: 8px;
        max-width: 500px;
        width: 90%;
        max-height: 80vh;
        overflow-y: auto;
      }

      .cart-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 0;
        border-bottom: 1px solid #eee;
      }

      .remove-item {
        background: #dc3545;
        color: white;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 4px;
        cursor: pointer;
      }

      .remove-item:hover {
        background: #c82333;
      }

      .total {
        font-size: 1.5rem;
        font-weight: bold;
        margin-top: 1rem;
        text-align: center;
        color: #4CAF50;
      }

      .close-cart {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
      }
    </style>
</head>
<body>
    <div class="header">
        <h1>E-commerce Store</h1>
        <div class="cart" id="cartToggle">
            Cart (<span id="cartCount">0</span>) - $<span id="cartTotal">0</span>
        </div>
    </div>

    <div class="container">
        <h2>Products</h2>
        <div class="products" id="products">
            <!-- Products will be loaded here -->
        </div>
    </div>

    <!-- Cart Modal -->
    <div class="cart-modal" id="cartModal">
        <div class="cart-content">
            <button class="close-cart" id="closeCartBtn">&times;</button>
            <h2>Shopping Cart</h2>
            <div id="cartItems"></div>
            <div class="total">Total: $<span id="cartTotalModal">0</span></div>
        </div>
    </div>

    <script>
        let cart = [];
        let products = [
            { id: 1, name: 'Laptop', price: 999, image: 'https://via.placeholder.com/200x200/4CAF50/white?text=Laptop' },
            { id: 2, name: 'Phone', price: 699, image: 'https://via.placeholder.com/200x200/2196F3/white?text=Phone' },
            { id: 3, name: 'Tablet', price: 399, image: 'https://via.placeholder.com/200x200/FF9800/white?text=Tablet' }
        ];

        function initApp() {
            console.log('E-commerce app initializing...');
            renderProducts();
            updateCartDisplay();
        }

        function renderProducts() {
            const container = document.getElementById('products');
            container.innerHTML = '';

            products.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.className = 'product';
                // Create product HTML using DOM methods to avoid template literal issues
                const img = document.createElement('img');
                img.src = product.image;
                img.alt = product.name;
                
                const h3 = document.createElement('h3');
                h3.textContent = product.name;
                
                const priceDiv = document.createElement('div');
                priceDiv.className = 'price';
                priceDiv.textContent = '$' + product.price;
                
                const button = document.createElement('button');
                button.className = 'add-to-cart';
                button.setAttribute('data-product-id', product.id);
                button.textContent = 'Add to Cart';
                
                productDiv.appendChild(img);
                productDiv.appendChild(h3);
                productDiv.appendChild(priceDiv);
                productDiv.appendChild(button);
                container.appendChild(productDiv);
            });
        }

        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            if (product) {
                cart.push(product);
                updateCartDisplay();
                console.log('Added to cart:', product.name);
            }
        }

        function removeFromCart(productId) {
            const index = cart.findIndex(item => item.id === productId);
            if (index > -1) {
                cart.splice(index, 1);
                updateCartDisplay();
                renderCartItems();
            }
        }

        function updateCartDisplay() {
            document.getElementById('cartCount').textContent = cart.length;
            const total = cart.reduce((sum, item) => sum + item.price, 0);
            document.getElementById('cartTotal').textContent = total;
            document.getElementById('cartTotalModal').textContent = total;
        }

        function toggleCart() {
            const modal = document.getElementById('cartModal');
            modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
            if (modal.style.display === 'block') {
                renderCartItems();
            }
        }

        function renderCartItems() {
            const container = document.getElementById('cartItems');
            container.innerHTML = '';

            if (cart.length === 0) {
                container.innerHTML = '<p>Your cart is empty</p>';
                return;
            }

            cart.forEach(item => {
                const itemDiv = document.createElement('div');
                itemDiv.className = 'cart-item';
                // Create cart item HTML using DOM methods
                const itemInfo = document.createElement('div');
                const strong = document.createElement('strong');
                strong.textContent = item.name;
                const br = document.createElement('br');
                const priceText = document.createTextNode('$' + item.price);
                
                itemInfo.appendChild(strong);
                itemInfo.appendChild(br);
                itemInfo.appendChild(priceText);
                
                const removeBtn = document.createElement('button');
                removeBtn.className = 'remove-item';
                removeBtn.setAttribute('data-item-id', item.id);
                removeBtn.textContent = 'Remove';
                
                itemDiv.appendChild(itemInfo);
                itemDiv.appendChild(removeBtn);
                container.appendChild(itemDiv);
            });
        }

        // Initialize the app with proper event listeners
        function initAppWithEvents() {
            console.log('E-commerce app initializing with event listeners...');
            
            // Get elements
            const cartToggle = document.getElementById('cartToggle');
            const closeCartBtn = document.getElementById('closeCartBtn');
            
            // Add event listeners
            if (cartToggle) {
                cartToggle.addEventListener('click', function(e) {
                    e.preventDefault();
                    toggleCart();
                });
                console.log('Cart toggle listener added');
            }
            
            if (closeCartBtn) {
                closeCartBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    toggleCart();
                });
                console.log('Close cart listener added');
            }
            
            // Add event delegation for dynamic buttons
            document.addEventListener('click', function(e) {
                if (e.target.classList.contains('add-to-cart')) {
                    e.preventDefault();
                    const productId = parseInt(e.target.getAttribute('data-product-id'));
                    addToCart(productId);
                    console.log('Add to cart clicked for product:', productId);
                }
                
                if (e.target.classList.contains('remove-item')) {
                    e.preventDefault();
                    const itemId = parseInt(e.target.getAttribute('data-item-id'));
                    removeFromCart(itemId);
                    console.log('Remove from cart clicked for item:', itemId);
                }
            });
            
            // Initialize the app
            initApp();
            console.log('E-commerce app initialized successfully!');
        }

        // Multiple initialization methods for maximum compatibility
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initAppWithEvents);
        } else {
            initAppWithEvents();
        }
        
        // Also try on window load as fallback
        window.addEventListener('load', initAppWithEvents);
    </script>
</body>
</html>`,
      'App.jsx': `import React, { useState } from 'react';

function EcommerceStore() {
  const [cart, setCart] = useState([]);
  const [products] = useState([
    { id: 1, name: 'Laptop', price: 999, image: 'https://via.placeholder.com/200' },
    { id: 2, name: 'Phone', price: 699, image: 'https://via.placeholder.com/200' },
    { id: 3, name: 'Tablet', price: 399, image: 'https://via.placeholder.com/200' }
  ]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="ecommerce-store">
      <header>
        <h1>E-commerce Store</h1>
        <div className="cart">
          <span>Cart ({cart.length})</span>
          <span>Total: $${getTotalPrice()}</span>
        </div>
      </header>

      <div className="products">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>$${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div className="cart-items">
          <h2>Cart Items</h2>
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <span>{item.name} - $${item.price}</span>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

ReactDOM.render(<EcommerceStore />, document.getElementById('root'));`,
      'styles.css': `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: #f8f9fa;
  min-height: 100vh;
}

.ecommerce-store {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  background: white;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

header h1 {
  color: #333;
}

.cart {
  display: flex;
  gap: 1rem;
  font-weight: bold;
  color: #007bff;
}

.products {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.product-card {
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  text-align: center;
}

.product-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
}

.product-card h3 {
  margin-bottom: 0.5rem;
  color: #333;
}

.product-card p {
  font-size: 1.2rem;
  font-weight: bold;
  color: #007bff;
  margin-bottom: 1rem;
}

.product-card button {
  background: #007bff;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.25rem;
  cursor: pointer;
  font-size: 1rem;
}

.product-card button:hover {
  background: #0056b3;
}

.cart-items {
  background: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.cart-items h2 {
  margin-bottom: 1rem;
  color: #333;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #eee;
}

.cart-item button {
  background: #dc3545;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
}`,
      'package.json': `{
  "name": "ecommerce-store",
  "version": "1.0.0",
  "description": "Generated by DreamBuild",
  "main": "index.html",
  "scripts": {
    "start": "python -m http.server 8000",
    "dev": "python -m http.server 8000"
  },
  "keywords": ["ecommerce", "store", "react"],
  "author": "DreamBuild",
  "license": "MIT"
}`
    }
  }

  // Create API template
  createAPITemplate(prompt) {
    return {
      'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>API Client</title>
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        background: #f5f7fa;
        color: #333;
        padding: 2rem;
      }

      .container {
        max-width: 800px;
        margin: 0 auto;
      }

      .header {
        background: white;
        padding: 2rem;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        margin-bottom: 2rem;
        text-align: center;
      }

      .header h1 {
        color: #2c3e50;
        margin-bottom: 0.5rem;
      }

      .api-section {
        background: white;
        padding: 2rem;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        margin-bottom: 2rem;
      }

      .api-section h2 {
        color: #2c3e50;
        margin-bottom: 1rem;
      }

      .button-group {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        margin-bottom: 1rem;
      }

      button {
        background: #3498db;
        color: white;
        border: none;
        padding: 0.75rem 1.5rem;
        border-radius: 6px;
        cursor: pointer;
        font-size: 1rem;
        transition: all 0.3s;
      }

      button:hover {
        background: #2980b9;
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(52, 152, 219, 0.3);
      }

      button:active {
        transform: translateY(0);
      }

      .get-btn {
        background: #27ae60;
      }

      .get-btn:hover {
        background: #229954;
      }

      .post-btn {
        background: #e74c3c;
      }

      .post-btn:hover {
        background: #c0392b;
      }

      .response-area {
        background: #2c3e50;
        color: #ecf0f1;
        padding: 1rem;
        border-radius: 6px;
        font-family: 'Courier New', monospace;
        font-size: 0.9rem;
        min-height: 100px;
        white-space: pre-wrap;
        margin-top: 1rem;
      }

      .form-group {
        margin-bottom: 1rem;
      }

      .form-group label {
        display: block;
        margin-bottom: 0.5rem;
        font-weight: 500;
      }

      .form-group input {
        width: 100%;
        padding: 0.75rem;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 1rem;
      }

      .form-group input:focus {
        outline: none;
        border-color: #3498db;
        box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
      }

      .status-indicator {
        display: inline-block;
        padding: 0.25rem 0.75rem;
        border-radius: 12px;
        font-size: 0.8rem;
        font-weight: 500;
        margin-left: 1rem;
      }

      .status-success {
        background: #d4edda;
        color: #155724;
      }

      .status-error {
        background: #f8d7da;
        color: #721c24;
      }

      .status-loading {
        background: #d1ecf1;
        color: #0c5460;
      }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>API Client</h1>
            <p>Test your API endpoints with this interactive client</p>
        </div>

        <div class="api-section">
            <h2>API Health Check</h2>
            <div class="button-group">
                <button class="get-btn" id="checkHealthBtn">Check API Health</button>
            </div>
            <div class="response-area" id="healthResponse">Click the button above to check API health...</div>
        </div>

        <div class="api-section">
            <h2>User Management</h2>
            <div class="button-group">
                <button class="get-btn" id="getUsersBtn">Get All Users</button>
                <button class="post-btn" id="createUserBtn">Create User</button>
            </div>
            
            <div class="form-group">
                <label for="userName">Name:</label>
                <input type="text" id="userName" placeholder="Enter user name">
            </div>
            <div class="form-group">
                <label for="userEmail">Email:</label>
                <input type="email" id="userEmail" placeholder="Enter user email">
            </div>
            
            <div class="response-area" id="userResponse">Click a button above to interact with users...</div>
        </div>

        <div class="api-section">
            <h2>Custom API Calls</h2>
            <div class="form-group">
                <label for="customUrl">API Endpoint:</label>
                <input type="text" id="customUrl" placeholder="https://api.example.com/endpoint" value="https://jsonplaceholder.typicode.com/posts/1">
            </div>
            <div class="button-group">
                <button class="get-btn" id="customGetBtn">GET Request</button>
                <button class="post-btn" id="customPostBtn">POST Request</button>
            </div>
            <div class="response-area" id="customResponse">Make a custom API request...</div>
        </div>
    </div>

    <script>
        let isLoading = false;

        function showStatus(elementId, message, type = 'success') {
            const element = document.getElementById(elementId);
            const statusSpan = element.querySelector('.status-indicator');
            if (statusSpan) {
                statusSpan.remove();
            }
            
            const status = document.createElement('span');
            status.className = 'status-indicator status-' + type;
            status.textContent = message;
            element.appendChild(status);
        }

        function setLoading(elementId, loading = true) {
            const element = document.getElementById(elementId);
            if (loading) {
                element.style.opacity = '0.7';
                showStatus(elementId, 'Loading...', 'loading');
            } else {
                element.style.opacity = '1';
                const statusSpan = element.querySelector('.status-indicator');
                if (statusSpan) {
                    statusSpan.remove();
                }
            }
        }

        async function checkHealth() {
            const responseElement = document.getElementById('healthResponse');
            setLoading('healthResponse', true);
            
            try {
                // Simulate API call since we don't have a real server
                await new Promise(resolve => setTimeout(resolve, 1000));
                
                const mockResponse = {
                    status: 'OK',
                    message: 'API is running',
                    timestamp: new Date().toISOString(),
                    uptime: '99.9%'
                };
                
                responseElement.textContent = JSON.stringify(mockResponse, null, 2);
                showStatus('healthResponse', '✓ Success', 'success');
            } catch (error) {
                responseElement.textContent = \`Error: \${error.message}\`;
                showStatus('healthResponse', '✗ Error', 'error');
            } finally {
                setLoading('healthResponse', false);
            }
        }

        async function getUsers() {
            const responseElement = document.getElementById('userResponse');
            setLoading('userResponse', true);
            
            try {
                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 800));
                
                const mockUsers = [
                    { id: 1, name: 'John Doe', email: 'john@example.com' },
                    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
                    { id: 3, name: 'Bob Johnson', email: 'bob@example.com' }
                ];
                
                responseElement.textContent = JSON.stringify(mockUsers, null, 2);
                showStatus('userResponse', '✓ Success', 'success');
            } catch (error) {
                responseElement.textContent = \`Error: \${error.message}\`;
                showStatus('userResponse', '✗ Error', 'error');
            } finally {
                setLoading('userResponse', false);
            }
        }

        async function createUser() {
            const responseElement = document.getElementById('userResponse');
            const name = document.getElementById('userName').value;
            const email = document.getElementById('userEmail').value;
            
            if (!name || !email) {
                responseElement.textContent = 'Error: Please fill in both name and email fields';
                showStatus('userResponse', '✗ Validation Error', 'error');
                return;
            }
            
            setLoading('userResponse', true);
            
            try {
                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 1000));
                
                const newUser = {
                    id: Date.now(),
                    name: name,
                    email: email,
                    createdAt: new Date().toISOString()
                };
                
                responseElement.textContent = JSON.stringify(newUser, null, 2);
                showStatus('userResponse', '✓ User Created', 'success');
                
                // Clear form
                document.getElementById('userName').value = '';
                document.getElementById('userEmail').value = '';
            } catch (error) {
                responseElement.textContent = \`Error: \${error.message}\`;
                showStatus('userResponse', '✗ Error', 'error');
            } finally {
                setLoading('userResponse', false);
            }
        }

        async function makeCustomRequest(method) {
            const responseElement = document.getElementById('customResponse');
            const url = document.getElementById('customUrl').value;
            
            if (!url) {
                responseElement.textContent = 'Error: Please enter a URL';
                showStatus('customResponse', '✗ Validation Error', 'error');
                return;
            }
            
            setLoading('customResponse', true);
            
            try {
                const options = {
                    method: method,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                };
                
                if (method === 'POST') {
                    options.body = JSON.stringify({
                        title: 'Test Post',
                        body: 'This is a test post created by the API client',
                        userId: 1
                    });
                }
                
                const response = await fetch(url, options);
                const data = await response.json();
                
                responseElement.textContent = JSON.stringify(data, null, 2);
                showStatus('customResponse', \`✓ \${method} Success\`, 'success');
            } catch (error) {
                responseElement.textContent = \`Error: \${error.message}\`;
                showStatus('customResponse', '✗ Error', 'error');
            } finally {
                setLoading('customResponse', false);
            }
        }

        // Initialize the app with proper event listeners
        function initAPIAppWithEvents() {
            console.log('API Client initializing with event listeners...');
            
            // Get button elements
            const checkHealthBtn = document.getElementById('checkHealthBtn');
            const getUsersBtn = document.getElementById('getUsersBtn');
            const createUserBtn = document.getElementById('createUserBtn');
            const customGetBtn = document.getElementById('customGetBtn');
            const customPostBtn = document.getElementById('customPostBtn');
            
            // Add event listeners
            if (checkHealthBtn) {
                checkHealthBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    checkHealth();
                });
                console.log('Check health button listener added');
            }
            
            if (getUsersBtn) {
                getUsersBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    getUsers();
                });
                console.log('Get users button listener added');
            }
            
            if (createUserBtn) {
                createUserBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    createUser();
                });
                console.log('Create user button listener added');
            }
            
            if (customGetBtn) {
                customGetBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    makeCustomRequest('GET');
                });
                console.log('Custom GET button listener added');
            }
            
            if (customPostBtn) {
                customPostBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    makeCustomRequest('POST');
                });
                console.log('Custom POST button listener added');
            }
            
            console.log('API Client initialized successfully!');
        }

        // Multiple initialization methods for maximum compatibility
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initAPIAppWithEvents);
        } else {
            initAPIAppWithEvents();
        }
        
        // Also try on window load as fallback
        window.addEventListener('load', initAPIAppWithEvents);
    </script>
</body>
</html>`,
      'server.js': `const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'API is running' });
});

app.get('/api/users', (req, res) => {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
  ];
  res.json(users);
});

app.post('/api/users', (req, res) => {
  const { name, email } = req.body;
  const newUser = { id: Date.now(), name, email };
  res.json(newUser);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});`,
      'package.json': `{
  "name": "api-server",
  "version": "1.0.0",
  "description": "Generated by DreamBuild",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "express": "^4.18.0",
    "cors": "^2.8.5"
  },
  "devDependencies": {
    "nodemon": "^2.0.0"
  },
  "keywords": ["api", "express", "nodejs"],
  "author": "DreamBuild",
  "license": "MIT"
}`
    }
  }

  // Create default template
  createDefaultTemplate(prompt) {
    return {
      'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DreamBuild App</title>
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        min-height: 100vh;
        color: white;
        padding: 2rem;
      }

      .container {
        max-width: 800px;
        margin: 0 auto;
        text-align: center;
      }

      h1 {
        font-size: 3rem;
        margin-bottom: 1rem;
      }

      h2 {
        font-size: 2rem;
        margin-bottom: 1rem;
      }

      h3 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
      }

      .content {
        background: rgba(255, 255, 255, 0.1);
        padding: 2rem;
        border-radius: 1rem;
        margin-top: 2rem;
        text-align: left;
      }

      .interactive-section {
        background: rgba(255, 255, 255, 0.1);
        padding: 2rem;
        border-radius: 1rem;
        margin-top: 2rem;
        text-align: center;
      }

      .counter {
        font-size: 2rem;
        margin: 1rem 0;
        color: #4CAF50;
      }

      button {
        background: #4CAF50;
        color: white;
        border: none;
        padding: 1rem 2rem;
        font-size: 1rem;
        border-radius: 8px;
        cursor: pointer;
        margin: 0.5rem;
        transition: all 0.3s;
      }

      button:hover {
        background: #45a049;
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
      }

      button:active {
        transform: translateY(0);
      }

      .feature-list {
        list-style: none;
        padding: 0;
      }

      .feature-list li {
        padding: 0.5rem 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      }

      .feature-list li:before {
        content: "✓ ";
        color: #4CAF50;
        font-weight: bold;
      }
    </style>
</head>
<body>
    <div class="container">
        <h1>Welcome to Your DreamBuild App!</h1>
        <p>Generated based on: "${prompt}"</p>
        
        <div class="content">
            <h2>Your Application</h2>
            <p>This is a starter application generated by DreamBuild. You can customize it further by editing the files in your project.</p>
            
            <h3>Features:</h3>
            <ul class="feature-list">
                <li>Responsive design</li>
                <li>Modern styling</li>
                <li>Clean code structure</li>
                <li>Interactive buttons</li>
                <li>Fully functional</li>
            </ul>
        </div>

        <div class="interactive-section">
            <h2>Interactive Demo</h2>
            <p>Click the buttons below to see the app in action:</p>
            <div class="counter" id="counter">0</div>
            <button id="incrementBtn">Increment</button>
            <button id="decrementBtn">Decrement</button>
            <button id="resetBtn">Reset</button>
            <button id="alertBtn">Show Alert</button>
        </div>
    </div>

    <script>
        let counter = 0;

        function incrementCounter() {
            counter++;
            updateCounter();
            console.log('Counter incremented to:', counter);
        }

        function decrementCounter() {
            counter--;
            updateCounter();
            console.log('Counter decremented to:', counter);
        }

        function resetCounter() {
            counter = 0;
            updateCounter();
            console.log('Counter reset to:', counter);
        }

        function updateCounter() {
            const counterElement = document.getElementById('counter');
            if (counterElement) {
                counterElement.textContent = counter;
            }
        }

        function showAlert() {
            alert('Hello from your DreamBuild app! The buttons are working perfectly!');
            console.log('Alert button clicked!');
        }

        // Initialize the app with proper event listeners
        function initializeApp() {
            console.log('DreamBuild app initializing...');
            
            // Get button elements
            const incrementBtn = document.getElementById('incrementBtn');
            const decrementBtn = document.getElementById('decrementBtn');
            const resetBtn = document.getElementById('resetBtn');
            const alertBtn = document.getElementById('alertBtn');
            
            // Add event listeners
            if (incrementBtn) {
                incrementBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    incrementCounter();
                });
                console.log('Increment button listener added');
            }
            
            if (decrementBtn) {
                decrementBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    decrementCounter();
                });
                console.log('Decrement button listener added');
            }
            
            if (resetBtn) {
                resetBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    resetCounter();
                });
                console.log('Reset button listener added');
            }
            
            if (alertBtn) {
                alertBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    showAlert();
                });
                console.log('Alert button listener added');
            }
            
            // Initialize counter display
            updateCounter();
            console.log('DreamBuild app initialized successfully!');
        }

        // Multiple initialization methods for maximum compatibility
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initializeApp);
        } else {
            initializeApp();
        }
        
        // Also try on window load as fallback
        window.addEventListener('load', initializeApp);
        
        // Make functions globally available for debugging
        window.dreamBuildApp = {
            incrementCounter,
            decrementCounter,
            resetCounter,
            showAlert,
            getCounter: () => counter
        };
    </script>
</body>
</html>`,
      'styles.css': `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  color: white;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.content {
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 1rem;
  margin-top: 2rem;
  text-align: left;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

li:before {
  content: "✓ ";
  color: #4CAF50;
  font-weight: bold;
}`,
      'package.json': `{
  "name": "dreambuild-app",
  "version": "1.0.0",
  "description": "Generated by DreamBuild",
  "main": "index.html",
  "scripts": {
    "start": "python -m http.server 8000",
    "dev": "python -m http.server 8000"
  },
  "keywords": ["dreambuild", "generated", "web-app"],
  "author": "DreamBuild",
  "license": "MIT"
}`
    }
  }

  // Get service health status
  getServiceHealth() {
    return { 'cloud-ai': { isHealthy: this.isHealthy } }
  }

  // Get usage statistics
  getUsageStats() {
    return {
      totalRequests: 0,
      successfulRequests: 0,
      failedRequests: 0,
      averageResponseTime: 0
    }
  }
}

// Export singleton instance
export default new CloudAIService()
