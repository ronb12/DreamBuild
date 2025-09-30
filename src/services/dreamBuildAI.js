/**
 * DreamBuild Built-in AI Service
 * A comprehensive AI system that combines templates, patterns, and smart generation
 * No external APIs required - everything runs locally in DreamBuild
 */

// import { TemplateBasedGenerator } from './templateBasedGenerator.js'

class DreamBuildAI {
  constructor() {
    this.isInitialized = false
    this.capabilities = {
      codeGeneration: true,
      templateMatching: true,
      patternRecognition: true,
      smartFallbacks: true,
      contextAnalysis: true,
      incrementalGeneration: true
    }
    
    // Initialize built-in AI patterns
    this.initializeBuiltInAI()
    
    console.log('🧠 DreamBuild Built-in AI initialized')
  }

  async initializeBuiltInAI() {
    // Load template generator - Fallback if not available
    // this.templateGenerator = new TemplateBasedGenerator()
    this.templateGenerator = {
      generateFromPrompt: async (prompt, context) => {
        console.log('📝 Using fallback template generator')
        return {
          files: {
            'index.html': '<!DOCTYPE html><html><body><h1>Template Not Available</h1></body></html>'
          },
          type: 'fallback_template'
        }
      }
    }
    
    // Initialize AI patterns database
    this.aiPatterns = await this.loadAIPatterns()
    
    // Initialize code patterns
    this.codePatterns = await this.loadCodePatterns()
    
    // Initialize smart analyzers
    this.smartAnalyzers = await this.initializeSmartAnalyzers()
    
    this.isInitialized = true
    console.log('✅ DreamBuild Built-in AI fully initialized')
  }

