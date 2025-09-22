const puppeteer = require('puppeteer');

async function testAutoButtonSimple() {
  console.log('🔍 Simple Auto Button Test');
  console.log('==========================');
  
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

    console.log('\n📋 Test: Auto Button Click');
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
        
        // Wait a bit for the modal
        await page.waitForTimeout(3000);
        
        // Check for any modal or dropdown
        const modalExists = await page.evaluate(() => {
          // Look for any element with "Select AI Model" text
          const elements = Array.from(document.querySelectorAll('*'));
          const modal = elements.find(el => el.textContent && el.textContent.includes('Select AI Model'));
          return modal !== null;
        });
        
        if (modalExists) {
          console.log('✅ Model selector modal found!');
          
          // Look for model options
          const modelOptions = await page.evaluate(() => {
            const elements = Array.from(document.querySelectorAll('*'));
            return elements.filter(el => el.textContent && (el.textContent.includes('CodeLlama') || el.textContent.includes('StarCoder')));
          });
          
          console.log(`✅ Found ${modelOptions.length} model options`);
          
          // Try to find and click a model option
          const modelButton = await page.evaluateHandle(() => {
            const buttons = Array.from(document.querySelectorAll('button'));
            return buttons.find(btn => btn.textContent.includes('CodeLlama'));
          });
          
          if (modelButton) {
            await modelButton.click();
            console.log('✅ Clicked on a model option');
          }
          
        } else {
          console.log('❌ Model selector modal not found');
          
          // Let's check what elements are actually on the page
          const allText = await page.evaluate(() => {
            const elements = Array.from(document.querySelectorAll('*'));
            return elements
              .filter(el => el.textContent && el.textContent.trim().length > 0)
              .map(el => el.textContent.trim())
              .filter(text => text.length < 100) // Avoid very long text
              .slice(0, 20); // First 20 elements
          });
          
          console.log('📋 Current page elements:', allText);
        }
        
      } else {
        console.log('❌ Auto button not found');
      }
    } catch (error) {
      console.log('❌ Auto button test failed:', error.message);
    }

    // Take a screenshot
    await page.screenshot({ 
      path: 'dreambuild-auto-button-simple-test.png',
      fullPage: true 
    });
    console.log('\n📸 Screenshot saved as dreambuild-auto-button-simple-test.png');

    console.log('\n🎯 SIMPLE AUTO BUTTON TEST COMPLETE!');

  } catch (error) {
    console.error('❌ Simple Auto button test failed:', error);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

// Run the simple Auto button test
testAutoButtonSimple().catch(console.error);
