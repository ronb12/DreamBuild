const puppeteer = require('puppeteer');

async function testAIModelComprehensive() {
  console.log('🔍 Comprehensive AI Model Selection Test');
  console.log('=======================================');
  
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

    console.log('\n📋 Comprehensive AI Model Tests');
    console.log('===============================');

    // Test 1: Multiple model selections
    console.log('\n1. Testing Multiple Model Selections:');
    
    const modelsToTest = ['CodeLlama 7B', 'StarCoder 15B', 'DeepSeek Coder', 'Auto'];
    
    for (const modelName of modelsToTest) {
      try {
        // Open modal
        await page.evaluate(() => {
          const buttons = Array.from(document.querySelectorAll('button'));
          const autoButton = buttons.find(btn => 
            btn.textContent.includes('Auto') || 
            btn.textContent.includes('CodeLlama') ||
            btn.textContent.includes('StarCoder') ||
            btn.textContent.includes('DeepSeek')
          );
          if (autoButton) {
            autoButton.click();
          }
        });
        
        await page.waitForTimeout(2000);
        
        // Select the model
        const result = await page.evaluate((targetModel) => {
          const buttons = Array.from(document.querySelectorAll('button'));
          const modelButton = buttons.find(btn => 
            btn.textContent.includes(targetModel) && 
            btn.closest('[class*="max-h-80"]')
          );
          
          if (modelButton) {
            modelButton.click();
            return { success: true, message: `Clicked ${targetModel}` };
          }
          return { success: false, message: `${targetModel} button not found` };
        }, modelName);
        
        console.log(`📝 ${modelName} selection:`, result);
        
        if (result.success) {
          await page.waitForTimeout(2000);
          
          // Check if button text updated
          const buttonText = await page.evaluate(() => {
            const buttons = Array.from(document.querySelectorAll('button'));
            const autoButton = buttons.find(btn => 
              btn.textContent.includes('Auto') || 
              btn.textContent.includes('CodeLlama') ||
              btn.textContent.includes('StarCoder') ||
              btn.textContent.includes('DeepSeek')
            );
            return autoButton ? autoButton.textContent.trim() : 'Button not found';
          });
          
          console.log(`   Button text: "${buttonText}"`);
          
          if (buttonText.includes(modelName.split(' ')[0])) {
            console.log(`   ✅ ${modelName} selection successful`);
          } else {
            console.log(`   ❌ ${modelName} selection failed`);
          }
        }
        
      } catch (error) {
        console.log(`❌ Error testing ${modelName}:`, error.message);
      }
    }

    // Test 2: Check if modal closes properly
    console.log('\n2. Testing Modal Close:');
    
    // Open modal
    await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const autoButton = buttons.find(btn => 
        btn.textContent.includes('Auto') || 
        btn.textContent.includes('CodeLlama') ||
        btn.textContent.includes('StarCoder') ||
        btn.textContent.includes('DeepSeek')
      );
      if (autoButton) {
        autoButton.click();
      }
    });
    
    await page.waitForTimeout(2000);
    
    // Check if modal is visible
    const modalVisible = await page.evaluate(() => {
      const elements = Array.from(document.querySelectorAll('*'));
      return elements.some(el => el.textContent && el.textContent.includes('Select AI Model'));
    });
    
    console.log(`📝 Modal visible: ${modalVisible}`);
    
    // Close modal with X button
    const closeResult = await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const closeButton = buttons.find(btn => btn.textContent.includes('×'));
      if (closeButton) {
        closeButton.click();
        return { success: true, message: 'Clicked close button' };
      }
      return { success: false, message: 'Close button not found' };
    });
    
    console.log('📝 Close result:', closeResult);
    
    await page.waitForTimeout(2000);
    
    // Check if modal is closed
    const modalClosed = await page.evaluate(() => {
      const elements = Array.from(document.querySelectorAll('*'));
      return !elements.some(el => el.textContent && el.textContent.includes('Select AI Model'));
    });
    
    console.log(`📝 Modal closed: ${modalClosed}`);

    // Test 3: Check scroll functionality
    console.log('\n3. Testing Scroll Functionality:');
    
    // Open modal again
    await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const autoButton = buttons.find(btn => 
        btn.textContent.includes('Auto') || 
        btn.textContent.includes('CodeLlama') ||
        btn.textContent.includes('StarCoder') ||
        btn.textContent.includes('DeepSeek')
      );
      if (autoButton) {
        autoButton.click();
      }
    });
    
    await page.waitForTimeout(2000);
    
    // Test scrolling
    const scrollTest = await page.evaluate(() => {
      const containers = Array.from(document.querySelectorAll('div'));
      const scrollContainer = containers.find(div => 
        div.className.includes('max-h-80') && 
        div.className.includes('overflow-y-auto')
      );
      
      if (scrollContainer) {
        const initialScroll = scrollContainer.scrollTop;
        scrollContainer.scrollTop = 100;
        const newScroll = scrollContainer.scrollTop;
        
        return {
          hasScrollContainer: true,
          canScroll: newScroll !== initialScroll,
          initialScroll,
          newScroll
        };
      }
      return { hasScrollContainer: false };
    });
    
    console.log('📝 Scroll test result:', scrollTest);
    
    if (scrollTest.hasScrollContainer && scrollTest.canScroll) {
      console.log('   ✅ Scroll functionality works');
    } else {
      console.log('   ❌ Scroll functionality not working');
    }

    // Take final screenshot
    await page.screenshot({ 
      path: 'dreambuild-ai-model-comprehensive-test.png',
      fullPage: true 
    });
    console.log('\n📸 Screenshot saved as dreambuild-ai-model-comprehensive-test.png');

    console.log('\n🎯 COMPREHENSIVE AI MODEL TEST COMPLETE!');
    console.log('=======================================');

  } catch (error) {
    console.error('❌ Comprehensive AI model test failed:', error);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

// Run the comprehensive AI model test
testAIModelComprehensive().catch(console.error);
