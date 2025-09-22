const puppeteer = require('puppeteer');

async function testHeightDebug() {
  console.log('🔍 Debug Height Issue');
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

    console.log('\n📋 Debugging Height Issue:');
    
    // Open modal
    await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const autoButton = buttons.find(btn => btn.textContent.includes('Auto'));
      if (autoButton) {
        autoButton.click();
      }
    });
    
    await page.waitForTimeout(2000);
    
    // Debug the modal container
    const debugResult = await page.evaluate(() => {
      const allDivs = Array.from(document.querySelectorAll('div'));
      
      // Find the modal container
      const modalContainer = allDivs.find(div => 
        div.className.includes('absolute') && 
        div.className.includes('bottom-20') &&
        div.className.includes('z-[9999]')
      );
      
      if (modalContainer) {
        const computedStyle = window.getComputedStyle(modalContainer);
        const rect = modalContainer.getBoundingClientRect();
        
        console.log('Modal container found:', {
          className: modalContainer.className,
          inlineStyle: modalContainer.style.cssText,
          computedHeight: computedStyle.height,
          rectHeight: rect.height,
          rectWidth: rect.width,
          paddingTop: computedStyle.paddingTop,
          paddingBottom: computedStyle.paddingBottom,
          paddingLeft: computedStyle.paddingLeft,
          paddingRight: computedStyle.paddingRight
        });
        
        // Find the scroll container inside
        const scrollContainer = Array.from(modalContainer.querySelectorAll('div')).find(div => 
          div.className.includes('flex-1') && 
          div.className.includes('overflow-y-auto')
        );
        
        if (scrollContainer) {
          const scrollComputedStyle = window.getComputedStyle(scrollContainer);
          const scrollRect = scrollContainer.getBoundingClientRect();
          
          console.log('Scroll container found:', {
            className: scrollContainer.className,
            computedHeight: scrollComputedStyle.height,
            rectHeight: scrollRect.height,
            scrollHeight: scrollContainer.scrollHeight,
            clientHeight: scrollContainer.clientHeight,
            needsScroll: scrollContainer.scrollHeight > scrollContainer.clientHeight
          });
          
          return {
            modalFound: true,
            modalHeight: rect.height,
            modalComputedHeight: computedStyle.height,
            scrollFound: true,
            scrollHeight: scrollContainer.scrollHeight,
            clientHeight: scrollContainer.clientHeight,
            needsScroll: scrollContainer.scrollHeight > scrollContainer.clientHeight
          };
        }
        
        return {
          modalFound: true,
          modalHeight: rect.height,
          modalComputedHeight: computedStyle.height,
          scrollFound: false
        };
      }
      
      return { modalFound: false };
    });
    
    console.log('📝 Debug result:', debugResult);

    // Take screenshot
    await page.screenshot({ 
      path: 'dreambuild-height-debug-test.png',
      fullPage: true 
    });
    console.log('\n📸 Screenshot saved as dreambuild-height-debug-test.png');

    console.log('\n🎯 HEIGHT DEBUG TEST COMPLETE!');

  } catch (error) {
    console.error('❌ Height debug test failed:', error);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

// Run the height debug test
testHeightDebug().catch(console.error);
