#!/usr/bin/env node

import puppeteer from 'puppeteer';

class FinalTempleRunTest {
  constructor() {
    this.browser = null;
    this.page = null;
    this.consoleLogs = [];
  }

  async initialize() {
    console.log('🚀 Initializing Final Temple Run Test...');
    
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
      
      // Log key messages
      if (logEntry.text.includes('Temple Run') || 
          logEntry.text.includes('Preview Debug') ||
          logEntry.text.includes('Game detected') ||
          logEntry.text.includes('Generated') ||
          logEntry.text.includes('Coin Collector')) {
        console.log(`📱 ${logEntry.type.toUpperCase()}: ${logEntry.text.substring(0, 150)}...`);
      }
    });

    console.log('✅ Browser initialized');
  }

  async runCompleteTest() {
    console.log('🌐 Navigating to DreamBuild...');
    
    try {
      await this.page.goto('https://dreambuild-2024-app.web.app/ai-builder', {
        waitUntil: 'networkidle2',
        timeout: 30000
      });
      
      console.log('✅ Successfully navigated to DreamBuild');
      
      // Wait for page to load
      await this.page.waitForTimeout(3000);
      
      // Step 1: Request Temple Run
      console.log('\n🎮 STEP 1: Requesting Temple Run...');
      const textarea = await this.page.$('textarea');
      await textarea.click();
      await textarea.evaluate(el => el.value = '');
      await textarea.type('clone temple run');
      await textarea.press('Enter');
      console.log('✅ Requested Temple Run');
      
      // Wait for generation
      await this.page.waitForTimeout(15000);
      console.log('✅ Waited for generation');
      
      // Step 2: Switch to Live Preview tab
      console.log('\n👁️ STEP 2: Switching to Live Preview tab...');
      
      // Find the Live Preview button by text content
      const previewButton = await this.page.evaluateHandle(() => {
        const buttons = Array.from(document.querySelectorAll('button'));
        return buttons.find(btn => btn.textContent?.includes('Live Preview'));
      });
      
      if (previewButton) {
        await previewButton.click();
        console.log('✅ Clicked Live Preview tab');
        
        // Wait for preview to load
        await this.page.waitForTimeout(5000);
        
        // Step 3: Check if iframe exists
        console.log('\n📱 STEP 3: Checking for iframe...');
        const iframeExists = await this.page.$('iframe');
        console.log(`📱 Iframe exists: ${!!iframeExists}`);
        
        if (iframeExists) {
          // Step 4: Analyze iframe content
          console.log('\n🔍 STEP 4: Analyzing iframe content...');
          const iframe = await this.page.$('iframe');
          const frame = await iframe.contentFrame();
          
          if (frame) {
            const bodyText = await frame.$eval('body', el => el.textContent);
            console.log('📄 Iframe content:');
            console.log(bodyText.substring(0, 1000) + '...');
            
            // Check for specific game indicators
            const hasTempleRun = bodyText.includes('Temple Run');
            const hasCoinCollector = bodyText.includes('Coin Collector');
            const hasGameControls = bodyText.includes('switch lanes') || bodyText.includes('jump') || bodyText.includes('slide');
            const hasStartButton = bodyText.includes('Start Game');
            const hasScore = bodyText.includes('Score:');
            
            console.log('\n🎯 GAME ANALYSIS:');
            console.log(`🎮 Contains "Temple Run": ${hasTempleRun}`);
            console.log(`🪙 Contains "Coin Collector": ${hasCoinCollector}`);
            console.log(`🎮 Has game controls: ${hasGameControls}`);
            console.log(`🎮 Has start button: ${hasStartButton}`);
            console.log(`🎮 Has score display: ${hasScore}`);
            
            // Check for game elements in DOM
            const gameElements = await frame.$$eval('*', elements => 
              elements.filter(el => 
                el.textContent?.includes('Start Game') ||
                el.textContent?.includes('Score:') ||
                el.textContent?.includes('Distance:') ||
                el.textContent?.includes('Temple Run') ||
                el.textContent?.includes('Coin Collector')
              ).map(el => ({
                tagName: el.tagName,
                text: el.textContent?.substring(0, 100),
                hasButton: el.tagName === 'BUTTON'
              }))
            );
            
            console.log(`\n🎮 Found ${gameElements.length} game elements:`);
            gameElements.slice(0, 10).forEach((el, i) => {
              console.log(`  ${i + 1}. ${el.tagName} - "${el.text}" - isButton: ${el.hasButton}`);
            });
            
            return {
              templeRunDetected: hasTempleRun,
              coinCollectorDetected: hasCoinCollector,
              gameControlsDetected: hasGameControls,
              startButtonDetected: hasStartButton,
              scoreDetected: hasScore,
              gameElementsCount: gameElements.length,
              content: bodyText
            };
          } else {
            console.log('❌ Could not access iframe content');
          }
        } else {
          console.log('❌ No iframe found in preview');
        }
      } else {
        console.log('❌ Could not find Live Preview button');
      }
      
      return null;
    } catch (error) {
      console.error('❌ Test failed:', error.message);
      return null;
    }
  }

  async analyzeConsoleLogs() {
    console.log('\n🔍 ANALYZING CONSOLE LOGS:');
    
    const templeRunLogs = this.consoleLogs.filter(log => 
      log.text.includes('Temple Run') || 
      log.text.includes('temple run')
    );
    
    const gameLogs = this.consoleLogs.filter(log => 
      log.text.includes('Game detected') ||
      log.text.includes('Game components')
    );
    
    const fileLogs = this.consoleLogs.filter(log => 
      log.text.includes('Generated') ||
      log.text.includes('Adding file')
    );
    
    const previewLogs = this.consoleLogs.filter(log => 
      log.text.includes('Preview Debug')
    );
    
    console.log(`🎮 Temple Run logs: ${templeRunLogs.length}`);
    console.log(`🎮 Game detection logs: ${gameLogs.length}`);
    console.log(`📁 File generation logs: ${fileLogs.length}`);
    console.log(`👁️ Preview debug logs: ${previewLogs.length}`);
    
    if (templeRunLogs.length > 0) {
      console.log('\n🎮 Temple Run Logs:');
      templeRunLogs.slice(0, 5).forEach(log => console.log(`  ${log.type}: ${log.text.substring(0, 100)}...`));
    }
    
    if (previewLogs.length > 0) {
      console.log('\n👁️ Preview Debug Logs:');
      previewLogs.forEach(log => console.log(`  ${log.type}: ${log.text}`));
    }
    
    return {
      templeRunLogs: templeRunLogs.length,
      gameLogs: gameLogs.length,
      fileLogs: fileLogs.length,
      previewLogs: previewLogs.length
    };
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
      const results = await this.runCompleteTest();
      const analysis = await this.analyzeConsoleLogs();
      
      console.log('\n🎯 FINAL RESULTS:');
      console.log('=' * 50);
      
      if (results) {
        console.log(`🎮 Temple Run detected in preview: ${results.templeRunDetected}`);
        console.log(`🪙 Coin Collector detected in preview: ${results.coinCollectorDetected}`);
        console.log(`🎮 Game controls detected: ${results.gameControlsDetected}`);
        console.log(`🎮 Start button detected: ${results.startButtonDetected}`);
        console.log(`🎮 Score display detected: ${results.scoreDetected}`);
        console.log(`🎮 Total game elements: ${results.gameElementsCount}`);
        
        if (results.templeRunDetected && !results.coinCollectorDetected) {
          console.log('\n✅ SUCCESS: Temple Run is being rendered correctly!');
        } else if (results.coinCollectorDetected && !results.templeRunDetected) {
          console.log('\n❌ ISSUE: Coin Collector is still being rendered instead of Temple Run');
        } else {
          console.log('\n⚠️ MIXED: Both or neither game types detected');
        }
      } else {
        console.log('❌ No preview results obtained');
      }
      
      console.log(`\n📊 Console Analysis:`);
      console.log(`🎮 Temple Run logs: ${analysis.templeRunLogs}`);
      console.log(`🎮 Game detection logs: ${analysis.gameLogs}`);
      console.log(`📁 File generation logs: ${analysis.fileLogs}`);
      console.log(`👁️ Preview debug logs: ${analysis.previewLogs}`);
      
    } catch (error) {
      console.error('💥 Test failed:', error);
    } finally {
      await this.cleanup();
    }
  }
}

// Run the test
const finalTest = new FinalTempleRunTest();
finalTest.run().catch(console.error);
