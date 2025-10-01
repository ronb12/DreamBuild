const puppeteer = require('puppeteer');

const APPS_TO_TEST = [
  // Productivity & Organization (6 apps)
  { name: 'Todo List', prompt: 'Create a todo list app', type: 'todo', verifyTerms: ['todo', 'task', 'list'] },
  { name: 'Calendar', prompt: 'Build a calendar app', type: 'calendar', verifyTerms: ['calendar', 'event', 'date'] },
  { name: 'Note Taking', prompt: 'Create note taking app', type: 'note', verifyTerms: ['note', 'text', 'save'] },
  { name: 'Task Manager', prompt: 'Build task management app', type: 'project', verifyTerms: ['task', 'project', 'manage'] },
  { name: 'Timer', prompt: 'Create timer stopwatch app', type: 'time', verifyTerms: ['timer', 'time', 'start'] },
  { name: 'Habit Tracker', prompt: 'Build habit tracking app', type: 'fitness', verifyTerms: ['habit', 'track', 'daily'] },
  
  // Business & Finance (5 apps)
  { name: 'Calculator', prompt: 'Create a calculator app', type: 'calculator', verifyTerms: ['calculator', 'number', 'calculate'] },
  { name: 'Expense Tracker', prompt: 'Build expense tracker', type: 'accounting', verifyTerms: ['expense', 'money', 'track'] },
  { name: 'Invoice Generator', prompt: 'Create invoice app', type: 'accounting', verifyTerms: ['invoice', 'bill', 'amount'] },
  { name: 'Budget Planner', prompt: 'Build budget planning app', type: 'finance', verifyTerms: ['budget', 'plan', 'money'] },
  { name: 'Currency Converter', prompt: 'Create currency converter', type: 'calculator', verifyTerms: ['currency', 'convert', 'rate'] },
  
  // Social & Communication (4 apps)
  { name: 'Chat App', prompt: 'Build chat application', type: 'chat', verifyTerms: ['chat', 'message', 'send'] },
  { name: 'Forum', prompt: 'Create forum app', type: 'forum', verifyTerms: ['forum', 'post', 'discuss'] },
  { name: 'Blog', prompt: 'Build blogging platform', type: 'blog', verifyTerms: ['blog', 'post', 'article'] },
  { name: 'Poll Creator', prompt: 'Create poll voting app', type: 'social', verifyTerms: ['poll', 'vote', 'option'] },
  
  // E-commerce & Shopping (3 apps)
  { name: 'Shopping Cart', prompt: 'Build shopping cart app', type: 'ecommerce', verifyTerms: ['cart', 'product', 'buy'] },
  { name: 'Product Catalog', prompt: 'Create product catalog', type: 'ecommerce', verifyTerms: ['product', 'catalog', 'item'] },
  { name: 'Wishlist', prompt: 'Build wishlist app', type: 'ecommerce', verifyTerms: ['wishlist', 'item', 'save'] },
  
  // Health & Fitness (3 apps)
  { name: 'Workout Tracker', prompt: 'Create workout tracker', type: 'fitness', verifyTerms: ['workout', 'exercise', 'track'] },
  { name: 'Calorie Counter', prompt: 'Build calorie counter app', type: 'fitness', verifyTerms: ['calorie', 'food', 'count'] },
  { name: 'Water Intake', prompt: 'Create water intake tracker', type: 'fitness', verifyTerms: ['water', 'drink', 'track'] },
  
  // Education & Learning (3 apps)
  { name: 'Flashcards', prompt: 'Build flashcard app', type: 'education', verifyTerms: ['flashcard', 'card', 'study'] },
  { name: 'Quiz App', prompt: 'Create quiz application', type: 'quiz', verifyTerms: ['quiz', 'question', 'answer'] },
  { name: 'Dictionary', prompt: 'Build dictionary app', type: 'language', verifyTerms: ['dictionary', 'word', 'definition'] },
  
  // Utilities & Tools (3 apps)
  { name: 'QR Code Generator', prompt: 'Create QR code generator', type: 'utility', verifyTerms: ['qr', 'code', 'generate'] },
  { name: 'Password Generator', prompt: 'Build password generator', type: 'utility', verifyTerms: ['password', 'generate', 'secure'] },
  { name: 'Unit Converter', prompt: 'Create unit converter app', type: 'calculator', verifyTerms: ['convert', 'unit', 'measure'] },
  
  // Lifestyle & Personal (3 apps)
  { name: 'Recipe Book', prompt: 'Build recipe app', type: 'food', verifyTerms: ['recipe', 'food', 'cook'] },
  { name: 'Weather App', prompt: 'Create weather app', type: 'weather', verifyTerms: ['weather', 'temperature', 'forecast'] },
  { name: 'Music Player', prompt: 'Build music player', type: 'music', verifyTerms: ['music', 'play', 'song'] }
];

