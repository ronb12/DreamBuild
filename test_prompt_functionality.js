// Test DreamBuild Prompt-to-Code Functionality
console.log('🧪 Testing DreamBuild AI Code Generation...\n')

// Mock the AI services for testing
class MockAdvancedAI {
  constructor() {
    this.isInitialized = true
    this.knowledgeBase = new Map()
    this.patterns = new Map()
  }

  async generateCode(prompt, language, context = {}) {
    console.log(`📝 Prompt: "${prompt}"`)
    console.log(`🔧 Language: ${language}`)
    console.log(`⚙️ Context:`, context)
    
    // Analyze prompt
    const analysis = this.analyzePrompt(prompt, language, context)
    console.log(`🔍 Analysis:`, analysis)
    
    // Generate code based on prompt
    const code = this.generateCodeFromPrompt(prompt, language, analysis)
    console.log(`💻 Generated Code:\n${code}`)
    
    return {
      code,
      analysis,
      suggestions: this.generateSuggestions(code, language),
      metadata: {
        language,
        complexity: analysis.complexity,
        patterns: analysis.patterns,
        timestamp: new Date().toISOString(),
      },
    }
  }

  analyzePrompt(prompt, language, context) {
    const lowerPrompt = prompt.toLowerCase()
    
    return {
      intent: this.extractIntent(lowerPrompt),
      complexity: this.assessComplexity(lowerPrompt),
      patterns: this.identifyPatterns(lowerPrompt),
      requirements: this.extractRequirements(lowerPrompt),
      language,
      context,
    }
  }

  extractIntent(prompt) {
    if (prompt.includes('create') || prompt.includes('build')) return 'create'
    if (prompt.includes('fix') || prompt.includes('debug')) return 'fix'
    if (prompt.includes('optimize') || prompt.includes('improve')) return 'optimize'
    return 'create'
  }

  assessComplexity(prompt) {
    if (prompt.includes('simple') || prompt.includes('basic')) return 'low'
    if (prompt.includes('complex') || prompt.includes('advanced')) return 'high'
    return 'medium'
  }

  identifyPatterns(prompt) {
    const patterns = []
    if (prompt.includes('component') || prompt.includes('ui')) patterns.push('component')
    if (prompt.includes('api') || prompt.includes('endpoint')) patterns.push('api')
    if (prompt.includes('database') || prompt.includes('model')) patterns.push('data-model')
    if (prompt.includes('auth') || prompt.includes('login')) patterns.push('authentication')
    return patterns
  }

  extractRequirements(prompt) {
    const requirements = []
    if (prompt.includes('responsive')) requirements.push('responsive-design')
    if (prompt.includes('mobile')) requirements.push('mobile-support')
    if (prompt.includes('real-time')) requirements.push('real-time')
    if (prompt.includes('secure')) requirements.push('security')
    return requirements
  }

  generateCodeFromPrompt(prompt, language, analysis) {
    const { patterns, complexity } = analysis
    
    if (language === 'javascript') {
      return this.generateJavaScriptCode(prompt, patterns, complexity)
    } else if (language === 'python') {
      return this.generatePythonCode(prompt, patterns, complexity)
    } else if (language === 'java') {
      return this.generateJavaCode(prompt, patterns, complexity)
    }
    
    return `// Generated ${language} code\nconsole.log("Hello, World!");`
  }

  generateJavaScriptCode(prompt, patterns, complexity) {
    if (patterns.includes('component')) {
      return `import React from 'react';

const ${this.extractComponentName(prompt)} = () => {
  return (
    <div className="${this.extractClassName(prompt)}">
      <h1>${this.extractTitle(prompt)}</h1>
      <p>Generated from prompt: "${prompt}"</p>
    </div>
  );
};

export default ${this.extractComponentName(prompt)};`
    } else if (patterns.includes('api')) {
      return `const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.json({ 
    message: 'Hello from ${this.extractTitle(prompt)}',
    prompt: '${prompt}'
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});`
    } else {
      return `// Generated JavaScript code from prompt: "${prompt}"
console.log("Hello, World!");

function ${this.extractFunctionName(prompt)}() {
  return "Generated from: ${prompt}";
}

export { ${this.extractFunctionName(prompt)} };`
    }
  }

