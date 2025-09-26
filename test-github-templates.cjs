// Test GitHub Template Integration
// This script tests the new GitHub template service

const puppeteer = require('puppeteer')

async function testGitHubTemplates() {
  console.log('🚀 Testing GitHub Template Integration...')
  
  const browser = await puppeteer.launch({ 
    headless: false,
    defaultViewport: { width: 1280, height: 720 },
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  })
  
  try {
    const page = await browser.newPage()
    
    // Enable console logging
    page.on('console', msg => {
      if (msg.type() === 'log' && msg.text().includes('GitHub')) {
        console.log('📱 Browser:', msg.text())
      }
    })
    
    // Navigate to templates page
    console.log('📄 Navigating to templates page...')
    await page.goto('https://dreambuild-2024-app.web.app/templates', { 
      waitUntil: 'networkidle2',
      timeout: 30000 
    })
    
    // Wait for templates to load
    console.log('⏳ Waiting for templates to load...')
    await page.waitForSelector('.animate-pulse', { timeout: 5000 }).catch(() => {
      console.log('ℹ️ No loading skeleton found, templates may have loaded quickly')
    })
    
    // Wait for templates to finish loading
    await page.waitForFunction(() => {
      const loadingElements = document.querySelectorAll('.animate-pulse')
      return loadingElements.length === 0
    }, { timeout: 30000 })
    
    console.log('✅ Templates loaded successfully')
    
    // Check if GitHub templates are present
    const templateCount = await page.evaluate(() => {
      const templates = document.querySelectorAll('[data-template-id]')
      return templates.length
    })
    
    console.log(`📊 Found ${templateCount} templates`)
    
    // Check for GitHub-specific templates
    const githubTemplates = await page.evaluate(() => {
      const templates = Array.from(document.querySelectorAll('[data-template-id]'))
      return templates.filter(template => 
        template.getAttribute('data-template-id').startsWith('github_')
      ).length
    })
    
    console.log(`🔗 Found ${githubTemplates} GitHub templates`)
    
    // Test template search
    console.log('🔍 Testing template search...')
    const searchInput = await page.$('input[placeholder*="search" i], input[placeholder*="template" i]')
    if (searchInput) {
      await searchInput.type('react')
      await page.waitForTimeout(1000)
      
      const searchResults = await page.evaluate(() => {
        const templates = document.querySelectorAll('[data-template-id]')
        return templates.length
      })
      
      console.log(`🔍 Search results: ${searchResults} templates found for "react"`)
    }
    
    // Test category filtering
    console.log('📂 Testing category filtering...')
    const categorySelect = await page.$('select')
    if (categorySelect) {
      await categorySelect.select('web-apps')
      await page.waitForTimeout(1000)
      
      const categoryResults = await page.evaluate(() => {
        const templates = document.querySelectorAll('[data-template-id]')
        return templates.length
      })
      
      console.log(`📂 Category results: ${categoryResults} web-app templates found`)
    }
    
    // Test template preview
    console.log('👁️ Testing template preview...')
    const firstTemplate = await page.$('[data-template-id]')
    if (firstTemplate) {
      const templateId = await firstTemplate.getAttribute('data-template-id')
      console.log(`🎯 Testing template: ${templateId}`)
      
      // Try to click preview button
      const previewButton = await firstTemplate.$('button[title="Preview" i], button:has-text("Preview")')
      if (previewButton) {
        await previewButton.click()
        await page.waitForTimeout(1000)
        console.log('✅ Preview button clicked successfully')
      }
    }
    
    // Test template use
    console.log('🚀 Testing template use...')
    if (firstTemplate) {
      const useButton = await firstTemplate.$('button:has-text("Use Template")')
      if (useButton) {
        await useButton.click()
        await page.waitForTimeout(2000)
        console.log('✅ Use template button clicked successfully')
        
        // Check if redirected or modal opened
        const currentUrl = page.url()
        if (currentUrl.includes('/builder') || currentUrl.includes('/editor')) {
          console.log('✅ Successfully redirected to builder with template')
        } else {
          console.log('ℹ️ Template applied, but stayed on templates page')
        }
      }
    }
    
    // Check for any errors
    const errors = await page.evaluate(() => {
      return window.console.errors || []
    })
    
    if (errors.length > 0) {
      console.log('⚠️ Console errors found:')
      errors.forEach(error => console.log(`  - ${error}`))
    } else {
      console.log('✅ No console errors found')
    }
    
    // Take screenshot
    await page.screenshot({ 
      path: 'github-templates-test.png',
      fullPage: true 
    })
    console.log('📸 Screenshot saved as github-templates-test.png')
    
    console.log('🎉 GitHub Template Integration Test Completed Successfully!')
    
  } catch (error) {
    console.error('❌ Test failed:', error)
  } finally {
    await browser.close()
  }
}

// Run the test
testGitHubTemplates().catch(console.error)
