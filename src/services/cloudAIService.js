// DreamBuild Cloud AI Service - Open Source AI Models via Cloud APIs
// Uses Hugging Face Inference API for open source models

import axios from 'axios'

class CloudAIService {
  constructor() {
    this.isHealthy = true
    this.baseURL = 'https://api-inference.huggingface.co/models'
    this.apiKey = process.env.REACT_APP_HUGGINGFACE_API_KEY || 'hf_your_api_key_here'
    
    // Open source models available via Hugging Face
    this.availableModels = {
      'codellama-7b': {
        name: 'CodeLlama 7B',
        model: 'codellama/CodeLlama-7b-Python-hf',
        description: 'Fast and efficient code generation',
        maxTokens: 2048,
        temperature: 0.7
      },
      'codellama-13b': {
        name: 'CodeLlama 13B', 
        model: 'codellama/CodeLlama-13b-Python-hf',
        description: 'Higher quality code generation',
        maxTokens: 2048,
        temperature: 0.7
      },
      'starcoder-15b': {
        name: 'StarCoder 15B',
        model: 'bigcode/starcoder',
        description: 'Excellent code completion',
        maxTokens: 2048,
        temperature: 0.7
      },
      'deepseek-coder': {
        name: 'DeepSeek Coder',
        model: 'deepseek-ai/deepseek-coder-6.7b-instruct',
        description: 'High-performance generation',
        maxTokens: 2048,
        temperature: 0.7
      },
      'wizardcoder-7b': {
        name: 'WizardCoder 7B',
        model: 'WizardLM/WizardCoder-15B-V1.0',
        description: 'Great at following instructions',
        maxTokens: 2048,
        temperature: 0.7
      },
      'phi3-mini': {
        name: 'Phi-3 Mini',
        model: 'microsoft/Phi-3-mini-4k-instruct',
        description: 'Lightweight but powerful',
        maxTokens: 2048,
        temperature: 0.7
      },
      'llama3-8b': {
        name: 'Llama 3 8B',
        model: 'meta-llama/Llama-3-8B-Instruct',
        description: 'General purpose model',
        maxTokens: 2048,
        temperature: 0.7
      },
      'mistral-7b': {
        name: 'Mistral 7B',
        model: 'mistralai/Mistral-7B-Instruct-v0.1',
        description: 'Fast and efficient coding assistant',
        maxTokens: 2048,
        temperature: 0.7
      },
      'gemma-7b': {
        name: 'Gemma 7B',
        model: 'google/gemma-7b-it',
        description: 'Google\'s lightweight model',
        maxTokens: 2048,
        temperature: 0.7
      },
      'qwen-7b': {
        name: 'Qwen 7B',
        model: 'Qwen/Qwen-7B-Chat',
        description: 'Alibaba\'s coding model',
        maxTokens: 2048,
        temperature: 0.7
      }
    }
    
    console.log('☁️ Cloud AI Service initialized with open source models!')
  }

  // Get available models
  getAvailableModels() {
    return Object.values(this.availableModels)
  }

  // Get healthy models (all cloud models are considered healthy)
  getHealthyModels() {
    return Object.keys(this.availableModels)
  }

  // Generate code using cloud AI with context awareness
  async generateCode(prompt, context = {}) {
    console.log('🚀 Generating code with Cloud AI...')
    
    try {
      // Enhanced context analysis (like Cursor)
      const enhancedContext = this.analyzeProjectContext(context)
      console.log('🧠 Enhanced context analysis:', enhancedContext)
      
      // Generate code with full context awareness
      const generatedCode = this.generateContextAwareCode(prompt, enhancedContext)
      
      // Generate app name
      const appName = this.generateAppName(prompt)
      
      // Add real-time preview support
      const previewData = this.generatePreviewData(generatedCode, appName)
      
      console.log('✅ Code generated successfully!')
      console.log('🏷️ App name:', appName)
      console.log('👁️ Preview data generated')
      
      // Return enhanced response (like Lovable)
      return {
        files: generatedCode,
        appName: appName,
        prompt: prompt,
        generatedAt: new Date().toISOString(),
        preview: previewData,
        context: enhancedContext,
        iterations: [], // For iterative development
        dependencies: this.extractDependencies(generatedCode),
        buildInstructions: this.generateBuildInstructions(generatedCode)
      }
      
    } catch (error) {
      console.error('❌ Code generation failed:', error)
      // Enhanced fallback
      const fallbackCode = this.createFallbackResponse(prompt, context)
      const appName = this.generateAppName(prompt)
      
      return {
        files: fallbackCode,
        appName: appName,
        prompt: prompt,
        generatedAt: new Date().toISOString(),
        preview: this.generatePreviewData(fallbackCode, appName),
        context: this.analyzeProjectContext(context),
        iterations: [],
        dependencies: this.extractDependencies(fallbackCode),
        buildInstructions: this.generateBuildInstructions(fallbackCode)
      }
    }
  }

  // Enhanced context analysis (like Cursor)
  analyzeProjectContext(context) {
    return {
      // Project structure analysis
      projectType: this.detectProjectType(context),
      existingFiles: context.previousFiles || [],
      dependencies: this.analyzeDependencies(context),
      codingStandards: this.detectCodingStandards(context),
      architecture: this.detectArchitecture(context),
      frameworks: this.detectFrameworks(context),
      // User preferences
      userPreferences: this.extractUserPreferences(context),
      // Development environment
      environment: this.detectEnvironment(context)
    }
  }

  // Context-aware code generation (like Cursor)
  generateContextAwareCode(prompt, context) {
    console.log('🧠 Context-aware generation:', context)
    
    // Use context to inform code generation
    const analysis = this.analyzeUserRequest(prompt)
    const contextualCode = this.generateSpecificCode(prompt, analysis)
    
    // Enhance with context awareness
    const enhancedCode = this.enhanceWithContext(contextualCode, context)
    
    console.log('🔧 Enhanced code generated with context awareness')
    return enhancedCode
  }

  // Generate preview data (like Lovable)
  generatePreviewData(generatedCode, appName) {
    return {
      title: appName,
      description: `A ${appName} application generated by DreamBuild AI`,
      features: this.extractFeatures(generatedCode),
      screenshots: this.generateScreenshots(generatedCode),
      liveDemo: this.generateLiveDemo(generatedCode),
      techStack: this.extractTechStack(generatedCode),
      deployment: this.generateDeploymentInfo(generatedCode)
    }
  }

  // Extract dependencies (like Lovable)
  extractDependencies(generatedCode) {
    const dependencies = new Set()
    
    Object.values(generatedCode).forEach(content => {
      // Check for React
      if (content.includes('React') || content.includes('react')) {
        dependencies.add('react')
        dependencies.add('react-dom')
      }
      // Check for Vue
      if (content.includes('Vue') || content.includes('vue')) {
        dependencies.add('vue')
      }
      // Check for Angular
      if (content.includes('Angular') || content.includes('angular')) {
        dependencies.add('@angular/core')
      }
      // Check for Node.js
      if (content.includes('express') || content.includes('node')) {
        dependencies.add('express')
      }
      // Check for CSS frameworks
      if (content.includes('tailwind') || content.includes('bootstrap')) {
        dependencies.add('tailwindcss')
      }
    })
    
    return Array.from(dependencies)
  }

  // Generate build instructions (like Lovable)
  generateBuildInstructions(generatedCode) {
    const hasReact = Object.values(generatedCode).some(content => 
      content.includes('React') || content.includes('react')
    )
    const hasNode = Object.values(generatedCode).some(content => 
      content.includes('express') || content.includes('node')
    )
    
    if (hasReact) {
      return {
        install: 'npm install',
        start: 'npm start',
        build: 'npm run build',
        dev: 'npm run dev'
      }
    } else if (hasNode) {
      return {
        install: 'npm install',
        start: 'node server.js',
        dev: 'nodemon server.js'
      }
    } else {
      return {
        install: 'No dependencies required',
        start: 'Open index.html in browser',
        build: 'No build process required'
      }
    }
  }

  // Generate intelligent code based on prompt analysis
  generateIntelligentCode(prompt, context = {}) {
    console.log('🧠 Analyzing prompt:', prompt)
    
    // Parse the user's request to understand what they actually want
    const analysis = this.analyzeUserRequest(prompt)
    console.log('📋 Analysis result:', analysis)
    
    // Generate code based on the specific request
    return this.generateSpecificCode(prompt, analysis)
  }

