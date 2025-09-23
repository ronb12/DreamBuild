const puppeteer = require('puppeteer');

(async () => {
  console.log('🚀 Testing Improved GitHub Error Handling...');
  
  const browser = await puppeteer.launch({ 
    headless: false,
    defaultViewport: null,
    args: ['--start-maximized']
  });
  
  const page = await browser.newPage();
  
  // Monitor console messages
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
    
    // Click GitHub button
    console.log('🖱️ Clicking GitHub button...');
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
    
    // Wait for error handling
    console.log('⏳ Waiting for error handling...');
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Check if popup opened
    const pages = await browser.pages();
    if (pages.length > 1) {
      console.log('✅ Popup opened');
      await pages[1].close();
    } else {
      console.log('❌ No popup opened - checking for error messages');
      
      // Check for alert dialogs
      const alertText = await page.evaluate(() => {
        // Check if there's an alert dialog
        return document.querySelector('[role="alert"]')?.textContent || 'No alert found';
      });
      
      console.log('Alert content:', alertText);
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
  } finally {
    await browser.close();
  }
  
  console.log('\n🏁 Test completed');
})();
