import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class DreamBuildDebugger {
  constructor() {
    this.browser = null;
    this.page = null;
    this.consoleLogs = [];
  }

  async initialize() {
    console.log('🔍 Initializing DreamBuild Debugger...');
    
    this.browser = await puppeteer.launch({
      headless: false,
      defaultViewport: { width: 1920, height: 1080 },
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    this.page = await this.browser.newPage();
    
    // Capture all console logs
    this.page.on('console', msg => {
      const type = msg.type();
      const text = msg.text();
      this.consoleLogs.push({ type, text, timestamp: new Date().toISOString() });
      
      if (type === 'error') {
        console.error('❌ Browser Error:', text);
      } else if (type === 'log') {
        console.log('📝 Browser Log:', text);
      }
    });

    this.page.on('pageerror', error => {
      console.error('❌ Page Error:', error.message);
      this.consoleLogs.push({ type: 'pageerror', text: error.message, timestamp: new Date().toISOString() });
    });

    console.log('✅ Debugger initialized');
  }

  async navigateToAIBuilder() {
    console.log('🌐 Navigating to AI Builder...');
    
    try {
      await this.page.goto('https://dreambuild-2024-app.web.app/ai-builder', {
        waitUntil: 'networkidle2',
        timeout: 30000
      });
      
      await new Promise(resolve => setTimeout(resolve, 5000));
      
      // Check if we found the input
      const input = await this.page.$('textarea');
      if (input) {
        console.log('✅ Found textarea input');
        return true;
      } else {
        console.log('❌ No textarea found');
        return false;
      }
    } catch (error) {
      console.error('❌ Failed to navigate:', error.message);
      return false;
    }
  }

  async testGeneration() {
    console.log('🎮 Testing generation...');
    
    try {
      // Find and fill the textarea
      const textarea = await this.page.$('textarea');
      if (!textarea) {
        throw new Error('No textarea found');
      }

      await textarea.click({ clickCount: 3 });
      await textarea.type('create a fun coin collector game with multiple levels, power-ups, and high score tracking');
      console.log('✅ Typed prompt');

      // Find and click generate button
      const buttons = await this.page.$$('button');
      let generateButton = null;
      
      for (const button of buttons) {
        const text = await this.page.evaluate(el => el.textContent, button);
        if (text && text.includes('Generate')) {
          generateButton = button;
          console.log(`✅ Found generate button: ${text}`);
          break;
        }
      }

      if (!generateButton) {
        throw new Error('No generate button found');
      }

      await generateButton.click();
      console.log('✅ Clicked generate button');

      // Monitor generation process
      await this.monitorGeneration();
      
      return true;
    } catch (error) {
      console.error('❌ Generation test failed:', error.message);
      return false;
    }
  }

  async monitorGeneration() {
    console.log('⏳ Monitoring generation process...');
    
    const startTime = Date.now();
    const timeout = 300000; // 5 minutes
    
    while (Date.now() - startTime < timeout) {
      // Get recent console logs
      const recentLogs = this.consoleLogs.slice(-10);
      
      // Check for success
      const hasSuccess = recentLogs.some(log => 
        log.text.includes('✅ Code generated successfully') || 
        log.text.includes('Generated') && log.text.includes('files') ||
        log.text.includes('Multi-file generation')
      );
      
      if (hasSuccess) {
        console.log('✅ Generation completed successfully!');
        this.logRecentConsoleOutput();
        return true;
      }
      
      // Check for errors
      const hasError = recentLogs.some(log => 
        log.text.includes('❌') || 
        log.text.includes('TypeError') || 
        log.text.includes('Failed') ||
        log.text.includes('is not a function')
      );
      
      if (hasError) {
        console.log('❌ Generation failed with errors');
        this.logRecentConsoleOutput();
        await this.analyzeErrors();
        return false;
      }
      
      // Log progress
      const hasProgress = recentLogs.some(log => 
        log.text.includes('Starting') ||
        log.text.includes('Generated') ||
        log.text.includes('Creating') ||
        log.text.includes('Building') ||
        log.text.includes('🧩') ||
        log.text.includes('📁')
      );
      
      if (hasProgress) {
        console.log('⏳ Generation in progress...');
        recentLogs.forEach(log => {
          if (log.text.includes('🧩') || log.text.includes('📁') || log.text.includes('Generated')) {
            console.log(`📝 ${log.text}`);
          }
        });
      }
      
      // Wait before checking again
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
    
    console.log('⏰ Generation timeout reached');
    this.logRecentConsoleOutput();
    return false;
  }

  logRecentConsoleOutput() {
    console.log('\n📊 Recent Console Output:');
    console.log('========================');
    const recentLogs = this.consoleLogs.slice(-20);
    recentLogs.forEach((log, index) => {
      const prefix = log.type === 'error' ? '❌' : log.type === 'warn' ? '⚠️' : '📝';
      console.log(`${prefix} ${index + 1}: ${log.text}`);
    });
    console.log('========================\n');
  }

  async analyzeErrors() {
    console.log('🔍 Analyzing errors...');
    
    const errorLogs = this.consoleLogs.filter(log => 
      log.text.includes('TypeError') || 
      log.text.includes('is not a function') ||
      log.text.includes('❌')
    );
    
    console.log(`Found ${errorLogs.length} error logs:`);
    errorLogs.forEach((log, index) => {
      console.log(`${index + 1}. ${log.text}`);
    });
    
    // Look for specific missing methods
    const missingMethods = [];
    errorLogs.forEach(log => {
      const match = log.text.match(/this\.(\w+) is not a function/);
      if (match) {
        missingMethods.push(match[1]);
      }
    });
    
    if (missingMethods.length > 0) {
      console.log(`🔧 Found missing methods: ${missingMethods.join(', ')}`);
      console.log('💡 These methods need to be added to localAIService.js');
    }
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

  async runDebug() {
    console.log('🔍 Starting DreamBuild Debug Session...');
    
    try {
      await this.initialize();
      
      const navigationSuccess = await this.navigateToAIBuilder();
      if (!navigationSuccess) {
        throw new Error('Failed to navigate to AI Builder');
      }

      await this.captureScreenshot('initial-state');

      const generationSuccess = await this.testGeneration();
      
      await this.captureScreenshot('final-state');

      if (generationSuccess) {
        console.log('🎉 SUCCESS: Generation completed!');
      } else {
        console.log('❌ FAILED: Generation failed, but errors were analyzed');
      }

      // Save console logs to file
      const logsPath = path.join(__dirname, 'console-logs.json');
      fs.writeFileSync(logsPath, JSON.stringify(this.consoleLogs, null, 2));
      console.log(`📄 Console logs saved to: ${logsPath}`);

    } catch (error) {
      console.error('💥 Debug session failed:', error.message);
      await this.captureScreenshot('error-state');
    } finally {
      if (this.browser) {
        await this.browser.close();
      }
    }
  }
}

// Run the debug session
async function main() {
  const debugSession = new DreamBuildDebugger();
  await debugSession.runDebug();
}

main().catch(console.error);
