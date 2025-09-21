import { useState, useRef, useEffect } from 'react'
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
  Loader2,
  MoreVertical,
  Edit,
  Copy
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
  const [deployToBoth, setDeployToBoth] = useState(false)
  const [projectName, setProjectName] = useState('')
  const [contextMenu, setContextMenu] = useState({ show: false, x: 0, y: 0, filename: '' })
  const contextMenuRef = useRef(null)

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

  const handleContextMenu = (e, filename) => {
    e.preventDefault()
    setContextMenu({
      show: true,
      x: e.clientX,
      y: e.clientY,
      filename: filename
    })
  }

  const handleContextAction = (action) => {
    const { filename } = contextMenu
    setContextMenu({ show: false, x: 0, y: 0, filename: '' })
    
    switch (action) {
      case 'download':
        handleDownloadFile(filename)
        break
      case 'delete':
        handleDeleteFile(filename)
        break
      case 'rename':
        // TODO: Implement rename functionality
        toast.info('Rename functionality coming soon!')
        break
      case 'copy':
        // TODO: Implement copy functionality
        toast.info('Copy functionality coming soon!')
        break
      default:
        break
    }
  }

  const closeContextMenu = () => {
    setContextMenu({ show: false, x: 0, y: 0, filename: '' })
  }

  // Close context menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (contextMenuRef.current && !contextMenuRef.current.contains(event.target)) {
        closeContextMenu()
      }
    }

    if (contextMenu.show) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [contextMenu.show])

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
      // Ensure project is properly built with all necessary features
      const enhancedProject = await ensureProjectIsBuilt(currentProject, projectName)
      
      const results = []
      
      if (deployToBoth) {
        // Deploy to both platforms simultaneously
        toast.info('Deploying to both Firebase and GitHub...')
        
        const [firebaseResult, githubResult] = await Promise.allSettled([
          deploymentService.deployToFirebase(enhancedProject, projectName),
          deploymentService.deployToGitHub(enhancedProject, projectName)
        ])
        
        if (firebaseResult.status === 'fulfilled' && firebaseResult.value.success) {
          results.push({ platform: 'Firebase', ...firebaseResult.value })
        }
        
        if (githubResult.status === 'fulfilled' && githubResult.value.success) {
          results.push({ platform: 'GitHub', ...githubResult.value })
        }
        
        if (results.length === 2) {
          toast.success('Successfully deployed to both Firebase and GitHub!')
        } else if (results.length === 1) {
          toast.success(`Deployed to ${results[0].platform} (${results.length === 1 ? 'one' : 'both'} platform${results.length === 1 ? '' : 's'} failed)`)
        } else {
          throw new Error('Both deployments failed')
        }
        
      } else {
        // Deploy to single platform
        let result
        
        if (deploymentPlatform === 'firebase') {
          result = await deploymentService.deployToFirebase(enhancedProject, projectName)
        } else if (deploymentPlatform === 'github') {
          result = await deploymentService.deployToGitHub(enhancedProject, projectName)
        }

        if (result.success) {
          results.push({ platform: deploymentPlatform, ...result })
          
          toast.success(`Successfully deployed to ${result.platform}!`)
        }
      }

      // Open deployed URLs
      results.forEach(result => {
        if (result.url) {
          window.open(result.url, '_blank')
        }
        
        // Show GitHub instructions if needed
        if (result.instructions) {
          console.log(`${result.platform} deployment instructions:`, result.instructions)
          toast.success(`Check console for ${result.platform} Pages setup instructions`)
        }
      })

      setShowDeployDialog(false)
      setProjectName('')
      setDeployToBoth(false)
      
    } catch (error) {
      toast.error(`Deployment failed: ${error.message}`)
    } finally {
      setIsDeploying(false)
    }
  }

  // Ensure project is properly built with all necessary features
  const ensureProjectIsBuilt = async (project, projectName) => {
    const enhancedProject = { ...project }
    
    // Ensure we have at least basic files
    if (!enhancedProject.files['index.html']) {
      enhancedProject.files['index.html'] = generateDefaultHTML(projectName)
    }
    
    // Add package.json for better deployment
    if (!enhancedProject.files['package.json']) {
      enhancedProject.files['package.json'] = generatePackageJSON(projectName, enhancedProject.config)
    }
    
    // Add README.md for GitHub deployments
    if (!enhancedProject.files['README.md']) {
      enhancedProject.files['README.md'] = generateREADME(projectName, enhancedProject.config)
    }
    
    // Ensure proper HTML structure
    enhancedProject.files['index.html'] = enhanceHTML(enhancedProject.files['index.html'], projectName)
    
    // Add manifest.json for PWA features
    if (!enhancedProject.files['manifest.json']) {
      enhancedProject.files['manifest.json'] = generateManifest(projectName)
    }
    
    return enhancedProject
  }

  // Generate default HTML if missing
  const generateDefaultHTML = (projectName) => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${projectName}</title>
    <meta name="description" content="Built with DreamBuild - Universal AI Development Platform">
    <link rel="manifest" href="manifest.json">
    <meta name="theme-color" content="#2563eb">
