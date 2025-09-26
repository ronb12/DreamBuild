const puppeteer = require('puppeteer')

async function debugTemplates() {
  console.log('🔍 Debugging template system...')
  
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ['--start-maximized']
  })
  
  const page = await browser.newPage()
  
  // Capture all console messages
  const consoleMessages = []
  page.on('console', msg => {
    consoleMessages.push({
      type: msg.type(),
      text: msg.text(),
      timestamp: new Date().toISOString()
    })
    console.log(`[${msg.type().toUpperCase()}] ${msg.text()}`)
  })
  
  // Capture network requests
  page.on('request', request => {
    if (request.url().includes('github.com') || request.url().includes('api')) {
      console.log(`🌐 REQUEST: ${request.method()} ${request.url()}`)
    }
  })
  
  page.on('response', response => {
    if (response.url().includes('github.com') || response.url().includes('api')) {
      console.log(`📡 RESPONSE: ${response.status()} ${response.url()}`)
    }
  })
  
  try {
    // Navigate to templates page
    console.log('📄 Navigating to templates page...')
    await page.goto('https://dreambuild-2024-app.web.app/templates', {
      waitUntil: 'networkidle2',
      timeout: 30000
    })
    
    console.log('⏳ Waiting 10 seconds for everything to load...')
    await new Promise(resolve => setTimeout(resolve, 10000))
    
    // Check page content
    const pageContent = await page.content()
    console.log(`📄 Page loaded, content length: ${pageContent.length}`)
    
    // Check for specific elements
    const elements = await page.evaluate(() => {
      return {
        hasTemplatesContainer: !!document.querySelector('.templates-container, .template-grid'),
        hasLoadingSpinner: !!document.querySelector('.animate-pulse, .loading, .spinner'),
        hasErrorMessages: !!document.querySelector('.error, .alert, .warning'),
        hasTemplateCards: document.querySelectorAll('.template-card').length,
        hasTemplateItems: document.querySelectorAll('[data-template]').length,
        hasTemplateElements: document.querySelectorAll('.template').length,
        bodyText: document.body.textContent.substring(0, 500)
      }
    })
    
    console.log('🔍 Element analysis:')
    console.log(`  Templates container: ${elements.hasTemplatesContainer}`)
    console.log(`  Loading spinner: ${elements.hasLoadingSpinner}`)
    console.log(`  Error messages: ${elements.hasErrorMessages}`)
    console.log(`  Template cards: ${elements.hasTemplateCards}`)
    console.log(`  Template items: ${elements.hasTemplateItems}`)
    console.log(`  Template elements: ${elements.hasTemplateElements}`)
    console.log(`  Body text preview: ${elements.bodyText}`)
    
    // Check for JavaScript errors
    const jsErrors = consoleMessages.filter(msg => msg.type === 'error')
    if (jsErrors.length > 0) {
      console.log('\n❌ JavaScript errors found:')
      jsErrors.forEach(error => {
        console.log(`  ${error.text}`)
      })
    }
    
    // Check for GitHub API calls
    const githubCalls = consoleMessages.filter(msg => 
      msg.text.includes('github') || msg.text.includes('GitHub') || msg.text.includes('API')
    )
    if (githubCalls.length > 0) {
      console.log('\n🔗 GitHub-related messages:')
      githubCalls.forEach(msg => {
        console.log(`  [${msg.type}] ${msg.text}`)
      })
    }
    
    // Try to trigger template loading manually
    console.log('\n🔄 Attempting to trigger template loading...')
    await page.evaluate(() => {
      // Look for any buttons or elements that might trigger template loading
      const buttons = document.querySelectorAll('button')
      buttons.forEach(button => {
        if (button.textContent.toLowerCase().includes('load') || 
            button.textContent.toLowerCase().includes('refresh') ||
            button.textContent.toLowerCase().includes('template')) {
          console.log(`Found potential trigger button: ${button.textContent}`)
        }
      })
    })
    
    // Wait a bit more and check again
    console.log('⏳ Waiting 5 more seconds...')
    await new Promise(resolve => setTimeout(resolve, 5000))
    
    const finalCheck = await page.evaluate(() => {
      return {
        templateCards: document.querySelectorAll('.template-card').length,
        anyCards: document.querySelectorAll('[class*="card"]').length,
        anyItems: document.querySelectorAll('[class*="item"]').length,
        anyElements: document.querySelectorAll('[class*="template"]').length
      }
    })
    
    console.log('\n📊 Final check:')
    console.log(`  Template cards: ${finalCheck.templateCards}`)
    console.log(`  Any cards: ${finalCheck.anyCards}`)
    console.log(`  Any items: ${finalCheck.anyItems}`)
    console.log(`  Any template elements: ${finalCheck.anyElements}`)
    
  } catch (error) {
    console.error('❌ Debug failed:', error.message)
  } finally {
    await browser.close()
  }
}

debugTemplates().catch(console.error)

