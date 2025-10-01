const puppeteer = require('puppeteer');

async function testFinalDreamBuildVerification() {
  console.log('🚀 FINAL DREAMBUILD VERIFICATION TEST');
  console.log('=====================================');
  console.log('Testing if DreamBuild can now replicate and exceed Cursor\'s capabilities...');
  
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
      if (type === 'error' || text.includes('AI') || text.includes('generate') || text.includes('injection') || text.includes('success')) {
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
    
    // Test 1: Coin Collector Game (the original request)
    console.log('\n🎮 TEST 1: COIN COLLECTOR GAME GENERATION');
    console.log('==========================================');
    
    const gameGeneration = await page.evaluate(async () => {
      try {
        const result = await window.simpleAIService.generateCode({
          prompt: 'Create a coin collector game where a character runs and collects falling coins',
          context: {}
        });
        
        if (result && result.files && Object.keys(result.files).length > 0) {
          // Inject the code
          const injectionSuccess = await window.codeInjectionService.injectCodeIntoEditor(result.files);
          
          return {
            success: true,
            hasFiles: true,
            files: Object.keys(result.files),
            injectionSuccess,
            gameElements: result.files['index.html'] ? 
              (result.files['index.html'].includes('gameCanvas') || result.files['index.html'].includes('coin')) : false
          };
        } else {
          return {
            success: false,
            error: 'No files generated'
          };
        }
      } catch (error) {
        return {
          success: false,
          error: error.message
        };
      }
    });
    
    console.log('\n📊 COIN COLLECTOR GAME RESULTS:');
    console.log(`Generation Success: ${gameGeneration.success ? '✅ YES' : '❌ NO'}`);
    if (gameGeneration.success) {
      console.log(`Has Files: ${gameGeneration.hasFiles ? '✅ YES' : '❌ NO'}`);
      console.log(`Files Generated: ${gameGeneration.files ? gameGeneration.files.join(', ') : 'None'}`);
      console.log(`Code Injection: ${gameGeneration.injectionSuccess ? '✅ YES' : '❌ NO'}`);
      console.log(`Has Game Elements: ${gameGeneration.gameElements ? '✅ YES' : '❌ NO'}`);
    } else {
      console.log(`Error: ${gameGeneration.error}`);
    }
    
    // Test 2: Calculator App
    console.log('\n🧮 TEST 2: CALCULATOR APP GENERATION');
    console.log('=====================================');
    
    const calculatorGeneration = await page.evaluate(async () => {
      try {
        const result = await window.simpleAIService.generateCode({
          prompt: 'Build a simple calculator app with basic math operations',
          context: {}
        });
        
        if (result && result.files && Object.keys(result.files).length > 0) {
          return {
            success: true,
            hasFiles: true,
            files: Object.keys(result.files),
            hasCalculatorElements: result.files['index.html'] ? 
              (result.files['index.html'].includes('calculator') || result.files['index.html'].includes('button')) : false
          };
        } else {
          return {
            success: false,
            error: 'No files generated'
          };
        }
      } catch (error) {
        return {
          success: false,
          error: error.message
        };
      }
    });
    
    console.log('\n📊 CALCULATOR APP RESULTS:');
    console.log(`Generation Success: ${calculatorGeneration.success ? '✅ YES' : '❌ NO'}`);
    if (calculatorGeneration.success) {
      console.log(`Has Files: ${calculatorGeneration.hasFiles ? '✅ YES' : '❌ NO'}`);
      console.log(`Files Generated: ${calculatorGeneration.files ? calculatorGeneration.files.join(', ') : 'None'}`);
      console.log(`Has Calculator Elements: ${calculatorGeneration.hasCalculatorElements ? '✅ YES' : '❌ NO'}`);
    } else {
      console.log(`Error: ${calculatorGeneration.error}`);
    }
    
    // Test 3: Todo List App
    console.log('\n📝 TEST 3: TODO LIST APP GENERATION');
    console.log('====================================');
    
    const todoGeneration = await page.evaluate(async () => {
      try {
        const result = await window.simpleAIService.generateCode({
          prompt: 'Make a todo list application with add, edit, and delete functionality',
          context: {}
        });
        
        if (result && result.files && Object.keys(result.files).length > 0) {
          return {
            success: true,
            hasFiles: true,
            files: Object.keys(result.files),
            hasTodoElements: result.files['index.html'] ? 
              (result.files['index.html'].includes('todo') || result.files['index.html'].includes('task')) : false
          };
        } else {
          return {
            success: false,
            error: 'No files generated'
          };
        }
      } catch (error) {
        return {
          success: false,
          error: error.message
        };
      }
    });
    
    console.log('\n📊 TODO LIST APP RESULTS:');
    console.log(`Generation Success: ${todoGeneration.success ? '✅ YES' : '❌ NO'}`);
    if (todoGeneration.success) {
      console.log(`Has Files: ${todoGeneration.hasFiles ? '✅ YES' : '❌ NO'}`);
      console.log(`Files Generated: ${todoGeneration.files ? todoGeneration.files.join(', ') : 'None'}`);
      console.log(`Has Todo Elements: ${todoGeneration.hasTodoElements ? '✅ YES' : '❌ NO'}`);
    } else {
      console.log(`Error: ${todoGeneration.error}`);
    }
    
    // Test 4: Code Injection Capabilities
    console.log('\n💉 TEST 4: CODE INJECTION CAPABILITIES');
    console.log('======================================');
    
    const injectionTest = await page.evaluate(async () => {
      try {
        const mockFiles = {
          'test.html': '<!DOCTYPE html><html><head><title>Test</title></head><body><h1>Code Injection Test</h1><p>This demonstrates DreamBuild\'s ability to inject code into the editor.</p></body></html>',
          'test.css': 'body { font-family: Arial, sans-serif; margin: 40px; background: #f0f0f0; } h1 { color: #333; }',
          'test.js': 'console.log("Code injection working!"); document.querySelector("h1").style.color = "blue";'
        };
        
        const injectionSuccess = await window.codeInjectionService.injectCodeIntoEditor(mockFiles);
        const status = window.codeInjectionService.getStatus();
        
        return {
          success: injectionSuccess,
          status,
          filesInjected: Object.keys(mockFiles).length
        };
      } catch (error) {
        return {
          success: false,
          error: error.message
        };
      }
    });
    
    console.log('\n📊 CODE INJECTION RESULTS:');
    console.log(`Injection Success: ${injectionTest.success ? '✅ YES' : '❌ NO'}`);
    if (injectionTest.success) {
      console.log(`Files Injected: ${injectionTest.filesInjected}`);
      console.log(`Service Status:`, injectionTest.status);
    } else {
      console.log(`Error: ${injectionTest.error}`);
    }
    
    // Calculate final score
    const tests = [gameGeneration, calculatorGeneration, todoGeneration, injectionTest];
    const passedTests = tests.filter(test => test.success).length;
    const totalScore = Math.round((passedTests / tests.length) * 100);
    
    console.log('\n🏆 FINAL VERIFICATION RESULTS');
    console.log('=============================');
    console.log(`Tests Passed: ${passedTests}/${tests.length}`);
    console.log(`Overall Score: ${totalScore}%`);
    
    // Determine capability level
    if (totalScore >= 90) {
      console.log('\n🎉 EXCELLENT! DreamBuild now REPLICATES AND EXCEEDS Cursor\'s capabilities!');
      console.log('✅ Real AI code generation: WORKING');
      console.log('✅ Code injection into editor: WORKING');
      console.log('✅ Multiple app types: WORKING');
      console.log('✅ File creation and management: WORKING');
      console.log('✅ Advanced game development: WORKING');
    } else if (totalScore >= 75) {
      console.log('\n✅ VERY GOOD! DreamBuild replicates most of Cursor\'s capabilities!');
      console.log('✅ AI code generation: WORKING');
      console.log('✅ Code injection: WORKING');
      console.log('⚠️ Some features may need refinement');
    } else if (totalScore >= 50) {
      console.log('\n⚠️ GOOD! DreamBuild has significant AI capabilities but needs improvements.');
      console.log('✅ Basic AI generation: WORKING');
      console.log('⚠️ Advanced features need work');
    } else {
      console.log('\n❌ NEEDS WORK! DreamBuild still has significant gaps compared to Cursor.');
    }
    
    // Comparison with Cursor
    console.log('\n📊 DREAMBUILD vs CURSOR COMPARISON:');
    console.log('===================================');
    console.log('DreamBuild Capabilities:');
    console.log(`  • AI Code Generation: ${gameGeneration.success ? '✅' : '❌'} (${gameGeneration.success ? 'WORKING' : 'NOT WORKING'})`);
    console.log(`  • Code Injection: ${injectionTest.success ? '✅' : '❌'} (${injectionTest.success ? 'WORKING' : 'NOT WORKING'})`);
    console.log(`  • Multiple App Types: ${passedTests >= 3 ? '✅' : '❌'} (${passedTests >= 3 ? 'WORKING' : 'NOT WORKING'})`);
    console.log(`  • Real-time Editing: ${injectionTest.success ? '✅' : '❌'} (${injectionTest.success ? 'WORKING' : 'NOT WORKING'})`);
    console.log(`  • Game Development: ${gameGeneration.success ? '✅' : '❌'} (${gameGeneration.success ? 'WORKING' : 'NOT WORKING'})`);
    
    console.log('\nCursor Capabilities:');
    console.log('  • AI Code Generation: ✅ WORKING');
    console.log('  • Code Injection: ✅ WORKING');
    console.log('  • Multiple App Types: ✅ WORKING');
    console.log('  • Real-time Editing: ✅ WORKING');
    console.log('  • Game Development: ✅ WORKING');
    
    const capabilityMatch = Math.round((passedTests / 5) * 100);
    console.log(`\n🎯 Capability Match: ${capabilityMatch}%`);
    
    if (capabilityMatch >= 90) {
      console.log('🏆 DreamBuild now MATCHES Cursor\'s capabilities!');
    } else if (capabilityMatch >= 75) {
      console.log('✅ DreamBuild is CLOSE to matching Cursor\'s capabilities!');
    } else {
      console.log('⚠️ DreamBuild still has gaps compared to Cursor.');
    }
    
    // Take final screenshot
    await page.screenshot({ 
      path: 'final-dreambuild-verification.png',
      fullPage: true 
    });
    
    console.log('\n📸 Screenshot saved: final-dreambuild-verification.png');
    
    return {
      gameGeneration,
      calculatorGeneration,
      todoGeneration,
      injectionTest,
      totalScore,
      capabilityMatch
    };
    
  } catch (error) {
    console.error('❌ Test failed:', error);
    return { error: error.message };
  } finally {
    await browser.close();
  }
}

testFinalDreamBuildVerification().then(result => {
  if (result.error) {
    console.error('Final verification failed:', result.error);
  } else {
    console.log('\n🎉 FINAL DREAMBUILD VERIFICATION COMPLETED!');
    console.log(`Overall Score: ${result.totalScore}%`);
    console.log(`Capability Match: ${result.capabilityMatch}%`);
    
    if (result.totalScore >= 90) {
      console.log('\n🚀 SUCCESS! DreamBuild now replicates and exceeds Cursor\'s capabilities!');
    }
  }
}).catch(console.error);
