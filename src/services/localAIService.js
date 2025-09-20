// DreamBuild Local AI Service - 100% Self-Hosted
// No API keys required - everything runs locally

import axios from 'axios'

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
    
    // Check if we're running on localhost
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
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
      if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
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
      // Check if we're running on a web domain (CORS issues)
      if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
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
    } else {
      return 'code-generation'
    }
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

  // Template management methods
  getTemplateCategories() {
    return {
      web: { name: 'Web Applications', icon: '🌐', templates: ['business-landing', 'portfolio-website', 'blog-website', 'agency-website'] },
      mobile: { name: 'Mobile Applications', icon: '📱', templates: ['todo-app', 'fitness-tracker', 'task-manager', 'note-app'] },
      dashboard: { name: 'Dashboards', icon: '📊', templates: ['analytics-dashboard', 'admin-dashboard', 'sales-dashboard', 'kpi-dashboard'] },
      ecommerce: { name: 'E-commerce', icon: '🛒', templates: ['online-store', 'ecommerce-store', 'marketplace', 'subscription-store'] },
      api: { name: 'APIs & Backend', icon: '🔌', templates: ['rest-api', 'graphql-api', 'microservice', 'webhook-service'] },
      games: { name: 'Games', icon: '🎮', templates: ['puzzle-game', 'arcade-game', 'educational-game', 'multiplayer-game'] },
      education: { name: 'Education', icon: '🎓', templates: ['lms-platform', 'course-platform', 'quiz-app', 'learning-app'] },
      healthcare: { name: 'Healthcare', icon: '🏥', templates: ['patient-portal', 'telemedicine', 'health-tracker', 'medical-records'] },
      finance: { name: 'Finance', icon: '💰', templates: ['budget-tracker', 'investment-portfolio', 'payment-gateway', 'banking-app'] },
      iot: { name: 'IoT & Smart', icon: '🏠', templates: ['smart-home', 'iot-dashboard', 'device-manager', 'sensor-monitor'] },
      realestate: { name: 'Real Estate', icon: '🏘️', templates: ['property-listing', 'real-estate-portal', 'property-manager', 'marketplace'] }
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
      category.templates.forEach(template => {
        allTemplates.push({
          id: template,
          name: template.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
          category: category.name,
          icon: category.icon
        })
      })
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
}

// Export singleton instance
export default new LocalAIService()
