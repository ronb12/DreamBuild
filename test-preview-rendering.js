#!/usr/bin/env node

import puppeteer from 'puppeteer';

class PreviewRenderingTest {
  constructor() {
    this.browser = null;
    this.page = null;
    this.consoleLogs = [];
  }

  async initialize() {
    console.log('🚀 Initializing Preview Rendering Test...');
    
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
          logEntry.text.includes('iframeRef')) {
        console.log(`📱 ${logEntry.type.toUpperCase()}: ${logEntry.text}`);
      }
    });

    console.log('✅ Browser initialized');
  }

  async testPreviewRendering() {
    console.log('🌐 Navigating to DreamBuild...');
    
    try {
      await this.page.goto('https://dreambuild-2024-app.web.app/ai-builder', {
        waitUntil: 'networkidle2',
        timeout: 30000
      });
      
      console.log('✅ Successfully navigated to DreamBuild');
      
      // Wait for page to load
      await this.page.waitForTimeout(3000);
      
      // Check if Preview component is rendered initially
      console.log('\n🔍 STEP 1: Checking initial Preview component rendering...');
      const initialPreviewElements = await this.page.$$eval('[class*="preview"], [class*="Preview"], iframe', elements => 
        elements.map(el => ({
          tagName: el.tagName,
          className: el.className,
          id: el.id
        }))
      );
      
      console.log(`📱 Initial preview elements: ${initialPreviewElements.length}`);
      initialPreviewElements.forEach((el, i) => {
        console.log(`  ${i + 1}. ${el.tagName} - class: "${el.className}" - id: "${el.id}"`);
      });
      
      // Switch to Preview tab
      console.log('\n👁️ STEP 2: Switching to Live Preview tab...');
      const previewButton = await this.page.evaluateHandle(() => {
        const buttons = Array.from(document.querySelectorAll('button'));
        return buttons.find(btn => btn.textContent?.includes('Live Preview'));
      });
      
      if (previewButton) {
        await previewButton.click();
        console.log('✅ Clicked Live Preview tab');
        
        // Wait for tab switch
        await this.page.waitForTimeout(2000);
        
        // Check if Preview component is now rendered
        console.log('\n🔍 STEP 3: Checking Preview component after tab switch...');
        const afterTabSwitchElements = await this.page.$$eval('[class*="preview"], [class*="Preview"], iframe', elements => 
          elements.map(el => ({
            tagName: el.tagName,
            className: el.className,
            id: el.id
          }))
        );
        
        console.log(`📱 After tab switch preview elements: ${afterTabSwitchElements.length}`);
        afterTabSwitchElements.forEach((el, i) => {
          console.log(`  ${i + 1}. ${el.tagName} - class: "${el.className}" - id: "${el.id}"`);
        });
        
        // Check for iframe specifically
        const iframe = await this.page.$('iframe');
        if (iframe) {
          console.log('✅ Iframe found after tab switch');
          
          // Check iframe attributes
          const iframeAttrs = await iframe.evaluate(el => ({
            src: el.src,
            srcdoc: el.srcdoc ? 'has srcdoc' : 'no srcdoc',
            sandbox: el.sandbox ? el.sandbox.value : 'no sandbox'
          }));
          
          console.log('📱 Iframe attributes:', iframeAttrs);
        } else {
          console.log('❌ No iframe found after tab switch');
        }
        
        // Check for any React components or preview-related elements
        const previewRelatedElements = await this.page.$$eval('*', elements => 
          elements.filter(el => {
            const className = (el.className && typeof el.className === 'string') ? el.className : '';
            const id = (el.id && typeof el.id === 'string') ? el.id : '';
            return className.toLowerCase().includes('preview') ||
                   id.toLowerCase().includes('preview') ||
                   el.tagName.toLowerCase() === 'iframe';
          }).map(el => ({
            tagName: el.tagName,
            className: el.className,
            id: el.id,
            textContent: el.textContent?.substring(0, 50) || ''
          }))
        );
        
        console.log(`\n📱 Found ${previewRelatedElements.length} preview-related elements:`);
        previewRelatedElements.forEach((el, i) => {
          console.log(`  ${i + 1}. ${el.tagName} - class: "${el.className}" - id: "${el.id}" - text: "${el.textContent}"`);
        });
        
      } else {
        console.log('❌ Could not find Live Preview button');
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
      log.text.includes('iframeRef')
    );
    
    console.log(`📱 Preview-related logs: ${previewLogs.length}`);
    
    if (previewLogs.length > 0) {
      console.log('\n📱 Preview Logs:');
      previewLogs.forEach(log => console.log(`  ${log.type}: ${log.text}`));
    } else {
      console.log('\n❌ No preview-related logs found - Preview component may not be rendering');
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
      await this.testPreviewRendering();
      await this.analyzeConsoleLogs();
    } catch (error) {
      console.error('💥 Test failed:', error);
    } finally {
      await this.cleanup();
    }
  }
}

// Run the test
const previewRenderingTest = new PreviewRenderingTest();
previewRenderingTest.run().catch(console.error);
