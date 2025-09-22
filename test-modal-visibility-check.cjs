const puppeteer = require('puppeteer');

async function testModalVisibilityCheck() {
  console.log('🔍 Testing AI Model Selector Modal Visibility');
  console.log('============================================');
  
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

    console.log('\n📋 Testing Modal Visibility and Layering:');
    console.log('==========================================');
    
    // Test 1: Check initial state - no modal should be visible
    console.log('\n1. Checking Initial State (No Modal):');
    const initialState = await page.evaluate(() => {
      const modalElements = Array.from(document.querySelectorAll('*')).filter(el => 
        el.textContent && el.textContent.includes('Select AI Model')
      );
      
      const visibleModals = modalElements.filter(el => {
        const style = window.getComputedStyle(el);
        return style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0';
      });
      
      return {
        totalModalElements: modalElements.length,
        visibleModalElements: visibleModals.length,
        modalVisible: visibleModals.length > 0
      };
    });
    
    console.log(`   📊 Total modal elements: ${initialState.totalModalElements}`);
    console.log(`   📊 Visible modal elements: ${initialState.visibleModalElements}`);
    console.log(`   ${initialState.modalVisible ? '❌' : '✅'} Initial state: ${initialState.modalVisible ? 'Modal visible (unexpected)' : 'No modal visible (expected)'}`);
    
    // Test 2: Click Auto button and check modal visibility
    console.log('\n2. Clicking Auto Button and Checking Modal:');
    const autoButtonResult = await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const autoButton = buttons.find(btn => btn.textContent.includes('Auto'));
      
      if (autoButton) {
        console.log('Found Auto button, clicking...');
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
    
    // Test 3: Check modal visibility after clicking
    console.log('\n3. Checking Modal Visibility After Click:');
    const modalVisibility = await page.evaluate(() => {
      // Look for modal elements
      const modalElements = Array.from(document.querySelectorAll('*')).filter(el => 
        el.textContent && el.textContent.includes('Select AI Model')
      );
      
      const visibleModals = modalElements.filter(el => {
        const style = window.getComputedStyle(el);
        return style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0';
      });
      
      // Also check for the specific modal container
      const allDivs = Array.from(document.querySelectorAll('div'));
      const modalContainer = allDivs.find(div => 
        div.className.includes('fixed') && 
        div.className.includes('bottom-20') &&
        div.className.includes('z-[999999]')
      );
      
      if (modalContainer) {
        const rect = modalContainer.getBoundingClientRect();
        const style = window.getComputedStyle(modalContainer);
        
        return {
          totalModalElements: modalElements.length,
          visibleModalElements: visibleModals.length,
          modalVisible: visibleModals.length > 0,
          modalContainerFound: true,
          modalContainer: {
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
              zIndex: style.zIndex,
              display: style.display,
              visibility: style.visibility,
              opacity: style.opacity
            },
            isInViewport: rect.top >= 0 && rect.left >= 0 && rect.bottom <= window.innerHeight && rect.right <= window.innerWidth
          }
        };
      }
      
      return {
        totalModalElements: modalElements.length,
        visibleModalElements: visibleModals.length,
        modalVisible: visibleModals.length > 0,
        modalContainerFound: false
      };
    });
    
    console.log(`   📊 Total modal elements: ${modalVisibility.totalModalElements}`);
    console.log(`   📊 Visible modal elements: ${modalVisibility.visibleModalElements}`);
    console.log(`   ${modalVisibility.modalVisible ? '✅' : '❌'} Modal visibility: ${modalVisibility.modalVisible ? 'Visible' : 'Hidden'}`);
    console.log(`   ${modalVisibility.modalContainerFound ? '✅' : '❌'} Modal container: ${modalVisibility.modalContainerFound ? 'Found' : 'Not found'}`);
    
    if (modalVisibility.modalContainerFound) {
      const container = modalVisibility.modalContainer;
      console.log(`   📊 Modal position: top=${container.rect.top}px, left=${container.rect.left}px`);
      console.log(`   📊 Modal size: ${container.rect.width}x${container.rect.height}px`);
      console.log(`   📊 Modal z-index: ${container.style.zIndex}`);
      console.log(`   📊 Modal position type: ${container.style.position}`);
      console.log(`   ${container.isInViewport ? '✅' : '❌'} Modal in viewport: ${container.isInViewport ? 'Yes' : 'No'}`);
    }
    
    // Test 4: Check if modal is behind other elements
    console.log('\n4. Checking if Modal is Behind Other Elements:');
    const layeringTest = await page.evaluate(() => {
      const allDivs = Array.from(document.querySelectorAll('div'));
      const modalContainer = allDivs.find(div => 
        div.className.includes('fixed') && 
        div.className.includes('bottom-20') &&
        div.className.includes('z-[999999]')
      );
      
      if (modalContainer) {
        const modalRect = modalContainer.getBoundingClientRect();
        const modalStyle = window.getComputedStyle(modalContainer);
        const modalZIndex = parseInt(modalStyle.zIndex) || 0;
        
        // Find all elements that might be covering the modal
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
            rect: {
              top: Math.round(el.getBoundingClientRect().top),
              left: Math.round(el.getBoundingClientRect().left),
              width: Math.round(el.getBoundingClientRect().width),
              height: Math.round(el.getBoundingClientRect().height)
            },
            zIndex: parseInt(window.getComputedStyle(el).zIndex) || 0,
            text: el.textContent ? el.textContent.trim().substring(0, 50) : ''
          }))
        };
      }
      
      return { modalFound: false };
    });
    
    console.log(`   ${layeringTest.modalFound ? '✅' : '❌'} Modal layering test: ${layeringTest.modalFound ? 'Completed' : 'Failed'}`);
    if (layeringTest.modalFound) {
      console.log(`   📊 Modal z-index: ${layeringTest.modalZIndex}`);
      console.log(`   📊 Elements covering modal: ${layeringTest.coveringElements.length}`);
      
      if (layeringTest.coveringElements.length > 0) {
        console.log('   ⚠️ Modal is being covered by other elements:');
        layeringTest.coveringElements.forEach((el, index) => {
          console.log(`      ${index + 1}. ${el.tagName} - z-index:${el.zIndex}, text:"${el.text}"`);
        });
      } else {
        console.log('   ✅ No elements are covering the modal!');
      }
    }
    
    // Test 5: Try to interact with modal elements
    console.log('\n5. Testing Modal Interaction:');
    const interactionTest = await page.evaluate(() => {
      // Try to find and click a model button
      const allButtons = Array.from(document.querySelectorAll('button'));
      const modelButton = allButtons.find(btn => 
        btn.textContent.includes('CodeLlama 7B') && 
        btn.closest('[class*="fixed"]')
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
    
    // Test 6: Check if modal is actually visible to user
    console.log('\n6. Checking Modal Visual Visibility:');
    const visualTest = await page.evaluate(() => {
      const allDivs = Array.from(document.querySelectorAll('div'));
      const modalContainer = allDivs.find(div => 
        div.className.includes('fixed') && 
        div.className.includes('bottom-20') &&
        div.className.includes('z-[999999]')
      );
      
      if (modalContainer) {
        const rect = modalContainer.getBoundingClientRect();
        const style = window.getComputedStyle(modalContainer);
        
        // Check if modal is actually visible
        const isVisible = style.display !== 'none' && 
                         style.visibility !== 'hidden' && 
                         style.opacity !== '0' &&
                         rect.width > 0 && 
                         rect.height > 0;
        
        // Check if modal is in viewport
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
          },
          style: {
            display: style.display,
            visibility: style.visibility,
            opacity: style.opacity,
            zIndex: style.zIndex
          }
        };
      }
      
      return { modalFound: false };
    });
    
    console.log(`   ${visualTest.modalFound ? '✅' : '❌'} Modal visual test: ${visualTest.modalFound ? 'Completed' : 'Failed'}`);
    if (visualTest.modalFound) {
      console.log(`   ${visualTest.isVisible ? '✅' : '❌'} Modal visible: ${visualTest.isVisible ? 'Yes' : 'No'}`);
      console.log(`   ${visualTest.isInViewport ? '✅' : '❌'} Modal in viewport: ${visualTest.isInViewport ? 'Yes' : 'No'}`);
      console.log(`   📊 Modal position: top=${visualTest.rect.top}px, left=${visualTest.rect.left}px`);
      console.log(`   📊 Modal size: ${visualTest.rect.width}x${visualTest.rect.height}px`);
      console.log(`   📊 Modal display: ${visualTest.style.display}`);
      console.log(`   📊 Modal visibility: ${visualTest.style.visibility}`);
      console.log(`   📊 Modal opacity: ${visualTest.style.opacity}`);
      console.log(`   📊 Modal z-index: ${visualTest.style.zIndex}`);
    }
    
    // Take screenshot
    await page.screenshot({ 
      path: 'dreambuild-modal-visibility-check-test.png',
      fullPage: true 
    });
    console.log('\n📸 Screenshot saved as dreambuild-modal-visibility-check-test.png');

    // Final Summary
    console.log('\n🎯 MODAL VISIBILITY TEST SUMMARY:');
    console.log('=================================');
    console.log(`✅ Initial state: ${initialState.modalVisible ? 'Modal visible (unexpected)' : 'No modal visible (expected)'}`);
    console.log(`✅ Auto button: ${autoButtonResult.success ? 'Working' : 'Failed'}`);
    console.log(`✅ Modal visibility: ${modalVisibility.modalVisible ? 'Visible' : 'Hidden'}`);
    console.log(`✅ Modal container: ${modalVisibility.modalContainerFound ? 'Found' : 'Not found'}`);
    console.log(`✅ Modal layering: ${layeringTest.modalFound ? (layeringTest.coveringElements.length === 0 ? 'Good' : 'Covered') : 'Unknown'}`);
    console.log(`✅ Modal interaction: ${interactionTest.success ? 'Working' : 'Failed'}`);
    console.log(`✅ Modal visual: ${visualTest.modalFound ? (visualTest.isVisible && visualTest.isInViewport ? 'Visible' : 'Hidden') : 'Not found'}`);
    
    // Overall assessment
    const isModalWorking = modalVisibility.modalVisible && 
                          modalVisibility.modalContainerFound && 
                          layeringTest.modalFound && 
                          layeringTest.coveringElements.length === 0 && 
                          interactionTest.success && 
                          visualTest.isVisible && 
                          visualTest.isInViewport;
    
    console.log('\n🎉 OVERALL ASSESSMENT:');
    console.log('=====================');
    if (isModalWorking) {
      console.log('✅ AI MODEL SELECTOR IS WORKING CORRECTLY!');
      console.log('   • Modal opens when Auto button is clicked');
      console.log('   • Modal is visible and properly positioned');
      console.log('   • Modal appears in front of all other elements');
      console.log('   • Modal elements are clickable and interactive');
      console.log('   • Modal is in viewport and properly sized');
    } else {
      console.log('❌ AI MODEL SELECTOR HAS ISSUES:');
      if (!modalVisibility.modalVisible) console.log('   • Modal is not visible');
      if (!modalVisibility.modalContainerFound) console.log('   • Modal container not found');
      if (layeringTest.coveringElements.length > 0) console.log('   • Modal is being covered by other elements');
      if (!interactionTest.success) console.log('   • Modal interaction failed');
      if (!visualTest.isVisible || !visualTest.isInViewport) console.log('   • Modal is not visually accessible');
    }

  } catch (error) {
    console.error('❌ Modal visibility test failed:', error);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

// Run the modal visibility test
testModalVisibilityCheck().catch(console.error);
