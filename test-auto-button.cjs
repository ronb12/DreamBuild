const puppeteer = require('puppeteer');

async function testAutoButton() {
  console.log('🔍 Testing Auto Button Functionality');
  console.log('====================================');
  
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

    page.on('pageerror', error => {
      console.log('❌ Page Error:', error.message);
    });

    // Navigate to the application
    console.log('🌐 Navigating to AI Builder...');
    await page.goto('http://localhost:3001/ai-builder', { 
      waitUntil: 'networkidle2',
      timeout: 30000 
    });

    // Wait for the page to fully load
    await page.waitForTimeout(5000);

    console.log('\n📋 Test 1: Find Auto Button');
    try {
      // Find the Auto button
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
        await page.waitForTimeout(2000);
        
        // Check if model selector modal appeared
        const modalExists = await page.evaluate(() => {
          const modal = document.querySelector('[class*="Select AI Model"]');
          return modal !== null;
        });
        
        if (modalExists) {
          console.log('✅ Model selector modal opened');
          
          // Check for model options
          const modelOptions = await page.evaluate(() => {
            const buttons = Array.from(document.querySelectorAll('button'));
            return buttons.filter(btn => btn.textContent.includes('CodeLlama') || btn.textContent.includes('StarCoder') || btn.textContent.includes('Auto'));
          });
          
          console.log(`✅ Found ${modelOptions.length} model options`);
          
          // Try to click on a different model
          if (modelOptions.length > 1) {
            await modelOptions[1].click();
            console.log('✅ Clicked on a different model');
            await page.waitForTimeout(1000);
          }
          
          // Close the modal
          const closeButton = await page.evaluateHandle(() => {
            const buttons = Array.from(document.querySelectorAll('button'));
            return buttons.find(btn => btn.textContent.includes('×') && btn.closest('[class*="Select AI Model"]'));
          });
          
          if (closeButton) {
            await closeButton.click();
            console.log('✅ Closed model selector modal');
          }
        } else {
          console.log('❌ Model selector modal did not appear');
        }
      } else {
        console.log('❌ Auto button not found');
      }
    } catch (error) {
      console.log('❌ Auto button test failed:', error.message);
    }

    console.log('\n📋 Test 2: Verify Button State');
    try {
      // Check if the button text changed
      const buttonText = await page.evaluate(() => {
        const buttons = Array.from(document.querySelectorAll('button'));
        const autoButton = buttons.find(btn => btn.textContent.includes('Auto') || btn.textContent.includes('CodeLlama'));
        return autoButton ? autoButton.textContent : 'Button not found';
      });
      
      console.log(`✅ Current button text: "${buttonText}"`);
      
    } catch (error) {
      console.log('❌ Button state verification failed:', error.message);
    }

    // Take a screenshot
    await page.screenshot({ 
      path: 'dreambuild-auto-button-test.png',
      fullPage: true 
    });
    console.log('\n📸 Screenshot saved as dreambuild-auto-button-test.png');

    console.log('\n🎯 AUTO BUTTON TEST COMPLETE!');
    console.log('=============================');

  } catch (error) {
    console.error('❌ Auto button test failed:', error);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

// Run the Auto button test
testAutoButton().catch(console.error);
