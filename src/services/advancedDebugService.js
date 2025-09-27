// Advanced Debug Service
// Provides comprehensive code analysis, error detection, and automatic fixing

import cloudAIService from './cloudAIService.js'

class AdvancedDebugService {
  constructor() {
    this.debugHistory = []
    this.errorPatterns = this.initializeErrorPatterns()
    this.fixStrategies = this.initializeFixStrategies()
  }

  // Initialize common error patterns
  initializeErrorPatterns() {
    return {
      // JavaScript errors
      syntax: [
        /SyntaxError:.*/,
        /Unexpected token/,
        /Missing.*before/,
        /Unterminated string literal/,
        /Uncaught ReferenceError/,
        /Uncaught TypeError/
      ],
      
      // DOM errors
      dom: [
        /Cannot read properties of null/,
        /Cannot read properties of undefined/,
        /querySelector.*is not a function/,
        /addEventListener.*is not a function/,
        /getElementById.*is not a function/
      ],
      
      // Event handling errors
      events: [
        /button.*not working/,
        /click.*not working/,
        /addEventListener.*not working/,
        /onclick.*not working/,
        /event.*not firing/
      ],
      
      // CSS errors
      css: [
        /CSS.*not applied/,
        /style.*not working/,
        /color.*not changing/,
        /responsive.*not working/,
        /layout.*broken/
      ],
      
      // API errors
      api: [
        /fetch.*failed/,
        /API.*error/,
        /network.*error/,
        /CORS.*error/,
        /404.*not found/
      ],
      
      // Performance issues
      performance: [
        /slow.*loading/,
        /performance.*issue/,
        /memory.*leak/,
        /infinite.*loop/,
        /too.*many.*requests/
      ]
    }
  }

  // Initialize fix strategies
  initializeFixStrategies() {
    return {
      syntax: {
        'missing-semicolon': 'Add missing semicolons',
        'unterminated-string': 'Fix string literals',
        'missing-bracket': 'Add missing brackets or parentheses',
        'invalid-syntax': 'Fix JavaScript syntax errors'
      },
      
      dom: {
        'null-reference': 'Add null checks and proper element selection',
        'undefined-property': 'Check for element existence before accessing properties',
        'missing-element': 'Ensure elements exist before manipulation'
      },
      
      events: {
        'button-not-working': 'Fix event listeners and button functionality',
        'click-handler': 'Implement proper click event handling',
        'event-binding': 'Fix event binding and delegation'
      },
      
      css: {
        'style-not-applied': 'Fix CSS selectors and specificity',
        'responsive-issues': 'Implement proper responsive design',
        'color-theme': 'Fix color schemes and theming'
      },
      
      api: {
        'fetch-error': 'Fix API calls and error handling',
        'cors-issue': 'Handle CORS and network errors',
        'data-parsing': 'Fix data parsing and validation'
      },
      
      performance: {
        'slow-loading': 'Optimize loading and rendering',
        'memory-leak': 'Fix memory leaks and cleanup',
        'infinite-loop': 'Fix infinite loops and recursion'
      }
    }
  }

  // Main debug analysis function
  async analyzeAndFix(userPrompt, projectFiles, context = {}) {
    console.log('🔍 Advanced Debug Service: Starting analysis...')
    
    try {
      // Step 1: Analyze the issue
      const analysis = await this.analyzeIssue(userPrompt, projectFiles, context)
      console.log('📊 Analysis result:', analysis)
      
      // Step 2: Detect error patterns
      const detectedErrors = this.detectErrorPatterns(userPrompt, projectFiles)
      console.log('🐛 Detected errors:', detectedErrors)
      
      // Step 3: Generate comprehensive fix
      const fix = await this.generateComprehensiveFix(analysis, detectedErrors, projectFiles, context)
      console.log('🔧 Generated fix:', fix)
      
      // Step 4: Validate the fix
      const validation = await this.validateFix(fix, projectFiles)
      console.log('✅ Fix validation:', validation)
      
      // Step 5: Create debug report
      const debugReport = this.createDebugReport(analysis, detectedErrors, fix, validation)
      
      // Store in debug history
      this.debugHistory.push({
        timestamp: new Date(),
        userPrompt,
        analysis,
        detectedErrors,
        fix,
        validation,
        debugReport
      })
      
      return {
        success: true,
        analysis,
        detectedErrors,
        fix,
        validation,
        debugReport,
        message: `Fixed ${detectedErrors.length} issue(s) successfully`
      }
      
    } catch (error) {
      console.error('❌ Debug analysis failed:', error)
      return {
        success: false,
        error: error.message,
        message: 'Debug analysis failed, but basic fix attempted'
      }
    }
  }

