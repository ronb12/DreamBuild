const puppeteer = require('puppeteer')

async function testRealisticPreviews() {
  console.log('🎨 Testing realistic template previews...')
  
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
    
    // Get all templates
    const templates = await page.$$('[data-template-id], .template-card')
    console.log(`📝 Found ${templates.length} templates`)
    
    // Test different template types
    const templateTypesToTest = ['store', 'ecommerce', 'shop', 'todo', 'calculator', 'weather', 'blog', 'dashboard', 'portfolio', 'landing']
    
    for (const templateType of templateTypesToTest) {
      console.log(`\n🔍 Looking for ${templateType} template...`)
      
      // Find template with matching name/category
      const matchingTemplate = await page.evaluate((type) => {
        const templates = document.querySelectorAll('[data-template-id], .template-card')
        for (const template of templates) {
          const title = template.querySelector('h3, .template-title, [class*="title"]')?.textContent?.toLowerCase() || ''
          const category = template.getAttribute('data-template-id')?.toLowerCase() || ''
          if (title.includes(type) || category.includes(type)) {
            return {
              title: template.querySelector('h3, .template-title, [class*="title"]')?.textContent || 'Unknown',
              found: true
            }
          }
        }
        return { found: false }
      }, templateType)
      
      if (matchingTemplate.found) {
        console.log(`✅ Found ${templateType} template: "${matchingTemplate.title}"`)
        
        // Find and click the template
        const templateElement = await page.evaluate((type) => {
          const templates = document.querySelectorAll('[data-template-id], .template-card')
          for (const template of templates) {
            const title = template.querySelector('h3, .template-title, [class*="title"]')?.textContent?.toLowerCase() || ''
            const category = template.getAttribute('data-template-id')?.toLowerCase() || ''
            if (title.includes(type) || category.includes(type)) {
              return true
            }
          }
          return false
        }, templateType)
        
        if (templateElement) {
          // Find the template element
          const template = await page.evaluate((type) => {
            const templates = document.querySelectorAll('[data-template-id], .template-card')
            for (const template of templates) {
              const title = template.querySelector('h3, .template-title, [class*="title"]')?.textContent?.toLowerCase() || ''
              const category = template.getAttribute('data-template-id')?.toLowerCase() || ''
              if (title.includes(type) || category.includes(type)) {
                return template
              }
            }
            return null
          }, templateType)
          
          if (template) {
            // Find preview button
            const previewButton = await template.$('button[title="Preview"]')
            if (previewButton) {
              console.log(`👁️ Clicking preview for ${templateType} template...`)
              await previewButton.click()
              
              // Wait for modal
              await new Promise(resolve => setTimeout(resolve, 2000))
              
              // Check preview content
              const previewContent = await page.evaluate(() => {
                const modal = document.querySelector('.fixed.inset-0')
                if (!modal) return { error: 'Modal not found' }
                
                const previewFrame = modal.querySelector('.bg-white.rounded-lg')
                const previewInner = modal.querySelector('.p-8')
                
                return {
                  modalExists: !!modal,
                  previewFrameExists: !!previewFrame,
                  previewInnerExists: !!previewInner,
                  previewText: previewInner?.textContent?.substring(0, 200) || '',
                  title: modal.querySelector('h2')?.textContent || ''
                }
              })
              
              console.log(`📊 Preview content for ${templateType}:`)
              console.log(`  Title: "${previewContent.title}"`)
              console.log(`  Preview text: "${previewContent.previewText}"`)
              
              // Check if it's a realistic preview
              const isRealistic = await page.evaluate((type) => {
                const modal = document.querySelector('.fixed.inset-0')
                if (!modal) return false
                
                const previewText = modal.querySelector('.p-8')?.textContent?.toLowerCase() || ''
                
                // Check for realistic content based on template type
                switch (type) {
                  case 'store':
                  case 'ecommerce':
                  case 'shop':
                    return previewText.includes('shop') || previewText.includes('cart') || previewText.includes('product') || previewText.includes('store')
                  case 'todo':
                    return previewText.includes('todo') || previewText.includes('task') || previewText.includes('complete')
                  case 'calculator':
                    return previewText.includes('calculator') || previewText.includes('42') || previewText.includes('c') || previewText.includes('=')
                  case 'weather':
                    return previewText.includes('weather') || previewText.includes('°f') || previewText.includes('forecast') || previewText.includes('humidity')
                  case 'blog':
                    return previewText.includes('blog') || previewText.includes('post') || previewText.includes('article')
                  case 'dashboard':
                    return previewText.includes('dashboard') || previewText.includes('analytics') || previewText.includes('chart') || previewText.includes('users')
                  case 'portfolio':
                    return previewText.includes('portfolio') || previewText.includes('project') || previewText.includes('developer')
                  case 'landing':
                    return previewText.includes('landing') || previewText.includes('saas') || previewText.includes('pricing') || previewText.includes('get started')
                  default:
                    return previewText.length > 50 // Generic realistic content
                }
              }, templateType)
              
              if (isRealistic) {
                console.log(`✅ SUCCESS: ${templateType} template shows realistic preview!`)
              } else {
                console.log(`❌ FAILED: ${templateType} template shows generic preview`)
              }
              
              // Close modal
              const closeButton = await page.$('.fixed.inset-0 button')
              if (closeButton) {
                await closeButton.click()
                await new Promise(resolve => setTimeout(resolve, 1000))
              }
              
              // Only test first matching template of each type
              break
            }
          }
        }
      } else {
        console.log(`⚠️ No ${templateType} template found`)
      }
    }
    
    // Test a few specific templates to verify they show realistic content
    console.log('\n🎯 Testing specific template previews...')
    
    // Test any available template
    const firstTemplate = templates[0]
    if (firstTemplate) {
      const templateInfo = await page.evaluate((element) => {
        const title = element.querySelector('h3, .template-title, [class*="title"]')?.textContent || 'Unknown'
        return { title }
      }, firstTemplate)
      
      console.log(`\n📝 Testing template: "${templateInfo.title}"`)
      
      const previewButton = await firstTemplate.$('button[title="Preview"]')
      if (previewButton) {
        await previewButton.click()
        await new Promise(resolve => setTimeout(resolve, 2000))
        
        const previewAnalysis = await page.evaluate(() => {
          const modal = document.querySelector('.fixed.inset-0')
          if (!modal) return { error: 'Modal not found' }
          
          const previewInner = modal.querySelector('.p-8')
          const title = modal.querySelector('h2')?.textContent || ''
          const previewText = previewInner?.textContent || ''
          
          return {
            title,
            previewText: previewText.substring(0, 300),
            hasRealisticContent: previewText.length > 100 && !previewText.includes('Welcome to your new') && !previewText.includes('This project was generated')
          }
        })
        
        console.log(`📊 Preview Analysis:`)
        console.log(`  Title: "${previewAnalysis.title}"`)
        console.log(`  Has realistic content: ${previewAnalysis.hasRealisticContent}`)
        console.log(`  Preview content: "${previewAnalysis.previewText}"`)
        
        if (previewAnalysis.hasRealisticContent) {
          console.log('✅ SUCCESS: Template shows realistic preview content!')
        } else {
          console.log('❌ FAILED: Template still shows generic preview content')
        }
        
        // Take screenshot
        await page.screenshot({ path: 'realistic-preview-test.png', fullPage: true })
        console.log('📸 Screenshot saved as realistic-preview-test.png')
      }
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error.message)
  } finally {
    await browser.close()
  }
}

testRealisticPreviews().catch(console.error)

