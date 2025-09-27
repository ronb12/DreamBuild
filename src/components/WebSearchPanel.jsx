import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Search, 
  Globe, 
  Lightbulb, 
  Code, 
  CheckCircle, 
  ExternalLink,
  XCircle,
  Clock,
  TrendingUp,
  Copy,
  BookOpen,
  Zap,
  Shield,
  Eye
} from 'lucide-react'
import webSearchService from '../services/webSearchService'

const WebSearchPanel = ({ isOpen, onClose, searchResults, prompt }) => {
  const [searchHistory, setSearchHistory] = useState([])
  const [isSearching, setIsSearching] = useState(false)

  useEffect(() => {
    if (isOpen) {
      loadSearchHistory()
    }
  }, [isOpen])

  const loadSearchHistory = () => {
    const history = webSearchService.getSearchHistory()
    setSearchHistory(history)
  }

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    // You could add a toast notification here
  }

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'performance': return <Zap className="h-4 w-4" />
      case 'security': return <Shield className="h-4 w-4" />
      case 'accessibility': return <Eye className="h-4 w-4" />
      default: return <Code className="h-4 w-4" />
    }
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 300 }}
        className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-xl z-10 max-h-[70vh] flex flex-col"
      >
        {/* Header */}
        <div className="p-4 border-b border-gray-200 bg-gray-50">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <Globe className="h-5 w-5 text-blue-500" />
              Web Knowledge Search
            </h3>
            <button
              onClick={onClose}
              className="p-1 hover:bg-gray-200 rounded-md transition-colors"
            >
              <XCircle className="h-5 w-5 text-gray-500" />
            </button>
          </div>
          
          {prompt && (
            <p className="text-sm text-gray-600 mt-2">
              <strong>Searching for:</strong> {prompt}
            </p>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4">
          {isSearching ? (
            <div className="flex items-center justify-center h-32">
              <div className="flex items-center gap-3">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"></div>
                <span className="text-gray-600">Searching web for current best practices...</span>
              </div>
            </div>
          ) : searchResults ? (
            <div className="space-y-6">
              {/* Search Summary */}
              {searchResults.success && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-medium text-blue-900 mb-2 flex items-center gap-2">
                    <Search className="h-4 w-4" />
                    Search Results Summary
                  </h4>
                  <p className="text-blue-800 text-sm mb-2">{searchResults.knowledge.summary}</p>
                  <div className="text-xs text-blue-600">
                    Found {searchResults.resultsCount} relevant sources • 
                    Generated {searchResults.searchQueries.length} search queries
                  </div>
                </div>
              )}

              {/* Best Practices */}
              {searchResults.knowledge?.bestPractices && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-medium text-green-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    Current Best Practices Applied
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {searchResults.knowledge.bestPractices.slice(0, 8).map((practice, index) => (
                      <div key={index} className="flex items-start gap-2 text-sm text-green-800">
                        <CheckCircle className="h-3 w-3 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{practice}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Code Examples */}
              {searchResults.knowledge?.codeExamples && Object.keys(searchResults.knowledge.codeExamples).length > 0 && (
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
                    <Code className="h-4 w-4" />
                    Code Examples & Patterns
                  </h4>
                  <div className="space-y-3">
                    {Object.entries(searchResults.knowledge.codeExamples).map(([type, example]) => (
                      <div key={type} className="bg-white border border-gray-200 rounded p-3">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-700 capitalize">
                            {type.replace(/([A-Z])/g, ' $1').trim()}
                          </span>
                          <button
                            onClick={() => copyToClipboard(example)}
                            className="p-1 hover:bg-gray-100 rounded transition-colors"
                            title="Copy code"
                          >
                            <Copy className="h-3 w-3 text-gray-500" />
                          </button>
                        </div>
                        <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">
                          <code>{example}</code>
                        </pre>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Recommendations */}
              {searchResults.knowledge?.recommendations && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h4 className="font-medium text-yellow-900 mb-3 flex items-center gap-2">
                    <Lightbulb className="h-4 w-4" />
                    AI Recommendations
                  </h4>
                  <div className="space-y-2">
                    {searchResults.knowledge.recommendations.map((recommendation, index) => (
                      <div key={index} className="flex items-start gap-2 text-sm text-yellow-800">
                        <TrendingUp className="h-3 w-3 text-yellow-600 mt-0.5 flex-shrink-0" />
                        <span>{recommendation}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Web Resources */}
              {searchResults.knowledge?.resources && (
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h4 className="font-medium text-purple-900 mb-3 flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    Knowledge Sources
                  </h4>
                  <div className="space-y-2">
                    {searchResults.knowledge.resources.slice(0, 5).map((resource, index) => (
                      <div key={index} className="flex items-start gap-2 text-sm">
                        <ExternalLink className="h-3 w-3 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-medium text-purple-900">{resource.title}</div>
                          <div className="text-purple-700">{resource.snippet}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Search Queries Used */}
              {searchResults.searchQueries && (
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
                    <Search className="h-4 w-4" />
                    Search Queries Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {searchResults.searchQueries.map((query, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                        {query}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              <Globe className="h-12 w-12 mx-auto mb-3 text-gray-400" />
              <p>No web search results available</p>
              <p className="text-sm">Web knowledge search will enhance your generated code with current best practices.</p>
            </div>
          )}

          {/* Search History */}
          {searchHistory.length > 0 && (
            <div className="mt-6 pt-4 border-t border-gray-200">
              <h4 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Recent Searches
              </h4>
              <div className="space-y-2">
                {searchHistory.slice(0, 5).map((search, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded text-sm">
                    <span className="text-gray-700">{search.query}</span>
                    <span className="text-gray-500 text-xs">
                      {new Date(search.timestamp).toLocaleTimeString()}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 bg-gray-50">
          <div className="flex items-center justify-between text-xs text-gray-600">
            <div className="flex items-center gap-4">
              <span>🔍 Web search enhances code with current best practices</span>
              <span>•</span>
              <span>Cache: {webSearchService.getCacheStats().cacheSize} items</span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => webSearchService.clearCache()}
                className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded transition-colors text-xs"
              >
                Clear Cache
              </button>
              <button
                onClick={onClose}
                className="px-3 py-1 bg-blue-500 text-white hover:bg-blue-600 rounded transition-colors text-xs"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default WebSearchPanel
