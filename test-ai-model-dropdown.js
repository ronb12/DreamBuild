// Test AI Model Dropdown
import puppeteer from 'puppeteer'

const testAIModelDropdown = async () => {
  console.log('🔍 Testing AI Model Dropdown...\n')
  
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
    } else if (text.includes('🔧')) {
      console.log(`🔧 Service Log: ${text}`)
    } else if (text.includes('🪟')) {
      console.log(`🪟 Window Log: ${text}`)
    }
  })
  
  try {
    // Navigate to AI Builder page
    console.log('📍 Navigating to AI Builder page...')
    await page.goto('http://localhost:3000/ai-builder', { waitUntil: 'networkidle0' })
    await page.waitForFunction('() => true', { timeout: 5000 })
    
    // Find the AI model selector button
    const modelSelectorButton = await page.$('button[class*="w-full p-2 rounded"]')
    if (!modelSelectorButton) {
      console.log('❌ AI model selector button not found')
      return
    }
    
    console.log('✅ AI model selector button found')
    
    // Click to open dropdown
    console.log('\n🖱️ Clicking AI model selector...')
    await modelSelectorButton.click()
    await page.waitForFunction('() => true', { timeout: 2000 })
    
    // Check if dropdown is visible
    const dropdown = await page.$('.model-selector')
    if (!dropdown) {
      console.log('❌ Model selector dropdown not found')
      return
    }
    
    console.log('✅ Model selector dropdown opened')
    
    // Get all model options
    const modelOptions = await page.$$('.model-selector button[class*="w-full p-3 rounded"]')
    console.log(`\n📊 Found ${modelOptions.length} model options:`)
    
    if (modelOptions.length === 0) {
      console.log('❌ No model options found in dropdown')
      
      // Check what's in the dropdown
      const dropdownContent = await page.evaluate(() => {
        const dropdown = document.querySelector('.model-selector')
        if (dropdown) {
          return {
            innerHTML: dropdown.innerHTML,
            textContent: dropdown.textContent,
            childElementCount: dropdown.childElementCount
          }
        }
        return null
      })
      
      if (dropdownContent) {
        console.log('📊 Dropdown content:')
        console.log(`  Child elements: ${dropdownContent.childElementCount}`)
        console.log(`  Text content: "${dropdownContent.textContent}"`)
        console.log(`  HTML: ${dropdownContent.innerHTML.substring(0, 200)}...`)
      }
    } else {
      // List all model options
      for (let i = 0; i < modelOptions.length; i++) {
        const optionText = await modelOptions[i].evaluate(el => {
          const nameEl = el.querySelector('span[class*="font-medium"]')
          const descEl = el.querySelector('span[class*="text-xs"]')
          return {
            name: nameEl ? nameEl.textContent : 'Unknown',
            description: descEl ? descEl.textContent : 'No description'
          }
        })
        console.log(`  ${i + 1}. ${optionText.name} - ${optionText.description}`)
      }
    }
    
    // Check for scroll indicators
    const scrollIndicators = await page.$$('.model-selector button:has-text("Scroll to")')
    console.log(`\n📊 Scroll indicators: ${scrollIndicators.length}`)
    
    // Check dropdown dimensions
    const dropdownDimensions = await page.evaluate(() => {
      const dropdown = document.querySelector('.model-selector')
      if (dropdown) {
        const rect = dropdown.getBoundingClientRect()
        const scrollContainer = dropdown.querySelector('.overflow-y-auto')
        if (scrollContainer) {
          return {
            dropdownHeight: rect.height,
            scrollHeight: scrollContainer.scrollHeight,
            clientHeight: scrollContainer.clientHeight,
            needsScrolling: scrollContainer.scrollHeight > scrollContainer.clientHeight
          }
        }
      }
      return null
    })
    
    if (dropdownDimensions) {
      console.log('\n📊 Dropdown dimensions:')
      console.log(`  Dropdown height: ${dropdownDimensions.dropdownHeight}px`)
      console.log(`  Scroll height: ${dropdownDimensions.scrollHeight}px`)
      console.log(`  Client height: ${dropdownDimensions.clientHeight}px`)
      console.log(`  Needs scrolling: ${dropdownDimensions.needsScrolling}`)
    }
    
    console.log('\n✅ AI model dropdown test completed!')
    
  } catch (error) {
    console.error('❌ Test failed:', error)
  } finally {
    await browser.close()
  }
}

// Run the test
testAIModelDropdown().catch(console.error)
