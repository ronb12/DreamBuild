// DreamBuild Recommendation Service
// Analyzes generated applications and provides intelligent suggestions for improvements

class RecommendationService {
  constructor() {
    this.analysisRules = {
      // Design and UX recommendations
      design: [
        {
          condition: (files) => !files['style.css'] || files['style.css'].length < 500,
          suggestion: {
            type: 'design',
            priority: 'high',
            title: 'Enhance Visual Design',
            description: 'Add comprehensive CSS styling with modern design patterns',
            implementation: 'Add CSS with responsive design, color schemes, typography, and animations',
            icon: '🎨'
          }
        },
        {
          condition: (files) => !files['style.css']?.includes('@media'),
          suggestion: {
            type: 'design',
            priority: 'high',
            title: 'Add Responsive Design',
            description: 'Make the application work perfectly on mobile devices',
            implementation: 'Add CSS media queries for mobile, tablet, and desktop breakpoints',
            icon: '📱'
          }
        },
        {
          condition: (files) => !files['style.css']?.includes('animation') && !files['style.css']?.includes('transition'),
          suggestion: {
            type: 'design',
            priority: 'medium',
            title: 'Add Smooth Animations',
            description: 'Enhance user experience with smooth transitions and animations',
            implementation: 'Add CSS transitions, hover effects, and loading animations',
            icon: '✨'
          }
        }
      ],

      // Functionality recommendations
      functionality: [
        {
          condition: (files) => !files['script.js'] || files['script.js'].length < 200,
          suggestion: {
            type: 'functionality',
            priority: 'high',
            title: 'Add Interactive Features',
            description: 'Include JavaScript functionality for better user engagement',
            implementation: 'Add event handlers, form validation, and dynamic content updates',
            icon: '⚡'
          }
        },
        {
          condition: (files) => !files['script.js']?.includes('localStorage') && 
                                !files['script.js']?.includes('sessionStorage'),
          suggestion: {
            type: 'functionality',
            priority: 'medium',
            title: 'Add Data Persistence',
            description: 'Save user data locally for better experience',
            implementation: 'Use localStorage or sessionStorage to save user preferences and data',
            icon: '💾'
          }
        },
        {
          condition: (files) => !files['script.js']?.includes('addEventListener') ||
                                files['script.js']?.includes('onclick='),
          suggestion: {
            type: 'functionality',
            priority: 'medium',
            title: 'Improve Event Handling',
            description: 'Use modern JavaScript event handling patterns',
            implementation: 'Replace inline event handlers with addEventListener for better maintainability',
            icon: '🎯'
          }
        }
      ],

      // Performance recommendations
      performance: [
        {
          condition: (files) => files['index.html']?.includes('<img') && !files['index.html']?.includes('loading='),
          suggestion: {
            type: 'performance',
            priority: 'medium',
            title: 'Optimize Image Loading',
            description: 'Add lazy loading for better performance',
            implementation: 'Add loading="lazy" to images and consider WebP format',
            icon: '🖼️'
          }
        },
        {
          condition: (files) => files['script.js'] && files['script.js'].length > 10000,
          suggestion: {
            type: 'performance',
            priority: 'low',
            title: 'Consider Code Splitting',
            description: 'Break large JavaScript files into smaller modules',
            implementation: 'Split code into logical modules and load them as needed',
            icon: '📦'
          }
        }
      ],

      // Accessibility recommendations
      accessibility: [
        {
          condition: (files) => !files['index.html']?.includes('alt=') && files['index.html']?.includes('<img'),
          suggestion: {
            type: 'accessibility',
            priority: 'high',
            title: 'Add Image Alt Text',
            description: 'Make images accessible to screen readers',
            implementation: 'Add descriptive alt attributes to all images',
            icon: '♿'
          }
        },
        {
          condition: (files) => !files['index.html']?.includes('aria-') && 
                                (files['index.html']?.includes('<button') || files['index.html']?.includes('<input')),
          suggestion: {
            type: 'accessibility',
            priority: 'medium',
            title: 'Improve Accessibility',
            description: 'Add ARIA labels and semantic HTML',
            implementation: 'Use semantic HTML elements and add ARIA labels for better screen reader support',
            icon: '♿'
          }
        }
      ],

      // SEO recommendations
      seo: [
        {
          condition: (files) => !files['index.html']?.includes('<meta name="description"'),
          suggestion: {
            type: 'seo',
            priority: 'high',
            title: 'Add SEO Meta Tags',
            description: 'Improve search engine visibility',
            implementation: 'Add meta description, keywords, and Open Graph tags',
            icon: '🔍'
          }
        },
        {
          condition: (files) => !files['index.html']?.includes('<title>') || 
                                files['index.html']?.includes('<title>Untitled</title>'),
          suggestion: {
            type: 'seo',
            priority: 'high',
            title: 'Add Descriptive Title',
            description: 'Include a meaningful page title for SEO',
            implementation: 'Add a descriptive, keyword-rich title tag',
            icon: '📝'
          }
        }
      ],

      // Security recommendations
      security: [
        {
          condition: (files) => files['index.html']?.includes('<form') && !files['index.html']?.includes('method='),
          suggestion: {
            type: 'security',
            priority: 'medium',
            title: 'Secure Form Handling',
            description: 'Add proper form validation and security measures',
            implementation: 'Add CSRF protection, input validation, and secure form submission',
            icon: '🔒'
          }
        }
      ]
    }
  }

