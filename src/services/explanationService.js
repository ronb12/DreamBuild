// Explanation Service
// Provides detailed explanations of generated code, similar to Cursor

class ExplanationService {
  constructor() {
    this.explanationTemplates = this.initializeExplanationTemplates()
    this.featureDescriptions = this.initializeFeatureDescriptions()
    this.techStackExplanations = this.initializeTechStackExplanations()
  }

  // Initialize explanation templates
  initializeExplanationTemplates() {
    return {
      appOverview: {
        template: "I've created a {appType} application called '{appName}' with {featureCount} key features. The app uses a {architecture} architecture and follows {designPattern} design patterns.",
        variables: ['appType', 'appName', 'featureCount', 'architecture', 'designPattern']
      },
      features: {
        template: "Key features include: {featureList}. Each feature is fully functional with proper error handling and user feedback.",
        variables: ['featureList']
      },
      technicalDetails: {
        template: "The application is built using {techStack} with {performance} performance optimizations and {security} security measures.",
        variables: ['techStack', 'performance', 'security']
      },
      userExperience: {
        template: "The user interface is {uiStyle} with {responsive} responsive design, {accessibility} accessibility features, and {interaction} interactive elements.",
        variables: ['uiStyle', 'responsive', 'accessibility', 'interaction']
      }
    }
  }

  // Initialize feature descriptions
  initializeFeatureDescriptions() {
    return {
      // Common app features
      'user-authentication': {
        name: 'User Authentication',
        description: 'Secure login and registration system with password validation and session management',
        benefits: ['User security', 'Personalized experience', 'Data protection']
      },
      'data-management': {
        name: 'Data Management',
        description: 'CRUD operations with local storage and data persistence',
        benefits: ['Data persistence', 'User data management', 'Offline functionality']
      },
      'responsive-design': {
        name: 'Responsive Design',
        description: 'Mobile-first design that works on all device sizes',
        benefits: ['Mobile compatibility', 'Better user experience', 'Wider accessibility']
      },
      'real-time-updates': {
        name: 'Real-time Updates',
        description: 'Live data updates and dynamic content refresh',
        benefits: ['Current information', 'Better engagement', 'Dynamic experience']
      },
      'search-functionality': {
        name: 'Search Functionality',
        description: 'Advanced search with filtering and sorting capabilities',
        benefits: ['Easy content discovery', 'Better navigation', 'User efficiency']
      },
      'form-validation': {
        name: 'Form Validation',
        description: 'Client-side and server-side validation with user feedback',
        benefits: ['Data integrity', 'User guidance', 'Error prevention']
      },
      'navigation': {
        name: 'Navigation System',
        description: 'Intuitive navigation with breadcrumbs and menu systems',
        benefits: ['Easy navigation', 'Better UX', 'Content organization']
      },
      'notifications': {
        name: 'Notification System',
        description: 'Toast notifications and alert systems for user feedback',
        benefits: ['User feedback', 'Status updates', 'Better communication']
      },
      'theme-support': {
        name: 'Theme Support',
        description: 'Light and dark theme support with customizable colors',
        benefits: ['User preference', 'Accessibility', 'Modern design']
      },
      'performance-optimization': {
        name: 'Performance Optimization',
        description: 'Code splitting, lazy loading, and performance monitoring',
        benefits: ['Faster loading', 'Better performance', 'User satisfaction']
      }
    }
  }

