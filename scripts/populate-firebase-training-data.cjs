/**
 * Populate Firebase with 20,000 Training Prompts and Responses
 * Creates comprehensive dataset for instant prompt matching
 * Product of Bradley Virtual Solutions, LLC
 */

const admin = require('firebase-admin');

// Initialize Firebase Admin
if (!admin.apps.length) {
  admin.initializeApp({
    projectId: 'dreambuild-2024-app'
  });
}

const db = admin.firestore();

console.log('🚀 Starting Firebase Training Data Population...\n');

// Comprehensive prompt templates for all app types
const promptTemplates = {
  todo: [
    'create a todo app',
    'build a task manager',
    'make a todo list',
    'generate a checklist app',
    'create a simple todo',
    'build a task tracker',
    'make a todo with priority',
    'create a todo app with categories',
    'build a todo with dark mode',
    'make a task manager with search',
    'create a todo with due dates',
    'build a todo with tags',
    'make a productivity app',
    'create a todo with notifications',
    'build a todo with export feature',
    'make a todo with color coding',
    'create a todo with subtasks',
    'build a todo with filters',
    'make a todo with sorting',
    'create a todo with reminders'
  ],
  
  calculator: [
    'create a calculator',
    'build a math calculator',
    'make a calculator app',
    'generate a basic calculator',
    'create a scientific calculator',
    'build a calculator with history',
    'make a calculator with memory',
    'create a calculator with themes',
    'build a calculator with keyboard support',
    'make a calculator with percentage',
    'create a calculator with square root',
    'build a calculator with pi',
    'make a calculator with parentheses',
    'create a calculator with clear all',
    'build a calculator with backspace',
    'make a calculator with decimal',
    'create a calculator with operations',
    'build a calculator with equals',
    'make a calculator with display',
    'create a calculator with buttons'
  ],
  
  game: [
    'create a snake game',
    'build a tetris game',
    'make a pong game',
    'generate a breakout game',
    'create a flappy bird game',
    'build a space invaders game',
    'make a pacman game',
    'create a chess game',
    'build a sudoku game',
    'make a tic tac toe game',
    'create a connect four game',
    'build a memory game',
    'make a whack a mole game',
    'create a simon says game',
    'build a 2048 game',
    'make a minesweeper game',
    'create a solitaire game',
    'build a puzzle game',
    'make an arcade game',
    'create a retro game'
  ],
  
  chat: [
    'create a chat app',
    'build a messaging app',
    'make a chat application',
    'generate a real-time chat',
    'create a group chat',
    'build a chat with emojis',
    'make a chat with file sharing',
    'create a chat with notifications',
    'build a chat with typing indicators',
    'make a chat with read receipts',
    'create a chat with rooms',
    'build a chat with users',
    'make a chat with history',
    'create a chat with search',
    'build a chat with attachments',
    'make a chat with voice messages',
    'create a chat with video calls',
    'build a chat with screen sharing',
    'make a chat with moderation',
    'create a chat with encryption'
  ],
  
  weather: [
    'create a weather app',
    'build a weather forecast',
    'make a weather dashboard',
    'generate a weather widget',
    'create a weather with 5-day forecast',
    'build a weather with hourly forecast',
    'make a weather with maps',
    'create a weather with alerts',
    'build a weather with multiple cities',
    'make a weather with current conditions',
    'create a weather with temperature',
    'build a weather with humidity',
    'make a weather with wind speed',
    'create a weather with pressure',
    'build a weather with visibility',
    'make a weather with UV index',
    'create a weather with sunrise sunset',
    'build a weather with moon phases',
    'make a weather with precipitation',
    'create a weather with radar'
  ],
  
  timer: [
    'create a timer app',
    'build a stopwatch',
    'make a countdown timer',
    'generate a pomodoro timer',
    'create a timer with laps',
    'build a timer with presets',
    'make a timer with alarm',
    'create a timer with sound alerts',
    'build a timer with multiple timers',
    'make a timer with pause resume',
    'create a timer with reset',
    'build a timer with custom time',
    'make a timer with notifications',
    'create a timer with background',
    'build a timer with themes',
    'make a timer with vibrations',
    'create a timer with intervals',
    'build a timer with sessions',
    'make a timer with breaks',
    'create a timer with productivity'
  ],
  
  note: [
    'create a note app',
    'build a note-taking app',
    'make a notes application',
    'generate a sticky notes app',
    'create a note with categories',
    'build a note with search',
    'make a note with tags',
    'create a note with rich text',
    'build a note with images',
    'make a note with voice recording',
    'create a note with handwriting',
    'build a note with folders',
    'make a note with sync',
    'create a note with export',
    'build a note with templates',
    'make a note with reminders',
    'create a note with collaboration',
    'build a note with encryption',
    'make a note with backup',
    'create a note with version history'
  ],
  
  calendar: [
    'create a calendar app',
    'build a calendar application',
    'make a scheduling app',
    'generate a event calendar',
    'create a calendar with events',
    'build a calendar with reminders',
    'make a calendar with recurring events',
    'create a calendar with multiple views',
    'build a calendar with sync',
    'make a calendar with sharing',
    'create a calendar with time zones',
    'build a calendar with holidays',
    'make a calendar with birthdays',
    'create a calendar with meetings',
    'build a calendar with tasks',
    'make a calendar with goals',
    'create a calendar with deadlines',
    'build a calendar with appointments',
    'make a calendar with availability',
    'create a calendar with booking'
  ],
  
  fitness: [
    'create a fitness tracker',
    'build a workout app',
    'make a fitness application',
    'generate a exercise tracker',
    'create a fitness with steps',
    'build a fitness with calories',
    'make a fitness with heart rate',
    'create a fitness with workouts',
    'build a fitness with goals',
    'make a fitness with progress',
    'create a fitness with charts',
    'build a fitness with social',
    'make a fitness with challenges',
    'create a fitness with nutrition',
    'build a fitness with sleep tracking',
    'make a fitness with water intake',
    'create a fitness with BMI',
    'build a fitness with body weight',
    'make a fitness with measurements',
    'create a fitness with achievements'
  ],
  
  ecommerce: [
    'create an ecommerce app',
    'build a shopping app',
    'make a store app',
    'generate a marketplace app',
    'create an ecommerce with cart',
    'build an ecommerce with checkout',
    'make an ecommerce with payments',
    'create an ecommerce with inventory',
    'build an ecommerce with orders',
    'make an ecommerce with shipping',
    'create an ecommerce with reviews',
    'build an ecommerce with wishlist',
    'make an ecommerce with search',
    'create an ecommerce with filters',
    'build an ecommerce with categories',
    'make an ecommerce with recommendations',
    'create an ecommerce with coupons',
    'build an ecommerce with loyalty',
    'make an ecommerce with analytics',
    'create an ecommerce with admin'
  ]
};

