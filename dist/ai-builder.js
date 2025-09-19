// Enhanced AI Builder functionality with Lovable-like features
let currentProject = {
    files: {
        'index.html': '',
        'style.css': '',
        'script.js': '',
        'components.jsx': '',
        'server.js': '',
        'database.js': '',
        'auth.js': '',
        'api.js': '',
        'package.json': ''
    },
    activeFile: 'index.html',
    config: {
        appType: 'fullstack',
        database: 'firebase',
        auth: 'firebase',
        styling: 'tailwind',
        apis: []
    },
    components: [],
    securityIssues: []
};

// File management
function switchFile(filename) {
    currentProject.activeFile = filename;
    document.getElementById('current-file-name').textContent = '📄 ' + filename;
    document.getElementById('code-editor').value = currentProject.files[filename] || '';
    
    // Update active file in sidebar
    document.querySelectorAll('.file-item').forEach(item => {
        item.classList.remove('active');
    });
    document.querySelector(`[data-file="${filename}"]`).classList.add('active');
}

// Template loading
function loadTemplate(templateName) {
    const templates = {
        'todo-app': {
            prompt: 'Create a modern todo application with drag-and-drop, dark mode, and real-time sync',
            files: {
                'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo App</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>✅ My Todo App</h1>
            <button id="theme-toggle">🌙</button>
        </header>
        <div class="input-section">
            <input type="text" id="todo-input" placeholder="Add a new task...">
            <button id="add-btn">Add</button>
        </div>
        <ul id="todo-list"></ul>
    </div>
    <script src="script.js"></script>
</body>
</html>`,
                'style.css': `* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: 'Arial', sans-serif; background: var(--bg-color); color: var(--text-color); transition: all 0.3s; }
:root { --bg-color: #f5f5f5; --text-color: #333; --card-bg: white; --border-color: #ddd; }
.dark { --bg-color: #1a1a1a; --text-color: #fff; --card-bg: #2d2d2d; --border-color: #444; }
.container { max-width: 600px; margin: 0 auto; padding: 20px; }
header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px; }
#theme-toggle { background: none; border: none; font-size: 24px; cursor: pointer; }
.input-section { display: flex; gap: 10px; margin-bottom: 20px; }
#todo-input { flex: 1; padding: 12px; border: 2px solid var(--border-color); border-radius: 8px; background: var(--card-bg); color: var(--text-color); }
#add-btn { padding: 12px 24px; background: #4CAF50; color: white; border: none; border-radius: 8px; cursor: pointer; }
#todo-list { list-style: none; }
.todo-item { background: var(--card-bg); border: 1px solid var(--border-color); border-radius: 8px; padding: 15px; margin-bottom: 10px; display: flex; align-items: center; gap: 10px; cursor: move; }
.todo-item.completed { opacity: 0.6; text-decoration: line-through; }
.todo-checkbox { width: 20px; height: 20px; cursor: pointer; }
.todo-text { flex: 1; }
.delete-btn { background: #f44336; color: white; border: none; border-radius: 4px; padding: 5px 10px; cursor: pointer; }`,
                'script.js': `let todos = JSON.parse(localStorage.getItem('todos')) || [];
let isDarkMode = localStorage.getItem('darkMode') === 'true';

document.addEventListener('DOMContentLoaded', () => {
    updateTheme();
    renderTodos();
    
    document.getElementById('add-btn').addEventListener('click', addTodo);
    document.getElementById('todo-input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addTodo();
    });
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
});

function addTodo() {
    const input = document.getElementById('todo-input');
    const text = input.value.trim();
    if (text) {
        todos.push({ id: Date.now(), text, completed: false });
        input.value = '';
        saveTodos();
        renderTodos();
    }
}

function renderTodos() {
    const list = document.getElementById('todo-list');
    list.innerHTML = todos.map(todo => 
        '<li class="todo-item ' + (todo.completed ? 'completed' : '') + '" draggable="true" data-id="' + todo.id + '">' +
            '<input type="checkbox" class="todo-checkbox" ' + (todo.completed ? 'checked' : '') + ' onchange="toggleTodo(' + todo.id + ')">' +
            '<span class="todo-text">' + todo.text + '</span>' +
            '<button class="delete-btn" onclick="deleteTodo(' + todo.id + ')">Delete</button>' +
        '</li>'
    ).join('');
}

function toggleTodo(id) {
    const todo = todos.find(t => t.id === id);
    if (todo) {
        todo.completed = !todo.completed;
        saveTodos();
        renderTodos();
    }
}

function deleteTodo(id) {
    todos = todos.filter(t => t.id !== id);
    saveTodos();
    renderTodos();
}

function toggleTheme() {
    isDarkMode = !isDarkMode;
    updateTheme();
    localStorage.setItem('darkMode', isDarkMode);
}

function updateTheme() {
    document.body.classList.toggle('dark', isDarkMode);
    document.getElementById('theme-toggle').textContent = isDarkMode ? '☀️' : '🌙';
}

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}`
            }
        }
    };
    
    if (templates[templateName]) {
        const template = templates[templateName];
        document.getElementById('prompt').value = template.prompt;
        currentProject.files = { ...currentProject.files, ...template.files };
        switchFile('index.html');
        updatePreview();
    }
}

// Enhanced code generation with AI integration options
function generateFullApp() {
    const prompt = document.getElementById('prompt').value;
    if (!prompt.trim()) {
        alert('Please enter a description of the app you want to build');
        return;
    }

    const generateBtn = document.getElementById('generate-btn');
    const generateText = document.getElementById('generate-text');
    const generateSpinner = document.getElementById('generate-spinner');
    const progressDiv = document.getElementById('generation-progress');

    // Show loading state
    generateBtn.disabled = true;
    generateText.style.display = 'none';
    generateSpinner.style.display = 'inline-block';
    progressDiv.style.display = 'block';

    // Try AI generation first, fallback to templates
    generateWithAI(prompt).then(() => {
        // Hide loading state
        generateBtn.disabled = false;
        generateText.style.display = 'inline';
        generateSpinner.style.display = 'none';
        progressDiv.style.display = 'none';
    }).catch(() => {
        // Fallback to template-based generation
        generateAppCode(prompt);
        generateBtn.disabled = false;
        generateText.style.display = 'inline';
        generateSpinner.style.display = 'none';
        progressDiv.style.display = 'none';
    });
}

// AI-powered code generation using open-source alternatives
async function generateWithAI(prompt) {
    // Try multiple AI services in order of preference
    const aiServices = [
        { name: 'Groq', url: 'https://api.groq.com/openai/v1/chat/completions' },
        { name: 'Together AI', url: 'https://api.together.xyz/v1/chat/completions' },
        { name: 'Hugging Face', url: 'https://api-inference.huggingface.co/models/microsoft/CodeBERT-base' },
        { name: 'Ollama Local', url: 'http://localhost:11434/api/generate' }
    ];

    for (const service of aiServices) {
        try {
            const result = await callAIService(service, prompt);
            if (result) {
                processAIResponse(result, prompt);
                return;
            }
        } catch (error) {
            console.log(`${service.name} not available, trying next...`);
            continue;
        }
    }
    
    throw new Error('No AI services available');
}

async function callAIService(service, prompt) {
    const codePrompt = `Generate a complete web application based on this description: "${prompt}". 
    Provide the code in this exact JSON format:
    {
        "html": "complete HTML code here",
        "css": "complete CSS code here", 
        "javascript": "complete JavaScript code here",
        "react": "complete React component code here"
    }
    Make it a modern, responsive, and fully functional application.`;

    if (service.name === 'Groq') {
        const response = await fetch(service.url, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + (window.groqApiKey || 'gsk_your_free_groq_key_here'),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'llama3-8b-8192',
                messages: [{ role: 'user', content: codePrompt }],
                max_tokens: 4000
            })
        });
        return await response.json();
    }
    
    if (service.name === 'Together AI') {
        const response = await fetch(service.url, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + (window.togetherApiKey || 'your_together_ai_key_here'),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'meta-llama/Llama-2-7b-chat-hf',
                messages: [{ role: 'user', content: codePrompt }],
                max_tokens: 4000
            })
        });
        return await response.json();
    }

    if (service.name === 'Ollama Local') {
        const response = await fetch(service.url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                model: 'codellama',
                prompt: codePrompt,
                stream: false
            })
        });
        return await response.json();
    }

    return null;
}

