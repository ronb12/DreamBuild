import { createContext, useContext, useState, useCallback } from 'react'
import { useAuth } from './AuthContext'
import toast from 'react-hot-toast'

const ProjectContext = createContext()

export function useProject() {
  return useContext(ProjectContext)
}

export function ProjectProvider({ children }) {
  const { user, db } = useAuth()
  const [currentProject, setCurrentProject] = useState({
    id: null,
    name: 'Untitled Project',
    files: {
      'index.html': '',
      'style.css': '',
      'script.js': '',
      'components.jsx': ''
    },
    activeFile: 'index.html',
    config: {
      appType: 'frontend',
      language: 'javascript',
      styling: 'tailwind',
      database: 'none',
      auth: 'none'
    },
    lastModified: new Date()
  })

  const [projects, setProjects] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const switchFile = useCallback((filename) => {
    setCurrentProject(prev => ({
      ...prev,
      activeFile: filename,
      lastModified: new Date()
    }))
  }, [])

  const updateFile = useCallback((filename, content) => {
    setCurrentProject(prev => ({
      ...prev,
      files: {
        ...prev.files,
        [filename]: content
      },
      lastModified: new Date()
    }))
  }, [])

  const updateConfig = useCallback((config) => {
    setCurrentProject(prev => ({
      ...prev,
      config: { ...prev.config, ...config },
      lastModified: new Date()
    }))
  }, [])

  const saveProject = useCallback(async (projectName = null) => {
    if (!user) {
      toast.error('Please sign in to save projects')
      return
    }

    setIsLoading(true)
    try {
      const projectToSave = {
        ...currentProject,
        name: projectName || currentProject.name,
        userId: user.uid,
        lastModified: new Date()
      }

      // Save to Firestore
      const { doc, setDoc, collection } = await import('firebase/firestore')
      const projectRef = doc(collection(db, 'projects'))
      
      await setDoc(projectRef, {
        ...projectToSave,
        id: projectRef.id,
        createdAt: currentProject.id ? undefined : new Date()
      })

      setCurrentProject(prev => ({ ...prev, id: projectRef.id }))
      toast.success('Project saved successfully!')
      
      // Refresh projects list
      loadProjects()
    } catch (error) {
      toast.error('Failed to save project: ' + error.message)
    } finally {
      setIsLoading(false)
    }
  }, [currentProject, user, db])

  const loadProjects = useCallback(async () => {
    if (!user) return

    setIsLoading(true)
    try {
      const { collection, query, where, getDocs, orderBy } = await import('firebase/firestore')
      const projectsRef = collection(db, 'projects')
      const q = query(
        projectsRef,
        where('userId', '==', user.uid),
        orderBy('lastModified', 'desc')
      )
      
      const snapshot = await getDocs(q)
      const projectsList = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      
      setProjects(projectsList)
    } catch (error) {
      toast.error('Failed to load projects: ' + error.message)
    } finally {
      setIsLoading(false)
    }
  }, [user, db])

  const loadProject = useCallback(async (projectId) => {
    if (!user) return

    setIsLoading(true)
    try {
      const { doc, getDoc } = await import('firebase/firestore')
      const projectRef = doc(db, 'projects', projectId)
      const projectSnap = await getDoc(projectRef)
      
      if (projectSnap.exists()) {
        const projectData = { id: projectSnap.id, ...projectSnap.data() }
        setCurrentProject(projectData)
        toast.success('Project loaded successfully!')
      } else {
        toast.error('Project not found')
      }
    } catch (error) {
      toast.error('Failed to load project: ' + error.message)
    } finally {
      setIsLoading(false)
    }
  }, [user, db])

  const deleteProject = useCallback(async (projectId) => {
    if (!user) return

    setIsLoading(true)
    try {
      const { doc, deleteDoc } = await import('firebase/firestore')
      await deleteDoc(doc(db, 'projects', projectId))
      
      setProjects(prev => prev.filter(p => p.id !== projectId))
      toast.success('Project deleted successfully!')
    } catch (error) {
      toast.error('Failed to delete project: ' + error.message)
    } finally {
      setIsLoading(false)
    }
  }, [user, db])

  const createNewProject = useCallback(() => {
    setCurrentProject({
      id: null,
      name: 'Untitled Project',
      files: {
        'index.html': '',
        'style.css': '',
        'script.js': '',
        'components.jsx': ''
      },
      activeFile: 'index.html',
      config: {
        appType: 'frontend',
        language: 'javascript',
        styling: 'tailwind',
        database: 'none',
        auth: 'none'
      },
      lastModified: new Date()
    })
    toast.success('New project created!')
  }, [])

  const value = {
    currentProject,
    projects,
    isLoading,
    switchFile,
    updateFile,
    updateConfig,
    saveProject,
    loadProjects,
    loadProject,
    deleteProject,
    createNewProject
  }

  return (
    <ProjectContext.Provider value={value}>
      {children}
    </ProjectContext.Provider>
  )
}
