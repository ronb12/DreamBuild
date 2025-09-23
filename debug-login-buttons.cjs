const puppeteer = require('puppeteer');

(async () => {
  console.log('🚀 Debugging Login Page Buttons...');
  
  const browser = await puppeteer.launch({ 
    headless: false,
    defaultViewport: null,
    args: ['--start-maximized']
  });
  
  const page = await browser.newPage();
  
  try {
    // Navigate to login page
    console.log('📱 Navigating to login page...');
    await page.goto('http://localhost:3000/login', { waitUntil: 'networkidle0' });
    
    // Wait for page to load
    await page.waitForSelector('h1');
    console.log('✅ Login page loaded');
    
    // Get all buttons and their text
    const buttons = await page.evaluate(() => {
      const buttonElements = document.querySelectorAll('button');
      return Array.from(buttonElements).map(btn => ({
        text: btn.textContent.trim(),
        className: btn.className,
        id: btn.id
      }));
    });
    
    console.log('🔍 Found buttons:');
    buttons.forEach((btn, index) => {
      console.log(`  ${index + 1}. Text: "${btn.text}" | Class: "${btn.className}" | ID: "${btn.id}"`);
    });
    
    // Also check for any elements containing "GitHub"
    const githubElements = await page.evaluate(() => {
      const allElements = document.querySelectorAll('*');
      return Array.from(allElements)
        .filter(el => el.textContent && el.textContent.includes('GitHub'))
        .map(el => ({
          tagName: el.tagName,
          text: el.textContent.trim(),
          className: el.className
        }));
    });
    
    console.log('\n🔍 Elements containing "GitHub":');
    githubElements.forEach((el, index) => {
      console.log(`  ${index + 1}. ${el.tagName}: "${el.text}" | Class: "${el.className}"`);
    });
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
  } finally {
    await browser.close();
  }
  
  console.log('🏁 Debug completed');
})();