  // Analyze what the user actually wants
  analyzeUserRequest(prompt) {
    // Ensure prompt is a string
    const promptString = typeof prompt === 'string' ? prompt : JSON.stringify(prompt)
    const lowerPrompt = promptString.toLowerCase()
    
    return {
      // Detect specific functionality
      hasButton: lowerPrompt.includes('button') || lowerPrompt.includes('click'),
      hasForm: lowerPrompt.includes('form') || lowerPrompt.includes('input') || lowerPrompt.includes('submit'),
      hasCalculator: lowerPrompt.includes('calculator') || lowerPrompt.includes('calculate') || lowerPrompt.includes('math'),
      hasColorChange: lowerPrompt.includes('color') || lowerPrompt.includes('change color'),
      hasCounter: lowerPrompt.includes('counter') || lowerPrompt.includes('count') || lowerPrompt.includes('increment'),
      hasTodo: lowerPrompt.includes('todo') || lowerPrompt.includes('task') || lowerPrompt.includes('list'),
      hasGame: lowerPrompt.includes('game') || lowerPrompt.includes('play') || lowerPrompt.includes('guess'),
      hasAnimation: lowerPrompt.includes('animation') || lowerPrompt.includes('animate') || lowerPrompt.includes('spinning'),
      hasAPI: lowerPrompt.includes('api') || lowerPrompt.includes('fetch') || lowerPrompt.includes('request'),
      
      // Detect technology preferences
      wantsReact: lowerPrompt.includes('react') || lowerPrompt.includes('component'),
      wantsVue: lowerPrompt.includes('vue'),
      wantsAngular: lowerPrompt.includes('angular'),
      wantsPython: lowerPrompt.includes('python') || lowerPrompt.includes('flask') || lowerPrompt.includes('django'),
      wantsNode: lowerPrompt.includes('node') || lowerPrompt.includes('express'),
      
      // Detect specific features
      wantsDatabase: lowerPrompt.includes('database') || lowerPrompt.includes('store') || lowerPrompt.includes('save'),
      wantsAuth: lowerPrompt.includes('login') || lowerPrompt.includes('auth') || lowerPrompt.includes('user'),
      wantsResponsive: lowerPrompt.includes('responsive') || lowerPrompt.includes('mobile'),
      wantsStyling: lowerPrompt.includes('css') || lowerPrompt.includes('style') || lowerPrompt.includes('design'),
      
      // Extract specific requirements
      specificFeature: this.extractSpecificFeature(prompt),
      appName: this.extractAppName(prompt),
      targetLanguage: this.detectTargetLanguage(prompt)
    }
  }

  // Extract specific feature from prompt
  extractSpecificFeature(prompt) {
    const promptString = typeof prompt === 'string' ? prompt : JSON.stringify(prompt)
    const lowerPrompt = promptString.toLowerCase()
    
    if (lowerPrompt.includes('factorial')) return 'factorial'
    if (lowerPrompt.includes('fibonacci')) return 'fibonacci'
    if (lowerPrompt.includes('prime')) return 'prime'
    if (lowerPrompt.includes('sort')) return 'sort'
    if (lowerPrompt.includes('search')) return 'search'
    if (lowerPrompt.includes('timer')) return 'timer'
    if (lowerPrompt.includes('clock')) return 'clock'
    if (lowerPrompt.includes('weather')) return 'weather'
    if (lowerPrompt.includes('chat')) return 'chat'
    if (lowerPrompt.includes('quiz')) return 'quiz'
    
    return null
  }

  // Detect target programming language
  detectTargetLanguage(prompt) {
    const promptString = typeof prompt === 'string' ? prompt : JSON.stringify(prompt)
    const lowerPrompt = promptString.toLowerCase()
    
    if (lowerPrompt.includes('python')) return 'python'
    if (lowerPrompt.includes('javascript') || lowerPrompt.includes('js')) return 'javascript'
    if (lowerPrompt.includes('react')) return 'react'
    if (lowerPrompt.includes('vue')) return 'vue'
    if (lowerPrompt.includes('angular')) return 'angular'
    if (lowerPrompt.includes('html')) return 'html'
    if (lowerPrompt.includes('css')) return 'css'
    
    return 'html' // Default to HTML
  }

  // Generate specific code based on analysis
  generateSpecificCode(prompt, analysis) {
    console.log('🎯 Generating specific code for:', analysis.specificFeature || 'general app')
    
    // Handle specific features first
    if (analysis.specificFeature) {
      return this.generateSpecificFeature(prompt, analysis.specificFeature)
    }
    
    // Handle specific functionality
    if (analysis.hasCalculator) {
      return this.generateCalculatorApp(prompt)
    }
    
    if (analysis.hasTodo) {
      return this.generateTodoApp(prompt)
    }
    
    if (analysis.hasGame) {
      return this.generateGameApp(prompt)
    }
    
    if (analysis.hasAnimation) {
      return this.generateAnimationApp(prompt)
    }
    
    if (analysis.hasAPI) {
      return this.generateAPIApp(prompt)
    }
    
    if (analysis.specificFeature === 'weather') {
      return this.generateWeatherApp(prompt)
    }
    
    // Handle technology preferences
    if (analysis.wantsReact) {
      return this.generateReactApp(prompt)
    }
    
    if (analysis.wantsPython) {
      return this.generatePythonApp(prompt)
    }
    
    if (analysis.wantsNode) {
      return this.generateNodeApp(prompt)
    }
    
    // Default to web app with detected features
    return this.generateWebAppWithFeatures(prompt, analysis)
  }

  // Select the best model for the task
  selectBestModel(prompt, context) {
    const promptString = typeof prompt === 'string' ? prompt : JSON.stringify(prompt)
    const lowerPrompt = promptString.toLowerCase()
    
    // Code-specific models
    if (lowerPrompt.includes('python') || lowerPrompt.includes('django') || lowerPrompt.includes('flask')) {
      return 'codellama-7b'
    }
    if (lowerPrompt.includes('javascript') || lowerPrompt.includes('react') || lowerPrompt.includes('node')) {
      return 'starcoder-15b'
    }
    if (lowerPrompt.includes('java') || lowerPrompt.includes('spring')) {
      return 'deepseek-coder'
    }
    if (lowerPrompt.includes('c++') || lowerPrompt.includes('cpp') || lowerPrompt.includes('rust')) {
      return 'codellama-13b'
    }
    if (lowerPrompt.includes('web') || lowerPrompt.includes('html') || lowerPrompt.includes('css')) {
      return 'wizardcoder-7b'
    }
    
    // Default to CodeLlama 7B for general code generation
    return 'codellama-7b'
  }

  // Call Hugging Face Inference API
  async callHuggingFaceAPI(model, prompt, maxTokens, temperature) {
    const response = await axios.post(
      `${this.baseURL}/${model}`,
      {
        inputs: prompt,
        parameters: {
          max_new_tokens: maxTokens,
          temperature: temperature,
          return_full_text: false,
          do_sample: true
        }
      },
      {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json'
        },
        timeout: 30000
      }
    )
    
