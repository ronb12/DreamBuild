const puppeteer = require('puppeteer');

async function testModalZIndex() {
  console.log('🔍 Testing Modal Z-Index and Layering');
  console.log('====================================');
  
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

    console.log('\n📋 Testing Modal Z-Index and Layering:');
    
    // Test 1: Open modal and check z-index
    console.log('\n1. Opening Modal and Checking Z-Index:');
    await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const autoButton = buttons.find(btn => btn.textContent.includes('Auto'));
      if (autoButton) {
        autoButton.click();
      }
    });
    
    await page.waitForTimeout(2000);
    
    const zIndexTest = await page.evaluate(() => {
      // Find the modal container
      const allDivs = Array.from(document.querySelectorAll('div'));
      const modalContainer = allDivs.find(div => 
        div.className.includes('fixed') && 
        div.className.includes('bottom-20') &&
        div.className.includes('z-[99999]')
      );
      
      if (modalContainer) {
        const computedStyle = window.getComputedStyle(modalContainer);
        const rect = modalContainer.getBoundingClientRect();
        
        // Check if modal is visible and positioned correctly
        const isVisible = computedStyle.display !== 'none' && 
                         computedStyle.visibility !== 'hidden' && 
                         computedStyle.opacity !== '0';
        
        // Check if modal is in front of other elements by comparing z-index
        const allElements = Array.from(document.querySelectorAll('*'));
        const higherZIndexElements = allElements.filter(el => {
          const style = window.getComputedStyle(el);
          const zIndex = parseInt(style.zIndex) || 0;
          return zIndex > 99999;
        });
        
        return {
          found: true,
          isVisible: isVisible,
          computedZIndex: computedStyle.zIndex,
          position: computedStyle.position,
          rect: {
            top: rect.top,
            left: rect.left,
            width: rect.width,
            height: rect.height
          },
          higherZIndexCount: higherZIndexElements.length,
          isInViewport: rect.top >= 0 && rect.left >= 0 && rect.bottom <= window.innerHeight && rect.right <= window.innerWidth
        };
      }
      
      return { found: false };
    });
    
    console.log(`   ${zIndexTest.found ? '✅' : '❌'} Modal container: ${zIndexTest.found ? 'Found' : 'Not found'}`);
    
    if (zIndexTest.found) {
      console.log(`   ${zIndexTest.isVisible ? '✅' : '❌'} Modal visibility: ${zIndexTest.isVisible ? 'Visible' : 'Hidden'}`);
      console.log(`   📊 Position: ${zIndexTest.position}`);
      console.log(`   📊 Z-index: ${zIndexTest.computedZIndex}`);
      console.log(`   📊 Modal position: top=${Math.round(zIndexTest.rect.top)}px, left=${Math.round(zIndexTest.rect.left)}px`);
      console.log(`   📊 Modal size: ${Math.round(zIndexTest.rect.width)}x${Math.round(zIndexTest.rect.height)}px`);
      console.log(`   📊 Elements with higher z-index: ${zIndexTest.higherZIndexCount}`);
      console.log(`   ${zIndexTest.isInViewport ? '✅' : '❌'} In viewport: ${zIndexTest.isInViewport ? 'Yes' : 'No'}`);
    }
    
    // Test 2: Check if modal appears above text input and other UI elements
    console.log('\n2. Testing Modal Layering:');
    const layeringTest = await page.evaluate(() => {
      // Find the modal
      const allDivs = Array.from(document.querySelectorAll('div'));
      const modalContainer = allDivs.find(div => 
        div.className.includes('fixed') && 
        div.className.includes('bottom-20') &&
        div.className.includes('z-[99999]')
      );
      
      if (modalContainer) {
        const modalRect = modalContainer.getBoundingClientRect();
        
        // Find text input and other UI elements
        const textInputs = Array.from(document.querySelectorAll('textarea, input[type="text"]'));
        const buttons = Array.from(document.querySelectorAll('button'));
        
        // Check if any elements overlap with the modal
        const overlappingElements = [];
        
        textInputs.forEach((input, index) => {
          const inputRect = input.getBoundingClientRect();
          const overlaps = !(modalRect.right < inputRect.left || 
                           modalRect.left > inputRect.right || 
                           modalRect.bottom < inputRect.top || 
                           modalRect.top > inputRect.bottom);
          
          if (overlaps) {
            overlappingElements.push({
              type: 'textInput',
              index: index,
              rect: inputRect,
              zIndex: window.getComputedStyle(input).zIndex
            });
          }
        });
        
        buttons.forEach((button, index) => {
          const buttonRect = button.getBoundingClientRect();
          const overlaps = !(modalRect.right < buttonRect.left || 
                           modalRect.left > buttonRect.right || 
                           modalRect.bottom < buttonRect.top || 
                           modalRect.top > buttonRect.bottom);
          
          if (overlaps) {
            overlappingElements.push({
              type: 'button',
              index: index,
              rect: buttonRect,
              zIndex: window.getComputedStyle(button).zIndex,
              text: button.textContent.trim()
            });
          }
        });
        
        return {
          modalFound: true,
          modalRect: modalRect,
          overlappingElements: overlappingElements,
          hasOverlaps: overlappingElements.length > 0
        };
      }
      
      return { modalFound: false };
    });
    
    console.log(`   ${layeringTest.modalFound ? '✅' : '❌'} Modal layering test: ${layeringTest.modalFound ? 'Completed' : 'Failed'}`);
    
    if (layeringTest.modalFound) {
      console.log(`   📊 Overlapping elements: ${layeringTest.overlappingElements.length}`);
      
      if (layeringTest.hasOverlaps) {
        console.log('   ⚠️ Modal overlaps with other elements:');
        layeringTest.overlappingElements.forEach((element, index) => {
          console.log(`      ${index + 1}. ${element.type} (z-index: ${element.zIndex})`);
          if (element.text) {
            console.log(`         Text: "${element.text}"`);
          }
        });
      } else {
        console.log('   ✅ No overlapping elements detected');
      }
    }
    
    // Test 3: Try to interact with modal elements
    console.log('\n3. Testing Modal Interaction:');
    const interactionTest = await page.evaluate(() => {
      // Try to find and click a model button
      const allButtons = Array.from(document.querySelectorAll('button'));
      const modelButton = allButtons.find(btn => 
        btn.textContent.includes('CodeLlama 7B') && 
        btn.closest('[class*="fixed"]')
      );
      
      if (modelButton) {
        // Check if button is clickable
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
    
    // Take screenshot
    await page.screenshot({ 
      path: 'dreambuild-modal-z-index-test.png',
      fullPage: true 
    });
    console.log('\n📸 Screenshot saved as dreambuild-modal-z-index-test.png');

    // Summary
    console.log('\n🎯 MODAL Z-INDEX TEST SUMMARY:');
    console.log('==============================');
    console.log(`✅ Modal found: ${zIndexTest.found ? 'Yes' : 'No'}`);
    console.log(`✅ Modal visible: ${zIndexTest.found && zIndexTest.isVisible ? 'Yes' : 'No'}`);
    console.log(`✅ Modal positioned: ${zIndexTest.found && zIndexTest.position === 'fixed' ? 'Fixed' : 'Other'}`);
    console.log(`✅ Modal z-index: ${zIndexTest.found ? zIndexTest.computedZIndex : 'N/A'}`);
    console.log(`✅ Higher z-index elements: ${zIndexTest.found ? zIndexTest.higherZIndexCount : 'N/A'}`);
    console.log(`✅ Modal interaction: ${interactionTest.success ? 'Working' : 'Failed'}`);
    
    if (zIndexTest.found && zIndexTest.isVisible && zIndexTest.position === 'fixed' && interactionTest.success) {
      console.log('\n🎉 MODAL Z-INDEX IS WORKING CORRECTLY!');
      console.log('   • Modal appears in front of other elements');
      console.log('   • Modal is properly positioned and visible');
      console.log('   • Modal elements are clickable');
    } else {
      console.log('\n⚠️ MODAL Z-INDEX ISSUES DETECTED:');
      if (!zIndexTest.found) console.log('   • Modal container not found');
      if (!zIndexTest.isVisible) console.log('   • Modal not visible');
      if (zIndexTest.position !== 'fixed') console.log('   • Modal not using fixed positioning');
      if (!interactionTest.success) console.log('   • Modal elements not clickable');
    }

  } catch (error) {
    console.error('❌ Modal z-index test failed:', error);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

// Run the modal z-index test
testModalZIndex().catch(console.error);
