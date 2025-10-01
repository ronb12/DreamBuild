/**
 * Comprehensive DreamBuild Test Suite
 * Tests if DreamBuild can build apps like Cursor can
 * Product of Bradley Virtual Solutions, LLC
 */

const puppeteer = require('puppeteer');

// Test configuration
const TESTS = [
  {
    name: 'Basic Todo App',
    prompt: 'Create a simple todo app',
    expectedFiles: ['index.html', 'styles.css', 'script.js'],
    minFiles: 3,
    expectedFeatures: []
  },
  {
    name: 'Todo App with 5 Features',
    prompt: 'Build a todo app with 5 features',
    expectedFiles: ['index.html', 'styles.css', 'script.js'],
    minFiles: 3,
    minFeatures: 5
  },
  {
    name: 'Todo App with 10 Features',
    prompt: 'Create a todo list app with 10 features',
    expectedFiles: ['index.html', 'styles.css', 'script.js'],
    minFiles: 3,
    minFeatures: 10
  },
  {
    name: 'Todo App with 20 Features',
    prompt: 'Build a todo app with 20 features',
    expectedFiles: ['index.html', 'styles.css', 'script.js'],
    minFiles: 3,
    minFeatures: 20
  },
  {
    name: 'Custom Recipe Manager',
    prompt: 'Build a recipe manager app from scratch',
    expectedFiles: ['index.html', 'styles.css', 'script.js'],
    minFiles: 3,
    expectedFeatures: []
  },
  {
    name: 'Calculator App',
    prompt: 'Create a calculator app',
    expectedFiles: ['index.html', 'styles.css', 'script.js'],
    minFiles: 3,
    expectedFeatures: []
  }
];

const DREAMBUILD_URL = 'https://dreambuild-2024-app.web.app/#/ai-builder';
const TIMEOUT = 60000; // 60 seconds per test

async function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function runTest(browser, test) {
  console.log(`\n${'='.repeat(80)}`);
  console.log(`🧪 TEST: ${test.name}`);
  console.log(`   Prompt: "${test.prompt}"`);
  console.log(`${'='.repeat(80)}`);

  const page = await browser.newPage();
  
  try {
    // Set up console logging
    page.on('console', msg => {
      const text = msg.text();
      if (text.includes('✅') || text.includes('🚀') || text.includes('📋')) {
        console.log(`  Browser: ${text}`);
      }
    });

    // Navigate to DreamBuild
    console.log('📂 Opening DreamBuild AI Builder...');
    await page.goto(DREAMBUILD_URL, { waitUntil: 'networkidle0', timeout: 30000 });
    await wait(3000); // Wait for app to initialize

    // Find and fill the prompt input
    console.log(`📝 Entering prompt: "${test.prompt}"`);
    const promptInput = await page.waitForSelector('textarea[placeholder="Describe what you want to build..."]', { timeout: 10000 });
    await promptInput.click({ clickCount: 3 }); // Select all existing text
    await promptInput.type(test.prompt, { delay: 30 });
    await wait(500);

    // Click generate button
    console.log('🚀 Submitting prompt...');
    const generateButton = await page.waitForSelector('button[data-testid="generate-button"]', { timeout: 5000 });
    await generateButton.click();

    // Wait for generation to complete
    console.log('⏳ Waiting for code generation...');
    await wait(15000); // Give it 15 seconds to generate

    // Check if files were created
    console.log('🔍 Checking generated files...');
    const fileManagerItems = await page.evaluate(() => {
      // Try multiple selectors for file manager
      const selectors = [
        '.file-manager .file-item',
        '[class*="file-item"]',
        '[class*="FileItem"]',
        '.file-list > div',
        '[role="button"]'
      ];
      
      for (const selector of selectors) {
        const items = document.querySelectorAll(selector);
        if (items.length > 0) {
          return Array.from(items).map(item => item.textContent || '').filter(Boolean);
        }
      }
      return [];
    });

    console.log(`📊 Files found: ${fileManagerItems.length}`);
    if (fileManagerItems.length > 0) {
      console.log('📁 File list:', fileManagerItems.slice(0, 10).join(', '));
    }

    // Check for features in the preview
    let featuresFound = 0;
    try {
      featuresFound = await page.evaluate(() => {
        const iframe = document.querySelector('iframe[title*="Preview"], iframe[title*="preview"]');
        if (!iframe) return 0;
        
        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
        const featureChips = iframeDoc.querySelectorAll('.feature-chip');
        return featureChips.length;
      });
      
      if (featuresFound > 0) {
        console.log(`✨ Features detected: ${featuresFound}`);
      }
    } catch (error) {
      console.log('⚠️  Could not check features in preview');
    }

    // Check if preview is showing content
    let previewHasContent = false;
    try {
      previewHasContent = await page.evaluate(() => {
        const iframe = document.querySelector('iframe[title*="Preview"], iframe[title*="preview"]');
        if (!iframe) return false;
        
        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
        const body = iframeDoc.body;
        return body && body.innerHTML.trim().length > 100;
      });
      
      console.log(`🖼️  Preview has content: ${previewHasContent ? '✅ YES' : '❌ NO'}`);
    } catch (error) {
      console.log('⚠️  Could not check preview content');
    }

    // Validate results
    console.log('\n📋 TEST RESULTS:');
    console.log(`   Files Generated: ${fileManagerItems.length >= test.minFiles ? '✅' : '❌'} (${fileManagerItems.length} >= ${test.minFiles})`);
    
    if (test.minFeatures) {
      console.log(`   Features Count: ${featuresFound >= test.minFeatures ? '✅' : '❌'} (${featuresFound} >= ${test.minFeatures})`);
    }
    
    console.log(`   Preview Working: ${previewHasContent ? '✅' : '❌'}`);

    const passed = fileManagerItems.length >= test.minFiles && 
                   (!test.minFeatures || featuresFound >= test.minFeatures) &&
                   previewHasContent;

    console.log(`\n${passed ? '✅ TEST PASSED' : '❌ TEST FAILED'}: ${test.name}`);
    
    await page.close();
    return { passed, filesCount: fileManagerItems.length, featuresCount: featuresFound };

  } catch (error) {
    console.error(`❌ Test failed with error: ${error.message}`);
    console.error(`   Stack: ${error.stack}`);
    await page.close();
    return { passed: false, error: error.message };
  }
}

