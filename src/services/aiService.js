import axios from 'axios'

// Free AI Services Configuration
const AI_SERVICES = {
  // Hugging Face Inference API (Free tier: 30,000 requests/month)
  huggingface: {
    name: 'Hugging Face',
    baseURL: 'https://api-inference.huggingface.co/models',
    models: {
      'microsoft/DialoGPT-medium': 'Conversational AI',
      'facebook/blenderbot-400M-distill': 'Chatbot',
      'microsoft/CodeBERT-base': 'Code Understanding',
      'codeparrot/codeparrot-small': 'Code Generation'
    },
    headers: {
      'Authorization': `Bearer ${process.env.REACT_APP_HUGGINGFACE_TOKEN || 'hf_demo'}`,
      'Content-Type': 'application/json'
    }
  },
  
  // Groq API (Free tier: 6000 requests/day)
  groq: {
    name: 'Groq',
    baseURL: 'https://api.groq.com/openai/v1',
    models: {
      'llama3-8b-8192': 'Fast Llama 3',
      'llama3-70b-8192': 'Advanced Llama 3',
      'mixtral-8x7b-32768': 'Mixtral MoE'
    },
    headers: {
      'Authorization': `Bearer ${process.env.REACT_APP_GROQ_API_KEY || 'gsk_demo'}`,
      'Content-Type': 'application/json'
    }
  },

  // Ollama Local (Completely free, runs locally)
  ollama: {
    name: 'Ollama Local',
    baseURL: 'http://localhost:11434/api',
    models: {
      'llama3': 'Llama 3 (Local)',
      'codellama': 'Code Llama (Local)',
      'mistral': 'Mistral (Local)',
      'gemma': 'Gemma (Local)'
    },
    headers: {
      'Content-Type': 'application/json'
    }
  },

  // Together AI (Free tier: 25 credits/month)
  together: {
    name: 'Together AI',
    baseURL: 'https://api.together.xyz/v1',
    models: {
      'meta-llama/Llama-3-8b-chat-hf': 'Llama 3 Chat',
      'meta-llama/Llama-3-70b-chat-hf': 'Llama 3 70B',
      'mistralai/Mixtral-8x7B-Instruct-v0.1': 'Mixtral Instruct'
    },
    headers: {
      'Authorization': `Bearer ${process.env.REACT_APP_TOGETHER_API_KEY || 'demo_key'}`,
      'Content-Type': 'application/json'
    }
  }
}

class AIService {
  constructor() {
    this.currentService = 'groq' // Default to Groq (most reliable free tier)
    this.currentModel = 'llama3-8b-8192'
  }

  // Set the AI service and model
  setService(serviceName, modelName = null) {
    this.currentService = serviceName
    if (modelName) {
      this.currentModel = modelName
    } else {
      // Set default model for service
      const models = Object.keys(AI_SERVICES[serviceName].models)
      this.currentModel = models[0]
    }
  }

  // Get available services
  getServices() {
    return AI_SERVICES
  }

  // Generate code using AI
  async generateCode(prompt, context = {}) {
    const service = AI_SERVICES[this.currentService]
    if (!service) {
      throw new Error(`AI service '${this.currentService}' not found`)
    }

    try {
      let response

      switch (this.currentService) {
        case 'groq':
          response = await this.generateWithGroq(prompt, context)
          break
        case 'huggingface':
          response = await this.generateWithHuggingFace(prompt, context)
          break
        case 'ollama':
          response = await this.generateWithOllama(prompt, context)
          break
        case 'together':
          response = await this.generateWithTogether(prompt, context)
          break
        default:
          throw new Error(`Unsupported service: ${this.currentService}`)
      }

      return this.parseResponse(response, prompt, context)
    } catch (error) {
      console.error(`AI generation failed with ${this.currentService}:`, error)
      throw error
    }
  }

