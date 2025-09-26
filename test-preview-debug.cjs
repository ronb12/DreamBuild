const puppeteer = require('puppeteer');

async function testPreviewDebug() {
  console.log('🔍 Testing Preview Debug - Looking for Preview Component...\n');
  
  const browser = await puppeteer.launch({ 
    headless: false,
    defaultViewport: null,
    args: ['--start-maximized', '--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  
  try {
    // Navigate to AI Builder
    console.log('📍 Navigating to AI Builder...');
    await page.goto('https://dreambuild-2024-app.web.app/ai-builder', { 
      waitUntil: 'networkidle2',
      timeout: 30000 
    });
    await new Promise(resolve => setTimeout(resolve, 5000));
    
    console.log('✅ AI Builder loaded\n');
    
    // Test 1: Check if Preview tab exists and click it
    console.log('🧪 Test 1: Click Preview Tab');
    console.log('=' .repeat(50));
    
    const previewTab = await page.evaluateHandle(() => {
      const tabs = Array.from(document.querySelectorAll('[role="tab"], .tab, button'));
      return tabs.find(tab => 
        tab.textContent.includes('Preview') || 
        tab.textContent.includes('Live Preview') ||
        tab.title.includes('Preview')
      );
    });
    
    if (previewTab) {
      console.log('   ✅ Found preview tab');
      await previewTab.click();
      console.log('   ✅ Clicked preview tab');
      
      // Wait for potential content to load
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Check for debug indicator
      const debugIndicator = await page.evaluate(() => {
        return {
          hasPreviewLoaded: document.body.textContent.includes('PREVIEW LOADED') ||
                           !!document.querySelector('[class*="preview"]'),
          hasAdvancedPreview: document.body.textContent.includes('Advanced Live Preview'),
          hasPreviewHeader: document.body.textContent.includes('RENDERED'),
          hasIframe: !!document.querySelector('iframe'),
          hasPreviewContent: !!document.querySelector('[class*="preview"]'),
          totalElements: document.querySelectorAll('*').length,
          bodyText: document.body.textContent.substring(0, 500)
        };
      });
      
      console.log('📊 Preview Debug Analysis:');
      console.log(`   Has Preview Loaded: ${debugIndicator.hasPreviewLoaded ? '✅' : '❌'}`);
      console.log(`   Has Advanced Preview: ${debugIndicator.hasAdvancedPreview ? '✅' : '❌'}`);
      console.log(`   Has Preview Header: ${debugIndicator.hasPreviewHeader ? '✅' : '❌'}`);
      console.log(`   Has Iframe: ${debugIndicator.hasIframe ? '✅' : '❌'}`);
      console.log(`   Has Preview Content: ${debugIndicator.hasPreviewContent ? '✅' : '❌'}`);
      console.log(`   Total Elements: ${debugIndicator.totalElements}`);
      console.log(`   Body Text Preview: ${debugIndicator.bodyText}`);
      
    } else {
      console.log('   ❌ Preview tab not found');
    }
    
    // Test 2: Check console logs
    console.log('\n🧪 Test 2: Check Console Logs');
    console.log('=' .repeat(50));
    
    const consoleLogs = await page.evaluate(() => {
      // This won't work in headless mode, but let's try to get any error indicators
      return {
        hasErrors: document.body.textContent.includes('Error') ||
                  document.body.textContent.includes('error') ||
                  document.body.textContent.includes('Failed'),
        hasWarnings: document.body.textContent.includes('Warning') ||
                    document.body.textContent.includes('warning'),
        hasConsoleOutput: document.body.textContent.includes('console') ||
                         document.body.textContent.includes('log')
      };
    });
    
    console.log('📊 Console Analysis:');
    console.log(`   Has Errors: ${consoleLogs.hasErrors ? '✅' : '❌'}`);
    console.log(`   Has Warnings: ${consoleLogs.hasWarnings ? '✅' : '❌'}`);
    console.log(`   Has Console Output: ${consoleLogs.hasConsoleOutput ? '✅' : '❌'}`);
    
    // Test 3: Check for any React components
    console.log('\n🧪 Test 3: Check React Components');
    console.log('=' .repeat(50));
    
    const reactComponents = await page.evaluate(() => {
      return {
        hasReactRoot: !!document.querySelector('[data-reactroot]') ||
                     !!document.querySelector('#root') ||
                     !!document.querySelector('#app'),
        hasReactComponents: document.body.textContent.includes('React') ||
                           document.body.textContent.includes('component'),
        hasMotionComponents: document.body.textContent.includes('motion') ||
                            document.body.textContent.includes('framer'),
        hasProjectContext: document.body.textContent.includes('project') ||
                          document.body.textContent.includes('context')
      };
    });
    
    console.log('📊 React Components Analysis:');
    console.log(`   Has React Root: ${reactComponents.hasReactRoot ? '✅' : '❌'}`);
    console.log(`   Has React Components: ${reactComponents.hasReactComponents ? '✅' : '❌'}`);
    console.log(`   Has Motion Components: ${reactComponents.hasMotionComponents ? '✅' : '❌'}`);
    console.log(`   Has Project Context: ${reactComponents.hasProjectContext ? '✅' : '❌'}`);
    
    // Test 4: Check for any iframe or preview elements
    console.log('\n🧪 Test 4: Check Preview Elements');
    console.log('=' .repeat(50));
    
    const previewElements = await page.evaluate(() => {
      const allElements = Array.from(document.querySelectorAll('*'));
      return {
        iframes: allElements.filter(el => el.tagName === 'IFRAME').length,
        previewDivs: allElements.filter(el => 
          el.className.includes('preview') || 
          el.className.includes('Preview') ||
          el.id.includes('preview')
        ).length,
        motionDivs: allElements.filter(el => 
          el.className.includes('motion') ||
          el.className.includes('framer')
        ).length,
        totalDivs: allElements.filter(el => el.tagName === 'DIV').length,
        totalElements: allElements.length
      };
    });
    
    console.log('📊 Preview Elements Analysis:');
    console.log(`   Iframes: ${previewElements.iframes}`);
    console.log(`   Preview Divs: ${previewElements.previewDivs}`);
    console.log(`   Motion Divs: ${previewElements.motionDivs}`);
    console.log(`   Total Divs: ${previewElements.totalDivs}`);
    console.log(`   Total Elements: ${previewElements.totalElements}`);
    
    // Final Assessment
    console.log('\n🎯 Final Assessment');
    console.log('=' .repeat(50));
    
    const totalScore = (debugIndicator.hasPreviewLoaded ? 25 : 0) + 
                     (debugIndicator.hasAdvancedPreview ? 25 : 0) + 
                     (debugIndicator.hasIframe ? 25 : 0) + 
                     (previewElements.iframes > 0 ? 25 : 0);
    
    console.log(`📊 Preview Debug Score: ${totalScore}/100`);
    
    if (totalScore >= 75) {
      console.log('🌟 EXCELLENT - Preview component is working!');
    } else if (totalScore >= 50) {
      console.log('✅ GOOD - Preview component is partially working');
    } else if (totalScore >= 25) {
      console.log('⚠️ FAIR - Preview component has issues');
    } else {
      console.log('❌ POOR - Preview component is not loading');
    }
    
    console.log('\n🎉 Test completed successfully!');
    
    return { totalScore, debugIndicator, previewElements };
    
  } catch (error) {
    console.error('❌ Test failed:', error);
    return { totalScore: 0, debugIndicator: null, previewElements: null };
  } finally {
    await browser.close();
  }
}

// Run the test
testPreviewDebug().catch(console.error);
