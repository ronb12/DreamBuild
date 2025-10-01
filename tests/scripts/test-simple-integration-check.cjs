const puppeteer = require('puppeteer');

async function testSimpleIntegrationCheck() {
  console.log('🔍 Simple Integration Check...');
  
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
      const hasTabs = document.querySelectorAll('button').length > 0;
      const hasAI = document.querySelectorAll('*').some(el => 
        el.textContent.includes('AI') || el.textContent.includes('Assistant')
      );
      
      return {
        hasContent,
        hasTabs,
        hasAI,
        bodyText: document.body.textContent.substring(0, 200)
      };
    });
    
    console.log('Page Status:', pageStatus);
    
    // Check for tabs
    const tabsCheck = await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const tabTexts = buttons.map(b => b.textContent.trim()).filter(t => t.length > 0);
      
      return {
        totalButtons: buttons.length,
        tabTexts: tabTexts.slice(0, 10), // First 10 tab texts
        hasTerminalTab: tabTexts.some(t => t.includes('Terminal')),
        hasDeploymentTab: tabTexts.some(t => t.includes('Deployment')),
        hasGitHubTab: tabTexts.some(t => t.includes('GitHub'))
      };
    });
    
    console.log('Tabs Check:', tabsCheck);
    
    // Check for integration status
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
    
    // Take screenshot
    await page.screenshot({ 
      path: 'simple-integration-check.png',
      fullPage: true 
    });
    
    console.log('📸 Screenshot saved: simple-integration-check.png');
    
    return {
      pageStatus,
      tabsCheck,
      integrationCheck
    };
    
  } catch (error) {
    console.error('❌ Simple integration check failed:', error);
    return { error: error.message };
  } finally {
    await browser.close();
  }
}

testSimpleIntegrationCheck().then(result => {
  if (result.error) {
    console.error('Simple integration check failed:', result.error);
  } else {
    console.log('\n🎉 Simple integration check completed!');
  }
}).catch(console.error);

