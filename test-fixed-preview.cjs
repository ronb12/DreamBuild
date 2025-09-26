const puppeteer = require('puppeteer')

async function testFixedPreview() {
  console.log('🔧 Testing fixed preview functionality...')
  
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ['--start-maximized']
  })
  
  const page = await browser.newPage()
  
  // Capture console messages
  page.on('console', msg => {
    if (msg.type() === 'log' && msg.text().includes('🔍') || msg.text().includes('✅') || msg.text().includes('❌')) {
      console.log(`[CONSOLE] ${msg.text()}`)
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
        bodyText: document.body.textContent.includes('Preview:')
      }
    })
    
    console.log('📊 Initial state:')
    console.log(`  Modal exists: ${initialState.modalExists}`)
    console.log(`  Modal visible: ${initialState.modalVisible}`)
    console.log(`  Body contains "Preview:": ${initialState.bodyText}`)
    
    // Find and click preview button
    const previewButton = await firstTemplate.$('button[title="Preview"]')
    if (!previewButton) {
      console.log('❌ Preview button not found')
      return
    }
    
    console.log('\n👁️ Clicking preview button...')
    await previewButton.click()
    
    // Wait for state change
    await new Promise(resolve => setTimeout(resolve, 2000))
    
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
        bodyText: document.body.textContent.includes('Preview:'),
        modalText: modal ? modal.textContent.substring(0, 200) : ''
      }
    })
    
    console.log('📊 After click state:')
    console.log(`  Modal exists: ${afterClickState.modalExists}`)
    console.log(`  Modal visible: ${afterClickState.modalVisible}`)
    console.log(`  Modal display: ${afterClickState.modalDisplay}`)
    console.log(`  Modal opacity: ${afterClickState.modalOpacity}`)
    console.log(`  Modal z-index: ${afterClickState.modalZIndex}`)
    console.log(`  Body contains "Preview:": ${afterClickState.bodyText}`)
    console.log(`  Modal text: ${afterClickState.modalText}`)
    
    if (afterClickState.modalVisible) {
      console.log('✅ SUCCESS: Modal is now visible!')
      
      // Test modal content
      const modalContent = await page.evaluate(() => {
        const modal = document.querySelector('.fixed.inset-0')
        if (!modal) return null
        
        const title = modal.querySelector('h2')?.textContent || ''
        const previewFrame = modal.querySelector('.bg-white.rounded-lg')
        const buttons = Array.from(modal.querySelectorAll('button')).map(btn => btn.textContent.trim())
        const features = Array.from(modal.querySelectorAll('[class*="feature"]')).map(el => el.textContent.trim())
        
        return { title, hasPreviewFrame: !!previewFrame, buttons, features }
      })
      
      console.log('📋 Modal content:')
      console.log(`  Title: ${modalContent.title}`)
      console.log(`  Has preview frame: ${modalContent.hasPreviewFrame}`)
      console.log(`  Buttons: ${modalContent.buttons.join(', ')}`)
      console.log(`  Features: ${modalContent.features.length} found`)
      
      // Test close functionality
      const closeButton = await page.$('.fixed.inset-0 button:contains("Close")')
      if (closeButton) {
        console.log('\n❌ Testing close button...')
        await closeButton.click()
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        const closedState = await page.evaluate(() => {
          const modal = document.querySelector('.fixed.inset-0')
          return modal && modal.offsetParent !== null
        })
        
        console.log(`Modal closed: ${!closedState}`)
        
        if (!closedState) {
          console.log('✅ SUCCESS: Modal closed properly!')
        } else {
          console.log('❌ FAILED: Modal did not close')
        }
      } else {
        console.log('⚠️ Close button not found')
      }
      
      // Test "Use Template" button
      const useTemplateButton = await page.$('.fixed.inset-0 button:contains("Use Template")')
      if (useTemplateButton) {
        console.log('\n🚀 Testing "Use Template" button...')
        await useTemplateButton.click()
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        // Check if modal closed and template was used
        const afterUseState = await page.evaluate(() => {
          const modal = document.querySelector('.fixed.inset-0')
          return {
            modalClosed: !modal || modal.offsetParent === null,
            hasToast: document.body.textContent.includes('Template') && document.body.textContent.includes('added')
          }
        })
        
        console.log(`Modal closed after use: ${afterUseState.modalClosed}`)
        console.log(`Toast message shown: ${afterUseState.hasToast}`)
        
        if (afterUseState.modalClosed && afterUseState.hasToast) {
          console.log('✅ SUCCESS: "Use Template" button worked correctly!')
        } else {
          console.log('⚠️ "Use Template" button may have issues')
        }
      }
      
    } else {
      console.log('❌ FAILED: Modal is still not visible')
      
      // Try to force visibility again for debugging
      console.log('\n🔧 Attempting to force modal visibility...')
      await page.evaluate(() => {
        const modal = document.querySelector('.fixed.inset-0')
        if (modal) {
          modal.style.display = 'flex !important'
          modal.style.opacity = '1 !important'
          modal.style.zIndex = '9999 !important'
          modal.style.position = 'fixed !important'
          modal.style.top = '0 !important'
          modal.style.left = '0 !important'
          modal.style.right = '0 !important'
          modal.style.bottom = '0 !important'
          console.log('Forced modal visibility with !important')
        }
      })
      
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const forcedState = await page.evaluate(() => {
        const modal = document.querySelector('.fixed.inset-0')
        return modal && modal.offsetParent !== null
      })
      
      console.log(`Modal visible after forcing: ${forcedState}`)
      
      if (forcedState) {
        console.log('✅ Modal became visible after forcing CSS - there may be a CSS conflict')
      } else {
        console.log('❌ Modal still not visible even after forcing CSS')
      }
    }
    
    console.log('\n✅ Preview functionality testing completed!')
    
  } catch (error) {
    console.error('❌ Test failed:', error.message)
  } finally {
    await browser.close()
  }
}

testFixedPreview().catch(console.error)

