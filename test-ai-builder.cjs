const puppeteer = require('puppeteer');

async function testAIBuilder() {
  console.log('🔍 Testing AI Builder page specifically...');
  
  const browser = await puppeteer.launch({
    headless: 'new',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-accelerated-2d-canvas',
      '--no-first-run',
      '--no-zygote',
      '--disable-gpu'
    ]
  });
  
  const page = await browser.newPage();
  
  try {
    // Set viewport
    await page.setViewport({ width: 1280, height: 720 });
    
    // Listen for console messages
    page.on('console', msg => {
      console.log(`Console ${msg.type()}:`, msg.text());
    });
    
    // Listen for page errors
    page.on('pageerror', error => {
      console.error('Page Error:', error.message);
    });
    
    // Navigate to AI Builder
    console.log('📍 Navigating to AI Builder...');
    const response = await page.goto('http://localhost:4173/ai-builder', { 
      waitUntil: 'networkidle2',
      timeout: 30000 
    });
    
    if (!response || !response.ok()) {
      throw new Error(`HTTP ${response ? response.status() : 'No response'}`);
    }
    
    // Wait for page to load
    await page.waitForTimeout(3000);
    
    // Check if polyfills are loaded
    const polyfillStatus = await page.evaluate(() => {
      return {
        Request: !!window.Request,
        Headers: !!window.Headers,
        Response: !!window.Response,
        fetch: !!window.fetch
      };
    });
    
    console.log('Polyfill Status:', polyfillStatus);
    
    // Check for any errors
    const errors = await page.evaluate(() => {
      const errorElements = document.querySelectorAll('[data-react-error]');
      return Array.from(errorElements).map(el => el.textContent);
    });
    
    if (errors.length > 0) {
      console.log('React Errors:', errors);
    }
    
    // Take screenshot
    await page.screenshot({ 
      path: './test-screenshots/ai-builder-test.png', 
      fullPage: true 
    });
    
    console.log('✅ AI Builder test completed');
    
  } catch (error) {
    console.error('❌ AI Builder test failed:', error.message);
  } finally {
    await browser.close();
  }
}

testAIBuilder().catch(console.error);
