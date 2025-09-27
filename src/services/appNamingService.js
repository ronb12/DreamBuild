// Advanced App Naming Service
// Provides intelligent, creative, and contextual app name generation

class AppNamingService {
  constructor() {
    this.nameHistory = []
    this.creativeSuffixes = this.initializeCreativeSuffixes()
    this.appCategories = this.initializeAppCategories()
    this.namingPatterns = this.initializeNamingPatterns()
  }

  // Initialize creative suffixes for app names
  initializeCreativeSuffixes() {
    return {
      professional: ['Pro', 'Elite', 'Master', 'Ultimate', 'Prime', 'Advanced', 'Premium', 'Enterprise'],
      modern: ['Hub', 'Flow', 'Space', 'Lab', 'Studio', 'Works', 'Craft', 'Forge'],
      tech: ['Tech', 'Digital', 'Smart', 'AI', 'Cloud', 'Sync', 'Link', 'Connect'],
      creative: ['Creative', 'Innovative', 'Dynamic', 'Vibrant', 'Bold', 'Fresh', 'Modern', 'Next'],
      action: ['Action', 'Boost', 'Turbo', 'Rocket', 'Flash', 'Swift', 'Rapid', 'Quick'],
      friendly: ['Easy', 'Simple', 'Quick', 'Fast', 'Light', 'Mini', 'Lite', 'Basic']
    }
  }

  // Initialize app categories with naming patterns
  initializeAppCategories() {
    return {
      productivity: {
        keywords: ['todo', 'task', 'productivity', 'organizer', 'planner', 'manager', 'tracker'],
        prefixes: ['Task', 'Plan', 'Organize', 'Manage', 'Track', 'Flow', 'Stream'],
        suffixes: ['Manager', 'Tracker', 'Flow', 'Hub', 'Pro', 'Master'],
        themes: ['efficiency', 'organization', 'productivity', 'management']
      },
      
      entertainment: {
        keywords: ['game', 'music', 'video', 'entertainment', 'fun', 'play', 'media'],
        prefixes: ['Game', 'Play', 'Fun', 'Entertain', 'Media', 'Stream', 'Hub'],
        suffixes: ['Zone', 'Hub', 'Center', 'Studio', 'Lab', 'World'],
        themes: ['fun', 'entertainment', 'interactive', 'engaging']
      },
      
      business: {
        keywords: ['business', 'commerce', 'store', 'shop', 'sales', 'finance', 'dashboard'],
        prefixes: ['Business', 'Commerce', 'Trade', 'Market', 'Sales', 'Finance', 'Dash'],
        suffixes: ['Pro', 'Suite', 'Manager', 'Hub', 'Center', 'Platform'],
        themes: ['professional', 'business', 'commercial', 'enterprise']
      },
      
      education: {
        keywords: ['learn', 'education', 'study', 'course', 'tutorial', 'knowledge', 'school'],
        prefixes: ['Learn', 'Study', 'Edu', 'Knowledge', 'Skill', 'Course', 'Academy'],
        suffixes: ['Hub', 'Center', 'Academy', 'School', 'Lab', 'Studio'],
        themes: ['learning', 'education', 'knowledge', 'academic']
      },
      
      health: {
        keywords: ['health', 'fitness', 'medical', 'wellness', 'workout', 'diet', 'care'],
        prefixes: ['Health', 'Fit', 'Wellness', 'Care', 'Medical', 'Vital', 'Life'],
        suffixes: ['Tracker', 'Monitor', 'Care', 'Hub', 'Center', 'Pro'],
        themes: ['health', 'wellness', 'fitness', 'medical']
      },
      
      communication: {
        keywords: ['chat', 'message', 'social', 'connect', 'network', 'community', 'talk'],
        prefixes: ['Chat', 'Connect', 'Social', 'Network', 'Community', 'Talk', 'Link'],
        suffixes: ['Hub', 'Connect', 'Network', 'Space', 'Center', 'Pro'],
        themes: ['social', 'communication', 'networking', 'community']
      },
      
      utility: {
        keywords: ['calculator', 'converter', 'tool', 'utility', 'helper', 'assistant', 'widget'],
        prefixes: ['Smart', 'Quick', 'Easy', 'Pro', 'Advanced', 'Super', 'Ultra'],
        suffixes: ['Tool', 'Helper', 'Pro', 'Master', 'Ultimate', 'Plus'],
        themes: ['utility', 'tool', 'helper', 'assistant']
      },
      
      creative: {
        keywords: ['design', 'art', 'creative', 'draw', 'paint', 'edit', 'photo', 'image'],
        prefixes: ['Creative', 'Art', 'Design', 'Studio', 'Craft', 'Forge', 'Lab'],
        suffixes: ['Studio', 'Lab', 'Works', 'Craft', 'Forge', 'Space'],
        themes: ['creative', 'artistic', 'design', 'visual']
      }
    }
  }

