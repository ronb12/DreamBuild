import React, { useState } from 'react'
import { 
  BookOpen, 
  Code, 
  Play, 
  Globe, 
  Database, 
  Smartphone, 
  Zap, 
  Search,
  ChevronRight,
  ExternalLink,
  FileText,
  Video,
  Download
} from 'lucide-react'

const Docs = () => {
  const [activeSection, setActiveSection] = useState('getting-started')
  const [searchQuery, setSearchQuery] = useState('')

  const sections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: Play,
      content: [
        { title: 'Quick Start Guide', description: 'Get up and running in 5 minutes', time: '5 min read' },
        { title: 'Installation', description: 'Install DreamBuild on your system', time: '3 min read' },
        { title: 'First Project', description: 'Create your first AI-powered project', time: '7 min read' }
      ]
    },
    {
      id: 'ai-builder',
      title: 'AI Builder',
      icon: Code,
      content: [
        { title: 'Writing Prompts', description: 'Learn to write effective AI prompts', time: '10 min read' },
        { title: 'Code Generation', description: 'Generate code in any language', time: '8 min read' },
        { title: 'Best Practices', description: 'Tips for optimal AI results', time: '12 min read' }
      ]
    },
    {
      id: 'build-tools',
      title: 'Build Tools',
      icon: Zap,
      content: [
        { title: 'Project Building', description: 'Build projects automatically', time: '6 min read' },
        { title: 'Deployment', description: 'Deploy to various platforms', time: '9 min read' },
        { title: 'CI/CD Integration', description: 'Set up continuous integration', time: '15 min read' }
      ]
    },
    {
      id: 'platforms',
      title: 'Platform Support',
      icon: Globe,
      content: [
        { title: 'Web Applications', description: 'Build React, Vue, Angular apps', time: '8 min read' },
        { title: 'Mobile Apps', description: 'iOS and Android development', time: '10 min read' },
        { title: 'Backend Services', description: 'API and server development', time: '12 min read' }
      ]
    },
    {
      id: 'databases',
      title: 'Database Integration',
      icon: Database,
      content: [
        { title: 'SQL Databases', description: 'MySQL, PostgreSQL, SQLite', time: '7 min read' },
        { title: 'NoSQL Databases', description: 'MongoDB, Redis, Cassandra', time: '8 min read' },
        { title: 'ORM Setup', description: 'Configure database connections', time: '6 min read' }
      ]
    },
    {
      id: 'mobile',
      title: 'Mobile Development',
      icon: Smartphone,
      content: [
        { title: 'React Native', description: 'Cross-platform mobile apps', time: '11 min read' },
        { title: 'Flutter', description: 'Google\'s UI framework', time: '9 min read' },
        { title: 'Native Development', description: 'iOS and Android native', time: '14 min read' }
      ]
    }
  ]

  const quickActions = [
    {
      title: 'API Reference',
      description: 'Complete API documentation',
      icon: FileText,
      href: '/api',
      color: 'bg-blue-500'
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides',
      icon: Video,
      href: '/tutorials',
      color: 'bg-green-500'
    },
    {
      title: 'Download SDK',
      description: 'Get the latest SDK',
      icon: Download,
      href: '/downloads',
      color: 'bg-purple-500'
    },
    {
      title: 'Community Forum',
      description: 'Get help from the community',
      icon: ExternalLink,
      href: '/community',
      color: 'bg-orange-500'
    }
  ]

  const filteredSections = sections.filter(section =>
    section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.content.some(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center space-x-3 mb-4">
            <BookOpen className="w-8 h-8 text-primary-600" />
            <h1 className="text-3xl font-bold text-gray-900">Documentation</h1>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl">
            Learn how to use DreamBuild to create amazing applications. From getting started to advanced features, 
            we've got you covered with comprehensive guides and examples.
          </p>
          
          {/* Search */}
          <div className="mt-6 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Contents</h3>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSection === section.id
                        ? 'bg-primary-100 text-primary-700'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center">
                      <section.icon className="w-4 h-4 mr-2" />
                      {section.title}
                    </div>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {quickActions.map((action, index) => (
                <a
                  key={index}
                  href={action.href}
                  className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <div className={`inline-flex p-2 rounded-lg ${action.color} mb-3`}>
                    <action.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-medium text-gray-900 mb-1">{action.title}</h3>
                  <p className="text-sm text-gray-600">{action.description}</p>
                </a>
              ))}
            </div>

            {/* Section Content */}
            {filteredSections.map((section) => (
              <div
                key={section.id}
                className={`bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6 ${
                  activeSection === section.id ? 'block' : 'hidden'
                }`}
              >
                <div className="flex items-center mb-6">
                  <div className="p-2 bg-primary-100 rounded-lg mr-4">
                    <section.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                    <p className="text-gray-600">
                      {section.id === 'getting-started' && 'Start your journey with DreamBuild'}
                      {section.id === 'ai-builder' && 'Learn to harness the power of AI code generation'}
                      {section.id === 'build-tools' && 'Master the build and deployment process'}
                      {section.id === 'platforms' && 'Build for any platform or framework'}
                      {section.id === 'databases' && 'Integrate with any database system'}
                      {section.id === 'mobile' && 'Create mobile applications with ease'}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {section.content.map((item, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-colors">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-medium text-gray-900">{item.title}</h3>
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">{item.time}</span>
                        <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                          Read Guide
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Getting Started Section (Default) */}
            {activeSection === 'getting-started' && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Start Guide</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">1. Install DreamBuild</h3>
                    <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                      <div>npm install -g dreambuild</div>
                      <div># or</div>
                      <div>yarn global add dreambuild</div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">2. Create Your First Project</h3>
                    <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                      <div>dreambuild create my-app</div>
                      <div>cd my-app</div>
                      <div>dreambuild ai generate</div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">3. Build and Deploy</h3>
                    <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                      <div>dreambuild build</div>
                      <div>dreambuild deploy</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h4 className="font-medium text-blue-900 mb-2">💡 Pro Tip</h4>
                  <p className="text-blue-800 text-sm">
                    Use the AI Builder to describe your app idea in plain English, and DreamBuild will generate 
                    the initial code structure for you. It's like having a senior developer on your team!
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Docs
