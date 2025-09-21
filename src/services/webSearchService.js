// DreamBuild Web Search Service
// Provides real-time web search capabilities for enhanced AI generation

class WebSearchService {
  constructor() {
    this.searchCache = new Map()
    this.searchHistory = []
    this.isEnabled = true
    this.maxCacheAge = 5 * 60 * 1000 // 5 minutes
  }

  // Search for information related to the user's prompt
  async searchForKnowledge(prompt, context = {}) {
    if (!this.isEnabled) {
      return { success: false, reason: 'Web search disabled' }
    }

    try {
      // Extract search keywords from prompt
      const searchQueries = this.extractSearchQueries(prompt, context)
      
      if (searchQueries.length === 0) {
        return { success: false, reason: 'No searchable keywords found' }
      }

      console.log('🔍 Searching web for knowledge:', searchQueries)

      // Search for each query
      const searchResults = []
      for (const query of searchQueries) {
        const result = await this.performSearch(query)
        if (result.success) {
          searchResults.push(result)
        }
      }

      // Combine and process results
      const knowledge = this.processSearchResults(searchResults, prompt, context)

      return {
        success: true,
        knowledge,
        searchQueries,
        resultsCount: searchResults.length
      }

    } catch (error) {
      console.error('❌ Web search failed:', error)
      return { 
        success: false, 
        reason: 'Search failed', 
        error: error.message 
      }
    }
  }

  // Extract relevant search queries from user prompt
  extractSearchQueries(prompt, context) {
    const queries = []
    const lowerPrompt = prompt.toLowerCase()

    // Technology-specific searches
    const techKeywords = {
      'react': ['react best practices 2024', 'react hooks tutorial', 'react performance optimization'],
      'vue': ['vue 3 best practices', 'vue composition api', 'vue performance tips'],
      'angular': ['angular best practices 2024', 'angular performance optimization', 'angular tutorial'],
      'node': ['nodejs best practices', 'express js tutorial', 'nodejs security'],
      'python': ['python web development', 'django best practices', 'flask tutorial'],
      'typescript': ['typescript best practices', 'typescript tutorial', 'typescript performance'],
      'tailwind': ['tailwind css best practices', 'tailwind responsive design', 'tailwind components'],
      'bootstrap': ['bootstrap 5 tutorial', 'bootstrap best practices', 'bootstrap responsive design'],
      'firebase': ['firebase best practices', 'firebase security rules', 'firebase hosting'],
      'mongodb': ['mongodb best practices', 'mongodb performance', 'mongodb security'],
      'mysql': ['mysql best practices', 'mysql performance optimization', 'mysql security'],
      'docker': ['docker best practices', 'docker security', 'docker performance'],
      'aws': ['aws best practices', 'aws security', 'aws cost optimization'],
      'pwa': ['pwa best practices', 'pwa performance', 'service worker tutorial'],
      'api': ['rest api best practices', 'api security', 'api design patterns'],
      'mobile': ['mobile app development', 'responsive design', 'mobile performance'],
      'ecommerce': ['ecommerce best practices', 'online store security', 'payment integration'],
      'healthcare': ['healthcare app development', 'hipaa compliance', 'healthcare security'],
      'fintech': ['fintech app development', 'financial security', 'payment processing'],
      'education': ['educational app development', 'learning management system', 'online education'],
      'gaming': ['game development', 'web games', 'game performance'],
      'social': ['social media app development', 'social features', 'user engagement'],
      'analytics': ['web analytics', 'user tracking', 'data visualization'],
      'seo': ['seo best practices', 'search optimization', 'meta tags'],
      'accessibility': ['web accessibility', 'wcag guidelines', 'screen reader support'],
      'security': ['web security', 'data protection', 'authentication'],
      'performance': ['web performance', 'optimization techniques', 'loading speed']
    }

    // Check for technology keywords in prompt
    Object.entries(techKeywords).forEach(([tech, searchTerms]) => {
      if (lowerPrompt.includes(tech)) {
        queries.push(...searchTerms.slice(0, 2)) // Take first 2 search terms
      }
    })

    // App type specific searches
    if (lowerPrompt.includes('todo') || lowerPrompt.includes('task')) {
      queries.push('todo app best practices', 'task management features', 'productivity app design')
    }
    if (lowerPrompt.includes('portfolio') || lowerPrompt.includes('resume')) {
      queries.push('portfolio website design', 'personal website best practices', 'portfolio features')
    }
    if (lowerPrompt.includes('blog')) {
      queries.push('blog design best practices', 'content management', 'blog features')
    }
    if (lowerPrompt.includes('dashboard')) {
      queries.push('dashboard design best practices', 'data visualization', 'admin interface')
    }
    if (lowerPrompt.includes('landing page')) {
      queries.push('landing page best practices', 'conversion optimization', 'landing page design')
    }

    // Industry specific searches
    if (lowerPrompt.includes('health') || lowerPrompt.includes('medical')) {
      queries.push('healthcare app development', 'medical software best practices', 'health data security')
    }
    if (lowerPrompt.includes('finance') || lowerPrompt.includes('banking')) {
      queries.push('fintech app development', 'financial app security', 'payment processing')
    }
    if (lowerPrompt.includes('education') || lowerPrompt.includes('learning')) {
      queries.push('educational app development', 'learning management system', 'online education')
    }

    // General web development best practices
    if (queries.length === 0) {
      queries.push('web development best practices 2024', 'modern web design', 'responsive design')
    }

    // Remove duplicates and limit to 3 queries
    return [...new Set(queries)].slice(0, 3)
  }

