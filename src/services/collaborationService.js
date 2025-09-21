// Real-time Collaboration Service for DreamBuild
// Enables multi-user co-editing, comments, and version history

import { initializeApp } from 'firebase/app'
import { getFirestore, collection, doc, onSnapshot, addDoc, updateDoc, deleteDoc, query, where, orderBy, serverTimestamp } from 'firebase/firestore'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

class CollaborationService {
  constructor() {
    this.app = null
    this.db = null
    this.auth = null
    this.user = null
    this.listeners = new Map()
    this.cursors = new Map()
    this.comments = new Map()
    this.isInitialized = false
  }

  // Initialize collaboration service
  async initialize() {
    try {
      if (this.isInitialized) return

      const firebaseConfig = {
        apiKey: process.env.REACT_APP_FIREBASE_API_KEY || "your-api-key",
        authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || "your-project.firebaseapp.com",
        projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || "your-project-id",
        storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || "your-project.appspot.com",
        messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || "123456789",
        appId: process.env.REACT_APP_FIREBASE_APP_ID || "your-app-id"
      }

      this.app = initializeApp(firebaseConfig)
      this.db = getFirestore(this.app)
      this.auth = getAuth(this.app)

      // Set up auth state listener
      onAuthStateChanged(this.auth, (user) => {
        this.user = user
        console.log('Collaboration auth state changed:', user ? 'authenticated' : 'not authenticated')
      })

      this.isInitialized = true
      console.log('🤝 Collaboration service initialized successfully')
    } catch (error) {
      console.error('❌ Failed to initialize collaboration service:', error)
      throw error
    }
  }

  // ===== REAL-TIME COLLABORATION =====

  // Join project collaboration
  async joinProject(projectId, userInfo) {
    try {
      await this.initialize()
      
      const user = {
        id: this.user?.uid || 'anonymous',
        name: userInfo.name || 'Anonymous User',
        email: userInfo.email || '',
        avatar: userInfo.avatar || '',
        color: userInfo.color || this.generateUserColor(),
        joinedAt: new Date().toISOString(),
        isOnline: true
      }

      // Store user presence
      const presenceRef = doc(this.db, 'projectPresence', `${projectId}_${user.id}`)
      await updateDoc(presenceRef, user).catch(() => {
        // Create if doesn't exist
        return addDoc(collection(this.db, 'projectPresence'), {
          projectId,
          userId: user.id,
          ...user
        })
      })

      console.log('✅ User joined project collaboration')
      return user
    } catch (error) {
      console.error('❌ Failed to join project:', error)
      throw error
    }
  }

  // Leave project collaboration
  async leaveProject(projectId) {
    try {
      await this.initialize()
      
      const presenceRef = doc(this.db, 'projectPresence', `${projectId}_${this.user?.uid}`)
      await updateDoc(presenceRef, {
        isOnline: false,
        leftAt: new Date().toISOString()
      })

      console.log('✅ User left project collaboration')
    } catch (error) {
      console.error('❌ Failed to leave project:', error)
    }
  }

  // Get online users
  async getOnlineUsers(projectId) {
    try {
      await this.initialize()
      
      const presenceRef = collection(this.db, 'projectPresence')
      const q = query(
        presenceRef,
        where('projectId', '==', projectId),
        where('isOnline', '==', true)
      )

      return new Promise((resolve) => {
        const unsubscribe = onSnapshot(q, (snapshot) => {
          const users = []
          snapshot.forEach(doc => {
            users.push(doc.data())
          })
          resolve(users)
        })

        // Store listener for cleanup
        this.listeners.set(`onlineUsers_${projectId}`, unsubscribe)
      })
    } catch (error) {
      console.error('❌ Failed to get online users:', error)
      return []
    }
  }

  // ===== REAL-TIME CURSOR TRACKING =====

