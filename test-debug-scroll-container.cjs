const puppeteer = require('puppeteer');

async function testDebugScrollContainer() {
  console.log('🔍 Debug Scroll Container Issue');
  console.log('==============================');
  
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
    
    // Debug all scroll-related elements
    const debugResult = await page.evaluate(() => {
      const allDivs = Array.from(document.querySelectorAll('div'));
      
      // Find all divs with scroll-related classes
      const scrollRelatedDivs = allDivs.filter(div => {
        const className = div.className;
        return className.includes('overflow') || 
               className.includes('scroll') || 
               className.includes('max-h') ||
               className.includes('flex-1');
      });
      
      console.log('Found scroll-related divs:', scrollRelatedDivs.length);
      
      scrollRelatedDivs.forEach((div, index) => {
        const style = window.getComputedStyle(div);
        const rect = div.getBoundingClientRect();
        
        console.log(`Div ${index}:`, {
          className: div.className,
          style: div.style.cssText,
          computedHeight: style.height,
          computedMaxHeight: style.maxHeight,
          computedOverflow: style.overflow,
          rectHeight: rect.height,
          scrollHeight: div.scrollHeight,
          clientHeight: div.clientHeight,
          hasOverflow: div.scrollHeight > div.clientHeight
        });
      });
      
      // Look specifically for the scroll container we're targeting
      const targetContainer = allDivs.find(div => 
        div.className.includes('overflow-y-auto') && 
        div.style.height === '80px'
      );
      
      if (targetContainer) {
        console.log('Found target scroll container:', {
          className: targetContainer.className,
          style: targetContainer.style.cssText,
          scrollHeight: targetContainer.scrollHeight,
          clientHeight: targetContainer.clientHeight,
          needsScroll: targetContainer.scrollHeight > targetContainer.clientHeight
        });
        
        return {
          found: true,
          scrollHeight: targetContainer.scrollHeight,
          clientHeight: targetContainer.clientHeight,
          needsScroll: targetContainer.scrollHeight > targetContainer.clientHeight
        };
      }
      
      // Look for any div with overflow-y-auto
      const anyOverflowContainer = allDivs.find(div => 
        div.className.includes('overflow-y-auto')
      );
      
      if (anyOverflowContainer) {
        console.log('Found any overflow container:', {
          className: anyOverflowContainer.className,
          style: anyOverflowContainer.style.cssText,
          scrollHeight: anyOverflowContainer.scrollHeight,
          clientHeight: anyOverflowContainer.clientHeight,
          needsScroll: anyOverflowContainer.scrollHeight > anyOverflowContainer.clientHeight
        });
        
        return {
          found: false,
          foundAnyOverflow: true,
          scrollHeight: anyOverflowContainer.scrollHeight,
          clientHeight: anyOverflowContainer.clientHeight,
          needsScroll: anyOverflowContainer.scrollHeight > anyOverflowContainer.clientHeight
        };
      }
      
      return {
        found: false,
        foundAnyOverflow: false,
        totalDivs: allDivs.length,
        scrollRelatedDivs: scrollRelatedDivs.length
      };
    });
    
    console.log('📝 Debug result:', debugResult);

    // Take screenshot
    await page.screenshot({ 
      path: 'dreambuild-debug-scroll-container-test.png',
      fullPage: true 
    });
    console.log('\n📸 Screenshot saved as dreambuild-debug-scroll-container-test.png');

    console.log('\n🎯 DEBUG SCROLL CONTAINER TEST COMPLETE!');

  } catch (error) {
    console.error('❌ Debug scroll container test failed:', error);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

// Run the debug scroll container test
testDebugScrollContainer().catch(console.error);
