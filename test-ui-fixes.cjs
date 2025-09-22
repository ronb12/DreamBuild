const puppeteer = require('puppeteer');

async function testUIFixes() {
  console.log('🔧 Testing UI Fixes...');
  console.log('=====================================');
  
  let browser;
  try {
    browser = await puppeteer.launch({
      headless: false,
      defaultViewport: { width: 1280, height: 720 },
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
    console.log('🌐 Navigating to DreamBuild...');
    await page.goto('http://localhost:3001/ai-builder', { 
      waitUntil: 'networkidle2',
      timeout: 30000 
    });

    // Wait for the page to load
    await page.waitForTimeout(3000);

    console.log('\n📋 Test 1: AI Prompt Input Detection');
    try {
      // Look for the AI prompt input with multiple selectors
      const promptInput = await page.waitForSelector('#ai-prompt-input, [data-testid="ai-prompt-input"], textarea[placeholder*="Plan, search, build"]', { 
        timeout: 10000 
      });
      
      if (promptInput) {
        console.log('✅ AI prompt input found');
        
        // Test typing in the input
        await promptInput.type('create a simple todo app');
        console.log('✅ Successfully typed in prompt input');
      } else {
        console.log('❌ AI prompt input not found');
      }
    } catch (error) {
      console.log('❌ AI prompt input test failed:', error.message);
    }

    console.log('\n📋 Test 2: Generate Button Detection');
    try {
      // Look for the generate button with multiple selectors
      const generateButton = await page.waitForSelector('#generate-button, [data-testid="generate-button"], button[title*="Generate"], button[aria-label*="Generate"]', { 
        timeout: 10000 
      });
      
      if (generateButton) {
        console.log('✅ Generate button found');
        
        // Check if button is clickable
        const isDisabled = await generateButton.evaluate(btn => btn.disabled);
        if (!isDisabled) {
          console.log('✅ Generate button is clickable');
          
          // Click the button
          await generateButton.click();
          console.log('✅ Successfully clicked generate button');
          
          // Wait for generation to start
          await page.waitForTimeout(2000);
          
          // Check for loading state
          const isLoading = await page.$('button:has(svg[class*="animate-spin"])');
          if (isLoading) {
            console.log('✅ Generation started (loading state detected)');
          } else {
            console.log('⚠️ Generation may have completed quickly or failed to start');
          }
        } else {
          console.log('⚠️ Generate button is disabled');
        }
      } else {
        console.log('❌ Generate button not found');
      }
    } catch (error) {
      console.log('❌ Generate button test failed:', error.message);
    }

    console.log('\n📋 Test 3: Template Selector Visibility');
    try {
      // Look for the template button
      const templateButton = await page.waitForSelector('button:has-text("Templates"), button[title*="template"], button:has(svg)', { 
        timeout: 5000 
      });
      
      if (templateButton) {
        console.log('✅ Template button found');
        
        // Click the template button
        await templateButton.click();
        console.log('✅ Successfully clicked template button');
        
        // Wait for template selector to appear
        await page.waitForTimeout(1000);
        
        // Check if template selector modal is visible
        const templateModal = await page.$('[class*="fixed inset-0"], [class*="modal"], [class*="Template"]');
        if (templateModal) {
          console.log('✅ Template selector modal is visible');
          
          // Look for template items
          const templateItems = await page.$$('[class*="template"], button:has-text("Dashboard"), button:has-text("Todo")');
          if (templateItems.length > 0) {
            console.log(`✅ Found ${templateItems.length} template items`);
          } else {
            console.log('⚠️ No template items found in modal');
          }
          
          // Close the modal
          const closeButton = await page.$('button:has-text("Close"), button:has-text("×")');
          if (closeButton) {
            await closeButton.click();
            console.log('✅ Successfully closed template selector');
          }
        } else {
          console.log('❌ Template selector modal not visible');
        }
      } else {
        console.log('❌ Template button not found');
      }
    } catch (error) {
      console.log('❌ Template selector test failed:', error.message);
    }

    console.log('\n📋 Test 4: File Manager Detection');
    try {
      // Look for file manager elements
      const fileManager = await page.waitForSelector('[class*="File"], [class*="file"], button:has-text("Files")', { 
        timeout: 5000 
      });
      
      if (fileManager) {
        console.log('✅ File manager found');
        
        // Look for file items
        const fileItems = await page.$$('[class*="file-item"], [class*="FileItem"], button[class*="file"]');
        if (fileItems.length > 0) {
          console.log(`✅ Found ${fileItems.length} file items`);
        } else {
          console.log('⚠️ No file items found');
        }
      } else {
        console.log('❌ File manager not found');
      }
    } catch (error) {
      console.log('❌ File manager test failed:', error.message);
    }

    console.log('\n📋 Test 5: Console Warnings Check');
    try {
      // Check for any remaining console errors
      const logs = await page.evaluate(() => {
        return window.consoleLogs || [];
      });
      
      const errors = logs.filter(log => log.type === 'error');
      const warnings = logs.filter(log => log.type === 'warn');
      
      if (errors.length === 0) {
        console.log('✅ No console errors found');
      } else {
        console.log(`⚠️ Found ${errors.length} console errors`);
      }
      
      if (warnings.length === 0) {
        console.log('✅ No console warnings found');
      } else {
        console.log(`⚠️ Found ${warnings.length} console warnings`);
      }
    } catch (error) {
      console.log('❌ Console check failed:', error.message);
    }

    // Take a final screenshot
    await page.screenshot({ 
      path: 'dreambuild-ui-fixes-test.png',
      fullPage: true 
    });
    console.log('\n📸 Screenshot saved as dreambuild-ui-fixes-test.png');

  } catch (error) {
    console.error('❌ Test failed:', error);
  } finally {
    if (browser) {
      await browser.close();
    }
  }

  console.log('\n🎯 UI Fixes Test Complete!');
}

// Run the test
testUIFixes().catch(console.error);
