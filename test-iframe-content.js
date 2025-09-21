#!/usr/bin/env node

import puppeteer from 'puppeteer';

class IframeContentTest {
  constructor() {
    this.browser = null;
    this.page = null;
    this.consoleLogs = [];
  }

  async initialize() {
    console.log('🚀 Initializing Iframe Content Test...');
    
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
      
      // Log all relevant messages
      if (logEntry.text.includes('Preview') || 
          logEntry.text.includes('RENDERING') ||
          logEntry.text.includes('FINAL GAME TYPE') ||
          logEntry.text.includes('isTempleRun') ||
          logEntry.text.includes('isCoinCollector')) {
        console.log(`📱 ${logEntry.type.toUpperCase()}: ${logEntry.text}`);
      }
    });

    console.log('✅ Browser initialized');
  }

  async testIframeContent() {
    console.log('🌐 Navigating to DreamBuild...');
    
    try {
      await this.page.goto('https://dreambuild-2024-app.web.app/ai-builder', {
        waitUntil: 'networkidle2',
        timeout: 30000
      });
      
      console.log('✅ Successfully navigated to DreamBuild');
      
      // Wait for page to load
      await this.page.waitForTimeout(3000);
      
      // Request Temple Run
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
        
        // Switch to Preview tab
        console.log('\n👁️ STEP 2: Switching to Preview tab...');
        const previewButton = await this.page.evaluateHandle(() => {
          const buttons = Array.from(document.querySelectorAll('button'));
          return buttons.find(btn => btn.textContent?.includes('Live Preview'));
        });
        
        if (previewButton) {
          await previewButton.asElement().click();
          console.log('✅ Clicked Preview tab');
          
          // Wait for preview to load
          await this.page.waitForTimeout(3000);
          
          // Check iframe content
          console.log('\n🔍 STEP 3: Analyzing iframe content...');
          const iframe = await this.page.$('iframe');
          if (iframe) {
            const iframeContent = await iframe.evaluate(el => {
              try {
                return el.contentDocument?.body?.textContent || 'no content';
              } catch (e) {
                return 'access denied';
              }
            });
            
            console.log(`📱 Iframe content length: ${iframeContent.length}`);
            console.log(`📱 Iframe content preview: ${iframeContent.substring(0, 500)}...`);
            
            // Check for specific game indicators
            const hasTempleRun = iframeContent.includes('Temple Run') || iframeContent.includes('lane') || iframeContent.includes('jump');
            const hasCoinCollector = iframeContent.includes('Coin Collector') || iframeContent.includes('collecting coins');
            
            console.log(`\n🎯 GAME DETECTION IN IFRAME:`);
            console.log(`🎮 Has Temple Run indicators: ${hasTempleRun}`);
            console.log(`🪙 Has Coin Collector indicators: ${hasCoinCollector}`);
            
            if (hasTempleRun && !hasCoinCollector) {
              console.log('✅ SUCCESS: Temple Run game is rendering correctly!');
            } else if (hasCoinCollector && !hasTempleRun) {
              console.log('⚠️ ISSUE: Coin Collector game is rendering instead of Temple Run');
            } else if (hasTempleRun && hasCoinCollector) {
              console.log('⚠️ ISSUE: Both games are rendering in the same iframe');
            } else {
              console.log('❌ ISSUE: No game is rendering in the iframe');
            }
            
          } else {
            console.log('❌ No iframe found');
          }
        }
      }
      
      return true;
    } catch (error) {
      console.error('❌ Test failed:', error.message);
      return false;
    }
  }

  async analyzeConsoleLogs() {
    console.log('\n🔍 ANALYZING CONSOLE LOGS:');
    
    const relevantLogs = this.consoleLogs.filter(log => 
      log.text.includes('Preview') || 
      log.text.includes('RENDERING') ||
      log.text.includes('FINAL GAME TYPE') ||
      log.text.includes('isTempleRun') ||
      log.text.includes('isCoinCollector')
    );
    
    console.log(`📱 Relevant logs: ${relevantLogs.length}`);
    
    if (relevantLogs.length > 0) {
      console.log('\n📱 Relevant Logs:');
      relevantLogs.forEach(log => console.log(`  ${log.type}: ${log.text}`));
    } else {
      console.log('\n❌ No relevant logs found');
    }
    
    return relevantLogs;
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
      await this.testIframeContent();
      await this.analyzeConsoleLogs();
    } catch (error) {
      console.error('💥 Test failed:', error);
    } finally {
      await this.cleanup();
    }
  }
}

// Run the test
const iframeContentTest = new IframeContentTest();
iframeContentTest.run().catch(console.error);
