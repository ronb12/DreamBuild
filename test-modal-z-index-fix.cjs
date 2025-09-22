const puppeteer = require('puppeteer');

async function testModalZIndexFix() {
  console.log('🔍 Testing Modal Z-Index Fix');
  console.log('============================');
  
  let browser;
  try {
    browser = await puppeteer.launch({
      headless: false,
      defaultViewport: { width: 1400, height: 900 },
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    
    // Navigate to the application
    console.log('🌐 Navigating to AI Builder...');
    await page.goto('http://localhost:3001/ai-builder', { 
      waitUntil: 'networkidle2',
      timeout: 30000 
    });

    // Wait for the page to fully load
    await page.waitForTimeout(5000);

    console.log('\n📋 Testing Modal Z-Index Fix:');
    
    // Open modal
    await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const autoButton = buttons.find(btn => btn.textContent.includes('Auto'));
      if (autoButton) {
        autoButton.click();
      }
    });
    
    await page.waitForTimeout(2000);
    
    // Check z-index
    const zIndexTest = await page.evaluate(() => {
      const allDivs = Array.from(document.querySelectorAll('div'));
      const modalContainer = allDivs.find(div => 
        div.className.includes('fixed') && 
        div.className.includes('bottom-20')
      );
      
      if (modalContainer) {
        const computedStyle = window.getComputedStyle(modalContainer);
        const inlineStyle = modalContainer.style.cssText;
        
        return {
          found: true,
          computedZIndex: computedStyle.zIndex,
          inlineZIndex: modalContainer.style.zIndex,
          inlineStyle: inlineStyle,
          className: modalContainer.className
        };
      }
      
      return { found: false };
    });
    
    console.log(`   ${zIndexTest.found ? '✅' : '❌'} Modal container: ${zIndexTest.found ? 'Found' : 'Not found'}`);
    if (zIndexTest.found) {
      console.log(`   📊 Computed z-index: ${zIndexTest.computedZIndex}`);
      console.log(`   📊 Inline z-index: ${zIndexTest.inlineZIndex}`);
      console.log(`   📊 Inline style: ${zIndexTest.inlineStyle}`);
      console.log(`   📊 Class name: ${zIndexTest.className}`);
      
      if (zIndexTest.inlineZIndex === '999999') {
        console.log('   ✅ Inline z-index is correctly set to 999999');
      } else {
        console.log('   ❌ Inline z-index is not set correctly');
      }
    }
    
    // Take screenshot
    await page.screenshot({ 
      path: 'dreambuild-modal-z-index-fix-test.png',
      fullPage: true 
    });
    console.log('\n📸 Screenshot saved as dreambuild-modal-z-index-fix-test.png');

    console.log('\n🎯 Z-INDEX FIX TEST COMPLETE!');

  } catch (error) {
    console.error('❌ Z-index fix test failed:', error);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

// Run the z-index fix test
testModalZIndexFix().catch(console.error);
