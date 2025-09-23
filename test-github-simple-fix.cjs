const puppeteer = require('puppeteer');

(async () => {
  console.log('🚀 Starting GitHub Auth Simple Test...');
  
  const browser = await puppeteer.launch({ 
    headless: false,
    defaultViewport: null,
    args: ['--start-maximized']
  });
  
  const page = await browser.newPage();
  
  try {
    // Navigate to login page
    console.log('📱 Navigating to login page...');
    await page.goto('http://localhost:3000/login', { waitUntil: 'networkidle0' });
    
    // Wait for page to load
    await page.waitForSelector('h1');
    console.log('✅ Login page loaded');
    
    // Take screenshot
    await page.screenshot({ path: 'github-login-page.png' });
    console.log('📸 Screenshot saved: github-login-page.png');
    
    // Look for GitHub button
    console.log('🔍 Looking for GitHub button...');
    const githubButton = await page.evaluate(() => {
      const buttons = document.querySelectorAll('button');
      return Array.from(buttons).find(btn => 
        btn.textContent.includes('GitHub') || 
        btn.textContent.includes('Continue with GitHub')
      );
    });
    
    if (githubButton) {
      console.log('✅ GitHub button found');
      
      // Click GitHub button using a more reliable selector
      console.log('🖱️ Clicking GitHub button...');
      await page.evaluate(() => {
        const buttons = document.querySelectorAll('button');
        const githubBtn = Array.from(buttons).find(btn => 
          btn.textContent.includes('Continue with GitHub')
        );
        if (githubBtn) {
          githubBtn.click();
        }
      });
      
      // Wait for popup or error
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Check for popup
      const pages = await browser.pages();
      if (pages.length > 1) {
        console.log('✅ GitHub popup opened');
        await pages[1].close();
      } else {
        console.log('❌ No popup opened');
      }
      
      // Take screenshot after click
      await page.screenshot({ path: 'github-after-click.png' });
      console.log('📸 Screenshot saved: github-after-click.png');
      
    } else {
      console.log('❌ GitHub button not found');
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
  } finally {
    await browser.close();
  }
  
  console.log('🏁 Test completed');
})();
