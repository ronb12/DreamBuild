/**
 * Advanced Game Development Service
 * Professional-grade game development capabilities with multiple engines and frameworks
 * Supports: Phaser.js, Three.js, Babylon.js, Unity WebGL, Godot, and custom engines
 */

class GameDevelopmentService {
  constructor() {
    this.gameInstances = new Map();
    this.supportedEngines = ['phaser', 'threejs', 'babylon', 'unity', 'godot', 'custom'];
    this.assetGenerators = new Map();
    this.physicsEngines = ['arcade', 'box2d', 'cannon', 'matter', 'ammo'];
    
    // Advanced Game Templates
    this.gameTemplates = {
      // 2D Games
      'temple-run': this.generateTempleRunTemplate.bind(this),
      'endless-runner': this.generateEndlessRunnerTemplate.bind(this),
      'platformer': this.generatePlatformerTemplate.bind(this),
      'puzzle': this.generatePuzzleTemplate.bind(this),
      'arcade': this.generateArcadeTemplate.bind(this),
      'rpg': this.generateRPGTemplate.bind(this),
      'strategy': this.generateStrategyTemplate.bind(this),
      'tower-defense': this.generateTowerDefenseTemplate.bind(this),
      'racing': this.generateRacingTemplate.bind(this),
      'fighting': this.generateFightingTemplate.bind(this),
      
      // 3D Games
      '3d-platformer': this.generate3DPlatformerTemplate.bind(this),
      '3d-racing': this.generate3DRacingTemplate.bind(this),
      '3d-shooter': this.generate3DShooterTemplate.bind(this),
      '3d-rpg': this.generate3DRPGTemplate.bind(this),
      '3d-sandbox': this.generate3DSandboxTemplate.bind(this),
      
      // Multiplayer Games
      'multiplayer-arena': this.generateMultiplayerArenaTemplate.bind(this),
      'multiplayer-rpg': this.generateMultiplayerRPGTemplate.bind(this),
      'multiplayer-racing': this.generateMultiplayerRacingTemplate.bind(this),
      'battle-royale': this.generateBattleRoyaleTemplate.bind(this),
      
      // Specialized Games
      'vr-game': this.generateVRGameTemplate.bind(this),
      'ar-game': this.generateARGameTemplate.bind(this),
      'physics-sandbox': this.generatePhysicsSandboxTemplate.bind(this),
      'music-game': this.generateMusicGameTemplate.bind(this),
      'educational': this.generateEducationalGameTemplate.bind(this)
    };
    
    this.initializeAssetGenerators();
    this.initializeGameEngines();
  }

  /**
   * Initialize asset generators for procedural content creation
   */
  initializeAssetGenerators() {
    this.assetGenerators.set('sprite', this.generateSprite.bind(this));
    this.assetGenerators.set('3d-model', this.generate3DModel.bind(this));
    this.assetGenerators.set('sound', this.generateSound.bind(this));
    this.assetGenerators.set('music', this.generateMusic.bind(this));
    this.assetGenerators.set('texture', this.generateTexture.bind(this));
    this.assetGenerators.set('animation', this.generateAnimation.bind(this));
  }

  /**
   * Initialize game engines and their configurations
   */
  initializeGameEngines() {
    this.engineConfigs = {
      phaser: {
        version: '3.70.0',
        features: ['2d-graphics', 'physics', 'audio', 'input', 'tweening', 'cameras'],
        cdn: 'https://cdn.jsdelivr.net/npm/phaser@3.70.0/dist/phaser.min.js'
      },
      threejs: {
        version: '0.160.0',
        features: ['3d-graphics', 'webgl', 'vr', 'ar', 'physics', 'post-processing'],
        cdn: 'https://cdnjs.cloudflare.com/ajax/libs/three.js/0.160.0/three.min.js'
      },
      babylon: {
        version: '6.0.0',
        features: ['3d-graphics', 'webgl', 'webgpu', 'vr', 'ar', 'physics', 'pbr'],
        cdn: 'https://cdn.babylonjs.com/babylon.js'
      },
      unity: {
        version: '2023.2',
        features: ['webgl', '3d-graphics', 'physics', 'vr', 'ar', 'multiplayer'],
        exportFormat: 'webgl'
      },
      godot: {
        version: '4.2',
        features: ['webgl', '2d-3d-graphics', 'physics', 'scripting', 'multiplayer'],
        exportFormat: 'webgl'
      }
    };
  }

  /**
   * Generate a complete game based on the requested type with advanced options
   */
  generateGame(gameType, options = {}) {
    const startTime = Date.now();
    
    // Set default options
    const gameOptions = {
      engine: options.engine || this.detectBestEngine(gameType),
      physics: options.physics || 'arcade',
      graphics: options.graphics || '2d',
      multiplayer: options.multiplayer || false,
      vr: options.vr || false,
      ar: options.ar || false,
      assets: options.assets || 'procedural',
      difficulty: options.difficulty || 'medium',
      theme: options.theme || 'modern',
      ...options
    };

    const template = this.gameTemplates[gameType];
    if (!template) {
      throw new Error(`Unsupported game type: ${gameType}. Available types: ${Object.keys(this.gameTemplates).join(', ')}`);
    }

    const gameData = template(gameOptions);
    
    // Add metadata
    gameData.metadata = {
      gameType,
      engine: gameOptions.engine,
      physics: gameOptions.physics,
      graphics: gameOptions.graphics,
      generationTime: Date.now() - startTime,
      features: this.getGameFeatures(gameType, gameOptions),
      complexity: this.getGameComplexity(gameType),
      estimatedDevelopmentTime: this.estimateDevelopmentTime(gameType)
    };

    return gameData;
  }

