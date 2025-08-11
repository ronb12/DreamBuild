import React, { useState } from 'react'
import { 
  TrendingUp, 
  Code, 
  Globe, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  Play,
  GitBranch,
  Activity,
  BarChart3,
  Calendar
} from 'lucide-react'

const Dashboard = () => {
  // eslint-disable-next-line no-unused-vars
  const [stats, setStats] = useState({
    totalProjects: 12,
    activeProjects: 8,
    deployedProjects: 6,
    totalDeployments: 24,
    thisMonth: 8,
    lastMonth: 16
  })

  // eslint-disable-next-line no-unused-vars
  const [recentActivity, setRecentActivity] = useState([
    {
      id: 1,
      type: 'deploy',
      project: 'E-commerce Platform',
      message: 'Successfully deployed to production',
      time: '2 hours ago',
      status: 'success'
    },
    {
      id: 2,
      type: 'build',
      project: 'Mobile App',
      message: 'Build completed successfully',
      time: '5 hours ago',
      status: 'success'
    },
    {
      id: 3,
      type: 'test',
      project: 'API Gateway',
      message: 'All tests passed',
      time: '1 day ago',
      status: 'success'
    },
    {
      id: 4,
      type: 'deploy',
      project: 'Dashboard UI',
      message: 'Deployment failed - retrying',
      time: '2 days ago',
      status: 'error'
    }
  ])

  const [quickActions] = useState([
    {
      title: 'New Project',
      description: 'Start building with AI',
      icon: Code,
      action: '/ai-builder',
      color: 'bg-blue-500'
    },
    {
      title: 'Deploy All',
      description: 'Deploy pending projects',
      icon: Globe,
      action: '/projects',
      color: 'bg-green-500'
    },
    {
      title: 'Run Tests',
      description: 'Execute test suite',
      icon: Play,
      action: '/projects',
      color: 'bg-purple-500'
    },
    {
      title: 'View Analytics',
      description: 'Performance metrics',
      icon: BarChart3,
      action: '/projects',
      color: 'bg-orange-500'
    }
  ])

  const getStatusIcon = (status) => {
    switch (status) {
      case 'success':
        return <CheckCircle className="w-4 h-4 text-green-500" />
      case 'error':
        return <AlertCircle className="w-4 h-4 text-red-500" />
      default:
        return <Clock className="w-4 h-4 text-yellow-500" />
    }
  }

  const getActivityIcon = (type) => {
    switch (type) {
      case 'deploy':
        return <Globe className="w-4 h-4 text-blue-500" />
      case 'build':
        return <Code className="w-4 h-4 text-green-500" />
      case 'test':
        return <CheckCircle className="w-4 h-4 text-purple-500" />
      default:
        return <Activity className="w-4 h-4 text-gray-500" />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-2">Welcome back! Here's what's happening with your projects.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="card">
            <div className="flex items-center">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Code className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Projects</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalProjects}</p>
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-green-600">
              <TrendingUp className="w-4 h-4 mr-1" />
              +12% from last month
            </div>
          </div>

          <div className="card">
            <div className="flex items-center">
              <div className="p-3 bg-green-100 rounded-lg">
                <Play className="w-6 h-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Active Projects</p>
                <p className="text-2xl font-bold text-gray-900">{stats.activeProjects}</p>
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-blue-600">
              <Activity className="w-4 h-4 mr-1" />
              {stats.activeProjects} currently building
            </div>
          </div>

          <div className="card">
            <div className="flex items-center">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Globe className="w-6 h-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Deployed</p>
                <p className="text-2xl font-bold text-gray-900">{stats.deployedProjects}</p>
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-purple-600">
              <CheckCircle className="w-4 h-4 mr-1" />
              Live in production
            </div>
          </div>

          <div className="card">
            <div className="flex items-center">
              <div className="p-3 bg-orange-100 rounded-lg">
                <GitBranch className="w-6 h-6 text-orange-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Deployments</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalDeployments}</p>
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-orange-600">
              <Calendar className="w-4 h-4 mr-1" />
              {stats.thisMonth} this month
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-1">
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                {quickActions.map((action, index) => (
                  <a
                    key={index}
                    href={action.action}
                    className="flex items-center p-3 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all duration-200"
                  >
                    <div className={`p-2 rounded-lg ${action.color}`}>
                      <action.icon className="w-4 h-4 text-white" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">{action.title}</p>
                      <p className="text-xs text-gray-500">{action.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="lg:col-span-2">
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50">
                    <div className="flex-shrink-0 mt-1">
                      {getActivityIcon(activity.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">{activity.project}</p>
                      <p className="text-sm text-gray-600">{activity.message}</p>
                      <div className="flex items-center mt-1">
                        {getStatusIcon(activity.status)}
                        <span className="text-xs text-gray-500 ml-2">{activity.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <a href="/projects" className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                  View all activity →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Chart Placeholder */}
        <div className="mt-8">
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Overview</h3>
            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500">Performance charts coming soon</p>
                <p className="text-sm text-gray-500">Track build times, deployment success rates, and more</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
