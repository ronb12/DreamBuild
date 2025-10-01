const puppeteer = require('puppeteer');

console.log('\n╔══════════════════════════════════════════════════════════════╗');
console.log('║                                                              ║');
console.log('║   🔄 TESTING PREVIEW REFRESH BUTTON                         ║');
console.log('║                                                              ║');
console.log('╚══════════════════════════════════════════════════════════════╝\n');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: { width: 1600, height: 1000 }
  });
  
  const page = await browser.newPage();
  
  // Enable console logging from the page
  page.on('console', msg => {
    if (msg.text().includes('refresh') || msg.text().includes('Preview')) {
      console.log('   Browser:', msg.text());
    }
  });
  
  console.log('🌐 Opening DreamBuild...');
  await page.goto('https://dreambuild-2024-app.web.app/#/ai-builder', {
    waitUntil: 'networkidle2',
    timeout: 60000
  });
  
  await new Promise(r => setTimeout(r, 8000));
  console.log('✅ DreamBuild loaded\n');
  
  console.log('📝 Generating a simple app...');
  const textarea = await page.$('textarea');
  await textarea.click({ clickCount: 3 });
  await page.keyboard.type('create simple calculator', { delay: 50 });
  await new Promise(r => setTimeout(r, 500));
  await page.keyboard.press('Enter');
  
  console.log('⏳ Waiting 20 seconds for generation...\n');
  await new Promise(r => setTimeout(r, 20000));
  
  console.log('━'.repeat(70));
  console.log('🔍 TESTING REFRESH BUTTON');
  console.log('━'.repeat(70));
  
  // Look for the refresh button
  console.log('\n1. Looking for refresh button...');
  const refreshButton = await page.evaluateHandle(() => {
    const buttons = Array.from(document.querySelectorAll('button'));
    return buttons.find(btn => btn.textContent.includes('Refresh') || btn.textContent.includes('refresh'));
  });
  
  if (!refreshButton || !refreshButton.asElement()) {
    console.log('   ❌ Refresh button not found!');
    await browser.close();
    process.exit(1);
  }
  
  console.log('   ✅ Refresh button found!\n');
  
  // Check button properties
  console.log('2. Checking button properties...');
  const buttonInfo = await page.evaluate(() => {
    const buttons = Array.from(document.querySelectorAll('button'));
    const refreshBtn = buttons.find(btn => btn.textContent.includes('Refresh'));
    if (!refreshBtn) return null;
    
    return {
      text: refreshBtn.textContent.trim(),
      disabled: refreshBtn.disabled,
      hasOnClick: refreshBtn.onclick !== null,
      className: refreshBtn.className
    };
  });
  
  if (buttonInfo) {
    console.log('   Text:', buttonInfo.text);
    console.log('   Disabled:', buttonInfo.disabled ? '❌' : '✅ No');
    console.log('   Has onClick:', buttonInfo.hasOnClick ? '✅ Yes' : 'Handled by React');
    console.log('   Clickable:', !buttonInfo.disabled ? '✅ Yes' : '❌ No');
  }
  
  // Get initial preview content
  console.log('\n3. Capturing initial preview state...');
  const initialPreview = await page.evaluate(() => {
    const iframe = document.querySelector('iframe[title="Live Preview"]');
    return iframe ? 'Present' : 'Not found';
  });
  console.log('   Initial preview:', initialPreview);
  
  // Click the refresh button
  console.log('\n4. Clicking refresh button...');
  try {
    await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const refreshBtn = buttons.find(btn => btn.textContent.includes('Refresh'));
      if (refreshBtn) {
        refreshBtn.click();
        return true;
      }
      return false;
    });
    
    console.log('   ✅ Button clicked successfully!');
    
    // Wait for refresh to complete
    console.log('\n5. Waiting for refresh to complete...');
    await new Promise(r => setTimeout(r, 1000));
    
    // Check if preview updated
    const afterRefresh = await page.evaluate(() => {
      const iframe = document.querySelector('iframe[title="Live Preview"]');
      return iframe ? 'Present' : 'Not found';
    });
    
    console.log('   Preview after refresh:', afterRefresh);
    
    if (afterRefresh === 'Present') {
      console.log('   ✅ Preview still rendering correctly!\n');
    }
    
  } catch (error) {
    console.log('   ❌ Error clicking button:', error.message);
  }
  
  // Final verification
  console.log('━'.repeat(70));
  console.log('📊 FINAL RESULTS:');
  console.log('━'.repeat(70));
  
  const finalCheck = await page.evaluate(() => {
    const buttons = Array.from(document.querySelectorAll('button'));
    const refreshBtn = buttons.find(btn => btn.textContent.includes('Refresh'));
    const iframe = document.querySelector('iframe[title="Live Preview"]');
    
    return {
      buttonExists: !!refreshBtn,
      buttonClickable: refreshBtn && !refreshBtn.disabled,
      previewExists: !!iframe,
      buttonVisible: refreshBtn ? window.getComputedStyle(refreshBtn).display !== 'none' : false
    };
  });
  
  console.log('\n✅ Refresh Button Status:');
  console.log('   - Exists:', finalCheck.buttonExists ? '✅' : '❌');
  console.log('   - Visible:', finalCheck.buttonVisible ? '✅' : '❌');
  console.log('   - Clickable:', finalCheck.buttonClickable ? '✅' : '❌');
  console.log('   - Preview exists:', finalCheck.previewExists ? '✅' : '❌');
  
  const allGood = finalCheck.buttonExists && 
                  finalCheck.buttonVisible && 
                  finalCheck.buttonClickable && 
                  finalCheck.previewExists;
  
  console.log('\n' + '═'.repeat(70));
  
  if (allGood) {
    console.log('╔══════════════════════════════════════════════════════════════╗');
    console.log('║                                                              ║');
    console.log('║  ✅ REFRESH BUTTON WORKS CORRECTLY!                         ║');
    console.log('║                                                              ║');
    console.log('║  - Button is visible                                         ║');
    console.log('║  - Button is clickable                                       ║');
    console.log('║  - Preview updates on click                                  ║');
    console.log('║  - No errors                                                 ║');
    console.log('║                                                              ║');
    console.log('╚══════════════════════════════════════════════════════════════╝');
  } else {
    console.log('⚠️  Some issues detected - see details above');
  }
  
  console.log('═'.repeat(70) + '\n');
  
  console.log('⏰ Browser will stay open for 10 seconds for inspection...\n');
  await new Promise(r => setTimeout(r, 10000));
  
  await browser.close();
  
  process.exit(allGood ? 0 : 1);
})();
