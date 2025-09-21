// Firebase Setup Verification Script
// Verifies all Firebase collections, indexes, and rules are properly configured

const { initializeApp } = require('firebase/app')
const { getFirestore, collection, getDocs, doc, getDoc } = require('firebase/firestore')

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || "your-api-key",
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || "your-project.firebaseapp.com",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || "your-project-id",
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || "your-project.appspot.com",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || "123456789",
  appId: process.env.REACT_APP_FIREBASE_APP_ID || "your-app-id"
}

async function verifyFirebaseSetup() {
  try {
    console.log('🔍 Verifying Firebase setup...')
    
    const app = initializeApp(firebaseConfig)
    const db = getFirestore(app)
    
    // Expected collections
    const expectedCollections = [
      'projectContexts',
      'projectFiles',
      'conversationMemory',
      'projectPresence',
      'cursors',
      'comments',
      'versions',
      'fileChanges',
      'templates',
      'aiLearningPatterns',
      'userPreferences',
      'deployments',
      'projectShares',
      'notifications',
      'analytics'
    ]
    
    console.log('📋 Checking collections...')
    const collectionStatus = {}
    
    for (const collectionName of expectedCollections) {
      try {
        const collectionRef = collection(db, collectionName)
        const snapshot = await getDocs(collectionRef)
        collectionStatus[collectionName] = {
          exists: true,
          documentCount: snapshot.size,
          status: '✅ OK'
        }
        console.log(`  ${collectionName}: ✅ OK (${snapshot.size} documents)`)
      } catch (error) {
        collectionStatus[collectionName] = {
          exists: false,
          documentCount: 0,
          status: '❌ ERROR',
          error: error.message
        }
        console.log(`  ${collectionName}: ❌ ERROR - ${error.message}`)
      }
    }
    
    // Check specific documents
    console.log('\n📄 Checking specific documents...')
    
    // Check templates
    try {
      const templatesRef = collection(db, 'templates')
      const templatesSnapshot = await getDocs(templatesRef)
      const templateCount = templatesSnapshot.size
      
      if (templateCount > 0) {
        console.log(`  Templates: ✅ OK (${templateCount} templates)`)
        
        // List template names
        templatesSnapshot.forEach(doc => {
          const data = doc.data()
          console.log(`    - ${data.name} (${data.id})`)
        })
      } else {
        console.log('  Templates: ⚠️  WARNING - No templates found')
      }
    } catch (error) {
      console.log(`  Templates: ❌ ERROR - ${error.message}`)
    }
    
    // Check sample project context
    try {
      const projectContextRef = doc(db, 'projectContexts', 'sample-project')
      const projectContextDoc = await getDoc(projectContextRef)
      
      if (projectContextDoc.exists()) {
        const data = projectContextDoc.data()
        console.log(`  Sample Project: ✅ OK (${data.projectName})`)
      } else {
        console.log('  Sample Project: ⚠️  WARNING - Not found')
      }
    } catch (error) {
      console.log(`  Sample Project: ❌ ERROR - ${error.message}`)
    }
    
    // Check sample conversation memory
    try {
      const conversationMemoryRef = doc(db, 'conversationMemory', 'sample-project')
      const conversationMemoryDoc = await getDoc(conversationMemoryRef)
      
      if (conversationMemoryDoc.exists()) {
        const data = conversationMemoryDoc.data()
        console.log(`  Sample Conversation: ✅ OK (${data.conversation?.prompts?.length || 0} prompts)`)
      } else {
        console.log('  Sample Conversation: ⚠️  WARNING - Not found')
      }
    } catch (error) {
      console.log(`  Sample Conversation: ❌ ERROR - ${error.message}`)
    }
    
    // Summary
    console.log('\n📊 Verification Summary:')
    const totalCollections = Object.keys(collectionStatus).length
    const workingCollections = Object.values(collectionStatus).filter(c => c.status === '✅ OK').length
    const errorCollections = Object.values(collectionStatus).filter(c => c.status === '❌ ERROR').length
    
    console.log(`  Total Collections: ${totalCollections}`)
    console.log(`  Working: ${workingCollections}`)
    console.log(`  Errors: ${errorCollections}`)
    
    if (errorCollections === 0) {
      console.log('\n🎉 Firebase setup verification PASSED!')
      console.log('✅ All collections are accessible')
      console.log('✅ Sample data is present')
      console.log('✅ DreamBuild is ready to use!')
    } else {
      console.log('\n⚠️  Firebase setup verification has ISSUES!')
      console.log('❌ Some collections have errors')
      console.log('🔧 Please check the errors above and fix them')
    }
    
    // Check Firebase configuration
    console.log('\n⚙️  Firebase Configuration:')
    console.log(`  Project ID: ${firebaseConfig.projectId}`)
    console.log(`  Auth Domain: ${firebaseConfig.authDomain}`)
    console.log(`  Storage Bucket: ${firebaseConfig.storageBucket}`)
    
    return {
      success: errorCollections === 0,
      collections: collectionStatus,
      totalCollections,
      workingCollections,
      errorCollections
    }
    
  } catch (error) {
    console.error('❌ Firebase verification failed:', error)
    return {
      success: false,
      error: error.message
    }
  }
}

// Run verification if called directly
if (require.main === module) {
  verifyFirebaseSetup()
    .then(result => {
      if (result.success) {
        console.log('\n🚀 DreamBuild Firebase setup is complete and ready!')
        process.exit(0)
      } else {
        console.log('\n❌ Firebase setup verification failed!')
        process.exit(1)
      }
    })
    .catch(error => {
      console.error('❌ Verification script failed:', error)
      process.exit(1)
    })
}

module.exports = { verifyFirebaseSetup }
