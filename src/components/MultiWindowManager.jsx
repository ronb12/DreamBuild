import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  X, 
  Minus, 
  Square, 
  Maximize2, 
  Minimize2, 
  Plus, 
  Copy, 
  MoreVertical,
  ChevronDown,
  Monitor,
  Folder,
  Code,
  Eye,
  Terminal,
  Brain,
  Sparkles
} from 'lucide-react'
import { useProject } from '../contexts/ProjectContext'
import multiWindowService from '../services/multiWindowService'
import WindowAwareAIBuilder from './WindowAwareAIBuilder'
import toast from 'react-hot-toast'

const MultiWindowManager = () => {
  console.log('🪟 MultiWindowManager component rendering...')
  
  const { currentProject, projects, loadProject } = useProject()
  const [windows, setWindows] = useState([])
  const [activeWindowId, setActiveWindowId] = useState(null)
  const [showWindowMenu, setShowWindowMenu] = useState(null)
  const [isWindowMenuOpen, setIsWindowMenuOpen] = useState(false)
  
  console.log('🪟 Current state:', { windows: windows.length, activeWindowId, isWindowMenuOpen })
  console.log('🪟 Windows array:', windows)

  // Load windows on mount
  useEffect(() => {
    console.log('🪟 MultiWindowManager useEffect running...')
    console.log('🪟 Service instance:', multiWindowService)
    
    const updateWindows = () => {
      console.log('🪟 Updating windows state...')
      const allWindows = multiWindowService.getAllWindows()
      const activeId = multiWindowService.activeWindowId
      console.log('🪟 Current windows:', allWindows.length, 'Active:', activeId)
      console.log('🪟 Windows data:', allWindows)
      setWindows(allWindows)
      setActiveWindowId(activeId)
      console.log('🪟 State set - windows:', allWindows.length, 'active:', activeId)
    }

    // Initial load
    updateWindows()

    // Listen for window events
    const handleWindowEvent = (data) => {
      console.log('🪟 Window event received:', data)
      updateWindows()
    }
    
    console.log('🪟 Adding event listeners...')
    multiWindowService.addEventListener('windowCreated', handleWindowEvent)
    multiWindowService.addEventListener('windowClosed', handleWindowEvent)
    multiWindowService.addEventListener('windowActivated', handleWindowEvent)
    multiWindowService.addEventListener('windowStateUpdated', handleWindowEvent)

    return () => {
      multiWindowService.removeEventListener('windowCreated', handleWindowEvent)
      multiWindowService.removeEventListener('windowClosed', handleWindowEvent)
      multiWindowService.removeEventListener('windowActivated', handleWindowEvent)
      multiWindowService.removeEventListener('windowStateUpdated', handleWindowEvent)
    }
  }, [])

  // Create new window
  const createNewWindow = useCallback(async (projectData = null) => {
    try {
      console.log('🪟 Creating new window...', projectData)
      console.log('🪟 Service before creation:', multiWindowService)
      console.log('🪟 Service methods:', Object.getOwnPropertyNames(Object.getPrototypeOf(multiWindowService)))
      
      const windowId = multiWindowService.createWindow(projectData)
      console.log('🪟 Window created with ID:', windowId)
      
      // If project data was provided, load it
      if (projectData && projectData.id) {
        await loadProject(projectData.id)
      }
      
      // Update windows state
      const allWindows = multiWindowService.getAllWindows()
      console.log('🪟 All windows after creation:', allWindows)
      setWindows(allWindows)
      setActiveWindowId(windowId)
      
      console.log('🪟 State updated - windows:', allWindows.length, 'active:', windowId)
      
      toast.success('New window created!')
      return windowId
    } catch (error) {
      console.error('Failed to create window:', error)
      toast.error('Failed to create window')
    }
  }, [loadProject])

  // Open project in new window
  const openProjectInNewWindow = useCallback(async (project) => {
    try {
      const windowId = multiWindowService.createWindow(project)
      await loadProject(project.id)
      toast.success(`Opened "${project.name}" in new window!`)
      return windowId
    } catch (error) {
      console.error('Failed to open project in new window:', error)
      toast.error('Failed to open project in new window')
    }
  }, [loadProject])

  // Close window
  const closeWindow = useCallback((windowId) => {
    const window = multiWindowService.getWindow(windowId)
    
    if (window && window.isDirty) {
      // Show confirmation dialog for unsaved changes
      if (window.confirm('This window has unsaved changes. Are you sure you want to close it?')) {
        multiWindowService.forceCloseWindow(windowId)
        toast.success('Window closed')
      }
    } else {
      multiWindowService.closeWindow(windowId)
      toast.success('Window closed')
    }
  }, [])

  // Switch to window
  const switchToWindow = useCallback((windowId) => {
    multiWindowService.setActiveWindow(windowId)
    toast.success('Switched to window')
  }, [])

  // Duplicate window
  const duplicateWindow = useCallback((windowId) => {
    const newWindowId = multiWindowService.duplicateWindow(windowId)
    if (newWindowId) {
      toast.success('Window duplicated!')
    }
  }, [])

  // Minimize window
  const minimizeWindow = useCallback((windowId) => {
    multiWindowService.minimizeWindow(windowId)
  }, [])

  // Maximize window
  const maximizeWindow = useCallback((windowId) => {
    multiWindowService.maximizeWindow(windowId)
  }, [])

  // Restore window
  const restoreWindow = useCallback((windowId) => {
    multiWindowService.restoreWindow(windowId)
  }, [])

  // Toggle fullscreen
  const toggleFullscreen = useCallback((windowId) => {
    multiWindowService.toggleFullscreen(windowId)
  }, [])

  // Arrange windows
  const arrangeWindows = useCallback((arrangement) => {
    multiWindowService.arrangeWindows(arrangement)
    toast.success(`Windows arranged: ${arrangement}`)
  }, [])

  // Get tab icon
  const getTabIcon = (tabId) => {
    const icons = {
      editor: Code,
      preview: Eye,
      terminal: Terminal,
      conversation: Brain,
      workspace: Sparkles
    }
    return icons[tabId] || Code
  }

  // Get project icon
  const getProjectIcon = (project) => {
    if (project.config?.appType === 'mobile') return '📱'
    if (project.config?.appType === 'desktop') return '🖥️'
    if (project.config?.appType === 'backend') return '⚙️'
    return '🌐'
  }

  // Render window
  const renderWindow = (window) => {
    const isActive = window.id === activeWindowId
    const TabIcon = getTabIcon(window.activeTab)
    const projectIcon = getProjectIcon(window.project)

    return (
      <motion.div
        key={window.id}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className={`fixed bg-card border border-border rounded-lg shadow-xl overflow-hidden ${
          isActive ? 'ring-2 ring-primary' : ''
        } ${window.isMinimized ? 'hidden' : ''}`}
        style={{
          left: window.position.x,
          top: window.position.y,
          width: window.size.width,
          height: window.size.height,
          zIndex: window.zIndex
        }}
      >
        {/* Window Header */}
        <div className="flex items-center justify-between bg-muted/50 px-3 py-2 border-b border-border">
          <div className="flex items-center gap-2">
            <span className="text-lg">{projectIcon}</span>
            <div className="flex items-center gap-1">
              <TabIcon className="h-4 w-4" />
              <span className="text-sm font-medium truncate max-w-32">
                {window.project.name}
              </span>
              {window.isDirty && <span className="text-orange-500">●</span>}
            </div>
          </div>
          
          <div className="flex items-center gap-1">
            <button
              onClick={() => minimizeWindow(window.id)}
              className="p-1 hover:bg-muted rounded transition-colors"
              title="Minimize"
            >
              <Minus className="h-3 w-3" />
            </button>
            
            <button
              onClick={() => window.isMaximized ? restoreWindow(window.id) : maximizeWindow(window.id)}
              className="p-1 hover:bg-muted rounded transition-colors"
              title={window.isMaximized ? "Restore" : "Maximize"}
            >
              {window.isMaximized ? <Minimize2 className="h-3 w-3" /> : <Square className="h-3 w-3" />}
            </button>
            
            <button
              onClick={() => closeWindow(window.id)}
              className="p-1 hover:bg-red-500 hover:text-white rounded transition-colors"
              title="Close"
            >
              <X className="h-3 w-3" />
            </button>
          </div>
        </div>

        {/* Window Content */}
        <div className="h-full overflow-hidden">
          <WindowAwareAIBuilder 
            windowId={window.id}
            project={window.project}
            activeTab={window.activeTab}
            onProjectUpdate={(projectData) => {
              multiWindowService.updateWindowProject(window.id, projectData)
            }}
            onTabChange={(tabId) => {
              multiWindowService.switchTab(window.id, tabId)
            }}
          />
        </div>
      </motion.div>
    )
  }

  // Render window menu
  const renderWindowMenu = () => {
    if (!isWindowMenuOpen) return null

    return (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className="absolute top-12 right-4 bg-card border border-border rounded-lg shadow-xl z-10 min-w-64"
      >
        <div className="p-2">
          <div className="text-xs font-semibold text-muted-foreground px-2 py-1 mb-2">
            Window Management
          </div>
          
          <button
            onClick={() => {
              createNewWindow()
              setIsWindowMenuOpen(false)
            }}
            className="w-full flex items-center gap-2 px-2 py-1.5 hover:bg-muted rounded text-sm"
          >
            <Plus className="h-4 w-4" />
            New Window
          </button>
          
          <button
            onClick={() => {
              arrangeWindows('cascade')
              setIsWindowMenuOpen(false)
            }}
            className="w-full flex items-center gap-2 px-2 py-1.5 hover:bg-muted rounded text-sm"
          >
            <Monitor className="h-4 w-4" />
            Cascade Windows
          </button>
          
          <button
            onClick={() => {
              arrangeWindows('tile')
              setIsWindowMenuOpen(false)
            }}
            className="w-full flex items-center gap-2 px-2 py-1.5 hover:bg-muted rounded text-sm"
          >
            <Monitor className="h-4 w-4" />
            Tile Windows
          </button>
          
          <div className="border-t border-border my-2" />
          
          <div className="text-xs font-semibold text-muted-foreground px-2 py-1 mb-2">
            Open Project in New Window
          </div>
          
          {projects.slice(0, 5).map((project) => (
            <button
              key={project.id}
              onClick={() => {
                openProjectInNewWindow(project)
                setIsWindowMenuOpen(false)
              }}
              className="w-full flex items-center gap-2 px-2 py-1.5 hover:bg-muted rounded text-sm"
            >
              <Folder className="h-4 w-4" />
              <span className="truncate">{project.name}</span>
            </button>
          ))}
        </div>
      </motion.div>
    )
  }

  // Render window list
  const renderWindowList = () => {
    if (windows.length === 0) return null

    return (
      <div className="flex items-center gap-1 bg-muted/30 rounded-lg p-1">
        {windows.map((window) => (
          <button
            key={window.id}
            onClick={() => switchToWindow(window.id)}
            className={`flex items-center gap-1 px-2 py-1 rounded text-xs transition-colors ${
              window.id === activeWindowId
                ? 'bg-primary text-primary-foreground'
                : 'hover:bg-muted'
            }`}
          >
            <span className="text-sm">{getProjectIcon(window.project)}</span>
            <span className="truncate max-w-20">{window.project.name}</span>
            {window.isDirty && <span className="text-orange-500">●</span>}
            <button
              onClick={(e) => {
                e.stopPropagation()
                closeWindow(window.id)
              }}
              className="hover:bg-red-500 hover:text-white rounded p-0.5"
            >
              <X className="h-3 w-3" />
            </button>
          </button>
        ))}
      </div>
    )
  }

  return (
    <div className="h-screen bg-background flex flex-col" style={{ paddingTop: '64px' }}>
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-muted/30 border-b border-border">
        <div className="flex items-center gap-4">
          <h1 className="text-lg font-semibold">DreamBuild Multi-Window</h1>
          {renderWindowList()}
        </div>
        
        <div className="flex items-center gap-2">
          <button
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              console.log('🪟 New Window button clicked!')
              try {
                console.log('🪟 Calling createNewWindow...')
                createNewWindow()
                console.log('🪟 createNewWindow called successfully')
              } catch (error) {
                console.error('🪟 Error calling createNewWindow:', error)
              }
            }}
            className="flex items-center gap-1 px-3 py-1.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm"
            type="button"
          >
            <Plus className="h-4 w-4" />
            New Window
          </button>
          
          <div className="relative">
            <button
              onClick={() => setIsWindowMenuOpen(!isWindowMenuOpen)}
              className="flex items-center gap-1 px-3 py-1.5 bg-muted hover:bg-muted/80 rounded-lg transition-colors text-sm"
            >
              <MoreVertical className="h-4 w-4" />
              <ChevronDown className="h-3 w-3" />
            </button>
            {renderWindowMenu()}
          </div>
        </div>
      </div>

      {/* Windows */}
      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence>
          {windows.map((window) => renderWindow(window))}
        </AnimatePresence>
        
        {/* Empty State */}
        {windows.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <Monitor className="h-16 w-16 text-muted-foreground mb-4" />
            <h2 className="text-xl font-semibold mb-2">No Windows Open</h2>
            <p className="text-muted-foreground mb-4">
              Create a new window to start working on your projects
            </p>
            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                console.log('🪟 Create New Window button clicked!')
                createNewWindow()
              }}
              className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              type="button"
            >
              <Plus className="h-4 w-4" />
              Create New Window
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default MultiWindowManager
