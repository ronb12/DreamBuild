import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Sparkles, 
  Search, 
  Filter, 
  Code, 
  Smartphone, 
  Globe, 
  Gamepad2,
  Zap,
  Star,
  Clock,
  FileText
} from 'lucide-react'
import { toast } from 'react-hot-toast'
import simpleAIService from '../services/simpleAIService'
import { useProject } from '../contexts/ProjectContext'

const TemplateSelector = ({ onTemplateSelect, isVisible, onClose }) => {
  const { currentProject, updateFile, switchFile } = useProject()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [isGenerating, setIsGenerating] = useState(false)

  const categories = [
    { id: 'all', name: 'All Templates', icon: Sparkles, color: 'text-purple-500' },
    { id: 'web-apps', name: 'Web Apps', icon: Globe, color: 'text-blue-500' },
    { id: 'mobile-apps', name: 'Mobile Apps', icon: Smartphone, color: 'text-green-500' },
    { id: 'games', name: 'Games', icon: Gamepad2, color: 'text-orange-500' },
    { id: 'tools', name: 'Tools', icon: Code, color: 'text-gray-500' }
  ]

  const [templates, setTemplates] = useState([])
  const [popularTemplates, setPopularTemplates] = useState([])
  const [isLoadingTemplates, setIsLoadingTemplates] = useState(true)

  // Load templates on component mount
  useEffect(() => {
    const loadTemplates = async () => {
      try {
        setIsLoadingTemplates(true)
        const [allTemplates, popular] = await Promise.all([
          simpleAIService.getAllTemplates(),
          simpleAIService.getPopularTemplates()
        ])
        setTemplates(allTemplates)
        setPopularTemplates(popular)
      } catch (error) {
        console.error('Failed to load templates:', error)
        toast.error('Failed to load templates')
      } finally {
        setIsLoadingTemplates(false)
      }
    }

    if (isVisible) {
      loadTemplates()
    }
  }, [isVisible])

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handleTemplateClick = async (template) => {
    setIsGenerating(true)
    try {
      console.log('🎯 Generating template:', template.id)
      
      const files = await simpleAIService.generateTemplateById(template.id)
      
      // Add files to project
      Object.entries(files).forEach(([filename, content]) => {
        updateFile(filename, content)
      })
      
      // Set first file as active
      const firstFile = Object.keys(files)[0]
      if (firstFile) {
        switchFile(firstFile)
      }
      
      toast.success(`Generated ${template.name} successfully!`)
      
      if (onTemplateSelect) {
        onTemplateSelect(template, files)
      }
      
      if (onClose) {
        onClose()
      }
      
    } catch (error) {
      console.error('❌ Template generation failed:', error)
      toast.error(`Failed to generate ${template.name}`)
    } finally {
      setIsGenerating(false)
    }
  }

  const getCategoryIcon = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId)
    return category ? category.icon : Code
  }

  const getCategoryColor = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId)
    return category ? category.color : 'text-gray-500'
  }

  if (!isVisible) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.95 }}
          className="bg-background border border-border rounded-xl shadow-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <FileText className="h-5 w-5 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-foreground">Template Gallery</h2>
                <p className="text-sm text-muted-foreground">Choose a template to get started</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
              title="Close"
            >
              <span className="text-xl text-muted-foreground">×</span>
            </button>
          </div>

          {/* Search and Filters */}
          <div className="p-6 border-b border-border">
            <div className="flex gap-4 mb-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search templates..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-muted border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                />
              </div>
              <button className="px-4 py-2 bg-muted border border-border rounded-lg text-foreground hover:bg-muted/80 transition-colors flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filters
              </button>
            </div>

            {/* Category Tabs */}
            <div className="flex gap-2 overflow-x-auto">
              {categories.map((category) => {
                const Icon = category.icon
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${
                      selectedCategory === category.id
                        ? 'bg-blue-500 text-white'
                        : 'bg-muted text-muted-foreground hover:bg-muted/80'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="text-sm font-medium">{category.name}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6">
            {/* Popular Templates */}
            {selectedCategory === 'all' && (
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <h3 className="text-lg font-semibold text-foreground">Popular Templates</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {isLoadingTemplates ? (
                    // Loading skeleton for popular templates
                    Array.from({ length: 3 }).map((_, index) => (
                      <div key={index} className="bg-card border border-border rounded-lg p-4 animate-pulse">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 bg-muted rounded-lg"></div>
                          <div className="flex-1">
                            <div className="h-4 bg-muted rounded mb-2"></div>
                            <div className="h-3 bg-muted rounded w-1/2"></div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="h-3 bg-muted rounded"></div>
                          <div className="h-3 bg-muted rounded w-3/4"></div>
                        </div>
                      </div>
                    ))
                  ) : (
                    popularTemplates.map((template) => {
                    const Icon = getCategoryIcon(template.category)
                    const colorClass = getCategoryColor(template.category)
                    return (
                      <motion.button
                        key={template.id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleTemplateClick(template)}
                        disabled={isGenerating}
                        className="p-4 bg-card border border-border rounded-lg hover:border-blue-500/50 transition-all text-left group"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`w-8 h-8 rounded-lg bg-muted flex items-center justify-center ${colorClass}`}>
                            <Icon className="h-4 w-4" />
                          </div>
                          <div>
                            <h4 className="font-medium text-foreground group-hover:text-blue-500 transition-colors">
                              {template.name}
                            </h4>
                            <p className="text-xs text-muted-foreground">
                              {template.files.length} files
                            </p>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {template.description}
                        </p>
                      </motion.button>
                    )
                    })
                  )}
                </div>
              </div>
            )}

            {/* All Templates */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-foreground">
                  {selectedCategory === 'all' ? 'All Templates' : categories.find(c => c.id === selectedCategory)?.name}
                </h3>
                <span className="text-sm text-muted-foreground">
                  {filteredTemplates.length} template{filteredTemplates.length !== 1 ? 's' : ''}
                </span>
              </div>

              {filteredTemplates.length === 0 ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                    <Search className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h4 className="text-lg font-medium text-foreground mb-2">No templates found</h4>
                  <p className="text-muted-foreground">Try adjusting your search or filters</p>
                </div>
              ) : isLoadingTemplates ? (
                // Loading skeleton
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className="bg-card border border-border rounded-lg p-4 animate-pulse">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 bg-muted rounded-lg"></div>
                        <div className="flex-1">
                          <div className="h-4 bg-muted rounded mb-2"></div>
                          <div className="h-3 bg-muted rounded w-1/2"></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-3 bg-muted rounded"></div>
                        <div className="h-3 bg-muted rounded w-3/4"></div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredTemplates.map((template) => {
                    const Icon = getCategoryIcon(template.category)
                    const colorClass = getCategoryColor(template.category)
                    return (
                      <motion.button
                        key={template.id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleTemplateClick(template)}
                        disabled={isGenerating}
                        className="p-4 bg-card border border-border rounded-lg hover:border-blue-500/50 transition-all text-left group"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`w-8 h-8 rounded-lg bg-muted flex items-center justify-center ${colorClass}`}>
                            <Icon className="h-4 w-4" />
                          </div>
                          <div>
                            <h4 className="font-medium text-foreground group-hover:text-blue-500 transition-colors">
                              {template.name}
                            </h4>
                            <p className="text-xs text-muted-foreground">
                              {template.files.length} files
                            </p>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {template.description}
                        </p>
                      </motion.button>
                    )
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-border bg-muted/30">
            <div className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground">
                Need something custom? Use the AI prompt to generate unique applications.
              </div>
              <button
                onClick={onClose}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default TemplateSelector