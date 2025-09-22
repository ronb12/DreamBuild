const puppeteer = require('puppeteer');

async function testCSSOverride() {
  console.log('🔍 Testing CSS Override');
  console.log('======================');
  
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

    console.log('\n📋 Testing CSS Override:');
    
    // Open modal
    await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const autoButton = buttons.find(btn => btn.textContent.includes('Auto'));
      if (autoButton) {
        autoButton.click();
      }
    });
    
    await page.waitForTimeout(2000);
    
    // Check CSS overrides
    const cssResult = await page.evaluate(() => {
      const allDivs = Array.from(document.querySelectorAll('div'));
      const scrollContainer = allDivs.find(div => 
        div.className.includes('overflow-y-auto') && 
        div.style.height === '80px'
      );
      
      if (scrollContainer) {
        const computedStyle = window.getComputedStyle(scrollContainer);
        const rect = scrollContainer.getBoundingClientRect();
        
        console.log('Scroll container CSS:', {
          className: scrollContainer.className,
          inlineStyle: scrollContainer.style.cssText,
          computedHeight: computedStyle.height,
          computedMaxHeight: computedStyle.maxHeight,
          computedMinHeight: computedStyle.minHeight,
          rectHeight: rect.height,
          scrollHeight: scrollContainer.scrollHeight,
          clientHeight: scrollContainer.clientHeight
        });
        
        // Check if there are any CSS rules overriding height
        const allStyles = window.getComputedStyle(scrollContainer);
        const heightRules = [];
        
        // Check for common height-overriding properties
        if (allStyles.height !== '80px') {
          heightRules.push(`height: ${allStyles.height}`);
        }
        if (allStyles.maxHeight !== 'none') {
          heightRules.push(`max-height: ${allStyles.maxHeight}`);
        }
        if (allStyles.minHeight !== '0px') {
          heightRules.push(`min-height: ${allStyles.minHeight}`);
        }
        
        return {
          found: true,
          inlineHeight: scrollContainer.style.height,
          computedHeight: computedStyle.height,
          rectHeight: rect.height,
          scrollHeight: scrollContainer.scrollHeight,
          clientHeight: scrollContainer.clientHeight,
          heightRules: heightRules,
          needsScroll: scrollContainer.scrollHeight > scrollContainer.clientHeight
        };
      }
      
      return { found: false };
    });
    
    console.log('📝 CSS override result:', cssResult);
    
    if (cssResult.found) {
      if (cssResult.heightRules.length > 0) {
        console.log('⚠️ CSS rules that might override height:', cssResult.heightRules);
      }
      
      if (cssResult.needsScroll) {
        console.log('✅ Scroll is needed and should work');
      } else {
        console.log('ℹ️ All content fits - no scroll needed');
      }
    } else {
      console.log('❌ Scroll container not found');
    }

    // Take screenshot
    await page.screenshot({ 
      path: 'dreambuild-css-override-test.png',
      fullPage: true 
    });
    console.log('\n📸 Screenshot saved as dreambuild-css-override-test.png');

    console.log('\n🎯 CSS OVERRIDE TEST COMPLETE!');

  } catch (error) {
    console.error('❌ CSS override test failed:', error);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

// Run the CSS override test
testCSSOverride().catch(console.error);
