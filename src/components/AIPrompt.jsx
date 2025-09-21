import { useState, useRef, useEffect } from 'react'
import { useProject } from '../contexts/ProjectContext'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Send, 
  Sparkles, 
  Settings, 
  Zap, 
  Brain,
  Loader2,
  CheckCircle,
  AlertCircle,
  RefreshCw,
  BarChart3,
  Code,
  Search,
  User,
  Bot,
  Copy,
  ThumbsUp,
  ThumbsDown,
  MessageSquare,
  Lightbulb
} from 'lucide-react'
import simpleAIService from '../services/simpleAIService'
import AIServiceStatus from './AIServiceStatus'
import TemplateBrowser from './TemplateBrowser'
import RecommendationPanel from './RecommendationPanel'
import WebSearchPanel from './WebSearchPanel'
import MessageBubble from './chat/MessageBubble'
import RecommendationCard from './chat/RecommendationCard'
import toast from 'react-hot-toast'

const AIPrompt = () => {
  const { currentProject, updateFile, updateConfig } = useProject()
  const [prompt, setPrompt] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [showAISettings, setShowAISettings] = useState(false)
  const [showServiceStatus, setShowServiceStatus] = useState(false)
  const [showTemplateBrowser, setShowTemplateBrowser] = useState(false)
  const [showRecommendations, setShowRecommendations] = useState(false)
  const [showWebSearch, setShowWebSearch] = useState(false)
  const [webSearchResults, setWebSearchResults] = useState(null)
  const [selectedService, setSelectedService] = useState('local-ai')
  const [aiModel, setAIModel] = useState('llama3-8b-8192')
  const [suggestions, setSuggestions] = useState([])
  const [generationHistory, setGenerationHistory] = useState([])
  const [serviceStatus, setServiceStatus] = useState({})
  
  // Chat conversation state
  const [messages, setMessages] = useState([])
  const [aiRecommendations, setAiRecommendations] = useState([])
  const [showChatHistory, setShowChatHistory] = useState(true)
  
  const textareaRef = useRef(null)
  const messagesEndRef = useRef(null)

  // No auto-resize needed for input field

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // Load service status
  useEffect(() => {
    setServiceStatus(simpleAIService?.getServiceStatus ? simpleAIService.getServiceStatus() : {})
    const interval = setInterval(() => {
      setServiceStatus(simpleAIService?.getServiceStatus ? simpleAIService.getServiceStatus() : {})
    }, 30000) // Update every 30 seconds

    return () => clearInterval(interval)
  }, [])

  // Smart suggestions based on prompt - removed UI, keeping background logic
  useEffect(() => {
    if (prompt.length > 10) {
      generateSuggestions()
    } else {
      setSuggestions([])
    }
  }, [prompt])

  const generateSuggestions = () => {
    const lowerPrompt = prompt.toLowerCase()
    const newSuggestions = []

    // Health/Food suggestions
    if (lowerPrompt.includes('health') || lowerPrompt.includes('food')) {
      newSuggestions.push({
        text: 'Add nutrition calculator',
        type: 'feature',
        icon: '🧮'
      })
      newSuggestions.push({
        text: 'Include meal planning calendar',
        type: 'feature',
        icon: '📅'
      })
    }

    // Todo/Task suggestions
    if (lowerPrompt.includes('todo') || lowerPrompt.includes('task')) {
      newSuggestions.push({
        text: 'Add due dates and reminders',
        type: 'feature',
        icon: '⏰'
      })
      newSuggestions.push({
        text: 'Include priority levels',
        type: 'feature',
        icon: '⭐'
      })
    }

    // Portfolio suggestions
    if (lowerPrompt.includes('portfolio') || lowerPrompt.includes('resume')) {
      newSuggestions.push({
        text: 'Add contact form',
        type: 'feature',
        icon: '📧'
      })
      newSuggestions.push({
        text: 'Include project gallery',
        type: 'feature',
        icon: '🖼️'
      })
    }

    // General suggestions
    newSuggestions.push({
      text: 'Make it responsive',
      type: 'improvement',
      icon: '📱'
    })
    newSuggestions.push({
      text: 'Add dark mode',
      type: 'improvement',
      icon: '🌙'
    })

    setSuggestions(newSuggestions.slice(0, 4))
  }

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      toast.error('Please enter a description of what you want to build')
      return
    }

    const userPrompt = prompt.trim()
    setPrompt('')
    setIsGenerating(true)
    
    // Add user message to conversation
    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: userPrompt,
      timestamp: new Date(),
      status: 'sent'
    }
    setMessages(prev => [...prev, userMessage])
    
    // Add AI response placeholder
    const aiMessage = {
      id: Date.now() + 1,
      type: 'ai',
      content: '',
      timestamp: new Date(),
      status: 'generating'
    }
    setMessages(prev => [...prev, aiMessage])
    
    try {
      // Update generation history
      setGenerationHistory(prev => [userPrompt, ...prev.slice(0, 4)])

      // Debug: Check if simpleAIService and generateCode method exist
      console.log('AI Service object:', simpleAIService)
      console.log('AI Service generateCode method:', typeof simpleAIService?.generateCode)
      
      if (!simpleAIService || typeof simpleAIService.generateCode !== 'function') {
        throw new Error('AI Service not properly initialized. generateCode method not found.')
      }

      // Generate AI recommendations based on the prompt
      generateRecommendations(userPrompt)

      // Generate code using AI service (now includes web search)
      const contextWithPrompt = {
        ...currentProject.config,
        prompt: userPrompt
      };
      const generatedFiles = await simpleAIService.generateCode(userPrompt, contextWithPrompt)
      
      // Store web search results if available
      if (generatedFiles._webSearchResults) {
        setWebSearchResults(generatedFiles._webSearchResults)
        delete generatedFiles._webSearchResults // Remove from files
      }
      
      // Update project files
      console.log('📁 Generated files received:', Object.keys(generatedFiles))
      console.log('📁 Generated files count:', Object.keys(generatedFiles).length)
      
      Object.entries(generatedFiles).forEach(([filename, content]) => {
        console.log(`📄 Adding file: ${filename} (${content?.length || 0} chars)`)
        updateFile(filename, content)
      })
      
      console.log('📁 Files after update:', Object.keys(currentProject.files))

      // Auto-configure project based on prompt
      autoConfigureProject(userPrompt)

      // Update AI message with response
      const responseContent = `I've generated your ${Object.keys(generatedFiles).length} files! Here's what I created:

${Object.keys(generatedFiles).map(file => `• ${file}`).join('\n')}

The code has been added to your project. You can view and edit the files in the file manager.`
      
      setMessages(prev => prev.map(msg => 
        msg.id === aiMessage.id 
          ? { ...msg, content: responseContent, status: 'generated', metadata: { files: Object.keys(generatedFiles) } }
          : msg
      ))

      toast.success('Code generated successfully!')

    } catch (error) {
      console.error('AI generation error:', error)
      
      // Update AI message with error
      setMessages(prev => prev.map(msg => 
        msg.id === aiMessage.id 
          ? { 
              ...msg, 
              content: `I encountered an error while generating your code: ${error.message}\n\nPlease try again or modify your request.`,
              status: 'error',
              metadata: { error: error.message }
            }
          : msg
      ))
      
      toast.error('Failed to generate code: ' + error.message)
    } finally {
      setIsGenerating(false)
    }
  }

  const autoConfigureProject = (promptText) => {
    const lowerPrompt = promptText.toLowerCase()
    const config = { ...currentProject.config }

    // Auto-detect app type
    if (lowerPrompt.includes('mobile') || lowerPrompt.includes('app')) {
      config.appType = 'mobile'
    } else if (lowerPrompt.includes('api') || lowerPrompt.includes('backend')) {
      config.appType = 'backend'
    } else if (lowerPrompt.includes('frontend') || lowerPrompt.includes('website')) {
      config.appType = 'frontend'
    }

    // Auto-detect language
    if (lowerPrompt.includes('typescript') || lowerPrompt.includes('ts')) {
      config.language = 'typescript'
    } else if (lowerPrompt.includes('python')) {
      config.language = 'python'
    } else if (lowerPrompt.includes('java')) {
      config.language = 'java'
    }

    // Auto-detect styling
    if (lowerPrompt.includes('bootstrap')) {
      config.styling = 'bootstrap'
    } else if (lowerPrompt.includes('material')) {
      config.styling = 'material'
    } else {
      config.styling = 'tailwind'
    }

    updateConfig(config)
  }

  // Generate AI recommendations based on conversation
  const generateRecommendations = (promptText) => {
    const recommendations = []
    const lowerPrompt = promptText.toLowerCase()

    // Technology recommendations
    if (lowerPrompt.includes('react') || lowerPrompt.includes('frontend')) {
      recommendations.push({
        id: Date.now() + Math.random(),
        type: 'technology',
        title: 'Add React Router',
        description: 'Implement client-side routing for better navigation',
        action: 'Add React Router to your project for single-page application routing',
        priority: 'high'
      })
      recommendations.push({
        id: Date.now() + Math.random(),
        type: 'technology',
        title: 'Add State Management',
        description: 'Consider Redux or Zustand for complex state management',
        action: 'Implement state management for better data flow',
        priority: 'medium'
      })
    }

    if (lowerPrompt.includes('database') || lowerPrompt.includes('backend')) {
      recommendations.push({
        id: Date.now() + Math.random(),
        type: 'technology',
        title: 'Add Database Integration',
        description: 'Integrate with PostgreSQL, MongoDB, or Firebase',
        action: 'Set up database connection and models',
        priority: 'high'
      })
    }

    // Feature recommendations
    if (lowerPrompt.includes('auth') || lowerPrompt.includes('login')) {
      recommendations.push({
        id: Date.now() + Math.random(),
        type: 'feature',
        title: 'Add Authentication',
        description: 'Implement user authentication and authorization',
        action: 'Add login/signup functionality with secure session management',
        priority: 'high'
      })
    }

    if (lowerPrompt.includes('responsive') || lowerPrompt.includes('mobile')) {
      recommendations.push({
        id: Date.now() + Math.random(),
        type: 'feature',
        title: 'Make Responsive',
        description: 'Ensure your app works on all device sizes',
        action: 'Add responsive design with mobile-first approach',
        priority: 'high'
      })
    }

    // Performance recommendations
    recommendations.push({
      id: Date.now() + Math.random(),
      type: 'performance',
      title: 'Add Loading States',
      description: 'Improve user experience with loading indicators',
      action: 'Add loading spinners and skeleton screens',
      priority: 'medium'
    })

    recommendations.push({
      id: Date.now() + Math.random(),
      type: 'performance',
      title: 'Optimize Images',
      description: 'Add image optimization for better performance',
      action: 'Implement lazy loading and image compression',
      priority: 'medium'
    })

    // Security recommendations
    recommendations.push({
      id: Date.now() + Math.random(),
      type: 'security',
      title: 'Add Input Validation',
      description: 'Validate all user inputs to prevent security issues',
      action: 'Implement client and server-side validation',
      priority: 'high'
    })

    setAiRecommendations(recommendations)
  }

  const handleSuggestionClick = (suggestion) => {
    // Background suggestion logic - UI removed but functionality preserved
    console.log(`Suggestion available: ${suggestion.text}`)
  }

  const handleHistoryClick = (historyItem) => {
    // Background history logic - UI removed but functionality preserved
    console.log(`History item available: ${historyItem}`)
  }

  const handleApplyRecommendation = (recommendation) => {
    // Generate a prompt based on the recommendation
    const recommendationPrompt = `Apply this recommendation: ${recommendation.title}

Description: ${recommendation.description}
Action: ${recommendation.action}

Please implement this suggestion in my current project.`
    
    setPrompt(recommendationPrompt)
  }

  const handleCopyMessage = (content) => {
    navigator.clipboard.writeText(content)
    toast.success('Message copied to clipboard')
  }

  const handleFeedback = (messageId, feedback) => {
    // Update message with feedback
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

  const aiServices = simpleAIService?.getServices ? simpleAIService.getServices() : {}

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="h-full flex flex-col bg-card border border-border rounded-lg overflow-hidden"
    >
      {/* AI Prompt Header */}
      <div className="p-3 border-b border-border bg-muted/50">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-sm flex items-center gap-2">
            <Sparkles className="h-4 w-4" />
            AI Assistant
          </h3>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
              {simpleAIService?.currentService || 'local-ai'}
            </span>
            <button
              onClick={() => setShowChatHistory(!showChatHistory)}
              className="p-1 hover:bg-blue-100 dark:hover:bg-blue-900/20 rounded transition-colors"
              title={showChatHistory ? "Hide Chat History" : "Show Chat History"}
            >
              <MessageSquare className="h-4 w-4" />
            </button>
            <button
              onClick={() => setShowTemplateBrowser(true)}
              className="p-1 hover:bg-blue-100 dark:hover:bg-blue-900/20 rounded transition-colors"
              title="Browse Templates (1000+)"
            >
              <Code className="h-4 w-4" />
            </button>
            <button
              onClick={() => setShowRecommendations(true)}
              className="p-1 hover:bg-blue-100 dark:hover:bg-blue-900/20 rounded transition-colors"
              title="AI Recommendations & Production Analysis"
            >
              <Sparkles className="h-4 w-4" />
            </button>
            <button
              onClick={() => setShowWebSearch(true)}
              className="p-1 hover:bg-blue-100 dark:hover:bg-blue-900/20 rounded transition-colors"
              title="Web Knowledge Search"
            >
              <Search className="h-4 w-4" />
            </button>
            <button
              onClick={() => setShowServiceStatus(true)}
              className="p-1 hover:bg-blue-100 dark:hover:bg-blue-900/20 rounded transition-colors"
              title="AI Service Status"
            >
              <BarChart3 className="h-4 w-4" />
            </button>
            <button
              onClick={() => setShowAISettings(true)}
              className="p-1 hover:bg-blue-100 dark:hover:bg-blue-900/20 rounded transition-colors"
              title="AI Settings"
            >
              <Settings className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* AI Service Status */}
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-muted-foreground">
                {serviceStatus[simpleAIService?.currentService || 'local-ai']?.isHealthy ? 'AI Ready' : 'Demo Mode'}
              </span>
            </div>
            <span>•</span>
            <span className="text-muted-foreground">
              {simpleAIService?.isFallbackEnabled ? (simpleAIService.isFallbackEnabled() ? 'Fallback Enabled' : 'Single Service') : 'Local AI Only'}
            </span>
          </div>
          <button
            onClick={() => setShowServiceStatus(true)}
            className="text-xs text-primary hover:underline"
          >
            Details
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Chat History */}
        {showChatHistory && (
          <div className="w-1/2 border-r border-border overflow-y-auto">
            <div className="p-3 border-b border-border bg-muted/20">
              <h4 className="text-sm font-medium flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                Conversation History
              </h4>
              <p className="text-xs text-muted-foreground">{messages.length} messages</p>
            </div>
            
            <div className="p-3 space-y-3">
              {messages.length === 0 ? (
                <div className="text-center py-8">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mx-auto mb-3">
                    <Bot className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Start a conversation to see your chat history
                  </p>
                </div>
              ) : (
                <AnimatePresence>
                  {messages.map((message) => (
                    <MessageBubble
                      key={message.id}
                      message={message}
                      onCopy={handleCopyMessage}
                      onFeedback={handleFeedback}
                    />
                  ))}
                </AnimatePresence>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>
        )}

        {/* Right Side - Recommendations and Input */}
        <div className={`${showChatHistory ? 'w-1/2' : 'w-full'} flex flex-col`}>
          {/* AI Recommendations */}
          {aiRecommendations.length > 0 && (
            <div className="border-b border-border bg-muted/10">
              <div className="p-3 border-b border-border">
                <h4 className="text-sm font-medium flex items-center gap-2">
                  <Lightbulb className="h-4 w-4" />
                  AI Recommendations
                </h4>
                <p className="text-xs text-muted-foreground">
                  {aiRecommendations.length} suggestions based on your conversation
                </p>
              </div>
              
              <div className="p-3 max-h-32 overflow-y-auto space-y-2">
                {aiRecommendations.slice(0, 3).map((recommendation) => (
                  <RecommendationCard
                    key={recommendation.id}
                    recommendation={recommendation}
                    onApply={handleApplyRecommendation}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Prompt Input */}
          <div className="flex-1 p-3 space-y-3">
            <div className="space-y-2">
              <label className="text-sm font-medium">Describe what you want to build</label>
              <div className="relative">
                <input
                  ref={textareaRef}
                  type="text"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Create a healthy food tips website with nutrition advice and meal planning features..."
                  className="w-full p-3 border border-border rounded-md bg-black focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  disabled={isGenerating}
                />
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs text-muted-foreground">
                  {prompt.length}/2000
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Generate Button */}
      <div className="p-3 border-t border-border">
        <button
          onClick={handleGenerate}
          disabled={!prompt.trim() || isGenerating}
          className="w-full flex items-center justify-center gap-2 p-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-md hover:from-blue-700 hover:to-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg shadow-blue-500/30 border border-blue-500/20"
        >
          {isGenerating ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Generating...</span>
            </>
          ) : (
            <>
              <Zap className="h-4 w-4" />
              <span>Generate Code</span>
            </>
          )}
        </button>
        <p className="text-xs text-muted-foreground text-center mt-2">
          Press Enter to generate
        </p>
      </div>

      {/* Template Browser */}
      <TemplateBrowser 
        isOpen={showTemplateBrowser} 
        onClose={() => setShowTemplateBrowser(false)}
        onTemplateSelect={(template) => {
          console.log('Template selected:', template)
        }}
      />

      {/* AI Service Status Dialog */}
      <AIServiceStatus 
        isOpen={showServiceStatus} 
        onClose={() => setShowServiceStatus(false)} 
      />

      {/* Recommendation Panel */}
      <RecommendationPanel 
        isOpen={showRecommendations} 
        onClose={() => setShowRecommendations(false)} 
      />

      {/* Web Search Panel */}
      <WebSearchPanel 
        isOpen={showWebSearch} 
        onClose={() => setShowWebSearch(false)}
        searchResults={webSearchResults}
        prompt={prompt}
      />

      {/* AI Settings Dialog */}
      <AnimatePresence>
        {showAISettings && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={() => setShowAISettings(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-card border border-border rounded-lg p-6 w-96 max-w-[90vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Brain className="h-5 w-5" />
                AI Settings
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">AI Service</label>
                  <select
                    value={selectedService}
                    onChange={(e) => {
                      setSelectedService(e.target.value)
                      simpleAIService?.setService ? simpleAIService.setService(e.target.value) : null
                    }}
                    className="w-full p-2 border border-border rounded-md bg-black"
                  >
                    {Object.entries(aiServices).map(([key, service]) => (
                      <option key={key} value={key}>
                        {service.name} - {service.type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Model</label>
                  <select
                    value={aiModel}
                    onChange={(e) => {
                      setAIModel(e.target.value)
                      simpleAIService?.setService ? simpleAIService.setService(e.target.value) : null
                    }}
                    className="w-full p-2 border border-border rounded-md bg-black"
                  >
                    {Object.entries(aiServices[selectedService]?.models || {}).map(([key, name]) => (
                      <option key={key} value={key}>
                        {name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="p-3 bg-muted rounded-md">
                  <h4 className="text-sm font-medium mb-2">Service Info</h4>
                  <div className="text-xs text-muted-foreground space-y-1">
                    <p><strong>Type:</strong> {aiServices[selectedService]?.type}</p>
                    <p><strong>Cost:</strong> Free tier available</p>
                    <p><strong>Features:</strong> Fast inference, modern models</p>
                  </div>
                </div>

                <div className="flex gap-2 justify-end">
                  <button
                    onClick={() => setShowAISettings(false)}
                    className="px-4 py-2 text-sm border border-border rounded-md hover:bg-muted transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default AIPrompt
