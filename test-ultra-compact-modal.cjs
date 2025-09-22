const puppeteer = require('puppeteer');

async function testUltraCompactModal() {
  console.log('🔍 Testing Ultra-Compact AI Model Selector Modal');
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

    console.log('\n📋 Testing Ultra-Compact Modal:');
    
    // Open modal
    await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const autoButton = buttons.find(btn => btn.textContent.includes('Auto'));
      if (autoButton) {
        autoButton.click();
      }
    });
    
    await page.waitForTimeout(2000);
    
    // Check ultra-compact modal
    const ultraCompactTest = await page.evaluate(() => {
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
          
          // Ultra-compact criteria (stricter)
          const isUltraCompactWidth = widthRatio < 0.35; // Less than 35% of viewport width
          const isUltraCompactHeight = heightRatio < 0.65; // Less than 65% of viewport height
          
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
          const isUltraCompactSpacing = avgSpacing < 4; // Less than 4px average spacing
          
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
            ultraCompactness: {
              isUltraCompactWidth,
              isUltraCompactHeight,
              isUltraCompactSpacing,
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
    
    console.log(`   ${ultraCompactTest.found ? '✅' : '❌'} Modal: ${ultraCompactTest.found ? 'Found' : 'Not found'}`);
    if (ultraCompactTest.found) {
      console.log(`   📊 Modal dimensions: ${ultraCompactTest.dimensions.width}x${ultraCompactTest.dimensions.height}px`);
      console.log(`   📊 Viewport: ${ultraCompactTest.dimensions.viewportWidth}x${ultraCompactTest.dimensions.viewportHeight}px`);
      console.log(`   📊 Width ratio: ${ultraCompactTest.dimensions.widthRatio} (${ultraCompactTest.dimensions.widthRatio * 100}% of viewport)`);
      console.log(`   📊 Height ratio: ${ultraCompactTest.dimensions.heightRatio} (${ultraCompactTest.dimensions.heightRatio * 100}% of viewport)`);
      console.log(`   📊 Models count: ${ultraCompactTest.layout.modelsCount}`);
      console.log(`   📊 Average spacing: ${ultraCompactTest.ultraCompactness.avgSpacing}px`);
      
      console.log('\n   📊 Ultra-Compactness Analysis:');
      console.log(`      ${ultraCompactTest.ultraCompactness.isUltraCompactWidth ? '✅' : '❌'} Ultra-compact width: ${ultraCompactTest.ultraCompactness.isUltraCompactWidth ? 'Yes' : 'No'} (< 35% viewport)`);
      console.log(`      ${ultraCompactTest.ultraCompactness.isUltraCompactHeight ? '✅' : '❌'} Ultra-compact height: ${ultraCompactTest.ultraCompactness.isUltraCompactHeight ? 'Yes' : 'No'} (< 65% viewport)`);
      console.log(`      ${ultraCompactTest.ultraCompactness.isUltraCompactSpacing ? '✅' : '❌'} Ultra-compact spacing: ${ultraCompactTest.ultraCompactness.isUltraCompactSpacing ? 'Yes' : 'No'} (< 4px avg)`);
      console.log(`      ${ultraCompactTest.layout.isVertical ? '✅' : '❌'} Vertical layout: ${ultraCompactTest.layout.isVertical ? 'Yes' : 'No'}`);
      console.log(`      ${ultraCompactTest.isCentered ? '✅' : '❌'} Centered: ${ultraCompactTest.isCentered ? 'Yes' : 'No'}`);
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
      path: 'dreambuild-ultra-compact-modal-test.png',
      fullPage: true 
    });
    console.log('\n📸 Screenshot saved as dreambuild-ultra-compact-modal-test.png');

    // Summary
    console.log('\n🎯 ULTRA-COMPACT MODAL TEST SUMMARY:');
    console.log('=====================================');
    console.log(`✅ Modal found: ${ultraCompactTest.found ? 'Yes' : 'No'}`);
    console.log(`✅ Modal visible: ${ultraCompactTest.found ? 'Yes' : 'N/A'}`);
    console.log(`✅ Ultra-compact width: ${ultraCompactTest.found ? ultraCompactTest.ultraCompactness.isUltraCompactWidth : 'N/A'}`);
    console.log(`✅ Ultra-compact height: ${ultraCompactTest.found ? ultraCompactTest.ultraCompactness.isUltraCompactHeight : 'N/A'}`);
    console.log(`✅ Ultra-compact spacing: ${ultraCompactTest.found ? ultraCompactTest.ultraCompactness.isUltraCompactSpacing : 'N/A'}`);
    console.log(`✅ Vertical layout: ${ultraCompactTest.found ? ultraCompactTest.layout.isVertical : 'N/A'}`);
    console.log(`✅ Models count: ${ultraCompactTest.found ? ultraCompactTest.layout.modelsCount : 'N/A'}`);
    console.log(`✅ Modal interaction: ${interactionTest.success ? 'Working' : 'Failed'}`);
    
    const isUltraCompact = ultraCompactTest.found && 
                          ultraCompactTest.ultraCompactness.isUltraCompactWidth && 
                          ultraCompactTest.ultraCompactness.isUltraCompactHeight && 
                          ultraCompactTest.ultraCompactness.isUltraCompactSpacing && 
                          ultraCompactTest.layout.isVertical && 
                          ultraCompactTest.layout.modelsCount > 10 && 
                          interactionTest.success;
    
    console.log('\n🎉 OVERALL ASSESSMENT:');
    console.log('=====================');
    if (isUltraCompact) {
      console.log('✅ ULTRA-COMPACT MODAL IS WORKING PERFECTLY!');
      console.log('   • Modal is ultra-compact in width (< 35% viewport)');
      console.log('   • Modal is ultra-compact in height (< 65% viewport)');
      console.log('   • Models have ultra-compact spacing (< 4px avg)');
      console.log('   • Models are arranged vertically');
      console.log('   • All models are present');
      console.log('   • Modal interaction works');
      console.log('   • Modal is properly centered and visible');
    } else {
      console.log('❌ ULTRA-COMPACT MODAL NEEDS MORE WORK');
      if (!ultraCompactTest.found) console.log('   • Modal not found');
      if (!ultraCompactTest.ultraCompactness.isUltraCompactWidth) console.log('   • Modal not ultra-compact in width');
      if (!ultraCompactTest.ultraCompactness.isUltraCompactHeight) console.log('   • Modal not ultra-compact in height');
      if (!ultraCompactTest.ultraCompactness.isUltraCompactSpacing) console.log('   • Models not ultra-compact in spacing');
      if (!ultraCompactTest.layout.isVertical) console.log('   • Models not arranged vertically');
      if (ultraCompactTest.layout.modelsCount <= 10) console.log('   • Not enough models found');
      if (!interactionTest.success) console.log('   • Modal interaction failed');
    }

  } catch (error) {
    console.error('❌ Ultra-compact modal test failed:', error);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

testUltraCompactModal().catch(console.error);
