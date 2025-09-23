const puppeteer = require('puppeteer');

async function testSimpleFix() {
  console.log('🔍 Testing simple fix for model selection...');
  
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: { width: 1920, height: 1080 },
    slowMo: 100
  });

  const page = await browser.newPage();
  
  try {
    // Navigate to AI Builder
    await page.goto('http://localhost:3000/ai-builder', { 
      waitUntil: 'networkidle2',
      timeout: 30000 
    });
    
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Get initial model
    const initialModel = await page.evaluate(() => {
      const button = document.querySelector('button[title*="Model"]');
      return button ? button.textContent.trim() : '';
    });
    console.log(`📝 Initial model: "${initialModel}"`);
    
    // Click model selector button
    console.log('🖱️ Clicking model selector button...');
    const modelButton = await page.$('button[title*="Model"]');
    if (modelButton) {
      await modelButton.click();
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Get all model buttons
      const modelButtons = await page.$$('button[class*="w-full p-2 rounded"]');
      console.log(`🔍 Found ${modelButtons.length} model buttons`);
      
      if (modelButtons.length > 1) {
        console.log('🖱️ Clicking CodeLlama 7B model...');
        
        // Click the second model
        await modelButtons[1].click();
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Get current model
        const currentModel = await page.evaluate(() => {
          const button = document.querySelector('button[title*="Model"]');
          return button ? button.textContent.trim() : '';
        });
        console.log(`📝 Current model after click: "${currentModel}"`);
        
        if (currentModel !== initialModel) {
          console.log('✅ SUCCESS: Model selection is working!');
          console.log(`   Changed from "${initialModel}" to "${currentModel}"`);
        } else {
          console.log('❌ FAILED: Model did not change');
          console.log(`   Still showing "${currentModel}" instead of "CodeLlama 7B"`);
        }
      }
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
  } finally {
    await browser.close();
  }
}

testSimpleFix();
