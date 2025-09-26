const puppeteer = require('puppeteer')

async function testTemplateTransformation() {
  console.log('🔍 Testing template transformation...')
  
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ['--start-maximized']
  })
  
  const page = await browser.newPage()
  
  // Capture all console messages
  page.on('console', msg => {
    console.log(`[${msg.type().toUpperCase()}] ${msg.text()}`)
  })
  
  try {
    // Navigate to templates page
    console.log('📄 Navigating to templates page...')
    await page.goto('https://dreambuild-2024-app.web.app/templates', {
      waitUntil: 'networkidle2',
      timeout: 30000
    })
    
    // Wait for GitHub templates to be fetched
    console.log('⏳ Waiting for GitHub templates to be fetched...')
    await page.waitForFunction(() => {
      return window.consoleMessages && 
             window.consoleMessages.some(msg => msg.includes('✅ Found') && msg.includes('template repositories'))
    }, { timeout: 30000 })
    
    // Test the template transformation directly
    console.log('🧪 Testing template transformation...')
    const transformationResult = await page.evaluate(async () => {
      try {
        // Import the services
        const { default: githubTemplateService } = await import('/src/services/githubTemplateService.js')
        const { default: localAIService } = await import('/src/services/localAIService.js')
        
        // Get raw GitHub templates
        const rawTemplates = await githubTemplateService.getTrendingTemplates()
        console.log(`Raw templates count: ${rawTemplates.length}`)
        
        if (rawTemplates.length > 0) {
          // Test transformation on first template
          const firstTemplate = rawTemplates[0]
          console.log('First raw template:', firstTemplate)
          
          const transformedTemplate = githubTemplateService.transformRepositoryToTemplate(firstTemplate)
          console.log('Transformed template:', transformedTemplate)
          
          return {
            rawCount: rawTemplates.length,
            firstRawTemplate: firstTemplate,
            transformedTemplate: transformedTemplate,
            hasRequiredFields: {
              id: !!transformedTemplate.id,
              name: !!transformedTemplate.name,
              description: !!transformedTemplate.description,
              category: !!transformedTemplate.category,
              tags: !!transformedTemplate.tags,
              popularity: typeof transformedTemplate.popularity !== 'undefined'
            }
          }
        }
        
        return { rawCount: 0, error: 'No raw templates found' }
      } catch (error) {
        return { error: error.message }
      }
    })
    
    console.log('📊 Transformation result:')
    console.log(`  Raw templates count: ${transformationResult.rawCount}`)
    
    if (transformationResult.error) {
      console.log(`  Error: ${transformationResult.error}`)
    } else {
      console.log('  First raw template:')
      console.log(`    ID: ${transformationResult.firstRawTemplate?.id}`)
      console.log(`    Name: ${transformationResult.firstRawTemplate?.name}`)
      console.log(`    Full Name: ${transformationResult.firstRawTemplate?.full_name}`)
      console.log(`    Description: ${transformationResult.firstRawTemplate?.description}`)
      
      console.log('  Transformed template:')
      console.log(`    ID: ${transformationResult.transformedTemplate?.id}`)
      console.log(`    Name: ${transformationResult.transformedTemplate?.name}`)
      console.log(`    Description: ${transformationResult.transformedTemplate?.description}`)
      console.log(`    Category: ${transformationResult.transformedTemplate?.category}`)
      console.log(`    Tags: ${JSON.stringify(transformationResult.transformedTemplate?.tags)}`)
      console.log(`    Popularity: ${transformationResult.transformedTemplate?.popularity}`)
      
      console.log('  Required fields check:')
      Object.entries(transformationResult.hasRequiredFields).forEach(([field, hasField]) => {
        console.log(`    ${field}: ${hasField ? '✅' : '❌'}`)
      })
    }
    
    // Test the full getAllTemplates method
    console.log('\n🧪 Testing getAllTemplates method...')
    const allTemplatesResult = await page.evaluate(async () => {
      try {
        const { default: localAIService } = await import('/src/services/localAIService.js')
        const allTemplates = await localAIService.getAllTemplates()
        
        return {
          count: allTemplates.length,
          firstTemplate: allTemplates[0],
          hasLocalTemplates: allTemplates.some(t => !t.id.startsWith('github_')),
          hasGitHubTemplates: allTemplates.some(t => t.id.startsWith('github_')),
          sampleTemplates: allTemplates.slice(0, 3).map(t => ({
            id: t.id,
            name: t.name,
            source: t.source || 'local'
          }))
        }
      } catch (error) {
        return { error: error.message }
      }
    })
    
    console.log('📊 getAllTemplates result:')
    console.log(`  Total templates: ${allTemplatesResult.count}`)
    console.log(`  Has local templates: ${allTemplatesResult.hasLocalTemplates}`)
    console.log(`  Has GitHub templates: ${allTemplatesResult.hasGitHubTemplates}`)
    
    if (allTemplatesResult.error) {
      console.log(`  Error: ${allTemplatesResult.error}`)
    } else {
      console.log('  Sample templates:')
      allTemplatesResult.sampleTemplates.forEach((template, index) => {
        console.log(`    ${index + 1}. ${template.name} (${template.source}) - ID: ${template.id}`)
      })
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error.message)
  } finally {
    await browser.close()
  }
}

testTemplateTransformation().catch(console.error)

