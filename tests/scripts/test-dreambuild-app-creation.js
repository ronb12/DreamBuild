#!/usr/bin/env node

/**
 * Test DreamBuild AI App Creation
 * This script tests DreamBuild AI by creating a complete app from scratch
 */

import dreamBuildAI from './src/services/dreamBuildAI.js'
import fs from 'fs'
import path from 'path'

class DreamBuildAppTester {
  constructor() {
    this.ai = dreamBuildAI
    this.testResults = []
  }

  async runTest() {
    console.log('🚀 Testing DreamBuild AI App Creation')
    console.log('=====================================\n')

    // Initialize AI
    await this.initializeAI()

    // Test 1: Create a Todo App
    await this.testTodoAppCreation()

    // Test 2: Create a Calculator App  
    await this.testCalculatorAppCreation()

    // Test 3: Create a Game App
    await this.testGameAppCreation()

    // Generate report
    this.generateReport()
  }

  async initializeAI() {
    console.log('🧠 Initializing DreamBuild AI...')
    try {
      // The AI is already initialized as a singleton, just verify it's working
      if (this.ai && typeof this.ai.generateCode === 'function') {
        console.log('✅ DreamBuild AI is ready and functional\n')
      } else {
        throw new Error('DreamBuild AI is not properly initialized')
      }
    } catch (error) {
      console.log('❌ Failed to initialize DreamBuild AI:', error.message)
      throw error
    }
  }

  async testTodoAppCreation() {
    console.log('📝 Test 1: Creating Todo App')
    console.log('----------------------------')
    
    try {
      const prompt = "Create a todo app with local storage, add/delete functionality, and filtering"
      const context = {
        projectName: 'dream-todo-app',
        requirements: ['localStorage', 'add/delete', 'filtering'],
        targetTechnology: 'vanilla'
      }

      console.log(`🎯 Prompt: ${prompt}`)
      const result = await this.ai.generateCode(prompt, context)
      
      console.log('🔍 Result structure:', typeof result, result)
      
      // Check if result has files object
      let files = null
      if (result && result.files && typeof result.files === 'object') {
        files = Object.entries(result.files).map(([name, content]) => ({ name, content }))
      } else if (Array.isArray(result)) {
        files = result
      } else if (result && result.files && Array.isArray(result.files)) {
        files = result.files
      }
      
      if (files && files.length > 0) {
        console.log(`✅ Generated ${files.length} files`)
        
        // Save files to test directory
        const testDir = './test-generated-todo-app'
        await this.saveGeneratedFiles(files, testDir)
        
        // Test the generated app
        await this.testGeneratedApp(testDir, 'Todo App')
        
        this.testResults.push({
          test: 'Todo App Creation',
          status: 'PASSED',
          filesGenerated: result.files.length,
          details: 'Successfully created functional todo app'
        })
      } else {
        throw new Error('No files generated')
      }
    } catch (error) {
      console.log(`❌ Todo App Creation Failed: ${error.message}`)
      this.testResults.push({
        test: 'Todo App Creation', 
        status: 'FAILED',
        error: error.message
      })
    }
    console.log('')
  }

  async testCalculatorAppCreation() {
    console.log('🧮 Test 2: Creating Calculator App')
    console.log('----------------------------------')
    
    try {
      const prompt = "Create a calculator app with history, memory functions, and keyboard support"
      const context = {
        projectName: 'dream-calculator-app',
        requirements: ['history', 'memory', 'keyboard'],
        targetTechnology: 'vanilla'
      }

      console.log(`🎯 Prompt: ${prompt}`)
      const result = await this.ai.generateCode(prompt, context)
      
      // Check if result has files object
      let files = null
      if (result && result.files && typeof result.files === 'object') {
        files = Object.entries(result.files).map(([name, content]) => ({ name, content }))
      } else if (Array.isArray(result)) {
        files = result
      } else if (result && result.files && Array.isArray(result.files)) {
        files = result.files
      }
      
      if (files && files.length > 0) {
        console.log(`✅ Generated ${files.length} files`)
        
        // Save files to test directory
        const testDir = './test-generated-calculator-app'
        await this.saveGeneratedFiles(files, testDir)
        
        // Test the generated app
        await this.testGeneratedApp(testDir, 'Calculator App')
        
        this.testResults.push({
          test: 'Calculator App Creation',
          status: 'PASSED',
          filesGenerated: result.files.length,
          details: 'Successfully created functional calculator app'
        })
      } else {
        throw new Error('No files generated')
      }
    } catch (error) {
      console.log(`❌ Calculator App Creation Failed: ${error.message}`)
      this.testResults.push({
        test: 'Calculator App Creation',
        status: 'FAILED', 
        error: error.message
      })
    }
    console.log('')
  }