  // Analyze generated application and provide recommendations
  analyzeApplication(files, prompt = '') {
    const recommendations = []
    const analysisContext = this.analyzeContext(prompt)

    // Run all analysis rules
    Object.values(this.analysisRules).forEach(ruleCategory => {
      ruleCategory.forEach(rule => {
        if (rule.condition(files)) {
          const recommendation = {
            ...rule.suggestion,
            id: this.generateRecommendationId(),
            category: ruleCategory === this.analysisRules.design ? 'design' :
                     ruleCategory === this.analysisRules.functionality ? 'functionality' :
                     ruleCategory === this.analysisRules.performance ? 'performance' :
                     ruleCategory === this.analysisRules.accessibility ? 'accessibility' :
                     ruleCategory === this.analysisRules.seo ? 'seo' :
                     'security',
            context: analysisContext,
            estimatedImpact: this.calculateImpact(rule.suggestion.priority),
            implementationTime: this.estimateImplementationTime(rule.suggestion.type)
          }
          recommendations.push(recommendation)
        }
      })
    })

    // Add context-specific recommendations
    const contextRecommendations = this.generateContextRecommendations(analysisContext, files)
    recommendations.push(...contextRecommendations)

    // Add feature enhancement recommendations
    const featureRecommendations = this.generateFeatureRecommendations(analysisContext, files)
    recommendations.push(...featureRecommendations)

    // Sort by priority and impact
    return this.prioritizeRecommendations(recommendations)
  }

  // Generate feature enhancement recommendations
  generateFeatureRecommendations(context, files) {
    const recommendations = []
    const featureMatrix = this.getFeatureMatrix(context)

    featureMatrix.forEach(feature => {
      if (!this.hasFeature(files, feature.id)) {
        recommendations.push({
          id: this.generateRecommendationId(),
          type: 'feature-enhancement',
          priority: feature.priority,
          title: feature.title,
          description: feature.description,
          implementation: feature.implementation,
          icon: feature.icon,
          category: 'functionality',
          context,
          estimatedImpact: feature.impact,
          implementationTime: feature.timeEstimate,
          codeExample: feature.codeExample,
          benefits: feature.benefits,
          complexity: feature.complexity
        })
      }
    })

    return recommendations
  }

  // Check if application has a specific feature
  hasFeature(files, featureId) {
    const featureChecks = {
      'user-authentication': (files) => 
        files['script.js']?.includes('login') || files['script.js']?.includes('auth') ||
        files['index.html']?.includes('login') || files['index.html']?.includes('signup'),
      
      'data-persistence': (files) => 
        files['script.js']?.includes('localStorage') || files['script.js']?.includes('sessionStorage') ||
        files['script.js']?.includes('database') || files['script.js']?.includes('fetch'),
      
      'form-validation': (files) => 
        files['script.js']?.includes('validate') || files['script.js']?.includes('validation') ||
        files['index.html']?.includes('required') || files['index.html']?.includes('pattern'),
      
      'search-functionality': (files) => 
        files['script.js']?.includes('search') || files['script.js']?.includes('filter') ||
        files['index.html']?.includes('search') || files['index.html']?.includes('filter'),
      
      'responsive-design': (files) => 
        files['style.css']?.includes('@media') || files['style.css']?.includes('responsive'),
      
      'pwa-features': (files) => 
        files['manifest.json'] || files['sw.js'] || files['index.html']?.includes('service-worker'),
      
      'analytics-tracking': (files) => 
        files['script.js']?.includes('analytics') || files['script.js']?.includes('gtag') ||
        files['index.html']?.includes('google-analytics'),
      
      'social-sharing': (files) => 
        files['script.js']?.includes('share') || files['index.html']?.includes('social-share'),
      
      'dark-mode': (files) => 
        files['style.css']?.includes('dark') || files['style.css']?.includes('theme') ||
        files['script.js']?.includes('dark-mode'),
      
      'error-handling': (files) => 
        files['script.js']?.includes('try') || files['script.js']?.includes('catch') ||
        files['script.js']?.includes('error'),
      
      'loading-states': (files) => 
        files['script.js']?.includes('loading') || files['style.css']?.includes('spinner') ||
        files['index.html']?.includes('loading'),
      
      'accessibility-features': (files) => 
        files['index.html']?.includes('aria-') || files['index.html']?.includes('role=') ||
        files['index.html']?.includes('alt='),
      
      'seo-optimization': (files) => 
        files['index.html']?.includes('meta name="description"') ||
        files['index.html']?.includes('meta name="keywords"'),
      
      'security-headers': (files) => 
        files['index.html']?.includes('Content-Security-Policy') ||
        files['index.html']?.includes('X-Frame-Options'),
      
      'performance-optimization': (files) => 
        files['script.js']?.includes('lazy') || files['index.html']?.includes('loading="lazy"') ||
        files['style.css']?.includes('transform3d')
    }

    return featureChecks[featureId] ? featureChecks[featureId](files) : false
  }

