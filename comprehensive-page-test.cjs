const puppeteer = require('puppeteer');

async function runComprehensivePageTest() {
  const browser = await puppeteer.launch({ 
    headless: "new",
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  
  // Set viewport
  await page.setViewport({ width: 1280, height: 720 });
  
  // Enable console logging
  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.log('❌ Console Error:', msg.text());
    }
  });
  
  page.on('pageerror', err => {
    console.log('❌ Page Error:', err.message);
  });
  
  const results = {
    passed: 0,
    failed: 0,
    errors: []
  };
  
  console.log('🚀 Starting Comprehensive Page Test for DreamBuild...\n');
  
  // Test URLs and expected content
  const testCases = [
    {
      name: 'Home Page',
      url: 'https://dreambuild-2024-app.web.app/',
      expectedContent: ['AI Development Platform', 'Build with AI', 'Start Building'],
      shouldNotHave: ['Code Editor', 'Run Code']
    },
    {
      name: 'AI Builder Page',
      url: 'https://dreambuild-2024-app.web.app/#/ai-builder',
      expectedContent: ['AI Builder', 'Code Editor', 'Run Code'],
      shouldNotHave: ['Start Building', 'Browse Templates']
    },
    {
      name: 'Templates Page',
      url: 'https://dreambuild-2024-app.web.app/#/templates',
      expectedContent: ['Template Library', 'Choose from our collection', 'Use Template'],
      shouldNotHave: ['Code Editor', 'Run Code']
    },
    {
      name: 'Dashboard Page',
      url: 'https://dreambuild-2024-app.web.app/#/dashboard',
      expectedContent: ['Dashboard', 'Projects'],
      shouldNotHave: ['Code Editor', 'Run Code']
    },
    {
      name: 'Education Page',
      url: 'https://dreambuild-2024-app.web.app/#/education',
      expectedContent: ['Education', 'Learn'],
      shouldNotHave: ['Code Editor', 'Run Code']
    },
    {
      name: 'Projects Page',
      url: 'https://dreambuild-2024-app.web.app/#/projects',
      expectedContent: ['Projects', 'Manage and organize', 'Create New Project'],
      shouldNotHave: ['Code Editor', 'Run Code']
    },
    {
      name: 'Gallery Page',
      url: 'https://dreambuild-2024-app.web.app/#/gallery',
      expectedContent: ['DreamBuild App Gallery', 'Discover amazing apps', 'View App'],
      shouldNotHave: ['Code Editor', 'Run Code']
    },
    {
      name: 'Download Page',
      url: 'https://dreambuild-2024-app.web.app/#/download',
      expectedContent: ['Download DreamBuild Desktop', 'Get the full desktop experience', 'Download Instructions'],
      shouldNotHave: ['Code Editor', 'Run Code']
    }
  ];
  
  // Test each page
  for (const testCase of testCases) {
    console.log(`\n🔍 Testing ${testCase.name}...`);
    
    try {
      // Navigate to the page
      await page.goto(testCase.url, { 
        waitUntil: 'networkidle0', 
        timeout: 30000 
      });
      
      // Wait for content to load
      await page.waitForTimeout(3000);
      
      // Get current URL to verify routing
      const currentUrl = page.url();
      console.log(`   URL: ${currentUrl}`);
      
      // Get page content
      const bodyText = await page.evaluate(() => document.body.innerText);
      
      // Check for expected content
      let hasExpectedContent = true;
      for (const expected of testCase.expectedContent) {
        if (!bodyText.includes(expected)) {
          console.log(`   ❌ Missing expected content: "${expected}"`);
          hasExpectedContent = false;
        } else {
          console.log(`   ✅ Found expected content: "${expected}"`);
        }
      }
      
      // Check for content that should NOT be present
      let hasUnexpectedContent = false;
      for (const unexpected of testCase.shouldNotHave) {
        if (bodyText.includes(unexpected)) {
          console.log(`   ❌ Found unexpected content: "${unexpected}"`);
          hasUnexpectedContent = true;
        }
      }
      
      // Check if page loaded without errors
      const hasErrors = await page.evaluate(() => {
        return document.querySelector('[data-testid="error"]') !== null ||
               document.body.innerText.includes('Error') ||
               document.body.innerText.includes('404');
      });
      
      if (hasErrors) {
        console.log(`   ❌ Page has errors`);
        results.failed++;
        results.errors.push(`${testCase.name}: Page has errors`);
      } else if (hasExpectedContent && !hasUnexpectedContent) {
        console.log(`   ✅ ${testCase.name} - PASSED`);
        results.passed++;
      } else {
        console.log(`   ❌ ${testCase.name} - FAILED`);
        results.failed++;
        results.errors.push(`${testCase.name}: Content validation failed`);
      }
      
    } catch (error) {
      console.log(`   ❌ ${testCase.name} - ERROR: ${error.message}`);
      results.failed++;
      results.errors.push(`${testCase.name}: ${error.message}`);
    }
  }
  
  // Test navigation between pages
  console.log('\n🔗 Testing Navigation Links...');
  
  try {
    // Start at home page
    await page.goto('https://dreambuild-2024-app.web.app/', { waitUntil: 'networkidle0' });
    
    // Test navigation links
    const navTests = [
      { name: 'AI Builder Link', selector: 'a[href="#/ai-builder"]', expectedUrl: '#/ai-builder' },
      { name: 'Templates Link', selector: 'a[href="#/templates"]', expectedUrl: '#/templates' },
      { name: 'Dashboard Link', selector: 'a[href="#/dashboard"]', expectedUrl: '#/dashboard' },
      { name: 'Education Link', selector: 'a[href="#/education"]', expectedUrl: '#/education' },
      { name: 'Projects Link', selector: 'a[href="#/projects"]', expectedUrl: '#/projects' },
      { name: 'Gallery Link', selector: 'a[href="#/gallery"]', expectedUrl: '#/gallery' },
      { name: 'Download Link', selector: 'a[href="#/download"]', expectedUrl: '#/download' }
    ];
    
    for (const navTest of navTests) {
      try {
        // Click the navigation link
        await page.click(navTest.selector);
        await page.waitForTimeout(2000);
        
        // Check if URL changed correctly
        const currentUrl = page.url();
        if (currentUrl.includes(navTest.expectedUrl)) {
          console.log(`   ✅ ${navTest.name} - Navigation working`);
          results.passed++;
        } else {
          console.log(`   ❌ ${navTest.name} - URL mismatch: ${currentUrl}`);
          results.failed++;
          results.errors.push(`${navTest.name}: URL mismatch`);
        }
        
        // Go back to home for next test
        await page.goto('https://dreambuild-2024-app.web.app/', { waitUntil: 'networkidle0' });
        
      } catch (error) {
        console.log(`   ❌ ${navTest.name} - Error: ${error.message}`);
        results.failed++;
        results.errors.push(`${navTest.name}: ${error.message}`);
      }
    }
    
  } catch (error) {
    console.log(`   ❌ Navigation test failed: ${error.message}`);
    results.failed++;
    results.errors.push(`Navigation test: ${error.message}`);
  }
  
  // Test responsive design
  console.log('\n📱 Testing Responsive Design...');
  
  const viewports = [
    { name: 'Desktop', width: 1280, height: 720 },
    { name: 'Tablet', width: 768, height: 1024 },
    { name: 'Mobile', width: 375, height: 667 }
  ];
  
  for (const viewport of viewports) {
    try {
      await page.setViewport({ width: viewport.width, height: viewport.height });
      await page.goto('https://dreambuild-2024-app.web.app/', { waitUntil: 'networkidle0' });
      await page.waitForTimeout(2000);
      
      // Check if page renders without horizontal scroll
      const hasHorizontalScroll = await page.evaluate(() => {
        return document.body.scrollWidth > window.innerWidth;
      });
      
      if (!hasHorizontalScroll) {
        console.log(`   ✅ ${viewport.name} - No horizontal scroll`);
        results.passed++;
      } else {
        console.log(`   ❌ ${viewport.name} - Has horizontal scroll`);
        results.failed++;
        results.errors.push(`${viewport.name}: Horizontal scroll detected`);
      }
      
    } catch (error) {
      console.log(`   ❌ ${viewport.name} - Error: ${error.message}`);
      results.failed++;
      results.errors.push(`${viewport.name}: ${error.message}`);
    }
  }
  
  // Test performance
  console.log('\n⚡ Testing Performance...');
  
  try {
    await page.goto('https://dreambuild-2024-app.web.app/', { waitUntil: 'networkidle0' });
    
    // Get performance metrics
    const metrics = await page.evaluate(() => {
      const navigation = performance.getEntriesByType('navigation')[0];
      return {
        loadTime: navigation.loadEventEnd - navigation.loadEventStart,
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        totalTime: navigation.loadEventEnd - navigation.navigationStart
      };
    });
    
    console.log(`   Load Time: ${metrics.loadTime}ms`);
    console.log(`   DOM Content Loaded: ${metrics.domContentLoaded}ms`);
    console.log(`   Total Time: ${metrics.totalTime}ms`);
    
    if (metrics.totalTime < 5000) {
      console.log(`   ✅ Performance - Good (${metrics.totalTime}ms)`);
      results.passed++;
    } else {
      console.log(`   ⚠️ Performance - Slow (${metrics.totalTime}ms)`);
      results.failed++;
      results.errors.push(`Performance: Slow load time (${metrics.totalTime}ms)`);
    }
    
  } catch (error) {
    console.log(`   ❌ Performance test failed: ${error.message}`);
    results.failed++;
    results.errors.push(`Performance test: ${error.message}`);
  }
  
  await browser.close();
  
  // Print results
  console.log('\n📊 Test Results Summary:');
  console.log(`✅ Passed: ${results.passed}`);
  console.log(`❌ Failed: ${results.failed}`);
  console.log(`📈 Success Rate: ${((results.passed / (results.passed + results.failed)) * 100).toFixed(1)}%`);
  
  if (results.errors.length > 0) {
    console.log('\n❌ Errors Found:');
    results.errors.forEach(error => console.log(`   - ${error}`));
  }
  
  console.log('\n🎉 Comprehensive Page Test Complete!');
  
  return results;
}

// Run the test
runComprehensivePageTest().catch(console.error);
