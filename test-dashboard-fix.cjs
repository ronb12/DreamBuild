const puppeteer = require('puppeteer');

class DashboardTester {
  constructor() {
    this.browser = null;
    this.page = null;
    this.baseUrl = 'https://dreambuild-2024-app.web.app';
  }

  async init() {
    console.log('🚀 Starting Dashboard Test...');
    this.browser = await puppeteer.launch({
      headless: false,
      defaultViewport: { width: 1280, height: 720 },
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    this.page = await this.browser.newPage();
    
    // Enable console logging
    this.page.on('console', msg => {
      if (msg.type() === 'error') {
        console.log('❌ Console Error:', msg.text());
      } else if (msg.text().includes('Dashboard') || msg.text().includes('GitHub')) {
        console.log('📊 Dashboard Log:', msg.text());
      }
    });
  }

  async testDashboardAccess() {
    try {
      console.log('\n📱 Step 1: Navigate to home page');
      await this.page.goto(this.baseUrl, { waitUntil: 'networkidle2', timeout: 30000 });
      await new Promise(resolve => setTimeout(resolve, 3000));

      console.log('\n🔍 Step 2: Look for Dashboard link');
      const dashboardSelectors = [
        'a:contains("Dashboard")',
        '[href*="dashboard"]',
        'a[href="/dashboard"]'
      ];
      
      let dashboardLink = null;
      for (const selector of dashboardSelectors) {
        try {
          dashboardLink = await this.page.$(selector);
          if (dashboardLink) {
            console.log(`✅ Found Dashboard link with selector: ${selector}`);
            break;
          }
        } catch (e) {
          // Continue to next selector
        }
      }
      
      if (!dashboardLink) {
        // Check if we need to sign in first
        const signInButton = await this.page.$('button:contains("Sign In"), a:contains("Sign In")');
        if (signInButton) {
          console.log('🔐 Dashboard requires authentication - signing in with Google');
          await signInButton.click();
          await new Promise(resolve => setTimeout(resolve, 2000));
          
          const googleButton = await this.page.$('button:contains("Google"), button:contains("Continue with Google")');
          if (googleButton) {
            await googleButton.click();
            await new Promise(resolve => setTimeout(resolve, 5000));
          }
        }
        
        // Try to find dashboard link again
        for (const selector of dashboardSelectors) {
          try {
            dashboardLink = await this.page.$(selector);
            if (dashboardLink) {
              console.log(`✅ Found Dashboard link after auth: ${selector}`);
              break;
            }
          } catch (e) {
            // Continue to next selector
          }
        }
      }
      
      if (!dashboardLink) {
        return { success: false, message: 'Dashboard link not found' };
      }

      console.log('\n📊 Step 3: Click Dashboard link');
      await dashboardLink.click();
      await new Promise(resolve => setTimeout(resolve, 3000));

      console.log('\n🔍 Step 4: Check for header overlap');
      const dashboardHeader = await this.page.evaluate(() => {
        const headers = document.querySelectorAll('h1');
        return Array.from(headers).find(h => h.textContent.includes('Dashboard'));
      });
      if (!dashboardHeader) {
        return { success: false, message: 'Dashboard header not found' };
      }

      // Check if header is properly positioned (not overlapping with navbar)
      const headerPosition = await this.page.evaluate(() => {
        const headers = document.querySelectorAll('h1');
        const header = Array.from(headers).find(h => h.textContent.includes('Dashboard'));
        if (!header) return null;
        
        const rect = header.getBoundingClientRect();
        return {
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height
        };
      });

      if (headerPosition && headerPosition.top < 100) {
        console.log('❌ Dashboard header appears to be overlapping with navbar');
        return { success: false, message: 'Header overlap detected' };
      } else {
        console.log('✅ Dashboard header is properly positioned');
      }

      console.log('\n🔍 Step 5: Check for GitHub repositories section');
      const githubSection = await this.page.$('[class*="github"], h2:contains("GitHub")');
      if (githubSection) {
        console.log('✅ GitHub repositories section found');
        
        // Check if it shows repositories or loading state
        const repoItems = await this.page.$$('[class*="repo"], [class*="repository"]');
        const loadingState = await this.page.$('[class*="animate-pulse"]');
        
        if (repoItems.length > 0) {
          console.log(`✅ Found ${repoItems.length} repository items`);
        } else if (loadingState) {
          console.log('✅ GitHub section is in loading state');
        } else {
          console.log('ℹ️ GitHub section shows no repositories (expected for new users)');
        }
      } else {
        console.log('ℹ️ GitHub section not visible (user may not be signed in with GitHub)');
      }

      // Take screenshot
      await this.page.screenshot({ path: 'dashboard-fixed.png' });
      console.log('📸 Screenshot saved: dashboard-fixed.png');

      return { success: true, message: 'Dashboard loaded successfully with proper header positioning' };

    } catch (error) {
      console.error('❌ Test failed:', error.message);
      return { success: false, message: error.message };
    }
  }

  async runTest() {
    try {
      await this.init();
      const result = await this.testDashboardAccess();
      
      console.log('\n📊 Test Results:');
      console.log('================');
      console.log(`Dashboard Access: ${result.success ? '✅ PASS' : '❌ FAIL'}`);
      console.log(`Message: ${result.message}`);
      
      return result;
      
    } catch (error) {
      console.error('❌ Test suite failed:', error);
      return { success: false, message: error.message };
    } finally {
      if (this.browser) {
        await this.browser.close();
      }
    }
  }
}

// Run the test
const tester = new DashboardTester();
tester.runTest().then(result => {
  console.log('\n🏁 Test completed!');
  process.exit(result.success ? 0 : 1);
}).catch(error => {
  console.error('💥 Test crashed:', error);
  process.exit(1);
});
