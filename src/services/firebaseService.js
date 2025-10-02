// Firebase Service for DreamBuild
// Handles unlimited cloud storage for projects, contexts, and templates

import { initializeApp, getApp } from 'firebase/app'
import { getFirestore, collection, doc, setDoc, getDoc, getDocs, addDoc, updateDoc, deleteDoc, query, where, orderBy, limit, startAfter, writeBatch } from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage'
import { getAuth, signInAnonymously, onAuthStateChanged } from 'firebase/auth'

class FirebaseService {
  constructor() {
    this.app = null
    this.db = null
    this.storage = null
    this.auth = null
    this.user = null
    this.isInitialized = false
  }

  // Initialize Firebase
  async initialize() {
    try {
      if (this.isInitialized) return

      const firebaseConfig = {
        apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "your-api-key",
        authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "your-project.firebaseapp.com",
        projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "your-project-id",
        storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "your-project.appspot.com",
        messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "123456789",
        appId: import.meta.env.VITE_FIREBASE_APP_ID || "your-app-id"
      }

      // Check if Firebase app is already initialized
      try {
        this.app = initializeApp(firebaseConfig)
      } catch (error) {
        if (error.code === 'app/duplicate-app') {
          // App already exists, get the existing instance
          this.app = getApp()
        } else if (error.code === 'app/no-options') {
          // No options provided, try to get existing app or create with minimal config
          try {
            this.app = getApp()
          } catch (e) {
            // If that fails, create with minimal config
            this.app = initializeApp({
              apiKey: "demo-key",
              authDomain: "demo.firebaseapp.com",
              projectId: "demo-project"
            })
          }
        } else {
          throw error
        }
      }
      
      this.db = getFirestore(this.app)
      this.storage = getStorage(this.app)
      this.auth = getAuth(this.app)

      // Set up auth state listener
      onAuthStateChanged(this.auth, (user) => {
        this.user = user
        console.log('Firebase auth state changed:', user ? 'authenticated' : 'not authenticated')
      })

      // Try to sign in anonymously, but don't fail if it doesn't work
      try {
        await signInAnonymously(this.auth)
        console.log('✅ Firebase anonymous auth successful')
      } catch (authError) {
        // Silently handle auth errors - this is expected in some configurations
        // Don't throw error, just continue without auth
        this.user = null
        
        // If it's an admin-restricted-operation error, it means anonymous auth is disabled
        if (authError.code === 'auth/admin-restricted-operation') {
          console.log('ℹ️ Firebase anonymous auth is disabled (expected for production security)')
          console.log('ℹ️ App will function normally without authentication')
        } else {
          console.log('ℹ️ Firebase auth not configured, continuing without authentication')
          console.log('ℹ️ Error:', authError.code)
        }
      }

      this.isInitialized = true
      console.log('🔥 Firebase initialized successfully')
    } catch (error) {
      console.error('❌ Failed to initialize Firebase:', error)
      // Don't throw error, just continue without Firebase
      this.isInitialized = false
      this.user = null
      console.log('⚠️ Continuing without Firebase services')
    }
  }

  // Store project context
  async storeProjectContext(projectId, context) {
    try {
      await this.initialize()
      
      const contextRef = doc(this.db, 'projectContexts', projectId)
      await setDoc(contextRef, {
        ...context,
        userId: this.user?.uid || 'anonymous',
        storedAt: new Date().toISOString(),
        dataSize: JSON.stringify(context).length
      })
      
      console.log('✅ Project context stored successfully')
    } catch (error) {
      console.error('❌ Failed to store project context:', error)
      throw error
    }
  }

  // Load project context
  async loadProjectContext(projectId) {
    try {
      await this.initialize()
      
      const contextRef = doc(this.db, 'projectContexts', projectId)
      const contextDoc = await getDoc(contextRef)
      
      if (contextDoc.exists()) {
        console.log('✅ Project context loaded successfully')
        return contextDoc.data()
      } else {
        console.log('❌ Project context not found')
        return null
      }
    } catch (error) {
      console.error('❌ Failed to load project context:', error)
      return null
    }
  }

