const puppeteer = require('puppeteer');

class GitHubLoginDebugTester {
  constructor() {
    this.browser = null;
    this.page = null;
    this.baseUrl = 'https://dreambuild-2024-app.web.app';
  }

  async init() {
    console.log('🚀 Starting GitHub Login Debug Test...');
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
      } else if (msg.text().includes('GitHub') || msg.text().includes('auth') || msg.text().includes('Firebase')) {
        console.log('🔗 Auth Log:', msg.text());
      }
    });
  }

  async testGitHubLogin() {
    try {
      console.log('\n📱 Step 1: Navigate to login page');
      await this.page.goto(`${this.baseUrl}/login`, { waitUntil: 'networkidle2', timeout: 30000 });
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Take screenshot
      await this.page.screenshot({ path: 'github-login-debug.png' });
      console.log('📸 Screenshot saved: github-login-debug.png');

      console.log('\n🔍 Step 2: Look for GitHub login button');
      const githubButton = await this.page.evaluate(() => {
        const buttons = document.querySelectorAll('button');
        return Array.from(buttons).find(btn => 
          btn.textContent.includes('GitHub') || btn.textContent.includes('Continue with GitHub')
        );
      });
      if (!githubButton) {
        console.log('❌ GitHub login button not found');
        return { success: false, message: 'GitHub login button not found' };
      }

      console.log('✅ GitHub login button found');

      console.log('\n🔍 Step 3: Click GitHub login button');
      await this.page.evaluate(() => {
        const buttons = document.querySelectorAll('button');
        const githubBtn = Array.from(buttons).find(btn => 
          btn.textContent.includes('GitHub') || btn.textContent.includes('Continue with GitHub')
        );
        if (githubBtn) {
          githubBtn.click();
        }
      });
      await new Promise(resolve => setTimeout(resolve, 3000));

      // Check for popup or error
      const pages = await this.browser.pages();
      console.log(`📄 Number of pages after click: ${pages.length}`);

      if (pages.length > 1) {
        console.log('✅ GitHub popup opened');
        const popup = pages[pages.length - 1];
        
        // Wait for popup to load
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Check popup content
        const popupContent = await popup.evaluate(() => {
          return {
            title: document.title,
            url: window.location.href,
            hasError: document.body.textContent.includes('error') || document.body.textContent.includes('Error'),
            content: document.body.textContent.substring(0, 500)
          };
        });

        console.log('📄 Popup Analysis:');
        console.log(`  Title: ${popupContent.title}`);
        console.log(`  URL: ${popupContent.url}`);
        console.log(`  Has Error: ${popupContent.hasError}`);
        console.log(`  Content: ${popupContent.content}`);

        if (popupContent.hasError) {
          console.log('❌ Error detected in GitHub popup');
          return { success: false, message: 'Error in GitHub popup: ' + popupContent.content };
        }

        // Close popup
        await popup.close();
        return { success: true, message: 'GitHub popup opened successfully' };

      } else {
        console.log('❌ No popup opened - checking for errors');
        
        // Check for error messages on the main page
        const errorCheck = await this.page.evaluate(() => {
          const body = document.body.textContent;
          return {
            hasError: body.includes('error') || body.includes('Error') || body.includes('failed'),
            hasAuthError: body.includes('auth/') || body.includes('Firebase'),
            content: body.substring(0, 1000)
          };
        });

        console.log('📄 Error Analysis:');
        console.log(`  Has Error: ${errorCheck.hasError}`);
        console.log(`  Has Auth Error: ${errorCheck.hasAuthError}`);
        console.log(`  Content: ${errorCheck.content}`);

        if (errorCheck.hasError) {
          return { success: false, message: 'Error detected: ' + errorCheck.content };
        }

        return { success: false, message: 'No popup opened and no clear error message' };
      }

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
const tester = new GitHubLoginDebugTester();
tester.runTest().then(result => {
  console.log('\n🏁 Test completed!');
  process.exit(result.success ? 0 : 1);
}).catch(error => {
  console.error('💥 Test crashed:', error);
  process.exit(1);
});
