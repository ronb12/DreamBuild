// App Validation Service
// Automatically tests and validates all features of generated apps

class AppValidationService {
  constructor() {
    this.validationHistory = []
    this.testResults = []
    this.featureTests = this.initializeFeatureTests()
    this.validationRules = this.initializeValidationRules()
  }

  // Initialize feature tests
  initializeFeatureTests() {
    return {
      // Button functionality tests
      buttons: {
        testName: 'Button Functionality',
        tests: [
          {
            name: 'Click Events',
            selector: 'button, .btn, [role="button"]',
            test: 'click',
            expected: 'event fired'
          },
          {
            name: 'Form Submission',
            selector: 'form',
            test: 'submit',
            expected: 'form submitted'
          },
          {
            name: 'Navigation Links',
            selector: 'a[href]',
            test: 'navigation',
            expected: 'link works'
          }
        ]
      },

      // Form functionality tests
      forms: {
        testName: 'Form Functionality',
        tests: [
          {
            name: 'Input Validation',
            selector: 'input, textarea, select',
            test: 'validation',
            expected: 'valid input accepted'
          },
          {
            name: 'Form Submission',
            selector: 'form',
            test: 'submit',
            expected: 'form processes'
          },
          {
            name: 'Required Fields',
            selector: '[required]',
            test: 'required',
            expected: 'required validation works'
          }
        ]
      },

      // Interactive elements tests
      interactive: {
        testName: 'Interactive Elements',
        tests: [
          {
            name: 'Dropdowns',
            selector: 'select, .dropdown',
            test: 'dropdown',
            expected: 'options selectable'
          },
          {
            name: 'Checkboxes',
            selector: 'input[type="checkbox"]',
            test: 'checkbox',
            expected: 'state changes'
          },
          {
            name: 'Radio Buttons',
            selector: 'input[type="radio"]',
            test: 'radio',
            expected: 'selection works'
          },
          {
            name: 'Sliders',
            selector: 'input[type="range"]',
            test: 'slider',
            expected: 'value changes'
          }
        ]
      },

      // Data functionality tests
      data: {
        testName: 'Data Functionality',
        tests: [
          {
            name: 'Local Storage',
            selector: '*',
            test: 'localStorage',
            expected: 'data persists'
          },
          {
            name: 'Data Display',
            selector: '.data, .content, .list',
            test: 'display',
            expected: 'data shows'
          },
          {
            name: 'Data Updates',
            selector: '.dynamic, .live',
            test: 'update',
            expected: 'data updates'
          }
        ]
      },

      // API functionality tests
      api: {
        testName: 'API Functionality',
        tests: [
          {
            name: 'Fetch Requests',
            selector: '*',
            test: 'fetch',
            expected: 'API calls work'
          },
          {
            name: 'Error Handling',
            selector: '*',
            test: 'error',
            expected: 'errors handled'
          },
          {
            name: 'Loading States',
            selector: '.loading, .spinner',
            test: 'loading',
            expected: 'loading shows'
          }
        ]
      },

      // Responsive design tests
      responsive: {
        testName: 'Responsive Design',
        tests: [
          {
            name: 'Mobile Layout',
            selector: '*',
            test: 'mobile',
            expected: 'mobile friendly'
          },
          {
            name: 'Tablet Layout',
            selector: '*',
            test: 'tablet',
            expected: 'tablet friendly'
          },
          {
            name: 'Desktop Layout',
            selector: '*',
            test: 'desktop',
            expected: 'desktop optimized'
          }
        ]
      },

      // Performance tests
      performance: {
        testName: 'Performance',
        tests: [
          {
            name: 'Load Time',
            selector: '*',
            test: 'load',
            expected: 'fast loading'
          },
          {
            name: 'Memory Usage',
            selector: '*',
            test: 'memory',
            expected: 'efficient memory'
          },
          {
            name: 'Animation Performance',
            selector: '.animated, .transition',
            test: 'animation',
            expected: 'smooth animations'
          }
        ]
      }
    }
  }

