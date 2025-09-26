// Multi-Window Service
// Handles multiple project windows like Cursor IDE

class MultiWindowService {
  constructor() {
    this.windows = new Map() // Map of windowId -> window data
    this.activeWindowId = null
    this.windowCounter = 0
    this.listeners = new Map() // Event listeners for window events
  }

  // Create a new window
  createWindow(projectData = null, options = {}) {
    console.log('🪟 MultiWindowService.createWindow called with:', { projectData, options })
    
    const windowId = `window_${++this.windowCounter}`
    console.log('🪟 Generated window ID:', windowId)
    
    const window = {
      id: windowId,
      project: projectData || this.createDefaultProject(),
      isActive: false,
      isMinimized: false,
      isMaximized: false,
      position: options.position || { x: 100, y: 100 },
      size: options.size || { width: 1200, height: 800 },
      zIndex: this.getNextZIndex(),
      lastAccessed: new Date(),
      tabs: ['editor', 'preview', 'terminal', 'conversation'],
      activeTab: 'editor',
      isDirty: false, // Has unsaved changes
      isFullscreen: false,
      theme: options.theme || 'default',
      layout: options.layout || 'default'
    }

    console.log('🪟 Window object created:', window)
    
    this.windows.set(windowId, window)
    console.log('🪟 Window added to Map. Total windows:', this.windows.size)
    
    this.setActiveWindow(windowId)
    console.log('🪟 Window set as active:', windowId)
    
    this.notifyListeners('windowCreated', { windowId, window })
    console.log(`🪟 Window created: ${windowId}`)
    
    return windowId
  }

  // Create default project for new window
  createDefaultProject() {
    return {
      id: null,
      name: 'Untitled Project',
      files: {
        'index.html': '',
        'style.css': '',
        'script.js': '',
        'components.jsx': ''
      },
      activeFile: 'index.html',
      config: {
        appType: 'frontend',
        language: 'javascript',
        styling: 'tailwind',
        database: 'none',
        auth: 'none'
      },
      lastModified: new Date()
    }
  }

  // Set active window
  setActiveWindow(windowId) {
    if (!this.windows.has(windowId)) {
      console.error(`Window ${windowId} not found`)
      return false
    }

    // Deactivate current active window
    if (this.activeWindowId && this.windows.has(this.activeWindowId)) {
      this.windows.get(this.activeWindowId).isActive = false
    }

    // Activate new window
    this.activeWindowId = windowId
    this.windows.get(windowId).isActive = true
    this.windows.get(windowId).lastAccessed = new Date()
    this.windows.get(windowId).zIndex = this.getNextZIndex()

    this.notifyListeners('windowActivated', { windowId })
    console.log(`🪟 Window activated: ${windowId}`)
    
    return true
  }

  // Get active window
  getActiveWindow() {
    return this.activeWindowId ? this.windows.get(this.activeWindowId) : null
  }

  // Get all windows
  getAllWindows() {
    return Array.from(this.windows.values())
  }

  // Get window by ID
  getWindow(windowId) {
    return this.windows.get(windowId)
  }

  // Close window
  closeWindow(windowId) {
    if (!this.windows.has(windowId)) {
      console.error(`Window ${windowId} not found`)
      return false
    }

    const window = this.windows.get(windowId)
    
    // Check if there are unsaved changes
    if (window.isDirty) {
      this.notifyListeners('windowCloseRequested', { windowId, window })
      return false // Let the UI handle the confirmation
    }

    this.windows.delete(windowId)
    
    // If this was the active window, switch to another window
    if (this.activeWindowId === windowId) {
      const remainingWindows = this.getAllWindows()
      if (remainingWindows.length > 0) {
        // Switch to the most recently accessed window
        const nextWindow = remainingWindows.reduce((latest, current) => 
          current.lastAccessed > latest.lastAccessed ? current : latest
        )
        this.setActiveWindow(nextWindow.id)
      } else {
        this.activeWindowId = null
      }
    }

    this.notifyListeners('windowClosed', { windowId })
    console.log(`🪟 Window closed: ${windowId}`)
    
    return true
  }

