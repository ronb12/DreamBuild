const puppeteer = require('puppeteer');

async function testDebugPanelFix() {
  console.log('🔍 Testing Debug Panel Fix...');
  
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
    
    // Check if debug panel is showing
    const debugPanelCheck = await page.evaluate(() => {
      // Check for debug panel modal or popup
      const debugModals = document.querySelectorAll('[class*="debug"], [class*="Debug"], [data-testid*="debug"]');
      const debugPanels = document.querySelectorAll('.debug-panel, .DebugPanel');
      
      // Check for debug panel in additional tools
      const additionalTools = document.querySelectorAll('button');
      let debugToolFound = false;
      for (let i = 0; i < additionalTools.length; i++) {
        if (additionalTools[i].textContent && additionalTools[i].textContent.includes('Debug Panel')) {
          debugToolFound = true;
          break;
        }
      }
      
      // Check if debug functionality is built into terminal
      const terminalText = document.body.textContent.includes('Debug Tools Built-in') || 
                          document.body.textContent.includes('Debug Built-in') ||
                          document.body.textContent.includes('Chrome DevTools');
      
      return {
        debugModals: debugModals.length,
        debugPanels: debugPanels.length,
        debugToolFound: debugToolFound,
        debugBuiltIn: terminalText,
        noDebugModal: debugModals.length === 0 && debugPanels.length === 0
      };
    });
    
    console.log('Debug Panel Check:', debugPanelCheck);
    
    // Test refresh to ensure debug panel doesn't appear
    console.log('🔄 Testing page refresh...');
    await page.reload({ waitUntil: 'networkidle2' });
    await new Promise(resolve => setTimeout(resolve, 5000));
    
    const refreshCheck = await page.evaluate(() => {
      const debugModals = document.querySelectorAll('[class*="debug"], [class*="Debug"], [data-testid*="debug"]');
      const debugPanels = document.querySelectorAll('.debug-panel, .DebugPanel');
      
      return {
        debugModalsAfterRefresh: debugModals.length,
        debugPanelsAfterRefresh: debugPanels.length,
        noDebugAfterRefresh: debugModals.length === 0 && debugPanels.length === 0
      };
    });
    
    console.log('Refresh Check:', refreshCheck);
    
    // Check terminal for built-in debug functionality
    const terminalCheck = await page.evaluate(() => {
      const terminalText = document.body.textContent;
      
      return {
        hasDebugTools: terminalText.includes('Debug Tools Built-in'),
        hasDebugCommands: terminalText.includes('npm run debug'),
        hasBreakpoints: terminalText.includes('Breakpoints:'),
        hasDebuggerAttached: terminalText.includes('Debugger attached'),
        debugBuiltIn: terminalText.includes('Debug Built-in')
      };
    });
    
    console.log('Terminal Debug Check:', terminalCheck);
    
    // Take screenshot
    await page.screenshot({ 
      path: 'debug-panel-fix-test.png',
      fullPage: true 
    });
    
    console.log('📸 Screenshot saved: debug-panel-fix-test.png');
    
    // Final assessment
    const finalAssessment = {
      debugPanelRemoved: debugPanelCheck.noDebugModal && refreshCheck.noDebugAfterRefresh,
      debugBuiltIn: terminalCheck.debugBuiltIn && terminalCheck.hasDebugTools,
      debugToolRemoved: !debugPanelCheck.debugToolFound,
      functionalityWorking: terminalCheck.hasDebugCommands && terminalCheck.hasBreakpoints,
      overallScore: 0
    };
    
    finalAssessment.overallScore = [
      finalAssessment.debugPanelRemoved,
      finalAssessment.debugBuiltIn,
      finalAssessment.debugToolRemoved,
      finalAssessment.functionalityWorking
    ].filter(Boolean).length;
    
    const percentage = Math.round((finalAssessment.overallScore / 4) * 100);
    
    console.log('\n🎯 Debug Panel Fix Assessment:');
    console.log('==============================');
    console.log(`Debug Panel Removed: ${finalAssessment.debugPanelRemoved ? '✅' : '❌'}`);
    console.log(`Debug Built-in: ${finalAssessment.debugBuiltIn ? '✅' : '❌'}`);
    console.log(`Debug Tool Removed: ${finalAssessment.debugToolRemoved ? '✅' : '❌'}`);
    console.log(`Functionality Working: ${finalAssessment.functionalityWorking ? '✅' : '❌'}`);
    console.log(`Overall Score: ${finalAssessment.overallScore}/4 (${percentage}%)`);
    
    if (percentage >= 100) {
      console.log('🏆 PERFECT: Debug panel properly integrated!');
    } else if (percentage >= 75) {
      console.log('✅ EXCELLENT: Debug panel mostly working correctly!');
    } else if (percentage >= 50) {
      console.log('👍 GOOD: Debug panel working well!');
    } else {
      console.log('⚠️ NEEDS IMPROVEMENT: Debug panel needs more work!');
    }
    
    return finalAssessment;
    
  } catch (error) {
    console.error('❌ Debug panel fix test failed:', error);
    return { error: error.message };
  } finally {
    await browser.close();
  }
}

testDebugPanelFix().then(result => {
  if (result.error) {
    console.error('Debug panel fix test failed:', result.error);
  } else {
    console.log('\n🎉 Debug panel fix test completed!');
    console.log(`Overall Score: ${result.overallScore}/4 (${Math.round((result.overallScore / 4) * 100)}%)`);
  }
}).catch(console.error);