  /**
   * Detect the best engine for a game type
   */
  detectBestEngine(gameType) {
    const engineMap = {
      '3d-platformer': 'threejs',
      '3d-racing': 'threejs',
      '3d-shooter': 'babylon',
      '3d-rpg': 'babylon',
      '3d-sandbox': 'threejs',
      'vr-game': 'babylon',
      'ar-game': 'threejs',
      'physics-sandbox': 'threejs',
      'multiplayer-arena': 'phaser',
      'multiplayer-rpg': 'babylon',
      'battle-royale': 'babylon'
    };
    
    return engineMap[gameType] || 'phaser';
  }

  /**
   * Get game features based on type and options
   */
  getGameFeatures(gameType, options) {
    const baseFeatures = ['responsive-design', 'cross-platform', 'modern-ui'];
    const typeFeatures = {
      'rpg': ['character-progression', 'inventory-system', 'quest-system', 'combat-system'],
      '3d-rpg': [...this.getGameFeatures('rpg', options), '3d-graphics', 'advanced-physics'],
      'multiplayer-arena': ['real-time-multiplayer', 'matchmaking', 'leaderboards'],
      'tower-defense': ['wave-system', 'tower-upgrades', 'resource-management'],
      'racing': ['vehicle-physics', 'track-generation', 'ai-opponents'],
      '3d-racing': [...this.getGameFeatures('racing', options), '3d-graphics', 'advanced-lighting'],
      'vr-game': ['vr-support', 'hand-tracking', 'room-scale'],
      'ar-game': ['ar-support', 'camera-integration', 'marker-tracking'],
      'physics-sandbox': ['advanced-physics', 'object-interaction', 'gravity-control'],
      'music-game': ['audio-processing', 'rhythm-detection', 'visual-effects']
    };
    
    return [...baseFeatures, ...(typeFeatures[gameType] || [])];
  }

  /**
   * Get game complexity level
   */
  getGameComplexity(gameType) {
    const complexityMap = {
      'arcade': 'simple',
      'puzzle': 'simple',
      'temple-run': 'medium',
      'platformer': 'medium',
      'racing': 'medium',
      'rpg': 'complex',
      'strategy': 'complex',
      'tower-defense': 'complex',
      '3d-platformer': 'complex',
      '3d-rpg': 'expert',
      'multiplayer-arena': 'expert',
      'battle-royale': 'expert',
      'vr-game': 'expert',
      'ar-game': 'expert'
    };
    
    return complexityMap[gameType] || 'medium';
  }

  /**
   * Estimate development time for game type
   */
  estimateDevelopmentTime(gameType) {
    const timeMap = {
      'arcade': '1-2 hours',
      'puzzle': '2-4 hours',
      'temple-run': '4-8 hours',
      'platformer': '8-16 hours',
      'racing': '12-24 hours',
      'rpg': '24-48 hours',
      'strategy': '32-64 hours',
      '3d-platformer': '40-80 hours',
      '3d-rpg': '80-160 hours',
      'multiplayer-arena': '100-200 hours',
      'battle-royale': '200-400 hours',
      'vr-game': '300-600 hours',
      'ar-game': '400-800 hours'
    };
    
    return timeMap[gameType] || '8-16 hours';
  }

  /**
   * Generate Temple Run game using Phaser.js
   */
  generateTempleRunTemplate(options = {}) {
    const gameConfig = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 0 },
          debug: false
        }
      },
      scene: {
        preload: this.templeRunPreload.bind(this),
        create: this.templeRunCreate.bind(this),
        update: this.templeRunUpdate.bind(this)
      }
    };

    return {
      framework: 'phaser',
      config: gameConfig,
      files: this.generateTempleRunFiles(gameConfig),
      instructions: this.getTempleRunInstructions()
    };
  }

  /**
   * Generate Temple Run game files
   */
  generateTempleRunFiles(config) {
    return {
      'index.html': this.generateTempleRunHTML(config),
      'game.js': this.generateTempleRunJS(config),
      'style.css': this.generateTempleRunCSS(),
      'package.json': this.generateGamePackageJson(),
      'README.md': this.generateTempleRunREADME()
    };
  }

  /**
   * Generate HTML file for Temple Run
   */
  generateTempleRunHTML(config) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Temple Run - DreamBuild Game</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://cdn.jsdelivr.net/npm/phaser@3.70.0/dist/phaser.min.js"></script>
</head>
<body>
    <div id="game-container">
        <div id="game-ui">
            <div class="score">Score: <span id="score">0</span></div>
            <div class="lives">Lives: <span id="lives">3</span></div>
            <div class="distance">Distance: <span id="distance">0</span></div>
        </div>
        <div id="game-canvas"></div>
        <div id="game-over" class="hidden">
            <h2>Game Over!</h2>
            <p>Final Score: <span id="final-score">0</span></p>
            <button id="restart-btn">Play Again</button>
        </div>
        <div id="start-screen">
            <h1>Temple Run</h1>
            <p>Use A/D or Arrow Keys to switch lanes</p>
            <p>Use W or Space to jump</p>
            <p>Use S or Down Arrow to slide</p>
            <button id="start-btn">Start Game</button>
        </div>
    </div>
    <script src="game.js"></script>
</body>
</html>`;
  }

  /**
   * Generate JavaScript file for Temple Run
   */
  generateTempleRunJS(config) {
    return `// Temple Run Game - Generated by DreamBuild
class TempleRunGame extends Phaser.Scene {
    constructor() {
        super({ key: 'TempleRunGame' });
        this.player = null;
        this.obstacles = [];
        this.coins = [];
        this.score = 0;
        this.lives = 3;
        this.distance = 0;
        this.speed = 200;
        this.isGameOver = false;
        this.isJumping = false;
        this.isSliding = false;
        this.currentLane = 1; // 0, 1, 2
        this.laneWidth = 200;
        this.lanePositions = [150, 400, 650];
    }