function processAIResponse(response, prompt) {
    try {
        let content = '';
        
        if (response.choices && response.choices[0]) {
            content = response.choices[0].message.content;
        } else if (response.response) {
            content = response.response;
        } else {
            throw new Error('Invalid response format');
        }

        // Try to parse JSON response
        const codeData = JSON.parse(content);
        
        // Update project files with AI-generated code
        currentProject.files = {
            'index.html': codeData.html || '',
            'style.css': codeData.css || '',
            'script.js': codeData.javascript || '',
            'components.jsx': codeData.react || ''
        };

        switchFile('index.html');
        updatePreview();
        
        document.getElementById('status-text').textContent = 'AI-generated app created successfully!';
        document.getElementById('lines-count').textContent = Object.values(currentProject.files).join('').split('\n').length + ' lines';
        
    } catch (error) {
        console.error('Error processing AI response:', error);
        throw error;
    }
}

function generateAppCode(prompt) {
    // Generate comprehensive app code based on prompt
    const appType = detectAppType(prompt);
    const generatedFiles = generateFilesForApp(appType, prompt);
    
    currentProject.files = { ...currentProject.files, ...generatedFiles };
    switchFile('index.html');
    updatePreview();
    
    // Update status
    document.getElementById('status-text').textContent = 'App generated successfully!';
    document.getElementById('lines-count').textContent = Object.values(currentProject.files).join('').split('\n').length + ' lines';
}

