// GitHub Template Service - Fetches and integrates templates from GitHub repositories
// This service provides access to thousands of open-source templates

class GitHubTemplateService {
  constructor() {
    this.baseURL = 'https://api.github.com'
    this.trendingRepos = []
    this.templateCache = new Map()
    this.cacheExpiry = 30 * 60 * 1000 // 30 minutes
    this.isLoading = false
    
    // GitHub Template Service initialized
  }

  // Get trending repositories with templates
  async getTrendingTemplates(language = 'javascript', sort = 'stars', order = 'desc') {
    if (this.isLoading) {
      return this.trendingRepos
    }

    this.isLoading = true
    try {
      console.log('📡 Fetching trending GitHub templates...')
      
      // Use separate queries (GitHub API doesn't support OR in topic searches)
      const trendingQueries = [
        'stars:>100 topic:todo-app',
        'stars:>100 topic:calculator', 
        'stars:>100 topic:weather-app',
        'stars:>100 topic:game',
        'stars:>100 topic:portfolio',
        'stars:>100 topic:blog',
        'stars:>100 topic:landing-page',
        'stars:>50 topic:react-tutorial',
        'stars:>50 topic:javascript-project',
        'stars:>50 topic:html-css'
      ]

      const allRepos = []
      
      // Fetch templates with broader queries to reduce API calls
      for (const query of trendingQueries) {
        try {
          console.log(`📈 Fetching trending repositories: ${query}`)
          const response = await fetch(
            `${this.baseURL}/search/repositories?q=${encodeURIComponent(query)}&sort=stars&order=desc&per_page=20`,
            {
              headers: {
                'Accept': 'application/vnd.github.v3+json',
                'User-Agent': 'DreamBuild-Template-Service'
              }
            }
          )

              if (!response.ok) {
                console.error(`GitHub API error for query "${query}": ${response.status}`)
                // Handle different error types
                if (response.status === 403 || response.status === 429) {
                  console.log('⚠️ Rate limit hit, returning cached/fallback templates')
                  const fallbackTemplates = this.getFallbackTemplates()
                  this.trendingRepos = fallbackTemplates
                  return fallbackTemplates
                } else if (response.status === 422) {
                  console.log(`⚠️ Invalid query "${query}", skipping...`)
                  continue
                } else {
                  console.log(`⚠️ API error ${response.status} for query "${query}", skipping...`)
                  continue
                }
              }

          const data = await response.json()
          
          if (data.items && data.items.length > 0) {
            console.log(`📈 Found ${data.items.length} trending template repositories for: ${query}`)
            
            // Filter for template-like repositories
            const templateRepos = data.items.filter(repo => this.isTemplateRepository(repo))
            allRepos.push(...templateRepos)
          }

              // Rate limiting - reduced wait time for faster loading
              await new Promise(resolve => setTimeout(resolve, 500))
          
        } catch (error) {
          console.error(`Error fetching templates for ${query}:`, error)
          continue
        }
      }

      // Remove duplicates and filter for template-like repositories
      const uniqueRepos = this.deduplicateRepos(allRepos)
      const templateRepos = this.filterTemplateRepos(uniqueRepos)
      
      // If we didn't get many templates, add fallback templates
      if (templateRepos.length < 10) {
        console.log('📦 Adding fallback templates due to limited API results')
        const fallbackTemplates = this.getFallbackTemplates()
        templateRepos.push(...fallbackTemplates)
      }

      this.trendingRepos = templateRepos.slice(0, 25) // Limit to top 25 to avoid overwhelming
      console.log(`✅ Found ${this.trendingRepos.length} template repositories`)
      
      return this.trendingRepos
    } catch (error) {
      console.error('❌ Failed to fetch trending templates:', error)
      return this.getFallbackTemplates()
    } finally {
      this.isLoading = false
    }
  }

  // Get repository details and template files
  async getRepositoryTemplate(repo) {
    const cacheKey = `repo_${repo.id}`
    
    // Check cache first
    if (this.templateCache.has(cacheKey)) {
      const cached = this.templateCache.get(cacheKey)
      if (Date.now() - cached.timestamp < this.cacheExpiry) {
        return cached.data
      }
    }

    try {
      console.log(`📦 Processing template: ${repo.full_name}`)
      
      // Get repository contents
      const contents = await this.getRepositoryContents(repo.full_name)
      
      // Parse template structure
      const template = await this.parseRepositoryTemplate(repo, contents)
      
      // Cache the result
      this.templateCache.set(cacheKey, {
        data: template,
        timestamp: Date.now()
      })
      
      return template
    } catch (error) {
      console.error(`❌ Failed to process template ${repo.full_name}:`, error)
      return null
    }
  }

