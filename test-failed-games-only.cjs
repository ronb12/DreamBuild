/**
 * Test ONLY the 17 failed games to verify fixes
 * Product of Bradley Virtual Solutions, LLC
 */

const puppeteer = require('puppeteer');

const FAILED_GAMES = [
  { name: 'Memory Card Game', prompt: 'Create a memory card matching game', checkFor: ['card', 'match', 'flip'] },
  { name: 'Breakout', prompt: 'Create breakout brick breaker game', checkFor: ['brick', 'paddle', 'ball'] },
  { name: 'Flappy Bird', prompt: 'Build flappy bird game', checkFor: ['bird', 'pipe', 'jump'] },
  { name: 'Minesweeper', prompt: 'Build minesweeper game', checkFor: ['mine', 'flag', 'reveal'] },
  { name: 'Solitaire', prompt: 'Create solitaire card game', checkFor: ['card', 'stack', 'suit'] },
  { name: 'Poker', prompt: 'Create poker game', checkFor: ['card', 'hand', 'bet'] },
  { name: 'Bingo', prompt: 'Build bingo game', checkFor: ['card', 'number', 'mark'] },
  { name: 'Roulette', prompt: 'Build roulette game', checkFor: ['wheel', 'bet', 'number'] },
  { name: 'Puzzle Slider', prompt: 'Create sliding tile puzzle game', checkFor: ['tile', 'slide', 'solve'] },
  { name: 'Bubble Shooter', prompt: 'Build bubble shooter game', checkFor: ['bubble', 'shoot', 'pop'] },
  { name: 'Pacman', prompt: 'Create pacman game', checkFor: ['pacman', 'ghost', 'dot'] },
  { name: 'Asteroids', prompt: 'Build asteroids shooter game', checkFor: ['ship', 'asteroid', 'shoot'] },
  { name: 'Galaga', prompt: 'Create galaga shooter game', checkFor: ['ship', 'enemy', 'shoot'] },
  { name: 'Number Guesser', prompt: 'Build number guessing game', checkFor: ['guess', 'number', 'hint'] },
  { name: 'Rock Paper Scissors', prompt: 'Create rock paper scissors game', checkFor: ['rock', 'paper', 'scissors'] },
  { name: 'Quiz Bee', prompt: 'Create quiz bee competition game', checkFor: ['question', 'answer', 'buzz'] },
  { name: 'Dungeon Crawler', prompt: 'Build a dungeon crawler game', checkFor: ['dungeon', 'enemy', 'loot'] }
];

async function testGame(browser, game, testNumber) {
  const page = await browser.newPage();
  
  console.log(`\n🎮 Test ${testNumber}/17: ${game.name}`);
  
  try {
    await page.goto('https://dreambuild-2024-app.web.app/#/ai-builder', { waitUntil: 'networkidle0', timeout: 30000 });
    await new Promise(r => setTimeout(r, 3000));

    const textarea = await page.waitForSelector('textarea[placeholder="Describe what you want to build..."]', { timeout: 10000 });
    await textarea.click({ clickCount: 3 });
    await textarea.type(game.prompt, { delay: 20 });
    
    const button = await page.waitForSelector('button[data-testid="generate-button"]');
    await button.click();
    
    await new Promise(r => setTimeout(r, 15000));

    await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const previewBtn = buttons.find(btn => btn.textContent.includes('Preview'));
      if (previewBtn) previewBtn.click();
    });
    await new Promise(r => setTimeout(r, 2000));

    const check = await page.evaluate((terms) => {
      const iframe = document.querySelector('iframe[title="Live Preview"]');
      if (!iframe) return { exists: false };
      
      const doc = iframe.contentDocument || iframe.contentWindow.document;
      if (!doc) return { exists: true, accessible: false };
      
      const html = doc.documentElement.innerHTML.toLowerCase();
      const bodyText = doc.body.textContent.toLowerCase();
      const scriptText = doc.querySelector('script')?.textContent.toLowerCase() || '';
      
      const matchedTerms = terms.filter(term => 
        html.includes(term) || bodyText.includes(term) || scriptText.includes(term)
      );
      
      return {
        exists: true,
        accessible: true,
        hasCanvas: doc.querySelector('canvas') !== null,
        hasButton: doc.querySelectorAll('button').length > 0,
        matchedTerms,
        allHTML: html.substring(0, 500)
      };
    }, game.checkFor);

    const passed = check.matchedTerms && check.matchedTerms.length >= 1;
    console.log(`   Canvas:${check.hasCanvas ? '✅' : '❌'} Button:${check.hasButton ? '✅' : '❌'} Terms: ${check.matchedTerms?.join(', ') || 'none'}`);
    console.log(`   ${passed ? '✅ PASS' : '❌ FAIL'}: ${game.name}\n`);

    await page.close();
    return { game: game.name, passed, matchedTerms: check.matchedTerms };

  } catch (error) {
    console.error(`   ❌ ERROR: ${error.message}\n`);
    await page.close();
    return { game: game.name, passed: false, error: error.message };
  }
}

async function runFailedGamesTest() {
  console.log('\n🔧 TESTING 17 PREVIOUSLY FAILED GAMES\n');

  const browser = await puppeteer.launch({
    headless: false,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const results = [];
  for (let i = 0; i < FAILED_GAMES.length; i++) {
    const result = await testGame(browser, FAILED_GAMES[i], i + 1);
    results.push(result);
    await new Promise(r => setTimeout(r, 1000));
  }

  await browser.close();

  const passed = results.filter(r => r.passed).length;
  const passRate = (passed / FAILED_GAMES.length * 100).toFixed(1);

  console.log('\n' + '='.repeat(80));
  console.log(`📊 RETEST RESULTS: ${passed}/17 NOW PASSING (${passRate}%)`);
  console.log('='.repeat(80) + '\n');

  results.forEach(r => {
    console.log(`${r.passed ? '✅' : '❌'} ${r.game} ${r.matchedTerms ? `(${r.matchedTerms.join(', ')})` : ''}`);
  });

  // Calculate overall improvement
  const originalTotal = 50;
  const originalPassed = 33;
  const newPassed = originalPassed + passed;
  const newPassRate = (newPassed / originalTotal * 100).toFixed(1);

  console.log('\n' + '='.repeat(80));
  console.log(`🎉 OVERALL: ${newPassed}/50 games passing (${newPassRate}%)`);
  console.log(`📈 Improvement: ${originalPassed} → ${newPassed} (+${passed} games fixed!)`);
  console.log('='.repeat(80) + '\n');

  if (parseFloat(newPassRate) >= 90) {
    console.log('🏆 SUCCESS! 90%+ pass rate achieved!\n');
  } else if (parseFloat(newPassRate) >= 80) {
    console.log('✅ GOOD! 80%+ pass rate achieved!\n');
  } else {
    console.log(`⚠️  Still need to fix ${17 - passed} more games to reach 90%\n`);
  }
}

runFailedGamesTest();

