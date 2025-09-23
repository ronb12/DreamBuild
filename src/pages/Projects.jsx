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
  const { currentProject, createNewProject, projects, switchProject, saveProject, deleteProject } = useProject()
  const [searchTerm, setSearchTerm] = useState('')
  const [activeTab, setActiveTab] = useState('all')
  const [showCreateDialog, setShowCreateDialog] = useState(false)
  const [newProjectName, setNewProjectName] = useState('')
  const [newProjectType, setNewProjectType] = useState('web')
  const [showProjectMenu, setShowProjectMenu] = useState(null)

  // Debug logging
  console.log('Projects page rendering, projects:', projects)

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

  const handleCreateProject = async () => {
    if (!newProjectName.trim()) {
      toast.error('Please enter a project name')
      return
    }

    try {
      // Create new project using the context
      const newProject = {
        id: null,
        name: newProjectName,
        files: {
          'index.html': '',
          'style.css': '',
          'script.js': ''
        },
        activeFile: 'index.html',
        config: {
          appType: newProjectType,
          language: 'javascript',
          styling: 'tailwind',
          database: 'none',
          auth: 'none'
        },
        lastModified: new Date(),
        description: `New ${newProjectType} project`,
        status: 'active',
        source: 'dreambuild'
      }

      // Save the project using the context
      await saveProject(newProjectName)
      
      setNewProjectName('')
      setNewProjectType('web')
      setShowCreateDialog(false)
      toast.success('Project created successfully!')
    } catch (error) {
      console.error('Failed to create project:', error)
      toast.error('Failed to create project. Please try again.')
    }
  }

  const handleDeleteProject = async (projectId) => {
    try {
      await deleteProject(projectId)
      setShowProjectMenu(null)
      toast.success('Project deleted successfully!')
    } catch (error) {
      console.error('Failed to delete project:', error)
      toast.error('Failed to delete project. Please try again.')
    }
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

  // Error boundary for debugging
  try {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100" style={{ paddingTop: '100px' }}>
        <div className="w-full px-1 sm:px-2 lg:px-3 py-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
          <div className="space-y-3 flex-1">
            <h1 className="text-5xl font-bold text-gray-900">
              Projects
            </h1>
            <p className="text-lg text-gray-600">Manage and organize your AI-generated projects</p>
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <span className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg border border-blue-200">
                <Folder className="h-4 w-4" />
                {allProjects.length} Total Projects
              </span>
              <span className="flex items-center gap-2 px-3 py-1.5 bg-purple-50 text-purple-700 rounded-lg border border-purple-200">
                <Star className="h-4 w-4" />
                {allProjects.filter(p => p.source === 'github').length} GitHub
              </span>
            </div>
          </div>
          <div className="flex-shrink-0">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowCreateDialog(true)}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl hover:shadow-xl hover:shadow-primary/30 transition-all duration-200 font-semibold text-sm border border-primary/20"
            >
              <Plus className="h-4 w-4" />
              Create New Project
            </motion.button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 p-2 rounded-2xl mb-8 shadow-sm overflow-x-auto">
          {tabs.map((tab) => {
            const IconComponent = tab.icon
            const isActive = activeTab === tab.id
            return (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                  isActive 
                    ? 'bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg shadow-primary/25 border border-primary/20' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100 border border-transparent hover:border-gray-200'
                }`}
              >
                <IconComponent className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm font-medium">{tab.name}</span>
                <span className={`text-xs px-2 py-1 rounded-full font-semibold ${
                  isActive ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-600'
                }`}>
                  {tab.count}
                </span>
              </motion.button>
            )
          })}
        </div>

        {/* Search */}
        <div className="flex items-center gap-3 mb-8 w-full">
          <input
            type="text"
            placeholder="Search projects by name, description, or tags..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-4 pr-4 py-4 border border-gray-200 rounded-xl bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all duration-200 text-gray-900 placeholder:text-gray-400 text-base shadow-sm hover:shadow-md focus:shadow-lg"
          />
          <Search className="h-6 w-6 text-gray-400 flex-shrink-0" />
        </div>

        {/* Projects List */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
          {filteredProjects.map((project, index) => {
            const TypeIcon = getTypeIcon(project.type)
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0 border border-blue-200">
                        <TypeIcon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-lg text-foreground truncate group-hover:text-primary transition-colors duration-200">
                          {project.name}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs text-gray-500 font-medium capitalize">
                            {project.type} Project
                          </span>
                          <span className={`inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-full border ${getStatusColor(project.status)}`}>
                            {project.status}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 flex-shrink-0 ml-2">
                      <motion.button
                        whileHover={{ scale: 1.05, y: -1 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-1.5 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
                        onClick={() => switchProject(project.id)}
                        title="Open Project"
                      >
                        <ArrowRight className="h-3.5 w-3.5" />
                        Open Project
                      </motion.button>
                      <button
                        onClick={() => setShowProjectMenu(showProjectMenu === project.id ? null : project.id)}
                        className="flex items-center gap-1.5 px-3 py-2 hover:bg-gray-100 rounded-lg transition-colors border border-gray-200 hover:border-gray-300 text-gray-600 hover:text-gray-800"
                        title="More Options"
                      >
                        <MoreVertical className="h-4 w-4" />
                        <span className="text-xs font-medium">Menu</span>
                      </button>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs bg-muted/50 text-muted-foreground rounded-lg border border-border/50"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2.5 py-1 text-xs bg-muted/50 text-muted-foreground rounded-lg border border-border/50">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <FileText className="h-3.5 w-3.5" />
                        {project.files} files
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        {project.lastModified}
                      </span>
                    </div>
                    <div className="text-xs text-muted-foreground font-medium">
                      {project.size}
                    </div>
                  </div>
                </div>

                {/* Project Menu */}
                <AnimatePresence>
                  {showProjectMenu === project.id && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      className="absolute right-2 top-14 bg-card/95 backdrop-blur-sm border border-border/50 rounded-xl shadow-xl z-20 min-w-[180px] overflow-hidden"
                    >
                      <div className="p-1">
                        <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-blue-50 rounded-lg transition-colors text-gray-700 hover:text-blue-700">
                          <Edit className="h-4 w-4 text-blue-500" />
                          Edit Details
                        </button>
                        <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-green-50 rounded-lg transition-colors text-gray-700 hover:text-green-700">
                          <Download className="h-4 w-4 text-green-500" />
                          Download
                        </button>
                        <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-purple-50 rounded-lg transition-colors text-gray-700 hover:text-purple-700">
                          <Share className="h-4 w-4 text-purple-500" />
                          Share Project
                        </button>
                        <div className="h-px bg-gray-200 my-2 mx-2" />
                        <button 
                          onClick={() => handleDeleteProject(project.id)}
                          className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                          Delete Project
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
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Folder className="h-12 w-12 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">
              {searchTerm || activeTab !== 'all' ? 'No projects found' : 'No projects yet'}
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
              {searchTerm || activeTab !== 'all' 
                ? 'Try adjusting your search or filter criteria to find what you\'re looking for.'
                : 'Start building amazing projects with AI-powered code generation!'
              }
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowCreateDialog(true)}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl hover:shadow-xl hover:shadow-primary/30 transition-all duration-200 font-semibold text-base border border-primary/20"
            >
              <Plus className="h-5 w-5" />
              Get Started - Create Your First Project
            </motion.button>
          </motion.div>
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
                  className="flex-1 px-4 py-2.5 border border-border rounded-lg text-foreground hover:bg-muted transition-colors text-sm font-medium"
                >
                  Cancel
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleCreateProject}
                  className="flex-1 px-4 py-2.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors text-sm font-medium"
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
  } catch (error) {
    console.error('Error in Projects component:', error)
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100" style={{ paddingTop: '100px' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-red-600 mb-4">Error Loading Projects</h1>
            <p className="text-gray-600 mb-4">There was an error loading the projects page.</p>
            <p className="text-sm text-gray-500">Error: {error.message}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects