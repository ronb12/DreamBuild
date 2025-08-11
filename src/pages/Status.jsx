import React, { useState } from 'react'
import { CheckCircle, AlertCircle, XCircle, Clock, RefreshCw, Activity } from 'lucide-react'

const Status = () => {
  const [lastUpdated, setLastUpdated] = useState(new Date())

  const refreshStatus = () => {
    setLastUpdated(new Date())
  }

  const services = [
    {
      name: 'AI Builder',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '120ms'
    },
    {
      name: 'Build System',
      status: 'operational',
      uptime: '99.97%',
      responseTime: '85ms'
    },
    {
      name: 'Deployment Engine',
      status: 'operational',
      uptime: '99.95%',
      responseTime: '210ms'
    },
    {
      name: 'Database',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '12ms'
    },
    {
      name: 'API Gateway',
      status: 'operational',
      uptime: '99.98%',
      responseTime: '45ms'
    }
  ]

  const getStatusIcon = (status) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="w-5 h-5 text-green-500" />
      case 'degraded':
        return <AlertCircle className="w-5 h-5 text-yellow-500" />
      case 'outage':
        return <XCircle className="w-5 h-5 text-red-500" />
      default:
        return <Clock className="w-5 h-5 text-gray-500" />
    }
  }



  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">System Status</h1>
              <p className="text-gray-600 mt-2">
                Real-time status of DreamBuild services and infrastructure
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-500">
                Last updated: {lastUpdated.toLocaleTimeString()}
              </div>
              <button
                onClick={refreshStatus}
                className="btn-secondary flex items-center space-x-2"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Refresh</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Overall Status */}
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900">Overall System Status</h2>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="px-3 py-1 text-sm font-medium rounded-full text-green-600 bg-green-100">
                  Operational
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">99.98%</div>
                <div className="text-sm text-gray-600">Uptime (30 days)</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">45ms</div>
                <div className="text-sm text-gray-600">Avg Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">All Systems Operational</div>
                <div className="text-sm text-gray-600">Current Status</div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Status */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Service Status</h2>
          <div className="space-y-4">
            {services.map((service, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  {getStatusIcon(service.status)}
                  <div>
                    <h3 className="font-medium text-gray-900">{service.name}</h3>
                    <p className="text-sm text-gray-500">Service is running normally</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900">{service.uptime}</div>
                  <div className="text-xs text-gray-500">{service.responseTime}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Performance Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <Activity className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">45ms</div>
              <div className="text-sm text-gray-600">API Response Time</div>
            </div>
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">99.8%</div>
              <div className="text-sm text-gray-600">Build Success Rate</div>
            </div>
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <Clock className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">2.3s</div>
              <div className="text-sm text-gray-600">Avg Build Time</div>
            </div>
          </div>
        </div>

        {/* Subscribe to Updates */}
        <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-4">
            Get notified about system status updates and incidents.
          </p>
          <div className="max-w-md mx-auto space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full input-field"
            />
            <button className="btn-primary">
              Subscribe to Updates
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Status
