const puppeteer = require('puppeteer');

async function testTempleRunGeneration() {
  console.log('🎮 Starting Temple Run game generation test...');
  
  let browser;
  try {
    // Launch browser
    browser = await puppeteer.launch({ 
      headless: false, // Set to true for headless mode
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
      timeout: 60000
    });
    
    const page = await browser.newPage();
    
    // Set viewport
    await page.setViewport({ width: 1280, height: 720 });
    
    // Navigate to DreamBuild
    console.log('🌐 Navigating to DreamBuild...');
    await page.goto('http://localhost:3000', { 
      waitUntil: 'networkidle2',
      timeout: 30000 
    });
    
    // Wait for the app to load
    console.log('⏳ Waiting for app to load...');
    await page.waitForSelector('[data-testid="ai-prompt"]', { timeout: 10000 });
    
    // Navigate to AI Builder
    console.log('🔧 Navigating to AI Builder...');
    await page.click('a[href="/ai-builder"]');
    await page.waitForSelector('.ai-builder', { timeout: 10000 });
    
    // Wait for the prompt input to be ready
    console.log('⌨️ Waiting for prompt input...');
    await page.waitForSelector('textarea[placeholder*="prompt"]', { timeout: 10000 });
    
    // Clear any existing text and enter Temple Run prompt
    console.log('🎮 Entering Temple Run prompt...');
    const promptInput = await page.$('textarea[placeholder*="prompt"]');
    await promptInput.click({ clickCount: 3 }); // Select all text
    await promptInput.type('clone temple run');
    
    // Click generate button
    console.log('🚀 Clicking generate button...');
    const generateButton = await page.$('button[type="submit"]');
    await generateButton.click();
    
    // Wait for generation to complete
    console.log('⏳ Waiting for game generation...');
    await page.waitForSelector('.preview-container', { timeout: 30000 });
    
    // Check if the game was generated successfully
    console.log('🔍 Checking for game content...');
    
    // Look for game-specific elements
    const gameElements = await page.evaluate(() => {
      const elements = {
        hasGameApp: !!document.querySelector('[class*="GameApp"]'),
        hasGameComponent: !!document.querySelector('[class*="GameComponent"]'),
        hasTempleRunUI: !!document.querySelector('[class*="TempleRunUI"]'),
        hasRunnerPlayer: !!document.querySelector('[class*="RunnerPlayer"]'),
        hasObstacle: !!document.querySelector('[class*="Obstacle"]'),
        hasCoin: !!document.querySelector('[class*="Coin"]'),
        hasGameJS: !!document.querySelector('script[src*="game.js"]'),
        hasPhaser: !!document.querySelector('script[src*="phaser"]'),
        previewContent: document.querySelector('.preview-container')?.innerHTML?.length || 0
      };
      return elements;
    });
    
    console.log('📊 Game generation results:', gameElements);
    
    // Check for errors in console
    const consoleErrors = await page.evaluate(() => {
      return window.consoleErrors || [];
    });
    
    if (consoleErrors.length > 0) {
      console.log('❌ Console errors found:', consoleErrors);
    } else {
      console.log('✅ No console errors detected');
    }
    
    // Check if preview is rendering
    const previewRendering = await page.evaluate(() => {
      const iframe = document.querySelector('iframe');
      if (!iframe) return { hasIframe: false };
      
      try {
        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
        return {
          hasIframe: true,
          iframeContent: iframeDoc.body?.textContent?.length || 0,
          hasGameContent: iframeDoc.body?.textContent?.includes('Temple Run') || false,
          hasGameControls: iframeDoc.body?.textContent?.includes('Jump') || false
        };
      } catch (e) {
        return { hasIframe: true, error: e.message };
      }
    });
    
    console.log('🖼️ Preview rendering results:', previewRendering);
    
    // Take a screenshot
    console.log('📸 Taking screenshot...');
    await page.screenshot({ 
      path: 'temple-run-test-result.png',
      fullPage: true 
    });
    
    // Determine success
    const isSuccess = gameElements.hasGameApp && 
                     gameElements.hasGameComponent && 
                     gameElements.previewContent > 0 &&
                     previewRendering.hasIframe;
    
    if (isSuccess) {
      console.log('🎉 SUCCESS: Temple Run game generated successfully!');
      console.log('✅ Game components created');
      console.log('✅ Preview is rendering');
      console.log('✅ No critical errors detected');
    } else {
      console.log('❌ FAILURE: Temple Run game generation failed');
      console.log('❌ Missing components or preview issues');
    }
    
    return isSuccess;
    
  } catch (error) {
    console.error('💥 Test failed with error:', error.message);
    return false;
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

// Run the test
testTempleRunGeneration()
  .then(success => {
    if (success) {
      console.log('🎮 Temple Run test completed successfully!');
      process.exit(0);
    } else {
      console.log('💥 Temple Run test failed!');
      process.exit(1);
    }
  })
  .catch(error => {
    console.error('💥 Test runner failed:', error);
    process.exit(1);
  });
