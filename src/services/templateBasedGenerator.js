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
    console.log('🚀 Initializing Template-Based Generator with Unlimited Support...');

    // Load unlimited template generator
    const { default: UnlimitedTemplateGenerator } = await import('./unlimitedTemplateGenerator.js');
    this.unlimitedGenerator = new UnlimitedTemplateGenerator();
    await this.unlimitedGenerator.initialize();

    // Load all templates
    await this.loadAllTemplates();
    
    // Initialize AI enhancer
    this.aiEnhancer = new AICustomizationService();

    // Initialize template matcher
    this.templateMatcher = new TemplateMatcher(this.templates);

    console.log('✅ Template-Based Generator initialized with unlimited support');
  }

  async loadAllTemplates() {
    try {
      // Load unlimited templates first
      const unlimitedTemplates = this.unlimitedGenerator.getAllTemplates();
      console.log(`📊 Loaded ${unlimitedTemplates.size} unlimited templates`);

      // Merge unlimited templates with existing templates
      for (const [id, template] of unlimitedTemplates) {
        this.templates.set(id, {
          ...template,
          isUnlimited: true,
          source: 'unlimited'
        });
      }

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
              icon: categoryData.icon,
              isUnlimited: false,
              source: 'legacy'
            });
          });
        }
      }

      console.log(`✅ Total templates loaded: ${this.templates.size} (${unlimitedTemplates.size} unlimited + ${this.templates.size - unlimitedTemplates.size} legacy)`);

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

    // Initialize template matcher after loading templates
    this.templateMatcher = new TemplateMatcher(this.templates);

  }

  // Main generation method - Template-First approach
  async generateApp(prompt, context = {}) {

    try {
      // Ensure templates are loaded before proceeding
      if (this.templates.size === 0) {

        await this.initialize();
      }
      
      // Step 1: Template Selection (Instant)
      const selectedTemplate = await this.selectTemplate(prompt, context);

      // Step 2: Template Instantiation (Instant)
      const baseApp = await this.instantiateTemplate(selectedTemplate);
      console.log(`⚡ Instantiated template with ${Object.keys(baseApp.files).length} files`);
      
      // Step 3: AI Customization (Fast)
      const customizedApp = await this.customizeWithAI(baseApp, prompt, context);

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
    
    // Check if this is a request for unlimited app types
    if (context.unlimited || prompt.toLowerCase().includes('unlimited') || prompt.toLowerCase().includes('any app')) {
      console.log('🔄 Generating dynamic template for unlimited app type...');
      const dynamicTemplate = await this.unlimitedGenerator.generateDynamicTemplate(prompt);
      this.templates.set(dynamicTemplate.id, dynamicTemplate);
      console.log(`🎯 Dynamic template created in ${Date.now() - startTime}ms: ${dynamicTemplate.name}`);
      return dynamicTemplate;
    }
    
    // Check if template matcher is available
    if (!this.templateMatcher) {
      const templates = Array.from(this.templates.values());
      if (templates.length === 0) {
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
      // If no matches found, try generating a dynamic template
      console.log('🔄 No template matches found, generating dynamic template...');
      const dynamicTemplate = await this.unlimitedGenerator.generateDynamicTemplate(prompt);
      this.templates.set(dynamicTemplate.id, dynamicTemplate);
      console.log(`🎯 Dynamic template created in ${Date.now() - startTime}ms: ${dynamicTemplate.name}`);
      return dynamicTemplate;
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
        instantiationTime: Date.now() - startTime,
        isUnlimited: template.isUnlimited || false,
        patterns: template.patterns || []
      }
    };
    
    // Generate files based on template type and patterns
    if (template.isUnlimited && template.patterns) {
      // Generate files based on unlimited patterns
      baseApp.files = await this.generateUnlimitedAppFiles(template);
    } else if (template.category === 'web') {
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

document.addEventListener('DOMContentLoaded', function() {

    // Initialize app
    initializeApp();
    
    // Add event listeners
    setupEventListeners();
});

function initializeApp() {

    // Add any initialization logic here
    const app = document.getElementById('app');
    if (app) {
        app.style.opacity = '1';
        app.style.transition = 'opacity 0.5s ease-in';
    }
}

function setupEventListeners() {
    // Add event listeners here

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

document.addEventListener('DOMContentLoaded', function() {

    // Initialize app
    initializeApp();
    
    // Add smooth scrolling for navigation
    setupNavigation();
    
    // Add any app-specific functionality
    setupAppFeatures();
});

function initializeApp() {

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

  // Generate unlimited app files based on patterns
  async generateUnlimitedAppFiles(template) {
    const files = {};
    const patterns = template.patterns || [];
    
    console.log(`🔄 Generating unlimited app files for patterns: ${patterns.join(', ')}`);
    
    // Generate HTML based on patterns
    files['index.html'] = this.generateUnlimitedHTML(template, patterns);
    
    // Generate CSS based on patterns
    files['styles.css'] = this.generateUnlimitedCSS(template, patterns);
    
    // Generate JavaScript based on patterns
    files['script.js'] = this.generateUnlimitedJS(template, patterns);
    
    // Add pattern-specific files
    if (patterns.includes('chart') || patterns.includes('analytics')) {
      files['chart.js'] = this.generateChartJS();
    }
    
    if (patterns.includes('game') || patterns.includes('physics')) {
      files['game.js'] = this.generateGameJS();
    }
    
    if (patterns.includes('auth') || patterns.includes('api')) {
      files['api.js'] = this.generateAPIJS();
    }
    
    return files;
  }

  generateUnlimitedHTML(template, patterns) {
    const hasDashboard = patterns.includes('dashboard');
    const hasNavigation = patterns.includes('navigation');
    const hasModal = patterns.includes('modal');
    const hasSidebar = patterns.includes('sidebar');
    const hasForm = patterns.includes('form');
    const hasTable = patterns.includes('table');
    const hasChart = patterns.includes('chart');
    const hasGame = patterns.includes('game') || patterns.includes('physics');
    
    let html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${template.name}</title>
    <link rel="stylesheet" href="styles.css">`;
    
    if (hasChart) {
      html += `
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>`;
    }
    
    html += `
</head>
<body>
    <div id="app">`;
    
    if (hasNavigation) {
      html += `
        <nav class="navbar">
            <div class="nav-brand">${template.name}</div>
            <div class="nav-links">
                <a href="#home">Home</a>
                <a href="#features">Features</a>
                <a href="#about">About</a>
            </div>
        </nav>`;
    }
    
    if (hasSidebar) {
      html += `
        <div class="sidebar">
            <h3>Menu</h3>
            <ul>
                <li><a href="#dashboard">Dashboard</a></li>
                <li><a href="#data">Data</a></li>
                <li><a href="#settings">Settings</a></li>
            </ul>
        </div>`;
    }
    
    html += `
        <main class="main-content">`;
    
    if (hasDashboard) {
      html += `
            <div class="dashboard">
                <h1>${template.name} Dashboard</h1>
                <div class="dashboard-grid">`;
      
      if (hasChart) {
        html += `
                    <div class="chart-container">
                        <canvas id="mainChart"></canvas>
                    </div>`;
      }
      
      if (hasTable) {
        html += `
                    <div class="table-container">
                        <table id="dataTable">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody id="tableBody">
                            </tbody>
                        </table>
                    </div>`;
      }
      
      html += `
                </div>
            </div>`;
    } else {
      html += `
            <div class="content">
                <h1>${template.name}</h1>
                <p>${template.description || 'A dynamically generated application'}</p>`;
      
      if (hasForm) {
        html += `
                <form id="mainForm" class="app-form">
                    <div class="form-group">
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="name" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    <button type="submit">Submit</button>
                </form>`;
      }
      
      if (hasGame) {
        html += `
                <div class="game-container">
                    <canvas id="gameCanvas" width="800" height="600"></canvas>
                    <div class="game-controls">
                        <button id="startGame">Start Game</button>
                        <button id="pauseGame">Pause</button>
                        <div id="score">Score: 0</div>
                    </div>
                </div>`;
      }
      
      html += `
            </div>`;
    }
    
    html += `
        </main>`;
    
    if (hasModal) {
      html += `
        <div id="modal" class="modal">
            <div class="modal-content">
                <span class="close">&times;</span>
                <h2>Modal Title</h2>
                <p>Modal content goes here.</p>
            </div>
        </div>`;
    }
    
    html += `
    </div>
    <script src="script.js"></script>`;
    
    if (hasChart) {
      html += `
    <script src="chart.js"></script>`;
    }
    
    if (hasGame) {
      html += `
    <script src="game.js"></script>`;
    }
    
    if (patterns.includes('auth') || patterns.includes('api')) {
      html += `
    <script src="api.js"></script>`;
    }
    
    html += `
</body>
</html>`;
    
    return html;
  }

  generateUnlimitedCSS(template, patterns) {
    const hasDashboard = patterns.includes('dashboard');
    const hasSidebar = patterns.includes('sidebar');
    const hasModal = patterns.includes('modal');
    const hasGame = patterns.includes('game') || patterns.includes('physics');
    
    let css = `/* ${template.name} - Unlimited App Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: #333;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
}

#app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}`;

    if (hasSidebar) {
      css += `
.sidebar {
    width: 250px;
    background: #2c3e50;
    color: white;
    padding: 20px;
    position: fixed;
    height: 100vh;
    left: 0;
    top: 0;
    z-index: 1000;
}

.sidebar h3 {
    margin-bottom: 20px;
    color: #ecf0f1;
}

.sidebar ul {
    list-style: none;
}

.sidebar li {
    margin-bottom: 10px;
}

.sidebar a {
    color: #bdc3c7;
    text-decoration: none;
    padding: 10px;
    display: block;
    border-radius: 5px;
    transition: background 0.3s;
}

.sidebar a:hover {
    background: #34495e;
    color: white;
}

.main-content {
    margin-left: 250px;
    padding: 20px;
    flex: 1;
}`;
    } else {
      css += `
.main-content {
    padding: 20px;
    flex: 1;
}`;
    }

    if (hasDashboard) {
      css += `
.dashboard {
    background: white;
    border-radius: 10px;
    padding: 30px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.dashboard h1 {
    color: #2c3e50;
    margin-bottom: 30px;
    text-align: center;
}

.dashboard-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
}

.chart-container, .table-container {
    background: #f8f9fa;
    padding: 20px;
    border-radius: 8px;
    border: 1px solid #e9ecef;
}

.table-container {
    overflow-x: auto;
}

table {
    width: 100%;
    border-collapse: collapse;
}

th, td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #dee2e6;
}

th {
    background: #e9ecef;
    font-weight: 600;
}`;
    } else {
      css += `
.content {
    background: white;
    border-radius: 10px;
    padding: 40px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
}

.content h1 {
    color: #2c3e50;
    margin-bottom: 20px;
    font-size: 2.5em;
}

.content p {
    color: #7f8c8d;
    font-size: 1.2em;
    margin-bottom: 30px;
}`;
    }

    css += `
.navbar {
    background: #2c3e50;
    color: white;
    padding: 15px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.nav-brand {
    font-size: 1.5em;
    font-weight: bold;
}

.nav-links {
    display: flex;
    gap: 20px;
}

.nav-links a {
    color: white;
    text-decoration: none;
    padding: 8px 16px;
    border-radius: 5px;
    transition: background 0.3s;
}

.nav-links a:hover {
    background: #34495e;
}

.app-form {
    max-width: 400px;
    margin: 0 auto;
    text-align: left;
}

.form-group {
    margin-bottom: 20px;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: 600;
    color: #2c3e50;
}

.form-group input {
    width: 100%;
    padding: 12px;
    border: 2px solid #e9ecef;
    border-radius: 5px;
    font-size: 16px;
    transition: border-color 0.3s;
}

.form-group input:focus {
    outline: none;
    border-color: #667eea;
}

button {
    background: #667eea;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background 0.3s;
}

button:hover {
    background: #5a6fd8;
}

button:active {
    transform: translateY(1px);
}`;

    if (hasGame) {
      css += `
.game-container {
    margin-top: 30px;
    text-align: center;
}

#gameCanvas {
    border: 2px solid #2c3e50;
    border-radius: 10px;
    background: #ecf0f1;
    display: block;
    margin: 0 auto 20px;
}

.game-controls {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

#score {
    font-size: 1.2em;
    font-weight: bold;
    color: #2c3e50;
}`;
    }

    if (hasModal) {
      css += `
.modal {
    display: none;
    position: fixed;
    z-index: 2000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
}

.modal-content {
    background-color: white;
    margin: 15% auto;
    padding: 20px;
    border-radius: 10px;
    width: 80%;
    max-width: 500px;
    position: relative;
}

.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
}

.close:hover {
    color: #000;
}`;
    }

    css += `
@media (max-width: 768px) {
    .main-content {
        padding: 10px;
    }
    
    .content {
        padding: 20px;
    }
    
    .content h1 {
        font-size: 2em;
    }
    
    .dashboard-grid {
        grid-template-columns: 1fr;
    }
    
    .nav-links {
        flex-direction: column;
        gap: 10px;
    }
    
    #gameCanvas {
        width: 100%;
        max-width: 400px;
        height: auto;
    }
}`;

    return css;
  }

  generateUnlimitedJS(template, patterns) {
    const hasDashboard = patterns.includes('dashboard');
    const hasForm = patterns.includes('form');
    const hasTable = patterns.includes('table');
    const hasModal = patterns.includes('modal');
    const hasGame = patterns.includes('game') || patterns.includes('physics');
    const hasChart = patterns.includes('chart');
    
    let js = `// ${template.name} - Unlimited App JavaScript
console.log('${template.name} loaded successfully!');

// Application state
const AppState = {
    data: [],
    currentUser: null,
    isInitialized: false
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing ${template.name}...');
    initializeApp();
});

async function initializeApp() {
    try {
        console.log('Initializing ${template.name}...');
        
        // Initialize based on patterns
        ${hasDashboard ? 'await initializeDashboard();' : ''}
        ${hasForm ? 'initializeForms();' : ''}
        ${hasTable ? 'initializeTable();' : ''}
        ${hasModal ? 'initializeModal();' : ''}
        ${hasGame ? 'initializeGame();' : ''}
        ${hasChart ? 'initializeChart();' : ''}
        
        AppState.isInitialized = true;
        console.log('${template.name} initialized successfully!');
        
    } catch (error) {
        console.error('Error initializing ${template.name}:', error);
    }
}`;

    if (hasDashboard) {
      js += `

// Dashboard functionality
async function initializeDashboard() {
    console.log('Initializing dashboard...');
    
    // Load dashboard data
    await loadDashboardData();
    
    // Setup dashboard interactions
    setupDashboardInteractions();
}

async function loadDashboardData() {
    try {
        // Simulate API call
        const mockData = [
            { id: 1, name: 'Item 1', status: 'Active' },
            { id: 2, name: 'Item 2', status: 'Inactive' },
            { id: 3, name: 'Item 3', status: 'Active' }
        ];
        
        AppState.data = mockData;
        console.log('Dashboard data loaded:', mockData);
        
    } catch (error) {
        console.error('Error loading dashboard data:', error);
    }
}

function setupDashboardInteractions() {
    console.log('Setting up dashboard interactions...');
    
    // Add any dashboard-specific interactions here
}`;
    }

    if (hasForm) {
      js += `

// Form functionality
function initializeForms() {
    console.log('Initializing forms...');
    
    const form = document.getElementById('mainForm');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
}

function handleFormSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    console.log('Form submitted:', data);
    
    // Process form data
    processFormData(data);
    
    // Show success message
    showNotification('Form submitted successfully!', 'success');
    
    // Reset form
    event.target.reset();
}

function processFormData(data) {
    console.log('Processing form data:', data);
    
    // Add form data to app state
    AppState.data.push({
        id: Date.now(),
        ...data,
        timestamp: new Date().toISOString()
    });
    
    // Update table if exists
    if (document.getElementById('dataTable')) {
        updateTable();
    }
}`;
    }

    if (hasTable) {
      js += `

// Table functionality
function initializeTable() {
    console.log('Initializing table...');
    updateTable();
}

function updateTable() {
    const tableBody = document.getElementById('tableBody');
    if (!tableBody) return;
    
    tableBody.innerHTML = '';
    
    AppState.data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = \`
            <td>\${item.id}</td>
            <td>\${item.name || 'N/A'}</td>
            <td>\${item.status || 'Unknown'}</td>
            <td>
                <button onclick="editItem(\${item.id})">Edit</button>
                <button onclick="deleteItem(\${item.id})">Delete</button>
            </td>
        \`;
        tableBody.appendChild(row);
    });
}

function editItem(id) {
    const item = AppState.data.find(item => item.id === id);
    if (item) {
        console.log('Editing item:', item);
        showNotification(\`Editing \${item.name}\`, 'info');
    }
}

function deleteItem(id) {
    const index = AppState.data.findIndex(item => item.id === id);
    if (index !== -1) {
        AppState.data.splice(index, 1);
        updateTable();
        showNotification('Item deleted successfully!', 'success');
    }
}`;
    }

    if (hasModal) {
      js += `

// Modal functionality
function initializeModal() {
    console.log('Initializing modal...');
    
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.close');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    
    if (modal) {
        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                closeModal();
            }
        });
    }
}

function openModal() {
    const modal = document.getElementById('modal');
    if (modal) {
        modal.style.display = 'block';
    }
}

function closeModal() {
    const modal = document.getElementById('modal');
    if (modal) {
        modal.style.display = 'none';
    }
}`;
    }

    if (hasGame) {
      js += `

// Game functionality
function initializeGame() {
    console.log('Initializing game...');
    
    const startBtn = document.getElementById('startGame');
    const pauseBtn = document.getElementById('pauseGame');
    
    if (startBtn) {
        startBtn.addEventListener('click', startGame);
    }
    
    if (pauseBtn) {
        pauseBtn.addEventListener('click', pauseGame);
    }
}

function startGame() {
    console.log('Starting game...');
    showNotification('Game started!', 'success');
    
    // Game logic would go here
    // This is a placeholder for game initialization
}

function pauseGame() {
    console.log('Game paused...');
    showNotification('Game paused!', 'info');
    
    // Game pause logic would go here
}`;
    }

    if (hasChart) {
      js += `

// Chart functionality
function initializeChart() {
    console.log('Initializing chart...');
    
    // Chart initialization would go here
    // This is a placeholder for chart setup
}`;
    }

    js += `

// Utility functions
function showNotification(message, type = 'info') {
    console.log(\`[\${type.toUpperCase()}] \${message}\`);
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = \`notification notification-\${type}\`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = \`
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 5px;
        color: white;
        font-weight: bold;
        z-index: 3000;
        animation: slideIn 0.3s ease-out;
    \`;
    
    // Set background color based on type
    const colors = {
        success: '#27ae60',
        error: '#e74c3c',
        warning: '#f39c12',
        info: '#3498db'
    };
    
    notification.style.backgroundColor = colors[type] || colors.info;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Add CSS animation for notifications
const style = document.createElement('style');
style.textContent = \`
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
\`;
document.head.appendChild(style);

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        initializeApp, 
        AppState,
        showNotification
    };
}`;

    return js;
  }

  generateChartJS() {
    return `// Chart.js functionality for unlimited apps
console.log('Chart.js loaded for unlimited app');

class ChartManager {
    constructor() {
        this.charts = new Map();
    }
    
    createChart(canvasId, data, options = {}) {
        const canvas = document.getElementById(canvasId);
        if (!canvas) {
            console.error('Canvas not found:', canvasId);
            return null;
        }
        
        const ctx = canvas.getContext('2d');
        
        const defaultOptions = {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Data Visualization'
                }
            }
        };
        
        const chartOptions = { ...defaultOptions, ...options };
        
        const chart = new Chart(ctx, {
            type: 'line',
            data: data,
            options: chartOptions
        });
        
        this.charts.set(canvasId, chart);
        return chart;
    }
    
    updateChart(canvasId, newData) {
        const chart = this.charts.get(canvasId);
        if (chart) {
            chart.data = newData;
            chart.update();
        }
    }
    
    destroyChart(canvasId) {
        const chart = this.charts.get(canvasId);
        if (chart) {
            chart.destroy();
            this.charts.delete(canvasId);
        }
    }
}

// Global chart manager instance
window.chartManager = new ChartManager();

// Initialize main chart when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    const mainChart = document.getElementById('mainChart');
    if (mainChart) {
        const sampleData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: 'Sample Data',
                data: [12, 19, 3, 5, 2, 3],
                borderColor: 'rgb(75, 192, 192)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                tension: 0.1
            }]
        };
        
        window.chartManager.createChart('mainChart', sampleData);
    }
});

export default ChartManager;`;
  }

  generateGameJS() {
    return `// Game.js functionality for unlimited apps
console.log('Game.js loaded for unlimited app');

class GameEngine {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.isRunning = false;
        this.score = 0;
        this.gameObjects = [];
        this.lastTime = 0;
        
        this.setupCanvas();
        this.setupEventListeners();
    }
    
    setupCanvas() {
        if (!this.canvas) return;
        
        // Set canvas size
        this.canvas.width = 800;
        this.canvas.height = 600;
        
        // Set canvas style
        this.canvas.style.border = '2px solid #333';
        this.canvas.style.backgroundColor = '#f0f0f0';
    }
    
    setupEventListeners() {
        // Keyboard controls
        document.addEventListener('keydown', (e) => {
            this.handleKeyDown(e);
        });
        
        document.addEventListener('keyup', (e) => {
            this.handleKeyUp(e);
        });
        
        // Mouse controls
        this.canvas.addEventListener('click', (e) => {
            this.handleMouseClick(e);
        });
    }
    
    handleKeyDown(e) {
        // Handle keyboard input
        switch(e.key) {
            case 'ArrowUp':
            case 'w':
            case 'W':
                this.moveUp();
                break;
            case 'ArrowDown':
            case 's':
            case 'S':
                this.moveDown();
                break;
            case 'ArrowLeft':
            case 'a':
            case 'A':
                this.moveLeft();
                break;
            case 'ArrowRight':
            case 'd':
            case 'D':
                this.moveRight();
                break;
            case ' ':
                e.preventDefault();
                this.jump();
                break;
        }
    }
    
    handleKeyUp(e) {
        // Handle key release
    }
    
    handleMouseClick(e) {
        const rect = this.canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        this.handleClick(x, y);
    }
    
    start() {
        if (this.isRunning) return;
        
        this.isRunning = true;
        this.lastTime = performance.now();
        this.gameLoop();
        
        console.log('Game started!');
    }
    
    pause() {
        this.isRunning = false;
        console.log('Game paused!');
    }
    
    stop() {
        this.isRunning = false;
        this.gameObjects = [];
        this.score = 0;
        this.updateScore();
        console.log('Game stopped!');
    }
    
    gameLoop(currentTime) {
        if (!this.isRunning) return;
        
        const deltaTime = currentTime - this.lastTime;
        this.lastTime = currentTime;
        
        this.update(deltaTime);
        this.render();
        
        requestAnimationFrame((time) => this.gameLoop(time));
    }
    
    update(deltaTime) {
        // Update game objects
        this.gameObjects.forEach(obj => {
            if (obj.update) {
                obj.update(deltaTime);
            }
        });
        
        // Check collisions
        this.checkCollisions();
        
        // Update score
        this.updateScore();
    }
    
    render() {
        // Clear canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Render game objects
        this.gameObjects.forEach(obj => {
            if (obj.render) {
                obj.render(this.ctx);
            }
        });
        
        // Render UI
        this.renderUI();
    }
    
    renderUI() {
        // Render score
        this.ctx.fillStyle = '#333';
        this.ctx.font = '24px Arial';
        this.ctx.fillText(\`Score: \${this.score}\`, 10, 30);
        
        // Render instructions
        this.ctx.font = '16px Arial';
        this.ctx.fillText('Use WASD or Arrow Keys to move, Space to jump', 10, this.canvas.height - 10);
    }
    
    checkCollisions() {
        // Basic collision detection
        for (let i = 0; i < this.gameObjects.length; i++) {
            for (let j = i + 1; j < this.gameObjects.length; j++) {
                const obj1 = this.gameObjects[i];
                const obj2 = this.gameObjects[j];
                
                if (this.isColliding(obj1, obj2)) {
                    this.handleCollision(obj1, obj2);
                }
            }
        }
    }
    
    isColliding(obj1, obj2) {
        return obj1.x < obj2.x + obj2.width &&
               obj1.x + obj1.width > obj2.x &&
               obj1.y < obj2.y + obj2.height &&
               obj1.y + obj1.height > obj2.y;
    }
    
    handleCollision(obj1, obj2) {
        // Handle collision between objects
        console.log('Collision detected!');
    }
    
    addGameObject(obj) {
        this.gameObjects.push(obj);
    }
    
    removeGameObject(obj) {
        const index = this.gameObjects.indexOf(obj);
        if (index > -1) {
            this.gameObjects.splice(index, 1);
        }
    }
    
    updateScore() {
        const scoreElement = document.getElementById('score');
        if (scoreElement) {
            scoreElement.textContent = \`Score: \${this.score}\`;
        }
    }
    
    // Movement methods (to be overridden by specific games)
    moveUp() { console.log('Moving up'); }
    moveDown() { console.log('Moving down'); }
    moveLeft() { console.log('Moving left'); }
    moveRight() { console.log('Moving right'); }
    jump() { console.log('Jumping'); }
    handleClick(x, y) { console.log('Clicked at:', x, y); }
}

// Global game engine instance
window.gameEngine = null;

// Initialize game when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    const gameCanvas = document.getElementById('gameCanvas');
    if (gameCanvas) {
        window.gameEngine = new GameEngine('gameCanvas');
        
        // Add some sample game objects
        window.gameEngine.addGameObject({
            x: 100,
            y: 100,
            width: 50,
            height: 50,
            color: '#ff6b6b',
            update: function(deltaTime) {
                // Simple movement
                this.x += 1;
                if (this.x > 750) this.x = 0;
            },
            render: function(ctx) {
                ctx.fillStyle = this.color;
                ctx.fillRect(this.x, this.y, this.width, this.height);
            }
        });
        
        window.gameEngine.addGameObject({
            x: 200,
            y: 200,
            width: 30,
            height: 30,
            color: '#4ecdc4',
            update: function(deltaTime) {
                // Different movement pattern
                this.y += Math.sin(Date.now() * 0.005) * 2;
            },
            render: function(ctx) {
                ctx.fillStyle = this.color;
                ctx.fillRect(this.x, this.y, this.width, this.height);
            }
        });
    }
});

// Game control functions
function startGame() {
    if (window.gameEngine) {
        window.gameEngine.start();
    }
}

function pauseGame() {
    if (window.gameEngine) {
        window.gameEngine.pause();
    }
}

export default GameEngine;`;
  }

  generateAPIJS() {
    return `// API.js functionality for unlimited apps
console.log('API.js loaded for unlimited app');

class APIManager {
    constructor() {
        this.baseURL = 'https://api.example.com';
        this.authToken = null;
        this.isAuthenticated = false;
    }
    
    setAuthToken(token) {
        this.authToken = token;
        this.isAuthenticated = true;
        localStorage.setItem('authToken', token);
    }
    
    getAuthToken() {
        if (!this.authToken) {
            this.authToken = localStorage.getItem('authToken');
        }
        return this.authToken;
    }
    
    clearAuth() {
        this.authToken = null;
        this.isAuthenticated = false;
        localStorage.removeItem('authToken');
    }
    
    async request(endpoint, options = {}) {
        const url = \`\${this.baseURL}\${endpoint}\`;
        
        const defaultOptions = {
            headers: {
                'Content-Type': 'application/json',
            }
        };
        
        if (this.getAuthToken()) {
            defaultOptions.headers['Authorization'] = \`Bearer \${this.getAuthToken()}\`;
        }
        
        const requestOptions = {
            ...defaultOptions,
            ...options,
            headers: {
                ...defaultOptions.headers,
                ...options.headers
            }
        };
        
        try {
            const response = await fetch(url, requestOptions);
            
            if (!response.ok) {
                throw new Error(\`HTTP error! status: \${response.status}\`);
            }
            
            const data = await response.json();
            return data;
            
        } catch (error) {
            console.error('API request failed:', error);
            throw error;
        }
    }
    
    async get(endpoint) {
        return this.request(endpoint, { method: 'GET' });
    }
    
    async post(endpoint, data) {
        return this.request(endpoint, {
            method: 'POST',
            body: JSON.stringify(data)
        });
    }
    
    async put(endpoint, data) {
        return this.request(endpoint, {
            method: 'PUT',
            body: JSON.stringify(data)
        });
    }
    
    async delete(endpoint) {
        return this.request(endpoint, { method: 'DELETE' });
    }
    
    async login(email, password) {
        try {
            const response = await this.post('/auth/login', { email, password });
            
            if (response.token) {
                this.setAuthToken(response.token);
                return { success: true, user: response.user };
            }
            
            return { success: false, error: 'Invalid credentials' };
            
        } catch (error) {
            return { success: false, error: error.message };
        }
    }
    
    async register(userData) {
        try {
            const response = await this.post('/auth/register', userData);
            
            if (response.token) {
                this.setAuthToken(response.token);
                return { success: true, user: response.user };
            }
            
            return { success: false, error: response.error || 'Registration failed' };
            
        } catch (error) {
            return { success: false, error: error.message };
        }
    }
    
    async logout() {
        try {
            await this.post('/auth/logout');
            this.clearAuth();
            return { success: true };
        } catch (error) {
            this.clearAuth();
            return { success: true }; // Clear auth even if API call fails
        }
    }
    
    async getProfile() {
        try {
            const response = await this.get('/auth/profile');
            return { success: true, user: response.user };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }
    
    async updateProfile(userData) {
        try {
            const response = await this.put('/auth/profile', userData);
            return { success: true, user: response.user };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }
}

// Global API manager instance
window.apiManager = new APIManager();

// Authentication functions
async function login(email, password) {
    const result = await window.apiManager.login(email, password);
    
    if (result.success) {
        console.log('Login successful:', result.user);
        showNotification('Login successful!', 'success');
        return true;
    } else {
        console.error('Login failed:', result.error);
        showNotification(\`Login failed: \${result.error}\`, 'error');
        return false;
    }
}

async function register(userData) {
    const result = await window.apiManager.register(userData);
    
    if (result.success) {
        console.log('Registration successful:', result.user);
        showNotification('Registration successful!', 'success');
        return true;
    } else {
        console.error('Registration failed:', result.error);
        showNotification(\`Registration failed: \${result.error}\`, 'error');
        return false;
    }
}

async function logout() {
    const result = await window.apiManager.logout();
    
    if (result.success) {
        console.log('Logout successful');
        showNotification('Logged out successfully!', 'success');
        return true;
    } else {
        console.error('Logout failed:', result.error);
        return false;
    }
}

// Check authentication status on page load
document.addEventListener('DOMContentLoaded', function() {
    const token = window.apiManager.getAuthToken();
    if (token) {
        console.log('User is authenticated');
        // Load user profile or redirect to dashboard
    } else {
        console.log('User is not authenticated');
        // Show login form or redirect to login page
    }
});

export default APIManager;`;
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

    // Check for unlimited app requests
    if (this.isUnlimitedRequest(prompt, context)) {
      console.log('🔄 Detected unlimited app request, will generate dynamic template');
      return []; // Return empty to trigger dynamic generation
    }

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

      // Pattern matching for unlimited templates
      if (template.patterns) {
        const patternMatches = template.patterns.filter(pattern => 
          promptLower.includes(pattern.toLowerCase())
        ).length;
        score += patternMatches * 7;
      }

      // Category matching
      if (context.category && template.category === context.category) {
        score += 15;
      }

      // Complexity matching
      if (context.complexity && template.complexity === context.complexity) {
        score += 10;
      }

      // Technology matching
      if (context.technologies) {
        const techMatches = context.technologies.filter(tech => 
          template.tags?.includes(tech.toLowerCase())
        ).length;
        score += techMatches * 3;
      }

      // Unlimited template bonus
      if (template.isUnlimited) {
        score += 5;
      }

      // Dynamic template bonus
      if (template.isDynamic) {
        score += 3;
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

  isUnlimitedRequest(prompt, context) {
    const unlimitedKeywords = [
      'unlimited', 'any app', 'any type', 'custom app', 'unique app',
      'new app', 'different app', 'special app', 'personalized app',
      'bespoke app', 'tailored app', 'individual app', 'specific app'
    ];

    const promptLower = prompt.toLowerCase();
    
    // Check for unlimited keywords
    const hasUnlimitedKeyword = unlimitedKeywords.some(keyword => 
      promptLower.includes(keyword)
    );

    // Check context flag
    const hasUnlimitedFlag = context.unlimited === true;

    // Check for very specific or unique requests
    const isSpecificRequest = prompt.length > 50 && 
      (promptLower.includes('that') || promptLower.includes('which') || 
       promptLower.includes('with') || promptLower.includes('for'));

    return hasUnlimitedKeyword || hasUnlimitedFlag || isSpecificRequest;
  }
}

export default TemplateBasedGenerator;
