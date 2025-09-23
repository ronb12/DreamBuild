const puppeteer = require('puppeteer');

async function debugModelSelection() {
  console.log('🔍 Debugging AI model selection issue...');
  
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: { width: 1920, height: 1080 },
    slowMo: 500 // Slow down to see what's happening
  });

  const page = await browser.newPage();
  
  // Listen to console logs
  page.on('console', msg => {
    console.log('🖥️ Browser console:', msg.text());
  });
  
  try {
    // Navigate to AI Builder
    await page.goto('http://localhost:3000/ai-builder', { 
      waitUntil: 'networkidle2',
      timeout: 30000 
    });
    
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Take initial screenshot
    await page.screenshot({ path: 'debug-1-initial.png', fullPage: true });
    console.log('📸 Screenshot 1 saved (initial state)');
    
    // Get initial model
    const initialModel = await page.evaluate(() => {
      const button = document.querySelector('button[title*="Model"]');
      return button ? button.textContent.trim() : '';
    });
    console.log(`📝 Initial model: "${initialModel}"`);
    
    // Click model selector button
    console.log('🖱️ Clicking model selector button...');
    const modelButton = await page.$('button[title*="Model"]');
    if (modelButton) {
      await modelButton.click();
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Take screenshot of dropdown
      await page.screenshot({ path: 'debug-2-dropdown.png', fullPage: true });
      console.log('📸 Screenshot 2 saved (dropdown open)');
      
      // Get all model buttons
      const modelButtons = await page.$$('button[class*="w-full p-2 rounded"]');
      console.log(`🔍 Found ${modelButtons.length} model buttons`);
      
      // Try to click the second model (CodeLlama 7B)
      if (modelButtons.length > 1) {
        console.log('🖱️ Clicking CodeLlama 7B model...');
        
        // Get detailed info about the button
        const buttonDetails = await page.evaluate((index) => {
          const buttons = document.querySelectorAll('button[class*="w-full p-2 rounded"]');
          if (buttons[index]) {
            const button = buttons[index];
            return {
              text: button.textContent.trim(),
              hasOnClick: button.onclick !== null,
              disabled: button.disabled,
              style: button.style.cssText,
              className: button.className,
              parentElement: button.parentElement ? button.parentElement.tagName : 'none',
              isVisible: button.offsetParent !== null,
              boundingRect: button.getBoundingClientRect()
            };
          }
          return null;
        }, 1);
        
        console.log('📊 Button details:', buttonDetails);
        
        // Try clicking the button with different methods
        try {
          // Method 1: Regular click
          await modelButtons[1].click();
          console.log('✅ Regular click executed');
        } catch (error) {
          console.log('❌ Regular click failed:', error.message);
        }
        
        // Wait a bit
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Method 2: Force click
        try {
          await modelButtons[1].click({ force: true });
          console.log('✅ Force click executed');
        } catch (error) {
          console.log('❌ Force click failed:', error.message);
        }
        
        // Wait a bit
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Method 3: Dispatch event
        try {
          await page.evaluate((index) => {
            const buttons = document.querySelectorAll('button[class*="w-full p-2 rounded"]');
            if (buttons[index]) {
              const event = new MouseEvent('click', { bubbles: true, cancelable: true });
              buttons[index].dispatchEvent(event);
            }
          }, 1);
          console.log('✅ Dispatch event executed');
        } catch (error) {
          console.log('❌ Dispatch event failed:', error.message);
        }
        
        // Check if there are any overlays or z-index issues
        const overlayInfo = await page.evaluate(() => {
          const dropdown = document.querySelector('div[class*="fixed bottom-16"]');
          if (dropdown) {
            const rect = dropdown.getBoundingClientRect();
            const style = window.getComputedStyle(dropdown);
            return {
              zIndex: style.zIndex,
              position: style.position,
              pointerEvents: style.pointerEvents,
              rect: rect
            };
          }
          return null;
        });
        console.log('📊 Dropdown overlay info:', overlayInfo);
        
        // Check if the button is actually clickable
        const clickabilityInfo = await page.evaluate((index) => {
          const buttons = document.querySelectorAll('button[class*="w-full p-2 rounded"]');
          if (buttons[index]) {
            const button = buttons[index];
            const rect = button.getBoundingClientRect();
            const style = window.getComputedStyle(button);
            return {
              zIndex: style.zIndex,
              position: style.position,
              pointerEvents: style.pointerEvents,
              rect: rect,
              isClickable: button.offsetParent !== null,
              hasOnClick: button.onclick !== null
            };
          }
          return null;
        }, 1);
        console.log('📊 Button clickability info:', clickabilityInfo);
        
        // Check if the React component is actually rendering
        const reactInfo = await page.evaluate(() => {
          const dropdown = document.querySelector('div[class*="fixed bottom-16"]');
          if (dropdown) {
            return {
              hasReactProps: dropdown._reactInternalFiber !== undefined,
              hasReactInstance: dropdown.__reactInternalInstance !== undefined,
              innerHTML: dropdown.innerHTML.substring(0, 200) + '...'
            };
          }
          return null;
        });
        console.log('📊 React component info:', reactInfo);
        
        // Try to manually trigger the click handler
        const manualClickResult = await page.evaluate((index) => {
          const buttons = document.querySelectorAll('button[class*="w-full p-2 rounded"]');
          if (buttons[index]) {
            const button = buttons[index];
            
            // Try to find the React fiber
            const fiber = button._reactInternalFiber || button.__reactInternalInstance;
            if (fiber) {
              console.log('Found React fiber');
              return { hasReactFiber: true };
            } else {
              console.log('No React fiber found');
              return { hasReactFiber: false };
            }
          }
          return { error: 'Button not found' };
        }, 1);
        console.log('📊 Manual click result:', manualClickResult);
        
        await new Promise(resolve => setTimeout(resolve, 3000));
        
        // Take screenshot after click
        await page.screenshot({ path: 'debug-3-after-click.png', fullPage: true });
        console.log('📸 Screenshot 3 saved (after clicking CodeLlama 7B)');
        
        // Check if dropdown closed
        const dropdownVisible = await page.evaluate(() => {
          const dropdown = document.querySelector('div[class*="fixed bottom-16"]');
          return dropdown && dropdown.offsetParent !== null;
        });
        console.log(`📊 Dropdown visible after click: ${dropdownVisible}`);
        
        // Get current model
        const currentModel = await page.evaluate(() => {
          const button = document.querySelector('button[title*="Model"]');
          return button ? button.textContent.trim() : '';
        });
        console.log(`📝 Current model after click: "${currentModel}"`);
        
        // Check if the model actually changed
        if (currentModel !== initialModel) {
          console.log('✅ SUCCESS: Model selection is working!');
          console.log(`   Changed from "${initialModel}" to "${currentModel}"`);
        } else {
          console.log('❌ FAILED: Model did not change');
          console.log(`   Still showing "${currentModel}" instead of "CodeLlama 7B"`);
          
          // Try to debug why it didn't work
          console.log('🔍 Debugging why model didn\'t change...');
          
          // Check if there are any JavaScript errors
          const errors = await page.evaluate(() => {
            return window.errors || [];
          });
          console.log('📊 JavaScript errors:', errors);
          
          // Check the current state of the component
          const componentState = await page.evaluate(() => {
            // Try to find React component state
            const reactRoot = document.querySelector('#root');
            if (reactRoot && reactRoot._reactInternalFiber) {
              return 'React component found';
            }
            return 'React component not found';
          });
          console.log('📊 Component state:', componentState);
        }
      }
    }
    
    console.log('✅ Debug completed');
    
  } catch (error) {
    console.error('❌ Debug failed:', error.message);
  } finally {
    await browser.close();
  }
}

debugModelSelection();
