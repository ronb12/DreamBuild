const puppeteer = require('puppeteer');

async function testUrlDebug() {
  console.log('🔍 Testing URL Debug - Find the extra "App" issue...\n');
  
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
      await promptInput.type('Create a simple hello world app')
      console.log('   ✅ Typed app prompt')
      
      const submitButton = await page.$('#generate-button')
      if (submitButton) {
        await submitButton.click()
        console.log('   ✅ Clicked submit button')
        await new Promise(resolve => setTimeout(resolve, 8000))
        console.log('   ✅ App generated successfully')
      }
    }
    
    // Click Preview Tab
    console.log('\n🧪 Step 3: Click Preview Tab');
    console.log('=' .repeat(50));
    
    await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const previewButton = buttons.find(button => button.textContent.trim() === 'Live Preview');
      if (previewButton) {
        previewButton.click();
      }
    });
    console.log('   ✅ Clicked Live Preview tab');
    
    // Wait for deployment
    await new Promise(resolve => setTimeout(resolve, 10000));
    
    // Extract all URLs and analyze them
    console.log('\n🧪 Step 4: Analyze URLs');
    console.log('=' .repeat(50));
    
    const urlAnalysis = await page.evaluate(() => {
      const bodyText = document.body.textContent;
      
      // Find all URLs
      const allUrls = bodyText.match(/https:\/\/[^\s]+/g) || [];
      
      // Find app URLs specifically
      const appUrls = allUrls.filter(url => url.includes('/apps/'));
      
      // Find iframe src
      const iframe = document.querySelector('iframe');
      const iframeSrc = iframe ? iframe.src : null;
      
      // Find URL in footer
      const footerUrl = document.querySelector('.font-mono');
      const footerUrlText = footerUrl ? footerUrl.textContent : null;
      
      return {
        allUrls: allUrls,
        appUrls: appUrls,
        iframeSrc: iframeSrc,
        footerUrlText: footerUrlText,
        bodyText: bodyText.substring(0, 2000)
      };
    });
    
    console.log('📊 URL Analysis Results:');
    console.log(`   All URLs Found: ${urlAnalysis.allUrls.length}`);
    urlAnalysis.allUrls.forEach((url, index) => {
      console.log(`   URL ${index + 1}: ${url}`);
    });
    
    console.log(`\n   App URLs: ${urlAnalysis.appUrls.length}`);
    urlAnalysis.appUrls.forEach((url, index) => {
      console.log(`   App URL ${index + 1}: ${url}`);
    });
    
    console.log(`\n   Iframe Src: ${urlAnalysis.iframeSrc || 'Not found'}`);
    console.log(`   Footer URL: ${urlAnalysis.footerUrlText || 'Not found'}`);
    
    // Check for the extra "App" issue
    const problematicUrls = urlAnalysis.appUrls.filter(url => url.includes('App'));
    if (problematicUrls.length > 0) {
      console.log(`\n❌ Found ${problematicUrls.length} URLs with extra "App":`);
      problematicUrls.forEach((url, index) => {
        console.log(`   Problematic URL ${index + 1}: ${url}`);
      });
    } else {
      console.log('\n✅ No URLs with extra "App" found');
    }
    
    // Test the first app URL
    if (urlAnalysis.appUrls.length > 0) {
      const testUrl = urlAnalysis.appUrls[0];
      console.log(`\n🧪 Step 5: Test URL: ${testUrl}`);
      console.log('=' .repeat(50));
      
      try {
        await page.goto(testUrl, { waitUntil: 'networkidle2', timeout: 15000 });
        await new Promise(resolve => setTimeout(resolve, 3000));
        
        const testResult = await page.evaluate(() => {
          return {
            url: window.location.href,
            title: document.title,
            hasAppNotFound: document.body.textContent.includes('App Not Found'),
            hasDreamBuild: document.body.textContent.includes('DreamBuild'),
            bodyText: document.body.textContent.substring(0, 500)
          };
        });
        
        console.log('📊 URL Test Results:');
        console.log(`   Final URL: ${testResult.url}`);
        console.log(`   Title: ${testResult.title}`);
        console.log(`   Has App Not Found: ${testResult.hasAppNotFound ? '❌' : '✅'}`);
        console.log(`   Has DreamBuild: ${testResult.hasDreamBuild ? '✅' : '❌'}`);
        console.log(`   Body Text: ${testResult.bodyText}`);
        
      } catch (error) {
        console.log(`   ❌ Error testing URL: ${error.message}`);
      }
    }
    
    console.log('\n🎉 URL debug test completed!');
    
  } catch (error) {
    console.error('❌ Test failed:', error);
  } finally {
    await browser.close();
  }
}

// Run the test
testUrlDebug().catch(console.error);

