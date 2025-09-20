const puppeteer = require('puppeteer');

async function debugContentGeneration() {
    console.log('🔍 Debugging content generation vs prompt...');
    
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
        
        // Enter specific healthy food prompt
        const prompt = 'create a healthy food tips website with nutrition advice and meal planning features';
        await page.click('#prompt', { clickCount: 3 });
        await page.type('#prompt', prompt);
        console.log('📝 Prompt entered:', prompt);
        
        // Wait for auto-detection
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Click generate
        await page.click('#generate-btn');
        console.log('🚀 Generate clicked');
        
        // Wait for generation
        await new Promise(resolve => setTimeout(resolve, 8000));
        
        // Debug: Check what was actually generated vs what was requested
        console.log('\n📄 ANALYZING GENERATED CONTENT:');
        
        const generatedContent = await page.evaluate(() => {
            const project = window.currentProject;
            return {
                html: project.files['index.html'] || '',
                css: project.files['style.css'] || '',
                js: project.files['script.js'] || ''
            };
        });
        
        console.log('📊 Generated Content Analysis:');
        console.log('HTML length:', generatedContent.html.length);
        console.log('CSS length:', generatedContent.css.length);
        console.log('JS length:', generatedContent.js.length);
        
        // Check for healthy food specific content
        const healthKeywords = ['health', 'healthy', 'nutrition', 'food', 'meal', 'diet', 'wellness', 'vitamin', 'protein', 'calorie'];
        const foodKeywords = ['recipe', 'ingredient', 'cooking', 'kitchen', 'organic', 'fresh', 'vegetable', 'fruit'];
        
        console.log('\n🥗 HEALTHY FOOD CONTENT CHECK:');
        
        const htmlLower = generatedContent.html.toLowerCase();
        const cssLower = generatedContent.css.toLowerCase();
        const jsLower = generatedContent.js.toLowerCase();
        
        const foundHealthKeywords = healthKeywords.filter(keyword => 
            htmlLower.includes(keyword) || cssLower.includes(keyword) || jsLower.includes(keyword)
        );
        
        const foundFoodKeywords = foodKeywords.filter(keyword => 
            htmlLower.includes(keyword) || cssLower.includes(keyword) || jsLower.includes(keyword)
        );
        
        console.log('Found health keywords:', foundHealthKeywords);
        console.log('Found food keywords:', foundFoodKeywords);
        
        // Show actual generated HTML content
        console.log('\n📝 GENERATED HTML PREVIEW:');
        console.log(generatedContent.html.substring(0, 800) + '...');
        
        // Check what's actually being displayed in preview
        const previewContent = await page.evaluate(() => {
            const preview = document.getElementById('app-preview');
            if (!preview || !preview.contentDocument) return 'No preview content';
            
            const doc = preview.contentDocument;
            return {
                title: doc.title,
                bodyText: doc.body ? doc.body.textContent.substring(0, 500) : 'No body',
                bodyHTML: doc.body ? doc.body.innerHTML.substring(0, 800) : 'No body'
            };
        });
        
        console.log('\n🖥️  PREVIEW CONTENT:');
        console.log('Title:', previewContent.title);
        console.log('Body text:', previewContent.bodyText);
        
        // Check if content matches the prompt
        const promptLower = prompt.toLowerCase();
        const hasPromptKeywords = healthKeywords.some(keyword => promptLower.includes(keyword));
        const hasGeneratedKeywords = foundHealthKeywords.length > 0 || foundFoodKeywords.length > 0;
        
        console.log('\n🎯 CONTENT MATCHING ANALYSIS:');
        console.log('Prompt contains health/food keywords:', hasPromptKeywords);
        console.log('Generated content contains health/food keywords:', hasGeneratedKeywords);
        console.log('Content matches prompt:', hasGeneratedKeywords && hasPromptKeywords);
        
        if (!hasGeneratedKeywords) {
            console.log('\n❌ ISSUE IDENTIFIED: Generated content does not match the healthy food prompt!');
            console.log('The content appears to be generic rather than health/food specific.');
        } else {
            console.log('\n✅ Content appears to match the prompt requirements');
        }
        
        // Take screenshot
        await page.screenshot({ 
            path: 'content-generation-debug.png',
            fullPage: true 
        });
        console.log('📸 Debug screenshot saved');
        
    } catch (error) {
        console.error('❌ Debug failed:', error.message);
    } finally {
        await browser.close();
    }
}

debugContentGeneration()
    .then(() => {
        console.log('\n✅ CONTENT GENERATION DEBUG COMPLETED!');
        process.exit(0);
    })
    .catch((error) => {
        console.error('\n❌ DEBUG FAILED:', error.message);
        process.exit(1);
    });
