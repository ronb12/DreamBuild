// Firebase App Service - Persistent app storage with Firestore
import { collection, doc, setDoc, getDoc, getDocs, query, orderBy, where, deleteDoc, updateDoc, increment } from 'firebase/firestore'
import { db } from '../config/firebase'

class FirebaseAppService {
  constructor() {
    this.collectionName = 'apps'
    this.baseUrl = 'https://dreambuild-2024-app.web.app/apps'
    this.db = db
  }

  // Generate unique app ID with app name
  generateAppId(appName = 'Generated Project') {
    const timestamp = Date.now()
    const random = Math.random().toString(36).substring(2, 8)
    const counter = Math.floor(Math.random() * 1000)
    
    // Create a URL-friendly version of the app name
    const cleanName = appName
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .substring(0, 20) // Limit length
    
    return `${cleanName}-${timestamp}-${random}-${counter}`
  }

  // Deploy app to Firestore (persistent storage)
  async deployApp(appData, userId = 'anonymous') {
    try {
      console.log('🔥 FirebaseAppService: Starting deployment')
      console.log('🔥 App data:', appData)
      
      const appName = appData.name || 'Generated Project'
      const appId = this.generateAppId(appName)
      const appUrl = `${this.baseUrl}/${appId}`
      
      console.log('🔥 Generated app ID:', appId)
      console.log('🔥 Generated app URL:', appUrl)
      
      // Validate URL to ensure no extra characters and clean format
      let cleanUrl = appUrl.replace(/[^a-zA-Z0-9\-:\/\.]/g, '')
      
      // Remove any trailing "App" that might have been appended
      cleanUrl = cleanUrl.replace(/App$/, '')
      
      // Ensure URL ends with a clean app ID
      if (cleanUrl.includes('/apps/')) {
        const urlParts = cleanUrl.split('/apps/')
        if (urlParts.length === 2) {
          const appId = urlParts[1].replace(/[^a-zA-Z0-9\-]/g, '')
          cleanUrl = `${urlParts[0]}/apps/${appId}`
        }
      }
      
      // Final validation - ensure URL is properly formatted
      if (!cleanUrl.match(/^https:\/\/dreambuild-2024-app\.web\.app\/apps\/[a-zA-Z0-9\-]+$/)) {
        // If URL is malformed, reconstruct it properly
        cleanUrl = `${this.baseUrl}/${appId}`
      }
      
      console.log('🚀 FirebaseAppService: App Name:', appName)
      console.log('🚀 FirebaseAppService: Base URL:', this.baseUrl)
      console.log('🚀 FirebaseAppService: Generated App ID:', appId)
      console.log('🚀 FirebaseAppService: Constructed URL:', appUrl)
      console.log('🚀 FirebaseAppService: Clean URL:', cleanUrl)
      
      console.log('🚀 FirebaseAppService: Deploying app with ID:', appId)
      console.log('🚀 FirebaseAppService: App URL:', appUrl)
      console.log('🚀 FirebaseAppService: App data:', appData)
      
      const now = new Date()
      const appInfo = {
        id: appId,
        name: appName,
        url: cleanUrl,
        files: appData.files || {},
        userId: userId,
        isPublic: appData.isPublic || false,
        createdAt: now,
        updatedAt: now,
        status: 'deployed',
        preview: appData.preview || {},
        dependencies: appData.dependencies || [],
        buildInstructions: appData.buildInstructions || [],
        views: 0,
        likes: 0,
        tags: appData.tags || []
      }
      
      console.log('🚀 FirebaseAppService: App info created:', {
        name: appInfo.name,
        createdAt: appInfo.createdAt,
        createdAtType: typeof appInfo.createdAt
      })
      
      console.log('🚀 FirebaseAppService: App name:', appName)
      console.log('🚀 FirebaseAppService: App ID:', appId)
      console.log('🚀 FirebaseAppService: App URL:', appUrl)

      // Store in Firestore
      console.log('🚀 FirebaseAppService: Attempting to store in Firestore...')
      console.log('🚀 FirebaseAppService: Collection name:', this.collectionName)
      console.log('🚀 FirebaseAppService: App ID:', appId)
      
      try {
        await setDoc(doc(this.db, this.collectionName, appId), appInfo)
        console.log(`🚀 App deployed to Firestore: ${appId} at ${appUrl}`)
        console.log(`🚀 FirebaseAppService: Successfully stored app in Firestore`)
      } catch (firestoreError) {
        console.error('❌ Firestore setDoc failed:', firestoreError)
        throw firestoreError
      }
      
      return {
        success: true,
        appId,
        url: cleanUrl,
        appInfo
      }
    } catch (error) {
      console.error('❌ Firestore deployment failed:', error)
      console.error('❌ Error details:', {
        code: error.code,
        message: error.message,
        stack: error.stack
      })
      return {
        success: false,
        error: error.message || 'Unknown deployment error',
        code: error.code || 'UNKNOWN_ERROR'
      }
    }
  }

