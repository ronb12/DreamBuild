const puppeteer = require('puppeteer');

(async () => {
  console.log('🚀 Testing Firebase Initialization...');
  
  const browser = await puppeteer.launch({ 
    headless: false,
    defaultViewport: null,
    args: ['--start-maximized']
  });
  
  const page = await browser.newPage();
  
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
    
    // Check Firebase initialization
    console.log('\n🔍 Checking Firebase Initialization...');
    const firebaseStatus = await page.evaluate(() => {
      // Check if Firebase is available globally
      const firebaseGlobal = typeof window.firebase !== 'undefined';
      
      // Check if Firebase is available from imports
      const firebaseApp = typeof window.firebaseApp !== 'undefined';
      
      // Check auth instance
      const authInstance = window.firebase?.auth?.();
      
      // Check if we can create providers
      let canCreateGoogleProvider = false;
      let canCreateGithubProvider = false;
      
      try {
        if (window.firebase?.auth?.GoogleAuthProvider) {
          canCreateGoogleProvider = true;
        }
        if (window.firebase?.auth?.GithubAuthProvider) {
          canCreateGithubProvider = true;
        }
      } catch (e) {
        console.log('Error creating providers:', e.message);
      }
      
      return {
        firebaseGlobal,
        firebaseApp,
        authInstance: !!authInstance,
        canCreateGoogleProvider,
        canCreateGithubProvider,
        windowKeys: Object.keys(window).filter(key => key.includes('firebase') || key.includes('auth'))
      };
    });
    
    console.log('Firebase Status:', firebaseStatus);
    
    // Test if we can manually initialize Firebase
    console.log('\n🔍 Testing Manual Firebase Initialization...');
    const manualInit = await page.evaluate(() => {
      try {
        // Try to access Firebase from the global scope
        if (window.firebase) {
          const auth = window.firebase.auth();
          const googleProvider = new window.firebase.auth.GoogleAuthProvider();
          const githubProvider = new window.firebase.auth.GithubAuthProvider();
          
          return {
            success: true,
            auth: !!auth,
            googleProvider: !!googleProvider,
            githubProvider: !!githubProvider
          };
        } else {
          return {
            success: false,
            error: 'Firebase not available on window object'
          };
        }
      } catch (e) {
        return {
          success: false,
          error: e.message
        };
      }
    });
    
    console.log('Manual Firebase Init:', manualInit);
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
  } finally {
    await browser.close();
  }
  
  console.log('\n🏁 Firebase initialization test completed');
})();
