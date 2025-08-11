import React, { useState } from 'react'
import { 
  HelpCircle, 
  MessageSquare, 
  Search,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  Users,
  Zap,
  Shield,
  Code,
  Eye
} from 'lucide-react'

const Support = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedCategories, setExpandedCategories] = useState(new Set(['getting-started']))

  const toggleCategory = (categoryId) => {
    const newExpanded = new Set(expandedCategories)
    if (newExpanded.has(categoryId)) {
      newExpanded.delete(categoryId)
    } else {
      newExpanded.add(categoryId)
    }
    setExpandedCategories(newExpanded)
  }

  const supportCategories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: Zap,
      articles: [
        {
          title: 'Creating Your First Project',
          description: 'Step-by-step guide to create your first AI-powered project',
          type: 'guide',
          readTime: '5 min read'
        },
        {
          title: 'Understanding the AI Builder',
          description: 'Learn how to effectively use our AI-powered development tools',
          type: 'tutorial',
          readTime: '8 min read'
        },
        {
          title: 'Account Setup and Configuration',
          description: 'Complete guide to setting up your DreamBuild account',
          type: 'guide',
          readTime: '3 min read'
        }
      ]
    },
    {
      id: 'ai-builder',
      title: 'AI Builder',
      icon: Code,
      articles: [
        {
          title: 'Writing Effective Prompts',
          description: 'Tips and best practices for getting the best results from AI',
          type: 'tutorial',
          readTime: '6 min read'
        },
        {
          title: 'AI Code Generation',
          description: 'Understanding how AI generates and optimizes code',
          type: 'guide',
          readTime: '7 min read'
        },
        {
          title: 'Customizing AI Behavior',
          description: 'How to tailor AI responses to your specific needs',
          type: 'tutorial',
          readTime: '4 min read'
        }
      ]
    },
    {
      id: 'projects',
      title: 'Projects & Deployment',
      icon: Shield,
      articles: [
        {
          title: 'Project Management',
          description: 'Organize and manage your development projects effectively',
          type: 'guide',
          readTime: '6 min read'
        },
        {
          title: 'Building and Testing',
          description: 'Build, test, and debug your projects',
          type: 'tutorial',
          readTime: '9 min read'
        },
        {
          title: 'Deployment Options',
          description: 'Deploy your projects to various platforms and services',
          type: 'guide',
          readTime: '5 min read'
        }
      ]
    },
    {
      id: 'account',
      title: 'Account & Billing',
      icon: Users,
      articles: [
        {
          title: 'Subscription Plans',
          description: 'Compare features and pricing across different plans',
          type: 'guide',
          readTime: '4 min read'
        },
        {
          title: 'Team Collaboration',
          description: 'Work together with your team on projects',
          type: 'tutorial',
          readTime: '7 min read'
        },
        {
          title: 'Billing and Invoices',
          description: 'Manage your billing information and view invoices',
          type: 'guide',
          readTime: '3 min read'
        }
      ]
    }
  ]

  const videoTutorials = [
    {
      title: 'Getting Started with DreamBuild',
      description: 'Complete walkthrough of the platform',
      duration: '12:34',
      thumbnail: '🎥',
      url: '#'
    },
    {
      title: 'AI Builder Deep Dive',
      description: 'Advanced techniques for AI-powered development',
      duration: '18:45',
      thumbnail: '🎥',
      url: '#'
    },
    {
      title: 'Project Deployment Guide',
      description: 'Deploy your projects to production',
      duration: '15:22',
      thumbnail: '🎥',
      url: '#'
    }
  ]

  const quickActions = [
    {
      title: 'Contact Support',
      description: 'Get help from our support team',
      icon: MessageSquare,
      action: 'Contact',
      url: '/contact'
    },
    {
      title: 'Report a Bug',
      description: 'Help us improve by reporting issues',
      icon: HelpCircle,
      action: 'Report',
      url: '#'
    },
    {
      title: 'Feature Request',
      description: 'Suggest new features for DreamBuild',
      icon: Zap,
      action: 'Request',
      url: '#'
    },
    {
      title: 'Community Forum',
      description: 'Connect with other developers',
      icon: Users,
      action: 'Join',
      url: '#'
    }
  ]

  const filteredCategories = supportCategories.map(category => ({
    ...category,
    articles: category.articles.filter(article =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.articles.length > 0)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-10 h-10 text-primary-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Support Center</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to your questions, learn new features, and get the most out of DreamBuild. 
              Our comprehensive support resources are here to help you succeed.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search */}
        <div className="mb-12">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for help articles, tutorials, and guides..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <action.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{action.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{action.description}</p>
                <a href={action.url} className="btn-primary text-sm">
                  {action.action}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Help Articles */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Help Articles & Guides</h2>
          <div className="space-y-4">
            {filteredCategories.map((category) => (
              <div key={category.id} className="bg-white rounded-lg shadow-sm border border-gray-200">
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                      <category.icon className="w-5 h-5 text-primary-600" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
                      <p className="text-sm text-gray-600">{category.articles.length} articles</p>
                    </div>
                  </div>
                  {expandedCategories.has(category.id) ? (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                
                {expandedCategories.has(category.id) && (
                  <div className="border-t border-gray-200 px-6 py-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {category.articles.map((article, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-colors">
                          <div className="flex items-start justify-between mb-2">
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                              article.type === 'guide' ? 'bg-blue-100 text-blue-800' :
                              article.type === 'tutorial' ? 'bg-green-100 text-green-800' :
                              'bg-gray-100 text-gray-800'
                            }`}>
                              {article.type}
                            </span>
                            <span className="text-xs text-gray-500">{article.readTime}</span>
                          </div>
                          <h4 className="font-medium text-gray-900 mb-2">{article.title}</h4>
                          <p className="text-sm text-gray-600 mb-3">{article.description}</p>
                          <button className="text-primary-600 hover:text-primary-700 text-sm font-medium flex items-center space-x-1">
                            <span>Read article</span>
                            <ExternalLink className="w-3 h-3" />
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

        {/* Video Tutorials */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Video Tutorials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videoTutorials.map((video, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-video bg-gray-100 flex items-center justify-center text-4xl">
                  {video.thumbnail}
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-500">{video.duration}</span>
                    <Eye className="w-4 h-4 text-primary-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{video.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{video.description}</p>
                  <a href={video.url} className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                    Watch tutorial →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Resources */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Still Need Help?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Can't find what you're looking for? Our support team is here to help you get the most out of DreamBuild.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary">
              Contact Support
            </a>
            <a href="/docs" className="btn-secondary">
              View Documentation
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Support
