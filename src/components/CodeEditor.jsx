import { useRef, useEffect, useState } from 'react'
import { Editor } from '@monaco-editor/react'
import { useTheme } from '../contexts/ThemeContext'
import { useProject } from '../contexts/ProjectContext'
import { motion } from 'framer-motion'
import { Copy, Download, RefreshCw } from 'lucide-react'
import toast from 'react-hot-toast'

const CodeEditor = () => {
  const { theme } = useTheme()
  const { currentProject, updateFile } = useProject()
  const [isLoading, setIsLoading] = useState(true)
  const [editorError, setEditorError] = useState(null)
  const editorRef = useRef(null)

  // Update editor content when active file or content changes
  useEffect(() => {
    if (editorRef.current) {
      const content = currentProject.files[currentProject.activeFile] || ''
      const currentContent = editorRef.current.getValue()
      
      // Only update if content has actually changed
      if (content !== currentContent) {
        editorRef.current.setValue(content)
      }
    }
  }, [currentProject.activeFile, currentProject.files[currentProject.activeFile]])

  // Handle window resize to update editor layout
  useEffect(() => {
    const handleResize = () => {
      if (editorRef.current) {
        setTimeout(() => {
          editorRef.current.layout()
        }, 100)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleEditorDidMount = (editor, monaco) => {
    try {
      console.log('🎯 Monaco Editor mounting...')
      setIsLoading(false)
      setEditorError(null)
      editorRef.current = editor
      
      // Set initial content if available
      const content = currentProject.files[currentProject.activeFile] || ''
      if (content) {
        editor.setValue(content)
      }
      
      // Configure Monaco Editor
      monaco.editor.defineTheme('custom-dark', {
      base: 'vs-dark',
      inherit: true,
      rules: [
        { token: 'comment', foreground: '6A9955' },
        { token: 'keyword', foreground: '569CD6' },
        { token: 'string', foreground: 'CE9178' },
        { token: 'number', foreground: 'B5CEA8' },
        { token: 'tag', foreground: '569CD6' },
        { token: 'attribute.name', foreground: '92C5F8' },
        { token: 'attribute.value', foreground: 'CE9178' }
      ],
      colors: {
        'editor.background': '#1e1e1e',
        'editor.foreground': '#d4d4d4',
        'editor.lineHighlightBackground': '#2a2d2e',
        'editor.selectionBackground': '#264f78',
        'editor.inactiveSelectionBackground': '#3a3d41'
      }
    })

    monaco.editor.defineTheme('custom-light', {
      base: 'vs',
      inherit: true,
      rules: [
        { token: 'comment', foreground: '6A9955' },
        { token: 'keyword', foreground: '0000FF' },
        { token: 'string', foreground: 'A31515' },
        { token: 'number', foreground: '098658' },
        { token: 'tag', foreground: '800000' },
        { token: 'attribute.name', foreground: 'FF0000' },
        { token: 'attribute.value', foreground: '0451A5' }
      ],
      colors: {
        'editor.background': '#ffffff',
        'editor.foreground': '#000000',
        'editor.lineHighlightBackground': '#f5f5f5',
        'editor.selectionBackground': '#add6ff',
        'editor.inactiveSelectionBackground': '#e5ebf1'
      }
    })

    // Set theme
    monaco.editor.setTheme(theme === 'dark' ? 'custom-dark' : 'custom-light')

    // Configure editor options
    editor.updateOptions({
      fontSize: 14,
      fontFamily: 'JetBrains Mono, Monaco, Consolas, monospace',
      lineHeight: 22,
      minimap: { enabled: true },
      scrollBeyondLastLine: false,
      automaticLayout: true,
      wordWrap: 'on',
      formatOnPaste: true,
      formatOnType: true,
      suggestOnTriggerCharacters: true,
      acceptSuggestionOnEnter: 'on',
      tabCompletion: 'on',
      wrappingIndent: 'indent',
      lineNumbers: 'on',
      glyphMargin: true,
      folding: true,
      foldingStrategy: 'indentation',
      showFoldingControls: 'always'
    })

    // Force layout update after mounting
    setTimeout(() => {
      editor.layout()
    }, 100)

    // Add keyboard shortcuts
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, () => {
      handleSave()
    })

    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyC, () => {
      if (editor.getSelection().isEmpty()) {
        handleCopyAll()
      }
    })
    } catch (error) {
      console.error('❌ Error mounting Monaco Editor:', error)
      console.error('❌ Monaco Editor error details:', error.message, error.stack)
      setEditorError(error.message)
      setIsLoading(false)
      toast.error('Failed to load code editor')
    }
  }

  const handleEditorChange = (value) => {
    try {
      if (value !== undefined) {
        updateFile(currentProject.activeFile, value)
      }
    } catch (error) {
      console.error('Error updating file:', error)
      toast.error('Failed to save changes')
    }
  }

  const getLanguage = () => {
    const extension = currentProject.activeFile.split('.').pop()
    const languageMap = {
      'html': 'html',
      'css': 'css',
      'js': 'javascript',
      'jsx': 'javascript',
      'ts': 'typescript',
      'tsx': 'typescript',
      'py': 'python',
      'java': 'java',
      'cpp': 'cpp',
      'c': 'c',
      'php': 'php',
      'rb': 'ruby',
      'go': 'go',
      'rs': 'rust',
      'swift': 'swift',
      'kt': 'kotlin',
      'scala': 'scala',
      'clj': 'clojure',
      'hs': 'haskell',
      'ml': 'fsharp',
      'fs': 'fsharp',
      'vb': 'vb',
      'sql': 'sql',
      'json': 'json',
      'xml': 'xml',
      'yaml': 'yaml',
      'yml': 'yaml',
      'md': 'markdown',
      'sh': 'shell',
      'bash': 'shell',
      'ps1': 'powershell',
      'dockerfile': 'dockerfile'
    }
    return languageMap[extension] || 'plaintext'
  }

  const handleCopy = () => {
    const content = currentProject.files[currentProject.activeFile] || ''
    navigator.clipboard.writeText(content)
    toast.success('Code copied to clipboard!')
  }

  const handleCopyAll = () => {
    const content = currentProject.files[currentProject.activeFile] || ''
    navigator.clipboard.writeText(content)
    toast.success('All code copied to clipboard!')
  }

  const handleDownload = () => {
    const content = currentProject.files[currentProject.activeFile] || ''
    const blob = new Blob([content], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = currentProject.activeFile
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
    toast.success(`Downloaded ${currentProject.activeFile}`)
  }

  const handleSave = () => {
    toast.success('Code saved!')
  }

  const handleFormat = () => {
    if (editorRef.current) {
      editorRef.current.getAction('editor.action.formatDocument').run()
      toast.success('Code formatted!')
    }
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
        
        <div className="flex items-center gap-2">
          <button
            onClick={handleFormat}
            className="p-2 hover:bg-muted rounded-md transition-colors"
            title="Format Code (Ctrl+Shift+F)"
          >
            <RefreshCw className="h-4 w-4" />
          </button>
          <button
            onClick={handleCopy}
            className="p-2 hover:bg-muted rounded-md transition-colors"
            title="Copy Code"
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
      <div className="flex-1 relative h-full min-h-[500px]">
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
          <Editor
            key={`${currentProject.activeFile}-${currentProject.files[currentProject.activeFile]?.length || 0}`}
            height="100%"
            language={getLanguage()}
            value={currentProject.files[currentProject.activeFile] || ''}
            onChange={handleEditorChange}
            onMount={handleEditorDidMount}
            theme={theme === 'dark' ? 'custom-dark' : 'custom-light'}
            loading={
              <div className="flex items-center justify-center h-full">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                <span className="ml-2">Loading editor...</span>
              </div>
            }
            options={{
            selectOnLineNumbers: true,
            roundedSelection: false,
            readOnly: false,
            cursorStyle: 'line',
            automaticLayout: true,
            mouseWheelZoom: true,
            smoothScrolling: true,
            cursorBlinking: 'blink',
            cursorSmoothCaretAnimation: true,
            renderLineHighlight: 'line',
            renderWhitespace: 'selection',
            renderIndentGuides: true,
            highlightActiveIndentGuide: true,
            bracketPairColorization: { enabled: true },
            guides: {
              bracketPairs: true,
              indentation: true
            },
            scrollBeyondLastLine: false,
            wordWrap: 'on',
            wrappingIndent: 'indent',
            lineNumbers: 'on',
            glyphMargin: true,
            folding: true,
            foldingStrategy: 'indentation',
            showFoldingControls: 'always',
            unfoldOnClickAfterEnd: false,
            contextmenu: true,
            mouseWheelScrollSensitivity: 1,
            fastScrollSensitivity: 5,
            cursorSurroundingLines: 3,
            cursorSurroundingLinesStyle: 'default',
            scrollbar: {
              vertical: 'auto',
              horizontal: 'auto',
              verticalScrollbarSize: 14,
              horizontalScrollbarSize: 14,
              useShadows: true,
              verticalHasArrows: false,
              horizontalHasArrows: false,
              arrowSize: 11,
              verticalSliderSize: 14,
              horizontalSliderSize: 14
            }
          }}
          />
        )}
      </div>

      {/* Editor Footer */}
      <div className="flex items-center justify-between p-2 border-t border-border bg-muted/30 text-xs text-muted-foreground">
        <div className="flex items-center gap-4">
          <span>Line {editorRef.current?.getPosition()?.lineNumber || 1}</span>
          <span>Column {editorRef.current?.getPosition()?.column || 1}</span>
          <span>{currentProject.files[currentProject.activeFile]?.length || 0} characters</span>
        </div>
        <div className="flex items-center gap-2">
          <span>Ctrl+S to save</span>
          <span>•</span>
          <span>Ctrl+C to copy all</span>
        </div>
      </div>
    </motion.div>
  )
}

export default CodeEditor
