/**
 * Prompt Cache Service
 * Caches prompt-response pairs in Firebase for instant retrieval
 * Product of Bradley Virtual Solutions, LLC
 */

import { db } from '../config/firebase'
import { 
  collection, 
  query, 
  where, 
  getDocs, 
  addDoc, 
  updateDoc, 
  doc,
  orderBy,
  limit,
  Timestamp
} from 'firebase/firestore'

class PromptCacheService {
  constructor() {
    this.collectionName = 'cached_prompts'
    this.maxCacheSize = 20000
    this.similarityThreshold = 0.7
    this.isDisabled = false
    this.disabledUntil = null
    this.quotaErrorCount = 0
    
    console.log('🗄️ Prompt Cache Service initialized')
    console.log(`📦 Max capacity: ${this.maxCacheSize.toLocaleString()} prompts`)
  }

  /**
   * Check if service is disabled due to quota exhaustion
   */
  isServiceDisabled() {
    if (!this.isDisabled) return false
    
    if (this.disabledUntil && Date.now() < this.disabledUntil) {
      return true
    }
    
    // Re-enable after timeout
    this.isDisabled = false
    this.disabledUntil = null
    this.quotaErrorCount = 0
    console.log('🔄 Prompt Cache Service re-enabled after quota timeout')
    return false
  }

  /**
   * Handle quota exhaustion by disabling service temporarily
   */
  handleQuotaExhaustion() {
    this.quotaErrorCount++
    this.isDisabled = true
    this.disabledUntil = Date.now() + (30 * 60 * 1000) // Disable for 30 minutes
    
    console.warn(`⚠️ Firebase quota exhausted - disabling cache for 30 minutes (error #${this.quotaErrorCount})`)
    console.log('🔄 Code generation will continue without caching until quota resets')
  }

  /**
   * Normalize prompt for better matching
   */
  normalizePrompt(prompt) {
    return prompt
      .toLowerCase()
      .trim()
      .replace(/[^\w\s]/g, '') // Remove punctuation
      .replace(/\s+/g, ' ') // Normalize spaces
      .split(' ')
      .filter(word => word.length > 2) // Remove short words
      .sort() // Sort for consistency
      .join(' ')
  }

  /**
   * Extract keywords from prompt
   */
  extractKeywords(prompt) {
    const normalized = this.normalizePrompt(prompt)
    const commonWords = ['build', 'create', 'make', 'app', 'application', 'with', 'and', 'the', 'for']
    
    return normalized
      .split(' ')
      .filter(word => !commonWords.includes(word))
      .slice(0, 5) // Top 5 keywords
  }

  /**
   * Calculate similarity between two prompts
   */
  calculateSimilarity(prompt1, prompt2) {
    const normalized1 = this.normalizePrompt(prompt1)
    const normalized2 = this.normalizePrompt(prompt2)
    
    // Exact match
    if (normalized1 === normalized2) {
      return 1.0
    }
    
    // Keyword overlap
    const keywords1 = new Set(normalized1.split(' '))
    const keywords2 = new Set(normalized2.split(' '))
    
    const intersection = new Set([...keywords1].filter(x => keywords2.has(x)))
    const union = new Set([...keywords1, ...keywords2])
    
    // Jaccard similarity
    return intersection.size / union.size
  }

