const puppeteer = require('puppeteer');

async function testUserExperience() {
  console.log('🔍 Testing User Experience - Visual Verification');
  console.log('================================================');
  
  let browser;
  try {
    browser = await puppeteer.launch({
      headless: false,
      defaultViewport: { width: 1400, height: 900 },
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    
    // Navigate to the production site
    console.log('🌐 Navigating to production site...');
    await page.goto('https://dreambuild-2024-app.web.app/ai-builder', { 
      waitUntil: 'networkidle2',
      timeout: 30000 
    });

    await page.waitForTimeout(5000);

    console.log('\n📋 Testing User Experience:');
    
    // Check initial state
    const initialCheck = await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const modelButton = buttons.find(btn => btn.title === 'Select AI Model');
      return {
        found: !!modelButton,
        text: modelButton ? modelButton.textContent.trim() : 'Not found',
        visible: modelButton ? modelButton.offsetParent !== null : false,
        style: modelButton ? window.getComputedStyle(modelButton).display : 'none'
      };
    });
    
    console.log(`   📊 Initial button state:`);
    console.log(`      Found: ${initialCheck.found ? '✅ Yes' : '❌ No'}`);
    console.log(`      Text: "${initialCheck.text}"`);
    console.log(`      Visible: ${initialCheck.visible ? '✅ Yes' : '❌ No'}`);
    console.log(`      Display: ${initialCheck.style}`);
    
    // Test model selection with visual verification
    console.log('\n   🎯 Testing CodeLlama 7B Selection:');
    
    // Click to open modal
    await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const modelButton = buttons.find(btn => btn.title === 'Select AI Model');
      if (modelButton) {
        modelButton.click();
      }
    });
    
    await page.waitForTimeout(2000);
    
    // Select CodeLlama 7B
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
    
    await page.waitForTimeout(3000);
    
    // Check button text after selection
    const afterSelectionCheck = await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const modelButton = buttons.find(btn => btn.title === 'Select AI Model');
      return {
        found: !!modelButton,
        text: modelButton ? modelButton.textContent.trim() : 'Not found',
        visible: modelButton ? modelButton.offsetParent !== null : false,
        style: modelButton ? window.getComputedStyle(modelButton).display : 'none',
        innerHTML: modelButton ? modelButton.innerHTML : 'none'
      };
    });
    
    console.log(`   📊 After CodeLlama 7B selection:`);
    console.log(`      Found: ${afterSelectionCheck.found ? '✅ Yes' : '❌ No'}`);
    console.log(`      Text: "${afterSelectionCheck.text}"`);
    console.log(`      Visible: ${afterSelectionCheck.visible ? '✅ Yes' : '❌ No'}`);
    console.log(`      Display: ${afterSelectionCheck.style}`);
    console.log(`      InnerHTML: "${afterSelectionCheck.innerHTML}"`);
    
    // Check if text contains CodeLlama
    const containsCodeLlama = afterSelectionCheck.text.includes('CodeLlama 7B');
    console.log(`      ${containsCodeLlama ? '✅' : '❌'} Contains CodeLlama 7B: ${containsCodeLlama ? 'Yes' : 'No'}`);
    
    // Test another model
    console.log('\n   🎯 Testing StarCoder 15B Selection:');
    
    // Click to open modal again
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
    
    await page.waitForTimeout(3000);
    
    // Check button text after second selection
    const secondSelectionCheck = await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const modelButton = buttons.find(btn => btn.title === 'Select AI Model');
      return {
        found: !!modelButton,
        text: modelButton ? modelButton.textContent.trim() : 'Not found',
        visible: modelButton ? modelButton.offsetParent !== null : false
      };
    });
    
    console.log(`   📊 After StarCoder 15B selection:`);
    console.log(`      Found: ${secondSelectionCheck.found ? '✅ Yes' : '❌ No'}`);
    console.log(`      Text: "${secondSelectionCheck.text}"`);
    console.log(`      Visible: ${secondSelectionCheck.visible ? '✅ Yes' : '❌ No'}`);
    
    const containsStarCoder = secondSelectionCheck.text.includes('StarCoder 15B');
    console.log(`      ${containsStarCoder ? '✅' : '❌'} Contains StarCoder 15B: ${containsStarCoder ? 'Yes' : 'No'}`);
    
    // Take screenshot
    await page.screenshot({ 
      path: 'dreambuild-user-experience-test.png',
      fullPage: true 
    });
    console.log('\n📸 Screenshot saved as dreambuild-user-experience-test.png');

    // Summary
    console.log('\n🎯 USER EXPERIENCE TEST SUMMARY:');
    console.log('=================================');
    console.log(`✅ Initial state: "${initialCheck.text}"`);
    console.log(`✅ After CodeLlama: "${afterSelectionCheck.text}"`);
    console.log(`✅ After StarCoder: "${secondSelectionCheck.text}"`);
    console.log(`✅ CodeLlama update: ${containsCodeLlama ? 'Working' : 'Failed'}`);
    console.log(`✅ StarCoder update: ${containsStarCoder ? 'Working' : 'Failed'}`);
    
    if (containsCodeLlama && containsStarCoder) {
      console.log('\n🎉 USER EXPERIENCE CONFIRMED WORKING!');
      console.log('   • Button text updates are visible');
      console.log('   • Model selections work correctly');
      console.log('   • The AI model selector is functioning properly');
      console.log('   • If you see "Auto" still, try refreshing the page');
    } else {
      console.log('\n❌ USER EXPERIENCE ISSUE DETECTED');
      console.log('   • Button text may not be updating visually');
      console.log('   • There might be a rendering issue');
      console.log('   • Check browser console for any errors');
    }

  } catch (error) {
    console.error('❌ User experience test failed:', error);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

testUserExperience().catch(console.error);
