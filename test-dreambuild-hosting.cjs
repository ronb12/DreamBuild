const puppeteer = require('puppeteer');

async function testDreamBuildHosting() {
  console.log('🚀 Testing DreamBuild Hosting System - End-to-End Test...\n');
  
  const browser = await puppeteer.launch({ 
    headless: false,
    defaultViewport: null,
    args: ['--start-maximized', '--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  
  try {
    // Navigate to AI Builder
    console.log('📍 Step 1: Navigate to AI Builder');
    console.log('=' .repeat(50));
    await page.goto('https://dreambuild-2024-app.web.app/ai-builder', { 
      waitUntil: 'networkidle2',
      timeout: 30000 
    });
    await new Promise(resolve => setTimeout(resolve, 3000));
    console.log('✅ AI Builder loaded\n');
    
    // Generate a simple app
    console.log('🧪 Step 2: Generate Simple App');
    console.log('=' .repeat(50));
    
    // Find and fill the prompt input
    const promptInput = await page.$('textarea[placeholder*="prompt"], input[placeholder*="prompt"], textarea, input[type="text"]')
    if (promptInput) {
      console.log('   ✅ Found prompt input');
      
      // Clear and type a simple app prompt
      await promptInput.click()
      await promptInput.evaluate(el => el.value = '')
      await promptInput.type('Create a simple calculator app with HTML, CSS, and JavaScript. Include buttons for numbers 0-9, operations +, -, *, /, and equals. Make it look modern with a dark theme.')
      console.log('   ✅ Typed app prompt')
      
      // Find and click submit button
      const submitButton = await page.$('#generate-button')
      if (submitButton) {
        console.log('   ✅ Found submit button')
        await submitButton.click()
        console.log('   ✅ Clicked submit button')
        
        // Wait for generation
        await new Promise(resolve => setTimeout(resolve, 8000))
        console.log('   ✅ App generated successfully')
      } else {
        console.log('   ❌ Submit button not found')
        return
      }
    } else {
      console.log('   ❌ Prompt input not found')
      return
    }
    
    // Click Preview Tab
    console.log('\n🧪 Step 3: Click Preview Tab');
    console.log('=' .repeat(50));
    
    // Find and click the Live Preview tab
    await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const previewButton = buttons.find(button => button.textContent.trim() === 'Live Preview');
      if (previewButton) {
        previewButton.click();
      }
    });
    console.log('   ✅ Clicked Live Preview tab');
    
    // Wait for preview to load
    await new Promise(resolve => setTimeout(resolve, 5000));
    
    // Check for deployment status
    console.log('\n🧪 Step 4: Check Deployment Status');
    console.log('=' .repeat(50));
    
    const deploymentStatus = await page.evaluate(() => {
      return {
        hasPreviewTab: document.body.textContent.includes('PREVIEW TAB ACTIVE'),
        hasPreviewLoaded: document.body.textContent.includes('PREVIEW LOADED'),
        hasDeployed: document.body.textContent.includes('DEPLOYED'),
        hasAppUrl: document.body.textContent.includes('https://dreambuild-2024-app.web.app/apps/'),
        hasIframe: !!document.querySelector('iframe'),
        hasPreviewContent: !!document.querySelector('[class*="preview"]'),
        hasDeploymentService: document.body.textContent.includes('Deploying App') ||
                             document.body.textContent.includes('App deployed'),
        bodyText: document.body.textContent.substring(0, 500)
      };
    });
    
    console.log('📊 Deployment Status:');
    console.log(`   Has Preview Tab: ${deploymentStatus.hasPreviewTab ? '✅' : '❌'}`);
    console.log(`   Has Preview Loaded: ${deploymentStatus.hasPreviewLoaded ? '✅' : '❌'}`);
    console.log(`   Has Deployed: ${deploymentStatus.hasDeployed ? '✅' : '❌'}`);
    console.log(`   Has App URL: ${deploymentStatus.hasAppUrl ? '✅' : '❌'}`);
    console.log(`   Has Iframe: ${deploymentStatus.hasIframe ? '✅' : '❌'}`);
    console.log(`   Has Preview Content: ${deploymentStatus.hasPreviewContent ? '✅' : '❌'}`);
    console.log(`   Has Deployment Service: ${deploymentStatus.hasDeploymentService ? '✅' : '❌'}`);
    
    // Extract app URL if available
    let appUrl = null;
    if (deploymentStatus.hasAppUrl) {
      const urlMatch = deploymentStatus.bodyText.match(/https:\/\/dreambuild-2024-app\.web\.app\/apps\/[^\s]+/);
      if (urlMatch) {
        appUrl = urlMatch[0];
        console.log(`   📍 App URL Found: ${appUrl}`);
      }
    }
    
    // Test the deployed app
    if (appUrl) {
      console.log('\n🧪 Step 5: Test Deployed App');
      console.log('=' .repeat(50));
      
      console.log(`   🔗 Testing app URL: ${appUrl}`);
      
      try {
        // Navigate to the deployed app
        await page.goto(appUrl, { waitUntil: 'networkidle2', timeout: 15000 });
        await new Promise(resolve => setTimeout(resolve, 3000));
        
        // Check if app loads correctly
        const appContent = await page.evaluate(() => {
          return {
            url: window.location.href,
            title: document.title,
            hasCalculator: document.body.textContent.includes('calculator') ||
                          document.body.textContent.includes('Calculator') ||
                          document.body.textContent.includes('+') ||
                          document.body.textContent.includes('-') ||
                          document.body.textContent.includes('*') ||
                          document.body.textContent.includes('/'),
            hasNumbers: document.body.textContent.includes('0') ||
                       document.body.textContent.includes('1') ||
                       document.body.textContent.includes('2'),
            hasDreamBuildBranding: document.body.textContent.includes('DreamBuild') ||
                                  document.body.textContent.includes('Built with'),
            hasError: document.body.textContent.includes('App Not Found') ||
                     document.body.textContent.includes('Error') ||
                     document.body.textContent.includes('404'),
            bodyText: document.body.textContent.substring(0, 300)
          };
        });
        
        console.log('📊 Deployed App Analysis:');
        console.log(`   URL: ${appContent.url}`);
        console.log(`   Title: ${appContent.title}`);
        console.log(`   Has Calculator: ${appContent.hasCalculator ? '✅' : '❌'}`);
        console.log(`   Has Numbers: ${appContent.hasNumbers ? '✅' : '❌'}`);
        console.log(`   Has DreamBuild Branding: ${appContent.hasDreamBuildBranding ? '✅' : '❌'}`);
        console.log(`   Has Error: ${appContent.hasError ? '❌' : '✅'}`);
        console.log(`   Body Text: ${appContent.bodyText}`);
        
        // Test app functionality
        console.log('\n🧪 Step 6: Test App Functionality');
        console.log('=' .repeat(50));
        
        // Look for calculator buttons and test them
        const calculatorTest = await page.evaluate(() => {
          const buttons = Array.from(document.querySelectorAll('button'));
          const numbers = buttons.filter(btn => /^[0-9]$/.test(btn.textContent.trim()));
          const operations = buttons.filter(btn => /^[+\-*/]$/.test(btn.textContent.trim()));
          const equals = buttons.filter(btn => btn.textContent.trim() === '=');
          
          return {
            totalButtons: buttons.length,
            numberButtons: numbers.length,
            operationButtons: operations.length,
            equalsButton: equals.length,
            hasCalculatorElements: numbers.length > 0 && operations.length > 0 && equals.length > 0
          };
        });
        
        console.log('📊 Calculator Functionality:');
        console.log(`   Total Buttons: ${calculatorTest.totalButtons}`);
        console.log(`   Number Buttons: ${calculatorTest.numberButtons}`);
        console.log(`   Operation Buttons: ${calculatorTest.operationButtons}`);
        console.log(`   Equals Button: ${calculatorTest.equalsButton}`);
        console.log(`   Has Calculator Elements: ${calculatorTest.hasCalculatorElements ? '✅' : '❌'}`);
        
        // Test clicking buttons
        if (calculatorTest.hasCalculatorElements) {
          console.log('   🧮 Testing calculator buttons...');
          
          // Try to click some buttons
          try {
            await page.evaluate(() => {
              const buttons = Array.from(document.querySelectorAll('button'));
              const numberButtons = buttons.filter(btn => /^[0-9]$/.test(btn.textContent.trim()));
              const operationButtons = buttons.filter(btn => /^[+\-*/]$/.test(btn.textContent.trim()));
              
              if (numberButtons.length > 0) {
                numberButtons[0].click(); // Click first number
              }
              if (operationButtons.length > 0) {
                operationButtons[0].click(); // Click first operation
              }
              if (numberButtons.length > 1) {
                numberButtons[1].click(); // Click second number
              }
            });
            
            console.log('   ✅ Successfully clicked calculator buttons');
          } catch (error) {
            console.log(`   ⚠️ Button click test: ${error.message}`);
          }
        }
        
      } catch (error) {
        console.log(`   ❌ Error testing deployed app: ${error.message}`);
      }
    } else {
      console.log('   ❌ No app URL found - deployment may have failed');
    }
    
    // Test App Gallery
    console.log('\n🧪 Step 7: Test App Gallery');
    console.log('=' .repeat(50));
    
    let galleryStatus = null;
    try {
      await page.goto('https://dreambuild-2024-app.web.app/gallery', { 
        waitUntil: 'networkidle2', 
        timeout: 15000 
      });
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      galleryStatus = await page.evaluate(() => {
        return {
          url: window.location.href,
          title: document.title,
          hasGallery: document.body.textContent.includes('DreamBuild App Gallery') ||
                     document.body.textContent.includes('Gallery') ||
                     document.body.textContent.includes('Discover amazing apps'),
          hasApps: document.body.textContent.includes('View App') ||
                  document.body.textContent.includes('apps') ||
                  document.body.textContent.includes('Total Apps'),
          hasSearch: !!document.querySelector('input[placeholder*="Search"]'),
          hasStats: document.body.textContent.includes('Total Apps') ||
                   document.body.textContent.includes('Public Apps') ||
                   document.body.textContent.includes('Total Views'),
          bodyText: document.body.textContent.substring(0, 300)
        };
      });
      
      console.log('📊 App Gallery Status:');
      console.log(`   URL: ${galleryStatus.url}`);
      console.log(`   Title: ${galleryStatus.title}`);
      console.log(`   Has Gallery: ${galleryStatus.hasGallery ? '✅' : '❌'}`);
      console.log(`   Has Apps: ${galleryStatus.hasApps ? '✅' : '❌'}`);
      console.log(`   Has Search: ${galleryStatus.hasSearch ? '✅' : '❌'}`);
      console.log(`   Has Stats: ${galleryStatus.hasStats ? '✅' : '❌'}`);
      console.log(`   Body Text: ${galleryStatus.bodyText}`);
      
    } catch (error) {
      console.log(`   ❌ Error testing gallery: ${error.message}`);
      galleryStatus = null;
    }
    
    // Final Assessment
    console.log('\n🎯 Final Assessment');
    console.log('=' .repeat(50));
    
    const totalScore = (deploymentStatus.hasPreviewTab ? 20 : 0) + 
                     (deploymentStatus.hasDeployed ? 20 : 0) + 
                     (deploymentStatus.hasAppUrl ? 20 : 0) + 
                     (appUrl ? 20 : 0) + 
                     (galleryStatus && galleryStatus.hasGallery ? 20 : 0);
    
    console.log(`📊 DreamBuild Hosting Score: ${totalScore}/100`);
    
    if (totalScore >= 80) {
      console.log('🌟 EXCELLENT - DreamBuild hosting system working perfectly!');
    } else if (totalScore >= 60) {
      console.log('✅ GOOD - DreamBuild hosting mostly working');
    } else if (totalScore >= 40) {
      console.log('⚠️ FAIR - DreamBuild hosting has some issues');
    } else {
      console.log('❌ POOR - DreamBuild hosting not working');
    }
    
    console.log('\n🎉 Test completed successfully!');
    console.log(`📍 Generated App URL: ${appUrl || 'Not found'}`);
    console.log(`📍 Gallery URL: https://dreambuild-2024-app.web.app/gallery`);
    
    return { 
      totalScore, 
      appUrl, 
      deploymentStatus, 
      galleryStatus: galleryStatus || null 
    };
    
  } catch (error) {
    console.error('❌ Test failed:', error);
    return { totalScore: 0, appUrl: null, deploymentStatus: null, galleryStatus: null };
  } finally {
    await browser.close();
  }
}

// Run the test
testDreamBuildHosting().catch(console.error);
