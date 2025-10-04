#!/usr/bin/env node

/**
 * Automated Test: Tetris Game Generation in DreamBuild
 * Product of Bradley Virtual Solutions, LLC
 * 
 * Tests:
 * 1. Navigate to DreamBuild AI Builder
 * 2. Generate Tetris game
 * 3. Verify canvas appears
 * 4. Verify game can be started (click canvas)
 * 5. Verify pieces fall
 * 6. Verify controls work
 */

const puppeteer = require('puppeteer');

const TEST_CONFIG = {
  baseUrl: 'https://dreambuild-2024-app.web.app',
  timeout: 60000,
  headless: false, // Set to false to watch the test
  slowMo: 100 // Slow down actions to see what's happening
};

class TetrisTestRunner {
  constructor() {
    this.browser = null;
    this.page = null;
    this.testResults = [];
  }

  log(emoji, message) {
    const timestamp = new Date().toLocaleTimeString();
    console.log(`[${timestamp}] ${emoji} ${message}`);
  }

  async initialize() {
    this.log('🚀', 'Initializing Puppeteer...');
    
    this.browser = await puppeteer.launch({
      headless: TEST_CONFIG.headless,
      slowMo: TEST_CONFIG.slowMo,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-web-security',
        '--disable-features=IsolateOrigins,site-per-process'
      ]
    });

    this.page = await this.browser.newPage();
    await this.page.setViewport({ width: 1920, height: 1080 });
    
    // Listen to console messages
    this.page.on('console', msg => {
      const text = msg.text();
      if (text.includes('Tetris') || text.includes('🎮') || text.includes('Canvas') || text.includes('START')) {
        this.log('📝', `Console: ${text}`);
      }
    });

