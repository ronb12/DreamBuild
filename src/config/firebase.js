import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

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

// Initialize Firebase services
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app
