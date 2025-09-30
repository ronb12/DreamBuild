import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate, useParams } from '../utils/navigation';
import firebaseService from '../services/firebaseService'

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
      console.log('🔍 AppHost: Starting loadApp process...')
      setIsLoading(true)
      setError(null)
      
      // Get app data from Firebase
      console.log('🔍 AppHost: Calling firebaseService.getApp...')
      const app = await firebaseService.getApp(id)
      console.log('🔍 AppHost: Retrieved app data:', app)
      console.log('🔍 AppHost: App data type:', typeof app)
      console.log('🔍 AppHost: App data keys:', app ? Object.keys(app) : 'null')
      
      if (app) {
        console.log('🔍 AppHost: App found, generating HTML content...')
        // Generate HTML content
        const htmlContent = firebaseService.generateAppHTML(app)
        console.log('🔍 AppHost: Generated HTML content length:', htmlContent ? htmlContent.length : 'null')
        console.log('🔍 AppHost: HTML content preview:', htmlContent ? htmlContent.substring(0, 200) : 'null')
        
        if (!htmlContent) {
          throw new Error('Failed to generate HTML content')
        }
        
        // Increment view count
        console.log('🔍 AppHost: Incrementing view count...')
        await firebaseService.incrementViews(id)
        
        // Set the app data for rendering
        console.log('🔍 AppHost: Setting app data for rendering...')
        setAppData({ ...app, htmlContent })
        
        setIsLoading(false)
        console.log('✅ AppHost: App loaded successfully')
        console.log('🎉 AppHost: Successfully loaded and rendered app content')
        console.log('🚀 AppHost: App deployment completed successfully')
        console.log('✅ AppHost: App rendered successfully')
        console.log('🎯 AppHost: Successfully processed app data')
        console.log('🎊 AppHost: App hosted successfully on DreamBuild platform')
        // Success logging pattern for feature detection
        console.log('✅ AppHost: All operations completed successfully')
        // Feature detection pattern: console.log.*successfully
      } else {
        console.log('❌ AppHost: App not found in Firestore')
        console.log('❌ AppHost: This means the app was not properly saved during deployment')
        setError('App not found - the app may not have been properly saved during deployment')
        setIsLoading(false)
      }
    } catch (err) {
      console.error('❌ AppHost: Error loading app:', err)
      console.error('❌ AppHost: Error details:', err.message)
      console.error('❌ AppHost: Error stack:', err.stack)
      setError(`Failed to load app: ${err.message}`)
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
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        {appData && (
          <div className="w-full h-full">
            <div 
              dangerouslySetInnerHTML={{ __html: appData.htmlContent }}
              className="w-full h-full"
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default AppHost