  // Perform actual web search (simulated for demo - would use real API in production)
  async performSearch(query) {
    // Check cache first
    const cacheKey = query.toLowerCase()
    const cached = this.searchCache.get(cacheKey)
    if (cached && Date.now() - cached.timestamp < this.maxCacheAge) {
      console.log('📋 Using cached search result for:', query)
      return cached.result
    }

    try {
      // Simulate web search with relevant knowledge
      const searchResult = await this.simulateWebSearch(query)
      
      // Cache the result
      this.searchCache.set(cacheKey, {
        result: searchResult,
        timestamp: Date.now()
      })

      // Add to search history
      this.searchHistory.unshift({
        query,
        timestamp: new Date(),
        resultCount: searchResult.results?.length || 0
      })

      // Keep only last 20 searches
      this.searchHistory = this.searchHistory.slice(0, 20)

      return searchResult

    } catch (error) {
      console.error('Search failed for query:', query, error)
      return {
        success: false,
        query,
        error: error.message
      }
    }
  }

  // Simulate web search with relevant knowledge (in production, this would use real search APIs)
  async simulateWebSearch(query) {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 1000))

    // Return relevant knowledge based on query
    const knowledgeBase = this.getKnowledgeBase()
    
    for (const [keyword, knowledge] of Object.entries(knowledgeBase)) {
      if (query.toLowerCase().includes(keyword)) {
        return {
          success: true,
          query,
          results: knowledge.results,
          summary: knowledge.summary,
          bestPractices: knowledge.bestPractices,
          codeExamples: knowledge.codeExamples,
          timestamp: new Date()
        }
      }
    }

    // Default general knowledge
    return {
      success: true,
      query,
      results: [{
        title: 'Modern Web Development Best Practices',
        snippet: 'Current best practices for web development include responsive design, performance optimization, accessibility, and security.',
        url: 'https://example.com/web-dev-best-practices'
      }],
      summary: 'General web development best practices and modern techniques.',
      bestPractices: [
        'Use semantic HTML for better accessibility',
        'Implement responsive design with CSS Grid and Flexbox',
        'Optimize images and assets for better performance',
        'Add proper error handling and validation',
        'Ensure cross-browser compatibility'
      ],
      codeExamples: {
        responsive: '@media (max-width: 768px) { .container { padding: 1rem; } }',
        semantic: '<main><section><article><header><h1>Title</h1></header></article></section></main>'
      },
      timestamp: new Date()
    }
  }

  // Knowledge base with current best practices
  getKnowledgeBase() {
    return {
      'react': {
        results: [
          {
            title: 'React Best Practices 2024',
            snippet: 'Use functional components with hooks, implement proper state management, and follow component composition patterns.',
            url: 'https://react.dev/learn'
          },
          {
            title: 'React Performance Optimization',
            snippet: 'Use React.memo, useMemo, useCallback, and code splitting for optimal performance.',
            url: 'https://react.dev/learn/render-and-commit'
          }
        ],
        summary: 'Modern React development with hooks, performance optimization, and best practices.',
        bestPractices: [
          'Use functional components with hooks instead of class components',
          'Implement proper state management with useState and useEffect',
          'Use React.memo for expensive components',
          'Implement code splitting with React.lazy',
          'Follow component composition patterns',
          'Use TypeScript for better type safety'
        ],
        codeExamples: {
          hooks: `const [count, setCount] = useState(0);
const memoizedValue = useMemo(() => expensiveCalculation(count), [count]);`,
          component: `const MyComponent = React.memo(({ data }) => {
  return <div>{data.name}</div>;
});`
        }
      },
      'vue': {
        results: [
          {
            title: 'Vue 3 Composition API Best Practices',
            snippet: 'Use the Composition API for better code organization and reusability.',
            url: 'https://vuejs.org/guide/composition-api/'
          }
        ],
        summary: 'Vue 3 development with Composition API and modern patterns.',
        bestPractices: [
          'Use Composition API for complex components',
          'Implement proper reactive state management',
          'Use computed properties for derived state',
          'Follow single-file component structure',
          'Implement proper error handling'
        ],
        codeExamples: {
          composition: `import { ref, computed } from 'vue';
const count = ref(0);
const doubleCount = computed(() => count.value * 2);`
        }
      },
      'tailwind': {
        results: [
          {
            title: 'Tailwind CSS Best Practices',
            snippet: 'Use utility-first approach, create component classes, and implement responsive design.',
            url: 'https://tailwindcss.com/docs'
          }
        ],
        summary: 'Tailwind CSS utility-first styling and responsive design.',
        bestPractices: [
          'Use utility classes for styling',
          'Create component classes for repeated patterns',
          'Implement responsive design with breakpoints',
          'Use CSS custom properties for theming',
          'Optimize for production with purging'
        ],
        codeExamples: {
          responsive: 'class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"',
          components: '@apply bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded;'
        }
      },
      'pwa': {
        results: [
          {
            title: 'Progressive Web App Best Practices',
            snippet: 'Implement service workers, manifest files, and offline functionality for app-like experience.',
            url: 'https://web.dev/pwa-checklist/'
          }
        ],
        summary: 'PWA development with service workers and offline capabilities.',
        bestPractices: [
          'Implement service worker for caching',
          'Create web app manifest file',
          'Add offline functionality',
          'Implement push notifications',
          'Ensure fast loading and performance'
        ],
        codeExamples: {
          manifest: `{
  "name": "My App",
  "short_name": "App",
  "start_url": "/",
  "display": "standalone"
}`,
          serviceWorker: `self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});`
        }
      },
      'accessibility': {
        results: [
          {
            title: 'Web Accessibility Guidelines (WCAG)',
            snippet: 'Follow WCAG 2.1 guidelines for inclusive design and screen reader support.',
            url: 'https://www.w3.org/WAI/WCAG21/quickref/'
          }
        ],
        summary: 'Web accessibility best practices and WCAG compliance.',
        bestPractices: [
          'Use semantic HTML elements',
          'Provide alt text for images',
          'Implement proper heading hierarchy',
          'Ensure keyboard navigation',
          'Use ARIA labels for complex interactions',
          'Maintain sufficient color contrast'
        ],
        codeExamples: {
          semantic: '<button aria-label="Close dialog" onclick="closeModal()">×</button>',
          images: '<img src="chart.png" alt="Sales chart showing 25% increase in Q3">'
        }
      },
      'performance': {
        results: [
          {
            title: 'Web Performance Optimization',
            snippet: 'Optimize images, minimize resources, and implement lazy loading for better performance.',
            url: 'https://web.dev/performance/'
          }
        ],
        summary: 'Web performance optimization techniques and best practices.',
        bestPractices: [
          'Optimize images with modern formats (WebP, AVIF)',
          'Implement lazy loading for images and components',
          'Minify CSS and JavaScript',
          'Use CDN for static assets',
          'Implement caching strategies',
          'Monitor Core Web Vitals'
        ],
        codeExamples: {
          lazy: '<img src="image.jpg" loading="lazy" alt="Description">',
          preload: '<link rel="preload" href="critical.css" as="style">'
        }
      },
      'security': {
        results: [
          {
            title: 'Web Application Security',
            snippet: 'Implement proper authentication, input validation, and security headers.',
            url: 'https://owasp.org/www-project-top-ten/'
          }
        ],
        summary: 'Web security best practices and protection measures.',
        bestPractices: [
          'Implement HTTPS everywhere',
          'Validate and sanitize all inputs',
          'Use secure authentication methods',
          'Implement CSRF protection',
          'Set proper security headers',
          'Regular security audits'
        ],
        codeExamples: {
          validation: `function validateInput(input) {
  return input.replace(/<script[^>]*>.*?<\/script>/gi, '');
}`,
          headers: 'Content-Security-Policy: default-src \'self\'; script-src \'self\' \'unsafe-inline\';'
        }
      }
    }
  }

  // Process and combine search results
  processSearchResults(searchResults, prompt, context) {
    const combinedKnowledge = {
      summary: '',
      bestPractices: [],
      codeExamples: {},
      resources: [],
      recommendations: []
    }

    searchResults.forEach(result => {
      if (result.success) {
        // Combine summaries
        if (result.summary) {
          combinedKnowledge.summary += result.summary + ' '
        }

        // Combine best practices (remove duplicates)
        if (result.bestPractices) {
          combinedKnowledge.bestPractices.push(...result.bestPractices)
        }

        // Combine code examples
        if (result.codeExamples) {
          Object.assign(combinedKnowledge.codeExamples, result.codeExamples)
        }

        // Add resources
        if (result.results) {
          combinedKnowledge.resources.push(...result.results)
        }
      }
    })

    // Remove duplicate best practices
    combinedKnowledge.bestPractices = [...new Set(combinedKnowledge.bestPractices)]

    // Generate recommendations based on context
    combinedKnowledge.recommendations = this.generateRecommendations(combinedKnowledge, prompt, context)

    return combinedKnowledge
  }

  // Generate specific recommendations based on knowledge and context
  generateRecommendations(knowledge, prompt, context) {
    const recommendations = []

    // Technology-specific recommendations
    if (prompt.toLowerCase().includes('react')) {
      recommendations.push('Consider using React 18 with concurrent features')
      recommendations.push('Implement proper error boundaries for better error handling')
      recommendations.push('Use React Query or SWR for data fetching')
    }

    if (prompt.toLowerCase().includes('responsive')) {
      recommendations.push('Use CSS Grid and Flexbox for modern layouts')
      recommendations.push('Implement mobile-first design approach')
      recommendations.push('Test on multiple devices and screen sizes')
    }

    if (prompt.toLowerCase().includes('performance')) {
      recommendations.push('Implement lazy loading for images and components')
      recommendations.push('Use code splitting to reduce initial bundle size')
      recommendations.push('Optimize images with modern formats like WebP')
    }

    // General recommendations
    recommendations.push('Implement proper error handling and user feedback')
    recommendations.push('Add accessibility features for inclusive design')
    recommendations.push('Use semantic HTML for better SEO and accessibility')

    return recommendations
  }

  // Get search history
  getSearchHistory() {
    return this.searchHistory
  }

  // Clear search cache
  clearCache() {
    this.searchCache.clear()
    console.log('🗑️ Search cache cleared')
  }

  // Enable/disable web search
  setEnabled(enabled) {
    this.isEnabled = enabled
    console.log(`🔍 Web search ${enabled ? 'enabled' : 'disabled'}`)
  }

  // Check if search is enabled
  isSearchEnabled() {
    return this.isEnabled
  }

  // Get cache statistics
  getCacheStats() {
    return {
      cacheSize: this.searchCache.size,
      historySize: this.searchHistory.length,
      isEnabled: this.isEnabled
    }
  }
}

// Export singleton instance
export default new WebSearchService()