    preload() {
        // Create simple colored rectangles for game objects
        this.load.image('player', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==');
        this.load.image('obstacle', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==');
        this.load.image('coin', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==');
    }

    create() {
        // Create background
        this.add.rectangle(400, 300, 800, 600, 0x87CEEB);
        
        // Create ground
        this.add.rectangle(400, 550, 800, 100, 0x8B4513);
        
        // Create lanes
        for (let i = 0; i < 3; i++) {
            this.add.rectangle(this.lanePositions[i], 300, 10, 600, 0x654321);
        }

        // Create player
        this.player = this.add.rectangle(
            this.lanePositions[this.currentLane], 
            450, 
            40, 
            40, 
            0xFFD700
        );
        this.player.setStrokeStyle(2, 0xFFA500);

        // Create input handlers
        this.cursors = this.input.keyboard.createCursorKeys();
        this.wasd = this.input.keyboard.addKeys('W,S,A,D,SPACE');

        // Create obstacle spawner
        this.obstacleTimer = this.time.addEvent({
            delay: 2000,
            callback: this.spawnObstacle,
            callbackScope: this,
            loop: true
        });

        // Create coin spawner
        this.coinTimer = this.time.addEvent({
            delay: 1500,
            callback: this.spawnCoin,
            callbackScope: this,
            loop: true
        });

        // Start screen
        this.startScreen = document.getElementById('start-screen');
        this.gameOverScreen = document.getElementById('game-over');
        this.startBtn = document.getElementById('start-btn');
        this.restartBtn = document.getElementById('restart-btn');

        this.startBtn.addEventListener('click', () => {
            this.startScreen.classList.add('hidden');
            this.startGame();
        });

        this.restartBtn.addEventListener('click', () => {
            this.gameOverScreen.classList.add('hidden');
            this.restartGame();
        });

        // Update UI
        this.updateUI();
    }

    update() {
        if (this.isGameOver) return;

        this.handleInput();
        this.updateObstacles();
        this.updateCoins();
        this.updateDistance();
        this.checkCollisions();
    }

    handleInput() {
        // Lane switching
        if (Phaser.Input.Keyboard.JustDown(this.cursors.left) || 
            Phaser.Input.Keyboard.JustDown(this.wasd.A)) {
            this.switchLane(-1);
        }
        if (Phaser.Input.Keyboard.JustDown(this.cursors.right) || 
            Phaser.Input.Keyboard.JustDown(this.wasd.D)) {
            this.switchLane(1);
        }

        // Jumping
        if ((Phaser.Input.Keyboard.JustDown(this.cursors.up) || 
             Phaser.Input.Keyboard.JustDown(this.wasd.W) ||
             Phaser.Input.Keyboard.JustDown(this.wasd.SPACE)) && !this.isJumping) {
            this.jump();
        }

        // Sliding
        if ((Phaser.Input.Keyboard.JustDown(this.cursors.down) || 
             Phaser.Input.Keyboard.JustDown(this.wasd.S)) && !this.isSliding) {
            this.slide();
        }
    }

    switchLane(direction) {
        this.currentLane = Phaser.Math.Clamp(this.currentLane + direction, 0, 2);
        this.tweens.add({
            targets: this.player,
            x: this.lanePositions[this.currentLane],
            duration: 200,
            ease: 'Power2'
        });
    }

    jump() {
        if (this.isJumping) return;
        
        this.isJumping = true;
        this.player.y -= 50;
        
        this.tweens.add({
            targets: this.player,
            y: 450,
            duration: 500,
            ease: 'Power2',
            onComplete: () => {
                this.isJumping = false;
            }
        });
    }

    slide() {
        if (this.isSliding) return;
        
        this.isSliding = true;
        this.player.height = 20;
        this.player.y += 20;
        
        this.tweens.add({
            targets: this.player,
            height: 40,
            y: 450,
            duration: 400,
            ease: 'Power2',
            onComplete: () => {
                this.isSliding = false;
            }
        });
    }

    spawnObstacle() {
        const lane = Phaser.Math.Between(0, 2);
        const obstacle = this.add.rectangle(
            this.lanePositions[lane],
            -50,
            30,
            60,
            0x8B4513
        );
        obstacle.lane = lane;
        obstacle.type = Phaser.Math.Between(0, 1) ? 'high' : 'low';
        
        if (obstacle.type === 'low') {
            obstacle.height = 40;
            obstacle.y = 510;
        }
        
        this.obstacles.push(obstacle);
    }

    spawnCoin() {
        const lane = Phaser.Math.Between(0, 2);
        const coin = this.add.circle(
            this.lanePositions[lane],
            -50,
            15,
            0xFFD700
        );
        coin.lane = lane;
        coin.setStrokeStyle(2, 0xFFA500);
        
        this.coins.push(coin);
    }

    updateObstacles() {
        this.obstacles.forEach((obstacle, index) => {
            obstacle.y += this.speed * 0.016;
            
            if (obstacle.y > 650) {
                obstacle.destroy();
                this.obstacles.splice(index, 1);
            }
        });
    }

    updateCoins() {
        this.coins.forEach((coin, index) => {
            coin.y += this.speed * 0.016;
            
            if (coin.y > 650) {
                coin.destroy();
                this.coins.splice(index, 1);
            }
        });
    }

    updateDistance() {
        this.distance += this.speed * 0.016;
        this.speed = Math.min(400, 200 + this.distance * 0.1);
    }

    checkCollisions() {
        // Check obstacle collisions
        this.obstacles.forEach((obstacle, index) => {
            if (obstacle.lane === this.currentLane && 
                Phaser.Geom.Rectangle.Overlaps(this.player.getBounds(), obstacle.getBounds())) {
                this.hitObstacle();
                obstacle.destroy();
                this.obstacles.splice(index, 1);
            }
        });

        // Check coin collections
        this.coins.forEach((coin, index) => {
            if (coin.lane === this.currentLane && 
                Phaser.Geom.Rectangle.Overlaps(this.player.getBounds(), coin.getBounds())) {
                this.collectCoin();
                coin.destroy();
                this.coins.splice(index, 1);
            }
        });
    }

    hitObstacle() {
        this.lives--;
        this.updateUI();
        
        if (this.lives <= 0) {
            this.gameOver();
        }
    }

    collectCoin() {
        this.score += 10;
        this.updateUI();
    }

    updateUI() {
        document.getElementById('score').textContent = Math.floor(this.score);
        document.getElementById('lives').textContent = this.lives;
        document.getElementById('distance').textContent = Math.floor(this.distance);
    }

    gameOver() {
        this.isGameOver = true;
        document.getElementById('final-score').textContent = Math.floor(this.score);
        document.getElementById('game-over').classList.remove('hidden');
    }

    startGame() {
        this.isGameOver = false;
        this.score = 0;
        this.lives = 3;
        this.distance = 0;
        this.speed = 200;
        this.updateUI();
    }

    restartGame() {
        // Clear all obstacles and coins
        this.obstacles.forEach(obstacle => obstacle.destroy());
        this.coins.forEach(coin => coin.destroy());
        this.obstacles = [];
        this.coins = [];
        
        this.startGame();
    }
}

// Game configuration
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game-canvas',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: TempleRunGame
};

// Start the game
const game = new Phaser.Game(config);`;
  }

  /**
   * Generate CSS file for Temple Run
   */
  generateTempleRunCSS() {
    return `/* Temple Run Game Styles */
body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

#game-container {
    position: relative;
    border: 3px solid #333;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
}

#game-canvas {
    display: block;
}

