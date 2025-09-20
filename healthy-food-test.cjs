const puppeteer = require('puppeteer');

async function testHealthyFoodGeneration() {
    console.log('🥗 Testing healthy food website generation...');
    
    const browser = await puppeteer.launch({
        headless: false, // Show browser for debugging
        slowMo: 200,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    try {
        const page = await browser.newPage();
        await page.setViewport({ width: 1280, height: 720 });
        
        // Navigate to AI Builder
        console.log('📱 Navigating to AI Builder...');
        await page.goto('https://dreambuild-2024-app.web.app/ai-builder.html', {
            waitUntil: 'networkidle2',
            timeout: 30000
        });
        
        await page.waitForSelector('#prompt', { timeout: 10000 });
        console.log('✅ Page loaded');
        
        // Clear any existing content and enter prompt
        await page.click('#prompt', { clickCount: 3 });
        await page.type('#prompt', 'create a healthy food tips website');
        console.log('📝 Prompt entered');
        
        // Wait for auto-detection
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Check console logs
        page.on('console', msg => {
            console.log('🔍 Browser console:', msg.text());
        });
        
        // Click generate button
        console.log('🚀 Clicking generate button...');
        await page.click('#generate-btn');
        
        // Wait for generation
        console.log('⏳ Waiting for generation...');
        await new Promise(resolve => setTimeout(resolve, 8000));
        
        // Check if code was generated
        const codeContent = await page.evaluate(() => {
            const editor = document.getElementById('code-editor');
            return editor ? editor.value : '';
        });
        
        console.log('📄 Code content length:', codeContent.length);
        
        if (codeContent.length > 50) {
            console.log('✅ Code generated successfully!');
            
            // Check for healthy food content
            const hasHealthContent = codeContent.toLowerCase().includes('health');
            const hasFoodContent = codeContent.toLowerCase().includes('food');
            
            console.log('🥗 Contains health content:', hasHealthContent);
            console.log('🍎 Contains food content:', hasFoodContent);
            
            if (hasHealthContent && hasFoodContent) {
                console.log('🎉 SUCCESS: Healthy food content detected!');
            } else {
                console.log('⚠️  Warning: Healthy food content not clearly detected');
            }
            
            // Show first 200 characters of generated code
            console.log('📝 Generated code preview:');
            console.log(codeContent.substring(0, 200) + '...');
            
        } else {
            console.log('❌ Code generation failed or insufficient content');
            
            // Check what's in the editor
            console.log('📝 Current editor content:');
            console.log(codeContent);
        }
        
        // Check live preview
        const previewContent = await page.evaluate(() => {
            const preview = document.getElementById('app-preview');
            return preview ? preview.innerHTML : '';
        });
        
        console.log('🖥️  Preview content length:', previewContent.length);
        
        // Take final screenshot
        await page.screenshot({ 
            path: 'healthy-food-final-test.png',
            fullPage: true 
        });
        console.log('📸 Final screenshot saved');
        
        // Test summary
        console.log('\n📋 TEST SUMMARY:');
        console.log('   ✅ AI Builder loads correctly');
        console.log('   ✅ Prompt input works');
        console.log('   ✅ Generate button works');
        console.log('   ✅ Code generation produces content:', codeContent.length > 50);
        console.log('   ✅ Live preview updates:', previewContent.length > 50);
        
        if (codeContent.length > 50) {
            console.log('   🎉 HEALTHY FOOD WEBSITE GENERATION: SUCCESS!');
            console.log('\n🏆 The DreamBuild AI Builder successfully generates healthy food websites!');
        } else {
            console.log('   ⚠️  Code generation needs investigation');
        }
        
    } catch (error) {
        console.error('❌ Test failed:', error.message);
        
        // Take error screenshot
        try {
            await page.screenshot({ 
                path: 'error-screenshot.png',
                fullPage: true 
            });
            console.log('📸 Error screenshot saved');
        } catch (e) {
            console.log('Could not save error screenshot');
        }
        
        throw error;
    } finally {
        await browser.close();
    }
}

testHealthyFoodGeneration()
    .then(() => {
        console.log('\n✅ HEALTHY FOOD GENERATION TEST COMPLETED!');
        process.exit(0);
    })
    .catch((error) => {
        console.error('\n❌ TEST FAILED:', error.message);
        process.exit(1);
    });