  /**
   * Check cache for matching prompt
   */
  async checkCache(prompt) {
    // Check if service is disabled due to quota exhaustion
    if (this.isServiceDisabled()) {
      console.log('⚠️ Cache disabled due to quota exhaustion - skipping cache check')
      return { found: false, reason: 'quota_exhausted' }
    }

    try {
      console.log('🔍 Checking cache for:', prompt)
      
      const normalized = this.normalizePrompt(prompt)
      const keywords = this.extractKeywords(prompt)
      
      // Try exact match first
      const exactQuery = query(
        collection(db, this.collectionName),
        where('normalizedPrompt', '==', normalized),
        limit(1)
      )
      
      const exactSnapshot = await getDocs(exactQuery)
      
      if (!exactSnapshot.empty) {
        const cacheDoc = exactSnapshot.docs[0]
        const cacheData = cacheDoc.data()
        
        console.log('✅ Cache HIT (exact match)!')
        console.log(`📊 Usage count: ${cacheData.usageCount || 0}`)
        
        // Update usage stats
        await this.updateUsageStats(cacheDoc.id)
        
        return {
          found: true,
          similarity: 1.0,
          response: cacheData.response,
          metadata: {
            usageCount: cacheData.usageCount || 0,
            lastUsed: cacheData.lastUsed,
            appType: cacheData.appType
          }
        }
      }
      
      // Try semantic match
      console.log('🔍 No exact match, trying semantic match...')
      
      const semanticQuery = query(
        collection(db, this.collectionName),
        orderBy('usageCount', 'desc'),
        limit(50) // Check top 50 popular prompts
      )
      
      const semanticSnapshot = await getDocs(semanticQuery)
      
      let bestMatch = null
      let bestSimilarity = 0
      
      semanticSnapshot.docs.forEach(doc => {
        const cacheData = doc.data()
        const similarity = this.calculateSimilarity(prompt, cacheData.prompt)
        
        if (similarity > bestSimilarity && similarity >= this.similarityThreshold) {
          bestSimilarity = similarity
          bestMatch = { id: doc.id, data: cacheData }
        }
      })
      
      if (bestMatch) {
        console.log(`✅ Cache HIT (semantic match: ${(bestSimilarity * 100).toFixed(0)}%)`)
        console.log(`📝 Matched prompt: "${bestMatch.data.prompt}"`)
        
        // Update usage stats
        await this.updateUsageStats(bestMatch.id)
        
        return {
          found: true,
          similarity: bestSimilarity,
          response: bestMatch.data.response,
          metadata: {
            originalPrompt: bestMatch.data.prompt,
            usageCount: bestMatch.data.usageCount || 0,
            lastUsed: bestMatch.data.lastUsed,
            appType: bestMatch.data.appType
          }
        }
      }
      
      console.log('❌ Cache MISS - no match found')
      return { found: false }
      
    } catch (error) {
      console.error('❌ Cache check error:', error)
      
      // Check if it's a quota exhaustion error
      if (error.code === 'resource-exhausted' || error.message.includes('quota') || error.message.includes('Quota exceeded')) {
        this.handleQuotaExhaustion()
        return { found: false, reason: 'quota_exhausted' }
      }
      
      return { found: false, error: error.message }
    }
  }

  /**
   * Save prompt-response to cache
   */
  async saveToCache(prompt, response, metadata = {}) {
    // Check if service is disabled due to quota exhaustion
    if (this.isServiceDisabled()) {
      console.log('⚠️ Cache disabled due to quota exhaustion - skipping cache save')
      return { saved: false, reason: 'quota_exhausted' }
    }

    try {
      console.log('💾 Saving to cache:', prompt)
      
      const normalized = this.normalizePrompt(prompt)
      const keywords = this.extractKeywords(prompt)
      
      // Check if already exists
      const existingQuery = query(
        collection(db, this.collectionName),
        where('normalizedPrompt', '==', normalized),
        limit(1)
      )
      
      const existingSnapshot = await getDocs(existingQuery)
      
      if (!existingSnapshot.empty) {
        console.log('ℹ️ Prompt already cached, updating usage count')
        await this.updateUsageStats(existingSnapshot.docs[0].id)
        return { saved: true, updated: true }
      }
      
      // Create new cache entry
      const cacheEntry = {
        prompt: prompt.trim(),
        normalizedPrompt: normalized,
        keywords: keywords,
        response: response,
        appType: metadata.appType || 'unknown',
        features: metadata.features || [],
        usageCount: 1,
        successRate: 100,
        createdAt: Timestamp.now(),
        lastUsed: Timestamp.now(),
        size: JSON.stringify(response).length
      }
      
      const docRef = await addDoc(collection(db, this.collectionName), cacheEntry)
      
      console.log('✅ Saved to cache successfully!')
      console.log(`📊 Cache ID: ${docRef.id}`)
      console.log(`📦 Size: ${(cacheEntry.size / 1024).toFixed(2)} KB`)
      
      // Check if we need cleanup
      await this.checkCacheSize()
      
      return { saved: true, id: docRef.id }
      
    } catch (error) {
      console.error('❌ Error saving to cache:', error)
      
      // Check if it's a quota exhaustion error
      if (error.code === 'resource-exhausted' || error.message.includes('quota') || error.message.includes('Quota exceeded')) {
        this.handleQuotaExhaustion()
        return { saved: false, reason: 'quota_exhausted' }
      }
      
      return { saved: false, error: error.message }
    }
  }

