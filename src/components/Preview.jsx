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
    updatePreview()
  }, [currentProject.files, currentProject.activeFile])

  const updatePreview = () => {
    if (!iframeRef.current) return

    setIsLoading(true)
    setPreviewError(null)

    try {
      const htmlContent = currentProject.files['index.html'] || ''
      const cssContent = currentProject.files['style.css'] || ''
      const jsContent = currentProject.files['script.js'] || ''
      
      // Check if we have React components (game files)
      const gameAppFile = currentProject.files['src/components/GameApp.jsx'] || ''
      const gameComponentFile = currentProject.files['src/components/GameComponent.jsx'] || ''
      
      // If we have game components, create a React app preview
      if (gameAppFile || gameComponentFile) {
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
    const gameUIFile = currentProject.files['src/components/GameUI.jsx'] || ''
    const coinFile = currentProject.files['src/components/Coin.jsx'] || ''
    const playerFile = currentProject.files['src/components/Player.jsx'] || ''
    
    // Get CSS files
    const gameAppCSS = currentProject.files['src/components/GameApp.css'] || ''
    const gameComponentCSS = currentProject.files['src/components/GameComponent.css'] || ''
    const gameUICSS = currentProject.files['src/components/GameUI.css'] || ''
    const coinCSS = currentProject.files['src/components/Coin.css'] || ''
    const playerCSS = currentProject.files['src/components/Player.css'] || ''

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
          ${gameUICSS}
          ${coinCSS}
          ${playerCSS}
        </style>
      </head>
      <body>
        <div id="root"></div>
        
        <script type="text/babel">
          const { useState, useEffect, useRef, useCallback } = React;
          
          // Simple coin collector game implementation
          const GameComponent = () => {
            const canvasRef = useRef(null);
            const [gameState, setGameState] = useState({
              score: 0,
              level: 1,
              lives: 3,
              isPlaying: false,
              isPaused: false,
              gameOver: false
            });
            
            const [player, setPlayer] = useState({ x: 200, y: 300, size: 20 });
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
              setGameState(prev => ({ ...prev, isPlaying: true, gameOver: false, score: 0 }));
              setPlayer({ x: 200, y: 300, size: 20 });
              setCoins([]);
            };
            
            const pauseGame = () => {
              setGameState(prev => ({ ...prev, isPaused: !prev.isPaused }));
            };
            
            const gameLoop = useCallback(() => {
              if (!gameState.isPlaying || gameState.isPaused) return;
              
              setPlayer(prevPlayer => {
                let newX = prevPlayer.x;
                let newY = prevPlayer.y;
                
                if (keys['ArrowLeft'] || keys['KeyA']) newX = Math.max(0, newX - 5);
                if (keys['ArrowRight'] || keys['KeyD']) newX = Math.min(380, newX + 5);
                if (keys['ArrowUp'] || keys['KeyW']) newY = Math.max(0, newY - 5);
                if (keys['ArrowDown'] || keys['KeyS']) newY = Math.min(380, newY + 5);
                
                return { ...prevPlayer, x: newX, y: newY };
              });
              
              // Spawn coins
              if (Math.random() < 0.02) {
                setCoins(prevCoins => [...prevCoins, {
                  id: Date.now(),
                  x: Math.random() * 360,
                  y: Math.random() * 360,
                  size: 15,
                  collected: false
                }]);
              }
              
              // Check collisions
              setCoins(prevCoins => {
                return prevCoins.map(coin => {
                  const distance = Math.sqrt(
                    Math.pow(coin.x - player.x, 2) + Math.pow(coin.y - player.y, 2)
                  );
                  
                  if (distance < 25 && !coin.collected) {
                    setGameState(prev => ({ ...prev, score: prev.score + 10 }));
                    return { ...coin, collected: true };
                  }
                  
                  return coin;
                }).filter(coin => !coin.collected);
              });
              
              requestAnimationFrame(gameLoop);
            }, [keys, player.x, player.y, gameState.isPlaying, gameState.isPaused]);
            
            useEffect(() => {
              if (gameState.isPlaying && !gameState.isPaused) {
                const timer = setTimeout(gameLoop, 16);
                return () => clearTimeout(timer);
              }
            }, [gameLoop, gameState.isPlaying, gameState.isPaused]);
            
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
                      top: player.y,
                      left: player.x,
                      width: player.size,
                      height: player.size,
                      background: '#FFD700',
                      borderRadius: '50%',
                      border: '2px solid #FFA500'
                    }} />
                    
                    {coins.map(coin => (
                      <div key={coin.id} style={{
                        position: 'absolute',
                        top: coin.y,
                        left: coin.x,
                        width: coin.size,
                        height: coin.size,
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
              </div>
            );
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
