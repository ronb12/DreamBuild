const puppeteer = require('puppeteer');

async function testModelsCount() {
  console.log('🔍 Testing Models Count');
  console.log('======================');
  
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

    console.log('\n📋 Testing Models Count:');
    
    // Open modal
    await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const autoButton = buttons.find(btn => btn.textContent.includes('Auto'));
      if (autoButton) {
        autoButton.click();
      }
    });
    
    await page.waitForTimeout(2000);
    
    // Count models in the modal
    const modelsResult = await page.evaluate(() => {
      const allButtons = Array.from(document.querySelectorAll('button'));
      
      // Find buttons that look like model buttons (in the modal)
      const modelButtons = allButtons.filter(btn => {
        const text = btn.textContent;
        return text.includes('GB') || text.includes('Smart') || 
               text.includes('CodeLlama') || text.includes('StarCoder') || 
               text.includes('DeepSeek') || text.includes('WizardCoder') ||
               text.includes('Phi-3') || text.includes('Llama') ||
               text.includes('Mistral') || text.includes('Gemma') ||
               text.includes('Qwen') || text.includes('CodeT5') ||
               text.includes('InCoder');
      });
      
      console.log('Found model buttons:', modelButtons.length);
      
      modelButtons.forEach((btn, index) => {
        console.log(`Model ${index + 1}:`, btn.textContent.trim());
      });
      
      // Find the scroll container
      const allDivs = Array.from(document.querySelectorAll('div'));
      const scrollContainer = allDivs.find(div => 
        div.className.includes('flex-1') && 
        div.className.includes('overflow-y-auto')
      );
      
      if (scrollContainer) {
        const scrollHeight = scrollContainer.scrollHeight;
        const clientHeight = scrollContainer.clientHeight;
        const children = scrollContainer.children;
        
        console.log('Scroll container children:', children.length);
        console.log('Scroll height:', scrollHeight);
        console.log('Client height:', clientHeight);
        
        return {
          modelButtonsCount: modelButtons.length,
          scrollContainerChildren: children.length,
          scrollHeight,
          clientHeight,
          needsScroll: scrollHeight > clientHeight,
          modelNames: modelButtons.map(btn => btn.textContent.trim())
        };
      }
      
      return {
        modelButtonsCount: modelButtons.length,
        modelNames: modelButtons.map(btn => btn.textContent.trim())
      };
    });
    
    console.log('📝 Models result:', modelsResult);
    
    if (modelsResult.modelButtonsCount > 0) {
      console.log(`✅ Found ${modelsResult.modelButtonsCount} model buttons`);
      
      if (modelsResult.needsScroll) {
        console.log('✅ Scroll is needed and should work');
      } else {
        console.log('ℹ️ All models fit in container - no scroll needed');
      }
    } else {
      console.log('❌ No model buttons found');
    }

    // Take screenshot
    await page.screenshot({ 
      path: 'dreambuild-models-count-test.png',
      fullPage: true 
    });
    console.log('\n📸 Screenshot saved as dreambuild-models-count-test.png');

    console.log('\n🎯 MODELS COUNT TEST COMPLETE!');

  } catch (error) {
    console.error('❌ Models count test failed:', error);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

// Run the models count test
testModelsCount().catch(console.error);
