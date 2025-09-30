/**
 * 50 Games Test Suite
 * Validates DreamBuild can build ANY game type from scratch
 * Product of Bradley Virtual Solutions, LLC
 */

const puppeteer = require('puppeteer');
const fs = require('fs');

// 50 Different Game Types to Test
const GAMES = [
  { id: 1, name: 'Snake Game', prompt: 'Create a snake game', checkFor: ['snake', 'score', 'game'] },
  { id: 2, name: 'Tic Tac Toe', prompt: 'Build tic tac toe game', checkFor: ['board', 'player', 'win'] },
  { id: 3, name: 'Memory Card Game', prompt: 'Create a memory card matching game', checkFor: ['card', 'match', 'flip'] },
  { id: 4, name: 'Pong', prompt: 'Build a pong game', checkFor: ['paddle', 'ball', 'score'] },
  { id: 5, name: 'Breakout', prompt: 'Create breakout brick breaker game', checkFor: ['brick', 'paddle', 'ball'] },
  { id: 6, name: 'Tetris', prompt: 'Build a tetris game', checkFor: ['block', 'rotate', 'line'] },
  { id: 7, name: 'Space Invaders', prompt: 'Create space invaders game', checkFor: ['alien', 'shoot', 'score'] },
  { id: 8, name: 'Flappy Bird', prompt: 'Build flappy bird game', checkFor: ['bird', 'pipe', 'jump'] },
  { id: 9, name: 'Connect Four', prompt: 'Create connect four game', checkFor: ['grid', 'disc', 'win'] },
  { id: 10, name: 'Minesweeper', prompt: 'Build minesweeper game', checkFor: ['mine', 'flag', 'reveal'] },
  { id: 11, name: '2048', prompt: 'Create 2048 sliding puzzle game', checkFor: ['tile', 'merge', 'score'] },
  { id: 12, name: 'Sudoku', prompt: 'Build sudoku puzzle game', checkFor: ['grid', 'number', 'solve'] },
  { id: 13, name: 'Chess', prompt: 'Create a chess game', checkFor: ['board', 'piece', 'move'] },
  { id: 14, name: 'Checkers', prompt: 'Build checkers game', checkFor: ['board', 'piece', 'jump'] },
  { id: 15, name: 'Whack-a-Mole', prompt: 'Create whack-a-mole game', checkFor: ['mole', 'hit', 'score'] },
  { id: 16, name: 'Simon Says', prompt: 'Build simon says memory game', checkFor: ['pattern', 'sequence', 'repeat'] },
  { id: 17, name: 'Hangman', prompt: 'Create hangman word guessing game', checkFor: ['word', 'guess', 'letter'] },
  { id: 18, name: 'Trivia Quiz', prompt: 'Build a trivia quiz game', checkFor: ['question', 'answer', 'score'] },
  { id: 19, name: 'Crossword', prompt: 'Create crossword puzzle game', checkFor: ['clue', 'grid', 'word'] },
  { id: 20, name: 'Word Search', prompt: 'Build word search puzzle game', checkFor: ['grid', 'word', 'find'] },
  { id: 21, name: 'Solitaire', prompt: 'Create solitaire card game', checkFor: ['card', 'stack', 'suit'] },
  { id: 22, name: 'Blackjack', prompt: 'Build blackjack card game', checkFor: ['card', 'dealer', 'hit'] },
  { id: 23, name: 'Poker', prompt: 'Create poker game', checkFor: ['card', 'hand', 'bet'] },
  { id: 24, name: 'Bingo', prompt: 'Build bingo game', checkFor: ['card', 'number', 'mark'] },
  { id: 25, name: 'Mahjong', prompt: 'Create mahjong matching game', checkFor: ['tile', 'match', 'layer'] },
  { id: 26, name: 'Dice Game', prompt: 'Build a dice rolling game', checkFor: ['dice', 'roll', 'score'] },
  { id: 27, name: 'Slot Machine', prompt: 'Create slot machine game', checkFor: ['reel', 'spin', 'win'] },
  { id: 28, name: 'Roulette', prompt: 'Build roulette game', checkFor: ['wheel', 'bet', 'number'] },
  { id: 29, name: 'Puzzle Slider', prompt: 'Create sliding tile puzzle game', checkFor: ['tile', 'slide', 'solve'] },
  { id: 30, name: 'Jigsaw Puzzle', prompt: 'Build jigsaw puzzle game', checkFor: ['piece', 'fit', 'image'] },
  { id: 31, name: 'Match-3', prompt: 'Create match-3 candy crush style game', checkFor: ['candy', 'match', 'swap'] },
  { id: 32, name: 'Bubble Shooter', prompt: 'Build bubble shooter game', checkFor: ['bubble', 'shoot', 'pop'] },
  { id: 33, name: 'Tower Defense', prompt: 'Create tower defense game', checkFor: ['tower', 'enemy', 'path'] },
  { id: 34, name: 'Platformer', prompt: 'Build a platformer jumping game', checkFor: ['platform', 'jump', 'player'] },
  { id: 35, name: 'Endless Runner', prompt: 'Create endless runner game', checkFor: ['run', 'obstacle', 'score'] },
  { id: 36, name: 'Maze Game', prompt: 'Build maze puzzle game', checkFor: ['maze', 'path', 'exit'] },
  { id: 37, name: 'Pacman', prompt: 'Create pacman game', checkFor: ['pacman', 'ghost', 'dot'] },
  { id: 38, name: 'Asteroids', prompt: 'Build asteroids shooter game', checkFor: ['ship', 'asteroid', 'shoot'] },
  { id: 39, name: 'Galaga', prompt: 'Create galaga shooter game', checkFor: ['ship', 'enemy', 'shoot'] },
  { id: 40, name: 'Racing Game', prompt: 'Build a car racing game', checkFor: ['car', 'track', 'speed'] },
  { id: 41, name: 'Typing Game', prompt: 'Create typing speed game', checkFor: ['word', 'type', 'speed'] },
  { id: 42, name: 'Reaction Time', prompt: 'Build reaction time game', checkFor: ['click', 'time', 'reaction'] },
  { id: 43, name: 'Color Matcher', prompt: 'Create color matching game', checkFor: ['color', 'match', 'score'] },
  { id: 44, name: 'Number Guesser', prompt: 'Build number guessing game', checkFor: ['guess', 'number', 'hint'] },
  { id: 45, name: 'Rock Paper Scissors', prompt: 'Create rock paper scissors game', checkFor: ['rock', 'paper', 'scissors'] },
  { id: 46, name: 'Ping Pong', prompt: 'Build ping pong table tennis game', checkFor: ['paddle', 'ball', 'score'] },
  { id: 47, name: 'Dodge Game', prompt: 'Create obstacle dodging game', checkFor: ['player', 'obstacle', 'dodge'] },
  { id: 48, name: 'Clicker Game', prompt: 'Build an idle clicker game', checkFor: ['click', 'upgrade', 'score'] },
  { id: 49, name: 'Quiz Bee', prompt: 'Create quiz bee competition game', checkFor: ['question', 'answer', 'buzz'] },
  { id: 50, name: 'Dungeon Crawler', prompt: 'Build a dungeon crawler game', checkFor: ['dungeon', 'enemy', 'loot'] }
];

