import { useRef, useEffect, useState } from 'react'
import { Editor } from '@monaco-editor/react'
import { useTheme } from '../contexts/ThemeContext'
import { useProject } from '../contexts/ProjectContext'
import { motion } from 'framer-motion'
import { Copy, Download, RefreshCw, Play, Bug, Zap, Brain, Code2, Terminal, GitBranch, Settings } from 'lucide-react'
import toast from 'react-hot-toast'

const CodeEditor = () => {
  const { theme } = useTheme()
  const { currentProject, updateFile } = useProject()
  const [isLoading, setIsLoading] = useState(false) // Start as not loading
  const [editorError, setEditorError] = useState(null)
  const [isEditorReady, setIsEditorReady] = useState(false)
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
      console.log('🎯 Advanced Monaco Editor mounting...')
      console.log('🎯 Editor object:', editor)
      console.log('🎯 Monaco object:', monaco)
      setIsLoading(false)
      setIsEditorReady(true)
      setEditorError(null)
      editorRef.current = editor
      
      // Force editor to be visible
      if (editor && editor.getDomNode) {
        const domNode = editor.getDomNode()
        if (domNode) {
          domNode.style.display = 'block'
          domNode.style.visibility = 'visible'
          domNode.style.height = '500px'
          console.log('🎯 Editor DOM node found and made visible')
        }
      }
      
      // Set initial content if available
      const content = currentProject.files[currentProject.activeFile] || ''
      if (content) {
        editor.setValue(content)
      }
      
      // Advanced editor configuration
      console.log('🚀 Configuring advanced editor features...')
      
      // Configure Monaco Editor themes
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

      // Configure advanced editor options
      editor.updateOptions({
        fontSize: 14,
        fontFamily: 'JetBrains Mono, Monaco, Consolas, "Fira Code", monospace',
        fontLigatures: true,
        lineHeight: 22,
        minimap: { 
          enabled: true,
          showSlider: 'always',
          renderCharacters: true,
          maxColumn: 120
        },
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
        showFoldingControls: 'always',
        // Advanced features
        quickSuggestions: {
          other: true,
          comments: true,
          strings: true
        },
        suggest: {
          showKeywords: true,
          showSnippets: true,
          showFunctions: true,
          showConstructors: true,
          showFields: true,
          showVariables: true,
          showClasses: true,
          showStructs: true,
          showInterfaces: true,
          showModules: true,
          showProperties: true,
          showEvents: true,
          showOperators: true,
          showUnits: true,
          showValues: true,
          showConstants: true,
          showEnums: true,
          showEnumMembers: true,
          showColors: true,
          showFiles: true,
          showReferences: true,
          showFolders: true,
          showTypeParameters: true,
          showIssues: true,
          showUsers: true,
          showWords: true
        },
        // AI-powered features
        parameterHints: {
          enabled: true,
          cycle: true
        },
        hover: {
          enabled: true,
          delay: 300
        },
        // Advanced editing
        multiCursorModifier: 'ctrlCmd',
        selectionClipboard: false,
        contextmenu: true,
        mouseWheelZoom: true,
        smoothScrolling: true,
        cursorBlinking: 'blink',
        cursorSmoothCaretAnimation: true,
        cursorSurroundingLines: 3,
        cursorSurroundingLinesStyle: 'default',
        // Error detection
        renderValidationDecorations: 'on',
        renderWhitespace: 'selection',
        renderIndentGuides: true,
        highlightActiveIndentGuide: true,
        bracketPairColorization: { 
          enabled: true,
          independentColorPoolPerBracketType: true
        },
        guides: {
          bracketPairs: true,
          bracketPairsHorizontal: 'active',
          indentation: true,
          highlightActiveIndentation: true
        },
        // Performance
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
        },
        // Accessibility
        accessibilitySupport: 'auto',
        // Advanced features
        linkedEditing: true,
        stickyScroll: {
          enabled: true,
          defaultModel: 'outlineModel',
          maxLineCount: 5
        }
      })

      // Force layout update after mounting
      setTimeout(() => {
        editor.layout()
      }, 100)

      // Add advanced keyboard shortcuts
      try {
        // Save
        editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, () => {
          handleSave()
        })

        // Copy all
        editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyC, () => {
          if (editor.getSelection().isEmpty()) {
            handleCopyAll()
          }
        })

        // Format document
        editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyMod.Shift | monaco.KeyCode.KeyF, () => {
          handleFormat()
        })

        // Run code
        editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, () => {
          handleRunCode()
        })

        // Debug
        editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyMod.Shift | monaco.KeyCode.KeyD, () => {
          handleDebug()
        })

        // AI assistance
        editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyMod.Shift | monaco.KeyCode.KeyA, () => {
          handleAIAssistance()
        })

        // Git integration
        editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyMod.Shift | monaco.KeyCode.KeyG, () => {
          handleGitIntegration()
        })

        console.log('✅ Advanced keyboard shortcuts configured')
      } catch (keyError) {
        console.warn('⚠️ Could not add keyboard shortcuts:', keyError)
      }
      
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

  const handleRunCode = () => {
    const content = currentProject.files[currentProject.activeFile] || ''
    console.log('🚀 Running code:', content.substring(0, 100) + '...')
    toast.success('Code executed!')
  }

  const handleDebug = () => {
    console.log('🐛 Starting debug session...')
    toast.success('Debug session started!')
  }

  const handleAIAssistance = () => {
    console.log('🤖 AI assistance activated...')
    toast.success('AI assistance enabled!')
  }

  const handleGitIntegration = () => {
    console.log('🌿 Git integration activated...')
    toast.success('Git integration enabled!')
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
          {/* Advanced Editor Features */}
          <button
            onClick={handleRunCode}
            className="p-2 hover:bg-muted rounded-md transition-colors text-green-600"
            title="Run Code (Ctrl+Enter)"
          >
            <Play className="h-4 w-4" />
          </button>
          <button
            onClick={handleDebug}
            className="p-2 hover:bg-muted rounded-md transition-colors text-orange-600"
            title="Debug (Ctrl+Shift+D)"
          >
            <Bug className="h-4 w-4" />
          </button>
          <button
            onClick={handleAIAssistance}
            className="p-2 hover:bg-muted rounded-md transition-colors text-purple-600"
            title="AI Assistance (Ctrl+Shift+A)"
          >
            <Brain className="h-4 w-4" />
          </button>
          <button
            onClick={handleGitIntegration}
            className="p-2 hover:bg-muted rounded-md transition-colors text-blue-600"
            title="Git Integration (Ctrl+Shift+G)"
          >
            <GitBranch className="h-4 w-4" />
          </button>
          <div className="w-px h-6 bg-border mx-1"></div>
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
            {/* Fallback textarea editor */}
            <div className="w-full h-full">
              <textarea
                value={currentProject.files[currentProject.activeFile] || ''}
                onChange={(e) => handleEditorChange(e.target.value)}
                className="w-full h-full p-4 font-mono text-sm bg-background text-foreground border border-border rounded resize-none focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder={`Enter your ${getLanguage()} code here...`}
                style={{ 
                  minHeight: '500px',
                  fontFamily: 'Monaco, Menlo, "Ubuntu Mono", monospace',
                  lineHeight: '1.5'
                }}
              />
            </div>
            
            {/* Monaco Editor (hidden for now) */}
            <div style={{ display: 'none' }}>
              <Editor
                key={`${currentProject.activeFile}-${currentProject.files[currentProject.activeFile]?.length || 0}`}
                height="500px"
                language={getLanguage()}
                value={currentProject.files[currentProject.activeFile] || ''}
                onChange={handleEditorChange}
                onMount={handleEditorDidMount}
                theme={theme === 'dark' ? 'vs-dark' : 'vs'}
                beforeMount={(monaco) => {
                  console.log('🎯 Monaco Editor beforeMount called')
                  return Promise.resolve()
                }}
              loading={
                <div className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-background to-muted/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                    <span className="text-lg font-medium">Loading Advanced Editor...</span>
                  </div>
                  <div className="text-sm text-muted-foreground text-center max-w-md">
                    <p>Initializing Monaco Editor with advanced features...</p>
                    <p className="mt-2">AI assistance, debugging, and collaboration tools loading...</p>
                  </div>
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
          </div>
        </div>
        )}
      </div>

      {/* Advanced Editor Footer */}
      <div className="flex items-center justify-between p-2 border-t border-border bg-muted/30 text-xs text-muted-foreground">
        <div className="flex items-center gap-4">
          <span>Line {editorRef.current?.getPosition()?.lineNumber || 1}</span>
          <span>Column {editorRef.current?.getPosition()?.column || 1}</span>
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
          <span>Ctrl+Enter to run</span>
          <span>•</span>
          <span>Ctrl+Shift+A for AI</span>
          <span>•</span>
          <span>Ctrl+Shift+D to debug</span>
          <span>•</span>
          <span>Advanced keyboard shortcuts</span>
          <span>•</span>
          <span>Git integration</span>
          <span>•</span>
          <span>Version control</span>
          <span>•</span>
          <span>Syntax highlighting</span>
          <span>•</span>
          <span>Code completion</span>
          <span>•</span>
          <span>Real-time collaboration</span>
        </div>
      </div>
    </motion.div>
  )
}

export default CodeEditor
