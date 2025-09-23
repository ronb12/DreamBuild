const puppeteer = require('puppeteer');

class DetailedGitHubTest {
  constructor() {
    this.browser = null;
    this.page = null;
    this.baseUrl = 'https://dreambuild-2024-app.web.app';
  }

  async init() {
    console.log('🚀 Starting Detailed GitHub Test...');
    this.browser = await puppeteer.launch({
      headless: false,
      defaultViewport: { width: 1280, height: 720 },
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    this.page = await this.browser.newPage();
    
    // Enable console logging
    this.page.on('console', msg => {
      if (msg.type() === 'error') {
        console.log('❌ ERROR:', msg.text());
      } else if (msg.text().includes('GitHub') || msg.text().includes('auth') || msg.text().includes('Firebase')) {
        console.log('🔗 LOG:', msg.text());
      }
    });

    // Listen for network requests
    this.page.on('request', request => {
      if (request.url().includes('github') || request.url().includes('auth')) {
        console.log('🌐 REQUEST:', request.method(), request.url());
      }
    });

    this.page.on('response', response => {
      if (response.url().includes('github') || response.url().includes('auth')) {
        console.log('📡 RESPONSE:', response.status(), response.url());
      }
    });
  }

  async testGitHubLogin() {
    try {
      console.log('\n📱 Step 1: Navigate to login page');
      await this.page.goto(`${this.baseUrl}/login`, { waitUntil: 'networkidle2', timeout: 30000 });
      await new Promise(resolve => setTimeout(resolve, 2000));

      console.log('\n🔍 Step 2: Click GitHub button and monitor errors');
      await this.page.evaluate(() => {
        const buttons = document.querySelectorAll('button');
        const githubBtn = Array.from(buttons).find(btn => 
          btn.textContent.includes('Continue with GitHub')
        );
        if (githubBtn) {
          githubBtn.click();
        }
      });

      // Wait for any network activity or errors
      await new Promise(resolve => setTimeout(resolve, 5000));

      // Check for specific Firebase auth errors
      const authErrors = await this.page.evaluate(() => {
        const errors = [];
        
        // Check console for auth errors
        if (window.console && window.console.error) {
          // This won't capture previous errors, but we can check for current state
        }
        
        // Check for any error messages on the page
        const body = document.body.textContent;
        if (body.includes('auth/internal-error')) {
          errors.push('auth/internal-error detected');
        }
        if (body.includes('auth/operation-not-allowed')) {
          errors.push('auth/operation-not-allowed detected');
        }
        if (body.includes('auth/configuration-not-found')) {
          errors.push('auth/configuration-not-found detected');
        }
        if (body.includes('Failed to sign in with GitHub')) {
          errors.push('GitHub sign-in failure detected');
        }
        
        return {
          errors,
          hasError: errors.length > 0,
          content: body.substring(0, 1000)
        };
      });

      console.log('📄 Auth Error Analysis:');
      console.log(`  Errors Found: ${authErrors.errors.join(', ') || 'None'}`);
      console.log(`  Has Error: ${authErrors.hasError}`);
      console.log(`  Content: ${authErrors.content}`);

      // Check if popup opened
      const pages = await this.browser.pages();
      if (pages.length > 1) {
        console.log('✅ Popup opened - checking content');
        const popup = pages[pages.length - 1];
        
        const popupContent = await popup.evaluate(() => {
          return {
            title: document.title,
            url: window.location.href,
            hasError: document.body.textContent.includes('error') || document.body.textContent.includes('Error'),
            content: document.body.textContent.substring(0, 1000)
          };
        });

        console.log('📄 Popup Analysis:');
        console.log(`  Title: ${popupContent.title}`);
        console.log(`  URL: ${popupContent.url}`);
        console.log(`  Has Error: ${popupContent.hasError}`);
        console.log(`  Content: ${popupContent.content}`);

        await popup.close();
      }

      return { success: true, message: 'Test completed - check console logs for specific errors' };

    } catch (error) {
      console.error('❌ Test failed:', error.message);
      return { success: false, message: error.message };
    }
  }

  async runTest() {
    try {
      await this.init();
      
      const result = await this.testGitHubLogin();
      
      console.log('\n📊 Test Results:');
      console.log('================');
      console.log(`GitHub Login: ${result.success ? '✅ PASS' : '❌ FAIL'}`);
      console.log(`Message: ${result.message}`);
      
      return result;
      
    } catch (error) {
      console.error('❌ Test suite failed:', error);
      return { success: false, error: error.message };
    } finally {
      if (this.browser) {
        await this.browser.close();
      }
    }
  }
}

// Run the test
const tester = new DetailedGitHubTest();
tester.runTest().then(result => {
  console.log('\n🏁 Test completed!');
  process.exit(result.success ? 0 : 1);
}).catch(error => {
  console.error('💥 Test crashed:', error);
  process.exit(1);
});
