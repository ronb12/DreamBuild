/**
 * DreamBuild LLM Status Indicator
 * Shows loading progress and status of DreamBuild's built-in LLM
 * Product of Bradley Virtual Solutions, LLC
 */

import { useState, useEffect } from 'react'
import { Brain, Loader2, CheckCircle, AlertCircle, Sparkles } from 'lucide-react'
import dreamBuildLLMService from '../services/dreamBuildLLMService'

export default function DreamBuildLLMStatus() {
  const [status, setStatus] = useState({
    initialized: false,
    loading: false,
    progress: 0
  })

  useEffect(() => {
    // Check status every 2 seconds
    const interval = setInterval(() => {
      const currentStatus = dreamBuildLLMService.getStatus()
      setStatus(currentStatus)
      
      // Stop checking once initialized
      if (currentStatus.initialized) {
        clearInterval(interval)
      }
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  // Don't show anything if not loading and not initialized
  if (!status.loading && !status.initialized) {
    return null
  }

  return (
    <div className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-lg">
      {status.loading ? (
        <>
          <Loader2 className="w-4 h-4 text-purple-500 animate-spin" />
          <div className="flex flex-col">
            <span className="text-xs font-medium text-foreground">Loading DreamBuild LLM</span>
            <div className="flex items-center gap-2">
              <div className="w-32 h-1 bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300"
                  style={{ width: `${status.progress}%` }}
                />
              </div>
              <span className="text-xs text-muted-foreground">{status.progress.toFixed(0)}%</span>
            </div>
          </div>
        </>
      ) : status.initialized ? (
        <>
          <CheckCircle className="w-4 h-4 text-green-500" />
          <div className="flex items-center gap-2">
            <Sparkles className="w-3 h-3 text-purple-500" />
            <span className="text-xs font-medium text-foreground">
              DreamBuild LLM Active
            </span>
            <span className="text-xs text-muted-foreground">
              (Enhanced Quality)
            </span>
          </div>
        </>
      ) : (
        <>
          <AlertCircle className="w-4 h-4 text-amber-500" />
          <span className="text-xs text-muted-foreground">
            Using Templates
          </span>
        </>
      )}
    </div>
  )
}

