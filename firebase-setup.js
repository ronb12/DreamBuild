// Firebase Setup Script for DreamBuild
// Creates all necessary collections, documents, and initial data

const { initializeApp } = require('firebase/app')
const { getFirestore, collection, doc, setDoc, addDoc, writeBatch } = require('firebase/firestore')

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || "your-api-key",
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || "your-project.firebaseapp.com",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || "your-project-id",
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || "your-project.appspot.com",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || "123456789",
  appId: process.env.REACT_APP_FIREBASE_APP_ID || "your-app-id"
}

async function setupFirebase() {
  try {
    console.log('🔥 Initializing Firebase...')
    
    const app = initializeApp(firebaseConfig)
    const db = getFirestore(app)
    
    console.log('✅ Firebase initialized successfully')
    
    // Create initial template database
    console.log('📚 Creating template database...')
    await createTemplateDatabase(db)
    
    // Create initial collections structure
    console.log('📁 Creating collections structure...')
    await createCollectionsStructure(db)
    
    // Create sample data
    console.log('📊 Creating sample data...')
    await createSampleData(db)
    
    console.log('🎉 Firebase setup completed successfully!')
    console.log('📋 Collections created:')
    console.log('  - projectContexts')
    console.log('  - projectFiles')
    console.log('  - conversationMemory')
    console.log('  - projectPresence')
    console.log('  - cursors')
    console.log('  - comments')
    console.log('  - versions')
    console.log('  - fileChanges')
    console.log('  - templates')
    console.log('  - aiLearningPatterns')
    console.log('  - userPreferences')
    console.log('  - deployments')
    console.log('  - projectShares')
    console.log('  - notifications')
    console.log('  - analytics')
    
  } catch (error) {
    console.error('❌ Firebase setup failed:', error)
    process.exit(1)
  }
}

// Create template database
async function createTemplateDatabase(db) {
  const templates = [
    {
      id: 'react-dashboard',
      name: 'React Dashboard Template',
      keywords: ['dashboard', 'analytics', 'admin', 'management', 'data', 'charts'],
      technologies: ['react', 'jsx', 'typescript', 'css'],
      patterns: ['dashboard', 'data-visualization', 'admin-panel'],
      complexity: 'medium',
      relevanceScore: 0.9,
      files: {
        'src/components/Dashboard.jsx': '// Dashboard component template',
        'src/components/Chart.jsx': '// Chart component template',
        'src/components/DataTable.jsx': '// Data table template',
        'src/components/Header.jsx': '// Header component template',
        'src/components/Sidebar.jsx': '// Sidebar component template'
      },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      usageCount: 0
    },
    {
      id: 'ecommerce-store',
      name: 'E-commerce Store Template',
      keywords: ['ecommerce', 'shop', 'store', 'payment', 'checkout', 'cart', 'products'],
      technologies: ['react', 'jsx', 'css', 'javascript'],
      patterns: ['ecommerce', 'shopping-cart', 'payment', 'product-catalog'],
      complexity: 'complex',
      relevanceScore: 0.8,
      files: {
        'src/components/ProductList.jsx': '// Product list template',
        'src/components/Cart.jsx': '// Shopping cart template',
        'src/components/Checkout.jsx': '// Checkout template',
        'src/components/ProductCard.jsx': '// Product card template',
        'src/components/PaymentForm.jsx': '// Payment form template'
      },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      usageCount: 0
    },
    {
      id: 'auth-system',
      name: 'Authentication System Template',
      keywords: ['auth', 'login', 'register', 'security', 'user', 'authentication'],
      technologies: ['react', 'jsx', 'css', 'javascript'],
      patterns: ['authentication', 'authorization', 'user-management'],
      complexity: 'medium',
      relevanceScore: 0.7,
      files: {
        'src/components/LoginForm.jsx': '// Login form template',
        'src/components/RegisterForm.jsx': '// Register form template',
        'src/components/ProtectedRoute.jsx': '// Protected route template',
        'src/components/UserProfile.jsx': '// User profile template',
        'src/context/AuthContext.jsx': '// Auth context template'
      },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      usageCount: 0
    },
    {
      id: 'blog-cms',
      name: 'Blog CMS Template',
      keywords: ['blog', 'cms', 'content', 'article', 'post', 'editor'],
      technologies: ['react', 'jsx', 'css', 'javascript'],
      patterns: ['cms', 'content-management', 'blog', 'editor'],
      complexity: 'medium',
      relevanceScore: 0.6,
      files: {
        'src/components/BlogPost.jsx': '// Blog post template',
        'src/components/PostList.jsx': '// Post list template',
        'src/components/Editor.jsx': '// Content editor template',
        'src/components/PostCard.jsx': '// Post card template',
        'src/components/CategoryFilter.jsx': '// Category filter template'
      },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      usageCount: 0
    },
    {
      id: 'landing-page',
      name: 'Landing Page Template',
      keywords: ['landing', 'page', 'marketing', 'hero', 'features', 'contact'],
      technologies: ['react', 'jsx', 'css', 'javascript'],
      patterns: ['landing-page', 'marketing', 'hero-section'],
      complexity: 'simple',
      relevanceScore: 0.5,
      files: {
        'src/components/Hero.jsx': '// Hero section template',
        'src/components/Features.jsx': '// Features section template',
        'src/components/Contact.jsx': '// Contact section template',
        'src/components/Footer.jsx': '// Footer template',
        'src/components/Navbar.jsx': '// Navbar template'
      },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      usageCount: 0
    }
  ]

  const batch = writeBatch(db)
  
  templates.forEach(template => {
    const templateRef = doc(db, 'templates', template.id)
    batch.set(templateRef, template)
  })
  
  await batch.commit()
  console.log('✅ Template database created with', templates.length, 'templates')
}

