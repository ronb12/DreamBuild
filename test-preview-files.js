#!/usr/bin/env node

import puppeteer from 'puppeteer';

class PreviewFilesTest {
  constructor() {
    this.browser = null;
    this.page = null;
    this.consoleLogs = [];
  }

  async initialize() {
    console.log('🚀 Initializing Preview Files Test...');
    
    this.browser = await puppeteer.launch({
      headless: false,
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
      
      // Log all preview-related messages
      if (logEntry.text.includes('Preview') || 
          logEntry.text.includes('updatePreview') ||
          logEntry.text.includes('useEffect') ||
          logEntry.text.includes('currentProject') ||
          logEntry.text.includes('files')) {
        console.log(`📱 ${logEntry.type.toUpperCase()}: ${logEntry.text}`);
      }
    });

    console.log('✅ Browser initialized');
  }

  async testPreviewFiles() {
    console.log('🌐 Navigating to DreamBuild...');
    
    try {
      await this.page.goto('https://dreambuild-2024-app.web.app/ai-builder', {
        waitUntil: 'networkidle2',
        timeout: 30000
      });
      
      console.log('✅ Successfully navigated to DreamBuild');
      
      // Wait for page to load
      await this.page.waitForTimeout(3000);
      
      // Switch to Preview tab first
      console.log('\n👁️ Switching to Preview tab...');
      const previewButton = await this.page.evaluateHandle(() => {
        const buttons = Array.from(document.querySelectorAll('button'));
        return buttons.find(btn => btn.textContent?.includes('Live Preview'));
      });
      
      if (previewButton) {
        await previewButton.click();
        console.log('✅ Clicked Preview tab');
        
        // Wait for tab switch
        await this.page.waitForTimeout(2000);
      }
      
      // Now request Temple Run
      console.log('\n🎮 STEP 1: Requesting Temple Run...');
      const promptInput = await this.page.$('textarea, input[type="text"], [contenteditable="true"]');
      if (promptInput) {
        await promptInput.click();
        await promptInput.type('clone temple run');
        
        // Press Enter to submit
        await promptInput.press('Enter');
        console.log('✅ Pressed Enter to submit');
        
        // Wait for generation
        console.log('⏳ Waiting for generation...');
        await this.page.waitForTimeout(10000);
        
        // Check for preview-related logs
        console.log('\n🔍 STEP 2: Checking for preview logs...');
        const previewLogs = this.consoleLogs.filter(log => 
          log.text.includes('Preview') ||
          log.text.includes('updatePreview') ||
          log.text.includes('useEffect') ||
          log.text.includes('currentProject') ||
          log.text.includes('files')
        );
        
        console.log(`📱 Found ${previewLogs.length} preview-related logs:`);
        previewLogs.forEach(log => {
          console.log(`  ${log.type}: ${log.text}`);
        });
        
        if (previewLogs.length === 0) {
          console.log('❌ No preview logs found - Preview component may not be receiving file updates');
        }
        
        // Check iframe content
        console.log('\n🔍 STEP 3: Checking iframe content...');
        const iframe = await this.page.$('iframe');
        if (iframe) {
          const iframeContent = await iframe.evaluate(el => el.contentDocument?.body?.textContent || '');
          console.log(`📱 Iframe content length: ${iframeContent.length}`);
          console.log(`📱 Iframe content preview: ${iframeContent.substring(0, 100)}...`);
          
          if (iframeContent.includes('Coin Collector')) {
            console.log('❌ Iframe still shows Coin Collector instead of Temple Run');
          } else if (iframeContent.includes('Temple Run')) {
            console.log('✅ Iframe shows Temple Run game');
          } else {
            console.log('⚠️ Iframe content unclear');
          }
        } else {
          console.log('❌ No iframe found');
        }
        
      } else {
        console.log('❌ Could not find prompt input');
      }
      
      return true;
    } catch (error) {
      console.error('❌ Test failed:', error.message);
      return false;
    }
  }

  async analyzeConsoleLogs() {
    console.log('\n🔍 ANALYZING CONSOLE LOGS:');
    
    const previewLogs = this.consoleLogs.filter(log => 
      log.text.includes('Preview') ||
      log.text.includes('updatePreview') ||
      log.text.includes('useEffect') ||
      log.text.includes('currentProject') ||
      log.text.includes('files')
    );
    
    console.log(`📱 Preview-related logs: ${previewLogs.length}`);
    
    if (previewLogs.length > 0) {
      console.log('\n📱 Preview Logs:');
      previewLogs.forEach(log => console.log(`  ${log.type}: ${log.text}`));
    } else {
      console.log('\n❌ No preview-related logs found');
    }
    
    return previewLogs;
  }

  async cleanup() {
    if (this.browser) {
      await this.browser.close();
      console.log('🧹 Browser closed');
    }
  }

  async run() {
    try {
      await this.initialize();
      await this.testPreviewFiles();
      await this.analyzeConsoleLogs();
    } catch (error) {
      console.error('💥 Test failed:', error);
    } finally {
      await this.cleanup();
    }
  }
}

// Run the test
const previewFilesTest = new PreviewFilesTest();
previewFilesTest.run().catch(console.error);
