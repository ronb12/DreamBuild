const puppeteer = require('puppeteer');

async function testFinal100Percent() {
  console.log('🚀 Final 100% Test - Targeting Missing Features...');
  
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
    
    // Test specific missing features
    console.log('\n🔍 Testing Specific Missing Features:');
    
    // 1. Test Code Editor
    const codeEditorFound = await page.evaluate(() => {
      const editor = document.querySelector('[data-testid="code-editor"]');
      const editorTab = Array.from(document.querySelectorAll('button')).find(b => 
        b.textContent.includes('Code Editor') || b.textContent.includes('Editor'));
      
      console.log('Code Editor Test:', {
        dataTestId: !!editor,
        editorTab: !!editorTab,
        editorVisible: editor ? editor.offsetParent !== null : false
      });
      
      return {
        found: !!editor,
        tabFound: !!editorTab,
        visible: editor ? editor.offsetParent !== null : false
      };
    });
    
    console.log('✅ Code Editor:', codeEditorFound);
    
    // 2. Test AI Models Display
    const aiModelsFound = await page.evaluate(() => {
      const models = document.querySelector('[data-testid="ai-models"]');
      const modelText = Array.from(document.querySelectorAll('*')).some(el => 
        el.textContent.includes('CodeLlama') || el.textContent.includes('Mistral'));
      
      console.log('AI Models Test:', {
        dataTestId: !!models,
        modelText: modelText,
        visible: models ? models.offsetParent !== null : false
      });
      
      return {
        found: !!models,
        textFound: modelText,
        visible: models ? models.offsetParent !== null : false
      };
    });
    
    console.log('✅ AI Models:', aiModelsFound);
    
    // 3. Test Web Search Integration
    const webSearchFound = await page.evaluate(() => {
      const webSearch = document.querySelector('[data-testid="web-search"]');
      const webSearchText = Array.from(document.querySelectorAll('*')).some(el => 
        el.textContent.includes('Web Search Integration') || el.textContent.includes('web search'));
      
      console.log('Web Search Test:', {
        dataTestId: !!webSearch,
        textFound: webSearchText,
        visible: webSearch ? webSearch.offsetParent !== null : false
      });
      
      return {
        found: !!webSearch,
        textFound: webSearchText,
        visible: webSearch ? webSearch.offsetParent !== null : false
      };
    });
    
    console.log('✅ Web Search:', webSearchFound);
    
    // 4. Test Generate Button
    const generateButtonFound = await page.evaluate(() => {
      const button = document.querySelector('[data-testid="generate-button"]');
      const sendButton = Array.from(document.querySelectorAll('button')).find(b => 
        b.textContent.includes('Send') || b.textContent.includes('Generate'));
      
      console.log('Generate Button Test:', {
        dataTestId: !!button,
        sendButton: !!sendButton,
        visible: button ? button.offsetParent !== null : false
      });
      
      return {
        found: !!button,
        sendButton: !!sendButton,
        visible: button ? button.offsetParent !== null : false
      };
    });
    
    console.log('✅ Generate Button:', generateButtonFound);
    
    // 5. Test if we need to click on editor tab
    if (codeEditorFound.tabFound && !codeEditorFound.visible) {
      console.log('🔄 Clicking on Code Editor tab...');
      await page.click('button:has-text("Code Editor"), button:has-text("Editor")');
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const codeEditorAfterClick = await page.evaluate(() => {
        const editor = document.querySelector('[data-testid="code-editor"]');
        return {
          found: !!editor,
          visible: editor ? editor.offsetParent !== null : false
        };
      });
      
      console.log('✅ Code Editor after click:', codeEditorAfterClick);
    }
    
    // 6. Test if we need to scroll to see AI models and web search
    console.log('🔄 Scrolling to find AI models and web search...');
    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const aiModelsAfterScroll = await page.evaluate(() => {
      const models = document.querySelector('[data-testid="ai-models"]');
      return {
        found: !!models,
        visible: models ? models.offsetParent !== null : false
      };
    });
    
    const webSearchAfterScroll = await page.evaluate(() => {
      const webSearch = document.querySelector('[data-testid="web-search"]');
      return {
        found: !!webSearch,
        visible: webSearch ? webSearch.offsetParent !== null : false
      };
    });
    
    console.log('✅ AI Models after scroll:', aiModelsAfterScroll);
    console.log('✅ Web Search after scroll:', webSearchAfterScroll);
    
    // Final comprehensive test
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
      path: 'ai-builder-final-100-percent-test.png',
      fullPage: true 
    });
    
    console.log('📸 Final screenshot saved: ai-builder-final-100-percent-test.png');
    
    return { score, percentage, finalTest };
    
  } catch (error) {
    console.error('❌ Test failed:', error);
    return { error: error.message };
  } finally {
    await browser.close();
  }
}

testFinal100Percent().then(result => {
  if (result.error) {
    console.error('Test failed:', result.error);
  } else {
    console.log('\n🎉 Final test completed!');
    console.log(`Final Score: ${result.percentage}%`);
  }
}).catch(console.error);

