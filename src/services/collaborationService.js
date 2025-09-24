import firebaseService from './firebaseService'
import { 
  collection, 
  doc, 
  onSnapshot, 
  setDoc, 
  deleteDoc, 
  updateDoc,
  serverTimestamp,
  query,
  where,
  orderBy,
  limit
} from 'firebase/firestore'

class CollaborationService {
  constructor() {
    this.activeUsers = new Map()
    this.cursors = new Map()
    this.comments = new Map()
    this.listeners = new Map()
    this.currentUser = null
    this.currentProject = null
  }

  // Initialize collaboration for a project
  async initializeCollaboration(user, projectId) {
    this.currentUser = user
    this.currentProject = projectId
    
    console.log('🤝 Initializing collaboration for project:', projectId)
    
    // Set up real-time listeners
    await this.setupPresenceListener(projectId)
    await this.setupCursorsListener(projectId)
    await this.setupCommentsListener(projectId)
    await this.setupFileChangesListener(projectId)
    
    // Set user as online
    await this.setUserPresence(projectId, true)
  }

  // Set up presence listener for online users
  async setupPresenceListener(projectId) {
    const presenceRef = collection(firebaseService.db, 'projectPresence')
      const q = query(
        presenceRef,
        where('projectId', '==', projectId),
        where('isOnline', '==', true)
      )

        const unsubscribe = onSnapshot(q, (snapshot) => {
      const onlineUsers = []
          snapshot.forEach(doc => {
        const data = doc.data()
        onlineUsers.push({
          id: doc.id,
          userId: data.userId,
          userName: data.userName,
          userEmail: data.userEmail,
          userAvatar: data.userAvatar,
          lastSeen: data.lastSeen,
          cursorPosition: data.cursorPosition
        })
      })
      
      this.activeUsers.set(projectId, onlineUsers)
      console.log('👥 Active users:', onlineUsers.length)
    })

    this.listeners.set(`presence_${projectId}`, unsubscribe)
  }

  // Set up cursors listener for real-time cursor tracking
  async setupCursorsListener(projectId) {
    const cursorsRef = collection(firebaseService.db, 'cursors')
      const q = query(
        cursorsRef,
        where('projectId', '==', projectId),
      orderBy('updatedAt', 'desc')
      )

      const unsubscribe = onSnapshot(q, (snapshot) => {
        const cursors = []
        snapshot.forEach(doc => {
          const data = doc.data()
        if (data.userId !== this.currentUser?.uid) {
            cursors.push({
              id: doc.id,
            userId: data.userId,
            userName: data.userName,
            userAvatar: data.userAvatar,
            fileId: data.fileId,
            line: data.line,
            column: data.column,
            selection: data.selection,
            updatedAt: data.updatedAt
          })
        }
      })
      
      this.cursors.set(projectId, cursors)
      console.log('🖱️ Active cursors:', cursors.length)
    })

    this.listeners.set(`cursors_${projectId}`, unsubscribe)
  }

  // Set up comments listener for real-time comments
  async setupCommentsListener(projectId) {
    const commentsRef = collection(firebaseService.db, 'comments')
      const q = query(
        commentsRef,
        where('projectId', '==', projectId),
      orderBy('createdAt', 'desc'),
      limit(50)
      )

        const unsubscribe = onSnapshot(q, (snapshot) => {
          const comments = []
          snapshot.forEach(doc => {
        const data = doc.data()
            comments.push({
              id: doc.id,
          userId: data.userId,
          userName: data.userName,
          userAvatar: data.userAvatar,
          fileId: data.fileId,
          lineNumber: data.lineNumber,
          content: data.content,
          createdAt: data.createdAt,
          resolved: data.resolved || false
        })
      })
      
      this.comments.set(projectId, comments)
      console.log('💬 Comments:', comments.length)
    })

    this.listeners.set(`comments_${projectId}`, unsubscribe)
  }

  // Set up file changes listener for real-time file updates
  async setupFileChangesListener(projectId) {
    const changesRef = collection(firebaseService.db, 'fileChanges')
      const q = query(
      changesRef,
        where('projectId', '==', projectId),
      orderBy('timestamp', 'desc'),
      limit(20)
      )

        const unsubscribe = onSnapshot(q, (snapshot) => {
      const changes = []
          snapshot.forEach(doc => {
        const data = doc.data()
        changes.push({
              id: doc.id,
          userId: data.userId,
          userName: data.userName,
          fileId: data.fileId,
          changeType: data.changeType,
          content: data.content,
          timestamp: data.timestamp
        })
      })
      
      console.log('📝 File changes:', changes.length)
    })

    this.listeners.set(`changes_${projectId}`, unsubscribe)
  }

