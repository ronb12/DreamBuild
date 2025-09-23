const puppeteer = require('puppeteer');

async function simpleVerification() {
  console.log('🔍 Simple verification of AI model selector...');
  
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
    
    // Click model selector
    const modelButton = await page.$('button[title*="Model"]');
    if (modelButton) {
      await modelButton.click();
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Take screenshot
      await page.screenshot({ path: 'simple-verification.png', fullPage: true });
      console.log('📸 Screenshot saved');
      
      // Check dropdown dimensions
      const dropdownInfo = await page.evaluate(() => {
        const dropdown = document.querySelector('div[class*="fixed bottom-16"]');
        if (dropdown) {
          return {
            width: dropdown.offsetWidth,
            height: dropdown.offsetHeight,
            maxHeight: dropdown.style.maxHeight,
            className: dropdown.className
          };
        }
        return null;
      });
      
      console.log('📊 Dropdown info:', dropdownInfo);
      
      // Check scrollable area
      const scrollInfo = await page.evaluate(() => {
        const containers = document.querySelectorAll('div[class*="overflow-y-auto"]');
        console.log('Found containers:', containers.length);
        
        for (let i = 0; i < containers.length; i++) {
          const container = containers[i];
          console.log(`Container ${i}:`, {
            scrollHeight: container.scrollHeight,
            clientHeight: container.clientHeight,
            offsetHeight: container.offsetHeight,
            style: container.style.cssText,
            className: container.className,
            canScroll: container.scrollHeight > container.clientHeight
          });
        }
        
        if (containers.length > 0) {
          const container = containers[0];
          return {
            scrollHeight: container.scrollHeight,
            clientHeight: container.clientHeight,
            offsetHeight: container.offsetHeight,
            canScroll: container.scrollHeight > container.clientHeight,
            maxHeight: container.style.maxHeight,
            height: container.style.height
          };
        }
        return null;
      });
      
      console.log('📊 Scroll info:', scrollInfo);
      
      // Count visible models
      const modelCount = await page.evaluate(() => {
        const buttons = document.querySelectorAll('button[class*="w-full p-2 rounded"]');
        return buttons.length;
      });
      
      console.log(`🔍 Visible models: ${modelCount}`);
      
      // Check if we can see all models
      if (scrollInfo && scrollInfo.canScroll) {
        console.log('✅ Dropdown is scrollable - all models should be accessible');
      } else {
        console.log('⚠️ Dropdown is not scrollable - some models might be hidden');
      }
      
      // Close dropdown
      await page.keyboard.press('Escape');
    }
    
    console.log('✅ Simple verification completed');
    
  } catch (error) {
    console.error('❌ Verification failed:', error.message);
  } finally {
    await browser.close();
  }
}

simpleVerification();
