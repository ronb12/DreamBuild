// src/components/IntegratedTerminal.jsx

import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, Play, Square, Trash2, Download, Upload, Settings, Maximize2, Minimize2 } from 'lucide-react';

const IntegratedTerminal = ({ className = '', onCommand, isVisible = true }) => {
  const [history, setHistory] = useState([]);
  const [currentCommand, setCurrentCommand] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState('');
  const [currentDirectory, setCurrentDirectory] = useState('/Users/ronellbradley/Desktop/DreamBuild');
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  
  const terminalRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    // Initialize terminal with welcome message
    setHistory([
      {
        type: 'output',
        content: 'DreamBuild Integrated Terminal v1.0.0',
        timestamp: new Date()
      },
      {
        type: 'output',
        content: 'Type "help" for available commands',
        timestamp: new Date()
      },
      {
        type: 'prompt',
        content: `${currentDirectory} $ `,
        timestamp: new Date()
      }
    ]);
  }, []);

  useEffect(() => {
    if (isVisible && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isVisible]);

  const executeCommand = async (command) => {
    if (!command.trim()) return;

    // Add command to history
    const newHistory = [
      ...history,
      {
        type: 'command',
        content: command,
        timestamp: new Date()
      }
    ];

    setHistory(newHistory);
    setCommandHistory(prev => [...prev, command]);
    setHistoryIndex(-1);
    setIsRunning(true);

    try {
      const result = await processCommand(command);
      
      setHistory(prev => [
        ...prev,
        {
          type: 'output',
          content: result.output,
          timestamp: new Date()
        },
        {
          type: 'prompt',
          content: `${currentDirectory} $ `,
          timestamp: new Date()
        }
      ]);
    } catch (error) {
      setHistory(prev => [
        ...prev,
        {
          type: 'error',
          content: `Error: ${error.message}`,
          timestamp: new Date()
        },
        {
          type: 'prompt',
          content: `${currentDirectory} $ `,
          timestamp: new Date()
        }
      ]);
    } finally {
      setIsRunning(false);
      setCurrentCommand('');
    }
  };

  const processCommand = async (command) => {
    const cmd = command.trim().toLowerCase();
    
    // Built-in commands
    switch (cmd) {
      case 'help':
        return {
          output: `Available commands:
  help          - Show this help message
  clear         - Clear terminal screen
  pwd           - Print working directory
  ls            - List directory contents
  cd <dir>      - Change directory
  mkdir <dir>   - Create directory
  touch <file>  - Create file
  cat <file>    - Display file contents
  npm <cmd>     - Run npm commands
  git <cmd>     - Run git commands
  node <file>   - Run Node.js file
  python <file> - Run Python file
  exit          - Exit terminal`
        };

      case 'clear':
        setHistory([]);
        return { output: '' };

      case 'pwd':
        return { output: currentDirectory };

      case 'ls':
        return {
          output: `src/
  components/
  pages/
  services/
  styles/
package.json
README.md
node_modules/
dist/`
        };

      case 'npm':
        return {
          output: `npm commands:
  npm install   - Install dependencies
  npm run dev   - Start development server
  npm run build - Build for production
  npm run deploy - Deploy to Firebase`
        };

      case 'git':
        return {
          output: `git commands:
  git status    - Show repository status
  git add .     - Stage all changes
  git commit    - Commit changes
  git push      - Push to remote
  git pull      - Pull from remote`
        };

      default:
        // Handle dynamic commands
        if (cmd.startsWith('cd ')) {
          const newDir = cmd.substring(3);
          setCurrentDirectory(newDir);
          return { output: `Changed directory to ${newDir}` };
        }
        
        if (cmd.startsWith('mkdir ')) {
          const dirName = cmd.substring(7);
          return { output: `Created directory: ${dirName}` };
        }
        
        if (cmd.startsWith('touch ')) {
          const fileName = cmd.substring(6);
          return { output: `Created file: ${fileName}` };
        }
        
        if (cmd.startsWith('cat ')) {
          const fileName = cmd.substring(4);
          return { output: `Contents of ${fileName}:\n[File content would be displayed here]` };
        }
        
        if (cmd.startsWith('npm ')) {
          const npmCmd = cmd.substring(4);
          return { output: `Running: npm ${npmCmd}\n[Command output would be displayed here]` };
        }
        
        if (cmd.startsWith('git ')) {
          const gitCmd = cmd.substring(4);
          return { output: `Running: git ${gitCmd}\n[Command output would be displayed here]` };
        }
        
        if (cmd.startsWith('node ')) {
          const fileName = cmd.substring(5);
          return { output: `Running: node ${fileName}\n[Node.js output would be displayed here]` };
        }
        
        if (cmd.startsWith('python ')) {
          const fileName = cmd.substring(7);
          return { output: `Running: python ${fileName}\n[Python output would be displayed here]` };
        }
        
        if (cmd === 'exit') {
          return { output: 'Terminal closed' };
        }
        
        return { output: `Command not found: ${command}` };
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      executeCommand(currentCommand);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setCurrentCommand(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setCurrentCommand(commandHistory[commandHistory.length - 1 - newIndex]);
      } else {
        setHistoryIndex(-1);
        setCurrentCommand('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      // Auto-complete command
      const suggestions = ['help', 'clear', 'pwd', 'ls', 'cd', 'mkdir', 'touch', 'cat', 'npm', 'git', 'node', 'python', 'exit'];
      const matches = suggestions.filter(cmd => cmd.startsWith(currentCommand.toLowerCase()));
      if (matches.length === 1) {
        setCurrentCommand(matches[0] + ' ');
      }
    }
  };

  const clearTerminal = () => {
    setHistory([]);
    setCurrentCommand('');
  };

  const downloadOutput = () => {
    const output = history.map(h => h.content).join('\n');
    const blob = new Blob([output], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'terminal-output.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  const getOutputStyle = (type) => {
    switch (type) {
      case 'command':
        return 'text-blue-400 font-mono';
      case 'error':
        return 'text-red-400 font-mono';
      case 'prompt':
        return 'text-green-400 font-mono';
      default:
        return 'text-gray-300 font-mono';
    }
  };

  if (!isVisible) return null;

  return (
    <div className={`flex flex-col h-full bg-gray-900 text-white ${className}`}>
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
        <div className="flex items-center gap-2">
          <TerminalIcon className="h-4 w-4 text-green-400" />
          <span className="text-sm font-medium">Integrated Terminal</span>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-xs text-gray-400">Ready</span>
          </div>
        </div>
        
        <div className="flex items-center gap-1">
          <button
            onClick={clearTerminal}
            className="p-1 hover:bg-gray-700 rounded transition-colors"
            title="Clear Terminal"
          >
            <Trash2 className="h-4 w-4" />
          </button>
          <button
            onClick={downloadOutput}
            className="p-1 hover:bg-gray-700 rounded transition-colors"
            title="Download Output"
          >
            <Download className="h-4 w-4" />
          </button>
          <button
            onClick={() => setIsMaximized(!isMaximized)}
            className="p-1 hover:bg-gray-700 rounded transition-colors"
            title={isMaximized ? "Minimize" : "Maximize"}
          >
            {isMaximized ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Terminal Output */}
      <div 
        ref={terminalRef}
        className={`flex-1 overflow-y-auto p-4 font-mono text-sm ${isMaximized ? 'h-screen' : 'h-64'}`}
        style={{ fontFamily: 'Monaco, Menlo, "Ubuntu Mono", monospace' }}
      >
        {history.map((item, index) => (
          <div key={index} className="mb-1">
            <span className={getOutputStyle(item.type)}>
              {item.content}
            </span>
          </div>
        ))}
        
        {/* Current Command Input */}
        <div className="flex items-center">
          <span className="text-green-400 font-mono">
            {currentDirectory} $ 
          </span>
          <input
            ref={inputRef}
            type="text"
            value={currentCommand}
            onChange={(e) => setCurrentCommand(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent text-white outline-none ml-2 font-mono"
            placeholder="Enter command..."
            disabled={isRunning}
          />
          {isRunning && (
            <div className="ml-2">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-green-400"></div>
            </div>
          )}
        </div>
      </div>

      {/* Terminal Footer */}
      <div className="px-4 py-2 bg-gray-800 border-t border-gray-700 text-xs text-gray-400">
        <div className="flex items-center justify-between">
          <span>DreamBuild Terminal v1.0.0</span>
          <div className="flex items-center gap-4">
            <span>Commands: {commandHistory.length}</span>
            <span>Directory: {currentDirectory}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegratedTerminal;
