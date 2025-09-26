// Debug DreamBuild page structure
import puppeteer from 'puppeteer';

async function debugPage() {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ['--start-maximized']
  });

  const page = await browser.newPage();
  
  try {
    console.log('🔍 Navigating to DreamBuild AI Builder...');
    await page.goto('http://localhost:3000/ai-builder', { waitUntil: 'networkidle0' });
    
    console.log('📄 Page loaded, taking screenshot...');
    await page.screenshot({ path: 'dreambuild-debug.png', fullPage: true });
    
    // Get all elements
    const allElements = await page.evaluate(() => {
      const elements = document.querySelectorAll('*');
      return Array.from(elements).map(el => ({
        tagName: el.tagName,
        id: el.id || '',
        className: el.className || '',
        textContent: el.textContent.trim().substring(0, 100),
        dataTestId: el.getAttribute('data-testid') || '',
        type: el.type || '',
        placeholder: el.placeholder || ''
      })).filter(el => 
        el.tagName === 'TEXTAREA' || 
        el.tagName === 'INPUT' || 
        el.tagName === 'BUTTON' ||
        el.textContent.toLowerCase().includes('generate') ||
        el.textContent.toLowerCase().includes('prompt') ||
        el.textContent.toLowerCase().includes('ai') ||
        el.dataTestId
      );
    });
    
    console.log('🔍 Relevant elements found:', allElements);
    
    // Check if there are any textareas
    const textareas = await page.evaluate(() => {
      const textareas = document.querySelectorAll('textarea');
      return Array.from(textareas).map(el => ({
        tagName: el.tagName,
        id: el.id || '',
        className: el.className || '',
        placeholder: el.placeholder || '',
        value: el.value || ''
      }));
    });
    
    console.log('📝 Textareas found:', textareas);
    
    // Check if there are any buttons
    const buttons = await page.evaluate(() => {
      const buttons = document.querySelectorAll('button');
      return Array.from(buttons).map(el => ({
        tagName: el.tagName,
        id: el.id || '',
        className: el.className || '',
        textContent: el.textContent.trim(),
        type: el.type || ''
      }));
    });
    
    console.log('🔘 Buttons found:', buttons);
    
    // Wait to see the page
    await new Promise(resolve => setTimeout(resolve, 5000));
    
  } catch (error) {
    console.error('❌ Error debugging page:', error);
  } finally {
    await browser.close();
  }
}

debugPage();
