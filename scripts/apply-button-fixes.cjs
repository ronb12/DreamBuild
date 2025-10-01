const fs = require('fs');

console.log('🔧 Applying universal button fix to all games...\n');

let code = fs.readFileSync('src/services/dreamBuildAI.js', 'utf8');

const UNIVERSAL_FIX = `
// Initialize when DOM ready
let game
function initGame() {
  game = new GAME_CLASS()
  window.game = game
  console.log('✅ GAME_NAME ready!')
}

// UNIVERSAL BUTTON FIX
function ensureButtonsWork(retries = 0) {
  const startBtn = document.getElementById('start-btn')
  const restartBtn = document.getElementById('restart-btn')
  
  if (startBtn && restartBtn && game) {
    const newStartBtn = startBtn.cloneNode(true)
    const newRestartBtn = restartBtn.cloneNode(true)
    
    newStartBtn.addEventListener('click', () => {
      console.log('🚀 START!')
      document.getElementById('game-overlay').style.display = 'none'
      game.start && game.start()
    })
    
    newRestartBtn.addEventListener('click', () => {
      console.log('🔄 RESTART!')
      document.getElementById('game-over').style.display = 'none'
      game.restart && game.restart()
    })
    
    startBtn.parentNode.replaceChild(newStartBtn, startBtn)
    restartBtn.parentNode.replaceChild(newRestartBtn, restartBtn)
    console.log('✅ Buttons work!')
  } else if (retries < 20) {
    setTimeout(() => ensureButtonsWork(retries + 1), 250)
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    initGame()
    setTimeout(() => ensureButtonsWork(), 500)
  })
} else {
  initGame()
  setTimeout(() => ensureButtonsWork(), 500)
}`;

const games = [
  { class: 'BreakoutGame', name: 'Breakout', old: /const game = new BreakoutGame\(\)\nwindow\.game = game\nconsole\.log\('🧱 Breakout ready to play!'\)/g },
  { class: 'FlappyBirdGame', name: 'Flappy Bird', old: /const game = new FlappyBirdGame\(\)\nwindow\.game = game\nconsole\.log\('🐦 Flappy Bird ready to play!'\)/g },
  { class: 'SpaceInvadersGame', name: 'Space Invaders', old: /const game = new SpaceInvadersGame\(\)\nwindow\.game = game\nconsole\.log\('👾 Space Invaders ready to play!'\)/g }
];

games.forEach(g => {
  const fix = UNIVERSAL_FIX.replace(/GAME_CLASS/g, g.class).replace(/GAME_NAME/g, g.name);
  const before = code.length;
  code = code.replace(g.old, fix);
  const after = code.length;
  
  if (after !== before) {
    console.log(`✅ Fixed ${g.name}`);
  } else {
    console.log(`⚠️  ${g.name} not found or already fixed`);
  }
});

fs.writeFileSync('src/services/dreamBuildAI.js', code);
console.log('\n✅ All game button fixes applied!');
