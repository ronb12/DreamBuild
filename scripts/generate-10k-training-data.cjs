/**
 * Generate 10,000 Training Examples for DreamBuild LLM
 * Creates comprehensive dataset from all DreamBuild patterns
 * Product of Bradley Virtual Solutions, LLC
 */

const fs = require('fs');

console.log('\n🚀 Generating 10,000 Training Examples for DreamBuild LLM...\n');

// Base prompts for each app type
const appTypes = {
  todo: {
    verbs: ['create', 'build', 'make', 'generate', 'develop', 'design', 'construct'],
    nouns: ['todo', 'task', 'checklist', 'to-do', 'todo list', 'task list', 'task manager'],
    features: ['', 'with priority', 'with dark mode', 'with export', 'with categories', 'with search', 
               'with filter', 'with 5 features', 'with 10 features', 'with 20 features',
               'with due dates', 'with tags', 'with notes', 'with reminders', 'with color coding']
  },
  calculator: {
    verbs: ['create', 'build', 'make', 'generate', 'develop', 'design'],
    nouns: ['calculator', 'calc', 'calculator app', 'math app', 'calculation tool'],
    features: ['', 'with dark mode', 'with history', 'scientific', 'with memory functions',
               'with keyboard support', 'graphing', 'with percentage', 'with themes']
  },
  game: {
    verbs: ['create', 'build', 'make', 'generate', 'develop'],
    games: ['tetris', 'snake', 'pong', 'breakout', 'flappy bird', 'space invaders',
            'pacman', 'chess', 'sudoku', 'tic tac toe', 'connect four', 'memory game',
            'whack a mole', 'simon says', '2048', 'minesweeper', 'solitaire'],
    features: ['', 'with high scores', 'with levels', 'with sound', 'with leaderboard',
               'multiplayer', 'with power-ups', 'with different modes']
  },
  chat: {
    verbs: ['create', 'build', 'make', 'generate', 'develop'],
    nouns: ['chat', 'messaging', 'chat app', 'messenger', 'chat application'],
    features: ['', 'with emojis', 'with file sharing', 'group chat', 'with notifications',
               'real-time', 'with typing indicators', 'with read receipts']
  },
  weather: {
    verbs: ['create', 'build', 'make', 'generate'],
    nouns: ['weather', 'weather app', 'forecast', 'weather forecast', 'weather dashboard'],
    features: ['', 'with 5-day forecast', 'with hourly', 'with maps', 'with alerts',
               'with multiple cities', 'with current conditions']
  },
  timer: {
    verbs: ['create', 'build', 'make', 'generate'],
    nouns: ['timer', 'stopwatch', 'countdown', 'timer app', 'clock'],
    features: ['', 'with laps', 'with presets', 'with alarm', 'pomodoro',
               'with multiple timers', 'with sound alerts']
  },
  note: {
    verbs: ['create', 'build', 'make', 'generate'],
    nouns: ['note', 'notepad', 'notes', 'note app', 'note taking app'],
    features: ['', 'with markdown', 'with rich text', 'with search', 'with folders',
               'with tags', 'with export', 'with auto-save']
  },
  calendar: {
    verbs: ['create', 'build', 'make', 'generate'],
    nouns: ['calendar', 'schedule', 'event calendar', 'planner'],
    features: ['', 'with events', 'month view', 'week view', 'day view',
               'with reminders', 'with recurring events']
  },
  fitness: {
    verbs: ['create', 'build', 'make'],
    nouns: ['workout tracker', 'fitness app', 'exercise log', 'calorie counter'],
    features: ['', 'with graphs', 'with goals', 'with progress tracking']
  },
  ecommerce: {
    verbs: ['create', 'build', 'make'],
    nouns: ['shop', 'store', 'shopping cart', 'ecommerce', 'online store'],
    features: ['', 'with cart', 'with checkout', 'with products', 'with wishlist']
  }
};

// Additional variation templates
const templates = [
  "{verb} a {noun}",
  "{verb} {noun}",
  "{verb} a simple {noun}",
  "{verb} a modern {noun}",
  "{verb} an awesome {noun}",
  "{verb} a {noun} {feature}",
  "{verb} {noun} {feature}",
  "I want to {verb} a {noun}",
  "I need a {noun}",
  "Can you {verb} a {noun}?",
  "Please {verb} a {noun}",
  "{verb} a professional {noun}",
  "{verb} a responsive {noun}",
  "{verb} a beautiful {noun}",
  "{noun} {feature}",
  "simple {noun}",
  "modern {noun} {feature}"
];

// Generate training examples
const trainingData = [];
let exampleId = 0;

console.log('🔄 Generating variations for each app type...\n');

