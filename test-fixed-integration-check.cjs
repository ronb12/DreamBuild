const puppeteer = require('puppeteer');

async function testFixedIntegrationCheck() {
  console.log('🔍 Fixed Integration Check...');
  
  const browser = await puppeteer.launch({ 
    headless: false,
    defaultViewport: { width: 1920, height: 1080 },
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  try {
    const page = await browser.newPage();
    
    // Enable console logging
    page.on('console', msg => {
      if (msg.type() === 'log' || msg.type() === 'error' || msg.type() === 'warn') {
        console.log(`[${msg.type().toUpperCase()}] ${msg.text()}`);
      }
    });
    
    // Navigate to AI Builder
    console.log('📱 Navigating to DreamBuild AI Builder...');
    await page.goto('https://dreambuild-2024-app.web.app/ai-builder', { 
      waitUntil: 'networkidle2',
      timeout: 30000 
    });
    
    // Wait for page to load
    await new Promise(resolve => setTimeout(resolve, 8000));
    
    // Check if page loaded properly
    const pageStatus = await page.evaluate(() => {
      const hasContent = document.body.textContent.length > 100;
      const buttons = document.querySelectorAll('button');
      const hasTabs = buttons.length > 0;
      
      // Check for AI content safely
      let hasAI = false;
      try {
        const allElements = document.querySelectorAll('*');
        for (let i = 0; i < allElements.length; i++) {
          if (allElements[i].textContent && (allElements[i].textContent.includes('AI') || allElements[i].textContent.includes('Assistant'))) {
            hasAI = true;
            break;
          }
        }
      } catch (e) {
        hasAI = false;
      }
      
      return {
        hasContent,
        hasTabs,
        hasAI,
        bodyText: document.body.textContent.substring(0, 200)
      };
    });
    
    console.log('Page Status:', pageStatus);
    
    // Check for tabs safely
    const tabsCheck = await page.evaluate(() => {
      const buttons = document.querySelectorAll('button');
      const buttonArray = Array.from(buttons);
      const tabTexts = buttonArray.map(b => b.textContent ? b.textContent.trim() : '').filter(t => t.length > 0);
      
      let hasTerminalTab = false;
      let hasDeploymentTab = false;
      let hasGitHubTab = false;
      
      for (let i = 0; i < tabTexts.length; i++) {
        if (tabTexts[i].includes('Terminal')) hasTerminalTab = true;
        if (tabTexts[i].includes('Deployment')) hasDeploymentTab = true;
        if (tabTexts[i].includes('GitHub')) hasGitHubTab = true;
      }
      
      return {
        totalButtons: buttons.length,
        tabTexts: tabTexts.slice(0, 10), // First 10 tab texts
        hasTerminalTab,
        hasDeploymentTab,
        hasGitHubTab
      };
    });
    
    console.log('Tabs Check:', tabsCheck);
    
    // Check for integration status safely
    const integrationCheck = await page.evaluate(() => {
      const allText = document.body.textContent;
      
      return {
        hasTerminalText: allText.includes('Terminal') || allText.includes('terminal'),
        hasFirebaseText: allText.includes('Firebase') || allText.includes('firebase'),
        hasGitHubText: allText.includes('GitHub') || allText.includes('github'),
        hasIntegrationText: allText.includes('Integration') || allText.includes('integration'),
        has100PercentText: allText.includes('100%'),
        textLength: allText.length
      };
    });
    
    console.log('Integration Check:', integrationCheck);
    
    // Check for specific integration elements
    const elementCheck = await page.evaluate(() => {
      const terminalElement = document.querySelector('[data-testid="terminal"]');
      const firebaseElement = document.querySelector('[data-testid="firebase-deployment"]');
      const githubElement = document.querySelector('[data-testid="github-integration"]');
      const statusElement = document.querySelector('[data-testid="integration-status"]');
      
      return {
        terminalElement: terminalElement !== null,
        firebaseElement: firebaseElement !== null,
        githubElement: githubElement !== null,
        statusElement: statusElement !== null
      };
    });
    
    console.log('Element Check:', elementCheck);
    
    // Take screenshot
    await page.screenshot({ 
      path: 'fixed-integration-check.png',
      fullPage: true 
    });
    
    console.log('📸 Screenshot saved: fixed-integration-check.png');
    
    // Calculate final score
    const finalScore = {
      pageLoaded: pageStatus.hasContent,
      tabsPresent: tabsCheck.hasTerminalTab && tabsCheck.hasDeploymentTab && tabsCheck.hasGitHubTab,
      integrationText: integrationCheck.hasTerminalText && integrationCheck.hasFirebaseText && integrationCheck.hasGitHubText,
      elementsPresent: elementCheck.terminalElement && elementCheck.firebaseElement && elementCheck.githubElement && elementCheck.statusElement,
      overallScore: 0
    };
    
    finalScore.overallScore = [
      finalScore.pageLoaded,
      finalScore.tabsPresent,
      finalScore.integrationText,
      finalScore.elementsPresent
    ].filter(Boolean).length;
    
    const percentage = Math.round((finalScore.overallScore / 4) * 100);
    
    console.log('\n🎯 Final Integration Assessment:');
    console.log('================================');
    console.log(`Page Loaded: ${finalScore.pageLoaded ? '✅' : '❌'}`);
    console.log(`Tabs Present: ${finalScore.tabsPresent ? '✅' : '❌'}`);
    console.log(`Integration Text: ${finalScore.integrationText ? '✅' : '❌'}`);
    console.log(`Elements Present: ${finalScore.elementsPresent ? '✅' : '❌'}`);
    console.log(`Overall Score: ${finalScore.overallScore}/4 (${percentage}%)`);
    
    if (percentage >= 100) {
      console.log('🏆 PERFECT: All integrations working at 100%!');
    } else if (percentage >= 75) {
      console.log('✅ EXCELLENT: Strong integration performance!');
    } else if (percentage >= 50) {
      console.log('👍 GOOD: Good integration performance!');
    } else {
      console.log('⚠️ NEEDS IMPROVEMENT: Some integrations need attention!');
    }
    
    return {
      pageStatus,
      tabsCheck,
      integrationCheck,
      elementCheck,
      finalScore,
      percentage
    };
    
  } catch (error) {
    console.error('❌ Fixed integration check failed:', error);
    return { error: error.message };
  } finally {
    await browser.close();
  }
}

testFixedIntegrationCheck().then(result => {
  if (result.error) {
    console.error('Fixed integration check failed:', result.error);
  } else {
    console.log('\n🎉 Fixed integration check completed!');
    console.log(`Overall Score: ${result.percentage}%`);
  }
}).catch(console.error);

