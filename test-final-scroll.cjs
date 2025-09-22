const puppeteer = require('puppeteer');

async function testFinalScroll() {
  console.log('🔍 Final Scroll Test');
  console.log('===================');
  
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

    console.log('\n📋 Final Scroll Test:');
    
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
    const scrollResult = await page.evaluate(() => {
      const allDivs = Array.from(document.querySelectorAll('div'));
      const scrollContainer = allDivs.find(div => 
        div.className.includes('overflow-y-auto') && 
        div.style.height === '80px'
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
        
        // Try to scroll back to top
        scrollContainer.scrollTop = 0;
        const afterScrollTop = scrollContainer.scrollTop;
        
        return {
          hasScrollContainer: true,
          initialScroll,
          afterScroll100,
          afterScroll200,
          afterScrollBottom,
          afterScrollTop,
          scrollHeight,
          clientHeight,
          canScroll: afterScroll100 !== initialScroll,
          maxScroll: scrollHeight - clientHeight
        };
      }
      
      return { hasScrollContainer: false };
    });
    
    console.log('📝 Final scroll result:', scrollResult);
    
    if (scrollResult.hasScrollContainer) {
      if (scrollResult.canScroll) {
        console.log('   ✅ Scroll functionality works perfectly!');
        console.log(`   📊 Max scroll position: ${scrollResult.maxScroll}px`);
        console.log(`   📊 Scrolled to bottom: ${scrollResult.afterScrollBottom}px`);
        console.log(`   📊 Scrolled back to top: ${scrollResult.afterScrollTop}px`);
      } else {
        console.log('   ❌ Scroll functionality not working');
      }
    } else {
      console.log('   ❌ Scroll container not found');
    }

    // Test scrolling with mouse wheel
    console.log('\n🖱️ Testing Mouse Wheel Scroll:');
    
    await page.evaluate(() => {
      const allDivs = Array.from(document.querySelectorAll('div'));
      const scrollContainer = allDivs.find(div => 
        div.className.includes('overflow-y-auto') && 
        div.style.height === '80px'
      );
      
      if (scrollContainer) {
        // Simulate mouse wheel scroll
        const wheelEvent = new WheelEvent('wheel', {
          deltaY: 50,
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
      path: 'dreambuild-final-scroll-test.png',
      fullPage: true 
    });
    console.log('\n📸 Screenshot saved as dreambuild-final-scroll-test.png');

    console.log('\n🎯 FINAL SCROLL TEST COMPLETE!');

  } catch (error) {
    console.error('❌ Final scroll test failed:', error);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

// Run the final scroll test
testFinalScroll().catch(console.error);
