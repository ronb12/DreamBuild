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
  Sparkles,
  Info,
  X,
  CheckCircle,
  AlertTriangle,
  AlertCircle,
  Zap,
  ZapOff
} from 'lucide-react'
import { toast } from 'react-hot-toast'
import simpleAIService from '../services/simpleAIService'
import aiAgentService from '../services/aiAgentService'
import conversationService from '../services/conversationService'
import streamingService from '../services/streamingService'
import realTimeWebBrowsingService from '../services/realTimeWebBrowsingService'
import AIModelSelector from './ai/AIModelSelector'
import AIChatInterface from './ai/AIChatInterface'
import StreamingResponse from './StreamingResponse'

export default function AIPromptSimplified() {
  console.log('🔧 AIPromptSimplified component rendering...')
  
  const { currentProject, updateFile, switchFile, updateConfig } = useProject()
  const [prompt, setPrompt] = useState('')
  const [projectName, setProjectName] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const textareaRef = useRef(null)
  const messagesEndRef = useRef(null)
  
  // Chat conversation state
  const [messages, setMessages] = useState([])
  const [aiRecommendations, setAiRecommendations] = useState([])
  const [showChatHistory, setShowChatHistory] = useState(false)
  const [showAIAgent, setShowAIAgent] = useState(false)
  const [appExplanation, setAppExplanation] = useState(null)
  const [showExplanation, setShowExplanation] = useState(false)
  
  // Streaming state
  const [isStreaming, setIsStreaming] = useState(false)
  const [streamingResponse, setStreamingResponse] = useState('')
  const [streamingType, setStreamingType] = useState('text')
  const [streamingLanguage, setStreamingLanguage] = useState('javascript')
  const [showStreaming, setShowStreaming] = useState(false)
  const [streamingEnabled, setStreamingEnabled] = useState(true)
  
  // AI Model selection
  const [aiModel, setAIModel] = useState('auto')
  const [modelUpdateKey, setModelUpdateKey] = useState(0)

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

  // Check if the request is for incremental development
  const isIncrementalRequest = (prompt) => {
    const lowerPrompt = prompt.toLowerCase()
    
    // First check if this is a new app creation (not incremental)
    const newAppKeywords = [
      'create a', 'build a', 'make a', 'develop a', 'start a', 'new app', 'new project'
    ]
    
    if (newAppKeywords.some(keyword => lowerPrompt.includes(keyword))) {
      return false // This is a new app, not incremental
    }
    
    // Check for bug fixes and corrections (should be incremental)
    const bugFixKeywords = [
      'fix', 'fix the', 'fix a', 'fix this', 'fix that',
      'broken', 'not working', 'doesn\'t work', 'isn\'t working',
      'error', 'bug', 'issue', 'problem',
      'button', 'click', 'clicking', 'clicked',
      'correction', 'correct', 'wrong', 'incorrect',
      'update', 'change', 'modify', 'adjust',
      'improve', 'enhance', 'better'
    ]
    
    if (bugFixKeywords.some(keyword => lowerPrompt.includes(keyword))) {
      return true // This is a bug fix or correction, should be incremental
    }
    
    // Then check for incremental keywords
    const incrementalKeywords = [
      'add', 'add a', 'add new', 'add the', 'add some',
      'include', 'include a', 'include new',
      'implement', 'implement a', 'implement new',
      'feature', 'features',
      'functionality', 'function',
      'capability', 'capabilities',
      'enhance', 'enhancement',
      'improve', 'improvement',
      'modify', 'modification',
      'update', 'upgrade',
      'extend', 'extension'
    ]
    
    // Check if the prompt contains incremental keywords
    return incrementalKeywords.some(keyword => lowerPrompt.includes(keyword))
  }

  const handleGenerate = async () => {
    if (!prompt.trim() || isGenerating) return

    const userPrompt = prompt
    setPrompt('')
    setIsGenerating(true)

    // Initialize conversation if not already done
    if (!conversationService.currentConversation) {
      await conversationService.initializeConversation(currentProject.id, {
        name: currentProject.name,
        files: currentProject.files,
        features: currentProject.features || [],
        techStack: currentProject.techStack || [],
        appType: currentProject.appType || 'web',
        complexity: currentProject.complexity || 'basic',
        industry: currentProject.industry || 'general'
      })
    }

    // Add user message to conversation
    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: userPrompt,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    await conversationService.addMessage(userPrompt)

    // Auto-search web for context (like ChatGPT)
    console.log('🌐 Auto-searching web for context...')
    let webContext = null
    try {
      const webSearchResult = await realTimeWebBrowsingService.searchForContext(userPrompt, {
        techStack: currentProject.techStack || [],
        appType: currentProject.appType || 'web',
        complexity: currentProject.complexity || 'basic',
        industry: currentProject.industry || 'general',
        features: currentProject.features || []
      })
      
      if (webSearchResult.success) {
        webContext = webSearchResult.knowledge
        console.log('✅ Web context found:', webContext.summary)
      } else {
        console.log('⚠️ No web context found:', webSearchResult.reason)
      }
    } catch (error) {
      console.error('❌ Web search failed:', error)
    }

    try {
      // Check if this is an incremental development request
      const isIncremental = isIncrementalRequest(userPrompt)
      
      // Get conversation context for better AI responses
      const conversationContext = conversationService.getConversationContext()
      
      // Generate AI response with conversation context and web search results
      const response = await simpleAIService.generateCode({
        prompt: userPrompt,
        projectName: projectName || currentProject.name,
        context: {
          currentFiles: currentProject.files,
          activeFile: currentProject.activeFile,
          config: currentProject.config,
          isIncremental: isIncremental,
          existingProject: isIncremental ? currentProject : null,
          conversationContext: conversationContext,
          conversationHistory: conversationService.getConversationHistory(),
          webContext: webContext // Include web search results
        }
      })

      // Add AI response to conversation
      let responseMessage = 'Code generated successfully!'
      let responseText = ''
      let responseType = 'text'
      let responseLanguage = 'javascript'
      
      if (response.type === 'incremental_update') {
        responseMessage = response.message || `Added ${response.newFeatures?.length || 0} new feature(s) to your existing app!`
        responseText = responseMessage
        toast.success(responseMessage)
      } else if (response.type === 'no_changes') {
        responseMessage = response.message || 'No new features to add - these already exist in your app.'
        responseText = responseMessage
        toast.info(responseMessage)
      } else {
        // Enhanced response message with explanation summary
        if (response.explanation && response.explanation.summary) {
          responseMessage = `Code generated successfully! ${response.explanation.summary}`
          responseText = response.explanation.summary
        } else {
          responseMessage = response.message || 'Code generated successfully!'
          responseText = response.message || 'Code generated successfully!'
        }
        toast.success('Code generated successfully!')
      }

      // Prepare streaming response for code
      if (response.files && Object.keys(response.files).length > 0) {
        responseText = Object.entries(response.files)
          .map(([filename, content]) => `// ${filename}\n${content}`)
          .join('\n\n')
        responseType = 'code'
        responseLanguage = 'javascript'
      }

      // Start streaming automatically
      if (responseText) {
        setStreamingResponse(responseText)
        setStreamingType(responseType)
        setStreamingLanguage(responseLanguage)
        setShowStreaming(true)
        setIsStreaming(true)
      }

      // Save AI response to conversation
      await conversationService.addMessage(responseMessage, null, 'assistant')

      const aiMessage = {
        id: Date.now() + 1,
        type: 'assistant',
        content: responseMessage,
        timestamp: new Date(),
        files: response.files || {},
        isIncremental: response.type === 'incremental_update',
        newFeatures: response.newFeatures || []
      }

      setMessages(prev => [...prev, aiMessage])

      // Generate feature recommendations for continuous conversation
      const recommendations = await conversationService.generateFeatureRecommendations()
      setAiRecommendations(recommendations)

      // Store app explanation if available
      if (response.explanation) {
        setAppExplanation(response.explanation)
        setShowExplanation(true)
      }

      // Update project files if new files were generated
      if (response.files && Object.keys(response.files).length > 0) {
        console.log('📁 Updating project files:', Object.keys(response.files))
        Object.entries(response.files).forEach(([filename, content]) => {
          console.log(`📄 Updating file ${filename} with ${content.length} characters`)
          updateFile(filename, content)
        })
        
        if (response.type === 'incremental_update') {
          toast.success(`Added ${response.newFeatures?.length || 0} new feature(s): ${response.newFeatures?.join(', ')}`)
        } else {
          toast.success(`Generated ${Object.keys(response.files).length} files!`)
        }
      }

      // Update project name if provided
      if (response.projectName && response.projectName !== currentProject.name) {
        updateConfig({ name: response.projectName })
        setProjectName(response.projectName)
      }

    } catch (error) {
      console.error('Generation error:', error)
      
      const errorMessage = {
        id: Date.now() + 1,
        type: 'assistant',
        content: `Sorry, I encountered an error: ${error.message}. Please try again.`,
        timestamp: new Date()
      }

      setMessages(prev => [...prev, errorMessage])
      toast.error('Failed to generate code. Please try again.')
    } finally {
      setIsGenerating(false)
    }
  }

  const clearChat = () => {
    setMessages([])
    conversationService.clearConversation()
    toast.success('Chat cleared!')
  }

  // Handle corrections and improvements
  const handleCorrection = async (correctionPrompt) => {
    if (!correctionPrompt.trim() || isGenerating) return

    setPrompt(correctionPrompt)
    await handleGenerate()
  }

  // Load conversation history when component mounts
  useEffect(() => {
    if (currentProject.id) {
      conversationService.loadConversationHistory(currentProject.id)
    }
  }, [currentProject.id])

  console.log('🔧 AIPromptSimplified render - currentProject:', currentProject)
  console.log('🔧 AIPromptSimplified render - prompt:', prompt)
  console.log('🔧 AIPromptSimplified render - isGenerating:', isGenerating)
  
  return (
    <div className="h-full flex flex-col bg-card/50 backdrop-blur-sm relative">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border/50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center">
            <Bot className="h-4 w-4 text-primary-foreground" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">AI Assistant</h3>
            <p className="text-xs text-muted-foreground">Powered by advanced AI models</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 rounded-lg text-xs">
            <Zap className="h-3 w-3" />
            <span>Auto Stream</span>
          </div>
          <button
            onClick={clearChat}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
            title="Clear chat"
          >
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </button>
        </div>
      </div>

      {/* AI Model Selector */}
      <div className="p-4 border-b border-border/50">
        <AIModelSelector 
          aiModel={aiModel}
          setAIModel={setAIModel}
          modelUpdateKey={modelUpdateKey}
          setModelUpdateKey={setModelUpdateKey}
        />
      </div>

      {/* Feature Recommendations */}
      {aiRecommendations.length > 0 && (
        <div className="p-4 border-b border-border/50">
          <h3 className="text-sm font-medium text-muted-foreground mb-3">💡 Suggested Features</h3>
          <div className="space-y-2">
            {aiRecommendations.slice(0, 3).map((rec, index) => (
              <button
                key={index}
                onClick={() => handleCorrection(`Add ${rec.name.toLowerCase()}: ${rec.description}`)}
                className="w-full text-left p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors border border-border/50"
              >
                <div className="font-medium text-sm">{rec.name}</div>
                <div className="text-xs text-muted-foreground mt-1">{rec.description}</div>
                <div className="text-xs text-primary mt-1">Click to add this feature</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Chat Interface */}
      <div className="flex-1 overflow-hidden">
        <AIChatInterface
          messages={messages}
          prompt={prompt}
          setPrompt={setPrompt}
          isGenerating={isGenerating}
          handleGenerate={handleGenerate}
          textareaRef={textareaRef}
          messagesEndRef={messagesEndRef}
          appExplanation={appExplanation}
          setShowExplanation={setShowExplanation}
        />
      </div>

      {/* App Explanation Modal */}
      <AnimatePresence>
        {showExplanation && appExplanation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowExplanation(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-card border border-border rounded-xl shadow-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center">
                    <Info className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-foreground">App Explanation</h2>
                    <p className="text-sm text-muted-foreground">What I created for you</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowExplanation(false)}
                  className="p-2 hover:bg-muted rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto max-h-[calc(80vh-120px)]">
                {/* Summary */}
                {appExplanation.summary && (
                  <div className="mb-6 p-4 bg-muted/50 rounded-lg border border-border">
                    <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Summary
                    </h3>
                    <p className="text-muted-foreground">{appExplanation.summary}</p>
                  </div>
                )}

                {/* Sections */}
                {appExplanation.sections && Object.entries(appExplanation.sections).map(([key, section]) => (
                  <div key={key} className="mb-6">
                    <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      {key === 'overview' && <Info className="w-4 h-4 text-blue-500" />}
                      {key === 'features' && <CheckCircle className="w-4 h-4 text-green-500" />}
                      {key === 'technicalDetails' && <AlertCircle className="w-4 h-4 text-purple-500" />}
                      {key === 'userExperience' && <Sparkles className="w-4 h-4 text-pink-500" />}
                      {key === 'performance' && <AlertTriangle className="w-4 h-4 text-orange-500" />}
                      {key === 'security' && <AlertCircle className="w-4 h-4 text-red-500" />}
                      {section.title || key.charAt(0).toUpperCase() + key.slice(1)}
                    </h3>
                    
                    {section.content && (
                      <p className="text-muted-foreground mb-3">{section.content}</p>
                    )}

                    {section.details && (
                      <ul className="space-y-2">
                        {section.details.map((detail, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            {typeof detail === 'string' ? detail : detail.message || detail}
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.features && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                        {section.features.map((feature, index) => (
                          <div key={index} className="p-3 bg-muted/30 rounded-lg border border-border">
                            <h4 className="font-medium text-foreground mb-1">{feature.name}</h4>
                            <p className="text-sm text-muted-foreground">{feature.description}</p>
                            {feature.benefits && (
                              <div className="mt-2">
                                <p className="text-xs text-muted-foreground mb-1">Benefits:</p>
                                <ul className="text-xs text-muted-foreground space-y-1">
                                  {feature.benefits.map((benefit, idx) => (
                                    <li key={idx} className="flex items-center gap-1">
                                      <div className="w-1 h-1 bg-primary rounded-full" />
                                      {benefit}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {/* Recommendations */}
                {appExplanation.recommendations && appExplanation.recommendations.length > 0 && (
                  <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800">
                    <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-3 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4" />
                      Recommendations
                    </h3>
                    <div className="space-y-2">
                      {appExplanation.recommendations.map((rec, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                            rec.priority === 'high' ? 'bg-red-500' : 
                            rec.priority === 'medium' ? 'bg-yellow-500' : 'bg-blue-500'
                          }`} />
                          <div>
                            <p className="text-sm text-amber-800 dark:text-amber-200">
                              <span className="font-medium">{rec.category}:</span> {rec.suggestion}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Streaming Response Modal */}
      <AnimatePresence>
        {showStreaming && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowStreaming(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-card border border-border rounded-xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center">
                    {streamingEnabled ? (
                      <Zap className="w-4 h-4 text-primary-foreground" />
                    ) : (
                      <ZapOff className="w-4 h-4 text-primary-foreground" />
                    )}
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-foreground">Streaming Response</h2>
                    <p className="text-sm text-muted-foreground">Real-time response like Cursor</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 rounded-lg text-xs">
                    <Zap className="w-3 h-3" />
                    <span>Auto Stream</span>
                  </div>
                  <button
                    onClick={() => setShowStreaming(false)}
                    className="p-2 hover:bg-muted rounded-lg transition-colors"
                  >
                    <X className="w-4 h-4 text-muted-foreground" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-hidden">
                <StreamingResponse
                  response={streamingResponse}
                  type={streamingType}
                  language={streamingLanguage}
                  onComplete={(finalText) => {
                    console.log('✅ Streaming completed:', finalText)
                    setIsStreaming(false)
                  }}
                  onError={(error) => {
                    console.error('❌ Streaming error:', error)
                    setIsStreaming(false)
                  }}
                  showControls={true}
                  autoStart={true}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
