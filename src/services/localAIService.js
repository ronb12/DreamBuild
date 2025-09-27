// DreamBuild Local AI Service - Simplified and Fixed
// No API keys required - everything runs locally

import axios from 'axios'
import githubTemplateService from './githubTemplateService.js'

// Local AI Models Configuration
const LOCAL_AI_MODELS = {
  'codellama-7b': {
    name: 'CodeLlama 7B',
    type: 'Code Generation',
    baseURL: 'http://localhost:11434/api',
    model: 'codellama:7b',
    description: 'Fast and efficient code generation (7B parameters)',
    languages: ['python', 'javascript', 'java', 'cpp', 'go', 'rust', 'php', 'ruby'],
    strengths: ['speed', 'efficiency', 'general-purpose'],
    ram_required: '8GB'
  },
  'auto': {
    name: 'Auto Select',
    type: 'Auto Selection',
    baseURL: 'http://localhost:11434/api',
    model: 'auto',
    description: 'Automatically selects the best available model',
    languages: ['all'],
    strengths: ['smart-selection', 'availability'],
    ram_required: 'variable'
  }
}

// Template Categories
const TEMPLATE_CATEGORIES = {
  'web-apps': {
    name: 'Web Applications',
    description: 'Full-stack web applications',
    templates: [
      {
        id: 'react-dashboard',
        name: 'React Dashboard',
        description: 'Modern React dashboard with charts and analytics',
        category: 'web-apps',
        files: ['index.html', 'App.jsx', 'styles.css', 'package.json']
      },
      {
        id: 'ecommerce-store',
        name: 'E-commerce Store',
        description: 'Complete online store with cart and checkout',
        category: 'web-apps',
        files: ['index.html', 'App.jsx', 'styles.css', 'package.json']
      }
    ]
  },
  'mobile-apps': {
    name: 'Mobile Applications',
    description: 'React Native mobile applications',
    templates: [
      {
        id: 'todo-app',
        name: 'Todo App',
        description: 'Simple todo application with React Native',
        category: 'mobile-apps',
        files: ['App.js', 'components/TodoItem.js', 'styles.js']
      }
    ]
  }
}

class LocalAIService {
  constructor() {
    this.isHealthy = false
    this.modelHealth = {}
    this.availableModels = Object.keys(LOCAL_AI_MODELS)
    this.baseURL = 'http://localhost:11434/api'
    
    // Check if we're in production (HTTPS) or development (HTTP)
    this.isProduction = window.location.protocol === 'https:'
    this.isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
    
    if (this.isProduction && !this.isLocalhost) {
      // In production, don't try to connect to local AI to avoid CORS errors
      console.log('🌐 Production environment detected - skipping local AI detection')
      this.isHealthy = false
      return
    }
    
    console.log('🔍 Initializing local AI health monitoring...')
    this.checkHealth()
    
    // Check health every 30 seconds (only log if status changes)
    setInterval(() => {
      this.checkHealthQuiet()
    }, 30000)
  }

  // Check if local AI service is healthy
  async checkHealth() {
    // Skip health check in production to avoid CORS errors
    if (this.isProduction && !this.isLocalhost) {
      return
    }
    
    try {
      const response = await axios.get(`${this.baseURL}/tags`, {
        timeout: 3000
      })
      
      if (response.status === 200) {
        const wasHealthy = this.isHealthy
        this.isHealthy = true
        if (!wasHealthy) {
          console.log('✅ Local AI service is healthy')
        }
        
        // Update model health
        const models = response.data.models || []
        this.modelHealth = {}
        models.forEach(model => {
          this.modelHealth[model.name] = {
            isHealthy: true,
            size: model.size,
            modified_at: model.modified_at
          }
        })
      } else {
        const wasHealthy = this.isHealthy
        this.isHealthy = false
        if (wasHealthy) {
          console.log('⚠️ Local AI service is not responding')
        }
      }
    } catch (error) {
      const wasHealthy = this.isHealthy
      this.isHealthy = false
      
      // Handle different types of errors more gracefully
      if (error.code === 'ERR_NETWORK' || error.message.includes('CORS')) {
        // CORS or network error - expected in production
        if (!wasHealthy) {
          console.log('🔒 Local AI not accessible (CORS/Network) - using cloud AI')
        }
      } else if (error.code === 'ECONNREFUSED') {
        // Connection refused - Ollama not running
        if (!wasHealthy) {
          console.log('💻 Ollama not running locally - using cloud AI')
        }
      } else {
        // Other errors
        if (!wasHealthy) {
          console.log('⚠️ Local AI service not available:', error.message)
        }
      }
    }
  }

