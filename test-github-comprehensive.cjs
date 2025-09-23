const puppeteer = require('puppeteer');

(async () => {
  console.log('🚀 Starting Comprehensive GitHub Auth Test...');
  
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
    
    // Wait a bit more for all elements to render
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Take screenshot
    await page.screenshot({ path: 'github-comprehensive-login.png' });
    console.log('📸 Screenshot saved: github-comprehensive-login.png');
    
    // Get all buttons and their details
    console.log('🔍 Getting all buttons...');
    const allButtons = await page.evaluate(() => {
      const buttons = document.querySelectorAll('button');
      return Array.from(buttons).map((btn, index) => ({
        index,
        text: btn.textContent.trim(),
        className: btn.className,
        id: btn.id,
        visible: btn.offsetParent !== null,
        disabled: btn.disabled
      }));
    });
    
    console.log('📋 All buttons found:');
    allButtons.forEach(btn => {
      console.log(`  ${btn.index + 1}. Text: "${btn.text}" | Visible: ${btn.visible} | Disabled: ${btn.disabled}`);
    });
    
    // Look for GitHub button specifically
    const githubButton = allButtons.find(btn => 
      btn.text.includes('GitHub') || 
      btn.text.includes('Continue with GitHub')
    );
    
    if (githubButton) {
      console.log('✅ GitHub button found:', githubButton);
      
      // Try to click the GitHub button
      console.log('🖱️ Attempting to click GitHub button...');
      try {
        await page.evaluate((buttonIndex) => {
          const buttons = document.querySelectorAll('button');
          const targetButton = buttons[buttonIndex];
          if (targetButton) {
            targetButton.click();
            console.log('Button clicked successfully');
          } else {
            console.log('Button not found at index');
          }
        }, githubButton.index);
        
        console.log('✅ GitHub button clicked');
        
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
        await page.screenshot({ path: 'github-after-click-comprehensive.png' });
        console.log('📸 Screenshot saved: github-after-click-comprehensive.png');
        
      } catch (clickError) {
        console.error('❌ Error clicking GitHub button:', clickError.message);
      }
      
    } else {
      console.log('❌ GitHub button not found in the list');
      
      // Check if there are any elements with "GitHub" text
      const githubElements = await page.evaluate(() => {
        const allElements = document.querySelectorAll('*');
        return Array.from(allElements)
          .filter(el => el.textContent && el.textContent.includes('GitHub'))
          .map(el => ({
            tagName: el.tagName,
            text: el.textContent.trim(),
            className: el.className,
            visible: el.offsetParent !== null
          }));
      });
      
      console.log('🔍 Elements containing "GitHub":');
      githubElements.forEach((el, index) => {
        console.log(`  ${index + 1}. ${el.tagName}: "${el.text}" | Visible: ${el.visible}`);
      });
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
  } finally {
    await browser.close();
  }
  
  console.log('🏁 Test completed');
})();
