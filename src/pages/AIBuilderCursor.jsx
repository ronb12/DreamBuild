import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Code, 
  Eye, 
  Play, 
  Save, 
  Download, 
  Upload, 
  Settings, 
  Terminal, 
  FileText, 
  Folder,
  Brain,
  Sparkles,
  Plus,
  Trash2,
  Copy,
  Share,
  Search,
  ChevronDown,
  ChevronRight,
  Circle,
  Square,
  X,
  Minimize2,
  Maximize2,
  MoreHorizontal,
  GitBranch,
  GitCommit,
  GitPullRequest,
  Bug,
  Zap,
  Lightbulb,
  MessageSquare,
  Send,
  Bot,
  User,
  History,
  BookOpen,
  Globe,
  Database,
  Server,
  Cpu,
  Layers,
  Package,
  Lock,
  Unlock,
  Star,
  Heart,
  ThumbsUp,
  ThumbsDown,
  RefreshCw,
  RotateCcw,
  RotateCw,
  Move,
  Grip,
  Menu,
  Filter,
  SortAsc,
  SortDesc,
  Grid,
  List,
  Layout,
  Sidebar,
  PanelLeft,
  PanelRight,
  PanelTop,
  PanelBottom,
  Split,
  Columns,
  Rows,
  SquareStack,
  Box,
  Archive,
  FolderOpen,
  File,
  FileImage,
  FileVideo,
  FileAudio,
  FileCode,
  FileSpreadsheet,
  FileCheck,
  FileX,
  FilePlus,
  FileMinus,
  FileEdit,
  FileSearch,
  FileClock,
  FileHeart
} from 'lucide-react'

