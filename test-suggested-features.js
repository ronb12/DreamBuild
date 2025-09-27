import puppeteer from 'puppeteer';

async function testSuggestedFeatures() {
  console.log('🧪 Testing suggested features for general questions...');
  
  const browser = await puppeteer.launch({ 
    headless: false,
    defaultViewport: null,
    args: ['--start-maximized']
  });
  
  const page = await browser.newPage();
  
  try {
    // Navigate to DreamBuild
    console.log('🌐 Navigating to DreamBuild...');
    await page.goto('https://dreambuild-2024-app.web.app/ai-builder', { 
      waitUntil: 'networkidle2',
      timeout: 30000 
    });
    
    // Wait for the page to load
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Test cases
    const testCases = [
      {
        question: "what's the weather in columbia sc",
        expectedFeatures: false,
        description: "Weather question - should NOT show suggested features"
      },
      {
        question: "how do I cook catfish",
        expectedFeatures: false,
        description: "Cooking question - should NOT show suggested features"
      },
      {
        question: "build a todo list app",
        expectedFeatures: true,
        description: "Code generation - SHOULD show suggested features"
      }
    ];
    
    for (const testCase of testCases) {
      console.log(`\n🔍 Testing: ${testCase.description}`);
      console.log(`Question: "${testCase.question}"`);
      
      // Find the AI Assistant textarea
      const textarea = await page.$('textarea[placeholder*="Describe what you want to build"]');
      if (!textarea) {
        console.log('❌ Could not find AI Assistant textarea');
        continue;
      }
      
      // Clear and type the question
      await textarea.click();
      await textarea.evaluate(el => el.value = '');
      await textarea.type(testCase.question);
      
      // Find and click the send button
      const parentContainer = await textarea.evaluateHandle(el => el.closest('div'));
      const button = await parentContainer.$('button');
      if (button) {
        await button.click();
      } else {
        console.log('❌ Could not find send button');
        continue;
      }
      
      // Wait for response
      console.log('⏳ Waiting for AI response...');
      await new Promise(resolve => setTimeout(resolve, 5000));
      
      // Check for suggested features
      const suggestedFeatures = await page.evaluate(() => {
        const elements = document.querySelectorAll('h3');
        for (let element of elements) {
          if (element.textContent.includes('Suggested Features')) {
            return true;
          }
        }
        return false;
      });
      const hasSuggestedFeatures = suggestedFeatures;
      
      console.log(`📊 Suggested features detected: ${hasSuggestedFeatures}`);
      console.log(`✅ Expected: ${testCase.expectedFeatures ? 'SHOULD show' : 'should NOT show'}`);
      
      if (hasSuggestedFeatures === testCase.expectedFeatures) {
        console.log('✅ Test PASSED');
      } else {
        console.log('❌ Test FAILED');
      }
      
      // Wait before next test
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
    
    console.log('\n🎉 Test completed!');
    
  } catch (error) {
    console.error('❌ Test failed:', error);
  } finally {
    await browser.close();
  }
}

testSuggestedFeatures();