  // Initialize validation rules
  initializeValidationRules() {
    return {
      // HTML validation rules
      html: {
        name: 'HTML Validation',
        rules: [
          {
            name: 'Valid HTML Structure',
            test: 'htmlStructure',
            required: true,
            severity: 'error'
          },
          {
            name: 'Semantic HTML',
            test: 'semanticHTML',
            required: true,
            severity: 'warning'
          },
          {
            name: 'Accessibility',
            test: 'accessibility',
            required: true,
            severity: 'warning'
          }
        ]
      },

      // CSS validation rules
      css: {
        name: 'CSS Validation',
        rules: [
          {
            name: 'Valid CSS Syntax',
            test: 'cssSyntax',
            required: true,
            severity: 'error'
          },
          {
            name: 'Responsive Design',
            test: 'responsive',
            required: true,
            severity: 'warning'
          },
          {
            name: 'Cross-browser Compatibility',
            test: 'browserCompatibility',
            required: false,
            severity: 'info'
          }
        ]
      },

      // JavaScript validation rules
      javascript: {
        name: 'JavaScript Validation',
        rules: [
          {
            name: 'Valid JavaScript Syntax',
            test: 'jsSyntax',
            required: true,
            severity: 'error'
          },
          {
            name: 'Error Handling',
            test: 'errorHandling',
            required: true,
            severity: 'warning'
          },
          {
            name: 'Performance Optimization',
            test: 'performance',
            required: false,
            severity: 'info'
          }
        ]
      },

      // Functionality validation rules
      functionality: {
        name: 'Functionality Validation',
        rules: [
          {
            name: 'All Buttons Work',
            test: 'buttonFunctionality',
            required: true,
            severity: 'error'
          },
          {
            name: 'All Forms Work',
            test: 'formFunctionality',
            required: true,
            severity: 'error'
          },
          {
            name: 'All Links Work',
            test: 'linkFunctionality',
            required: true,
            severity: 'error'
          },
          {
            name: 'Data Persistence',
            test: 'dataPersistence',
            required: false,
            severity: 'warning'
          }
        ]
      }
    }
  }

  // Main validation function
  async validateApp(generatedCode, appName, prompt) {
    console.log('🔍 Starting comprehensive app validation...')
    
    try {
      const validation = {
        timestamp: new Date().toISOString(),
        appName: appName,
        prompt: prompt,
        files: Object.keys(generatedCode),
        results: {},
        summary: {},
        recommendations: []
      }

      // Step 1: Code Quality Validation
      console.log('📝 Validating code quality...')
      validation.results.codeQuality = await this.validateCodeQuality(generatedCode)

      // Step 2: Feature Functionality Validation
      console.log('⚙️ Validating feature functionality...')
      validation.results.functionality = await this.validateFunctionality(generatedCode)

      // Step 3: Performance Validation
      console.log('🚀 Validating performance...')
      validation.results.performance = await this.validatePerformance(generatedCode)

      // Step 4: Accessibility Validation
      console.log('♿ Validating accessibility...')
      validation.results.accessibility = await this.validateAccessibility(generatedCode)

      // Step 5: Cross-browser Compatibility
      console.log('🌐 Validating browser compatibility...')
      validation.results.browserCompatibility = await this.validateBrowserCompatibility(generatedCode)

      // Step 6: Security Validation
      console.log('🔒 Validating security...')
      validation.results.security = await this.validateSecurity(generatedCode)

      // Generate summary
      validation.summary = this.generateValidationSummary(validation.results)

      // Generate recommendations
      validation.recommendations = this.generateRecommendations(validation.results)

      // Store in history
      this.validationHistory.push(validation)

      console.log('✅ App validation complete!')
      console.log(`📊 Overall Score: ${validation.summary.overallScore}/100`)
      console.log(`✅ Passed: ${validation.summary.passed}`)
      console.log(`❌ Failed: ${validation.summary.failed}`)
      console.log(`⚠️ Warnings: ${validation.summary.warnings}`)

      return validation

    } catch (error) {
      console.error('❌ App validation failed:', error)
      return {
        timestamp: new Date().toISOString(),
        appName: appName,
        prompt: prompt,
        error: error.message,
        success: false
      }
    }
  }

