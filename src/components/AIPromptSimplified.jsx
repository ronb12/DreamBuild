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
import conversationService from '../services/conversationService'
import AIModelSelector from './ai/AIModelSelector'
import AIChatInterface from './ai/AIChatInterface'

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

    try {
      // Check if this is an incremental development request
      const isIncremental = isIncrementalRequest(userPrompt)
      
      // Get conversation context for better AI responses
      const conversationContext = conversationService.getConversationContext()
      
      // Generate AI response with conversation context
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
          conversationHistory: conversationService.getConversationHistory()
        }
      })

      // Add AI response to conversation
      let responseMessage = 'Code generated successfully!'
      
      if (response.type === 'incremental_update') {
        responseMessage = response.message || `Added ${response.newFeatures?.length || 0} new feature(s) to your existing app!`
        toast.success(responseMessage)
      } else if (response.type === 'no_changes') {
        responseMessage = response.message || 'No new features to add - these already exist in your app.'
        toast.info(responseMessage)
      } else {
        responseMessage = response.message || 'Code generated successfully!'
        toast.success(responseMessage)
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
    <div className="h-full flex flex-col bg-card/50 backdrop-blur-sm">
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
        />
      </div>
    </div>
  )
}