  // Store project files
  async storeProjectFiles(projectId, files) {
    try {
      await this.initialize()
      
      const filesRef = doc(this.db, 'projectFiles', projectId)
      await setDoc(filesRef, {
        projectId,
        files,
        fileCount: Object.keys(files).length,
        totalSize: JSON.stringify(files).length,
        userId: this.user?.uid || 'anonymous',
        storedAt: new Date().toISOString()
      })
      
      console.log('✅ Project files stored successfully')
    } catch (error) {
      console.error('❌ Failed to store project files:', error)
      throw error
    }
  }

  // Load project files
  async loadProjectFiles(projectId) {
    try {
      await this.initialize()
      
      const filesRef = doc(this.db, 'projectFiles', projectId)
      const filesDoc = await getDoc(filesRef)
      
      if (filesDoc.exists()) {
        console.log('✅ Project files loaded successfully')
        return filesDoc.data().files
      } else {
        console.log('❌ Project files not found')
        return null
      }
    } catch (error) {
      console.error('❌ Failed to load project files:', error)
      return null
    }
  }

  // Store template
  async storeTemplate(template) {
    try {
      await this.initialize()
      
      const templateRef = doc(this.db, 'templates', template.id)
      await setDoc(templateRef, {
        ...template,
        userId: this.user?.uid || 'anonymous',
        updatedAt: new Date().toISOString()
      })
      
      console.log('✅ Template stored successfully')
    } catch (error) {
      console.error('❌ Failed to store template:', error)
      throw error
    }
  }

  // Load templates
  async loadTemplates() {
    try {
      await this.initialize()
      
      const templatesRef = collection(this.db, 'templates')
      const templatesSnapshot = await getDocs(templatesRef)
      
      const templates = []
      templatesSnapshot.forEach(doc => {
        templates.push(doc.data())
      })
      
      console.log('✅ Templates loaded successfully')
      return templates
    } catch (error) {
      console.error('❌ Failed to load templates:', error)
      return []
    }
  }

  // Search templates by keywords
  async searchTemplates(keywords, technologies, patterns) {
    try {
      await this.initialize()
      
      const templatesRef = collection(this.db, 'templates')
      let q = query(templatesRef)
      
      // Add filters based on search criteria
      if (keywords && keywords.length > 0) {
        q = query(q, where('keywords', 'array-contains-any', keywords))
      }
      
      if (technologies && technologies.length > 0) {
        q = query(q, where('technologies', 'array-contains-any', technologies))
      }
      
      if (patterns && patterns.length > 0) {
        q = query(q, where('patterns', 'array-contains-any', patterns))
      }
      
      const templatesSnapshot = await getDocs(q)
      const templates = []
      
      templatesSnapshot.forEach(doc => {
        templates.push(doc.data())
      })
      
      console.log('✅ Templates searched successfully')
      return templates
    } catch (error) {
      console.error('❌ Failed to search templates:', error)
      return []
    }
  }

  // Store large files in Firebase Storage
  async storeLargeFile(projectId, filename, content) {
    try {
      await this.initialize()
      
      const storageRef = ref(this.storage, `projects/${projectId}/${filename}`)
      const blob = new Blob([content], { type: 'text/plain' })
      
      await uploadBytes(storageRef, blob)
      const downloadURL = await getDownloadURL(storageRef)
      
      console.log('✅ Large file stored successfully')
      return downloadURL
    } catch (error) {
      console.error('❌ Failed to store large file:', error)
      throw error
    }
  }

  // Load large file from Firebase Storage
  async loadLargeFile(downloadURL) {
    try {
      const response = await fetch(downloadURL)
      const content = await response.text()
      
      console.log('✅ Large file loaded successfully')
      return content
    } catch (error) {
      console.error('❌ Failed to load large file:', error)
      return null
    }
  }