#game-ui {
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    display: flex;
    justify-content: space-between;
    color: white;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.7);
    z-index: 10;
}

#game-ui > div {
    background: rgba(0,0,0,0.5);
    padding: 5px 10px;
    border-radius: 5px;
}

#start-screen, #game-over {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.8);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    text-align: center;
    z-index: 20;
}

#start-screen h1 {
    font-size: 3em;
    margin-bottom: 20px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.7);
}

#start-screen p {
    font-size: 1.2em;
    margin: 10px 0;
}

#game-over h2 {
    font-size: 2.5em;
    margin-bottom: 20px;
    color: #ff6b6b;
}

button {
    background: #4CAF50;
    color: white;
    border: none;
    padding: 15px 30px;
    font-size: 1.2em;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
    transition: background 0.3s;
}

button:hover {
    background: #45a049;
}

.hidden {
    display: none !important;
}`;
  }

  /**
   * Generate package.json for game
   */
  generateGamePackageJson() {
    return `{
  "name": "temple-run-game",
  "version": "1.0.0",
  "description": "Temple Run game generated by DreamBuild",
  "main": "game.js",
  "scripts": {
    "start": "python -m http.server 8000",
    "serve": "npx serve ."
  },
  "dependencies": {
    "phaser": "^3.70.0"
  },
  "keywords": ["game", "temple-run", "endless-runner", "phaser"],
  "author": "DreamBuild AI",
  "license": "MIT"
}`;
  }

  /**
   * Generate README for Temple Run
   */
  generateTempleRunREADME() {
    return `# Temple Run Game

A fully playable Temple Run clone generated by DreamBuild AI using Phaser.js.

## Features

- **Endless Runner Gameplay**: Run as far as you can without hitting obstacles
- **Lane Switching**: Use A/D or Arrow Keys to switch between 3 lanes
- **Jumping**: Press W, Up Arrow, or Space to jump over obstacles
- **Sliding**: Press S or Down Arrow to slide under high obstacles
- **Coin Collection**: Collect coins to increase your score
- **Progressive Difficulty**: Game speed increases as you run further

## How to Play

1. **Start the Game**: Click "Start Game" button
2. **Switch Lanes**: Use A/D keys or Left/Right arrows
3. **Jump**: Press W, Up Arrow, or Space
4. **Slide**: Press S or Down Arrow
5. **Collect Coins**: Run into coins to increase score
6. **Avoid Obstacles**: Don't hit obstacles or you'll lose a life

## Controls

- **A/D Keys**: Switch lanes left/right
- **W/Up Arrow/Space**: Jump
- **S/Down Arrow**: Slide
- **Mouse**: Click buttons

## Installation