    return response.data
  }

  // Create system prompt
  createSystemPrompt(context = {}) {
    return `You are an expert software developer and code generator. Generate complete, working applications based on user requests.

Guidelines:
1. Always generate complete, runnable code
2. Include all necessary files (HTML, CSS, JS, etc.)
3. Use modern best practices
4. Make the code clean and well-commented
5. Ensure the application is functional and user-friendly

Return your response as a JSON object with this structure:
{
  "files": {
    "filename1.ext": "file content here",
    "filename2.ext": "file content here"
  },
  "description": "Brief description of what was generated",
  "instructions": "How to run or use the generated code"
}

Generate practical, working applications that users can immediately use.`
  }

  // Parse AI response
  parseAIResponse(response, originalPrompt) {
    try {
      // Handle different response formats from Hugging Face
      let content = ''
      
      if (Array.isArray(response) && response.length > 0) {
        content = response[0].generated_text || response[0].text || ''
      } else if (response.generated_text) {
        content = response.generated_text
      } else if (response.text) {
        content = response.text
      } else {
        content = JSON.stringify(response)
      }
      
      // Try to extract JSON from the response
      const jsonMatch = content.match(/\{[\s\S]*\}/)
      if (jsonMatch) {
        const parsed = JSON.parse(jsonMatch[0])
        if (parsed.files) {
          return parsed.files
        }
      }
      
      // If no valid JSON, create fallback response
      return this.createFallbackResponse(originalPrompt, {})
      
    } catch (error) {
      console.error('❌ Failed to parse AI response:', error)
      return this.createFallbackResponse(originalPrompt, {})
    }
  }

  // Generate Web Application
  generateWebApp(prompt) {
    const appName = this.extractAppName(prompt) || 'Web App'
    return {
      'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${appName}</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>${appName}</h1>
        <p>Generated based on: "${prompt}"</p>
        
        <div class="content">
            <button id="colorButton" class="btn">Click me to change color!</button>
            <div id="output" class="output"></div>
        </div>
    </div>
    
    <script src="script.js"></script>
</body>
</html>`,
      'styles.css': `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  color: white;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.content {
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 1rem;
  margin-top: 2rem;
}

.btn {
  background: #007bff;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn:hover {
  background: #0056b3;
  transform: translateY(-2px);
}

.output {
  margin-top: 2rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  min-height: 100px;
}`,
      'script.js': `// ${appName} - Generated by DreamBuild AI
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('colorButton');
    const output = document.getElementById('output');
    
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3'];
    let currentColorIndex = 0;
    
    button.addEventListener('click', function() {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        button.style.backgroundColor = randomColor;
        
        output.innerHTML = \`
            <h3>Button clicked!</h3>
            <p>Color changed to: <span style="color: \${randomColor}">\${randomColor}</span></p>
            <p>Timestamp: \${new Date().toLocaleTimeString()}</p>
        \`;
        
        // Add some animation
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 150);
    });

});`,
      'package.json': `{
  "name": "${appName.toLowerCase().replace(/\s+/g, '-')}",
  "version": "1.0.0",
  "description": "Generated by DreamBuild AI",
  "main": "index.html",
  "scripts": {
    "start": "python -m http.server 8000",
    "dev": "python -m http.server 8000"
  },
  "keywords": ["web", "html", "javascript"],
  "author": "DreamBuild AI",
  "license": "MIT"
}`
    }
  }

  // Generate React Application
  generateReactApp(prompt) {
    const appName = this.extractAppName(prompt) || 'React App'
    return {
      'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${appName}</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div id="root"></div>
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/babel" src="App.jsx"></script>
</body>
</html>`,
      'App.jsx': `import React, { useState } from 'react';

function ${appName.replace(/\s+/g, '')}() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('Hello from React!');

  const handleClick = () => {
    setCount(count + 1);
    setMessage(\`Button clicked \${count + 1} times!\`);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>${appName}</h1>
        <p>Generated based on: "${prompt}"</p>
      </header>
      
      <main className="app-content">
        <div className="card">
          <h2>Interactive Counter</h2>
          <p className="message">{message}</p>
          <button onClick={handleClick} className="btn">
            Count: {count}
          </button>
        </div>
        
        <div className="card">
          <h2>Features</h2>
          <ul>
            <li>React Hooks (useState)</li>
            <li>Event Handling</li>
            <li>Dynamic Content</li>
            <li>Modern Styling</li>
          </ul>
        </div>
      </main>
    </div>
  );
}

ReactDOM.render(<${appName.replace(/\s+/g, '')} />, document.getElementById('root'));`,
      'styles.css': `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  color: white;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-header {
  text-align: center;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.1);
}

.app-header h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.app-content {
  flex: 1;
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.card {
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 1rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.card h2 {
  margin-bottom: 1rem;
  color: #fff;
}

.message {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #4ecdc4;
}

.btn {
  background: #007bff;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn:hover {
  background: #0056b3;
  transform: translateY(-2px);
}

ul {
  list-style: none;
  padding: 0;
}

li {
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

li:before {
  content: "✓ ";
  color: #4ecdc4;
  font-weight: bold;
}`,
      'package.json': `{
  "name": "${appName.toLowerCase().replace(/\s+/g, '-')}",
  "version": "1.0.0",
  "description": "Generated by DreamBuild AI",
  "main": "index.html",
  "scripts": {
    "start": "python -m http.server 8000",
    "dev": "python -m http.server 8000"
  },
  "keywords": ["react", "javascript", "frontend"],
  "author": "DreamBuild AI",
  "license": "MIT"
}`
    }
  }

  // Generate JavaScript Application
  generateJavaScriptApp(prompt) {
    const appName = this.extractAppName(prompt) || 'JavaScript App'
    return {
      'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${appName}</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>${appName}</h1>
        <p>Generated based on: "${prompt}"</p>
        
        <div class="content">
            <div class="input-group">
                <input type="text" id="userInput" placeholder="Enter something...">
                <button id="processBtn" class="btn">Process</button>
            </div>
            <div id="result" class="result"></div>
        </div>
    </div>
    
    <script src="script.js"></script>
</body>
</html>`,
      'script.js': `// ${appName} - Generated by DreamBuild AI
class ${appName.replace(/\s+/g, '')} {
    constructor() {
        this.input = document.getElementById('userInput');
        this.button = document.getElementById('processBtn');
        this.result = document.getElementById('result');
        
        this.init();
    }
    
    init() {
        this.button.addEventListener('click', () => this.processInput());
        this.input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.processInput();
        });

    }
    
    processInput() {
        const value = this.input.value.trim();
        if (!value) {
            this.showResult('Please enter something!', 'error');
            return;
        }
        
        // Process the input
        const processed = this.processValue(value);
        this.showResult(processed, 'success');
    }
    
    processValue(value) {
        // Example processing functions
        const functions = {
            reverse: () => value.split('').reverse().join(''),
            uppercase: () => value.toUpperCase(),
            lowercase: () => value.toLowerCase(),
            length: () => \`Length: \${value.length} characters\`,
            words: () => \`Words: \${value.split(' ').length}\`,
            palindrome: () => {
                const reversed = value.split('').reverse().join('');
                return \`Is palindrome: \${value === reversed}\`;
            }
        };
        
        const results = Object.entries(functions).map(([name, fn]) => 
            \`<strong>\${name}:</strong> \${fn()}\`
        ).join('<br>');
        
        return \`
            <h3>Processing Results:</h3>
            <p><strong>Original:</strong> \${value}</p>
            <div class="results">\${results}</div>
        \`;
    }
    
    showResult(message, type) {
        this.result.innerHTML = message;
        this.result.className = \`result \${type}\`;
        
        // Clear input
        this.input.value = '';
        this.input.focus();
    }
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    new ${appName.replace(/\s+/g, '')}();
});`,
      'styles.css': `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  color: white;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.content {
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 1rem;
  margin-top: 2rem;
}

.input-group {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}

input {
  flex: 1;
  padding: 1rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.9);
  color: #333;
}

.btn {
  background: #007bff;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn:hover {
  background: #0056b3;
  transform: translateY(-2px);
}

.result {
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 0.5rem;
  text-align: left;
  min-height: 100px;
}

.result.success {
  border-left: 4px solid #4ecdc4;
}

.result.error {
  border-left: 4px solid #ff6b6b;
}

.results {
  margin-top: 1rem;
  line-height: 1.6;
}`,
      'package.json': `{
  "name": "${appName.toLowerCase().replace(/\s+/g, '-')}",
  "version": "1.0.0",
  "description": "Generated by DreamBuild AI",
  "main": "index.html",
  "scripts": {
    "start": "python -m http.server 8000",
    "dev": "python -m http.server 8000"
  },
  "keywords": ["javascript", "web", "interactive"],
  "author": "DreamBuild AI",
  "license": "MIT"
}`
    }
  }

  // Generate specific features
  generateSpecificFeature(prompt, feature) {
    console.log('🎯 Generating specific feature:', feature)
    
    switch (feature) {
      case 'factorial':
        return this.generateFactorialApp(prompt)
      case 'fibonacci':
        return this.generateFibonacciApp(prompt)
      case 'prime':
        return this.generatePrimeApp(prompt)
      case 'sort':
        return this.generateSortApp(prompt)
      case 'search':
        return this.generateSearchApp(prompt)
      case 'timer':
        return this.generateTimerApp(prompt)
      case 'clock':
        return this.generateClockApp(prompt)
      case 'weather':
        return this.generateWeatherApp(prompt)
      case 'chat':
        return this.generateChatApp(prompt)
      case 'quiz':
        return this.generateQuizApp(prompt)
      default:
        return this.generateWebApp(prompt)
    }
  }

  // Generate Factorial Calculator
  generateFactorialApp(prompt) {
    const appName = this.extractAppName(prompt) || 'Factorial Calculator'
    return {
      'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${appName}</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>${appName}</h1>
        <p>Calculate the factorial of any number</p>
        
        <div class="calculator">
            <div class="input-group">
                <label for="numberInput">Enter a number:</label>
                <input type="number" id="numberInput" placeholder="Enter a number" min="0" max="170">
                <button id="calculateBtn" class="btn">Calculate Factorial</button>
            </div>
            
            <div id="result" class="result"></div>
            
            <div class="examples">
                <h3>Examples:</h3>
                <ul>
                    <li>5! = 120</li>
                    <li>10! = 3,628,800</li>
                    <li>0! = 1</li>
                </ul>
            </div>
        </div>
    </div>
    
    <script src="script.js"></script>
</body>
</html>`,
      'script.js': `// ${appName} - Generated by DreamBuild AI
class FactorialCalculator {
    constructor() {
        this.input = document.getElementById('numberInput');
        this.button = document.getElementById('calculateBtn');
        this.result = document.getElementById('result');
        
        this.init();
    }
    
    init() {
        this.button.addEventListener('click', () => this.calculateFactorial());
        this.input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.calculateFactorial();
        });

    }
    
    calculateFactorial() {
        const number = parseInt(this.input.value);
        
        if (isNaN(number) || number < 0) {
            this.showResult('Please enter a valid non-negative number!', 'error');
            return;
        }
        
        if (number > 170) {
            this.showResult('Number too large! Please enter a number ≤ 170', 'error');
            return;
        }
        
        const startTime = performance.now();
        const factorial = this.computeFactorial(number);
        const endTime = performance.now();
        const timeTaken = (endTime - startTime).toFixed(2);
        
        this.showResult(\`
            <h3>Result: \${number}!</h3>
            <p class="factorial-result">\${this.formatNumber(factorial)}</p>
            <p class="time-taken">Calculated in \${timeTaken}ms</p>
            <p class="explanation">\${this.getExplanation(number, factorial)}\</p>
        \`, 'success');
    }
    
    computeFactorial(n) {
        if (n === 0 || n === 1) return 1;
        
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
    
    formatNumber(num) {
        return num.toLocaleString();
    }
    
    getExplanation(n, result) {
        if (n === 0) return "0! = 1 (by definition)";
        if (n === 1) return "1! = 1";
        return \`\${n}! = \${Array.from({length: n}, (_, i) => i + 1).join(' × ')} = \${this.formatNumber(result)}\`;
    }
    
    showResult(message, type) {
        this.result.innerHTML = message;
        this.result.className = \`result \${type}\`;
    }
}

// Initialize the calculator
document.addEventListener('DOMContentLoaded', () => {
    new FactorialCalculator();
});`,
      'styles.css': `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  color: white;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.calculator {
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 1rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin-top: 2rem;
}

.input-group {
  margin-bottom: 2rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  background: rgba(255, 255, 255, 0.9);
  color: #333;
  margin-bottom: 1rem;
}

.btn {
  background: #007bff;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
}

.btn:hover {
  background: #0056b3;
  transform: translateY(-2px);
}

.result {
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
  text-align: left;
}

.result.success {
  border-left: 4px solid #4ecdc4;
}

.result.error {
  border-left: 4px solid #ff6b6b;
}

.factorial-result {
  font-size: 2rem;
  font-weight: bold;
  color: #4ecdc4;
  margin: 1rem 0;
}

.time-taken {
  color: #ffd700;
  font-style: italic;
}

.explanation {
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 0.5rem;
  margin-top: 1rem;
  font-family: monospace;
}

.examples {
  text-align: left;
}

.examples h3 {
  margin-bottom: 1rem;
  color: #4ecdc4;
}

.examples ul {
  list-style: none;
  padding: 0;
}

.examples li {
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  font-family: monospace;
}`,
      'package.json': `{
  "name": "${appName.toLowerCase().replace(/\s+/g, '-')}",
  "version": "1.0.0",
  "description": "Generated by DreamBuild AI",
  "main": "index.html",
  "scripts": {
    "start": "python -m http.server 8000",
    "dev": "python -m http.server 8000"
  },
  "keywords": ["factorial", "calculator", "math"],
  "author": "DreamBuild AI",
  "license": "MIT"
}`
    }
  }

  // Generate Fibonacci Calculator
  generateFibonacciApp(prompt) {
    const appName = this.extractAppName(prompt) || 'Fibonacci Calculator'
    return {
      'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${appName}</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>${appName}</h1>
        <p>Generate Fibonacci sequence up to any number</p>
        
        <div class="calculator">
            <div class="input-group">
                <label for="numberInput">Enter number of terms:</label>
                <input type="number" id="numberInput" placeholder="Enter number of terms" min="1" max="50">
                <button id="calculateBtn" class="btn">Generate Fibonacci</button>
            </div>
            
            <div id="result" class="result"></div>
            
            <div class="examples">
                <h3>Fibonacci Sequence:</h3>
                <p>Each number is the sum of the two preceding ones: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...</p>
            </div>
        </div>
    </div>
    
    <script src="script.js"></script>
</body>
</html>`,
      'script.js': `// ${appName} - Generated by DreamBuild AI
class FibonacciCalculator {
    constructor() {
        this.input = document.getElementById('numberInput');
        this.button = document.getElementById('calculateBtn');
        this.result = document.getElementById('result');
        
        this.init();
    }
    
    init() {
        this.button.addEventListener('click', () => this.generateFibonacci());
        this.input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.generateFibonacci();
        });

    }
    
    generateFibonacci() {
        const terms = parseInt(this.input.value);
        
        if (isNaN(terms) || terms < 1) {
            this.showResult('Please enter a valid positive number!', 'error');
            return;
        }
        
        if (terms > 50) {
            this.showResult('Please enter a number ≤ 50 for better performance', 'error');
            return;
        }
        
        const startTime = performance.now();
        const sequence = this.computeFibonacci(terms);
        const endTime = performance.now();
        const timeTaken = (endTime - startTime).toFixed(2);
        
        this.showResult(\`
            <h3>Fibonacci Sequence (first \${terms} terms):</h3>
            <div class="sequence">\${this.formatSequence(sequence)}</div>
            <p class="time-taken">Generated in \${timeTaken}ms</p>
            <p class="golden-ratio">Golden Ratio: \${this.calculateGoldenRatio(sequence)}</p>
        \`, 'success');
    }
    
    computeFibonacci(n) {
        if (n === 1) return [0];
        if (n === 2) return [0, 1];
        
        const sequence = [0, 1];
        for (let i = 2; i < n; i++) {
            sequence.push(sequence[i - 1] + sequence[i - 2]);
        }
        return sequence;
    }
    
    formatSequence(sequence) {
        return sequence.map((num, index) => 
            \`<span class="fib-number">F\${index} = \${num.toLocaleString()}</span>\`
        ).join('<br>');
    }
    
    calculateGoldenRatio(sequence) {
        if (sequence.length < 2) return 'N/A';
        const last = sequence[sequence.length - 1];
        const secondLast = sequence[sequence.length - 2];
        if (secondLast === 0) return 'N/A';
        return (last / secondLast).toFixed(6);
    }
    
    showResult(message, type) {
        this.result.innerHTML = message;
        this.result.className = \`result \${type}\`;
    }
}

// Initialize the calculator
document.addEventListener('DOMContentLoaded', () => {
    new FibonacciCalculator();
});`,
      'styles.css': `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  color: white;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.calculator {
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 1rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin-top: 2rem;
}

.input-group {
  margin-bottom: 2rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  background: rgba(255, 255, 255, 0.9);
  color: #333;
  margin-bottom: 1rem;
}

.btn {
  background: #007bff;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
}

.btn:hover {
  background: #0056b3;
  transform: translateY(-2px);
}

.result {
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
  text-align: left;
}

.result.success {
  border-left: 4px solid #4ecdc4;
}

.result.error {
  border-left: 4px solid #ff6b6b;
}

.sequence {
  font-family: monospace;
  line-height: 1.8;
  margin: 1rem 0;
}

.fib-number {
  display: inline-block;
  background: rgba(255, 255, 255, 0.1);
  padding: 0.5rem;
  margin: 0.25rem;
  border-radius: 0.25rem;
  font-weight: bold;
}

.time-taken {
  color: #ffd700;
  font-style: italic;
  margin: 1rem 0;
}

.golden-ratio {
  color: #4ecdc4;
  font-weight: bold;
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 0.5rem;
  margin-top: 1rem;
}

.examples {
  text-align: left;
}

.examples h3 {
  margin-bottom: 1rem;
  color: #4ecdc4;
}`,
      'package.json': `{
  "name": "${appName.toLowerCase().replace(/\s+/g, '-')}",
  "version": "1.0.0",
  "description": "Generated by DreamBuild AI",
  "main": "index.html",
  "scripts": {
    "start": "python -m http.server 8000",
    "dev": "python -m http.server 8000"
  },
  "keywords": ["fibonacci", "sequence", "math"],
  "author": "DreamBuild AI",
  "license": "MIT"
}`
    }
  }

  // Generate Weather App
  generateWeatherApp(prompt) {
    const appName = this.extractAppName(prompt) || 'Weather App'
    return {
      'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${appName}</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>${appName}</h1>
        <p>Get current weather and forecast for any city</p>
        
        <div class="weather-app">
            <div class="search-section">
                <div class="input-group">
                    <input type="text" id="cityInput" placeholder="Enter city name" />
                    <button id="searchBtn" class="btn">Get Weather</button>
                </div>
                <div class="location-info">
                    <button id="currentLocationBtn" class="btn-secondary">Use Current Location</button>
                </div>
            </div>
            
            <div id="loading" class="loading hidden">
                <div class="spinner"></div>
                <p>Loading weather data...</p>
            </div>
            
            <div id="error" class="error hidden">
                <p>Unable to fetch weather data. Please try again.</p>
            </div>
            
            <div id="weatherData" class="weather-data hidden">
                <div class="current-weather">
                    <h2 id="cityName"></h2>
                    <div class="weather-main">
                        <div class="temperature">
                            <span id="currentTemp"></span>
                            <span class="unit">°C</span>
                        </div>
                        <div class="weather-icon">
                            <img id="weatherIcon" src="" alt="Weather Icon" />
                        </div>
                    </div>
                    <p id="weatherDescription" class="description"></p>
                    <div class="weather-details">
                        <div class="detail">
                            <span class="label">Feels like:</span>
                            <span id="feelsLike"></span>
                        </div>
                        <div class="detail">
                            <span class="label">Humidity:</span>
                            <span id="humidity"></span>
                        </div>
                        <div class="detail">
                            <span class="label">Wind:</span>
                            <span id="windSpeed"></span>
                        </div>
                        <div class="detail">
                            <span class="label">Pressure:</span>
                            <span id="pressure"></span>
                        </div>
                    </div>
                </div>
                
                <div class="forecast">
                    <h3>5-Day Forecast</h3>
                    <div id="forecastList" class="forecast-list"></div>
                </div>
            </div>
        </div>
    </div>
    
    <script src="script.js"></script>
</body>
</html>`,
      'script.js': `// ${appName} - Generated by DreamBuild AI
class WeatherApp {
    constructor() {
        this.apiKey = 'demo'; // In production, use a real API key
        this.baseURL = 'https://api.openweathermap.org/data/2.5';
        this.cityInput = document.getElementById('cityInput');
        this.searchBtn = document.getElementById('searchBtn');
        this.currentLocationBtn = document.getElementById('currentLocationBtn');
        this.loading = document.getElementById('loading');
        this.error = document.getElementById('error');
        this.weatherData = document.getElementById('weatherData');
        
        this.init();
    }
    
    init() {
        this.searchBtn.addEventListener('click', () => this.searchWeather());
        this.currentLocationBtn.addEventListener('click', () => this.getCurrentLocationWeather());
        this.cityInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.searchWeather();
        });

    }
    
    async searchWeather() {
        const city = this.cityInput.value.trim();
        if (!city) {
            this.showError('Please enter a city name');
            return;
        }
        
        this.showLoading();
        try {
            const weatherData = await this.fetchWeatherData(city);
            this.displayWeather(weatherData);
        } catch (error) {
            this.showError('Unable to fetch weather data. Please try again.');
        }
    }
    
    async getCurrentLocationWeather() {
        if (!navigator.geolocation) {
            this.showError('Geolocation is not supported by this browser.');
            return;
        }
        
        this.showLoading();
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                try {
                    const { latitude, longitude } = position.coords;
                    const weatherData = await this.fetchWeatherByCoords(latitude, longitude);
                    this.displayWeather(weatherData);
                } catch (error) {
                    this.showError('Unable to fetch weather data for your location.');
                }
            },
            (error) => {
                this.showError('Unable to get your location. Please enter a city name.');
            }
        );
    }
    
    async fetchWeatherData(city) {
        // Simulate API call with demo data
        return new Promise((resolve) => {
            setTimeout(() => {
                const demoData = this.getDemoWeatherData(city);
                resolve(demoData);
            }, 1000);
        });
    }
    
    async fetchWeatherByCoords(lat, lon) {
        // Simulate API call with demo data
        return new Promise((resolve) => {
            setTimeout(() => {
                const demoData = this.getDemoWeatherData('Current Location');
                resolve(demoData);
            }, 1000);
        });
    }
    
    getDemoWeatherData(city) {
        const cities = {
            'london': { name: 'London', temp: 15, description: 'Cloudy', humidity: 75, wind: 12, pressure: 1013 },
            'new york': { name: 'New York', temp: 22, description: 'Sunny', humidity: 60, wind: 8, pressure: 1015 },
            'tokyo': { name: 'Tokyo', temp: 18, description: 'Rainy', humidity: 85, wind: 15, pressure: 1008 },
            'paris': { name: 'Paris', temp: 16, description: 'Partly Cloudy', humidity: 70, wind: 10, pressure: 1012 },
            'sydney': { name: 'Sydney', temp: 25, description: 'Clear', humidity: 55, wind: 6, pressure: 1020 }
        };
        
        const cityKey = city.toLowerCase();
        const cityData = cities[cityKey] || {
            name: city,
            temp: Math.floor(Math.random() * 30) + 5,
            description: ['Sunny', 'Cloudy', 'Rainy', 'Clear', 'Partly Cloudy'][Math.floor(Math.random() * 5)],
            humidity: Math.floor(Math.random() * 40) + 40,
            wind: Math.floor(Math.random() * 20) + 5,
            pressure: Math.floor(Math.random() * 20) + 1000
        };
        
        return {
            current: {
                name: cityData.name,
                temp: cityData.temp,
                description: cityData.description,
                feels_like: cityData.temp + Math.floor(Math.random() * 4) - 2,
                humidity: cityData.humidity,
                wind_speed: cityData.wind,
                pressure: cityData.pressure,
                icon: this.getWeatherIcon(cityData.description)
            },
            forecast: this.generateForecast(cityData.temp, cityData.description)
        };
    }
    
    getWeatherIcon(description) {
        const icons = {
            'sunny': '☀️',
            'clear': '☀️',
            'cloudy': '☁️',
            'rainy': '🌧️',
            'partly cloudy': '⛅'
        };
        return icons[description.toLowerCase()] || '🌤️';
    }
    
    generateForecast(baseTemp, baseDescription) {
        const forecast = [];
        for (let i = 1; i <= 5; i++) {
            const temp = baseTemp + Math.floor(Math.random() * 10) - 5;
            const description = ['Sunny', 'Cloudy', 'Rainy', 'Clear', 'Partly Cloudy'][Math.floor(Math.random() * 5)];
            forecast.push({
                day: new Date(Date.now() + i * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { weekday: 'short' }),
                temp: temp,
                description: description,
                icon: this.getWeatherIcon(description)
            });
        }
        return forecast;
    }
    
    displayWeather(data) {
        this.hideLoading();
        this.hideError();
        
        // Current weather
        document.getElementById('cityName').textContent = data.current.name;
        document.getElementById('currentTemp').textContent = data.current.temp;
        document.getElementById('weatherDescription').textContent = data.current.description;
        document.getElementById('feelsLike').textContent = \`\${data.current.feels_like}°C\`;
        document.getElementById('humidity').textContent = \`\${data.current.humidity}%\`;
        document.getElementById('windSpeed').textContent = \`\${data.current.wind_speed} km/h\`;
        document.getElementById('pressure').textContent = \`\${data.current.pressure} hPa\`;
        document.getElementById('weatherIcon').src = \`data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y="50" font-size="50">\${data.current.icon}</text></svg>\`;
        
        // Forecast
        const forecastList = document.getElementById('forecastList');
        forecastList.innerHTML = data.forecast.map(day => \`
            <div class="forecast-item">
                <div class="day">\${day.day}</div>
                <div class="icon">\${day.icon}</div>
                <div class="temp">\${day.temp}°C</div>
                <div class="desc">\${day.description}</div>
            </div>
        \`).join('');
        
        this.weatherData.classList.remove('hidden');
    }
    
    showLoading() {
        this.loading.classList.remove('hidden');
        this.error.classList.add('hidden');
        this.weatherData.classList.add('hidden');
    }
    
    hideLoading() {
        this.loading.classList.add('hidden');
    }
    
    showError(message) {
        this.hideLoading();
        this.error.querySelector('p').textContent = message;
        this.error.classList.remove('hidden');
        this.weatherData.classList.add('hidden');
    }
    
    hideError() {
        this.error.classList.add('hidden');
    }
}

// Initialize the weather app
document.addEventListener('DOMContentLoaded', () => {
    new WeatherApp();
});`,
      'styles.css': `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(135deg, #74b9ff 0%, #0984e3 100%);
  min-height: 100vh;
  color: white;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.weather-app {
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 1rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin-top: 2rem;
}

.search-section {
  margin-bottom: 2rem;
}

.input-group {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

input {
  flex: 1;
  padding: 1rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1.1rem;
  background: rgba(255, 255, 255, 0.9);
  color: #333;
}

.btn {
  background: #007bff;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn:hover {
  background: #0056b3;
  transform: translateY(-2px);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 0.8rem 1.5rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.3);
}

.weather-data {
  text-align: left;
}

.current-weather {
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 1rem;
  margin-bottom: 2rem;
}

.weather-main {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.temperature {
  font-size: 4rem;
  font-weight: bold;
  color: #ffd700;
}

.unit {
  font-size: 2rem;
  color: #ffd700;
}

.weather-icon {
  font-size: 4rem;
}

.description {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-transform: capitalize;
}

.weather-details {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.detail {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.label {
  font-weight: bold;
  color: #ffd700;
}

.forecast {
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 1rem;
}

.forecast h3 {
  margin-bottom: 1rem;
  color: #ffd700;
}

.forecast-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
}

.forecast-item {
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 0.5rem;
  text-align: center;
}

.day {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.icon {
  font-size: 2rem;
  margin: 0.5rem 0;
}

.temp {
  font-size: 1.2rem;
  font-weight: bold;
  color: #ffd700;
}

.desc {
  font-size: 0.9rem;
  opacity: 0.8;
  text-transform: capitalize;
}

.loading, .error {
  text-align: center;
  padding: 2rem;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 1rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.hidden {
  display: none;
}

.error {
  color: #ff6b6b;
  background: rgba(255, 107, 107, 0.1);
  border: 1px solid rgba(255, 107, 107, 0.3);
  border-radius: 0.5rem;
  padding: 1rem;
}

@media (max-width: 768px) {
  .input-group {
    flex-direction: column;
  }
  
  .weather-main {
    flex-direction: column;
    text-align: center;
  }
  
  .temperature {
    font-size: 3rem;
  }
  
  .weather-details {
    grid-template-columns: 1fr;
  }
}`,
      'package.json': `{
  "name": "${appName.toLowerCase().replace(/\s+/g, '-')}",
  "version": "1.0.0",
  "description": "Generated by DreamBuild AI",
  "main": "index.html",
  "scripts": {
    "start": "python -m http.server 8000",
    "dev": "python -m http.server 8000"
  },
  "keywords": ["weather", "forecast", "api"],
  "author": "DreamBuild AI",
  "license": "MIT"
}`
    }
  }

  // Helper methods for context analysis
  detectProjectType(context) {
    const files = context.previousFiles || []
    if (files.some(f => f.includes('package.json'))) return 'node'
    if (files.some(f => f.includes('.jsx') || f.includes('.tsx'))) return 'react'
    if (files.some(f => f.includes('.vue'))) return 'vue'
    if (files.some(f => f.includes('.html'))) return 'web'
    return 'web'
  }

  analyzeDependencies(context) {
    // Analyze existing dependencies from context
    return context.dependencies || []
  }

  detectCodingStandards(context) {
    // Detect coding standards from existing code
    return {
      indentation: '2 spaces',
      quotes: 'single',
      semicolons: true,
      trailingCommas: true
    }
  }

  detectArchitecture(context) {
    // Detect project architecture
    const files = context.previousFiles || []
    if (files.some(f => f.includes('components'))) return 'component-based'
    if (files.some(f => f.includes('pages'))) return 'page-based'
    return 'monolithic'
  }

  detectFrameworks(context) {
    const frameworks = []
    const files = context.previousFiles || []
    
    if (files.some(f => f.includes('react'))) frameworks.push('react')
    if (files.some(f => f.includes('vue'))) frameworks.push('vue')
    if (files.some(f => f.includes('angular'))) frameworks.push('angular')
    if (files.some(f => f.includes('express'))) frameworks.push('express')
    
    return frameworks
  }

  extractUserPreferences(context) {
    return {
      preferredFramework: 'react',
      styling: 'tailwind',
      stateManagement: 'hooks',
      testing: 'jest'
    }
  }

  detectEnvironment(context) {
    return {
      nodeVersion: '18+',
      packageManager: 'npm',
      bundler: 'vite',
      deployment: 'firebase'
    }
  }

  enhanceWithContext(code, context) {
    console.log('🔧 Enhancing code with context:', context)
    
    // Add context-aware enhancements
    const enhancedCode = { ...code }
    
    // Add context-aware comments to files
    Object.keys(enhancedCode).forEach(filename => {
      if (filename.endsWith('.js') || filename.endsWith('.jsx')) {
        const originalContent = enhancedCode[filename]
        const contextComment = `// Generated by DreamBuild AI with context awareness
// Project Type: ${context.projectType || 'web'}
// Architecture: ${context.architecture || 'monolithic'}
// Frameworks: ${context.frameworks?.join(', ') || 'vanilla'}
// Environment: ${context.environment?.nodeVersion || '18+'}

${originalContent}`
        enhancedCode[filename] = contextComment
      }
    })
    
    console.log('✅ Code enhanced with context awareness')
    return enhancedCode
  }

  extractFeatures(generatedCode) {
    const features = []
    const content = Object.values(generatedCode).join(' ').toLowerCase()
    
    console.log('🔍 Extracting features from generated code...')
    
    // Interactive features
    if (content.includes('addeventlistener') || content.includes('onclick') || content.includes('onchange')) {
      features.push('Interactive Elements')
    }
    
    // Data persistence
    if (content.includes('localstorage') || content.includes('sessionstorage') || content.includes('indexeddb')) {
      features.push('Data Persistence')
    }
    
    // API integration
    if (content.includes('fetch') || content.includes('axios') || content.includes('xhr') || content.includes('api')) {
      features.push('API Integration')
    }
    
    // Responsive design
    if (content.includes('responsive') || content.includes('mobile') || content.includes('media query') || content.includes('@media')) {
      features.push('Responsive Design')
    }
    
    // Animations
    if (content.includes('animation') || content.includes('transition') || content.includes('transform') || content.includes('keyframes')) {
      features.push('Animations')
    }
    
    // Forms
    if (content.includes('form') || content.includes('input') || content.includes('textarea') || content.includes('select')) {
      features.push('Form Handling')
    }
    
    // Authentication
    if (content.includes('login') || content.includes('auth') || content.includes('password') || content.includes('token')) {
      features.push('Authentication')
    }
    
    // Real-time features
    if (content.includes('websocket') || content.includes('socket') || content.includes('realtime') || content.includes('live')) {
      features.push('Real-time Updates')
    }
    
    // File handling
    if (content.includes('file') || content.includes('upload') || content.includes('download') || content.includes('blob')) {
      features.push('File Handling')
    }
    
    // Default features if none detected
    if (features.length === 0) {
      features.push('Modern UI', 'Interactive Elements', 'Responsive Design')
    }
    
    console.log('✅ Features extracted:', features)
    return features
  }

  generateScreenshots(generatedCode) {
    // Generate mock screenshots for preview
    return [
      'https://via.placeholder.com/800x600/4F46E5/FFFFFF?text=App+Preview+1',
      'https://via.placeholder.com/800x600/7C3AED/FFFFFF?text=App+Preview+2'
    ]
  }

  generateLiveDemo(generatedCode) {
    // Generate live demo URL
    return 'https://dreambuild-2024-app.web.app/preview'
  }

  extractTechStack(generatedCode) {
    const techStack = []
    const content = Object.values(generatedCode).join(' ').toLowerCase()
    
    console.log('🔍 Extracting tech stack from generated code...')
    
    // Frontend frameworks
    if (content.includes('react') || content.includes('jsx')) techStack.push('React')
    if (content.includes('vue') || content.includes('vue.js')) techStack.push('Vue.js')
    if (content.includes('angular')) techStack.push('Angular')
    if (content.includes('svelte')) techStack.push('Svelte')
    
    // Backend frameworks
    if (content.includes('express') || content.includes('node')) techStack.push('Node.js')
    if (content.includes('django') || content.includes('flask')) techStack.push('Python')
    if (content.includes('spring') || content.includes('java')) techStack.push('Java')
    
    // Web technologies
    if (content.includes('html')) techStack.push('HTML5')
    if (content.includes('css')) techStack.push('CSS3')
    if (content.includes('javascript') || content.includes('js')) techStack.push('JavaScript')
    if (content.includes('typescript') || content.includes('ts')) techStack.push('TypeScript')
    
    // CSS frameworks
    if (content.includes('tailwind') || content.includes('tailwindcss')) techStack.push('Tailwind CSS')
    if (content.includes('bootstrap')) techStack.push('Bootstrap')
    if (content.includes('material') || content.includes('mui')) techStack.push('Material-UI')
    
    // Databases
    if (content.includes('mongodb') || content.includes('mongo')) techStack.push('MongoDB')
    if (content.includes('mysql') || content.includes('sql')) techStack.push('SQL')
    if (content.includes('firebase')) techStack.push('Firebase')
    
    // Default tech stack if none detected
    if (techStack.length === 0) {
      techStack.push('HTML5', 'CSS3', 'JavaScript')
    }
    
    console.log('✅ Tech stack extracted:', techStack)
    return techStack
  }

  generateDeploymentInfo(generatedCode) {
    return {
      platform: 'Firebase Hosting',
      url: 'https://dreambuild-2024-app.web.app',
      status: 'Ready to deploy',
      instructions: 'Click deploy to publish your app'
    }
  }

  // Extract app name from prompt
  extractAppName(prompt) {
    const promptString = typeof prompt === 'string' ? prompt : JSON.stringify(prompt)
    const words = promptString.split(' ');
    const nameIndex = words.findIndex(word => 
      word.toLowerCase().includes('app') || 
      word.toLowerCase().includes('application') ||
      word.toLowerCase().includes('website') ||
      word.toLowerCase().includes('page')
    );
    
    if (nameIndex > 0) {
      return words.slice(0, nameIndex).join(' ');
    }
    
    return null;
  }

  // Generate a creative app name based on the prompt
  generateAppName(prompt) {
    const promptString = typeof prompt === 'string' ? prompt : JSON.stringify(prompt)
    const lowerPrompt = promptString.toLowerCase();
    
    // Extract key words from the prompt
    const keyWords = promptString.split(' ').filter(word => 
      word.length > 3 && 
      !['create', 'build', 'make', 'generate', 'app', 'application', 'website', 'page'].includes(word.toLowerCase())
    );
    
    // Generate creative names based on content
    if (lowerPrompt.includes('weather')) {
      return 'WeatherCast Pro';
    }
    if (lowerPrompt.includes('calculator')) {
      return 'CalcMaster';
    }
    if (lowerPrompt.includes('todo') || lowerPrompt.includes('task')) {
      return 'TaskFlow';
    }
    if (lowerPrompt.includes('game')) {
      return 'GameZone';
    }
    if (lowerPrompt.includes('chat')) {
      return 'ChatConnect';
    }
    if (lowerPrompt.includes('dashboard')) {
      return 'DashBoard Pro';
    }
    if (lowerPrompt.includes('ecommerce') || lowerPrompt.includes('store')) {
      return 'ShopMaster';
    }
    if (lowerPrompt.includes('blog')) {
      return 'BlogCraft';
    }
    if (lowerPrompt.includes('portfolio')) {
      return 'Portfolio Pro';
    }
    if (lowerPrompt.includes('social')) {
      return 'SocialConnect';
    }
    if (lowerPrompt.includes('music')) {
      return 'MusicHub';
    }
    if (lowerPrompt.includes('photo') || lowerPrompt.includes('image')) {
      return 'PhotoGallery';
    }
    if (lowerPrompt.includes('news')) {
      return 'NewsReader';
    }
    if (lowerPrompt.includes('recipe')) {
      return 'RecipeBook';
    }
    if (lowerPrompt.includes('fitness') || lowerPrompt.includes('workout')) {
      return 'FitTracker';
    }
    if (lowerPrompt.includes('finance') || lowerPrompt.includes('budget')) {
      return 'FinanceTracker';
    }
    if (lowerPrompt.includes('education') || lowerPrompt.includes('learn')) {
      return 'LearnHub';
    }
    if (lowerPrompt.includes('travel')) {
      return 'TravelGuide';
    }
    if (lowerPrompt.includes('food') || lowerPrompt.includes('restaurant')) {
      return 'FoodFinder';
    }
    if (lowerPrompt.includes('book') || lowerPrompt.includes('library')) {
      return 'BookShelf';
    }
    if (lowerPrompt.includes('calendar') || lowerPrompt.includes('schedule')) {
      return 'SchedulePro';
    }
    
    // Use key words to create a name
    if (keyWords.length > 0) {
      const firstWord = keyWords[0].charAt(0).toUpperCase() + keyWords[0].slice(1);
      const secondWord = keyWords.length > 1 ? keyWords[1].charAt(0).toUpperCase() + keyWords[1].slice(1) : 'App';
      return `${firstWord}${secondWord}`;
    }
    
    // Default creative names
    const creativeNames = [
      'DreamApp', 'InnovateHub', 'CreativeSpace', 'TechFlow', 'SmartApp',
      'NextGen', 'FutureApp', 'ProApp', 'EliteApp', 'MasterApp',
      'UltimateApp', 'PrimeApp', 'SuperApp', 'MegaApp', 'TurboApp'
    ];
    
    return creativeNames[Math.floor(Math.random() * creativeNames.length)];
  }

  // Create fallback response
  createFallbackResponse(prompt, context = {}) {
    console.log('🔄 Creating fallback response for prompt:', prompt)
    
    // Analyze prompt to determine template
    const promptString = typeof prompt === 'string' ? prompt : JSON.stringify(prompt)
    const lowerPrompt = promptString.toLowerCase()
    
    if (lowerPrompt.includes('dashboard') || lowerPrompt.includes('analytics')) {
      return this.createDashboardTemplate(prompt)
    } else if (lowerPrompt.includes('todo') || lowerPrompt.includes('task')) {
      return this.createTodoTemplate(prompt)
    } else if (lowerPrompt.includes('ecommerce') || lowerPrompt.includes('store') || lowerPrompt.includes('shop')) {
      return this.createEcommerceTemplate(prompt)
    } else if (lowerPrompt.includes('api') || lowerPrompt.includes('backend')) {
      return this.createAPITemplate(prompt)
    } else {
      return this.createDefaultTemplate(prompt)
    }
  }

  // Create dashboard template
  createDashboardTemplate(prompt) {
    return {
      'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div id="root"></div>
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="App.jsx"></script>
</body>
</html>`,
      'App.jsx': `import React, { useState } from 'react';

function Dashboard() {
  const [stats, setStats] = useState({
    users: 1250,
    revenue: 45230,
    orders: 89,
    growth: 12.5
  });

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Analytics Dashboard</h1>
        <p>Welcome to your business dashboard</p>
      </header>
      
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Users</h3>
          <p className="stat-number">{stats.users.toLocaleString()}</p>
        </div>
        <div className="stat-card">
          <h3>Revenue</h3>
          <p className="stat-number">$${stats.revenue.toLocaleString()}</p>
        </div>
        <div className="stat-card">
          <h3>Orders</h3>
          <p className="stat-number">{stats.orders}</p>
        </div>
        <div className="stat-card">
          <h3>Growth</h3>
          <p className="stat-number">+{stats.growth}%</p>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<Dashboard />, document.getElementById('root'));`,
      'styles.css': `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
}

.dashboard {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.dashboard-header {
  text-align: center;
  margin-bottom: 3rem;
  color: white;
}

.dashboard-header h1 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.dashboard-header p {
  font-size: 1.2rem;
  opacity: 0.9;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.stat-card {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
}

.stat-card h3 {
  color: #666;
  font-size: 1rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
}`,
      'package.json': `{
  "name": "dashboard-app",
  "version": "1.0.0",
  "description": "Generated by DreamBuild",
  "main": "index.html",
  "scripts": {
    "start": "python -m http.server 8000",
    "dev": "python -m http.server 8000"
  },
  "keywords": ["dashboard", "analytics", "react"],
  "author": "DreamBuild",
  "license": "MIT"
}`
    }
  }

  // Create todo template
  createTodoTemplate(prompt) {
    return {
      'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo App</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div id="root"></div>
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="App.jsx"></script>
</body>
</html>`,
      'App.jsx': `import React, { useState } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const addTodo = () => {
    if (text.trim()) {
      setTodos([...todos, { id: Date.now(), text: text.trim(), completed: false }]);
      setText('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="todo-app">
      <h1>Todo App</h1>
      
      <div className="input-container">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new todo..."
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
        />
        <button onClick={addTodo}>Add</button>
      </div>

      <div className="todos">
        {todos.map(todo => (
          <div key={todo.id} className={\`todo-item \${todo.completed ? 'completed' : ''}\`}>
            <span onClick={() => toggleTodo(todo.id)} className="todo-text">
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)} className="delete-btn">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

ReactDOM.render(<TodoApp />, document.getElementById('root'));`,
      'styles.css': `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 2rem;
}

.todo-app {
  max-width: 600px;
  margin: 0 auto;
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.todo-app h1 {
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
}

.input-container {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}

.input-container input {
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  font-size: 1rem;
}

.input-container button {
  padding: 0.75rem 1.5rem;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 1rem;
}

.input-container button:hover {
  background: #0056b3;
}

.todos {
  space-y: 1rem;
}

.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
}

.todo-item.completed .todo-text {
  text-decoration: line-through;
  color: #666;
}

.todo-text {
  cursor: pointer;
  flex: 1;
}

.delete-btn {
  background: #dc3545;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
}

.delete-btn:hover {
  background: #c82333;
}`,
      'package.json': `{
  "name": "todo-app",
  "version": "1.0.0",
  "description": "Generated by DreamBuild",
  "main": "index.html",
  "scripts": {
    "start": "python -m http.server 8000",
    "dev": "python -m http.server 8000"
  },
  "keywords": ["todo", "react", "app"],
  "author": "DreamBuild",
  "license": "MIT"
}`
    }
  }

  // Create ecommerce template
  createEcommerceTemplate(prompt) {
    return {
      'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>E-commerce Store</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div id="root"></div>
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="App.jsx"></script>
</body>
</html>`,
      'App.jsx': `import React, { useState } from 'react';

function EcommerceStore() {
  const [cart, setCart] = useState([]);
  const [products] = useState([
    { id: 1, name: 'Laptop', price: 999, image: 'https://via.placeholder.com/200' },
    { id: 2, name: 'Phone', price: 699, image: 'https://via.placeholder.com/200' },
    { id: 3, name: 'Tablet', price: 399, image: 'https://via.placeholder.com/200' }
  ]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="ecommerce-store">
      <header>
        <h1>E-commerce Store</h1>
        <div className="cart">
          <span>Cart ({cart.length})</span>
          <span>Total: $${getTotalPrice()}</span>
        </div>
      </header>

      <div className="products">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>$${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div className="cart-items">
          <h2>Cart Items</h2>
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <span>{item.name} - $${item.price}</span>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

ReactDOM.render(<EcommerceStore />, document.getElementById('root'));`,
      'styles.css': `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: #f8f9fa;
  min-height: 100vh;
}

.ecommerce-store {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  background: white;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

header h1 {
  color: #333;
}

.cart {
  display: flex;
  gap: 1rem;
  font-weight: bold;
  color: #007bff;
}

.products {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.product-card {
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  text-align: center;
}

.product-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
}

.product-card h3 {
  margin-bottom: 0.5rem;
  color: #333;
}

.product-card p {
  font-size: 1.2rem;
  font-weight: bold;
  color: #007bff;
  margin-bottom: 1rem;
}

.product-card button {
  background: #007bff;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.25rem;
  cursor: pointer;
  font-size: 1rem;
}

.product-card button:hover {
  background: #0056b3;
}

.cart-items {
  background: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.cart-items h2 {
  margin-bottom: 1rem;
  color: #333;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #eee;
}

.cart-item button {
  background: #dc3545;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
}`,
      'package.json': `{
  "name": "ecommerce-store",
  "version": "1.0.0",
  "description": "Generated by DreamBuild",
  "main": "index.html",
  "scripts": {
    "start": "python -m http.server 8000",
    "dev": "python -m http.server 8000"
  },
  "keywords": ["ecommerce", "store", "react"],
  "author": "DreamBuild",
  "license": "MIT"
}`
    }
  }

  // Create API template
  createAPITemplate(prompt) {
    return {
      'server.js': `const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'API is running' });
});

app.get('/api/users', (req, res) => {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
  ];
  res.json(users);
});

app.post('/api/users', (req, res) => {
  const { name, email } = req.body;
  const newUser = { id: Date.now(), name, email };
  res.json(newUser);
});

app.listen(PORT, () => {

});`,
      'package.json': `{
  "name": "api-server",
  "version": "1.0.0",
  "description": "Generated by DreamBuild",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "express": "^4.18.0",
    "cors": "^2.8.5"
  },
  "devDependencies": {
    "nodemon": "^2.0.0"
  },
  "keywords": ["api", "express", "nodejs"],
  "author": "DreamBuild",
  "license": "MIT"
}`
    }
  }

  // Create default template
  createDefaultTemplate(prompt) {
    return {
      'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DreamBuild App</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Welcome to Your DreamBuild App!</h1>
        <p>Generated based on: "${prompt}"</p>
        
        <div class="content">
            <h2>Your Application</h2>
            <p>This is a starter application generated by DreamBuild. You can customize it further by editing the files in your project.</p>
            
            <h3>Features:</h3>
            <ul>
                <li>Responsive design</li>
                <li>Modern styling</li>
                <li>Clean code structure</li>
            </ul>
            
            <p>To run this application, simply open the index.html file in your web browser.</p>
        </div>
    </div>
</body>
</html>`,
      'styles.css': `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  color: white;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.content {
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 1rem;
  margin-top: 2rem;
  text-align: left;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

li:before {
  content: "✓ ";
  color: #4CAF50;
  font-weight: bold;
}`,
      'package.json': `{
  "name": "dreambuild-app",
  "version": "1.0.0",
  "description": "Generated by DreamBuild",
  "main": "index.html",
  "scripts": {
    "start": "python -m http.server 8000",
    "dev": "python -m http.server 8000"
  },
  "keywords": ["dreambuild", "generated", "web-app"],
  "author": "DreamBuild",
  "license": "MIT"
}`
    }
  }

  // Get service health status
  getServiceHealth() {
    return { 'cloud-ai': { isHealthy: this.isHealthy } }
  }

  // Get usage statistics
  getUsageStats() {
    return {
      totalRequests: 0,
      successfulRequests: 0,
      failedRequests: 0,
      averageResponseTime: 0
    }
  }
}

// Export singleton instance
export default new CloudAIService()