  // Update cursor position
  async updateCursor(projectId, fileId, position) {
    try {
      await this.initialize()
      
      const cursorRef = doc(this.db, 'cursors', `${projectId}_${fileId}_${this.user?.uid}`)
      await updateDoc(cursorRef, {
        projectId,
        fileId,
        userId: this.user?.uid,
        position,
        updatedAt: serverTimestamp()
      }).catch(() => {
        // Create if doesn't exist
        return addDoc(collection(this.db, 'cursors'), {
          projectId,
          fileId,
          userId: this.user?.uid,
          position,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp()
        })
      })

      // Store in local cache
      this.cursors.set(`${projectId}_${fileId}_${this.user?.uid}`, {
        position,
        updatedAt: new Date()
      })
    } catch (error) {
      console.error('❌ Failed to update cursor:', error)
    }
  }

  // Listen to cursor changes
  async listenToCursors(projectId, fileId, callback) {
    try {
      await this.initialize()
      
      const cursorsRef = collection(this.db, 'cursors')
      const q = query(
        cursorsRef,
        where('projectId', '==', projectId),
        where('fileId', '==', fileId)
      )

      const unsubscribe = onSnapshot(q, (snapshot) => {
        const cursors = []
        snapshot.forEach(doc => {
          const data = doc.data()
          if (data.userId !== this.user?.uid) { // Don't show own cursor
            cursors.push({
              id: doc.id,
              ...data
            })
          }
        })
        callback(cursors)
      })

      // Store listener for cleanup
      this.listeners.set(`cursors_${projectId}_${fileId}`, unsubscribe)
    } catch (error) {
      console.error('❌ Failed to listen to cursors:', error)
    }
  }

  // ===== REAL-TIME COMMENTS =====

  // Add comment
  async addComment(projectId, fileId, lineNumber, content, parentId = null) {
    try {
      await this.initialize()
      
      const comment = {
        projectId,
        fileId,
        lineNumber,
        content,
        parentId,
        userId: this.user?.uid,
        userName: this.user?.displayName || 'Anonymous',
        userAvatar: this.user?.photoURL || '',
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
        isResolved: false,
        reactions: {}
      }

      const commentRef = await addDoc(collection(this.db, 'comments'), comment)
      
      console.log('✅ Comment added successfully')
      return { id: commentRef.id, ...comment }
    } catch (error) {
      console.error('❌ Failed to add comment:', error)
      throw error
    }
  }

  // Get comments for file
  async getComments(projectId, fileId) {
    try {
      await this.initialize()
      
      const commentsRef = collection(this.db, 'comments')
      const q = query(
        commentsRef,
        where('projectId', '==', projectId),
        where('fileId', '==', fileId),
        orderBy('createdAt', 'asc')
      )

      return new Promise((resolve) => {
        const unsubscribe = onSnapshot(q, (snapshot) => {
          const comments = []
          snapshot.forEach(doc => {
            comments.push({
              id: doc.id,
              ...doc.data()
            })
          })
          resolve(comments)
        })

        // Store listener for cleanup
        this.listeners.set(`comments_${projectId}_${fileId}`, unsubscribe)
      })
    } catch (error) {
      console.error('❌ Failed to get comments:', error)
      return []
    }
  }

  // Update comment
  async updateComment(commentId, updates) {
    try {
      await this.initialize()
      
      const commentRef = doc(this.db, 'comments', commentId)
      await updateDoc(commentRef, {
        ...updates,
        updatedAt: serverTimestamp()
      })

      console.log('✅ Comment updated successfully')
    } catch (error) {
      console.error('❌ Failed to update comment:', error)
      throw error
    }
  }

  // Delete comment
  async deleteComment(commentId) {
    try {
      await this.initialize()
      
      const commentRef = doc(this.db, 'comments', commentId)
      await deleteDoc(commentRef)

      console.log('✅ Comment deleted successfully')
    } catch (error) {
      console.error('❌ Failed to delete comment:', error)
      throw error
    }
  }

  // ===== VERSION HISTORY =====

  // Save version
  async saveVersion(projectId, versionData) {
    try {
      await this.initialize()
      
      const version = {
        projectId,
        versionNumber: versionData.versionNumber,
        description: versionData.description || 'Auto-save',
        files: versionData.files,
        userId: this.user?.uid,
        userName: this.user?.displayName || 'Anonymous',
        createdAt: serverTimestamp(),
        changes: versionData.changes || [],
        isAutoSave: versionData.isAutoSave || false
      }

      const versionRef = await addDoc(collection(this.db, 'versions'), version)
      
      console.log('✅ Version saved successfully')
      return { id: versionRef.id, ...version }
    } catch (error) {
      console.error('❌ Failed to save version:', error)
      throw error
    }
  }

