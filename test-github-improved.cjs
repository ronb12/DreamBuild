const puppeteer = require('puppeteer');

(async () => {
  console.log('🚀 Testing Improved GitHub OAuth...');
  
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
    
    // Test GitHub button
    console.log('🖱️ Testing GitHub button...');
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
    
    // Wait for OAuth popup
    console.log('⏳ Waiting for GitHub OAuth popup...');
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Check if popup opened
    const pages = await browser.pages();
    if (pages.length > 1) {
      console.log('✅ OAuth popup opened');
      
      const popup = pages[1];
      const popupUrl = await popup.evaluate(() => window.location.href);
      console.log('Popup URL:', popupUrl);
      
      if (popupUrl.includes('github.com/login/oauth/authorize')) {
        console.log('✅ GitHub OAuth page loaded correctly');
        console.log('🎉 GitHub authentication should work now!');
      } else if (popupUrl.includes('404')) {
        console.log('❌ Still getting 404 - check callback URL in GitHub OAuth App');
      } else {
        console.log('❌ Unexpected URL:', popupUrl);
      }
      
      await popup.close();
    } else {
      console.log('❌ No popup opened - might be blocked');
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
  } finally {
    await browser.close();
  }
  
  console.log('\n🏁 GitHub OAuth test completed');
})();
