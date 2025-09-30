import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Send, 
  Sparkles, 
  Settings, 
  Zap, 
  Loader2,
  Plus,
  MessageSquare,
  Bot,
  User,
  ThumbsUp,
  ThumbsDown,
  Copy,
  Trash2,
  RotateCcw
} from 'lucide-react'
import { useChat } from '../../contexts/ChatContext'
import { useProject } from '../../contexts/ProjectContext'
import MessageBubble from './MessageBubble'
import RecommendationCard from './RecommendationCard'
import simpleAIService from '../../services/simpleAIService'
import toast from 'react-hot-toast'

const ChatInterface = () => {
  const { 
    messages, 
    isGenerating, 
    aiRecommendations, 
    addUserMessage, 
    addAIResponse, 
    updateMessage, 
    setGenerating,
    generateRecommendations,
    getHighPriorityRecommendations,
    clearRecommendations,
    MESSAGE_STATUS
  } = useChat()
  
  const { updateFile, currentProject } = useProject()
  
  const [prompt, setPrompt] = useState('')
  const [showRecommendations, setShowRecommendations] = useState(true)
  const messagesEndRef = useRef(null)
  const textareaRef = useRef(null)

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px'
    }
  }, [prompt])

  const handleSendMessage = async () => {
    if (!prompt.trim() || isGenerating) return

    const userPrompt = prompt.trim()
    setPrompt('')
    
    // Add user message
    const userMessageId = addUserMessage(userPrompt)
    
    // Add AI response placeholder
    const aiMessageId = addAIResponse('')
    
    setGenerating(true)
    
    try {
      // Generate AI recommendations based on the prompt
      generateRecommendations(userPrompt, currentProject.config)
      
      // Generate code using AI service
      const contextWithPrompt = {
        ...currentProject.config,
        prompt: userPrompt,
        conversationHistory: messages.slice(-5) // Last 5 messages for context
      }
      
      const generatedFiles = await simpleAIService.generateCode(userPrompt, contextWithPrompt)
      
      // Update AI message with response
      const responseContent = `I've generated your ${Object.keys(generatedFiles).length} files! Here's what I created:

${Object.keys(generatedFiles).map(file => `• ${file}`).join('\n')}

The code has been added to your project. You can view and edit the files in the file manager.`
      
      updateMessage(aiMessageId, {
        content: responseContent,
        status: MESSAGE_STATUS.GENERATED,
        metadata: {
          files: Object.keys(generatedFiles),
          generatedFiles
        }
      })
      
      // Update project files
      Object.entries(generatedFiles).forEach(([filename, content]) => {
        updateFile(filename, content)
      })
      
      toast.success('Code generated successfully!')
      
    } catch (error) {
      console.error('AI generation error:', error)
      
      // Update AI message with error
      updateMessage(aiMessageId, {
        content: `I encountered an error while generating your code: ${error.message}

Please try again or modify your request.`,
        status: MESSAGE_STATUS.ERROR,
        metadata: { error: error.message }
      })
      
      toast.error('Failed to generate code: ' + error.message)
    } finally {
      setGenerating(false)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const handleCopyMessage = (content) => {
    navigator.clipboard.writeText(content)
    toast.success('Message copied to clipboard')
  }

  const handleFeedback = (messageId, feedback) => {
    // Update message with feedback
    updateMessage(messageId, {
      metadata: {
        feedback,
        feedbackTimestamp: new Date()
      }
    })
    
    toast.success(`Feedback recorded: ${feedback}`)
  }

  const handleApplyRecommendation = (recommendation) => {
    // Generate a prompt based on the recommendation
    const recommendationPrompt = `Apply this recommendation: ${recommendation.title}

Description: ${recommendation.description}
Action: ${recommendation.action}

Please implement this suggestion in my current project.`
    
    setPrompt(recommendationPrompt)
    setShowRecommendations(false)
  }

  const handleDismissRecommendation = (recommendationId) => {
    // Remove recommendation from state
    clearRecommendations()
    toast.success('Recommendation dismissed')
  }

  const highPriorityRecommendations = getHighPriorityRecommendations()

  return (
    <div className="h-full flex flex-col bg-background">
      {/* Header */}
      <div className="flex-shrink-0 p-4 border-b border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <MessageSquare className="h-4 w-4 text-primary" />
            </div>
            <div>
              <h2 className="font-semibold">AI Chat Assistant</h2>
              <p className="text-sm text-muted-foreground">
                {messages.length} messages • {aiRecommendations.length} recommendations
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowRecommendations(!showRecommendations)}
              className="flex items-center gap-2 px-3 py-1.5 text-sm bg-muted hover:bg-muted/80 rounded-md transition-colors"
            >
              <Sparkles className="h-4 w-4" />
              {showRecommendations ? 'Hide' : 'Show'} Recommendations
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Chat Messages */}
        <div className="flex-1 flex flex-col">
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0 scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent">
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
            
            {messages.length === 0 && (
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <Bot className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Start a conversation</h3>
                    <p className="text-sm text-muted-foreground">
                      Describe what you want to build and I'll help you create it
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="flex-shrink-0 p-4 border-t border-border">
            <div className="relative">
              <textarea
                ref={textareaRef}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Describe what you want to build..."
                className="w-full p-3 pr-12 border border-border rounded-lg bg-card resize-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                disabled={isGenerating}
                rows={1}
              />
              
              <button
                onClick={handleSendMessage}
                disabled={!prompt.trim() || isGenerating}
                className="absolute right-2 top-2 p-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isGenerating ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
              </button>
            </div>
            
            <p className="text-xs text-muted-foreground mt-2">
              Press Enter to send, Shift+Enter for new line
            </p>
          </div>
        </div>

        {/* Recommendations Sidebar */}
        {showRecommendations && (
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 320 }}
            exit={{ width: 0 }}
            className="flex-shrink-0 border-l border-border bg-muted/20 overflow-hidden"
          >
            <div className="p-4 h-full overflow-y-auto">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="h-4 w-4 text-primary" />
                <h3 className="font-medium">AI Recommendations</h3>
              </div>
              
              <div className="space-y-3">
                <AnimatePresence>
                  {highPriorityRecommendations.map((recommendation) => (
                    <RecommendationCard
                      key={recommendation.id}
                      recommendation={recommendation}
                      onApply={handleApplyRecommendation}
                      onDismiss={handleDismissRecommendation}
                    />
                  ))}
                </AnimatePresence>
                
                {aiRecommendations.length === 0 && (
                  <div className="text-center py-8">
                    <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mx-auto mb-3">
                      <Lightbulb className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      AI recommendations will appear here based on your conversation
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default ChatInterface
