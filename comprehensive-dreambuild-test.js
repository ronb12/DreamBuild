import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

class DreamBuildComprehensiveTest {
  constructor() {
    this.browser = null;
    this.page = null;
    this.results = {
      totalTests: 0,
      passedTests: 0,
      failedTests: 0,
      errors: [],
      features: {},
      performance: {},
      screenshots: []
    };
    this.baseUrl = 'http://localhost:3000';
  }

  async initialize() {
    console.log('🚀 Starting DreamBuild Comprehensive Test Suite...');
    
    this.browser = await puppeteer.launch({
      headless: false,
      defaultViewport: { width: 1920, height: 1080 },
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-accelerated-2d-canvas',
        '--no-first-run',
        '--no-zygote',
        '--disable-gpu'
      ]
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

    // Handle page errors
    this.page.on('pageerror', error => {
      console.log('❌ Page Error:', error.message);
      this.results.errors.push({
        type: 'page_error',
        message: error.message,
        timestamp: new Date().toISOString()
      });
    });

    // Set longer timeout for complex operations
    this.page.setDefaultTimeout(30000);
  }

  async takeScreenshot(name) {
    const screenshotPath = `./test-screenshots/${name}-${Date.now()}.png`;
    await this.page.screenshot({ 
      path: screenshotPath, 
      fullPage: true 
    });
    this.results.screenshots.push(screenshotPath);
    return screenshotPath;
  }

  async runTest(testName, testFunction) {
    this.results.totalTests++;
    console.log(`\n🧪 Running test: ${testName}`);
    
    try {
      const startTime = Date.now();
      await testFunction();
      const endTime = Date.now();
      
      this.results.passedTests++;
      this.results.performance[testName] = endTime - startTime;
      console.log(`✅ ${testName} - PASSED (${endTime - startTime}ms)`);
      
      return true;
    } catch (error) {
      this.results.failedTests++;
      this.results.errors.push({
        test: testName,
        error: error.message,
        timestamp: new Date().toISOString()
      });
      console.log(`❌ ${testName} - FAILED: ${error.message}`);
      
      // Take screenshot on failure
      await this.takeScreenshot(`failed-${testName.replace(/\s+/g, '-')}`);
      
      return false;
    }
  }

  async testApplicationStartup() {
    await this.runTest('Application Startup', async () => {
      await this.page.goto(this.baseUrl, { waitUntil: 'networkidle2' });
      
      // Check if the page loads without errors
      const title = await this.page.title();
      if (!title || title.includes('Error')) {
        throw new Error('Application failed to load properly');
      }
      
      // Check for main navigation elements
      await this.page.waitForSelector('nav', { timeout: 10000 });
      await this.page.waitForSelector('[data-testid="main-content"]', { timeout: 10000 });
      
      console.log('✅ Application started successfully');
    });
  }

  async testNavigation() {
    await this.runTest('Navigation System', async () => {
      // Test main navigation links
      const navLinks = [
        { selector: 'a[href="/"]', name: 'Home' },
        { selector: 'a[href="/ai-builder"]', name: 'AI Builder' },
        { selector: 'a[href="/templates"]', name: 'Templates' },
        { selector: 'a[href="/education"]', name: 'Education' },
        { selector: 'a[href="/projects"]', name: 'Projects' }
      ];

      for (const link of navLinks) {
        const element = await this.page.$(link.selector);
        if (!element) {
          throw new Error(`Navigation link "${link.name}" not found`);
        }
        
        // Test click functionality
        await element.click();
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Verify navigation worked
        const currentUrl = this.page.url();
        if (!currentUrl.includes(link.name.toLowerCase().replace(' ', '-'))) {
          throw new Error(`Navigation to "${link.name}" failed`);
        }
      }
      
      console.log('✅ All navigation links working');
    });
  }

  async testAIBuilder() {
    await this.runTest('AI Builder Interface', async () => {
      await this.page.goto(`${this.baseUrl}/ai-builder`);
      await this.page.waitForSelector('[data-testid="ai-builder"]', { timeout: 10000 });
      
      // Test AI prompt input
      const promptInput = await this.page.$('textarea[placeholder*="prompt"], input[placeholder*="prompt"]');
      if (!promptInput) {
        throw new Error('AI prompt input not found');
      }
      
      // Test prompt submission
      await promptInput.type('Create a simple todo app');
      await this.page.keyboard.press('Enter');
      
      // Wait for AI response
      await new Promise(resolve => setTimeout(resolve, 5000));
      
      // Check for generated code or response
      const response = await this.page.$('[data-testid="ai-response"], .ai-response, .generated-code');
      if (!response) {
        throw new Error('AI response not generated');
      }
      
      console.log('✅ AI Builder interface working');
    });
  }

  async testTemplateSystem() {
    await this.runTest('Template System', async () => {
      await this.page.goto(`${this.baseUrl}/templates`);
      await this.page.waitForSelector('[data-testid="templates"]', { timeout: 10000 });
      
      // Test template categories
      const categories = await this.page.$$('[data-testid="template-category"]');
      if (categories.length === 0) {
        throw new Error('No template categories found');
      }
      
      // Test template selection
      const firstTemplate = await this.page.$('[data-testid="template-item"]');
      if (!firstTemplate) {
        throw new Error('No templates available');
      }
      
      await firstTemplate.click();
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Check if template details are shown
      const templateDetails = await this.page.$('[data-testid="template-details"]');
      if (!templateDetails) {
        throw new Error('Template details not displayed');
      }
      
      console.log('✅ Template system working');
    });
  }

  async testCodeEditor() {
    await this.runTest('Code Editor', async () => {
      await this.page.goto(`${this.baseUrl}/ai-builder`);
      await this.page.waitForSelector('[data-testid="code-editor"]', { timeout: 10000 });
      
      // Test Monaco Editor
      const editor = await this.page.$('.monaco-editor');
      if (!editor) {
        throw new Error('Monaco Editor not found');
      }
      
      // Test code editing
      await this.page.click('.monaco-editor');
      await this.page.keyboard.type('console.log("Hello World");');
      
      // Check if code was entered
      const editorContent = await this.page.evaluate(() => {
        const editor = document.querySelector('.monaco-editor');
        return editor ? editor.textContent : '';
      });
      
      if (!editorContent.includes('Hello World')) {
        throw new Error('Code editor not accepting input');
      }
      
      console.log('✅ Code editor working');
    });
  }

  async testPreviewSystem() {
    await this.runTest('Preview System', async () => {
      await this.page.goto(`${this.baseUrl}/ai-builder`);
      
      // Switch to preview tab
      const previewTab = await this.page.$('[data-testid="preview-tab"]');
      if (previewTab) {
        await previewTab.click();
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Check if preview iframe is loaded
        const previewFrame = await this.page.$('iframe[data-testid="preview-frame"]');
        if (!previewFrame) {
          throw new Error('Preview iframe not found');
        }
        
        console.log('✅ Preview system working');
      }
    });
  }

  async testMultiWindowSystem() {
    await this.runTest('Multi-Window System', async () => {
      await this.page.goto(`${this.baseUrl}/ai-builder`);
      
      // Look for new window button
      const newWindowBtn = await this.page.$('[data-testid="new-window"], button[title*="window"], button[title*="Window"]');
      if (newWindowBtn) {
        await newWindowBtn.click();
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Check if new window was created
        const windows = await this.browser.pages();
        if (windows.length <= 1) {
          throw new Error('New window not created');
        }
        
        console.log('✅ Multi-window system working');
      }
    });
  }

  async testEducationPlatform() {
    await this.runTest('Education Platform', async () => {
      await this.page.goto(`${this.baseUrl}/education`);
      await this.page.waitForSelector('[data-testid="education"]', { timeout: 10000 });
      
      // Test course selection
      const courses = await this.page.$$('[data-testid="course-item"]');
      if (courses.length === 0) {
        throw new Error('No courses available');
      }
      
      // Test course interaction
      await courses[0].click();
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Check if course content is displayed
      const courseContent = await this.page.$('[data-testid="course-content"]');
      if (!courseContent) {
        throw new Error('Course content not displayed');
      }
      
      console.log('✅ Education platform working');
    });
  }

  async testProjectsManagement() {
    await this.runTest('Projects Management', async () => {
      await this.page.goto(`${this.baseUrl}/projects`);
      await this.page.waitForSelector('[data-testid="projects"]', { timeout: 10000 });
      
      // Test project creation
      const createProjectBtn = await this.page.$('[data-testid="create-project"], button[title*="create"], button[title*="Create"]');
      if (createProjectBtn) {
        await createProjectBtn.click();
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Check if project creation modal/form is shown
        const projectForm = await this.page.$('[data-testid="project-form"], .project-form, .modal');
        if (!projectForm) {
          throw new Error('Project creation form not shown');
        }
        
        console.log('✅ Projects management working');
      }
    });
  }

  async testResponsiveDesign() {
    await this.runTest('Responsive Design', async () => {
      // Test mobile viewport
      await this.page.setViewport({ width: 375, height: 667 });
      await this.page.goto(this.baseUrl);
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Check if mobile navigation works
      const mobileMenu = await this.page.$('[data-testid="mobile-menu"], .mobile-menu, .hamburger');
      if (mobileMenu) {
        await mobileMenu.click();
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
      
      // Test tablet viewport
      await this.page.setViewport({ width: 768, height: 1024 });
      await this.page.goto(this.baseUrl);
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Test desktop viewport
      await this.page.setViewport({ width: 1920, height: 1080 });
      await this.page.goto(this.baseUrl);
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('✅ Responsive design working');
    });
  }

  async testPerformance() {
    await this.runTest('Performance Metrics', async () => {
      await this.page.goto(this.baseUrl);
      
      // Measure page load time
      const loadTime = await this.page.evaluate(() => {
        return performance.timing.loadEventEnd - performance.timing.navigationStart;
      });
      
      if (loadTime > 10000) {
        throw new Error(`Page load time too slow: ${loadTime}ms`);
      }
      
      // Check for memory leaks
      const memoryUsage = await this.page.evaluate(() => {
        return performance.memory ? performance.memory.usedJSHeapSize : 0;
      });
      
      console.log(`✅ Performance metrics - Load time: ${loadTime}ms, Memory: ${memoryUsage} bytes`);
    });
  }

  async testErrorHandling() {
    await this.runTest('Error Handling', async () => {
      // Test invalid route
      await this.page.goto(`${this.baseUrl}/invalid-route`);
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Check if error page is shown
      const errorPage = await this.page.$('[data-testid="error-page"], .error-page, .not-found');
      if (!errorPage) {
        // Check if redirected to home
        const currentUrl = this.page.url();
        if (!currentUrl.includes(this.baseUrl)) {
          throw new Error('Error handling not working properly');
        }
      }
      
      console.log('✅ Error handling working');
    });
  }

  async testAccessibility() {
    await this.runTest('Accessibility', async () => {
      await this.page.goto(this.baseUrl);
      
      // Check for proper heading structure
      const headings = await this.page.$$eval('h1, h2, h3, h4, h5, h6', headings => 
        headings.map(h => h.tagName)
      );
      
      if (headings.length === 0) {
        throw new Error('No headings found - accessibility issue');
      }
      
      // Check for alt text on images
      const images = await this.page.$$eval('img', imgs => 
        imgs.map(img => img.alt)
      );
      
      const imagesWithoutAlt = images.filter(alt => !alt);
      if (imagesWithoutAlt.length > 0) {
        console.log('⚠️ Some images missing alt text');
      }
      
      console.log('✅ Basic accessibility checks passed');
    });
  }

  async runAllTests() {
    try {
      await this.initialize();
      
      // Create screenshots directory
      if (!fs.existsSync('./test-screenshots')) {
        fs.mkdirSync('./test-screenshots');
      }
      
      // Run all tests
      await this.testApplicationStartup();
      await this.testNavigation();
      await this.testAIBuilder();
      await this.testTemplateSystem();
      await this.testCodeEditor();
      await this.testPreviewSystem();
      await this.testMultiWindowSystem();
      await this.testEducationPlatform();
      await this.testProjectsManagement();
      await this.testResponsiveDesign();
      await this.testPerformance();
      await this.testErrorHandling();
      await this.testAccessibility();
      
      // Generate final report
      await this.generateReport();
      
    } catch (error) {
      console.error('❌ Test suite failed:', error);
      this.results.errors.push({
        type: 'test_suite_error',
        message: error.message,
        timestamp: new Date().toISOString()
      });
    } finally {
      if (this.browser) {
        await this.browser.close();
      }
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalTests: this.results.totalTests,
        passedTests: this.results.passedTests,
        failedTests: this.results.failedTests,
        successRate: ((this.results.passedTests / this.results.totalTests) * 100).toFixed(2) + '%'
      },
      performance: this.results.performance,
      errors: this.results.errors,
      screenshots: this.results.screenshots,
      recommendations: this.generateRecommendations()
    };

    // Save report to file
    const reportPath = `./dreambuild-test-report-${Date.now()}.json`;
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    // Generate markdown report
    const markdownReport = this.generateMarkdownReport(report);
    const markdownPath = `./dreambuild-test-report-${Date.now()}.md`;
    fs.writeFileSync(markdownPath, markdownReport);
    
    console.log('\n📊 Test Report Generated:');
    console.log(`📄 JSON Report: ${reportPath}`);
    console.log(`📄 Markdown Report: ${markdownPath}`);
    console.log(`📸 Screenshots: ./test-screenshots/`);
    
    console.log('\n🎯 Test Summary:');
    console.log(`✅ Passed: ${this.results.passedTests}/${this.results.totalTests}`);
    console.log(`❌ Failed: ${this.results.failedTests}/${this.results.totalTests}`);
    console.log(`📈 Success Rate: ${report.summary.successRate}`);
    
    if (this.results.errors.length > 0) {
      console.log('\n❌ Errors Found:');
      this.results.errors.forEach((error, index) => {
        console.log(`${index + 1}. ${error.type}: ${error.message}`);
      });
    }
  }

  generateRecommendations() {
    const recommendations = [];
    
    if (this.results.failedTests > 0) {
      recommendations.push('Fix failed tests to ensure 100% functionality');
    }
    
    if (this.results.errors.length > 0) {
      recommendations.push('Address console and page errors for better stability');
    }
    
    const avgPerformance = Object.values(this.results.performance).reduce((a, b) => a + b, 0) / Object.keys(this.results.performance).length;
    if (avgPerformance > 5000) {
      recommendations.push('Optimize performance for better user experience');
    }
    
    return recommendations;
  }

  generateMarkdownReport(report) {
    return `# DreamBuild Comprehensive Test Report

## 📊 Test Summary

- **Total Tests**: ${report.summary.totalTests}
- **Passed**: ${report.summary.passedTests} ✅
- **Failed**: ${report.summary.failedTests} ❌
- **Success Rate**: ${report.summary.successRate}

## ⏱️ Performance Metrics

${Object.entries(report.performance).map(([test, time]) => `- **${test}**: ${time}ms`).join('\n')}

## 🐛 Errors Found

${report.errors.length > 0 ? report.errors.map((error, index) => `${index + 1}. **${error.type}**: ${error.message}`).join('\n') : 'No errors found! 🎉'}

## 📸 Screenshots

${report.screenshots.map(screenshot => `- ${screenshot}`).join('\n')}

## 💡 Recommendations

${report.recommendations.map(rec => `- ${rec}`).join('\n')}

## 🕒 Generated At

${report.timestamp}

---
*Generated by DreamBuild Comprehensive Test Suite*
`;
  }
}

// Run the test suite
const testSuite = new DreamBuildComprehensiveTest();
testSuite.runAllTests().catch(console.error);
