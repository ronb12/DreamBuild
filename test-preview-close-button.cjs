const puppeteer = require('puppeteer')

async function testPreviewCloseButton() {
  console.log('🔍 Testing preview modal close button...')
  
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
    
    // Check if modal is visible
    const modalVisible = await page.evaluate(() => {
      const modal = document.querySelector('.fixed.inset-0')
      return modal && modal.offsetParent !== null
    })
    
    if (!modalVisible) {
      console.log('❌ Modal is not visible')
      return
    }
    
    console.log('✅ Modal is visible')
    
    // Check for close buttons
    const closeButtons = await page.evaluate(() => {
      const modal = document.querySelector('.fixed.inset-0')
      if (!modal) return { found: false }
      
      // Look for X button in header
      const headerCloseButton = modal.querySelector('button[onclick], button:has(svg)')
      const headerCloseButtonText = headerCloseButton ? headerCloseButton.textContent : ''
      
      // Look for Close button in footer
      const footerCloseButton = Array.from(modal.querySelectorAll('button')).find(btn => 
        btn.textContent && btn.textContent.toLowerCase().includes('close')
      )
      const footerCloseButtonText = footerCloseButton ? footerCloseButton.textContent : ''
      
      return {
        found: true,
        headerCloseButton: {
          exists: !!headerCloseButton,
          text: headerCloseButtonText,
          visible: headerCloseButton && headerCloseButton.offsetParent !== null
        },
        footerCloseButton: {
          exists: !!footerCloseButton,
          text: footerCloseButtonText,
          visible: footerCloseButton && footerCloseButton.offsetParent !== null
        }
      }
    })
    
    console.log('\n📊 Close button analysis:')
    console.log(`🔹 Header close button (X):`)
    console.log(`  Exists: ${closeButtons.headerCloseButton.exists}`)
    console.log(`  Visible: ${closeButtons.headerCloseButton.visible}`)
    console.log(`  Text: "${closeButtons.headerCloseButton.text}"`)
    
    console.log(`\n🔹 Footer close button:`)
    console.log(`  Exists: ${closeButtons.footerCloseButton.exists}`)
    console.log(`  Visible: ${closeButtons.footerCloseButton.visible}`)
    console.log(`  Text: "${closeButtons.footerCloseButton.text}"`)
    
    // Try clicking the footer close button first (more reliable)
    if (closeButtons.footerCloseButton.exists && closeButtons.footerCloseButton.visible) {
      console.log('\n🔧 Clicking footer close button...')
      
      const footerCloseButton = await page.evaluate(() => {
        const modal = document.querySelector('.fixed.inset-0')
        if (!modal) return null
        
        return Array.from(modal.querySelectorAll('button')).find(btn => 
          btn.textContent && btn.textContent.toLowerCase().includes('close')
        )
      })
      
      if (footerCloseButton) {
        await page.evaluate((button) => {
          button.click()
        }, footerCloseButton)
        
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        const modalClosed = await page.evaluate(() => {
          const modal = document.querySelector('.fixed.inset-0')
          return !modal || modal.offsetParent === null
        })
        
        if (modalClosed) {
          console.log('✅ SUCCESS: Modal closed using footer close button!')
        } else {
          console.log('❌ FAILED: Modal did not close')
        }
      }
    }
    
    // If footer button didn't work, try header X button
    else if (closeButtons.headerCloseButton.exists && closeButtons.headerCloseButton.visible) {
      console.log('\n🔧 Clicking header close button (X)...')
      
      const headerCloseButton = await page.$('.fixed.inset-0 button[onclick], .fixed.inset-0 button:has(svg)')
      if (headerCloseButton) {
        await headerCloseButton.click()
        
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        const modalClosed = await page.evaluate(() => {
          const modal = document.querySelector('.fixed.inset-0')
          return !modal || modal.offsetParent === null
        })
        
        if (modalClosed) {
          console.log('✅ SUCCESS: Modal closed using header close button!')
        } else {
          console.log('❌ FAILED: Modal did not close')
        }
      }
    }
    
    // If neither button worked, try clicking outside the modal
    else {
      console.log('\n🔧 Trying to click outside modal to close...')
      
      await page.evaluate(() => {
        const modal = document.querySelector('.fixed.inset-0')
        if (modal) {
          // Click on the backdrop (outside the modal content)
          const backdrop = modal
          backdrop.click()
        }
      })
      
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const modalClosed = await page.evaluate(() => {
        const modal = document.querySelector('.fixed.inset-0')
        return !modal || modal.offsetParent === null
      })
      
      if (modalClosed) {
        console.log('✅ SUCCESS: Modal closed by clicking outside!')
      } else {
        console.log('❌ FAILED: Modal did not close by clicking outside')
        
        // Last resort - try ESC key
        console.log('\n🔧 Trying ESC key...')
        await page.keyboard.press('Escape')
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        const modalClosedEsc = await page.evaluate(() => {
          const modal = document.querySelector('.fixed.inset-0')
          return !modal || modal.offsetParent === null
        })
        
        if (modalClosedEsc) {
          console.log('✅ SUCCESS: Modal closed using ESC key!')
        } else {
          console.log('❌ FAILED: Modal did not close with ESC key either')
        }
      }
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error.message)
  } finally {
    await browser.close()
  }
}

testPreviewCloseButton().catch(console.error)

