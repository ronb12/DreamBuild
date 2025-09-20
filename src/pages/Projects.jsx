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
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-2"
              >
                Projects
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-muted-foreground text-lg"
              >
                Manage and organize your AI-generated projects
              </motion.p>
            </div>
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowCreateDialog(true)}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primary-light text-primary-foreground rounded-xl hover:from-primary-dark hover:to-primary transition-all duration-200 shadow-lg shadow-primary/25 border border-primary/20"
            >
              <Plus className="h-5 w-5" />
              New Project
            </motion.button>
          </div>

          {/* Stats Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8"
          >
            {Object.entries(projectTypes).map(([key, type], index) => {
              const IconComponent = type.icon
              const isActive = selectedFilter === key
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  onClick={() => setSelectedFilter(key)}
                  className={`bg-card/80 backdrop-blur-sm border rounded-xl p-4 cursor-pointer transition-all duration-200 ${
                    isActive 
                      ? 'border-primary/50 bg-primary/5 shadow-lg shadow-primary/10' 
                      : 'border-border/50 hover:border-primary/30 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                      isActive ? 'bg-primary/20' : 'bg-primary/10'
                    }`}>
                      <IconComponent className={`h-6 w-6 transition-colors ${
                        isActive ? 'text-primary' : 'text-primary/70'
                      }`} />
                    </div>
                    <div>
                      <p className={`text-3xl font-bold transition-colors ${
                        isActive ? 'text-primary' : 'text-foreground'
                      }`}>{type.count}</p>
                      <p className={`text-sm font-medium transition-colors ${
                        isActive ? 'text-primary' : 'text-muted-foreground'
                      }`}>{type.name}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Search and Filter Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-6 mb-8 shadow-sm"
        >
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="flex flex-col md:flex-row gap-4 flex-1">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search projects by name, description, or tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-border/50 rounded-xl bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-200 placeholder:text-muted-foreground"
                />
              </div>

              {/* Quick Filters */}
              <div className="flex items-center gap-2 flex-wrap">
                {Object.entries(projectTypes).slice(0, 4).map(([key, type]) => {
                  const IconComponent = type.icon
                  const isActive = selectedFilter === key
                  return (
                    <motion.button
                      key={key}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedFilter(key)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        isActive 
                          ? 'bg-primary text-primary-foreground shadow-md' 
                          : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
                      }`}
                    >
                      <IconComponent className="h-4 w-4" />
                      {type.name}
                    </motion.button>
                  )
                })}
              </div>
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-1 bg-muted/30 p-1 rounded-xl border border-border/50">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setViewMode('grid')}
                className={`p-3 rounded-lg transition-all duration-200 ${
                  viewMode === 'grid' 
                    ? 'bg-primary text-primary-foreground shadow-md' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                <Grid3X3 className="h-5 w-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setViewMode('list')}
                className={`p-3 rounded-lg transition-all duration-200 ${
                  viewMode === 'list' 
                    ? 'bg-primary text-primary-foreground shadow-md' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                <List className="h-5 w-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>

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
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group cursor-pointer"
                  >
                    {/* Project Preview */}
                    <div className="relative h-52 bg-gradient-to-br from-primary/10 via-primary/5 to-muted/30 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
                      <div className="absolute top-4 right-4 flex gap-2">
                        <span className={`px-3 py-1 text-xs font-semibold rounded-full border backdrop-blur-sm ${getStatusColor(project.status)}`}>
                          {project.status}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="w-12 h-12 bg-primary/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-3">
                          <TypeIcon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-lg font-bold text-foreground mb-1">{project.name}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                      </div>
                      <div className="absolute inset-0 bg-background/0 group-hover:bg-background/10 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <div className="flex gap-3">
                          <motion.button
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-3 bg-primary text-primary-foreground rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
                            onClick={() => switchProject(project.id)}
                          >
                            <Eye className="h-5 w-5" />
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-3 bg-background text-foreground rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 border border-border/50"
                          >
                            <Edit className="h-5 w-5" />
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-3 bg-background text-foreground rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 border border-border/50"
                            onClick={() => setShowProjectMenu(showProjectMenu === project.id ? null : project.id)}
                          >
                            <MoreVertical className="h-5 w-5" />
                          </motion.button>
                        </div>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-6">
                      {/* Project Stats */}
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-2 bg-muted/50 px-3 py-1 rounded-lg">
                            <FileText className="h-4 w-4" />
                            {project.files} files
                          </span>
                          <span className="bg-muted/50 px-3 py-1 rounded-lg">{project.size}</span>
                        </div>
                        <span className="flex items-center gap-2 bg-muted/50 px-3 py-1 rounded-lg">
                          <Calendar className="h-4 w-4" />
                          {project.lastModified}
                        </span>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-lg border border-primary/20"
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
            className="text-center py-20"
          >
            <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-8">
              <Folder className="h-16 w-16 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">
              {searchTerm || selectedFilter !== 'all' ? 'No projects found' : 'No projects yet'}
            </h3>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto text-lg">
              {searchTerm || selectedFilter !== 'all' 
                ? 'Try adjusting your search or filter criteria to find what you\'re looking for.'
                : 'Start building amazing projects with DreamBuild AI. Create your first project to get started!'
              }
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowCreateDialog(true)}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-primary-light text-primary-foreground rounded-xl hover:from-primary-dark hover:to-primary transition-all duration-200 shadow-lg shadow-primary/25 border border-primary/20 text-lg font-semibold"
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
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-card/95 backdrop-blur-sm border border-border/50 rounded-2xl p-8 w-full max-w-lg mx-4 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Plus className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-2">Create New Project</h2>
                <p className="text-muted-foreground">Start building something amazing with DreamBuild AI</p>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">Project Name</label>
                  <input
                    type="text"
                    value={newProjectName}
                    onChange={(e) => setNewProjectName(e.target.value)}
                    placeholder="Enter your project name..."
                    className="w-full px-4 py-3 border border-border/50 rounded-xl bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-200 placeholder:text-muted-foreground"
                    autoFocus
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">Project Type</label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { value: 'web', label: 'Web App', icon: Globe },
                      { value: 'mobile', label: 'Mobile', icon: Code },
                      { value: 'dashboard', label: 'Dashboard', icon: Settings }
                    ].map(({ value, label, icon: Icon }) => (
                      <motion.button
                        key={value}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setNewProjectType(value)}
                        className={`p-4 rounded-xl border transition-all duration-200 ${
                          newProjectType === value
                            ? 'border-primary bg-primary/10 text-primary'
                            : 'border-border/50 bg-background/50 text-muted-foreground hover:border-primary/30 hover:text-foreground'
                        }`}
                      >
                        <Icon className="h-6 w-6 mx-auto mb-2" />
                        <span className="text-sm font-medium">{label}</span>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4 mt-8">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowCreateDialog(false)}
                  className="flex-1 px-6 py-3 border border-border/50 rounded-xl text-foreground hover:bg-muted/50 transition-all duration-200 font-semibold"
                >
                  Cancel
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleCreateProject}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-primary to-primary-light text-primary-foreground rounded-xl hover:from-primary-dark hover:to-primary transition-all duration-200 font-semibold shadow-lg shadow-primary/25"
                >
                  Create Project
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