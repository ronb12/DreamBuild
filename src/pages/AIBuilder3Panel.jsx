import React, { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  // Core Icons
  Code, Eye, Play, Save, Download, Upload, Settings, Terminal, FileText, Folder,
  // AI & Intelligence
  Brain, Sparkles, Zap, Lightbulb, Bot, User, MessageSquare, Send, History,
  // Navigation & UI
  Plus, Trash2, Copy, Share, Search, ChevronDown, ChevronRight, X, Menu,
  // Window Controls
  Minimize2, Maximize2, Circle, Square, MoreHorizontal,
  // Git & Version Control
  GitBranch, GitCommit, GitPullRequest, Bug,
  // Advanced Features
  Mic, MicOff, Palette, Layers, Package, Lock, Unlock, Star, Heart,
  // Performance & Monitoring
  BarChart3, Activity, Cpu, Database, Server, Globe, BookOpen,
  // Collaboration
  Users, UserPlus, Share2, Bell, BellOff,
  // Voice & Audio
  Volume2, VolumeX, Headphones,
  // Visual Builder
  Layout, Sidebar, PanelLeft, PanelRight, PanelTop, PanelBottom,
  Split, Columns, Rows, SquareStack, Box, Archive,
  // File Management
  FolderOpen, File, FileImage, FileVideo, FileAudio, FileCode, FileSpreadsheet,
  FileCheck, FileX, FilePlus, FileMinus, FileEdit, FileSearch, FileClock, FileHeart,
  // Advanced UI
  ThumbsUp, ThumbsDown, RefreshCw, RotateCcw, RotateCw, Move, Grip,
  Filter, SortAsc, SortDesc, Grid, List, Monitor, Smartphone, Tablet,
  // AI Models
  CpuIcon, DatabaseIcon, Cloud, Wifi, WifiOff,
  // Real-time Features
  Radio, RadioIcon, Clock, Timer, CheckCircle, AlertCircle,
  // Modern UI
  Sparkle, Wand2, Rocket, Target, Compass, MapPin, Navigation,
  // Advanced Coding
  Brackets, Parentheses, Braces, Hash, AtSign, Percent, DollarSign,
  // Performance
  Gauge, TrendingUp, TrendingDown, Activity as ActivityIcon,
  // Collaboration
  Video, VideoOff, Phone, PhoneOff, Camera, CameraOff
} from 'lucide-react'

