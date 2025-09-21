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
  Search
} from 'lucide-react'
import simpleAIService from '../services/simpleAIService'
import AIServiceStatus from './AIServiceStatus'
import TemplateBrowser from './TemplateBrowser'
import RecommendationPanel from './RecommendationPanel'
import WebSearchPanel from './WebSearchPanel'
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
  const textareaRef = useRef(null)

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px'
    }
  }, [prompt])

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

    setIsGenerating(true)
    
    try {
      // Update generation history
      setGenerationHistory(prev => [prompt, ...prev.slice(0, 4)])

      // Debug: Check if simpleAIService and generateCode method exist
      console.log('AI Service object:', simpleAIService)
      console.log('AI Service generateCode method:', typeof simpleAIService?.generateCode)
      
      if (!simpleAIService || typeof simpleAIService.generateCode !== 'function') {
        throw new Error('AI Service not properly initialized. generateCode method not found.')
      }

      // Generate code using AI service (now includes web search)
      const generatedFiles = await simpleAIService.generateCode(prompt, currentProject.config)
      
      // Store web search results if available
      if (generatedFiles._webSearchResults) {
        setWebSearchResults(generatedFiles._webSearchResults)
        delete generatedFiles._webSearchResults // Remove from files
      }
      
      // Update project files
      Object.entries(generatedFiles).forEach(([filename, content]) => {
        updateFile(filename, content)
      })

      // Auto-configure project based on prompt
      autoConfigureProject(prompt)

      toast.success('Code generated successfully!')
      
      // Clear prompt after successful generation
      setPrompt('')

    } catch (error) {
      console.error('AI generation error:', error)
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

  const handleSuggestionClick = (suggestion) => {
    // Background suggestion logic - UI removed but functionality preserved
    console.log(`Suggestion available: ${suggestion.text}`)
  }

  const handleHistoryClick = (historyItem) => {
    // Background history logic - UI removed but functionality preserved
    console.log(`History item available: ${historyItem}`)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
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

      {/* Prompt Input */}
      <div className="flex-1 p-3 space-y-3">
        <div className="space-y-2">
          <label className="text-sm font-medium">Describe what you want to build</label>
          <div className="relative">
            <textarea
              ref={textareaRef}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Create a healthy food tips website with nutrition advice and meal planning features..."
              className="w-full p-3 border border-border rounded-md bg-black resize-none min-h-[120px] focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              disabled={isGenerating}
            />
            <div className="absolute bottom-2 right-2 text-xs text-muted-foreground">
              {prompt.length}/2000
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
          Press Ctrl+Enter to generate
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
