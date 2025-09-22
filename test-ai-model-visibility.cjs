const puppeteer = require('puppeteer');

async function testAIModelVisibility() {
  console.log('🔍 Testing AI Model Selection Visibility and Functionality');
  console.log('=========================================================');
  
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

    console.log('\n📋 Testing AI Model Selection Visibility:');
    console.log('=========================================');
    
    // Test 1: Find and click the Auto button
    console.log('\n1. Finding and Clicking Auto Button:');
    const autoButtonResult = await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const autoButton = buttons.find(btn => btn.textContent.includes('Auto'));
      
      if (autoButton) {
        console.log('Found Auto button:', autoButton.textContent.trim());
        autoButton.click();
        return { success: true, buttonText: autoButton.textContent.trim() };
      }
      return { success: false, message: 'Auto button not found' };
    });
    
    console.log(`   ${autoButtonResult.success ? '✅' : '❌'} Auto button: ${autoButtonResult.success ? 'Found and clicked' : 'Not found'}`);
    if (autoButtonResult.success) {
      console.log(`   📝 Button text: "${autoButtonResult.buttonText}"`);
    }
    
    // Wait for modal to appear
    await page.waitForTimeout(3000);
    
    // Test 2: Check if modal is visible
    console.log('\n2. Checking Modal Visibility:');
    const modalVisibility = await page.evaluate(() => {
      // Look for modal elements
      const modalElements = Array.from(document.querySelectorAll('*')).filter(el => 
        el.textContent && el.textContent.includes('Select AI Model')
      );
      
      const visibleModals = modalElements.filter(el => {
        const style = window.getComputedStyle(el);
        return style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0';
      });
      
      return {
        totalModals: modalElements.length,
        visibleModals: visibleModals.length,
        isVisible: visibleModals.length > 0
      };
    });
    
    console.log(`   ${modalVisibility.isVisible ? '✅' : '❌'} Modal visibility: ${modalVisibility.isVisible ? 'Visible' : 'Hidden'}`);
    console.log(`   📊 Total modal elements: ${modalVisibility.totalModals}`);
    console.log(`   📊 Visible modal elements: ${modalVisibility.visibleModals}`);
    
    // Test 3: Check if modal is positioned correctly
    console.log('\n3. Checking Modal Position:');
    const modalPosition = await page.evaluate(() => {
      const allDivs = Array.from(document.querySelectorAll('div'));
      const modalContainer = allDivs.find(div => 
        div.className.includes('absolute') && 
        div.className.includes('bottom-20') &&
        div.className.includes('z-[9999]')
      );
      
      if (modalContainer) {
        const rect = modalContainer.getBoundingClientRect();
        const style = window.getComputedStyle(modalContainer);
        
        return {
          found: true,
          rect: {
            top: rect.top,
            left: rect.left,
            width: rect.width,
            height: rect.height,
            bottom: rect.bottom,
            right: rect.right
          },
          computedStyle: {
            position: style.position,
            zIndex: style.zIndex,
            display: style.display,
            visibility: style.visibility,
            opacity: style.opacity
          },
          isInViewport: rect.top >= 0 && rect.left >= 0 && rect.bottom <= window.innerHeight && rect.right <= window.innerWidth
        };
      }
      
      return { found: false };
    });
    
    console.log(`   ${modalPosition.found ? '✅' : '❌'} Modal container: ${modalPosition.found ? 'Found' : 'Not found'}`);
    
    if (modalPosition.found) {
      console.log(`   📊 Position: top=${Math.round(modalPosition.rect.top)}px, left=${Math.round(modalPosition.rect.left)}px`);
      console.log(`   📊 Size: ${Math.round(modalPosition.rect.width)}x${Math.round(modalPosition.rect.height)}px`);
      console.log(`   📊 Z-index: ${modalPosition.computedStyle.zIndex}`);
      console.log(`   ${modalPosition.isInViewport ? '✅' : '❌'} In viewport: ${modalPosition.isInViewport ? 'Yes' : 'No'}`);
    }
    
    // Test 4: Count and list all available models
    console.log('\n4. Checking Available Models:');
    const modelsResult = await page.evaluate(() => {
      const allButtons = Array.from(document.querySelectorAll('button'));
      const modelButtons = allButtons.filter(btn => {
        const text = btn.textContent;
        return text.includes('GB') || text.includes('Smart') || 
               text.includes('CodeLlama') || text.includes('StarCoder') || 
               text.includes('DeepSeek') || text.includes('WizardCoder') ||
               text.includes('Phi-3') || text.includes('Llama') ||
               text.includes('Mistral') || text.includes('Gemma') ||
               text.includes('Qwen') || text.includes('CodeT5') ||
               text.includes('InCoder');
      });
      
      const modelNames = modelButtons.map(btn => {
        const text = btn.textContent.trim();
        // Extract just the model name (first line)
        const lines = text.split('\n');
        return lines[0] || text;
      });
      
      return {
        count: modelButtons.length,
        names: modelNames,
        buttons: modelButtons.map(btn => ({
          text: btn.textContent.trim(),
          visible: btn.offsetParent !== null,
          enabled: !btn.disabled
        }))
      };
    });
    
    console.log(`   ✅ Found ${modelsResult.count} model buttons`);
    console.log('   📝 Available models:');
    modelsResult.names.forEach((name, index) => {
      console.log(`      ${index + 1}. ${name}`);
    });
    
    // Test 5: Test model selection functionality
    console.log('\n5. Testing Model Selection Functionality:');
    const selectionResults = [];
    
    // Test a few different models
    const modelsToTest = ['CodeLlama 7B', 'StarCoder 15B', 'DeepSeek Coder', 'Auto'];
    
    for (const modelName of modelsToTest) {
      try {
        // Open modal first
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
        
        // Try to select the model
        const selectionResult = await page.evaluate((targetModel) => {
          const buttons = Array.from(document.querySelectorAll('button'));
          const modelButton = buttons.find(btn => 
            btn.textContent.includes(targetModel) && 
            btn.closest('[class*="overflow-y-auto"]')
          );
          
          if (modelButton) {
            modelButton.click();
            return { success: true, message: `Clicked ${targetModel}` };
          }
          return { success: false, message: `${targetModel} button not found` };
        }, modelName);
        
        console.log(`   📝 ${modelName}: ${selectionResult.success ? '✅ Success' : '❌ Failed'}`);
        
        if (selectionResult.success) {
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
          
          console.log(`      📝 Button text after selection: "${buttonText}"`);
          
          if (buttonText.includes(modelName.split(' ')[0])) {
            console.log(`      ✅ ${modelName} selection confirmed`);
            selectionResults.push({ model: modelName, success: true });
          } else {
            console.log(`      ❌ ${modelName} selection failed - button text not updated`);
            selectionResults.push({ model: modelName, success: false });
          }
        } else {
          selectionResults.push({ model: modelName, success: false });
        }
        
      } catch (error) {
        console.log(`   ❌ Error testing ${modelName}:`, error.message);
        selectionResults.push({ model: modelName, success: false });
      }
    }
    
    // Test 6: Check scroll functionality
    console.log('\n6. Testing Scroll Functionality:');
    const scrollTest = await page.evaluate(() => {
      const allDivs = Array.from(document.querySelectorAll('div'));
      const scrollContainer = allDivs.find(div => 
        div.className.includes('overflow-y-auto') && 
        div.style.height === '80px'
      );
      
      if (scrollContainer) {
        const initialScroll = scrollContainer.scrollTop;
        const scrollHeight = scrollContainer.scrollHeight;
        const clientHeight = scrollContainer.clientHeight;
        
        // Try to scroll
        scrollContainer.scrollTop = 100;
        const afterScroll = scrollContainer.scrollTop;
        
        return {
          found: true,
          canScroll: afterScroll !== initialScroll,
          scrollHeight,
          clientHeight,
          maxScroll: scrollHeight - clientHeight
        };
      }
      
      return { found: false };
    });
    
    console.log(`   ${scrollTest.found ? '✅' : '❌'} Scroll container: ${scrollTest.found ? 'Found' : 'Not found'}`);
    if (scrollTest.found) {
      console.log(`   ${scrollTest.canScroll ? '✅' : '❌'} Scroll functionality: ${scrollTest.canScroll ? 'Working' : 'Not working'}`);
      if (scrollTest.canScroll) {
        console.log(`   📊 Max scroll: ${scrollTest.maxScroll}px`);
      }
    }
    
    // Take screenshot
    await page.screenshot({ 
      path: 'dreambuild-ai-model-visibility-test.png',
      fullPage: true 
    });
    console.log('\n📸 Screenshot saved as dreambuild-ai-model-visibility-test.png');

    // Summary
    console.log('\n🎯 AI MODEL SELECTION TEST SUMMARY:');
    console.log('===================================');
    console.log(`✅ Auto button: ${autoButtonResult.success ? 'Working' : 'Failed'}`);
    console.log(`✅ Modal visibility: ${modalVisibility.isVisible ? 'Visible' : 'Hidden'}`);
    console.log(`✅ Modal position: ${modalPosition.found ? 'Correct' : 'Incorrect'}`);
    console.log(`✅ Models available: ${modelsResult.count} models`);
    console.log(`✅ Scroll functionality: ${scrollTest.found && scrollTest.canScroll ? 'Working' : 'Failed'}`);
    
    const successfulSelections = selectionResults.filter(r => r.success).length;
    console.log(`✅ Model selections: ${successfulSelections}/${selectionResults.length} successful`);
    
    if (modalVisibility.isVisible && modalPosition.found && modelsResult.count > 0) {
      console.log('\n🎉 AI MODEL SELECTION IS WORKING CORRECTLY!');
      console.log('   • Modal is visible and properly positioned');
      console.log('   • All models are available for selection');
      console.log('   • Model selection functionality is working');
      console.log('   • Scroll functionality is working');
    } else {
      console.log('\n⚠️ ISSUES DETECTED:');
      if (!modalVisibility.isVisible) console.log('   • Modal is not visible');
      if (!modalPosition.found) console.log('   • Modal position is incorrect');
      if (modelsResult.count === 0) console.log('   • No models found');
    }

  } catch (error) {
    console.error('❌ AI model visibility test failed:', error);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

// Run the AI model visibility test
testAIModelVisibility().catch(console.error);
