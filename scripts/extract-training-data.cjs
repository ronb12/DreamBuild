/**
 * Extract Training Data from DreamBuild Templates
 * Creates dataset for fine-tuning DreamBuild LLM
 * Product of Bradley Virtual Solutions, LLC
 */

const fs = require('fs');

console.log('\n🎯 Extracting Training Data from DreamBuild Templates...\n');

// Training examples based on DreamBuild's app types and templates
const trainingData = [
  // Todo Apps
  { prompt: "create todo app", completion: "todo", instruction: "Generate a complete todo list application with add, delete, and complete functionality" },
  { prompt: "build todo list", completion: "todo", instruction: "Create a task management app with todos" },
  { prompt: "make task manager", completion: "todo", instruction: "Build a todo application" },
  { prompt: "create todo app with priority levels", completion: "todo-advanced", instruction: "Generate todo app with high/medium/low priority" },
  { prompt: "build todo with dark mode", completion: "todo-dark", instruction: "Create todo app with dark mode toggle" },
  { prompt: "create todo with 10 features", completion: "todo-features", instruction: "Build feature-rich todo app" },
  { prompt: "make todo app with search and filter", completion: "todo-search", instruction: "Generate todo app with search and filter capabilities" },
  
  // Calculator Apps
  { prompt: "create calculator", completion: "calculator", instruction: "Generate a calculator with basic operations" },
  { prompt: "build calculator app", completion: "calculator", instruction: "Create a mathematical calculator" },
  { prompt: "make math calculator", completion: "calculator", instruction: "Build calculator with number pad and operations" },
  { prompt: "create calculator with dark mode", completion: "calculator-dark", instruction: "Generate calculator with theme toggle" },
  { prompt: "build scientific calculator", completion: "calculator-scientific", instruction: "Create advanced calculator with scientific functions" },
  
  // Games
  { prompt: "build tetris", completion: "game-tetris", instruction: "Generate complete Tetris game with falling blocks" },
  { prompt: "create tetris game", completion: "game-tetris", instruction: "Build Tetris with block rotation and line clearing" },
  { prompt: "make snake game", completion: "game-snake", instruction: "Generate Snake game with movement and collision" },
  { prompt: "build pong", completion: "game-pong", instruction: "Create Pong with paddles and ball physics" },
  { prompt: "create breakout game", completion: "game-breakout", instruction: "Generate Breakout with bricks and paddle" },
  { prompt: "make flappy bird", completion: "game-flappy", instruction: "Build Flappy Bird with gravity and obstacles" },
  { prompt: "build space invaders", completion: "game-invaders", instruction: "Create Space Invaders with shooting mechanics" },
  
  // Chat Apps
  { prompt: "create chat app", completion: "chat", instruction: "Generate chat application with messages" },
  { prompt: "build messaging app", completion: "chat", instruction: "Create messaging interface" },
  { prompt: "make chat application", completion: "chat", instruction: "Build chat with send/receive functionality" },
  
  // Weather Apps
  { prompt: "create weather app", completion: "weather", instruction: "Generate weather display application" },
  { prompt: "build weather application", completion: "weather", instruction: "Create weather forecast app" },
  { prompt: "make weather dashboard", completion: "weather", instruction: "Build weather information display" },
  
  // Timer Apps
  { prompt: "create timer", completion: "timer", instruction: "Generate timer with start/stop/reset" },
  { prompt: "build stopwatch", completion: "timer", instruction: "Create stopwatch application" },
  { prompt: "make countdown timer", completion: "timer", instruction: "Build countdown timer app" },
  
  // Note Apps
  { prompt: "create note taking app", completion: "note", instruction: "Generate note-taking application" },
  { prompt: "build notepad", completion: "note", instruction: "Create simple note editor" },
  { prompt: "make notes app", completion: "note", instruction: "Build note-taking interface" },
  
  // Calendar Apps
  { prompt: "create calendar", completion: "calendar", instruction: "Generate calendar application" },
  { prompt: "build calendar app", completion: "calendar", instruction: "Create event calendar" },
  { prompt: "make schedule app", completion: "calendar", instruction: "Build scheduling application" },
  
  // Generic patterns
  { prompt: "create simple app", completion: "web-app", instruction: "Generate basic web application" },
  { prompt: "build web app", completion: "web-app", instruction: "Create web application" },
  { prompt: "make application", completion: "web-app", instruction: "Build web-based app" },
  
  // Feature combinations
  { prompt: "create todo with export and import", completion: "todo-export", instruction: "Generate todo app with JSON export/import" },
  { prompt: "build calculator with history", completion: "calculator-history", instruction: "Create calculator with calculation history" },
  { prompt: "make game with high scores", completion: "game-scores", instruction: "Build game with score tracking" },
];

console.log(`📊 Generated ${trainingData.length} training examples\n`);

// Format as JSONL for training
const jsonl = trainingData.map(item => JSON.stringify({
  prompt: item.prompt,
  completion: item.completion,
  instruction: item.instruction
})).join('\n');

// Save training data
fs.writeFileSync('training-data/dreambuild-training.jsonl', jsonl);
console.log('✅ Saved: training-data/dreambuild-training.jsonl');
console.log(`📦 Size: ${(jsonl.length / 1024).toFixed(2)} KB\n`);

// Also save as JSON for inspection
fs.writeFileSync('training-data/dreambuild-training.json', JSON.stringify(trainingData, null, 2));
console.log('✅ Saved: training-data/dreambuild-training.json (for inspection)');
console.log(`📦 Size: ${(JSON.stringify(trainingData, null, 2).length / 1024).toFixed(2)} KB\n`);

console.log('━'.repeat(70));
console.log('📚 TRAINING DATA READY!\n');
console.log('Next steps:');
console.log('1. Review training-data/dreambuild-training.json');
console.log('2. Open Google Colab notebook: colab.research.google.com');
console.log('3. Upload dreambuild-training.jsonl');
console.log('4. Run fine-tuning (see: training-data/COLAB-NOTEBOOK.txt)');
console.log('━'.repeat(70) + '\n');

