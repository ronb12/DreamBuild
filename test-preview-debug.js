#!/usr/bin/env node

import puppeteer from 'puppeteer';

class PreviewDebugger {
  constructor() {
    this.browser = null;
    this.page = null;
    this.consoleLogs = [];
  }

  async initialize() {
    console.log('🚀 Initializing Preview Debug Test...');
    
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
      
      // Log preview-related messages immediately
      if (logEntry.text.includes('Preview Debug') || 
          logEntry.text.includes('createReactPreview') ||
          logEntry.text.includes('GameApp') ||
          logEntry.text.includes('GameComponent')) {
        console.log(`📱 ${logEntry.type.toUpperCase()}: ${logEntry.text}`);
      }
    });

    console.log('✅ Browser initialized');
  }

  async navigateAndTest() {
    console.log('🌐 Navigating to DreamBuild...');
    
    try {
      await this.page.goto('https://dreambuild-2024-app.web.app/ai-builder', {
        waitUntil: 'networkidle2',
        timeout: 30000
      });
      
      console.log('✅ Successfully navigated to DreamBuild');
      
      // Wait for AI prompt
      await this.page.waitForSelector('textarea', { timeout: 15000 });
      console.log('✅ AI prompt found');
      
      // Request Temple Run
      const textarea = await this.page.$('textarea');
      await textarea.click();
      await textarea.evaluate(el => el.value = '');
      await textarea.type('clone temple run');
      await textarea.press('Enter');
      console.log('✅ Requested Temple Run');
      
      // Wait for generation
      await this.page.waitForTimeout(10000);
      console.log('✅ Waited for generation');
      
      // Check if preview area exists
      const previewExists = await this.page.$('[class*="preview"], [class*="Preview"], iframe');
      console.log(`📱 Preview area exists: ${!!previewExists}`);
      
      if (previewExists) {
        // Check if iframe exists
        const iframeExists = await this.page.$('iframe');
        console.log(`📱 Iframe exists: ${!!iframeExists}`);
        
        if (iframeExists) {
          // Try to access iframe content
          try {
            const iframe = await this.page.$('iframe');
            const frame = await iframe.contentFrame();
            
            if (frame) {
              console.log('✅ Iframe content accessible');
              
              // Check what's in the iframe
              const bodyText = await frame.$eval('body', el => el.textContent);
              console.log('📄 Iframe content preview:');
              console.log(bodyText.substring(0, 200) + '...');
              
              // Check for specific elements
              const hasTempleRun = bodyText.includes('Temple Run');
              const hasCoinCollector = bodyText.includes('Coin Collector');
              
              console.log(`🎮 Contains "Temple Run": ${hasTempleRun}`);
              console.log(`🪙 Contains "Coin Collector": ${hasCoinCollector}`);
            } else {
              console.log('❌ Iframe content not accessible');
            }
          } catch (error) {
            console.log(`❌ Error accessing iframe: ${error.message}`);
          }
        }
      }
      
      // Check project files in the UI
      const fileElements = await this.page.$$eval('[class*="file"], [class*="File"]', elements => 
        elements.map(el => el.textContent).filter(text => text && text.trim())
      );
      
      console.log(`📁 Found ${fileElements.length} file elements:`);
      fileElements.slice(0, 10).forEach(file => console.log(`  - ${file}`));
      
      // Check for specific Temple Run files
      const hasGameApp = fileElements.some(file => file.includes('GameApp'));
      const hasTempleRunUI = fileElements.some(file => file.includes('TempleRunUI'));
      const hasRunnerPlayer = fileElements.some(file => file.includes('RunnerPlayer'));
      
      console.log(`🎮 Has GameApp file: ${hasGameApp}`);
      console.log(`🎮 Has TempleRunUI file: ${hasTempleRunUI}`);
      console.log(`🎮 Has RunnerPlayer file: ${hasRunnerPlayer}`);
      
      return true;
    } catch (error) {
      console.error('❌ Test failed:', error.message);
      return false;
    }
  }

  async analyzeLogs() {
    console.log('\n🔍 Analyzing console logs...');
    
    const previewLogs = this.consoleLogs.filter(log => 
      log.text.includes('Preview') || 
      log.text.includes('createReactPreview') ||
      log.text.includes('GameApp') ||
      log.text.includes('GameComponent')
    );
    
    const fileLogs = this.consoleLogs.filter(log => 
      log.text.includes('Adding file') ||
      log.text.includes('Updating file') ||
      log.text.includes('Project files')
    );
    
    console.log(`📱 Preview-related logs: ${previewLogs.length}`);
    console.log(`📁 File-related logs: ${fileLogs.length}`);
    
    if (previewLogs.length > 0) {
      console.log('\n📱 Preview Logs:');
      previewLogs.forEach(log => console.log(`  ${log.type}: ${log.text.substring(0, 100)}...`));
    }
    
    if (fileLogs.length > 0) {
      console.log('\n📁 File Logs (first 5):');
      fileLogs.slice(0, 5).forEach(log => console.log(`  ${log.type}: ${log.text.substring(0, 100)}...`));
    }
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
      await this.navigateAndTest();
      await this.analyzeLogs();
    } catch (error) {
      console.error('💥 Test failed:', error);
    } finally {
      await this.cleanup();
    }
  }
}

// Run the test
const previewDebugger = new PreviewDebugger();
previewDebugger.run().catch(console.error);
