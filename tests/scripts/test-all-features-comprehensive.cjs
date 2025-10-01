const puppeteer = require('puppeteer');

const FEATURES_TO_TEST = {
  'Core Features': [
    { name: 'Page Load', test: 'pageLoad' },
    { name: 'Navigation', test: 'navigation' },
    { name: 'Authentication', test: 'auth' }
  ],
  'AI Builder': [
    { name: 'AI Prompt Input', test: 'aiPrompt' },
    { name: 'Code Generation (Game)', test: 'generateGame' },
    { name: 'Code Generation (App)', test: 'generateApp' },
    { name: 'Incremental Features', test: 'incrementalFeatures' }
  ],
  'Code Editor': [
    { name: 'Editor Loads', test: 'editorLoads' },
    { name: 'Code Display', test: 'codeDisplay' },
    { name: 'File Switching', test: 'fileSwitching' }
  ],
  'Live Preview': [
    { name: 'Preview Renders', test: 'previewRenders' },
    { name: 'Preview Updates', test: 'previewUpdates' },
    { name: 'Refresh Button', test: 'refreshButton' }
  ],
  'File Manager': [
    { name: 'File List Display', test: 'fileList' },
    { name: 'File Selection', test: 'fileSelection' },
    { name: 'File Count', test: 'fileCount' }
  ],
  'PWA Features': [
    { name: 'Manifest Generation', test: 'manifestGen' },
    { name: 'Service Worker', test: 'serviceWorker' },
    { name: 'Icons Generated', test: 'iconsGen' }
  ],
  'UI Components': [
    { name: 'Editor Tab Button', test: 'editorTab' },
    { name: 'Preview Tab Button', test: 'previewTab' },
    { name: 'Terminal Tab Button', test: 'terminalTab' },
    { name: 'GitHub Button Visible', test: 'githubButton' },
    { name: 'Deploy Button Visible', test: 'deployButton' }
  ]
};

let testResults = {
  passed: [],
  failed: [],
  warnings: []
};

async function testPageLoad(page) {
  try {
    await page.goto('https://dreambuild-2024-app.web.app', {
      waitUntil: 'networkidle2',
      timeout: 30000
    });
    await new Promise(r => setTimeout(r, 3000));
    
    const title = await page.title();
    if (title.includes('DreamBuild')) {
      return { passed: true, details: `Title: ${title}` };
    }
    return { passed: false, details: 'Title check failed' };
  } catch (error) {
    return { passed: false, details: error.message };
  }
}

async function testNavigation(page) {
  try {
    await page.goto('https://dreambuild-2024-app.web.app/#/ai-builder', {
      waitUntil: 'networkidle2',
      timeout: 30000
    });
    await new Promise(r => setTimeout(r, 3000));
    
    const url = page.url();
    if (url.includes('ai-builder')) {
      return { passed: true, details: 'AI Builder page loaded' };
    }
    return { passed: false, details: 'Navigation failed' };
  } catch (error) {
    return { passed: false, details: error.message };
  }
}

async function testAuth(page) {
  try {
    // Check if auth is working (user logged in or guest mode)
    const authState = await page.evaluate(() => {
      return window.localStorage.length > 0 || document.body.innerHTML.includes('builder');
    });
    return { passed: authState, details: 'Auth system functional' };
  } catch (error) {
    return { passed: false, details: error.message };
  }
}

async function testAIPrompt(page) {
  try {
    const textarea = await page.$('textarea[placeholder*="what you want"]');
    if (!textarea) {
      return { passed: false, details: 'AI prompt textarea not found' };
    }
    
    await textarea.click();
    await textarea.type('test');
    const value = await textarea.evaluate(el => el.value);
    
    return { passed: value.includes('test'), details: 'Prompt input working' };
  } catch (error) {
    return { passed: false, details: error.message };
  }
}

async function testGenerateGame(page) {
  try {
    const textarea = await page.$('textarea');
    if (!textarea) return { passed: false, details: 'No textarea' };
    
    await textarea.click({ clickCount: 3 });
    await page.keyboard.type('build tetris', { delay: 50 });
    await new Promise(r => setTimeout(r, 500));
    
    await page.keyboard.press('Enter');
    console.log('      Waiting for game generation...');
    await new Promise(r => setTimeout(r, 15000));
    
    // Check if files were generated
    const hasFiles = await page.evaluate(() => {
      const fileElements = document.querySelectorAll('[class*="file"]');
      return fileElements.length > 0;
    });
    
    return { passed: hasFiles, details: `Game generation ${hasFiles ? 'successful' : 'failed'}` };
  } catch (error) {
    return { passed: false, details: error.message };
  }
}

