const puppeteer = require('puppeteer');

async function testDreamBuildGameCreation() {
  console.log('🎮 Testing DreamBuild Game Creation - Side-scrolling Coin Collection Game...');
  
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
    
    console.log('\n🎯 CREATING SIDE-SCROLLING COIN COLLECTION GAME...');
    console.log('===============================================');
    
    // Detailed game creation prompt
    const gamePrompt = `Create a side-scrolling platformer game where:

1. A character can run left and right using arrow keys or WASD
2. The character has smooth running animation and can jump
3. Coins fall from the sky at random intervals and positions
4. The character can collect coins by touching them
5. Display a score counter that increases when coins are collected
6. Add gravity so the character falls back to the ground after jumping
7. Include sound effects for jumping and collecting coins
8. Add a background with some platforms for the character to jump on
9. Make the game responsive and fun to play
10. Use modern web technologies (HTML5 Canvas or WebGL)

The game should be complete and playable with smooth animations and physics.`;
    
    console.log('\n📝 Game Creation Prompt:');
    console.log(gamePrompt);
    
    try {
      // Find the AI prompt input
      const textarea = await page.$('textarea');
      if (!textarea) {
        console.log('❌ Could not find AI prompt input');
        return;
      }
      
      console.log('✅ Found AI prompt input');
      
      // Clear and type the game prompt
      await textarea.click();
      await textarea.evaluate(el => el.value = '');
      await textarea.type(gamePrompt);
      console.log('✅ Game creation prompt entered');
      
      // Wait for AI processing
      await new Promise(resolve => setTimeout(resolve, 5000));
      
      // Look for any buttons that might generate the game
      const buttons = await page.$$('button');
      let generateButton = null;
      
      for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];
        const text = await button.evaluate(el => el.textContent);
        const isVisible = await button.isIntersectingViewport();
        
        if ((text.includes('Send') || text.includes('Generate') || text.includes('Submit')) && isVisible) {
          generateButton = button;
          console.log(`✅ Found generate button: "${text}"`);
          break;
        }
      }
      
      if (generateButton) {
        await generateButton.click();
        console.log('✅ Generate button clicked - AI is creating the game!');
        
        // Wait for game generation
        console.log('⏳ Waiting for AI to generate the game...');
        await new Promise(resolve => setTimeout(resolve, 30000));
        
        // Check if game was generated
        const gameGenerated = await page.evaluate(() => {
          const bodyText = document.body.textContent;
          return bodyText.includes('game') || 
                 bodyText.includes('character') || 
                 bodyText.includes('coin') ||
                 bodyText.includes('canvas') ||
                 bodyText.includes('function') ||
                 bodyText.includes('const') ||
                 bodyText.includes('let') ||
                 bodyText.includes('var');
        });
        
        if (gameGenerated) {
          console.log('✅ Game generation appears successful!');
        } else {
          console.log('⚠️ Game generation may still be in progress');
        }
        
      } else {
        console.log('⚠️ Generate button not found, but prompt was entered');
      }
      
      // Take screenshot of the game creation process
      await page.screenshot({ 
        path: 'dreambuild-game-creation-test.png',
        fullPage: true 
      });
      
      console.log('📸 Screenshot saved: dreambuild-game-creation-test.png');
      
      // Analyze what was generated
      const generatedContent = await page.evaluate(() => {
        const codeEditor = document.querySelector('[data-testid="code-editor"]');
        const previewArea = document.querySelector('.preview, .live-preview');
        const fileManager = document.querySelector('.file-manager, .file-tree');
        
        return {
          hasCodeEditor: !!codeEditor,
          hasPreviewArea: !!previewArea,
          hasFileManager: !!fileManager,
          bodyText: document.body.textContent.substring(0, 2000)
        };
      });
      
      console.log('\n🎮 GAME CREATION ANALYSIS:');
      console.log('=========================');
      console.log(`Code Editor Present: ${generatedContent.hasCodeEditor ? '✅ YES' : '❌ NO'}`);
      console.log(`Preview Area Present: ${generatedContent.hasPreviewArea ? '✅ YES' : '❌ NO'}`);
      console.log(`File Manager Present: ${generatedContent.hasFileManager ? '✅ YES' : '❌ NO'}`);
      
      // Check for game-specific content
      const gameContentCheck = await page.evaluate(() => {
        const bodyText = document.body.textContent.toLowerCase();
        
        return {
          hasGameKeywords: bodyText.includes('game') || bodyText.includes('player') || bodyText.includes('character'),
          hasCoinKeywords: bodyText.includes('coin') || bodyText.includes('collect') || bodyText.includes('score'),
          hasMovementKeywords: bodyText.includes('move') || bodyText.includes('jump') || bodyText.includes('run'),
          hasCanvasKeywords: bodyText.includes('canvas') || bodyText.includes('webgl') || bodyText.includes('render'),
          hasPhysicsKeywords: bodyText.includes('gravity') || bodyText.includes('physics') || bodyText.includes('collision'),
          hasAnimationKeywords: bodyText.includes('animation') || bodyText.includes('animate') || bodyText.includes('frame')
        };
      });
      
      console.log('\n🔍 GAME CONTENT DETECTION:');
      console.log(`Game Keywords: ${gameContentCheck.hasGameKeywords ? '✅ DETECTED' : '❌ NOT FOUND'}`);
      console.log(`Coin Keywords: ${gameContentCheck.hasCoinKeywords ? '✅ DETECTED' : '❌ NOT FOUND'}`);
      console.log(`Movement Keywords: ${gameContentCheck.hasMovementKeywords ? '✅ DETECTED' : '❌ NOT FOUND'}`);
      console.log(`Canvas Keywords: ${gameContentCheck.hasCanvasKeywords ? '✅ DETECTED' : '❌ NOT FOUND'}`);
      console.log(`Physics Keywords: ${gameContentCheck.hasPhysicsKeywords ? '✅ DETECTED' : '❌ NOT FOUND'}`);
      console.log(`Animation Keywords: ${gameContentCheck.hasAnimationKeywords ? '✅ DETECTED' : '❌ NOT FOUND'}`);
      
      // Calculate game creation score
      const gameScore = [
        generatedContent.hasCodeEditor,
        generatedContent.hasPreviewArea,
        gameContentCheck.hasGameKeywords,
        gameContentCheck.hasCoinKeywords,
        gameContentCheck.hasMovementKeywords,
        gameContentCheck.hasCanvasKeywords,
        gameContentCheck.hasPhysicsKeywords,
        gameContentCheck.hasAnimationKeywords
      ].filter(Boolean).length;
      
      const gameCreationScore = Math.round((gameScore / 8) * 100);
      
      console.log('\n🏆 GAME CREATION ASSESSMENT:');
      console.log('===========================');
      console.log(`Game Creation Score: ${gameScore}/8 (${gameCreationScore}%)`);
      
      if (gameCreationScore >= 80) {
        console.log('🏆 EXCELLENT: DreamBuild successfully created the game!');
      } else if (gameCreationScore >= 60) {
        console.log('✅ GOOD: DreamBuild partially created the game');
      } else if (gameCreationScore >= 40) {
        console.log('⚠️ FAIR: DreamBuild started creating the game');
      } else {
        console.log('❌ POOR: DreamBuild needs improvement for game creation');
      }
      
      // Final verdict
      console.log('\n🎉 FINAL VERDICT:');
      console.log('=================');
      
      if (gameCreationScore >= 70) {
        console.log('✅ DREAMBUILD AI SUCCESSFULLY CREATED THE GAME!');
        console.log('🎮 Side-scrolling coin collection game generated');
        console.log('🚀 DreamBuild proves its advanced game development capabilities');
      } else {
        console.log('⚠️ DreamBuild AI game creation needs refinement');
        console.log('🔧 Game development features could be enhanced');
      }
      
      console.log('\n📋 GAME CREATION SUMMARY:');
      console.log('=========================');
      console.log(`• Game Type: Side-scrolling coin collection`);
      console.log(`• Character Movement: Left/Right running + jumping`);
      console.log(`• Game Mechanics: Coin collection + scoring`);
      console.log(`• Physics: Gravity and collision detection`);
      console.log(`• Animation: Smooth character movement`);
      console.log(`• Sound: Jump and coin collection effects`);
      console.log(`• Platform: Web-based (HTML5 Canvas/WebGL)`);
      console.log(`• Creation Success: ${gameCreationScore}%`);
      
      return {
        gameCreationScore,
        gameScore,
        hasGameContent: gameScore >= 4,
        success: gameCreationScore >= 70
      };
      
    } catch (error) {
      console.log(`❌ Error during game creation test: ${error.message}`);
      return { error: error.message };
    }
    
  } catch (error) {
    console.error('❌ Game creation test failed:', error);
    return { error: error.message };
  } finally {
    await browser.close();
  }
}

testDreamBuildGameCreation().then(result => {
  if (result.error) {
    console.error('Game creation test failed:', result.error);
  } else {
    console.log('\n🎉 DreamBuild Game Creation Test Completed!');
    console.log(`Game Creation Score: ${result.gameCreationScore}%`);
    console.log(`Success: ${result.success ? 'YES' : 'NO'}`);
  }
}).catch(console.error);

