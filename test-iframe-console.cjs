/**
 * Test to capture iframe console logs
 */

const puppeteer = require('puppeteer');

async function testIframeConsole() {
  console.log('\n🔍 IFRAME CONSOLE LOG TEST\n');
  
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  
  try {
    await page.goto('https://dreambuild-2024-app.web.app/#/ai-builder', { waitUntil: 'networkidle0' });
    await new Promise(r => setTimeout(r, 5000));

    // Generate app
    const textarea = await page.waitForSelector('textarea[placeholder="Describe what you want to build..."]');
    await textarea.type('Create a todo app with 5 features', { delay: 30 });
    const button = await page.waitForSelector('button[data-testid="generate-button"]');
    await button.click();
    await new Promise(r => setTimeout(r, 20000));

    // Switch to preview
    await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const previewBtn = buttons.find(btn => btn.textContent.includes('Preview'));
      if (previewBtn) previewBtn.click();
    });
    await new Promise(r => setTimeout(r, 2000));

    // Capture iframe console logs
    console.log('\n📜 IFRAME CONSOLE LOGS:\n');
    const iframeLogs = await page.evaluate(() => {
      const iframe = document.querySelector('iframe[title="Live Preview"]');
      if (!iframe) return ['No iframe found'];
      
      const doc = iframe.contentDocument;
      if (!doc) return ['iframe not accessible'];
      
      // Get the script content
      const script = doc.querySelector('script');
      if (!script) return ['No script tag found'];
      
      const scriptContent = script.textContent;
      
      // Check for key elements
      const checks = {
        scriptLength: scriptContent.length,
        hasTodoManager: scriptContent.includes('class TodoManager'),
        hasTodoUI: scriptContent.includes('class TodoUI'),
        hasInitializeApp: scriptContent.includes('function initializeApp'),
        hasFormListener: scriptContent.includes('addEventListener(\'submit\''),
        scriptStart: scriptContent.substring(0, 200),
        scriptEnd: scriptContent.substring(scriptContent.length - 200)
      };
      
      return checks;
    });

    console.log(JSON.stringify(iframeLogs, null, 2));

    // Try to manually execute initializeApp
    console.log('\n🧪 Attempting to manually call initializeApp()...\n');
    const manualInit = await page.evaluate(() => {
      const iframe = document.querySelector('iframe[title="Live Preview"]');
      const win = iframe.contentWindow;
      
      if (typeof win.initializeApp === 'function') {
        win.initializeApp();
        return { called: true, exists: true };
      } else if (typeof win.todoApp !== 'undefined') {
        return { called: false, exists: true, alreadyInit: true };
      } else {
        return { called: false, exists: false };
      }
    });

    console.log('Manual Init:', manualInit);

    await new Promise(r => setTimeout(r, 5000));

  } catch (error) {
    console.error('❌ Error:', error.message);
  }

  await browser.close();
}

testIframeConsole();

