import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Folder, 
  Plus, 
  Search, 
  MoreVertical,
  Eye,
  Edit,
  Trash2,
  Download,
  Share,
  Calendar,
  Code,
  Globe,
  Star,
  FileText,
  Settings,
  ArrowRight
} from 'lucide-react'
import { useProject } from '../contexts/ProjectContext'
import toast from 'react-hot-toast'

const Projects = () => {
  const { currentProject, createNewProject, projects, switchProject } = useProject()
  const [searchTerm, setSearchTerm] = useState('')
  const [activeTab, setActiveTab] = useState('all')
  const [showCreateDialog, setShowCreateDialog] = useState(false)
  const [newProjectName, setNewProjectName] = useState('')
  const [newProjectType, setNewProjectType] = useState('web')
  const [showProjectMenu, setShowProjectMenu] = useState(null)

  // Use real projects from context
  const allProjects = projects.map(project => ({
    id: project.id,
    name: project.name,
    type: project.config?.appType || 'web',
    description: project.description || 'No description available',
    status: project.status || 'active',
    lastModified: project.lastModified ? new Date(project.lastModified).toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
    files: Object.keys(project.files || {}).length,
    size: calculateProjectSize(project),
    tags: extractTags(project),
    preview: getProjectPreview(project),
    source: project.source || 'dreambuild',
    githubData: project.githubData
  }))

  // Helper functions
  const calculateProjectSize = (project) => {
    const files = project.files || {}
    const totalChars = Object.values(files).reduce((sum, content) => sum + (content?.length || 0), 0)
    const sizeInMB = (totalChars / 1024 / 1024).toFixed(1)
    return `${sizeInMB} MB`
  }

  const extractTags = (project) => {
    const tags = []
    
    // Add language
    if (project.config?.language) {
      tags.push(project.config.language)
    }
    
    // Add framework/technology
    if (project.config?.styling) {
      tags.push(project.config.styling)
    }
    
    // Add database
    if (project.config?.database && project.config.database !== 'none') {
      tags.push(project.config.database)
    }
    
    // Add auth
    if (project.config?.auth && project.config.auth !== 'none') {
      tags.push(project.config.auth)
    }
    
    // Add GitHub tags if available
    if (project.githubData?.language) {
      tags.push(project.githubData.language)
    }
    
    return [...new Set(tags)].slice(0, 4) // Remove duplicates and limit to 4
  }

  const getProjectPreview = (project) => {
    if (project.githubData?.owner?.avatar_url) {
      return project.githubData.owner.avatar_url
    }
    
    // Generate preview based on project type
    const typeColors = {
      'web': '007acc',
      'mobile': 'ffc107',
      'api': '17a2b8',
      'dashboard': '6f42c1',
      'ecommerce': '28a745'
    }
    
    const color = typeColors[project.config?.appType] || '6c757d'
    return `https://via.placeholder.com/300x200/${color}/ffffff?text=${encodeURIComponent(project.name)}`
  }

  const tabs = [
    { id: 'all', name: 'All', icon: Folder, count: allProjects.length },
    { id: 'web', name: 'Web Apps', icon: Globe, count: allProjects.filter(p => p.type === 'web').length },
    { id: 'mobile', name: 'Mobile', icon: Code, count: allProjects.filter(p => p.type === 'mobile').length },
    { id: 'dashboard', name: 'Dashboards', icon: Settings, count: allProjects.filter(p => p.type === 'dashboard').length },
    { id: 'api', name: 'APIs', icon: Settings, count: allProjects.filter(p => p.type === 'api').length },
    { id: 'game', name: 'Games', icon: Star, count: allProjects.filter(p => p.type === 'game').length },
    { id: 'ecommerce', name: 'E-commerce', icon: Settings, count: allProjects.filter(p => p.type === 'ecommerce').length },
    { id: 'completed', name: 'Completed', icon: Star, count: allProjects.filter(p => p.status === 'completed').length }
  ]

  const filteredProjects = allProjects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesTab = activeTab === 'all' || 
                      project.type === activeTab || 
                      project.status === activeTab
    
    return matchesSearch && matchesTab
  })

  const handleCreateProject = () => {
    if (!newProjectName.trim()) {
      toast.error('Please enter a project name')
      return
    }

    const newProject = {
      id: Date.now().toString(),
      name: newProjectName,
      type: newProjectType,
      description: `New ${newProjectType} project`,
      status: 'active',
      lastModified: new Date().toISOString().split('T')[0],
      files: 0,
      size: '0 MB',
      tags: [newProjectType],
      preview: 'https://via.placeholder.com/300x200/6c757d/ffffff?text=New+Project'
    }

    setAllProjects([newProject, ...allProjects])
    setNewProjectName('')
    setNewProjectType('web')
    setShowCreateDialog(false)
    toast.success('Project created successfully!')
  }

  const handleDeleteProject = (projectId) => {
    setAllProjects(allProjects.filter(p => p.id !== projectId))
    setShowProjectMenu(null)
    toast.success('Project deleted successfully!')
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800 border-green-200'
      case 'development': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'completed': return 'bg-white/10 text-white border-white/20'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const getTypeIcon = (type) => {
    switch (type) {
      case 'web': return Globe
      case 'mobile': return Code
      case 'dashboard': return Settings
      default: return Folder
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Projects</h1>
            <p className="text-muted-foreground">Manage your AI-generated projects</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowCreateDialog(true)}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors"
          >
            <Plus className="h-4 w-4" />
            New Project
          </motion.button>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-1 bg-muted/50 p-1 rounded-lg mb-6">
          {tabs.map((tab) => {
            const IconComponent = tab.icon
            const isActive = activeTab === tab.id
            return (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  isActive 
                    ? 'bg-primary text-primary-foreground shadow-sm' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                <IconComponent className="h-4 w-4" />
                {tab.name}
                <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                  isActive ? 'bg-primary-foreground/20' : 'bg-muted'
                }`}>
                  {tab.count}
                </span>
              </motion.button>
            )
          })}
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        {/* Projects List */}
        <div className="space-y-2">
          {filteredProjects.map((project, index) => {
            const TypeIcon = getTypeIcon(project.type)
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-card border border-border rounded-lg p-4 hover:shadow-sm transition-all duration-200 group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <TypeIcon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-semibold text-foreground truncate">{project.name}</h3>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(project.status)}`}>
                          {project.status}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground truncate mb-2">{project.description}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <FileText className="h-3 w-3" />
                          {project.files} files
                        </span>
                        <span>{project.size}</span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {project.lastModified}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
                        {project.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 2 && (
                          <span className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md">
                            +{project.tags.length - 2}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 ml-4">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 hover:bg-muted rounded-md transition-colors"
                      onClick={() => switchProject(project.id)}
                    >
                      <Eye className="h-4 w-4 text-muted-foreground" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 hover:bg-muted rounded-md transition-colors"
                    >
                      <Edit className="h-4 w-4 text-muted-foreground" />
                    </motion.button>
                    <button
                      onClick={() => setShowProjectMenu(showProjectMenu === project.id ? null : project.id)}
                      className="p-2 hover:bg-muted rounded-md transition-colors"
                    >
                      <MoreVertical className="h-4 w-4 text-muted-foreground" />
                    </button>
                  </div>
                </div>

                {/* Project Menu */}
                <AnimatePresence>
                  {showProjectMenu === project.id && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute right-4 mt-1 bg-card border border-border rounded-lg shadow-lg z-10 min-w-[150px]"
                    >
                      <div className="p-1">
                        <button className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-muted rounded-md transition-colors">
                          <Eye className="h-4 w-4" />
                          View
                        </button>
                        <button className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-muted rounded-md transition-colors">
                          <Edit className="h-4 w-4" />
                          Edit
                        </button>
                        <button className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-muted rounded-md transition-colors">
                          <Download className="h-4 w-4" />
                          Download
                        </button>
                        <button className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-muted rounded-md transition-colors">
                          <Share className="h-4 w-4" />
                          Share
                        </button>
                        <hr className="my-1" />
                        <button 
                          onClick={() => handleDeleteProject(project.id)}
                          className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md transition-colors"
                        >
                          <Trash2 className="h-4 w-4" />
                          Delete
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Folder className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {searchTerm || activeTab !== 'all' ? 'No projects found' : 'No projects yet'}
            </h3>
            <p className="text-muted-foreground mb-4">
              {searchTerm || activeTab !== 'all' 
                ? 'Try adjusting your search or filter criteria.'
                : 'Create your first project to get started!'
              }
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowCreateDialog(true)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors"
            >
              <Plus className="h-4 w-4" />
              Create Project
            </motion.button>
          </div>
        )}
      </div>

      {/* Create Project Dialog */}
      <AnimatePresence>
        {showCreateDialog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setShowCreateDialog(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-card border border-border rounded-lg p-6 w-full max-w-md mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-xl font-semibold text-foreground mb-4">Create New Project</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Project Name</label>
                  <input
                    type="text"
                    value={newProjectName}
                    onChange={(e) => setNewProjectName(e.target.value)}
                    placeholder="Enter project name..."
                    className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    autoFocus
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Project Type</label>
                  <select
                    value={newProjectType}
                    onChange={(e) => setNewProjectType(e.target.value)}
                    className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="web">Web Application</option>
                    <option value="mobile">Mobile Application</option>
                    <option value="dashboard">Dashboard</option>
                  </select>
                </div>
              </div>
              
              <div className="flex gap-3 mt-6">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowCreateDialog(false)}
                  className="flex-1 px-4 py-2 border border-border rounded-lg text-foreground hover:bg-muted transition-colors"
                >
                  Cancel
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleCreateProject}
                  className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors"
                >
                  Create
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Click outside to close menu */}
      {showProjectMenu && (
        <div
          className="fixed inset-0 z-10"
          onClick={() => setShowProjectMenu(null)}
        />
      )}
    </div>
  )
}

export default Projects