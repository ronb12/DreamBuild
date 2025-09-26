const puppeteer = require('puppeteer')

async function testFirestoreIndex() {
  console.log('🔧 Testing Firestore index for projects query...')
  
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ['--start-maximized']
  })
  
  const page = await browser.newPage()
  
  try {
    // Navigate to the app
    console.log('📄 Navigating to DreamBuild...')
    await page.goto('https://dreambuild-2024-app.web.app', {
      waitUntil: 'networkidle2',
      timeout: 30000
    })
    
    // Wait for authentication
    console.log('⏳ Waiting for authentication...')
    await new Promise(resolve => setTimeout(resolve, 5000))
    
    // Listen for console messages
    const consoleMessages = []
    page.on('console', msg => {
      consoleMessages.push({
        type: msg.type(),
        text: msg.text(),
        timestamp: new Date().toISOString()
      })
      
      if (msg.type() === 'error') {
        console.log('🚨 Console error:', msg.text())
      }
    })
    
    // Check if user is authenticated
    const authStatus = await page.evaluate(() => {
      return {
        user: window.user || 'Not authenticated',
        authUser: window.authUser || 'Not authenticated'
      }
    })
    
    console.log('🔐 Auth status:', authStatus)
    
    // Navigate to projects page
    console.log('📄 Navigating to projects page...')
    await page.goto('https://dreambuild-2024-app.web.app/projects', {
      waitUntil: 'networkidle2',
      timeout: 30000
    })
    
    // Wait for projects to load
    await new Promise(resolve => setTimeout(resolve, 5000))
    
    // Check for Firestore index errors
    const indexErrors = consoleMessages.filter(msg => 
      msg.text.includes('index') || 
      msg.text.includes('Index') ||
      msg.text.includes('query requires an index')
    )
    
    if (indexErrors.length > 0) {
      console.log('\n❌ Firestore index errors found:')
      indexErrors.forEach(error => {
        console.log(`  ${error.type.toUpperCase()}: ${error.text}`)
      })
    } else {
      console.log('\n✅ No Firestore index errors found!')
    }
    
    // Check for successful project loading
    const successMessages = consoleMessages.filter(msg => 
      msg.text.includes('Loaded projects') ||
      msg.text.includes('projects loaded') ||
      msg.text.includes('📦 Loaded projects')
    )
    
    if (successMessages.length > 0) {
      console.log('\n✅ Project loading success messages:')
      successMessages.forEach(msg => {
        console.log(`  ✅ ${msg.text}`)
      })
    }
    
    // Check for any remaining errors
    const allErrors = consoleMessages.filter(msg => msg.type === 'error')
    if (allErrors.length > 0) {
      console.log('\n📊 All console errors:')
      allErrors.forEach(error => {
        console.log(`  ❌ ${error.text}`)
      })
    } else {
      console.log('\n🎉 No console errors found!')
    }
    
    // Summary
    console.log('\n📋 Test Summary:')
    console.log(`  Total console messages: ${consoleMessages.length}`)
    console.log(`  Errors: ${allErrors.length}`)
    console.log(`  Index errors: ${indexErrors.length}`)
    console.log(`  Success messages: ${successMessages.length}`)
    
    if (indexErrors.length === 0 && allErrors.length === 0) {
      console.log('\n🎉 SUCCESS: Firestore index is working properly!')
    } else {
      console.log('\n⚠️ Issues found that need attention')
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error.message)
  } finally {
    await browser.close()
  }
}

testFirestoreIndex().catch(console.error)