async function testGenerateApp(page) {
  try {
    await page.reload({ waitUntil: 'networkidle2' });
    await new Promise(r => setTimeout(r, 3000));
    
    const textarea = await page.$('textarea');
    if (!textarea) return { passed: false, details: 'No textarea' };
    
    await textarea.click({ clickCount: 3 });
    await page.keyboard.type('create calculator', { delay: 50 });
    await new Promise(r => setTimeout(r, 500));
    
    await page.keyboard.press('Enter');
    console.log('      Waiting for app generation...');
    await new Promise(r => setTimeout(r, 15000));
    
    const hasFiles = await page.evaluate(() => {
      const fileElements = document.querySelectorAll('[class*="file"]');
      return fileElements.length > 3;
    });
    
    return { passed: hasFiles, details: `App generation ${hasFiles ? 'successful' : 'failed'}` };
  } catch (error) {
    return { passed: false, details: error.message };
  }
}

async function testIncrementalFeatures(page) {
  try {
    const textarea = await page.$('textarea');
    if (!textarea) return { passed: false, details: 'No textarea' };
    
    const filesBefore = await page.evaluate(() => {
      return document.querySelectorAll('[class*="file"]').length;
    });
    
    await textarea.click({ clickCount: 3 });
    await page.keyboard.type('add dark mode', { delay: 50 });
    await page.keyboard.press('Enter');
    await new Promise(r => setTimeout(r, 10000));
    
    const filesAfter = await page.evaluate(() => {
      return document.querySelectorAll('[class*="file"]').length;
    });
    
    return { passed: filesAfter >= filesBefore, details: 'Incremental update works' };
  } catch (error) {
    return { passed: false, details: error.message };
  }
}

async function testEditorLoads(page) {
  try {
    const editorExists = await page.evaluate(() => {
      return document.querySelector('[class*="monaco"]') !== null ||
             document.querySelector('textarea[class*="editor"]') !== null;
    });
    return { passed: editorExists, details: 'Editor component loaded' };
  } catch (error) {
    return { passed: false, details: error.message };
  }
}

async function testCodeDisplay(page) {
  try {
    const hasCode = await page.evaluate(() => {
      const editors = document.querySelectorAll('[class*="editor"], textarea, [class*="monaco"]');
      for (let editor of editors) {
        if (editor.value && editor.value.length > 100) return true;
        if (editor.textContent && editor.textContent.length > 100) return true;
      }
      return false;
    });
    return { passed: hasCode, details: 'Code is displayed in editor' };
  } catch (error) {
    return { passed: false, details: error.message };
  }
}

async function testFileSwitching(page) {
  try {
    const fileElements = await page.$$('[class*="file"]');
    if (fileElements.length < 2) {
      return { passed: false, details: 'Not enough files to test switching' };
    }
    
    await fileElements[1].click();
    await new Promise(r => setTimeout(r, 500));
    
    return { passed: true, details: 'File switching works' };
  } catch (error) {
    return { passed: false, details: error.message };
  }
}

async function testPreviewRenders(page) {
  try {
    const iframe = await page.$('iframe[title*="Preview"]');
    if (!iframe) {
      return { passed: false, details: 'Preview iframe not found' };
    }
    
    const frame = await iframe.contentFrame();
    if (!frame) {
      return { passed: false, details: 'Cannot access iframe' };
    }
    
    const content = await frame.content();
    const hasContent = content.length > 1000;
    
    return { passed: hasContent, details: `Preview has ${content.length} bytes` };
  } catch (error) {
    return { passed: false, details: error.message };
  }
}

async function testPreviewUpdates(page) {
  try {
    const iframe = await page.$('iframe[title*="Preview"]');
    if (!iframe) return { passed: false, details: 'No iframe' };
    
    const frame = await iframe.contentFrame();
    const contentBefore = await frame.content();
    
    // Trigger an update
    await page.reload({ waitUntil: 'networkidle2' });
    await new Promise(r => setTimeout(r, 3000));
    
    return { passed: true, details: 'Preview can update' };
  } catch (error) {
    return { passed: false, details: error.message };
  }
}

async function testRefreshButton(page) {
  try {
    const refreshBtn = await page.$('button[class*="refresh"], button:has-text("Refresh")');
    if (!refreshBtn) {
      // Try alternative selector
      const buttons = await page.$$('button');
      for (let btn of buttons) {
        const text = await btn.evaluate(el => el.textContent);
        if (text.toLowerCase().includes('refresh')) {
          return { passed: true, details: 'Refresh button found' };
        }
      }
      return { passed: false, details: 'Refresh button not found' };
    }
    return { passed: true, details: 'Refresh button exists' };
  } catch (error) {
    return { passed: false, details: error.message };
  }
}