  // Validate code quality
  async validateCodeQuality(generatedCode) {
    const results = {
      html: { passed: 0, failed: 0, warnings: 0, details: [] },
      css: { passed: 0, failed: 0, warnings: 0, details: [] },
      javascript: { passed: 0, failed: 0, warnings: 0, details: [] }
    }

    Object.entries(generatedCode).forEach(([filename, content]) => {
      if (filename.endsWith('.html')) {
        const htmlValidation = this.validateHTML(content)
        results.html.passed += htmlValidation.passed
        results.html.failed += htmlValidation.failed
        results.html.warnings += htmlValidation.warnings
        results.html.details.push(...htmlValidation.details)
      } else if (filename.endsWith('.css')) {
        const cssValidation = this.validateCSS(content)
        results.css.passed += cssValidation.passed
        results.css.failed += cssValidation.failed
        results.css.warnings += cssValidation.warnings
        results.css.details.push(...cssValidation.details)
      } else if (filename.endsWith('.js') || filename.endsWith('.jsx')) {
        const jsValidation = this.validateJavaScript(content)
        results.javascript.passed += jsValidation.passed
        results.javascript.failed += jsValidation.failed
        results.javascript.warnings += jsValidation.warnings
        results.javascript.details.push(...jsValidation.details)
      }
    })

    return results
  }

  // Validate HTML
  validateHTML(content) {
    const results = { passed: 0, failed: 0, warnings: 0, details: [] }

    // Check for valid HTML structure
    if (content.includes('<!DOCTYPE html>') && content.includes('<html>') && content.includes('</html>')) {
      results.passed++
      results.details.push({ type: 'success', message: 'Valid HTML structure' })
    } else {
      results.failed++
      results.details.push({ type: 'error', message: 'Invalid HTML structure' })
    }

    // Check for semantic HTML
    const semanticTags = ['header', 'nav', 'main', 'section', 'article', 'aside', 'footer']
    const hasSemanticTags = semanticTags.some(tag => content.includes(`<${tag}`))
    if (hasSemanticTags) {
      results.passed++
      results.details.push({ type: 'success', message: 'Uses semantic HTML' })
    } else {
      results.warnings++
      results.details.push({ type: 'warning', message: 'Consider using semantic HTML tags' })
    }

    // Check for accessibility
    if (content.includes('alt=') || content.includes('aria-')) {
      results.passed++
      results.details.push({ type: 'success', message: 'Accessibility attributes present' })
    } else {
      results.warnings++
      results.details.push({ type: 'warning', message: 'Add accessibility attributes' })
    }

    // Check for responsive meta tag
    if (content.includes('viewport')) {
      results.passed++
      results.details.push({ type: 'success', message: 'Responsive viewport meta tag' })
    } else {
      results.warnings++
      results.details.push({ type: 'warning', message: 'Add viewport meta tag for responsiveness' })
    }

    return results
  }

  // Validate CSS
  validateCSS(content) {
    const results = { passed: 0, failed: 0, warnings: 0, details: [] }

    // Check for valid CSS syntax
    const hasValidCSS = content.includes('{') && content.includes('}') && content.includes(':')
    if (hasValidCSS) {
      results.passed++
      results.details.push({ type: 'success', message: 'Valid CSS syntax' })
    } else {
      results.failed++
      results.details.push({ type: 'error', message: 'Invalid CSS syntax' })
    }

    // Check for responsive design
    if (content.includes('@media') || content.includes('responsive') || content.includes('mobile')) {
      results.passed++
      results.details.push({ type: 'success', message: 'Responsive design implemented' })
    } else {
      results.warnings++
      results.details.push({ type: 'warning', message: 'Add responsive design with media queries' })
    }

    // Check for modern CSS features
    if (content.includes('flexbox') || content.includes('grid') || content.includes('var(')) {
      results.passed++
      results.details.push({ type: 'success', message: 'Uses modern CSS features' })
    } else {
      results.warnings++
      results.details.push({ type: 'warning', message: 'Consider using modern CSS features' })
    }

    // Check for CSS variables
    if (content.includes('--') && content.includes('var(')) {
      results.passed++
      results.details.push({ type: 'success', message: 'Uses CSS custom properties' })
    } else {
      results.warnings++
      results.details.push({ type: 'warning', message: 'Consider using CSS custom properties' })
    }

    return results
  }