  // Groq API implementation
  async generateWithGroq(prompt, context) {
    const service = AI_SERVICES.groq
    const messages = this.buildMessages(prompt, context)

    const response = await axios.post(
      `${service.baseURL}/chat/completions`,
      {
        model: this.currentModel,
        messages,
        max_tokens: 4000,
        temperature: 0.7,
        stream: false
      },
      { headers: service.headers }
    )

    return response.data.choices[0].message.content
  }

  // Hugging Face API implementation
  async generateWithHuggingFace(prompt, context) {
    const service = AI_SERVICES.huggingface
    const model = this.currentModel || 'microsoft/CodeBERT-base'
    
    const response = await axios.post(
      `${service.baseURL}/${model}`,
      {
        inputs: prompt,
        parameters: {
          max_length: 1000,
          temperature: 0.7,
          return_full_text: false
        }
      },
      { headers: service.headers }
    )

    return response.data[0]?.generated_text || response.data
  }

  // Ollama Local API implementation
  async generateWithOllama(prompt, context) {
    const service = AI_SERVICES.ollama
    const model = this.currentModel || 'llama3'

    const response = await axios.post(
      `${service.baseURL}/generate`,
      {
        model,
        prompt,
        stream: false,
        options: {
          temperature: 0.7,
          top_p: 0.9,
          max_tokens: 4000
        }
      },
      { headers: service.headers }
    )

    return response.data.response
  }

  // Together AI API implementation
  async generateWithTogether(prompt, context) {
    const service = AI_SERVICES.together
    const messages = this.buildMessages(prompt, context)

    const response = await axios.post(
      `${service.baseURL}/chat/completions`,
      {
        model: this.currentModel,
        messages,
        max_tokens: 4000,
        temperature: 0.7,
        stream: false
      },
      { headers: service.headers }
    )

    return response.data.choices[0].message.content
  }

  // Build conversation messages
  buildMessages(prompt, context) {
    const systemMessage = `You are an expert software developer and AI assistant. Generate high-quality, production-ready code based on user requests.

Context:
- App Type: ${context.appType || 'frontend'}
- Language: ${context.language || 'javascript'}
- Styling: ${context.styling || 'tailwind'}
- Database: ${context.database || 'none'}

Instructions:
1. Generate clean, well-commented code
2. Follow best practices and modern standards
3. Include proper error handling
4. Make code responsive and accessible
5. Use the specified technologies and frameworks

Generate code that matches the user's request exactly.`

    return [
      { role: 'system', content: systemMessage },
      { role: 'user', content: prompt }
    ]
  }

