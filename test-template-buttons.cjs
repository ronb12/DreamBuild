const puppeteer = require('puppeteer')

async function testTemplateButtons() {
  console.log('🔘 Testing all template buttons...')
  
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ['--start-maximized']
  })
  
  const page = await browser.newPage()
  
  // Capture console messages
  page.on('console', msg => {
    if (msg.type() === 'error' || msg.type() === 'warn') {
      console.log(`[${msg.type().toUpperCase()}] ${msg.text()}`)
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
    
    // Get all template cards
    const templateCards = await page.$$('[data-template-id], .template-card')
    console.log(`📊 Found ${templateCards.length} template cards to test`)
    
    if (templateCards.length === 0) {
      console.log('❌ No template cards found')
      return
    }
    
    // Test first few templates in detail
    const templatesToTest = Math.min(5, templateCards.length)
    console.log(`🔍 Testing first ${templatesToTest} templates in detail...`)
    
    for (let i = 0; i < templatesToTest; i++) {
      console.log(`\n📋 Testing template ${i + 1}/${templatesToTest}:`)
      
      const template = templateCards[i]
      
      // Get template info
      const templateInfo = await page.evaluate((element) => {
        const title = element.querySelector('h3, .template-title, [class*="title"]')?.textContent || 'Unknown'
        const id = element.getAttribute('data-template-id') || 'no-id'
        const description = element.querySelector('p, .template-description, [class*="description"]')?.textContent || 'No description'
        
        // Find all buttons and interactive elements
        const buttons = element.querySelectorAll('button, [role="button"], a[href], .btn, [class*="button"]')
        const buttonInfo = Array.from(buttons).map((btn, index) => ({
          index: index + 1,
          text: btn.textContent.trim(),
          type: btn.tagName.toLowerCase(),
          classes: btn.className,
          disabled: btn.disabled,
          visible: btn.offsetParent !== null
        }))
        
        return { title, id, description, buttonInfo }
      }, template)
      
      console.log(`  📝 Template: ${templateInfo.title}`)
      console.log(`  🆔 ID: ${templateInfo.id}`)
      console.log(`  📄 Description: ${templateInfo.description.substring(0, 80)}...`)
      console.log(`  🔘 Buttons found: ${templateInfo.buttonInfo.length}`)
      
      // Display button details
      templateInfo.buttonInfo.forEach(button => {
        console.log(`    ${button.index}. "${button.text}" (${button.type}) - ${button.visible ? 'visible' : 'hidden'} - ${button.disabled ? 'disabled' : 'enabled'}`)
      })
      
      // Test each button
      const buttons = await template.$$('button, [role="button"], a[href], .btn, [class*="button"]')
      
      for (let j = 0; j < buttons.length; j++) {
        const button = buttons[j]
        
        try {
          // Check if button is visible and enabled
          const buttonState = await page.evaluate((btn) => {
            return {
              visible: btn.offsetParent !== null,
              disabled: btn.disabled,
              text: btn.textContent.trim(),
              type: btn.tagName.toLowerCase()
            }
          }, button)
          
          if (!buttonState.visible) {
            console.log(`    ⚠️ Button "${buttonState.text}" is not visible, skipping`)
            continue
          }
          
          if (buttonState.disabled) {
            console.log(`    ⚠️ Button "${buttonState.text}" is disabled, skipping`)
            continue
          }
          
          console.log(`    🔘 Testing button: "${buttonState.text}"`)
          
          // Hover over the button first
          await button.hover()
          await new Promise(resolve => setTimeout(resolve, 500))
          
          // Check if it's a "Use Template" button
          const isUseTemplateButton = buttonState.text.toLowerCase().includes('use') || 
                                    buttonState.text.toLowerCase().includes('template') ||
                                    buttonState.text.toLowerCase().includes('add') ||
                                    buttonState.text.toLowerCase().includes('select')
          
          if (isUseTemplateButton) {
            console.log(`      ✅ Found "Use Template" button: "${buttonState.text}"`)
            
            // Test clicking the button
            await button.click()
            await new Promise(resolve => setTimeout(resolve, 1000))
            
            // Check for success/error messages
            const messages = await page.evaluate(() => {
              const alerts = document.querySelectorAll('.alert, .toast, .notification, [class*="message"]')
              const modals = document.querySelectorAll('.modal, .dialog, [class*="modal"]')
              return {
                alerts: Array.from(alerts).map(el => el.textContent.trim()),
                modals: Array.from(modals).map(el => el.textContent.trim())
              }
            })
            
            if (messages.alerts.length > 0) {
              console.log(`      📢 Alert messages: ${messages.alerts.join(', ')}`)
            }
            
            if (messages.modals.length > 0) {
              console.log(`      🪟 Modal messages: ${messages.modals.join(', ')}`)
            }
            
            // Check if files were added to project
            const projectFiles = await page.evaluate(() => {
              // Look for file tree or project structure
              const fileTree = document.querySelector('.file-tree, [class*="file"], [class*="project"]')
              const codeEditor = document.querySelector('.monaco-editor, [class*="editor"]')
              return {
                hasFileTree: !!fileTree,
                hasCodeEditor: !!codeEditor
              }
            })
            
            if (projectFiles.hasFileTree || projectFiles.hasCodeEditor) {
              console.log(`      ✅ Template files appear to have been added to project`)
            } else {
              console.log(`      ⚠️ No clear indication that files were added to project`)
            }
            
          } else {
            console.log(`      ℹ️ Other button: "${buttonState.text}" - clicking to test`)
            await button.click()
            await new Promise(resolve => setTimeout(resolve, 500))
          }
          
        } catch (error) {
          console.log(`      ❌ Error testing button: ${error.message}`)
        }
      }
    }
    
    // Test template grid functionality
    console.log('\n🎯 Testing template grid functionality...')
    
    // Test view mode toggle
    const viewModeButtons = await page.$$('button[aria-label*="view"], button[title*="view"], [class*="view-mode"]')
    if (viewModeButtons.length > 0) {
      console.log('📊 Testing view mode toggle...')
      for (const button of viewModeButtons) {
        await button.click()
        await new Promise(resolve => setTimeout(resolve, 500))
      }
    }
    
    // Test search functionality
    const searchInput = await page.$('input[type="search"], input[placeholder*="search"]')
    if (searchInput) {
      console.log('🔍 Testing search functionality...')
      await searchInput.type('todo')
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const searchResults = await page.evaluate(() => {
        return document.querySelectorAll('[data-template-id], .template-card').length
      })
      console.log(`  Search results: ${searchResults} templates`)
      
      // Clear search
      await searchInput.click({ clickCount: 3 })
      await searchInput.type('')
      await new Promise(resolve => setTimeout(resolve, 1000))
    }
    
    // Test category filtering
    const categoryButtons = await page.$$('button[data-category], .category-button, [class*="category"]')
    if (categoryButtons.length > 0) {
      console.log('🏷️ Testing category filtering...')
      console.log(`  Found ${categoryButtons.length} category buttons`)
      
      // Test first few categories
      for (let i = 0; i < Math.min(3, categoryButtons.length); i++) {
        const categoryButton = categoryButtons[i]
        const categoryText = await page.evaluate(el => el.textContent.trim(), categoryButton)
        
        console.log(`  Testing category: "${categoryText}"`)
        await categoryButton.click()
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        const categoryResults = await page.evaluate(() => {
          return document.querySelectorAll('[data-template-id], .template-card').length
        })
        console.log(`    Results: ${categoryResults} templates`)
      }
      
      // Reset to all categories
      const allCategoriesButton = await page.$('button[data-category="all"], [class*="all"]')
      if (allCategoriesButton) {
        await allCategoriesButton.click()
        await new Promise(resolve => setTimeout(resolve, 1000))
      }
    }
    
    // Test sort functionality
    const sortButtons = await page.$$('button[data-sort], .sort-button, [class*="sort"]')
    if (sortButtons.length > 0) {
      console.log('🔄 Testing sort functionality...')
      for (const sortButton of sortButtons.slice(0, 2)) {
        const sortText = await page.evaluate(el => el.textContent.trim(), sortButton)
        console.log(`  Testing sort: "${sortText}"`)
        await sortButton.click()
        await new Promise(resolve => setTimeout(resolve, 1000))
      }
    }
    
    console.log('\n✅ Template button testing completed!')
    
  } catch (error) {
    console.error('❌ Test failed:', error.message)
  } finally {
    await browser.close()
  }
}

testTemplateButtons().catch(console.error)

