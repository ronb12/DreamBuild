const puppeteer = require('puppeteer');

async function testAIAssistantFix() {
  console.log('🔍 Testing AI Assistant Duplication Fix...');
  
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
    
    // Check for AI Assistant duplication
    const aiAssistantCheck = await page.evaluate(() => {
      // Count AIPromptSimplified components
      const aiComponents = document.querySelectorAll('[data-testid*="ai"], .ai-assistant, textarea[placeholder*="Describe"]');
      const promptInputs = document.querySelectorAll('textarea[placeholder*="Describe"], input[placeholder*="Describe"]');
      const generateButtons = document.querySelectorAll('[data-testid="generate-button"], button:has-text("Send"), button:has-text("Generate")');
      
      // Check for duplicate AI Assistant headers
      const aiHeaders = Array.from(document.querySelectorAll('*')).filter(el => 
        el.textContent && el.textContent.includes('AI Assistant')
      );
      
      return {
        aiComponents: aiComponents.length,
        promptInputs: promptInputs.length,
        generateButtons: generateButtons.length,
        aiHeaders: aiHeaders.length,
        hasDuplication: promptInputs.length > 1 || generateButtons.length > 1
      };
    });
    
    console.log('AI Assistant Check:', aiAssistantCheck);
    
    // Test clicking on AI Assistant tab
    const aiTabTest = await page.evaluate(() => {
      const tabs = Array.from(document.querySelectorAll('button'));
      const aiTab = tabs.find(b => 
        b.textContent.includes('AI Assistant') || 
        b.textContent.includes('AI Chat')
      );
      
      if (aiTab) {
        aiTab.click();
        return { clicked: true, tabText: aiTab.textContent.trim() };
      }
      return { clicked: false, tabText: null };
    });
    
    console.log('AI Assistant Tab Test:', aiTabTest);
    
    // Wait for tab to load
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Check AI Assistant functionality after tab click
    const aiFunctionalityCheck = await page.evaluate(() => {
      const promptInputs = document.querySelectorAll('textarea[placeholder*="Describe"], input[placeholder*="Describe"]');
      const generateButtons = document.querySelectorAll('[data-testid="generate-button"], button:has-text("Send"), button:has-text("Generate")');
      const aiContent = document.querySelectorAll('.ai-assistant, [data-testid*="ai"]');
      
      return {
        promptInputs: promptInputs.length,
        generateButtons: generateButtons.length,
        aiContent: aiContent.length,
        isWorking: promptInputs.length === 1 && generateButtons.length === 1
      };
    });
    
    console.log('AI Functionality Check:', aiFunctionalityTest);
    
    // Take screenshot
    await page.screenshot({ 
      path: 'ai-assistant-fix-test.png',
      fullPage: true 
    });
    
    console.log('📸 Screenshot saved: ai-assistant-fix-test.png');
    
    // Final assessment
    const finalAssessment = {
      duplicationFixed: !aiAssistantCheck.hasDuplication,
      aiTabWorking: aiTabTest.clicked,
      functionalityWorking: aiFunctionalityCheck.isWorking,
      overallScore: 0
    };
    
    finalAssessment.overallScore = [
      finalAssessment.duplicationFixed,
      finalAssessment.aiTabWorking,
      finalAssessment.functionalityWorking
    ].filter(Boolean).length;
    
    const percentage = Math.round((finalAssessment.overallScore / 3) * 100);
    
    console.log('\n🎯 AI Assistant Fix Assessment:');
    console.log('==============================');
    console.log(`Duplication Fixed: ${finalAssessment.duplicationFixed ? '✅' : '❌'}`);
    console.log(`AI Tab Working: ${finalAssessment.aiTabWorking ? '✅' : '❌'}`);
    console.log(`Functionality Working: ${finalAssessment.functionalityWorking ? '✅' : '❌'}`);
    console.log(`Overall Score: ${finalAssessment.overallScore}/3 (${percentage}%)`);
    
    if (percentage >= 100) {
      console.log('🏆 PERFECT: AI Assistant duplication fixed!');
    } else if (percentage >= 66) {
      console.log('✅ GOOD: AI Assistant mostly working!');
    } else {
      console.log('⚠️ NEEDS IMPROVEMENT: AI Assistant still has issues!');
    }
    
    return finalAssessment;
    
  } catch (error) {
    console.error('❌ AI Assistant fix test failed:', error);
    return { error: error.message };
  } finally {
    await browser.close();
  }
}

testAIAssistantFix().then(result => {
  if (result.error) {
    console.error('AI Assistant fix test failed:', result.error);
  } else {
    console.log('\n🎉 AI Assistant fix test completed!');
    console.log(`Overall Score: ${result.overallScore}/3 (${Math.round((result.overallScore / 3) * 100)}%)`);
  }
}).catch(console.error);