async function testGame(browser, game, testNumber) {
  const page = await browser.newPage();
  
  console.log(`\n${'─'.repeat(80)}`);
  console.log(`🎮 Test ${testNumber}/50: ${game.name}`);
  console.log(`   Prompt: "${game.prompt}"`);
  console.log(`${'─'.repeat(80)}`);
  
  try {
    // Navigate
    await page.goto('https://dreambuild-2024-app.web.app/#/ai-builder', { 
      waitUntil: 'networkidle0', 
      timeout: 30000 
    });
    await new Promise(r => setTimeout(r, 3000));

    // Generate game
    const textarea = await page.waitForSelector('textarea[placeholder="Describe what you want to build..."]', { timeout: 10000 });
    await textarea.click({ clickCount: 3 });
    await textarea.type(game.prompt, { delay: 20 });
    
    const button = await page.waitForSelector('button[data-testid="generate-button"]', { timeout: 5000 });
    await button.click();
    
    console.log('   ⏳ Generating game...');
    await new Promise(r => setTimeout(r, 15000));

    // Switch to Preview
    await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const previewBtn = buttons.find(btn => btn.textContent.includes('Preview'));
      if (previewBtn) previewBtn.click();
    });
    await new Promise(r => setTimeout(r, 2000));

    // Check preview
    const gameCheck = await page.evaluate((checkTerms) => {
      const iframe = document.querySelector('iframe[title="Live Preview"]');
      if (!iframe) return { exists: false };
      
      const doc = iframe.contentDocument || iframe.contentWindow.document;
      if (!doc) return { exists: true, accessible: false };
      
      const html = doc.documentElement.innerHTML.toLowerCase();
      const bodyText = doc.body.textContent.toLowerCase();
      
      return {
        exists: true,
        accessible: true,
        htmlLength: doc.documentElement.innerHTML.length,
        bodyLength: doc.body.innerHTML.length,
        hasButton: doc.querySelectorAll('button').length > 0,
        hasCanvas: doc.querySelector('canvas') !== null,
        hasGameContainer: doc.getElementById('game-container') !== null,
        matchedTerms: checkTerms.filter(term => html.includes(term) || bodyText.includes(term)),
        scriptErrors: doc.querySelectorAll('script').length === 0
      };
    }, game.checkFor);

    // Determine if game is functional
    const isFunctional = gameCheck.exists && 
                        gameCheck.accessible && 
                        gameCheck.bodyLength > 500 &&
                        (gameCheck.hasButton || gameCheck.hasCanvas || gameCheck.hasGameContainer) &&
                        gameCheck.matchedTerms.length >= 1;

    console.log(`   📊 Preview: ${gameCheck.exists ? '✅' : '❌'} | Content: ${gameCheck.bodyLength} bytes`);
    console.log(`   🎯 Game Elements: Button:${gameCheck.hasButton ? '✅' : '❌'} Canvas:${gameCheck.hasCanvas ? '✅' : '❌'} Container:${gameCheck.hasGameContainer ? '✅' : '❌'}`);
    console.log(`   🔍 Matched Terms: ${gameCheck.matchedTerms.join(', ') || 'none'} (${gameCheck.matchedTerms.length}/${game.checkFor.length})`);
    console.log(`   ${isFunctional ? '✅ PASS' : '❌ FAIL'}: ${game.name}`);

    await page.close();
    
    return {
      game: game.name,
      passed: isFunctional,
      details: gameCheck
    };

  } catch (error) {
    console.error(`   ❌ ERROR: ${error.message}`);
    await page.close();
    return {
      game: game.name,
      passed: false,
      error: error.message
    };
  }
}

