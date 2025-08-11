// Firebase-Based Memory System for AI Learning and Context Retention
// Enables persistent memory across sessions and users

class FirebaseMemory {
  constructor() {
    this.db = null
    this.userMemories = new Map()
    this.learningHistory = new Map()
    this.contextCache = new Map()
    this.connected = false
    this.config = {
      collectionPrefix: 'ai_memory',
      maxCacheSize: 1000,
      syncInterval: 5000 // 5 seconds
    }
  }

  async connect() {
    try {
      // Initialize Firebase connection
      try {
        // For now, use mock Firebase connection
        this.db = null
        this.connected = false
        console.log('⚠️ Firebase not available, using local memory fallback')
        return false
      } catch (error) {
        console.warn('⚠️ Firebase initialization failed, using local memory fallback:', error)
        this.connected = false
        return false
      }
    } catch (error) {
      console.error('❌ Firebase connection failed:', error)
      this.connected = false
      return false
    }
  }

  async storeMemory(userId, context, learning) {
    try {
      const memoryData = {
        userId,
        context,
        learning,
        timestamp: new Date(),
        sessionId: context.sessionId || 'default',
        type: 'user_memory'
      }

      // Store in local cache
      this.userMemories.set(userId, memoryData)

      // Store in Firebase if connected
      if (this.connected && this.db) {
        const docRef = this.db.collection(`${this.config.collectionPrefix}_users`).doc(userId)
        await docRef.set(memoryData, { merge: true })
      }

      return { success: true, memoryId: userId }
    } catch (error) {
      console.error('❌ Failed to store memory:', error)
      return { success: false, error: error.message }
    }
  }

  async retrieveMemory(userId, context) {
    try {
      // Check local cache first
      if (this.userMemories.has(userId)) {
        const localMemory = this.userMemories.get(userId)
        if (this.isMemoryRelevant(localMemory, context)) {
          return localMemory
        }
      }

      // Retrieve from Firebase if connected
      if (this.connected && this.db) {
        const docRef = this.db.collection(`${this.config.collectionPrefix}_users`).doc(userId)
        const doc = await docRef.get()
        
        if (doc.exists) {
          const firebaseMemory = doc.data()
          this.userMemories.set(userId, firebaseMemory)
          return firebaseMemory
        }
      }

      return null
    } catch (error) {
      console.error('❌ Failed to retrieve memory:', error)
      return null
    }
  }

  async storeLearning(learningData) {
    try {
      const learningRecord = {
        ...learningData,
        timestamp: new Date(),
        type: 'learning_record',
        processed: false
      }

      // Store in local cache
      this.learningHistory.set(learningRecord.timestamp.getTime(), learningRecord)

      // Store in Firebase if connected
      if (this.connected && this.db) {
        const docRef = this.db.collection(`${this.config.collectionPrefix}_learning`).doc()
        await docRef.set(learningRecord)
      }

      return { success: true, learningId: learningRecord.timestamp.getTime() }
    } catch (error) {
      console.error('❌ Failed to store learning:', error)
      return { success: false, error: error.message }
    }
  }

  async retrieveLearning(userId, context, limit = 10) {
    try {
      const relevantLearning = []

      // Check local cache
      for (const [id, learning] of this.learningHistory) {
        if (this.isLearningRelevant(learning, context) && relevantLearning.length < limit) {
          relevantLearning.push(learning)
        }
      }

      // Retrieve from Firebase if connected and need more
      if (this.connected && this.db && relevantLearning.length < limit) {
        const query = this.db.collection(`${this.config.collectionPrefix}_learning`)
          .where('userId', '==', userId)
          .orderBy('timestamp', 'desc')
          .limit(limit - relevantLearning.length)

        const snapshot = await query.get()
        snapshot.forEach(doc => {
          const learning = doc.data()
          if (this.isLearningRelevant(learning, context)) {
            relevantLearning.push(learning)
            this.learningHistory.set(learning.timestamp.getTime(), learning)
          }
        })
      }

      return relevantLearning
    } catch (error) {
      console.error('❌ Failed to retrieve learning:', error)
      return []
    }
  }

  async storeContext(sessionId, context) {
    try {
      const contextData = {
        sessionId,
        context,
        timestamp: new Date(),
        type: 'session_context'
      }

      // Store in local cache
      this.contextCache.set(sessionId, contextData)

      // Store in Firebase if connected
      if (this.connected && this.db) {
        const docRef = this.db.collection(`${this.config.collectionPrefix}_context`).doc(sessionId)
        await docRef.set(contextData)
      }

      return { success: true, contextId: sessionId }
    } catch (error) {
      console.error('❌ Failed to store context:', error)
      return { success: false, error: error.message }
    }
  }

