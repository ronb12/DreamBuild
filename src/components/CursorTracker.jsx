import React, { useEffect, useRef, useState } from 'react'
import { useCollaboration } from '../contexts/CollaborationContext'

const CursorTracker = ({ editorRef, fileId }) => {
  const { cursors, updateCursor } = useCollaboration()
  const [localCursors, setLocalCursors] = useState([])
  const cursorElementsRef = useRef(new Map())

  // Update cursor positions when cursors change
  useEffect(() => {
    if (!editorRef?.current || !fileId) return

    const editor = editorRef.current
    const editorContainer = editor.getContainerDomNode()
    
    // Clear existing cursors
    cursorElementsRef.current.forEach(element => {
      if (element.parentNode) {
        element.parentNode.removeChild(element)
      }
    })
    cursorElementsRef.current.clear()
    setLocalCursors([])

    // Add new cursors
    const fileCursors = cursors.filter(cursor => cursor.fileId === fileId)
    
    fileCursors.forEach(cursor => {
      const cursorElement = createCursorElement(cursor)
      if (cursorElement) {
        editorContainer.appendChild(cursorElement)
        cursorElementsRef.current.set(cursor.userId, cursorElement)
      }
    })

    setLocalCursors(fileCursors)
  }, [cursors, fileId, editorRef])

  // Create cursor element
  const createCursorElement = (cursor) => {
    if (!editorRef?.current) return null

    const editor = editorRef.current
    const position = editor.getPosition()
    
    if (!position) return null

    // Calculate cursor position
    const lineHeight = editor.getOption('lineHeight') || 20
    const top = (cursor.line - 1) * lineHeight + 2
    const left = cursor.column * 8 + 20 // Approximate character width

    const cursorElement = document.createElement('div')
    cursorElement.className = 'collaboration-cursor'
    cursorElement.style.cssText = `
      position: absolute;
      top: ${top}px;
      left: ${left}px;
      width: 2px;
      height: ${lineHeight}px;
      background-color: ${getCursorColor(cursor.userId)};
      z-index: 10;
      pointer-events: none;
      animation: blink 1s infinite;
    `

    // Add user label
    const label = document.createElement('div')
    label.className = 'cursor-label'
    label.textContent = cursor.userName
    label.style.cssText = `
      position: absolute;
      top: -20px;
      left: 0;
      background-color: ${getCursorColor(cursor.userId)};
      color: white;
      padding: 2px 6px;
      border-radius: 3px;
      font-size: 11px;
      white-space: nowrap;
      pointer-events: none;
    `

    cursorElement.appendChild(label)

    // Add CSS animation
    if (!document.getElementById('cursor-animation')) {
      const style = document.createElement('style')
      style.id = 'cursor-animation'
      style.textContent = `
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `
      document.head.appendChild(style)
    }

    return cursorElement
  }

  // Get cursor color based on user ID
  const getCursorColor = (userId) => {
    const colors = [
      '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7',
      '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9'
    ]
    
    let hash = 0
    for (let i = 0; i < userId.length; i++) {
      hash = userId.charCodeAt(i) + ((hash << 5) - hash)
    }
    
    return colors[Math.abs(hash) % colors.length]
  }

  // Track local cursor changes
  useEffect(() => {
    if (!editorRef?.current || !fileId) return

    const editor = editorRef.current
    
    const handleCursorChange = () => {
      const position = editor.getPosition()
      if (position) {
        updateCursor(fileId, position.lineNumber, position.column)
      }
    }

    const handleSelectionChange = () => {
      const selection = editor.getSelection()
      if (selection) {
        updateCursor(fileId, selection.startLineNumber, selection.startColumn, {
          startLine: selection.startLineNumber,
          startColumn: selection.startColumn,
          endLine: selection.endLineNumber,
          endColumn: selection.endColumn
        })
      }
    }

    // Listen for cursor changes
    editor.onDidChangeCursorPosition(handleCursorChange)
    editor.onDidChangeCursorSelection(handleSelectionChange)

    return () => {
      editor.onDidChangeCursorPosition(handleCursorChange)
      editor.onDidChangeCursorSelection(handleSelectionChange)
    }
  }, [editorRef, fileId, updateCursor])

  return null // This component doesn't render anything visible
}

export default CursorTracker

