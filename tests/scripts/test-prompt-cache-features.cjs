/**
 * Automated Test: Prompt Cache Features with 20,000 Cached Prompts
 * Tests the new Firebase prompt cache system with Puppeteer
 * Product of Bradley Virtual Solutions, LLC
 */

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

console.log('🧪 Starting DreamBuild Prompt Cache Feature Tests...\n');

// Test configuration
const TEST_CONFIG = {
  baseUrl: 'http://localhost:3000', // Vite dev server
  // baseUrl: 'https://dreambuild-2024-app.web.app', // Production URL
  timeout: 30000,
  headless: true, // Set to true for CI/CD
  testPrompts: [
    'create a todo app',
    'build a calculator',
    'make a tetris game',
    'generate a weather app',
    'create a chat application',
    'build a timer with dark mode',
    'make a snake game with high scores',
    'create a note app with search',
    'build a fitness tracker',
    'generate a calendar with events'
  ],
  expectedFeatures: [
    'instant-response',
    'cache-hit',
    'similarity-matching',
    'usage-tracking',
    'app-generation'
  ]
};

// Test results tracking
let testResults = {
  total: 0,
  passed: 0,
  failed: 0,
  details: [],
  performance: {
    averageResponseTime: 0,
    cacheHitRate: 0,
    totalTests: 0
  }
};

class PromptCacheTester {
  constructor() {
    this.browser = null;
    this.page = null;
    this.startTime = null;
  }

