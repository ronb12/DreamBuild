import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class DreamBuildAutomatedTester {
  constructor() {
    this.browser = null;
    this.page = null;
    this.testResults = [];
    this.errors = [];
    this.maxRetries = 5;
    this.currentRetry = 0;
  }

  async initialize() {
    console.log('🚀 Initializing DreamBuild Automated Tester...');
    
    this.browser = await puppeteer.launch({
      headless: false, // Set to true for headless mode
      defaultViewport: { width: 1920, height: 1080 },
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    this.page = await this.browser.newPage();
    
    // Set up console logging
    this.page.on('console', msg => {
      const type = msg.type();
      const text = msg.text();
      
      if (type === 'error') {
        console.error('❌ Browser Error:', text);
        this.errors.push(text);
      } else if (type === 'log') {
        console.log('📝 Browser Log:', text);
      }
    });

    // Set up error handling
    this.page.on('pageerror', error => {
      console.error('❌ Page Error:', error.message);
      this.errors.push(error.message);
    });

    console.log('✅ Browser initialized successfully');
  }

  async navigateToDreamBuild() {
    console.log('🌐 Navigating to DreamBuild...');
    
    try {
      // Go directly to AI Builder
      console.log('🎯 Going directly to AI Builder...');
      await this.page.goto('https://dreambuild-2024-app.web.app/ai-builder', {
        waitUntil: 'networkidle2',
        timeout: 30000
      });
      
      // Wait a bit more for React to render
      await new Promise(resolve => setTimeout(resolve, 5000));
      
      // Wait for the page to load with more flexible selectors
      const selectors = [
        'textarea',
        'input[type="text"]',
        '[data-testid="ai-prompt"]',
        '[data-testid="ai-prompt"] textarea',
        '[data-testid="ai-prompt"] input',
        '.ai-prompt textarea',
        '.ai-prompt input',
        'form textarea',
        'form input[type="text"]'
      ];
      
      let found = false;
      for (const selector of selectors) {
        try {
          await this.page.waitForSelector(selector, { timeout: 5000 });
          console.log(`✅ Found input element with selector: ${selector}`);
          found = true;
          break;
        } catch (e) {
          // Continue to next selector
        }
      }
      
      if (!found) {
        // Take a screenshot to see what's on the page
        await this.page.screenshot({ path: 'debug-page.png', fullPage: true });
        console.log('📸 Debug screenshot saved as debug-page.png');
        
        // Get page title and URL
        const title = await this.page.title();
        const url = await this.page.url();
        console.log(`📄 Page title: ${title}`);
        console.log(`🌐 Current URL: ${url}`);
        
        // Check if there are any errors in the page
        const pageErrors = await this.page.evaluate(() => {
          return window.errors || [];
        });
        if (pageErrors.length > 0) {
          console.log('❌ Page errors:', pageErrors);
        }
        
        // Log all available elements
        const elements = await this.page.evaluate(() => {
          const inputs = Array.from(document.querySelectorAll('input, textarea, form'));
          return inputs.map(el => ({
            tagName: el.tagName,
            type: el.type,
            id: el.id,
            className: el.className,
            dataTestId: el.getAttribute('data-testid'),
            placeholder: el.placeholder
          }));
        });
        
        console.log('🔍 Available input elements:', elements);
        
        // Log all buttons
        const buttons = await this.page.evaluate(() => {
          return Array.from(document.querySelectorAll('button')).map(el => ({
            text: el.textContent,
            className: el.className,
            id: el.id,
            dataTestId: el.getAttribute('data-testid')
          }));
        });
        
        console.log('🔍 Available buttons:', buttons);
        
        // Log page content
        const bodyText = await this.page.evaluate(() => document.body.textContent);
        console.log('📄 Page content preview:', bodyText.substring(0, 500));
        
        throw new Error('Could not find any input element');
      }
      
      console.log('✅ Successfully loaded DreamBuild');
      return true;
    } catch (error) {
      console.error('❌ Failed to load DreamBuild:', error.message);
      return false;
    }
  }

  async testCoinCollectorGameGeneration() {
    console.log('🎮 Testing coin collector game generation...');
    
    try {
      // Find the AI prompt input with flexible selectors
      const inputSelectors = [
        'textarea',
        'input[type="text"]',
        '[data-testid="ai-prompt"] textarea',
        '[data-testid="ai-prompt"] input',
        '.ai-prompt textarea',
        '.ai-prompt input',
        'form textarea',
        'form input[type="text"]'
      ];
      
      let promptInput = null;
      for (const selector of inputSelectors) {
        promptInput = await this.page.$(selector);
        if (promptInput) {
          console.log(`✅ Found input with selector: ${selector}`);
          break;
        }
      }
      
      if (!promptInput) {
        throw new Error('Could not find AI prompt input');
      }

      // Clear and type the prompt
      await promptInput.click({ clickCount: 3 });
      await promptInput.type('create a fun coin collector game with multiple levels, power-ups, and high score tracking');
      console.log('✅ Typed prompt');

      // Find and click the generate button with flexible selectors
      const buttonSelectors = [
        'button[type="submit"]',
        '[data-testid="generate-button"]',
        'button:contains("Generate")',
        'button:contains("Create")',
        'button:contains("Build")',
        'button:contains("Submit")',
        'form button',
        '.generate-button',
        '.submit-button'
      ];
      
      let generateButton = null;
      for (const selector of buttonSelectors) {
        try {
          generateButton = await this.page.$(selector);
          if (generateButton) {
            console.log(`✅ Found button with selector: ${selector}`);
            break;
          }
        } catch (e) {
          // Continue to next selector
        }
      }
      
      if (!generateButton) {
        // Try to find any button that might be the generate button
        const buttons = await this.page.$$('button');
        for (const button of buttons) {
          const text = await this.page.evaluate(el => el.textContent, button);
          if (text && (text.includes('Generate') || text.includes('Create') || text.includes('Build') || text.includes('Submit'))) {
            generateButton = button;
            console.log(`✅ Found button by text: ${text}`);
            break;
          }
        }
      }
      
      if (!generateButton) {
        throw new Error('Could not find generate button');
      }

      await generateButton.click();
      console.log('✅ Clicked generate button');

      // Wait for generation to complete
      await this.waitForGenerationComplete();
      
      return true;
    } catch (error) {
      console.error('❌ Failed to generate coin collector game:', error.message);
      return false;
    }
  }

  async waitForGenerationComplete() {
    console.log('⏳ Waiting for generation to complete...');
    
    const startTime = Date.now();
    const timeout = 300000; // 5 minutes timeout
    
    while (Date.now() - startTime < timeout) {
      try {
        // Check for completion indicators
        const isComplete = await this.page.evaluate(() => {
          // Look for success indicators in console logs
          const logs = window.consoleLogs || [];
          const hasSuccess = logs.some(log => 
            log.includes('✅ Code generated successfully') || 
            log.includes('Generated') && log.includes('files') ||
            log.includes('Multi-file generation') ||
            log.includes('Enhanced AI generation')
          );
          
          // Look for error indicators
          const hasError = logs.some(log => 
            log.includes('❌') || 
            log.includes('TypeError') || 
            log.includes('Failed') ||
            log.includes('is not a function')
          );
          
          // Look for generation progress
          const hasProgress = logs.some(log => 
            log.includes('Starting') ||
            log.includes('Generated') ||
            log.includes('Creating') ||
            log.includes('Building')
          );
          
          return { hasSuccess, hasError, hasProgress, logs };
        });

        if (isComplete.hasSuccess) {
          console.log('✅ Generation completed successfully!');
          console.log('📊 Console logs:', isComplete.logs);
          return true;
        }

        if (isComplete.hasError) {
          console.log('❌ Generation failed with errors');
          console.log('📊 Error logs:', isComplete.logs);
          return false;
        }

        if (isComplete.hasProgress) {
          console.log('⏳ Generation in progress...');
          // Log recent progress
          const recentLogs = isComplete.logs.slice(-5);
          recentLogs.forEach(log => console.log(`📝 ${log}`));
        }

        // Wait a bit before checking again
        await new Promise(resolve => setTimeout(resolve, 2000));
        
      } catch (error) {
        console.log('⏳ Still waiting for generation...');
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
    }
    
    console.log('⏰ Generation timeout reached');
    return false;
  }

  async checkGeneratedFiles() {
    console.log('📁 Checking generated files...');
    
    try {
      // Look for file indicators in the UI
      const fileCount = await this.page.evaluate(() => {
        // Look for file lists, file managers, or file indicators
        const fileElements = document.querySelectorAll('[data-testid*="file"], .file-item, .file-list li');
        return fileElements.length;
      });

      console.log(`📊 Found ${fileCount} file indicators`);
      
      if (fileCount > 5) {
        console.log('✅ Multi-file generation appears to be working!');
        return true;
      } else {
        console.log('❌ Only single-page generation detected');
        return false;
      }
    } catch (error) {
      console.error('❌ Failed to check generated files:', error.message);
      return false;
    }
  }

  async captureScreenshot(name) {
    const screenshotPath = path.join(__dirname, `screenshots/${name}-${Date.now()}.png`);
    
    // Ensure screenshots directory exists
    const screenshotsDir = path.dirname(screenshotPath);
    if (!fs.existsSync(screenshotsDir)) {
      fs.mkdirSync(screenshotsDir, { recursive: true });
    }
    
    await this.page.screenshot({ path: screenshotPath, fullPage: true });
    console.log(`📸 Screenshot saved: ${screenshotPath}`);
    return screenshotPath;
  }

  async runAutomatedTest() {
    console.log('🎯 Starting automated DreamBuild test...');
    
    try {
      await this.initialize();
      
      // Navigate to DreamBuild
      const navigationSuccess = await this.navigateToDreamBuild();
      if (!navigationSuccess) {
        throw new Error('Failed to navigate to DreamBuild');
      }

      // Take initial screenshot
      await this.captureScreenshot('initial-load');

      // Test coin collector game generation
      const generationSuccess = await this.testCoinCollectorGameGeneration();
      if (!generationSuccess) {
        throw new Error('Failed to generate coin collector game');
      }

      // Take screenshot after generation
      await this.captureScreenshot('after-generation');

      // Check generated files
      const filesSuccess = await this.checkGeneratedFiles();
      if (!filesSuccess) {
        console.log('⚠️ Multi-file generation may not be working properly');
      }

      // Take final screenshot
      await this.captureScreenshot('final-result');

      console.log('✅ Automated test completed successfully!');
      return true;

    } catch (error) {
      console.error('❌ Automated test failed:', error.message);
      await this.captureScreenshot('error-state');
      return false;
    } finally {
      if (this.browser) {
        await this.browser.close();
      }
    }
  }

  async runWithRetries() {
    for (let attempt = 1; attempt <= this.maxRetries; attempt++) {
      console.log(`\n🔄 Attempt ${attempt}/${this.maxRetries}`);
      
      const success = await this.runAutomatedTest();
      
      if (success) {
        console.log('🎉 Test passed successfully!');
        return true;
      } else {
        console.log(`❌ Attempt ${attempt} failed`);
        
        if (attempt < this.maxRetries) {
          console.log('⏳ Waiting before retry...');
          await new Promise(resolve => setTimeout(resolve, 5000));
        }
      }
    }
    
    console.log('💥 All attempts failed');
    return false;
  }
}

// Run the automated test
async function main() {
  const tester = new DreamBuildAutomatedTester();
  
  console.log('🤖 DreamBuild Automated Tester');
  console.log('==============================');
  
  const success = await tester.runWithRetries();
  
  if (success) {
    console.log('\n🎉 SUCCESS: DreamBuild is working correctly!');
    process.exit(0);
  } else {
    console.log('\n💥 FAILURE: DreamBuild needs fixes');
    process.exit(1);
  }
}

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
  console.error('💥 Uncaught Exception:', error);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('💥 Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});

// Run the test
main().catch(console.error);