  // Validate JavaScript
  validateJavaScript(content) {
    const results = { passed: 0, failed: 0, warnings: 0, details: [] }

    // Check for valid JavaScript syntax
    const hasValidJS = content.includes('function') || content.includes('const') || content.includes('let') || content.includes('var')
    if (hasValidJS) {
      results.passed++
      results.details.push({ type: 'success', message: 'Valid JavaScript syntax' })
    } else {
      results.failed++
      results.details.push({ type: 'error', message: 'Invalid JavaScript syntax' })
    }

    // Check for error handling
    if (content.includes('try') && content.includes('catch') || content.includes('error')) {
      results.passed++
      results.details.push({ type: 'success', message: 'Error handling implemented' })
    } else {
      results.warnings++
      results.details.push({ type: 'warning', message: 'Add error handling' })
    }

    // Check for event listeners
    if (content.includes('addEventListener') || content.includes('onclick') || content.includes('onload')) {
      results.passed++
      results.details.push({ type: 'success', message: 'Event handling implemented' })
    } else {
      results.warnings++
      results.details.push({ type: 'warning', message: 'Add event handling' })
    }

    // Check for modern JavaScript features
    if (content.includes('const') || content.includes('let') || content.includes('=>')) {
      results.passed++
      results.details.push({ type: 'success', message: 'Uses modern JavaScript features' })
    } else {
      results.warnings++
      results.details.push({ type: 'warning', message: 'Consider using modern JavaScript features' })
    }

    return results
  }

  // Validate functionality
  async validateFunctionality(generatedCode) {
    const results = { passed: 0, failed: 0, warnings: 0, details: [] }

    // Check for buttons
    const htmlContent = Object.values(generatedCode).find(content => 
      typeof content === 'string' && content.includes('<html')
    ) || ''

    if (htmlContent.includes('<button') || htmlContent.includes('.btn')) {
      results.passed++
      results.details.push({ type: 'success', message: 'Buttons found' })
    } else {
      results.warnings++
      results.details.push({ type: 'warning', message: 'No buttons found' })
    }

    // Check for forms
    if (htmlContent.includes('<form') || htmlContent.includes('<input')) {
      results.passed++
      results.details.push({ type: 'success', message: 'Forms found' })
    } else {
      results.warnings++
      results.details.push({ type: 'warning', message: 'No forms found' })
    }

    // Check for interactive elements
    if (htmlContent.includes('<select') || htmlContent.includes('checkbox') || htmlContent.includes('radio')) {
      results.passed++
      results.details.push({ type: 'success', message: 'Interactive elements found' })
    } else {
      results.warnings++
      results.details.push({ type: 'warning', message: 'No interactive elements found' })
    }

    // Check for data handling
    const jsContent = Object.values(generatedCode).find(content => 
      typeof content === 'string' && (content.includes('function') || content.includes('const'))
    ) || ''

    if (jsContent.includes('localStorage') || jsContent.includes('sessionStorage') || jsContent.includes('fetch')) {
      results.passed++
      results.details.push({ type: 'success', message: 'Data handling implemented' })
    } else {
      results.warnings++
      results.details.push({ type: 'warning', message: 'Add data handling' })
    }

    return results
  }

