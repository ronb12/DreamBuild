const puppeteer = require('puppeteer');

class DashboardNavTester {
  constructor() {
    this.browser = null;
    this.page = null;
    this.baseUrl = 'https://dreambuild-2024-app.web.app';
  }

  async init() {
    console.log('🚀 Starting Dashboard Navigation Test...');
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

  async testDashboardNavigation() {
    try {
      console.log('\n📱 Step 1: Navigate to home page');
      await this.page.goto(this.baseUrl, { waitUntil: 'networkidle2', timeout: 30000 });
      await new Promise(resolve => setTimeout(resolve, 3000));

      console.log('\n🔍 Step 2: Look for Dashboard link in navigation');
      const dashboardSelectors = [
        'a[href="/dashboard"]',
        'a:contains("Dashboard")',
        '[href*="dashboard"]'
      ];
      
      let dashboardLink = null;
      for (const selector of dashboardSelectors) {
        try {
          dashboardLink = await this.page.$(selector);
          if (dashboardLink) {
            console.log(`✅ Found Dashboard link with selector: ${selector}`);
            break;
          }
        } catch (e) {
          // Continue to next selector
        }
      }
      
      if (!dashboardLink) {
        // Get all links to see what's available
        const allLinks = await this.page.$$eval('a', links => 
          links.map(link => ({
            href: link.href,
            text: link.textContent?.trim(),
            visible: link.offsetParent !== null
          })).filter(link => link.visible && link.text)
        );
        
        console.log('🔍 All visible links found:');
        allLinks.forEach((link, i) => {
          console.log(`  ${i + 1}. "${link.text}" -> ${link.href}`);
        });
        
        return { success: false, message: 'Dashboard link not found in navigation' };
      }

      console.log('\n📊 Step 3: Click Dashboard link');
      await dashboardLink.click();
      await new Promise(resolve => setTimeout(resolve, 3000));

      // Check current URL
      const currentUrl = this.page.url();
      console.log(`🔗 Current URL: ${currentUrl}`);

      // Take screenshot
      await this.page.screenshot({ path: 'dashboard-navigation.png' });
      console.log('📸 Screenshot saved: dashboard-navigation.png');

      console.log('\n🔍 Step 4: Check for header overlap');
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
      } else {
        console.log('❌ Dashboard header not found');
        return { success: false, message: 'Dashboard header not found' };
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

      return { success: true, message: 'Dashboard navigation successful with proper header positioning' };

    } catch (error) {
      console.error('❌ Test failed:', error.message);
      return { success: false, message: error.message };
    }
  }

  async runTest() {
    try {
      await this.init();
      const result = await this.testDashboardNavigation();
      
      console.log('\n📊 Test Results:');
      console.log('================');
      console.log(`Dashboard Navigation: ${result.success ? '✅ PASS' : '❌ FAIL'}`);
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
const tester = new DashboardNavTester();
tester.runTest().then(result => {
  console.log('\n🏁 Test completed!');
  process.exit(result.success ? 0 : 1);
}).catch(error => {
  console.error('💥 Test crashed:', error);
  process.exit(1);
});
