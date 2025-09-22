const puppeteer = require('puppeteer');

async function testModalLayeringFinal() {
  console.log('🔍 Final Modal Layering Test');
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

    // Wait for the page to fully load
    await page.waitForTimeout(5000);

    console.log('\n📋 Final Modal Layering Test:');
    
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
        div.className.includes('z-[999999]')
      );
      
      if (modalContainer) {
        const computedStyle = window.getComputedStyle(modalContainer);
        const rect = modalContainer.getBoundingClientRect();
        
        // Get all elements with z-index
        const allElements = Array.from(document.querySelectorAll('*'));
        const elementsWithZIndex = allElements
          .map(el => ({
            element: el,
            zIndex: parseInt(window.getComputedStyle(el).zIndex) || 0,
            className: el.className,
            tagName: el.tagName
          }))
          .filter(item => item.zIndex > 0)
          .sort((a, b) => b.zIndex - a.zIndex);
        
        // Check if modal is above all other elements
        const modalZIndex = parseInt(computedStyle.zIndex) || 999999;
        const higherZIndexElements = elementsWithZIndex.filter(item => 
          item.zIndex > modalZIndex && item.element !== modalContainer
        );
        
        return {
          found: true,
          modalZIndex: modalZIndex,
          computedZIndex: computedStyle.zIndex,
          rect: {
            top: Math.round(rect.top),
            left: Math.round(rect.left),
            width: Math.round(rect.width),
            height: Math.round(rect.height)
          },
          totalElementsWithZIndex: elementsWithZIndex.length,
          higherZIndexElements: higherZIndexElements.length,
          topZIndexElements: elementsWithZIndex.slice(0, 5).map(item => ({
            tagName: item.tagName,
            className: item.className,
            zIndex: item.zIndex
          }))
        };
      }
      
      return { found: false };
    });
    
    console.log(`   ${zIndexTest.found ? '✅' : '❌'} Modal: ${zIndexTest.found ? 'Found' : 'Not found'}`);
    if (zIndexTest.found) {
      console.log(`   📊 Modal z-index: ${zIndexTest.modalZIndex} (computed: ${zIndexTest.computedZIndex})`);
      console.log(`   📊 Modal position: top=${zIndexTest.rect.top}px, left=${zIndexTest.rect.left}px`);
      console.log(`   📊 Modal size: ${zIndexTest.rect.width}x${zIndexTest.rect.height}px`);
      console.log(`   📊 Elements with z-index: ${zIndexTest.totalElementsWithZIndex}`);
      console.log(`   📊 Elements with higher z-index: ${zIndexTest.higherZIndexElements}`);
      
      if (zIndexTest.higherZIndexElements > 0) {
        console.log('   ⚠️ Some elements have higher z-index than modal!');
      } else {
        console.log('   ✅ Modal has the highest z-index!');
      }
      
      console.log('   📝 Top 5 elements by z-index:');
      zIndexTest.topZIndexElements.forEach((item, index) => {
        console.log(`      ${index + 1}. ${item.tagName} - z-index:${item.zIndex}`);
      });
    }
    
    // Test 2: Check for overlapping elements in modal area
    console.log('\n2. Checking for Overlapping Elements:');
    const overlapTest = await page.evaluate(() => {
      const allDivs = Array.from(document.querySelectorAll('div'));
      const modalContainer = allDivs.find(div => 
        div.className.includes('fixed') && 
        div.className.includes('bottom-20') &&
        div.className.includes('z-[999999]')
      );
      
      if (modalContainer) {
        const modalRect = modalContainer.getBoundingClientRect();
        
        // Find all elements that overlap with the modal
        const allElements = Array.from(document.querySelectorAll('*'));
        const overlappingElements = allElements.filter(el => {
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
            const zIndex = parseInt(style.zIndex) || 0;
            return zIndex >= 999999; // High z-index elements
          }
          
          return false;
        });
        
        return {
          modalFound: true,
          modalRect: {
            top: Math.round(modalRect.top),
            left: Math.round(modalRect.left),
            width: Math.round(modalRect.width),
            height: Math.round(modalRect.height)
          },
          overlappingElements: overlappingElements.map(el => ({
            tagName: el.tagName,
            className: el.className,
            rect: {
              top: Math.round(el.getBoundingClientRect().top),
              left: Math.round(el.getBoundingClientRect().left),
              width: Math.round(el.getBoundingClientRect().width),
              height: Math.round(el.getBoundingClientRect().height)
            },
            zIndex: parseInt(window.getComputedStyle(el).zIndex) || 0,
            text: el.textContent ? el.textContent.trim().substring(0, 30) : ''
          }))
        };
      }
      
      return { modalFound: false };
    });
    
    console.log(`   ${overlapTest.modalFound ? '✅' : '❌'} Overlap test: ${overlapTest.modalFound ? 'Completed' : 'Failed'}`);
    if (overlapTest.modalFound) {
      console.log(`   📊 Modal area: ${overlapTest.modalRect.width}x${overlapTest.modalRect.height}px at (${overlapTest.modalRect.left}, ${overlapTest.modalRect.top})`);
      console.log(`   📊 Overlapping elements: ${overlapTest.overlappingElements.length}`);
      
      if (overlapTest.overlappingElements.length > 0) {
        console.log('   ⚠️ Overlapping elements found:');
        overlapTest.overlappingElements.forEach((el, index) => {
          console.log(`      ${index + 1}. ${el.tagName} - z-index:${el.zIndex}, text:"${el.text}"`);
        });
      } else {
        console.log('   ✅ No overlapping elements found!');
      }
    }
    
    // Test 3: Test modal interaction
    console.log('\n3. Testing Modal Interaction:');
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
    
    // Test 4: Check AI Builder top overlapping
    console.log('\n4. Checking AI Builder Top Overlapping:');
    const topOverlapTest = await page.evaluate(() => {
      // Check elements in the top 100px
      const allElements = Array.from(document.querySelectorAll('*'));
      const topElements = allElements.filter(el => {
        const rect = el.getBoundingClientRect();
        return rect.top >= 0 && rect.top <= 100 && rect.width > 0 && rect.height > 0;
      });
      
      // Group by z-index
      const elementsByZIndex = topElements.reduce((acc, el) => {
        const zIndex = parseInt(window.getComputedStyle(el).zIndex) || 0;
        if (!acc[zIndex]) acc[zIndex] = [];
        acc[zIndex].push({
          tagName: el.tagName,
          className: el.className,
          rect: el.getBoundingClientRect(),
          text: el.textContent ? el.textContent.trim().substring(0, 20) : ''
        });
        return acc;
      }, {});
      
      const sortedZIndexes = Object.keys(elementsByZIndex)
        .map(z => parseInt(z))
        .sort((a, b) => b - a);
      
      return {
        totalTopElements: topElements.length,
        zIndexLayers: sortedZIndexes.slice(0, 5).map(zIndex => ({
          zIndex: zIndex,
          count: elementsByZIndex[zIndex].length,
          elements: elementsByZIndex[zIndex].slice(0, 3) // Show first 3 elements per layer
        }))
      };
    });
    
    console.log(`   📊 Total elements in top 100px: ${topOverlapTest.totalTopElements}`);
    console.log('   📝 Top z-index layers:');
    topOverlapTest.zIndexLayers.forEach((layer, index) => {
      console.log(`      ${index + 1}. z-index:${layer.zIndex} (${layer.count} elements)`);
      layer.elements.forEach((el, elIndex) => {
        console.log(`         ${elIndex + 1}. ${el.tagName} - "${el.text}"`);
      });
    });
    
    // Take screenshot
    await page.screenshot({ 
      path: 'dreambuild-modal-layering-final-test.png',
      fullPage: true 
    });
    console.log('\n📸 Screenshot saved as dreambuild-modal-layering-final-test.png');

    // Final Summary
    console.log('\n🎯 FINAL MODAL LAYERING TEST SUMMARY:');
    console.log('====================================');
    console.log(`✅ Modal found: ${zIndexTest.found ? 'Yes' : 'No'}`);
    console.log(`✅ Modal z-index: ${zIndexTest.found ? zIndexTest.modalZIndex : 'N/A'}`);
    console.log(`✅ Higher z-index elements: ${zIndexTest.found ? zIndexTest.higherZIndexElements : 'N/A'}`);
    console.log(`✅ Overlapping elements: ${overlapTest.modalFound ? overlapTest.overlappingElements.length : 'N/A'}`);
    console.log(`✅ Modal interaction: ${interactionTest.success ? 'Working' : 'Failed'}`);
    console.log(`✅ Top elements: ${topOverlapTest.totalTopElements} elements in top 100px`);
    
    if (zIndexTest.found && zIndexTest.higherZIndexElements === 0 && overlapTest.overlappingElements.length === 0 && interactionTest.success) {
      console.log('\n🎉 MODAL LAYERING IS PERFECT!');
      console.log('   • Modal has the highest z-index');
      console.log('   • No overlapping elements');
      console.log('   • Modal interaction works perfectly');
      console.log('   • Modal appears in front of all other elements');
    } else {
      console.log('\n⚠️ LAYERING ISSUES DETECTED:');
      if (zIndexTest.higherZIndexElements > 0) console.log('   • Some elements have higher z-index');
      if (overlapTest.overlappingElements.length > 0) console.log('   • Overlapping elements found');
      if (!interactionTest.success) console.log('   • Modal interaction failed');
    }

  } catch (error) {
    console.error('❌ Final modal layering test failed:', error);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

// Run the final modal layering test
testModalLayeringFinal().catch(console.error);
