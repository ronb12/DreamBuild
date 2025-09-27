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
      className="h-full flex flex-col bg-background overflow-hidden"
    >
      {/* Modern File Manager Header */}
      <div className="p-4 border-b border-border/50 bg-gradient-to-r from-blue-50/30 to-purple-50/30 dark:from-blue-900/10 dark:to-purple-900/10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-sm">
                <Folder className="h-4 w-4 text-white" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground">Explorer</h3>
                <p className="text-xs text-muted-foreground">Files</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-muted-foreground">Active</span>
            </div>
          </div>
          
          {/* Modern Action Buttons */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => setShowNewFileDialog(true)}
              className="p-2 hover:bg-muted/50 rounded-lg transition-colors group"
              title="New File"
            >
              <Plus className="h-4 w-4 text-muted-foreground group-hover:text-foreground" />
            </button>
            <button
              onClick={() => setShowProjectDialog(true)}
              className="p-2 hover:bg-muted/50 rounded-lg transition-colors group"
              title="Project Settings"
            >
              <Settings className="h-4 w-4 text-muted-foreground group-hover:text-foreground" />
            </button>
          </div>
        </div>

        {/* Modern Action Bar */}
        <div className="flex gap-2">
          <button
            onClick={() => saveProject()}
            className="flex items-center gap-2 px-3 py-2 text-xs font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
            title="Save Project"
          >
            <Save className="h-3 w-3" />
            Save
          </button>
          <button
            onClick={() => setShowDeployDialog(true)}
            className="flex items-center gap-2 px-3 py-2 text-xs font-medium bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
            title="Deploy Project"
            disabled={Object.keys(currentProject.files).length === 0}
          >
            <Rocket className="h-3 w-3" />
            Deploy
          </button>
          <button
            onClick={handleDownloadProject}
            className="flex items-center gap-2 px-3 py-2 text-xs font-medium bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
            title="Export Project"
          >
            <Download className="h-3 w-3" />
            Export
          </button>
        </div>
      </div>

      {/* Modern File Tree */}
      <div className="flex-1 overflow-y-auto bg-background">
        {Object.keys(currentProject.files).length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center px-6">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center mb-4">
              <File className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-base font-semibold text-foreground mb-2">No files yet</h3>
            <p className="text-sm text-muted-foreground mb-4 text-center max-w-xs">
              Generate code with AI or create your first file to get started
            </p>
            <button
              onClick={() => setShowNewFileDialog(true)}
              className="px-4 py-2 text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors shadow-sm"
            >
              Create File
            </button>
          </div>
        ) : (
          <div className="py-2">
            {/* Modern Project Root */}
            <div className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-foreground bg-muted/30 border-b border-border/50 mb-2">
              <div className="w-5 h-5 rounded-md bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                <Folder className="h-3 w-3 text-white" />
              </div>
              <span>{currentProject.name || 'Untitled Project'}</span>
              <div className="ml-auto text-xs text-muted-foreground">
                {Object.keys(currentProject.files).length} files
              </div>
            </div>
            
            {/* Modern File Tree */}
            {Object.keys(currentProject.files).map((filename) => (
              <motion.div
                key={filename}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className={`group relative flex items-center gap-3 px-4 py-2 cursor-pointer transition-all duration-200 rounded-lg mx-2 ${
                  currentProject.activeFile === filename
                    ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700'
                    : 'hover:bg-muted/50 text-foreground'
                }`}
                onClick={() => handleFileClick(filename)}
                onContextMenu={(e) => handleContextMenu(e, filename)}
              >
                {/* Tree Indentation */}
                <div className="w-4 flex items-center justify-center">
                  <div className="w-px h-4 bg-border"></div>
                </div>
                
                {/* File Icon */}
                <div className="flex items-center justify-center w-5 h-5">
                  <span className="text-base">{getFileIcon(filename)}</span>
                </div>
                
                {/* File Name */}
                <div className="flex-1 min-w-0">
                  <span className="text-sm font-medium truncate">{filename}</span>
                </div>
                
                {/* Active indicator */}
                {currentProject.activeFile === filename && (
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Modern Upload Area */}
      <div className="p-4 border-t border-border/50 bg-muted/20">
        <label className="flex items-center justify-center gap-3 p-4 border-2 border-dashed border-border rounded-xl hover:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-all duration-200 cursor-pointer group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Upload className="h-4 w-4 text-blue-600 dark:text-blue-400" />
          </div>
          <div className="text-center">
            <span className="text-sm font-medium text-foreground">
              Upload Files
            </span>
            <p className="text-xs text-muted-foreground mt-1">
              Drag & drop or click to browse
            </p>
          </div>
          <input
            type="file"
            className="hidden"
            accept=".html,.css,.js,.jsx,.ts,.tsx,.json,.md,.txt,.py,.java,.cpp,.c"
            onChange={handleFileUpload}
            multiple
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
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-10"
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
                    className="w-full p-2 border border-border rounded-md bg-background text-foreground"
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
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-10"
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
                    className="w-full p-2 border border-border rounded-md bg-background text-foreground"
                    placeholder="Enter project name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">App Type</label>
                  <select
                    value={currentProject.config.appType}
                    onChange={(e) => updateConfig({ appType: e.target.value })}
                    className="w-full p-2 border border-border rounded-md bg-background text-foreground"
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
                    className="w-full p-2 border border-border rounded-md bg-background text-foreground"
                  >
                    <option value="javascript">JavaScript</option>
                    <option value="typescript">TypeScript</option>
                    <option value="python">Python</option>
                    <option value="java">Java</option>
                    <option value="csharp">C#</option>
                    <option value="cpp">C++</option>
                    <option value="c">C</option>
                    <option value="rust">Rust</option>
                    <option value="go">Go</option>
                    <option value="php">PHP</option>
                    <option value="ruby">Ruby</option>
                    <option value="swift">Swift</option>
                    <option value="kotlin">Kotlin</option>
                    <option value="dart">Dart</option>
                    <option value="scala">Scala</option>
                    <option value="html">HTML</option>
                    <option value="css">CSS</option>
                    <option value="sql">SQL</option>
                    <option value="r">R</option>
                    <option value="matlab">MATLAB</option>
                    <option value="perl">Perl</option>
                    <option value="lua">Lua</option>
                    <option value="bash">Bash/Shell</option>
                    <option value="powershell">PowerShell</option>
                    <option value="yaml">YAML</option>
                    <option value="json">JSON</option>
                    <option value="xml">XML</option>
                    <option value="markdown">Markdown</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Framework</label>
                  <select
                    value={currentProject.config.framework || 'none'}
                    onChange={(e) => updateConfig({ framework: e.target.value })}
                    className="w-full p-2 border border-border rounded-md bg-background text-foreground"
                  >
                    <option value="none">None</option>
                    <option value="react">React</option>
                    <option value="vue">Vue.js</option>
                    <option value="angular">Angular</option>
                    <option value="svelte">Svelte</option>
                    <option value="nextjs">Next.js</option>
                    <option value="nuxtjs">Nuxt.js</option>
                    <option value="express">Express.js</option>
                    <option value="fastapi">FastAPI</option>
                    <option value="django">Django</option>
                    <option value="flask">Flask</option>
                    <option value="spring">Spring Boot</option>
                    <option value="laravel">Laravel</option>
                    <option value="rails">Ruby on Rails</option>
                    <option value="flutter">Flutter</option>
                    <option value="react-native">React Native</option>
                    <option value="ionic">Ionic</option>
                    <option value="electron">Electron</option>
                  </select>
                </div>
                <div className="flex gap-2 justify-end">
                  <button
                    onClick={() => setShowProjectDialog(false)}
                    className="px-4 py-2 text-sm border border-border rounded-md hover:bg-muted transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      saveProject()
                      setShowProjectDialog(false)
                      toast.success('Project settings saved!')
                    }}
                    className="px-4 py-2 text-sm bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-md hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md shadow-blue-500/20 border border-blue-500/20"
                  >
                    Save Settings
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
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-10"
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
            className="fixed z-10 bg-card border border-border rounded-lg shadow-lg py-1 min-w-[160px]"
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
