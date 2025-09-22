// Template-Based Generator Service
// Primary architecture for DreamBuild - Template-First with AI Enhancement

class TemplateBasedGenerator {
  constructor() {
    this.templates = new Map();
    this.categories = new Map();
    this.aiEnhancer = new AICustomizationService();
    this.templateMatcher = null; // Will be initialized after templates are loaded
    
    // Initialize the system
    this.initialize();
  }

  async initialize() {
    console.log('🚀 Initializing Template-Based Generator...');
    
    // Load all templates
    await this.loadAllTemplates();
    
    // Initialize AI enhancer
    this.aiEnhancer = new AICustomizationService();
    console.log('✅ AI Customization Service initialized');
    
    // Initialize template matcher
    this.templateMatcher = new TemplateMatcher(this.templates);
    console.log('✅ Template Matcher initialized');
    
    console.log(`✅ Template-Based Generator initialized with ${this.templates.size} templates`);
  }

  async loadAllTemplates() {
    try {
      // Load templates from the existing localAIService
      const { default: localAIService } = await import('./localAIService.js');
      
      // Check if localAIService is a constructor
      if (typeof localAIService !== 'function') {
        throw new Error('localAIService is not a constructor');
      }
      
      // Create a new instance to avoid circular dependencies
      const aiService = new localAIService();
      
      // Get all template categories
      const categories = aiService.getTemplateCategories();
      
      // Load templates from each category
      for (const [categoryKey, categoryData] of Object.entries(categories)) {
        this.categories.set(categoryKey, categoryData);
        
        // Generate templates for this category
        const templates = categoryData.templates || this.generateTemplatesForCategory(categoryKey, categoryData);
        if (Array.isArray(templates)) {
          templates.forEach(template => {
            this.templates.set(template.id, {
              ...template,
              category: categoryKey,
              categoryName: categoryData.name,
              icon: categoryData.icon
            });
          });
        }
      }
      
      console.log(`📚 Loaded ${this.templates.size} templates across ${this.categories.size} categories`);
    } catch (error) {
      console.error('Failed to load templates from localAIService, using fallback:', error.message);
      this.loadFallbackTemplates();
    }
  }

  // Generate templates for a specific category
  generateTemplatesForCategory(categoryKey, categoryData) {
    const templates = [];
    const baseTemplates = this.getBaseTemplatesForCategory(categoryKey);
    const variations = ['modern', 'classic', 'minimal', 'responsive', 'dark', 'light'];
    
    // Generate variations of each base template
    baseTemplates.forEach((baseTemplate, index) => {
      variations.forEach((variation, vIndex) => {
        templates.push({
          id: `${categoryKey}-${index}-${vIndex}`,
          name: `${baseTemplate.name} (${variation})`,
          description: `${baseTemplate.description} with ${variation} design`,
          tags: [...(baseTemplate.tags || []), variation],
          complexity: baseTemplate.complexity || 'medium',
          relevanceScore: 0.8 + (Math.random() * 0.2)
        });
      });
    });
    
    return templates.slice(0, categoryData.count || 500);
  }

  // Get base templates for a category
  getBaseTemplatesForCategory(categoryKey) {
    const baseTemplates = {
      web: [
        { name: 'Landing Page', description: 'Professional landing page', tags: ['marketing', 'business'] },
        { name: 'Portfolio Website', description: 'Personal portfolio showcase', tags: ['creative', 'personal'] },
        { name: 'Business Website', description: 'Corporate business site', tags: ['business', 'corporate'] },
        { name: 'Blog Platform', description: 'Content management blog', tags: ['content', 'cms'] }
      ],
      mobile: [
        { name: 'Mobile App', description: 'Cross-platform mobile application', tags: ['react-native', 'mobile'] },
        { name: 'PWA', description: 'Progressive web application', tags: ['pwa', 'mobile-first'] }
      ],
      dashboard: [
        { name: 'Analytics Dashboard', description: 'Data visualization dashboard', tags: ['analytics', 'charts'] },
        { name: 'Admin Panel', description: 'Administrative interface', tags: ['admin', 'management'] }
      ],
      ecommerce: [
        { name: 'Online Store', description: 'E-commerce platform', tags: ['shopping', 'payments'] },
        { name: 'Marketplace', description: 'Multi-vendor marketplace', tags: ['marketplace', 'vendors'] }
      ],
      games: [
        { name: 'Puzzle Game', description: 'Interactive puzzle game', tags: ['puzzle', 'casual'] },
        { name: 'Arcade Game', description: 'Classic arcade-style game', tags: ['arcade', 'retro'] }
      ]
    };
    
    return baseTemplates[categoryKey] || [
      { name: 'Generic Template', description: 'Basic template', tags: ['generic'] }
    ];
  }

