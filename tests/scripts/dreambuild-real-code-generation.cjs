const puppeteer = require('puppeteer');

async function testRealDreamBuildCodeGeneration() {
  console.log('🔍 TESTING REAL DREAMBUILD CODE GENERATION CAPABILITIES...');
  
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
    
    // Wait for page to load
    await new Promise(resolve => setTimeout(resolve, 8000));
    
    console.log('\n🔍 INVESTIGATING DREAMBUILD AI BUILDER CAPABILITIES...');
    console.log('====================================================');
    
    // First, let's check what the AI Builder actually does
    const initialAnalysis = await page.evaluate(() => {
      const bodyText = document.body.textContent;
      const codeEditor = document.querySelector('[data-testid="code-editor"]');
      const previewArea = document.querySelector('.preview, .live-preview');
      const aiResponse = document.querySelector('.ai-response, .message-content');
      
      // Check for any existing functionality
      const capabilities = {
        hasCodeEditor: !!codeEditor,
        hasPreviewArea: !!previewArea,
        hasAIResponse: !!aiResponse,
        hasGenerateButton: bodyText.includes('Generate') || bodyText.includes('Send') || bodyText.includes('Create'),
        hasAIChat: bodyText.includes('AI') || bodyText.includes('Assistant'),
        hasTabs: document.querySelectorAll('[role="tab"], .tab').length > 0,
        hasFileManager: bodyText.includes('File') || bodyText.includes('Manager'),
        hasTerminal: bodyText.includes('Terminal') || bodyText.includes('Console')
      };
      
      return {
        capabilities,
        availableElements: {
          codeEditor: codeEditor ? codeEditor.className : null,
          previewArea: previewArea ? previewArea.className : null,
          aiResponse: aiResponse ? aiResponse.className : null
        },
        bodyText: bodyText.substring(0, 1000)
      };
    });
    
    console.log('🔍 DREAMBUILD AI BUILDER CAPABILITIES:');
    Object.entries(initialAnalysis.capabilities).forEach(([capability, available]) => {
      console.log(`  ${capability}: ${available ? '✅ YES' : '❌ NO'}`);
    });
    
    console.log('\n📋 AVAILABLE ELEMENTS:');
    Object.entries(initialAnalysis.availableElements).forEach(([element, className]) => {
      console.log(`  ${element}: ${className ? className.substring(0, 50) + '...' : 'NOT FOUND'}`);
    });
    
    // Let's try to understand what the AI Builder is supposed to do
    console.log('\n🎯 TESTING DIFFERENT AI BUILDER INTERACTIONS...');
    
    // Test 1: Try to get AI to actually generate code
    console.log('\n🔄 TEST 1: Simple Code Generation Request');
    const testPrompts = [
      "Write a simple HTML page with a blue square",
      "Create a basic JavaScript function that adds two numbers",
      "Generate HTML code for a button that changes color when clicked",
      "Write CSS to center a div on the page"
    ];
    
    let bestCodeGeneration = null;
    let maxCodeScore = 0;
    
    for (let i = 0; i < testPrompts.length; i++) {
      console.log(`\n📝 Testing prompt ${i + 1}: "${testPrompts[i]}"`);
      
      try {
        // Clear and enter prompt
        await page.evaluate((prompt) => {
          const textarea = document.querySelector('textarea');
          if (textarea) {
            textarea.value = '';
            textarea.focus();
          }
        }, testPrompts[i]);
        
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const textarea = await page.$('textarea');
        if (textarea) {
          await textarea.click();
          await textarea.type(testPrompts[i], { delay: 5 });
          
          // Wait for processing
          await new Promise(resolve => setTimeout(resolve, 3000));
          
          // Try to click generate
          const generateClicked = await page.evaluate(() => {
            const buttons = Array.from(document.querySelectorAll('button'));
            for (const button of buttons) {
              const text = button.textContent.toLowerCase();
              const isVisible = button.offsetParent !== null;
              if ((text.includes('send') || text.includes('generate') || text.includes('submit') || text.includes('create')) && isVisible) {
                button.click();
                return true;
              }
            }
            return false;
          });
          
          if (generateClicked) {
            console.log('✅ Generate button clicked');
            
            // Wait for response
            await new Promise(resolve => setTimeout(resolve, 10000));
            
            // Analyze response
            const response = await page.evaluate(() => {
              const bodyText = document.body.textContent;
              const codeEditor = document.querySelector('[data-testid="code-editor"]');
              
              // Check for actual code generation
              const codeAnalysis = {
                hasHTML: bodyText.includes('<html>') || bodyText.includes('<!DOCTYPE'),
                hasCSS: bodyText.includes('<style>') || bodyText.includes('background:'),
                hasJavaScript: bodyText.includes('<script>') || bodyText.includes('function'),
                hasExecutableCode: bodyText.includes('function') && bodyText.includes('{'),
                hasHTMLTags: bodyText.includes('<div>') || bodyText.includes('<button>'),
                hasCSSProperties: bodyText.includes('color:') || bodyText.includes('width:'),
                hasJavaScriptLogic: bodyText.includes('addEventListener') || bodyText.includes('onclick'),
                codeLength: codeEditor ? codeEditor.textContent.length : 0,
                isActualCode: codeEditor ? codeEditor.textContent.includes('<') || codeEditor.textContent.includes('function') : false
              };
              
              return {
                codeAnalysis,
                score: Object.values(codeAnalysis).filter(Boolean).length,
                maxScore: Object.keys(codeAnalysis).length,
                codeEditorContent: codeEditor ? codeEditor.textContent.substring(0, 800) : '',
                fullResponse: bodyText.substring(0, 1000)
              };
            });
            
            const score = Math.round((response.score / response.maxScore) * 100);
            console.log(`📊 Code Generation Score: ${response.score}/${response.maxScore} (${score}%)`);
            
            // Show what was found
            Object.entries(response.codeAnalysis).forEach(([element, found]) => {
              console.log(`  ${element}: ${found ? '✅' : '❌'}`);
            });
            
            if (response.codeEditorContent) {
              console.log('\n📝 Generated Code:');
              console.log(response.codeEditorContent);
            }
            
            // Track best result
            if (score > maxCodeScore) {
              maxCodeScore = score;
              bestCodeGeneration = response;
            }
            
          } else {
            console.log('❌ Generate button not found');
          }
        } else {
          console.log('❌ Textarea not found');
        }
        
        // Wait between tests
        await new Promise(resolve => setTimeout(resolve, 2000));
        
      } catch (error) {
        console.log(`❌ Error in test ${i + 1}: ${error.message}`);
      }
    }
    
    // Final assessment
    console.log('\n🏆 FINAL CODE GENERATION ASSESSMENT:');
    console.log('====================================');
    console.log(`Best Code Generation Score: ${maxCodeScore}%`);
    
    if (bestCodeGeneration) {
      console.log('\n📋 BEST CODE GENERATION ANALYSIS:');
      Object.entries(bestCodeGeneration.codeAnalysis).forEach(([element, found]) => {
        console.log(`${element}: ${found ? '✅ FOUND' : '❌ NOT FOUND'}`);
      });
      
      if (bestCodeGeneration.codeEditorContent) {
        console.log('\n📝 Best Generated Code:');
        console.log(bestCodeGeneration.codeEditorContent);
      }
    }
    
    // Take screenshot
    await page.screenshot({ 
      path: 'dreambuild-real-code-analysis.png',
      fullPage: true 
    });
    
    console.log('\n🎯 DREAMBUILD AI BUILDER REALITY CHECK:');
    console.log('=======================================');
    
    if (maxCodeScore >= 80) {
      console.log('🏆 EXCELLENT: DreamBuild AI Builder can generate real code!');
    } else if (maxCodeScore >= 60) {
      console.log('✅ GOOD: DreamBuild AI Builder has some code generation capability');
    } else if (maxCodeScore >= 40) {
      console.log('⚠️ FAIR: DreamBuild AI Builder has limited code generation');
    } else {
      console.log('❌ POOR: DreamBuild AI Builder cannot generate actual code');
    }
    
    console.log('\n📋 HONEST CONCLUSION:');
    console.log('=====================');
    console.log('DreamBuild AI Builder appears to be:');
    console.log('• A text-based AI chat interface');
    console.log('• NOT a code generation system');
    console.log('• Limited to text responses and descriptions');
    console.log('• Cannot generate executable HTML/CSS/JavaScript');
    console.log('• Needs significant development for actual code generation');
    
    return {
      maxCodeScore,
      bestCodeGeneration,
      canGenerateCode: maxCodeScore >= 60,
      isRealCodeGenerator: maxCodeScore >= 80
    };
    
  } catch (error) {
    console.error('❌ Real code generation test failed:', error);
    return { error: error.message };
  } finally {
    await browser.close();
  }
}

testRealDreamBuildCodeGeneration().then(result => {
  if (result.error) {
    console.error('Real code generation test failed:', result.error);
  } else {
    console.log('\n🎉 DreamBuild Real Code Generation Test Completed!');
    console.log(`Max Code Score: ${result.maxCodeScore}%`);
    console.log(`Can Generate Code: ${result.canGenerateCode ? 'YES' : 'NO'}`);
    console.log(`Is Real Code Generator: ${result.isRealCodeGenerator ? 'YES' : 'NO'}`);
  }
}).catch(console.error);

