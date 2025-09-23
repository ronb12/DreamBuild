const puppeteer = require('puppeteer');

class NavbarHeightTester {
  constructor() {
    this.browser = null;
    this.page = null;
    this.baseUrl = 'https://dreambuild-2024-app.web.app';
  }

  async init() {
    console.log('🚀 Starting Navbar Height Test...');
    this.browser = await puppeteer.launch({
      headless: false,
      defaultViewport: { width: 1280, height: 720 },
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    this.page = await this.browser.newPage();
  }

  async testNavbarHeight() {
    try {
      console.log('\n📱 Step 1: Navigate to home page');
      await this.page.goto(this.baseUrl, { waitUntil: 'networkidle2', timeout: 30000 });
      await new Promise(resolve => setTimeout(resolve, 3000));

      console.log('\n🔍 Step 2: Measure navbar height');
      const navbarInfo = await this.page.evaluate(() => {
        const navbar = document.querySelector('nav, [class*="navbar"], [class*="header"]');
        if (!navbar) return null;
        
        const rect = navbar.getBoundingClientRect();
        const computedStyle = window.getComputedStyle(navbar);
        
        return {
          height: rect.height,
          top: rect.top,
          bottom: rect.bottom,
          paddingTop: computedStyle.paddingTop,
          paddingBottom: computedStyle.paddingBottom,
          marginTop: computedStyle.marginTop,
          marginBottom: computedStyle.marginBottom,
          className: navbar.className,
          tagName: navbar.tagName
        };
      });

      if (navbarInfo) {
        console.log('📊 Navbar Information:');
        console.log(`  Height: ${navbarInfo.height}px`);
        console.log(`  Top: ${navbarInfo.top}px`);
        console.log(`  Bottom: ${navbarInfo.bottom}px`);
        console.log(`  Padding Top: ${navbarInfo.paddingTop}`);
        console.log(`  Padding Bottom: ${navbarInfo.paddingBottom}`);
        console.log(`  Margin Top: ${navbarInfo.marginTop}`);
        console.log(`  Margin Bottom: ${navbarInfo.marginBottom}`);
        console.log(`  Class: ${navbarInfo.className}`);
        console.log(`  Tag: ${navbarInfo.tagName}`);
      } else {
        console.log('❌ Navbar not found');
      }

      console.log('\n📊 Step 3: Navigate to dashboard and check positioning');
      await this.page.goto(`${this.baseUrl}/dashboard`, { waitUntil: 'networkidle2', timeout: 30000 });
      await new Promise(resolve => setTimeout(resolve, 3000));

      const dashboardInfo = await this.page.evaluate(() => {
        const headers = document.querySelectorAll('h1');
        const dashboardHeader = Array.from(headers).find(h => h.textContent.includes('Dashboard'));
        if (!dashboardHeader) return null;
        
        const rect = dashboardHeader.getBoundingClientRect();
        const parent = dashboardHeader.closest('div');
        const parentRect = parent ? parent.getBoundingClientRect() : null;
        
        return {
          headerTop: rect.top,
          headerHeight: rect.height,
          parentTop: parentRect ? parentRect.top : null,
          parentPaddingTop: parent ? window.getComputedStyle(parent).paddingTop : null,
          parentClassName: parent ? parent.className : null
        };
      });

      if (dashboardInfo) {
        console.log('📊 Dashboard Header Information:');
        console.log(`  Header Top: ${dashboardInfo.headerTop}px`);
        console.log(`  Header Height: ${dashboardInfo.headerHeight}px`);
        console.log(`  Parent Top: ${dashboardInfo.parentTop}px`);
        console.log(`  Parent Padding Top: ${dashboardInfo.parentPaddingTop}`);
        console.log(`  Parent Class: ${dashboardInfo.parentClassName}`);
        
        const navbarHeight = navbarInfo ? navbarInfo.height : 64; // Default navbar height
        const expectedHeaderTop = navbarHeight + 20; // Navbar height + some padding
        
        console.log(`\n📏 Analysis:`);
        console.log(`  Navbar Height: ${navbarHeight}px`);
        console.log(`  Expected Header Top: ${expectedHeaderTop}px`);
        console.log(`  Actual Header Top: ${dashboardInfo.headerTop}px`);
        console.log(`  Difference: ${dashboardInfo.headerTop - expectedHeaderTop}px`);
        
        if (dashboardInfo.headerTop < navbarHeight + 10) {
          console.log('❌ Header is overlapping with navbar');
          return { success: false, message: 'Header overlap detected' };
        } else {
          console.log('✅ Header is properly positioned');
          return { success: true, message: 'Header positioning is correct' };
        }
      } else {
        console.log('❌ Dashboard header not found');
        return { success: false, message: 'Dashboard header not found' };
      }

    } catch (error) {
      console.error('❌ Test failed:', error.message);
      return { success: false, message: error.message };
    }
  }

  async runTest() {
    try {
      await this.init();
      const result = await this.testNavbarHeight();
      
      console.log('\n📊 Test Results:');
      console.log('================');
      console.log(`Navbar Height Test: ${result.success ? '✅ PASS' : '❌ FAIL'}`);
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
const tester = new NavbarHeightTester();
tester.runTest().then(result => {
  console.log('\n🏁 Test completed!');
  process.exit(result.success ? 0 : 1);
}).catch(error => {
  console.error('💥 Test crashed:', error);
  process.exit(1);
});