  // Get repository contents
  async getRepositoryContents(repoFullName, path = '') {
    try {
      const response = await fetch(
        `${this.baseURL}/repos/${repoFullName}/contents/${path}`
      )
      
      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`)
      }
      
      return await response.json()
    } catch (error) {
      console.error(`Failed to fetch contents for ${repoFullName}:`, error)
      return []
    }
  }

  // Parse repository into template format
  async parseRepositoryTemplate(repo, contents) {
    // Use the new transform method
    const template = this.transformRepositoryToTemplate(repo)
    
    // Extract key files and add to template
    const keyFiles = this.extractKeyFiles(contents)
    template.files = keyFiles
    template.fileCount = keyFiles.length
    template.preview = repo.owner?.avatar_url || '/api/placeholder/400/300'
    
    return template
  }

  // Detect template type based on repository content
  detectTemplateType(repo, contents) {
    const name = repo.name.toLowerCase()
    const description = (repo.description || '').toLowerCase()
    const topics = (repo.topics || []).join(' ').toLowerCase()
    const combined = `${name} ${description} ${topics}`
    
    // Mobile templates
    if (combined.includes('react-native') || combined.includes('expo') || combined.includes('flutter') || combined.includes('mobile')) {
      return 'mobile'
    }
    
    // React templates
    if (combined.includes('react') || combined.includes('nextjs') || combined.includes('next.js') || combined.includes('gatsby')) {
      return 'react'
    }
    
    // Vue templates
    if (combined.includes('vue') || combined.includes('nuxt') || combined.includes('quasar')) {
      return 'vue'
    }
    
    // Angular templates
    if (combined.includes('angular') || combined.includes('ionic')) {
      return 'angular'
    }
    
    // Svelte templates
    if (combined.includes('svelte') || combined.includes('sveltekit')) {
      return 'svelte'
    }
    
    // Node.js templates
    if (combined.includes('node') || combined.includes('express') || combined.includes('koa') || combined.includes('fastify')) {
      return 'nodejs'
    }
    
    // Python templates
    if (combined.includes('python') || combined.includes('django') || combined.includes('flask') || combined.includes('fastapi')) {
      return 'python'
    }
    
    // PHP templates
    if (combined.includes('php') || combined.includes('laravel') || combined.includes('symfony') || combined.includes('codeigniter')) {
      return 'php'
    }
    
    // Go templates
    if (combined.includes('go') || combined.includes('golang') || combined.includes('gin')) {
      return 'go'
    }
    
    // Rust templates
    if (combined.includes('rust') || combined.includes('actix') || combined.includes('rocket')) {
      return 'rust'
    }
    
    // Java templates
    if (combined.includes('java') || combined.includes('spring') || combined.includes('maven')) {
      return 'java'
    }
    
    // API templates
    if (combined.includes('api') || combined.includes('rest') || combined.includes('graphql') || combined.includes('microservice')) {
      return 'api'
    }
    
    // Dashboard templates
    if (combined.includes('dashboard') || combined.includes('admin') || combined.includes('panel')) {
      return 'dashboard'
    }
    
    // E-commerce templates
    if (combined.includes('ecommerce') || combined.includes('e-commerce') || combined.includes('shop') || combined.includes('store')) {
      return 'ecommerce'
    }
    
    // Blog templates
    if (combined.includes('blog') || combined.includes('cms') || combined.includes('content')) {
      return 'blog'
    }
    
    // Portfolio templates
    if (combined.includes('portfolio') || combined.includes('personal') || combined.includes('resume')) {
      return 'portfolio'
    }
    
    // Landing page templates
    if (combined.includes('landing') || combined.includes('marketing') || combined.includes('promo')) {
      return 'landing'
    }
    
    // CMS templates
    if (combined.includes('cms') || combined.includes('content-management') || combined.includes('headless')) {
      return 'cms'
    }
    
    // UI/UX templates
    if (combined.includes('ui') || combined.includes('ux') || combined.includes('design-system') || combined.includes('component-library')) {
      return 'ui'
    }
    
    // Testing templates
    if (combined.includes('test') || combined.includes('testing') || combined.includes('e2e') || combined.includes('unit-test')) {
      return 'testing'
    }
    
    // DevOps templates
    if (combined.includes('devops') || combined.includes('ci-cd') || combined.includes('docker') || combined.includes('kubernetes')) {
      return 'devops'
    }
    
    // Database templates
    if (combined.includes('database') || combined.includes('sql') || combined.includes('nosql') || combined.includes('mongodb') || combined.includes('postgresql')) {
      return 'database'
    }
    
    // Authentication templates
    if (combined.includes('auth') || combined.includes('authentication') || combined.includes('jwt') || combined.includes('oauth')) {
      return 'auth'
    }
    
    // Payment templates
    if (combined.includes('payment') || combined.includes('stripe') || combined.includes('paypal') || combined.includes('billing')) {
      return 'payment'
    }
    
    // Analytics templates
    if (combined.includes('analytics') || combined.includes('tracking') || combined.includes('metrics') || combined.includes('monitoring')) {
      return 'analytics'
    }
    
    // Documentation templates
    if (combined.includes('documentation') || combined.includes('docs') || combined.includes('readme') || combined.includes('guide')) {
      return 'documentation'
    }
    
    // Default to web
    return 'web'
  }

  // Extract key files from repository contents
  extractKeyFiles(contents) {
    const keyFiles = []
    const importantFiles = [
      'package.json', 'package-lock.json', 'yarn.lock',
      'index.html', 'index.js', 'index.jsx', 'index.ts', 'index.tsx',
      'App.js', 'App.jsx', 'App.ts', 'App.tsx',
      'main.js', 'main.ts', 'main.jsx', 'main.tsx',
      'src/', 'components/', 'pages/', 'views/',
      'README.md', 'readme.md',
      'docker-compose.yml', 'Dockerfile',
      'tsconfig.json', 'webpack.config.js', 'vite.config.js',
      'tailwind.config.js', 'postcss.config.js'
    ]
    
    contents.forEach(item => {
      if (importantFiles.some(file => 
        item.name.toLowerCase() === file.toLowerCase() || 
        item.name.toLowerCase().startsWith(file.toLowerCase())
      )) {
        keyFiles.push({
          name: item.name,
          path: item.path,
          type: item.type,
          size: item.size,
          downloadUrl: item.download_url
        })
      }
    })
    
    return keyFiles.slice(0, 20) // Limit to 20 key files
  }

  // Generate template name from repository name
  generateTemplateName(repoName) {
    // Convert repository name to readable template name
    return repoName
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
      .replace(/template|starter|boilerplate|example|demo/gi, '')
      .trim()
  }

  // Categorize template
  categorizeTemplate(templateType, repo) {
    const categories = {
      'react': 'web-apps',
      'vue': 'web-apps', 
      'angular': 'web-apps',
      'svelte': 'web-apps',
      'nodejs': 'web-apps',
      'python': 'web-apps',
      'php': 'web-apps',
      'go': 'web-apps',
      'rust': 'web-apps',
      'java': 'web-apps',
      'mobile': 'mobile-apps',
      'api': 'apis',
      'dashboard': 'dashboards',
      'ecommerce': 'e-commerce',
      'blog': 'portfolios',
      'portfolio': 'portfolios',
      'landing': 'landing-pages',
      'cms': 'web-apps',
      'ui': 'web-apps',
      'testing': 'web-apps',
      'devops': 'apis',
      'database': 'apis',
      'auth': 'apis',
      'payment': 'apis',
      'analytics': 'dashboards',
      'documentation': 'portfolios',
      'web': 'web-apps'
    }
    
    return categories[templateType] || 'web-apps'
  }

  // Generate tags for template
  generateTags(repo, templateType) {
    const tags = [templateType]
    
    // Add language tag
    if (repo.language) {
      tags.push(repo.language.toLowerCase())
    }
    
    // Add topic tags
    if (repo.topics) {
      tags.push(...repo.topics.slice(0, 3))
    }
    
    // Add framework tags based on template type
    const frameworkTags = {
      'react': ['react', 'javascript'],
      'vue': ['vue', 'javascript'],
      'angular': ['angular', 'typescript'],
      'nodejs': ['nodejs', 'express'],
      'python': ['python', 'django'],
      'mobile': ['react-native', 'mobile']
    }
    
    if (frameworkTags[templateType]) {
      tags.push(...frameworkTags[templateType])
    }
    
    return [...new Set(tags)].slice(0, 5) // Remove duplicates and limit to 5
  }

  // Remove duplicate repositories
  deduplicateRepos(repos) {
    const seen = new Set()
    return repos.filter(repo => {
      if (seen.has(repo.id)) {
        return false
      }
      seen.add(repo.id)
      return true
    })
  }

  // Check if a repository looks like a simple, user-friendly template
  isTemplateRepository(repo) {
    const name = repo.name.toLowerCase()
    const description = (repo.description || '').toLowerCase()
    const topics = (repo.topics || []).join(' ').toLowerCase()
    
    // Simple app indicators that normal users would want
    const simpleAppIndicators = [
      'todo-app', 'calculator', 'weather-app', 'recipe-app', 'expense-tracker',
      'note-taking', 'bookmark-manager', 'task-manager', 'habit-tracker',
      'budget-planner', 'calendar-app', 'contact-book', 'photo-gallery',
      'music-player', 'video-player', 'chat-app', 'forum', 'blog',
      'portfolio', 'landing-page', 'online-store', 'restaurant-menu',
      'event-planner', 'booking-system', 'survey-form', 'quiz-app',
      'game', 'puzzle', 'memory-game', 'tic-tac-toe', 'snake-game',
      'pong', 'breakout', 'maze', 'word-search', 'sudoku', 'hangman',
      'trivia', 'flashcards', 'timer', 'stopwatch', 'pomodoro',
      'countdown', 'random-generator', 'password-generator', 'color-picker',
      'unit-converter', 'currency-converter', 'tip-calculator',
      'bmi-calculator', 'age-calculator', 'date-calculator',
      'percentage-calculator', 'loan-calculator', 'mortgage-calculator',
      'investment-calculator', 'tax-calculator', 'grade-calculator',
      'gpa-calculator', 'starter', 'template', 'example', 'demo',
      'sample', 'tutorial', 'beginner', 'simple', 'basic'
    ]
    
    const hasSimpleAppIndicator = simpleAppIndicators.some(indicator =>
      name.includes(indicator) || 
      description.includes(indicator) || 
      topics.includes(indicator)
    )
    
    // More lenient requirements for simple apps
    const hasReasonableStars = repo.stargazers_count >= 10
    const isRecent = new Date(repo.updated_at) > new Date('2019-01-01')
    
    // Prefer repositories with clear descriptions
    const hasGoodDescription = repo.description && repo.description.length > 10
    
    return hasSimpleAppIndicator && hasReasonableStars && isRecent && hasGoodDescription
  }

  // Filter repositories that look like templates
  filterTemplateRepos(repos) {
    return repos.filter(repo => this.isTemplateRepository(repo))
  }

  // Search templates
  async searchTemplates(query, category = 'all') {
    const templates = await this.getTrendingTemplates()
    
    return templates.filter(template => {
      const matchesSearch = 
        template.name.toLowerCase().includes(query.toLowerCase()) ||
        template.description.toLowerCase().includes(query.toLowerCase()) ||
        template.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
      
      const matchesCategory = category === 'all' || template.category === category
      
      return matchesSearch && matchesCategory
    })
  }

  // Get template by ID
  async getTemplateById(templateId) {
    const templates = await this.getTrendingTemplates()
    const template = templates.find(t => t.id === templateId)
    
    if (template) {
      return await this.getRepositoryTemplate(template)
    }
    
    return null
  }

  // Get templates by category
  async getTemplatesByCategory(category) {
    const templates = await this.getTrendingTemplates()
    return templates.filter(template => template.category === category)
  }

  // Get popular templates
  async getPopularTemplates(limit = 10) {
    const templates = await this.getTrendingTemplates()
    return templates
      .sort((a, b) => b.popularity - a.popularity)
      .slice(0, limit)
  }

  // Get fallback templates when GitHub API is unavailable
  getFallbackTemplates() {
    return [
      {
        id: 'fallback-todo-1',
        name: 'Simple Todo App',
        description: 'A clean and simple todo application with add, edit, and delete functionality.',
        category: 'todo-app',
        templateType: 'web',
        difficulty: 'beginner',
        estimatedTime: '2-4 hours',
        tags: ['javascript', 'html', 'css', 'todo', 'task-management'],
        popularity: 85,
        stars: 150,
        lastUpdated: new Date().toISOString(),
        source: 'github',
        repositoryUrl: 'https://github.com/example/simple-todo-app',
        features: ['Add tasks', 'Mark complete', 'Delete tasks', 'Local storage'],
        techStack: ['HTML', 'CSS', 'JavaScript'],
        isFallback: true,
        githubData: {
          id: 999001,
          fullName: 'example/simple-todo-app',
          htmlUrl: 'https://github.com/example/simple-todo-app',
          cloneUrl: 'https://github.com/example/simple-todo-app.git',
          language: 'JavaScript',
          stargazersCount: 150,
          forksCount: 25,
          topics: ['todo', 'javascript', 'html', 'css'],
          owner: 'example'
        }
      },
      {
        id: 'fallback-calculator-1',
        name: 'Basic Calculator',
        description: 'A functional calculator with basic arithmetic operations.',
        category: 'calculator',
        templateType: 'web',
        difficulty: 'beginner',
        estimatedTime: '1-2 hours',
        tags: ['javascript', 'html', 'css', 'calculator', 'math'],
        popularity: 90,
        stars: 200,
        lastUpdated: new Date().toISOString(),
        source: 'github',
        repositoryUrl: 'https://github.com/example/basic-calculator',
        features: ['Basic operations', 'Clear function', 'Responsive design'],
        techStack: ['HTML', 'CSS', 'JavaScript'],
        isFallback: true,
        githubData: {
          id: 999002,
          fullName: 'example/basic-calculator',
          htmlUrl: 'https://github.com/example/basic-calculator',
          cloneUrl: 'https://github.com/example/basic-calculator.git',
          language: 'JavaScript',
          stargazersCount: 200,
          forksCount: 30,
          topics: ['calculator', 'javascript', 'math'],
          owner: 'example'
        }
      },
      {
        id: 'fallback-weather-1',
        name: 'Weather Dashboard',
        description: 'A weather app that displays current conditions and forecast.',
        category: 'weather-app',
        templateType: 'web',
        difficulty: 'intermediate',
        estimatedTime: '3-5 hours',
        tags: ['javascript', 'api', 'weather', 'dashboard'],
        popularity: 75,
        stars: 120,
        lastUpdated: new Date().toISOString(),
        source: 'github',
        repositoryUrl: 'https://github.com/example/weather-dashboard',
        features: ['Current weather', '5-day forecast', 'Location search'],
        techStack: ['HTML', 'CSS', 'JavaScript', 'Weather API'],
        isFallback: true,
        githubData: {
          id: 999003,
          fullName: 'example/weather-dashboard',
          htmlUrl: 'https://github.com/example/weather-dashboard',
          cloneUrl: 'https://github.com/example/weather-dashboard.git',
          language: 'JavaScript',
          stargazersCount: 120,
          forksCount: 20,
          topics: ['weather', 'api', 'dashboard'],
          owner: 'example'
        }
      },
      {
        id: 'fallback-portfolio-1',
        name: 'Personal Portfolio',
        description: 'A modern, responsive portfolio website template.',
        category: 'portfolio',
        templateType: 'web',
        difficulty: 'intermediate',
        estimatedTime: '4-6 hours',
        tags: ['html', 'css', 'javascript', 'portfolio', 'responsive'],
        popularity: 95,
        stars: 300,
        lastUpdated: new Date().toISOString(),
        source: 'github',
        repositoryUrl: 'https://github.com/example/personal-portfolio',
        features: ['Responsive design', 'Project showcase', 'Contact form'],
        techStack: ['HTML', 'CSS', 'JavaScript'],
        isFallback: true,
        githubData: {
          id: 999004,
          fullName: 'example/personal-portfolio',
          htmlUrl: 'https://github.com/example/personal-portfolio',
          cloneUrl: 'https://github.com/example/personal-portfolio.git',
          language: 'HTML',
          stargazersCount: 300,
          forksCount: 50,
          topics: ['portfolio', 'responsive', 'html', 'css'],
          owner: 'example'
        }
      },
      {
        id: 'fallback-game-1',
        name: 'Snake Game',
        description: 'Classic Snake game built with vanilla JavaScript.',
        category: 'game',
        templateType: 'web',
        difficulty: 'intermediate',
        estimatedTime: '3-4 hours',
        tags: ['javascript', 'game', 'canvas', 'snake'],
        popularity: 80,
        stars: 180,
        lastUpdated: new Date().toISOString(),
        source: 'github',
        repositoryUrl: 'https://github.com/example/snake-game',
        features: ['Keyboard controls', 'Score tracking', 'Game over screen'],
        techStack: ['HTML', 'CSS', 'JavaScript', 'Canvas'],
        isFallback: true,
        githubData: {
          id: 999005,
          fullName: 'example/snake-game',
          htmlUrl: 'https://github.com/example/snake-game',
          cloneUrl: 'https://github.com/example/snake-game.git',
          language: 'JavaScript',
          stargazersCount: 180,
          forksCount: 35,
          topics: ['game', 'snake', 'canvas', 'javascript'],
          owner: 'example'
        }
      }
    ]
  }

  // Transform GitHub repository to template format
  transformRepositoryToTemplate(repo, category = 'web') {
    return {
      id: `github_${repo.id}`,
      name: this.generateTemplateName(repo.name),
      description: repo.description || `Template based on ${repo.full_name}`,
      category: this.categorizeTemplate(this.detectTemplateType(repo, []), repo),
      templateType: this.detectTemplateType(repo, []),
      difficulty: this.estimateDifficulty(repo),
      estimatedTime: this.estimateTime(repo),
      tags: this.generateTags(repo, this.detectTemplateType(repo, [])),
      popularity: Math.min(Math.floor(repo.stargazers_count / 100), 100),
      stars: repo.stargazers_count,
      lastUpdated: repo.updated_at,
      createdAt: repo.created_at,
      source: 'github',
      repositoryUrl: repo.html_url,
      features: this.extractFeatures(repo),
      techStack: this.extractTechStack(repo),
      githubData: {
        id: repo.id,
        fullName: repo.full_name,
        htmlUrl: repo.html_url,
        cloneUrl: repo.clone_url,
        language: repo.language,
        stargazersCount: repo.stargazers_count,
        forksCount: repo.forks_count,
        topics: repo.topics || [],
        owner: repo.owner?.login
      }
    }
  }

  // Estimate difficulty based on repository metrics
  estimateDifficulty(repo) {
    if (repo.stargazers_count > 500) return 'advanced'
    if (repo.stargazers_count > 100) return 'intermediate'
    return 'beginner'
  }

  // Estimate development time
  estimateTime(repo) {
    const stars = repo.stargazers_count
    if (stars > 500) return '6-8 hours'
    if (stars > 100) return '3-5 hours'
    return '1-3 hours'
  }

  // Extract features from repository
  extractFeatures(repo) {
    const features = []
    const name = repo.name.toLowerCase()
    const description = (repo.description || '').toLowerCase()
    
    if (name.includes('todo') || description.includes('todo')) {
      features.push('Task management', 'Add/Edit tasks', 'Mark complete')
    }
    if (name.includes('calculator') || description.includes('calculator')) {
      features.push('Basic operations', 'Clear function')
    }
    if (name.includes('weather') || description.includes('weather')) {
      features.push('Current weather', 'Forecast', 'Location search')
    }
    if (name.includes('portfolio') || description.includes('portfolio')) {
      features.push('Project showcase', 'Responsive design', 'Contact form')
    }
    if (name.includes('game') || description.includes('game')) {
      features.push('Interactive gameplay', 'Score tracking')
    }
    
    return features.length > 0 ? features : ['Modern design', 'Responsive layout']
  }

  // Extract tech stack from repository
  extractTechStack(repo) {
    const techStack = []
    
    if (repo.language) {
      techStack.push(repo.language)
    }
    
    const topics = repo.topics || []
    if (topics.includes('react')) techStack.push('React')
    if (topics.includes('vue')) techStack.push('Vue')
    if (topics.includes('angular')) techStack.push('Angular')
    if (topics.includes('html')) techStack.push('HTML')
    if (topics.includes('css')) techStack.push('CSS')
    if (topics.includes('javascript')) techStack.push('JavaScript')
    if (topics.includes('typescript')) techStack.push('TypeScript')
    
    return techStack.length > 0 ? techStack : ['HTML', 'CSS', 'JavaScript']
  }

  // Clear cache
  clearCache() {
    this.templateCache.clear()
    this.trendingRepos = []
    console.log('🗑️ GitHub template cache cleared')
  }
}

export default new GitHubTemplateService()