  // Parse AI response and extract code
  parseResponse(response, prompt, context) {
    try {
      // Try to extract code blocks from response
      const codeBlocks = response.match(/```[\s\S]*?```/g)
      
      if (codeBlocks) {
        const files = {}
        codeBlocks.forEach((block, index) => {
          const cleanBlock = block.replace(/```(\w+)?\n?/g, '').replace(/```/g, '').trim()
          const extension = this.getExtensionFromContent(cleanBlock, index)
          const filename = this.getFilenameFromExtension(extension, index)
          files[filename] = cleanBlock
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

  // Get file extension from content
  getExtensionFromContent(content, index) {
    if (content.includes('<!DOCTYPE html') || content.includes('<html')) return 'html'
    if (content.includes('import React') || content.includes('export default')) return 'jsx'
    if (content.includes('const ') && content.includes('require(')) return 'js'
    if (content.includes('body {') || content.includes('background:')) return 'css'
    
    // Default based on index
    const extensions = ['html', 'css', 'js', 'jsx']
    return extensions[index % extensions.length]
  }

  // Get filename from extension
  getFilenameFromExtension(extension, index) {
    const filenames = {
      'html': 'index.html',
      'css': 'style.css',
      'js': 'script.js',
      'jsx': 'components.jsx'
    }
    return filenames[extension] || `file${index + 1}.${extension}`
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

  // Template generators
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
            <p>&copy; 2024 Health Food Tips. Created with DreamBuild AI.</p>
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
    font-family: 'Inter', sans-serif;
    background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%);
    min-height: 100vh;
    color: white;
    line-height: 1.6;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

header {
    text-align: center;
    margin-bottom: 40px;
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
    text-align: center;
    margin-bottom: 60px;
    padding: 40px;
    background: rgba(255,255,255,0.1);
    border-radius: 20px;
    backdrop-filter: blur(10px);
}

.hero h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
}

.hero p {
    font-size: 1.3rem;
    opacity: 0.9;
}

.content {
    margin-bottom: 40px;
}

.content h3 {
    font-size: 2rem;
    margin-bottom: 30px;
    text-align: center;
}

.tip-card {
    background: rgba(255,255,255,0.15);
    border-radius: 15px;
    padding: 25px;
    margin-bottom: 20px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.2);
    transition: transform 0.3s ease;
}

.tip-card:hover {
    transform: translateY(-5px);
}

.tip-card h4 {
    font-size: 1.5rem;
    margin-bottom: 15px;
    color: #fff;
}

.tip-card p {
    font-size: 1.1rem;
    opacity: 0.9;
    line-height: 1.6;
}

footer {
    text-align: center;
    padding: 20px;
    border-top: 1px solid rgba(255,255,255,0.2);
    margin-top: 40px;
}

@media (max-width: 768px) {
    header h1 {
        font-size: 2rem;
    }
    
    .hero h2 {
        font-size: 1.8rem;
    }
    
    .tip-card {
        padding: 20px;
    }
}`
  }

  generateHealthJS() {
    return `// Health Food Tips JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('🥗 Health Food Tips loaded!');
    
    // Add smooth scrolling to sections
    const tipCards = document.querySelectorAll('.tip-card');
    
    tipCards.forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = 'scale(1.02)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    });
    
    // Add animation to hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.opacity = '0';
        hero.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            hero.style.transition = 'all 0.8s ease';
            hero.style.opacity = '1';
            hero.style.transform = 'translateY(0)';
        }, 100);
    }
    