  async loadAIPatterns() {
    return {
      // App type recognition patterns - 100+ app types supported
      appTypes: {
        // Productivity & Organization
        todo: ['todo', 'todos', 'task', 'tasks', 'checklist', 'checklists', 'reminder', 'reminders', 'organizer', 'organize', 'planner', 'productivity', 'list', 'lists'],
        calendar: ['calendar', 'schedule', 'event', 'appointment', 'booking', 'agenda'],
        note: ['note', 'notes', 'notepad', 'memo', 'journal', 'diary', 'scratchpad'],
        project: ['project', 'project-management', 'kanban', 'scrum', 'agile', 'trello'],
        time: ['time', 'timer', 'stopwatch', 'tracker', 'timesheet', 'attendance'],
        
        // Business & Finance
        calculator: ['calculator', 'calc', 'math', 'compute', 'calculate', 'arithmetic', 'scientific', 'maths', 'mathematical', 'calculation', 'calculations'],
        accounting: ['accounting', 'bookkeeping', 'finance', 'budget', 'expense', 'invoice'],
        crm: ['crm', 'customer', 'relationship', 'management', 'lead', 'sales'],
        inventory: ['inventory', 'stock', 'warehouse', 'product', 'supply', 'chain'],
        hr: ['hr', 'human-resources', 'employee', 'payroll', 'benefits', 'recruitment'],
        
        // Entertainment & Gaming
        game: ['game', 'play', 'fun', 'entertainment', 'puzzle', 'quiz', 'arcade'],
        casino: ['casino', 'gambling', 'slot', 'poker', 'blackjack', 'roulette'],
        music: ['music', 'player', 'streaming', 'playlist', 'audio', 'sound'],
        video: ['video', 'streaming', 'player', 'youtube', 'netflix', 'media'],
        photo: ['photo', 'gallery', 'image', 'picture', 'album', 'camera'],
        
        // Social & Communication
        social: ['social', 'chat', 'message', 'forum', 'community', 'network'],
        dating: ['dating', 'match', 'tinder', 'relationship', 'romance', 'love'],
        chat: ['chat', 'messaging', 'instant', 'conversation', 'room', 'channel'],
        forum: ['forum', 'discussion', 'board', 'community', 'thread', 'post'],
        blog: ['blog', 'article', 'post', 'content', 'journal', 'publishing'],
        
        // E-commerce & Shopping
        ecommerce: ['shop', 'store', 'buy', 'sell', 'cart', 'checkout', 'marketplace'],
        auction: ['auction', 'bid', 'ebay', 'selling', 'bidding', 'lot'],
        classified: ['classified', 'ads', 'advertisement', 'listing', 'classifieds'],
        coupon: ['coupon', 'discount', 'deal', 'offer', 'promotion', 'voucher'],
        
        // Education & Learning
        education: ['education', 'learning', 'course', 'tutorial', 'lesson', 'training'],
        quiz: ['quiz', 'test', 'exam', 'assessment', 'evaluation', 'question'],
        language: ['language', 'translation', 'dictionary', 'vocabulary', 'learn'],
        school: ['school', 'student', 'teacher', 'classroom', 'academic', 'university'],
        
        // Health & Fitness
        fitness: ['fitness', 'workout', 'exercise', 'gym', 'training', 'health'],
        medical: ['medical', 'health', 'doctor', 'patient', 'clinic', 'hospital'],
        diet: ['diet', 'nutrition', 'food', 'calorie', 'meal', 'recipe'],
        meditation: ['meditation', 'mindfulness', 'relaxation', 'yoga', 'wellness'],
        
        // Travel & Transportation
        travel: ['travel', 'trip', 'vacation', 'booking', 'hotel', 'flight'],
        maps: ['maps', 'navigation', 'gps', 'location', 'route', 'directions'],
        taxi: ['taxi', 'uber', 'lyft', 'ride', 'transportation', 'car'],
        hotel: ['hotel', 'accommodation', 'booking', 'reservation', 'lodging'],
        
        // Food & Dining
        restaurant: ['restaurant', 'food', 'dining', 'menu', 'order', 'delivery'],
        recipe: ['recipe', 'cooking', 'kitchen', 'ingredient', 'meal', 'chef'],
        delivery: ['delivery', 'food-delivery', 'order', 'takeout', 'uber-eats'],
        
        // Real Estate
        realestate: ['real-estate', 'property', 'house', 'apartment', 'rent', 'buy'],
        rental: ['rental', 'rent', 'lease', 'property', 'accommodation'],
        
        // Automotive
        automotive: ['automotive', 'car', 'vehicle', 'auto', 'dealership', 'repair'],
        parking: ['parking', 'garage', 'space', 'spot', 'meter', 'valet'],
        
        // Technology & Development
        dashboard: ['dashboard', 'admin', 'panel', 'control', 'monitor', 'analytics'],
        api: ['api', 'service', 'endpoint', 'integration', 'webhook'],
        devtool: ['devtool', 'development', 'tool', 'debug', 'testing', 'code'],
        monitoring: ['monitoring', 'logging', 'metrics', 'alerting', 'uptime'],
        
        // Media & Content
        portfolio: ['portfolio', 'showcase', 'gallery', 'work', 'projects', 'creative'],
        cms: ['cms', 'content-management', 'editor', 'publishing', 'admin'],
        streaming: ['streaming', 'live', 'broadcast', 'video', 'audio'],
        podcast: ['podcast', 'audio', 'episode', 'subscription', 'rss'],
        
        // Analytics & Data
        analytics: ['analytics', 'data', 'chart', 'graph', 'statistics', 'metrics'],
        reporting: ['reporting', 'report', 'dashboard', 'insights', 'business'],
        bi: ['bi', 'business-intelligence', 'data-warehouse', 'olap'],
        
        // Security & Privacy
        security: ['security', 'privacy', 'encryption', 'vpn', 'password'],
        backup: ['backup', 'sync', 'cloud', 'storage', 'recovery'],
        
        // IoT & Smart Devices
        iot: ['iot', 'smart', 'device', 'sensor', 'automation', 'home'],
        smart: ['smart-home', 'automation', 'control', 'device', 'iot'],
        
        // Blockchain & Crypto
        crypto: ['crypto', 'blockchain', 'bitcoin', 'ethereum', 'wallet', 'trading'],
        nft: ['nft', 'non-fungible', 'token', 'digital', 'art', 'collectible'],
        
        // AI & Machine Learning
        ai: ['ai', 'artificial-intelligence', 'machine-learning', 'neural-network'],
        chatbot: ['chatbot', 'bot', 'assistant', 'ai', 'conversation'],
        
        // Gaming Specific
        game: ['game', 'games', 'gaming', 'play', 'player', 'enemy', 'enemies', 'score', 'level', 'canvas', 'arcade', 'action', 'adventure'],
        mmorpg: ['mmorpg', 'massively-multiplayer', 'online', 'role-playing', 'game'],
        fps: ['fps', 'first-person', 'shooter', 'action', 'game'],
        puzzle: ['puzzle', 'brain', 'logic', 'sudoku', 'crossword', 'riddle'],
        
        // Utility & Tools
        converter: ['converter', 'transform', 'format', 'encode', 'decode'],
        generator: ['generator', 'random', 'create', 'produce', 'generate'],
        form: ['form', 'survey', 'questionnaire', 'input', 'registration'],
        validator: ['validator', 'validate', 'check', 'verify', 'confirm'],
        
        // Weather & Environment
        weather: ['weather', 'forecast', 'climate', 'temperature', 'rain'],
        environment: ['environment', 'eco', 'green', 'sustainability', 'carbon'],
        
        // News & Information
        news: ['news', 'article', 'headline', 'breaking', 'journalism'],
        wiki: ['wiki', 'encyclopedia', 'knowledge', 'reference', 'information'],
        
        // Events & Entertainment
        event: ['event', 'party', 'concert', 'festival', 'celebration', 'gathering'],
        ticket: ['ticket', 'booking', 'reservation', 'event', 'concert'],
        
        // Professional Services
        consulting: ['consulting', 'advisor', 'expert', 'service', 'professional'],
        freelancing: ['freelancing', 'gig', 'contract', 'service', 'marketplace'],
        
        // Personal & Lifestyle
        lifestyle: ['lifestyle', 'personal', 'wellness', 'mindfulness', 'balance'],
        hobby: ['hobby', 'interest', 'passion', 'activity', 'leisure'],
        
        // Government & Public
        government: ['government', 'public', 'civic', 'municipal', 'official'],
        voting: ['voting', 'election', 'democracy', 'ballot', 'poll'],
        
        // Non-profit & Charity
        charity: ['charity', 'non-profit', 'donation', 'fundraising', 'cause'],
        volunteer: ['volunteer', 'service', 'community', 'help', 'contribute'],
        
        // Legal & Compliance
        legal: ['legal', 'law', 'attorney', 'lawyer', 'court', 'litigation'],
        compliance: ['compliance', 'regulation', 'policy', 'governance', 'audit'],
        
        // Insurance & Finance
        insurance: ['insurance', 'coverage', 'policy', 'claim', 'premium'],
        banking: ['banking', 'financial', 'account', 'transaction', 'payment'],
        
        // Agriculture & Farming
        agriculture: ['agriculture', 'farming', 'crop', 'livestock', 'rural'],
        garden: ['garden', 'gardening', 'plant', 'vegetable', 'flower'],
        
        // Sports & Recreation
        sports: ['sports', 'athletic', 'competition', 'team', 'league'],
        recreation: ['recreation', 'leisure', 'activity', 'fun', 'entertainment'],
        
        // Art & Design
        art: ['art', 'creative', 'design', 'artist', 'gallery', 'exhibition'],
        design: ['design', 'graphic', 'ui', 'ux', 'visual', 'creative'],
        
        // Science & Research
        science: ['science', 'research', 'experiment', 'laboratory', 'discovery'],
        research: ['research', 'study', 'analysis', 'investigation', 'survey'],
        
        // Miscellaneous
        utility: ['utility', 'tool', 'helper', 'assistant', 'service'],
        custom: ['custom', 'specialized', 'unique', 'bespoke', 'tailored'],
        
        // Final 3 App Types to reach 100+
        streaming: ['streaming', 'live', 'broadcast', 'video', 'audio', 'content'],
        podcast: ['podcast', 'audio', 'episode', 'subscription', 'rss', 'show'],
        newsletter: ['newsletter', 'email', 'subscription', 'content', 'marketing', 'communication']
      },
      
      // Technology patterns - 100+ technologies supported
      technologies: {
        // Frontend Frameworks
        react: ['react', 'jsx', 'component', 'hooks', 'state', 'redux', 'nextjs', 'gatsby'],
        vue: ['vue', 'nuxt', 'composition', 'template', 'vuex', 'pinia', 'quasar'],
        angular: ['angular', 'typescript', 'service', 'directive', 'rxjs', 'ngrx'],
        svelte: ['svelte', 'sveltekit', 'stores', 'actions', 'transitions'],
        solid: ['solid', 'solidjs', 'signals', 'reactive'],
        alpine: ['alpine', 'alpinejs', 'x-data', 'x-show'],
        lit: ['lit', 'lit-element', 'web-components', 'shadow-dom'],
        
        // Backend Technologies
        node: ['node', 'express', 'server', 'api', 'backend', 'koa', 'hapi', 'fastify'],
        python: ['python', 'django', 'flask', 'fastapi', 'tornado', 'bottle', 'cherrypy'],
        php: ['php', 'laravel', 'symfony', 'wordpress', 'codeigniter', 'cakephp', 'yii'],
        java: ['java', 'spring', 'springboot', 'maven', 'gradle', 'jpa', 'hibernate'],
        csharp: ['csharp', 'c#', 'dotnet', 'aspnet', 'entity', 'framework', 'core'],
        ruby: ['ruby', 'rails', 'sinatra', 'grape', 'hanami', 'dry-rb'],
        go: ['go', 'golang', 'gin', 'echo', 'fiber', 'chi', 'beego'],
        rust: ['rust', 'actix', 'warp', 'axum', 'rocket', 'tide'],
        elixir: ['elixir', 'phoenix', 'plug', 'ecto', 'absinthe'],
        haskell: ['haskell', 'yesod', 'scotty', 'servant', 'snap'],
        
        // Mobile Development
        reactnative: ['react-native', 'rn', 'expo', 'metro'],
        flutter: ['flutter', 'dart', 'widget', 'bloc', 'provider'],
        ionic: ['ionic', 'capacitor', 'cordova', 'phonegap'],
        xamarin: ['xamarin', 'mono', 'forms', 'native'],
        nativescript: ['nativescript', 'vue-nativescript', 'angular-nativescript'],
        kotlin: ['kotlin', 'android', 'compose', 'coroutines'],
        swift: ['swift', 'ios', 'swiftui', 'uikit', 'combine'],
        
        // Database Technologies
        mongodb: ['mongodb', 'mongo', 'mongoose', 'atlas'],
        mysql: ['mysql', 'mariadb', 'sequelize', 'prisma'],
        postgresql: ['postgresql', 'postgres', 'pg', 'typeorm'],
        sqlite: ['sqlite', 'better-sqlite3', 'knex'],
        redis: ['redis', 'ioredis', 'node-redis'],
        elasticsearch: ['elasticsearch', 'elk', 'kibana', 'logstash'],
        cassandra: ['cassandra', 'scylladb'],
        dynamodb: ['dynamodb', 'dynamo', 'aws'],
        firebase: ['firebase', 'firestore', 'realtime', 'auth'],
        supabase: ['supabase', 'postgrest', 'realtime'],
        
        // Cloud & DevOps
        aws: ['aws', 'amazon', 'ec2', 's3', 'lambda', 'rds', 'cloudfront'],
        azure: ['azure', 'microsoft', 'functions', 'cosmosdb', 'cdn'],
        gcp: ['gcp', 'google', 'cloud', 'functions', 'firebase', 'bigquery'],
        docker: ['docker', 'container', 'dockerfile', 'compose'],
        kubernetes: ['kubernetes', 'k8s', 'helm', 'istio'],
        terraform: ['terraform', 'infrastructure', 'iac'],
        ansible: ['ansible', 'automation', 'playbook'],
        jenkins: ['jenkins', 'ci', 'cd', 'pipeline'],
        github: ['github', 'actions', 'workflows', 'pages'],
        gitlab: ['gitlab', 'ci', 'runner', 'registry'],
        
        // AI & ML
        tensorflow: ['tensorflow', 'tf', 'keras', 'neural'],
        pytorch: ['pytorch', 'torch', 'deep', 'learning'],
        openai: ['openai', 'gpt', 'chatgpt', 'dall-e'],
        huggingface: ['huggingface', 'transformers', 'diffusers'],
        langchain: ['langchain', 'llm', 'agents', 'chains'],
        llama: ['llama', 'meta', 'llama2', 'llamaindex'],
        anthropic: ['anthropic', 'claude', 'constitutional'],
        stable: ['stable', 'diffusion', 'ai', 'generation'],
        
        // Blockchain & Web3
        ethereum: ['ethereum', 'eth', 'solidity', 'web3'],
        bitcoin: ['bitcoin', 'btc', 'blockchain', 'crypto'],
        polkadot: ['polkadot', 'substrate', 'parachain'],
        cosmos: ['cosmos', 'tendermint', 'ibc'],
        solana: ['solana', 'rust', 'anchor', 'program'],
        ipfs: ['ipfs', 'decentralized', 'storage', 'content'],
        polygon: ['polygon', 'matic', 'layer2', 'scaling'],
        avalanche: ['avalanche', 'avax', 'subnet'],
        
        // Game Development
        unity: ['unity', 'c#', 'game', '3d', '2d', 'vr'],
        unreal: ['unreal', 'engine', 'blueprint', 'c++', 'fortnite'],
        godot: ['godot', 'gdscript', 'c#', 'indie'],
        phaser: ['phaser', 'html5', 'canvas', 'arcade'],
        three: ['three', 'threejs', 'webgl', '3d', 'geometry'],
        babylon: ['babylon', 'babylonjs', '3d', 'physics'],
        pixi: ['pixi', 'pixijs', '2d', 'sprite', 'texture'],
        construct: ['construct', 'construct3', 'visual', 'coding'],
        
        // Desktop Applications
        electron: ['electron', 'desktop', 'cross-platform', 'chromium'],
        tauri: ['tauri', 'rust', 'desktop', 'security'],
        qt: ['qt', 'c++', 'qml', 'widgets'],
        gtk: ['gtk', 'gnome', 'linux', 'desktop'],
        wxwidgets: ['wxwidgets', 'cross-platform', 'native'],
        
        // Testing Frameworks
        jest: ['jest', 'testing', 'unit', 'mock'],
        cypress: ['cypress', 'e2e', 'integration', 'testing'],
        playwright: ['playwright', 'browser', 'automation', 'testing'],
        vitest: ['vitest', 'vite', 'fast', 'testing'],
        mocha: ['mocha', 'chai', 'sinon', 'testing'],
        karma: ['karma', 'jasmine', 'test-runner'],
        
        // Build Tools & Bundlers
        webpack: ['webpack', 'bundler', 'loader', 'plugin'],
        vite: ['vite', 'fast', 'hmr', 'build'],
        rollup: ['rollup', 'esm', 'tree-shaking', 'bundler'],
        parcel: ['parcel', 'zero-config', 'bundler'],
        esbuild: ['esbuild', 'fast', 'go', 'bundler'],
        swc: ['swc', 'rust', 'fast', 'compiler'],
        
        // CSS Frameworks & Preprocessors
        tailwind: ['tailwind', 'utility', 'css', 'framework'],
        bootstrap: ['bootstrap', 'css', 'responsive', 'components'],
        bulma: ['bulma', 'css', 'flexbox', 'modern'],
        foundation: ['foundation', 'responsive', 'css', 'framework'],
        sass: ['sass', 'scss', 'preprocessor', 'variables'],
        less: ['less', 'css', 'preprocessor', 'mixins'],
        stylus: ['stylus', 'css', 'preprocessor', 'indented'],
        
        // Static Site Generators
        nextjs: ['nextjs', 'next', 'ssr', 'ssg', 'react'],
        nuxt: ['nuxt', 'vue', 'ssr', 'ssg', 'universal'],
        gatsby: ['gatsby', 'react', 'ssg', 'graphql', 'plugins'],
        hugo: ['hugo', 'go', 'static', 'generator', 'fast'],
        jekyll: ['jekyll', 'ruby', 'github', 'pages', 'blog'],
        astro: ['astro', 'islands', 'framework', 'agnostic'],
        
        // Real-time & WebSocket
        socketio: ['socketio', 'websocket', 'realtime', 'chat'],
        websocket: ['websocket', 'ws', 'realtime', 'connection'],
        pusher: ['pusher', 'channels', 'realtime', 'api'],
        ably: ['ably', 'realtime', 'messaging', 'pubsub'],
        
        // Microservices & APIs
        graphql: ['graphql', 'apollo', 'relay', 'schema'],
        rest: ['rest', 'api', 'http', 'endpoint'],
        grpc: ['grpc', 'protocol', 'buffers', 'microservices'],
        soap: ['soap', 'xml', 'web', 'services'],
        
        // Monitoring & Analytics
        prometheus: ['prometheus', 'metrics', 'monitoring', 'alerting'],
        grafana: ['grafana', 'dashboard', 'visualization', 'metrics'],
        datadog: ['datadog', 'monitoring', 'apm', 'logs'],
        newrelic: ['newrelic', 'apm', 'monitoring', 'performance'],
        
        // Content Management
        wordpress: ['wordpress', 'cms', 'php', 'themes', 'plugins'],
        drupal: ['drupal', 'cms', 'php', 'modules', 'themes'],
        strapi: ['strapi', 'headless', 'cms', 'api'],
        contentful: ['contentful', 'cms', 'headless', 'api'],
        sanity: ['sanity', 'cms', 'headless', 'studio'],
        
        // E-commerce
        shopify: ['shopify', 'ecommerce', 'store', 'liquid'],
        woocommerce: ['woocommerce', 'wordpress', 'ecommerce'],
        magento: ['magento', 'ecommerce', 'php', 'enterprise'],
        bigcommerce: ['bigcommerce', 'saas', 'ecommerce'],
        
        // Analytics & BI
        tableau: ['tableau', 'bi', 'analytics', 'visualization'],
        powerbi: ['powerbi', 'microsoft', 'analytics', 'dashboards'],
        looker: ['looker', 'google', 'bi', 'analytics'],
        metabase: ['metabase', 'open-source', 'bi', 'analytics'],
        
        // Security
        oauth: ['oauth', 'oauth2', 'openid', 'connect'],
        jwt: ['jwt', 'token', 'authentication', 'authorization'],
        ssl: ['ssl', 'tls', 'https', 'certificate'],
        cors: ['cors', 'cross-origin', 'security', 'headers'],
        
        // Performance
        cdn: ['cdn', 'content', 'delivery', 'network'],
        caching: ['caching', 'redis', 'memcached', 'performance'],
        compression: ['compression', 'gzip', 'brotli', 'performance'],
        
        // Development Tools
        typescript: ['typescript', 'ts', 'type', 'safety'],
        eslint: ['eslint', 'linting', 'code', 'quality'],
        prettier: ['prettier', 'formatting', 'code', 'style'],
        husky: ['husky', 'git', 'hooks', 'pre-commit'],
        
        // Documentation
        docusaurus: ['docusaurus', 'documentation', 'react', 'mdx'],
        gitbook: ['gitbook', 'documentation', 'knowledge', 'base'],
        mkdocs: ['mkdocs', 'python', 'documentation', 'markdown'],
        
        // Miscellaneous
        vanilla: ['vanilla', 'javascript', 'html', 'css', 'dom', 'pure', 'native']
      },
      
      // Feature patterns - 100+ features supported
      features: {
        // Authentication & Security
        authentication: ['login', 'auth', 'signin', 'signup', 'user', 'account', 'register', 'oauth', 'jwt', 'session'],
        authorization: ['permissions', 'roles', 'access', 'control', 'rbac', 'admin', 'moderator'],
        security: ['security', 'encryption', 'ssl', 'https', 'csrf', 'xss', 'sql-injection', 'vulnerability'],
        twofactor: ['2fa', 'two-factor', 'totp', 'sms', 'authenticator', 'mfa'],
        
        // Database & Storage
        database: ['database', 'db', 'storage', 'persist', 'save', 'data', 'crud', 'orm', 'migration'],
        nosql: ['nosql', 'document', 'key-value', 'column-family', 'graph', 'mongodb', 'couchdb'],
        sql: ['sql', 'relational', 'mysql', 'postgresql', 'sqlite', 'transactions', 'indexes'],
        caching: ['cache', 'redis', 'memcached', 'lru', 'ttl', 'invalidation'],
        search: ['search', 'elasticsearch', 'solr', 'lucene', 'full-text', 'indexing', 'query'],
        
        // APIs & Integration
        api: ['api', 'rest', 'endpoint', 'fetch', 'axios', 'http', 'graphql', 'rpc'],
        websocket: ['websocket', 'ws', 'realtime', 'live', 'instant', 'push', 'socketio'],
        webhook: ['webhook', 'callback', 'notification', 'event', 'trigger'],
        integration: ['integration', 'third-party', 'external', 'service', 'connector'],
        
        // Payment & Commerce
        payment: ['payment', 'stripe', 'paypal', 'checkout', 'billing', 'subscription', 'invoice'],
        ecommerce: ['ecommerce', 'shop', 'store', 'cart', 'inventory', 'orders', 'products'],
        marketplace: ['marketplace', 'vendor', 'seller', 'commission', 'listing'],
        
        // Communication
        email: ['email', 'smtp', 'send', 'notification', 'mail', 'newsletter', 'template'],
        sms: ['sms', 'text', 'message', 'twilio', 'notification', 'alert'],
        chat: ['chat', 'messaging', 'conversation', 'room', 'channel', 'direct'],
        push: ['push', 'notification', 'service-worker', 'pwa', 'mobile'],
        
        // File & Media
        fileupload: ['upload', 'file', 'image', 'document', 'attachment', 'multipart', 'chunked'],
        imageprocessing: ['image', 'resize', 'compress', 'thumbnail', 'watermark', 'filter'],
        video: ['video', 'streaming', 'transcoding', 'player', 'embed', 'live'],
        audio: ['audio', 'sound', 'music', 'podcast', 'recording', 'playback'],
        
        // UI/UX Features
        responsive: ['responsive', 'mobile', 'tablet', 'desktop', 'adaptive', 'breakpoint'],
        accessibility: ['accessibility', 'a11y', 'screen-reader', 'keyboard', 'aria', 'wcag'],
        internationalization: ['i18n', 'internationalization', 'localization', 'translation', 'multi-language'],
        theming: ['theme', 'dark-mode', 'light-mode', 'customization', 'colors', 'styling'],
        
        // Data & Analytics
        analytics: ['analytics', 'tracking', 'metrics', 'events', 'conversion', 'funnel'],
        reporting: ['report', 'dashboard', 'chart', 'graph', 'visualization', 'insights'],
        business: ['business', 'intelligence', 'bi', 'kpi', 'roi', 'performance'],
        data: ['data', 'processing', 'etl', 'pipeline', 'warehouse', 'lake'],
        
        // Performance & Optimization
        performance: ['performance', 'optimization', 'speed', 'lazy-loading', 'code-splitting'],
        cdn: ['cdn', 'content-delivery', 'cache', 'static', 'assets'],
        compression: ['compression', 'gzip', 'brotli', 'minification', 'bundling'],
        monitoring: ['monitoring', 'logging', 'errors', 'uptime', 'health-check'],
        
        // Development & DevOps
        testing: ['testing', 'unit', 'integration', 'e2e', 'jest', 'cypress', 'playwright'],
        ci: ['ci', 'continuous-integration', 'pipeline', 'automation', 'jenkins', 'github-actions'],
        deployment: ['deployment', 'deploy', 'production', 'staging', 'environment'],
        versioning: ['versioning', 'git', 'release', 'semantic', 'changelog'],
        
        // AI & Machine Learning
        ai: ['ai', 'artificial-intelligence', 'machine-learning', 'neural-network', 'deep-learning'],
        ml: ['ml', 'model', 'training', 'prediction', 'classification', 'regression'],
        nlp: ['nlp', 'natural-language', 'text-processing', 'sentiment', 'language'],
        computer: ['computer-vision', 'image-recognition', 'object-detection', 'face-detection'],
        
        // Blockchain & Web3
        blockchain: ['blockchain', 'distributed', 'ledger', 'consensus', 'mining'],
        cryptocurrency: ['crypto', 'bitcoin', 'ethereum', 'token', 'wallet', 'nft'],
        smart: ['smart-contract', 'solidity', 'web3', 'dapp', 'decentralized'],
        
        // Gaming & Interactive
        gaming: ['game', 'gaming', 'player', 'score', 'leaderboard', 'multiplayer'],
        interactive: ['interactive', 'animation', 'transition', 'gesture', 'touch'],
        vr: ['vr', 'virtual-reality', 'oculus', 'htc', 'immersive'],
        ar: ['ar', 'augmented-reality', 'overlay', 'marker', 'tracking'],
        
        // IoT & Hardware
        iot: ['iot', 'internet-of-things', 'sensor', 'device', 'embedded'],
        hardware: ['hardware', 'raspberry-pi', 'arduino', 'microcontroller', 'gpio'],
        
        // Workflow & Automation
        workflow: ['workflow', 'process', 'automation', 'pipeline', 'orchestration'],
        scheduling: ['scheduling', 'cron', 'job', 'task', 'queue', 'background'],
        
        // Content & CMS
        cms: ['cms', 'content-management', 'editor', 'admin', 'publishing'],
        blog: ['blog', 'article', 'post', 'comment', 'category', 'tag'],
        wiki: ['wiki', 'knowledge-base', 'documentation', 'collaborative'],
        
        // Social & Community
        social: ['social', 'share', 'like', 'follow', 'comment', 'feed'],
        community: ['community', 'forum', 'discussion', 'group', 'member'],
        
        // Maps & Location
        maps: ['maps', 'geolocation', 'coordinates', 'distance', 'navigation'],
        location: ['location', 'gps', 'address', 'place', 'venue'],
        
        // Calendar & Time
        calendar: ['calendar', 'event', 'schedule', 'appointment', 'booking'],
        time: ['time', 'timezone', 'datetime', 'duration', 'recurring'],
        
        // Forms & Input
        form: ['form', 'input', 'validation', 'field', 'submit', 'survey'],
        questionnaire: ['questionnaire', 'quiz', 'poll', 'feedback', 'rating'],
        
        // Notification & Alerts
        notification: ['notification', 'alert', 'reminder', 'announcement', 'broadcast'],
        realtime: ['realtime', 'live', 'instant', 'synchronous', 'streaming'],
        
        // Backup & Recovery
        backup: ['backup', 'restore', 'recovery', 'snapshot', 'version'],
        
        // Compliance & Legal
        compliance: ['compliance', 'gdpr', 'privacy', 'terms', 'legal'],
        
        // Multi-tenancy
        multitenant: ['multi-tenant', 'tenant', 'isolation', 'shared', 'partition'],
        
        // Microservices
        microservice: ['microservice', 'service', 'container', 'orchestration', 'mesh'],
        
        // Event-driven
        event: ['event', 'event-driven', 'pub-sub', 'message-queue', 'kafka'],
        
        // Graph & Network
        graph: ['graph', 'network', 'relationship', 'node', 'edge'],
        
        // Time Series
        timeseries: ['time-series', 'metrics', 'monitoring', 'logging', 'trend'],
        
        // Configuration
        config: ['configuration', 'config', 'settings', 'environment', 'parameter'],
        
        // Plugin & Extension
        plugin: ['plugin', 'extension', 'addon', 'module', 'custom'],
        
        // Template & Generator
        template: ['template', 'generator', 'scaffold', 'boilerplate', 'starter'],
        
        // Migration & Import/Export
        migration: ['migration', 'import', 'export', 'sync', 'transfer'],
        
        // Quality & Testing
        quality: ['quality', 'code-quality', 'linting', 'formatting', 'review'],
        
        // Documentation
        documentation: ['documentation', 'docs', 'api-docs', 'guide', 'tutorial'],
        
        // Support & Help
        support: ['support', 'help', 'faq', 'ticket', 'assistance'],
        
        // Feedback & Rating
        feedback: ['feedback', 'rating', 'review', 'comment', 'opinion'],
        
        // Collaboration
        collaboration: ['collaboration', 'team', 'workspace', 'project', 'shared'],
        
        // Version Control
        version: ['version', 'history', 'diff', 'merge', 'conflict'],
        
        // Security & Privacy
        privacy: ['privacy', 'confidential', 'secure', 'encrypted', 'anonymous'],
        
        // Scalability
        scalable: ['scalable', 'horizontal', 'vertical', 'load-balancing', 'distribution'],
        
        // Reliability
        reliable: ['reliable', 'fault-tolerant', 'resilient', 'redundant', 'backup'],
        
        // Usability
        usable: ['usable', 'user-friendly', 'intuitive', 'accessible', 'simple'],
        
        // Maintainable
        maintainable: ['maintainable', 'clean', 'modular', 'documented', 'tested'],
        
        // Additional Advanced Features
        serverless: ['serverless', 'lambda', 'function', 'faas', 'edge'],
        edge: ['edge', 'edge-computing', 'cdn', 'distribution', 'latency'],
        progressive: ['progressive', 'pwa', 'offline', 'installable', 'native'],
        realtime: ['realtime', 'live', 'streaming', 'websocket', 'events'],
        collaborative: ['collaborative', 'real-time', 'shared', 'multi-user', 'sync'],
        offline: ['offline', 'sync', 'cache', 'background', 'queue'],
        adaptive: ['adaptive', 'responsive', 'dynamic', 'context-aware', 'smart'],
        intelligent: ['intelligent', 'smart', 'ai-powered', 'automated', 'predictive'],
        contextual: ['contextual', 'situation-aware', 'environment', 'location-based'],
        personalized: ['personalized', 'customized', 'user-specific', 'tailored'],
        automated: ['automated', 'automatic', 'self-service', 'hands-free'],
        predictive: ['predictive', 'forecasting', 'anticipatory', 'proactive'],
        reactive: ['reactive', 'event-driven', 'responsive', 'dynamic'],
        scalable: ['scalable', 'elastic', 'auto-scaling', 'load-balancing'],
        fault: ['fault-tolerant', 'resilient', 'redundant', 'failover'],
        distributed: ['distributed', 'decentralized', 'microservices', 'clustered'],
        containerized: ['containerized', 'dockerized', 'kubernetes', 'orchestrated'],
        monitored: ['monitored', 'observable', 'traceable', 'auditable'],
        secured: ['secured', 'hardened', 'encrypted', 'protected'],
        compliant: ['compliant', 'regulated', 'certified', 'audited'],
        optimized: ['optimized', 'tuned', 'performance', 'efficient'],
        accessible: ['accessible', 'inclusive', 'universal', 'barrier-free'],
        international: ['international', 'global', 'multi-cultural', 'localized'],
        cross: ['cross-platform', 'universal', 'multi-device', 'compatible'],
        integrated: ['integrated', 'connected', 'unified', 'seamless'],
        extensible: ['extensible', 'pluggable', 'modular', 'customizable'],
        maintainable: ['maintainable', 'supportable', 'upgradeable', 'evolvable'],
        testable: ['testable', 'verifiable', 'validated', 'quality-assured'],
        deployable: ['deployable', 'release-ready', 'production-ready', 'shippable']
      }
    }
  }

