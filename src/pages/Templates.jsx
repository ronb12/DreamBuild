import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Link, useLocation, useNavigate } from '../utils/navigation';
import { motion } from 'framer-motion'
import { 
  FileText, 
  Code, 
  Globe, 
  Smartphone, 
  Database, 
  ShoppingCart, 
  Users, 
  BarChart3,
  Palette,
  Zap,
  Search,
  Filter,
  Grid,
  List,
  Star,
  Download,
  Eye,
  Copy,
  ArrowRight,
  Sparkles,
  Rocket,
  X
} from 'lucide-react'
import { useProject } from '../contexts/ProjectContext'
import { useTheme } from '../contexts/ThemeContext'
import toast from 'react-hot-toast'

const Templates = () => {
  const { addFilesToProject } = useProject()
  const { theme } = useTheme()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [viewMode, setViewMode] = useState('grid') // 'grid' or 'list'
  const [sortBy, setSortBy] = useState('popularity') // 'popularity', 'newest', 'name'
  const [allTemplates, setAllTemplates] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [loadingMessage, setLoadingMessage] = useState('Loading templates...')
  const [showPreview, setShowPreview] = useState(false)
  const [previewTemplate, setPreviewTemplate] = useState(null)

  // Template categories and data
  const templateCategories = [
    {
      id: 'web-apps',
      name: 'Web Applications',
      icon: Globe,
      description: 'Full-stack web applications',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'mobile-apps',
      name: 'Mobile Apps',
      icon: Smartphone,
      description: 'React Native and mobile applications',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'landing-pages',
      name: 'Landing Pages',
      icon: FileText,
      description: 'Marketing and landing pages',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'dashboards',
      name: 'Dashboards',
      icon: BarChart3,
      description: 'Analytics and admin dashboards',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'ecommerce',
      name: 'E-commerce',
      icon: ShoppingCart,
      description: 'Online stores and marketplaces',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 'portfolio',
      name: 'Portfolio',
      icon: Palette,
      description: 'Personal and creative portfolios',
      color: 'from-indigo-500 to-purple-500'
    }
  ]

  // Sample templates data
  const templates = [
    // Web Apps
    {
      id: 'todo-app',
      name: 'Todo Application',
      description: 'A modern todo app with React, Node.js, and MongoDB',
      category: 'web-apps',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      preview: '/api/placeholder/400/300',
      popularity: 95,
      createdAt: '2024-01-15',
      files: {
        'package.json': '{"name": "todo-app", "version": "1.0.0", "dependencies": {"react": "^18.0.0"}}',
        'src/App.jsx': 'import React from "react"; export default function App() { return <div>Todo App</div>; }'
      }
    },
    {
      id: 'blog-platform',
      name: 'Blog Platform',
      description: 'Full-featured blog with CMS, comments, and SEO',
      category: 'web-apps',
      tags: ['React', 'Next.js', 'Prisma', 'PostgreSQL'],
      preview: '/api/placeholder/400/300',
      popularity: 88,
      createdAt: '2024-01-10',
      files: {
        'package.json': '{"name": "blog-platform", "version": "1.0.0"}',
        'src/App.jsx': 'import React from "react"; export default function App() { return <div>Blog Platform</div>; }'
      }
    },
    // Mobile Apps
    {
      id: 'weather-app',
      name: 'Weather App',
      description: 'Beautiful weather app with location services',
      category: 'mobile-apps',
      tags: ['React Native', 'Expo', 'API'],
      preview: '/api/placeholder/400/300',
      popularity: 82,
      createdAt: '2024-01-12',
      files: {
        'package.json': '{"name": "weather-app", "version": "1.0.0"}',
        'App.js': 'import React from "react"; export default function App() { return <div>Weather App</div>; }'
      }
    },
    // Landing Pages
    {
      id: 'saas-landing',
      name: 'SaaS Landing Page',
      description: 'Modern SaaS landing page with pricing and features',
      category: 'landing-pages',
      tags: ['React', 'Tailwind CSS', 'Framer Motion'],
      preview: '/api/placeholder/400/300',
      popularity: 90,
      createdAt: '2024-01-08',
      files: {
        'package.json': '{"name": "saas-landing", "version": "1.0.0"}',
        'src/App.jsx': 'import React from "react"; export default function App() { return <div>SaaS Landing</div>; }'
      }
    },
    // Dashboards
    {
      id: 'analytics-dashboard',
      name: 'Analytics Dashboard',
      description: 'Real-time analytics dashboard with charts and metrics',
      category: 'dashboards',
      tags: ['React', 'Chart.js', 'D3.js', 'WebSocket'],
      preview: '/api/placeholder/400/300',
      popularity: 85,
      createdAt: '2024-01-05',
      files: {
        'package.json': '{"name": "analytics-dashboard", "version": "1.0.0"}',
        'src/App.jsx': 'import React from "react"; export default function App() { return <div>Analytics Dashboard</div>; }'
      }
    },
    // E-commerce
    {
      id: 'online-store',
      name: 'Online Store',
      description: 'Complete e-commerce solution with cart and payments',
      category: 'ecommerce',
      tags: ['React', 'Stripe', 'Firebase', 'Redux'],
      preview: '/api/placeholder/400/300',
      popularity: 92,
      createdAt: '2024-01-03',
      files: {
        'package.json': '{"name": "online-store", "version": "1.0.0"}',
        'src/App.jsx': 'import React from "react"; export default function App() { return <div>Online Store</div>; }'
      }
    },
    // Portfolio
    {
      id: 'creative-portfolio',
      name: 'Creative Portfolio',
      description: 'Stunning portfolio for designers and developers',
      category: 'portfolio',
      tags: ['React', 'Three.js', 'GSAP', 'Framer Motion'],
      preview: '/api/placeholder/400/300',
      popularity: 87,
      createdAt: '2024-01-01',
      files: {
        'package.json': '{"name": "creative-portfolio", "version": "1.0.0"}',
        'src/App.jsx': 'import React from "react"; export default function App() { return <div>Creative Portfolio</div>; }'
      }
    }
  ]

  // Load GitHub templates on component mount
  useEffect(() => {
    const loadTemplates = async () => {
      try {
        setIsLoading(true)
        setLoadingProgress(0)
        setLoadingMessage('Loading templates...')
        
        // Step 1: Load local templates
        setLoadingProgress(20)
        setLoadingMessage('Loading local templates...')
        
        // Step 2: Import service
        setLoadingProgress(40)
        setLoadingMessage('Initializing template service...')
        const { default: simpleAIService } = await import('../services/simpleAIService.js')
        
        // Step 3: Fetch GitHub templates with timeout
        setLoadingProgress(60)
        setLoadingMessage('Fetching trending templates from GitHub...')
        
        // Add timeout to prevent hanging (increased to 30 seconds for GitHub API)
        const githubTemplatesPromise = simpleAIService.getAllTemplates()
        const timeoutPromise = new Promise((_, reject) => 
          setTimeout(() => reject(new Error('Template loading timeout')), 30000)
        )
        
        const githubTemplates = await Promise.race([githubTemplatesPromise, timeoutPromise])
        
        // Step 4: Combine templates
        setLoadingProgress(80)
        setLoadingMessage('Processing templates...')
        setAllTemplates([...templates, ...githubTemplates])
        
        // Step 5: Complete
        setLoadingProgress(100)
        setLoadingMessage('Templates loaded successfully!')
        
        // Wait a moment to show completion, then hide loading
        setTimeout(() => {
          setIsLoading(false)
        }, 500)
        
      } catch (error) {
        console.error('Failed to load GitHub templates:', error)
        
        // Handle timeout specifically
        if (error.message === 'Template loading timeout') {
          setLoadingMessage('Loading fallback templates (GitHub API timeout)...')
        } else {
          setLoadingMessage('Loading fallback templates...')
        }
        
        // Ensure we always reach 100% even on error
        setLoadingProgress(80)
        await new Promise(resolve => setTimeout(resolve, 200))
        setLoadingProgress(100)
        
        setAllTemplates(templates)
        setTimeout(() => {
          setIsLoading(false)
        }, 500)
      }
    }

    loadTemplates()
  }, [])

  // Filter and search templates
  const filteredTemplates = allTemplates
    .filter(template => {
      const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory
      const matchesSearch = searchQuery === '' || 
        template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (template.description || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
        (template.tags || []).some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      return matchesCategory && matchesSearch
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'popularity':
          return b.popularity - a.popularity
        case 'newest':
          return new Date(b.createdAt) - new Date(a.createdAt)
        case 'name':
          return a.name.localeCompare(b.name)
        default:
          return 0
      }
    })

  const handleUseTemplate = async (template) => {
    try {
      let files = {}
      
      // For GitHub templates, create basic files based on template info
      if (template.id.startsWith('github_')) {
        files = createGitHubTemplateFiles(template)
      } else {
        // For local templates, use the existing files
        files = template.files || {}
      }
      
      addFilesToProject(files)
    toast.success(`Template "${template.name}" added to your project!`)
    } catch (error) {
      console.error('Failed to use template:', error)
      toast.error('Failed to load template. Please try again.')
    }
  }

  // Create basic files for GitHub templates
  const createGitHubTemplateFiles = (template) => {
    const files = {}
    
    // Create package.json based on template type
    const packageJson = {
      name: template.name.toLowerCase().replace(/\s+/g, '-'),
      version: '1.0.0',
      description: template.description || 'Generated from GitHub template',
      main: 'index.js',
      scripts: {
        start: 'npm run dev',
        dev: 'vite',
        build: 'vite build'
      },
      dependencies: {
        'react': '^18.2.0',
        'react-dom': '^18.2.0'
      },
      devDependencies: {
        'vite': '^4.0.0',
        '@vitejs/plugin-react': '^3.0.0'
      }
    }
    
    files['package.json'] = JSON.stringify(packageJson, null, 2)
    
    // Create index.html
    files['index.html'] = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${template.name}</title>
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>
</html>`
    
    // Create main.jsx
    files['src/main.jsx'] = `import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)`
    
    // Create App.jsx based on template type
    const appContent = generateAppContent(template)
    files['src/App.jsx'] = appContent
    
    // Create basic CSS
    files['src/App.css'] = `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  line-height: 1.6;
  color: #333;
}

