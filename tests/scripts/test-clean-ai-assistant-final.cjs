const puppeteer = require('puppeteer');

async function testCleanAIAssistantFinal() {
  console.log('🔍 Testing Clean AI Assistant - Final Check...');
  
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
    
    // Check for status panels
    const statusPanelCheck = await page.evaluate(() => {
      const aiContent = document.body.textContent;
      
      // Check for the specific status panel text
      const hasAIModels = aiContent.includes('Available AI Models');
      const hasWebSearch = aiContent.includes('Web Search Integration');
      const hasIntegrationStatus = aiContent.includes('Integration Status');
      const hasAllIntegrations = aiContent.includes('All Integrations: 100%');
      
      // Check if AI Assistant is still functional
      const promptInput = document.querySelector('textarea[placeholder*="Describe"], input[placeholder*="Describe"]');
      const generateButton = document.querySelector('[data-testid="generate-button"]');
      
      return {
        hasAIModels: hasAIModels,
        hasWebSearch: hasWebSearch,
        hasIntegrationStatus: hasIntegrationStatus,
        hasAllIntegrations: hasAllIntegrations,
        aiAssistantWorking: promptInput && generateButton,
        promptInputFound: promptInput !== null,
        generateButtonFound: generateButton !== null
      };
    });
    
    console.log('Status Panel Check:', statusPanelCheck);
    
    // Check for plus button dropdown
    const plusButtonCheck = await page.evaluate(() => {
      const plusButton = document.querySelector('button[title="Quick Actions"]');
      const quickActionsText = document.body.textContent.includes('Quick Actions');
      
      return {
        plusButtonFound: plusButton !== null,
        quickActionsAvailable: quickActionsText
      };
    });
    
    console.log('Plus Button Check:', plusButtonCheck);
    
    // Take screenshot
    await page.screenshot({ 
      path: 'clean-ai-assistant-final-test.png',
      fullPage: true 
    });
    
    console.log('📸 Screenshot saved: clean-ai-assistant-final-test.png');
    
    // Final assessment
    const finalAssessment = {
      statusPanelsRemoved: !statusPanelCheck.hasAIModels && 
                          !statusPanelCheck.hasWebSearch && 
                          !statusPanelCheck.hasIntegrationStatus && 
                          !statusPanelCheck.hasAllIntegrations,
      aiAssistantWorking: statusPanelCheck.aiAssistantWorking,
      plusButtonWorking: plusButtonCheck.plusButtonFound && plusButtonCheck.quickActionsAvailable,
      overallScore: 0
    };
    
    finalAssessment.overallScore = [
      finalAssessment.statusPanelsRemoved,
      finalAssessment.aiAssistantWorking,
      finalAssessment.plusButtonWorking
    ].filter(Boolean).length;
    
    const percentage = Math.round((finalAssessment.overallScore / 3) * 100);
    
    console.log('\n🎯 Final Clean AI Assistant Assessment:');
    console.log('=======================================');
    console.log(`Status Panels Removed: ${finalAssessment.statusPanelsRemoved ? '✅' : '❌'}`);
    console.log(`AI Assistant Working: ${finalAssessment.aiAssistantWorking ? '✅' : '❌'}`);
    console.log(`Plus Button Working: ${finalAssessment.plusButtonWorking ? '✅' : '❌'}`);
    console.log(`Overall Score: ${finalAssessment.overallScore}/3 (${percentage}%)`);
    
    if (percentage >= 100) {
      console.log('🏆 PERFECT: AI Assistant is completely clean!');
    } else if (percentage >= 67) {
      console.log('✅ EXCELLENT: AI Assistant is mostly clean!');
    } else if (percentage >= 33) {
      console.log('👍 GOOD: AI Assistant is working well!');
    } else {
      console.log('⚠️ NEEDS IMPROVEMENT: AI Assistant needs more cleaning!');
    }
    
    return finalAssessment;
    
  } catch (error) {
    console.error('❌ Final clean test failed:', error);
    return { error: error.message };
  } finally {
    await browser.close();
  }
}

testCleanAIAssistantFinal().then(result => {
  if (result.error) {
    console.error('Final clean test failed:', result.error);
  } else {
    console.log('\n🎉 Final clean test completed!');
    console.log(`Overall Score: ${result.overallScore}/3 (${Math.round((result.overallScore / 3) * 100)}%)`);
  }
}).catch(console.error);

