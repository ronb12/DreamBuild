import React, { createContext, useContext, useReducer, useCallback } from 'react'
import { v4 as uuidv4 } from 'uuid'

// Chat message types
const MESSAGE_TYPES = {
  USER: 'user',
  AI: 'ai',
  SYSTEM: 'system',
  ERROR: 'error'
}

// Message status types
const MESSAGE_STATUS = {
  SENDING: 'sending',
  SENT: 'sent',
  ERROR: 'error',
  GENERATING: 'generating',
  GENERATED: 'generated'
}

// Initial state
const initialState = {
  messages: [],
  isGenerating: false,
  currentSession: null,
  sessions: [],
  aiRecommendations: [],
  context: {
    projectType: 'web',
    technologies: [],
    complexity: 'medium',
    lastGeneratedFiles: []
  }
}

// Action types
const ACTION_TYPES = {
  ADD_MESSAGE: 'ADD_MESSAGE',
  UPDATE_MESSAGE: 'UPDATE_MESSAGE',
  SET_GENERATING: 'SET_GENERATING',
  ADD_RECOMMENDATION: 'ADD_RECOMMENDATION',
  CLEAR_RECOMMENDATIONS: 'CLEAR_RECOMMENDATIONS',
  UPDATE_CONTEXT: 'UPDATE_CONTEXT',
  NEW_SESSION: 'NEW_SESSION',
  LOAD_SESSION: 'LOAD_SESSION',
  CLEAR_MESSAGES: 'CLEAR_MESSAGES'
}

// Reducer function
const chatReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload]
      }

    case ACTION_TYPES.UPDATE_MESSAGE:
      return {
        ...state,
        messages: state.messages.map(msg =>
          msg.id === action.payload.id
            ? { ...msg, ...action.payload.updates }
            : msg
        )
      }

    case ACTION_TYPES.SET_GENERATING:
      return {
        ...state,
        isGenerating: action.payload
      }

    case ACTION_TYPES.ADD_RECOMMENDATION:
      return {
        ...state,
        aiRecommendations: [...state.aiRecommendations, action.payload]
      }

    case ACTION_TYPES.CLEAR_RECOMMENDATIONS:
      return {
        ...state,
        aiRecommendations: []
      }

    case ACTION_TYPES.UPDATE_CONTEXT:
      return {
        ...state,
        context: { ...state.context, ...action.payload }
      }

    case ACTION_TYPES.NEW_SESSION:
      const newSession = {
        id: uuidv4(),
        name: action.payload.name || 'New Chat',
        createdAt: new Date(),
        messages: []
      }
      return {
        ...state,
        currentSession: newSession.id,
        sessions: [newSession, ...state.sessions],
        messages: []
      }

    case ACTION_TYPES.LOAD_SESSION:
      const session = state.sessions.find(s => s.id === action.payload)
      return {
        ...state,
        currentSession: action.payload,
        messages: session ? session.messages : []
      }

    case ACTION_TYPES.CLEAR_MESSAGES:
      return {
        ...state,
        messages: []
      }

    default:
      return state
  }
}

// Create context
const ChatContext = createContext()

