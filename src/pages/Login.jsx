import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Github, ArrowRight, Loader2 } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'

const Login = () => {
  const { user, signInWithGoogle, signInWithGitHub, loading } = useAuth()
  const navigate = useNavigate()
  const [isSigningIn, setIsSigningIn] = useState(false)

  useEffect(() => {
    if (user && !loading) {
      navigate('/dashboard')
    }
  }, [user, loading, navigate])

  const handleGoogleSignIn = async () => {
    try {
      setIsSigningIn(true)
      await signInWithGoogle()
      // Success toast will be handled by AuthContext
    } catch (error) {
      console.error('Sign in error:', error)
      // Error toast will be handled by AuthContext
    } finally {
      setIsSigningIn(false)
    }
  }

  const handleGitHubSignIn = async () => {
    try {
      setIsSigningIn(true)
      await signInWithGitHub()
      // Success toast will be handled by AuthContext
    } catch (error) {
      console.error('GitHub sign in error:', error)
      // Error toast will be handled by AuthContext
    } finally {
      setIsSigningIn(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Header with Sign In/Sign Up buttons */}
      <div className="flex justify-between items-center p-6 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-slate-200/50 dark:border-slate-700/50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-lg">D</span>
          </div>
          <span className="font-bold text-xl text-slate-800 dark:text-white">DreamBuild</span>
        </div>
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = '/login'}
            className="px-5 py-2.5 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Sign in
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = '/signup'}
            className="px-5 py-2.5 text-sm font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl"
          >
            Sign up
          </motion.button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex items-center justify-center p-6 -mt-20">
        <div className="w-full max-w-md">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-8 shadow-2xl"
          >
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <span className="text-white font-bold text-2xl">D</span>
            </div>
            <h1 className="text-2xl font-bold mb-2 text-slate-800 dark:text-white">
              Welcome back
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Sign in to continue building amazing applications
            </p>
          </div>

          {/* Authentication Options */}
          <div className="space-y-4">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleGoogleSignIn}
              disabled={isSigningIn}
              className="w-full flex items-center justify-center gap-3 p-4 border border-slate-200 dark:border-slate-600 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all text-sm font-semibold bg-white dark:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md"
            >
              {isSigningIn ? (
                <Loader2 className="h-5 w-5 animate-spin text-blue-600" />
              ) : (
                <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-red-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">G</span>
                </div>
              )}
              {isSigningIn ? 'Signing in...' : 'Continue with Google'}
            </motion.button>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleGitHubSignIn}
              className="w-full flex items-center justify-center gap-3 p-4 border border-slate-200 dark:border-slate-600 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all text-sm font-semibold bg-white dark:bg-slate-700 shadow-sm hover:shadow-md"
            >
              <Github className="h-5 w-5" />
              Continue with GitHub
            </motion.button>
          </div>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200 dark:border-slate-600" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white dark:bg-slate-800 px-4 text-slate-500 dark:text-slate-400 font-medium">or</span>
            </div>
          </div>

          {/* Guest Access */}
          <div className="text-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/ai-builder"
              className="inline-flex items-center gap-2 px-6 py-3 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-semibold text-sm bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-xl border border-blue-200 dark:border-blue-700 hover:border-blue-300 dark:hover:border-blue-600"
            >
              Continue as Guest
              <ArrowRight className="h-4 w-4" />
            </motion.a>
          </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Login