  // Get feature matrix based on context
  getFeatureMatrix(context) {
    const baseFeatures = [
      {
        id: 'responsive-design',
        title: 'Responsive Design',
        description: 'Make your app work perfectly on all devices',
        implementation: 'Add CSS media queries and flexible layouts',
        icon: '📱',
        priority: 'high',
        impact: 'high',
        timeEstimate: '1-2 hours',
        complexity: 'beginner',
        benefits: ['Better mobile experience', 'Increased user engagement', 'SEO benefits'],
        codeExample: `@media (max-width: 768px) {
  .container { padding: 10px; }
  .grid { grid-template-columns: 1fr; }
}`
      },
      {
        id: 'user-authentication',
        title: 'User Authentication',
        description: 'Add login/signup functionality for user accounts',
        implementation: 'Implement user registration, login, and session management',
        icon: '👤',
        priority: 'high',
        impact: 'high',
        timeEstimate: '3-4 hours',
        complexity: 'intermediate',
        benefits: ['User personalization', 'Data persistence', 'Enhanced security'],
        codeExample: `function loginUser(email, password) {
  // Validate credentials
  // Create session
  // Redirect to dashboard
}`
      },
      {
        id: 'data-persistence',
        title: 'Data Persistence',
        description: 'Save user data and preferences locally or to a database',
        implementation: 'Use localStorage, sessionStorage, or integrate with a backend API',
        icon: '💾',
        priority: 'high',
        impact: 'high',
        timeEstimate: '2-3 hours',
        complexity: 'beginner',
        benefits: ['Better user experience', 'Data retention', 'Offline functionality'],
        codeExample: `localStorage.setItem('userData', JSON.stringify(data));
const savedData = JSON.parse(localStorage.getItem('userData'));`
      },
      {
        id: 'form-validation',
        title: 'Form Validation',
        description: 'Add client-side and server-side form validation',
        implementation: 'Validate inputs, show error messages, and prevent invalid submissions',
        icon: '✅',
        priority: 'medium',
        impact: 'medium',
        timeEstimate: '1-2 hours',
        complexity: 'beginner',
        benefits: ['Better user experience', 'Data integrity', 'Error prevention'],
        codeExample: `function validateForm(formData) {
  const errors = [];
  if (!formData.email.includes('@')) {
    errors.push('Invalid email format');
  }
  return errors;
}`
      },
      {
        id: 'search-functionality',
        title: 'Search & Filter',
        description: 'Add search and filtering capabilities to your content',
        implementation: 'Implement real-time search with filtering and sorting options',
        icon: '🔍',
        priority: 'medium',
        impact: 'medium',
        timeEstimate: '2-3 hours',
        complexity: 'intermediate',
        benefits: ['Better content discovery', 'Improved usability', 'Enhanced user experience'],
        codeExample: `function searchContent(query, items) {
  return items.filter(item => 
    item.title.toLowerCase().includes(query.toLowerCase())
  );
}`
      },
      {
        id: 'pwa-features',
        title: 'Progressive Web App',
        description: 'Make your app installable and work offline',
        implementation: 'Add service worker, manifest file, and offline functionality',
        icon: '📲',
        priority: 'medium',
        impact: 'high',
        timeEstimate: '3-4 hours',
        complexity: 'intermediate',
        benefits: ['App-like experience', 'Offline functionality', 'Better performance'],
        codeExample: `// manifest.json
{
  "name": "My App",
  "short_name": "App",
  "start_url": "/",
  "display": "standalone"
}`
      },
      {
        id: 'analytics-tracking',
        title: 'Analytics & Tracking',
        description: 'Track user behavior and app performance',
        implementation: 'Integrate Google Analytics or similar tracking tools',
        icon: '📊',
        priority: 'low',
        impact: 'medium',
        timeEstimate: '30 minutes',
        complexity: 'beginner',
        benefits: ['User insights', 'Performance monitoring', 'Data-driven decisions'],
        codeExample: `gtag('event', 'page_view', {
  page_title: document.title,
  page_location: window.location.href
});`
      },
      {
        id: 'social-sharing',
        title: 'Social Sharing',
        description: 'Allow users to share content on social media',
        implementation: 'Add social sharing buttons and Open Graph meta tags',
        icon: '📤',
        priority: 'low',
        impact: 'medium',
        timeEstimate: '1 hour',
        complexity: 'beginner',
        benefits: ['Increased reach', 'Social engagement', 'Viral potential'],
        codeExample: `function shareToSocial(platform, url, text) {
  const shareUrl = \`https://\${platform}.com/share?url=\${url}&text=\${text}\`;
  window.open(shareUrl, '_blank');
}`
      },
      {
        id: 'dark-mode',
        title: 'Dark Mode',
        description: 'Add dark/light theme toggle for better user experience',
        implementation: 'Create theme system with CSS variables and JavaScript toggle',
        icon: '🌙',
        priority: 'low',
        impact: 'low',
        timeEstimate: '1-2 hours',
        complexity: 'beginner',
        benefits: ['User preference', 'Battery saving', 'Eye comfort'],
        codeExample: `:root {
  --bg-color: #ffffff;
  --text-color: #000000;
}
[data-theme="dark"] {
  --bg-color: #1a1a1a;
  --text-color: #ffffff;
}`
      },
      {
        id: 'error-handling',
        title: 'Error Handling',
        description: 'Implement comprehensive error handling and user feedback',
        implementation: 'Add try-catch blocks, error boundaries, and user-friendly error messages',
        icon: '⚠️',
        priority: 'high',
        impact: 'high',
        timeEstimate: '2-3 hours',
        complexity: 'intermediate',
        benefits: ['Better reliability', 'User experience', 'Debugging'],
        codeExample: `try {
  const result = await riskyOperation();
  return result;
} catch (error) {
  console.error('Operation failed:', error);
  showUserMessage('Something went wrong. Please try again.');
}`
      },
      {
        id: 'loading-states',
        title: 'Loading States',
        description: 'Add loading indicators and skeleton screens',
        implementation: 'Create loading spinners, progress bars, and skeleton UI components',
        icon: '⏳',
        priority: 'medium',
        impact: 'medium',
        timeEstimate: '1-2 hours',
        complexity: 'beginner',
        benefits: ['Better perceived performance', 'User feedback', 'Professional feel'],
        codeExample: `<div class="loading-spinner">
  <div class="spinner"></div>
  <p>Loading...</p>
</div>`
      }
    ]

    // Filter features based on context
    let relevantFeatures = baseFeatures

    // Add industry-specific features
    if (context.industry === 'ecommerce') {
      relevantFeatures.push({
        id: 'shopping-cart',
        title: 'Shopping Cart',
        description: 'Add cart functionality with add/remove items and checkout',
        implementation: 'Implement cart state management and checkout flow',
        icon: '🛒',
        priority: 'high',
        impact: 'high',
        timeEstimate: '4-5 hours',
        complexity: 'intermediate',
        benefits: ['Revenue generation', 'User convenience', 'Business functionality'],
        codeExample: `class ShoppingCart {
  constructor() {
    this.items = [];
    this.total = 0;
  }
  
  addItem(product) {
    this.items.push(product);
    this.calculateTotal();
  }
}`
      })
    }

    if (context.industry === 'healthcare') {
      relevantFeatures.push({
        id: 'hipaa-compliance',
        title: 'HIPAA Compliance',
        description: 'Add healthcare data protection and compliance features',
        implementation: 'Implement data encryption, secure forms, and privacy controls',
        icon: '🏥',
        priority: 'high',
        impact: 'high',
        timeEstimate: '6-8 hours',
        complexity: 'advanced',
        benefits: ['Legal compliance', 'Data security', 'User trust'],
        codeExample: `function encryptSensitiveData(data) {
  // Implement AES encryption for healthcare data
  return CryptoJS.AES.encrypt(JSON.stringify(data), secretKey).toString();
}`
      })
    }

    return relevantFeatures
  }

