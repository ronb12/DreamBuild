import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Code2, FileText, Globe, Smartphone, Database, Zap,
  Copy, Download, ExternalLink, Play, Star, Github,
  Search, Filter, Grid, List, Tag, Calendar
} from 'lucide-react'

const Examples = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [viewMode, setViewMode] = useState('grid')

  const categories = [
    { id: 'all', name: 'All Examples', count: 24 },
    { id: 'web', name: 'Web Apps', count: 8 },
    { id: 'mobile', name: 'Mobile Apps', count: 6 },
    { id: 'api', name: 'APIs', count: 5 },
    { id: 'dashboard', name: 'Dashboards', count: 5 }
  ]

  const examples = [
    {
      id: 1,
      title: 'E-commerce Store',
      description: 'Full-featured online store with React, Node.js, and Stripe integration',
      category: 'web',
      difficulty: 'Intermediate',
      tags: ['React', 'Node.js', 'Stripe', 'MongoDB'],
      stars: 156,
      language: 'JavaScript',
      preview: 'https://via.placeholder.com/400x250/2563eb/ffffff?text=E-commerce+Store',
      github: 'https://github.com/example/ecommerce-store'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management with real-time updates and team features',
      category: 'web',
      difficulty: 'Beginner',
      tags: ['Vue.js', 'Firebase', 'Real-time'],
      stars: 89,
      language: 'JavaScript',
      preview: 'https://via.placeholder.com/400x250/10b981/ffffff?text=Task+Manager',
      github: 'https://github.com/example/task-manager'
    },
    {
      id: 3,
      title: 'Fitness Tracker',
      description: 'Mobile app for tracking workouts, nutrition, and fitness goals',
      category: 'mobile',
      difficulty: 'Intermediate',
      tags: ['React Native', 'GraphQL', 'Health API'],
      stars: 234,
      language: 'TypeScript',
      preview: 'https://via.placeholder.com/400x250/f59e0b/ffffff?text=Fitness+Tracker',
      github: 'https://github.com/example/fitness-tracker'
    },
    {
      id: 4,
      title: 'Analytics Dashboard',
      description: 'Business intelligence dashboard with charts, metrics, and reporting',
      category: 'dashboard',
      difficulty: 'Advanced',
      tags: ['D3.js', 'Python', 'PostgreSQL'],
      stars: 312,
      language: 'Python',
      preview: 'https://via.placeholder.com/400x250/8b5cf6/ffffff?text=Analytics+Dashboard',
      github: 'https://github.com/example/analytics-dashboard'
    },
    {
      id: 5,
      title: 'REST API Template',
      description: 'Production-ready REST API with authentication, validation, and documentation',
      category: 'api',
      difficulty: 'Intermediate',
      tags: ['Express.js', 'JWT', 'Swagger'],
      stars: 178,
      language: 'JavaScript',
      preview: 'https://via.placeholder.com/400x250/ef4444/ffffff?text=REST+API',
      github: 'https://github.com/example/rest-api-template'
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'Modern portfolio website with animations, blog, and contact form',
      category: 'web',
      difficulty: 'Beginner',
      tags: ['Next.js', 'Tailwind', 'Framer Motion'],
      stars: 67,
      language: 'TypeScript',
      preview: 'https://via.placeholder.com/400x250/06b6d4/ffffff?text=Portfolio',
      github: 'https://github.com/example/portfolio-website'
    },
    {
      id: 7,
      title: 'Social Media App',
      description: 'Instagram-like social media app with posts, stories, and messaging',
      category: 'mobile',
      difficulty: 'Advanced',
      tags: ['Flutter', 'Firebase', 'Real-time'],
      stars: 445,
      language: 'Dart',
      preview: 'https://via.placeholder.com/400x250/ec4899/ffffff?text=Social+App',
      github: 'https://github.com/example/social-media-app'
    },
    {
      id: 8,
      title: 'GraphQL API',
      description: 'Modern GraphQL API with subscriptions, caching, and real-time updates',
      category: 'api',
      difficulty: 'Advanced',
      tags: ['GraphQL', 'Apollo', 'Redis'],
      stars: 298,
      language: 'TypeScript',
      preview: 'https://via.placeholder.com/400x250/84cc16/ffffff?text=GraphQL+API',
      github: 'https://github.com/example/graphql-api'
    }
  ]

  const filteredExamples = examples.filter(example => {
    const matchesSearch = example.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         example.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         example.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === 'all' || example.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800 border-green-200'
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'Advanced': return 'bg-red-100 text-red-800 border-red-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'web': return Globe
      case 'mobile': return Smartphone
      case 'api': return Database
      case 'dashboard': return FileText
      default: return Code2
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
              <Code2 className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Examples</h1>
              <p className="text-muted-foreground">Explore real-world projects and code examples</p>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col md:flex-row gap-4 flex-1">
              {/* Search */}
              <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search examples..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
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
                  viewMode === 'grid' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Grid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'list' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Examples Grid/List */}
        <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
          {filteredExamples.map((example, index) => {
            const CategoryIcon = getCategoryIcon(example.category)
            return (
              <motion.div
                key={example.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-200 group ${
                  viewMode === 'list' ? 'flex' : ''
                }`}
              >
                {/* Preview Image */}
                <div className={`relative ${viewMode === 'list' ? 'w-48 h-32' : 'h-48'} bg-muted/50`}>
                  <img
                    src={example.preview}
                    alt={example.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 flex gap-2">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getDifficultyColor(example.difficulty)}`}>
                      {example.difficulty}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-200 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="flex gap-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-primary text-primary-foreground rounded-lg shadow-lg"
                        title="Run Example"
                      >
                        <Play className="h-4 w-4" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-white text-gray-900 rounded-lg shadow-lg"
                        title="Copy Code"
                      >
                        <Copy className="h-4 w-4" />
                      </motion.button>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`p-4 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                        <CategoryIcon className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {example.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{example.language}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Star className="h-4 w-4" />
                      <span>{example.stars}</span>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">
                    {example.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {example.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <button className="flex items-center gap-2 px-3 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors text-sm">
                      <Play className="h-4 w-4" />
                      Run
                    </button>
                    <a
                      href={example.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 border border-border rounded-lg hover:bg-muted transition-colors text-sm"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                    <button className="flex items-center gap-2 px-3 py-2 border border-border rounded-lg hover:bg-muted transition-colors text-sm">
                      <Download className="h-4 w-4" />
                      Download
                    </button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Empty State */}
        {filteredExamples.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Code2 className="h-12 w-12 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">No examples found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search or filter criteria
            </p>
            <button
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('all')
              }}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-12 bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">Have a great example to share?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Share your projects with the DreamBuild community and help other developers learn and grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors">
              <Github className="h-5 w-5" />
              Submit Example
            </button>
            <button className="flex items-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors">
              <ExternalLink className="h-5 w-5" />
              View Guidelines
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Examples
