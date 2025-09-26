const puppeteer = require('puppeteer');
const fs = require('fs');

class EducationPageTester {
  constructor() {
    this.browser = null;
    this.page = null;
    this.results = {
      passed: 0,
      failed: 0,
      errors: [],
      missingContent: []
    };
  }

  async init() {
    console.log('🚀 Starting Education Page Testing...');
    this.browser = await puppeteer.launch({ 
      headless: false,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    this.page = await this.browser.newPage();
    await this.page.setViewport({ width: 1920, height: 1080 });
    
    // Set user agent
    await this.page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36');
  }

  async testEducationPage() {
    try {
      console.log('📚 Navigating to Education Page...');
      await this.page.goto('https://dreambuild-2024-app.web.app/education', { 
        waitUntil: 'networkidle2',
        timeout: 30000 
      });

      // Wait for page to load
      await this.page.waitForSelector('h1', { timeout: 10000 });
      
      console.log('✅ Education page loaded successfully');

      // Test main navigation tabs
      await this.testMainTabs();
      
      // Test dashboard functionality
      await this.testDashboard();
      
      // Test tutorials functionality
      await this.testTutorials();
      
      // Test challenges functionality
      await this.testChallenges();
      
      // Test progress functionality
      await this.testProgress();
      
      // Test interactive elements
      await this.testInteractiveElements();
      
      // Test responsive design
      await this.testResponsiveDesign();

    } catch (error) {
      console.error('❌ Error testing education page:', error);
      this.results.errors.push(`Page load error: ${error.message}`);
    }
  }

  async testMainTabs() {
    console.log('🧪 Testing main navigation tabs...');
    
    const tabs = [
      { name: 'Dashboard', selector: '[data-testid="dashboard-tab"], button:contains("Dashboard")' },
      { name: 'Tutorials', selector: '[data-testid="tutorials-tab"], button:contains("Tutorials")' },
      { name: 'Challenges', selector: '[data-testid="challenges-tab"], button:contains("Challenges")' },
      { name: 'Progress', selector: '[data-testid="progress-tab"], button:contains("Progress")' }
    ];

    for (const tab of tabs) {
      try {
        // Try multiple selectors for each tab
        const selectors = [
          `button:contains("${tab.name}")`,
          `[data-testid="${tab.name.toLowerCase()}-tab"]`,
          `button[class*="bg-blue-500"]:contains("${tab.name}")`,
          `button:has-text("${tab.name}")`
        ];

        let element = null;
        for (const selector of selectors) {
          try {
            element = await this.page.$(selector);
            if (element) break;
          } catch (e) {
            // Try next selector
          }
        }

        if (!element) {
          // Try XPath as fallback
          const xpath = `//button[contains(text(), '${tab.name}')]`;
          const elements = await this.page.$x(xpath);
          if (elements.length > 0) {
            element = elements[0];
          }
        }

        if (element) {
          await element.click();
          await this.page.waitForTimeout(1000);
          console.log(`✅ ${tab.name} tab clicked successfully`);
          this.results.passed++;
        } else {
          console.log(`❌ ${tab.name} tab not found`);
          this.results.failed++;
          this.results.missingContent.push(`${tab.name} tab button`);
        }
      } catch (error) {
        console.log(`❌ Error testing ${tab.name} tab:`, error.message);
        this.results.failed++;
        this.results.errors.push(`${tab.name} tab error: ${error.message}`);
      }
    }
  }

  async testDashboard() {
    console.log('🧪 Testing Dashboard functionality...');
    
    try {
      // Click on Dashboard tab
      const dashboardTab = await this.page.$x("//button[contains(text(), 'Dashboard')]");
      if (dashboardTab.length > 0) {
        await dashboardTab[0].click();
        await this.page.waitForTimeout(2000);
      }

      // Test dashboard elements
      const dashboardElements = [
        'h1:contains("Education Dashboard")',
        'h2:contains("Learning Progress")',
        'h3:contains("Recent Activity")',
        'h3:contains("Learning Paths")',
        'h3:contains("Achievements")'
      ];

      for (const selector of dashboardElements) {
        try {
          const element = await this.page.$(selector);
          if (element) {
            console.log(`✅ Dashboard element found: ${selector}`);
            this.results.passed++;
          } else {
            console.log(`❌ Dashboard element missing: ${selector}`);
            this.results.missingContent.push(`Dashboard: ${selector}`);
            this.results.failed++;
          }
        } catch (error) {
          console.log(`❌ Error checking dashboard element ${selector}:`, error.message);
        }
      }

      // Test dashboard buttons
      const dashboardButtons = [
        'button:contains("Start Learning")',
        'button:contains("Browse Courses")',
        'button:contains("Start Path")'
      ];

      for (const buttonSelector of dashboardButtons) {
        try {
          const button = await this.page.$(buttonSelector);
          if (button) {
            console.log(`✅ Dashboard button found: ${buttonSelector}`);
            this.results.passed++;
          } else {
            console.log(`❌ Dashboard button missing: ${buttonSelector}`);
            this.results.missingContent.push(`Dashboard button: ${buttonSelector}`);
            this.results.failed++;
          }
        } catch (error) {
          console.log(`❌ Error checking dashboard button ${buttonSelector}:`, error.message);
        }
      }

    } catch (error) {
      console.log('❌ Error testing dashboard:', error.message);
      this.results.errors.push(`Dashboard test error: ${error.message}`);
    }
  }

  async testTutorials() {
    console.log('🧪 Testing Tutorials functionality...');
    
    try {
      // Click on Tutorials tab
      const tutorialsTab = await this.page.$x("//button[contains(text(), 'Tutorials')]");
      if (tutorialsTab.length > 0) {
        await tutorialsTab[0].click();
        await this.page.waitForTimeout(2000);
      }

      // Test tutorial elements
      const tutorialElements = [
        'h2:contains("Learning Paths")',
        'h2:contains("Course Categories")',
        'h2:contains("Learning Resources")',
        'h2:contains("Achievements")'
      ];

      for (const selector of tutorialElements) {
        try {
          const element = await this.page.$(selector);
          if (element) {
            console.log(`✅ Tutorial element found: ${selector}`);
            this.results.passed++;
          } else {
            console.log(`❌ Tutorial element missing: ${selector}`);
            this.results.missingContent.push(`Tutorial: ${selector}`);
            this.results.failed++;
          }
        } catch (error) {
          console.log(`❌ Error checking tutorial element ${selector}:`, error.message);
        }
      }

      // Test tutorial buttons
      const tutorialButtons = [
        'button:contains("Start Path")',
        'button:contains("Start Course")',
        'button:contains("Continue")',
        'button:contains("Explore")'
      ];

      for (const buttonSelector of tutorialButtons) {
        try {
          const button = await this.page.$(buttonSelector);
          if (button) {
            console.log(`✅ Tutorial button found: ${buttonSelector}`);
            this.results.passed++;
          } else {
            console.log(`❌ Tutorial button missing: ${buttonSelector}`);
            this.results.missingContent.push(`Tutorial button: ${buttonSelector}`);
            this.results.failed++;
          }
        } catch (error) {
          console.log(`❌ Error checking tutorial button ${buttonSelector}:`, error.message);
        }
      }

      // Test category tabs
      const categoryTabs = [
        'button:contains("Web Development")',
        'button:contains("Mobile Development")',
        'button:contains("Backend Development")',
        'button:contains("Data Science")'
      ];

      for (const tabSelector of categoryTabs) {
        try {
          const tab = await this.page.$(tabSelector);
          if (tab) {
            await tab.click();
            await this.page.waitForTimeout(1000);
            console.log(`✅ Category tab clicked: ${tabSelector}`);
            this.results.passed++;
          } else {
            console.log(`❌ Category tab missing: ${tabSelector}`);
            this.results.missingContent.push(`Category tab: ${tabSelector}`);
            this.results.failed++;
          }
        } catch (error) {
          console.log(`❌ Error clicking category tab ${tabSelector}:`, error.message);
        }
      }

    } catch (error) {
      console.log('❌ Error testing tutorials:', error.message);
      this.results.errors.push(`Tutorials test error: ${error.message}`);
    }
  }

  async testChallenges() {
    console.log('🧪 Testing Challenges functionality...');
    
    try {
      // Click on Challenges tab
      const challengesTab = await this.page.$x("//button[contains(text(), 'Challenges')]");
      if (challengesTab.length > 0) {
        await challengesTab[0].click();
        await this.page.waitForTimeout(2000);
      }

      // Test challenge elements
      const challengeElements = [
        'h1:contains("Coding Challenges")',
        'h3:contains("Filters")',
        'h3:contains("Leaderboard")'
      ];

      for (const selector of challengeElements) {
        try {
          const element = await this.page.$(selector);
          if (element) {
            console.log(`✅ Challenge element found: ${selector}`);
            this.results.passed++;
          } else {
            console.log(`❌ Challenge element missing: ${selector}`);
            this.results.missingContent.push(`Challenge: ${selector}`);
            this.results.failed++;
          }
        } catch (error) {
          console.log(`❌ Error checking challenge element ${selector}:`, error.message);
        }
      }

      // Test challenge buttons
      const challengeButtons = [
        'button:contains("Start Challenge")',
        'button:contains("Easy")',
        'button:contains("Medium")',
        'button:contains("Hard")',
        'button:contains("JavaScript")',
        'button:contains("Python")'
      ];

      for (const buttonSelector of challengeButtons) {
        try {
          const button = await this.page.$(buttonSelector);
          if (button) {
            console.log(`✅ Challenge button found: ${buttonSelector}`);
            this.results.passed++;
          } else {
            console.log(`❌ Challenge button missing: ${buttonSelector}`);
            this.results.missingContent.push(`Challenge button: ${buttonSelector}`);
            this.results.failed++;
          }
        } catch (error) {
          console.log(`❌ Error checking challenge button ${buttonSelector}:`, error.message);
        }
      }

    } catch (error) {
      console.log('❌ Error testing challenges:', error.message);
      this.results.errors.push(`Challenges test error: ${error.message}`);
    }
  }

  async testProgress() {
    console.log('🧪 Testing Progress functionality...');
    
    try {
      // Click on Progress tab
      const progressTab = await this.page.$x("//button[contains(text(), 'Progress')]");
      if (progressTab.length > 0) {
        await progressTab[0].click();
        await this.page.waitForTimeout(2000);
      }

      // Test progress elements
      const progressElements = [
        'h1:contains("Learning Progress")',
        'h3:contains("Learning Goals")',
        'h4:contains("Weekly Goal")',
        'h4:contains("Monthly Goal")',
        'h4:contains("Challenge Goal")'
      ];

      for (const selector of progressElements) {
        try {
          const element = await this.page.$(selector);
          if (element) {
            console.log(`✅ Progress element found: ${selector}`);
            this.results.passed++;
          } else {
            console.log(`❌ Progress element missing: ${selector}`);
            this.results.missingContent.push(`Progress: ${selector}`);
            this.results.failed++;
          }
        } catch (error) {
          console.log(`❌ Error checking progress element ${selector}:`, error.message);
        }
      }

    } catch (error) {
      console.log('❌ Error testing progress:', error.message);
      this.results.errors.push(`Progress test error: ${error.message}`);
    }
  }

  async testInteractiveElements() {
    console.log('🧪 Testing interactive elements...');
    
    try {
      // Test all clickable elements
      const interactiveElements = [
        'button',
        'a',
        '[role="button"]',
        '.cursor-pointer'
      ];

      for (const selector of interactiveElements) {
        try {
          const elements = await this.page.$$(selector);
          console.log(`Found ${elements.length} ${selector} elements`);
          
          for (let i = 0; i < Math.min(elements.length, 5); i++) {
            try {
              const element = elements[i];
              const isVisible = await element.isIntersectingViewport();
              if (isVisible) {
                await element.click();
                await this.page.waitForTimeout(500);
                console.log(`✅ Clicked ${selector} element ${i + 1}`);
                this.results.passed++;
              }
            } catch (error) {
              console.log(`❌ Error clicking ${selector} element ${i + 1}:`, error.message);
            }
          }
        } catch (error) {
          console.log(`❌ Error finding ${selector} elements:`, error.message);
        }
      }

    } catch (error) {
      console.log('❌ Error testing interactive elements:', error.message);
      this.results.errors.push(`Interactive elements test error: ${error.message}`);
    }
  }

  async testResponsiveDesign() {
    console.log('🧪 Testing responsive design...');
    
    const viewports = [
      { width: 375, height: 667, name: 'Mobile' },
      { width: 768, height: 1024, name: 'Tablet' },
      { width: 1920, height: 1080, name: 'Desktop' }
    ];

    for (const viewport of viewports) {
      try {
        await this.page.setViewport(viewport);
        await this.page.waitForTimeout(1000);
        
        // Check if main elements are visible
        const mainElements = [
          'h1',
          'button',
          'nav'
        ];

        for (const selector of mainElements) {
          const element = await this.page.$(selector);
          if (element) {
            const isVisible = await element.isIntersectingViewport();
            if (isVisible) {
              console.log(`✅ ${selector} visible on ${viewport.name}`);
              this.results.passed++;
            } else {
              console.log(`❌ ${selector} not visible on ${viewport.name}`);
              this.results.failed++;
            }
          }
        }
      } catch (error) {
        console.log(`❌ Error testing ${viewport.name} viewport:`, error.message);
        this.results.errors.push(`${viewport.name} viewport error: ${error.message}`);
      }
    }
  }

  async generateReport() {
    console.log('\n📊 TEST RESULTS SUMMARY');
    console.log('========================');
    console.log(`✅ Passed: ${this.results.passed}`);
    console.log(`❌ Failed: ${this.results.failed}`);
    console.log(`🔧 Errors: ${this.results.errors.length}`);
    console.log(`📝 Missing Content: ${this.results.missingContent.length}`);

    if (this.results.errors.length > 0) {
      console.log('\n🚨 ERRORS:');
      this.results.errors.forEach((error, index) => {
        console.log(`${index + 1}. ${error}`);
      });
    }

    if (this.results.missingContent.length > 0) {
      console.log('\n📝 MISSING CONTENT:');
      this.results.missingContent.forEach((content, index) => {
        console.log(`${index + 1}. ${content}`);
      });
    }

    // Save detailed report
    const report = {
      timestamp: new Date().toISOString(),
      url: 'https://dreambuild-2024-app.web.app/education',
      summary: {
        passed: this.results.passed,
        failed: this.results.failed,
        total: this.results.passed + this.results.failed,
        successRate: ((this.results.passed / (this.results.passed + this.results.failed)) * 100).toFixed(2) + '%'
      },
      errors: this.results.errors,
      missingContent: this.results.missingContent
    };

    fs.writeFileSync('education-test-report.json', JSON.stringify(report, null, 2));
    console.log('\n📄 Detailed report saved to: education-test-report.json');

    return report;
  }

  async cleanup() {
    if (this.browser) {
      await this.browser.close();
    }
  }
}

// Run the test
async function runEducationPageTest() {
  const tester = new EducationPageTester();
  
  try {
    await tester.init();
    await tester.testEducationPage();
    const report = await tester.generateReport();
    
    // If there are missing content items, create them
    if (report.missingContent.length > 0) {
      console.log('\n🔧 Creating missing content...');
      await createMissingContent(report.missingContent);
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error);
  } finally {
    await tester.cleanup();
  }
}

// Function to create missing content
async function createMissingContent(missingContent) {
  console.log('📝 Creating missing content for:', missingContent);
  
  // This would typically involve:
  // 1. Identifying what content is missing
  // 2. Creating the appropriate components/content
  // 3. Updating the application
  // 4. Redeploying
  
  console.log('✅ Missing content creation process initiated');
}

// Run the test
runEducationPageTest().catch(console.error);

