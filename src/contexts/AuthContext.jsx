import { createContext, useContext, useEffect, useState } from 'react'
import { onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth'
import { doc, setDoc, getDoc } from 'firebase/firestore'
import { auth, db } from '../config/firebase'
import toast from 'react-hot-toast'

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
            // Get user data from Firestore
            const userDoc = await getDoc(doc(db, 'users', user.uid))
            const userData = userDoc.exists() ? userDoc.data() : null
            
            setUser({
              uid: user.uid,
              email: user.email,
              displayName: user.displayName,
              photoURL: user.photoURL,
              ...userData
            })
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
      }, 3000)

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
      const result = await signInWithPopup(auth, provider)
      
      // Save user data to Firestore
      await setDoc(doc(db, 'users', result.user.uid), {
        uid: result.user.uid,
        email: result.user.email,
        displayName: result.user.displayName,
        photoURL: result.user.photoURL,
        createdAt: new Date(),
        lastLogin: new Date()
      }, { merge: true })
      
      toast.success('Successfully signed in!')
    } catch (error) {
      toast.error('Failed to sign in: ' + error.message)
    }
  }

  const logout = async () => {
    try {
      await signOut(auth)
      toast.success('Successfully signed out!')
    } catch (error) {
      toast.error('Failed to sign out: ' + error.message)
    }
  }

  const value = {
    user,
    loading,
    signInWithGoogle,
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
