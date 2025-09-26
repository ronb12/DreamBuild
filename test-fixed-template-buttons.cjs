const puppeteer = require('puppeteer')

async function testFixedTemplateButtons() {
  console.log('🔘 Testing fixed template buttons...')
  
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
    
    // Test the first template in detail
    const firstTemplate = await page.$('[data-template-id], .template-card')
    if (!firstTemplate) {
      console.log('❌ No templates found')
      return
    }
    
    console.log('🔍 Testing first template buttons...')
    
    // Get template info
    const templateInfo = await page.evaluate((element) => {
      const title = element.querySelector('h3, .template-title, [class*="title"]')?.textContent || 'Unknown'
      const id = element.getAttribute('data-template-id') || 'no-id'
      
      // Find all buttons
      const buttons = element.querySelectorAll('button')
      const buttonInfo = Array.from(buttons).map((btn, index) => ({
        index: index + 1,
        text: btn.textContent.trim(),
        title: btn.getAttribute('title') || '',
        classes: btn.className,
        disabled: btn.disabled,
        visible: btn.offsetParent !== null
      }))
      
      return { title, id, buttonInfo }
    }, firstTemplate)
    
    console.log(`📝 Template: ${templateInfo.title}`)
    console.log(`🆔 ID: ${templateInfo.id}`)
    console.log(`🔘 Buttons found: ${templateInfo.buttonInfo.length}`)
    
    // Display button details
    templateInfo.buttonInfo.forEach(button => {
      console.log(`  ${button.index}. "${button.text}" (title: "${button.title}") - ${button.visible ? 'visible' : 'hidden'} - ${button.disabled ? 'disabled' : 'enabled'}`)
    })
    
    // Test each button
    const buttons = await firstTemplate.$$('button')
    
    for (let i = 0; i < buttons.length; i++) {
      const button = buttons[i]
      
      try {
        // Get button info
        const buttonInfo = await page.evaluate((btn) => {
          return {
            text: btn.textContent.trim(),
            title: btn.getAttribute('title') || '',
            disabled: btn.disabled,
            visible: btn.offsetParent !== null
          }
        }, button)
        
        if (!buttonInfo.visible) {
          console.log(`  ⚠️ Button ${i + 1} is not visible, skipping`)
          continue
        }
        
        if (buttonInfo.disabled) {
          console.log(`  ⚠️ Button ${i + 1} is disabled, skipping`)
          continue
        }
        
        console.log(`\n  🔘 Testing button ${i + 1}: "${buttonInfo.text}" (${buttonInfo.title})`)
        
        // Hover over the button first
        await button.hover()
        await new Promise(resolve => setTimeout(resolve, 500))
        
        // Check button type based on text/title
        const isUseButton = buttonInfo.text.toLowerCase().includes('use') || 
                           buttonInfo.text.toLowerCase().includes('template')
        const isPreviewButton = buttonInfo.title.toLowerCase().includes('preview') ||
                               buttonInfo.text.toLowerCase().includes('preview')
        const isCopyButton = buttonInfo.title.toLowerCase().includes('copy') ||
                            buttonInfo.text.toLowerCase().includes('copy')
        
        // Click the button
        await button.click()
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        // Check for success messages or changes
        const messages = await page.evaluate(() => {
          // Look for toast notifications
          const toasts = document.querySelectorAll('.toast, .notification, [class*="toast"]')
          const alerts = document.querySelectorAll('.alert, [class*="alert"]')
          const modals = document.querySelectorAll('.modal, .dialog, [class*="modal"]')
          
          return {
            toasts: Array.from(toasts).map(el => el.textContent.trim()),
            alerts: Array.from(alerts).map(el => el.textContent.trim()),
            modals: Array.from(modals).map(el => el.textContent.trim())
          }
        })
        
        // Check for clipboard content (for copy button)
        let clipboardContent = null
        if (isCopyButton) {
          try {
            clipboardContent = await page.evaluate(() => {
              return navigator.clipboard.readText()
            })
          } catch (error) {
            // Clipboard access might be restricted
            console.log(`    ⚠️ Could not access clipboard: ${error.message}`)
          }
        }
        
        // Display results
        if (messages.toasts.length > 0) {
          console.log(`    📢 Toast messages: ${messages.toasts.join(', ')}`)
        }
        
        if (messages.alerts.length > 0) {
          console.log(`    🚨 Alert messages: ${messages.alerts.join(', ')}`)
        }
        
        if (messages.modals.length > 0) {
          console.log(`    🪟 Modal messages: ${messages.modals.join(', ')}`)
        }
        
        if (clipboardContent) {
          console.log(`    📋 Clipboard content length: ${clipboardContent.length} characters`)
          console.log(`    📋 Clipboard preview: ${clipboardContent.substring(0, 100)}...`)
        }
        
        // Check for project files (for use button)
        if (isUseButton) {
          const projectFiles = await page.evaluate(() => {
            // Look for file tree or project structure
            const fileTree = document.querySelector('.file-tree, [class*="file"], [class*="project"]')
            const codeEditor = document.querySelector('.monaco-editor, [class*="editor"]')
            const projectPanel = document.querySelector('[class*="project"], [class*="files"]')
            
            return {
              hasFileTree: !!fileTree,
              hasCodeEditor: !!codeEditor,
              hasProjectPanel: !!projectPanel,
              bodyText: document.body.textContent.includes('package.json') || document.body.textContent.includes('App.jsx')
            }
          })
          
          if (projectFiles.hasFileTree || projectFiles.hasCodeEditor || projectFiles.hasProjectPanel || projectFiles.bodyText) {
            console.log(`    ✅ Template files appear to have been added to project`)
          } else {
            console.log(`    ⚠️ No clear indication that files were added to project`)
          }
        }
        
        // Determine if button worked
        if (isUseButton) {
          if (messages.toasts.some(msg => msg.includes('added to your project') || msg.includes('success'))) {
            console.log(`    ✅ Use Template button worked successfully!`)
          } else {
            console.log(`    ⚠️ Use Template button may not have worked as expected`)
          }
        } else if (isPreviewButton) {
          if (messages.toasts.some(msg => msg.includes('Previewing') || msg.includes('success'))) {
            console.log(`    ✅ Preview button worked successfully!`)
          } else {
            console.log(`    ⚠️ Preview button may not have worked as expected`)
          }
        } else if (isCopyButton) {
          if (clipboardContent || messages.toasts.some(msg => msg.includes('copied to clipboard') || msg.includes('success'))) {
            console.log(`    ✅ Copy button worked successfully!`)
          } else {
            console.log(`    ⚠️ Copy button may not have worked as expected`)
          }
        } else {
          console.log(`    ℹ️ Unknown button type - clicking to test functionality`)
        }
        
      } catch (error) {
        console.log(`    ❌ Error testing button ${i + 1}: ${error.message}`)
      }
    }
    
    // Test multiple templates to ensure consistency
    console.log('\n🔍 Testing multiple templates for consistency...')
    
    const allTemplates = await page.$$('[data-template-id], .template-card')
    const templatesToTest = Math.min(3, allTemplates.length)
    
    for (let i = 0; i < templatesToTest; i++) {
      const template = allTemplates[i]
      const templateTitle = await page.evaluate(el => {
        return el.querySelector('h3, .template-title, [class*="title"]')?.textContent || 'Unknown'
      }, template)
      
      console.log(`\n📋 Testing template ${i + 1}: ${templateTitle}`)
      
      // Count buttons in this template
      const buttonCount = await page.evaluate(el => {
        return el.querySelectorAll('button').length
      }, template)
      
      console.log(`  🔘 Buttons found: ${buttonCount}`)
      
      // Test the "Use Template" button
      const useButton = await template.$('button')
      if (useButton) {
        const buttonText = await page.evaluate(btn => btn.textContent.trim(), useButton)
        console.log(`  🚀 Use button text: "${buttonText}"`)
        
        if (buttonText.toLowerCase().includes('use')) {
          console.log(`  ✅ Use button found and properly labeled`)
        } else {
          console.log(`  ⚠️ Use button may not be properly labeled`)
        }
      }
    }
    
    console.log('\n✅ Template button testing completed!')
    
  } catch (error) {
    console.error('❌ Test failed:', error.message)
  } finally {
    await browser.close()
  }
}

testFixedTemplateButtons().catch(console.error)

