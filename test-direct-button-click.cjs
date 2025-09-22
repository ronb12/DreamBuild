const puppeteer = require('puppeteer');

async function testDirectButtonClick() {
  console.log('🔍 Testing Direct Button Click');
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

    console.log('\n📋 Test: Direct Button Click');
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
        
        // Get all buttons on the page and find model buttons
        const allButtons = await page.evaluate(() => {
          const buttons = Array.from(document.querySelectorAll('button'));
          return buttons.map(btn => ({
            text: btn.textContent.trim(),
            id: btn.id || 'no-id',
            className: btn.className,
            visible: btn.offsetWidth > 0 && btn.offsetHeight > 0,
            position: {
              x: btn.offsetLeft,
              y: btn.offsetTop,
              width: btn.offsetWidth,
              height: btn.offsetHeight
            }
          })).filter(btn => 
            btn.text.includes('CodeLlama') || 
            btn.text.includes('StarCoder') ||
            btn.text.includes('DeepSeek') ||
            btn.text.includes('WizardCoder') ||
            btn.text.includes('Phi-3') ||
            btn.text.includes('Llama')
          );
        });
        
        console.log(`✅ Found ${allButtons.length} model buttons:`);
        allButtons.forEach((btn, index) => {
          console.log(`   ${index + 1}. "${btn.text}" - Visible: ${btn.visible} - Position: ${JSON.stringify(btn.position)}`);
        });
        
        // Try to click the first model button directly
        if (allButtons.length > 0) {
          const firstModelButton = allButtons[0];
          console.log(`✅ Attempting to click: "${firstModelButton.text}"`);
          
          // Click using page.click with selector
          try {
            await page.click('button:has-text("CodeLlama 7B")');
            console.log('✅ Successfully clicked CodeLlama 7B button');
            
            // Wait for state to update
            await page.waitForTimeout(2000);
            
            // Check if button text changed
            const newButtonText = await page.evaluate(() => {
              const buttons = Array.from(document.querySelectorAll('button'));
              const autoButton = buttons.find(btn => 
                btn.textContent.includes('Auto') || 
                btn.textContent.includes('CodeLlama') ||
                btn.textContent.includes('StarCoder')
              );
              return autoButton ? autoButton.textContent.trim() : 'Button not found';
            });
            
            console.log(`✅ New button text: "${newButtonText}"`);
            
            if (newButtonText.includes('CodeLlama')) {
              console.log('✅ Model selection successful!');
            } else {
              console.log('❌ Model selection failed - button text did not change');
            }
            
          } catch (clickError) {
            console.log('❌ Click failed:', clickError.message);
            
            // Try alternative click method
            try {
              await page.evaluate(() => {
                const buttons = Array.from(document.querySelectorAll('button'));
                const codeLlamaButton = buttons.find(btn => btn.textContent.includes('CodeLlama 7B'));
                if (codeLlamaButton) {
                  codeLlamaButton.click();
                  return 'Clicked via evaluate';
                }
                return 'Button not found in evaluate';
              });
              console.log('✅ Clicked via page.evaluate');
            } catch (evalError) {
              console.log('❌ Evaluate click failed:', evalError.message);
            }
          }
        } else {
          console.log('❌ No model buttons found');
        }
        
      } else {
        console.log('❌ Auto button not found');
      }
    } catch (error) {
      console.log('❌ Direct button click test failed:', error.message);
    }

    // Take a screenshot
    await page.screenshot({ 
      path: 'dreambuild-direct-button-click-test.png',
      fullPage: true 
    });
    console.log('\n📸 Screenshot saved as dreambuild-direct-button-click-test.png');

    console.log('\n🎯 DIRECT BUTTON CLICK TEST COMPLETE!');

  } catch (error) {
    console.error('❌ Direct button click test failed:', error);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

// Run the direct button click test
testDirectButtonClick().catch(console.error);