  // Initialize naming patterns
  initializeNamingPatterns() {
    return {
      descriptive: ['{prefix}{suffix}', '{category} {suffix}', '{prefix} {category}'],
      creative: ['{prefix}Flow', '{prefix}Hub', '{prefix}Space', '{prefix}Lab'],
      professional: ['{prefix}Pro', '{prefix}Master', '{prefix}Elite', '{prefix}Ultimate'],
      modern: ['{prefix}AI', '{prefix}Cloud', '{prefix}Smart', '{prefix}Next'],
      simple: ['{prefix}App', '{prefix}Tool', '{prefix}Helper', '{prefix}Manager']
    }
  }

  // Main app naming function
  generateAppName(prompt, context = {}) {
    console.log('🏷️ Generating app name for prompt:', prompt)
    
    try {
      // Step 1: Analyze the prompt
      const analysis = this.analyzePrompt(prompt)
      console.log('📊 Prompt analysis:', analysis)
      
      // Step 2: Determine app category
      const category = this.determineCategory(analysis)
      console.log('📂 App category:', category)
      
      // Step 3: Generate contextual name
      const contextualName = this.generateContextualName(analysis, category, context)
      console.log('🎯 Contextual name:', contextualName)
      
      // Step 4: Ensure uniqueness
      const uniqueName = this.ensureUniqueness(contextualName)
      console.log('✨ Unique name:', uniqueName)
      
      // Step 5: Store in history
      this.nameHistory.push({
        timestamp: new Date(),
        prompt: prompt,
        analysis: analysis,
        category: category,
        generatedName: uniqueName,
        context: context
      })
      
      return uniqueName
      
    } catch (error) {
      console.error('❌ App naming failed:', error)
      return this.generateFallbackName(prompt)
    }
  }

  // Analyze the prompt for key information
  analyzePrompt(prompt) {
    const promptString = typeof prompt === 'string' ? prompt : JSON.stringify(prompt)
    const lowerPrompt = promptString.toLowerCase()
    
    return {
      originalPrompt: promptString,
      lowerPrompt: lowerPrompt,
      words: promptString.split(/\s+/),
      keyWords: this.extractKeyWords(promptString),
      features: this.extractFeatures(promptString),
      intent: this.determineIntent(promptString),
      complexity: this.assessComplexity(promptString),
      targetAudience: this.identifyTargetAudience(promptString)
    }
  }

  // Extract key words from prompt
  extractKeyWords(prompt) {
    const words = prompt.split(/\s+/)
    const stopWords = new Set([
      'create', 'build', 'make', 'generate', 'develop', 'design',
      'app', 'application', 'website', 'page', 'site', 'web',
      'with', 'for', 'and', 'or', 'the', 'a', 'an', 'in', 'on', 'at',
      'to', 'from', 'by', 'of', 'is', 'are', 'was', 'were', 'be', 'been',
      'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could',
      'should', 'may', 'might', 'can', 'must', 'shall'
    ])
    
    return words
      .filter(word => word.length > 2 && !stopWords.has(word.toLowerCase()))
      .map(word => word.toLowerCase())
      .slice(0, 10) // Limit to 10 key words
  }

