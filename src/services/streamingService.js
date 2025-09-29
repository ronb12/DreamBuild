// DreamBuild Streaming Response Service
// Provides real-time streaming responses like Cursor

class StreamingService {
  constructor() {
    this.isStreaming = false
    this.currentStream = null
    this.streamingCallbacks = new Map()
    this.streamingSpeed = 30 // milliseconds per character
    this.paused = false
    this.aborted = false
    
    // Streaming Service initialized
  }

  // Start streaming a response
  async startStreaming(response, onUpdate, onComplete, onError) {
    if (this.isStreaming) {
      console.log('⚠️ Already streaming, aborting previous stream')
      this.abortStream()
    }

    this.isStreaming = true
    this.paused = false
    this.aborted = false

    console.log('🌊 Starting stream for response:', response.substring(0, 100) + '...')

    try {
      // Simulate streaming by character
      await this.streamText(response, onUpdate, onComplete)
    } catch (error) {
      console.error('❌ Streaming error:', error)
      if (onError) onError(error)
    } finally {
      this.isStreaming = false
      this.currentStream = null
    }
  }

  // Stream text character by character
  async streamText(text, onUpdate, onComplete) {
    let currentText = ''
    const totalLength = text.length

    for (let i = 0; i < totalLength; i++) {
      if (this.aborted) {
        console.log('🛑 Stream aborted')
        break
      }

      // Wait if paused
      while (this.paused && !this.aborted) {
        await this.sleep(100)
      }

      if (this.aborted) break

      // Add next character
      currentText += text[i]
      
      // Update UI
      if (onUpdate) {
        onUpdate(currentText, i + 1, totalLength)
      }

      // Wait before next character
      await this.sleep(this.streamingSpeed)
    }

    if (!this.aborted && onComplete) {
      onComplete(currentText)
    }
  }

  // Pause streaming
  pauseStream() {
    if (this.isStreaming) {
      this.paused = true
      console.log('⏸️ Stream paused')
    }
  }

  // Resume streaming
  resumeStream() {
    if (this.isStreaming && this.paused) {
      this.paused = false
      console.log('▶️ Stream resumed')
    }
  }

  // Abort streaming
  abortStream() {
    if (this.isStreaming) {
      this.aborted = true
      this.isStreaming = false
      this.paused = false
      console.log('🛑 Stream aborted')
    }
  }

  // Set streaming speed
  setStreamingSpeed(speed) {
    this.streamingSpeed = Math.max(10, Math.min(1000, speed))
    console.log('⚡ Streaming speed set to:', this.streamingSpeed + 'ms')
  }

  // Get streaming status
  getStreamingStatus() {
    return {
      isStreaming: this.isStreaming,
      paused: this.paused,
      aborted: this.aborted,
      speed: this.streamingSpeed
    }
  }

  // Utility function for sleep
  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  // Stream code with syntax highlighting
  async streamCode(code, language, onUpdate, onComplete) {
    console.log('💻 Streaming code for language:', language)
    
    // For code, we might want to stream by lines or tokens
    const lines = code.split('\n')
    let currentCode = ''
    
    for (let i = 0; i < lines.length; i++) {
      if (this.aborted) break
      
      while (this.paused && !this.aborted) {
        await this.sleep(100)
      }
      
      if (this.aborted) break
      
      currentCode += lines[i] + (i < lines.length - 1 ? '\n' : '')
      
      if (onUpdate) {
        onUpdate(currentCode, i + 1, lines.length, language)
      }
      
      // Wait between lines for code
      await this.sleep(this.streamingSpeed * 2)
    }
    
    if (!this.aborted && onComplete) {
      onComplete(currentCode)
    }
  }

  // Stream explanation with sections
  async streamExplanation(explanation, onUpdate, onComplete) {
    console.log('📋 Streaming explanation')
    
    const sections = [
      { title: 'Summary', content: explanation.summary },
      { title: 'Overview', content: explanation.sections?.overview?.content },
      { title: 'Features', content: explanation.sections?.features?.content },
      { title: 'Technical Details', content: explanation.sections?.technicalDetails?.content },
      { title: 'Recommendations', content: explanation.recommendations }
    ].filter(section => section.content)

    let currentExplanation = { ...explanation }
    currentExplanation.sections = currentExplanation.sections || {}
    
    for (let i = 0; i < sections.length; i++) {
      if (this.aborted) break
      
      while (this.paused && !this.aborted) {
        await this.sleep(100)
      }
      
      if (this.aborted) break
      
      const section = sections[i]
      const sectionKey = section.title.toLowerCase().replace(/\s+/g, '')
      
      if (onUpdate) {
        onUpdate(currentExplanation, i + 1, sections.length, section.title)
      }
      
      // Wait between sections
      await this.sleep(this.streamingSpeed * 3)
    }
    
    if (!this.aborted && onComplete) {
      onComplete(currentExplanation)
    }
  }
}

// Create singleton instance
const streamingService = new StreamingService()
export default streamingService
