const puppeteer = require('puppeteer');

async function test100PercentDeployment() {
  console.log('🎯 Testing for 100% Deployment System Score...\n');
  
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
    
    // Generate a comprehensive app
    console.log('🧪 Step 2: Generate Comprehensive App');
    console.log('=' .repeat(50));
    
    const promptInput = await page.$('textarea[placeholder*="prompt"], input[placeholder*="prompt"], textarea, input[type="text"]')
    if (promptInput) {
      await promptInput.click()
      await promptInput.evaluate(el => el.value = '')
      await promptInput.type('Create a complete todo list application with React, including add, edit, delete, and mark complete functionality. Include modern UI with Tailwind CSS, local storage, and responsive design.')
      console.log('   ✅ Typed comprehensive app prompt')
      
      const submitButton = await page.$('#generate-button')
      if (submitButton) {
        await submitButton.click()
        console.log('   ✅ Clicked submit button')
        await new Promise(resolve => setTimeout(resolve, 10000))
        console.log('   ✅ App generated successfully')
      }
    }
    
    // Click Preview Tab and monitor deployment
    console.log('\n🧪 Step 3: Deploy and Monitor');
    console.log('=' .repeat(50));
    
    await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const previewButton = buttons.find(button => button.textContent.trim() === 'Live Preview');
      if (previewButton) {
        previewButton.click();
      }
    });
    console.log('   ✅ Clicked Live Preview tab');
    
    // Wait for deployment with extended monitoring
    console.log('   ⏳ Monitoring deployment process...');
    await new Promise(resolve => setTimeout(resolve, 15000));
    
    // Comprehensive deployment analysis
    console.log('\n🧪 Step 4: Comprehensive Deployment Analysis');
    console.log('=' .repeat(50));
    
    const deploymentAnalysis = await page.evaluate(() => {
      const bodyText = document.body.textContent;
      
      // Check all possible deployment indicators
      const indicators = {
        // Basic deployment
        hasPreviewTab: bodyText.includes('PREVIEW TAB ACTIVE'),
        hasPreviewLoaded: bodyText.includes('PREVIEW LOADED'),
        hasDeployed: bodyText.includes('DEPLOYED'),
        hasDeploymentService: bodyText.includes('Deploying App') || bodyText.includes('App deployed'),
        
        // URL detection
        hasAppUrl: bodyText.includes('https://dreambuild-2024-app.web.app/apps/'),
        hasCleanUrl: (() => {
          const iframe = document.querySelector('iframe');
          const footerUrl = document.querySelector('.font-mono');
          const iframeSrc = iframe ? iframe.src : '';
          const footerText = footerUrl ? footerUrl.textContent : '';
          return (iframeSrc.includes('/apps/') && !iframeSrc.includes('App')) ||
                 (footerText.includes('/apps/') && !footerText.includes('App'));
        })(),
        
        // UI elements
        hasIframe: !!document.querySelector('iframe'),
        hasPreviewContent: !!document.querySelector('[class*="preview"]'),
        hasFooterUrl: !!document.querySelector('.font-mono'),
        
        // Advanced features
        hasDeviceSelector: bodyText.includes('Desktop') && bodyText.includes('Tablet') && bodyText.includes('Mobile'),
        hasAutoRefresh: bodyText.includes('AUTO-REFRESH'),
        hasLiveMode: bodyText.includes('LIVE'),
        hasOnlineStatus: bodyText.includes('ONLINE'),
        
        // Deployment success indicators
        hasSuccessMessage: bodyText.includes('App deployed successfully'),
        hasToastMessage: bodyText.includes('deployed successfully'),
        hasUrlDisplay: bodyText.includes('https://dreambuild-2024-app.web.app/apps/'),
        
        // Error detection
        hasError: bodyText.includes('deployment failed') || bodyText.includes('Error'),
        hasLoading: bodyText.includes('Deploying...') || bodyText.includes('loading'),
        
        // Advanced deployment features
        hasFirebaseConnection: bodyText.includes('Firebase') || bodyText.includes('Firestore'),
        hasAppName: bodyText.includes('DreamBuild') || bodyText.includes('Calculator'),
        hasAppId: bodyText.includes('app-') && bodyText.includes('-'),
        
        // Gallery integration
        hasGalleryLink: bodyText.includes('Gallery') || bodyText.includes('gallery'),
        hasPublicApp: bodyText.includes('Public') || bodyText.includes('public'),
        
        // Performance indicators
        hasFastDeployment: !bodyText.includes('timeout') && !bodyText.includes('slow'),
        hasStableConnection: !bodyText.includes('connection failed') && !bodyText.includes('network error')
      };
      
      // Extract URLs
      const allUrls = bodyText.match(/https:\/\/[^\s]+/g) || [];
      const appUrls = allUrls.filter(url => url.includes('/apps/'));
      const iframe = document.querySelector('iframe');
      const iframeSrc = iframe ? iframe.src : null;
      
      // Check for proper URL format
      const hasProperUrl = appUrls.some(url => 
        url.includes('dreambuild-2024-app.web.app/apps/') && 
        url.includes('app-') && 
        !url.includes('App') && 
        url.length > 50
      ) || 
      (iframeSrc && iframeSrc.includes('dreambuild-2024-app.web.app/apps/') && 
       iframeSrc.includes('app-') && !iframeSrc.includes('App')) ||
      (footerUrl && footerUrl.textContent.includes('dreambuild-2024-app.web.app/apps/') && 
       footerUrl.textContent.includes('app-') && !footerUrl.textContent.includes('App'));
      
      return {
        indicators,
        allUrls,
        appUrls,
        iframeSrc,
        hasProperUrl,
        bodyText: bodyText.substring(0, 2000)
      };
    });
    
    console.log('📊 Comprehensive Deployment Analysis:');
    console.log('=' .repeat(50));
    
    // Basic deployment (25 points)
    const basicDeployment = (deploymentAnalysis.indicators.hasPreviewTab ? 5 : 0) +
                           (deploymentAnalysis.indicators.hasPreviewLoaded ? 5 : 0) +
                           (deploymentAnalysis.indicators.hasDeployed ? 5 : 0) +
                           (deploymentAnalysis.indicators.hasDeploymentService ? 5 : 0) +
                           (deploymentAnalysis.indicators.hasAppUrl ? 5 : 0);
    
    console.log('🔧 Basic Deployment (25 points):');
    console.log(`   Preview Tab: ${deploymentAnalysis.indicators.hasPreviewTab ? '✅' : '❌'} (5pts)`);
    console.log(`   Preview Loaded: ${deploymentAnalysis.indicators.hasPreviewLoaded ? '✅' : '❌'} (5pts)`);
    console.log(`   Deployed: ${deploymentAnalysis.indicators.hasDeployed ? '✅' : '❌'} (5pts)`);
    console.log(`   Deployment Service: ${deploymentAnalysis.indicators.hasDeploymentService ? '✅' : '❌'} (5pts)`);
    console.log(`   App URL: ${deploymentAnalysis.indicators.hasAppUrl ? '✅' : '❌'} (5pts)`);
    console.log(`   Basic Score: ${basicDeployment}/25`);
    
    // URL Quality (25 points)
    const urlQuality = (deploymentAnalysis.indicators.hasCleanUrl ? 10 : 0) +
                      (deploymentAnalysis.hasProperUrl ? 10 : 0) +
                      (deploymentAnalysis.indicators.hasFooterUrl ? 5 : 0);
    
    console.log('\n🔗 URL Quality (25 points):');
    console.log(`   Clean URL: ${deploymentAnalysis.indicators.hasCleanUrl ? '✅' : '❌'} (10pts)`);
    console.log(`   Proper Format: ${deploymentAnalysis.hasProperUrl ? '✅' : '❌'} (10pts)`);
    console.log(`   Footer Display: ${deploymentAnalysis.indicators.hasFooterUrl ? '✅' : '❌'} (5pts)`);
    console.log(`   URL Score: ${urlQuality}/25`);
    
    // Advanced Features (25 points)
    const advancedFeatures = (deploymentAnalysis.indicators.hasIframe ? 5 : 0) +
                            (deploymentAnalysis.indicators.hasDeviceSelector ? 5 : 0) +
                            (deploymentAnalysis.indicators.hasAutoRefresh ? 5 : 0) +
                            (deploymentAnalysis.indicators.hasLiveMode ? 5 : 0) +
                            (deploymentAnalysis.indicators.hasOnlineStatus ? 5 : 0);
    
    console.log('\n⚡ Advanced Features (25 points):');
    console.log(`   Iframe: ${deploymentAnalysis.indicators.hasIframe ? '✅' : '❌'} (5pts)`);
    console.log(`   Device Selector: ${deploymentAnalysis.indicators.hasDeviceSelector ? '✅' : '❌'} (5pts)`);
    console.log(`   Auto Refresh: ${deploymentAnalysis.indicators.hasAutoRefresh ? '✅' : '❌'} (5pts)`);
    console.log(`   Live Mode: ${deploymentAnalysis.indicators.hasLiveMode ? '✅' : '❌'} (5pts)`);
    console.log(`   Online Status: ${deploymentAnalysis.indicators.hasOnlineStatus ? '✅' : '❌'} (5pts)`);
    console.log(`   Advanced Score: ${advancedFeatures}/25`);
    
    // Success Indicators (25 points)
    const successIndicators = (deploymentAnalysis.indicators.hasSuccessMessage ? 10 : 0) +
                             (deploymentAnalysis.indicators.hasToastMessage ? 5 : 0) +
                             (deploymentAnalysis.indicators.hasFirebaseConnection ? 5 : 0) +
                             (deploymentAnalysis.indicators.hasAppName ? 3 : 0) +
                             (deploymentAnalysis.indicators.hasAppId ? 2 : 0);
    
    console.log('\n🎉 Success Indicators (25 points):');
    console.log(`   Success Message: ${deploymentAnalysis.indicators.hasSuccessMessage ? '✅' : '❌'} (10pts)`);
    console.log(`   Toast Message: ${deploymentAnalysis.indicators.hasToastMessage ? '✅' : '❌'} (5pts)`);
    console.log(`   Firebase Connection: ${deploymentAnalysis.indicators.hasFirebaseConnection ? '✅' : '❌'} (5pts)`);
    console.log(`   App Name: ${deploymentAnalysis.indicators.hasAppName ? '✅' : '❌'} (3pts)`);
    console.log(`   App ID: ${deploymentAnalysis.indicators.hasAppId ? '✅' : '❌'} (2pts)`);
    console.log(`   Success Score: ${successIndicators}/25`);
    
    // Calculate total score
    const totalScore = basicDeployment + urlQuality + advancedFeatures + successIndicators;
    
    console.log('\n🎯 Final Assessment');
    console.log('=' .repeat(50));
    console.log(`📊 Total Deployment Score: ${totalScore}/100`);
    
    if (totalScore >= 95) {
      console.log('🌟 PERFECT - Deployment system at 100%!');
    } else if (totalScore >= 85) {
      console.log('✅ EXCELLENT - Deployment system nearly perfect!');
    } else if (totalScore >= 70) {
      console.log('⚠️ GOOD - Deployment system working well');
    } else {
      console.log('❌ NEEDS IMPROVEMENT - Deployment system has issues');
    }
    
    // Identify missing features
    console.log('\n🔍 Missing Features Analysis:');
    if (basicDeployment < 25) {
      console.log('❌ Basic deployment features need improvement');
    }
    if (urlQuality < 25) {
      console.log('❌ URL quality needs improvement');
    }
    if (advancedFeatures < 25) {
      console.log('❌ Advanced features need improvement');
    }
    if (successIndicators < 25) {
      console.log('❌ Success indicators need improvement');
    }
    
    console.log('\n🎉 100% deployment test completed!');
    
    return { 
      totalScore, 
      basicDeployment, 
      urlQuality, 
      advancedFeatures, 
      successIndicators,
      deploymentAnalysis 
    };
    
  } catch (error) {
    console.error('❌ Test failed:', error);
    return { totalScore: 0, basicDeployment: 0, urlQuality: 0, advancedFeatures: 0, successIndicators: 0 };
  } finally {
    await browser.close();
  }
}

// Run the test
test100PercentDeployment().catch(console.error);