  generatePythonCode(prompt, patterns, complexity) {
    if (patterns.includes('api')) {
      return `from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Hello from ${this.extractTitle(prompt)}", "prompt": "${prompt}"}

@app.get("/api/hello")
def read_hello():
    return {"message": "Generated from prompt: ${prompt}"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)`
    } else {
      return `# Generated Python code from prompt: "${prompt}"
def ${this.extractFunctionName(prompt)}():
    """Generated from prompt: ${prompt}"""
    return f"Hello from {${this.extractFunctionName(prompt)}}"

if __name__ == "__main__":
    print(${this.extractFunctionName(prompt)}())`
    }
  }

  generateJavaCode(prompt, patterns, complexity) {
    if (patterns.includes('api')) {
      return `import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}

@RestController
class HelloController {
    @GetMapping("/api/hello")
    public String hello() {
        return "Hello from ${this.extractTitle(prompt)} - Generated from: ${prompt}";
    }
}`
    } else {
      return `// Generated Java code from prompt: "${prompt}"
public class ${this.extractClassName(prompt)} {
    public static void main(String[] args) {
        System.out.println("Hello from ${this.extractTitle(prompt)}");
    }
    
    public static String ${this.extractFunctionName(prompt)}() {
        return "Generated from prompt: ${prompt}";
    }
}`
    }
  }

  extractComponentName(prompt) {
    const match = prompt.match(/(?:create|build|make)\s+(?:a\s+)?(\w+)/i)
    return match ? match[1].charAt(0).toUpperCase() + match[1].slice(1) + 'Component' : 'ExampleComponent'
  }

  extractClassName(prompt) {
    const match = prompt.match(/(?:create|build|make)\s+(?:a\s+)?(\w+)/i)
    return match ? match[1].charAt(0).toUpperCase() + match[1].slice(1) : 'Example'
  }

  extractFunctionName(prompt) {
    const match = prompt.match(/(?:create|build|make)\s+(?:a\s+)?(\w+)/i)
    return match ? match[1].toLowerCase() : 'example'
  }

  extractTitle(prompt) {
    const match = prompt.match(/(?:create|build|make)\s+(?:a\s+)?(.+?)(?:\s+(?:component|function|class|api|app))?$/i)
    return match ? match[1].trim() : 'Generated Code'
  }

  generateSuggestions(code, language) {
    const suggestions = []
    
    if (language === 'javascript') {
      if (code.includes('var ')) {
        suggestions.push({ text: 'Consider using const or let instead of var', type: 'refactor' })
      }
      if (code.includes('function(') && !code.includes('=>')) {
        suggestions.push({ text: 'Consider using arrow functions for better readability', type: 'refactor' })
      }
    }
    
    return suggestions
  }
}

// Test the functionality
async function testPromptFunctionality() {
  const ai = new MockAdvancedAI()
  
  const testPrompts = [
    {
      prompt: 'Create a React component for a user profile card',
      language: 'javascript',
      context: { complexity: 'medium', includeComments: true }
    },
    {
      prompt: 'Build a Python API endpoint for user authentication',
      language: 'python',
      context: { complexity: 'high', includeComments: true }
    },
    {
      prompt: 'Create a Java class for a bank account with deposit and withdraw methods',
      language: 'java',
      context: { complexity: 'medium', includeComments: true }
    },
    {
      prompt: 'Build a simple JavaScript function to calculate fibonacci numbers',
      language: 'javascript',
      context: { complexity: 'low', includeComments: true }
    }
  ]

  console.log('🚀 Testing Multiple Prompts...\n')
  
  for (let i = 0; i < testPrompts.length; i++) {
    const test = testPrompts[i]
    console.log(`\n${'='.repeat(60)}`)
    console.log(`🧪 Test ${i + 1}/${testPrompts.length}`)
    console.log(`${'='.repeat(60)}`)
    
    try {
      const result = await ai.generateCode(test.prompt, test.language, test.context)
      
      console.log(`\n✅ Success! Generated ${result.code.split('\n').length} lines of code`)
      console.log(`📊 Complexity: ${result.metadata.complexity}`)
      console.log(`🔧 Patterns: ${result.metadata.patterns.join(', ') || 'None'}`)
      console.log(`💡 Suggestions: ${result.suggestions.length}`)
      
      if (result.suggestions.length > 0) {
        console.log(`\n💡 Suggestions:`)
        result.suggestions.forEach((suggestion, index) => {
          console.log(`   ${index + 1}. ${suggestion.text}`)
        })
      }
      
    } catch (error) {
      console.error(`❌ Test ${i + 1} failed:`, error.message)
    }
  }
  
  console.log(`\n${'='.repeat(60)}`)
  console.log('🎉 Prompt-to-Code Functionality Test Complete!')
  console.log(`${'='.repeat(60)}`)
}

// Run the test
testPromptFunctionality().catch(console.error)


