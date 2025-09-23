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

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20" style={{ paddingTop: '100px' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              Projects
            </h1>
            <p className="text-lg text-muted-foreground">Manage and organize your AI-generated projects</p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Folder className="h-4 w-4" />
                {allProjects.length} Total Projects
              </span>
              <span className="flex items-center gap-1">
                <Star className="h-4 w-4" />
                {allProjects.filter(p => p.source === 'github').length} GitHub
              </span>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowCreateDialog(true)}
            className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-primary-foreground rounded-xl hover:shadow-lg hover:shadow-primary/25 transition-all duration-200 font-medium"
          >
            <Plus className="h-5 w-5" />
            New Project
          </motion.button>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-1 bg-card/50 backdrop-blur-sm border border-border/50 p-1.5 rounded-xl mb-8 shadow-sm">
          {tabs.map((tab) => {
            const IconComponent = tab.icon
            const isActive = activeTab === tab.id
            return (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive 
                    ? 'bg-gradient-to-r from-primary to-primary-dark text-primary-foreground shadow-lg shadow-primary/25' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                <IconComponent className="h-4 w-4" />
                {tab.name}
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                  isActive ? 'bg-primary-foreground/20 text-primary-foreground' : 'bg-muted text-muted-foreground'
                }`}>
                  {tab.count}
                </span>
              </motion.button>
            )
          })}
        </div>

        {/* Search */}
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search projects by name, description, or tags..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-border/50 rounded-xl bg-card/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-200 text-foreground placeholder:text-muted-foreground"
          />
        </div>

        {/* Projects List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
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
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <TypeIcon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-lg text-foreground truncate group-hover:text-primary transition-colors duration-200">
                          {project.name}
                        </h3>
                        <span className={`inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-full border mt-1 ${getStatusColor(project.status)}`}>
                          {project.status}
                        </span>
                      </div>
                    </div>
                    
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 hover:bg-primary/10 rounded-lg transition-colors"
                        onClick={() => switchProject(project.id)}
                      >
                        <Eye className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </motion.button>
                      <button
                        onClick={() => setShowProjectMenu(showProjectMenu === project.id ? null : project.id)}
                        className="p-2 hover:bg-primary/10 rounded-lg transition-colors"
                      >
                        <MoreVertical className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
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
                      className="absolute right-4 top-16 bg-card/95 backdrop-blur-sm border border-border/50 rounded-xl shadow-xl z-20 min-w-[180px] overflow-hidden"
                    >
                      <div className="p-1">
                        <button className="w-full flex items-center gap-3 px-4 py-3 text-sm hover:bg-primary/10 rounded-lg transition-colors">
                          <Eye className="h-4 w-4" />
                          View Project
                        </button>
                        <button className="w-full flex items-center gap-3 px-4 py-3 text-sm hover:bg-primary/10 rounded-lg transition-colors">
                          <Edit className="h-4 w-4" />
                          Edit Details
                        </button>
                        <button className="w-full flex items-center gap-3 px-4 py-3 text-sm hover:bg-primary/10 rounded-lg transition-colors">
                          <Download className="h-4 w-4" />
                          Download
                        </button>
                        <button className="w-full flex items-center gap-3 px-4 py-3 text-sm hover:bg-primary/10 rounded-lg transition-colors">
                          <Share className="h-4 w-4" />
                          Share Project
                        </button>
                        <div className="h-px bg-border/50 my-2 mx-2" />
                        <button 
                          onClick={() => handleDeleteProject(project.id)}
                          className="w-full flex items-center gap-3 px-4 py-3 text-sm text-red-500 hover:bg-red-500/10 rounded-lg transition-colors"
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
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-primary-foreground rounded-xl hover:shadow-lg hover:shadow-primary/25 transition-all duration-200 font-medium"
            >
              <Plus className="h-5 w-5" />
              Create Your First Project
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