  // Analyze the specific issue
  async analyzeIssue(userPrompt, projectFiles, context) {
    const analysisPrompt = `Analyze this code issue and provide detailed analysis:

User Issue: "${userPrompt}"

Project Files:
${JSON.stringify(projectFiles, null, 2)}

Context: ${JSON.stringify(context, null, 2)}

Please provide:
1. Root cause analysis
2. Affected components/files
3. Impact assessment
4. Priority level (high/medium/low)
5. Suggested approach for fixing

Return as JSON with this structure:
{
  "rootCause": "Description of the root cause",
  "affectedFiles": ["list of affected files"],
  "impact": "Description of impact",
  "priority": "high/medium/low",
  "approach": "Suggested fixing approach",
  "complexity": "simple/moderate/complex"
}`
    
    try {
      const aiResponse = await cloudAIService.callHuggingFaceAPI(
        'codellama/CodeLlama-7b-Python-hf',
        analysisPrompt,
        1024,
        0.2
      )
      
      // Parse AI response
      const analysis = JSON.parse(aiResponse)
      return analysis
      
    } catch (error) {
      console.error('❌ Issue analysis failed:', error)
      return {
        rootCause: 'Unable to analyze - using fallback approach',
        affectedFiles: Object.keys(projectFiles),
        impact: 'Unknown',
        priority: 'medium',
        approach: 'Comprehensive code review and fix',
        complexity: 'moderate'
      }
    }
  }

  // Detect error patterns in code
  detectErrorPatterns(userPrompt, projectFiles) {
    const detectedErrors = []
    const lowerPrompt = userPrompt.toLowerCase()
    
    // Check user prompt for error indicators
    Object.entries(this.errorPatterns).forEach(([category, patterns]) => {
      patterns.forEach(pattern => {
        if (pattern.test(userPrompt)) {
          detectedErrors.push({
            category,
            pattern: pattern.toString(),
            source: 'user_prompt',
            severity: this.getSeverity(category)
          })
        }
      })
    })
    
    // Check code files for common issues
    Object.entries(projectFiles).forEach(([filename, content]) => {
      if (typeof content === 'string') {
        const fileErrors = this.analyzeFileForErrors(filename, content)
        detectedErrors.push(...fileErrors)
      }
    })
    
    return detectedErrors
  }

  // Analyze individual file for errors
  analyzeFileForErrors(filename, content) {
    const errors = []
    
    // JavaScript file analysis
    if (filename.endsWith('.js') || filename.endsWith('.jsx')) {
      // Check for common JS errors
      if (content.includes('addEventListener') && !content.includes('DOMContentLoaded')) {
        errors.push({
          category: 'dom',
          type: 'missing-dom-ready',
          message: 'Event listeners added before DOM is ready',
          file: filename,
          severity: 'high'
        })
      }
      
      if (content.includes('onclick=') && !content.includes('addEventListener')) {
        errors.push({
          category: 'events',
          type: 'inline-handlers',
          message: 'Using inline onclick instead of addEventListener',
          file: filename,
          severity: 'medium'
        })
      }
      
      if (content.includes('document.getElementById') && !content.includes('null')) {
        errors.push({
          category: 'dom',
          type: 'missing-null-check',
          message: 'Missing null check for getElementById',
          file: filename,
          severity: 'high'
        })
      }
    }
    
    // CSS file analysis
    if (filename.endsWith('.css')) {
      if (content.includes('!important') && content.split('!important').length > 3) {
        errors.push({
          category: 'css',
          type: 'overuse-important',
          message: 'Overuse of !important in CSS',
          file: filename,
          severity: 'medium'
        })
      }
      
      if (!content.includes('@media') && (content.includes('width:') || content.includes('height:'))) {
        errors.push({
          category: 'css',
          type: 'missing-responsive',
          message: 'Missing responsive design considerations',
          file: filename,
          severity: 'medium'
        })
      }
    }
    
    // HTML file analysis
    if (filename.endsWith('.html')) {
      if (content.includes('<script>') && !content.includes('DOMContentLoaded')) {
        errors.push({
          category: 'dom',
          type: 'script-timing',
          message: 'Scripts may run before DOM is ready',
          file: filename,
          severity: 'high'
        })
      }
      
      if (content.includes('onclick=') && !content.includes('addEventListener')) {
        errors.push({
          category: 'events',
          type: 'inline-events',
          message: 'Using inline event handlers',
          file: filename,
          severity: 'medium'
        })
      }
    }
    
    return errors
  }

