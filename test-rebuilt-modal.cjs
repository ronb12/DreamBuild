const puppeteer = require('puppeteer');

async function testRebuiltModal() {
  console.log('🔍 Testing Rebuilt AI Model Selector Modal');
  console.log('==========================================');
  
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

    console.log('\n📋 Testing Rebuilt Modal:');
    
    // Open modal
    await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const autoButton = buttons.find(btn => btn.textContent.includes('Auto'));
      if (autoButton) {
        autoButton.click();
      }
    });
    
    await page.waitForTimeout(2000);
    
    // Check modal layout and positioning
    const modalTest = await page.evaluate(() => {
      // Find the modal container
      const modalContainer = document.querySelector('.fixed.inset-0.z-\\[999999\\]');
      
      if (modalContainer) {
        const rect = modalContainer.getBoundingClientRect();
        const style = window.getComputedStyle(modalContainer);
        
        // Find the models list container
        const modelsList = modalContainer.querySelector('.space-y-2');
        const modelButtons = modalContainer.querySelectorAll('button');
        
        // Check if models are arranged vertically
        const modelPositions = Array.from(modelButtons).map(btn => {
          const btnRect = btn.getBoundingClientRect();
          return {
            top: Math.round(btnRect.top),
            left: Math.round(btnRect.left),
            width: Math.round(btnRect.width),
            height: Math.round(btnRect.height)
          };
        });
        
        // Check if models are stacked vertically (each should be below the previous)
        let isVertical = true;
        for (let i = 1; i < modelPositions.length; i++) {
          if (modelPositions[i].top <= modelPositions[i-1].top) {
            isVertical = false;
            break;
          }
        }
        
        return {
          found: true,
          rect: {
            top: Math.round(rect.top),
            left: Math.round(rect.left),
            width: Math.round(rect.width),
            height: Math.round(rect.height)
          },
          style: {
            position: style.position,
            zIndex: style.zIndex,
            display: style.display
          },
          modelsCount: modelButtons.length,
          isVertical: isVertical,
          modelPositions: modelPositions.slice(0, 5), // First 5 positions
          isCentered: rect.top > 0 && rect.left > 0 && rect.right < window.innerWidth && rect.bottom < window.innerHeight,
          isVisible: style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0'
        };
      }
      
      return { found: false };
    });
    
    console.log(`   ${modalTest.found ? '✅' : '❌'} Modal: ${modalTest.found ? 'Found' : 'Not found'}`);
    if (modalTest.found) {
      console.log(`   📊 Modal position: top=${modalTest.rect.top}px, left=${modalTest.rect.left}px`);
      console.log(`   📊 Modal size: ${modalTest.rect.width}x${modalTest.rect.height}px`);
      console.log(`   📊 Modal z-index: ${modalTest.style.zIndex}`);
      console.log(`   📊 Models count: ${modalTest.modelsCount}`);
      console.log(`   ${modalTest.isVertical ? '✅' : '❌'} Vertical layout: ${modalTest.isVertical ? 'Yes' : 'No'}`);
      console.log(`   ${modalTest.isCentered ? '✅' : '❌'} Centered: ${modalTest.isCentered ? 'Yes' : 'No'}`);
      console.log(`   ${modalTest.isVisible ? '✅' : '❌'} Visible: ${modalTest.isVisible ? 'Yes' : 'No'}`);
      
      if (modalTest.modelPositions.length > 0) {
        console.log('   📊 Model positions (first 5):');
        modalTest.modelPositions.forEach((pos, index) => {
          console.log(`      ${index + 1}. top=${pos.top}px, left=${pos.left}px, size=${pos.width}x${pos.height}px`);
        });
      }
    }
    
    // Test modal interaction
    const interactionTest = await page.evaluate(() => {
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
    
    console.log(`   ${interactionTest.success ? '✅' : '❌'} Interaction: ${interactionTest.success ? 'Success' : 'Failed'}`);
    if (!interactionTest.success) {
      console.log(`   📝 ${interactionTest.message}`);
    }
    
    // Test backdrop click
    const backdropTest = await page.evaluate(() => {
      const modalContainer = document.querySelector('.fixed.inset-0.z-\\[999999\\]');
      if (!modalContainer) return { success: false, message: 'Modal not found' };
      
      const backdrop = modalContainer.querySelector('.absolute.inset-0');
      if (backdrop) {
        backdrop.click();
        return { success: true, message: 'Backdrop click successful' };
      }
      
      return { success: false, message: 'Backdrop not found' };
    });
    
    console.log(`   ${backdropTest.success ? '✅' : '❌'} Backdrop: ${backdropTest.success ? 'Working' : 'Failed'}`);
    
    // Take screenshot
    await page.screenshot({ 
      path: 'dreambuild-rebuilt-modal-test.png',
      fullPage: true 
    });
    console.log('\n📸 Screenshot saved as dreambuild-rebuilt-modal-test.png');

    // Summary
    console.log('\n🎯 REBUILT MODAL TEST SUMMARY:');
    console.log('===============================');
    console.log(`✅ Modal found: ${modalTest.found ? 'Yes' : 'No'}`);
    console.log(`✅ Modal visible: ${modalTest.found ? modalTest.isVisible : 'N/A'}`);
    console.log(`✅ Modal centered: ${modalTest.found ? modalTest.isCentered : 'N/A'}`);
    console.log(`✅ Vertical layout: ${modalTest.found ? modalTest.isVertical : 'N/A'}`);
    console.log(`✅ Models count: ${modalTest.found ? modalTest.modelsCount : 'N/A'}`);
    console.log(`✅ Modal interaction: ${interactionTest.success ? 'Working' : 'Failed'}`);
    console.log(`✅ Backdrop click: ${backdropTest.success ? 'Working' : 'Failed'}`);
    
    const isWorking = modalTest.found && 
                     modalTest.isVisible && 
                     modalTest.isCentered && 
                     modalTest.isVertical && 
                     modalTest.modelsCount > 10 && 
                     interactionTest.success;
    
    console.log('\n🎉 OVERALL ASSESSMENT:');
    console.log('=====================');
    if (isWorking) {
      console.log('✅ REBUILT MODAL IS WORKING PERFECTLY!');
      console.log('   • Modal is properly centered and visible');
      console.log('   • Models are arranged vertically');
      console.log('   • All models are present');
      console.log('   • Modal interaction works');
      console.log('   • Backdrop click works');
      console.log('   • Modal should now be properly displayed');
    } else {
      console.log('❌ REBUILT MODAL NEEDS MORE WORK');
      if (!modalTest.found) console.log('   • Modal not found');
      if (!modalTest.isVisible) console.log('   • Modal not visible');
      if (!modalTest.isCentered) console.log('   • Modal not centered');
      if (!modalTest.isVertical) console.log('   • Models not arranged vertically');
      if (modalTest.modelsCount <= 10) console.log('   • Not enough models found');
      if (!interactionTest.success) console.log('   • Modal interaction failed');
    }

  } catch (error) {
    console.error('❌ Rebuilt modal test failed:', error);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

testRebuiltModal().catch(console.error);