  // Get user's projects
  async getUserProjects() {
    try {
      await this.initialize()
      
      const projectsRef = collection(this.db, 'projectContexts')
      const q = query(projectsRef, where('userId', '==', this.user?.uid || 'anonymous'))
      const projectsSnapshot = await getDocs(q)
      
      const projects = []
      projectsSnapshot.forEach(doc => {
        projects.push({
          id: doc.id,
          ...doc.data()
        })
      })
      
      console.log('✅ User projects loaded successfully')
      return projects
    } catch (error) {
      console.error('❌ Failed to load user projects:', error)
      return []
    }
  }

  // Delete project
  async deleteProject(projectId) {
    try {
      await this.initialize()
      
      // Delete project context
      const contextRef = doc(this.db, 'projectContexts', projectId)
      await deleteDoc(contextRef)
      
      // Delete project files
      const filesRef = doc(this.db, 'projectFiles', projectId)
      await deleteDoc(filesRef)
      
      console.log('✅ Project deleted successfully')
    } catch (error) {
      console.error('❌ Failed to delete project:', error)
      throw error
    }
  }

  // Get storage usage statistics
  async getStorageStats() {
    try {
      await this.initialize()
      
      const projects = await this.getUserProjects()
      let totalSize = 0
      let totalFiles = 0
      
      for (const project of projects) {
        totalSize += project.dataSize || 0
        totalFiles += project.fileCount || 0
      }
      
      return {
        totalProjects: projects.length,
        totalFiles,
        totalSize,
        totalSizeMB: Math.round(totalSize / (1024 * 1024) * 100) / 100
      }
    } catch (error) {
      console.error('❌ Failed to get storage stats:', error)
      return {
        totalProjects: 0,
        totalFiles: 0,
        totalSize: 0,
        totalSizeMB: 0
      }
    }
  }

  // ===== MEMORY SYSTEM FOR PROMPT CONVERSATIONS =====
  
  // Store conversation memory
  async storeConversationMemory(projectId, conversation) {
    try {
      await this.initialize()
      
      const conversationData = JSON.stringify(conversation)
      const maxSize = 800000 // 800KB to be safe (Firestore limit is 1MB)
      
      if (conversationData.length > maxSize) {
        console.log('⚠️ Conversation data too large, storing in chunks')
        // Store in chunks
        const chunks = this.chunkData(conversation, maxSize)
        for (let i = 0; i < chunks.length; i++) {
          const chunkRef = doc(this.db, 'conversationMemory', `${projectId}_chunk_${i}`)
          await setDoc(chunkRef, {
            projectId,
            chunkIndex: i,
            totalChunks: chunks.length,
            conversation: chunks[i],
            userId: this.user?.uid || 'anonymous',
            lastUpdated: new Date().toISOString()
          })
        }
        console.log(`🧠 Conversation memory stored in ${chunks.length} chunks`)
      } else {
        const memoryRef = doc(this.db, 'conversationMemory', projectId)
        await setDoc(memoryRef, {
          projectId,
          conversation,
          userId: this.user?.uid || 'anonymous',
          lastUpdated: new Date().toISOString(),
          memorySize: conversationData.length
        })
        console.log('🧠 Conversation memory stored successfully')
      }
    } catch (error) {
      console.error('❌ Failed to store conversation memory:', error)
      throw error
    }
  }

