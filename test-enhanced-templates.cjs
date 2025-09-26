// Test Enhanced GitHub Template Integration
// This script tests the expanded template system with 100+ templates

const puppeteer = require('puppeteer')

async function testEnhancedTemplates() {
  console.log('🚀 Testing Enhanced GitHub Template Integration...')
  
  const browser = await puppeteer.launch({ 
    headless: false,
    defaultViewport: { width: 1280, height: 720 },
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  })
  
  try {
    const page = await browser.newPage()
    
    // Enable console logging
    page.on('console', msg => {
      if (msg.type() === 'log' && (msg.text().includes('GitHub') || msg.text().includes('template'))) {
        console.log(`📱 ${msg.type().toUpperCase()}:`, msg.text())
      }
    })
    
    // Navigate to templates page
    console.log('📄 Navigating to templates page...')
    await page.goto('https://dreambuild-2024-app.web.app/templates', { 
      waitUntil: 'networkidle2',
      timeout: 30000 
    })
    
    // Wait for templates to load completely
    console.log('⏳ Waiting for templates to load...')
    await new Promise(resolve => setTimeout(resolve, 10000))
    
    // Check if templates have loaded
    const templateStatus = await page.evaluate(() => {
      const loadingElements = document.querySelectorAll('.animate-pulse')
      const templateElements = document.querySelectorAll('[data-template-id]')
      const errorElements = document.querySelectorAll('.error, .alert-error')
      
      return {
        isLoading: loadingElements.length > 0,
        templateCount: templateElements.length,
        errorCount: errorElements.length,
        loadingElements: loadingElements.length,
        pageTitle: document.title,
        url: window.location.href
      }
    })
    
    console.log('📊 Template Loading Status:', templateStatus)
    
    // Check console for any errors
    const consoleErrors = await page.evaluate(() => {
      return window.console.errors || []
    })
    
    if (consoleErrors.length > 0) {
      console.log('⚠️ Console errors found:')
      consoleErrors.forEach(error => console.log(`  - ${error}`))
    }
    
    // Take a screenshot
    await page.screenshot({ 
      path: 'enhanced-templates-test.png',
      fullPage: true 
    })
    console.log('📸 Screenshot saved as enhanced-templates-test.png')
    
    // Try to interact with the page
    console.log('🖱️ Testing page interactions...')
    
    // Test category filtering
    const categorySelect = await page.$('select')
    if (categorySelect) {
      await categorySelect.select('web-apps')
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      const categoryResults = await page.evaluate(() => {
        const templates = document.querySelectorAll('[data-template-id]')
        return templates.length
      })
      
      console.log(`📂 Category filtering results: ${categoryResults} templates`)
    }
    
    // Test search functionality
    const searchInput = await page.$('input[placeholder*="search" i], input[placeholder*="template" i]')
    if (searchInput) {
      await searchInput.type('react')
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      const searchResults = await page.evaluate(() => {
        const templates = document.querySelectorAll('[data-template-id]')
        return templates.length
      })
      
      console.log(`🔍 Search results: ${searchResults} templates found for "react"`)
    }
    
    console.log('✅ Enhanced Template Integration Test Completed!')
    
  } catch (error) {
    console.error('❌ Test failed:', error)
  } finally {
    await browser.close()
  }
}

// Run the test
testEnhancedTemplates().catch(console.error)