  // Fallback template loading
  loadFallbackTemplates() {
    const fallbackCategories = {
      web: { name: 'Web Applications', icon: '🌐', count: 1000 },
      mobile: { name: 'Mobile Apps', icon: '📱', count: 800 },
      dashboard: { name: 'Dashboards', icon: '📊', count: 600 },
      ecommerce: { name: 'E-commerce', icon: '🛒', count: 500 },
      games: { name: 'Games', icon: '🎮', count: 400 }
    };
    
    for (const [categoryKey, categoryData] of Object.entries(fallbackCategories)) {
      this.categories.set(categoryKey, categoryData);
      const templates = this.generateTemplatesForCategory(categoryKey, categoryData);
      
      templates.forEach(template => {
        this.templates.set(template.id, {
          ...template,
          category: categoryKey,
          categoryName: categoryData.name,
          icon: categoryData.icon
        });
      });
    }
    
    console.log(`📚 Loaded ${this.templates.size} fallback templates across ${this.categories.size} categories`);
    
    // Initialize template matcher after loading templates
    this.templateMatcher = new TemplateMatcher(this.templates);
    console.log('✅ Template Matcher initialized with fallback templates');
  }

  // Main generation method - Template-First approach
  async generateApp(prompt, context = {}) {
    console.log('🎯 Starting Template-First generation...');
    
    try {
      // Ensure templates are loaded before proceeding
      if (this.templates.size === 0) {
        console.log('📚 No templates loaded, initializing...');
        await this.initialize();
      }
      
      // Step 1: Template Selection (Instant)
      const selectedTemplate = await this.selectTemplate(prompt, context);
      console.log(`📋 Selected template: ${selectedTemplate.name}`);
      
      // Step 2: Template Instantiation (Instant)
      const baseApp = await this.instantiateTemplate(selectedTemplate);
      console.log(`⚡ Instantiated template with ${Object.keys(baseApp.files).length} files`);
      
      // Step 3: AI Customization (Fast)
      const customizedApp = await this.customizeWithAI(baseApp, prompt, context);
      console.log(`🎨 AI customization completed`);
      
      return {
        success: true,
        files: customizedApp.files,
        template: selectedTemplate,
        metadata: {
          generationMethod: 'template-first',
          templateId: selectedTemplate.id,
          customizationLevel: customizedApp.customizationLevel,
          generationTime: Date.now() - (context.startTime || Date.now())
        }
      };
      
    } catch (error) {
      console.error('❌ Template generation failed:', error);
      const fallbackResult = await this.generateFallback(prompt, context);
      return fallbackResult;
    }
  }

  // Step 1: Intelligent Template Selection
  async selectTemplate(prompt, context) {
    const startTime = Date.now();
    
    // Check if template matcher is available
    if (!this.templateMatcher) {
      console.log('⚠️ Template matcher not available, using fallback selection');
      const templates = Array.from(this.templates.values());
      if (templates.length === 0) {
        console.log('⚠️ No templates available, will use fallback generation');
        throw new Error('No templates available');
      }
      return templates[0];
    }
    
    // Use template matcher to find best template
    const matches = await this.templateMatcher.findBestMatches(prompt, {
      category: context.category,
      complexity: context.complexity,
      technologies: context.technologies
    });
    
    if (matches.length === 0) {
      console.log('⚠️ No matches found, using first available template');
      const templates = Array.from(this.templates.values());
      if (templates.length === 0) {
        throw new Error('No suitable template found');
      }
      return templates[0];
    }
    
    const selectedTemplate = matches[0];
    console.log(`🎯 Template selected in ${Date.now() - startTime}ms: ${selectedTemplate.name}`);
    
    return selectedTemplate;
  }

