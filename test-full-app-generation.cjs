/**
 * Full App Generation Test - Tests the complete workflow
 * Product of Bradley Virtual Solutions, LLC
 */

const puppeteer = require('puppeteer');

async function fullTest() {
  console.log('\n🧪 FULL APP GENERATION TEST\n');
  
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    defaultViewport: { width: 1920, height: 1080 }
  });

  const page = await browser.newPage();
  
  // Capture console
  page.on('console', msg => {
    const text = msg.text();
    if (text.includes('❌') || text.includes('Error') || text.includes('Failed')) {
      console.log(`  ❌ ${text}`);
    } else if (text.includes('✅') || text.includes('🚀')) {
      console.log(`  ${text}`);
    }
  });

  try {
    // Step 1: Navigate
    console.log('📂 Step 1: Opening DreamBuild...');
    await page.goto('https://dreambuild-2024-app.web.app/#/ai-builder', { 
      waitUntil: 'networkidle0', 
      timeout: 30000 
    });
    await new Promise(r => setTimeout(r, 5000));
    console.log('✅ Page loaded\n');

    // Step 2: Generate app
    console.log('📝 Step 2: Generating todo app...');
    const textarea = await page.waitForSelector('textarea[placeholder="Describe what you want to build..."]');
    await textarea.type('Create a todo app with 5 features', { delay: 30 });
    await new Promise(r => setTimeout(r, 500));

    const button = await page.waitForSelector('button[data-testid="generate-button"]');
    await button.click();
    
    console.log('⏳ Waiting for generation...');
    await new Promise(r => setTimeout(r, 20000));
    console.log('✅ Generation complete\n');

    // Step 3: Click Preview tab
    console.log('🖼️ Step 3: Switching to Preview tab...');
    const previewTab = await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const previewBtn = buttons.find(btn => btn.textContent.includes('Preview') || btn.textContent.includes('preview'));
      if (previewBtn) {
        previewBtn.click();
        return true;
      }
      return false;
    });
    
    if (previewTab) {
      console.log('✅ Switched to Preview tab');
      await new Promise(r => setTimeout(r, 2000));
    } else {
      console.log('⚠️  Could not find Preview tab button');
    }

    // Step 4: Check preview iframe
    console.log('\n🔍 Step 4: Inspecting preview iframe...');
    const iframeInspection = await page.evaluate(() => {
      const iframe = document.querySelector('iframe[title="Live Preview"]');
      if (!iframe) {
        return { exists: false };
      }

      const doc = iframe.contentDocument || iframe.contentWindow.document;
      if (!doc) {
        return { exists: true, accessible: false };
      }

      return {
        exists: true,
        accessible: true,
        title: doc.title,
        htmlLength: doc.documentElement.innerHTML.length,
        bodyLength: doc.body.innerHTML.length,
        hasH1: !!doc.querySelector('h1'),
        h1Text: doc.querySelector('h1')?.textContent,
        hasForm: !!doc.getElementById('add-todo-form'),
        hasButton: !!doc.querySelector('button[type="submit"]'),
        hasTodoInput: !!doc.getElementById('todo-input'),
        hasTodosContainer: !!doc.getElementById('todos-container'),
        scriptTags: doc.querySelectorAll('script').length,
        styleTags: doc.querySelectorAll('style').length,
        featureChips: doc.querySelectorAll('.feature-chip').length
      };
    });

    console.log('Preview Status:', JSON.stringify(iframeInspection, null, 2));

    // Step 5: Test add-todo functionality IN the iframe
    if (iframeInspection.hasForm && iframeInspection.hasButton) {
      console.log('\n✅ Step 5: Testing add-todo button...');
      
      const addResult = await page.evaluate(() => {
        const iframe = document.querySelector('iframe[title="Live Preview"]');
        const doc = iframe.contentDocument || iframe.contentWindow.document;
        
        // Type in input
        const input = doc.getElementById('todo-input');
        if (!input) return { error: 'No input found' };
        
        input.value = 'Test Todo Item';
        
        // Click submit button
        const form = doc.getElementById('add-todo-form');
        if (!form) return { error: 'No form found' };
        
        // Trigger form submit
        const event = new doc.defaultView.Event('submit', { bubbles: true, cancelable: true });
        form.dispatchEvent(event);
        
        // Wait a moment
        return new Promise(resolve => {
          setTimeout(() => {
            const todosContainer = doc.getElementById('todos-container');
            const todoItems = todosContainer ? todosContainer.querySelectorAll('.todo-item, [class*="todo"]').length : 0;
            
            resolve({
              success: true,
              inputValue: input.value,
              todoItemsAfter: todoItems,
              containerHTML: todosContainer?.innerHTML.substring(0, 200)
            });
          }, 1000);
        });
      });
      
      console.log('Add Todo Result:', JSON.stringify(addResult, null, 2));
      
      if (addResult.todoItemsAfter > 0) {
        console.log('✅ ADD-TODO BUTTON WORKS! Todo was added successfully!');
      } else {
        console.log('❌ ADD-TODO BUTTON FAILED - No todos were added');
      }
    } else {
      console.log('❌ Step 5: Cannot test button - form or button missing');
    }

    // Take screenshot
    await page.screenshot({ path: 'dreambuild-full-test.png', fullPage: true });
    console.log('\n📸 Screenshot saved: dreambuild-full-test.png');

    await new Promise(r => setTimeout(r, 5000));

  } catch (error) {
    console.error('\n❌ Test failed:', error.message);
  }

  await browser.close();
  console.log('\n✅ Test complete\n');
}

fullTest();