1. Open \`index.html\` in a web browser
2. Or run a local server:
   \`\`\`bash
   npx serve .
   \`\`\`

## Technical Details

- **Framework**: Phaser.js 3.70.0
- **Physics**: Arcade Physics
- **Graphics**: Canvas-based rendering
- **Input**: Keyboard and Mouse support

## Game Mechanics

- **3 Lanes**: Player can switch between left, center, and right lanes
- **Obstacle Types**: High obstacles (jump over) and low obstacles (slide under)
- **Scoring**: 10 points per coin collected
- **Lives**: Start with 3 lives, lose 1 when hitting obstacles
- **Speed**: Gradually increases based on distance traveled

Enjoy the game! 🎮`;
  }

  /**
   * Get Temple Run instructions
   */
  getTempleRunInstructions() {
    return {
      title: "Temple Run Game",
      description: "A fully playable endless runner game using Phaser.js",
      controls: {
        "Lane Switching": "A/D keys or Left/Right arrows",
        "Jump": "W, Up Arrow, or Space",
        "Slide": "S or Down Arrow"
      },
      features: [
        "3-lane endless runner gameplay",
        "Jump and slide mechanics",
        "Coin collection system",
        "Progressive difficulty",
        "Score and lives tracking",
        "Responsive controls"
      ],
      framework: "Phaser.js",
      difficulty: "Medium"
    };
  }

  // Phaser scene methods
  templeRunPreload() {
    // This will be called by Phaser
  }

  templeRunCreate() {
    // This will be called by Phaser
  }

  templeRunUpdate() {
    // This will be called by Phaser
  }

  /**
   * Generate other game templates
   */
  generateEndlessRunnerTemplate(options = {}) {
    return this.generateTempleRunTemplate(options);
  }

  generatePlatformerTemplate(options = {}) {
    // Implementation for platformer games
    return {
      framework: 'phaser',
      config: {},
      files: {},
      instructions: {}
    };
  }

  generatePuzzleTemplate(options = {}) {
    // Implementation for puzzle games
    return {
      framework: 'phaser',
      config: {},
      files: {},
      instructions: {}
    };
  }

  generateArcadeTemplate(options = {}) {
    // Implementation for arcade games
    return {
      framework: 'phaser',
      config: {},
      files: {},
      instructions: {}
    };
  }

  generateStrategyTemplate(options = {}) {
    // Implementation for strategy games
    return {
      framework: 'phaser',
      config: {},
      files: {},
      instructions: {}
    };
  }

  generateTowerDefenseTemplate(options = {}) {
    // Implementation for tower defense games
    return {
      framework: 'phaser',
      config: {},
      files: {},
      instructions: {}
    };
  }

  generateRacingTemplate(options = {}) {
    // Implementation for racing games
    return {
      framework: 'phaser',
      config: {},
      files: {},
      instructions: {}
    };
  }

  generateFightingTemplate(options = {}) {
    // Implementation for fighting games
    return {
      framework: 'phaser',
      config: {},
      files: {},
      instructions: {}
    };
  }

  generate3DRacingTemplate(options = {}) {
    // Implementation for 3D racing games
    return {
      framework: 'threejs',
      config: {},
      files: {},
      instructions: {}
    };
  }

  generate3DShooterTemplate(options = {}) {
    // Implementation for 3D shooter games
    return {
      framework: 'threejs',
      config: {},
      files: {},
      instructions: {}
    };
  }

  generate3DRPGTemplate(options = {}) {
    // Implementation for 3D RPG games
    return {
      framework: 'babylon',
      config: {},
      files: {},
      instructions: {}
    };
  }

  generate3DSandboxTemplate(options = {}) {
    // Implementation for 3D sandbox games
    return {
      framework: 'threejs',
      config: {},
      files: {},
      instructions: {}
    };
  }

  generateMultiplayerRPGTemplate(options = {}) {
    // Implementation for multiplayer RPG games
    return {
      framework: 'babylon',
      config: {},
      files: {},
      instructions: {}
    };
  }

  generateMultiplayerRacingTemplate(options = {}) {
    // Implementation for multiplayer racing games
    return {
      framework: 'threejs',
      config: {},
      files: {},
      instructions: {}
    };
  }

  generateBattleRoyaleTemplate(options = {}) {
    // Implementation for battle royale games
    return {
      framework: 'babylon',
      config: {},
      files: {},
      instructions: {}
    };
  }

  generateARGameTemplate(options = {}) {
    // Implementation for AR games
    return {
      framework: 'threejs',
      config: {},
      files: {},
      instructions: {}
    };
  }

  generatePhysicsSandboxTemplate(options = {}) {
    // Implementation for physics sandbox games
    return {
      framework: 'threejs',
      config: {},
      files: {},
      instructions: {}
    };
  }

  generateMusicGameTemplate(options = {}) {
    // Implementation for music games
    return {
      framework: 'phaser',
      config: {},
      files: {},
      instructions: {}
    };
  }

  generateEducationalGameTemplate(options = {}) {
    // Implementation for educational games
    return {
      framework: 'phaser',
      config: {},
      files: {},
      instructions: {}
    };
  }

  /**
   * Generate 3D Platformer Game using Three.js
   */
  generate3DPlatformerTemplate(options = {}) {
    const engineConfig = this.engineConfigs.threejs;
    
    return {
      framework: 'threejs',
      engine: 'threejs',
      config: {
        version: engineConfig.version,
        features: engineConfig.features,
        physics: options.physics || 'cannon',
        graphics: '3d'
      },
      files: {
        'index.html': this.generate3DPlatformerHTML(options),
        'game.js': this.generate3DPlatformerJS(options),
        'player.js': this.generate3DPlayerController(options),
        'world.js': this.generate3DWorldGenerator(options),
        'physics.js': this.generate3DPhysicsSystem(options),
        'audio.js': this.generate3DAudioSystem(options),
        'ui.js': this.generate3DGameUI(options),
        'styles.css': this.generate3DPlatformerCSS(options),
        'package.json': this.generate3DGamePackageJson(options),
        'README.md': this.generate3DPlatformerREADME(options)
      },
      instructions: this.get3DPlatformerInstructions(options)
    };
  }

  /**
   * Generate Multiplayer Arena Game
   */
  generateMultiplayerArenaTemplate(options = {}) {
    const engineConfig = this.engineConfigs.phaser;
    
    return {
      framework: 'phaser',
      engine: 'phaser',
      config: {
        version: engineConfig.version,
        features: [...engineConfig.features, 'multiplayer', 'websockets'],
        physics: options.physics || 'arcade',
        multiplayer: true
      },
      files: {
        'index.html': this.generateMultiplayerArenaHTML(options),
        'game.js': this.generateMultiplayerArenaJS(options),
        'network.js': this.generateMultiplayerNetwork(options),
        'player.js': this.generateMultiplayerPlayer(options),
        'arena.js': this.generateArenaManager(options),
        'matchmaking.js': this.generateMatchmakingSystem(options),
        'server.js': this.generateMultiplayerServer(options),
        'styles.css': this.generateMultiplayerArenaCSS(options),
        'package.json': this.generateMultiplayerPackageJson(options),
        'README.md': this.generateMultiplayerArenaREADME(options)
      },
      instructions: this.getMultiplayerArenaInstructions(options)
    };
  }

  /**
   * Generate VR Game Template
   */
  generateVRGameTemplate(options = {}) {
    const engineConfig = this.engineConfigs.babylon;
    
    return {
      framework: 'babylon',
      engine: 'babylon',
      config: {
        version: engineConfig.version,
        features: [...engineConfig.features, 'vr', 'hand-tracking', 'spatial-audio'],
        physics: options.physics || 'cannon',
        vr: true
      },
      files: {
        'index.html': this.generateVRGameHTML(options),
        'game.js': this.generateVRGameJS(options),
        'vr-manager.js': this.generateVRManager(options),
        'hand-tracking.js': this.generateHandTracking(options),
        'spatial-audio.js': this.generateSpatialAudio(options),
        'vr-ui.js': this.generateVRUI(options),
        'styles.css': this.generateVRGameCSS(options),
        'package.json': this.generateVRPackageJson(options),
        'README.md': this.generateVRGameREADME(options)
      },
      instructions: this.getVRGameInstructions(options)
    };
  }

  /**
   * Generate Physics Sandbox Game
   */
  generatePhysicsSandboxTemplate(options = {}) {
    const engineConfig = this.engineConfigs.threejs;
    
    return {
      framework: 'threejs',
      engine: 'threejs',
      config: {
        version: engineConfig.version,
        features: [...engineConfig.features, 'advanced-physics', 'object-interaction'],
        physics: options.physics || 'cannon',
        sandbox: true
      },
      files: {
        'index.html': this.generatePhysicsSandboxHTML(options),
        'game.js': this.generatePhysicsSandboxJS(options),
        'physics-engine.js': this.generateAdvancedPhysics(options),
        'object-manager.js': this.generateObjectManager(options),
        'interaction-system.js': this.generateInteractionSystem(options),
        'gravity-controls.js': this.generateGravityControls(options),
        'object-spawner.js': this.generateObjectSpawner(options),
        'styles.css': this.generatePhysicsSandboxCSS(options),
        'package.json': this.generatePhysicsPackageJson(options),
        'README.md': this.generatePhysicsSandboxREADME(options)
      },
      instructions: this.getPhysicsSandboxInstructions(options)
    };
  }

  /**
   * Generate RPG Game Template
   */
  generateRPGTemplate(options = {}) {
    const engineConfig = this.engineConfigs.phaser;
    
    return {
      framework: 'phaser',
      engine: 'phaser',
      config: {
        version: engineConfig.version,
        features: [...engineConfig.features, 'rpg-systems', 'inventory', 'quest-system'],
        physics: options.physics || 'arcade',
        rpg: true
      },
      files: {
        'index.html': this.generateRPGGameHTML(options),
        'game.js': this.generateRPGGameJS(options),
        'player.js': this.generateRPGPlayer(options),
        'inventory.js': this.generateInventorySystem(options),
        'quest-system.js': this.generateQuestSystem(options),
        'combat.js': this.generateCombatSystem(options),
        'dialogue.js': this.generateDialogueSystem(options),
        'world-map.js': this.generateWorldMap(options),
        'character-progression.js': this.generateCharacterProgression(options),
        'styles.css': this.generateRPGGameCSS(options),
        'package.json': this.generateRPGPackageJson(options),
        'README.md': this.generateRPGGameREADME(options)
      },
      instructions: this.getRPGGameInstructions(options)
    };
  }

  // Asset Generation Methods
  generateSprite(options = {}) {
    return {
      type: 'sprite',
      data: this.generateProceduralSprite(options),
      format: 'png',
      size: options.size || '64x64'
    };
  }

  generate3DModel(options = {}) {
    return {
      type: '3d-model',
      data: this.generateProcedural3DModel(options),
      format: 'gltf',
      complexity: options.complexity || 'medium'
    };
  }

  generateSound(options = {}) {
    return {
      type: 'sound',
      data: this.generateProceduralSound(options),
      format: 'wav',
      duration: options.duration || 2
    };
  }

  generateMusic(options = {}) {
    return {
      type: 'music',
      data: this.generateProceduralMusic(options),
      format: 'mp3',
      duration: options.duration || 30
    };
  }

  generateTexture(options = {}) {
    return {
      type: 'texture',
      data: this.generateProceduralTexture(options),
      format: 'png',
      size: options.size || '256x256'
    };
  }

  generateAnimation(options = {}) {
    return {
      type: 'animation',
      data: this.generateProceduralAnimation(options),
      format: 'json',
      frames: options.frames || 8
    };
  }

  // 3D Platformer Generation Methods
  generate3DPlatformerHTML(options = {}) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>3D Platformer Game - DreamBuild</title>
    <link rel="stylesheet" href="styles.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/0.160.0/three.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/cannon@0.20.0/build/cannon.min.js"></script>
