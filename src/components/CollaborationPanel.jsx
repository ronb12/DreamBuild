import React, { useState, useEffect } from 'react'
import { useCollaboration } from '../contexts/CollaborationContext'
import { useAuth } from '../contexts/AuthContext'
import { 
  Users, 
  MessageSquare, 
  Share2, 
  Eye, 
  EyeOff, 
  UserPlus,
  X,
  CheckCircle,
  Clock,
  AlertCircle
} from 'lucide-react'
import toast from 'react-hot-toast'

const CollaborationPanel = ({ isOpen, onClose }) => {
  const { 
    isCollaborationActive,
    activeUsers,
    cursors,
    comments,
    sharedProjects,
    isLoading,
    shareProject,
    getSharedProjects,
    toggleCollaboration
  } = useCollaboration()
  
  const { user } = useAuth()
  const [shareEmail, setShareEmail] = useState('')
  const [sharePermissions, setSharePermissions] = useState('read')
  const [activeTab, setActiveTab] = useState('users')

  useEffect(() => {
    if (isOpen && isCollaborationActive) {
      getSharedProjects()
    }
  }, [isOpen, isCollaborationActive, getSharedProjects])

  const handleShareProject = async (e) => {
    e.preventDefault()
    if (!shareEmail.trim()) {
      toast.error('Please enter an email address')
      return
    }

    try {
      await shareProject(shareEmail, sharePermissions)
      toast.success(`Project shared with ${shareEmail}`)
      setShareEmail('')
      getSharedProjects()
    } catch (error) {
      toast.error('Failed to share project')
    }
  }

  const getPermissionColor = (permissions) => {
    switch (permissions) {
      case 'admin': return 'text-red-600 bg-red-100'
      case 'write': return 'text-blue-600 bg-blue-100'
      case 'read': return 'text-green-600 bg-green-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getPermissionIcon = (permissions) => {
    switch (permissions) {
      case 'admin': return <AlertCircle className="h-4 w-4" />
      case 'write': return <CheckCircle className="h-4 w-4" />
      case 'read': return <Eye className="h-4 w-4" />
      default: return <Clock className="h-4 w-4" />
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
              <Users className="h-5 w-5 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Collaboration</h2>
              <p className="text-sm text-gray-600">Real-time team collaboration</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="h-5 w-5 text-gray-600" />
          </button>
        </div>

        {/* Toggle Collaboration */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Real-time Collaboration</h3>
              <p className="text-sm text-gray-600">
                Enable real-time editing, cursor tracking, and comments
              </p>
            </div>
            <button
              onClick={toggleCollaboration}
              disabled={isLoading}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                isCollaborationActive
                  ? 'bg-green-100 text-green-700 hover:bg-green-200'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {isCollaborationActive ? (
                <>
                  <Eye className="h-4 w-4" />
                  Active
                </>
              ) : (
                <>
                  <EyeOff className="h-4 w-4" />
                  Inactive
                </>
              )}
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200">
          {[
            { id: 'users', label: 'Active Users', icon: Users },
            { id: 'comments', label: 'Comments', icon: MessageSquare },
            { id: 'sharing', label: 'Sharing', icon: Share2 }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 font-medium transition-colors ${
                activeTab === tab.id
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <tab.icon className="h-4 w-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-6 max-h-96 overflow-y-auto">
          {/* Active Users Tab */}
          {activeTab === 'users' && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">Active Users ({activeUsers.length})</h3>
              {activeUsers.length === 0 ? (
                <p className="text-gray-500 text-center py-8">No active users</p>
              ) : (
                <div className="space-y-3">
                  {activeUsers.map((user, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-medium">
                          {user.userName?.charAt(0) || 'U'}
                        </span>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{user.userName}</p>
                        <p className="text-sm text-gray-600">{user.userEmail}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">Online</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Cursors */}
              {cursors.length > 0 && (
                <div className="mt-6">
                  <h4 className="text-md font-medium text-gray-900 mb-3">Active Cursors</h4>
                  <div className="space-y-2">
                    {cursors.map((cursor, index) => (
                      <div key={index} className="flex items-center gap-2 p-2 bg-blue-50 rounded">
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-medium">
                            {cursor.userName?.charAt(0) || 'U'}
                          </span>
                        </div>
                        <span className="text-sm text-gray-700">{cursor.userName}</span>
                        <span className="text-xs text-gray-500">
                          {cursor.fileId} - Line {cursor.line}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Comments Tab */}
          {activeTab === 'comments' && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">Comments ({comments.length})</h3>
              {comments.length === 0 ? (
                <p className="text-gray-500 text-center py-8">No comments yet</p>
              ) : (
                <div className="space-y-3">
                  {comments.map((comment, index) => (
                    <div key={index} className={`p-4 rounded-lg border ${
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
                            <span className="text-xs text-gray-500">
                              Line {comment.lineNumber} in {comment.fileId}
                            </span>
                            {comment.resolved && (
                              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                                Resolved
                              </span>
                            )}
                          </div>
                          <p className="text-gray-700">{comment.content}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Sharing Tab */}
          {activeTab === 'sharing' && (
            <div className="space-y-6">
              {/* Share Project Form */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Share Project</h3>
                <form onSubmit={handleShareProject} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={shareEmail}
                      onChange={(e) => setShareEmail(e.target.value)}
                      placeholder="user@example.com"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Permissions
                    </label>
                    <select
                      value={sharePermissions}
                      onChange={(e) => setSharePermissions(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="read">Read Only</option>
                      <option value="write">Read & Write</option>
                      <option value="admin">Admin</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    Share Project
                  </button>
                </form>
              </div>

              {/* Shared Projects */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Shared Projects</h3>
                {sharedProjects.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">No shared projects</p>
                ) : (
                  <div className="space-y-3">
                    {sharedProjects.map((project, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                            <UserPlus className="h-4 w-4 text-white" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{project.sharedWith}</p>
                            <p className="text-sm text-gray-600">Project ID: {project.projectId}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${getPermissionColor(project.permissions)}`}>
                            {getPermissionIcon(project.permissions)}
                            {project.permissions}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CollaborationPanel