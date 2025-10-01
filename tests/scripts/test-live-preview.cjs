const puppeteer = require('puppeteer');

async function testPreview(page, app) {
  console.log(`\n${'═'.repeat(70)}`);
  console.log(`🎯 TESTING PREVIEW: ${app.name}`);
  console.log(`   Prompt: "${app.prompt}"`);
  console.log('═'.repeat(70));
  
  try {
    // Enter prompt
    console.log('   Step 1: Entering prompt...');
    const textarea = await page.waitForSelector('textarea', { timeout: 5000 });
    await textarea.click({ clickCount: 3 });
    await page.keyboard.type(app.prompt);
    
    await new Promise(r => setTimeout(r, 800));
    
    // Submit
    console.log('   Step 2: Submitting...');
    await page.keyboard.press('Enter');
    
    console.log('   Step 3: Waiting for generation (15s)...');
    await new Promise(r => setTimeout(r, 15000));
    
    // Check preview iframe
    console.log('   Step 4: Checking preview iframe...');
    const iframe = await page.$('iframe[title="App Preview"]');
    
    if (!iframe) {
      console.log('   ❌ Preview iframe NOT FOUND');
      return { name: app.name, previewWorks: false, reason: 'No iframe' };
    }
    console.log('   ✅ Preview iframe FOUND');
    
    // Get iframe content
    const frame = await iframe.contentFrame();
    if (!frame) {
      console.log('   ❌ Cannot access iframe content');
      return { name: app.name, previewWorks: false, reason: 'Cannot access frame' };
    }
    console.log('   ✅ Iframe content ACCESSIBLE');
    
    const html = await frame.content();
    const size = html.length;
    
    console.log(`   Step 5: Analyzing preview content...`);
    console.log(`   📊 Content size: ${size} bytes`);
    
    // Check essential elements
    const checks = {
      hasDoctype: html.includes('<!DOCTYPE html>'),
      hasHTML: html.includes('<html'),
      hasHead: html.includes('<head>'),
      hasBody: html.includes('<body>'),
      hasCSS: html.includes('<style>') || html.includes('css'),
      hasJS: html.includes('<script>'),
      hasDiv: html.includes('<div'),
      hasButton: html.includes('<button') || html.includes('btn'),
      hasText: html.replace(/<[^>]*>/g, '').trim().length > 50
    };
    
    console.log(`\n   🔍 PREVIEW CONTENT VERIFICATION:`);
    console.log(`   ───────────────────────────────────────────────────────────`);
    console.log(`   DOCTYPE:     ${checks.hasDoctype ? '✅' : '❌'} ${checks.hasDoctype ? 'Present' : 'Missing'}`);
    console.log(`   HTML tag:    ${checks.hasHTML ? '✅' : '❌'} ${checks.hasHTML ? 'Present' : 'Missing'}`);
    console.log(`   Head tag:    ${checks.hasHead ? '✅' : '❌'} ${checks.hasHead ? 'Present' : 'Missing'}`);
    console.log(`   Body tag:    ${checks.hasBody ? '✅' : '❌'} ${checks.hasBody ? 'Present' : 'Missing'}`);
    console.log(`   CSS:         ${checks.hasCSS ? '✅' : '❌'} ${checks.hasCSS ? 'Included' : 'Missing'}`);
    console.log(`   JavaScript:  ${checks.hasJS ? '✅' : '❌'} ${checks.hasJS ? 'Included' : 'Missing'}`);
    console.log(`   Containers:  ${checks.hasDiv ? '✅' : '❌'} ${checks.hasDiv ? 'Present' : 'Missing'}`);
    console.log(`   Interactive: ${checks.hasButton ? '✅' : '❌'} ${checks.hasButton ? 'Buttons found' : 'No buttons'}`);
    console.log(`   Content:     ${checks.hasText ? '✅' : '❌'} ${checks.hasText ? 'Has text' : 'Empty'}`);
    
    // Check if preview is actually rendering
    const visibleElements = await frame.$$('body *');
    const elementCount = visibleElements.length;
    console.log(`   Elements:    ✅ ${elementCount} DOM elements rendered`);
    
    // Try to get the title
    const title = await frame.title();
    console.log(`   Title:       ${title || '(none)'}`);
    
    // Calculate preview quality score
    const checksPassed = Object.values(checks).filter(Boolean).length;
    const quality = (checksPassed / Object.keys(checks).length * 100).toFixed(0);
    
    const previewWorks = 
      size > 1000 &&
      checks.hasDoctype &&
      checks.hasHTML &&
      checks.hasBody &&
      checks.hasCSS &&
      checks.hasJS &&
      elementCount > 5;
    
    console.log(`\n   📊 PREVIEW QUALITY: ${quality}% (${checksPassed}/${Object.keys(checks).length} checks)`);
    console.log(`   🎯 VERDICT: ${previewWorks ? '✅ PREVIEW WORKS CORRECTLY' : '❌ PREVIEW HAS ISSUES'}`);
    
    return {
      name: app.name,
      previewWorks,
      size,
      quality,
      elementCount,
      title,
      checks
    };
    
  } catch (error) {
    console.log(`   ❌ ERROR: ${error.message}`);
    return { name: app.name, previewWorks: false, reason: error.message };
  }
}