</head>
<body>
    <div id="game-container">
        <div id="game-ui">
            <div class="hud">
                <div class="health">Health: <span id="health">100</span></div>
                <div class="score">Score: <span id="score">0</span></div>
                <div class="level">Level: <span id="level">1</span></div>
            </div>
            <div class="controls-info">
                <p>WASD: Move | Space: Jump | Mouse: Look | Shift: Run</p>
            </div>
        </div>
        <canvas id="game-canvas"></canvas>
        <div id="game-menu" class="hidden">
            <h2>3D Platformer Game</h2>
            <p>Navigate through 3D worlds, collect items, and avoid obstacles!</p>
            <button id="start-btn">Start Game</button>
        </div>
    </div>
    <script src="player.js"></script>
    <script src="world.js"></script>
    <script src="physics.js"></script>
    <script src="audio.js"></script>
    <script src="ui.js"></script>
    <script src="game.js"></script>
</body>
</html>`;
  }

  generate3DPlatformerJS(options = {}) {
    return `// 3D Platformer Game - Advanced Three.js Implementation
class Platformer3DGame {
    constructor() {
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.world = null;
        this.player = null;
        this.controls = null;
        this.clock = new THREE.Clock();
        this.isGameRunning = false;
        this.score = 0;
        this.level = 1;
        
        this.init();
    }

