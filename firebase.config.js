// Firebase Configuration for DreamBuild
// This file contains Firebase configuration for unlimited cloud storage

const firebaseConfig = {
  // Replace with your Firebase project configuration
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || "your-api-key",
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || "your-project.firebaseapp.com",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || "your-project-id",
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || "your-project.appspot.com",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || "123456789",
  appId: process.env.REACT_APP_FIREBASE_APP_ID || "your-app-id",
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID || "G-XXXXXXXXXX"
}

// Firebase Collections Structure
const COLLECTIONS = {
  PROJECT_CONTEXTS: 'projectContexts',
  PROJECT_FILES: 'projectFiles',
  TEMPLATES: 'templates',
  USER_PREFERENCES: 'userPreferences',
  CONVERSATION_HISTORY: 'conversationHistory',
  ENHANCEMENT_HISTORY: 'enhancementHistory'
}

// Storage Limits and Configuration
const STORAGE_CONFIG = {
  MAX_LOCAL_STORAGE_SIZE: 5 * 1024 * 1024, // 5MB
  MAX_FIREBASE_DOCUMENT_SIZE: 1 * 1024 * 1024, // 1MB per document
  MAX_FIREBASE_BATCH_SIZE: 500, // 500 documents per batch
  COMPRESSION_THRESHOLD: 100 * 1024, // 100KB - compress if larger
  CACHE_DURATION: 24 * 60 * 60 * 1000, // 24 hours
  RETRY_ATTEMPTS: 3,
  RETRY_DELAY: 1000 // 1 second
}

// Firebase Security Rules (for reference)
const SECURITY_RULES = `
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Project contexts - users can read/write their own projects
    match /projectContexts/{projectId} {
      allow read, write: if request.auth != null && 
        request.auth.uid == resource.data.userId;
    }
    
    // Project files - users can read/write their own files
    match /projectFiles/{projectId} {
      allow read, write: if request.auth != null && 
        request.auth.uid == resource.data.userId;
    }
    
    // Templates - public read, authenticated write
    match /templates/{templateId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    
    // User preferences - users can read/write their own preferences
    match /userPreferences/{userId} {
      allow read, write: if request.auth != null && 
        request.auth.uid == userId;
    }
  }
}
`

module.exports = {
  firebaseConfig,
  COLLECTIONS,
  STORAGE_CONFIG,
  SECURITY_RULES
}
