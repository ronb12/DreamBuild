const puppeteer = require('puppeteer');

async function testWebAddressSystem() {
  console.log('🔍 Testing Web Address System - DreamBuild App Deployment...\n');
  
  const browser = await puppeteer.launch({ 
    headless: false,
    defaultViewport: null,
    args: ['--start-maximized', '--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  
  try {
    // Navigate to AI Builder
    console.log('📍 Navigating to AI Builder...');
    await page.goto('https://dreambuild-2024-app.web.app/ai-builder', { 
      waitUntil: 'networkidle2',
      timeout: 30000 
    });
    await new Promise(resolve => setTimeout(resolve, 5000));
    
    console.log('✅ AI Builder loaded\n');
    
    // Test 1: Generate an app
    console.log('🧪 Test 1: Generate Simple App');
    console.log('=' .repeat(50));
    
    // Find and fill the prompt input
    const promptInput = await page.$('textarea[placeholder*="prompt"], input[placeholder*="prompt"], textarea, input[type="text"]')
    if (promptInput) {
      console.log('   ✅ Found prompt input');
      
      // Clear and type a simple app prompt
      await promptInput.click()
      await promptInput.evaluate(el => el.value = '')
      await promptInput.type('Create a simple hello world app with HTML and CSS')
      console.log('   ✅ Typed prompt')
      
      // Find and click submit button
      const submitButton = await page.$('#generate-button')
      if (submitButton) {
        console.log('   ✅ Found submit button')
        await submitButton.click()
        console.log('   ✅ Clicked submit button')
        
        // Wait for generation
        await new Promise(resolve => setTimeout(resolve, 5000))
        console.log('   ✅ Generated content')
      } else {
        console.log('   ❌ Submit button not found')
      }
    } else {
      console.log('   ❌ Prompt input not found')
    }
    
    // Test 2: Click Preview Tab
    console.log('\n🧪 Test 2: Click Preview Tab');
    console.log('=' .repeat(50));
    
    // Find and click the Live Preview tab
    const previewTab = await page.evaluateHandle(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      return buttons.find(button => button.textContent.trim() === 'Live Preview');
    });
    
    if (previewTab) {
      console.log('   ✅ Found Live Preview tab');
      
      // Click the tab
      await page.evaluate(() => {
        const buttons = Array.from(document.querySelectorAll('button'));
        const previewButton = buttons.find(button => button.textContent.trim() === 'Live Preview');
        if (previewButton) {
          previewButton.click();
        }
      });
      console.log('   ✅ Clicked Live Preview tab');
      
      // Wait for content to load
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Check for preview content
      const previewContent = await page.evaluate(() => {
        return {
          hasPreviewTab: document.body.textContent.includes('PREVIEW TAB ACTIVE'),
          hasPreviewLoaded: document.body.textContent.includes('PREVIEW LOADED'),
          hasDeployed: document.body.textContent.includes('DEPLOYED'),
          hasAppUrl: document.body.textContent.includes('https://dreambuild-2024-app.web.app/apps/'),
          hasIframe: !!document.querySelector('iframe'),
          hasPreviewContent: !!document.querySelector('[class*="preview"]'),
          bodyText: document.body.textContent.substring(0, 300)
        };
      });
      
      console.log('📊 Preview Content Analysis:');
      console.log(`   Has Preview Tab: ${previewContent.hasPreviewTab ? '✅' : '❌'}`);
      console.log(`   Has Preview Loaded: ${previewContent.hasPreviewLoaded ? '✅' : '❌'}`);
      console.log(`   Has Deployed: ${previewContent.hasDeployed ? '✅' : '❌'}`);
      console.log(`   Has App URL: ${previewContent.hasAppUrl ? '✅' : '❌'}`);
      console.log(`   Has Iframe: ${previewContent.hasIframe ? '✅' : '❌'}`);
      console.log(`   Has Preview Content: ${previewContent.hasPreviewContent ? '✅' : '❌'}`);
      console.log(`   Body Text: ${previewContent.bodyText}`);
      
    } else {
      console.log('   ❌ Live Preview tab not found');
    }
    
    // Test 3: Check for web address system
    console.log('\n🧪 Test 3: Check Web Address System');
    console.log('=' .repeat(50));
    
    const webAddressSystem = await page.evaluate(() => {
      return {
        hasDeploymentService: document.body.textContent.includes('Deploying App') ||
                             document.body.textContent.includes('App deployed'),
        hasAppUrl: document.body.textContent.includes('https://dreambuild-2024-app.web.app/apps/'),
        hasPreviewControls: document.body.textContent.includes('Open in New Tab') ||
                           document.body.textContent.includes('Copy URL') ||
                           document.body.textContent.includes('Share'),
        hasDeviceSelector: document.body.textContent.includes('Desktop') ||
                          document.body.textContent.includes('Tablet') ||
                          document.body.textContent.includes('Mobile'),
        hasAutoRefresh: document.body.textContent.includes('AUTO-REFRESH') ||
                       document.body.textContent.includes('Auto-refresh'),
        totalElements: document.querySelectorAll('*').length
      };
    });
    
    console.log('📊 Web Address System Analysis:');
    console.log(`   Has Deployment Service: ${webAddressSystem.hasDeploymentService ? '✅' : '❌'}`);
    console.log(`   Has App URL: ${webAddressSystem.hasAppUrl ? '✅' : '❌'}`);
    console.log(`   Has Preview Controls: ${webAddressSystem.hasPreviewControls ? '✅' : '❌'}`);
    console.log(`   Has Device Selector: ${webAddressSystem.hasDeviceSelector ? '✅' : '❌'}`);
    console.log(`   Has Auto Refresh: ${webAddressSystem.hasAutoRefresh ? '✅' : '❌'}`);
    console.log(`   Total Elements: ${webAddressSystem.totalElements}`);
    
    // Test 4: Test app hosting URL
    console.log('\n🧪 Test 4: Test App Hosting URL');
    console.log('=' .repeat(50));
    
    // Try to navigate to a test app URL
    const testAppUrl = 'https://dreambuild-2024-app.web.app/apps/test-app-123'
    console.log(`   Testing app URL: ${testAppUrl}`);
    
    try {
      await page.goto(testAppUrl, { waitUntil: 'networkidle2', timeout: 10000 });
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const appHostContent = await page.evaluate(() => {
        return {
          url: window.location.href,
          title: document.title,
          hasAppHost: document.body.textContent.includes('App Host') ||
                     document.body.textContent.includes('DreamBuild app') ||
                     document.body.textContent.includes('Loading your DreamBuild app'),
          hasError: document.body.textContent.includes('App Not Found') ||
                   document.body.textContent.includes('Error'),
          bodyText: document.body.textContent.substring(0, 200)
        };
      });
      
      console.log('📊 App Hosting Analysis:');
      console.log(`   URL: ${appHostContent.url}`);
      console.log(`   Title: ${appHostContent.title}`);
      console.log(`   Has App Host: ${appHostContent.hasAppHost ? '✅' : '❌'}`);
      console.log(`   Has Error: ${appHostContent.hasError ? '✅' : '❌'}`);
      console.log(`   Body Text: ${appHostContent.bodyText}`);
      
    } catch (error) {
      console.log(`   ❌ Error testing app URL: ${error.message}`);
    }
    
    // Final Assessment
    console.log('\n🎯 Final Assessment');
    console.log('=' .repeat(50));
    
    const totalScore = (previewContent?.hasPreviewTab ? 25 : 0) + 
                     (previewContent?.hasPreviewLoaded ? 25 : 0) + 
                     (webAddressSystem?.hasDeploymentService ? 25 : 0) + 
                     (webAddressSystem?.hasAppUrl ? 25 : 0);
    
    console.log(`📊 Web Address System Score: ${totalScore}/100`);
    
    if (totalScore >= 75) {
      console.log('🌟 EXCELLENT - Web address system working!');
    } else if (totalScore >= 50) {
      console.log('✅ GOOD - Web address system partially working');
    } else if (totalScore >= 25) {
      console.log('⚠️ FAIR - Web address system has issues');
    } else {
      console.log('❌ POOR - Web address system not working');
    }
    
    console.log('\n🎉 Test completed successfully!');
    
    return { totalScore, previewContent, webAddressSystem };
    
  } catch (error) {
    console.error('❌ Test failed:', error);
    return { totalScore: 0, previewContent: null, webAddressSystem: null };
  } finally {
    await browser.close();
  }
}

// Run the test
testWebAddressSystem().catch(console.error);
