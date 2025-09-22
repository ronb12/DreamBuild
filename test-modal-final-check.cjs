const puppeteer = require('puppeteer');

async function testModalFinalCheck() {
  console.log('🔍 Final Modal Check - Z-Index Fix');
  console.log('==================================');
  
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

    // Wait for the page to fully load
    await page.waitForTimeout(5000);

    console.log('\n📋 Final Modal Check:');
    
    // Test 1: Open modal
    console.log('\n1. Opening Modal:');
    await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const autoButton = buttons.find(btn => btn.textContent.includes('Auto'));
      if (autoButton) {
        autoButton.click();
      }
    });
    
    await page.waitForTimeout(2000);
    
    // Test 2: Find modal container
    console.log('\n2. Finding Modal Container:');
    const modalTest = await page.evaluate(() => {
      const allDivs = Array.from(document.querySelectorAll('div'));
      
      // Look for modal with fixed positioning and bottom-20
      const modalContainer = allDivs.find(div => 
        div.className.includes('fixed') && 
        div.className.includes('bottom-20')
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
            height: Math.round(rect.height)
          },
          style: {
            position: style.position,
            zIndex: style.zIndex,
            display: style.display,
            visibility: style.visibility,
            opacity: style.opacity
          },
          inlineStyle: modalContainer.style.cssText,
          className: modalContainer.className
        };
      }
      
      return { found: false };
    });
    
    console.log(`   ${modalTest.found ? '✅' : '❌'} Modal container: ${modalTest.found ? 'Found' : 'Not found'}`);
    if (modalTest.found) {
      console.log(`   📊 Position: ${modalTest.style.position}`);
      console.log(`   📊 Z-index: ${modalTest.style.zIndex}`);
      console.log(`   📊 Display: ${modalTest.style.display}`);
      console.log(`   📊 Visibility: ${modalTest.style.visibility}`);
      console.log(`   📊 Opacity: ${modalTest.style.opacity}`);
      console.log(`   📊 Modal position: top=${modalTest.rect.top}px, left=${modalTest.rect.left}px`);
      console.log(`   📊 Modal size: ${modalTest.rect.width}x${modalTest.rect.height}px`);
      console.log(`   📊 Inline style: ${modalTest.inlineStyle}`);
    }
    
    // Test 3: Check for covering elements
    console.log('\n3. Checking for Covering Elements:');
    const coveringTest = await page.evaluate(() => {
      const allDivs = Array.from(document.querySelectorAll('div'));
      const modalContainer = allDivs.find(div => 
        div.className.includes('fixed') && 
        div.className.includes('bottom-20')
      );
      
      if (modalContainer) {
        const modalRect = modalContainer.getBoundingClientRect();
        const modalStyle = window.getComputedStyle(modalContainer);
        const modalZIndex = parseInt(modalStyle.zIndex) || 0;
        
        // Find elements that might be covering the modal
        const allElements = Array.from(document.querySelectorAll('*'));
        const coveringElements = allElements.filter(el => {
          if (el === modalContainer) return false;
          
          const rect = el.getBoundingClientRect();
          const style = window.getComputedStyle(el);
          
          if (rect.width === 0 || rect.height === 0) return false;
          if (style.display === 'none' || style.visibility === 'hidden') return false;
          
          // Check if element overlaps with modal
          const overlaps = !(rect.right < modalRect.left || 
                           rect.left > modalRect.right || 
                           rect.bottom < modalRect.top || 
                           rect.top > modalRect.bottom);
          
          if (overlaps) {
            const elZIndex = parseInt(style.zIndex) || 0;
            return elZIndex >= modalZIndex; // Elements with same or higher z-index
          }
          
          return false;
        });
        
        return {
          modalFound: true,
          modalZIndex: modalZIndex,
          coveringElements: coveringElements.map(el => ({
            tagName: el.tagName,
            className: el.className,
            zIndex: parseInt(window.getComputedStyle(el).zIndex) || 0,
            text: el.textContent ? el.textContent.trim().substring(0, 30) : ''
          }))
        };
      }
      
      return { modalFound: false };
    });
    
    console.log(`   ${coveringTest.modalFound ? '✅' : '❌'} Covering test: ${coveringTest.modalFound ? 'Completed' : 'Failed'}`);
    if (coveringTest.modalFound) {
      console.log(`   📊 Modal z-index: ${coveringTest.modalZIndex}`);
      console.log(`   📊 Covering elements: ${coveringTest.coveringElements.length}`);
      
      if (coveringTest.coveringElements.length > 0) {
        console.log('   ⚠️ Elements covering modal:');
        coveringTest.coveringElements.slice(0, 10).forEach((el, index) => {
          console.log(`      ${index + 1}. ${el.tagName} - z-index:${el.zIndex}, text:"${el.text}"`);
        });
        if (coveringTest.coveringElements.length > 10) {
          console.log(`      ... and ${coveringTest.coveringElements.length - 10} more elements`);
        }
      } else {
        console.log('   ✅ No elements are covering the modal!');
      }
    }
    
    // Test 4: Test modal interaction
    console.log('\n4. Testing Modal Interaction:');
    const interactionTest = await page.evaluate(() => {
      const allButtons = Array.from(document.querySelectorAll('button'));
      const modelButton = allButtons.find(btn => 
        btn.textContent.includes('CodeLlama 7B') && 
        btn.closest('div[style*="z-index: 999999"]')
      );
      
      if (modelButton) {
        const rect = modelButton.getBoundingClientRect();
        const isClickable = rect.width > 0 && rect.height > 0;
        
        if (isClickable) {
          modelButton.click();
          return { success: true, message: 'Successfully clicked model button' };
        } else {
          return { success: false, message: 'Button not clickable (zero size)' };
        }
      }
      
      return { success: false, message: 'Model button not found' };
    });
    
    console.log(`   ${interactionTest.success ? '✅' : '❌'} Modal interaction: ${interactionTest.success ? 'Success' : 'Failed'}`);
    if (!interactionTest.success) {
      console.log(`   📝 Reason: ${interactionTest.message}`);
    }
    
    // Test 5: Check if modal is visually accessible
    console.log('\n5. Checking Visual Accessibility:');
    const visualTest = await page.evaluate(() => {
      const allDivs = Array.from(document.querySelectorAll('div'));
      const modalContainer = allDivs.find(div => 
        div.className.includes('fixed') && 
        div.className.includes('bottom-20')
      );
      
      if (modalContainer) {
        const rect = modalContainer.getBoundingClientRect();
        const style = window.getComputedStyle(modalContainer);
        
        const isVisible = style.display !== 'none' && 
                         style.visibility !== 'hidden' && 
                         style.opacity !== '0' &&
                         rect.width > 0 && 
                         rect.height > 0;
        
        const isInViewport = rect.top >= 0 && 
                           rect.left >= 0 && 
                           rect.bottom <= window.innerHeight && 
                           rect.right <= window.innerWidth;
        
        return {
          modalFound: true,
          isVisible: isVisible,
          isInViewport: isInViewport,
          rect: {
            top: Math.round(rect.top),
            left: Math.round(rect.left),
            width: Math.round(rect.width),
            height: Math.round(rect.height)
          }
        };
      }
      
      return { modalFound: false };
    });
    
    console.log(`   ${visualTest.modalFound ? '✅' : '❌'} Visual test: ${visualTest.modalFound ? 'Completed' : 'Failed'}`);
    if (visualTest.modalFound) {
      console.log(`   ${visualTest.isVisible ? '✅' : '❌'} Modal visible: ${visualTest.isVisible ? 'Yes' : 'No'}`);
      console.log(`   ${visualTest.isInViewport ? '✅' : '❌'} Modal in viewport: ${visualTest.isInViewport ? 'Yes' : 'No'}`);
      console.log(`   📊 Modal position: top=${visualTest.rect.top}px, left=${visualTest.rect.left}px`);
      console.log(`   📊 Modal size: ${visualTest.rect.width}x${visualTest.rect.height}px`);
    }
    
    // Take screenshot
    await page.screenshot({ 
      path: 'dreambuild-modal-final-check-test.png',
      fullPage: true 
    });
    console.log('\n📸 Screenshot saved as dreambuild-modal-final-check-test.png');

    // Final Summary
    console.log('\n🎯 FINAL MODAL CHECK SUMMARY:');
    console.log('=============================');
    console.log(`✅ Modal container: ${modalTest.found ? 'Found' : 'Not found'}`);
    console.log(`✅ Modal z-index: ${modalTest.found ? modalTest.style.zIndex : 'N/A'}`);
    console.log(`✅ Covering elements: ${coveringTest.modalFound ? coveringTest.coveringElements.length : 'N/A'}`);
    console.log(`✅ Modal interaction: ${interactionTest.success ? 'Working' : 'Failed'}`);
    console.log(`✅ Modal visible: ${visualTest.modalFound ? (visualTest.isVisible && visualTest.isInViewport ? 'Yes' : 'No') : 'N/A'}`);
    
    // Overall assessment
    const isModalWorking = modalTest.found && 
                          modalTest.style.zIndex === '999999' && 
                          coveringTest.coveringElements.length === 0 && 
                          interactionTest.success && 
                          visualTest.isVisible && 
                          visualTest.isInViewport;
    
    console.log('\n🎉 OVERALL ASSESSMENT:');
    console.log('=====================');
    if (isModalWorking) {
      console.log('✅ AI MODEL SELECTOR IS WORKING PERFECTLY!');
      console.log('   • Modal opens when Auto button is clicked');
      console.log('   • Modal has correct z-index (999999)');
      console.log('   • Modal appears in front of all other elements');
      console.log('   • Modal elements are clickable and interactive');
      console.log('   • Modal is visible and properly positioned');
    } else {
      console.log('❌ AI MODEL SELECTOR STILL HAS ISSUES:');
      if (!modalTest.found) console.log('   • Modal container not found');
      if (modalTest.style.zIndex !== '999999') console.log('   • Modal z-index is incorrect');
      if (coveringTest.coveringElements.length > 0) console.log('   • Modal is being covered by other elements');
      if (!interactionTest.success) console.log('   • Modal interaction failed');
      if (!visualTest.isVisible || !visualTest.isInViewport) console.log('   • Modal is not visually accessible');
    }

  } catch (error) {
    console.error('❌ Final modal check failed:', error);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

// Run the final modal check
testModalFinalCheck().catch(console.error);
