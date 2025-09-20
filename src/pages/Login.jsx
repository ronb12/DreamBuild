import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { User, Github, ArrowRight, Loader2, Sparkles } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'
import toast from 'react-hot-toast'

const Login = () => {
  const { user, signInWithGoogle, loading } = useAuth()
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
      toast.success('Welcome to DreamBuild! 🎉')
    } catch (error) {
      console.error('Sign in error:', error)
      toast.error('Failed to sign in. Please try again.')
    } finally {
      setIsSigningIn(false)
    }
  }

  const handleGitHubSignIn = () => {
    toast.info('GitHub authentication coming soon! 🚀')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground text-lg">Loading DreamBuild...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-card/90 backdrop-blur-md border border-border/50 rounded-2xl p-8 shadow-xl"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Sparkles className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl font-bold mb-3 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Welcome to DreamBuild
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              The universal AI development platform that brings your ideas to life
            </p>
          </div>

          {/* Authentication Options */}
          <div className="space-y-4 mb-8">
            <motion.button 
              whileHover={{ scale: isSigningIn ? 1 : 1.02 }}
              whileTap={{ scale: isSigningIn ? 1 : 0.98 }}
              onClick={handleGoogleSignIn}
              disabled={isSigningIn}
              className="w-full flex items-center justify-center gap-3 p-4 border border-border/50 rounded-xl hover:bg-muted/30 transition-all duration-200 font-semibold bg-background/60 backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md"
            >
              {isSigningIn ? (
                <Loader2 className="h-6 w-6 animate-spin text-primary" />
              ) : (
                <svg className="h-6 w-6" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              )}
              {isSigningIn ? 'Signing you in...' : 'Continue with Google'}
            </motion.button>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleGitHubSignIn}
              className="w-full flex items-center justify-center gap-3 p-4 border border-border/50 rounded-xl hover:bg-muted/30 transition-all duration-200 font-semibold bg-background/60 backdrop-blur-sm shadow-sm hover:shadow-md"
            >
              <Github className="h-6 w-6" />
              Continue with GitHub
            </motion.button>
          </div>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border/30" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-card/90 px-4 text-muted-foreground font-medium">or</span>
            </div>
          </div>

          {/* Guest Access */}
          <div className="text-center">
            <p className="text-muted-foreground mb-6 text-lg">
              Want to explore without signing in?
            </p>
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="/ai-builder"
              className="inline-flex items-center gap-3 px-8 py-4 text-primary hover:text-primary-dark transition-all duration-300 font-semibold text-lg bg-primary/10 hover:bg-primary/20 rounded-2xl border border-primary/20 hover:border-primary/30 shadow-lg hover:shadow-xl"
            >
              Continue as Guest
              <ArrowRight className="h-5 w-5" />
            </motion.a>
          </div>

          {/* Features Preview */}
          <div className="mt-6 pt-6 border-t border-border/30">
            <h3 className="text-center text-sm font-semibold mb-4 text-foreground">
              What you'll get with DreamBuild:
            </h3>
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="p-3 rounded-lg bg-primary/5 border border-primary/10">
                <Sparkles className="h-4 w-4 text-primary mx-auto mb-2" />
                <h4 className="font-semibold text-xs mb-1">AI Development</h4>
                <p className="text-xs text-muted-foreground">Generate code</p>
              </div>
              <div className="p-3 rounded-lg bg-primary/5 border border-primary/10">
                <User className="h-4 w-4 text-primary mx-auto mb-2" />
                <h4 className="font-semibold text-xs mb-1">Projects</h4>
                <p className="text-xs text-muted-foreground">Save & organize</p>
              </div>
              <div className="p-3 rounded-lg bg-primary/5 border border-primary/10">
                <Github className="h-4 w-4 text-primary mx-auto mb-2" />
                <h4 className="font-semibold text-xs mb-1">Deploy</h4>
                <p className="text-xs text-muted-foreground">Firebase & GitHub</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Login
