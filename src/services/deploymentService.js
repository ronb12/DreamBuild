import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { collection, addDoc, doc, setDoc } from 'firebase/firestore'
import { storage, db } from '../config/firebase'

class DeploymentService {
  constructor() {
    this.deployments = new Map()
    this.isDeploying = false
  }

  // Deploy to Firebase Hosting
  async deployToFirebase(projectData, projectName) {
    if (this.isDeploying) {
      throw new Error('Deployment already in progress')
    }

    this.isDeploying = true
    
    try {
      console.log('🚀 Starting Firebase deployment...')
      
      // Check if this is a mobile app and handle accordingly
      const isMobileApp = this.isMobileApp(projectData.files)
      if (isMobileApp) {
        console.log('📱 Mobile app detected - generating build instructions')
        return await this.deployMobileApp(projectData, projectName, 'firebase')
      }
      
      // Generate unique deployment ID
      const deploymentId = `deploy_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
      
      // Create deployment record
      const deployment = {
        id: deploymentId,
        projectName: projectName || 'dream-app',
        files: projectData.files,
        config: projectData.config,
        deployedAt: new Date(),
        status: 'uploading',
        platform: 'firebase'
      }

      // Upload files to Firebase Storage
      const uploadedFiles = {}
      for (const [filename, content] of Object.entries(projectData.files)) {
        if (content && content.trim()) {
          const fileRef = ref(storage, `projects/${deploymentId}/${filename}`)
          const blob = new Blob([content], { type: this.getMimeType(filename) })
          await uploadBytes(fileRef, blob)
          const downloadURL = await getDownloadURL(fileRef)
          uploadedFiles[filename] = downloadURL
        }
      }

      // Create hosted HTML with all files embedded
      const hostedHTML = this.createHostedHTML(projectData.files)
      const htmlRef = ref(storage, `projects/${deploymentId}/index.html`)
      const htmlBlob = new Blob([hostedHTML], { type: 'text/html' })
      await uploadBytes(htmlRef, htmlBlob)
      const hostedURL = await getDownloadURL(htmlRef)

      // Save deployment record to Firestore
      await setDoc(doc(db, 'deployments', deploymentId), {
        ...deployment,
        status: 'completed',
        hostedURL,
        files: uploadedFiles,
        completedAt: new Date()
      })

      this.deployments.set(deploymentId, deployment)

      console.log('✅ Firebase deployment completed:', hostedURL)
      
      return {
        success: true,
        deploymentId,
        url: hostedURL,
        platform: 'firebase'
      }

    } catch (error) {
      console.error('❌ Firebase deployment failed:', error)
      throw new Error(`Firebase deployment failed: ${error.message}`)
    } finally {
      this.isDeploying = false
    }
  }

  // Deploy to GitHub Pages
  async deployToGitHub(projectData, projectName, githubToken = null) {
    if (this.isDeploying) {
      throw new Error('Deployment already in progress')
    }

    this.isDeploying = true
    
    try {
      console.log('🚀 Starting GitHub deployment...')
      
      const deploymentId = `github_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
      
      if (!githubToken) {
        // For demo purposes, create a GitHub repository link
        const repoName = projectName.toLowerCase().replace(/[^a-z0-9-]/g, '-')
        
        // Create hosted HTML
        const hostedHTML = this.createHostedHTML(projectData.files)
        
        // Upload to Firebase Storage as a GitHub Pages alternative
        const htmlRef = ref(storage, `github-pages/${deploymentId}/index.html`)
        const htmlBlob = new Blob([hostedHTML], { type: 'text/html' })
        await uploadBytes(htmlRef, htmlBlob)
        const hostedURL = await getDownloadURL(htmlRef)

        // Save deployment record
        await setDoc(doc(db, 'deployments', deploymentId), {
          id: deploymentId,
          projectName,
          files: projectData.files,
          config: projectData.config,
          deployedAt: new Date(),
          status: 'completed',
          platform: 'github-pages',
          hostedURL,
          repoName,
          instructions: this.generateGitHubInstructions(projectName, projectData.files)
        })

        return {
          success: true,
          deploymentId,
          url: hostedURL,
          platform: 'github-pages',
          repoName,
          instructions: this.generateGitHubInstructions(projectName, projectData.files)
        }
      }

      // TODO: Implement actual GitHub API integration
      // This would require GitHub OAuth and API integration
      throw new Error('GitHub API integration not yet implemented. Please use the demo deployment.')

    } catch (error) {
      console.error('❌ GitHub deployment failed:', error)
      throw new Error(`GitHub deployment failed: ${error.message}`)
    } finally {
      this.isDeploying = false
    }
  }

