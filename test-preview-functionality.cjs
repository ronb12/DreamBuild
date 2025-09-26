const puppeteer = require('puppeteer');

async function testPreviewFunctionality() {
  console.log('🔍 Testing Preview Functionality - Detailed Analysis...\n');
  
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
    
    // Test 1: Check Preview Tab
    console.log('🧪 Test 1: Preview Tab Detection');
    console.log('=' .repeat(50));
    
    const previewTab = await page.evaluate(() => {
      const tabs = Array.from(document.querySelectorAll('[role="tab"], .tab, button'));
      const previewTab = tabs.find(tab => 
        tab.textContent.includes('Preview') || 
        tab.textContent.includes('Live Preview') ||
        tab.title.includes('Preview')
      );
      
      return {
        hasPreviewTab: !!previewTab,
        previewTabText: previewTab ? previewTab.textContent : null,
        totalTabs: tabs.length,
        tabTexts: tabs.map(tab => tab.textContent).filter(text => text.trim())
      };
    });
    
    console.log('📊 Preview Tab Analysis:');
    console.log(`   Has Preview Tab: ${previewTab.hasPreviewTab ? '✅' : '❌'}`);
    console.log(`   Preview Tab Text: ${previewTab.previewTabText || 'Not found'}`);
    console.log(`   Total Tabs: ${previewTab.totalTabs}`);
    console.log(`   Tab Texts: ${previewTab.tabTexts.join(', ')}`);
    
    // Test 2: Click Preview Tab
    console.log('\n🧪 Test 2: Click Preview Tab');
    console.log('=' .repeat(50));
    
    if (previewTab.hasPreviewTab) {
      try {
        const previewTabElement = await page.evaluateHandle(() => {
          const tabs = Array.from(document.querySelectorAll('[role="tab"], .tab, button'));
          return tabs.find(tab => 
            tab.textContent.includes('Preview') || 
            tab.textContent.includes('Live Preview') ||
            tab.title.includes('Preview')
          );
        });
        
        if (previewTabElement) {
          console.log('   ✅ Found preview tab element');
          await previewTabElement.click();
          console.log('   ✅ Clicked preview tab');
          
          // Wait for preview to load
          await new Promise(resolve => setTimeout(resolve, 3000));
          
          // Check for preview content
          const previewContent = await page.evaluate(() => {
            return {
              hasIframe: !!document.querySelector('iframe'),
              hasPreviewContent: !!document.querySelector('[class*="preview"]') ||
                                !!document.querySelector('[class*="live"]'),
              hasPreviewControls: !!document.querySelector('button[title*="Refresh"]') ||
                                 !!document.querySelector('button[title*="Reload"]') ||
                                 !!document.querySelector('button[title*="Preview"]'),
              previewText: document.body.textContent.includes('Preview') ||
                          document.body.textContent.includes('Live') ||
                          document.body.textContent.includes('iframe'),
              hasAdvancedControls: document.body.textContent.includes('Advanced') ||
                                  document.body.textContent.includes('Auto-refresh') ||
                                  document.body.textContent.includes('Device')
            };
          });
          
          console.log('📊 Preview Content Analysis:');
          console.log(`   Has Iframe: ${previewContent.hasIframe ? '✅' : '❌'}`);
          console.log(`   Has Preview Content: ${previewContent.hasPreviewContent ? '✅' : '❌'}`);
          console.log(`   Has Preview Controls: ${previewContent.hasPreviewControls ? '✅' : '❌'}`);
          console.log(`   Preview Text: ${previewContent.previewText ? '✅' : '❌'}`);
          console.log(`   Has Advanced Controls: ${previewContent.hasAdvancedControls ? '✅' : '❌'}`);
          
        } else {
          console.log('   ❌ Could not find preview tab element');
        }
      } catch (error) {
        console.log(`   ❌ Error clicking preview tab: ${error.message}`);
      }
    } else {
      console.log('   ❌ No preview tab found to click');
    }
    
    // Test 3: Check for Preview Elements
    console.log('\n🧪 Test 3: Preview Elements Detection');
    console.log('=' .repeat(50));
    
    const previewElements = await page.evaluate(() => {
      return {
        iframes: document.querySelectorAll('iframe').length,
        previewDivs: document.querySelectorAll('[class*="preview"]').length,
        liveDivs: document.querySelectorAll('[class*="live"]').length,
        refreshButtons: document.querySelectorAll('button[title*="Refresh"]').length,
        reloadButtons: document.querySelectorAll('button[title*="Reload"]').length,
        previewButtons: document.querySelectorAll('button[title*="Preview"]').length,
        deviceButtons: document.querySelectorAll('button[title*="Desktop"], button[title*="Mobile"], button[title*="Tablet"]').length,
        autoRefreshButtons: document.querySelectorAll('button[title*="Auto"], button[title*="Refresh"]').length,
        allButtons: document.querySelectorAll('button').length,
        allInputs: document.querySelectorAll('input, textarea').length
      };
    });
    
    console.log('📊 Preview Elements Count:');
    console.log(`   Iframes: ${previewElements.iframes}`);
    console.log(`   Preview Divs: ${previewElements.previewDivs}`);
    console.log(`   Live Divs: ${previewElements.liveDivs}`);
    console.log(`   Refresh Buttons: ${previewElements.refreshButtons}`);
    console.log(`   Reload Buttons: ${previewElements.reloadButtons}`);
    console.log(`   Preview Buttons: ${previewElements.previewButtons}`);
    console.log(`   Device Buttons: ${previewElements.deviceButtons}`);
    console.log(`   Auto-refresh Buttons: ${previewElements.autoRefreshButtons}`);
    console.log(`   Total Buttons: ${previewElements.allButtons}`);
    console.log(`   Total Inputs: ${previewElements.allInputs}`);
    
    // Test 4: Check Page Content
    console.log('\n🧪 Test 4: Page Content Analysis');
    console.log('=' .repeat(50));
    
    const pageContent = await page.evaluate(() => {
      const bodyText = document.body.textContent.toLowerCase();
      return {
        hasPreviewText: bodyText.includes('preview'),
        hasLiveText: bodyText.includes('live'),
        hasAdvancedText: bodyText.includes('advanced'),
        hasRefreshText: bodyText.includes('refresh'),
        hasDeviceText: bodyText.includes('device') || bodyText.includes('desktop') || bodyText.includes('mobile'),
        hasAutoRefreshText: bodyText.includes('auto') || bodyText.includes('refresh'),
        hasIframeText: bodyText.includes('iframe'),
        hasControlsText: bodyText.includes('controls') || bodyText.includes('settings'),
        totalTextLength: bodyText.length,
        previewRelatedText: bodyText.split(' ').filter(word => 
          word.includes('preview') || 
          word.includes('live') || 
          word.includes('refresh') ||
          word.includes('device')
        ).length
      };
    });
    
    console.log('📊 Page Content Analysis:');
    console.log(`   Has Preview Text: ${pageContent.hasPreviewText ? '✅' : '❌'}`);
    console.log(`   Has Live Text: ${pageContent.hasLiveText ? '✅' : '❌'}`);
    console.log(`   Has Advanced Text: ${pageContent.hasAdvancedText ? '✅' : '❌'}`);
    console.log(`   Has Refresh Text: ${pageContent.hasRefreshText ? '✅' : '❌'}`);
    console.log(`   Has Device Text: ${pageContent.hasDeviceText ? '✅' : '❌'}`);
    console.log(`   Has Auto-refresh Text: ${pageContent.hasAutoRefreshText ? '✅' : '❌'}`);
    console.log(`   Has Iframe Text: ${pageContent.hasIframeText ? '✅' : '❌'}`);
    console.log(`   Has Controls Text: ${pageContent.hasControlsText ? '✅' : '❌'}`);
    console.log(`   Total Text Length: ${pageContent.totalTextLength}`);
    console.log(`   Preview Related Words: ${pageContent.previewRelatedText}`);
    
    // Test 5: Performance Check
    console.log('\n🧪 Test 5: Performance Check');
    console.log('=' .repeat(50));
    
    const performance = await page.evaluate(() => {
      const loadTime = performance.timing ? 
        performance.timing.loadEventEnd - performance.timing.navigationStart : 0;
      
      const memory = performance.memory ? {
        used: Math.round(performance.memory.usedJSHeapSize / 1024 / 1024),
        total: Math.round(performance.memory.totalJSHeapSize / 1024 / 1024)
      } : null;
      
      return { loadTime, memory };
    });
    
    console.log(`📊 Performance Metrics:`);
    console.log(`   Page Load Time: ${performance.loadTime}ms`);
    if (performance.memory) {
      console.log(`   Memory Usage: ${performance.memory.used}MB / ${performance.memory.total}MB`);
    }
    
    // Final Assessment
    console.log('\n🎯 Final Assessment');
    console.log('=' .repeat(50));
    
    const totalScore = (previewTab.hasPreviewTab ? 20 : 0) + 
                     (previewElements.iframes > 0 ? 20 : 0) + 
                     (previewElements.refreshButtons > 0 ? 20 : 0) + 
                     (pageContent.hasPreviewText ? 20 : 0) + 
                     (pageContent.hasAdvancedText ? 20 : 0);
    
    console.log(`📊 Preview Functionality Score: ${totalScore}/100`);
    
    if (totalScore >= 80) {
      console.log('🌟 EXCELLENT - Preview functionality is working well!');
    } else if (totalScore >= 60) {
      console.log('✅ GOOD - Preview functionality is mostly working');
    } else if (totalScore >= 40) {
      console.log('⚠️ FAIR - Preview functionality needs improvements');
    } else {
      console.log('❌ POOR - Preview functionality needs major work');
    }
    
    console.log('\n🎉 Test completed successfully!');
    
    return { totalScore, previewTab, previewElements, pageContent };
    
  } catch (error) {
    console.error('❌ Test failed:', error);
    return { totalScore: 0, previewTab: null, previewElements: null, pageContent: null };
  } finally {
    await browser.close();
  }
}

// Run the test
testPreviewFunctionality().catch(console.error);