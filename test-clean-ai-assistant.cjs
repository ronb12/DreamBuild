const puppeteer = require('puppeteer');

async function testCleanAIAssistant() {
  console.log('🔍 Testing Clean AI Assistant...');
  
  const browser = await puppeteer.launch({ 
    headless: false,
    defaultViewport: { width: 1920, height: 1080 },
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  try {
    const page = await browser.newPage();
    
    // Enable console logging to capture any logs
    const consoleLogs = [];
    page.on('console', msg => {
      consoleLogs.push({
        type: msg.type(),
        text: msg.text(),
        location: msg.location()
      });
    });
    
    // Navigate to AI Builder
    console.log('📱 Navigating to DreamBuild AI Builder...');
    await page.goto('https://dreambuild-2024-app.web.app/ai-builder', { 
      waitUntil: 'networkidle2',
      timeout: 30000 
    });
    
    // Wait for page to load
    await new Promise(resolve => setTimeout(resolve, 8000));
    
    // Check if AI Assistant is clean
    const aiAssistantCheck = await page.evaluate(() => {
      // Check for any debug text or console output in the AI Assistant
      const aiAssistant = document.querySelector('[data-testid="ai-assistant"], .ai-assistant');
      const aiContent = document.body.textContent;
      
      // Look for unwanted debug text
      const hasDebugText = aiContent.includes('🔧 AIPromptSimplified') || 
                          aiContent.includes('🔧 AIChatInterface') ||
                          aiContent.includes('🔘 Send button clicked') ||
                          aiContent.includes('manifest.json') ||
                          aiContent.includes('ServiceWorkerRegistration');
      
      // Check if AI Assistant has clean interface
      const promptInput = document.querySelector('textarea[placeholder*="Describe"], input[placeholder*="Describe"]');
      const generateButton = document.querySelector('[data-testid="generate-button"]');
      
      return {
        hasDebugText: hasDebugText,
        hasCleanInterface: promptInput && generateButton,
        aiAssistantFound: aiAssistant !== null,
        promptInputFound: promptInput !== null,
        generateButtonFound: generateButton !== null
      };
    });
    
    console.log('AI Assistant Check:', aiAssistantCheck);
    
    // Test AI Assistant functionality
    const functionalityTest = await page.evaluate(() => {
      const promptInput = document.querySelector('textarea[placeholder*="Describe"], input[placeholder*="Describe"]');
      if (promptInput) {
        promptInput.value = 'Create a simple React component';
        promptInput.dispatchEvent(new Event('input', { bubbles: true }));
        return { promptEntered: true, promptText: promptInput.value };
      }
      return { promptEntered: false, promptText: null };
    });
    
    console.log('Functionality Test:', functionalityTest);
    
    // Check console logs
    const consoleCheck = {
      totalLogs: consoleLogs.length,
      errorLogs: consoleLogs.filter(log => log.type === 'error').length,
      warnLogs: consoleLogs.filter(log => log.type === 'warn').length,
      debugLogs: consoleLogs.filter(log => log.text.includes('🔧') || log.text.includes('🔘')).length,
      manifestErrors: consoleLogs.filter(log => log.text.includes('manifest.json')).length
    };
    
    console.log('Console Logs Check:', consoleCheck);
    
    // Take screenshot
    await page.screenshot({ 
      path: 'clean-ai-assistant-test.png',
      fullPage: true 
    });
    
    console.log('📸 Screenshot saved: clean-ai-assistant-test.png');
    
    // Final assessment
    const finalAssessment = {
      noDebugText: !aiAssistantCheck.hasDebugText,
      cleanInterface: aiAssistantCheck.hasCleanInterface,
      functionalityWorking: functionalityTest.promptEntered,
      noConsoleErrors: consoleCheck.errorLogs === 0,
      noDebugLogs: consoleCheck.debugLogs === 0,
      overallScore: 0
    };
    
    finalAssessment.overallScore = [
      finalAssessment.noDebugText,
      finalAssessment.cleanInterface,
      finalAssessment.functionalityWorking,
      finalAssessment.noConsoleErrors,
      finalAssessment.noDebugLogs
    ].filter(Boolean).length;
    
    const percentage = Math.round((finalAssessment.overallScore / 5) * 100);
    
    console.log('\n🎯 Clean AI Assistant Assessment:');
    console.log('=================================');
    console.log(`No Debug Text: ${finalAssessment.noDebugText ? '✅' : '❌'}`);
    console.log(`Clean Interface: ${finalAssessment.cleanInterface ? '✅' : '❌'}`);
    console.log(`Functionality Working: ${finalAssessment.functionalityWorking ? '✅' : '❌'}`);
    console.log(`No Console Errors: ${finalAssessment.noConsoleErrors ? '✅' : '❌'}`);
    console.log(`No Debug Logs: ${finalAssessment.noDebugLogs ? '✅' : '❌'}`);
    console.log(`Overall Score: ${finalAssessment.overallScore}/5 (${percentage}%)`);
    
    if (percentage >= 100) {
      console.log('🏆 PERFECT: AI Assistant is completely clean!');
    } else if (percentage >= 80) {
      console.log('✅ EXCELLENT: AI Assistant is mostly clean!');
    } else if (percentage >= 60) {
      console.log('👍 GOOD: AI Assistant is working well!');
    } else {
      console.log('⚠️ NEEDS IMPROVEMENT: AI Assistant needs cleaning!');
    }
    
    return finalAssessment;
    
  } catch (error) {
    console.error('❌ Clean AI Assistant test failed:', error);
    return { error: error.message };
  } finally {
    await browser.close();
  }
}

testCleanAIAssistant().then(result => {
  if (result.error) {
    console.error('Clean AI Assistant test failed:', result.error);
  } else {
    console.log('\n🎉 Clean AI Assistant test completed!');
    console.log(`Overall Score: ${result.overallScore}/5 (${Math.round((result.overallScore / 5) * 100)}%)`);
  }
}).catch(console.error);

