const puppeteer = require('puppeteer');

(async () => {
  console.log('🚀 Testing Firebase Fix...');
  
  const browser = await puppeteer.launch({ 
    headless: false,
    defaultViewport: null,
    args: ['--start-maximized']
  });
  
  const page = await browser.newPage();
  
  // Monitor console messages
  page.on('console', msg => {
    console.log(`[${msg.type().toUpperCase()}] ${msg.text()}`);
  });
  
  try {
    // Navigate to login page
    console.log('📱 Navigating to login page...');
    await page.goto('http://localhost:3000/login', { waitUntil: 'networkidle0' });
    
    // Wait for page to load
    await page.waitForSelector('h1');
    console.log('✅ Login page loaded');
    
    // Check if Firebase is now available
    console.log('\n🔍 Checking Firebase Availability...');
    const firebaseStatus = await page.evaluate(() => {
      return {
        firebaseGlobal: !!window.firebase,
        firebaseApp: !!window.firebaseApp,
        authInstance: !!window.firebase?.auth?.(),
        windowKeys: Object.keys(window).filter(key => key.includes('firebase'))
      };
    });
    
    console.log('Firebase Status:', firebaseStatus);
    
    if (firebaseStatus.firebaseGlobal) {
      console.log('✅ Firebase is now available globally!');
      
      // Test GitHub authentication
      console.log('\n🖱️ Testing GitHub Authentication...');
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
      
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      const pages = await browser.pages();
      if (pages.length > 1) {
        console.log('✅ GitHub popup opened');
        await pages[1].close();
      } else {
        console.log('❌ No GitHub popup opened');
      }
      
    } else {
      console.log('❌ Firebase is still not available globally');
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
  } finally {
    await browser.close();
  }
  
  console.log('\n🏁 Firebase fix test completed');
})();
