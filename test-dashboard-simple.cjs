const puppeteer = require('puppeteer');

class SimpleDashboardTester {
  constructor() {
    this.browser = null;
    this.page = null;
    this.baseUrl = 'https://dreambuild-2024-app.web.app';
  }

  async init() {
    console.log('🚀 Starting Simple Dashboard Test...');
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
      } else if (msg.text().includes('Dashboard') || msg.text().includes('GitHub')) {
        console.log('📊 Dashboard Log:', msg.text());
      }
    });
  }

  async testDashboard() {
    try {
      console.log('\n📱 Step 1: Navigate to dashboard directly');
      await this.page.goto(`${this.baseUrl}/dashboard`, { waitUntil: 'networkidle2', timeout: 30000 });
      await new Promise(resolve => setTimeout(resolve, 3000));

      // Take screenshot to see what's on the page
      await this.page.screenshot({ path: 'dashboard-direct.png' });
      console.log('📸 Screenshot saved: dashboard-direct.png');

      console.log('\n🔍 Step 2: Check page content');
      const pageContent = await this.page.evaluate(() => {
        const body = document.body;
        return {
          title: document.title,
          hasDashboard: body.textContent.includes('Dashboard'),
          hasGitHub: body.textContent.includes('GitHub'),
          hasSignIn: body.textContent.includes('Sign In'),
          hasLoading: body.textContent.includes('Loading'),
          allText: body.textContent.substring(0, 500)
        };
      });

      console.log('📄 Page Content Analysis:');
      console.log(`  Title: ${pageContent.title}`);
      console.log(`  Has Dashboard: ${pageContent.hasDashboard}`);
      console.log(`  Has GitHub: ${pageContent.hasGitHub}`);
      console.log(`  Has Sign In: ${pageContent.hasSignIn}`);
      console.log(`  Has Loading: ${pageContent.hasLoading}`);
      console.log(`  Content Preview: ${pageContent.allText}`);

      if (pageContent.hasDashboard) {
        console.log('✅ Dashboard content found');
        
        // Check for header positioning
        const headerCheck = await this.page.evaluate(() => {
          const headers = document.querySelectorAll('h1');
          const dashboardHeader = Array.from(headers).find(h => h.textContent.includes('Dashboard'));
          if (!dashboardHeader) return null;
          
          const rect = dashboardHeader.getBoundingClientRect();
          return {
            top: rect.top,
            left: rect.left,
            width: rect.width,
            height: rect.height,
            isVisible: rect.top > 0 && rect.left > 0
          };
        });

        if (headerCheck) {
          console.log('📊 Header Position:', headerCheck);
          if (headerCheck.top < 100) {
            console.log('❌ Header appears to be overlapping with navbar');
            return { success: false, message: 'Header overlap detected' };
          } else {
            console.log('✅ Header is properly positioned');
          }
        }

        // Check for GitHub section
        const githubCheck = await this.page.evaluate(() => {
          const githubElements = document.querySelectorAll('*');
          const githubSection = Array.from(githubElements).find(el => 
            el.textContent.includes('GitHub') && el.textContent.includes('Repositories')
          );
          return githubSection ? true : false;
        });

        if (githubCheck) {
          console.log('✅ GitHub repositories section found');
        } else {
          console.log('ℹ️ GitHub section not found (may require GitHub authentication)');
        }

        return { success: true, message: 'Dashboard loaded successfully' };
      } else if (pageContent.hasSignIn) {
        console.log('🔐 Dashboard requires authentication');
        return { success: true, message: 'Dashboard requires authentication (expected behavior)' };
      } else {
        console.log('❌ Dashboard content not found');
        return { success: false, message: 'Dashboard content not found' };
      }

    } catch (error) {
      console.error('❌ Test failed:', error.message);
      return { success: false, message: error.message };
    }
  }

  async runTest() {
    try {
      await this.init();
      const result = await this.testDashboard();
      
      console.log('\n📊 Test Results:');
      console.log('================');
      console.log(`Dashboard Test: ${result.success ? '✅ PASS' : '❌ FAIL'}`);
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
const tester = new SimpleDashboardTester();
tester.runTest().then(result => {
  console.log('\n🏁 Test completed!');
  process.exit(result.success ? 0 : 1);
}).catch(error => {
  console.error('💥 Test crashed:', error);
  process.exit(1);
});