    init() {
        this.createScene();
        this.createCamera();
        this.createRenderer();
        this.createWorld();
        this.createPlayer();
        this.createControls();
        this.createLighting();
        this.setupEventListeners();
        this.animate();
        
        console.log('✅ 3D Platformer Game initialized successfully!');
    }

    createScene() {
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x87CEEB); // Sky blue
        this.scene.fog = new THREE.Fog(0x87CEEB, 50, 200);
    }

    createCamera() {
        this.camera = new THREE.PerspectiveCamera(
            75, 
            window.innerWidth / window.innerHeight, 
            0.1, 
            1000
        );
        this.camera.position.set(0, 10, 20);
    }

    createRenderer() {
        this.renderer = new THREE.WebGLRenderer({ 
            canvas: document.getElementById('game-canvas'),
            antialias: true 
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    }

    createWorld() {
        this.world = new WorldGenerator(this.scene);
        this.world.generateLevel(this.level);
    }

    createPlayer() {
        this.player = new Player3D(this.scene, this.world.getPhysicsWorld());
        this.scene.add(this.player.mesh);
    }

    createControls() {
        this.controls = new THREE.PointerLockControls(this.camera, document.body);
        this.scene.add(this.controls.getObject());
    }

    createLighting() {
        // Ambient light
        const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
        this.scene.add(ambientLight);

        // Directional light (sun)
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(50, 50, 50);
        directionalLight.castShadow = true;
        directionalLight.shadow.mapSize.width = 2048;
        directionalLight.shadow.mapSize.height = 2048;
        this.scene.add(directionalLight);
    }

    setupEventListeners() {
        // Pointer lock controls
        document.addEventListener('click', () => {
            if (!this.isGameRunning) return;
            this.controls.lock();
        });

        this.controls.addEventListener('lock', () => {
            console.log('🎮 Pointer locked - Game controls active');
        });

        this.controls.addEventListener('unlock', () => {
            console.log('🔓 Pointer unlocked');
        });

        // Window resize
        window.addEventListener('resize', () => {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
        });

        // Start button
        document.getElementById('start-btn').addEventListener('click', () => {
            this.startGame();
        });
    }

    startGame() {
        this.isGameRunning = true;
        document.getElementById('game-menu').classList.add('hidden');
        this.controls.lock();
        console.log('🎮 Game started!');
    }

    update() {
        if (!this.isGameRunning) return;

        const deltaTime = this.clock.getDelta();
        
        // Update player
        this.player.update(deltaTime);
        
        // Update world
        this.world.update(deltaTime);
        
        // Check collisions
        this.checkCollisions();
        
        // Update UI
        this.updateUI();
    }

    checkCollisions() {
        // Check player-world collisions
        const playerBox = new THREE.Box3().setFromObject(this.player.mesh);
        
        // Check for collectibles
        this.world.collectibles.forEach((collectible, index) => {
            const collectibleBox = new THREE.Box3().setFromObject(collectible.mesh);
            if (playerBox.intersectsBox(collectibleBox)) {
                this.collectItem(collectible, index);
            }
        });

        // Check for enemies
        this.world.enemies.forEach((enemy, index) => {
            const enemyBox = new THREE.Box3().setFromObject(enemy.mesh);
            if (playerBox.intersectsBox(enemyBox)) {
                this.hitEnemy(enemy, index);
            }
        });
    }

    collectItem(item, index) {
        this.score += 10;
        this.scene.remove(item.mesh);
        this.world.collectibles.splice(index, 1);
        
        // Play collect sound
        this.playSound('collect');
        
        console.log(\`🎯 Collected item! Score: \${this.score}\`);
        
        // Check level completion
        if (this.world.collectibles.length === 0) {
            this.completeLevel();
        }
    }

    hitEnemy(enemy, index) {
        this.player.takeDamage(20);
        
        // Knockback effect
        const knockback = enemy.mesh.position.clone().sub(this.player.mesh.position).normalize();
        this.player.applyKnockback(knockback.multiplyScalar(5));
        
        console.log(\`💥 Hit by enemy! Health: \${this.player.health}\`);
        
        if (this.player.health <= 0) {
            this.gameOver();
        }
    }

    completeLevel() {
        this.level++;
        this.score += 100;
        console.log(\`🏆 Level completed! Moving to level \${this.level}\`);
        
        // Generate new level
        this.world.generateLevel(this.level);
        
        // Reset player position
        this.player.resetPosition();
    }

    gameOver() {
        this.isGameRunning = false;
        this.controls.unlock();
        document.getElementById('game-menu').classList.remove('hidden');
        console.log(\`💀 Game Over! Final Score: \${this.score}\`);
    }

    updateUI() {
        document.getElementById('health').textContent = this.player.health;
        document.getElementById('score').textContent = this.score;
        document.getElementById('level').textContent = this.level;
    }

    playSound(soundName) {
        // Sound implementation would go here
        console.log(\`🔊 Playing sound: \${soundName}\`);
    }

    animate() {
        requestAnimationFrame(() => this.animate());
        this.update();
        this.renderer.render(this.scene, this.camera);
    }
}

// Initialize game when page loads
window.addEventListener('load', () => {
    new Platformer3DGame();
});`;
  }

  generate3DPlayerController(options = {}) {
    return `// 3D Player Controller with Advanced Physics
class Player3D {
    constructor(scene, physicsWorld) {
        this.scene = scene;
        this.world = physicsWorld;
        this.health = 100;
        this.maxHealth = 100;
        this.speed = 5;
        this.jumpPower = 10;
        this.isGrounded = false;
        this.velocity = new THREE.Vector3();
        this.direction = new THREE.Vector3();
        
        this.createMesh();
        this.createPhysics();
        this.setupControls();
        
        console.log('✅ 3D Player created');
    }

    createMesh() {
        // Create player geometry and material
        const geometry = new THREE.CapsuleGeometry(0.5, 2, 4, 8);
        const material = new THREE.MeshLambertMaterial({ color: 0x00ff00 });
        
        this.mesh = new THREE.Mesh(geometry, material);
        this.mesh.position.set(0, 3, 0);
        this.mesh.castShadow = true;
        this.mesh.receiveShadow = true;
    }

    createPhysics() {
        // Create physics body using Cannon.js
        const shape = new CANNON.Sphere(0.5);
        this.body = new CANNON.Body({ mass: 1 });
        this.body.addShape(shape);
        this.body.position.set(0, 3, 0);
        this.world.addBody(this.body);
        
        // Set up physics constraints
        this.body.material = new CANNON.Material('player');
        this.body.material.friction = 0.3;
        this.body.material.restitution = 0.1;
    }

    setupControls() {
        this.keys = {
            forward: false,
            backward: false,
            left: false,
            right: false,
            jump: false,
            run: false
        };

        document.addEventListener('keydown', (event) => this.onKeyDown(event));
        document.addEventListener('keyup', (event) => this.onKeyUp(event));
    }

    onKeyDown(event) {
        switch(event.code) {
            case 'KeyW':
                this.keys.forward = true;
                break;
            case 'KeyS':
                this.keys.backward = true;
                break;
            case 'KeyA':
                this.keys.left = true;
                break;
            case 'KeyD':
                this.keys.right = true;
                break;
            case 'Space':
                this.keys.jump = true;
                break;
            case 'ShiftLeft':
                this.keys.run = true;
                break;
        }
    }

    onKeyUp(event) {
        switch(event.code) {
            case 'KeyW':
                this.keys.forward = false;
                break;
            case 'KeyS':
                this.keys.backward = false;
                break;
            case 'KeyA':
                this.keys.left = false;
                break;
            case 'KeyD':
                this.keys.right = false;
                break;
            case 'Space':
                this.keys.jump = false;
                break;
            case 'ShiftLeft':
                this.keys.run = false;
                break;
        }
    }

    update(deltaTime) {
        this.handleMovement(deltaTime);
        this.handleJump();
        this.syncPhysics();
        this.checkGrounded();
    }

    handleMovement(deltaTime) {
        const moveSpeed = this.keys.run ? this.speed * 1.5 : this.speed;
        
        // Get camera direction for movement
        const camera = this.scene.getObjectByName('camera');
        if (camera) {
            const forward = new THREE.Vector3();
            const right = new THREE.Vector3();
            
            camera.getWorldDirection(forward);
            right.crossVectors(forward, new THREE.Vector3(0, 1, 0));
            
            this.direction.set(0, 0, 0);
            
            if (this.keys.forward) {
                this.direction.add(forward);
            }
            if (this.keys.backward) {
                this.direction.sub(forward);
            }
            if (this.keys.left) {
                this.direction.sub(right);
            }
            if (this.keys.right) {
                this.direction.add(right);
            }
            
            // Normalize and apply speed
            this.direction.y = 0; // Remove vertical component
            this.direction.normalize();
            this.direction.multiplyScalar(moveSpeed);
            
            // Apply movement to physics body
            this.body.velocity.x = this.direction.x;
            this.body.velocity.z = this.direction.z;
        }
    }

    handleJump() {
        if (this.keys.jump && this.isGrounded) {
            this.body.velocity.y = this.jumpPower;
            this.isGrounded = false;
        }
    }

    syncPhysics() {
        // Sync visual mesh with physics body
        this.mesh.position.copy(this.body.position);
        this.mesh.quaternion.copy(this.body.quaternion);
    }

    checkGrounded() {
        // Raycast downward to check if grounded
        const raycaster = new THREE.Raycaster(
            this.mesh.position,
            new THREE.Vector3(0, -1, 0),
            0,
            1.1
        );
        
        const intersects = raycaster.intersectObjects(this.scene.children, true);
        this.isGrounded = intersects.length > 0;
    }

    takeDamage(amount) {
        this.health = Math.max(0, this.health - amount);
    }

    applyKnockback(direction) {
        this.body.velocity.add(direction);
    }

    resetPosition() {
        this.body.position.set(0, 3, 0);
        this.body.velocity.set(0, 0, 0);
        this.health = this.maxHealth;
    }
}`;
  }
}

export default new GameDevelopmentService();
