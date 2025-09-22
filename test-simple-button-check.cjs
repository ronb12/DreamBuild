const puppeteer = require('puppeteer');

async function testSimpleButtonCheck() {
  console.log('🔍 Testing Simple Button Text Check');
  console.log('===================================');
  
  let browser;
  try {
    browser = await puppeteer.launch({
      headless: false,
      defaultViewport: { width: 1400, height: 900 },
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    
    // Navigate to the application
    console.log('🌐 Navigating to AI Builder...');
    await page.goto('http://localhost:3001/ai-builder', { 
      waitUntil: 'networkidle2',
      timeout: 30000 
    });

    await page.waitForTimeout(5000);

    console.log('\n📋 Testing Simple Button Text Check:');
    
    // Check initial button text
    const initialCheck = await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const modelButton = buttons.find(btn => btn.title === 'Select AI Model');
      return {
        found: !!modelButton,
        text: modelButton ? modelButton.textContent.trim() : 'Not found'
      };
    });
    
    console.log(`   📊 Initial button text: "${initialCheck.text}"`);
    
    // Open modal and select CodeLlama 7B
    console.log('\n   🎯 Selecting CodeLlama 7B:');
    
    // Click the model button to open modal
    await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const modelButton = buttons.find(btn => btn.title === 'Select AI Model');
      if (modelButton) {
        modelButton.click();
      }
    });
    
    await page.waitForTimeout(2000);
    
    // Select CodeLlama 7B from modal
    await page.evaluate(() => {
      const modalContainer = document.querySelector('.fixed.inset-0.z-\\[999999\\]');
      if (modalContainer) {
        const modelButtons = modalContainer.querySelectorAll('button');
        const codeLlamaButton = Array.from(modelButtons).find(btn => 
          btn.textContent.includes('CodeLlama 7B')
        );
        if (codeLlamaButton) {
          codeLlamaButton.click();
        }
      }
    });
    
    await page.waitForTimeout(2000);
    
    // Check button text after selection
    const afterSelectionCheck = await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const modelButton = buttons.find(btn => btn.title === 'Select AI Model');
      return {
        found: !!modelButton,
        text: modelButton ? modelButton.textContent.trim() : 'Not found'
      };
    });
    
    console.log(`   📊 Button text after selection: "${afterSelectionCheck.text}"`);
    
    // Check if it contains CodeLlama 7B
    const containsCodeLlama = afterSelectionCheck.text.includes('CodeLlama 7B');
    console.log(`   ${containsCodeLlama ? '✅' : '❌'} Contains CodeLlama 7B: ${containsCodeLlama ? 'Yes' : 'No'}`);
    
    // Try another model selection - StarCoder 15B
    console.log('\n   🎯 Selecting StarCoder 15B:');
    
    // Click the model button again
    await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const modelButton = buttons.find(btn => btn.title === 'Select AI Model');
      if (modelButton) {
        modelButton.click();
      }
    });
    
    await page.waitForTimeout(2000);
    
    // Select StarCoder 15B
    await page.evaluate(() => {
      const modalContainer = document.querySelector('.fixed.inset-0.z-\\[999999\\]');
      if (modalContainer) {
        const modelButtons = modalContainer.querySelectorAll('button');
        const starCoderButton = Array.from(modelButtons).find(btn => 
          btn.textContent.includes('StarCoder 15B')
        );
        if (starCoderButton) {
          starCoderButton.click();
        }
      }
    });
    
    await page.waitForTimeout(2000);
    
    // Check button text after second selection
    const secondSelectionCheck = await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const modelButton = buttons.find(btn => btn.title === 'Select AI Model');
      return {
        found: !!modelButton,
        text: modelButton ? modelButton.textContent.trim() : 'Not found'
      };
    });
    
    console.log(`   📊 Button text after second selection: "${secondSelectionCheck.text}"`);
    
    // Check if it contains StarCoder 15B
    const containsStarCoder = secondSelectionCheck.text.includes('StarCoder 15B');
    console.log(`   ${containsStarCoder ? '✅' : '❌'} Contains StarCoder 15B: ${containsStarCoder ? 'Yes' : 'No'}`);
    
    // Take screenshot
    await page.screenshot({ 
      path: 'dreambuild-simple-button-check-test.png',
      fullPage: true 
    });
    console.log('\n📸 Screenshot saved as dreambuild-simple-button-check-test.png');

    // Summary
    console.log('\n🎯 SIMPLE BUTTON CHECK TEST SUMMARY:');
    console.log('====================================');
    console.log(`✅ Initial button: "${initialCheck.text}"`);
    console.log(`✅ After CodeLlama selection: "${afterSelectionCheck.text}"`);
    console.log(`✅ After StarCoder selection: "${secondSelectionCheck.text}"`);
    console.log(`✅ CodeLlama update: ${containsCodeLlama ? 'Working' : 'Failed'}`);
    console.log(`✅ StarCoder update: ${containsStarCoder ? 'Working' : 'Failed'}`);
    
    if (containsCodeLlama && containsStarCoder) {
      console.log('\n🎉 BUTTON TEXT IS UPDATING CORRECTLY!');
      console.log('   • Model selection is working');
      console.log('   • Button text updates properly');
      console.log('   • State management is correct');
    } else {
      console.log('\n❌ BUTTON TEXT IS NOT UPDATING');
      console.log('   • There may be a React rendering issue');
      console.log('   • The state might not be updating');
      console.log('   • Component may need to be re-rendered');
    }

  } catch (error) {
    console.error('❌ Simple button check test failed:', error);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

testSimpleButtonCheck().catch(console.error);