  // Analyze the context from the user prompt
  analyzeContext(prompt) {
    const lowerPrompt = prompt.toLowerCase()
    const context = {
      appType: 'web',
      industry: 'general',
      features: [],
      targetAudience: 'general',
      complexity: 'basic'
    }

    // Detect app type
    if (lowerPrompt.includes('mobile') || lowerPrompt.includes('app')) {
      context.appType = 'mobile'
    } else if (lowerPrompt.includes('api') || lowerPrompt.includes('backend')) {
      context.appType = 'backend'
    }

    // Detect industry
    const industries = {
      'health': 'healthcare',
      'food': 'food',
      'todo': 'productivity',
      'portfolio': 'professional',
      'ecommerce': 'ecommerce',
      'blog': 'media',
      'social': 'social',
      'education': 'education',
      'finance': 'finance',
      'fitness': 'fitness'
    }

    Object.entries(industries).forEach(([keyword, industry]) => {
      if (lowerPrompt.includes(keyword)) {
        context.industry = industry
      }
    })

    // Detect features
    const featureKeywords = {
      'authentication': ['login', 'signup', 'auth', 'user'],
      'database': ['database', 'storage', 'data', 'persist'],
      'payment': ['payment', 'pay', 'stripe', 'paypal'],
      'social': ['social', 'share', 'comment', 'like'],
      'real-time': ['real-time', 'live', 'instant', 'websocket'],
      'analytics': ['analytics', 'track', 'metrics', 'stats']
    }

    Object.entries(featureKeywords).forEach(([feature, keywords]) => {
      if (keywords.some(keyword => lowerPrompt.includes(keyword))) {
        context.features.push(feature)
      }
    })

    // Detect complexity
    if (lowerPrompt.includes('complex') || lowerPrompt.includes('advanced') || 
        lowerPrompt.includes('enterprise') || lowerPrompt.includes('professional')) {
      context.complexity = 'advanced'
    } else if (lowerPrompt.includes('simple') || lowerPrompt.includes('basic')) {
      context.complexity = 'basic'
    } else {
      context.complexity = 'intermediate'
    }

    return context
  }