</head>
<body>
    <div style="display: flex; align-items: center; justify-content: center; min-height: 100vh; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">
        <div style="text-align: center; padding: 40px; background: rgba(255,255,255,0.1); border-radius: 20px; backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.2);">
            <h1 style="font-size: 2.5rem; margin-bottom: 20px;">🚀 ${projectName}</h1>
            <p style="font-size: 1.2rem; opacity: 0.9; margin-bottom: 10px;">Your app is ready!</p>
            <p style="font-size: 0.9rem; opacity: 0.7;">Built with <strong>DreamBuild</strong> - Universal AI Development Platform</p>
            <p style="font-size: 0.8rem; opacity: 0.6; margin-top: 20px;">Generated: ${new Date().toLocaleDateString()}</p>
        </div>
    </div>
</body>
</html>`
  }

  // Generate package.json
  const generatePackageJSON = (projectName, config) => {
    return JSON.stringify({
      "name": projectName.toLowerCase().replace(/[^a-z0-9-]/g, '-'),
      "version": "1.0.0",
      "description": `Built with DreamBuild - ${projectName}`,
      "main": "index.html",
      "scripts": {
        "start": "npx serve .",
        "build": "echo 'Static site - no build required'",
        "deploy": "echo 'Deploy using DreamBuild deployment system'"
      },
      "keywords": ["dreambuild", "ai-generated", "web-app", config.appType || "frontend"],
      "author": "DreamBuild AI",
      "license": "MIT",
      "engines": {
        "node": ">=14.0.0"
      },
      "dependencies": {},
      "devDependencies": {
        "serve": "^14.0.0"
      }
    }, null, 2)
  }

  // Generate README.md
  const generateREADME = (projectName, config) => {
    return `# ${projectName}