  // Quiet health check (only logs on status change)
  async checkHealthQuiet() {
    // Skip health check in production to avoid CORS errors
    if (this.isProduction && !this.isLocalhost) {
      return
    }
    
    try {
      const response = await axios.get(`${this.baseURL}/tags`, {
        timeout: 3000
      })
      
      if (response.status === 200) {
        const wasHealthy = this.isHealthy
        this.isHealthy = true
        
        // Update model health silently
        const models = response.data.models || []
        this.modelHealth = {}
        models.forEach(model => {
          this.modelHealth[model.name] = {
            isHealthy: true,
            size: model.size,
            modified_at: model.modified_at
          }
        })
      } else {
        this.isHealthy = false
      }
    } catch (error) {
      this.isHealthy = false
      // Silent fail for quiet check - no logging
    }
  }

  // Get available models
  getAvailableModels() {
    return Object.values(LOCAL_AI_MODELS)
  }

  // Get healthy models
  getHealthyModels() {
    return Object.keys(this.modelHealth).filter(model => this.modelHealth[model].isHealthy)
  }

  // Get template categories
  getTemplateCategories() {
    return TEMPLATE_CATEGORIES
  }

  // Get templates by category
  getTemplatesByCategory(category) {
    return TEMPLATE_CATEGORIES[category]?.templates || []
  }

  // Get all templates (local + GitHub)
  async getAllTemplates() {
    const localTemplates = []
    Object.values(TEMPLATE_CATEGORIES).forEach(category => {
      localTemplates.push(...category.templates)
    })
    
    // Get GitHub templates
    const githubTemplates = await githubTemplateService.getTrendingTemplates()
    
    // Transform GitHub repositories to template format
    const transformedGitHubTemplates = githubTemplates.map(repo => 
      githubTemplateService.transformRepositoryToTemplate(repo)
    )
    
    // Combine local and GitHub templates
    return [...localTemplates, ...transformedGitHubTemplates]
  }

  // Search templates (local + GitHub)
  async searchTemplates(query) {
    const localTemplates = []
    Object.values(TEMPLATE_CATEGORIES).forEach(category => {
      localTemplates.push(...category.templates)
    })
    
    // Search GitHub templates
    const githubResults = await githubTemplateService.searchTemplates(query)
    
    // Transform GitHub results to template format
    const transformedGitHubResults = githubResults.map(repo => 
      githubTemplateService.transformRepositoryToTemplate(repo)
    )
    
    // Combine results
    const allTemplates = [...localTemplates, ...transformedGitHubResults]
    
    return allTemplates.filter(template => 
      template.name.toLowerCase().includes(query.toLowerCase()) ||
      (template.description || '').toLowerCase().includes(query.toLowerCase())
    )
  }

  // Get popular templates (local + GitHub)
  async getPopularTemplates() {
    const localTemplates = []
    Object.values(TEMPLATE_CATEGORIES).forEach(category => {
      localTemplates.push(...category.templates)
    })
    
    // Get popular GitHub templates
    const githubPopular = await githubTemplateService.getPopularTemplates(5)
    
    // Transform GitHub results to template format
    const transformedGitHubPopular = githubPopular.map(repo => 
      githubTemplateService.transformRepositoryToTemplate(repo)
    )
    
    // Combine and sort by popularity
    const allTemplates = [...localTemplates, ...transformedGitHubPopular]
    return allTemplates
      .sort((a, b) => (b.popularity || 0) - (a.popularity || 0))
      .slice(0, 10)
  }

