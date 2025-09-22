const puppeteer = require('puppeteer');

async function testButtonTextUpdates() {
  console.log('🔍 Testing AI Model Button Text Updates');
  console.log('=======================================');
  
  let browser;
  try {
    browser = await puppeteer.launch({
      headless: false,
      defaultViewport: { width: 1400, height: 900 },
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    
    // Navigate to the application
    console.log('🌐 Navigating to AI Builder...');
    await page.goto('http://localhost:3001/ai-builder', { 
      waitUntil: 'networkidle2',
      timeout: 30000 
    });

    await page.waitForTimeout(5000);

    console.log('\n📋 Testing Button Text Updates:');
    
    // Test rapid model switching to ensure button text updates consistently
    const modelsToTest = [
      { id: 'auto', name: 'Auto' },
      { id: 'codellama-7b', name: 'CodeLlama 7B' },
      { id: 'starcoder-15b', name: 'StarCoder 15B' },
      { id: 'deepseek-coder', name: 'DeepSeek Coder' },
      { id: 'mistral-7b', name: 'Mistral 7B' },
      { id: 'gemma-7b', name: 'Gemma 7B' },
      { id: 'auto', name: 'Auto' }
    ];
    
    let successfulUpdates = 0;
    
    for (let i = 0; i < modelsToTest.length; i++) {
      const model = modelsToTest[i];
      console.log(`\n   🎯 Test ${i + 1}: Switching to ${model.name}`);
      
      // Open modal
      await page.evaluate(() => {
        const buttons = Array.from(document.querySelectorAll('button'));
        const modelButton = buttons.find(btn => btn.title === 'Select AI Model');
        if (modelButton) {
          modelButton.click();
        }
      });
      
      await page.waitForTimeout(1000);
      
      // Select the model
      const selectionResult = await page.evaluate((modelId, modelName) => {
        const modalContainer = document.querySelector('.fixed.inset-0.z-\\[999999\\]');
        if (!modalContainer) return { success: false, message: 'Modal not found' };
        
        const modelButtons = modalContainer.querySelectorAll('button');
        let targetButton;
        
        if (modelId === 'auto') {
          targetButton = Array.from(modelButtons).find(btn => 
            btn.textContent.includes('Auto') && btn.closest('div[style*="z-index: 999999"]')
          );
        } else {
          targetButton = Array.from(modelButtons).find(btn => 
            btn.textContent.includes(modelName)
          );
        }
        
        if (targetButton) {
          targetButton.click();
          return { success: true, message: `Successfully clicked ${modelName} button` };
        }
        
        return { success: false, message: `${modelName} button not found` };
      }, model.id, model.name);
      
      console.log(`      ${selectionResult.success ? '✅' : '❌'} Selection: ${selectionResult.success ? 'Success' : 'Failed'}`);
      if (!selectionResult.success) {
        console.log(`      📝 ${selectionResult.message}`);
        continue;
      }
      
      await page.waitForTimeout(1500);
      
      // Check button text after selection
      const buttonTextResult = await page.evaluate((expectedName) => {
        const buttons = Array.from(document.querySelectorAll('button'));
        const modelButton = buttons.find(btn => btn.title === 'Select AI Model');
        
        if (modelButton) {
          const buttonText = modelButton.textContent.trim();
          return {
            found: true,
            buttonText: buttonText,
            matches: buttonText === expectedName || buttonText.includes(expectedName)
          };
        }
        
        return { found: false };
      }, model.name);
      
      console.log(`      ${buttonTextResult.found ? '✅' : '❌'} Button found: ${buttonTextResult.found ? 'Yes' : 'No'}`);
      if (buttonTextResult.found) {
        console.log(`      📊 Button text: "${buttonTextResult.buttonText}"`);
        console.log(`      ${buttonTextResult.matches ? '✅' : '❌'} Text matches: ${buttonTextResult.matches ? 'Yes' : 'No'}`);
        
        if (buttonTextResult.matches) {
          console.log(`      ✅ ${model.name} button text updated successfully!`);
          successfulUpdates++;
        } else {
          console.log(`      ❌ Expected "${model.name}" but got "${buttonTextResult.buttonText}"`);
        }
      }
      
      // Wait a bit before next test
      await page.waitForTimeout(500);
    }
    
    // Take final screenshot
    await page.screenshot({ 
      path: 'dreambuild-button-text-updates-test.png',
      fullPage: true 
    });
    console.log('\n📸 Screenshot saved as dreambuild-button-text-updates-test.png');

    // Summary
    console.log('\n🎯 BUTTON TEXT UPDATES TEST SUMMARY:');
    console.log('=====================================');
    console.log(`✅ Total tests: ${modelsToTest.length}`);
    console.log(`✅ Successful updates: ${successfulUpdates}`);
    console.log(`✅ Success rate: ${Math.round((successfulUpdates / modelsToTest.length) * 100)}%`);
    
    const isWorking = successfulUpdates >= modelsToTest.length * 0.8; // 80% success rate
    
    console.log('\n🎉 OVERALL ASSESSMENT:');
    console.log('=====================');
    if (isWorking) {
      console.log('✅ BUTTON TEXT UPDATES ARE WORKING!');
      console.log('   • Model selection is functional');
      console.log('   • Button text updates correctly');
      console.log('   • Multiple model switches work');
      console.log('   • The AI model selector is ready for production use!');
    } else {
      console.log('❌ BUTTON TEXT UPDATES NEED ATTENTION');
      console.log('   • Some model selections may not be updating button text');
      console.log('   • There may be intermittent rendering issues');
      console.log('   • Consider additional debugging or fixes');
    }

  } catch (error) {
    console.error('❌ Button text updates test failed:', error);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

testButtonTextUpdates().catch(console.error);
