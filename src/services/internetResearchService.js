const SOURCE_CATALOG = {
  coding: [
    { name: 'MDN Web Docs', url: 'https://developer.mozilla.org/', use: 'HTML, CSS, JavaScript, browser APIs' },
    { name: 'React Docs', url: 'https://react.dev/', use: 'React patterns and component guidance' },
    { name: 'Node.js Docs', url: 'https://nodejs.org/docs/latest/api/', use: 'Node runtime and backend APIs' },
    { name: 'Firebase Docs', url: 'https://firebase.google.com/docs', use: 'Firebase auth, hosting, Firestore, functions' },
    { name: 'Vercel Docs', url: 'https://vercel.com/docs', use: 'Deployments, functions, AI apps, hosting' }
  ],
  images: [
    { name: 'Unsplash', url: 'https://unsplash.com/', use: 'Photographic references and free-to-use imagery' },
    { name: 'Pexels', url: 'https://www.pexels.com/', use: 'Stock photos and videos' },
    { name: 'Openverse', url: 'https://openverse.org/', use: 'Creative Commons images and audio' },
    { name: 'Wikimedia Commons', url: 'https://commons.wikimedia.org/', use: 'Open media with license metadata' }
  ],
  graphics: [
    { name: 'Heroicons', url: 'https://heroicons.com/', use: 'SVG interface icons' },
    { name: 'Lucide', url: 'https://lucide.dev/', use: 'Open-source icon set used by DreamBuild' },
    { name: 'unDraw', url: 'https://undraw.co/illustrations', use: 'Editable SVG illustrations' },
    { name: 'SVG Repo', url: 'https://www.svgrepo.com/', use: 'SVG graphics and icons with license checks' }
  ],
  templates: [
    { name: 'GitHub Topics', url: 'https://github.com/topics', use: 'Open-source starters and examples' },
    { name: 'Vercel Templates', url: 'https://vercel.com/templates', use: 'Deployable frontend and full-stack templates' },
    { name: 'Tailwind UI Examples', url: 'https://tailwindcss.com/plus/ui-blocks', use: 'Layout and component inspiration' },
    { name: 'shadcn/ui', url: 'https://ui.shadcn.com/', use: 'Copyable component patterns' }
  ]
}

class InternetResearchService {
  constructor() {
    this.browserSafeApis = ['GitHub public repository/template search when rate limits and CORS allow it']
    this.runnerEnvKeys = [
      'VITE_DREAMBUILD_RUNNER_URL',
      'VITE_DREAMBUILD_CLOUD_URL',
      'VITE_DREAMBUILD_SEARCH_API_URL'
    ]
  }

  getCapabilityStatus() {
    const connectedKey = this.runnerEnvKeys.find((key) => Boolean(import.meta.env?.[key]))
    const hasRunner = Boolean(connectedKey)

    return {
      canUseCuratedSources: true,
      canUseBrowserSafeApis: true,
      canUseLiveSearch: hasRunner,
      canCrawlArbitrarySites: hasRunner,
      connectedKey: connectedKey || null,
      liveSearchStatus: hasRunner ? 'Connected' : 'Needs DreamBuild Cloud Runner or Search API',
      crawlerStatus: hasRunner ? 'Server-side crawler connected' : 'Needs connected runner for arbitrary websites',
      connectorContract: {
        searchEndpoint: '/search',
        crawlEndpoint: '/crawl',
        requiredEnv: ['VITE_DREAMBUILD_SEARCH_API_URL', 'VITE_DREAMBUILD_RUNNER_URL', 'VITE_DREAMBUILD_CLOUD_URL'],
        providerKeys: ['BRAVE_SEARCH_API_KEY', 'SERPER_API_KEY', 'TAVILY_API_KEY']
      },
      browserSafeApis: this.browserSafeApis,
      categories: this.getResearchCategories()
    }
  }

  getResearchCategories() {
    return [
      {
        id: 'coding',
        title: 'Coding Sources',
        status: 'Supported',
        description: 'Use official docs and trusted engineering references to improve generated code.',
        sources: SOURCE_CATALOG.coding
      },
      {
        id: 'images',
        title: 'Image Building',
        status: 'Supported with license checks',
        description: 'Find image references, open media, and image-generation prompt direction without claiming ownership of third-party assets.',
        sources: SOURCE_CATALOG.images
      },
      {
        id: 'graphics',
        title: 'Graphics and Icons',
        status: 'Supported',
        description: 'Use SVG/icon/illustration libraries for polished interfaces and asset direction.',
        sources: SOURCE_CATALOG.graphics
      },
      {
        id: 'templates',
        title: 'Templates',
        status: 'Supported',
        description: 'Search starter projects, component examples, and deployable templates when the project needs a faster foundation.',
        sources: SOURCE_CATALOG.templates
      }
    ]
  }

