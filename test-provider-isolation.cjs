const puppeteer = require('puppeteer');

(async () => {
  console.log('🚀 Testing Provider Isolation...');
  
  const browser = await puppeteer.launch({ 
    headless: false,
    defaultViewport: null,
    args: ['--start-maximized']
  });
  
  const page = await browser.newPage();
  
  // Monitor network requests to see which APIs are loaded
  const networkRequests = [];
  page.on('request', request => {
    if (request.url().includes('google') || request.url().includes('github') || request.url().includes('firebase')) {
      networkRequests.push({
        url: request.url(),
        method: request.method(),
        timestamp: new Date().toISOString()
      });
    }
  });
  
  // Monitor console messages
  page.on('console', msg => {
    if (msg.text().includes('provider') || msg.text().includes('GitHub') || msg.text().includes('Google')) {
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
    
    // Test Google button first
    console.log('\n🖱️ Testing Google button...');
    await page.evaluate(() => {
      const buttons = document.querySelectorAll('button');
      const googleBtn = Array.from(buttons).find(btn => 
        btn.textContent.includes('Continue with Google')
      );
      if (googleBtn) {
        googleBtn.click();
        console.log('Google button clicked');
      }
    });
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Close any popup
    const pages = await browser.pages();
    if (pages.length > 1) {
      await pages[1].close();
    }
    
    // Test GitHub button
    console.log('\n🖱️ Testing GitHub button...');
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
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Close any popup
    const finalPages = await browser.pages();
    if (finalPages.length > 1) {
      await finalPages[1].close();
    }
    
    // Analyze network requests
    console.log('\n📊 Network Request Analysis:');
    networkRequests.forEach((req, index) => {
      console.log(`${index + 1}. ${req.method} ${req.url}`);
    });
    
    // Check if Google APIs were loaded during GitHub click
    const googleApiLoaded = networkRequests.some(req => 
      req.url.includes('apis.google.com') && 
      req.timestamp > new Date(Date.now() - 10000).toISOString()
    );
    
    if (googleApiLoaded) {
      console.log('❌ ISSUE: Google APIs were loaded during GitHub authentication');
    } else {
      console.log('✅ SUCCESS: No Google APIs loaded during GitHub authentication');
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
  } finally {
    await browser.close();
  }
  
  console.log('\n🏁 Provider isolation test completed');
})();
