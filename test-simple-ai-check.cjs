const puppeteer = require('puppeteer');

async function testSimpleAICheck() {
  console.log('🔍 Simple AI Assistant Check...');
  
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
    
    // Simple check for AI Assistant elements
    const simpleCheck = await page.evaluate(() => {
      const promptInput = document.querySelector('textarea[placeholder*="Describe"], input[placeholder*="Describe"]');
      const generateButton = document.querySelector('[data-testid="generate-button"]');
      const aiContent = document.body.textContent;
      
      return {
        promptInputFound: promptInput !== null,
        generateButtonFound: generateButton !== null,
        hasDebugText: aiContent.includes('🔧') || aiContent.includes('🔘'),
        pageLoaded: document.readyState === 'complete'
      };
    });
    
    console.log('Simple Check Result:', simpleCheck);
    
    // Check console logs for debug messages
    const debugLogs = consoleLogs.filter(log => 
      log.text.includes('🔧') || 
      log.text.includes('🔘') || 
      log.text.includes('AIPromptSimplified') ||
      log.text.includes('AIChatInterface')
    );
    
    console.log('Debug Logs Found:', debugLogs.length);
    if (debugLogs.length > 0) {
      console.log('Debug Logs:', debugLogs.map(log => log.text));
    }
    
    // Check for manifest errors
    const manifestErrors = consoleLogs.filter(log => 
      log.text.includes('manifest.json')
    );
    
    console.log('Manifest Errors Found:', manifestErrors.length);
    if (manifestErrors.length > 0) {
      console.log('Manifest Errors:', manifestErrors.map(log => log.text));
    }
    
    // Take screenshot
    await page.screenshot({ 
      path: 'simple-ai-check-test.png',
      fullPage: true 
    });
    
    console.log('📸 Screenshot saved: simple-ai-check-test.png');
    
    // Final assessment
    const score = [
      simpleCheck.promptInputFound,
      simpleCheck.generateButtonFound,
      !simpleCheck.hasDebugText,
      debugLogs.length === 0,
      manifestErrors.length === 0
    ].filter(Boolean).length;
    
    const percentage = Math.round((score / 5) * 100);
    
    console.log('\n🎯 Simple AI Assistant Assessment:');
    console.log('=================================');
    console.log(`Prompt Input Found: ${simpleCheck.promptInputFound ? '✅' : '❌'}`);
    console.log(`Generate Button Found: ${simpleCheck.generateButtonFound ? '✅' : '❌'}`);
    console.log(`No Debug Text in UI: ${!simpleCheck.hasDebugText ? '✅' : '❌'}`);
    console.log(`No Debug Console Logs: ${debugLogs.length === 0 ? '✅' : '❌'}`);
    console.log(`No Manifest Errors: ${manifestErrors.length === 0 ? '✅' : '❌'}`);
    console.log(`Overall Score: ${score}/5 (${percentage}%)`);
    
    if (percentage >= 100) {
      console.log('🏆 PERFECT: AI Assistant is completely clean!');
    } else if (percentage >= 80) {
      console.log('✅ EXCELLENT: AI Assistant is mostly clean!');
    } else if (percentage >= 60) {
      console.log('👍 GOOD: AI Assistant is working well!');
    } else {
      console.log('⚠️ NEEDS IMPROVEMENT: AI Assistant needs cleaning!');
    }
    
    return { score, percentage };
    
  } catch (error) {
    console.error('❌ Simple AI check failed:', error);
    return { error: error.message };
  } finally {
    await browser.close();
  }
}

testSimpleAICheck().then(result => {
  if (result.error) {
    console.error('Simple AI check failed:', result.error);
  } else {
    console.log('\n🎉 Simple AI check completed!');
    console.log(`Overall Score: ${result.score}/5 (${result.percentage}%)`);
  }
}).catch(console.error);