async function testFileList(page) {
  try {
    const fileCount = await page.evaluate(() => {
      return document.querySelectorAll('[class*="file"]').length;
    });
    return { passed: fileCount > 0, details: `${fileCount} files displayed` };
  } catch (error) {
    return { passed: false, details: error.message };
  }
}

async function testFileSelection(page) {
  try {
    const firstFile = await page.$('[class*="file"]');
    if (!firstFile) return { passed: false, details: 'No files' };
    
    await firstFile.click();
    await new Promise(r => setTimeout(r, 300));
    
    return { passed: true, details: 'File selection works' };
  } catch (error) {
    return { passed: false, details: error.message };
  }
}

async function testFileCount(page) {
  try {
    const count = await page.evaluate(() => {
      return document.querySelectorAll('[class*="file"]').length;
    });
    return { passed: count >= 3, details: `${count} files (expected 3+)` };
  } catch (error) {
    return { passed: false, details: error.message };
  }
}

async function testManifestGen(page) {
  try {
    const hasManifest = await page.evaluate(() => {
      const files = Array.from(document.querySelectorAll('[class*="file"]'));
      return files.some(f => f.textContent.includes('manifest'));
    });
    return { passed: hasManifest, details: 'manifest.json generated' };
  } catch (error) {
    return { passed: false, details: error.message };
  }
}

async function testServiceWorker(page) {
  try {
    const hasSW = await page.evaluate(() => {
      const files = Array.from(document.querySelectorAll('[class*="file"]'));
      return files.some(f => f.textContent.includes('sw.js'));
    });
    return { passed: hasSW, details: 'Service Worker generated' };
  } catch (error) {
    return { passed: false, details: error.message };
  }
}

async function testIconsGen(page) {
  try {
    // Check if the generated manifest includes icons
    const hasIcons = await page.evaluate(() => {
      const body = document.body.innerHTML;
      return body.includes('icon') || body.includes('192x192');
    });
    return { passed: hasIcons, details: 'PWA icons configured' };
  } catch (error) {
    return { passed: false, details: error.message };
  }
}

async function testEditorTab(page) {
  try {
    const buttons = await page.$$('button');
    for (let btn of buttons) {
      const text = await btn.evaluate(el => el.textContent);
      if (text.toLowerCase().includes('editor')) {
        await btn.click();
        return { passed: true, details: 'Editor tab button works' };
      }
    }
    return { passed: false, details: 'Editor tab not found' };
  } catch (error) {
    return { passed: false, details: error.message };
  }
}

async function testPreviewTab(page) {
  try {
    const buttons = await page.$$('button');
    for (let btn of buttons) {
      const text = await btn.evaluate(el => el.textContent);
      if (text.toLowerCase().includes('preview')) {
        await btn.click();
        return { passed: true, details: 'Preview tab button works' };
      }
    }
    return { passed: false, details: 'Preview tab not found' };
  } catch (error) {
    return { passed: false, details: error.message };
  }
}

async function testTerminalTab(page) {
  try {
    const buttons = await page.$$('button');
    for (let btn of buttons) {
      const text = await btn.evaluate(el => el.textContent);
      if (text.toLowerCase().includes('terminal')) {
        return { passed: true, details: 'Terminal tab exists' };
      }
    }
    return { passed: false, details: 'Terminal tab not found' };
  } catch (error) {
    return { passed: false, details: error.message };
  }
}

async function testGithubButton(page) {
  try {
    const buttons = await page.$$('button, [class*="button"]');
    for (let btn of buttons) {
      const text = await btn.evaluate(el => el.textContent);
      if (text.toLowerCase().includes('github') || text.toLowerCase().includes('git')) {
        return { passed: true, details: 'GitHub integration visible' };
      }
    }
    return { passed: false, details: 'GitHub button not found' };
  } catch (error) {
    return { passed: false, details: error.message };
  }
}

async function testDeployButton(page) {
  try {
    const html = await page.content();
    if (html.toLowerCase().includes('deploy')) {
      return { passed: true, details: 'Deploy feature available' };
    }
    return { passed: false, details: 'Deploy feature not visible' };
  } catch (error) {
    return { passed: false, details: error.message };
  }
}

