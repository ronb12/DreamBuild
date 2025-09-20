import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Folder, 
  Plus, 
  Search, 
  Filter, 
  Grid3X3, 
  List, 
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
  Clock,
  FileText,
  Settings,
  Rocket,
  Github,
  ExternalLink
} from 'lucide-react'
import { useProject } from '../contexts/ProjectContext'
import toast from 'react-hot-toast'

const Projects = () => {
  const { currentProject, createNewProject, projects, switchProject } = useProject()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [viewMode, setViewMode] = useState('grid')
  const [showCreateDialog, setShowCreateDialog] = useState(false)
  const [newProjectName, setNewProjectName] = useState('')
  const [newProjectType, setNewProjectType] = useState('web')
  const [showProjectMenu, setShowProjectMenu] = useState(null)

  // Sample project data - in real app, this would come from context/API
  const [allProjects, setAllProjects] = useState([
    {
      id: '1',
      name: 'E-commerce Store',
      type: 'web',
      description: 'Modern e-commerce platform with React and Node.js',
      status: 'active',
      lastModified: '2024-01-15',
      files: 12,
      size: '2.4 MB',
      tags: ['React', 'Node.js', 'E-commerce'],
      preview: 'https://via.placeholder.com/300x200/007acc/ffffff?text=E-commerce+Store'
    },
    {
      id: '2',
      name: 'Portfolio Website',
      type: 'web',
      description: 'Personal portfolio website with modern design',
      status: 'completed',
      lastModified: '2024-01-10',
      files: 8,
      size: '1.2 MB',
      tags: ['HTML', 'CSS', 'JavaScript'],
      preview: 'https://via.placeholder.com/300x200/28a745/ffffff?text=Portfolio+Website'
    },
    {
      id: '3',
      name: 'Task Manager App',
      type: 'mobile',
      description: 'Mobile task management application',
      status: 'development',
      lastModified: '2024-01-12',
      files: 15,
      size: '3.1 MB',
      tags: ['React Native', 'Firebase'],
      preview: 'https://via.placeholder.com/300x200/ffc107/000000?text=Task+Manager'
    },
    {
      id: '4',
      name: 'Analytics Dashboard',
      type: 'dashboard',
      description: 'Business analytics dashboard with charts',
      status: 'active',
      lastModified: '2024-01-14',
      files: 20,
      size: '4.2 MB',
      tags: ['Vue.js', 'D3.js', 'Charts'],
      preview: 'https://via.placeholder.com/300x200/6f42c1/ffffff?text=Analytics+Dashboard'
    }
  ])

  const projectTypes = {
    all: { name: 'All Projects', icon: Folder, count: allProjects.length },
    web: { name: 'Web Apps', icon: Globe, count: allProjects.filter(p => p.type === 'web').length },
    mobile: { name: 'Mobile Apps', icon: Code, count: allProjects.filter(p => p.type === 'mobile').length },
    dashboard: { name: 'Dashboards', icon: Settings, count: allProjects.filter(p => p.type === 'dashboard').length },
    completed: { name: 'Completed', icon: Star, count: allProjects.filter(p => p.status === 'completed').length }
  }

  const filteredProjects = allProjects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesFilter = selectedFilter === 'all' || 
                         project.type === selectedFilter || 
                         project.status === selectedFilter
    
    return matchesSearch && matchesFilter
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Projects</h1>
              <p className="text-muted-foreground">
                Manage and organize your AI-generated projects
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowCreateDialog(true)}
              className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all duration-200 shadow-sm shadow-primary/20"
            >
              <Plus className="h-4 w-4" />
              New Project
            </motion.button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            {Object.entries(projectTypes).map(([key, type]) => {
              const IconComponent = type.icon
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: key === 'all' ? 0 : parseInt(key) * 0.1 }}
                  className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-4 hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                      <IconComponent className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">{type.count}</p>
                      <p className="text-sm text-muted-foreground">{type.name}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col md:flex-row gap-4 flex-1">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              {/* Filter */}
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <select
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  className="px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  {Object.entries(projectTypes).map(([key, type]) => (
                    <option key={key} value={key}>
                      {type.name} ({type.count})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-1 bg-muted/50 p-1 rounded-lg">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'grid' ? 'bg-gray-700 text-white' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Grid3X3 className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'list' ? 'bg-gray-700 text-white' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Projects Grid/List */}
        <AnimatePresence mode="wait">
          {viewMode === 'grid' ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProjects.map((project, index) => {
                const TypeIcon = getTypeIcon(project.type)
                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-200 group"
                  >
                    {/* Project Preview */}
                    <div className="relative h-48 bg-gradient-to-br from-muted to-muted/50">
                      <img
                        src={project.preview}
                        alt={project.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 right-3 flex gap-2">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(project.status)}`}>
                          {project.status}
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-all duration-200 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <div className="flex gap-2">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2 bg-gray-700 text-white rounded-lg shadow-lg"
                            onClick={() => switchProject(project.id)}
                          >
                            <Eye className="h-4 w-4" />
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2 bg-white text-gray-900 rounded-lg shadow-lg"
                          >
                            <Edit className="h-4 w-4" />
                          </motion.button>
                        </div>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                            <TypeIcon className="h-4 w-4 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground">{project.name}</h3>
                            <p className="text-sm text-muted-foreground">{project.description}</p>
                          </div>
                        </div>
                        <button
                          onClick={() => setShowProjectMenu(showProjectMenu === project.id ? null : project.id)}
                          className="p-1 hover:bg-muted rounded-md transition-colors"
                        >
                          <MoreVertical className="h-4 w-4 text-muted-foreground" />
                        </button>
                      </div>

                      {/* Project Stats */}
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <FileText className="h-3 w-3" />
                            {project.files} files
                          </span>
                          <span>{project.size}</span>
                        </div>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {project.lastModified}
                        </span>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Project Menu */}
                    <AnimatePresence>
                      {showProjectMenu === project.id && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute top-12 right-3 bg-card border border-border rounded-lg shadow-lg z-10 min-w-[150px]"
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
            </motion.div>
          ) : (
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-3"
            >
              {filteredProjects.map((project, index) => {
                const TypeIcon = getTypeIcon(project.type)
                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-4 hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                          <TypeIcon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-1">
                            <h3 className="font-semibold text-foreground">{project.name}</h3>
                            <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(project.status)}`}>
                              {project.status}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">{project.description}</p>
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
                        <div className="flex items-center gap-1">
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
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <div className="w-24 h-24 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Folder className="h-12 w-12 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">No projects found</h3>
            <p className="text-muted-foreground mb-6">
              {searchTerm || selectedFilter !== 'all' 
                ? 'Try adjusting your search or filter criteria'
                : 'Get started by creating your first project'
              }
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowCreateDialog(true)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all duration-200"
            >
              <Plus className="h-4 w-4" />
              Create Project
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
            className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={() => setShowCreateDialog(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-card border border-border rounded-xl p-6 w-full max-w-md mx-4"
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
                  className="flex-1 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
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