const puppeteer = require('puppeteer');

async function testAIBuilderSimple() {
  console.log('🔍 Testing AI Builder Simple - Direct Navigation...\n');
  
  const browser = await puppeteer.launch({ 
    headless: false,
    defaultViewport: null,
    args: ['--start-maximized', '--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  
  try {
    // Navigate directly to AI Builder
    console.log('📍 Navigating directly to AI Builder...');
    await page.goto('https://dreambuild-2024-app.web.app/ai-builder', { 
      waitUntil: 'networkidle2',
      timeout: 30000 
    });
    await new Promise(resolve => setTimeout(resolve, 5000));
    
    console.log('✅ AI Builder loaded\n');
    
    // Test 1: Check if we're actually on AI Builder page
    console.log('🧪 Test 1: Verify AI Builder Page');
    console.log('=' .repeat(50));
    
    const pageInfo = await page.evaluate(() => {
      return {
        url: window.location.href,
        title: document.title,
        hasAIBuilder: document.body.textContent.includes('AI Builder') ||
                     document.body.textContent.includes('Code Editor') ||
                     document.body.textContent.includes('Monaco'),
        hasDashboard: document.body.textContent.includes('Dashboard') ||
                     document.body.textContent.includes('Welcome back'),
        bodyText: document.body.textContent.substring(0, 300)
      };
    });
    
    console.log('📊 Page Information:');
    console.log(`   URL: ${pageInfo.url}`);
    console.log(`   Title: ${pageInfo.title}`);
    console.log(`   Has AI Builder: ${pageInfo.hasAIBuilder ? '✅' : '❌'}`);
    console.log(`   Has Dashboard: ${pageInfo.hasDashboard ? '✅' : '❌'}`);
    console.log(`   Body Text: ${pageInfo.bodyText}`);
    
    // Test 2: Look for Preview tab specifically
    console.log('\n🧪 Test 2: Find Preview Tab');
    console.log('=' .repeat(50));
    
    const previewTab = await page.evaluate(() => {
      const allElements = Array.from(document.querySelectorAll('*'));
      const buttons = allElements.filter(el => el.tagName === 'BUTTON' || el.tagName === 'A');
      const previewElements = buttons.filter(el => 
        el.textContent.includes('Preview') || 
        el.textContent.includes('Live Preview') ||
        el.title.includes('Preview')
      );
      
      return {
        totalButtons: buttons.length,
        previewElements: previewElements.length,
        previewTexts: previewElements.map(el => el.textContent),
        allButtonTexts: buttons.map(el => el.textContent).filter(text => text.trim()).slice(0, 10)
      };
    });
    
    console.log('📊 Preview Tab Analysis:');
    console.log(`   Total Buttons: ${previewTab.totalButtons}`);
    console.log(`   Preview Elements: ${previewTab.previewElements}`);
    console.log(`   Preview Texts: ${previewTab.previewTexts.join(', ')}`);
    console.log(`   All Button Texts: ${previewTab.allButtonTexts.join(', ')}`);
    
    // Test 3: Try to click preview tab if found
    if (previewTab.previewElements > 0) {
      console.log('\n🧪 Test 3: Click Preview Tab');
      console.log('=' .repeat(50));
      
      try {
        const previewButton = await page.evaluateHandle(() => {
          const buttons = Array.from(document.querySelectorAll('button, a'));
          return buttons.find(button => 
            button.textContent.includes('Preview') || 
            button.textContent.includes('Live Preview') ||
            button.title.includes('Preview')
          );
        });
        
        if (previewButton) {
          console.log('   ✅ Found preview button');
          await previewButton.click();
          console.log('   ✅ Clicked preview button');
          
          // Wait for content to load
          await new Promise(resolve => setTimeout(resolve, 3000));
          
          // Check for preview content
          const previewContent = await page.evaluate(() => {
            return {
              hasPreviewLoaded: document.body.textContent.includes('PREVIEW LOADED') ||
                               document.body.textContent.includes('Advanced Live Preview'),
              hasIframe: !!document.querySelector('iframe'),
              hasPreviewContent: !!document.querySelector('[class*="preview"]'),
              bodyText: document.body.textContent.substring(0, 200)
            };
          });
          
          console.log('📊 Preview Content After Click:');
          console.log(`   Has Preview Loaded: ${previewContent.hasPreviewLoaded ? '✅' : '❌'}`);
          console.log(`   Has Iframe: ${previewContent.hasIframe ? '✅' : '❌'}`);
          console.log(`   Has Preview Content: ${previewContent.hasPreviewContent ? '✅' : '❌'}`);
          console.log(`   Body Text: ${previewContent.bodyText}`);
          
        } else {
          console.log('   ❌ Preview button not found');
        }
      } catch (error) {
        console.log(`   ❌ Error clicking preview: ${error.message}`);
      }
    } else {
      console.log('   ❌ No preview elements found');
    }
    
    // Test 4: Check for any errors or issues
    console.log('\n🧪 Test 4: Check for Issues');
    console.log('=' .repeat(50));
    
    const issues = await page.evaluate(() => {
      return {
        hasErrors: document.body.textContent.includes('Error') ||
                  document.body.textContent.includes('error') ||
                  document.body.textContent.includes('Failed'),
        hasWarnings: document.body.textContent.includes('Warning') ||
                    document.body.textContent.includes('warning'),
        hasConsoleErrors: document.body.textContent.includes('console') ||
                         document.body.textContent.includes('log'),
        totalElements: document.querySelectorAll('*').length,
        hasReactRoot: !!document.querySelector('[data-reactroot]') ||
                     !!document.querySelector('#root') ||
                     !!document.querySelector('#app')
      };
    });
    
    console.log('📊 Issues Analysis:');
    console.log(`   Has Errors: ${issues.hasErrors ? '✅' : '❌'}`);
    console.log(`   Has Warnings: ${issues.hasWarnings ? '✅' : '❌'}`);
    console.log(`   Has Console Errors: ${issues.hasConsoleErrors ? '✅' : '❌'}`);
    console.log(`   Total Elements: ${issues.totalElements}`);
    console.log(`   Has React Root: ${issues.hasReactRoot ? '✅' : '❌'}`);
    
    // Final Assessment
    console.log('\n🎯 Final Assessment');
    console.log('=' .repeat(50));
    
    const totalScore = (pageInfo.hasAIBuilder ? 50 : 0) + 
                     (previewTab.previewElements > 0 ? 25 : 0) + 
                     (issues.hasReactRoot ? 25 : 0);
    
    console.log(`📊 AI Builder Simple Score: ${totalScore}/100`);
    
    if (totalScore >= 75) {
      console.log('🌟 EXCELLENT - AI Builder is working!');
    } else if (totalScore >= 50) {
      console.log('✅ GOOD - AI Builder is partially working');
    } else if (totalScore >= 25) {
      console.log('⚠️ FAIR - AI Builder has issues');
    } else {
      console.log('❌ POOR - AI Builder is not loading');
    }
    
    console.log('\n🎉 Test completed successfully!');
    
    return { totalScore, pageInfo, previewTab, issues };
    
  } catch (error) {
    console.error('❌ Test failed:', error);
    return { totalScore: 0, pageInfo: null, previewTab: null, issues: null };
  } finally {
    await browser.close();
  }
}

// Run the test
testAIBuilderSimple().catch(console.error);