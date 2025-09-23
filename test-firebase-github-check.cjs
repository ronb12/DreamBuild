const puppeteer = require('puppeteer');

(async () => {
  console.log('🚀 Checking Firebase Configuration and GitHub Login...');
  
  const browser = await puppeteer.launch({ 
    headless: false,
    defaultViewport: null,
    args: ['--start-maximized']
  });
  
  const page = await browser.newPage();
  
  // Monitor all network requests
  const networkRequests = [];
  page.on('request', request => {
    networkRequests.push({
      url: request.url(),
      method: request.method(),
      timestamp: new Date().toISOString()
    });
  });
  
  // Monitor console messages
  page.on('console', msg => {
    console.log(`[${msg.type().toUpperCase()}] ${msg.text()}`);
  });
  
  try {
    // Navigate to login page
    console.log('📱 Navigating to login page...');
    await page.goto('http://localhost:3000/login', { waitUntil: 'networkidle0' });
    
    // Wait for page to load
    await page.waitForSelector('h1');
    console.log('✅ Login page loaded');
    
    // Check Firebase configuration
    console.log('\n🔍 Checking Firebase Configuration...');
    const firebaseConfig = await page.evaluate(() => {
      return {
        hasFirebase: typeof window.firebase !== 'undefined',
        hasGoogleProvider: typeof window.google !== 'undefined',
        authDomain: window.location.hostname,
        currentUrl: window.location.href
      };
    });
    console.log('Firebase Config:', firebaseConfig);
    
    // Check available authentication buttons
    console.log('\n🔍 Checking Authentication Buttons...');
    const authButtons = await page.evaluate(() => {
      const buttons = document.querySelectorAll('button');
      return Array.from(buttons).map(btn => ({
        text: btn.textContent.trim(),
        className: btn.className,
        visible: btn.offsetParent !== null
      })).filter(btn => btn.text && btn.visible);
    });
    console.log('Available buttons:', authButtons);
    
    // Test GitHub button specifically
    console.log('\n🖱️ Testing GitHub Button...');
    const githubResult = await page.evaluate(() => {
      const buttons = document.querySelectorAll('button');
      const githubBtn = Array.from(buttons).find(btn => 
        btn.textContent.includes('Continue with GitHub')
      );
      
      if (githubBtn) {
        githubBtn.click();
        console.log('GitHub button clicked');
        return { clicked: true, buttonText: githubBtn.textContent.trim() };
      }
      return { clicked: false, error: 'GitHub button not found' };
    });
    
    console.log('GitHub button result:', githubResult);
    
    // Wait for authentication attempt
    console.log('\n⏳ Waiting for authentication response...');
    await new Promise(resolve => setTimeout(resolve, 5000));
    
    // Check for popup
    const pages = await browser.pages();
    if (pages.length > 1) {
      console.log('✅ Popup opened');
      
      // Check popup content
      const popupContent = await pages[1].evaluate(() => {
        return {
          url: window.location.href,
          title: document.title,
          hasLoginForm: !!document.querySelector('input[type="email"], input[type="password"]'),
          hasGitHubContent: document.body.textContent.includes('GitHub')
        };
      });
      console.log('Popup content:', popupContent);
      
      await pages[1].close();
    } else {
      console.log('❌ No popup opened');
    }
    
    // Analyze network requests
    console.log('\n📊 Network Request Analysis:');
    const relevantRequests = networkRequests.filter(req => 
      req.url.includes('google') || 
      req.url.includes('github') || 
      req.url.includes('firebase') ||
      req.url.includes('auth')
    );
    
    relevantRequests.forEach((req, index) => {
      console.log(`${index + 1}. ${req.method} ${req.url}`);
    });
    
    // Check for specific errors
    const hasGoogleApiError = relevantRequests.some(req => 
      req.url.includes('apis.google.com') && req.url.includes('404')
    );
    
    const hasGitHubApi = relevantRequests.some(req => 
      req.url.includes('github.com') || req.url.includes('githubusercontent.com')
    );
    
    console.log('\n🔍 Analysis Results:');
    console.log('- Google API 404 errors:', hasGoogleApiError);
    console.log('- GitHub API requests:', hasGitHubApi);
    
    if (hasGoogleApiError) {
      console.log('❌ ISSUE: Google APIs are being loaded when GitHub is clicked');
      console.log('💡 SOLUTION: Check Firebase Console - GitHub provider may not be configured');
    }
    
    if (hasGitHubApi) {
      console.log('✅ GitHub APIs are being loaded correctly');
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
  } finally {
    await browser.close();
  }
  
  console.log('\n🏁 Firebase and GitHub check completed');
})();