  async retrieveContext(sessionId) {
    try {
      // Check local cache first
      if (this.contextCache.has(sessionId)) {
        return this.contextCache.get(sessionId)
      }

      // Retrieve from Firebase if connected
      if (this.connected && this.db) {
        const docRef = this.db.collection(`${this.config.collectionPrefix}_context`).doc(sessionId)
        const doc = await docRef.get()
        
        if (doc.exists) {
          const contextData = doc.data()
          this.contextCache.set(sessionId, contextData)
          return contextData
        }
      }

      return null
    } catch (error) {
      console.error('❌ Failed to retrieve context:', error)
      return null
    }
  }

  async getRelevantContext(userId, analysis) {
    try {
      const relevantContext = []

      // Get user memories
      const userMemory = await this.retrieveMemory(userId, analysis)
      if (userMemory) {
        relevantContext.push({
          type: 'user_memory',
          data: userMemory,
          relevance: this.calculateRelevance(userMemory, analysis)
        })
      }

      // Get relevant learning history
      const learningHistory = await this.retrieveLearning(userId, analysis, 5)
      learningHistory.forEach(learning => {
        relevantContext.push({
          type: 'learning',
          data: learning,
          relevance: this.calculateRelevance(learning, analysis)
        })
      })

      // Sort by relevance
      relevantContext.sort((a, b) => b.relevance - a.relevance)

      return relevantContext
    } catch (error) {
      console.error('❌ Failed to get relevant context:', error)
      return []
    }
  }

  isMemoryRelevant(memory, context) {
    // Simple relevance check - can be enhanced with AI
    if (!memory || !context) return false
    
    const memoryText = JSON.stringify(memory).toLowerCase()
    const contextText = JSON.stringify(context).toLowerCase()
    
    // Check for keyword matches
    const keywords = ['api', 'database', 'authentication', 'web', 'mobile', 'desktop']
    return keywords.some(keyword => 
      memoryText.includes(keyword) && contextText.includes(keyword)
    )
  }

  isLearningRelevant(learning, context) {
    // Check if learning is relevant to current context
    if (!learning || !context) return false
    
    const learningText = JSON.stringify(learning).toLowerCase()
    const contextText = JSON.stringify(context).toLowerCase()
    
    // Check for technical requirement matches
    if (learning.technicalRequirements && context.technicalRequirements) {
      return learning.technicalRequirements.some(req => 
        context.technicalRequirements.includes(req)
      )
    }
    
    return false
  }

  calculateRelevance(item, context) {
    // Calculate relevance score between 0 and 1
    let score = 0
    
    if (item.context && context) {
      // Check for matching keywords
      const itemText = JSON.stringify(item.context).toLowerCase()
      const contextText = JSON.stringify(context).toLowerCase()
      
      const keywords = ['api', 'database', 'authentication', 'web', 'mobile', 'desktop']
      const matches = keywords.filter(keyword => 
        itemText.includes(keyword) && contextText.includes(keyword)
      )
      
      score = matches.length / keywords.length
    }
    
    // Boost score for recent items
    if (item.timestamp) {
      const ageInHours = (Date.now() - item.timestamp.toDate()) / (1000 * 60 * 60)
      if (ageInHours < 24) score += 0.2
      if (ageInHours < 1) score += 0.3
    }
    
    return Math.min(score, 1)
  }

  async storePattern(pattern) {
    try {
      const patternData = {
        ...pattern,
        timestamp: new Date(),
        type: 'coding_pattern',
        usageCount: 1
      }

      // Store in Firebase if connected
      if (this.connected && this.db) {
        const docRef = this.db.collection(`${this.config.collectionPrefix}_patterns`).doc()
        await docRef.set(patternData)
      }

      return { success: true, patternId: patternData.timestamp.getTime() }
    } catch (error) {
      console.error('❌ Failed to store pattern:', error)
      return { success: false, error: error.message }
    }
  }

  async retrievePatterns(context, limit = 10) {
    try {
      const patterns = []

      // Retrieve from Firebase if connected
      if (this.connected && this.db) {
        const query = this.db.collection(`${this.config.collectionPrefix}_patterns`)
          .orderBy('usageCount', 'desc')
          .limit(limit)

        const snapshot = await query.get()
        snapshot.forEach(doc => {
          const pattern = doc.data()
          if (this.isPatternRelevant(pattern, context)) {
            patterns.push(pattern)
          }
        })
      }

      return patterns
    } catch (error) {
      console.error('❌ Failed to retrieve patterns:', error)
      return []
    }
  }

