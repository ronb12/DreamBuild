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
import AIModelSelector from './ai/AIModelSelector'
import AIChatInterface from './ai/AIChatInterface'

export default function AIPromptSimplified() {
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

    setMessages(prev => [...prev, userMessage])

    try {
      // Generate AI response
      const response = await simpleAIService.generateCode({
        prompt: userPrompt,
        projectName: projectName || currentProject.name,
        context: {
          currentFiles: currentProject.files,
          activeFile: currentProject.activeFile,
          config: currentProject.config
        }
      })

      // Add AI response
      const aiMessage = {
        id: Date.now() + 1,
        type: 'assistant',
        content: response.message || 'Code generated successfully!',
        timestamp: new Date(),
        files: response.files || {}
      }

      setMessages(prev => [...prev, aiMessage])

      // Update project files if new files were generated
      if (response.files && Object.keys(response.files).length > 0) {
        Object.entries(response.files).forEach(([filename, content]) => {
          updateFile(filename, content)
        })
        toast.success(`Generated ${Object.keys(response.files).length} files!`)
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
    toast.success('Chat cleared!')
  }

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