  // Generate template by ID
  async generateTemplateById(templateId, customizations = {}) {
    // Check if it's a GitHub template
    if (templateId.startsWith('github_')) {
      return await this.generateGitHubTemplate(templateId, customizations)
    }
    
    // Handle local templates
    const localTemplates = []
    Object.values(TEMPLATE_CATEGORIES).forEach(category => {
      localTemplates.push(...category.templates)
    })
    
    const template = localTemplates.find(t => t.id === templateId)
    
    if (!template) {
      throw new Error(`Template ${templateId} not found`)
    }

    return this.createTemplateFiles(template, customizations)
  }

  // Generate GitHub template
  async generateGitHubTemplate(templateId, customizations = {}) {
    try {
      console.log(`🚀 Generating GitHub template: ${templateId}`)
      
      const template = await githubTemplateService.getTemplateById(templateId)
      
      if (!template) {
        throw new Error(`GitHub template ${templateId} not found`)
      }

      // Create template files from GitHub repository
      const files = await this.createGitHubTemplateFiles(template, customizations)
      
      console.log(`✅ Generated ${Object.keys(files).length} files from GitHub template`)
      return files
      
    } catch (error) {
      console.error(`❌ Failed to generate GitHub template ${templateId}:`, error)
      throw error
    }
  }

  // Create files from GitHub template
  async createGitHubTemplateFiles(template, customizations = {}) {
    const files = {}
    
    try {
      // For GitHub templates, we'll create a basic structure
      // In a full implementation, you would clone the repository and extract files
      
      const { githubData } = template
      
      // Create basic project files
      files['README.md'] = `# ${template.name}

${template.description}

## GitHub Repository
- **Source**: [${githubData.fullName}](${githubData.htmlUrl})
- **Stars**: ${githubData.stargazersCount}
- **Language**: ${githubData.language || 'JavaScript'}

## Getting Started

This template is based on the GitHub repository: ${githubData.fullName}

### Installation
\`\`\`bash
git clone ${githubData.cloneUrl}
cd ${githubData.fullName}
npm install
\`\`\`

### Development
\`\`\`bash
npm start
\`\`\`

## Template Information
- **Type**: ${template.templateType}
- **Category**: ${template.category}
- **Tags**: ${template.tags.join(', ')}
- **Files**: ${template.fileCount}

## Customization
You can customize this template by modifying the files or using the AI prompt to generate additional features.
`

      // Create package.json based on template type
      files['package.json'] = this.createPackageJson(template, customizations)
      
      // Create main entry file based on template type
      files[this.getMainFileName(template)] = this.createMainFile(template, customizations)
      
      // Create basic HTML file if it's a web template
      if (template.templateType === 'react' || template.templateType === 'vue' || template.templateType === 'web') {
        files['index.html'] = this.createIndexHtml(template, customizations)
      }
      
      // Add customizations
      Object.entries(customizations).forEach(([key, value]) => {
        if (typeof value === 'string') {
          files[key] = value
        }
      })
      
      return files
      
    } catch (error) {
      console.error('Failed to create GitHub template files:', error)
      throw error
    }
  }

  // Create package.json for GitHub template
  createPackageJson(template, customizations = {}) {
    const basePackage = {
      name: template.name.toLowerCase().replace(/\s+/g, '-'),
      version: '1.0.0',
      description: template.description,
      main: this.getMainFileName(template),
      scripts: {
        start: 'npm run dev',
        dev: this.getDevScript(template),
        build: this.getBuildScript(template),
        test: 'echo "No tests specified" && exit 0'
      },
      keywords: template.tags,
      author: customizations.author || 'DreamBuild User',
      license: 'MIT',
      repository: {
        type: 'git',
        url: template.githubData.cloneUrl
      }
    }

    // Add dependencies based on template type
    basePackage.dependencies = this.getTemplateDependencies(template)
    basePackage.devDependencies = this.getTemplateDevDependencies(template)

    return JSON.stringify(basePackage, null, 2)
  }