// Create collections structure
async function createCollectionsStructure(db) {
  const collections = [
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

  // Create sample documents for each collection to ensure they exist
  const batch = writeBatch(db)
  
  collections.forEach(collectionName => {
    const docRef = doc(collection(db, collectionName), 'sample')
    batch.set(docRef, {
      _sample: true,
      createdAt: new Date().toISOString()
    })
  })
  
  await batch.commit()
  console.log('✅ Collections structure created')
}

// Create sample data
async function createSampleData(db) {
  // Create sample project context
  const sampleProjectContext = {
    projectId: 'sample-project',
    projectName: 'Sample Project',
    userId: 'sample-user',
    createdAt: new Date().toISOString(),
    lastUpdated: new Date().toISOString(),
    prompt: 'Create a sample React application',
    files: {
      'package.json': '{"name": "sample-app", "version": "1.0.0"}',
      'src/App.jsx': 'import React from "react";\n\nconst App = () => {\n  return <div>Hello World</div>;\n};\n\nexport default App;'
    },
    technologies: ['react', 'javascript'],
    patterns: ['spa', 'component-based'],
    architecture: ['component-based'],
    complexity: 'simple',
    enhancementHistory: [],
    conversationHistory: [],
    userPreferences: {},
    projectState: {
      fileCount: 2,
      totalLines: 10,
      lastModified: new Date().toISOString()
    }
  }

  const projectContextRef = doc(db, 'projectContexts', 'sample-project')
  await setDoc(projectContextRef, sampleProjectContext)

  // Create sample conversation memory
  const sampleConversationMemory = {
    projectId: 'sample-project',
    userId: 'sample-user',
    conversation: {
      projectId: 'sample-project',
      prompts: [
        {
          id: 'prompt-1',
          text: 'Create a sample React application',
          timestamp: new Date().toISOString(),
          context: {}
        }
      ],
      responses: [
        {
          id: 'response-1',
          promptId: 'prompt-1',
          text: 'Generated a sample React application with package.json and App.jsx',
          timestamp: new Date().toISOString(),
          context: {}
        }
      ],
      context: {},
      createdAt: new Date().toISOString(),
      lastUpdated: new Date().toISOString()
    },
    lastUpdated: new Date().toISOString(),
    memorySize: 1000
  }

  const conversationMemoryRef = doc(db, 'conversationMemory', 'sample-project')
  await setDoc(conversationMemoryRef, sampleConversationMemory)

  console.log('✅ Sample data created')
}

// Run setup if called directly
if (require.main === module) {
  setupFirebase()
}

module.exports = { setupFirebase }
