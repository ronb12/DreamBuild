const puppeteer = require('puppeteer');

(async () => {
  console.log('🔍 Testing LIVE DreamBuild for Tetris generation...\n');
  
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--incognito']
  });
  
  const page = await browser.newPage();
  
  // Go to the LIVE site
  console.log('📱 Opening LIVE site in incognito mode...');
  await page.goto('https://dreambuild-2024-app.web.app/#/ai-builder', {
    waitUntil: 'networkidle2',
    timeout: 60000
  });
  
  await new Promise(r => setTimeout(r, 5000));
  
  // Try to generate Tetris
  console.log('🎮 Requesting Tetris game...');
  const promptInput = await page.$('textarea[placeholder="Describe what you want to build..."]');
  if (promptInput) {
    await promptInput.type('Create tetris game', { delay: 50 });
    await new Promise(r => setTimeout(r, 1000));
    
    const generateBtn = await page.$('button[type="submit"]');
    if (generateBtn) {
      await generateBtn.click();
      console.log('✅ Generate button clicked, waiting for response...');
      
      await new Promise(r => setTimeout(r, 15000));
      
      // Check the preview iframe
      const iframe = await page.$('iframe[title="App Preview"]');
      if (iframe) {
        const frame = await iframe.contentFrame();
        const content = await frame.content();
        
        console.log('\n📊 PREVIEW CONTENT ANALYSIS:');
        console.log('─────────────────────────────');
        console.log(`Content length: ${content.length} bytes`);
        console.log(`Has canvas: ${content.includes('<canvas') ? '✅' : '❌'}`);
        console.log(`Has "Tetris": ${content.includes('tetris') || content.includes('Tetris') ? '✅' : '❌'}`);
        console.log(`Has "Design": ${content.includes('Design') ? '⚠️ WRONG APP' : '✅'}`);
        console.log(`Has "block": ${content.includes('block') ? '✅' : '❌'}`);
        console.log(`Has "piece": ${content.includes('piece') ? '✅' : '❌'}`);
        
        // Extract key parts
        const title = content.match(/<h1[^>]*>(.*?)<\/h1>/)?.[1] || 'Not found';
        console.log(`\n🎯 Page title: ${title}`);
        
        if (content.includes('Design') && content.includes('Welcome to Design')) {
          console.log('\n❌ PROBLEM: Still generating generic "Design" app!');
          console.log('This means your browser is loading OLD CACHED CODE.');
        } else {
          console.log('\n✅ SUCCESS: Generated proper Tetris game!');
        }
      }
    }
  }
  
  console.log('\n⏸️  Browser will stay open for 30 seconds for you to inspect...');
  await new Promise(r => setTimeout(r, 30000));
  
  await browser.close();
})();
