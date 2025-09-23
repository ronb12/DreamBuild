const puppeteer = require('puppeteer');

async function testModelSelection() {
  console.log('🎯 Testing AI model selection functionality...');
  
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
      
      // Take screenshot of dropdown
      await page.screenshot({ path: 'model-selection-1.png', fullPage: true });
      console.log('📸 Screenshot 1 saved (dropdown open)');
      
      // Get all model buttons
      const modelButtons = await page.$$('button[class*="w-full p-2 rounded"]');
      console.log(`🔍 Found ${modelButtons.length} model buttons`);
      
      // Test clicking different models
      for (let i = 0; i < Math.min(3, modelButtons.length); i++) {
        console.log(`🖱️ Testing click on model ${i + 1}...`);
        
        // Get model info before clicking
        const modelInfo = await page.evaluate((index) => {
          const buttons = document.querySelectorAll('button[class*="w-full p-2 rounded"]');
          if (buttons[index]) {
            const button = buttons[index];
            const nameElement = button.querySelector('div[class*="font-medium"]');
            const descElement = button.querySelector('div[class*="text-gray-500"]');
            return {
              name: nameElement ? nameElement.textContent.trim() : '',
              description: descElement ? descElement.textContent.trim() : '',
              hasCheckbox: button.querySelector('div[class*="border-2"]') !== null,
              isClickable: !button.disabled
            };
          }
          return null;
        }, i);
        
        console.log(`📊 Model ${i + 1} info:`, modelInfo);
        
        if (modelInfo && modelInfo.isClickable) {
          // Click the model
          await modelButtons[i].click();
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
            
            // Reopen dropdown for next test
            await modelButton.click();
            await new Promise(resolve => setTimeout(resolve, 1000));
          } else {
            console.log('⚠️ Dropdown did not close after click');
          }
        } else {
          console.log(`⚠️ Model ${i + 1} is not clickable`);
        }
      }
      
      // Test scrolling if needed
      const scrollInfo = await page.evaluate(() => {
        const containers = document.querySelectorAll('div[class*="overflow-y-auto"]');
        if (containers.length > 0) {
          const container = containers[0];
          return {
            scrollHeight: container.scrollHeight,
            clientHeight: container.clientHeight,
            canScroll: container.scrollHeight > container.clientHeight
          };
        }
        return null;
      });
      
      console.log('📊 Scroll info:', scrollInfo);
      
      if (scrollInfo && scrollInfo.canScroll) {
        console.log('🔄 Testing scroll functionality...');
        
        // Scroll down
        await page.evaluate(() => {
          const containers = document.querySelectorAll('div[class*="overflow-y-auto"]');
          if (containers.length > 0) {
            containers[0].scrollTop = 50;
          }
        });
        
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Take screenshot after scrolling
        await page.screenshot({ path: 'model-selection-2.png', fullPage: true });
        console.log('📸 Screenshot 2 saved (after scrolling)');
      }
      
      // Close dropdown
      await page.keyboard.press('Escape');
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    console.log('✅ Model selection test completed');
    
  } catch (error) {
    console.error('❌ Model selection test failed:', error.message);
  } finally {
    await browser.close();
  }
}

testModelSelection();