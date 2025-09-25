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

const Preview = () => {
  console.log('🎮 Preview component rendered!')
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
  const [deploymentStatus, setDeploymentStatus] = useState(null)

  // Deploy app when component mounts or project changes
  useEffect(() => {
    if (currentProject && Object.keys(currentProject.files).length > 0) {
      deployApp()
    }
  }, [currentProject])

  // Auto-refresh functionality
  useEffect(() => {
    if (!isAutoRefresh || isPreviewPaused || previewMode === 'static' || !appUrl) return

    const interval = setInterval(() => {
      if (appUrl && !isLoading) {
        // Refresh the iframe
        const iframe = document.querySelector('#preview-iframe')
        if (iframe) {
          iframe.src = iframe.src
        }
      }
    }, refreshInterval)

    return () => clearInterval(interval)
  }, [isAutoRefresh, isPreviewPaused, previewMode, refreshInterval, isLoading, appUrl])

  const deployApp = async () => {
    if (!currentProject || Object.keys(currentProject.files).length === 0) {
      console.log('🎮 No project files to deploy')
      return
    }

    setIsLoading(true)
    
    try {
      console.log('🚀 Deploying app...')
      
      const deploymentResult = await firebaseAppService.deployApp({
        name: currentProject.name || 'DreamBuild App',
        files: currentProject.files,
        preview: {
          title: currentProject.name || 'DreamBuild App',
          description: 'Generated with DreamBuild AI Builder',
          features: ['AI Generated', 'Responsive Design', 'Modern UI']
        },
        dependencies: [],
        buildInstructions: []
      })

      if (deploymentResult.success) {
        setDeployedApp(deploymentResult.appInfo)
        setAppUrl(deploymentResult.url)
        console.log('✅ App deployed successfully:', deploymentResult.url)
        toast.success('App deployed successfully!')
      } else {
        console.error('❌ App deployment failed:', deploymentResult.error)
        toast.error('App deployment failed')
      }
    } catch (error) {
      console.error('❌ Deployment error:', error)
      toast.error('Deployment error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  const handleRefresh = () => {
    if (appUrl) {
      const iframe = document.querySelector('#preview-iframe')
      if (iframe) {
        iframe.src = iframe.src
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`h-full flex flex-col bg-card border border-border rounded-lg overflow-hidden ${
        isFullscreen ? 'fixed inset-0 z-50 rounded-none' : ''
      }`}
    >
      {/* Debug Indicator */}
      <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs z-50">
        PREVIEW LOADED - {deployedApp ? 'DEPLOYED' : 'LOADING'}
      </div>
      
      {/* Advanced Preview Header */}
      <div className="flex items-center justify-between p-3 border-b border-border bg-muted/50">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-sm">Advanced Live Preview</h3>
          <span className="text-xs bg-green-500 text-white px-2 py-1 rounded">DEPLOYED</span>
          {isLoading && (
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <div className="spinner"></div>
              <span>Deploying...</span>
            </div>
          )}
          {isAutoRefresh && !isPreviewPaused && (
            <span className="text-xs bg-orange-500 text-white px-2 py-1 rounded">AUTO-REFRESH</span>
          )}
          {previewMode === 'live' && (
            <span className="text-xs bg-purple-500 text-white px-2 py-1 rounded">LIVE</span>
          )}
          {appUrl && (
            <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded">ONLINE</span>
          )}
        </div>
        
        {/* Advanced Preview Controls */}
        <div className="flex items-center gap-2">
          {/* Device Type Selector */}
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
          
          {/* Auto-refresh Toggle */}
          <button
            onClick={() => setIsAutoRefresh(!isAutoRefresh)}
            className={`p-2 rounded-md transition-colors ${
              isAutoRefresh ? 'bg-green-500 text-white' : 'bg-muted hover:bg-muted-foreground/20'
            }`}
            title={isAutoRefresh ? 'Disable Auto-refresh' : 'Enable Auto-refresh'}
          >
            <RefreshCw className={`h-4 w-4 ${isAutoRefresh ? 'animate-spin' : ''}`} />
          </button>
          
          {/* Pause/Play Toggle */}
          <button
            onClick={() => setIsPreviewPaused(!isPreviewPaused)}
            className={`p-2 rounded-md transition-colors ${
              isPreviewPaused ? 'bg-red-500 text-white' : 'bg-muted hover:bg-muted-foreground/20'
            }`}
            title={isPreviewPaused ? 'Resume Preview' : 'Pause Preview'}
          >
            {isPreviewPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
          </button>
          
          {/* Manual Refresh */}
          <button
            onClick={handleRefresh}
            className="p-2 hover:bg-muted rounded-md transition-colors"
            title="Manual Refresh"
          >
            <RotateCcw className="h-4 w-4" />
          </button>
          
          {/* Open in New Tab */}
          <button
            onClick={handleOpenInNewTab}
            className="p-2 hover:bg-muted rounded-md transition-colors"
            title="Open in New Tab"
          >
            <ExternalLink className="h-4 w-4" />
          </button>
          
          {/* Copy URL */}
          <button
            onClick={handleCopyUrl}
            className="p-2 hover:bg-muted rounded-md transition-colors"
            title="Copy URL"
          >
            <Copy className="h-4 w-4" />
          </button>
          
          {/* Share */}
          <button
            onClick={handleShare}
            className="p-2 hover:bg-muted rounded-md transition-colors"
            title="Share App"
          >
            <Share2 className="h-4 w-4" />
          </button>
          
          {/* Fullscreen */}
          <button
            onClick={toggleFullscreen}
            className="p-2 hover:bg-muted rounded-md transition-colors"
            title="Toggle Fullscreen"
          >
            {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
          </button>
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
        ) : appUrl ? (
          <div className={`w-full h-full flex items-center justify-center ${
            deviceType === 'mobile' ? 'bg-gray-100' : 
            deviceType === 'tablet' ? 'bg-gray-50' : 
            'bg-white'
          }`}>
            <div className={`${getDeviceStyling()} transition-all duration-300 ease-in-out`}>
              <iframe
                id="preview-iframe"
                src={appUrl}
                className={`w-full h-full border-0 ${
                  deviceType === 'mobile' ? 'rounded-lg shadow-lg' : 
                  deviceType === 'tablet' ? 'rounded-lg shadow-md' : 
                  ''
                }`}
                title="DreamBuild App Preview"
                sandbox="allow-scripts allow-forms allow-popups allow-same-origin"
                onLoad={() => setIsLoading(false)}
                onError={() => {
                  setIsLoading(false)
                  toast.error('Failed to load app preview')
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
          {deployedApp && (
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-green-600">App Deployed</span>
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