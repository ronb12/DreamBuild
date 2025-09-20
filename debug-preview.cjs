const puppeteer = require('puppeteer');

async function debugPreview() {
    console.log('🔍 Debugging preview functionality...');
    
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 100,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    try {
        const page = await browser.newPage();
        await page.setViewport({ width: 1400, height: 800 });
        
        // Navigate to AI Builder
        await page.goto('https://dreambuild-2024-app.web.app/ai-builder.html', {
            waitUntil: 'networkidle2',
            timeout: 30000
        });
        
        await page.waitForSelector('#prompt', { timeout: 10000 });
        console.log('✅ Page loaded');
        
        // Enter prompt
        await page.click('#prompt', { clickCount: 3 });
        await page.type('#prompt', 'create a healthy food tips website with nutrition advice');
        console.log('📝 Prompt entered');
        
        // Wait for auto-detection
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Click generate
        await page.click('#generate-btn');
        console.log('🚀 Generate clicked');
        
        // Wait for generation
        await new Promise(resolve => setTimeout(resolve, 8000));
        
        // Debug: Check what files were generated
        console.log('\n📄 DEBUGGING GENERATED FILES:');
        
        const files = await page.evaluate(() => {
            const project = window.currentProject;
            const result = {};
            
            for (const [filename, content] of Object.entries(project.files)) {
                result[filename] = {
                    length: content ? content.length : 0,
                    preview: content ? content.substring(0, 200) + '...' : 'EMPTY'
                };
            }
            
            return result;
        });
        
        console.log('Generated files:', JSON.stringify(files, null, 2));
        
        // Check preview content
        const previewContent = await page.evaluate(() => {
            const preview = document.getElementById('app-preview');
            return {
                innerHTML: preview.innerHTML,
                textContent: preview.textContent,
                length: preview.innerHTML.length
            };
        });
        
        console.log('\n🖥️  PREVIEW DEBUG:');
        console.log('Preview length:', previewContent.length);
        console.log('Preview HTML:', previewContent.innerHTML.substring(0, 500) + '...');
        console.log('Preview text:', previewContent.textContent.substring(0, 200) + '...');
        
        // Check if preview is empty
        if (previewContent.length < 100) {
            console.log('❌ Preview is empty or very short!');
            
            // Try to manually trigger preview update
            await page.evaluate(() => {
                if (window.updatePreview) {
                    console.log('Manually calling updatePreview...');
                    window.updatePreview();
                }
            });
            
            // Wait and check again
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            const updatedPreview = await page.evaluate(() => {
                const preview = document.getElementById('app-preview');
                return preview.innerHTML;
            });
            
            console.log('After manual update:', updatedPreview.length, 'characters');
        }
        
        // Check code editor content
        const editorContent = await page.evaluate(() => {
            const editor = document.getElementById('code-editor');
            return editor ? editor.value : '';
        });
        
        console.log('\n📝 EDITOR CONTENT:');
        console.log('Editor length:', editorContent.length);
        console.log('Editor preview:', editorContent.substring(0, 300) + '...');
        
        // Take screenshot
        await page.screenshot({ 
            path: 'debug-preview-screenshot.png',
            fullPage: true 
        });
        console.log('📸 Debug screenshot saved');
        
    } catch (error) {
        console.error('❌ Debug failed:', error.message);
    } finally {
        await browser.close();
    }
}

debugPreview()
    .then(() => {
        console.log('\n✅ DEBUG COMPLETED!');
        process.exit(0);
    })
    .catch((error) => {
        console.error('\n❌ DEBUG FAILED:', error.message);
        process.exit(1);
    });