    // Add tip card animations
    tipCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateX(-30px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateX(0)';
        }, 300 + (index * 100));
    });
});`
  }

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
            <h1>✅ Todo App</h1>
            <p>Organize your tasks and stay productive</p>
        </header>
        
        <main>
            <div class="todo-input">
                <input type="text" id="todoInput" placeholder="Add a new task...">
                <button id="addBtn">Add Task</button>
            </div>
            
            <div class="todo-filters">
                <button class="filter-btn active" data-filter="all">All</button>
                <button class="filter-btn" data-filter="active">Active</button>
                <button class="filter-btn" data-filter="completed">Completed</button>
            </div>
            
            <ul class="todo-list" id="todoList">
                <!-- Tasks will be added here -->
            </ul>
            
            <div class="todo-stats">
                <span id="taskCount">0 tasks remaining</span>
                <button id="clearCompleted">Clear Completed</button>
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
    font-family: 'Inter', sans-serif;
    background: linear-gradient(135deg, #2196F3 0%, #1976D2 100%);
    min-height: 100vh;
    color: white;
    padding: 20px;
}

.container {
    max-width: 600px;
    margin: 0 auto;
    background: rgba(255,255,255,0.1);
    border-radius: 20px;
    padding: 30px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.2);
}

header {
    text-align: center;
    margin-bottom: 30px;
}

header h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
}

header p {
    opacity: 0.9;
    font-size: 1.1rem;
}

.todo-input {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
}

.todo-input input {
    flex: 1;
    padding: 15px;
    border: none;
    border-radius: 10px;
    font-size: 1rem;
    background: rgba(255,255,255,0.9);
    color: #333;
}

.todo-input input:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(33, 150, 243, 0.3);
}

.todo-input button {
    padding: 15px 25px;
    background: #4CAF50;
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.3s ease;
}

.todo-input button:hover {
    background: #45a049;
}

.todo-filters {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
    justify-content: center;
}

.filter-btn {
    padding: 10px 20px;
    background: rgba(255,255,255,0.1);
    color: white;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.filter-btn.active,
.filter-btn:hover {
    background: rgba(255,255,255,0.2);
}

.todo-list {
    list-style: none;
    margin-bottom: 20px;
}

.todo-item {
    display: flex;
    align-items: center;
    padding: 15px;
    background: rgba(255,255,255,0.1);
    border-radius: 10px;
    margin-bottom: 10px;
    transition: all 0.3s ease;
}

.todo-item:hover {
    background: rgba(255,255,255,0.15);
}

.todo-item.completed {
    opacity: 0.6;
    text-decoration: line-through;
}

.todo-item input[type="checkbox"] {
    margin-right: 15px;
    transform: scale(1.2);
}

.todo-item .task-text {
    flex: 1;
    font-size: 1rem;
}

.todo-item .delete-btn {
    background: #f44336;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
    font-size: 0.8rem;
}

.todo-item .delete-btn:hover {
    background: #d32f2f;
}

.todo-stats {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
    border-top: 1px solid rgba(255,255,255,0.2);
}

#clearCompleted {
    background: #ff9800;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 8px 15px;
    cursor: pointer;
    font-size: 0.9rem;
}

#clearCompleted:hover {
    background: #f57c00;
}

@media (max-width: 600px) {
    .container {
        margin: 10px;
        padding: 20px;
    }
    
    .todo-input {
        flex-direction: column;
    }
    
    .todo-filters {
        flex-wrap: wrap;
    }
}`
  }

  generateTodoJS() {
    return `// Todo App JavaScript
class TodoApp {
    constructor() {
        this.todos = JSON.parse(localStorage.getItem('todos')) || [];
        this.currentFilter = 'all';
        this.init();
    }

    init() {
        this.bindEvents();
        this.render();
    }

    bindEvents() {
        const addBtn = document.getElementById('addBtn');
        const todoInput = document.getElementById('todoInput');
        const filterBtns = document.querySelectorAll('.filter-btn');
        const clearBtn = document.getElementById('clearCompleted');

        addBtn.addEventListener('click', () => this.addTodo());
        todoInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.addTodo();
        });

        filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => this.setFilter(e.target.dataset.filter));
        });

        clearBtn.addEventListener('click', () => this.clearCompleted());
    }

    addTodo() {
        const input = document.getElementById('todoInput');
        const text = input.value.trim();

        if (text) {
            this.todos.push({
                id: Date.now(),
                text: text,
                completed: false
            });
            input.value = '';
            this.save();
            this.render();
        }
    }

    toggleTodo(id) {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            this.save();
            this.render();
        }
    }

    deleteTodo(id) {
        this.todos = this.todos.filter(t => t.id !== id);
        this.save();
        this.render();
    }

    setFilter(filter) {
        this.currentFilter = filter;
        
        // Update filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.filter === filter);
        });
        
        this.render();
    }

    clearCompleted() {
        this.todos = this.todos.filter(t => !t.completed);
        this.save();
        this.render();
    }

    getFilteredTodos() {
        switch (this.currentFilter) {
            case 'active':
                return this.todos.filter(t => !t.completed);
            case 'completed':
                return this.todos.filter(t => t.completed);
            default:
                return this.todos;
        }
    }

    render() {
        const todoList = document.getElementById('todoList');
        const taskCount = document.getElementById('taskCount');
        const filteredTodos = this.getFilteredTodos();

        todoList.innerHTML = filteredTodos.map(todo => \`
            <li class="todo-item \${todo.completed ? 'completed' : ''}">
                <input type="checkbox" \${todo.completed ? 'checked' : ''} 
                       onchange="todoApp.toggleTodo(\${todo.id})">
                <span class="task-text">\${todo.text}</span>
                <button class="delete-btn" onclick="todoApp.deleteTodo(\${todo.id})">Delete</button>
            </li>
        \`).join('');

        const activeCount = this.todos.filter(t => !t.completed).length;
        taskCount.textContent = \`\${activeCount} task\${activeCount !== 1 ? 's' : ''} remaining\`;
    }

    save() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }
}

// Initialize the app
let todoApp;
document.addEventListener('DOMContentLoaded', function() {
    todoApp = new TodoApp();
    console.log('✅ Todo App loaded!');
});`
  }

  generatePortfolioHTML() {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio - Your Name</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <header>
            <nav>
                <div class="nav-brand">Portfolio</div>
                <ul class="nav-links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>

        <main>
            <section class="hero">
                <h1>Hi, I'm Your Name</h1>
                <p>Full Stack Developer & UI/UX Designer</p>
                <button class="cta-button">View My Work</button>
            </section>

            <section id="about" class="about">
                <h2>About Me</h2>
                <p>I'm a passionate developer with 5+ years of experience creating beautiful, functional web applications.</p>
            </section>

            <section id="projects" class="projects">
                <h2>My Projects</h2>
                <div class="project-grid">
                    <div class="project-card">
                        <h3>E-Commerce Platform</h3>
                        <p>A full-stack e-commerce solution with React and Node.js</p>
                    </div>
                    <div class="project-card">
                        <h3>Task Management App</h3>
                        <p>A collaborative task management tool with real-time updates</p>
                    </div>
                    <div class="project-card">
                        <h3>Weather Dashboard</h3>
                        <p>A responsive weather app with location-based forecasts</p>
                    </div>
                </div>
            </section>

            <section id="contact" class="contact">
                <h2>Get In Touch</h2>
                <p>Let's work together on your next project!</p>
                <button class="contact-button">Contact Me</button>
            </section>
        </main>

        <footer>
            <p>&copy; 2024 Your Name. All rights reserved.</p>
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
    font-family: 'Inter', sans-serif;
    background: linear-gradient(135deg, #9C27B0 0%, #7B1FA2 100%);
    min-height: 100vh;
    color: white;
    line-height: 1.6;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
}

header {
    padding: 20px 0;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
}

.nav-brand {
    font-size: 1.5rem;
    font-weight: bold;
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 30px;
}

.nav-links a {
    color: white;
    text-decoration: none;
    transition: opacity 0.3s ease;
}

.nav-links a:hover {
    opacity: 0.7;
}

.hero {
    text-align: center;
    padding: 100px 20px;
}

.hero h1 {
    font-size: 3.5rem;
    margin-bottom: 20px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.hero p {
    font-size: 1.3rem;
    margin-bottom: 30px;
    opacity: 0.9;
}

.cta-button {
    background: rgba(255,255,255,0.2);
    color: white;
    border: 2px solid white;
    padding: 15px 30px;
    border-radius: 30px;
    font-size: 1.1rem;
    cursor: pointer;
    transition: all 0.3s ease;
}

.cta-button:hover {
    background: white;
    color: #9C27B0;
}

section {
    padding: 80px 20px;
}

section h2 {
    font-size: 2.5rem;
    margin-bottom: 40px;
    text-align: center;
}

.about {
    background: rgba(255,255,255,0.1);
    margin: 40px 0;
    border-radius: 20px;
    backdrop-filter: blur(10px);
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
    background: rgba(255,255,255,0.15);
    padding: 30px;
    border-radius: 15px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.2);
    transition: transform 0.3s ease;
}

.project-card:hover {
    transform: translateY(-10px);
}

.project-card h3 {
    font-size: 1.5rem;
    margin-bottom: 15px;
}

.project-card p {
    opacity: 0.9;
}

.contact {
    text-align: center;
}

.contact p {
    font-size: 1.2rem;
    margin-bottom: 30px;
    opacity: 0.9;
}

.contact-button {
    background: #4CAF50;
    color: white;
    border: none;
    padding: 15px 30px;
    border-radius: 30px;
    font-size: 1.1rem;
    cursor: pointer;
    transition: background 0.3s ease;
}

.contact-button:hover {
    background: #45a049;
}

footer {
    text-align: center;
    padding: 40px 20px;
    border-top: 1px solid rgba(255,255,255,0.2);
    opacity: 0.8;
}

@media (max-width: 768px) {
    .hero h1 {
        font-size: 2.5rem;
    }
    
    .nav-links {
        gap: 15px;
    }
    
    .project-grid {
        grid-template-columns: 1fr;
    }
}`
  }

  generatePortfolioJS() {
    return `// Portfolio JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎨 Portfolio loaded!');
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add scroll effect to navigation
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(0,0,0,0.1)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'transparent';
            header.style.backdropFilter = 'none';
        }
    });
    
    // Add animation to hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.opacity = '0';
        hero.style.transform = 'translateY(50px)';
        
        setTimeout(() => {
            hero.style.transition = 'all 1s ease';
            hero.style.opacity = '1';
            hero.style.transform = 'translateY(0)';
        }, 200);
    }
    
    // Add intersection observer for section animations
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
    
    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.8s ease';
        observer.observe(section);
    });
    
    // Add hover effects to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
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
    <title>Generated Website</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>🚀 Generated Application</h1>
            <p>Built with DreamBuild AI</p>
        </header>
        
        <main>
            <div class="content">
                <h2>${prompt}</h2>
                <p>This application was generated based on your prompt using DreamBuild AI.</p>
                <div class="features">
                    <div class="feature-card">
                        <h3>✨ Feature 1</h3>
                        <p>Interactive component with modern design</p>
                    </div>
                    <div class="feature-card">
                        <h3>🎨 Feature 2</h3>
                        <p>Responsive layout that works on all devices</p>
                    </div>
                    <div class="feature-card">
                        <h3>⚡ Feature 3</h3>
                        <p>Fast loading and optimized performance</p>
                    </div>
                </div>
            </div>
        </main>
        
        <footer>
            <p>&copy; 2024 Generated App. Created with DreamBuild AI.</p>
        </footer>
    </div>
    
    <script src="script.js"></script>