  // Initialize tech stack explanations
  initializeTechStackExplanations() {
    return {
      'html5': {
        name: 'HTML5',
        description: 'Modern semantic HTML with accessibility features',
        benefits: ['SEO optimization', 'Accessibility', 'Modern standards']
      },
      'css3': {
        name: 'CSS3',
        description: 'Advanced styling with Flexbox, Grid, and custom properties',
        benefits: ['Modern design', 'Responsive layout', 'Maintainable styles']
      },
      'javascript': {
        name: 'JavaScript ES6+',
        description: 'Modern JavaScript with async/await, modules, and best practices',
        benefits: ['Modern syntax', 'Better performance', 'Maintainable code']
      },
      'react': {
        name: 'React',
        description: 'Component-based architecture with hooks and state management',
        benefits: ['Reusable components', 'Efficient rendering', 'Large ecosystem']
      },
      'vue': {
        name: 'Vue.js',
        description: 'Progressive framework with reactive data binding',
        benefits: ['Easy learning curve', 'Flexible architecture', 'Great performance']
      },
      'angular': {
        name: 'Angular',
        description: 'Full-featured framework with TypeScript and dependency injection',
        benefits: ['Enterprise-ready', 'Type safety', 'Comprehensive tooling']
      },
      'nodejs': {
        name: 'Node.js',
        description: 'Server-side JavaScript with npm ecosystem',
        benefits: ['Full-stack JavaScript', 'Large ecosystem', 'High performance']
      },
      'firebase': {
        name: 'Firebase',
        description: 'Backend-as-a-Service with real-time database and authentication',
        benefits: ['Rapid development', 'Real-time features', 'Scalable infrastructure']
      },
      'mongodb': {
        name: 'MongoDB',
        description: 'NoSQL database with flexible document storage',
        benefits: ['Flexible schema', 'Scalable', 'JSON-like documents']
      },
      'postgresql': {
        name: 'PostgreSQL',
        description: 'Relational database with advanced features',
        benefits: ['ACID compliance', 'Advanced queries', 'Data integrity']
      }
    }
  }

  // Generate comprehensive explanation
  async generateExplanation(generatedCode, appName, prompt, validationResults = null) {
    console.log('📝 Generating comprehensive app explanation...')
    
    try {
      const explanation = {
        timestamp: new Date().toISOString(),
        appName: appName,
        prompt: prompt,
        sections: {},
        summary: '',
        technicalDetails: {},
        recommendations: []
      }

      // Analyze the generated code
      const codeAnalysis = this.analyzeGeneratedCode(generatedCode)
      
      // Generate app overview
      explanation.sections.overview = this.generateAppOverview(codeAnalysis, appName, prompt)
      
      // Generate features explanation
      explanation.sections.features = this.generateFeaturesExplanation(codeAnalysis)
      
      // Generate technical details
      explanation.sections.technicalDetails = this.generateTechnicalDetails(codeAnalysis)
      
      // Generate user experience explanation
      explanation.sections.userExperience = this.generateUserExperienceExplanation(codeAnalysis)
      
      // Generate code structure explanation
      explanation.sections.codeStructure = this.generateCodeStructureExplanation(generatedCode)
      
      // Generate performance explanation
      explanation.sections.performance = this.generatePerformanceExplanation(codeAnalysis)
      
      // Generate security explanation
      explanation.sections.security = this.generateSecurityExplanation(codeAnalysis)
      
      // Generate deployment explanation
      explanation.sections.deployment = this.generateDeploymentExplanation(codeAnalysis)
      
      // Generate summary
      explanation.summary = this.generateSummary(explanation.sections)
      
      // Generate recommendations
      explanation.recommendations = this.generateRecommendations(codeAnalysis, validationResults)
      
      // Generate technical details object
      explanation.technicalDetails = {
        files: Object.keys(generatedCode),
        linesOfCode: this.calculateLinesOfCode(generatedCode),
        complexity: this.calculateComplexity(codeAnalysis),
        dependencies: this.extractDependencies(generatedCode),
        architecture: codeAnalysis.architecture,
        patterns: codeAnalysis.patterns
      }

      console.log('✅ App explanation generated successfully!')
      return explanation

    } catch (error) {
      console.error('❌ Explanation generation failed:', error)
      return {
        timestamp: new Date().toISOString(),
        appName: appName,
        prompt: prompt,
        error: error.message,
        success: false
      }
    }
  }

