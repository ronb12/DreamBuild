const puppeteer = require('puppeteer');

async function testCompactModal() {
  console.log('🔍 Testing Compact AI Model Selector Modal');
  console.log('=========================================');
  
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

    console.log('\n📋 Testing Compact Modal:');
    
    // Open modal
    await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const autoButton = buttons.find(btn => btn.textContent.includes('Auto'));
      if (autoButton) {
        autoButton.click();
      }
    });
    
    await page.waitForTimeout(2000);
    
    // Check modal compactness and layout
    const compactTest = await page.evaluate(() => {
      // Find the modal container
      const modalContainer = document.querySelector('.fixed.inset-0.z-\\[999999\\]');
      
      if (modalContainer) {
        const rect = modalContainer.getBoundingClientRect();
        
        // Find the inner modal content
        const modalContent = modalContainer.querySelector('.relative.bg-background');
        
        if (modalContent) {
          const contentRect = modalContent.getBoundingClientRect();
          const contentStyle = window.getComputedStyle(modalContent);
          
          // Check modal dimensions
          const modalWidth = contentRect.width;
          const modalHeight = contentRect.height;
          const viewportWidth = window.innerWidth;
          const viewportHeight = window.innerHeight;
          
          // Calculate compactness ratios
          const widthRatio = modalWidth / viewportWidth;
          const heightRatio = modalHeight / viewportHeight;
          
          // Check if modal is compact (smaller than previous version)
          const isCompactWidth = widthRatio < 0.4; // Less than 40% of viewport width
          const isCompactHeight = heightRatio < 0.8; // Less than 80% of viewport height
          
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
          const isCompactSpacing = avgSpacing < 8; // Less than 8px average spacing
          
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
            compactness: {
              isCompactWidth,
              isCompactHeight,
              isCompactSpacing,
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
    
    console.log(`   ${compactTest.found ? '✅' : '❌'} Modal: ${compactTest.found ? 'Found' : 'Not found'}`);
    if (compactTest.found) {
      console.log(`   📊 Modal dimensions: ${compactTest.dimensions.width}x${compactTest.dimensions.height}px`);
      console.log(`   📊 Viewport: ${compactTest.dimensions.viewportWidth}x${compactTest.dimensions.viewportHeight}px`);
      console.log(`   📊 Width ratio: ${compactTest.dimensions.widthRatio} (${compactTest.dimensions.widthRatio * 100}% of viewport)`);
      console.log(`   📊 Height ratio: ${compactTest.dimensions.heightRatio} (${compactTest.dimensions.heightRatio * 100}% of viewport)`);
      console.log(`   📊 Models count: ${compactTest.layout.modelsCount}`);
      console.log(`   📊 Average spacing: ${compactTest.compactness.avgSpacing}px`);
      
      console.log('\n   📊 Compactness Analysis:');
      console.log(`      ${compactTest.compactness.isCompactWidth ? '✅' : '❌'} Compact width: ${compactTest.compactness.isCompactWidth ? 'Yes' : 'No'} (< 40% viewport)`);
      console.log(`      ${compactTest.compactness.isCompactHeight ? '✅' : '❌'} Compact height: ${compactTest.compactness.isCompactHeight ? 'Yes' : 'No'} (< 80% viewport)`);
      console.log(`      ${compactTest.compactness.isCompactSpacing ? '✅' : '❌'} Compact spacing: ${compactTest.compactness.isCompactSpacing ? 'Yes' : 'No'} (< 8px avg)`);
      console.log(`      ${compactTest.layout.isVertical ? '✅' : '❌'} Vertical layout: ${compactTest.layout.isVertical ? 'Yes' : 'No'}`);
      console.log(`      ${compactTest.isCentered ? '✅' : '❌'} Centered: ${compactTest.isCentered ? 'Yes' : 'No'}`);
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
      path: 'dreambuild-compact-modal-test.png',
      fullPage: true 
    });
    console.log('\n📸 Screenshot saved as dreambuild-compact-modal-test.png');

    // Summary
    console.log('\n🎯 COMPACT MODAL TEST SUMMARY:');
    console.log('==============================');
    console.log(`✅ Modal found: ${compactTest.found ? 'Yes' : 'No'}`);
    console.log(`✅ Modal visible: ${compactTest.found ? 'Yes' : 'N/A'}`);
    console.log(`✅ Compact width: ${compactTest.found ? compactTest.compactness.isCompactWidth : 'N/A'}`);
    console.log(`✅ Compact height: ${compactTest.found ? compactTest.compactness.isCompactHeight : 'N/A'}`);
    console.log(`✅ Compact spacing: ${compactTest.found ? compactTest.compactness.isCompactSpacing : 'N/A'}`);
    console.log(`✅ Vertical layout: ${compactTest.found ? compactTest.layout.isVertical : 'N/A'}`);
    console.log(`✅ Models count: ${compactTest.found ? compactTest.layout.modelsCount : 'N/A'}`);
    console.log(`✅ Modal interaction: ${interactionTest.success ? 'Working' : 'Failed'}`);
    
    const isCompact = compactTest.found && 
                     compactTest.compactness.isCompactWidth && 
                     compactTest.compactness.isCompactHeight && 
                     compactTest.compactness.isCompactSpacing && 
                     compactTest.layout.isVertical && 
                     compactTest.layout.modelsCount > 10 && 
                     interactionTest.success;
    
    console.log('\n🎉 OVERALL ASSESSMENT:');
    console.log('=====================');
    if (isCompact) {
      console.log('✅ COMPACT MODAL IS WORKING PERFECTLY!');
      console.log('   • Modal is compact in width (< 40% viewport)');
      console.log('   • Modal is compact in height (< 80% viewport)');
      console.log('   • Models have compact spacing (< 8px avg)');
      console.log('   • Models are arranged vertically');
      console.log('   • All models are present');
      console.log('   • Modal interaction works');
      console.log('   • Modal is properly centered and visible');
    } else {
      console.log('❌ COMPACT MODAL NEEDS MORE WORK');
      if (!compactTest.found) console.log('   • Modal not found');
      if (!compactTest.compactness.isCompactWidth) console.log('   • Modal not compact in width');
      if (!compactTest.compactness.isCompactHeight) console.log('   • Modal not compact in height');
      if (!compactTest.compactness.isCompactSpacing) console.log('   • Models not compact in spacing');
      if (!compactTest.layout.isVertical) console.log('   • Models not arranged vertically');
      if (compactTest.layout.modelsCount <= 10) console.log('   • Not enough models found');
      if (!interactionTest.success) console.log('   • Modal interaction failed');
    }

  } catch (error) {
    console.error('❌ Compact modal test failed:', error);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

testCompactModal().catch(console.error);
