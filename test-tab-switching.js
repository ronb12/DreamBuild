#!/usr/bin/env node

import puppeteer from 'puppeteer';

class TabSwitchingTest {
  constructor() {
    this.browser = null;
    this.page = null;
    this.consoleLogs = [];
  }

  async initialize() {
    console.log('🚀 Initializing Tab Switching Test...');
    
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
          logEntry.text.includes('activeTab') ||
          logEntry.text.includes('Rendering')) {
        console.log(`📱 ${logEntry.type.toUpperCase()}: ${logEntry.text}`);
      }
    });

    console.log('✅ Browser initialized');
  }

  async testTabSwitching() {
    console.log('🌐 Navigating to DreamBuild...');
    
    try {
      await this.page.goto('https://dreambuild-2024-app.web.app/ai-builder', {
        waitUntil: 'networkidle2',
        timeout: 30000
      });
      
      console.log('✅ Successfully navigated to DreamBuild');
      
      // Wait for page to load
      await this.page.waitForTimeout(3000);
      
      // Check initial state
      console.log('\n🔍 STEP 1: Checking initial state...');
      const initialTabs = await this.page.$$eval('button', buttons => 
        buttons.filter(btn => btn.textContent?.includes('Live Preview')).map(btn => ({
          text: btn.textContent,
          className: btn.className,
          disabled: btn.disabled
        }))
      );
      
      console.log(`📱 Found ${initialTabs.length} Live Preview buttons:`);
      initialTabs.forEach((tab, i) => {
        console.log(`  ${i + 1}. "${tab.text}" - class: "${tab.className}" - disabled: ${tab.disabled}`);
      });
      
      // Switch to Preview tab
      console.log('\n👁️ STEP 2: Switching to Preview tab...');
      const previewButton = await this.page.evaluateHandle(() => {
        const buttons = Array.from(document.querySelectorAll('button'));
        return buttons.find(btn => btn.textContent?.includes('Live Preview'));
      });
      
      if (previewButton) {
        // Get button state before click
        const beforeClick = await previewButton.evaluate(btn => ({
          text: btn.textContent,
          className: btn.className,
          disabled: btn.disabled
        }));
        
        console.log(`📱 Before click: "${beforeClick.text}" - class: "${beforeClick.className}" - disabled: ${beforeClick.disabled}`);
        
        await previewButton.asElement().click();
        console.log('✅ Clicked Preview button');
        
        // Wait for tab switch
        await this.page.waitForTimeout(2000);
        
        // Check button state after click
        const afterClick = await previewButton.evaluate(btn => ({
          text: btn.textContent,
          className: btn.className,
          disabled: btn.disabled
        }));
        
        console.log(`📱 After click: "${afterClick.text}" - class: "${afterClick.className}" - disabled: ${afterClick.disabled}`);
        
        // Check if iframe exists
        console.log('\n🔍 STEP 3: Checking for iframe...');
        const iframe = await this.page.$('iframe');
        if (iframe) {
          console.log('✅ Iframe found');
          
          const iframeAttrs = await iframe.evaluate(el => ({
            src: el.src,
            srcdoc: el.srcdoc ? 'has srcdoc' : 'no srcdoc',
            sandbox: el.sandbox ? el.sandbox.value : 'no sandbox',
            className: el.className
          }));
          
          console.log('📱 Iframe attributes:', iframeAttrs);
          
          // Check iframe content
          const iframeContent = await iframe.evaluate(el => {
            try {
              return el.contentDocument?.body?.textContent || 'no content';
            } catch (e) {
              return 'access denied';
            }
          });
          
          console.log(`📱 Iframe content length: ${iframeContent.length}`);
          console.log(`📱 Iframe content preview: ${iframeContent.substring(0, 100)}...`);
          
        } else {
          console.log('❌ No iframe found');
        }
        
        // Check for any Preview-related elements
        console.log('\n🔍 STEP 4: Checking for Preview elements...');
        const previewElements = await this.page.$$eval('*', elements => 
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
        
        console.log(`📱 Found ${previewElements.length} preview-related elements:`);
        previewElements.forEach((el, i) => {
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
    
    const relevantLogs = this.consoleLogs.filter(log => 
      log.text.includes('Preview') || 
      log.text.includes('AIBuilder') ||
      log.text.includes('activeTab') ||
      log.text.includes('Rendering')
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
      await this.testTabSwitching();
      await this.analyzeConsoleLogs();
    } catch (error) {
      console.error('💥 Test failed:', error);
    } finally {
      await this.cleanup();
    }
  }
}

// Run the test
const tabSwitchingTest = new TabSwitchingTest();
tabSwitchingTest.run().catch(console.error);