.app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.header {
  text-align: center;
  margin-bottom: 40px;
}

.header h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
  color: #2c3e50;
}

.header p {
  font-size: 1.2rem;
  color: #7f8c8d;
}

.content {
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.btn {
  background: #3498db;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s;
}

.btn:hover {
  background: #2980b9;
}`
    
    return files
  }

  // Generate app content based on template type
  const generateAppContent = (template) => {
    const templateName = template.name
    const templateType = template.category || 'web'
    
    switch (templateType) {
      case 'todo-app':
        return `import React, { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }])
      setInput('')
    }
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className="app">
      <div className="header">
        <h1>${templateName}</h1>
        <p>Simple todo application</p>
      </div>
      
      <div className="content">
        <div className="todo-input">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new todo..."
            onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          />
          <button className="btn" onClick={addTodo}>Add Todo</button>
        </div>
        
        <div className="todo-list">
          {todos.map(todo => (
            <div key={todo.id} className={\`todo-item \${todo.completed ? 'completed' : ''}\`}>
              <span onClick={() => toggleTodo(todo.id)}>
                {todo.text}
              </span>
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App`
      
      case 'calculator':
        return `import React, { useState } from 'react'
import './App.css'

function App() {
  const [display, setDisplay] = useState('0')
  const [previousValue, setPreviousValue] = useState(null)
  const [operation, setOperation] = useState(null)
  const [waitingForOperand, setWaitingForOperand] = useState(false)

  const inputNumber = (num) => {
    if (waitingForOperand) {
      setDisplay(String(num))
      setWaitingForOperand(false)
    } else {
      setDisplay(display === '0' ? String(num) : display + num)
    }
  }

  const inputOperation = (nextOperation) => {
    const inputValue = parseFloat(display)

    if (previousValue === null) {
      setPreviousValue(inputValue)
    } else if (operation) {
      const currentValue = previousValue || 0
      const newValue = calculate(currentValue, inputValue, operation)

      setDisplay(String(newValue))
      setPreviousValue(newValue)
    }

    setWaitingForOperand(true)
    setOperation(nextOperation)
  }

  const calculate = (firstValue, secondValue, operation) => {
    switch (operation) {
      case '+': return firstValue + secondValue
      case '-': return firstValue - secondValue
      case '*': return firstValue * secondValue
      case '/': return firstValue / secondValue
      case '=': return secondValue
      default: return secondValue
    }
  }

  const performCalculation = () => {
    const inputValue = parseFloat(display)

    if (previousValue !== null && operation) {
      const newValue = calculate(previousValue, inputValue, operation)
      setDisplay(String(newValue))
      setPreviousValue(null)
      setOperation(null)
      setWaitingForOperand(true)
    }
  }

  const clear = () => {
    setDisplay('0')
    setPreviousValue(null)
    setOperation(null)
    setWaitingForOperand(false)
  }

  return (
    <div className="app">
      <div className="header">
        <h1>${templateName}</h1>
        <p>Simple calculator application</p>
      </div>
      
      <div className="content">
        <div className="calculator">
          <div className="display">{display}</div>
          <div className="buttons">
            <button className="btn" onClick={clear}>C</button>
            <button className="btn" onClick={() => inputOperation('/')}>/</button>
            <button className="btn" onClick={() => inputOperation('*')}>*</button>
            <button className="btn" onClick={() => inputOperation('-')}>-</button>
            
            <button className="btn" onClick={() => inputNumber(7)}>7</button>
            <button className="btn" onClick={() => inputNumber(8)}>8</button>
            <button className="btn" onClick={() => inputNumber(9)}>9</button>
            <button className="btn" onClick={() => inputOperation('+')}>+</button>
            
            <button className="btn" onClick={() => inputNumber(4)}>4</button>
            <button className="btn" onClick={() => inputNumber(5)}>5</button>
            <button className="btn" onClick={() => inputNumber(6)}>6</button>
            <button className="btn" onClick={performCalculation}>=</button>
            
            <button className="btn" onClick={() => inputNumber(1)}>1</button>
            <button className="btn" onClick={() => inputNumber(2)}>2</button>
            <button className="btn" onClick={() => inputNumber(3)}>3</button>
            
            <button className="btn zero" onClick={() => inputNumber(0)}>0</button>
            <button className="btn" onClick={() => setDisplay(display + '.')}>.</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App`
      
      default:
        return `import React from 'react'
import './App.css'

function App() {
  return (
    <div className="app">
      <div className="header">
        <h1>${templateName}</h1>
        <p>${template.description || 'A new project created with DreamBuild'}</p>
      </div>
      
      <div className="content">
        <h2>Welcome to your new ${templateName}!</h2>
        <p>This project was generated from a template. You can start editing and customizing it to fit your needs.</p>
        
        <div className="features">
          <h3>Features:</h3>
          <ul>
            {(template.features || ['Modern design', 'Responsive layout', 'Easy to customize']).map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        
        <button className="btn">Get Started</button>
      </div>
    </div>
  )
}

export default App`
    }
  }

  const handlePreviewTemplate = (template) => {
    console.log('🔍 Opening preview for template:', template.name)
    setPreviewTemplate(template)
    setShowPreview(true)
    console.log('✅ Preview state set to true')
  }

  const closePreview = () => {
    console.log('❌ Closing preview modal')
    setShowPreview(false)
    setPreviewTemplate(null)
    console.log('✅ Preview state set to false')
  }

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape' && showPreview) {
        closePreview()
      }
    }

    if (showPreview) {
      document.addEventListener('keydown', handleEscKey)
      return () => {
        document.removeEventListener('keydown', handleEscKey)
      }
    }
  }, [showPreview])

  const handleCopyTemplate = (template) => {
    const templateData = JSON.stringify(template, null, 2)
    navigator.clipboard.writeText(templateData)
    toast.success(`Template "${template.name}" copied to clipboard!`)
  }

  return (
    <div className="min-h-screen bg-background pt-24">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            {/* Title Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center gap-3 mb-8"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center shadow-lg shadow-primary/25">
                <FileText className="h-6 w-6 text-primary-foreground" />
              </div>
              <h1 className="text-4xl font-bold text-high-contrast">Template Library</h1>
            </motion.div>
            
            {/* Description and Search Section */}
            <div className="flex flex-col items-center space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-xl text-muted-foreground max-w-2xl mx-auto text-center"
              >
                Choose from our collection of professionally designed templates to jumpstart your next project
              </motion.p>

              {/* Search Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="max-w-md w-full mx-auto relative"
              >
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search templates..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-4 pr-12 py-3 bg-card border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 text-foreground placeholder:text-muted-foreground"
                  />
                  <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground z-10" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters and Controls */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          {/* Category Filter */}
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-muted-foreground" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
            >
              <option value="all">All Categories</option>
              {templateCategories.map(category => (
                <option key={category.id} value={category.id}>{category.name}</option>
              ))}
            </select>
          </div>

          {/* Sort By */}
          <div className="flex items-center gap-2">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
            >
              <option value="popularity">Most Popular</option>
              <option value="newest">Newest First</option>
              <option value="name">Alphabetical</option>
            </select>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-2 ml-auto">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'grid' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-card text-muted-foreground hover:bg-muted'
              }`}
            >
              <Grid className="h-4 w-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'list' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-card text-muted-foreground hover:bg-muted'
              }`}
            >
              <List className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Templates Grid */}
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full max-w-md"
            >
              {/* Loading Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center animate-spin">
                  <Sparkles className="h-8 w-8 text-primary-foreground" />
                </div>
              </div>
              
              {/* Loading Message */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {loadingMessage}
                </h3>
                <p className="text-muted-foreground">
                  Fetching the latest templates for you...
                </p>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-muted rounded-full h-3 mb-4">
                <motion.div
                  className="bg-gradient-to-r from-primary to-primary-light h-3 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${loadingProgress}%` }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              </div>
              
              {/* Progress Percentage */}
              <div className="flex justify-between items-center text-sm text-muted-foreground">
                <span>Progress</span>
                <span>{loadingProgress}%</span>
              </div>
              
              {/* Loading Steps */}
              <div className="mt-6 space-y-2">
                <div className={`flex items-center gap-2 text-sm ${loadingProgress >= 20 ? 'text-primary' : 'text-muted-foreground'}`}>
                  <div className={`w-2 h-2 rounded-full ${loadingProgress >= 20 ? 'bg-primary' : 'bg-muted'}`}></div>
                  <span>Loading local templates</span>
                </div>
                <div className={`flex items-center gap-2 text-sm ${loadingProgress >= 40 ? 'text-primary' : 'text-muted-foreground'}`}>
                  <div className={`w-2 h-2 rounded-full ${loadingProgress >= 40 ? 'bg-primary' : 'bg-muted'}`}></div>
                  <span>Initializing template service</span>
                </div>
                <div className={`flex items-center gap-2 text-sm ${loadingProgress >= 60 ? 'text-primary' : 'text-muted-foreground'}`}>
                  <div className={`w-2 h-2 rounded-full ${loadingProgress >= 60 ? 'bg-primary' : 'bg-muted'}`}></div>
                  <span>Fetching GitHub templates</span>
                </div>
                <div className={`flex items-center gap-2 text-sm ${loadingProgress >= 80 ? 'text-primary' : 'text-muted-foreground'}`}>
                  <div className={`w-2 h-2 rounded-full ${loadingProgress >= 80 ? 'bg-primary' : 'bg-muted'}`}></div>
                  <span>Processing templates</span>
                </div>
                <div className={`flex items-center gap-2 text-sm ${loadingProgress >= 100 ? 'text-primary' : 'text-muted-foreground'}`}>
                  <div className={`w-2 h-2 rounded-full ${loadingProgress >= 100 ? 'bg-primary' : 'bg-muted'}`}></div>
                  <span>Ready to use!</span>
                </div>
              </div>
            </motion.div>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTemplates.map((template, index) => (
              <motion.div
                key={`${template.id}-${index}`}
                data-template-id={template.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group"
              >
                {/* Template Preview */}
                <div className="aspect-video bg-gradient-to-br from-muted/50 to-muted/30 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">{template.name}</p>
                    </div>
                  </div>
                  <div className="absolute top-3 right-3">
                    <div className="flex items-center gap-1 bg-background/80 backdrop-blur-sm px-2 py-1 rounded-full text-xs">
                      <Star className="h-3 w-3 text-warning fill-current" />
                      <span>{template.popularity}%</span>
                    </div>
                  </div>
                </div>

                {/* Template Info */}
                <div className="p-6">
                  <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                    {template.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {template.description || 'No description available'}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {(template.tags || []).slice(0, 3).map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                    {(template.tags || []).length > 3 && (
                      <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
                        +{(template.tags || []).length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleUseTemplate(template)}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors text-sm font-medium"
                    >
                      <Rocket className="h-4 w-4" />
                      Use Template
                    </button>
                    <button
                      onClick={() => handlePreviewTemplate(template)}
                      className="px-3 py-2 bg-card border border-border text-foreground rounded-lg hover:bg-muted transition-colors"
                      title="Preview"
                    >
                      <Eye className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleCopyTemplate(template)}
                      className="px-3 py-2 bg-card border border-border text-foreground rounded-lg hover:bg-muted transition-colors"
                      title="Copy"
                    >
                      <Copy className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          /* List View */
          <div className="space-y-4">
            {filteredTemplates.map((template, index) => (
              <motion.div
                key={`${template.id}-list-${index}`}
                data-template-id={template.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group"
              >
                <div className="flex items-center gap-6">
                  {/* Preview */}
                  <div className="w-24 h-16 bg-gradient-to-br from-muted/50 to-muted/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="h-6 w-6 text-muted-foreground" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                        {template.name}
                      </h3>
                      <div className="flex items-center gap-1 bg-warning/10 text-warning px-2 py-1 rounded-full text-xs">
                        <Star className="h-3 w-3 fill-current" />
                        <span>{template.popularity || 0}%</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {template.description || 'No description available'}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {(template.tags || []).map(tag => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 flex-shrink-0">
                    <button
                      onClick={() => handleUseTemplate(template)}
                      className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors text-sm font-medium"
                    >
                      <Rocket className="h-4 w-4" />
                      Use Template
                    </button>
                    <button
                      onClick={() => handlePreviewTemplate(template)}
                      className="p-2 bg-card border border-border text-foreground rounded-lg hover:bg-muted transition-colors"
                      title="Preview"
                    >
                      <Eye className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleCopyTemplate(template)}
                      className="p-2 bg-card border border-border text-foreground rounded-lg hover:bg-muted transition-colors"
                      title="Copy"
                    >
                      <Copy className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {filteredTemplates.length === 0 && (
          <div className="text-center py-16">
            <FileText className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">No templates found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search criteria or browse all categories
            </p>
            <button
              onClick={() => {
                setSearchQuery('')
                setSelectedCategory('all')
              }}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* Template Preview Modal */}
      {showPreview && previewTemplate && (
        <div 
          className="modal-backdrop"
          style={{ 
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(4px)',
            zIndex: 10,
            visibility: 'visible',
            opacity: 1,
            pointerEvents: 'auto'
          }}
          onClick={(e) => {
            // Close modal when clicking on backdrop
            if (e.target === e.currentTarget) {
              closePreview()
            }
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="modal-content bg-white border border-gray-300 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col"
            style={{ 
              zIndex: 10000,
              backgroundColor: 'white',
              border: '2px solid #e5e7eb',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              visibility: 'visible',
              opacity: 1,
              display: 'flex',
              position: 'relative'
            }}
            onClick={(e) => {
              // Prevent backdrop click when clicking on modal content
              e.stopPropagation()
            }}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gray-50 flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                  <Eye className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">Preview: {previewTemplate.name}</h2>
                  <p className="text-sm text-gray-600">See how this template looks when completed</p>
                </div>
              </div>
              <button
                onClick={closePreview}
                className="flex items-center justify-center w-10 h-10 bg-red-500 hover:bg-red-600 text-white rounded-full transition-colors shadow-lg"
                title="Close Preview"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Content - Scrollable */}
            <div className="flex-1 overflow-y-auto p-6 bg-white">
              <div className="max-w-full">
              {/* Template Info */}
              <div className="mb-6">
                <p className="text-gray-600 mb-4">{previewTemplate.description || 'A professional template for your next project.'}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {(previewTemplate.tags || []).slice(0, 5).map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Difficulty:</span>
                    <span className="ml-2 font-medium text-gray-900">{previewTemplate.difficulty || 'Beginner'}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Time:</span>
                    <span className="ml-2 font-medium text-gray-900">{previewTemplate.estimatedTime || '2-4 hours'}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Stars:</span>
                    <span className="ml-2 font-medium text-gray-900">{previewTemplate.stars || 'N/A'}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Source:</span>
                    <span className="ml-2 font-medium text-gray-900 capitalize">{previewTemplate.source || 'Local'}</span>
                  </div>
                </div>
              </div>

              {/* Preview Content */}
              <div className="bg-gray-50 rounded-lg p-6 mb-6 border border-gray-200">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-gray-900">
                  <Globe className="h-5 w-5" />
                  Live Preview
                </h3>
                
                {/* Preview Frame */}
                <div className="bg-white rounded-lg border-2 border-gray-300 overflow-hidden shadow-lg" style={{ backgroundColor: 'white' }}>
                  <div className="bg-gray-100 px-4 py-2 flex items-center gap-2 border-b border-gray-200">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="flex-1 text-center">
                      <span className="text-sm text-gray-600 font-medium">{previewTemplate.name}</span>
                    </div>
                  </div>
                  
                  {/* Preview Content based on template type */}
                  <div className="p-8 min-h-[400px]">
                    {renderPreviewContent(previewTemplate)}
                  </div>
                </div>
              </div>

              {/* Features */}
              {previewTemplate.features && previewTemplate.features.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {previewTemplate.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Stack */}
              {previewTemplate.techStack && previewTemplate.techStack.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {previewTemplate.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 border border-gray-300 text-sm rounded-lg text-gray-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between p-6 border-t border-gray-200">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Star className="h-4 w-4" />
                <span>Popularity: {previewTemplate.popularity || 0}%</span>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={closePreview}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    handleUseTemplate(previewTemplate)
                    closePreview()
                  }}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
                >
                  <Rocket className="h-4 w-4" />
                  Use Template
                </button>
              </div>
            </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}

// Render preview content based on template type
const renderPreviewContent = (template) => {
  const templateType = template.category || 'web'
  const templateName = template.name.toLowerCase()
  const templateDescription = (template.description || '').toLowerCase()
  const templateTags = (template.tags || []).join(' ').toLowerCase()
  
  // Combine all text for better matching
  const allText = `${templateName} ${templateDescription} ${templateTags}`.toLowerCase()
  
  // Check for specific template names first
  if (allText.includes('todo') || templateType === 'todo-app' || allText.includes('task')) {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">✅ Todo Application</h1>
          <p className="text-gray-600">Simple todo application</p>
        </div>
        
        <div className="max-w-md mx-auto space-y-4">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Add a new todo..."
              className="flex-1 px-4 py-3 border-2 border-blue-200 rounded-xl focus:border-blue-500 focus:outline-none"
              readOnly
            />
            <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all shadow-lg">➕ Add</button>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl">
              <input type="checkbox" className="w-5 h-5 text-blue-500 rounded" />
              <span className="flex-1 text-gray-800 font-medium">📝 Complete project documentation</span>
              <button className="text-red-500 hover:text-red-700 text-sm font-semibold">🗑️ Delete</button>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl">
              <input type="checkbox" checked className="w-5 h-5 text-green-500 rounded" />
              <span className="flex-1 line-through text-gray-500">✅ Review code changes</span>
              <button className="text-red-500 hover:text-red-700 text-sm font-semibold">🗑️ Delete</button>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl">
              <input type="checkbox" className="w-5 h-5 text-blue-500 rounded" />
              <span className="flex-1 text-gray-800 font-medium">📦 Update dependencies</span>
              <button className="text-red-500 hover:text-red-700 text-sm font-semibold">🗑️ Delete</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  if (allText.includes('calculator') || templateType === 'calculator' || allText.includes('math') || allText.includes('arithmetic')) {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">🧮 Calculator</h1>
          <p className="text-gray-600">Simple calculator application</p>
        </div>
        
        <div className="max-w-xs mx-auto">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-xl mb-4 shadow-lg">
            <div className="text-right text-3xl font-mono text-green-400">42</div>
          </div>
          
          <div className="grid grid-cols-4 gap-3">
            {['C', '/', '*', '-'].map((btn, index) => (
              <button key={btn} className={`p-4 rounded-xl font-bold text-lg transition-all ${
                index === 0 ? 'bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700' : 
                'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700'
              }`}>{btn}</button>
            ))}
            {[7, 8, 9, '+'].map((btn, index) => (
              <button key={btn} className={`p-4 rounded-xl font-bold text-lg transition-all ${
                index === 3 ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700' : 
                'bg-gradient-to-r from-gray-300 to-gray-400 text-gray-800 hover:from-gray-400 hover:to-gray-500'
              }`}>{btn}</button>
            ))}
            {[4, 5, 6, '='].map((btn, index) => (
              <button key={btn} className={`p-4 rounded-xl font-bold text-lg transition-all ${
                index === 3 ? 'bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 row-span-2' : 
                'bg-gradient-to-r from-gray-300 to-gray-400 text-gray-800 hover:from-gray-400 hover:to-gray-500'
              }`}>{btn}</button>
            ))}
            {[1, 2, 3].map(btn => (
              <button key={btn} className="p-4 rounded-xl font-bold text-lg bg-gradient-to-r from-gray-300 to-gray-400 text-gray-800 hover:from-gray-400 hover:to-gray-500 transition-all">{btn}</button>
            ))}
            <button className="p-4 rounded-xl font-bold text-lg bg-gradient-to-r from-gray-300 to-gray-400 text-gray-800 hover:from-gray-400 hover:to-gray-500 transition-all col-span-2">0</button>
            <button className="p-4 rounded-xl font-bold text-lg bg-gradient-to-r from-gray-300 to-gray-400 text-gray-800 hover:from-gray-400 hover:to-gray-500 transition-all">.</button>
          </div>
        </div>
      </div>
    )
  }
  
  // E-commerce / Online Store
  if (allText.includes('store') || allText.includes('ecommerce') || allText.includes('shop') || allText.includes('marketplace') || allText.includes('retail') || templateType === 'ecommerce') {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Online Store</h1>
          <p className="text-gray-600">Modern e-commerce platform</p>
        </div>
        
        <div className="space-y-4">
          {/* Header */}
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg">
            <h2 className="text-xl font-bold">🛍️ TechStore</h2>
            <div className="flex items-center gap-4">
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">🛒 Cart (2)</span>
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">👤 Account</span>
            </div>
          </div>
          
          {/* Product Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="border-2 border-gray-200 rounded-xl p-3 hover:border-blue-300 transition-colors shadow-lg">
              <div className="w-full h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg mb-2 flex items-center justify-center">
                <span className="text-white text-2xl">🎧</span>
              </div>
              <h3 className="font-semibold text-sm text-gray-800">Wireless Headphones</h3>
              <p className="text-green-600 font-bold text-lg">$99.99</p>
              <button className="w-full mt-2 px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all">Add to Cart</button>
            </div>
            <div className="border-2 border-gray-200 rounded-xl p-3 hover:border-blue-300 transition-colors shadow-lg">
              <div className="w-full h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-lg mb-2 flex items-center justify-center">
                <span className="text-white text-2xl">⌚</span>
              </div>
              <h3 className="font-semibold text-sm text-gray-800">Smart Watch</h3>
              <p className="text-green-600 font-bold text-lg">$199.99</p>
              <button className="w-full mt-2 px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all">Add to Cart</button>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex justify-center gap-2">
            <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all">🏠 Home</button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">📦 Products</button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">ℹ️ About</button>
          </div>
        </div>
      </div>
    )
  }
  
  // Portfolio
  if (allText.includes('portfolio') || allText.includes('personal') || allText.includes('developer') || allText.includes('profile') || templateType === 'portfolio') {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Personal Portfolio</h1>
          <p className="text-gray-600">Modern, responsive portfolio website</p>
        </div>
        
        <div className="space-y-4">
          <div className="text-center">
            <div className="w-20 h-20 bg-blue-500 rounded-full mx-auto mb-2"></div>
            <h2 className="text-xl font-semibold">John Doe</h2>
            <p className="text-gray-600">Full Stack Developer</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-semibold mb-2">Project 1</h3>
              <p className="text-sm text-gray-600">E-commerce platform built with React</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-semibold mb-2">Project 2</h3>
              <p className="text-sm text-gray-600">Mobile app using React Native</p>
            </div>
          </div>
          
          <div className="text-center">
            <button className="px-6 py-2 bg-blue-500 text-white rounded-lg">Get In Touch</button>
          </div>
        </div>
      </div>
    )
  }
  
  // Blog Platform
  if (allText.includes('blog') || allText.includes('cms') || allText.includes('article') || allText.includes('post') || templateType === 'blog') {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Blog Platform</h1>
          <p className="text-gray-600">Full-featured blog with CMS</p>
        </div>
        
        <div className="space-y-4">
          {/* Header */}
          <div className="p-4 bg-gray-100 rounded-lg">
            <h2 className="text-xl font-bold">My Blog</h2>
            <p className="text-gray-600">Thoughts on technology and design</p>
          </div>
          
          {/* Blog Posts */}
          <div className="space-y-3">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold">Getting Started with React</h3>
              <p className="text-sm text-gray-600">Learn the basics of React development...</p>
              <span className="text-xs text-gray-500">Dec 15, 2024 • 5 min read</span>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold">CSS Grid vs Flexbox</h3>
              <p className="text-sm text-gray-600">A comprehensive comparison...</p>
              <span className="text-xs text-gray-500">Dec 12, 2024 • 8 min read</span>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex justify-center gap-2">
            <button className="px-4 py-2 bg-gray-200 rounded">Home</button>
            <button className="px-4 py-2 bg-gray-200 rounded">About</button>
            <button className="px-4 py-2 bg-gray-200 rounded">Contact</button>
          </div>
        </div>
      </div>
    )
  }
  
  // Weather App
  if (allText.includes('weather') || allText.includes('forecast') || allText.includes('climate') || templateType === 'weather-app') {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">🌤️ Weather App</h1>
          <p className="text-gray-600">Beautiful weather application</p>
        </div>
        
        <div className="space-y-4">
          {/* Current Weather */}
          <div className="bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 text-white p-6 rounded-xl text-center shadow-xl">
            <div className="flex items-center justify-center mb-2">
              <span className="text-4xl mr-2">☀️</span>
              <h2 className="text-2xl font-bold">New York</h2>
            </div>
            <div className="text-5xl font-bold my-3">72°F</div>
            <p className="text-xl">Partly Cloudy</p>
            <p className="text-sm opacity-90 mt-1">Feels like 75°F</p>
          </div>
          
          {/* Weather Details */}
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl">
              <div className="text-2xl mb-1">💧</div>
              <div className="text-sm text-blue-600 font-medium">Humidity</div>
              <div className="font-bold text-blue-800">65%</div>
            </div>
            <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-xl">
              <div className="text-2xl mb-1">💨</div>
              <div className="text-sm text-green-600 font-medium">Wind</div>
              <div className="font-bold text-green-800">8 mph</div>
            </div>
            <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-xl">
              <div className="text-2xl mb-1">📊</div>
              <div className="text-sm text-purple-600 font-medium">Pressure</div>
              <div className="font-bold text-purple-800">30.1 in</div>
            </div>
          </div>
          
          {/* 5-Day Forecast */}
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-800 text-lg">📅 5-Day Forecast</h3>
            <div className="space-y-2">
              {[
                { day: 'Mon', icon: '☀️', temp: 75 },
                { day: 'Tue', icon: '⛅', temp: 77 },
                { day: 'Wed', icon: '🌧️', temp: 72 },
                { day: 'Thu', icon: '☀️', temp: 80 },
                { day: 'Fri', icon: '⛅', temp: 78 }
              ].map((forecast, index) => (
                <div key={forecast.day} className="flex justify-between items-center p-3 bg-gradient-to-r from-gray-50 to-blue-50 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <span className="font-medium text-gray-800">{forecast.day}</span>
                  <span className="text-2xl">{forecast.icon}</span>
                  <span className="font-bold text-blue-600">{forecast.temp}°F</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  // Dashboard
  if (allText.includes('dashboard') || allText.includes('analytics') || allText.includes('admin') || allText.includes('stats') || allText.includes('metrics') || templateType === 'dashboards') {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">📊 Analytics Dashboard</h1>
          <p className="text-gray-600">Data visualization and analytics</p>
        </div>
        
        <div className="space-y-4">
          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl text-white shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold">1,234</div>
                  <div className="text-blue-100 text-sm">👥 Total Users</div>
                </div>
                <div className="text-3xl opacity-80">👤</div>
              </div>
            </div>
            <div className="p-6 bg-gradient-to-br from-green-500 to-green-600 rounded-xl text-white shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold">$12,345</div>
                  <div className="text-green-100 text-sm">💰 Revenue</div>
                </div>
                <div className="text-3xl opacity-80">💵</div>
              </div>
            </div>
          </div>
          
          {/* Chart Placeholder */}
          <div className="h-40 bg-gradient-to-br from-purple-100 to-pink-100 border border-purple-200 rounded-xl flex items-center justify-center shadow-lg">
            <div className="text-center">
              <div className="text-4xl mb-2">📈</div>
              <span className="text-purple-600 font-semibold">📊 Interactive Chart</span>
              <div className="text-sm text-purple-500 mt-1">Revenue over time</div>
            </div>
          </div>
          
          {/* Recent Activity */}
          <div>
            <h3 className="font-semibold mb-3 text-gray-800 text-lg">🔔 Recent Activity</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-800">✅ New user registration</span>
                <span className="text-xs text-gray-500 ml-auto bg-green-100 px-2 py-1 rounded-full">2 min ago</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-800">🛒 Order #1234 completed</span>
                <span className="text-xs text-gray-500 ml-auto bg-blue-100 px-2 py-1 rounded-full">5 min ago</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="text-sm text-gray-800">📧 Newsletter sent</span>
                <span className="text-xs text-gray-500 ml-auto bg-yellow-100 px-2 py-1 rounded-full">10 min ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  // Landing Page
  if (allText.includes('landing') || allText.includes('saas') || allText.includes('marketing') || allText.includes('homepage') || allText.includes('pricing') || templateType === 'landing-pages') {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">SaaS Landing Page</h1>
          <p className="text-gray-600">Modern marketing page</p>
        </div>
        
        <div className="space-y-4">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-2">Build Amazing Apps</h2>
            <p className="mb-4">The best platform for developers</p>
            <button className="px-6 py-2 bg-white text-blue-600 rounded-lg font-semibold">Get Started</button>
          </div>
          
          {/* Features */}
          <div className="grid grid-cols-2 gap-3">
            <div className="text-center p-3 border border-gray-200 rounded">
              <div className="text-2xl mb-1">⚡</div>
              <div className="text-sm font-semibold">Fast</div>
            </div>
            <div className="text-center p-3 border border-gray-200 rounded">
              <div className="text-2xl mb-1">🔒</div>
              <div className="text-sm font-semibold">Secure</div>
            </div>
          </div>
          
          {/* Pricing */}
          <div className="text-center">
            <h3 className="font-semibold mb-2">Simple Pricing</h3>
            <div className="bg-gray-100 p-4 rounded-lg">
              <div className="text-3xl font-bold">$29</div>
              <div className="text-sm text-gray-600">per month</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  // Mobile App
  if (allText.includes('mobile') || allText.includes('app') || allText.includes('ios') || allText.includes('android') || allText.includes('native') || templateType === 'mobile-apps') {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Mobile App</h1>
          <p className="text-gray-600">Native mobile application</p>
        </div>
        
        <div className="space-y-4">
          {/* Mobile Frame */}
          <div className="mx-auto w-48 h-80 bg-gray-800 rounded-3xl p-2">
            <div className="w-full h-full bg-white rounded-2xl p-4 space-y-3">
              {/* Status Bar */}
              <div className="flex justify-between items-center text-xs">
                <span>9:41</span>
                <span>📶 📶 📶 🔋</span>
              </div>
              
              {/* App Content */}
              <div className="space-y-3">
                <div className="w-full h-16 bg-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-semibold">My App</span>
                </div>
                <div className="space-y-2">
                  <div className="h-8 bg-gray-200 rounded"></div>
                  <div className="h-8 bg-gray-200 rounded"></div>
                  <div className="h-8 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  // Game
  if (allText.includes('game') || allText.includes('snake') || allText.includes('puzzle') || allText.includes('arcade')) {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Game Application</h1>
          <p className="text-gray-600">Interactive game experience</p>
        </div>
        
        <div className="space-y-4">
          {/* Game Board */}
          <div className="mx-auto w-64 h-64 bg-gray-900 rounded-lg p-4">
            <div className="w-full h-full bg-gray-800 rounded border-2 border-gray-600 relative">
              {/* Game Elements */}
              <div className="absolute top-4 left-4 w-4 h-4 bg-green-400 rounded"></div>
              <div className="absolute top-8 left-8 w-4 h-4 bg-green-400 rounded"></div>
              <div className="absolute top-12 left-12 w-4 h-4 bg-green-400 rounded"></div>
              <div className="absolute top-16 left-16 w-4 h-4 bg-red-500 rounded"></div>
            </div>
          </div>
          
          {/* Game Controls */}
          <div className="text-center">
            <div className="flex justify-center gap-2 mb-4">
              <button className="px-4 py-2 bg-gray-200 rounded">↑</button>
            </div>
            <div className="flex justify-center gap-2">
              <button className="px-4 py-2 bg-gray-200 rounded">←</button>
              <button className="px-4 py-2 bg-gray-200 rounded">↓</button>
              <button className="px-4 py-2 bg-gray-200 rounded">→</button>
            </div>
          </div>
          
          {/* Score */}
          <div className="text-center">
            <div className="text-2xl font-bold">Score: 150</div>
            <div className="text-sm text-gray-600">High Score: 300</div>
          </div>
        </div>
      </div>
    )
  }
  
  // Chat/Messaging App
  if (allText.includes('chat') || allText.includes('messaging') || allText.includes('message') || allText.includes('communication')) {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Chat Application</h1>
          <p className="text-gray-600">Real-time messaging platform</p>
        </div>
        
        <div className="space-y-4">
          {/* Chat Header */}
          <div className="p-4 bg-blue-600 text-white rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white rounded-full"></div>
              <div>
                <div className="font-semibold">John Doe</div>
                <div className="text-sm opacity-90">Online</div>
              </div>
            </div>
          </div>
          
          {/* Chat Messages */}
          <div className="space-y-2 max-h-48 overflow-y-auto">
            <div className="flex justify-end">
              <div className="bg-blue-500 text-white p-3 rounded-lg max-w-xs">
                Hey, how are you doing?
              </div>
            </div>
            <div className="flex justify-start">
              <div className="bg-gray-200 text-gray-800 p-3 rounded-lg max-w-xs">
                I'm doing great! Working on a new project.
              </div>
            </div>
            <div className="flex justify-end">
              <div className="bg-blue-500 text-white p-3 rounded-lg max-w-xs">
                That's awesome! What kind of project?
              </div>
            </div>
          </div>
          
          {/* Message Input */}
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg"
              readOnly
            />
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">Send</button>
          </div>
        </div>
      </div>
    )
  }
  
  // Default fallback
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{template.name}</h1>
        <p className="text-gray-600">{template.description || 'A new project created with DreamBuild'}</p>
      </div>
      
      <div className="space-y-4">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">Welcome to your new {template.name}!</h2>
          <p className="text-gray-600">This project was generated from a template. You can start editing and customizing it to fit your needs.</p>
        </div>
        
        {template.features && (
          <div>
            <h3 className="font-semibold mb-2">Features:</h3>
            <ul className="space-y-1">
              {template.features.slice(0, 3).map((feature, index) => (
                <li key={index} className="text-sm text-gray-600">• {feature}</li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="text-center">
          <button className="px-6 py-2 bg-blue-500 text-white rounded-lg">Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Templates
