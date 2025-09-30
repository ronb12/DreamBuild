const puppeteer = require('puppeteer');

async function testAIBuilderCapabilities() {
  console.log('🚀 Testing AI Builder Capabilities...');
  
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
    
    // Check if AI Builder loaded
    const aiBuilderLoaded = await page.evaluate(() => {
      return document.querySelector('[data-testid="ai-builder"]') !== null || 
             document.querySelector('.ai-builder') !== null ||
             document.querySelector('h1')?.textContent?.includes('AI Builder') ||
             document.querySelector('h2')?.textContent?.includes('AI Builder') ||
             document.querySelector('h3')?.textContent?.includes('AI Builder');
    });
    
    console.log('✅ AI Builder loaded:', aiBuilderLoaded);
    
    // Check for AI prompt interface
    const promptInterface = await page.evaluate(() => {
      const textareas = document.querySelectorAll('textarea');
      const inputs = document.querySelectorAll('input[type="text"]');
      return textareas.length > 0 || inputs.length > 0;
    });
    
    console.log('✅ Prompt interface found:', promptInterface);
    
    // Check for AI model selector
    const modelSelector = await page.evaluate(() => {
      const selects = document.querySelectorAll('select');
      const buttons = document.querySelectorAll('button');
      return Array.from(selects).some(s => s.textContent.includes('model') || s.textContent.includes('AI')) ||
             Array.from(buttons).some(b => b.textContent.includes('model') || b.textContent.includes('AI'));
    });
    
    console.log('✅ AI Model selector found:', modelSelector);
    
    // Check for template selector
    const templateSelector = await page.evaluate(() => {
      const buttons = document.querySelectorAll('button');
      const divs = document.querySelectorAll('div');
      return Array.from(buttons).some(b => b.textContent.includes('template') || b.textContent.includes('Template')) ||
             Array.from(divs).some(d => d.textContent.includes('template') || d.textContent.includes('Template'));
    });
    
    console.log('✅ Template selector found:', templateSelector);
    
    // Check for code editor
    const codeEditor = await page.evaluate(() => {
      const editors = document.querySelectorAll('[data-testid="code-editor"], .code-editor, .monaco-editor, .editor');
      const pre = document.querySelectorAll('pre');
      return editors.length > 0 || pre.length > 0;
    });
    
    console.log('✅ Code editor found:', codeEditor);
    
    // Check for file manager
    const fileManager = await page.evaluate(() => {
      const fileElements = document.querySelectorAll('[data-testid="file-manager"], .file-manager, .file-tree');
      const folderElements = document.querySelectorAll('[data-testid="folder"], .folder, .directory');
      return fileElements.length > 0 || folderElements.length > 0;
    });
    
    console.log('✅ File manager found:', fileManager);
    
    // Check for preview functionality
    const preview = await page.evaluate(() => {
      const previewElements = document.querySelectorAll('[data-testid="preview"], .preview, .preview-panel');
      const iframes = document.querySelectorAll('iframe');
      return previewElements.length > 0 || iframes.length > 0;
    });
    
    console.log('✅ Preview functionality found:', preview);
    
    // Check for terminal
    const terminal = await page.evaluate(() => {
      const terminalElements = document.querySelectorAll('[data-testid="terminal"], .terminal, .console');
      return terminalElements.length > 0;
    });
    
    console.log('✅ Terminal found:', terminal);
    
    // Test AI generation with a simple prompt
    console.log('🤖 Testing AI code generation...');
    
    // Look for prompt input
    const promptInput = await page.evaluate(() => {
      const textareas = document.querySelectorAll('textarea');
      const inputs = document.querySelectorAll('input[type="text"]');
      
      for (let textarea of textareas) {
        if (textarea.placeholder && textarea.placeholder.toLowerCase().includes('prompt')) {
          return { type: 'textarea', element: textarea };
        }
      }
      
      for (let input of inputs) {
        if (input.placeholder && input.placeholder.toLowerCase().includes('prompt')) {
          return { type: 'input', element: input };
        }
      }
      
      return textareas.length > 0 ? { type: 'textarea', element: textareas[0] } : 
             inputs.length > 0 ? { type: 'input', element: inputs[0] } : null;
    });
    
    if (promptInput) {
      console.log('✅ Found prompt input:', promptInput.type);
      
      // Type a test prompt
      const testPrompt = "Create a simple calculator app with basic arithmetic operations";
      
      if (promptInput.type === 'textarea') {
        await page.focus('textarea');
        await page.type('textarea', testPrompt);
      } else {
        await page.focus('input[type="text"]');
        await page.type('input[type="text"]', testPrompt);
      }
      
      console.log('✅ Test prompt entered:', testPrompt);
      
      // Look for generate button
      const generateButton = await page.evaluate(() => {
        const buttons = document.querySelectorAll('button');
        return Array.from(buttons).find(b => 
          b.textContent.toLowerCase().includes('generate') || 
          b.textContent.toLowerCase().includes('create') ||
          b.textContent.toLowerCase().includes('build') ||
          b.textContent.toLowerCase().includes('send')
        );
      });
      
      if (generateButton) {
        console.log('✅ Generate button found:', generateButton.textContent);
        
        // Click generate button
        await page.click('button');
        console.log('✅ Generate button clicked');
        
        // Wait for generation to complete
        await new Promise(resolve => setTimeout(resolve, 10000));
        
        // Check if code was generated
        const codeGenerated = await page.evaluate(() => {
          const codeElements = document.querySelectorAll('pre, code, .code, .editor');
          const fileElements = document.querySelectorAll('[data-testid="file"], .file, .file-item');
          return codeElements.length > 0 || fileElements.length > 0;
        });
        
        console.log('✅ Code generation result:', codeGenerated);
        
      } else {
        console.log('❌ Generate button not found');
      }
    } else {
      console.log('❌ Prompt input not found');
    }
    
    // Check for advanced features
    const advancedFeatures = await page.evaluate(() => {
      const features = {
        realTimeCollaboration: document.querySelector('[data-testid="collaboration"], .collaboration') !== null,
        debugging: document.querySelector('[data-testid="debug"], .debug, .debugger') !== null,
        versionControl: document.querySelector('[data-testid="git"], .git, .version-control') !== null,
        testing: document.querySelector('[data-testid="test"], .test, .testing') !== null,
        deployment: document.querySelector('[data-testid="deploy"], .deploy, .deployment') !== null,
        aiChat: document.querySelector('[data-testid="chat"], .chat, .ai-chat') !== null,
        streaming: document.querySelector('[data-testid="streaming"], .streaming') !== null,
        webSearch: document.querySelector('[data-testid="web-search"], .web-search') !== null
      };
      return features;
    });
    
    console.log('🔍 Advanced Features Check:');
    Object.entries(advancedFeatures).forEach(([feature, available]) => {
      console.log(`  ${available ? '✅' : '❌'} ${feature}: ${available}`);
    });
    
    // Take screenshot
    await page.screenshot({ 
      path: 'ai-builder-capabilities-test.png',
      fullPage: true 
    });
    
    console.log('📸 Screenshot saved: ai-builder-capabilities-test.png');
    
    // Overall assessment
    const capabilities = {
      aiBuilderLoaded,
      promptInterface,
      modelSelector,
      templateSelector,
      codeEditor,
      fileManager,
      preview,
      terminal,
      advancedFeatures
    };
    
    const totalFeatures = Object.values(capabilities).filter(v => v === true || (typeof v === 'object' && Object.values(v).some(f => f === true))).length;
    const maxFeatures = Object.keys(capabilities).length;
    
    console.log('\n🎯 AI Builder Capabilities Assessment:');
    console.log(`Overall Score: ${totalFeatures}/${maxFeatures} features available`);
    
    if (totalFeatures >= maxFeatures * 0.8) {
      console.log('🏆 EXCELLENT: AI Builder is highly advanced!');
    } else if (totalFeatures >= maxFeatures * 0.6) {
      console.log('✅ GOOD: AI Builder has solid capabilities');
    } else if (totalFeatures >= maxFeatures * 0.4) {
      console.log('⚠️ FAIR: AI Builder needs improvements');
    } else {
      console.log('❌ POOR: AI Builder needs significant enhancements');
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error);
  } finally {
    await browser.close();
  }
}

testAIBuilderCapabilities().catch(console.error);
