// DreamBuild Code Injection Service
// Handles injecting AI-generated code into the editor and creating files

class CodeInjectionService {
  constructor() {
    this.isInitialized = false
    this.codeEditor = null
    this.fileManager = null
    this.preview = null
    
    console.log('🔧 Code Injection Service initialized')
  }

  // Initialize the service with editor components
  initialize(components) {
    this.codeEditor = components.codeEditor
    this.fileManager = components.fileManager
    this.preview = components.preview
    this.isInitialized = true
    
    console.log('✅ Code Injection Service initialized with components')
  }

  // Parse AI response and extract code files
  parseAIResponse(response) {
    console.log('🔍 Parsing AI response for code injection...')
    
    if (!response || !response.files) {
      console.log('⚠️ No files found in AI response')
      return null
    }

    const files = {}
    const fileEntries = Object.entries(response.files)

    fileEntries.forEach(([filename, content]) => {
      // Clean up the filename
      const cleanFilename = filename.replace(/^\/+/, '') // Remove leading slashes
      
      // Determine file type and extension
      let finalFilename = cleanFilename
      if (!finalFilename.includes('.')) {
        // Add appropriate extension based on content
        if (content.includes('<!DOCTYPE html>') || content.includes('<html>')) {
          finalFilename = `${finalFilename}.html`
        } else if (content.includes('import React') || content.includes('jsx')) {
          finalFilename = `${finalFilename}.jsx`
        } else if (content.includes('function') || content.includes('const') || content.includes('let')) {
          finalFilename = `${finalFilename}.js`
        } else if (content.includes('{') && content.includes('background') || content.includes('color')) {
          finalFilename = `${finalFilename}.css`
        }
      }

      files[finalFilename] = content
      console.log(`📄 Parsed file: ${finalFilename} (${content.length} characters)`)
    })

    return files
  }

  // Inject code into the editor
  async injectCodeIntoEditor(files) {
    if (!this.isInitialized || !this.codeEditor) {
      console.log('⚠️ Code Injection Service not initialized or editor not available')
      return false
    }

    console.log('💉 Injecting code into editor...')

    try {
      // Get the main file (usually index.html or the first file)
      const mainFile = this.getMainFile(files)
      
      if (mainFile) {
        console.log(`📝 Injecting main file: ${mainFile.filename}`)
        
        // Inject the main file content into the code editor
        await this.injectIntoCodeEditor(mainFile.content)
        
        // Update file manager with all files
        await this.updateFileManager(files)
        
        console.log('✅ Code injection completed successfully')
        return true
      } else {
        console.log('⚠️ No main file found to inject')
        return false
      }
    } catch (error) {
      console.error('❌ Code injection failed:', error)
      return false
    }
  }

  // Get the main file from the generated files
  getMainFile(files) {
    const fileEntries = Object.entries(files)
    
    // Priority order for main file selection
    const priorities = [
      'index.html',
      'App.jsx',
      'App.js',
      'main.js',
      'index.js',
      'game.html',
      'app.html'
    ]

    // First, try to find a file by priority
    for (const priority of priorities) {
      const file = fileEntries.find(([filename]) => 
        filename.toLowerCase().includes(priority.toLowerCase())
      )
      if (file) {
        return { filename: file[0], content: file[1] }
      }
    }

    // If no priority file found, return the first file
    if (fileEntries.length > 0) {
      const [filename, content] = fileEntries[0]
      return { filename, content }
    }

    return null
  }

  // Inject content into the code editor
  async injectIntoCodeEditor(content) {
    try {
      // Try to find and update the code editor
      const editorElement = document.querySelector('[data-testid="code-editor"]')
      if (editorElement) {
        // Look for a textarea or input within the editor
        const textarea = editorElement.querySelector('textarea')
        if (textarea) {
          textarea.value = content
          textarea.dispatchEvent(new Event('input', { bubbles: true }))
          console.log('✅ Content injected into code editor textarea')
          return true
        }
      }

      // Alternative: try to find any code editor in the page
      const codeEditors = document.querySelectorAll('textarea, input[type="text"], .code-editor, .editor')
      for (const editor of codeEditors) {
        if (editor.offsetParent !== null) { // Only visible editors
          editor.value = content
          editor.dispatchEvent(new Event('input', { bubbles: true }))
          console.log('✅ Content injected into alternative editor')
          return true
        }
      }

      console.log('⚠️ No suitable code editor found for injection')
      return false
    } catch (error) {
      console.error('❌ Failed to inject into code editor:', error)
      return false
    }
  }

