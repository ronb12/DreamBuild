const puppeteer = require('puppeteer');

async function testPlusDropdownDetailed() {
  console.log('🔍 Testing Plus Button Dropdown in Detail...');
  
  const browser = await puppeteer.launch({ 
    headless: false,
    defaultViewport: { width: 1920, height: 1080 },
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  try {
    const page = await browser.newPage();
    
    // Navigate to AI Builder
    console.log('📱 Navigating to DreamBuild AI Builder...');
    await page.goto('https://dreambuild-2024-app.web.app/ai-builder', { 
      waitUntil: 'networkidle2',
      timeout: 30000 
    });
    
    // Wait for page to load
    await new Promise(resolve => setTimeout(resolve, 8000));
    
    // Look for the plus button and click it
    console.log('🔍 Looking for plus button...');
    
    // Try different selectors for the plus button
    const plusButtonSelectors = [
      'button[title*="Quick Actions"]',
      'button:has-text("Quick Actions")',
      'button[aria-label*="Quick Actions"]',
      'button[data-testid*="plus"]',
      'button[data-testid*="quick"]',
      'button:has-text("+")',
      'button:has-text("Add")',
      '.plus-button',
      '[data-testid="plus-button"]'
    ];
    
    let plusButton = null;
    for (const selector of plusButtonSelectors) {
      try {
        plusButton = await page.$(selector);
        if (plusButton) {
          console.log(`✅ Found plus button with selector: ${selector}`);
          break;
        }
      } catch (e) {
        // Continue to next selector
      }
    }
    
    if (!plusButton) {
      // Try to find any button that might be the plus button
      const allButtons = await page.$$('button');
      console.log(`Found ${allButtons.length} buttons on the page`);
      
      for (let i = 0; i < allButtons.length; i++) {
        const button = allButtons[i];
        const text = await button.evaluate(el => el.textContent);
        const title = await button.evaluate(el => el.title);
        const className = await button.evaluate(el => el.className);
        
        console.log(`Button ${i}: text="${text}", title="${title}", class="${className}"`);
        
        if (text.includes('Quick Actions') || text.includes('+') || title.includes('Quick Actions')) {
          plusButton = button;
          console.log(`✅ Found plus button at index ${i}`);
          break;
        }
      }
    }
    
    if (plusButton) {
      console.log('🖱️ Clicking plus button...');
      await plusButton.click();
      
      // Wait for dropdown to appear
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Check dropdown content
      const dropdownContent = await page.evaluate(() => {
        const bodyText = document.body.textContent;
        const visibleElements = document.querySelectorAll('*:not([style*="display: none"]):not([style*="visibility: hidden"])');
        
        return {
          bodyText,
          hasGitHubIntegration: bodyText.includes('GitHub Integration'),
          hasAdvancedWorkspace: bodyText.includes('Advanced Workspace'),
          hasDebugPanel: bodyText.includes('Debug Panel'),
          hasKeyboardShortcuts: bodyText.includes('⌘G') && bodyText.includes('⌘W') && bodyText.includes('⌘B'),
          visibleElementCount: visibleElements.length,
          dropdownVisible: bodyText.includes('New Project') || bodyText.includes('Tree View') || bodyText.includes('Search Files')
        };
      });
      
      console.log('Dropdown Content Check:', dropdownContent);
      
      // Take screenshot of dropdown
      await page.screenshot({ 
        path: 'plus-dropdown-detailed-test.png',
        fullPage: true 
      });
      
      console.log('📸 Screenshot saved: plus-dropdown-detailed-test.png');
      
    } else {
      console.log('❌ Could not find plus button');
      
      // Take screenshot to see what's on the page
      await page.screenshot({ 
        path: 'plus-dropdown-detailed-test.png',
        fullPage: true 
      });
      
      console.log('📸 Screenshot saved: plus-dropdown-detailed-test.png');
    }
    
    // Overall assessment
    const assessment = await page.evaluate(() => {
      const bodyText = document.body.textContent;
      
      return {
        hasAIAssistant: bodyText.includes('AI Assistant'),
        hasWelcomeMessage: bodyText.includes('Hello! I\'m your AI coding assistant'),
        hasExamplePrompts: bodyText.includes('Try these examples:'),
        hasGitHubIntegration: bodyText.includes('GitHub Integration'),
        hasAdvancedWorkspace: bodyText.includes('Advanced Workspace'),
        hasDebugPanel: bodyText.includes('Debug Panel'),
        hasKeyboardShortcuts: bodyText.includes('⌘G') && bodyText.includes('⌘W') && bodyText.includes('⌘B'),
        totalButtons: document.querySelectorAll('button').length
      };
    });
    
    console.log('\n🎯 Detailed Assessment:');
    console.log('======================');
    console.log(`AI Assistant: ${assessment.hasAIAssistant ? '✅ WORKING' : '❌ MISSING'}`);
    console.log(`Welcome Message: ${assessment.hasWelcomeMessage ? '✅ SHOWING' : '❌ MISSING'}`);
    console.log(`Example Prompts: ${assessment.hasExamplePrompts ? '✅ SHOWING' : '❌ MISSING'}`);
    console.log(`GitHub Integration: ${assessment.hasGitHubIntegration ? '✅ ADDED' : '❌ MISSING'}`);
    console.log(`Advanced Workspace: ${assessment.hasAdvancedWorkspace ? '✅ ADDED' : '❌ MISSING'}`);
    console.log(`Debug Panel: ${assessment.hasDebugPanel ? '✅ ADDED' : '❌ MISSING'}`);
    console.log(`Keyboard Shortcuts: ${assessment.hasKeyboardShortcuts ? '✅ WORKING' : '❌ MISSING'}`);
    console.log(`Total Buttons: ${assessment.totalButtons}`);
    
    const score = [
      assessment.hasAIAssistant,
      assessment.hasWelcomeMessage,
      assessment.hasExamplePrompts,
      assessment.hasAdvancedWorkspace
    ].filter(Boolean).length;
    
    console.log(`\n🏆 Score: ${score}/4 (${Math.round((score/4)*100)}%)`);
    
    return assessment;
    
  } catch (error) {
    console.error('❌ Plus dropdown test failed:', error);
    return { error: error.message };
  } finally {
    await browser.close();
  }
}

testPlusDropdownDetailed().then(result => {
  if (result.error) {
    console.error('Plus dropdown test failed:', result.error);
  } else {
    console.log('\n🎉 Plus dropdown test completed!');
  }
}).catch(console.error);

