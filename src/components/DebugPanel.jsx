// Debug Panel Component
// Provides advanced debugging interface for DreamBuild

import React, { useState, useEffect } from 'react'
import { Bug, Code, AlertTriangle, CheckCircle, X, Play, RefreshCw, Eye, Settings } from 'lucide-react'
import advancedDebugService from '../services/advancedDebugService.js'
import colorThemeService from '../services/colorThemeService.js'

const DebugPanel = ({ projectFiles, onFixApplied, isOpen, onClose }) => {
  const [debugMode, setDebugMode] = useState('analysis')
  const [debugResults, setDebugResults] = useState(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [selectedTheme, setSelectedTheme] = useState('modern')
  const [customColors, setCustomColors] = useState({})
  const [debugHistory, setDebugHistory] = useState([])

  useEffect(() => {
    if (isOpen) {
      loadDebugHistory()
    }
  }, [isOpen])

  const loadDebugHistory = () => {
    const history = advancedDebugService.getDebugHistory()
    setDebugHistory(history)
  }

  const handleDebugAnalysis = async () => {
    if (!projectFiles || Object.keys(projectFiles).length === 0) {
      alert('No project files to analyze')
      return
    }

    setIsAnalyzing(true)
    try {
      const result = await advancedDebugService.analyzeAndFix(
        'Analyze code for issues and provide comprehensive fixes',
        projectFiles,
        { mode: 'comprehensive' }
      )
      
      setDebugResults(result)
      loadDebugHistory()
      
      if (result.success && result.fix) {
        onFixApplied(result.fix)
      }
    } catch (error) {
      console.error('Debug analysis failed:', error)
      setDebugResults({
        success: false,
        error: error.message,
        message: 'Debug analysis failed'
      })
    } finally {
      setIsAnalyzing(false)
    }
  }

  const handleThemeChange = (themeName) => {
    setSelectedTheme(themeName)
    const themeColors = colorThemeService.getThemeColors(themeName)
    
    // Apply theme to project files
    const themedFiles = {}
    Object.entries(projectFiles).forEach(([filename, content]) => {
      if (typeof content === 'string') {
        themedFiles[filename] = colorThemeService.applyThemeToCode(content, themeName)
      } else {
        themedFiles[filename] = content
      }
    })
    
    onFixApplied(themedFiles)
  }

  const handleCustomColorChange = (colorKey, value) => {
    const newColors = { ...customColors, [colorKey]: value }
    setCustomColors(newColors)
    
    // Apply custom theme
    const customTheme = colorThemeService.createCustomTheme('custom', newColors)
    const themedFiles = {}
    Object.entries(projectFiles).forEach(([filename, content]) => {
      if (typeof content === 'string') {
        themedFiles[filename] = colorThemeService.applyThemeToCode(content, 'custom', customTheme)
      } else {
        themedFiles[filename] = content
      }
    })
    
    onFixApplied(themedFiles)
  }

  const clearDebugHistory = () => {
    advancedDebugService.clearDebugHistory()
    setDebugHistory([])
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-6xl h-5/6 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center space-x-2">
            <Bug className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-semibold">Advanced Debug Panel</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b">
          {[
            { id: 'analysis', label: 'Code Analysis', icon: Code },
            { id: 'themes', label: 'Color Themes', icon: Settings },
            { id: 'history', label: 'Debug History', icon: RefreshCw }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setDebugMode(tab.id)}
              className={`flex items-center space-x-2 px-4 py-3 border-b-2 transition-colors ${
                debugMode === tab.id
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-600 hover:text-gray-800'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto p-4">
          {debugMode === 'analysis' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Code Analysis & Fixes</h3>
                <button
                  onClick={handleDebugAnalysis}
                  disabled={isAnalyzing}
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
                >
                  {isAnalyzing ? (
                    <RefreshCw className="w-4 h-4 animate-spin" />
                  ) : (
                    <Play className="w-4 h-4" />
                  )}
                  <span>{isAnalyzing ? 'Analyzing...' : 'Run Analysis'}</span>
                </button>
              </div>

              {debugResults && (
                <div className="space-y-4">
                  {/* Results Summary */}
                  <div className={`p-4 rounded-lg border ${
                    debugResults.success ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
                  }`}>
                    <div className="flex items-center space-x-2">
                      {debugResults.success ? (
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      ) : (
                        <AlertTriangle className="w-5 h-5 text-red-600" />
                      )}
                      <span className="font-semibold">
                        {debugResults.success ? 'Analysis Complete' : 'Analysis Failed'}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-gray-600">{debugResults.message}</p>
                  </div>

                  {/* Analysis Details */}
                  {debugResults.analysis && (
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Analysis Details</h4>
                      <div className="space-y-2 text-sm">
                        <p><strong>Root Cause:</strong> {debugResults.analysis.rootCause}</p>
                        <p><strong>Priority:</strong> 
                          <span className={`ml-2 px-2 py-1 rounded text-xs ${
                            debugResults.analysis.priority === 'high' ? 'bg-red-100 text-red-800' :
                            debugResults.analysis.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-green-100 text-green-800'
                          }`}>
                            {debugResults.analysis.priority}
                          </span>
                        </p>
                        <p><strong>Complexity:</strong> {debugResults.analysis.complexity}</p>
                        <p><strong>Approach:</strong> {debugResults.analysis.approach}</p>
                      </div>
                    </div>
                  )}

                  {/* Detected Errors */}
                  {debugResults.detectedErrors && debugResults.detectedErrors.length > 0 && (
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Detected Issues</h4>
                      <div className="space-y-2">
                        {debugResults.detectedErrors.map((error, index) => (
                          <div key={index} className="flex items-center space-x-2 text-sm">
                            <AlertTriangle className="w-4 h-4 text-yellow-600" />
                            <span className="capitalize">{error.category}</span>
                            <span className="text-gray-500">-</span>
                            <span>{error.message || error.pattern}</span>
                            <span className={`px-2 py-1 rounded text-xs ${
                              error.severity === 'high' ? 'bg-red-100 text-red-800' :
                              error.severity === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-green-100 text-green-800'
                            }`}>
                              {error.severity}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Validation Results */}
                  {debugResults.validation && (
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Fix Validation</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <p className="text-gray-600">Files Updated</p>
                          <p className="font-semibold">{debugResults.validation.filesUpdated}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Issues Fixed</p>
                          <p className="font-semibold">{debugResults.validation.issuesFixed}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Quality Score</p>
                          <p className="font-semibold">{debugResults.validation.qualityScore}%</p>
                        </div>
                        <div>
                          <p className="text-gray-600">New Issues</p>
                          <p className="font-semibold">{debugResults.validation.newIssues}</p>
                        </div>
                      </div>
                      
                      {debugResults.validation.recommendations && debugResults.validation.recommendations.length > 0 && (
                        <div className="mt-4">
                          <p className="font-semibold mb-2">Recommendations</p>
                          <ul className="space-y-1">
                            {debugResults.validation.recommendations.map((rec, index) => (
                              <li key={index} className="text-sm text-gray-600">• {rec}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {debugMode === 'themes' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Color Theme Customization</h3>
              
              {/* Theme Selector */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-3">Predefined Themes</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {colorThemeService.getAvailableThemes().filter(theme => theme !== 'custom').map(theme => (
                    <button
                      key={theme}
                      onClick={() => handleThemeChange(theme)}
                      className={`p-3 rounded-lg border-2 transition-all ${
                        selectedTheme === theme
                          ? 'border-blue-600 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div
                        className="w-full h-8 rounded mb-2"
                        style={{
                          background: `linear-gradient(135deg, ${colorThemeService.getThemeColors(theme).primary} 0%, ${colorThemeService.getThemeColors(theme).secondary} 100%)`
                        }}
                      />
                      <span className="text-sm font-medium capitalize">{theme}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Color Editor */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-3">Custom Colors</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['primary', 'secondary', 'accent', 'background', 'surface', 'text', 'success', 'warning', 'error', 'info'].map(colorKey => (
                    <div key={colorKey} className="space-y-2">
                      <label className="text-sm font-medium capitalize">{colorKey}</label>
                      <div className="flex items-center space-x-2">
                        <input
                          type="color"
                          value={customColors[colorKey] || colorThemeService.getThemeColors(selectedTheme)[colorKey]}
                          onChange={(e) => handleCustomColorChange(colorKey, e.target.value)}
                          className="w-8 h-8 rounded border border-gray-300"
                        />
                        <input
                          type="text"
                          value={customColors[colorKey] || colorThemeService.getThemeColors(selectedTheme)[colorKey]}
                          onChange={(e) => handleCustomColorChange(colorKey, e.target.value)}
                          className="flex-1 px-2 py-1 text-sm border border-gray-300 rounded"
                          placeholder="#000000"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Theme Preview */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-3">Theme Preview</h4>
                <div className="p-4 rounded-lg" style={{
                  background: `linear-gradient(135deg, ${customColors.primary || colorThemeService.getThemeColors(selectedTheme).primary} 0%, ${customColors.secondary || colorThemeService.getThemeColors(selectedTheme).secondary} 100%)`,
                  color: customColors.text || colorThemeService.getThemeColors(selectedTheme).text
                }}>
                  <h5 className="text-lg font-semibold mb-2">Sample Content</h5>
                  <p className="mb-3">This is how your app will look with the selected theme.</p>
                  <button className="px-4 py-2 rounded-lg text-white font-medium" style={{
                    background: customColors.accent || colorThemeService.getThemeColors(selectedTheme).accent
                  }}>
                    Sample Button
                  </button>
                </div>
              </div>
            </div>
          )}

          {debugMode === 'history' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Debug History</h3>
                <button
                  onClick={clearDebugHistory}
                  className="px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
                >
                  Clear History
                </button>
              </div>

              {debugHistory.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <RefreshCw className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>No debug history available</p>
                  <p className="text-sm">Run a code analysis to see history</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {debugHistory.map((entry, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-500">
                          {new Date(entry.timestamp).toLocaleString()}
                        </span>
                        <span className={`px-2 py-1 rounded text-xs ${
                          entry.analysis?.priority === 'high' ? 'bg-red-100 text-red-800' :
                          entry.analysis?.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {entry.analysis?.priority || 'unknown'}
                        </span>
                      </div>
                      <p className="font-medium mb-2">{entry.userPrompt}</p>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <p className="text-gray-600">Issues Found</p>
                          <p className="font-semibold">{entry.detectedErrors?.length || 0}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Issues Fixed</p>
                          <p className="font-semibold">{entry.validation?.issuesFixed || 0}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Quality Score</p>
                          <p className="font-semibold">{entry.validation?.qualityScore || 0}%</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default DebugPanel
