const puppeteer = require('puppeteer');

class EmptyStateTester {
  constructor() {
    this.browser = null;
    this.page = null;
    this.baseUrl = 'https://dreambuild-2024-app.web.app';
  }

  async init() {
    console.log('🚀 Starting Empty State Test...');
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
      }
    });
  }

  async testEmptyState() {
    try {
      console.log('\n📱 Step 1: Navigate to dashboard');
      await this.page.goto(`${this.baseUrl}/dashboard`, { waitUntil: 'networkidle2', timeout: 30000 });
      await new Promise(resolve => setTimeout(resolve, 3000));

      // Take screenshot
      await this.page.screenshot({ path: 'empty-state-dashboard.png' });
      console.log('📸 Screenshot saved: empty-state-dashboard.png');

      console.log('\n🔍 Step 2: Check for improved empty state');
      const emptyStateCheck = await this.page.evaluate(() => {
        const body = document.body.textContent;
        return {
          hasTotalProjects: body.includes('Total Projects'),
          hasZeroProjects: body.includes('0') && body.includes('Total Projects'),
          hasCreateProject: body.includes('Create Project') || body.includes('Create your first project'),
          hasNoActivity: body.includes('No activity yet'),
          hasNoProjects: body.includes('No projects yet'),
          hasHelpfulDescriptions: body.includes('Create your first project') || body.includes('Start creating projects'),
          allText: body.substring(0, 2000)
        };
      });

      console.log('📄 Empty State Analysis:');
      console.log(`  Has Total Projects: ${emptyStateCheck.hasTotalProjects}`);
      console.log(`  Shows Zero Projects: ${emptyStateCheck.hasZeroProjects}`);
      console.log(`  Has Create Project: ${emptyStateCheck.hasCreateProject}`);
      console.log(`  Has No Activity: ${emptyStateCheck.hasNoActivity}`);
      console.log(`  Has No Projects: ${emptyStateCheck.hasNoProjects}`);
      console.log(`  Has Helpful Descriptions: ${emptyStateCheck.hasHelpfulDescriptions}`);
      console.log(`  Content Preview: ${emptyStateCheck.allText}`);

      if (emptyStateCheck.hasZeroProjects && emptyStateCheck.hasCreateProject) {
        console.log('✅ Empty state properly shows 0 projects with create project option');
        return { success: true, message: 'Empty state properly implemented' };
      } else {
        console.log('❌ Empty state not properly implemented');
        return { success: false, message: 'Empty state needs improvement' };
      }

    } catch (error) {
      console.error('❌ Test failed:', error.message);
      return { success: false, message: error.message };
    }
  }

  async testProjectsPageEmptyState() {
    try {
      console.log('\n🔍 Step 3: Check Projects page empty state');
      
      // Navigate to projects page
      await this.page.goto(`${this.baseUrl}/projects`, { waitUntil: 'networkidle2', timeout: 30000 });
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Take screenshot
      await this.page.screenshot({ path: 'empty-state-projects.png' });
      console.log('📸 Screenshot saved: empty-state-projects.png');

      const projectsEmptyState = await this.page.evaluate(() => {
        const body = document.body.textContent;
        return {
          hasNoProjects: body.includes('No projects yet'),
          hasCreateProject: body.includes('Create Project'),
          hasGetStarted: body.includes('Create your first project to get started'),
          allText: body.substring(0, 1000)
        };
      });

      console.log('📄 Projects Empty State Analysis:');
      console.log(`  Has No Projects: ${projectsEmptyState.hasNoProjects}`);
      console.log(`  Has Create Project: ${projectsEmptyState.hasCreateProject}`);
      console.log(`  Has Get Started: ${projectsEmptyState.hasGetStarted}`);
      console.log(`  Content Preview: ${projectsEmptyState.allText}`);

      if (projectsEmptyState.hasNoProjects && projectsEmptyState.hasCreateProject) {
        console.log('✅ Projects page empty state properly implemented');
        return { success: true, message: 'Projects page empty state is good' };
      } else {
        console.log('❌ Projects page empty state needs improvement');
        return { success: false, message: 'Projects page empty state needs work' };
      }

    } catch (error) {
      console.error('❌ Projects page test failed:', error.message);
      return { success: false, message: error.message };
    }
  }

  async runTest() {
    try {
      await this.init();
      
      const dashboardResult = await this.testEmptyState();
      const projectsResult = await this.testProjectsPageEmptyState();
      
      console.log('\n📊 Test Results:');
      console.log('================');
      console.log(`Dashboard Empty State: ${dashboardResult.success ? '✅ PASS' : '❌ FAIL'}`);
      console.log(`Message: ${dashboardResult.message}`);
      console.log(`Projects Empty State: ${projectsResult.success ? '✅ PASS' : '❌ FAIL'}`);
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
const tester = new EmptyStateTester();
tester.runTest().then(result => {
  console.log('\n🏁 Test completed!');
  process.exit(result.overall ? 0 : 1);
}).catch(error => {
  console.error('💥 Test crashed:', error);
  process.exit(1);
});