  // Get version history
  async getVersionHistory(projectId, limit = 50) {
    try {
      await this.initialize()
      
      const versionsRef = collection(this.db, 'versions')
      const q = query(
        versionsRef,
        where('projectId', '==', projectId),
        orderBy('createdAt', 'desc'),
        limit(limit)
      )

      return new Promise((resolve) => {
        const unsubscribe = onSnapshot(q, (snapshot) => {
          const versions = []
          snapshot.forEach(doc => {
            versions.push({
              id: doc.id,
              ...doc.data()
            })
          })
          resolve(versions)
        })

        // Store listener for cleanup
        this.listeners.set(`versions_${projectId}`, unsubscribe)
      })
    } catch (error) {
      console.error('❌ Failed to get version history:', error)
      return []
    }
  }

  // Restore version
  async restoreVersion(projectId, versionId) {
    try {
      await this.initialize()
      
      const versionRef = doc(this.db, 'versions', versionId)
      const versionDoc = await getDoc(versionRef)
      
      if (versionDoc.exists()) {
        const version = versionDoc.data()
        
        // Create new version with restored data
        await this.saveVersion(projectId, {
          versionNumber: `Restored from ${version.versionNumber}`,
          description: `Restored from version ${version.versionNumber}`,
          files: version.files,
          isAutoSave: false
        })

        console.log('✅ Version restored successfully')
        return version.files
      } else {
        throw new Error('Version not found')
      }
    } catch (error) {
      console.error('❌ Failed to restore version:', error)
      throw error
    }
  }

  // ===== REAL-TIME FILE SYNC =====

  // Sync file changes
  async syncFileChanges(projectId, fileId, changes) {
    try {
      await this.initialize()
      
      const change = {
        projectId,
        fileId,
        userId: this.user?.uid,
        userName: this.user?.displayName || 'Anonymous',
        changes,
        timestamp: serverTimestamp()
      }

      await addDoc(collection(this.db, 'fileChanges'), change)
      
      console.log('✅ File changes synced successfully')
    } catch (error) {
      console.error('❌ Failed to sync file changes:', error)
    }
  }

  // Listen to file changes
  async listenToFileChanges(projectId, fileId, callback) {
    try {
      await this.initialize()
      
      const changesRef = collection(this.db, 'fileChanges')
      const q = query(
        changesRef,
        where('projectId', '==', projectId),
        where('fileId', '==', fileId),
        orderBy('timestamp', 'desc'),
        limit(10)
      )

      const unsubscribe = onSnapshot(q, (snapshot) => {
        const changes = []
        snapshot.forEach(doc => {
          changes.push({
            id: doc.id,
            ...doc.data()
          })
        })
        callback(changes)
      })

      // Store listener for cleanup
      this.listeners.set(`fileChanges_${projectId}_${fileId}`, unsubscribe)
    } catch (error) {
      console.error('❌ Failed to listen to file changes:', error)
    }
  }

  // ===== UTILITY FUNCTIONS =====

  // Generate user color
  generateUserColor() {
    const colors = [
      '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7',
      '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9'
    ]
    return colors[Math.floor(Math.random() * colors.length)]
  }

  // Cleanup listeners
  cleanup() {
    this.listeners.forEach((unsubscribe) => {
      unsubscribe()
    })
    this.listeners.clear()
    console.log('🧹 Collaboration listeners cleaned up')
  }

  // Get collaboration stats
  async getCollaborationStats(projectId) {
    try {
      await this.initialize()
      
      const [users, comments, versions] = await Promise.all([
        this.getOnlineUsers(projectId),
        this.getComments(projectId, 'all'),
        this.getVersionHistory(projectId, 10)
      ])

      return {
        onlineUsers: users.length,
        totalComments: comments.length,
        totalVersions: versions.length,
        lastActivity: versions[0]?.createdAt || null
      }
    } catch (error) {
      console.error('❌ Failed to get collaboration stats:', error)
      return {
        onlineUsers: 0,
        totalComments: 0,
        totalVersions: 0,
        lastActivity: null
      }
    }
  }
}

// Export singleton instance
export default new CollaborationService()
