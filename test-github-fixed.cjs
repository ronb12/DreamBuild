const puppeteer = require('puppeteer');

(async () => {
  console.log('🚀 Testing Fixed GitHub Authentication...');
  
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
    await page.screenshot({ path: 'github-fixed-login.png' });
    console.log('📸 Screenshot saved: github-fixed-login.png');
    
    // Click GitHub button
    console.log('🖱️ Clicking GitHub button...');
    await page.evaluate(() => {
      const buttons = document.querySelectorAll('button');
      const githubBtn = Array.from(buttons).find(btn => 
        btn.textContent.includes('Continue with GitHub')
      );
      if (githubBtn) {
        githubBtn.click();
        console.log('GitHub button clicked successfully');
      } else {
        console.log('GitHub button not found');
      }
    });
    
    // Wait for popup or error
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Check for popup
    const pages = await browser.pages();
    if (pages.length > 1) {
      console.log('✅ GitHub popup opened successfully');
      await pages[1].close();
    } else {
      console.log('❌ No popup opened');
    }
    
    // Take screenshot after click
    await page.screenshot({ path: 'github-fixed-after-click.png' });
    console.log('📸 Screenshot saved: github-fixed-after-click.png');
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
  } finally {
    await browser.close();
  }
  
  console.log('🏁 Test completed');
})();