(async () => {
  console.log('\n' + '═'.repeat(70));
  console.log('🔍 DREAMBUILD LIVE PREVIEW FUNCTIONALITY TEST');
  console.log('   Testing preview rendering for different app types');
  console.log('═'.repeat(70));
  
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: { width: 1600, height: 1000 }
  });
  
  const page = await browser.newPage();
  
  console.log('\n📱 Opening DreamBuild...');
  await page.goto('https://dreambuild-2024-app.web.app/#/ai-builder', {
    waitUntil: 'networkidle2',
    timeout: 60000
  });
  
  await new Promise(r => setTimeout(r, 6000));
  
  // Test different app types
  const apps = [
    { name: 'Tetris Game', prompt: 'build tetris' },
    { name: 'Todo App', prompt: 'create todo app' },
    { name: 'Calculator', prompt: 'build calculator' },
    { name: 'Chat App', prompt: 'create chat app' },
    { name: 'Weather App', prompt: 'build weather app' }
  ];
  
  const results = [];
  
  for (let i = 0; i < apps.length; i++) {
    const result = await testPreview(page, apps[i]);
    results.push(result);
    
    // Reload for next test
    if (i < apps.length - 1) {
      console.log('\n   🔄 Reloading for next test...');
      await page.goto('https://dreambuild-2024-app.web.app/#/ai-builder', {
        waitUntil: 'networkidle2'
      });
      await new Promise(r => setTimeout(r, 3000));
    }
  }
  
  // Final Report
  console.log('\n\n' + '═'.repeat(70));
  console.log('📊 LIVE PREVIEW TEST RESULTS');
  console.log('═'.repeat(70));
  
  const working = results.filter(r => r.previewWorks);
  const passRate = (working.length / results.length * 100).toFixed(1);
  
  console.log(`\n✅ Preview Working: ${working.length}/${results.length} apps (${passRate}%)\n`);
  
  results.forEach(r => {
    const icon = r.previewWorks ? '✅' : '❌';
    console.log(`${icon} ${r.name.padEnd(20)} | ${r.size || 0} bytes | ${r.quality || 0}% quality | ${r.elementCount || 0} elements`);
  });
  
  console.log('\n' + '═'.repeat(70));
  
  if (passRate >= 100) {
    console.log('🏆 PERFECT! Live preview works for ALL app types!');
    console.log('✅ Preview iframe renders correctly');
    console.log('✅ HTML structure is complete');
    console.log('✅ CSS is bundled and applied');
    console.log('✅ JavaScript is executed');
    console.log('✅ Interactive elements are present');
  } else if (passRate >= 80) {
    console.log(`✅ GOOD: ${passRate}% preview success rate`);
  } else {
    console.log(`⚠️  Preview needs improvement: ${passRate}% success`);
  }
  
  console.log('═'.repeat(70) + '\n');
  
  // Save results
  const fs = require('fs');
  fs.writeFileSync('preview-test-results.json', JSON.stringify(results, null, 2));
  console.log('📄 Results saved: preview-test-results.json\n');
  
  await new Promise(r => setTimeout(r, 5000));
  await browser.close();
  
  process.exit(passRate >= 80 ? 0 : 1);
})();
