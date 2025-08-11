import React, { useState } from 'react'
import { Plus, Search, FolderOpen, GitBranch, Globe, Settings, Trash2, Edit } from 'lucide-react'

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')

  const projects = [
    {
      id: 1,
      name: 'E-commerce Platform',
      description: 'Modern e-commerce solution with React and Node.js',
      status: 'Deployed',
      lastDeploy: '2 hours ago',
      domain: 'shop.dreambuild.app',
      repository: 'github.com/dreambuild/shop',
      progress: 100
    },
    {
      id: 2,
      name: 'Mobile App',
      description: 'Cross-platform mobile application with React Native',
      status: 'Building',
      lastDeploy: '5 hours ago',
      domain: 'app.dreambuild.app',
      repository: 'github.com/dreambuild/mobile',
      progress: 75
    },
    {
      id: 3,
      name: 'API Gateway',
      description: 'Microservices API gateway with authentication',
      status: 'Testing',
      lastDeploy: '1 day ago',
      domain: 'api.dreambuild.app',
      repository: 'github.com/dreambuild/api',
      progress: 90
    },
    {
      id: 4,
      name: 'Dashboard UI',
      description: 'Admin dashboard with analytics and reporting',
      status: 'Planning',
      lastDeploy: '2 days ago',
      domain: 'admin.dreambuild.app',
      repository: 'github.com/dreambuild/admin',
      progress: 25
    }
  ]

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterStatus === 'all' || project.status.toLowerCase() === filterStatus.toLowerCase()
    return matchesSearch && matchesFilter
  })

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'deployed': return 'bg-green-100 text-green-800'
      case 'building': return 'bg-blue-100 text-blue-800'
      case 'testing': return 'bg-yellow-100 text-yellow-800'
      case 'planning': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Projects</h1>
          <p className="text-gray-600 mt-2">Manage and monitor all your projects in one place.</p>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-field pl-10"
            />
          </div>
          
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="input-field max-w-xs"
          >
            <option value="all">All Status</option>
            <option value="deployed">Deployed</option>
            <option value="building">Building</option>
            <option value="testing">Testing</option>
            <option value="planning">Planning</option>
          </select>
          
          <button className="btn-primary">
            <Plus className="w-4 h-4 mr-2" />
            New Project
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="card group hover:shadow-lg transition-shadow duration-200">
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <FolderOpen className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{project.name}</h3>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-red-600 rounded-lg hover:bg-gray-100">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Project Description */}
              <p className="text-gray-600 mb-4">{project.description}</p>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                  <span>Progress</span>
                  <span>{project.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2 text-gray-600">
                  <GitBranch className="w-4 h-4" />
                  <span className="font-mono">{project.repository}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Globe className="w-4 h-4" />
                  <span className="font-mono">{project.domain}</span>
                </div>
                <div className="text-gray-500">
                  Last deployed: {project.lastDeploy}
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200">
                <button className="btn-secondary text-sm">
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </button>
                <button className="btn-primary text-sm">
                  Deploy
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <FolderOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No projects found</h3>
            <p className="text-gray-600 mb-6">
              {searchTerm || filterStatus !== 'all' 
                ? 'Try adjusting your search or filter criteria.'
                : 'Get started by creating your first project.'
              }
            </p>
            <button className="btn-primary">
              <Plus className="w-4 h-4 mr-2" />
              Create Project
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Projects
