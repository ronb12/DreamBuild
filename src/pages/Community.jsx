import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Users, MessageSquare, Github, Twitter, Mail, Calendar,
  TrendingUp, Heart, MessageCircle, Share, Bookmark,
  Filter, Search, Plus, Award, Zap, Code, Globe
} from 'lucide-react'

const Community = () => {
  const [activeTab, setActiveTab] = useState('discussions')
  const [searchTerm, setSearchTerm] = useState('')

  const tabs = [
    { id: 'discussions', name: 'Discussions', count: 156, icon: MessageSquare },
    { id: 'projects', name: 'Showcase', count: 89, icon: Code },
    { id: 'events', name: 'Events', count: 12, icon: Calendar },
    { id: 'resources', name: 'Resources', count: 45, icon: Bookmark }
  ]

  const discussions = [
    {
      id: 1,
      title: 'How to set up Ollama for local AI development?',
      author: 'Alex Chen',
      avatar: 'https://via.placeholder.com/40x40/2563eb/ffffff?text=AC',
      time: '2 hours ago',
      category: 'Getting Started',
      replies: 12,
      likes: 24,
      isPinned: true,
      tags: ['ollama', 'local-ai', 'setup']
    },
    {
      id: 2,
      title: 'Building a React Native app with DreamBuild - Tips and tricks',
      author: 'Sarah Johnson',
      avatar: 'https://via.placeholder.com/40x40/10b981/ffffff?text=SJ',
      time: '4 hours ago',
      category: 'Mobile Development',
      replies: 8,
      likes: 18,
      isPinned: false,
      tags: ['react-native', 'mobile', 'tips']
    },
    {
      id: 3,
      title: 'Share your DreamBuild projects - Monthly showcase',
      author: 'Community Team',
      avatar: 'https://via.placeholder.com/40x40/f59e0b/ffffff?text=CT',
      time: '1 day ago',
      category: 'Showcase',
      replies: 34,
      likes: 67,
      isPinned: true,
      tags: ['showcase', 'projects', 'monthly']
    },
    {
      id: 4,
      title: 'API rate limits and best practices',
      author: 'Mike Rodriguez',
      avatar: 'https://via.placeholder.com/40x40/8b5cf6/ffffff?text=MR',
      time: '2 days ago',
      category: 'API',
      replies: 15,
      likes: 31,
      isPinned: false,
      tags: ['api', 'rate-limits', 'best-practices']
    },
    {
      id: 5,
      title: 'Deploying to Firebase vs GitHub Pages - Pros and cons',
      author: 'Emma Wilson',
      avatar: 'https://via.placeholder.com/40x40/ef4444/ffffff?text=EW',
      time: '3 days ago',
      category: 'Deployment',
      replies: 22,
      likes: 45,
      isPinned: false,
      tags: ['deployment', 'firebase', 'github-pages']
    }
  ]

  const upcomingEvents = [
    {
      id: 1,
      title: 'DreamBuild Live Q&A Session',
      date: '2024-01-25',
      time: '2:00 PM EST',
      type: 'Live Stream',
      attendees: 156,
      description: 'Join our monthly Q&A session with the DreamBuild team'
    },
    {
      id: 2,
      title: 'AI Development Workshop',
      date: '2024-01-30',
      time: '10:00 AM EST',
      type: 'Workshop',
      attendees: 89,
      description: 'Learn advanced AI development techniques with DreamBuild'
    },
    {
      id: 3,
      title: 'Community Showcase',
      date: '2024-02-05',
      time: '6:00 PM EST',
      type: 'Presentation',
      attendees: 234,
      description: 'Featured projects from our amazing community members'
    }
  ]

  const communityStats = [
    { label: 'Active Members', value: '2,847', icon: Users },
    { label: 'Discussions', value: '1,234', icon: MessageSquare },
    { label: 'Projects Shared', value: '567', icon: Code },
    { label: 'Events This Month', value: '8', icon: Calendar }
  ]

  const filteredDiscussions = discussions.filter(discussion =>
    discussion.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    discussion.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    discussion.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Community</h1>
              <p className="text-muted-foreground">Connect with developers, share projects, and get help</p>
            </div>
          </div>

          {/* Search */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search discussions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {communityStats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Tab Navigation */}
            <div className="flex items-center gap-1 bg-muted/50 p-1 rounded-xl mb-6">
              {tabs.map((tab) => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                      activeTab === tab.id
                        ? 'bg-primary text-primary-foreground shadow-md'
                        : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{tab.name}</span>
                    <span className="px-2 py-1 text-xs bg-muted/50 rounded-full">{tab.count}</span>
                  </button>
                )
              })}
            </div>

            {/* Discussions */}
            {activeTab === 'discussions' && (
              <div className="space-y-4">
                {filteredDiscussions.map((discussion, index) => (
                  <motion.div
                    key={discussion.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all duration-200 ${
                      discussion.isPinned ? 'border-primary/20 bg-primary/5' : ''
                    }`}
                  >
                    {discussion.isPinned && (
                      <div className="flex items-center gap-2 mb-3">
                        <Zap className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium text-primary">Pinned</span>
                      </div>
                    )}
                    
                    <div className="flex items-start gap-4">
                      <img
                        src={discussion.avatar}
                        alt={discussion.author}
                        className="w-10 h-10 rounded-full"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground hover:text-primary transition-colors cursor-pointer mb-2">
                          {discussion.title}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                          <span>by {discussion.author}</span>
                          <span>•</span>
                          <span>{discussion.time}</span>
                          <span>•</span>
                          <span className="px-2 py-1 bg-muted rounded-md">{discussion.category}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <MessageCircle className="h-4 w-4" />
                            <span>{discussion.replies}</span>
                          </div>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Heart className="h-4 w-4" />
                            <span>{discussion.likes}</span>
                          </div>
                          <div className="flex gap-1">
                            {discussion.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Projects Showcase */}
            {activeTab === 'projects' && (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Code className="h-12 w-12 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Project Showcase</h3>
                <p className="text-muted-foreground mb-6">
                  Featured projects from our community will appear here
                </p>
                <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors">
                  Submit Your Project
                </button>
              </div>
            )}

            {/* Events */}
            {activeTab === 'events' && (
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-2">{event.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{event.description}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{event.date}</span>
                          </div>
                          <span>•</span>
                          <span>{event.time}</span>
                          <span>•</span>
                          <span className="px-2 py-1 bg-primary/10 text-primary rounded-md">{event.type}</span>
                          <span>•</span>
                          <span>{event.attendees} attendees</span>
                        </div>
                      </div>
                      <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors">
                        Join Event
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Resources */}
            {activeTab === 'resources' && (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Bookmark className="h-12 w-12 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Community Resources</h3>
                <p className="text-muted-foreground mb-6">
                  Curated resources and learning materials will appear here
                </p>
                <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors">
                  Suggest Resource
                </button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Quick Actions */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center gap-3 px-4 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors">
                  <Plus className="h-4 w-4" />
                  Start Discussion
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 border border-border rounded-lg hover:bg-muted transition-colors">
                  <Code className="h-4 w-4" />
                  Share Project
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 border border-border rounded-lg hover:bg-muted transition-colors">
                  <Calendar className="h-4 w-4" />
                  Create Event
                </button>
              </div>
            </div>

            {/* Community Links */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-4">Join Our Community</h3>
              <div className="space-y-3">
                <a
                  href="https://github.com/ronb12/DreamBuild"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 border border-border rounded-lg hover:bg-muted transition-colors"
                >
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 px-4 py-3 border border-border rounded-lg hover:bg-muted transition-colors"
                >
                  <Twitter className="h-4 w-4" />
                  <span>Twitter</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 px-4 py-3 border border-border rounded-lg hover:bg-muted transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>Newsletter</span>
                </a>
              </div>
            </div>

            {/* Community Guidelines */}
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-4">Community Guidelines</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Be respectful and inclusive</li>
                <li>• Share helpful and relevant content</li>
                <li>• Follow our code of conduct</li>
                <li>• Help others learn and grow</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Community
