/**
 * Quick DreamBuild Validation Test
 * Tests one app creation to validate functionality
 */

const puppeteer = require('puppeteer');

async function quickTest() {
  console.log('\n🚀 DREAMBUILD QUICK VALIDATION TEST\n');
  
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  
  try {
    // Navigate
    console.log('📂 Opening DreamBuild...');
    await page.goto('https://dreambuild-2024-app.web.app/#/ai-builder', { waitUntil: 'networkidle0', timeout: 30000 });
    await new Promise(r => setTimeout(r, 5000));

    // Type prompt
    console.log('📝 Entering prompt...');
    const textarea = await page.waitForSelector('textarea[placeholder="Describe what you want to build..."]', { timeout: 10000 });
    await textarea.type('Create a todo app with 10 features', { delay: 30 });
    await new Promise(r => setTimeout(r, 500));

    // Click generate
    console.log('🚀 Generating...');
    const button = await page.waitForSelector('button[data-testid="generate-button"]');
    await button.click();
    
    // Wait and check results
    console.log('⏳ Waiting for generation (20 seconds)...');
    await new Promise(r => setTimeout(r, 20000));

    // Check if preview has content
    const hasPreview = await page.evaluate(() => {
      const iframe = document.querySelector('iframe');
      if (!iframe) return false;
      const doc = iframe.contentDocument || iframe.contentWindow.document;
      return doc.body && doc.body.innerHTML.trim().length > 100;
    });

    console.log(`\n✅ TEST RESULT: ${hasPreview ? 'PASS - App generated!' : 'FAIL - No preview content'}\n`);
    
    await new Promise(r => setTimeout(r, 5000)); // Keep browser open to see result
    
  } catch (error) {
    console.error('❌ Test error:', error.message);
  }

  await browser.close();
}

quickTest();

