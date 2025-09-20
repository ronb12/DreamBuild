import { useState, useRef, useEffect } from 'react'

const ResizablePanelGroup = ({ children, direction = 'horizontal', className = '' }) => {
  return (
    <div className={`resizable-panel-group ${direction} ${className}`}>
      {children}
    </div>
  )
}

const ResizablePanel = ({ children, defaultSize = 50, minSize = 10, maxSize = 90, className = '' }) => {
  return (
    <div 
      className={`resizable-panel ${className}`}
      style={{ flexBasis: `${defaultSize}%`, minWidth: `${minSize}%`, maxWidth: `${maxSize}%` }}
    >
      {children}
    </div>
  )
}

const ResizableHandle = ({ className = '' }) => {
  const [isResizing, setIsResizing] = useState(false)
  const handleRef = useRef(null)

  const handleMouseDown = (e) => {
    setIsResizing(true)
    e.preventDefault()
  }

  const handleMouseMove = (e) => {
    if (!isResizing) return
    
    // Basic resize logic - in a real implementation you'd want more sophisticated handling
    const panelGroup = handleRef.current?.parentElement
    if (panelGroup) {
      const rect = panelGroup.getBoundingClientRect()
      const percentage = ((e.clientX - rect.left) / rect.width) * 100
      
      // Update panel sizes based on direction and position
      const panels = panelGroup.querySelectorAll('.resizable-panel')
      if (panels.length >= 2) {
        const leftPanel = panels[0]
        const rightPanel = panels[1]
        
        leftPanel.style.flexBasis = `${Math.max(10, Math.min(90, percentage))}%`
        rightPanel.style.flexBasis = `${Math.max(10, Math.min(90, 100 - percentage))}%`
      }
    }
  }

  const handleMouseUp = () => {
    setIsResizing(false)
  }

  useEffect(() => {
    if (isResizing) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
      }
    }
  }, [isResizing])

  return (
    <div
      ref={handleRef}
      className={`resizable-handle ${className} ${isResizing ? 'resizing' : ''}`}
      onMouseDown={handleMouseDown}
    />
  )
}

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
