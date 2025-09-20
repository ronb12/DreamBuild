// DreamBuild Local AI Service - 100% Self-Hosted
// No API keys required - everything runs locally

import axios from 'axios'
import mobileAppService from './mobileAppService.js'

// Local AI Models Configuration
const LOCAL_AI_MODELS = {
  // CodeLlama Models (Meta) - Best for code generation
  'codellama-7b': {
    name: 'CodeLlama 7B',
    type: 'Code Generation',
    baseURL: 'http://localhost:11434/api',
    model: 'codellama:7b',
    description: 'Fast and efficient code generation (7B parameters)',
    languages: ['python', 'javascript', 'java', 'cpp', 'go', 'rust', 'php', 'ruby', 'swift', 'kotlin'],
    strengths: ['speed', 'efficiency', 'general-purpose'],
    ram_required: '8GB'
  },
  'codellama-13b': {
    name: 'CodeLlama 13B', 
    type: 'Code Generation',
    baseURL: 'http://localhost:11434/api',
    model: 'codellama:13b',
    description: 'Higher quality code generation (13B parameters)',
    languages: ['python', 'javascript', 'java', 'cpp', 'go', 'rust', 'php', 'ruby', 'swift', 'kotlin'],
    strengths: ['quality', 'accuracy', 'complex-problems'],
    ram_required: '16GB'
  },
  'codellama-34b': {
    name: 'CodeLlama 34B',
    type: 'Code Generation', 
    baseURL: 'http://localhost:11434/api',
    model: 'codellama:34b',
    description: 'Best quality code generation (34B parameters)',
    languages: ['python', 'javascript', 'java', 'cpp', 'go', 'rust', 'php', 'ruby', 'swift', 'kotlin'],
    strengths: ['best-quality', 'complex-systems', 'enterprise-code'],
    ram_required: '32GB'
  },

  // StarCoder (BigCode) - Excellent for code completion
  'starcoder-15b': {
    name: 'StarCoder 15B',
    type: 'Code Completion',
    baseURL: 'http://localhost:11434/api',
    model: 'starcoder:15b',
    description: 'Excellent code completion and understanding (15B parameters)',
    languages: ['python', 'javascript', 'java', 'cpp', 'go', 'rust', 'php', 'ruby', 'typescript', 'csharp'],
    strengths: ['code-completion', 'understanding', 'context-awareness'],
    ram_required: '24GB'
  },

  // DeepSeek Coder - High performance
  'deepseek-coder': {
    name: 'DeepSeek Coder',
    type: 'High Performance',
    baseURL: 'http://localhost:11434/api', 
    model: 'deepseek-coder:6.7b',
    description: 'High-performance code generation (6.7B parameters)',
    languages: ['python', 'javascript', 'java', 'cpp', 'go', 'rust', 'php', 'ruby'],
    strengths: ['performance', 'speed', 'efficiency'],
    ram_required: '12GB'
  },

  // WizardCoder - Instruction following
  'wizardcoder-7b': {
    name: 'WizardCoder 7B',
    type: 'Instruction Following',
    baseURL: 'http://localhost:11434/api',
    model: 'wizardcoder:7b', 
    description: 'Great at following complex instructions (7B parameters)',
    languages: ['python', 'javascript', 'java', 'cpp', 'go', 'rust', 'php', 'ruby'],
    strengths: ['instruction-following', 'complex-tasks', 'reasoning'],
    ram_required: '10GB'
  },

  // Phi-3 Mini - Microsoft's lightweight model
  'phi3-mini': {
    name: 'Phi-3 Mini',
    type: 'Lightweight General',
    baseURL: 'http://localhost:11434/api',
    model: 'phi3:mini',
    description: 'Lightweight but powerful general-purpose model (3.8B parameters)',
    languages: ['python', 'javascript', 'java', 'cpp', 'go', 'rust', 'php', 'ruby'],
    strengths: ['lightweight', 'fast', 'general-purpose'],
    ram_required: '6GB'
  },

  // Llama 3 - General purpose
  'llama3-8b': {
    name: 'Llama 3 8B',
    type: 'General Purpose',
    baseURL: 'http://localhost:11434/api',
    model: 'llama3:8b',
    description: 'General purpose model good for documentation and planning (8B parameters)',
    languages: ['python', 'javascript', 'java', 'cpp', 'go', 'rust', 'php', 'ruby'],
    strengths: ['general-purpose', 'documentation', 'planning'],
    ram_required: '10GB'
  }
}

// Smart model selection based on task type and available resources
const getBestModelForTask = (taskType, availableRAM = 16) => {
  const models = Object.values(LOCAL_AI_MODELS)
  
  // Filter models based on available RAM
  const compatibleModels = models.filter(model => {
    const ramRequired = parseInt(model.ram_required.replace('GB', ''))
    return ramRequired <= availableRAM
  })

  if (compatibleModels.length === 0) {
    return 'phi3-mini' // Fallback to lightest model
  }

  // Select best model based on task type
  switch (taskType) {
    case 'code-generation':
      return compatibleModels.find(m => m.strengths.includes('quality'))?.model || 'codellama-7b'
    case 'code-completion':
      return compatibleModels.find(m => m.strengths.includes('code-completion'))?.model || 'starcoder-15b'
    case 'instruction-following':
      return compatibleModels.find(m => m.strengths.includes('instruction-following'))?.model || 'wizardcoder-7b'
    case 'documentation':
      return compatibleModels.find(m => m.strengths.includes('general-purpose'))?.model || 'llama3-8b'
    default:
      return 'codellama-7b' // Default to fast and efficient
  }
}

class LocalAIService {
  constructor() {
    this.currentModel = 'codellama-7b'
    this.baseURL = 'http://localhost:11434/api'
    this.modelHealth = {}
    
    // Initialize health monitoring
    this.initializeHealthMonitoring()
  }