  buildResearchPlan(prompt, context = {}) {
    const categories = this.detectCategories(prompt)
    const selectedCategories = categories.length > 0 ? categories : ['coding', 'templates']

    return {
      prompt,
      mode: this.getCapabilityStatus().canUseLiveSearch ? 'live-search' : 'curated-plus-browser-safe',
      queries: selectedCategories.flatMap((category) => this.buildQueriesForCategory(category, prompt, context)).slice(0, 8),
      categories: selectedCategories,
      sources: selectedCategories.flatMap((category) => SOURCE_CATALOG[category] || []),
      liveSearchContract: this.getCapabilityStatus().connectorContract,
      citationPolicy: 'Use source links in generated recommendations, cite live search/crawl URLs, and verify licenses before embedding third-party images or graphics.'
    }
  }

  async runLiveSearch(query, options = {}) {
    const status = this.getCapabilityStatus()
    const baseUrl = import.meta.env.VITE_DREAMBUILD_SEARCH_API_URL
      || import.meta.env.VITE_DREAMBUILD_RUNNER_URL
      || import.meta.env.VITE_DREAMBUILD_CLOUD_URL

    if (!baseUrl) {
      return {
        success: false,
        requiresConnector: true,
        reason: status.liveSearchStatus,
        message: 'Connect DreamBuild Search API or Cloud Runner to run full live web search/crawling.'
      }
    }

    const response = await fetch(`${baseUrl.replace(/\/$/, '')}/search`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query,
        maxResults: options.maxResults || 5,
        categories: options.categories || []
      })
    })

    if (!response.ok) {
      return {
        success: false,
        status: response.status,
        reason: `DreamBuild Search API returned ${response.status}`
      }
    }

    return response.json()
  }

  async crawlUrl(url, options = {}) {
    const status = this.getCapabilityStatus()
    const baseUrl = import.meta.env.VITE_DREAMBUILD_SEARCH_API_URL
      || import.meta.env.VITE_DREAMBUILD_RUNNER_URL
      || import.meta.env.VITE_DREAMBUILD_CLOUD_URL

    if (!baseUrl) {
      return {
        success: false,
        requiresConnector: true,
        reason: status.crawlerStatus,
        message: 'Connect DreamBuild Cloud Runner/Search API to crawl arbitrary websites safely from the server.'
      }
    }

    const response = await fetch(`${baseUrl.replace(/\/$/, '')}/crawl`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        url,
        maxChars: options.maxChars || 8000,
        analysisType: options.analysisType || 'general'
      })
    })

    if (!response.ok) {
      return {
        success: false,
        status: response.status,
        reason: `DreamBuild crawler returned ${response.status}`
      }
    }

    return response.json()
  }

  detectCategories(prompt) {
    const lowerPrompt = String(prompt || '').toLowerCase()
    const categories = []

    if (/(code|coding|api|react|firebase|backend|database|bug|error|component|function)/.test(lowerPrompt)) {
      categories.push('coding')
    }

    if (/(image|photo|picture|avatar|background|banner|hero)/.test(lowerPrompt)) {
      categories.push('images')
    }

    if (/(graphic|icon|illustration|svg|logo|visual|design asset)/.test(lowerPrompt)) {
      categories.push('graphics')
    }

    if (/(template|starter|boilerplate|example|clone|layout)/.test(lowerPrompt)) {
      categories.push('templates')
    }

    return [...new Set(categories)]
  }

  buildQueriesForCategory(category, prompt, context) {
    const appType = context.appType || 'web app'
    const cleanPrompt = String(prompt || appType).replace(/\s+/g, ' ').trim()

    const queryMap = {
      coding: [
        `${cleanPrompt} official docs best practices`,
        `${appType} implementation example accessibility security`
      ],
      images: [
        `${cleanPrompt} royalty free image references`,
        `${appType} hero image visual direction`
      ],
      graphics: [
        `${cleanPrompt} svg icons illustration assets`,
        `${appType} UI graphics icon set`
      ],
      templates: [
        `${cleanPrompt} open source starter template`,
        `${appType} deployable template GitHub`
      ]
    }

    return queryMap[category] || []
  }
}

export default new InternetResearchService()
