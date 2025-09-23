const puppeteer = require('puppeteer');

async function testScrollFunctionality() {
  console.log('🔄 Testing scroll functionality in AI model selector...');
  
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
    await page.screenshot({ path: 'scroll-test-1.png', fullPage: true });
    console.log('📸 Screenshot 1 saved (initial state)');
    
    // Click model selector
    const modelButton = await page.$('button[title*="Model"]');
    if (modelButton) {
      await modelButton.click();
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Take screenshot of dropdown
      await page.screenshot({ path: 'scroll-test-2.png', fullPage: true });
      console.log('📸 Screenshot 2 saved (dropdown open)');
      
      // Check scrollable container with multiple selectors
      const scrollContainer1 = await page.$('div[style*="maxHeight: 256px"]');
      const scrollContainer2 = await page.$('div[class*="overflow-y-auto"]');
      const scrollContainer3 = await page.$('div[class*="flex-1 overflow-y-auto"]');
      
      console.log(`🔍 Scroll containers found: ${scrollContainer1 ? '1' : '0'} (maxHeight), ${scrollContainer2 ? '1' : '0'} (overflow-y-auto), ${scrollContainer3 ? '1' : '0'} (flex-1)`);
      
      // Check scroll properties
      const scrollInfo = await page.evaluate(() => {
        const containers = document.querySelectorAll('div[class*="overflow-y-auto"]');
        console.log('Found containers:', containers.length);
        
        for (let i = 0; i < containers.length; i++) {
          const container = containers[i];
          const info = {
            index: i,
            scrollHeight: container.scrollHeight,
            clientHeight: container.clientHeight,
            scrollTop: container.scrollTop,
            canScroll: container.scrollHeight > container.clientHeight,
            overflowY: getComputedStyle(container).overflowY,
            maxHeight: container.style.maxHeight,
            className: container.className
          };
          console.log(`Container ${i}:`, info);
        }
        
        return containers.length > 0 ? {
          totalContainers: containers.length,
          firstContainer: {
            scrollHeight: containers[0].scrollHeight,
            clientHeight: containers[0].clientHeight,
            scrollTop: containers[0].scrollTop,
            canScroll: containers[0].scrollHeight > containers[0].clientHeight,
            overflowY: getComputedStyle(containers[0]).overflowY
          }
        } : null;
      });
      
      console.log('📊 Scroll container info:', scrollInfo);
        
      if (scrollInfo && scrollInfo.firstContainer) {
        if (scrollInfo.firstContainer.canScroll) {
          console.log('✅ Container is scrollable');
          
          // Try to scroll down
          await page.evaluate(() => {
            const containers = document.querySelectorAll('div[class*="overflow-y-auto"]');
            if (containers.length > 0) {
              containers[0].scrollTop = 100;
            }
          });
          
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          // Take screenshot after scrolling
          await page.screenshot({ path: 'scroll-test-3.png', fullPage: true });
          console.log('📸 Screenshot 3 saved (after scrolling)');
          
          // Check if scroll worked
          const scrollAfter = await page.evaluate(() => {
            const containers = document.querySelectorAll('div[class*="overflow-y-auto"]');
            return containers.length > 0 ? containers[0].scrollTop : 0;
          });
          
          console.log(`📊 Scroll position after: ${scrollAfter}px`);
          
          if (scrollAfter > 0) {
            console.log('✅ Scrolling is working!');
          } else {
            console.log('⚠️ Scrolling may not be working properly');
          }
        } else {
          console.log('⚠️ Container is not scrollable or all models fit');
        }
      } else {
        console.log('❌ No scrollable containers found');
      }
      
      // Count total models
      const modelButtons = await page.$$('button[class*="w-full p-2 rounded"]');
      console.log(`🔍 Found ${modelButtons.length} model buttons`);
      
      // Try to click a model near the bottom
      if (modelButtons.length > 5) {
        console.log('🖱️ Clicking model near the bottom...');
        await modelButtons[modelButtons.length - 1].click();
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Take screenshot after selection
        await page.screenshot({ path: 'scroll-test-4.png', fullPage: true });
        console.log('📸 Screenshot 4 saved (after selecting bottom model)');
      }
      
      // Close dropdown
      await page.keyboard.press('Escape');
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    console.log('✅ Scroll functionality test completed');
    
  } catch (error) {
    console.error('❌ Scroll functionality test failed:', error.message);
  } finally {
    await browser.close();
  }
}

testScrollFunctionality();
