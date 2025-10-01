const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  console.log('\n═══════════════════════════════════════════════════════');
  console.log('🔬 TETRIS GENERATION DIAGNOSTIC TEST');
  console.log('═══════════════════════════════════════════════════════\n');
  
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: { width: 1400, height: 900 }
  });
  
  const page = await browser.newPage();
  
  // Capture all console messages
  const consoleLogs = [];
  page.on('console', msg => {
    const text = msg.text();
    consoleLogs.push(text);
    if (text.includes('appType') || text.includes('game') || text.includes('Generating') || text.includes('Intent')) {
      console.log('🌐', text);
    }
  });
  
  console.log('Step 1: Opening DreamBuild (LIVE site)...');
  await page.goto('https://dreambuild-2024-app.web.app/#/ai-builder', {
    waitUntil: 'networkidle2'
  });
  
  await new Promise(r => setTimeout(r, 5000));
  
  console.log('\nStep 2: Typing "Create tetris game"...');
  const textarea = await page.waitForSelector('textarea[placeholder="Describe what you want to build..."]', { timeout: 10000 });
  await textarea.type('Create tetris game');
  
  await new Promise(r => setTimeout(r, 1000));
  
  console.log('\nStep 3: Clicking generate...');
  const btn = await page.$('button[type="submit"]');
  await btn.click();
  
  console.log('\nStep 4: Waiting for AI generation (15 seconds)...\n');
  await new Promise(r => setTimeout(r, 15000));
  
  console.log('\n═══════════════════════════════════════════════════════');
  console.log('📊 GENERATION RESULTS');
  console.log('═══════════════════════════════════════════════════════\n');
  
  // Check the iframe
  try {
    const iframe = await page.$('iframe[title="App Preview"]');
    if (iframe) {
      const frame = await iframe.contentFrame();
      if (frame) {
        const html = await frame.content();
        
        console.log(`✅ Preview loaded: ${html.length} bytes`);
        console.log(`Canvas element: ${html.includes('<canvas') ? '✅ FOUND' : '❌ NOT FOUND'}`);
        console.log(`"Design" text: ${html.includes('Design') ? '⚠️  FOUND (wrong!)' : '✅ NOT FOUND'}`);
        console.log(`"Game" text: ${html.toLowerCase().includes('game') ? '✅ FOUND' : '❌ NOT FOUND'}`);
        console.log(`"Tetris" text: ${html.toLowerCase().includes('tetris') ? '✅ FOUND' : '❌ NOT FOUND'}`);
        
        // Save the HTML
        fs.writeFileSync('tetris-preview-output.html', html);
        console.log('\n📄 Full HTML saved to: tetris-preview-output.html');
        
        // Extract key parts
        const titleMatch = html.match(/<h1[^>]*>(.*?)<\/h1>/i);
        if (titleMatch) {
          console.log(`\n🎯 Page H1: "${titleMatch[1]}"`);
        }
        
        // Look for console logs about intent
        const intentLogs = consoleLogs.filter(log => 
          log.includes('Intent analyzed') || 
          log.includes('appType') ||
          log.includes('game')
        );
        
        if (intentLogs.length > 0) {
          console.log('\n📋 Intent Analysis Logs:');
          intentLogs.forEach(log => console.log('  ', log));
        }
        
        console.log('\n═══════════════════════════════════════════════════════');
        if (html.includes('<canvas') && html.toLowerCase().includes('game')) {
          console.log('✅ SUCCESS: Tetris game generated correctly!');
          console.log('   The fix is working. Your browser was using cached code.');
        } else if (html.includes('Design')) {
          console.log('❌ PROBLEM: Still generating generic "Design" app');
          console.log('   This indicates OLD cached JavaScript is still loading.');
          console.log('\n🔧 SOLUTION:');
          console.log('   1. Close ALL browser windows');
          console.log('   2. Reopen and use Incognito mode ONLY');
          console.log('   3. Or wait 24 hours for CDN cache to expire');
        }
        console.log('═══════════════════════════════════════════════════════\n');
      }
    }
  } catch (error) {
    console.log('❌ Error reading preview:', error.message);
  }
  
  console.log('Browser will stay open for 30 seconds for you to inspect...');
  await new Promise(r => setTimeout(r, 30000));
  
  await browser.close();
  console.log('\nTest complete!');
})();
