const puppeteer = require('puppeteer');

async function testCheckboxManually() {
  console.log('🚀 Starting Manual Checkbox Test...');
  
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
    
    await new Promise(resolve => setTimeout(resolve, 5000));
    
    // Take screenshot
    await page.screenshot({ path: 'checkbox-test-1.png', fullPage: true });
    console.log('📸 Screenshot 1 saved');
    
    // Click model selector
    const modelButton = await page.$('button[title*="Model"]');
    if (modelButton) {
      await modelButton.click();
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Take screenshot of dropdown
      await page.screenshot({ path: 'checkbox-test-2.png', fullPage: true });
      console.log('📸 Screenshot 2 saved (dropdown open)');
      
      // Check for checkboxes
      const checkboxes = await page.$$('div[class*="w-4 h-4 rounded border-2"]');
      console.log(`🔍 Found ${checkboxes.length} checkboxes`);
      
      // Check for model buttons
      const modelButtons = await page.$$('button[class*="w-full p-3 rounded-md"]');
      console.log(`🔍 Found ${modelButtons.length} model buttons`);
      
      // Try to click first model
      if (modelButtons.length > 0) {
        console.log('🖱️ Clicking first model...');
        await modelButtons[0].click();
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Take screenshot after selection
        await page.screenshot({ path: 'checkbox-test-3.png', fullPage: true });
        console.log('📸 Screenshot 3 saved (after selection)');
        
        // Check current model
        const currentModel = await page.evaluate(() => {
          const button = document.querySelector('button[title*="Model"]');
          return button ? button.textContent.trim() : '';
        });
        console.log(`📝 Current model: "${currentModel}"`);
      }
      
      // Close dropdown
      await page.keyboard.press('Escape');
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    console.log('✅ Manual test completed');
    
  } catch (error) {
    console.error('❌ Manual test failed:', error.message);
  } finally {
    await browser.close();
  }
}

testCheckboxManually();
