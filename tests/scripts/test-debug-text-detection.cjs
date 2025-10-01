const puppeteer = require('puppeteer');

async function testDebugTextDetection() {
  console.log('🔍 Detecting Debug Text in UI...');
  
  const browser = await puppeteer.launch({ 
    headless: false,
    defaultViewport: { width: 1920, height: 1080 },
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  try {
    const page = await browser.newPage();
    
    // Navigate to AI Builder
    console.log('📱 Navigating to DreamBuild AI Builder...');
    await page.goto('https://dreambuild-2024-app.web.app/ai-builder', { 
      waitUntil: 'networkidle2',
      timeout: 30000 
    });
    
    // Wait for page to load
    await new Promise(resolve => setTimeout(resolve, 8000));
    
    // Get all text content and search for debug patterns
    const debugTextDetection = await page.evaluate(() => {
      const allText = document.body.textContent;
      const debugPatterns = [
        '🔧',
        '🔘',
        'AIPromptSimplified',
        'AIChatInterface',
        'Loading comprehensive polyfills',
        'ServiceWorkerRegistration',
        'manifest.json',
        'Debug Panel',
        'Testing',
        'Console',
        'Error:',
        'Warning:',
        'Debug:',
        'Log:'
      ];
      
      const foundPatterns = debugPatterns.filter(pattern => 
        allText.includes(pattern)
      );
      
      // Get specific elements that might contain debug text
      const elements = document.querySelectorAll('*');
      const elementsWithDebugText = [];
      
      elements.forEach((element, index) => {
        if (element.children.length === 0) { // Only leaf nodes
          const text = element.textContent?.trim();
          if (text && debugPatterns.some(pattern => text.includes(pattern))) {
            elementsWithDebugText.push({
              tagName: element.tagName,
              text: text,
              className: element.className,
              id: element.id
            });
          }
        }
      });
      
      return {
        allTextLength: allText.length,
        foundPatterns: foundPatterns,
        elementsWithDebugText: elementsWithDebugText.slice(0, 10), // Limit to first 10
        hasDebugText: foundPatterns.length > 0
      };
    });
    
    console.log('Debug Text Detection Results:');
    console.log('==============================');
    console.log(`Total text length: ${debugTextDetection.allTextLength}`);
    console.log(`Found debug patterns: ${debugTextDetection.foundPatterns.length}`);
    console.log(`Patterns found:`, debugTextDetection.foundPatterns);
    
    if (debugTextDetection.elementsWithDebugText.length > 0) {
      console.log('\nElements with debug text:');
      debugTextDetection.elementsWithDebugText.forEach((element, index) => {
        console.log(`${index + 1}. <${element.tagName}>${element.text}</${element.tagName}>`);
        if (element.className) console.log(`   Class: ${element.className}`);
        if (element.id) console.log(`   ID: ${element.id}`);
        console.log('');
      });
    }
    
    // Take screenshot
    await page.screenshot({ 
      path: 'debug-text-detection-test.png',
      fullPage: true 
    });
    
    console.log('📸 Screenshot saved: debug-text-detection-test.png');
    
    return debugTextDetection;
    
  } catch (error) {
    console.error('❌ Debug text detection failed:', error);
    return { error: error.message };
  } finally {
    await browser.close();
  }
}

testDebugTextDetection().then(result => {
  if (result.error) {
    console.error('Debug text detection failed:', result.error);
  } else {
    console.log('\n🎉 Debug text detection completed!');
    console.log(`Found ${result.foundPatterns.length} debug patterns`);
  }
}).catch(console.error);

