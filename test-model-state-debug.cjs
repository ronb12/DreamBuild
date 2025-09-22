const puppeteer = require('puppeteer');

async function testModelStateDebug() {
  console.log('🔍 Testing AI Model State Debug');
  console.log('===============================');
  
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

    console.log('\n📋 Testing Model State Debug:');
    
    // Test the model state and button text
    const debugResult = await page.evaluate(() => {
      // Find all buttons that might contain model names
      const allButtons = Array.from(document.querySelectorAll('button'));
      const modelButtons = allButtons.filter(btn => {
        const text = btn.textContent.toLowerCase();
        return text.includes('auto') || 
               text.includes('codellama') || 
               text.includes('starcoder') || 
               text.includes('deepseek') || 
               text.includes('mistral') || 
               text.includes('gemma') ||
               text.includes('wizardcoder') ||
               text.includes('phi') ||
               text.includes('llama') ||
               text.includes('qwen') ||
               text.includes('codet5') ||
               text.includes('incoder');
      });
      
      // Check initial state
      const initialModelButtons = modelButtons.map(btn => ({
        text: btn.textContent.trim(),
        className: btn.className,
        id: btn.id,
        title: btn.title
      }));
      
      return {
        totalButtons: allButtons.length,
        modelButtonsFound: modelButtons.length,
        initialModelButtons: initialModelButtons,
        pageTitle: document.title
      };
    });
    
    console.log(`   📊 Total buttons found: ${debugResult.totalButtons}`);
    console.log(`   📊 Model-related buttons found: ${debugResult.modelButtonsFound}`);
    console.log(`   📊 Initial model buttons:`);
    debugResult.initialModelButtons.forEach((btn, index) => {
      console.log(`      ${index + 1}. Text: "${btn.text}" | Title: "${btn.title}"`);
    });
    
    // Now test model selection
    console.log('\n   🎯 Testing CodeLlama 7B Selection:');
    
    // Open modal
    await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const autoButton = buttons.find(btn => btn.textContent.includes('Auto') && btn.title === 'Select AI Model');
      if (autoButton) {
        autoButton.click();
      }
    });
    
    await page.waitForTimeout(2000);
    
    // Select CodeLlama 7B
    const selectionResult = await page.evaluate(() => {
      const modalContainer = document.querySelector('.fixed.inset-0.z-\\[999999\\]');
      if (!modalContainer) return { success: false, message: 'Modal not found' };
      
      const modelButtons = modalContainer.querySelectorAll('button');
      const codeLlamaButton = Array.from(modelButtons).find(btn => 
        btn.textContent.includes('CodeLlama 7B')
      );
      
      if (codeLlamaButton) {
        codeLlamaButton.click();
        return { success: true, message: 'Successfully clicked CodeLlama 7B button' };
      }
      
      return { success: false, message: 'CodeLlama 7B button not found' };
    });
    
    console.log(`      ${selectionResult.success ? '✅' : '❌'} Selection: ${selectionResult.success ? 'Success' : 'Failed'}`);
    if (!selectionResult.success) {
      console.log(`      📝 ${selectionResult.message}`);
    }
    
    await page.waitForTimeout(2000);
    
    // Check button text after selection
    const afterSelectionResult = await page.evaluate(() => {
      // Find all buttons again
      const allButtons = Array.from(document.querySelectorAll('button'));
      const modelButtons = allButtons.filter(btn => {
        const text = btn.textContent.toLowerCase();
        return text.includes('auto') || 
               text.includes('codellama') || 
               text.includes('starcoder') || 
               text.includes('deepseek') || 
               text.includes('mistral') || 
               text.includes('gemma') ||
               text.includes('wizardcoder') ||
               text.includes('phi') ||
               text.includes('llama') ||
               text.includes('qwen') ||
               text.includes('codet5') ||
               text.includes('incoder');
      });
      
      // Check the main model button (should be the one with title "Select AI Model")
      const mainModelButton = modelButtons.find(btn => btn.title === 'Select AI Model');
      
      // Also check the model info section
      const modelInfoSpans = Array.from(document.querySelectorAll('span')).filter(span => {
        const text = span.textContent.toLowerCase();
        return text.includes('auto') || 
               text.includes('codellama') || 
               text.includes('starcoder') || 
               text.includes('deepseek') || 
               text.includes('mistral') || 
               text.includes('gemma') ||
               text.includes('wizardcoder') ||
               text.includes('phi') ||
               text.includes('llama') ||
               text.includes('qwen') ||
               text.includes('codet5') ||
               text.includes('incoder');
      });
      
      return {
        mainButtonFound: !!mainModelButton,
        mainButtonText: mainButtonFound ? mainModelButton.textContent.trim() : 'Not found',
        modelInfoSpans: modelInfoSpans.map(span => span.textContent.trim()),
        allModelButtons: modelButtons.map(btn => ({
          text: btn.textContent.trim(),
          title: btn.title,
          className: btn.className
        }))
      };
    });
    
    console.log(`      ${afterSelectionResult.mainButtonFound ? '✅' : '❌'} Main button found: ${afterSelectionResult.mainButtonFound ? 'Yes' : 'No'}`);
    console.log(`      📊 Main button text: "${afterSelectionResult.mainButtonText}"`);
    console.log(`      📊 Model info spans: ${afterSelectionResult.modelInfoSpans.join(', ')}`);
    
    console.log('\n      📊 All model-related buttons after selection:');
    afterSelectionResult.allModelButtons.forEach((btn, index) => {
      console.log(`         ${index + 1}. Text: "${btn.text}" | Title: "${btn.title}"`);
    });
    
    // Check if the text contains "CodeLlama 7B"
    const containsCodeLlama = afterSelectionResult.mainButtonText.includes('CodeLlama 7B');
    console.log(`      ${containsCodeLlama ? '✅' : '❌'} Contains CodeLlama 7B: ${containsCodeLlama ? 'Yes' : 'No'}`);
    
    // Take screenshot
    await page.screenshot({ 
      path: 'dreambuild-model-state-debug-test.png',
      fullPage: true 
    });
    console.log('\n📸 Screenshot saved as dreambuild-model-state-debug-test.png');

    // Summary
    console.log('\n🎯 MODEL STATE DEBUG TEST SUMMARY:');
    console.log('==================================');
    console.log(`✅ Model buttons found: ${debugResult.modelButtonsFound}`);
    console.log(`✅ Selection successful: ${selectionResult.success}`);
    console.log(`✅ Main button found: ${afterSelectionResult.mainButtonFound}`);
    console.log(`✅ Button text updated: ${containsCodeLlama ? 'Yes' : 'No'}`);
    
    if (containsCodeLlama) {
      console.log('\n🎉 BUTTON TEXT IS UPDATING CORRECTLY!');
      console.log('   • Model selection is working');
      console.log('   • Button text is updating');
      console.log('   • State is being managed properly');
    } else {
      console.log('\n❌ BUTTON TEXT IS NOT UPDATING');
      console.log('   • There may be a React state issue');
      console.log('   • The component may not be re-rendering');
      console.log('   • There might be multiple buttons with the same text');
    }

  } catch (error) {
    console.error('❌ Model state debug test failed:', error);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

testModelStateDebug().catch(console.error);
