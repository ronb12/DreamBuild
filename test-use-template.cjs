const puppeteer = require('puppeteer')

async function testUseTemplate() {
  console.log('🔧 Testing Use Template functionality...')
  
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
    await page.waitForSelector('[data-template-id], .template-card', { timeout: 30000 })
    
    // Get first template
    const firstTemplate = await page.$('[data-template-id], .template-card')
    if (!firstTemplate) {
      console.log('❌ No templates found')
      return
    }
    
    // Get template info
    const templateInfo = await page.evaluate((element) => {
      const title = element.querySelector('h3, .template-title, [class*="title"]')?.textContent || 'Unknown'
      const id = element.getAttribute('data-template-id') || 'no-id'
      return { title, id }
    }, firstTemplate)
    
    console.log(`📝 Template: ${templateInfo.title} (${templateInfo.id})`)
    
    // Find and click "Use Template" button
    const useTemplateButton = await firstTemplate.$('button[title="Use Template"]')
    if (!useTemplateButton) {
      console.log('❌ Use Template button not found')
      return
    }
    
    console.log('\n🔧 Clicking Use Template button...')
    
    // Listen for console messages and errors
    page.on('console', msg => {
      if (msg.type() === 'error') {
        console.log(`❌ Console Error: ${msg.text()}`)
      } else if (msg.text().includes('Template') || msg.text().includes('template')) {
        console.log(`📝 Console: ${msg.text()}`)
      }
    })
    
    // Listen for network requests
    page.on('request', request => {
      if (request.url().includes('template') || request.url().includes('github')) {
        console.log(`🌐 Network Request: ${request.method()} ${request.url()}`)
      }
    })
    
    // Click the button
    await useTemplateButton.click()
    
    // Wait a moment for any async operations
    await new Promise(resolve => setTimeout(resolve, 3000))
    
    // Check if we got redirected to the editor or if files were added
    const currentUrl = page.url()
    console.log(`\n📍 Current URL: ${currentUrl}`)
    
    // Check if there are any toast notifications
    const toastMessages = await page.evaluate(() => {
      const toasts = document.querySelectorAll('[role="alert"], .toast, .notification')
      return Array.from(toasts).map(toast => toast.textContent).filter(Boolean)
    })
    
    if (toastMessages.length > 0) {
      console.log('📢 Toast messages:')
      toastMessages.forEach(msg => console.log(`  - ${msg}`))
    }
    
    // Check if we're on the editor page
    if (currentUrl.includes('/editor') || currentUrl.includes('/builder')) {
      console.log('✅ SUCCESS: Redirected to editor page!')
      
      // Check if there are any files in the editor
      const filesInEditor = await page.evaluate(() => {
        const fileList = document.querySelector('.file-list, .file-tree, [data-testid="file-list"]')
        if (fileList) {
          const files = fileList.querySelectorAll('li, .file-item, [data-file]')
          return Array.from(files).map(file => file.textContent?.trim()).filter(Boolean)
        }
        return []
      })
      
      if (filesInEditor.length > 0) {
        console.log('📁 Files in editor:')
        filesInEditor.forEach(file => console.log(`  - ${file}`))
      } else {
        console.log('⚠️ No files visible in editor')
      }
      
    } else {
      console.log('❌ FAILED: Not redirected to editor page')
      
      // Check if there are any error messages on the page
      const errorMessages = await page.evaluate(() => {
        const errors = document.querySelectorAll('.error, .alert-danger, [class*="error"]')
        return Array.from(errors).map(error => error.textContent?.trim()).filter(Boolean)
      })
      
      if (errorMessages.length > 0) {
        console.log('❌ Error messages on page:')
        errorMessages.forEach(error => console.log(`  - ${error}`))
      }
    }
    
    // Check if there are any JavaScript errors in the console
    const jsErrors = await page.evaluate(() => {
      return window.consoleErrors || []
    })
    
    if (jsErrors.length > 0) {
      console.log('❌ JavaScript errors:')
      jsErrors.forEach(error => console.log(`  - ${error}`))
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error.message)
  } finally {
    await browser.close()
  }
}

testUseTemplate().catch(console.error)

