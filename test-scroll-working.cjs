const puppeteer = require('puppeteer');

async function testScrollWorking() {
  console.log('🔍 Testing Working Scroll');
  console.log('=========================');
  
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
    
    // Test scrolling
    const scrollTest = await page.evaluate(() => {
      const allDivs = Array.from(document.querySelectorAll('div'));
      const scrollContainer = allDivs.find(div => 
        div.className.includes('flex-1') && 
        div.className.includes('overflow-y-auto')
      );
      
      if (scrollContainer) {
        const initialScroll = scrollContainer.scrollTop;
        const scrollHeight = scrollContainer.scrollHeight;
        const clientHeight = scrollContainer.clientHeight;
        
        console.log('Initial scroll position:', initialScroll);
        console.log('Scroll height:', scrollHeight);
        console.log('Client height:', clientHeight);
        
        // Try to scroll down
        scrollContainer.scrollTop = 100;
        const afterScroll100 = scrollContainer.scrollTop;
        
        // Try to scroll more
        scrollContainer.scrollTop = 200;
        const afterScroll200 = scrollContainer.scrollTop;
        
        // Try to scroll to bottom
        scrollContainer.scrollTop = scrollHeight;
        const afterScrollBottom = scrollContainer.scrollTop;
        
        return {
          hasScrollContainer: true,
          initialScroll,
          afterScroll100,
          afterScroll200,
          afterScrollBottom,
          scrollHeight,
          clientHeight,
          canScroll: afterScroll100 !== initialScroll,
          maxScroll: scrollHeight - clientHeight
        };
      }
      
      return { hasScrollContainer: false };
    });
    
    console.log('📝 Scroll test result:', scrollTest);
    
    if (scrollTest.hasScrollContainer) {
      if (scrollTest.canScroll) {
        console.log('   ✅ Scroll functionality works!');
        console.log(`   📊 Max scroll position: ${scrollTest.maxScroll}px`);
        console.log(`   📊 Scrolled to bottom: ${scrollTest.afterScrollBottom}px`);
      } else {
        console.log('   ❌ Scroll functionality not working');
      }
    } else {
      console.log('   ❌ Scroll container not found');
    }

    // Test scrolling with mouse wheel
    console.log('\n🖱️ Testing Mouse Wheel Scroll:');
    
    // Find the scroll container and try mouse wheel
    await page.evaluate(() => {
      const allDivs = Array.from(document.querySelectorAll('div'));
      const scrollContainer = allDivs.find(div => 
        div.className.includes('flex-1') && 
        div.className.includes('overflow-y-auto')
      );
      
      if (scrollContainer) {
        // Simulate mouse wheel scroll
        const wheelEvent = new WheelEvent('wheel', {
          deltaY: 100,
          bubbles: true,
          cancelable: true
        });
        
        scrollContainer.dispatchEvent(wheelEvent);
        
        return {
          wheelEventDispatched: true,
          scrollTop: scrollContainer.scrollTop
        };
      }
      
      return { wheelEventDispatched: false };
    });

    // Take screenshot
    await page.screenshot({ 
      path: 'dreambuild-scroll-working-test.png',
      fullPage: true 
    });
    console.log('\n📸 Screenshot saved as dreambuild-scroll-working-test.png');

    console.log('\n🎯 SCROLL WORKING TEST COMPLETE!');

  } catch (error) {
    console.error('❌ Scroll working test failed:', error);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

// Run the scroll working test
testScrollWorking().catch(console.error);
