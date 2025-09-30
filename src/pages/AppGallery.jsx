import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Search, 
  Filter, 
  Grid, 
  List, 
  Eye, 
  Heart, 
  Share2, 
  ExternalLink,
  Calendar,
  User,
  Tag,
  TrendingUp,
  Star,
  RefreshCw
} from 'lucide-react'
import firebaseService from '../services/firebaseService'
import toast from 'react-hot-toast'
import { collection, onSnapshot, query, where, orderBy } from 'firebase/firestore'
import { db } from '../config/firebase'

const AppGallery = () => {
  const [apps, setApps] = useState([])
  const [filteredApps, setFilteredApps] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [viewMode, setViewMode] = useState('grid') // 'grid' or 'list'
  const [sortBy, setSortBy] = useState('newest') // 'newest', 'popular', 'trending'
  const [stats, setStats] = useState(null)
  const [isRefreshing, setIsRefreshing] = useState(false)

  useEffect(() => {
    // Always load apps first
    loadApps()
    loadStats()
    
    // Try to set up real-time listener
    let unsubscribe = null
    try {
      unsubscribe = setupRealtimeListener()
    } catch (error) {
      console.error('❌ Failed to setup real-time listener:', error)
    }
    
    // Listen for custom app deployment events
    const handleAppDeployed = (event) => {
      console.log('📡 App deployment event received:', event.detail)
      toast.success(`New app "${event.detail.appName}" added to gallery!`, {
        duration: 4000,
        icon: '🚀'
      })
      // Refresh apps immediately with refreshing state
      loadApps(true)
    }
    
    window.addEventListener('appDeployed', handleAppDeployed)
    
    // Cleanup listeners on unmount
    return () => {
      if (unsubscribe) {
        unsubscribe()
      }
      window.removeEventListener('appDeployed', handleAppDeployed)
    }
  }, [])

  // Set up real-time listener for new apps
  const setupRealtimeListener = () => {
    try {
      console.log('🔄 Setting up real-time listener for apps...')
      const q = query(
        collection(db, 'apps'),
        where('isPublic', '==', true),
        orderBy('createdAt', 'desc')
      )
      
      const unsubscribe = onSnapshot(q, (snapshot) => {
        console.log('📡 Real-time update received:', snapshot.docs.length, 'apps')
        const newApps = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        setApps(newApps)
        
        // Show notification for new apps
        if (newApps.length > 0) {
          const latestApp = newApps[0]
          const now = new Date()
          const appTime = latestApp.createdAt?.toDate?.() || new Date(latestApp.createdAt)
          const timeDiff = now - appTime
          
          // If app was created within the last 30 seconds, show notification
          if (timeDiff < 30000) {
            toast.success(`New app "${latestApp.name}" added to gallery!`, {
              duration: 4000,
              icon: '🚀'
            })
          }
        }
      }, (error) => {
        console.error('❌ Real-time listener error:', error)
        console.log('🔄 Falling back to manual refresh due to permissions error')
        // Don't call loadApps() here to avoid infinite loop
        // Just show a message that real-time updates are disabled
        toast.error('Real-time updates disabled - use refresh button', {
          duration: 3000
        })
      })
      
      // Store unsubscribe function for cleanup
      return unsubscribe
    } catch (error) {
      console.error('❌ Error setting up real-time listener:', error)
      console.log('🔄 Real-time listener setup failed, using manual refresh only')
      return null
    }
  }

  useEffect(() => {
    filterApps()
  }, [apps, searchTerm, sortBy])

  const loadApps = async (showRefreshing = false) => {
    try {
      if (showRefreshing) {
        setIsRefreshing(true)
      } else {
        setIsLoading(true)
      }
      console.log('🔄 Loading apps from Firebase...')
      const publicApps = await firebaseService.getPublicApps(50)
      console.log('✅ Loaded apps:', publicApps.length)
      console.log('✅ Apps data:', publicApps)
      setApps(publicApps)
      
      // Add debug info to page
      if (publicApps.length === 0) {
        console.log('⚠️ No public apps found in Firebase')
        const debugDiv = document.createElement('div')
        debugDiv.className = 'fixed top-20 left-4 bg-yellow-500 text-white px-4 py-2 rounded shadow-lg z-10'
        debugDiv.textContent = 'No apps found in Firebase'
        debugDiv.id = 'no-apps-debug'
        document.body.appendChild(debugDiv)
        
        setTimeout(() => {
          const existing = document.getElementById('no-apps-debug')
          if (existing) existing.remove()
        }, 5000)
      }
    } catch (error) {
      console.error('❌ Error loading apps:', error)
      toast.error('Failed to load apps')
      // Set empty array as fallback
      setApps([])
    } finally {
      setIsLoading(false)
      setIsRefreshing(false)
    }
  }

  const loadStats = async () => {
    try {
      console.log('🔄 Loading app stats from Firebase...')
      const appStats = await firebaseService.getAppStats()
      console.log('✅ Loaded stats:', appStats)
      setStats(appStats)
    } catch (error) {
      console.error('❌ Error loading stats:', error)
      // Set default stats as fallback
      setStats({
        totalApps: 0,
        publicApps: 0,
        totalViews: 0,
        totalLikes: 0
      })
    }
  }

  const filterApps = () => {
    let filtered = [...apps]

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(app => 
        app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }

    // Sort filter
    switch (sortBy) {
      case 'newest':
        filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        break
      case 'popular':
        filtered.sort((a, b) => (b.views || 0) - (a.views || 0))
        break
      case 'trending':
        filtered.sort((a, b) => (b.likes || 0) - (a.likes || 0))
        break
    }

    setFilteredApps(filtered)
  }

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleSortChange = (e) => {
    setSortBy(e.target.value)
  }

  const handleViewMode = (mode) => {
    setViewMode(mode)
  }

  const handleShare = (app) => {
    if (navigator.share) {
      navigator.share({
        title: app.name,
        url: app.url
      })
    } else {
      navigator.clipboard.writeText(app.url)
      toast.success('URL copied to clipboard!')
    }
  }

  const handleLike = async (app) => {
    try {
      await firebaseService.toggleLike(app.id, 'anonymous')
      toast.success('Liked!')
      loadApps() // Refresh apps
    } catch (error) {
      toast.error('Failed to like app')
    }
  }

  const formatDate = (date) => {
    if (!date) return 'Unknown date'
    
    try {
      let dateObj
      
      // Handle Firestore timestamp objects
      if (date && typeof date === 'object' && date.toDate) {
        dateObj = date.toDate()
      } else if (date && typeof date === 'object' && date.seconds) {
        // Handle Firestore timestamp with seconds
        dateObj = new Date(date.seconds * 1000)
      } else {
        dateObj = new Date(date)
      }
      
      if (isNaN(dateObj.getTime())) {
        return 'Unknown date'
      }
      
      return dateObj.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
    } catch (error) {
      console.error('Date formatting error:', error)
      return 'Unknown date'
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-800">Loading DreamBuild Apps...</h2>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                 <div className="text-center">
                   <h1 className="text-3xl font-bold text-gray-900">DreamBuild App Gallery</h1>
                   <p className="text-gray-600 mt-2">Discover amazing apps created with DreamBuild AI</p>
                   <button
                     onClick={() => loadApps(true)}
                     disabled={isRefreshing}
                     className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50 flex items-center gap-2"
                   >
                     {isRefreshing ? (
                       <>
                         <RefreshCw className="h-4 w-4 animate-spin" />
                         Refreshing...
                       </>
                     ) : (
                       <>
                         <RefreshCw className="h-4 w-4" />
                         Refresh Apps
                       </>
                     )}
                   </button>
                 </div>
        </div>
      </div>

      {/* Stats Bar */}
      {stats && (
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-lg font-semibold text-gray-900">{stats.publicApps}</div>
                <div className="text-sm text-gray-500">Public Apps</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-gray-900">{stats.totalViews}</div>
                <div className="text-sm text-gray-500">Total Views</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-gray-900">{stats.totalLikes}</div>
                <div className="text-sm text-gray-500">Total Likes</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-gray-900">{filteredApps.length}</div>
                <div className="text-sm text-gray-500">Filtered Results</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Controls */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-center lg:justify-between">
            {/* Enhanced Search - Centered */}
            <div className="relative w-full max-w-md mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search amazing apps..."
                  value={searchTerm}
                  onChange={handleSearch}
                  className="w-full pl-4 pr-12 py-3 bg-white border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 focus:outline-none transition-all duration-200 shadow-sm hover:shadow-md focus:shadow-lg"
                />
                <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute right-10 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
              {searchTerm && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
                  <div className="p-3 text-sm text-gray-600">
                    <span className="font-medium">{filteredApps.length}</span> app{filteredApps.length !== 1 ? 's' : ''} found for "<span className="font-medium text-blue-600">{searchTerm}</span>"
                  </div>
                </div>
              )}
            </div>

            {/* Enhanced Sort & View Controls */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={handleSortChange}
                  className="appearance-none px-4 py-3 pr-8 bg-white border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 focus:outline-none transition-all duration-200 shadow-sm hover:shadow-md focus:shadow-lg cursor-pointer"
                >
                  <option value="newest">🆕 Newest</option>
                  <option value="popular">🔥 Most Popular</option>
                  <option value="trending">📈 Trending</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              <div className="flex items-center gap-1 bg-gray-100 rounded-xl p-1">
                <button
                  onClick={() => handleViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    viewMode === 'grid' 
                      ? 'bg-blue-500 text-white shadow-md' 
                      : 'text-gray-600 hover:bg-white hover:shadow-sm'
                  }`}
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => handleViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    viewMode === 'list' 
                      ? 'bg-blue-500 text-white shadow-md' 
                      : 'text-gray-600 hover:bg-white hover:shadow-sm'
                  }`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Apps Grid/List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {filteredApps.length === 0 ? (
          <div className="text-center py-12">
            {apps.length === 0 ? (
              <>
                <div className="text-6xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No apps yet</h3>
                <p className="text-gray-600 mb-4">Be the first to create an amazing app with DreamBuild AI!</p>
                <a 
                  href="/ai-builder" 
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <span>Create Your First App</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </>
            ) : (
              <>
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No apps found</h3>
                <p className="text-gray-600">Try adjusting your search or filters</p>
              </>
            )}
          </div>
        ) : (
          <div className={viewMode === 'grid' 
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' 
            : 'space-y-4'
          }>
            {filteredApps.map((app) => (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow ${
                  viewMode === 'list' ? 'flex' : ''
                }`}
              >
                {viewMode === 'grid' ? (
                  // Grid View
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-900 truncate">{app.name}</h3>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleLike(app)}
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <Heart className="h-4 w-4 text-gray-400" />
                        </button>
                        <button
                          onClick={() => handleShare(app)}
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <Share2 className="h-4 w-4 text-gray-400" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="w-full h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-2xl mb-2">🚀</div>
                          <div className="text-sm text-gray-600">DreamBuild App</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          <span>{app.views || 0}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="h-4 w-4" />
                          <span>{app.likes || 0}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{formatDate(app.createdAt)}</span>
                      </div>
                    </div>

                    {app.tags && app.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {app.tags.slice(0, 3).map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <a
                      href={app.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      View App
                    </a>
                  </div>
                ) : (
                  // List View
                  <div className="p-6 flex-1">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900">{app.name}</h3>
                        <p className="text-gray-600 text-sm mt-1">Created {formatDate(app.createdAt)}</p>
                        <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Eye className="h-4 w-4" />
                            <span>{app.views || 0} views</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Heart className="h-4 w-4" />
                            <span>{app.likes || 0} likes</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleLike(app)}
                          className="p-2 hover:bg-gray-100 rounded"
                        >
                          <Heart className="h-4 w-4 text-gray-400" />
                        </button>
                        <button
                          onClick={() => handleShare(app)}
                          className="p-2 hover:bg-gray-100 rounded"
                        >
                          <Share2 className="h-4 w-4 text-gray-400" />
                        </button>
                        <a
                          href={app.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                        >
                          <ExternalLink className="h-4 w-4" />
                          View
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default AppGallery
