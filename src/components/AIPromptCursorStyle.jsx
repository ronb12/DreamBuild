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
  ThumbsDown
} from 'lucide-react'
import { toast } from 'react-hot-toast'
import simpleAIService from '../services/simpleAIService'
import aiAgentService from '../services/aiAgentService'

export default function AIPromptCursorStyle() {
  const { addFile, setActiveFile } = useProject()
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

      // Generate code
      const files = await simpleAIService.generateCode(userPrompt)
      
      // Update AI message with results
      setMessages(prev => prev.map(msg => 
        msg.id === aiMessage.id 
          ? { 
              ...msg, 
              content: `Generated ${Object.keys(files).length} files successfully!`,
              isLoading: false,
              files: files
            }
          : msg
      ))

      // Add files to project
      Object.entries(files).forEach(([filename, content]) => {
        addFile(filename, content)
      })

      // Set first file as active
      const firstFile = Object.keys(files)[0]
      if (firstFile) {
        setActiveFile(firstFile)
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
      { id: 'auto', name: 'Auto', description: 'Automatically selects the best model', ram: 'Smart' },
      { id: 'codellama-7b', name: 'CodeLlama 7B', description: 'Fast and efficient code generation', ram: '8GB' },
      { id: 'codellama-13b', name: 'CodeLlama 13B', description: 'Higher quality code generation', ram: '16GB' },
      { id: 'codellama-34b', name: 'CodeLlama 34B', description: 'Best quality code generation', ram: '32GB' },
      { id: 'starcoder-15b', name: 'StarCoder 15B', description: 'Excellent code completion', ram: '24GB' },
      { id: 'deepseek-coder', name: 'DeepSeek Coder', description: 'High-performance generation', ram: '12GB' },
      { id: 'wizardcoder-7b', name: 'WizardCoder 7B', description: 'Great at following instructions', ram: '10GB' },
      { id: 'phi3-mini', name: 'Phi-3 Mini', description: 'Lightweight but powerful', ram: '6GB' },
      { id: 'llama3-8b', name: 'Llama 3 8B', description: 'General purpose model', ram: '10GB' }
    ]
  }

  return (
    <div className="h-full flex flex-col bg-background overflow-hidden">
      {/* Cursor-Style Header - Identical to Cursor */}
      <div className="px-4 py-3 border-b border-border/30 bg-background">
        <div className="flex items-center justify-between">
          {/* Left side - Model selector */}
          <div className="relative model-selector">
            <button
              onClick={() => setShowModelSelector(!showModelSelector)}
              className="flex items-center gap-2 px-3 py-1.5 text-sm bg-transparent hover:bg-muted/30 text-foreground rounded-md transition-colors"
            >
              <span className="font-medium">{getModelDisplayName(aiModel)}</span>
              <span className="text-muted-foreground text-xs">▼</span>
            </button>
            
            {showModelSelector && (
              <div className="absolute top-full left-0 mt-1 w-64 bg-background border border-border/50 rounded-md shadow-lg z-50">
                <div className="p-2">
                  <div className="text-xs text-muted-foreground mb-2 px-2">AI Model</div>
                  <div className="max-h-60 overflow-y-auto">
                    {getAvailableModels().map((model) => (
                      <button
                        key={model.id}
                        onClick={() => {
                          setAIModel(model.id)
                          setShowModelSelector(false)
                          if (simpleAIService?.setModel) {
                            simpleAIService.setModel(model.id)
                          }
                        }}
                        className={`w-full flex items-center justify-between px-2 py-1.5 text-sm hover:bg-muted/50 rounded transition-colors ${
                          aiModel === model.id ? 'bg-blue-50 dark:bg-blue-900/20' : ''
                        }`}
                      >
                        <span className="font-medium">{model.name}</span>
                        <span className="text-muted-foreground text-xs">{model.ram}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right side - Action buttons */}
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

      {/* Main Chat Area - Identical to Cursor */}
      <div className="flex-1 flex flex-col min-h-0">
        {/* Chat Messages Area */}
        <div className="flex-1 overflow-y-auto bg-background min-h-0">
          {messages.length === 0 ? (
            <div className="h-full flex items-center justify-center p-8">
              <div className="text-center max-w-md">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Ask me anything</h3>
                <p className="text-sm text-muted-foreground">
                  I can help you build applications, fix bugs, explain code, and much more.
                </p>
              </div>
            </div>
          ) : (
            <div className="p-4 pb-8 space-y-6">
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
                        <div className={`inline-block px-4 py-3 rounded-xl text-sm leading-relaxed ${
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
                            <div className="whitespace-pre-wrap">{message.content}</div>
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
          )}
        </div>
      </div>

      {/* Cursor-Style Input Area - Identical to Cursor */}
      <div className="border-t border-border/30 bg-background flex-shrink-0">
        <div className="p-4">
          {/* Main input area */}
          <div className="relative">
            <textarea
              ref={textareaRef}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Plan, search, build anything"
              className="w-full resize-none bg-transparent border-0 outline-none text-foreground placeholder:text-muted-foreground text-sm leading-relaxed"
              style={{ minHeight: '120px', maxHeight: '300px' }}
              disabled={isGenerating}
              rows={4}
            />
            
            {/* Bottom status indicators - Cursor style */}
            <div className="absolute bottom-2 right-2 flex items-center gap-3 text-xs text-muted-foreground">
              <span>@ 1 Tab</span>
              <span>51% O</span>
              <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                <span className="text-white text-xs font-bold">∞</span>
              </div>
            </div>
          </div>
          
          {/* Bottom input bar - Identical to Cursor */}
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span className="font-medium">∞</span>
              <span>HI</span>
              <button
                onClick={() => setShowModelSelector(!showModelSelector)}
                className="px-3 py-1 bg-muted/30 hover:bg-muted/50 rounded-md text-xs font-medium transition-colors"
              >
                {getModelDisplayName(aiModel)}
              </button>
            </div>
            
            {/* Send button - Cursor style */}
            <button
              onClick={handleGenerate}
              disabled={!prompt.trim() || isGenerating}
              className="w-8 h-8 rounded-full bg-blue-500 hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center shadow-sm"
            >
              {isGenerating ? (
                <Loader2 className="h-4 w-4 text-white animate-spin" />
              ) : (
                <Send className="h-4 w-4 text-white rotate-90" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
