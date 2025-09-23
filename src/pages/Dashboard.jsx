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
import GitHubIntegration from '../components/GitHubIntegration'

const Dashboard = () => {
  const { currentProject, projects } = useProject()
  const { user } = useAuth()
  const [timeRange, setTimeRange] = useState('7d')
  const [isLoading, setIsLoading] = useState(true)

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])


  // Real data from projects and GitHub
  const stats = {
    totalProjects: projects.length,
    activeProjects: projects.filter(p => p.status === 'active' || p.status === 'development').length,
    completedProjects: projects.filter(p => p.status === 'completed').length,
    totalFiles: projects.reduce((sum, p) => sum + Object.keys(p.files || {}).length, 0),
    aiGenerations: projects.reduce((sum, p) => sum + (p.generations || 0), 0),
    linesOfCode: projects.reduce((sum, p) => sum + (p.linesOfCode || 0), 0),
    languagesUsed: projects.length > 0 ? new Set(projects.map(p => p.config?.language || 'javascript')).size : 0,
    hoursSpent: projects.reduce((sum, p) => sum + (p.hoursSpent || 0), 0)
  }

  // Helper function to get time ago
  const getTimeAgo = (date) => {
    const now = new Date()
    const diff = now - new Date(date)
    const minutes = Math.floor(diff / 60000)
    const hours = Math.floor(diff / 3600000)
    const days = Math.floor(diff / 86400000)
    
    if (minutes < 60) return `${minutes} min ago`
    if (hours < 24) return `${hours} hour${hours > 1 ? 's' : ''} ago`
    return `${days} day${days > 1 ? 's' : ''} ago`
  }

  const recentActivity = projects
    .sort((a, b) => new Date(b.lastModified) - new Date(a.lastModified))
    .slice(0, 4)
    .map((project, index) => ({
      id: project.id,
      type: project.source === 'github' ? 'github_sync' : 'ai_generation',
      project: project.name,
      action: project.source === 'github' ? 'Synced from GitHub' : 'Generated with AI',
      time: getTimeAgo(project.lastModified),
      icon: project.source === 'github' ? Github : Brain,
      color: project.source === 'github' ? 'text-blue-600' : 'text-white'
    }))

  const topProjects = projects
    .sort((a, b) => new Date(b.lastModified) - new Date(a.lastModified))
    .slice(0, 4)
    .map(project => ({
      name: project.name,
      files: Object.keys(project.files || {}).length,
      lastModified: getTimeAgo(project.lastModified),
      type: project.config?.appType || 'web',
      progress: project.progress || 0,
      source: project.source || 'dreambuild'
    }))

  // Calculate language usage from real projects
  const getLanguageUsage = (projects) => {
    const languages = {}
    
    projects.forEach(project => {
      const lang = project.config?.language || 'javascript'
      const fileCount = Object.keys(project.files || {}).length
      
      if (languages[lang]) {
        languages[lang].files += fileCount
      } else {
        languages[lang] = { language: lang, files: fileCount }
      }
    })
    
    const totalFiles = Object.values(languages).reduce((sum, lang) => sum + lang.files, 0)
    
    return Object.values(languages)
      .map(lang => ({
        ...lang,
        percentage: totalFiles > 0 ? Math.round((lang.files / totalFiles) * 100) : 0,
        color: getLanguageColor(lang.language)
      }))
      .sort((a, b) => b.files - a.files)
      .slice(0, 4)
  }

  const getLanguageColor = (language) => {
    const colors = {
      'javascript': 'bg-yellow-500',
      'typescript': 'bg-blue-500',
      'html': 'bg-orange-500',
      'css': 'bg-white',
      'python': 'bg-green-500',
      'java': 'bg-red-500',
      'php': 'bg-purple-500',
      'ruby': 'bg-red-600',
      'go': 'bg-cyan-500',
      'rust': 'bg-orange-600'
    }
    return colors[language.toLowerCase()] || 'bg-gray-500'
  }

  const languageUsage = getLanguageUsage(projects)

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
      <div className="min-h-screen bg-background" style={{ paddingTop: '80px' }}>
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
    <div className="min-h-screen bg-background" style={{ paddingTop: '80px' }}>
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

        {/* GitHub Integration */}
        <GitHubIntegration />
      </div>
    </div>
  )
}

export default Dashboard