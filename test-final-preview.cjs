const puppeteer = require('puppeteer')

async function testFinalPreview() {
  console.log('🎯 Testing final preview functionality...')
  
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ['--start-maximized']
  })
  
  const page = await browser.newPage()
  
  // Capture console messages
  page.on('console', msg => {
    if (msg.type() === 'log' && (msg.text().includes('🔍') || msg.text().includes('✅') || msg.text().includes('❌'))) {
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
    
    // Find and click preview button
    const previewButton = await firstTemplate.$('button[title="Preview"]')
    if (!previewButton) {
      console.log('❌ Preview button not found')
      return
    }
    
    console.log('\n👁️ Clicking preview button...')
    await previewButton.click()
    
    // Wait for modal to appear
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Check if modal is visible
    const modalState = await page.evaluate(() => {
      const modal = document.querySelector('.fixed.inset-0')
      return {
        exists: !!modal,
        visible: modal && modal.offsetParent !== null,
        display: modal ? window.getComputedStyle(modal).display : 'none',
        opacity: modal ? window.getComputedStyle(modal).opacity : '0',
        zIndex: modal ? window.getComputedStyle(modal).zIndex : 'auto',
        rect: modal ? modal.getBoundingClientRect() : null
      }
    })
    
    console.log('📊 Modal state:')
    console.log(`  Exists: ${modalState.exists}`)
    console.log(`  Visible: ${modalState.visible}`)
    console.log(`  Display: ${modalState.display}`)
    console.log(`  Opacity: ${modalState.opacity}`)
    console.log(`  Z-index: ${modalState.zIndex}`)
    
    if (modalState.visible) {
      console.log('✅ SUCCESS: Modal is now visible!')
      
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
      
      // Debug modal positioning
      if (modalState.rect) {
        console.log('📐 Modal rect:', modalState.rect)
      }
      
      // Check if modal is in the right place in DOM
      const domInfo = await page.evaluate(() => {
        const modal = document.querySelector('.fixed.inset-0')
        if (!modal) return null
        
        return {
          parentTag: modal.parentElement?.tagName,
          parentClass: modal.parentElement?.className,
          bodyChildren: document.body.children.length,
          modalIndex: Array.from(document.body.children).indexOf(modal)
        }
      })
      
      console.log('🌳 DOM info:', domInfo)
    }
    
    console.log('\n✅ Preview functionality testing completed!')
    
  } catch (error) {
    console.error('❌ Test failed:', error.message)
  } finally {
    await browser.close()
  }
}

testFinalPreview().catch(console.error)

