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
  const [isLoading, setIsLoading] = useState(false)
  const editorRef = useRef(null)

  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor
    
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
      tabCompletion: 'on'
    })

    // Add keyboard shortcuts
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, () => {
      handleSave()
    })

    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyC, () => {
      if (editor.getSelection().isEmpty()) {
        handleCopyAll()
      }
    })
  }

  const handleEditorChange = (value) => {
    if (value !== undefined) {
      updateFile(currentProject.activeFile, value)
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
      <div className="flex-1 relative">
        <Editor
          height="100%"
          language={getLanguage()}
          value={currentProject.files[currentProject.activeFile] || ''}
          onChange={handleEditorChange}
          onMount={handleEditorDidMount}
          theme={theme === 'dark' ? 'custom-dark' : 'custom-light'}
          loading={
            <div className="flex items-center justify-center h-full">
              <div className="spinner"></div>
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
            }
          }}
        />
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