const AIBuilderCursor = () => {
  const [activeTab, setActiveTab] = useState('editor')
  const [code, setCode] = useState(`// Welcome to DreamBuild AI Builder
import React, { useState, useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('Hello DreamBuild!')
  
  useEffect(() => {
    console.log('Component mounted')
  }, [])
  
  const handleClick = () => {
    setCount(prev => prev + 1)
    setMessage(\`Count is now \${count + 1}\`)
  }
  
  return (
    <div className="app">
      <header className="header">
        <h1>{message}</h1>
        <p>Count: {count}</p>
      </header>
      <main className="main">
        <button onClick={handleClick} className="btn">
          Increment Counter
        </button>
        <div className="info">
          <p>This is a React component built with DreamBuild AI Builder.</p>
        </div>
      </main>
    </div>
  )
}

export default App`)
  const [output, setOutput] = useState('')
  const [isRunning, setIsRunning] = useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [bottomPanelHeight, setBottomPanelHeight] = useState(200)
  const [rightPanelWidth, setRightPanelWidth] = useState(300)
  const [showChat, setShowChat] = useState(false)
  const [chatMessages, setChatMessages] = useState([
    { id: 1, type: 'ai', content: 'Hello! I\'m your AI coding assistant. How can I help you today?' }
  ])
  const [newMessage, setNewMessage] = useState('')

  const runCode = async () => {
    setIsRunning(true)
    setOutput('Running code...\n')
    
    // Simulate code execution
    setTimeout(() => {
      setOutput(prev => prev + '✓ Code executed successfully!\n✓ Component rendered\n✓ State updated\n✓ Effects applied\n\nOutput: Hello DreamBuild!\nCount: 0')
      setIsRunning(false)
    }, 1500)
  }

  const saveCode = () => {
    setOutput(prev => prev + '\n✓ Code saved to App.jsx')
  }

  const sendMessage = () => {
    if (newMessage.trim()) {
      const userMessage = { id: Date.now(), type: 'user', content: newMessage }
      const aiResponse = { 
        id: Date.now() + 1, 
        type: 'ai', 
        content: `I understand you want to "${newMessage}". Here's how I can help you with that...` 
      }
      setChatMessages(prev => [...prev, userMessage, aiResponse])
      setNewMessage('')
    }
  }

  const fileStructure = [
    {
      name: 'src',
      type: 'folder',
      expanded: true,
      children: [
        { name: 'App.jsx', type: 'file', active: true },
        { name: 'index.js', type: 'file' },
        { name: 'index.css', type: 'file' },
        { name: 'components', type: 'folder', children: [
          { name: 'Header.jsx', type: 'file' },
          { name: 'Footer.jsx', type: 'file' },
          { name: 'Button.jsx', type: 'file' }
        ]}
      ]
    },
    { name: 'public', type: 'folder', children: [
      { name: 'index.html', type: 'file' },
      { name: 'favicon.ico', type: 'file' }
    ]},
    { name: 'package.json', type: 'file' },
    { name: 'README.md', type: 'file' }
  ]

  const tabs = [
    { id: 'editor', label: 'App.jsx', icon: Code, active: true },
    { id: 'preview', label: 'Preview', icon: Eye },
    { id: 'terminal', label: 'Terminal', icon: Terminal },
    { id: 'problems', label: 'Problems', icon: Bug },
    { id: 'output', label: 'Output', icon: FileText }
  ]

  return (
    <div className="min-h-screen bg-[#1e1e1e] text-[#d4d4d4] flex flex-col">
      {/* Top Menu Bar */}
      <div className="h-8 bg-[#2d2d30] border-b border-[#3e3e42] flex items-center px-4 text-xs">
        <div className="flex items-center space-x-4">
          <span className="font-semibold">DreamBuild AI Builder</span>
          <div className="flex items-center space-x-2">
            <span>File</span>
            <span>Edit</span>
            <span>View</span>
            <span>Go</span>
            <span>Run</span>
            <span>Terminal</span>
            <span>Help</span>
          </div>
        </div>
        <div className="flex-1"></div>
        <div className="flex items-center space-x-2">
          <Circle className="h-3 w-3 text-red-500" />
          <Circle className="h-3 w-3 text-yellow-500" />
          <Circle className="h-3 w-3 text-green-500" />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex min-h-0">
        {/* Left Sidebar */}
        <div className={`${sidebarCollapsed ? 'w-12' : 'w-64'} bg-[#252526] border-r border-[#3e3e42] transition-all duration-200`}>
          {/* Sidebar Header */}
          <div className="h-10 bg-[#2d2d30] border-b border-[#3e3e42] flex items-center px-3">
            {!sidebarCollapsed && (
              <div className="flex items-center space-x-2 flex-1">
                <Search className="h-4 w-4 text-[#8c8c8c]" />
                <input 
                  type="text" 
                  placeholder="Search files..." 
                  className="bg-transparent text-sm flex-1 outline-none"
                />
              </div>
            )}
            <button 
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="p-1 hover:bg-[#3e3e42] rounded"
            >
              <Sidebar className="h-4 w-4" />
            </button>
          </div>

          {/* File Explorer */}
          {!sidebarCollapsed && (
            <div className="p-2">
              <div className="space-y-1">
                {fileStructure.map((item, index) => (
                  <div key={index} className="flex items-center space-x-1 py-1 px-2 hover:bg-[#2a2d2e] rounded cursor-pointer">
                    {item.type === 'folder' ? (
                      <ChevronRight className="h-4 w-4 text-[#8c8c8c]" />
                    ) : (
                      <div className="w-4 h-4"></div>
                    )}
                    {item.type === 'folder' ? (
                      <Folder className="h-4 w-4 text-[#8c8c8c]" />
                    ) : (
                      <FileText className="h-4 w-4 text-[#8c8c8c]" />
                    )}
                    <span className={`text-sm ${item.active ? 'text-white' : 'text-[#cccccc]'}`}>
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Collapsed Sidebar Icons */}
          {sidebarCollapsed && (
            <div className="p-2 space-y-2">
              <button className="p-2 hover:bg-[#2a2d2e] rounded">
                <Folder className="h-4 w-4" />
              </button>
              <button className="p-2 hover:bg-[#2a2d2e] rounded">
                <Search className="h-4 w-4" />
              </button>
              <button className="p-2 hover:bg-[#2a2d2e] rounded">
                <GitBranch className="h-4 w-4" />
              </button>
              <button className="p-2 hover:bg-[#2a2d2e] rounded">
                <Bug className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>

        {/* Main Editor Area */}
        <div className="flex-1 flex flex-col">
          {/* Tab Bar */}
          <div className="h-10 bg-[#2d2d30] border-b border-[#3e3e42] flex items-center">
            <div className="flex items-center">
              {tabs.map((tab) => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-4 py-2 text-sm border-r border-[#3e3e42] hover:bg-[#2a2d2e] ${
                      tab.active ? 'bg-[#1e1e1e] text-white' : 'text-[#cccccc]'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{tab.label}</span>
                    <X className="h-3 w-3 hover:bg-[#3e3e42] rounded" />
                  </button>
                )
              })}
            </div>
            <div className="flex-1"></div>
            <div className="flex items-center space-x-2 px-4">
              <button className="p-1 hover:bg-[#3e3e42] rounded">
                <Split className="h-4 w-4" />
              </button>
              <button className="p-1 hover:bg-[#3e3e42] rounded">
                <MoreHorizontal className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Editor Content */}
          <div className="flex-1 flex min-h-0">
            {/* Main Editor */}
            <div className="flex-1 flex flex-col min-h-0">
              {activeTab === 'editor' && (
                <div className="flex-1 flex flex-col min-h-0">
                  <div className="flex-1 bg-[#1e1e1e] p-4 min-h-0">
                    <textarea
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                      className="w-full h-full bg-transparent text-[#d4d4d4] font-mono text-sm resize-none outline-none leading-relaxed"
                      placeholder="Enter your code here..."
                      style={{ 
                        fontFamily: 'Consolas, Monaco, "Courier New", monospace',
                        minHeight: '400px',
                        height: '100%'
                      }}
                    />
                  </div>
                  <div className="h-8 bg-[#2d2d30] border-t border-[#3e3e42] flex items-center px-4 text-xs text-[#8c8c8c]">
                    <span>Ln 1, Col 1</span>
                    <div className="flex-1"></div>
                    <span>UTF-8</span>
                    <span className="ml-4">JavaScript React</span>
                  </div>
                </div>
              )}

              {activeTab === 'preview' && (
                <div className="flex-1 bg-[#1e1e1e] p-4">
                  <div className="h-full bg-white rounded border overflow-auto">
                    <div className="p-4">
                      <h1 className="text-2xl font-bold mb-4">Hello DreamBuild!</h1>
                      <p className="text-lg mb-4">Count: 0</p>
                      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                        Increment Counter
                      </button>
                      <div className="mt-4 p-4 bg-gray-100 rounded">
                        <p>This is a React component built with DreamBuild AI Builder.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'terminal' && (
                <div className="flex-1 bg-[#1e1e1e] p-4">
                  <div className="h-full bg-black text-green-400 rounded font-mono text-sm overflow-auto p-4">
                    <div className="mb-2">$ npm start</div>
                    <div className="mb-2">Starting development server...</div>
                    <div className="mb-2">Local: http://localhost:3000</div>
                    <div className="mb-2">On Your Network: http://192.168.1.100:3000</div>
                    <div className="text-yellow-400 mb-2">✓ Compiled successfully!</div>
                    <div className="mb-2">webpack compiled with 0 errors</div>
                    <div className="text-blue-400">ℹ webpack 5.88.2 compiled in 1.2s</div>
                  </div>
                </div>
              )}

              {activeTab === 'problems' && (
                <div className="flex-1 bg-[#1e1e1e] p-4">
                  <div className="h-full">
                    <div className="text-center text-[#8c8c8c] mt-8">
                      <Bug className="h-12 w-12 mx-auto mb-4" />
                      <p>No problems detected</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'output' && (
                <div className="flex-1 bg-[#1e1e1e] p-4">
                  <div className="h-full bg-black text-green-400 rounded font-mono text-sm overflow-auto p-4">
                    <pre className="whitespace-pre-wrap">
                      {output || 'No output yet. Run your code to see results here.'}
                    </pre>
                  </div>
                </div>
              )}
            </div>

            {/* Right Panel - AI Chat */}
            {showChat && (
              <div className="w-80 bg-[#252526] border-l border-[#3e3e42] flex flex-col">
                <div className="h-10 bg-[#2d2d30] border-b border-[#3e3e42] flex items-center px-4">
                  <Bot className="h-4 w-4 mr-2" />
                  <span className="text-sm font-medium">AI Assistant</span>
                  <div className="flex-1"></div>
                  <button 
                    onClick={() => setShowChat(false)}
                    className="p-1 hover:bg-[#3e3e42] rounded"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
                <div className="flex-1 overflow-auto p-4 space-y-4">
                  {chatMessages.map((message) => (
                    <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-xs p-3 rounded-lg ${
                        message.type === 'user' 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-[#2a2d2e] text-[#d4d4d4]'
                      }`}>
                        <p className="text-sm">{message.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-4 border-t border-[#3e3e42]">
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                      placeholder="Ask AI anything..."
                      className="flex-1 bg-[#1e1e1e] border border-[#3e3e42] rounded px-3 py-2 text-sm outline-none"
                    />
                    <button
                      onClick={sendMessage}
                      className="px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                      <Send className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Panel */}
          <div className="h-48 bg-[#252526] border-t border-[#3e3e42] flex flex-col">
            <div className="h-8 bg-[#2d2d30] border-b border-[#3e3e42] flex items-center px-4">
              <Terminal className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Terminal</span>
              <div className="flex-1"></div>
              <button className="p-1 hover:bg-[#3e3e42] rounded">
                <Minimize2 className="h-4 w-4" />
              </button>
            </div>
            <div className="flex-1 bg-black text-green-400 font-mono text-sm overflow-auto p-4">
              <div className="mb-2">$ npm start</div>
              <div className="mb-2">Starting development server...</div>
              <div className="mb-2">Local: http://localhost:3000</div>
              <div className="mb-2">On Your Network: http://192.168.1.100:3000</div>
              <div className="text-yellow-400 mb-2">✓ Compiled successfully!</div>
              <div className="mb-2">webpack compiled with 0 errors</div>
              <div className="text-blue-400">ℹ webpack 5.88.2 compiled in 1.2s</div>
            </div>
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="h-6 bg-[#007acc] text-white text-xs flex items-center px-4">
        <div className="flex items-center space-x-4">
          <span>Ready</span>
          <span>Ln 1, Col 1</span>
          <span>Spaces: 2</span>
        </div>
        <div className="flex-1"></div>
        <div className="flex items-center space-x-4">
          <span>JavaScript React</span>
          <span>UTF-8</span>
          <button 
            onClick={() => setShowChat(!showChat)}
            className="flex items-center space-x-1 hover:bg-blue-700 px-2 py-1 rounded"
          >
            <Bot className="h-3 w-3" />
            <span>AI</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default AIBuilderCursor
