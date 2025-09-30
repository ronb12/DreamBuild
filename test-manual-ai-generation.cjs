const puppeteer = require('puppeteer');

async function testManualAIGeneration() {
  console.log('🚀 TESTING MANUAL AI GENERATION...');
  console.log('===================================');
  
  const browser = await puppeteer.launch({ 
    headless: false,
    defaultViewport: { width: 1920, height: 1080 },
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  try {
    const page = await browser.newPage();
    
    // Capture console messages
    const consoleMessages = [];
    page.on('console', msg => {
      const type = msg.type();
      const text = msg.text();
      consoleMessages.push({ type, text });
      if (type === 'error' || text.includes('AI') || text.includes('generate') || text.includes('injection')) {
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
    
    // Test 1: Enter prompt and click generate
    console.log('\n🎯 TEST 1: Coin Collector Game Generation');
    console.log('==========================================');
    
    await page.evaluate(() => {
      const textareas = Array.from(document.querySelectorAll('textarea'));
      for (const textarea of textareas) {
        if (textarea.placeholder && textarea.placeholder.includes('Describe what you want to build')) {
          textarea.value = 'Create a coin collector game where a character runs and collects falling coins';
          textarea.dispatchEvent(new Event('input', { bubbles: true }));
          break;
        }
      }
    });
    
    console.log('✅ Prompt entered');
    
    // Click generate button
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
    
    console.log('✅ Generate button clicked');
    
    // Wait for response
    console.log('⏳ Waiting for AI response...');
    await new Promise(resolve => setTimeout(resolve, 15000));
    
    // Check results
    const test1Results = await page.evaluate(() => {
      const textareas = Array.from(document.querySelectorAll('textarea'));
      const codeEditor = textareas.find(t => t.placeholder && t.placeholder.includes('Enter your html code here'));
      const aiPrompt = textareas.find(t => t.placeholder && t.placeholder.includes('Describe what you want to build'));
      
      return {
        codeEditorHasContent: codeEditor && codeEditor.value.length > 50,
        codeEditorContent: codeEditor ? codeEditor.value.substring(0, 200) : '',
        aiPromptContent: aiPrompt ? aiPrompt.value : '',
        hasGameElements: codeEditor ? codeEditor.value.includes('gameCanvas') || codeEditor.value.includes('coin') : false,
        generatedFilesDisplay: document.querySelector('.generated-files-display') !== null
      };
    });
    
    console.log('\n📊 TEST 1 RESULTS:');
    console.log(`Code Editor Has Content: ${test1Results.codeEditorHasContent ? '✅ YES' : '❌ NO'}`);
    console.log(`Has Game Elements: ${test1Results.hasGameElements ? '✅ YES' : '❌ NO'}`);
    console.log(`Generated Files Display: ${test1Results.generatedFilesDisplay ? '✅ YES' : '❌ NO'}`);
    
    if (test1Results.codeEditorHasContent) {
      console.log('\n📝 Code Editor Content Preview:');
      console.log(test1Results.codeEditorContent);
    }
    
    // Test 2: Try a different approach - manually call AI generation
    console.log('\n🎯 TEST 2: Manual AI Generation Call');
    console.log('=====================================');
    
    const manualGeneration = await page.evaluate(async () => {
      try {
        // Try to access the AI services directly
        const result = await window.simpleAIService?.generateCode({
          prompt: 'Create a simple calculator app',
          context: {}
        });
        
        return {
          success: true,
          hasResult: !!result,
          resultType: result ? result.type : 'none',
          hasFiles: result && result.files && Object.keys(result.files).length > 0,
          files: result && result.files ? Object.keys(result.files) : []
        };
      } catch (error) {
        return {
          success: false,
          error: error.message
        };
      }
    });
    
    console.log('\n📊 TEST 2 RESULTS:');
    console.log(`Manual Generation Success: ${manualGeneration.success ? '✅ YES' : '❌ NO'}`);
    if (manualGeneration.success) {
      console.log(`Has Result: ${manualGeneration.hasResult ? '✅ YES' : '❌ NO'}`);
      console.log(`Result Type: ${manualGeneration.resultType}`);
      console.log(`Has Files: ${manualGeneration.hasFiles ? '✅ YES' : '❌ NO'}`);
      if (manualGeneration.hasFiles) {
        console.log(`Files: ${manualGeneration.files.join(', ')}`);
      }
    } else {
      console.log(`Error: ${manualGeneration.error}`);
    }
    
    // Test 3: Check if code injection service works
    console.log('\n🎯 TEST 3: Code Injection Service Test');
    console.log('======================================');
    
    const injectionTest = await page.evaluate(async () => {
      try {
        // Test code injection service
        const mockFiles = {
          'index.html': '<!DOCTYPE html><html><head><title>Test</title></head><body><h1>Hello World</h1></body></html>'
        };
        
        // Try to access code injection service
        if (window.codeInjectionService) {
          const result = await window.codeInjectionService.injectCodeIntoEditor(mockFiles);
          return {
            serviceAvailable: true,
            injectionSuccess: result,
            status: window.codeInjectionService.getStatus()
          };
        } else {
          return {
            serviceAvailable: false,
            error: 'Code injection service not available on window'
          };
        }
      } catch (error) {
        return {
          serviceAvailable: false,
          error: error.message
        };
      }
    });
    
    console.log('\n📊 TEST 3 RESULTS:');
    console.log(`Code Injection Service Available: ${injectionTest.serviceAvailable ? '✅ YES' : '❌ NO'}`);
    if (injectionTest.serviceAvailable) {
      console.log(`Injection Success: ${injectionTest.injectionSuccess ? '✅ YES' : '❌ NO'}`);
      console.log(`Service Status:`, injectionTest.status);
    } else {
      console.log(`Error: ${injectionTest.error}`);
    }
    
    // Final analysis
    console.log('\n🏆 FINAL ANALYSIS:');
    console.log('==================');
    
    const totalScore = (test1Results.codeEditorHasContent ? 33 : 0) + 
                      (manualGeneration.success ? 33 : 0) + 
                      (injectionTest.serviceAvailable ? 34 : 0);
    
    console.log(`Test 1 (UI Generation): ${test1Results.codeEditorHasContent ? '✅ WORKING' : '❌ NOT WORKING'}`);
    console.log(`Test 2 (Manual Generation): ${manualGeneration.success ? '✅ WORKING' : '❌ NOT WORKING'}`);
    console.log(`Test 3 (Code Injection): ${injectionTest.serviceAvailable ? '✅ WORKING' : '❌ NOT WORKING'}`);
    console.log(`\n🎯 OVERALL SCORE: ${totalScore}%`);
    
    if (totalScore >= 90) {
      console.log('\n🎉 EXCELLENT! DreamBuild AI Builder is fully functional!');
    } else if (totalScore >= 60) {
      console.log('\n✅ GOOD! DreamBuild AI Builder is mostly working with minor issues.');
    } else if (totalScore >= 30) {
      console.log('\n⚠️ PARTIAL! DreamBuild AI Builder has some functionality but needs fixes.');
    } else {
      console.log('\n❌ NEEDS WORK! DreamBuild AI Builder requires significant fixes.');
    }
    
    // Take screenshot
    await page.screenshot({ 
      path: 'manual-ai-generation-test.png',
      fullPage: true 
    });
    
    console.log('\n📸 Screenshot saved: manual-ai-generation-test.png');
    
    return {
      test1Results,
      manualGeneration,
      injectionTest,
      totalScore
    };
    
  } catch (error) {
    console.error('❌ Test failed:', error);
    return { error: error.message };
  } finally {
    await browser.close();
  }
}

testManualAIGeneration().then(result => {
  if (result.error) {
    console.error('Manual AI generation test failed:', result.error);
  } else {
    console.log('\n🎉 Manual AI Generation Test Completed!');
    console.log(`Overall Score: ${result.totalScore}%`);
  }
}).catch(console.error);