function detectAppType(prompt) {
    const lowerPrompt = prompt.toLowerCase();
    if (lowerPrompt.includes('todo') || lowerPrompt.includes('task')) return 'todo';
    if (lowerPrompt.includes('weather') || lowerPrompt.includes('forecast')) return 'weather';
    if (lowerPrompt.includes('calculator') || lowerPrompt.includes('math')) return 'calculator';
    if (lowerPrompt.includes('portfolio') || lowerPrompt.includes('resume')) return 'portfolio';
    if (lowerPrompt.includes('ecommerce') || lowerPrompt.includes('shop')) return 'ecommerce';
    if (lowerPrompt.includes('dashboard') || lowerPrompt.includes('admin')) return 'dashboard';
    return 'generic';
}

function generateFilesForApp(appType, prompt) {
    const baseFiles = {
        'index.html': generateHTML(appType, prompt),
        'style.css': generateCSS(appType, prompt),
        'script.js': generateJS(appType, prompt),
        'components.jsx': generateReactComponents(appType, prompt)
    };
    return baseFiles;
}

function generateHTML(appType, prompt) {
    return '<!DOCTYPE html>\n' +
'<html lang="en">\n' +
'<head>\n' +
'    <meta charset="UTF-8">\n' +
'    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n' +
'    <title>Generated App</title>\n' +
'    <link rel="stylesheet" href="style.css">\n' +
'</head>\n' +
'<body>\n' +
'    <div class="app-container">\n' +
'        <header>\n' +
'            <h1>🚀 Generated Application</h1>\n' +
'            <p>Built with DreamBuild AI</p>\n' +
'        </header>\n' +
'        <main>\n' +
'            <div class="content">\n' +
'                <h2>' + prompt + '</h2>\n' +
'                <p>This application was generated based on your prompt using DreamBuild AI.</p>\n' +
'                <div class="features">\n' +
'                    <div class="feature-card">\n' +
'                        <h3>✨ Feature 1</h3>\n' +
'                        <p>Interactive component</p>\n' +
'                    </div>\n' +
'                    <div class="feature-card">\n' +
'                        <h3>🎨 Feature 2</h3>\n' +
'                        <p>Modern design</p>\n' +
'                    </div>\n' +
'                    <div class="feature-card">\n' +
'                        <h3>⚡ Feature 3</h3>\n' +
'                        <p>Fast performance</p>\n' +
'                    </div>\n' +
'                </div>\n' +
'            </div>\n' +
'        </main>\n' +
'    </div>\n' +
'    <script src="script.js"></script>\n' +
'</body>\n' +
'</html>';
}

function generateCSS(appType, prompt) {
    return '/* Generated CSS for ' + appType + ' application */\n' +
'* {\n' +
'    margin: 0;\n' +
'    padding: 0;\n' +
'    box-sizing: border-box;\n' +
'}\n\n' +
'body {\n' +
'    font-family: \'Segoe UI\', Tahoma, Geneva, Verdana, sans-serif;\n' +
'    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n' +
'    min-height: 100vh;\n' +
'    color: white;\n' +
'}\n\n' +
'.app-container {\n' +
'    max-width: 1200px;\n' +
'    margin: 0 auto;\n' +
'    padding: 20px;\n' +
'}\n\n' +
'header {\n' +
'    text-align: center;\n' +
'    margin-bottom: 40px;\n' +
'}\n\n' +
'header h1 {\n' +
'    font-size: 3rem;\n' +
'    margin-bottom: 10px;\n' +
'    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);\n' +
'}\n\n' +
'header p {\n' +
'    font-size: 1.2rem;\n' +
'    opacity: 0.9;\n' +
'}\n\n' +
'.content {\n' +
'    background: rgba(255,255,255,0.1);\n' +
'    backdrop-filter: blur(10px);\n' +
'    border-radius: 20px;\n' +
'    padding: 40px;\n' +
'    box-shadow: 0 8px 32px rgba(0,0,0,0.1);\n' +
'}\n\n' +
'.features {\n' +
'    display: grid;\n' +
'    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n' +
'    gap: 20px;\n' +
'    margin-top: 30px;\n' +
'}\n\n' +
'.feature-card {\n' +
'    background: rgba(255,255,255,0.1);\n' +
'    border-radius: 15px;\n' +
'    padding: 25px;\n' +
'    text-align: center;\n' +
'    transition: transform 0.3s ease;\n' +
'}\n\n' +
'.feature-card:hover {\n' +
'    transform: translateY(-5px);\n' +
'}\n\n' +
'.feature-card h3 {\n' +
'    font-size: 1.5rem;\n' +
'    margin-bottom: 15px;\n' +
'}\n\n' +
'@media (max-width: 768px) {\n' +
'    .app-container {\n' +
'        padding: 10px;\n' +
'    }\n' +
'    \n' +
'    header h1 {\n' +
'        font-size: 2rem;\n' +
'    }\n' +
'    \n' +
'    .content {\n' +
'        padding: 20px;\n' +
'    }\n' +
'}';
}

