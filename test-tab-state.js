#!/usr/bin/env node

import puppeteer from 'puppeteer';

class TabStateTest {
  constructor() {
    this.browser = null;
    this.page = null;
    this.consoleLogs = [];
  }

  async initialize() {
    console.log('🚀 Initializing Tab State Test...');
    
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
          logEntry.text.includes('RENDERED') ||
          logEntry.text.includes('Render count')) {
        console.log(`📱 ${logEntry.type.toUpperCase()}: ${logEntry.text}`);
      }
    });

    console.log('✅ Browser initialized');
  }

  async testTabState() {
    console.log('🌐 Navigating to DreamBuild...');
    
    try {
      await this.page.goto('https://dreambuild-2024-app.web.app/ai-builder', {
        waitUntil: 'networkidle2',
        timeout: 30000
      });
      
      console.log('✅ Successfully navigated to DreamBuild');
      
      // Wait for page to load
      await this.page.waitForTimeout(3000);
      
      // Check initial tab state
      console.log('\n🔍 STEP 1: Checking initial tab state...');
      const initialTabs = await this.page.$$eval('button', buttons => 
        buttons.filter(btn => {
          const text = btn.textContent || '';
          return text.includes('Code Editor') || text.includes('Live Preview') || text.includes('Terminal') || text.includes('Advanced Workspace');
        }).map(btn => ({
          text: btn.textContent,
          className: btn.className,
          disabled: btn.disabled
        }))
      );
      
      console.log(`📱 Found ${initialTabs.length} tab buttons:`);
      initialTabs.forEach((tab, i) => {
        console.log(`  ${i + 1}. "${tab.text}" - class: "${tab.className}" - disabled: ${tab.disabled}`);
      });
      
      // Click Live Preview tab
      console.log('\n👁️ STEP 2: Clicking Live Preview tab...');
      const previewButton = await this.page.evaluateHandle(() => {
        const buttons = Array.from(document.querySelectorAll('button'));
        return buttons.find(btn => btn.textContent?.includes('Live Preview'));
      });
      
      if (previewButton) {
        await previewButton.asElement().click();
        console.log('✅ Clicked Live Preview button');
        
        // Wait for tab switch
        await this.page.waitForTimeout(3000);
        
        // Check tab state after click
        console.log('\n🔍 STEP 3: Checking tab state after click...');
        const afterClickTabs = await this.page.$$eval('button', buttons => 
          buttons.filter(btn => {
            const text = btn.textContent || '';
            return text.includes('Code Editor') || text.includes('Live Preview') || text.includes('Terminal') || text.includes('Advanced Workspace');
          }).map(btn => ({
            text: btn.textContent,
            className: btn.className,
            disabled: btn.disabled
          }))
        );
        
        console.log(`📱 Found ${afterClickTabs.length} tab buttons after click:`);
        afterClickTabs.forEach((tab, i) => {
          console.log(`  ${i + 1}. "${tab.text}" - class: "${tab.className}" - disabled: ${tab.disabled}`);
        });
        
        // Check if any tab is active (has bg-primary class)
        const activeTabs = afterClickTabs.filter(tab => tab.className.includes('bg-primary'));
        console.log(`📱 Active tabs: ${activeTabs.length}`);
        activeTabs.forEach(tab => {
          console.log(`  Active: "${tab.text}"`);
        });
        
        // Check for any red background elements (PreviewSimple component)
        console.log('\n🔍 STEP 4: Checking for PreviewSimple component...');
        const redElements = await this.page.$$eval('*', elements => 
          elements.filter(el => {
            const style = el.style ? el.style.cssText : '';
            const computedStyle = window.getComputedStyle(el);
            return style.includes('background: red') || 
                   style.includes('background-color: red') ||
                   computedStyle.backgroundColor === 'rgb(255, 0, 0)' ||
                   computedStyle.backgroundColor === 'red';
          }).map(el => ({
            tagName: el.tagName,
            className: el.className,
            id: el.id,
            textContent: el.textContent?.substring(0, 100) || '',
            style: el.style ? el.style.cssText : ''
          }))
        );
        
        console.log(`📱 Found ${redElements.length} red background elements:`);
        redElements.forEach((el, i) => {
          console.log(`  ${i + 1}. ${el.tagName} - class: "${el.className}" - id: "${el.id}"`);
          console.log(`     Text: "${el.textContent}"`);
          console.log(`     Style: "${el.style}"`);
        });
        
        // Check for PreviewSimple text
        console.log('\n🔍 STEP 5: Checking for PreviewSimple text...');
        const previewSimpleText = await this.page.$$eval('*', elements => 
          elements.filter(el => {
            const text = el.textContent || '';
            return text.includes('PREVIEW SIMPLE COMPONENT RENDERED');
          }).map(el => ({
            tagName: el.tagName,
            className: el.className,
            id: el.id,
            textContent: el.textContent
          }))
        );
        
        console.log(`📱 Found ${previewSimpleText.length} PreviewSimple text elements:`);
        previewSimpleText.forEach((el, i) => {
          console.log(`  ${i + 1}. ${el.tagName} - class: "${el.className}" - id: "${el.id}"`);
          console.log(`     Text: "${el.textContent}"`);
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
      await this.testTabState();
      await this.analyzeConsoleLogs();
    } catch (error) {
      console.error('💥 Test failed:', error);
    } finally {
      await this.cleanup();
    }
  }
}

// Run the test
const tabStateTest = new TabStateTest();
tabStateTest.run().catch(console.error);
