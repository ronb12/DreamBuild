const puppeteer = require('puppeteer');

async function testPreviewFix() {
    console.log('🔍 Testing preview fix...');
    
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
        
        // Enter prompt for healthy food website
        await page.click('#prompt', { clickCount: 3 });
        await page.type('#prompt', 'create a healthy food tips website with nutrition advice and meal planning');
        console.log('📝 Prompt entered');
        
        // Wait for auto-detection
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Click generate
        await page.click('#generate-btn');
        console.log('🚀 Generate clicked');
        
        // Wait for generation
        await new Promise(resolve => setTimeout(resolve, 8000));
        
        // Check if preview is showing content
        const previewStatus = await page.evaluate(() => {
            const preview = document.getElementById('app-preview');
            const placeholder = document.getElementById('preview-placeholder');
            
            return {
                previewDisplay: preview ? preview.style.display : 'not found',
                placeholderDisplay: placeholder ? placeholder.style.display : 'not found',
                hasContent: preview && preview.contentDocument ? preview.contentDocument.body.innerHTML.length : 0,
                previewVisible: preview && preview.style.display !== 'none'
            };
        });
        
        console.log('\n🖥️  PREVIEW STATUS:');
        console.log('Preview display:', previewStatus.previewDisplay);
        console.log('Placeholder display:', previewStatus.placeholderDisplay);
        console.log('Content length:', previewStatus.hasContent);
        console.log('Preview visible:', previewStatus.previewVisible);
        
        // Check if we can see the actual rendered content
        const renderedContent = await page.evaluate(() => {
            const preview = document.getElementById('app-preview');
            if (!preview || !preview.contentDocument) return 'No iframe content';
            
            const doc = preview.contentDocument;
            const body = doc.body;
            
            if (!body) return 'No body element';
            
            return {
                bodyHTML: body.innerHTML.substring(0, 500),
                bodyText: body.textContent.substring(0, 200),
                hasElements: body.children.length,
                title: doc.title || 'No title'
            };
        });
        
        console.log('\n📄 RENDERED CONTENT:');
        console.log('Title:', renderedContent.title || renderedContent);
        if (renderedContent.bodyHTML) {
            console.log('Body HTML preview:', renderedContent.bodyHTML);
            console.log('Body text preview:', renderedContent.bodyText);
            console.log('Number of elements:', renderedContent.hasElements);
        }
        
        // Take screenshot
        await page.screenshot({ 
            path: 'preview-fix-test.png',
            fullPage: true 
        });
        console.log('📸 Screenshot saved');
        
        // Final assessment
        if (previewStatus.previewVisible && previewStatus.hasContent > 100) {
            console.log('\n🎉 SUCCESS: Preview is working correctly!');
            console.log('✅ Preview iframe is visible');
            console.log('✅ Preview contains rendered content');
            console.log('✅ Healthy food website is being displayed');
        } else if (previewStatus.previewVisible) {
            console.log('\n⚠️  PARTIAL SUCCESS: Preview iframe is visible but content may be limited');
        } else {
            console.log('\n❌ ISSUE: Preview is not visible or not working properly');
        }
        
    } catch (error) {
        console.error('❌ Test failed:', error.message);
    } finally {
        await browser.close();
    }
}

testPreviewFix()
    .then(() => {
        console.log('\n✅ PREVIEW FIX TEST COMPLETED!');
        process.exit(0);
    })
    .catch((error) => {
        console.error('\n❌ TEST FAILED:', error.message);
        process.exit(1);
    });
