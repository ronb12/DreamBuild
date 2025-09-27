// DreamBuild Web Browsing Interface
// ChatGPT-like web browsing component for real-time web access

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Globe, 
  Search, 
  ExternalLink, 
  History, 
  RefreshCw, 
  X, 
  ChevronDown,
  ChevronUp,
  Clock,
  BookOpen,
  Newspaper,
  Link,
  Copy,
  Share,
  Download,
  Eye,
  EyeOff,
  Settings,
  Zap,
  AlertCircle,
  CheckCircle,
  Loader2
} from 'lucide-react'
import realTimeWebBrowsingService from '../services/realTimeWebBrowsingService'

const WebBrowsingInterface = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('browse')
  const [url, setUrl] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [newsTopic, setNewsTopic] = useState('')
  const [browsingResults, setBrowsingResults] = useState(null)
  const [searchResults, setSearchResults] = useState(null)
  const [newsResults, setNewsResults] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [browsingHistory, setBrowsingHistory] = useState([])
  const [showHistory, setShowHistory] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [browsingEnabled, setBrowsingEnabled] = useState(true)

  const urlInputRef = useRef(null)
  const searchInputRef = useRef(null)
  const newsInputRef = useRef(null)

  useEffect(() => {
    // Load browsing history on mount
    loadBrowsingHistory()
  }, [])

  const loadBrowsingHistory = () => {
    const history = realTimeWebBrowsingService.getBrowsingHistory()
    setBrowsingHistory(history)
  }

  const handleBrowseURL = async () => {
    if (!url.trim()) return

    setIsLoading(true)
    setError(null)

    try {
      const result = await realTimeWebBrowsingService.browseURL(url)
      
      if (result.success) {
        setBrowsingResults(result)
        loadBrowsingHistory()
      } else {
        setError(result.reason || 'Failed to browse URL')
      }
    } catch (error) {
      setError('Browsing failed: ' + error.message)
    } finally {
      setIsLoading(false)
    }
  }

  const handleWebSearch = async () => {
    if (!searchQuery.trim()) return

    setIsLoading(true)
    setError(null)

    try {
      const result = await realTimeWebBrowsingService.searchWeb(searchQuery)
      
      if (result.success) {
        setSearchResults(result)
        loadBrowsingHistory()
      } else {
        setError(result.reason || 'Search failed')
      }
    } catch (error) {
      setError('Search failed: ' + error.message)
    } finally {
      setIsLoading(false)
    }
  }

  const handleGetNews = async () => {
    setIsLoading(true)
    setError(null)

    try {
      const result = await realTimeWebBrowsingService.getCurrentNews(newsTopic || null)
      
      if (result.success) {
        setNewsResults(result)
        loadBrowsingHistory()
      } else {
        setError(result.reason || 'News access failed')
      }
    } catch (error) {
      setError('News access failed: ' + error.message)
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e, action) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      if (action === 'browse') handleBrowseURL()
      if (action === 'search') handleWebSearch()
      if (action === 'news') handleGetNews()
    }
  }

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
  }

  const openExternalLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const clearResults = () => {
    setBrowsingResults(null)
    setSearchResults(null)
    setNewsResults(null)
    setError(null)
  }

  const toggleBrowsing = () => {
    const newState = !browsingEnabled
    setBrowsingEnabled(newState)
    realTimeWebBrowsingService.setEnabled(newState)
  }

  const tabs = [
    { id: 'browse', label: 'Browse Web', icon: Globe, description: 'Browse any website like ChatGPT' },
    { id: 'search', label: 'Search Web', icon: Search, description: 'Search the web with live results' },
    { id: 'news', label: 'Current News', icon: Newspaper, description: 'Get latest news and events' }
  ]

  return (
    <>
      {/* Web Browsing Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
        data-testid="browse-web-button"
      >
        <Globe className="w-4 h-4" />
        <span>Browse Web</span>
        <Zap className="w-3 h-3" />
      </button>

      {/* Web Browsing Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-card border border-border rounded-xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-foreground">Web Browsing</h2>
                    <p className="text-sm text-muted-foreground">Browse the web like ChatGPT</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={toggleBrowsing}
                    className={`flex items-center gap-1 px-3 py-1 rounded-lg text-xs transition-colors ${
                      browsingEnabled 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {browsingEnabled ? <CheckCircle className="w-3 h-3" /> : <AlertCircle className="w-3 h-3" />}
                    {browsingEnabled ? 'Enabled' : 'Disabled'}
                  </button>
                  <button
                    onClick={() => setShowHistory(!showHistory)}
                    className="p-2 hover:bg-muted rounded-lg transition-colors"
                    title="Browsing History"
                  >
                    <History className="w-4 h-4 text-muted-foreground" />
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-muted rounded-lg transition-colors"
                  >
                    <X className="w-4 h-4 text-muted-foreground" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-hidden">
                <div className="h-full flex flex-col">
                  {/* Tab Navigation */}
                  <div className="flex border-b border-border">
                    {tabs.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center gap-2 px-6 py-4 text-sm font-medium transition-colors ${
                          activeTab === tab.id
                            ? 'text-primary border-b-2 border-primary bg-primary/5'
                            : 'text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        <tab.icon className="w-4 h-4" />
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  {/* Tab Content */}
                  <div className="flex-1 overflow-y-auto p-6">
                    {/* Browse Web Tab */}
                    {activeTab === 'browse' && (
                      <div className="space-y-6">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Enter URL to Browse
                          </label>
                          <div className="flex gap-2">
                            <input
                              ref={urlInputRef}
                              type="url"
                              value={url}
                              onChange={(e) => setUrl(e.target.value)}
                              onKeyPress={(e) => handleKeyPress(e, 'browse')}
                              placeholder="https://example.com or example.com"
                              className="flex-1 px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                              disabled={!browsingEnabled}
                            />
                            <button
                              onClick={handleBrowseURL}
                              disabled={!browsingEnabled || isLoading}
                              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                              {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Globe className="w-4 h-4" />}
                            </button>
                          </div>
                        </div>

                        {/* Browse Results */}
                        {browsingResults && (
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <h3 className="text-lg font-semibold text-foreground">Browse Results</h3>
                              <button
                                onClick={clearResults}
                                className="text-sm text-muted-foreground hover:text-foreground"
                              >
                                Clear Results
                              </button>
                            </div>
                            
                            <div className="bg-muted/50 rounded-lg p-4 space-y-4">
                              <div>
                                <h4 className="font-medium text-foreground">{browsingResults.content?.title}</h4>
                                <p className="text-sm text-muted-foreground">{browsingResults.content?.description}</p>
                                <div className="flex items-center gap-2 mt-2">
                                  <Link className="w-3 h-3 text-muted-foreground" />
                                  <span className="text-xs text-muted-foreground">{browsingResults.session?.url}</span>
                                  <button
                                    onClick={() => openExternalLink(browsingResults.session?.url)}
                                    className="p-1 hover:bg-muted rounded transition-colors"
                                  >
                                    <ExternalLink className="w-3 h-3 text-muted-foreground" />
                                  </button>
                                </div>
                              </div>
                              
                              <div className="prose prose-sm max-w-none">
                                <p className="text-foreground whitespace-pre-wrap">
                                  {browsingResults.content?.content}
                                </p>
                              </div>
                              
                              {browsingResults.content?.keyPoints && (
                                <div>
                                  <h5 className="font-medium text-foreground mb-2">Key Points:</h5>
                                  <ul className="space-y-1">
                                    {browsingResults.content.keyPoints.map((point, index) => (
                                      <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                                        {point}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Search Web Tab */}
                    {activeTab === 'search' && (
                      <div className="space-y-6">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Search the Web
                          </label>
                          <div className="flex gap-2">
                            <input
                              ref={searchInputRef}
                              type="text"
                              value={searchQuery}
                              onChange={(e) => setSearchQuery(e.target.value)}
                              onKeyPress={(e) => handleKeyPress(e, 'search')}
                              placeholder="Search for anything..."
                              className="flex-1 px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                              disabled={!browsingEnabled}
                            />
                            <button
                              onClick={handleWebSearch}
                              disabled={!browsingEnabled || isLoading}
                              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                              {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
                            </button>
                          </div>
                        </div>

                        {/* Search Results */}
                        {searchResults && (
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <h3 className="text-lg font-semibold text-foreground">Search Results</h3>
                              <button
                                onClick={clearResults}
                                className="text-sm text-muted-foreground hover:text-foreground"
                              >
                                Clear Results
                              </button>
                            </div>
                            
                            <div className="space-y-3">
                              {searchResults.results?.items?.map((result, index) => (
                                <div key={index} className="bg-muted/50 rounded-lg p-4 space-y-2">
                                  <div className="flex items-start justify-between">
                                    <h4 className="font-medium text-foreground hover:text-primary cursor-pointer">
                                      {result.title}
                                    </h4>
                                    <button
                                      onClick={() => openExternalLink(result.url)}
                                      className="p-1 hover:bg-muted rounded transition-colors"
                                    >
                                      <ExternalLink className="w-3 h-3 text-muted-foreground" />
                                    </button>
                                  </div>
                                  <p className="text-sm text-muted-foreground">{result.snippet}</p>
                                  <div className="flex items-center gap-2">
                                    <Link className="w-3 h-3 text-muted-foreground" />
                                    <span className="text-xs text-muted-foreground">{result.url}</span>
                                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                                      {Math.round(result.relevance * 100)}% relevant
                                    </span>
                                  </div>
                                </div>
                              ))}
                            </div>
                            
                            {searchResults.results?.relatedQueries && (
                              <div>
                                <h5 className="font-medium text-foreground mb-2">Related Queries:</h5>
                                <div className="flex flex-wrap gap-2">
                                  {searchResults.results.relatedQueries.map((query, index) => (
                                    <button
                                      key={index}
                                      onClick={() => {
                                        setSearchQuery(query)
                                        handleWebSearch()
                                      }}
                                      className="px-3 py-1 bg-muted text-muted-foreground rounded-lg hover:bg-muted/80 transition-colors text-sm"
                                    >
                                      {query}
                                    </button>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Current News Tab */}
                    {activeTab === 'news' && (
                      <div className="space-y-6">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Get Current News
                          </label>
                          <div className="flex gap-2">
                            <input
                              ref={newsInputRef}
                              type="text"
                              value={newsTopic}
                              onChange={(e) => setNewsTopic(e.target.value)}
                              onKeyPress={(e) => handleKeyPress(e, 'news')}
                              placeholder="Enter topic (optional) or leave blank for general news"
                              className="flex-1 px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                              disabled={!browsingEnabled}
                            />
                            <button
                              onClick={handleGetNews}
                              disabled={!browsingEnabled || isLoading}
                              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                              {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Newspaper className="w-4 h-4" />}
                            </button>
                          </div>
                        </div>

                        {/* News Results */}
                        {newsResults && (
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <h3 className="text-lg font-semibold text-foreground">Current News</h3>
                              <button
                                onClick={clearResults}
                                className="text-sm text-muted-foreground hover:text-foreground"
                              >
                                Clear Results
                              </button>
                            </div>
                            
                            <div className="space-y-3">
                              {newsResults.articles?.map((article, index) => (
                                <div key={index} className="bg-muted/50 rounded-lg p-4 space-y-2">
                                  <div className="flex items-start justify-between">
                                    <h4 className="font-medium text-foreground hover:text-primary cursor-pointer">
                                      {article.title}
                                    </h4>
                                    <button
                                      onClick={() => openExternalLink(article.url)}
                                      className="p-1 hover:bg-muted rounded transition-colors"
                                    >
                                      <ExternalLink className="w-3 h-3 text-muted-foreground" />
                                    </button>
                                  </div>
                                  <p className="text-sm text-muted-foreground">{article.summary}</p>
                                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                    <span className="flex items-center gap-1">
                                      <Clock className="w-3 h-3" />
                                      {article.publishedAt}
                                    </span>
                                    <span className="flex items-center gap-1">
                                      <BookOpen className="w-3 h-3" />
                                      {article.source}
                                    </span>
                                    <span className="bg-primary/10 text-primary px-2 py-1 rounded">
                                      {article.category}
                                    </span>
                                  </div>
                                </div>
                              ))}
                            </div>
                            
                            {newsResults.keyEvents && (
                              <div>
                                <h5 className="font-medium text-foreground mb-2">Key Events:</h5>
                                <ul className="space-y-1">
                                  {newsResults.keyEvents.map((event, index) => (
                                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                                      {event}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Error Display */}
              {error && (
                <div className="p-4 bg-red-50 border-t border-red-200">
                  <div className="flex items-center gap-2 text-red-700">
                    <AlertCircle className="w-4 h-4" />
                    <span className="text-sm">{error}</span>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default WebBrowsingInterface
