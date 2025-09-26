// Test Button Click with Debug
import puppeteer from 'puppeteer'

const testButtonClickDebug = async () => {
  console.log('🔍 Testing Button Click with Debug...\n')
  
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
    } else if (text.includes('Creating new window') || text.includes('Window created')) {
      console.log(`🪟 Creation Log: ${text}`)
    }
  })
  
  try {
    // Navigate to multi-window page
    console.log('📍 Navigating to Multi-Window page...')
    await page.goto('http://localhost:3000/multi-window', { waitUntil: 'networkidle0' })
    await page.waitForFunction('() => true', { timeout: 5000 })
    
    // Find and click "New Window" button
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
      console.log('✅ Found "New Window" button')
      
      // Click the button
      console.log('\n🖱️ Clicking "New Window" button...')
      await newWindowButton.click()
      await page.waitForFunction('() => true', { timeout: 3000 })
      
      // Wait a bit more for any async operations
      await page.waitForFunction('() => true', { timeout: 2000 })
      
      // Check the DOM for any changes
      const domChanges = await page.evaluate(() => {
        const allDivs = document.querySelectorAll('div')
        const windowDivs = Array.from(allDivs).filter(div => 
          div.className.includes('window') || 
          div.className.includes('project') ||
          div.className.includes('card') ||
          div.getAttribute('data-window-id')
        )
        
        return {
          totalDivs: allDivs.length,
          windowDivs: windowDivs.length,
          windowDivDetails: windowDivs.map(div => ({
            className: div.className,
            id: div.id,
            text: div.textContent.substring(0, 50),
            position: div.style.position,
            zIndex: div.style.zIndex
          }))
        }
      })
      
      console.log('\n📊 DOM changes after click:')
      console.log(`  Total divs: ${domChanges.totalDivs}`)
      console.log(`  Window divs: ${domChanges.windowDivs}`)
      
      if (domChanges.windowDivDetails.length > 0) {
        console.log('  Window div details:')
        domChanges.windowDivDetails.forEach((div, i) => {
          console.log(`    ${i + 1}. Class: "${div.className}"`)
          console.log(`       ID: "${div.id}"`)
          console.log(`       Text: "${div.text}..."`)
          console.log(`       Position: "${div.position}"`)
          console.log(`       Z-Index: "${div.zIndex}"`)
        })
      }
      
      // Check for any elements with specific window-related content
      const windowContent = await page.evaluate(() => {
        const allElements = document.querySelectorAll('*')
        const windowElements = []
        
        allElements.forEach(el => {
          const text = el.textContent
          if (text.includes('Untitled Project') || 
              text.includes('Window') || 
              text.includes('Editor') ||
              text.includes('Preview')) {
            windowElements.push({
              tagName: el.tagName,
              className: el.className,
              id: el.id,
              text: text.substring(0, 100),
              position: el.style.position,
              zIndex: el.style.zIndex,
              visible: el.offsetWidth > 0 && el.offsetHeight > 0
            })
          }
        })
        
        return windowElements
      })
      
      if (windowContent.length > 0) {
        console.log('\n📊 Window content found:')
        windowContent.forEach((element, i) => {
          console.log(`  ${i + 1}. <${element.tagName}> class="${element.className}"`)
          console.log(`     Text: "${element.text}..."`)
          console.log(`     Visible: ${element.visible}`)
        })
      } else {
        console.log('\n❌ No window content found')
      }
      
    } else {
      console.log('❌ "New Window" button not found')
    }
    
    console.log('\n✅ Button click debug test completed!')
    
  } catch (error) {
    console.error('❌ Test failed:', error)
  } finally {
    await browser.close()
  }
}

// Run the test
testButtonClickDebug().catch(console.error)
