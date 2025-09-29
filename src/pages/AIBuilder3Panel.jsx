import React, { useState, useEffect } from 'react'
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
  FolderPlus,
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

const AIBuilder3Panel = () => {
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
  const [showChat, setShowChat] = useState(true)
  const [chatMessages, setChatMessages] = useState([
    { id: 1, type: 'ai', content: 'Hello! I\'m your AI coding assistant. How can I help you today?' }
  ])
  const [newMessage, setNewMessage] = useState('')

  // Error handling
  useEffect(() => {
    const handleError = (error) => {
      console.error('AI Builder Error:', error);
    };
    
    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100 flex flex-col">
      {/* Top Menu Bar */}
      <div className="h-10 bg-gradient-to-r from-slate-800 to-slate-700 border-b border-slate-600 flex items-center px-6 text-sm mt-16 shadow-lg">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <span className="font-bold text-blue-300">DreamBuild AI Builder</span>
          </div>
          <div className="flex items-center space-x-4 text-slate-300">
            <button className="hover:text-white hover:bg-slate-600 px-2 py-1 rounded transition-colors">File</button>
            <button className="hover:text-white hover:bg-slate-600 px-2 py-1 rounded transition-colors">Edit</button>
            <button className="hover:text-white hover:bg-slate-600 px-2 py-1 rounded transition-colors">View</button>
            <button className="hover:text-white hover:bg-slate-600 px-2 py-1 rounded transition-colors">Go</button>
            <button className="hover:text-white hover:bg-slate-600 px-2 py-1 rounded transition-colors">Run</button>
            <button className="hover:text-white hover:bg-slate-600 px-2 py-1 rounded transition-colors">Terminal</button>
            <button className="hover:text-white hover:bg-slate-600 px-2 py-1 rounded transition-colors">Help</button>
          </div>
        </div>
        <div className="flex-1"></div>
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2 bg-slate-700 px-3 py-1 rounded-full">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-xs text-green-300">AI Ready</span>
          </div>
          <div className="flex items-center space-x-2">
            <Circle className="h-3 w-3 text-red-400 hover:text-red-300 cursor-pointer transition-colors" />
            <Circle className="h-3 w-3 text-yellow-400 hover:text-yellow-300 cursor-pointer transition-colors" />
            <Circle className="h-3 w-3 text-green-400 hover:text-green-300 cursor-pointer transition-colors" />
          </div>
        </div>
      </div>

      {/* 3-Panel Layout */}
      <div className="flex-1 flex min-h-0 overflow-hidden">
        {/* Panel 1: File Explorer */}
        <div className={`${sidebarCollapsed ? 'w-12' : 'w-64'} bg-gradient-to-b from-slate-800 to-slate-700 border-r border-slate-600 transition-all duration-300 flex-shrink-0 shadow-lg`}>
          {/* Sidebar Header */}
          <div className="h-12 bg-gradient-to-r from-slate-700 to-slate-600 border-b border-slate-500 flex items-center px-4">
            {!sidebarCollapsed && (
              <div className="flex items-center space-x-2 flex-1">
                <div className="flex items-center space-x-2">
                  <Folder className="h-4 w-4 text-blue-400" />
                  <span className="text-sm font-bold text-slate-200">EXPLORER</span>
                </div>
                <div className="flex items-center space-x-2 bg-slate-600 rounded-lg px-2 py-1 flex-1">
                  <Search className="h-3 w-3 text-slate-400" />
                  <input 
                    type="text" 
                    placeholder="Search files..." 
                    className="bg-transparent text-xs flex-1 outline-none text-slate-300 placeholder-slate-400"
                  />
                </div>
              </div>
            )}
            <button 
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              data-action="toggle-sidebar"
              className="p-2 hover:bg-slate-500 rounded-lg transition-colors"
            >
              <Sidebar className="h-4 w-4 text-slate-300" />
            </button>
          </div>

          {/* File Explorer */}
          {!sidebarCollapsed && (
            <div className="p-3">
              <div className="space-y-1">
                {fileStructure.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2 py-2 px-3 hover:bg-slate-600 rounded-lg cursor-pointer transition-colors group">
                    {item.type === 'folder' ? (
                      <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-slate-300" />
                    ) : (
                      <div className="w-4 h-4"></div>
                    )}
                    {item.type === 'folder' ? (
                      <Folder className="h-4 w-4 text-blue-400 group-hover:text-blue-300" />
                    ) : (
                      <FileText className="h-4 w-4 text-slate-400 group-hover:text-slate-300" />
                    )}
                    <span className={`text-sm font-medium ${item.active ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* Quick Actions */}
              <div className="mt-4 pt-3 border-t border-slate-600">
                <div className="space-y-1">
                  <button className="w-full flex items-center space-x-2 p-2 hover:bg-slate-600 rounded-lg transition-colors text-left">
                    <Plus className="h-4 w-4 text-green-400" />
                    <span className="text-sm text-slate-300">New File</span>
                  </button>
                  <button className="w-full flex items-center space-x-2 p-2 hover:bg-slate-600 rounded-lg transition-colors text-left">
                    <FolderPlus className="h-4 w-4 text-blue-400" />
                    <span className="text-sm text-slate-300">New Folder</span>
                  </button>
                </div>
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

        {/* Panel 2: Code Editor */}
        <div className="flex-1 flex flex-col min-h-0 border-r border-slate-600 bg-gradient-to-b from-slate-900 to-slate-800">
          {/* Tab Bar */}
          <div className="h-12 bg-gradient-to-r from-slate-700 to-slate-600 border-b border-slate-500 flex items-center shadow-lg">
            <div className="flex items-center">
              {tabs.map((tab) => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    data-tab={tab.id}
                    className={`flex items-center space-x-2 px-4 py-3 text-sm border-r border-slate-500 hover:bg-slate-500 transition-colors ${
                      tab.active ? 'bg-slate-800 text-white shadow-inner' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="font-medium">{tab.label}</span>
                    <X className="h-3 w-3 hover:bg-slate-400 rounded p-0.5" />
                  </button>
                )
              })}
            </div>
            <div className="flex-1"></div>
            <div className="flex items-center space-x-1 px-4">
              <button className="p-2 hover:bg-slate-500 rounded-lg transition-colors">
                <Split className="h-4 w-4 text-slate-300" />
              </button>
              <button className="p-2 hover:bg-slate-500 rounded-lg transition-colors">
                <MoreHorizontal className="h-4 w-4 text-slate-300" />
              </button>
            </div>
          </div>

          {/* Editor Content */}
          <div className="flex-1 flex flex-col min-h-0">
            {activeTab === 'editor' && (
              <div className="flex-1 flex flex-col min-h-0">
                <div className="flex-1 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 min-h-0">
                  <textarea
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="w-full h-full bg-transparent text-slate-100 font-mono text-sm resize-none outline-none leading-relaxed"
                    placeholder="// Start coding here..."
                    style={{ 
                      fontFamily: 'Consolas, Monaco, "Courier New", monospace',
                      minHeight: '400px',
                      height: '100%',
                      lineHeight: '1.6'
                    }}
                  />
                </div>
                <div className="h-10 bg-gradient-to-r from-slate-700 to-slate-600 border-t border-slate-500 flex items-center px-4 text-xs text-slate-300 shadow-lg">
                  <div className="flex items-center space-x-4">
                    <span className="font-medium">Ln 1, Col 1</span>
                    <span className="text-slate-400">•</span>
                    <span>Spaces: 2</span>
                    <span className="text-slate-400">•</span>
                    <span>UTF-8</span>
                  </div>
                  <div className="flex-1"></div>
                  <div className="flex items-center space-x-4">
                    <span className="text-green-400 font-medium">JavaScript React</span>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-xs">AI Ready</span>
                    </div>
                  </div>
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
        </div>

        {/* Panel 3: AI Chat & Terminal */}
        <div className="w-80 bg-[#252526] flex flex-col min-h-0">
          {/* AI Chat Section */}
          <div className="flex-1 flex flex-col border-b border-slate-600">
            <div className="h-12 bg-gradient-to-r from-slate-700 to-slate-600 border-b border-slate-500 flex items-center px-4 shadow-lg">
              <div className="flex items-center space-x-2">
                <Bot className="h-5 w-5 text-blue-400" />
                <span className="text-sm font-bold text-slate-200">AI Assistant</span>
                <div className="flex items-center space-x-1 ml-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-green-300">Online</span>
                </div>
              </div>
              <div className="flex-1"></div>
              <button 
                onClick={() => setShowChat(!showChat)}
                className="p-2 hover:bg-slate-500 rounded-lg transition-colors"
              >
                <X className="h-4 w-4 text-slate-300" />
              </button>
            </div>
            {showChat && (
              <>
                <div className="flex-1 overflow-auto p-4 space-y-4 bg-gradient-to-b from-slate-800 to-slate-700">
                  {chatMessages.map((message) => (
                    <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-xs p-4 rounded-xl shadow-lg ${
                        message.type === 'user' 
                          ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white' 
                          : 'bg-gradient-to-r from-slate-600 to-slate-500 text-slate-100'
                      }`}>
                        <p className="text-sm leading-relaxed">{message.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-4 border-t border-slate-500 bg-gradient-to-r from-slate-700 to-slate-600">
                  <div className="flex space-x-3">
                    <input
                      type="text"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                      placeholder="Ask AI anything..."
                      className="flex-1 bg-slate-600 border border-slate-500 rounded-lg px-4 py-3 text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all"
                    />
                    <button
                      onClick={sendMessage}
                      className="px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg hover:from-blue-700 hover:to-blue-600 text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-200 flex items-center space-x-2"
                    >
                      <Send className="h-4 w-4" />
                      <span>Send</span>
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Terminal Section */}
          <div className="h-48 flex flex-col flex-shrink-0">
            <div className="h-10 bg-gradient-to-r from-slate-700 to-slate-600 border-b border-slate-500 flex items-center px-4 flex-shrink-0 shadow-lg">
              <Terminal className="h-4 w-4 mr-2 text-green-400" />
              <span className="text-sm font-bold text-slate-200">Terminal</span>
              <div className="flex-1"></div>
              <button className="p-2 hover:bg-slate-500 rounded-lg transition-colors">
                <Minimize2 className="h-4 w-4 text-slate-300" />
              </button>
            </div>
            <div className="flex-1 bg-gradient-to-br from-slate-900 via-black to-slate-900 text-green-400 font-mono text-sm overflow-auto p-4 min-h-0 shadow-inner">
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
      <div className="h-8 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-xs flex items-center px-6 flex-shrink-0 shadow-lg">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="font-medium">Ready</span>
          </div>
          <span className="text-blue-100">Ln 1, Col 1</span>
          <span className="text-blue-100">Spaces: 2</span>
        </div>
        <div className="flex-1"></div>
        <div className="flex items-center space-x-6">
          <span className="font-medium">JavaScript React</span>
          <span className="text-blue-100">UTF-8</span>
          <button 
            onClick={() => setShowChat(!showChat)}
            className="flex items-center space-x-2 hover:bg-blue-700 px-3 py-1 rounded-lg transition-colors"
          >
            <Bot className="h-4 w-4" />
            <span className="font-medium">AI Assistant</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default AIBuilder3Panel
