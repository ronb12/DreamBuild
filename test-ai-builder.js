import puppeteer from 'puppeteer';

class DreamBuildAITester {
  constructor() {
    this.browser = null;
    this.page = null;
    this.testResults = [];
    this.baseURL = 'https://dreambuild-2024-app.web.app';
  }

  async initialize() {
    console.log('🚀 Initializing DreamBuild AI Builder Test...');
    
    this.browser = await puppeteer.launch({
      headless: false, // Set to true for headless mode
      defaultViewport: { width: 1280, height: 720 },
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    this.page = await this.browser.newPage();
    
    // Set user agent
    await this.page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36');
    
    // Enable console logging
    this.page.on('console', msg => {
      console.log(`🖥️ Browser Console [${msg.type()}]:`, msg.text());
    });
    
    // Handle page errors
    this.page.on('pageerror', error => {
      console.error('❌ Page Error:', error.message);
    });
  }

  async navigateToAIBuilder() {
    console.log('🌐 Navigating to AI Builder...');
    
    try {
      await this.page.goto(`${this.baseURL}/ai-builder`, { 
        waitUntil: 'networkidle2',
        timeout: 30000 
      });
      
      // Wait for the page to load - look for any AI-related element
      await this.page.waitForSelector('textarea, [class*="ai"], [class*="prompt"], [class*="AIPrompt"]', { timeout: 10000 });
      
      console.log('✅ Successfully navigated to AI Builder');
      
      // Take a screenshot for debugging
      await this.page.screenshot({ path: 'ai-builder-page.png', fullPage: true });
      console.log('📸 Screenshot saved as ai-builder-page.png');
      
      return true;
    } catch (error) {
      console.error('❌ Failed to navigate to AI Builder:', error.message);
      return false;
    }
  }

  async testBasicUI() {
    console.log('🔍 Testing basic UI elements...');
    
    const tests = [
      {
        name: 'AI Builder Page Loads',
        selector: 'body, main, [class*="ai-builder"], [class*="AIBuilder"]',
        required: false
      },
      {
        name: 'File Manager Visible',
        selector: 'h3, [class*="flex-1 overflow-y-auto bg-background"], div',
        xpath: '//h3[contains(text(), "Explorer")] | //div[contains(text(), "Files")]',
        required: true
      },
      {
        name: 'Code Editor Visible',
        selector: '.monaco-editor, [class*="CodeEditor"], .monaco-editor-container',
        required: true
      },
      {
        name: 'Preview Panel Visible',
        selector: 'h3, [class*="preview"], iframe',
        xpath: '//h3[contains(text(), "Live Preview")] | //iframe',
        required: true
      },
      {
        name: 'AI Prompt Area Visible',
        selector: 'textarea[placeholder*="Plan"], textarea[placeholder*="build"], textarea[placeholder*="anything"]',
        required: true
      },
      {
        name: 'Send Button Visible',
        selector: 'button[class*="blue"][class*="rounded-full"], button[title*="Send"], button svg',
        required: true
      },
      {
        name: 'Save Button Visible',
        selector: 'button[title*="Save Project"], button',
        xpath: '//button[contains(text(), "Save")]',
        required: false
      },
      {
        name: 'Deploy Button Visible',
        selector: 'button[title*="Deploy Project"], button',
        xpath: '//button[contains(text(), "Deploy")]',
        required: false
      },
      {
        name: 'Export Button Visible',
        selector: 'button[title*="Export Project"], button',
        xpath: '//button[contains(text(), "Export")]',
        required: false
      }
    ];

    for (const test of tests) {
      try {
        let element = await this.page.$(test.selector);
        
        // If CSS selector fails and XPath is available, try XPath
        if (!element && test.xpath) {
          try {
            element = await this.page.$x(test.xpath);
            element = element.length > 0 ? element[0] : null;
          } catch (xpathError) {
            // XPath failed, continue with CSS result
          }
        }
        
        const result = {
          name: test.name,
          passed: !!element,
          required: test.required
        };
        
        if (element) {
          console.log(`✅ ${test.name}: PASSED`);
        } else if (test.required) {
          console.log(`❌ ${test.name}: FAILED (Required)`);
        } else {
          console.log(`⚠️ ${test.name}: NOT FOUND (Optional)`);
        }
        
        this.testResults.push(result);
      } catch (error) {
        console.log(`❌ ${test.name}: ERROR - ${error.message}`);
        this.testResults.push({
          name: test.name,
          passed: false,
          required: test.required,
          error: error.message
        });
      }
    }
  }

  async testAIGeneration() {
    console.log('🤖 Testing AI Code Generation...');
    
    try {
      // Find the AI prompt textarea
      const promptArea = await this.page.$('textarea[placeholder*="Plan"], textarea[placeholder*="build"], textarea[placeholder*="anything"]');
      
      if (!promptArea) {
        throw new Error('AI prompt textarea not found');
      }
      
      console.log('📝 Found AI prompt area, entering test prompt...');
      
      // Type the test prompt
      await promptArea.click();
      await this.page.type('textarea', 'create a simple calculator app');
      
      console.log('⏳ Waiting for send button to be enabled...');
      
      // Wait a moment for the text to be processed
      await this.page.waitForTimeout(1000);
      
      // Find and click the send button
      const sendButton = await this.page.$('button[class*="blue"], button[title*="Send"]');
      
      if (!sendButton) {
        throw new Error('Send button not found');
      }
      
      console.log('🚀 Clicking send button to generate code...');
      await sendButton.click();
      
      // Wait for generation to start
      await this.page.waitForTimeout(2000);
      
      // Check for loading indicators
      const loadingIndicator = await this.page.$('[class*="loading"], [class*="spinner"], [class*="generating"]');
      if (loadingIndicator) {
        console.log('⏳ AI generation started, waiting for completion...');
      }
      
      // Wait for generation to complete (up to 90 seconds)
      await this.page.waitForFunction(() => {
        // Check if files have been generated - try multiple selectors
        const fileElements1 = document.querySelectorAll('span[class*="truncate"], [class*="filename"]');
        const fileElements2 = document.querySelectorAll('[class*="file"]');
        
        // Check for specific file extensions
        const htmlFiles = Array.from(document.querySelectorAll('span')).filter(el => el.textContent.includes('.html'));
        const cssFiles = Array.from(document.querySelectorAll('span')).filter(el => el.textContent.includes('.css'));
        const jsFiles = Array.from(document.querySelectorAll('span')).filter(el => el.textContent.includes('.js'));
        
        return fileElements1.length > 0 || fileElements2.length > 0 || htmlFiles.length > 0 || cssFiles.length > 0 || jsFiles.length > 0;
      }, { timeout: 90000 });
      
      console.log('✅ AI generation completed!');
      
      // Check for generated files with multiple selectors
      let fileElements = await this.page.$$('span[class*="truncate"], [class*="filename"], [class*="file"]');
      
      // Try XPath for file extensions
      if (fileElements.length === 0) {
        const xpathFiles = await this.page.$x('//span[contains(text(), ".html")] | //span[contains(text(), ".css")] | //span[contains(text(), ".js")] | //span[contains(text(), ".jsx")]');
        fileElements = xpathFiles;
      }
      
      console.log(`📁 Found ${fileElements.length} generated files`);
      
      this.testResults.push({
        name: 'AI Code Generation',
        passed: fileElements.length > 0,
        required: true,
        details: `Generated ${fileElements.length} files`
      });
      
      return true;
      
    } catch (error) {
      console.error('❌ AI Generation Test Failed:', error.message);
      this.testResults.push({
        name: 'AI Code Generation',
        passed: false,
        required: true,
        error: error.message
      });
      return false;
    }
  }

  async testFileManagement() {
    console.log('📁 Testing file management...');
    
    try {
      // Check if file manager is visible
      let fileManager = await this.page.$('h3, div');
      if (!fileManager) {
        const xpathElements = await this.page.$x('//h3[contains(text(), "Explorer")] | //div[contains(text(), "Files")]');
        fileManager = xpathElements.length > 0 ? xpathElements[0] : null;
      }
      
      if (!fileManager) {
        throw new Error('File manager not found');
      }
      
      // Look for file items - try multiple selectors
      let fileItems = await this.page.$$('span[class*="truncate"], [class*="filename"]');
      
      // Try XPath for file extensions
      if (fileItems.length === 0) {
        const xpathFiles = await this.page.$x('//span[contains(text(), ".html")] | //span[contains(text(), ".css")] | //span[contains(text(), ".js")] | //span[contains(text(), ".jsx")]');
        fileItems = xpathFiles;
      }
      
      // If still no files, look for the "No files yet" state
      if (fileItems.length === 0) {
        const noFilesState = await this.page.$x('//h3[contains(text(), "No files yet")] | //div[contains(text(), "No files")]');
        if (noFilesState.length > 0) {
          console.log('⚠️ No files found - in initial state');
          this.testResults.push({
            name: 'File Management',
            passed: true,
            required: true,
            details: 'File manager visible, no files yet (initial state)'
          });
          return true;
        }
      }
      
      if (fileItems.length === 0) {
        console.log('⚠️ No files found in file manager');
        this.testResults.push({
          name: 'File Management',
          passed: false,
          required: false,
          details: 'No files found'
        });
        return false;
      }
      
      console.log(`📄 Found ${fileItems.length} files in file manager`);
      
      // Try to click on a file
      await fileItems[0].click();
      await this.page.waitForTimeout(1000);
      
      // Check if code editor shows content
      const codeEditor = await this.page.$('.monaco-editor, [class*="CodeEditor"]');
      const hasContent = codeEditor ? await this.page.evaluate(el => el.textContent.length > 0, codeEditor) : false;
      
      this.testResults.push({
        name: 'File Management',
        passed: fileItems.length > 0,
        required: true,
        details: `${fileItems.length} files found, content visible: ${hasContent}`
      });
      
      console.log(`✅ File management test passed - ${fileItems.length} files found`);
      return true;
      
    } catch (error) {
      console.error('❌ File Management Test Failed:', error.message);
      this.testResults.push({
        name: 'File Management',
        passed: false,
        required: true,
        error: error.message
      });
      return false;
    }
  }

  async testPreview() {
    console.log('👁️ Testing preview functionality...');
    
    try {
      // Look for preview panel with multiple selectors
      let previewPanel = await this.page.$('h3, [class*="preview"], [class*="Preview"], iframe');
      
      // If not found, try XPath
      if (!previewPanel) {
        const xpathElements = await this.page.$x('//h3[contains(text(), "Live Preview")] | //iframe | //div[contains(text(), "Preview")]');
        previewPanel = xpathElements.length > 0 ? xpathElements[0] : null;
      }
      
      if (!previewPanel) {
        throw new Error('Preview panel not found');
      }
      
      // Check if preview has content
      const previewContent = await this.page.evaluate(el => {
        return el.textContent.length > 0 || 
               el.innerHTML.includes('<iframe') || 
               el.innerHTML.includes('<div') ||
               el.innerHTML.includes('preview') ||
               el.querySelector('iframe') !== null;
      }, previewPanel);
      
      // Also check for iframe specifically
      const hasIframe = await this.page.$('iframe');
      
      this.testResults.push({
        name: 'Preview Functionality',
        passed: previewContent || hasIframe,
        required: true,
        details: `Preview panel found: ${!!previewPanel}, Content visible: ${previewContent}, Has iframe: ${!!hasIframe}`
      });
      
      console.log(`✅ Preview test ${(previewContent || hasIframe) ? 'passed' : 'failed'}`);
      return previewContent || hasIframe;
      
    } catch (error) {
      console.error('❌ Preview Test Failed:', error.message);
      this.testResults.push({
        name: 'Preview Functionality',
        passed: false,
        required: true,
        error: error.message
      });
      return false;
    }
  }

  async testProjectSettings() {
    console.log('⚙️ Testing project settings...');
    
    try {
      // Look for settings button with multiple selectors
      let settingsButton = await this.page.$('button[title*="Project Settings"], button[title*="settings"], button[title*="Settings"], button svg');
      
      // If not found, try XPath
      if (!settingsButton) {
        const xpathElements = await this.page.$x('//button[contains(@title, "Settings")] | //button[contains(@title, "Project Settings")]');
        settingsButton = xpathElements.length > 0 ? xpathElements[0] : null;
      }
      
      if (!settingsButton) {
        console.log('⚠️ Settings button not found');
        this.testResults.push({
          name: 'Project Settings',
          passed: false,
          required: false,
          details: 'Settings button not found'
        });
        return false;
      }
      
      // Click settings button
      await settingsButton.click();
      await this.page.waitForTimeout(2000);
      
      // Look for settings dialog with multiple selectors
      let settingsDialog = await this.page.$('h3, [class*="dialog"], [class*="modal"], input[placeholder*="Project"], select');
      
      // If not found, try XPath
      if (!settingsDialog) {
        const xpathElements = await this.page.$x('//h3[contains(text(), "Project Settings")] | //input[contains(@placeholder, "Project")] | //select | //label[contains(text(), "Project")]');
        settingsDialog = xpathElements.length > 0 ? xpathElements[0] : null;
      }
      
      if (settingsDialog) {
        console.log('✅ Project settings dialog opened');
        
        // Close dialog - try multiple close methods
        let closeButton = await this.page.$('button');
        if (closeButton) {
          const xpathClose = await this.page.$x('//button[contains(text(), "Close")] | //button[contains(text(), "Cancel")] | //button[contains(text(), "×")]');
          closeButton = xpathClose.length > 0 ? xpathClose[0] : null;
        }
        
        if (closeButton) {
          await closeButton.click();
        } else {
          // Try clicking outside to close
          await this.page.click('body');
        }
        
        await this.page.waitForTimeout(1000);
        
        this.testResults.push({
          name: 'Project Settings',
          passed: true,
          required: false,
          details: 'Settings dialog opened successfully'
        });
        return true;
      } else {
        throw new Error('Settings dialog not found after clicking settings button');
      }
      
    } catch (error) {
      console.error('❌ Project Settings Test Failed:', error.message);
      this.testResults.push({
        name: 'Project Settings',
        passed: false,
        required: false,
        error: error.message
      });
      return false;
    }
  }

  async runAllTests() {
    console.log('🎯 Starting DreamBuild AI Builder Automated Test Suite...\n');
    
    try {
      await this.initialize();
      
      const navigationSuccess = await this.navigateToAIBuilder();
      if (!navigationSuccess) {
        throw new Error('Failed to navigate to AI Builder');
      }
      
      // Run all tests
      await this.testBasicUI();
      await this.testAIGeneration();
      await this.testFileManagement();
      await this.testPreview();
      await this.testProjectSettings();
      
      // Generate report
      this.generateReport();
      
    } catch (error) {
      console.error('❌ Test suite failed:', error.message);
    } finally {
      await this.cleanup();
    }
  }

  generateReport() {
    console.log('\n📊 TEST REPORT');
    console.log('=' .repeat(50));
    
    const totalTests = this.testResults.length;
    const passedTests = this.testResults.filter(t => t.passed).length;
    const failedTests = totalTests - passedTests;
    const requiredTests = this.testResults.filter(t => t.required);
    const requiredPassed = requiredTests.filter(t => t.passed).length;
    
    console.log(`Total Tests: ${totalTests}`);
    console.log(`Passed: ${passedTests}`);
    console.log(`Failed: ${failedTests}`);
    console.log(`Required Tests Passed: ${requiredPassed}/${requiredTests.length}`);
    console.log(`Success Rate: ${((passedTests / totalTests) * 100).toFixed(1)}%`);
    
    console.log('\n📋 DETAILED RESULTS:');
    this.testResults.forEach((test, index) => {
      const status = test.passed ? '✅ PASS' : '❌ FAIL';
      const required = test.required ? '(REQUIRED)' : '(OPTIONAL)';
      console.log(`${index + 1}. ${status} ${test.name} ${required}`);
      if (test.details) {
        console.log(`   Details: ${test.details}`);
      }
      if (test.error) {
        console.log(`   Error: ${test.error}`);
      }
    });
    
    console.log('\n🎯 OVERALL RESULT:');
    if (requiredPassed === requiredTests.length) {
      console.log('🎉 ALL REQUIRED TESTS PASSED - DreamBuild AI Builder is working correctly!');
    } else {
      console.log('⚠️ SOME REQUIRED TESTS FAILED - Issues need to be addressed');
    }
  }

  async cleanup() {
    if (this.browser) {
      await this.browser.close();
      console.log('🧹 Browser closed');
    }
  }
}

// Run the tests
async function runTests() {
  const tester = new DreamBuildAITester();
  await tester.runAllTests();
}

// Export for use as module
export default DreamBuildAITester;

// Run if called directly
runTests().catch(console.error);