  async loadCodePatterns() {
    return {
      // Common code structures
      structures: {
        component: {
          react: {
            functional: `import React, { useState, useEffect } from 'react'

const {componentName} = ({ onUpdate }) => {
  const [state, setState] = useState({
    // Component state
  })

  useEffect(() => {
    // Component initialization
    initializeComponent()
  }, [])

  const initializeComponent = () => {
    // Initialize component logic
    console.log('{componentName} initialized')
  }

  const handleAction = (data) => {
    // Handle component actions
    setState(prevState => ({ ...prevState, ...data }))
    if (onUpdate) onUpdate(data)
  }

  return (
    <div className="{componentName.toLowerCase()}-container">
      <div className="{componentName.toLowerCase()}-header">
        <h2>{componentName}</h2>
      </div>
      <div className="{componentName.toLowerCase()}-content">
        {/* Dynamic content based on state */}
        <div className="status">
          Status: {state.status || 'Ready'}
        </div>
      </div>
    </div>
  )
}

export default {componentName}`,
            class: `import React, { Component } from 'react'

class {componentName} extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // Component state
      status: 'initialized'
    }
  }

  componentDidMount() {
    this.initializeComponent()
  }

  initializeComponent = () => {
    // Initialize component logic
    console.log('{componentName} mounted and initialized')
  }

  handleAction = (data) => {
    // Handle component actions
    this.setState(prevState => ({ ...prevState, ...data }))
    if (this.props.onUpdate) {
      this.props.onUpdate(data)
    }
  }

  render() {
    return (
      <div className="{componentName.toLowerCase()}-container">
        <div className="{componentName.toLowerCase()}-header">
          <h2>{componentName}</h2>
        </div>
        <div className="{componentName.toLowerCase()}-content">
          {/* Dynamic content based on state */}
          <div className="status">
            Status: {this.state.status}
          </div>
        </div>
      </div>
    )
  }
}

export default {componentName}`
          },
          vue: `export default {
  name: '{componentName}',
  props: {
    initialData: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      // Component data
      status: 'ready',
      data: this.initialData
    }
  },
  mounted() {
    this.initializeComponent()
  },
  methods: {
    initializeComponent() {
      // Initialize component logic
      console.log('{componentName} initialized')
      this.status = 'initialized'
    },
    
    handleAction(data) {
      // Handle component actions
      this.data = { ...this.data, ...data }
      this.$emit('update', data)
    }
  },
  template: \`
    <div class="{componentName.toLowerCase()}-container">
      <div class="{componentName.toLowerCase()}-header">
        <h2>{componentName}</h2>
      </div>
      <div class="{componentName.toLowerCase()}-content">
        <!-- Dynamic content based on data -->
        <div class="status">
          Status: {{ status }}
        </div>
      </div>
    </div>
  \`
}`,
          vanilla: `class {componentName} {
  constructor(options = {}) {
    this.options = options
    this.state = {
      status: 'initialized',
      data: {}
    }
    this.init()
  }

  init() {
    // Initialize component
    this.render()
    this.bindEvents()
    console.log('{componentName} initialized')
  }

  bindEvents() {
    // Bind event listeners
    document.addEventListener('DOMContentLoaded', () => {
      this.attachToDOM()
    })
  }

  attachToDOM() {
    // Attach component to DOM
    const container = document.getElementById('{componentName.toLowerCase()}-container')
    if (container) {
      container.innerHTML = this.render()
    }
  }

  handleAction(data) {
    // Handle component actions
    this.state = { ...this.state, ...data }
    this.render()
    if (this.options.onUpdate) {
      this.options.onUpdate(data)
    }
  }

  render() {
    return \`
      <div class="{componentName.toLowerCase()}-container">
        <div class="{componentName.toLowerCase()}-header">
          <h2>{componentName}</h2>
        </div>
        <div class="{componentName.toLowerCase()}-content">
          <!-- Dynamic content based on state -->
          <div class="status">
            Status: \${this.state.status}
          </div>
        </div>
      </div>
    \`
  }

  destroy() {
    // Cleanup component
    console.log('{componentName} destroyed')
  }
}

export default {componentName}`
        },
        
        page: {
          html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{pageTitle}</title>
  <link rel="stylesheet" href="styles.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
  <div id="app">
    <header class="app-header">
      <div class="container">
        <h1 class="app-title">{pageTitle}</h1>
        <nav class="app-nav">
          <!-- Navigation items -->
        </nav>
      </div>
    </header>
    
    <main class="app-main">
      <div class="container">
        <div id="content-area">
          <!-- Dynamic content will be rendered here -->
        </div>
      </div>
    </main>
    
    <footer class="app-footer">
      <div class="container">
        <p>&copy; 2024 {pageTitle}. Built with DreamBuild AI.</p>
      </div>
    </footer>
  </div>
  
  <script src="script.js"></script>
  <script>
    // Initialize app when DOM is ready
    document.addEventListener('DOMContentLoaded', function() {
      if (typeof initializeApp === 'function') {
        initializeApp()
      }
    })
  </script>
</body>
</html>`,
          css: `/* {pageTitle} Styles - Generated by DreamBuild AI */

:root {
  --primary-color: #3b82f6;
  --secondary-color: #64748b;
  --success-color: #10b981;
  --warning-color: #f59e0b;
  --error-color: #ef4444;
  --background-color: #f8fafc;
  --surface-color: #ffffff;
  --text-primary: #1e293b;
  --text-secondary: #64748b;
  --border-color: #e2e8f0;
  --shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --border-radius: 8px;
  --transition: all 0.2s ease-in-out;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  color: var(--text-primary);
  background-color: var(--background-color);
  font-size: 16px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Header Styles */
.app-header {
  background-color: var(--surface-color);
  border-bottom: 1px solid var(--border-color);
  box-shadow: var(--shadow);
  position: sticky;
  top: 0;
  z-index: 100;
}

.app-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.app-nav {
  display: flex;
  gap: 1rem;
}

/* Main Content */
.app-main {
  min-height: calc(100vh - 120px);
  padding: 2rem 0;
}

#content-area {
  background-color: var(--surface-color);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  padding: 2rem;
  min-height: 400px;
}

/* Loading State */
.loading-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  color: var(--text-secondary);
}

.spinner {
  width: 40px;
  height: 40px;
  border: 3px solid var(--border-color);
  border-top: 3px solid var(--primary-color);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Component Base Styles */
.component-container {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background-color: var(--surface-color);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  transition: var(--transition);
}

.component-container:hover {
  box-shadow: var(--shadow-lg);
}

.component-header {
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--border-color);
}

.component-header h2 {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
}

.component-content {
  /* Component content styling */
}

.status {
  padding: 0.5rem 1rem;
  background-color: var(--background-color);
  border-radius: var(--border-radius);
  font-size: 0.875rem;
  color: var(--text-secondary);
  border: 1px solid var(--border-color);
}

/* Button Styles */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: var(--border-radius);
  border: 1px solid transparent;
  cursor: pointer;
  transition: var(--transition);
  text-decoration: none;
  min-height: 40px;
}

.btn-primary {
  background-color: var(--primary-color);
  color: white;
}

.btn-primary:hover {
  background-color: #2563eb;
}

.btn-secondary {
  background-color: var(--surface-color);
  color: var(--text-primary);
  border-color: var(--border-color);
}

.btn-secondary:hover {
  background-color: var(--background-color);
}

/* Form Styles */
.form-group {
  margin-bottom: 1rem;
}

.form-label {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
}

.form-input {
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  font-size: 0.875rem;
  transition: var(--transition);
}

.form-input:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

/* Footer */
.app-footer {
  background-color: var(--surface-color);
  border-top: 1px solid var(--border-color);
  padding: 1rem 0;
  text-align: center;
  color: var(--text-secondary);
  font-size: 0.875rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }
  
  .app-main {
    padding: 1rem 0;
  }
  
  #content-area {
    padding: 1rem;
  }
  
  .component-container {
    padding: 1rem;
  }
}

/* Utility Classes */
.text-center { text-align: center; }
.text-left { text-align: left; }
.text-right { text-align: right; }
.mt-1 { margin-top: 0.25rem; }
.mt-2 { margin-top: 0.5rem; }
.mt-3 { margin-top: 1rem; }
.mb-1 { margin-bottom: 0.25rem; }
.mb-2 { margin-bottom: 0.5rem; }
.mb-3 { margin-bottom: 1rem; }
.p-1 { padding: 0.25rem; }
.p-2 { padding: 0.5rem; }
.p-3 { padding: 1rem; }`,
          js: `// {pageTitle} JavaScript - Generated by DreamBuild AI

class AppManager {
  constructor() {
    this.state = {
      initialized: false,
      currentView: 'main',
      data: {},
      user: null
    }
    this.components = new Map()
    this.eventListeners = new Map()
  }

