// DreamBuild Template Engine - 1000 Templates
// Comprehensive template library for all types of applications

export const TEMPLATE_CATEGORIES = {
  // Web Applications (200 templates)
  web: {
    name: 'Web Applications',
    icon: '🌐',
    templates: [
      // Business Websites (50 templates)
      'business-landing', 'corporate-website', 'consulting-firm', 'law-firm', 'accounting-firm',
      'real-estate', 'insurance-agency', 'financial-advisor', 'marketing-agency', 'advertising-agency',
      'pr-agency', 'hr-consulting', 'business-coaching', 'life-coaching', 'career-coaching',
      'freelancer-portfolio', 'contractor-website', 'service-provider', 'local-business', 'restaurant',
      'hotel', 'spa-salon', 'fitness-gym', 'yoga-studio', 'dance-school', 'music-school',
      'art-gallery', 'museum', 'library', 'community-center', 'non-profit', 'charity',
      'church', 'mosque', 'synagogue', 'temple', 'religious-organization', 'political-campaign',
      'government-agency', 'educational-institution', 'research-center', 'think-tank',
      'professional-association', 'trade-organization', 'chamber-commerce', 'business-network',
      'startup-accelerator', 'venture-capital', 'investment-firm', 'wealth-management',
      
      // E-commerce (50 templates)
      'online-store', 'fashion-boutique', 'electronics-store', 'bookstore', 'jewelry-store',
      'home-decor', 'furniture-store', 'appliance-store', 'automotive-parts', 'sports-equipment',
      'outdoor-gear', 'pet-supplies', 'beauty-products', 'health-supplements', 'organic-food',
      'wine-store', 'coffee-shop', 'bakery', 'catering', 'meal-delivery', 'subscription-box',
      'digital-products', 'software-store', 'app-store', 'marketplace', 'auction-site',
      'classified-ads', 'job-board', 'freelance-platform', 'rental-platform', 'booking-platform',
      'event-tickets', 'travel-booking', 'hotel-booking', 'car-rental', 'bike-sharing',
      'peer-to-peer', 'crowdfunding', 'donation-platform', 'membership-site', 'course-platform',
      'e-learning', 'online-education', 'skill-sharing', 'mentoring-platform', 'networking-site',
      'social-commerce', 'group-buying', 'flash-sales', 'daily-deals', 'coupon-site',
      
      // Blogs & Content (50 templates)
      'personal-blog', 'lifestyle-blog', 'fashion-blog', 'food-blog', 'travel-blog',
      'tech-blog', 'programming-blog', 'design-blog', 'photography-blog', 'art-blog',
      'music-blog', 'movie-blog', 'book-review', 'news-blog', 'political-blog',
      'health-blog', 'fitness-blog', 'parenting-blog', 'education-blog', 'business-blog',
      'marketing-blog', 'finance-blog', 'investment-blog', 'crypto-blog', 'gaming-blog',
      'sports-blog', 'outdoor-blog', 'gardening-blog', 'home-improvement', 'diy-blog',
      'recipe-blog', 'cocktail-blog', 'wine-blog', 'coffee-blog', 'beer-blog',
      'pet-blog', 'animal-blog', 'nature-blog', 'environment-blog', 'sustainability-blog',
      'minimalist-blog', 'productivity-blog', 'self-improvement', 'motivation-blog', 'inspiration-blog',
      'quote-blog', 'poetry-blog', 'creative-writing', 'story-blog', 'memoir-blog',
      
      // Portfolios & Creative (50 templates)
      'designer-portfolio', 'developer-portfolio', 'photographer-portfolio', 'artist-portfolio',
      'writer-portfolio', 'musician-portfolio', 'actor-portfolio', 'model-portfolio',
      'architect-portfolio', 'interior-designer', 'graphic-designer', 'web-designer',
      'ui-designer', 'ux-designer', 'brand-designer', 'logo-designer', 'illustrator',
      'animator', 'video-editor', 'filmmaker', 'documentary-maker', 'podcast-creator',
      'youtuber', 'streamer', 'content-creator', 'influencer', 'social-media-manager',
      'marketing-specialist', 'seo-specialist', 'ppc-specialist', 'email-marketer',
      'copywriter', 'technical-writer', 'content-strategist', 'brand-manager',
      'product-manager', 'project-manager', 'consultant', 'coach', 'trainer',
      'speaker', 'presenter', 'host', 'mc', 'comedian', 'performer', 'entertainer',
      'creative-director', 'art-director', 'production-manager', 'event-planner'
    ]
  },

  // Mobile Applications (150 templates)
  mobile: {
    name: 'Mobile Applications',
    icon: '📱',
    templates: [
      // Productivity Apps (30 templates)
      'task-manager', 'todo-list', 'habit-tracker', 'goal-tracker', 'time-tracker',
      'project-manager', 'team-collaboration', 'note-taking', 'document-editor',
      'calendar-app', 'scheduler', 'reminder-app', 'alarm-clock', 'timer-app',
      'expense-tracker', 'budget-manager', 'bill-reminder', 'receipt-scanner',
      'password-manager', 'contact-manager', 'email-client', 'messaging-app',
      'video-caller', 'voice-recorder', 'screen-recorder', 'file-manager',
      'cloud-storage', 'backup-app', 'sync-manager', 'device-manager',
      
      // Health & Fitness (30 templates)
      'fitness-tracker', 'workout-planner', 'meal-planner', 'nutrition-tracker',
      'water-tracker', 'sleep-tracker', 'meditation-app', 'breathing-exercises',
      'yoga-app', 'pilates-app', 'running-tracker', 'cycling-tracker',
      'weight-tracker', 'body-measurements', 'symptom-tracker', 'medication-reminder',
      'doctor-appointment', 'telemedicine', 'health-records', 'medical-id',
      'emergency-contacts', 'first-aid-guide', 'mental-health', 'anxiety-tracker',
      'mood-tracker', 'journal-app', 'gratitude-app', 'wellness-challenge',
      'step-counter', 'calorie-burner',
      
      // Social & Communication (30 templates)
      'social-network', 'dating-app', 'friend-finder', 'professional-network',
      'community-app', 'forum-app', 'discussion-board', 'chat-app',
      'video-chat', 'group-messaging', 'broadcast-app', 'live-streaming',
      'social-media-manager', 'content-scheduler', 'hashtag-tracker',
      'influencer-platform', 'creator-economy', 'fan-club', 'fan-fiction',
      'book-club', 'movie-club', 'game-club', 'hobby-club', 'interest-group',
      'local-events', 'event-organizer', 'meetup-app', 'conference-app',
      'networking-app', 'mentorship-app',
      
      // Entertainment & Media (30 templates)
      'music-player', 'podcast-app', 'audiobook-reader', 'radio-app',
      'video-player', 'movie-database', 'tv-show-tracker', 'streaming-platform',
      'gaming-platform', 'puzzle-game', 'trivia-game', 'word-game',
      'card-game', 'board-game', 'arcade-game', 'rpg-game', 'strategy-game',
      'sports-game', 'racing-game', 'simulation-game', 'adventure-game',
      'horror-game', 'mystery-game', 'detective-game', 'story-game',
      'art-game', 'music-game', 'dance-game', 'rhythm-game', 'creative-game',
      
      // Education & Learning (30 templates)
      'language-learning', 'flashcard-app', 'quiz-app', 'exam-prep',
      'course-platform', 'tutorial-app', 'how-to-app', 'skill-learning',
      'coding-tutorial', 'programming-course', 'web-development', 'mobile-development',
      'design-course', 'photography-course', 'music-lesson', 'art-lesson',
      'math-tutor', 'science-tutor', 'history-app', 'geography-app',
      'astronomy-app', 'biology-app', 'chemistry-app', 'physics-app',
      'literature-app', 'writing-course', 'grammar-checker', 'spelling-app',
      'reading-tracker', 'book-recommendation'
    ]
  },

  // Dashboard & Analytics (100 templates)
  dashboard: {
    name: 'Dashboards & Analytics',
    icon: '📊',
    templates: [
      // Business Dashboards (25 templates)
      'sales-dashboard', 'marketing-dashboard', 'finance-dashboard', 'hr-dashboard',
      'project-dashboard', 'team-dashboard', 'performance-dashboard', 'kpi-dashboard',
      'executive-dashboard', 'manager-dashboard', 'employee-dashboard', 'client-dashboard',
      'vendor-dashboard', 'supplier-dashboard', 'inventory-dashboard', 'logistics-dashboard',
      'operations-dashboard', 'quality-dashboard', 'safety-dashboard', 'compliance-dashboard',
      'risk-dashboard', 'security-dashboard', 'it-dashboard', 'infrastructure-dashboard',
      'maintenance-dashboard',
      
      // Analytics Platforms (25 templates)
      'web-analytics', 'social-analytics', 'email-analytics', 'seo-analytics',
      'ppc-analytics', 'conversion-analytics', 'funnel-analytics', 'cohort-analytics',
      'retention-analytics', 'churn-analytics', 'lifetime-value', 'roi-analytics',
      'ab-testing', 'experiment-dashboard', 'user-analytics', 'behavior-analytics',
      'engagement-analytics', 'content-analytics', 'product-analytics', 'feature-analytics',
      'performance-analytics', 'error-analytics', 'uptime-monitoring', 'server-monitoring',
      'application-monitoring',
      
      // Data Visualization (25 templates)
      'chart-dashboard', 'graph-dashboard', 'map-dashboard', 'heatmap-dashboard',
      'treemap-dashboard', 'sankey-dashboard', 'network-dashboard', 'flow-dashboard',
      'timeline-dashboard', 'gantt-dashboard', 'calendar-dashboard', 'schedule-dashboard',
      'resource-dashboard', 'capacity-dashboard', 'utilization-dashboard', 'efficiency-dashboard',
      'productivity-dashboard', 'throughput-dashboard', 'latency-dashboard', 'response-dashboard',
      'availability-dashboard', 'reliability-dashboard', 'scalability-dashboard', 'growth-dashboard',
      'trend-dashboard',
      
      // Industry Specific (25 templates)
      'healthcare-dashboard', 'medical-dashboard', 'patient-dashboard', 'clinical-dashboard',
      'pharmacy-dashboard', 'insurance-dashboard', 'banking-dashboard', 'fintech-dashboard',
      'trading-dashboard', 'investment-dashboard', 'real-estate-dashboard', 'property-dashboard',
      'retail-dashboard', 'ecommerce-dashboard', 'supply-chain-dashboard', 'manufacturing-dashboard',
      'logistics-dashboard', 'transportation-dashboard', 'fleet-dashboard', 'energy-dashboard',
      'utilities-dashboard', 'telecom-dashboard', 'media-dashboard', 'entertainment-dashboard',
      'education-dashboard'
    ]
  },

  // E-commerce & Marketplaces (150 templates)
  ecommerce: {
    name: 'E-commerce & Marketplaces',
    icon: '🛒',
    templates: [
      // Online Stores (50 templates)
      'fashion-store', 'electronics-store', 'home-garden', 'sports-outdoor',
      'beauty-health', 'books-media', 'toys-games', 'automotive',
      'industrial-supplies', 'office-supplies', 'jewelry-watches', 'art-collectibles',
      'antiques-vintage', 'crafts-diy', 'food-beverage', 'pet-supplies',
      'baby-kids', 'travel-gear', 'musical-instruments', 'photography-equipment',
      'computer-software', 'digital-products', 'subscription-services', 'membership-products',
      'course-education', 'consulting-services', 'freelance-services', 'event-tickets',
      'travel-bookings', 'accommodation-bookings', 'transportation-bookings', 'entertainment-bookings',
      'health-wellness-services', 'beauty-services', 'fitness-services', 'education-services',
      'professional-services', 'creative-services', 'technical-services', 'maintenance-services',
      'cleaning-services', 'security-services', 'legal-services', 'financial-services',
      'real-estate-services', 'insurance-services', 'consulting-services', 'coaching-services',
      'training-services', 'recruitment-services',
      
      // Marketplaces (50 templates)
      'general-marketplace', 'specialized-marketplace', 'b2b-marketplace', 'b2c-marketplace',
      'c2c-marketplace', 'p2p-marketplace', 'auction-marketplace', 'reverse-auction',
      'tender-marketplace', 'procurement-marketplace', 'wholesale-marketplace', 'retail-marketplace',
      'dropshipping-marketplace', 'affiliate-marketplace', 'commission-marketplace', 'subscription-marketplace',
      'freelance-marketplace', 'gig-marketplace', 'service-marketplace', 'skill-marketplace',
      'talent-marketplace', 'expert-marketplace', 'consultant-marketplace', 'mentor-marketplace',
      'tutor-marketplace', 'coach-marketplace', 'trainer-marketplace', 'instructor-marketplace',
      'content-marketplace', 'digital-marketplace', 'software-marketplace', 'app-marketplace',
      'plugin-marketplace', 'theme-marketplace', 'template-marketplace', 'asset-marketplace',
      'stock-photo-marketplace', 'video-marketplace', 'audio-marketplace', 'music-marketplace',
      'ebook-marketplace', 'course-marketplace', 'tutorial-marketplace', 'webinar-marketplace',
      'event-marketplace', 'experience-marketplace', 'rental-marketplace', 'sharing-marketplace',
      'crowdfunding-marketplace', 'donation-marketplace',
      
      // E-commerce Features (50 templates)
      'shopping-cart', 'checkout-system', 'payment-gateway', 'order-management',
      'inventory-management', 'product-catalog', 'search-filter', 'recommendation-engine',
      'wishlist-favorites', 'product-comparison', 'product-reviews', 'rating-system',
      'customer-accounts', 'user-profiles', 'order-tracking', 'shipping-management',
      'tax-calculation', 'coupon-discount', 'loyalty-program', 'reward-system',
      'gift-cards', 'subscription-management', 'recurring-billing', 'invoicing-system',
      'refund-management', 'return-management', 'exchange-management', 'customer-service',
      'live-chat', 'support-tickets', 'faq-system', 'knowledge-base',
      'email-marketing', 'newsletter-system', 'promotional-campaigns', 'ab-testing',
      'analytics-tracking', 'conversion-optimization', 'seo-optimization', 'social-integration',
      'mobile-optimization', 'pwa-features', 'offline-capabilities', 'push-notifications',
      'multi-language', 'multi-currency', 'international-shipping', 'localization',
      'compliance-management', 'security-features', 'fraud-detection', 'risk-management'
    ]
  },

  // APIs & Backend Services (100 templates)
  api: {
    name: 'APIs & Backend Services',
    icon: '🔌',
    templates: [
      // REST APIs (25 templates)
      'user-management-api', 'authentication-api', 'authorization-api', 'profile-api',
      'content-management-api', 'blog-api', 'cms-api', 'file-upload-api',
      'image-processing-api', 'video-processing-api', 'audio-processing-api', 'document-api',
      'search-api', 'recommendation-api', 'analytics-api', 'tracking-api',
      'notification-api', 'email-api', 'sms-api', 'push-notification-api',
      'payment-api', 'billing-api', 'subscription-api', 'invoice-api',
      'shipping-api',
      
      // GraphQL APIs (25 templates)
      'user-graphql-api', 'product-graphql-api', 'order-graphql-api', 'inventory-graphql-api',
      'content-graphql-api', 'media-graphql-api', 'social-graphql-api', 'messaging-graphql-api',
      'notification-graphql-api', 'analytics-graphql-api', 'reporting-graphql-api', 'dashboard-graphql-api',
      'workflow-graphql-api', 'approval-graphql-api', 'task-graphql-api', 'project-graphql-api',
      'team-graphql-api', 'organization-graphql-api', 'role-graphql-api', 'permission-graphql-api',
      'audit-graphql-api', 'log-graphql-api', 'monitoring-graphql-api', 'health-graphql-api',
      'metrics-graphql-api',
      
      // Microservices (25 templates)
      'user-service', 'auth-service', 'profile-service', 'content-service',
      'media-service', 'notification-service', 'email-service', 'sms-service',
      'payment-service', 'billing-service', 'order-service', 'inventory-service',
      'shipping-service', 'tracking-service', 'analytics-service', 'reporting-service',
      'search-service', 'recommendation-service', 'cache-service', 'queue-service',
      'file-service', 'image-service', 'video-service', 'audio-service',
      'document-service',
      
      // Real-time Services (25 templates)
      'chat-service', 'messaging-service', 'video-call-service', 'voice-call-service',
      'screen-share-service', 'collaboration-service', 'whiteboard-service', 'document-collaboration',
      'live-streaming-service', 'broadcasting-service', 'webinar-service', 'conference-service',
      'gaming-service', 'multiplayer-service', 'tournament-service', 'leaderboard-service',
      'real-time-analytics', 'live-dashboard', 'monitoring-service', 'alerting-service',
      'iot-service', 'sensor-service', 'device-service', 'telemetry-service',
      'event-service'
    ]
  },

  // Games & Entertainment (100 templates)
  games: {
    name: 'Games & Entertainment',
    icon: '🎮',
    templates: [
      // Mobile Games (25 templates)
      'puzzle-game', 'match-3-game', 'bubble-shooter', 'candy-crush-style',
      'word-game', 'crossword-game', 'scrabble-game', 'word-search',
      'trivia-game', 'quiz-game', 'knowledge-game', 'educational-game',
      'arcade-game', 'platformer-game', 'endless-runner', 'infinite-scroller',
      'racing-game', 'driving-game', 'parking-game', 'flying-game',
      'shooting-game', 'action-game', 'adventure-game', 'exploration-game',
      'simulation-game',
      
      // Web Games (25 templates)
      'browser-game', 'html5-game', 'canvas-game', 'webgl-game',
      'multiplayer-game', 'turn-based-game', 'real-time-game', 'strategy-game',
      'card-game', 'board-game', 'dice-game', 'slot-game',
      'casino-game', 'poker-game', 'blackjack-game', 'bingo-game',
      'lottery-game', 'scratch-card', 'virtual-sports', 'fantasy-sports',
      'sports-betting', 'prediction-game', 'voting-game', 'poll-game',
      'survey-game',
      
      // Educational Games (25 templates)
      'math-game', 'science-game', 'history-game', 'geography-game',
      'language-game', 'spelling-game', 'grammar-game', 'vocabulary-game',
      'memory-game', 'concentration-game', 'matching-game', 'sorting-game',
      'counting-game', 'number-game', 'logic-game', 'reasoning-game',
      'pattern-game', 'sequence-game', 'puzzle-solving', 'brain-training',
      'cognitive-game', 'attention-game', 'focus-game', 'meditation-game',
      'mindfulness-game',
      
      // Creative Games (25 templates)
      'drawing-game', 'painting-game', 'coloring-game', 'art-game',
      'music-game', 'rhythm-game', 'dance-game', 'karaoke-game',
      'story-game', 'writing-game', 'poetry-game', 'creative-writing',
      'photo-game', 'photography-game', 'video-game', 'animation-game',
      'design-game', 'fashion-game', 'interior-design', 'garden-design',
      'cooking-game', 'recipe-game', 'restaurant-game', 'business-simulation',
      'life-simulation'
    ]
  },

  // Education & E-learning (100 templates)
  education: {
    name: 'Education & E-learning',
    icon: '🎓',
    templates: [
      // Learning Management Systems (25 templates)
      'lms-platform', 'course-platform', 'training-platform', 'skill-development',
      'certification-platform', 'accreditation-system', 'competency-tracking', 'progress-monitoring',
      'assessment-platform', 'exam-system', 'quiz-platform', 'testing-system',
      'grading-system', 'report-card', 'transcript-system', 'diploma-system',
      'badge-system', 'achievement-system', 'gamification', 'leaderboard-system',
      'peer-learning', 'collaborative-learning', 'group-learning', 'team-learning',
      'mentorship-platform',
      
      // Online Courses (25 templates)
      'programming-course', 'web-development', 'mobile-development', 'data-science',
      'machine-learning', 'artificial-intelligence', 'cybersecurity', 'cloud-computing',
      'devops-course', 'ui-ux-design', 'graphic-design', 'digital-marketing',
      'business-course', 'entrepreneurship', 'project-management', 'leadership',
      'communication-skills', 'presentation-skills', 'writing-skills', 'language-learning',
      'music-course', 'art-course', 'photography-course', 'video-editing',
      'cooking-course',
      
      // Educational Tools (25 templates)
      'flashcard-app', 'study-planner', 'homework-tracker', 'assignment-manager',
      'note-taking-app', 'mind-mapping', 'concept-mapping', 'knowledge-graph',
      'research-tool', 'citation-manager', 'bibliography-tool', 'reference-manager',
      'text-analyzer', 'grammar-checker', 'plagiarism-detector', 'writing-assistant',
      'translation-tool', 'dictionary-app', 'thesaurus-app', 'pronunciation-guide',
      'language-exchange', 'tutoring-platform', 'homework-help', 'study-group',
      'virtual-classroom',
      
      // Specialized Education (25 templates)
      'stem-education', 'coding-bootcamp', 'tech-training', 'professional-development',
      'corporate-training', 'employee-onboarding', 'compliance-training', 'safety-training',
      'healthcare-training', 'medical-education', 'nursing-education', 'pharmacy-education',
      'legal-education', 'law-school', 'bar-exam-prep', 'continuing-education',
      'certification-prep', 'license-renewal', 'skill-assessment', 'competency-evaluation',
      'performance-review', 'career-development', 'job-training', 'vocational-training',
      'apprenticeship-program'
    ]
  },

  // Healthcare & Medical (100 templates)
  healthcare: {
    name: 'Healthcare & Medical',
    icon: '🏥',
    templates: [
      // Patient Management (25 templates)
      'patient-portal', 'medical-records', 'health-history', 'appointment-scheduling',
      'telemedicine', 'virtual-consultation', 'remote-monitoring', 'health-tracking',
      'symptom-tracker', 'medication-management', 'prescription-management', 'drug-interaction',
      'allergy-tracker', 'immunization-record', 'vaccination-schedule', 'health-reminders',
      'wellness-checkup', 'preventive-care', 'screening-schedule', 'test-results',
      'lab-reports', 'imaging-reports', 'pathology-reports', 'discharge-summary',
      'follow-up-care',
      
      // Healthcare Providers (25 templates)
      'doctor-portal', 'nurse-portal', 'specialist-portal', 'clinic-management',
      'hospital-management', 'medical-staff', 'shift-scheduling', 'on-call-system',
      'patient-queue', 'waiting-room', 'triage-system', 'emergency-care',
      'icu-monitoring', 'surgery-scheduling', 'operating-room', 'recovery-tracking',
      'discharge-planning', 'home-health', 'nursing-home', 'assisted-living',
      'rehabilitation-center', 'physical-therapy', 'occupational-therapy', 'speech-therapy',
      'mental-health-services',
      
      // Medical Equipment & Devices (25 templates)
      'device-management', 'equipment-tracking', 'maintenance-schedule', 'calibration-system',
      'inventory-management', 'supply-chain', 'pharmacy-management', 'drug-inventory',
      'prescription-dispensing', 'medication-adherence', 'dosage-tracking', 'side-effect-monitoring',
      'clinical-trials', 'research-protocols', 'data-collection', 'patient-consent',
      'irb-approval', 'study-management', 'trial-monitoring', 'adverse-events',
      'quality-assurance', 'regulatory-compliance', 'audit-trail', 'documentation-system',
      'report-generation',
      
      // Health Analytics (25 templates)
      'population-health', 'epidemiology', 'disease-surveillance', 'outbreak-tracking',
      'health-trends', 'risk-assessment', 'predictive-analytics', 'clinical-decision-support',
      'treatment-recommendations', 'drug-efficacy', 'outcome-measurement', 'quality-metrics',
      'patient-satisfaction', 'provider-performance', 'cost-analysis', 'revenue-cycle',
      'billing-management', 'insurance-verification', 'prior-authorization', 'claims-processing',
      'payment-tracking', 'financial-reporting', 'budget-planning', 'resource-allocation',
      'capacity-planning'
    ]
  },

  // Finance & Fintech (100 templates)
  finance: {
    name: 'Finance & Fintech',
    icon: '💰',
    templates: [
      // Personal Finance (25 templates)
      'budget-tracker', 'expense-manager', 'income-tracker', 'savings-goals',
      'investment-portfolio', 'retirement-planner', 'debt-manager', 'credit-tracker',
      'bill-reminder', 'payment-scheduler', 'tax-planner', 'receipt-scanner',
      'financial-reports', 'spending-analytics', 'cash-flow', 'net-worth',
      'financial-goals', 'wealth-building', 'financial-education', 'money-management',
      'expense-categorization', 'budget-alerts', 'spending-limits', 'financial-dashboard',
      'personal-finance-coach',
      
      // Banking & Payments (25 templates)
      'digital-banking', 'mobile-banking', 'online-banking', 'payment-gateway',
      'mobile-payments', 'digital-wallet', 'cryptocurrency-wallet', 'p2p-payments',
      'bill-payment', 'recurring-payments', 'international-transfers', 'currency-exchange',
      'loan-management', 'mortgage-calculator', 'credit-card-management', 'debit-card-controls',
      'fraud-detection', 'transaction-monitoring', 'account-security', 'two-factor-auth',
      'biometric-auth', 'transaction-history', 'statement-generation', 'check-deposit',
      'atm-locator',
      
      // Investment & Trading (25 templates)
      'trading-platform', 'investment-platform', 'portfolio-management', 'asset-allocation',
      'risk-assessment', 'performance-tracking', 'market-analysis', 'stock-screening',
      'options-trading', 'futures-trading', 'forex-trading', 'crypto-trading',
      'robo-advisor', 'automated-investing', 'dollar-cost-averaging', 'rebalancing',
      'tax-loss-harvesting', 'dividend-tracking', 'earnings-calendar', 'news-feed',
      'research-reports', 'analyst-ratings', 'price-alerts', 'order-management',
      'execution-analytics',
      
      // Business Finance (25 templates)
      'accounting-software', 'bookkeeping', 'invoice-management', 'accounts-payable',
      'accounts-receivable', 'payroll-management', 'expense-management', 'budget-planning',
      'financial-forecasting', 'cash-flow-management', 'working-capital', 'credit-management',
      'loan-application', 'credit-assessment', 'risk-management', 'compliance-management',
      'audit-trail', 'financial-reporting', 'tax-preparation', 'regulatory-filing',
      'financial-dashboard', 'kpi-tracking', 'profit-loss', 'balance-sheet',
      'cash-flow-statement'
    ]
  },

  // IoT & Smart Devices (50 templates)
  iot: {
    name: 'IoT & Smart Devices',
    icon: '🏠',
    templates: [
      // Smart Home (25 templates)
      'smart-home-hub', 'lighting-control', 'thermostat-control', 'security-system',
      'door-lock-system', 'camera-monitoring', 'motion-detection', 'smoke-detector',
      'carbon-monoxide', 'water-leak-detector', 'flood-monitoring', 'humidity-control',
      'air-quality-monitor', 'energy-monitoring', 'solar-panel-tracking', 'battery-monitoring',
      'appliance-control', 'smart-plug', 'power-strip', 'garage-door-control',
      'window-control', 'blind-control', 'curtain-control', 'fan-control',
      'irrigation-system',
      
      // Industrial IoT (25 templates)
      'industrial-monitoring', 'equipment-tracking', 'predictive-maintenance', 'condition-monitoring',
      'vibration-analysis', 'temperature-monitoring', 'pressure-monitoring', 'flow-monitoring',
      'level-monitoring', 'quality-control', 'production-monitoring', 'efficiency-tracking',
      'energy-management', 'resource-optimization', 'safety-monitoring', 'compliance-tracking',
      'environmental-monitoring', 'emission-tracking', 'noise-monitoring', 'lighting-control',
      'access-control', 'time-attendance', 'fleet-management', 'vehicle-tracking',
      'supply-chain-tracking'
    ]
  },

  // Real Estate & Property (50 templates)
  realestate: {
    name: 'Real Estate & Property',
    icon: '🏘️',
    templates: [
      // Property Management (25 templates)
      'property-listing', 'property-search', 'property-comparison', 'virtual-tour',
      'property-valuation', 'market-analysis', 'price-estimation', 'rental-estimation',
      'property-management', 'tenant-management', 'lease-management', 'rent-collection',
      'maintenance-requests', 'property-inspection', 'document-management', 'contract-management',
      'commission-tracking', 'agent-portal', 'broker-portal', 'mls-integration',
      'lead-management', 'customer-relationship', 'marketing-automation', 'email-campaigns',
      'social-media-management',
      
      // Real Estate Analytics (25 templates)
      'market-trends', 'price-forecasting', 'demand-analysis', 'supply-analysis',
      'investment-analysis', 'roi-calculator', 'cash-flow-analysis', 'cap-rate-calculator',
      'property-performance', 'portfolio-analysis', 'risk-assessment', 'market-comparison',
      'neighborhood-analysis', 'school-district', 'crime-statistics', 'amenities-analysis',
      'transportation-access', 'walkability-score', 'property-tax', 'insurance-estimation',
      'closing-costs', 'mortgage-calculator', 'affordability-calculator', 'down-payment-calculator',
      'refinance-calculator'
    ]
  }
}