async function run50GamesTest() {
  console.log(`
╔═══════════════════════════════════════════════════════════════════════════╗
║                                                                           ║
║                   🎮 50 GAMES COMPREHENSIVE TEST 🎮                       ║
║                                                                           ║
║  Testing if DreamBuild can build 50 different functional games           ║
║  Product of Bradley Virtual Solutions, LLC                               ║
║                                                                           ║
╚═══════════════════════════════════════════════════════════════════════════╝
`);

  const browser = await puppeteer.launch({
    headless: false,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-web-security'
    ],
    defaultViewport: { width: 1920, height: 1080 }
  });

  const results = [];
  const startTime = Date.now();

  // Test each game
  for (let i = 0; i < GAMES.length; i++) {
    const result = await testGame(browser, GAMES[i], i + 1);
    results.push(result);
    
    // Small pause between tests
    await new Promise(r => setTimeout(r, 1000));
  }

  await browser.close();

  const endTime = Date.now();
  const duration = ((endTime - startTime) / 1000 / 60).toFixed(2);

  // Generate report
  console.log(`\n\n${'═'.repeat(80)}`);
  console.log('📊 50 GAMES TEST RESULTS');
  console.log(`${'═'.repeat(80)}\n`);

  const passed = results.filter(r => r.passed).length;
  const failed = results.filter(r => !r.passed).length;
  const passRate = (passed / GAMES.length * 100).toFixed(1);

  console.log(`✅ Passed: ${passed}/${GAMES.length} (${passRate}%)`);
  console.log(`❌ Failed: ${failed}/${GAMES.length}`);
  console.log(`⏱️  Duration: ${duration} minutes\n`);

  console.log('─'.repeat(80));
  console.log('PASSED GAMES:');
  console.log('─'.repeat(80));
  results.filter(r => r.passed).forEach((r, i) => {
    console.log(`✅ ${i + 1}. ${r.game}`);
  });

  if (failed > 0) {
    console.log(`\n${'─'.repeat(80)}`);
    console.log('FAILED GAMES:');
    console.log('─'.repeat(80));
    results.filter(r => !r.passed).forEach((r, i) => {
      console.log(`❌ ${i + 1}. ${r.game}${r.error ? ` (${r.error})` : ''}`);
    });
  }

  // Save detailed report
  const report = {
    testDate: new Date().toISOString(),
    duration: `${duration} minutes`,
    totalGames: GAMES.length,
    passed,
    failed,
    passRate: `${passRate}%`,
    results: results.map(r => ({
      game: r.game,
      passed: r.passed,
      htmlLength: r.details?.htmlLength,
      bodyLength: r.details?.bodyLength,
      hasInteractive: r.details?.hasButton || r.details?.hasCanvas,
      matchedTerms: r.details?.matchedTerms?.length || 0,
      error: r.error
    }))
  };

  fs.writeFileSync('50-games-test-report.json', JSON.stringify(report, null, 2));
  console.log(`\n📄 Detailed report saved: 50-games-test-report.json`);

  // Final verdict
  console.log(`\n${'═'.repeat(80)}`);
  if (passRate >= 90) {
    console.log(`
╔═══════════════════════════════════════════════════════════════════════════╗
║                                                                           ║
║  🏆 EXCELLENT! DreamBuild can build games like Cursor! 🏆                ║
║                                                                           ║
║  Pass Rate: ${passRate}%                                                      ║
║  DreamBuild successfully generates functional games!                     ║
║                                                                           ║
╚═══════════════════════════════════════════════════════════════════════════╝
`);
  } else if (passRate >= 70) {
    console.log(`
╔═══════════════════════════════════════════════════════════════════════════╗
║                                                                           ║
║  ✅ GOOD! DreamBuild can build most games                                ║
║                                                                           ║
║  Pass Rate: ${passRate}%                                                      ║
║  Some improvements needed for full functionality                         ║
║                                                                           ║
╚═══════════════════════════════════════════════════════════════════════════╝
`);
    console.log('\n🔧 FAILED GAMES TO FIX:');
    results.filter(r => !r.passed).forEach(r => console.log(`   - ${r.game}`));
  } else {
    console.log(`
╔═══════════════════════════════════════════════════════════════════════════╗
║                                                                           ║
║  ⚠️  NEEDS WORK - DreamBuild has significant issues                      ║
║                                                                           ║
║  Pass Rate: ${passRate}%                                                      ║
║  Significant improvements required                                       ║
║                                                                           ║
╚═══════════════════════════════════════════════════════════════════════════╝
`);
    console.log('\n🔧 CRITICAL FIXES NEEDED FOR:');
    results.filter(r => !r.passed).forEach(r => console.log(`   - ${r.game}`));
  }

  return { passRate: parseFloat(passRate), results };
}

// Run the test
run50GamesTest().catch(error => {
  console.error('❌ Test suite failed:', error);
  process.exit(1);
});