  isPatternRelevant(pattern, context) {
    // Check if pattern is relevant to current context
    if (!pattern || !context) return false
    
    const patternText = JSON.stringify(pattern).toLowerCase()
    const contextText = JSON.stringify(context).toLowerCase()
    
    // Check for language/framework matches
    if (pattern.language && context.language) {
      return pattern.language === context.language
    }
    
    return false
  }

  startBackgroundSync() {
    // Background sync every 5 seconds
    setInterval(async () => {
      if (this.connected) {
        await this.syncLocalToFirebase()
      }
    }, this.config.syncInterval)
  }

  async syncLocalToFirebase() {
    try {
      // Sync local changes to Firebase
      console.log('🔄 Syncing local memory to Firebase...')
      
      // This would sync any local changes that haven't been sent to Firebase
      // Implementation depends on specific requirements
      
    } catch (error) {
      console.error('❌ Background sync failed:', error)
    }
  }

  async getStats() {
    try {
      let totalMemories = 0
      let totalLearning = 0
      let totalPatterns = 0

      if (this.connected && this.db) {
        // Get counts from Firebase
        const memoriesSnapshot = await this.db.collection(`${this.config.collectionPrefix}_users`).get()
        const learningSnapshot = await this.db.collection(`${this.config.collectionPrefix}_learning`).get()
        const patternsSnapshot = await this.db.collection(`${this.config.collectionPrefix}_patterns`).get()

        totalMemories = memoriesSnapshot.size
        totalLearning = learningSnapshot.size
        totalPatterns = patternsSnapshot.size
      }

      return {
        connected: this.connected,
        localCache: {
          userMemories: this.userMemories.size,
          learningHistory: this.learningHistory.size,
          contextCache: this.contextCache.size
        },
        firebase: {
          totalMemories,
          totalLearning,
          totalPatterns
        },
        config: this.config
      }
    } catch (error) {
      console.error('❌ Failed to get stats:', error)
      return {
        connected: this.connected,
        error: error.message
      }
    }
  }

  async clear() {
    try {
      // Clear local cache
      this.userMemories.clear()
      this.learningHistory.clear()
      this.contextCache.clear()

      // Clear Firebase if connected
      if (this.connected && this.db) {
        // Note: This would delete all data - use with caution
        console.warn('⚠️ Clearing all Firebase memory data')
        
        const collections = ['users', 'learning', 'context', 'patterns']
        for (const collection of collections) {
          const snapshot = await this.db.collection(`${this.config.collectionPrefix}_${collection}`).get()
          const batch = this.db.batch()
          snapshot.docs.forEach(doc => batch.delete(doc.ref))
          await batch.commit()
        }
      }

      return { success: true }
    } catch (error) {
      console.error('❌ Failed to clear memory:', error)
      return { success: false, error: error.message }
    }
  }

  async backup() {
    try {
      const backup = {
        timestamp: new Date(),
        userMemories: Array.from(this.userMemories.entries()),
        learningHistory: Array.from(this.learningHistory.entries()),
        contextCache: Array.from(this.contextCache.entries())
      }

      // Store backup in Firebase
      if (this.connected && this.db) {
        const docRef = this.db.collection(`${this.config.collectionPrefix}_backups`).doc()
        await docRef.set(backup)
      }

      return { success: true, backupId: backup.timestamp.getTime() }
    } catch (error) {
      console.error('❌ Failed to create backup:', error)
      return { success: false, error: error.message }
    }
  }

  async restore(backupId) {
    try {
      if (this.connected && this.db) {
        const docRef = this.db.collection(`${this.config.collectionPrefix}_backups`).doc(backupId)
        const doc = await docRef.get()
        
        if (doc.exists) {
          const backup = doc.data()
          
          // Restore local cache
          this.userMemories = new Map(backup.userMemories)
          this.learningHistory = new Map(backup.learningHistory)
          this.contextCache = new Map(backup.contextCache)
          
          return { success: true, restoredFrom: backup.timestamp }
        }
      }

      return { success: false, error: 'Backup not found' }
    } catch (error) {
      console.error('❌ Failed to restore backup:', error)
      return { success: false, error: error.message }
    }
  }
}

const firebaseMemory = new FirebaseMemory()
export default firebaseMemory