  // Generate context-specific recommendations
  generateContextRecommendations(context, files) {
    const recommendations = []

    // Industry-specific recommendations
    if (context.industry === 'healthcare') {
      recommendations.push({
        id: this.generateRecommendationId(),
        type: 'compliance',
        priority: 'high',
        title: 'Add HIPAA Compliance Features',
        description: 'Include privacy and security measures for healthcare applications',
        implementation: 'Add data encryption, secure forms, and privacy policy',
        icon: '🏥',
        category: 'security',
        context,
        estimatedImpact: 'high',
        implementationTime: '2-3 hours'
      })
    }

    if (context.industry === 'ecommerce') {
      recommendations.push({
        id: this.generateRecommendationId(),
        type: 'feature',
        priority: 'high',
        title: 'Add Shopping Cart Functionality',
        description: 'Include cart management, checkout process, and payment integration',
        implementation: 'Implement cart state management, checkout flow, and payment gateway integration',
        icon: '🛒',
        category: 'functionality',
        context,
        estimatedImpact: 'high',
        implementationTime: '4-6 hours'
      })
    }

    if (context.appType === 'mobile') {
      recommendations.push({
        id: this.generateRecommendationId(),
        type: 'feature',
        priority: 'high',
        title: 'Add PWA Features',
        description: 'Make the app installable and work offline',
        implementation: 'Add service worker, manifest file, and offline functionality',
        icon: '📱',
        category: 'functionality',
        context,
        estimatedImpact: 'high',
        implementationTime: '3-4 hours'
      })
    }

    // Complexity-based recommendations
    if (context.complexity === 'advanced') {
      recommendations.push({
        id: this.generateRecommendationId(),
        type: 'architecture',
        priority: 'medium',
        title: 'Implement State Management',
        description: 'Add proper state management for complex applications',
        implementation: 'Use Redux, Zustand, or Context API for state management',
        icon: '🏗️',
        category: 'functionality',
        context,
        estimatedImpact: 'medium',
        implementationTime: '2-3 hours'
      })
    }

    return recommendations
  }

  // Calculate impact score
  calculateImpact(priority) {
    const impactScores = {
      'high': 'high',
      'medium': 'medium',
      'low': 'low'
    }
    return impactScores[priority] || 'medium'
  }

  // Estimate implementation time
  estimateImplementationTime(type) {
    const timeEstimates = {
      'design': '1-2 hours',
      'functionality': '2-4 hours',
      'performance': '1-3 hours',
      'accessibility': '1-2 hours',
      'seo': '30 minutes - 1 hour',
      'security': '2-4 hours',
      'compliance': '3-6 hours',
      'architecture': '4-8 hours'
    }
    return timeEstimates[type] || '1-2 hours'
  }

  // Prioritize recommendations
  prioritizeRecommendations(recommendations) {
    const priorityOrder = { 'high': 3, 'medium': 2, 'low': 1 }
    
    return recommendations.sort((a, b) => {
      const priorityDiff = priorityOrder[b.priority] - priorityOrder[a.priority]
      if (priorityDiff !== 0) return priorityDiff
      
      // If same priority, sort by category importance
      const categoryOrder = { 'security': 4, 'accessibility': 3, 'seo': 2, 'performance': 1 }
      return (categoryOrder[b.category] || 0) - (categoryOrder[a.category] || 0)
    })
  }

