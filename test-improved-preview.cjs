const puppeteer = require('puppeteer')

async function testImprovedPreview() {
  console.log('🔍 Testing improved preview modal visibility...')
  
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
    const modalAnalysis = await page.evaluate(() => {
      const modal = document.querySelector('.fixed.inset-0')
      if (!modal) return { error: 'Modal not found' }
      
      // Check backdrop
      const backdrop = modal
      const backdropStyle = window.getComputedStyle(backdrop)
      
      // Check modal content
      const modalInner = modal.querySelector('.bg-white')
      const modalInnerStyle = modalInner ? window.getComputedStyle(modalInner) : {}
      
      // Check specific content elements
      const title = modal.querySelector('h2')
      const previewFrame = modal.querySelector('.bg-white.rounded-lg')
      const previewContent = modal.querySelector('.p-8')
      const closeButton = modal.querySelector('button')
      
      return {
        backdrop: {
          visible: backdrop.offsetParent !== null,
          backgroundColor: backdropStyle.backgroundColor,
          opacity: backdropStyle.opacity,
          zIndex: backdropStyle.zIndex
        },
        modalInner: {
          visible: modalInner && modalInner.offsetParent !== null,
          backgroundColor: modalInnerStyle.backgroundColor,
          opacity: modalInnerStyle.opacity,
          zIndex: modalInnerStyle.zIndex,
          border: modalInnerStyle.border,
          boxShadow: modalInnerStyle.boxShadow
        },
        content: {
          titleText: title?.textContent || '',
          previewFrameVisible: previewFrame && previewFrame.offsetParent !== null,
          previewContentVisible: previewContent && previewContent.offsetParent !== null,
          previewContentText: previewContent?.textContent?.substring(0, 150) || '',
          closeButtonExists: !!closeButton
        }
      }
    })
    
    console.log('📊 Improved modal analysis:')
    console.log('🔹 Backdrop:')
    console.log(`  Visible: ${modalAnalysis.backdrop.visible}`)
    console.log(`  Background: ${modalAnalysis.backdrop.backgroundColor}`)
    console.log(`  Opacity: ${modalAnalysis.backdrop.opacity}`)
    console.log(`  Z-index: ${modalAnalysis.backdrop.zIndex}`)
    
    console.log('\n🔹 Modal Inner:')
    console.log(`  Visible: ${modalAnalysis.modalInner.visible}`)
    console.log(`  Background: ${modalAnalysis.modalInner.backgroundColor}`)
    console.log(`  Opacity: ${modalAnalysis.modalInner.opacity}`)
    console.log(`  Z-index: ${modalAnalysis.modalInner.zIndex}`)
    console.log(`  Border: ${modalAnalysis.modalInner.border}`)
    
    console.log('\n🔹 Content:')
    console.log(`  Title: "${modalAnalysis.content.titleText}"`)
    console.log(`  Preview frame visible: ${modalAnalysis.content.previewFrameVisible}`)
    console.log(`  Preview content visible: ${modalAnalysis.content.previewContentVisible}`)
    console.log(`  Preview content: "${modalAnalysis.content.previewContentText}"`)
    console.log(`  Close button exists: ${modalAnalysis.content.closeButtonExists}`)
    
    // Test if modal is fully visible now
    if (modalAnalysis.backdrop.visible && modalAnalysis.modalInner.visible) {
      console.log('\n✅ SUCCESS: Modal is now fully visible!')
      
      // Test close functionality
      if (modalAnalysis.content.closeButtonExists) {
        console.log('\n❌ Testing close button...')
        const closeButton = await page.$('.fixed.inset-0 button')
        if (closeButton) {
          await closeButton.click()
          await new Promise(resolve => setTimeout(resolve, 1000))
          
          const modalClosed = await page.evaluate(() => {
            const modal = document.querySelector('.fixed.inset-0')
            return !modal || modal.offsetParent === null
          })
          
          console.log(`Modal closed: ${modalClosed}`)
          
          if (modalClosed) {
            console.log('✅ SUCCESS: Modal closed properly!')
          } else {
            console.log('❌ FAILED: Modal did not close')
          }
        }
      }
      
    } else {
      console.log('\n❌ FAILED: Modal is still not fully visible')
      
      if (!modalAnalysis.backdrop.visible) {
        console.log('  - Backdrop is not visible')
      }
      if (!modalAnalysis.modalInner.visible) {
        console.log('  - Modal inner is not visible')
      }
    }
    
    // Take a screenshot
    console.log('\n📸 Taking screenshot...')
    await page.screenshot({ path: 'improved-preview-modal.png', fullPage: true })
    console.log('Screenshot saved as improved-preview-modal.png')
    
  } catch (error) {
    console.error('❌ Test failed:', error.message)
  } finally {
    await browser.close()
  }
}

testImprovedPreview().catch(console.error)

