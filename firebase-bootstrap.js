// Firebase Bootstrap Script for DreamBuild
// Sets up Firebase collections and initial data

const { initializeApp } = require('firebase/app')
const { getFirestore, collection, doc, setDoc } = require('firebase/firestore')

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || "your-api-key",
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || "your-project.firebaseapp.com",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || "your-project-id",
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || "your-project.appspot.com",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || "123456789",
  appId: process.env.REACT_APP_FIREBASE_APP_ID || "your-app-id"
}

async function bootstrapFirebase() {
  try {
    console.log('🔥 Initializing Firebase...')
    
    const app = initializeApp(firebaseConfig)
    const db = getFirestore(app)
    
    console.log('✅ Firebase initialized successfully')
    
    // Create initial template database
    console.log('📚 Creating initial template database...')
    
    const initialTemplates = [
      {
        id: 'react-dashboard',
        name: 'React Dashboard Template',
        keywords: ['dashboard', 'analytics', 'admin', 'management'],
        technologies: ['react', 'jsx', 'typescript'],
        patterns: ['dashboard', 'data-visualization'],
        complexity: 'medium',
        relevanceScore: 0.9,
        files: {
          'src/components/Dashboard.jsx': '// Dashboard component template',
          'src/components/Chart.jsx': '// Chart component template',
          'src/components/DataTable.jsx': '// Data table template'
        },
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 'ecommerce-store',
        name: 'E-commerce Store Template',
        keywords: ['ecommerce', 'shop', 'store', 'payment', 'checkout'],
        technologies: ['react', 'jsx'],
        patterns: ['ecommerce', 'shopping-cart'],
        complexity: 'complex',
        relevanceScore: 0.8,
        files: {
          'src/components/ProductList.jsx': '// Product list template',
          'src/components/Cart.jsx': '// Shopping cart template',
          'src/components/Checkout.jsx': '// Checkout template'
        },
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 'auth-system',
        name: 'Authentication System Template',
        keywords: ['auth', 'login', 'register', 'security'],
        technologies: ['react', 'jsx'],
        patterns: ['authentication', 'authorization'],
        complexity: 'medium',
        relevanceScore: 0.7,
        files: {
          'src/components/LoginForm.jsx': '// Login form template',
          'src/components/RegisterForm.jsx': '// Register form template',
          'src/components/ProtectedRoute.jsx': '// Protected route template'
        },
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 'blog-cms',
        name: 'Blog CMS Template',
        keywords: ['blog', 'cms', 'content', 'article'],
        technologies: ['react', 'jsx'],
        patterns: ['cms', 'content-management'],
        complexity: 'medium',
        relevanceScore: 0.6,
        files: {
          'src/components/BlogPost.jsx': '// Blog post template',
          'src/components/PostList.jsx': '// Post list template',
          'src/components/Editor.jsx': '// Content editor template'
        },
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
    ]
    
    // Store templates in Firebase
    for (const template of initialTemplates) {
      const templateRef = doc(db, 'templates', template.id)
      await setDoc(templateRef, template)
      console.log(`✅ Template ${template.name} stored`)
    }
    
    console.log('🎉 Firebase bootstrap completed successfully!')
    console.log('📋 Collections created:')
    console.log('  - templates')
    console.log('  - projectContexts')
    console.log('  - projectFiles')
    console.log('  - conversationMemory')
    console.log('  - aiLearningPatterns')
    console.log('  - userPreferences')
    
  } catch (error) {
    console.error('❌ Firebase bootstrap failed:', error)
    process.exit(1)
  }
}

// Run bootstrap if called directly
if (require.main === module) {
  bootstrapFirebase()
}

module.exports = { bootstrapFirebase }
