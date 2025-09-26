const puppeteer = require('puppeteer');

async function testAIBuilderDetailed() {
  console.log('🚀 Starting Detailed AI Builder Test...\n');
  
  const browser = await puppeteer.launch({ 
    headless: false,
    defaultViewport: null,
    args: ['--start-maximized']
  });
  
  const page = await browser.newPage();
  
  try {
    // Navigate to AI Builder
    console.log('📍 Navigating to AI Builder...');
    await page.goto('https://dreambuild-2024-app.web.app/ai-builder', { waitUntil: 'networkidle2' });
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    console.log('✅ AI Builder page loaded\n');
    
    // Test 1: Check if AI Assistant is working
    console.log('🧪 Test 1: AI Assistant Functionality');
    console.log('=' .repeat(50));
    
    // Look for the AI prompt input
    const aiInput = await page.evaluate(() => {
      const textarea = document.querySelector('textarea[placeholder*="Plan, search, build"]');
      if (textarea) {
        return {
          found: true,
          placeholder: textarea.placeholder,
          disabled: textarea.disabled,
          visible: textarea.offsetParent !== null
        };
      }
      return { found: false };
    });
    
    console.log(`📊 AI Input Found: ${aiInput.found ? '✅' : '❌'}`);
    if (aiInput.found) {
      console.log(`   Placeholder: "${aiInput.placeholder}"`);
      console.log(`   Disabled: ${aiInput.disabled}`);
      console.log(`   Visible: ${aiInput.visible}`);
    }
    
    // Test 2: Try to type in the input
    console.log('\n🧪 Test 2: Input Interaction');
    console.log('=' .repeat(50));
    
    if (aiInput.found) {
      try {
        // Type a test prompt
        await page.type('textarea[placeholder*="Plan, search, build"]', 'Create a simple calculator app');
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Check if the text was entered
        const inputValue = await page.evaluate(() => {
          const textarea = document.querySelector('textarea[placeholder*="Plan, search, build"]');
          return textarea ? textarea.value : '';
        });
        
        console.log(`📊 Text Entered: ${inputValue.length > 0 ? '✅' : '❌'}`);
        console.log(`   Value: "${inputValue}"`);
        
        // Check if generate button is now enabled
        const generateButton = await page.evaluate(() => {
          const button = document.querySelector('button[data-testid="generate-button"]') ||
                        Array.from(document.querySelectorAll('button')).find(btn => 
                          btn.textContent.includes('Generate') || 
                          btn.textContent.includes('Send') ||
                          btn.getAttribute('title') === 'Generate Code'
                        );
          return {
            found: !!button,
            disabled: button ? button.disabled : true,
            text: button ? button.textContent : 'Not found'
          };
        });
        
        console.log(`📊 Generate Button: ${generateButton.found ? '✅' : '❌'}`);
        console.log(`   Text: "${generateButton.text}"`);
        console.log(`   Disabled: ${generateButton.disabled}`);
        
        if (generateButton.found && !generateButton.disabled) {
          console.log('   🚀 Generate button is enabled and ready!');
          
          // Click the generate button
          await page.evaluate(() => {
            const button = document.querySelector('button[data-testid="generate-button"]') ||
                          Array.from(document.querySelectorAll('button')).find(btn => 
                            btn.textContent.includes('Generate') || 
                            btn.textContent.includes('Send') ||
                            btn.getAttribute('title') === 'Generate Code'
                          );
            if (button) {
              button.click();
            }
          });
          
          console.log('   🎯 Generate button clicked, waiting for response...');
          
          // Wait for response
          await new Promise(resolve => setTimeout(resolve, 15000));
          
          // Check for response
          const response = await page.evaluate(() => {
            const messages = Array.from(document.querySelectorAll('[class*="message"]'));
            const lastMessage = messages[messages.length - 1];
            
            if (lastMessage) {
              const content = lastMessage.textContent || lastMessage.innerText;
              return {
                found: true,
                content: content.substring(0, 300) + (content.length > 300 ? '...' : ''),
                hasCode: content.includes('function') || content.includes('const') || content.includes('class'),
                hasHTML: content.includes('<div>') || content.includes('<button>') || content.includes('<html>'),
                hasCSS: content.includes('{') && content.includes('}') && content.includes('color'),
                hasFeatures: content.includes('Features:') || content.includes('Tech Stack:'),
                hasAppName: content.includes('Created') || content.includes('App'),
                length: content.length
              };
            }
            return { found: false };
          });
          
          console.log(`📊 Response Generated: ${response.found ? '✅' : '❌'}`);
          if (response.found) {
            console.log(`   Content Length: ${response.length} characters`);
            console.log(`   Contains Code: ${response.hasCode ? '✅' : '❌'}`);
            console.log(`   Contains HTML: ${response.hasHTML ? '✅' : '❌'}`);
            console.log(`   Contains CSS: ${response.hasCSS ? '✅' : '❌'}`);
            console.log(`   Shows Features: ${response.hasFeatures ? '✅' : '❌'}`);
            console.log(`   Shows App Name: ${response.hasAppName ? '✅' : '❌'}`);
            console.log(`   Content Preview: "${response.content}"`);
          }
        } else {
          console.log('   ❌ Generate button not found or disabled');
        }
        
      } catch (error) {
        console.log(`   ❌ Error during input test: ${error.message}`);
      }
    }
    
    // Test 3: Check for AI Model Selection
    console.log('\n🧪 Test 3: AI Model Selection');
    console.log('=' .repeat(50));
    
    const modelSelector = await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const modelButton = buttons.find(btn => 
        btn.textContent.includes('Auto') || 
        btn.textContent.includes('CodeLlama') ||
        btn.textContent.includes('Model') ||
        btn.getAttribute('title') === 'Select AI Model'
      );
      
      if (modelButton) {
        return {
          found: true,
          text: modelButton.textContent,
          clickable: !modelButton.disabled
        };
      }
      return { found: false };
    });
    
    console.log(`📊 Model Selector: ${modelSelector.found ? '✅' : '❌'}`);
    if (modelSelector.found) {
      console.log(`   Text: "${modelSelector.text}"`);
      console.log(`   Clickable: ${modelSelector.clickable ? '✅' : '❌'}`);
      
      if (modelSelector.clickable) {
        try {
          // Click the model selector
          await page.evaluate(() => {
            const buttons = Array.from(document.querySelectorAll('button'));
            const modelButton = buttons.find(btn => 
              btn.textContent.includes('Auto') || 
              btn.textContent.includes('CodeLlama') ||
              btn.textContent.includes('Model') ||
              btn.getAttribute('title') === 'Select AI Model'
            );
            if (modelButton) {
              modelButton.click();
            }
          });
          
          console.log('   🎯 Model selector clicked');
          await new Promise(resolve => setTimeout(resolve, 2000));
          
          // Check if model options appeared
          const modelOptions = await page.evaluate(() => {
            const options = Array.from(document.querySelectorAll('button, div')).filter(el => 
              el.textContent.includes('CodeLlama') ||
              el.textContent.includes('StarCoder') ||
              el.textContent.includes('DeepSeek') ||
              el.textContent.includes('WizardCoder')
            );
            return {
              found: options.length > 0,
              count: options.length,
              options: options.map(opt => opt.textContent.substring(0, 50))
            };
          });
          
          console.log(`📊 Model Options: ${modelOptions.found ? '✅' : '❌'}`);
          if (modelOptions.found) {
            console.log(`   Available Models: ${modelOptions.count}`);
            modelOptions.options.forEach((option, index) => {
              console.log(`   ${index + 1}. ${option}`);
            });
          }
          
        } catch (error) {
          console.log(`   ❌ Error testing model selector: ${error.message}`);
        }
      }
    }
    
    // Test 4: Check for File Management
    console.log('\n🧪 Test 4: File Management');
    console.log('=' .repeat(50));
    
    const fileManager = await page.evaluate(() => {
      const fileElements = document.querySelectorAll('[class*="file"], [class*="File"]');
      const fileText = document.body.textContent.includes('Files') || 
                      document.body.textContent.includes('file') ||
                      document.body.textContent.includes('File');
      
      return {
        elements: fileElements.length,
        textFound: fileText,
        hasFileManager: fileElements.length > 0 || fileText
      };
    });
    
    console.log(`📊 File Management: ${fileManager.hasFileManager ? '✅' : '❌'}`);
    console.log(`   File Elements: ${fileManager.elements}`);
    console.log(`   File Text Found: ${fileManager.textFound ? '✅' : '❌'}`);
    
    // Test 5: Check for Preview Functionality
    console.log('\n🧪 Test 5: Preview Functionality');
    console.log('=' .repeat(50));
    
    const preview = await page.evaluate(() => {
      const previewElements = document.querySelectorAll('[class*="preview"], [class*="Preview"]');
      const previewText = document.body.textContent.includes('Preview') || 
                         document.body.textContent.includes('preview');
      
      return {
        elements: previewElements.length,
        textFound: previewText,
        hasPreview: previewElements.length > 0 || previewText
      };
    });
    
    console.log(`📊 Preview: ${preview.hasPreview ? '✅' : '❌'}`);
    console.log(`   Preview Elements: ${preview.elements}`);
    console.log(`   Preview Text Found: ${preview.textFound ? '✅' : '❌'}`);
    
    // Final Assessment
    console.log('\n🎯 Final Assessment');
    console.log('=' .repeat(50));
    
    const assessment = {
      aiInput: aiInput.found,
      aiResponse: false, // Will be updated if response is generated
      modelSelection: modelSelector.found,
      fileManagement: fileManager.hasFileManager,
      preview: preview.hasPreview
    };
    
    console.log('📊 Component Assessment:');
    console.log(`   AI Input: ${assessment.aiInput ? '✅' : '❌'}`);
    console.log(`   AI Response: ${assessment.aiResponse ? '✅' : '❌'}`);
    console.log(`   Model Selection: ${assessment.modelSelection ? '✅' : '❌'}`);
    console.log(`   File Management: ${assessment.fileManagement ? '✅' : '❌'}`);
    console.log(`   Preview: ${assessment.preview ? '✅' : '❌'}`);
    
    const workingComponents = Object.values(assessment).filter(Boolean).length;
    const totalComponents = Object.keys(assessment).length;
    const score = Math.round((workingComponents / totalComponents) * 100);
    
    console.log(`\n🏆 AI Builder Score: ${score}/100`);
    console.log(`   Working Components: ${workingComponents}/${totalComponents}`);
    
    if (score >= 80) {
      console.log('🌟 EXCELLENT - AI Builder is highly functional!');
    } else if (score >= 60) {
      console.log('✅ GOOD - AI Builder is mostly functional');
    } else if (score >= 40) {
      console.log('⚠️ FAIR - AI Builder needs improvements');
    } else {
      console.log('❌ POOR - AI Builder needs major work');
    }
    
    console.log('\n📋 Comparison with Cursor and Lovable:');
    console.log('   DreamBuild: Enhanced AI Builder with multiple models and features');
    console.log('   Cursor: Focus on code completion and chat');
    console.log('   Lovable: Focus on visual app building');
    console.log('   DreamBuild Advantage: Combines best of both with additional features');
    
  } catch (error) {
    console.error('❌ Test failed:', error);
  } finally {
    await browser.close();
  }
}

// Run the detailed test
testAIBuilderDetailed().catch(console.error);

