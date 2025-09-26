const puppeteer = require('puppeteer');

async function testAIBuilderTabs() {
  console.log('🔍 Testing AI Builder Tabs - Find Correct Tab Buttons...\n');
  
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
    
    // Test 1: Find all tab buttons within the AI Builder
    console.log('🧪 Test 1: Find AI Builder Tab Buttons');
    console.log('=' .repeat(50));
    
    const tabButtons = await page.evaluate(() => {
      // Look for buttons that might be tabs within the AI Builder
      const allButtons = Array.from(document.querySelectorAll('button, [role="button"]'));
      const tabButtons = allButtons.filter(button => {
        const text = button.textContent.trim();
        const className = button.className;
        const isVisible = button.offsetParent !== null;
        
        // Look for buttons that might be tabs (containing tab-related text or classes)
        return (
          text.includes('Code Editor') ||
          text.includes('Live Preview') ||
          text.includes('Terminal') ||
          text.includes('Advanced Workspace') ||
          className.includes('tab') ||
          className.includes('group') ||
          (isVisible && text.length < 20) // Short text buttons that might be tabs
        );
      });
      
      return tabButtons.map((button, index) => ({
        index,
        text: button.textContent.trim(),
        className: button.className,
        isVisible: button.offsetParent !== null,
        hasOnClick: !!button.onclick,
        parentElement: button.parentElement?.tagName || 'unknown'
      }));
    });
    
    console.log('📊 Tab Buttons Found:');
    tabButtons.forEach((button, index) => {
      console.log(`   Tab ${index}: "${button.text}" - Visible: ${button.isVisible} - Parent: ${button.parentElement}`);
    });
    
    // Test 2: Look for the specific tab container
    console.log('\n🧪 Test 2: Find Tab Container');
    console.log('=' .repeat(50));
    
    const tabContainer = await page.evaluate(() => {
      // Look for containers that might hold tabs
      const containers = Array.from(document.querySelectorAll('div, nav, [role="tablist"]'));
      const tabContainers = containers.filter(container => {
        const text = container.textContent;
        const className = container.className;
        
        return (
          text.includes('Code Editor') ||
          text.includes('Live Preview') ||
          text.includes('Terminal') ||
          className.includes('tab') ||
          className.includes('group')
        );
      });
      
      return tabContainers.map((container, index) => ({
        index,
        tagName: container.tagName,
        className: container.className,
        text: container.textContent.substring(0, 100),
        childButtons: container.querySelectorAll('button').length
      }));
    });
    
    console.log('📊 Tab Containers Found:');
    tabContainer.forEach((container, index) => {
      console.log(`   Container ${index}: ${container.tagName} - "${container.className}" - Buttons: ${container.childButtons}`);
    });
    
    // Test 3: Try to find the correct preview tab
    console.log('\n🧪 Test 3: Find Correct Preview Tab');
    console.log('=' .repeat(50));
    
    const correctPreviewTab = await page.evaluateHandle(() => {
      // Look for buttons that are within the AI Builder interface
      const allButtons = Array.from(document.querySelectorAll('button'));
      const aiBuilderButtons = allButtons.filter(button => {
        const rect = button.getBoundingClientRect();
        const isInViewport = rect.top >= 0 && rect.left >= 0 && rect.bottom <= window.innerHeight && rect.right <= window.innerWidth;
        const text = button.textContent.trim();
        
        return isInViewport && (
          text.includes('Live Preview') ||
          text.includes('Preview')
        );
      });
      
      // Return the first one that looks like a tab
      return aiBuilderButtons.find(button => {
        const className = button.className;
        return className.includes('group') || className.includes('tab') || className.includes('rounded');
      });
    });
    
    if (correctPreviewTab) {
      console.log('   ✅ Found correct preview tab');
      
      // Get details about the correct tab
      const tabDetails = await page.evaluate(() => {
        const allButtons = Array.from(document.querySelectorAll('button'));
        const aiBuilderButtons = allButtons.filter(button => {
          const rect = button.getBoundingClientRect();
          const isInViewport = rect.top >= 0 && rect.left >= 0 && rect.bottom <= window.innerHeight && rect.right <= window.innerWidth;
          const text = button.textContent.trim();
          
          return isInViewport && (
            text.includes('Live Preview') ||
            text.includes('Preview')
          );
        });
        
        const correctTab = aiBuilderButtons.find(button => {
          const className = button.className;
          return className.includes('group') || className.includes('tab') || className.includes('rounded');
        });
        
        if (correctTab) {
          return {
            text: correctTab.textContent.trim(),
            className: correctTab.className,
            hasOnClick: !!correctTab.onclick,
            isVisible: correctTab.offsetParent !== null
          };
        }
        return null;
      });
      
      console.log('📊 Correct Preview Tab Details:');
      if (tabDetails) {
        console.log(`   Text: "${tabDetails.text}"`);
        console.log(`   Class: "${tabDetails.className}"`);
        console.log(`   Has OnClick: ${tabDetails.hasOnClick}`);
        console.log(`   Is Visible: ${tabDetails.isVisible}`);
      } else {
        console.log('   ❌ Tab details not available');
      }
      
      // Test 4: Click the correct tab
      console.log('\n🧪 Test 4: Click Correct Preview Tab');
      console.log('=' .repeat(50));
      
      console.log('   ✅ Clicking correct preview tab...');
      await correctPreviewTab.click();
      console.log('   ✅ Clicked correct preview tab');
      
      // Wait for content to load
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Check what happened
      const afterClick = await page.evaluate(() => {
        return {
          url: window.location.href,
          hasPreviewTab: document.body.textContent.includes('PREVIEW TAB ACTIVE'),
          hasPreviewLoaded: document.body.textContent.includes('PREVIEW LOADED'),
          hasIframe: !!document.querySelector('iframe'),
          hasPreviewContent: !!document.querySelector('[class*="preview"]'),
          bodyText: document.body.textContent.substring(0, 200)
        };
      });
      
      console.log('📊 After Click Analysis:');
      console.log(`   URL: ${afterClick.url}`);
      console.log(`   Has Preview Tab: ${afterClick.hasPreviewTab ? '✅' : '❌'}`);
      console.log(`   Has Preview Loaded: ${afterClick.hasPreviewLoaded ? '✅' : '❌'}`);
      console.log(`   Has Iframe: ${afterClick.hasIframe ? '✅' : '❌'}`);
      console.log(`   Has Preview Content: ${afterClick.hasPreviewContent ? '✅' : '❌'}`);
      console.log(`   Body Text: ${afterClick.bodyText}`);
      
    } else {
      console.log('   ❌ Correct preview tab not found');
    }
    
    // Final Assessment
    console.log('\n🎯 Final Assessment');
    console.log('=' .repeat(50));
    
    const totalScore = (tabButtons.length > 0 ? 25 : 0) + 
                     (tabContainer.length > 0 ? 25 : 0) + 
                     (correctPreviewTab ? 25 : 0) + 
                     (tabButtons.length > 0 ? 25 : 0);
    
    console.log(`📊 AI Builder Tabs Score: ${totalScore}/100`);
    
    if (totalScore >= 75) {
      console.log('🌟 EXCELLENT - AI Builder tabs analysis complete!');
    } else if (totalScore >= 50) {
      console.log('✅ GOOD - AI Builder tabs partially working');
    } else if (totalScore >= 25) {
      console.log('⚠️ FAIR - AI Builder tabs have issues');
    } else {
      console.log('❌ POOR - AI Builder tabs not working');
    }
    
    console.log('\n🎉 Test completed successfully!');
    
    return { totalScore, tabButtons, tabContainer, correctPreviewTab };
    
  } catch (error) {
    console.error('❌ Test failed:', error);
    return { totalScore: 0, tabButtons: null, tabContainer: null, correctPreviewTab: null };
  } finally {
    await browser.close();
  }
}

// Run the test
testAIBuilderTabs().catch(console.error);
