// Test Template Generation - Debug what's happening
const puppeteer = require('puppeteer');

async function testTemplateGeneration() {
    let browser;
    let page;
    
    try {
        console.log('🤖 Testing Template Generation...');
        
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
        
        // Type a simple test prompt
        const textarea = await page.$('textarea');
        await textarea.click();
        await page.keyboard.type('create a simple todo list app');
        await page.waitForTimeout(1000);
        
        // Find and click the generate button
        const buttons = await page.$$('button');
        let generateButton = null;
        
        for (const button of buttons) {
            const text = await page.evaluate(el => el.textContent, button);
            if (text && text.includes('∞')) {
                generateButton = button;
                console.log(`✅ Found generate button: "${text}"`);
                break;
            }
        }
        
        if (generateButton) {
            await generateButton.click();
            console.log('✅ Clicked generate button');
            
            // Wait for generation and watch console logs
            console.log('⏳ Waiting for generation...');
            await page.waitForTimeout(15000);
            
            // Check for generated files in the file manager
            const fileManager = await page.$('[class*="file"], [data-testid*="file"]');
            if (fileManager) {
                console.log('✅ File manager found');
                const fileText = await page.evaluate(el => el.textContent, fileManager);
                console.log('📁 File manager content:', fileText);
            } else {
                console.log('❌ No file manager found');
            }
            
            // Check for preview content
            const preview = await page.$('iframe, [class*="preview"]');
            if (preview) {
                console.log('✅ Preview found');
            } else {
                console.log('❌ No preview found');
            }
            
            // Take screenshot
            await page.screenshot({ path: 'template-generation-test.png', fullPage: true });
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

testTemplateGeneration();
