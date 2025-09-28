// src/services/aiCodeIntelligenceService.js

class AICodeIntelligenceService {
  constructor() {
    this.codeCompletionCache = new Map();
    this.errorDetectionCache = new Map();
    this.symbolIndex = new Map();
    this.languageServers = new Map();
    this.isInitialized = false;
  }

  async initialize() {
    if (this.isInitialized) return;
    
    console.log('🧠 Initializing AI Code Intelligence Service...');
    
    // Initialize language servers for different file types
    this.languageServers.set('javascript', {
      name: 'JavaScript Language Server',
      capabilities: ['completion', 'diagnostics', 'hover', 'definition', 'references'],
      status: 'ready'
    });
    
    this.languageServers.set('typescript', {
      name: 'TypeScript Language Server',
      capabilities: ['completion', 'diagnostics', 'hover', 'definition', 'references', 'rename'],
      status: 'ready'
    });
    
    this.languageServers.set('python', {
      name: 'Python Language Server',
      capabilities: ['completion', 'diagnostics', 'hover', 'definition', 'references'],
      status: 'ready'
    });
    
    this.languageServers.set('html', {
      name: 'HTML Language Server',
      capabilities: ['completion', 'diagnostics', 'hover'],
      status: 'ready'
    });
    
    this.languageServers.set('css', {
      name: 'CSS Language Server',
      capabilities: ['completion', 'diagnostics', 'hover'],
      status: 'ready'
    });
    
    this.isInitialized = true;
    console.log('✅ AI Code Intelligence Service initialized');
  }

  // Intelligent Code Completion
  async getCodeCompletion(filePath, content, position, language) {
    const cacheKey = `${filePath}:${position.line}:${position.character}`;
    
    if (this.codeCompletionCache.has(cacheKey)) {
      return this.codeCompletionCache.get(cacheKey);
    }

    try {
      const completions = await this.generateCompletions(content, position, language);
      this.codeCompletionCache.set(cacheKey, completions);
      return completions;
    } catch (error) {
      console.error('Error generating code completion:', error);
      return this.getFallbackCompletions(language);
    }
  }

  async generateCompletions(content, position, language) {
    const lines = content.split('\n');
    const currentLine = lines[position.line] || '';
    const beforeCursor = currentLine.substring(0, position.character);
    
    // AI-powered completion suggestions based on context
    const suggestions = [];
    
    // Language-specific completions
    switch (language) {
      case 'javascript':
      case 'typescript':
        suggestions.push(...this.getJavaScriptCompletions(beforeCursor, content, position));
        break;
      case 'python':
        suggestions.push(...this.getPythonCompletions(beforeCursor, content, position));
        break;
      case 'html':
        suggestions.push(...this.getHTMLCompletions(beforeCursor, content, position));
        break;
      case 'css':
        suggestions.push(...this.getCSSCompletions(beforeCursor, content, position));
        break;
      default:
        suggestions.push(...this.getGenericCompletions(beforeCursor, content, position));
    }
    
    return suggestions.slice(0, 10); // Limit to 10 suggestions
  }

  getJavaScriptCompletions(beforeCursor, content, position) {
    const suggestions = [];
    
    // Common JavaScript patterns
    if (beforeCursor.includes('console.')) {
      suggestions.push(
        { label: 'log', kind: 'method', detail: 'console.log()', insertText: 'log($1)' },
        { label: 'error', kind: 'method', detail: 'console.error()', insertText: 'error($1)' },
        { label: 'warn', kind: 'method', detail: 'console.warn()', insertText: 'warn($1)' },
        { label: 'info', kind: 'method', detail: 'console.info()', insertText: 'info($1)' }
      );
    }
    
    if (beforeCursor.includes('document.')) {
      suggestions.push(
        { label: 'getElementById', kind: 'method', detail: 'document.getElementById()', insertText: 'getElementById($1)' },
        { label: 'querySelector', kind: 'method', detail: 'document.querySelector()', insertText: 'querySelector($1)' },
        { label: 'addEventListener', kind: 'method', detail: 'document.addEventListener()', insertText: 'addEventListener($1, $2)' }
      );
    }
    
    if (beforeCursor.includes('React.')) {
      suggestions.push(
        { label: 'useState', kind: 'function', detail: 'React.useState()', insertText: 'useState($1)' },
        { label: 'useEffect', kind: 'function', detail: 'React.useEffect()', insertText: 'useEffect(() => {\n  $1\n}, [$2])' },
        { label: 'useContext', kind: 'function', detail: 'React.useContext()', insertText: 'useContext($1)' }
      );
    }
    
    // Common keywords
    if (beforeCursor.trim() === '') {
      suggestions.push(
        { label: 'function', kind: 'keyword', detail: 'function declaration', insertText: 'function $1($2) {\n  $3\n}' },
        { label: 'const', kind: 'keyword', detail: 'const declaration', insertText: 'const $1 = $2' },
        { label: 'let', kind: 'keyword', detail: 'let declaration', insertText: 'let $1 = $2' },
        { label: 'if', kind: 'keyword', detail: 'if statement', insertText: 'if ($1) {\n  $2\n}' },
        { label: 'for', kind: 'keyword', detail: 'for loop', insertText: 'for (let $1 = 0; $1 < $2.length; $1++) {\n  $3\n}' }
      );
    }
    
    return suggestions;
  }