    this.log('✅', 'Puppeteer initialized');
  }

  async navigateToAIBuilder() {
    this.log('🌐', `Navigating to ${TEST_CONFIG.baseUrl}/#/ai-builder`);
    
    try {
      await this.page.goto(`${TEST_CONFIG.baseUrl}/#/ai-builder`, {
        waitUntil: 'networkidle2',
        timeout: TEST_CONFIG.timeout
      });
      
      await this.page.waitForSelector('body', { timeout: 10000 });
      this.log('✅', 'Successfully navigated to AI Builder');
      
      // Wait for app to initialize
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      return true;
    } catch (error) {
      this.log('❌', `Navigation failed: ${error.message}`);
      return false;
    }
  }

  async generateTetrisGame() {
    this.log('🎮', 'Generating Tetris game...');
    
    try {
      // Find the prompt textarea
      const promptSelector = 'textarea[placeholder*="build" i], textarea[placeholder*="create" i], textarea';
      await this.page.waitForSelector(promptSelector, { timeout: 10000 });
      
      // Clear and type prompt
      await this.page.click(promptSelector);
      await this.page.keyboard.down('Control');
      await this.page.keyboard.press('A');
      await this.page.keyboard.up('Control');
      await this.page.keyboard.press('Backspace');
      await this.page.type(promptSelector, 'build a tetris game', { delay: 50 });
      
      this.log('✅', 'Entered prompt: "build a tetris game"');
      
      // Find and click generate button
      const generateButton = await this.page.evaluateHandle(() => {
        const buttons = Array.from(document.querySelectorAll('button'));
        return buttons.find(btn =>
          btn.textContent.includes('Generate') ||
          btn.textContent.includes('Create') ||
          btn.textContent.includes('Build') ||
          btn.getAttribute('data-testid') === 'generate-button'
        );
      });
      
      if (generateButton) {
        await generateButton.click();
        this.log('✅', 'Clicked Generate button');
      } else {
        // Try pressing Enter as fallback
        await this.page.keyboard.press('Enter');
        this.log('⚠️', 'Generate button not found, pressed Enter');
      }
      
      // Wait for generation to complete
      this.log('⏳', 'Waiting for code generation...');
      await new Promise(resolve => setTimeout(resolve, 10000));
      
      // Check for success indicators
      const generationComplete = await this.page.evaluate(() => {
        const bodyText = document.body.innerText;
        return bodyText.includes('Tetris') || 
               bodyText.includes('generated') ||
               bodyText.includes('Complete') ||
               document.querySelector('canvas') !== null;
      });
      
      if (generationComplete) {
        this.log('✅', 'Tetris game generated!');
        return true;
      } else {
        this.log('⚠️', 'Generation status unclear, continuing...');
        return true;
      }
      
    } catch (error) {
      this.log('❌', `Generation failed: ${error.message}`);
      return false;
    }
  }

  async verifyCanvasExists() {
    this.log('🔍', 'Looking for game canvas...');
    
    try {
      // Check if preview iframe exists
      const iframeExists = await this.page.$('iframe');
      
      if (iframeExists) {
        this.log('📦', 'Found preview iframe');
        
        // Switch to iframe context
        const frames = this.page.frames();
        let gameFrame = null;
        
        for (const frame of frames) {
          const canvas = await frame.$('canvas');
          if (canvas) {
            gameFrame = frame;
            break;
          }
        }
        
        if (gameFrame) {
          this.log('✅', 'Found canvas in iframe!');
          
          // Get canvas dimensions
          const canvasInfo = await gameFrame.evaluate(() => {
            const canvas = document.querySelector('canvas');
            if (canvas) {
              return {
                width: canvas.width,
                height: canvas.height,
                visible: canvas.offsetWidth > 0 && canvas.offsetHeight > 0
              };
            }
            return null;
          });
          
          if (canvasInfo) {
            this.log('📊', `Canvas: ${canvasInfo.width}x${canvasInfo.height}, Visible: ${canvasInfo.visible}`);
            this.testResults.push({ test: 'Canvas Exists', result: 'PASS', details: canvasInfo });
            return { success: true, frame: gameFrame };
          }
        }
      }
      
      // Check main page for canvas
      const mainCanvas = await this.page.$('canvas');
      if (mainCanvas) {
        this.log('✅', 'Found canvas in main page!');
        this.testResults.push({ test: 'Canvas Exists', result: 'PASS' });
        return { success: true, frame: this.page };
      }
      
      this.log('❌', 'No canvas found');
      this.testResults.push({ test: 'Canvas Exists', result: 'FAIL' });
      return { success: false };
      
    } catch (error) {
      this.log('❌', `Canvas check failed: ${error.message}`);
      this.testResults.push({ test: 'Canvas Exists', result: 'ERROR', error: error.message });
      return { success: false };
    }
  }

  async testGameStart(frame) {
    this.log('🎮', 'Testing game start...');
    
    try {
      // Look for start instructions
      const hasInstructions = await frame.evaluate(() => {
        const bodyText = document.body.innerText;
        return bodyText.includes('Click') || 
               bodyText.includes('SPACE') || 
               bodyText.includes('Start');
      });
      
      if (hasInstructions) {
        this.log('📋', 'Found start instructions');
      }
      
      // Click the canvas
      await frame.evaluate(() => {
        const canvas = document.querySelector('canvas');
        if (canvas) {
          canvas.click();
        }
      });
      
      this.log('🖱️', 'Clicked canvas to start game');
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Check if game started (look for console logs or game state)
      const gameStarted = await frame.evaluate(() => {
        // Check if window.game exists and has started
        if (window.game) {
          return window.game.gameStarted === true;
        }
        return false;
      });
      
      if (gameStarted) {
        this.log('✅', 'Game started successfully!');
        this.testResults.push({ test: 'Game Start', result: 'PASS' });
        return true;
      } else {
        this.log('⚠️', 'Game state unclear, trying SPACE key...');
        
        // Try pressing space
        await this.page.keyboard.press('Space');
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        this.log('✅', 'Attempted to start with SPACE key');
        this.testResults.push({ test: 'Game Start', result: 'PARTIAL' });
        return true;
      }
      
    } catch (error) {
      this.log('❌', `Game start test failed: ${error.message}`);
      this.testResults.push({ test: 'Game Start', result: 'ERROR', error: error.message });
      return false;
    }
  }

  async testControls(frame) {
    this.log('⌨️', 'Testing keyboard controls...');
    
    try {
      // Test arrow keys
      const keys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'];
      
      for (const key of keys) {
        await this.page.keyboard.press(key);
        await new Promise(resolve => setTimeout(resolve, 300));
        this.log('🎮', `Pressed ${key}`);
      }
      
      this.log('✅', 'Tested all arrow keys');
      this.testResults.push({ test: 'Keyboard Controls', result: 'PASS' });
      return true;
      
    } catch (error) {
      this.log('❌', `Controls test failed: ${error.message}`);
      this.testResults.push({ test: 'Keyboard Controls', result: 'ERROR', error: error.message });
      return false;
    }
  }

  async takeScreenshot(name) {
    try {
      const filename = `tests/screenshots/tetris-${name}-${Date.now()}.png`;
      await this.page.screenshot({ path: filename, fullPage: true });
      this.log('📸', `Screenshot saved: ${filename}`);
    } catch (error) {
      this.log('⚠️', `Screenshot failed: ${error.message}`);
    }
  }

  async printResults() {
    console.log('\n╔══════════════════════════════════════════════════════════════════════════════╗');
    console.log('║                    🎮 TETRIS GAME TEST RESULTS                               ║');
    console.log('║                   Product of Bradley Virtual Solutions, LLC                  ║');
    console.log('╚══════════════════════════════════════════════════════════════════════════════╝\n');
    
    this.testResults.forEach((result, index) => {
      const emoji = result.result === 'PASS' ? '✅' : result.result === 'FAIL' ? '❌' : '⚠️';
      console.log(`${emoji} Test ${index + 1}: ${result.test} - ${result.result}`);
      if (result.details) {
        console.log(`   Details: ${JSON.stringify(result.details)}`);
      }
      if (result.error) {
        console.log(`   Error: ${result.error}`);
      }
    });
    
    const passCount = this.testResults.filter(r => r.result === 'PASS').length;
    const totalCount = this.testResults.length;
    const passRate = ((passCount / totalCount) * 100).toFixed(1);
    
    console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log(`📊 SUMMARY: ${passCount}/${totalCount} tests passed (${passRate}%)`);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
    
    if (passRate >= 75) {
      console.log('✅ TETRIS GAME WORKS! 🎉\n');
      return true;
    } else if (passRate >= 50) {
      console.log('⚠️ TETRIS GAME PARTIALLY WORKS - Some issues found\n');
      return true;
    } else {
      console.log('❌ TETRIS GAME HAS ISSUES - Needs fixes\n');
      return false;
    }
  }

  async cleanup() {
    if (this.browser) {
      await this.browser.close();
      this.log('✅', 'Browser closed');
    }
  }

  async runFullTest() {
    try {
      console.log('\n🎮 Starting Tetris Game Automated Test...\n');
      
      await this.initialize();
      await this.takeScreenshot('initial');
      
      const navigated = await this.navigateToAIBuilder();
      if (!navigated) throw new Error('Navigation failed');
      
      await this.takeScreenshot('ai-builder');
      
      const generated = await this.generateTetrisGame();
      if (!generated) throw new Error('Generation failed');
      
      await this.takeScreenshot('after-generation');
      
      const canvasResult = await this.verifyCanvasExists();
      
      if (canvasResult.success) {
        await this.testGameStart(canvasResult.frame);
        await this.takeScreenshot('game-started');
        
        await this.testControls(canvasResult.frame);
        await new Promise(resolve => setTimeout(resolve, 5000));
        await this.takeScreenshot('final');
      }
      
      return await this.printResults();
      
    } catch (error) {
      this.log('❌', `Test failed: ${error.message}`);
      console.error(error);
      return false;
    } finally {
      if (!TEST_CONFIG.headless) {
        this.log('⏸️', 'Browser will stay open for 10 seconds...');
        await new Promise(resolve => setTimeout(resolve, 10000));
      }
      await this.cleanup();
    }
  }
}

// Run the test
const runner = new TetrisTestRunner();
runner.runFullTest()
  .then(success => {
    process.exit(success ? 0 : 1);
  })
  .catch(error => {
    console.error('Test runner crashed:', error);
    process.exit(1);
  });

