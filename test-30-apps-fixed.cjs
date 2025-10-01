const puppeteer = require('puppeteer');

const APPS_TO_TEST = [
  // Productivity (6)
  { name: 'Todo List', prompt: 'Create todo list app', verifyTerms: ['todo', 'task'] },
  { name: 'Calendar', prompt: 'Build calendar app', verifyTerms: ['calendar', 'event'] },
  { name: 'Note Taking', prompt: 'Create note app', verifyTerms: ['note', 'text'] },
  { name: 'Task Manager', prompt: 'Build task manager', verifyTerms: ['task', 'manage'] },
  { name: 'Timer', prompt: 'Create timer app', verifyTerms: ['timer', 'time'] },
  { name: 'Habit Tracker', prompt: 'Build habit tracker', verifyTerms: ['habit', 'track'] },
  
  // Business (5)
  { name: 'Calculator', prompt: 'Create calculator', verifyTerms: ['calculator', 'number'] },
  { name: 'Expense Tracker', prompt: 'Build expense tracker', verifyTerms: ['expense', 'money'] },
  { name: 'Invoice', prompt: 'Create invoice app', verifyTerms: ['invoice', 'bill'] },
  { name: 'Budget', prompt: 'Build budget app', verifyTerms: ['budget', 'money'] },
  { name: 'Currency', prompt: 'Create currency converter', verifyTerms: ['currency', 'convert'] },
  
  // Social (4)
  { name: 'Chat', prompt: 'Build chat app', verifyTerms: ['chat', 'message'] },
  { name: 'Forum', prompt: 'Create forum', verifyTerms: ['forum', 'post'] },
  { name: 'Blog', prompt: 'Build blog', verifyTerms: ['blog', 'article'] },
  { name: 'Poll', prompt: 'Create poll app', verifyTerms: ['poll', 'vote'] },
  
  // Ecommerce (3)
  { name: 'Shopping Cart', prompt: 'Build shopping cart', verifyTerms: ['cart', 'product'] },
  { name: 'Catalog', prompt: 'Create product catalog', verifyTerms: ['product', 'catalog'] },
  { name: 'Wishlist', prompt: 'Build wishlist', verifyTerms: ['wishlist', 'item'] },
  
  // Health (3)
  { name: 'Workout', prompt: 'Create workout tracker', verifyTerms: ['workout', 'exercise'] },
  { name: 'Calorie', prompt: 'Build calorie counter', verifyTerms: ['calorie', 'food'] },
  { name: 'Water', prompt: 'Create water tracker', verifyTerms: ['water', 'drink'] },
  
  // Education (3)
  { name: 'Flashcards', prompt: 'Build flashcard app', verifyTerms: ['flashcard', 'card'] },
  { name: 'Quiz', prompt: 'Create quiz app', verifyTerms: ['quiz', 'question'] },
  { name: 'Dictionary', prompt: 'Build dictionary', verifyTerms: ['dictionary', 'word'] },
  
  // Utilities (3)
  { name: 'QR Code', prompt: 'Create QR generator', verifyTerms: ['qr', 'code'] },
  { name: 'Password', prompt: 'Build password generator', verifyTerms: ['password', 'generate'] },
  { name: 'Converter', prompt: 'Create unit converter', verifyTerms: ['convert', 'unit'] },
  
  // Lifestyle (3)
  { name: 'Recipe', prompt: 'Build recipe app', verifyTerms: ['recipe', 'food'] },
  { name: 'Weather', prompt: 'Create weather app', verifyTerms: ['weather', 'temperature'] },
  { name: 'Music', prompt: 'Build music player', verifyTerms: ['music', 'play'] }
];

async function testApp(page, app, index) {
  console.log(`\n📱 Test ${index + 1}/30: ${app.name}`);
  console.log(`   Prompt: "${app.prompt}"`);
  
  try {
    const textarea = await page.waitForSelector('textarea[placeholder="Describe what you want to build..."]', { timeout: 10000 });
    await textarea.click({ clickCount: 3 });
    await textarea.type(app.prompt, { delay: 30 });
    await new Promise(r => setTimeout(r, 500));
    
    // Try multiple ways to submit
    try {
      await page.keyboard.press('Enter');
    } catch {
      const btn = await page.$('button[type="submit"], button:has-text("Send"), button:has-text("Generate")');
      if (btn) await btn.click();
    }
    
    console.log('   ⏳ Generating...');
    await new Promise(r => setTimeout(r, 12000));
    
    const iframe = await page.$('iframe[title="App Preview"]');
    if (!iframe) {
      console.log('   ❌ FAIL: No preview');
      return { name: app.name, passed: false };
    }
    
    const frame = await iframe.contentFrame();
    const content = await frame.content();
    const size = content.length;
    
    const matched = app.verifyTerms.filter(term => content.toLowerCase().includes(term));
    const hasInteractive = content.includes('<button') || content.includes('<input');
    
    const passed = size > 2000 && matched.length >= 1 && hasInteractive;
    
    console.log(`   📊 ${size} bytes | Terms: ${matched.length}/${app.verifyTerms.length} | Interactive: ${hasInteractive?'✅':'❌'}`);
    console.log(`   ${passed ? '✅ PASS' : '❌ FAIL'}: ${app.name}`);
    
    return { name: app.name, passed, size, matched: matched.length };
  } catch (error) {
    console.log(`   ❌ FAIL: ${error.message}`);
    return { name: app.name, passed: false };
  }
}

(async () => {
  const startTime = Date.now();
  
  console.log('\n' + '═'.repeat(80));
  console.log('🚀 TESTING 30 NON-GAME APPS');
  console.log('═'.repeat(80));
  
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: { width: 1400, height: 900 }
  });
  
  const page = await browser.newPage();
  
  await page.goto('https://dreambuild-2024-app.web.app/#/ai-builder', {
    waitUntil: 'networkidle2',
    timeout: 60000
  });
  
  await new Promise(r => setTimeout(r, 5000));
  
  const results = [];
  
  for (let i = 0; i < APPS_TO_TEST.length; i++) {
    const result = await testApp(page, APPS_TO_TEST[i], i);
    results.push(result);
    
    if (i < APPS_TO_TEST.length - 1) {
      await page.reload({ waitUntil: 'networkidle2' });
      await new Promise(r => setTimeout(r, 2000));
    }
  }
  
  const duration = ((Date.now() - startTime) / 60000).toFixed(2);
  const passed = results.filter(r => r.passed).length;
  const passRate = (passed / 30 * 100).toFixed(1);
  
  console.log('\n' + '═'.repeat(80));
  console.log('📊 RESULTS');
  console.log('═'.repeat(80));
  console.log(`✅ Passed: ${passed}/30 (${passRate}%)`);
  console.log(`⏱️  Duration: ${duration} min`);
  
  console.log('\n✅ PASSED:');
  results.filter(r => r.passed).forEach((r, i) => {
    console.log(`  ${i+1}. ${r.name} (${r.size} bytes, ${r.matched} terms)`);
  });
  
  if (results.filter(r => !r.passed).length > 0) {
    console.log('\n❌ FAILED:');
    results.filter(r => !r.passed).forEach((r, i) => {
      console.log(`  ${i+1}. ${r.name}`);
    });
  }
  
  console.log('\n' + '═'.repeat(80));
  if (passRate >= 90) {
    console.log('🏆 EXCELLENT! DreamBuild builds diverse apps successfully!');
  }
  console.log('═'.repeat(80));
  
  require('fs').writeFileSync('30-apps-results.json', JSON.stringify(results, null, 2));
  
  await browser.close();
  process.exit(passRate >= 90 ? 0 : 1);
})();