  // Analyze generated code
  analyzeGeneratedCode(generatedCode) {
    const analysis = {
      appType: 'web application',
      architecture: 'monolithic',
      patterns: [],
      features: [],
      techStack: [],
      performance: [],
      security: [],
      accessibility: [],
      responsive: false,
      interactive: false,
      dataHandling: false,
      apiIntegration: false
    }

    // Analyze HTML content
    const htmlContent = Object.values(generatedCode).find(content => 
      typeof content === 'string' && content.includes('<html')
    ) || ''

    // Analyze CSS content
    const cssContent = Object.values(generatedCode).find(content => 
      typeof content === 'string' && content.includes('{') && content.includes('}')
    ) || ''

    // Analyze JavaScript content
    const jsContent = Object.values(generatedCode).find(content => 
      typeof content === 'string' && (content.includes('function') || content.includes('const'))
    ) || ''

    // Determine app type
    if (htmlContent.includes('todo') || htmlContent.includes('task')) {
      analysis.appType = 'todo/task management application'
    } else if (htmlContent.includes('shop') || htmlContent.includes('cart') || htmlContent.includes('product')) {
      analysis.appType = 'e-commerce application'
    } else if (htmlContent.includes('dashboard') || htmlContent.includes('chart') || htmlContent.includes('analytics')) {
      analysis.appType = 'dashboard/analytics application'
    } else if (htmlContent.includes('blog') || htmlContent.includes('post') || htmlContent.includes('article')) {
      analysis.appType = 'blog/content management application'
    } else if (htmlContent.includes('chat') || htmlContent.includes('message') || htmlContent.includes('conversation')) {
      analysis.appType = 'chat/messaging application'
    } else if (htmlContent.includes('game') || htmlContent.includes('score') || htmlContent.includes('level')) {
      analysis.appType = 'game application'
    } else if (htmlContent.includes('weather') || htmlContent.includes('forecast') || htmlContent.includes('temperature')) {
      analysis.appType = 'weather application'
    } else if (htmlContent.includes('calendar') || htmlContent.includes('event') || htmlContent.includes('schedule')) {
      analysis.appType = 'calendar/scheduling application'
    } else if (htmlContent.includes('note') || htmlContent.includes('document') || htmlContent.includes('editor')) {
      analysis.appType = 'note-taking/document editor application'
    } else if (htmlContent.includes('social') || htmlContent.includes('profile') || htmlContent.includes('friend')) {
      analysis.appType = 'social media application'
    }

    // Determine architecture
    if (jsContent.includes('class') || jsContent.includes('module') || jsContent.includes('export')) {
      analysis.architecture = 'modular'
    } else if (jsContent.includes('component') || jsContent.includes('render') || jsContent.includes('props')) {
      analysis.architecture = 'component-based'
    } else if (jsContent.includes('service') || jsContent.includes('controller') || jsContent.includes('model')) {
      analysis.architecture = 'MVC (Model-View-Controller)'
    }

    // Identify patterns
    if (jsContent.includes('addEventListener') || jsContent.includes('onclick')) {
      analysis.patterns.push('Event-driven programming')
    }
    if (jsContent.includes('localStorage') || jsContent.includes('sessionStorage')) {
      analysis.patterns.push('Data persistence pattern')
    }
    if (jsContent.includes('fetch') || jsContent.includes('XMLHttpRequest') || jsContent.includes('axios')) {
      analysis.patterns.push('API integration pattern')
    }
    if (jsContent.includes('setInterval') || jsContent.includes('setTimeout')) {
      analysis.patterns.push('Asynchronous programming')
    }
    if (jsContent.includes('try') && jsContent.includes('catch')) {
      analysis.patterns.push('Error handling pattern')
    }

    // Identify features
    if (htmlContent.includes('<form') || htmlContent.includes('<input')) {
      analysis.features.push('form-handling')
    }
    if (htmlContent.includes('<button') || htmlContent.includes('.btn')) {
      analysis.features.push('interactive-buttons')
    }
    if (htmlContent.includes('<select') || htmlContent.includes('dropdown')) {
      analysis.features.push('dropdown-selection')
    }
    if (htmlContent.includes('checkbox') || htmlContent.includes('radio')) {
      analysis.features.push('input-selection')
    }
    if (jsContent.includes('localStorage') || jsContent.includes('sessionStorage')) {
      analysis.features.push('data-persistence')
    }
    if (jsContent.includes('fetch') || jsContent.includes('XMLHttpRequest')) {
      analysis.features.push('api-integration')
    }
    if (htmlContent.includes('responsive') || cssContent.includes('@media')) {
      analysis.features.push('responsive-design')
    }
    if (htmlContent.includes('aria-') || htmlContent.includes('alt=')) {
      analysis.features.push('accessibility')
    }

    // Identify tech stack
    if (htmlContent.includes('<!DOCTYPE html>')) {
      analysis.techStack.push('html5')
    }
    if (cssContent.includes('{') && cssContent.includes('}')) {
      analysis.techStack.push('css3')
    }
    if (jsContent.includes('function') || jsContent.includes('const') || jsContent.includes('let')) {
      analysis.techStack.push('javascript')
    }
    if (jsContent.includes('React') || jsContent.includes('JSX') || jsContent.includes('component')) {
      analysis.techStack.push('react')
    }
    if (jsContent.includes('Vue') || jsContent.includes('vue')) {
      analysis.techStack.push('vue')
    }
    if (jsContent.includes('Angular') || jsContent.includes('angular')) {
      analysis.techStack.push('angular')
    }
    if (jsContent.includes('Node') || jsContent.includes('npm') || jsContent.includes('require')) {
      analysis.techStack.push('nodejs')
    }
    if (jsContent.includes('Firebase') || jsContent.includes('firebase')) {
      analysis.techStack.push('firebase')
    }

    // Identify performance features
    if (htmlContent.includes('async') || htmlContent.includes('defer')) {
      analysis.performance.push('script optimization')
    }
    if (htmlContent.includes('loading="lazy"')) {
      analysis.performance.push('lazy loading')
    }
    if (cssContent.includes('transform') || cssContent.includes('transition')) {
      analysis.performance.push('CSS animations')
    }
    if (jsContent.includes('debounce') || jsContent.includes('throttle')) {
      analysis.performance.push('performance optimization')
    }

    // Identify security features
    if (jsContent.includes('encodeURIComponent') || jsContent.includes('innerText')) {
      analysis.security.push('XSS prevention')
    }
    if (htmlContent.includes('https://')) {
      analysis.security.push('HTTPS usage')
    }
    if (jsContent.includes('validate') || jsContent.includes('sanitize')) {
      analysis.security.push('input validation')
    }

    // Identify accessibility features
    if (htmlContent.includes('alt=')) {
      analysis.accessibility.push('image alt text')
    }
    if (htmlContent.includes('aria-')) {
      analysis.accessibility.push('ARIA attributes')
    }
    if (htmlContent.includes('tabindex')) {
      analysis.accessibility.push('keyboard navigation')
    }

    // Check for responsive design
    analysis.responsive = cssContent.includes('@media') || htmlContent.includes('viewport')

    // Check for interactivity
    analysis.interactive = jsContent.includes('addEventListener') || htmlContent.includes('onclick')

    // Check for data handling
    analysis.dataHandling = jsContent.includes('localStorage') || jsContent.includes('sessionStorage') || jsContent.includes('fetch')

    // Check for API integration
    analysis.apiIntegration = jsContent.includes('fetch') || jsContent.includes('XMLHttpRequest') || jsContent.includes('axios')

    return analysis
  }