  // Helper method to chunk large data
  chunkData(data, maxSize) {
    const chunks = []
    const dataStr = JSON.stringify(data)
    
    // Split by approximate size, trying to break at logical points
    let start = 0
    while (start < dataStr.length) {
      let end = Math.min(start + maxSize, dataStr.length)
      
      // Try to break at a logical point (end of object/array)
      if (end < dataStr.length) {
        let lastBrace = dataStr.lastIndexOf('}', end)
        let lastBracket = dataStr.lastIndexOf(']', end)
        let lastComma = dataStr.lastIndexOf(',', end)
        
        const breakPoint = Math.max(lastBrace, lastBracket, lastComma)
        if (breakPoint > start + maxSize * 0.8) { // Only break if we get at least 80% of max size
          end = breakPoint + 1
        }
      }
      
      try {
        chunks.push(JSON.parse(dataStr.slice(start, end)))
      } catch (e) {
        // If parsing fails, just store as string
        chunks.push(dataStr.slice(start, end))
      }
      
      start = end
    }
    
    return chunks
  }

  // Load conversation memory
  async loadConversationMemory(projectId) {
    try {
      await this.initialize()
      
      // First try to load as single document
      const memoryRef = doc(this.db, 'conversationMemory', projectId)
      const memoryDoc = await getDoc(memoryRef)
      
      if (memoryDoc.exists()) {
        console.log('🧠 Conversation memory loaded successfully')
        return memoryDoc.data().conversation
      }
      
      // If not found, try to load chunks
      const chunksRef = collection(this.db, 'conversationMemory')
      const chunksQuery = query(chunksRef, where('projectId', '==', projectId))
      const chunksSnapshot = await getDocs(chunksQuery)
      
      if (!chunksSnapshot.empty) {
        const chunks = []
        chunksSnapshot.forEach(doc => {
          chunks.push({
            index: doc.data().chunkIndex,
            data: doc.data().conversation
          })
        })
        
        // Sort chunks by index and reconstruct
        chunks.sort((a, b) => a.index - b.index)
        const reconstructedData = chunks.map(chunk => chunk.data)
        
        console.log(`🧠 Conversation memory loaded from ${chunks.length} chunks`)
        return reconstructedData
      }
      
      console.log('❌ Conversation memory not found')
      return null
    } catch (error) {
      console.error('❌ Failed to load conversation memory:', error)
      return null
    }
  }

  // Add new prompt to conversation memory
  async addPromptToMemory(projectId, prompt, response, context) {
    try {
      await this.initialize()
      
      // Load existing memory
      let memory = await this.loadConversationMemory(projectId) || {
        projectId,
        prompts: [],
        responses: [],
        context: {},
        createdAt: new Date().toISOString(),
        lastUpdated: new Date().toISOString()
      }
      
      // Add new prompt and response
      memory.prompts.push({
        id: `prompt-${Date.now()}`,
        text: prompt,
        timestamp: new Date().toISOString(),
        context: context
      })
      
      memory.responses.push({
        id: `response-${Date.now()}`,
        promptId: memory.prompts[memory.prompts.length - 1].id,
        text: response,
        timestamp: new Date().toISOString(),
        context: context
      })
      
      // Update context
      memory.context = { ...memory.context, ...context }
      memory.lastUpdated = new Date().toISOString()
      
      // Store updated memory
      await this.storeConversationMemory(projectId, memory)
      
      console.log('🧠 Prompt added to memory successfully')
      return memory
    } catch (error) {
      console.error('❌ Failed to add prompt to memory:', error)
      throw error
    }
  }

  // Get conversation history
  async getConversationHistory(projectId, limit = 50) {
    try {
      await this.initialize()
      
      const memory = await this.loadConversationMemory(projectId)
      if (!memory) return []
      
      // Return recent prompts and responses
      const recentPrompts = memory.prompts.slice(-limit)
      const recentResponses = memory.responses.slice(-limit)
      
      return {
        prompts: recentPrompts,
        responses: recentResponses,
        context: memory.context,
        totalPrompts: memory.prompts.length,
        totalResponses: memory.responses.length
      }
    } catch (error) {
      console.error('❌ Failed to get conversation history:', error)
      return []
    }
  }

