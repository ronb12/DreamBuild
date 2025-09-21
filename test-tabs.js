#!/usr/bin/env node

import puppeteer from 'puppeteer';

class TabDebugger {
  constructor() {
    this.browser = null;
    this.page = null;
  }

  async initialize() {
    console.log('🚀 Initializing Tab Debug Test...');
    
    this.browser = await puppeteer.launch({
      headless: false,
      defaultViewport: { width: 1280, height: 720 },
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    this.page = await this.browser.newPage();
    console.log('✅ Browser initialized');
  }

  async debugTabs() {
    console.log('🌐 Navigating to DreamBuild...');
    
    try {
      await this.page.goto('https://dreambuild-2024-app.web.app/ai-builder', {
        waitUntil: 'networkidle2',
        timeout: 30000
      });
      
      console.log('✅ Successfully navigated to DreamBuild');
      
      // Wait for page to load
      await this.page.waitForTimeout(3000);
      
      // Find all buttons with tab-like content
      const allButtons = await this.page.$$eval('button', buttons => 
        buttons.map(btn => ({
          text: btn.textContent?.trim(),
          className: btn.className,
          hasPrimary: btn.className.includes('bg-primary'),
          hasActive: btn.className.includes('active') || btn.className.includes('primary')
        }))
      );
      
      console.log(`📑 Found ${allButtons.length} buttons:`);
      allButtons.forEach((btn, i) => {
        console.log(`  ${i + 1}. "${btn.text}" - active: ${btn.hasActive} - primary: ${btn.hasPrimary}`);
      });
      
      // Find tabs specifically
      const tabs = await this.page.$$eval('[class*="tab"], button[class*="bg-"], button[class*="primary"]', elements => 
        elements.map(el => ({
          tagName: el.tagName,
          text: el.textContent?.trim(),
          className: el.className,
          isActive: el.className.includes('bg-primary') || el.className.includes('primary')
        }))
      );
      
      console.log(`\n📑 Found ${tabs.length} tab-like elements:`);
      tabs.forEach((tab, i) => {
        console.log(`  ${i + 1}. ${tab.tagName} - "${tab.text}" - active: ${tab.isActive}`);
      });
      
      // Look for preview-related text
      const previewElements = await this.page.$$eval('*', elements => 
        elements.filter(el => 
          el.textContent?.includes('Preview') || 
          el.textContent?.includes('preview') ||
          el.textContent?.includes('Live') ||
          el.textContent?.includes('Eye')
        ).map(el => ({
          tagName: el.tagName,
          text: el.textContent?.trim(),
          className: el.className
        }))
      );
      
      console.log(`\n👁️ Found ${previewElements.length} preview-related elements:`);
      previewElements.forEach((el, i) => {
        console.log(`  ${i + 1}. ${el.tagName} - "${el.text}"`);
      });
      
      // Try to find and click any preview-related button
      const previewButton = await this.page.$x("//button[contains(text(), 'Preview') or contains(text(), 'Live') or contains(text(), 'Eye')]");
      
      if (previewButton.length > 0) {
        console.log(`\n👁️ Found ${previewButton.length} preview buttons, clicking first one...`);
        await previewButton[0].click();
        console.log('✅ Clicked preview button');
        
        // Wait and check for iframe
        await this.page.waitForTimeout(3000);
        const iframeExists = await this.page.$('iframe');
        console.log(`📱 Iframe exists after clicking: ${!!iframeExists}`);
        
        if (iframeExists) {
          const iframe = await this.page.$('iframe');
          const frame = await iframe.contentFrame();
          
          if (frame) {
            const bodyText = await frame.$eval('body', el => el.textContent);
            console.log('📄 Iframe content:');
            console.log(bodyText.substring(0, 500));
          }
        }
      } else {
        console.log('\n❌ No preview buttons found');
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
      await this.debugTabs();
    } catch (error) {
      console.error('💥 Test failed:', error);
    } finally {
      await this.cleanup();
    }
  }
}

// Run the test
const tabDebugger = new TabDebugger();
tabDebugger.run().catch(console.error);
