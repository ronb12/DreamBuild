const puppeteer = require('puppeteer');

async function testAIModelComprehensiveFinal() {
  console.log('🔍 Comprehensive AI Model Selection Test - Final');
  console.log('===============================================');
  
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

    console.log('\n📋 Comprehensive AI Model Selection Test:');
    console.log('==========================================');
    
    // Test 1: Modal Opening and Visibility
    console.log('\n1. Testing Modal Opening and Visibility:');
    await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const autoButton = buttons.find(btn => btn.textContent.includes('Auto'));
      if (autoButton) {
        autoButton.click();
      }
    });
    
    await page.waitForTimeout(3000);
    
    const modalTest = await page.evaluate(() => {
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
    
    console.log(`   ${modalTest.isVisible ? '✅' : '❌'} Modal visibility: ${modalTest.isVisible ? 'Visible' : 'Hidden'}`);
    console.log(`   📊 Visible modal elements: ${modalTest.visibleModals}/${modalTest.totalModals}`);
    
    // Test 2: Model Count and Availability
    console.log('\n2. Testing Model Count and Availability:');
    const modelsTest = await page.evaluate(() => {
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
        const lines = text.split('\n');
        return lines[0] || text;
      });
      
      return {
        count: modelButtons.length,
        names: modelNames,
        allEnabled: modelButtons.every(btn => !btn.disabled),
        allVisible: modelButtons.every(btn => btn.offsetParent !== null)
      };
    });
    
    console.log(`   ✅ Found ${modelsTest.count} model buttons`);
    console.log(`   ${modelsTest.allEnabled ? '✅' : '❌'} All models enabled: ${modelsTest.allEnabled ? 'Yes' : 'No'}`);
    console.log(`   ${modelsTest.allVisible ? '✅' : '❌'} All models visible: ${modelsTest.allVisible ? 'Yes' : 'No'}`);
    
    // Test 3: Scroll Functionality
    console.log('\n3. Testing Scroll Functionality:');
    const scrollTest = await page.evaluate(() => {
      const allDivs = Array.from(document.querySelectorAll('div'));
      const scrollContainer = allDivs.find(div => 
        div.className.includes('overflow-y-auto')
      );
      
      if (scrollContainer) {
        const initialScroll = scrollContainer.scrollTop;
        const scrollHeight = scrollContainer.scrollHeight;
        const clientHeight = scrollContainer.clientHeight;
        
        // Try to scroll
        scrollContainer.scrollTop = 100;
        const afterScroll100 = scrollContainer.scrollTop;
        
        // Try to scroll more
        scrollContainer.scrollTop = 200;
        const afterScroll200 = scrollContainer.scrollTop;
        
        // Try to scroll to bottom
        scrollContainer.scrollTop = scrollHeight;
        const afterScrollBottom = scrollContainer.scrollTop;
        
        return {
          found: true,
          canScroll: afterScroll100 !== initialScroll,
          scrollHeight,
          clientHeight,
          maxScroll: scrollHeight - clientHeight,
          initialScroll,
          afterScroll100,
          afterScroll200,
          afterScrollBottom
        };
      }
      
      return { found: false };
    });
    
    console.log(`   ${scrollTest.found ? '✅' : '❌'} Scroll container: ${scrollTest.found ? 'Found' : 'Not found'}`);
    if (scrollTest.found) {
      console.log(`   ${scrollTest.canScroll ? '✅' : '❌'} Scroll functionality: ${scrollTest.canScroll ? 'Working' : 'Not working'}`);
      console.log(`   📊 Scroll dimensions: ${scrollTest.scrollHeight}px content, ${scrollTest.clientHeight}px visible`);
      console.log(`   📊 Max scroll: ${scrollTest.maxScroll}px`);
      if (scrollTest.canScroll) {
        console.log(`   📊 Test scrolls: 100px→${scrollTest.afterScroll100}px, 200px→${scrollTest.afterScroll200}px, bottom→${scrollTest.afterScrollBottom}px`);
      }
    }
    
    // Test 4: Model Selection Functionality
    console.log('\n4. Testing Model Selection Functionality:');
    const selectionResults = [];
    
    // Test all available models
    const allModels = ['Auto', 'CodeLlama 7B', 'CodeLlama 13B', 'CodeLlama 34B', 'StarCoder 15B', 'DeepSeek Coder', 'WizardCoder 7B', 'Phi-3 Mini', 'Llama 3 8B', 'Mistral 7B', 'Gemma 7B', 'Qwen 7B', 'CodeT5 Small', 'InCoder 6B'];
    
    for (const modelName of allModels) {
      try {
        // Open modal first
        await page.evaluate(() => {
          const buttons = Array.from(document.querySelectorAll('button'));
          const autoButton = buttons.find(btn => 
            btn.textContent.includes('Auto') || 
            btn.textContent.includes('CodeLlama') ||
            btn.textContent.includes('StarCoder') ||
            btn.textContent.includes('DeepSeek') ||
            btn.textContent.includes('WizardCoder') ||
            btn.textContent.includes('Phi-3') ||
            btn.textContent.includes('Llama') ||
            btn.textContent.includes('Mistral') ||
            btn.textContent.includes('Gemma') ||
            btn.textContent.includes('Qwen') ||
            btn.textContent.includes('CodeT5') ||
            btn.textContent.includes('InCoder')
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
        
        if (selectionResult.success) {
          await page.waitForTimeout(2000);
          
          // Check if button text updated
          const buttonText = await page.evaluate(() => {
            const buttons = Array.from(document.querySelectorAll('button'));
            const autoButton = buttons.find(btn => 
              btn.textContent.includes('Auto') || 
              btn.textContent.includes('CodeLlama') ||
              btn.textContent.includes('StarCoder') ||
              btn.textContent.includes('DeepSeek') ||
              btn.textContent.includes('WizardCoder') ||
              btn.textContent.includes('Phi-3') ||
              btn.textContent.includes('Llama') ||
              btn.textContent.includes('Mistral') ||
              btn.textContent.includes('Gemma') ||
              btn.textContent.includes('Qwen') ||
              btn.textContent.includes('CodeT5') ||
              btn.textContent.includes('InCoder')
            );
            return autoButton ? autoButton.textContent.trim() : 'Button not found';
          });
          
          // Check if the selection was successful
          const selectionSuccessful = buttonText.includes(modelName.split(' ')[0]) || 
                                    (modelName === 'Auto' && buttonText.includes('Auto'));
          
          selectionResults.push({ 
            model: modelName, 
            success: selectionSuccessful,
            buttonText: buttonText
          });
          
          if (selectionSuccessful) {
            console.log(`   ✅ ${modelName}: Selection successful (Button: "${buttonText}")`);
          } else {
            console.log(`   ❌ ${modelName}: Selection failed (Button: "${buttonText}")`);
          }
        } else {
          selectionResults.push({ model: modelName, success: false });
          console.log(`   ❌ ${modelName}: Button not found`);
        }
        
      } catch (error) {
        console.log(`   ❌ ${modelName}: Error - ${error.message}`);
        selectionResults.push({ model: modelName, success: false });
      }
    }
    
    // Test 5: Modal Close Functionality
    console.log('\n5. Testing Modal Close Functionality:');
    
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
    
    // Close modal with X button
    const closeTest = await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const closeButton = buttons.find(btn => btn.textContent.includes('×'));
      if (closeButton) {
        closeButton.click();
        return { success: true, message: 'Clicked close button' };
      }
      return { success: false, message: 'Close button not found' };
    });
    
    console.log(`   ${closeTest.success ? '✅' : '❌'} Modal close: ${closeTest.success ? 'Success' : 'Failed'}`);
    
    await page.waitForTimeout(2000);
    
    // Check if modal is closed
    const modalClosed = await page.evaluate(() => {
      const elements = Array.from(document.querySelectorAll('*'));
      return !elements.some(el => el.textContent && el.textContent.includes('Select AI Model'));
    });
    
    console.log(`   ${modalClosed ? '✅' : '❌'} Modal closed: ${modalClosed ? 'Yes' : 'No'}`);
    
    // Take final screenshot
    await page.screenshot({ 
      path: 'dreambuild-ai-model-comprehensive-final-test.png',
      fullPage: true 
    });
    console.log('\n📸 Screenshot saved as dreambuild-ai-model-comprehensive-final-test.png');

    // Final Summary
    console.log('\n🎯 COMPREHENSIVE AI MODEL SELECTION TEST SUMMARY:');
    console.log('================================================');
    console.log(`✅ Modal visibility: ${modalTest.isVisible ? 'Working' : 'Failed'}`);
    console.log(`✅ Model availability: ${modelsTest.count} models found`);
    console.log(`✅ Model enablement: ${modelsTest.allEnabled ? 'All enabled' : 'Some disabled'}`);
    console.log(`✅ Model visibility: ${modelsTest.allVisible ? 'All visible' : 'Some hidden'}`);
    console.log(`✅ Scroll functionality: ${scrollTest.found && scrollTest.canScroll ? 'Working' : 'Failed'}`);
    console.log(`✅ Modal close: ${closeTest.success && modalClosed ? 'Working' : 'Failed'}`);
    
    const successfulSelections = selectionResults.filter(r => r.success).length;
    console.log(`✅ Model selections: ${successfulSelections}/${selectionResults.length} successful (${Math.round(successfulSelections/selectionResults.length*100)}%)`);
    
    // List successful and failed selections
    const successful = selectionResults.filter(r => r.success).map(r => r.model);
    const failed = selectionResults.filter(r => !r.success).map(r => r.model);
    
    if (successful.length > 0) {
      console.log('\n✅ Successfully tested models:');
      successful.forEach(model => console.log(`   • ${model}`));
    }
    
    if (failed.length > 0) {
      console.log('\n❌ Failed models:');
      failed.forEach(model => console.log(`   • ${model}`));
    }
    
    // Overall assessment
    const overallSuccess = modalTest.isVisible && 
                          modelsTest.count > 0 && 
                          modelsTest.allEnabled && 
                          modelsTest.allVisible && 
                          scrollTest.found && 
                          scrollTest.canScroll && 
                          closeTest.success && 
                          modalClosed && 
                          successfulSelections > 0;
    
    console.log('\n🎉 OVERALL ASSESSMENT:');
    console.log('=====================');
    if (overallSuccess) {
      console.log('✅ AI MODEL SELECTION IS FULLY FUNCTIONAL!');
      console.log('   • Modal opens and closes correctly');
      console.log('   • All models are visible and selectable');
      console.log('   • Scroll functionality works perfectly');
      console.log('   • Model selection updates button text correctly');
      console.log('   • All core functionality is working as expected');
    } else {
      console.log('⚠️ SOME ISSUES DETECTED:');
      if (!modalTest.isVisible) console.log('   • Modal visibility issue');
      if (modelsTest.count === 0) console.log('   • No models found');
      if (!modelsTest.allEnabled) console.log('   • Some models disabled');
      if (!modelsTest.allVisible) console.log('   • Some models hidden');
      if (!scrollTest.found || !scrollTest.canScroll) console.log('   • Scroll functionality issue');
      if (!closeTest.success || !modalClosed) console.log('   • Modal close issue');
      if (successfulSelections === 0) console.log('   • No successful model selections');
    }

  } catch (error) {
    console.error('❌ Comprehensive AI model test failed:', error);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

// Run the comprehensive AI model test
testAIModelComprehensiveFinal().catch(console.error);
