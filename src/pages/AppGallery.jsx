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
  Star
} from 'lucide-react'
import firebaseAppService from '../services/firebaseAppService'
import toast from 'react-hot-toast'

const AppGallery = () => {
  const [apps, setApps] = useState([])
  const [filteredApps, setFilteredApps] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [viewMode, setViewMode] = useState('grid') // 'grid' or 'list'
  const [sortBy, setSortBy] = useState('newest') // 'newest', 'popular', 'trending'
  const [stats, setStats] = useState(null)

  useEffect(() => {
    loadApps()
    loadStats()
  }, [])

  useEffect(() => {
    filterApps()
  }, [apps, searchTerm, sortBy])

  const loadApps = async () => {
    try {
      setIsLoading(true)
      const publicApps = await firebaseAppService.getPublicApps(50)
      setApps(publicApps)
    } catch (error) {
      console.error('Error loading apps:', error)
      toast.error('Failed to load apps')
    } finally {
      setIsLoading(false)
    }
  }

  const loadStats = async () => {
    try {
      const appStats = await firebaseAppService.getAppStats()
      setStats(appStats)
    } catch (error) {
      console.error('Error loading stats:', error)
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
      await firebaseAppService.toggleLike(app.id, 'anonymous')
      toast.success('Liked!')
      loadApps() // Refresh apps
    } catch (error) {
      toast.error('Failed to like app')
    }
  }

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
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
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">DreamBuild App Gallery</h1>
              <p className="text-gray-600 mt-2">Discover amazing apps created with DreamBuild AI</p>
            </div>
            {stats && (
              <div className="text-right">
                <div className="text-2xl font-bold text-blue-600">{stats.totalApps}</div>
                <div className="text-sm text-gray-500">Total Apps</div>
              </div>
            )}
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
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search apps..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Sort & View Controls */}
            <div className="flex items-center gap-4">
              <select
                value={sortBy}
                onChange={handleSortChange}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="newest">Newest</option>
                <option value="popular">Most Popular</option>
                <option value="trending">Trending</option>
              </select>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'}`}
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => handleViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'}`}
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
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No apps found</h3>
            <p className="text-gray-600">Try adjusting your search or filters</p>
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
