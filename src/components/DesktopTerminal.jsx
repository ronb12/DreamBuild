// src/components/DesktopTerminal.jsx
import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, ChevronRight, X, Maximize2, Minimize2, Settings, Zap, Monitor, Cpu, HardDrive, Wifi } from 'lucide-react';
import desktopIntegrationService from '../services/desktopIntegrationService';

const DesktopTerminal = ({ onCommand, isVisible, className = '' }) => {
  const [history, setHistory] = useState([]);
  const [command, setCommand] = useState('');
  const [output, setOutput] = useState([]);
  const [isMaximized, setIsMaximized] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [performanceMetrics, setPerformanceMetrics] = useState(null);
  const [systemInfo, setSystemInfo] = useState(null);
  const terminalRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output, history]);

  useEffect(() => {
    // Initialize desktop integration service
    desktopIntegrationService.initialize().then(() => {
      const status = desktopIntegrationService.getStatus();
      setSystemInfo(status.systemCapabilities);
      
      // Start performance monitoring
      const interval = desktopIntegrationService.performanceMonitor?.startMonitoring((metrics) => {
        setPerformanceMetrics(metrics);
      });
      
      return () => {
        if (interval) {
          desktopIntegrationService.performanceMonitor?.stopMonitoring(interval);
        }
      };
    });
  }, []);

  const executeCommand = async (cmd) => {
    const newOutput = [`> ${cmd}`];
    setHistory(prev => [...prev, cmd]);
    setCommand('');

    try {
      // Use desktop integration service for enhanced command execution
      const result = await desktopIntegrationService.terminalAccess?.executeCommand(cmd);
      
      if (result && result.success) {
        newOutput.push(result.output);
        
        // Add execution time if available
        if (result.executionTime) {
          newOutput.push(`\n⏱️  Execution time: ${result.executionTime.toFixed(2)}ms`);
        }
        
        // Add command type indicator
        if (result.type) {
          const typeIcons = {
            'system': '🖥️',
            'git': '📝',
            'npm': '📦',
            'ai': '🤖',
            'help': '❓'
          };
          newOutput.push(`\n${typeIcons[result.type] || '⚡'} Command type: ${result.type}`);
        }
      } else {
        newOutput.push(`❌ Error: ${result?.error || 'Command execution failed'}`);
      }
    } catch (error) {
      newOutput.push(`❌ Error: ${error.message}`);
    }

    setOutput(prev => [...prev, ...newOutput]);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (command.trim()) {
        executeCommand(command);
      }
    } else if (e.key === 'ArrowUp') {
      // Command history navigation
      const history = desktopIntegrationService.terminalAccess?.getCommandHistory() || [];
      if (history.length > 0) {
        const lastCommand = history[history.length - 1];
        setCommand(lastCommand.command);
      }
    } else if (e.key === 'Tab') {
      // Auto-completion
      e.preventDefault();
      const completions = getCommandCompletions(command);
      if (completions.length === 1) {
        setCommand(completions[0]);
      } else if (completions.length > 1) {
        setOutput(prev => [...prev, `\n💡 Available completions: ${completions.join(', ')}`]);
      }
    }
  };

  const getCommandCompletions = (cmd) => {
    const allCommands = [
      'pwd', 'ls', 'cd', 'mkdir', 'touch', 'cat', 'cp', 'mv', 'rm',
      'git', 'git status', 'git log', 'git add', 'git commit', 'git push',
      'npm', 'npm run dev', 'npm run build', 'npm install', 'npm start',
      'node', 'python', 'python3', 'pip',
      'ps', 'top', 'kill', 'killall',
      'ping', 'curl', 'wget', 'netstat',
      'ai generate', 'ai explain', 'ai debug',
      'dreambuild deploy', 'dreambuild test', 'dreambuild build',
      'help', 'clear', 'exit', 'history'
    ];
    
    return allCommands.filter(command => 
      command.startsWith(cmd.toLowerCase()) && command !== cmd.toLowerCase()
    );
  };

  const clearTerminal = () => {
    setOutput([]);
  };

  const toggleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  const getPerformanceColor = (value, max) => {
    const percentage = (value / max) * 100;
    if (percentage > 80) return 'text-red-500';
    if (percentage > 60) return 'text-yellow-500';
    return 'text-green-500';
  };

  if (!isVisible) return null;

  return (
    <div className={`h-full bg-gray-900 text-green-400 font-mono text-sm flex flex-col ${className}`}>
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
        <div className="flex items-center gap-2">
          <TerminalIcon className="h-4 w-4 text-green-400" />
          <span className="text-sm font-medium">Desktop Terminal</span>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-xs text-gray-400">Online</span>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          {/* Performance Indicators */}
          {performanceMetrics && (
            <div className="flex items-center gap-3 text-xs">
              <div className="flex items-center gap-1">
                <Cpu className="h-3 w-3" />
                <span className={getPerformanceColor(performanceMetrics.cpuUsage, 100)}>
                  {performanceMetrics.cpuUsage}%
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Monitor className="h-3 w-3" />
                <span className={getPerformanceColor(performanceMetrics.frameRate, 60)}>
                  {performanceMetrics.frameRate}fps
                </span>
              </div>
              <div className="flex items-center gap-1">
                <HardDrive className="h-3 w-3" />
                <span className={getPerformanceColor(performanceMetrics.memory.used, performanceMetrics.memory.limit)}>
                  {Math.round(performanceMetrics.memory.used / 1024 / 1024)}MB
                </span>
              </div>
            </div>
          )}
          
          <button
            onClick={() => setShowSettings(!showSettings)}
            className="p-1 hover:bg-gray-700 rounded"
            title="Settings"
          >
            <Settings className="h-4 w-4" />
          </button>
          
          <button
            onClick={toggleMaximize}
            className="p-1 hover:bg-gray-700 rounded"
            title={isMaximized ? "Minimize" : "Maximize"}
          >
            {isMaximized ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
          </button>
          
          <button
            onClick={() => onCommand?.('close')}
            className="p-1 hover:bg-gray-700 rounded"
            title="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Settings Panel */}
      {showSettings && (
        <div className="px-4 py-2 bg-gray-800 border-b border-gray-700">
          <div className="grid grid-cols-2 gap-4 text-xs">
            <div>
              <h4 className="font-medium text-white mb-2">System Info</h4>
              {systemInfo && (
                <div className="space-y-1 text-gray-300">
                  <div>Platform: {systemInfo.platform}</div>
                  <div>CPU Cores: {systemInfo.hardwareConcurrency}</div>
                  <div>Memory: {systemInfo.screenWidth}x{systemInfo.screenHeight}</div>
                  <div>Timezone: {systemInfo.timezone}</div>
                </div>
              )}
            </div>
            <div>
              <h4 className="font-medium text-white mb-2">Capabilities</h4>
              <div className="space-y-1 text-gray-300">
                <div>File System: {systemInfo?.hasFileSystemAccess ? '✅' : '❌'}</div>
                <div>Web Workers: {systemInfo?.hasWebWorkers ? '✅' : '❌'}</div>
                <div>WebGL: {systemInfo?.hasWebGL ? '✅' : '❌'}</div>
                <div>Notifications: {systemInfo?.hasNotifications ? '✅' : '❌'}</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Terminal Output */}
      <div 
        ref={terminalRef}
        className="flex-1 overflow-y-auto p-4 space-y-1"
        style={{ maxHeight: isMaximized ? '80vh' : '400px' }}
      >
        {output.length === 0 && (
          <div className="text-gray-500">
            <div>🖥️ Desktop Terminal v2.0.0</div>
            <div>Type 'help' for available commands</div>
            <div>Type 'clear' to clear the terminal</div>
            <div>Use ↑/↓ arrows for command history</div>
            <div>Use Tab for auto-completion</div>
            <div className="mt-4">
              <div className="text-green-400">Available command categories:</div>
              <div className="ml-4 mt-2 space-y-1">
                <div>🖥️ System: pwd, ls, ps, top, df, free, uname, whoami</div>
                <div>📝 Git: git status, git log, git add, git commit, git push</div>
                <div>📦 Node.js: npm run dev, npm run build, npm install, node</div>
                <div>🐍 Python: python, python3, pip</div>
                <div>🤖 AI: ai generate, ai explain, ai debug</div>
                <div>🚀 DreamBuild: dreambuild deploy, dreambuild test</div>
              </div>
            </div>
          </div>
        )}
        
        {output.map((line, index) => (
          <div key={index} className="whitespace-pre-wrap">
            {line}
          </div>
        ))}
      </div>

      {/* Terminal Input */}
      <div className="flex items-center px-4 py-2 bg-gray-800 border-t border-gray-700">
        <ChevronRight className="h-4 w-4 text-green-400 mr-2" />
        <input
          ref={inputRef}
          type="text"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          onKeyDown={handleKeyPress}
          className="flex-1 bg-transparent text-green-400 outline-none"
          placeholder="Enter command..."
          autoFocus
        />
        <div className="flex items-center gap-2 ml-2">
          <button
            onClick={clearTerminal}
            className="px-2 py-1 text-xs bg-gray-700 hover:bg-gray-600 rounded"
          >
            Clear
          </button>
          <button
            onClick={() => executeCommand('help')}
            className="px-2 py-1 text-xs bg-gray-700 hover:bg-gray-600 rounded"
          >
            Help
          </button>
        </div>
      </div>
    </div>
  );
};

export default DesktopTerminal;
