import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  BookOpen, Code, Zap, Terminal, FileText, ExternalLink,
  ChevronRight, Search, Download, Github, Globe, Settings
} from 'lucide-react'

const Documentation = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeSection, setActiveSection] = useState('getting-started')

  const sections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: Zap,
      articles: [
        { title: 'Quick Start Guide', description: 'Get up and running in 5 minutes' },
        { title: 'Installation', description: 'Install DreamBuild on your system' },
        { title: 'First Project', description: 'Create your first AI-generated project' },
        { title: 'Basic Concepts', description: 'Understanding the DreamBuild workflow' }
      ]
    },
    {
      id: 'ai-features',
      title: 'AI Features',
      icon: Code,
      articles: [
        { title: 'Code Generation', description: 'Generate code with AI assistance' },
        { title: 'Local AI Setup', description: 'Set up Ollama for offline AI' },
        { title: 'Template System', description: 'Use pre-built project templates' },
        { title: 'AI Models', description: 'Available AI models and capabilities' }
      ]
    },
    {
      id: 'api-reference',
      title: 'API Reference',
      icon: Terminal,
      articles: [
        { title: 'REST API', description: 'Complete API documentation' },
        { title: 'WebSocket API', description: 'Real-time communication' },
        { title: 'Authentication', description: 'API authentication methods' },
        { title: 'Rate Limits', description: 'API usage limits and quotas' }
      ]
    },
    {
      id: 'deployment',
      title: 'Deployment',
      icon: Globe,
      articles: [
        { title: 'Firebase Hosting', description: 'Deploy to Firebase' },
        { title: 'GitHub Pages', description: 'Deploy to GitHub Pages' },
        { title: 'Custom Domain', description: 'Set up custom domains' },
        { title: 'CI/CD Pipeline', description: 'Automated deployment workflows' }
      ]
    }
  ]

  const quickLinks = [
    { title: 'API Documentation', href: '#', icon: Code },
    { title: 'GitHub Repository', href: 'https://github.com/ronb12/DreamBuild', icon: Github },
    { title: 'Community Forum', href: '#', icon: Globe },
    { title: 'Video Tutorials', href: '#', icon: ExternalLink }
  ]

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
              <h1 className="text-3xl font-bold text-foreground">Documentation</h1>
              <p className="text-muted-foreground">Complete guides and API references for DreamBuild</p>
            </div>
          </div>

          {/* Search */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search documentation..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-2">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">
                Sections
              </h3>
              {sections.map((section) => {
                const Icon = section.icon
                return (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                      activeSection === section.id
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="text-sm font-medium">{section.title}</span>
                  </button>
                )
              })}

              {/* Quick Links */}
              <div className="mt-8 pt-6 border-t border-border">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">
                  Quick Links
                </h3>
                <div className="space-y-2">
                  {quickLinks.map((link) => {
                    const Icon = link.icon
                    return (
                      <a
                        key={link.title}
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center gap-3 px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                      >
                        <Icon className="h-4 w-4" />
                        <span>{link.title}</span>
                        {link.href.startsWith('http') && <ExternalLink className="h-3 w-3 ml-auto" />}
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-card border border-border rounded-xl p-6">
              {sections.map((section) => {
                const Icon = section.icon
                return (
                  <div key={section.id} className={activeSection === section.id ? 'block' : 'hidden'}>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-foreground">{section.title}</h2>
                        <p className="text-muted-foreground">Learn about {section.title.toLowerCase()}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {section.articles.map((article, index) => (
                        <motion.div
                          key={article.title}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="p-4 border border-border rounded-lg hover:shadow-md transition-all duration-200 cursor-pointer group"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                                {article.title}
                              </h3>
                              <p className="text-sm text-muted-foreground mb-3">
                                {article.description}
                              </p>
                            </div>
                            <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Getting Started Section */}
            {activeSection === 'getting-started' && (
              <div className="mt-8 bg-primary/5 border border-primary/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Ready to get started?</h3>
                <p className="text-muted-foreground mb-4">
                  Follow our quick start guide to create your first AI-generated project in minutes.
                </p>
                <div className="flex gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors">
                    <Zap className="h-4 w-4" />
                    Quick Start Guide
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors">
                    <Download className="h-4 w-4" />
                    Download PDF
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Documentation