  // Extract features from prompt
  extractFeatures(prompt) {
    const lowerPrompt = prompt.toLowerCase()
    const features = []
    
    // UI Features
    if (lowerPrompt.includes('responsive') || lowerPrompt.includes('mobile')) features.push('responsive')
    if (lowerPrompt.includes('dark') || lowerPrompt.includes('theme')) features.push('themed')
    if (lowerPrompt.includes('animation') || lowerPrompt.includes('interactive')) features.push('interactive')
    
    // Functional Features
    if (lowerPrompt.includes('search') || lowerPrompt.includes('filter')) features.push('searchable')
    if (lowerPrompt.includes('sort') || lowerPrompt.includes('organize')) features.push('organized')
    if (lowerPrompt.includes('export') || lowerPrompt.includes('download')) features.push('exportable')
    if (lowerPrompt.includes('import') || lowerPrompt.includes('upload')) features.push('importable')
    
    // Technical Features
    if (lowerPrompt.includes('api') || lowerPrompt.includes('database')) features.push('connected')
    if (lowerPrompt.includes('real-time') || lowerPrompt.includes('live')) features.push('realtime')
    if (lowerPrompt.includes('offline') || lowerPrompt.includes('cache')) features.push('offline')
    
    return features
  }

  // Determine user intent
  determineIntent(prompt) {
    const lowerPrompt = prompt.toLowerCase()
    
    if (lowerPrompt.includes('simple') || lowerPrompt.includes('basic')) return 'simple'
    if (lowerPrompt.includes('advanced') || lowerPrompt.includes('complex')) return 'advanced'
    if (lowerPrompt.includes('professional') || lowerPrompt.includes('enterprise')) return 'professional'
    if (lowerPrompt.includes('fun') || lowerPrompt.includes('game')) return 'entertainment'
    if (lowerPrompt.includes('learn') || lowerPrompt.includes('education')) return 'educational'
    
    return 'general'
  }

  // Assess complexity
  assessComplexity(prompt) {
    const lowerPrompt = prompt.toLowerCase()
    let complexity = 1
    
    // Basic complexity indicators
    if (lowerPrompt.includes('simple') || lowerPrompt.includes('basic')) complexity = 1
    if (lowerPrompt.includes('advanced') || lowerPrompt.includes('complex')) complexity = 3
    if (lowerPrompt.includes('enterprise') || lowerPrompt.includes('professional')) complexity = 4
    
    // Feature-based complexity
    const featureCount = this.extractFeatures(prompt).length
    complexity += Math.min(featureCount, 2)
    
    // Word count complexity
    const wordCount = prompt.split(/\s+/).length
    if (wordCount > 20) complexity += 1
    if (wordCount > 50) complexity += 1
    
    return Math.min(complexity, 5)
  }

  // Identify target audience
  identifyTargetAudience(prompt) {
    const lowerPrompt = prompt.toLowerCase()
    
    if (lowerPrompt.includes('business') || lowerPrompt.includes('enterprise')) return 'business'
    if (lowerPrompt.includes('student') || lowerPrompt.includes('education')) return 'students'
    if (lowerPrompt.includes('developer') || lowerPrompt.includes('programmer')) return 'developers'
    if (lowerPrompt.includes('designer') || lowerPrompt.includes('creative')) return 'creatives'
    if (lowerPrompt.includes('gamer') || lowerPrompt.includes('game')) return 'gamers'
    
    return 'general'
  }

  // Determine app category
  determineCategory(analysis) {
    const { keyWords, features, intent } = analysis
    
    // Check each category
    for (const [categoryName, category] of Object.entries(this.appCategories)) {
      const keywordMatches = keyWords.filter(word => 
        category.keywords.some(keyword => word.includes(keyword))
      ).length
      
      if (keywordMatches > 0) {
        return {
          name: categoryName,
          confidence: keywordMatches / category.keywords.length,
          data: category
        }
      }
    }
    
    // Default category based on intent
    const defaultCategories = {
      simple: 'utility',
      advanced: 'business',
      professional: 'business',
      entertainment: 'entertainment',
      educational: 'education',
      general: 'utility'
    }
    
    return {
      name: defaultCategories[intent] || 'utility',
      confidence: 0.5,
      data: this.appCategories[defaultCategories[intent]] || this.appCategories.utility
    }
  }

