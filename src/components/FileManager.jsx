import { useState } from 'react'
import { useProject } from '../contexts/ProjectContext'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  File, 
  Folder, 
  Plus, 
  Trash2, 
  Download, 
  Upload,
  Settings,
  Save,
  FolderOpen
} from 'lucide-react'
import toast from 'react-hot-toast'

const FileManager = () => {
  const { currentProject, switchFile, updateFile, saveProject, createNewProject } = useProject()
  const [showNewFileDialog, setShowNewFileDialog] = useState(false)
  const [newFileName, setNewFileName] = useState('')
  const [showProjectDialog, setShowProjectDialog] = useState(false)

  const fileIcons = {
    'index.html': '🌐',
    'style.css': '🎨',
    'script.js': '⚡',
    'components.jsx': '🧩',
    'package.json': '📦',
    'README.md': '📖',
    'server.js': '🖥️',
    'database.js': '🗄️',
    'auth.js': '🔐',
    'api.js': '🔌'
  }

  const getFileIcon = (filename) => {
    return fileIcons[filename] || '📄'
  }

  const getFileStatus = (filename) => {
    const content = currentProject.files[filename]
    return content && content.trim() ? 'Ready' : 'Empty'
  }

  const handleFileClick = (filename) => {
    switchFile(filename)
  }

  const handleNewFile = () => {
    if (newFileName.trim()) {
      const filename = newFileName.includes('.') ? newFileName : `${newFileName}.js`
      updateFile(filename, '')
      switchFile(filename)
      setNewFileName('')
      setShowNewFileDialog(false)
      toast.success(`Created ${filename}`)
    }
  }

  const handleDeleteFile = (filename) => {
    if (Object.keys(currentProject.files).length <= 1) {
      toast.error('Cannot delete the last file')
      return
    }

    if (confirm(`Delete ${filename}?`)) {
      const newFiles = { ...currentProject.files }
      delete newFiles[filename]
      
      // Update project files
      Object.keys(newFiles).forEach(key => {
        currentProject.files[key] = newFiles[key]
      })
      
      // Switch to another file if current file was deleted
      if (currentProject.activeFile === filename) {
        const remainingFiles = Object.keys(newFiles)
        switchFile(remainingFiles[0])
      }
      
      toast.success(`Deleted ${filename}`)
    }
  }

  const handleDownloadFile = (filename) => {
    const content = currentProject.files[filename] || ''
    const blob = new Blob([content], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
    toast.success(`Downloaded ${filename}`)
  }

  const handleDownloadProject = () => {
    // Create a zip-like structure
    const projectData = {
      name: currentProject.name,
      files: currentProject.files,
      config: currentProject.config,
      timestamp: new Date().toISOString()
    }
    
    const blob = new Blob([JSON.stringify(projectData, null, 2)], { 
      type: 'application/json' 
    })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${currentProject.name}.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
    toast.success('Project downloaded!')
  }

  const handleFileUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        updateFile(file.name, e.target.result)
        switchFile(file.name)
        toast.success(`Uploaded ${file.name}`)
      }
      reader.readAsText(file)
    }
  }

  const fileTypes = [
    { name: 'HTML File', extension: '.html', icon: '🌐' },
    { name: 'CSS File', extension: '.css', icon: '🎨' },
    { name: 'JavaScript File', extension: '.js', icon: '⚡' },
    { name: 'React Component', extension: '.jsx', icon: '🧩' },
    { name: 'TypeScript File', extension: '.ts', icon: '🔷' },
    { name: 'JSON File', extension: '.json', icon: '📦' },
    { name: 'Markdown File', extension: '.md', icon: '📖' }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="h-full flex flex-col bg-card border border-border rounded-lg overflow-hidden"
    >
      {/* File Manager Header */}
      <div className="p-3 border-b border-border bg-muted/50">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-sm flex items-center gap-2">
            <Folder className="h-4 w-4" />
            Project Files
          </h3>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setShowNewFileDialog(true)}
              className="p-1 hover:bg-muted rounded transition-colors"
              title="New File"
            >
              <Plus className="h-4 w-4" />
            </button>
            <button
              onClick={() => setShowProjectDialog(true)}
              className="p-1 hover:bg-muted rounded transition-colors"
              title="Project Settings"
            >
              <Settings className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Project Actions */}
        <div className="flex gap-1">
          <button
            onClick={() => saveProject()}
            className="flex items-center gap-1 px-2 py-1 text-xs bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors"
            title="Save Project"
          >
            <Save className="h-3 w-3" />
            Save
          </button>
          <button
            onClick={handleDownloadProject}
            className="flex items-center gap-1 px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded hover:bg-secondary/90 transition-colors"
            title="Download Project"
          >
            <Download className="h-3 w-3" />
            Export
          </button>
          <button
            onClick={createNewProject}
            className="flex items-center gap-1 px-2 py-1 text-xs bg-accent text-accent-foreground rounded hover:bg-accent/90 transition-colors"
            title="New Project"
          >
            <FolderOpen className="h-3 w-3" />
            New
          </button>
        </div>
      </div>

      {/* File List */}
      <div className="flex-1 overflow-y-auto p-2 space-y-1">
        {Object.keys(currentProject.files).map((filename) => (
          <motion.div
            key={filename}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className={`group flex items-center gap-2 p-2 rounded-md cursor-pointer transition-all ${
              currentProject.activeFile === filename
                ? 'bg-primary text-primary-foreground'
                : 'hover:bg-muted'
            }`}
            onClick={() => handleFileClick(filename)}
          >
            <span className="text-sm">{getFileIcon(filename)}</span>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium truncate">{filename}</div>
              <div className={`text-xs ${
                currentProject.activeFile === filename
                  ? 'text-primary-foreground/70'
                  : 'text-muted-foreground'
              }`}>
                {getFileStatus(filename)}
              </div>
            </div>
            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  handleDownloadFile(filename)
                }}
                className="p-1 hover:bg-background/20 rounded transition-colors"
                title="Download File"
              >
                <Download className="h-3 w-3" />
              </button>
              {Object.keys(currentProject.files).length > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleDeleteFile(filename)
                  }}
                  className="p-1 hover:bg-destructive/20 rounded transition-colors"
                  title="Delete File"
                >
                  <Trash2 className="h-3 w-3" />
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Upload Area */}
      <div className="p-2 border-t border-border">
        <label className="flex items-center justify-center gap-2 p-2 border-2 border-dashed border-border rounded-md hover:border-primary transition-colors cursor-pointer">
          <Upload className="h-4 w-4" />
          <span className="text-xs text-muted-foreground">Upload File</span>
          <input
            type="file"
            className="hidden"
            accept=".html,.css,.js,.jsx,.ts,.tsx,.json,.md,.txt"
            onChange={handleFileUpload}
          />
        </label>
      </div>

      {/* New File Dialog */}
      <AnimatePresence>
        {showNewFileDialog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={() => setShowNewFileDialog(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-card border border-border rounded-lg p-6 w-96 max-w-[90vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-lg font-semibold mb-4">Create New File</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">File Name</label>
                  <input
                    type="text"
                    value={newFileName}
                    onChange={(e) => setNewFileName(e.target.value)}
                    placeholder="my-file.js"
                    className="w-full p-2 border border-border rounded-md bg-background"
                    autoFocus
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Quick Templates</label>
                  <div className="grid grid-cols-2 gap-2">
                    {fileTypes.map((type) => (
                      <button
                        key={type.extension}
                        onClick={() => setNewFileName(`new-file${type.extension}`)}
                        className="flex items-center gap-2 p-2 text-xs border border-border rounded hover:bg-muted transition-colors"
                      >
                        <span>{type.icon}</span>
                        <span className="truncate">{type.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2 justify-end">
                  <button
                    onClick={() => setShowNewFileDialog(false)}
                    className="px-4 py-2 text-sm border border-border rounded-md hover:bg-muted transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleNewFile}
                    className="px-4 py-2 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                  >
                    Create
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Project Settings Dialog */}
      <AnimatePresence>
        {showProjectDialog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={() => setShowProjectDialog(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-card border border-border rounded-lg p-6 w-96 max-w-[90vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-lg font-semibold mb-4">Project Settings</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Project Name</label>
                  <input
                    type="text"
                    value={currentProject.name}
                    onChange={(e) => updateConfig({ name: e.target.value })}
                    className="w-full p-2 border border-border rounded-md bg-background"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">App Type</label>
                  <select
                    value={currentProject.config.appType}
                    onChange={(e) => updateConfig({ appType: e.target.value })}
                    className="w-full p-2 border border-border rounded-md bg-background"
                  >
                    <option value="frontend">Frontend</option>
                    <option value="backend">Backend</option>
                    <option value="fullstack">Full Stack</option>
                    <option value="mobile">Mobile</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Language</label>
                  <select
                    value={currentProject.config.language}
                    onChange={(e) => updateConfig({ language: e.target.value })}
                    className="w-full p-2 border border-border rounded-md bg-background"
                  >
                    <option value="javascript">JavaScript</option>
                    <option value="typescript">TypeScript</option>
                    <option value="python">Python</option>
                    <option value="java">Java</option>
                    <option value="csharp">C#</option>
                  </select>
                </div>
                <div className="flex gap-2 justify-end">
                  <button
                    onClick={() => setShowProjectDialog(false)}
                    className="px-4 py-2 text-sm border border-border rounded-md hover:bg-muted transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default FileManager
