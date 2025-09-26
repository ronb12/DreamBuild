const puppeteer = require('puppeteer')

async function testPreviewVisibility() {
  console.log('👁️ Testing preview modal visibility...')
  
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
    
    console.log(`📝 Template: ${templateInfo.title}`)
    
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
    
    // Check modal visibility and content
    const modalContent = await page.evaluate(() => {
      const modal = document.querySelector('.fixed.inset-0')
      if (!modal) return { error: 'Modal not found' }
      
      // Check backdrop
      const backdrop = modal
      const backdropVisible = backdrop && backdrop.offsetParent !== null
      const backdropStyle = backdrop ? window.getComputedStyle(backdrop) : {}
      
      // Check modal content
      const modalInner = modal.querySelector('.bg-white')
      const modalInnerVisible = modalInner && modalInner.offsetParent !== null
      const modalInnerStyle = modalInner ? window.getComputedStyle(modalInner) : {}
      
      // Check specific content elements
      const title = modal.querySelector('h2')
      const previewFrame = modal.querySelector('.bg-white.rounded-lg')
      const previewContent = modal.querySelector('.p-8')
      
      return {
        backdrop: {
          exists: !!backdrop,
          visible: backdropVisible,
          display: backdropStyle.display,
          opacity: backdropStyle.opacity,
          zIndex: backdropStyle.zIndex,
          backgroundColor: backdropStyle.backgroundColor
        },
        modalInner: {
          exists: !!modalInner,
          visible: modalInnerVisible,
          display: modalInnerStyle.display,
          opacity: modalInnerStyle.opacity,
          zIndex: modalInnerStyle.zIndex,
          backgroundColor: modalInnerStyle.backgroundColor
        },
        content: {
          titleExists: !!title,
          titleText: title?.textContent || '',
          previewFrameExists: !!previewFrame,
          previewContentExists: !!previewContent,
          previewContentText: previewContent?.textContent?.substring(0, 200) || ''
        }
      }
    })
    
    console.log('📊 Modal visibility analysis:')
    console.log('🔹 Backdrop:')
    console.log(`  Exists: ${modalContent.backdrop.exists}`)
    console.log(`  Visible: ${modalContent.backdrop.visible}`)
    console.log(`  Display: ${modalContent.backdrop.display}`)
    console.log(`  Opacity: ${modalContent.backdrop.opacity}`)
    console.log(`  Z-index: ${modalContent.backdrop.zIndex}`)
    console.log(`  Background: ${modalContent.backdrop.backgroundColor}`)
    
    console.log('\n🔹 Modal Inner:')
    console.log(`  Exists: ${modalContent.modalInner.exists}`)
    console.log(`  Visible: ${modalContent.modalInner.visible}`)
    console.log(`  Display: ${modalContent.modalInner.display}`)
    console.log(`  Opacity: ${modalContent.modalInner.opacity}`)
    console.log(`  Z-index: ${modalContent.modalInner.zIndex}`)
    console.log(`  Background: ${modalContent.modalInner.backgroundColor}`)
    
    console.log('\n🔹 Content:')
    console.log(`  Title exists: ${modalContent.content.titleExists}`)
    console.log(`  Title text: "${modalContent.content.titleText}"`)
    console.log(`  Preview frame exists: ${modalContent.content.previewFrameExists}`)
    console.log(`  Preview content exists: ${modalContent.content.previewContentExists}`)
    console.log(`  Preview content: "${modalContent.content.previewContentText}"`)
    
    // Take a screenshot to see what's actually visible
    console.log('\n📸 Taking screenshot...')
    await page.screenshot({ path: 'preview-modal-test.png', fullPage: true })
    console.log('Screenshot saved as preview-modal-test.png')
    
    // Try to make the modal more visible by adjusting styles
    console.log('\n🔧 Attempting to enhance modal visibility...')
    await page.evaluate(() => {
      const modal = document.querySelector('.fixed.inset-0')
      if (modal) {
        modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8) !important'
        modal.style.zIndex = '99999 !important'
        modal.style.display = 'flex !important'
        modal.style.opacity = '1 !important'
        
        const modalInner = modal.querySelector('.bg-white')
        if (modalInner) {
          modalInner.style.backgroundColor = 'white !important'
          modalInner.style.zIndex = '100000 !important'
          modalInner.style.opacity = '1 !important'
          modalInner.style.border = '2px solid #000 !important'
        }
      }
    })
    
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Check if enhanced modal is more visible
    const enhancedVisibility = await page.evaluate(() => {
      const modal = document.querySelector('.fixed.inset-0')
      const modalInner = modal?.querySelector('.bg-white')
      
      return {
        modalVisible: modal && modal.offsetParent !== null,
        modalInnerVisible: modalInner && modalInner.offsetParent !== null,
        modalStyle: modal ? modal.style.cssText : '',
        modalInnerStyle: modalInner ? modalInner.style.cssText : ''
      }
    })
    
    console.log('\n🔧 Enhanced visibility:')
    console.log(`  Modal visible: ${enhancedVisibility.modalVisible}`)
    console.log(`  Modal inner visible: ${enhancedVisibility.modalInnerVisible}`)
    
    if (enhancedVisibility.modalVisible) {
      console.log('✅ Modal is now visible after enhancement!')
    } else {
      console.log('❌ Modal is still not visible even after enhancement')
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error.message)
  } finally {
    await browser.close()
  }
}

testPreviewVisibility().catch(console.error)