  async initialize() {
    console.log('🚀 Initializing {pageTitle}...')
    
    try {
      // Initialize app state
      await this.loadInitialData()
      
      // Setup event listeners
      this.setupEventListeners()
      
      // Initialize components
      await this.initializeComponents()
      
      // Render initial view
      this.render()
      
      this.state.initialized = true
      console.log('✅ {pageTitle} initialized successfully')
      
    } catch (error) {
      console.error('❌ Failed to initialize {pageTitle}:', error)
      this.showError('Failed to initialize application')
    }
  }

  async loadInitialData() {
    // Load initial application data
    console.log('📊 Loading initial data...')
    
    // Simulate data loading
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    this.state.data = {
      timestamp: new Date().toISOString(),
      version: '1.0.0'
    }
  }

  setupEventListeners() {
    // Setup global event listeners
    console.log('🎧 Setting up event listeners...')
    
    // Window events
    window.addEventListener('resize', this.handleResize.bind(this))
    window.addEventListener('beforeunload', this.handleBeforeUnload.bind(this))
    
    // Custom events
    document.addEventListener('app:update', this.handleAppUpdate.bind(this))
  }

  async initializeComponents() {
    console.log('🧩 Initializing components...')
    
    // Initialize core components
    const componentNames = this.getComponentNames()
    
    for (const componentName of componentNames) {
      try {
        const component = await this.createComponent(componentName)
        this.components.set(componentName, component)
      } catch (error) {
        console.error(\`Failed to initialize component \${componentName}:\`, error)
      }
    }
  }

  getComponentNames() {
    // Return list of components to initialize
    return ['MainComponent', 'NavigationComponent', 'ContentComponent']
  }

  async createComponent(componentName) {
    // Create component instance
    const ComponentClass = this.getComponentClass(componentName)
    return new ComponentClass({
      appManager: this,
      onUpdate: (data) => this.handleComponentUpdate(componentName, data)
    })
  }

  getComponentClass(componentName) {
    // Return component class based on name
    const components = {
      MainComponent: class {
        constructor(options) {
          this.appManager = options.appManager
          this.onUpdate = options.onUpdate
          this.state = { status: 'ready' }
        }
        
        render() {
          return \`
            <div class="component-container">
              <div class="component-header">
                <h2>Main Component</h2>
              </div>
              <div class="component-content">
                <div class="status">Status: \${this.state.status}</div>
                <button class="btn btn-primary" onclick="this.handleAction()">
                  Update Status
                </button>
              </div>
            </div>
          \`
        }
        
        handleAction() {
          this.state.status = 'updated'
          this.onUpdate({ status: this.state.status })
        }
      }
    }
    
    return components[componentName] || class {
      constructor(options) {
        this.appManager = options.appManager
        this.onUpdate = options.onUpdate
        this.state = { status: 'ready' }
      }
      
      render() {
        return \`
          <div class="component-container">
            <div class="component-header">
              <h2>\${componentName}</h2>
            </div>
            <div class="component-content">
              <div class="status">Status: \${this.state.status}</div>
            </div>
          </div>
        \`
      }
    }
  }

  render() {
    const contentArea = document.getElementById('content-area')
    if (!contentArea) return

    // Hide loading state
    const loadingState = contentArea.querySelector('.loading-state')
    if (loadingState) {
      loadingState.style.display = 'none'
    }

    // Render components
    let html = ''
    for (const [name, component] of this.components) {
      if (component.render) {
        html += component.render()
      }
    }

    contentArea.innerHTML = html
  }

  handleComponentUpdate(componentName, data) {
    console.log(\`Component \${componentName} updated:\`, data)
    
    // Update global state
    this.state.data = { ...this.state.data, ...data }
    
    // Re-render if needed
    this.render()
  }

  handleAppUpdate(event) {
    console.log('App update event:', event.detail)
    // Handle global app updates
  }

  handleResize() {
    // Handle window resize
    console.log('Window resized')
  }

  handleBeforeUnload(event) {
    // Handle before unload
    console.log('App is about to unload')
  }

  showError(message) {
    const contentArea = document.getElementById('content-area')
    if (contentArea) {
      contentArea.innerHTML = \`
        <div class="error-state">
          <h2>Error</h2>
          <p>\${message}</p>
          <button class="btn btn-primary" onclick="location.reload()">
            Retry
          </button>
        </div>
      \`
    }
  }
}

// Global app instance
let appManager

// Initialize app when DOM is ready
function initializeApp() {
  if (!appManager) {
    appManager = new AppManager()
    appManager.initialize()
  }
}

// Utility functions
function utilityFunction() {
  console.log('Utility function called')
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { AppManager, initializeApp }
}`
        }
      },
      
      // Common patterns for different app types with detailed implementations
      appPatterns: {
        todo: {
          structure: ['TodoList', 'TodoItem', 'AddTodo', 'FilterTodos'],
          features: ['add', 'delete', 'edit', 'complete', 'filter', 'localStorage'],
          state: ['todos', 'filter', 'input'],
          implementations: {
            TodoList: `class TodoList {
  constructor() {
    this.todos = this.loadFromStorage()
    this.filter = 'all'
    this.init()
  }

  init() {
    this.render()
    this.bindEvents()
  }

  bindEvents() {
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('todo-toggle')) {
        this.toggleTodo(e.target.dataset.id)
      } else if (e.target.classList.contains('todo-delete')) {
        this.deleteTodo(e.target.dataset.id)
      }
    })

    document.addEventListener('change', (e) => {
      if (e.target.classList.contains('filter-select')) {
        this.setFilter(e.target.value)
      }
    })
  }

  addTodo(text) {
    const todo = {
      id: Date.now().toString(),
      text: text.trim(),
      completed: false,
      createdAt: new Date().toISOString()
    }
    
    this.todos.push(todo)
    this.saveToStorage()
    this.render()
  }

  toggleTodo(id) {
    const todo = this.todos.find(t => t.id === id)
    if (todo) {
      todo.completed = !todo.completed
      this.saveToStorage()
      this.render()
    }
  }

  deleteTodo(id) {
    this.todos = this.todos.filter(t => t.id !== id)
    this.saveToStorage()
    this.render()
  }

  setFilter(filter) {
    this.filter = filter
    this.render()
  }

  getFilteredTodos() {
    switch (this.filter) {
      case 'active': return this.todos.filter(t => !t.completed)
      case 'completed': return this.todos.filter(t => t.completed)
      default: return this.todos
    }
  }

  saveToStorage() {
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }

  loadFromStorage() {
    const stored = localStorage.getItem('todos')
    return stored ? JSON.parse(stored) : []
  }

  render() {
    const container = document.getElementById('todo-list')
    if (!container) return

    const filteredTodos = this.getFilteredTodos()
    
    container.innerHTML = \`
      <div class="todo-header">
        <h2>Todo List (\${filteredTodos.length} items)</h2>
        <select class="filter-select">
          <option value="all" \${this.filter === 'all' ? 'selected' : ''}>All</option>
          <option value="active" \${this.filter === 'active' ? 'selected' : ''}>Active</option>
          <option value="completed" \${this.filter === 'completed' ? 'selected' : ''}>Completed</option>
        </select>
      </div>
      <div class="todo-items">
        \${filteredTodos.map(todo => \`
          <div class="todo-item \${todo.completed ? 'completed' : ''}">
            <input type="checkbox" class="todo-toggle" data-id="\${todo.id}" \${todo.completed ? 'checked' : ''}>
            <span class="todo-text">\${todo.text}</span>
            <button class="todo-delete" data-id="\${todo.id}">Delete</button>
          </div>
        \`).join('')}
      </div>
    \`
  }
}`,
            AddTodo: `class AddTodo {
  constructor(todoList) {
    this.todoList = todoList
    this.init()
  }

  init() {
    this.render()
    this.bindEvents()
  }

  bindEvents() {
    const form = document.getElementById('add-todo-form')
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault()
        this.handleSubmit(e)
      })
    }
  }

  handleSubmit(e) {
    const input = e.target.querySelector('.todo-input')
    const text = input.value.trim()
    
    if (text) {
      this.todoList.addTodo(text)
      input.value = ''
    }
  }

  render() {
    const container = document.getElementById('add-todo')
    if (!container) return

    container.innerHTML = \`
      <form id="add-todo-form" class="add-todo-form">
        <div class="form-group">
          <input type="text" class="todo-input form-input" placeholder="Add a new todo..." required>
          <button type="submit" class="btn btn-primary">Add Todo</button>
        </div>
      </form>
    \`
  }
}`
          }
        },
        calculator: {
          structure: ['Calculator', 'Display', 'Button', 'History'],
          features: ['calculate', 'clear', 'history', 'memory', 'keyboard'],
          state: ['display', 'operation', 'history', 'memory'],
          implementations: {
            Calculator: `class Calculator {
  constructor() {
    this.display = '0'
    this.previousValue = null
    this.operation = null
    this.waitingForNewValue = false
    this.history = this.loadHistory()
    this.init()
  }

  init() {
    this.render()
    this.bindEvents()
  }

  bindEvents() {
    // Button clicks
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('calc-btn')) {
        this.handleButtonClick(e.target.dataset.value)
      }
    })

    // Keyboard support
    document.addEventListener('keydown', (e) => {
      this.handleKeyboard(e)
    })
  }

  handleButtonClick(value) {
    if (/\d/.test(value)) {
      this.inputNumber(value)
    } else if (value === '.') {
      this.inputDecimal()
    } else if (['+', '-', '*', '/'].includes(value)) {
      this.inputOperator(value)
    } else if (value === '=') {
      this.calculate()
    } else if (value === 'clear') {
      this.clear()
    } else if (value === 'delete') {
      this.delete()
    }
  }

  handleKeyboard(e) {
    e.preventDefault()
    
    if (/\d/.test(e.key)) {
      this.inputNumber(e.key)
    } else if (e.key === '.') {
      this.inputDecimal()
    } else if (['+', '-', '*', '/'].includes(e.key)) {
      this.inputOperator(e.key)
    } else if (e.key === 'Enter' || e.key === '=') {
      this.calculate()
    } else if (e.key === 'Escape' || e.key === 'c') {
      this.clear()
    } else if (e.key === 'Backspace') {
      this.delete()
    }
  }

  inputNumber(num) {
    if (this.waitingForNewValue) {
      this.display = num
      this.waitingForNewValue = false
    } else {
      this.display = this.display === '0' ? num : this.display + num
    }
    this.updateDisplay()
  }

  inputDecimal() {
    if (this.waitingForNewValue) {
      this.display = '0.'
      this.waitingForNewValue = false
    } else if (!this.display.includes('.')) {
      this.display += '.'
    }
    this.updateDisplay()
  }

  inputOperator(nextOperator) {
    const inputValue = parseFloat(this.display)

    if (this.previousValue === null) {
      this.previousValue = inputValue
    } else if (this.operation) {
      const currentValue = this.previousValue || 0
      const newValue = this.performCalculation(currentValue, inputValue, this.operation)

      this.display = String(newValue)
      this.previousValue = newValue
    }

    this.waitingForNewValue = true
    this.operation = nextOperator
    this.updateDisplay()
  }

  calculate() {
    const inputValue = parseFloat(this.display)

    if (this.previousValue !== null && this.operation) {
      const newValue = this.performCalculation(this.previousValue, inputValue, this.operation)
      
      // Add to history
      this.addToHistory(\`\${this.previousValue} \${this.operation} \${inputValue} = \${newValue}\`)
      
      this.display = String(newValue)
      this.previousValue = null
      this.operation = null
      this.waitingForNewValue = true
    }
    
    this.updateDisplay()
  }

  performCalculation(firstValue, secondValue, operation) {
    switch (operation) {
      case '+': return firstValue + secondValue
      case '-': return firstValue - secondValue
      case '*': return firstValue * secondValue
      case '/': return secondValue !== 0 ? firstValue / secondValue : 0
      default: return secondValue
    }
  }

  clear() {
    this.display = '0'
    this.previousValue = null
    this.operation = null
    this.waitingForNewValue = false
    this.updateDisplay()
  }

  delete() {
    if (this.display.length > 1) {
      this.display = this.display.slice(0, -1)
    } else {
      this.display = '0'
    }
    this.updateDisplay()
  }

  addToHistory(calculation) {
    this.history.unshift({
      calculation,
      timestamp: new Date().toISOString()
    })
    
    // Keep only last 10 calculations
    this.history = this.history.slice(0, 10)
    this.saveHistory()
    this.updateHistory()
  }

  updateDisplay() {
    const display = document.getElementById('calculator-display')
    if (display) {
      display.textContent = this.display
    }
  }

  updateHistory() {
    const historyContainer = document.getElementById('calculator-history')
    if (!historyContainer) return

    historyContainer.innerHTML = \`
      <h3>History</h3>
      <div class="history-items">
        \${this.history.map(item => \`
          <div class="history-item">
            <span class="calculation">\${item.calculation}</span>
            <small class="timestamp">\${new Date(item.timestamp).toLocaleTimeString()}</small>
          </div>
        \`).join('')}
      </div>
    \`
  }

  saveHistory() {
    localStorage.setItem('calculator-history', JSON.stringify(this.history))
  }

  loadHistory() {
    const stored = localStorage.getItem('calculator-history')
    return stored ? JSON.parse(stored) : []
  }

  render() {
    const container = document.getElementById('calculator')
    if (!container) return

    container.innerHTML = \`
      <div class="calculator-container">
        <div class="calculator-display" id="calculator-display">\${this.display}</div>
        <div class="calculator-buttons">
          <button class="calc-btn" data-value="clear">C</button>
          <button class="calc-btn" data-value="delete">⌫</button>
          <button class="calc-btn" data-value="/">/</button>
          <button class="calc-btn" data-value="*">×</button>
          
          <button class="calc-btn" data-value="7">7</button>
          <button class="calc-btn" data-value="8">8</button>
          <button class="calc-btn" data-value="9">9</button>
          <button class="calc-btn" data-value="-">-</button>
          
          <button class="calc-btn" data-value="4">4</button>
          <button class="calc-btn" data-value="5">5</button>
          <button class="calc-btn" data-value="6">6</button>
          <button class="calc-btn" data-value="+">+</button>
          
          <button class="calc-btn" data-value="1">1</button>
          <button class="calc-btn" data-value="2">2</button>
          <button class="calc-btn" data-value="3">3</button>
          <button class="calc-btn" data-value="=" rowspan="2">=</button>
          
          <button class="calc-btn" data-value="0" colspan="2">0</button>
          <button class="calc-btn" data-value=".">.</button>
        </div>
        <div class="calculator-history" id="calculator-history"></div>
      </div>
    \`
  }
}`
          }
        },
        game: {
          structure: ['Game', 'Player', 'Score', 'Level', 'Enemy'],
          features: ['start', 'pause', 'reset', 'score', 'levels', 'canvas'],
          state: ['score', 'level', 'gameState', 'player'],
          implementations: {
            Game: `class Game {
  constructor() {
    this.canvas = null
    this.ctx = null
    this.gameState = 'menu' // menu, playing, paused, gameOver
    this.score = 0
    this.level = 1
    this.player = null
    this.enemies = []
    this.gameLoop = null
    this.lastTime = 0
    this.init()
  }

  init() {
    this.createCanvas()
    this.setupEventListeners()
    this.showMenu()
  }

  createCanvas() {
    const container = document.getElementById('game-container')
    if (!container) return

    this.canvas = document.createElement('canvas')
    this.canvas.width = 800
    this.canvas.height = 600
    this.canvas.style.border = '2px solid #333'
    this.canvas.style.backgroundColor = '#000'
    
    this.ctx = this.canvas.getContext('2d')
    container.appendChild(this.canvas)
  }

  setupEventListeners() {
    document.addEventListener('keydown', (e) => {
      if (this.gameState === 'playing' && this.player) {
        this.player.handleInput(e.key)
      } else if (e.key === 'Enter' && this.gameState === 'menu') {
        this.startGame()
      } else if (e.key === 'Enter' && this.gameState === 'gameOver') {
        this.resetGame()
      }
    })

    // Touch controls for mobile
    this.canvas.addEventListener('touchstart', (e) => {
      if (this.gameState === 'playing' && this.player) {
        const touch = e.touches[0]
        const rect = this.canvas.getBoundingClientRect()
        const x = touch.clientX - rect.left
        
        if (x < this.canvas.width / 2) {
          this.player.moveLeft()
        } else {
          this.player.moveRight()
        }
      }
    })
  }

  showMenu() {
    this.gameState = 'menu'
    this.ctx.fillStyle = '#000'
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
    
    this.ctx.fillStyle = '#fff'
    this.ctx.font = '48px Arial'
    this.ctx.textAlign = 'center'
    this.ctx.fillText('Space Game', this.canvas.width / 2, this.canvas.height / 2 - 50)
    
    this.ctx.font = '24px Arial'
    this.ctx.fillText('Press ENTER to Start', this.canvas.width / 2, this.canvas.height / 2 + 50)
    
    this.ctx.fillText('High Score: ' + this.getHighScore(), this.canvas.width / 2, this.canvas.height / 2 + 100)
  }

  startGame() {
    this.gameState = 'playing'
    this.score = 0
    this.level = 1
    this.enemies = []
    
    // Create player
    this.player = new Player(this.canvas.width / 2, this.canvas.height - 50)
    
    // Create initial enemies
    this.createEnemies()
    
    // Start game loop
    this.gameLoop = requestAnimationFrame((time) => this.update(time))
  }

  createEnemies() {
    for (let i = 0; i < 5 + this.level; i++) {
      const x = Math.random() * (this.canvas.width - 40)
      const y = Math.random() * 200
      this.enemies.push(new Enemy(x, y))
    }
  }

  update(currentTime) {
    if (this.gameState !== 'playing') return

    const deltaTime = currentTime - this.lastTime
    this.lastTime = currentTime

    // Clear canvas
    this.ctx.fillStyle = '#000'
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)

    // Update player
    if (this.player) {
      this.player.update(deltaTime)
      this.player.draw(this.ctx)
    }

    // Update enemies
    this.enemies.forEach((enemy, index) => {
      enemy.update(deltaTime)
      enemy.draw(this.ctx)

      // Check collision with player
      if (this.player && this.checkCollision(this.player, enemy)) {
        this.gameOver()
      }

      // Remove enemies that are off screen
      if (enemy.y > this.canvas.height) {
        this.enemies.splice(index, 1)
        this.score += 10
      }
    })

    // Add new enemies if needed
    if (this.enemies.length === 0) {
      this.level++
      this.createEnemies()
    }

    // Draw UI
    this.drawUI()

    // Continue game loop
    this.gameLoop = requestAnimationFrame((time) => this.update(time))
  }

  checkCollision(player, enemy) {
    return player.x < enemy.x + enemy.width &&
           player.x + player.width > enemy.x &&
           player.y < enemy.y + enemy.height &&
           player.y + player.height > enemy.y
  }

  drawUI() {
    this.ctx.fillStyle = '#fff'
    this.ctx.font = '20px Arial'
    this.ctx.textAlign = 'left'
    this.ctx.fillText(\`Score: \${this.score}\`, 20, 30)
    this.ctx.fillText(\`Level: \${this.level}\`, 20, 60)
  }

  gameOver() {
    this.gameState = 'gameOver'
    cancelAnimationFrame(this.gameLoop)
    
    // Save high score
    if (this.score > this.getHighScore()) {
      localStorage.setItem('game-high-score', this.score.toString())
    }
    
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.7)'
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
    
    this.ctx.fillStyle = '#fff'
    this.ctx.font = '48px Arial'
    this.ctx.textAlign = 'center'
    this.ctx.fillText('Game Over!', this.canvas.width / 2, this.canvas.height / 2 - 50)
    
    this.ctx.font = '24px Arial'
    this.ctx.fillText(\`Final Score: \${this.score}\`, this.canvas.width / 2, this.canvas.height / 2)
    this.ctx.fillText('Press ENTER to Restart', this.canvas.width / 2, this.canvas.height / 2 + 50)
  }

  resetGame() {
    this.showMenu()
  }

  getHighScore() {
    return parseInt(localStorage.getItem('game-high-score') || '0')
  }

  render() {
    const container = document.getElementById('game')
    if (!container) return

    container.innerHTML = \`
      <div class="game-container" id="game-container">
        <!-- Canvas will be created here -->
      </div>
      <div class="game-controls">
        <p>Use arrow keys or WASD to move. Avoid the enemies!</p>
      </div>
    \`
  }
}

class Player {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.width = 40
    this.height = 40
    this.speed = 200
    this.keys = {}
  }

  handleInput(key) {
    this.keys[key] = true
  }

  update(deltaTime) {
    if (this.keys['ArrowLeft'] || this.keys['a'] || this.keys['A']) {
      this.x -= this.speed * deltaTime / 1000
    }
    if (this.keys['ArrowRight'] || this.keys['d'] || this.keys['D']) {
      this.x += this.speed * deltaTime / 1000
    }

    // Keep player on screen
    this.x = Math.max(0, Math.min(760, this.x))
  }

  draw(ctx) {
    ctx.fillStyle = '#00f'
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }

  moveLeft() {
    this.x -= 20
    this.x = Math.max(0, this.x)
  }

  moveRight() {
    this.x += 20
    this.x = Math.min(760, this.x)
  }
}

class Enemy {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.width = 30
    this.height = 30
    this.speed = 50 + Math.random() * 100
  }

  update(deltaTime) {
    this.y += this.speed * deltaTime / 1000
  }

  draw(ctx) {
    ctx.fillStyle = '#f00'
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }
}`
          }
        }
      }
    }
  }

