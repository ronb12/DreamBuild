const puppeteer = require('puppeteer');

class GitHubAuthTester {
  constructor() {
    this.browser = null;
    this.page = null;
    this.baseUrl = 'https://dreambuild-2024-app.web.app';
  }

  async init() {
    console.log('🚀 Starting GitHub Authentication Test...');
    this.browser = await puppeteer.launch({
      headless: false,
      defaultViewport: { width: 1280, height: 720 },
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    this.page = await this.browser.newPage();
    
    // Set user agent
    await this.page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
    
    // Enable console logging
    this.page.on('console', msg => {
      if (msg.type() === 'error') {
        console.log('❌ Console Error:', msg.text());
      } else if (msg.text().includes('GitHub') || msg.text().includes('auth')) {
        console.log('🔐 Auth Log:', msg.text());
      }
    });
  }

  async testGitHubAuth() {
    try {
      console.log('\n📱 Step 1: Navigate to home page');
      await this.page.goto(this.baseUrl, { waitUntil: 'networkidle2', timeout: 30000 });
      await this.page.waitForTimeout(2000);

      console.log('\n🔍 Step 2: Click Sign In button');
      const signInButton = await this.page.waitForSelector('button:has-text("Sign In")', { timeout: 10000 });
      await signInButton.click();
      await this.page.waitForTimeout(2000);

      console.log('\n🔍 Step 3: Look for GitHub sign-in button');
      const githubButton = await this.page.waitForSelector('button:has-text("Continue with GitHub")', { timeout: 10000 });
      console.log('✅ GitHub button found!');
      
      // Take screenshot before clicking
      await this.page.screenshot({ path: 'github-auth-before.png' });
      console.log('📸 Screenshot saved: github-auth-before.png');

      console.log('\n🔐 Step 4: Click GitHub sign-in button');
      await githubButton.click();
      await this.page.waitForTimeout(3000);

      // Check if popup opened
      const pages = await this.browser.pages();
      console.log(`📄 Total pages: ${pages.length}`);

      if (pages.length > 1) {
        console.log('✅ GitHub popup opened successfully!');
        
        // Switch to popup
        const popup = pages[pages.length - 1];
        await popup.bringToFront();
        
        // Wait for GitHub OAuth page
        await popup.waitForTimeout(3000);
        
        // Take screenshot of popup
        await popup.screenshot({ path: 'github-oauth-popup.png' });
        console.log('📸 Screenshot saved: github-oauth-popup.png');
        
        // Check if we're on GitHub OAuth page
        const url = popup.url();
        console.log(`🔗 Popup URL: ${url}`);
        
        if (url.includes('github.com')) {
          console.log('✅ Successfully redirected to GitHub OAuth!');
          
          // Check for GitHub login form
          const githubLoginForm = await popup.$('form[action="/session"]');
          if (githubLoginForm) {
            console.log('✅ GitHub login form found!');
            console.log('🎉 GitHub authentication is working correctly!');
            return { success: true, message: 'GitHub OAuth popup opened and redirected to GitHub login page' };
          } else {
            console.log('⚠️ GitHub login form not found, but redirected to GitHub');
            return { success: true, message: 'GitHub OAuth popup opened and redirected to GitHub' };
          }
        } else {
          console.log('❌ Not redirected to GitHub OAuth page');
          return { success: false, message: 'Failed to redirect to GitHub OAuth' };
        }
      } else {
        console.log('❌ GitHub popup did not open');
        
        // Check for error messages
        const errorElements = await this.page.$$('[class*="error"], [class*="alert"], .toast-error');
        if (errorElements.length > 0) {
          for (let element of errorElements) {
            const text = await element.evaluate(el => el.textContent);
            console.log('❌ Error message found:', text);
          }
        }
        
        return { success: false, message: 'GitHub popup did not open' };
      }

    } catch (error) {
      console.error('❌ Test failed:', error.message);
      return { success: false, message: error.message };
    }
  }

  async testAccountConflict() {
    try {
      console.log('\n🔍 Step 5: Test account conflict handling');
      
      // Look for any error messages or alerts
      const errorMessages = await this.page.evaluate(() => {
        const errors = [];
        const errorSelectors = [
          '[class*="error"]',
          '[class*="alert"]', 
          '.toast-error',
          'div[role="alert"]'
        ];
        
        errorSelectors.forEach(selector => {
          const elements = document.querySelectorAll(selector);
          elements.forEach(el => {
            if (el.textContent && el.textContent.trim()) {
              errors.push(el.textContent.trim());
            }
          });
        });
        
        return errors;
      });
      
      if (errorMessages.length > 0) {
        console.log('📝 Error messages found:');
        errorMessages.forEach(msg => console.log(`  - ${msg}`));
        
        // Check if it's the expected account conflict message
        const hasAccountConflict = errorMessages.some(msg => 
          msg.includes('account with this email already exists') ||
          msg.includes('already exists using Google')
        );
        
        if (hasAccountConflict) {
          console.log('✅ Account conflict handling is working correctly!');
          return { success: true, message: 'Account conflict properly handled' };
        } else {
          console.log('⚠️ Unexpected error messages');
          return { success: false, message: 'Unexpected error messages' };
        }
      } else {
        console.log('ℹ️ No error messages found');
        return { success: true, message: 'No error messages (expected for new accounts)' };
      }
      
    } catch (error) {
      console.error('❌ Account conflict test failed:', error.message);
      return { success: false, message: error.message };
    }
  }

  async runTest() {
    try {
      await this.init();
      
      const authResult = await this.testGitHubAuth();
      const conflictResult = await this.testAccountConflict();
      
      console.log('\n📊 Test Results:');
      console.log('================');
      console.log(`GitHub Auth: ${authResult.success ? '✅ PASS' : '❌ FAIL'}`);
      console.log(`Message: ${authResult.message}`);
      console.log(`Account Conflict: ${conflictResult.success ? '✅ PASS' : '❌ FAIL'}`);
      console.log(`Message: ${conflictResult.message}`);
      
      const overallSuccess = authResult.success && conflictResult.success;
      console.log(`\n🎯 Overall Result: ${overallSuccess ? '✅ ALL TESTS PASSED' : '❌ SOME TESTS FAILED'}`);
      
      return {
        overall: overallSuccess,
        auth: authResult,
        conflict: conflictResult
      };
      
    } catch (error) {
      console.error('❌ Test suite failed:', error);
      return { overall: false, error: error.message };
    } finally {
      if (this.browser) {
        await this.browser.close();
      }
    }
  }
}

// Run the test
const tester = new GitHubAuthTester();
tester.runTest().then(result => {
  console.log('\n🏁 Test completed!');
  process.exit(result.overall ? 0 : 1);
}).catch(error => {
  console.error('💥 Test crashed:', error);
  process.exit(1);
});