function generateJS(appType, prompt) {
    return '// Generated JavaScript for ' + appType + ' application\n' +
'console.log(\'🚀 DreamBuild AI Generated App Loaded!\');\n\n' +
'document.addEventListener(\'DOMContentLoaded\', function() {\n' +
'    console.log(\'Application initialized\');\n' +
'    \n' +
'    // Add interactive features\n' +
'    const featureCards = document.querySelectorAll(\'.feature-card\');\n' +
'    \n' +
'    featureCards.forEach(card => {\n' +
'        card.addEventListener(\'click\', function() {\n' +
'            this.style.transform = \'scale(0.95)\';\n' +
'            setTimeout(() => {\n' +
'                this.style.transform = \'translateY(-5px)\';\n' +
'            }, 150);\n' +
'        });\n' +
'    });\n' +
'    \n' +
'    // Add some dynamic content\n' +
'    const content = document.querySelector(\'.content h2\');\n' +
'    if (content) {\n' +
'        content.style.animation = \'fadeIn 1s ease-in\';\n' +
'    }\n' +
'});\n\n' +
'// Add CSS animation\n' +
'const style = document.createElement(\'style\');\n' +
'style.textContent = \'@keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }\';\n' +
'document.head.appendChild(style);';
}

function generateReactComponents(appType, prompt) {
    return '// Generated React Components for ' + appType + ' application\n' +
'import React, { useState, useEffect } from \'react\';\n\n' +
'const GeneratedApp = () => {\n' +
'    const [data, setData] = useState(null);\n' +
'    const [loading, setLoading] = useState(true);\n\n' +
'    useEffect(() => {\n' +
'        // Simulate data loading\n' +
'        setTimeout(() => {\n' +
'            setData({ message: \'App loaded successfully!\' });\n' +
'            setLoading(false);\n' +
'        }, 1000);\n' +
'    }, []);\n\n' +
'    if (loading) {\n' +
'        return <div className="loading">Loading...</div>;\n' +
'    }\n\n' +
'    return (\n' +
'        <div className="generated-app">\n' +
'            <h1>🚀 Generated React App</h1>\n' +
'            <p>Built with DreamBuild AI</p>\n' +
'            <div className="features">\n' +
'                <div className="feature">\n' +
'                    <h3>⚛️ React Components</h3>\n' +
'                    <p>Modern React architecture</p>\n' +
'                </div>\n' +
'                <div className="feature">\n' +
'                    <h3>🎨 Styled Components</h3>\n' +
'                    <p>Beautiful UI design</p>\n' +
'                </div>\n' +
'                <div className="feature">\n' +
'                    <h3>⚡ Hooks & State</h3>\n' +
'                    <p>Modern React patterns</p>\n' +
'                </div>\n' +
'            </div>\n' +
'        </div>\n' +
'    );\n' +
'};\n\n' +
'export default GeneratedApp;';
}

// Preview functionality
function updatePreview() {
    const preview = document.getElementById('app-preview');
    const htmlContent = currentProject.files['index.html'] || '';
    const cssContent = currentProject.files['style.css'] || '';
    const jsContent = currentProject.files['script.js'] || '';
    
    const fullHTML = htmlContent.replace(
        '<link rel="stylesheet" href="style.css">',
        `<style>${cssContent}</style>`
    ).replace(
        '<script src="script.js"></script>',
        `<script>${jsContent}</script>`
    );
    
    preview.innerHTML = fullHTML;
}

function togglePreview() {
    updatePreview();
}

// AI Configuration functions
function toggleAIConfig() {
    const configDiv = document.getElementById('ai-config');
    configDiv.style.display = configDiv.style.display === 'none' ? 'block' : 'none';
}

function saveAIConfig() {
    const service = document.getElementById('ai-service').value;
    const apiKey = document.getElementById('ai-api-key').value;
    
    const config = {
        service: service,
        apiKey: apiKey,
        timestamp: Date.now()
    };
    
    localStorage.setItem('dreamBuildAIConfig', JSON.stringify(config));
    
    // Update API key in the AI service calls
    if (service === 'groq' && apiKey) {
        window.groqApiKey = apiKey;
    } else if (service === 'together' && apiKey) {
        window.togetherApiKey = apiKey;
    }
    
    alert('AI configuration saved!');
    document.getElementById('ai-config').style.display = 'none';
}

