const puppeteer = require('puppeteer')

async function testTemplateSystem() {
  console.log('🧪 Testing updated template system...')
  
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ['--start-maximized']
  })
  
  const page = await browser.newPage()
  
  try {
    // Navigate to templates page
    console.log('📄 Navigating to templates page...')
    await page.goto('https://dreambuild-2024-app.web.app/templates', {
      waitUntil: 'networkidle2',
      timeout: 30000
    })
    
    // Wait for templates to load
    console.log('⏳ Waiting for templates to load...')
    await page.waitForSelector('.template-card, .animate-pulse', { timeout: 15000 })
    
    // Check if templates are loading or loaded
    const loadingElements = await page.$$('.animate-pulse')
    if (loadingElements.length > 0) {
      console.log('📦 Templates are still loading, waiting...')
      await page.waitForFunction(() => {
        const loadingElements = document.querySelectorAll('.animate-pulse')
        return loadingElements.length === 0
      }, { timeout: 30000 })
    }
    
    // Check for template cards
    const templateCards = await page.$$('.template-card')
    console.log(`📊 Found ${templateCards.length} template cards`)
    
    if (templateCards.length > 0) {
      console.log('✅ Templates loaded successfully!')
      
      // Get template information
      const templateInfo = await page.evaluate(() => {
        const cards = document.querySelectorAll('.template-card')
        return Array.from(cards).map((card, index) => {
          const title = card.querySelector('h3, .template-title')?.textContent || 'Unknown'
          const description = card.querySelector('p, .template-description')?.textContent || 'No description'
          const tags = Array.from(card.querySelectorAll('.tag, .template-tag')).map(tag => tag.textContent)
          return { index: index + 1, title, description, tags }
        })
      })
      
      console.log('📋 Template details:')
      templateInfo.slice(0, 5).forEach(template => {
        console.log(`  ${template.index}. ${template.title}`)
        console.log(`     Description: ${template.description.substring(0, 100)}...`)
        console.log(`     Tags: ${template.tags.join(', ')}`)
        console.log('')
      })
      
      // Test search functionality
      console.log('🔍 Testing search functionality...')
      const searchInput = await page.$('input[type="search"], input[placeholder*="search"]')
      if (searchInput) {
        await searchInput.type('todo')
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        const filteredCards = await page.$$('.template-card')
        console.log(`🔍 After searching "todo": ${filteredCards.length} templates found`)
      }
      
      // Test category filtering
      console.log('🏷️ Testing category filtering...')
      const categoryButtons = await page.$$('button[data-category], .category-button')
      if (categoryButtons.length > 0) {
        await categoryButtons[0].click()
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        const filteredCardsAfterCategory = await page.$$('.template-card')
        console.log(`🏷️ After category filter: ${filteredCardsAfterCategory.length} templates found`)
      }
      
    } else {
      console.log('❌ No template cards found')
      
      // Check for error messages
      const errorMessages = await page.$$('.error, .alert, .warning')
      if (errorMessages.length > 0) {
        const errorText = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.error, .alert, .warning'))
            .map(el => el.textContent)
            .join('; ')
        })
        console.log(`⚠️ Error messages found: ${errorText}`)
      }
    }
    
    // Check console for any errors
    const consoleMessages = await page.evaluate(() => {
      return window.consoleMessages || []
    })
    
    if (consoleMessages.length > 0) {
      console.log('📝 Console messages:')
      consoleMessages.forEach(msg => {
        if (msg.type === 'error') {
          console.log(`❌ ${msg.text}`)
        } else if (msg.type === 'warn') {
          console.log(`⚠️ ${msg.text}`)
        } else {
          console.log(`ℹ️ ${msg.text}`)
        }
      })
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error.message)
  } finally {
    await browser.close()
  }
}

// Capture console messages
async function captureConsoleMessages(page) {
  page.on('console', msg => {
    if (!window.consoleMessages) window.consoleMessages = []
    window.consoleMessages.push({
      type: msg.type(),
      text: msg.text()
    })
  })
}

testTemplateSystem().catch(console.error)

