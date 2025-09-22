const puppeteer = require('puppeteer');

async function testAIModelSelection() {
  console.log('🔍 Testing AI Model Selection');
  console.log('============================');
  
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

    console.log('\n📋 Test: AI Model Selection');
    try {
      // Find and click the Auto button
      const autoButton = await page.evaluateHandle(() => {
        const buttons = Array.from(document.querySelectorAll('button'));
        return buttons.find(btn => btn.textContent.includes('Auto'));
      });
      
      if (autoButton) {
        console.log('✅ Found Auto button');
        
        // Get initial button text
        const initialText = await page.evaluate(() => {
          const buttons = Array.from(document.querySelectorAll('button'));
          const autoButton = buttons.find(btn => btn.textContent.includes('Auto'));
          return autoButton ? autoButton.textContent.trim() : 'Button not found';
        });
        console.log(`📝 Initial button text: "${initialText}"`);
        
        // Click the Auto button
        await autoButton.click();
        console.log('✅ Clicked Auto button');
        
        // Wait for modal to appear
        await page.waitForTimeout(3000);
        
        // Check if modal is visible
        const modalVisible = await page.evaluate(() => {
          const elements = Array.from(document.querySelectorAll('*'));
          return elements.some(el => el.textContent && el.textContent.includes('Select AI Model'));
        });
        
        if (modalVisible) {
          console.log('✅ Modal is visible');
          
          // Try to select CodeLlama 7B
          const modelSelection = await page.evaluate(() => {
            const buttons = Array.from(document.querySelectorAll('button'));
            const codeLlamaButton = buttons.find(btn => 
              btn.textContent.includes('CodeLlama 7B') && 
              btn.closest('[class*="max-h-80"]')
            );
            
            if (codeLlamaButton) {
              codeLlamaButton.click();
              return { success: true, message: 'Clicked CodeLlama 7B' };
            }
            return { success: false, message: 'CodeLlama 7B button not found' };
          });
          
          console.log('📝 Model selection result:', modelSelection);
          
          if (modelSelection.success) {
            console.log('✅ Model selection successful');
            
            // Wait for state to update
            await page.waitForTimeout(2000);
            
            // Check if button text changed
            const finalText = await page.evaluate(() => {
              const buttons = Array.from(document.querySelectorAll('button'));
              const autoButton = buttons.find(btn => 
                btn.textContent.includes('Auto') || 
                btn.textContent.includes('CodeLlama') ||
                btn.textContent.includes('StarCoder')
              );
              return autoButton ? autoButton.textContent.trim() : 'Button not found';
            });
            
            console.log(`📝 Final button text: "${finalText}"`);
            
            if (finalText.includes('CodeLlama')) {
              console.log('✅ Model selection confirmed - button text updated');
            } else {
              console.log('❌ Model selection failed - button text not updated');
              console.log(`   Expected: CodeLlama, Got: ${finalText}`);
            }
          } else {
            console.log('❌ Model selection failed:', modelSelection.message);
          }
        } else {
          console.log('❌ Modal is not visible');
          
          // Debug: Check what's on the page
          const pageElements = await page.evaluate(() => {
            const elements = Array.from(document.querySelectorAll('*'));
            return elements
              .filter(el => el.textContent && el.textContent.trim().length > 0)
              .map(el => el.textContent.trim())
              .filter(text => text.length < 100)
              .slice(0, 20);
          });
          
          console.log('📋 Page elements:', pageElements);
        }
        
      } else {
        console.log('❌ Auto button not found');
      }
    } catch (error) {
      console.log('❌ AI model selection test failed:', error.message);
    }

    // Take a screenshot
    await page.screenshot({ 
      path: 'dreambuild-ai-model-selection-test.png',
      fullPage: true 
    });
    console.log('\n📸 Screenshot saved as dreambuild-ai-model-selection-test.png');

    console.log('\n🎯 AI MODEL SELECTION TEST COMPLETE!');

  } catch (error) {
    console.error('❌ AI model selection test failed:', error);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

// Run the AI model selection test
testAIModelSelection().catch(console.error);