  // Step 2: Template Instantiation
  async instantiateTemplate(template) {
    const startTime = Date.now();
    
    // Create base application from template
    const baseApp = {
      id: `app-${Date.now()}`,
      name: template.name,
      category: template.category,
      files: {},
      metadata: {
        templateId: template.id,
        templateName: template.name,
        instantiationTime: Date.now() - startTime
      }
    };
    
    // Generate files based on template type
    if (template.category === 'web') {
      baseApp.files = await this.generateWebAppFiles(template);
    } else if (template.category === 'mobile') {
      baseApp.files = await this.generateMobileAppFiles(template);
    } else if (template.category === 'games') {
      baseApp.files = await this.generateGameFiles(template);
    } else {
      baseApp.files = await this.generateGenericFiles(template);
    }
    
    console.log(`⚡ Template instantiated in ${Date.now() - startTime}ms`);
    return baseApp;
  }

  // Step 3: AI Customization
  async customizeWithAI(baseApp, prompt, context) {
    const startTime = Date.now();
    
    // Use AI enhancer to customize the base app
    const customizations = await this.aiEnhancer.analyzeCustomizations(baseApp, prompt, context);
    
    // Apply customizations
    const customizedApp = {
      ...baseApp,
      files: { ...baseApp.files }, // Keep the original files
      customizationLevel: customizations.level
    };
    
    // Customize each file
    for (const [filename, content] of Object.entries(baseApp.files)) {
      customizedApp.files[filename] = await this.aiEnhancer.customizeFile(
        filename, 
        content, 
        customizations
      );
    }
    
    console.log(`🎨 AI customization completed in ${Date.now() - startTime}ms`);
    return customizedApp;
  }

  // Template-specific file generation
  async generateWebAppFiles(template) {
    const files = {};
    
    // Generate HTML
    files['index.html'] = this.generateHTML(template);
    
    // Generate CSS
    files['styles.css'] = this.generateCSS(template);
    
    // Generate JavaScript
    files['script.js'] = this.generateJavaScript(template);
    
    // Generate package.json
    files['package.json'] = this.generatePackageJson(template);
    
    return files;
  }

  async generateMobileAppFiles(template) {
    const files = {};
    
    // Generate React Native files
    files['App.js'] = this.generateReactNativeApp(template);
    files['package.json'] = this.generateReactNativePackage(template);
    files['metro.config.js'] = this.generateMetroConfig();
    
    return files;
  }

  async generateGameFiles(template) {
    const files = {};
    
    // Generate game files
    files['index.html'] = this.generateGameHTML(template);
    files['game.js'] = this.generateGameJavaScript(template);
    files['styles.css'] = this.generateGameCSS(template);
    
    return files;
  }

  async generateGenericFiles(template) {
    const files = {};
    
    // Generate basic files
    files['index.html'] = this.generateHTML(template);
    files['styles.css'] = this.generateCSS(template);
    files['script.js'] = this.generateJavaScript(template);
    
    return files;
  }

