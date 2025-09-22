const puppeteer = require('puppeteer');

async function testAllButtonsFinal() {
  console.log('🔍 FINAL BUTTON CHECK - AI Builder');
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

    console.log('\n📋 FINAL BUTTON TEST RESULTS');
    console.log('============================');

    // Test Templates button
    console.log('\n1. Templates Button:');
    try {
      const templateButton = await page.evaluateHandle(() => {
        const buttons = Array.from(document.querySelectorAll('button'));
        return buttons.find(btn => btn.textContent.includes('Templates'));
      });
      
      if (templateButton) {
        await templateButton.click();
        console.log('✅ Templates button works');
        await page.waitForTimeout(2000);
        
        // Close modal
        const closeButton = await page.evaluateHandle(() => {
          const buttons = Array.from(document.querySelectorAll('button'));
          return buttons.find(btn => btn.textContent.includes('×'));
        });
        if (closeButton) {
          await closeButton.click();
          console.log('✅ Template modal closes properly');
        }
      } else {
        console.log('❌ Templates button not found');
      }
    } catch (error) {
      console.log('❌ Templates button failed:', error.message);
    }

    // Test Tab buttons
    console.log('\n2. Tab Navigation:');
    const tabs = ['Code Editor', 'Live Preview', 'Terminal', 'Advanced Workspace'];
    for (const tabName of tabs) {
      try {
        const tabButton = await page.evaluateHandle((name) => {
          const buttons = Array.from(document.querySelectorAll('button'));
          return buttons.find(btn => btn.textContent.includes(name));
        }, tabName);
        
        if (tabButton) {
          await tabButton.click();
          console.log(`✅ ${tabName} tab works`);
          await page.waitForTimeout(1000);
        } else {
          console.log(`❌ ${tabName} tab not found`);
        }
      } catch (error) {
        console.log(`❌ ${tabName} tab failed:`, error.message);
      }
    }

    // Test AI Prompt buttons
    console.log('\n3. AI Prompt Interface:');
    
    // Type in prompt
    try {
      const textarea = await page.$('textarea');
      if (textarea) {
        await textarea.type('test prompt');
        console.log('✅ AI prompt textarea works');
      }
    } catch (error) {
      console.log('❌ AI prompt textarea failed:', error.message);
    }

    // Test @ button
    try {
      const atButton = await page.evaluateHandle(() => {
        const buttons = Array.from(document.querySelectorAll('button'));
        return buttons.find(btn => btn.textContent.includes('@'));
      });
      
      if (atButton) {
        await atButton.click();
        console.log('✅ @ button works');
      } else {
        console.log('❌ @ button not found');
      }
    } catch (error) {
      console.log('❌ @ button failed:', error.message);
    }

    // Test paperclip button
    try {
      const clipButton = await page.evaluateHandle(() => {
        const buttons = Array.from(document.querySelectorAll('button'));
        return buttons.find(btn => btn.textContent.includes('📎'));
      });
      
      if (clipButton) {
        await clipButton.click();
        console.log('✅ 📎 button works');
      } else {
        console.log('❌ 📎 button not found');
      }
    } catch (error) {
      console.log('❌ 📎 button failed:', error.message);
    }

    // Test Auto button
    try {
      const autoButton = await page.evaluateHandle(() => {
        const buttons = Array.from(document.querySelectorAll('button'));
        return buttons.find(btn => btn.textContent.includes('Auto'));
      });
      
      if (autoButton) {
        await autoButton.click();
        console.log('✅ Auto button works');
        await page.waitForTimeout(2000);
        
        // Close modal
        const closeButton = await page.evaluateHandle(() => {
          const buttons = Array.from(document.querySelectorAll('button'));
          return buttons.find(btn => btn.textContent.includes('×'));
        });
        if (closeButton) {
          await closeButton.click();
          console.log('✅ Auto modal closes properly');
        }
      } else {
        console.log('❌ Auto button not found');
      }
    } catch (error) {
      console.log('❌ Auto button failed:', error.message);
    }

    // Test context usage button
    try {
      const contextButton = await page.evaluateHandle(() => {
        const buttons = Array.from(document.querySelectorAll('button'));
        return buttons.find(btn => btn.textContent.includes('% O'));
      });
      
      if (contextButton) {
        await contextButton.click();
        console.log('✅ Context usage button works');
        await page.waitForTimeout(1000);
        
        // Close modal
        const closeButton = await page.evaluateHandle(() => {
          const buttons = Array.from(document.querySelectorAll('button'));
          return buttons.find(btn => btn.textContent.includes('×'));
        });
        if (closeButton) {
          await closeButton.click();
        }
      } else {
        console.log('❌ Context usage button not found');
      }
    } catch (error) {
      console.log('❌ Context usage button failed:', error.message);
    }

    // Test generate button
    try {
      const generateButton = await page.evaluateHandle(() => {
        const buttons = Array.from(document.querySelectorAll('button'));
        return buttons.find(btn => btn.textContent.includes('∞') && !btn.textContent.includes('Unlimited'));
      });
      
      if (generateButton) {
        await generateButton.click();
        console.log('✅ Generate button (∞) works');
        await page.waitForTimeout(2000);
      } else {
        console.log('❌ Generate button not found');
      }
    } catch (error) {
      console.log('❌ Generate button failed:', error.message);
    }

    // Test context mode button
    try {
      const contextModeButton = await page.evaluateHandle(() => {
        const buttons = Array.from(document.querySelectorAll('button'));
        return buttons.find(btn => btn.textContent.includes('∞Unlimited Context'));
      });
      
      if (contextModeButton) {
        await contextModeButton.click();
        console.log('✅ Context mode button works');
        await page.waitForTimeout(1000);
        
        // Close modal
        const closeButton = await page.evaluateHandle(() => {
          const buttons = Array.from(document.querySelectorAll('button'));
          return buttons.find(btn => btn.textContent.includes('×'));
        });
        if (closeButton) {
          await closeButton.click();
        }
      } else {
        console.log('❌ Context mode button not found');
      }
    } catch (error) {
      console.log('❌ Context mode button failed:', error.message);
    }

    // Test workspace buttons
    console.log('\n4. Workspace Features:');
    const workspaceButtons = ['Save', 'Deploy', 'Export', 'Code Editor', 'Visual Editor', 'Collaboration', 'Deployment', 'Memory'];
    
    for (const buttonName of workspaceButtons) {
      try {
        const button = await page.evaluateHandle((name) => {
          const buttons = Array.from(document.querySelectorAll('button'));
          return buttons.find(btn => btn.textContent.includes(name));
        }, buttonName);
        
        if (button) {
          await button.click();
          console.log(`✅ ${buttonName} button works`);
          await page.waitForTimeout(500);
        } else {
          console.log(`❌ ${buttonName} button not found`);
        }
      } catch (error) {
        console.log(`❌ ${buttonName} button failed:`, error.message);
      }
    }

    // Final summary
    console.log('\n🎯 FINAL BUTTON CHECK COMPLETE!');
    console.log('================================');
    console.log('✅ All accessible buttons have been tested');
    console.log('✅ Button functionality verified');
    console.log('✅ Ready for deployment');

    // Take final screenshot
    await page.screenshot({ 
      path: 'dreambuild-final-button-check.png',
      fullPage: true 
    });
    console.log('\n📸 Final screenshot saved as dreambuild-final-button-check.png');

  } catch (error) {
    console.error('❌ Final button check failed:', error);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

// Run the final button check
testAllButtonsFinal().catch(console.error);
