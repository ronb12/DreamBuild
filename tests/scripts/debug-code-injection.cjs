const puppeteer = require('puppeteer');

async function debugCodeInjection() {
  console.log('🔍 DEBUGGING CODE INJECTION...');
  
  const browser = await puppeteer.launch({ 
    headless: false,
    defaultViewport: { width: 1920, height: 1080 },
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  try {
    const page = await browser.newPage();
    
    // Listen for console messages
    page.on('console', msg => {
      const type = msg.type();
      const text = msg.text();
      if (type === 'error' || text.includes('injection') || text.includes('AI') || text.includes('generate')) {
        console.log(`🔍 Browser ${type.toUpperCase()}: ${text}`);
      }
    });
    
    // Navigate to DreamBuild AI Builder
    console.log('📱 Navigating to DreamBuild AI Builder...');
    await page.goto('http://localhost:3001/ai-builder', { 
      waitUntil: 'networkidle2',
      timeout: 30000 
    });
    
    await new Promise(resolve => setTimeout(resolve, 8000));
    
    // Enter a simple test prompt
    console.log('🎯 Entering test prompt...');
    await page.evaluate(() => {
      const textareas = Array.from(document.querySelectorAll('textarea'));
      for (const textarea of textareas) {
        if (textarea.placeholder && textarea.placeholder.includes('Describe what you want to build')) {
          textarea.value = 'Create a simple HTML page with a button that changes color when clicked';
          textarea.dispatchEvent(new Event('input', { bubbles: true }));
          break;
        }
      }
    });
    
    // Click generate button
    console.log('🔘 Clicking generate button...');
    await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      for (const button of buttons) {
        const text = button.textContent.toLowerCase();
        if ((text.includes('send') || text.includes('generate') || text.includes('submit')) && button.offsetParent !== null) {
          button.click();
          console.log('Generate button clicked:', text);
          break;
        }
      }
    });
    
    // Wait for response and check console logs
    console.log('⏳ Waiting for AI response...');
    await new Promise(resolve => setTimeout(resolve, 15000));
    
    // Check what happened
    const analysis = await page.evaluate(() => {
      // Get all textareas and their content
      const textareas = Array.from(document.querySelectorAll('textarea'));
      const textareaInfo = textareas.map((textarea, index) => ({
        index,
        placeholder: textarea.placeholder || 'No placeholder',
        value: textarea.value.substring(0, 200),
        hasContent: textarea.value.length > 0
      }));
      
      // Check for generated files display
      const generatedFilesDisplay = document.querySelector('.generated-files-display');
      
      // Check for any error messages or success messages
      const bodyText = document.body.textContent;
      const hasError = bodyText.includes('Error') || bodyText.includes('Failed') || bodyText.includes('error');
      const hasSuccess = bodyText.includes('successfully') || bodyText.includes('generated') || bodyText.includes('injected');
      
      return {
        textareas: textareaInfo,
        generatedFilesVisible: generatedFilesDisplay !== null,
        hasError,
        hasSuccess,
        bodyTextPreview: bodyText.substring(0, 1000)
      };
    });
    
    console.log('\n📊 CODE INJECTION ANALYSIS:');
    console.log('============================');
    
    console.log('\n📝 TEXTAREA CONTENT:');
    analysis.textareas.forEach((textarea, index) => {
      console.log(`Textarea ${index} (${textarea.placeholder}):`);
      console.log(`  Has Content: ${textarea.hasContent}`);
      if (textarea.hasContent) {
        console.log(`  Content Preview: ${textarea.value}`);
      }
      console.log('');
    });
    
    console.log(`Generated Files Display Visible: ${analysis.generatedFilesVisible ? '✅ YES' : '❌ NO'}`);
    console.log(`Has Error Messages: ${analysis.hasError ? '✅ YES' : '❌ NO'}`);
    console.log(`Has Success Messages: ${analysis.hasSuccess ? '✅ YES' : '❌ NO'}`);
    
    console.log('\n📄 Body Text Preview:');
    console.log(analysis.bodyTextPreview);
    
    // Check if code injection service is loaded
    const serviceStatus = await page.evaluate(() => {
      return {
        hasCodeInjectionService: typeof window.codeInjectionService !== 'undefined',
        hasSimpleAIService: typeof window.simpleAIService !== 'undefined',
        consoleErrors: window.consoleErrors || []
      };
    });
    
    console.log('\n🔧 SERVICE STATUS:');
    console.log(`Code Injection Service: ${serviceStatus.hasCodeInjectionService ? '✅ Loaded' : '❌ Not Loaded'}`);
    console.log(`Simple AI Service: ${serviceStatus.hasSimpleAIService ? '✅ Loaded' : '❌ Not Loaded'}`);
    
    // Take screenshot
    await page.screenshot({ 
      path: 'code-injection-debug.png',
      fullPage: true 
    });
    
    console.log('\n📸 Screenshot saved: code-injection-debug.png');
    
    return analysis;
    
  } catch (error) {
    console.error('❌ Debug failed:', error);
    return { error: error.message };
  } finally {
    await browser.close();
  }
}

debugCodeInjection().then(result => {
  if (result.error) {
    console.error('Code injection debug failed:', result.error);
  } else {
    console.log('\n🎉 Code Injection Debug Completed!');
  }
}).catch(console.error);

