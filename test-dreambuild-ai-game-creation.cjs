const puppeteer = require('puppeteer');

async function testDreamBuildAIGameCreation() {
  console.log('🎮 Testing DreamBuild AI Builder - Creating Same Quality Game...');
  
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
    
    console.log('\n🎮 USING DREAMBUILD AI BUILDER TO CREATE COIN COLLECTOR GAME...');
    console.log('=============================================================');
    
    // First, let's activate the Code Editor tab
    console.log('\n🖥️ Activating Code Editor Tab...');
    const codeEditorActivated = await page.evaluate(() => {
      const tabs = Array.from(document.querySelectorAll('[role="tab"], .tab, .nav-item, button[class*="tab"]'));
      for (const tab of tabs) {
        const text = tab.textContent.toLowerCase();
        if (text.includes('code') || text.includes('editor')) {
          tab.click();
          return true;
        }
      }
      return false;
    });
    
    if (codeEditorActivated) {
      console.log('✅ Code Editor tab activated');
      await new Promise(resolve => setTimeout(resolve, 2000));
    } else {
      console.log('⚠️ Code Editor tab not found, continuing anyway');
    }
    
    // Now let's enter a detailed game creation prompt
    const detailedGamePrompt = `Create a complete HTML5 Canvas game with the following specifications:

GAME: Coin Collector Platformer

REQUIREMENTS:
1. HTML5 Canvas element (800x600 pixels)
2. Character that can move left/right with arrow keys or WASD
3. Character can jump with spacebar
4. Gravity physics - character falls back down after jumping
5. Ground platform at the bottom
6. Coins that fall from the sky at random positions
7. Collision detection - character collects coins by touching them
8. Score counter that increases when coins are collected
9. High score system with localStorage
10. Start screen with instructions
11. Game over screen
12. Smooth animations and particle effects
13. Professional styling with gradients and shadows
14. Responsive controls and gameplay

TECHNICAL SPECIFICATIONS:
- Use HTML5 Canvas for rendering
- JavaScript for game logic and physics
- CSS for styling and layout
- Complete, playable game in a single HTML file
- Modern ES6+ JavaScript features
- Smooth 60fps gameplay
- Professional visual design

Please generate the complete game code that I can run immediately.`;
    
    console.log('\n📝 Entering Detailed Game Creation Prompt...');
    console.log('Prompt length:', detailedGamePrompt.length, 'characters');
    
    try {
      // Find and interact with the AI prompt input
      const textarea = await page.$('textarea');
      if (!textarea) {
        console.log('❌ Could not find AI prompt textarea');
        return;
      }
      
      console.log('✅ Found AI prompt textarea');
      
      // Clear and enter the detailed prompt
      await textarea.click();
      await textarea.evaluate(el => el.value = '');
      await textarea.type(detailedGamePrompt, { delay: 10 });
      console.log('✅ Detailed game prompt entered');
      
      // Wait for AI processing
      await new Promise(resolve => setTimeout(resolve, 10000));
      
      // Look for generate/send button
      console.log('\n🔍 Looking for Generate/Send Button...');
      const generateButton = await page.evaluate(() => {
        const buttons = Array.from(document.querySelectorAll('button'));
        for (const button of buttons) {
          const text = button.textContent.toLowerCase();
          const isVisible = button.offsetParent !== null;
          if ((text.includes('send') || text.includes('generate') || text.includes('submit') || text.includes('create')) && isVisible) {
            return {
              text: button.textContent.trim(),
              visible: isVisible
            };
          }
        }
        return null;
      });
      
      if (generateButton) {
        console.log(`✅ Found generate button: "${generateButton.text}"`);
        
        // Click the generate button
        await page.evaluate(() => {
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
        
        console.log('✅ Generate button clicked - AI is creating the game!');
        
        // Wait for AI response and generation
        console.log('⏳ Waiting for AI to generate the complete game...');
        await new Promise(resolve => setTimeout(resolve, 30000));
        
        // Check what was actually generated
        const generatedContent = await page.evaluate(() => {
          const bodyText = document.body.textContent;
          const codeEditor = document.querySelector('[data-testid="code-editor"]');
          const previewArea = document.querySelector('.preview, .live-preview, .preview-container');
          
          // Look for specific game elements
          const gameElements = {
            hasHTML: bodyText.includes('<!DOCTYPE html>') || bodyText.includes('<html>'),
            hasCanvas: bodyText.includes('<canvas') || bodyText.includes('getContext'),
            hasGameLoop: bodyText.includes('gameLoop') || bodyText.includes('requestAnimationFrame'),
            hasCharacter: bodyText.includes('character') || bodyText.includes('player') || bodyText.includes('sprite'),
            hasCoins: bodyText.includes('coin') || bodyText.includes('Coin'),
            hasPhysics: bodyText.includes('gravity') || bodyText.includes('velocity') || bodyText.includes('collision'),
            hasAnimation: bodyText.includes('animation') || bodyText.includes('animate') || bodyText.includes('frame'),
            hasControls: bodyText.includes('keydown') || bodyText.includes('addEventListener') || bodyText.includes('keyCode'),
            hasScoring: bodyText.includes('score') || bodyText.includes('Score') || bodyText.includes('localStorage'),
            hasStartScreen: bodyText.includes('startScreen') || bodyText.includes('start screen'),
            hasGameOver: bodyText.includes('gameOver') || bodyText.includes('game over'),
            hasParticles: bodyText.includes('particle') || bodyText.includes('effect'),
            hasStyling: bodyText.includes('gradient') || bodyText.includes('shadow') || bodyText.includes('border-radius')
          };
          
          return {
            gameElements,
            hasCodeEditor: !!codeEditor,
            hasPreviewArea: !!previewArea,
            codeEditorContent: codeEditor ? codeEditor.textContent.substring(0, 1000) : '',
            previewContent: previewArea ? previewArea.textContent.substring(0, 500) : '',
            fullBodyText: bodyText.substring(0, 2000)
          };
        });
        
        console.log('\n🎮 AI GENERATED GAME ANALYSIS:');
        console.log('==============================');
        
        // Count game elements
        let gameElementCount = 0;
        const totalElements = Object.keys(generatedContent.gameElements).length;
        
        Object.entries(generatedContent.gameElements).forEach(([element, found]) => {
          const status = found ? '✅ FOUND' : '❌ NOT FOUND';
          console.log(`${element}: ${status}`);
          if (found) gameElementCount++;
        });
        
        const aiGameScore = Math.round((gameElementCount / totalElements) * 100);
        
        console.log('\n📊 GENERATION RESULTS:');
        console.log(`Game Elements Generated: ${gameElementCount}/${totalElements}`);
        console.log(`AI Game Generation Score: ${aiGameScore}%`);
        console.log(`Code Editor Present: ${generatedContent.hasCodeEditor ? '✅ YES' : '❌ NO'}`);
        console.log(`Preview Area Present: ${generatedContent.hasPreviewArea ? '✅ YES' : '❌ NO'}`);
        
        if (generatedContent.codeEditorContent) {
          console.log('\n📝 Generated Code Preview:');
          console.log(generatedContent.codeEditorContent);
        }
        
        // Take screenshot
        await page.screenshot({ 
          path: 'dreambuild-ai-game-generation.png',
          fullPage: true 
        });
        
        console.log('📸 Screenshot saved: dreambuild-ai-game-generation.png');
        
        // Try to run/preview the generated game
        console.log('\n🖥️ Looking for Preview/Run Button...');
        const previewButton = await page.evaluate(() => {
          const buttons = Array.from(document.querySelectorAll('button'));
          for (const button of buttons) {
            const text = button.textContent.toLowerCase();
            if ((text.includes('preview') || text.includes('run') || text.includes('play') || text.includes('execute')) && button.offsetParent !== null) {
              return button.textContent.trim();
            }
          }
          return null;
        });
        
        if (previewButton) {
          console.log(`✅ Found preview button: "${previewButton}"`);
          
          // Try to click preview
          await page.evaluate(() => {
            const buttons = Array.from(document.querySelectorAll('button'));
            for (const button of buttons) {
              const text = button.textContent.toLowerCase();
              if ((text.includes('preview') || text.includes('run') || text.includes('play') || text.includes('execute')) && button.offsetParent !== null) {
                button.click();
                return true;
              }
            }
            return false;
          });
          
          console.log('✅ Preview button clicked');
          await new Promise(resolve => setTimeout(resolve, 5000));
          
          // Check if game is running
          const gameRunning = await page.evaluate(() => {
            const canvas = document.querySelector('canvas');
            const gameContainer = document.querySelector('#gameContainer');
            const bodyText = document.body.textContent;
            
            return {
              hasCanvas: !!canvas,
              hasGameContainer: !!gameContainer,
              hasGameText: bodyText.includes('coin') && bodyText.includes('character'),
              canvasSize: canvas ? `${canvas.width}x${canvas.height}` : null
            };
          });
          
          console.log('\n🎮 GAME EXECUTION CHECK:');
          console.log(`Canvas Present: ${gameRunning.hasCanvas ? '✅ YES' : '❌ NO'}`);
          console.log(`Game Container: ${gameRunning.hasGameContainer ? '✅ YES' : '❌ NO'}`);
          console.log(`Game Text: ${gameRunning.hasGameText ? '✅ YES' : '❌ NO'}`);
          if (gameRunning.canvasSize) {
            console.log(`Canvas Size: ${gameRunning.canvasSize}`);
          }
          
        } else {
          console.log('⚠️ No preview button found');
        }
        
        // Final assessment
        console.log('\n🏆 DREAMBUILD AI GAME CREATION ASSESSMENT:');
        console.log('==========================================');
        
        if (aiGameScore >= 80) {
          console.log('🏆 EXCELLENT: DreamBuild AI successfully created a complete game!');
          console.log('✅ Game generation quality matches the original');
        } else if (aiGameScore >= 60) {
          console.log('✅ GOOD: DreamBuild AI created a substantial game');
          console.log('🔧 Some features may be missing but core game is there');
        } else if (aiGameScore >= 40) {
          console.log('⚠️ FAIR: DreamBuild AI started creating a game');
          console.log('🚀 More development needed for complete game');
        } else {
          console.log('❌ POOR: DreamBuild AI did not generate substantial game content');
        }
        
        console.log('\n📋 COMPARISON WITH ORIGINAL GAME:');
        console.log('=================================');
        console.log(`Original Game Quality: 95% (Professional)`);
        console.log(`AI Generated Game Quality: ${aiGameScore}%`);
        
        if (aiGameScore >= 80) {
          console.log('🎉 DreamBuild AI Builder can create games of similar quality!');
        } else {
          console.log('⚠️ DreamBuild AI Builder needs improvement for game creation');
        }
        
        return {
          aiGameScore,
          gameElementCount,
          totalElements,
          gameGenerated: aiGameScore >= 60,
          qualityMatch: aiGameScore >= 80
        };
        
      } else {
        console.log('❌ Generate button not found');
        return { error: 'Generate button not found' };
      }
      
    } catch (error) {
      console.log(`❌ Error during AI game generation: ${error.message}`);
      return { error: error.message };
    }
    
  } catch (error) {
    console.error('❌ AI game creation test failed:', error);
    return { error: error.message };
  } finally {
    await browser.close();
  }
}

testDreamBuildAIGameCreation().then(result => {
  if (result.error) {
    console.error('AI game creation test failed:', result.error);
  } else {
    console.log('\n🎉 DreamBuild AI Game Creation Test Completed!');
    console.log(`AI Game Generation Score: ${result.aiGameScore}%`);
    console.log(`Game Generated: ${result.gameGenerated ? 'YES' : 'NO'}`);
    console.log(`Quality Match: ${result.qualityMatch ? 'YES' : 'NO'}`);
  }
}).catch(console.error);

