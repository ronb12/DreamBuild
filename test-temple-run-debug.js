#!/usr/bin/env node

import puppeteer from 'puppeteer';
import fs from 'fs';

class TempleRunDebugger {
  constructor() {
    this.browser = null;
    this.page = null;
    this.consoleLogs = [];
    this.errors = [];
  }

  async initialize() {
    console.log('🚀 Initializing Temple Run Debug Test...');
    
    this.browser = await puppeteer.launch({
      headless: false, // Run in headed mode to see what's happening
      defaultViewport: { width: 1280, height: 720 },
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    this.page = await this.browser.newPage();
    
    // Capture console logs
    this.page.on('console', msg => {
      const logEntry = {
        type: msg.type(),
        text: msg.text(),
        timestamp: new Date().toISOString()
      };
      this.consoleLogs.push(logEntry);
      
      if (msg.type() === 'error') {
        this.errors.push(logEntry);
      }
    });

    // Capture page errors
    this.page.on('pageerror', error => {
      this.errors.push({
        type: 'pageerror',
        text: error.message,
        timestamp: new Date().toISOString()
      });
    });

    console.log('✅ Browser initialized');
  }

  async navigateToDreamBuild() {
    console.log('🌐 Navigating to DreamBuild...');
    
    try {
      await this.page.goto('https://dreambuild-2024-app.web.app/ai-builder', {
        waitUntil: 'networkidle2',
        timeout: 30000
      });
      
      console.log('✅ Successfully navigated to DreamBuild');
      return true;
    } catch (error) {
      console.error('❌ Failed to navigate to DreamBuild:', error.message);
      return false;
    }
  }

  async waitForAIPrompt() {
    console.log('⏳ Waiting for AI prompt interface...');
    
    try {
      // Wait for the AI prompt textarea
      await this.page.waitForSelector('textarea, [class*="ai"], [class*="prompt"], [class*="AIPrompt"]', {
        timeout: 15000
      });
      
      console.log('✅ AI prompt interface found');
      return true;
    } catch (error) {
      console.error('❌ AI prompt interface not found:', error.message);
      return false;
    }
  }

  async requestTempleRun() {
    console.log('🎮 Requesting Temple Run game...');
    
    try {
      // Find and clear the textarea
      const textarea = await this.page.$('textarea');
      if (textarea) {
        await textarea.click();
        await textarea.evaluate(el => el.value = '');
        await textarea.type('clone temple run');
        
        console.log('✅ Typed "clone temple run"');
        
        // Press Enter to submit
        await textarea.press('Enter');
        console.log('✅ Submitted request');
        
        return true;
      } else {
        console.error('❌ Could not find textarea');
        return false;
      }
    } catch (error) {
      console.error('❌ Failed to request Temple Run:', error.message);
      return false;
    }
  }

  async waitForGeneration() {
    console.log('⏳ Waiting for code generation...');
    
    try {
      // Wait for generation to complete (look for success indicators)
      await this.page.waitForFunction(() => {
        // Look for indicators that generation is complete
        const logs = Array.from(document.querySelectorAll('*')).some(el => 
          el.textContent?.includes('Generated') && 
          el.textContent?.includes('files')
        );
        return logs;
      }, { timeout: 60000 });
      
      console.log('✅ Code generation completed');
      
      // Wait a bit more for preview to update
      await this.page.waitForTimeout(3000);
      
      return true;
    } catch (error) {
      console.error('❌ Code generation timeout:', error.message);
      return false;
    }
  }

  async analyzeConsoleLogs() {
    console.log('🔍 Analyzing console logs...');
    
    const templeRunLogs = this.consoleLogs.filter(log => 
      log.text.includes('Temple Run') || 
      log.text.includes('temple run') ||
      log.text.includes('🏃') ||
      log.text.includes('🎮')
    );
    
    const fileGenerationLogs = this.consoleLogs.filter(log => 
      log.text.includes('Generated') || 
      log.text.includes('files') ||
      log.text.includes('📁')
    );
    
    const previewLogs = this.consoleLogs.filter(log => 
      log.text.includes('Preview Debug') ||
      log.text.includes('🎮 Preview Debug')
    );
    
    console.log('\n📊 Analysis Results:');
    console.log(`🎮 Temple Run related logs: ${templeRunLogs.length}`);
    console.log(`📁 File generation logs: ${fileGenerationLogs.length}`);
    console.log(`👁️ Preview debug logs: ${previewLogs.length}`);
    console.log(`❌ Error logs: ${this.errors.length}`);
    
    // Print key logs
    if (templeRunLogs.length > 0) {
      console.log('\n🎮 Temple Run Logs:');
      templeRunLogs.forEach(log => console.log(`  ${log.type}: ${log.text}`));
    }
    
    if (previewLogs.length > 0) {
      console.log('\n👁️ Preview Debug Logs:');
      previewLogs.forEach(log => console.log(`  ${log.type}: ${log.text}`));
    }
    
    if (this.errors.length > 0) {
      console.log('\n❌ Errors:');
      this.errors.forEach(error => console.log(`  ${error.type}: ${error.text}`));
    }
    
    return {
      templeRunLogs,
      fileGenerationLogs,
      previewLogs,
      errors: this.errors
    };
  }

  async checkPreviewContent() {
    console.log('👁️ Checking preview content...');
    
    try {
      // Wait for iframe to load
      await this.page.waitForSelector('iframe', { timeout: 10000 });
      
      // Get iframe content
      const iframe = await this.page.$('iframe');
      const frame = await iframe.contentFrame();
      
      if (frame) {
        // Check if Temple Run elements are present
        const templeRunElements = await frame.$$eval('*', elements => 
          elements.some(el => 
            el.textContent?.includes('Temple Run') ||
            el.textContent?.includes('switch lanes') ||
            el.textContent?.includes('jump') ||
            el.textContent?.includes('slide')
          )
        );
        
        // Check if coin collector elements are present
        const coinCollectorElements = await frame.$$eval('*', elements => 
          elements.some(el => 
            el.textContent?.includes('Coin Collector') ||
            el.textContent?.includes('Use arrow keys or WASD')
          )
        );
        
        console.log(`🎮 Temple Run elements found: ${templeRunElements}`);
        console.log(`🪙 Coin Collector elements found: ${coinCollectorElements}`);
        
        // Get the actual text content
        const bodyText = await frame.$eval('body', el => el.textContent);
        console.log('\n📄 Preview content preview:');
        console.log(bodyText.substring(0, 500) + '...');
        
        return {
          templeRunDetected: templeRunElements,
          coinCollectorDetected: coinCollectorElements,
          content: bodyText
        };
      } else {
        console.log('❌ Could not access iframe content');
        return null;
      }
    } catch (error) {
      console.error('❌ Failed to check preview content:', error.message);
      return null;
    }
  }

  async checkProjectFiles() {
    console.log('📁 Checking project files...');
    
    try {
      // Look for file manager or file list
      const fileElements = await this.page.$$eval('[class*="file"], [class*="File"]', elements => 
        elements.map(el => el.textContent).filter(text => text && text.trim())
      );
      
      console.log(`📁 Found ${fileElements.length} file-related elements`);
      if (fileElements.length > 0) {
        console.log('📄 File elements:');
        fileElements.slice(0, 10).forEach(file => console.log(`  - ${file}`));
      }
      
      return fileElements;
    } catch (error) {
      console.error('❌ Failed to check project files:', error.message);
      return [];
    }
  }

  async generateReport() {
    console.log('\n📋 Generating Debug Report...');
    
    const analysis = await this.analyzeConsoleLogs();
    const previewContent = await this.checkPreviewContent();
    const projectFiles = await this.checkProjectFiles();
    
    const report = {
      timestamp: new Date().toISOString(),
      analysis,
      previewContent,
      projectFiles,
      allConsoleLogs: this.consoleLogs,
      errors: this.errors
    };
    
    // Save report to file
    fs.writeFileSync('temple-run-debug-report.json', JSON.stringify(report, null, 2));
    console.log('💾 Debug report saved to temple-run-debug-report.json');
    
    return report;
  }

  async cleanup() {
    if (this.browser) {
      await this.browser.close();
      console.log('🧹 Browser closed');
    }
  }

  async run() {
    try {
      console.log('🎯 Starting Temple Run Debug Test\n');
      
      await this.initialize();
      
      const navigated = await this.navigateToDreamBuild();
      if (!navigated) return;
      
      const promptFound = await this.waitForAIPrompt();
      if (!promptFound) return;
      
      const requested = await this.requestTempleRun();
      if (!requested) return;
      
      const generated = await this.waitForGeneration();
      if (!generated) {
        console.log('⚠️ Generation may not have completed, but continuing analysis...');
      }
      
      const report = await this.generateReport();
      
      // Summary
      console.log('\n🎯 SUMMARY:');
      console.log(`🎮 Temple Run logs found: ${report.analysis.templeRunLogs.length}`);
      console.log(`👁️ Preview debug logs found: ${report.analysis.previewLogs.length}`);
      console.log(`📁 File generation logs: ${report.analysis.fileGenerationLogs.length}`);
      console.log(`❌ Errors encountered: ${report.errors.length}`);
      
      if (report.previewContent) {
        console.log(`🎮 Temple Run detected in preview: ${report.previewContent.templeRunDetected}`);
        console.log(`🪙 Coin Collector detected in preview: ${report.previewContent.coinCollectorDetected}`);
      }
      
      if (report.errors.length > 0) {
        console.log('\n❌ ERRORS FOUND:');
        report.errors.forEach(error => console.log(`  - ${error.text}`));
      }
      
      console.log('\n✅ Debug test completed!');
      
    } catch (error) {
      console.error('💥 Debug test failed:', error);
    } finally {
      await this.cleanup();
    }
  }
}

// Run the debugger
const templeRunDebugger = new TempleRunDebugger();
templeRunDebugger.run().catch(console.error);
