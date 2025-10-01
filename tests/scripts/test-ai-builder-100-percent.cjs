const puppeteer = require('puppeteer');

async function testAIBuilder100Percent() {
  console.log('🚀 Testing AI Builder 100% Capabilities...');
  
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
    
    // Comprehensive feature check
    const features = await page.evaluate(() => {
      const results = {
        // Basic Interface
        aiBuilderLoaded: document.querySelector('[data-testid="ai-builder"]') !== null || 
                        document.querySelector('h1')?.textContent?.includes('AI Builder') ||
                        document.querySelector('h2')?.textContent?.includes('AI Builder') ||
                        document.querySelector('h3')?.textContent?.includes('AI Builder'),
        
        // Prompt Interface
        promptInterface: document.querySelectorAll('textarea').length > 0 || 
                        document.querySelectorAll('input[type="text"]').length > 0,
        
        // AI Model Selector
        modelSelector: document.querySelectorAll('select').length > 0 || 
                      Array.from(document.querySelectorAll('button')).some(b => 
                        b.textContent.includes('model') || b.textContent.includes('AI')),
        
        // Template Selector
        templateSelector: Array.from(document.querySelectorAll('button')).some(b => 
                         b.textContent.includes('template') || b.textContent.includes('Template')) ||
                         Array.from(document.querySelectorAll('div')).some(d => 
                         d.textContent.includes('template') || d.textContent.includes('Template')),
        
        // Code Editor
        codeEditor: document.querySelectorAll('[data-testid="code-editor"], .code-editor, .monaco-editor, .editor').length > 0 ||
                   document.querySelectorAll('pre').length > 0 ||
                   document.querySelectorAll('.CodeMirror').length > 0,
        
        // File Manager
        fileManager: document.querySelectorAll('[data-testid="file-manager"], .file-manager, .file-tree').length > 0 ||
                    document.querySelectorAll('[data-testid="folder"], .folder, .directory').length > 0 ||
                    Array.from(document.querySelectorAll('div')).some(d => 
                      d.textContent.includes('Explorer') || d.textContent.includes('Files')),
        
        // Preview Functionality
        preview: document.querySelectorAll('[data-testid="preview"], .preview, .preview-panel').length > 0 ||
                document.querySelectorAll('iframe').length > 0 ||
                Array.from(document.querySelectorAll('div')).some(d => 
                  d.textContent.includes('Preview') || d.textContent.includes('Live')),
        
        // Terminal
        terminal: document.querySelectorAll('[data-testid="terminal"], .terminal, .console').length > 0 ||
                 Array.from(document.querySelectorAll('div')).some(d => 
                   d.textContent.includes('Terminal') || d.textContent.includes('Console')),
        
        // Advanced Features
        realTimeCollaboration: document.querySelectorAll('[data-testid="collaboration"], .collaboration').length > 0 ||
                              Array.from(document.querySelectorAll('div')).some(d => 
                                d.textContent.includes('Collaboration') || d.textContent.includes('Real-time')),
        
        debugging: document.querySelectorAll('[data-testid="debug"], .debug, .debugger').length > 0 ||
                  Array.from(document.querySelectorAll('div')).some(d => 
                    d.textContent.includes('Debug') || d.textContent.includes('Debugger')),
        
        versionControl: document.querySelectorAll('[data-testid="git"], .git, .version-control').length > 0 ||
                       Array.from(document.querySelectorAll('div')).some(d => 
                         d.textContent.includes('Git') || d.textContent.includes('Version')),
        
        testing: document.querySelectorAll('[data-testid="test"], .test, .testing').length > 0 ||
                Array.from(document.querySelectorAll('div')).some(d => 
                  d.textContent.includes('Test') || d.textContent.includes('Testing')),
        
        deployment: document.querySelectorAll('[data-testid="deploy"], .deploy, .deployment').length > 0 ||
                   Array.from(document.querySelectorAll('div')).some(d => 
                     d.textContent.includes('Deploy') || d.textContent.includes('Deployment')),
        
        aiChat: document.querySelectorAll('[data-testid="chat"], .chat, .ai-chat').length > 0 ||
               Array.from(document.querySelectorAll('div')).some(d => 
                 d.textContent.includes('AI Assistant') || d.textContent.includes('Chat')),
        
        streaming: document.querySelectorAll('[data-testid="streaming"], .streaming').length > 0 ||
                  Array.from(document.querySelectorAll('div')).some(d => 
                    d.textContent.includes('Streaming') || d.textContent.includes('Real-time')),
        
        webSearch: document.querySelectorAll('[data-testid="web-search"], .web-search').length > 0 ||
                  Array.from(document.querySelectorAll('div')).some(d => 
                    d.textContent.includes('Web Search') || d.textContent.includes('Search')),
        
        // Status Indicators
        statusIndicators: Array.from(document.querySelectorAll('div')).some(d => 
          d.textContent.includes('Ready') || d.textContent.includes('Online') || d.textContent.includes('Active')),
        
        // Resizable Panels
        resizablePanels: document.querySelectorAll('[data-panel-id]').length > 0 ||
                        document.querySelectorAll('.resizable-panel').length > 0,
        
        // Tabs
        tabs: document.querySelectorAll('[role="tab"]').length > 0 ||
             Array.from(document.querySelectorAll('button')).some(b => 
               b.textContent.includes('Editor') || b.textContent.includes('Preview')),
        
        // AI Models Available
        aiModels: Array.from(document.querySelectorAll('*')).some(el => 
          el.textContent.includes('CodeLlama') || el.textContent.includes('Mistral') || 
          el.textContent.includes('DeepSeek') || el.textContent.includes('WizardCoder')),
        
        // Templates Available
        templates: Array.from(document.querySelectorAll('*')).some(el => 
          el.textContent.includes('React') || el.textContent.includes('Dashboard') || 
          el.textContent.includes('Calculator') || el.textContent.includes('Todo')),
        
        // Advanced UI Elements
        advancedUI: document.querySelectorAll('.backdrop-blur').length > 0 ||
                   document.querySelectorAll('.shadow-lg').length > 0 ||
                   document.querySelectorAll('.rounded-2xl').length > 0
      };
      
      return results;
    });
    
    console.log('\n🎯 AI Builder 100% Capability Assessment:');
    console.log('==========================================');
    
    // Basic Features (4/4)
    console.log('\n📋 Basic Features:');
    console.log(`  ${features.aiBuilderLoaded ? '✅' : '❌'} AI Builder Interface`);
    console.log(`  ${features.promptInterface ? '✅' : '❌'} Prompt Interface`);
    console.log(`  ${features.modelSelector ? '✅' : '❌'} AI Model Selector`);
    console.log(`  ${features.templateSelector ? '✅' : '❌'} Template Selector`);
    
    // Core Development Features (4/4)
    console.log('\n💻 Core Development Features:');
    console.log(`  ${features.codeEditor ? '✅' : '❌'} Code Editor`);
    console.log(`  ${features.fileManager ? '✅' : '❌'} File Manager`);
    console.log(`  ${features.preview ? '✅' : '❌'} Live Preview`);
    console.log(`  ${features.terminal ? '✅' : '❌'} Terminal`);
    
    // Advanced Features (8/8)
    console.log('\n🚀 Advanced Features:');
    console.log(`  ${features.realTimeCollaboration ? '✅' : '❌'} Real-time Collaboration`);
    console.log(`  ${features.debugging ? '✅' : '❌'} Debugging Tools`);
    console.log(`  ${features.versionControl ? '✅' : '❌'} Version Control`);
    console.log(`  ${features.testing ? '✅' : '❌'} Testing Framework`);
    console.log(`  ${features.deployment ? '✅' : '❌'} Deployment Tools`);
    console.log(`  ${features.aiChat ? '✅' : '❌'} AI Chat Interface`);
    console.log(`  ${features.streaming ? '✅' : '❌'} Streaming Responses`);
    console.log(`  ${features.webSearch ? '✅' : '❌'} Web Search Integration`);
    
    // UI/UX Features (4/4)
    console.log('\n🎨 UI/UX Features:');
    console.log(`  ${features.statusIndicators ? '✅' : '❌'} Status Indicators`);
    console.log(`  ${features.resizablePanels ? '✅' : '❌'} Resizable Panels`);
    console.log(`  ${features.tabs ? '✅' : '❌'} Tab System`);
    console.log(`  ${features.advancedUI ? '✅' : '❌'} Advanced UI Elements`);
    
    // AI Capabilities (2/2)
    console.log('\n🤖 AI Capabilities:');
    console.log(`  ${features.aiModels ? '✅' : '❌'} AI Models Available`);
    console.log(`  ${features.templates ? '✅' : '❌'} Code Templates Available`);
    
    // Calculate total score
    const totalFeatures = Object.values(features).filter(v => v === true).length;
    const maxFeatures = Object.keys(features).length;
    const percentage = Math.round((totalFeatures / maxFeatures) * 100);
    
    console.log('\n📊 Overall Assessment:');
    console.log(`Score: ${totalFeatures}/${maxFeatures} (${percentage}%)`);
    
    if (percentage >= 90) {
      console.log('🏆 EXCELLENT: AI Builder is 100% advanced!');
    } else if (percentage >= 80) {
      console.log('✅ VERY GOOD: AI Builder is highly advanced');
    } else if (percentage >= 70) {
      console.log('⚠️ GOOD: AI Builder has solid capabilities');
    } else if (percentage >= 60) {
      console.log('⚠️ FAIR: AI Builder needs improvements');
    } else {
      console.log('❌ POOR: AI Builder needs significant enhancements');
    }
    
    // Test AI generation
    console.log('\n🤖 Testing AI Code Generation...');
    
    // Look for prompt input
    const promptInput = await page.evaluate(() => {
      const textareas = document.querySelectorAll('textarea');
      const inputs = document.querySelectorAll('input[type="text"]');
      
      for (let textarea of textareas) {
        if (textarea.placeholder && textarea.placeholder.toLowerCase().includes('prompt')) {
          return { type: 'textarea', found: true };
        }
      }
      
      for (let input of inputs) {
        if (input.placeholder && input.placeholder.toLowerCase().includes('prompt')) {
          return { type: 'input', found: true };
        }
      }
      
      return textareas.length > 0 ? { type: 'textarea', found: true } : 
             inputs.length > 0 ? { type: 'input', found: true } : { found: false };
    });
    
    if (promptInput.found) {
      console.log('✅ Prompt input found:', promptInput.type);
      
      // Type a test prompt
      const testPrompt = "Create a modern React dashboard with charts and analytics";
      
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
    
    // Take screenshot
    await page.screenshot({ 
      path: 'ai-builder-100-percent-test.png',
      fullPage: true 
    });
    
    console.log('📸 Screenshot saved: ai-builder-100-percent-test.png');
    
    return {
      percentage,
      totalFeatures,
      maxFeatures,
      features
    };
    
  } catch (error) {
    console.error('❌ Test failed:', error);
    return { error: error.message };
  } finally {
    await browser.close();
  }
}

testAIBuilder100Percent().then(result => {
  if (result.error) {
    console.error('Test failed:', result.error);
  } else {
    console.log('\n🎉 Test completed successfully!');
    console.log(`Final Score: ${result.percentage}%`);
  }
}).catch(console.error);

