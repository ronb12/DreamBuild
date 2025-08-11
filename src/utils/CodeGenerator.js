// Code Generator Utility for LocalAI System
class CodeGenerator {
  constructor() {
    this.templates = new Map()
    this.loadTemplates()
  }

  loadTemplates() {
    // React Component Templates
    this.templates.set('react-component', {
      basic: `import React from 'react'

function {{componentName}}() {
  return (
    <div className="{{componentName.toLowerCase()}}-container">
      <h2>{{componentName}}</h2>
      <p>This is a {{componentName}} component.</p>
    </div>
  )
}

export default {{componentName}}`,
      
      withState: `import React, { useState } from 'react'

function {{componentName}}() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleAction = () => {
    setLoading(true)
    // Add your logic here
    setLoading(false)
  }

  return (
    <div className="{{componentName.toLowerCase()}}-container">
      <h2>{{componentName}}</h2>
      {loading ? <p>Loading...</p> : <p>Ready</p>}
      <button onClick={handleAction}>Action</button>
    </div>
  )
}

export default {{componentName}}`
    })

    // API Service Templates
    this.templates.set('api-service', {
      basic: `class {{serviceName}}Service {
  constructor() {
    this.baseURL = process.env.REACT_APP_API_URL || 'http://localhost:3001'
  }

  async {{methodName}}(data) {
    try {
      const response = await fetch(\`\${this.baseURL}/{{endpoint}}\`, {
        method: '{{httpMethod}}',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
      return await response.json()
    } catch (error) {
      console.error('Error:', error)
      throw error
    }
  }
}

export default new {{serviceName}}Service()`
    })

    // Database Model Templates
    this.templates.set('database-model', {
      basic: `import mongoose from 'mongoose'

const {{modelName}}Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

export default mongoose.model('{{modelName}}', {{modelName}}Schema)`
    })
  }

  generateCode(templateType, templateName, variables) {
    const template = this.templates.get(templateType)?.get(templateName) || 
                   this.templates.get(templateType)?.basic
    
    if (!template) {
      return '// Template not found'
    }

    let code = template
    Object.entries(variables).forEach(([key, value]) => {
      const regex = new RegExp(`{{${key}}}`, 'g')
      code = code.replace(regex, value)
    })

    return code
  }

  generateProjectStructure(projectName, framework, features) {
    const structure = {
      name: projectName,
      framework,
      files: [],
      dependencies: {}
    }

    if (framework === 'react') {
      structure.files = [
        'package.json',
        'public/index.html',
        'src/index.js',
        'src/App.js',
        'src/components/',
        'src/pages/',
        'src/utils/',
        'src/services/',
        'README.md'
      ]
      
      structure.dependencies = {
        react: '^18.0.0',
        'react-dom': '^18.0.0',
        'react-router-dom': '^6.0.0'
      }
    }

    if (features.includes('authentication')) {
      structure.files.push('src/components/Login.js', 'src/components/Register.js')
    }

    if (features.includes('database')) {
      structure.files.push('src/services/api.js', 'src/models/')
    }

    return structure
  }
}

export default new CodeGenerator()