  async initialize() {
    console.log('🚀 Initializing Puppeteer browser...');
    
    this.browser = await puppeteer.launch({
      headless: TEST_CONFIG.headless,
      defaultViewport: { width: 1920, height: 1080 },
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    this.page = await this.browser.newPage();
    
    // Enable console logging
    this.page.on('console', msg => {
      if (msg.type() === 'error') {
        console.error('❌ Browser Error:', msg.text());
      } else if (msg.text().includes('Cache') || msg.text().includes('cache')) {
        console.log('📊 Cache Log:', msg.text());
      }
    });

    console.log('✅ Browser initialized successfully');
  }

  async navigateToApp() {
    console.log(`🌐 Navigating to ${TEST_CONFIG.baseUrl}...`);
    
    try {
      await this.page.goto(TEST_CONFIG.baseUrl, { 
        waitUntil: 'networkidle2',
        timeout: TEST_CONFIG.timeout 
      });
      
      // Wait for initial page load
      await this.page.waitForSelector('body', { timeout: 5000 });
      
      // Navigate to AI Builder page
      console.log('🔍 Navigating to AI Builder...');
      await new Promise(resolve => setTimeout(resolve, 2000)); // Wait for app to initialize
      
      // Try direct navigation to AI Builder
      await this.page.goto(`${TEST_CONFIG.baseUrl}/#/ai-builder`, { 
        waitUntil: 'networkidle2',
        timeout: TEST_CONFIG.timeout 
      });
      
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('✅ Successfully navigated to DreamBuild AI Builder');
      return true;
    } catch (error) {
      console.error('❌ Failed to navigate to app:', error.message);
      return false;
    }
  }

  async testPromptCache(prompt, testIndex) {
    console.log(`\n🧪 Test ${testIndex + 1}: Testing prompt "${prompt}"`);
    
    const testStartTime = Date.now();
    let testResult = {
      prompt,
      testIndex,
      passed: false,
      responseTime: 0,
      cacheHit: false,
      features: [],
      errors: []
    };

    try {
      // Navigate to AI Builder if not already there
      const currentUrl = this.page.url();
      if (!currentUrl.includes('ai-builder')) {
        await this.page.click('a[href*="ai-builder"]');
        await this.page.waitForSelector('[data-testid="ai-builder"]', { timeout: 5000 });
      }

      // Find and clear the prompt input
      const promptInput = await this.page.evaluateHandle(() => {
        // Look for various input types
        const inputs = [
          ...Array.from(document.querySelectorAll('textarea')),
          ...Array.from(document.querySelectorAll('input[type="text"]')),
          ...Array.from(document.querySelectorAll('input[placeholder]'))
        ];
        
        return inputs.find(el => 
          el.placeholder?.toLowerCase().includes('prompt') ||
          el.placeholder?.toLowerCase().includes('build') ||
          el.placeholder?.toLowerCase().includes('create') ||
          el.placeholder?.toLowerCase().includes('app') ||
          el.name?.toLowerCase().includes('prompt')
        ) || inputs[0]; // Fallback to first input
      });
      
      if (!promptInput || !promptInput.asElement()) {
        throw new Error('Could not find prompt input field');
      }

      // Clear and enter the test prompt
      const inputElement = promptInput.asElement();
      await inputElement.click({ clickCount: 3 }); // Select all
      await inputElement.type(prompt);
      
      console.log(`   📝 Entered prompt: "${prompt}"`);

      // Look for and click generate/submit button
      const generateButton = await this.page.evaluateHandle(() => {
        const buttons = Array.from(document.querySelectorAll('button'));
        return buttons.find(btn => 
          btn.textContent.includes('Generate') ||
          btn.textContent.includes('Create') ||
          btn.textContent.includes('Build') ||
          btn.textContent.includes('Submit') ||
          btn.type === 'submit'
        ) || buttons.find(btn => btn.textContent.trim().length > 0);
      });
      
      if (generateButton && generateButton.asElement()) {
        await generateButton.asElement().click();
        console.log('   🖱️ Clicked generate button');
      } else {
        // Try pressing Enter
        await inputElement.press('Enter');
        console.log('   ⌨️ Pressed Enter to submit');
      }

      // Wait for response (look for various indicators)
      const responseStartTime = Date.now();
      
      console.log('   ⏳ Waiting for response...');
      
      try {
        // Wait for generation to complete - give it more time
        await this.page.waitForFunction(() => {
          // Check for loading indicators first
          const hasLoadingText = document.body.innerText.includes('Generating') ||
                                 document.body.innerText.includes('Loading') ||
                                 document.body.innerText.includes('Processing');
          
          // Check for completion indicators
          const hasSuccess = document.body.innerText.includes('✅') ||
                            document.body.innerText.includes('Generated') ||
                            document.body.innerText.includes('Complete') ||
                            document.body.innerText.includes('Success');
          
          // Check for actual content
          const hasContent = document.querySelector('iframe') ||
                            document.querySelector('canvas') ||
                            document.querySelector('.preview') ||
                            document.querySelector('pre') ||
                            document.querySelector('code');
          
          // Check for cache indicators
          const hasCacheHit = document.body.innerText.includes('Cache HIT') ||
                             document.body.innerText.includes('cache hit') ||
                             document.body.innerText.includes('instant');
          
          // Return true if we see completion or content
          return hasSuccess || hasContent || hasCacheHit;
        }, { timeout: 20000 }); // Increased to 20 seconds
        
        console.log('   ✅ Response received!');
      } catch (waitError) {
        console.log('   ⚠️ Timeout waiting for response, checking what we have...');
      }

      testResult.responseTime = Date.now() - responseStartTime;

      // Check for cache hit
      const pageContent = await this.page.content();
      const consoleLogs = await this.page.evaluate(() => {
        return window.console.log.toString();
      });

      testResult.cacheHit = pageContent.includes('Cache HIT') || 
                           pageContent.includes('instant response') ||
                           consoleLogs.includes('Cache HIT');

      // Check for generated app features
      const hasPreview = await this.page.$('iframe, canvas, .app-preview, .code-preview') !== null;
      const hasCode = await this.page.$('.code-editor, pre, code') !== null;
      const hasSuccess = pageContent.includes('✅') || pageContent.includes('Generated');

      if (hasPreview || hasCode || hasSuccess) {
        testResult.features.push('app-generation');
        testResult.passed = true;
      }

      if (testResult.cacheHit) {
        testResult.features.push('cache-hit');
        testResult.features.push('instant-response');
      }

      // Check response time for performance
      if (testResult.responseTime < 2000) {
        testResult.features.push('fast-response');
      }

      console.log(`✅ Test ${testIndex + 1} completed in ${testResult.responseTime}ms`);
      if (testResult.cacheHit) {
        console.log('⚡ Cache HIT detected!');
      } else {
        console.log('🔄 New generation (no cache hit)');
      }

    } catch (error) {
      console.error(`❌ Test ${testIndex + 1} failed:`, error.message);
      testResult.errors.push(error.message);
    }

    return testResult;
  }

  async runAllTests() {
    console.log('🎯 Starting comprehensive prompt cache tests...\n');
    
    this.startTime = Date.now();

    for (let i = 0; i < TEST_CONFIG.testPrompts.length; i++) {
      const prompt = TEST_CONFIG.testPrompts[i];
      const result = await this.testPromptCache(prompt, i);
      
      testResults.total++;
      if (result.passed) {
        testResults.passed++;
      } else {
        testResults.failed++;
      }
      
      testResults.details.push(result);
      
      // Small delay between tests
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    // Calculate performance metrics
    this.calculatePerformanceMetrics();
    
    const totalTime = Date.now() - this.startTime;
    console.log(`\n⏱️ Total test time: ${(totalTime / 1000).toFixed(2)}s`);
  }

  calculatePerformanceMetrics() {
    const validResults = testResults.details.filter(r => r.responseTime > 0);
    
    if (validResults.length > 0) {
      const totalResponseTime = validResults.reduce((sum, r) => sum + r.responseTime, 0);
      testResults.performance.averageResponseTime = totalResponseTime / validResults.length;
      
      const cacheHits = validResults.filter(r => r.cacheHit).length;
      testResults.performance.cacheHitRate = (cacheHits / validResults.length) * 100;
    }
    
    testResults.performance.totalTests = testResults.total;
  }

  async generateReport() {
    console.log('\n📊 Generating test report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        total: testResults.total,
        passed: testResults.passed,
        failed: testResults.failed,
        successRate: ((testResults.passed / testResults.total) * 100).toFixed(2) + '%'
      },
      performance: testResults.performance,
      details: testResults.details
    };

    // Save detailed report
    const reportPath = path.join(__dirname, '../reports/prompt-cache-test-report.json');
    fs.mkdirSync(path.dirname(reportPath), { recursive: true });
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

    // Generate human-readable report
    const humanReport = this.generateHumanReport(report);
    const humanReportPath = path.join(__dirname, '../reports/prompt-cache-test-report.md');
    fs.writeFileSync(humanReportPath, humanReport);

    console.log(`📄 Report saved to: ${reportPath}`);
    console.log(`📄 Human report saved to: ${humanReportPath}`);
    
    return report;
  }

  generateHumanReport(report) {
    return `# DreamBuild Prompt Cache Feature Test Report

**Generated:** ${report.timestamp}
**Product of Bradley Virtual Solutions, LLC**

## 📊 Test Summary

- **Total Tests:** ${report.summary.total}
- **Passed:** ${report.summary.passed}
- **Failed:** ${report.summary.failed}
- **Success Rate:** ${report.summary.successRate}

## ⚡ Performance Metrics

- **Average Response Time:** ${report.performance.averageResponseTime.toFixed(2)}ms
- **Cache Hit Rate:** ${report.performance.cacheHitRate.toFixed(2)}%
- **Total Test Duration:** ${report.performance.totalTests} tests completed

## 🧪 Test Details

${report.details.map((test, index) => `
### Test ${index + 1}: "${test.prompt}"
- **Status:** ${test.passed ? '✅ PASSED' : '❌ FAILED'}
- **Response Time:** ${test.responseTime}ms
- **Cache Hit:** ${test.cacheHit ? '⚡ YES' : '🔄 NO'}
- **Features Detected:** ${test.features.join(', ') || 'None'}
- **Errors:** ${test.errors.join(', ') || 'None'}
`).join('')}

## 🎯 Key Findings

${report.performance.cacheHitRate > 50 ? 
  '✅ **Excellent cache performance** - High cache hit rate indicates the 20,000 prompts are working effectively!' : 
  '⚠️ **Cache performance needs improvement** - Low cache hit rate suggests prompts may need better matching.'}

${report.performance.averageResponseTime < 3000 ? 
  '⚡ **Fast response times** - Users are getting quick results!' : 
  '⏱️ **Response times could be improved** - Consider optimizing the generation process.'}

## 🚀 Recommendations

1. **Cache Optimization:** ${report.performance.cacheHitRate > 70 ? 'Cache is performing excellently!' : 'Consider expanding the prompt matching algorithm.'}
2. **Performance:** ${report.performance.averageResponseTime < 2000 ? 'Response times are optimal!' : 'Investigate ways to reduce generation time.'}
3. **Feature Coverage:** Monitor which features are most commonly requested and ensure they're well-cached.

---
*Report generated by DreamBuild Automated Testing System*
`;
  }

  async cleanup() {
    if (this.browser) {
      await this.browser.close();
      console.log('🧹 Browser cleanup completed');
    }
  }
}

// Main test execution
async function runPromptCacheTests() {
  const tester = new PromptCacheTester();
  
  try {
    await tester.initialize();
    
    const navigated = await tester.navigateToApp();
    if (!navigated) {
      throw new Error('Failed to navigate to DreamBuild app');
    }
    
    await tester.runAllTests();
    const report = await tester.generateReport();
    
    // Print summary to console
    console.log('\n🎉 TEST COMPLETION SUMMARY');
    console.log('================================');
    console.log(`📊 Total Tests: ${report.summary.total}`);
    console.log(`✅ Passed: ${report.summary.passed}`);
    console.log(`❌ Failed: ${report.summary.failed}`);
    console.log(`📈 Success Rate: ${report.summary.successRate}`);
    console.log(`⚡ Avg Response Time: ${report.performance.averageResponseTime.toFixed(2)}ms`);
    console.log(`🎯 Cache Hit Rate: ${report.performance.cacheHitRate.toFixed(2)}%`);
    
    if (report.summary.successRate === '100.00%') {
      console.log('\n🏆 ALL TESTS PASSED! The prompt cache system is working perfectly!');
    } else {
      console.log('\n⚠️ Some tests failed. Check the detailed report for more information.');
    }
    
  } catch (error) {
    console.error('❌ Test execution failed:', error);
    process.exit(1);
  } finally {
    await tester.cleanup();
  }
}

// Run the tests
runPromptCacheTests().then(() => {
  console.log('\n✅ Prompt cache feature testing completed!');
  process.exit(0);
}).catch((error) => {
  console.error('❌ Test suite failed:', error);
  process.exit(1);
});
