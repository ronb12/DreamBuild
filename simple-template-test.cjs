const puppeteer = require('puppeteer')

async function simpleTemplateTest() {
  console.log('🧪 Simple template test...')
  
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
    
    // Wait for page to fully load
    console.log('⏳ Waiting for page to load...')
    await new Promise(resolve => setTimeout(resolve, 15000))
    
    // Check if templates are visible
    const templateCheck = await page.evaluate(() => {
      const templateCards = document.querySelectorAll('[data-template-id], .template-card')
      const loadingElements = document.querySelectorAll('.animate-pulse')
      const noTemplatesMessage = document.body.textContent.includes('No templates found')
      
      return {
        templateCardsCount: templateCards.length,
        loadingElementsCount: loadingElements.length,
        hasNoTemplatesMessage: noTemplatesMessage,
        bodyText: document.body.textContent.substring(0, 1000)
      }
    })
    
    console.log('📊 Template check results:')
    console.log(`  Template cards found: ${templateCheck.templateCardsCount}`)
    console.log(`  Loading elements: ${templateCheck.loadingElementsCount}`)
    console.log(`  Shows "No templates found": ${templateCheck.hasNoTemplatesMessage}`)
    console.log(`  Body text preview: ${templateCheck.bodyText}`)
    
    // If no templates are visible, let's check the React state
    if (templateCheck.templateCardsCount === 0) {
      console.log('\n🔍 Checking React state...')
      const reactState = await page.evaluate(() => {
        // Try to access React state through various methods
        const reactRoot = document.querySelector('#root')
        const reactFiber = reactRoot?._reactInternalFiber || reactRoot?.__reactInternalInstance
        
        // Look for any global variables that might contain template data
        const globalVars = Object.keys(window).filter(key => 
          key.toLowerCase().includes('template') || 
          key.toLowerCase().includes('state')
        )
        
        return {
          hasReactRoot: !!reactRoot,
          hasReactFiber: !!reactFiber,
          globalVars: globalVars,
          allTemplates: window.allTemplates,
          filteredTemplates: window.filteredTemplates,
          isLoading: window.isLoading
        }
      })
      
      console.log('⚛️ React state:')
      console.log(`  Has React root: ${reactState.hasReactRoot}`)
      console.log(`  Has React fiber: ${reactState.hasReactFiber}`)
      console.log(`  Global variables: ${reactState.globalVars.join(', ')}`)
      console.log(`  allTemplates: ${reactState.allTemplates?.length || 'undefined'}`)
      console.log(`  filteredTemplates: ${reactState.filteredTemplates?.length || 'undefined'}`)
      console.log(`  isLoading: ${reactState.isLoading}`)
      
      if (reactState.allTemplates && reactState.allTemplates.length > 0) {
        console.log('\n📋 Templates found in state:')
        reactState.allTemplates.slice(0, 3).forEach((template, index) => {
          console.log(`  ${index + 1}. ${template.name} (${template.id})`)
        })
      }
    }
    
    // Try to manually trigger template loading
    console.log('\n🔄 Attempting to trigger template loading...')
    await page.evaluate(() => {
      // Look for any buttons or elements that might trigger loading
      const buttons = document.querySelectorAll('button')
      const inputs = document.querySelectorAll('input')
      
      // Try clicking any button that might trigger loading
      buttons.forEach(button => {
        const text = button.textContent.toLowerCase()
        if (text.includes('load') || text.includes('refresh') || text.includes('reload')) {
          button.click()
        }
      })
      
      // Try typing in search inputs
      inputs.forEach(input => {
        if (input.type === 'search' || input.placeholder?.toLowerCase().includes('search')) {
          input.value = ''
          input.dispatchEvent(new Event('input', { bubbles: true }))
        }
      })
    })
    
    // Wait and check again
    await new Promise(resolve => setTimeout(resolve, 3000))
    
    const finalCheck = await page.evaluate(() => {
      const templateCards = document.querySelectorAll('[data-template-id], .template-card')
      return {
        templateCardsCount: templateCards.length,
        hasNoTemplatesMessage: document.body.textContent.includes('No templates found')
      }
    })
    
    console.log('\n📊 Final check:')
    console.log(`  Template cards: ${finalCheck.templateCardsCount}`)
    console.log(`  Shows "No templates found": ${finalCheck.hasNoTemplatesMessage}`)
    
    if (finalCheck.templateCardsCount > 0) {
      console.log('✅ Templates are now visible!')
    } else {
      console.log('❌ Templates are still not visible')
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error.message)
  } finally {
    await browser.close()
  }
}

simpleTemplateTest().catch(console.error)

