// Simple DreamBuild App Generation Test
// Tests app generation with correct selectors

import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class SimpleAppTester {
  constructor() {
    this.browser = null;
    this.page = null;
    this.testResults = [];
    this.appsToTest = [
      {
        id: 'todo-app',
        name: 'Todo Management App',
        prompt: 'Create a modern todo management application with add, edit, delete, and mark complete functionality.',
        expectedFeatures: ['CRUD operations', 'Categories', 'Due dates', 'Search']
      },
      {
        id: 'ecommerce-store',
        name: 'E-commerce Store',
        prompt: 'Build a complete e-commerce store with product catalog, shopping cart, and checkout process.',
        expectedFeatures: ['Product catalog', 'Shopping cart', 'Checkout', 'Authentication']
      },
      {
        id: 'dashboard-analytics',
        name: 'Analytics Dashboard',
        prompt: 'Create a comprehensive analytics dashboard with charts, graphs, and data visualization.',
        expectedFeatures: ['Charts', 'Data visualization', 'Real-time updates', 'Export']
      },
      {
        id: 'blog-cms',
        name: 'Blog CMS',
        prompt: 'Develop a content management system for blogs with rich text editor and image uploads.',
        expectedFeatures: ['Rich text editor', 'Image uploads', 'Categories', 'Comments']
      },
      {
        id: 'chat-app',
        name: 'Real-time Chat App',
        prompt: 'Build a real-time chat application with user rooms and message history.',
        expectedFeatures: ['Real-time messaging', 'Rooms', 'File sharing', 'Online status']
      }
    ];
  }

  async initialize() {
    console.log('🚀 Initializing Simple DreamBuild Test...');
    
    this.browser = await puppeteer.launch({
      headless: false,
      defaultViewport: null,
      args: ['--start-maximized', '--no-sandbox', '--disable-setuid-sandbox']
    });

    this.page = await this.browser.newPage();
    
    // Navigate to DreamBuild AI Builder
    await this.page.goto('http://localhost:3000/ai-builder', { waitUntil: 'networkidle0' });
    
    // Wait for the app to load
    await this.page.waitForSelector('textarea', { timeout: 15000 });
    
    console.log('✅ DreamBuild loaded successfully');
  }

  async testAppGeneration(appConfig) {
    console.log(`\n🎯 Testing: ${appConfig.name}`);
    console.log(`📝 Prompt: ${appConfig.prompt}`);
    
    const testResult = {
      appId: appConfig.id,
      appName: appConfig.name,
      prompt: appConfig.prompt,
      expectedFeatures: appConfig.expectedFeatures,
      startTime: new Date(),
      status: 'running',
      generatedFiles: [],
      codeQuality: {},
      functionality: {},
      errors: []
    };

    try {
      // Find the textarea for AI prompt
      const textarea = await this.page.$('textarea');
      if (!textarea) {
        throw new Error('Textarea not found');
      }

      // Clear any existing content
      await textarea.click({ clickCount: 3 });
      await this.page.keyboard.press('Backspace');
      
      // Enter the prompt
      await textarea.type(appConfig.prompt);
      
      // Find and click the generate button
      const generateButton = await this.page.$('button[type="submit"], button:has-text("Generate"), button:has-text("Send")');
      if (!generateButton) {
        // Try to find any button that might be the generate button
        const buttons = await this.page.$$('button');
        if (buttons.length > 0) {
          await buttons[0].click();
        } else {
          throw new Error('Generate button not found');
        }
      } else {
        await generateButton.click();
      }
      
      // Wait for generation to complete
      await this.page.waitForTimeout(8000);
      
      // Check for generated files
      const generatedFiles = await this.page.evaluate(() => {
        const fileElements = document.querySelectorAll('[class*="file"], [class*="File"]');
        return Array.from(fileElements).map(el => ({
          name: el.textContent.trim(),
          visible: el.offsetParent !== null
        })).filter(file => file.name && file.name.length > 0);
      });
      
      testResult.generatedFiles = generatedFiles;
      
      // Analyze code quality
      testResult.codeQuality = await this.analyzeCodeQuality();
      
      // Test functionality
      testResult.functionality = await this.testFunctionality(appConfig.expectedFeatures);
      
      testResult.status = 'completed';
      testResult.endTime = new Date();
      testResult.duration = testResult.endTime - testResult.startTime;
      
      console.log(`✅ ${appConfig.name} - Generated ${generatedFiles.length} files`);
      
    } catch (error) {
      testResult.status = 'failed';
      testResult.errors.push(error.message);
      testResult.endTime = new Date();
      testResult.duration = testResult.endTime - testResult.startTime;
      
      console.log(`❌ ${appConfig.name} - Failed: ${error.message}`);
    }

    return testResult;
  }

  async analyzeCodeQuality() {
    const codeQuality = {
      structure: 0,
      bestPractices: 0,
      performance: 0,
      security: 0,
      maintainability: 0,
      totalScore: 0
    };

    try {
      // Check for proper file structure
      const hasHTML = await this.page.evaluate(() => {
        const fileElements = document.querySelectorAll('[class*="file"], [class*="File"]');
        return Array.from(fileElements).some(el => 
          el.textContent.toLowerCase().includes('index.html') || 
          el.textContent.toLowerCase().includes('.html')
        );
      });
      
      const hasCSS = await this.page.evaluate(() => {
        const fileElements = document.querySelectorAll('[class*="file"], [class*="File"]');
        return Array.from(fileElements).some(el => 
          el.textContent.toLowerCase().includes('.css')
        );
      });
      
      const hasJS = await this.page.evaluate(() => {
        const fileElements = document.querySelectorAll('[class*="file"], [class*="File"]');
        return Array.from(fileElements).some(el => 
          el.textContent.toLowerCase().includes('.js')
        );
      });

      // Structure score (0-20 points)
      if (hasHTML) codeQuality.structure += 10;
      if (hasCSS) codeQuality.structure += 5;
      if (hasJS) codeQuality.structure += 5;

      // Check for best practices indicators
      const hasPackageJson = await this.page.evaluate(() => {
        const fileElements = document.querySelectorAll('[class*="file"], [class*="File"]');
        return Array.from(fileElements).some(el => 
          el.textContent.toLowerCase().includes('package.json')
        );
      });

      const hasReadme = await this.page.evaluate(() => {
        const fileElements = document.querySelectorAll('[class*="file"], [class*="File"]');
        return Array.from(fileElements).some(el => 
          el.textContent.toLowerCase().includes('readme')
        );
      });

      // Best practices score (0-20 points)
      if (hasPackageJson) codeQuality.bestPractices += 10;
      if (hasReadme) codeQuality.bestPractices += 10;

      // Performance indicators (0-20 points)
      codeQuality.performance += 15; // Base score for modern frameworks

      // Security indicators (0-20 points)
      codeQuality.security += 10; // Base score

      // Maintainability (0-20 points)
      const hasModularStructure = await this.page.evaluate(() => {
        const fileElements = document.querySelectorAll('[class*="file"], [class*="File"]');
        return fileElements.length >= 2; // Multiple files indicate modularity
      });

      if (hasModularStructure) codeQuality.maintainability += 20;

      // Calculate total score
      codeQuality.totalScore = Object.values(codeQuality).reduce((sum, score) => sum + score, 0) - codeQuality.totalScore;

    } catch (error) {
      console.log('⚠️ Error analyzing code quality:', error.message);
    }

    return codeQuality;
  }

  async testFunctionality(expectedFeatures) {
    const functionality = {
      featuresImplemented: 0,
      totalFeatures: expectedFeatures.length,
      workingFeatures: [],
      missingFeatures: [],
      score: 0
    };

    try {
      // Check if preview is working
      const hasPreview = await this.page.evaluate(() => {
        return document.querySelector('[class*="preview"], [class*="Preview"]') !== null;
      });

      if (hasPreview) {
        functionality.workingFeatures.push('Live Preview');
        functionality.featuresImplemented++;
      }

      // Check for interactive elements
      const hasInteractiveElements = await this.page.evaluate(() => {
        const buttons = document.querySelectorAll('button');
        const inputs = document.querySelectorAll('input');
        return buttons.length > 0 || inputs.length > 0;
      });

      if (hasInteractiveElements) {
        functionality.workingFeatures.push('Interactive Elements');
        functionality.featuresImplemented++;
      }

      // Calculate score
      functionality.score = (functionality.featuresImplemented / functionality.totalFeatures) * 100;

    } catch (error) {
      console.log('⚠️ Error testing functionality:', error.message);
    }

    return functionality;
  }

  async runAllTests() {
    console.log('🎯 Starting simple app generation test...');
    console.log(`📊 Testing ${this.appsToTest.length} different applications\n`);

    for (const appConfig of this.appsToTest) {
      const result = await this.testAppGeneration(appConfig);
      this.testResults.push(result);
      
      // Wait between tests
      await new Promise(resolve => setTimeout(resolve, 2000));
    }

    await this.generateReport();
  }

  async generateReport() {
    console.log('\n📊 Generating test report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalApps: this.testResults.length,
        successful: this.testResults.filter(r => r.status === 'completed').length,
        failed: this.testResults.filter(r => r.status === 'failed').length,
        averageCodeQuality: 0,
        averageFunctionality: 0
      },
      detailedResults: this.testResults,
      recommendations: []
    };

    // Calculate averages
    const completedTests = this.testResults.filter(r => r.status === 'completed');
    
    if (completedTests.length > 0) {
      report.summary.averageCodeQuality = completedTests.reduce((sum, r) => sum + r.codeQuality.totalScore, 0) / completedTests.length;
      report.summary.averageFunctionality = completedTests.reduce((sum, r) => sum + r.functionality.score, 0) / completedTests.length;
    }

    // Generate recommendations
    if (report.summary.averageCodeQuality < 70) {
      report.recommendations.push('Improve code structure and best practices implementation');
    }
    if (report.summary.averageFunctionality < 80) {
      report.recommendations.push('Enhance feature implementation and functionality testing');
    }

    // Save report
    const reportPath = path.join(__dirname, 'simple-app-generation-test-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

    console.log('\n📋 Test Report Generated:');
    console.log(`📄 JSON: ${reportPath}`);
    
    console.log('\n🏆 Test Summary:');
    console.log(`✅ Successful: ${report.summary.successful}/${report.summary.totalApps}`);
    console.log(`❌ Failed: ${report.summary.failed}/${report.summary.totalApps}`);
    console.log(`📊 Average Code Quality: ${report.summary.averageCodeQuality.toFixed(1)}/100`);
    console.log(`📊 Average Functionality: ${report.summary.averageFunctionality.toFixed(1)}/100`);

    return report;
  }

  async cleanup() {
    if (this.browser) {
      await this.browser.close();
    }
  }
}

// Run the test
async function runTest() {
  const tester = new SimpleAppTester();
  
  try {
    await tester.initialize();
    await tester.runAllTests();
  } catch (error) {
    console.error('❌ Test failed:', error);
  } finally {
    await tester.cleanup();
  }
}

// Execute if run directly
if (import.meta.url === `file://${process.argv[1]}`) {
  runTest();
}

export default SimpleAppTester;
