import React, { useState, useEffect, useMemo } from 'react'
import { useProject } from '../contexts/ProjectContext'
import { RefreshCw, ExternalLink, Download, Eye, EyeOff } from 'lucide-react'

const Preview = () => {
  const { currentProject } = useProject()
  const [previewContent, setPreviewContent] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [showPreview, setShowPreview] = useState(true)

  // Generate preview content from current project files
  const generatePreviewContent = useMemo(() => {
    if (!currentProject?.files) return ''

    const files = currentProject.files
    const htmlFile = files['index.html'] || 
                    files['app.html'] || 
                    files['main.html']
    
    // Debug: Log what files we're working with
    console.log('🔍 Preview: Files available:', Object.keys(files))
    
    // Collect all CSS files
    const cssFiles = Object.keys(files)
      .filter(key => key.endsWith('.css'))
      .map(key => {
        console.log(`  📄 Including CSS: ${key} (${files[key]?.length || 0} chars)`)
        return files[key]
      })
      .filter(Boolean)
      .join('\n\n')
    
    console.log(`✅ Preview: Bundled ${Object.keys(files).filter(k => k.endsWith('.css')).length} CSS files`)
    
    // Collect all JavaScript files and bundle them
    const jsFiles = Object.keys(files)
      .filter(key => key.endsWith('.js'))
      .map(key => {
        const content = files[key]
        console.log(`  📄 Including JS: ${key} (${content?.length || 0} chars)`)
        // Remove export statements for inline bundling
        return content
          .replace(/export\s+default\s+/g, '')
          .replace(/export\s+{[^}]+}/g, '')
          .replace(/import\s+.*from\s+['"].*['"]/g, '')
      })
      .filter(Boolean)
      .join('\n\n')
    
    console.log(`✅ Preview: Bundled ${Object.keys(files).filter(k => k.endsWith('.js')).length} JavaScript files`)
    
    // Add initialization code at the end
    const initCode = jsFiles ? `\n\n// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    if (typeof initializeApp === 'function') {
      initializeApp();
    }
  });
} else {
  if (typeof initializeApp === 'function') {
    initializeApp();
  }
}\n` : ''

    if (!htmlFile) return ''

    let htmlContent = htmlFile

    // If HTML doesn't have a complete structure, create one
    if (!htmlContent.includes('<!DOCTYPE html>')) {
      htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Generated App</title>
  ${cssFiles ? '<style>' + cssFiles + '</style>' : ''}
</head>
<body>
  ${htmlContent}
  ${jsFiles ? '<script>' + jsFiles + initCode + '</script>' : ''}
</body>
</html>`
    } else {
      // Inject CSS and JS into existing HTML
      if (cssFiles && !htmlContent.includes('<style>')) {
        htmlContent = htmlContent.replace('</head>', `<style>${cssFiles}</style></head>`)
      }
      if (jsFiles && !htmlContent.match(/<script[^>]*>[\s\S]*<\/script>/)) {
        htmlContent = htmlContent.replace('</body>', `<script>${jsFiles}${initCode}</script></body>`)
      } else if (jsFiles && htmlContent.includes('<script src="script.js">')) {
        // Replace external script references with inline bundled code
        htmlContent = htmlContent.replace(/<script src="script\.js"><\/script>/g, `<script>${jsFiles}${initCode}</script>`)
      }
    }

    console.log('🔄 Preview content regenerated')
    return htmlContent
  }, [currentProject?.files, JSON.stringify(Object.keys(currentProject?.files || {}))])

  // Update preview when content changes
  useEffect(() => {
    console.log('🖼️ Preview useEffect triggered')
    if (generatePreviewContent) {
      console.log('✅ Setting preview content')
      setPreviewContent(generatePreviewContent)
      setError(null)
    } else {
      console.log('⚠️ No preview content available')
      setPreviewContent('')
    }
  }, [generatePreviewContent])

  const handleRefresh = () => {
    console.log('🔄 Preview refresh clicked')
    console.log('📁 Current files:', Object.keys(currentProject?.files || {}))
    setIsLoading(true)
    setTimeout(() => {
      // Force regenerate by re-calling the generator
      const freshContent = generatePreviewContent
      console.log('✅ Fresh preview content generated')
      setPreviewContent(freshContent)
      setIsLoading(false)
    }, 500)
  }

  const handleDownload = () => {
    if (!previewContent) return
    
    const blob = new Blob([previewContent], { type: 'text/html' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'generated-app.html'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const handleOpenExternal = () => {
    if (!previewContent) return
    
    const blob = new Blob([previewContent], { type: 'text/html' })
    const url = URL.createObjectURL(blob)
    window.open(url, '_blank')
  }

  if (!currentProject?.files || Object.keys(currentProject.files).length === 0) {
    return (
      <div className="h-full flex items-center justify-center bg-muted/20">
        <div className="text-center space-y-4">
          <Eye className="w-12 h-12 text-muted-foreground mx-auto" />
          <div>
            <h3 className="text-lg font-semibold text-foreground">No Preview Available</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Generate some code to see the live preview here
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="h-full flex flex-col bg-background">
      {/* Preview Header */}
      <div className="flex items-center justify-between p-3 border-b border-border bg-muted/30">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowPreview(!showPreview)}
            className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-foreground bg-primary/10 hover:bg-primary/20 rounded-md transition-colors"
          >
            {showPreview ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
            {showPreview ? 'Hide Preview' : 'Show Preview'}
          </button>
          
          {showPreview && (
            <>
              <button
                onClick={handleRefresh}
                disabled={isLoading}
                className="flex items-center gap-1 px-2 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md transition-colors disabled:opacity-50"
              >
                <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
                Refresh
              </button>
              
              <div className="h-4 w-px bg-border" />
              
              <button
                onClick={handleOpenExternal}
                className="flex items-center gap-1 px-2 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Open
              </button>
              
              <button
                onClick={handleDownload}
                className="flex items-center gap-1 px-2 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md transition-colors"
              >
                <Download className="w-4 h-4" />
                Download
              </button>
            </>
          )}
        </div>
        
        <div className="text-xs text-muted-foreground">
          {Object.keys(currentProject.files).length} files
        </div>
      </div>

      {/* Preview Content */}
      {showPreview ? (
        <div className="flex-1 relative">
          {error ? (
            <div className="h-full flex items-center justify-center">
              <div className="text-center space-y-2">
                <div className="text-destructive">Preview Error</div>
                <div className="text-sm text-muted-foreground">{error}</div>
                <button
                  onClick={handleRefresh}
                  className="px-3 py-1.5 text-sm bg-primary/10 hover:bg-primary/20 rounded-md transition-colors"
                >
                  Retry
                </button>
              </div>
            </div>
          ) : previewContent ? (
            <iframe
              srcDoc={previewContent}
              className="w-full h-full border-0"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-presentation allow-pointer-lock"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; gamepad; fullscreen"
              title="Live Preview"
            />
          ) : (
            <div className="h-full flex items-center justify-center">
              <div className="text-center space-y-2">
                <div className="text-muted-foreground">Generating preview...</div>
                <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="flex-1 flex items-center justify-center bg-muted/10">
          <div className="text-center space-y-2">
            <EyeOff className="w-8 h-8 text-muted-foreground mx-auto" />
            <div className="text-sm text-muted-foreground">Preview hidden</div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Preview