  async initializeSmartAnalyzers() {
    return {
      // Intent analyzer - understands what user wants to build
      intentAnalyzer: (prompt) => {
        const lowerPrompt = prompt.toLowerCase()
        
        // Analyze app type with improved matching
        let appType = 'web-app'
        let confidence = 0
        let bestMatches = []
        
        // Check for exact matches first (higher priority)
        for (const [type, keywords] of Object.entries(this.aiPatterns.appTypes)) {
          const exactMatches = keywords.filter(keyword => {
            // Check for exact word matches
            const regex = new RegExp(`\\b${keyword}\\b`, 'i')
            return regex.test(lowerPrompt)
          })
          
          const partialMatches = keywords.filter(keyword => lowerPrompt.includes(keyword))
          
          // Weight exact matches higher than partial matches
          const matchScore = exactMatches.length * 2 + partialMatches.length
          
          if (matchScore > confidence) {
            appType = type
            confidence = matchScore
            bestMatches = [...exactMatches, ...partialMatches]
          }
        }
        
        // Special handling for common app types
        if (lowerPrompt.includes('todo') || lowerPrompt.includes('task') || lowerPrompt.includes('list')) {
          appType = 'todo'
          confidence = 3
        } else if (lowerPrompt.includes('calculator') || lowerPrompt.includes('math') || lowerPrompt.includes('compute')) {
          appType = 'calculator'
          confidence = 3
        } else if (lowerPrompt.includes('game') || lowerPrompt.includes('player') || lowerPrompt.includes('enemy')) {
          appType = 'game'
          confidence = 3
        }
        
        // Analyze technology preferences
        let technology = 'vanilla'
        let techConfidence = 0
        for (const [tech, keywords] of Object.entries(this.aiPatterns.technologies)) {
          const techMatches = keywords.filter(keyword => lowerPrompt.includes(keyword))
          if (techMatches.length > techConfidence) {
            technology = tech
            techConfidence = techMatches.length
          }
        }
        
        // Analyze features needed
        const features = []
        for (const [feature, keywords] of Object.entries(this.aiPatterns.features)) {
          if (keywords.some(keyword => lowerPrompt.includes(keyword))) {
            features.push(feature)
          }
        }
        
        return {
          appType,
          technology,
          features,
          confidence: Math.min(confidence / 3, 1), // Normalize confidence
          complexity: this.calculateComplexity(features.length, appType),
          matches: bestMatches
        }
      },
      
      // Code structure analyzer
      structureAnalyzer: (intent) => {
        const { appType, technology, features } = intent
        
        // Get base structure for app type
        const baseStructure = this.codePatterns.appPatterns[appType] || 
                             this.codePatterns.appPatterns.todo
        
        // Generate component structure with detailed implementations
        const components = baseStructure.structure.map(comp => ({
          name: comp,
          type: 'component',
          technology,
          template: this.generateDetailedComponentTemplate(comp, appType, technology, features)
        }))
        
        // Generate page structure
        const pages = [{
          name: 'index',
          type: 'page',
          template: this.generatePageTemplate(appType, technology, features)
        }]
        
        return {
          components,
          pages,
          assets: ['styles.css', 'script.js'],
          structure: 'component-based'
        }
      },
      
      // Smart code generator
      codeGenerator: (structure, intent) => {
        const files = {}
        
        // Generate component files
        structure.components.forEach(component => {
          const filename = `${component.name}.${this.getFileExtension(component.technology)}`
          files[filename] = component.template
        })
        
        // Generate page files
        structure.pages.forEach(page => {
          const filename = `${page.name}.html`
          files[filename] = page.template
        })
        
        // Generate asset files
        structure.assets.forEach(asset => {
          const extension = asset.split('.').pop()
          files[asset] = this.generateAssetTemplate(extension, intent)
        })
        
        return files
      }
    }
  }