  // Generate contextual name
  generateContextualName(analysis, category, context) {
    const { keyWords, features, complexity, intent } = analysis
    const { data: categoryData } = category
    
    // Choose naming pattern based on intent and complexity
    let pattern
    if (intent === 'professional' || complexity >= 4) {
      pattern = 'professional'
    } else if (intent === 'entertainment' || features.includes('interactive')) {
      pattern = 'creative'
    } else if (complexity <= 2) {
      pattern = 'simple'
    } else {
      pattern = 'modern'
    }
    
    // Generate name based on pattern
    const name = this.generateNameFromPattern(keyWords, categoryData, pattern, features)
    
    // Add feature-based suffixes
    const enhancedName = this.addFeatureSuffixes(name, features, complexity)
    
    return enhancedName
  }

  // Generate name from pattern
  generateNameFromPattern(keyWords, categoryData, patternType, features) {
    const patterns = this.namingPatterns[patternType]
    const selectedPattern = patterns[Math.floor(Math.random() * patterns.length)]
    
    // Get prefix and suffix
    const prefix = this.selectPrefix(keyWords, categoryData)
    const suffix = this.selectSuffix(categoryData, selectedPattern)
    
    // Apply pattern
    let name = selectedPattern
      .replace('{prefix}', prefix)
      .replace('{suffix}', suffix)
      .replace('{category}', categoryData.prefixes[0])
    
    return name
  }

  // Select appropriate prefix
  selectPrefix(keyWords, categoryData) {
    // Try to use key words first
    if (keyWords.length > 0) {
      const firstKeyWord = keyWords[0].charAt(0).toUpperCase() + keyWords[0].slice(1)
      if (firstKeyWord.length > 2) {
        return firstKeyWord
      }
    }
    
    // Use category prefix
    return categoryData.prefixes[Math.floor(Math.random() * categoryData.prefixes.length)]
  }

  // Select appropriate suffix
  selectSuffix(categoryData, selectedPattern) {
    if (selectedPattern.includes('{suffix}')) {
      return categoryData.suffixes[Math.floor(Math.random() * categoryData.suffixes.length)]
    }
    return ''
  }

  // Add feature-based suffixes
  addFeatureSuffixes(name, features, complexity) {
    let enhancedName = name
    
    // Add complexity-based suffixes
    if (complexity >= 4) {
      const proSuffixes = this.creativeSuffixes.professional
      enhancedName += ' ' + proSuffixes[Math.floor(Math.random() * proSuffixes.length)]
    } else if (complexity >= 3) {
      const modernSuffixes = this.creativeSuffixes.modern
      enhancedName += ' ' + modernSuffixes[Math.floor(Math.random() * modernSuffixes.length)]
    }
    
    // Add feature-based suffixes
    if (features.includes('realtime')) {
      enhancedName += ' Live'
    }
    if (features.includes('connected')) {
      enhancedName += ' Cloud'
    }
    if (features.includes('interactive')) {
      enhancedName += ' Interactive'
    }
    
    return enhancedName
  }

  // Ensure name uniqueness
  ensureUniqueness(name) {
    let uniqueName = name
    let counter = 1
    
    while (this.nameHistory.some(entry => entry.generatedName === uniqueName)) {
      uniqueName = `${name} ${counter}`
      counter++
    }
    
    return uniqueName
  }

  // Generate fallback name
  generateFallbackName(prompt) {
    const fallbackNames = [
      'DreamApp', 'InnovateHub', 'CreativeSpace', 'TechFlow', 'SmartApp',
      'NextGen', 'FutureApp', 'ProApp', 'EliteApp', 'MasterApp',
      'UltimateApp', 'PrimeApp', 'SuperApp', 'MegaApp', 'TurboApp',
      'AppBuilder', 'CodeCraft', 'DevFlow', 'BuildHub', 'CreateSpace'
    ]
    
    return fallbackNames[Math.floor(Math.random() * fallbackNames.length)]
  }

  // Get naming history
  getNamingHistory() {
    return this.nameHistory
  }

  // Clear naming history
  clearNamingHistory() {
    this.nameHistory = []
  }

  // Get naming statistics
  getNamingStats() {
    const stats = {
      totalNames: this.nameHistory.length,
      categories: {},
      patterns: {},
      complexity: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
    }
    
    this.nameHistory.forEach(entry => {
      // Category stats
      const category = entry.category.name
      stats.categories[category] = (stats.categories[category] || 0) + 1
      
      // Complexity stats
      stats.complexity[entry.analysis.complexity]++
    })
    
    return stats
  }
}

export default new AppNamingService()
