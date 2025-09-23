const puppeteer = require('puppeteer');

(async () => {
  console.log('🚀 Testing Existing Account Sign-in...');
  
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
    await page.screenshot({ path: 'existing-account-login.png' });
    console.log('📸 Screenshot saved: existing-account-login.png');
    
    // Check what sign-in options are available
    console.log('🔍 Checking available sign-in options...');
    const signInOptions = await page.evaluate(() => {
      const buttons = document.querySelectorAll('button');
      return Array.from(buttons).map(btn => ({
        text: btn.textContent.trim(),
        visible: btn.offsetParent !== null,
        disabled: btn.disabled
      })).filter(btn => btn.text && btn.visible);
    });
    
    console.log('📋 Available sign-in options:');
    signInOptions.forEach((option, index) => {
      console.log(`  ${index + 1}. "${option.text}" (disabled: ${option.disabled})`);
    });
    
    // Try Google sign-in first (since the error suggests trying Google)
    console.log('\n🖱️ Attempting Google sign-in...');
    try {
      await page.evaluate(() => {
        const buttons = document.querySelectorAll('button');
        const googleBtn = Array.from(buttons).find(btn => 
          btn.textContent.includes('Google') || 
          btn.textContent.includes('Continue with Google')
        );
        if (googleBtn) {
          googleBtn.click();
          console.log('Google button clicked');
        } else {
          console.log('Google button not found');
        }
      });
      
      // Wait for popup or redirect
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Check for popup
      const pages = await browser.pages();
      if (pages.length > 1) {
        console.log('✅ Google popup opened');
        await pages[1].close();
      } else {
        console.log('❌ No Google popup opened');
      }
      
    } catch (googleError) {
      console.error('❌ Google sign-in error:', googleError.message);
    }
    
    // Take screenshot after Google attempt
    await page.screenshot({ path: 'after-google-attempt.png' });
    console.log('📸 Screenshot saved: after-google-attempt.png');
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
  } finally {
    await browser.close();
  }
  
  console.log('🏁 Test completed');
})();
