// Test App Generation - Debug what's happening
const puppeteer = require('puppeteer');

async function testAppGeneration() {
    let browser;
    let page;
    
    try {
        console.log('🤖 Testing App Generation...');
        
        browser = await puppeteer.launch({
            headless: false,
            defaultViewport: { width: 1280, height: 720 },
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        
        page = await browser.newPage();
        
        // Enable console logging
        page.on('console', msg => {
            console.log('🔍 Console:', msg.text());
        });
        
        // Navigate to the app
        await page.goto('https://dreambuild-2024-app.web.app/ai-builder', { 
            waitUntil: 'networkidle2',
            timeout: 30000 
        });
        
        // Wait for the textarea
        await page.waitForSelector('textarea', { timeout: 10000 });
        
        // Type a test prompt
        const textarea = await page.$('textarea');
        await textarea.click();
        await page.keyboard.type('create a simple todo list app');
        await page.waitForTimeout(1000);
        
        // Find and click the generate button
        const buttons = await page.$$('button');
        let generateButton = null;
        
        for (const button of buttons) {
            const text = await page.evaluate(el => el.textContent, button);
            const title = await page.evaluate(el => el.title, button);
            if (text && (text.includes('∞') || text.includes('Generate'))) {
                generateButton = button;
                console.log(`✅ Found generate button: "${text}"`);
                break;
            }
        }
        
        if (generateButton) {
            await generateButton.click();
            console.log('✅ Clicked generate button');
            
            // Wait for generation
            await page.waitForTimeout(10000);
            
            // Check for generated files
            const fileElements = await page.$$('[class*="file"], [data-testid*="file"]');
            console.log(`📁 Found ${fileElements.length} file elements`);
            
            // Check for preview content
            const previewElements = await page.$$('iframe, [class*="preview"]');
            console.log(`👁️ Found ${previewElements.length} preview elements`);
            
            // Check page content for generation indicators
            const pageText = await page.evaluate(() => document.body.textContent);
            const hasGeneratedContent = pageText.includes('generated') || 
                                      pageText.includes('created') || 
                                      pageText.includes('files') ||
                                      pageText.includes('todo');
            
            console.log(`📝 Page has generation indicators: ${hasGeneratedContent}`);
            
            // Take screenshot
            await page.screenshot({ path: 'app-generation-test.png', fullPage: true });
            console.log('📸 Screenshot saved');
            
        } else {
            console.log('❌ Generate button not found');
        }
        
    } catch (error) {
        console.error('❌ Test failed:', error);
    } finally {
        if (browser) {
            await browser.close();
        }
    }
}

testAppGeneration();