// Generate examples for each app type
for (const [appType, config] of Object.entries(appTypes)) {
  const baseCount = trainingData.length;
  
  // Generate variations
  if (config.games) {
    // Special handling for games
    for (const game of config.games) {
      for (const verb of config.verbs) {
        for (const feature of config.features.slice(0, 5)) {
          const prompt = feature 
            ? `${verb} ${game} ${feature}`
            : `${verb} ${game}`;
          
          trainingData.push({
            id: ++exampleId,
            prompt: prompt,
            completion: 'game',
            gameType: game,
            instruction: `Generate a complete ${game} game with canvas, game loop, controls, and scoring`,
            appType: 'game',
            features: feature ? [feature] : []
          });
        }
      }
    }
  } else {
    // Regular app types
    for (const verb of config.verbs) {
      for (const noun of config.nouns) {
        for (const feature of config.features) {
          for (const template of templates.slice(0, 3)) {
            let prompt = template
              .replace('{verb}', verb)
              .replace('{noun}', noun)
              .replace('{feature}', feature)
              .trim();
            
            // Clean up double spaces
            prompt = prompt.replace(/\s+/g, ' ').trim();
            
            trainingData.push({
              id: ++exampleId,
              prompt: prompt,
              completion: appType,
              instruction: `Generate a ${appType} application with ${noun}`,
              appType: appType,
              features: feature ? [feature] : []
            });
          }
        }
      }
    }
  }
  
  console.log(`  ✅ ${appType.padEnd(12)} - Generated ${(trainingData.length - baseCount).toString().padStart(4)} examples`);
}

console.log(`\n📊 Total examples generated: ${trainingData.length}`);

// If less than 10,000, add more variations
if (trainingData.length < 10000) {
  console.log(`\n🔄 Adding more variations to reach 10,000...\n`);
  
  const additionalPrompts = [
    'app', 'application', 'web app', 'tool', 'utility', 'dashboard', 'interface', 'system', 'platform'
  ];
  
  const additionalVerbs = ['make me', 'help me create', 'I want', 'can you make', 'please build'];
  
  while (trainingData.length < 10000) {
    // Pick random existing example and create variation
    const baseExample = trainingData[Math.floor(Math.random() * trainingData.length)];
    const additionalVerb = additionalVerbs[Math.floor(Math.random() * additionalVerbs.length)];
    const additionalNoun = additionalPrompts[Math.floor(Math.random() * additionalPrompts.length)];
    
    trainingData.push({
      id: ++exampleId,
      prompt: `${additionalVerb} a ${baseExample.appType} ${additionalNoun}`,
      completion: baseExample.completion,
      instruction: baseExample.instruction,
      appType: baseExample.appType,
      features: baseExample.features || []
    });
    
    if (trainingData.length % 1000 === 0) {
      console.log(`  📊 Progress: ${trainingData.length}/10,000 examples`);
    }
  }
}

console.log(`\n✅ Generated exactly ${trainingData.length} training examples!\n`);

// Show distribution
console.log('📊 Distribution by app type:');
const distribution = {};
trainingData.forEach(ex => {
  distribution[ex.appType] = (distribution[ex.appType] || 0) + 1;
});
Object.entries(distribution).sort((a, b) => b[1] - a[1]).forEach(([type, count]) => {
  const percentage = (count / trainingData.length * 100).toFixed(1);
  console.log(`  ${type.padEnd(12)} - ${count.toString().padStart(5)} examples (${percentage}%)`);
});

// Save as JSONL for training
console.log('\n💾 Saving training data...\n');

const jsonl = trainingData.map(item => JSON.stringify({
  prompt: item.prompt,
  completion: item.completion,
  instruction: item.instruction,
  appType: item.appType
})).join('\n');

fs.writeFileSync('training-data/dreambuild-training-10k.jsonl', jsonl);
console.log(`✅ Saved: training-data/dreambuild-training-10k.jsonl`);
console.log(`📦 Size: ${(jsonl.length / (1024 * 1024)).toFixed(2)} MB`);

// Also save as JSON for inspection
fs.writeFileSync('training-data/dreambuild-training-10k.json', JSON.stringify(trainingData.slice(0, 100), null, 2));
console.log(`✅ Saved: training-data/dreambuild-training-10k.json (first 100 for inspection)`);
console.log(`📦 Size: ${(JSON.stringify(trainingData.slice(0, 100), null, 2).length / 1024).toFixed(2)} KB\n`);

// Save full dataset stats
const stats = {
  totalExamples: trainingData.length,
  distribution: distribution,
  avgPromptLength: (trainingData.reduce((sum, ex) => sum + ex.prompt.length, 0) / trainingData.length).toFixed(1),
  uniquePrompts: new Set(trainingData.map(ex => ex.prompt)).size,
  appTypes: Object.keys(distribution).length,
  readyForTraining: true,
  generatedAt: new Date().toISOString()
};

fs.writeFileSync('training-data/dataset-stats.json', JSON.stringify(stats, null, 2));
console.log(`✅ Saved: training-data/dataset-stats.json\n`);

console.log('━'.repeat(70));
console.log('🎉 10,000 TRAINING EXAMPLES READY!\n');
console.log('📊 Dataset Statistics:');
console.log(`   Total examples: ${stats.totalExamples}`);
console.log(`   Unique prompts: ${stats.uniquePrompts}`);
console.log(`   App types: ${stats.appTypes}`);
console.log(`   Avg prompt length: ${stats.avgPromptLength} characters`);
console.log(`   File size: ${(jsonl.length / (1024 * 1024)).toFixed(2)} MB`);
console.log('\n📚 Next Steps:');
console.log('   1. Upload dreambuild-training-10k.jsonl to Google Colab');
console.log('   2. Run fine-tuning (see: training-data/GOOGLE-COLAB-TRAINING-GUIDE.md)');
console.log('   3. Wait 3-8 hours for training on FREE GPU');
console.log('   4. Download your custom DreamBuild LLM v1.0!');
console.log('━'.repeat(70) + '\n');

