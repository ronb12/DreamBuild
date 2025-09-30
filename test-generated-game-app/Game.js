// Generated for project: dream-game-app
class Game {
  constructor() {
    this.canvas = null
    this.ctx = null
    this.gameState = 'menu' // menu, playing, paused, gameOver
    this.score = 0
    this.level = 1
    this.player = null
    this.enemies = []
    this.gameLoop = null
    this.lastTime = 0
    this.init()
  }

  init() {
    this.createCanvas()
    this.setupEventListeners()
    this.showMenu()
  }

  createCanvas() {
    const container = document.getElementById('game-container')
    if (!container) return

    this.canvas = document.createElement('canvas')
    this.canvas.width = 800
    this.canvas.height = 600
    this.canvas.style.border = '2px solid #333'
    this.canvas.style.backgroundColor = '#000'
    
    this.ctx = this.canvas.getContext('2d')
    container.appendChild(this.canvas)
  }

  setupEventListeners() {
    document.addEventListener('keydown', (e) => {
      if (this.gameState === 'playing' && this.player) {
        this.player.handleInput(e.key)
      } else if (e.key === 'Enter' && this.gameState === 'menu') {
        this.startGame()
      } else if (e.key === 'Enter' && this.gameState === 'gameOver') {
        this.resetGame()
      }
    })

    // Touch controls for mobile
    this.canvas.addEventListener('touchstart', (e) => {
      if (this.gameState === 'playing' && this.player) {
        const touch = e.touches[0]
        const rect = this.canvas.getBoundingClientRect()
        const x = touch.clientX - rect.left
        
        if (x < this.canvas.width / 2) {
          this.player.moveLeft()
        } else {
          this.player.moveRight()
        }
      }
    })
  }

  showMenu() {
    this.gameState = 'menu'
    this.ctx.fillStyle = '#000'
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
    
    this.ctx.fillStyle = '#fff'
    this.ctx.font = '48px Arial'
    this.ctx.textAlign = 'center'
    this.ctx.fillText('Space Game', this.canvas.width / 2, this.canvas.height / 2 - 50)
    
    this.ctx.font = '24px Arial'
    this.ctx.fillText('Press ENTER to Start', this.canvas.width / 2, this.canvas.height / 2 + 50)
    
    this.ctx.fillText('High Score: ' + this.getHighScore(), this.canvas.width / 2, this.canvas.height / 2 + 100)
  }

  startGame() {
    this.gameState = 'playing'
    this.score = 0
    this.level = 1
    this.enemies = []
    
    // Create player
    this.player = new Player(this.canvas.width / 2, this.canvas.height - 50)
    
    // Create initial enemies
    this.createEnemies()
    
    // Start game loop
    this.gameLoop = requestAnimationFrame((time) => this.update(time))
  }

  createEnemies() {
    for (let i = 0; i < 5 + this.level; i++) {
      const x = Math.random() * (this.canvas.width - 40)
      const y = Math.random() * 200
      this.enemies.push(new Enemy(x, y))
    }
  }

  update(currentTime) {
    if (this.gameState !== 'playing') return

    const deltaTime = currentTime - this.lastTime
    this.lastTime = currentTime

    // Clear canvas
    this.ctx.fillStyle = '#000'
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)

    // Update player
    if (this.player) {
      this.player.update(deltaTime)
      this.player.draw(this.ctx)
    }

    // Update enemies
    this.enemies.forEach((enemy, index) => {
      enemy.update(deltaTime)
      enemy.draw(this.ctx)

      // Check collision with player
      if (this.player && this.checkCollision(this.player, enemy)) {
        this.gameOver()
      }

      // Remove enemies that are off screen
      if (enemy.y > this.canvas.height) {
        this.enemies.splice(index, 1)
        this.score += 10
      }
    })

    // Add new enemies if needed
    if (this.enemies.length === 0) {
      this.level++
      this.createEnemies()
    }

    // Draw UI
    this.drawUI()

    // Continue game loop
    this.gameLoop = requestAnimationFrame((time) => this.update(time))
  }

  checkCollision(player, enemy) {
    return player.x < enemy.x + enemy.width &&
           player.x + player.width > enemy.x &&
           player.y < enemy.y + enemy.height &&
           player.y + player.height > enemy.y
  }

  drawUI() {
    this.ctx.fillStyle = '#fff'
    this.ctx.font = '20px Arial'
    this.ctx.textAlign = 'left'
    this.ctx.fillText(`Score: ${this.score}`, 20, 30)
    this.ctx.fillText(`Level: ${this.level}`, 20, 60)
  }

  gameOver() {
    this.gameState = 'gameOver'
    cancelAnimationFrame(this.gameLoop)
    
    // Save high score
    if (this.score > this.getHighScore()) {
      localStorage.setItem('game-high-score', this.score.toString())
    }
    
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.7)'
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
    
    this.ctx.fillStyle = '#fff'
    this.ctx.font = '48px Arial'
    this.ctx.textAlign = 'center'
    this.ctx.fillText('Game Over!', this.canvas.width / 2, this.canvas.height / 2 - 50)
    
    this.ctx.font = '24px Arial'
    this.ctx.fillText(`Final Score: ${this.score}`, this.canvas.width / 2, this.canvas.height / 2)
    this.ctx.fillText('Press ENTER to Restart', this.canvas.width / 2, this.canvas.height / 2 + 50)
  }

  resetGame() {
    this.showMenu()
  }

  getHighScore() {
    return parseInt(localStorage.getItem('game-high-score') || '0')
  }

  render() {
    const container = document.getElementById('game')
    if (!container) return

    container.innerHTML = `
      <div class="game-container" id="game-container">
        <!-- Canvas will be created here -->
      </div>
      <div class="game-controls">
        <p>Use arrow keys or WASD to move. Avoid the enemies!</p>
      </div>
    `
  }
}

class Player {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.width = 40
    this.height = 40
    this.speed = 200
    this.keys = {}
  }

  handleInput(key) {
    this.keys[key] = true
  }

  update(deltaTime) {
    if (this.keys['ArrowLeft'] || this.keys['a'] || this.keys['A']) {
      this.x -= this.speed * deltaTime / 1000
    }
    if (this.keys['ArrowRight'] || this.keys['d'] || this.keys['D']) {
      this.x += this.speed * deltaTime / 1000
    }

    // Keep player on screen
    this.x = Math.max(0, Math.min(760, this.x))
  }

  draw(ctx) {
    ctx.fillStyle = '#00f'
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }

  moveLeft() {
    this.x -= 20
    this.x = Math.max(0, this.x)
  }

  moveRight() {
    this.x += 20
    this.x = Math.min(760, this.x)
  }
}

class Enemy {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.width = 30
    this.height = 30
    this.speed = 50 + Math.random() * 100
  }

  update(deltaTime) {
    this.y += this.speed * deltaTime / 1000
  }

  draw(ctx) {
    ctx.fillStyle = '#f00'
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }
}