const AIBuilder3Panel = () => {
  // Core State Management
  const [activeTab, setActiveTab] = useState('editor')
  const [code, setCode] = useState(`// Welcome to DreamBuild AI Builder - The Most Advanced IDE
import React, { useState, useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('Hello DreamBuild!')
  
  // AI-powered features
  const [aiSuggestions, setAiSuggestions] = useState([])
  const [isGenerating, setIsGenerating] = useState(false)
  
  return (
    <div className="app">
      <h1>{message}</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  )
}

export default App`)

  // Advanced State Management
  const [selectedAIModel, setSelectedAIModel] = useState('claude-3.5-sonnet')
  const [isVoiceEnabled, setIsVoiceEnabled] = useState(false)
  const [isCollaborating, setIsCollaborating] = useState(false)
  const [collaborators, setCollaborators] = useState([])
  const [isLivePreview, setIsLivePreview] = useState(true)
  const [performanceMetrics, setPerformanceMetrics] = useState({})
  const [gitStatus, setGitStatus] = useState('clean')
  const [aiChatHistory, setAiChatHistory] = useState([])
  const [currentFile, setCurrentFile] = useState('App.jsx')
  const [fileTree, setFileTree] = useState({
    'src': {
      'App.jsx': { type: 'file', content: code },
      'components': {
        'Header.jsx': { type: 'file', content: '// Header component' },
        'Footer.jsx': { type: 'file', content: '// Footer component' }
      }
    },
    'public': {
      'index.html': { type: 'file', content: '<!DOCTYPE html>' }
    },
    'package.json': { type: 'file', content: '{"name": "my-app"}' }
  })
  const [terminalOutput, setTerminalOutput] = useState([
    { type: 'info', message: '🚀 DreamBuild AI Builder initialized' },
    { type: 'success', message: '✅ All systems ready' },
    { type: 'info', message: '🤖 AI models loaded: Claude, GPT-4, Gemini' }
  ])
  const [isGenerating, setIsGenerating] = useState(false)
  const [aiSuggestions, setAiSuggestions] = useState([])
  const [previewUrl, setPreviewUrl] = useState('')
  const [isRecording, setIsRecording] = useState(false)
  const [voiceTranscript, setVoiceTranscript] = useState('')
  
  // Refs for advanced features
  const codeEditorRef = useRef(null)
  const terminalRef = useRef(null)
  const voiceRecognitionRef = useRef(null)
  const previewFrameRef = useRef(null)
  
  // AI Models Configuration
  const aiModels = [
    { id: 'claude-3.5-sonnet', name: 'Claude 3.5 Sonnet', icon: Brain, color: 'text-purple-500' },
    { id: 'gpt-4', name: 'GPT-4', icon: Sparkles, color: 'text-green-500' },
    { id: 'gemini-pro', name: 'Gemini Pro', icon: Zap, color: 'text-blue-500' },
    { id: 'llama-2', name: 'Llama 2', icon: Cpu, color: 'text-orange-500' }
  ]
  
  // Advanced Features
  const [showAIPanel, setShowAIPanel] = useState(true)
  const [showPerformance, setShowPerformance] = useState(false)
  const [showCollaboration, setShowCollaboration] = useState(false)
  const [showVisualBuilder, setShowVisualBuilder] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [theme, setTheme] = useState('dark')
  const [fontSize, setFontSize] = useState(14)
  const [showGitPanel, setShowGitPanel] = useState(false)
  const [showFileExplorer, setShowFileExplorer] = useState(true)
  const [showTerminal, setShowTerminal] = useState(true)
  const [showPreview, setShowPreview] = useState(true)
  
  // Voice Recognition Setup
  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
      voiceRecognitionRef.current = new SpeechRecognition()
      voiceRecognitionRef.current.continuous = true
      voiceRecognitionRef.current.interimResults = true
      voiceRecognitionRef.current.lang = 'en-US'
      
      voiceRecognitionRef.current.onresult = (event) => {
        let finalTranscript = ''
        for (let i = event.resultIndex; i < event.results.length; i++) {
          if (event.results[i].isFinal) {
            finalTranscript += event.results[i][0].transcript
          }
        }
        if (finalTranscript) {
          setVoiceTranscript(finalTranscript)
          handleVoiceCommand(finalTranscript)
        }
      }
    }
  }, [])
  
  // Voice Command Handler
  const handleVoiceCommand = useCallback((command) => {
    const lowerCommand = command.toLowerCase()
    
    if (lowerCommand.includes('create component')) {
      const componentName = command.match(/create component (\w+)/i)?.[1] || 'NewComponent'
      const newCode = `import React from 'react'

const ${componentName} = () => {
  return (
    <div>
      <h1>${componentName}</h1>
    </div>
  )
}

export default ${componentName}`
      setCode(newCode)
    } else if (lowerCommand.includes('add state')) {
      const stateName = command.match(/add state (\w+)/i)?.[1] || 'newState'
      const newCode = code + `\n  const [${stateName}, set${stateName.charAt(0).toUpperCase() + stateName.slice(1)}] = useState('')`
      setCode(newCode)
    } else if (lowerCommand.includes('run code')) {
      handleRunCode()
    } else if (lowerCommand.includes('save file')) {
      handleSaveCode()
    }
  }, [code])
  
  // Advanced Handlers
  const handleRunCode = useCallback(() => {
    setIsGenerating(true)
    setTerminalOutput(prev => [...prev, { type: 'info', message: '🚀 Running code...' }])
    
    // Simulate code execution
    setTimeout(() => {
      setTerminalOutput(prev => [...prev, { type: 'success', message: '✅ Code executed successfully' }])
      setIsGenerating(false)
    }, 2000)
  }, [])
  
  const handleSaveCode = useCallback(() => {
    setTerminalOutput(prev => [...prev, { type: 'info', message: '💾 Saving file...' }])
    setTimeout(() => {
      setTerminalOutput(prev => [...prev, { type: 'success', message: '✅ File saved successfully' }])
    }, 1000)
  }, [])
  
  const handleAIGenerate = useCallback(async (prompt) => {
    setIsGenerating(true)
    setAiChatHistory(prev => [...prev, { type: 'user', message: prompt }])
    
    // Simulate AI response
    setTimeout(() => {
      const aiResponse = `Here's the code for: ${prompt}

\`\`\`javascript
// AI-generated code
const result = ${prompt.toLowerCase().replace(/\s+/g, '_')}()
console.log(result)
\`\`\`

This code implements the functionality you requested with proper error handling and modern JavaScript practices.`
      
      setAiChatHistory(prev => [...prev, { type: 'ai', message: aiResponse }])
      setIsGenerating(false)
    }, 2000)
  }, [])
  
  const handleVoiceToggle = useCallback(() => {
    if (isVoiceEnabled) {
      voiceRecognitionRef.current?.stop()
      setIsVoiceEnabled(false)
      setIsRecording(false)
    } else {
      voiceRecognitionRef.current?.start()
      setIsVoiceEnabled(true)
      setIsRecording(true)
    }
  }, [isVoiceEnabled])
  
  const handleCollaborationToggle = useCallback(() => {
    setIsCollaborating(!isCollaborating)
    if (!isCollaborating) {
      setCollaborators([
        { id: 1, name: 'John Doe', avatar: '👨‍💻', status: 'online' },
        { id: 2, name: 'Jane Smith', avatar: '👩‍💻', status: 'online' }
      ])
    } else {
      setCollaborators([])
    }
  }, [isCollaborating])
  
  // Performance Monitoring
  useEffect(() => {
    const interval = setInterval(() => {
      setPerformanceMetrics({
        cpu: Math.random() * 100,
        memory: Math.random() * 100,
        network: Math.random() * 100,
        fps: 60 - Math.random() * 10
      })
    }, 1000)
    
    return () => clearInterval(interval)
  }, [])
  
  // Git Status Monitoring
  useEffect(() => {
    const interval = setInterval(() => {
      const statuses = ['clean', 'modified', 'staged', 'conflict']
      setGitStatus(statuses[Math.floor(Math.random() * statuses.length)])
    }, 5000)
    
    return () => clearInterval(interval)
  }, [])
  
  // Render the advanced AI Builder
  return (
    <div className="h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-white overflow-hidden">
      {/* Top Menu Bar */}
      <div className="h-14 bg-gray-800/95 backdrop-blur-md border-b border-gray-700/50 flex items-center justify-between px-6 shadow-lg">
        <div className="flex items-center space-x-6">
          {/* Window Controls */}
          <div className="flex items-center space-x-2 mr-4">
            <div className="w-3 h-3 bg-red-500 rounded-full shadow-sm"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full shadow-sm"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full shadow-sm"></div>
          </div>
          
          {/* Brand */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              DreamBuild
            </span>
          </div>
          
          {/* Menu Items */}
          <div className="flex items-center space-x-1 ml-8">
            {['File', 'Edit', 'View', 'Go', 'Run', 'Terminal', 'Help'].map((item) => (
              <button 
                key={item}
                className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-md transition-all duration-200"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        
        {/* Right Controls */}
        <div className="flex items-center space-x-3">
          {/* AI Model Selector */}
          <div className="flex items-center space-x-2 bg-gray-700/50 rounded-lg px-3 py-2">
            <Brain className="w-4 h-4 text-purple-400" />
            <select 
              value={selectedAIModel} 
              onChange={(e) => setSelectedAIModel(e.target.value)}
              className="bg-transparent text-sm text-gray-200 focus:outline-none cursor-pointer"
            >
              {aiModels.map(model => (
                <option key={model.id} value={model.id} className="bg-gray-800">{model.name}</option>
              ))}
            </select>
          </div>
          
          {/* Control Buttons */}
          <div className="flex items-center space-x-2">
            <button
              onClick={handleVoiceToggle}
              className={`p-2.5 rounded-lg transition-all duration-200 ${
                isVoiceEnabled 
                  ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30 shadow-lg shadow-green-500/20' 
                  : 'text-gray-400 hover:text-gray-300 hover:bg-gray-700/50'
              }`}
              title="Voice Control"
            >
              {isVoiceEnabled ? <Mic className="w-4 h-4" /> : <MicOff className="w-4 h-4" />}
            </button>
            
            <button
              onClick={handleCollaborationToggle}
              className={`p-2.5 rounded-lg transition-all duration-200 ${
                isCollaborating 
                  ? 'bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 shadow-lg shadow-blue-500/20' 
                  : 'text-gray-400 hover:text-gray-300 hover:bg-gray-700/50'
              }`}
              title="Collaboration"
            >
              <Users className="w-4 h-4" />
            </button>
            
            <button
              onClick={() => setShowPerformance(!showPerformance)}
              className={`p-2.5 rounded-lg transition-all duration-200 ${
                showPerformance 
                  ? 'bg-orange-500/20 text-orange-400 hover:bg-orange-500/30 shadow-lg shadow-orange-500/20' 
                  : 'text-gray-400 hover:text-gray-300 hover:bg-gray-700/50'
              }`}
              title="Performance Monitor"
            >
              <Activity className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area - 3 Panel Layout */}
      <div className="flex h-[calc(100vh-3.5rem)]">
        {/* Left Panel - File Manager */}
        <div className="w-80 bg-gray-800/40 backdrop-blur-sm border-r border-gray-700/50 flex flex-col shadow-xl">
          {/* File Manager Header */}
          <div className="p-5 border-b border-gray-700/50 bg-gray-800/60">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold text-gray-200 flex items-center space-x-2">
                <FolderOpen className="w-4 h-4 text-blue-400" />
                <span>File Manager</span>
              </h3>
              <div className="flex items-center space-x-2">
                <button className="p-1.5 text-gray-400 hover:text-gray-200 hover:bg-gray-700/50 rounded">
                  <Plus className="w-4 h-4" />
                </button>
                <button className="p-1.5 text-gray-400 hover:text-gray-200 hover:bg-gray-700/50 rounded">
                  <Folder className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search files..." 
                className="w-full pl-10 pr-4 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-sm text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50"
              />
            </div>
          </div>
          
          {/* File Tree */}
          <div className="flex-1 p-4 space-y-1 overflow-y-auto">
            <div className="space-y-1">
              <div className="flex items-center space-x-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700/50 p-2 rounded-lg cursor-pointer transition-all duration-200">
                <ChevronRight className="w-4 h-4 text-gray-400" />
                <FolderOpen className="w-4 h-4 text-blue-400" />
                <span className="font-medium">src</span>
              </div>
              <div className="ml-6 space-y-1">
                <div className="flex items-center space-x-2 text-sm text-white hover:bg-blue-500/20 p-2 rounded-lg cursor-pointer transition-all duration-200 bg-blue-500/10 border border-blue-500/20">
                  <FileCode className="w-4 h-4 text-blue-400" />
                  <span className="font-medium">App.jsx</span>
                  <div className="ml-auto w-2 h-2 bg-blue-400 rounded-full"></div>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white hover:bg-gray-700/50 p-2 rounded-lg cursor-pointer transition-all duration-200">
                  <ChevronRight className="w-4 h-4" />
                  <Folder className="w-4 h-4 text-yellow-400" />
                  <span>components</span>
                </div>
                <div className="ml-6 space-y-1">
                  <div className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white hover:bg-gray-700/50 p-2 rounded-lg cursor-pointer transition-all duration-200">
                    <FileCode className="w-4 h-4 text-blue-400" />
                    <span>Header.jsx</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white hover:bg-gray-700/50 p-2 rounded-lg cursor-pointer transition-all duration-200">
                    <FileCode className="w-4 h-4 text-blue-400" />
                    <span>Footer.jsx</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white hover:bg-gray-700/50 p-2 rounded-lg cursor-pointer transition-all duration-200">
                <File className="w-4 h-4 text-green-400" />
                <span>package.json</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white hover:bg-gray-700/50 p-2 rounded-lg cursor-pointer transition-all duration-200">
                <FileText className="w-4 h-4 text-orange-400" />
                <span>README.md</span>
              </div>
            </div>
          </div>
          
          {/* Git Status */}
          <div className="p-4 border-t border-gray-700/50 bg-gray-800/40">
            <h3 className="text-sm font-bold text-gray-200 flex items-center space-x-2 mb-3">
              <GitBranch className="w-4 h-4 text-green-400" />
              <span>Source Control</span>
            </h3>
            <div className="flex items-center space-x-3 text-sm">
              <div className={`w-3 h-3 rounded-full shadow-sm ${
                gitStatus === 'clean' ? 'bg-green-500' : 
                gitStatus === 'modified' ? 'bg-yellow-500' : 
                gitStatus === 'staged' ? 'bg-blue-500' : 'bg-red-500'
              }`}></div>
              <span className="text-gray-300 capitalize font-medium">{gitStatus}</span>
              <span className="text-gray-500 text-xs">• 2 changes</span>
            </div>
          </div>
        </div>

        {/* Center Panel - Code Editor */}
        <div className="flex-1 flex flex-col bg-gray-900/50">
          {/* Editor Header */}
          <div className="h-12 bg-gray-800/60 backdrop-blur-sm border-b border-gray-700/50 flex items-center px-4 shadow-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <FileCode className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-bold text-gray-200">App.jsx</span>
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              </div>
              <div className="flex items-center space-x-2 text-xs text-gray-500">
                <span>JavaScript</span>
                <span>•</span>
                <span>React</span>
                <span>•</span>
                <span>UTF-8</span>
              </div>
            </div>
            
            <div className="ml-auto flex items-center space-x-2">
              <button className="p-1.5 text-gray-400 hover:text-gray-200 hover:bg-gray-700/50 rounded">
                <Split className="w-4 h-4" />
              </button>
              <button className="p-1.5 text-gray-400 hover:text-gray-200 hover:bg-gray-700/50 rounded">
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Code Editor */}
          <div className="flex-1 bg-gray-900/80 backdrop-blur-sm p-6">
            <div className="h-full bg-gray-800/50 rounded-xl border border-gray-700/50 shadow-xl overflow-hidden">
              <textarea
                ref={codeEditorRef}
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full h-full bg-transparent text-gray-100 font-mono text-sm resize-none outline-none p-6 leading-relaxed"
                placeholder="// Start coding with AI assistance...&#10;// Try voice commands like 'create component' or 'add state'&#10;// The AI assistant on the right can help generate code"
                style={{ fontSize: `${fontSize}px` }}
              />
            </div>
          </div>

          {/* Bottom Terminal */}
          {showTerminal && (
            <motion.div 
              initial={{ height: 0 }}
              animate={{ height: 200 }}
              className="bg-gray-800/60 backdrop-blur-sm border-t border-gray-700/50 flex flex-col shadow-xl"
            >
              <div className="h-10 bg-gray-800/80 border-b border-gray-700/50 flex items-center px-4">
                <div className="flex items-center space-x-3">
                  <Terminal className="w-4 h-4 text-green-400" />
                  <span className="text-sm font-bold text-gray-200">Terminal</span>
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                </div>
                <div className="ml-auto flex items-center space-x-2">
                  <button className="p-1 text-gray-400 hover:text-gray-200 hover:bg-gray-700/50 rounded">
                    <Minimize2 className="w-4 h-4" />
                  </button>
                  <button className="p-1 text-gray-400 hover:text-gray-200 hover:bg-gray-700/50 rounded">
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="flex-1 p-4 overflow-y-auto bg-gray-900/50">
                <div className="space-y-2">
                  {terminalOutput.map((output, index) => (
                    <div key={index} className={`text-sm font-mono flex items-center space-x-2 ${
                      output.type === 'error' ? 'text-red-400' :
                      output.type === 'success' ? 'text-green-400' :
                      output.type === 'warning' ? 'text-yellow-400' : 'text-gray-300'
                    }`}>
                      <span className="text-gray-500 text-xs">$</span>
                      <span>{output.message}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Right Panel - AI Response & Prompt */}
        <div className="w-96 bg-gray-800/60 backdrop-blur-sm border-l border-gray-700/50 flex flex-col shadow-xl">
          {/* AI Panel Header */}
          <div className="p-5 border-b border-gray-700/50 bg-gray-800/80">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-200">AI Assistant</h3>
                  <p className="text-xs text-gray-400">Powered by {aiModels.find(m => m.id === selectedAIModel)?.name}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-1.5 text-gray-400 hover:text-gray-200 hover:bg-gray-700/50 rounded">
                  <Settings className="w-4 h-4" />
                </button>
                <button className="p-1.5 text-gray-400 hover:text-gray-200 hover:bg-gray-700/50 rounded">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
          
          {/* AI Model Selector */}
          <div className="p-4 border-b border-gray-700/50 bg-gray-800/40">
            <h4 className="text-xs font-bold text-gray-300 mb-2">AI Model</h4>
            <select 
              value={selectedAIModel} 
              onChange={(e) => setSelectedAIModel(e.target.value)}
              className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-3 py-2 text-sm text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            >
              {aiModels.map(model => (
                <option key={model.id} value={model.id} className="bg-gray-800">{model.name}</option>
              ))}
            </select>
          </div>
          
          {/* AI Response Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {aiChatHistory.length === 0 && (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-purple-400" />
                </div>
                <h4 className="text-sm font-medium text-gray-300 mb-2">AI Assistant Ready</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Ask me to generate code, explain concepts, or help debug issues. 
                  I can help you build amazing applications!
                </p>
              </div>
            )}
            
            {aiChatHistory.map((message, index) => (
              <div key={index} className={`${message.type === 'user' ? 'text-right' : 'text-left'}`}>
                <div className={`inline-block max-w-[90%] ${
                  message.type === 'user' 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-700/80 text-gray-200'
                } rounded-2xl p-4 shadow-lg`}>
                  <div className="flex items-center space-x-2 mb-2">
                    {message.type === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                    <span className="text-xs font-semibold">
                      {message.type === 'user' ? 'You' : 'AI Assistant'}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed">{message.message}</p>
                </div>
              </div>
            ))}
            
            {isGenerating && (
              <div className="text-left">
                <div className="inline-block bg-gray-700/80 text-gray-200 rounded-2xl p-4 shadow-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Bot className="w-4 h-4" />
                    <span className="text-xs font-semibold">AI Assistant</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Prompt Input */}
          <div className="p-4 border-t border-gray-700/50 bg-gray-800/40">
            <div className="space-y-3">
              <div className="relative">
                <textarea
                  placeholder="Ask AI to generate code, explain concepts, or help debug..."
                  className="w-full bg-gray-700/50 border border-gray-600/50 rounded-xl px-4 py-3 text-sm text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200 resize-none"
                  rows={3}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault()
                      handleAIGenerate(e.target.value)
                      e.target.value = ''
                    }
                  }}
                />
                <button className="absolute right-3 bottom-3 p-1 text-gray-400 hover:text-gray-200">
                  <Mic className="w-4 h-4" />
                </button>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => {
                    const input = document.querySelector('textarea[placeholder*="Ask AI to generate code"]')
                    if (input.value) {
                      handleAIGenerate(input.value)
                      input.value = ''
                    }
                  }}
                  className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white py-2.5 px-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span className="text-sm font-medium">Send</span>
                </button>
                <button className="px-4 py-2.5 bg-gray-700/50 hover:bg-gray-700 text-gray-300 rounded-xl transition-all duration-200">
                  <RefreshCw className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="h-10 bg-gray-800/95 backdrop-blur-md border-t border-gray-700/50 flex items-center justify-between px-6 text-xs text-gray-400 shadow-lg">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className="text-gray-300 font-medium">Ready</span>
          </div>
          <div className="flex items-center space-x-4 text-gray-500">
            <span>Line 1, Col 1</span>
            <span>•</span>
            <span>JavaScript</span>
            <span>•</span>
            <span>UTF-8</span>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <Brain className="w-4 h-4 text-purple-400" />
            <span className="text-gray-300">{aiModels.find(m => m.id === selectedAIModel)?.name}</span>
          </div>
          <div className="flex items-center space-x-4 text-gray-500">
            <div className="flex items-center space-x-1">
              <Mic className="w-3 h-3" />
              <span>{isVoiceEnabled ? 'On' : 'Off'}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="w-3 h-3" />
              <span>{isCollaborating ? 'On' : 'Off'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AIBuilder3Panel