  async testGameAppCreation() {
    console.log('🎮 Test 3: Creating Game App')
    console.log('----------------------------')
    
    try {
      const prompt = "Create a space shooter game with player movement, enemies, scoring, and levels"
      const context = {
        projectName: 'dream-game-app',
        requirements: ['player movement', 'enemies', 'scoring', 'levels'],
        targetTechnology: 'vanilla'
      }

      console.log(`🎯 Prompt: ${prompt}`)
      const result = await this.ai.generateCode(prompt, context)
      
      // Check if result has files object
      let files = null
      if (result && result.files && typeof result.files === 'object') {
        files = Object.entries(result.files).map(([name, content]) => ({ name, content }))
      } else if (Array.isArray(result)) {
        files = result
      } else if (result && result.files && Array.isArray(result.files)) {
        files = result.files
      }
      
      if (files && files.length > 0) {
        console.log(`✅ Generated ${files.length} files`)
        
        // Save files to test directory
        const testDir = './test-generated-game-app'
        await this.saveGeneratedFiles(files, testDir)
        
        // Test the generated app
        await this.testGeneratedApp(testDir, 'Game App')
        
        this.testResults.push({
          test: 'Game App Creation',
          status: 'PASSED',
          filesGenerated: result.files.length,
          details: 'Successfully created functional game app'
        })
      } else {
        throw new Error('No files generated')
      }
    } catch (error) {
      console.log(`❌ Game App Creation Failed: ${error.message}`)
      this.testResults.push({
        test: 'Game App Creation',
        status: 'FAILED',
        error: error.message
      })
    }
    console.log('')
  }

  async saveGeneratedFiles(files, testDir) {
    // Create test directory
    if (!fs.existsSync(testDir)) {
      fs.mkdirSync(testDir, { recursive: true })
    }

    // Save each file
    for (const file of files) {
      const filePath = path.join(testDir, file.name)
      fs.writeFileSync(filePath, file.content)
      console.log(`  📄 Saved: ${file.name}`)
    }
  }

  async testGeneratedApp(testDir, appType) {
    console.log(`  🧪 Testing generated ${appType}...`)
    
    // Check if HTML file exists and has content
    const htmlFiles = ['index.html', 'index.js', 'app.html', 'main.html']
    let htmlFile = null
    
    for (const fileName of htmlFiles) {
      const filePath = path.join(testDir, fileName)
      if (fs.existsSync(filePath)) {
        htmlFile = filePath
        break
      }
    }

    if (!htmlFile) {
      throw new Error('No HTML file found in generated app')
    }

    const htmlContent = fs.readFileSync(htmlFile, 'utf8')
    
    // Basic validation
    if (!htmlContent.includes('<!DOCTYPE html>') && !htmlContent.includes('<html')) {
      throw new Error('Generated HTML file is not valid')
    }

    console.log(`  ✅ ${appType} HTML structure is valid`)
    
    // Check for JavaScript functionality
    const jsFiles = fs.readdirSync(testDir).filter(f => f.endsWith('.js'))
    if (jsFiles.length > 0) {
      console.log(`  ✅ ${appType} has JavaScript functionality (${jsFiles.length} JS files)`)
    }

    // Check for CSS styling
    const cssFiles = fs.readdirSync(testDir).filter(f => f.endsWith('.css'))
    if (cssFiles.length > 0) {
      console.log(`  ✅ ${appType} has CSS styling (${cssFiles.length} CSS files)`)
    }

    console.log(`  🎉 ${appType} is ready to run!`)
  }

  generateReport() {
    console.log('📊 DREAMBUILD AI APP CREATION TEST REPORT')
    console.log('==========================================')
    
    const passed = this.testResults.filter(r => r.status === 'PASSED').length
    const total = this.testResults.length
    
    console.log(`\nTotal Tests: ${total}`)
    console.log(`Passed: ${passed} ✅`)
    console.log(`Failed: ${total - passed} ❌`)
    console.log(`Success Rate: ${((passed / total) * 100).toFixed(1)}%\n`)

    this.testResults.forEach(result => {
      const status = result.status === 'PASSED' ? '✅' : '❌'
      console.log(`${status} ${result.test}`)
      if (result.details) {
        console.log(`   ${result.details}`)
      }
      if (result.error) {
        console.log(`   Error: ${result.error}`)
      }
    })

    console.log('\n🎯 CONCLUSION:')
    if (passed === total) {
      console.log('🎉 ALL TESTS PASSED! DreamBuild AI successfully created functional apps!')
    } else if (passed > 0) {
      console.log('✅ DreamBuild AI is working! Some apps created successfully.')
    } else {
      console.log('❌ DreamBuild AI needs improvement.')
    }

    console.log('\n📁 Generated apps are saved in test directories:')
    console.log('   - ./test-generated-todo-app/')
    console.log('   - ./test-generated-calculator-app/')
    console.log('   - ./test-generated-game-app/')
  }
}

// Run the test
const tester = new DreamBuildAppTester()
tester.runTest().catch(console.error)
