import React, { useState } from 'react'
import { 
  Calendar, 
  User, 
  ArrowRight, 
  Search,
  Filter,
  Clock,
  Eye,
  Heart
} from 'lucide-react'

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Posts', count: 12 },
    { id: 'tutorials', name: 'Tutorials', count: 5 },
    { id: 'updates', name: 'Platform Updates', count: 3 },
    { id: 'case-studies', name: 'Case Studies', count: 2 },
    { id: 'tips', name: 'Tips & Tricks', count: 2 }
  ]

  const blogPosts = [
    {
      id: 1,
      title: 'Getting Started with DreamBuild: Your First AI-Generated Project',
      excerpt: 'Learn how to create your first project using DreamBuild\'s AI-powered code generation. From concept to deployment in under 10 minutes.',
      author: 'Sarah Chen',
      date: '2024-01-15',
      category: 'tutorials',
      readTime: '8 min read',
      views: 1247,
      likes: 89,
      tags: ['Getting Started', 'AI Builder', 'Tutorial'],
      featured: true
    },
    {
      id: 2,
      title: 'DreamBuild vs Traditional Development: A Performance Comparison',
      excerpt: 'We analyzed 100+ projects to see how DreamBuild compares to traditional development workflows. The results might surprise you.',
      author: 'Marcus Rodriguez',
      date: '2024-01-12',
      category: 'case-studies',
      readTime: '12 min read',
      views: 2156,
      likes: 156,
      tags: ['Performance', 'Comparison', 'Case Study']
    },
    {
      id: 3,
      title: 'New Features: Advanced AI Code Review and Optimization',
      excerpt: 'Introducing our latest AI features that automatically review your code, suggest optimizations, and catch potential bugs before they reach production.',
      author: 'DreamBuild Team',
      date: '2024-01-10',
      category: 'updates',
      readTime: '6 min read',
      views: 1893,
      likes: 203,
      tags: ['New Features', 'AI Review', 'Code Quality']
    },
    {
      id: 4,
      title: '10 Pro Tips for Maximizing Your DreamBuild Workflow',
      excerpt: 'Discover advanced techniques used by our power users to streamline their development process and build projects faster than ever.',
      author: 'Alex Thompson',
      date: '2024-01-08',
      category: 'tips',
      readTime: '10 min read',
      views: 1678,
      likes: 134,
      tags: ['Workflow', 'Productivity', 'Tips']
    },
    {
      id: 5,
      title: 'Building a Full-Stack E-commerce App in 30 Minutes',
      excerpt: 'Follow along as we build a complete e-commerce application using DreamBuild\'s AI builder. Complete with user authentication, product management, and payment processing.',
      author: 'Sarah Chen',
      date: '2024-01-05',
      category: 'tutorials',
      readTime: '15 min read',
      views: 3421,
      likes: 278,
      tags: ['E-commerce', 'Full-Stack', 'Tutorial']
    },
    {
      id: 6,
      title: 'The Future of AI-Assisted Development: What\'s Next for DreamBuild',
      excerpt: 'Get an exclusive look at our roadmap and the exciting new features we\'re developing to revolutionize how developers build software.',
      author: 'DreamBuild Team',
      date: '2024-01-03',
      category: 'updates',
      readTime: '8 min read',
      views: 2987,
      likes: 312,
      tags: ['Roadmap', 'Future', 'AI Development']
    }
  ]

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">DreamBuild Blog</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Insights, tutorials, and updates from the DreamBuild team. Learn how to build faster, 
              deploy smarter, and create amazing applications with AI-powered development.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search blog posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
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

        {/* Featured Post */}
        {filteredPosts.length > 0 && filteredPosts[0]?.featured && (
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-8">
                <div className="flex items-center space-x-2 mb-4">
                  <span className="px-3 py-1 text-xs font-medium bg-primary-100 text-primary-800 rounded-full">
                    Featured
                  </span>
                  <span className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
                    {filteredPosts[0].category}
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {filteredPosts[0].title}
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  {filteredPosts[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{filteredPosts[0].author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(filteredPosts[0].date)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{filteredPosts[0].readTime}</span>
                    </div>
                  </div>
                  <button className="btn-primary">
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.slice(1).map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="px-2 py-1 text-xs bg-blue-50 text-blue-700 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Meta */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{post.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Heart className="w-4 h-4" />
                      <span>{post.likes}</span>
                    </div>
                  </div>
                </div>

                <button className="w-full mt-4 btn-secondary">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Get the latest tutorials, updates, and insights delivered directly to your inbox. 
            Join thousands of developers building amazing things with DreamBuild.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 input-field"
            />
            <button className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
