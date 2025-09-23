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
      console.log('Using direct GitHub OAuth (like Cursor IDE)')
      
      // Use direct GitHub OAuth instead of Firebase
      // Try popup first, fallback to redirect if popup fails
      let user;
      try {
        user = await githubOAuth.authenticate()
      } catch (popupError) {
        console.log('Popup failed, using redirect method:', popupError.message)
        githubOAuth.authenticateWithRedirect()
        return // Will redirect, so don't continue
      }
      
      // Create a Firebase-compatible user object
      const firebaseUser = {
        uid: `github_${user.id}`,
        email: user.email,
        displayName: user.name || user.login,
        photoURL: user.avatar_url,
        provider: 'github'
      }
      
      // Save user data to Firestore with error handling
      try {
        await setDoc(doc(db, 'users', firebaseUser.uid), {
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          displayName: firebaseUser.displayName,
          photoURL: firebaseUser.photoURL,
          provider: 'github',
          githubId: user.id,
          githubLogin: user.login,
          createdAt: new Date(),
          lastLogin: new Date()
        }, { merge: true })
      } catch (firestoreError) {
        console.warn('Failed to save user data to Firestore:', firestoreError)
        // Continue with authentication even if Firestore fails
      }
      
      // Set user in context
      setUser(firebaseUser)
      
      console.log('Successfully signed in with GitHub!')
    } catch (error) {
      console.error('GitHub OAuth error:', error.message)
      
      // If popup is blocked, offer redirect option
      if (error.message.includes('Popup blocked')) {
        const useRedirect = confirm('Popups are blocked. Would you like to redirect to GitHub for authentication?')
        if (useRedirect) {
          githubOAuth.authenticateWithRedirect()
          return
        }
      }
      
      throw error
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
