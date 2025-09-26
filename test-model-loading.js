// Test Model Loading
import puppeteer from 'puppeteer'

const testModelLoading = async () => {
  console.log('🔍 Testing Model Loading...\n')
  
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
    }
  })
  
  try {
    // Navigate to AI Builder page
    console.log('📍 Navigating to AI Builder page...')
    await page.goto('http://localhost:3000/ai-builder', { waitUntil: 'networkidle0' })
    await page.waitForFunction('() => true', { timeout: 5000 })
    
    // Wait for models to load
    console.log('⏳ Waiting for models to load...')
    await page.waitForFunction('() => true', { timeout: 3000 })
    
    // Check what models are actually loaded in the service
    const serviceModels = await page.evaluate(() => {
      try {
        // Try to access the service directly
        const simpleAIService = window.simpleAIService || window.SimpleAIService
        if (simpleAIService) {
          const services = simpleAIService.getServices()
          return {
            cloudModels: services['cloud-ai']?.models || [],
            localModels: services['local-ai']?.models || [],
            cloudCount: services['cloud-ai']?.models?.length || 0,
            localCount: services['local-ai']?.models?.length || 0
          }
        }
        return { error: 'Service not found' }
      } catch (error) {
        return { error: error.message }
      }
    })
    
    if (serviceModels.error) {
      console.log(`❌ Service error: ${serviceModels.error}`)
    } else {
      console.log('📊 Service models:')
      console.log(`  Cloud models: ${serviceModels.cloudCount}`)
      console.log(`  Local models: ${serviceModels.localCount}`)
      
      if (serviceModels.cloudModels.length > 0) {
        console.log('\n  Cloud model details:')
        serviceModels.cloudModels.slice(0, 3).forEach((model, i) => {
          console.log(`    ${i + 1}. ${model.name} - "${model.description}"`)
        })
      }
      
      if (serviceModels.localModels.length > 0) {
        console.log('\n  Local model details:')
        serviceModels.localModels.slice(0, 3).forEach((model, i) => {
          console.log(`    ${i + 1}. ${model.name} - "${model.description}"`)
        })
      }
    }
    
    // Check what's actually rendered in the dropdown
    const modelSelectorButton = await page.$('button[class*="w-full p-2 rounded"]')
    if (modelSelectorButton) {
      console.log('\n🖱️ Opening dropdown...')
      await modelSelectorButton.click()
      await page.waitForFunction('() => true', { timeout: 1000 })
      
      const renderedModels = await page.evaluate(() => {
        const dropdown = document.querySelector('.model-selector')
        if (dropdown) {
          const buttons = dropdown.querySelectorAll('button[class*="w-full p-3 rounded"]')
          return Array.from(buttons).map(button => {
            const nameEl = button.querySelector('span[class*="font-medium"]')
            const descEl = button.querySelector('p[class*="text-xs"]')
            return {
              name: nameEl ? nameEl.textContent : 'Unknown',
              description: descEl ? descEl.textContent : 'No description',
              hasDescription: descEl && descEl.textContent.trim() !== ''
            }
          })
        }
        return []
      })
      
      console.log(`\n📊 Rendered models: ${renderedModels.length}`)
      renderedModels.forEach((model, i) => {
        console.log(`  ${i + 1}. ${model.name} - "${model.description}" (has desc: ${model.hasDescription})`)
      })
    }
    
    console.log('\n✅ Model loading test completed!')
    
  } catch (error) {
    console.error('❌ Test failed:', error)
  } finally {
    await browser.close()
  }
}

// Run the test
testModelLoading().catch(console.error)
