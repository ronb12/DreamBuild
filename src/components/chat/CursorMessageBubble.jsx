import React from 'react'
import { motion } from 'framer-motion'
import { 
  User, 
  Bot, 
  AlertCircle, 
  CheckCircle, 
  Loader2, 
  Copy, 
  ThumbsUp, 
  ThumbsDown,
  Code,
  FileText,
  Clock,
  Zap
} from 'lucide-react'

const CursorMessageBubble = ({ message, onCopy, onFeedback }) => {
  const getMessageIcon = () => {
    switch (message.type) {
      case 'user':
        return <User className="h-4 w-4" />
      case 'ai':
        return <Bot className="h-4 w-4" />
      case 'error':
        return <AlertCircle className="h-4 w-4" />
      case 'system':
        return <Zap className="h-4 w-4" />
      default:
        return <User className="h-4 w-4" />
    }
  }

  const getMessageStatusIcon = () => {
    switch (message.status) {
      case 'generating':
        return <Loader2 className="h-3 w-3 animate-spin text-blue-500" />
      case 'generated':
      case 'sent':
        return <CheckCircle className="h-3 w-3 text-green-500" />
      case 'error':
        return <AlertCircle className="h-3 w-3 text-red-500" />
      default:
        return null
    }
  }

  const getMessageStyles = () => {
    const baseStyles = "prose prose-sm max-w-none"
    
    switch (message.type) {
      case 'user':
        return `${baseStyles} bg-blue-50 dark:bg-blue-900/10 border-l-4 border-blue-500`
      case 'ai':
        return `${baseStyles} bg-background`
      case 'error':
        return `${baseStyles} bg-red-50 dark:bg-red-900/10 border-l-4 border-red-500`
      case 'system':
        return `${baseStyles} bg-yellow-50 dark:bg-yellow-900/10 border-l-4 border-yellow-500`
      default:
        return `${baseStyles} bg-muted`
    }
  }

  const formatTimestamp = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    })
  }

  const handleCopy = () => {
    if (onCopy) {
      onCopy(message.content)
    } else {
      navigator.clipboard.writeText(message.content)
    }
  }

  const renderContent = () => {
    if (message.metadata?.files && message.metadata.files.length > 0) {
      return (
        <div className="space-y-3">
          <div className="whitespace-pre-wrap">{message.content}</div>
          <div className="flex flex-wrap gap-2">
            {message.metadata.files.map((file, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs font-mono"
              >
                <FileText className="h-3 w-3" />
                {file}
              </span>
            ))}
          </div>
        </div>
      )
    }

    if (message.metadata?.codeBlocks) {
      return (
        <div className="space-y-3">
          <div className="whitespace-pre-wrap">{message.content}</div>
          {message.metadata.codeBlocks.map((block, index) => (
            <div key={index} className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 text-xs font-mono">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600 dark:text-gray-400">{block.language}</span>
                <button
                  onClick={() => navigator.clipboard.writeText(block.code)}
                  className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                >
                  <Copy className="h-3 w-3" />
                </button>
              </div>
              <pre className="whitespace-pre-wrap text-gray-800 dark:text-gray-200">{block.code}</pre>
            </div>
          ))}
        </div>
      )
    }

    return <div className="whitespace-pre-wrap">{message.content}</div>
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className={`${getMessageStyles()} p-4`}
    >
      <div className="flex gap-3">
        {/* Avatar */}
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
          message.type === 'user' 
            ? 'bg-blue-500 text-white' 
            : message.type === 'error'
            ? 'bg-red-500 text-white'
            : message.type === 'system'
            ? 'bg-yellow-500 text-white'
            : 'bg-gray-500 text-white'
        }`}>
          {getMessageIcon()}
        </div>

        {/* Message Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm font-semibold">
              {message.type === 'user' ? 'You' : 
               message.type === 'error' ? 'Error' : 
               message.type === 'system' ? 'System' : 'DreamBuild AI'}
            </span>
            <span className="text-xs text-muted-foreground">
              {formatTimestamp(message.timestamp)}
            </span>
            {getMessageStatusIcon()}
          </div>

          <div className="text-sm text-foreground">
            {renderContent()}
          </div>

          {/* Message Actions */}
          {message.type === 'ai' && message.status === 'generated' && (
            <div className="flex items-center gap-3 mt-3 pt-3 border-t border-border/50">
              <button
                onClick={handleCopy}
                className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                <Copy className="h-3 w-3" />
                Copy
              </button>
              
              {onFeedback && (
                <>
                  <button
                    onClick={() => onFeedback(message.id, 'positive')}
                    className="flex items-center gap-1 text-xs text-muted-foreground hover:text-green-600 transition-colors"
                  >
                    <ThumbsUp className="h-3 w-3" />
                  </button>
                  <button
                    onClick={() => onFeedback(message.id, 'negative')}
                    className="flex items-center gap-1 text-xs text-muted-foreground hover:text-red-600 transition-colors"
                  >
                    <ThumbsDown className="h-3 w-3" />
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default CursorMessageBubble
