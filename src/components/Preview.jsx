import { useRef, useEffect, useState } from 'react'
import { useProject } from '../contexts/ProjectContext'
import { motion } from 'framer-motion'
import { RefreshCw, ExternalLink, Maximize2, Minimize2 } from 'lucide-react'
import toast from 'react-hot-toast'

const Preview = () => {
  const { currentProject } = useProject()
  const iframeRef = useRef(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [previewError, setPreviewError] = useState(null)

  // Update preview when files change
  useEffect(() => {
    console.log('🎮 Preview useEffect triggered - files changed:', Object.keys(currentProject.files))
    console.log('🎮 Preview useEffect - currentProject:', currentProject)
    updatePreview()
  }, [currentProject.files, currentProject.activeFile, currentProject])

  const updatePreview = () => {
    console.log('🎮 updatePreview called with files:', Object.keys(currentProject.files))
    if (!iframeRef.current) {
      console.log('🎮 updatePreview: iframeRef.current is null')
      return
    }

    setIsLoading(true)
    setPreviewError(null)

    try {
      const htmlContent = currentProject.files['index.html'] || ''
      const cssContent = currentProject.files['style.css'] || ''
      const jsContent = currentProject.files['script.js'] || ''
      
      // Check if we have React components (game files)
      const gameAppFile = currentProject.files['src/components/GameApp.jsx'] || ''
      const gameComponentFile = currentProject.files['src/components/GameComponent.jsx'] || ''
      const templeRunUIFile = currentProject.files['src/components/TempleRunUI.jsx'] || ''
      const runnerPlayerFile = currentProject.files['src/components/RunnerPlayer.jsx'] || ''
      const obstacleFile = currentProject.files['src/components/Obstacle.jsx'] || ''
      
      // Log file contents for debugging
      if (gameComponentFile) {
        console.log('🎮 Preview Debug - GameComponent content preview:', gameComponentFile.substring(0, 200) + '...')
      }
      
      // Debug logging for file detection
      console.log('🎮 Preview Debug - Checking for game files:')
      console.log('🎮 - GameApp.jsx exists:', !!gameAppFile)
      console.log('🎮 - GameComponent.jsx exists:', !!gameComponentFile)
      console.log('🎮 - TempleRunUI.jsx exists:', !!templeRunUIFile)
      console.log('🎮 - RunnerPlayer.jsx exists:', !!runnerPlayerFile)
      console.log('🎮 - Obstacle.jsx exists:', !!obstacleFile)
      console.log('🎮 - All project files:', Object.keys(currentProject.files))
      
      // If we have game components, create a React app preview
      if (gameAppFile || gameComponentFile) {
        console.log('🎮 Preview Debug - Game files detected, creating React preview')
        createReactPreview()
        return
      }

      if (!htmlContent.trim()) {
        showPlaceholder()
        return
      }

      let fullHTML = htmlContent

      // Inject CSS
      if (cssContent.trim()) {
        // Replace external CSS links
        fullHTML = fullHTML.replace(
          /<link[^>]*rel=["']stylesheet["'][^>]*href=["']style\.css["'][^>]*>/gi,
          `<style>${cssContent}</style>`
        )

        // If no external CSS link found, inject into head
        if (fullHTML === htmlContent && fullHTML.includes('<head>')) {
          fullHTML = fullHTML.replace(
            '<head>',
            `<head>\n<style>${cssContent}</style>`
          )
        } else if (fullHTML === htmlContent && !fullHTML.includes('<head>')) {
          if (fullHTML.includes('<title>')) {
            fullHTML = fullHTML.replace(
              '</title>',
              `</title>\n<style>${cssContent}</style>`
            )
          } else {
            fullHTML = `<style>${cssContent}</style>\n${fullHTML}`
          }
        }
      }

      // Inject JavaScript
      if (jsContent.trim()) {
        // Replace external JS scripts
        fullHTML = fullHTML.replace(
          /<script[^>]*src=["']script\.js["'][^>]*><\/script>/gi,
          `<script>${jsContent}</script>`
        )

        // If no external JS script found, inject before closing body
        if (fullHTML.includes('</body>')) {
          fullHTML = fullHTML.replace(
            '</body>',
            `<script>${jsContent}</script>\n</body>`
          )
        } else {
          fullHTML += `\n<script>${jsContent}</script>`
        }
      }

      // Ensure proper HTML structure
      if (!fullHTML.includes('<!DOCTYPE html>')) {
        fullHTML = `<!DOCTYPE html>\n${fullHTML}`
      }

      // Update iframe content using srcdoc (CORS-safe)
      const iframe = iframeRef.current
      
      // Use srcdoc to avoid CORS issues
      iframe.srcdoc = fullHTML

      // Handle iframe load events
      iframe.onload = () => {
        setIsLoading(false)
        setPreviewError(null)
      }

      iframe.onerror = () => {
        setIsLoading(false)
        setPreviewError('Failed to load preview')
      }

    } catch (error) {
      console.error('Preview update error:', error)
      setIsLoading(false)
      setPreviewError('Preview update failed')
    }
  }

  const createReactPreview = () => {
    if (!iframeRef.current) return

    // Get all the React component files
    const gameAppFile = currentProject.files['src/components/GameApp.jsx'] || ''
    const gameComponentFile = currentProject.files['src/components/GameComponent.jsx'] || ''
    const templeRunUIFile = currentProject.files['src/components/TempleRunUI.jsx'] || ''
    const runnerPlayerFile = currentProject.files['src/components/RunnerPlayer.jsx'] || ''
    const obstacleFile = currentProject.files['src/components/Obstacle.jsx'] || ''
    const coinFile = currentProject.files['src/components/Coin.jsx'] || ''
    const playerFile = currentProject.files['src/components/Player.jsx'] || ''
    
    // Get CSS files
    const gameAppCSS = currentProject.files['src/components/GameApp.css'] || ''
    const gameComponentCSS = currentProject.files['src/components/GameComponent.css'] || ''
    const templeRunUICSS = currentProject.files['src/components/TempleRunUI.css'] || ''
    const runnerPlayerCSS = currentProject.files['src/components/RunnerPlayer.css'] || ''
    const obstacleCSS = currentProject.files['src/components/Obstacle.css'] || ''
    const coinCSS = currentProject.files['src/components/Coin.css'] || ''
    const playerCSS = currentProject.files['src/components/Player.css'] || ''
    
    // Detect game type based on available files and content
    const hasTempleRunFiles = templeRunUIFile || runnerPlayerFile || obstacleFile
    const hasCoinCollectorFiles = playerFile || coinFile
    
    // Also check GameComponent content for Temple Run indicators
    const gameComponentContent = gameComponentFile.toLowerCase()
    const hasTempleRunContent = gameComponentContent.includes('temple run') || 
                               gameComponentContent.includes('lane') ||
                               gameComponentContent.includes('jump') ||
                               gameComponentContent.includes('slide') ||
                               gameComponentContent.includes('obstacle') ||
                               gameComponentContent.includes('endless runner')
    
    const isTempleRun = hasTempleRunFiles || hasTempleRunContent
    const isCoinCollector = hasCoinCollectorFiles && !isTempleRun
    
    // Debug logging
    console.log('🎮 Preview Debug - Available files:')
    console.log('🎮 - templeRunUIFile:', !!templeRunUIFile)
    console.log('🎮 - runnerPlayerFile:', !!runnerPlayerFile)
    console.log('🎮 - obstacleFile:', !!obstacleFile)
    console.log('🎮 - playerFile:', !!playerFile)
    console.log('🎮 - coinFile:', !!coinFile)
    console.log('🎮 - hasTempleRunFiles:', hasTempleRunFiles)
    console.log('🎮 - hasTempleRunContent:', hasTempleRunContent)
    console.log('🎮 - isTempleRun:', isTempleRun)
    console.log('🎮 - isCoinCollector:', isCoinCollector)
    console.log('🎮 - All project files:', Object.keys(currentProject.files))

    // Create a complete React app HTML
    const reactHTML = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>DreamBuild Game Preview</title>
        <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
        <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
        <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
        <style>
          body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            background: #f0f0f0;
          }
          #root {
            width: 100%;
            min-height: 100vh;
          }
          ${gameAppCSS}
          ${gameComponentCSS}
          ${templeRunUICSS}
          ${runnerPlayerCSS}
          ${obstacleCSS}
          ${coinCSS}
          ${playerCSS}
        </style>
      </head>
      <body>
        <div id="root"></div>
        
        <script type="text/babel">
          const { useState, useEffect, useRef, useCallback } = React;
          
          // Game component based on detected game type
          const GameComponent = () => {
            const [gameState, setGameState] = useState({
              score: 0,
              distance: 0,
              speed: 1,
              isPlaying: false,
              isPaused: false,
              gameOver: false
            });
            
            const [player, setPlayer] = useState({ x: 100, y: 200, lane: 1, isJumping: false, isSliding: false });
            const [obstacles, setObstacles] = useState([]);
            const [coins, setCoins] = useState([]);
            const [keys, setKeys] = useState({});
            
            const handleKeyDown = useCallback((e) => {
              setKeys(prev => ({ ...prev, [e.code]: true }));
            }, []);
            
            const handleKeyUp = useCallback((e) => {
              setKeys(prev => ({ ...prev, [e.code]: false }));
            }, []);
            
            useEffect(() => {
              window.addEventListener('keydown', handleKeyDown);
              window.addEventListener('keyup', handleKeyUp);
              return () => {
                window.removeEventListener('keydown', handleKeyDown);
                window.removeEventListener('keyup', handleKeyUp);
              };
            }, [handleKeyDown, handleKeyUp]);
            
            const startGame = () => {
              setGameState(prev => ({ ...prev, isPlaying: true, gameOver: false, score: 0, distance: 0 }));
              setPlayer({ x: 100, y: 200, lane: 1, isJumping: false, isSliding: false });
              setObstacles([]);
              setCoins([]);
            };
            
            const pauseGame = () => {
              setGameState(prev => ({ ...prev, isPaused: !prev.isPaused }));
            };
            
            const gameLoop = useCallback(() => {
              if (!gameState.isPlaying || gameState.isPaused) return;
              
              // Handle player movement
              setPlayer(prevPlayer => {
                let newLane = prevPlayer.lane;
                let newY = prevPlayer.y;
                let newIsJumping = prevPlayer.isJumping;
                let newIsSliding = prevPlayer.isSliding;
                
                // Lane switching
                if (keys['ArrowLeft'] || keys['KeyA']) {
                  newLane = Math.max(0, newLane - 1);
                }
                if (keys['ArrowRight'] || keys['KeyD']) {
                  newLane = Math.min(2, newLane + 1);
                }
                
                // Jumping
                if ((keys['ArrowUp'] || keys['KeyW']) && !prevPlayer.isJumping) {
                  newIsJumping = true;
                  newY = 100;
                  setTimeout(() => setPlayer(p => ({ ...p, isJumping: false, y: 200 })), 500);
                }
                
                // Sliding
                if ((keys['ArrowDown'] || keys['KeyS']) && !prevPlayer.isSliding) {
                  newIsSliding = true;
                  newY = 250;
                  setTimeout(() => setPlayer(p => ({ ...p, isSliding: false, y: 200 })), 400);
                }
                
                return { 
                  ...prevPlayer, 
                  lane: newLane, 
                  y: newY, 
                  isJumping: newIsJumping, 
                  isSliding: newIsSliding,
                  x: 50 + newLane * 75
                };
              });
              
              // Update game state
              setGameState(prev => ({
                ...prev,
                distance: prev.distance + prev.speed,
                speed: Math.min(3, 1 + Math.floor(prev.distance / 1000) * 0.2)
              }));
              
              // Spawn obstacles
              if (Math.random() < 0.02 + gameState.speed * 0.01) {
                setObstacles(prev => [...prev, {
                  id: Date.now(),
                  lane: Math.floor(Math.random() * 3),
                  type: Math.random() < 0.7 ? 'low' : 'high',
                  x: 400,
                  y: Math.random() < 0.7 ? 200 : 100
                }]);
              }
              
              // Spawn coins
              if (Math.random() < 0.01) {
                setCoins(prev => [...prev, {
                  id: Date.now(),
                  lane: Math.floor(Math.random() * 3),
                  x: 400,
                  y: 150,
                  collected: false
                }]);
              }
              
              // Move obstacles and coins
              setObstacles(prev => prev.map(obs => ({ ...obs, x: obs.x - gameState.speed * 3 })).filter(obs => obs.x > -50));
              setCoins(prev => prev.map(coin => ({ ...coin, x: coin.x - gameState.speed * 2 })).filter(coin => coin.x > -50));
              
              // Check collisions
              setObstacles(prevObstacles => {
                return prevObstacles.map(obs => {
                  if (obs.lane === player.lane && Math.abs(obs.x - player.x) < 30 && 
                      ((obs.type === 'low' && !player.isJumping) || (obs.type === 'high' && !player.isSliding))) {
                    setGameState(prev => ({ ...prev, gameOver: true, isPlaying: false }));
                    return obs;
                  }
                  return obs;
                });
              });
              
              // Check coin collection
              setCoins(prevCoins => {
                return prevCoins.map(coin => {
                  if (coin.lane === player.lane && Math.abs(coin.x - player.x) < 25 && !coin.collected) {
                    setGameState(prev => ({ ...prev, score: prev.score + 10 }));
                    return { ...coin, collected: true };
                  }
                  return coin;
                }).filter(coin => !coin.collected);
              });
              
              requestAnimationFrame(gameLoop);
            }, [keys, player.lane, player.isJumping, player.isSliding, gameState.isPlaying, gameState.isPaused, gameState.speed]);
            
            useEffect(() => {
              if (gameState.isPlaying && !gameState.isPaused) {
                const timer = setTimeout(gameLoop, 16);
                return () => clearTimeout(timer);
              }
            }, [gameLoop, gameState.isPlaying, gameState.isPaused]);
            
            if (isTempleRun) {
              // Temple Run Game
              return (
                <div style={{ 
                  width: '400px', 
                  height: '300px', 
                  border: '2px solid #333', 
                  position: 'relative',
                  background: 'linear-gradient(180deg, #87CEEB 0%, #98FB98 100%)',
                  borderRadius: '10px',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    color: 'white',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    textShadow: '1px 1px 2px rgba(0,0,0,0.7)'
                  }}>
                    Score: {gameState.score} | Distance: {Math.floor(gameState.distance)}
                  </div>
                  
                  {!gameState.isPlaying && (
                    <div style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      textAlign: 'center',
                      color: 'white',
                      textShadow: '1px 1px 2px rgba(0,0,0,0.7)'
                    }}>
                      <h2>Temple Run</h2>
                      <p>A/D or ←/→ to switch lanes</p>
                      <p>W or ↑ to jump</p>
                      <p>S or ↓ to slide</p>
                      <button onClick={startGame} style={{
                        padding: '10px 20px',
                        fontSize: '16px',
                        background: '#4CAF50',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                      }}>
                        Start Game
                      </button>
                    </div>
                  )}
                  
                  {gameState.isPlaying && (
                    <>
                      {/* Lanes */}
                      <div style={{ position: 'absolute', left: '50px', top: '0', width: '2px', height: '100%', background: 'rgba(255,255,255,0.3)' }} />
                      <div style={{ position: 'absolute', left: '125px', top: '0', width: '2px', height: '100%', background: 'rgba(255,255,255,0.3)' }} />
                      <div style={{ position: 'absolute', left: '200px', top: '0', width: '2px', height: '100%', background: 'rgba(255,255,255,0.3)' }} />
                      
                      {/* Player */}
                      <div style={{
                        position: 'absolute',
                        top: player.y,
                        left: player.x,
                        width: '30px',
                        height: player.isSliding ? '15px' : '30px',
                        background: player.isSliding ? '#8B4513' : '#FFD700',
                        borderRadius: player.isSliding ? '5px' : '50%',
                        border: '2px solid #FFA500',
                        transition: 'all 0.1s ease'
                      }} />
                      
                      {/* Obstacles */}
                      {obstacles.map(obs => (
                        <div key={obs.id} style={{
                          position: 'absolute',
                          top: obs.y,
                          left: obs.x,
                          width: '25px',
                          height: obs.type === 'low' ? '40px' : '20px',
                          background: '#8B4513',
                          borderRadius: '3px'
                        }} />
                      ))}
                      
                      {/* Coins */}
                      {coins.map(coin => (
                        <div key={coin.id} style={{
                          position: 'absolute',
                          top: coin.y,
                          left: coin.x,
                          width: '15px',
                          height: '15px',
                          background: '#FFD700',
                          borderRadius: '50%',
                          border: '2px solid #FFA500',
                          boxShadow: '0 0 10px #FFD700'
                        }} />
                      ))}
                      
                      <button onClick={pauseGame} style={{
                        position: 'absolute',
                        bottom: '10px',
                        right: '10px',
                        padding: '5px 10px',
                        fontSize: '12px',
                        background: '#f44336',
                        color: 'white',
                        border: 'none',
                        borderRadius: '3px',
                        cursor: 'pointer'
                      }}>
                        {gameState.isPaused ? 'Resume' : 'Pause'}
                      </button>
                    </>
                  )}
                  
                  {gameState.gameOver && (
                    <div style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      textAlign: 'center',
                      color: 'white',
                      background: 'rgba(0,0,0,0.8)',
                      padding: '20px',
                      borderRadius: '10px'
                    }}>
                      <h2>Game Over!</h2>
                      <p>Final Score: {gameState.score}</p>
                      <p>Distance: {Math.floor(gameState.distance)}</p>
                      <button onClick={startGame} style={{
                        padding: '10px 20px',
                        fontSize: '16px',
                        background: '#4CAF50',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                      }}>
                        Play Again
                      </button>
                    </div>
                  )}
                </div>
              );
            } else {
              // Coin Collector Game (fallback)
              return (
                <div style={{ 
                  width: '400px', 
                  height: '400px', 
                  border: '2px solid #333', 
                  position: 'relative',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  borderRadius: '10px',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    color: 'white',
                    fontSize: '18px',
                    fontWeight: 'bold'
                  }}>
                    Score: {gameState.score}
                  </div>
                  
                  {!gameState.isPlaying && (
                    <div style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      textAlign: 'center',
                      color: 'white'
                    }}>
                      <h2>Coin Collector Game</h2>
                      <p>Use arrow keys or WASD to move</p>
                      <button onClick={startGame} style={{
                        padding: '10px 20px',
                        fontSize: '16px',
                        background: '#4CAF50',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                      }}>
                        Start Game
                      </button>
                    </div>
                  )}
                  
                  {gameState.isPlaying && (
                    <>
                      <div style={{
                        position: 'absolute',
                        top: 200,
                        left: 200,
                        width: '20px',
                        height: '20px',
                        background: '#FFD700',
                        borderRadius: '50%',
                        border: '2px solid #FFA500'
                      }} />
                      
                      <button onClick={pauseGame} style={{
                        position: 'absolute',
                        bottom: '10px',
                        right: '10px',
                        padding: '5px 10px',
                        fontSize: '12px',
                        background: '#f44336',
                        color: 'white',
                        border: 'none',
                        borderRadius: '3px',
                        cursor: 'pointer'
                      }}>
                        {gameState.isPaused ? 'Resume' : 'Pause'}
                      </button>
                    </>
                  )}
                </div>
              );
            }
          };
          
          const GameApp = () => {
            return (
              <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                minHeight: '100vh',
                background: '#f0f0f0',
                fontFamily: 'Arial, sans-serif'
              }}>
                <GameComponent />
              </div>
            );
          };
          
          // Render the app
          const root = ReactDOM.createRoot(document.getElementById('root'));
          root.render(React.createElement(GameApp));
        </script>
      </body>
      </html>
    `

    const iframe = iframeRef.current
    iframe.srcdoc = reactHTML

    iframe.onload = () => {
      setIsLoading(false)
      setPreviewError(null)
    }

    iframe.onerror = () => {
      setIsLoading(false)
      setPreviewError('Failed to load React preview')
    }
  }

  const showPlaceholder = () => {
    if (!iframeRef.current) return

    const placeholderHTML = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Preview</title>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            margin: 0;
            padding: 0;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
          }
          .placeholder {
            text-align: center;
            padding: 40px;
            background: rgba(255,255,255,0.1);
            border-radius: 20px;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255,255,255,0.2);
            max-width: 400px;
          }
          .placeholder h2 {
            font-size: 2rem;
            margin-bottom: 20px;
            opacity: 0.9;
          }
          .placeholder p {
            font-size: 1.1rem;
            opacity: 0.8;
            line-height: 1.6;
          }
          .icon {
            font-size: 4rem;
            margin-bottom: 20px;
            display: block;
          }
        </style>
      </head>
      <body>
        <div class="placeholder">
          <span class="icon">🚀</span>
          <h2>Ready to Build</h2>
          <p>Generate some code to see your application preview here!</p>
        </div>
      </body>
      </html>
    `

    const iframe = iframeRef.current
    
    // Use srcdoc to avoid CORS issues
    iframe.srcdoc = placeholderHTML

    setIsLoading(false)
  }

  const handleRefresh = () => {
    updatePreview()
    toast.success('Preview refreshed!')
  }

  const handleOpenInNewTab = () => {
    if (!iframeRef.current) return

    const iframe = iframeRef.current
    
    // Get the current HTML content from srcdoc
    if (iframe.srcdoc) {
      const newWindow = window.open('', '_blank')
      newWindow.document.write(iframe.srcdoc)
      newWindow.document.close()
      toast.success('Opened in new tab!')
    } else {
      toast.error('No content to open')
    }
  }

  const handleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  const handleFullscreenChange = () => {
    if (!document.fullscreenElement) {
      setIsFullscreen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange)
    }
  }, [])

  const toggleFullscreen = async () => {
    if (!isFullscreen) {
      if (iframeRef.current.requestFullscreen) {
        await iframeRef.current.requestFullscreen()
      }
    } else {
      if (document.exitFullscreen) {
        await document.exitFullscreen()
      }
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`h-full flex flex-col bg-card border border-border rounded-lg overflow-hidden ${
        isFullscreen ? 'fixed inset-0 z-50 rounded-none' : ''
      }`}
    >
      {/* Preview Header */}
      <div className="flex items-center justify-between p-3 border-b border-border bg-muted/50">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-sm">Live Preview</h3>
          {isLoading && (
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <div className="spinner"></div>
              <span>Updating...</span>
            </div>
          )}
          {previewError && (
            <span className="text-xs text-destructive">Error</span>
          )}
        </div>
        
        <div className="flex items-center gap-2">
          <button
            onClick={handleRefresh}
            className="p-2 hover:bg-muted rounded-md transition-colors"
            title="Refresh Preview"
          >
            <RefreshCw className="h-4 w-4" />
          </button>
          <button
            onClick={handleOpenInNewTab}
            className="p-2 hover:bg-muted rounded-md transition-colors"
            title="Open in New Tab"
          >
            <ExternalLink className="h-4 w-4" />
          </button>
          <button
            onClick={toggleFullscreen}
            className="p-2 hover:bg-muted rounded-md transition-colors"
            title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
          >
            {isFullscreen ? (
              <Minimize2 className="h-4 w-4" />
            ) : (
              <Maximize2 className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      {/* Preview Content */}
      <div className="flex-1 relative bg-black">
        {previewError ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">⚠️</div>
              <h3 className="text-lg font-semibold mb-2">Preview Error</h3>
              <p className="text-muted-foreground mb-4">{previewError}</p>
              <button
                onClick={handleRefresh}
                className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition-colors"
              >
                Try Again
              </button>
            </div>
          </div>
        ) : (
          <iframe
            ref={iframeRef}
            className="w-full h-full border-0"
            title="Preview"
            // Using srcdoc with sandbox for secure preview rendering
            // allow-same-origin removed to prevent sandbox escape warnings
            sandbox="allow-scripts allow-forms allow-popups"
            onLoad={() => setIsLoading(false)}
            onError={() => {
              setIsLoading(false)
              setPreviewError('Failed to load preview')
            }}
          />
        )}
      </div>

      {/* Preview Footer */}
      <div className="flex items-center justify-between p-2 border-t border-border bg-muted/30 text-xs text-muted-foreground">
        <div className="flex items-center gap-4">
          <span>Responsive</span>
          <span>•</span>
          <span>Auto-refresh</span>
        </div>
        <div className="flex items-center gap-2">
          <span>Ctrl+R to refresh</span>
          <span>•</span>
          <span>F11 for fullscreen</span>
        </div>
      </div>
    </motion.div>
  )
}

export default Preview
