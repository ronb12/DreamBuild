const puppeteer = require('puppeteer');

async function testReactPortalFix() {
  console.log('🔍 Testing React Portal Fix');
  console.log('============================');
  
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

    console.log('\n📋 Testing React Portal Fix:');
    
    // Open modal
    await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const autoButton = buttons.find(btn => btn.textContent.includes('Auto'));
      if (autoButton) {
        autoButton.click();
      }
    });
    
    await page.waitForTimeout(2000);
    
    // Check if modal is rendered at document.body level
    const portalTest = await page.evaluate(() => {
      // Check if modal is directly under document.body
      const bodyChildren = Array.from(document.body.children);
      const modalInBody = bodyChildren.find(child => 
        child.textContent && child.textContent.includes('Select AI Model')
      );
      
      // Also check for modal with maximum z-index
      const allDivs = Array.from(document.querySelectorAll('div'));
      const modalContainer = allDivs.find(div => 
        div.style.zIndex === '2147483647' && 
        div.textContent && div.textContent.includes('Select AI Model')
      );
      
      // Check for backdrop
      const backdrop = allDivs.find(div => 
        div.style.zIndex === '2147483646' && 
        div.className.includes('fixed') &&
        div.className.includes('inset-0')
      );
      
      return {
        modalInBody: modalInBody !== undefined,
        modalContainerFound: modalContainer !== undefined,
        backdropFound: backdrop !== undefined,
        bodyChildrenCount: bodyChildren.length,
        modalZIndex: modalContainer ? modalContainer.style.zIndex : 'not found',
        backdropZIndex: backdrop ? backdrop.style.zIndex : 'not found'
      };
    });
    
    console.log(`   ${portalTest.modalInBody ? '✅' : '❌'} Modal in document.body: ${portalTest.modalInBody ? 'Yes' : 'No'}`);
    console.log(`   ${portalTest.modalContainerFound ? '✅' : '❌'} Modal container: ${portalTest.modalContainerFound ? 'Found' : 'Not found'}`);
    console.log(`   ${portalTest.backdropFound ? '✅' : '❌'} Backdrop: ${portalTest.backdropFound ? 'Found' : 'Not found'}`);
    console.log(`   📊 Body children count: ${portalTest.bodyChildrenCount}`);
    console.log(`   📊 Modal z-index: ${portalTest.modalZIndex}`);
    console.log(`   📊 Backdrop z-index: ${portalTest.backdropZIndex}`);
    
    // Test modal interaction
    const interactionTest = await page.evaluate(() => {
      const allButtons = Array.from(document.querySelectorAll('button'));
      const modelButton = allButtons.find(btn => 
        btn.textContent.includes('CodeLlama 7B') && 
        btn.closest('div[style*="z-index: 2147483647"]')
      );
      
      if (modelButton) {
        modelButton.click();
        return { success: true, message: 'Successfully clicked model button' };
      }
      
      return { success: false, message: 'Model button not found' };
    });
    
    console.log(`   ${interactionTest.success ? '✅' : '❌'} Interaction: ${interactionTest.success ? 'Success' : 'Failed'}`);
    
    // Check modal visibility and positioning
    const visibilityTest = await page.evaluate(() => {
      const allDivs = Array.from(document.querySelectorAll('div'));
      const modalContainer = allDivs.find(div => 
        div.style.zIndex === '2147483647' && 
        div.textContent && div.textContent.includes('Select AI Model')
      );
      
      if (modalContainer) {
        const rect = modalContainer.getBoundingClientRect();
        const style = window.getComputedStyle(modalContainer);
        
        return {
          found: true,
          isVisible: style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0',
          isInViewport: rect.top >= 0 && rect.left >= 0 && rect.bottom <= window.innerHeight && rect.right <= window.innerWidth,
          position: style.position,
          rect: {
            top: Math.round(rect.top),
            left: Math.round(rect.left),
            width: Math.round(rect.width),
            height: Math.round(rect.height)
          }
        };
      }
      
      return { found: false };
    });
    
    console.log(`   ${visibilityTest.found ? '✅' : '❌'} Visibility test: ${visibilityTest.found ? 'Completed' : 'Failed'}`);
    if (visibilityTest.found) {
      console.log(`   ${visibilityTest.isVisible ? '✅' : '❌'} Modal visible: ${visibilityTest.isVisible ? 'Yes' : 'No'}`);
      console.log(`   ${visibilityTest.isInViewport ? '✅' : '❌'} Modal in viewport: ${visibilityTest.isInViewport ? 'Yes' : 'No'}`);
      console.log(`   📊 Modal position: ${visibilityTest.position}`);
      console.log(`   📊 Modal rect: top=${visibilityTest.rect.top}px, left=${visibilityTest.rect.left}px, size=${visibilityTest.rect.width}x${visibilityTest.rect.height}px`);
    }
    
    // Take screenshot
    await page.screenshot({ 
      path: 'dreambuild-react-portal-fix-test.png',
      fullPage: true 
    });
    console.log('\n📸 Screenshot saved as dreambuild-react-portal-fix-test.png');

    // Summary
    console.log('\n🎯 REACT PORTAL FIX TEST SUMMARY:');
    console.log('==================================');
    console.log(`✅ Modal in document.body: ${portalTest.modalInBody ? 'Yes' : 'No'}`);
    console.log(`✅ Modal container: ${portalTest.modalContainerFound ? 'Found' : 'Not found'}`);
    console.log(`✅ Backdrop: ${portalTest.backdropFound ? 'Found' : 'Not found'}`);
    console.log(`✅ Modal z-index: ${portalTest.modalZIndex}`);
    console.log(`✅ Modal interaction: ${interactionTest.success ? 'Working' : 'Failed'}`);
    console.log(`✅ Modal visible: ${visibilityTest.found ? (visibilityTest.isVisible && visibilityTest.isInViewport ? 'Yes' : 'No') : 'N/A'}`);
    
    const isWorking = portalTest.modalInBody && 
                     portalTest.modalContainerFound && 
                     portalTest.backdropFound && 
                     portalTest.modalZIndex === '2147483647' && 
                     interactionTest.success && 
                     visibilityTest.isVisible && 
                     visibilityTest.isInViewport;
    
    console.log('\n🎉 OVERALL ASSESSMENT:');
    console.log('=====================');
    if (isWorking) {
      console.log('✅ REACT PORTAL FIX IS WORKING!');
      console.log('   • Modal is rendered at document.body level');
      console.log('   • Modal has maximum z-index');
      console.log('   • Backdrop provides proper layering');
      console.log('   • Modal is visible and interactive');
      console.log('   • Modal should now definitely appear in front');
    } else {
      console.log('❌ REACT PORTAL FIX NEEDS MORE WORK');
      if (!portalTest.modalInBody) console.log('   • Modal not rendered at document.body level');
      if (!portalTest.modalContainerFound) console.log('   • Modal container not found');
      if (!portalTest.backdropFound) console.log('   • Backdrop not found');
      if (portalTest.modalZIndex !== '2147483647') console.log('   • Modal z-index incorrect');
      if (!interactionTest.success) console.log('   • Modal interaction failed');
      if (!visibilityTest.isVisible || !visibilityTest.isInViewport) console.log('   • Modal not visible');
    }

  } catch (error) {
    console.error('❌ React Portal fix test failed:', error);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

testReactPortalFix().catch(console.error);
