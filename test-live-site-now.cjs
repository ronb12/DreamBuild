const puppeteer = require('puppeteer');

(async () => {
  console.log('🔍 Testing LIVE site right now...\n');
  
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--incognito']
  });
  
  const page = await browser.newPage();
  
  // Enable console logging from the page
  page.on('console', msg => {
    const text = msg.text();
    if (text.includes('DreamBuild') || text.includes('game') || text.includes('Generating')) {
      console.log('🌐 Browser:', text);
    }
  });
  
  console.log('📱 Opening live site in fresh incognito...');
  await page.goto('https://dreambuild-2024-app.web.app/#/ai-builder', {
    waitUntil: 'networkidle2',
    timeout: 60000
  });
  
  await new Promise(r => setTimeout(r, 8000));
  
  console.log('\n🎮 Requesting Tetris...');
  const textarea = await page.$('textarea[placeholder="Describe what you want to build..."]');
  if (textarea) {
    await textarea.type('Create tetris game', { delay: 100 });
    await new Promise(r => setTimeout(r, 1000));
    
    const submitBtn = await page.$('button[type="submit"]');
    if (submitBtn) {
      await submitBtn.click();
      console.log('✅ Submit clicked, waiting for generation...\n');
      
      await new Promise(r => setTimeout(r, 20000));
      
      console.log('📊 Checking preview iframe...');
      const iframe = await page.$('iframe[title="App Preview"]');
      if (iframe) {
        const frame = await iframe.contentFrame();
        if (frame) {
          const content = await frame.content();
          
          console.log('\n═══════════════════════════════════════════');
          console.log('📊 LIVE SITE GENERATION RESULTS');
          console.log('═══════════════════════════════════════════');
          console.log(`Content size: ${content.length} bytes`);
          console.log(`Has <canvas>: ${content.includes('<canvas') ? '✅ YES' : '❌ NO'}`);
          console.log(`Has "Design": ${content.includes('Design') ? '⚠️  YES (WRONG!)' : '✅ NO'}`);
          console.log(`Has "Tetris": ${content.toLowerCase().includes('tetris') ? '✅ YES' : '❌ NO'}`);
          console.log(`Has "block": ${content.toLowerCase().includes('block') ? '✅ YES' : '❌ NO'}`);
          console.log(`Has "piece": ${content.toLowerCase().includes('piece') ? '✅ YES' : '❌ NO'}`);
          console.log(`Has "game": ${content.toLowerCase().includes('game') ? '✅ YES' : '❌ NO'}`);
          
          // Extract title
          const titleMatch = content.match(/<h1[^>]*>(.*?)<\/h1>/i);
          if (titleMatch) {
            console.log(`\n🎯 Page Title: "${titleMatch[1]}"`);
          }
          
          // Check for canvas
          const canvasMatch = content.match(/<canvas[^>]*>/);
          if (canvasMatch) {
            console.log(`✅ Canvas element found: ${canvasMatch[0].substring(0, 50)}...`);
          }
          
          console.log('═══════════════════════════════════════════\n');
          
          if (content.includes('Design') && content.includes('Welcome to Design')) {
            console.log('❌ PROBLEM CONFIRMED: Site is generating generic "Design" app');
            console.log('This means the browser IS loading old cached code.\n');
          } else if (content.includes('<canvas') && (content.toLowerCase().includes('tetris') || content.toLowerCase().includes('block'))) {
            console.log('✅ SUCCESS: Proper Tetris game generated!');
            console.log('The fix is working correctly.\n');
          } else {
            console.log('⚠️  UNEXPECTED: Neither old nor new pattern detected.');
            console.log('Saving full HTML for inspection...\n');
            require('fs').writeFileSync('live-preview-output.html', content);
            console.log('📄 Saved to: live-preview-output.html');
          }
        }
      }
    }
  }
  
  console.log('\n⏸️  Keeping browser open for 60 seconds for manual inspection...');
  await new Promise(r => setTimeout(r, 60000));
  
  await browser.close();
})();
