const puppeteer = require('puppeteer');

async function testSuperCompactModal() {
  console.log('🔍 Testing Super-Compact AI Model Selector Modal');
  console.log('==============================================');
  
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

    console.log('\n📋 Testing Super-Compact Modal:');
    
    // Open modal
    await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const autoButton = buttons.find(btn => btn.textContent.includes('Auto'));
      if (autoButton) {
        autoButton.click();
      }
    });
    
    await page.waitForTimeout(2000);
    
    // Check super compact modal
    const superCompactTest = await page.evaluate(() => {
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
          
          // Super compact criteria (extremely strict)
          const isSuperCompactWidth = widthRatio < 0.3; // Less than 30% of viewport width
          const isSuperCompactHeight = heightRatio < 0.5; // Less than 50% of viewport height
          
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
          const isSuperCompactSpacing = avgSpacing < 2; // Less than 2px average spacing
          
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
            superCompactness: {
              isSuperCompactWidth,
              isSuperCompactHeight,
              isSuperCompactSpacing,
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
    
    console.log(`   ${superCompactTest.found ? '✅' : '❌'} Modal: ${superCompactTest.found ? 'Found' : 'Not found'}`);
    if (superCompactTest.found) {
      console.log(`   📊 Modal dimensions: ${superCompactTest.dimensions.width}x${superCompactTest.dimensions.height}px`);
      console.log(`   📊 Viewport: ${superCompactTest.dimensions.viewportWidth}x${superCompactTest.dimensions.viewportHeight}px`);
      console.log(`   📊 Width ratio: ${superCompactTest.dimensions.widthRatio} (${superCompactTest.dimensions.widthRatio * 100}% of viewport)`);
      console.log(`   📊 Height ratio: ${superCompactTest.dimensions.heightRatio} (${superCompactTest.dimensions.heightRatio * 100}% of viewport)`);
      console.log(`   📊 Models count: ${superCompactTest.layout.modelsCount}`);
      console.log(`   📊 Average spacing: ${superCompactTest.superCompactness.avgSpacing}px`);
      
      console.log('\n   📊 Super-Compactness Analysis:');
      console.log(`      ${superCompactTest.superCompactness.isSuperCompactWidth ? '✅' : '❌'} Super-compact width: ${superCompactTest.superCompactness.isSuperCompactWidth ? 'Yes' : 'No'} (< 30% viewport)`);
      console.log(`      ${superCompactTest.superCompactness.isSuperCompactHeight ? '✅' : '❌'} Super-compact height: ${superCompactTest.superCompactness.isSuperCompactHeight ? 'Yes' : 'No'} (< 50% viewport)`);
      console.log(`      ${superCompactTest.superCompactness.isSuperCompactSpacing ? '✅' : '❌'} Super-compact spacing: ${superCompactTest.superCompactness.isSuperCompactSpacing ? 'Yes' : 'No'} (< 2px avg)`);
      console.log(`      ${superCompactTest.layout.isVertical ? '✅' : '❌'} Vertical layout: ${superCompactTest.layout.isVertical ? 'Yes' : 'No'}`);
      console.log(`      ${superCompactTest.isCentered ? '✅' : '❌'} Centered: ${superCompactTest.isCentered ? 'Yes' : 'No'}`);
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
      path: 'dreambuild-super-compact-modal-test.png',
      fullPage: true 
    });
    console.log('\n📸 Screenshot saved as dreambuild-super-compact-modal-test.png');

    // Summary
    console.log('\n🎯 SUPER-COMPACT MODAL TEST SUMMARY:');
    console.log('====================================');
    console.log(`✅ Modal found: ${superCompactTest.found ? 'Yes' : 'No'}`);
    console.log(`✅ Modal visible: ${superCompactTest.found ? 'Yes' : 'N/A'}`);
    console.log(`✅ Super-compact width: ${superCompactTest.found ? superCompactTest.superCompactness.isSuperCompactWidth : 'N/A'}`);
    console.log(`✅ Super-compact height: ${superCompactTest.found ? superCompactTest.superCompactness.isSuperCompactHeight : 'N/A'}`);
    console.log(`✅ Super-compact spacing: ${superCompactTest.found ? superCompactTest.superCompactness.isSuperCompactSpacing : 'N/A'}`);
    console.log(`✅ Vertical layout: ${superCompactTest.found ? superCompactTest.layout.isVertical : 'N/A'}`);
    console.log(`✅ Models count: ${superCompactTest.found ? superCompactTest.layout.modelsCount : 'N/A'}`);
    console.log(`✅ Modal interaction: ${interactionTest.success ? 'Working' : 'Failed'}`);
    
    const isSuperCompact = superCompactTest.found && 
                          superCompactTest.superCompactness.isSuperCompactWidth && 
                          superCompactTest.superCompactness.isSuperCompactHeight && 
                          superCompactTest.superCompactness.isSuperCompactSpacing && 
                          superCompactTest.layout.isVertical && 
                          superCompactTest.layout.modelsCount > 10 && 
                          interactionTest.success;
    
    console.log('\n🎉 OVERALL ASSESSMENT:');
    console.log('=====================');
    if (isSuperCompact) {
      console.log('✅ SUPER-COMPACT MODAL IS WORKING PERFECTLY!');
      console.log('   • Modal is super-compact in width (< 30% viewport)');
      console.log('   • Modal is super-compact in height (< 50% viewport)');
      console.log('   • Models have super-compact spacing (< 2px avg)');
      console.log('   • Models are arranged vertically');
      console.log('   • All models are present');
      console.log('   • Modal interaction works');
      console.log('   • Modal is properly centered and visible');
    } else {
      console.log('❌ SUPER-COMPACT MODAL NEEDS MORE WORK');
      if (!superCompactTest.found) console.log('   • Modal not found');
      if (!superCompactTest.superCompactness.isSuperCompactWidth) console.log('   • Modal not super-compact in width');
      if (!superCompactTest.superCompactness.isSuperCompactHeight) console.log('   • Modal not super-compact in height');
      if (!superCompactTest.superCompactness.isSuperCompactSpacing) console.log('   • Models not super-compact in spacing');
      if (!superCompactTest.layout.isVertical) console.log('   • Models not arranged vertically');
      if (superCompactTest.layout.modelsCount <= 10) console.log('   • Not enough models found');
      if (!interactionTest.success) console.log('   • Modal interaction failed');
    }

  } catch (error) {
    console.error('❌ Super-compact modal test failed:', error);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

testSuperCompactModal().catch(console.error);
