import puppeteer from 'puppeteer'

async function testFinalFix() {
  console.log('🔍 Testing Final Fix for Live Preview...\n')
  
  const browser = await puppeteer.launch({ 
    headless: false,
    defaultViewport: null,
    args: ['--start-maximized']
  })
  
  try {
    const page = await browser.newPage()
    
    // Enable console logging
    page.on('console', msg => {
      if (msg.text().includes('Preview') || 
          msg.text().includes('appContent') ||
          msg.text().includes('HTML') ||
          msg.text().includes('calculator') ||
          msg.text().includes('button') ||
          msg.text().includes('rendered') ||
          msg.text().includes('FirebaseAppService')) {
        console.log(`[${msg.type().toUpperCase()}] ${msg.text}`)
      }
    })
    
    await page.goto('https://dreambuild-2024-app.web.app/ai-builder', {
      waitUntil: 'networkidle2',
      timeout: 30000
    })
    
    // Wait for page to load
    await new Promise(resolve => setTimeout(resolve, 5000))
    
    console.log('📋 Step 1: Building a Calculator App')
    console.log('===================================')
    
    // Find prompt input
    const textareas = await page.$$('textarea')
    let promptInput = null
    
    for (const textarea of textareas) {
      const placeholder = await textarea.evaluate(el => el.placeholder)
      if (placeholder && placeholder.includes('Describe what you want to build')) {
        promptInput = textarea
        break
      }
    }
    
    await promptInput.click()
    await promptInput.evaluate(el => el.value = '')
    await promptInput.type('build a calculator app')
    
    // Find and click send button
    const sendButtons = await page.$$('button[class*="bg-primary"]')
    let sendButton = null
    
    for (const button of sendButtons) {
      const text = await button.evaluate(el => el.textContent.trim())
      const hasSendIcon = await button.$('svg')
      if (text === '' && hasSendIcon) {
        sendButton = button
        break
      }
    }
    
    await sendButton.click()
    console.log('✅ Calculator prompt sent')
    
    // Wait for generation
    await new Promise(resolve => setTimeout(resolve, 15000))
    
    console.log('\n📋 Step 2: Checking Live Preview Fix')
    console.log('====================================')
    
    // Switch to Live Preview tab
    const allButtons = await page.$$('button')
    let previewTab = null
    
    for (const button of allButtons) {
      const text = await button.evaluate(el => el.textContent.trim())
      if (text === 'Live Preview') {
        previewTab = button
        break
      }
    }
    
    if (previewTab) {
      await previewTab.click()
      console.log('✅ Switched to Live Preview tab')
      await new Promise(resolve => setTimeout(resolve, 5000))
    }
    
    // Check preview area
    const previewArea = await page.$('[class*="w-full h-full flex items-center justify-center"]')
    if (previewArea) {
      console.log('✅ Preview area found')
      
      // Get all child elements
      const children = await previewArea.$$('*')
      console.log(`📊 Total child elements: ${children.length}`)
      
      // Check for HTML document structure elements
      const htmlElements = await previewArea.$$('html, head, body, meta, title, link')
      console.log(`📄 HTML document elements found: ${htmlElements.length}`)
      
      if (htmlElements.length > 0) {
        console.log('❌ HTML document structure found in React component!')
        console.log('❌ This will cause display issues')
      } else {
        console.log('✅ No HTML document structure found - good!')
      }
      
      // Check for calculator-specific elements
      const calculatorElements = await previewArea.$$('.container, .calculator, .display, .buttons')
      console.log(`🧮 Calculator elements found: ${calculatorElements.length}`)
      
      if (calculatorElements.length > 0) {
        console.log('✅ Calculator app structure found!')
      }
      
      // Check for buttons
      const buttons = await previewArea.$$('button')
      console.log(`🔘 Buttons found: ${buttons.length}`)
      
      if (buttons.length > 0) {
        console.log('✅ Interactive buttons found!')
        
        // Test button styling
        const firstButton = buttons[0]
        const buttonText = await firstButton.evaluate(el => el.textContent.trim())
        const buttonBackground = await firstButton.evaluate(el => window.getComputedStyle(el).backgroundColor)
        const buttonColor = await firstButton.evaluate(el => window.getComputedStyle(el).color)
        
        console.log(`🔘 First button: "${buttonText}"`)
        console.log(`🔘 Button background: ${buttonBackground}`)
        console.log(`🔘 Button color: ${buttonColor}`)
        
        if (buttonBackground !== 'rgba(0, 0, 0, 0)' && buttonBackground !== 'transparent') {
          console.log('✅ Button has proper styling!')
        } else {
          console.log('⚠️ Button has no background styling')
        }
      }
      
      // Check for display input
      const displayInput = await previewArea.$('input#result')
      if (displayInput) {
        console.log('✅ Calculator display input found!')
        
        const displayValue = await displayInput.evaluate(el => el.value)
        const displayBackground = await displayInput.evaluate(el => window.getComputedStyle(el).backgroundColor)
        const displayFontSize = await displayInput.evaluate(el => window.getComputedStyle(el).fontSize)
        
        console.log(`📱 Display value: "${displayValue}"`)
        console.log(`📱 Display background: ${displayBackground}`)
        console.log(`📱 Display font size: ${displayFontSize}`)
        
        if (displayBackground !== 'rgba(0, 0, 0, 0)' && displayBackground !== 'transparent') {
          console.log('✅ Display has proper styling!')
        } else {
          console.log('⚠️ Display has no background styling')
        }
      }
      
      // Get the raw HTML content
      const previewHTML = await previewArea.evaluate(el => el.innerHTML)
      const previewText = await previewArea.evaluate(el => el.textContent)
      
      console.log(`📝 Preview HTML length: ${previewHTML.length}`)
      console.log(`📝 Preview text length: ${previewText.length}`)
      
      // Check if it's showing HTML as text
      if (previewText.includes('<!DOCTYPE html>') || previewText.includes('<html>') || previewText.includes('<head>') || previewText.includes('<body>')) {
        console.log('❌ HTML is being displayed as text instead of being rendered')
        console.log('❌ dangerouslySetInnerHTML is not working correctly')
      } else if (previewHTML.includes('<div') || previewHTML.includes('<button') || previewHTML.includes('<input')) {
        console.log('✅ HTML is being rendered correctly')
        console.log('✅ dangerouslySetInnerHTML is working')
      } else {
        console.log('❓ Unknown rendering state')
      }
      
    } else {
      console.log('❌ Preview area not found')
    }
    
    console.log('\n🎉 Final Fix Test Complete!')
    console.log('===========================')
    
  } catch (error) {
    console.error('❌ Test failed:', error.message)
  } finally {
    await browser.close()
  }
}

// Run the test
testFinalFix().catch(console.error)