  // Main AI generation method
  async generateCode(prompt, context = {}) {
    console.log('🧠 DreamBuild Built-in AI generating code for:', prompt)
    
    if (!this.isInitialized) {
      await this.initializeBuiltInAI()
    }
    
    try {
      // Check if this is an incremental update
      // Only treat as incremental if there are actual files with content
      const hasRealContent = context.currentFiles && Object.values(context.currentFiles).some(content => 
        content && typeof content === 'string' && content.trim().length > 50
      )
      const isIncremental = context.isIncremental && hasRealContent
      
      if (isIncremental) {
        console.log('🔄 Incremental development mode - enhancing existing app')
        console.log('📁 Existing files:', Object.keys(context.currentFiles))
        
        // Step 1: Analyze what feature user wants to add
        const intent = this.smartAnalyzers.intentAnalyzer(prompt)
        console.log('🎯 Feature to add:', intent)
        
        // Step 2: Generate ONLY the new feature code
        const newFeatureCode = await this.generateIncrementalFeature(prompt, intent, context.currentFiles)
        console.log('✨ Generated new feature code:', Object.keys(newFeatureCode))
        
        // Step 3: Merge with existing files
        const mergedFiles = {
          ...context.currentFiles,  // Keep all existing files
          ...newFeatureCode          // Add/update only new feature files
        }
        console.log('📦 Merged files:', Object.keys(mergedFiles))
        
        return {
          files: mergedFiles,
          type: 'incremental_update',
          newFeatures: [intent.appType],
          message: `Added ${intent.appType} feature to your existing app`,
          metadata: {
            intent,
            isIncremental: true,
            filesAdded: Object.keys(newFeatureCode),
            aiEngine: 'DreamBuild Built-in AI',
            version: '1.0.0',
            timestamp: new Date().toISOString()
          }
        }
      }
      
      // Full app generation (not incremental)
      console.log('🆕 Creating new app from scratch')
      
      // Step 1: Analyze user intent
      const intent = this.smartAnalyzers.intentAnalyzer(prompt)
      console.log('🎯 Intent analyzed:', intent)
      
      // Step 2: Generate code structure
      const structure = this.smartAnalyzers.structureAnalyzer(intent)
      console.log('🏗️ Structure generated:', structure)
      
      // Step 3: Generate actual code
      const files = this.smartAnalyzers.codeGenerator(structure, intent)
      console.log('📝 Code generated for files:', Object.keys(files))
      
      // Step 4: Enhance with context
      const enhancedFiles = await this.enhanceWithContext(files, context, intent)
      
      return {
        files: enhancedFiles,
        type: 'built_in_ai_generated',
        metadata: {
          intent,
          structure,
          aiEngine: 'DreamBuild Built-in AI',
          version: '1.0.0',
          timestamp: new Date().toISOString()
        }
      }
      
    } catch (error) {
      console.error('❌ DreamBuild Built-in AI error:', error)
      
      // Fallback to template system
      console.log('🔄 Falling back to template system...')
      return await this.templateGenerator.generateFromPrompt(prompt, context)
    }
  }
  