Built with [DreamBuild](https://dreambuild-2024-app.web.app) - Universal AI Development Platform

## 🚀 Features

- **App Type**: ${config.appType || 'Frontend'}
- **Language**: ${config.language || 'JavaScript'}
- **Styling**: ${config.styling || 'Custom CSS'}
- **Features**: ${config.features?.join(', ') || 'Basic functionality'}

## 📁 Project Structure

\`\`\`
${Object.keys(currentProject.files).join('\n')}
\`\`\`

## 🌐 Deployment

This project was deployed using DreamBuild's deployment system:

- **Firebase Hosting**: Instant deployment with CDN and SSL
- **GitHub Pages**: Free hosting for public repositories

## 🛠️ Local Development

1. Clone this repository
2. Open \`index.html\` in your browser
3. Or use a local server: \`npx serve .\`

## 📱 PWA Features

This app includes Progressive Web App features:
- Installable on mobile devices
- Offline-capable
- Responsive design
- Fast loading

## 🤖 Built with DreamBuild

Created using DreamBuild's AI-powered development platform. Visit [dreambuild-2024-app.web.app](https://dreambuild-2024-app.web.app) to build your own apps!

---

*Generated on ${new Date().toLocaleDateString()} by DreamBuild AI*
`
  }

  // Generate manifest.json for PWA
  const generateManifest = (projectName) => {
    return JSON.stringify({
      "name": projectName,
      "short_name": projectName.split(' ')[0],
      "description": `Built with DreamBuild - ${projectName}`,
      "start_url": "/",
      "display": "standalone",
      "background_color": "#ffffff",
      "theme_color": "#2563eb",
      "icons": [
        {
          "src": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyIiBoZWlnaHQ9IjE5MiIgdmlld0JveD0iMCAwIDE5MiAxOTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxOTIiIGhlaWdodD0iMTkyIiByeD0iMjQiIGZpbGw9InVybCgjZ3JhZGllbnQwX2xpbmVhcl8xXzEpIi8+CjxwYXRoIGQ9Ik05NiA0OEw0OCA3MlYxMjBMOTYgMTQ0TDE0NCAxMjBWNzJMOTYgNDhaIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudDBfbGluZWFyXzFfMSIgeDE9IjAiIHkxPSIwIiB4Mj0iMTkyIiB5Mj0iMTkyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM2NjdlZWEiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNzY0YmEyIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPHN2Zz4K",
          "sizes": "192x192",
          "type": "image/svg+xml"
        }
      ]
    }, null, 2)
  }

  // Enhance HTML with proper structure
  const enhanceHTML = (htmlContent, projectName) => {
    let enhancedHTML = htmlContent
    
    // Ensure proper DOCTYPE
    if (!enhancedHTML.includes('<!DOCTYPE html>')) {
      enhancedHTML = `<!DOCTYPE html>\n${enhancedHTML}`
    }
    
    // Add meta tags if missing
    if (!enhancedHTML.includes('<meta name="viewport"')) {
      enhancedHTML = enhancedHTML.replace(
        '<head>',
        '<head>\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">'
      )
    }
    
    if (!enhancedHTML.includes('<meta name="description"')) {
      enhancedHTML = enhancedHTML.replace(
        '<head>',
        `<head>\n    <meta name="description" content="Built with DreamBuild - ${projectName}">`
      )
    }
    
    if (!enhancedHTML.includes('<meta name="theme-color"')) {
      enhancedHTML = enhancedHTML.replace(
        '<head>',
        '<head>\n    <meta name="theme-color" content="#2563eb">'
      )
    }
    
    // Add manifest link if missing
    if (!enhancedHTML.includes('manifest.json')) {
      enhancedHTML = enhancedHTML.replace(
        '<head>',
        '<head>\n    <link rel="manifest" href="manifest.json">'
      )
    }
    
    return enhancedHTML
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
      className="h-full flex flex-col bg-gray-800 overflow-hidden"
    >
      {/* Cursor-Style File Manager Header */}
      <div className="p-3 border-b border-gray-700 bg-gray-800">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-900/30 rounded flex items-center justify-center">
              <Folder className="h-4 w-4 text-blue-400" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-100">Explorer</h3>
              <p className="text-xs text-gray-400">Files</p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setShowNewFileDialog(true)}
              className="p-1.5 hover:bg-gray-700 rounded transition-colors"
              title="New File"
            >
              <Plus className="h-4 w-4 text-gray-400" />
            </button>
            <button
              onClick={() => setShowProjectDialog(true)}
              className="p-1.5 hover:bg-gray-700 rounded transition-colors"
              title="Project Settings"
            >
              <Settings className="h-4 w-4 text-gray-400" />
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
                onContextMenu={(e) => handleContextMenu(e, filename)}
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
                
                {/* Clean design - no action buttons */}
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Cursor-Style Upload Area */}
      <div className="p-2 border-t border-gray-700 bg-gray-800">
        <label className="flex items-center justify-center gap-2 p-2 border border-dashed border-gray-600 rounded hover:border-blue-500 hover:bg-blue-900/20 transition-colors cursor-pointer">
          <Upload className="h-3 w-3 text-gray-400" />
          <span className="text-xs text-gray-400">
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
                        <p><strong>Best for:</strong> Production websites with custom domains</p>
                      </>
                    ) : deploymentPlatform === 'github' ? (
                      <>
                        <p><strong>GitHub Pages:</strong> Host static sites directly from GitHub repositories</p>
                        <p><strong>Features:</strong> Custom domains, Jekyll support, version control</p>
                        <p><strong>Cost:</strong> Free for public repositories</p>
                        <p><strong>Best for:</strong> Open source projects and documentation</p>
                      </>
                    ) : null}
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

      {/* Context Menu */}
      <AnimatePresence>
        {contextMenu.show && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            ref={contextMenuRef}
            className="fixed z-50 bg-card border border-border rounded-lg shadow-lg py-1 min-w-[160px]"
            style={{
              left: contextMenu.x,
              top: contextMenu.y,
            }}
            onClick={closeContextMenu}
          >
            <button
              onClick={() => handleContextAction('download')}
              className="w-full px-3 py-2 text-left text-sm hover:bg-muted flex items-center gap-2 transition-colors"
            >
              <Download className="h-4 w-4" />
              Download
            </button>
            <button
              onClick={() => handleContextAction('copy')}
              className="w-full px-3 py-2 text-left text-sm hover:bg-muted flex items-center gap-2 transition-colors"
            >
              <Copy className="h-4 w-4" />
              Copy
            </button>
            <button
              onClick={() => handleContextAction('rename')}
              className="w-full px-3 py-2 text-left text-sm hover:bg-muted flex items-center gap-2 transition-colors"
            >
              <Edit className="h-4 w-4" />
              Rename
            </button>
            {Object.keys(currentProject.files).length > 1 && (
              <>
                <div className="border-t border-border my-1"></div>
                <button
                  onClick={() => handleContextAction('delete')}
                  className="w-full px-3 py-2 text-left text-sm hover:bg-red-50 dark:hover:bg-red-900/20 text-red-600 dark:text-red-400 flex items-center gap-2 transition-colors"
                >
                  <Trash2 className="h-4 w-4" />
                  Delete
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default FileManager
