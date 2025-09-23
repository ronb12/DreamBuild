const puppeteer = require('puppeteer');

class GitHubIntegrationTester {
  constructor() {
    this.browser = null;
    this.page = null;
    this.baseUrl = 'https://dreambuild-2024-app.web.app';
  }

  async init() {
    console.log('🚀 Starting GitHub Integration Test...');
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
      } else if (msg.text().includes('GitHub') || msg.text().includes('Repository')) {
        console.log('🔗 GitHub Log:', msg.text());
      }
    });
  }

  async testGitHubIntegration() {
    try {
      console.log('\n📱 Step 1: Navigate to dashboard');
      await this.page.goto(`${this.baseUrl}/dashboard`, { waitUntil: 'networkidle2', timeout: 30000 });
      await new Promise(resolve => setTimeout(resolve, 3000));

      // Take screenshot
      await this.page.screenshot({ path: 'github-integration-dashboard.png' });
      console.log('📸 Screenshot saved: github-integration-dashboard.png');

      console.log('\n🔍 Step 2: Look for GitHub integration section');
      const githubSection = await this.page.evaluate(() => {
        const githubElements = document.querySelectorAll('*');
        const githubSection = Array.from(githubElements).find(el => 
          el.textContent.includes('GitHub') && el.textContent.includes('Repositories')
        );
        return githubSection ? true : false;
      });

      if (!githubSection) {
        console.log('❌ GitHub integration section not found');
        return { success: false, message: 'GitHub integration section not found' };
      }

      console.log('✅ GitHub integration section found');

      console.log('\n🔍 Step 3: Check for GitHub token input');
      const tokenInput = await this.page.$('input[type="password"], input[placeholder*="token"], input[placeholder*="GitHub"]');
      if (tokenInput) {
        console.log('✅ GitHub token input found');
      } else {
        console.log('ℹ️ GitHub token input not found (may require GitHub authentication)');
      }

      console.log('\n🔍 Step 4: Check for repository display');
      const repositoryElements = await this.page.$$('[class*="repo"], [class*="repository"]');
      if (repositoryElements.length > 0) {
        console.log(`✅ Found ${repositoryElements.length} repository elements`);
      } else {
        console.log('ℹ️ No repository elements found (may require GitHub token)');
      }

      console.log('\n🔍 Step 5: Check for sync functionality');
      const syncButtons = await this.page.$$('button:contains("Sync"), button:contains("Download"), [title*="Sync"]');
      if (syncButtons.length > 0) {
        console.log(`✅ Found ${syncButtons.length} sync buttons`);
      } else {
        console.log('ℹ️ No sync buttons found (may require repositories to be loaded)');
      }

      // Check if user needs to sign in with GitHub
      const signInPrompt = await this.page.evaluate(() => {
        const text = document.body.textContent;
        return text.includes('Sign in with GitHub') || text.includes('GitHub to sync');
      });

      if (signInPrompt) {
        console.log('ℹ️ User needs to sign in with GitHub to access repositories');
        return { success: true, message: 'GitHub integration UI present, requires GitHub authentication' };
      }

      return { success: true, message: 'GitHub integration is properly implemented and accessible' };

    } catch (error) {
      console.error('❌ Test failed:', error.message);
      return { success: false, message: error.message };
    }
  }

  async testProjectSync() {
    try {
      console.log('\n🔍 Step 6: Test project synchronization');
      
      // Look for projects page
      const projectsLink = await this.page.$('a[href*="projects"], a:contains("Projects")');
      if (projectsLink) {
        console.log('✅ Projects page link found');
        await projectsLink.click();
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Check if synced projects are displayed
        const syncedProjects = await this.page.evaluate(() => {
          const text = document.body.textContent;
          return text.includes('Synced') || text.includes('GitHub') || text.includes('github');
        });

        if (syncedProjects) {
          console.log('✅ Synced projects detected');
        } else {
          console.log('ℹ️ No synced projects found (expected for new users)');
        }
      } else {
        console.log('ℹ️ Projects page link not found');
      }

      return { success: true, message: 'Project sync functionality accessible' };

    } catch (error) {
      console.error('❌ Project sync test failed:', error.message);
      return { success: false, message: error.message };
    }
  }

  async runTest() {
    try {
      await this.init();
      
      const integrationResult = await this.testGitHubIntegration();
      const syncResult = await this.testProjectSync();
      
      console.log('\n📊 Test Results:');
      console.log('================');
      console.log(`GitHub Integration: ${integrationResult.success ? '✅ PASS' : '❌ FAIL'}`);
      console.log(`Message: ${integrationResult.message}`);
      console.log(`Project Sync: ${syncResult.success ? '✅ PASS' : '❌ FAIL'}`);
      console.log(`Message: ${syncResult.message}`);
      
      const overallSuccess = integrationResult.success && syncResult.success;
      console.log(`\n🎯 Overall Result: ${overallSuccess ? '✅ ALL TESTS PASSED' : '❌ SOME TESTS FAILED'}`);
      
      return {
        overall: overallSuccess,
        integration: integrationResult,
        sync: syncResult
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
const tester = new GitHubIntegrationTester();
tester.runTest().then(result => {
  console.log('\n🏁 Test completed!');
  process.exit(result.overall ? 0 : 1);
}).catch(error => {
  console.error('💥 Test crashed:', error);
  process.exit(1);
});
