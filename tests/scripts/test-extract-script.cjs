/**
 * Extract the generated script for inspection
 */

const puppeteer = require('puppeteer');
const fs = require('fs');

async function extractScript() {
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  
  try {
    await page.goto('https://dreambuild-2024-app.web.app/#/ai-builder', { waitUntil: 'networkidle0' });
    await new Promise(r => setTimeout(r, 5000));

    const textarea = await page.waitForSelector('textarea[placeholder="Describe what you want to build..."]');
    await textarea.type('Create a todo app with 5 features', { delay: 30 });
    const button = await page.waitForSelector('button[data-testid="generate-button"]');
    await button.click();
    await new Promise(r => setTimeout(r, 20000));

    await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const previewBtn = buttons.find(btn => btn.textContent.includes('Preview'));
      if (previewBtn) previewBtn.click();
    });
    await new Promise(r => setTimeout(r, 2000));

    const scriptContent = await page.evaluate(() => {
      const iframe = document.querySelector('iframe[title="Live Preview"]');
      const doc = iframe.contentDocument;
      const script = doc.querySelector('script');
      return script ? script.textContent : null;
    });

    if (scriptContent) {
      fs.writeFileSync('extracted-todo-script.js', scriptContent);
      console.log('✅ Script extracted to: extracted-todo-script.js');
      console.log(`📏 Script length: ${scriptContent.length} characters`);
      
      // Try to find syntax errors
      console.log('\n🔍 Checking for potential syntax errors...\n');
      
      const lines = scriptContent.split('\n');
      lines.forEach((line, i) => {
        if (line.trim() === '' && lines[i-1]?.includes('${')) {
          console.log(`⚠️  Line ${i + 1}: Empty line after template literal`);
        }
        if (line.includes('${') && !line.includes('`')) {
          console.log(`⚠️  Line ${i + 1}: Unprocessed template literal: ${line.substring(0, 80)}`);
        }
      });
    }

    await new Promise(r => setTimeout(r, 2000));

  } catch (error) {
    console.error('❌ Error:', error.message);
  }

  await browser.close();
}

extractScript();

