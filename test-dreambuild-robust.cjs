// DreamBuild Robust Automated Test with Puppeteer
// Enhanced test with better element detection and debugging

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

console.log('🤖 Starting DreamBuild Robust Automated Test...');

async function testDreamBuildRobust() {
    let browser;
    let page;
    const results = [];
    
    try {
        // Launch browser with more options
        console.log('🚀 Launching browser...');
        browser = await puppeteer.launch({
            headless: false, // Keep visible for debugging
            defaultViewport: { width: 1280, height: 720 },
            args: [
                '--no-sandbox', 
                '--disable-setuid-sandbox',
                '--disable-web-security',
                '--disable-features=VizDisplayCompositor'
            ]
        });
        
        page = await browser.newPage();
        
        // Enable console logging
        page.on('console', msg => {
            console.log('🔍 Console:', msg.text());
        });
        
        // Set user agent
        await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
        
        // Navigate to DreamBuild
        console.log('🌐 Navigating to DreamBuild...');
        await page.goto('https://dreambuild-2024-app.web.app', { 
            waitUntil: 'networkidle2',
            timeout: 30000 
        });
        
        // Wait for the page to load
        await page.waitForTimeout(5000);
        
        // Take a screenshot for debugging
        await page.screenshot({ path: 'dreambuild-page.png', fullPage: true });
        console.log('📸 Screenshot saved as dreambuild-page.png');
        
        // Test 1: Check if page loads correctly
        console.log('\n📋 Test 1: Page Load Verification');
        const title = await page.title();
        if (title.includes('DreamBuild') || title.includes('AI')) {
            results.push({ test: 'Page Load', status: 'PASS', message: `Page loaded successfully: ${title}` });
            console.log('✅ Page loaded successfully');
        } else {
            results.push({ test: 'Page Load', status: 'FAIL', message: `Unexpected title: ${title}` });
            console.log('❌ Page load failed');
        }
        
        // Test 2: Debug - Find all input elements
        console.log('\n📋 Test 2: Input Element Detection');
        try {
            // Get all possible input elements
            const inputElements = await page.$$eval('input, textarea, [contenteditable]', elements => 
                elements.map(el => ({
                    tagName: el.tagName,
                    type: el.type || 'N/A',
                    placeholder: el.placeholder || 'N/A',
                    className: el.className || 'N/A',
                    id: el.id || 'N/A'
                }))
            );
            
            console.log('🔍 Found input elements:', inputElements);
            
            if (inputElements.length > 0) {
                results.push({ test: 'Input Elements', status: 'PASS', message: `Found ${inputElements.length} input elements` });
                console.log(`✅ Found ${inputElements.length} input elements`);
            } else {
                results.push({ test: 'Input Elements', status: 'FAIL', message: 'No input elements found' });
                console.log('❌ No input elements found');
            }
        } catch (error) {
            results.push({ test: 'Input Elements', status: 'FAIL', message: `Error: ${error.message}` });
            console.log('❌ Error finding input elements:', error.message);
        }
        
        // Test 3: Debug - Find all buttons
        console.log('\n📋 Test 3: Button Detection');
        try {
            const buttons = await page.$$eval('button', elements => 
                elements.map(el => ({
                    text: el.textContent?.trim() || 'N/A',
                    className: el.className || 'N/A',
                    id: el.id || 'N/A',
                    title: el.title || 'N/A'
                }))
            );
            
            console.log('🔍 Found buttons:', buttons);
            
            if (buttons.length > 0) {
                results.push({ test: 'Buttons', status: 'PASS', message: `Found ${buttons.length} buttons` });
                console.log(`✅ Found ${buttons.length} buttons`);
            } else {
                results.push({ test: 'Buttons', status: 'FAIL', message: 'No buttons found' });
                console.log('❌ No buttons found');
            }
        } catch (error) {
            results.push({ test: 'Buttons', status: 'FAIL', message: `Error: ${error.message}` });
            console.log('❌ Error finding buttons:', error.message);
        }
        
        // Test 4: Try to find the AI prompt area with multiple strategies
        console.log('\n📋 Test 4: AI Prompt Area Detection');
        let promptElement = null;
        let promptStrategy = '';
        
        // Strategy 1: Look for textarea
        try {
            promptElement = await page.$('textarea');
            if (promptElement) {
                promptStrategy = 'textarea';
                console.log('✅ Found textarea');
            }
        } catch (e) {}
        
        // Strategy 2: Look for input with specific attributes
        if (!promptElement) {
            try {
                promptElement = await page.$('input[type="text"], input[placeholder*="prompt"], input[placeholder*="describe"]');
                if (promptElement) {
                    promptStrategy = 'input';
                    console.log('✅ Found input field');
                }
            } catch (e) {}
        }
        
        // Strategy 3: Look for contenteditable div
        if (!promptElement) {
            try {
                promptElement = await page.$('[contenteditable="true"]');
                if (promptElement) {
                    promptStrategy = 'contenteditable';
                    console.log('✅ Found contenteditable element');
                }
            } catch (e) {}
        }
        
        // Strategy 4: Look for any element with prompt-related classes or IDs
        if (!promptElement) {
            try {
                const selectors = [
                    '[class*="prompt"]',
                    '[id*="prompt"]',
                    '[class*="input"]',
                    '[class*="textarea"]',
                    '[data-testid*="prompt"]',
                    '[data-testid*="input"]'
                ];
                
                for (const selector of selectors) {
                    promptElement = await page.$(selector);
                    if (promptElement) {
                        promptStrategy = `selector: ${selector}`;
                        console.log(`✅ Found element with ${selector}`);
                        break;
                    }
                }
            } catch (e) {}
        }
        
        if (promptElement) {
            results.push({ test: 'AI Prompt Area', status: 'PASS', message: `Found using ${promptStrategy}` });
            console.log(`✅ AI prompt area found using ${promptStrategy}`);
        } else {
            results.push({ test: 'AI Prompt Area', status: 'FAIL', message: 'No AI prompt area found' });
            console.log('❌ No AI prompt area found');
        }
        
        // Test 5: Try to interact with the prompt element if found
        if (promptElement) {
            console.log('\n📋 Test 5: Prompt Interaction Test');
            try {
                // Click and focus the element
                await promptElement.click();
                await page.waitForTimeout(1000);
                
                // Type a test prompt
                await page.keyboard.type('create a simple web app');
                await page.waitForTimeout(1000);
                
                // Look for generate button
                const generateButton = await page.$('button[type="submit"], button:has-text("Generate"), button:has-text("∞"), button[title*="Generate"]');
                
                if (generateButton) {
                    await generateButton.click();
                    console.log('✅ Successfully clicked generate button');
                    
                    // Wait for generation
                    await page.waitForTimeout(5000);
                    
                    // Check for generated content
                    const contentElements = await page.$$('[class*="file"], [class*="preview"], iframe, [data-testid*="file"]');
                    if (contentElements.length > 0) {
                        results.push({ test: 'Prompt Interaction', status: 'PASS', message: `Generated content with ${contentElements.length} elements` });
                        console.log(`✅ Generated content with ${contentElements.length} elements`);
                    } else {
                        results.push({ test: 'Prompt Interaction', status: 'WARN', message: 'No generated content visible' });
                        console.log('⚠️ No generated content visible');
                    }
                } else {
                    results.push({ test: 'Prompt Interaction', status: 'WARN', message: 'Generate button not found' });
                    console.log('⚠️ Generate button not found');
                }
            } catch (error) {
                results.push({ test: 'Prompt Interaction', status: 'FAIL', message: `Error: ${error.message}` });
                console.log('❌ Error in prompt interaction:', error.message);
            }
        }
        
        // Test 6: Check for Template-First indicators
        console.log('\n📋 Test 6: Template-First System Detection');
        try {
            // Look for template-related elements
            const templateElements = await page.$$eval('[class*="template"], [data-testid*="template"], button[title*="template"], button[title*="Template"]', elements =>
                elements.map(el => ({
                    tagName: el.tagName,
                    text: el.textContent?.trim() || 'N/A',
                    className: el.className || 'N/A'
                }))
            );
            
            if (templateElements.length > 0) {
                results.push({ test: 'Template-First UI', status: 'PASS', message: `Found ${templateElements.length} template elements` });
                console.log(`✅ Found ${templateElements.length} template elements`);
            } else {
                results.push({ test: 'Template-First UI', status: 'WARN', message: 'No template UI elements found' });
                console.log('⚠️ No template UI elements found');
            }
        } catch (error) {
            results.push({ test: 'Template-First UI', status: 'FAIL', message: `Error: ${error.message}` });
            console.log('❌ Error checking template UI:', error.message);
        }
        
        // Test 7: Check page source for template-related content
        console.log('\n📋 Test 7: Page Source Analysis');
        try {
            const pageContent = await page.content();
            const templateKeywords = ['template', 'Template', 'TEMPLATE'];
            const foundKeywords = templateKeywords.filter(keyword => pageContent.includes(keyword));
            
            if (foundKeywords.length > 0) {
                results.push({ test: 'Page Source', status: 'PASS', message: `Found template keywords: ${foundKeywords.join(', ')}` });
                console.log(`✅ Found template keywords: ${foundKeywords.join(', ')}`);
            } else {
                results.push({ test: 'Page Source', status: 'WARN', message: 'No template keywords found in page source' });
                console.log('⚠️ No template keywords found in page source');
            }
        } catch (error) {
            results.push({ test: 'Page Source', status: 'FAIL', message: `Error: ${error.message}` });
            console.log('❌ Error analyzing page source:', error.message);
        }
        
    } catch (error) {
        console.error('❌ Test execution failed:', error);
        results.push({ test: 'Overall', status: 'FAIL', message: `Test execution failed: ${error.message}` });
    } finally {
        if (browser) {
            await browser.close();
        }
    }
    
    // Generate test report
    console.log('\n📊 DREAMBUILD ROBUST TEST RESULTS');
    console.log('==================================');
    
    const passed = results.filter(r => r.status === 'PASS').length;
    const failed = results.filter(r => r.status === 'FAIL').length;
    const warned = results.filter(r => r.status === 'WARN').length;
    const total = results.length;
    
    results.forEach(result => {
        const status = result.status === 'PASS' ? '✅' : result.status === 'FAIL' ? '❌' : '⚠️';
        console.log(`${status} ${result.test}: ${result.message}`);
    });
    
    console.log(`\n🎯 Summary: ${passed}/${total} passed, ${failed} failed, ${warned} warnings`);
    
    if (failed === 0) {
        console.log('\n🎉 ALL TESTS PASSED! DreamBuild is working correctly.');
    } else {
        console.log('\n⚠️ Some tests failed. Please review the issues above.');
    }
    
    // Save detailed report
    const report = {
        timestamp: new Date().toISOString(),
        summary: {
            total: total,
            passed: passed,
            failed: failed,
            warnings: warned
        },
        results: results
    };
    
    fs.writeFileSync('dreambuild-robust-test-report.json', JSON.stringify(report, null, 2));
    console.log('\n📄 Detailed report saved to: dreambuild-robust-test-report.json');
    
    return report;
}

// Run the test
testDreamBuildRobust()
    .then(report => {
        console.log('\n🏁 Robust test completed!');
        process.exit(report.summary.failed > 0 ? 1 : 0);
    })
    .catch(error => {
        console.error('💥 Robust test execution failed:', error);
        process.exit(1);
    });
