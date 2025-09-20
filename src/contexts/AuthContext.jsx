import { createContext, useContext, useEffect, useState } from 'react'
import { initializeApp } from 'firebase/app'
import { getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth'
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore'
import toast from 'react-hot-toast'

// Firebase config
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyCWjBfZHPHDI4rXRStWPP48lRZVJquWH38",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "dreambuild-2024-app.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "dreambuild-2024-app",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "dreambuild-2024-app.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "780467658601",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:780467658601:web:833a9373c15fa3be0be7f8"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
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
      setLoading(false)
    })

    return unsubscribe
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
      {!loading && children}
    </AuthContext.Provider>
  )
}
