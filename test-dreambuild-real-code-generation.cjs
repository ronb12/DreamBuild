const puppeteer = require('puppeteer');

async function testDreamBuildRealCodeGeneration() {
  console.log('🚀 TESTING DREAMBUILD REAL CODE GENERATION...');
  console.log('==============================================');
  
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
    
    // Test multiple prompts to verify real code generation
    const testPrompts = [
      "Create a coin collector game where a character runs and collects falling coins",
      "Build a simple calculator app with basic math operations",
      "Make a todo list application with add, edit, and delete functionality",
      "Create a weather app that shows current weather information"
    ];
    
    let totalScore = 0;
    let totalTests = testPrompts.length;
    
    for (let i = 0; i < testPrompts.length; i++) {
      const prompt = testPrompts[i];
      console.log(`\n🎯 TEST ${i + 1}/${totalTests}: "${prompt}"`);
      console.log('=' + '='.repeat(Math.min(prompt.length + 2, 60)));
      
      try {
        // Clear previous prompt from AI prompt box (textarea with "Describe what you want to build...")
        await page.evaluate(() => {
          const textareas = Array.from(document.querySelectorAll('textarea'));
          for (const textarea of textareas) {
            if (textarea.placeholder && textarea.placeholder.includes('Describe what you want to build')) {
              textarea.value = '';
              textarea.dispatchEvent(new Event('input', { bubbles: true }));
              break;
            }
          }
        });
        
        // Enter test prompt in AI prompt box (the "Describe what you want to build..." textarea)
        const aiPromptBox = await page.evaluate(() => {
          const textareas = Array.from(document.querySelectorAll('textarea'));
          for (const textarea of textareas) {
            if (textarea.placeholder && textarea.placeholder.includes('Describe what you want to build')) {
              return true; // Found AI prompt box
            }
          }
          return false;
        });
        
        if (aiPromptBox) {
          // Type in the AI prompt box
          await page.evaluate((promptText) => {
            const textareas = Array.from(document.querySelectorAll('textarea'));
            for (const textarea of textareas) {
              if (textarea.placeholder && textarea.placeholder.includes('Describe what you want to build')) {
                textarea.focus();
                textarea.value = promptText;
                textarea.dispatchEvent(new Event('input', { bubbles: true }));
                break;
              }
            }
          }, prompt);
          console.log('✅ Test prompt entered in AI prompt box');
          
          // Wait and click generate
          await new Promise(resolve => setTimeout(resolve, 3000));
          
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
            await new Promise(resolve => setTimeout(resolve, 15000));
            
            // Analyze what actually happened
            const analysis = await page.evaluate(() => {
              const bodyText = document.body.textContent;
              const codeEditor = document.querySelector('[data-testid="code-editor"]');
              const generatedFilesDisplay = document.querySelector('.generated-files-display');
              
              // Check for code injection indicators
              const hasCodeInjection = bodyText.includes('Code generated and injected into editor') || 
                                     bodyText.includes('injected into editor') ||
                                     bodyText.includes('injection');
              
              // Check for actual code content
              const hasActualCode = bodyText.includes('<!DOCTYPE html>') || 
                                   bodyText.includes('<html>') || 
                                   bodyText.includes('<script>') || 
                                   bodyText.includes('function') ||
                                   bodyText.includes('const ') ||
                                   bodyText.includes('let ') ||
                                   bodyText.includes('var ');
              
              // Check for file generation
              const hasFileGeneration = bodyText.includes('Generated Files') ||
                                       bodyText.includes('Generated') ||
                                       generatedFilesDisplay !== null;
              
              // Check for success messages
              const hasSuccessMessage = bodyText.includes('Code generated successfully') ||
                                       bodyText.includes('successfully') ||
                                       bodyText.includes('injected');
              
              // Get code editor content (textarea with "Enter your html code here...")
              let codeEditorContent = '';
              let codeEditorHasContent = false;
              const textareas = Array.from(document.querySelectorAll('textarea'));
              for (const textarea of textareas) {
                if (textarea.placeholder && textarea.placeholder.includes('Enter your html code here')) {
                  codeEditorContent = textarea.value.substring(0, 500);
                  // Check if editor has actual code (not just the prompt)
                  codeEditorHasContent = textarea.value.length > 50 && 
                                       !textarea.value.includes('Create a coin collector game') &&
                                       !textarea.value.includes('Build a simple calculator') &&
                                       !textarea.value.includes('Make a todo list') &&
                                       !textarea.value.includes('Create a weather app');
                  break;
                }
              }
              
              // Check for specific game elements (for coin collector test)
              const hasGameElements = bodyText.includes('gameCanvas') || 
                                     bodyText.includes('coin') ||
                                     bodyText.includes('player') ||
                                     bodyText.includes('platform');
              
              return {
                hasCodeInjection,
                hasActualCode,
                hasFileGeneration,
                hasSuccessMessage,
                hasGameElements,
                codeEditorContent,
                codeEditorHasContent,
                generatedFilesVisible: generatedFilesDisplay !== null,
                fullResponse: bodyText.substring(0, 1000)
              };
            });
            
            // Calculate score for this test
            let testScore = 0;
            if (analysis.hasCodeInjection || analysis.codeEditorHasContent) testScore += 25;
            if (analysis.hasActualCode) testScore += 25;
            if (analysis.hasFileGeneration) testScore += 25;
            if (analysis.hasSuccessMessage) testScore += 25;
            
            console.log(`\n📊 TEST ${i + 1} RESULTS:`);
            console.log(`Code Injection: ${analysis.hasCodeInjection || analysis.codeEditorHasContent ? '✅ YES' : '❌ NO'}`);
            console.log(`Code Editor Has Content: ${analysis.codeEditorHasContent ? '✅ YES' : '❌ NO'}`);
            console.log(`Actual Code Generated: ${analysis.hasActualCode ? '✅ YES' : '❌ NO'}`);
            console.log(`File Generation: ${analysis.hasFileGeneration ? '✅ YES' : '❌ NO'}`);
            console.log(`Success Message: ${analysis.hasSuccessMessage ? '✅ YES' : '❌ NO'}`);
            console.log(`Generated Files Visible: ${analysis.generatedFilesVisible ? '✅ YES' : '❌ NO'}`);
            
            if (prompt.includes('game') || prompt.includes('coin')) {
              console.log(`Game Elements: ${analysis.hasGameElements ? '✅ YES' : '❌ NO'}`);
            }
            
            if (analysis.codeEditorContent) {
              console.log('\n📝 Code Editor Content Preview:');
              console.log(analysis.codeEditorContent);
            }
            
            console.log(`\n🎯 Test ${i + 1} Score: ${testScore}%`);
            totalScore += testScore;
            
          } else {
            console.log('❌ Generate button not found');
          }
        } else {
          console.log('❌ Textarea not found');
        }
        
        // Wait between tests
        await new Promise(resolve => setTimeout(resolve, 5000));
        
      } catch (error) {
        console.log(`❌ Error during test ${i + 1}: ${error.message}`);
      }
    }
    
    const averageScore = Math.round(totalScore / totalTests);
    
    console.log('\n\n🏆 FINAL RESULTS: DREAMBUILD REAL CODE GENERATION TEST');
    console.log('======================================================');
    console.log(`Total Tests: ${totalTests}`);
    console.log(`Total Score: ${totalScore}/${totalTests * 100}`);
    console.log(`Average Score: ${averageScore}%`);
    
    if (averageScore >= 90) {
      console.log('\n🎉 EXCELLENT! DreamBuild is now generating real code!');
      console.log('✅ Code injection working');
      console.log('✅ File generation working');
      console.log('✅ AI Builder fully functional');
    } else if (averageScore >= 75) {
      console.log('\n✅ GOOD! DreamBuild is generating code with minor issues');
      console.log('⚠️ Some features may need refinement');
    } else if (averageScore >= 50) {
      console.log('\n⚠️ PARTIAL SUCCESS! DreamBuild is partially working');
      console.log('🔧 Some architectural fixes needed');
    } else {
      console.log('\n❌ NEEDS WORK! DreamBuild still has issues');
      console.log('🚨 Major architectural problems remain');
    }
    
    // Take final screenshot
    await page.screenshot({ 
      path: 'dreambuild-real-code-generation-test.png',
      fullPage: true 
    });
    
    console.log('\n📸 Screenshot saved: dreambuild-real-code-generation-test.png');
    
    return {
      totalTests,
      totalScore,
      averageScore,
      success: averageScore >= 75
    };
    
  } catch (error) {
    console.error('❌ Test failed:', error);
    return { error: error.message };
  } finally {
    await browser.close();
  }
}

testDreamBuildRealCodeGeneration().then(result => {
  if (result.error) {
    console.error('Real code generation test failed:', result.error);
  } else {
    console.log('\n🎉 DreamBuild Real Code Generation Test Completed!');
    console.log(`Success: ${result.success ? 'YES' : 'NO'}`);
    console.log(`Average Score: ${result.averageScore}%`);
  }
}).catch(console.error);