  // Get app by ID from Firestore
  async getApp(appId) {
    try {
      console.log('🔍 FirebaseAppService: Getting app with ID:', appId)
      const appDoc = await getDoc(doc(this.db, this.collectionName, appId))
      if (appDoc.exists()) {
        const appData = { id: appDoc.id, ...appDoc.data() }
        console.log('🔍 FirebaseAppService: App found:', appData)
        console.log('🔍 FirebaseAppService: App files:', Object.keys(appData.files || {}))
        return appData
      }
      console.log('🔍 FirebaseAppService: App not found in Firestore')
      return null
    } catch (error) {
      console.error('❌ Error getting app:', error)
      return null
    }
  }

  // Get all public apps
  async getPublicApps(limit = 20) {
    try {
      console.log('🔍 FirebaseAppService: Getting public apps...')
      const q = query(
        collection(this.db, this.collectionName),
        where('isPublic', '==', true),
        orderBy('createdAt', 'desc')
      )
      const snapshot = await getDocs(q)
      const apps = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })).slice(0, limit)
      console.log('✅ FirebaseAppService: Retrieved', apps.length, 'public apps')
      return apps
    } catch (error) {
      console.error('❌ Error getting public apps:', error)
      console.log('🔄 FirebaseAppService: Returning empty array as fallback')
      
      // Return empty array if Firebase fails
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
      console.log('📊 FirebaseAppService: Getting app stats...')
      
      // Only query public apps since that's what we have permission to read
      const q = query(
        collection(this.db, this.collectionName),
        where('isPublic', '==', true)
      )
      const snapshot = await getDocs(q)
      const apps = snapshot.docs.map(doc => doc.data())
      
      console.log('✅ FirebaseAppService: Retrieved', apps.length, 'public apps for stats')
      
      return {
        totalApps: apps.length, // Only count public apps
        publicApps: apps.length, // All apps in this query are public
        totalViews: apps.reduce((sum, app) => sum + (app.views || 0), 0),
        totalLikes: apps.reduce((sum, app) => sum + (app.likes || 0), 0)
      }
    } catch (error) {
      console.error('❌ Error getting app stats:', error)
      console.log('🔄 FirebaseAppService: Returning default stats due to error')
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
    
    console.log('🔍 FirebaseAppService: generateAppHTML called')
    console.log('🔍 FirebaseAppService: files keys:', Object.keys(files))
    
    // Find the main HTML file
    const htmlFile = files['index.html'] || files['app.html'] || files['main.html']
    const cssFile = files['style.css'] || files['styles.css'] || files['app.css']
    const jsFile = files['script.js'] || files['app.js'] || files['main.js']
    
    console.log('🔍 FirebaseAppService: htmlFile found:', !!htmlFile)
    console.log('🔍 FirebaseAppService: cssFile found:', !!cssFile)
    console.log('🔍 FirebaseAppService: jsFile found:', !!jsFile)
    
    if (!htmlFile) {
      console.log('🔍 FirebaseAppService: No HTML file found, using fallback')
      return this.generateFallbackHTML(name)
    }

    // Check if htmlFile is a complete HTML document or just body content
    const isCompleteHTML = htmlFile.includes('<!DOCTYPE html>') || (htmlFile.includes('<html') && htmlFile.includes('<head>'))
    
    
    
    let html
    if (isCompleteHTML) {
      // It's a complete HTML document, extract only the body content for direct rendering
      const bodyMatch = htmlFile.match(/<body[^>]*>([\s\S]*?)<\/body>/i)
      if (bodyMatch) {
        html = bodyMatch[1]
        console.log('🔍 FirebaseAppService: Extracted body content from complete HTML')
      } else {
        // Fallback: remove HTML document structure
        html = htmlFile
          .replace(/<!DOCTYPE[^>]*>/gi, '')
          .replace(/<html[^>]*>/gi, '')
          .replace(/<\/html>/gi, '')
          .replace(/<head[^>]*>[\s\S]*?<\/head>/gi, '')
          .replace(/<body[^>]*>/gi, '')
          .replace(/<\/body>/gi, '')
        console.log('🔍 FirebaseAppService: Stripped HTML document structure')
      }
      
      // Inject JavaScript if available
      if (jsFile) {
        html += `<script>${jsFile}</script>`
      }
    } else {
      // It's just body content, return only the body content for direct rendering
      // Note: CSS will be injected separately in the React component
      html = htmlFile
      console.log('🔍 FirebaseAppService: Using body content directly')
      
      // Inject JavaScript if available
      if (jsFile) {
        html += `<script>${jsFile}</script>`
      }
    }
    
    // Add DreamBuild branding with app info
    html += `
      <div style="position: fixed; bottom: 10px; right: 10px; background: rgba(0,0,0,0.8); color: white; padding: 8px 12px; border-radius: 4px; font-size: 12px; z-index: 10;">
        Built with <a href="https://dreambuild-2024-app.web.app" style="color: #60a5fa;">DreamBuild</a>
        <br><small>App: ${name}</small>
      </div>`
    
    return html
  }

  // Generate fallback HTML (body content only for direct rendering)
  generateFallbackHTML(appName) {
    return `
<div class="container">
    <h1>${appName}</h1>
    <p>Your DreamBuild app is ready! This is a placeholder for your generated application.</p>
    <a href="https://dreambuild-2024-app.web.app" class="btn">Back to DreamBuild</a>
</div>
<style>
    .container {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        margin: 0;
        padding: 40px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
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
</style>`
  }
}

// Create singleton instance
const firebaseAppService = new FirebaseAppService()

export default firebaseAppService
