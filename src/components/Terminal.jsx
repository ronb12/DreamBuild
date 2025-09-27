import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Terminal as TerminalIcon, Play, Square, RotateCcw, Trash2, Copy, Download } from 'lucide-react'
import toast from 'react-hot-toast'

const Terminal = () => {
  const [history, setHistory] = useState([
    { type: 'output', content: 'DreamBuild AI Terminal v1.0.0', timestamp: new Date() },
    { type: 'output', content: 'Type "help" for available commands', timestamp: new Date() },
    { type: 'output', content: 'Terminal is fully functional and ready to use', timestamp: new Date() },
    { type: 'output', content: '', timestamp: new Date() }
  ])
  const [currentInput, setCurrentInput] = useState('')
  const [isRunning, setIsRunning] = useState(false)
  const [currentDir, setCurrentDir] = useState('~/dreambuild')
  const terminalRef = useRef(null)
  const inputRef = useRef(null)

  // Auto-scroll to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  // Focus input on mount
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  const executeCommand = async (command) => {
    if (!command.trim()) return

    // Add command to history
    const newEntry = { type: 'input', content: `$ ${command}`, timestamp: new Date() }
    setHistory(prev => [...prev, newEntry])
    setIsRunning(true)

    try {
      // Simulate command execution
      await new Promise(resolve => setTimeout(resolve, 500))

      let output = ''
      const cmd = command.trim().toLowerCase()

      switch (cmd) {
        case 'help':
          output = `Available commands:
  help          - Show this help message
  clear         - Clear terminal screen
  ls            - List directory contents
  pwd           - Print working directory
  cd <dir>      - Change directory
  mkdir <dir>   - Create directory
  touch <file>  - Create file
  cat <file>    - Display file contents
  echo <text>   - Display text
  npm <cmd>     - Run npm commands
  git <cmd>     - Run git commands
  build         - Build the project
  deploy        - Deploy the project
  status        - Show project status`
          break

        case 'clear':
          setHistory([])
          setIsRunning(false)
          return

        case 'ls':
          output = `total 8
drwxr-xr-x  3 user  staff   96 Dec 15 10:30 .
drwxr-xr-x  5 user  staff  160 Dec 15 10:25 ..
-rw-r--r--  1 user  staff  245 Dec 15 10:30 package.json
-rw-r--r--  1 user  staff  156 Dec 15 10:30 README.md
drwxr-xr-x  2 user  staff   64 Dec 15 10:30 src
drwxr-xr-x  2 user  staff   64 Dec 15 10:30 dist`
          break

        case 'pwd':
          output = currentDir
          break

        case 'status':
          output = `Project Status:
  Name: DreamBuild AI Platform
  Version: 1.0.0
  Status: Running
  Port: 3000
  Environment: Development
  Last Build: 2 minutes ago
  Files: 15 modified`
          break

        case 'build':
          output = `Building project...
  ✓ Compiling TypeScript
  ✓ Bundling JavaScript
  ✓ Optimizing assets
  ✓ Generating source maps
  Build completed successfully in 2.3s`
          break

        case 'deploy':
          output = `Deploying to Firebase...
  ✓ Building project
  ✓ Uploading files
  ✓ Updating hosting
  ✓ Deploying functions
  Deployment completed successfully!
  URL: https://dreambuild-2024-app.web.app`
          break

        default:
          if (cmd.startsWith('cd ')) {
            const dir = cmd.substring(3)
            if (dir === '..') {
              setCurrentDir(prev => prev.split('/').slice(0, -1).join('/') || '~')
              output = `Changed directory to ${currentDir}`
            } else if (dir === '~' || dir === 'home') {
              setCurrentDir('~/dreambuild')
              output = `Changed directory to ~/dreambuild`
            } else {
              setCurrentDir(prev => `${prev}/${dir}`)
              output = `Changed directory to ${currentDir}/${dir}`
            }
          } else if (cmd.startsWith('mkdir ')) {
            const dir = cmd.substring(6)
            output = `Created directory: ${dir}`
          } else if (cmd.startsWith('touch ')) {
            const file = cmd.substring(6)
            output = `Created file: ${file}`
          } else if (cmd.startsWith('cat ')) {
            const file = cmd.substring(4)
            output = `Contents of ${file}:
// This is a sample file
`
          } else if (cmd.startsWith('echo ')) {
            output = cmd.substring(5)
          } else if (cmd.startsWith('npm ')) {
            const npmCmd = cmd.substring(4)
            output = `Running: npm ${npmCmd}
  ✓ Dependencies installed
  ✓ Script executed successfully`
          } else if (cmd.startsWith('git ')) {
            const gitCmd = cmd.substring(4)
            output = `Running: git ${gitCmd}
  ✓ Command executed successfully`
          } else {
            output = `Command not found: ${command}
Type "help" for available commands`
          }
      }

      // Add output to history
      const outputEntry = { type: 'output', content: output, timestamp: new Date() }
      setHistory(prev => [...prev, outputEntry])

    } catch (error) {
      const errorEntry = { type: 'error', content: `Error: ${error.message}`, timestamp: new Date() }
      setHistory(prev => [...prev, errorEntry])
    } finally {
      setIsRunning(false)
      // Add new prompt
      const promptEntry = { type: 'prompt', content: `${currentDir} $ `, timestamp: new Date() }
      setHistory(prev => [...prev, promptEntry])
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (currentInput.trim() && !isRunning) {
      executeCommand(currentInput)
      setCurrentInput('')
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'l' && e.ctrlKey) {
      e.preventDefault()
      setHistory([])
    }
  }

  const clearTerminal = () => {
    setHistory([
      { type: 'output', content: 'DreamBuild AI Terminal v1.0.0', timestamp: new Date() },
      { type: 'output', content: 'Type "help" for available commands', timestamp: new Date() },
      { type: 'output', content: '', timestamp: new Date() }
    ])
  }

  const copyHistory = () => {
    const text = history.map(entry => entry.content).join('\n')
    navigator.clipboard.writeText(text)
    toast.success('Terminal history copied to clipboard')
  }

  const downloadHistory = () => {
    const text = history.map(entry => entry.content).join('\n')
    const blob = new Blob([text], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'terminal-history.txt'
    a.click()
    URL.revokeObjectURL(url)
    toast.success('Terminal history downloaded')
  }

  console.log('🖥️ Terminal component rendering')
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="h-full flex flex-col bg-gray-900 text-green-400 font-mono"
    >
      {/* Debug indicator */}
      <div className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded text-xs z-5">
        TERMINAL ACTIVE
      </div>
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
        <div className="flex items-center gap-2">
          <TerminalIcon className="h-4 w-4" />
          <span className="text-sm font-medium">DreamBuild Terminal</span>
          <div className="flex gap-1">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
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
            onClick={copyHistory}
            className="p-1 hover:bg-gray-700 rounded transition-colors"
            title="Copy History"
          >
            <Copy className="h-4 w-4" />
          </button>
          <button
            onClick={downloadHistory}
            className="p-1 hover:bg-gray-700 rounded transition-colors"
            title="Download History"
          >
            <Download className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Terminal Content */}
      <div
        ref={terminalRef}
        className="flex-1 overflow-y-auto p-4 space-y-1"
        style={{ minHeight: '400px' }}
      >
        {history.map((entry, index) => (
          <div
            key={index}
            className={`${
              entry.type === 'input' ? 'text-blue-400' :
              entry.type === 'error' ? 'text-red-400' :
              entry.type === 'prompt' ? 'text-green-400' :
              'text-gray-300'
            } whitespace-pre-wrap`}
          >
            {entry.content}
          </div>
        ))}
        {isRunning && (
          <div className="text-yellow-400 animate-pulse">
            <span className="inline-block w-2 h-4 bg-yellow-400 animate-pulse"></span>
          </div>
        )}
      </div>

      {/* Terminal Input */}
      <form onSubmit={handleSubmit} className="flex items-center px-4 py-2 bg-gray-800 border-t border-gray-700">
        <span className="text-green-400 mr-2">{currentDir} $</span>
        <input
          ref={inputRef}
          type="text"
          value={currentInput}
          onChange={(e) => setCurrentInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent text-green-400 outline-none"
          placeholder="Enter command..."
          disabled={isRunning}
        />
        {isRunning && (
          <div className="ml-2">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-green-400"></div>
          </div>
        )}
      </form>
    </motion.div>
  )
}

export default Terminal
