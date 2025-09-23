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
import TemplateSelector from './TemplateSelector'
import RecommendationPanel from './RecommendationPanel'
import WebSearchPanel from './WebSearchPanel'
import MessageBubble from './chat/MessageBubble'
import RecommendationCard from './chat/RecommendationCard'
import CursorMessageBubble from './chat/CursorMessageBubble'
import AIAgentPanel from './aiAgent/AIAgentPanel'
import aiAgentService from '../services/aiAgentService'
import toast from 'react-hot-toast'

const AIPrompt = () => {
  const { currentProject, updateFile, updateConfig } = useProject()
  const [prompt, setPrompt] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [showAISettings, setShowAISettings] = useState(false)
  const [showServiceStatus, setShowServiceStatus] = useState(false)
  const [showTemplateBrowser, setShowTemplateBrowser] = useState(false)
  const [showTemplateSelector, setShowTemplateSelector] = useState(false)
  const [showRecommendations, setShowRecommendations] = useState(false)
  const [showWebSearch, setShowWebSearch] = useState(false)
  const [webSearchResults, setWebSearchResults] = useState(null)
  const [selectedService, setSelectedService] = useState('local-ai')
  const [aiModel, setAIModel] = useState('auto')
  const [showModelSelector, setShowModelSelector] = useState(false)
  const [suggestions, setSuggestions] = useState([])
  const [generationHistory, setGenerationHistory] = useState([])
  const [serviceStatus, setServiceStatus] = useState({})
  
  // Chat conversation state
  const [messages, setMessages] = useState([])
  const [aiRecommendations, setAiRecommendations] = useState([])
  const [showChatHistory, setShowChatHistory] = useState(true)
  const [showAIAgent, setShowAIAgent] = useState(false)
  
  const textareaRef = useRef(null)
  const messagesEndRef = useRef(null)

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

  const handleTemplateSelect = async (template) => {
    console.log('Template selected:', template)
    
    // Set the prompt to use the template
    setPrompt(`Create a ${template.name} using the ${template.name} template`)
    
    // Force template-first generation
    const context = {
      useTemplates: true,
      selectedTemplate: template,
      startTime: Date.now()
    }
    
    // Generate using the template
    await handleGenerateWithContext(context)
  }

  const handleGenerateWithContext = async (context = {}) => {
    if (!prompt.trim()) {
      toast.error('Please enter a description of what you want to build')
      return
    }

    setIsGenerating(true)
    setShowAIAgent(false)

    try {
      const result = await simpleAIService.generateCode(prompt, {
        ...context,
        projectType: currentProject?.type || 'web',
        existingFiles: currentProject?.files || {}
      })

      if (result.success) {
        // Update project files
        Object.entries(result.files).forEach(([filename, content]) => {
          updateFile(filename, content)
        })

        // Show success message
        const method = result.metadata?.method || 'ai'
        const fileCount = Object.keys(result.files).length
        toast.success(`Generated ${fileCount} files using ${method === 'template-first' ? 'Template-First' : 'AI'} approach!`)
        
        // Add to conversation history
        addToConversationHistory(prompt, result.files, 'user')
        addToConversationHistory('Generated successfully!', result.files, 'assistant')
      } else {
        toast.error(result.error || 'Generation failed')
      }
    } catch (error) {
      console.error('Generation error:', error)
      toast.error('Generation failed. Please try again.')
    } finally {
      setIsGenerating(false)
    }
  }

  const handleGenerate = async () => {
    await handleGenerateWithContext()
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
    } else if (lowerPrompt.includes('react')) {
      config.language = 'javascript'
    }

    // Auto-detect framework
    if (lowerPrompt.includes('react')) {
      config.framework = 'react'
    } else if (lowerPrompt.includes('vue')) {
      config.framework = 'vue'
    } else if (lowerPrompt.includes('angular')) {
      config.framework = 'angular'
    } else if (lowerPrompt.includes('next')) {
      config.framework = 'nextjs'
    }

    // Update project config
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

    if (lowerPrompt.includes('auth') || lowerPrompt.includes('login')) {
      recommendations.push({
        id: Date.now() + Math.random(),
        type: 'security',
        title: 'Implement Authentication',
        description: 'Add secure user authentication and authorization',
        action: 'Set up JWT tokens and protected routes',
        priority: 'high'
      })
    }

    if (lowerPrompt.includes('payment') || lowerPrompt.includes('stripe')) {
      recommendations.push({
        id: Date.now() + Math.random(),
        type: 'integration',
        title: 'Add Payment Processing',
        description: 'Integrate Stripe or PayPal for secure payments',
        action: 'Set up payment gateway and webhooks',
        priority: 'high'
      })
    }

    if (lowerPrompt.includes('mobile') || lowerPrompt.includes('responsive')) {
      recommendations.push({
        id: Date.now() + Math.random(),
        type: 'ui',
        title: 'Optimize for Mobile',
        description: 'Ensure responsive design and mobile performance',
        action: 'Test on various devices and screen sizes',
        priority: 'medium'
      })
    }

    if (lowerPrompt.includes('api') || lowerPrompt.includes('backend')) {
      recommendations.push({
        id: Date.now() + Math.random(),
        type: 'architecture',
        title: 'Add API Documentation',
        description: 'Document your API endpoints with Swagger/OpenAPI',
        action: 'Generate API documentation and examples',
        priority: 'medium'
      })
    }

    if (lowerPrompt.includes('test') || lowerPrompt.includes('testing')) {
      recommendations.push({
        id: Date.now() + Math.random(),
        type: 'quality',
        title: 'Add Unit Tests',
        description: 'Write comprehensive tests for your components',
        action: 'Set up Jest and React Testing Library',
        priority: 'medium'
      })
    }

    if (lowerPrompt.includes('deploy') || lowerPrompt.includes('production')) {
      recommendations.push({
        id: Date.now() + Math.random(),
        type: 'deployment',
        title: 'Set up CI/CD',
        description: 'Automate testing and deployment pipeline',
        action: 'Configure GitHub Actions or similar',
        priority: 'high'
      })
    }

    if (lowerPrompt.includes('security') || lowerPrompt.includes('secure')) {
      recommendations.push({
        id: Date.now() + Math.random(),
        type: 'security',
        title: 'Add Input Validation',
        description: 'Validate all user inputs to prevent security issues',
        action: 'Implement client and server-side validation',
        priority: 'high'
      })
    }

    setAiRecommendations(recommendations)
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
      'auto': 'Auto (Recommended)'
    }
    return models[modelId] || 'Unknown Model'
  }

  const getAvailableModels = () => {
    return [
      { id: 'auto', name: 'Auto (Recommended)', description: 'Automatically selects the best model', type: 'Auto Selection', ram: 'Smart' },
      { id: 'codellama-7b', name: 'CodeLlama 7B', description: 'Fast and efficient code generation', type: 'Code Generation', ram: '8GB' },
      { id: 'codellama-13b', name: 'CodeLlama 13B', description: 'Higher quality code generation', type: 'Code Generation', ram: '16GB' },
      { id: 'codellama-34b', name: 'CodeLlama 34B', description: 'Best quality code generation', type: 'Code Generation', ram: '32GB' },
      { id: 'starcoder-15b', name: 'StarCoder 15B', description: 'Excellent code completion', type: 'Code Completion', ram: '24GB' },
      { id: 'deepseek-coder', name: 'DeepSeek Coder', description: 'High-performance generation', type: 'High Performance', ram: '12GB' },
      { id: 'wizardcoder-7b', name: 'WizardCoder 7B', description: 'Great at following instructions', type: 'Instruction Following', ram: '10GB' },
      { id: 'phi3-mini', name: 'Phi-3 Mini', description: 'Lightweight but powerful', type: 'Lightweight General', ram: '6GB' },
      { id: 'llama3-8b', name: 'Llama 3 8B', description: 'General purpose model', type: 'General Purpose', ram: '10GB' }
    ]
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
      {/* Minimal Header - Cursor Style */}
      <div className="px-4 py-3 border-b border-border/50 bg-background/50">
        <div className="flex items-center justify-between">
          {/* AI Model Selector - Minimal */}
          <div className="relative model-selector">
            <button
              onClick={() => setShowModelSelector(!showModelSelector)}
              className="flex items-center gap-2 px-3 py-1.5 text-sm bg-transparent hover:bg-muted/50 text-foreground rounded-md border border-border/50 transition-colors"
              title="Select AI Model"
            >
              <span className="font-medium">{getModelDisplayName(aiModel)}</span>
              <span className="text-muted-foreground text-xs">▼</span>
            </button>
            
            {/* Model Dropdown */}
            {showModelSelector && (
              <div className="absolute top-full left-0 mt-1 w-64 bg-background border border-border rounded-md shadow-lg z-50">
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
                        className={`w-full flex items-center justify-between px-2 py-1.5 text-sm hover:bg-muted rounded transition-colors ${
                          aiModel === model.id ? 'bg-blue-50 dark:bg-blue-900/20' : ''
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          {/* Checkbox for model selection */}
                          <div className="flex-shrink-0">
                            <div className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-all duration-200 ${
                              aiModel === model.id
                                ? 'border-blue-500 bg-blue-500'
                                : 'border-gray-300 bg-white'
                            }`}>
                              {aiModel === model.id && (
                                <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              )}
                            </div>
                          </div>
                          <span className="font-medium">{model.name}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">{model.ram}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-1">
            {/* AI Model Selector */}
            <div className="relative model-selector">
              <button
                onClick={() => setShowModelSelector(!showModelSelector)}
                className="flex items-center gap-1.5 px-2.5 py-1 text-xs bg-muted hover:bg-muted/80 text-foreground rounded border border-border transition-colors"
                title="Select AI Model"
              >
                <Bot className="h-3 w-3" />
                <span className="font-medium">{getModelDisplayName(aiModel)}</span>
                <span className="text-muted-foreground text-xs">▼</span>
              </button>
              
              {/* Model Dropdown */}
              {showModelSelector && (
                <div className="absolute top-full right-0 mt-1 w-72 bg-background border border-border rounded-lg shadow-lg z-50">
                  <div className="p-3 border-b border-border">
                    <h4 className="text-sm font-medium text-foreground">AI Model</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">Choose the AI model for code generation</p>
                  </div>
                  
                  <div className="max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent">
                    {getAvailableModels().map((model) => (
                      <button
                        key={model.id}
                        onClick={() => {
                          setAIModel(model.id)
                          setShowModelSelector(false)
                          // Update the AI service with new model
                          if (simpleAIService?.setModel) {
                            simpleAIService.setModel(model.id)
                          }
                          // Show feedback for model change
                          if (model.id === 'auto') {
                            toast.success('AI will automatically select the best model for each request')
                          } else {
                            toast.success(`Switched to ${model.name}`)
                          }
                        }}
                        className={`w-full flex items-center justify-between p-3 text-xs hover:bg-muted transition-colors ${
                          aiModel === model.id ? 'bg-blue-50 dark:bg-blue-900/20' : ''
                        }`}
                      >
                        <div className="flex items-center gap-3 flex-1">
                          {/* Checkbox for model selection */}
                          <div className="flex-shrink-0">
                            <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200 ${
                              aiModel === model.id
                                ? 'border-blue-500 bg-blue-500 shadow-sm'
                                : 'border-gray-300 bg-white hover:border-blue-400'
                            }`}>
                              {aiModel === model.id && (
                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              )}
                            </div>
                          </div>
                          
                          {/* Model info */}
                          <div className="flex flex-col items-start flex-1">
                            <span className="font-medium text-foreground">{model.name}</span>
                            <span className="text-muted-foreground text-xs mt-0.5">{model.description}</span>
                          </div>
                        </div>
                        
                        <div className="flex flex-col items-end text-xs text-muted-foreground">
                          <span>{model.ram}</span>
                          <span className={`px-1.5 py-0.5 rounded text-xs mt-0.5 ${
                            model.type === 'Code Generation' ? 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-300' :
                            model.type === 'Code Completion' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300' :
                            model.type === 'High Performance' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300' :
                            model.type === 'Auto Selection' ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/20 dark:text-orange-300' :
                            'bg-gray-100 text-gray-700 dark:bg-gray-900/20 dark:text-gray-300'
                          }`}>
                            {model.type}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                  
                  <div className="p-2.5 border-t border-border bg-muted/30">
                    <p className="text-xs text-muted-foreground">
                      💡 <strong>Auto</strong> selects the best model based on your request complexity
                    </p>
                  </div>
                </div>
              )}
            </div>
            <button
              onClick={() => setShowChatHistory(!showChatHistory)}
              className="p-1.5 hover:bg-muted rounded transition-colors"
              title={showChatHistory ? "Hide Chat History" : "Show Chat History"}
            >
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </button>
            <button
              onClick={() => setShowAIAgent(!showAIAgent)}
              className="p-1.5 hover:bg-muted rounded transition-colors"
              title={showAIAgent ? "Hide AI Agent" : "Show AI Agent"}
            >
              <Bot className="h-4 w-4 text-muted-foreground" />
            </button>
            <button
              onClick={() => setShowTemplateBrowser(true)}
              className="p-1.5 hover:bg-muted rounded transition-colors"
              title="Browse Templates (1000+)"
            >
              <Code className="h-4 w-4" />
            </button>
            <button
              onClick={() => setShowTemplateSelector(true)}
              className="p-1.5 hover:bg-muted rounded transition-colors"
              title="Choose Template (Template-First)"
            >
              <Zap className="h-4 w-4" />
            </button>
            <button
              onClick={() => setShowRecommendations(true)}
              className="p-1.5 hover:bg-muted rounded transition-colors"
              title="AI Recommendations & Production Analysis"
            >
              <Sparkles className="h-4 w-4" />
            </button>
            <button
              onClick={() => setShowWebSearch(true)}
              className="p-1.5 hover:bg-muted rounded transition-colors"
              title="Web Knowledge Search"
            >
              <Search className="h-4 w-4" />
            </button>
            <button
              onClick={() => setShowServiceStatus(true)}
              className="p-1.5 hover:bg-muted rounded transition-colors"
              title="AI Service Status"
            >
              <BarChart3 className="h-4 w-4" />
            </button>
            <button
              onClick={() => setShowAISettings(true)}
              className="p-1.5 hover:bg-muted rounded transition-colors"
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

      {/* Cursor-Style Chat Interface */}
      <div className="flex-1 flex overflow-hidden">
        {/* AI Agent Panel */}
        {showAIAgent && (
          <div className="w-80 border-r border-border flex-shrink-0">
            <AIAgentPanel 
              onProgress={(progress) => {
                // Handle agent progress updates
                console.log('AI Agent Progress:', progress)
              }}
              onTaskComplete={(task) => {
                // Handle task completion
                console.log('Task completed:', task)
              }}
            />
          </div>
        )}

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Chat Messages Area */}
          <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent">
            {messages.length === 0 ? (
              <div className="h-full flex items-center justify-center p-8">
                <div className="text-center max-w-md">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="h-8 w-8 text-blue-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Ask me anything</h3>
                  <p className="text-sm text-muted-foreground">
                    I can help you build applications, fix bugs, explain code, and much more.
                  </p>
                </div>
              </div>
            ) : (
              <div className="p-4 space-y-4">
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
                      <CursorMessageBubble
                        message={message}
                        onCopy={handleCopyMessage}
                        onFeedback={handleFeedback}
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
                <div ref={messagesEndRef} />
              </div>
            )}
          </div>

          {/* AI Recommendations - Cursor Style */}
          {aiRecommendations.length > 0 && (
            <div className="border-t border-border/50 bg-muted/30 p-3">
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb className="h-4 w-4 text-yellow-500" />
                <span className="text-sm font-medium text-foreground">Suggestions</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {aiRecommendations.slice(0, 4).map((recommendation) => (
                  <button
                    key={recommendation.id}
                    onClick={() => handleApplyRecommendation(recommendation)}
                    className="inline-flex items-center gap-1 px-3 py-1.5 text-xs bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/20 dark:hover:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full border border-blue-200 dark:border-blue-700 transition-colors"
                  >
                    <span>{recommendation.title}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Cursor-Style Input Area */}
        <div className="border-t border-border/50 bg-background">
          <div className="relative">
            <div className="flex items-end gap-2 p-3">
              <div className="flex-1 relative">
            <textarea
              ref={textareaRef}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyPress={handleKeyPress}
                  placeholder="Ask me anything..."
                  className="w-full resize-y bg-transparent border-0 outline-none text-foreground placeholder:text-muted-foreground text-sm leading-relaxed"
                  style={{ minHeight: '120px', maxHeight: '300px' }}
              disabled={isGenerating}
                  rows={4}
                />
              </div>
              <button
                onClick={handleGenerate}
                disabled={!prompt.trim() || isGenerating}
                className="flex-shrink-0 w-8 h-8 rounded-md bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
              >
                {isGenerating ? (
                  <Loader2 className="h-4 w-4 text-white animate-spin" />
                ) : (
                  <Send className="h-4 w-4 text-white" />
                )}
              </button>
            </div>
            
            {/* Cursor-style bottom bar */}
            <div className="px-3 pb-2 flex items-center justify-between text-xs text-muted-foreground">
              <div className="flex items-center gap-4">
                <span>Press Enter to send</span>
                {prompt.length > 0 && (
                  <span>{prompt.length} characters</span>
                )}
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>AI Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Template Browser */}
      <TemplateBrowser 
        isOpen={showTemplateBrowser} 
        onClose={() => setShowTemplateBrowser(false)}
        onTemplateSelect={(template) => {
          console.log('Template selected:', template)
        }}
      />

      {/* Template Selector */}
      <TemplateSelector
        isOpen={showTemplateSelector}
        onClose={() => setShowTemplateSelector(false)}
        onTemplateSelect={handleTemplateSelect}
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
