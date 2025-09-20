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
  FolderOpen,
  Rocket,
  Github,
  ExternalLink,
  Loader2
} from 'lucide-react'
import toast from 'react-hot-toast'
import deploymentService from '../services/deploymentService'

const FileManager = () => {
  const { currentProject, switchFile, updateFile, saveProject, createNewProject, updateConfig } = useProject()
  const [showNewFileDialog, setShowNewFileDialog] = useState(false)
  const [newFileName, setNewFileName] = useState('')
  const [showProjectDialog, setShowProjectDialog] = useState(false)
  const [showDeployDialog, setShowDeployDialog] = useState(false)
  const [isDeploying, setIsDeploying] = useState(false)
  const [deploymentPlatform, setDeploymentPlatform] = useState('firebase')
  const [projectName, setProjectName] = useState('')

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

  const handleDeploy = async () => {
    if (!projectName.trim()) {
      toast.error('Please enter a project name')
      return
    }

    if (Object.keys(currentProject.files).length === 0) {
      toast.error('Please generate some code first')
      return
    }

    setIsDeploying(true)
    
    try {
      let result
      
      if (deploymentPlatform === 'firebase') {
        result = await deploymentService.deployToFirebase(currentProject, projectName)
      } else {
        result = await deploymentService.deployToGitHub(currentProject, projectName)
      }

      if (result.success) {
        toast.success(`Successfully deployed to ${result.platform}!`)
        
        // Open the deployed URL
        if (result.url) {
          window.open(result.url, '_blank')
        }

        // Show GitHub instructions if needed
        if (result.instructions) {
          console.log('GitHub deployment instructions:', result.instructions)
          toast.success('Check console for GitHub Pages setup instructions')
        }

        setShowDeployDialog(false)
        setProjectName('')
      }
    } catch (error) {
      toast.error(`Deployment failed: ${error.message}`)
    } finally {
      setIsDeploying(false)
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
      {/* Cursor-Style File Manager Header */}
      <div className="p-3 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded flex items-center justify-center">
              <Folder className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">Explorer</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">Files</p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setShowNewFileDialog(true)}
              className="p-1.5 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors"
              title="New File"
            >
              <Plus className="h-4 w-4 text-gray-600 dark:text-gray-400" />
            </button>
            <button
              onClick={() => setShowProjectDialog(true)}
              className="p-1.5 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors"
              title="Project Settings"
            >
              <Settings className="h-4 w-4 text-gray-600 dark:text-gray-400" />
            </button>
          </div>
        </div>

        {/* Cursor-Style Project Actions */}
        <div className="flex gap-1 flex-wrap">
          <button
            onClick={() => saveProject()}
            className="flex items-center gap-1.5 px-2 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            title="Save"
          >
            <Save className="h-3 w-3" />
            Save
          </button>
          <button
            onClick={() => setShowDeployDialog(true)}
            className="flex items-center gap-1.5 px-2 py-1 text-xs bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
            title="Deploy"
            disabled={Object.keys(currentProject.files).length === 0}
          >
            <Rocket className="h-3 w-3" />
            Deploy
          </button>
          <button
            onClick={handleDownloadProject}
            className="flex items-center gap-1.5 px-2 py-1 text-xs bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
            title="Export"
          >
            <Download className="h-3 w-3" />
            Export
          </button>
        </div>
      </div>

      {/* Cursor-Style File Tree */}
      <div className="flex-1 overflow-y-auto">
        {Object.keys(currentProject.files).length === 0 ? (
          <div className="flex flex-col items-center justify-center py-8 text-center px-4">
            <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center mb-3">
              <FileText className="h-6 w-6 text-gray-400 dark:text-gray-500" />
            </div>
            <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-1">No files</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-3 text-center">
              Generate code with AI to get started
            </p>
            <button
              onClick={() => setShowNewFileDialog(true)}
              className="px-3 py-1.5 text-xs bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              New File
            </button>
          </div>
        ) : (
          <div className="py-1">
            {/* Project Root */}
            <div className="flex items-center gap-1 px-2 py-1 text-xs font-medium text-gray-600 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700 mb-1">
              <Folder className="h-3 w-3" />
              <span>{currentProject.name || 'Project'}</span>
            </div>
            
            {/* File Tree */}
            {Object.keys(currentProject.files).map((filename) => (
              <motion.div
                key={filename}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className={`group relative flex items-center gap-1 px-2 py-1 cursor-pointer transition-colors ${
                  currentProject.activeFile === filename
                    ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-900 dark:text-blue-100'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-800/50 text-gray-700 dark:text-gray-300'
                }`}
                onClick={() => handleFileClick(filename)}
              >
                {/* Tree Indentation */}
                <div className="w-4 flex items-center justify-center">
                  <div className="w-px h-3 bg-gray-300 dark:bg-gray-600"></div>
                </div>
                
                {/* File Icon */}
                <div className="flex items-center justify-center w-4 h-4 mr-1">
                  <span className="text-sm">{getFileIcon(filename)}</span>
                </div>
                
                {/* File Name */}
                <div className="flex-1 min-w-0">
                  <span className="text-sm font-normal truncate">{filename}</span>
                </div>
                
                {/* Action Buttons - Hidden by default, shown on hover */}
                <div className="flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleDownloadFile(filename)
                    }}
                    className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors"
                    title="Download"
                  >
                    <Download className="h-3 w-3" />
                  </button>
                  {Object.keys(currentProject.files).length > 1 && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        handleDeleteFile(filename)
                      }}
                      className="p-1 hover:bg-red-100 dark:hover:bg-red-900/30 rounded transition-colors"
                      title="Delete"
                    >
                      <Trash2 className="h-3 w-3 text-red-600 dark:text-red-400" />
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Cursor-Style Upload Area */}
      <div className="p-2 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/30">
        <label className="flex items-center justify-center gap-2 p-2 border border-dashed border-gray-300 dark:border-gray-600 rounded hover:border-blue-400 dark:hover:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-blue-900/20 transition-colors cursor-pointer">
          <Upload className="h-3 w-3 text-gray-500 dark:text-gray-400" />
          <span className="text-xs text-gray-500 dark:text-gray-400">
            Upload
          </span>
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
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
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
                    className="w-full p-2 border border-border rounded-md bg-black"
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
                    className="px-4 py-2 text-sm bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-md hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md shadow-blue-500/20 border border-blue-500/20"
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
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
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
                    className="w-full p-2 border border-border rounded-md bg-black"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">App Type</label>
                  <select
                    value={currentProject.config.appType}
                    onChange={(e) => updateConfig({ appType: e.target.value })}
                    className="w-full p-2 border border-border rounded-md bg-black"
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
                    className="w-full p-2 border border-border rounded-md bg-black"
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

      {/* Deployment Dialog */}
      <AnimatePresence>
        {showDeployDialog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={() => setShowDeployDialog(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-card border border-border rounded-lg p-6 w-96 max-w-[90vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Rocket className="h-5 w-5" />
                Deploy Your App
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Project Name</label>
                  <input
                    type="text"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    placeholder="my-awesome-app"
                    className="w-full p-2 border border-border rounded-md bg-black"
                    autoFocus
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Deployment Platform</label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 p-2 border border-border rounded-md hover:bg-muted cursor-pointer">
                      <input
                        type="radio"
                        value="firebase"
                        checked={deploymentPlatform === 'firebase'}
                        onChange={(e) => setDeploymentPlatform(e.target.value)}
                        className="text-white"
                      />
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-orange-500 rounded flex items-center justify-center">
                          <span className="text-white text-xs">F</span>
                        </div>
                        <span>Firebase Hosting</span>
                      </div>
                    </label>
                    
                    <label className="flex items-center gap-2 p-2 border border-border rounded-md hover:bg-muted cursor-pointer">
                      <input
                        type="radio"
                        value="github"
                        checked={deploymentPlatform === 'github'}
                        onChange={(e) => setDeploymentPlatform(e.target.value)}
                        className="text-white"
                      />
                      <div className="flex items-center gap-2">
                        <Github className="h-4 w-4" />
                        <span>GitHub Pages</span>
                      </div>
                    </label>
                  </div>
                </div>

                <div className="p-3 bg-muted rounded-md">
                  <h4 className="text-sm font-medium mb-2">Platform Info</h4>
                  <div className="text-xs text-muted-foreground space-y-1">
                    {deploymentPlatform === 'firebase' ? (
                      <>
                        <p><strong>Firebase Hosting:</strong> Instant deployment with custom domain support</p>
                        <p><strong>Features:</strong> CDN, SSL, automatic HTTPS</p>
                        <p><strong>Cost:</strong> Free tier available</p>
                      </>
                    ) : (
                      <>
                        <p><strong>GitHub Pages:</strong> Host static sites directly from GitHub repositories</p>
                        <p><strong>Features:</strong> Custom domains, Jekyll support</p>
                        <p><strong>Cost:</strong> Free for public repositories</p>
                      </>
                    )}
                  </div>
                </div>

                <div className="flex gap-2 justify-end">
                  <button
                    onClick={() => setShowDeployDialog(false)}
                    className="px-4 py-2 text-sm border border-border rounded-md hover:bg-muted transition-colors"
                    disabled={isDeploying}
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleDeploy}
                    disabled={isDeploying || !projectName.trim()}
                    className="px-4 py-2 text-sm bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-md hover:from-blue-700 hover:to-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-md shadow-blue-500/20 border border-blue-500/20 flex items-center gap-2"
                  >
                    {isDeploying ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Deploying...
                      </>
                    ) : (
                      <>
                        <Rocket className="h-4 w-4" />
                        Deploy Now
                      </>
                    )}
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
