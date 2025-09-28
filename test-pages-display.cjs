const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// Test configuration
const BASE_URL = 'http://localhost:4173';
const SCREENSHOT_DIR = './test-screenshots';
const TIMEOUT = 30000; // 30 seconds per page

// List of pages to test
const PAGES_TO_TEST = [
  { name: 'Home', path: '/', expectedElements: ['h1', 'nav', 'main'] },
  { name: 'About', path: '/about', expectedElements: ['h1', 'main'] },
  { name: 'Contact', path: '/contact', expectedElements: ['h1', 'form', 'main'] },
  { name: 'Login', path: '/login', expectedElements: ['h1', 'form', 'input[type="email"]'] },
  { name: 'Signup', path: '/signup', expectedElements: ['h1', 'form', 'input[type="email"]'] },
  { name: 'Dashboard', path: '/dashboard', expectedElements: ['h1', 'main', 'nav'] },
  { name: 'Projects', path: '/projects', expectedElements: ['h1', 'main'] },
  { name: 'Templates', path: '/templates', expectedElements: ['h1', 'main'] },
  { name: 'AI Builder', path: '/ai-builder', expectedElements: ['main', 'canvas', 'div'] },
  { name: 'Education', path: '/education', expectedElements: ['h1', 'main'] },
  { name: 'Documentation', path: '/documentation', expectedElements: ['h1', 'main'] },
  { name: 'Examples', path: '/examples', expectedElements: ['h1', 'main'] },
  { name: 'Community', path: '/community', expectedElements: ['h1', 'main'] },
  { name: 'Blog', path: '/blog', expectedElements: ['h1', 'main'] },
  { name: 'App Gallery', path: '/app-gallery', expectedElements: ['h1', 'main'] },
  { name: 'Settings', path: '/settings', expectedElements: ['h1', 'main'] },
  { name: 'Privacy', path: '/privacy', expectedElements: ['h1', 'main'] },
  { name: 'Terms', path: '/terms', expectedElements: ['h1', 'main'] },
  { name: 'Download', path: '/download', expectedElements: ['h1', 'main'] },
  { name: 'App Host', path: '/app-host', expectedElements: ['h1', 'main'] },
  { name: 'Delete Apps', path: '/delete-apps', expectedElements: ['h1', 'main'] }
];

// Test results storage
const testResults = {
  total: PAGES_TO_TEST.length,
  passed: 0,
  failed: 0,
  errors: [],
  screenshots: []
};

// Create screenshot directory
if (!fs.existsSync(SCREENSHOT_DIR)) {
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
}

