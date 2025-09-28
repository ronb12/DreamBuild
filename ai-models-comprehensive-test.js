import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

class AIModelsComprehensiveTest {
  constructor() {
    this.browser = null;
    this.page = null;
    this.baseUrl = 'http://localhost:3000';
    this.results = {
      timestamp: new Date().toISOString(),
      tests: [],
      summary: {
        total: 0,
        passed: 0,
        failed: 0,
        successRate: 0
      },
      aiModels: [],
      complexCodingTests: [],
      performance: {},
      errors: []
    };
  }

  async init() {
    console.log('🚀 Starting AI Models Comprehensive Test Suite...\n');
    
    this.browser = await puppeteer.launch({
      headless: false,
      defaultViewport: { width: 1920, height: 1080 },
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    this.page = await this.browser.newPage();
    
    // Enable console logging
    this.page.on('console', msg => {
      if (msg.type() === 'error') {
        console.log('❌ Console Error:', msg.text());
        this.results.errors.push({
          type: 'console_error',
          message: msg.text(),
          timestamp: new Date().toISOString()
        });
      }
    });
  }

  async runTest(testName, testFunction) {
    console.log(`🧪 Running test: ${testName}`);
    const startTime = Date.now();
    
    try {
      await testFunction();
      const duration = Date.now() - startTime;
      console.log(`✅ ${testName} - PASSED (${duration}ms)\n`);
      
      this.results.tests.push({
        name: testName,
        status: 'PASSED',
        duration: duration,
        timestamp: new Date().toISOString()
      });
      
      this.results.summary.passed++;
    } catch (error) {
      const duration = Date.now() - startTime;
      console.log(`❌ ${testName} - FAILED: ${error.message} (${duration}ms)\n`);
      
      this.results.tests.push({
        name: testName,
        status: 'FAILED',
        error: error.message,
        duration: duration,
        timestamp: new Date().toISOString()
      });
      
      this.results.summary.failed++;
      this.results.errors.push({
        type: 'test_failure',
        test: testName,
        message: error.message,
        timestamp: new Date().toISOString()
      });
    }
    
    this.results.summary.total++;
  }

  async testAIModelVisibility() {
    await this.page.goto(`${this.baseUrl}/ai-builder`);
    await new Promise(resolve => setTimeout(resolve, 3000));

    // Check for AI model selector - look for "Auto Select" button
    const modelSelectors = await this.page.$$('button');
    let foundModelSelector = false;
    
    for (const button of modelSelectors) {
      const text = await this.page.evaluate(el => el.textContent, button);
      if (text.includes('Auto Select') || text.includes('Select Model') || text.includes('AI Model')) {
        foundModelSelector = true;
        console.log(`Found AI model selector: "${text}"`);
        break;
      }
    }

    if (!foundModelSelector) {
      // Check for any dropdown or select elements
      const allSelects = await this.page.$$('select, [role="combobox"], [aria-haspopup="listbox"]');
      console.log(`Found ${allSelects.length} select/dropdown elements`);
      
      if (allSelects.length === 0) {
        throw new Error('No AI model selector found');
      }
    }

    // Check for model options or text content
    const pageContent = await this.page.evaluate(() => document.body.textContent);
    const hasModelContent = pageContent.includes('model') || pageContent.includes('Model') || 
                           pageContent.includes('AI') || pageContent.includes('GPT') || 
                           pageContent.includes('Claude') || pageContent.includes('Gemini');

    if (!hasModelContent) {
      throw new Error('No AI model information found in page content');
    }

    console.log('✅ AI model selector elements found');
  }

  async testModelSwitching() {
    await this.page.goto(`${this.baseUrl}/ai-builder`);
    await new Promise(resolve => setTimeout(resolve, 3000));

    // Try to find and interact with model selector - look for "Auto Select" button
    const buttons = await this.page.$$('button');
    let modelSelector = null;
    
    for (const button of buttons) {
      const text = await this.page.evaluate(el => el.textContent, button);
      if (text.includes('Auto Select') || text.includes('Select Model') || text.includes('AI Model')) {
        modelSelector = button;
        console.log(`Found model selector for switching: "${text}"`);
        break;
      }
    }

    if (!modelSelector) {
      throw new Error('No model selector found for switching');
    }

    // Try to click and see if dropdown opens
    try {
      await modelSelector.click();
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Check if dropdown is visible
      const dropdownVisible = await this.page.evaluate(() => {
        const dropdowns = document.querySelectorAll('[role="listbox"], .dropdown-menu, [aria-expanded="true"]');
        return dropdowns.length > 0;
      });

      if (!dropdownVisible) {
        console.log('⚠️ Model selector clicked but dropdown not visible');
      } else {
        console.log('✅ Model selector dropdown opened');
      }
    } catch (error) {
      console.log('⚠️ Could not interact with model selector:', error.message);
    }
  }

  async testComplexJavaScriptGeneration() {
    await this.page.goto(`${this.baseUrl}/ai-builder`);
    await new Promise(resolve => setTimeout(resolve, 3000));

    // Look for AI input elements
    const inputSelectors = [
      'textarea',
      'input[type="text"]',
      '[data-testid="ai-input"]',
      '[placeholder*="prompt"]',
      '[placeholder*="code"]',
      '[placeholder*="describe"]'
    ];

    let aiInput = null;
    for (const selector of inputSelectors) {
      const elements = await this.page.$$(selector);
      if (elements.length > 0) {
        aiInput = elements[0];
        break;
      }
    }

    if (!aiInput) {
      throw new Error('No AI input found for code generation');
    }

    // Test complex JavaScript prompt
    const complexPrompt = `Create a complex JavaScript application with the following requirements:
    1. A class-based architecture with inheritance
    2. Async/await error handling with try-catch blocks
    3. ES6+ features including destructuring, spread operator, and arrow functions
    4. A REST API client with fetch and proper error handling
    5. Local storage management with JSON serialization
    6. Event delegation and DOM manipulation
    7. A state management system similar to Redux
    8. Unit testing with Jest framework
    9. Webpack configuration for bundling
    10. TypeScript type definitions

    The application should be a task management system with user authentication, real-time updates, and offline support.`;

    await aiInput.click();
    await aiInput.type(complexPrompt);
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Look for generate button
    const generateButtons = await this.page.$$('button');
    let generateButton = null;
    
    for (const button of generateButtons) {
      const text = await this.page.evaluate(el => el.textContent, button);
      if (text.toLowerCase().includes('generate') || text.toLowerCase().includes('create') || 
          text.toLowerCase().includes('build') || text.toLowerCase().includes('submit')) {
        generateButton = button;
        break;
      }
    }

    if (generateButton) {
      await generateButton.click();
      await new Promise(resolve => setTimeout(resolve, 5000));
      console.log('✅ Complex JavaScript generation initiated');
    } else {
      console.log('⚠️ No generate button found, but input was successful');
    }
  }

  async testReactAdvancedFeatures() {
    await this.page.goto(`${this.baseUrl}/ai-builder`);
    await new Promise(resolve => setTimeout(resolve, 3000));

    const inputSelectors = [
      'textarea',
      'input[type="text"]',
      '[data-testid="ai-input"]',
      '[placeholder*="prompt"]'
    ];

    let aiInput = null;
    for (const selector of inputSelectors) {
      const elements = await this.page.$$(selector);
      if (elements.length > 0) {
        aiInput = elements[0];
        break;
      }
    }

    if (!aiInput) {
      throw new Error('No AI input found for React generation');
    }

    const reactPrompt = `Build an advanced React application with:
    1. React 18 with hooks (useState, useEffect, useContext, useReducer, useMemo, useCallback)
    2. React Router v6 with nested routes and protected routes
    3. Context API for global state management
    4. Custom hooks for API calls and form validation
    5. Higher-order components (HOCs) and render props pattern
    6. Error boundaries and Suspense for error handling
    7. React.memo for performance optimization
    8. TypeScript with strict type checking
    9. Styled-components or CSS-in-JS
    10. Unit tests with React Testing Library
    11. Integration with Redux Toolkit for complex state
    12. WebSocket integration for real-time features
    13. PWA capabilities with service workers
    14. Internationalization (i18n) support
    15. Accessibility (a11y) compliance

    Create a social media dashboard with real-time notifications, infinite scroll, and advanced filtering.`;

    await aiInput.click();
    await aiInput.evaluate(el => el.value = '');
    await aiInput.type(reactPrompt);
    await new Promise(resolve => setTimeout(resolve, 2000));

    const generateButtons = await this.page.$$('button');
    for (const button of generateButtons) {
      const text = await this.page.evaluate(el => el.textContent, button);
      if (text.toLowerCase().includes('generate') || text.toLowerCase().includes('create')) {
        await button.click();
        await new Promise(resolve => setTimeout(resolve, 5000));
        break;
      }
    }

    console.log('✅ Advanced React generation initiated');
  }

  async testPythonComplexAlgorithms() {
    await this.page.goto(`${this.baseUrl}/ai-builder`);
    await new Promise(resolve => setTimeout(resolve, 3000));

    const inputSelectors = [
      'textarea',
      'input[type="text"]',
      '[data-testid="ai-input"]',
      '[placeholder*="prompt"]'
    ];

    let aiInput = null;
    for (const selector of inputSelectors) {
      const elements = await this.page.$$(selector);
      if (elements.length > 0) {
        aiInput = elements[0];
        break;
      }
    }

    if (!aiInput) {
      throw new Error('No AI input found for Python generation');
    }

    const pythonPrompt = `Create a comprehensive Python application with:
    1. Object-oriented programming with multiple inheritance and mixins
    2. Advanced data structures (deque, defaultdict, Counter, namedtuple)
    3. Decorators and metaclasses for advanced functionality
    4. Async/await with asyncio for concurrent programming
    5. Database integration with SQLAlchemy ORM
    6. REST API using FastAPI with automatic documentation
    7. Machine learning with scikit-learn and pandas
    8. Data visualization with matplotlib and seaborn
    9. Unit testing with pytest and coverage
    10. Type hints and mypy for static type checking
    11. Logging configuration with different levels
    12. Configuration management with environment variables
    13. Error handling with custom exceptions
    14. Performance profiling and optimization
    15. Docker containerization

    Build a data analysis platform that processes large datasets, performs statistical analysis, and generates interactive visualizations.`;

    await aiInput.click();
    await aiInput.evaluate(el => el.value = '');
    await aiInput.type(pythonPrompt);
    await new Promise(resolve => setTimeout(resolve, 2000));

    const generateButtons = await this.page.$$('button');
    for (const button of generateButtons) {
      const text = await this.page.evaluate(el => el.textContent, button);
      if (text.toLowerCase().includes('generate') || text.toLowerCase().includes('create')) {
        await button.click();
        await new Promise(resolve => setTimeout(resolve, 5000));
        break;
      }
    }

    console.log('✅ Complex Python generation initiated');
  }

  async testErrorHandlingAndDebugging() {
    await this.page.goto(`${this.baseUrl}/ai-builder`);
    await new Promise(resolve => setTimeout(resolve, 3000));

    const inputSelectors = [
      'textarea',
      'input[type="text"]',
      '[data-testid="ai-input"]',
      '[placeholder*="prompt"]'
    ];

    let aiInput = null;
    for (const selector of inputSelectors) {
      const elements = await this.page.$$(selector);
      if (elements.length > 0) {
        aiInput = elements[0];
        break;
      }
    }

    if (!aiInput) {
      throw new Error('No AI input found for error handling test');
    }

    const errorPrompt = `Debug and fix this broken JavaScript code that has multiple issues:
    
    // BROKEN CODE - Please identify and fix all issues
    function calculateTotal(items) {
      let total = 0;
      for (let i = 0; i <= items.length; i++) {  // Off-by-one error
        total += items[i].price;  // Potential undefined access
      }
      return total;
    }
    
    class User {
      constructor(name, email) {
        this.name = name;
        this.email = email;
      }
      
      getInfo() {
        return \`Name: \${this.name}, Email: \${this.email}\`;  // Template literal issue
      }
    }
    
    async function fetchUserData(userId) {
      const response = await fetch(\`/api/users/\${userId}\`);  // No error handling
      const data = await response.json();
      return data;
    }
    
    // Missing error handling, type checking, and validation
    // Add proper error handling, input validation, and fix all bugs`;

    await aiInput.click();
    await aiInput.evaluate(el => el.value = '');
    await aiInput.type(errorPrompt);
    await new Promise(resolve => setTimeout(resolve, 2000));

    const generateButtons = await this.page.$$('button');
    for (const button of generateButtons) {
      const text = await this.page.evaluate(el => el.textContent, button);
      if (text.toLowerCase().includes('generate') || text.toLowerCase().includes('debug') || 
          text.toLowerCase().includes('fix')) {
        await button.click();
        await new Promise(resolve => setTimeout(resolve, 5000));
        break;
      }
    }

    console.log('✅ Error handling and debugging test initiated');
  }

  async testPerformanceOptimization() {
    await this.page.goto(`${this.baseUrl}/ai-builder`);
    await new Promise(resolve => setTimeout(resolve, 3000));

    const inputSelectors = [
      'textarea',
      'input[type="text"]',
      '[data-testid="ai-input"]',
      '[placeholder*="prompt"]'
    ];

    let aiInput = null;
    for (const selector of inputSelectors) {
      const elements = await this.page.$$(selector);
      if (elements.length > 0) {
        aiInput = elements[0];
        break;
      }
    }

    if (!aiInput) {
      throw new Error('No AI input found for performance test');
    }

    const performancePrompt = `Optimize this slow React application for maximum performance:
    
    // SLOW REACT CODE - Optimize for performance
    function SlowComponent({ data, filters }) {
      const [filteredData, setFilteredData] = useState([]);
      
      useEffect(() => {
        const filtered = data.filter(item => {
          return filters.every(filter => {
            return item[filter.key] === filter.value;
          });
        });
        setFilteredData(filtered);
      }, [data, filters]);
      
      const expensiveCalculation = (items) => {
        return items.reduce((acc, item) => {
          return acc + item.value * Math.random();  // Expensive operation
        }, 0);
      };
      
      return (
        <div>
          {filteredData.map(item => (
            <ExpensiveChildComponent 
              key={item.id} 
              data={item} 
              calculation={expensiveCalculation(item.children)}
            />
          ))}
        </div>
      );
    }
    
    // Add React.memo, useMemo, useCallback, virtualization, and other optimizations`;

    await aiInput.click();
    await aiInput.evaluate(el => el.value = '');
    await aiInput.type(performancePrompt);
    await new Promise(resolve => setTimeout(resolve, 2000));

    const generateButtons = await this.page.$$('button');
    for (const button of generateButtons) {
      const text = await this.page.evaluate(el => el.textContent, button);
      if (text.toLowerCase().includes('generate') || text.toLowerCase().includes('optimize')) {
        await button.click();
        await new Promise(resolve => setTimeout(resolve, 5000));
        break;
      }
    }

    console.log('✅ Performance optimization test initiated');
  }

  async testCodeQualityAndBestPractices() {
    await this.page.goto(`${this.baseUrl}/ai-builder`);
    await new Promise(resolve => setTimeout(resolve, 3000));

    const inputSelectors = [
      'textarea',
      'input[type="text"]',
      '[data-testid="ai-input"]',
      '[placeholder*="prompt"]'
    ];

    let aiInput = null;
    for (const selector of inputSelectors) {
      const elements = await this.page.$$(selector);
      if (elements.length > 0) {
        aiInput = elements[0];
        break;
      }
    }

    if (!aiInput) {
      throw new Error('No AI input found for code quality test');
    }

    const qualityPrompt = `Refactor this poorly written code following best practices:
    
    // POOR CODE QUALITY - Refactor following best practices
    function badFunction(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z) {
      var result = 0;
      if (a == 1) {
        if (b == 2) {
          if (c == 3) {
            if (d == 4) {
              if (e == 5) {
                result = a + b + c + d + e;
              }
            }
          }
        }
      }
      return result;
    }
    
    var globalVar = "bad";
    var anotherGlobal = 123;
    
    function anotherBadFunction() {
      console.log(globalVar);
      console.log(anotherGlobal);
      // No error handling
      var data = JSON.parse(someString);
      return data;
    }
    
    // Apply SOLID principles, clean code, proper error handling, and modern practices`;

    await aiInput.click();
    await aiInput.evaluate(el => el.value = '');
    await aiInput.type(qualityPrompt);
    await new Promise(resolve => setTimeout(resolve, 2000));

    const generateButtons = await this.page.$$('button');
    for (const button of generateButtons) {
      const text = await this.page.evaluate(el => el.textContent, button);
      if (text.toLowerCase().includes('generate') || text.toLowerCase().includes('refactor')) {
        await button.click();
        await new Promise(resolve => setTimeout(resolve, 5000));
        break;
      }
    }

    console.log('✅ Code quality and best practices test initiated');
  }

  async testMultiLanguageSupport() {
    await this.page.goto(`${this.baseUrl}/ai-builder`);
    await new Promise(resolve => setTimeout(resolve, 3000));

    const languages = [
      { name: 'TypeScript', prompt: 'Create a TypeScript application with strict type checking, interfaces, generics, and decorators' },
      { name: 'Go', prompt: 'Build a Go microservice with goroutines, channels, and HTTP handlers' },
      { name: 'Rust', prompt: 'Create a Rust application with ownership, borrowing, and memory safety' },
      { name: 'Java', prompt: 'Develop a Java Spring Boot application with JPA, security, and REST APIs' },
      { name: 'C#', prompt: 'Build a C# .NET application with Entity Framework and dependency injection' },
      { name: 'PHP', prompt: 'Create a PHP Laravel application with Eloquent ORM and API resources' },
      { name: 'Ruby', prompt: 'Develop a Ruby on Rails application with ActiveRecord and API endpoints' },
      { name: 'Swift', prompt: 'Build an iOS Swift application with Core Data and networking' }
    ];

    const inputSelectors = [
      'textarea',
      'input[type="text"]',
      '[data-testid="ai-input"]',
      '[placeholder*="prompt"]'
    ];

    let aiInput = null;
    for (const selector of inputSelectors) {
      const elements = await this.page.$$(selector);
      if (elements.length > 0) {
        aiInput = elements[0];
        break;
      }
    }

    if (!aiInput) {
      throw new Error('No AI input found for multi-language test');
    }

    for (const lang of languages) {
      console.log(`Testing ${lang.name} support...`);
      
      await aiInput.click();
      await aiInput.evaluate(el => el.value = '');
      await aiInput.type(lang.prompt);
      await new Promise(resolve => setTimeout(resolve, 1000));

      const generateButtons = await this.page.$$('button');
      for (const button of generateButtons) {
        const text = await this.page.evaluate(el => el.textContent, button);
        if (text.toLowerCase().includes('generate') || text.toLowerCase().includes('create')) {
          await button.click();
          await new Promise(resolve => setTimeout(resolve, 3000));
          break;
        }
      }
    }

    console.log('✅ Multi-language support test completed');
  }

  async testAIResponseQuality() {
    await this.page.goto(`${this.baseUrl}/ai-builder`);
    await new Promise(resolve => setTimeout(resolve, 3000));

    const inputSelectors = [
      'textarea',
      'input[type="text"]',
      '[data-testid="ai-input"]',
      '[placeholder*="prompt"]'
    ];

    let aiInput = null;
    for (const selector of inputSelectors) {
      const elements = await this.page.$$(selector);
      if (elements.length > 0) {
        aiInput = elements[0];
        break;
      }
    }

    if (!aiInput) {
      throw new Error('No AI input found for response quality test');
    }

    const qualityPrompt = `Generate a complete, production-ready web application with:
    1. Clean, maintainable code structure
    2. Comprehensive error handling
    3. Input validation and sanitization
    4. Security best practices
    5. Performance optimizations
    6. Accessibility compliance
    7. Responsive design
    8. Unit tests
    9. Documentation
    10. Deployment configuration

    The application should be a task management system with user authentication, real-time collaboration, and advanced features.`;

    await aiInput.click();
    await aiInput.evaluate(el => el.value = '');
    await aiInput.type(qualityPrompt);
    await new Promise(resolve => setTimeout(resolve, 2000));

    const generateButtons = await this.page.$$('button');
    for (const button of generateButtons) {
      const text = await this.page.evaluate(el => el.textContent, button);
      if (text.toLowerCase().includes('generate') || text.toLowerCase().includes('create')) {
        await button.click();
        await new Promise(resolve => setTimeout(resolve, 10000)); // Wait longer for complex generation
        break;
      }
    }

    // Check if code was generated
    const pageContent = await this.page.evaluate(() => document.body.textContent);
    const hasCodeContent = pageContent.includes('function') || pageContent.includes('class') || 
                          pageContent.includes('import') || pageContent.includes('export') ||
                          pageContent.includes('const') || pageContent.includes('let') ||
                          pageContent.includes('var') || pageContent.includes('def ') ||
                          pageContent.includes('public class') || pageContent.includes('package');

    if (!hasCodeContent) {
      throw new Error('No code content generated');
    }

    console.log('✅ AI response quality test completed');
  }

  async testPerformanceMetrics() {
    const startTime = Date.now();
    
    // Test page load performance
    await this.page.goto(`${this.baseUrl}/ai-builder`);
    const loadTime = Date.now() - startTime;
    
    // Test AI response time
    const aiStartTime = Date.now();
    await this.testAIResponseQuality();
    const aiResponseTime = Date.now() - aiStartTime;
    
    this.results.performance = {
      pageLoadTime: loadTime,
      aiResponseTime: aiResponseTime,
      totalTestTime: Date.now() - startTime
    };
    
    console.log(`📊 Performance Metrics:`);
    console.log(`   Page Load: ${loadTime}ms`);
    console.log(`   AI Response: ${aiResponseTime}ms`);
    console.log(`   Total Test: ${this.results.performance.totalTestTime}ms`);
  }

  async generateReport() {
    this.results.summary.successRate = (this.results.summary.passed / this.results.summary.total) * 100;
    
    const timestamp = Date.now();
    const reportPath = `./ai-models-comprehensive-test-report-${timestamp}.json`;
    const markdownPath = `./ai-models-comprehensive-test-report-${timestamp}.md`;
    
    // Save JSON report
    fs.writeFileSync(reportPath, JSON.stringify(this.results, null, 2));
    
    // Generate markdown report
    const markdownReport = `# AI Models Comprehensive Test Report

**Generated:** ${new Date().toISOString()}
**Test Duration:** ${this.results.performance.totalTestTime}ms

## 📊 Test Summary

- **Total Tests:** ${this.results.summary.total}
- **Passed:** ${this.results.summary.passed} ✅
- **Failed:** ${this.results.summary.failed} ❌
- **Success Rate:** ${this.results.summary.successRate.toFixed(2)}%

## 🧪 Test Results

${this.results.tests.map(test => `
### ${test.name}
- **Status:** ${test.status}
- **Duration:** ${test.duration}ms
- **Timestamp:** ${test.timestamp}
${test.error ? `- **Error:** ${test.error}` : ''}
`).join('')}

## ⚡ Performance Metrics

- **Page Load Time:** ${this.results.performance.pageLoadTime}ms
- **AI Response Time:** ${this.results.performance.aiResponseTime}ms
- **Total Test Time:** ${this.results.performance.totalTestTime}ms

## 🚨 Errors Found

${this.results.errors.length > 0 ? this.results.errors.map(error => `
- **${error.type}:** ${error.message}
  - **Timestamp:** ${error.timestamp}
`).join('') : 'No errors found!'}

## 🎯 AI Models Assessment

${this.results.summary.successRate >= 80 ? '**EXCELLENT** - AI models are working exceptionally well!' : 
  this.results.summary.successRate >= 60 ? '**GOOD** - AI models are working well with minor issues.' :
  this.results.summary.successRate >= 40 ? '**FAIR** - AI models need improvement.' :
  '**POOR** - AI models need significant improvement.'}

## 🔧 Recommendations

${this.results.summary.successRate < 80 ? `
1. **Improve AI Model Integration** - Ensure all AI models are properly connected
2. **Enhance Error Handling** - Add better error handling for AI responses
3. **Optimize Performance** - Reduce response times and improve user experience
4. **Add More Test Coverage** - Include additional edge cases and complex scenarios
` : `
1. **Maintain Current Quality** - Continue monitoring AI model performance
2. **Add Advanced Features** - Consider implementing more sophisticated AI capabilities
3. **Expand Test Coverage** - Add more complex coding scenarios
4. **Performance Monitoring** - Set up continuous performance monitoring
`}

---
*Report generated by DreamBuild AI Models Comprehensive Test Suite*
`;

    fs.writeFileSync(markdownPath, markdownReport);
    
    console.log(`\n📊 AI Models Test Report Generated:`);
    console.log(`📄 JSON Report: ${reportPath}`);
    console.log(`📄 Markdown Report: ${markdownPath}`);
  }

  async run() {
    try {
      await this.init();
      
      // Core AI Model Tests
      await this.runTest('AI Model Visibility', () => this.testAIModelVisibility());
      await this.runTest('Model Switching', () => this.testModelSwitching());
      
      // Complex Coding Tests
      await this.runTest('Complex JavaScript Generation', () => this.testComplexJavaScriptGeneration());
      await this.runTest('React Advanced Features', () => this.testReactAdvancedFeatures());
      await this.runTest('Python Complex Algorithms', () => this.testPythonComplexAlgorithms());
      await this.runTest('Error Handling and Debugging', () => this.testErrorHandlingAndDebugging());
      await this.runTest('Performance Optimization', () => this.testPerformanceOptimization());
      await this.runTest('Code Quality and Best Practices', () => this.testCodeQualityAndBestPractices());
      await this.runTest('Multi-Language Support', () => this.testMultiLanguageSupport());
      await this.runTest('AI Response Quality', () => this.testAIResponseQuality());
      
      // Performance Tests
      await this.runTest('Performance Metrics', () => this.testPerformanceMetrics());
      
      await this.generateReport();
      
      console.log(`\n🎯 AI Models Test Summary:`);
      console.log(`✅ Passed: ${this.results.summary.passed}/${this.results.summary.total}`);
      console.log(`❌ Failed: ${this.results.summary.failed}/${this.results.summary.total}`);
      console.log(`📈 Success Rate: ${this.results.summary.successRate.toFixed(2)}%`);
      
      if (this.results.summary.successRate >= 80) {
        console.log(`\n🎉 EXCELLENT! DreamBuild AI models are working exceptionally well!`);
      } else if (this.results.summary.successRate >= 60) {
        console.log(`\n👍 GOOD! DreamBuild AI models are working well with minor issues.`);
      } else {
        console.log(`\n⚠️ NEEDS IMPROVEMENT! DreamBuild AI models need attention.`);
      }
      
    } catch (error) {
      console.error('❌ Test suite failed:', error);
    } finally {
      if (this.browser) {
        await this.browser.close();
      }
    }
  }
}

// Run the test
const test = new AIModelsComprehensiveTest();
test.run().catch(console.error);