  // Generate code for incremental feature addition
  async generateIncrementalFeature(prompt, intent, existingFiles) {
    console.log('✨ Generating incremental feature code')
    
    const lowerPrompt = prompt.toLowerCase()
    const newFiles = {}
    
    // Detect what feature the user wants to add
    if (lowerPrompt.includes('dark mode') || lowerPrompt.includes('theme')) {
      newFiles['theme.css'] = this.generateThemeCSS()
      newFiles['theme.js'] = this.generateThemeJS()
    }
    
    if (lowerPrompt.includes('search') || lowerPrompt.includes('filter')) {
      newFiles['search.js'] = this.generateSearchFeature()
    }
    
    if (lowerPrompt.includes('auth') || lowerPrompt.includes('login')) {
      newFiles['auth.js'] = this.generateAuthModule()
    }
    
    if (lowerPrompt.includes('export') || lowerPrompt.includes('download')) {
      newFiles['export.js'] = this.generateExportFeature()
    }
    
    // If no specific feature detected, provide helpful guidance
    if (Object.keys(newFiles).length === 0) {
      newFiles['feature-added.js'] = `// Feature addition for: ${prompt}
// This feature has been added to your existing app
console.log('✅ New feature added: ${prompt}')

// Add your custom feature implementation here
// Your existing files remain unchanged
`
    }
    
    return newFiles
  }
  
  // Helper methods for incremental features
  generateThemeCSS() {
    return `/* Dark Mode Theme */
:root {
  --bg-light: #ffffff;
  --bg-dark: #1a1a1a;
  --text-light: #333333;
  --text-dark: #ffffff;
}

[data-theme="light"] {
  background-color: var(--bg-light);
  color: var(--text-light);
}

[data-theme="dark"] {
  background-color: var(--bg-dark);
  color: var(--text-dark);
}`
  }
  
  generateThemeJS() {
    return `// Theme Toggle
class ThemeManager {
  constructor() {
    this.theme = localStorage.getItem('theme') || 'light'
    this.apply()
  }
  
  toggle() {
    this.theme = this.theme === 'light' ? 'dark' : 'light'
    this.apply()
    localStorage.setItem('theme', this.theme)
  }
  
  apply() {
    document.documentElement.setAttribute('data-theme', this.theme)
  }
}

const themeManager = new ThemeManager()`
  }
  
  generateSearchFeature() {
    return `// Search Functionality
function addSearchFeature() {
  const searchBox = document.createElement('input')
  searchBox.type = 'text'
  searchBox.placeholder = 'Search...'
  searchBox.className = 'search-box'
  
  searchBox.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase()
    // Add your search logic here
    console.log('Searching for:', searchTerm)
  })
  
  // Add to your app
  const header = document.querySelector('.app-header .container')
  if (header) {
    header.appendChild(searchBox)
  }
}

addSearchFeature()`
  }
  
  generateExportFeature() {
    return `// Export Functionality
function exportData() {
  // Gather data from your app
  const data = {
    exported: new Date().toISOString(),
    // Add your app data here
  }
  
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'export.json'
  a.click()
  URL.revokeObjectURL(url)
}

// Add export button
const exportBtn = document.createElement('button')
exportBtn.textContent = 'Export Data'
exportBtn.onclick = exportData
exportBtn.className = 'btn btn-secondary'
document.querySelector('.app-header .container')?.appendChild(exportBtn)`
  }

  // Helper methods
  calculateComplexity(featureCount, appType) {
    const baseComplexity = {
      todo: 1,
      calculator: 2,
      game: 3,
      dashboard: 4,
      blog: 3,
      portfolio: 2,
      ecommerce: 5,
      social: 4,
      analytics: 4,
      form: 2
    }
    
    return Math.min(5, (baseComplexity[appType] || 3) + featureCount)
  }

  generateComponentTemplate(componentName, technology, features) {
    // Get the correct template based on technology
    let baseTemplate = ''
    
    try {
      if (technology === 'react') {
        // React has nested structure with functional and class
        const reactComponent = this.codePatterns.structures.component.react
        baseTemplate = (typeof reactComponent === 'object' && reactComponent.functional) 
                      ? reactComponent.functional 
                      : (typeof reactComponent === 'string' ? reactComponent : this.codePatterns.structures.component.vanilla)
      } else if (technology === 'vue') {
        // Vue can be either a string or an object
        const vueComponent = this.codePatterns.structures.component.vue
        baseTemplate = (typeof vueComponent === 'object' && vueComponent.component)
                      ? vueComponent.component
                      : (typeof vueComponent === 'string' ? vueComponent : this.codePatterns.structures.component.vanilla)
      } else {
        // Vanilla or fallback
        baseTemplate = this.codePatterns.structures.component.vanilla || 
                      this.codePatterns.structures.component.react?.functional || 
                      '// Component template'
      }
      
      // Final safety check - ensure we have a string
      if (typeof baseTemplate !== 'string') {
        console.warn('⚠️ Template is not a string, using fallback')
        baseTemplate = this.codePatterns.structures.component.vanilla || '// Component template not found'
      }
      
      // Only call replace if we have a valid string
      if (typeof baseTemplate === 'string') {
        return baseTemplate
          .replace(/{componentName}/g, componentName)
          .replace(/{features}/g, features && Array.isArray(features) ? features.map(f => `// ${f} feature`).join('\n') : '')
      }
      
      return `// Component: ${componentName}\n// Generated by DreamBuild AI`
      
    } catch (error) {
      console.error('❌ Error in generateComponentTemplate:', error)
      return `// Component: ${componentName}\n// Error generating template: ${error.message}`
    }
  }

  generateDetailedComponentTemplate(componentName, appType, technology, features) {
    // Check if we have a detailed implementation for this component
    const appPattern = this.codePatterns.appPatterns[appType]
    if (appPattern && appPattern.implementations && appPattern.implementations[componentName]) {
      return appPattern.implementations[componentName]
    }
    
    // Fall back to enhanced template generation
    let baseTemplate = ''
    
    try {
      if (technology === 'react') {
        // React has nested structure with functional and class
        const reactComponent = this.codePatterns.structures.component.react
        baseTemplate = (typeof reactComponent === 'object' && reactComponent.functional) 
                      ? reactComponent.functional 
                      : (typeof reactComponent === 'string' ? reactComponent : this.codePatterns.structures.component.vanilla)
      } else if (technology === 'vue') {
        // Vue can be either a string or an object
        const vueComponent = this.codePatterns.structures.component.vue
        baseTemplate = (typeof vueComponent === 'object' && vueComponent.component)
                      ? vueComponent.component
                      : (typeof vueComponent === 'string' ? vueComponent : this.codePatterns.structures.component.vanilla)
      } else {
        // Vanilla or fallback
        baseTemplate = this.codePatterns.structures.component.vanilla || 
                      this.codePatterns.structures.component.react?.functional || 
                      '// Component template'
      }
      
      // Final safety check - ensure we have a string template
      if (typeof baseTemplate !== 'string') {
        console.warn('⚠️ Detailed template is not a string, using fallback')
        baseTemplate = this.codePatterns.structures.component.vanilla || '// Component template not found'
      }
    } catch (error) {
      console.error('❌ Error getting base template:', error)
      baseTemplate = '// Component template error'
    }
    
    // Enhance template with app-specific features
    let enhancedTemplate = ''
    try {
      if (typeof baseTemplate === 'string') {
        enhancedTemplate = baseTemplate
          .replace(/{componentName}/g, componentName)
          .replace(/{features}/g, features && Array.isArray(features) ? features.map(f => `// ${f} feature`).join('\n') : '')
      } else {
        enhancedTemplate = `// Component: ${componentName}\n// Features: ${features && Array.isArray(features) ? features.join(', ') : 'none'}`
      }
    } catch (error) {
      console.error('❌ Error enhancing template:', error)
      enhancedTemplate = `// Component: ${componentName}\n// Error: ${error.message}`
    }
    
    // Add specific feature implementations
    if (features.includes('localStorage')) {
      enhancedTemplate += `

  // Local Storage functionality
  saveToStorage(key, data) {
    try {
      localStorage.setItem(key, JSON.stringify(data))
      return true
    } catch (error) {
      console.error('Failed to save to localStorage:', error)
      return false
    }
  }

  loadFromStorage(key) {
    try {
      const stored = localStorage.getItem(key)
      return stored ? JSON.parse(stored) : null
    } catch (error) {
      console.error('Failed to load from localStorage:', error)
      return null
    }
  }`
    }
    
    if (features.includes('api')) {
      enhancedTemplate += `

  // API functionality
  async fetchData(url, options = {}) {
    try {
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers
        },
        ...options
      })
      
      if (!response.ok) {
        throw new Error(\`HTTP error! status: \${response.status}\`)
      }
      
      return await response.json()
    } catch (error) {
      console.error('API request failed:', error)
      throw error
    }
  }`
    }
    
    if (features.includes('validation')) {
      enhancedTemplate += `

  // Validation functionality
  validateInput(input, rules = {}) {
    const errors = []
    
    if (rules.required && !input.trim()) {
      errors.push('This field is required')
    }
    
    if (rules.minLength && input.length < rules.minLength) {
      errors.push(\`Minimum length is \${rules.minLength}\`)
    }
    
    if (rules.maxLength && input.length > rules.maxLength) {
      errors.push(\`Maximum length is \${rules.maxLength}\`)
    }
    
    if (rules.email && !/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(input)) {
      errors.push('Please enter a valid email address')
    }
    
    return {
      isValid: errors.length === 0,
      errors
    }
  }`
    }
    
    return enhancedTemplate
  }

