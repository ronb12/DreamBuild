// Real-time Collaboration Panel for DreamBuild
// Provides multi-user co-editing, comments, and version history

import React, { useState, useEffect, useRef } from 'react'
import collaborationService from '../services/collaborationService'

const CollaborationPanel = ({ projectId, fileId, onFileChange, onVersionRestore }) => {
  const [onlineUsers, setOnlineUsers] = useState([])
  const [comments, setComments] = useState([])
  const [versions, setVersions] = useState([])
  const [newComment, setNewComment] = useState('')
  const [selectedLine, setSelectedLine] = useState(null)
  const [showComments, setShowComments] = useState(false)
  const [showVersions, setShowVersions] = useState(false)
  const [isCollaborating, setIsCollaborating] = useState(false)
  const [userInfo, setUserInfo] = useState({
    name: 'Anonymous User',
    email: '',
    avatar: ''
  })

  useEffect(() => {
    if (projectId) {
      initializeCollaboration()
    }

    return () => {
      collaborationService.cleanup()
    }
  }, [projectId])

  const initializeCollaboration = async () => {
    try {
      // Join project collaboration
      await collaborationService.joinProject(projectId, userInfo)
      setIsCollaborating(true)

      // Listen to online users
      collaborationService.getOnlineUsers(projectId).then(setOnlineUsers)

      // Listen to comments
      if (fileId) {
        collaborationService.getComments(projectId, fileId).then(setComments)
      }

      // Listen to version history
      collaborationService.getVersionHistory(projectId).then(setVersions)

      // Listen to file changes
      if (fileId) {
        collaborationService.listenToFileChanges(projectId, fileId, (changes) => {
          console.log('File changes received:', changes)
        })
      }

      console.log('🤝 Collaboration initialized successfully')
    } catch (error) {
      console.error('❌ Failed to initialize collaboration:', error)
    }
  }

  const handleAddComment = async () => {
    if (!newComment.trim() || !fileId) return

    try {
      await collaborationService.addComment(
        projectId,
        fileId,
        selectedLine || 1,
        newComment
      )
      setNewComment('')
      setSelectedLine(null)
    } catch (error) {
      console.error('❌ Failed to add comment:', error)
    }
  }

  const handleRestoreVersion = async (versionId) => {
    try {
      const files = await collaborationService.restoreVersion(projectId, versionId)
      onVersionRestore && onVersionRestore(files)
      console.log('✅ Version restored successfully')
    } catch (error) {
      console.error('❌ Failed to restore version:', error)
    }
  }

  const handleSaveVersion = async () => {
    try {
      const versionData = {
        versionNumber: `v${versions.length + 1}`,
        description: prompt('Version description:') || 'Manual save',
        files: {}, // This would be populated with current files
        isAutoSave: false
      }

      await collaborationService.saveVersion(projectId, versionData)
      console.log('✅ Version saved successfully')
    } catch (error) {
      console.error('❌ Failed to save version:', error)
    }
  }

  const handleLineClick = (lineNumber) => {
    setSelectedLine(lineNumber)
    setShowComments(true)
  }

  const handleCursorUpdate = (position) => {
    if (fileId) {
      collaborationService.updateCursor(projectId, fileId, position)
    }
  }

  return (
    <div className="collaboration-panel">
      <div className="collaboration-header">
        <h3>🤝 Real-time Collaboration</h3>
        <div className="collaboration-status">
          {isCollaborating ? (
            <span className="status-online">● Online</span>
          ) : (
            <span className="status-offline">● Offline</span>
          )}
        </div>
      </div>

      {/* Online Users */}
      <div className="collaboration-section">
        <h4>👥 Online Users ({onlineUsers.length})</h4>
        <div className="users-list">
          {onlineUsers.map((user, index) => (
            <div key={user.id || index} className="user-item">
              <div 
                className="user-avatar" 
                style={{ backgroundColor: user.color }}
              >
                {user.name.charAt(0).toUpperCase()}
              </div>
              <span className="user-name">{user.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Comments Section */}
      <div className="collaboration-section">
        <div className="section-header">
          <h4>💬 Comments ({comments.length})</h4>
          <button 
            className="btn btn-sm"
            onClick={() => setShowComments(!showComments)}
          >
            {showComments ? 'Hide' : 'Show'}
          </button>
        </div>

        {showComments && (
          <div className="comments-container">
            <div className="add-comment">
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add a comment..."
                rows="3"
              />
              <div className="comment-actions">
                <span className="line-info">
                  {selectedLine ? `Line ${selectedLine}` : 'Select a line to comment'}
                </span>
                <button 
                  className="btn btn-primary btn-sm"
                  onClick={handleAddComment}
                  disabled={!newComment.trim()}
                >
                  Add Comment
                </button>
              </div>
            </div>

            <div className="comments-list">
              {comments.map((comment) => (
                <div key={comment.id} className="comment-item">
                  <div className="comment-header">
                    <div className="comment-author">
                      <div 
                        className="author-avatar"
                        style={{ backgroundColor: comment.userColor || '#007bff' }}
                      >
                        {comment.userName.charAt(0).toUpperCase()}
                      </div>
                      <span className="author-name">{comment.userName}</span>
                    </div>
                    <span className="comment-time">
                      {new Date(comment.createdAt?.toDate()).toLocaleString()}
                    </span>
                  </div>
                  <div className="comment-content">{comment.content}</div>
                  <div className="comment-line">Line {comment.lineNumber}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Version History */}
      <div className="collaboration-section">
        <div className="section-header">
          <h4>📚 Version History ({versions.length})</h4>
          <div className="version-actions">
            <button 
              className="btn btn-sm btn-secondary"
              onClick={() => setShowVersions(!showVersions)}
            >
              {showVersions ? 'Hide' : 'Show'}
            </button>
            <button 
              className="btn btn-sm btn-primary"
              onClick={handleSaveVersion}
            >
              Save Version
            </button>
          </div>
        </div>

        {showVersions && (
          <div className="versions-container">
            <div className="versions-list">
              {versions.map((version) => (
                <div key={version.id} className="version-item">
                  <div className="version-header">
                    <span className="version-number">{version.versionNumber}</span>
                    <span className="version-time">
                      {new Date(version.createdAt?.toDate()).toLocaleString()}
                    </span>
                  </div>
                  <div className="version-description">{version.description}</div>
                  <div className="version-author">
                    by {version.userName}
                  </div>
                  <div className="version-actions">
                    <button 
                      className="btn btn-sm btn-outline"
                      onClick={() => handleRestoreVersion(version.id)}
                    >
                      Restore
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Collaboration Stats */}
      <div className="collaboration-section">
        <h4>📊 Collaboration Stats</h4>
        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-label">Online Users:</span>
            <span className="stat-value">{onlineUsers.length}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Comments:</span>
            <span className="stat-value">{comments.length}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Versions:</span>
            <span className="stat-value">{versions.length}</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .collaboration-panel {
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 8px;
          background: white;
          margin: 20px 0;
          max-height: 600px;
          overflow-y: auto;
        }

        .collaboration-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          padding-bottom: 10px;
          border-bottom: 1px solid #eee;
        }

        .collaboration-status {
          font-size: 14px;
        }

        .status-online {
          color: #28a745;
        }

        .status-offline {
          color: #dc3545;
        }

        .collaboration-section {
          margin-bottom: 20px;
          padding-bottom: 15px;
          border-bottom: 1px solid #f0f0f0;
        }

        .collaboration-section:last-child {
          border-bottom: none;
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }

        .users-list {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .user-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 5px 10px;
          background: #f8f9fa;
          border-radius: 20px;
          font-size: 14px;
        }

        .user-avatar {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          font-size: 12px;
        }

        .comments-container {
          margin-top: 10px;
        }

        .add-comment {
          margin-bottom: 15px;
          padding: 15px;
          background: #f8f9fa;
          border-radius: 8px;
        }

        .add-comment textarea {
          width: 100%;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
          resize: vertical;
          font-family: inherit;
        }

        .comment-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 10px;
        }

        .line-info {
          font-size: 12px;
          color: #666;
        }

        .comments-list {
          max-height: 200px;
          overflow-y: auto;
        }

        .comment-item {
          padding: 10px;
          border: 1px solid #eee;
          border-radius: 8px;
          margin-bottom: 10px;
        }

        .comment-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 5px;
        }

        .comment-author {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .author-avatar {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          font-size: 10px;
        }

        .comment-time {
          font-size: 12px;
          color: #666;
        }

        .comment-content {
          margin: 5px 0;
        }

        .comment-line {
          font-size: 12px;
          color: #007bff;
          font-weight: bold;
        }

        .versions-container {
          margin-top: 10px;
        }

        .versions-list {
          max-height: 200px;
          overflow-y: auto;
        }

        .version-item {
          padding: 10px;
          border: 1px solid #eee;
          border-radius: 8px;
          margin-bottom: 10px;
        }

        .version-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 5px;
        }

        .version-number {
          font-weight: bold;
          color: #007bff;
        }

        .version-time {
          font-size: 12px;
          color: #666;
        }

        .version-description {
          margin: 5px 0;
          color: #333;
        }

        .version-author {
          font-size: 12px;
          color: #666;
          margin-bottom: 10px;
        }

        .version-actions {
          display: flex;
          gap: 10px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 15px;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 10px;
          background: #f8f9fa;
          border-radius: 8px;
        }

        .stat-label {
          font-size: 12px;
          color: #666;
          margin-bottom: 5px;
        }

        .stat-value {
          font-size: 18px;
          font-weight: bold;
          color: #333;
        }

        .btn {
          padding: 6px 12px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 12px;
          font-weight: 500;
        }

        .btn-sm {
          padding: 4px 8px;
          font-size: 11px;
        }

        .btn-primary {
          background: #007bff;
          color: white;
        }

        .btn-secondary {
          background: #6c757d;
          color: white;
        }

        .btn-outline {
          background: transparent;
          color: #007bff;
          border: 1px solid #007bff;
        }

        .btn:hover {
          opacity: 0.8;
        }

        .btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  )
}

export default CollaborationPanel