  /**
   * Update usage statistics
   */
  async updateUsageStats(cacheId) {
    try {
      const cacheRef = doc(db, this.collectionName, cacheId)
      
      await updateDoc(cacheRef, {
        usageCount: (await getDocs(query(collection(db, this.collectionName), where('__name__', '==', cacheId)))).docs[0].data().usageCount + 1 || 1,
        lastUsed: Timestamp.now()
      })
      
      console.log('📊 Usage stats updated')
      
    } catch (error) {
      console.error('❌ Error updating stats:', error)
    }
  }

  /**
   * Check cache size and cleanup if needed
   */
  async checkCacheSize() {
    try {
      const cacheQuery = query(collection(db, this.collectionName))
      const snapshot = await getDocs(cacheQuery)
      
      const currentSize = snapshot.size
      console.log(`📦 Current cache size: ${currentSize.toLocaleString()} / ${this.maxCacheSize.toLocaleString()}`)
      
      if (currentSize > this.maxCacheSize) {
        console.log('⚠️ Cache size exceeded, cleaning up...')
        await this.cleanupCache()
      }
      
    } catch (error) {
      console.error('❌ Error checking cache size:', error)
    }
  }

  /**
   * Cleanup old/unused cache entries
   */
  async cleanupCache() {
    try {
      console.log('🧹 Starting cache cleanup...')
      
      // Delete entries with usageCount < 2 and older than 30 days
      const thirtyDaysAgo = new Date()
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)
      
      const cleanupQuery = query(
        collection(db, this.collectionName),
        where('usageCount', '<', 2),
        where('createdAt', '<', Timestamp.fromDate(thirtyDaysAgo))
      )
      
      const snapshot = await getDocs(cleanupQuery)
      
      console.log(`🗑️ Removing ${snapshot.size} old/unused entries...`)
      
      // Note: Batch delete would be better for production
      for (const docSnapshot of snapshot.docs) {
        await docSnapshot.ref.delete()
      }
      
      console.log('✅ Cache cleanup complete!')
      
    } catch (error) {
      console.error('❌ Error during cleanup:', error)
    }
  }

  /**
   * Get cache statistics
   */
  async getStats() {
    try {
      const snapshot = await getDocs(collection(db, this.collectionName))
      
      let totalSize = 0
      let totalUsage = 0
      const appTypes = {}
      
      snapshot.docs.forEach(doc => {
        const data = doc.data()
        totalSize += data.size || 0
        totalUsage += data.usageCount || 0
        appTypes[data.appType] = (appTypes[data.appType] || 0) + 1
      })
      
      const stats = {
        totalPrompts: snapshot.size,
        totalSizeKB: (totalSize / 1024).toFixed(2),
        totalSizeMB: (totalSize / 1024 / 1024).toFixed(2),
        totalUsage: totalUsage,
        averageUsage: (totalUsage / snapshot.size).toFixed(2),
        appTypes: appTypes,
        capacity: this.maxCacheSize,
        percentFull: ((snapshot.size / this.maxCacheSize) * 100).toFixed(2)
      }
      
      console.log('📊 Cache Statistics:', stats)
      
      return stats
      
    } catch (error) {
      console.error('❌ Error getting stats:', error)
      return null
    }
  }
}

// Create singleton instance
const promptCacheService = new PromptCacheService()

export default promptCacheService

