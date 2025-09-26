// Enhanced AI Chat Interface with Advanced Language Understanding
import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Send, 
  Bot,
  User,
  Copy,
  ThumbsUp,
  ThumbsDown,
  Loader2,
  Lightbulb,
  HelpCircle,
  MessageSquare,
  Sparkles,
  Brain,
  BookOpen
} from 'lucide-react'
import { toast } from 'react-hot-toast'
import enhancedConversationService from '../../services/enhancedConversationService'
import { useAuth } from '../../contexts/AuthContext'

const EnhancedAIChatInterface = ({ 
  messages, 
  setMessages,
  prompt, 
  setPrompt, 
  isGenerating, 
  handleGenerate,
  textareaRef,
  messagesEndRef 
}) => {
  const { user } = useAuth()
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [currentSuggestions, setCurrentSuggestions] = useState([])
  const [conversationInsights, setConversationInsights] = useState(null)
  const [showInsights, setShowInsights] = useState(false)

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // Get conversation insights
  useEffect(() => {
    if (user && messages.length > 0) {
      const insights = enhancedConversationService.getConversationInsights(user.uid)
      setConversationInsights(insights)
    }
  }, [messages, user])

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleGenerate()
    }
  }

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    toast.success('Copied to clipboard!')
  }

  const handleFeedback = (messageId, type) => {
    toast.success(`Feedback ${type === 'up' ? 'sent' : 'sent'}`)
  }

  const handleSuggestionClick = (suggestion) => {
    setPrompt(suggestion)
    setShowSuggestions(false)
    textareaRef.current?.focus()
  }

  const handleEnhancedGenerate = async () => {
    if (!prompt.trim() || isGenerating) return

    try {
      // Add user message
      const userMessage = {
        id: Date.now(),
        type: 'user',
        content: prompt,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, userMessage])

      // Process with enhanced conversation service
      const response = await enhancedConversationService.processUserMessage(
        user?.uid || 'anonymous',
        prompt,
        { projectContext: 'current' }
      )

      // Add AI response
      const aiMessage = {
        id: Date.now() + 1,
        type: 'assistant',
        content: response.message,
        analysis: response.analysis,
        suggestions: response.suggestions,
        nextSteps: response.nextSteps,
        confidence: response.confidence,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, aiMessage])

      // Update suggestions
      setCurrentSuggestions(response.suggestions || [])
      setShowSuggestions(response.suggestions && response.suggestions.length > 0)

      // Clear input
      setPrompt('')

    } catch (error) {
      console.error('Error generating response:', error)
      toast.error('Failed to generate response')
    }
  }

  const getConfidenceColor = (confidence) => {
    if (confidence > 0.8) return 'text-green-500'
    if (confidence > 0.5) return 'text-yellow-500'
    return 'text-red-500'
  }

  const getConfidenceText = (confidence) => {
    if (confidence > 0.8) return 'High confidence'
    if (confidence > 0.5) return 'Medium confidence'
    return 'Low confidence'
  }

  return (
    <div className="flex flex-col h-full">
      {/* Enhanced Header with Insights */}
      <div className="flex items-center justify-between p-4 border-b border-border/50">
        <div className="flex items-center gap-2">
          <Brain className="h-5 w-5 text-primary" />
          <span className="font-semibold">Enhanced AI Assistant</span>
          {conversationInsights && (
            <span className="text-xs text-muted-foreground">
              ({conversationInsights.messageCount} messages)
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowInsights(!showInsights)}
            className="p-1.5 hover:bg-muted rounded-lg transition-colors"
            title="Conversation Insights"
          >
            <Sparkles className="h-4 w-4 text-muted-foreground" />
          </button>
          <button
            onClick={() => setShowSuggestions(!showSuggestions)}
            className="p-1.5 hover:bg-muted rounded-lg transition-colors"
            title="Suggestions"
          >
            <Lightbulb className="h-4 w-4 text-muted-foreground" />
          </button>
        </div>
      </div>

      {/* Conversation Insights Panel */}
      <AnimatePresence>
        {showInsights && conversationInsights && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="p-4 bg-muted/30 border-b border-border/50"
          >
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-medium">Messages:</span> {conversationInsights.messageCount}
              </div>
              <div>
                <span className="font-medium">Duration:</span> {Math.round(conversationInsights.duration / 1000)}s
              </div>
              <div>
                <span className="font-medium">Intent:</span> {conversationInsights.context?.intent?.type || 'Unknown'}
              </div>
              <div>
                <span className="font-medium">Confidence:</span> 
                <span className={`ml-1 ${getConfidenceColor(conversationInsights.context?.intent?.confidence || 0)}`}>
                  {getConfidenceText(conversationInsights.context?.intent?.confidence || 0)}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Suggestions Panel */}
      <AnimatePresence>
        {showSuggestions && currentSuggestions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="p-4 bg-blue-50 dark:bg-blue-900/20 border-b border-border/50"
          >
            <div className="flex items-center gap-2 mb-2">
              <Lightbulb className="h-4 w-4 text-blue-500" />
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Suggestions</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {currentSuggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="px-3 py-1.5 bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-300 rounded-lg text-sm hover:bg-blue-200 dark:hover:bg-blue-700 transition-colors"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`flex gap-3 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                message.type === 'user' 
                  ? 'bg-primary text-primary-foreground order-2' 
                  : 'bg-muted text-muted-foreground'
              }`}>
                {message.type === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
              </div>
              
              <div className={`max-w-[80%] ${message.type === 'user' ? 'order-1' : ''}`}>
                <div className={`rounded-2xl px-4 py-3 ${
                  message.type === 'user'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-foreground'
                }`}>
                  <div className="text-sm whitespace-pre-wrap">{message.content}</div>
                  
                  {/* Enhanced AI Response Features */}
                  {message.type === 'assistant' && message.analysis && (
                    <div className="mt-2 pt-2 border-t border-border/20">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>Intent: {message.analysis.intent?.type || 'Unknown'}</span>
                        <span className={`${getConfidenceColor(message.confidence || 0)}`}>
                          {getConfidenceText(message.confidence || 0)}
                        </span>
                      </div>
                      
                      {message.nextSteps && message.nextSteps.length > 0 && (
                        <div className="mt-2">
                          <div className="flex items-center gap-1 text-xs font-medium text-muted-foreground mb-1">
                            <BookOpen className="h-3 w-3" />
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
                </div>
                
                {/* Message Actions */}
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => copyToClipboard(message.content)}
                    className="p-1 hover:bg-muted rounded transition-colors"
                    title="Copy message"
                  >
                    <Copy className="h-3 w-3 text-muted-foreground" />
                  </button>
                  
                  {message.type === 'assistant' && (
                    <>
                      <button
                        onClick={() => handleFeedback(message.id, 'up')}
                        className="p-1 hover:bg-muted rounded transition-colors"
                        title="Good response"
                      >
                        <ThumbsUp className="h-3 w-3 text-muted-foreground" />
                      </button>
                      <button
                        onClick={() => handleFeedback(message.id, 'down')}
                        className="p-1 hover:bg-muted rounded transition-colors"
                        title="Poor response"
                      >
                        <ThumbsDown className="h-3 w-3 text-muted-foreground" />
                      </button>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {/* Loading indicator */}
        {isGenerating && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex gap-3 justify-start"
          >
            <div className="w-8 h-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center">
              <Bot className="h-4 w-4" />
            </div>
            <div className="bg-muted text-foreground rounded-2xl px-4 py-3">
              <div className="flex items-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin" />
                <span className="text-sm">AI is thinking...</span>
              </div>
            </div>
          </motion.div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Enhanced Input Area */}
      <div className="p-4 border-t border-border">
        <div className="flex gap-2">
          <textarea
            ref={textareaRef}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Describe what you want to build... (Enhanced AI will understand you better!)"
            className="flex-1 min-h-[44px] max-h-32 px-4 py-3 bg-background border border-border rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            disabled={isGenerating}
          />
          <button
            onClick={handleEnhancedGenerate}
            disabled={!prompt.trim() || isGenerating}
            className="px-4 py-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
          >
            {isGenerating ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}
          </button>
        </div>
        
        {/* Quick Suggestions */}
        {currentSuggestions.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2">
            {currentSuggestions.slice(0, 3).map((suggestion, index) => (
              <button
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className="px-2 py-1 bg-muted hover:bg-muted/80 rounded text-xs transition-colors"
              >
                {suggestion}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default EnhancedAIChatInterface
