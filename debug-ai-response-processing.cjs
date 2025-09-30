const puppeteer = require('puppeteer');

async function debugAIResponseProcessing() {
  console.log('🔍 DEBUGGING AI RESPONSE PROCESSING...');
  
  const browser = await puppeteer.launch({ 
    headless: false,
    defaultViewport: { width: 1920, height: 1080 },
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  try {
    const page = await browser.newPage();
    
    // Capture all console messages
    const consoleMessages = [];
    page.on('console', msg => {
      const type = msg.type();
      const text = msg.text();
      consoleMessages.push({ type, text, timestamp: new Date().toISOString() });
      console.log(`🔍 Browser ${type.toUpperCase()}: ${text}`);
    });
    
    // Capture network requests
    const networkRequests = [];
    page.on('request', request => {
      if (request.url().includes('ai') || request.url().includes('generate') || request.url().includes('api')) {
        networkRequests.push({
          url: request.url(),
          method: request.method(),
          timestamp: new Date().toISOString()
        });
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
    
    // Wait for response and capture all activity
    console.log('⏳ Waiting for AI response and capturing activity...');
    await new Promise(resolve => setTimeout(resolve, 20000));
    
    // Analyze what happened
    const analysis = await page.evaluate(() => {
      // Check for any error messages in the UI
      const errorElements = document.querySelectorAll('[class*="error"], [class*="Error"]');
      const errorTexts = Array.from(errorElements).map(el => el.textContent);
      
      // Check for loading states
      const loadingElements = document.querySelectorAll('[class*="loading"], [class*="spinner"]');
      
      // Check for success messages
      const successElements = document.querySelectorAll('[class*="success"], [class*="Success"]');
      const successTexts = Array.from(successElements).map(el => el.textContent);
      
      // Check textarea content
      const textareas = Array.from(document.querySelectorAll('textarea'));
      const textareaContent = textareas.map((textarea, index) => ({
        index,
        placeholder: textarea.placeholder,
        hasContent: textarea.value.length > 0,
        contentLength: textarea.value.length,
        contentPreview: textarea.value.substring(0, 100)
      }));
      
      // Check for any generated files display
      const generatedFilesDisplay = document.querySelector('.generated-files-display');
      
      return {
        errorTexts,
        hasLoadingElements: loadingElements.length > 0,
        successTexts,
        textareaContent,
        generatedFilesDisplay: generatedFilesDisplay !== null,
        pageTitle: document.title
      };
    });
    
    console.log('\n📊 AI RESPONSE PROCESSING ANALYSIS:');
    console.log('====================================');
    
    console.log('\n🚨 ERRORS FOUND:');
    if (analysis.errorTexts.length > 0) {
      analysis.errorTexts.forEach((error, index) => {
        console.log(`Error ${index + 1}: ${error}`);
      });
    } else {
      console.log('No error messages found in UI');
    }
    
    console.log('\n⏳ LOADING STATES:');
    console.log(`Has Loading Elements: ${analysis.hasLoadingElements ? '✅ YES' : '❌ NO'}`);
    
    console.log('\n✅ SUCCESS MESSAGES:');
    if (analysis.successTexts.length > 0) {
      analysis.successTexts.forEach((success, index) => {
        console.log(`Success ${index + 1}: ${success}`);
      });
    } else {
      console.log('No success messages found in UI');
    }
    
    console.log('\n📝 TEXTAREA CONTENT:');
    analysis.textareaContent.forEach((textarea, index) => {
      console.log(`Textarea ${index} (${textarea.placeholder}):`);
      console.log(`  Has Content: ${textarea.hasContent}`);
      console.log(`  Content Length: ${textarea.contentLength}`);
      if (textarea.hasContent) {
        console.log(`  Content Preview: ${textarea.contentPreview}`);
      }
      console.log('');
    });
    
    console.log('\n🌐 NETWORK REQUESTS:');
    if (networkRequests.length > 0) {
      networkRequests.forEach((request, index) => {
        console.log(`Request ${index + 1}: ${request.method} ${request.url}`);
      });
    } else {
      console.log('No AI-related network requests detected');
    }
    
    console.log('\n🔍 RELEVANT CONSOLE MESSAGES:');
    const relevantMessages = consoleMessages.filter(msg => 
      msg.text.includes('AI') || 
      msg.text.includes('generate') || 
      msg.text.includes('injection') || 
      msg.text.includes('response') ||
      msg.text.includes('error') ||
      msg.text.includes('failed')
    );
    
    if (relevantMessages.length > 0) {
      relevantMessages.forEach((msg, index) => {
        console.log(`${msg.type.toUpperCase()} ${index + 1}: ${msg.text}`);
      });
    } else {
      console.log('No relevant console messages found');
    }
    
    // Take screenshot
    await page.screenshot({ 
      path: 'ai-response-processing-debug.png',
      fullPage: true 
    });
    
    console.log('\n📸 Screenshot saved: ai-response-processing-debug.png');
    
    return {
      analysis,
      consoleMessages,
      networkRequests
    };
    
  } catch (error) {
    console.error('❌ Debug failed:', error);
    return { error: error.message };
  } finally {
    await browser.close();
  }
}

debugAIResponseProcessing().then(result => {
  if (result.error) {
    console.error('AI response processing debug failed:', result.error);
  } else {
    console.log('\n🎉 AI Response Processing Debug Completed!');
  }
}).catch(console.error);

