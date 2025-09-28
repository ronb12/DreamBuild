import puppeteer from 'puppeteer';

class DebugAIBuilderTest {
  constructor() {
    this.browser = null;
    this.page = null;
    this.baseUrl = 'http://localhost:3000';
  }

  async init() {
    console.log('🔍 Starting AI Builder Debug Test...\n');
    
    this.browser = await puppeteer.launch({
      headless: false,
      defaultViewport: { width: 1920, height: 1080 },
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    this.page = await this.browser.newPage();
    
    // Enable console logging
    this.page.on('console', msg => {
      console.log(`📝 Console [${msg.type()}]:`, msg.text());
    });
  }

  async debugAIBuilderPage() {
    console.log('🌐 Navigating to AI Builder...');
    await this.page.goto(`${this.baseUrl}/ai-builder`);
    await new Promise(resolve => setTimeout(resolve, 5000));

    console.log('📄 Page loaded, analyzing content...');
    
    // Get page title
    const title = await this.page.title();
    console.log(`📋 Page Title: ${title}`);
    
    // Get page URL
    const url = this.page.url();
    console.log(`🔗 Current URL: ${url}`);
    
    // Check if page has any errors
    const hasErrors = await this.page.evaluate(() => {
      const errorElements = document.querySelectorAll('[class*="error"], [class*="Error"]');
      return errorElements.length > 0;
    });
    console.log(`❌ Has Error Elements: ${hasErrors}`);
    
    // Get all text content
    const pageContent = await this.page.evaluate(() => document.body.textContent);
    console.log(`📝 Page Content Length: ${pageContent.length} characters`);
    console.log(`📝 First 500 characters: ${pageContent.substring(0, 500)}`);
    
    // Look for specific AI-related content
    const hasAIContent = pageContent.toLowerCase().includes('ai') || 
                        pageContent.toLowerCase().includes('generate') ||
                        pageContent.toLowerCase().includes('code') ||
                        pageContent.toLowerCase().includes('prompt');
    console.log(`🤖 Has AI Content: ${hasAIContent}`);
    
    // Get all input elements
    const inputs = await this.page.$$('input, textarea, [contenteditable]');
    console.log(`📝 Found ${inputs.length} input elements`);
    
    for (let i = 0; i < inputs.length; i++) {
      const input = inputs[i];
      const tagName = await this.page.evaluate(el => el.tagName, input);
      const placeholder = await this.page.evaluate(el => el.placeholder || '', input);
      const className = await this.page.evaluate(el => el.className || '', input);
      const id = await this.page.evaluate(el => el.id || '', input);
      
      console.log(`  Input ${i + 1}: ${tagName}, placeholder: "${placeholder}", class: "${className}", id: "${id}"`);
    }
    
    // Get all button elements
    const buttons = await this.page.$$('button, [role="button"], input[type="button"], input[type="submit"]');
    console.log(`🔘 Found ${buttons.length} button elements`);
    
    for (let i = 0; i < buttons.length; i++) {
      const button = buttons[i];
      const text = await this.page.evaluate(el => el.textContent || el.value || '', button);
      const className = await this.page.evaluate(el => el.className || '', button);
      const id = await this.page.evaluate(el => el.id || '', button);
      
      console.log(`  Button ${i + 1}: "${text}", class: "${className}", id: "${id}"`);
    }
    
    // Get all select elements
    const selects = await this.page.$$('select, [role="combobox"], [aria-haspopup="listbox"]');
    console.log(`📋 Found ${selects.length} select/dropdown elements`);
    
    for (let i = 0; i < selects.length; i++) {
      const select = selects[i];
      const tagName = await this.page.evaluate(el => el.tagName, select);
      const className = await this.page.evaluate(el => el.className || '', select);
      const id = await this.page.evaluate(el => el.id || '', select);
      
      console.log(`  Select ${i + 1}: ${tagName}, class: "${className}", id: "${id}"`);
    }
    
    // Check for React components
    const reactElements = await this.page.$$('[data-reactroot], [data-react-helmet]');
    console.log(`⚛️ Found ${reactElements.length} React elements`);
    
    // Check for any error messages
    const errorMessages = await this.page.evaluate(() => {
      const errorSelectors = [
        '[class*="error"]',
        '[class*="Error"]',
        '[class*="fail"]',
        '[class*="Fail"]',
        '.error',
        '.Error',
        '.fail',
        '.Fail'
      ];
      
      let errors = [];
      errorSelectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
          if (el.textContent.trim()) {
            errors.push(el.textContent.trim());
          }
        });
      });
      
      return errors;
    });
    
    if (errorMessages.length > 0) {
      console.log(`❌ Error Messages Found:`);
      errorMessages.forEach((error, index) => {
        console.log(`  ${index + 1}. ${error}`);
      });
    } else {
      console.log(`✅ No error messages found`);
    }
    
    // Take a screenshot
    await this.page.screenshot({ path: './debug-aibuilder-screenshot.png', fullPage: true });
    console.log(`📸 Screenshot saved: ./debug-aibuilder-screenshot.png`);
    
    // Check if page is still loading
    const isLoading = await this.page.evaluate(() => {
      return document.readyState !== 'complete';
    });
    console.log(`⏳ Page Still Loading: ${isLoading}`);
    
    // Check for any JavaScript errors
    const jsErrors = await this.page.evaluate(() => {
      return window.errors || [];
    });
    console.log(`🚨 JavaScript Errors: ${jsErrors.length}`);
    
    return {
      title,
      url,
      hasErrors,
      hasAIContent,
      inputCount: inputs.length,
      buttonCount: buttons.length,
      selectCount: selects.length,
      reactElementCount: reactElements.length,
      errorMessages,
      isLoading,
      jsErrors
    };
  }

  async run() {
    try {
      await this.init();
      const results = await this.debugAIBuilderPage();
      
      console.log('\n📊 Debug Results Summary:');
      console.log(`  Page Title: ${results.title}`);
      console.log(`  Current URL: ${results.url}`);
      console.log(`  Has Errors: ${results.hasErrors}`);
      console.log(`  Has AI Content: ${results.hasAIContent}`);
      console.log(`  Input Elements: ${results.inputCount}`);
      console.log(`  Button Elements: ${results.buttonCount}`);
      console.log(`  Select Elements: ${results.selectCount}`);
      console.log(`  React Elements: ${results.reactElementCount}`);
      console.log(`  Error Messages: ${results.errorMessages.length}`);
      console.log(`  Still Loading: ${results.isLoading}`);
      console.log(`  JS Errors: ${results.jsErrors.length}`);
      
    } catch (error) {
      console.error('❌ Debug test failed:', error);
    } finally {
      if (this.browser) {
        await this.browser.close();
      }
    }
  }
}

// Run the debug test
const debugTest = new DebugAIBuilderTest();
debugTest.run().catch(console.error);
