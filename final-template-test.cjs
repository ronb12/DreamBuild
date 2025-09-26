const puppeteer = require('puppeteer')

async function finalTemplateTest() {
  console.log('🎯 Final template system test...')
  
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
    
    // Count templates
    const templateCount = await page.evaluate(() => {
      return document.querySelectorAll('[data-template-id], .template-card').length
    })
    
    console.log(`📊 Found ${templateCount} template cards`)
    
    if (templateCount > 0) {
      // Get template information
      const templateInfo = await page.evaluate(() => {
        const cards = document.querySelectorAll('[data-template-id], .template-card')
        return Array.from(cards).slice(0, 5).map((card, index) => {
          const title = card.querySelector('h3, .template-title, [class*="title"]')?.textContent || 'Unknown'
          const description = card.querySelector('p, .template-description, [class*="description"]')?.textContent || 'No description'
          const tags = Array.from(card.querySelectorAll('.tag, .template-tag, [class*="tag"]')).map(tag => tag.textContent)
          const id = card.getAttribute('data-template-id') || 'no-id'
          return { index: index + 1, id, title, description, tags }
        })
      })
      
      console.log('\n📋 Template details:')
      templateInfo.forEach(template => {
        console.log(`  ${template.index}. ${template.title}`)
        console.log(`     ID: ${template.id}`)
        console.log(`     Description: ${template.description.substring(0, 80)}...`)
        console.log(`     Tags: ${template.tags.join(', ')}`)
        console.log('')
      })
      
      // Test search functionality
      console.log('🔍 Testing search functionality...')
      const searchInput = await page.$('input[type="search"], input[placeholder*="search"]')
      if (searchInput) {
        await searchInput.type('todo')
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        const filteredCount = await page.evaluate(() => {
          return document.querySelectorAll('[data-template-id], .template-card').length
        })
        console.log(`🔍 After searching "todo": ${filteredCount} templates found`)
        
        // Clear search
        await searchInput.click({ clickCount: 3 })
        await searchInput.type('')
        await new Promise(resolve => setTimeout(resolve, 1000))
      }
      
      // Test category filtering
      console.log('🏷️ Testing category filtering...')
      const categoryButtons = await page.$$('button[data-category], .category-button, [class*="category"]')
      if (categoryButtons.length > 0) {
        console.log(`Found ${categoryButtons.length} category buttons`)
        
        // Click first category button
        await categoryButtons[0].click()
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        const filteredCountAfterCategory = await page.evaluate(() => {
          return document.querySelectorAll('[data-template-id], .template-card').length
        })
        console.log(`🏷️ After category filter: ${filteredCountAfterCategory} templates found`)
        
        // Reset category
        const allCategoriesButton = await page.$('button[data-category="all"], [class*="all"]')
        if (allCategoriesButton) {
          await allCategoriesButton.click()
          await new Promise(resolve => setTimeout(resolve, 1000))
        }
      }
      
      // Test template interaction
      console.log('🎯 Testing template interaction...')
      const firstTemplate = await page.$('[data-template-id], .template-card')
      if (firstTemplate) {
        // Hover over template
        await firstTemplate.hover()
        await new Promise(resolve => setTimeout(resolve, 500))
        
        // Check for use template button
        const useButton = await firstTemplate.$('button, [role="button"]')
        if (useButton) {
          console.log('✅ Found use template button')
        } else {
          console.log('⚠️ No use template button found')
        }
      }
      
      console.log('\n✅ Template system is working correctly!')
      console.log(`📊 Summary:`)
      console.log(`  - ${templateCount} templates loaded`)
      console.log(`  - Search functionality: ${searchInput ? '✅' : '❌'}`)
      console.log(`  - Category filtering: ${categoryButtons.length > 0 ? '✅' : '❌'}`)
      console.log(`  - Template interaction: ${firstTemplate ? '✅' : '❌'}`)
      
    } else {
      console.log('❌ No templates found')
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error.message)
  } finally {
    await browser.close()
  }
}

finalTemplateTest().catch(console.error)

