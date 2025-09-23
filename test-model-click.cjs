const puppeteer = require('puppeteer');

async function testModelClick() {
  console.log('🖱️ Testing AI model click functionality...');
  
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
    
    // Get initial model
    const initialModel = await page.evaluate(() => {
      const button = document.querySelector('button[title*="Model"]');
      return button ? button.textContent.trim() : '';
    });
    console.log(`📝 Initial model: "${initialModel}"`);
    
    // Click model selector
    const modelButton = await page.$('button[title*="Model"]');
    if (modelButton) {
      await modelButton.click();
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Take screenshot
      await page.screenshot({ path: 'model-click-test-1.png', fullPage: true });
      console.log('📸 Screenshot 1 saved (dropdown open)');
      
      // Get all model buttons
      const modelButtons = await page.$$('button[class*="w-full p-2 rounded"]');
      console.log(`🔍 Found ${modelButtons.length} model buttons`);
      
      // Test clicking a different model (not the first one)
      if (modelButtons.length > 1) {
        console.log('🖱️ Testing click on second model...');
        
        // Get model info before clicking
        const modelInfo = await page.evaluate((index) => {
          const buttons = document.querySelectorAll('button[class*="w-full p-2 rounded"]');
          if (buttons[index]) {
            const button = buttons[index];
            const nameElement = button.querySelector('div[class*="font-medium"]');
            return {
              name: nameElement ? nameElement.textContent.trim() : '',
              isClickable: !button.disabled,
              hasOnClick: button.onclick !== null,
              className: button.className
            };
          }
          return null;
        }, 1);
        
        console.log('📊 Model info:', modelInfo);
        
        // Try to click the second model
        try {
          await modelButtons[1].click();
          await new Promise(resolve => setTimeout(resolve, 2000));
          
          // Check if dropdown closed
          const dropdownVisible = await page.evaluate(() => {
            const dropdown = document.querySelector('div[class*="fixed bottom-16"]');
            return dropdown && dropdown.offsetParent !== null;
          });
          
          console.log(`📊 Dropdown visible after click: ${dropdownVisible}`);
          
          if (!dropdownVisible) {
            // Get current model
            const currentModel = await page.evaluate(() => {
              const button = document.querySelector('button[title*="Model"]');
              return button ? button.textContent.trim() : '';
            });
            console.log(`✅ Model changed to: "${currentModel}"`);
            
            if (currentModel !== initialModel) {
              console.log('🎉 SUCCESS: Model selection is working!');
            } else {
              console.log('⚠️ Model did not change - selection might not be working');
            }
          } else {
            console.log('⚠️ Dropdown did not close after click');
          }
        } catch (error) {
          console.log(`❌ Error clicking model: ${error.message}`);
        }
      }
      
      // Test clicking with different approach
      console.log('🖱️ Testing click with different approach...');
      
      // Reopen dropdown
      await modelButton.click();
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Try clicking with evaluate and check console logs
      const clickResult = await page.evaluate(() => {
        const buttons = document.querySelectorAll('button[class*="w-full p-2 rounded"]');
        if (buttons.length > 1) {
          const button = buttons[1];
          console.log('Clicking button:', button);
          
          // Check what happens when we click
          const originalConsoleLog = console.log;
          const logs = [];
          console.log = (...args) => {
            logs.push(args.join(' '));
            originalConsoleLog(...args);
          };
          
          try {
            button.click();
            console.log = originalConsoleLog;
            return { success: true, method: 'click()', logs: logs };
          } catch (error) {
            console.log = originalConsoleLog;
            return { success: false, error: error.message, logs: logs };
          }
        }
        return { success: false, error: 'No buttons found' };
      });
      
      console.log('📊 Click result:', clickResult);
      
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Take final screenshot
      await page.screenshot({ path: 'model-click-test-2.png', fullPage: true });
      console.log('📸 Screenshot 2 saved (after click attempts)');
      
      // Close dropdown
      await page.keyboard.press('Escape');
    }
    
    console.log('✅ Model click test completed');
    
  } catch (error) {
    console.error('❌ Model click test failed:', error.message);
  } finally {
    await browser.close();
  }
}

testModelClick();
