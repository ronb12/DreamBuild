const puppeteer = require('puppeteer');

async function testCompactSelector() {
  console.log('🚀 Testing compact AI model selector...');
  
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
    
    // Take screenshot of initial state
    await page.screenshot({ path: 'compact-selector-1.png', fullPage: true });
    console.log('📸 Screenshot 1 saved (initial state)');
    
    // Click model selector
    const modelButton = await page.$('button[title*="Model"]');
    if (modelButton) {
      await modelButton.click();
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Take screenshot of compact dropdown
      await page.screenshot({ path: 'compact-selector-2.png', fullPage: true });
      console.log('📸 Screenshot 2 saved (compact dropdown)');
      
      // Check modal size
      const modalSize = await page.evaluate(() => {
        const modal = document.querySelector('.absolute.bottom-16.left-4');
        if (modal) {
          const rect = modal.getBoundingClientRect();
          return {
            width: rect.width,
            height: rect.height,
            top: rect.top,
            left: rect.left
          };
        }
        return null;
      });
      
      if (modalSize) {
        console.log(`📏 Modal size: ${modalSize.width}x${modalSize.height}px`);
        console.log(`📍 Position: top=${modalSize.top}px, left=${modalSize.left}px`);
        
        if (modalSize.width <= 300 && modalSize.height <= 300) {
          console.log('✅ Modal is compact!');
        } else {
          console.log('⚠️ Modal might be too large');
        }
      }
      
      // Check for checkboxes
      const checkboxes = await page.$$('div[class*="w-3 h-3 rounded border-2"]');
      console.log(`🔍 Found ${checkboxes.length} ultra-compact checkboxes`);
      
      // Try to click first model
      const modelButtons = await page.$$('button[class*="w-full p-1 rounded"]');
      if (modelButtons.length > 0) {
        console.log('🖱️ Clicking first model...');
        await modelButtons[0].click();
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Take screenshot after selection
        await page.screenshot({ path: 'compact-selector-3.png', fullPage: true });
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
    
    console.log('✅ Compact selector test completed');
    
  } catch (error) {
    console.error('❌ Compact selector test failed:', error.message);
  } finally {
    await browser.close();
  }
}

testCompactSelector();
