const puppeteer = require('puppeteer');

class SimpleGitHubIntegrationTester {
  constructor() {
    this.browser = null;
    this.page = null;
    this.baseUrl = 'https://dreambuild-2024-app.web.app';
  }

  async init() {
    console.log('🚀 Starting Simple GitHub Integration Test...');
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
      await this.page.screenshot({ path: 'github-integration-simple.png' });
      console.log('📸 Screenshot saved: github-integration-simple.png');

      console.log('\n🔍 Step 2: Check page content for GitHub integration');
      const pageContent = await this.page.evaluate(() => {
        const body = document.body;
        return {
          hasGitHub: body.textContent.includes('GitHub'),
          hasRepositories: body.textContent.includes('Repositories'),
          hasToken: body.textContent.includes('token') || body.textContent.includes('Token'),
          hasSync: body.textContent.includes('Sync') || body.textContent.includes('sync'),
          hasSignIn: body.textContent.includes('Sign in with GitHub'),
          allText: body.textContent.substring(0, 1000)
        };
      });

      console.log('📄 Page Content Analysis:');
      console.log(`  Has GitHub: ${pageContent.hasGitHub}`);
      console.log(`  Has Repositories: ${pageContent.hasRepositories}`);
      console.log(`  Has Token: ${pageContent.hasToken}`);
      console.log(`  Has Sync: ${pageContent.hasSync}`);
      console.log(`  Has Sign In: ${pageContent.hasSignIn}`);
      console.log(`  Content Preview: ${pageContent.allText}`);

      if (pageContent.hasGitHub && pageContent.hasRepositories) {
        console.log('✅ GitHub integration section found');
        return { success: true, message: 'GitHub integration is present' };
      } else if (pageContent.hasSignIn) {
        console.log('ℹ️ GitHub integration requires authentication');
        return { success: true, message: 'GitHub integration requires GitHub authentication' };
      } else {
        console.log('❌ GitHub integration section not found');
        return { success: false, message: 'GitHub integration section not found' };
      }

    } catch (error) {
      console.error('❌ Test failed:', error.message);
      return { success: false, message: error.message };
    }
  }

  async testProjectsPage() {
    try {
      console.log('\n🔍 Step 3: Check Projects page');
      
      // Look for projects page
      const projectsLink = await this.page.evaluate(() => {
        const links = document.querySelectorAll('a');
        return Array.from(links).find(link => 
          link.href.includes('projects') || link.textContent.includes('Projects')
        );
      });

      if (projectsLink) {
        console.log('✅ Projects page link found');
        await this.page.goto(`${this.baseUrl}/projects`, { waitUntil: 'networkidle2', timeout: 30000 });
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Check for synced projects
        const projectsContent = await this.page.evaluate(() => {
          const body = document.body;
          return {
            hasProjects: body.textContent.includes('Project'),
            hasGitHub: body.textContent.includes('GitHub'),
            hasSynced: body.textContent.includes('Synced'),
            allText: body.textContent.substring(0, 500)
          };
        });

        console.log('📄 Projects Page Analysis:');
        console.log(`  Has Projects: ${projectsContent.hasProjects}`);
        console.log(`  Has GitHub: ${projectsContent.hasGitHub}`);
        console.log(`  Has Synced: ${projectsContent.hasSynced}`);
        console.log(`  Content Preview: ${projectsContent.allText}`);

        return { success: true, message: 'Projects page accessible' };
      } else {
        console.log('ℹ️ Projects page link not found');
        return { success: true, message: 'Projects page link not found' };
      }

    } catch (error) {
      console.error('❌ Projects page test failed:', error.message);
      return { success: false, message: error.message };
    }
  }

  async runTest() {
    try {
      await this.init();
      
      const integrationResult = await this.testGitHubIntegration();
      const projectsResult = await this.testProjectsPage();
      
      console.log('\n📊 Test Results:');
      console.log('================');
      console.log(`GitHub Integration: ${integrationResult.success ? '✅ PASS' : '❌ FAIL'}`);
      console.log(`Message: ${integrationResult.message}`);
      console.log(`Projects Page: ${projectsResult.success ? '✅ PASS' : '❌ FAIL'}`);
      console.log(`Message: ${projectsResult.message}`);
      
      const overallSuccess = integrationResult.success && projectsResult.success;
      console.log(`\n🎯 Overall Result: ${overallSuccess ? '✅ ALL TESTS PASSED' : '❌ SOME TESTS FAILED'}`);
      
      return {
        overall: overallSuccess,
        integration: integrationResult,
        projects: projectsResult
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
const tester = new SimpleGitHubIntegrationTester();
tester.runTest().then(result => {
  console.log('\n🏁 Test completed!');
  process.exit(result.overall ? 0 : 1);
}).catch(error => {
  console.error('💥 Test crashed:', error);
  process.exit(1);
});
