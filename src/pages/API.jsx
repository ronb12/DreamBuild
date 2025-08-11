import React, { useState } from 'react'
import { Code, Copy, Check } from 'lucide-react'

const API = () => {
  const [copiedEndpoint, setCopiedEndpoint] = useState('')

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    setCopiedEndpoint(text)
    setTimeout(() => setCopiedEndpoint(''), 2000)
  }

  const endpoints = [
    {
      method: 'POST',
      path: '/api/auth/login',
      description: 'Authenticate user and get access token'
    },
    {
      method: 'GET',
      path: '/api/projects',
      description: 'Get all projects for authenticated user'
    },
    {
      method: 'POST',
      path: '/api/projects',
      description: 'Create a new project'
    },
    {
      method: 'POST',
      path: '/api/ai/generate',
      description: 'Generate code using AI'
    },
    {
      method: 'POST',
      path: '/api/build',
      description: 'Build a project'
    },
    {
      method: 'POST',
      path: '/api/deploy',
      description: 'Deploy a project'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center space-x-3 mb-4">
            <Code className="w-8 h-8 text-primary-600" />
            <h1 className="text-3xl font-bold text-gray-900">API Reference</h1>
          </div>
          <p className="text-lg text-gray-600">
            Integrate DreamBuild into your applications with our REST API.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Authentication</h2>
          <p className="text-gray-600 mb-4">
            All API requests require authentication using Bearer tokens.
          </p>
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
            Authorization: Bearer YOUR_API_TOKEN
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">API Endpoints</h2>
          <div className="space-y-4">
            {endpoints.map((endpoint, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center space-x-3 mb-2">
                  <span className="px-2 py-1 text-xs font-medium rounded bg-blue-100 text-blue-800">
                    {endpoint.method}
                  </span>
                  <code className="text-sm font-mono text-gray-900 bg-gray-100 px-2 py-1 rounded">
                    {endpoint.path}
                  </code>
                  <button
                    onClick={() => copyToClipboard(endpoint.path)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    {copiedEndpoint === endpoint.path ? (
                      <Check className="w-4 h-4 text-green-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
                <p className="text-gray-600">{endpoint.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default API