async function testApp(page, app, index) {
  console.log(`\n${'─'.repeat(80)}`);
  console.log(`📱 Test ${index + 1}/30: ${app.name}`);
  console.log(`   Prompt: "${app.prompt}"`);
  console.log('─'.repeat(80));
  
  try {
    // Clear previous input
    const textarea = await page.$('textarea[placeholder="Describe what you want to build..."]');
    if (!textarea) {
      console.log('   ❌ FAIL: Textarea not found');
      return { name: app.name, passed: false, reason: 'Textarea not found' };
    }
    
    await textarea.click({ clickCount: 3 });
    await textarea.type(app.prompt, { delay: 50 });
    
    await new Promise(r => setTimeout(r, 500));
    
    // Submit
    const submitBtn = await page.$('button[type="submit"]');
    if (!submitBtn) {
      console.log('   ❌ FAIL: Submit button not found');
      return { name: app.name, passed: false, reason: 'Submit button not found' };
    }
    
    await submitBtn.click();
    console.log('   ⏳ Generating app...');
    
    // Wait for generation
    await new Promise(r => setTimeout(r, 15000));
    
    // Check preview
    const iframe = await page.$('iframe[title="App Preview"]');
    if (!iframe) {
      console.log('   ❌ FAIL: No preview iframe');
      return { name: app.name, passed: false, reason: 'No preview' };
    }
    
    const frame = await iframe.contentFrame();
    if (!frame) {
      console.log('   ❌ FAIL: Cannot access iframe');
      return { name: app.name, passed: false, reason: 'Iframe access failed' };
    }
    
    const content = await frame.content();
    const contentSize = content.length;
    
    // Verify content was generated
    if (contentSize < 1000) {
      console.log(`   ❌ FAIL: Content too small (${contentSize} bytes)`);
      return { name: app.name, passed: false, reason: 'Insufficient content' };
    }
    
    // Check for essential elements
    const hasHTML = content.includes('<!DOCTYPE html>');
    const hasCSS = content.includes('<style>') || content.includes('css');
    const hasJS = content.includes('<script>') || content.includes('function');
    
    // Check for app-specific terms
    const matchedTerms = app.verifyTerms.filter(term => 
      content.toLowerCase().includes(term.toLowerCase())
    );
    
    // Check for interactive elements
    const hasButtons = content.includes('<button') || content.includes('btn');
    const hasInputs = content.includes('<input') || content.includes('<textarea');
    const hasContainers = content.includes('container') || content.includes('app');
    
    // Check for PWA files in file manager
    await page.waitForSelector('.file-item, [data-file], .file-entry', { timeout: 5000 }).catch(() => null);
    const fileElements = await page.$$('.file-item, [data-file], .file-entry');
    const fileCount = fileElements.length;
    
    const passed = 
      hasHTML &&
      hasCSS &&
      hasJS &&
      matchedTerms.length >= 1 &&
      hasButtons &&
      contentSize > 3000;
    
    console.log(`   📊 Content: ${contentSize} bytes`);
    console.log(`   🎯 Elements: HTML:${hasHTML?'✅':'❌'} CSS:${hasCSS?'✅':'❌'} JS:${hasJS?'✅':'❌'}`);
    console.log(`   🔍 Terms matched: ${matchedTerms.join(', ')} (${matchedTerms.length}/${app.verifyTerms.length})`);
    console.log(`   📦 Interactive: Buttons:${hasButtons?'✅':'❌'} Inputs:${hasInputs?'✅':'❌'}`);
    console.log(`   📁 Files generated: ${fileCount}`);
    console.log(`   ${passed ? '✅ PASS' : '❌ FAIL'}: ${app.name}`);
    
    return {
      name: app.name,
      type: app.type,
      passed,
      contentSize,
      matchedTerms,
      hasButtons,
      hasInputs,
      fileCount
    };
    
  } catch (error) {
    console.log(`   ❌ FAIL: ${error.message}`);
    return { name: app.name, passed: false, reason: error.message };
  }
}

