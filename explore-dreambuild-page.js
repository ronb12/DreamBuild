// Explore DreamBuild page structure
import puppeteer from 'puppeteer';

async function explorePage() {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ['--start-maximized']
  });

  const page = await browser.newPage();
  
  try {
    console.log('🔍 Navigating to DreamBuild...');
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
    
    console.log('📄 Page loaded, exploring elements...');
    
    // Get page title
    const title = await page.title();
    console.log('📋 Page title:', title);
    
    // Get all input elements
    const inputs = await page.evaluate(() => {
      const inputElements = document.querySelectorAll('input, textarea');
      return Array.from(inputElements).map(el => ({
        tagName: el.tagName,
        type: el.type || 'text',
        placeholder: el.placeholder || '',
        id: el.id || '',
        className: el.className || '',
        dataTestId: el.getAttribute('data-testid') || ''
      }));
    });
    
    console.log('📝 Input elements found:', inputs);
    
    // Get all buttons
    const buttons = await page.evaluate(() => {
      const buttonElements = document.querySelectorAll('button');
      return Array.from(buttonElements).map(el => ({
        text: el.textContent.trim(),
        id: el.id || '',
        className: el.className || '',
        dataTestId: el.getAttribute('data-testid') || ''
      }));
    });
    
    console.log('🔘 Buttons found:', buttons);
    
    // Get all elements with data-testid
    const testElements = await page.evaluate(() => {
      const elements = document.querySelectorAll('[data-testid]');
      return Array.from(elements).map(el => ({
        tagName: el.tagName,
        dataTestId: el.getAttribute('data-testid'),
        text: el.textContent.trim().substring(0, 50),
        className: el.className || ''
      }));
    });
    
    console.log('🧪 Elements with data-testid:', testElements);
    
    // Take a screenshot
    await page.screenshot({ path: 'dreambuild-page-exploration.png' });
    console.log('📸 Screenshot saved as dreambuild-page-exploration.png');
    
    // Wait a bit to see the page
    await page.waitForTimeout(5000);
    
  } catch (error) {
    console.error('❌ Error exploring page:', error);
  } finally {
    await browser.close();
  }
}

explorePage();