// Template generator functions
export const generateTemplate = (templateId, customizations = {}) => {
  const template = TEMPLATE_CATEGORIES[templateId.split('-')[0]]?.templates.find(t => t === templateId)
  if (!template) {
    return generateGenericTemplate(templateId, customizations)
  }
  
  // Return template configuration
  return {
    id: templateId,
    name: templateId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
    category: templateId.split('-')[0],
    files: generateTemplateFiles(templateId, customizations),
    config: generateTemplateConfig(templateId, customizations)
  }
}

const generateTemplateFiles = (templateId, customizations) => {
  // This would generate the actual HTML, CSS, JS files for each template
  // For now, return a basic structure
  return {
    'index.html': generateHTML(templateId, customizations),
    'style.css': generateCSS(templateId, customizations),
    'script.js': generateJS(templateId, customizations)
  }
}

const generateTemplateConfig = (templateId, customizations) => {
  return {
    appType: getAppType(templateId),
    language: 'javascript',
    styling: 'tailwind',
    features: getTemplateFeatures(templateId),
    integrations: getTemplateIntegrations(templateId)
  }
}

// Helper functions
const getAppType = (templateId) => {
  if (templateId.includes('mobile') || templateId.includes('app')) return 'mobile'
  if (templateId.includes('api') || templateId.includes('backend')) return 'backend'
  if (templateId.includes('dashboard') || templateId.includes('admin')) return 'dashboard'
  return 'frontend'
}