  // Update file manager with generated files
  async updateFileManager(files) {
    console.log('📁 Updating file manager with generated files...')
    
    // Create a visual representation of the files
    const fileList = Object.entries(files).map(([filename, content]) => ({
      name: filename,
      content: content,
      type: this.getFileType(filename),
      size: content.length
    }))

    // Show files in a temporary display or update the file manager
    this.displayGeneratedFiles(fileList)
    
    return true
  }

  // Get file type based on extension
  getFileType(filename) {
    const ext = filename.split('.').pop().toLowerCase()
    const typeMap = {
      'html': 'HTML',
      'js': 'JavaScript',
      'jsx': 'React',
      'css': 'CSS',
      'json': 'JSON',
      'md': 'Markdown',
      'txt': 'Text'
    }
    return typeMap[ext] || 'File'
  }

  // Display generated files
  displayGeneratedFiles(files) {
    // Create a temporary display of generated files
    const existingDisplay = document.querySelector('.generated-files-display')
    if (existingDisplay) {
      existingDisplay.remove()
    }

    const display = document.createElement('div')
    display.className = 'generated-files-display'
    display.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: #1a1a1a;
      border: 1px solid #333;
      border-radius: 8px;
      padding: 16px;
      max-width: 300px;
      max-height: 400px;
      overflow-y: auto;
      z-index: 1000;
      color: white;
      font-family: monospace;
      font-size: 12px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    `

    const title = document.createElement('div')
    title.textContent = '📁 Generated Files'
    title.style.cssText = `
      font-weight: bold;
      margin-bottom: 12px;
      color: #4CAF50;
      border-bottom: 1px solid #333;
      padding-bottom: 8px;
    `
    display.appendChild(title)

    files.forEach(file => {
      const fileItem = document.createElement('div')
      fileItem.style.cssText = `
        padding: 8px;
        margin: 4px 0;
        background: #2a2a2a;
        border-radius: 4px;
        cursor: pointer;
        transition: background 0.2s;
      `
      
      fileItem.innerHTML = `
        <div style="color: #FFD700; font-weight: bold;">${file.name}</div>
        <div style="color: #888; font-size: 10px;">${file.type} • ${file.size} chars</div>
      `
      
      fileItem.addEventListener('click', () => {
        this.injectIntoCodeEditor(file.content)
        display.remove()
      })
      
      fileItem.addEventListener('mouseenter', () => {
        fileItem.style.background = '#3a3a3a'
      })
      
      fileItem.addEventListener('mouseleave', () => {
        fileItem.style.background = '#2a2a2a'
      })
      
      display.appendChild(fileItem)
    })

    const closeButton = document.createElement('button')
    closeButton.textContent = '✕'
    closeButton.style.cssText = `
      position: absolute;
      top: 8px;
      right: 8px;
      background: none;
      border: none;
      color: #888;
      cursor: pointer;
      font-size: 14px;
    `
    closeButton.addEventListener('click', () => display.remove())
    display.appendChild(closeButton)

    document.body.appendChild(display)

    // Auto-remove after 10 seconds
    setTimeout(() => {
      if (display.parentNode) {
        display.remove()
      }
    }, 10000)

    console.log(`📁 Displayed ${files.length} generated files`)
  }

  // Create and download files
  async createAndDownloadFiles(files) {
    console.log('💾 Creating and downloading files...')
    
    try {
      // Create a zip-like structure for download
      const zipData = {}
      Object.entries(files).forEach(([filename, content]) => {
        zipData[filename] = content
      })

      // Create a downloadable file
      const dataStr = JSON.stringify(zipData, null, 2)
      const dataBlob = new Blob([dataStr], { type: 'application/json' })
      
      const link = document.createElement('a')
      link.href = URL.createObjectURL(dataBlob)
      link.download = 'dreambuild-generated-code.json'
      link.click()
      
      console.log('✅ Files created and downloaded')
      return true
    } catch (error) {
      console.error('❌ Failed to create and download files:', error)
      return false
    }
  }

  // Get service status
  getStatus() {
    return {
      initialized: this.isInitialized,
      hasCodeEditor: !!this.codeEditor,
      hasFileManager: !!this.fileManager,
      hasPreview: !!this.preview
    }
  }
}

// Create singleton instance
const codeInjectionService = new CodeInjectionService()

export default codeInjectionService