  // Create self-contained HTML with all files embedded
  createHostedHTML(files) {
    const htmlContent = files['index.html'] || this.generateDefaultHTML()
    const cssContent = files['style.css'] || ''
    const jsContent = files['script.js'] || ''

    // Inject CSS and JS into HTML
    let fullHTML = htmlContent

    // Add CSS
    if (cssContent.trim()) {
      if (fullHTML.includes('</head>')) {
        fullHTML = fullHTML.replace('</head>', `<style>${cssContent}</style>\n</head>`)
      } else if (fullHTML.includes('<head>')) {
        fullHTML = fullHTML.replace('<head>', `<head>\n<style>${cssContent}</style>`)
      } else {
        fullHTML = `<style>${cssContent}</style>\n${fullHTML}`
      }
    }

    // Add JavaScript
    if (jsContent.trim()) {
      if (fullHTML.includes('</body>')) {
        fullHTML = fullHTML.replace('</body>', `<script>${jsContent}</script>\n</body>`)
      } else {
        fullHTML += `\n<script>${jsContent}</script>`
      }
    }

    // Ensure proper HTML structure
    if (!fullHTML.includes('<!DOCTYPE html>')) {
      fullHTML = `<!DOCTYPE html>\n${fullHTML}`
    }

    // Add meta tags for better hosting
    if (!fullHTML.includes('<meta name="viewport"')) {
      fullHTML = fullHTML.replace(
        '<head>',
        '<head>\n<meta name="viewport" content="width=device-width, initial-scale=1.0">'
      )
    }

    return fullHTML
  }

