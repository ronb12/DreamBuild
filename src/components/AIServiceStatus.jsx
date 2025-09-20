import React, { useState, useEffect } from 'react'
import { 
  CheckCircle, 
  XCircle, 
  Clock, 
  Settings, 
  RefreshCw, 
  Zap, 
  Shield, 
  BarChart3,
  ToggleLeft,
  ToggleRight,
  Info,
  AlertTriangle
} from 'lucide-react'
import aiService from '../services/simpleAIService'

const AIServiceStatus = ({ isOpen, onClose }) => {
  const [serviceStatus, setServiceStatus] = useState({})
  const [userPreferences, setUserPreferences] = useState({})
  const [usageStats, setUsageStats] = useState({})
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [servicesNeedingSetup, setServicesNeedingSetup] = useState([])

  useEffect(() => {
    if (isOpen) {
      loadData()
    }
  }, [isOpen])

  const loadData = () => {
    setServiceStatus(aiService.getServiceStatus())
    setUserPreferences(aiService.getUserPreferences())
    setUsageStats(aiService.getUsageStats())
    setServicesNeedingSetup(aiService.getServicesNeedingSetup())
  }

  const handleServiceSelect = (serviceName) => {
    aiService.setService(serviceName)
    setUserPreferences(aiService.getUserPreferences())
    loadData()
  }

  const handlePreferenceChange = (key, value) => {
    const newPreferences = { ...userPreferences, [key]: value }
    aiService.updateUserPreferences(newPreferences)
    setUserPreferences(newPreferences)
  }

  const handleRefreshHealth = async () => {
    setIsRefreshing(true)
    try {
      await aiService.performHealthChecks()
      loadData()
    } catch (error) {
      console.error('Error refreshing health:', error)
    } finally {
      setIsRefreshing(false)
    }
  }

  const handleResetHealth = (serviceName = null) => {
    aiService.resetServiceHealth(serviceName)
    loadData()
  }

  const getStatusIcon = (service) => {
    if (service.isHealthy) {
      return <CheckCircle className="h-4 w-4 text-green-500" />
    } else {
      return <XCircle className="h-4 w-4 text-red-500" />
    }
  }

  const getStatusColor = (service) => {
    if (service.isCurrent) return 'bg-gray-700 text-white'
    if (service.isPreferred) return 'bg-secondary text-secondary-foreground'
    if (service.isHealthy) return 'bg-green-50 text-green-700 border-green-200'
    return 'bg-red-50 text-red-700 border-red-200'
  }

  const formatResponseTime = (time) => {
    if (time < 1000) return `${time}ms`
    return `${(time / 1000).toFixed(1)}s`
  }

  const formatErrorRate = (rate) => {
    return `${(rate * 100).toFixed(1)}%`
  }

  const getServiceIcon = (serviceName) => {
    switch (serviceName) {
      case 'groq':
        return <Zap className="h-4 w-4" />
      case 'together':
        return <Shield className="h-4 w-4" />
      case 'huggingface':
        return <BarChart3 className="h-4 w-4" />
      case 'ollama':
        return <Settings className="h-4 w-4" />
      default:
        return <Info className="h-4 w-4" />
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-black border border-border rounded-lg shadow-lg w-full max-w-4xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h2 className="text-2xl font-bold text-foreground">AI Service Status</h2>
            <p className="text-muted-foreground">Monitor and configure AI services</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleRefreshHealth}
              disabled={isRefreshing}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <RefreshCw className={`h-5 w-5 ${isRefreshing ? 'animate-spin' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <XCircle className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="overflow-y-auto max-h-[calc(90vh-120px)]">
          {/* Service Status Grid */}
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Service Status
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {Object.entries(serviceStatus).map(([serviceName, service]) => (
                <div
                  key={serviceName}
                  className={`p-4 rounded-lg border-2 transition-all cursor-pointer hover:shadow-md ${getStatusColor(service)}`}
                  onClick={() => handleServiceSelect(serviceName)}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      {getServiceIcon(serviceName)}
                      <span className="font-semibold">{service.name}</span>
                      {getStatusIcon(service)}
                    </div>
                    <div className="flex items-center gap-2">
                      {service.isCurrent && (
                        <span className="text-xs bg-gray-700 text-white px-2 py-1 rounded">
                          Current
                        </span>
                      )}
                      {service.isPreferred && !service.isCurrent && (
                        <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                          Preferred
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{formatResponseTime(service.responseTime)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <AlertTriangle className="h-3 w-3" />
                      <span>{formatErrorRate(service.errorRate)}</span>
                    </div>
                    <div className="col-span-2">
                      <span className="text-xs">
                        Requests: {service.usage.totalRequests} | 
                        Success: {service.usage.successfulRequests} | 
                        Failed: {service.usage.failedRequests}
                      </span>
                    </div>
                  </div>
                  
                  {service.consecutiveFailures > 0 && (
                    <div className="mt-2 text-xs text-orange-600">
                      {service.consecutiveFailures} consecutive failures
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* User Preferences */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Preferences
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <label className="text-sm font-medium">Enable Fallback</label>
                    <p className="text-xs text-muted-foreground">
                      Automatically switch to backup services when primary fails
                    </p>
                  </div>
                  <button
                    onClick={() => handlePreferenceChange('fallbackEnabled', !userPreferences.fallbackEnabled)}
                    className="flex items-center gap-2"
                  >
                    {userPreferences.fallbackEnabled ? (
                      <ToggleRight className="h-6 w-6 text-white" />
                    ) : (
                      <ToggleLeft className="h-6 w-6 text-muted-foreground" />
                    )}
                  </button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <label className="text-sm font-medium">Show Notifications</label>
                    <p className="text-xs text-muted-foreground">
                      Display fallback notifications in console
                    </p>
                  </div>
                  <button
                    onClick={() => handlePreferenceChange('showNotifications', !userPreferences.showNotifications)}
                    className="flex items-center gap-2"
                  >
                    {userPreferences.showNotifications ? (
                      <ToggleRight className="h-6 w-6 text-white" />
                    ) : (
                      <ToggleLeft className="h-6 w-6 text-muted-foreground" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Setup Instructions */}
            {servicesNeedingSetup.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Setup Required
                </h3>
                
                <div className="space-y-3">
                  {servicesNeedingSetup.map((service) => (
                    <div key={service.key} className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-orange-800">{service.name}</h4>
                        <span className="text-sm text-orange-600 bg-orange-100 px-2 py-1 rounded">
                          Setup Required
                        </span>
                      </div>
                      <p className="text-sm text-orange-700 mb-2">
                        {service.instructions.setup}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-orange-600">
                        <span>💰 {service.instructions.freeTier}</span>
                        <span>⚡ {service.instructions.features}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Usage Statistics */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Usage Statistics
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-muted rounded-lg">
                  <div className="text-2xl font-bold text-white">
                    {usageStats.totalRequests || 0}
                  </div>
                  <div className="text-sm text-muted-foreground">Total Requests</div>
                </div>
                
                <div className="p-4 bg-muted rounded-lg">
                  <div className="text-2xl font-bold text-green-600">
                    {usageStats.successfulRequests || 0}
                  </div>
                  <div className="text-sm text-muted-foreground">Successful</div>
                </div>
                
                <div className="p-4 bg-muted rounded-lg">
                  <div className="text-2xl font-bold text-red-600">
                    {usageStats.failedRequests || 0}
                  </div>
                  <div className="text-sm text-muted-foreground">Failed</div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground">
                Last updated: {new Date().toLocaleTimeString()}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleResetHealth()}
                  className="px-4 py-2 text-sm bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors"
                >
                  Reset All Health
                </button>
                <button
                  onClick={onClose}
                  className="px-4 py-2 text-sm bg-gray-700 text-white rounded-md hover:bg-gray-600 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AIServiceStatus
