/**
 * DreamBuild Diagnostic Test
 * Deep inspection of what's actually happening
 */

const puppeteer = require('puppeteer');

async function diagnosticTest() {
  console.log('\n🔍 DREAMBUILD DIAGNOSTIC TEST - Deep Inspection\n');
  
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  
  // Capture ALL console logs
  page.on('console', msg => {
    const type = msg.type();
    const text = msg.text();
    if (type === 'error') {
      console.log(`  ❌ Browser Error: ${text}`);
    } else if (text.includes('❌') || text.includes('⚠️')) {
      console.log(`  ${text}`);
    } else if (text.includes('✅') || text.includes('🚀') || text.includes('📋') || text.includes('🎯')) {
      console.log(`  ${text}`);
    }
  });

  try {
    console.log('📂 Step 1: Opening DreamBuild...');
    await page.goto('https://dreambuild-2024-app.web.app/#/ai-builder', { 
      waitUntil: 'networkidle0', 
      timeout: 30000 
    });
    await new Promise(r => setTimeout(r, 5000));

    console.log('\n📝 Step 2: Entering prompt...');
    const textarea = await page.waitForSelector('textarea[placeholder="Describe what you want to build..."]', { timeout: 10000 });
    await textarea.type('Create a simple todo app', { delay: 30 });
    await new Promise(r => setTimeout(r, 500));

    console.log('\n🚀 Step 3: Clicking generate...');
    const button = await page.waitForSelector('button[data-testid="generate-button"]');
    await button.click();
    
    console.log('\n⏳ Step 4: Waiting for generation (20 seconds)...');
    await new Promise(r => setTimeout(r, 20000));

    console.log('\n🔍 Step 5: Inspecting results...\n');

    // Check files in project context
    const projectFiles = await page.evaluate(() => {
      const ctx = window.__REACT_CONTEXT__;
      if (ctx && ctx.currentProject && ctx.currentProject.files) {
        return Object.keys(ctx.currentProject.files);
      }
      return null;
    });

    console.log('📁 Files in ProjectContext:', projectFiles);

    // Check files in file manager UI
    const fileManagerElements = await page.evaluate(() => {
      const items = document.querySelectorAll('[class*="file"], [data-file], .file-item, [role="button"]');
      return Array.from(items).slice(0, 20).map(el => ({
        text: el.textContent?.substring(0, 50),
        class: el.className
      }));
    });

    console.log('📁 File Manager Elements:', fileManagerElements.length, 'items');
    if (fileManagerElements.length > 0) {
      console.log('   First 5:', fileManagerElements.slice(0, 5));
    }

    // Check iframe existence and content
    const iframeCheck = await page.evaluate(() => {
      const iframe = document.querySelector('iframe');
      if (!iframe) return { exists: false };
      
      const doc = iframe.contentDocument || iframe.contentWindow.document;
      if (!doc) return { exists: true, accessible: false };
      
      return {
        exists: true,
        accessible: true,
        htmlLength: doc.documentElement.innerHTML.length,
        bodyLength: doc.body.innerHTML.length,
        hasForm: !!doc.getElementById('add-todo-form'),
        hasScript: doc.querySelectorAll('script').length,
        hasStyle: doc.querySelectorAll('style').length
      };
    });

    console.log('\n🖼️  Preview Iframe:', iframeCheck);

    // Check for JavaScript errors in iframe
    const iframeErrors = await page.evaluate(() => {
      const iframe = document.querySelector('iframe');
      if (!iframe) return [];
      
      const errors = [];
      const doc = iframe.contentDocument || iframe.contentWindow.document;
      
      // Try to execute a test script
      try {
        const scriptContent = doc.querySelector('script')?.textContent || '';
        return { hasScript: scriptContent.length > 0, scriptLength: scriptContent.length };
      } catch (e) {
        return { error: e.message };
      }
    });

    console.log('📜 Script in iframe:', iframeErrors);

    // Take a screenshot
    await page.screenshot({ path: 'dreambuild-diagnostic-test.png', fullPage: true });
    console.log('\n📸 Screenshot saved: dreambuild-diagnostic-test.png');

    console.log('\n' + '='.repeat(80));
    console.log('🎯 DIAGNOSTIC SUMMARY:');
    console.log('='.repeat(80));
    console.log(`Files Generated: ${projectFiles ? projectFiles.length : 'Unknown'}`);
    console.log(`Preview Exists: ${iframeCheck.exists ? '✅' : '❌'}`);
    console.log(`Preview Accessible: ${iframeCheck.accessible ? '✅' : '❌'}`);
    console.log(`Preview Has Content: ${iframeCheck.bodyLength > 100 ? '✅' : '❌'} (${iframeCheck.bodyLength || 0} bytes)`);
    console.log(`Has Form: ${iframeCheck.hasForm ? '✅' : '❌'}`);
    console.log(`Has Scripts: ${iframeCheck.hasScript || 0}`);
    console.log(`Has Styles: ${iframeCheck.hasStyle || 0}`);
    console.log('='.repeat(80) + '\n');

    await new Promise(r => setTimeout(r, 3000));

  } catch (error) {
    console.error('\n❌ Diagnostic test failed:', error.message);
    console.error('Stack:', error.stack);
  }

  await browser.close();
  console.log('✅ Diagnostic complete\n');
}

diagnosticTest();

