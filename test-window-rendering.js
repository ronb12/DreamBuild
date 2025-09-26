// Test Window Rendering
import puppeteer from 'puppeteer'

const testWindowRendering = async () => {
  console.log('🔍 Testing Window Rendering...\n')
  
  const browser = await puppeteer.launch({ 
    headless: false,
    defaultViewport: { width: 1280, height: 800 }
  })
  
  const page = await browser.newPage()
  
  // Capture console messages
  page.on('console', msg => {
    const type = msg.type()
    const text = msg.text()
    
    if (type === 'error') {
      console.log(`❌ Console Error: ${text}`)
    } else if (text.includes('🪟')) {
      console.log(`🪟 Window Log: ${text}`)
    }
  })
  
  try {
    // Navigate to multi-window page
    console.log('📍 Navigating to Multi-Window page...')
    await page.goto('http://localhost:3000/multi-window', { waitUntil: 'networkidle0' })
    await page.waitForFunction('() => true', { timeout: 5000 })
    
    // Click "New Window" button
    const allButtons = await page.$$('button')
    let newWindowButton = null
    
    for (let i = 0; i < allButtons.length; i++) {
      const buttonText = await allButtons[i].evaluate(el => el.textContent)
      if (buttonText === 'New Window') {
        newWindowButton = allButtons[i]
        break
      }
    }
    
    if (newWindowButton) {
      console.log('🖱️ Clicking "New Window" button...')
      await newWindowButton.click()
      await page.waitForFunction('() => true', { timeout: 3000 })
      
      // Check for rendered windows
      console.log('\n🔍 Checking for rendered windows...')
      
      const windowElements = await page.evaluate(() => {
        const allElements = document.querySelectorAll('*')
        const windows = []
        
        allElements.forEach(el => {
          const rect = el.getBoundingClientRect()
          const style = window.getComputedStyle(el)
          
          // Look for elements that might be windows
          if (el.className.includes('fixed') || 
              el.className.includes('window') ||
              el.className.includes('card') ||
              el.className.includes('project') ||
              el.getAttribute('data-window-id') ||
              el.textContent.includes('Untitled Project')) {
            
            windows.push({
              tagName: el.tagName,
              className: el.className,
              id: el.id,
              text: el.textContent.substring(0, 100),
              position: {
                x: rect.left,
                y: rect.top,
                width: rect.width,
                height: rect.height
              },
              style: {
                position: style.position,
                zIndex: style.zIndex,
                display: style.display,
                visibility: style.visibility,
                opacity: style.opacity,
                transform: style.transform
              },
              visible: rect.width > 0 && rect.height > 0,
              inViewport: rect.left >= 0 && rect.top >= 0 && 
                         rect.left < window.innerWidth && 
                         rect.top < window.innerHeight
            })
          }
        })
        
        return windows
      })
      
      console.log(`📊 Found ${windowElements.length} potential window elements:`)
      
      if (windowElements.length > 0) {
        windowElements.forEach((element, i) => {
          console.log(`\n  ${i + 1}. <${element.tagName}> class="${element.className}"`)
          console.log(`     Text: "${element.text}..."`)
          console.log(`     Position: x=${element.position.x}, y=${element.position.y}`)
          console.log(`     Size: ${element.position.width}x${element.position.height}`)
          console.log(`     Style: position=${element.style.position}, z-index=${element.style.zIndex}`)
          console.log(`     Visible: ${element.visible}, In Viewport: ${element.inViewport}`)
        })
      } else {
        console.log('❌ No window elements found')
      }
      
      // Check for elements with specific window content
      const windowContent = await page.evaluate(() => {
        const allElements = document.querySelectorAll('*')
        const content = []
        
        allElements.forEach(el => {
          const text = el.textContent
          if (text.includes('Untitled Project') || 
              text.includes('Editor') ||
              text.includes('Preview') ||
              text.includes('Terminal') ||
              text.includes('Conversation')) {
            const rect = el.getBoundingClientRect()
            content.push({
              tagName: el.tagName,
              className: el.className,
              text: text.substring(0, 50),
              position: {
                x: rect.left,
                y: rect.top,
                width: rect.width,
                height: rect.height
              },
              visible: rect.width > 0 && rect.height > 0
            })
          }
        })
        
        return content
      })
      
      if (windowContent.length > 0) {
        console.log(`\n📊 Found ${windowContent.length} elements with window content:`)
        windowContent.forEach((element, i) => {
          console.log(`  ${i + 1}. <${element.tagName}> "${element.text}..."`)
          console.log(`     Position: x=${element.position.x}, y=${element.position.y}`)
          console.log(`     Visible: ${element.visible}`)
        })
      } else {
        console.log('\n❌ No window content found')
      }
      
      // Check viewport for any hidden elements
      console.log('\n🔍 Checking viewport for hidden elements...')
      
      const viewportCheck = await page.evaluate(() => {
        const allElements = document.querySelectorAll('*')
        const hidden = []
        
        allElements.forEach(el => {
          const rect = el.getBoundingClientRect()
          const style = window.getComputedStyle(el)
          
          // Look for elements that are positioned but not visible
          if (style.position === 'fixed' && 
              (rect.width > 0 && rect.height > 0) &&
              (rect.left < 0 || rect.top < 0 || 
               rect.left > window.innerWidth || 
               rect.top > window.innerHeight)) {
            
            hidden.push({
              tagName: el.tagName,
              className: el.className,
              position: {
                x: rect.left,
                y: rect.top,
                width: rect.width,
                height: rect.height
              },
              text: el.textContent.substring(0, 50)
            })
          }
        })
        
        return hidden
      })
      
      if (viewportCheck.length > 0) {
        console.log(`📊 Found ${viewportCheck.length} hidden elements outside viewport:`)
        viewportCheck.forEach((element, i) => {
          console.log(`  ${i + 1}. <${element.tagName}> "${element.text}..."`)
          console.log(`     Position: x=${element.position.x}, y=${element.position.y}`)
        })
      } else {
        console.log('✅ No hidden elements found outside viewport')
      }
      
    } else {
      console.log('❌ "New Window" button not found')
    }
    
    console.log('\n✅ Window rendering test completed!')
    
  } catch (error) {
    console.error('❌ Test failed:', error)
  } finally {
    await browser.close()
  }
}

// Run the test
testWindowRendering().catch(console.error)