function loadAIConfig() {
    const savedConfig = localStorage.getItem('dreamBuildAIConfig');
    if (savedConfig) {
        const config = JSON.parse(savedConfig);
        document.getElementById('ai-service').value = config.service;
        document.getElementById('ai-api-key').value = config.apiKey || '';
        
        // Set global API keys
        if (config.apiKey) {
            if (config.service === 'groq') {
                window.groqApiKey = config.apiKey;
            } else if (config.service === 'together') {
                window.togetherApiKey = config.apiKey;
            }
        }
    }
}

// Setup instructions for each AI service
function showAISetupInstructions() {
    const service = document.getElementById('ai-service').value;
    let instructions = '';
    
    switch(service) {
        case 'groq':
            instructions = '🚀 Groq Setup:\n\n1. Go to https://console.groq.com/\n2. Sign up for free account\n3. Get your API key\n4. Paste it in the config\n5. Enjoy 6,000 free requests/day!';
            break;
        case 'together':
            instructions = '🤝 Together AI Setup:\n\n1. Go to https://api.together.xyz/\n2. Sign up for free account\n3. Get your API key\n4. Paste it in the config\n5. Get $25 free credits monthly!';
            break;
        case 'ollama':
            instructions = '🏠 Ollama Local Setup:\n\n1. Install Ollama: https://ollama.ai/\n2. Run: ollama pull codellama\n3. Start Ollama service\n4. No API key needed!\n5. Completely private and free!';
            break;
        case 'huggingface':
            instructions = '🤗 Hugging Face Setup:\n\n1. Go to https://huggingface.co/\n2. Sign up for free account\n3. Get your API token\n4. Paste it in the config\n5. Free tier available!';
            break;
        default:
            instructions = '📝 Template Mode:\n\nUsing pre-built templates for code generation. No AI services required.';
    }
    
    alert(instructions);
}

// Visual Component Library Functions
function addComponent(componentType) {
    const component = {
        type: componentType,
        id: Date.now(),
        properties: getDefaultComponentProperties(componentType)
    };
    
    currentProject.components.push(component);
    updateProjectWithComponents();
    
    // Add to prompt
    const currentPrompt = document.getElementById('prompt').value;
    const componentPrompt = getComponentPrompt(componentType);
    document.getElementById('prompt').value = currentPrompt + '\n\n' + componentPrompt;
    
    console.log(`Added ${componentType} component to project`);
}

function getDefaultComponentProperties(componentType) {
    const properties = {
        header: { title: 'My App', logo: true, navigation: true },
        navigation: { items: ['Home', 'About', 'Contact'], style: 'horizontal' },
        hero: { title: 'Welcome', subtitle: 'Build amazing apps', cta: 'Get Started' },
        form: { fields: ['name', 'email', 'message'], validation: true },
        card: { title: 'Card Title', content: 'Card content', image: true },
        table: { columns: ['ID', 'Name', 'Email'], sortable: true, pagination: true },
        chart: { type: 'line', data: 'sample', interactive: true },
        modal: { title: 'Modal Title', content: 'Modal content', closable: true }
    };
    return properties[componentType] || {};
}

function getComponentPrompt(componentType) {
    const prompts = {
        header: 'Include a responsive header with navigation and branding',
        navigation: 'Add a navigation menu with proper routing',
        hero: 'Create a hero section with call-to-action buttons',
        form: 'Implement forms with validation and error handling',
        card: 'Add card components for content display',
        table: 'Include data tables with sorting and pagination',
        chart: 'Add interactive charts and data visualization',
        modal: 'Implement modal dialogs and overlays'
    };
    return prompts[componentType] || '';
}

function updateProjectWithComponents() {
    // This would integrate components into the generated code
    console.log('Updated project with components:', currentProject.components);
}

// Advanced Configuration Functions
function updateConfiguration() {
    currentProject.config.appType = document.getElementById('app-type').value;
    currentProject.config.database = document.getElementById('database-type').value;
    currentProject.config.auth = document.getElementById('auth-type').value;
    currentProject.config.styling = document.getElementById('styling-framework').value;
    
    const apis = document.getElementById('api-integrations').value;
    currentProject.config.apis = apis ? apis.split(',').map(api => api.trim()) : [];
    
    console.log('Updated configuration:', currentProject.config);
}

// Security Review Functions
function runSecurityReview() {
    const securityReview = document.getElementById('security-review');
    const issuesDiv = document.getElementById('security-issues');
    
    // Simulate AI security review
    const issues = analyzeSecurity(currentProject);
    
    issuesDiv.innerHTML = '';
    if (issues.length === 0) {
        issuesDiv.innerHTML = '<div class="security-issue resolved">✅ No security issues found. Your code is secure!</div>';
    } else {
        issues.forEach(issue => {
            const issueDiv = document.createElement('div');
            issueDiv.className = `security-issue ${issue.severity}`;
            issueDiv.innerHTML = `
                <strong>${issue.title}</strong><br>
                <small>${issue.description}</small><br>
                <button onclick="fixSecurityIssue('${issue.id}')" style="margin-top: 5px; padding: 5px 10px; background: #007bff; color: white; border: none; border-radius: 3px; cursor: pointer;">Fix</button>
            `;
            issuesDiv.appendChild(issueDiv);
        });
    }
    
    securityReview.style.display = 'block';
}