  // Get main file name based on template type
  getMainFileName(template) {
    const mainFiles = {
      'react': 'src/App.jsx',
      'vue': 'src/main.js',
      'angular': 'src/main.ts',
      'nodejs': 'index.js',
      'python': 'main.py',
      'mobile': 'App.js',
      'web': 'index.js'
    }
    
    return mainFiles[template.templateType] || 'index.js'
  }

  // Get dev script based on template type
  getDevScript(template) {
    const devScripts = {
      'react': 'react-scripts start',
      'vue': 'vue-cli-service serve',
      'angular': 'ng serve',
      'nodejs': 'nodemon index.js',
      'python': 'python main.py',
      'mobile': 'expo start',
      'web': 'live-server'
    }
    
    return devScripts[template.templateType] || 'node index.js'
  }

  // Get build script based on template type
  getBuildScript(template) {
    const buildScripts = {
      'react': 'react-scripts build',
      'vue': 'vue-cli-service build',
      'angular': 'ng build',
      'nodejs': 'echo "No build step needed"',
      'python': 'echo "No build step needed"',
      'mobile': 'expo build',
      'web': 'echo "No build step needed"'
    }
    
    return buildScripts[template.templateType] || 'echo "No build step needed"'
  }

  // Get template dependencies
  getTemplateDependencies(template) {
    const dependencies = {
      'react': {
        'react': '^18.0.0',
        'react-dom': '^18.0.0'
      },
      'vue': {
        'vue': '^3.0.0'
      },
      'angular': {
        '@angular/core': '^15.0.0',
        '@angular/common': '^15.0.0'
      },
      'svelte': {
        'svelte': '^3.0.0'
      },
      'nodejs': {
        'express': '^4.18.0'
      },
      'python': {},
      'php': {},
      'go': {},
      'rust': {},
      'java': {},
      'mobile': {
        'react-native': '^0.70.0',
        'expo': '~47.0.0'
      },
      'api': {
        'express': '^4.18.0'
      },
      'dashboard': {
        'react': '^18.0.0',
        'react-dom': '^18.0.0'
      },
      'ecommerce': {
        'react': '^18.0.0',
        'react-dom': '^18.0.0'
      },
      'blog': {
        'next': '^13.0.0',
        'react': '^18.0.0'
      },
      'portfolio': {
        'react': '^18.0.0',
        'react-dom': '^18.0.0'
      },
      'landing': {
        'react': '^18.0.0',
        'react-dom': '^18.0.0'
      },
      'web': {}
    }
    
    return dependencies[template.templateType] || {}
  }

  // Get template dev dependencies
  getTemplateDevDependencies(template) {
    const devDependencies = {
      'react': {
        'react-scripts': '5.0.1'
      },
      'vue': {
        '@vue/cli-service': '^5.0.0'
      },
      'angular': {
        '@angular/cli': '^15.0.0'
      },
      'svelte': {
        'vite': '^4.0.0'
      },
      'nodejs': {
        'nodemon': '^2.0.0'
      },
      'python': {},
      'php': {},
      'go': {},
      'rust': {},
      'java': {},
      'mobile': {},
      'api': {
        'nodemon': '^2.0.0'
      },
      'dashboard': {
        'react-scripts': '5.0.1'
      },
      'ecommerce': {
        'react-scripts': '5.0.1'
      },
      'blog': {
        'next': '^13.0.0'
      },
      'portfolio': {
        'react-scripts': '5.0.1'
      },
      'landing': {
        'react-scripts': '5.0.1'
      },
      'web': {
        'live-server': '^1.2.0'
      }
    }
    
    return devDependencies[template.templateType] || {}
  }

