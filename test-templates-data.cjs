const puppeteer = require('puppeteer')

async function testTemplatesData() {
  console.log('🔍 Testing templates data...')
  
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ['--start-maximized']
  })
  
  const page = await browser.newPage()
  
  // Capture console messages
  page.on('console', msg => {
    if (msg.text().includes('template') || msg.text().includes('Template')) {
      console.log(`[${msg.type().toUpperCase()}] ${msg.text()}`)
    }
  })
  
  try {
    // Navigate to templates page
    console.log('📄 Navigating to templates page...')
    await page.goto('https://dreambuild-2024-app.web.app/templates', {
      waitUntil: 'networkidle2',
      timeout: 30000
    })
    
    // Wait for templates to load
    console.log('⏳ Waiting for templates to load...')
    await page.waitForFunction(() => {
      return window.allTemplates && window.allTemplates.length > 0
    }, { timeout: 30000 })
    
    // Get templates data from the page
    const templatesData = await page.evaluate(() => {
      return {
        allTemplates: window.allTemplates || [],
        filteredTemplates: window.filteredTemplates || [],
        isLoading: window.isLoading || false,
        templatesLength: window.allTemplates?.length || 0
      }
    })
    
    console.log('📊 Templates data:')
    console.log(`  All templates count: ${templatesData.templatesLength}`)
    console.log(`  Filtered templates count: ${templatesData.filteredTemplates?.length || 0}`)
    console.log(`  Is loading: ${templatesData.isLoading}`)
    
    if (templatesData.allTemplates.length > 0) {
      console.log('\n📋 First few templates:')
      templatesData.allTemplates.slice(0, 3).forEach((template, index) => {
        console.log(`  ${index + 1}. ${template.name}`)
        console.log(`     ID: ${template.id}`)
        console.log(`     Category: ${template.category}`)
        console.log(`     Tags: ${(template.tags || []).join(', ')}`)
        console.log(`     Source: ${template.source}`)
        console.log('')
      })
    }
    
    // Check React state
    const reactState = await page.evaluate(() => {
      // Try to access React state if available
      const reactRoot = document.querySelector('#root')._reactInternalFiber ||
                       document.querySelector('#root').__reactInternalInstance
      return {
        hasReactRoot: !!reactRoot,
        bodyText: document.body.textContent.includes('No templates found')
      }
    })
    
    console.log('⚛️ React state:')
    console.log(`  Has React root: ${reactState.hasReactRoot}`)
    console.log(`  Shows "No templates found": ${reactState.bodyText}`)
    
    // Try to trigger a re-render
    console.log('\n🔄 Attempting to trigger re-render...')
    await page.evaluate(() => {
      // Force a re-render by updating the search query
      const searchInput = document.querySelector('input[type="search"]')
      if (searchInput) {
        searchInput.value = ''
        searchInput.dispatchEvent(new Event('input', { bubbles: true }))
      }
    })
    
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Check again after re-render
    const afterRender = await page.evaluate(() => {
      const templateCards = document.querySelectorAll('.template-card, [data-template-id]')
      return {
        templateCards: templateCards.length,
        hasNoTemplatesMessage: document.body.textContent.includes('No templates found'),
        allTemplatesLength: window.allTemplates?.length || 0
      }
    })
    
    console.log('\n📊 After re-render:')
    console.log(`  Template cards visible: ${afterRender.templateCards}`)
    console.log(`  Shows "No templates found": ${afterRender.hasNoTemplatesMessage}`)
    console.log(`  All templates length: ${afterRender.allTemplatesLength}`)
    
  } catch (error) {
    console.error('❌ Test failed:', error.message)
  } finally {
    await browser.close()
  }
}

testTemplatesData().catch(console.error)

