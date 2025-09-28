import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  BookOpen, Calendar, User, Clock, Tag, Search, Filter,
  ArrowRight, Share, Bookmark, MessageCircle, Heart,
  TrendingUp, Code, Zap, Globe, Database
} from 'lucide-react'

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Posts', count: 24 },
    { id: 'tutorials', name: 'Tutorials', count: 8 },
    { id: 'ai', name: 'AI & ML', count: 6 },
    { id: 'development', name: 'Development', count: 5 },
    { id: 'company', name: 'Company', count: 5 }
  ]

  const featuredPost = {
    id: 1,
    title: 'Getting Started with Local AI Development: A Complete Guide',
    excerpt: 'Learn how to set up Ollama, integrate local AI models, and build your first AI-powered application with DreamBuild.',
    author: 'Ronell Bradley',
    authorAvatar: 'https://via.placeholder.com/40x40/2563eb/ffffff?text=RB',
    publishDate: '2024-01-20',
    readTime: '8 min read',
    category: 'tutorials',
    tags: ['ai', 'ollama', 'tutorial', 'getting-started'],
    featured: true,
    image: 'https://via.placeholder.com/600x300/2563eb/ffffff?text=Local+AI+Guide',
    likes: 156,
    comments: 23,
    views: 2847
  }

  const blogPosts = [
    {
      id: 2,
      title: 'Building a React Native App with AI Code Generation',
      excerpt: 'Discover how to leverage DreamBuild\'s AI capabilities to create a mobile app from scratch.',
      author: 'Sarah Chen',
      authorAvatar: 'https://via.placeholder.com/40x40/10b981/ffffff?text=SC',
      publishDate: '2024-01-18',
      readTime: '6 min read',
      category: 'tutorials',
      tags: ['react-native', 'mobile', 'ai'],
      featured: false,
      image: 'https://via.placeholder.com/400x250/10b981/ffffff?text=React+Native',
      likes: 89,
      comments: 12,
      views: 1523
    },
    {
      id: 3,
      title: 'The Future of AI-Powered Development Tools',
      excerpt: 'Exploring emerging trends and technologies that will shape the future of software development.',
      author: 'Marcus Rodriguez',
      authorAvatar: 'https://via.placeholder.com/40x40/f59e0b/ffffff?text=MR',
      publishDate: '2024-01-15',
      readTime: '10 min read',
      category: 'ai',
      tags: ['ai', 'future', 'technology', 'trends'],
      featured: false,
      image: 'https://via.placeholder.com/400x250/f59e0b/ffffff?text=Future+AI',
      likes: 234,
      comments: 34,
      views: 4567
    },
    {
      id: 4,
      title: 'DreamBuild 2.0: What\'s New and Exciting',
      excerpt: 'Announcing the latest features and improvements in DreamBuild 2.0, including enhanced AI capabilities.',
      author: 'Ronell Bradley',
      authorAvatar: 'https://via.placeholder.com/40x40/2563eb/ffffff?text=RB',
      publishDate: '2024-01-12',
      readTime: '5 min read',
      category: 'company',
      tags: ['release', 'features', 'announcement'],
      featured: false,
      image: 'https://via.placeholder.com/400x250/8b5cf6/ffffff?text=DreamBuild+2.0',
      likes: 167,
      comments: 28,
      views: 3421
    },
    {
      id: 5,
      title: 'Best Practices for AI Code Generation',
      excerpt: 'Learn how to write effective prompts and get the best results from AI code generation tools.',
      author: 'Sarah Chen',
      authorAvatar: 'https://via.placeholder.com/40x40/10b981/ffffff?text=SC',
      publishDate: '2024-01-10',
      readTime: '7 min read',
      category: 'development',
      tags: ['best-practices', 'prompts', 'ai', 'tips'],
      featured: false,
      image: 'https://via.placeholder.com/400x250/06b6d4/ffffff?text=Best+Practices',
      likes: 145,
      comments: 19,
      views: 2890
    },
    {
      id: 6,
      title: 'Setting Up Your Development Environment for AI',
      excerpt: 'A comprehensive guide to configuring your development environment for optimal AI-assisted coding.',
      author: 'Marcus Rodriguez',
      authorAvatar: 'https://via.placeholder.com/40x40/f59e0b/ffffff?text=MR',
      publishDate: '2024-01-08',
      readTime: '9 min read',
      category: 'tutorials',
      tags: ['setup', 'environment', 'development', 'tools'],
      featured: false,
      image: 'https://via.placeholder.com/400x250/ec4899/ffffff?text=Dev+Environment',
      likes: 98,
      comments: 15,
      views: 1876
    },
    {
      id: 7,
      title: 'Community Spotlight: Amazing Projects Built with DreamBuild',
      excerpt: 'Highlighting some of the incredible projects our community has created using DreamBuild.',
      author: 'Community Team',
      authorAvatar: 'https://via.placeholder.com/40x40/ef4444/ffffff?text=CT',
      publishDate: '2024-01-05',
      readTime: '6 min read',
      category: 'company',
      tags: ['community', 'showcase', 'projects', 'spotlight'],
      featured: false,
      image: 'https://via.placeholder.com/400x250/84cc16/ffffff?text=Community+Projects',
      likes: 203,
      comments: 41,
      views: 5234
    }
  ]

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'tutorials': return Code
      case 'ai': return Zap
      case 'development': return Globe
      case 'company': return TrendingUp
      default: return BookOpen
    }
  }

  const getCategoryColor = (category) => {
    switch (category) {
      case 'tutorials': return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'ai': return 'bg-purple-100 text-purple-800 border-purple-200'
      case 'development': return 'bg-green-100 text-green-800 border-green-200'
      case 'company': return 'bg-orange-100 text-orange-800 border-orange-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Blog</h1>
              <p className="text-muted-foreground">Insights, tutorials, and updates from the DreamBuild team</p>
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
                  placeholder="Search blog posts..."
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
          </div>
        </div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-200">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-medium">
                    Featured
                  </span>
                  <span className={`px-3 py-1 text-sm font-medium rounded-full border ${getCategoryColor(featuredPost.category)}`}>
                    {featuredPost.category}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 hover:text-primary transition-colors cursor-pointer">
                  {featuredPost.title}
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <img
                      src={featuredPost.authorAvatar}
                      alt={featuredPost.author}
                      className="w-6 h-6 rounded-full"
                    />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{featuredPost.publishDate}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    {featuredPost.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Heart className="h-4 w-4" />
                      <span>{featuredPost.likes}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MessageCircle className="h-4 w-4" />
                      <span>{featuredPost.comments}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post, index) => {
            const CategoryIcon = getCategoryIcon(post.category)
            return (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-200 group"
              >
                {/* Image */}
                <div className="relative h-48 bg-muted/50">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getCategoryColor(post.category)}`}>
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <CategoryIcon className="h-4 w-4 text-primary" />
                    <span className="text-sm text-primary font-medium">{post.category}</span>
                  </div>

                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors cursor-pointer mb-3 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Author and Meta */}
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={post.authorAvatar}
                      alt={post.author}
                      className="w-8 h-8 rounded-full"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">{post.author}</p>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span>{post.publishDate}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Stats and Actions */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Heart className="h-4 w-4" />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="h-4 w-4" />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                        <Bookmark className="h-4 w-4" />
                      </button>
                      <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                        <Share className="h-4 w-4" />
                      </button>
                      <button className="flex items-center gap-1 text-primary hover:text-primary-dark transition-colors">
                        <span className="text-sm font-medium">Read</span>
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="h-12 w-12 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">No posts found</h3>
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

        {/* Newsletter Signup */}
        <div className="mt-16 bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">Stay Updated</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest tutorials, updates, and insights from the DreamBuild team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
