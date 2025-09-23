const puppeteer = require('puppeteer');

(async () => {
  console.log('🚀 Deep Debugging GitHub Authentication...');
  
  const browser = await puppeteer.launch({ 
    headless: false,
    defaultViewport: null,
    args: ['--start-maximized', '--disable-web-security', '--disable-features=VizDisplayCompositor']
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
  
  // Monitor page errors
  page.on('pageerror', error => {
    console.log('❌ Page Error:', error.message);
  });
  
  try {
    // Navigate to login page
    console.log('📱 Navigating to login page...');
    await page.goto('http://localhost:3000/login', { waitUntil: 'networkidle0' });
    
    // Wait for page to load
    await page.waitForSelector('h1');
    console.log('✅ Login page loaded');
    
    // Check Firebase configuration details
    console.log('\n🔍 Checking Firebase Configuration Details...');
    const firebaseDetails = await page.evaluate(() => {
      // Check if Firebase is loaded
      const firebaseLoaded = typeof window.firebase !== 'undefined';
      
      // Check auth instance
      const authInstance = window.firebase?.auth?.();
      
      // Check available providers
      const providers = [];
      if (window.firebase?.auth?.GoogleAuthProvider) {
        providers.push('Google');
      }
      if (window.firebase?.auth?.GithubAuthProvider) {
        providers.push('GitHub');
      }
      
      return {
        firebaseLoaded,
        authInstance: !!authInstance,
        availableProviders: providers,
        currentUser: authInstance?.currentUser,
        authDomain: window.location.hostname
      };
    });
    console.log('Firebase Details:', firebaseDetails);
    
    // Test GitHub authentication step by step
    console.log('\n🖱️ Testing GitHub Authentication Step by Step...');
    
    // Step 1: Click GitHub button
    console.log('Step 1: Clicking GitHub button...');
    await page.evaluate(() => {
      const buttons = document.querySelectorAll('button');
      const githubBtn = Array.from(buttons).find(btn => 
        btn.textContent.includes('Continue with GitHub')
      );
      if (githubBtn) {
        githubBtn.click();
        console.log('GitHub button clicked');
      }
    });
    
    // Step 2: Wait for popup and check its content
    console.log('Step 2: Waiting for popup...');
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    const pages = await browser.pages();
    if (pages.length > 1) {
      console.log('✅ Popup opened');
      
      const popup = pages[1];
      const popupInfo = await popup.evaluate(() => {
        return {
          url: window.location.href,
          title: document.title,
          domain: window.location.hostname,
          hasGitHubContent: document.body.textContent.includes('GitHub'),
          hasLoginForm: !!document.querySelector('input[type="email"], input[type="password"]'),
          hasOAuthForm: !!document.querySelector('form'),
          bodyText: document.body.textContent.substring(0, 200)
        };
      });
      console.log('Popup Info:', popupInfo);
      
      // Check if it's a GitHub OAuth page
      if (popupInfo.url.includes('github.com')) {
        console.log('✅ GitHub OAuth page loaded correctly');
      } else {
        console.log('❌ Not a GitHub OAuth page:', popupInfo.url);
      }
      
      await popup.close();
    } else {
      console.log('❌ No popup opened');
    }
    
    // Step 3: Check for specific error messages
    console.log('Step 3: Checking for error messages...');
    const errorInfo = await page.evaluate(() => {
      const errorElements = document.querySelectorAll('[class*="error"], [class*="alert"], .toast, [role="alert"]');
      return Array.from(errorElements).map(el => el.textContent.trim());
    });
    
    if (errorInfo.length > 0) {
      console.log('Error messages found:', errorInfo);
    }
    
    // Step 4: Analyze network requests
    console.log('\n📊 Network Request Analysis:');
    const authRequests = networkRequests.filter(req => 
      req.url.includes('auth') || 
      req.url.includes('firebase') || 
      req.url.includes('google') || 
      req.url.includes('github')
    );
    
    authRequests.forEach((req, index) => {
      console.log(`${index + 1}. ${req.method} ${req.url}`);
    });
    
    // Check for specific issues
    const hasGoogleApiError = authRequests.some(req => 
      req.url.includes('apis.google.com') && req.url.includes('404')
    );
    
    const hasFirebaseAuthError = authRequests.some(req => 
      req.url.includes('firebase') && req.url.includes('error')
    );
    
    console.log('\n🔍 Issue Analysis:');
    console.log('- Google API 404 errors:', hasGoogleApiError);
    console.log('- Firebase auth errors:', hasFirebaseAuthError);
    
    if (hasGoogleApiError) {
      console.log('❌ ISSUE: Google APIs are being loaded when GitHub is clicked');
      console.log('💡 This suggests Firebase is trying to load Google provider even for GitHub');
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
  } finally {
    await browser.close();
  }
  
  console.log('\n🏁 Deep debugging completed');
})();
