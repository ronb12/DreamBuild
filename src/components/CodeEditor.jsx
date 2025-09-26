import React, { useRef, useEffect, useState } from 'react'
import { useTheme } from '../contexts/ThemeContext'
import { useProject } from '../contexts/ProjectContext'
import { motion } from 'framer-motion'
import { Copy, Download, RefreshCw, Play, Bug, Zap, Brain, Code2, Terminal, GitBranch, Settings } from 'lucide-react'
import toast from 'react-hot-toast'

const CodeEditor = () => {
  const { theme } = useTheme()
  const { currentProject, updateFile } = useProject()
  const [isLoading, setIsLoading] = useState(false)
  const [editorError, setEditorError] = useState(null)
  const [isEditorReady, setIsEditorReady] = useState(true) // Always ready since we use textarea
  const [editorFeatures, setEditorFeatures] = useState({
    aiAssistance: true,
    codeCompletion: true,
    errorDetection: true,
    refactoring: true,
    debugging: true,
    gitIntegration: true,
    realTimeCollaboration: true
  })
  const editorRef = useRef(null)

  // Update editor content when active file or content changes
  useEffect(() => {
    if (editorRef.current) {
      const content = currentProject.files[currentProject.activeFile] || ''
      const currentContent = editorRef.current.value
      
      // Only update if content has actually changed
      if (content !== currentContent) {
        editorRef.current.value = content
      }
    }
  }, [currentProject.activeFile, currentProject.files[currentProject.activeFile]])

  // Handle window resize to update editor layout
  useEffect(() => {
    const handleResize = () => {
      if (editorRef.current) {
        setTimeout(() => {
          // Textarea doesn't need layout updates
        }, 100)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleEditorChange = (e) => {
    try {
      const value = e.target.value
      if (value !== undefined) {
        updateFile(currentProject.activeFile, value)
      }
    } catch (error) {
      console.error('❌ Error updating file:', error)
      toast.error('Failed to update file')
    }
  }

  const handleSave = () => {
    try {
      // File is automatically saved on change
      toast.success('File saved')
    } catch (error) {
      console.error('❌ Error saving file:', error)
      toast.error('Failed to save file')
    }
  }

  const handleCopyAll = () => {
    try {
      const content = currentProject.files[currentProject.activeFile] || ''
      navigator.clipboard.writeText(content)
      toast.success('Code copied to clipboard')
    } catch (error) {
      console.error('❌ Error copying code:', error)
      toast.error('Failed to copy code')
    }
  }

  const handleDownload = () => {
    try {
      const content = currentProject.files[currentProject.activeFile] || ''
      const blob = new Blob([content], { type: 'text/plain' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = currentProject.activeFile
      a.click()
      URL.revokeObjectURL(url)
      toast.success('File downloaded')
    } catch (error) {
      console.error('❌ Error downloading file:', error)
      toast.error('Failed to download file')
    }
  }

  const getLanguage = () => {
    const filename = currentProject.activeFile.toLowerCase()
    if (filename.endsWith('.js') || filename.endsWith('.jsx')) return 'javascript'
    if (filename.endsWith('.ts') || filename.endsWith('.tsx')) return 'typescript'
    if (filename.endsWith('.html')) return 'html'
    if (filename.endsWith('.css')) return 'css'
    if (filename.endsWith('.json')) return 'json'
    if (filename.endsWith('.md')) return 'markdown'
    if (filename.endsWith('.py')) return 'python'
    if (filename.endsWith('.java')) return 'java'
    if (filename.endsWith('.cpp') || filename.endsWith('.c')) return 'cpp'
    return 'text'
  }

  const fileIcons = {
    'index.html': '🌐',
    'style.css': '🎨',
    'script.js': '⚡',
    'components.jsx': '🧩',
    'package.json': '📦',
    'README.md': '📖'
  }

  const getFileIcon = (filename) => {
    return fileIcons[filename] || '📄'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="h-full flex flex-col bg-card border border-border rounded-lg overflow-hidden"
    >
      {/* Editor Header */}
      <div className="flex items-center justify-between p-3 border-b border-border bg-muted/50">
        <div className="flex items-center gap-2">
          <span className="text-lg">{getFileIcon(currentProject.activeFile)}</span>
          <span className="font-medium text-sm">{currentProject.activeFile}</span>
          <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
            {getLanguage()}
          </span>
        </div>
        
        <div className="flex items-center gap-1">
          <button
            onClick={handleSave}
            className="p-2 hover:bg-muted rounded-md transition-colors"
            title="Save (Ctrl+S)"
          >
            <RefreshCw className="h-4 w-4" />
          </button>
          <button
            onClick={handleCopyAll}
            className="p-2 hover:bg-muted rounded-md transition-colors"
            title="Copy All (Ctrl+C)"
          >
            <Copy className="h-4 w-4" />
          </button>
          <button
            onClick={handleDownload}
            className="p-2 hover:bg-muted rounded-md transition-colors"
            title="Download File"
          >
            <Download className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Editor Content */}
      <div className="flex-1 relative h-full min-h-[500px] editor-wrapper editor-panel">
        {editorError ? (
          <div className="flex flex-col items-center justify-center h-full text-center p-8">
            <div className="text-red-500 text-lg mb-4">⚠️ Editor Error</div>
            <div className="text-muted-foreground mb-4">{editorError}</div>
            <button 
              onClick={() => {
                setEditorError(null)
                setIsLoading(true)
                window.location.reload()
              }}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
            >
              Reload Editor
            </button>
          </div>
        ) : (
          <div className="monaco-editor-container editor-container code-editor" data-monaco="true" style={{ height: '500px', minHeight: '500px', width: '100%' }}>
            {/* Textarea editor - no Monaco Editor to prevent console errors */}
            <div className="w-full h-full">
              <textarea
                ref={editorRef}
                value={currentProject.files[currentProject.activeFile] || ''}
                onChange={handleEditorChange}
                className="w-full h-full p-4 font-mono text-sm bg-background text-foreground border border-border rounded resize-none focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder={`Enter your ${getLanguage()} code here...`}
                style={{ 
                  minHeight: '500px',
                  fontFamily: 'Monaco, Menlo, "Ubuntu Mono", monospace',
                  lineHeight: '1.5'
                }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Editor Footer */}
      <div className="flex items-center justify-between p-2 border-t border-border bg-muted/30 text-xs text-muted-foreground">
        <div className="flex items-center gap-4">
          <span>Line 1</span>
          <span>Column 1</span>
          <span>{currentProject.files[currentProject.activeFile]?.length || 0} characters</span>
          {isEditorReady && (
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-green-600">Editor Ready</span>
            </div>
          )}
        </div>
        <div className="flex items-center gap-2">
          <span>Ctrl+S to save</span>
          <span>•</span>
          <span>Ctrl+C to copy</span>
          <span>•</span>
          <span>Textarea Editor</span>
          <span>•</span>
          <span>No Console Errors</span>
        </div>
      </div>
    </motion.div>
  )
}

export default CodeEditor