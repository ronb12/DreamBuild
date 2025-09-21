#!/usr/bin/env node

import puppeteer from 'puppeteer';

class JSErrorTest {
  constructor() {
    this.browser = null;
    this.page = null;
    this.errors = [];
  }

  async initialize() {
    console.log('🚀 Initializing JavaScript Error Test...');
    
    this.browser = await puppeteer.launch({
      headless: false,
      defaultViewport: { width: 1280, height: 720 },
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    this.page = await this.browser.newPage();
    
    // Capture console errors
    this.page.on('console', msg => {
      if (msg.type() === 'error') {
        this.errors.push({
          type: msg.type(),
          text: msg.text(),
          timestamp: new Date().toISOString()
        });
        console.log(`❌ ERROR: ${msg.text()}`);
      }
    });

    // Capture page errors
    this.page.on('pageerror', error => {
      this.errors.push({
        type: 'pageerror',
        text: error.message,
        timestamp: new Date().toISOString()
      });
      console.log(`❌ PAGE ERROR: ${error.message}`);
    });

    console.log('✅ Browser initialized');
  }

  async testForErrors() {
    console.log('🌐 Navigating to DreamBuild...');
    
    try {
      await this.page.goto('https://dreambuild-2024-app.web.app/ai-builder', {
        waitUntil: 'networkidle2',
        timeout: 30000
      });
      
      console.log('✅ Successfully navigated to DreamBuild');
      
      // Wait for page to load
      await this.page.waitForTimeout(5000);
      
      // Check for any JavaScript errors
      console.log('\n🔍 Checking for JavaScript errors...');
      
      if (this.errors.length > 0) {
        console.log(`❌ Found ${this.errors.length} JavaScript errors:`);
        this.errors.forEach((error, i) => {
          console.log(`  ${i + 1}. ${error.type}: ${error.text}`);
        });
      } else {
        console.log('✅ No JavaScript errors found');
      }
      
      // Try to switch to Preview tab and check for errors
      console.log('\n👁️ Switching to Preview tab...');
      const previewButton = await this.page.evaluateHandle(() => {
        const buttons = Array.from(document.querySelectorAll('button'));
        return buttons.find(btn => btn.textContent?.includes('Live Preview'));
      });
      
      if (previewButton) {
        await previewButton.click();
        console.log('✅ Clicked Preview tab');
        
        // Wait and check for new errors
        await this.page.waitForTimeout(3000);
        
        console.log('\n🔍 Checking for errors after tab switch...');
        if (this.errors.length > 0) {
          console.log(`❌ Found ${this.errors.length} total errors:`);
          this.errors.forEach((error, i) => {
            console.log(`  ${i + 1}. ${error.type}: ${error.text}`);
          });
        } else {
          console.log('✅ No errors found after tab switch');
        }
      }
      
      return true;
    } catch (error) {
      console.error('❌ Test failed:', error.message);
      return false;
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
      await this.testForErrors();
      
      console.log(`\n🎯 SUMMARY: Found ${this.errors.length} JavaScript errors`);
      if (this.errors.length > 0) {
        console.log('❌ JavaScript errors may be preventing Preview component from working');
      } else {
        console.log('✅ No JavaScript errors - issue may be elsewhere');
      }
      
    } catch (error) {
      console.error('💥 Test failed:', error);
    } finally {
      await this.cleanup();
    }
  }
}

// Run the test
const jsErrorTest = new JSErrorTest();
jsErrorTest.run().catch(console.error);
