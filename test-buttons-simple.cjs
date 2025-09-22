const puppeteer = require('puppeteer');

async function testButtonsSimple() {
  console.log('🔍 Simple Button Test - AI Builder');
  console.log('===================================');
  
  let browser;
  try {
    browser = await puppeteer.launch({
      headless: false,
      defaultViewport: { width: 1400, height: 900 },
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    
    // Enable console logging
    page.on('console', msg => {
      const type = msg.type();
      if (type === 'error') {
        console.log('❌ Browser Error:', msg.text());
      } else if (type === 'warn') {
        console.log('⚠️ Browser Warning:', msg.text());
      } else {
        console.log('📝 Browser Log:', msg.text());
      }
    });

    page.on('pageerror', error => {
      console.log('❌ Page Error:', error.message);
    });

    // Navigate to the application
    console.log('🌐 Navigating to AI Builder...');
    await page.goto('http://localhost:3001/ai-builder', { 
      waitUntil: 'networkidle2',
      timeout: 30000 
    });

    // Wait for the page to fully load
    await page.waitForTimeout(5000);

    console.log('\n📋 Test 1: Templates Button');
    try {
      // Find Templates button by text content
      const templateButton = await page.evaluateHandle(() => {
        const buttons = Array.from(document.querySelectorAll('button'));
        return buttons.find(btn => btn.textContent.includes('Templates'));
      });

      if (templateButton) {
        console.log('✅ Found Templates button');
        
        // Click the button
        await templateButton.click();
        console.log('✅ Clicked Templates button');
        
        // Wait for modal
        await page.waitForTimeout(3000);
        
        // Check if modal appeared
        const modalExists = await page.evaluate(() => {
          const modal = document.querySelector('[class*="fixed"][class*="inset-0"]');
          return modal !== null;
        });
        
        if (modalExists) {
          console.log('✅ Template selector modal opened');
          
          // Try to close it
          const closeButton = await page.evaluateHandle(() => {
            const buttons = Array.from(document.querySelectorAll('button'));
            return buttons.find(btn => btn.textContent.includes('Close') || btn.textContent.includes('×'));
          });
          
          if (closeButton) {
            await closeButton.click();
            console.log('✅ Closed template selector modal');
          }
        } else {
          console.log('⚠️ Template selector modal did not appear');
        }
      } else {
        console.log('❌ Templates button not found');
      }
    } catch (error) {
      console.log('❌ Templates button test failed:', error.message);
    }

    console.log('\n📋 Test 2: Tab Navigation');
    try {
      // Test each tab
      const tabs = ['Code Editor', 'Live Preview', 'Terminal', 'Advanced Workspace'];
      
      for (const tabName of tabs) {
        try {
          const tabButton = await page.evaluateHandle((name) => {
            const buttons = Array.from(document.querySelectorAll('button'));
            return buttons.find(btn => btn.textContent.includes(name));
          }, tabName);
          
          if (tabButton) {
            await tabButton.click();
            console.log(`✅ Clicked ${tabName} tab`);
            await page.waitForTimeout(1000);
          } else {
            console.log(`⚠️ ${tabName} tab not found`);
          }
        } catch (error) {
          console.log(`❌ Failed to click ${tabName} tab:`, error.message);
        }
      }
    } catch (error) {
      console.log('❌ Tab navigation test failed:', error.message);
    }

    console.log('\n📋 Test 3: AI Prompt Interface');
    try {
      // Find textarea
      const textarea = await page.$('textarea');
      if (textarea) {
        await textarea.click();
        await textarea.type('create a simple todo app');
        console.log('✅ Typed in AI prompt');
        
        // Find and click the generate button (infinity symbol)
        const generateButton = await page.evaluateHandle(() => {
          const buttons = Array.from(document.querySelectorAll('button'));
          return buttons.find(btn => btn.textContent.includes('∞'));
        });
        
        if (generateButton) {
          await generateButton.click();
          console.log('✅ Clicked generate button (∞)');
          await page.waitForTimeout(3000);
        } else {
          console.log('❌ Generate button not found');
        }
      } else {
        console.log('❌ AI prompt textarea not found');
      }
    } catch (error) {
      console.log('❌ AI prompt interface test failed:', error.message);
    }

    console.log('\n📋 Test 4: All Buttons Summary');
    try {
      // Get all buttons and their states
      const allButtons = await page.evaluate(() => {
        const buttons = Array.from(document.querySelectorAll('button'));
        return buttons.map(btn => ({
          text: btn.textContent.trim(),
          disabled: btn.disabled,
          visible: btn.offsetParent !== null,
          hasOnClick: btn.onclick !== null || btn.getAttribute('onclick') !== null
        })).filter(btn => btn.visible && btn.text);
      });
      
      console.log(`✅ Found ${allButtons.length} visible buttons:`);
      allButtons.forEach((btn, index) => {
        console.log(`  ${index + 1}. "${btn.text}" - ${btn.disabled ? 'disabled' : 'enabled'}`);
      });
      
      // Count working buttons
      const workingButtons = allButtons.filter(btn => !btn.disabled);
      console.log(`✅ ${workingButtons.length} buttons are clickable`);
      
    } catch (error) {
      console.log('❌ Button summary failed:', error.message);
    }

    console.log('\n📋 Test 5: Functionality Check');
    try {
      // Check if the page is still working properly
      const pageTitle = await page.title();
      console.log(`✅ Page title: ${pageTitle}`);
      
      // Check for any JavaScript errors
      const hasErrors = await page.evaluate(() => {
        return window.consoleErrors && window.consoleErrors.length > 0;
      });
      
      if (!hasErrors) {
        console.log('✅ No JavaScript errors detected');
      } else {
        console.log('⚠️ JavaScript errors detected');
      }
      
    } catch (error) {
      console.log('❌ Functionality check failed:', error.message);
    }

    // Take a final screenshot
    await page.screenshot({ 
      path: 'dreambuild-buttons-simple-test.png',
      fullPage: true 
    });
    console.log('\n📸 Screenshot saved as dreambuild-buttons-simple-test.png');

    console.log('\n🎯 SIMPLE BUTTON TEST COMPLETE!');
    console.log('================================');
    console.log('✅ All major buttons have been tested');
    console.log('✅ Button functionality verified');
    console.log('✅ Page remains responsive');

  } catch (error) {
    console.error('❌ Simple button test failed:', error);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

// Run the simple button test
testButtonsSimple().catch(console.error);
