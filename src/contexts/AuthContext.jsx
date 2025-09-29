import React, { createContext, useContext, useEffect, useState } from 'react'
import { onAuthStateChanged, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, signOut, fetchSignInMethodsForEmail, linkWithCredential } from 'firebase/auth'
import { doc, setDoc, getDoc } from 'firebase/firestore'
import { auth, db } from '../config/firebase'

const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  
  console.log('🔐 AuthProvider rendering, loading:', loading, 'user:', !!user)

  useEffect(() => {
    let unsubscribe
    let timeoutId

    try {
      console.log('🔐 Setting up Firebase auth listener...')
      unsubscribe = onAuthStateChanged(auth, async (user) => {
               console.log('🔐 Auth state changed:', user ? 'User logged in' : 'User logged out')
               try {
                 if (user) {
                   // Get user data from Firestore with error handling
                   try {
                     const userDoc = await getDoc(doc(db, 'users', user.uid))
                     const userData = userDoc.exists() ? userDoc.data() : null
                     
                     setUser({
                       uid: user.uid,
                       email: user.email,
                       displayName: user.displayName,
                       photoURL: user.photoURL,
                       ...userData
                     })
                   } catch (firestoreError) {
                     console.log('⚠️ Firestore not available, using basic user data:', firestoreError.message)
                     // Set user without Firestore data
                     setUser({
                       uid: user.uid,
                       email: user.email,
                       displayName: user.displayName,
                       photoURL: user.photoURL
                     })
                   }
                 } else {
                   setUser(null)
                 }
               } catch (error) {
                 console.error('Error in auth state change:', error)
                 setUser(null)
               } finally {
                 console.log('🔐 Setting loading to false')
                 setLoading(false)
               }
      })

      // Fallback timeout to ensure loading state resolves
      timeoutId = setTimeout(() => {
        console.log('⏰ Firebase auth timeout - setting loading to false')
        setLoading(false)
      }, 2000) // Reduced from 5000ms to 2000ms

    } catch (error) {
      console.error('Error setting up auth listener:', error)
      setLoading(false)
    }

    return () => {
      if (unsubscribe) unsubscribe()
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [])

  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider()
      // Add custom parameters to avoid CORS issues
      provider.addScope('email')
      provider.addScope('profile')
      
      const result = await signInWithPopup(auth, provider)
      
      // Save user data to Firestore with error handling
      try {
        await setDoc(doc(db, 'users', result.user.uid), {
          uid: result.user.uid,
          email: result.user.email,
          displayName: result.user.displayName,
          photoURL: result.user.photoURL,
          createdAt: new Date(),
          lastLogin: new Date()
        }, { merge: true })
      } catch (firestoreError) {
        console.warn('Failed to save user data to Firestore:', firestoreError)
        // Continue with authentication even if Firestore fails
      }
      
      console.log('Successfully signed in!')
    } catch (error) {
      console.error('Failed to sign in:', error.message)
      throw error // Re-throw to let the component handle it
    }
  }

  const signInWithGitHub = async () => {
    try {
      console.log('Using Firebase GitHub authentication')
      
      // Use Firebase's built-in GitHub authentication
      const provider = new GithubAuthProvider()
      provider.addScope('user:email')
      
      const result = await signInWithPopup(auth, provider)
      
      // Save user data to Firestore with error handling
      try {
        await setDoc(doc(db, 'users', result.user.uid), {
          uid: result.user.uid,
          email: result.user.email,
          displayName: result.user.displayName || result.user.email?.split('@')[0] || 'GitHub User',
          photoURL: result.user.photoURL,
          provider: 'github',
          createdAt: new Date(),
          lastLogin: new Date()
        }, { merge: true })
      } catch (firestoreError) {
        console.warn('Failed to save user data to Firestore:', firestoreError)
        // Continue with authentication even if Firestore fails
      }
      
      console.log('Successfully signed in with GitHub!')
    } catch (error) {
      console.error('GitHub authentication error:', error.message)
      
      if (error.code === 'auth/account-exists-with-different-credential') {
        const email = error.customData?.email
        if (email) {
          try {
            const signInMethods = await fetchSignInMethodsForEmail(auth, email)
            console.log('Available sign-in methods for', email, ':', signInMethods)
            
            if (signInMethods && signInMethods.length > 0) {
              if (signInMethods.includes('google.com')) {
                throw new Error(`An account with ${email} already exists using Google. Please sign in with Google instead, then you can link your GitHub account.`)
              } else if (signInMethods.includes('password')) {
                throw new Error(`An account with ${email} already exists using email/password. Please sign in with your existing method instead.`)
              } else {
                throw new Error(`An account with ${email} already exists. Please sign in with your existing method instead.`)
              }
            } else {
              throw new Error(`An account with ${email} already exists. Please try signing in with Google first, then you can link your GitHub account.`)
            }
          } catch (linkError) {
            console.error('Failed to check sign-in methods:', linkError.message)
            throw new Error(`An account with ${email} already exists. Please sign in with your existing method instead.`)
          }
        } else {
          throw new Error('An account with this email already exists. Please sign in with your existing method instead.')
        }
      } else if (error.code === 'auth/internal-error') {
        console.error('GitHub authentication internal error:', error.message)
        throw new Error('GitHub authentication is not properly configured. Please check Firebase Console settings.')
      } else {
        console.error('Failed to sign in with GitHub:', error.message)
        throw error
      }
    }
  }

  const logout = async () => {
    try {
      await signOut(auth)
      console.log('Successfully signed out!')
    } catch (error) {
      console.error('Failed to sign out:', error.message)
    }
  }

  const value = {
    user,
    loading,
    signInWithGoogle,
    signInWithGitHub,
    logout,
    auth,
    db
  }

  console.log('🔐 AuthProvider render - loading:', loading, 'showing children:', !loading)
  
  // Emergency bypass for debugging - remove this after fixing
  if (loading && window.location.search.includes('debug=1')) {
    console.log('🚨 DEBUG MODE: Bypassing auth loading state')
    return (
      <AuthContext.Provider value={value}>
        {children}
      </AuthContext.Provider>
    )
  }
  
  return (
    <AuthContext.Provider value={value}>
      {loading ? (
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading DreamBuild...</p>
            <p className="text-xs text-muted-foreground mt-2">Add ?debug=1 to URL to bypass loading</p>
          </div>
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  )
}
