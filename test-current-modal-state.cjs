const puppeteer = require('puppeteer');

async function testCurrentModalState() {
  console.log('🔍 Testing Current Modal State');
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

    await page.waitForTimeout(5000);

    // Open modal
    await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const autoButton = buttons.find(btn => btn.textContent.includes('Auto'));
      if (autoButton) {
        autoButton.click();
      }
    });
    
    await page.waitForTimeout(2000);
    
    // Check current state
    const currentState = await page.evaluate(() => {
      const allDivs = Array.from(document.querySelectorAll('div'));
      const modalContainer = allDivs.find(div => 
        div.className.includes('fixed') && 
        div.className.includes('bottom-20')
      );
      
      if (modalContainer) {
        const rect = modalContainer.getBoundingClientRect();
        const style = window.getComputedStyle(modalContainer);
        
        // Find all elements with high z-index
        const allElements = Array.from(document.querySelectorAll('*'));
        const highZIndexElements = allElements
          .map(el => ({
            element: el,
            zIndex: parseInt(window.getComputedStyle(el).zIndex) || 0,
            className: el.className,
            tagName: el.tagName
          }))
          .filter(item => item.zIndex > 1000)
          .sort((a, b) => b.zIndex - a.zIndex);
        
        return {
          found: true,
          modalZIndex: parseInt(style.zIndex) || 0,
          modalPosition: style.position,
          modalRect: {
            top: Math.round(rect.top),
            left: Math.round(rect.left),
            width: Math.round(rect.width),
            height: Math.round(rect.height)
          },
          highZIndexElements: highZIndexElements.slice(0, 10),
          inlineStyle: modalContainer.style.cssText
        };
      }
      
      return { found: false };
    });
    
    console.log(`Modal found: ${currentState.found}`);
    if (currentState.found) {
      console.log(`Modal z-index: ${currentState.modalZIndex}`);
      console.log(`Modal position: ${currentState.modalPosition}`);
      console.log(`Modal rect: ${JSON.stringify(currentState.modalRect)}`);
      console.log(`Inline style: ${currentState.inlineStyle}`);
      console.log(`High z-index elements: ${currentState.highZIndexElements.length}`);
      currentState.highZIndexElements.forEach((el, index) => {
        console.log(`  ${index + 1}. ${el.tagName} - z-index:${el.zIndex}`);
      });
    }
    
    // Take screenshot
    await page.screenshot({ 
      path: 'dreambuild-current-modal-state-test.png',
      fullPage: true 
    });

  } catch (error) {
    console.error('❌ Test failed:', error);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

testCurrentModalState().catch(console.error);