  // Search conversation memory
  async searchConversationMemory(projectId, searchQuery) {
    try {
      await this.initialize()
      
      const memory = await this.loadConversationMemory(projectId)
      if (!memory) return []
      
      const results = []
      const query = searchQuery.toLowerCase()
      
      // Search in prompts
      memory.prompts.forEach(prompt => {
        if (prompt.text.toLowerCase().includes(query)) {
          results.push({
            type: 'prompt',
            id: prompt.id,
            text: prompt.text,
            timestamp: prompt.timestamp,
            context: prompt.context
          })
        }
      })
      
      // Search in responses
      memory.responses.forEach(response => {
        if (response.text.toLowerCase().includes(query)) {
          results.push({
            type: 'response',
            id: response.id,
            text: response.text,
            timestamp: response.timestamp,
            context: response.context
          })
        }
      })
      
      console.log('🔍 Conversation memory searched successfully')
      return results
    } catch (error) {
      console.error('❌ Failed to search conversation memory:', error)
      return []
    }
  }

  // Get conversation context for AI
  async getConversationContext(projectId, currentPrompt) {
    try {
      await this.initialize()
      
      const memory = await this.loadConversationMemory(projectId)
      if (!memory) return null
      
      // Build context for AI
      const context = {
        projectId,
        currentPrompt,
        previousPrompts: memory.prompts.slice(-10), // Last 10 prompts
        previousResponses: memory.responses.slice(-10), // Last 10 responses
        projectContext: memory.context,
        conversationSummary: this.generateConversationSummary(memory),
        relevantHistory: this.findRelevantHistory(memory, currentPrompt)
      }
      
      console.log('🧠 Conversation context generated successfully')
      return context
    } catch (error) {
      console.error('❌ Failed to get conversation context:', error)
      return null
    }
  }

  // Generate conversation summary
  generateConversationSummary(memory) {
    const prompts = memory.prompts
    const responses = memory.responses
    
    if (prompts.length === 0) return 'No previous conversation'
    
    const summary = {
      totalPrompts: prompts.length,
      totalResponses: responses.length,
      firstPrompt: prompts[0]?.text || '',
      lastPrompt: prompts[prompts.length - 1]?.text || '',
      keyTopics: this.extractKeyTopics(prompts),
      projectEvolution: this.trackProjectEvolution(memory)
    }
    
    return summary
  }

  // Extract key topics from conversation
  extractKeyTopics(prompts) {
    const topics = new Set()
    
    prompts.forEach(prompt => {
      const words = prompt.text.toLowerCase().split(' ')
      words.forEach(word => {
        if (word.length > 4 && !this.isCommonWord(word)) {
          topics.add(word)
        }
      })
    })
    
    return Array.from(topics).slice(0, 10) // Top 10 topics
  }

  // Check if word is common
  isCommonWord(word) {
    const commonWords = ['the', 'and', 'for', 'are', 'but', 'not', 'you', 'all', 'can', 'had', 'her', 'was', 'one', 'our', 'out', 'day', 'get', 'has', 'him', 'his', 'how', 'its', 'may', 'new', 'now', 'old', 'see', 'two', 'way', 'who', 'boy', 'did', 'man', 'men', 'put', 'say', 'she', 'too', 'use']
    return commonWords.includes(word)
  }

  // Track project evolution
  trackProjectEvolution(memory) {
    const evolution = []
    
    // Analyze how the project has evolved over time
    const prompts = memory.prompts
    const responses = memory.responses
    
    for (let i = 0; i < prompts.length; i++) {
      const prompt = prompts[i]
      const response = responses[i]
      
      evolution.push({
        phase: i + 1,
        prompt: prompt.text,
        response: response.text,
        timestamp: prompt.timestamp,
        context: prompt.context
      })
    }
    
    return evolution
  }

