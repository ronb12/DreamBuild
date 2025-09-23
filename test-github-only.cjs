const puppeteer = require('puppeteer');

(async () => {
  console.log('🚀 Testing GitHub-Only Authentication...');
  
  const browser = await puppeteer.launch({ 
    headless: false,
    defaultViewport: null,
    args: ['--start-maximized']
  });
  
  const page = await browser.newPage();
  
  // Monitor for Google API requests
  let googleApiRequested = false;
  page.on('request', request => {
    if (request.url().includes('apis.google.com')) {
      googleApiRequested = true;
      console.log('❌ Google API requested:', request.url());
    }
  });
  
  // Monitor console messages
  page.on('console', msg => {
    if (msg.text().includes('GitHub') || msg.text().includes('provider')) {
      console.log('🔍 Console:', msg.text());
    }
  });
  
  try {
    // Navigate to login page
    console.log('📱 Navigating to login page...');
    await page.goto('http://localhost:3000/login', { waitUntil: 'networkidle0' });
    
    // Wait for page to load
    await page.waitForSelector('h1');
    console.log('✅ Login page loaded');
    
    // Click ONLY GitHub button
    console.log('🖱️ Clicking GitHub button only...');
    await page.evaluate(() => {
      const buttons = document.querySelectorAll('button');
      const githubBtn = Array.from(buttons).find(btn => 
        btn.textContent.includes('Continue with GitHub')
      );
      if (githubBtn) {
        githubBtn.click();
        console.log('GitHub button clicked');
      }
    });
    
    // Wait for authentication attempt
    console.log('⏳ Waiting for GitHub authentication...');
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Check results
    if (googleApiRequested) {
      console.log('❌ FAILED: Google APIs were still requested during GitHub authentication');
    } else {
      console.log('✅ SUCCESS: No Google APIs requested during GitHub authentication');
    }
    
    // Check if popup opened
    const pages = await browser.pages();
    if (pages.length > 1) {
      console.log('✅ GitHub popup opened successfully');
      await pages[1].close();
    } else {
      console.log('❌ No popup opened');
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
  } finally {
    await browser.close();
  }
  
  console.log('\n🏁 GitHub-only test completed');
})();
