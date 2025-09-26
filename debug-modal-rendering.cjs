const puppeteer = require('puppeteer')

async function debugModalRendering() {
  console.log('🔍 Debugging modal rendering...')
  
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
    
    // Find and click preview button
    const previewButton = await firstTemplate.$('button[title="Preview"]')
    if (!previewButton) {
      console.log('❌ Preview button not found')
      return
    }
    
    console.log('👁️ Clicking preview button...')
    await previewButton.click()
    
    // Wait for state change
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Debug the modal rendering
    const modalDebug = await page.evaluate(() => {
      const modal = document.querySelector('.fixed.inset-0')
      if (!modal) return { error: 'Modal not found' }
      
      const computedStyle = window.getComputedStyle(modal)
      const rect = modal.getBoundingClientRect()
      
      return {
        exists: true,
        display: computedStyle.display,
        opacity: computedStyle.opacity,
        visibility: computedStyle.visibility,
        zIndex: computedStyle.zIndex,
        position: computedStyle.position,
        top: computedStyle.top,
        left: computedStyle.left,
        right: computedStyle.right,
        bottom: computedStyle.bottom,
        width: computedStyle.width,
        height: computedStyle.height,
        rect: {
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height
        },
        offsetParent: modal.offsetParent ? modal.offsetParent.tagName : null,
        parentElement: modal.parentElement ? modal.parentElement.tagName : null,
        textContent: modal.textContent.substring(0, 100),
        className: modal.className,
        style: modal.style.cssText
      }
    })
    
    console.log('🔍 Modal debug info:')
    console.log(JSON.stringify(modalDebug, null, 2))
    
    // Check if modal is in the right place in DOM
    const domStructure = await page.evaluate(() => {
      const modal = document.querySelector('.fixed.inset-0')
      if (!modal) return null
      
      const path = []
      let element = modal
      while (element && element !== document.body) {
        path.unshift({
          tagName: element.tagName,
          className: element.className,
          id: element.id
        })
        element = element.parentElement
      }
      
      return path
    })
    
    console.log('\n🌳 DOM structure:')
    if (domStructure) {
      domStructure.forEach((level, index) => {
        console.log(`  ${index + 1}. ${level.tagName} ${level.className} ${level.id}`)
      })
    }
    
    // Check for any elements that might be covering the modal
    const coveringElements = await page.evaluate(() => {
      const modal = document.querySelector('.fixed.inset-0')
      if (!modal) return null
      
      const modalRect = modal.getBoundingClientRect()
      const allElements = Array.from(document.querySelectorAll('*'))
      
      const covering = allElements.filter(el => {
        if (el === modal || el.contains(modal)) return false
        
        const rect = el.getBoundingClientRect()
        const style = window.getComputedStyle(el)
        
        return (
          rect.top <= modalRect.top &&
          rect.left <= modalRect.left &&
          rect.bottom >= modalRect.bottom &&
          rect.right >= modalRect.right &&
          style.zIndex && parseInt(style.zIndex) >= 9999
        )
      })
      
      return covering.map(el => ({
        tagName: el.tagName,
        className: el.className,
        id: el.id,
        zIndex: window.getComputedStyle(el).zIndex,
        rect: el.getBoundingClientRect()
      }))
    })
    
    console.log('\n🔍 Covering elements:')
    if (coveringElements && coveringElements.length > 0) {
      coveringElements.forEach((el, index) => {
        console.log(`  ${index + 1}. ${el.tagName} ${el.className} (z-index: ${el.zIndex})`)
      })
    } else {
      console.log('  No covering elements found')
    }
    
    // Try to create a simple test modal
    console.log('\n🧪 Creating test modal...')
    await page.evaluate(() => {
      const testModal = document.createElement('div')
      testModal.style.cssText = `
        position: fixed !important;
        top: 0 !important;
        left: 0 !important;
        right: 0 !important;
        bottom: 0 !important;
        background: rgba(0, 0, 0, 0.5) !important;
        z-index: 99999 !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
      `
      testModal.innerHTML = `
        <div style="background: white; padding: 20px; border-radius: 8px;">
          <h2>Test Modal</h2>
          <p>This is a test modal to check if modals work at all.</p>
          <button onclick="this.parentElement.parentElement.remove()">Close</button>
        </div>
      `
      document.body.appendChild(testModal)
    })
    
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    const testModalVisible = await page.evaluate(() => {
      const testModal = document.querySelector('div[style*="z-index: 99999"]')
      return testModal && testModal.offsetParent !== null
    })
    
    console.log(`Test modal visible: ${testModalVisible}`)
    
    if (testModalVisible) {
      console.log('✅ Test modal works - the issue is with the React modal')
    } else {
      console.log('❌ Test modal also fails - there may be a global CSS issue')
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error.message)
  } finally {
    await browser.close()
  }
}

debugModalRendering().catch(console.error)

