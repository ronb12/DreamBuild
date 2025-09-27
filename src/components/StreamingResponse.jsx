// Streaming Response Component
// Displays real-time streaming responses like Cursor

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Play, 
  Pause, 
  Square, 
  Zap, 
  ZapOff,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react'
import streamingService from '../services/streamingService'

export default function StreamingResponse({ 
  response, 
  onComplete, 
  onError,
  type = 'text', // 'text', 'code', 'explanation'
  language = 'javascript',
  showControls = true,
  autoStart = true
}) {
  const [streamingText, setStreamingText] = useState('')
  const [isStreaming, setIsStreaming] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [progress, setProgress] = useState(0)
  const [currentSection, setCurrentSection] = useState('')
  const [streamingSpeed, setStreamingSpeed] = useState(30)
  const [isComplete, setIsComplete] = useState(false)
  
  const textRef = useRef(null)
  const cursorRef = useRef(null)

  // Start streaming when component mounts
  useEffect(() => {
    if (autoStart && response && !isStreaming) {
      startStreaming()
    }
  }, [response, autoStart])

  // Auto-scroll to bottom
  useEffect(() => {
    if (textRef.current) {
      textRef.current.scrollTop = textRef.current.scrollHeight
    }
  }, [streamingText])

  // Start streaming
  const startStreaming = async () => {
    if (!response) return

    setIsStreaming(true)
    setIsPaused(false)
    setIsComplete(false)
    setStreamingText('')
    setProgress(0)

    try {
      if (type === 'code') {
        await streamingService.streamCode(
          response,
          language,
          (text, current, total, lang) => {
            setStreamingText(text)
            setProgress((current / total) * 100)
            setCurrentSection(`Line ${current} of ${total}`)
          },
          (finalText) => {
            setIsStreaming(false)
            setIsComplete(true)
            if (onComplete) onComplete(finalText)
          }
        )
      } else if (type === 'explanation') {
        await streamingService.streamExplanation(
          response,
          (explanation, current, total, section) => {
            setStreamingText(JSON.stringify(explanation, null, 2))
            setProgress((current / total) * 100)
            setCurrentSection(section)
          },
          (finalExplanation) => {
            setIsStreaming(false)
            setIsComplete(true)
            if (onComplete) onComplete(finalExplanation)
          }
        )
      } else {
        await streamingService.startStreaming(
          response,
          (text, current, total) => {
            setStreamingText(text)
            setProgress((current / total) * 100)
            setCurrentSection(`${current} of ${total} characters`)
          },
          (finalText) => {
            setIsStreaming(false)
            setIsComplete(true)
            if (onComplete) onComplete(finalText)
          },
          (error) => {
            setIsStreaming(false)
            if (onError) onError(error)
          }
        )
      }
    } catch (error) {
      setIsStreaming(false)
      if (onError) onError(error)
    }
  }

  // Pause streaming
  const pauseStreaming = () => {
    streamingService.pauseStream()
    setIsPaused(true)
  }

  // Resume streaming
  const resumeStreaming = () => {
    streamingService.resumeStream()
    setIsPaused(false)
  }

  // Stop streaming
  const stopStreaming = () => {
    streamingService.abortStream()
    setIsStreaming(false)
    setIsPaused(false)
  }

  // Change streaming speed
  const changeSpeed = (speed) => {
    setStreamingSpeed(speed)
    streamingService.setStreamingSpeed(speed)
  }

  // Format text for display
  const formatText = (text) => {
    if (type === 'code') {
      return text
    } else if (type === 'explanation') {
      try {
        const parsed = JSON.parse(text)
        return JSON.stringify(parsed, null, 2)
      } catch {
        return text
      }
    }
    return text
  }

  return (
    <div className="w-full h-full flex flex-col bg-card/50 backdrop-blur-sm border border-border rounded-lg overflow-hidden">
      {/* Header */}
      {showControls && (
        <div className="flex items-center justify-between p-3 border-b border-border bg-muted/30">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              {isStreaming ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full"
                />
              ) : isComplete ? (
                <CheckCircle className="w-4 h-4 text-green-500" />
              ) : (
                <Clock className="w-4 h-4 text-muted-foreground" />
              )}
            </div>
            <span className="text-sm font-medium text-foreground">
              {isStreaming ? 'Streaming...' : isComplete ? 'Complete' : 'Ready'}
            </span>
            {currentSection && (
              <span className="text-xs text-muted-foreground">
                • {currentSection}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            {/* Speed Control */}
            <div className="flex items-center gap-1">
              <Zap className="w-3 h-3 text-muted-foreground" />
              <select
                value={streamingSpeed}
                onChange={(e) => changeSpeed(Number(e.target.value))}
                className="text-xs bg-transparent border-none outline-none text-muted-foreground"
                disabled={isStreaming}
              >
                <option value={10}>Fast</option>
                <option value={30}>Normal</option>
                <option value={60}>Slow</option>
                <option value={100}>Very Slow</option>
              </select>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-1">
              {isStreaming ? (
                isPaused ? (
                  <button
                    onClick={resumeStreaming}
                    className="p-1 hover:bg-muted rounded transition-colors"
                    title="Resume"
                  >
                    <Play className="w-3 h-3" />
                  </button>
                ) : (
                  <button
                    onClick={pauseStreaming}
                    className="p-1 hover:bg-muted rounded transition-colors"
                    title="Pause"
                  >
                    <Pause className="w-3 h-3" />
                  </button>
                )
              ) : (
                <button
                  onClick={startStreaming}
                  className="p-1 hover:bg-muted rounded transition-colors"
                  title="Start"
                >
                  <Play className="w-3 h-3" />
                </button>
              )}

              {isStreaming && (
                <button
                  onClick={stopStreaming}
                  className="p-1 hover:bg-muted rounded transition-colors"
                  title="Stop"
                >
                  <Square className="w-3 h-3" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Progress Bar */}
      {isStreaming && (
        <div className="w-full h-1 bg-muted">
          <motion.div
            className="h-full bg-primary"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      )}

      {/* Content */}
      <div className="flex-1 overflow-hidden">
        <div
          ref={textRef}
          className="h-full overflow-y-auto p-4 font-mono text-sm leading-relaxed"
        >
          <AnimatePresence>
            {streamingText && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="whitespace-pre-wrap break-words"
              >
                {formatText(streamingText)}
                
                {/* Blinking cursor */}
                {isStreaming && !isPaused && (
                  <motion.span
                    ref={cursorRef}
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="inline-block w-2 h-4 bg-primary ml-1"
                  />
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {!streamingText && !isStreaming && (
            <div className="flex items-center justify-center h-full text-muted-foreground">
              <div className="text-center">
                <Clock className="w-8 h-8 mx-auto mb-2 opacity-50" />
                <p>Ready to stream response...</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      {showControls && (
        <div className="p-2 border-t border-border bg-muted/20">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-4">
              <span>Type: {type}</span>
              {type === 'code' && <span>Language: {language}</span>}
              <span>Speed: {streamingSpeed}ms</span>
            </div>
            <div className="flex items-center gap-2">
              {isStreaming && (
                <span className="flex items-center gap-1">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                    className="w-2 h-2 bg-primary rounded-full"
                  />
                  Live
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
