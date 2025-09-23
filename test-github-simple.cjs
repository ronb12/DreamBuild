const puppeteer = require('puppeteer');

class SimpleGitHubTester {
  constructor() {
    this.browser = null;
    this.page = null;
    this.baseUrl = 'https://dreambuild-2024-app.web.app';
  }

  async init() {
    console.log('🚀 Starting Simple GitHub Test...');
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
        console.log('🔐 Auth Log:', msg.text());
      }
    });
  }

  async testGitHubAuth() {
    try {
      console.log('\n📱 Step 1: Navigate to home page');
      await this.page.goto(this.baseUrl, { waitUntil: 'networkidle2', timeout: 30000 });
      await new Promise(resolve => setTimeout(resolve, 3000));

      console.log('\n🔍 Step 2: Look for Sign In button');
      // Try multiple selectors for the sign in button
      const signInSelectors = [
        'button:contains("Sign In")',
        'a:contains("Sign In")',
        '[href*="login"]',
        'button[class*="sign"]',
        'a[class*="sign"]'
      ];
      
      let signInButton = null;
      for (const selector of signInSelectors) {
        try {
          signInButton = await this.page.$(selector);
          if (signInButton) {
            console.log(`✅ Found Sign In button with selector: ${selector}`);
            break;
          }
        } catch (e) {
          // Continue to next selector
        }
      }
      
      if (!signInButton) {
        // Take screenshot to see what's on the page
        await this.page.screenshot({ path: 'homepage-debug.png' });
        console.log('📸 Screenshot saved: homepage-debug.png');
        
        // Get all buttons and links
        const allButtons = await this.page.$$eval('button, a', elements => 
          elements.map(el => ({
            tag: el.tagName,
            text: el.textContent?.trim(),
            href: el.href,
            className: el.className
          }))
        );
        
        console.log('🔍 All buttons and links found:');
        allButtons.forEach((btn, i) => {
          if (btn.text && btn.text.length > 0) {
            console.log(`  ${i + 1}. <${btn.tag}> "${btn.text}" (class: ${btn.className})`);
          }
        });
        
        return { success: false, message: 'Sign In button not found' };
      }

      console.log('\n🔍 Step 3: Click Sign In button');
      await signInButton.click();
      await new Promise(resolve => setTimeout(resolve, 2000));

      console.log('\n🔍 Step 4: Look for GitHub button');
      const githubSelectors = [
        'button:contains("GitHub")',
        'button:contains("Continue with GitHub")',
        '[class*="github"]',
        'button[class*="github"]'
      ];
      
      let githubButton = null;
      for (const selector of githubSelectors) {
        try {
          githubButton = await this.page.$(selector);
          if (githubButton) {
            console.log(`✅ Found GitHub button with selector: ${selector}`);
            break;
          }
        } catch (e) {
          // Continue to next selector
        }
      }
      
      if (!githubButton) {
        // Take screenshot of login page
        await this.page.screenshot({ path: 'login-page-debug.png' });
        console.log('📸 Screenshot saved: login-page-debug.png');
        
        // Get all buttons on login page
        const loginButtons = await this.page.$$eval('button, a', elements => 
          elements.map(el => ({
            tag: el.tagName,
            text: el.textContent?.trim(),
            className: el.className
          }))
        );
        
        console.log('🔍 All buttons on login page:');
        loginButtons.forEach((btn, i) => {
          if (btn.text && btn.text.length > 0) {
            console.log(`  ${i + 1}. <${btn.tag}> "${btn.text}" (class: ${btn.className})`);
          }
        });
        
        return { success: false, message: 'GitHub button not found on login page' };
      }

      console.log('\n🔐 Step 5: Click GitHub button');
      await githubButton.click();
      await new Promise(resolve => setTimeout(resolve, 3000));

      // Check if popup opened
      const pages = await this.browser.pages();
      console.log(`📄 Total pages: ${pages.length}`);

      if (pages.length > 1) {
        console.log('✅ GitHub popup opened successfully!');
        
        // Switch to popup
        const popup = pages[pages.length - 1];
        await popup.bringToFront();
        
        // Wait for GitHub OAuth page
        await new Promise(resolve => setTimeout(resolve, 3000));
        
        // Take screenshot of popup
        await popup.screenshot({ path: 'github-oauth-popup.png' });
        console.log('📸 Screenshot saved: github-oauth-popup.png');
        
        // Check if we're on GitHub OAuth page
        const url = popup.url();
        console.log(`🔗 Popup URL: ${url}`);
        
        if (url.includes('github.com')) {
          console.log('✅ Successfully redirected to GitHub OAuth!');
          return { success: true, message: 'GitHub OAuth popup opened and redirected to GitHub login page' };
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

  async runTest() {
    try {
      await this.init();
      const result = await this.testGitHubAuth();
      
      console.log('\n📊 Test Results:');
      console.log('================');
      console.log(`GitHub Auth: ${result.success ? '✅ PASS' : '❌ FAIL'}`);
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
const tester = new SimpleGitHubTester();
tester.runTest().then(result => {
  console.log('\n🏁 Test completed!');
  process.exit(result.success ? 0 : 1);
}).catch(error => {
  console.error('💥 Test crashed:', error);
  process.exit(1);
});