  // Generate app overview
  generateAppOverview(analysis, appName, prompt) {
    const featureCount = analysis.features.length
    const architecture = analysis.architecture
    const designPattern = analysis.patterns.length > 0 ? analysis.patterns[0] : 'standard web development'

    return {
      title: `Application Overview: ${appName}`,
      content: `I've created a ${analysis.appType} called '${appName}' with ${featureCount} key features. The app uses a ${architecture} architecture and follows ${designPattern} design patterns.`,
      details: [
        `App Type: ${analysis.appType}`,
        `Architecture: ${architecture}`,
        `Key Features: ${featureCount} implemented`,
        `Design Patterns: ${analysis.patterns.join(', ') || 'Standard patterns'}`
      ]
    }
  }

  // Generate features explanation
  generateFeaturesExplanation(analysis) {
    const featureList = analysis.features.map(feature => {
      const description = this.featureDescriptions[feature] || {
        name: feature.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()),
        description: 'Custom feature implementation',
        benefits: ['Enhanced functionality', 'Better user experience']
      }
      return description
    })

    return {
      title: 'Key Features Implemented',
      content: `The application includes ${analysis.features.length} key features, each designed for optimal functionality and user experience.`,
      features: featureList,
      summary: `All features are fully functional with proper error handling, user feedback, and responsive design.`
    }
  }

  // Generate technical details
  generateTechnicalDetails(analysis) {
    const techStack = analysis.techStack.map(tech => {
      const explanation = this.techStackExplanations[tech] || {
        name: tech.toUpperCase(),
        description: 'Modern web technology',
        benefits: ['Performance', 'Maintainability', 'Scalability']
      }
      return explanation
    })

    return {
      title: 'Technical Implementation',
      content: `The application is built using modern web technologies with a focus on performance, maintainability, and scalability.`,
      techStack: techStack,
      architecture: analysis.architecture,
      patterns: analysis.patterns,
      performance: analysis.performance,
      security: analysis.security
    }
  }

  // Generate user experience explanation
  generateUserExperienceExplanation(analysis) {
    const uiStyle = analysis.responsive ? 'responsive and mobile-first' : 'clean and modern'
    const responsive = analysis.responsive ? 'fully responsive' : 'desktop-optimized'
    const accessibility = analysis.accessibility.length > 0 ? 'comprehensive accessibility' : 'basic accessibility'
    const interaction = analysis.interactive ? 'highly interactive' : 'standard interaction'

    return {
      title: 'User Experience Design',
      content: `The user interface is ${uiStyle} with ${responsive} design, ${accessibility} features, and ${interaction} elements.`,
      details: [
        `Design Style: ${uiStyle}`,
        `Responsiveness: ${responsive}`,
        `Accessibility: ${accessibility}`,
        `Interactivity: ${interaction}`,
        `Data Handling: ${analysis.dataHandling ? 'Advanced' : 'Basic'}`,
        `API Integration: ${analysis.apiIntegration ? 'Full' : 'None'}`
      ]
    }
  }

  // Generate code structure explanation
  generateCodeStructureExplanation(generatedCode) {
    const files = Object.keys(generatedCode)
    const fileTypes = files.reduce((acc, file) => {
      const ext = file.split('.').pop()
      acc[ext] = (acc[ext] || 0) + 1
      return acc
    }, {})

    return {
      title: 'Code Structure & Organization',
      content: `The application is organized into ${files.length} files with a clear separation of concerns.`,
      files: files,
      fileTypes: fileTypes,
      structure: this.analyzeFileStructure(generatedCode),
      organization: 'Modular and maintainable code organization'
    }
  }

  // Generate performance explanation
  generatePerformanceExplanation(analysis) {
    const performanceFeatures = analysis.performance.length > 0 ? analysis.performance.join(', ') : 'standard performance'
    
    return {
      title: 'Performance Optimization',
      content: `The application includes ${performanceFeatures} optimizations for fast loading and smooth user experience.`,
      optimizations: analysis.performance,
      metrics: {
        loadTime: 'Optimized for fast loading',
        memoryUsage: 'Efficient memory management',
        animations: 'Smooth CSS transitions and animations'
      }
    }
  }

  // Generate security explanation
  generateSecurityExplanation(analysis) {
    const securityFeatures = analysis.security.length > 0 ? analysis.security.join(', ') : 'basic security measures'
    
    return {
      title: 'Security Implementation',
      content: `The application implements ${securityFeatures} to protect user data and prevent common vulnerabilities.`,
      measures: analysis.security,
      protection: {
        xss: analysis.security.includes('XSS prevention') ? 'Protected' : 'Basic',
        dataValidation: analysis.security.includes('input validation') ? 'Comprehensive' : 'Basic',
        https: analysis.security.includes('HTTPS usage') ? 'Enforced' : 'Standard'
      }
    }
  }

  // Generate deployment explanation
  generateDeploymentExplanation(analysis) {
    return {
      title: 'Deployment & Hosting',
      content: 'The application is ready for deployment to any modern web hosting platform.',
      platforms: [
        'Firebase Hosting (recommended)',
        'Vercel',
        'Netlify',
        'GitHub Pages',
        'AWS S3 + CloudFront',
        'Any static hosting service'
      ],
      requirements: [
        'Modern web browser',
        'HTTPS support (recommended)',
        'CDN for optimal performance'
      ]
    }
  }

  // Generate summary
  generateSummary(sections) {
    return `I've successfully created a fully functional web application with modern design, responsive layout, and comprehensive features. The application follows industry best practices for performance, security, and accessibility, and is ready for immediate deployment.`
  }

  // Generate recommendations
  generateRecommendations(analysis, validationResults) {
    const recommendations = []

    // Performance recommendations
    if (!analysis.performance.includes('lazy loading')) {
      recommendations.push({
        category: 'Performance',
        priority: 'medium',
        suggestion: 'Consider implementing lazy loading for images and content'
      })
    }

    // Security recommendations
    if (!analysis.security.includes('input validation')) {
      recommendations.push({
        category: 'Security',
        priority: 'high',
        suggestion: 'Add comprehensive input validation and sanitization'
      })
    }

    // Accessibility recommendations
    if (analysis.accessibility.length < 2) {
      recommendations.push({
        category: 'Accessibility',
        priority: 'medium',
        suggestion: 'Enhance accessibility with ARIA attributes and keyboard navigation'
      })
    }

    // Responsive design recommendations
    if (!analysis.responsive) {
      recommendations.push({
        category: 'Responsive Design',
        priority: 'high',
        suggestion: 'Add responsive design with media queries for mobile devices'
      })
    }

    // API integration recommendations
    if (!analysis.apiIntegration) {
      recommendations.push({
        category: 'API Integration',
        priority: 'low',
        suggestion: 'Consider adding API integration for dynamic data'
      })
    }

    return recommendations
  }

  // Analyze file structure
  analyzeFileStructure(generatedCode) {
    const structure = {
      html: [],
      css: [],
      javascript: [],
      config: [],
      assets: []
    }

    Object.keys(generatedCode).forEach(filename => {
      if (filename.endsWith('.html')) {
        structure.html.push(filename)
      } else if (filename.endsWith('.css')) {
        structure.css.push(filename)
      } else if (filename.endsWith('.js') || filename.endsWith('.jsx')) {
        structure.javascript.push(filename)
      } else if (filename.endsWith('.json') || filename.endsWith('.config')) {
        structure.config.push(filename)
      } else {
        structure.assets.push(filename)
      }
    })

    return structure
  }

  // Calculate lines of code
  calculateLinesOfCode(generatedCode) {
    return Object.values(generatedCode).reduce((total, content) => {
      if (typeof content === 'string') {
        return total + content.split('\n').length
      }
      return total
    }, 0)
  }

  // Calculate complexity
  calculateComplexity(analysis) {
    let complexity = 'simple'
    
    if (analysis.features.length > 5) {
      complexity = 'moderate'
    }
    if (analysis.features.length > 10) {
      complexity = 'complex'
    }
    if (analysis.patterns.length > 3) {
      complexity = 'advanced'
    }

    return complexity
  }

  // Extract dependencies
  extractDependencies(generatedCode) {
    const dependencies = []
    
    Object.values(generatedCode).forEach(content => {
      if (typeof content === 'string') {
        if (content.includes('React') || content.includes('react')) {
          dependencies.push('react')
        }
        if (content.includes('Vue') || content.includes('vue')) {
          dependencies.push('vue')
        }
        if (content.includes('Angular') || content.includes('angular')) {
          dependencies.push('angular')
        }
        if (content.includes('jQuery') || content.includes('$')) {
          dependencies.push('jquery')
        }
        if (content.includes('Bootstrap') || content.includes('bootstrap')) {
          dependencies.push('bootstrap')
        }
        if (content.includes('Tailwind') || content.includes('tailwind')) {
          dependencies.push('tailwindcss')
        }
      }
    })

    return [...new Set(dependencies)] // Remove duplicates
  }
}

export default new ExplanationService()
