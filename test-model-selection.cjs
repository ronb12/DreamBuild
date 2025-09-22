const puppeteer = require('puppeteer');

async function testModelSelection() {
  console.log('🔍 Testing AI Model Selection Functionality');
  console.log('==========================================');
  
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
        
        // Click the Auto button
        await autoButton.click();
        console.log('✅ Clicked Auto button');
        
        // Wait for modal to appear
        await page.waitForTimeout(3000);
        
        // Check if modal exists
        const modalExists = await page.evaluate(() => {
          const elements = Array.from(document.querySelectorAll('*'));
          return elements.some(el => el.textContent && el.textContent.includes('Select AI Model'));
        });
        
        if (modalExists) {
          console.log('✅ Modal exists');
          
          // Find all model buttons
          const modelButtons = await page.evaluate(() => {
            const buttons = Array.from(document.querySelectorAll('button'));
            return buttons.filter(btn => 
              btn.textContent.includes('CodeLlama') || 
              btn.textContent.includes('StarCoder') || 
              btn.textContent.includes('DeepSeek') ||
              btn.textContent.includes('WizardCoder') ||
              btn.textContent.includes('Phi-3') ||
              btn.textContent.includes('Llama') ||
              btn.textContent.includes('Auto')
            ).map(btn => ({
              text: btn.textContent,
              id: btn.id || 'no-id',
              className: btn.className
            }));
          });
          
          console.log(`✅ Found ${modelButtons.length} model buttons:`);
          modelButtons.forEach((btn, index) => {
            console.log(`   ${index + 1}. ${btn.text}`);
          });
          
          // Try to click on CodeLlama 7B
          const codellamaButton = await page.evaluateHandle(() => {
            const buttons = Array.from(document.querySelectorAll('button'));
            return buttons.find(btn => btn.textContent.includes('CodeLlama 7B'));
          });
          
          if (codellamaButton) {
            console.log('✅ Found CodeLlama 7B button');
            
            // Get button position and size
            const buttonInfo = await page.evaluateHandle((btn) => {
              const rect = btn.getBoundingClientRect();
              return {
                x: rect.x,
                y: rect.y,
                width: rect.width,
                height: rect.height,
                visible: rect.width > 0 && rect.height > 0
              };
            }, codellamaButton);
            
            const info = await buttonInfo.jsonValue();
            console.log('✅ Button info:', info);
            
            if (info.visible) {
              // Try clicking
              await codellamaButton.click();
              console.log('✅ Clicked CodeLlama 7B button');
              
              // Wait a moment
              await page.waitForTimeout(2000);
              
              // Check if the modal closed and button text changed
              const newButtonText = await page.evaluate(() => {
                const buttons = Array.from(document.querySelectorAll('button'));
                const autoButton = buttons.find(btn => btn.textContent.includes('Auto') || btn.textContent.includes('CodeLlama'));
                return autoButton ? autoButton.textContent : 'Button not found';
              });
              
              console.log(`✅ New button text: "${newButtonText}"`);
              
              if (newButtonText.includes('CodeLlama')) {
                console.log('✅ Model selection successful!');
              } else {
                console.log('❌ Model selection failed - button text did not change');
              }
            } else {
              console.log('❌ Button is not visible');
            }
          } else {
            console.log('❌ CodeLlama 7B button not found');
          }
          
        } else {
          console.log('❌ Modal does not exist');
          
          // Debug: Check what elements are on the page
          const pageElements = await page.evaluate(() => {
            const elements = Array.from(document.querySelectorAll('*'));
            return elements
              .filter(el => el.textContent && el.textContent.trim().length > 0)
              .map(el => el.textContent.trim())
              .filter(text => text.length < 50)
              .slice(0, 20);
          });
          
          console.log('📋 Page elements:', pageElements);
        }
        
      } else {
        console.log('❌ Auto button not found');
      }
    } catch (error) {
      console.log('❌ Model selection test failed:', error.message);
    }

    // Take a screenshot
    await page.screenshot({ 
      path: 'dreambuild-model-selection-test.png',
      fullPage: true 
    });
    console.log('\n📸 Screenshot saved as dreambuild-model-selection-test.png');

    console.log('\n🎯 MODEL SELECTION TEST COMPLETE!');

  } catch (error) {
    console.error('❌ Model selection test failed:', error);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

// Run the model selection test
testModelSelection().catch(console.error);