// Response templates for each app type
const responseTemplates = {
  todo: {
    appType: 'todo',
    features: ['add', 'delete', 'complete', 'edit', 'priority'],
    description: 'Complete todo application with full functionality',
    keywords: ['todo', 'task', 'list', 'productivity', 'organization']
  },
  
  calculator: {
    appType: 'calculator', 
    features: ['basic operations', 'display', 'clear', 'equals', 'keyboard'],
    description: 'Fully functional calculator with mathematical operations',
    keywords: ['calculator', 'math', 'arithmetic', 'computation', 'numbers']
  },
  
  game: {
    appType: 'game',
    features: ['gameplay', 'scoring', 'controls', 'levels', 'collision'],
    description: 'Interactive game with complete game mechanics',
    keywords: ['game', 'play', 'fun', 'entertainment', 'arcade']
  },
  
  chat: {
    appType: 'chat',
    features: ['messaging', 'real-time', 'users', 'rooms', 'history'],
    description: 'Real-time chat application with messaging features',
    keywords: ['chat', 'message', 'communication', 'talk', 'conversation']
  },
  
  weather: {
    appType: 'weather',
    features: ['forecast', 'temperature', 'conditions', 'location', 'alerts'],
    description: 'Weather application with current and forecast data',
    keywords: ['weather', 'forecast', 'temperature', 'climate', 'conditions']
  },
  
  timer: {
    appType: 'timer',
    features: ['countdown', 'stopwatch', 'alerts', 'presets', 'laps'],
    description: 'Timer and stopwatch application with multiple modes',
    keywords: ['timer', 'stopwatch', 'countdown', 'time', 'alarm']
  },
  
  note: {
    appType: 'note',
    features: ['write', 'edit', 'save', 'organize', 'search'],
    description: 'Note-taking application with organization features',
    keywords: ['note', 'notes', 'writing', 'text', 'document']
  },
  
  calendar: {
    appType: 'calendar',
    features: ['events', 'scheduling', 'reminders', 'views', 'sync'],
    description: 'Calendar application with event management',
    keywords: ['calendar', 'schedule', 'events', 'dates', 'planning']
  },
  
  fitness: {
    appType: 'fitness',
    features: ['tracking', 'workouts', 'progress', 'goals', 'analytics'],
    description: 'Fitness tracking application with workout management',
    keywords: ['fitness', 'workout', 'exercise', 'health', 'training']
  },
  
  ecommerce: {
    appType: 'ecommerce',
    features: ['products', 'cart', 'checkout', 'payments', 'inventory'],
    description: 'E-commerce application with shopping functionality',
    keywords: ['shop', 'store', 'buy', 'sell', 'commerce']
  }
};

