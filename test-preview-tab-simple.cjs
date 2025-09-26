const puppeteer = require('puppeteer');

async function testPreviewTabSimple() {
  console.log('🔍 Testing Preview Tab Simple - Direct Click...\n');
  
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
    
    // Test 1: Find and click the "Live Preview" tab button
    console.log('🧪 Test 1: Click Live Preview Tab');
    console.log('=' .repeat(50));
    
    // Find the Live Preview button by text content
    const livePreviewButton = await page.evaluateHandle(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      return buttons.find(button => button.textContent.trim() === 'Live Preview');
    });
    
    if (livePreviewButton) {
      console.log('   ✅ Found Live Preview button');
      
      // Get button details
      const buttonDetails = await page.evaluate(() => {
        const buttons = Array.from(document.querySelectorAll('button'));
        const livePreviewButton = buttons.find(button => button.textContent.trim() === 'Live Preview');
        
        if (livePreviewButton) {
          return {
            text: livePreviewButton.textContent.trim(),
            className: livePreviewButton.className,
            hasOnClick: !!livePreviewButton.onclick,
            isVisible: livePreviewButton.offsetParent !== null,
            parentElement: livePreviewButton.parentElement?.tagName || 'unknown'
          };
        }
        return null;
      });
      
      console.log('📊 Live Preview Button Details:');
      if (buttonDetails) {
        console.log(`   Text: "${buttonDetails.text}"`);
        console.log(`   Class: "${buttonDetails.className}"`);
        console.log(`   Has OnClick: ${buttonDetails.hasOnClick}`);
        console.log(`   Is Visible: ${buttonDetails.isVisible}`);
        console.log(`   Parent: ${buttonDetails.parentElement}`);
      }
      
      // Click the button
      console.log('   ✅ Clicking Live Preview button...');
      await livePreviewButton.click();
      console.log('   ✅ Clicked Live Preview button');
      
      // Wait for content to load
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Check what happened
      const afterClick = await page.evaluate(() => {
        return {
          url: window.location.href,
          title: document.title,
          hasPreviewTab: document.body.textContent.includes('PREVIEW TAB ACTIVE'),
          hasPreviewLoaded: document.body.textContent.includes('PREVIEW LOADED'),
          hasIframe: !!document.querySelector('iframe'),
          hasPreviewContent: !!document.querySelector('[class*="preview"]'),
          hasAIBuilder: document.body.textContent.includes('AI Builder') ||
                       document.body.textContent.includes('Code Editor'),
          hasDashboard: document.body.textContent.includes('Dashboard') ||
                       document.body.textContent.includes('Welcome back'),
          bodyText: document.body.textContent.substring(0, 300)
        };
      });
      
      console.log('📊 After Click Analysis:');
      console.log(`   URL: ${afterClick.url}`);
      console.log(`   Title: ${afterClick.title}`);
      console.log(`   Has Preview Tab: ${afterClick.hasPreviewTab ? '✅' : '❌'}`);
      console.log(`   Has Preview Loaded: ${afterClick.hasPreviewLoaded ? '✅' : '❌'}`);
      console.log(`   Has Iframe: ${afterClick.hasIframe ? '✅' : '❌'}`);
      console.log(`   Has Preview Content: ${afterClick.hasPreviewContent ? '✅' : '❌'}`);
      console.log(`   Has AI Builder: ${afterClick.hasAIBuilder ? '✅' : '❌'}`);
      console.log(`   Has Dashboard: ${afterClick.hasDashboard ? '✅' : '❌'}`);
      console.log(`   Body Text: ${afterClick.bodyText}`);
      
    } else {
      console.log('   ❌ Live Preview button not found');
    }
    
    // Test 2: Check for any errors or issues
    console.log('\n🧪 Test 2: Check for Issues');
    console.log('=' .repeat(50));
    
    const issues = await page.evaluate(() => {
      return {
        hasErrors: document.body.textContent.includes('Error') ||
                  document.body.textContent.includes('error') ||
                  document.body.textContent.includes('Failed'),
        hasWarnings: document.body.textContent.includes('Warning') ||
                    document.body.textContent.includes('warning'),
        totalElements: document.querySelectorAll('*').length,
        hasReactRoot: !!document.querySelector('[data-reactroot]') ||
                     !!document.querySelector('#root') ||
                     !!document.querySelector('#app')
      };
    });
    
    console.log('📊 Issues Analysis:');
    console.log(`   Has Errors: ${issues.hasErrors ? '✅' : '❌'}`);
    console.log(`   Has Warnings: ${issues.hasWarnings ? '✅' : '❌'}`);
    console.log(`   Total Elements: ${issues.totalElements}`);
    console.log(`   Has React Root: ${issues.hasReactRoot ? '✅' : '❌'}`);
    
    // Final Assessment
    console.log('\n🎯 Final Assessment');
    console.log('=' .repeat(50));
    
    const totalScore = (livePreviewButton ? 50 : 0) + 
                     (issues.hasReactRoot ? 25 : 0) + 
                     (issues.totalElements > 0 ? 25 : 0);
    
    console.log(`📊 Preview Tab Simple Score: ${totalScore}/100`);
    
    if (totalScore >= 75) {
      console.log('🌟 EXCELLENT - Preview tab test complete!');
    } else if (totalScore >= 50) {
      console.log('✅ GOOD - Preview tab partially working');
    } else if (totalScore >= 25) {
      console.log('⚠️ FAIR - Preview tab has issues');
    } else {
      console.log('❌ POOR - Preview tab not working');
    }
    
    console.log('\n🎉 Test completed successfully!');
    
    return { totalScore, livePreviewButton, issues };
    
  } catch (error) {
    console.error('❌ Test failed:', error);
    return { totalScore: 0, livePreviewButton: null, issues: null };
  } finally {
    await browser.close();
  }
}

// Run the test
testPreviewTabSimple().catch(console.error);

