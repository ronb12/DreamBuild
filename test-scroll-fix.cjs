const puppeteer = require('puppeteer');

async function testScrollFix() {
  console.log('🔍 Testing Scroll Fix');
  console.log('====================');
  
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

    console.log('\n📋 Testing Scroll Functionality:');
    
    // Open modal
    await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const autoButton = buttons.find(btn => btn.textContent.includes('Auto'));
      if (autoButton) {
        autoButton.click();
      }
    });
    
    await page.waitForTimeout(2000);
    
    // Test scrolling with more detailed checks
    const scrollTest = await page.evaluate(() => {
      const containers = Array.from(document.querySelectorAll('div'));
      const scrollContainer = containers.find(div => 
        div.className.includes('flex-1') && 
        div.className.includes('overflow-y-auto')
      );
      
      if (scrollContainer) {
        // Get container dimensions
        const rect = scrollContainer.getBoundingClientRect();
        const scrollHeight = scrollContainer.scrollHeight;
        const clientHeight = scrollContainer.clientHeight;
        
        console.log('Container height:', rect.height);
        console.log('Scroll height:', scrollHeight);
        console.log('Client height:', clientHeight);
        
        // Try to scroll
        const initialScroll = scrollContainer.scrollTop;
        scrollContainer.scrollTop = 100;
        const newScroll = scrollContainer.scrollTop;
        
        return {
          hasScrollContainer: true,
          canScroll: newScroll !== initialScroll,
          initialScroll,
          newScroll,
          rectHeight: rect.height,
          scrollHeight,
          clientHeight,
          needsScroll: scrollHeight > clientHeight
        };
      }
      return { hasScrollContainer: false };
    });
    
    console.log('📝 Detailed scroll test result:', scrollTest);
    
    if (scrollTest.hasScrollContainer) {
      if (scrollTest.needsScroll) {
        if (scrollTest.canScroll) {
          console.log('   ✅ Scroll functionality works');
        } else {
          console.log('   ❌ Scroll functionality not working');
        }
      } else {
        console.log('   ℹ️ No scroll needed - content fits in container');
      }
    } else {
      console.log('   ❌ Scroll container not found');
    }

    // Take screenshot
    await page.screenshot({ 
      path: 'dreambuild-scroll-fix-test.png',
      fullPage: true 
    });
    console.log('\n📸 Screenshot saved as dreambuild-scroll-fix-test.png');

    console.log('\n🎯 SCROLL FIX TEST COMPLETE!');

  } catch (error) {
    console.error('❌ Scroll fix test failed:', error);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

// Run the scroll fix test
testScrollFix().catch(console.error);
