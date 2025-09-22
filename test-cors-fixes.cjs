const puppeteer = require('puppeteer');

async function testCORSFixes() {
  console.log('🔍 Testing CORS Fixes');
  console.log('=====================');
  
  let browser;
  try {
    browser = await puppeteer.launch({
      headless: false,
      defaultViewport: { width: 1400, height: 900 },
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    
    // Capture console logs
    const consoleLogs = [];
    page.on('console', msg => {
      consoleLogs.push({
        type: msg.type(),
        text: msg.text(),
        timestamp: new Date().toISOString()
      });
    });
    
    // Navigate to the production site
    console.log('🌐 Navigating to production site...');
    await page.goto('https://dreambuild-2024-app.web.app/ai-builder', { 
      waitUntil: 'networkidle2',
      timeout: 30000 
    });

    await page.waitForTimeout(5000);

    console.log('\n📋 Analyzing Console Logs:');
    console.log('==========================');
    
    // Filter relevant logs
    const corsLogs = consoleLogs.filter(log => 
      log.text.includes('CORS') || 
      log.text.includes('Local AI') || 
      log.text.includes('Production environment') ||
      log.text.includes('Local AI not accessible')
    );
    
    const errorLogs = consoleLogs.filter(log => 
      log.type === 'error' || 
      log.text.includes('ERR_FAILED') ||
      log.text.includes('Access to XMLHttpRequest')
    );
    
    console.log(`\n🔍 CORS-related logs (${corsLogs.length}):`);
    corsLogs.forEach((log, index) => {
      console.log(`   ${index + 1}. [${log.type}] ${log.text}`);
    });
    
    console.log(`\n❌ Error logs (${errorLogs.length}):`);
    errorLogs.forEach((log, index) => {
      console.log(`   ${index + 1}. [${log.type}] ${log.text}`);
    });
    
    // Check for specific success indicators
    const productionDetected = consoleLogs.some(log => 
      log.text.includes('Production environment detected')
    );
    
    const localAISkipped = consoleLogs.some(log => 
      log.text.includes('skipping local AI detection')
    );
    
    const corsErrorPresent = consoleLogs.some(log => 
      log.text.includes('Access to XMLHttpRequest') ||
      log.text.includes('CORS policy')
    );
    
    console.log('\n🎯 CORS Fix Analysis:');
    console.log('=====================');
    console.log(`✅ Production environment detected: ${productionDetected ? 'Yes' : 'No'}`);
    console.log(`✅ Local AI detection skipped: ${localAISkipped ? 'Yes' : 'No'}`);
    console.log(`❌ CORS errors still present: ${corsErrorPresent ? 'Yes' : 'No'}`);
    
    if (productionDetected && localAISkipped && !corsErrorPresent) {
      console.log('\n🎉 CORS FIXES SUCCESSFUL!');
      console.log('   • Production environment properly detected');
      console.log('   • Local AI detection skipped in production');
      console.log('   • No CORS errors in console');
      console.log('   • Clean user experience');
    } else if (corsErrorPresent) {
      console.log('\n⚠️ CORS ERRORS STILL PRESENT');
      console.log('   • Some CORS errors are still appearing');
      console.log('   • May need additional fixes');
    } else {
      console.log('\n✅ CORS FIXES PARTIALLY SUCCESSFUL');
      console.log('   • Production detection working');
      console.log('   • May need to verify all error handling');
    }
    
    // Test AI functionality
    console.log('\n🤖 Testing AI Functionality:');
    console.log('============================');
    
    // Check if AI prompt input is working
    const aiInputExists = await page.evaluate(() => {
      const input = document.querySelector('#ai-prompt-input');
      return !!input;
    });
    
    console.log(`✅ AI prompt input present: ${aiInputExists ? 'Yes' : 'No'}`);
    
    // Test typing in AI prompt
    if (aiInputExists) {
      await page.type('#ai-prompt-input', 'Create a simple hello world app');
      await page.waitForTimeout(1000);
      
      const inputValue = await page.evaluate(() => {
        const input = document.querySelector('#ai-prompt-input');
        return input ? input.value : '';
      });
      
      console.log(`✅ AI input working: ${inputValue.length > 0 ? 'Yes' : 'No'}`);
    }
    
    // Take screenshot
    await page.screenshot({ 
      path: 'dreambuild-cors-fixes-test.png',
      fullPage: true 
    });
    console.log('\n📸 Screenshot saved as dreambuild-cors-fixes-test.png');

  } catch (error) {
    console.error('❌ CORS fixes test failed:', error);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

testCORSFixes().catch(console.error);
