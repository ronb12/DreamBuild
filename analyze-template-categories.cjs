// Analyze Template Categories
// This script analyzes the distribution of templates across categories

const puppeteer = require('puppeteer')

async function analyzeTemplateCategories() {
  console.log('📊 Analyzing Template Categories...')
  
  const browser = await puppeteer.launch({ 
    headless: false,
    defaultViewport: { width: 1280, height: 720 },
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  })
  
  try {
    const page = await browser.newPage()
    
    // Enable console logging
    page.on('console', msg => {
      if (msg.type() === 'log' && msg.text().includes('template')) {
        console.log(`📱 ${msg.type().toUpperCase()}:`, msg.text())
      }
    })
    
    // Navigate to templates page
    console.log('📄 Navigating to templates page...')
    await page.goto('https://dreambuild-2024-app.web.app/templates', { 
      waitUntil: 'networkidle2',
      timeout: 30000 
    })
    
    // Wait for templates to load
    console.log('⏳ Waiting for templates to load...')
    await new Promise(resolve => setTimeout(resolve, 15000))
    
    // Get category distribution
    const categoryAnalysis = await page.evaluate(() => {
      const categories = [
        'all', 'web-apps', 'mobile-apps', 'landing-pages', 
        'dashboards', 'e-commerce', 'portfolios', 'apis'
      ]
      
      const results = {}
      
      // Get all templates first
      const allTemplates = document.querySelectorAll('[data-template-id]')
      results.total = allTemplates.length
      
      // Analyze each category
      categories.forEach(category => {
        // Simulate category selection
        const categorySelect = document.querySelector('select')
        if (categorySelect) {
          categorySelect.value = category
          categorySelect.dispatchEvent(new Event('change', { bubbles: true }))
        }
        
        // Wait a bit for filtering
        setTimeout(() => {
          const templates = document.querySelectorAll('[data-template-id]')
          results[category] = templates.length
        }, 100)
      })
      
      return results
    })
    
    console.log('📊 Template Category Distribution:', categoryAnalysis)
    
    // Get detailed template information
    const templateDetails = await page.evaluate(() => {
      const templates = document.querySelectorAll('[data-template-id]')
      const details = []
      
      templates.forEach(template => {
        const id = template.getAttribute('data-template-id')
        const nameElement = template.querySelector('h3, h4, .template-name')
        const name = nameElement ? nameElement.textContent.trim() : 'Unknown'
        
        // Try to get category from class or data attributes
        const categoryElement = template.querySelector('[data-category]')
        const category = categoryElement ? categoryElement.getAttribute('data-category') : 'unknown'
        
        details.push({
          id: id,
          name: name,
          category: category
        })
      })
      
      return details
    })
    
    console.log('📋 Template Details:', templateDetails.slice(0, 10)) // Show first 10
    
    // Count by template type
    const templateTypeCount = await page.evaluate(() => {
      const templates = document.querySelectorAll('[data-template-id]')
      const typeCount = {}
      
      templates.forEach(template => {
        const id = template.getAttribute('data-template-id')
        let type = 'unknown'
        
        if (id.startsWith('github_')) {
          type = 'GitHub Template'
        } else {
          type = 'Local Template'
        }
        
        typeCount[type] = (typeCount[type] || 0) + 1
      })
      
      return typeCount
    })
    
    console.log('🏷️ Template Type Distribution:', templateTypeCount)
    
    // Test category filtering
    console.log('🔍 Testing category filtering...')
    const categoryResults = {}
    
    const categories = ['web-apps', 'mobile-apps', 'dashboards', 'e-commerce']
    
    for (const category of categories) {
      // Select category
      await page.select('select', category)
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      const count = await page.evaluate(() => {
        const templates = document.querySelectorAll('[data-template-id]')
        return templates.length
      })
      
      categoryResults[category] = count
      console.log(`📂 ${category}: ${count} templates`)
    }
    
    console.log('📊 Category Filtering Results:', categoryResults)
    
    // Take a screenshot
    await page.screenshot({ 
      path: 'template-categories-analysis.png',
      fullPage: true 
    })
    console.log('📸 Analysis screenshot saved')
    
    console.log('✅ Template Category Analysis Completed!')
    
  } catch (error) {
    console.error('❌ Analysis failed:', error)
  } finally {
    await browser.close()
  }
}

// Run the analysis
analyzeTemplateCategories().catch(console.error)