async function testPage(browser, pageConfig) {
  const page = await browser.newPage();
  const startTime = Date.now();
  
  try {
    console.log(`\n🔍 Testing ${pageConfig.name} (${pageConfig.path})...`);
    
    // Set viewport for consistent screenshots
    await page.setViewport({ width: 1280, height: 720 });
    
    // Enable console logging
    page.on('console', msg => {
      if (msg.type() === 'error') {
        console.error(`❌ Console Error on ${pageConfig.name}:`, msg.text());
        testResults.errors.push({
          page: pageConfig.name,
          error: msg.text(),
          type: 'console_error'
        });
      }
    });
    
    // Listen for page errors
    page.on('pageerror', error => {
      console.error(`❌ Page Error on ${pageConfig.name}:`, error.message);
      testResults.errors.push({
        page: pageConfig.name,
        error: error.message,
        type: 'page_error'
      });
    });
    
    // Navigate to the page
    const url = `${BASE_URL}${pageConfig.path}`;
    console.log(`   📍 Navigating to: ${url}`);
    
    const response = await page.goto(url, { 
      waitUntil: 'networkidle2',
      timeout: TIMEOUT 
    });
    
    if (!response || !response.ok()) {
      throw new Error(`HTTP ${response ? response.status() : 'No response'}`);
    }
    
    // Wait for page to load completely
    await page.waitForTimeout(2000);
    
    // Check for expected elements
    const elementChecks = await Promise.all(
      pageConfig.expectedElements.map(async (selector) => {
        try {
          await page.waitForSelector(selector, { timeout: 5000 });
          return { selector, found: true };
        } catch (e) {
          return { selector, found: false, error: e.message };
        }
      })
    );
    
    // Check for any missing elements
    const missingElements = elementChecks.filter(check => !check.found);
    
    if (missingElements.length > 0) {
      console.log(`   ⚠️  Missing elements: ${missingElements.map(e => e.selector).join(', ')}`);
    }
    
    // Take screenshot
    const screenshotPath = path.join(SCREENSHOT_DIR, `${pageConfig.name.toLowerCase().replace(/\s+/g, '-')}.png`);
    await page.screenshot({ 
      path: screenshotPath, 
      fullPage: true
    });
    
    // Check for React errors in the page
    const reactErrors = await page.evaluate(() => {
      const errorElements = document.querySelectorAll('[data-react-error]');
      return Array.from(errorElements).map(el => el.textContent);
    });
    
    if (reactErrors.length > 0) {
      console.log(`   ⚠️  React errors found: ${reactErrors.length}`);
      testResults.errors.push({
        page: pageConfig.name,
        error: reactErrors.join('; '),
        type: 'react_error'
      });
    }
    
    // Check if page loaded successfully (no major errors)
    const hasErrors = testResults.errors.some(error => error.page === pageConfig.name);
    const hasMissingElements = missingElements.length > 0;
    
    if (!hasErrors && !hasMissingElements) {
      console.log(`   ✅ ${pageConfig.name} loaded successfully`);
      testResults.passed++;
      testResults.screenshots.push({
        page: pageConfig.name,
        path: screenshotPath,
        status: 'success'
      });
    } else {
      console.log(`   ❌ ${pageConfig.name} has issues`);
      testResults.failed++;
      testResults.screenshots.push({
        page: pageConfig.name,
        path: screenshotPath,
        status: 'failed',
        issues: {
          errors: hasErrors,
          missingElements: missingElements.length
        }
      });
    }
    
    const loadTime = Date.now() - startTime;
    console.log(`   ⏱️  Load time: ${loadTime}ms`);
    
  } catch (error) {
    console.error(`   ❌ ${pageConfig.name} failed:`, error.message);
    testResults.failed++;
    testResults.errors.push({
      page: pageConfig.name,
      error: error.message,
      type: 'navigation_error'
    });
    
    // Take error screenshot
    try {
      const screenshotPath = path.join(SCREENSHOT_DIR, `${pageConfig.name.toLowerCase().replace(/\s+/g, '-')}-error.png`);
      await page.screenshot({ 
        path: screenshotPath, 
        fullPage: true 
      });
      testResults.screenshots.push({
        page: pageConfig.name,
        path: screenshotPath,
        status: 'error'
      });
    } catch (screenshotError) {
      console.error(`   📸 Failed to take error screenshot:`, screenshotError.message);
    }
  } finally {
    await page.close();
  }
}

async function runTests() {
  console.log('🚀 Starting DreamBuild Page Display Tests');
  console.log(`📊 Testing ${PAGES_TO_TEST.length} pages...`);
  console.log(`🌐 Base URL: ${BASE_URL}`);
  console.log(`📸 Screenshots will be saved to: ${SCREENSHOT_DIR}`);
  
  const browser = await puppeteer.launch({
    headless: 'new',
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
  
  try {
    // Test each page
    for (const pageConfig of PAGES_TO_TEST) {
      await testPage(browser, pageConfig);
    }
    
    // Generate test report
    console.log('\n📊 Test Results Summary:');
    console.log(`✅ Passed: ${testResults.passed}/${testResults.total}`);
    console.log(`❌ Failed: ${testResults.failed}/${testResults.total}`);
    console.log(`📸 Screenshots: ${testResults.screenshots.length}`);
    
    if (testResults.errors.length > 0) {
      console.log('\n🚨 Errors Found:');
      testResults.errors.forEach((error, index) => {
        console.log(`${index + 1}. ${error.page} (${error.type}): ${error.error}`);
      });
    }
    
    // Save detailed report
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        total: testResults.total,
        passed: testResults.passed,
        failed: testResults.failed,
        successRate: `${((testResults.passed / testResults.total) * 100).toFixed(1)}%`
      },
      errors: testResults.errors,
      screenshots: testResults.screenshots
    };
    
    fs.writeFileSync(
      path.join(SCREENSHOT_DIR, 'test-report.json'), 
      JSON.stringify(report, null, 2)
    );
    
    console.log(`\n📄 Detailed report saved to: ${path.join(SCREENSHOT_DIR, 'test-report.json')}`);
    
    // Final status
    if (testResults.failed === 0) {
      console.log('\n🎉 All tests passed! DreamBuild pages are displaying correctly.');
    } else {
      console.log(`\n⚠️  ${testResults.failed} pages had issues. Check the report for details.`);
    }
    
  } finally {
    await browser.close();
  }
}

// Run the tests
runTests().catch(error => {
  console.error('💥 Test suite failed:', error);
  process.exit(1);
});
