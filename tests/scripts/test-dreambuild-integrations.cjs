const puppeteer = require('puppeteer');

async function testDreamBuildIntegrations() {
  console.log('🚀 Testing DreamBuild Integrations: Terminal, Firebase, and GitHub...');
  
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
    
    console.log('\n🔍 Testing Terminal Integration...');
    
    // Test Terminal Tab
    const terminalTest = await page.evaluate(() => {
      // Click on Terminal tab
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
    
    // Check terminal functionality
    const terminalStatus = await page.evaluate(() => {
      const terminalElements = document.querySelectorAll('.terminal, .console, [data-testid="terminal"]');
      const terminalText = Array.from(document.querySelectorAll('*')).some(el => 
        el.textContent.includes('user@dreambuild') || 
        el.textContent.includes('$') ||
        el.textContent.includes('npm') ||
        el.textContent.includes('terminal')
      );
      
      return {
        elementsFound: terminalElements.length,
        terminalText: terminalText,
        terminalVisible: terminalElements.length > 0 ? terminalElements[0].offsetParent !== null : false
      };
    });
    
    console.log('Terminal Status:', terminalStatus);
    
    console.log('\n🔍 Testing Firebase Integration...');
    
    // Test Firebase functionality
    const firebaseTest = await page.evaluate(() => {
      // Check for Firebase initialization logs
      const firebaseLogs = Array.from(document.querySelectorAll('*')).some(el => 
        el.textContent.includes('Firebase') || 
        el.textContent.includes('Firestore') ||
        el.textContent.includes('Authentication')
      );
      
      // Check for Firebase deployment functionality
      const deploymentElements = document.querySelectorAll('[data-testid="deploy"], .deploy, .deployment');
      const deploymentText = Array.from(document.querySelectorAll('*')).some(el => 
        el.textContent.includes('Deploy') || 
        el.textContent.includes('Firebase Hosting') ||
        el.textContent.includes('dreambuild-2024-app.web.app')
      );
      
      return {
        firebaseLogs: firebaseLogs,
        deploymentElements: deploymentElements.length,
        deploymentText: deploymentText,
        firebaseWorking: firebaseLogs || deploymentText
      };
    });
    
    console.log('Firebase Status:', firebaseTest);
    
    // Test Firebase deployment by clicking on Deployment tab
    const deploymentTest = await page.evaluate(() => {
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
    
    console.log('Deployment tab clicked:', deploymentTest);
    
    // Wait for deployment tab to load
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Check deployment functionality
    const deploymentStatus = await page.evaluate(() => {
      const deploymentInfo = Array.from(document.querySelectorAll('*')).some(el => 
        el.textContent.includes('Firebase Hosting') || 
        el.textContent.includes('Production') ||
        el.textContent.includes('dreambuild-2024-app.web.app') ||
        el.textContent.includes('Deploy Now')
      );
      
      return {
        deploymentInfo: deploymentInfo,
        deploymentWorking: deploymentInfo
      };
    });
    
    console.log('Deployment Status:', deploymentStatus);
    
    console.log('\n🔍 Testing GitHub Integration...');
    
    // Test GitHub functionality
    const githubTest = await page.evaluate(() => {
      // Check for GitHub-related elements
      const githubElements = document.querySelectorAll('[data-testid="git"], .git, .github');
      const githubText = Array.from(document.querySelectorAll('*')).some(el => 
        el.textContent.includes('GitHub') || 
        el.textContent.includes('Git') ||
        el.textContent.includes('Repository') ||
        el.textContent.includes('Version Control')
      );
      
      // Check for Git integration tab
      const gitTab = Array.from(document.querySelectorAll('button')).find(b => 
        b.textContent.includes('Git') || 
        b.textContent.includes('Version Control')
      );
      
      return {
        githubElements: githubElements.length,
        githubText: githubText,
        gitTab: gitTab ? gitTab.textContent.trim() : null,
        githubWorking: githubElements.length > 0 || githubText
      };
    });
    
    console.log('GitHub Status:', githubTest);
    
    // Test Git Integration by clicking on Git tab if available
    if (githubTest.gitTab) {
      const gitTabTest = await page.evaluate(() => {
        const tabs = Array.from(document.querySelectorAll('button'));
        const gitTab = tabs.find(b => 
          b.textContent.includes('Git') || 
          b.textContent.includes('Version Control')
        );
        
        if (gitTab) {
          gitTab.click();
          return { clicked: true, tabText: gitTab.textContent.trim() };
        }
        return { clicked: false, tabText: null };
      });
      
      console.log('Git tab clicked:', gitTabTest);
      
      // Wait for git tab to load
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Check git functionality
      const gitStatus = await page.evaluate(() => {
        const gitInfo = Array.from(document.querySelectorAll('*')).some(el => 
          el.textContent.includes('Git') || 
          el.textContent.includes('Repository') ||
          el.textContent.includes('Commit') ||
          el.textContent.includes('Branch')
        );
        
        return {
          gitInfo: gitInfo,
          gitWorking: gitInfo
        };
      });
      
      console.log('Git Status:', gitStatus);
    }
    
    console.log('\n🔍 Testing Overall Integration Status...');
    
    // Overall integration test
    const overallTest = await page.evaluate(() => {
      // Check for all integration indicators
      const terminalWorking = document.querySelectorAll('.terminal, .console, [data-testid="terminal"]').length > 0;
      const firebaseWorking = Array.from(document.querySelectorAll('*')).some(el => 
        el.textContent.includes('Firebase') || el.textContent.includes('dreambuild-2024-app.web.app')
      );
      const githubWorking = Array.from(document.querySelectorAll('*')).some(el => 
        el.textContent.includes('GitHub') || el.textContent.includes('Git')
      );
      
      // Check for service initialization logs
      const serviceLogs = Array.from(document.querySelectorAll('*')).some(el => 
        el.textContent.includes('Service initialized') || 
        el.textContent.includes('AI services') ||
        el.textContent.includes('Firebase config loaded')
      );
      
      return {
        terminalWorking,
        firebaseWorking,
        githubWorking,
        serviceLogs,
        overallScore: [terminalWorking, firebaseWorking, githubWorking].filter(Boolean).length
      };
    });
    
    console.log('Overall Integration Status:', overallTest);
    
    // Test actual functionality by trying to use the AI Builder
    console.log('\n🤖 Testing AI Builder Functionality...');
    
    // Try to enter a prompt and test generation
    const aiTest = await page.evaluate(() => {
      const promptInput = document.querySelector('textarea[placeholder*="Describe"], input[placeholder*="Describe"]');
      if (promptInput) {
        promptInput.value = 'Create a simple React component with Firebase integration';
        promptInput.dispatchEvent(new Event('input', { bubbles: true }));
        return { promptEntered: true, promptText: promptInput.value };
      }
      return { promptEntered: false, promptText: null };
    });
    
    console.log('AI Prompt Test:', aiTest);
    
    // Look for generate button and click it
    const generateTest = await page.evaluate(() => {
      const generateButton = document.querySelector('[data-testid="generate-button"], button:has-text("Send"), button:has-text("Generate")');
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
    
    // Final assessment
    const finalAssessment = {
      terminal: overallTest.terminalWorking,
      firebase: overallTest.firebaseWorking,
      github: overallTest.githubWorking,
      aiGeneration: generationResult.generationWorking,
      overallScore: overallTest.overallScore,
      percentage: Math.round((overallTest.overallScore / 3) * 100)
    };
    
    console.log('\n🎯 Final Integration Assessment:');
    console.log('================================');
    console.log(`Terminal Integration: ${finalAssessment.terminal ? '✅ Working' : '❌ Not Working'}`);
    console.log(`Firebase Integration: ${finalAssessment.firebase ? '✅ Working' : '❌ Not Working'}`);
    console.log(`GitHub Integration: ${finalAssessment.github ? '✅ Working' : '❌ Not Working'}`);
    console.log(`AI Generation: ${finalAssessment.aiGeneration ? '✅ Working' : '❌ Not Working'}`);
    console.log(`Overall Score: ${finalAssessment.overallScore}/3 (${finalAssessment.percentage}%)`);
    
    if (finalAssessment.percentage >= 100) {
      console.log('🏆 EXCELLENT: All integrations working perfectly!');
    } else if (finalAssessment.percentage >= 66) {
      console.log('✅ GOOD: Most integrations working well!');
    } else if (finalAssessment.percentage >= 33) {
      console.log('⚠️ FAIR: Some integrations need attention!');
    } else {
      console.log('❌ POOR: Multiple integrations need fixing!');
    }
    
    // Take final screenshot
    await page.screenshot({ 
      path: 'dreambuild-integrations-test.png',
      fullPage: true 
    });
    
    console.log('📸 Integration test screenshot saved: dreambuild-integrations-test.png');
    
    return finalAssessment;
    
  } catch (error) {
    console.error('❌ Integration test failed:', error);
    return { error: error.message };
  } finally {
    await browser.close();
  }
}

testDreamBuildIntegrations().then(result => {
  if (result.error) {
    console.error('Integration test failed:', result.error);
  } else {
    console.log('\n🎉 Integration test completed!');
    console.log(`Overall Score: ${result.percentage}%`);
  }
}).catch(console.error);

