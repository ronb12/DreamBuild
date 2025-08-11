import React, { useState } from 'react'
import { 
  Search, 
  BookOpen, 
  Video, 
  MessageSquare, 
  ChevronDown,
  ChevronRight,
  FileText,
  Download,
  Star,
  Clock,
  Eye
} from 'lucide-react'

const Help = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedSection, setExpandedSection] = useState('getting-started')

  const toggleSection = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId)
  }

  const helpSections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: BookOpen,
      articles: [
        {
          title: 'Creating Your First Project',
          description: 'Step-by-step guide to create your first AI-generated project',
          type: 'guide',
          readTime: '5 min',
          difficulty: 'Beginner'
        },
        {
          title: 'Understanding the Dashboard',
          description: 'Learn how to navigate and use the DreamBuild dashboard effectively',
          type: 'guide',
          readTime: '3 min',
          difficulty: 'Beginner'
        },
        {
          title: 'Setting Up Your Development Environment',
          description: 'Configure your local development environment for DreamBuild projects',
          type: 'guide',
          readTime: '8 min',
          difficulty: 'Intermediate'
        }
      ]
    },
    {
      id: 'ai-builder',
      title: 'AI Builder',
      icon: BookOpen,
      articles: [
        {
          title: 'Writing Effective AI Prompts',
          description: 'Learn how to write prompts that generate better code',
          type: 'guide',
          readTime: '7 min',
          difficulty: 'Intermediate'
        },
        {
          title: 'Customizing Generated Code',
          description: 'How to modify and extend AI-generated code to fit your needs',
          type: 'guide',
          readTime: '10 min',
          difficulty: 'Intermediate'
        },
        {
          title: 'AI Code Review Best Practices',
          description: 'Best practices for reviewing and validating AI-generated code',
          type: 'guide',
          readTime: '6 min',
          difficulty: 'Advanced'
        }
      ]
    },
    {
      id: 'build-tools',
      title: 'Build Tools',
      icon: BookOpen,
      articles: [
        {
          title: 'Building React Applications',
          description: 'Complete guide to building React apps with DreamBuild',
          type: 'guide',
          readTime: '12 min',
          difficulty: 'Intermediate'
        },
        {
          title: 'Building Node.js Backends',
          description: 'How to build and configure Node.js backend services',
          type: 'guide',
          readTime: '15 min',
          difficulty: 'Intermediate'
        },
        {
          title: 'Building Mobile Apps',
          description: 'Guide to building cross-platform mobile applications',
          type: 'guide',
          readTime: '18 min',
          difficulty: 'Advanced'
        }
      ]
    },
    {
      id: 'deployment',
      title: 'Deployment',
      icon: BookOpen,
      articles: [
        {
          title: 'Deploying to Production',
          description: 'Step-by-step deployment guide for production environments',
          type: 'guide',
          readTime: '10 min',
          difficulty: 'Intermediate'
        },
        {
          title: 'Environment Configuration',
          description: 'How to configure different deployment environments',
          type: 'guide',
          readTime: '8 min',
          difficulty: 'Intermediate'
        },
        {
          title: 'Monitoring and Logs',
          description: 'Set up monitoring and view application logs',
          type: 'guide',
          readTime: '6 min',
          difficulty: 'Intermediate'
        }
      ]
    },
    {
      id: 'troubleshooting',
      title: 'Troubleshooting',
      icon: BookOpen,
      articles: [
        {
          title: 'Common Build Errors',
          description: 'Solutions to frequently encountered build issues',
          type: 'guide',
          readTime: '8 min',
          difficulty: 'All Levels'
        },
        {
          title: 'Deployment Issues',
          description: 'Troubleshooting common deployment problems',
          type: 'guide',
          readTime: '6 min',
          difficulty: 'All Levels'
        },
        {
          title: 'Performance Optimization',
          description: 'Tips for optimizing your DreamBuild projects',
          type: 'guide',
          readTime: '12 min',
          difficulty: 'Advanced'
        }
      ]
    }
  ]

  const quickActions = [
    {
      title: 'Video Tutorials',
      description: 'Watch step-by-step video guides',
      icon: Video,
      href: '/docs',
      color: 'bg-blue-500'
    },
    {
      title: 'Live Chat Support',
      description: 'Get help from our support team',
      icon: MessageSquare,
      href: '/contact',
      color: 'bg-green-500'
    },
    {
      title: 'Download Documentation',
      description: 'PDF guides and reference materials',
      icon: Download,
      href: '/docs',
      color: 'bg-purple-500'
    },
    {
      title: 'Community Forum',
      description: 'Connect with other developers',
      href: '/community',
      icon: MessageSquare,
      color: 'bg-orange-500'
    }
  ]

  const popularArticles = [
    {
      title: 'How to Deploy Your First App in 5 Minutes',
      views: 15420,
      rating: 4.8,
      category: 'Deployment'
    },
    {
      title: 'AI Prompt Engineering: Best Practices',
      views: 12850,
      rating: 4.9,
      category: 'AI Builder'
    },
    {
      title: 'Building a Full-Stack App from Scratch',
      views: 11230,
      rating: 4.7,
      category: 'Build Tools'
    },
    {
      title: 'Troubleshooting Common Build Errors',
      views: 9870,
      rating: 4.6,
      category: 'Troubleshooting'
    }
  ]

  const filteredSections = helpSections.filter(section =>
    section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.articles.some(article =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Help Center</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Find answers to your questions, learn best practices, and get the most out of DreamBuild. 
              Our comprehensive help center covers everything from getting started to advanced features.
            </p>
            
            {/* Search */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for help articles, guides, and tutorials..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Actions */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <a
                key={index}
                href={action.href}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
              >
                <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center mb-4`}>
                  <action.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{action.title}</h3>
                <p className="text-gray-600 text-sm">{action.description}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Popular Articles */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {popularArticles.map((article, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-start justify-between mb-3">
                  <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                    {article.category}
                  </span>
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span>{article.rating}</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{article.title}</h3>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Eye className="w-4 h-4" />
                    <span>{article.views.toLocaleString()} views</span>
                  </div>
                  <button className="text-primary-600 hover:text-primary-700 font-medium">
                    Read Article →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Help Sections */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Help Topics</h2>
          <div className="space-y-4">
            {filteredSections.map((section) => (
              <div key={section.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <section.icon className="w-6 h-6 text-primary-600" />
                      <h3 className="text-lg font-semibold text-gray-900">{section.title}</h3>
                      <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
                        {section.articles.length} articles
                      </span>
                    </div>
                    {expandedSection === section.id ? (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </button>
                
                {expandedSection === section.id && (
                  <div className="border-t border-gray-200 px-6 py-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {section.articles.map((article, articleIndex) => (
                        <div key={articleIndex} className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors">
                          <div className="flex items-center space-x-2 mb-2">
                            <FileText className="w-4 h-4 text-blue-500" />
                            <span className="text-xs font-medium text-blue-600">{article.type}</span>
                          </div>
                          <h4 className="font-semibold text-gray-900 mb-2">{article.title}</h4>
                          <p className="text-sm text-gray-600 mb-3">{article.description}</p>
                          <div className="flex items-center justify-between text-xs text-gray-500">
                            <div className="flex items-center space-x-1">
                              <Clock className="w-3 h-3" />
                              <span>{article.readTime}</span>
                            </div>
                            <span className="px-2 py-1 bg-gray-100 rounded">{article.difficulty}</span>
                          </div>
                          <button className="block mt-3 text-sm text-primary-600 hover:text-primary-700 font-medium">
                            Read Guide →
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Still Need Help */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Still Need Help?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Can't find what you're looking for? Our support team is here to help. 
            Get in touch and we'll get back to you as soon as possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary">
              Contact Support
            </a>
            <a href="/docs" className="btn-secondary">
              View Full Documentation
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Help