  // Find relevant history for current prompt
  findRelevantHistory(memory, currentPrompt) {
    const relevant = []
    const currentWords = currentPrompt.toLowerCase().split(' ')
    
    memory.prompts.forEach((prompt, index) => {
      const promptWords = prompt.text.toLowerCase().split(' ')
      const commonWords = currentWords.filter(word => promptWords.includes(word))
      
      if (commonWords.length > 2) { // If more than 2 words match
        relevant.push({
          prompt: prompt.text,
          response: memory.responses[index]?.text || '',
          relevance: commonWords.length,
          timestamp: prompt.timestamp
        })
      }
    })
    
    // Sort by relevance
    return relevant.sort((a, b) => b.relevance - a.relevance).slice(0, 5)
  }

  // Store AI learning patterns
  async storeAILearningPattern(projectId, pattern) {
    try {
      await this.initialize()
      
      const patternRef = doc(this.db, 'aiLearningPatterns', `${projectId}-${Date.now()}`)
      await setDoc(patternRef, {
        projectId,
        pattern,
        userId: this.user?.uid || 'anonymous',
        createdAt: new Date().toISOString()
      })
      
      console.log('🧠 AI learning pattern stored successfully')
    } catch (error) {
      console.error('❌ Failed to store AI learning pattern:', error)
      throw error
    }
  }

  // Get AI learning patterns
  async getAILearningPatterns(projectId) {
    try {
      await this.initialize()
      
      const patternsRef = collection(this.db, 'aiLearningPatterns')
      const q = query(patternsRef, where('projectId', '==', projectId))
      const patternsSnapshot = await getDocs(q)
      
      const patterns = []
      patternsSnapshot.forEach(doc => {
        patterns.push(doc.data())
      })
      
      console.log('🧠 AI learning patterns loaded successfully')
      return patterns
    } catch (error) {
      console.error('❌ Failed to load AI learning patterns:', error)
      return []
    }
  }

  // Clear conversation memory
  async clearConversationMemory(projectId) {
    try {
      await this.initialize()
      
      const memoryRef = doc(this.db, 'conversationMemory', projectId)
      await deleteDoc(memoryRef)
      
      console.log('🧠 Conversation memory cleared successfully')
    } catch (error) {
      console.error('❌ Failed to clear conversation memory:', error)
      throw error
    }
  }