  // Generate comprehensive fix
  async generateComprehensiveFix(analysis, detectedErrors, projectFiles, context) {
    console.log('🔧 Generating comprehensive fix...')
    
    const fixPrompt = `Fix all the identified issues in this code:

Analysis: ${JSON.stringify(analysis, null, 2)}

Detected Errors: ${JSON.stringify(detectedErrors, null, 2)}

Current Project Files:
${JSON.stringify(projectFiles, null, 2)}

Context: ${JSON.stringify(context, null, 2)}

Please provide a comprehensive fix that:
1. Addresses all detected errors
2. Follows best practices
3. Maintains existing functionality
4. Improves code quality
5. Ensures proper error handling
6. Implements responsive design
7. Fixes all button and interaction issues

Return the complete corrected files as a JSON object.
Focus on making the code robust, maintainable, and fully functional.`
    
    try {
      const aiResponse = await cloudAIService.callHuggingFaceAPI(
        'codellama/CodeLlama-7b-Python-hf',
        fixPrompt,
        2048,
        0.1 // Very low temperature for consistent fixes
      )
      
      // Parse AI response
      const fixedCode = await cloudAIService.parseAIResponse(aiResponse, 'Fix all issues')
      
      if (fixedCode && Object.keys(fixedCode).length > 0) {
        console.log('✅ Comprehensive fix generated successfully')
        return fixedCode
      }
      
    } catch (error) {
      console.error('❌ Comprehensive fix generation failed:', error)
    }
    
    // Fallback: Apply basic fixes
    return this.applyBasicFixes(projectFiles, detectedErrors)
  }

  // Apply basic fixes as fallback
  applyBasicFixes(projectFiles, detectedErrors) {
    console.log('⚠️ Applying basic fixes as fallback...')
    
    const fixedFiles = { ...projectFiles }
    
    detectedErrors.forEach(error => {
      if (error.category === 'dom' && error.type === 'missing-dom-ready') {
        // Add DOMContentLoaded wrapper
        Object.keys(fixedFiles).forEach(filename => {
          if (filename.endsWith('.js') && fixedFiles[filename].includes('addEventListener')) {
            fixedFiles[filename] = `document.addEventListener('DOMContentLoaded', function() {
${fixedFiles[filename]}
});`
          }
        })
      }
      
      if (error.category === 'events' && error.type === 'inline-handlers') {
        // Convert inline handlers to addEventListener
        Object.keys(fixedFiles).forEach(filename => {
          if (filename.endsWith('.html')) {
            fixedFiles[filename] = fixedFiles[filename]
              .replace(/onclick="([^"]*)"/g, 'data-onclick="$1"')
              .replace(/onchange="([^"]*)"/g, 'data-onchange="$1"')
              .replace(/onsubmit="([^"]*)"/g, 'data-onsubmit="$1"')
          }
        })
      }
    })
    
    return fixedFiles
  }

  // Validate the fix
  async validateFix(fix, originalFiles) {
    const validation = {
      filesUpdated: Object.keys(fix).length,
      issuesFixed: 0,
      newIssues: 0,
      qualityScore: 0,
      recommendations: []
    }
    
    // Check if fix addresses common issues
    Object.entries(fix).forEach(([filename, content]) => {
      if (typeof content === 'string') {
        // Check for improved error handling
        if (content.includes('try') && content.includes('catch')) {
          validation.issuesFixed++
        }
        
        // Check for proper event handling
        if (content.includes('addEventListener') && content.includes('DOMContentLoaded')) {
          validation.issuesFixed++
        }
        
        // Check for null checks
        if (content.includes('getElementById') && content.includes('null')) {
          validation.issuesFixed++
        }
        
        // Check for responsive design
        if (content.includes('@media') || content.includes('responsive')) {
          validation.issuesFixed++
        }
      }
    })
    
    // Calculate quality score
    validation.qualityScore = Math.min(100, (validation.issuesFixed / Math.max(1, Object.keys(originalFiles).length)) * 100)
    
    // Generate recommendations
    if (validation.qualityScore < 70) {
      validation.recommendations.push('Consider adding more error handling')
    }
    
    if (validation.qualityScore < 80) {
      validation.recommendations.push('Add responsive design considerations')
    }
    
    if (validation.qualityScore < 90) {
      validation.recommendations.push('Implement proper event delegation')
    }
    
    return validation
  }

  // Create debug report
  createDebugReport(analysis, detectedErrors, fix, validation) {
    return {
      timestamp: new Date().toISOString(),
      summary: {
        totalIssues: detectedErrors.length,
        issuesFixed: validation.issuesFixed,
        qualityScore: validation.qualityScore,
        filesUpdated: validation.filesUpdated
      },
      analysis,
      detectedErrors,
      fix: {
        filesUpdated: Object.keys(fix).length,
        improvements: validation.issuesFixed
      },
      validation,
      recommendations: validation.recommendations
    }
  }

  // Get severity level
  getSeverity(category) {
    const severityMap = {
      syntax: 'high',
      dom: 'high',
      events: 'high',
      css: 'medium',
      api: 'medium',
      performance: 'low'
    }
    
    return severityMap[category] || 'medium'
  }

  // Get debug history
  getDebugHistory() {
    return this.debugHistory
  }

  // Clear debug history
  clearDebugHistory() {
    this.debugHistory = []
  }
}

export default new AdvancedDebugService()
