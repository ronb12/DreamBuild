const puppeteer = require('puppeteer');

async function testSimpleStatusCheck() {
  console.log('🔍 Simple Status Panel Check...');
  
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
    
    // Simple text check
    const textCheck = await page.evaluate(() => {
      const bodyText = document.body.textContent;
      
      return {
        hasAIModels: bodyText.includes('Available AI Models'),
        hasWebSearch: bodyText.includes('Web Search Integration'),
        hasIntegrationStatus: bodyText.includes('Integration Status'),
        hasAllIntegrations: bodyText.includes('All Integrations: 100%'),
        hasPlusButton: bodyText.includes('Quick Actions'),
        hasAIAssistant: bodyText.includes('AI Assistant')
      };
    });
    
    console.log('Text Check Results:', textCheck);
    
    // Take screenshot
    await page.screenshot({ 
      path: 'simple-status-check-test.png',
      fullPage: true 
    });
    
    console.log('📸 Screenshot saved: simple-status-check-test.png');
    
    // Assessment
    const statusPanelsRemoved = !textCheck.hasAIModels && 
                               !textCheck.hasWebSearch && 
                               !textCheck.hasIntegrationStatus && 
                               !textCheck.hasAllIntegrations;
    
    console.log('\n🎯 Status Panel Assessment:');
    console.log('============================');
    console.log(`Available AI Models: ${textCheck.hasAIModels ? '❌ STILL SHOWING' : '✅ REMOVED'}`);
    console.log(`Web Search Integration: ${textCheck.hasWebSearch ? '❌ STILL SHOWING' : '✅ REMOVED'}`);
    console.log(`Integration Status: ${textCheck.hasIntegrationStatus ? '❌ STILL SHOWING' : '✅ REMOVED'}`);
    console.log(`All Integrations: ${textCheck.hasAllIntegrations ? '❌ STILL SHOWING' : '✅ REMOVED'}`);
    console.log(`Plus Button: ${textCheck.hasPlusButton ? '✅ WORKING' : '❌ NOT FOUND'}`);
    console.log(`AI Assistant: ${textCheck.hasAIAssistant ? '✅ WORKING' : '❌ NOT FOUND'}`);
    
    if (statusPanelsRemoved) {
      console.log('\n🏆 SUCCESS: All status panels have been removed!');
    } else {
      console.log('\n⚠️ ISSUE: Some status panels are still showing.');
    }
    
    return { statusPanelsRemoved, textCheck };
    
  } catch (error) {
    console.error('❌ Status check failed:', error);
    return { error: error.message };
  } finally {
    await browser.close();
  }
}

testSimpleStatusCheck().then(result => {
  if (result.error) {
    console.error('Status check failed:', result.error);
  } else {
    console.log('\n🎉 Status check completed!');
    console.log(`Status Panels Removed: ${result.statusPanelsRemoved ? 'YES' : 'NO'}`);
  }
}).catch(console.error);

