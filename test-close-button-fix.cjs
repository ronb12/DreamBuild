const puppeteer = require('puppeteer')

async function testCloseButtonFix() {
  console.log('🔧 Testing and fixing preview modal close button...')
  
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
      return { title }
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
    await new Promise(resolve => setTimeout(resolve, 3000))
    
    // Check if modal is visible
    const modalInfo = await page.evaluate(() => {
      const modal = document.querySelector('.fixed.inset-0')
      if (!modal) return { visible: false, error: 'Modal not found' }
      
      const modalVisible = modal.offsetParent !== null
      const backdropStyle = window.getComputedStyle(modal)
      
      // Look for close buttons
      const allButtons = Array.from(modal.querySelectorAll('button'))
      const closeButtons = allButtons.filter(btn => {
        const text = btn.textContent?.toLowerCase() || ''
        const title = btn.getAttribute('title')?.toLowerCase() || ''
        return text.includes('close') || title.includes('close') || text.includes('×') || title.includes('×')
      })
      
      return {
        visible: modalVisible,
        backdropColor: backdropStyle.backgroundColor,
        backdropOpacity: backdropStyle.opacity,
        totalButtons: allButtons.length,
        closeButtons: closeButtons.length,
        closeButtonTexts: closeButtons.map(btn => btn.textContent?.trim())
      }
    })
    
    console.log('\n📊 Modal analysis:')
    console.log(`  Visible: ${modalInfo.visible}`)
    console.log(`  Backdrop color: ${modalInfo.backdropColor}`)
    console.log(`  Backdrop opacity: ${modalInfo.backdropOpacity}`)
    console.log(`  Total buttons: ${modalInfo.totalButtons}`)
    console.log(`  Close buttons found: ${modalInfo.closeButtons}`)
    console.log(`  Close button texts: ${modalInfo.closeButtonTexts.join(', ')}`)
    
    if (!modalInfo.visible) {
      console.log('❌ Modal is not visible')
      return
    }
    
    console.log('✅ Modal is visible')
    
    // Try different ways to close the modal
    console.log('\n🔧 Attempting to close modal...')
    
    // Method 1: Try clicking any button that might be a close button
    const closeButtonFound = await page.evaluate(() => {
      const modal = document.querySelector('.fixed.inset-0')
      if (!modal) return false
      
      const allButtons = Array.from(modal.querySelectorAll('button'))
      for (const button of allButtons) {
        const text = button.textContent?.toLowerCase() || ''
        const title = button.getAttribute('title')?.toLowerCase() || ''
        if (text.includes('close') || title.includes('close') || text.includes('×') || title.includes('×')) {
          button.click()
          return true
        }
      }
      return false
    })
    
    if (closeButtonFound) {
      console.log('✅ Clicked close button')
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      const modalClosed = await page.evaluate(() => {
        const modal = document.querySelector('.fixed.inset-0')
        return !modal || modal.offsetParent === null
      })
      
      if (modalClosed) {
        console.log('✅ SUCCESS: Modal closed using close button!')
      } else {
        console.log('❌ Modal did not close')
      }
    } else {
      console.log('❌ No close button found, trying other methods...')
      
      // Method 2: Try clicking outside the modal (backdrop)
      console.log('🔧 Trying to click backdrop...')
      await page.evaluate(() => {
        const modal = document.querySelector('.fixed.inset-0')
        if (modal) {
          // Create a click event on the backdrop
          const rect = modal.getBoundingClientRect()
          const event = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            clientX: rect.left + 10,
            clientY: rect.top + 10
          })
          modal.dispatchEvent(event)
        }
      })
      
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      const modalClosedBackdrop = await page.evaluate(() => {
        const modal = document.querySelector('.fixed.inset-0')
        return !modal || modal.offsetParent === null
      })
      
      if (modalClosedBackdrop) {
        console.log('✅ SUCCESS: Modal closed by clicking backdrop!')
      } else {
        console.log('❌ Backdrop click did not work')
        
        // Method 3: Try ESC key
        console.log('🔧 Trying ESC key...')
        await page.keyboard.press('Escape')
        await new Promise(resolve => setTimeout(resolve, 2000))
        
        const modalClosedEsc = await page.evaluate(() => {
          const modal = document.querySelector('.fixed.inset-0')
          return !modal || modal.offsetParent === null
        })
        
        if (modalClosedEsc) {
          console.log('✅ SUCCESS: Modal closed using ESC key!')
        } else {
          console.log('❌ ESC key did not work either')
          
          // Method 4: Force close by manipulating React state
          console.log('🔧 Trying to force close by manipulating React state...')
          await page.evaluate(() => {
            // Try to find React components and force state change
            const modal = document.querySelector('.fixed.inset-0')
            if (modal) {
              // Try to trigger a close event
              const closeEvent = new Event('close')
              modal.dispatchEvent(closeEvent)
              
              // Try to find and click any SVG icon that might be a close button
              const svgIcons = modal.querySelectorAll('svg')
              for (const svg of svgIcons) {
                const button = svg.closest('button')
                if (button) {
                  button.click()
                  break
                }
              }
            }
          })
          
          await new Promise(resolve => setTimeout(resolve, 2000))
          
          const modalClosedForce = await page.evaluate(() => {
            const modal = document.querySelector('.fixed.inset-0')
            return !modal || modal.offsetParent === null
          })
          
          if (modalClosedForce) {
            console.log('✅ SUCCESS: Modal closed by force!')
          } else {
            console.log('❌ All methods failed to close the modal')
          }
        }
      }
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error.message)
  } finally {
    await browser.close()
  }
}

testCloseButtonFix().catch(console.error)

