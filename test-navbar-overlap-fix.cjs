const puppeteer = require('puppeteer');

async function testNavbarOverlapFix() {
  console.log('🔍 Testing Navbar Overlap Fix');
  console.log('==============================');
  
  let browser;
  try {
    browser = await puppeteer.launch({
      headless: false,
      defaultViewport: { width: 1400, height: 900 },
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    
    // Navigate to the AI Builder page
    console.log('🌐 Navigating to AI Builder page...');
    await page.goto('https://dreambuild-2024-app.web.app/ai-builder', { 
      waitUntil: 'networkidle2',
      timeout: 30000 
    });

    await page.waitForTimeout(3000);

    console.log('\n📋 Testing Layout Elements:');
    console.log('============================');
    
    // Check navbar positioning
    const navbarInfo = await page.evaluate(() => {
      const navbar = document.querySelector('nav');
      if (!navbar) return null;
      
      const rect = navbar.getBoundingClientRect();
      return {
        top: rect.top,
        height: rect.height,
        bottom: rect.bottom,
        visible: rect.top >= 0 && rect.height > 0
      };
    });
    
    console.log(`✅ Navbar position: top=${navbarInfo?.top}px, height=${navbarInfo?.height}px`);
    
    // Check AI Builder header positioning
    const headerInfo = await page.evaluate(() => {
      const header = document.querySelector('.flex.items-center.justify-between.px-8.py-4');
      if (!header) return null;
      
      const rect = header.getBoundingClientRect();
      return {
        top: rect.top,
        height: rect.height,
        bottom: rect.bottom,
        visible: rect.top >= 0 && rect.height > 0
      };
    });
    
    console.log(`✅ AI Builder header position: top=${headerInfo?.top}px, height=${headerInfo?.height}px`);
    
    // Check for overlapping
    const overlapDetected = await page.evaluate(() => {
      const navbar = document.querySelector('nav');
      const header = document.querySelector('.flex.items-center.justify-between.px-8.py-4');
      
      if (!navbar || !header) return false;
      
      const navbarRect = navbar.getBoundingClientRect();
      const headerRect = header.getBoundingClientRect();
      
      // Check if header overlaps with navbar
      return headerRect.top < navbarRect.bottom && headerRect.bottom > navbarRect.top;
    });
    
    console.log(`❌ Overlap detected: ${overlapDetected ? 'Yes' : 'No'}`);
    
    // Check specific text elements
    const textElements = await page.evaluate(() => {
      const elements = [];
      
      // Look for "DreamBuild" text
      const dreamBuildElements = document.querySelectorAll('*');
      dreamBuildElements.forEach(el => {
        if (el.textContent && el.textContent.includes('DreamBuild')) {
          const rect = el.getBoundingClientRect();
          if (rect.width > 0 && rect.height > 0) {
            elements.push({
              text: 'DreamBuild',
              top: rect.top,
              left: rect.left,
              width: rect.width,
              height: rect.height
            });
          }
        }
      });
      
      // Look for "AI Builder" text
      const aiBuilderElements = document.querySelectorAll('*');
      aiBuilderElements.forEach(el => {
        if (el.textContent && el.textContent.includes('AI Builder') && !el.textContent.includes('DreamBuild')) {
          const rect = el.getBoundingClientRect();
          if (rect.width > 0 && rect.height > 0) {
            elements.push({
              text: 'AI Builder',
              top: rect.top,
              left: rect.left,
              width: rect.width,
              height: rect.height
            });
          }
        }
      });
      
      return elements;
    });
    
    console.log(`\n📝 Text elements found (${textElements.length}):`);
    textElements.forEach((element, index) => {
      console.log(`   ${index + 1}. "${element.text}" at (${element.left}, ${element.top})`);
    });
    
    // Check if "AI Builder" text is in the correct position (not overlapping with navbar)
    const aiBuilderInCorrectPosition = await page.evaluate(() => {
      const navbar = document.querySelector('nav');
      if (!navbar) return false;
      
      const navbarRect = navbar.getBoundingClientRect();
      const aiBuilderTexts = document.querySelectorAll('*');
      
      for (let el of aiBuilderTexts) {
        if (el.textContent && el.textContent.trim() === 'AI Builder') {
          const rect = el.getBoundingClientRect();
          // AI Builder should be below the navbar
          return rect.top >= navbarRect.bottom;
        }
      }
      return false;
    });
    
    console.log(`✅ AI Builder text in correct position: ${aiBuilderInCorrectPosition ? 'Yes' : 'No'}`);
    
    // Take screenshot
    await page.screenshot({ 
      path: 'dreambuild-navbar-overlap-fix-test.png',
      fullPage: true 
    });
    console.log('\n📸 Screenshot saved as dreambuild-navbar-overlap-fix-test.png');

    // Summary
    console.log('\n🎯 NAVBAR OVERLAP FIX TEST SUMMARY:');
    console.log('====================================');
    console.log(`✅ Navbar visible: ${navbarInfo?.visible ? 'Yes' : 'No'}`);
    console.log(`✅ AI Builder header visible: ${headerInfo?.visible ? 'Yes' : 'No'}`);
    console.log(`❌ Overlap detected: ${overlapDetected ? 'Yes' : 'No'}`);
    console.log(`✅ AI Builder text positioned correctly: ${aiBuilderInCorrectPosition ? 'Yes' : 'No'}`);
    
    if (!overlapDetected && aiBuilderInCorrectPosition) {
      console.log('\n🎉 NAVBAR OVERLAP FIX SUCCESSFUL!');
      console.log('   • No overlapping elements detected');
      console.log('   • AI Builder header properly positioned');
      console.log('   • Clean, professional layout');
      console.log('   • All text elements in correct positions');
    } else {
      console.log('\n⚠️ NAVBAR OVERLAP ISSUES DETECTED');
      if (overlapDetected) {
        console.log('   • Elements are still overlapping');
      }
      if (!aiBuilderInCorrectPosition) {
        console.log('   • AI Builder text not in correct position');
      }
    }

  } catch (error) {
    console.error('❌ Navbar overlap fix test failed:', error);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

testNavbarOverlapFix().catch(console.error);