// Provider component
export const ChatProvider = ({ children }) => {
  const [state, dispatch] = useReducer(chatReducer, initialState)

  // Add a new message
  const addMessage = useCallback((message) => {
    const newMessage = {
      id: uuidv4(),
      timestamp: new Date(),
      status: MESSAGE_STATUS.SENT,
      ...message
    }
    
    dispatch({
      type: ACTION_TYPES.ADD_MESSAGE,
      payload: newMessage
    })

    return newMessage.id
  }, [])

  // Update an existing message
  const updateMessage = useCallback((messageId, updates) => {
    dispatch({
      type: ACTION_TYPES.UPDATE_MESSAGE,
      payload: { id: messageId, updates }
    })
  }, [])

  // Add user message
  const addUserMessage = useCallback((content, metadata = {}) => {
    return addMessage({
      type: MESSAGE_TYPES.USER,
      content,
      metadata
    })
  }, [addMessage])

  // Add AI message
  const addAIMessage = useCallback((content, metadata = {}) => {
    const messageId = addMessage({
      type: MESSAGE_TYPES.AI,
      content,
      metadata,
      status: MESSAGE_STATUS.GENERATED
    })
    return messageId
  }, [addMessage])

  // Add AI response with generation status
  const addAIResponse = useCallback((initialContent = '') => {
    const messageId = addMessage({
      type: MESSAGE_TYPES.AI,
      content: initialContent,
      metadata: {},
      status: MESSAGE_STATUS.GENERATING
    })
    return messageId
  }, [addMessage])

  // Add error message
  const addErrorMessage = useCallback((content, error = null) => {
    return addMessage({
      type: MESSAGE_TYPES.ERROR,
      content,
      metadata: { error },
      status: MESSAGE_STATUS.ERROR
    })
  }, [addMessage])

  // Set generating state
  const setGenerating = useCallback((isGenerating) => {
    dispatch({
      type: ACTION_TYPES.SET_GENERATING,
      payload: isGenerating
    })
  }, [])

  // Add AI recommendation
  const addRecommendation = useCallback((recommendation) => {
    dispatch({
      type: ACTION_TYPES.ADD_RECOMMENDATION,
      payload: {
        id: uuidv4(),
        timestamp: new Date(),
        ...recommendation
      }
    })
  }, [])

  // Clear recommendations
  const clearRecommendations = useCallback(() => {
    dispatch({
      type: ACTION_TYPES.CLEAR_RECOMMENDATIONS
    })
  }, [])

  // Update context
  const updateContext = useCallback((contextUpdates) => {
    dispatch({
      type: ACTION_TYPES.UPDATE_CONTEXT,
      payload: contextUpdates
    })
  }, [])

  // Create new session
  const newSession = useCallback((name) => {
    dispatch({
      type: ACTION_TYPES.NEW_SESSION,
      payload: { name }
    })
  }, [])

  // Load session
  const loadSession = useCallback((sessionId) => {
    dispatch({
      type: ACTION_TYPES.LOAD_SESSION,
      payload: sessionId
    })
  }, [])

  // Clear messages
  const clearMessages = useCallback(() => {
    dispatch({
      type: ACTION_TYPES.CLEAR_MESSAGES
    })
  }, [])

  // Generate AI recommendations based on conversation
  const generateRecommendations = useCallback((prompt, context) => {
    clearRecommendations()
    
    const recommendations = []
    const lowerPrompt = prompt.toLowerCase()

    // Technology recommendations
    if (lowerPrompt.includes('react') || lowerPrompt.includes('frontend')) {
      recommendations.push({
        type: 'technology',
        title: 'Add React Router',
        description: 'Implement client-side routing for better navigation',
        action: 'Add React Router to your project for single-page application routing',
        priority: 'high'
      })
      recommendations.push({
        type: 'technology',
        title: 'Add State Management',
        description: 'Consider Redux or Zustand for complex state management',
        action: 'Implement state management for better data flow',
        priority: 'medium'
      })
    }

    if (lowerPrompt.includes('database') || lowerPrompt.includes('backend')) {
      recommendations.push({
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
        type: 'feature',
        title: 'Add Authentication',
        description: 'Implement user authentication and authorization',
        action: 'Add login/signup functionality with secure session management',
        priority: 'high'
      })
    }

    if (lowerPrompt.includes('responsive') || lowerPrompt.includes('mobile')) {
      recommendations.push({
        type: 'feature',
        title: 'Make Responsive',
        description: 'Ensure your app works on all device sizes',
        action: 'Add responsive design with mobile-first approach',
        priority: 'high'
      })
    }

    // Performance recommendations
    recommendations.push({
      type: 'performance',
      title: 'Add Loading States',
      description: 'Improve user experience with loading indicators',
      action: 'Add loading spinners and skeleton screens',
      priority: 'medium'
    })

    recommendations.push({
      type: 'performance',
      title: 'Optimize Images',
      description: 'Add image optimization for better performance',
      action: 'Implement lazy loading and image compression',
      priority: 'medium'
    })

    // Security recommendations
    recommendations.push({
      type: 'security',
      title: 'Add Input Validation',
      description: 'Validate all user inputs to prevent security issues',
      action: 'Implement client and server-side validation',
      priority: 'high'
    })

    // Add recommendations to state
    recommendations.forEach(rec => addRecommendation(rec))

    return recommendations
  }, [clearRecommendations, addRecommendation])

  // Get conversation summary for AI context
  const getConversationSummary = useCallback(() => {
    const recentMessages = state.messages.slice(-10) // Last 10 messages
    return recentMessages.map(msg => ({
      role: msg.type === MESSAGE_TYPES.USER ? 'user' : 'assistant',
      content: msg.content,
      timestamp: msg.timestamp
    }))
  }, [state.messages])

  // Get AI recommendations by type
  const getRecommendationsByType = useCallback((type) => {
    return state.aiRecommendations.filter(rec => rec.type === type)
  }, [state.aiRecommendations])

  // Get high priority recommendations
  const getHighPriorityRecommendations = useCallback(() => {
    return state.aiRecommendations.filter(rec => rec.priority === 'high')
  }, [state.aiRecommendations])

  const value = {
    // State
    messages: state.messages,
    isGenerating: state.isGenerating,
    currentSession: state.currentSession,
    sessions: state.sessions,
    aiRecommendations: state.aiRecommendations,
    context: state.context,

    // Actions
    addMessage,
    updateMessage,
    addUserMessage,
    addAIMessage,
    addAIResponse,
    addErrorMessage,
    setGenerating,
    addRecommendation,
    clearRecommendations,
    updateContext,
    newSession,
    loadSession,
    clearMessages,
    generateRecommendations,
    getConversationSummary,
    getRecommendationsByType,
    getHighPriorityRecommendations,

    // Constants
    MESSAGE_TYPES,
    MESSAGE_STATUS
  }

  return (
    <ChatContext.Provider value={value}>
      {children}
    </ChatContext.Provider>
  )
}

// Hook to use chat context
export const useChat = () => {
  const context = useContext(ChatContext)
  if (!context) {
    throw new Error('useChat must be used within a ChatProvider')
  }
  return context
}

export default ChatContext