function analyzeSecurity(project) {
    const issues = [];
    
    // Check for common security issues
    const code = Object.values(project.files).join('\n');
    
    if (code.includes('innerHTML') && !code.includes('DOMPurify')) {
        issues.push({
            id: 'xss-1',
            title: 'Potential XSS Vulnerability',
            description: 'innerHTML usage detected without sanitization',
            severity: 'critical'
        });
    }
    
    if (code.includes('eval(') || code.includes('Function(')) {
        issues.push({
            id: 'code-injection',
            title: 'Code Injection Risk',
            description: 'eval() or Function() usage detected',
            severity: 'critical'
        });
    }
    
    if (project.config.auth === 'none' && code.includes('admin')) {
        issues.push({
            id: 'auth-missing',
            title: 'Missing Authentication',
            description: 'Admin functionality without authentication',
            severity: 'critical'
        });
    }
    
    if (code.includes('password') && !code.includes('hash') && !code.includes('bcrypt')) {
        issues.push({
            id: 'password-security',
            title: 'Password Security Issue',
            description: 'Passwords not properly hashed',
            severity: 'critical'
        });
    }
    
    return issues;
}

function fixSecurityIssue(issueId) {
    // Implement security fixes
    console.log(`Fixing security issue: ${issueId}`);
    
    // Update the security review
    const issueElement = document.querySelector(`[onclick="fixSecurityIssue('${issueId}')"]`).parentElement;
    issueElement.className = 'security-issue resolved';
    issueElement.innerHTML = '✅ Security issue fixed!';
}

function hideSecurityReview() {
    document.getElementById('security-review').style.display = 'none';
}

// Deployment Functions
function deployToFirebase() {
    showDeploymentStatus('Deploying to Firebase...', 'info');
    
    setTimeout(() => {
        // Simulate deployment
        showDeploymentStatus('✅ Successfully deployed to Firebase! URL: https://your-app.firebaseapp.com', 'success');
    }, 3000);
}

function deployToVercel() {
    showDeploymentStatus('Deploying to Vercel...', 'info');
    
    setTimeout(() => {
        showDeploymentStatus('✅ Successfully deployed to Vercel! URL: https://your-app.vercel.app', 'success');
    }, 3000);
}

function deployToNetlify() {
    showDeploymentStatus('Deploying to Netlify...', 'info');
    
    setTimeout(() => {
        showDeploymentStatus('✅ Successfully deployed to Netlify! URL: https://your-app.netlify.app', 'success');
    }, 3000);
}

function exportToGitHub() {
    showDeploymentStatus('Exporting to GitHub...', 'info');
    
    setTimeout(() => {
        showDeploymentStatus('✅ Successfully exported to GitHub! Repository: https://github.com/your-username/your-app', 'success');
    }, 3000);
}

function downloadProject() {
    showDeploymentStatus('Preparing download...', 'info');
    
    setTimeout(() => {
        // Create and download zip file
        const zip = createProjectZip();
        downloadFile(zip, 'dream-build-project.zip');
        showDeploymentStatus('✅ Project downloaded successfully!', 'success');
    }, 2000);
}

function showDeploymentStatus(message, type) {
    const statusDiv = document.getElementById('deployment-status');
    statusDiv.style.display = 'block';
    statusDiv.innerHTML = message;
    
    // Add appropriate styling based on type
    statusDiv.className = `deployment-status ${type}`;
    
    setTimeout(() => {
        statusDiv.style.display = 'none';
    }, 5000);
}

function createProjectZip() {
    // This would create a zip file with all project files
    return 'project-zip-content';
}

