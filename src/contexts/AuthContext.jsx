import { createContext, useContext, useEffect, useState } from 'react'
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

  useEffect(() => {
    let unsubscribe
    let timeoutId

    try {
      unsubscribe = onAuthStateChanged(auth, async (user) => {
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
                 setLoading(false)
               }
      })

      // Fallback timeout to ensure loading state resolves
      timeoutId = setTimeout(() => {
        console.log('Firebase auth timeout - setting loading to false')
        setLoading(false)
      }, 5000)

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
      const provider = new GithubAuthProvider()
      // Add custom parameters
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
          if (error.code === 'auth/account-exists-with-different-credential') {
            // Handle account linking - simplified approach
            const email = error.customData?.email
            if (email) {
              // Check what providers are available for this email
              try {
                const signInMethods = await fetchSignInMethodsForEmail(auth, email)
                console.log('Available sign-in methods for', email, ':', signInMethods)
                
                if (signInMethods && signInMethods.length > 0) {
                  if (signInMethods.includes('google.com')) {
                    // User already has a Google account, suggest they use that
                    throw new Error(`An account with ${email} already exists using Google. Please sign in with Google instead, or use a different email for GitHub.`)
                  } else if (signInMethods.includes('password')) {
                    // User has email/password account
                    throw new Error(`An account with ${email} already exists using email/password. Please sign in with your existing method instead.`)
                  } else {
                    // Unknown provider
                    throw new Error(`An account with ${email} already exists. Please sign in with your existing method instead.`)
                  }
                } else {
                  // No sign-in methods found, but account exists - this might be a Firebase config issue
                  // Most likely the account was created with Google, so suggest that first
                  throw new Error(`An account with ${email} already exists. Please try signing in with Google first, then you can link your GitHub account.`)
                }
              } catch (linkError) {
                console.error('Failed to check sign-in methods:', linkError.message)
                throw new Error(`An account with ${email} already exists. Please sign in with your existing method instead.`)
              }
            } else {
              throw new Error('An account with this email already exists. Please sign in with your existing method instead.')
            }
          } else {
            console.error('Failed to sign in with GitHub:', error.message)
            throw error // Re-throw to let the component handle it
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

  return (
    <AuthContext.Provider value={value}>
      {loading ? (
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading DreamBuild...</p>
          </div>
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  )
}