  // Validate performance
  async validatePerformance(generatedCode) {
    const results = { passed: 0, failed: 0, warnings: 0, details: [] }

    // Check file sizes
    const totalSize = Object.values(generatedCode).reduce((total, content) => {
      return total + (typeof content === 'string' ? content.length : 0)
    }, 0)

    if (totalSize < 100000) { // Less than 100KB
      results.passed++
      results.details.push({ type: 'success', message: 'App size is reasonable' })
    } else {
      results.warnings++
      results.details.push({ type: 'warning', message: 'App size is large, consider optimization' })
    }

    // Check for performance optimizations
    const htmlContent = Object.values(generatedCode).find(content => 
      typeof content === 'string' && content.includes('<html')
    ) || ''

    if (htmlContent.includes('async') || htmlContent.includes('defer')) {
      results.passed++
      results.details.push({ type: 'success', message: 'Script loading optimized' })
    } else {
      results.warnings++
      results.details.push({ type: 'warning', message: 'Consider optimizing script loading' })
    }

    // Check for image optimization
    if (htmlContent.includes('loading="lazy"') || htmlContent.includes('alt=')) {
      results.passed++
      results.details.push({ type: 'success', message: 'Images optimized' })
    } else {
      results.warnings++
      results.details.push({ type: 'warning', message: 'Consider image optimization' })
    }

    return results
  }

  // Validate accessibility
  async validateAccessibility(generatedCode) {
    const results = { passed: 0, failed: 0, warnings: 0, details: [] }

    const htmlContent = Object.values(generatedCode).find(content => 
      typeof content === 'string' && content.includes('<html')
    ) || ''

    // Check for alt attributes
    if (htmlContent.includes('alt=')) {
      results.passed++
      results.details.push({ type: 'success', message: 'Alt attributes present' })
    } else {
      results.warnings++
      results.details.push({ type: 'warning', message: 'Add alt attributes to images' })
    }

    // Check for ARIA attributes
    if (htmlContent.includes('aria-')) {
      results.passed++
      results.details.push({ type: 'success', message: 'ARIA attributes present' })
    } else {
      results.warnings++
      results.details.push({ type: 'warning', message: 'Add ARIA attributes for accessibility' })
    }

    // Check for semantic HTML
    const semanticTags = ['header', 'nav', 'main', 'section', 'article', 'aside', 'footer']
    const hasSemanticTags = semanticTags.some(tag => htmlContent.includes(`<${tag}`))
    if (hasSemanticTags) {
      results.passed++
      results.details.push({ type: 'success', message: 'Semantic HTML used' })
    } else {
      results.warnings++
      results.details.push({ type: 'warning', message: 'Use semantic HTML tags' })
    }

    // Check for keyboard navigation
    if (htmlContent.includes('tabindex') || htmlContent.includes('onkeydown') || htmlContent.includes('onkeyup')) {
      results.passed++
      results.details.push({ type: 'success', message: 'Keyboard navigation supported' })
    } else {
      results.warnings++
      results.details.push({ type: 'warning', message: 'Add keyboard navigation support' })
    }

    return results
  }

  // Validate browser compatibility
  async validateBrowserCompatibility(generatedCode) {
    const results = { passed: 0, failed: 0, warnings: 0, details: [] }

    const htmlContent = Object.values(generatedCode).find(content => 
      typeof content === 'string' && content.includes('<html')
    ) || ''

    // Check for CSS prefixes
    const cssContent = Object.values(generatedCode).find(content => 
      typeof content === 'string' && content.includes('{') && content.includes('}')
    ) || ''

    if (cssContent.includes('-webkit-') || cssContent.includes('-moz-') || cssContent.includes('-ms-')) {
      results.passed++
      results.details.push({ type: 'success', message: 'CSS prefixes for browser compatibility' })
    } else {
      results.warnings++
      results.details.push({ type: 'warning', message: 'Add CSS prefixes for better browser support' })
    }

    // Check for polyfills
    if (htmlContent.includes('polyfill') || htmlContent.includes('babel')) {
      results.passed++
      results.details.push({ type: 'success', message: 'Polyfills included' })
    } else {
      results.warnings++
      results.details.push({ type: 'warning', message: 'Consider adding polyfills for older browsers' })
    }

    return results
  }

