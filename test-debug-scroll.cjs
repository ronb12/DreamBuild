const puppeteer = require('puppeteer');

async function testDebugScroll() {
  console.log('🔍 Debug Scroll Container');
  console.log('========================');
  
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

    console.log('\n📋 Debugging Scroll Container:');
    
    // Open modal
    await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const autoButton = buttons.find(btn => btn.textContent.includes('Auto'));
      if (autoButton) {
        autoButton.click();
      }
    });
    
    await page.waitForTimeout(2000);
    
    // Debug all divs with scroll-related classes
    const debugResult = await page.evaluate(() => {
      const allDivs = Array.from(document.querySelectorAll('div'));
      
      const scrollRelated = allDivs.filter(div => {
        const className = div.className;
        return className.includes('overflow') || 
               className.includes('scroll') || 
               className.includes('max-h');
      });
      
      console.log('Found scroll-related divs:', scrollRelated.length);
      
      scrollRelated.forEach((div, index) => {
        console.log(`Div ${index}:`, {
          className: div.className,
          scrollHeight: div.scrollHeight,
          clientHeight: div.clientHeight,
          hasOverflow: div.scrollHeight > div.clientHeight
        });
      });
      
      // Look for the specific container
      const modelContainer = allDivs.find(div => 
        div.className.includes('max-h-48') && 
        div.className.includes('overflow-y-auto')
      );
      
      if (modelContainer) {
        console.log('Found model container:', {
          className: modelContainer.className,
          scrollHeight: modelContainer.scrollHeight,
          clientHeight: modelContainer.clientHeight,
          needsScroll: modelContainer.scrollHeight > modelContainer.clientHeight
        });
        
        // Try scrolling
        const initialScroll = modelContainer.scrollTop;
        modelContainer.scrollTop = 100;
        const newScroll = modelContainer.scrollTop;
        
        return {
          found: true,
          canScroll: newScroll !== initialScroll,
          initialScroll,
          newScroll,
          scrollHeight: modelContainer.scrollHeight,
          clientHeight: modelContainer.clientHeight
        };
      }
      
      return { found: false, totalDivs: allDivs.length, scrollRelatedDivs: scrollRelated.length };
    });
    
    console.log('📝 Debug result:', debugResult);

    // Take screenshot
    await page.screenshot({ 
      path: 'dreambuild-debug-scroll-test.png',
      fullPage: true 
    });
    console.log('\n📸 Screenshot saved as dreambuild-debug-scroll-test.png');

    console.log('\n🎯 DEBUG SCROLL TEST COMPLETE!');

  } catch (error) {
    console.error('❌ Debug scroll test failed:', error);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

// Run the debug scroll test
testDebugScroll().catch(console.error);