  // Force close window (ignoring unsaved changes)
  forceCloseWindow(windowId) {
    if (!this.windows.has(windowId)) {
      return false
    }

    this.windows.delete(windowId)
    
    if (this.activeWindowId === windowId) {
      const remainingWindows = this.getAllWindows()
      if (remainingWindows.length > 0) {
        const nextWindow = remainingWindows.reduce((latest, current) => 
          current.lastAccessed > latest.lastAccessed ? current : latest
        )
        this.setActiveWindow(nextWindow.id)
      } else {
        this.activeWindowId = null
      }
    }

    this.notifyListeners('windowClosed', { windowId })
    return true
  }

  // Update window project
  updateWindowProject(windowId, projectData) {
    const window = this.windows.get(windowId)
    if (!window) {
      console.error(`Window ${windowId} not found`)
      return false
    }

    window.project = { ...window.project, ...projectData }
    window.isDirty = true
    window.lastModified = new Date()

    this.notifyListeners('windowProjectUpdated', { windowId, project: window.project })
    return true
  }

  // Update window state
  updateWindowState(windowId, state) {
    const window = this.windows.get(windowId)
    if (!window) {
      console.error(`Window ${windowId} not found`)
      return false
    }

    Object.assign(window, state)
    window.lastAccessed = new Date()

    this.notifyListeners('windowStateUpdated', { windowId, state })
    return true
  }

  // Minimize window
  minimizeWindow(windowId) {
    return this.updateWindowState(windowId, { isMinimized: true })
  }

  // Maximize window
  maximizeWindow(windowId) {
    return this.updateWindowState(windowId, { isMaximized: true })
  }

  // Restore window
  restoreWindow(windowId) {
    return this.updateWindowState(windowId, { 
      isMinimized: false, 
      isMaximized: false 
    })
  }

  // Toggle fullscreen
  toggleFullscreen(windowId) {
    const window = this.windows.get(windowId)
    if (!window) return false

    window.isFullscreen = !window.isFullscreen
    window.lastAccessed = new Date()

    this.notifyListeners('windowFullscreenToggled', { 
      windowId, 
      isFullscreen: window.isFullscreen 
    })
    return true
  }

  // Move window
  moveWindow(windowId, position) {
    return this.updateWindowState(windowId, { position })
  }

  // Resize window
  resizeWindow(windowId, size) {
    return this.updateWindowState(windowId, { size })
  }

  // Switch tab in window
  switchTab(windowId, tabId) {
    const window = this.windows.get(windowId)
    if (!window) return false

    if (window.tabs.includes(tabId)) {
      window.activeTab = tabId
      window.lastAccessed = new Date()
      
      this.notifyListeners('windowTabSwitched', { windowId, tabId })
      return true
    }
    
    return false
  }

  // Add tab to window
  addTab(windowId, tabId) {
    const window = this.windows.get(windowId)
    if (!window) return false

    if (!window.tabs.includes(tabId)) {
      window.tabs.push(tabId)
      window.lastAccessed = new Date()
      
      this.notifyListeners('windowTabAdded', { windowId, tabId })
      return true
    }
    
    return false
  }

  // Remove tab from window
  removeTab(windowId, tabId) {
    const window = this.windows.get(windowId)
    if (!window) return false

    const tabIndex = window.tabs.indexOf(tabId)
    if (tabIndex > -1) {
      window.tabs.splice(tabIndex, 1)
      
      // If this was the active tab, switch to another tab
      if (window.activeTab === tabId && window.tabs.length > 0) {
        window.activeTab = window.tabs[Math.max(0, tabIndex - 1)]
      }
      
      window.lastAccessed = new Date()
      
      this.notifyListeners('windowTabRemoved', { windowId, tabId })
      return true
    }
    
    return false
  }

  // Mark window as dirty (has unsaved changes)
  markWindowDirty(windowId, isDirty = true) {
    return this.updateWindowState(windowId, { isDirty })
  }

  // Save window project
  async saveWindowProject(windowId, projectData) {
    const window = this.windows.get(windowId)
    if (!window) return false

    window.project = { ...window.project, ...projectData }
    window.isDirty = false
    window.lastModified = new Date()

    this.notifyListeners('windowProjectSaved', { windowId, project: window.project })
    return true
  }

