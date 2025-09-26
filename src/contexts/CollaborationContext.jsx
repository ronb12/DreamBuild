import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { useAuth } from './AuthContext'
import { useProject } from './ProjectContext'
import collaborationService from '../services/collaborationService'

const CollaborationContext = createContext()

export function useCollaboration() {
  return useContext(CollaborationContext)
}

export function CollaborationProvider({ children }) {
  const { user } = useAuth()
  const { currentProject } = useProject()
  const [isCollaborationActive, setIsCollaborationActive] = useState(false)
  const [activeUsers, setActiveUsers] = useState([])
  const [cursors, setCursors] = useState([])
  const [comments, setComments] = useState([])
  const [sharedProjects, setSharedProjects] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  // Initialize collaboration when user and project are available
  useEffect(() => {
    if (user && currentProject?.id) {
      initializeCollaboration()
    } else {
      cleanupCollaboration()
    }

    return () => {
      cleanupCollaboration()
    }
  }, [user, currentProject?.id])

  // Initialize collaboration
  const initializeCollaboration = useCallback(async () => {
    if (!user || !currentProject?.id) return

    try {
      setIsLoading(true)
      console.log('🤝 Initializing collaboration...')
      
      await collaborationService.initializeCollaboration(user, currentProject.id)
      setIsCollaborationActive(true)
      
      // Set up real-time updates
      setupRealtimeUpdates()
      
    } catch (error) {
      console.error('Failed to initialize collaboration:', error)
    } finally {
      setIsLoading(false)
    }
  }, [user, currentProject?.id])

  // Set up real-time updates
  const setupRealtimeUpdates = useCallback(() => {
    const updateActiveUsers = () => {
      const users = collaborationService.getActiveUsers(currentProject.id)
      setActiveUsers(users)
    }

    const updateCursors = () => {
      const cursors = collaborationService.getCursors(currentProject.id)
      setCursors(cursors)
    }

    const updateComments = () => {
      const comments = collaborationService.getComments(currentProject.id)
      setComments(comments)
    }

    // Update every 2 seconds
    const interval = setInterval(() => {
      updateActiveUsers()
      updateCursors()
      updateComments()
    }, 2000)

    return () => clearInterval(interval)
  }, [currentProject?.id])

  // Clean up collaboration
  const cleanupCollaboration = useCallback(async () => {
    if (currentProject?.id) {
      await collaborationService.setUserOffline(currentProject.id)
    }
    collaborationService.cleanup()
    setIsCollaborationActive(false)
    setActiveUsers([])
    setCursors([])
    setComments([])
  }, [currentProject?.id])

  // Update cursor position
  const updateCursor = useCallback(async (fileId, line, column, selection = null) => {
    if (!isCollaborationActive || !currentProject?.id) return

    try {
      await collaborationService.updateCursor(currentProject.id, fileId, line, column, selection)
    } catch (error) {
      console.error('Failed to update cursor:', error)
    }
  }, [isCollaborationActive, currentProject?.id])

  // Add comment
  const addComment = useCallback(async (fileId, lineNumber, content) => {
    if (!isCollaborationActive || !currentProject?.id) return

    try {
      await collaborationService.addComment(currentProject.id, fileId, lineNumber, content)
    } catch (error) {
      console.error('Failed to add comment:', error)
    }
  }, [isCollaborationActive, currentProject?.id])

  // Resolve comment
  const resolveComment = useCallback(async (commentId) => {
    try {
      await collaborationService.resolveComment(commentId)
    } catch (error) {
      console.error('Failed to resolve comment:', error)
    }
  }, [])

  // Record file change
  const recordFileChange = useCallback(async (fileId, changeType, content) => {
    if (!isCollaborationActive || !currentProject?.id) return

    try {
      await collaborationService.recordFileChange(currentProject.id, fileId, changeType, content)
    } catch (error) {
      console.error('Failed to record file change:', error)
    }
  }, [isCollaborationActive, currentProject?.id])

  // Share project
  const shareProject = useCallback(async (userEmail, permissions = 'read') => {
    if (!currentProject?.id) return

    try {
      await collaborationService.shareProject(currentProject.id, userEmail, permissions)
    } catch (error) {
      console.error('Failed to share project:', error)
    }
  }, [currentProject?.id])

  // Get shared projects
  const getSharedProjects = useCallback(async () => {
    try {
      const projects = await collaborationService.getSharedProjects()
      setSharedProjects(projects)
      return projects
    } catch (error) {
      console.error('Failed to get shared projects:', error)
      return []
    }
  }, [])

  // Toggle collaboration
  const toggleCollaboration = useCallback(async () => {
    if (isCollaborationActive) {
      await cleanupCollaboration()
    } else {
      await initializeCollaboration()
    }
  }, [isCollaborationActive, initializeCollaboration, cleanupCollaboration])

  const value = {
    isCollaborationActive,
    activeUsers,
    cursors,
    comments,
    sharedProjects,
    isLoading,
    updateCursor,
    addComment,
    resolveComment,
    recordFileChange,
    shareProject,
    getSharedProjects,
    toggleCollaboration
  }

  return (
    <CollaborationContext.Provider value={value}>
      {children}
    </CollaborationContext.Provider>
  )
}

