const puppeteer = require('puppeteer');

(async () => {
  console.log('🚀 Testing Firebase Configuration...');
  
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
    
    // Check Firebase configuration details
    console.log('\n🔍 Checking Firebase Configuration...');
    const configDetails = await page.evaluate(() => {
      // Check if we can access the Firebase config
      const config = window.firebaseConfig || window.FIREBASE_CONFIG;
      
      // Check if Firebase is loaded
      const firebaseLoaded = typeof window.firebase !== 'undefined';
      
      // Check if we can access Firebase from the React app
      const reactApp = document.getElementById('root');
      
      return {
        config,
        firebaseLoaded,
        reactApp: !!reactApp,
        windowKeys: Object.keys(window).filter(key => 
          key.includes('firebase') || 
          key.includes('auth') || 
          key.includes('config')
        )
      };
    });
    
    console.log('Config Details:', configDetails);
    
    // Try to manually test Firebase authentication
    console.log('\n🔍 Testing Firebase Authentication Manually...');
    const authTest = await page.evaluate(() => {
      try {
        // Try to access Firebase from the global scope
        if (window.firebase && window.firebase.auth) {
          const auth = window.firebase.auth();
          return {
            success: true,
            auth: !!auth,
            providers: {
              google: !!window.firebase.auth.GoogleAuthProvider,
              github: !!window.firebase.auth.GithubAuthProvider
            }
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
    
    console.log('Auth Test:', authTest);
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
  } finally {
    await browser.close();
  }
  
  console.log('\n🏁 Firebase configuration test completed');
})();