const getTemplateFeatures = (templateId) => {
  const features = []
  if (templateId.includes('auth')) features.push('authentication')
  if (templateId.includes('payment')) features.push('payments')
  if (templateId.includes('chat')) features.push('messaging')
  if (templateId.includes('analytics')) features.push('analytics')
  if (templateId.includes('mobile')) features.push('mobile-responsive')
  return features
}

const getTemplateIntegrations = (templateId) => {
  const integrations = []
  if (templateId.includes('social')) integrations.push('social-media')
  if (templateId.includes('payment')) integrations.push('stripe', 'paypal')
  if (templateId.includes('email')) integrations.push('email-service')
  if (templateId.includes('analytics')) integrations.push('google-analytics')
  return integrations
}

const generateHTML = (templateId, customizations) => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${customizations.title || templateId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>${customizations.title || templateId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</h1>
        </header>
        <main>
            <section class="content">
                <p>Generated by DreamBuild AI - ${templateId} template</p>
            </section>
        </main>
    </div>
    <script src="script.js"></script>
</body>
</html>`
}

const generateCSS = (templateId, customizations) => {
  return `/* ${templateId} Template Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    line-height: 1.6;
    color: #333;
    background: #f4f4f4;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

header {
    background: #007acc;
    color: white;
    padding: 20px;
    text-align: center;
    border-radius: 8px;
    margin-bottom: 20px;
}

.content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}`
}

const generateJS = (templateId, customizations) => {
  return `// ${templateId} Template JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('${templateId} template loaded');
    
    // Add your JavaScript functionality here
    initializeTemplate();
});

function initializeTemplate() {
    // Template initialization code
    console.log('Template initialized');
}`
}

const generateGenericTemplate = (templateId, customizations) => {
  return {
    id: templateId,
    name: templateId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
    category: 'generic',
    files: {
      'index.html': generateHTML(templateId, customizations),
      'style.css': generateCSS(templateId, customizations),
      'script.js': generateJS(templateId, customizations)
    },
    config: {
      appType: 'frontend',
      language: 'javascript',
      styling: 'tailwind',
      features: [],
      integrations: []
    }
  }
}

export default {
  TEMPLATE_CATEGORIES,
  generateTemplate
}
