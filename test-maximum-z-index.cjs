const puppeteer = require('puppeteer');

async function testMaximumZIndex() {
  console.log('🔍 Testing Maximum Z-Index Fix');
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

    console.log('\n📋 Testing Maximum Z-Index Fix:');
    
    // Open modal
    await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const autoButton = buttons.find(btn => btn.textContent.includes('Auto'));
      if (autoButton) {
        autoButton.click();
      }
    });
    
    await page.waitForTimeout(2000);
    
    // Check modal state
    const modalTest = await page.evaluate(() => {
      const allDivs = Array.from(document.querySelectorAll('div'));
      const modalContainer = allDivs.find(div => 
        div.className.includes('fixed') && 
        div.className.includes('bottom-20')
      );
      
      const backdrop = allDivs.find(div => 
        div.className.includes('fixed') && 
        div.className.includes('inset-0') &&
        div.style.zIndex === '2147483646'
      );
      
      if (modalContainer) {
        const rect = modalContainer.getBoundingClientRect();
        const style = window.getComputedStyle(modalContainer);
        
        return {
          modalFound: true,
          modalZIndex: parseInt(style.zIndex) || 0,
          modalInlineZIndex: modalContainer.style.zIndex,
          modalPosition: style.position,
          modalRect: {
            top: Math.round(rect.top),
            left: Math.round(rect.left),
            width: Math.round(rect.width),
            height: Math.round(rect.height)
          },
          backdropFound: backdrop !== undefined,
          backdropZIndex: backdrop ? parseInt(window.getComputedStyle(backdrop).zIndex) || 0 : 0
        };
      }
      
      return { modalFound: false };
    });
    
    console.log(`   ${modalTest.modalFound ? '✅' : '❌'} Modal: ${modalTest.modalFound ? 'Found' : 'Not found'}`);
    if (modalTest.modalFound) {
      console.log(`   📊 Modal z-index: ${modalTest.modalZIndex} (inline: ${modalTest.modalInlineZIndex})`);
      console.log(`   📊 Modal position: ${modalTest.modalPosition}`);
      console.log(`   📊 Modal rect: top=${modalTest.modalRect.top}px, left=${modalTest.modalRect.left}px, size=${modalTest.modalRect.width}x${modalTest.modalRect.height}px`);
      console.log(`   ${modalTest.backdropFound ? '✅' : '❌'} Backdrop: ${modalTest.backdropFound ? 'Found' : 'Not found'}`);
      if (modalTest.backdropFound) {
        console.log(`   📊 Backdrop z-index: ${modalTest.backdropZIndex}`);
      }
      
      if (modalTest.modalZIndex === 2147483647) {
        console.log('   ✅ Modal has maximum z-index (2147483647)!');
      } else {
        console.log('   ❌ Modal does not have maximum z-index');
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
      path: 'dreambuild-maximum-z-index-test.png',
      fullPage: true 
    });
    console.log('\n📸 Screenshot saved as dreambuild-maximum-z-index-test.png');

    // Summary
    console.log('\n🎯 MAXIMUM Z-INDEX TEST SUMMARY:');
    console.log('================================');
    console.log(`✅ Modal found: ${modalTest.modalFound ? 'Yes' : 'No'}`);
    console.log(`✅ Modal z-index: ${modalTest.modalFound ? modalTest.modalZIndex : 'N/A'}`);
    console.log(`✅ Backdrop found: ${modalTest.backdropFound ? 'Yes' : 'No'}`);
    console.log(`✅ Interaction: ${interactionTest.success ? 'Working' : 'Failed'}`);
    
    if (modalTest.modalFound && modalTest.modalZIndex === 2147483647 && modalTest.backdropFound && interactionTest.success) {
      console.log('\n🎉 MAXIMUM Z-INDEX FIX IS WORKING!');
      console.log('   • Modal has maximum possible z-index');
      console.log('   • Backdrop provides proper layering');
      console.log('   • Modal interaction works');
      console.log('   • Modal should now appear in front of everything');
    } else {
      console.log('\n⚠️ MAXIMUM Z-INDEX FIX NEEDS MORE WORK');
    }

  } catch (error) {
    console.error('❌ Maximum z-index test failed:', error);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

testMaximumZIndex().catch(console.error);
