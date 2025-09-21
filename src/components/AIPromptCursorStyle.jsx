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
      {/* Cursor-Style Header - Exactly like the image */}
      <div className="px-4 py-2 border-b border-border/20 bg-background">
        <div className="flex items-center justify-between">
          {/* Left side - Model selector */}
          <div className="relative model-selector">
            <button
              onClick={() => setShowModelSelector(!showModelSelector)}
              className="flex items-center gap-1.5 px-2 py-1 text-xs bg-transparent hover:bg-muted/30 text-foreground rounded transition-colors"
            >
              <span className="font-medium text-sm">{getModelDisplayName(aiModel)}</span>
            </button>
            
            {showModelSelector && (
              <div className="absolute top-full left-0 mt-1 w-56 bg-background border border-border/50 rounded-md shadow-lg z-50">
                <div className="p-1">
                  <div className="text-xs text-muted-foreground mb-1 px-2 py-1">AI Model</div>
                  <div className="max-h-48 overflow-y-auto">
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
                        className={`w-full flex items-center justify-between px-2 py-1.5 text-xs hover:bg-muted/50 rounded transition-colors ${
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
          <div className="flex items-center gap-0.5">
            <button
              onClick={() => setShowChatHistory(!showChatHistory)}
              className="p-1.5 hover:bg-muted/30 rounded transition-colors"
              title="Chat"
            >
              <MessageSquare className="h-3.5 w-3.5 text-muted-foreground" />
            </button>
            <button
              onClick={() => setShowAIAgent(!showAIAgent)}
              className="p-1.5 hover:bg-muted/30 rounded transition-colors"
              title="AI Agent"
            >
              <Bot className="h-3.5 w-3.5 text-muted-foreground" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Chat Area - Cursor Style */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Chat Messages Area */}
        <div className="flex-1 overflow-y-auto bg-background">
          {messages.length === 0 ? (
            <div className="h-full flex items-center justify-center p-6">
              <div className="text-center max-w-sm">
                <h3 className="text-base font-medium text-foreground mb-1">Ask me anything</h3>
                <p className="text-sm text-muted-foreground">
                  I can help you build applications, fix bugs, explain code, and much more.
                </p>
              </div>
            </div>
          ) : (
            <div className="p-3 space-y-3">
              <AnimatePresence>
                {messages.map((message, index) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="w-full"
                  >
                    <div className={`flex gap-3 ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                      {/* Avatar */}
                      <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                        message.type === 'user' 
                          ? 'bg-blue-500 text-white' 
                          : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                      }`}>
                        {message.type === 'user' ? (
                          <User className="h-3.5 w-3.5" />
                        ) : (
                          <Bot className="h-3.5 w-3.5" />
                        )}
                      </div>
                      
                      {/* Message Content */}
                      <div className={`flex-1 max-w-[85%] ${message.type === 'user' ? 'text-right' : 'text-left'}`}>
                        <div className={`inline-block px-3 py-2 rounded-lg text-sm ${
                          message.type === 'user'
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100'
                        }`}>
                          {message.isLoading ? (
                            <div className="flex items-center gap-2">
                              <Loader2 className="h-3 w-3 animate-spin" />
                              <span>Thinking...</span>
                            </div>
                          ) : (
                            <div className="whitespace-pre-wrap">{message.content}</div>
                          )}
                        </div>
                        
                        {/* Message Actions */}
                        {!message.isLoading && message.type === 'ai' && (
                          <div className="flex items-center gap-1 mt-1">
                            <button
                              onClick={() => handleCopyMessage(message.content)}
                              className="p-1 hover:bg-muted/50 rounded transition-colors"
                              title="Copy"
                            >
                              <Copy className="h-3 w-3 text-muted-foreground" />
                            </button>
                            <button
                              onClick={() => handleFeedback(message.id, 'like')}
                              className="p-1 hover:bg-muted/50 rounded transition-colors"
                              title="Like"
                            >
                              <ThumbsUp className="h-3 w-3 text-muted-foreground" />
                            </button>
                            <button
                              onClick={() => handleFeedback(message.id, 'dislike')}
                              className="p-1 hover:bg-muted/50 rounded transition-colors"
                              title="Dislike"
                            >
                              <ThumbsDown className="h-3 w-3 text-muted-foreground" />
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

        {/* AI Recommendations */}
        {aiRecommendations.length > 0 && (
          <div className="border-t border-border/30 bg-muted/20 p-3">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-medium text-foreground">Suggestions</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {aiRecommendations.slice(0, 4).map((recommendation) => (
                <button
                  key={recommendation.id}
                  onClick={() => handleApplyRecommendation(recommendation)}
                  className="inline-flex items-center gap-1 px-2.5 py-1 text-xs bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/20 dark:hover:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full border border-blue-200 dark:border-blue-700 transition-colors"
                >
                  <span>{recommendation.title}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Cursor-Style Input Area - Exactly like the image */}
      <div className="border-t border-border/30 bg-background">
        <div className="p-3">
          <div className="flex items-end gap-3">
            {/* Main input area */}
            <div className="flex-1 relative">
              <textarea
                ref={textareaRef}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="analyze this page, keep the same design layout but make the page look better like"
                className="w-full resize-y bg-transparent border-0 outline-none text-foreground placeholder:text-muted-foreground text-sm leading-relaxed"
                style={{ minHeight: '80px', maxHeight: '200px' }}
                disabled={isGenerating}
                rows={3}
              />
              
              {/* Bottom status bar */}
              <div className="absolute bottom-1 right-1 flex items-center gap-2 text-xs text-muted-foreground">
                <span>@ 1 Tab</span>
                <span>74%</span>
                <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center">
                  <span className="text-white text-xs">∞</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom input bar - like Cursor */}
          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span>∞</span>
              <span>HI</span>
              <button
                onClick={() => setShowModelSelector(!showModelSelector)}
                className="px-2 py-0.5 bg-muted/50 hover:bg-muted rounded text-xs font-medium"
              >
                {getModelDisplayName(aiModel)}
              </button>
            </div>
            
            {/* Send button */}
            <button
              onClick={handleGenerate}
              disabled={!prompt.trim() || isGenerating}
              className="w-7 h-7 rounded-full bg-blue-500 hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
            >
              {isGenerating ? (
                <Loader2 className="h-3 w-3 text-white animate-spin" />
              ) : (
                <Send className="h-3 w-3 text-white rotate-90" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
