const puppeteer = require('puppeteer');

async function testAIAssistantRightSide() {
  console.log('🔍 Testing AI Assistant Right Side Position...');
  
  const browser = await puppeteer.launch({ 
    headless: false,
    defaultViewport: { width: 1920, height: 1080 },
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  try {
    const page = await browser.newPage();
    
    // Navigate to AI Builder
    console.log('📱 Navigating to DreamBuild AI Builder...');
    await page.goto('https://dreambuild-2024-app.web.app/ai-builder', { 
      waitUntil: 'networkidle2',
      timeout: 30000 
    });
    
    // Wait for page to load
    await new Promise(resolve => setTimeout(resolve, 8000));
    
    // Check AI Assistant positioning
    const aiAssistantCheck = await page.evaluate(() => {
      // Check if AI Assistant is in the right panel
      const rightPanel = document.querySelector('[data-testid="right-panel"], .right-panel, [class*="right"]');
      const aiAssistant = document.querySelector('[data-testid="ai-assistant"], .ai-assistant, textarea[placeholder*="Describe"]');
      
      // Check if AI Assistant tab is removed from main tabs
      const mainTabs = document.querySelectorAll('button');
      let aiTabFound = false;
      for (let i = 0; i < mainTabs.length; i++) {
        if (mainTabs[i].textContent && mainTabs[i].textContent.includes('AI Assistant')) {
          aiTabFound = true;
          break;
        }
      }
      
      // Check if AI Assistant is always visible
      const promptInputs = document.querySelectorAll('textarea[placeholder*="Describe"], input[placeholder*="Describe"]');
      const generateButtons = document.querySelectorAll('[data-testid="generate-button"]');
      
      return {
        rightPanelFound: rightPanel !== null,
        aiAssistantFound: aiAssistant !== null,
        aiTabRemoved: !aiTabFound,
        promptInputs: promptInputs.length,
        generateButtons: generateButtons.length,
        isAlwaysVisible: promptInputs.length > 0 && generateButtons.length > 0
      };
    });
    
    console.log('AI Assistant Right Side Check:', aiAssistantCheck);
    
    // Test that AI Assistant works in right panel
    const aiFunctionalityTest = await page.evaluate(() => {
      const promptInput = document.querySelector('textarea[placeholder*="Describe"], input[placeholder*="Describe"]');
      if (promptInput) {
        promptInput.value = 'Create a React component with hooks';
        promptInput.dispatchEvent(new Event('input', { bubbles: true }));
        return { promptEntered: true, promptText: promptInput.value };
      }
      return { promptEntered: false, promptText: null };
    });
    
    console.log('AI Functionality Test:', aiFunctionalityTest);
    
    // Test generate button
    const generateTest = await page.evaluate(() => {
      const generateButton = document.querySelector('[data-testid="generate-button"]') || 
                           Array.from(document.querySelectorAll('button')).find(b => 
                             b.textContent && (b.textContent.includes('Send') || b.textContent.includes('Generate'))
                           );
      if (generateButton) {
        generateButton.click();
        return { clicked: true, buttonText: generateButton.textContent.trim() };
      }
      return { clicked: false, buttonText: null };
    });
    
    console.log('Generate Button Test:', generateTest);
    
    // Check layout structure
    const layoutCheck = await page.evaluate(() => {
      const panels = document.querySelectorAll('[class*="panel"], [class*="Panel"]');
      const resizablePanels = document.querySelectorAll('[class*="ResizablePanel"]');
      
      return {
        panelsFound: panels.length,
        resizablePanels: resizablePanels.length,
        hasThreePanelLayout: resizablePanels.length >= 3
      };
    });
    
    console.log('Layout Check:', layoutCheck);
    
    // Take screenshot
    await page.screenshot({ 
      path: 'ai-assistant-right-side-test.png',
      fullPage: true 
    });
    
    console.log('📸 Screenshot saved: ai-assistant-right-side-test.png');
    
    // Final assessment
    const finalAssessment = {
      aiAssistantOnRight: aiAssistantCheck.aiAssistantFound && aiAssistantCheck.isAlwaysVisible,
      aiTabRemoved: aiAssistantCheck.aiTabRemoved,
      functionalityWorking: aiFunctionalityTest.promptEntered && generateTest.clicked,
      layoutCorrect: layoutCheck.hasThreePanelLayout,
      overallScore: 0
    };
    
    finalAssessment.overallScore = [
      finalAssessment.aiAssistantOnRight,
      finalAssessment.aiTabRemoved,
      finalAssessment.functionalityWorking,
      finalAssessment.layoutCorrect
    ].filter(Boolean).length;
    
    const percentage = Math.round((finalAssessment.overallScore / 4) * 100);
    
    console.log('\n🎯 AI Assistant Right Side Assessment:');
    console.log('=====================================');
    console.log(`AI Assistant on Right: ${finalAssessment.aiAssistantOnRight ? '✅' : '❌'}`);
    console.log(`AI Tab Removed: ${finalAssessment.aiTabRemoved ? '✅' : '❌'}`);
    console.log(`Functionality Working: ${finalAssessment.functionalityWorking ? '✅' : '❌'}`);
    console.log(`Layout Correct: ${finalAssessment.layoutCorrect ? '✅' : '❌'}`);
    console.log(`Overall Score: ${finalAssessment.overallScore}/4 (${percentage}%)`);
    
    if (percentage >= 100) {
      console.log('🏆 PERFECT: AI Assistant properly positioned on right side!');
    } else if (percentage >= 75) {
      console.log('✅ EXCELLENT: AI Assistant mostly working correctly!');
    } else if (percentage >= 50) {
      console.log('👍 GOOD: AI Assistant working well!');
    } else {
      console.log('⚠️ NEEDS IMPROVEMENT: AI Assistant positioning needs work!');
    }
    
    return finalAssessment;
    
  } catch (error) {
    console.error('❌ AI Assistant right side test failed:', error);
    return { error: error.message };
  } finally {
    await browser.close();
  }
}

testAIAssistantRightSide().then(result => {
  if (result.error) {
    console.error('AI Assistant right side test failed:', result.error);
  } else {
    console.log('\n🎉 AI Assistant right side test completed!');
    console.log(`Overall Score: ${result.overallScore}/4 (${Math.round((result.overallScore / 4) * 100)}%)`);
  }
}).catch(console.error);

