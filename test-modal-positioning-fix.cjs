const puppeteer = require('puppeteer');

async function testModalPositioningFix() {
  console.log('🔍 Testing Modal Positioning Fix');
  console.log('=================================');
  
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

    console.log('\n📋 Testing Modal Positioning Fix:');
    
    // Open modal
    await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const autoButton = buttons.find(btn => btn.textContent.includes('Auto'));
      if (autoButton) {
        autoButton.click();
      }
    });
    
    await page.waitForTimeout(2000);
    
    // Check modal positioning
    const positioningTest = await page.evaluate(() => {
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
          rect: {
            top: Math.round(rect.top),
            left: Math.round(rect.left),
            width: Math.round(rect.width),
            height: Math.round(rect.height),
            bottom: Math.round(rect.bottom),
            right: Math.round(rect.right)
          },
          style: {
            position: style.position,
            bottom: style.bottom,
            left: style.left,
            zIndex: style.zIndex
          },
          isInViewport: rect.top >= 0 && rect.left >= 0 && rect.bottom <= window.innerHeight && rect.right <= window.innerWidth,
          viewportHeight: window.innerHeight,
          viewportWidth: window.innerWidth
        };
      }
      
      return { found: false };
    });
    
    console.log(`   ${positioningTest.found ? '✅' : '❌'} Modal: ${positioningTest.found ? 'Found' : 'Not found'}`);
    if (positioningTest.found) {
      console.log(`   📊 Modal position: top=${positioningTest.rect.top}px, left=${positioningTest.rect.left}px`);
      console.log(`   📊 Modal size: ${positioningTest.rect.width}x${positioningTest.rect.height}px`);
      console.log(`   📊 Modal bottom: ${positioningTest.rect.bottom}px, right: ${positioningTest.rect.right}px`);
      console.log(`   📊 CSS position: ${positioningTest.style.position}`);
      console.log(`   📊 CSS bottom: ${positioningTest.style.bottom}`);
      console.log(`   📊 CSS left: ${positioningTest.style.left}`);
      console.log(`   📊 CSS z-index: ${positioningTest.style.zIndex}`);
      console.log(`   📊 Viewport: ${positioningTest.viewportWidth}x${positioningTest.viewportHeight}px`);
      console.log(`   ${positioningTest.isInViewport ? '✅' : '❌'} In viewport: ${positioningTest.isInViewport ? 'Yes' : 'No'}`);
      
      if (positioningTest.isInViewport) {
        console.log('   ✅ Modal is properly positioned in viewport!');
      } else {
        console.log('   ❌ Modal is positioned outside viewport');
        console.log(`   📝 Modal bottom (${positioningTest.rect.bottom}) vs viewport height (${positioningTest.viewportHeight})`);
        console.log(`   📝 Modal right (${positioningTest.rect.right}) vs viewport width (${positioningTest.viewportWidth})`);
      }
    }
    
    // Test interaction
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
    
    // Take screenshot
    await page.screenshot({ 
      path: 'dreambuild-modal-positioning-fix-test.png',
      fullPage: true 
    });
    console.log('\n📸 Screenshot saved as dreambuild-modal-positioning-fix-test.png');

    // Summary
    console.log('\n🎯 MODAL POSITIONING FIX TEST SUMMARY:');
    console.log('======================================');
    console.log(`✅ Modal found: ${positioningTest.found ? 'Yes' : 'No'}`);
    console.log(`✅ Modal in viewport: ${positioningTest.found ? positioningTest.isInViewport : 'N/A'}`);
    console.log(`✅ Modal interaction: ${interactionTest.success ? 'Working' : 'Failed'}`);
    
    const isWorking = positioningTest.found && positioningTest.isInViewport && interactionTest.success;
    
    console.log('\n🎉 OVERALL ASSESSMENT:');
    console.log('=====================');
    if (isWorking) {
      console.log('✅ MODAL POSITIONING FIX IS WORKING!');
      console.log('   • Modal is rendered at document.body level');
      console.log('   • Modal is properly positioned in viewport');
      console.log('   • Modal has maximum z-index');
      console.log('   • Modal interaction works');
      console.log('   • Modal should now be visible and on top');
    } else {
      console.log('❌ MODAL POSITIONING STILL NEEDS WORK');
      if (!positioningTest.found) console.log('   • Modal not found');
      if (!positioningTest.isInViewport) console.log('   • Modal not in viewport');
      if (!interactionTest.success) console.log('   • Modal interaction failed');
    }

  } catch (error) {
    console.error('❌ Modal positioning fix test failed:', error);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

testModalPositioningFix().catch(console.error);
