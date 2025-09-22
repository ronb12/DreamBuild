const puppeteer = require('puppeteer');

async function testAIBuilderLayout() {
  console.log('🔍 Testing AI Builder Layout and Modal Positioning');
  console.log('=================================================');
  
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

    console.log('\n📋 Testing AI Builder Layout:');
    
    // Test 1: Check for overlapping elements at the top
    console.log('\n1. Checking for Overlapping Elements at Top:');
    const overlappingTest = await page.evaluate(() => {
      const allElements = Array.from(document.querySelectorAll('*'));
      const topElements = allElements.filter(el => {
        const rect = el.getBoundingClientRect();
        return rect.top >= 0 && rect.top <= 200 && rect.width > 0 && rect.height > 0;
      });
      
      // Group elements by their position
      const elementGroups = [];
      topElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const style = window.getComputedStyle(el);
        
        elementGroups.push({
          tagName: el.tagName,
          className: el.className,
          id: el.id,
          rect: {
            top: Math.round(rect.top),
            left: Math.round(rect.left),
            width: Math.round(rect.width),
            height: Math.round(rect.height),
            bottom: Math.round(rect.bottom),
            right: Math.round(rect.right)
          },
          zIndex: style.zIndex,
          position: style.position,
          display: style.display,
          visibility: style.visibility
        });
      });
      
      // Sort by top position
      elementGroups.sort((a, b) => a.rect.top - b.rect.top);
      
      return {
        totalTopElements: elementGroups.length,
        elements: elementGroups.slice(0, 20) // Show first 20 elements
      };
    });
    
    console.log(`   📊 Found ${overlappingTest.totalTopElements} elements in top 200px`);
    console.log('   📝 Top elements:');
    overlappingTest.elements.forEach((el, index) => {
      console.log(`      ${index + 1}. ${el.tagName} - top:${el.rect.top}px, left:${el.rect.left}px, size:${el.rect.width}x${el.rect.height}px, z-index:${el.zIndex}, position:${el.position}`);
    });
    
    // Test 2: Check navbar and header positioning
    console.log('\n2. Checking Navbar and Header Positioning:');
    const navbarTest = await page.evaluate(() => {
      const navbar = document.querySelector('nav');
      const headers = Array.from(document.querySelectorAll('header, div[class*="header"]'));
      
      const navbarInfo = navbar ? {
        found: true,
        rect: navbar.getBoundingClientRect(),
        style: window.getComputedStyle(navbar),
        className: navbar.className
      } : { found: false };
      
      const headerInfo = headers.map(header => ({
        found: true,
        rect: header.getBoundingClientRect(),
        style: window.getComputedStyle(header),
        className: header.className
      }));
      
      return {
        navbar: navbarInfo,
        headers: headerInfo
      };
    });
    
    console.log(`   ${navbarTest.navbar.found ? '✅' : '❌'} Navbar: ${navbarTest.navbar.found ? 'Found' : 'Not found'}`);
    if (navbarTest.navbar.found) {
      console.log(`   📊 Navbar position: top=${Math.round(navbarTest.navbar.rect.top)}px, height=${Math.round(navbarTest.navbar.rect.height)}px`);
      console.log(`   📊 Navbar z-index: ${navbarTest.navbar.style.zIndex}`);
    }
    
    console.log(`   📊 Headers found: ${navbarTest.headers.length}`);
    navbarTest.headers.forEach((header, index) => {
      console.log(`      ${index + 1}. Header - top:${Math.round(header.rect.top)}px, height:${Math.round(header.rect.height)}px, z-index:${header.style.zIndex}`);
    });
    
    // Test 3: Test modal positioning with current layout
    console.log('\n3. Testing Modal Positioning:');
    await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const autoButton = buttons.find(btn => btn.textContent.includes('Auto'));
      if (autoButton) {
        autoButton.click();
      }
    });
    
    await page.waitForTimeout(2000);
    
    const modalTest = await page.evaluate(() => {
      const allDivs = Array.from(document.querySelectorAll('div'));
      const modalContainer = allDivs.find(div => 
        div.className.includes('fixed') && 
        div.className.includes('bottom-20') &&
        div.className.includes('z-[99999]')
      );
      
      if (modalContainer) {
        const rect = modalContainer.getBoundingClientRect();
        const style = window.getComputedStyle(modalContainer);
        
        // Check if modal is visible and positioned correctly
        const isVisible = style.display !== 'none' && 
                         style.visibility !== 'hidden' && 
                         style.opacity !== '0';
        
        // Check if modal is above other elements
        const elementsBelow = Array.from(document.querySelectorAll('*')).filter(el => {
          const elRect = el.getBoundingClientRect();
          const elStyle = window.getComputedStyle(el);
          
          // Check if element overlaps with modal
          const overlaps = !(rect.right < elRect.left || 
                           rect.left > elRect.right || 
                           rect.bottom < elRect.top || 
                           rect.top > elRect.bottom);
          
          if (overlaps && el !== modalContainer) {
            const elZIndex = parseInt(elStyle.zIndex) || 0;
            const modalZIndex = parseInt(style.zIndex) || 99999;
            
            return elZIndex > modalZIndex;
          }
          
          return false;
        });
        
        return {
          found: true,
          isVisible: isVisible,
          rect: {
            top: Math.round(rect.top),
            left: Math.round(rect.left),
            width: Math.round(rect.width),
            height: Math.round(rect.height),
            bottom: Math.round(rect.bottom),
            right: Math.round(rect.right)
          },
          style: {
            position: style.position,
            zIndex: style.zIndex,
            display: style.display,
            visibility: style.visibility
          },
          elementsAbove: elementsBelow.length,
          viewportHeight: window.innerHeight,
          isInViewport: rect.top >= 0 && rect.left >= 0 && rect.bottom <= window.innerHeight && rect.right <= window.innerWidth
        };
      }
      
      return { found: false };
    });
    
    console.log(`   ${modalTest.found ? '✅' : '❌'} Modal: ${modalTest.found ? 'Found' : 'Not found'}`);
    if (modalTest.found) {
      console.log(`   ${modalTest.isVisible ? '✅' : '❌'} Modal visible: ${modalTest.isVisible ? 'Yes' : 'No'}`);
      console.log(`   📊 Modal position: top=${modalTest.rect.top}px, left=${modalTest.rect.left}px`);
      console.log(`   📊 Modal size: ${modalTest.rect.width}x${modalTest.rect.height}px`);
      console.log(`   📊 Modal z-index: ${modalTest.style.zIndex}`);
      console.log(`   📊 Elements above modal: ${modalTest.elementsAbove}`);
      console.log(`   ${modalTest.isInViewport ? '✅' : '❌'} Modal in viewport: ${modalTest.isInViewport ? 'Yes' : 'No'}`);
      
      if (modalTest.elementsAbove > 0) {
        console.log('   ⚠️ Modal is behind other elements!');
      }
    }
    
    // Test 4: Check for specific overlapping issues
    console.log('\n4. Checking Specific Overlapping Issues:');
    const specificOverlapTest = await page.evaluate(() => {
      const allElements = Array.from(document.querySelectorAll('*'));
      
      // Look for elements that might be overlapping with the modal area
      const modalArea = { top: 600, left: 100, right: 500, bottom: 800 }; // Approximate modal area
      
      const overlappingElements = allElements.filter(el => {
        const rect = el.getBoundingClientRect();
        const style = window.getComputedStyle(el);
        
        if (rect.width === 0 || rect.height === 0) return false;
        
        // Check if element overlaps with modal area
        const overlaps = !(rect.right < modalArea.left || 
                         rect.left > modalArea.right || 
                         rect.bottom < modalArea.top || 
                         rect.top > modalArea.bottom);
        
        if (overlaps) {
          const zIndex = parseInt(style.zIndex) || 0;
          return zIndex >= 99999; // High z-index elements
        }
        
        return false;
      });
      
      return overlappingElements.map(el => ({
        tagName: el.tagName,
        className: el.className,
        rect: el.getBoundingClientRect(),
        zIndex: window.getComputedStyle(el).zIndex,
        text: el.textContent ? el.textContent.trim().substring(0, 50) : ''
      }));
    });
    
    console.log(`   📊 High z-index elements in modal area: ${specificOverlapTest.length}`);
    specificOverlapTest.forEach((el, index) => {
      console.log(`      ${index + 1}. ${el.tagName} - z-index:${el.zIndex}, text:"${el.text}"`);
    });
    
    // Take screenshot
    await page.screenshot({ 
      path: 'dreambuild-ai-builder-layout-test.png',
      fullPage: true 
    });
    console.log('\n📸 Screenshot saved as dreambuild-ai-builder-layout-test.png');

    // Summary
    console.log('\n🎯 AI BUILDER LAYOUT TEST SUMMARY:');
    console.log('==================================');
    console.log(`✅ Top elements analyzed: ${overlappingTest.totalTopElements}`);
    console.log(`✅ Navbar status: ${navbarTest.navbar.found ? 'Found' : 'Not found'}`);
    console.log(`✅ Headers found: ${navbarTest.headers.length}`);
    console.log(`✅ Modal status: ${modalTest.found ? 'Found' : 'Not found'}`);
    console.log(`✅ Modal visibility: ${modalTest.found && modalTest.isVisible ? 'Visible' : 'Hidden'}`);
    console.log(`✅ Elements above modal: ${modalTest.found ? modalTest.elementsAbove : 'N/A'}`);
    console.log(`✅ High z-index elements: ${specificOverlapTest.length}`);
    
    if (modalTest.found && modalTest.elementsAbove > 0) {
      console.log('\n⚠️ ISSUES DETECTED:');
      console.log('   • Modal is behind other elements');
      console.log('   • Need to increase z-index or fix positioning');
    } else if (modalTest.found && modalTest.isVisible) {
      console.log('\n✅ MODAL POSITIONING LOOKS GOOD!');
    }

  } catch (error) {
    console.error('❌ AI Builder layout test failed:', error);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

// Run the AI Builder layout test
testAIBuilderLayout().catch(console.error);
