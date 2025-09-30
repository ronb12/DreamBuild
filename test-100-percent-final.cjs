const puppeteer = require('puppeteer');

async function test100PercentFinal() {
  console.log('🚀 Final 100% Test - Clicking Editor Tab...');
  
  const browser = await puppeteer.launch({ 
    headless: false,
    defaultViewport: { width: 1920, height: 1080 },
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  try {
    const page = await browser.newPage();
    
    // Enable console logging
    page.on('console', msg => {
      if (msg.type() === 'log' || msg.type() === 'error' || msg.type() === 'warn') {
        console.log(`[${msg.type().toUpperCase()}] ${msg.text()}`);
      }
    });
    
    // Navigate to AI Builder
    console.log('📱 Navigating to AI Builder...');
    await page.goto('https://dreambuild-2024-app.web.app/ai-builder', { 
      waitUntil: 'networkidle2',
      timeout: 30000 
    });
    
    // Wait for page to load
    await new Promise(resolve => setTimeout(resolve, 5000));
    
    // Test all features before clicking tabs
    console.log('\n🔍 Testing Features Before Tab Clicks:');
    
    const beforeTabs = await page.evaluate(() => {
      return {
        // Code Editor
        codeEditor: {
          dataTestId: !!document.querySelector('[data-testid="code-editor"]'),
          visible: document.querySelector('[data-testid="code-editor"]')?.offsetParent !== null,
          tab: Array.from(document.querySelectorAll('button')).some(b => 
            b.textContent.includes('Code Editor') || b.textContent.includes('Editor'))
        },
        
        // AI Models
        aiModels: {
          dataTestId: !!document.querySelector('[data-testid="ai-models"]'),
          visible: document.querySelector('[data-testid="ai-models"]')?.offsetParent !== null,
          text: Array.from(document.querySelectorAll('*')).some(el => 
            el.textContent.includes('CodeLlama') || el.textContent.includes('Mistral'))
        },
        
        // Web Search
        webSearch: {
          dataTestId: !!document.querySelector('[data-testid="web-search"]'),
          visible: document.querySelector('[data-testid="web-search"]')?.offsetParent !== null,
          text: Array.from(document.querySelectorAll('*')).some(el => 
            el.textContent.includes('Web Search Integration'))
        },
        
        // Generate Button
        generateButton: {
          dataTestId: !!document.querySelector('[data-testid="generate-button"]'),
          visible: document.querySelector('[data-testid="generate-button"]')?.offsetParent !== null,
          text: Array.from(document.querySelectorAll('button')).some(b => 
            b.textContent.includes('Send') || b.textContent.includes('Generate'))
        }
      };
    });
    
    console.log('Before Tab Clicks:', beforeTabs);
    
    // Click on Editor tab
    console.log('\n🔄 Clicking on Code Editor tab...');
    
    // Find and click the Editor tab
    const editorTabClicked = await page.evaluate(() => {
      const tabs = Array.from(document.querySelectorAll('button'));
      const editorTab = tabs.find(b => 
        b.textContent.includes('Code Editor') || 
        b.textContent.includes('Editor') ||
        b.textContent.includes('Code')
      );
      
      if (editorTab) {
        editorTab.click();
        return true;
      }
      return false;
    });
    
    console.log('Editor tab clicked:', editorTabClicked);
    
    // Wait for tab switch
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Test features after clicking Editor tab
    console.log('\n🔍 Testing Features After Editor Tab Click:');
    
    const afterEditorTab = await page.evaluate(() => {
      return {
        // Code Editor
        codeEditor: {
          dataTestId: !!document.querySelector('[data-testid="code-editor"]'),
          visible: document.querySelector('[data-testid="code-editor"]')?.offsetParent !== null,
          tab: Array.from(document.querySelectorAll('button')).some(b => 
            b.textContent.includes('Code Editor') || b.textContent.includes('Editor'))
        },
        
        // AI Models
        aiModels: {
          dataTestId: !!document.querySelector('[data-testid="ai-models"]'),
          visible: document.querySelector('[data-testid="ai-models"]')?.offsetParent !== null,
          text: Array.from(document.querySelectorAll('*')).some(el => 
            el.textContent.includes('CodeLlama') || el.textContent.includes('Mistral'))
        },
        
        // Web Search
        webSearch: {
          dataTestId: !!document.querySelector('[data-testid="web-search"]'),
          visible: document.querySelector('[data-testid="web-search"]')?.offsetParent !== null,
          text: Array.from(document.querySelectorAll('*')).some(el => 
            el.textContent.includes('Web Search Integration'))
        },
        
        // Generate Button
        generateButton: {
          dataTestId: !!document.querySelector('[data-testid="generate-button"]'),
          visible: document.querySelector('[data-testid="generate-button"]')?.offsetParent !== null,
          text: Array.from(document.querySelectorAll('button')).some(b => 
            b.textContent.includes('Send') || b.textContent.includes('Generate'))
        }
      };
    });
    
    console.log('After Editor Tab Click:', afterEditorTab);
    
    // Try clicking other tabs to test all features
    console.log('\n🔄 Testing all tabs...');
    
    const allTabs = await page.evaluate(() => {
      const tabs = Array.from(document.querySelectorAll('button'));
      return tabs.filter(b => 
        b.textContent.includes('Editor') || 
        b.textContent.includes('Preview') ||
        b.textContent.includes('Terminal') ||
        b.textContent.includes('Debug') ||
        b.textContent.includes('Testing') ||
        b.textContent.includes('Deployment') ||
        b.textContent.includes('AI Assistant') ||
        b.textContent.includes('Workspace')
      ).map(tab => tab.textContent.trim());
    });
    
    console.log('Available tabs:', allTabs);
    
    // Click on each tab and test
    for (const tabText of allTabs) {
      console.log(`\n🔄 Clicking on "${tabText}" tab...`);
      
      const tabClicked = await page.evaluate((tabName) => {
        const tabs = Array.from(document.querySelectorAll('button'));
        const tab = tabs.find(b => b.textContent.includes(tabName));
        
        if (tab) {
          tab.click();
          return true;
        }
        return false;
      }, tabText);
      
      console.log(`"${tabText}" tab clicked:`, tabClicked);
      
      // Wait for tab switch
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Test Code Editor visibility
      const codeEditorVisible = await page.evaluate(() => {
        const editor = document.querySelector('[data-testid="code-editor"]');
        return {
          found: !!editor,
          visible: editor ? editor.offsetParent !== null : false
        };
      });
      
      console.log(`Code Editor visibility on "${tabText}":`, codeEditorVisible);
    }
    
    // Final comprehensive test
    console.log('\n🎯 Final Comprehensive Test:');
    
    const finalTest = await page.evaluate(() => {
      return {
        // Code Editor
        codeEditor: {
          dataTestId: !!document.querySelector('[data-testid="code-editor"]'),
          visible: document.querySelector('[data-testid="code-editor"]')?.offsetParent !== null,
          tab: Array.from(document.querySelectorAll('button')).some(b => 
            b.textContent.includes('Code Editor') || b.textContent.includes('Editor'))
        },
        
        // AI Models
        aiModels: {
          dataTestId: !!document.querySelector('[data-testid="ai-models"]'),
          visible: document.querySelector('[data-testid="ai-models"]')?.offsetParent !== null,
          text: Array.from(document.querySelectorAll('*')).some(el => 
            el.textContent.includes('CodeLlama') || el.textContent.includes('Mistral'))
        },
        
        // Web Search
        webSearch: {
          dataTestId: !!document.querySelector('[data-testid="web-search"]'),
          visible: document.querySelector('[data-testid="web-search"]')?.offsetParent !== null,
          text: Array.from(document.querySelectorAll('*')).some(el => 
            el.textContent.includes('Web Search Integration'))
        },
        
        // Generate Button
        generateButton: {
          dataTestId: !!document.querySelector('[data-testid="generate-button"]'),
          visible: document.querySelector('[data-testid="generate-button"]')?.offsetParent !== null,
          text: Array.from(document.querySelectorAll('button')).some(b => 
            b.textContent.includes('Send') || b.textContent.includes('Generate'))
        }
      };
    });
    
    console.log('\n🎯 Final Test Results:');
    console.log('=====================');
    console.log('Code Editor:', finalTest.codeEditor);
    console.log('AI Models:', finalTest.aiModels);
    console.log('Web Search:', finalTest.webSearch);
    console.log('Generate Button:', finalTest.generateButton);
    
    // Calculate final score
    const features = [
      finalTest.codeEditor.dataTestId && finalTest.codeEditor.visible,
      finalTest.aiModels.dataTestId && finalTest.aiModels.visible,
      finalTest.webSearch.dataTestId && finalTest.webSearch.visible,
      finalTest.generateButton.dataTestId && finalTest.generateButton.visible
    ];
    
    const score = features.filter(Boolean).length;
    const percentage = Math.round((score / features.length) * 100);
    
    console.log(`\n📊 Final Score: ${score}/${features.length} (${percentage}%)`);
    
    if (percentage === 100) {
      console.log('🏆 PERFECT! AI Builder is 100% complete!');
    } else {
      console.log(`⚠️ Still missing ${features.length - score} features`);
    }
    
    // Take final screenshot
    await page.screenshot({ 
      path: 'ai-builder-100-percent-final-test.png',
      fullPage: true 
    });
    
    console.log('📸 Final screenshot saved: ai-builder-100-percent-final-test.png');
    
    return { score, percentage, finalTest };
    
  } catch (error) {
    console.error('❌ Test failed:', error);
    return { error: error.message };
  } finally {
    await browser.close();
  }
}

test100PercentFinal().then(result => {
  if (result.error) {
    console.error('Test failed:', result.error);
  } else {
    console.log('\n🎉 Final test completed!');
    console.log(`Final Score: ${result.percentage}%`);
  }
}).catch(console.error);