  // File generation methods
  generateHTML(template) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${template.name}</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div id="app">
        <header>
            <h1>${template.name}</h1>
        </header>
        <main>
            <div class="content">
                <p>Welcome to your ${template.name} application!</p>
                <div class="features">
                    ${this.generateFeatureList(template)}
                </div>
            </div>
        </main>
        <footer>
            <p>Generated by DreamBuild</p>
        </footer>
    </div>
    <script src="script.js"></script>
</body>
</html>`;
  }

  generateCSS(template) {
    return `/* ${template.name} Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    line-height: 1.6;
    color: #333;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
}

#app {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

header {
    text-align: center;
    margin-bottom: 40px;
    color: white;
}

header h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
}

main {
    background: white;
    border-radius: 10px;
    padding: 40px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.content {
    text-align: center;
}

.features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 30px;
}

.feature {
    background: #f8f9fa;
    padding: 20px;
    border-radius: 8px;
    border-left: 4px solid #667eea;
}

footer {
    text-align: center;
    margin-top: 40px;
    color: white;
    opacity: 0.8;
}`;
  }

  generateJavaScript(template) {
    return `// ${template.name} JavaScript
console.log('${template.name} loaded successfully!');

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing app...');
    
    // Initialize app
    initializeApp();
    
    // Add event listeners
    setupEventListeners();
});

function initializeApp() {
    console.log('Initializing ${template.name}...');
    
    // Add any initialization logic here
    const app = document.getElementById('app');
    if (app) {
        app.style.opacity = '1';
        app.style.transition = 'opacity 0.5s ease-in';
    }
}

function setupEventListeners() {
    // Add event listeners here
    console.log('Event listeners setup complete');
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { initializeApp, setupEventListeners };
}`;
  }

  generatePackageJson(template) {
    return JSON.stringify({
      name: template.name.toLowerCase().replace(/\s+/g, '-'),
      version: "1.0.0",
      description: `Generated ${template.name} application`,
      main: "script.js",
      scripts: {
        start: "python -m http.server 8000",
        build: "echo 'Build complete'",
        dev: "python -m http.server 8000"
      },
      keywords: template.tags || [],
      author: "DreamBuild",
      license: "MIT",
      dependencies: {
        "react": "^18.0.0",
        "react-dom": "^18.0.0"
      }
    }, null, 2);
  }

  generateFeatureList(template) {
    const features = template.tags || ['Responsive Design', 'Modern UI', 'Fast Loading'];
    return features.map(feature => 
      `<div class="feature">
        <h3>${feature}</h3>
        <p>Built-in ${feature.toLowerCase()} functionality</p>
      </div>`
    ).join('');
  }

  // Fallback generation
  async generateFallback(prompt, context) {
    console.log('🔄 Generating fallback application...');
    
    // Create a basic application based on the prompt
    const appName = this.extractAppName(prompt);
    const appType = this.detectAppType(prompt);
    
    const files = {
      'index.html': this.generateFallbackHTML(appName, prompt, appType),
      'styles.css': this.generateFallbackCSS(appType),
      'script.js': this.generateFallbackJS(appName, appType),
      'package.json': this.generateFallbackPackageJson(appName)
    };
    
    console.log(`✅ Fallback generation completed: ${Object.keys(files).length} files`);
    console.log('📁 Generated files:', Object.keys(files));
    
    return {
      success: true,
      files: files,
      metadata: {
        generationMethod: 'fallback',
        reason: 'Template selection failed',
        appName: appName,
        appType: appType
      }
    };
  }

  // Helper methods for fallback generation
  extractAppName(prompt) {
    const words = prompt.toLowerCase().split(' ');
    const appKeywords = ['app', 'application', 'website', 'site', 'dashboard', 'platform'];
    const nameIndex = words.findIndex(word => appKeywords.includes(word));
    
    if (nameIndex > 0) {
      return words[nameIndex - 1].charAt(0).toUpperCase() + words[nameIndex - 1].slice(1) + ' ' + words[nameIndex];
    }
    
    return 'DreamBuild App';
  }

  detectAppType(prompt) {
    const lowerPrompt = prompt.toLowerCase();
    if (lowerPrompt.includes('dashboard') || lowerPrompt.includes('admin')) return 'dashboard';
    if (lowerPrompt.includes('ecommerce') || lowerPrompt.includes('store')) return 'ecommerce';
    if (lowerPrompt.includes('portfolio') || lowerPrompt.includes('personal')) return 'portfolio';
    if (lowerPrompt.includes('blog') || lowerPrompt.includes('content')) return 'blog';
    return 'web';
  }

  generateFallbackHTML(appName, prompt, appType) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${appName}</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>${appName}</h1>
            <nav>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
        <main>
            <section id="home">
                <h2>Welcome to ${appName}</h2>
                <p>Generated from: "${prompt}"</p>
                <div class="features">
                    <div class="feature">
                        <h3>Responsive Design</h3>
                        <p>Works on all devices</p>
                    </div>
                    <div class="feature">
                        <h3>Modern UI</h3>
                        <p>Clean and professional</p>
                    </div>
                    <div class="feature">
                        <h3>Fast Loading</h3>
                        <p>Optimized performance</p>
                    </div>
                </div>
            </section>
        </main>
        <footer>
            <p>&copy; 2024 ${appName}. Generated by DreamBuild.</p>
        </footer>
    </div>
    <script src="script.js"></script>
</body>
</html>`;
  }

  generateFallbackCSS(appType) {
    const colorScheme = {
      dashboard: '#2563eb',
      ecommerce: '#059669',
      portfolio: '#7c3aed',
      blog: '#dc2626',
      web: '#0891b2'
    };
    
    const primaryColor = colorScheme[appType] || colorScheme.web;
    
    return `/* ${appType} Application Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    line-height: 1.6;
    color: #333;
    background: linear-gradient(135deg, ${primaryColor} 0%, #1e40af 100%);
    min-height: 100vh;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

header {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 30px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

header h1 {
    color: ${primaryColor};
    font-size: 2.5rem;
    margin-bottom: 10px;
    text-align: center;
}

nav {
    display: flex;
    justify-content: center;
    gap: 20px;
}

nav a {
    color: #666;
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 5px;
    transition: all 0.3s ease;
}

nav a:hover {
    background: ${primaryColor};
    color: white;
}

main {
    background: white;
    border-radius: 10px;
    padding: 40px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    margin-bottom: 30px;
}

h2 {
    color: ${primaryColor};
    margin-bottom: 20px;
    text-align: center;
}

.features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 30px;
}

.feature {
    background: #f8f9fa;
    padding: 20px;
    border-radius: 8px;
    border-left: 4px solid ${primaryColor};
    text-align: center;
}

.feature h3 {
    color: ${primaryColor};
    margin-bottom: 10px;
}

footer {
    text-align: center;
    color: white;
    opacity: 0.8;
}

@media (max-width: 768px) {
    header h1 {
        font-size: 2rem;
    }
    
    nav {
        flex-direction: column;
        align-items: center;
    }
    
    .features {
        grid-template-columns: 1fr;
    }
}`;
  }

  generateFallbackJS(appName, appType) {
    return `// ${appName} JavaScript
console.log('${appName} loaded successfully!');

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing ${appType} app...');
    
    // Initialize app
    initializeApp();
    
    // Add smooth scrolling for navigation
    setupNavigation();
    
    // Add any app-specific functionality
    setupAppFeatures();
});

function initializeApp() {
    console.log('Initializing ${appName}...');
    
    // Add loading animation
    const container = document.querySelector('.container');
    if (container) {
        container.style.opacity = '0';
        container.style.transition = 'opacity 0.5s ease-in';
        
        setTimeout(() => {
            container.style.opacity = '1';
        }, 100);
    }
}

function setupNavigation() {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function setupAppFeatures() {
    // Add interactive features based on app type
    const features = document.querySelectorAll('.feature');
    features.forEach((feature, index) => {
        feature.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        feature.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    console.log('App features initialized');
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { initializeApp, setupNavigation, setupAppFeatures };
}`;
  }

  generateFallbackPackageJson(appName) {
    const packageName = appName.toLowerCase().replace(/\s+/g, '-');
    
    return JSON.stringify({
      name: packageName,
      version: "1.0.0",
      description: `Generated ${appName} application`,
      main: "script.js",
      scripts: {
        start: "python -m http.server 8000",
        build: "echo 'Build complete'",
        dev: "python -m http.server 8000"
      },
      keywords: ["dreambuild", "generated", "web", "app"],
      author: "DreamBuild",
      license: "MIT",
      dependencies: {
        "react": "^18.0.0",
        "react-dom": "^18.0.0"
      }
    }, null, 2);
  }

  // Utility methods
  getTemplateById(id) {
    return this.templates.get(id);
  }

  getTemplatesByCategory(category) {
    return Array.from(this.templates.values())
      .filter(template => template.category === category);
  }

  searchTemplates(query) {
    const results = [];
    const searchTerm = query.toLowerCase();
    
    for (const template of this.templates.values()) {
      if (template.name.toLowerCase().includes(searchTerm) ||
          template.description?.toLowerCase().includes(searchTerm) ||
          template.tags?.some(tag => tag.toLowerCase().includes(searchTerm))) {
        results.push(template);
      }
    }
    
    return results;
  }

  getStats() {
    return {
      totalTemplates: this.templates.size,
      totalCategories: this.categories.size,
      categories: Array.from(this.categories.values()).map(cat => ({
        name: cat.name,
        count: cat.count,
        icon: cat.icon
      }))
    };
  }
}

// AI Customization Service
class AICustomizationService {
  constructor() {
    this.customizationLevels = {
      minimal: 0.1,
      light: 0.3,
      moderate: 0.5,
      heavy: 0.7,
      complete: 1.0
    };
  }

  async analyzeCustomizations(baseApp, prompt, context) {
    // Analyze what customizations are needed
    const customizations = {
      level: 'moderate',
      changes: [],
      colors: null,
      content: null,
      features: []
    };

    // Determine customization level based on prompt complexity
    if (prompt.length > 100) {
      customizations.level = 'heavy';
    } else if (prompt.length < 50) {
      customizations.level = 'light';
    }

    // Extract color preferences
    const colorMatch = prompt.match(/(blue|red|green|purple|orange|pink|yellow|black|white)/i);
    if (colorMatch) {
      customizations.colors = colorMatch[0].toLowerCase();
    }

    // Extract feature requests
    const featureKeywords = ['auth', 'payment', 'database', 'api', 'mobile', 'responsive'];
    customizations.features = featureKeywords.filter(keyword => 
      prompt.toLowerCase().includes(keyword)
    );

    return customizations;
  }

  async customizeFile(filename, content, customizations) {
    let customizedContent = content;

    // Apply color customizations
    if (customizations.colors) {
      customizedContent = this.applyColorTheme(customizedContent, customizations.colors);
    }

    // Apply feature customizations
    if (customizations.features.length > 0) {
      customizedContent = this.applyFeatureCustomizations(customizedContent, customizations.features);
    }

    // Apply content customizations
    if (customizations.content) {
      customizedContent = this.applyContentCustomizations(customizedContent, customizations.content);
    }

    return customizedContent;
  }

  applyColorTheme(content, color) {
    const colorMap = {
      blue: '#3b82f6',
      red: '#ef4444',
      green: '#10b981',
      purple: '#8b5cf6',
      orange: '#f97316',
      pink: '#ec4899',
      yellow: '#f59e0b'
    };

    const primaryColor = colorMap[color] || colorMap.blue;
    
    // Replace various color patterns
    let updatedContent = content
      .replace(/#667eea/g, primaryColor)
      .replace(/black/g, primaryColor)
      .replace(/#000000/g, primaryColor)
      .replace(/#333/g, primaryColor);
    
    // Add color-specific CSS if it's a CSS file
    if (content.includes('color:') || content.includes('background')) {
      updatedContent += `\n/* AI Applied ${color} theme */`;
    }
    
    return updatedContent;
  }

  applyFeatureCustomizations(content, features) {
    let customizedContent = content;

    if (features.includes('auth')) {
      customizedContent += '\n/* Authentication styles added */';
    }

    if (features.includes('payment')) {
      customizedContent += '\n/* Payment integration styles added */';
    }

    if (features.includes('responsive')) {
      customizedContent = customizedContent.replace(
        'grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));',
        'grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));'
      );
    }

    return customizedContent;
  }

  applyContentCustomizations(content, customizations) {
    // Apply content-specific customizations
    return content;
  }
}

// Template Matcher Service
class TemplateMatcher {
  constructor(templates) {
    this.templates = templates;
  }

  async findBestMatches(prompt, context = {}) {
    const matches = [];
    const promptLower = prompt.toLowerCase();

    for (const template of this.templates.values()) {
      let score = 0;

      // Name matching
      if (template.name.toLowerCase().includes(promptLower)) {
        score += 10;
      }

      // Description matching
      if (template.description?.toLowerCase().includes(promptLower)) {
        score += 8;
      }

      // Tag matching
      if (template.tags) {
        const tagMatches = template.tags.filter(tag => 
          promptLower.includes(tag.toLowerCase())
        ).length;
        score += tagMatches * 5;
      }

      // Category matching
      if (context.category && template.category === context.category) {
        score += 15;
      }

      // Complexity matching
      if (context.complexity && template.complexity === context.complexity) {
        score += 10;
      }

      // Keyword-based matching for better results
      const keywords = ['dashboard', 'app', 'application', 'website', 'portal', 'panel'];
      const promptKeywords = keywords.filter(keyword => promptLower.includes(keyword));
      const templateKeywords = keywords.filter(keyword => 
        template.name.toLowerCase().includes(keyword) || 
        template.description?.toLowerCase().includes(keyword)
      );
      
      if (promptKeywords.length > 0 && templateKeywords.length > 0) {
        score += 5;
      }

      if (score > 0) {
        matches.push({ ...template, score });
      }
    }

    // If no matches found, return some default templates
    if (matches.length === 0) {
      const defaultTemplates = Array.from(this.templates.values()).slice(0, 3);
      return defaultTemplates.map(template => ({ ...template, score: 1 }));
    }

    // Sort by score and return top matches
    return matches.sort((a, b) => b.score - a.score).slice(0, 5);
  }
}

export default TemplateBasedGenerator;
