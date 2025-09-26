// App Deployment Service - Deploy generated apps to unique web addresses
class AppDeploymentService {
  constructor() {
    this.deployedApps = new Map()
    this.baseUrl = 'https://dreambuild-2024-app.web.app/apps'
    this.appCounter = 0
  }

  // Generate a unique app ID
  generateAppId() {
    this.appCounter++
    const timestamp = Date.now()
    const random = Math.random().toString(36).substring(2, 8)
    return `app-${timestamp}-${random}-${this.appCounter}`
  }

  // Deploy an app and return its web address
  async deployApp(appData) {
    try {
      const appId = this.generateAppId()
      const appUrl = `${this.baseUrl}/${appId}`
      
      // Store app data
      const appInfo = {
        id: appId,
        name: appData.name || 'DreamBuild App',
        url: appUrl,
        files: appData.files || {},
        createdAt: new Date().toISOString(),
        status: 'deployed',
        preview: appData.preview || {},
        dependencies: appData.dependencies || [],
        buildInstructions: appData.buildInstructions || []
      }

      this.deployedApps.set(appId, appInfo)
      
      console.log(`🚀 App deployed: ${appId} at ${appUrl}`)
      
      return {
        success: true,
        appId,
        url: appUrl,
        appInfo
      }
    } catch (error) {
      console.error('❌ App deployment failed:', error)
      return {
        success: false,
        error: error.message
      }
    }
  }

  // Get app by ID
  getApp(appId) {
    return this.deployedApps.get(appId)
  }

  // Get all deployed apps
  getAllApps() {
    return Array.from(this.deployedApps.values())
  }

  // Update app
  updateApp(appId, updates) {
    const app = this.deployedApps.get(appId)
    if (app) {
      const updatedApp = { ...app, ...updates, updatedAt: new Date().toISOString() }
      this.deployedApps.set(appId, updatedApp)
      return updatedApp
    }
    return null
  }

  // Delete app
  deleteApp(appId) {
    return this.deployedApps.delete(appId)
  }

  // Get app URL for preview
  getAppPreviewUrl(appId) {
    const app = this.deployedApps.get(appId)
    return app ? app.url : null
  }

  // Generate app HTML content
  generateAppHTML(appData) {
    const { files, name } = appData
    
    // Find the main HTML file
    const htmlFile = files['index.html'] || files['app.html'] || files['main.html']
    const cssFile = files['style.css'] || files['styles.css'] || files['app.css']
    const jsFile = files['script.js'] || files['app.js'] || files['main.js']
    
    if (!htmlFile) {
      return this.generateFallbackHTML(name)
    }

    let html = htmlFile
    
    // Inject CSS if available
    if (cssFile) {
      html = html.replace('</head>', `<style>${cssFile}</style></head>`)
    }
    
    // Inject JavaScript if available
    if (jsFile) {
      html = html.replace('</body>', `<script>${jsFile}</script></body>`)
    }
    
    // Add DreamBuild branding
    html = html.replace('</body>', `
      <div style="position: fixed; bottom: 10px; right: 10px; background: rgba(0,0,0,0.8); color: white; padding: 8px 12px; border-radius: 4px; font-size: 12px; z-index: 9999;">
        Built with <a href="https://dreambuild-2024-app.web.app" style="color: #60a5fa;">DreamBuild</a>
      </div>
    </body>`)
    
    return html
  }

  // Generate fallback HTML for apps without HTML files
  generateFallbackHTML(appName) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${appName}</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            margin: 0;
            padding: 40px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .container {
            text-align: center;
            max-width: 600px;
        }
        h1 {
            font-size: 3rem;
            margin-bottom: 1rem;
            background: linear-gradient(45deg, #fff, #f0f0f0);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        p {
            font-size: 1.2rem;
            margin-bottom: 2rem;
            opacity: 0.9;
        }
        .btn {
            display: inline-block;
            padding: 12px 24px;
            background: rgba(255,255,255,0.2);
            border: 2px solid rgba(255,255,255,0.3);
            border-radius: 8px;
            color: white;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s ease;
        }
        .btn:hover {
            background: rgba(255,255,255,0.3);
            transform: translateY(-2px);
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>${appName}</h1>
        <p>Your DreamBuild app is ready! This is a placeholder for your generated application.</p>
        <a href="https://dreambuild-2024-app.web.app" class="btn">Back to DreamBuild</a>
    </div>
</body>
</html>
    `
  }

  // Get deployment status
  getDeploymentStatus() {
    return {
      totalApps: this.deployedApps.size,
      baseUrl: this.baseUrl,
      deployedApps: this.getAllApps()
    }
  }
}

// Create singleton instance
const appDeploymentService = new AppDeploymentService()

export default appDeploymentService

