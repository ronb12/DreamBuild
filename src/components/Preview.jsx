import React, { useState, useEffect } from 'react'
import { useProject } from '../contexts/ProjectContext'
import { motion } from 'framer-motion'
import { 
  RefreshCw, 
  ExternalLink, 
  Maximize2, 
  Minimize2, 
  Monitor, 
  Smartphone, 
  Tablet, 
  Settings, 
  Eye, 
  Code, 
  Play, 
  Pause, 
  RotateCcw,
  Globe,
  Share2,
  Copy,
  Download
} from 'lucide-react'
import toast from 'react-hot-toast'
import firebaseAppService from '../services/firebaseAppService'
import appDeploymentService from '../services/appDeploymentService'

const Preview = () => {
  const { currentProject } = useProject()
  const [isLoading, setIsLoading] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [deviceType, setDeviceType] = useState('desktop') // 'desktop', 'tablet', 'mobile'
  const [isAutoRefresh, setIsAutoRefresh] = useState(true)
  const [refreshInterval, setRefreshInterval] = useState(2000)
  const [showPreviewControls, setShowPreviewControls] = useState(true)
  const [previewMode, setPreviewMode] = useState('live') // 'live', 'static'
  const [isPreviewPaused, setIsPreviewPaused] = useState(false)
  const [deployedApp, setDeployedApp] = useState(null)
  const [appUrl, setAppUrl] = useState(null)
  const [appContent, setAppContent] = useState(null)
  const [appCss, setAppCss] = useState(null)
  const [deploymentStatus, setDeploymentStatus] = useState(null)
  const [isDeploying, setIsDeploying] = useState(false)

  // Debug logging
  console.log('🎮 Preview component rendered!')
  console.log('🎮 Preview currentProject:', currentProject)
  console.log('🎮 Preview appContent:', appContent ? 'EXISTS' : 'NULL')
  console.log('🎮 Preview appUrl:', appUrl)
  console.log('🎮 Preview isLoading:', isLoading)

  // Deploy app when component mounts or project changes - with debouncing
  useEffect(() => {
    console.log('🎮 Preview useEffect triggered')
    console.log('🎮 Current project:', currentProject)
    console.log('🎮 Project files:', currentProject?.files)
    console.log('🎮 Files count:', Object.keys(currentProject?.files || {}).length)
    
    if (currentProject && Object.keys(currentProject.files).length > 0) {
      console.log('🎮 Deploying app...')
      console.log('🎮 Files available for deployment:', Object.keys(currentProject.files))
      console.log('🎮 Files content preview:', Object.keys(currentProject.files).map(key => ({
        filename: key,
        length: currentProject.files[key]?.length || 0,
        preview: currentProject.files[key]?.substring(0, 100) || 'No content'
      })))
      
      // Add debouncing to prevent multiple deployments
      const timeoutId = setTimeout(() => {
        deployApp()
      }, 1000) // Wait 1 second before deploying
      
      return () => clearTimeout(timeoutId)
    } else {
      console.log('🎮 No project or files to deploy')
      console.log('🎮 Current project:', currentProject)
      console.log('🎮 Files count:', currentProject ? Object.keys(currentProject.files).length : 'No project')
    }
  }, [currentProject?.name, currentProject?.activeFile]) // Only depend on specific properties

  // Auto-refresh functionality - DISABLED to prevent reload loop
  useEffect(() => {
    // Disabled auto-refresh to prevent reload loop
    // if (!isAutoRefresh || isPreviewPaused || previewMode === 'static' || !appUrl) return

    // const interval = setInterval(() => {
    //   if (appUrl && !isLoading) {
    //     // Refresh the iframe
    //     const iframe = document.querySelector('#preview-iframe')
    //     if (iframe) {
    //       iframe.src = iframe.src
    //     }
    //   }
    // }, refreshInterval)

    // return () => clearInterval(interval)
  }, [isAutoRefresh, isPreviewPaused, previewMode, refreshInterval, isLoading, appUrl])

  const deployApp = async () => {
    console.log('🎮 deployApp called')
    console.log('🎮 Current project:', currentProject)
    console.log('🎮 Files:', currentProject?.files)
    console.log('🎮 Files count:', Object.keys(currentProject?.files || {}).length)
    
    if (!currentProject || Object.keys(currentProject.files).length === 0) {
      console.log('🎮 No project files to deploy')
      setDeploymentStatus('No files to deploy')
      return
    }

    // Prevent multiple simultaneous deployments
    if (isDeploying) {
      console.log('🎮 Deployment already in progress, skipping...')
      return
    }

    setIsDeploying(true)
    setIsLoading(true)
    setDeploymentStatus('Deploying...')
    console.log('🎮 Starting deployment process...')
    
    try {
      console.log('🚀 Deploying app...')
      console.log('🎮 Current project:', currentProject)
      console.log('🎮 Project files:', Object.keys(currentProject.files))
      console.log('🎮 Project files content:', currentProject.files)
      console.log('🎮 Files count:', Object.keys(currentProject.files).length)
      
      // Try Firebase deployment first
      const appName = currentProject.name || 'DreamBuild Calculator'
      console.log('🎮 Preview: Current project name:', currentProject.name)
      console.log('🎮 Preview: Using app name:', appName)
      console.log('🎮 Preview: Project config:', currentProject.config)
      let deploymentResult = await firebaseAppService.deployApp({
        name: appName,
        files: currentProject.files,
        isPublic: true, // Make app public by default
        preview: {
          title: appName,
          description: 'Generated with DreamBuild AI Builder',
          features: ['AI Generated', 'Responsive Design', 'Modern UI']
        },
        dependencies: [],
        buildInstructions: [],
        tags: ['ai-generated', 'dreambuild', 'calculator']
      })

      console.log('🎮 Firebase deployment result:', deploymentResult)
      console.log('🎮 Firebase deployment success:', deploymentResult?.success)
      console.log('🎮 Firebase deployment error:', deploymentResult?.error)
      console.log('🎮 Firebase deployment error code:', deploymentResult?.code)

      // If Firebase deployment fails, fallback to in-memory service
      if (!deploymentResult || !deploymentResult.success) {
        console.log('🔄 Firebase deployment failed, trying fallback...')
        console.log('🔄 Firebase error details:', deploymentResult?.error)
        console.log('🔄 Firebase error message:', deploymentResult?.error?.message)
        setDeploymentStatus('Firebase failed, trying fallback...')
        deploymentResult = await appDeploymentService.deployApp({
          name: appName,
          files: currentProject.files,
          preview: {
            title: appName,
            description: 'Generated with DreamBuild AI Builder',
            features: ['AI Generated', 'Responsive Design', 'Modern UI']
          },
          dependencies: [],
          buildInstructions: []
        })
        console.log('🎮 Fallback deployment result:', deploymentResult)
      }

      if (deploymentResult.success) {
        setDeployedApp(deploymentResult.appInfo)
        setAppUrl(deploymentResult.url)
        
        // Generate app content for direct rendering
        try {
          const appData = {
            name: appName,
            files: currentProject.files
          }
          const htmlContent = firebaseAppService.generateAppHTML(appData)
          setAppContent(htmlContent)
          
          // Extract CSS for separate injection
          const cssFile = currentProject.files['styles.css'] || currentProject.files['style.css'] || currentProject.files['app.css']
          if (cssFile) {
            setAppCss(cssFile)
            console.log('✅ CSS extracted for separate injection')
          }
          
          console.log('✅ App content generated for direct rendering')
        } catch (error) {
          console.error('❌ Error generating app content:', error)
        }
        
        console.log('✅ App deployed successfully:', deploymentResult.url)
        toast.success(`App deployed successfully! URL: ${deploymentResult.url}`, {
          duration: 6000,
          icon: '🚀'
        })
        console.log('🎮 Toast message URL:', deploymentResult.url)
        console.log('🎮 Toast message text:', `App deployed successfully! URL: ${deploymentResult.url}`)
        
        // Trigger gallery refresh after successful deployment
        setTimeout(() => {
          // Dispatch custom event to notify gallery of new app
          window.dispatchEvent(new CustomEvent('appDeployed', {
            detail: {
              appId: deploymentResult.appId,
              appName: appName,
              url: deploymentResult.url
            }
          }))
        }, 1000)
        
        // Success message handled by toast
      } else {
        console.error('❌ App deployment failed:', deploymentResult?.error || 'Unknown error')
        toast.error(`App deployment failed: ${deploymentResult?.error || 'Unknown error'}`)
        setDeploymentStatus('Deployment failed')
        
        // Error message handled by toast
      }
    } catch (error) {
      console.error('❌ Deployment error:', error)
      toast.error(`Deployment error: ${error.message}`)
      setDeploymentStatus('Deployment error')
      
      // Error message handled by toast
    } finally {
      setIsLoading(false)
      setIsDeploying(false)
    }
  }

  const handleRefresh = () => {
    if (appContent && currentProject) {
      // Regenerate app content
      try {
        const appData = {
          name: currentProject.name || 'DreamBuild App',
          files: currentProject.files
        }
        const htmlContent = firebaseAppService.generateAppHTML(appData)
        setAppContent(htmlContent)
        
        // Extract CSS for separate injection
        const cssFile = currentProject.files['styles.css'] || currentProject.files['style.css'] || currentProject.files['app.css']
        if (cssFile) {
          setAppCss(cssFile)
        }
        
        console.log('🔄 App content refreshed')
      } catch (error) {
        console.error('❌ Error refreshing app content:', error)
      }
    }
  }

  const handleOpenInNewTab = () => {
    if (appUrl) {
      window.open(appUrl, '_blank')
      toast.success('Opened in new tab!')
    }
  }

  const handleCopyUrl = () => {
    if (appUrl) {
      navigator.clipboard.writeText(appUrl)
      toast.success('URL copied to clipboard!')
    }
  }

  const handleShare = () => {
    if (appUrl) {
      if (navigator.share) {
        navigator.share({
          title: deployedApp?.name || 'DreamBuild App',
          url: appUrl
        })
      } else {
        handleCopyUrl()
      }
    }
  }

  const toggleFullscreen = async () => {
    if (!isFullscreen) {
      const iframe = document.querySelector('#preview-iframe')
      if (iframe && iframe.requestFullscreen) {
        await iframe.requestFullscreen()
      }
    } else {
      if (document.exitFullscreen) {
        await document.exitFullscreen()
      }
    }
    setIsFullscreen(!isFullscreen)
  }

  // Get device-specific styling
  const getDeviceStyling = () => {
    switch (deviceType) {
      case 'mobile':
        return 'w-80 h-[600px] rounded-lg shadow-lg'
      case 'tablet':
        return 'w-[768px] h-[600px] rounded-lg shadow-md'
      default:
        return 'w-full h-full'
    }
  }

  console.log('🎮 Preview component about to render')
  console.log('🎮 Preview currentProject:', currentProject)
  console.log('🎮 Preview appUrl:', appUrl)
  console.log('🎮 Preview isLoading:', isLoading)
  console.log('🎮 Preview deployedApp:', deployedApp)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`h-full flex flex-col bg-card border border-border rounded-lg overflow-hidden ${
        isFullscreen ? 'fixed inset-0 z-10 rounded-none' : ''
      }`}
    >
      {/* Preview Header - Two Row Layout */}
      <div className="border-b border-border bg-muted/50 relative">
        {/* Status Indicator - Repositioned */}
        <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded text-xs z-5 shadow-sm">
          {deployedApp ? 'DEPLOYED' : 'READY'}
        </div>
        
        {/* Top Row - Main Controls */}
        <div className="flex items-center justify-between p-3 pr-24">
          <div className="flex items-center gap-3">
            <button
              onClick={deployApp}
              disabled={isLoading}
              className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 disabled:opacity-50"
            >
              {isLoading ? 'Deploying...' : 'Deploy App'}
            </button>
            <h3 className="font-semibold text-sm text-foreground">Live Preview</h3>
            {isLoading && (
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-primary"></div>
                <span>Deploying...</span>
              </div>
            )}
          </div>
          
          {/* Right Side - Main Action Buttons */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => setIsAutoRefresh(!isAutoRefresh)}
              className={`p-2 rounded-md transition-colors ${
                isAutoRefresh ? 'bg-green-500 text-white' : 'bg-muted hover:bg-muted-foreground/20'
              }`}
              title={isAutoRefresh ? 'Disable Auto-refresh' : 'Enable Auto-refresh'}
            >
              <RefreshCw className={`h-4 w-4 ${isAutoRefresh ? 'animate-spin' : ''}`} />
            </button>
            
            <button
              onClick={() => setIsPreviewPaused(!isPreviewPaused)}
              className={`p-2 rounded-md transition-colors ${
                isPreviewPaused ? 'bg-red-500 text-white' : 'bg-muted hover:bg-muted-foreground/20'
              }`}
              title={isPreviewPaused ? 'Resume Preview' : 'Pause Preview'}
            >
              {isPreviewPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
            </button>
            
            <button
              onClick={handleRefresh}
              className="p-2 hover:bg-muted rounded-md transition-colors"
              title="Manual Refresh"
            >
              <RotateCcw className="h-4 w-4" />
            </button>
            
            <button
              onClick={toggleFullscreen}
              className="p-2 hover:bg-muted rounded-md transition-colors"
              title="Toggle Fullscreen"
            >
              {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
            </button>
          </div>
        </div>
        
        {/* Bottom Row - Device Controls and Additional Actions */}
        <div className="flex items-center justify-between px-3 pb-3">
          {/* Device Type Selector */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 bg-muted rounded-lg p-1">
              <button
                onClick={() => setDeviceType('desktop')}
                className={`p-1 rounded ${deviceType === 'desktop' ? 'bg-primary text-primary-foreground' : 'hover:bg-muted-foreground/20'}`}
                title="Desktop View"
              >
                <Monitor className="h-4 w-4" />
              </button>
              <button
                onClick={() => setDeviceType('tablet')}
                className={`p-1 rounded ${deviceType === 'tablet' ? 'bg-primary text-primary-foreground' : 'hover:bg-muted-foreground/20'}`}
                title="Tablet View"
              >
                <Tablet className="h-4 w-4" />
              </button>
              <button
                onClick={() => setDeviceType('mobile')}
                className={`p-1 rounded ${deviceType === 'mobile' ? 'bg-primary text-primary-foreground' : 'hover:bg-muted-foreground/20'}`}
                title="Mobile View"
              >
                <Smartphone className="h-4 w-4" />
              </button>
            </div>
            
            {/* Device Type Labels */}
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span className={deviceType === 'desktop' ? 'font-semibold text-foreground' : ''}>Desktop</span>
              <span className={deviceType === 'tablet' ? 'font-semibold text-foreground' : ''}>Tablet</span>
              <span className={deviceType === 'mobile' ? 'font-semibold text-foreground' : ''}>Mobile</span>
            </div>
          </div>
          
          {/* Additional Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleOpenInNewTab}
              className="p-2 hover:bg-muted rounded-md transition-colors"
              title="Open in New Tab"
            >
              <ExternalLink className="h-4 w-4" />
            </button>
            
            <button
              onClick={handleCopyUrl}
              className="p-2 hover:bg-muted rounded-md transition-colors"
              title="Copy URL"
            >
              <Copy className="h-4 w-4" />
            </button>
            
            <button
              onClick={handleShare}
              className="p-2 hover:bg-muted rounded-md transition-colors"
              title="Share App"
            >
              <Share2 className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Preview Content */}
      <div className="flex-1 relative h-full min-h-[500px]">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center h-full text-center p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              <span className="text-lg font-medium">Deploying App...</span>
            </div>
            <div className="text-sm text-muted-foreground text-center max-w-md">
              <p>Creating your app's web address...</p>
              <p className="mt-2">This may take a few moments</p>
            </div>
          </div>
        ) : appContent ? (
          <div className={`w-full h-full flex items-center justify-center ${
            deviceType === 'mobile' ? 'bg-gray-100' : 
            deviceType === 'tablet' ? 'bg-gray-50' : 
            'bg-white'
          }`}>
            <div className={`${getDeviceStyling()} transition-all duration-300 ease-in-out`}>
              <div 
                className={`w-full h-full border-0 ${
                  deviceType === 'mobile' ? 'rounded-lg shadow-lg' : 
                  deviceType === 'tablet' ? 'rounded-lg shadow-md' : 
                  ''
                }`}
                dangerouslySetInnerHTML={{ 
                  __html: appCss ? `<style>${appCss}</style>${appContent}` : appContent 
                }}
                title="DreamBuild App Preview"
                onLoad={() => {
                  setIsLoading(false)
                  console.log('🎮 App content rendered successfully')
                }}
                style={{
                  // Ensure the content is rendered as HTML, not text
                  whiteSpace: 'normal',
                  overflow: 'auto'
                }}
              />
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-center p-8">
            <Globe className="h-16 w-16 text-muted-foreground mb-4" />
            <h3 className="text-xl font-semibold mb-2">No App Deployed</h3>
            <p className="text-muted-foreground mb-4">Generate an app to see the preview</p>
            <button
              onClick={deployApp}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
            >
              Deploy App
            </button>
            
            {/* Fallback preview for testing */}
            {currentProject && Object.keys(currentProject.files).length > 0 && (
              <div className="mt-8 p-4 bg-muted/50 rounded-lg max-w-2xl w-full">
                <h4 className="text-lg font-semibold mb-2">Code Preview</h4>
                <div className="bg-background p-4 rounded border text-left max-h-64 overflow-auto">
                  <pre className="text-sm font-mono whitespace-pre-wrap">
                    {Object.entries(currentProject.files).map(([filename, content]) => 
                      `// ${filename}\n${content}\n\n`
                    ).join('')}
                  </pre>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Advanced Preview Footer */}
      <div className="flex items-center justify-between p-2 border-t border-border bg-muted/30 text-xs text-muted-foreground">
        <div className="flex items-center gap-4">
          {appUrl && (
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              <span className="font-mono text-xs">{appUrl}</span>
            </div>
          )}
          {appUrl && (
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-green-600">Live Preview Active</span>
            </div>
          )}
        </div>
        <div className="flex items-center gap-2">
          <span>Ctrl+R to refresh</span>
          <span>•</span>
          <span>Ctrl+Shift+F for fullscreen</span>
          <span>•</span>
          <span>Live preview with web addresses</span>
          <span>•</span>
          <span>Share your apps</span>
        </div>
      </div>
    </motion.div>
  )
}

export default Preview