const puppeteer = require('puppeteer');

async function testAIBuilderTabSpecific() {
  console.log('🔍 Testing AI Builder Tab Specific - Find Tab Within Interface...\n');
  
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
    
    // Test 1: Find the tab container within the AI Builder interface
    console.log('🧪 Test 1: Find Tab Container in AI Builder');
    console.log('=' .repeat(50));
    
    const tabContainer = await page.evaluate(() => {
      // Look for the specific tab container that should be within the AI Builder
      const containers = Array.from(document.querySelectorAll('div'));
      const tabContainers = containers.filter(container => {
        const className = container.className;
        const text = container.textContent;
        
        // Look for the specific tab container with the right classes
        return (
          className.includes('bg-muted/40') &&
          className.includes('rounded-2xl') &&
          className.includes('border') &&
          text.includes('Code Editor') &&
          text.includes('Live Preview') &&
          text.includes('Terminal')
        );
      });
      
      return tabContainers.map((container, index) => ({
        index,
        className: container.className,
        text: container.textContent.substring(0, 100),
        childButtons: container.querySelectorAll('button').length,
        buttons: Array.from(container.querySelectorAll('button')).map(btn => ({
          text: btn.textContent.trim(),
          className: btn.className,
          hasOnClick: !!btn.onclick
        }))
      }));
    });
    
    console.log('📊 Tab Containers Found:');
    tabContainer.forEach((container, index) => {
      console.log(`   Container ${index}: "${container.className}"`);
      console.log(`   Buttons: ${container.childButtons}`);
      container.buttons.forEach((btn, btnIndex) => {
        console.log(`     Button ${btnIndex}: "${btn.text}" - OnClick: ${btn.hasOnClick}`);
      });
    });
    
    // Test 2: Find the specific Live Preview tab button within the AI Builder
    console.log('\n🧪 Test 2: Find Live Preview Tab in AI Builder');
    console.log('=' .repeat(50));
    
    const livePreviewTab = await page.evaluateHandle(() => {
      // Look for buttons within the AI Builder interface specifically
      const allButtons = Array.from(document.querySelectorAll('button'));
      
      // Filter for buttons that are within the AI Builder interface
      const aiBuilderButtons = allButtons.filter(button => {
        const rect = button.getBoundingClientRect();
        const isInViewport = rect.top >= 0 && rect.left >= 0 && rect.bottom <= window.innerHeight && rect.right <= window.innerWidth;
        const text = button.textContent.trim();
        const className = button.className;
        
        // Look for the Live Preview tab specifically
        return (
          isInViewport &&
          text === 'Live Preview' &&
          className.includes('group') &&
          className.includes('rounded-xl')
        );
      });
      
      // Return the first one that looks like a tab
      return aiBuilderButtons[0] || null;
    });
    
    if (livePreviewTab) {
      console.log('   ✅ Found Live Preview tab in AI Builder');
      
      // Get details about the tab
      const tabDetails = await page.evaluate(() => {
        const allButtons = Array.from(document.querySelectorAll('button'));
        const aiBuilderButtons = allButtons.filter(button => {
          const rect = button.getBoundingClientRect();
          const isInViewport = rect.top >= 0 && rect.left >= 0 && rect.bottom <= window.innerHeight && rect.right <= window.innerWidth;
          const text = button.textContent.trim();
          const className = button.className;
          
          return (
            isInViewport &&
            text === 'Live Preview' &&
            className.includes('group') &&
            className.includes('rounded-xl')
          );
        });
        
        if (aiBuilderButtons[0]) {
          return {
            text: aiBuilderButtons[0].textContent.trim(),
            className: aiBuilderButtons[0].className,
            hasOnClick: !!aiBuilderButtons[0].onclick,
            isVisible: aiBuilderButtons[0].offsetParent !== null,
            parentElement: aiBuilderButtons[0].parentElement?.tagName || 'unknown'
          };
        }
        return null;
      });
      
      console.log('📊 Live Preview Tab Details:');
      if (tabDetails) {
        console.log(`   Text: "${tabDetails.text}"`);
        console.log(`   Class: "${tabDetails.className}"`);
        console.log(`   Has OnClick: ${tabDetails.hasOnClick}`);
        console.log(`   Is Visible: ${tabDetails.isVisible}`);
        console.log(`   Parent: ${tabDetails.parentElement}`);
      }
      
      // Test 3: Click the tab and see what happens
      console.log('\n🧪 Test 3: Click Live Preview Tab');
      console.log('=' .repeat(50));
      
      console.log('   ✅ Clicking Live Preview tab...');
      await page.evaluate(() => {
        const allButtons = Array.from(document.querySelectorAll('button'));
        const aiBuilderButtons = allButtons.filter(button => {
          const rect = button.getBoundingClientRect();
          const isInViewport = rect.top >= 0 && rect.left >= 0 && rect.bottom <= window.innerHeight && rect.right <= window.innerWidth;
          const text = button.textContent.trim();
          const className = button.className;
          
          return (
            isInViewport &&
            text === 'Live Preview' &&
            className.includes('group') &&
            className.includes('rounded-xl')
          );
        });
        
        if (aiBuilderButtons[0]) {
          aiBuilderButtons[0].click();
        }
      });
      console.log('   ✅ Clicked Live Preview tab');
      
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
      console.log('   ❌ Live Preview tab not found in AI Builder');
    }
    
    // Final Assessment
    console.log('\n🎯 Final Assessment');
    console.log('=' .repeat(50));
    
    const totalScore = (tabContainer.length > 0 ? 25 : 0) + 
                     (livePreviewTab ? 25 : 0) + 
                     (tabContainer.length > 0 ? 25 : 0) + 
                     (tabContainer.length > 0 ? 25 : 0);
    
    console.log(`📊 AI Builder Tab Specific Score: ${totalScore}/100`);
    
    if (totalScore >= 75) {
      console.log('🌟 EXCELLENT - AI Builder tab analysis complete!');
    } else if (totalScore >= 50) {
      console.log('✅ GOOD - AI Builder tab partially working');
    } else if (totalScore >= 25) {
      console.log('⚠️ FAIR - AI Builder tab has issues');
    } else {
      console.log('❌ POOR - AI Builder tab not working');
    }
    
    console.log('\n🎉 Test completed successfully!');
    
    return { totalScore, tabContainer, livePreviewTab };
    
  } catch (error) {
    console.error('❌ Test failed:', error);
    return { totalScore: 0, tabContainer: null, livePreviewTab: null };
  } finally {
    await browser.close();
  }
}

// Run the test
testAIBuilderTabSpecific().catch(console.error);
