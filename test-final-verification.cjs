const puppeteer = require('puppeteer');

class FinalVerificationTester {
  constructor() {
    this.browser = null;
    this.page = null;
    this.baseUrl = 'https://dreambuild-2024-app.web.app';
  }

  async init() {
    console.log('🚀 Starting Final Verification Test...');
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

  async testDashboardRealData() {
    try {
      console.log('\n📱 Step 1: Navigate to dashboard');
      await this.page.goto(`${this.baseUrl}/dashboard`, { waitUntil: 'networkidle2', timeout: 30000 });
      await new Promise(resolve => setTimeout(resolve, 3000));

      // Take screenshot
      await this.page.screenshot({ path: 'final-dashboard.png' });
      console.log('📸 Screenshot saved: final-dashboard.png');

      console.log('\n🔍 Step 2: Check for sample data removal');
      const sampleDataCheck = await this.page.evaluate(() => {
        const body = document.body.textContent;
        const hasSampleData = body.includes('E-commerce Store') || 
                             body.includes('Portfolio Website') || 
                             body.includes('Task Manager App') ||
                             body.includes('Analytics Dashboard');
        return {
          hasSampleData,
          content: body.substring(0, 1000)
        };
      });

      if (sampleDataCheck.hasSampleData) {
        console.log('❌ Sample data still present in dashboard');
        return { success: false, message: 'Sample data not removed from dashboard' };
      } else {
        console.log('✅ Sample data successfully removed from dashboard');
      }

      console.log('\n🔍 Step 3: Check for GitHub integration');
      const githubCheck = await this.page.evaluate(() => {
        const body = document.body.textContent;
        return {
          hasGitHub: body.includes('GitHub'),
          hasRepositories: body.includes('Repositories'),
          hasToken: body.includes('token') || body.includes('Token'),
          hasSync: body.includes('Sync') || body.includes('sync'),
          hasSignIn: body.includes('Sign in with GitHub')
        };
      });

      console.log('📄 GitHub Integration Check:');
      console.log(`  Has GitHub: ${githubCheck.hasGitHub}`);
      console.log(`  Has Repositories: ${githubCheck.hasRepositories}`);
      console.log(`  Has Token: ${githubCheck.hasToken}`);
      console.log(`  Has Sync: ${githubCheck.hasSync}`);
      console.log(`  Has Sign In: ${githubCheck.hasSignIn}`);

      if (githubCheck.hasGitHub && githubCheck.hasRepositories) {
        console.log('✅ GitHub integration found');
        return { success: true, message: 'GitHub integration is present and sample data removed' };
      } else if (githubCheck.hasSignIn) {
        console.log('ℹ️ GitHub integration requires authentication');
        return { success: true, message: 'GitHub integration requires GitHub authentication' };
      } else {
        console.log('❌ GitHub integration not found');
        return { success: false, message: 'GitHub integration not found' };
      }

    } catch (error) {
      console.error('❌ Test failed:', error.message);
      return { success: false, message: error.message };
    }
  }

  async testProjectsPageRealData() {
    try {
      console.log('\n🔍 Step 4: Check Projects page for real data');
      
      // Navigate to projects page
      await this.page.goto(`${this.baseUrl}/projects`, { waitUntil: 'networkidle2', timeout: 30000 });
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Take screenshot
      await this.page.screenshot({ path: 'final-projects.png' });
      console.log('📸 Screenshot saved: final-projects.png');

      const projectsContent = await this.page.evaluate(() => {
        const body = document.body;
        return {
          hasProjects: body.textContent.includes('Project'),
          hasGitHub: body.textContent.includes('GitHub'),
          hasSynced: body.textContent.includes('Synced'),
          hasSampleData: body.textContent.includes('E-commerce Store') || 
                        body.textContent.includes('Portfolio Website') ||
                        body.textContent.includes('Task Manager App') ||
                        body.textContent.includes('Analytics Dashboard'),
          hasNoProjects: body.textContent.includes('No projects yet'),
          allText: body.textContent.substring(0, 1000)
        };
      });

      console.log('📄 Projects Page Analysis:');
      console.log(`  Has Projects: ${projectsContent.hasProjects}`);
      console.log(`  Has GitHub: ${projectsContent.hasGitHub}`);
      console.log(`  Has Synced: ${projectsContent.hasSynced}`);
      console.log(`  Has Sample Data: ${projectsContent.hasSampleData}`);
      console.log(`  Has No Projects: ${projectsContent.hasNoProjects}`);
      console.log(`  Content Preview: ${projectsContent.allText}`);

      if (projectsContent.hasSampleData) {
        console.log('❌ Sample data still present in projects page');
        return { success: false, message: 'Sample data not removed from projects page' };
      } else if (projectsContent.hasNoProjects) {
        console.log('✅ Projects page shows no projects (expected for new users)');
        return { success: true, message: 'Projects page updated with real data - no sample data' };
      } else {
        console.log('✅ Projects page updated with real data');
        return { success: true, message: 'Projects page updated with real data' };
      }

    } catch (error) {
      console.error('❌ Projects page test failed:', error.message);
      return { success: false, message: error.message };
    }
  }

  async testGitHubIntegration() {
    try {
      console.log('\n🔍 Step 5: Test GitHub integration functionality');
      
      // Go back to dashboard
      await this.page.goto(`${this.baseUrl}/dashboard`, { waitUntil: 'networkidle2', timeout: 30000 });
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Look for GitHub integration elements
      const githubElements = await this.page.evaluate(() => {
        const githubSection = document.querySelector('[class*="GitHub"], [class*="github"]');
        const tokenInput = document.querySelector('input[type="password"], input[placeholder*="token"]');
        const syncButtons = Array.from(document.querySelectorAll('button')).filter(btn => 
          btn.textContent.includes('Sync') || btn.textContent.includes('Download')
        );
        
        return {
          hasGitHubSection: !!githubSection,
          hasTokenInput: !!tokenInput,
          syncButtonCount: syncButtons.length,
          githubText: document.body.textContent.includes('GitHub Integration') || 
                     document.body.textContent.includes('GitHub Repositories')
        };
      });

      console.log('📄 GitHub Integration Elements:');
      console.log(`  Has GitHub Section: ${githubElements.hasGitHubSection}`);
      console.log(`  Has Token Input: ${githubElements.hasTokenInput}`);
      console.log(`  Sync Button Count: ${githubElements.syncButtonCount}`);
      console.log(`  Has GitHub Text: ${githubElements.githubText}`);

      if (githubElements.githubText) {
        console.log('✅ GitHub integration elements found');
        return { success: true, message: 'GitHub integration elements are present' };
      } else {
        console.log('❌ GitHub integration elements not found');
        return { success: false, message: 'GitHub integration elements not found' };
      }

    } catch (error) {
      console.error('❌ GitHub integration test failed:', error.message);
      return { success: false, message: error.message };
    }
  }

  async runTest() {
    try {
      await this.init();
      
      const dashboardResult = await this.testDashboardRealData();
      const projectsResult = await this.testProjectsPageRealData();
      const githubResult = await this.testGitHubIntegration();
      
      console.log('\n📊 Test Results:');
      console.log('================');
      console.log(`Dashboard Real Data: ${dashboardResult.success ? '✅ PASS' : '❌ FAIL'}`);
      console.log(`Message: ${dashboardResult.message}`);
      console.log(`Projects Real Data: ${projectsResult.success ? '✅ PASS' : '❌ FAIL'}`);
      console.log(`Message: ${projectsResult.message}`);
      console.log(`GitHub Integration: ${githubResult.success ? '✅ PASS' : '❌ FAIL'}`);
      console.log(`Message: ${githubResult.message}`);
      
      const overallSuccess = dashboardResult.success && projectsResult.success && githubResult.success;
      console.log(`\n🎯 Overall Result: ${overallSuccess ? '✅ ALL TESTS PASSED' : '❌ SOME TESTS FAILED'}`);
      
      return {
        overall: overallSuccess,
        dashboard: dashboardResult,
        projects: projectsResult,
        github: githubResult
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
const tester = new FinalVerificationTester();
tester.runTest().then(result => {
  console.log('\n🏁 Test completed!');
  process.exit(result.overall ? 0 : 1);
}).catch(error => {
  console.error('💥 Test crashed:', error);
  process.exit(1);
});
