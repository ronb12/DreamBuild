const puppeteer = require('puppeteer');

async function checkOverlapping() {
  console.log('🔍 Checking home page for overlapping elements...');
  
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: { width: 1920, height: 1080 }
  });

  const page = await browser.newPage();
  
  try {
    // Test local development server
    console.log('📱 Checking local development server...');
    await page.goto('http://localhost:3000/', { 
      waitUntil: 'networkidle2',
      timeout: 10000 
    });
    
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Check for overlapping elements
    const overlappingIssues = await page.evaluate(() => {
      const issues = [];
      
      // Get all elements with position absolute, fixed, or relative
      const positionedElements = document.querySelectorAll('*');
      const elements = [];
      
      positionedElements.forEach((el, index) => {
        const style = window.getComputedStyle(el);
        const rect = el.getBoundingClientRect();
        
        if (rect.width > 0 && rect.height > 0) {
          elements.push({
            index,
            element: el,
            tagName: el.tagName,
            className: el.className,
            id: el.id,
            position: style.position,
            zIndex: style.zIndex,
            rect: {
              top: rect.top,
              left: rect.left,
              right: rect.right,
              bottom: rect.bottom,
              width: rect.width,
              height: rect.height
            }
          });
        }
      });
      
      // Check for overlapping elements
      for (let i = 0; i < elements.length; i++) {
        for (let j = i + 1; j < elements.length; j++) {
          const el1 = elements[i];
          const el2 = elements[j];
          
          // Check if elements overlap
          const overlap = !(
            el1.rect.right < el2.rect.left ||
            el1.rect.left > el2.rect.right ||
            el1.rect.bottom < el2.rect.top ||
            el1.rect.top > el2.rect.bottom
          );
          
          if (overlap) {
            // Check if one is clearly on top of the other
            const el1Z = parseInt(el1.zIndex) || 0;
            const el2Z = parseInt(el2.zIndex) || 0;
            
            issues.push({
              type: 'overlap',
              element1: {
                tag: el1.tagName,
                class: el1.className,
                id: el1.id,
                zIndex: el1Z,
                rect: el1.rect
              },
              element2: {
                tag: el2.tagName,
                class: el2.className,
                id: el2.id,
                zIndex: el2Z,
                rect: el2.rect
              },
              overlapArea: {
                top: Math.max(el1.rect.top, el2.rect.top),
                left: Math.max(el1.rect.left, el2.rect.left),
                right: Math.min(el1.rect.right, el2.rect.right),
                bottom: Math.min(el1.rect.bottom, el2.rect.bottom)
              }
            });
          }
        }
      }
      
      // Check for elements outside viewport
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      
      elements.forEach(el => {
        if (el.rect.right > viewportWidth + 50 || el.rect.bottom > viewportHeight + 50) {
          issues.push({
            type: 'outside_viewport',
            element: {
              tag: el.tagName,
              class: el.className,
              id: el.id,
              rect: el.rect
            },
            viewport: { width: viewportWidth, height: viewportHeight }
          });
        }
      });
      
      // Check for elements with negative positions
      elements.forEach(el => {
        if (el.rect.left < -50 || el.rect.top < -50) {
          issues.push({
            type: 'negative_position',
            element: {
              tag: el.tagName,
              class: el.className,
              id: el.id,
              rect: el.rect
            }
          });
        }
      });
      
      return {
        totalElements: elements.length,
        issues: issues,
        viewport: { width: viewportWidth, height: viewportHeight }
      };
    });
    
    console.log(`📊 Found ${overlappingIssues.totalElements} positioned elements`);
    console.log(`📊 Viewport: ${overlappingIssues.viewport.width}x${overlappingIssues.viewport.height}`);
    
    if (overlappingIssues.issues.length > 0) {
      console.log(`\n⚠️  Found ${overlappingIssues.issues.length} potential issues:`);
      
      overlappingIssues.issues.forEach((issue, index) => {
        console.log(`\n${index + 1}. ${issue.type.toUpperCase()}:`);
        
        if (issue.type === 'overlap') {
          console.log(`   Element 1: ${issue.element1.tag} (${issue.element1.class}) - z-index: ${issue.element1.zIndex}`);
          console.log(`   Element 2: ${issue.element2.tag} (${issue.element2.class}) - z-index: ${issue.element2.zIndex}`);
          console.log(`   Overlap area: ${issue.overlapArea.right - issue.overlapArea.left}x${issue.overlapArea.bottom - issue.overlapArea.top}`);
        } else if (issue.type === 'outside_viewport') {
          console.log(`   Element: ${issue.element.tag} (${issue.element.class})`);
          console.log(`   Position: ${issue.element.rect.left}, ${issue.element.rect.top}`);
          console.log(`   Size: ${issue.element.rect.width}x${issue.element.rect.height}`);
        } else if (issue.type === 'negative_position') {
          console.log(`   Element: ${issue.element.tag} (${issue.element.class})`);
          console.log(`   Position: ${issue.element.rect.left}, ${issue.element.rect.top}`);
        }
      });
    } else {
      console.log('✅ No overlapping issues found!');
    }
    
    // Take screenshot
    await page.screenshot({ path: 'overlap-check.png', fullPage: true });
    console.log('📸 Screenshot saved: overlap-check.png');
    
  } catch (error) {
    console.log('❌ Check failed:', error.message);
  }
  
  await browser.close();
  console.log('\n✅ Overlap check completed');
}

checkOverlapping();
