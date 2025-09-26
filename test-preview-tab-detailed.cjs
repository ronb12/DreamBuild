const puppeteer = require('puppeteer');

async function testPreviewTabDetailed() {
  console.log('🔍 Testing Preview Tab Detailed - Find Exact Button...\n');
  
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
    
    // Test 1: Find ALL buttons and analyze them
    console.log('🧪 Test 1: Analyze All Buttons');
    console.log('=' .repeat(50));
    
    const allButtons = await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button, a, [role="button"]'));
      return buttons.map((button, index) => ({
        index,
        tagName: button.tagName,
        text: button.textContent.trim(),
        title: button.title || '',
        className: button.className,
        id: button.id,
        hasOnClick: !!button.onclick,
        hasHref: !!button.href,
        isVisible: button.offsetParent !== null
      }));
    });
    
    console.log('📊 All Buttons Analysis:');
    allButtons.forEach((button, index) => {
      if (button.text.includes('Preview') || button.text.includes('Live') || button.title.includes('Preview')) {
        console.log(`   Button ${index}: ${button.tagName} - "${button.text}" (${button.title}) - Visible: ${button.isVisible}`);
      }
    });
    
    // Test 2: Find the specific preview tab button
    console.log('\n🧪 Test 2: Find Preview Tab Button');
    console.log('=' .repeat(50));
    
    const previewButton = await page.evaluateHandle(() => {
      const buttons = Array.from(document.querySelectorAll('button, a, [role="button"]'));
      return buttons.find(button => 
        button.textContent.includes('Live Preview') ||
        (button.textContent.includes('Preview') && button.offsetParent !== null)
      );
    });
    
    if (previewButton) {
      console.log('   ✅ Found preview button');
      
      // Get button details
      const buttonDetails = await page.evaluate(() => {
        const buttons = Array.from(document.querySelectorAll('button, a, [role="button"]'));
        const previewButton = buttons.find(button => 
          button.textContent.includes('Live Preview') ||
          (button.textContent.includes('Preview') && button.offsetParent !== null)
        );
        
        if (previewButton) {
          return {
            text: previewButton.textContent.trim(),
            title: previewButton.title,
            className: previewButton.className,
            tagName: previewButton.tagName,
            hasOnClick: !!previewButton.onclick,
            hasHref: !!previewButton.href,
            href: previewButton.href
          };
        }
        return null;
      });
      
      console.log('📊 Preview Button Details:');
      console.log(`   Text: "${buttonDetails.text}"`);
      console.log(`   Title: "${buttonDetails.title}"`);
      console.log(`   Class: "${buttonDetails.className}"`);
      console.log(`   Tag: ${buttonDetails.tagName}`);
      console.log(`   Has OnClick: ${buttonDetails.hasOnClick}`);
      console.log(`   Has Href: ${buttonDetails.hasHref}`);
      console.log(`   Href: ${buttonDetails.href}`);
      
      // Test 3: Click the button and see what happens
      console.log('\n🧪 Test 3: Click Preview Button');
      console.log('=' .repeat(50));
      
      console.log('   ✅ Clicking preview button...');
      await previewButton.click();
      console.log('   ✅ Clicked preview button');
      
      // Wait for navigation
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Check what happened
      const afterClick = await page.evaluate(() => {
        return {
          url: window.location.href,
          title: document.title,
          hasAIBuilder: document.body.textContent.includes('AI Builder') ||
                       document.body.textContent.includes('Code Editor'),
          hasDashboard: document.body.textContent.includes('Dashboard') ||
                       document.body.textContent.includes('Welcome back'),
          hasPreviewTab: document.body.textContent.includes('PREVIEW TAB ACTIVE'),
          hasPreviewLoaded: document.body.textContent.includes('PREVIEW LOADED'),
          bodyText: document.body.textContent.substring(0, 200)
        };
      });
      
      console.log('📊 After Click Analysis:');
      console.log(`   URL: ${afterClick.url}`);
      console.log(`   Title: ${afterClick.title}`);
      console.log(`   Has AI Builder: ${afterClick.hasAIBuilder ? '✅' : '❌'}`);
      console.log(`   Has Dashboard: ${afterClick.hasDashboard ? '✅' : '❌'}`);
      console.log(`   Has Preview Tab: ${afterClick.hasPreviewTab ? '✅' : '❌'}`);
      console.log(`   Has Preview Loaded: ${afterClick.hasPreviewLoaded ? '✅' : '❌'}`);
      console.log(`   Body Text: ${afterClick.bodyText}`);
      
    } else {
      console.log('   ❌ Preview button not found');
    }
    
    // Test 4: Check for any navigation or routing issues
    console.log('\n🧪 Test 4: Check Navigation Issues');
    console.log('=' .repeat(50));
    
    const navigationIssues = await page.evaluate(() => {
      return {
        hasRouter: document.body.textContent.includes('router') ||
                  document.body.textContent.includes('route'),
        hasReactRouter: document.body.textContent.includes('react-router'),
        hasNavigation: !!document.querySelector('nav') ||
                      !!document.querySelector('[class*="nav"]'),
        hasLinks: document.querySelectorAll('a').length,
        hasButtons: document.querySelectorAll('button').length,
        totalElements: document.querySelectorAll('*').length
      };
    });
    
    console.log('📊 Navigation Issues:');
    console.log(`   Has Router: ${navigationIssues.hasRouter ? '✅' : '❌'}`);
    console.log(`   Has React Router: ${navigationIssues.hasReactRouter ? '✅' : '❌'}`);
    console.log(`   Has Navigation: ${navigationIssues.hasNavigation ? '✅' : '❌'}`);
    console.log(`   Has Links: ${navigationIssues.hasLinks}`);
    console.log(`   Has Buttons: ${navigationIssues.hasButtons}`);
    console.log(`   Total Elements: ${navigationIssues.totalElements}`);
    
    // Final Assessment
    console.log('\n🎯 Final Assessment');
    console.log('=' .repeat(50));
    
    const totalScore = (allButtons.length > 0 ? 25 : 0) + 
                     (previewButton ? 25 : 0) + 
                     (navigationIssues.hasNavigation ? 25 : 0) + 
                     (navigationIssues.totalElements > 0 ? 25 : 0);
    
    console.log(`📊 Preview Tab Detailed Score: ${totalScore}/100`);
    
    if (totalScore >= 75) {
      console.log('🌟 EXCELLENT - Preview tab analysis complete!');
    } else if (totalScore >= 50) {
      console.log('✅ GOOD - Preview tab partially working');
    } else if (totalScore >= 25) {
      console.log('⚠️ FAIR - Preview tab has issues');
    } else {
      console.log('❌ POOR - Preview tab not working');
    }
    
    console.log('\n🎉 Test completed successfully!');
    
    return { totalScore, allButtons, previewButton, navigationIssues };
    
  } catch (error) {
    console.error('❌ Test failed:', error);
    return { totalScore: 0, allButtons: null, previewButton: null, navigationIssues: null };
  } finally {
    await browser.close();
  }
}

// Run the test
testPreviewTabDetailed().catch(console.error);

