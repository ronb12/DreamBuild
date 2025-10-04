const puppeteer = require('puppeteer');

(async () => {
  console.log('🧪 FULL AI BUILDER FUNCTION TEST');
  console.log('='.repeat(50));
  
  const browser = await puppeteer.launch({ 
    headless: false, 
    devtools: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 720 });
  
  try {
    console.log('📱 Step 1: Navigating to DreamBuild...');
    await page.goto('http://localhost:3001', { 
      waitUntil: 'networkidle0', 
      timeout: 30000 
    });
    console.log('✅ Page loaded successfully');
    
    console.log('\n🔍 Step 2: Testing AI Builder Access...');
    await page.waitForSelector('[data-testid="ai-builder"]', { timeout: 15000 });
    console.log('✅ AI Builder component found');
    
    console.log('\n📝 Step 3: Testing Prompt Input...');
    const promptInput = await page.waitForSelector('textarea[placeholder*="build"]', { timeout: 10000 });
    console.log('✅ Prompt input found');
    
    console.log('\n🎯 Step 4: Testing Simple App Generation...');
    await promptInput.click();
    await promptInput.type('build a simple calculator app');
    console.log('✅ Prompt entered: "build a simple calculator app"');
    
    console.log('\n🚀 Step 5: Testing Generate Button...');
    const generateButton = await page.waitForSelector('button:has-text("Generate")', { timeout: 5000 });
    await generateButton.click();
    console.log('✅ Generate button clicked');
    
    console.log('\n⏳ Step 6: Waiting for Generation...');
    await page.waitForTimeout(20000);
    
    console.log('\n👀 Step 7: Testing Preview Component...');
    try {
      await page.waitForSelector('[data-testid="preview"]', { timeout: 10000 });
      console.log('✅ Preview component found');
    } catch (e) {
      console.log('⚠️ Preview component not found, checking for alternative selectors...');
      const previewSelectors = [
        'iframe[src*="blob:"]',
        '.preview-container',
        '#preview',
        '[class*="preview"]'
      ];
      
      let previewFound = false;
      for (const selector of previewSelectors) {
        try {
          await page.waitForSelector(selector, { timeout: 2000 });
          console.log('✅ Preview found with selector:', selector);
          previewFound = true;
          break;
        } catch (e) {
          // Continue to next selector
        }
      }
      
      if (!previewFound) {
        console.log('❌ No preview component found');
      }
    }
    
    console.log('\n📁 Step 8: Testing File Management...');
    try {
      const fileManager = await page.waitForSelector('[data-testid="file-manager"]', { timeout: 5000 });
      console.log('✅ File manager found');
    } catch (e) {
      console.log('⚠️ File manager not found, checking for file tabs...');
      const fileTabs = await page.$$('[role="tab"]');
      if (fileTabs.length > 0) {
        console.log('✅ File tabs found:', fileTabs.length);
      } else {
        console.log('❌ No file management interface found');
      }
    }
    
    console.log('\n🎮 Step 9: Testing Game Generation...');
    await promptInput.click();
    await promptInput.clear();
    await promptInput.type('build a tetris game');
    
    const generateButton2 = await page.waitForSelector('button:has-text("Generate")', { timeout: 5000 });
    await generateButton2.click();
    console.log('✅ Game generation started');
    
    await page.waitForTimeout(15000);
    
    console.log('\n📊 Step 10: Testing Template System...');
    try {
      const templateButton = await page.waitForSelector('button:has-text("Templates")', { timeout: 5000 });
      await templateButton.click();
      console.log('✅ Template system accessible');
    } catch (e) {
      console.log('⚠️ Template button not found');
    }
    
    console.log('\n🔧 Step 11: Testing Editor Features...');
    try {
      const editor = await page.waitForSelector('.monaco-editor', { timeout: 5000 });
      console.log('✅ Monaco editor found');
    } catch (e) {
      console.log('⚠️ Monaco editor not found');
    }
    
    console.log('\n📱 Step 12: Testing PWA Features...');
    const manifest = await page.evaluate(() => {
      return navigator.serviceWorker ? 'Available' : 'Not available';
    });
    console.log('✅ Service Worker:', manifest);
    
    console.log('\n🎯 AI BUILDER TEST COMPLETED!');
    console.log('='.repeat(50));
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
  } finally {
    await browser.close();
  }
})();
