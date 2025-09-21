import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class ComprehensiveTester {
  constructor() {
    this.browser = null;
    this.page = null;
    this.consoleLogs = [];
    this.uiStates = [];
  }

  async initialize() {
    console.log('🔍 Initializing Comprehensive Tester...');
    
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

    console.log('✅ Comprehensive Tester initialized');
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

  async captureUIState(description) {
    const state = {
      description,
      timestamp: new Date().toISOString(),
      url: await this.page.url(),
      title: await this.page.title(),
      elements: await this.page.evaluate(() => {
        const inputs = Array.from(document.querySelectorAll('input, textarea')).map(el => ({
          tagName: el.tagName,
          type: el.type,
          id: el.id,
          className: el.className,
          value: el.value,
          placeholder: el.placeholder
        }));
        
        const buttons = Array.from(document.querySelectorAll('button')).map(el => ({
          text: el.textContent,
          className: el.className,
          id: el.id,
          disabled: el.disabled
        }));
        
        const visibleText = document.body.textContent.substring(0, 1000);
        
        return { inputs, buttons, visibleText };
      })
    };
    
    this.uiStates.push(state);
    console.log(`📊 Captured UI state: ${description}`);
    return state;
  }

  async testGenerationWithUI() {
    console.log('🎮 Testing generation with UI monitoring...');
    
    try {
      // Capture initial state
      await this.captureUIState('Initial State');
      
      // Find and fill the correct textarea (the one with the prompt input)
      const textareas = await this.page.$$('textarea');
      let targetTextarea = null;
      
      for (const textarea of textareas) {
        const className = await this.page.evaluate(el => el.className, textarea);
        const placeholder = await this.page.evaluate(el => el.placeholder, textarea);
        
        // Look for the textarea with the prompt placeholder
        if (placeholder && placeholder.includes('Create a healthy food tips website')) {
          targetTextarea = textarea;
          console.log(`✅ Found target textarea with placeholder: ${placeholder}`);
          break;
        }
      }
      
      if (!targetTextarea) {
        // Fallback to the last textarea (usually the main input)
        targetTextarea = textareas[textareas.length - 1];
        console.log('⚠️ Using fallback textarea');
      }

      await targetTextarea.click({ clickCount: 3 });
      await targetTextarea.type('create a fun coin collector game with multiple levels, power-ups, and high score tracking');
      console.log('✅ Typed prompt');
      
      // Capture state after typing
      await this.captureUIState('After Typing Prompt');

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

      // Check if button is disabled
      const isDisabled = await this.page.evaluate(el => el.disabled, generateButton);
      if (isDisabled) {
        console.log('⚠️ Generate button is disabled');
        return false;
      }

      await generateButton.click();
      console.log('✅ Clicked generate button');
      
      // Capture state after clicking
      await this.captureUIState('After Clicking Generate');

      // Monitor generation process with UI updates
      const success = await this.monitorGenerationWithUI();
      
      return success;
    } catch (error) {
      console.error('❌ Generation test failed:', error.message);
      return false;
    }
  }

  async monitorGenerationWithUI() {
    console.log('⏳ Monitoring generation process with UI updates...');
    
    const startTime = Date.now();
    const timeout = 300000; // 5 minutes
    let lastUIState = null;
    
    while (Date.now() - startTime < timeout) {
      // Capture current UI state
      const currentState = await this.captureUIState('Generation Progress');
      
      // Check for UI changes that might indicate progress
      if (lastUIState) {
        const hasUIChanges = this.compareUIStates(lastUIState, currentState);
        if (hasUIChanges) {
          console.log('🔄 UI changes detected during generation');
        }
      }
      
      // Check for success indicators in console
      const recentLogs = this.consoleLogs.slice(-10);
      const hasSuccess = recentLogs.some(log => 
        log.text.includes('✅ Code generated successfully') || 
        log.text.includes('Generated') && log.text.includes('files') ||
        log.text.includes('Multi-file generation') ||
        log.text.includes('Enhanced AI generation')
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
      
      // Check for progress indicators
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
      
      // Check if generate button is still clickable (might indicate completion)
      const generateButton = await this.page.$('button');
      if (generateButton) {
        const isDisabled = await this.page.evaluate(el => el.disabled, generateButton);
        const buttonText = await this.page.evaluate(el => el.textContent, generateButton);
        
        if (!isDisabled && buttonText.includes('Generate')) {
          console.log('🔄 Generate button is clickable again - generation might be complete');
        }
      }
      
      lastUIState = currentState;
      
      // Wait before checking again
      await new Promise(resolve => setTimeout(resolve, 3000));
    }
    
    console.log('⏰ Generation timeout reached');
    this.logRecentConsoleOutput();
    return false;
  }

  compareUIStates(state1, state2) {
    // Simple comparison of UI states
    return JSON.stringify(state1.elements) !== JSON.stringify(state2.elements);
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

  async runComprehensiveTest() {
    console.log('🔍 Starting Comprehensive Test...');
    
    try {
      await this.initialize();
      
      const navigationSuccess = await this.navigateToAIBuilder();
      if (!navigationSuccess) {
        throw new Error('Failed to navigate to AI Builder');
      }

      await this.captureScreenshot('initial-state');

      const generationSuccess = await this.testGenerationWithUI();
      
      await this.captureScreenshot('final-state');

      // Save all data
      const testData = {
        consoleLogs: this.consoleLogs,
        uiStates: this.uiStates,
        timestamp: new Date().toISOString()
      };
      
      const dataPath = path.join(__dirname, 'comprehensive-test-data.json');
      fs.writeFileSync(dataPath, JSON.stringify(testData, null, 2));
      console.log(`📄 Test data saved to: ${dataPath}`);

      if (generationSuccess) {
        console.log('🎉 SUCCESS: Generation completed!');
      } else {
        console.log('❌ FAILED: Generation failed, but detailed analysis was performed');
      }

      return generationSuccess;

    } catch (error) {
      console.error('💥 Comprehensive test failed:', error.message);
      await this.captureScreenshot('error-state');
      return false;
    } finally {
      if (this.browser) {
        await this.browser.close();
      }
    }
  }
}

// Run the comprehensive test
async function main() {
  const tester = new ComprehensiveTester();
  const success = await tester.runComprehensiveTest();
  
  if (success) {
    console.log('\n🎉 COMPREHENSIVE TEST PASSED!');
    process.exit(0);
  } else {
    console.log('\n❌ COMPREHENSIVE TEST FAILED!');
    process.exit(1);
  }
}

main().catch(console.error);
