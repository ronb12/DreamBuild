// Firebase App Service - Persistent app storage with Firestore
import { getFirestore, collection, doc, setDoc, getDoc, getDocs, query, orderBy, where, deleteDoc, updateDoc, increment } from 'firebase/firestore'

class FirebaseAppService {
  constructor() {
    this.collectionName = 'apps'
    this.baseUrl = 'https://dreambuild-2024-app.web.app/apps'
    this.db = getFirestore()
  }

  // Generate unique app ID
  generateAppId() {
    const timestamp = Date.now()
    const random = Math.random().toString(36).substring(2, 8)
    return `app-${timestamp}-${random}`
  }

  // Deploy app to Firestore (persistent storage)
  async deployApp(appData, userId = 'anonymous') {
    try {
      const appId = this.generateAppId()
      const appUrl = `${this.baseUrl}/${appId}`
      
      const appInfo = {
        id: appId,
        name: appData.name || 'DreamBuild App',
        url: appUrl,
        files: appData.files || {},
        userId: userId,
        isPublic: appData.isPublic || false,
        createdAt: new Date(),
        updatedAt: new Date(),
        status: 'deployed',
        preview: appData.preview || {},
        dependencies: appData.dependencies || [],
        buildInstructions: appData.buildInstructions || [],
        views: 0,
        likes: 0,
        tags: appData.tags || []
      }

      // Store in Firestore
      await setDoc(doc(this.db, this.collectionName, appId), appInfo)
      
      console.log(`🚀 App deployed to Firestore: ${appId} at ${appUrl}`)
      
      return {
        success: true,
        appId,
        url: appUrl,
        appInfo
      }
    } catch (error) {
      console.error('❌ Firestore deployment failed:', error)
      return {
        success: false,
        error: error.message
      }
    }
  }

  // Get app by ID from Firestore
  async getApp(appId) {
    try {
      const appDoc = await getDoc(doc(this.db, this.collectionName, appId))
      if (appDoc.exists()) {
        return { id: appDoc.id, ...appDoc.data() }
      }
      return null
    } catch (error) {
      console.error('❌ Error getting app:', error)
      return null
    }
  }

  // Get all public apps
  async getPublicApps(limit = 20) {
    try {
      const q = query(
        collection(this.db, this.collectionName),
        where('isPublic', '==', true),
        orderBy('createdAt', 'desc')
      )
      const snapshot = await getDocs(q)
      return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })).slice(0, limit)
    } catch (error) {
      console.error('❌ Error getting public apps:', error)
      return []
    }
  }

  // Get user's apps
  async getUserApps(userId) {
    try {
      const q = query(
        collection(this.db, this.collectionName),
        where('userId', '==', userId),
        orderBy('createdAt', 'desc')
      )
      const snapshot = await getDocs(q)
      return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    } catch (error) {
      console.error('❌ Error getting user apps:', error)
      return []
    }
  }

  // Update app
  async updateApp(appId, updates) {
    try {
      const appRef = doc(this.db, this.collectionName, appId)
      await updateDoc(appRef, {
        ...updates,
        updatedAt: new Date()
      })
      return true
    } catch (error) {
      console.error('❌ Error updating app:', error)
      return false
    }
  }

  // Delete app
  async deleteApp(appId) {
    try {
      await deleteDoc(doc(this.db, this.collectionName, appId))
      return true
    } catch (error) {
      console.error('❌ Error deleting app:', error)
      return false
    }
  }

  // Increment app views
  async incrementViews(appId) {
    try {
      const appRef = doc(this.db, this.collectionName, appId)
      await updateDoc(appRef, {
        views: increment(1)
      })
      return true
    } catch (error) {
      console.error('❌ Error incrementing views:', error)
      return false
    }
  }

  // Like/unlike app
  async toggleLike(appId, userId) {
    try {
      const appRef = doc(this.db, this.collectionName, appId)
      // This would need a more complex implementation for like tracking
      await updateDoc(appRef, {
        likes: increment(1)
      })
      return true
    } catch (error) {
      console.error('❌ Error toggling like:', error)
      return false
    }
  }

  // Search apps
  async searchApps(searchTerm, limit = 20) {
    try {
      const q = query(
        collection(this.db, this.collectionName),
        where('isPublic', '==', true),
        orderBy('createdAt', 'desc')
      )
      const snapshot = await getDocs(q)
      const apps = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
      
      // Filter by search term
      const filteredApps = apps.filter(app => 
        app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
      
      return filteredApps.slice(0, limit)
    } catch (error) {
      console.error('❌ Error searching apps:', error)
      return []
    }
  }

  // Get app statistics
  async getAppStats() {
    try {
      const snapshot = await getDocs(collection(db, this.collectionName))
      const apps = snapshot.docs.map(doc => doc.data())
      
      return {
        totalApps: apps.length,
        publicApps: apps.filter(app => app.isPublic).length,
        totalViews: apps.reduce((sum, app) => sum + (app.views || 0), 0),
        totalLikes: apps.reduce((sum, app) => sum + (app.likes || 0), 0)
      }
    } catch (error) {
      console.error('❌ Error getting app stats:', error)
      return {
        totalApps: 0,
        publicApps: 0,
        totalViews: 0,
        totalLikes: 0
      }
    }
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
    
    // Add DreamBuild branding with app info
    html = html.replace('</body>', `
      <div style="position: fixed; bottom: 10px; right: 10px; background: rgba(0,0,0,0.8); color: white; padding: 8px 12px; border-radius: 4px; font-size: 12px; z-index: 9999;">
        Built with <a href="https://dreambuild-2024-app.web.app" style="color: #60a5fa;">DreamBuild</a>
        <br><small>App: ${name}</small>
      </div>
    </body>`)
    
    return html
  }

  // Generate fallback HTML
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
}

// Create singleton instance
const firebaseAppService = new FirebaseAppService()

export default firebaseAppService