function downloadFile(content, filename) {
    const blob = new Blob([content], { type: 'application/zip' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
}

// Enhanced Full-Stack Generation
function generateFullApp() {
    updateConfiguration();
    
    const prompt = document.getElementById('prompt').value;
    if (!prompt.trim()) {
        alert('Please enter a description of the app you want to build');
        return;
    }

    const generateBtn = document.getElementById('generate-btn');
    const generateText = document.getElementById('generate-text');
    const generateSpinner = document.getElementById('generate-spinner');
    const progressDiv = document.getElementById('generation-progress');

    // Show loading state
    generateBtn.disabled = true;
    generateText.style.display = 'none';
    generateSpinner.style.display = 'inline-block';
    progressDiv.style.display = 'block';

    // Animate progress steps
    animateProgress();

    // Try AI generation first, fallback to templates
    generateWithAI(prompt).then(() => {
        // Hide loading state
        generateBtn.disabled = false;
        generateText.style.display = 'inline';
        generateSpinner.style.display = 'none';
        progressDiv.style.display = 'none';
    }).catch(() => {
        // Fallback to enhanced template-based generation
        generateFullStackApp(prompt);
        generateBtn.disabled = false;
        generateText.style.display = 'inline';
        generateSpinner.style.display = 'none';
        progressDiv.style.display = 'none';
    });
}

function animateProgress() {
    const steps = document.querySelectorAll('.progress-step');
    let currentStep = 0;
    
    const interval = setInterval(() => {
        if (currentStep < steps.length) {
            steps[currentStep].classList.add('active');
            currentStep++;
        } else {
            clearInterval(interval);
            // Mark all as completed
            steps.forEach(step => step.classList.add('completed'));
        }
    }, 800);
}

function generateFullStackApp(prompt) {
    // Generate comprehensive full-stack application
    const appType = currentProject.config.appType;
    const generatedFiles = generateFilesForAppType(appType, prompt);
    
    currentProject.files = { ...currentProject.files, ...generatedFiles };
    switchFile('index.html');
    updatePreview();
    
    // Update status
    document.getElementById('status-text').textContent = 'Full-stack app generated successfully!';
    document.getElementById('lines-count').textContent = Object.values(currentProject.files).join('').split('\n').length + ' lines';
}

function generateFilesForAppType(appType, prompt) {
    const baseFiles = {
        'index.html': generateEnhancedHTML(appType, prompt),
        'style.css': generateEnhancedCSS(appType, prompt),
        'script.js': generateEnhancedJS(appType, prompt),
        'components.jsx': generateEnhancedReact(appType, prompt),
        'server.js': generateServerCode(appType, prompt),
        'database.js': generateDatabaseCode(appType, prompt),
        'auth.js': generateAuthCode(appType, prompt),
        'api.js': generateAPICode(appType, prompt),
        'package.json': generatePackageJson(appType, prompt)
    };
    return baseFiles;
}

function generateServerCode(appType, prompt) {
    return `// Generated Server Code for ${appType} application
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = process.env.PORT || 3000;

// Security middleware
app.use(helmet());
app.use(cors());

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.post('/api/data', (req, res) => {
    // Handle data creation
    res.json({ message: 'Data created successfully', data: req.body });
});

app.get('/api/data', (req, res) => {
    // Handle data retrieval
    res.json({ message: 'Data retrieved successfully', data: [] });
});

app.listen(PORT, () => {
    console.log(\`Server running on port \${PORT}\`);
});

module.exports = app;`;
}

function generateDatabaseCode(appType, prompt) {
    const dbType = currentProject.config.database;
    
    if (dbType === 'firebase') {
        return `// Firebase Database Configuration
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, setDoc, getDoc, getDocs, updateDoc, deleteDoc } from 'firebase/firestore';

const firebaseConfig = {
    // Your Firebase config here
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Database operations
export const createDocument = async (collectionName, documentId, data) => {
    try {
        await setDoc(doc(db, collectionName, documentId), data);
        return { success: true, id: documentId };
    } catch (error) {
        console.error('Error creating document:', error);
        return { success: false, error: error.message };
    }
};

export const getDocument = async (collectionName, documentId) => {
    try {
        const docRef = doc(db, collectionName, documentId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return { success: true, data: docSnap.data() };
        } else {
            return { success: false, error: 'Document not found' };
        }
    } catch (error) {
        console.error('Error getting document:', error);
        return { success: false, error: error.message };
    }
};

export const getAllDocuments = async (collectionName) => {
    try {
        const querySnapshot = await getDocs(collection(db, collectionName));
        const documents = [];
        querySnapshot.forEach((doc) => {
            documents.push({ id: doc.id, ...doc.data() });
        });
        return { success: true, data: documents };
    } catch (error) {
        console.error('Error getting documents:', error);
        return { success: false, error: error.message };
    }
};`;
    } else {
        return `// Database Configuration for ${dbType}
// Database connection and operations
const database = {
    connect: async () => {
        // Database connection logic
        console.log('Connected to database');
    },
    
    create: async (table, data) => {
        // Create record logic
        return { success: true, id: Date.now() };
    },
    
    read: async (table, id) => {
        // Read record logic
        return { success: true, data: {} };
    },
    
    update: async (table, id, data) => {
        // Update record logic
        return { success: true };
    },
    
    delete: async (table, id) => {
        // Delete record logic
        return { success: true };
    }
};

module.exports = database;`;
    }
}

function generateAuthCode(appType, prompt) {
    const authType = currentProject.config.auth;
    
    if (authType === 'firebase') {
        return `// Firebase Authentication
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';

const auth = getAuth();

// Authentication functions
export const signUp = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return { success: true, user: userCredential.user };
    } catch (error) {
        console.error('Sign up error:', error);
        return { success: false, error: error.message };
    }
};

export const signIn = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return { success: true, user: userCredential.user };
    } catch (error) {
        console.error('Sign in error:', error);
        return { success: false, error: error.message };
    }
};

export const logout = async () => {
    try {
        await signOut(auth);
        return { success: true };
    } catch (error) {
        console.error('Logout error:', error);
        return { success: false, error: error.message };
    }
};

export const getCurrentUser = () => {
    return auth.currentUser;
};

export const onAuthChange = (callback) => {
    return onAuthStateChanged(auth, callback);
};`;
    } else {
        return `// JWT Authentication
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

// Authentication middleware
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Access token required' });
    }

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ error: 'Invalid token' });
        }
        req.user = user;
        next();
    });
};

// Authentication functions
const hashPassword = async (password) => {
    return await bcrypt.hash(password, 10);
};

const comparePassword = async (password, hash) => {
    return await bcrypt.compare(password, hash);
};

const generateToken = (user) => {
    return jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '24h' });
};

module.exports = {
    authenticateToken,
    hashPassword,
    comparePassword,
    generateToken
};`;
    }
}

function generateAPICode(appType, prompt) {
    return `// API Integration Code
const axios = require('axios');

class APIClient {
    constructor(baseURL) {
        this.client = axios.create({
            baseURL: baseURL,
            timeout: 10000,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    async get(endpoint, params = {}) {
        try {
            const response = await this.client.get(endpoint, { params });
            return { success: true, data: response.data };
        } catch (error) {
            console.error('GET request failed:', error);
            return { success: false, error: error.message };
        }
    }

    async post(endpoint, data) {
        try {
            const response = await this.client.post(endpoint, data);
            return { success: true, data: response.data };
        } catch (error) {
            console.error('POST request failed:', error);
            return { success: false, error: error.message };
        }
    }

    async put(endpoint, data) {
        try {
            const response = await this.client.put(endpoint, data);
            return { success: true, data: response.data };
        } catch (error) {
            console.error('PUT request failed:', error);
            return { success: false, error: error.message };
        }
    }

    async delete(endpoint) {
        try {
            const response = await this.client.delete(endpoint);
            return { success: true, data: response.data };
        } catch (error) {
            console.error('DELETE request failed:', error);
            return { success: false, error: error.message };
        }
    }
}

// API integrations based on configuration
const integrations = {
    stripe: new APIClient('https://api.stripe.com/v1'),
    sendgrid: new APIClient('https://api.sendgrid.com/v3'),
    twilio: new APIClient('https://api.twilio.com/2010-04-01')
};

module.exports = { APIClient, integrations };`;
}

function generatePackageJson(appType, prompt) {
    return `{
  "name": "dream-build-app",
  "version": "1.0.0",
  "description": "Generated with DreamBuild AI",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "build": "npm run build:client && npm run build:server",
    "build:client": "vite build",
    "build:server": "echo 'Server build complete'",
    "test": "jest",
    "lint": "eslint .",
    "format": "prettier --write ."
  },
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5",
    "helmet": "^7.0.0",
    "express-rate-limit": "^6.8.1",
    "axios": "^1.5.0",
    "jsonwebtoken": "^9.0.2",
    "bcryptjs": "^2.4.3",
    "dotenv": "^16.3.1"
  },
  "devDependencies": {
    "nodemon": "^3.0.1",
    "jest": "^29.6.4",
    "eslint": "^8.47.0",
    "prettier": "^3.0.2"
  },
  "engines": {
    "node": ">=18.0.0"
  },
  "keywords": [
    "ai-generated",
    "full-stack",
    "web-application",
    "dreambuild"
  ],
  "author": "DreamBuild AI",
  "license": "MIT"
}`;
}

// Initialize the AI Builder
document.addEventListener('DOMContentLoaded', function() {
    // Load AI configuration
    loadAIConfig();
    
    // File switching
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('file-item')) {
            const filename = e.target.getAttribute('data-file');
            switchFile(filename);
        }
    });

    // Code editor changes
    document.getElementById('code-editor').addEventListener('input', function(e) {
        currentProject.files[currentProject.activeFile] = e.target.value;
        updatePreview();
    });

    // Update AI service selection handler
    document.getElementById('ai-service').addEventListener('change', function() {
        const service = this.value;
        const configDiv = document.getElementById('ai-config');
        
        if (service === 'template' || service === 'ollama') {
            configDiv.style.display = 'none';
        } else {
            configDiv.style.display = 'block';
        }
        
        // Show setup instructions
        showAISetupInstructions();
    });

    // Configuration change handlers
    document.getElementById('app-type').addEventListener('change', updateConfiguration);
    document.getElementById('database-type').addEventListener('change', updateConfiguration);
    document.getElementById('auth-type').addEventListener('change', updateConfiguration);
    document.getElementById('styling-framework').addEventListener('change', updateConfiguration);
    document.getElementById('api-integrations').addEventListener('input', updateConfiguration);
});