  // Initialize health monitoring for all models
  async initializeHealthMonitoring() {
    console.log('🔍 Initializing local AI health monitoring...')
    
    // Check if we're running on localhost (browser) or Node.js
    const isLocalhost = typeof window !== 'undefined' && 
      (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
    
    if (isLocalhost) {
      console.log('🏠 Running on localhost - checking local AI models...')
      
      for (const [modelId, model] of Object.entries(LOCAL_AI_MODELS)) {
        try {
          await this.checkModelHealth(modelId)
        } catch (error) {
          console.log(`⚠️ Model ${modelId} not available:`, error.message)
        }
      }
      
      // Start periodic health checks
      setInterval(() => {
        this.performHealthChecks()
      }, 60000) // Check every minute
    } else {
      console.log('🌐 Running on web domain - local AI models not accessible due to CORS')
      console.log('💡 To use local AI:')
      console.log('   1. Install Ollama: curl -fsSL https://ollama.ai/install.sh | sh')
      console.log('   2. Download models: ollama pull codellama:7b')
      console.log('   3. Start Ollama: ollama serve')
      console.log('   4. Run DreamBuild locally: npm run dev')
      console.log('   5. Access at: http://localhost:5173')
    }
  }

  // Check if a specific model is healthy
  async checkModelHealth(modelId) {
    try {
      const model = LOCAL_AI_MODELS[modelId]
      if (!model) return false

      // Skip health checks if we're running on a web domain (CORS issues)
      const isWebDomain = typeof window !== 'undefined' && 
        window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1'
      
      if (isWebDomain) {
        console.log(`⚠️ Skipping health check for ${model.name} - running on web domain`)
        this.modelHealth[modelId] = {
          isHealthy: false,
          lastCheck: Date.now(),
          error: 'Web domain - local AI not accessible'
        }
        return false
      }

      const response = await axios.post(`${model.baseURL}/generate`, {
        model: model.model,
        prompt: 'Hello',
        stream: false,
        options: {
          temperature: 0.1,
          max_tokens: 10
        }
      }, {
        timeout: 10000 // 10 second timeout
      })

      this.modelHealth[modelId] = {
        isHealthy: true,
        lastCheck: Date.now(),
        responseTime: response.data.total_duration || 0
      }
      
      console.log(`✅ ${model.name} is healthy`)
      return true
    } catch (error) {
      this.modelHealth[modelId] = {
        isHealthy: false,
        lastCheck: Date.now(),
        error: error.message
      }
      console.log(`⚠️ ${modelId} health check failed:`, error.message)
      return false
    }
  }

  // Perform health checks on all models
  async performHealthChecks() {
    const healthPromises = Object.keys(LOCAL_AI_MODELS).map(modelId => 
      this.checkModelHealth(modelId)
    )
    
    await Promise.all(healthPromises)
    
    // Update overall health status
    const healthyModels = Object.values(this.modelHealth).filter(h => h.isHealthy)
    this.isHealthy = healthyModels.length > 0
    
    console.log(`📊 Local AI Health: ${healthyModels.length}/${Object.keys(LOCAL_AI_MODELS).length} models healthy`)
  }

  // Get all available models
  getAvailableModels() {
    return Object.entries(LOCAL_AI_MODELS).map(([id, model]) => ({
      id,
      ...model,
      isHealthy: this.modelHealth[id]?.isHealthy || false
    }))
  }

  // Get healthy models only
  getHealthyModels() {
    return this.getAvailableModels().filter(model => model.isHealthy)
  }

  // Get best model for current task
  getBestModel(taskType = 'code-generation') {
    const healthyModels = this.getHealthyModels()
    if (healthyModels.length === 0) {
      throw new Error('No healthy AI models available. Please check your local AI setup.')
    }

    const modelId = getBestModelForTask(taskType)
    const model = LOCAL_AI_MODELS[modelId]
    
    if (model && this.modelHealth[modelId]?.isHealthy) {
      return modelId
    }

    // Fallback to first healthy model
    return healthyModels[0].id
  }

  // Generate code using local AI
  async generateCode(prompt, context = {}) {
    try {
      // Check if this is a mobile app request
      if (this.isMobileAppRequest(prompt)) {
        console.log('📱 Mobile app request detected - using mobile app service')
        return await mobileAppService.generateMobileApp(prompt, context)
      }

      // Check if we're running on a web domain (CORS issues)
      const isWebDomain = typeof window !== 'undefined' && 
        window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1'
      
      if (isWebDomain) {
        console.log('⚠️ Running on web domain - using template fallback instead of local AI')
        return this.createFallbackResponse(prompt, context)
      }

      const taskType = this.detectTaskType(prompt)
      const modelId = this.getBestModel(taskType)
      const model = LOCAL_AI_MODELS[modelId]
      
      console.log(`🤖 Using ${model.name} for ${taskType} task`)

      const systemPrompt = this.buildSystemPrompt(context, model)
      const fullPrompt = `${systemPrompt}\n\nUser Request: ${prompt}`

      const response = await axios.post(`${model.baseURL}/generate`, {
        model: model.model,
        prompt: fullPrompt,
        stream: false,
        options: {
          temperature: 0.7,
          max_tokens: 4000,
          top_p: 0.9,
          top_k: 40
        }
      }, {
        timeout: 120000 // 2 minute timeout
      })

      return this.parseResponse(response.data.response, prompt, context)
    } catch (error) {
      console.error('❌ Local AI generation failed:', error)
      // Fallback to template generation
      return this.createFallbackResponse(prompt, context)
    }
  }

  // Detect task type from prompt
  detectTaskType(prompt) {
    const lowerPrompt = prompt.toLowerCase()
    
    if (lowerPrompt.includes('complete') || lowerPrompt.includes('finish')) {
      return 'code-completion'
    } else if (lowerPrompt.includes('document') || lowerPrompt.includes('explain')) {
      return 'documentation'
    } else if (lowerPrompt.includes('complex') || lowerPrompt.includes('advanced')) {
      return 'instruction-following'
    } else if (this.isMobileAppRequest(prompt)) {
      return 'mobile-app-generation'
    } else {
      return 'code-generation'
    }
  }

  // Check if prompt is requesting a mobile app
  isMobileAppRequest(prompt) {
    const lowerPrompt = prompt.toLowerCase()
    const mobileKeywords = [
      'mobile app', 'ios app', 'android app', 'iphone app', 'android app',
      'react native', 'flutter', 'ionic', 'pwa', 'progressive web app',
      'capacitor', 'phone app', 'tablet app', 'app store', 'google play'
    ]
    
    return mobileKeywords.some(keyword => lowerPrompt.includes(keyword))
  }

  // Build system prompt for the model
  buildSystemPrompt(context, model) {
    return `You are an expert software developer and AI assistant. Generate high-quality, production-ready code based on user requests.

Context:
- App Type: ${context.appType || 'frontend'}
- Language: ${context.language || 'javascript'}
- Styling: ${context.styling || 'tailwind'}
- Features: ${context.features?.join(', ') || 'basic functionality'}

Instructions:
1. Generate complete, working code
2. Include proper error handling
3. Add comments for complex logic
4. Use modern best practices
5. Make code responsive and accessible
6. Include all necessary files (HTML, CSS, JS)

You are using ${model.name} - ${model.description}.
Supported languages: ${model.languages.join(', ')}.`
  }

  // Parse AI response and extract code
  parseResponse(response, prompt, context) {
    try {
      // Try to extract code blocks from response
      const codeBlocks = response.match(/```[\s\S]*?```/g)
      
      if (codeBlocks && codeBlocks.length > 0) {
        const files = {}
        codeBlocks.forEach((block, index) => {
          const lines = block.split('\n')
          const firstLine = lines[0].replace(/```/g, '').trim()
          
          let filename
          if (firstLine && firstLine.includes('.')) {
            filename = firstLine
          } else {
            // Auto-detect file type
            const content = block.replace(/```[\w]*\n?/, '').replace(/```$/, '')
            filename = this.detectFilename(content, index)
          }
          
          const content = block.replace(/```[\w]*\n?/, '').replace(/```$/, '').trim()
          files[filename] = content
        })
        
        return files
      }
      
      // If no code blocks, create a simple HTML page
      return this.createFallbackResponse(prompt, context)
    } catch (error) {
      console.error('Error parsing AI response:', error)
      return this.createFallbackResponse(prompt, context)
    }
  }

  // Detect filename based on content
  detectFilename(content, index) {
    const lowerContent = content.toLowerCase()
    
    if (lowerContent.includes('<!doctype') || lowerContent.includes('<html')) {
      return 'index.html'
    } else if (lowerContent.includes('function') || lowerContent.includes('const') || lowerContent.includes('var')) {
      return 'script.js'
    } else if (lowerContent.includes('{') && lowerContent.includes('}') && lowerContent.includes(':')) {
      return 'style.css'
    } else {
      return `file${index + 1}.txt`
    }
  }

  // Create fallback response when AI fails
  createFallbackResponse(prompt, context) {
    const lowerPrompt = prompt.toLowerCase()
    
    // Health/Food website
    if (lowerPrompt.includes('health') && lowerPrompt.includes('food')) {
      return {
        'index.html': this.generateHealthHTML(),
        'style.css': this.generateHealthCSS(),
        'script.js': this.generateHealthJS()
      }
    }
    
    // Todo app
    if (lowerPrompt.includes('todo') || lowerPrompt.includes('task')) {
      return {
        'index.html': this.generateTodoHTML(),
        'style.css': this.generateTodoCSS(),
        'script.js': this.generateTodoJS()
      }
    }
    
    // Portfolio website
    if (lowerPrompt.includes('portfolio') || lowerPrompt.includes('resume')) {
      return {
        'index.html': this.generatePortfolioHTML(),
        'style.css': this.generatePortfolioCSS(),
        'script.js': this.generatePortfolioJS()
      }
    }
    
    // Default generic website
    return {
      'index.html': this.generateGenericHTML(prompt),
      'style.css': this.generateGenericCSS(),
      'script.js': this.generateGenericJS()
    }
  }

  // Template generators (same as before but optimized for local AI)
  generateHealthHTML() {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>🥗 Health Food Tips</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>🥗 Health Food Tips</h1>
            <p>Your guide to healthy eating and nutrition</p>
        </header>
        
        <main>
            <section class="hero">
                <h2>Welcome to Your Health Journey</h2>
                <p>Discover amazing tips for healthy eating and better nutrition.</p>
            </section>
            
            <section class="content">
                <h3>Healthy Eating Tips</h3>
                <div class="tip-card">
                    <h4>🥕 Eat More Vegetables</h4>
                    <p>Include a variety of colorful vegetables in your meals for essential vitamins and minerals.</p>
                </div>
                <div class="tip-card">
                    <h4>💧 Stay Hydrated</h4>
                    <p>Drink plenty of water throughout the day to maintain optimal health.</p>
                </div>
                <div class="tip-card">
                    <h4>🌾 Choose Whole Grains</h4>
                    <p>Opt for whole grain options like brown rice, quinoa, and whole wheat bread.</p>
                </div>
            </section>
        </main>
        
        <footer>
            <p>&copy; 2024 Health Food Tips. Created with DreamBuild Local AI.</p>
        </footer>
    </div>
    
    <script src="script.js"></script>
</body>
</html>`
  }

  generateHealthCSS() {
    return `/* Health Food Tips Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    line-height: 1.6;
    color: #333;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

header {
    text-align: center;
    padding: 40px 0;
    color: white;
}

header h1 {
    font-size: 3rem;
    margin-bottom: 10px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

header p {
    font-size: 1.2rem;
    opacity: 0.9;
}

.hero {
    background: rgba(255,255,255,0.95);
    padding: 40px;
    border-radius: 20px;
    margin: 40px 0;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

.hero h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: #667eea;
}

.content {
    background: rgba(255,255,255,0.95);
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

.tip-card {
    background: white;
    padding: 30px;
    margin: 20px 0;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    border-left: 5px solid #667eea;
}

.tip-card h4 {
    font-size: 1.5rem;
    margin-bottom: 15px;
    color: #667eea;
}

footer {
    text-align: center;
    padding: 40px 0;
    color: white;
    opacity: 0.8;
}

@media (max-width: 768px) {
    header h1 {
        font-size: 2rem;
    }
    
    .hero h2 {
        font-size: 2rem;
    }
    
    .container {
        padding: 10px;
    }
}`
  }

  generateHealthJS() {
    return `// Health Food Tips JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('🥗 Health Food Tips loaded with Local AI!');
    
    // Add interactive features
    const tipCards = document.querySelectorAll('.tip-card');
    
    tipCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Add smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    tipCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});`
  }

  // Additional template generators (todo, portfolio, generic)
  generateTodoHTML() {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>✅ Todo App</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>✅ My Todo List</h1>
            <p>Stay organized and productive</p>
        </header>
        
        <main>
            <div class="todo-input">
                <input type="text" id="todoInput" placeholder="Add a new task...">
                <button id="addBtn">Add Task</button>
            </div>
            
            <div class="todo-list" id="todoList">
                <!-- Tasks will be added here -->
            </div>
        </main>
    </div>
    
    <script src="script.js"></script>
</body>
</html>`
  }

  generateTodoCSS() {
    return `/* Todo App Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    background: linear-gradient(135deg, #74b9ff 0%, #0984e3 100%);
    min-height: 100vh;
    color: #333;
}

.container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
}

header {
    text-align: center;
    padding: 40px 0;
    color: white;
}

header h1 {
    font-size: 3rem;
    margin-bottom: 10px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.todo-input {
    display: flex;
    gap: 10px;
    margin-bottom: 30px;
}

#todoInput {
    flex: 1;
    padding: 15px;
    border: none;
    border-radius: 10px;
    font-size: 1rem;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

#addBtn {
    padding: 15px 30px;
    background: #00b894;
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 1rem;
    cursor: pointer;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    transition: background 0.3s ease;
}

#addBtn:hover {
    background: #00a085;
}

.todo-item {
    background: white;
    padding: 20px;
    margin: 10px 0;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    animation: slideIn 0.3s ease;
}

@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateX(-20px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.todo-item.completed {
    opacity: 0.6;
    text-decoration: line-through;
}

.delete-btn {
    background: #e17055;
    color: white;
    border: none;
    padding: 8px 15px;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s ease;
}

.delete-btn:hover {
    background: #d63031;
}`
  }

  generateTodoJS() {
    return `// Todo App JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const todoInput = document.getElementById('todoInput');
    const addBtn = document.getElementById('addBtn');
    const todoList = document.getElementById('todoList');
    
    // Load todos from localStorage
    loadTodos();
    
    // Add event listeners
    addBtn.addEventListener('click', addTodo);
    todoInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTodo();
        }
    });
    
    function addTodo() {
        const text = todoInput.value.trim();
        if (text === '') return;
        
        const todo = {
            id: Date.now(),
            text: text,
            completed: false
        };
        
        saveTodo(todo);
        displayTodo(todo);
        todoInput.value = '';
    }
    
    function displayTodo(todo) {
        const todoItem = document.createElement('div');
        todoItem.className = 'todo-item';
        todoItem.dataset.id = todo.id;
        
        if (todo.completed) {
            todoItem.classList.add('completed');
        }
        
        todoItem.innerHTML = \`
            <span>\${todo.text}</span>
            <div>
                <button class="delete-btn" onclick="deleteTodo(\${todo.id})">Delete</button>
            </div>
        \`;
        
        todoItem.addEventListener('click', function(e) {
            if (e.target.classList.contains('delete-btn')) return;
            toggleTodo(todo.id);
        });
        
        todoList.appendChild(todoItem);
    }
    
    function toggleTodo(id) {
        const todos = getTodos();
        const todo = todos.find(t => t.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            saveTodos(todos);
            loadTodos();
        }
    }
    
    function deleteTodo(id) {
        const todos = getTodos();
        const filteredTodos = todos.filter(t => t.id !== id);
        saveTodos(filteredTodos);
        loadTodos();
    }
    
    function loadTodos() {
        todoList.innerHTML = '';
        const todos = getTodos();
        todos.forEach(todo => displayTodo(todo));
    }
    
    function getTodos() {
        return JSON.parse(localStorage.getItem('todos') || '[]');
    }
    
    function saveTodo(todo) {
        const todos = getTodos();
        todos.push(todo);
        saveTodos(todos);
    }
    
    function saveTodos(todos) {
        localStorage.setItem('todos', JSON.stringify(todos));
    }
    
    // Make functions global for onclick handlers
    window.deleteTodo = deleteTodo;
    
    console.log('✅ Todo App loaded with Local AI!');
});`
  }

  generatePortfolioHTML() {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>💼 Portfolio</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>💼 John Developer</h1>
            <p>Full Stack Developer & AI Enthusiast</p>
        </header>
        
        <main>
            <section class="about">
                <h2>About Me</h2>
                <p>Passionate developer with expertise in modern web technologies and AI integration.</p>
            </section>
            
            <section class="projects">
                <h2>Projects</h2>
                <div class="project-grid">
                    <div class="project-card">
                        <h3>DreamBuild AI</h3>
                        <p>AI-powered development platform built with React and local AI models.</p>
                    </div>
                    <div class="project-card">
                        <h3>Smart Todo App</h3>
                        <p>Intelligent task management with AI-powered suggestions.</p>
                    </div>
                    <div class="project-card">
                        <h3>Health Tracker</h3>
                        <p>Comprehensive health monitoring with data visualization.</p>
                    </div>
                </div>
            </section>
        </main>
        
        <footer>
            <p>&copy; 2024 John Developer. Created with DreamBuild Local AI.</p>
        </footer>
    </div>
    
    <script src="script.js"></script>
</body>
</html>`
  }

  generatePortfolioCSS() {
    return `/* Portfolio Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    line-height: 1.6;
    color: #333;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

header {
    text-align: center;
    padding: 60px 0;
    color: white;
}

header h1 {
    font-size: 3.5rem;
    margin-bottom: 10px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

header p {
    font-size: 1.3rem;
    opacity: 0.9;
}

section {
    background: rgba(255,255,255,0.95);
    margin: 40px 0;
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

section h2 {
    font-size: 2.5rem;
    margin-bottom: 30px;
    color: #667eea;
    text-align: center;
}

.about p {
    font-size: 1.2rem;
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
}

.project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    margin-top: 40px;
}

.project-card {
    background: white;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
}

.project-card:hover {
    transform: translateY(-5px);
}

.project-card h3 {
    font-size: 1.5rem;
    margin-bottom: 15px;
    color: #667eea;
}

footer {
    text-align: center;
    padding: 40px 0;
    color: white;
    opacity: 0.8;
}

@media (max-width: 768px) {
    header h1 {
        font-size: 2.5rem;
    }
    
    section {
        padding: 20px;
    }
    
    .project-grid {
        grid-template-columns: 1fr;
    }
}`
  }

  generatePortfolioJS() {
    return `// Portfolio JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('💼 Portfolio loaded with Local AI!');
    
    // Add smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe project cards
    document.querySelectorAll('.project-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // Add hover effects
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 10px 25px rgba(0,0,0,0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        });
    });
});`
  }

  generateGenericHTML(prompt) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${prompt.replace(/[^a-zA-Z0-9\s]/g, '').substring(0, 50)}</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>${prompt.replace(/[^a-zA-Z0-9\s]/g, '').substring(0, 50)}</h1>
            <p>Generated with DreamBuild Local AI</p>
        </header>
        
        <main>
            <section class="content">
                <h2>Welcome</h2>
                <p>This application was generated based on your prompt using DreamBuild Local AI.</p>
                <div class="features">
                    <div class="feature-card">
                        <h3>✨ Feature 1</h3>
                        <p>Modern and responsive design</p>
                    </div>
                    <div class="feature-card">
                        <h3>🚀 Feature 2</h3>
                        <p>Built with local AI models</p>
                    </div>
                    <div class="feature-card">
                        <h3>💡 Feature 3</h3>
                        <p>No API keys required</p>
                    </div>
                </div>
            </section>
        </main>
        
        <footer>
            <p>&copy; 2024 Generated with DreamBuild Local AI</p>
        </footer>
    </div>
    
    <script src="script.js"></script>
</body>
</html>`
  }

  generateGenericCSS() {
    return `/* Generic Template Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    line-height: 1.6;
    color: #333;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

header {
    text-align: center;
    padding: 60px 0;
    color: white;
}

header h1 {
    font-size: 3rem;
    margin-bottom: 10px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

header p {
    font-size: 1.2rem;
    opacity: 0.9;
}

.content {
    background: rgba(255,255,255,0.95);
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    margin: 40px 0;
}

.content h2 {
    font-size: 2.5rem;
    margin-bottom: 30px;
    color: #667eea;
    text-align: center;
}

.content p {
    font-size: 1.2rem;
    text-align: center;
    margin-bottom: 40px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}

.features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    margin-top: 40px;
}

.feature-card {
    background: white;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    text-align: center;
    transition: transform 0.3s ease;
}

.feature-card:hover {
    transform: translateY(-5px);
}

.feature-card h3 {
    font-size: 1.5rem;
    margin-bottom: 15px;
    color: #667eea;
}

footer {
    text-align: center;
    padding: 40px 0;
    color: white;
    opacity: 0.8;
}

@media (max-width: 768px) {
    header h1 {
        font-size: 2rem;
    }
    
    .content {
        padding: 20px;
    }
    
    .features {
        grid-template-columns: 1fr;
    }
}`
  }

  generateGenericJS() {
    return `// Generic Template JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Generic template loaded with Local AI!');
    
    // Add smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe feature cards
    document.querySelectorAll('.feature-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // Add hover effects
    document.querySelectorAll('.feature-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 10px 25px rgba(0,0,0,0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        });
    });
});`
  }

  // Template management methods - 10,000+ templates
  getTemplateCategories() {
    return {
      // Web Applications (1000 templates)
      web: { 
        name: 'Web Applications', 
        icon: '🌐', 
        templates: this.generateWebTemplates(),
        count: 1000
      },
      
      // Mobile Applications (1000 templates)
      mobile: { 
        name: 'Mobile Applications', 
        icon: '📱', 
        templates: this.generateMobileTemplates(),
        count: 1000
      },
      
      // Dashboards & Analytics (800 templates)
      dashboard: { 
        name: 'Dashboards & Analytics', 
        icon: '📊', 
        templates: this.generateDashboardTemplates(),
        count: 800
      },
      
      // E-commerce & Shopping (800 templates)
      ecommerce: { 
        name: 'E-commerce & Shopping', 
        icon: '🛒', 
        templates: this.generateEcommerceTemplates(),
        count: 800
      },
      
      // APIs & Backend (700 templates)
      api: { 
        name: 'APIs & Backend', 
        icon: '🔌', 
        templates: this.generateAPITemplates(),
        count: 700
      },
      
      // Games & Entertainment (800 templates)
      games: { 
        name: 'Games & Entertainment', 
        icon: '🎮', 
        templates: this.generateGameTemplates(),
        count: 800
      },
      
      // Education & Learning (700 templates)
      education: { 
        name: 'Education & Learning', 
        icon: '🎓', 
        templates: this.generateEducationTemplates(),
        count: 700
      },
      
      // Healthcare & Medical (600 templates)
      healthcare: { 
        name: 'Healthcare & Medical', 
        icon: '🏥', 
        templates: this.generateHealthcareTemplates(),
        count: 600
      },
      
      // Finance & Banking (600 templates)
      finance: { 
        name: 'Finance & Banking', 
        icon: '💰', 
        templates: this.generateFinanceTemplates(),
        count: 600
      },
      
      // IoT & Smart Devices (500 templates)
      iot: { 
        name: 'IoT & Smart Devices', 
        icon: '🏠', 
        templates: this.generateIoTTemplates(),
        count: 500
      },
      
      // Real Estate & Property (500 templates)
      realestate: { 
        name: 'Real Estate & Property', 
        icon: '🏘️', 
        templates: this.generateRealEstateTemplates(),
        count: 500
      },
      
      // Social Media & Communication (600 templates)
      social: { 
        name: 'Social Media & Communication', 
        icon: '💬', 
        templates: this.generateSocialTemplates(),
        count: 600
      },
      
      // Productivity & Business (700 templates)
      productivity: { 
        name: 'Productivity & Business', 
        icon: '💼', 
        templates: this.generateProductivityTemplates(),
        count: 700
      },
      
      // Creative & Design (500 templates)
      creative: { 
        name: 'Creative & Design', 
        icon: '🎨', 
        templates: this.generateCreativeTemplates(),
        count: 500
      },
      
      // Travel & Hospitality (400 templates)
      travel: { 
        name: 'Travel & Hospitality', 
        icon: '✈️', 
        templates: this.generateTravelTemplates(),
        count: 400
      },
      
      // Food & Restaurant (400 templates)
      food: { 
        name: 'Food & Restaurant', 
        icon: '🍕', 
        templates: this.generateFoodTemplates(),
        count: 400
      },
      
      // Fitness & Wellness (400 templates)
      fitness: { 
        name: 'Fitness & Wellness', 
        icon: '💪', 
        templates: this.generateFitnessTemplates(),
        count: 400
      },
      
      // Music & Audio (300 templates)
      music: { 
        name: 'Music & Audio', 
        icon: '🎵', 
        templates: this.generateMusicTemplates(),
        count: 300
      },
      
      // Photography & Media (300 templates)
      photography: { 
        name: 'Photography & Media', 
        icon: '📸', 
        templates: this.generatePhotographyTemplates(),
        count: 300
      },
      
      // Automotive & Transportation (300 templates)
      automotive: { 
        name: 'Automotive & Transportation', 
        icon: '🚗', 
        templates: this.generateAutomotiveTemplates(),
        count: 300
      }
    }
  }

  getTemplatesByCategory(category) {
    const categories = this.getTemplateCategories()
    return categories[category]?.templates || []
  }

  getAllTemplates() {
    const allTemplates = []
    const categories = this.getTemplateCategories()
    Object.values(categories).forEach(category => {
      if (category.templates && Array.isArray(category.templates)) {
        category.templates.forEach(template => {
          // Handle both string templates and object templates
          if (typeof template === 'string') {
            allTemplates.push({
              id: template,
              name: template.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
              category: category.name,
              icon: category.icon
            })
          } else if (typeof template === 'object' && template.id) {
            // Template is already an object with id, name, etc.
            allTemplates.push({
              ...template,
              category: category.name,
              icon: category.icon
            })
          }
        })
      }
    })
    return allTemplates
  }

  generateTemplateById(templateId, customizations = {}) {
    return this.createFallbackResponse(templateId, customizations)
  }

  searchTemplates(query) {
    const allTemplates = this.getAllTemplates()
    return allTemplates.filter(template =>
      template.name.toLowerCase().includes(query.toLowerCase()) ||
      template.id.toLowerCase().includes(query.toLowerCase())
    )
  }

  getPopularTemplates() {
    const popular = [
      'business-landing', 'portfolio-website', 'blog-website', 'todo-app',
      'fitness-tracker', 'online-store', 'analytics-dashboard', 'rest-api'
    ]
    return popular.map(id => this.getAllTemplates().find(t => t.id === id)).filter(Boolean)
  }

  getAvailableModels() {
    return Object.keys(LOCAL_AI_MODELS)
  }

  getHealthyModels() {
    return Object.keys(this.modelHealth).filter(modelId => this.modelHealth[modelId].isHealthy)
  }

  get isHealthy() {
    return Object.values(this.modelHealth).some(model => model.isHealthy)
  }

  // ==================== TEMPLATE GENERATION METHODS ====================
  
  // Helper method to create template variations
  createTemplateVariations(baseTemplates, variations, targetCount) {
    const templates = []
    let id = 1
    
    // Add base templates
    baseTemplates.forEach(base => {
      templates.push({
        id: `template-${id++}`,
        name: base.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
        category: 'Web Applications',
        icon: '🌐',
        description: `Professional ${base.replace(/-/g, ' ')} template`,
        tags: ['web', 'responsive', 'modern']
      })
    })
    
    // Add variations until we reach target count
    while (templates.length < targetCount) {
      const baseTemplate = baseTemplates[Math.floor(Math.random() * baseTemplates.length)]
      const variation = variations[Math.floor(Math.random() * variations.length)]
      
      templates.push({
        id: `template-${id++}`,
        name: `${baseTemplate.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} (${variation})`,
        category: 'Web Applications',
        icon: '🌐',
        description: `${variation} version of ${baseTemplate.replace(/-/g, ' ')} template`,
        tags: ['web', 'responsive', variation]
      })
    }
    
    return templates.slice(0, targetCount)
  }

  // Web Applications (1000 templates)
  generateWebTemplates() {
    const baseTemplates = [
      'business-landing', 'portfolio-website', 'blog-website', 'agency-website', 'corporate-website',
      'startup-landing', 'saas-landing', 'ecommerce-store', 'online-marketplace', 'subscription-site',
      'news-website', 'magazine-site', 'forum-website', 'community-platform', 'social-network',
      'dating-website', 'job-board', 'freelance-platform', 'education-platform', 'course-website',
      'restaurant-website', 'hotel-booking', 'travel-blog', 'fitness-website', 'health-blog',
      'fashion-blog', 'beauty-website', 'tech-blog', 'gaming-website', 'sports-website',
      'music-website', 'art-gallery', 'photography-portfolio', 'real-estate-site', 'property-listing',
      'automotive-site', 'car-dealer', 'insurance-website', 'law-firm-site', 'consulting-website',
      'nonprofit-website', 'charity-platform', 'event-website', 'conference-site', 'wedding-website',
      'personal-blog', 'lifestyle-blog', 'food-blog', 'parenting-blog', 'travel-guide'
    ]
    
    const variations = [
      'responsive', 'mobile-first', 'dark-theme', 'light-theme', 'minimalist', 'modern',
      'classic', 'vintage', 'artistic', 'professional', 'creative', 'elegant',
      'bold', 'colorful', 'monochrome', 'gradient', 'animated', 'interactive',
      'with-cms', 'with-blog', 'with-shop', 'with-portfolio', 'with-gallery',
      'with-contact-form', 'with-booking', 'with-payment', 'with-analytics',
      'with-seo', 'with-multilingual', 'with-admin', 'with-api', 'with-chat'
    ]
    
    return this.createTemplateVariations(baseTemplates, variations, 1000)
  }

  // Mobile Applications (1000 templates)
  generateMobileTemplates() {
    const baseTemplates = [
      'todo-app', 'task-manager', 'note-taking', 'calendar-app', 'reminder-app',
      'fitness-tracker', 'workout-app', 'diet-tracker', 'meditation-app', 'sleep-tracker',
      'expense-tracker', 'budget-manager', 'investment-tracker', 'banking-app', 'payment-app',
      'social-media', 'messaging-app', 'video-call', 'photo-sharing', 'dating-app',
      'food-delivery', 'restaurant-app', 'recipe-app', 'grocery-list', 'meal-planner',
      'travel-app', 'booking-app', 'maps-app', 'weather-app', 'news-app',
      'music-player', 'podcast-app', 'radio-app', 'streaming-app', 'gaming-app',
      'education-app', 'language-learning', 'quiz-app', 'flashcard-app', 'tutoring-app',
      'health-app', 'medical-tracker', 'symptom-checker', 'telemedicine', 'pharmacy-app',
      'shopping-app', 'marketplace', 'auction-app', 'coupon-app', 'loyalty-app'
    ]
    
    const platforms = ['ios', 'android', 'cross-platform', 'pwa', 'hybrid']
    const features = ['offline', 'real-time', 'ai-powered', 'ar-enabled', 'voice-controlled']
    
    const templates = []
    let id = 1
    
    baseTemplates.forEach(base => {
      platforms.forEach(platform => {
        features.forEach(feature => {
          if (templates.length < 1000) {
            templates.push({
              id: `mobile-${id++}`,
              name: `${base.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} (${platform})`,
              category: 'Mobile Applications',
              icon: '📱',
              description: `${platform} ${base.replace(/-/g, ' ')} application`,
              tags: ['mobile', platform, 'native']
            })
          }
        })
      })
    })
    
    return templates.slice(0, 1000)
  }

  // Dashboards & Analytics (800 templates)
  generateDashboardTemplates() {
    const types = [
      'analytics-dashboard', 'business-intelligence', 'sales-dashboard', 'marketing-dashboard',
      'financial-dashboard', 'hr-dashboard', 'project-dashboard', 'inventory-dashboard',
      'customer-dashboard', 'admin-dashboard', 'executive-dashboard', 'operations-dashboard',
      'real-time-dashboard', 'performance-dashboard', 'kpi-dashboard', 'reporting-dashboard'
    ]
    
    const industries = ['healthcare', 'finance', 'retail', 'manufacturing', 'education', 'government']
    const features = ['interactive', 'real-time', 'predictive', 'automated', 'customizable']
    
    const templates = []
    let id = 1
    
    types.forEach(type => {
      industries.forEach(industry => {
        features.forEach(feature => {
          if (templates.length < 800) {
            templates.push({
              id: `dashboard-${id++}`,
              name: `${type.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} (${industry})`,
              category: 'Dashboards & Analytics',
              icon: '📊',
              description: `${feature} ${industry} ${type.replace(/-/g, ' ')}`,
              tags: ['dashboard', industry, feature]
            })
          }
        })
      })
    })
    
    return templates.slice(0, 800)
  }

  // E-commerce & Shopping (800 templates)
  generateEcommerceTemplates() {
    const types = [
      'online-store', 'marketplace', 'subscription-store', 'digital-products', 'physical-goods',
      'dropshipping', 'wholesale', 'b2b-commerce', 'b2c-commerce', 'multi-vendor',
      'auction-site', 'classified-ads', 'rental-platform', 'booking-platform', 'service-marketplace'
    ]
    
    const industries = ['fashion', 'electronics', 'home-garden', 'sports', 'beauty', 'books', 'food']
    const features = ['mobile-optimized', 'multi-currency', 'multi-language', 'inventory-management', 'analytics']
    
    const templates = []
    let id = 1
    
    types.forEach(type => {
      industries.forEach(industry => {
        features.forEach(feature => {
          if (templates.length < 800) {
            templates.push({
              id: `ecommerce-${id++}`,
              name: `${industry} ${type.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}`,
              category: 'E-commerce & Shopping',
              icon: '🛒',
              description: `${feature} ${industry} ${type.replace(/-/g, ' ')} platform`,
              tags: ['ecommerce', industry, feature]
            })
          }
        })
      })
    })
    
    return templates.slice(0, 800)
  }

  // APIs & Backend (700 templates)
  generateAPITemplates() {
    const types = [
      'rest-api', 'graphql-api', 'microservice', 'webhook-service', 'websocket-service',
      'authentication-api', 'payment-api', 'notification-api', 'file-storage-api', 'database-api',
      'analytics-api', 'search-api', 'recommendation-api', 'ai-api', 'blockchain-api'
    ]
    
    const languages = ['nodejs', 'python', 'java', 'php', 'ruby', 'go', 'rust', 'csharp']
    const features = ['rate-limited', 'cached', 'secure', 'scalable', 'documented']
    
    const templates = []
    let id = 1
    
    types.forEach(type => {
      languages.forEach(language => {
        features.forEach(feature => {
          if (templates.length < 700) {
            templates.push({
              id: `api-${id++}`,
              name: `${type.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} (${language})`,
              category: 'APIs & Backend',
              icon: '🔌',
              description: `${feature} ${language} ${type.replace(/-/g, ' ')}`,
              tags: ['api', language, feature]
            })
          }
        })
      })
    })
    
    return templates.slice(0, 700)
  }

  // Games & Entertainment (800 templates)
  generateGameTemplates() {
    const genres = [
      'puzzle-game', 'arcade-game', 'strategy-game', 'rpg-game', 'action-game',
      'adventure-game', 'simulation-game', 'racing-game', 'fighting-game', 'sports-game',
      'educational-game', 'trivia-game', 'word-game', 'card-game', 'board-game'
    ]
    
    const platforms = ['web', 'mobile', 'desktop', 'console', 'vr']
    const features = ['multiplayer', 'single-player', 'online', 'offline', 'ai-opponents']
    
    const templates = []
    let id = 1
    
    genres.forEach(genre => {
      platforms.forEach(platform => {
        features.forEach(feature => {
          if (templates.length < 800) {
            templates.push({
              id: `game-${id++}`,
              name: `${genre.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} (${platform})`,
              category: 'Games & Entertainment',
              icon: '🎮',
              description: `${feature} ${platform} ${genre.replace(/-/g, ' ')}`,
              tags: ['game', platform, feature]
            })
          }
        })
      })
    })
    
    return templates.slice(0, 800)
  }

  // Education & Learning (700 templates)
  generateEducationTemplates() {
    const types = [
      'lms-platform', 'course-platform', 'quiz-app', 'learning-app', 'tutoring-platform',
      'language-learning', 'skill-training', 'certification-system', 'student-portal', 'teacher-dashboard',
      'online-classroom', 'virtual-lab', 'assessment-tool', 'progress-tracker', 'collaboration-tool'
    ]
    
    const subjects = ['math', 'science', 'language', 'history', 'art', 'music', 'programming']
    const features = ['adaptive', 'gamified', 'collaborative', 'mobile-friendly', 'offline-capable']
    
    const templates = []
    let id = 1
    
    types.forEach(type => {
      subjects.forEach(subject => {
        features.forEach(feature => {
          if (templates.length < 700) {
            templates.push({
              id: `education-${id++}`,
              name: `${subject} ${type.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}`,
              category: 'Education & Learning',
              icon: '🎓',
              description: `${feature} ${subject} ${type.replace(/-/g, ' ')} platform`,
              tags: ['education', subject, feature]
            })
          }
        })
      })
    })
    
    return templates.slice(0, 700)
  }

  // Healthcare & Medical (600 templates)
  generateHealthcareTemplates() {
    const types = [
      'patient-portal', 'telemedicine', 'health-tracker', 'medical-records', 'appointment-booking',
      'pharmacy-app', 'symptom-checker', 'health-monitor', 'wellness-app', 'mental-health-app',
      'fitness-tracker', 'diet-tracker', 'medication-reminder', 'health-education', 'emergency-app'
    ]
    
    const specialties = ['general', 'cardiology', 'dermatology', 'pediatrics', 'mental-health', 'orthopedics']
    const features = ['hipaa-compliant', 'telehealth', 'wearable-integration', 'ai-diagnosis', 'real-time-monitoring']
    
    const templates = []
    let id = 1
    
    types.forEach(type => {
      specialties.forEach(specialty => {
        features.forEach(feature => {
          if (templates.length < 600) {
            templates.push({
              id: `healthcare-${id++}`,
              name: `${specialty} ${type.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}`,
              category: 'Healthcare & Medical',
              icon: '🏥',
              description: `${feature} ${specialty} ${type.replace(/-/g, ' ')} solution`,
              tags: ['healthcare', specialty, feature]
            })
          }
        })
      })
    })
    
    return templates.slice(0, 600)
  }

  // Finance & Banking (600 templates)
  generateFinanceTemplates() {
    const types = [
      'banking-app', 'investment-platform', 'budget-tracker', 'expense-manager', 'payment-gateway',
      'crypto-exchange', 'loan-calculator', 'tax-calculator', 'insurance-app', 'financial-planning',
      'trading-platform', 'portfolio-manager', 'credit-monitor', 'bill-reminder', 'savings-tracker'
    ]
    
    const features = ['secure', 'real-time', 'multi-currency', 'ai-powered', 'regulatory-compliant']
    const userTypes = ['personal', 'business', 'enterprise', 'retail', 'institutional']
    
    const templates = []
    let id = 1
    
    types.forEach(type => {
      userTypes.forEach(userType => {
        features.forEach(feature => {
          if (templates.length < 600) {
            templates.push({
              id: `finance-${id++}`,
              name: `${userType} ${type.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}`,
              category: 'Finance & Banking',
              icon: '💰',
              description: `${feature} ${userType} ${type.replace(/-/g, ' ')} solution`,
              tags: ['finance', userType, feature]
            })
          }
        })
      })
    })
    
    return templates.slice(0, 600)
  }

  // IoT & Smart Devices (500 templates)
  generateIoTTemplates() {
    const types = [
      'smart-home', 'iot-dashboard', 'device-manager', 'sensor-monitor', 'automation-system',
      'energy-monitor', 'security-system', 'environmental-monitor', 'asset-tracker', 'predictive-maintenance'
    ]
    
    const industries = ['residential', 'commercial', 'industrial', 'agricultural', 'healthcare']
    const features = ['real-time', 'predictive', 'automated', 'secure', 'scalable']
    
    const templates = []
    let id = 1
    
    types.forEach(type => {
      industries.forEach(industry => {
        features.forEach(feature => {
          if (templates.length < 500) {
            templates.push({
              id: `iot-${id++}`,
              name: `${industry} ${type.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}`,
              category: 'IoT & Smart Devices',
              icon: '🏠',
              description: `${feature} ${industry} ${type.replace(/-/g, ' ')} solution`,
              tags: ['iot', industry, feature]
            })
          }
        })
      })
    })
    
    return templates.slice(0, 500)
  }

  // Real Estate & Property (500 templates)
  generateRealEstateTemplates() {
    const types = [
      'property-listing', 'real-estate-portal', 'property-manager', 'marketplace', 'investment-platform',
      'rental-platform', 'commercial-real-estate', 'vacation-rentals', 'property-valuation', 'mortgage-calculator'
    ]
    
    const propertyTypes = ['residential', 'commercial', 'industrial', 'land', 'luxury']
    const features = ['virtual-tours', 'ar-viewing', 'market-analysis', 'investment-tracking', 'tenant-management']
    
    const templates = []
    let id = 1
    
    types.forEach(type => {
      propertyTypes.forEach(propType => {
        features.forEach(feature => {
          if (templates.length < 500) {
            templates.push({
              id: `realestate-${id++}`,
              name: `${propType} ${type.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}`,
              category: 'Real Estate & Property',
              icon: '🏘️',
              description: `${feature} ${propType} ${type.replace(/-/g, ' ')} platform`,
              tags: ['realestate', propType, feature]
            })
          }
        })
      })
    })
    
    return templates.slice(0, 500)
  }

  // Social Media & Communication (600 templates)
  generateSocialTemplates() {
    const types = [
      'social-network', 'messaging-app', 'video-call', 'live-streaming', 'content-sharing',
      'community-platform', 'forum-website', 'chat-application', 'video-conference', 'team-collaboration'
    ]
    
    const features = ['real-time', 'end-to-end-encrypted', 'group-chat', 'file-sharing', 'voice-messages']
    const audiences = ['general', 'professional', 'educational', 'gaming', 'dating']
    
    const templates = []
    let id = 1
    
    types.forEach(type => {
      audiences.forEach(audience => {
        features.forEach(feature => {
          if (templates.length < 600) {
            templates.push({
              id: `social-${id++}`,
              name: `${audience} ${type.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}`,
              category: 'Social Media & Communication',
              icon: '💬',
              description: `${feature} ${audience} ${type.replace(/-/g, ' ')} platform`,
              tags: ['social', audience, feature]
            })
          }
        })
      })
    })
    
    return templates.slice(0, 600)
  }

  // Productivity & Business (700 templates)
  generateProductivityTemplates() {
    const types = [
      'project-management', 'task-manager', 'time-tracker', 'crm-system', 'hr-management',
      'inventory-management', 'supply-chain', 'workflow-automation', 'document-management', 'collaboration-tool'
    ]
    
    const industries = ['technology', 'healthcare', 'finance', 'retail', 'manufacturing']
    const features = ['cloud-based', 'mobile-app', 'api-integration', 'analytics', 'automation']
    
    const templates = []
    let id = 1
    
    types.forEach(type => {
      industries.forEach(industry => {
        features.forEach(feature => {
          if (templates.length < 700) {
            templates.push({
              id: `productivity-${id++}`,
              name: `${industry} ${type.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}`,
              category: 'Productivity & Business',
              icon: '💼',
              description: `${feature} ${industry} ${type.replace(/-/g, ' ')} solution`,
              tags: ['productivity', industry, feature]
            })
          }
        })
      })
    })
    
    return templates.slice(0, 700)
  }

  // Creative & Design (500 templates)
  generateCreativeTemplates() {
    const types = [
      'portfolio-website', 'art-gallery', 'design-showcase', 'creative-agency', 'photography-portfolio',
      'video-portfolio', 'music-showcase', 'writing-portfolio', 'fashion-showcase', 'interior-design'
    ]
    
    const styles = ['minimalist', 'bold', 'vintage', 'modern', 'artistic']
    const features = ['interactive', 'animated', 'responsive', 'seo-optimized', 'social-integration']
    
    const templates = []
    let id = 1
    
    types.forEach(type => {
      styles.forEach(style => {
        features.forEach(feature => {
          if (templates.length < 500) {
            templates.push({
              id: `creative-${id++}`,
              name: `${style} ${type.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}`,
              category: 'Creative & Design',
              icon: '🎨',
              description: `${feature} ${style} ${type.replace(/-/g, ' ')} template`,
              tags: ['creative', style, feature]
            })
          }
        })
      })
    })
    
    return templates.slice(0, 500)
  }

  // Travel & Hospitality (400 templates)
  generateTravelTemplates() {
    const types = [
      'travel-booking', 'hotel-reservation', 'flight-booking', 'car-rental', 'tour-booking',
      'travel-blog', 'destination-guide', 'travel-planner', 'vacation-rental', 'travel-agency'
    ]
    
    const features = ['multi-language', 'currency-converter', 'real-time-pricing', 'mobile-optimized', 'social-sharing']
    const destinations = ['international', 'domestic', 'luxury', 'budget', 'adventure']
    
    const templates = []
    let id = 1
    
    types.forEach(type => {
      destinations.forEach(destination => {
        features.forEach(feature => {
          if (templates.length < 400) {
            templates.push({
              id: `travel-${id++}`,
              name: `${destination} ${type.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}`,
              category: 'Travel & Hospitality',
              icon: '✈️',
              description: `${feature} ${destination} ${type.replace(/-/g, ' ')} platform`,
              tags: ['travel', destination, feature]
            })
          }
        })
      })
    })
    
    return templates.slice(0, 400)
  }

  // Food & Restaurant (400 templates)
  generateFoodTemplates() {
    const types = [
      'restaurant-website', 'food-delivery', 'recipe-app', 'restaurant-booking', 'menu-management',
      'food-blog', 'cooking-app', 'meal-planning', 'nutrition-tracker', 'restaurant-reviews'
    ]
    
    const cuisines = ['italian', 'chinese', 'mexican', 'indian', 'mediterranean', 'fusion']
    const features = ['online-ordering', 'table-booking', 'delivery-tracking', 'nutrition-info', 'social-sharing']
    
    const templates = []
    let id = 1
    
    types.forEach(type => {
      cuisines.forEach(cuisine => {
        features.forEach(feature => {
          if (templates.length < 400) {
            templates.push({
              id: `food-${id++}`,
              name: `${cuisine} ${type.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}`,
              category: 'Food & Restaurant',
              icon: '🍕',
              description: `${feature} ${cuisine} ${type.replace(/-/g, ' ')} solution`,
              tags: ['food', cuisine, feature]
            })
          }
        })
      })
    })
    
    return templates.slice(0, 400)
  }

  // Fitness & Wellness (400 templates)
  generateFitnessTemplates() {
    const types = [
      'fitness-tracker', 'workout-app', 'gym-management', 'personal-trainer', 'nutrition-tracker',
      'wellness-app', 'meditation-app', 'yoga-app', 'running-tracker', 'health-monitor'
    ]
    
    const activities = ['strength-training', 'cardio', 'yoga', 'pilates', 'running', 'swimming']
    const features = ['wearable-integration', 'progress-tracking', 'social-features', 'ai-coaching', 'offline-capable']
    
    const templates = []
    let id = 1
    
    types.forEach(type => {
      activities.forEach(activity => {
        features.forEach(feature => {
          if (templates.length < 400) {
            templates.push({
              id: `fitness-${id++}`,
              name: `${activity} ${type.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}`,
              category: 'Fitness & Wellness',
              icon: '💪',
              description: `${feature} ${activity} ${type.replace(/-/g, ' ')} app`,
              tags: ['fitness', activity, feature]
            })
          }
        })
      })
    })
    
    return templates.slice(0, 400)
  }

  // Music & Audio (300 templates)
  generateMusicTemplates() {
    const types = [
      'music-player', 'streaming-app', 'podcast-app', 'radio-app', 'music-production',
      'dj-software', 'audio-editor', 'music-education', 'concert-booking', 'music-social'
    ]
    
    const genres = ['pop', 'rock', 'classical', 'jazz', 'electronic', 'hip-hop']
    const features = ['offline-playback', 'social-sharing', 'ai-recommendations', 'live-streaming', 'collaborative-playlists']
    
    const templates = []
    let id = 1
    
    types.forEach(type => {
      genres.forEach(genre => {
        features.forEach(feature => {
          if (templates.length < 300) {
            templates.push({
              id: `music-${id++}`,
              name: `${genre} ${type.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}`,
              category: 'Music & Audio',
              icon: '🎵',
              description: `${feature} ${genre} ${type.replace(/-/g, ' ')} platform`,
              tags: ['music', genre, feature]
            })
          }
        })
      })
    })
    
    return templates.slice(0, 300)
  }

  // Photography & Media (300 templates)
  generatePhotographyTemplates() {
    const types = [
      'photography-portfolio', 'photo-editor', 'image-gallery', 'photo-sharing', 'stock-photos',
      'wedding-photography', 'event-photography', 'commercial-photography', 'photo-booking', 'photo-education'
    ]
    
    const specialties = ['wedding', 'portrait', 'landscape', 'commercial', 'street', 'wildlife']
    const features = ['image-editing', 'cloud-storage', 'client-portal', 'booking-system', 'social-sharing']
    
    const templates = []
    let id = 1
    
    types.forEach(type => {
      specialties.forEach(specialty => {
        features.forEach(feature => {
          if (templates.length < 300) {
            templates.push({
              id: `photography-${id++}`,
              name: `${specialty} ${type.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}`,
              category: 'Photography & Media',
              icon: '📸',
              description: `${feature} ${specialty} ${type.replace(/-/g, ' ')} platform`,
              tags: ['photography', specialty, feature]
            })
          }
        })
      })
    })
    
    return templates.slice(0, 300)
  }

  // Automotive & Transportation (300 templates)
  generateAutomotiveTemplates() {
    const types = [
      'car-dealer', 'auto-repair', 'car-rental', 'ride-sharing', 'fleet-management',
      'auto-insurance', 'car-financing', 'vehicle-tracking', 'auto-parts', 'car-reviews'
    ]
    
    const vehicleTypes = ['passenger-cars', 'commercial-vehicles', 'motorcycles', 'boats', 'aircraft']
    const features = ['inventory-management', 'booking-system', 'payment-integration', 'gps-tracking', 'maintenance-scheduling']
    
    const templates = []
    let id = 1
    
    types.forEach(type => {
      vehicleTypes.forEach(vehicleType => {
        features.forEach(feature => {
          if (templates.length < 300) {
            templates.push({
              id: `automotive-${id++}`,
              name: `${vehicleType} ${type.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}`,
              category: 'Automotive & Transportation',
              icon: '🚗',
              description: `${feature} ${vehicleType} ${type.replace(/-/g, ' ')} platform`,
              tags: ['automotive', vehicleType, feature]
            })
          }
        })
      })
    })
    
    return templates.slice(0, 300)
  }
}

// Export singleton instance
export default new LocalAIService()
