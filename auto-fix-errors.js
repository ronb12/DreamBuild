import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class DreamBuildAutoFixer {
  constructor() {
    this.browser = null;
    this.page = null;
    this.errors = [];
    this.fixes = [];
  }

  async initialize() {
    console.log('🔧 Initializing DreamBuild Auto-Fixer...');
    
    this.browser = await puppeteer.launch({
      headless: false,
      defaultViewport: { width: 1920, height: 1080 },
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    this.page = await this.browser.newPage();
    
    // Capture console logs
    await this.page.evaluateOnNewDocument(() => {
      window.consoleLogs = [];
      const originalLog = console.log;
      const originalError = console.error;
      const originalWarn = console.warn;
      
      console.log = (...args) => {
        window.consoleLogs.push(args.join(' '));
        originalLog.apply(console, args);
      };
      
      console.error = (...args) => {
        window.consoleLogs.push('ERROR: ' + args.join(' '));
        originalError.apply(console, args);
      };
      
      console.warn = (...args) => {
        window.consoleLogs.push('WARN: ' + args.join(' '));
        originalWarn.apply(console, args);
      };
    });

    console.log('✅ Auto-fixer initialized');
  }

  async navigateAndTest() {
    console.log('🌐 Navigating to DreamBuild...');
    
    try {
      await this.page.goto('https://dreambuild-2024-app.web.app', {
        waitUntil: 'networkidle2',
        timeout: 30000
      });
      
      // Wait for the page to load
      await this.page.waitForSelector('textarea, input[type="text"]', { timeout: 10000 });
      console.log('✅ DreamBuild loaded successfully');
      return true;
    } catch (error) {
      console.error('❌ Failed to load DreamBuild:', error.message);
      return false;
    }
  }

  async generateCoinCollectorGame() {
    console.log('🎮 Generating coin collector game...');
    
    try {
      // Find input field
      const inputSelector = 'textarea, input[type="text"], [data-testid="ai-prompt"] textarea, [data-testid="ai-prompt"] input';
      await this.page.waitForSelector(inputSelector, { timeout: 10000 });
      
      const input = await this.page.$(inputSelector);
      if (!input) {
        throw new Error('Could not find input field');
      }

      // Clear and type the prompt
      await input.click({ clickCount: 3 });
      await input.type('create a fun coin collector game with multiple levels, power-ups, and high score tracking');

      // Find and click generate button
      const buttonSelectors = [
        'button[type="submit"]',
        '[data-testid="generate-button"]',
        'button:contains("Generate")',
        'button:contains("Create")',
        'button:contains("Build")'
      ];

      let generateButton = null;
      for (const selector of buttonSelectors) {
        try {
          generateButton = await this.page.$(selector);
          if (generateButton) break;
        } catch (e) {
          // Continue to next selector
        }
      }

      if (!generateButton) {
        // Try to find any button that might be the generate button
        const buttons = await this.page.$$('button');
        for (const button of buttons) {
          const text = await this.page.evaluate(el => el.textContent, button);
          if (text && (text.includes('Generate') || text.includes('Create') || text.includes('Build'))) {
            generateButton = button;
            break;
          }
        }
      }

      if (!generateButton) {
        throw new Error('Could not find generate button');
      }

      await generateButton.click();
      console.log('✅ Clicked generate button');

      // Wait for generation
      await this.waitForGeneration();
      
      return true;
    } catch (error) {
      console.error('❌ Failed to generate game:', error.message);
      return false;
    }
  }

  async waitForGeneration() {
    console.log('⏳ Waiting for generation to complete...');
    
    const startTime = Date.now();
    const timeout = 180000; // 3 minutes
    
    while (Date.now() - startTime < timeout) {
      const logs = await this.page.evaluate(() => window.consoleLogs || []);
      
      // Check for success
      const hasSuccess = logs.some(log => 
        log.includes('✅ Code generated successfully') || 
        log.includes('Generated') && log.includes('files') ||
        log.includes('Multi-file generation')
      );
      
      if (hasSuccess) {
        console.log('✅ Generation completed successfully!');
        this.logConsoleOutput(logs);
        return true;
      }
      
      // Check for errors
      const hasError = logs.some(log => 
        log.includes('❌') || 
        log.includes('TypeError') || 
        log.includes('Failed') ||
        log.includes('is not a function')
      );
      
      if (hasError) {
        console.log('❌ Generation failed with errors');
        this.logConsoleOutput(logs);
        await this.analyzeAndFixErrors(logs);
        return false;
      }
      
      // Wait before checking again
      await this.page.waitForTimeout(3000);
    }
    
    console.log('⏰ Generation timeout');
    return false;
  }

  logConsoleOutput(logs) {
    console.log('\n📊 Console Output:');
    console.log('==================');
    logs.forEach((log, index) => {
      if (log.includes('ERROR:') || log.includes('❌')) {
        console.error(`❌ ${index + 1}: ${log}`);
      } else if (log.includes('WARN:')) {
        console.warn(`⚠️ ${index + 1}: ${log}`);
      } else {
        console.log(`📝 ${index + 1}: ${log}`);
      }
    });
    console.log('==================\n');
  }

  async analyzeAndFixErrors(logs) {
    console.log('🔍 Analyzing errors for auto-fix...');
    
    const errors = logs.filter(log => 
      log.includes('TypeError') || 
      log.includes('is not a function') ||
      log.includes('❌')
    );
    
    console.log(`Found ${errors.length} errors to analyze:`);
    errors.forEach((error, index) => {
      console.log(`${index + 1}. ${error}`);
    });
    
    // Check for specific missing methods
    const missingMethods = this.extractMissingMethods(errors);
    
    if (missingMethods.length > 0) {
      console.log('🔧 Found missing methods, attempting to fix...');
      await this.fixMissingMethods(missingMethods);
    }
  }

  extractMissingMethods(errors) {
    const missingMethods = [];
    
    errors.forEach(error => {
      // Look for "is not a function" errors
      const match = error.match(/this\.(\w+) is not a function/);
      if (match) {
        missingMethods.push(match[1]);
      }
    });
    
    return [...new Set(missingMethods)]; // Remove duplicates
  }

  async fixMissingMethods(missingMethods) {
    console.log(`🔧 Fixing ${missingMethods.length} missing methods...`);
    
    for (const method of missingMethods) {
      console.log(`Adding missing method: ${method}`);
      await this.addMissingMethod(method);
    }
  }

  async addMissingMethod(methodName) {
    // This would need to be implemented based on the specific method
    // For now, we'll just log what we would do
    console.log(`Would add method: ${methodName}`);
    
    // In a real implementation, this would:
    // 1. Read the localAIService.js file
    // 2. Add the missing method
    // 3. Rebuild and redeploy
  }

  async captureScreenshot(name) {
    const screenshotPath = path.join(__dirname, `screenshots/${name}-${Date.now()}.png`);
    
    const screenshotsDir = path.dirname(screenshotPath);
    if (!fs.existsSync(screenshotsDir)) {
      fs.mkdirSync(screenshotsDir, { recursive: true });
    }
    
    await this.page.screenshot({ path: screenshotPath, fullPage: true });
    console.log(`📸 Screenshot saved: ${screenshotPath}`);
    return screenshotPath;
  }

  async runAutoFix() {
    console.log('🤖 Starting DreamBuild Auto-Fix...');
    
    try {
      await this.initialize();
      
      const navigationSuccess = await this.navigateAndTest();
      if (!navigationSuccess) {
        throw new Error('Failed to navigate to DreamBuild');
      }

      await this.captureScreenshot('initial-state');

      const generationSuccess = await this.generateCoinCollectorGame();
      
      await this.captureScreenshot('final-state');

      if (generationSuccess) {
        console.log('🎉 SUCCESS: Coin collector game generated successfully!');
        return true;
      } else {
        console.log('❌ FAILED: Generation failed, but errors were analyzed');
        return false;
      }

    } catch (error) {
      console.error('💥 Auto-fix failed:', error.message);
      await this.captureScreenshot('error-state');
      return false;
    } finally {
      if (this.browser) {
        await this.browser.close();
      }
    }
  }
}

// Run the auto-fix
async function main() {
  const autoFixer = new DreamBuildAutoFixer();
  
  console.log('🔧 DreamBuild Auto-Fixer');
  console.log('========================');
  
  const success = await autoFixer.runAutoFix();
  
  if (success) {
    console.log('\n🎉 SUCCESS: DreamBuild is working!');
    process.exit(0);
  } else {
    console.log('\n❌ FAILED: DreamBuild needs manual fixes');
    process.exit(1);
  }
}

main().catch(console.error);
