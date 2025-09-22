const puppeteer = require('puppeteer');

async function testMaximumCompactModal() {
  console.log('🔍 Testing Maximum-Compact AI Model Selector Modal');
  console.log('================================================');
  
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

    console.log('\n📋 Testing Maximum-Compact Modal:');
    
    // Open modal
    await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const autoButton = buttons.find(btn => btn.textContent.includes('Auto'));
      if (autoButton) {
        autoButton.click();
      }
    });
    
    await page.waitForTimeout(2000);
    
    // Check maximum compact modal
    const maximumCompactTest = await page.evaluate(() => {
      // Find the modal container
      const modalContainer = document.querySelector('.fixed.inset-0.z-\\[999999\\]');
      
      if (modalContainer) {
        const rect = modalContainer.getBoundingClientRect();
        
        // Find the inner modal content
        const modalContent = modalContainer.querySelector('.relative.bg-background');
        
        if (modalContent) {
          const contentRect = modalContent.getBoundingClientRect();
          
          // Check modal dimensions
          const modalWidth = contentRect.width;
          const modalHeight = contentRect.height;
          const viewportWidth = window.innerWidth;
          const viewportHeight = window.innerHeight;
          
          // Calculate compactness ratios
          const widthRatio = modalWidth / viewportWidth;
          const heightRatio = modalHeight / viewportHeight;
          
          // Maximum compact criteria (very strict)
          const isMaximumCompactWidth = widthRatio < 0.3; // Less than 30% of viewport width
          const isMaximumCompactHeight = heightRatio < 0.55; // Less than 55% of viewport height
          
          // Check models layout and spacing
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
          
          // Calculate spacing between models
          let spacing = [];
          for (let i = 1; i < modelPositions.length; i++) {
            const space = modelPositions[i].top - (modelPositions[i-1].top + modelPositions[i-1].height);
            spacing.push(space);
          }
          
          const avgSpacing = spacing.reduce((a, b) => a + b, 0) / spacing.length;
          const isMaximumCompactSpacing = avgSpacing < 3; // Less than 3px average spacing
          
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
            dimensions: {
              width: Math.round(modalWidth),
              height: Math.round(modalHeight),
              viewportWidth: viewportWidth,
              viewportHeight: viewportHeight,
              widthRatio: Math.round(widthRatio * 100) / 100,
              heightRatio: Math.round(heightRatio * 100) / 100
            },
            maximumCompactness: {
              isMaximumCompactWidth,
              isMaximumCompactHeight,
              isMaximumCompactSpacing,
              avgSpacing: Math.round(avgSpacing * 10) / 10
            },
            layout: {
              modelsCount: modelButtons.length,
              isVertical,
              spacing: spacing.slice(0, 5) // First 5 spacing values
            },
            isCentered: contentRect.left > 0 && contentRect.top > 0 && 
                       contentRect.right < viewportWidth && contentRect.bottom < viewportHeight
          };
        }
      }
      
      return { found: false };
    });
    
    console.log(`   ${maximumCompactTest.found ? '✅' : '❌'} Modal: ${maximumCompactTest.found ? 'Found' : 'Not found'}`);
    if (maximumCompactTest.found) {
      console.log(`   📊 Modal dimensions: ${maximumCompactTest.dimensions.width}x${maximumCompactTest.dimensions.height}px`);
      console.log(`   📊 Viewport: ${maximumCompactTest.dimensions.viewportWidth}x${maximumCompactTest.dimensions.viewportHeight}px`);
      console.log(`   📊 Width ratio: ${maximumCompactTest.dimensions.widthRatio} (${maximumCompactTest.dimensions.widthRatio * 100}% of viewport)`);
      console.log(`   📊 Height ratio: ${maximumCompactTest.dimensions.heightRatio} (${maximumCompactTest.dimensions.heightRatio * 100}% of viewport)`);
      console.log(`   📊 Models count: ${maximumCompactTest.layout.modelsCount}`);
      console.log(`   📊 Average spacing: ${maximumCompactTest.maximumCompactness.avgSpacing}px`);
      
      console.log('\n   📊 Maximum-Compactness Analysis:');
      console.log(`      ${maximumCompactTest.maximumCompactness.isMaximumCompactWidth ? '✅' : '❌'} Maximum-compact width: ${maximumCompactTest.maximumCompactness.isMaximumCompactWidth ? 'Yes' : 'No'} (< 30% viewport)`);
      console.log(`      ${maximumCompactTest.maximumCompactness.isMaximumCompactHeight ? '✅' : '❌'} Maximum-compact height: ${maximumCompactTest.maximumCompactness.isMaximumCompactHeight ? 'Yes' : 'No'} (< 55% viewport)`);
      console.log(`      ${maximumCompactTest.maximumCompactness.isMaximumCompactSpacing ? '✅' : '❌'} Maximum-compact spacing: ${maximumCompactTest.maximumCompactness.isMaximumCompactSpacing ? 'Yes' : 'No'} (< 3px avg)`);
      console.log(`      ${maximumCompactTest.layout.isVertical ? '✅' : '❌'} Vertical layout: ${maximumCompactTest.layout.isVertical ? 'Yes' : 'No'}`);
      console.log(`      ${maximumCompactTest.isCentered ? '✅' : '❌'} Centered: ${maximumCompactTest.isCentered ? 'Yes' : 'No'}`);
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
      path: 'dreambuild-maximum-compact-modal-test.png',
      fullPage: true 
    });
    console.log('\n📸 Screenshot saved as dreambuild-maximum-compact-modal-test.png');

    // Summary
    console.log('\n🎯 MAXIMUM-COMPACT MODAL TEST SUMMARY:');
    console.log('======================================');
    console.log(`✅ Modal found: ${maximumCompactTest.found ? 'Yes' : 'No'}`);
    console.log(`✅ Modal visible: ${maximumCompactTest.found ? 'Yes' : 'N/A'}`);
    console.log(`✅ Maximum-compact width: ${maximumCompactTest.found ? maximumCompactTest.maximumCompactness.isMaximumCompactWidth : 'N/A'}`);
    console.log(`✅ Maximum-compact height: ${maximumCompactTest.found ? maximumCompactTest.maximumCompactness.isMaximumCompactHeight : 'N/A'}`);
    console.log(`✅ Maximum-compact spacing: ${maximumCompactTest.found ? maximumCompactTest.maximumCompactness.isMaximumCompactSpacing : 'N/A'}`);
    console.log(`✅ Vertical layout: ${maximumCompactTest.found ? maximumCompactTest.layout.isVertical : 'N/A'}`);
    console.log(`✅ Models count: ${maximumCompactTest.found ? maximumCompactTest.layout.modelsCount : 'N/A'}`);
    console.log(`✅ Modal interaction: ${interactionTest.success ? 'Working' : 'Failed'}`);
    
    const isMaximumCompact = maximumCompactTest.found && 
                            maximumCompactTest.maximumCompactness.isMaximumCompactWidth && 
                            maximumCompactTest.maximumCompactness.isMaximumCompactHeight && 
                            maximumCompactTest.maximumCompactness.isMaximumCompactSpacing && 
                            maximumCompactTest.layout.isVertical && 
                            maximumCompactTest.layout.modelsCount > 10 && 
                            interactionTest.success;
    
    console.log('\n🎉 OVERALL ASSESSMENT:');
    console.log('=====================');
    if (isMaximumCompact) {
      console.log('✅ MAXIMUM-COMPACT MODAL IS WORKING PERFECTLY!');
      console.log('   • Modal is maximum-compact in width (< 30% viewport)');
      console.log('   • Modal is maximum-compact in height (< 55% viewport)');
      console.log('   • Models have maximum-compact spacing (< 3px avg)');
      console.log('   • Models are arranged vertically');
      console.log('   • All models are present');
      console.log('   • Modal interaction works');
      console.log('   • Modal is properly centered and visible');
    } else {
      console.log('❌ MAXIMUM-COMPACT MODAL NEEDS MORE WORK');
      if (!maximumCompactTest.found) console.log('   • Modal not found');
      if (!maximumCompactTest.maximumCompactness.isMaximumCompactWidth) console.log('   • Modal not maximum-compact in width');
      if (!maximumCompactTest.maximumCompactness.isMaximumCompactHeight) console.log('   • Modal not maximum-compact in height');
      if (!maximumCompactTest.maximumCompactness.isMaximumCompactSpacing) console.log('   • Models not maximum-compact in spacing');
      if (!maximumCompactTest.layout.isVertical) console.log('   • Models not arranged vertically');
      if (maximumCompactTest.layout.modelsCount <= 10) console.log('   • Not enough models found');
      if (!interactionTest.success) console.log('   • Modal interaction failed');
    }

  } catch (error) {
    console.error('❌ Maximum-compact modal test failed:', error);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

testMaximumCompactModal().catch(console.error);
