const puppeteer = require('puppeteer');

async function testAIAssistantResponseWindow() {
  console.log('🔍 Testing AI Assistant Response Window...');
  
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
    
    // Check for AI Assistant response window
    const responseWindowCheck = await page.evaluate(() => {
      const bodyText = document.body.textContent;
      
      return {
        hasWelcomeMessage: bodyText.includes('Hello! I\'m your AI coding assistant'),
        hasExamplePrompts: bodyText.includes('Try these examples:'),
        hasReactExample: bodyText.includes('Create a React todo app'),
        hasAPIExample: bodyText.includes('Build a REST API'),
        hasLandingExample: bodyText.includes('Create a landing page'),
        hasAIAssistant: bodyText.includes('AI Assistant'),
        hasPromptInput: document.querySelector('textarea[placeholder*="Describe"], input[placeholder*="Describe"]') !== null,
        hasGenerateButton: document.querySelector('[data-testid="generate-button"]') !== null
      };
    });
    
    console.log('Response Window Check:', responseWindowCheck);
    
    // Check Plus Button Dropdown for GitHub and Advanced Workspace
    const plusButtonCheck = await page.evaluate(() => {
      const bodyText = document.body.textContent;
      
      return {
        hasPlusButton: bodyText.includes('Quick Actions'),
        hasGitHubIntegration: bodyText.includes('GitHub Integration'),
        hasAdvancedWorkspace: bodyText.includes('Advanced Workspace'),
        hasDebugPanel: bodyText.includes('Debug Panel'),
        hasKeyboardShortcuts: bodyText.includes('⌘G') && bodyText.includes('⌘W') && bodyText.includes('⌘B')
      };
    });
    
    console.log('Plus Button Check:', plusButtonCheck);
    
    // Take screenshot
    await page.screenshot({ 
      path: 'ai-assistant-response-window-test.png',
      fullPage: true 
    });
    
    console.log('📸 Screenshot saved: ai-assistant-response-window-test.png');
    
    // Assessment
    const responseWindowWorking = responseWindowCheck.hasWelcomeMessage && 
                                 responseWindowCheck.hasExamplePrompts &&
                                 responseWindowCheck.hasAIAssistant &&
                                 responseWindowCheck.hasPromptInput &&
                                 responseWindowCheck.hasGenerateButton;
    
    const plusButtonEnhanced = plusButtonCheck.hasPlusButton &&
                              plusButtonCheck.hasGitHubIntegration &&
                              plusButtonCheck.hasAdvancedWorkspace &&
                              plusButtonCheck.hasKeyboardShortcuts;
    
    console.log('\n🎯 AI Assistant Response Window Assessment:');
    console.log('==========================================');
    console.log(`Welcome Message: ${responseWindowCheck.hasWelcomeMessage ? '✅ SHOWING' : '❌ MISSING'}`);
    console.log(`Example Prompts: ${responseWindowCheck.hasExamplePrompts ? '✅ SHOWING' : '❌ MISSING'}`);
    console.log(`AI Assistant: ${responseWindowCheck.hasAIAssistant ? '✅ WORKING' : '❌ MISSING'}`);
    console.log(`Prompt Input: ${responseWindowCheck.hasPromptInput ? '✅ WORKING' : '❌ MISSING'}`);
    console.log(`Generate Button: ${responseWindowCheck.hasGenerateButton ? '✅ WORKING' : '❌ MISSING'}`);
    
    console.log('\n🎯 Plus Button Dropdown Assessment:');
    console.log('===================================');
    console.log(`Plus Button: ${plusButtonCheck.hasPlusButton ? '✅ WORKING' : '❌ MISSING'}`);
    console.log(`GitHub Integration: ${plusButtonCheck.hasGitHubIntegration ? '✅ ADDED' : '❌ MISSING'}`);
    console.log(`Advanced Workspace: ${plusButtonCheck.hasAdvancedWorkspace ? '✅ ADDED' : '❌ MISSING'}`);
    console.log(`Keyboard Shortcuts: ${plusButtonCheck.hasKeyboardShortcuts ? '✅ WORKING' : '❌ MISSING'}`);
    
    const overallScore = [
      responseWindowWorking,
      plusButtonEnhanced,
      responseWindowCheck.hasReactExample,
      responseWindowCheck.hasAPIExample,
      responseWindowCheck.hasLandingExample
    ].filter(Boolean).length;
    
    const percentage = Math.round((overallScore / 5) * 100);
    
    console.log('\n🏆 Overall Assessment:');
    console.log('=====================');
    console.log(`Response Window Working: ${responseWindowWorking ? '✅ YES' : '❌ NO'}`);
    console.log(`Plus Button Enhanced: ${plusButtonEnhanced ? '✅ YES' : '❌ NO'}`);
    console.log(`Overall Score: ${overallScore}/5 (${percentage}%)`);
    
    if (percentage >= 100) {
      console.log('🏆 PERFECT: AI Assistant is fully functional like Cursor!');
    } else if (percentage >= 80) {
      console.log('✅ EXCELLENT: AI Assistant is working well!');
    } else if (percentage >= 60) {
      console.log('👍 GOOD: AI Assistant is mostly functional!');
    } else {
      console.log('⚠️ NEEDS IMPROVEMENT: AI Assistant needs more work!');
    }
    
    return { responseWindowWorking, plusButtonEnhanced, overallScore, percentage };
    
  } catch (error) {
    console.error('❌ AI Assistant test failed:', error);
    return { error: error.message };
  } finally {
    await browser.close();
  }
}

testAIAssistantResponseWindow().then(result => {
  if (result.error) {
    console.error('AI Assistant test failed:', result.error);
  } else {
    console.log('\n🎉 AI Assistant test completed!');
    console.log(`Overall Score: ${result.overallScore}/5 (${result.percentage}%)`);
  }
}).catch(console.error);