  // Create main file content
  createMainFile(template, customizations = {}) {
    const mainFiles = {
      'react': `import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>${template.name}</h1>
        <p>${template.description}</p>
        <p>
          Template based on: <a href="${template.githubData.htmlUrl}">${template.githubData.fullName}</a>
        </p>
      </header>
    </div>
  );
}

export default App;`,
      'vue': `import { createApp } from 'vue';
import App from './App.vue';

createApp(App).mount('#app');`,
      'angular': `import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: \`
    <div class="app">
      <h1>${template.name}</h1>
      <p>${template.description}</p>
      <p>Template based on: <a href="${template.githubData.htmlUrl}">${template.githubData.fullName}</a></p>
    </div>
  \`,
  styles: []
})
export class AppComponent {
  title = '${template.name}';
}`,
      'svelte': `<script>
  export let name = '${template.name}';
</script>

<main>
  <h1>${template.name}</h1>
  <p>${template.description}</p>
  <p>Template based on: <a href="${template.githubData.htmlUrl}">${template.githubData.fullName}</a></p>
</main>`,
      'nodejs': `const express = require('express');
const app = express();
// PORT removed - not needed in browser code

app.get('/', (req, res) => {
  res.send(\`
    <h1>${template.name}</h1>
    <p>${template.description}</p>
    <p>Template based on: <a href="${template.githubData.htmlUrl}">${template.githubData.fullName}</a></p>
  \`);
});

app.listen(PORT, () => {

});`,
      'python': `from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html', 
                         title='${template.name}',
                         description='${template.description}',
                         github_url='${template.githubData.htmlUrl}')

if __name__ == '__main__':
    app.run(debug=True)`,
      'php': `<?php
echo "<h1>${template.name}</h1>";
echo "<p>${template.description}</p>";
echo "<p>Template based on: <a href='${template.githubData.htmlUrl}'>${template.githubData.fullName}</a></p>";
?>`,
      'go': `package main

import (
    "fmt"
    "net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "<h1>%s</h1><p>%s</p><p>Template based on: <a href='%s'>%s</a></p>", 
                "${template.name}", "${template.description}", "${template.githubData.htmlUrl}", "${template.githubData.fullName}")
}

func main() {
    http.HandleFunc("/", handler)
    http.ListenAndServe(":8080", nil)
}`,
      'rust': `use std::io;

fn main() {
    println!("Hello from {}!", "${template.name}");
    println!("{}", "${template.description}");
    println!("Template based on: {}", "${template.githubData.fullName}");
}`,
      'java': `public class Main {
    public static void main(String[] args) {
        System.out.println("${template.name}");
        System.out.println("${template.description}");
        System.out.println("Template based on: ${template.githubData.fullName}");
    }
}`,
      'api': `const express = require('express');
const app = express();
// PORT removed - not needed in browser code

app.use(express.json());

app.get('/api', (req, res) => {
  res.json({
    name: '${template.name}',
    description: '${template.description}',
    github: '${template.githubData.fullName}'
  });
});

app.listen(PORT, () => {

});`,
      'dashboard': `import React from 'react';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>${template.name}</h1>
        <p>${template.description}</p>
      </header>
      <main className="dashboard-content">
        <div className="stats-grid">
          <div className="stat-card">Users</div>
          <div className="stat-card">Revenue</div>
          <div className="stat-card">Orders</div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;`,
      'mobile': `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>${template.name}</Text>
      <Text style={styles.description}>${template.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
});`,
      'web': `// ${template.name}
// ${template.description}

// Template based on: ${template.githubData.fullName}
// Repository: ${template.githubData.htmlUrl}`
    }
    
    return mainFiles[template.templateType] || mainFiles['web']
  }