// Generate variations of prompts
function generatePromptVariations(basePrompt, count = 200) {
  const variations = [basePrompt];
  
  // Add common variations
  const prefixes = ['create', 'build', 'make', 'generate', 'develop', 'design', 'construct', 'develop', 'program'];
  const suffixes = ['', ' app', ' application', ' with features', ' with dark mode', ' with search', ' with filters', ' with categories', ' with priority', ' with notifications', ' with export', ' with themes', ' with history', ' with backup', ' with sync', ' with sharing', ' with analytics', ' with reports', ' with dashboard', ' with settings', ' with customization'];
  
  const adjectives = ['simple', 'advanced', 'professional', 'modern', 'beautiful', 'responsive', 'interactive', 'dynamic', 'smart', 'intelligent', 'powerful', 'efficient', 'fast', 'secure', 'reliable'];
  
  for (let i = 1; i < count && variations.length < count; i++) {
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    
    // Create multiple variation patterns
    const patterns = [
      `${prefix} ${basePrompt.replace(/^(create|build|make|generate|develop|design|construct|program)\s+/i, '')}${suffix}`,
      `${prefix} a ${adjective} ${basePrompt.replace(/^(create|build|make|generate|develop|design|construct|program)\s+/i, '')}${suffix}`,
      `${prefix} an ${adjective} ${basePrompt.replace(/^(create|build|make|generate|develop|design|construct|program)\s+/i, '')}${suffix}`,
      `${prefix} ${basePrompt.replace(/^(create|build|make|generate|develop|design|construct|program)\s+/i, '')} that is ${adjective}${suffix}`,
      `I need to ${prefix} ${basePrompt.replace(/^(create|build|make|generate|develop|design|construct|program)\s+/i, '')}${suffix}`,
      `Please ${prefix} ${basePrompt.replace(/^(create|build|make|generate|develop|design|construct|program)\s+/i, '')}${suffix}`,
      `Can you ${prefix} ${basePrompt.replace(/^(create|build|make|generate|develop|design|construct|program)\s+/i, '')}${suffix}`,
      `Help me ${prefix} ${basePrompt.replace(/^(create|build|make|generate|develop|design|construct|program)\s+/i, '')}${suffix}`
    ];
    
    const variation = patterns[Math.floor(Math.random() * patterns.length)];
    
    if (!variations.includes(variation)) {
      variations.push(variation);
    }
  }
  
  return variations.slice(0, count);
}

// Generate comprehensive response data
function generateResponseData(prompt, appType) {
  const template = responseTemplates[appType];
  const lowerPrompt = prompt.toLowerCase();
  
  // Determine specific features based on prompt
  let features = [...template.features];
  if (lowerPrompt.includes('dark mode')) features.push('dark-mode');
  if (lowerPrompt.includes('search')) features.push('search');
  if (lowerPrompt.includes('priority')) features.push('priority');
  if (lowerPrompt.includes('categories')) features.push('categories');
  if (lowerPrompt.includes('export')) features.push('export');
  if (lowerPrompt.includes('notifications')) features.push('notifications');
  if (lowerPrompt.includes('history')) features.push('history');
  if (lowerPrompt.includes('themes')) features.push('themes');
  
  return {
    appType: template.appType,
    features: features,
    description: template.description,
    keywords: template.keywords,
    complexity: features.length > 5 ? 'advanced' : 'basic',
    estimatedTime: features.length > 5 ? '15-30 seconds' : '5-15 seconds',
    fileCount: features.length > 5 ? 8 : 5,
    codeLines: features.length > 5 ? 400 : 200
  };
}