async function runComprehensiveTest() {
  console.log(`
╔═══════════════════════════════════════════════════════════════════════════╗
║                                                                           ║
║           🚀 DREAMBUILD COMPREHENSIVE TEST SUITE 🚀                       ║
║                                                                           ║
║  Testing if DreamBuild can build apps like Cursor can                    ║
║  Product of Bradley Virtual Solutions, LLC                               ║
║                                                                           ║
╚═══════════════════════════════════════════════════════════════════════════╝
`);

  const browser = await puppeteer.launch({
    headless: false, // Show browser for visual confirmation
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-web-security',
      '--disable-features=IsolateOrigins,site-per-process'
    ]
  });

  const results = [];

  for (const test of TESTS) {
    const result = await runTest(browser, test);
    results.push({ test: test.name, ...result });
    await wait(2000); // Pause between tests
  }

  await browser.close();

  // Print summary
  console.log(`\n\n${'='.repeat(80)}`);
  console.log('📊 COMPREHENSIVE TEST SUMMARY');
  console.log(`${'='.repeat(80)}\n`);

  const passed = results.filter(r => r.passed).length;
  const total = results.length;
  const passRate = (passed / total * 100).toFixed(1);

  results.forEach(result => {
    const status = result.passed ? '✅ PASS' : '❌ FAIL';
    const files = result.filesCount ? ` (${result.filesCount} files` : '';
    const features = result.featuresCount ? `, ${result.featuresCount} features)` : ')';
    console.log(`${status} - ${result.test}${files}${features}`);
  });

  console.log(`\n${'─'.repeat(80)}`);
  console.log(`Total Tests: ${total}`);
  console.log(`Passed: ${passed}`);
  console.log(`Failed: ${total - passed}`);
  console.log(`Pass Rate: ${passRate}%`);
  console.log(`${'─'.repeat(80)}\n`);

  if (passRate >= 80) {
    console.log(`
╔═══════════════════════════════════════════════════════════════════════════╗
║                                                                           ║
║  🎉 SUCCESS! DreamBuild CAN build apps like Cursor! 🎉                   ║
║                                                                           ║
║  Pass Rate: ${passRate}%                                                      ║
║  DreamBuild is ready for production use!                                 ║
║                                                                           ║
╚═══════════════════════════════════════════════════════════════════════════╝
`);
  } else if (passRate >= 50) {
    console.log(`
╔═══════════════════════════════════════════════════════════════════════════╗
║                                                                           ║
║  ⚠️  PARTIAL SUCCESS - DreamBuild needs improvements                     ║
║                                                                           ║
║  Pass Rate: ${passRate}%                                                      ║
║  Some features are working, but more work is needed.                     ║
║                                                                           ║
╚═══════════════════════════════════════════════════════════════════════════╝
`);
  } else {
    console.log(`
╔═══════════════════════════════════════════════════════════════════════════╗
║                                                                           ║
║  ❌ FAILED - DreamBuild needs significant work                           ║
║                                                                           ║
║  Pass Rate: ${passRate}%                                                      ║
║  Major issues need to be addressed.                                      ║
║                                                                           ║
╚═══════════════════════════════════════════════════════════════════════════╝
`);
  }

  console.log('\n✅ Test complete!\n');
}

// Run the comprehensive test
runComprehensiveTest().catch(error => {
  console.error('❌ Test suite failed:', error);
  process.exit(1);
});

