import React, { useState, useEffect, useRef } from 'react'
import { useCollaboration } from '../contexts/CollaborationContext'
import { useAuth } from '../contexts/AuthContext'
import { MessageSquare, X, Send, CheckCircle } from 'lucide-react'
import toast from 'react-hot-toast'

const CommentsOverlay = ({ editorRef, fileId }) => {
  const { comments, addComment, resolveComment } = useCollaboration()
  const { user } = useAuth()
  const [showAddComment, setShowAddComment] = useState(false)
  const [newComment, setNewComment] = useState('')
  const [selectedLine, setSelectedLine] = useState(null)
  const [hoveredLine, setHoveredLine] = useState(null)
  const overlayRef = useRef(null)

  // Get comments for current file
  const fileComments = comments.filter(comment => comment.fileId === fileId)

  // Add comment handlers
  const handleAddComment = async (e) => {
    e.preventDefault()
    if (!newComment.trim() || !selectedLine) return

    try {
      await addComment(fileId, selectedLine, newComment)
      setNewComment('')
      setShowAddComment(false)
      setSelectedLine(null)
      toast.success('Comment added')
    } catch (error) {
      toast.error('Failed to add comment')
    }
  }

  const handleResolveComment = async (commentId) => {
    try {
      await resolveComment(commentId)
      toast.success('Comment resolved')
    } catch (error) {
      toast.error('Failed to resolve comment')
    }
  }

  // Handle line click for adding comments
  const handleLineClick = (lineNumber) => {
    if (user) {
      setSelectedLine(lineNumber)
      setShowAddComment(true)
    }
  }

  // Position comment markers
  useEffect(() => {
    if (!editorRef?.current || !fileId) return

    const editor = editorRef.current
    const editorContainer = editor.getContainerDomNode()
    
    // Remove existing markers
    const existingMarkers = editorContainer.querySelectorAll('.comment-marker')
    existingMarkers.forEach(marker => marker.remove())

    // Add comment markers
    fileComments.forEach(comment => {
      if (!comment.resolved) {
        const lineHeight = editor.getOption('lineHeight') || 20
        const top = (comment.lineNumber - 1) * lineHeight + 2

        const marker = document.createElement('div')
        marker.className = 'comment-marker'
        marker.style.cssText = `
          position: absolute;
          top: ${top}px;
          right: 10px;
          width: 8px;
          height: 8px;
          background-color: #F59E0B;
          border-radius: 50%;
          cursor: pointer;
          z-index: 1000;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        `

        marker.addEventListener('click', () => {
          // Show comment details
          console.log('Comment clicked:', comment)
        })

        editorContainer.appendChild(marker)
      }
    })
  }, [fileComments, editorRef, fileId])

  return (
    <div ref={overlayRef} className="comments-overlay">
      {/* Add Comment Modal */}
      {showAddComment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Add Comment</h3>
              <button
                onClick={() => {
                  setShowAddComment(false)
                  setSelectedLine(null)
                }}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <X className="h-4 w-4 text-gray-600" />
              </button>
            </div>
            
            <form onSubmit={handleAddComment} className="p-4">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Comment on Line {selectedLine}
                </label>
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Add your comment..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  rows={3}
                  required
                />
              </div>
              
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setShowAddComment(false)
                    setSelectedLine(null)
                  }}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <Send className="h-4 w-4" />
                  Add Comment
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Comments List */}
      {fileComments.length > 0 && (
        <div className="fixed right-4 top-20 w-80 bg-white rounded-lg shadow-lg border border-gray-200 max-h-96 overflow-y-auto">
          <div className="p-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Comments ({fileComments.length})
            </h3>
          </div>
          
          <div className="p-4 space-y-3">
            {fileComments.map((comment, index) => (
              <div key={index} className={`p-3 rounded-lg border ${
                comment.resolved ? 'bg-gray-50 border-gray-200' : 'bg-yellow-50 border-yellow-200'
              }`}>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">
                      {comment.userName?.charAt(0) || 'U'}
                    </span>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-gray-900">{comment.userName}</span>
                      <span className="text-xs text-gray-500">Line {comment.lineNumber}</span>
                      {comment.resolved && (
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                          Resolved
                        </span>
                      )}
                    </div>
                    
                    <p className="text-gray-700 text-sm mb-2">{comment.content}</p>
                    
                    {!comment.resolved && user && (
                      <button
                        onClick={() => handleResolveComment(comment.id)}
                        className="flex items-center gap-1 text-xs text-green-600 hover:text-green-700"
                      >
                        <CheckCircle className="h-3 w-3" />
                        Mark as resolved
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default CommentsOverlay
