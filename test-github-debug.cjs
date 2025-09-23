const puppeteer = require('puppeteer');

(async () => {
  console.log('🚀 Debugging GitHub Authentication Issue...');
  
  const browser = await puppeteer.launch({ 
    headless: false,
    defaultViewport: null,
    args: ['--start-maximized']
  });
  
  const page = await browser.newPage();
  
  // Monitor all network requests
  page.on('request', request => {
    if (request.url().includes('google') || request.url().includes('github') || request.url().includes('firebase')) {
      console.log('🌐 Network Request:', request.method(), request.url());
    }
  });
  
  // Monitor console errors
  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.log('❌ Console Error:', msg.text());
    } else if (msg.text().includes('GitHub') || msg.text().includes('auth') || msg.text().includes('Firebase')) {
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
    
    // Check what authentication providers are loaded
    console.log('\n🔍 Checking Firebase configuration...');
    const firebaseConfig = await page.evaluate(() => {
      return {
        hasGoogleProvider: typeof window.google !== 'undefined',
        hasFirebaseAuth: typeof window.firebase !== 'undefined',
        authDomain: window.location.hostname
      };
    });
    console.log('Firebase Config:', firebaseConfig);
    
    // Click GitHub button and monitor what happens
    console.log('\n🖱️ Clicking GitHub button...');
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
    
    // Wait and monitor for errors
    console.log('⏳ Waiting for authentication attempt...');
    await new Promise(resolve => setTimeout(resolve, 5000));
    
    // Check if popup opened
    const pages = await browser.pages();
    if (pages.length > 1) {
      console.log('✅ Popup opened');
      await pages[1].close();
    } else {
      console.log('❌ No popup opened');
    }
    
    // Check for any error messages on the page
    const errorInfo = await page.evaluate(() => {
      const errorElements = document.querySelectorAll('[class*="error"], [class*="alert"], .toast, [role="alert"]');
      return Array.from(errorElements).map(el => el.textContent.trim()).join(' | ');
    });
    
    if (errorInfo) {
      console.log('🔍 Error messages found:', errorInfo);
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
  } finally {
    await browser.close();
  }
  
  console.log('\n🏁 Debug completed');
})();
