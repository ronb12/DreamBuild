import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Code, 
  Folder, 
  Brain, 
  Zap, 
  TrendingUp, 
  Clock, 
  Users, 
  Star,
  BarChart3,
  Activity,
  Calendar,
  Rocket,
  FileText,
  Globe,
  Settings,
  ChevronRight,
  ArrowUpRight,
  ArrowDownRight,
  Github,
  ExternalLink,
  GitBranch,
  Eye
} from 'lucide-react'
import { useProject } from '../contexts/ProjectContext'
import { useAuth } from '../contexts/AuthContext'

const Dashboard = () => {
  const { currentProject, projects } = useProject()
  const { user } = useAuth()
  const [timeRange, setTimeRange] = useState('7d')
  const [isLoading, setIsLoading] = useState(true)
  const [githubRepos, setGithubRepos] = useState([])
  const [githubLoading, setGithubLoading] = useState(false)

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  // Fetch GitHub repositories
  const fetchGitHubRepos = async () => {
    if (!user || user.provider !== 'github') {
      return
    }
    
    setGithubLoading(true)
    try {
      // In a real app, you would fetch from GitHub API
      // For now, we'll use mock data
      const mockRepos = [
        {
          id: 1,
          name: 'dreambuild-ai-platform',
          full_name: 'ronb12/dreambuild-ai-platform',
          description: 'AI-powered development platform for building web applications',
          language: 'JavaScript',
          stargazers_count: 42,
          forks_count: 8,
          updated_at: '2024-01-15T10:30:00Z',
          html_url: 'https://github.com/ronb12/dreambuild-ai-platform',
          private: false
        },
        {
          id: 2,
          name: 'react-dashboard',
          full_name: 'ronb12/react-dashboard',
          description: 'Modern React dashboard with analytics and charts',
          language: 'TypeScript',
          stargazers_count: 28,
          forks_count: 5,
          updated_at: '2024-01-12T14:20:00Z',
          html_url: 'https://github.com/ronb12/react-dashboard',
          private: false
        },
        {
          id: 3,
          name: 'ai-code-generator',
          full_name: 'ronb12/ai-code-generator',
          description: 'AI-powered code generation tool using OpenAI API',
          language: 'Python',
          stargazers_count: 15,
          forks_count: 3,
          updated_at: '2024-01-10T09:15:00Z',
          html_url: 'https://github.com/ronb12/ai-code-generator',
          private: false
        },
        {
          id: 4,
          name: 'portfolio-v2',
          full_name: 'ronb12/portfolio-v2',
          description: 'Personal portfolio website built with Next.js',
          language: 'JavaScript',
          stargazers_count: 7,
          forks_count: 2,
          updated_at: '2024-01-08T16:45:00Z',
          html_url: 'https://github.com/ronb12/portfolio-v2',
          private: false
        }
      ]
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500))
      setGithubRepos(mockRepos)
    } catch (error) {
      console.error('Failed to fetch GitHub repositories:', error)
    } finally {
      setGithubLoading(false)
    }
  }

  // Fetch GitHub repos when user is available
  useEffect(() => {
    if (user && user.provider === 'github') {
      fetchGitHubRepos()
    }
  }, [user])

  // Mock data - in real app, this would come from API
  const stats = {
    totalProjects: 12,
    activeProjects: 8,
    completedProjects: 4,
    totalFiles: 156,
    aiGenerations: 89,
    linesOfCode: 12450,
    languagesUsed: 8,
    hoursSpent: 42.5
  }

  const recentActivity = [
    {
      id: 1,
      type: 'ai_generation',
      project: 'E-commerce Store',
      action: 'Generated React component',
      time: '2 minutes ago',
      icon: Brain,
      color: 'text-white'
    },
    {
      id: 2,
      type: 'file_created',
      project: 'Portfolio Website',
      action: 'Created new CSS file',
      time: '15 minutes ago',
      icon: FileText,
      color: 'text-green-600'
    },
    {
      id: 3,
      type: 'project_completed',
      project: 'Task Manager App',
      action: 'Project marked as completed',
      time: '1 hour ago',
      icon: Star,
      color: 'text-yellow-600'
    },
    {
      id: 4,
      type: 'deployment',
      project: 'Analytics Dashboard',
      action: 'Deployed to Firebase',
      time: '3 hours ago',
      icon: Rocket,
      color: 'text-purple-600'
    }
  ]

  const topProjects = [
    { name: 'E-commerce Store', files: 24, lastModified: '2 min ago', type: 'web', progress: 85 },
    { name: 'Portfolio Website', files: 12, lastModified: '15 min ago', type: 'web', progress: 100 },
    { name: 'Task Manager App', files: 18, lastModified: '1 hour ago', type: 'mobile', progress: 100 },
    { name: 'Analytics Dashboard', files: 31, lastModified: '3 hours ago', type: 'dashboard', progress: 75 }
  ]

  const languageUsage = [
    { language: 'JavaScript', percentage: 45, files: 70, color: 'bg-yellow-500' },
    { language: 'HTML', percentage: 25, files: 39, color: 'bg-orange-500' },
    { language: 'CSS', percentage: 20, files: 31, color: 'bg-white' },
    { language: 'Python', percentage: 10, files: 16, color: 'bg-green-500' }
  ]

  const StatCard = ({ title, value, icon: Icon, change, changeType, description }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:shadow-md transition-all duration-200"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
          <Icon className="h-6 w-6 text-white" />
        </div>
        {change && (
          <div className={`flex items-center gap-1 text-sm ${
            changeType === 'increase' ? 'text-green-600' : 'text-red-600'
          }`}>
            {changeType === 'increase' ? (
              <ArrowUpRight className="h-4 w-4" />
            ) : (
              <ArrowDownRight className="h-4 w-4" />
            )}
            {change}
          </div>
        )}
      </div>
      <h3 className="text-2xl font-bold text-foreground mb-1">{value}</h3>
      <p className="text-sm text-muted-foreground">{title}</p>
      {description && (
        <p className="text-xs text-muted-foreground mt-2">{description}</p>
      )}
    </motion.div>
  )

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-muted rounded w-1/4 mb-6"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-card/50 rounded-xl p-6">
                  <div className="h-12 w-12 bg-muted rounded-lg mb-4"></div>
                  <div className="h-6 bg-muted rounded w-1/2 mb-2"></div>
                  <div className="h-4 bg-muted rounded w-3/4"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
              <p className="text-muted-foreground">
                Welcome back! Here's what's happening with your projects.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="7d">Last 7 days</option>
                <option value="30d">Last 30 days</option>
                <option value="90d">Last 90 days</option>
              </select>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Projects"
            value={stats.totalProjects}
            icon={Folder}
            change="+2"
            changeType="increase"
            description="This week"
          />
          <StatCard
            title="AI Generations"
            value={stats.aiGenerations}
            icon={Brain}
            change="+12"
            changeType="increase"
            description="This week"
          />
          <StatCard
            title="Lines of Code"
            value={stats.linesOfCode.toLocaleString()}
            icon={Code}
            change="+1.2k"
            changeType="increase"
            description="This week"
          />
          <StatCard
            title="Hours Spent"
            value={stats.hoursSpent}
            icon={Clock}
            change="+5.2h"
            changeType="increase"
            description="This week"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Recent Activity */}
          <div className="lg:col-span-2 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
                <Activity className="h-5 w-5 text-white" />
                Recent Activity
              </h2>
              <button className="text-sm text-white hover:text-gray-300 transition-colors">
                View all
              </button>
            </div>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => {
                const Icon = activity.icon
                return (
                  <motion.div
                    key={activity.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${activity.color.replace('text-', 'bg-').replace('-600', '-100')}`}>
                      <Icon className={`h-4 w-4 ${activity.color}`} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">{activity.project}</p>
                    </div>
                    <span className="text-xs text-muted-foreground">{activity.time}</span>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Top Projects */}
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-white" />
              Top Projects
            </h2>
            <div className="space-y-4">
              {topProjects.map((project, index) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-foreground text-sm">{project.name}</h3>
                    <span className="text-xs text-muted-foreground">{project.files} files</span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex-1 bg-muted rounded-full h-2 mr-3">
                      <div 
                        className="bg-white h-2 rounded-full transition-all duration-300"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-muted-foreground">{project.progress}%</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{project.lastModified}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Language Usage & Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Language Usage */}
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Code className="h-5 w-5 text-white" />
              Language Usage
            </h2>
            <div className="space-y-4">
              {languageUsage.map((lang, index) => (
                <motion.div
                  key={lang.language}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-4 h-4 rounded-full bg-muted flex items-center justify-center">
                    <div className={`w-2 h-2 rounded-full ${lang.color}`}></div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-foreground">{lang.language}</span>
                      <span className="text-xs text-muted-foreground">{lang.percentage}%</span>
                    </div>
                    <div className="bg-muted rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-500 ${lang.color}`}
                        style={{ width: `${lang.percentage}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{lang.files} files</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Zap className="h-5 w-5 text-white" />
              Quick Actions
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: 'New Project', icon: Folder, color: 'bg-white', href: '/ai-builder' },
                { name: 'AI Builder', icon: Brain, color: 'bg-purple-500', href: '/ai-builder' },
                { name: 'View Projects', icon: Globe, color: 'bg-green-500', href: '/projects' },
                { name: 'Settings', icon: Settings, color: 'bg-orange-500', href: '/settings' }
              ].map((action, index) => (
                <motion.a
                  key={action.name}
                  href={action.href}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center p-4 rounded-lg hover:bg-muted/50 transition-all duration-200 group"
                >
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-3 ${action.color} group-hover:scale-105 transition-transform`}>
                    <action.icon className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-sm font-medium text-foreground text-center">{action.name}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard