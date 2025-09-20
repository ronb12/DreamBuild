import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Search, 
  Grid, 
  List, 
  Filter, 
  Star, 
  TrendingUp, 
  Clock,
  ChevronDown,
  ChevronRight,
  Sparkles,
  Code,
  Palette,
  Zap
} from 'lucide-react'
import aiService from '../services/aiService'
import { useProject } from '../contexts/ProjectContext'
import toast from 'react-hot-toast'

const TemplateBrowser = ({ isOpen, onClose, onTemplateSelect }) => {
  const { updateFile } = useProject()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [viewMode, setViewMode] = useState('grid') // 'grid' or 'list'
  const [sortBy, setSortBy] = useState('popular') // 'popular', 'newest', 'alphabetical'
  const [filteredTemplates, setFilteredTemplates] = useState([])
  const [categories, setCategories] = useState({})
  const [expandedCategories, setExpandedCategories] = useState({})

  useEffect(() => {
    if (isOpen) {
      loadTemplateData()
    }
  }, [isOpen])

  const loadTemplateData = () => {
    try {
      const templateCategories = aiService.getTemplateCategories()
      setCategories(templateCategories)
      
      const allTemplates = aiService.getAllTemplates()
      setFilteredTemplates(allTemplates)
    } catch (error) {
      console.error('Error loading template data:', error)
      toast.error('Failed to load templates')
    }
  }

  useEffect(() => {
    filterTemplates()
  }, [searchQuery, selectedCategory, sortBy])

  const filterTemplates = () => {
    let templates = aiService.getAllTemplates()

    // Filter by search query
    if (searchQuery) {
      templates = aiService.searchTemplates(searchQuery)
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      const categoryTemplates = aiService.getTemplatesByCategory(selectedCategory)
      templates = templates.filter(t => categoryTemplates.includes(t.id))
    }

    // Sort templates
    switch (sortBy) {
      case 'popular':
        const popularIds = aiService.getPopularTemplates().map(t => t.id)
        templates = templates.sort((a, b) => {
          const aPopular = popularIds.includes(a.id)
          const bPopular = popularIds.includes(b.id)
          if (aPopular && !bPopular) return -1
          if (!aPopular && bPopular) return 1
          return 0
        })
        break
      case 'alphabetical':
        templates = templates.sort((a, b) => a.name.localeCompare(b.name))
        break
      case 'newest':
        // For now, just reverse the array
        templates = templates.reverse()
        break
    }

    setFilteredTemplates(templates)
  }

  const handleTemplateSelect = async (templateId) => {
    try {
      // Generate template using the existing fallback system
      const templateFiles = aiService.createFallbackResponse(templateId, {
        title: templateId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
      })

      // Update project files
      Object.entries(templateFiles).forEach(([filename, content]) => {
        updateFile(filename, content)
      })

      const templateName = templateId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
      toast.success(`Generated ${templateName} template!`)
      
      onTemplateSelect && onTemplateSelect({
        id: templateId,
        name: templateName,
        files: templateFiles
      })
      onClose()
    } catch (error) {
      console.error('Error generating template:', error)
      toast.error('Failed to generate template')
    }
  }

  const toggleCategory = (categoryKey) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryKey]: !prev[categoryKey]
    }))
  }

  const getCategoryIcon = (categoryKey) => {
    const icons = {
      web: '🌐',
      mobile: '📱',
      dashboard: '📊',
      ecommerce: '🛒',
      api: '🔌',
      games: '🎮',
      education: '🎓',
      healthcare: '🏥',
      finance: '💰',
      iot: '🏠',
      realestate: '🏘️'
    }
    return icons[categoryKey] || '📄'
  }

  const getTemplatePreview = (templateId) => {
    // Generate a simple preview based on template type
    if (templateId.includes('store') || templateId.includes('ecommerce')) {
      return '🛒 E-commerce platform with shopping cart and payments'
    } else if (templateId.includes('blog') || templateId.includes('content')) {
      return '📝 Content management with articles and comments'
    } else if (templateId.includes('dashboard') || templateId.includes('admin')) {
      return '📊 Analytics dashboard with charts and metrics'
    } else if (templateId.includes('social') || templateId.includes('network')) {
      return '👥 Social platform with profiles and connections'
    } else if (templateId.includes('game') || templateId.includes('entertainment')) {
      return '🎮 Interactive game with scoring and levels'
    } else if (templateId.includes('health') || templateId.includes('fitness')) {
      return '💪 Health tracking with goals and progress'
    } else if (templateId.includes('finance') || templateId.includes('money')) {
      return '💰 Financial management with budgets and investments'
    } else if (templateId.includes('education') || templateId.includes('learning')) {
      return '🎓 Educational platform with courses and quizzes'
    } else {
      return '✨ Custom application with modern design'
    }
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-card border border-border rounded-lg w-full max-w-7xl h-[90vh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="p-6 border-b border-border">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Template Library</h2>
                  <p className="text-muted-foreground">Choose from 1000+ professional templates</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-muted rounded-lg transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Search and Filters */}
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search templates..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              
              <div className="flex gap-2">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-3 py-2 border border-border rounded-lg bg-background"
                >
                  <option value="all">All Categories</option>
                  {Object.entries(categories).map(([key, category]) => (
                    <option key={key} value={key}>
                      {category.icon} {category.name}
                    </option>
                  ))}
                </select>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 border border-border rounded-lg bg-background"
                >
                  <option value="popular">Popular</option>
                  <option value="alphabetical">A-Z</option>
                  <option value="newest">Newest</option>
                </select>

                <div className="flex border border-border rounded-lg">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 ${viewMode === 'grid' ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'}`}
                  >
                    <Grid className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 ${viewMode === 'list' ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'}`}
                  >
                    <List className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-hidden">
            <div className="h-full flex">
              {/* Sidebar - Categories */}
              <div className="w-64 border-r border-border bg-muted/30 overflow-y-auto">
                <div className="p-4">
                  <h3 className="font-semibold mb-3">Categories</h3>
                  <div className="space-y-1">
                    {Object.entries(categories).map(([key, category]) => (
                      <div key={key}>
                        <button
                          onClick={() => {
                            setSelectedCategory(key)
                            toggleCategory(key)
                          }}
                          className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-muted transition-colors"
                        >
                          <div className="flex items-center gap-2">
                            <span>{category.icon}</span>
                            <span className="text-sm">{category.name}</span>
                            <span className="text-xs text-muted-foreground">
                              ({category.templates.length})
                            </span>
                          </div>
                          {expandedCategories[key] ? (
                            <ChevronDown className="h-4 w-4" />
                          ) : (
                            <ChevronRight className="h-4 w-4" />
                          )}
                        </button>
                        
                        {expandedCategories[key] && (
                          <div className="ml-4 space-y-1 mt-1">
                            {category.templates.slice(0, 5).map(template => (
                              <button
                                key={template}
                                onClick={() => {
                                  setSearchQuery(template)
                                  setSelectedCategory(key)
                                }}
                                className="w-full text-left p-1 text-xs text-muted-foreground hover:text-foreground truncate"
                              >
                                {template.replace(/-/g, ' ')}
                              </button>
                            ))}
                            {category.templates.length > 5 && (
                              <div className="text-xs text-muted-foreground p-1">
                                +{category.templates.length - 5} more...
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Main Content - Templates */}
              <div className="flex-1 overflow-y-auto">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold">
                      {filteredTemplates.length} Templates
                      {selectedCategory !== 'all' && ` in ${categories[selectedCategory]?.name}`}
                    </h3>
                    <div className="text-sm text-muted-foreground">
                      Showing {filteredTemplates.length} of {aiService.getAllTemplates().length} templates
                    </div>
                  </div>

                  {viewMode === 'grid' ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                      {filteredTemplates.map((template, index) => (
                        <motion.div
                          key={template.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                          onClick={() => handleTemplateSelect(template.id)}
                          className="bg-card border border-border rounded-lg p-4 hover:shadow-lg hover:border-primary/30 transition-all cursor-pointer group"
                        >
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                              <span className="text-lg">{template.icon}</span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium truncate">{template.name}</h4>
                              <p className="text-xs text-muted-foreground">{template.category}</p>
                            </div>
                          </div>
                          
                          <p className="text-sm text-muted-foreground mb-3">
                            {getTemplatePreview(template.id)}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <Code className="h-3 w-3" />
                              <span>HTML/CSS/JS</span>
                            </div>
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                              <Zap className="h-4 w-4 text-primary" />
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {filteredTemplates.map((template, index) => (
                        <motion.div
                          key={template.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.02 }}
                          onClick={() => handleTemplateSelect(template.id)}
                          className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:shadow-md hover:border-primary/30 transition-all cursor-pointer group"
                        >
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <span className="text-xl">{template.icon}</span>
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium">{template.name}</h4>
                            <p className="text-sm text-muted-foreground mb-1">
                              {getTemplatePreview(template.id)}
                            </p>
                            <div className="flex items-center gap-4 text-xs text-muted-foreground">
                              <span>{template.category}</span>
                              <span>•</span>
                              <span>HTML/CSS/JS</span>
                            </div>
                          </div>
                          
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                            <Zap className="h-5 w-5 text-primary" />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {filteredTemplates.length === 0 && (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                        <Search className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">No templates found</h3>
                      <p className="text-muted-foreground">
                        Try adjusting your search or filter criteria
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default TemplateBrowser