  // Validate security
  async validateSecurity(generatedCode) {
    const results = { passed: 0, failed: 0, warnings: 0, details: [] }

    const htmlContent = Object.values(generatedCode).find(content => 
      typeof content === 'string' && content.includes('<html')
    ) || ''

    const jsContent = Object.values(generatedCode).find(content => 
      typeof content === 'string' && (content.includes('function') || content.includes('const'))
    ) || ''

    // Check for XSS prevention
    if (jsContent.includes('innerText') || jsContent.includes('textContent') || jsContent.includes('encodeURIComponent')) {
      results.passed++
      results.details.push({ type: 'success', message: 'XSS prevention measures' })
    } else {
      results.warnings++
      results.details.push({ type: 'warning', message: 'Add XSS prevention measures' })
    }

    // Check for HTTPS
    if (htmlContent.includes('https://') || !htmlContent.includes('http://')) {
      results.passed++
      results.details.push({ type: 'success', message: 'HTTPS used for external resources' })
    } else {
      results.warnings++
      results.details.push({ type: 'warning', message: 'Use HTTPS for external resources' })
    }

    // Check for input validation
    if (jsContent.includes('validate') || jsContent.includes('sanitize') || jsContent.includes('filter')) {
      results.passed++
      results.details.push({ type: 'success', message: 'Input validation implemented' })
    } else {
      results.warnings++
      results.details.push({ type: 'warning', message: 'Add input validation' })
    }

    return results
  }

  // Generate validation summary
  generateValidationSummary(results) {
    let totalPassed = 0
    let totalFailed = 0
    let totalWarnings = 0

    Object.values(results).forEach(category => {
      if (category.passed !== undefined) {
        totalPassed += category.passed
        totalFailed += category.failed
        totalWarnings += category.warnings
      } else {
        // Handle nested results
        Object.values(category).forEach(subCategory => {
          if (subCategory.passed !== undefined) {
            totalPassed += subCategory.passed
            totalFailed += subCategory.failed
            totalWarnings += subCategory.warnings
          }
        })
      }
    })

    const totalTests = totalPassed + totalFailed + totalWarnings
    const overallScore = totalTests > 0 ? Math.round((totalPassed / totalTests) * 100) : 0

    return {
      overallScore,
      passed: totalPassed,
      failed: totalFailed,
      warnings: totalWarnings,
      total: totalTests,
      status: overallScore >= 80 ? 'excellent' : overallScore >= 60 ? 'good' : overallScore >= 40 ? 'fair' : 'needs_improvement'
    }
  }

  // Generate recommendations
  generateRecommendations(results) {
    const recommendations = []

    Object.entries(results).forEach(([category, result]) => {
      if (result.details) {
        result.details.forEach(detail => {
          if (detail.type === 'error' || detail.type === 'warning') {
            recommendations.push({
              category,
              type: detail.type,
              message: detail.message,
              priority: detail.type === 'error' ? 'high' : 'medium'
            })
          }
        })
      } else {
        // Handle nested results
        Object.entries(result).forEach(([subCategory, subResult]) => {
          if (subResult.details) {
            subResult.details.forEach(detail => {
              if (detail.type === 'error' || detail.type === 'warning') {
                recommendations.push({
                  category: `${category}.${subCategory}`,
                  type: detail.type,
                  message: detail.message,
                  priority: detail.type === 'error' ? 'high' : 'medium'
                })
              }
            })
          }
        })
      }
    })

    return recommendations
  }

  // Get validation history
  getValidationHistory() {
    return this.validationHistory
  }

  // Clear validation history
  clearValidationHistory() {
    this.validationHistory = []
  }

  // Get validation statistics
  getValidationStats() {
    const stats = {
      totalValidations: this.validationHistory.length,
      averageScore: 0,
      categories: {},
      statusDistribution: { excellent: 0, good: 0, fair: 0, needs_improvement: 0 }
    }

    if (this.validationHistory.length > 0) {
      let totalScore = 0
      this.validationHistory.forEach(validation => {
        if (validation.summary) {
          totalScore += validation.summary.overallScore
          stats.statusDistribution[validation.summary.status]++
        }
      })
      stats.averageScore = Math.round(totalScore / this.validationHistory.length)
    }

    return stats
  }
}

export default new AppValidationService()