  getPythonCompletions(beforeCursor, content, position) {
    const suggestions = [];
    
    if (beforeCursor.includes('print(')) {
      suggestions.push(
        { label: 'print', kind: 'function', detail: 'print()', insertText: 'print($1)' }
      );
    }
    
    if (beforeCursor.includes('def ')) {
      suggestions.push(
        { label: 'def', kind: 'keyword', detail: 'function definition', insertText: 'def $1($2):\n  $3' },
        { label: 'class', kind: 'keyword', detail: 'class definition', insertText: 'class $1:\n  $2' }
      );
    }
    
    if (beforeCursor.includes('import ')) {
      suggestions.push(
        { label: 'import', kind: 'keyword', detail: 'import statement', insertText: 'import $1' },
        { label: 'from', kind: 'keyword', detail: 'from import', insertText: 'from $1 import $2' }
      );
    }
    
    return suggestions;
  }

  getHTMLCompletions(beforeCursor, content, position) {
    const suggestions = [];
    
    if (beforeCursor.includes('<')) {
      suggestions.push(
        { label: 'div', kind: 'element', detail: '<div>', insertText: '<div>$1</div>' },
        { label: 'span', kind: 'element', detail: '<span>', insertText: '<span>$1</span>' },
        { label: 'p', kind: 'element', detail: '<p>', insertText: '<p>$1</p>' },
        { label: 'h1', kind: 'element', detail: '<h1>', insertText: '<h1>$1</h1>' },
        { label: 'button', kind: 'element', detail: '<button>', insertText: '<button>$1</button>' },
        { label: 'input', kind: 'element', detail: '<input>', insertText: '<input type="$1" $2>' }
      );
    }
    
    return suggestions;
  }

  getCSSCompletions(beforeCursor, content, position) {
    const suggestions = [];
    
    if (beforeCursor.includes(':')) {
      suggestions.push(
        { label: 'color', kind: 'property', detail: 'color property', insertText: 'color: $1' },
        { label: 'background', kind: 'property', detail: 'background property', insertText: 'background: $1' },
        { label: 'margin', kind: 'property', detail: 'margin property', insertText: 'margin: $1' },
        { label: 'padding', kind: 'property', detail: 'padding property', insertText: 'padding: $1' },
        { label: 'display', kind: 'property', detail: 'display property', insertText: 'display: $1' }
      );
    }
    
    return suggestions;
  }

  getGenericCompletions(beforeCursor, content, position) {
    return [
      { label: 'TODO', kind: 'keyword', detail: 'TODO comment', insertText: 'TODO: $1' },
      { label: 'FIXME', kind: 'keyword', detail: 'FIXME comment', insertText: 'FIXME: $1' },
      { label: 'NOTE', kind: 'keyword', detail: 'NOTE comment', insertText: 'NOTE: $1' }
    ];
  }

  getFallbackCompletions(language) {
    return [
      { label: '// TODO', kind: 'comment', detail: 'Add TODO comment', insertText: '// TODO: $1' },
      { label: '// FIXME', kind: 'comment', detail: 'Add FIXME comment', insertText: '// FIXME: $1' }
    ];
  }

  // Real-time Error Detection
  async detectErrors(filePath, content, language) {
    const cacheKey = `${filePath}:${content.length}`;
    
    if (this.errorDetectionCache.has(cacheKey)) {
      return this.errorDetectionCache.get(cacheKey);
    }

    try {
      const errors = await this.analyzeCodeForErrors(content, language);
      this.errorDetectionCache.set(cacheKey, errors);
      return errors;
    } catch (error) {
      console.error('Error detecting errors:', error);
      return [];
    }
  }

  async analyzeCodeForErrors(content, language) {
    const errors = [];
    const lines = content.split('\n');
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const lineNumber = i + 1;
      
      // Language-specific error detection
      switch (language) {
        case 'javascript':
        case 'typescript':
          errors.push(...this.detectJavaScriptErrors(line, lineNumber));
          break;
        case 'python':
          errors.push(...this.detectPythonErrors(line, lineNumber));
          break;
        case 'html':
          errors.push(...this.detectHTMLErrors(line, lineNumber));
          break;
        case 'css':
          errors.push(...this.detectCSSErrors(line, lineNumber));
          break;
      }
    }
    