  // Helper function to remove circular references and non-serializable data
  sanitizeForFirebase(obj, seen = new WeakSet()) {
    if (obj === null || typeof obj !== 'object') {
      return obj
    }

    // Check for circular reference
    if (seen.has(obj)) {
      return '[Circular Reference]'
    }

    seen.add(obj)

    // Handle arrays
    if (Array.isArray(obj)) {
      return obj.map(item => this.sanitizeForFirebase(item, seen))
    }

    // Handle plain objects
    const sanitized = {}
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const value = obj[key]
        
        // Skip functions, symbols, and undefined
        if (typeof value === 'function' || typeof value === 'symbol' || value === undefined) {
          continue
        }
        
        // Skip DOM elements and other non-serializable objects
        if (value instanceof Node || value instanceof Window) {
          continue
        }
        
        // Recursively sanitize nested objects
        try {
          sanitized[key] = this.sanitizeForFirebase(value, seen)
        } catch (error) {
          console.warn(`⚠️ Could not sanitize key "${key}":`, error.message)
          sanitized[key] = '[Unserialized]'
        }
      }
    }
    
    return sanitized
  }

  // Save conversation to Firebase
  async saveConversation(conversation) {
    try {
      await this.initialize()
      
      // Sanitize conversation data to remove circular references
      const sanitizedConversation = this.sanitizeForFirebase({
        id: conversation.id,
        messages: conversation.messages || [],
        metadata: conversation.metadata || {},
        createdAt: conversation.createdAt || new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        userId: this.user?.uid || 'anonymous'
      })
      
      const conversationRef = doc(this.db, 'conversations', sanitizedConversation.id)
      await setDoc(conversationRef, sanitizedConversation)
      
      console.log('💬 Conversation saved successfully')
    } catch (error) {
      // Handle quota exceeded errors gracefully
      if (error.code === 'resource-exhausted' || error.message?.includes('Quota exceeded')) {
        console.warn('⚠️ Firebase quota exceeded - conversation NOT saved (app continues normally)')
        return // Don't throw, allow app to continue
      }
      console.error('❌ Failed to save conversation:', error)
      // Don't throw error to prevent UI disruption
      // throw error
    }
  }

  // Get conversation by ID
  async getConversation(conversationId) {
    try {
      await this.initialize()
      
      const conversationRef = doc(this.db, 'conversations', conversationId)
      const conversationSnap = await getDoc(conversationRef)
      
      if (conversationSnap.exists()) {
        console.log('💬 Conversation loaded successfully')
        return conversationSnap.data()
      }
      
      return null
    } catch (error) {
      console.error('❌ Failed to load conversation:', error)
      return null
    }
  }

  // Get all conversations for a user
  async getUserConversations() {
    try {
      await this.initialize()
      
      const conversationsRef = collection(this.db, 'conversations')
      const q = query(
        conversationsRef, 
        where('userId', '==', this.user?.uid || 'anonymous'),
        orderBy('lastModified', 'desc')
      )
      const conversationsSnapshot = await getDocs(q)
      
      const conversations = []
      conversationsSnapshot.forEach(doc => {
        conversations.push({ id: doc.id, ...doc.data() })
      })
      
      console.log('💬 User conversations loaded successfully')
      return conversations
    } catch (error) {
      console.error('❌ Failed to load user conversations:', error)
      return []
    }
  }

  // Save feature recommendations
  async saveFeatureRecommendations(conversationId, recommendations) {
    try {
      await this.initialize()
      
      const recommendationsRef = doc(this.db, 'featureRecommendations', conversationId)
      await setDoc(recommendationsRef, {
        conversationId,
        recommendations,
        userId: this.user?.uid || 'anonymous',
        createdAt: new Date().toISOString()
      })
      
      console.log('🎯 Feature recommendations saved successfully')
    } catch (error) {
      console.error('❌ Failed to save feature recommendations:', error)
      throw error
    }
  }

  // Get feature recommendations
  async getFeatureRecommendations(conversationId) {
    try {
      await this.initialize()
      
      const recommendationsRef = doc(this.db, 'featureRecommendations', conversationId)
      const recommendationsSnap = await getDoc(recommendationsRef)
      
      if (recommendationsSnap.exists()) {
        console.log('🎯 Feature recommendations loaded successfully')
        return recommendationsSnap.data().recommendations
      }
      
      return []
    } catch (error) {
      console.error('❌ Failed to load feature recommendations:', error)
      return []
    }
  }

  // Save industry standards check
  async saveIndustryStandardsCheck(conversationId, standardsCheck) {
    try {
      await this.initialize()
      
      const standardsRef = doc(this.db, 'industryStandards', conversationId)
      await setDoc(standardsRef, {
        conversationId,
        standardsCheck,
        userId: this.user?.uid || 'anonymous',
        checkedAt: new Date().toISOString()
      })
      
      console.log('📊 Industry standards check saved successfully')
    } catch (error) {
      console.error('❌ Failed to save industry standards check:', error)
      throw error
    }
  }

  // Get industry standards check
  async getIndustryStandardsCheck(conversationId) {
    try {
      await this.initialize()
      
      const standardsRef = doc(this.db, 'industryStandards', conversationId)
      const standardsSnap = await getDoc(standardsRef)
      
      if (standardsSnap.exists()) {
        console.log('📊 Industry standards check loaded successfully')
        return standardsSnap.data().standardsCheck
      }
      
      return null
    } catch (error) {
      console.error('❌ Failed to load industry standards check:', error)
      return null
    }
  }
}

// Export singleton instance
export default new FirebaseService()
