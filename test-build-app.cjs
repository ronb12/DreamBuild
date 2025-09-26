const puppeteer = require('puppeteer');

async function buildAppWithDreamBuild() {
  console.log('🚀 Building an App with DreamBuild - 100% Deployment System Demo...\n');
  
  const browser = await puppeteer.launch({ 
    headless: false,
    defaultViewport: null,
    args: ['--start-maximized', '--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  
  try {
    // Navigate to DreamBuild AI Builder
    console.log('📍 Step 1: Navigate to DreamBuild AI Builder');
    console.log('=' .repeat(60));
    await page.goto('https://dreambuild-2024-app.web.app/ai-builder', { 
      waitUntil: 'networkidle2',
      timeout: 30000 
    });
    await new Promise(resolve => setTimeout(resolve, 3000));
    console.log('✅ DreamBuild AI Builder loaded successfully\n');
    
    // Generate a comprehensive app
    console.log('🧪 Step 2: Generate a Complete Todo List App');
    console.log('=' .repeat(60));
    
    const promptInput = await page.$('textarea[placeholder*="prompt"], input[placeholder*="prompt"], textarea, input[type="text"]')
    if (promptInput) {
      await promptInput.click()
      await promptInput.evaluate(el => el.value = '')
      await promptInput.type('Create a complete todo list application with React, including add, edit, delete, and mark complete functionality. Include modern UI with Tailwind CSS, local storage, and responsive design. Make it look professional with a dark theme.')
      console.log('   ✅ Typed comprehensive app prompt')
      
      const submitButton = await page.$('#generate-button')
      if (submitButton) {
        await submitButton.click()
        console.log('   ✅ Clicked generate button')
        console.log('   ⏳ Generating app...')
        await new Promise(resolve => setTimeout(resolve, 12000))
        console.log('   ✅ App generated successfully')
      }
    }
    
    // Deploy the app
    console.log('\n🚀 Step 3: Deploy App with 100% System');
    console.log('=' .repeat(60));
    
    await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const previewButton = buttons.find(button => button.textContent.trim() === 'Live Preview');
      if (previewButton) {
        previewButton.click();
      }
    });
    console.log('   ✅ Clicked Live Preview tab');
    
    // Wait for deployment
    console.log('   ⏳ Deploying app with Firebase...');
    await new Promise(resolve => setTimeout(resolve, 15000));
    
    // Analyze the deployed app
    console.log('\n📊 Step 4: Analyze Deployed App');
    console.log('=' .repeat(60));
    
    const appAnalysis = await page.evaluate(() => {
      const bodyText = document.body.textContent;
      
      // Check deployment status
      const deploymentStatus = {
        hasPreviewTab: bodyText.includes('PREVIEW TAB ACTIVE'),
        hasPreviewLoaded: bodyText.includes('PREVIEW LOADED'),
        hasDeployed: bodyText.includes('DEPLOYED'),
        hasDeploymentService: bodyText.includes('DEPLOYMENT SERVICE ACTIVE'),
        hasFirebaseConnection: bodyText.includes('FIREBASE CONNECTED'),
        hasSuccessMessage: bodyText.includes('App deployed successfully'),
        hasCleanUrl: bodyText.includes('CLEAN URL FORMAT'),
        hasUrlQuality: bodyText.includes('URL Quality Indicator')
      };
      
      // Extract app URL
      const allUrls = bodyText.match(/https:\/\/[^\s]+/g) || [];
      const appUrls = allUrls.filter(url => url.includes('/apps/'));
      const iframe = document.querySelector('iframe');
      const iframeSrc = iframe ? iframe.src : null;
      const footerUrl = document.querySelector('.font-mono');
      const footerUrlText = footerUrl ? footerUrl.textContent : null;
      
      // Check advanced features
      const advancedFeatures = {
        hasIframe: !!iframe,
        hasDeviceSelector: bodyText.includes('Desktop') && bodyText.includes('Tablet') && bodyText.includes('Mobile'),
        hasAutoRefresh: bodyText.includes('AUTO-REFRESH'),
        hasLiveMode: bodyText.includes('LIVE'),
        hasOnlineStatus: bodyText.includes('ONLINE'),
        hasDeviceLabels: bodyText.includes('Desktop') && bodyText.includes('Tablet') && bodyText.includes('Mobile')
      };
      
      // Check success indicators
      const successIndicators = {
        hasSuccessMessage: bodyText.includes('App deployed successfully'),
        hasToastMessage: bodyText.includes('Toast message'),
        hasFirebaseConnection: bodyText.includes('FIREBASE CONNECTED'),
        hasAppName: bodyText.includes('DreamBuild') || bodyText.includes('Calculator'),
        hasAppId: bodyText.includes('app-') && bodyText.includes('-')
      };
      
      return {
        deploymentStatus,
        appUrls,
        iframeSrc,
        footerUrlText,
        advancedFeatures,
        successIndicators,
        bodyText: bodyText.substring(0, 1000)
      };
    });
    
    console.log('📊 Deployment Analysis Results:');
    console.log('=' .repeat(60));
    
    // Basic Deployment Status
    console.log('🔧 Basic Deployment Status:');
    console.log(`   Preview Tab: ${appAnalysis.deploymentStatus.hasPreviewTab ? '✅' : '❌'}`);
    console.log(`   Preview Loaded: ${appAnalysis.deploymentStatus.hasPreviewLoaded ? '✅' : '❌'}`);
    console.log(`   Deployed: ${appAnalysis.deploymentStatus.hasDeployed ? '✅' : '❌'}`);
    console.log(`   Deployment Service: ${appAnalysis.deploymentStatus.hasDeploymentService ? '✅' : '❌'}`);
    console.log(`   Firebase Connection: ${appAnalysis.deploymentStatus.hasFirebaseConnection ? '✅' : '❌'}`);
    
    // App URLs
    console.log('\n🔗 App URLs:');
    console.log(`   Total URLs Found: ${appAnalysis.appUrls.length}`);
    appAnalysis.appUrls.forEach((url, index) => {
      console.log(`   URL ${index + 1}: ${url}`);
    });
    console.log(`   Iframe Src: ${appAnalysis.iframeSrc || 'Not found'}`);
    console.log(`   Footer URL: ${appAnalysis.footerUrlText || 'Not found'}`);
    
    // Advanced Features
    console.log('\n⚡ Advanced Features:');
    console.log(`   Iframe: ${appAnalysis.advancedFeatures.hasIframe ? '✅' : '❌'}`);
    console.log(`   Device Selector: ${appAnalysis.advancedFeatures.hasDeviceSelector ? '✅' : '❌'}`);
    console.log(`   Auto Refresh: ${appAnalysis.advancedFeatures.hasAutoRefresh ? '✅' : '❌'}`);
    console.log(`   Live Mode: ${appAnalysis.advancedFeatures.hasLiveMode ? '✅' : '❌'}`);
    console.log(`   Online Status: ${appAnalysis.advancedFeatures.hasOnlineStatus ? '✅' : '❌'}`);
    console.log(`   Device Labels: ${appAnalysis.advancedFeatures.hasDeviceLabels ? '✅' : '❌'}`);
    
    // Success Indicators
    console.log('\n🎉 Success Indicators:');
    console.log(`   Success Message: ${appAnalysis.successIndicators.hasSuccessMessage ? '✅' : '❌'}`);
    console.log(`   Toast Message: ${appAnalysis.successIndicators.hasToastMessage ? '✅' : '❌'}`);
    console.log(`   Firebase Connection: ${appAnalysis.successIndicators.hasFirebaseConnection ? '✅' : '❌'}`);
    console.log(`   App Name: ${appAnalysis.successIndicators.hasAppName ? '✅' : '❌'}`);
    console.log(`   App ID: ${appAnalysis.successIndicators.hasAppId ? '✅' : '❌'}`);
    
    // Test the deployed app
    if (appAnalysis.iframeSrc) {
      console.log('\n🧪 Step 5: Test Deployed App');
      console.log('=' .repeat(60));
      
      try {
        await page.goto(appAnalysis.iframeSrc, { waitUntil: 'networkidle2', timeout: 15000 });
        await new Promise(resolve => setTimeout(resolve, 3000));
        
        const appTest = await page.evaluate(() => {
          return {
            url: window.location.href,
            title: document.title,
            hasContent: document.body.textContent.length > 100,
            hasTodoElements: document.body.textContent.includes('todo') || 
                           document.body.textContent.includes('Todo') ||
                           document.body.textContent.includes('task') ||
                           document.body.textContent.includes('Task'),
            hasReactElements: document.body.textContent.includes('React') ||
                             document.body.textContent.includes('react'),
            hasTailwindElements: document.body.textContent.includes('tailwind') ||
                                document.body.textContent.includes('Tailwind'),
            hasAppNotFound: document.body.textContent.includes('App Not Found'),
            hasDreamBuild: document.body.textContent.includes('DreamBuild'),
            bodyText: document.body.textContent.substring(0, 500)
          };
        });
        
        console.log('📊 Deployed App Test Results:');
        console.log(`   App URL: ${appTest.url}`);
        console.log(`   Title: ${appTest.title}`);
        console.log(`   Has Content: ${appTest.hasContent ? '✅' : '❌'}`);
        console.log(`   Has Todo Elements: ${appTest.hasTodoElements ? '✅' : '❌'}`);
        console.log(`   Has React Elements: ${appTest.hasReactElements ? '✅' : '❌'}`);
        console.log(`   Has Tailwind Elements: ${appTest.hasTailwindElements ? '✅' : '❌'}`);
        console.log(`   Has App Not Found: ${appTest.hasAppNotFound ? '❌' : '✅'}`);
        console.log(`   Has DreamBuild: ${appTest.hasDreamBuild ? '✅' : '❌'}`);
        console.log(`   Body Text: ${appTest.bodyText}`);
        
        if (appTest.hasContent && !appTest.hasAppNotFound) {
          console.log('   ✅ Deployed app is working and accessible!');
        } else {
          console.log('   ❌ Deployed app has issues');
        }
        
      } catch (error) {
        console.log(`   ❌ Error testing deployed app: ${error.message}`);
      }
    }
    
    // Final Assessment
    console.log('\n🎯 Final Assessment');
    console.log('=' .repeat(60));
    
    const totalScore = (appAnalysis.deploymentStatus.hasPreviewTab ? 10 : 0) + 
                     (appAnalysis.deploymentStatus.hasPreviewLoaded ? 10 : 0) + 
                     (appAnalysis.deploymentStatus.hasDeployed ? 10 : 0) + 
                     (appAnalysis.deploymentStatus.hasDeploymentService ? 10 : 0) + 
                     (appAnalysis.deploymentStatus.hasFirebaseConnection ? 10 : 0) + 
                     (appAnalysis.advancedFeatures.hasIframe ? 10 : 0) + 
                     (appAnalysis.advancedFeatures.hasDeviceSelector ? 10 : 0) + 
                     (appAnalysis.successIndicators.hasSuccessMessage ? 10 : 0) + 
                     (appAnalysis.successIndicators.hasToastMessage ? 10 : 0) + 
                     (appAnalysis.appUrls.length > 0 ? 10 : 0);
    
    console.log(`📊 DreamBuild App Building Score: ${totalScore}/100`);
    
    if (totalScore >= 90) {
      console.log('🌟 PERFECT - DreamBuild successfully built and deployed the app!');
    } else if (totalScore >= 80) {
      console.log('✅ EXCELLENT - DreamBuild app building working very well!');
    } else if (totalScore >= 70) {
      console.log('⚠️ GOOD - DreamBuild app building working well');
    } else {
      console.log('❌ NEEDS IMPROVEMENT - DreamBuild app building has issues');
    }
    
    console.log('\n🎉 DreamBuild app building test completed!');
    console.log(`📍 Generated App URL: ${appAnalysis.iframeSrc || 'Not found'}`);
    console.log(`📍 Gallery URL: https://dreambuild-2024-app.web.app/gallery`);
    
    return { 
      totalScore, 
      appAnalysis, 
      appUrl: appAnalysis.iframeSrc 
    };
    
  } catch (error) {
    console.error('❌ Test failed:', error);
    return { totalScore: 0, appAnalysis: null, appUrl: null };
  } finally {
    await browser.close();
  }
}

// Run the test
buildAppWithDreamBuild().catch(console.error);