    return errors;
  }

  detectJavaScriptErrors(line, lineNumber) {
    const errors = [];
    
    // Missing semicolon detection
    if (line.trim() && !line.trim().endsWith(';') && !line.trim().endsWith('{') && !line.trim().endsWith('}') && !line.trim().endsWith(',') && !line.includes('//') && !line.includes('/*')) {
      errors.push({
        line: lineNumber,
        column: line.length,
        message: 'Missing semicolon',
        severity: 'warning',
        source: 'AI Code Intelligence'
      });
    }
    
    // Unused variable detection (basic)
    if (line.includes('let ') || line.includes('const ') || line.includes('var ')) {
      const match = line.match(/(let|const|var)\s+(\w+)/);
      if (match) {
        const varName = match[2];
        // This is a simplified check - in a real implementation, you'd track variable usage
        if (varName === 'unused' || varName === 'temp') {
          errors.push({
            line: lineNumber,
            column: line.indexOf(varName),
            message: `Variable '${varName}' might be unused`,
            severity: 'info',
            source: 'AI Code Intelligence'
          });
        }
      }
    }
    
    return errors;
  }

  detectPythonErrors(line, lineNumber) {
    const errors = [];
    
    // Indentation errors
    if (line.trim() && line.match(/^\s+/) && !line.match(/^\s{4}/) && !line.match(/^\s{8}/)) {
      errors.push({
        line: lineNumber,
        column: 0,
        message: 'Inconsistent indentation',
        severity: 'error',
        source: 'AI Code Intelligence'
      });
    }
    
    // Missing colon after if/for/while/def/class
    if (line.match(/(if|for|while|def|class)\s+.*[^:]$/)) {
      errors.push({
        line: lineNumber,
        column: line.length,
        message: 'Missing colon',
        severity: 'error',
        source: 'AI Code Intelligence'
      });
    }
    
    return errors;
  }

  detectHTMLErrors(line, lineNumber) {
    const errors = [];
    
    // Unclosed tags
    const openTags = line.match(/<[^/][^>]*>/g) || [];
    const closeTags = line.match(/<\/[^>]*>/g) || [];
    
    if (openTags.length > closeTags.length) {
      errors.push({
        line: lineNumber,
        column: line.length,
        message: 'Unclosed HTML tag',
        severity: 'warning',
        source: 'AI Code Intelligence'
      });
    }
    
    return errors;
  }

  detectCSSErrors(line, lineNumber) {
    const errors = [];
    
    // Missing semicolon in CSS
    if (line.includes(':') && !line.trim().endsWith(';') && !line.trim().endsWith('{') && !line.trim().endsWith('}')) {
      errors.push({
        line: lineNumber,
        column: line.length,
        message: 'Missing semicolon in CSS',
        severity: 'warning',
        source: 'AI Code Intelligence'
      });
    }
    
    return errors;
  }

  // Smart Code Navigation
  async findDefinition(filePath, content, position, language) {
    try {
      const lines = content.split('\n');
      const currentLine = lines[position.line] || '';
      const beforeCursor = currentLine.substring(0, position.character);
      
      // Find the word at cursor position
      const wordMatch = beforeCursor.match(/\b(\w+)\s*$/);
      if (!wordMatch) return null;
      
      const word = wordMatch[1];
      
      // Search for definition in current file
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        // Look for function definitions
        if (language === 'javascript' || language === 'typescript') {
          const funcMatch = line.match(new RegExp(`function\\s+${word}\\s*\\(`));
          if (funcMatch) {
            return {
              file: filePath,
              line: i + 1,
              column: line.indexOf(word),
              text: line.trim()
            };
          }
          
          const arrowMatch = line.match(new RegExp(`const\\s+${word}\\s*=\\s*\\(`));
          if (arrowMatch) {
            return {
              file: filePath,
              line: i + 1,
              column: line.indexOf(word),
              text: line.trim()
            };
          }
        }
        
        if (language === 'python') {
          const defMatch = line.match(new RegExp(`def\\s+${word}\\s*\\(`));
          if (defMatch) {
            return {
              file: filePath,
              line: i + 1,
              column: line.indexOf(word),
              text: line.trim()
            };
          }
        }
      }
      
      return null;
    } catch (error) {
      console.error('Error finding definition:', error);
      return null;
    }
  }

  async findReferences(filePath, content, position, language) {
    try {
      const lines = content.split('\n');
      const currentLine = lines[position.line] || '';
      const beforeCursor = currentLine.substring(0, position.character);
      
      const wordMatch = beforeCursor.match(/\b(\w+)\s*$/);
      if (!wordMatch) return [];
      
      const word = wordMatch[1];
      const references = [];
      
      // Search for references in current file
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const regex = new RegExp(`\\b${word}\\b`, 'g');
        let match;
        
        while ((match = regex.exec(line)) !== null) {
          references.push({
            file: filePath,
            line: i + 1,
            column: match.index,
            text: line.trim()
          });
        }
      }
      
      return references;
    } catch (error) {
      console.error('Error finding references:', error);
      return [];
    }
  }

  // Clear caches
  clearCache() {
    this.codeCompletionCache.clear();
    this.errorDetectionCache.clear();
    this.symbolIndex.clear();
  }

  // Get service status
  getStatus() {
    return {
      initialized: this.isInitialized,
      languageServers: Array.from(this.languageServers.entries()).map(([lang, server]) => ({
        language: lang,
        name: server.name,
        capabilities: server.capabilities,
        status: server.status
      })),
      cacheSize: {
        completions: this.codeCompletionCache.size,
        errors: this.errorDetectionCache.size,
        symbols: this.symbolIndex.size
      }
    };
  }
}

export default new AICodeIntelligenceService();
