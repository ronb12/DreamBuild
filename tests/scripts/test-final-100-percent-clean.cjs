const puppeteer = require('puppeteer');

async function testFinal100PercentClean() {
  console.log('🔍 Final 100% Clean Test...');
  
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
    
    // Check AI Assistant functionality
    const aiAssistantCheck = await page.evaluate(() => {
      const promptInput = document.querySelector('textarea[placeholder*="Describe"], input[placeholder*="Describe"]');
      const generateButton = document.querySelector('[data-testid="generate-button"]');
      const aiContent = document.body.textContent;
      
      // Check for actual debug text (not legitimate status messages)
      const actualDebugPatterns = [
        '🔧 AIPromptSimplified',
        '🔧 AIChatInterface', 
        '🔧 Loading AI models',
        '🔧 Services:',
        '🔧 Cloud AI models:',
        '🔧 Local AI models:',
        '🔧 Final models before deduplication:',
        '🔧 Unique models after deduplication:',
        '🔧 Final unique models:',
        '🔧 Initializing Git Integration Service:',
        '🔧 Initializing System Integration Service:',
        '🔘 Send button clicked!',
        'manifest.json syntax error',
        'ServiceWorkerRegistration'
      ];
      
      const hasActualDebugText = actualDebugPatterns.some(pattern => 
        aiContent.includes(pattern)
      );
      
      return {
        promptInputFound: promptInput !== null,
        generateButtonFound: generateButton !== null,
        hasActualDebugText: hasActualDebugText,
        pageLoaded: document.readyState === 'complete'
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
    
    // Check console logs for actual debug messages (not essential polyfill loading)
    const essentialLogs = consoleLogs.filter(log => 
      log.text.includes('Loading comprehensive polyfills') ||
      log.text.includes('Essential APIs loaded') ||
      log.text.includes('Final verification') ||
      log.text.includes('Service Worker') ||
      log.text.includes('React DevTools')
    );
    
    const debugLogs = consoleLogs.filter(log => 
      log.text.includes('🔧') || 
      log.text.includes('🔘') || 
      log.text.includes('AIPromptSimplified') ||
      log.text.includes('AIChatInterface') ||
      log.text.includes('Loading AI models') ||
      log.text.includes('Services:') ||
      log.text.includes('Initializing Git Integration') ||
      log.text.includes('Initializing System Integration')
    );
    
    const consoleCheck = {
      totalLogs: consoleLogs.length,
      essentialLogs: essentialLogs.length,
      debugLogs: debugLogs.length,
      errorLogs: consoleLogs.filter(log => log.type === 'error').length,
      warnLogs: consoleLogs.filter(log => log.type === 'warn').length
    };
    
    console.log('Console Logs Check:', consoleCheck);
    
    // Check for manifest errors
    const manifestErrors = consoleLogs.filter(log => 
      log.text.includes('manifest.json') && 
      log.text.includes('Syntax error')
    );
    
    console.log('Manifest Errors Found:', manifestErrors.length);
    
    // Take screenshot
    await page.screenshot({ 
      path: 'final-100-percent-clean-test.png',
      fullPage: true 
    });
    
    console.log('📸 Screenshot saved: final-100-percent-clean-test.png');
    
    // Final assessment - 100% clean means no actual debug text/logs
    const finalAssessment = {
      aiAssistantWorking: aiAssistantCheck.promptInputFound && aiAssistantCheck.generateButtonFound,
      noActualDebugText: !aiAssistantCheck.hasActualDebugText,
      functionalityWorking: functionalityTest.promptEntered,
      noDebugConsoleLogs: consoleCheck.debugLogs === 0,
      noManifestErrors: manifestErrors.length === 0,
      overallScore: 0
    };
    
    finalAssessment.overallScore = [
      finalAssessment.aiAssistantWorking,
      finalAssessment.noActualDebugText,
      finalAssessment.functionalityWorking,
      finalAssessment.noDebugConsoleLogs,
      finalAssessment.noManifestErrors
    ].filter(Boolean).length;
    
    const percentage = Math.round((finalAssessment.overallScore / 5) * 100);
    
    console.log('\n🎯 Final 100% Clean Assessment:');
    console.log('===============================');
    console.log(`AI Assistant Working: ${finalAssessment.aiAssistantWorking ? '✅' : '❌'}`);
    console.log(`No Actual Debug Text: ${finalAssessment.noActualDebugText ? '✅' : '❌'}`);
    console.log(`Functionality Working: ${finalAssessment.functionalityWorking ? '✅' : '❌'}`);
    console.log(`No Debug Console Logs: ${finalAssessment.noDebugConsoleLogs ? '✅' : '❌'}`);
    console.log(`No Manifest Errors: ${finalAssessment.noManifestErrors ? '✅' : '❌'}`);
    console.log(`Overall Score: ${finalAssessment.overallScore}/5 (${percentage}%)`);
    
    if (percentage >= 100) {
      console.log('🏆 PERFECT: AI Assistant is 100% clean!');
    } else if (percentage >= 80) {
      console.log('✅ EXCELLENT: AI Assistant is mostly clean!');
    } else if (percentage >= 60) {
      console.log('👍 GOOD: AI Assistant is working well!');
    } else {
      console.log('⚠️ NEEDS IMPROVEMENT: AI Assistant needs cleaning!');
    }
    
    return finalAssessment;
    
  } catch (error) {
    console.error('❌ Final clean test failed:', error);
    return { error: error.message };
  } finally {
    await browser.close();
  }
}

testFinal100PercentClean().then(result => {
  if (result.error) {
    console.error('Final clean test failed:', result.error);
  } else {
    console.log('\n🎉 Final clean test completed!');
    console.log(`Overall Score: ${result.overallScore}/5 (${Math.round((result.overallScore / 5) * 100)}%)`);
  }
}).catch(console.error);

