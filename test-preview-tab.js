#!/usr/bin/env node

import puppeteer from 'puppeteer';

class PreviewTabDebugger {
  constructor() {
    this.browser = null;
    this.page = null;
    this.consoleLogs = [];
  }

  async initialize() {
    console.log('🚀 Initializing Preview Tab Debug Test...');
    
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
          logEntry.text.includes('isTempleRun') ||
          logEntry.text.includes('isCoinCollector')) {
        console.log(`📱 ${logEntry.type.toUpperCase()}: ${logEntry.text}`);
      }
    });

    console.log('✅ Browser initialized');
  }

  async runFullTest() {
    console.log('🌐 Navigating to DreamBuild...');
    
    try {
      await this.page.goto('https://dreambuild-2024-app.web.app/ai-builder', {
        waitUntil: 'networkidle2',
        timeout: 30000
      });
      
      console.log('✅ Successfully navigated to DreamBuild');
      
      // Wait for page to load
      await this.page.waitForTimeout(3000);
      
      // Check current tab
      const currentTab = await this.page.$eval('[class*="bg-primary"]', el => el.textContent);
      console.log(`📑 Current tab: "${currentTab}"`);
      
      // Request Temple Run
      console.log('🎮 Requesting Temple Run...');
      const textarea = await this.page.$('textarea');
      await textarea.click();
      await textarea.evaluate(el => el.value = '');
      await textarea.type('clone temple run');
      await textarea.press('Enter');
      console.log('✅ Requested Temple Run');
      
      // Wait for generation
      await this.page.waitForTimeout(10000);
      console.log('✅ Waited for generation');
      
      // Switch to Preview tab
      console.log('👁️ Switching to Preview tab...');
      const previewTab = await this.page.$x("//button[contains(text(), 'Live Preview')]");
      if (previewTab.length > 0) {
        await previewTab[0].click();
        console.log('✅ Clicked Preview tab');
        
        // Wait for preview to load
        await this.page.waitForTimeout(3000);
        
        // Check if iframe exists now
        const iframeExists = await this.page.$('iframe');
        console.log(`📱 Iframe exists after tab switch: ${!!iframeExists}`);
        
        if (iframeExists) {
          // Check iframe content
          const iframe = await this.page.$('iframe');
          const frame = await iframe.contentFrame();
          
          if (frame) {
            console.log('✅ Iframe content accessible');
            
            const bodyText = await frame.$eval('body', el => el.textContent);
            console.log('📄 Iframe content preview:');
            console.log(bodyText.substring(0, 300) + '...');
            
            // Check for specific game elements
            const hasTempleRun = bodyText.includes('Temple Run');
            const hasCoinCollector = bodyText.includes('Coin Collector');
            const hasGameControls = bodyText.includes('switch lanes') || bodyText.includes('jump') || bodyText.includes('slide');
            
            console.log(`🎮 Contains "Temple Run": ${hasTempleRun}`);
            console.log(`🪙 Contains "Coin Collector": ${hasCoinCollector}`);
            console.log(`🎮 Has game controls: ${hasGameControls}`);
            
            // Check for game elements in the DOM
            const gameElements = await frame.$$eval('*', elements => 
              elements.filter(el => 
                el.textContent?.includes('Start Game') ||
                el.textContent?.includes('Score:') ||
                el.textContent?.includes('Distance:')
              ).map(el => el.textContent?.substring(0, 50))
            );
            
            console.log(`🎮 Found ${gameElements.length} game elements:`);
            gameElements.slice(0, 5).forEach(el => console.log(`  - ${el}`));
            
            return {
              templeRunDetected: hasTempleRun,
              coinCollectorDetected: hasCoinCollector,
              gameControlsDetected: hasGameControls,
              gameElements: gameElements.length
            };
          } else {
            console.log('❌ Iframe content not accessible');
          }
        } else {
          console.log('❌ No iframe found even after switching to preview tab');
        }
      } else {
        console.log('❌ Could not find Preview tab button');
      }
      
      return null;
    } catch (error) {
      console.error('❌ Test failed:', error.message);
      return null;
    }
  }

  async analyzeResults() {
    console.log('\n🔍 Analyzing results...');
    
    const previewLogs = this.consoleLogs.filter(log => 
      log.text.includes('Preview Debug') ||
      log.text.includes('createReactPreview') ||
      log.text.includes('isTempleRun') ||
      log.text.includes('isCoinCollector')
    );
    
    console.log(`📱 Preview debug logs found: ${previewLogs.length}`);
    
    if (previewLogs.length > 0) {
      console.log('\n📱 Preview Debug Logs:');
      previewLogs.forEach(log => console.log(`  ${log.type}: ${log.text}`));
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
      const results = await this.runFullTest();
      const analysis = await this.analyzeResults();
      
      console.log('\n🎯 FINAL RESULTS:');
      if (results) {
        console.log(`🎮 Temple Run detected: ${results.templeRunDetected}`);
        console.log(`🪙 Coin Collector detected: ${results.coinCollectorDetected}`);
        console.log(`🎮 Game controls detected: ${results.gameControlsDetected}`);
        console.log(`🎮 Game elements found: ${results.gameElements}`);
      } else {
        console.log('❌ No results obtained');
      }
      
      console.log(`📱 Preview debug logs: ${analysis.length}`);
      
    } catch (error) {
      console.error('💥 Test failed:', error);
    } finally {
      await this.cleanup();
    }
  }
}

// Run the test
const previewTabDebugger = new PreviewTabDebugger();
previewTabDebugger.run().catch(console.error);
