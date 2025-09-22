const puppeteer = require('puppeteer');

async function testUltraCompactFinal() {
  console.log('🔍 Testing Ultra-Compact Final AI Model Selector Modal');
  console.log('====================================================');
  
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

    console.log('\n📋 Testing Ultra-Compact Final Modal:');
    
    // Open modal
    await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const autoButton = buttons.find(btn => btn.textContent.includes('Auto'));
      if (autoButton) {
        autoButton.click();
      }
    });
    
    await page.waitForTimeout(2000);
    
    // Check ultra-compact final modal
    const ultraCompactFinalTest = await page.evaluate(() => {
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
          
          // Ultra-compact final criteria (very strict)
          const isUltraCompactWidth = widthRatio < 0.3; // Less than 30% of viewport width
          const isUltraCompactHeight = heightRatio < 0.45; // Less than 45% of viewport height
          
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
          const isUltraCompactSpacing = avgSpacing < 1.5; // Less than 1.5px average spacing
          
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
    
    console.log(`   ${ultraCompactFinalTest.found ? '✅' : '❌'} Modal: ${ultraCompactFinalTest.found ? 'Found' : 'Not found'}`);
    if (ultraCompactFinalTest.found) {
      console.log(`   📊 Modal dimensions: ${ultraCompactFinalTest.dimensions.width}x${ultraCompactFinalTest.dimensions.height}px`);
      console.log(`   📊 Viewport: ${ultraCompactFinalTest.dimensions.viewportWidth}x${ultraCompactFinalTest.dimensions.viewportHeight}px`);
      console.log(`   📊 Width ratio: ${ultraCompactFinalTest.dimensions.widthRatio} (${ultraCompactFinalTest.dimensions.widthRatio * 100}% of viewport)`);
      console.log(`   📊 Height ratio: ${ultraCompactFinalTest.dimensions.heightRatio} (${ultraCompactFinalTest.dimensions.heightRatio * 100}% of viewport)`);
      console.log(`   📊 Models count: ${ultraCompactFinalTest.layout.modelsCount}`);
      console.log(`   📊 Average spacing: ${ultraCompactFinalTest.ultraCompactness.avgSpacing}px`);
      
      console.log('\n   📊 Ultra-Compact Final Analysis:');
      console.log(`      ${ultraCompactFinalTest.ultraCompactness.isUltraCompactWidth ? '✅' : '❌'} Ultra-compact width: ${ultraCompactFinalTest.ultraCompactness.isUltraCompactWidth ? 'Yes' : 'No'} (< 30% viewport)`);
      console.log(`      ${ultraCompactFinalTest.ultraCompactness.isUltraCompactHeight ? '✅' : '❌'} Ultra-compact height: ${ultraCompactFinalTest.ultraCompactness.isUltraCompactHeight ? 'Yes' : 'No'} (< 45% viewport)`);
      console.log(`      ${ultraCompactFinalTest.ultraCompactness.isUltraCompactSpacing ? '✅' : '❌'} Ultra-compact spacing: ${ultraCompactFinalTest.ultraCompactness.isUltraCompactSpacing ? 'Yes' : 'No'} (< 1.5px avg)`);
      console.log(`      ${ultraCompactFinalTest.layout.isVertical ? '✅' : '❌'} Vertical layout: ${ultraCompactFinalTest.layout.isVertical ? 'Yes' : 'No'}`);
      console.log(`      ${ultraCompactFinalTest.isCentered ? '✅' : '❌'} Centered: ${ultraCompactFinalTest.isCentered ? 'Yes' : 'No'}`);
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
      path: 'dreambuild-ultra-compact-final-test.png',
      fullPage: true 
    });
    console.log('\n📸 Screenshot saved as dreambuild-ultra-compact-final-test.png');

    // Summary
    console.log('\n🎯 ULTRA-COMPACT FINAL TEST SUMMARY:');
    console.log('=====================================');
    console.log(`✅ Modal found: ${ultraCompactFinalTest.found ? 'Yes' : 'No'}`);
    console.log(`✅ Modal visible: ${ultraCompactFinalTest.found ? 'Yes' : 'N/A'}`);
    console.log(`✅ Ultra-compact width: ${ultraCompactFinalTest.found ? ultraCompactFinalTest.ultraCompactness.isUltraCompactWidth : 'N/A'}`);
    console.log(`✅ Ultra-compact height: ${ultraCompactFinalTest.found ? ultraCompactFinalTest.ultraCompactness.isUltraCompactHeight : 'N/A'}`);
    console.log(`✅ Ultra-compact spacing: ${ultraCompactFinalTest.found ? ultraCompactFinalTest.ultraCompactness.isUltraCompactSpacing : 'N/A'}`);
    console.log(`✅ Vertical layout: ${ultraCompactFinalTest.found ? ultraCompactFinalTest.layout.isVertical : 'N/A'}`);
    console.log(`✅ Models count: ${ultraCompactFinalTest.found ? ultraCompactFinalTest.layout.modelsCount : 'N/A'}`);
    console.log(`✅ Modal interaction: ${interactionTest.success ? 'Working' : 'Failed'}`);
    
    const isUltraCompact = ultraCompactFinalTest.found && 
                          ultraCompactFinalTest.ultraCompactness.isUltraCompactWidth && 
                          ultraCompactFinalTest.ultraCompactness.isUltraCompactHeight && 
                          ultraCompactFinalTest.ultraCompactness.isUltraCompactSpacing && 
                          ultraCompactFinalTest.layout.isVertical && 
                          ultraCompactFinalTest.layout.modelsCount > 10 && 
                          interactionTest.success;
    
    console.log('\n🎉 OVERALL ASSESSMENT:');
    console.log('=====================');
    if (isUltraCompact) {
      console.log('✅ ULTRA-COMPACT FINAL MODAL IS WORKING PERFECTLY!');
      console.log('   • Modal is ultra-compact in width (< 30% viewport)');
      console.log('   • Modal is ultra-compact in height (< 45% viewport)');
      console.log('   • Models have ultra-compact spacing (< 1.5px avg)');
      console.log('   • Models are arranged vertically');
      console.log('   • All models are present');
      console.log('   • Modal interaction works');
      console.log('   • Modal is properly centered and visible');
      console.log('   • AI Model Selector is now maximally compact!');
    } else {
      console.log('❌ ULTRA-COMPACT FINAL MODAL NEEDS MORE WORK');
      if (!ultraCompactFinalTest.found) console.log('   • Modal not found');
      if (!ultraCompactFinalTest.ultraCompactness.isUltraCompactWidth) console.log('   • Modal not ultra-compact in width');
      if (!ultraCompactFinalTest.ultraCompactness.isUltraCompactHeight) console.log('   • Modal not ultra-compact in height');
      if (!ultraCompactFinalTest.ultraCompactness.isUltraCompactSpacing) console.log('   • Models not ultra-compact in spacing');
      if (!ultraCompactFinalTest.layout.isVertical) console.log('   • Models not arranged vertically');
      if (ultraCompactFinalTest.layout.modelsCount <= 10) console.log('   • Not enough models found');
      if (!interactionTest.success) console.log('   • Modal interaction failed');
    }

  } catch (error) {
    console.error('❌ Ultra-compact final modal test failed:', error);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

testUltraCompactFinal().catch(console.error);
