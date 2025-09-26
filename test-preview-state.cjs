const puppeteer = require('puppeteer')

async function testPreviewState() {
  console.log('🔍 Testing preview state management...')
  
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ['--start-maximized']
  })
  
  const page = await browser.newPage()
  
  // Capture console messages
  page.on('console', msg => {
    console.log(`[${msg.type().toUpperCase()}] ${msg.text()}`)
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
      return { title, id }
    }, firstTemplate)
    
    console.log(`📝 Template: ${templateInfo.title}`)
    console.log(`🆔 ID: ${templateInfo.id}`)
    
    // Check initial state
    console.log('\n🔍 Checking initial state...')
    const initialState = await page.evaluate(() => {
      const modal = document.querySelector('.fixed.inset-0')
      return {
        modalExists: !!modal,
        modalVisible: modal && modal.offsetParent !== null,
        modalDisplay: modal ? window.getComputedStyle(modal).display : 'none',
        modalOpacity: modal ? window.getComputedStyle(modal).opacity : '0'
      }
    })
    
    console.log('📊 Initial state:')
    console.log(`  Modal exists: ${initialState.modalExists}`)
    console.log(`  Modal visible: ${initialState.modalVisible}`)
    console.log(`  Modal display: ${initialState.modalDisplay}`)
    console.log(`  Modal opacity: ${initialState.modalOpacity}`)
    
    // Find and click preview button
    const previewButton = await firstTemplate.$('button[title="Preview"]')
    if (!previewButton) {
      console.log('❌ Preview button not found')
      return
    }
    
    console.log('\n👁️ Clicking preview button...')
    await previewButton.click()
    
    // Wait for state change
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Check state after click
    console.log('\n🔍 Checking state after click...')
    const afterClickState = await page.evaluate(() => {
      const modal = document.querySelector('.fixed.inset-0')
      return {
        modalExists: !!modal,
        modalVisible: modal && modal.offsetParent !== null,
        modalDisplay: modal ? window.getComputedStyle(modal).display : 'none',
        modalOpacity: modal ? window.getComputedStyle(modal).opacity : '0',
        modalZIndex: modal ? window.getComputedStyle(modal).zIndex : 'auto',
        modalPosition: modal ? window.getComputedStyle(modal).position : 'static',
        bodyText: document.body.textContent.includes('Preview:'),
        modalText: modal ? modal.textContent.substring(0, 100) : ''
      }
    })
    
    console.log('📊 After click state:')
    console.log(`  Modal exists: ${afterClickState.modalExists}`)
    console.log(`  Modal visible: ${afterClickState.modalVisible}`)
    console.log(`  Modal display: ${afterClickState.modalDisplay}`)
    console.log(`  Modal opacity: ${afterClickState.modalOpacity}`)
    console.log(`  Modal z-index: ${afterClickState.modalZIndex}`)
    console.log(`  Modal position: ${afterClickState.modalPosition}`)
    console.log(`  Body contains "Preview:": ${afterClickState.bodyText}`)
    console.log(`  Modal text: ${afterClickState.modalText}`)
    
    // Try to force the modal to be visible
    console.log('\n🔧 Attempting to force modal visibility...')
    await page.evaluate(() => {
      const modal = document.querySelector('.fixed.inset-0')
      if (modal) {
        modal.style.display = 'flex'
        modal.style.opacity = '1'
        modal.style.zIndex = '9999'
        modal.style.position = 'fixed'
        modal.style.top = '0'
        modal.style.left = '0'
        modal.style.right = '0'
        modal.style.bottom = '0'
        console.log('Forced modal visibility')
      }
    })
    
    // Check if modal is now visible
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    const forcedState = await page.evaluate(() => {
      const modal = document.querySelector('.fixed.inset-0')
      return {
        modalVisible: modal && modal.offsetParent !== null,
        modalDisplay: modal ? window.getComputedStyle(modal).display : 'none',
        modalOpacity: modal ? window.getComputedStyle(modal).opacity : '0'
      }
    })
    
    console.log('📊 Forced visibility state:')
    console.log(`  Modal visible: ${forcedState.modalVisible}`)
    console.log(`  Modal display: ${forcedState.modalDisplay}`)
    console.log(`  Modal opacity: ${forcedState.modalOpacity}`)
    
    if (forcedState.modalVisible) {
      console.log('✅ Modal is now visible after forcing!')
      
      // Test modal content
      const modalContent = await page.evaluate(() => {
        const modal = document.querySelector('.fixed.inset-0')
        if (!modal) return null
        
        const title = modal.querySelector('h2')?.textContent || ''
        const previewFrame = modal.querySelector('.bg-white.rounded-lg')
        const buttons = Array.from(modal.querySelectorAll('button')).map(btn => btn.textContent.trim())
        
        return { title, hasPreviewFrame: !!previewFrame, buttons }
      })
      
      console.log('📋 Modal content:')
      console.log(`  Title: ${modalContent.title}`)
      console.log(`  Has preview frame: ${modalContent.hasPreviewFrame}`)
      console.log(`  Buttons: ${modalContent.buttons.join(', ')}`)
      
      // Test close functionality
      const closeButton = await page.$('.fixed.inset-0 button:last-child')
      if (closeButton) {
        console.log('\n❌ Testing close button...')
        await closeButton.click()
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        const closedState = await page.evaluate(() => {
          const modal = document.querySelector('.fixed.inset-0')
          return modal && modal.offsetParent !== null
        })
        
        console.log(`Modal closed: ${!closedState}`)
      }
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error.message)
  } finally {
    await browser.close()
  }
}

testPreviewState().catch(console.error)

