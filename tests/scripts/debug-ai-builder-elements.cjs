const puppeteer = require('puppeteer');

async function debugAIBuilderElements() {
  console.log('🔍 DEBUGGING AI BUILDER ELEMENTS...');
  
  const browser = await puppeteer.launch({ 
    headless: false,
    defaultViewport: { width: 1920, height: 1080 },
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  try {
    const page = await browser.newPage();
    
    // Navigate to DreamBuild AI Builder
    console.log('📱 Navigating to DreamBuild AI Builder...');
    await page.goto('http://localhost:3001/ai-builder', { 
      waitUntil: 'networkidle2',
      timeout: 30000 
    });
    
    await new Promise(resolve => setTimeout(resolve, 8000));
    
    // Debug page elements
    const elements = await page.evaluate(() => {
      const allTextareas = Array.from(document.querySelectorAll('textarea'));
      const allInputs = Array.from(document.querySelectorAll('input'));
      const allButtons = Array.from(document.querySelectorAll('button'));
      
      console.log('Found textareas:', allTextareas.length);
      console.log('Found inputs:', allInputs.length);
      console.log('Found buttons:', allButtons.length);
      
      const textareaInfo = allTextareas.map((textarea, index) => ({
        index,
        placeholder: textarea.placeholder || 'No placeholder',
        value: textarea.value || 'No value',
        visible: textarea.offsetParent !== null,
        className: textarea.className,
        id: textarea.id || 'No ID',
        parentText: textarea.parentElement ? textarea.parentElement.textContent.substring(0, 100) : 'No parent'
      }));
      
      const inputInfo = allInputs.map((input, index) => ({
        index,
        type: input.type,
        placeholder: input.placeholder || 'No placeholder',
        value: input.value || 'No value',
        visible: input.offsetParent !== null,
        className: input.className,
        id: input.id || 'No ID'
      }));
      
      const buttonInfo = allButtons.map((button, index) => ({
        index,
        text: button.textContent || 'No text',
        visible: button.offsetParent !== null,
        className: button.className,
        id: button.id || 'No ID'
      }));
      
      return {
        textareas: textareaInfo,
        inputs: inputInfo,
        buttons: buttonInfo,
        pageTitle: document.title,
        bodyText: document.body.textContent.substring(0, 500)
      };
    });
    
    console.log('\n📋 PAGE ANALYSIS:');
    console.log('==================');
    console.log(`Page Title: ${elements.pageTitle}`);
    console.log(`Body Text Preview: ${elements.bodyText}`);
    
    console.log('\n📝 TEXTAREAS FOUND:');
    console.log('===================');
    elements.textareas.forEach(textarea => {
      console.log(`Textarea ${textarea.index}:`);
      console.log(`  Placeholder: "${textarea.placeholder}"`);
      console.log(`  Value: "${textarea.value}"`);
      console.log(`  Visible: ${textarea.visible}`);
      console.log(`  Class: ${textarea.className}`);
      console.log(`  ID: ${textarea.id}`);
      console.log(`  Parent Text: "${textarea.parentText}"`);
      console.log('');
    });
    
    console.log('\n🔘 INPUTS FOUND:');
    console.log('================');
    elements.inputs.forEach(input => {
      console.log(`Input ${input.index}:`);
      console.log(`  Type: ${input.type}`);
      console.log(`  Placeholder: "${input.placeholder}"`);
      console.log(`  Value: "${input.value}"`);
      console.log(`  Visible: ${input.visible}`);
      console.log(`  Class: ${input.className}`);
      console.log(`  ID: ${input.id}`);
      console.log('');
    });
    
    console.log('\n🔘 BUTTONS FOUND:');
    console.log('==================');
    elements.buttons.forEach(button => {
      if (button.visible && (button.text.includes('Send') || button.text.includes('Generate') || button.text.includes('Submit'))) {
        console.log(`Button ${button.index}:`);
        console.log(`  Text: "${button.text}"`);
        console.log(`  Visible: ${button.visible}`);
        console.log(`  Class: ${button.className}`);
        console.log(`  ID: ${button.id}`);
        console.log('');
      }
    });
    
    // Take screenshot
    await page.screenshot({ 
      path: 'ai-builder-elements-debug.png',
      fullPage: true 
    });
    
    console.log('\n📸 Screenshot saved: ai-builder-elements-debug.png');
    
    // Try to find the AI prompt area
    console.log('\n🎯 LOOKING FOR AI PROMPT AREA:');
    console.log('==============================');
    
    const aiPromptArea = await page.evaluate(() => {
      // Look for common AI prompt selectors
      const selectors = [
        'textarea[placeholder*="prompt"]',
        'textarea[placeholder*="message"]',
        'textarea[placeholder*="ask"]',
        'textarea[placeholder*="type"]',
        '.ai-prompt textarea',
        '.prompt textarea',
        '.message textarea',
        '[data-testid*="prompt"] textarea',
        '[data-testid*="message"] textarea'
      ];
      
      for (const selector of selectors) {
        const element = document.querySelector(selector);
        if (element) {
          return {
            selector,
            found: true,
            placeholder: element.placeholder,
            visible: element.offsetParent !== null,
            className: element.className
          };
        }
      }
      
      return { found: false };
    });
    
    if (aiPromptArea.found) {
      console.log(`✅ Found AI prompt area with selector: ${aiPromptArea.selector}`);
      console.log(`   Placeholder: "${aiPromptArea.placeholder}"`);
      console.log(`   Visible: ${aiPromptArea.visible}`);
      console.log(`   Class: ${aiPromptArea.className}`);
    } else {
      console.log('❌ No AI prompt area found with common selectors');
    }
    
    return elements;
    
  } catch (error) {
    console.error('❌ Debug failed:', error);
    return { error: error.message };
  } finally {
    await browser.close();
  }
}

debugAIBuilderElements().then(result => {
  if (result.error) {
    console.error('Debug failed:', result.error);
  } else {
    console.log('\n🎉 AI Builder Elements Debug Completed!');
  }
}).catch(console.error);

