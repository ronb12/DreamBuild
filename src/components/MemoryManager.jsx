// Memory Manager Component for DreamBuild
// Manages conversation memory and Firebase storage

import React, { useState, useEffect } from 'react'
import firebaseService from '../services/firebaseService'

const MemoryManager = ({ projectId, onMemoryUpdate }) => {
  const [memory, setMemory] = useState(null)
  const [conversationHistory, setConversationHistory] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [stats, setStats] = useState(null)

  useEffect(() => {
    if (projectId) {
      loadMemory()
      loadStats()
    }
  }, [projectId])

  const loadMemory = async () => {
    try {
      setIsLoading(true)
      const memory = await firebaseService.loadConversationMemory(projectId)
      setMemory(memory)
      
      if (memory) {
        const history = await firebaseService.getConversationHistory(projectId)
        setConversationHistory(history)
      }
    } catch (error) {
      console.error('Failed to load memory:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const loadStats = async () => {
    try {
      const stats = await firebaseService.getStorageStats()
      setStats(stats)
    } catch (error) {
      console.error('Failed to load stats:', error)
    }
  }

  const searchMemory = async () => {
    if (!searchQuery.trim()) return
    
    try {
      setIsLoading(true)
      const results = await firebaseService.searchConversationMemory(projectId, searchQuery)
      setSearchResults(results)
    } catch (error) {
      console.error('Failed to search memory:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const clearMemory = async () => {
    if (window.confirm('Are you sure you want to clear all conversation memory?')) {
      try {
        await firebaseService.clearConversationMemory(projectId)
        setMemory(null)
        setConversationHistory([])
        setSearchResults([])
        onMemoryUpdate && onMemoryUpdate()
      } catch (error) {
        console.error('Failed to clear memory:', error)
      }
    }
  }

  const exportMemory = () => {
    if (!memory) return
    
    const dataStr = JSON.stringify(memory, null, 2)
    const dataBlob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(dataBlob)
    const link = document.createElement('a')
    link.href = url
    link.download = `dreambuild-memory-${projectId}.json`
    link.click()
    URL.revokeObjectURL(url)
  }

  if (isLoading) {
    return (
      <div className="memory-manager">
        <div className="loading">Loading memory...</div>
      </div>
    )
  }

  return (
    <div className="memory-manager">
      <div className="memory-header">
        <h3>🧠 Conversation Memory</h3>
        <div className="memory-actions">
          <button onClick={loadMemory} className="btn btn-secondary">
            Refresh
          </button>
          <button onClick={exportMemory} className="btn btn-secondary">
            Export
          </button>
          <button onClick={clearMemory} className="btn btn-danger">
            Clear
          </button>
        </div>
      </div>

      {stats && (
        <div className="memory-stats">
          <div className="stat">
            <span className="stat-label">Projects:</span>
            <span className="stat-value">{stats.totalProjects}</span>
          </div>
          <div className="stat">
            <span className="stat-label">Files:</span>
            <span className="stat-value">{stats.totalFiles}</span>
          </div>
          <div className="stat">
            <span className="stat-label">Size:</span>
            <span className="stat-value">{stats.totalSizeMB} MB</span>
          </div>
        </div>
      )}

      <div className="memory-search">
        <input
          type="text"
          placeholder="Search conversation memory..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && searchMemory()}
        />
        <button onClick={searchMemory} className="btn btn-primary">
          Search
        </button>
      </div>

      {searchResults.length > 0 && (
        <div className="search-results">
          <h4>Search Results</h4>
          {searchResults.map((result, index) => (
            <div key={index} className="search-result">
              <div className="result-type">{result.type}</div>
              <div className="result-text">{result.text}</div>
              <div className="result-timestamp">{result.timestamp}</div>
            </div>
          ))}
        </div>
      )}

      {conversationHistory.prompts && conversationHistory.prompts.length > 0 && (
        <div className="conversation-history">
          <h4>Conversation History</h4>
          <div className="history-stats">
            <span>Prompts: {conversationHistory.totalPrompts}</span>
            <span>Responses: {conversationHistory.totalResponses}</span>
          </div>
          
          <div className="history-list">
            {conversationHistory.prompts.map((prompt, index) => (
              <div key={prompt.id} className="history-item">
                <div className="history-prompt">
                  <strong>Prompt:</strong> {prompt.text}
                </div>
                {conversationHistory.responses[index] && (
                  <div className="history-response">
                    <strong>Response:</strong> {conversationHistory.responses[index].text}
                  </div>
                )}
                <div className="history-timestamp">
                  {new Date(prompt.timestamp).toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {memory && (
        <div className="memory-details">
          <h4>Memory Details</h4>
          <div className="memory-info">
            <p><strong>Project ID:</strong> {memory.projectId}</p>
            <p><strong>Created:</strong> {new Date(memory.createdAt).toLocaleString()}</p>
            <p><strong>Last Updated:</strong> {new Date(memory.lastUpdated).toLocaleString()}</p>
            <p><strong>Memory Size:</strong> {JSON.stringify(memory).length} bytes</p>
          </div>
        </div>
      )}

      <style jsx>{`
        .memory-manager {
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 8px;
          background: white;
          margin: 20px 0;
        }

        .memory-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .memory-actions {
          display: flex;
          gap: 10px;
        }

        .memory-stats {
          display: flex;
          gap: 20px;
          margin-bottom: 20px;
          padding: 10px;
          background: #f5f5f5;
          border-radius: 4px;
        }

        .stat {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .stat-label {
          font-size: 12px;
          color: #666;
        }

        .stat-value {
          font-size: 18px;
          font-weight: bold;
          color: #333;
        }

        .memory-search {
          display: flex;
          gap: 10px;
          margin-bottom: 20px;
        }

        .memory-search input {
          flex: 1;
          padding: 8px 12px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }

        .search-results {
          margin-bottom: 20px;
        }

        .search-result {
          padding: 10px;
          border: 1px solid #eee;
          border-radius: 4px;
          margin-bottom: 10px;
        }

        .result-type {
          font-size: 12px;
          color: #666;
          text-transform: uppercase;
        }

        .result-text {
          margin: 5px 0;
        }

        .result-timestamp {
          font-size: 12px;
          color: #999;
        }

        .conversation-history {
          margin-bottom: 20px;
        }

        .history-stats {
          display: flex;
          gap: 20px;
          margin-bottom: 10px;
          font-size: 14px;
          color: #666;
        }

        .history-item {
          padding: 15px;
          border: 1px solid #eee;
          border-radius: 4px;
          margin-bottom: 10px;
        }

        .history-prompt {
          margin-bottom: 10px;
        }

        .history-response {
          margin-bottom: 10px;
          color: #666;
        }

        .history-timestamp {
          font-size: 12px;
          color: #999;
        }

        .memory-details {
          padding: 15px;
          background: #f9f9f9;
          border-radius: 4px;
        }

        .memory-info p {
          margin: 5px 0;
        }

        .btn {
          padding: 8px 16px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 14px;
        }

        .btn-primary {
          background: #007bff;
          color: white;
        }

        .btn-secondary {
          background: #6c757d;
          color: white;
        }

        .btn-danger {
          background: #dc3545;
          color: white;
        }

        .btn:hover {
          opacity: 0.8;
        }

        .loading {
          text-align: center;
          padding: 20px;
          color: #666;
        }
      `}</style>
    </div>
  )
}

export default MemoryManager
