import React, { useState } from 'react'
import { 
  Users, 
  MessageSquare, 
  Heart, 
  TrendingUp,
  Calendar,
  MapPin,
  Clock,
  MessageCircle,
  Search,
  Filter,
  Eye
} from 'lucide-react'

const Community = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Topics', count: 156 },
    { id: 'general', name: 'General Discussion', count: 45 },
    { id: 'ai-builder', name: 'AI Builder', count: 38 },
    { id: 'build-tools', name: 'Build Tools', count: 32 },
    { id: 'deployment', name: 'Deployment', count: 28 },
    { id: 'showcase', name: 'Project Showcase', count: 13 }
  ]

  const communityStats = [
    { label: 'Total Members', value: '12,847', change: '+234 this month' },
    { label: 'Active Discussions', value: '156', change: '+12 this week' },
    { label: 'Projects Shared', value: '2,341', change: '+89 this month' },
    { label: 'Solutions Provided', value: '8,923', change: '+156 this month' }
  ]

  const featuredDiscussions = [
    {
      id: 1,
      title: 'How I Built a Full-Stack E-commerce App in 2 Hours with DreamBuild',
      author: 'Sarah Chen',
      authorAvatar: 'SC',
      category: 'showcase',
      replies: 23,
      likes: 156,
      views: 1247,
      timeAgo: '2 hours ago',
      tags: ['E-commerce', 'Full-Stack', 'Showcase'],
      featured: true
    },
    {
      id: 2,
      title: 'Best Practices for AI Prompt Engineering in DreamBuild',
      author: 'Marcus Rodriguez',
      authorAvatar: 'MR',
      category: 'ai-builder',
      replies: 18,
      likes: 89,
      views: 892,
      timeAgo: '5 hours ago',
      tags: ['AI Builder', 'Best Practices', 'Tips'],
      featured: true
    },
    {
      id: 3,
      title: 'Deployment Pipeline Optimization: Lessons Learned',
      author: 'Alex Thompson',
      authorAvatar: 'AT',
      category: 'deployment',
      replies: 31,
      likes: 203,
      views: 2156,
      timeAgo: '1 day ago',
      tags: ['Deployment', 'CI/CD', 'Optimization']
    },
    {
      id: 4,
      title: 'Building Mobile Apps with DreamBuild: A Complete Guide',
      author: 'Emily Watson',
      authorAvatar: 'EW',
      category: 'build-tools',
      replies: 15,
      likes: 67,
      views: 678,
      timeAgo: '2 days ago',
      tags: ['Mobile', 'React Native', 'Guide']
    }
  ]

  const upcomingEvents = [
    {
      title: 'DreamBuild Community Meetup - San Francisco',
      date: '2024-02-15',
      time: '6:00 PM PST',
      location: 'San Francisco, CA',
      attendees: 45,
      type: 'In-Person'
    },
    {
      title: 'AI Builder Workshop - Online',
      date: '2024-02-20',
      time: '2:00 PM EST',
      location: 'Virtual Event',
      attendees: 120,
      type: 'Online'
    },
    {
      title: 'Deployment Best Practices Webinar',
      date: '2024-02-25',
      time: '1:00 PM EST',
      location: 'Virtual Event',
      attendees: 89,
      type: 'Online'
    }
  ]

  const topContributors = [
    { name: 'Sarah Chen', contributions: 156, avatar: 'SC', badge: 'Gold' },
    { name: 'Marcus Rodriguez', contributions: 134, avatar: 'MR', badge: 'Gold' },
    { name: 'Alex Thompson', contributions: 98, avatar: 'AT', badge: 'Silver' },
    { name: 'Emily Watson', contributions: 87, avatar: 'EW', badge: 'Silver' },
    { name: 'David Kim', contributions: 76, avatar: 'DK', badge: 'Bronze' }
  ]

  const filteredDiscussions = featuredDiscussions.filter(discussion =>
    discussion.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    discussion.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric' 
    })
  }

  const getBadgeColor = (badge) => {
    switch (badge) {
      case 'Gold': return 'bg-yellow-100 text-yellow-800'
      case 'Silver': return 'bg-gray-100 text-gray-800'
      case 'Bronze': return 'bg-orange-100 text-orange-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">DreamBuild Community</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Connect with fellow developers, share your projects, ask questions, and learn from the 
              collective wisdom of the DreamBuild community. Together, we're building the future of development.
            </p>
            
            {/* Search */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search discussions, projects, and community members..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Community Stats */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {communityStats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600 mb-2">{stat.label}</div>
                <div className="text-xs text-green-600 flex items-center justify-center">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  {stat.change}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Category Filter */}
            <div className="mb-6">
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

            {/* Featured Discussions */}
            <div className="space-y-6">
              {filteredDiscussions.map((discussion) => (
                <div key={discussion.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                  {discussion.featured && (
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="px-2 py-1 text-xs font-medium bg-primary-100 text-primary-800 rounded-full">
                        Featured
                      </span>
                      <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
                        {discussion.category}
                      </span>
                    </div>
                  )}
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {discussion.title}
                  </h3>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {discussion.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 text-xs bg-blue-50 text-blue-700 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Meta */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-sm font-medium text-primary-800">
                          {discussion.authorAvatar}
                        </div>
                        <span className="text-sm font-medium text-gray-900">{discussion.author}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-sm text-gray-500">
                        <Clock className="w-4 h-4" />
                        <span>{discussion.timeAgo}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="w-4 h-4" />
                        <span>{discussion.replies}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4" />
                        <span>{discussion.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{discussion.views}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <button className="btn-secondary">
                      Join Discussion
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Start New Discussion */}
            <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Start a New Discussion</h3>
              <p className="text-gray-600 mb-4">
                Have a question or want to share something? Start a new discussion and engage with the community.
              </p>
              <button className="btn-primary">
                <MessageSquare className="w-4 h-4 mr-2" />
                New Discussion
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Upcoming Events */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Events</h3>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-gray-900 text-sm">{event.title}</h4>
                      <span className={`px-2 py-1 text-xs font-medium rounded ${
                        event.type === 'In-Person' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                      }`}>
                        {event.type}
                      </span>
                    </div>
                    <div className="space-y-1 text-xs text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{formatDate(event.date)} at {event.time}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-3 h-3" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-3 h-3" />
                        <span>{event.attendees} attending</span>
                      </div>
                    </div>
                    <button className="w-full mt-3 btn-secondary text-xs">
                      Join Event
                    </button>
                  </div>
                ))}
              </div>
              <button className="block mt-4 text-sm text-primary-600 hover:text-primary-700 font-medium text-center w-full">
                View All Events →
              </button>
            </div>

            {/* Top Contributors */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Contributors</h3>
              <div className="space-y-3">
                {topContributors.map((contributor, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-sm font-medium text-primary-800">
                        {contributor.avatar}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{contributor.name}</p>
                        <p className="text-xs text-gray-500">{contributor.contributions} contributions</p>
                      </div>
                    </div>
                    <span className={`px-2 py-1 text-xs font-medium rounded ${getBadgeColor(contributor.badge)}`}>
                      {contributor.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Community Guidelines */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Community Guidelines</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <p>• Be respectful and constructive</p>
                <p>• Share knowledge and help others</p>
                <p>• Keep discussions on-topic</p>
                <p>• No spam or self-promotion</p>
                <p>• Follow our code of conduct</p>
              </div>
              <button className="block mt-4 text-sm text-primary-600 hover:text-primary-700 font-medium w-full">
                Read Full Guidelines →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Community
