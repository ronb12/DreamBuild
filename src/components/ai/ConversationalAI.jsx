// Conversational AI Component
// Handles continuous conversations, feature recommendations, and industry standards

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  MessageCircle, 
  Lightbulb, 
  CheckCircle, 
  AlertCircle, 
  TrendingUp, 
  Code, 
  Shield, 
  Zap,
  ArrowRight,
  Plus,
  Star,
  Target
} from 'lucide-react'
import conversationService from '../../services/conversationService.js'
import advancedConversationService from '../../services/advancedConversationService.js'
import enhancedConversationService from '../../services/enhancedConversationService.js'
import { useProject } from '../../contexts/ProjectContext.jsx'

const ConversationalAI = () => {
  const { currentProject } = useProject()
  const [messages, setMessages] = useState([])
  const [inputMessage, setInputMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [featureRecommendations, setFeatureRecommendations] = useState([])
  const [industryStandards, setIndustryStandards] = useState(null)
  const [showRecommendations, setShowRecommendations] = useState(false)
  const [conversationId, setConversationId] = useState(null)
  const messagesEndRef = useRef(null)

  // Initialize conversation when component mounts
  useEffect(() => {
    initializeConversation()
  }, [currentProject])

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const initializeConversation = async () => {
    try {
      const projectData = {
        id: currentProject.id || `project_${Date.now()}`,
        name: currentProject.name,
        features: extractFeaturesFromProject(currentProject),
        techStack: currentProject.config ? [
          currentProject.config.language,
          currentProject.config.styling,
          currentProject.config.database,
          currentProject.config.auth
        ].filter(Boolean) : [],
        appType: currentProject.config?.appType || 'web',
        complexity: determineComplexity(currentProject),
        industry: 'general' // Could be enhanced to detect from project name/description
      }

      // Initialize advanced conversation
      const conversation = await advancedConversationService.initializeConversation(projectData)
      setConversationId(conversation.id)
      
      // Load existing messages
      const history = conversationService.getConversationHistory()
      setMessages(history)

      // Generate initial recommendations
      await generateRecommendations()
    } catch (error) {
      console.error('Failed to initialize conversation:', error)
    }
  }

  const extractFeaturesFromProject = (project) => {
    const features = []
    const files = project.files || {}
    
    // Analyze files to extract features
    Object.values(files).forEach(content => {
      if (typeof content === 'string') {
        if (content.includes('authentication') || content.includes('login')) features.push('Authentication')
        if (content.includes('database') || content.includes('firebase')) features.push('Database')
        if (content.includes('responsive') || content.includes('mobile')) features.push('Responsive Design')
        if (content.includes('api') || content.includes('fetch')) features.push('API Integration')
        if (content.includes('form') || content.includes('input')) features.push('Form Handling')
        if (content.includes('routing') || content.includes('router')) features.push('Routing')
        if (content.includes('state') || content.includes('useState')) features.push('State Management')
        if (content.includes('test') || content.includes('jest')) features.push('Testing')
      }
    })

    return [...new Set(features)] // Remove duplicates
  }

  const determineComplexity = (project) => {
    const fileCount = Object.keys(project.files || {}).length
    const features = extractFeaturesFromProject(project)
    
    if (fileCount > 10 || features.length > 8) return 'advanced'
    if (fileCount > 5 || features.length > 4) return 'intermediate'
    return 'basic'
  }

  const generateRecommendations = async () => {
    try {
      const recommendations = await conversationService.generateFeatureRecommendations()
      setFeatureRecommendations(recommendations)
      
      // Also check industry standards
      const standards = await conversationService.checkIndustryStandards({
        features: extractFeaturesFromProject(currentProject)
      })
      setIndustryStandards(standards)
    } catch (error) {
      console.error('Failed to generate recommendations:', error)
    }
  }

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return

    const userMessage = inputMessage.trim()
    setInputMessage('')
    setIsLoading(true)

    // Add user message
    const userMsg = {
      id: `msg_${Date.now()}`,
      type: 'user',
      content: userMessage,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMsg])

    try {
      // Process message with enhanced conversation service (includes language understanding)
      const response = await enhancedConversationService.processUserMessage(
        'current_user', // In a real app, this would be the actual user ID
        userMessage,
        { 
          projectContext: currentProject,
          conversationId: conversationId
        }
      )
      
      const aiMsg = {
        id: `msg_${Date.now()}_ai`,
        type: 'ai',
        content: response.message,
        analysis: response.analysis,
        suggestions: response.suggestions,
        nextSteps: response.nextSteps,
        confidence: response.confidence,
        timestamp: new Date()
      }

      setMessages(prev => [...prev, aiMsg])

      // Regenerate recommendations after conversation
      await generateRecommendations()

    } catch (error) {
      console.error('Failed to send message:', error)
      const errorMsg = {
        id: `msg_${Date.now()}_error`,
        type: 'error',
        content: 'Sorry, I encountered an error. Please try again.',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMsg])
    } finally {
      setIsLoading(false)
    }
  }


  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleRecommendationClick = (recommendation) => {
    const message = `I'd like to add: ${recommendation.name} - ${recommendation.description}`
    setInputMessage(message)
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'critical': return 'text-red-500'
      case 'high': return 'text-orange-500'
      case 'medium': return 'text-yellow-500'
      case 'low': return 'text-green-500'
      default: return 'text-gray-500'
    }
  }

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 'critical': return <AlertCircle className="h-4 w-4" />
      case 'high': return <TrendingUp className="h-4 w-4" />
      case 'medium': return <Target className="h-4 w-4" />
      case 'low': return <Star className="h-4 w-4" />
      default: return <CheckCircle className="h-4 w-4" />
    }
  }

  return (
    <div className="h-full flex flex-col bg-card border border-border rounded-lg overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border bg-muted/30">
        <div className="flex items-center gap-2">
          <MessageCircle className="h-5 w-5 text-primary" />
          <h3 className="font-semibold text-foreground">AI Assistant</h3>
          <span className="text-xs bg-green-500 text-white px-2 py-1 rounded">Online</span>
        </div>
        <button
          onClick={() => setShowRecommendations(!showRecommendations)}
          className="flex items-center gap-1 px-3 py-1 bg-primary text-primary-foreground rounded-md text-sm hover:bg-primary/90 transition-colors"
        >
          <Lightbulb className="h-4 w-4" />
          Recommendations
        </button>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            <AnimatePresence>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.type === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : message.type === 'error'
                        ? 'bg-red-100 text-red-800 border border-red-200'
                        : 'bg-muted text-foreground'
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                    
                    {/* Enhanced AI Response Features */}
                    {message.type === 'ai' && message.analysis && (
                      <div className="mt-2 pt-2 border-t border-border/20">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span>Intent: {message.analysis.intent?.type || 'Unknown'}</span>
                          <span className={`${
                            message.confidence > 0.8 ? 'text-green-500' :
                            message.confidence > 0.5 ? 'text-yellow-500' : 'text-red-500'
                          }`}>
                            {message.confidence > 0.8 ? 'High confidence' :
                             message.confidence > 0.5 ? 'Medium confidence' : 'Low confidence'}
                          </span>
                        </div>
                        
                        {message.nextSteps && message.nextSteps.length > 0 && (
                          <div className="mt-2">
                            <div className="flex items-center gap-1 text-xs font-medium text-muted-foreground mb-1">
                              <Target className="h-3 w-3" />
                              Next Steps:
                            </div>
                            <ul className="text-xs text-muted-foreground space-y-1">
                              {message.nextSteps.map((step, index) => (
                                <li key={index} className="flex items-start gap-1">
                                  <span className="text-primary">•</span>
                                  <span>{step}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}
                    
                    <p className="text-xs opacity-70 mt-1">
                      {new Date(message.timestamp).toLocaleTimeString()}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-muted text-foreground p-3 rounded-lg">
                  <div className="flex items-center gap-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary"></div>
                    <span className="text-sm">AI is thinking...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask me anything about your app..."
                className="flex-1 px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                disabled={isLoading}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isLoading}
                className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Send
              </button>
            </div>
          </div>
        </div>

        {/* Recommendations Panel */}
        <AnimatePresence>
          {showRecommendations && (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 350, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              className="border-l border-border bg-muted/20 overflow-hidden"
            >
              <div className="p-4 border-b border-border">
                <h4 className="font-semibold text-foreground flex items-center gap-2">
                  <Lightbulb className="h-4 w-4" />
                  Smart Recommendations
                </h4>
              </div>
              
              <div className="overflow-y-auto h-full">
                {/* Feature Recommendations */}
                <div className="p-4">
                  <h5 className="font-medium text-foreground mb-3 flex items-center gap-2">
                    <Code className="h-4 w-4" />
                    Suggested Features
                  </h5>
                  <div className="space-y-2">
                    {featureRecommendations.slice(0, 5).map((rec, index) => (
                      <div
                        key={index}
                        onClick={() => handleRecommendationClick(rec)}
                        className="p-3 bg-card border border-border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h6 className="font-medium text-sm text-foreground">{rec.name}</h6>
                          <div className={`flex items-center gap-1 ${getPriorityColor(rec.priority)}`}>
                            {getPriorityIcon(rec.priority)}
                            <span className="text-xs capitalize">{rec.priority}</span>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground mb-2">{rec.description}</p>
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                          {rec.category}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Industry Standards */}
                {industryStandards && (
                  <div className="p-4 border-t border-border">
                    <h5 className="font-medium text-foreground mb-3 flex items-center gap-2">
                      <Shield className="h-4 w-4" />
                      Industry Standards
                    </h5>
                    <div className="space-y-3">
                      {Object.entries(industryStandards).map(([category, data]) => (
                        <div key={category} className="bg-card border border-border rounded-lg p-3">
                          <div className="flex items-center justify-between mb-2">
                            <h6 className="font-medium text-sm text-foreground capitalize">
                              {category.replace('_', ' ')}
                            </h6>
                            <span className="text-sm font-semibold text-primary">
                              {data.score}%
                            </span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div
                              className="bg-primary h-2 rounded-full transition-all duration-300"
                              style={{ width: `${data.score}%` }}
                            />
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">
                            {data.implemented}/{data.total} implemented
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default ConversationalAI