  // Create index.html
  createIndexHtml(template, customizations = {}) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${template.name}</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            margin: 0;
            padding: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            min-height: 100vh;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            text-align: center;
        }
        h1 {
            font-size: 3rem;
            margin-bottom: 1rem;
        }
        p {
            font-size: 1.2rem;
            margin-bottom: 2rem;
        }
        a {
            color: #fff;
            text-decoration: underline;
        }
        .github-info {
            background: rgba(255, 255, 255, 0.1);
            padding: 20px;
            border-radius: 10px;
            margin: 20px 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>${template.name}</h1>
        <p>${template.description}</p>
        
        <div class="github-info">
            <h3>GitHub Repository</h3>
            <p><strong>Source:</strong> <a href="${template.githubData.htmlUrl}">${template.githubData.fullName}</a></p>
            <p><strong>Stars:</strong> ${template.githubData.stargazersCount}</p>
            <p><strong>Language:</strong> ${template.githubData.language || 'JavaScript'}</p>
            <p><strong>Template Type:</strong> ${template.templateType}</p>
        </div>
        
        <p>🚀 Generated with DreamBuild's GitHub Template Integration</p>
    </div>
</body>
</html>`
  }

  // Create template files
  createTemplateFiles(template, customizations = {}) {
    const files = {}
    
    // Default files based on template
    switch (template.id) {
      case 'react-dashboard':
        files['index.html'] = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Dashboard</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div id="root"></div>
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="App.jsx"></script>
</body>
</html>`
        
        files['App.jsx'] = `import React, { useState } from 'react';

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

ReactDOM.render(<Dashboard />, document.getElementById('root'));`
        
        files['styles.css'] = `* {
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
}`

        files['package.json'] = `{
  "name": "react-dashboard",
  "version": "1.0.0",
  "description": "Modern React Dashboard",
  "main": "App.jsx",
  "scripts": {
    "start": "python -m http.server 8000",
    "dev": "python -m http.server 8000"
  },
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  },
  "keywords": ["react", "dashboard", "analytics"],
  "author": "DreamBuild",
  "license": "MIT"
}`
        break

      case 'todo-app':
        files['App.js'] = `import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';

export default function TodoApp() {
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
    <View style={styles.container}>
      <Text style={styles.title}>Todo App</Text>
      
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={setText}
          placeholder="Add a new todo..."
          onSubmitEditing={addTodo}
        />
        <TouchableOpacity style={styles.addButton} onPress={addTodo}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={[styles.todoItem, item.completed && styles.completedTodo]}>
            <TouchableOpacity
              style={styles.todoText}
              onPress={() => toggleTodo(item.id)}
            >
              <Text style={[styles.todoText, item.completed && styles.completedText]}>
                {item.text}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => deleteTodo(item.id)}
            >
              <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}`

        files['styles.js'] = `import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    backgroundColor: 'white',
    marginRight: 10,
  },
  addButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    justifyContent: 'center',
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  todoItem: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  completedTodo: {
    backgroundColor: '#f0f0f0',
  },
  todoText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
  deleteButton: {
    backgroundColor: '#FF3B30',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  deleteButtonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});`
        break

      default:
        // Fallback template
        files['index.html'] = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DreamBuild App</title>
</head>
<body>
    <h1>Welcome to DreamBuild!</h1>
    <p>Your application has been generated successfully.</p>
</body>
</html>`
    }

    return files
  }

  // Generate code using local AI or fallback
  async generateCode(prompt, context = {}) {
    console.log('🚀 Starting code generation for prompt:', prompt)
    
    try {
      // In production, skip local AI and use fallback directly
      if (this.isProduction && !this.isLocalhost) {
        console.log('🌐 Production environment - using template fallback')
        return this.createFallbackResponse(prompt, context)
      }
      
      // Try to use local AI if available
      if (this.isHealthy) {
        return await this.generateWithLocalAI(prompt, context)
      } else {
        console.log('⚠️ Local AI not available, using template fallback')
        return this.createFallbackResponse(prompt, context)
      }
    } catch (error) {
      console.error('❌ Code generation failed:', error)
      return this.createFallbackResponse(prompt, context)
    }
  }

  // Generate with local AI
  async generateWithLocalAI(prompt, context = {}) {
    const model = this.getBestAvailableModel()
    const systemPrompt = this.createSystemPrompt(context)
    
    const requestBody = {
      model: model,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: prompt }
      ],
      stream: false,
      options: {
        temperature: 0.7,
        top_p: 0.9,
        max_tokens: 4000
      }
    }

    try {
      const response = await axios.post(`${this.baseURL}/chat`, requestBody, {
        timeout: 30000,
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if (response.data && response.data.message && response.data.message.content) {
        const content = response.data.message.content
        return this.parseAIResponse(content, prompt)
      } else {
        throw new Error('Invalid response from local AI')
      }
    } catch (error) {
      console.error('❌ Local AI generation failed:', error)
      throw error
    }
  }

  // Get best available model
  getBestAvailableModel() {
    const healthyModels = this.getHealthyModels()
    if (healthyModels.includes('codellama:7b')) return 'codellama:7b'
    if (healthyModels.includes('codellama:13b')) return 'codellama:13b'
    if (healthyModels.includes('codellama:34b')) return 'codellama:34b'
    return healthyModels[0] || 'codellama:7b'
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
  parseAIResponse(content, originalPrompt) {
    try {
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

  // Check if the prompt is a general question (not a code generation request)
  isGeneralQuestion(prompt) {
    const lowerPrompt = prompt.toLowerCase()
    
    // General question indicators
    const generalQuestionKeywords = [
      'what is', 'what are', 'what was', 'what will', 'what does', 'what do',
      'how is', 'how are', 'how was', 'how will', 'how does', 'how do',
      'when is', 'when are', 'when was', 'when will', 'when does', 'when do',
      'where is', 'where are', 'where was', 'where will', 'where does', 'where do',
      'why is', 'why are', 'why was', 'why will', 'why does', 'why do',
      'who is', 'who are', 'who was', 'who will', 'who does', 'who do',
      'weather', 'temperature', 'forecast', 'climate',
      'news', 'current events', 'today', 'recent',
      'cook', 'recipe', 'food', 'ingredients',
      'travel', 'vacation', 'destination', 'hotel',
      'health', 'medicine', 'exercise', 'fitness',
      'education', 'learn', 'study', 'school',
      'science', 'research', 'study', 'theory',
      'history', 'historical', 'past', 'ancient',
      'business', 'finance', 'economy', 'market',
      'sports', 'game', 'team', 'player',
      'entertainment', 'movie', 'music', 'book'
    ]
    
    // Code generation indicators
    const codeGenerationKeywords = [
      'build', 'create', 'make', 'develop', 'generate', 'code',
      'app', 'application', 'website', 'web app', 'mobile app',
      'component', 'function', 'class', 'module', 'library',
      'api', 'database', 'server', 'backend', 'frontend',
      'react', 'vue', 'angular', 'node', 'python', 'javascript',
      'html', 'css', 'js', 'ts', 'jsx', 'tsx',
      'todo', 'calculator', 'dashboard', 'portfolio', 'blog',
      'ecommerce', 'shop', 'store', 'landing page'
    ]
    
    // Check for general question patterns
    const hasGeneralKeywords = generalQuestionKeywords.some(keyword => 
      lowerPrompt.includes(keyword)
    )
    
    // Check for code generation patterns
    const hasCodeKeywords = codeGenerationKeywords.some(keyword => 
      lowerPrompt.includes(keyword)
    )
    
    // If it has code keywords, it's definitely a code generation request
    if (hasCodeKeywords) {
      return false
    }
    
    // If it has general keywords, it's likely a general question
    if (hasGeneralKeywords) {
      return true
    }
    
    // If it starts with question words, it's likely a general question
    if (lowerPrompt.startsWith('what') || lowerPrompt.startsWith('how') || 
        lowerPrompt.startsWith('when') || lowerPrompt.startsWith('where') || 
        lowerPrompt.startsWith('why') || lowerPrompt.startsWith('who')) {
      return true
    }
    
    return false
  }

  // Create conversational response for general questions
  createConversationalResponse(prompt, context = {}) {
    const lowerPrompt = prompt.toLowerCase()
    
    // Weather questions
    if (lowerPrompt.includes('weather') || lowerPrompt.includes('temperature') || lowerPrompt.includes('forecast')) {
      return {
        type: 'conversational_response',
        message: `I'd be happy to help with weather information for your location. However, I don't have access to real-time weather data. For current weather conditions, I recommend checking a reliable weather service like Weather.com, AccuWeather, or your local weather app.`,
        summary: 'Weather information request',
        details: [
          'Weather data requires real-time access to meteorological services',
          'Recommended sources: Weather.com, AccuWeather, local weather apps',
          'For accurate forecasts, use official weather services'
        ],
        sources: ['Weather.com', 'AccuWeather', 'National Weather Service'],
        prompt: prompt,
        generatedAt: new Date().toISOString(),
        context: context
      }
    }
    
    // Cooking questions
    if (lowerPrompt.includes('cook') || lowerPrompt.includes('recipe') || lowerPrompt.includes('food')) {
      return {
        type: 'conversational_response',
        message: `I can help with cooking questions! For recipes and cooking techniques, I recommend checking reliable cooking websites like AllRecipes.com, Food Network, or Serious Eats. These sources provide tested recipes and expert cooking advice.`,
        summary: 'Cooking and recipe information',
        details: [
          'Cooking requires specific recipes and techniques',
          'Recommended sources: AllRecipes.com, Food Network, Serious Eats',
          'Always follow food safety guidelines when cooking'
        ],
        sources: ['AllRecipes.com', 'Food Network', 'Serious Eats'],
        prompt: prompt,
        generatedAt: new Date().toISOString(),
        context: context
      }
    }
    
    // Geography questions
    if (lowerPrompt.includes('capital') || lowerPrompt.includes('country') || lowerPrompt.includes('city')) {
      return {
        type: 'conversational_response',
        message: `I can help with geography questions! For accurate and up-to-date geographical information, I recommend checking reliable sources like National Geographic, World Atlas, or official government websites.`,
        summary: 'Geography information',
        details: [
          'Geographical information changes over time',
          'Recommended sources: National Geographic, World Atlas, government sites',
          'For current data, check official sources'
        ],
        sources: ['National Geographic', 'World Atlas', 'Government websites'],
        prompt: prompt,
        generatedAt: new Date().toISOString(),
        context: context
      }
    }
    
    // General information questions
    return {
      type: 'conversational_response',
      message: `I understand you're asking about "${prompt}". While I'm primarily designed for code generation and development tasks, I can provide general information when I have access to current data. For the most accurate and up-to-date information, I recommend checking reliable sources or using a general-purpose AI assistant.`,
      summary: 'General information request',
      details: [
        'This appears to be a general knowledge question',
        'For current information, check reliable sources',
        'I can help with code generation and development tasks'
      ],
      sources: ['Wikipedia', 'Reliable news sources', 'Official websites'],
      prompt: prompt,
      generatedAt: new Date().toISOString(),
      context: context
    }
  }

  // Create fallback response
  createFallbackResponse(prompt, context = {}) {
    console.log('🔄 Creating fallback response for prompt:', prompt)
    
    // Check if this is a general question (not a code generation request)
    if (this.isGeneralQuestion(prompt)) {
      console.log('❓ General question detected, providing conversational response...')
      return this.createConversationalResponse(prompt, context)
    }
    
    // Analyze prompt to determine template
    const lowerPrompt = prompt.toLowerCase()
    
    if (lowerPrompt.includes('dashboard') || lowerPrompt.includes('analytics')) {
      return this.generateTemplateById('react-dashboard', context)
    } else if (lowerPrompt.includes('todo') || lowerPrompt.includes('task')) {
      return this.generateTemplateById('todo-app', context)
    } else if (lowerPrompt.includes('ecommerce') || lowerPrompt.includes('store') || lowerPrompt.includes('shop')) {
      return this.generateTemplateById('ecommerce-store', context)
    } else {
      // Default web app
      return {
        'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DreamBuild App</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 2rem;
            line-height: 1.6;
        }
        .header {
            text-align: center;
            margin-bottom: 2rem;
        }
        .content {
            background: #f8f9fa;
            padding: 2rem;
            border-radius: 8px;
            border: 1px solid #e9ecef;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>Welcome to Your DreamBuild App!</h1>
        <p>Generated based on: "${prompt}"</p>
    </div>
    
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
</body>
</html>`,
        'styles.css': `/* Additional styles for your DreamBuild app */

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
}

.button {
    background: #007bff;
    color: white;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;
}

.button:hover {
    background: #0056b3;
}

.card {
    background: white;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    margin-bottom: 1rem;
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
  }
}

// Export singleton instance
export default new LocalAIService()