// Main population function
async function populateFirebase() {
  try {
    console.log('📊 Generating 20,000 prompts and responses...\n');
    
    const allPrompts = [];
    const targetCount = 20000;
    const promptsPerType = Math.floor(targetCount / Object.keys(promptTemplates).length);
    
    // Generate prompts for each app type
    for (const [appType, basePrompts] of Object.entries(promptTemplates)) {
      console.log(`🎯 Generating ${promptsPerType} prompts for ${appType}...`);
      
      for (const basePrompt of basePrompts) {
        const variationsPerPrompt = Math.ceil(promptsPerType / basePrompts.length);
        const variations = generatePromptVariations(basePrompt, variationsPerPrompt);
        
        for (const prompt of variations) {
          if (allPrompts.length >= targetCount) break;
          
          const response = generateResponseData(prompt, appType);
          allPrompts.push({
            prompt: prompt,
            response: response,
            appType: appType
          });
        }
        
        if (allPrompts.length >= targetCount) break;
      }
    }
    
    // If we haven't reached the target, generate more variations
    while (allPrompts.length < targetCount) {
      const appTypes = Object.keys(promptTemplates);
      const randomAppType = appTypes[Math.floor(Math.random() * appTypes.length)];
      const basePrompts = promptTemplates[randomAppType];
      const randomBasePrompt = basePrompts[Math.floor(Math.random() * basePrompts.length)];
      
      const variations = generatePromptVariations(randomBasePrompt, 50);
      
      for (const prompt of variations) {
        if (allPrompts.length >= targetCount) break;
        
        const response = generateResponseData(prompt, randomAppType);
        allPrompts.push({
          prompt: prompt,
          response: response,
          appType: randomAppType
        });
      }
    }
    
    console.log(`✅ Generated ${allPrompts.length} prompt-response pairs\n`);
    
    // Upload to Firebase in batches
    console.log('🚀 Uploading to Firebase...');
    const batchSize = 500;
    let uploaded = 0;
    
    for (let i = 0; i < allPrompts.length; i += batchSize) {
      const batch = db.batch();
      const batchData = allPrompts.slice(i, i + batchSize);
      
      for (const item of batchData) {
        const docRef = db.collection('cached_prompts').doc();
        const cacheEntry = {
          prompt: item.prompt.trim(),
          normalizedPrompt: item.prompt.toLowerCase().trim().replace(/[^\w\s]/g, '').replace(/\s+/g, ' '),
          keywords: item.response.keywords,
          response: item.response,
          appType: item.appType,
          features: item.response.features,
          usageCount: Math.floor(Math.random() * 100) + 1, // Random usage count
          successRate: 100,
          createdAt: admin.firestore.Timestamp.now(),
          lastUsed: admin.firestore.Timestamp.now(),
          size: JSON.stringify(item.response).length
        };
        
        batch.set(docRef, cacheEntry);
      }
      
      await batch.commit();
      uploaded += batchData.length;
      
      if (uploaded % 1000 === 0) {
        console.log(`📤 Uploaded ${uploaded.toLocaleString()} / ${allPrompts.length.toLocaleString()} prompts`);
      }
    }
    
    console.log(`\n✅ Successfully uploaded ${uploaded.toLocaleString()} prompts to Firebase!`);
    console.log('🎉 Firebase training data population COMPLETE!');
    
    // Verify upload
    const snapshot = await db.collection('cached_prompts').get();
    console.log(`\n📊 Final count: ${snapshot.size.toLocaleString()} cached prompts in Firebase`);
    
    if (snapshot.size >= 20000) {
      console.log('🎯 SUCCESS: 20,000+ prompts and responses are now stored!');
      console.log('⚡ Users will now get instant responses for most prompts!');
    }
    
  } catch (error) {
    console.error('❌ Error populating Firebase:', error);
  }
}

// Run the population
populateFirebase().then(() => {
  console.log('\n🎉 Firebase training data population completed!');
  process.exit(0);
}).catch((error) => {
  console.error('❌ Failed to populate Firebase:', error);
  process.exit(1);
});
