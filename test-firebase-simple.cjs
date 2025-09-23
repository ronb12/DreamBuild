const puppeteer = require('puppeteer');

(async () => {
  console.log('🚀 Testing Firebase Simple...');
  
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
    
    // Test if we can access Firebase from the React app
    console.log('\n🔍 Testing Firebase Access from React...');
    const firebaseTest = await page.evaluate(() => {
      // Try to access Firebase through the React app
      try {
        // Check if we can find Firebase in the React app
        const reactRoot = document.getElementById('root');
        const firebaseInReact = reactRoot.__reactInternalInstance || reactRoot._reactInternalFiber;
        
        // Try to access Firebase from window
        const firebaseWindow = window.firebase;
        
        // Try to access Firebase from imports
        const firebaseImports = window.firebaseApp || window.firebaseAuth;
        
        return {
          firebaseWindow: !!firebaseWindow,
          firebaseImports: !!firebaseImports,
          reactRoot: !!reactRoot,
          windowKeys: Object.keys(window).filter(key => key.includes('firebase'))
        };
      } catch (e) {
        return {
          error: e.message
        };
      }
    });
    
    console.log('Firebase Test:', firebaseTest);
    
    // Try to click Google button to see if it works
    console.log('\n🖱️ Testing Google Button...');
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
    
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    const pages = await browser.pages();
    if (pages.length > 1) {
      console.log('✅ Google popup opened');
      await pages[1].close();
    } else {
      console.log('❌ No Google popup opened');
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
  } finally {
    await browser.close();
  }
  
  console.log('\n🏁 Firebase simple test completed');
})();
