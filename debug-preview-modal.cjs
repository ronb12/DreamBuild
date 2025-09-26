const puppeteer = require('puppeteer')

async function debugPreviewModal() {
  console.log('🔍 Debugging preview modal...')
  
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ['--start-maximized']
  })
  
  const page = await browser.newPage()
  
  // Capture console messages
  page.on('console', msg => {
    if (msg.type() === 'error' || msg.type() === 'warn') {
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
      
      // Find all buttons
      const buttons = element.querySelectorAll('button')
      const buttonInfo = Array.from(buttons).map((btn, index) => ({
        index: index + 1,
        text: btn.textContent.trim(),
        title: btn.getAttribute('title') || '',
        classes: btn.className,
        disabled: btn.disabled,
        visible: btn.offsetParent !== null
      }))
      
      return { title, id, buttonInfo }
    }, firstTemplate)
    
    console.log(`📝 Template: ${templateInfo.title}`)
    console.log(`🆔 ID: ${templateInfo.id}`)
    console.log(`🔘 Buttons: ${templateInfo.buttonInfo.length}`)
    
    templateInfo.buttonInfo.forEach(button => {
      console.log(`  ${button.index}. "${button.text}" (title: "${button.title}") - ${button.visible ? 'visible' : 'hidden'}`)
    })
    
    // Find preview button
    const previewButton = await firstTemplate.$('button[title="Preview"]')
    if (!previewButton) {
      console.log('❌ Preview button not found')
      
      // Look for any button with eye icon
      const eyeButton = await firstTemplate.$('button svg[class*="eye"], button [class*="eye"]')
      if (eyeButton) {
        console.log('👁️ Found button with eye icon, trying to click it...')
        const parentButton = await eyeButton.$('xpath/..')
        if (parentButton) {
          await parentButton.click()
          await new Promise(resolve => setTimeout(resolve, 2000))
        }
      }
      return
    }
    
    console.log('👁️ Found preview button, clicking...')
    await previewButton.click()
    
    // Wait a bit and check what happened
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Check for any modal or overlay
    const modalCheck = await page.evaluate(() => {
      // Look for various modal selectors
      const selectors = [
        '.fixed.inset-0',
        '.modal',
        '.overlay',
        '[class*="modal"]',
        '[class*="overlay"]',
        '[class*="preview"]',
        '.z-50',
        '.backdrop'
      ]
      
      const results = {}
      selectors.forEach(selector => {
        const element = document.querySelector(selector)
        results[selector] = {
          exists: !!element,
          visible: element && element.offsetParent !== null,
          classes: element?.className || '',
          text: element?.textContent?.substring(0, 100) || ''
        }
      })
      
      // Also check for any elements with high z-index
      const highZElements = Array.from(document.querySelectorAll('*')).filter(el => {
        const zIndex = window.getComputedStyle(el).zIndex
        return zIndex && parseInt(zIndex) > 40
      }).map(el => ({
        tagName: el.tagName,
        className: el.className,
        zIndex: window.getComputedStyle(el).zIndex,
        visible: el.offsetParent !== null
      }))
      
      return { selectors: results, highZElements }
    })
    
    console.log('🔍 Modal detection results:')
    Object.entries(modalCheck.selectors).forEach(([selector, result]) => {
      if (result.exists) {
        console.log(`  ${selector}: exists=${result.exists}, visible=${result.visible}`)
        if (result.text) {
          console.log(`    Text: ${result.text}`)
        }
      }
    })
    
    if (modalCheck.highZElements.length > 0) {
      console.log('🔝 High z-index elements found:')
      modalCheck.highZElements.forEach(el => {
        console.log(`  ${el.tagName} (${el.className}) - z-index: ${el.zIndex}, visible: ${el.visible}`)
      })
    }
    
    // Check React state
    const reactState = await page.evaluate(() => {
      return {
        showPreview: window.showPreview,
        previewTemplate: window.previewTemplate,
        bodyText: document.body.textContent.includes('Preview:'),
        hasFixedElements: document.querySelectorAll('[class*="fixed"]').length
      }
    })
    
    console.log('⚛️ React state check:')
    console.log(`  showPreview: ${reactState.showPreview}`)
    console.log(`  previewTemplate: ${reactState.previewTemplate ? 'exists' : 'null'}`)
    console.log(`  Body contains "Preview:": ${reactState.bodyText}`)
    console.log(`  Fixed elements: ${reactState.hasFixedElements}`)
    
    // Try to trigger the preview manually
    console.log('\n🔄 Attempting to trigger preview manually...')
    await page.evaluate(() => {
      // Try to find and call the preview function
      if (window.handlePreviewTemplate) {
        console.log('Found handlePreviewTemplate function')
        // This won't work without the template object, but let's try
      }
      
      // Look for any React components or state
      const reactRoot = document.querySelector('#root')
      if (reactRoot) {
        console.log('Found React root')
      }
    })
    
    // Check for JavaScript errors
    const errors = await page.evaluate(() => {
      return window.consoleErrors || []
    })
    
    if (errors.length > 0) {
      console.log('❌ JavaScript errors found:')
      errors.forEach(error => console.log(`  ${error}`))
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error.message)
  } finally {
    await browser.close()
  }
}

debugPreviewModal().catch(console.error)

