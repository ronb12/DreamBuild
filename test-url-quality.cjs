const puppeteer = require('puppeteer');

async function testUrlQuality() {
  console.log('🔍 Testing URL Quality - Detailed Analysis...\n');
  
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
    
    // Detailed URL analysis
    console.log('\n🧪 Step 4: Detailed URL Analysis');
    console.log('=' .repeat(50));
    
    const urlAnalysis = await page.evaluate(() => {
      const bodyText = document.body.textContent;
      
      // Find all URLs
      const allUrls = bodyText.match(/https:\/\/[^\s]+/g) || [];
      const appUrls = allUrls.filter(url => url.includes('/apps/'));
      
      // Check for clean URLs (no extra "App")
      const cleanUrls = appUrls.filter(url => !url.includes('App'));
      const dirtyUrls = appUrls.filter(url => url.includes('App'));
      
      // Check iframe src
      const iframe = document.querySelector('iframe');
      const iframeSrc = iframe ? iframe.src : null;
      
      // Check footer URL
      const footerUrl = document.querySelector('.font-mono');
      const footerUrlText = footerUrl ? footerUrl.textContent : null;
      
      // Check for proper URL format
      const properFormatUrls = appUrls.filter(url => 
        url.match(/^https:\/\/dreambuild-2024-app\.web\.app\/apps\/[a-zA-Z0-9\-]+$/)
      );
      
      return {
        allUrls,
        appUrls,
        cleanUrls,
        dirtyUrls,
        iframeSrc,
        footerUrlText,
        properFormatUrls,
        hasCleanUrl: cleanUrls.length > 0,
        hasProperFormat: properFormatUrls.length > 0,
        bodyText: bodyText.substring(0, 1000)
      };
    });
    
    console.log('📊 URL Quality Analysis:');
    console.log('=' .repeat(50));
    
    console.log(`   All URLs Found: ${urlAnalysis.allUrls.length}`);
    urlAnalysis.allUrls.forEach((url, index) => {
      console.log(`   URL ${index + 1}: ${url}`);
    });
    
    console.log(`\n   App URLs: ${urlAnalysis.appUrls.length}`);
    urlAnalysis.appUrls.forEach((url, index) => {
      console.log(`   App URL ${index + 1}: ${url}`);
    });
    
    console.log(`\n   Clean URLs (no "App"): ${urlAnalysis.cleanUrls.length}`);
    urlAnalysis.cleanUrls.forEach((url, index) => {
      console.log(`   Clean URL ${index + 1}: ${url}`);
    });
    
    console.log(`\n   Dirty URLs (with "App"): ${urlAnalysis.dirtyUrls.length}`);
    urlAnalysis.dirtyUrls.forEach((url, index) => {
      console.log(`   Dirty URL ${index + 1}: ${url}`);
    });
    
    console.log(`\n   Proper Format URLs: ${urlAnalysis.properFormatUrls.length}`);
    urlAnalysis.properFormatUrls.forEach((url, index) => {
      console.log(`   Proper URL ${index + 1}: ${url}`);
    });
    
    console.log(`\n   Iframe Src: ${urlAnalysis.iframeSrc || 'Not found'}`);
    console.log(`   Footer URL: ${urlAnalysis.footerUrlText || 'Not found'}`);
    
    // Calculate URL quality score
    const urlQualityScore = (urlAnalysis.hasCleanUrl ? 10 : 0) + 
                           (urlAnalysis.hasProperFormat ? 10 : 0) + 
                           (urlAnalysis.footerUrlText ? 5 : 0);
    
    console.log('\n🎯 URL Quality Score:');
    console.log(`   Has Clean URL: ${urlAnalysis.hasCleanUrl ? '✅' : '❌'} (10pts)`);
    console.log(`   Has Proper Format: ${urlAnalysis.hasProperFormat ? '✅' : '❌'} (10pts)`);
    console.log(`   Has Footer Display: ${urlAnalysis.footerUrlText ? '✅' : '❌'} (5pts)`);
    console.log(`   Total URL Score: ${urlQualityScore}/25`);
    
    // Test the first clean URL if available
    if (urlAnalysis.cleanUrls.length > 0) {
      const testUrl = urlAnalysis.cleanUrls[0];
      console.log(`\n🧪 Step 5: Test Clean URL: ${testUrl}`);
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
            bodyText: document.body.textContent.substring(0, 300)
          };
        });
        
        console.log('📊 Clean URL Test Results:');
        console.log(`   Final URL: ${testResult.url}`);
        console.log(`   Title: ${testResult.title}`);
        console.log(`   Has App Not Found: ${testResult.hasAppNotFound ? '❌' : '✅'}`);
        console.log(`   Has DreamBuild: ${testResult.hasDreamBuild ? '✅' : '❌'}`);
        console.log(`   Body Text: ${testResult.bodyText}`);
        
        if (!testResult.hasAppNotFound && testResult.hasDreamBuild) {
          console.log('   ✅ Clean URL is working!');
        } else {
          console.log('   ❌ Clean URL is not working');
        }
        
      } catch (error) {
        console.log(`   ❌ Error testing clean URL: ${error.message}`);
      }
    }
    
    console.log('\n🎉 URL quality test completed!');
    
    return { urlQualityScore, urlAnalysis };
    
  } catch (error) {
    console.error('❌ Test failed:', error);
    return { urlQualityScore: 0, urlAnalysis: null };
  } finally {
    await browser.close();
  }
}

// Run the test
testUrlQuality().catch(console.error);