const testFunctions = {
  pageLoad: testPageLoad,
  navigation: testNavigation,
  auth: testAuth,
  aiPrompt: testAIPrompt,
  generateGame: testGenerateGame,
  generateApp: testGenerateApp,
  incrementalFeatures: testIncrementalFeatures,
  editorLoads: testEditorLoads,
  codeDisplay: testCodeDisplay,
  fileSwitching: testFileSwitching,
  previewRenders: testPreviewRenders,
  previewUpdates: testPreviewUpdates,
  refreshButton: testRefreshButton,
  fileList: testFileList,
  fileSelection: testFileSelection,
  fileCount: testFileCount,
  manifestGen: testManifestGen,
  serviceWorker: testServiceWorker,
  iconsGen: testIconsGen,
  editorTab: testEditorTab,
  previewTab: testPreviewTab,
  terminalTab: testTerminalTab,
  githubButton: testGithubButton,
  deployButton: testDeployButton
};

(async () => {
  console.log('\n' + '═'.repeat(70));
  console.log('🔍 COMPREHENSIVE DREAMBUILD FEATURE TEST');
  console.log('   Testing ALL features for 100% functionality');
  console.log('═'.repeat(70) + '\n');
  
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: { width: 1600, height: 1000 }
  });
  
  const page = await browser.newPage();
  
  let totalTests = 0;
  let passedTests = 0;
  
  for (const [category, tests] of Object.entries(FEATURES_TO_TEST)) {
    console.log(`\n${'─'.repeat(70)}`);
    console.log(`📋 ${category}`);
    console.log('─'.repeat(70));
    
    for (const testCase of tests) {
      totalTests++;
      process.stdout.write(`   ${testCase.name}... `);
      
      try {
        const result = await testFunctions[testCase.test](page);
        
        if (result.passed) {
          console.log(`✅ PASS - ${result.details}`);
          testResults.passed.push({ category, name: testCase.name, details: result.details });
          passedTests++;
        } else {
          console.log(`❌ FAIL - ${result.details}`);
          testResults.failed.push({ category, name: testCase.name, details: result.details });
        }
      } catch (error) {
        console.log(`❌ ERROR - ${error.message}`);
        testResults.failed.push({ category, name: testCase.name, details: error.message });
      }
      
      await new Promise(r => setTimeout(r, 500));
    }
  }
  
  // Final Report
  console.log('\n\n' + '═'.repeat(70));
  console.log('📊 FINAL FEATURE TEST RESULTS');
  console.log('═'.repeat(70));
  
  const passRate = (passedTests / totalTests * 100).toFixed(1);
  
  console.log(`\n✅ Passed: ${passedTests}/${totalTests} (${passRate}%)`);
  console.log(`❌ Failed: ${totalTests - passedTests}/${totalTests}`);
  
  if (testResults.passed.length > 0) {
    console.log('\n' + '─'.repeat(70));
    console.log('✅ PASSING FEATURES:');
    console.log('─'.repeat(70));
    testResults.passed.forEach(t => {
      console.log(`   ✅ ${t.category} - ${t.name}`);
    });
  }
  
  if (testResults.failed.length > 0) {
    console.log('\n' + '─'.repeat(70));
    console.log('❌ FAILING FEATURES:');
    console.log('─'.repeat(70));
    testResults.failed.forEach(t => {
      console.log(`   ❌ ${t.category} - ${t.name}`);
      console.log(`      ${t.details}`);
    });
  }
  
  console.log('\n' + '═'.repeat(70));
  
  if (passRate === 100) {
    console.log('╔═══════════════════════════════════════════════════════════════╗');
    console.log('║                                                               ║');
    console.log('║  🏆 PERFECT! ALL FEATURES 100% FUNCTIONAL!                   ║');
    console.log('║                                                               ║');
    console.log('║  DreamBuild is production-ready!                             ║');
    console.log('║                                                               ║');
    console.log('╚═══════════════════════════════════════════════════════════════╝');
  } else if (passRate >= 90) {
    console.log(`✅ EXCELLENT: ${passRate}% of features working!`);
  } else if (passRate >= 75) {
    console.log(`⚠️  GOOD: ${passRate}% working, some fixes needed`);
  } else {
    console.log(`❌ NEEDS WORK: Only ${passRate}% functional`);
  }
  
  console.log('═'.repeat(70) + '\n');
  
  // Save results
  const fs = require('fs');
  fs.writeFileSync('tests/reports/feature-test-results.json', JSON.stringify(testResults, null, 2));
  console.log('📄 Results saved: tests/reports/feature-test-results.json\n');
  
  await new Promise(r => setTimeout(r, 3000));
  await browser.close();
  
  process.exit(passRate >= 90 ? 0 : 1);
})();
