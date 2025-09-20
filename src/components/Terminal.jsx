import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Terminal as XTerm } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import { WebLinksAddon } from 'xterm-addon-web-links';
import { SearchAddon } from 'xterm-addon-search';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon, Maximize2, Minimize2, RotateCcw, Settings as SettingsIcon, FolderOpen, Code, Zap } from 'lucide-react';
import toast from 'react-hot-toast';
import 'xterm/css/xterm.css';

const Terminal = ({ isVisible = true, onToggle, className = '' }) => {
  const terminalRef = useRef(null);
  const xtermRef = useRef(null);
  const fitAddonRef = useRef(null);
  const webLinksAddonRef = useRef(null);
  const searchAddonRef = useRef(null);
  const wsRef = useRef(null);
  const reconnectTimeoutRef = useRef(null);
  
  const [isConnected, setIsConnected] = useState(false);
  const [sessionId, setSessionId] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [terminalConfig, setTerminalConfig] = useState({
    fontSize: 14,
    fontFamily: 'Monaco, Menlo, "Ubuntu Mono", monospace',
    theme: 'dark',
    cursorBlink: true,
    scrollback: 1000
  });
  const [reconnectAttempts, setReconnectAttempts] = useState(0);
  const [maxReconnectAttempts] = useState(5);
  const [isResizing, setIsResizing] = useState(false);

  // Initialize terminal
  const initializeTerminal = useCallback(() => {
    if (!terminalRef.current || xtermRef.current) return;

    try {
      // Create terminal instance
      const xterm = new XTerm({
        fontSize: terminalConfig.fontSize,
        fontFamily: terminalConfig.fontFamily,
        theme: terminalConfig.theme === 'dark' ? {
          background: '#1e1e1e',
          foreground: '#d4d4d4',
          cursor: '#ffffff',
          selection: '#264f78',
          black: '#000000',
          red: '#cd3131',
          green: '#0dbc79',
          yellow: '#e5e510',
          blue: '#2472c8',
          magenta: '#bc3fbc',
          cyan: '#11a8cd',
          white: '#e5e5e5',
          brightBlack: '#666666',
          brightRed: '#f14c4c',
          brightGreen: '#23d18b',
          brightYellow: '#f5f543',
          brightBlue: '#3b8eea',
          brightMagenta: '#d670d6',
          brightCyan: '#29b8db',
          brightWhite: '#ffffff'
        } : {
          background: '#ffffff',
          foreground: '#000000',
          cursor: '#000000',
          selection: '#add6ff',
          black: '#000000',
          red: '#cd3131',
          green: '#00bc00',
          yellow: '#949800',
          blue: '#0451a5',
          magenta: '#bc05bc',
          cyan: '#0598bc',
          white: '#555555',
          brightBlack: '#666666',
          brightRed: '#cd3131',
          brightGreen: '#14ce14',
          brightYellow: '#b5bd00',
          brightBlue: '#0451a5',
          brightMagenta: '#bc05bc',
          brightCyan: '#0598bc',
          brightWhite: '#a5a5a5'
        },
        cursorBlink: terminalConfig.cursorBlink,
        scrollback: terminalConfig.scrollback,
        allowTransparency: false,
        cols: 80,
        rows: 24
      });

      // Add addons
      const fitAddon = new FitAddon();
      const webLinksAddon = new WebLinksAddon();
      const searchAddon = new SearchAddon();

      xterm.loadAddon(fitAddon);
      xterm.loadAddon(webLinksAddon);
      xterm.loadAddon(searchAddon);

      // Store references
      xtermRef.current = xterm;
      fitAddonRef.current = fitAddon;
      webLinksAddonRef.current = webLinksAddon;
      searchAddonRef.current = searchAddon;

      // Open terminal
      xterm.open(terminalRef.current);

      // Fit terminal to container
      setTimeout(() => {
        fitAddon.fit();
      }, 100);

      // Handle terminal input
      xterm.onData((data) => {
        if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
          wsRef.current.send(JSON.stringify({
            type: 'terminal_input',
            command: data,
            sessionId
          }));
        }
      });

      // Handle terminal resize
      xterm.onResize((size) => {
        if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
          wsRef.current.send(JSON.stringify({
            type: 'terminal_resize',
            cols: size.cols,
            rows: size.rows,
            sessionId
          }));
        }
      });

      console.log('✅ Terminal initialized successfully');
    } catch (error) {
      console.error('❌ Failed to initialize terminal:', error);
      toast.error('Failed to initialize terminal');
    }
  }, [terminalConfig, sessionId]);

  // WebSocket connection
  const connectWebSocket = useCallback(() => {
    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      return;
    }

    try {
      const wsUrl = process.env.NODE_ENV === 'production' 
        ? 'wss://your-domain.com' 
        : 'ws://localhost:3001';
      
      const ws = new WebSocket(wsUrl);
      wsRef.current = ws;

      ws.onopen = () => {
        console.log('🔌 WebSocket connected to terminal server');
        setIsConnected(true);
        setReconnectAttempts(0);
        toast.success('Terminal connected');
      };

      ws.onmessage = (event) => {
        try {
          const message = JSON.parse(event.data);
          
          switch (message.type) {
            case 'session_created':
              setSessionId(message.sessionId);
              console.log('✅ Terminal session created:', message.sessionId);
              break;
              
            case 'terminal_output':
              if (xtermRef.current && message.sessionId === sessionId) {
                xtermRef.current.write(message.data);
              }
              break;
              
            case 'terminal_exit':
              console.log('❌ Terminal session exited:', message.code);
              toast.error('Terminal session ended');
              break;
              
            case 'terminal_error':
              console.error('❌ Terminal error:', message.error);
              toast.error(`Terminal error: ${message.error}`);
              break;
              
            case 'error':
              console.error('❌ WebSocket error:', message.error);
              toast.error(`Connection error: ${message.error}`);
              break;
              
            default:
              console.log('Unknown message type:', message.type);
          }
        } catch (error) {
          console.error('❌ Error parsing WebSocket message:', error);
        }
      };

      ws.onclose = (event) => {
        console.log('🔌 WebSocket connection closed:', event.code, event.reason);
        setIsConnected(false);
        
        if (event.code !== 1000 && reconnectAttempts < maxReconnectAttempts) {
          // Attempt to reconnect
          const delay = Math.min(1000 * Math.pow(2, reconnectAttempts), 10000);
          console.log(`🔄 Attempting to reconnect in ${delay}ms (attempt ${reconnectAttempts + 1}/${maxReconnectAttempts})`);
          
          reconnectTimeoutRef.current = setTimeout(() => {
            setReconnectAttempts(prev => prev + 1);
            connectWebSocket();
          }, delay);
        } else if (reconnectAttempts >= maxReconnectAttempts) {
          toast.error('Failed to reconnect to terminal server');
        }
      };

      ws.onerror = (error) => {
        console.error('❌ WebSocket error:', error);
        toast.error('Terminal connection error');
      };

    } catch (error) {
      console.error('❌ Failed to connect WebSocket:', error);
      toast.error('Failed to connect to terminal server');
    }
  }, [sessionId, reconnectAttempts, maxReconnectAttempts]);

  // Handle resize
  const handleResize = useCallback(() => {
    if (fitAddonRef.current && xtermRef.current) {
      try {
        fitAddonRef.current.fit();
      } catch (error) {
        console.error('❌ Error resizing terminal:', error);
      }
    }
  }, []);

  // Handle fullscreen toggle
  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
    setTimeout(handleResize, 100);
  };

  // Handle settings
  const updateTerminalConfig = (newConfig) => {
    setTerminalConfig(prev => ({ ...prev, ...newConfig }));
    toast.success('Terminal settings updated');
  };

  // Handle terminal clear
  const clearTerminal = () => {
    if (xtermRef.current) {
      xtermRef.current.clear();
      toast.success('Terminal cleared');
    }
  };

  // Handle terminal restart
  const restartTerminal = () => {
    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      wsRef.current.close();
    }
    setTimeout(connectWebSocket, 1000);
    toast.success('Terminal restarted');
  };

  // Initialize on mount
  useEffect(() => {
    if (isVisible) {
      initializeTerminal();
      connectWebSocket();
    }
  }, [isVisible, initializeTerminal, connectWebSocket]);

  // Handle window resize
  useEffect(() => {
    const handleWindowResize = () => {
      if (!isResizing) {
        setIsResizing(true);
        setTimeout(() => {
          handleResize();
          setIsResizing(false);
        }, 100);
      }
    };

    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, [handleResize, isResizing]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (reconnectTimeoutRef.current) {
        clearTimeout(reconnectTimeoutRef.current);
      }
      if (wsRef.current) {
        wsRef.current.close();
      }
      if (xtermRef.current) {
        xtermRef.current.dispose();
      }
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`terminal-container ${isFullscreen ? 'fullscreen' : ''} ${className}`}>
      <div className="terminal-header">
        <div className="terminal-title">
          <TerminalIcon className="h-5 w-5 text-green-500" />
          <span>Terminal</span>
          {isConnected ? (
            <div className="status-indicator connected">
              <div className="status-dot"></div>
              <span>Connected</span>
            </div>
          ) : (
            <div className="status-indicator disconnected">
              <div className="status-dot"></div>
              <span>Disconnected</span>
            </div>
          )}
        </div>
        
        <div className="terminal-actions">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={clearTerminal}
            className="action-btn"
            title="Clear Terminal"
          >
            <RotateCcw className="h-4 w-4" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleFullscreen}
            className="action-btn"
            title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
          >
            {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowSettings(!showSettings)}
            className="action-btn"
            title="Terminal Settings"
          >
            <SettingsIcon className="h-4 w-4" />
          </motion.button>
          
          {onToggle && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onToggle}
              className="action-btn"
              title="Close Terminal"
            >
              ×
            </motion.button>
          )}
        </div>
      </div>

      {showSettings && (
        <div className="terminal-settings">
          <h4>Terminal Settings</h4>
          <div className="settings-grid">
            <div className="setting-group">
              <label>Font Size</label>
              <input
                type="range"
                min="10"
                max="24"
                value={terminalConfig.fontSize}
                onChange={(e) => updateTerminalConfig({ fontSize: parseInt(e.target.value) })}
              />
              <span>{terminalConfig.fontSize}px</span>
            </div>
            
            <div className="setting-group">
              <label>Theme</label>
              <select
                value={terminalConfig.theme}
                onChange={(e) => updateTerminalConfig({ theme: e.target.value })}
              >
                <option value="dark">Dark</option>
                <option value="light">Light</option>
              </select>
            </div>
            
            <div className="setting-group">
              <label>
                <input
                  type="checkbox"
                  checked={terminalConfig.cursorBlink}
                  onChange={(e) => updateTerminalConfig({ cursorBlink: e.target.checked })}
                />
                Blinking Cursor
              </label>
            </div>
          </div>
        </div>
      )}

      <div className="terminal-content" ref={terminalRef}></div>
      
      <style jsx>{`
        .terminal-container {
          display: flex;
          flex-direction: column;
          height: 100%;
          background: #1e1e1e;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .terminal-container.fullscreen {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1000;
          border-radius: 0;
        }

        .terminal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 12px;
          background: #2d2d2d;
          border-bottom: 1px solid #404040;
          color: #d4d4d4;
          font-size: 14px;
          font-weight: 500;
        }

        .terminal-title {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .status-indicator {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 12px;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #ef4444;
        }

        .status-indicator.connected .status-dot {
          background: #22c55e;
        }

        .terminal-actions {
          display: flex;
          gap: 4px;
        }

        .action-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border: none;
          background: transparent;
          color: #d4d4d4;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }

        .action-btn:hover {
          background: #404040;
        }

        .terminal-settings {
          padding: 16px;
          background: #2d2d2d;
          border-bottom: 1px solid #404040;
        }

        .terminal-settings h4 {
          margin: 0 0 12px 0;
          color: #d4d4d4;
          font-size: 14px;
          font-weight: 600;
        }

        .settings-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 12px;
        }

        .setting-group {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .setting-group label {
          color: #d4d4d4;
          font-size: 12px;
          font-weight: 500;
        }

        .setting-group input[type="range"] {
          width: 100%;
        }

        .setting-group select {
          padding: 4px 8px;
          border: 1px solid #404040;
          border-radius: 4px;
          background: #1e1e1e;
          color: #d4d4d4;
          font-size: 12px;
        }

        .setting-group input[type="checkbox"] {
          margin-right: 8px;
        }

        .terminal-content {
          flex: 1;
          overflow: hidden;
        }

        .terminal-content :global(.xterm) {
          height: 100%;
        }

        .terminal-content :global(.xterm-screen) {
          height: 100%;
        }

        .terminal-content :global(.xterm-viewport) {
          height: 100%;
        }
      `}</style>
    </div>
  );
};

export default Terminal;

