const puppeteer = require('puppeteer');

async function testModelClickSpecific() {
  console.log('🔍 Testing Specific Model Click');
  console.log('==============================');
  
  let browser;
  try {
    browser = await puppeteer.launch({
      headless: false,
      defaultViewport: { width: 1400, height: 900 },
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    
    // Enable console logging
    page.on('console', msg => {
      const type = msg.type();
      if (type === 'error') {
        console.log('❌ Browser Error:', msg.text());
      } else if (type === 'warn') {
        console.log('⚠️ Browser Warning:', msg.text());
      } else {
        console.log('📝 Browser Log:', msg.text());
      }
    });

    // Navigate to the application
    console.log('🌐 Navigating to AI Builder...');
    await page.goto('http://localhost:3001/ai-builder', { 
      waitUntil: 'networkidle2',
      timeout: 30000 
    });

    // Wait for the page to fully load
    await page.waitForTimeout(5000);

    console.log('\n📋 Test: Specific Model Click');
    try {
      // Find and click the Auto button
      const autoButton = await page.evaluateHandle(() => {
        const buttons = Array.from(document.querySelectorAll('button'));
        return buttons.find(btn => btn.textContent.includes('Auto'));
      });
      
      if (autoButton) {
        console.log('✅ Found Auto button');
        
        // Click the Auto button
        await autoButton.click();
        console.log('✅ Clicked Auto button');
        
        // Wait for modal to appear
        await page.waitForTimeout(3000);
        
        // Try clicking on the model name text specifically
        const modelClickResult = await page.evaluate(() => {
          // Find the CodeLlama 7B text specifically
          const elements = Array.from(document.querySelectorAll('*'));
          const codeLlamaElement = elements.find(el => 
            el.textContent && el.textContent.includes('CodeLlama 7B') && 
            el.tagName !== 'BUTTON'
          );
          
          if (codeLlamaElement) {
            // Find the parent button
            const button = codeLlamaElement.closest('button');
            if (button) {
              button.click();
              return { success: true, message: 'Clicked CodeLlama 7B button via text element' };
            }
          }
          
          return { success: false, message: 'Could not find CodeLlama 7B element' };
        });
        
        console.log('📝 Model click result:', modelClickResult);
        
        // Wait a moment for state to update
        await page.waitForTimeout(2000);
        
        // Check the button text again
        const finalButtonText = await page.evaluate(() => {
          const buttons = Array.from(document.querySelectorAll('button'));
          const autoButton = buttons.find(btn => 
            btn.textContent.includes('Auto') || 
            btn.textContent.includes('CodeLlama') ||
            btn.textContent.includes('StarCoder')
          );
          return autoButton ? autoButton.textContent.trim() : 'Button not found';
        });
        
        console.log(`✅ Final button text: "${finalButtonText}"`);
        
        // Also check what the current aiModel state should be
        const currentModel = await page.evaluate(() => {
          // Try to find any indication of the selected model
          const elements = Array.from(document.querySelectorAll('*'));
          const modelIndicators = elements.filter(el => 
            el.textContent && (
              el.textContent.includes('CodeLlama 7B') ||
              el.textContent.includes('Switched to CodeLlama 7B')
            )
          );
          return modelIndicators.length > 0 ? 'Found model indicators' : 'No model indicators found';
        });
        
        console.log(`✅ Model state check: ${currentModel}`);
        
        // Close modal if still open
        const closeResult = await page.evaluate(() => {
          const closeButton = Array.from(document.querySelectorAll('button')).find(btn => 
            btn.textContent.includes('×')
          );
          if (closeButton) {
            closeButton.click();
            return 'Modal closed';
          }
          return 'No close button found';
        });
        
        console.log(`✅ Close result: ${closeResult}`);
        
      } else {
        console.log('❌ Auto button not found');
      }
    } catch (error) {
      console.log('❌ Specific model click test failed:', error.message);
    }

    // Take a screenshot
    await page.screenshot({ 
      path: 'dreambuild-model-click-specific-test.png',
      fullPage: true 
    });
    console.log('\n📸 Screenshot saved as dreambuild-model-click-specific-test.png');

    console.log('\n🎯 SPECIFIC MODEL CLICK TEST COMPLETE!');

  } catch (error) {
    console.error('❌ Specific model click test failed:', error);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

// Run the specific model click test
testModelClickSpecific().catch(console.error);
