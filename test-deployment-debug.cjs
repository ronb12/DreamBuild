const puppeteer = require('puppeteer');

async function testDeploymentDebug() {
  console.log('🔍 Testing Deployment Debug - Detailed Analysis...\n');
  
  const browser = await puppeteer.launch({ 
    headless: false,
    defaultViewport: null,
    args: ['--start-maximized', '--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  
  try {
    // Navigate to AI Builder
    console.log('📍 Step 1: Navigate to AI Builder');
    await page.goto('https://dreambuild-2024-app.web.app/ai-builder', { 
      waitUntil: 'networkidle2',
      timeout: 30000 
    });
    await new Promise(resolve => setTimeout(resolve, 3000));
    console.log('✅ AI Builder loaded\n');
    
    // Generate a simple app
    console.log('🧪 Step 2: Generate Simple App');
    console.log('=' .repeat(50));
    
    const promptInput = await page.$('textarea[placeholder*="prompt"], input[placeholder*="prompt"], textarea, input[type="text"]')
    if (promptInput) {
      await promptInput.click()
      await promptInput.evaluate(el => el.value = '')
      await promptInput.type('Create a simple hello world app with HTML and CSS')
      console.log('   ✅ Typed app prompt')
      
      const submitButton = await page.$('#generate-button')
      if (submitButton) {
        await submitButton.click()
        console.log('   ✅ Clicked submit button')
        await new Promise(resolve => setTimeout(resolve, 8000))
        console.log('   ✅ App generated successfully')
      }
    }
    
    // Click Preview Tab and wait for deployment
    console.log('\n🧪 Step 3: Click Preview Tab and Monitor Deployment');
    console.log('=' .repeat(50));
    
    await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const previewButton = buttons.find(button => button.textContent.trim() === 'Live Preview');
      if (previewButton) {
        previewButton.click();
      }
    });
    console.log('   ✅ Clicked Live Preview tab');
    
    // Wait for deployment and monitor console
    console.log('   ⏳ Waiting for deployment...');
    await new Promise(resolve => setTimeout(resolve, 10000));
    
    // Check for app URL in multiple ways
    console.log('\n🧪 Step 4: Extract App URL');
    console.log('=' .repeat(50));
    
    const urlExtraction = await page.evaluate(() => {
      // Method 1: Look for URL in text content
      const bodyText = document.body.textContent;
      const urlMatches = bodyText.match(/https:\/\/dreambuild-2024-app\.web\.app\/apps\/[^\s]+/g);
      
      // Method 2: Look for iframe src
      const iframe = document.querySelector('iframe');
      const iframeSrc = iframe ? iframe.src : null;
      
      // Method 3: Look for specific deployment indicators
      const hasDeployed = bodyText.includes('DEPLOYED');
      const hasAppUrl = bodyText.includes('https://dreambuild-2024-app.web.app/apps/');
      const hasPreviewLoaded = bodyText.includes('PREVIEW LOADED');
      
      // Method 4: Look for toast messages or success indicators
      const hasSuccessMessage = bodyText.includes('App deployed successfully') ||
                               bodyText.includes('deployed successfully');
      
      return {
        urlMatches: urlMatches || [],
        iframeSrc: iframeSrc,
        hasDeployed: hasDeployed,
        hasAppUrl: hasAppUrl,
        hasPreviewLoaded: hasPreviewLoaded,
        hasSuccessMessage: hasSuccessMessage,
        bodyText: bodyText.substring(0, 1000),
        allUrls: bodyText.match(/https:\/\/[^\s]+/g) || []
      };
    });
    
    console.log('📊 URL Extraction Results:');
    console.log(`   URL Matches: ${urlExtraction.urlMatches.length} found`);
    if (urlExtraction.urlMatches.length > 0) {
      console.log(`   URLs: ${urlExtraction.urlMatches.join(', ')}`);
    }
    console.log(`   Iframe Src: ${urlExtraction.iframeSrc || 'Not found'}`);
    console.log(`   Has Deployed: ${urlExtraction.hasDeployed ? '✅' : '❌'}`);
    console.log(`   Has App URL: ${urlExtraction.hasAppUrl ? '✅' : '❌'}`);
    console.log(`   Has Preview Loaded: ${urlExtraction.hasPreviewLoaded ? '✅' : '❌'}`);
    console.log(`   Has Success Message: ${urlExtraction.hasSuccessMessage ? '✅' : '❌'}`);
    console.log(`   All URLs Found: ${urlExtraction.allUrls.join(', ')}`);
    
    // Test the first found app URL
    if (urlExtraction.urlMatches.length > 0) {
      const appUrl = urlExtraction.urlMatches[0];
      console.log(`\n🧪 Step 5: Test App URL: ${appUrl}`);
      console.log('=' .repeat(50));
      
      try {
        await page.goto(appUrl, { waitUntil: 'networkidle2', timeout: 15000 });
        await new Promise(resolve => setTimeout(resolve, 3000));
        
        const appTest = await page.evaluate(() => {
          return {
            url: window.location.href,
            title: document.title,
            hasContent: document.body.textContent.length > 100,
            hasDreamBuild: document.body.textContent.includes('DreamBuild'),
            hasHelloWorld: document.body.textContent.includes('Hello') ||
                          document.body.textContent.includes('hello'),
            bodyText: document.body.textContent.substring(0, 300)
          };
        });
        
        console.log('📊 App URL Test Results:');
        console.log(`   URL: ${appTest.url}`);
        console.log(`   Title: ${appTest.title}`);
        console.log(`   Has Content: ${appTest.hasContent ? '✅' : '❌'}`);
        console.log(`   Has DreamBuild: ${appTest.hasDreamBuild ? '✅' : '❌'}`);
        console.log(`   Has Hello World: ${appTest.hasHelloWorld ? '✅' : '❌'}`);
        console.log(`   Body Text: ${appTest.bodyText}`);
        
        // Test if the app is working
        if (appTest.hasContent && !appTest.bodyText.includes('App Not Found')) {
          console.log('   ✅ App is working and accessible!');
        } else {
          console.log('   ❌ App is not working or not found');
        }
        
      } catch (error) {
        console.log(`   ❌ Error testing app URL: ${error.message}`);
      }
    } else {
      console.log('   ❌ No app URL found');
    }
    
    // Check console logs for deployment info
    console.log('\n🧪 Step 6: Check Console Logs');
    console.log('=' .repeat(50));
    
    const consoleLogs = await page.evaluate(() => {
      // This would need to be set up to capture console logs
      return {
        hasConsoleLogs: document.body.textContent.includes('console') ||
                        document.body.textContent.includes('log'),
        hasDeploymentLogs: document.body.textContent.includes('Deploying') ||
                          document.body.textContent.includes('deployed') ||
                          document.body.textContent.includes('Firebase')
      };
    });
    
    console.log('📊 Console Log Analysis:');
    console.log(`   Has Console Logs: ${consoleLogs.hasConsoleLogs ? '✅' : '❌'}`);
    console.log(`   Has Deployment Logs: ${consoleLogs.hasDeploymentLogs ? '✅' : '❌'}`);
    
    // Final Assessment
    console.log('\n🎯 Final Assessment');
    console.log('=' .repeat(50));
    
    const totalScore = (urlExtraction.hasDeployed ? 25 : 0) + 
                     (urlExtraction.hasAppUrl ? 25 : 0) + 
                     (urlExtraction.urlMatches.length > 0 ? 25 : 0) + 
                     (urlExtraction.hasSuccessMessage ? 25 : 0);
    
    console.log(`📊 Deployment Debug Score: ${totalScore}/100`);
    
    if (totalScore >= 75) {
      console.log('🌟 EXCELLENT - Deployment system working perfectly!');
    } else if (totalScore >= 50) {
      console.log('✅ GOOD - Deployment system mostly working');
    } else if (totalScore >= 25) {
      console.log('⚠️ FAIR - Deployment system has issues');
    } else {
      console.log('❌ POOR - Deployment system not working');
    }
    
    console.log('\n🎉 Debug test completed!');
    
    return { 
      totalScore, 
      urlExtraction, 
      appUrl: urlExtraction.urlMatches[0] || null 
    };
    
  } catch (error) {
    console.error('❌ Test failed:', error);
    return { totalScore: 0, urlExtraction: null, appUrl: null };
  } finally {
    await browser.close();
  }
}

// Run the test
testDeploymentDebug().catch(console.error);

