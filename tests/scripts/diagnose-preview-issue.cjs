const puppeteer = require('puppeteer');

console.log('\n╔══════════════════════════════════════════════════════════════╗');
console.log('║                                                              ║');
console.log('║   🔍 DIAGNOSING PREVIEW ISSUE                               ║');
console.log('║   Checking why apps aren\'t showing in preview              ║');
console.log('║                                                              ║');
console.log('╚══════════════════════════════════════════════════════════════╝\n');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: { width: 1800, height: 1000 }
  });
  
  const page = await browser.newPage();
  
  // Capture all console messages
  const consoleLogs = [];
  page.on('console', msg => {
    const text = msg.text();
    consoleLogs.push(text);
    
    // Show important logs in real-time
    if (text.includes('🚀') || 
        text.includes('✅') || 
        text.includes('❌') || 
        text.includes('AI Response') ||
        text.includes('Preview') ||
        text.includes('files') ||
        text.includes('Generated') ||
        text.includes('Injecting')) {
      console.log('   📱', text);
    }
  });
  
  // Capture errors
  page.on('pageerror', error => {
    console.log('   ❌ PAGE ERROR:', error.message);
  });
  
  console.log('🌐 Opening DreamBuild...');
  await page.goto('https://dreambuild-2024-app.web.app/#/ai-builder', {
    waitUntil: 'networkidle2',
    timeout: 60000
  });
  
  await new Promise(r => setTimeout(r, 8000));
  console.log('✅ DreamBuild loaded\n');
  
  console.log('━'.repeat(70));
  console.log('📝 STEP 1: ENTERING PROMPT');
  console.log('━'.repeat(70));
  
  const textarea = await page.$('textarea');
  if (!textarea) {
    console.log('❌ FATAL: Textarea not found!');
    await browser.close();
    process.exit(1);
  }
  
  await textarea.click({ clickCount: 3 });
  await page.keyboard.type('create simple calculator', { delay: 50 });
  console.log('✅ Prompt entered: "create simple calculator"\n');
  
  await new Promise(r => setTimeout(r, 500));
  
  console.log('━'.repeat(70));
  console.log('🚀 STEP 2: SUBMITTING PROMPT');
  console.log('━'.repeat(70));
  
  await page.keyboard.press('Enter');
  console.log('✅ Submit button pressed\n');
  
  console.log('━'.repeat(70));
  console.log('⏳ STEP 3: MONITORING GENERATION (30 seconds)');
  console.log('━'.repeat(70));
  console.log('   Watching console logs...\n');
  
  await new Promise(r => setTimeout(r, 30000));
  
  console.log('\n━'.repeat(70));
  console.log('📊 STEP 4: CHECKING RESULTS');
  console.log('━'.repeat(70));
  
  // Check for files in File Manager
  const fileManagerCheck = await page.evaluate(() => {
    const fileElements = document.querySelectorAll('[class*="file"], [data-file], .file-item, .file-entry');
    const fileTexts = Array.from(fileElements).map(el => el.textContent.trim()).filter(t => t);
    
    return {
      count: fileElements.length,
      files: fileTexts.slice(0, 10)
    };
  });
  
  console.log('\n📁 FILE MANAGER:');
  console.log('   Files found:', fileManagerCheck.count);
  if (fileManagerCheck.files.length > 0) {
    console.log('   Files:', fileManagerCheck.files.join(', '));
  }
  
  // Check for Preview iframe
  const previewCheck = await page.evaluate(() => {
    const iframes = document.querySelectorAll('iframe');
    const previewIframe = Array.from(iframes).find(iframe => 
      iframe.title?.includes('Preview') || 
      iframe.title?.includes('Live')
    );
    
    return {
      totalIframes: iframes.length,
      hasPreviewIframe: !!previewIframe,
      iframeTitle: previewIframe?.title || 'N/A'
    };
  });
  
  console.log('\n🖼️  PREVIEW IFRAME:');
  console.log('   Total iframes:', previewCheck.totalIframes);
  console.log('   Preview iframe found:', previewCheck.hasPreviewIframe ? '✅' : '❌');
  if (previewCheck.hasPreviewIframe) {
    console.log('   Iframe title:', previewCheck.iframeTitle);
  }
  
  // Check iframe content if it exists
  if (previewCheck.hasPreviewIframe) {
    try {
      const iframe = await page.$('iframe[title*="Preview"], iframe[title*="Live"]');
      const frame = await iframe.contentFrame();
      
      if (frame) {
        const content = await frame.content();
        const contentSize = content.length;
        
        console.log('\n📄 PREVIEW CONTENT:');
        console.log('   Size:', contentSize, 'bytes');
        console.log('   Has DOCTYPE:', content.includes('<!DOCTYPE html>') ? '✅' : '❌');
        console.log('   Has CSS:', content.includes('<style>') || content.includes('css') ? '✅' : '❌');
        console.log('   Has JS:', content.includes('<script>') ? '✅' : '❌');
        
        // Check for loading message
        if (content.includes('Loading application') || content.includes('Generating')) {
          console.log('   ⚠️  Preview stuck on loading message');
        } else if (contentSize > 1000) {
          console.log('   ✅ Preview has substantial content');
        } else {
          console.log('   ⚠️  Preview content is too small');
        }
      } else {
        console.log('   ❌ Cannot access iframe content');
      }
    } catch (error) {
      console.log('   ❌ Error accessing iframe:', error.message);
    }
  }
  
  // Analyze console logs
  console.log('\n📊 CONSOLE LOG ANALYSIS:');
  const keyLogs = {
    'Generation started': consoleLogs.some(log => log.includes('Starting generation')),
    'AI service called': consoleLogs.some(log => log.includes('Generating code with DreamBuild')),
    'Code generated': consoleLogs.some(log => log.includes('Code generated successfully')),
    'Files injected': consoleLogs.some(log => log.includes('files updated') || log.includes('Code injection')),
    'Preview regenerated': consoleLogs.some(log => log.includes('Preview content regenerated')),
    'Errors found': consoleLogs.some(log => log.includes('❌') || log.includes('ERROR'))
  };
  
  console.log('   Generation started:', keyLogs['Generation started'] ? '✅' : '❌');
  console.log('   AI service called:', keyLogs['AI service called'] ? '✅' : '❌');
  console.log('   Code generated:', keyLogs['Code generated'] ? '✅' : '❌');
  console.log('   Files injected:', keyLogs['Files injected'] ? '✅' : '❌');
  console.log('   Preview regenerated:', keyLogs['Preview regenerated'] ? '✅' : '❌');
  console.log('   Errors found:', keyLogs['Errors found'] ? '❌' : '✅ None');
  
  // Find specific errors
  const errors = consoleLogs.filter(log => 
    log.includes('❌') || 
    log.includes('ERROR') || 
    log.includes('Failed')
  );
  
  if (errors.length > 0) {
    console.log('\n⚠️  ERRORS DETECTED:');
    errors.slice(0, 5).forEach(err => console.log('   -', err));
  }
  
  // Take screenshot
  console.log('\n📸 Taking screenshot...');
  await page.screenshot({ 
    path: 'tests/screenshots/preview-diagnosis.png',
    fullPage: true
  });
  console.log('   ✅ Screenshot saved: tests/screenshots/preview-diagnosis.png');
  
  // Final diagnosis
  console.log('\n\n' + '═'.repeat(70));
  console.log('🔍 DIAGNOSIS:');
  console.log('═'.repeat(70));
  
  const allStepsWorking = 
    keyLogs['Generation started'] &&
    keyLogs['AI service called'] &&
    keyLogs['Code generated'] &&
    keyLogs['Files injected'];
  
  if (allStepsWorking && previewCheck.hasPreviewIframe) {
    console.log('\n✅ GOOD NEWS: Generation pipeline is working!');
    console.log('   - Code is being generated');
    console.log('   - Files are being created');
    console.log('   - Preview iframe exists');
    console.log('\n   Possible issues:');
    console.log('   - Preview might need more time to render');
    console.log('   - Browser cache might need clearing');
    console.log('   - Try clicking the Preview tab');
  } else {
    console.log('\n❌ ISSUES DETECTED:');
    if (!keyLogs['Generation started']) console.log('   - Generation not starting');
    if (!keyLogs['AI service called']) console.log('   - AI service not being called');
    if (!keyLogs['Code generated']) console.log('   - Code generation failing');
    if (!keyLogs['Files injected']) console.log('   - File injection failing');
    if (!previewCheck.hasPreviewIframe) console.log('   - Preview iframe not created');
  }
  
  console.log('\n═'.repeat(70));
  console.log('\n⏰ Browser will stay open for 20 seconds for manual inspection...\n');
  await new Promise(r => setTimeout(r, 20000));
  
  await browser.close();
  
  // Save diagnostic report
  const fs = require('fs');
  const report = {
    timestamp: new Date().toISOString(),
    fileManagerCheck,
    previewCheck,
    keyLogs,
    errors,
    allStepsWorking
  };
  
  fs.writeFileSync('tests/reports/preview-diagnosis.json', JSON.stringify(report, null, 2));
  console.log('📄 Diagnostic report saved: tests/reports/preview-diagnosis.json\n');
  
  process.exit(allStepsWorking && previewCheck.hasPreviewIframe ? 0 : 1);
})();