(async () => {
  const startTime = Date.now();
  
  console.log('\n' + '═'.repeat(80));
  console.log('🚀 TESTING 30 NON-GAME APPS WITH DREAMBUILD');
  console.log('   Verifying diverse app generation capabilities');
  console.log('═'.repeat(80));
  
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: { width: 1400, height: 900 },
    args: ['--no-sandbox']
  });
  
  const page = await browser.newPage();
  
  console.log('\n📱 Opening DreamBuild...');
  await page.goto('https://dreambuild-2024-app.web.app/#/ai-builder', {
    waitUntil: 'networkidle2',
    timeout: 60000
  });
  
  await new Promise(r => setTimeout(r, 5000));
  
  const results = [];
  
  for (let i = 0; i < APPS_TO_TEST.length; i++) {
    const result = await testApp(page, APPS_TO_TEST[i], i);
    results.push(result);
    
    // Reload for next test
    if (i < APPS_TO_TEST.length - 1) {
      await page.reload({ waitUntil: 'networkidle2' });
      await new Promise(r => setTimeout(r, 3000));
    }
  }
  
  const endTime = Date.now();
  const duration = ((endTime - startTime) / 1000 / 60).toFixed(2);
  
  // Final Report
  console.log('\n' + '═'.repeat(80));
  console.log('📊 30 APPS TEST RESULTS');
  console.log('═'.repeat(80));
  
  const passed = results.filter(r => r.passed);
  const failed = results.filter(r => !r.passed);
  const passRate = (passed.length / results.length * 100).toFixed(1);
  
  console.log(`✅ Passed: ${passed.length}/30 (${passRate}%)`);
  console.log(`❌ Failed: ${failed.length}/30`);
  console.log(`⏱️  Duration: ${duration} minutes`);
  
  console.log('\n' + '─'.repeat(80));
  console.log('PASSED APPS:');
  console.log('─'.repeat(80));
  passed.forEach((app, i) => {
    console.log(`✅ ${i + 1}. ${app.name} (${app.type}) - ${app.contentSize} bytes, ${app.fileCount} files`);
  });
  
  if (failed.length > 0) {
    console.log('\n' + '─'.repeat(80));
    console.log('FAILED APPS:');
    console.log('─'.repeat(80));
    failed.forEach((app, i) => {
      console.log(`❌ ${i + 1}. ${app.name} - ${app.reason || 'Unknown error'}`);
    });
  }
  
  console.log('\n' + '═'.repeat(80));
  
  if (passRate >= 90) {
    console.log('╔═══════════════════════════════════════════════════════════════════╗');
    console.log('║                                                                   ║');
    console.log('║  🏆 EXCELLENT - DreamBuild can create diverse apps!              ║');
    console.log('║                                                                   ║');
    console.log(`║  Pass Rate: ${passRate}%                                              ║`);
    console.log('║  DreamBuild successfully generates multiple app types            ║');
    console.log('║                                                                   ║');
    console.log('╚═══════════════════════════════════════════════════════════════════╝');
  } else if (passRate >= 70) {
    console.log('⚠️  GOOD: ' + passRate + '% apps generated correctly');
    console.log('Some improvements needed');
  } else {
    console.log('❌ NEEDS WORK: Only ' + passRate + '% pass rate');
  }
  
  console.log('═'.repeat(80));
  
  // Save detailed results
  const fs = require('fs');
  fs.writeFileSync('30-apps-test-report.json', JSON.stringify(results, null, 2));
  console.log('\n📄 Detailed report saved: 30-apps-test-report.json\n');
  
  await browser.close();
  
  process.exit(passRate >= 90 ? 0 : 1);
})();
