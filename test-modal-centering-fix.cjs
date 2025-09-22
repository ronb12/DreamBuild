const puppeteer = require('puppeteer');

async function testModalCenteringFix() {
  console.log('🔍 Testing Modal Centering Fix');
  console.log('==============================');
  
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

    console.log('\n📋 Testing Modal Centering Fix:');
    
    // Open modal
    await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const autoButton = buttons.find(btn => btn.textContent.includes('Auto'));
      if (autoButton) {
        autoButton.click();
      }
    });
    
    await page.waitForTimeout(2000);
    
    // Check modal centering and layout
    const centeringTest = await page.evaluate(() => {
      // Find the modal container
      const modalContainer = document.querySelector('.fixed.inset-0.z-\\[999999\\]');
      
      if (modalContainer) {
        const rect = modalContainer.getBoundingClientRect();
        const style = window.getComputedStyle(modalContainer);
        
        // Find the inner modal content
        const modalContent = modalContainer.querySelector('.relative.bg-background');
        
        if (modalContent) {
          const contentRect = modalContent.getBoundingClientRect();
          const contentStyle = window.getComputedStyle(modalContent);
          
          // Calculate if modal is centered
          const viewportCenterX = window.innerWidth / 2;
          const viewportCenterY = window.innerHeight / 2;
          const modalCenterX = contentRect.left + contentRect.width / 2;
          const modalCenterY = contentRect.top + contentRect.height / 2;
          
          const isHorizontallyCentered = Math.abs(modalCenterX - viewportCenterX) < 50;
          const isVerticallyCentered = Math.abs(modalCenterY - viewportCenterY) < 50;
          
          // Check models layout
          const modelButtons = modalContainer.querySelectorAll('button');
          const modelPositions = Array.from(modelButtons).map(btn => {
            const btnRect = btn.getBoundingClientRect();
            return {
              top: Math.round(btnRect.top),
              left: Math.round(btnRect.left),
              width: Math.round(btnRect.width),
              height: Math.round(btnRect.height)
            };
          });
          
          // Check if models are stacked vertically
          let isVertical = true;
          for (let i = 1; i < modelPositions.length; i++) {
            if (modelPositions[i].top <= modelPositions[i-1].top) {
              isVertical = false;
              break;
            }
          }
          
          return {
            found: true,
            modalRect: {
              top: Math.round(rect.top),
              left: Math.round(rect.left),
              width: Math.round(rect.width),
              height: Math.round(rect.height)
            },
            contentRect: {
              top: Math.round(contentRect.top),
              left: Math.round(contentRect.left),
              width: Math.round(contentRect.width),
              height: Math.round(contentRect.height)
            },
            centering: {
              isHorizontallyCentered,
              isVerticallyCentered,
              modalCenterX: Math.round(modalCenterX),
              modalCenterY: Math.round(modalCenterY),
              viewportCenterX: Math.round(viewportCenterX),
              viewportCenterY: Math.round(viewportCenterY)
            },
            modelsCount: modelButtons.length,
            isVertical: isVertical,
            isVisible: style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0'
          };
        }
      }
      
      return { found: false };
    });
    
    console.log(`   ${centeringTest.found ? '✅' : '❌'} Modal: ${centeringTest.found ? 'Found' : 'Not found'}`);
    if (centeringTest.found) {
      console.log(`   📊 Modal container: ${centeringTest.modalRect.width}x${centeringTest.modalRect.height}px`);
      console.log(`   📊 Modal content: ${centeringTest.contentRect.width}x${centeringTest.contentRect.height}px`);
      console.log(`   📊 Content position: top=${centeringTest.contentRect.top}px, left=${centeringTest.contentRect.left}px`);
      console.log(`   📊 Models count: ${centeringTest.modelsCount}`);
      console.log(`   ${centeringTest.isVertical ? '✅' : '❌'} Vertical layout: ${centeringTest.isVertical ? 'Yes' : 'No'}`);
      console.log(`   ${centeringTest.isVisible ? '✅' : '❌'} Visible: ${centeringTest.isVisible ? 'Yes' : 'No'}`);
      
      console.log('\n   📊 Centering Analysis:');
      console.log(`      Viewport center: ${centeringTest.centering.viewportCenterX}, ${centeringTest.centering.viewportCenterY}`);
      console.log(`      Modal center: ${centeringTest.centering.modalCenterX}, ${centeringTest.centering.modalCenterY}`);
      console.log(`      ${centeringTest.centering.isHorizontallyCentered ? '✅' : '❌'} Horizontally centered: ${centeringTest.centering.isHorizontallyCentered ? 'Yes' : 'No'}`);
      console.log(`      ${centeringTest.centering.isVerticallyCentered ? '✅' : '❌'} Vertically centered: ${centeringTest.centering.isVerticallyCentered ? 'Yes' : 'No'}`);
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
    
    // Take screenshot
    await page.screenshot({ 
      path: 'dreambuild-modal-centering-fix-test.png',
      fullPage: true 
    });
    console.log('\n📸 Screenshot saved as dreambuild-modal-centering-fix-test.png');

    // Summary
    console.log('\n🎯 MODAL CENTERING FIX TEST SUMMARY:');
    console.log('=====================================');
    console.log(`✅ Modal found: ${centeringTest.found ? 'Yes' : 'No'}`);
    console.log(`✅ Modal visible: ${centeringTest.found ? centeringTest.isVisible : 'N/A'}`);
    console.log(`✅ Vertical layout: ${centeringTest.found ? centeringTest.isVertical : 'N/A'}`);
    console.log(`✅ Models count: ${centeringTest.found ? centeringTest.modelsCount : 'N/A'}`);
    console.log(`✅ Horizontally centered: ${centeringTest.found ? centeringTest.centering.isHorizontallyCentered : 'N/A'}`);
    console.log(`✅ Vertically centered: ${centeringTest.found ? centeringTest.centering.isVerticallyCentered : 'N/A'}`);
    console.log(`✅ Modal interaction: ${interactionTest.success ? 'Working' : 'Failed'}`);
    
    const isWorking = centeringTest.found && 
                     centeringTest.isVisible && 
                     centeringTest.isVertical && 
                     centeringTest.modelsCount > 10 && 
                     centeringTest.centering.isHorizontallyCentered && 
                     centeringTest.centering.isVerticallyCentered && 
                     interactionTest.success;
    
    console.log('\n🎉 OVERALL ASSESSMENT:');
    console.log('=====================');
    if (isWorking) {
      console.log('✅ MODAL CENTERING FIX IS WORKING PERFECTLY!');
      console.log('   • Modal is properly centered both horizontally and vertically');
      console.log('   • Models are arranged vertically');
      console.log('   • All models are present');
      console.log('   • Modal interaction works');
      console.log('   • Modal is visible and properly positioned');
    } else {
      console.log('❌ MODAL CENTERING STILL NEEDS WORK');
      if (!centeringTest.found) console.log('   • Modal not found');
      if (!centeringTest.isVisible) console.log('   • Modal not visible');
      if (!centeringTest.isVertical) console.log('   • Models not arranged vertically');
      if (centeringTest.modelsCount <= 10) console.log('   • Not enough models found');
      if (!centeringTest.centering.isHorizontallyCentered) console.log('   • Modal not horizontally centered');
      if (!centeringTest.centering.isVerticallyCentered) console.log('   • Modal not vertically centered');
      if (!interactionTest.success) console.log('   • Modal interaction failed');
    }

  } catch (error) {
    console.error('❌ Modal centering fix test failed:', error);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

testModalCenteringFix().catch(console.error);
