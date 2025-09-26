const puppeteer = require('puppeteer')

async function testProgressBar() {
  console.log('📊 Testing template loading progress bar...')
  
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ['--start-maximized']
  })
  
  const page = await browser.newPage()
  
  // Capture console messages
  page.on('console', msg => {
    if (msg.type() === 'log' && (msg.text().includes('Loading') || msg.text().includes('Found') || msg.text().includes('Fetching'))) {
      console.log(`[CONSOLE] ${msg.text()}`)
    }
  })
  
  try {
    // Navigate to templates page
    console.log('📄 Navigating to templates page...')
    await page.goto('https://dreambuild-2024-app.web.app/templates', {
      waitUntil: 'networkidle2',
      timeout: 30000
    })
    
    // Check if progress bar is visible
    console.log('⏳ Checking for progress bar...')
    const progressBarExists = await page.evaluate(() => {
      const progressBar = document.querySelector('.bg-gradient-to-r.from-primary')
      const loadingMessage = document.querySelector('h3')
      const progressPercentage = Array.from(document.querySelectorAll('span')).find(span => span.textContent.includes('%'))
      const loadingSteps = document.querySelectorAll('.space-y-2 > div')
      
      return {
        progressBarExists: !!progressBar,
        loadingMessageExists: !!loadingMessage,
        loadingMessage: loadingMessage?.textContent || '',
        progressPercentageExists: !!progressPercentage,
        progressPercentageText: progressPercentage?.textContent || '',
        loadingStepsCount: loadingSteps.length,
        progressBarWidth: progressBar ? window.getComputedStyle(progressBar).width : '0px'
      }
    })
    
    console.log('📊 Progress bar status:')
    console.log(`  Progress bar exists: ${progressBarExists.progressBarExists}`)
    console.log(`  Loading message exists: ${progressBarExists.loadingMessageExists}`)
    console.log(`  Loading message: "${progressBarExists.loadingMessage}"`)
    console.log(`  Progress percentage exists: ${progressBarExists.progressPercentageExists}`)
    console.log(`  Loading steps count: ${progressBarExists.loadingStepsCount}`)
    console.log(`  Progress bar width: ${progressBarExists.progressBarWidth}`)
    
    if (progressBarExists.progressBarExists) {
      console.log('✅ SUCCESS: Progress bar is visible!')
      
      // Wait for progress to update
      console.log('\n⏳ Monitoring progress updates...')
      let previousProgress = 0
      let progressUpdates = 0
      
      for (let i = 0; i < 10; i++) {
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        const currentProgress = await page.evaluate(() => {
          const progressBar = document.querySelector('.bg-gradient-to-r.from-primary')
          const progressText = Array.from(document.querySelectorAll('span')).find(span => span.textContent.includes('%'))
          const loadingMessage = document.querySelector('h3')
          
          return {
            progressWidth: progressBar ? window.getComputedStyle(progressBar).width : '0px',
            progressText: progressText?.textContent || '',
            loadingMessage: loadingMessage?.textContent || ''
          }
        })
        
        console.log(`  Step ${i + 1}: ${currentProgress.progressWidth} - "${currentProgress.loadingMessage}"`)
        
        if (currentProgress.progressText !== previousProgress) {
          progressUpdates++
          previousProgress = currentProgress.progressText
        }
        
        // Check if loading is complete
        const isLoadingComplete = await page.evaluate(() => {
          const progressBar = document.querySelector('.bg-gradient-to-r.from-primary')
          const templates = document.querySelectorAll('[data-template-id], .template-card')
          
          return {
            isLoadingComplete: !progressBar || progressBar.offsetParent === null,
            templatesVisible: templates.length > 0
          }
        })
        
        if (isLoadingComplete.isLoadingComplete && isLoadingComplete.templatesVisible) {
          console.log('✅ Loading completed and templates are visible!')
          break
        }
      }
      
      console.log(`\n📈 Progress updates detected: ${progressUpdates}`)
      
      // Check final state
      const finalState = await page.evaluate(() => {
        const progressBar = document.querySelector('.bg-gradient-to-r.from-primary')
        const templates = document.querySelectorAll('[data-template-id], .template-card')
        const loadingMessage = document.querySelector('h3')
        
        return {
          progressBarVisible: progressBar && progressBar.offsetParent !== null,
          templatesCount: templates.length,
          finalMessage: loadingMessage?.textContent || ''
        }
      })
      
      console.log('\n🎯 Final state:')
      console.log(`  Progress bar visible: ${finalState.progressBarVisible}`)
      console.log(`  Templates loaded: ${finalState.templatesCount}`)
      console.log(`  Final message: "${finalState.finalMessage}"`)
      
      if (finalState.templatesCount > 0 && !finalState.progressBarVisible) {
        console.log('✅ SUCCESS: Templates loaded successfully and progress bar hidden!')
      } else {
        console.log('⚠️ Loading may not have completed properly')
      }
      
    } else {
      console.log('❌ FAILED: Progress bar not found')
      
      // Check if templates are already loaded (cached)
      const templatesCount = await page.evaluate(() => {
        const templates = document.querySelectorAll('[data-template-id], .template-card')
        return templates.length
      })
      
      console.log(`📊 Templates already loaded: ${templatesCount}`)
      
      if (templatesCount > 0) {
        console.log('ℹ️ Templates were already loaded (cached), so progress bar may have been skipped')
      }
    }
    
    console.log('\n✅ Progress bar testing completed!')
    
  } catch (error) {
    console.error('❌ Test failed:', error.message)
  } finally {
    await browser.close()
  }
}

testProgressBar().catch(console.error)
