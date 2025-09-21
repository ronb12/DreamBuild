import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Bot, 
  Play, 
  Pause, 
  Square, 
  Settings, 
  Activity,
  CheckCircle,
  AlertCircle,
  Clock,
  Zap,
  Eye,
  Brain,
  Code,
  FileText,
  TrendingUp,
  Target
} from 'lucide-react'
import aiAgentService from '../../services/aiAgentService'

const AIAgentPanel = ({ onProgress, onTaskComplete }) => {
  const [agentStatus, setAgentStatus] = useState(aiAgentService.getStatus())
  const [progress, setProgress] = useState([])
  const [showSettings, setShowSettings] = useState(false)
  const [settings, setSettings] = useState({
    maxIterations: 5,
    autoRefinement: true,
    backgroundMonitoring: true,
    qualityChecks: true,
    performanceMonitoring: true
  })

  useEffect(() => {
    // Subscribe to progress updates
    aiAgentService.onProgress(handleProgress)
    
    // Update status periodically
    const statusInterval = setInterval(() => {
      setAgentStatus(aiAgentService.getStatus())
    }, 1000)

    return () => {
      aiAgentService.offProgress(handleProgress)
      clearInterval(statusInterval)
    }
  }, [])

  const handleProgress = (progressData) => {
    setProgress(prev => [progressData, ...prev.slice(0, 19)]) // Keep last 20 items
    
    if (onProgress) {
      onProgress(progressData)
    }
  }

  const toggleAutoMode = () => {
    const isEnabled = aiAgentService.toggleAutoMode()
    setAgentStatus(aiAgentService.getStatus())
  }

  const startTask = async () => {
    if (!agentStatus.isAutoModeEnabled) {
      toggleAutoMode()
    }
    
    // Start with a sample task
    await aiAgentService.startContinuousIteration(
      'Create a modern React dashboard with authentication',
      { projectType: 'react', complexity: 'medium' }
    )
    
    setAgentStatus(aiAgentService.getStatus())
  }

  const stopTask = () => {
    aiAgentService.stopCurrentTask()
    setAgentStatus(aiAgentService.getStatus())
  }

  const getStatusIcon = () => {
    if (agentStatus.isRunning) {
      return <Activity className="h-4 w-4 text-blue-500 animate-pulse" />
    } else if (agentStatus.isAutoModeEnabled) {
      return <CheckCircle className="h-4 w-4 text-green-500" />
    } else {
      return <AlertCircle className="h-4 w-4 text-gray-500" />
    }
  }

  const getStatusText = () => {
    if (agentStatus.isRunning) {
      return 'AI Agent Running'
    } else if (agentStatus.isAutoModeEnabled) {
      return 'Auto Mode Ready'
    } else {
      return 'Manual Mode'
    }
  }

  const getProgressIcon = (type) => {
    switch (type) {
      case 'task_start':
        return <Play className="h-3 w-3 text-blue-500" />
      case 'task_complete':
        return <CheckCircle className="h-3 w-3 text-green-500" />
      case 'task_error':
        return <AlertCircle className="h-3 w-3 text-red-500" />
      case 'refinement_start':
        return <Zap className="h-3 w-3 text-yellow-500" />
      case 'refinement_complete':
        return <CheckCircle className="h-3 w-3 text-green-500" />
      case 'file_changes':
        return <FileText className="h-3 w-3 text-blue-500" />
      case 'improvement_suggestion':
        return <Brain className="h-3 w-3 text-purple-500" />
      case 'quality_issues':
        return <AlertCircle className="h-3 w-3 text-orange-500" />
      case 'performance_issue':
        return <TrendingUp className="h-3 w-3 text-red-500" />
      default:
        return <Activity className="h-3 w-3 text-gray-500" />
    }
  }

  return (
    <div className="h-full flex flex-col bg-card border border-border rounded-lg overflow-hidden">
      {/* Header */}
      <div className="p-3 border-b border-border bg-muted/50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bot className="h-5 w-5 text-primary" />
            <h3 className="font-semibold text-sm">AI Agent</h3>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowSettings(!showSettings)}
              className="p-1 hover:bg-muted rounded transition-colors"
              title="Agent Settings"
            >
              <Settings className="h-4 w-4" />
            </button>
            
            <div className="flex items-center gap-1">
              {getStatusIcon()}
              <span className="text-xs text-muted-foreground">{getStatusText()}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Settings Panel */}
      <AnimatePresence>
        {showSettings && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className="border-b border-border bg-muted/30"
          >
            <div className="p-3 space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm">Max Iterations</label>
                <input
                  type="number"
                  value={settings.maxIterations}
                  onChange={(e) => setSettings(prev => ({ ...prev, maxIterations: parseInt(e.target.value) }))}
                  className="w-16 px-2 py-1 text-xs border border-border rounded bg-background"
                  min="1"
                  max="10"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <label className="text-sm">Auto Refinement</label>
                <input
                  type="checkbox"
                  checked={settings.autoRefinement}
                  onChange={(e) => setSettings(prev => ({ ...prev, autoRefinement: e.target.checked }))}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <label className="text-sm">Background Monitoring</label>
                <input
                  type="checkbox"
                  checked={settings.backgroundMonitoring}
                  onChange={(e) => setSettings(prev => ({ ...prev, backgroundMonitoring: e.target.checked }))}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Controls */}
      <div className="p-3 border-b border-border">
        <div className="flex items-center gap-2">
          <button
            onClick={toggleAutoMode}
            className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              agentStatus.isAutoModeEnabled
                ? 'bg-green-600 hover:bg-green-700 text-white'
                : 'bg-gray-600 hover:bg-gray-700 text-white'
            }`}
          >
            {agentStatus.isAutoModeEnabled ? (
              <>
                <CheckCircle className="h-4 w-4" />
                Auto Mode ON
              </>
            ) : (
              <>
                <AlertCircle className="h-4 w-4" />
                Auto Mode OFF
              </>
            )}
          </button>
          
          {agentStatus.isAutoModeEnabled && (
            <>
              {!agentStatus.isRunning ? (
                <button
                  onClick={startTask}
                  className="flex items-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium transition-colors"
                >
                  <Play className="h-4 w-4" />
                  Start Task
                </button>
              ) : (
                <button
                  onClick={stopTask}
                  className="flex items-center gap-2 px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md text-sm font-medium transition-colors"
                >
                  <Square className="h-4 w-4" />
                  Stop Task
                </button>
              )}
            </>
          )}
        </div>
      </div>

      {/* Current Task */}
      {agentStatus.currentTask && (
        <div className="p-3 border-b border-border bg-blue-50 dark:bg-blue-900/10">
          <div className="flex items-center gap-2 mb-2">
            <Target className="h-4 w-4 text-blue-500" />
            <span className="text-sm font-medium">Current Task</span>
          </div>
          <p className="text-xs text-muted-foreground mb-2">{agentStatus.currentTask.originalPrompt}</p>
          <div className="flex items-center gap-4 text-xs">
            <span>Complexity: {agentStatus.currentTask.complexity}</span>
            <span>Tasks: {agentStatus.currentTask.tasks.length}</span>
            <span>Iteration: {agentStatus.iterationCount}/{agentStatus.maxIterations}</span>
          </div>
        </div>
      )}

      {/* Progress Feed */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-3 border-b border-border">
          <div className="flex items-center gap-2">
            <Activity className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Activity Feed</span>
          </div>
        </div>
        
        <div className="p-3 space-y-2">
          {progress.length === 0 ? (
            <div className="text-center py-8">
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mx-auto mb-3">
                <Bot className="h-6 w-6 text-muted-foreground" />
              </div>
              <p className="text-sm text-muted-foreground">
                No activity yet. Enable Auto Mode to start autonomous operations.
              </p>
            </div>
          ) : (
            <AnimatePresence>
              {progress.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="flex items-start gap-2 p-2 rounded-md bg-muted/50"
                >
                  {getProgressIcon(item.type)}
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-foreground">{item.message}</p>
                    {item.task && (
                      <p className="text-xs text-muted-foreground">
                        {item.task.title} ({item.task.estimatedTime})
                      </p>
                    )}
                    {item.suggestion && (
                      <p className="text-xs text-purple-600 dark:text-purple-400">
                        💡 {item.suggestion}
                      </p>
                    )}
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {new Date().toLocaleTimeString()}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
          )}
        </div>
      </div>
    </div>
  )
}

export default AIAgentPanel
