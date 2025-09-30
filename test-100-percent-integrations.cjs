const puppeteer = require('puppeteer');

async function test100PercentIntegrations() {
  console.log('🚀 Testing DreamBuild 100% Integration Status...');
  
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
    await new Promise(resolve => setTimeout(resolve, 5000));
    
    console.log('\n🔍 Testing Enhanced Terminal Integration...');
    
    // Test Terminal Tab
    const terminalTest = await page.evaluate(() => {
      const tabs = Array.from(document.querySelectorAll('button'));
      const terminalTab = tabs.find(b => 
        b.textContent.includes('Terminal') || 
        b.textContent.includes('Console')
      );
      
      if (terminalTab) {
        terminalTab.click();
        return { clicked: true, tabText: terminalTab.textContent.trim() };
      }
      return { clicked: false, tabText: null };
    });
    
    console.log('Terminal tab clicked:', terminalTest);
    
    // Wait for terminal to load
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Check enhanced terminal functionality
    const terminalStatus = await page.evaluate(() => {
      const terminalElement = document.querySelector('[data-testid="terminal"]');
      const terminalText = Array.from(document.querySelectorAll('*')).some(el => 
        el.textContent.includes('DreamBuild Terminal Integration Active') || 
        el.textContent.includes('Firebase CLI Available') ||
        el.textContent.includes('Git Integration Ready')
      );
      
      return {
        elementFound: terminalElement !== null,
        terminalText: terminalText,
        terminalVisible: terminalElement ? terminalElement.offsetParent !== null : false
      };
    });
    
    console.log('Enhanced Terminal Status:', terminalStatus);
    
    console.log('\n🔍 Testing Enhanced Firebase Integration...');
    
    // Test Firebase deployment tab
    const firebaseTest = await page.evaluate(() => {
      const tabs = Array.from(document.querySelectorAll('button'));
      const deploymentTab = tabs.find(b => 
        b.textContent.includes('Deployment') || 
        b.textContent.includes('Deploy')
      );
      
      if (deploymentTab) {
        deploymentTab.click();
        return { clicked: true, tabText: deploymentTab.textContent.trim() };
      }
      return { clicked: false, tabText: null };
    });
    
    console.log('Firebase Deployment tab clicked:', firebaseTest);
    
    // Wait for deployment tab to load
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Check enhanced Firebase functionality
    const firebaseStatus = await page.evaluate(() => {
      const firebaseElement = document.querySelector('[data-testid="firebase-deployment"]');
      const firebaseText = Array.from(document.querySelectorAll('*')).some(el => 
        el.textContent.includes('Firebase Integration Status') || 
        el.textContent.includes('Firebase config loaded') ||
        el.textContent.includes('Firebase Integration: 100%')
      );
      
      return {
        elementFound: firebaseElement !== null,
        firebaseText: firebaseText,
        firebaseVisible: firebaseElement ? firebaseElement.offsetParent !== null : false
      };
    });
    
    console.log('Enhanced Firebase Status:', firebaseStatus);
    
    console.log('\n🔍 Testing Enhanced GitHub Integration...');
    
    // Test GitHub tab
    const githubTest = await page.evaluate(() => {
      const tabs = Array.from(document.querySelectorAll('button'));
      const githubTab = tabs.find(b => 
        b.textContent.includes('GitHub') || 
        b.textContent.includes('Git')
      );
      
      if (githubTab) {
        githubTab.click();
        return { clicked: true, tabText: githubTab.textContent.trim() };
      }
      return { clicked: false, tabText: null };
    });
    
    console.log('GitHub tab clicked:', githubTest);
    
    // Wait for GitHub tab to load
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Check enhanced GitHub functionality
    const githubStatus = await page.evaluate(() => {
      const githubElement = document.querySelector('[data-testid="github-integration"]');
      const githubText = Array.from(document.querySelectorAll('*')).some(el => 
        el.textContent.includes('GitHub Integration Status') || 
        el.textContent.includes('GitHub Template Service initialized') ||
        el.textContent.includes('GitHub Integration: 100%')
      );
      
      return {
        elementFound: githubElement !== null,
        githubText: githubText,
        githubVisible: githubElement ? githubElement.offsetParent !== null : false
      };
    });
    
    console.log('Enhanced GitHub Status:', githubStatus);
    
    console.log('\n🔍 Testing Integration Status Panel...');
    
    // Check integration status panel
    const integrationStatus = await page.evaluate(() => {
      const statusElement = document.querySelector('[data-testid="integration-status"]');
      const statusText = Array.from(document.querySelectorAll('*')).some(el => 
        el.textContent.includes('All Integrations: 100%') || 
        el.textContent.includes('Terminal: 100%') ||
        el.textContent.includes('Firebase: 100%') ||
        el.textContent.includes('GitHub: 100%')
      );
      
      return {
        elementFound: statusElement !== null,
        statusText: statusText,
        statusVisible: statusElement ? statusElement.offsetParent !== null : false
      };
    });
    
    console.log('Integration Status Panel:', integrationStatus);
    
    console.log('\n🔍 Testing AI Generation...');
    
    // Test AI generation
    const aiTest = await page.evaluate(() => {
      const promptInput = document.querySelector('textarea[placeholder*="Describe"], input[placeholder*="Describe"]');
      if (promptInput) {
        promptInput.value = 'Create a React component with Firebase and GitHub integration';
        promptInput.dispatchEvent(new Event('input', { bubbles: true }));
        return { promptEntered: true, promptText: promptInput.value };
      }
      return { promptEntered: false, promptText: null };
    });
    
    console.log('AI Prompt Test:', aiTest);
    
    // Look for generate button and click it
    const generateTest = await page.evaluate(() => {
      const generateButton = document.querySelector('[data-testid="generate-button"]') || 
                           Array.from(document.querySelectorAll('button')).find(b => 
                             b.textContent.includes('Send') || b.textContent.includes('Generate')
                           );
      if (generateButton) {
        generateButton.click();
        return { clicked: true, buttonText: generateButton.textContent.trim() };
      }
      return { clicked: false, buttonText: null };
    });
    
    console.log('Generate Button Test:', generateTest);
    
    // Wait for generation to process
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Check if code was generated
    const generationResult = await page.evaluate(() => {
      const codeElements = document.querySelectorAll('pre, code, .code, .editor, textarea');
      const fileElements = document.querySelectorAll('[data-testid="file"], .file, .file-item');
      
      return {
        codeElements: codeElements.length,
        fileElements: fileElements.length,
        generationWorking: codeElements.length > 0 || fileElements.length > 0
      };
    });
    
    console.log('Generation Result:', generationResult);
    
    // Final comprehensive assessment
    const finalAssessment = {
      terminal: {
        working: terminalStatus.elementFound && terminalStatus.terminalText,
        functional: terminalStatus.terminalVisible,
        score: (terminalStatus.elementFound ? 1 : 0) + (terminalStatus.terminalText ? 1 : 0) + (terminalStatus.terminalVisible ? 1 : 0)
      },
      firebase: {
        working: firebaseStatus.elementFound && firebaseStatus.firebaseText,
        functional: firebaseStatus.firebaseVisible,
        score: (firebaseStatus.elementFound ? 1 : 0) + (firebaseStatus.firebaseText ? 1 : 0) + (firebaseStatus.firebaseVisible ? 1 : 0)
      },
      github: {
        working: githubStatus.elementFound && githubStatus.githubText,
        functional: githubStatus.githubVisible,
        score: (githubStatus.elementFound ? 1 : 0) + (githubStatus.githubText ? 1 : 0) + (githubStatus.githubVisible ? 1 : 0)
      },
      integrationStatus: {
        working: integrationStatus.elementFound && integrationStatus.statusText,
        functional: integrationStatus.statusVisible,
        score: (integrationStatus.elementFound ? 1 : 0) + (integrationStatus.statusText ? 1 : 0) + (integrationStatus.statusVisible ? 1 : 0)
      },
      aiGeneration: generationResult.generationWorking,
      overallScore: 0,
      percentage: 0
    };
    
    // Calculate overall scores
    finalAssessment.overallScore = finalAssessment.terminal.score + finalAssessment.firebase.score + finalAssessment.github.score + finalAssessment.integrationStatus.score;
    finalAssessment.percentage = Math.round((finalAssessment.overallScore / 12) * 100);
    
    console.log('\n🎯 Final 100% Integration Assessment:');
    console.log('=====================================');
    console.log(`Terminal Integration: ${finalAssessment.terminal.working ? '✅ Working' : '❌ Not Working'} (Score: ${finalAssessment.terminal.score}/3)`);
    console.log(`Firebase Integration: ${finalAssessment.firebase.working ? '✅ Working' : '❌ Not Working'} (Score: ${finalAssessment.firebase.score}/3)`);
    console.log(`GitHub Integration: ${finalAssessment.github.working ? '✅ Working' : '❌ Not Working'} (Score: ${finalAssessment.github.score}/3)`);
    console.log(`Integration Status Panel: ${finalAssessment.integrationStatus.working ? '✅ Working' : '❌ Not Working'} (Score: ${finalAssessment.integrationStatus.score}/3)`);
    console.log(`AI Generation: ${finalAssessment.aiGeneration ? '✅ Working' : '❌ Not Working'}`);
    console.log(`Overall Score: ${finalAssessment.overallScore}/12 (${finalAssessment.percentage}%)`);
    
    if (finalAssessment.percentage >= 100) {
      console.log('🏆 PERFECT: All integrations working at 100%!');
    } else if (finalAssessment.percentage >= 90) {
      console.log('✅ EXCELLENT: Nearly perfect integration!');
    } else if (finalAssessment.percentage >= 80) {
      console.log('👍 VERY GOOD: Strong integration performance!');
    } else if (finalAssessment.percentage >= 70) {
      console.log('👍 GOOD: Good integration performance!');
    } else if (finalAssessment.percentage >= 60) {
      console.log('⚠️ FAIR: Some integrations need attention!');
    } else {
      console.log('❌ POOR: Multiple integrations need fixing!');
    }
    
    // Take final screenshot
    await page.screenshot({ 
      path: 'dreambuild-100-percent-integrations-test.png',
      fullPage: true 
    });
    
    console.log('📸 100% integration test screenshot saved: dreambuild-100-percent-integrations-test.png');
    
    return finalAssessment;
    
  } catch (error) {
    console.error('❌ 100% integration test failed:', error);
    return { error: error.message };
  } finally {
    await browser.close();
  }
}

test100PercentIntegrations().then(result => {
  if (result.error) {
    console.error('100% integration test failed:', result.error);
  } else {
    console.log('\n🎉 100% Integration test completed!');
    console.log(`Overall Score: ${result.percentage}%`);
  }
}).catch(console.error);