</body>
</html>`
  }

  generateGenericCSS() {
    return `/* Generated App Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    color: white;
    line-height: 1.6;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

header {
    text-align: center;
    margin-bottom: 40px;
    padding: 40px 0;
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
    margin-bottom: 40px;
}

.content h2 {
    font-size: 2rem;
    margin-bottom: 20px;
    text-align: center;
}

.content > p {
    font-size: 1.1rem;
    text-align: center;
    margin-bottom: 40px;
    opacity: 0.9;
}

.features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    margin-top: 40px;
}

.feature-card {
    background: rgba(255,255,255,0.1);
    padding: 30px;
    border-radius: 15px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.2);
    transition: transform 0.3s ease;
    text-align: center;
}

.feature-card:hover {
    transform: translateY(-10px);
}

.feature-card h3 {
    font-size: 1.5rem;
    margin-bottom: 15px;
    color: #fff;
}

.feature-card p {
    opacity: 0.9;
    line-height: 1.6;
}

footer {
    text-align: center;
    padding: 40px 20px;
    border-top: 1px solid rgba(255,255,255,0.2);
    margin-top: 40px;
    opacity: 0.8;
}

@media (max-width: 768px) {
    header h1 {
        font-size: 2rem;
    }
    
    .features {
        grid-template-columns: 1fr;
    }
    
    .feature-card {
        padding: 20px;
    }
}`
  }

  generateGenericJS() {
    return `// Generated App JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Generated App loaded!');
    
    // Add animation to feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 200 + (index * 100));
    });
    
    // Add hover effects
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add click interactions
    featureCards.forEach(card => {
        card.addEventListener('click', function() {
            this.style.background = 'rgba(255,255,255,0.2)';
            setTimeout(() => {
                this.style.background = 'rgba(255,255,255,0.1)';
            }, 200);
        });
    });
});`
  }
}

// Export singleton instance
export default new AIService()
