const puppeteer = require('puppeteer');

async function checkRealOverlaps() {
  console.log('🔍 Checking for real overlapping issues...');
  
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
    
    // Check for real overlapping issues
    const realIssues = await page.evaluate(() => {
      const issues = [];
      
      // Get all visible elements
      const allElements = document.querySelectorAll('*');
      const visibleElements = [];
      
      allElements.forEach((el) => {
        const style = window.getComputedStyle(el);
        const rect = el.getBoundingClientRect();
        
        // Only check elements that are visible and have meaningful size
        if (rect.width > 10 && rect.height > 10 && 
            style.display !== 'none' && 
            style.visibility !== 'hidden' &&
            style.opacity !== '0') {
          visibleElements.push({
            element: el,
            tagName: el.tagName,
            className: el.className,
            id: el.id,
            rect: {
              top: rect.top,
              left: rect.left,
              right: rect.right,
              bottom: rect.bottom,
              width: rect.width,
              height: rect.height
            },
            zIndex: parseInt(style.zIndex) || 0,
            position: style.position
          });
        }
      });
      
      // Check for overlapping elements (excluding parent-child relationships)
      for (let i = 0; i < visibleElements.length; i++) {
        for (let j = i + 1; j < visibleElements.length; j++) {
          const el1 = visibleElements[i];
          const el2 = visibleElements[j];
          
          // Skip if one is a child of the other
          if (el1.element.contains(el2.element) || el2.element.contains(el1.element)) {
            continue;
          }
          
          // Check if elements overlap
          const overlap = !(
            el1.rect.right < el2.rect.left ||
            el1.rect.left > el2.rect.right ||
            el1.rect.bottom < el2.rect.top ||
            el1.rect.top > el2.rect.bottom
          );
          
          if (overlap) {
            const overlapArea = {
              top: Math.max(el1.rect.top, el2.rect.top),
              left: Math.max(el1.rect.left, el2.rect.left),
              right: Math.min(el1.rect.right, el2.rect.right),
              bottom: Math.min(el1.rect.bottom, el2.rect.bottom),
              width: Math.min(el1.rect.right, el2.rect.right) - Math.max(el1.rect.left, el2.rect.left),
              height: Math.min(el1.rect.bottom, el2.rect.bottom) - Math.max(el1.rect.top, el2.rect.top)
            };
            
            // Only report if overlap area is significant
            if (overlapArea.width > 20 && overlapArea.height > 20) {
              issues.push({
                type: 'real_overlap',
                element1: {
                  tag: el1.tagName,
                  class: el1.className,
                  id: el1.id,
                  zIndex: el1.zIndex,
                  position: el1.position,
                  rect: el1.rect
                },
                element2: {
                  tag: el2.tagName,
                  class: el2.className,
                  id: el2.id,
                  zIndex: el2.zIndex,
                  position: el2.position,
                  rect: el2.rect
                },
                overlapArea: overlapArea
              });
            }
          }
        }
      }
      
      // Check for elements that might be causing layout issues
      const layoutIssues = [];
      
      // Check for elements with very high z-index that might be covering content
      visibleElements.forEach(el => {
        if (el.zIndex > 100) {
          layoutIssues.push({
            type: 'high_z_index',
            element: {
              tag: el.tagName,
              class: el.className,
              id: el.id,
              zIndex: el.zIndex,
              rect: el.rect
            }
          });
        }
      });
      
      // Check for elements positioned outside normal flow
      visibleElements.forEach(el => {
        if (el.position === 'fixed' || el.position === 'absolute') {
          // Check if element is positioned outside viewport
          if (el.rect.right > window.innerWidth + 100 || 
              el.rect.bottom > window.innerHeight + 100 ||
              el.rect.left < -100 || 
              el.rect.top < -100) {
            layoutIssues.push({
              type: 'positioned_outside_viewport',
              element: {
                tag: el.tagName,
                class: el.className,
                id: el.id,
                position: el.position,
                rect: el.rect
              }
            });
          }
        }
      });
      
      return {
        totalElements: visibleElements.length,
        realOverlaps: issues,
        layoutIssues: layoutIssues,
        viewport: { width: window.innerWidth, height: window.innerHeight }
      };
    });
    
    console.log(`📊 Found ${realIssues.totalElements} visible elements`);
    console.log(`📊 Viewport: ${realIssues.viewport.width}x${realIssues.viewport.height}`);
    
    if (realIssues.realOverlaps.length > 0) {
      console.log(`\n⚠️  Found ${realIssues.realOverlaps.length} real overlapping issues:`);
      
      realIssues.realOverlaps.forEach((issue, index) => {
        console.log(`\n${index + 1}. REAL OVERLAP:`);
        console.log(`   Element 1: ${issue.element1.tag} (${issue.element1.class}) - z-index: ${issue.element1.zIndex}, position: ${issue.element1.position}`);
        console.log(`   Element 2: ${issue.element2.tag} (${issue.element2.class}) - z-index: ${issue.element2.zIndex}, position: ${issue.element2.position}`);
        console.log(`   Overlap area: ${issue.overlapArea.width.toFixed(1)}x${issue.overlapArea.height.toFixed(1)}`);
      });
    } else {
      console.log('✅ No real overlapping issues found!');
    }
    
    if (realIssues.layoutIssues.length > 0) {
      console.log(`\n⚠️  Found ${realIssues.layoutIssues.length} layout issues:`);
      
      realIssues.layoutIssues.forEach((issue, index) => {
        console.log(`\n${index + 1}. ${issue.type.toUpperCase()}:`);
        console.log(`   Element: ${issue.element.tag} (${issue.element.class})`);
        if (issue.type === 'high_z_index') {
          console.log(`   Z-index: ${issue.element.zIndex}`);
        } else if (issue.type === 'positioned_outside_viewport') {
          console.log(`   Position: ${issue.element.position}`);
          console.log(`   Rect: ${issue.element.rect.left}, ${issue.element.rect.top}, ${issue.element.rect.width}x${issue.element.rect.height}`);
        }
      });
    } else {
      console.log('✅ No layout issues found!');
    }
    
    // Take screenshot
    await page.screenshot({ path: 'real-overlap-check.png', fullPage: true });
    console.log('📸 Screenshot saved: real-overlap-check.png');
    
  } catch (error) {
    console.log('❌ Check failed:', error.message);
  }
  
  await browser.close();
  console.log('\n✅ Real overlap check completed');
}

checkRealOverlaps();
