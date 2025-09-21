import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Lightbulb, 
  CheckCircle, 
  AlertTriangle, 
  XCircle, 
  Clock, 
  TrendingUp,
  Code,
  Palette,
  Shield,
  Zap,
  Eye,
  Search,
  Plus,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Copy,
  Play
} from 'lucide-react'
import recommendationService from '../services/recommendationService'
import { useProject } from '../contexts/ProjectContext'

const RecommendationPanel = ({ isOpen, onClose }) => {
  const { currentProject } = useProject()
  const [recommendations, setRecommendations] = useState([])
  const [productionAnalysis, setProductionAnalysis] = useState(null)
  const [loading, setLoading] = useState(false)
  const [activeTab, setActiveTab] = useState('recommendations')
  const [expandedItems, setExpandedItems] = useState(new Set())

  useEffect(() => {
    if (isOpen && currentProject.files) {
      analyzeApplication()
    }
  }, [isOpen, currentProject.files])

  const analyzeApplication = async () => {
    setLoading(true)
    try {
      // Get recommendations
      const recs = recommendationService.analyzeApplication(currentProject.files, currentProject.prompt || '')
      setRecommendations(recs)

      // Get production analysis
      const analysis = recommendationService.analyzeProductionReadiness(currentProject.files, currentProject.prompt || '')
      setProductionAnalysis(analysis)
    } catch (error) {
      console.error('Analysis failed:', error)
    } finally {
      setLoading(false)
    }
  }

  const toggleExpanded = (itemId) => {
    const newExpanded = new Set(expandedItems)
    if (newExpanded.has(itemId)) {
      newExpanded.delete(itemId)
    } else {
      newExpanded.add(itemId)
    }
    setExpandedItems(newExpanded)
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'text-red-500 bg-red-50 border-red-200'
      case 'medium': return 'text-yellow-600 bg-yellow-50 border-yellow-200'
      case 'low': return 'text-green-600 bg-green-50 border-green-200'
      default: return 'text-gray-600 bg-gray-50 border-gray-200'
    }
  }

  const getReadinessColor = (level) => {
    switch (level) {
      case 'production-ready': return 'text-green-600 bg-green-50'
      case 'near-ready': return 'text-blue-600 bg-blue-50'
      case 'needs-improvement': return 'text-yellow-600 bg-yellow-50'
      case 'not-ready': return 'text-red-600 bg-red-50'
      default: return 'text-gray-600 bg-gray-50'
    }
  }

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'design': return <Palette className="h-4 w-4" />
      case 'functionality': return <Code className="h-4 w-4" />
      case 'performance': return <Zap className="h-4 w-4" />
      case 'accessibility': return <Eye className="h-4 w-4" />
      case 'seo': return <Search className="h-4 w-4" />
      case 'security': return <Shield className="h-4 w-4" />
      default: return <Lightbulb className="h-4 w-4" />
    }
  }

  const copyCodeExample = (code) => {
    navigator.clipboard.writeText(code)
    // You could add a toast notification here
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 300 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 300 }}
        className="fixed right-0 top-0 h-full w-96 bg-white border-l border-gray-200 shadow-xl z-50 flex flex-col"
      >
        {/* Header */}
        <div className="p-4 border-b border-gray-200 bg-gray-50">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-yellow-500" />
              AI Recommendations
            </h3>
            <button
              onClick={onClose}
              className="p-1 hover:bg-gray-200 rounded-md transition-colors"
            >
              <XCircle className="h-5 w-5 text-gray-500" />
            </button>
          </div>

          {/* Tab Navigation */}
          <div className="flex gap-1 mt-3">
            <button
              onClick={() => setActiveTab('recommendations')}
              className={`px-3 py-1 text-sm rounded-md transition-colors ${
                activeTab === 'recommendations'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Recommendations
            </button>
            <button
              onClick={() => setActiveTab('production')}
              className={`px-3 py-1 text-sm rounded-md transition-colors ${
                activeTab === 'production'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Production Ready?
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4">
          {loading ? (
            <div className="flex items-center justify-center h-32">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
            </div>
          ) : (
            <>
              {activeTab === 'recommendations' && (
                <div className="space-y-4">
                  <div className="text-sm text-gray-600 mb-4">
                    {recommendations.length} recommendations found
                  </div>

                  {recommendations.map((rec) => (
                    <motion.div
                      key={rec.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm"
                    >
                      {/* Header */}
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-start gap-3">
                          <div className="p-2 bg-gray-100 rounded-lg">
                            {getCategoryIcon(rec.category)}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900">{rec.title}</h4>
                            <p className="text-sm text-gray-600 mt-1">{rec.description}</p>
                          </div>
                        </div>
                        <span className={`px-2 py-1 text-xs rounded-full border ${getPriorityColor(rec.priority)}`}>
                          {rec.priority}
                        </span>
                      </div>

                      {/* Implementation */}
                      <div className="mb-3">
                        <p className="text-sm text-gray-700">
                          <strong>Implementation:</strong> {rec.implementation}
                        </p>
                      </div>

                      {/* Benefits */}
                      {rec.benefits && (
                        <div className="mb-3">
                          <p className="text-sm font-medium text-gray-700 mb-1">Benefits:</p>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {rec.benefits.map((benefit, index) => (
                              <li key={index} className="flex items-center gap-2">
                                <CheckCircle className="h-3 w-3 text-green-500" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Code Example */}
                      {rec.codeExample && (
                        <div className="mb-3">
                          <div className="flex items-center justify-between mb-2">
                            <p className="text-sm font-medium text-gray-700">Code Example:</p>
                            <button
                              onClick={() => copyCodeExample(rec.codeExample)}
                              className="p-1 hover:bg-gray-100 rounded transition-colors"
                              title="Copy code"
                            >
                              <Copy className="h-3 w-3 text-gray-500" />
                            </button>
                          </div>
                          <pre className="bg-gray-100 p-3 rounded text-xs overflow-x-auto">
                            <code>{rec.codeExample}</code>
                          </pre>
                        </div>
                      )}

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {rec.implementationTime}
                          </span>
                          {rec.complexity && (
                            <span className="flex items-center gap-1">
                              <TrendingUp className="h-3 w-3" />
                              {rec.complexity}
                            </span>
                          )}
                        </div>
                        <button className="text-xs text-blue-600 hover:text-blue-800 flex items-center gap-1">
                          <Play className="h-3 w-3" />
                          Apply
                        </button>
                      </div>
                    </motion.div>
                  ))}

                  {recommendations.length === 0 && (
                    <div className="text-center py-8 text-gray-500">
                      <CheckCircle className="h-12 w-12 mx-auto mb-3 text-green-500" />
                      <p>No recommendations found!</p>
                      <p className="text-sm">Your application looks great.</p>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'production' && productionAnalysis && (
                <div className="space-y-4">
                  {/* Overall Score */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-gray-900">Production Readiness</h4>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getReadinessColor(productionAnalysis.readinessLevel)}`}>
                        {productionAnalysis.readinessLevel.replace('-', ' ').toUpperCase()}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm text-gray-600">Overall Score</span>
                          <span className="text-sm font-medium">{productionAnalysis.overallScore}/100</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${productionAnalysis.overallScore}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Category Scores */}
                  <div className="space-y-3">
                    <h5 className="font-medium text-gray-900">Category Analysis</h5>
                    {Object.entries(productionAnalysis.categories).map(([category, analysis]) => (
                      <div key={category} className="border border-gray-200 rounded-lg p-3">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            {getCategoryIcon(category)}
                            <span className="text-sm font-medium capitalize">{category}</span>
                          </div>
                          <span className="text-sm font-medium">{analysis.score}/100</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-2">
                          <div 
                            className={`h-1.5 rounded-full transition-all duration-500 ${
                              analysis.score >= 80 ? 'bg-green-500' :
                              analysis.score >= 60 ? 'bg-yellow-500' :
                              'bg-red-500'
                            }`}
                            style={{ width: `${analysis.score}%` }}
                          ></div>
                        </div>
                        {analysis.issues.length > 0 && (
                          <div className="text-xs text-gray-600">
                            Issues: {analysis.issues.join(', ')}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Critical Issues */}
                  {productionAnalysis.criticalIssues.length > 0 && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <h5 className="font-medium text-red-800 mb-3 flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4" />
                        Critical Issues
                      </h5>
                      <div className="space-y-2">
                        {productionAnalysis.criticalIssues.map((issue, index) => (
                          <div key={index} className="text-sm text-red-700">
                            <strong>{issue.category}:</strong> {issue.issues.join(', ')}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Deployment Readiness */}
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h5 className="font-medium text-green-800 mb-3 flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" />
                      Deployment Options
                    </h5>
                    <div className="grid grid-cols-2 gap-2">
                      {Object.entries(productionAnalysis.deploymentReadiness).map(([platform, ready]) => (
                        <div key={platform} className="flex items-center gap-2 text-sm">
                          {ready ? (
                            <CheckCircle className="h-4 w-4 text-green-500" />
                          ) : (
                            <XCircle className="h-4 w-4 text-red-500" />
                          )}
                          <span className="capitalize">{platform}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Next Steps */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h5 className="font-medium text-blue-800 mb-3">Next Steps</h5>
                    <div className="space-y-2">
                      {productionAnalysis.nextSteps.map((step, index) => (
                        <div key={index} className="flex items-start gap-3 text-sm">
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                            step.priority === 'high' ? 'bg-red-500 text-white' :
                            step.priority === 'medium' ? 'bg-yellow-500 text-white' :
                            'bg-green-500 text-white'
                          }`}>
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-blue-900">{step.action}</p>
                            <p className="text-blue-700">{step.description}</p>
                            <p className="text-blue-600 text-xs mt-1">
                              Estimated time: {step.estimatedTime}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 bg-gray-50">
          <div className="flex gap-2">
            <button
              onClick={analyzeApplication}
              className="flex-1 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors text-sm font-medium"
            >
              Refresh Analysis
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors text-sm"
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default RecommendationPanel
