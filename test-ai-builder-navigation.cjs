const puppeteer = require('puppeteer');

async function testAIBuilderNavigation() {
  console.log('🔍 Testing AI Builder Navigation...\n');
  
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
    
    // Test 1: Check current URL and page content
    console.log('🧪 Test 1: Check Current Page');
    console.log('=' .repeat(50));
    
    const currentPage = await page.evaluate(() => {
      return {
        url: window.location.href,
        title: document.title,
        hasAIBuilder: document.body.textContent.includes('AI Builder') ||
                     document.body.textContent.includes('Code Editor') ||
                     document.body.textContent.includes('Monaco'),
        hasDashboard: document.body.textContent.includes('Dashboard') ||
                     document.body.textContent.includes('Welcome back'),
        hasPreview: document.body.textContent.includes('Preview') ||
                   document.body.textContent.includes('Live Preview'),
        bodyText: document.body.textContent.substring(0, 200)
      };
    });
    
    console.log('📊 Current Page Analysis:');
    console.log(`   URL: ${currentPage.url}`);
    console.log(`   Title: ${currentPage.title}`);
    console.log(`   Has AI Builder: ${currentPage.hasAIBuilder ? '✅' : '❌'}`);
    console.log(`   Has Dashboard: ${currentPage.hasDashboard ? '✅' : '❌'}`);
    console.log(`   Has Preview: ${currentPage.hasPreview ? '✅' : '❌'}`);
    console.log(`   Body Text: ${currentPage.bodyText}`);
    
    // Test 2: Check for AI Builder elements
    console.log('\n🧪 Test 2: Check AI Builder Elements');
    console.log('=' .repeat(50));
    
    const aiBuilderElements = await page.evaluate(() => {
      return {
        hasCodeEditor: !!document.querySelector('[class*="monaco"]') ||
                      !!document.querySelector('textarea') ||
                      !!document.querySelector('[class*="editor"]'),
        hasPreview: !!document.querySelector('[class*="preview"]') ||
                   !!document.querySelector('iframe'),
        hasTabs: document.querySelectorAll('[role="tab"], .tab, button').length,
        hasFileManager: !!document.querySelector('[class*="file"]') ||
                       !!document.querySelector('[class*="manager"]'),
        hasAIPrompt: !!document.querySelector('textarea') ||
                    !!document.querySelector('[class*="prompt"]'),
        totalButtons: document.querySelectorAll('button').length,
        totalInputs: document.querySelectorAll('input, textarea').length
      };
    });
    
    console.log('📊 AI Builder Elements:');
    console.log(`   Has Code Editor: ${aiBuilderElements.hasCodeEditor ? '✅' : '❌'}`);
    console.log(`   Has Preview: ${aiBuilderElements.hasPreview ? '✅' : '❌'}`);
    console.log(`   Has Tabs: ${aiBuilderElements.hasTabs} tabs`);
    console.log(`   Has File Manager: ${aiBuilderElements.hasFileManager ? '✅' : '❌'}`);
    console.log(`   Has AI Prompt: ${aiBuilderElements.hasAIPrompt ? '✅' : '❌'}`);
    console.log(`   Total Buttons: ${aiBuilderElements.totalButtons}`);
    console.log(`   Total Inputs: ${aiBuilderElements.totalInputs}`);
    
    // Test 3: Try to find and click AI Builder button
    console.log('\n🧪 Test 3: Find AI Builder Button');
    console.log('=' .repeat(50));
    
    const aiBuilderButton = await page.evaluateHandle(() => {
      const buttons = Array.from(document.querySelectorAll('button, a'));
      return buttons.find(button => 
        button.textContent.includes('AI Builder') ||
        button.textContent.includes('Builder') ||
        button.title.includes('AI Builder')
      );
    });
    
    if (aiBuilderButton) {
      console.log('   ✅ Found AI Builder button');
      await aiBuilderButton.click();
      console.log('   ✅ Clicked AI Builder button');
      
      // Wait for navigation
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Check if we're now on AI Builder page
      const afterClick = await page.evaluate(() => {
        return {
          url: window.location.href,
          hasAIBuilder: document.body.textContent.includes('AI Builder') ||
                       document.body.textContent.includes('Code Editor') ||
                       document.body.textContent.includes('Monaco'),
          hasPreview: document.body.textContent.includes('Preview') ||
                     document.body.textContent.includes('Live Preview'),
          bodyText: document.body.textContent.substring(0, 200)
        };
      });
      
      console.log('📊 After Click Analysis:');
      console.log(`   URL: ${afterClick.url}`);
      console.log(`   Has AI Builder: ${afterClick.hasAIBuilder ? '✅' : '❌'}`);
      console.log(`   Has Preview: ${afterClick.hasPreview ? '✅' : '❌'}`);
      console.log(`   Body Text: ${afterClick.bodyText}`);
      
    } else {
      console.log('   ❌ AI Builder button not found');
    }
    
    // Test 4: Check for any navigation issues
    console.log('\n🧪 Test 4: Navigation Analysis');
    console.log('=' .repeat(50));
    
    const navigation = await page.evaluate(() => {
      return {
        hasNavigation: !!document.querySelector('nav') ||
                      !!document.querySelector('[class*="nav"]') ||
                      !!document.querySelector('[class*="menu"]'),
        hasLinks: document.querySelectorAll('a').length,
        hasButtons: document.querySelectorAll('button').length,
        hasRouter: document.body.textContent.includes('router') ||
                  document.body.textContent.includes('route'),
        hasReactRouter: document.body.textContent.includes('react-router')
      };
    });
    
    console.log('📊 Navigation Analysis:');
    console.log(`   Has Navigation: ${navigation.hasNavigation ? '✅' : '❌'}`);
    console.log(`   Has Links: ${navigation.hasLinks}`);
    console.log(`   Has Buttons: ${navigation.hasButtons}`);
    console.log(`   Has Router: ${navigation.hasRouter ? '✅' : '❌'}`);
    console.log(`   Has React Router: ${navigation.hasReactRouter ? '✅' : '❌'}`);
    
    // Final Assessment
    console.log('\n🎯 Final Assessment');
    console.log('=' .repeat(50));
    
    const totalScore = (currentPage.hasAIBuilder ? 25 : 0) + 
                     (aiBuilderElements.hasCodeEditor ? 25 : 0) + 
                     (aiBuilderElements.hasPreview ? 25 : 0) + 
                     (aiBuilderElements.hasTabs > 0 ? 25 : 0);
    
    console.log(`📊 AI Builder Navigation Score: ${totalScore}/100`);
    
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
    
    return { totalScore, currentPage, aiBuilderElements };
    
  } catch (error) {
    console.error('❌ Test failed:', error);
    return { totalScore: 0, currentPage: null, aiBuilderElements: null };
  } finally {
    await browser.close();
  }
}

// Run the test
testAIBuilderNavigation().catch(console.error);

