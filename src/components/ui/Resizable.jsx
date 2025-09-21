import { useState, useRef, useEffect, useCallback } from 'react'

const ResizablePanelGroup = ({ children, direction = 'horizontal', className = '' }) => {
  return (
    <div className={`resizable-panel-group flex ${direction} h-full ${className}`}>
      {children}
    </div>
  )
}

const ResizablePanel = ({ children, defaultSize = 50, minSize = 10, maxSize = 90, className = '' }) => {
  return (
    <div 
      className={`resizable-panel ${className}`}
      style={{ 
        flexBasis: `${defaultSize}%`, 
        minWidth: `${minSize}%`, 
        maxWidth: `${maxSize}%` 
      }}
    >
      {children}
    </div>
  )
}

const ResizableHandle = ({ className = '', onResize, children, handleIndex = 0 }) => {
  const [isResizing, setIsResizing] = useState(false)
  const handleRef = useRef(null)

  const handleMouseDown = (e) => {
    setIsResizing(true)
    e.preventDefault()
    document.body.style.cursor = 'col-resize'
    document.body.style.userSelect = 'none'
    
    console.log('Handle clicked:', handleIndex)
  }

  const handleMouseMove = useCallback((e) => {
    if (!isResizing) return
    
    const panelGroup = handleRef.current?.parentElement
    if (!panelGroup) return
    
    const rect = panelGroup.getBoundingClientRect()
    const mouseX = e.clientX - rect.left
    const percentage = (mouseX / rect.width) * 100
    
    // Get all panels directly
    const allChildren = Array.from(panelGroup.children)
    const panels = allChildren.filter(child => child.classList.contains('resizable-panel'))
    
    console.log('Total panels found:', panels.length, 'Handle index:', handleIndex)
    
    if (panels.length >= 2) {
      let leftPanel, rightPanel
      
      if (handleIndex === 0) {
        // First handle: resize File Manager (0) and Code Editor (1)
        leftPanel = panels[0]
        rightPanel = panels[1]
        console.log('Resizing File Manager and Code Editor')
      } else if (handleIndex === 1) {
        // Second handle: resize Code Editor (1) and AI Assistant (2)
        leftPanel = panels[1]
        rightPanel = panels[2]
        console.log('Resizing Code Editor and AI Assistant')
      }
      
      if (leftPanel && rightPanel) {
        // Calculate new sizes based on mouse position
        const leftSize = Math.max(15, Math.min(70, percentage))
        const rightSize = Math.max(15, Math.min(70, 100 - leftSize))
        
        console.log('Setting sizes:', { leftSize, rightSize, percentage })
        
        // Apply new sizes
        leftPanel.style.flexBasis = `${leftSize}%`
        rightPanel.style.flexBasis = `${rightSize}%`
        
        // Visual debugging
        leftPanel.style.border = '3px solid red'
        rightPanel.style.border = '3px solid blue'
        setTimeout(() => {
          leftPanel.style.border = ''
          rightPanel.style.border = ''
        }, 300)
        
        // Call onResize callback if provided
        if (onResize) {
          onResize({ leftSize, rightSize })
        }
      }
    }
  }, [isResizing, onResize, handleIndex])

  const handleMouseUp = useCallback(() => {
    setIsResizing(false)
    document.body.style.cursor = ''
    document.body.style.userSelect = ''
  }, [])

  useEffect(() => {
    if (isResizing) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
      }
    }
  }, [isResizing, handleMouseMove, handleMouseUp])

  return (
    <div
      ref={handleRef}
      className={`resizable-handle w-2 bg-border/30 hover:bg-primary/50 transition-all duration-200 cursor-col-resize hover:w-3 group flex items-center justify-center ${
        isResizing ? 'bg-primary/70' : ''
      } ${className}`}
      onMouseDown={handleMouseDown}
    >
      {children || <div className="w-1 h-8 bg-border/50 rounded-full group-hover:bg-primary/70 transition-colors" />}
    </div>
  )
}

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
