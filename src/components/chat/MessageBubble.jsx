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
  Lightbulb
} from 'lucide-react'
import { useChat } from '../../contexts/ChatContext'

const MessageBubble = ({ message, onCopy, onFeedback }) => {
  const { MESSAGE_TYPES, MESSAGE_STATUS } = useChat()

  const getMessageIcon = () => {
    switch (message.type) {
      case MESSAGE_TYPES.USER:
        return <User className="h-4 w-4" />
      case MESSAGE_TYPES.AI:
        return <Bot className="h-4 w-4" />
      case MESSAGE_TYPES.ERROR:
        return <AlertCircle className="h-4 w-4" />
      default:
        return <User className="h-4 w-4" />
    }
  }

  const getMessageStatusIcon = () => {
    switch (message.status) {
      case MESSAGE_STATUS.GENERATING:
        return <Loader2 className="h-3 w-3 animate-spin" />
      case MESSAGE_STATUS.GENERATED:
      case MESSAGE_STATUS.SENT:
        return <CheckCircle className="h-3 w-3" />
      case MESSAGE_STATUS.ERROR:
        return <AlertCircle className="h-3 w-3" />
      default:
        return null
    }
  }

  const getMessageStyles = () => {
    const baseStyles = "max-w-[85%] rounded-lg p-3 shadow-sm"
    
    switch (message.type) {
      case MESSAGE_TYPES.USER:
        return `${baseStyles} bg-primary text-primary-foreground ml-auto`
      case MESSAGE_TYPES.AI:
        return `${baseStyles} bg-card border border-border text-foreground mr-auto`
      case MESSAGE_TYPES.ERROR:
        return `${baseStyles} bg-destructive/10 border border-destructive/20 text-destructive mr-auto`
      default:
        return `${baseStyles} bg-muted text-muted-foreground mr-auto`
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
        <div className="space-y-2">
          <div className="whitespace-pre-wrap break-words">{message.content}</div>
          <div className="flex flex-wrap gap-1 mt-2">
            {message.metadata.files.map((file, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1 px-2 py-1 bg-muted rounded text-xs"
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
        <div className="space-y-2">
          <div className="whitespace-pre-wrap break-words">{message.content}</div>
          {message.metadata.codeBlocks.map((block, index) => (
            <div key={index} className="bg-muted rounded p-2 text-xs font-mono">
              <div className="flex items-center justify-between mb-1">
                <span className="text-muted-foreground">{block.language}</span>
                <button
                  onClick={() => navigator.clipboard.writeText(block.code)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Copy className="h-3 w-3" />
                </button>
              </div>
              <pre className="whitespace-pre-wrap">{block.code}</pre>
            </div>
          ))}
        </div>
      )
    }

    return <div className="whitespace-pre-wrap break-words">{message.content}</div>
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex gap-3 ${message.type === MESSAGE_TYPES.USER ? 'flex-row-reverse' : 'flex-row'}`}
    >
      {/* Avatar */}
      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
        message.type === MESSAGE_TYPES.USER 
          ? 'bg-primary text-primary-foreground' 
          : message.type === MESSAGE_TYPES.ERROR
          ? 'bg-destructive/20 text-destructive'
          : 'bg-muted text-muted-foreground'
      }`}>
        {getMessageIcon()}
      </div>

      {/* Message Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-sm font-medium">
            {message.type === MESSAGE_TYPES.USER ? 'You' : 
             message.type === MESSAGE_TYPES.ERROR ? 'Error' : 'DreamBuild AI'}
          </span>
          <span className="text-xs text-muted-foreground">
            {formatTimestamp(message.timestamp)}
          </span>
          {getMessageStatusIcon()}
        </div>

        <div className={getMessageStyles()}>
          {renderContent()}
        </div>

        {/* Message Actions */}
        {message.type === MESSAGE_TYPES.AI && message.status === MESSAGE_STATUS.GENERATED && (
          <div className="flex items-center gap-2 mt-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1 px-2 py-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
              title="Copy message"
            >
              <Copy className="h-3 w-3" />
              Copy
            </button>
            
            {onFeedback && (
              <>
                <button
                  onClick={() => onFeedback(message.id, 'positive')}
                  className="flex items-center gap-1 px-2 py-1 text-xs text-muted-foreground hover:text-green-600 transition-colors"
                  title="Good response"
                >
                  <ThumbsUp className="h-3 w-3" />
                </button>
                <button
                  onClick={() => onFeedback(message.id, 'negative')}
                  className="flex items-center gap-1 px-2 py-1 text-xs text-muted-foreground hover:text-red-600 transition-colors"
                  title="Poor response"
                >
                  <ThumbsDown className="h-3 w-3" />
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default MessageBubble
