import { initializeApp } from 'firebase/app'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { getFirestore, collection, addDoc, doc, setDoc } from 'firebase/firestore'

// Firebase config
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "demo-key",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "dreambuild-2024-app.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "dreambuild-2024-app",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "dreambuild-2024-app.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "123456789",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:123456789:web:abcdef123456789"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const storage = getStorage(app)
const db = getFirestore(app)

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
}

// Export singleton instance
export default new DeploymentService()