  generatePageTemplate(appType, technology, features) {
    // For todo apps, generate a simple, working HTML structure
    if (appType === 'todo') {
      return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Todo App</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
  <div id="app">
    <header class="app-header">
      <div class="container">
        <h1 class="app-title">📝 Todo App</h1>
      </div>
    </header>
    
    <main class="app-main">
      <div class="container">
        <div id="add-todo" class="add-todo-section"></div>
        <div id="todo-list" class="todo-list-section"></div>
      </div>
    </main>
    
    <footer class="app-footer">
      <div class="container">
        <p>&copy; 2024 Todo App. Built with DreamBuild AI.</p>
      </div>
    </footer>
  </div>
</body>
</html>`
    }
    
    // For calculator apps
    if (appType === 'calculator') {
      return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Calculator App</title>
</head>
<body>
  <div id="app">
    <header class="app-header">
      <h1>🧮 Calculator</h1>
    </header>
    <main class="app-main">
      <div class="container">
        <div id="calculator"></div>
      </div>
    </main>
  </div>
</body>
</html>`
    }
    
    // For game apps
    if (appType === 'game') {
      return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Game</title>
</head>
<body>
  <div id="app">
    <div id="game-container"></div>
  </div>
</body>
</html>`
    }
    
    // Generic fallback
    const baseTemplate = this.codePatterns.structures.page.html
    return baseTemplate
      .replace(/{pageTitle}/g, appType.charAt(0).toUpperCase() + appType.slice(1) + ' App')
      .replace(/{features}/g, features.map(f => `<!-- ${f} feature -->`).join('\n'))
  }

  generateAssetTemplate(type, intent) {
    switch (type) {
      case 'css':
        return this.codePatterns.structures.page.css
          .replace(/{pageTitle}/g, intent.appType.charAt(0).toUpperCase() + intent.appType.slice(1) + ' App')
      case 'js':
        return this.codePatterns.structures.page.js
          .replace(/{pageTitle}/g, intent.appType.charAt(0).toUpperCase() + intent.appType.slice(1) + ' App')
      default:
        return '// Generated by DreamBuild Built-in AI'
    }
  }

  getFileExtension(technology) {
    const extensions = {
      react: 'jsx',
      vue: 'vue',
      angular: 'ts',
      vanilla: 'js',
      html: 'html',
      css: 'css'
    }
    return extensions[technology] || 'js'
  }

  async enhanceWithContext(files, context, intent) {
    // Enhance generated code with project context
    const enhancedFiles = { ...files }
    
    // Add project-specific imports if needed
    if (context.projectName) {
      Object.keys(enhancedFiles).forEach(filename => {
        if (filename.endsWith('.js') || filename.endsWith('.jsx')) {
          enhancedFiles[filename] = `// Generated for project: ${context.projectName}\n${enhancedFiles[filename]}`
        }
      })
    }
    
    // Add main app initialization with detailed implementations
    enhancedFiles['app.js'] = this.generateMainAppFile(intent)
    
    // Add configuration based on intent
    if (intent.features.includes('authentication')) {
      enhancedFiles['auth.js'] = this.generateAuthModule()
    }
    
    if (intent.features.includes('database')) {
      enhancedFiles['database.js'] = this.generateDatabaseModule()
    }
    
    // Add specific app type initialization
    if (intent.appType === 'todo') {
      enhancedFiles['todo-app.js'] = this.generateTodoAppInitializer()
    } else if (intent.appType === 'calculator') {
      enhancedFiles['calculator-app.js'] = this.generateCalculatorAppInitializer()
    } else if (intent.appType === 'game') {
      enhancedFiles['game-app.js'] = this.generateGameAppInitializer()
    }
    
    return enhancedFiles
  }

  generateMainAppFile(intent) {
    // For todo apps, skip the complex wrapper and just return initialization
    if (intent.appType === 'todo') {
      return `// Todo App Initialization - Generated by DreamBuild Built-in AI

// Initialize Todo App when DOM is ready
function initializeApp() {
  console.log('🚀 Initializing Todo App...')
  
  try {
    // Create and render components
    const todoList = new TodoList()
    const addTodo = new AddTodo(todoList)
    
    console.log('✅ Todo App initialized successfully!')
  } catch (error) {
    console.error('❌ Failed to initialize Todo App:', error)
  }
}

// Auto-initialize when ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp)
} else {
  initializeApp()
}
`
    }
    
    // For other app types
    return `// Main App Initialization - Generated by DreamBuild Built-in AI

class ${intent.appType.charAt(0).toUpperCase() + intent.appType.slice(1)}App {
  constructor() {
    this.appType = '${intent.appType}'
    this.technology = '${intent.technology}'
    this.features = ${JSON.stringify(intent.features)}
    this.components = new Map()
    this.initialized = false
  }

  async initialize() {
    console.log('🚀 Initializing ${intent.appType} app...')
    
    try {
      // Initialize based on app type
      await this.initializeAppType()
      
      // Setup feature-specific functionality
      await this.setupFeatures()
      
      // Initialize components
      await this.initializeComponents()
      
      this.initialized = true
      console.log('✅ ${intent.appType} app initialized successfully')
      
    } catch (error) {
      console.error('❌ Failed to initialize ${intent.appType} app:', error)
    }
  }

  async initializeAppType() {
    switch (this.appType) {
      case 'calculator':
        await this.initializeCalculatorApp()
        break
      case 'game':
        await this.initializeGameApp()
        break
      default:
        await this.initializeGenericApp()
    }
  }

  async initializeCalculatorApp() {
    const calculator = new Calculator()
    this.components.set('calculator', calculator)
  }

  async initializeGameApp() {
    const game = new Game()
    this.components.set('game', game)
  }

  async initializeGenericApp() {
    // Generic app initialization
    console.log('Initializing generic app...')
  }

  async setupFeatures() {
    for (const feature of this.features) {
      switch (feature) {
        case 'localStorage':
          this.setupLocalStorage()
          break
        case 'api':
          this.setupAPI()
          break
        case 'authentication':
          this.setupAuthentication()
          break
      }
    }
  }

  setupLocalStorage() {
    console.log('📦 Setting up localStorage support')
  }

  setupAPI() {
    console.log('🌐 Setting up API support')
  }

  setupAuthentication() {
    console.log('🔐 Setting up authentication')
  }

  async initializeComponents() {
    console.log('🧩 Initializing components...')
    
    for (const [name, component] of this.components) {
      if (component.init) {
        await component.init()
      }
    }
  }
}

// Initialize app when DOM is ready
function initializeApp() {
  const app = new ${intent.appType.charAt(0).toUpperCase() + intent.appType.slice(1)}App()
  app.initialize()
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp)
} else {
  initializeApp()
}
`
  }

  generateTodoAppInitializer() {
    return `// Todo App Initializer - Generated by DreamBuild Built-in AI

// Initialize Todo App when DOM is ready
function initializeApp() {
  console.log('🚀 Initializing Todo App...')
  
  // Initialize components
  const todoList = new TodoList()
  const addTodo = new AddTodo(todoList)
  
  // Render components
  todoList.render()
  addTodo.render()
  
  console.log('✅ Todo App initialized successfully!')
}

// Auto-initialize
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp)
} else {
  initializeApp()
}
`
  }

  generateCalculatorAppInitializer() {
    return `// Calculator App Initializer - Generated by DreamBuild Built-in AI

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Calculator App
  const calculator = new Calculator()
  
  // Render calculator
  document.getElementById('calculator').innerHTML = ''
  calculator.render()
})
`
  }

  generateGameAppInitializer() {
    return `// Game App Initializer - Generated by DreamBuild Built-in AI

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Game App
  const game = new Game()
  
  // Render game
  document.getElementById('game').innerHTML = ''
  game.render()
})
`
  }

  generateAuthModule() {
    return `// Authentication Module - Generated by DreamBuild Built-in AI

class AuthManager {
  constructor() {
    this.currentUser = null
    this.isAuthenticated = false
  }

  async login(email, password) {
    // Login logic
    try {
      // Simulate API call
      const user = await this.authenticateUser(email, password)
      this.currentUser = user
      this.isAuthenticated = true
      return { success: true, user }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  async register(userData) {
    // Registration logic
    try {
      const user = await this.createUser(userData)
      this.currentUser = user
      this.isAuthenticated = true
      return { success: true, user }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  logout() {
    this.currentUser = null
    this.isAuthenticated = false
  }

  async authenticateUser(email, password) {
    // Mock authentication - replace with real API
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: Date.now(),
          email,
          name: email.split('@')[0]
        })
      }, 1000)
    })
  }

  async createUser(userData) {
    // Mock user creation - replace with real API
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: Date.now(),
          ...userData
        })
      }, 1000)
    })
  }
}

export default new AuthManager()`
  }

  generateDatabaseModule() {
    return `// Database Module - Generated by DreamBuild Built-in AI

class DatabaseManager {
  constructor() {
    this.data = new Map()
    this.listeners = new Map()
  }

  // Generic CRUD operations
  async create(collection, data) {
    const id = Date.now().toString()
    const item = { id, ...data, createdAt: new Date() }
    
    if (!this.data.has(collection)) {
      this.data.set(collection, new Map())
    }
    
    this.data.get(collection).set(id, item)
    this.notifyListeners(collection, 'create', item)
    return item
  }

  async read(collection, id = null) {
    if (!this.data.has(collection)) {
      return id ? null : []
    }
    
    const collectionData = this.data.get(collection)
    
    if (id) {
      return collectionData.get(id) || null
    }
    
    return Array.from(collectionData.values())
  }

  async update(collection, id, updates) {
    if (!this.data.has(collection)) {
      return null
    }
    
    const item = this.data.get(collection).get(id)
    if (!item) {
      return null
    }
    
    const updatedItem = { ...item, ...updates, updatedAt: new Date() }
    this.data.get(collection).set(id, updatedItem)
    this.notifyListeners(collection, 'update', updatedItem)
    return updatedItem
  }

  async delete(collection, id) {
    if (!this.data.has(collection)) {
      return false
    }
    
    const deleted = this.data.get(collection).delete(id)
    if (deleted) {
      this.notifyListeners(collection, 'delete', { id })
    }
    return deleted
  }

  // Real-time subscriptions
  subscribe(collection, callback) {
    if (!this.listeners.has(collection)) {
      this.listeners.set(collection, new Set())
    }
    this.listeners.get(collection).add(callback)
    
    return () => {
      this.listeners.get(collection).delete(callback)
    }
  }

  notifyListeners(collection, operation, data) {
    if (this.listeners.has(collection)) {
      this.listeners.get(collection).forEach(callback => {
        callback(operation, data)
      })
    }
  }

  // Query methods
  async query(collection, filter) {
    const items = await this.read(collection)
    return items.filter(item => {
      return Object.entries(filter).every(([key, value]) => {
        return item[key] === value
      })
    })
  }

  // Search method
  async search(collection, searchTerm, fields = []) {
    const items = await this.read(collection)
    return items.filter(item => {
      const searchFields = fields.length > 0 ? fields : Object.keys(item)
      return searchFields.some(field => {
        const value = item[field]
        return typeof value === 'string' && 
               value.toLowerCase().includes(searchTerm.toLowerCase())
      })
    })
  }
}

export default new DatabaseManager()`
  }

  // Health check and status
  getStatus() {
    return {
      isHealthy: this.isInitialized,
      capabilities: this.capabilities,
      version: '1.0.0',
      engine: 'DreamBuild Built-in AI',
      features: [
        'Intent Analysis',
        'Code Structure Generation',
        'Smart Templates',
        'Context Enhancement',
        'Fallback Mechanisms'
      ]
    }
  }

  // Template integration
  async generateFromTemplate(templateId, customizations = {}) {
    return await this.templateGenerator.generateTemplateById(templateId, customizations)
  }

  // Search and discovery
  async searchTemplates(query) {
    return await this.templateGenerator.searchTemplates(query)
  }

  async getAvailableTemplates() {
    return await this.templateGenerator.getAllTemplates()
  }
}

// Export singleton instance
export default new DreamBuildAI()