  // Generate unique recommendation ID
  generateRecommendationId() {
    return `rec_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  }

  // Get recommendation categories
  getRecommendationCategories() {
    return {
      design: {
        name: 'Design & UX',
        icon: '🎨',
        description: 'Visual design, user experience, and interface improvements'
      },
      functionality: {
        name: 'Functionality',
        icon: '⚡',
        description: 'Features, interactions, and user engagement'
      },
      performance: {
        name: 'Performance',
        icon: '🚀',
        description: 'Speed, optimization, and resource management'
      },
      accessibility: {
        name: 'Accessibility',
        icon: '♿',
        description: 'Inclusive design and screen reader support'
      },
      seo: {
        name: 'SEO & Discovery',
        icon: '🔍',
        description: 'Search engine optimization and discoverability'
      },
      security: {
        name: 'Security',
        icon: '🔒',
        description: 'Data protection and security measures'
      }
    }
  }

  // Get implementation guidance for a specific recommendation
  getImplementationGuidance(recommendation) {
    const guidance = {
      'design': {
        steps: [
          '1. Analyze current design patterns',
          '2. Research modern UI/UX trends',
          '3. Create responsive CSS framework',
          '4. Add animations and transitions',
          '5. Test across different devices'
        ],
        tools: ['CSS Grid', 'Flexbox', 'CSS Variables', 'Media Queries'],
        examples: ['Material Design', 'Bootstrap', 'Tailwind CSS']
      },
      'functionality': {
        steps: [
          '1. Identify user interaction points',
          '2. Implement event handlers',
          '3. Add form validation',
          '4. Create dynamic content updates',
          '5. Test user flows'
        ],
        tools: ['JavaScript ES6+', 'DOM API', 'Fetch API', 'Local Storage'],
        examples: ['Form validation', 'Dynamic lists', 'Modal dialogs']
      },
      'performance': {
        steps: [
          '1. Audit current performance',
          '2. Optimize images and assets',
          '3. Implement lazy loading',
          '4. Minify CSS and JavaScript',
          '5. Use CDN for static assets'
        ],
        tools: ['Webpack', 'Parcel', 'Vite', 'Image Optimization'],
        examples: ['Code splitting', 'Lazy loading', 'Service Workers']
      },
      'accessibility': {
        steps: [
          '1. Audit current accessibility',
          '2. Add semantic HTML',
          '3. Include ARIA labels',
          '4. Test with screen readers',
          '5. Ensure keyboard navigation'
        ],
        tools: ['ARIA', 'Semantic HTML', 'Screen Readers', 'axe-core'],
        examples: ['Alt text', 'Focus management', 'Color contrast']
      },
      'seo': {
        steps: [
          '1. Research target keywords',
          '2. Optimize meta tags',
          '3. Add structured data',
          '4. Improve page speed',
          '5. Create XML sitemap'
        ],
        tools: ['Google Analytics', 'Search Console', 'Schema.org', 'Meta Tags'],
        examples: ['Open Graph', 'Twitter Cards', 'JSON-LD']
      },
      'security': {
        steps: [
          '1. Identify security vulnerabilities',
          '2. Implement input validation',
          '3. Add CSRF protection',
          '4. Use HTTPS',
          '5. Regular security audits'
        ],
        tools: ['Input Validation', 'HTTPS', 'CSRF Tokens', 'Content Security Policy'],
        examples: ['Form validation', 'Secure headers', 'Data encryption']
      }
    }

    return guidance[recommendation.type] || guidance['functionality']
  }

  // Production Readiness Analysis
  analyzeProductionReadiness(files, prompt = '') {
    const analysis = {
      overallScore: 0,
      readinessLevel: 'not-ready',
      categories: {},
      criticalIssues: [],
      warnings: [],
      recommendations: [],
      deploymentReadiness: {
        firebase: false,
        github: false,
        vercel: false,
        netlify: false
      },
      nextSteps: []
    }

    // Analyze each category
    analysis.categories.design = this.analyzeDesignReadiness(files)
    analysis.categories.functionality = this.analyzeFunctionalityReadiness(files)
    analysis.categories.performance = this.analyzePerformanceReadiness(files)
    analysis.categories.accessibility = this.analyzeAccessibilityReadiness(files)
    analysis.categories.seo = this.analyzeSEOReadiness(files)
    analysis.categories.security = this.analyzeSecurityReadiness(files)
    analysis.categories.codeQuality = this.analyzeCodeQualityReadiness(files)

    // Calculate overall score
    const categoryScores = Object.values(analysis.categories).map(cat => cat.score)
    analysis.overallScore = Math.round(categoryScores.reduce((sum, score) => sum + score, 0) / categoryScores.length)

    // Determine readiness level
    if (analysis.overallScore >= 90) {
      analysis.readinessLevel = 'production-ready'
    } else if (analysis.overallScore >= 75) {
      analysis.readinessLevel = 'near-ready'
    } else if (analysis.overallScore >= 60) {
      analysis.readinessLevel = 'needs-improvement'
    } else {
      analysis.readinessLevel = 'not-ready'
    }

    // Identify critical issues
    analysis.criticalIssues = this.identifyCriticalIssues(analysis.categories)
    
    // Generate warnings
    analysis.warnings = this.generateWarnings(analysis.categories)
    
    // Generate deployment recommendations
    analysis.deploymentReadiness = this.analyzeDeploymentReadiness(files, analysis)
    
    // Generate next steps
    analysis.nextSteps = this.generateNextSteps(analysis)

    return analysis
  }

  // Analyze design readiness
  analyzeDesignReadiness(files) {
    const checks = {
      hasCSS: !!files['style.css'] && files['style.css'].length > 100,
      hasResponsiveDesign: files['style.css']?.includes('@media') || false,
      hasModernStyling: files['style.css']?.includes('flexbox') || files['style.css']?.includes('grid') || false,
      hasAnimations: files['style.css']?.includes('animation') || files['style.css']?.includes('transition') || false,
      hasConsistentColors: files['style.css']?.includes('--') || files['style.css']?.includes('color:') || false
    }

    const score = Object.values(checks).filter(Boolean).length * 20
    const issues = []

    if (!checks.hasCSS) issues.push('Missing CSS styling')
    if (!checks.hasResponsiveDesign) issues.push('Not responsive for mobile devices')
    if (!checks.hasModernStyling) issues.push('Using outdated CSS techniques')
    if (!checks.hasAnimations) issues.push('No animations or transitions')
    if (!checks.hasConsistentColors) issues.push('Inconsistent color scheme')

    return {
      score,
      checks,
      issues,
      recommendations: [
        !checks.hasCSS && 'Add comprehensive CSS styling',
        !checks.hasResponsiveDesign && 'Implement responsive design with media queries',
        !checks.hasModernStyling && 'Use modern CSS Grid or Flexbox',
        !checks.hasAnimations && 'Add smooth transitions and hover effects',
        !checks.hasConsistentColors && 'Create a consistent color palette'
      ].filter(Boolean)
    }
  }

  // Analyze functionality readiness
  analyzeFunctionalityReadiness(files) {
    const checks = {
      hasJavaScript: !!files['script.js'] && files['script.js'].length > 50,
      hasErrorHandling: files['script.js']?.includes('try') || files['script.js']?.includes('catch') || false,
      hasFormValidation: files['script.js']?.includes('validate') || files['index.html']?.includes('required') || false,
      hasUserInteraction: files['script.js']?.includes('addEventListener') || files['script.js']?.includes('onclick') || false,
      hasDataPersistence: files['script.js']?.includes('localStorage') || files['script.js']?.includes('fetch') || false
    }

    const score = Object.values(checks).filter(Boolean).length * 20
    const issues = []

    if (!checks.hasJavaScript) issues.push('No JavaScript functionality')
    if (!checks.hasErrorHandling) issues.push('No error handling implemented')
    if (!checks.hasFormValidation) issues.push('No form validation')
    if (!checks.hasUserInteraction) issues.push('Limited user interaction')
    if (!checks.hasDataPersistence) issues.push('No data persistence')

    return {
      score,
      checks,
      issues,
      recommendations: [
        !checks.hasJavaScript && 'Add JavaScript functionality',
        !checks.hasErrorHandling && 'Implement proper error handling',
        !checks.hasFormValidation && 'Add form validation',
        !checks.hasUserInteraction && 'Add interactive features',
        !checks.hasDataPersistence && 'Implement data storage'
      ].filter(Boolean)
    }
  }

  // Analyze performance readiness
  analyzePerformanceReadiness(files) {
    const checks = {
      hasOptimizedImages: files['index.html']?.includes('loading="lazy"') || false,
      hasMinifiedCode: files['script.js']?.length < 5000 || false, // Simple check
      hasEfficientCSS: files['style.css']?.length < 10000 || false, // Simple check
      hasNoBlockingScripts: !files['index.html']?.includes('script src') || files['index.html']?.includes('async') || false,
      hasCDNReady: files['index.html']?.includes('https://') || false
    }

    const score = Object.values(checks).filter(Boolean).length * 20
    const issues = []

    if (!checks.hasOptimizedImages) issues.push('Images not optimized for loading')
    if (!checks.hasMinifiedCode) issues.push('JavaScript code not optimized')
    if (!checks.hasEfficientCSS) issues.push('CSS could be more efficient')
    if (!checks.hasNoBlockingScripts) issues.push('Scripts may block page loading')
    if (!checks.hasCDNReady) issues.push('Not ready for CDN deployment')

    return {
      score,
      checks,
      issues,
      recommendations: [
        !checks.hasOptimizedImages && 'Add lazy loading to images',
        !checks.hasMinifiedCode && 'Minify JavaScript code',
        !checks.hasEfficientCSS && 'Optimize CSS for better performance',
        !checks.hasNoBlockingScripts && 'Make scripts non-blocking',
        !checks.hasCDNReady && 'Prepare for CDN deployment'
      ].filter(Boolean)
    }
  }

  // Analyze accessibility readiness
  analyzeAccessibilityReadiness(files) {
    const checks = {
      hasAltText: !files['index.html']?.includes('<img') || files['index.html']?.includes('alt=') || false,
      hasSemanticHTML: files['index.html']?.includes('<header>') || files['index.html']?.includes('<main>') || false,
      hasARIALabels: files['index.html']?.includes('aria-') || false,
      hasFormLabels: !files['index.html']?.includes('<input') || files['index.html']?.includes('<label') || false,
      hasKeyboardNavigation: files['script.js']?.includes('keydown') || files['script.js']?.includes('tabIndex') || false
    }

    const score = Object.values(checks).filter(Boolean).length * 20
    const issues = []

    if (!checks.hasAltText) issues.push('Images missing alt text')
    if (!checks.hasSemanticHTML) issues.push('Not using semantic HTML')
    if (!checks.hasARIALabels) issues.push('Missing ARIA labels')
    if (!checks.hasFormLabels) issues.push('Form inputs missing labels')
    if (!checks.hasKeyboardNavigation) issues.push('Limited keyboard navigation')

    return {
      score,
      checks,
      issues,
      recommendations: [
        !checks.hasAltText && 'Add alt text to all images',
        !checks.hasSemanticHTML && 'Use semantic HTML elements',
        !checks.hasARIALabels && 'Add ARIA labels for screen readers',
        !checks.hasFormLabels && 'Add labels to form inputs',
        !checks.hasKeyboardNavigation && 'Implement keyboard navigation'
      ].filter(Boolean)
    }
  }

  // Analyze SEO readiness
  analyzeSEOReadiness(files) {
    const checks = {
      hasTitle: files['index.html']?.includes('<title>') && !files['index.html']?.includes('<title>Untitled</title>'),
      hasMetaDescription: files['index.html']?.includes('meta name="description"') || false,
      hasMetaKeywords: files['index.html']?.includes('meta name="keywords"') || false,
      hasOpenGraph: files['index.html']?.includes('og:') || false,
      hasStructuredData: files['index.html']?.includes('schema.org') || false
    }

    const score = Object.values(checks).filter(Boolean).length * 20
    const issues = []

    if (!checks.hasTitle) issues.push('Missing or generic page title')
    if (!checks.hasMetaDescription) issues.push('No meta description')
    if (!checks.hasMetaKeywords) issues.push('No meta keywords')
    if (!checks.hasOpenGraph) issues.push('No Open Graph tags')
    if (!checks.hasStructuredData) issues.push('No structured data')

    return {
      score,
      checks,
      issues,
      recommendations: [
        !checks.hasTitle && 'Add descriptive page title',
        !checks.hasMetaDescription && 'Add meta description for SEO',
        !checks.hasMetaKeywords && 'Add relevant meta keywords',
        !checks.hasOpenGraph && 'Add Open Graph tags for social sharing',
        !checks.hasStructuredData && 'Add structured data markup'
      ].filter(Boolean)
    }
  }

  // Analyze security readiness
  analyzeSecurityReadiness(files) {
    const checks = {
      hasHTTPS: files['index.html']?.includes('https://') || false,
      hasInputValidation: files['script.js']?.includes('validate') || files['index.html']?.includes('required') || false,
      hasCSRFProtection: files['index.html']?.includes('csrf') || false,
      hasSecurityHeaders: files['index.html']?.includes('Content-Security-Policy') || false,
      hasSecureForms: !files['index.html']?.includes('<form') || files['index.html']?.includes('method="post"') || false
    }

    const score = Object.values(checks).filter(Boolean).length * 20
    const issues = []

    if (!checks.hasHTTPS) issues.push('Not using HTTPS')
    if (!checks.hasInputValidation) issues.push('No input validation')
    if (!checks.hasCSRFProtection) issues.push('No CSRF protection')
    if (!checks.hasSecurityHeaders) issues.push('No security headers')
    if (!checks.hasSecureForms) issues.push('Forms not secure')

    return {
      score,
      checks,
      issues,
      recommendations: [
        !checks.hasHTTPS && 'Use HTTPS for all connections',
        !checks.hasInputValidation && 'Add input validation',
        !checks.hasCSRFProtection && 'Implement CSRF protection',
        !checks.hasSecurityHeaders && 'Add security headers',
        !checks.hasSecureForms && 'Secure form submissions'
      ].filter(Boolean)
    }
  }

  // Analyze code quality readiness
  analyzeCodeQualityReadiness(files) {
    const checks = {
      hasComments: files['script.js']?.includes('//') || files['style.css']?.includes('/*') || false,
      hasConsistentFormatting: true, // Assume true for generated code
      hasErrorHandling: files['script.js']?.includes('try') || files['script.js']?.includes('catch') || false,
      hasModularCode: files['script.js']?.includes('function') || false,
      hasNoConsoleErrors: !files['script.js']?.includes('console.error') || false
    }

    const score = Object.values(checks).filter(Boolean).length * 20
    const issues = []

    if (!checks.hasComments) issues.push('Code lacks documentation')
    if (!checks.hasErrorHandling) issues.push('No error handling')
    if (!checks.hasModularCode) issues.push('Code not modular')
    if (!checks.hasNoConsoleErrors) issues.push('Has console errors')

    return {
      score,
      checks,
      issues,
      recommendations: [
        !checks.hasComments && 'Add code comments and documentation',
        !checks.hasErrorHandling && 'Implement comprehensive error handling',
        !checks.hasModularCode && 'Break code into functions',
        !checks.hasNoConsoleErrors && 'Remove console errors'
      ].filter(Boolean)
    }
  }

  // Identify critical issues
  identifyCriticalIssues(categories) {
    const criticalIssues = []
    
    Object.entries(categories).forEach(([category, analysis]) => {
      if (analysis.score < 40) {
        criticalIssues.push({
          category,
          score: analysis.score,
          issues: analysis.issues,
          priority: 'critical'
        })
      }
    })

    return criticalIssues
  }

  // Generate warnings
  generateWarnings(categories) {
    const warnings = []
    
    Object.entries(categories).forEach(([category, analysis]) => {
      if (analysis.score >= 40 && analysis.score < 70) {
        warnings.push({
          category,
          score: analysis.score,
          issues: analysis.issues,
          priority: 'warning'
        })
      }
    })

    return warnings
  }

  // Analyze deployment readiness
  analyzeDeploymentReadiness(files, analysis) {
    const deploymentReadiness = {
      firebase: false,
      github: false,
      vercel: false,
      netlify: false
    }

    // Firebase readiness
    if (files['index.html'] && files['style.css'] && analysis.overallScore >= 60) {
      deploymentReadiness.firebase = true
    }

    // GitHub Pages readiness
    if (files['index.html'] && analysis.overallScore >= 50) {
      deploymentReadiness.github = true
    }

    // Vercel readiness
    if (files['index.html'] && files['package.json'] && analysis.overallScore >= 70) {
      deploymentReadiness.vercel = true
    }

    // Netlify readiness
    if (files['index.html'] && analysis.overallScore >= 60) {
      deploymentReadiness.netlify = true
    }

    return deploymentReadiness
  }

  // Generate next steps
  generateNextSteps(analysis) {
    const nextSteps = []

    if (analysis.readinessLevel === 'not-ready') {
      nextSteps.push({
        priority: 'high',
        action: 'Fix Critical Issues',
        description: 'Address all critical issues before deployment',
        estimatedTime: '2-4 hours'
      })
    }

    if (analysis.readinessLevel === 'needs-improvement') {
      nextSteps.push({
        priority: 'medium',
        action: 'Improve Core Features',
        description: 'Enhance functionality and user experience',
        estimatedTime: '1-3 hours'
      })
    }

    if (analysis.readinessLevel === 'near-ready') {
      nextSteps.push({
        priority: 'low',
        action: 'Polish and Optimize',
        description: 'Fine-tune performance and add final touches',
        estimatedTime: '30 minutes - 1 hour'
      })
    }

    if (analysis.readinessLevel === 'production-ready') {
      nextSteps.push({
        priority: 'low',
        action: 'Deploy to Production',
        description: 'Your app is ready for live deployment!',
        estimatedTime: '10-30 minutes'
      })
    }

    return nextSteps
  }
}

// Export singleton instance
export default new RecommendationService()
