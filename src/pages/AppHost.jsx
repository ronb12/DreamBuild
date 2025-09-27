import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import firebaseAppService from '../services/firebaseAppService'

const AppHost = () => {
  const { appId } = useParams()
  const [appData, setAppData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (appId) {
      loadApp(appId)
    }
  }, [appId])

  const loadApp = async (id) => {
    try {
      console.log('🔍 AppHost: Loading app with ID:', id)
      setIsLoading(true)
      
      // Get app data from Firebase
      const app = await firebaseAppService.getApp(id)
      console.log('🔍 AppHost: Retrieved app data:', app)
      
      if (app) {
        // Generate HTML content
        const htmlContent = firebaseAppService.generateAppHTML(app)
        console.log('🔍 AppHost: Generated HTML content length:', htmlContent.length)
        
        // Increment view count
        await firebaseAppService.incrementViews(id)
        
        // Set the app data for rendering
        setAppData({ ...app, htmlContent })
        
        setIsLoading(false)
        console.log('✅ AppHost: App loaded successfully')
      } else {
        console.log('❌ AppHost: App not found')
        setError('App not found')
        setIsLoading(false)
      }
    } catch (err) {
      console.error('❌ AppHost: Error loading app:', err)
      setError('Failed to load app')
      setIsLoading(false)
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-800">Loading your DreamBuild app...</h2>
          <p className="text-gray-600 mt-2">This may take a moment</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-pink-100">
        <div className="text-center max-w-md mx-auto p-8">
          <div className="text-6xl mb-4">😞</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">App Not Found</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <a 
            href="https://dreambuild-2024-app.web.app" 
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to DreamBuild
          </a>
        </div>
      </div>
    )
  }

  // Render the app content
  return (
    <div className="min-h-screen">
      {appData && (
        <div 
          dangerouslySetInnerHTML={{ __html: appData.htmlContent }}
          className="w-full h-full"
        />
      )}
    </div>
  )
}

export default AppHost
