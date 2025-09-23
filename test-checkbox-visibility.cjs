const puppeteer = require('puppeteer');

async function testCheckboxVisibility() {
  console.log('🔍 Testing checkbox visibility in AI model selector...');
  
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: { width: 1920, height: 1080 }
  });

  const page = await browser.newPage();
  
  try {
    // Navigate to AI Builder
    await page.goto('http://localhost:3000/ai-builder', { 
      waitUntil: 'networkidle2',
      timeout: 30000 
    });
    
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Take screenshot of initial state
    await page.screenshot({ path: 'checkbox-visibility-1.png', fullPage: true });
    console.log('📸 Screenshot 1 saved (initial state)');
    
    // Click model selector
    const modelButton = await page.$('button[title*="Model"]');
    if (modelButton) {
      await modelButton.click();
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Take screenshot of dropdown
      await page.screenshot({ path: 'checkbox-visibility-2.png', fullPage: true });
      console.log('📸 Screenshot 2 saved (dropdown open)');
      
      // Check for checkbox elements
      const checkboxContainers = await page.$$('div[class*="w-3 h-3 rounded border-2"]');
      console.log(`🔍 Found ${checkboxContainers.length} checkbox containers`);
      
      // Check for checkboxes with different selectors
      const checkboxes1 = await page.$$('div[class*="w-3 h-3"]');
      console.log(`🔍 Found ${checkboxes1.length} elements with w-3 h-3 class`);
      
      const checkboxes2 = await page.$$('div[class*="border-2"]');
      console.log(`🔍 Found ${checkboxes2.length} elements with border-2 class`);
      
      const checkboxes3 = await page.$$('div[class*="rounded"]');
      console.log(`🔍 Found ${checkboxes3.length} elements with rounded class`);
      
      // Check if checkboxes are visible
      const visibleCheckboxes = await page.evaluate(() => {
        const checkboxes = document.querySelectorAll('div[class*="w-3 h-3 rounded border-2"]');
        return Array.from(checkboxes).map(cb => ({
          visible: cb.offsetWidth > 0 && cb.offsetHeight > 0,
          width: cb.offsetWidth,
          height: cb.offsetHeight,
          display: getComputedStyle(cb).display,
          visibility: getComputedStyle(cb).visibility,
          opacity: getComputedStyle(cb).opacity
        }));
      });
      
      console.log('📊 Checkbox visibility details:', visibleCheckboxes);
      
      // Check model buttons
      const modelButtons = await page.$$('button[class*="w-full p-1 rounded"]');
      console.log(`🔍 Found ${modelButtons.length} model buttons`);
      
      // Check the structure of first model button
      const firstButtonStructure = await page.evaluate(() => {
        const buttons = document.querySelectorAll('button[class*="w-full p-1 rounded"]');
        if (buttons.length > 0) {
          const button = buttons[0];
          return {
            innerHTML: button.innerHTML,
            children: button.children.length,
            firstChild: button.firstChild ? button.firstChild.tagName : 'none'
          };
        }
        return null;
      });
      
      console.log('🔍 First button structure:', firstButtonStructure);
      
      // Try to click first model
      if (modelButtons.length > 0) {
        console.log('🖱️ Clicking first model...');
        await modelButtons[0].click();
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Take screenshot after selection
        await page.screenshot({ path: 'checkbox-visibility-3.png', fullPage: true });
        console.log('📸 Screenshot 3 saved (after selection)');
      }
      
      // Close dropdown
      await page.keyboard.press('Escape');
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    console.log('✅ Checkbox visibility test completed');
    
  } catch (error) {
    console.error('❌ Checkbox visibility test failed:', error.message);
  } finally {
    await browser.close();
  }
}

testCheckboxVisibility();
