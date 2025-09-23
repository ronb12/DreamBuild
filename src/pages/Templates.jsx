import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  FileText, 
  Code, 
  Globe, 
  Smartphone, 
  Database, 
  ShoppingCart, 
  Users, 
  BarChart3,
  Palette,
  Zap,
  Search,
  Filter,
  Grid,
  List,
  Star,
  Download,
  Eye,
  Copy,
  ArrowRight,
  Sparkles,
  Rocket
} from 'lucide-react'
import { useProject } from '../contexts/ProjectContext'
import { useTheme } from '../contexts/ThemeContext'
import toast from 'react-hot-toast'

const Templates = () => {
  const { addFilesToProject } = useProject()
  const { theme } = useTheme()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [viewMode, setViewMode] = useState('grid') // 'grid' or 'list'
  const [sortBy, setSortBy] = useState('popularity') // 'popularity', 'newest', 'name'

  // Template categories and data
  const templateCategories = [
    {
      id: 'web-apps',
      name: 'Web Applications',
      icon: Globe,
      description: 'Full-stack web applications',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'mobile-apps',
      name: 'Mobile Apps',
      icon: Smartphone,
      description: 'React Native and mobile applications',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'landing-pages',
      name: 'Landing Pages',
      icon: FileText,
      description: 'Marketing and landing pages',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'dashboards',
      name: 'Dashboards',
      icon: BarChart3,
      description: 'Analytics and admin dashboards',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'ecommerce',
      name: 'E-commerce',
      icon: ShoppingCart,
      description: 'Online stores and marketplaces',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 'portfolio',
      name: 'Portfolio',
      icon: Palette,
      description: 'Personal and creative portfolios',
      color: 'from-indigo-500 to-purple-500'
    }
  ]

  // Sample templates data
  const templates = [
    // Web Apps
    {
      id: 'todo-app',
      name: 'Todo Application',
      description: 'A modern todo app with React, Node.js, and MongoDB',
      category: 'web-apps',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      preview: '/api/placeholder/400/300',
      popularity: 95,
      createdAt: '2024-01-15',
      files: {
        'package.json': '{"name": "todo-app", "version": "1.0.0", "dependencies": {"react": "^18.0.0"}}',
        'src/App.jsx': 'import React from "react"; export default function App() { return <div>Todo App</div>; }'
      }
    },
    {
      id: 'blog-platform',
      name: 'Blog Platform',
      description: 'Full-featured blog with CMS, comments, and SEO',
      category: 'web-apps',
      tags: ['React', 'Next.js', 'Prisma', 'PostgreSQL'],
      preview: '/api/placeholder/400/300',
      popularity: 88,
      createdAt: '2024-01-10',
      files: {
        'package.json': '{"name": "blog-platform", "version": "1.0.0"}',
        'src/App.jsx': 'import React from "react"; export default function App() { return <div>Blog Platform</div>; }'
      }
    },
    // Mobile Apps
    {
      id: 'weather-app',
      name: 'Weather App',
      description: 'Beautiful weather app with location services',
      category: 'mobile-apps',
      tags: ['React Native', 'Expo', 'API'],
      preview: '/api/placeholder/400/300',
      popularity: 82,
      createdAt: '2024-01-12',
      files: {
        'package.json': '{"name": "weather-app", "version": "1.0.0"}',
        'App.js': 'import React from "react"; export default function App() { return <div>Weather App</div>; }'
      }
    },
    // Landing Pages
    {
      id: 'saas-landing',
      name: 'SaaS Landing Page',
      description: 'Modern SaaS landing page with pricing and features',
      category: 'landing-pages',
      tags: ['React', 'Tailwind CSS', 'Framer Motion'],
      preview: '/api/placeholder/400/300',
      popularity: 90,
      createdAt: '2024-01-08',
      files: {
        'package.json': '{"name": "saas-landing", "version": "1.0.0"}',
        'src/App.jsx': 'import React from "react"; export default function App() { return <div>SaaS Landing</div>; }'
      }
    },
    // Dashboards
    {
      id: 'analytics-dashboard',
      name: 'Analytics Dashboard',
      description: 'Real-time analytics dashboard with charts and metrics',
      category: 'dashboards',
      tags: ['React', 'Chart.js', 'D3.js', 'WebSocket'],
      preview: '/api/placeholder/400/300',
      popularity: 85,
      createdAt: '2024-01-05',
      files: {
        'package.json': '{"name": "analytics-dashboard", "version": "1.0.0"}',
        'src/App.jsx': 'import React from "react"; export default function App() { return <div>Analytics Dashboard</div>; }'
      }
    },
    // E-commerce
    {
      id: 'online-store',
      name: 'Online Store',
      description: 'Complete e-commerce solution with cart and payments',
      category: 'ecommerce',
      tags: ['React', 'Stripe', 'Firebase', 'Redux'],
      preview: '/api/placeholder/400/300',
      popularity: 92,
      createdAt: '2024-01-03',
      files: {
        'package.json': '{"name": "online-store", "version": "1.0.0"}',
        'src/App.jsx': 'import React from "react"; export default function App() { return <div>Online Store</div>; }'
      }
    },
    // Portfolio
    {
      id: 'creative-portfolio',
      name: 'Creative Portfolio',
      description: 'Stunning portfolio for designers and developers',
      category: 'portfolio',
      tags: ['React', 'Three.js', 'GSAP', 'Framer Motion'],
      preview: '/api/placeholder/400/300',
      popularity: 87,
      createdAt: '2024-01-01',
      files: {
        'package.json': '{"name": "creative-portfolio", "version": "1.0.0"}',
        'src/App.jsx': 'import React from "react"; export default function App() { return <div>Creative Portfolio</div>; }'
      }
    }
  ]

  // Filter and search templates
  const filteredTemplates = templates
    .filter(template => {
      const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory
      const matchesSearch = searchQuery === '' || 
        template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        template.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        template.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      return matchesCategory && matchesSearch
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'popularity':
          return b.popularity - a.popularity
        case 'newest':
          return new Date(b.createdAt) - new Date(a.createdAt)
        case 'name':
          return a.name.localeCompare(b.name)
        default:
          return 0
      }
    })

  const handleUseTemplate = (template) => {
    addFilesToProject(template.files)
    toast.success(`Template "${template.name}" added to your project!`)
  }

  const handlePreviewTemplate = (template) => {
    toast.success(`Previewing "${template.name}"`)
    // In a real app, this would open a preview modal or navigate to preview page
  }

  const handleCopyTemplate = (template) => {
    const templateData = JSON.stringify(template, null, 2)
    navigator.clipboard.writeText(templateData)
    toast.success(`Template "${template.name}" copied to clipboard!`)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Enhanced Header Section */}
      <div className="relative bg-gradient-to-br from-primary/5 via-background to-primary/10 border-b border-border/50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center gap-6 mb-8"
            >
              {/* Icon with enhanced styling */}
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-primary via-primary-light to-primary-dark rounded-2xl flex items-center justify-center shadow-2xl shadow-primary/30">
                  <FileText className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="absolute -inset-2 bg-gradient-to-br from-primary/20 to-primary-light/20 rounded-3xl blur-lg -z-10"></div>
              </div>
              
              {/* Enhanced title with gradient text */}
              <div className="space-y-2">
                <h1 className="text-5xl font-bold bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
                  Template Library
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-light rounded-full mx-auto"></div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-3xl mx-auto mb-12"
            >
              <p className="text-xl text-muted-foreground leading-relaxed mb-4">
                Choose from our collection of professionally designed templates to jumpstart your next project
              </p>
              <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Ready to use</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Modern design</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Fully customizable</span>
                </div>
              </div>
            </motion.div>

            {/* Enhanced Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-lg mx-auto relative"
            >
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <input
                  type="text"
                  placeholder="Search templates by name, technology, or category..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-card/80 backdrop-blur-sm border border-border/60 rounded-2xl focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all duration-300 shadow-lg hover:shadow-xl text-base placeholder:text-muted-foreground"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary-light/5 rounded-2xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
              
              {/* Search suggestions */}
              {searchQuery === '' && (
                <div className="mt-3 flex flex-wrap gap-2 justify-center">
                  {['React', 'Vue', 'Next.js', 'Mobile App', 'Dashboard', 'Landing Page'].map((suggestion) => (
                    <button
                      key={suggestion}
                      onClick={() => setSearchQuery(suggestion)}
                      className="px-3 py-1 text-xs bg-muted/50 hover:bg-primary/10 text-muted-foreground hover:text-primary rounded-full transition-colors duration-200"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </div>
        
        {/* Bottom wave effect */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-background to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters and Controls */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          {/* Category Filter */}
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-muted-foreground" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
            >
              <option value="all">All Categories</option>
              {templateCategories.map(category => (
                <option key={category.id} value={category.id}>{category.name}</option>
              ))}
            </select>
          </div>

          {/* Sort By */}
          <div className="flex items-center gap-2">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
            >
              <option value="popularity">Most Popular</option>
              <option value="newest">Newest First</option>
              <option value="name">Alphabetical</option>
            </select>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-2 ml-auto">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'grid' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-card text-muted-foreground hover:bg-muted'
              }`}
            >
              <Grid className="h-4 w-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'list' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-card text-muted-foreground hover:bg-muted'
              }`}
            >
              <List className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Templates Grid */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTemplates.map((template, index) => (
              <motion.div
                key={template.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group"
              >
                {/* Template Preview */}
                <div className="aspect-video bg-gradient-to-br from-muted/50 to-muted/30 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">{template.name}</p>
                    </div>
                  </div>
                  <div className="absolute top-3 right-3">
                    <div className="flex items-center gap-1 bg-background/80 backdrop-blur-sm px-2 py-1 rounded-full text-xs">
                      <Star className="h-3 w-3 text-warning fill-current" />
                      <span>{template.popularity}%</span>
                    </div>
                  </div>
                </div>

                {/* Template Info */}
                <div className="p-6">
                  <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                    {template.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {template.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {template.tags.slice(0, 3).map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                    {template.tags.length > 3 && (
                      <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
                        +{template.tags.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleUseTemplate(template)}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors text-sm font-medium"
                    >
                      <Rocket className="h-4 w-4" />
                      Use Template
                    </button>
                    <button
                      onClick={() => handlePreviewTemplate(template)}
                      className="px-3 py-2 bg-card border border-border text-foreground rounded-lg hover:bg-muted transition-colors"
                      title="Preview"
                    >
                      <Eye className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleCopyTemplate(template)}
                      className="px-3 py-2 bg-card border border-border text-foreground rounded-lg hover:bg-muted transition-colors"
                      title="Copy"
                    >
                      <Copy className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          /* List View */
          <div className="space-y-4">
            {filteredTemplates.map((template, index) => (
              <motion.div
                key={template.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group"
              >
                <div className="flex items-center gap-6">
                  {/* Preview */}
                  <div className="w-24 h-16 bg-gradient-to-br from-muted/50 to-muted/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="h-6 w-6 text-muted-foreground" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                        {template.name}
                      </h3>
                      <div className="flex items-center gap-1 bg-warning/10 text-warning px-2 py-1 rounded-full text-xs">
                        <Star className="h-3 w-3 fill-current" />
                        <span>{template.popularity}%</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {template.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {template.tags.map(tag => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 flex-shrink-0">
                    <button
                      onClick={() => handleUseTemplate(template)}
                      className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors text-sm font-medium"
                    >
                      <Rocket className="h-4 w-4" />
                      Use Template
                    </button>
                    <button
                      onClick={() => handlePreviewTemplate(template)}
                      className="p-2 bg-card border border-border text-foreground rounded-lg hover:bg-muted transition-colors"
                      title="Preview"
                    >
                      <Eye className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleCopyTemplate(template)}
                      className="p-2 bg-card border border-border text-foreground rounded-lg hover:bg-muted transition-colors"
                      title="Copy"
                    >
                      <Copy className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {filteredTemplates.length === 0 && (
          <div className="text-center py-16">
            <FileText className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">No templates found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search criteria or browse all categories
            </p>
            <button
              onClick={() => {
                setSearchQuery('')
                setSelectedCategory('all')
              }}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Templates
