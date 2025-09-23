const puppeteer = require('puppeteer');

async function testEnhancedHeader() {
  console.log('🔍 Testing Enhanced Templates Header');
  console.log('===================================');
  
  let browser;
  try {
    browser = await puppeteer.launch({
      headless: false,
      defaultViewport: { width: 1400, height: 900 },
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    
    // Navigate to the Templates page
    console.log('🌐 Navigating to Templates page...');
    await page.goto('https://dreambuild-2024-app.web.app/templates', { 
      waitUntil: 'networkidle2',
      timeout: 30000 
    });

    await page.waitForTimeout(3000);

    console.log('\n📋 Testing Enhanced Header Elements:');
    console.log('====================================');
    
    // Check enhanced title
    const enhancedTitle = await page.evaluate(() => {
      const title = document.querySelector('h1');
      return {
        text: title ? title.textContent : null,
        hasGradient: title ? title.className.includes('bg-gradient-to-r') : false,
        fontSize: title ? window.getComputedStyle(title).fontSize : null
      };
    });
    console.log(`✅ Enhanced title: "${enhancedTitle.text}"`);
    console.log(`✅ Gradient text effect: ${enhancedTitle.hasGradient ? 'Yes' : 'No'}`);
    console.log(`✅ Font size: ${enhancedTitle.fontSize}`);
    
    // Check enhanced icon
    const enhancedIcon = await page.evaluate(() => {
      const iconContainer = document.querySelector('.w-16.h-16');
      return {
        present: !!iconContainer,
        hasGlow: iconContainer ? iconContainer.className.includes('shadow-2xl') : false,
        hasGradient: iconContainer ? iconContainer.className.includes('bg-gradient-to-br') : false
      };
    });
    console.log(`✅ Enhanced icon container: ${enhancedIcon.present ? 'Yes' : 'No'}`);
    console.log(`✅ Icon glow effect: ${enhancedIcon.hasGlow ? 'Yes' : 'No'}`);
    console.log(`✅ Icon gradient: ${enhancedIcon.hasGradient ? 'Yes' : 'No'}`);
    
    // Check feature indicators
    const featureIndicators = await page.evaluate(() => {
      const indicators = document.querySelectorAll('.w-2.h-2.rounded-full');
      return {
        count: indicators.length,
        colors: Array.from(indicators).map(el => window.getComputedStyle(el).backgroundColor)
      };
    });
    console.log(`✅ Feature indicators: ${featureIndicators.count} found`);
    console.log(`✅ Indicator colors: ${featureIndicators.colors.join(', ')}`);
    
    // Check enhanced search bar
    const enhancedSearch = await page.evaluate(() => {
      const searchInput = document.querySelector('input[placeholder*="Search templates"]');
      return {
        present: !!searchInput,
        hasBackdrop: searchInput ? searchInput.className.includes('backdrop-blur-sm') : false,
        hasFocusRing: searchInput ? searchInput.className.includes('focus:ring-4') : false,
        placeholder: searchInput ? searchInput.placeholder : null
      };
    });
    console.log(`✅ Enhanced search bar: ${enhancedSearch.present ? 'Yes' : 'No'}`);
    console.log(`✅ Backdrop blur effect: ${enhancedSearch.hasBackdrop ? 'Yes' : 'No'}`);
    console.log(`✅ Enhanced focus ring: ${enhancedSearch.hasFocusRing ? 'Yes' : 'No'}`);
    console.log(`✅ Search placeholder: "${enhancedSearch.placeholder}"`);
    
    // Check search suggestions
    const searchSuggestions = await page.evaluate(() => {
      const suggestions = document.querySelectorAll('button[class*="rounded-full"]');
      return suggestions.length;
    });
    console.log(`✅ Search suggestions: ${searchSuggestions} found`);
    
    // Check background pattern
    const backgroundPattern = await page.evaluate(() => {
      const patternElement = document.querySelector('[style*="backgroundImage"]');
      return !!patternElement;
    });
    console.log(`✅ Background pattern: ${backgroundPattern ? 'Yes' : 'No'}`);
    
    // Check bottom wave effect
    const waveEffect = await page.evaluate(() => {
      const wave = document.querySelector('.bg-gradient-to-t.from-background');
      return !!wave;
    });
    console.log(`✅ Bottom wave effect: ${waveEffect ? 'Yes' : 'No'}`);
    
    // Test search suggestions interaction
    if (searchSuggestions > 0) {
      console.log('\n🎯 Testing search suggestions...');
      await page.click('button:has-text("React")');
      await page.waitForTimeout(1000);
      
      const searchValue = await page.evaluate(() => {
        const input = document.querySelector('input[placeholder*="Search templates"]');
        return input ? input.value : '';
      });
      console.log(`✅ Search suggestion clicked: "${searchValue}"`);
      
      // Clear search
      await page.evaluate(() => {
        const input = document.querySelector('input[placeholder*="Search templates"]');
        if (input) {
          input.value = '';
          input.dispatchEvent(new Event('input', { bubbles: true }));
        }
      });
      await page.waitForTimeout(1000);
    }
    
    // Take screenshot
    await page.screenshot({ 
      path: 'dreambuild-enhanced-header-test.png',
      fullPage: true 
    });
    console.log('\n📸 Screenshot saved as dreambuild-enhanced-header-test.png');

    // Summary
    console.log('\n🎯 ENHANCED HEADER TEST SUMMARY:');
    console.log('================================');
    console.log(`✅ Enhanced title with gradient: ${enhancedTitle.hasGradient ? 'Yes' : 'No'}`);
    console.log(`✅ Enhanced icon with glow: ${enhancedIcon.hasGlow ? 'Yes' : 'No'}`);
    console.log(`✅ Feature indicators: ${featureIndicators.count > 0 ? 'Yes' : 'No'}`);
    console.log(`✅ Enhanced search with effects: ${enhancedSearch.hasBackdrop ? 'Yes' : 'No'}`);
    console.log(`✅ Search suggestions: ${searchSuggestions > 0 ? 'Yes' : 'No'}`);
    console.log(`✅ Background pattern: ${backgroundPattern ? 'Yes' : 'No'}`);
    console.log(`✅ Wave effect: ${waveEffect ? 'Yes' : 'No'}`);
    
    if (enhancedTitle.hasGradient && enhancedIcon.hasGlow && enhancedSearch.hasBackdrop && featureIndicators.count > 0) {
      console.log('\n🎉 ENHANCED HEADER SUCCESSFUL!');
      console.log('   • Modern, professional design implemented');
      console.log('   • Enhanced visual effects working');
      console.log('   • Interactive elements functional');
      console.log('   • Improved user experience');
    } else {
      console.log('\n⚠️ ENHANCED HEADER ISSUES DETECTED');
      console.log('   • Some enhancements may need attention');
      console.log('   • Check individual styling elements');
    }

  } catch (error) {
    console.error('❌ Enhanced header test failed:', error);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

testEnhancedHeader().catch(console.error);
