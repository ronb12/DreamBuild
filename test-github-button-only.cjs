const puppeteer = require('puppeteer');

(async () => {
  console.log('🚀 Testing ONLY GitHub Button Click...');
  
  const browser = await puppeteer.launch({ 
    headless: false,
    defaultViewport: null,
    args: ['--start-maximized']
  });
  
  const page = await browser.newPage();
  
  // Monitor for Google API requests when ONLY GitHub is clicked
  let googleApiRequested = false;
  page.on('request', request => {
    if (request.url().includes('apis.google.com')) {
      googleApiRequested = true;
      console.log('❌ PROBLEM: Google API requested when clicking GitHub button:', request.url());
    }
  });
  
  // Monitor console messages
  page.on('console', msg => {
    if (msg.text().includes('GitHub') || msg.text().includes('provider') || msg.text().includes('auth')) {
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
    
    // Find and click ONLY the GitHub button (not Google)
    console.log('🖱️ Clicking ONLY GitHub button...');
    const githubButtonClicked = await page.evaluate(() => {
      const buttons = document.querySelectorAll('button');
      const githubBtn = Array.from(buttons).find(btn => 
        btn.textContent.includes('Continue with GitHub')
      );
      const googleBtn = Array.from(buttons).find(btn => 
        btn.textContent.includes('Continue with Google')
      );
      
      console.log('Found GitHub button:', !!githubBtn);
      console.log('Found Google button:', !!googleBtn);
      
      if (githubBtn) {
        githubBtn.click();
        console.log('GitHub button clicked successfully');
        return true;
      }
      return false;
    });
    
    if (!githubButtonClicked) {
      console.log('❌ GitHub button not found');
      return;
    }
    
    // Wait for authentication attempt
    console.log('⏳ Waiting for GitHub authentication...');
    await new Promise(resolve => setTimeout(resolve, 5000));
    
    // Check results
    if (googleApiRequested) {
      console.log('❌ ISSUE CONFIRMED: Google APIs were requested when clicking GitHub button');
      console.log('This is the root cause of the auth/internal-error');
    } else {
      console.log('✅ SUCCESS: No Google APIs requested when clicking GitHub button');
    }
    
    // Check if popup opened
    const pages = await browser.pages();
    if (pages.length > 1) {
      console.log('✅ GitHub popup opened');
      await pages[1].close();
    } else {
      console.log('❌ No popup opened');
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
  } finally {
    await browser.close();
  }
  
  console.log('\n🏁 Test completed - GitHub button only');
})();
