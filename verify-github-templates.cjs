// Verify GitHub Template Integration
// Simple verification that the GitHub template service is working

const puppeteer = require('puppeteer')

async function verifyGitHubTemplates() {
  console.log('🔍 Verifying GitHub Template Integration...')
  
  const browser = await puppeteer.launch({ 
    headless: false,
    defaultViewport: { width: 1280, height: 720 },
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  })
  
  try {
    const page = await browser.newPage()
    
    // Enable console logging
    page.on('console', msg => {
      console.log(`📱 ${msg.type().toUpperCase()}:`, msg.text())
    })
    
    // Navigate to templates page
    console.log('📄 Navigating to templates page...')
    await page.goto('https://dreambuild-2024-app.web.app/templates', { 
      waitUntil: 'networkidle2',
      timeout: 30000 
    })
    
    // Wait a bit for everything to load
    await new Promise(resolve => setTimeout(resolve, 5000))
    
    // Check if GitHub template service is initialized
    const githubServiceStatus = await page.evaluate(() => {
      return window.console.logs || 'No console logs found'
    })
    
    console.log('📊 GitHub Service Status:', githubServiceStatus)
    
    // Check for any template elements
    const templateElements = await page.evaluate(() => {
      const templates = document.querySelectorAll('[data-template-id], .template-card, .grid > div')
      return {
        count: templates.length,
        ids: Array.from(templates).map(el => el.getAttribute('data-template-id') || el.className || 'no-id')
      }
    })
    
    console.log('📋 Template Elements Found:', templateElements)
    
    // Check for loading states
    const loadingStates = await page.evaluate(() => {
      const loadingElements = document.querySelectorAll('.animate-pulse, .loading, [data-loading]')
      return {
        count: loadingElements.length,
        classes: Array.from(loadingElements).map(el => el.className)
      }
    })
    
    console.log('⏳ Loading States:', loadingStates)
    
    // Check for any error messages
    const errorMessages = await page.evaluate(() => {
      const errors = document.querySelectorAll('.error, .alert-error, [data-error]')
      return Array.from(errors).map(el => el.textContent)
    })
    
    console.log('❌ Error Messages:', errorMessages)
    
    // Check the page content
    const pageContent = await page.evaluate(() => {
      return {
        title: document.title,
        url: window.location.href,
        bodyText: document.body.innerText.substring(0, 500)
      }
    })
    
    console.log('📄 Page Content:', pageContent)
    
    // Take a screenshot
    await page.screenshot({ 
      path: 'github-templates-verification.png',
      fullPage: true 
    })
    console.log('📸 Verification screenshot saved')
    
    console.log('✅ Verification completed!')
    
  } catch (error) {
    console.error('❌ Verification failed:', error)
  } finally {
    await browser.close()
  }
}

// Run the verification
verifyGitHubTemplates().catch(console.error)
