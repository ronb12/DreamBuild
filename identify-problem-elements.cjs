const puppeteer = require('puppeteer');

async function identifyProblemElements() {
  console.log('🔍 Identifying problem elements...');
  
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: { width: 1920, height: 1080 }
  });

  const page = await browser.newPage();
  
  try {
    await page.goto('http://localhost:3000/', { 
      waitUntil: 'networkidle2',
      timeout: 10000 
    });
    
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Find the high z-index element
    const highZIndexElement = await page.evaluate(() => {
      const allElements = document.querySelectorAll('*');
      for (let el of allElements) {
        const style = window.getComputedStyle(el);
        const zIndex = parseInt(style.zIndex);
        if (zIndex > 100) {
          return {
            tagName: el.tagName,
            className: el.className,
            id: el.id,
            zIndex: zIndex,
            position: style.position,
            rect: el.getBoundingClientRect(),
            innerHTML: el.innerHTML.substring(0, 200) + '...'
          };
        }
      }
      return null;
    });
    
    if (highZIndexElement) {
      console.log('🔍 High Z-Index Element Found:');
      console.log(`   Tag: ${highZIndexElement.tagName}`);
      console.log(`   Class: ${highZIndexElement.className}`);
      console.log(`   ID: ${highZIndexElement.id}`);
      console.log(`   Z-Index: ${highZIndexElement.zIndex}`);
      console.log(`   Position: ${highZIndexElement.position}`);
      console.log(`   Rect: ${highZIndexElement.rect.left}, ${highZIndexElement.rect.top}, ${highZIndexElement.rect.width}x${highZIndexElement.rect.height}`);
      console.log(`   HTML: ${highZIndexElement.innerHTML}`);
    }
    
    // Find elements positioned outside viewport
    const outsideViewportElements = await page.evaluate(() => {
      const elements = [];
      const allElements = document.querySelectorAll('*');
      
      for (let el of allElements) {
        const style = window.getComputedStyle(el);
        const rect = el.getBoundingClientRect();
        
        if (style.position === 'absolute' || style.position === 'fixed') {
          if (rect.right > window.innerWidth + 100 || 
              rect.bottom > window.innerHeight + 100 ||
              rect.left < -100 || 
              rect.top < -100) {
            elements.push({
              tagName: el.tagName,
              className: el.className,
              id: el.id,
              position: style.position,
              rect: {
                left: rect.left,
                top: rect.top,
                right: rect.right,
                bottom: rect.bottom,
                width: rect.width,
                height: rect.height
              },
              innerHTML: el.innerHTML.substring(0, 200) + '...'
            });
          }
        }
      }
      
      return elements;
    });
    
    if (outsideViewportElements.length > 0) {
      console.log('\n🔍 Elements Positioned Outside Viewport:');
      outsideViewportElements.forEach((el, index) => {
        console.log(`\n${index + 1}. ${el.tagName} (${el.className})`);
        console.log(`   Position: ${el.position}`);
        console.log(`   Rect: ${el.rect.left}, ${el.rect.top}, ${el.rect.width}x${el.rect.height}`);
        console.log(`   HTML: ${el.innerHTML}`);
      });
    }
    
    // Take screenshot
    await page.screenshot({ path: 'problem-elements.png', fullPage: true });
    console.log('\n📸 Screenshot saved: problem-elements.png');
    
  } catch (error) {
    console.log('❌ Check failed:', error.message);
  }
  
  await browser.close();
  console.log('\n✅ Problem elements identified');
}

identifyProblemElements();
