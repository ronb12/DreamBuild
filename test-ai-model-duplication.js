import puppeteer from 'puppeteer';

class TestAIModelDuplication {
  constructor() {
    this.browser = null;
    this.page = null;
    this.baseUrl = 'http://localhost:3000';
  }

  async init() {
    console.log('🔍 Testing AI Model Selector Duplication...\n');
    
    this.browser = await puppeteer.launch({
      headless: false,
      defaultViewport: { width: 1920, height: 1080 },
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    this.page = await this.browser.newPage();
  }

  async testDuplication() {
    await this.page.goto(`${this.baseUrl}/ai-builder`);
    await new Promise(resolve => setTimeout(resolve, 5000));

    console.log('📄 Page loaded, checking for AI model selectors...');
    
    // Look for all buttons that might be AI model selectors
    const buttons = await this.page.$$('button');
    let aiModelSelectors = [];
    
    for (let i = 0; i < buttons.length; i++) {
      const button = buttons[i];
      const text = await this.page.evaluate(el => el.textContent, button);
      
      if (text.includes('Auto Select') || text.includes('Select Model') || text.includes('AI Model') || 
          text.includes('Automatically selects') || text.includes('model') || text.includes('Model')) {
        aiModelSelectors.push({
          index: i,
          text: text,
          className: await this.page.evaluate(el => el.className, button)
        });
      }
    }
    
    console.log(`🔍 Found ${aiModelSelectors.length} AI model selector buttons:`);
    aiModelSelectors.forEach((selector, index) => {
      console.log(`  ${index + 1}. "${selector.text}" (class: "${selector.className}")`);
    });
    
    if (aiModelSelectors.length === 1) {
      console.log('✅ SUCCESS: Only one AI model selector found - duplication fixed!');
      return true;
    } else if (aiModelSelectors.length === 0) {
      console.log('⚠️ WARNING: No AI model selectors found');
      return false;
    } else {
      console.log(`❌ ISSUE: Found ${aiModelSelectors.length} AI model selectors - duplication still exists`);
      return false;
    }
  }

  async run() {
    try {
      await this.init();
      const success = await this.testDuplication();
      
      if (success) {
        console.log('\n🎉 AI Model Selector duplication has been fixed!');
      } else {
        console.log('\n⚠️ AI Model Selector duplication issue persists');
      }
      
    } catch (error) {
      console.error('❌ Test failed:', error);
    } finally {
      if (this.browser) {
        await this.browser.close();
      }
    }
  }
}

// Run the test
const test = new TestAIModelDuplication();
test.run().catch(console.error);