  // Set user presence (online/offline)
  async setUserPresence(projectId, isOnline) {
    if (!this.currentUser) return

    const presenceRef = doc(firebaseService.db, 'projectPresence', `${this.currentUser.uid}_${projectId}`)
    
    await setDoc(presenceRef, {
      userId: this.currentUser.uid,
      userName: this.currentUser.displayName || this.currentUser.email,
      userEmail: this.currentUser.email,
      userAvatar: this.currentUser.photoURL || '',
      projectId: projectId,
      isOnline: isOnline,
      lastSeen: serverTimestamp(),
      cursorPosition: null
    }, { merge: true })
  }

  // Update cursor position
  async updateCursor(projectId, fileId, line, column, selection = null) {
    if (!this.currentUser) return

    const cursorRef = doc(firebaseService.db, 'cursors', `${this.currentUser.uid}_${projectId}`)
    
    await setDoc(cursorRef, {
      userId: this.currentUser.uid,
      userName: this.currentUser.displayName || this.currentUser.email,
      userAvatar: this.currentUser.photoURL || '',
      projectId: projectId,
      fileId: fileId,
      line: line,
      column: column,
      selection: selection,
      updatedAt: serverTimestamp()
    }, { merge: true })
  }

  // Add a comment
  async addComment(projectId, fileId, lineNumber, content) {
    if (!this.currentUser) return

    const commentsRef = collection(firebaseService.db, 'comments')
    const newComment = {
      userId: this.currentUser.uid,
      userName: this.currentUser.displayName || this.currentUser.email,
      userAvatar: this.currentUser.photoURL || '',
      projectId: projectId,
      fileId: fileId,
      lineNumber: lineNumber,
      content: content,
      createdAt: serverTimestamp(),
      resolved: false
    }

    await setDoc(doc(commentsRef), newComment)
    console.log('💬 Comment added')
  }

  // Resolve a comment
  async resolveComment(commentId) {
    const commentRef = doc(firebaseService.db, 'comments', commentId)
    await updateDoc(commentRef, {
      resolved: true,
      resolvedAt: serverTimestamp()
    })
  }

  // Record file change
  async recordFileChange(projectId, fileId, changeType, content) {
    if (!this.currentUser) return

    const changesRef = collection(firebaseService.db, 'fileChanges')
      const change = {
      userId: this.currentUser.uid,
      userName: this.currentUser.displayName || this.currentUser.email,
      projectId: projectId,
      fileId: fileId,
      changeType: changeType, // 'create', 'update', 'delete'
      content: content,
        timestamp: serverTimestamp()
      }

    await setDoc(doc(changesRef), change)
  }

  // Get active users for a project
  getActiveUsers(projectId) {
    return this.activeUsers.get(projectId) || []
  }

  // Get cursors for a project
  getCursors(projectId) {
    return this.cursors.get(projectId) || []
  }

  // Get comments for a project
  getComments(projectId) {
    return this.comments.get(projectId) || []
  }

  // Share project with another user
  async shareProject(projectId, userEmail, permissions = 'read') {
    const shareRef = collection(firebaseService.db, 'projectShares')
    const share = {
      projectId: projectId,
      ownerId: this.currentUser.uid,
      sharedWith: userEmail,
      permissions: permissions, // 'read', 'write', 'admin'
      sharedAt: serverTimestamp(),
      accepted: false
    }

    await setDoc(doc(shareRef), share)
    console.log('🔗 Project shared with:', userEmail)
  }

  // Accept project share
  async acceptProjectShare(shareId) {
    const shareRef = doc(firebaseService.db, 'projectShares', shareId)
    await updateDoc(shareRef, {
      accepted: true,
      acceptedAt: serverTimestamp()
    })
  }

  // Get shared projects
  async getSharedProjects() {
    const sharesRef = collection(firebaseService.db, 'projectShares')
      const q = query(
      sharesRef,
      where('sharedWith', '==', this.currentUser.email),
      where('accepted', '==', true)
    )

    const snapshot = await getDocs(q)
    const sharedProjects = []
        snapshot.forEach(doc => {
      sharedProjects.push({
            id: doc.id,
            ...doc.data()
          })
    })

    return sharedProjects
  }

  // Clean up listeners
  cleanup() {
    this.listeners.forEach((unsubscribe, key) => {
      unsubscribe()
    })
    this.listeners.clear()
    this.activeUsers.clear()
    this.cursors.clear()
    this.comments.clear()
  }

  // Set user offline when leaving
  async setUserOffline(projectId) {
    if (this.currentUser && projectId) {
      await this.setUserPresence(projectId, false)
    }
  }
}

export default new CollaborationService()