  // Generate default HTML if none exists
  generateDefaultHTML() {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DreamBuild App</title>
</head>
<body>
    <div style="display: flex; align-items: center; justify-content: center; min-height: 100vh; font-family: Arial, sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">
        <div style="text-align: center; padding: 40px; background: rgba(255,255,255,0.1); border-radius: 20px; backdrop-filter: blur(10px);">
            <h1 style="font-size: 2.5rem; margin-bottom: 20px;">🚀 DreamBuild App</h1>
            <p style="font-size: 1.2rem; opacity: 0.9;">Your app is ready! Add some content to get started.</p>
        </div>
    </div>
</body>
</html>`
  }

  // Get MIME type for file
  getMimeType(filename) {
    const ext = filename.split('.').pop().toLowerCase()
    const mimeTypes = {
      'html': 'text/html',
      'css': 'text/css',
      'js': 'application/javascript',
      'json': 'application/json',
      'md': 'text/markdown',
      'txt': 'text/plain'
    }
    return mimeTypes[ext] || 'text/plain'
  }

  // Generate GitHub deployment instructions
  generateGitHubInstructions(projectName, files) {
    const repoName = projectName.toLowerCase().replace(/[^a-z0-9-]/g, '-')
    
    return {
      steps: [
        '1. Create a new repository on GitHub',
        `2. Name it "${repoName}" (or your preferred name)`,
        '3. Initialize with README',
        '4. Upload your generated files to the repository',
        '5. Go to Settings > Pages',
        '6. Select "Deploy from a branch"',
        '7. Choose "main" branch and "/ (root)" folder',
        '8. Click Save - your site will be available at:',
        `   https://yourusername.github.io/${repoName}`
      ],
      files: Object.keys(files),
      repoName
    }
  }

  // Get deployment status
  getDeploymentStatus(deploymentId) {
    return this.deployments.get(deploymentId)
  }

  // Get all deployments
  async getAllDeployments() {
    try {
      const { collection, query, orderBy, limit, getDocs } = await import('firebase/firestore')
      const deploymentsRef = collection(db, 'deployments')
      const q = query(deploymentsRef, orderBy('deployedAt', 'desc'), limit(20))
      const snapshot = await getDocs(q)
      
      return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
    } catch (error) {
      console.error('Error fetching deployments:', error)
      return []
    }
  }

  // Delete deployment
  async deleteDeployment(deploymentId) {
    try {
      const { deleteDoc } = await import('firebase/firestore')
      await deleteDoc(doc(db, 'deployments', deploymentId))
      this.deployments.delete(deploymentId)
      return true
    } catch (error) {
      console.error('Error deleting deployment:', error)
      return false
    }
  }

  // Check if currently deploying
  isCurrentlyDeploying() {
    return this.isDeploying
  }

  // Check if project is a mobile app
  isMobileApp(files) {
    const mobileIndicators = [
      'App.js', 'main.dart', 'pubspec.yaml', 'package.json',
      'capacitor.config.json', 'ionic.config.json', 'app.json'
    ]
    
    const fileNames = Object.keys(files)
    return mobileIndicators.some(indicator => 
      fileNames.some(fileName => fileName.includes(indicator))
    )
  }

  // Deploy mobile app with build instructions
  async deployMobileApp(projectData, projectName, platform) {
    const deploymentId = `mobile_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    const framework = this.detectMobileFramework(projectData.files)
    
    console.log(`📱 Deploying ${framework} mobile app...`)
    
    const deployment = {
      id: deploymentId,
      projectName: projectName || 'mobile-app',
      files: projectData.files,
      config: projectData.config,
      deployedAt: new Date(),
      status: 'completed',
      platform: 'mobile',
      framework: framework,
      buildInstructions: this.generateMobileBuildInstructions(framework, projectName, platform)
    }

    // For demo purposes, create a hosted page with build instructions
    const hostedHTML = this.createMobileAppInstructionsHTML(projectName, framework, deployment.buildInstructions)
    
    // Upload to Firebase Storage as a demo
    const htmlRef = ref(storage, `mobile-apps/${deploymentId}/index.html`)
    const htmlBlob = new Blob([hostedHTML], { type: 'text/html' })
    await uploadBytes(htmlRef, htmlBlob)
    const hostedURL = await getDownloadURL(htmlRef)

    // Save deployment record
    await setDoc(doc(db, 'deployments', deploymentId), {
      ...deployment,
      hostedURL
    })

    this.deployments.set(deploymentId, deployment)

    return {
      success: true,
      deploymentId,
      url: hostedURL,
      platform: 'mobile',
      framework: framework,
      buildInstructions: deployment.buildInstructions
    }
  }

  // Detect mobile framework from files
  detectMobileFramework(files) {
    const fileNames = Object.keys(files)
    
    if (fileNames.some(name => name.includes('pubspec.yaml') || name.includes('main.dart'))) {
      return 'Flutter'
    }
    if (fileNames.some(name => name.includes('App.js') && name.includes('package.json'))) {
      return 'React Native'
    }
    if (fileNames.some(name => name.includes('ionic.config.json'))) {
      return 'Ionic'
    }
    if (fileNames.some(name => name.includes('capacitor.config.json'))) {
      return 'Capacitor'
    }
    if (fileNames.some(name => name.includes('manifest.json') && name.includes('sw.js'))) {
      return 'PWA'
    }
    
    return 'React Native' // Default
  }

  // Generate build instructions for mobile apps
  generateMobileBuildInstructions(framework, projectName, platform) {
    const packageName = projectName.toLowerCase().replace(/[^a-z0-9]/g, '')
    
    switch (framework) {
      case 'React Native':
        return {
          framework: 'React Native',
          steps: [
            '1. Install Node.js and npm',
            '2. Install Expo CLI: npm install -g @expo/cli',
            '3. Install dependencies: npm install',
            '4. Start development server: npm start',
            '5. Build for Android: npm run build:android',
            '6. Build for iOS: npm run build:ios',
            '7. Deploy to app stores using EAS Build'
          ],
          commands: {
            install: 'npm install',
            start: 'npm start',
            'build-android': 'npm run build:android',
            'build-ios': 'npm run build:ios'
          },
          platforms: ['iOS', 'Android'],
          storeDeployment: 'Use Expo Application Services (EAS) for app store deployment'
        }
      
      case 'Flutter':
        return {
          framework: 'Flutter',
          steps: [
            '1. Install Flutter SDK',
            '2. Install dependencies: flutter pub get',
            '3. Run app: flutter run',
            '4. Build APK: flutter build apk',
            '5. Build iOS: flutter build ios',
            '6. Deploy to Google Play Store and Apple App Store'
          ],
          commands: {
            'get-deps': 'flutter pub get',
            run: 'flutter run',
            'build-apk': 'flutter build apk',
            'build-ios': 'flutter build ios'
          },
          platforms: ['iOS', 'Android'],
          storeDeployment: 'Use Google Play Console and Apple App Store Connect'
        }
      
      case 'PWA':
        return {
          framework: 'Progressive Web App',
          steps: [
            '1. Serve the app locally: npx serve .',
            '2. Test PWA features in Chrome DevTools',
            '3. Deploy to any static hosting service',
            '4. Configure service worker for offline functionality',
            '5. Submit to app stores using PWA Builder'
          ],
          commands: {
            serve: 'npx serve .',
            'test-pwa': 'Open Chrome DevTools → Application tab'
          },
          platforms: ['iOS', 'Android', 'Web'],
          storeDeployment: 'Use Microsoft PWA Builder for app store submission'
        }
      
      default:
        return {
          framework: framework,
          steps: [
            '1. Install required dependencies',
            '2. Follow framework-specific build instructions',
            '3. Build for target platforms',
            '4. Deploy to app stores'
          ],
          commands: {},
          platforms: ['iOS', 'Android'],
          storeDeployment: 'Follow platform-specific deployment guides'
        }
    }
  }

  // Create HTML page with mobile app build instructions
  createMobileAppInstructionsHTML(projectName, framework, buildInstructions) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${projectName} - Build Instructions</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
            line-height: 1.6;
            color: #333;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            margin: 0;
            padding: 20px;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            background: white;
            border-radius: 16px;
            padding: 40px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        .header {
            text-align: center;
            margin-bottom: 40px;
        }
        .header h1 {
            color: #1e293b;
            font-size: 2.5rem;
            margin-bottom: 10px;
        }
        .framework-badge {
            display: inline-block;
            background: #3b82f6;
            color: white;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 0.9rem;
            font-weight: bold;
        }
        .section {
            margin-bottom: 30px;
        }
        .section h2 {
            color: #1e293b;
            border-bottom: 2px solid #e2e8f0;
            padding-bottom: 10px;
        }
        .steps {
            background: #f8fafc;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
        }
        .steps ol {
            margin: 0;
            padding-left: 20px;
        }
        .steps li {
            margin-bottom: 8px;
            color: #475569;
        }
        .commands {
            background: #1e293b;
            color: #e2e8f0;
            border-radius: 8px;
            padding: 20px;
            font-family: 'Monaco', 'Menlo', monospace;
            margin: 20px 0;
        }
        .command {
            margin-bottom: 10px;
        }
        .command strong {
            color: #60a5fa;
        }
        .platforms {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            margin: 20px 0;
        }
        .platform {
            background: #10b981;
            color: white;
            padding: 6px 12px;
            border-radius: 16px;
            font-size: 0.9rem;
            font-weight: bold;
        }
        .store-info {
            background: #fef3c7;
            border: 1px solid #f59e0b;
            border-radius: 8px;
            padding: 16px;
            margin: 20px 0;
        }
        .store-info h3 {
            color: #92400e;
            margin-top: 0;
        }
        .store-info p {
            color: #92400e;
            margin-bottom: 0;
        }
        .footer {
            text-align: center;
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid #e2e8f0;
            color: #64748b;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🚀 ${projectName}</h1>
            <div class="framework-badge">${framework}</div>
        </div>

        <div class="section">
            <h2>📱 Mobile App Build Instructions</h2>
            <p>Your ${framework} mobile app has been generated successfully! Follow these steps to build and deploy your app.</p>
        </div>

        <div class="section">
            <h2>🛠️ Build Steps</h2>
            <div class="steps">
                <ol>
                    ${buildInstructions.steps.map(step => `<li>${step}</li>`).join('')}
                </ol>
            </div>
        </div>

        <div class="section">
            <h2>💻 Commands</h2>
            <div class="commands">
                ${Object.entries(buildInstructions.commands).map(([cmd, description]) => 
                  `<div class="command"><strong>${cmd}:</strong> ${description}</div>`
                ).join('')}
            </div>
        </div>

        <div class="section">
            <h2>📱 Supported Platforms</h2>
            <div class="platforms">
                ${buildInstructions.platforms.map(platform => 
                  `<span class="platform">${platform}</span>`
                ).join('')}
            </div>
        </div>

        <div class="section">
            <div class="store-info">
                <h3>🏪 App Store Deployment</h3>
                <p>${buildInstructions.storeDeployment}</p>
            </div>
        </div>

        <div class="footer">
            <p>Built with <strong>DreamBuild</strong> - Universal AI Development Platform</p>
            <p>Generated on ${new Date().toLocaleDateString()}</p>
        </div>
    </div>
</body>
</html>`
  }
}

// Export singleton instance
export default new DeploymentService()