  // Duplicate window
  duplicateWindow(windowId) {
    const originalWindow = this.windows.get(windowId)
    if (!originalWindow) return null

    const newWindowId = this.createWindow(
      { ...originalWindow.project, name: `${originalWindow.project.name} (Copy)` },
      {
        position: {
          x: originalWindow.position.x + 30,
          y: originalWindow.position.y + 30
        },
        size: originalWindow.size,
        theme: originalWindow.theme,
        layout: originalWindow.layout
      }
    )

    // Copy window state
    const newWindow = this.windows.get(newWindowId)
    newWindow.tabs = [...originalWindow.tabs]
    newWindow.activeTab = originalWindow.activeTab

    this.notifyListeners('windowDuplicated', { 
      originalWindowId: windowId, 
      newWindowId 
    })

    return newWindowId
  }

  // Get next z-index
  getNextZIndex() {
    const windows = this.getAllWindows()
    const maxZIndex = Math.max(...windows.map(w => w.zIndex), 0)
    return maxZIndex + 1
  }

  // Bring window to front
  bringToFront(windowId) {
    const window = this.windows.get(windowId)
    if (!window) return false

    window.zIndex = this.getNextZIndex()
    window.lastAccessed = new Date()

    this.notifyListeners('windowBroughtToFront', { windowId })
    return true
  }

  // Arrange windows
  arrangeWindows(arrangement = 'cascade') {
    const windows = this.getAllWindows()
    
    switch (arrangement) {
      case 'cascade':
        this.arrangeCascade(windows)
        break
      case 'tile':
        this.arrangeTile(windows)
        break
      case 'minimize':
        windows.forEach(window => this.minimizeWindow(window.id))
        break
      case 'maximize':
        windows.forEach(window => this.maximizeWindow(window.id))
        break
    }

    this.notifyListeners('windowsArranged', { arrangement })
  }

  // Cascade arrangement
  arrangeCascade(windows) {
    const offset = 30
    windows.forEach((window, index) => {
      this.moveWindow(window.id, {
        x: 100 + (index * offset),
        y: 100 + (index * offset)
      })
      this.restoreWindow(window.id)
    })
  }

  // Tile arrangement
  arrangeTile(windows) {
    if (windows.length === 0) return

    const screenWidth = window.innerWidth
    const screenHeight = window.innerHeight
    const cols = Math.ceil(Math.sqrt(windows.length))
    const rows = Math.ceil(windows.length / cols)
    
    const windowWidth = Math.floor(screenWidth / cols)
    const windowHeight = Math.floor(screenHeight / rows)

    windows.forEach((window, index) => {
      const row = Math.floor(index / cols)
      const col = index % cols
      
      this.moveWindow(window.id, {
        x: col * windowWidth,
        y: row * windowHeight
      })
      this.resizeWindow(window.id, {
        width: windowWidth,
        height: windowHeight
      })
      this.restoreWindow(window.id)
    })
  }

  // Event listener management
  addEventListener(event, callback) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, new Set())
    }
    this.listeners.get(event).add(callback)
  }

  removeEventListener(event, callback) {
    if (this.listeners.has(event)) {
      this.listeners.get(event).delete(callback)
    }
  }

  notifyListeners(event, data) {
    if (this.listeners.has(event)) {
      this.listeners.get(event).forEach(callback => {
        try {
          callback(data)
        } catch (error) {
          console.error(`Error in window event listener for ${event}:`, error)
        }
      })
    }
  }

  // Get window statistics
  getStats() {
    const windows = this.getAllWindows()
    return {
      totalWindows: windows.length,
      activeWindows: windows.filter(w => !w.isMinimized).length,
      minimizedWindows: windows.filter(w => w.isMinimized).length,
      dirtyWindows: windows.filter(w => w.isDirty).length,
      totalProjects: new Set(windows.map(w => w.project.id)).size
    }
  }

  // Cleanup
  cleanup() {
    this.windows.clear()
    this.activeWindowId = null
    this.windowCounter = 0
    this.listeners.clear()
  }
}

export default new MultiWindowService()
