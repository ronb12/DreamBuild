import { useState, useRef, useEffect } from 'react'
import { useProject } from '../contexts/ProjectContext'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Send, 
  MessageSquare,
  Bot,
  Loader2,
  User,
  Copy,
  ThumbsUp,
  ThumbsDown,
  Sparkles
} from 'lucide-react'
import { toast } from 'react-hot-toast'
import simpleAIService from '../services/simpleAIService'
import aiAgentService from '../services/aiAgentService'

export default function AIPromptCursorStyle() {
  const { currentProject, updateFile, switchFile } = useProject()
  const [prompt, setPrompt] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const textareaRef = useRef(null)
  const messagesEndRef = useRef(null)
  
  // Chat conversation state
  const [messages, setMessages] = useState([])
  const [aiRecommendations, setAiRecommendations] = useState([])
  const [showChatHistory, setShowChatHistory] = useState(false)
  const [showAIAgent, setShowAIAgent] = useState(false)
  
  // AI Model selection
  const [aiModel, setAIModel] = useState('auto')
  const [showModelSelector, setShowModelSelector] = useState(false)
  const [showContextUsage, setShowContextUsage] = useState(false)
  const [isDragOver, setIsDragOver] = useState(false)
  const [contextMode, setContextMode] = useState('unlimited') // 'unlimited' or 'limited'
  const [showContextModeSelector, setShowContextModeSelector] = useState(false)
  const [contextUsage, setContextUsage] = useState({
    tokens: 0,
    maxTokens: 4000, // Typical context window
    percentage: 0,
    files: 0,
    characters: 0
  })

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px'
    }
  }, [prompt])

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // Close model selector when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showModelSelector && !event.target.closest('.model-selector')) {
        setShowModelSelector(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [showModelSelector])

  const handleGenerate = async () => {
    if (!prompt.trim() || isGenerating) return

    const userPrompt = prompt
    setPrompt('')
    setIsGenerating(true)

    // Add user message
    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: userPrompt,
      timestamp: new Date()
    }

    // Add AI placeholder message
    const aiMessage = {
      id: Date.now() + 1,
      type: 'ai',
      content: '',
      timestamp: new Date(),
      isLoading: true
    }

    setMessages(prev => [...prev, userMessage, aiMessage])

    try {
      // Generate recommendations
      await generateRecommendations(userPrompt)

      // Start AI Agent if enabled
      if (aiAgentService.getStatus().autoMode) {
        await aiAgentService.breakdownTask(userPrompt)
      }

      // Generate code with conversation context
      console.log('🚀 Starting AI generation...')
      const context = {
        conversationHistory: messages,
        currentPrompt: userPrompt,
        previousFiles: Object.keys(currentProject.files),
        projectContext: currentProject.config
      }
      const files = await simpleAIService.generateCode(userPrompt, context)
      console.log('📁 Files received:', files)
      console.log('📁 Files type:', typeof files)
      console.log('📁 Files keys:', files ? Object.keys(files) : 'No files')
      
      // Check if files is valid
      if (!files || typeof files !== 'object') {
        throw new Error('Invalid files response from AI service')
      }
      
      // Update AI message with results
      setMessages(prev => prev.map(msg => 
        msg.id === aiMessage.id 
          ? { 
              ...msg, 
              content: `Generated ${Object.keys(files).length} files successfully!`,
              isLoading: false,
              files: files,
              timestamp: new Date()
            }
          : msg
      ))

      // Add files to project
      let filesAdded = 0
      Object.entries(files).forEach(([filename, content]) => {
        if (filename && content !== undefined) {
          console.log(`📄 Adding file: ${filename} (${typeof content})`)
          updateFile(filename, content)
          filesAdded++
        }
      })
      console.log(`✅ Added ${filesAdded} files to project`)

      // Set first file as active
      const firstFile = Object.keys(files)[0]
      if (firstFile) {
        switchFile(firstFile)
        console.log(`🎯 Set active file: ${firstFile}`)
      }

    } catch (error) {
      console.error('Generation error:', error)
      setMessages(prev => prev.map(msg => 
        msg.id === aiMessage.id 
          ? { 
              ...msg, 
              content: `Error: ${error.message}`,
              isLoading: false,
              error: true
            }
          : msg
      ))
    } finally {
      setIsGenerating(false)
    }
  }

  const generateRecommendations = async (userPrompt) => {
    // Generate AI recommendations based on prompt
    const recommendations = [
      { id: 1, title: 'Add responsive design', category: 'UI/UX' },
      { id: 2, title: 'Implement error handling', category: 'Performance' },
      { id: 3, title: 'Add TypeScript types', category: 'Code Quality' },
      { id: 4, title: 'Optimize for mobile', category: 'Mobile' }
    ].filter(() => Math.random() > 0.5)
    
    setAiRecommendations(recommendations)
  }

  const handleApplyRecommendation = (recommendation) => {
    setPrompt(recommendation.title)
    setAiRecommendations([])
  }

  const handleCopyMessage = (content) => {
    navigator.clipboard.writeText(content)
    toast.success('Message copied to clipboard')
  }

  const handleFeedback = (messageId, feedback) => {
    setMessages(prev => prev.map(msg => 
      msg.id === messageId 
        ? { ...msg, metadata: { ...msg.metadata, feedback, feedbackTimestamp: new Date() } }
        : msg
    ))
    toast.success(`Feedback recorded: ${feedback}`)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleGenerate()
    }
  }

  // Drag and drop functionality
  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragOver(true)
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    setIsDragOver(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragOver(false)
    
    const files = Array.from(e.dataTransfer.files)
    if (files.length > 0) {
      handleFiles(files)
    }
  }

  const handleFiles = (files) => {
    const fileNames = files.map(f => f.name).join(', ')
    setPrompt(prev => prev + `\n\n[Attached files: ${fileNames}]`)
    
    // Update context usage
    setContextUsage(prev => ({
      ...prev,
      files: prev.files + files.length,
      characters: prev.characters + fileNames.length
    }))
  }

  // Helper functions for AI model selection
  const getModelDisplayName = (modelId) => {
    const models = {
      'codellama-7b': 'CodeLlama 7B',
      'codellama-13b': 'CodeLlama 13B',
      'codellama-34b': 'CodeLlama 34B',
      'starcoder-15b': 'StarCoder 15B',
      'deepseek-coder': 'DeepSeek Coder',
      'wizardcoder-7b': 'WizardCoder 7B',
      'phi3-mini': 'Phi-3 Mini',
      'llama3-8b': 'Llama 3 8B',
      'auto': 'Auto'
    }
    return models[modelId] || 'Auto'
  }

  const getAvailableModels = () => {
    return [
      { id: 'auto', name: 'Auto', description: 'Automatically selects the best model', ram_required: 'Smart' },
      { id: 'codellama-7b', name: 'CodeLlama 7B', description: 'Fast and efficient code generation', ram_required: '8GB' },
      { id: 'codellama-13b', name: 'CodeLlama 13B', description: 'Higher quality code generation', ram_required: '16GB' },
      { id: 'codellama-34b', name: 'CodeLlama 34B', description: 'Best quality code generation', ram_required: '32GB' },
      { id: 'starcoder-15b', name: 'StarCoder 15B', description: 'Excellent code completion', ram_required: '24GB' },
      { id: 'deepseek-coder', name: 'DeepSeek Coder', description: 'High-performance generation', ram_required: '12GB' },
      { id: 'wizardcoder-7b', name: 'WizardCoder 7B', description: 'Great at following instructions', ram_required: '10GB' },
      { id: 'phi3-mini', name: 'Phi-3 Mini', description: 'Lightweight but powerful', ram_required: '6GB' },
      { id: 'llama3-8b', name: 'Llama 3 8B', description: 'General purpose model', ram_required: '10GB' },
      { id: 'mistral-7b', name: 'Mistral 7B', description: 'Fast and efficient coding assistant', ram_required: '8GB' },
      { id: 'gemma-7b', name: 'Gemma 7B', description: 'Google\'s lightweight model', ram_required: '9GB' },
      { id: 'qwen-7b', name: 'Qwen 7B', description: 'Alibaba\'s coding model', ram_required: '8GB' },
      { id: 'codet5-small', name: 'CodeT5 Small', description: 'Salesforce\'s code generation model', ram_required: '4GB' },
      { id: 'incoder-6b', name: 'InCoder 6B', description: 'Code completion specialist', ram_required: '6GB' }
    ]
  }

  return (
    <div className="h-full flex flex-col bg-background overflow-hidden">
      {/* Cursor-Style Header - Simplified */}
      <div className="px-4 py-3 border-b border-border/30 bg-background">
        <div className="flex items-center justify-between">
          {/* Left side - Title */}
          <div className="flex items-center gap-2">
            <Bot className="h-5 w-5 text-blue-500" />
            <span className="font-medium text-foreground">AI Assistant</span>
          </div>

          {/* Right side - Status and Action buttons */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-muted-foreground">Online</span>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setShowChatHistory(!showChatHistory)}
                className="p-2 hover:bg-muted/30 rounded transition-colors"
                title="Chat"
              >
                <MessageSquare className="h-4 w-4 text-muted-foreground" />
              </button>
              <button
                onClick={() => setShowAIAgent(!showAIAgent)}
                className="p-2 hover:bg-muted/30 rounded transition-colors"
                title="AI Agent"
              >
                <Bot className="h-4 w-4 text-muted-foreground" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Chat Area - Identical to Cursor */}
      <div className="flex-1 flex flex-col min-h-0">
        {/* Chat Messages Area */}
        <div className="flex-1 overflow-y-auto bg-background min-h-0">
          <div className="p-4 pb-8 space-y-6">
            {/* Welcome message - always show */}
            <div className="flex items-center justify-center py-8">
              <div className="text-center max-w-md">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Ask me anything</h3>
                <p className="text-sm text-muted-foreground break-words leading-relaxed">
                  I can help you build applications, fix bugs, explain code, and much more.
                </p>
              </div>
            </div>

            {/* Chat messages */}
            <AnimatePresence>
              {messages.map((message, index) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full"
                >
                  <div className={`flex gap-4 ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    {/* Avatar - Cursor Style */}
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                      message.type === 'user' 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                    }`}>
                      {message.type === 'user' ? (
                        <User className="h-4 w-4" />
                      ) : (
                        <Bot className="h-4 w-4" />
                      )}
                    </div>
                    
                    {/* Message Content - Cursor Style */}
                    <div className={`flex-1 max-w-[80%] ${message.type === 'user' ? 'text-right' : 'text-left'}`}>
                      <div className={`inline-block px-4 py-3 rounded-xl text-sm leading-relaxed break-words ${
                        message.type === 'user'
                          ? 'bg-blue-500 text-white rounded-br-md'
                          : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-bl-md'
                      }`}>
                        {message.isLoading ? (
                          <div className="flex items-center gap-2">
                            <Loader2 className="h-4 w-4 animate-spin" />
                            <span>Thinking...</span>
                          </div>
                        ) : (
                          <div className="whitespace-pre-wrap break-words overflow-wrap-anywhere">{message.content}</div>
                        )}
                      </div>
                      
                      {/* Message Actions - Cursor Style */}
                      {!message.isLoading && message.type === 'ai' && (
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => handleCopyMessage(message.content)}
                            className="p-1.5 hover:bg-muted/50 rounded transition-colors"
                            title="Copy"
                          >
                            <Copy className="h-3.5 w-3.5 text-muted-foreground" />
                          </button>
                          <button
                            onClick={() => handleFeedback(message.id, 'like')}
                            className="p-1.5 hover:bg-muted/50 rounded transition-colors"
                            title="Like"
                          >
                            <ThumbsUp className="h-3.5 w-3.5 text-muted-foreground" />
                          </button>
                          <button
                            onClick={() => handleFeedback(message.id, 'dislike')}
                            className="p-1.5 hover:bg-muted/50 rounded transition-colors"
                            title="Dislike"
                          >
                            <ThumbsDown className="h-3.5 w-3.5 text-muted-foreground" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            <div ref={messagesEndRef} />
          </div>
        </div>
      </div>

      {/* Cursor-Style Input Area - Perfect Match */}
      <div className="border-t border-border/30 bg-background flex-shrink-0">
        <div className="p-4">
          {/* Text input field */}
          <div className="relative">
            <textarea
              id="ai-prompt-input"
              data-testid="ai-prompt-input"
              ref={textareaRef}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyPress={handleKeyPress}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              placeholder="Plan, search, build anything"
              className={`w-full resize-y bg-background border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground text-sm leading-relaxed break-words overflow-wrap-anywhere focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors ${
                isDragOver 
                  ? 'border-blue-500 bg-blue-50/50 dark:bg-blue-900/10' 
                  : 'border-border'
              }`}
              style={{ minHeight: '120px', maxHeight: '300px', wordWrap: 'break-word', overflowWrap: 'anywhere' }}
              disabled={isGenerating}
              rows={4}
              aria-label="AI prompt input"
            />
            
            
            {/* Drag overlay */}
            {isDragOver && (
              <div className="absolute inset-0 bg-blue-500/10 border-2 border-blue-500 border-dashed rounded-lg flex items-center justify-center pointer-events-none">
                <div className="text-center">
                  <div className="text-blue-500 text-lg font-medium">Drop files here</div>
                  <div className="text-blue-500 text-xs">Files will be attached to your prompt</div>
                </div>
              </div>
            )}
            
            {/* Resize handle indicator */}
            <div className="absolute bottom-1 right-1 w-4 h-4 opacity-30">
              <div className="w-full h-full flex items-end justify-end">
                <div className="w-2 h-2 bg-muted-foreground/40" style={{
                  backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 1px, currentColor 1px, currentColor 2px)'
                }}></div>
              </div>
            </div>
          </div>
          
          {/* Bottom controls - Exact Cursor layout */}
          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* @ icon - Mention/Reference functionality */}
              <button
                onClick={() => {
                  const mention = prompt.includes('@') ? '' : '@file ';
                  setPrompt(prompt + mention);
                  textareaRef.current?.focus();
                }}
                className="w-5 h-5 border border-border rounded flex items-center justify-center hover:bg-muted/50 transition-colors"
                title="Mention files or references"
              >
                <span className="text-xs text-muted-foreground">@</span>
              </button>
              
              {/* Paperclip icon - File attachment functionality */}
              <button
                onClick={() => {
                  // File attachment functionality
                  const input = document.createElement('input');
                  input.type = 'file';
                  input.multiple = true;
                  input.accept = '.txt,.md,.js,.jsx,.ts,.tsx,.css,.html,.json,.py,.java,.cpp,.c';
                  input.onchange = (e) => {
                    const files = Array.from(e.target.files);
                    if (files.length > 0) {
                      handleFiles(files);
                    }
                  };
                  input.click();
                }}
                className="w-5 h-5 border border-border rounded flex items-center justify-center hover:bg-muted/50 transition-colors"
                title="Attach files"
              >
                <span className="text-xs text-muted-foreground">📎</span>
              </button>
              
              {/* Model selector */}
              <div className="flex items-center gap-2 text-xs font-medium text-foreground relative">
                <button
                  onClick={() => setShowModelSelector(!showModelSelector)}
                  className="hover:text-blue-600 transition-colors"
                  title="Select AI Model"
                >
                  {getModelDisplayName(aiModel)}
                </button>
                <span className="text-muted-foreground">tab</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setShowContextUsage(!showContextUsage)
                  }}
                  className="text-muted-foreground ml-2 hover:text-blue-600 transition-colors"
                  title="Click to view context usage"
                >
                  {contextUsage.percentage}% O
                </button>
              </div>
            </div>
            
            {/* Right side controls */}
            <div className="flex items-center gap-3">
              {/* Send button */}
              <button
                id="generate-button"
                data-testid="generate-button"
                onClick={handleGenerate}
                disabled={!prompt.trim() || isGenerating}
                className="w-8 h-8 rounded-full bg-blue-500 hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center shadow-sm"
                title="Generate Code"
                aria-label="Generate code from prompt"
              >
                {isGenerating ? (
                  <Loader2 className="h-4 w-4 text-white animate-spin" />
                ) : (
                  <Send className="h-4 w-4 text-white rotate-90" />
                )}
              </button>
              
              {/* Infinity symbol */}
              <button
                onClick={() => setShowContextModeSelector(!showContextModeSelector)}
                className={`text-lg transition-colors hover:text-blue-600 ${
                  contextMode === 'unlimited' ? 'text-blue-500' : 'text-muted-foreground'
                }`}
                title={`Context Mode: ${contextMode === 'unlimited' ? 'Unlimited' : 'Limited'}`}
              >
                ∞
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Context Usage Modal */}
      {showContextUsage && (
        <div className="absolute bottom-20 left-4 bg-background border border-border rounded-lg shadow-lg p-4 z-50 min-w-80">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium text-foreground">Context Usage</h3>
            <button
              onClick={() => setShowContextUsage(false)}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              ×
            </button>
          </div>
          
          <div className="space-y-3">
            {/* Token Usage */}
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">Tokens</span>
              <span className="text-xs font-medium text-foreground">
                {contextUsage.tokens.toLocaleString()} / {contextUsage.maxTokens.toLocaleString()}
              </span>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${contextUsage.percentage}%` }}
              ></div>
            </div>
            
            {/* Percentage */}
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">Usage</span>
              <span className="text-xs font-medium text-foreground">
                {contextUsage.percentage}%
              </span>
            </div>
            
            {/* Files */}
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">Files</span>
              <span className="text-xs font-medium text-foreground">
                {contextUsage.files} files
              </span>
            </div>
            
            {/* Characters */}
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">Characters</span>
              <span className="text-xs font-medium text-foreground">
                {contextUsage.characters.toLocaleString()}
              </span>
            </div>
            
            {/* Model Info */}
            <div className="pt-2 border-t border-border">
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Model</span>
                <span className="text-xs font-medium text-foreground">
                  {getModelDisplayName(aiModel)}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Context Mode Selector Modal */}
      {showContextModeSelector && (
        <div className="absolute bottom-20 right-4 bg-background border border-border rounded-lg shadow-lg p-4 z-50 min-w-72">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium text-foreground">Context Mode</h3>
            <button
              onClick={() => setShowContextModeSelector(false)}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              ×
            </button>
          </div>
          
          <div className="space-y-3">
            {/* Unlimited Context */}
            <button
              onClick={() => {
                setContextMode('unlimited')
                setShowContextModeSelector(false)
                toast.success('Switched to Unlimited Context Mode')
              }}
              className={`w-full p-3 rounded-lg border transition-colors ${
                contextMode === 'unlimited'
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                  : 'border-border hover:bg-muted/50'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`text-xl ${contextMode === 'unlimited' ? 'text-blue-500' : 'text-muted-foreground'}`}>
                  ∞
                </div>
                <div className="text-left">
                  <div className="font-medium text-sm">Unlimited Context</div>
                  <div className="text-xs text-muted-foreground">
                    Access to entire codebase and conversation history
                  </div>
                </div>
                {contextMode === 'unlimited' && (
                  <div className="ml-auto w-2 h-2 bg-blue-500 rounded-full"></div>
                )}
              </div>
            </button>

            {/* Limited Context */}
            <button
              onClick={() => {
                setContextMode('limited')
                setShowContextModeSelector(false)
                toast.success('Switched to Limited Context Mode')
              }}
              className={`w-full p-3 rounded-lg border transition-colors ${
                contextMode === 'limited'
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                  : 'border-border hover:bg-muted/50'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`text-lg ${contextMode === 'limited' ? 'text-blue-500' : 'text-muted-foreground'}`}>
                  ⚡
                </div>
                <div className="text-left">
                  <div className="font-medium text-sm">Limited Context</div>
                  <div className="text-xs text-muted-foreground">
                    Faster responses with recent conversation only
                  </div>
                </div>
                {contextMode === 'limited' && (
                  <div className="ml-auto w-2 h-2 bg-blue-500 rounded-full"></div>
                )}
              </div>
            </button>

            {/* Current Usage */}
            <div className="pt-3 border-t border-border">
              <div className="text-xs text-muted-foreground mb-2">Current Usage</div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Mode</span>
                  <span className="text-xs font-medium text-foreground">
                    {contextMode === 'unlimited' ? 'Unlimited' : 'Limited'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Context Window</span>
                  <span className="text-xs font-medium text-foreground">
                    {contextMode === 'unlimited' ? '∞ tokens' : '4K tokens'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Performance</span>
                  <span className="text-xs font-medium text-foreground">
                    {contextMode === 'unlimited' ? 'Comprehensive' : 'Fast'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Model Selector Modal */}
      {showModelSelector && (
        <div className="fixed bottom-20 left-4 bg-background border border-border rounded-lg shadow-lg p-4 z-[99999] min-w-80 max-w-96 flex flex-col" style={{ height: '120px' }}>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium text-foreground">Select AI Model</h3>
            <button
              onClick={() => setShowModelSelector(false)}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              ×
            </button>
          </div>
          
          <div className="overflow-y-auto space-y-2 pr-2 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent" style={{ height: '80px' }}>
            {getAvailableModels().map((model) => (
              <button
                key={model.id}
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  setAIModel(model.id)
                  setTimeout(() => {
                    setShowModelSelector(false)
                  }, 100)
                  toast.success(`Switched to ${model.name}`)
                }}
                className={`w-full p-3 rounded-lg border transition-colors text-left ${
                  aiModel === model.id
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                    : 'border-border hover:bg-muted/50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="font-medium text-sm">{model.name}</div>
                    <div className="text-xs text-muted-foreground">{model.description}</div>
                  </div>
                  <div className="text-xs text-muted-foreground ml-2">{model.ram_required}</div>
                </div>
              </button>
            ))}
          </div>
          
          <div className="mt-3 pt-3 border-t border-border">
            <div className="text-xs text-muted-foreground">
              <p>• Auto selects the best available model</p>
              <p>• Local AI models require Ollama installation</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
