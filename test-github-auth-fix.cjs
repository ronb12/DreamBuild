const PuppeteerTest = require('./puppeteer-test-base.cjs');

class GitHubAuthFixTest extends PuppeteerTest {
  constructor() {
    super();
  }

  async run() {
    console.log('🚀 Starting GitHub Auth Fix Test...');

    // Step 1: Navigate to login page
    await this.navigate('/login');
    await this.page.waitForSelector('h1'); // Wait for login header
    await this.page.screenshot({ path: 'github-auth-login.png' });
    console.log('📸 Screenshot saved: github-auth-login.png');

    // Step 2: Check for GitHub button
    console.log('\n🔍 Step 2: Check for GitHub button');
    const githubButton = await this.page.evaluate(() => {
      const buttons = document.querySelectorAll('button');
      return Array.from(buttons).find(btn => 
        btn.textContent.includes('GitHub') || 
        btn.textContent.includes('Continue with GitHub')
      );
    });

    if (githubButton) {
      this.logSuccess('GitHub button found');
      this.addTestResult('GitHub Button Present', true, 'GitHub button is visible');
    } else {
      this.logFailure('GitHub button not found');
      this.addTestResult('GitHub Button Present', false, 'GitHub button not found');
    }

    // Step 3: Click GitHub button and check for popup
    console.log('\n🔍 Step 3: Test GitHub button click');
    try {
      // Click the GitHub button
      await this.page.click('button:has-text("Continue with GitHub")');
      
      // Wait a moment for the popup to appear
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Check if popup opened (we can't interact with it in this test)
      const pages = await this.browser.pages();
      const popupOpened = pages.length > 1;
      
      if (popupOpened) {
        this.logSuccess('GitHub popup opened successfully');
        this.addTestResult('GitHub Popup', true, 'GitHub authentication popup opened');
        
        // Close the popup
        if (pages.length > 1) {
          await pages[1].close();
        }
      } else {
        this.logFailure('GitHub popup did not open');
        this.addTestResult('GitHub Popup', false, 'GitHub popup did not open');
      }
    } catch (error) {
      this.logFailure(`Error clicking GitHub button: ${error.message}`);
      this.addTestResult('GitHub Button Click', false, `Error: ${error.message}`);
    }

    // Step 4: Check for error messages
    console.log('\n🔍 Step 4: Check for error handling');
    await this.page.screenshot({ path: 'github-auth-after-click.png' });
    console.log('📸 Screenshot saved: github-auth-after-click.png');

    await this.summarizeResults();
  }
}

(async () => {
  const test = new GitHubAuthFixTest();
  await test.init();
  await test.run();
  await test.close();
})();
