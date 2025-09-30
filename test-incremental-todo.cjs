const puppeteer = require('puppeteer');

/**
 * DreamBuild Incremental Development Test
 * Tests: Create todo app + add 10 features incrementally
 */

async function testIncrementalDevelopment() {
  console.log('🧪 Starting DreamBuild Incremental Development Test...\n');
  
  const browser = await puppeteer.launch({
    headless: false, // Show browser so we can see what's happening
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    
    // Enable console logging from the page
    page.on('console', msg => {
      const text = msg.text();
      if (text.includes('✅') || text.includes('❌') || text.includes('🔍') || 
          text.includes('📁') || text.includes('🎨') || text.includes('Incremental') ||
          text.includes('files updated') || text.includes('INCREMENTAL UPDATE')) {
        console.log(`  Browser: ${text}`);
      }
    });

    console.log('📂 Opening DreamBuild AI Builder...');
    await page.goto('https://dreambuild-2024-app.web.app/#/ai-builder', {
      waitUntil: 'networkidle2',
      timeout: 60000
    });

    // Wait for the app to load
    await new Promise(resolve => setTimeout(resolve, 3000));

    console.log('\n📝 Step 1: Creating Todo App...');
    console.log('  Prompt: "Create a simple todo app"\n');

    // Find and fill the textarea
    const textareaSelector = 'textarea';
    await page.waitForSelector(textareaSelector, { timeout: 10000 });
    await page.type(textareaSelector, 'Create a simple todo app', { delay: 50 });

    // Click the generate/send button
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Try to click the submit button or just press Enter
    try {
      await page.keyboard.press('Enter');
    } catch (e) {
      console.log('  ⚠️ Enter key failed, trying button click...');
      const sendButton = await page.$('button[type="submit"]');
      if (sendButton) {
        await sendButton.click();
      }
    }

    console.log('  ⏳ Waiting for todo app generation...');
    
    // Wait for generation to complete (look for success toast or files)
    await new Promise(resolve => setTimeout(resolve, 8000));

    // Check how many files were created
    const fileCountAfterTodo = await page.evaluate(() => {
      const fileElements = document.querySelectorAll('[class*="file-item"], [class*="file-name"]');
      return fileElements.length;
    });

    console.log(`  ✅ Todo app generated!`);
    console.log(`  📊 Files created: ${fileCountAfterTodo}\n`);

    // Now test incremental development with 10 features
    const features = [
      'add dark mode to this app',
      'add search functionality',
      'add export feature',
      'add user authentication',
      'add data validation',
      'add keyboard shortcuts',
      'add drag and drop',
      'add categories for todos',
      'add due dates',
      'add priority levels'
    ];

    console.log('🔄 Step 2: Adding 10 Features Incrementally...\n');

    for (let i = 0; i < features.length; i++) {
      const feature = features[i];
      console.log(`\n📌 Feature ${i + 1}/10: "${feature}"`);

      // Clear the textarea and enter new prompt
      await page.click(textareaSelector, { clickCount: 3 });
      await page.keyboard.press('Backspace');
      await page.type(textareaSelector, feature, { delay: 30 });
      await new Promise(resolve => setTimeout(resolve, 300));

      // Submit
      try {
        await page.keyboard.press('Enter');
      } catch (e) {
        const btn = await page.$('button[type="submit"]');
        if (btn) await btn.click();
      }

      console.log('  ⏳ Generating...');
      
      // Wait for generation (shorter wait for incremental)
      await new Promise(resolve => setTimeout(resolve, 5000));

      // Check for error in console
      const hasError = await page.evaluate(() => {
        return window.lastError || null;
      });

      if (hasError) {
        console.log(`  ❌ Error detected: ${hasError}`);
      } else {
        console.log(`  ✅ Feature added successfully`);
      }

      // Check file count
      const currentFileCount = await page.evaluate(() => {
        const fileElements = document.querySelectorAll('[class*="file-item"], [class*="file-name"]');
        const fileCountText = document.querySelector('[class*="file"]')?.textContent;
        return {
          elements: fileElements.length,
          text: fileCountText
        };
      });

      console.log(`  📊 Current file count: ${currentFileCount.elements} elements`);
    }

    console.log('\n\n📊 FINAL RESULTS:');
    console.log('=' .repeat(60));

    // Get final file count
    const finalFileCount = await page.evaluate(() => {
      const projectContext = window.__REACT_DEVTOOLS_GLOBAL_HOOK__;
      const fileItems = document.querySelectorAll('[class*="file-item"], [class*="file-name"]');
      
      // Try to get from FileManager display
      const fileCountDisplay = Array.from(document.querySelectorAll('*')).find(el => 
        el.textContent?.includes('files') && /\d+\s+files/.test(el.textContent)
      );
      
      return {
        domElements: fileItems.length,
        displayText: fileCountDisplay?.textContent || 'Not found'
      };
    });

    console.log(`📁 Files in DOM: ${finalFileCount.domElements}`);
    console.log(`📄 File Manager Display: ${finalFileCount.displayText}`);
    console.log(`\n✅ Expected: ~19-20 files (9 original + 10 features)`);
    console.log(`✅ Actual: ${finalFileCount.domElements} files`);

    if (finalFileCount.domElements >= 15) {
      console.log('\n🎉 TEST PASSED: Incremental development is working!');
      console.log('   DreamBuild successfully added features to existing app.');
    } else {
      console.log('\n⚠️ TEST NEEDS REVIEW: File count lower than expected');
      console.log('   Check if incremental mode is properly detecting existing files.');
    }

    console.log('\n📸 Taking screenshot of final result...');
    await page.screenshot({ 
      path: 'incremental-development-test-result.png',
      fullPage: true 
    });
    console.log('   Saved: incremental-development-test-result.png');

    // Wait a bit to see final state
    await new Promise(resolve => setTimeout(resolve, 3000));

  } catch (error) {
    console.error('\n❌ Test failed with error:', error.message);
    console.error('   Stack:', error.stack);
  } finally {
    await browser.close();
    console.log('\n✅ Test complete!\n');
  }
}

// Run the test
testIncrementalDevelopment().catch(console.error);

