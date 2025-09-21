#!/usr/bin/env node

import puppeteer from 'puppeteer';

class UIStructureDebugger {
  constructor() {
    this.browser = null;
    this.page = null;
  }

  async initialize() {
    console.log('🚀 Initializing UI Structure Debug Test...');
    
    this.browser = await puppeteer.launch({
      headless: false,
      defaultViewport: { width: 1280, height: 720 },
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    this.page = await this.browser.newPage();
    console.log('✅ Browser initialized');
  }

  async analyzeUI() {
    console.log('🌐 Navigating to DreamBuild...');
    
    try {
      await this.page.goto('https://dreambuild-2024-app.web.app/ai-builder', {
        waitUntil: 'networkidle2',
        timeout: 30000
      });
      
      console.log('✅ Successfully navigated to DreamBuild');
      
      // Wait for page to load
      await this.page.waitForTimeout(3000);
      
      // Get all elements with common preview-related classes/IDs
      const previewElements = await this.page.$$eval('*', elements => {
        return elements
          .filter(el => {
            const className = (el.className && typeof el.className === 'string') ? el.className : '';
            const id = (el.id && typeof el.id === 'string') ? el.id : '';
            const tagName = (el.tagName && typeof el.tagName === 'string') ? el.tagName : '';
            
            return className.toLowerCase().includes('preview') ||
                   className.toLowerCase().includes('iframe') ||
                   id.toLowerCase().includes('preview') ||
                   tagName.toLowerCase() === 'iframe';
          })
          .map(el => ({
            tagName: el.tagName,
            className: el.className,
            id: el.id,
            textContent: el.textContent?.substring(0, 100) || ''
          }));
      });
      
      console.log(`📱 Found ${previewElements.length} preview-related elements:`);
      previewElements.forEach((el, i) => {
        console.log(`  ${i + 1}. ${el.tagName} - class: "${el.className}" - id: "${el.id}"`);
        if (el.textContent) {
          console.log(`     Text: "${el.textContent}"`);
        }
      });
      
      // Check for iframe elements specifically
      const iframes = await this.page.$$('iframe');
      console.log(`\n📱 Found ${iframes.length} iframe elements`);
      
      if (iframes.length > 0) {
        for (let i = 0; i < iframes.length; i++) {
          const iframe = iframes[i];
          const src = await iframe.evaluate(el => el.src);
          const srcdoc = await iframe.evaluate(el => el.srcdoc);
          
          console.log(`  Iframe ${i + 1}:`);
          console.log(`    src: "${src}"`);
          console.log(`    srcdoc length: ${srcdoc?.length || 0}`);
          
          if (srcdoc && srcdoc.length > 0) {
            console.log(`    srcdoc preview: "${srcdoc.substring(0, 200)}..."`);
          }
        }
      }
      
      // Check the overall page structure
      const mainContainers = await this.page.$$eval('*', elements => {
        return elements
          .filter(el => {
            const className = (el.className && typeof el.className === 'string') ? el.className : '';
            return className.toLowerCase().includes('main') ||
                   className.toLowerCase().includes('container') ||
                   className.toLowerCase().includes('layout') ||
                   className.toLowerCase().includes('workspace');
          })
          .map(el => ({
            tagName: el.tagName,
            className: el.className,
            id: el.id,
            children: el.children.length
          }))
          .slice(0, 10);
      });
      
      console.log(`\n🏗️ Found ${mainContainers.length} main container elements:`);
      mainContainers.forEach((el, i) => {
        console.log(`  ${i + 1}. ${el.tagName} - class: "${el.className}" - id: "${el.id}" - children: ${el.children}`);
      });
      
      // Take a screenshot for visual debugging
      await this.page.screenshot({ path: 'ui-structure-debug.png', fullPage: true });
      console.log('📸 Screenshot saved as ui-structure-debug.png');
      
      return true;
    } catch (error) {
      console.error('❌ UI analysis failed:', error.message);
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
      await this.analyzeUI();
    } catch (error) {
      console.error('💥 Test failed:', error);
    } finally {
      await this.cleanup();
    }
  }
}

// Run the test
const uiDebugger = new UIStructureDebugger();
uiDebugger.run().catch(console.error);
