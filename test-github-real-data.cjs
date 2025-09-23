const puppeteer = require('puppeteer');

class GitHubRealDataTester {
  constructor() {
    this.browser = null;
    this.page = null;
    this.baseUrl = 'https://dreambuild-2024-app.web.app';
  }

  async init() {
    console.log('🚀 Starting GitHub Real Data Integration Test...');
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

  async testDashboardWithRealData() {
    try {
      console.log('\n📱 Step 1: Navigate to dashboard');
      await this.page.goto(`${this.baseUrl}/dashboard`, { waitUntil: 'networkidle2', timeout: 30000 });
      await new Promise(resolve => setTimeout(resolve, 3000));

      // Take screenshot
      await this.page.screenshot({ path: 'dashboard-real-data.png' });
      console.log('📸 Screenshot saved: dashboard-real-data.png');

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
        console.log('📄 Content:', sampleDataCheck.content);
        return { success: false, message: 'Sample data not removed from dashboard' };
      } else {
        console.log('✅ Sample data successfully removed from dashboard');
      }

      console.log('\n🔍 Step 3: Check for GitHub integration');
      const githubIntegration = await this.page.evaluate(() => {
        const body = document.body.textContent;
        return {
          hasGitHub: body.includes('GitHub'),
          hasRepositories: body.includes('Repositories'),
          hasToken: body.includes('token') || body.includes('Token'),
          hasSync: body.includes('Sync') || body.includes('sync'),
          hasSignIn: body.includes('Sign in with GitHub'),
          allText: body.textContent.substring(0, 2000)
        };
      });

      console.log('📄 GitHub Integration Analysis:');
      console.log(`  Has GitHub: ${githubIntegration.hasGitHub}`);
      console.log(`  Has Repositories: ${githubIntegration.hasRepositories}`);
      console.log(`  Has Token: ${githubIntegration.hasToken}`);
      console.log(`  Has Sync: ${githubIntegration.hasSync}`);
      console.log(`  Has Sign In: ${githubIntegration.hasSignIn}`);

      if (githubIntegration.hasGitHub && githubIntegration.hasRepositories) {
        console.log('✅ GitHub integration found');
        return { success: true, message: 'GitHub integration is present and sample data removed' };
      } else {
        console.log('❌ GitHub integration not found');
        return { success: false, message: 'GitHub integration not found' };
      }

    } catch (error) {
      console.error('❌ Test failed:', error.message);
      return { success: false, message: error.message };
    }
  }

  async testProjectsPage() {
    try {
      console.log('\n🔍 Step 4: Check Projects page for real data');
      
      // Navigate to projects page
      await this.page.goto(`${this.baseUrl}/projects`, { waitUntil: 'networkidle2', timeout: 30000 });
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Take screenshot
      await this.page.screenshot({ path: 'projects-real-data.png' });
      console.log('📸 Screenshot saved: projects-real-data.png');

      const projectsContent = await this.page.evaluate(() => {
        const body = document.body;
        return {
          hasProjects: body.textContent.includes('Project'),
          hasGitHub: body.textContent.includes('GitHub'),
          hasSynced: body.textContent.includes('Synced'),
          hasSampleData: body.textContent.includes('E-commerce Store') || 
                        body.textContent.includes('Portfolio Website'),
          allText: body.textContent.substring(0, 1500)
        };
      });

      console.log('📄 Projects Page Analysis:');
      console.log(`  Has Projects: ${projectsContent.hasProjects}`);
      console.log(`  Has GitHub: ${projectsContent.hasGitHub}`);
      console.log(`  Has Synced: ${projectsContent.hasSynced}`);
      console.log(`  Has Sample Data: ${projectsContent.hasSampleData}`);
      console.log(`  Content Preview: ${projectsContent.allText}`);

      if (projectsContent.hasSampleData) {
        console.log('❌ Sample data still present in projects page');
        return { success: false, message: 'Sample data not removed from projects page' };
      } else {
        console.log('✅ Sample data removed from projects page');
        return { success: true, message: 'Projects page updated with real data' };
      }

    } catch (error) {
      console.error('❌ Projects page test failed:', error.message);
      return { success: false, message: error.message };
    }
  }

  async runTest() {
    try {
      await this.init();
      
      const dashboardResult = await this.testDashboardWithRealData();
      const projectsResult = await this.testProjectsPage();
      
      console.log('\n📊 Test Results:');
      console.log('================');
      console.log(`Dashboard Real Data: ${dashboardResult.success ? '✅ PASS' : '❌ FAIL'}`);
      console.log(`Message: ${dashboardResult.message}`);
      console.log(`Projects Real Data: ${projectsResult.success ? '✅ PASS' : '❌ FAIL'}`);
      console.log(`Message: ${projectsResult.message}`);
      
      const overallSuccess = dashboardResult.success && projectsResult.success;
      console.log(`\n🎯 Overall Result: ${overallSuccess ? '✅ ALL TESTS PASSED' : '❌ SOME TESTS FAILED'}`);
      
      return {
        overall: overallSuccess,
        dashboard: dashboardResult,
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
const tester = new GitHubRealDataTester();
tester.runTest().then(result => {
  console.log('\n🏁 Test completed!');
  process.exit(result.overall ? 0 : 1);
}).catch(error => {
  console.error('💥 Test crashed:', error);
  process.exit(1);
});
