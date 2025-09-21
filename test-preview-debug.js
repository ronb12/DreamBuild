#!/usr/bin/env node

import puppeteer from 'puppeteer';

class PreviewDebugTest {
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
      
      // Log all relevant messages
      if (logEntry.text.includes('Preview') || 
          logEntry.text.includes('AIBuilder') ||
          logEntry.text.includes('RENDERED') ||
          logEntry.text.includes('Render count')) {
        console.log(`📱 ${logEntry.type.toUpperCase()}: ${logEntry.text}`);
      }
    });

    console.log('✅ Browser initialized');
  }

  async testPreviewDebug() {
    console.log('🌐 Navigating to DreamBuild...');
    
    try {
      await this.page.goto('https://dreambuild-2024-app.web.app/ai-builder', {
        waitUntil: 'networkidle2',
        timeout: 30000
      });
      
      console.log('✅ Successfully navigated to DreamBuild');
      
      // Wait for page to load
      await this.page.waitForTimeout(5000);
      
      // Check for debug elements
      console.log('\n🔍 STEP 1: Checking for debug elements...');
      const debugElements = await this.page.$$eval('*', elements => 
        elements.filter(el => {
          const textContent = el.textContent || '';
          const style = el.style ? el.style.cssText : '';
          return textContent.includes('DEBUG') || 
                 textContent.includes('RENDERED') ||
                 style.includes('background: red') ||
                 style.includes('background-color: red');
        }).map(el => ({
          tagName: el.tagName,
          className: el.className,
          id: el.id,
          textContent: el.textContent?.substring(0, 100) || '',
          style: el.style ? el.style.cssText : ''
        }))
      );
      
      console.log(`📱 Found ${debugElements.length} debug elements:`);
      debugElements.forEach((el, i) => {
        console.log(`  ${i + 1}. ${el.tagName} - class: "${el.className}" - id: "${el.id}"`);
        console.log(`     Text: "${el.textContent}"`);
        console.log(`     Style: "${el.style}"`);
      });
      
      // Check for Preview component elements
      console.log('\n🔍 STEP 2: Checking for Preview component elements...');
      const previewElements = await this.page.$$eval('*', elements => 
        elements.filter(el => {
          const textContent = el.textContent || '';
          const className = (el.className && typeof el.className === 'string') ? el.className : '';
          return textContent.includes('Live Preview') ||
                 className.includes('preview') ||
                 el.tagName.toLowerCase() === 'iframe';
        }).map(el => ({
          tagName: el.tagName,
          className: el.className,
          id: el.id,
          textContent: el.textContent?.substring(0, 100) || ''
        }))
      );
      
      console.log(`📱 Found ${previewElements.length} Preview elements:`);
      previewElements.forEach((el, i) => {
        console.log(`  ${i + 1}. ${el.tagName} - class: "${el.className}" - id: "${el.id}"`);
        console.log(`     Text: "${el.textContent}"`);
      });
      
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
      log.text.includes('AIBuilder') ||
      log.text.includes('RENDERED') ||
      log.text.includes('Render count')
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
      await this.testPreviewDebug();
      await this.analyzeConsoleLogs();
    } catch (error) {
      console.error('💥 Test failed:', error);
    } finally {
      await this.cleanup();
    }
  }
}

// Run the test
const previewDebugTest = new PreviewDebugTest();
previewDebugTest.run().catch(console.error);