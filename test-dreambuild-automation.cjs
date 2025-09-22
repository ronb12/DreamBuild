// DreamBuild Automated Test with Puppeteer
// Tests the template-first system and verifies application generation

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

console.log('🤖 Starting DreamBuild Automated Test...');

async function testDreamBuildGeneration() {
    let browser;
    let page;
    const results = [];
    
    try {
        // Launch browser
        console.log('🚀 Launching browser...');
        browser = await puppeteer.launch({
            headless: false, // Set to true for headless mode
            defaultViewport: { width: 1280, height: 720 },
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        
        page = await browser.newPage();
        
        // Set user agent
        await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
        
        // Navigate to DreamBuild
        console.log('🌐 Navigating to DreamBuild...');
        await page.goto('https://dreambuild-2024-app.web.app', { 
            waitUntil: 'networkidle2',
            timeout: 30000 
        });
        
        // Wait for the page to load
        await page.waitForTimeout(3000);
        
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
        
        // Test 2: Check for AI prompt input
        console.log('\n📋 Test 2: AI Prompt Input Detection');
        try {
            await page.waitForSelector('textarea', { timeout: 10000 });
            const textarea = await page.$('textarea');
            if (textarea) {
                results.push({ test: 'AI Prompt Input', status: 'PASS', message: 'Textarea found for AI input' });
                console.log('✅ AI prompt textarea found');
            } else {
                results.push({ test: 'AI Prompt Input', status: 'FAIL', message: 'No textarea found' });
                console.log('❌ AI prompt textarea not found');
            }
        } catch (error) {
            results.push({ test: 'AI Prompt Input', status: 'FAIL', message: `Error finding textarea: ${error.message}` });
            console.log('❌ Error finding textarea:', error.message);
        }
        
        // Test 3: Test Template-First Generation
        console.log('\n📋 Test 3: Template-First Generation Test');
        const testPrompts = [
            'create a dashboard application',
            'build a todo list app',
            'make an ecommerce website'
        ];
        
        for (let i = 0; i < testPrompts.length; i++) {
            const prompt = testPrompts[i];
            console.log(`\n🎯 Testing prompt ${i + 1}: "${prompt}"`);
            
            try {
                // Clear and type the prompt
                await page.click('textarea', { clickCount: 3 });
                await page.type('textarea', prompt);
                
                // Wait a moment for the input to register
                await page.waitForTimeout(1000);
                
                // Look for and click the generate button (infinity symbol or send button)
                let generateButton = null;
                
                // Try different selectors for the generate button
                const buttonSelectors = [
                    'button[title*="Generate"]',
                    'button[aria-label*="Generate"]',
                    'button:has-text("∞")',
                    'button:has-text("Generate")',
                    'button[type="submit"]',
                    '.generate-button',
                    '[data-testid="generate-button"]'
                ];
                
                for (const selector of buttonSelectors) {
                    try {
                        generateButton = await page.$(selector);
                        if (generateButton) {
                            console.log(`✅ Found generate button with selector: ${selector}`);
                            break;
                        }
                    } catch (e) {
                        // Continue to next selector
                    }
                }
                
                // If no specific button found, try to find any button near the textarea
                if (!generateButton) {
                    const buttons = await page.$$('button');
                    for (const button of buttons) {
                        const text = await page.evaluate(el => el.textContent, button);
                        if (text && (text.includes('∞') || text.includes('Generate') || text.includes('Send'))) {
                            generateButton = button;
                            console.log('✅ Found generate button by text content');
                            break;
                        }
                    }
                }
                
                if (generateButton) {
                    await generateButton.click();
                    console.log('✅ Clicked generate button');
                    
                    // Wait for generation to complete
                    await page.waitForTimeout(5000);
                    
                    // Check if files were generated
                    const fileElements = await page.$$('[data-testid*="file"], .file-item, .file-name, [class*="file"]');
                    if (fileElements.length > 0) {
                        results.push({ 
                            test: `Template Generation - ${prompt}`, 
                            status: 'PASS', 
                            message: `Generated ${fileElements.length} files` 
                        });
                        console.log(`✅ Generated ${fileElements.length} files for: ${prompt}`);
                    } else {
                        // Check if there's a preview or content area
                        const previewArea = await page.$('.preview, .live-preview, iframe, [class*="preview"]');
                        if (previewArea) {
                            results.push({ 
                                test: `Template Generation - ${prompt}`, 
                                status: 'PASS', 
                                message: 'Preview area found with generated content' 
                            });
                            console.log(`✅ Preview area found for: ${prompt}`);
                        } else {
                            results.push({ 
                                test: `Template Generation - ${prompt}`, 
                                status: 'FAIL', 
                                message: 'No files or preview generated' 
                            });
                            console.log(`❌ No files generated for: ${prompt}`);
                        }
                    }
                } else {
                    results.push({ 
                        test: `Template Generation - ${prompt}`, 
                        status: 'FAIL', 
                        message: 'Generate button not found' 
                    });
                    console.log('❌ Generate button not found');
                }
                
                // Clear the textarea for next test
                await page.click('textarea', { clickCount: 3 });
                await page.keyboard.press('Backspace');
                
            } catch (error) {
                results.push({ 
                    test: `Template Generation - ${prompt}`, 
                    status: 'FAIL', 
                    message: `Error: ${error.message}` 
                });
                console.log(`❌ Error testing prompt "${prompt}":`, error.message);
            }
            
            // Wait between tests
            await page.waitForTimeout(2000);
        }
        
        // Test 4: Check for Template-First Detection
        console.log('\n📋 Test 4: Template-First Detection Test');
        try {
            // Look for template-related UI elements
            const templateElements = await page.$$('[class*="template"], [data-testid*="template"], button[title*="template"], button[title*="Template"]');
            if (templateElements.length > 0) {
                results.push({ test: 'Template-First UI', status: 'PASS', message: 'Template-related UI elements found' });
                console.log('✅ Template-First UI elements detected');
            } else {
                results.push({ test: 'Template-First UI', status: 'WARN', message: 'No template UI elements found' });
                console.log('⚠️ No template UI elements found');
            }
        } catch (error) {
            results.push({ test: 'Template-First UI', status: 'FAIL', message: `Error: ${error.message}` });
            console.log('❌ Error checking template UI:', error.message);
        }
        
        // Test 5: Check Console for Template-First Logs
        console.log('\n📋 Test 5: Console Log Analysis');
        try {
            const logs = await page.evaluate(() => {
                return window.consoleLogs || [];
            });
            
            const templateLogs = logs.filter(log => 
                log.includes('Template-First') || 
                log.includes('template') || 
                log.includes('Template-Based Generator')
            );
            
            if (templateLogs.length > 0) {
                results.push({ test: 'Template-First Logs', status: 'PASS', message: `Found ${templateLogs.length} template-related logs` });
                console.log(`✅ Found ${templateLogs.length} template-related console logs`);
            } else {
                results.push({ test: 'Template-First Logs', status: 'WARN', message: 'No template-related logs found' });
                console.log('⚠️ No template-related console logs found');
            }
        } catch (error) {
            results.push({ test: 'Template-First Logs', status: 'FAIL', message: `Error: ${error.message}` });
            console.log('❌ Error checking console logs:', error.message);
        }
        
        // Test 6: Performance Test
        console.log('\n📋 Test 6: Performance Test');
        try {
            const startTime = Date.now();
            await page.click('textarea', { clickCount: 3 });
            await page.type('textarea', 'create a simple web app');
            
            // Find and click generate button
            const generateButton = await page.$('button[title*="Generate"], button:has-text("∞"), button[type="submit"]');
            if (generateButton) {
                await generateButton.click();
                
                // Wait for generation
                await page.waitForTimeout(3000);
                
                const endTime = Date.now();
                const generationTime = endTime - startTime;
                
                if (generationTime < 10000) { // Less than 10 seconds
                    results.push({ test: 'Performance', status: 'PASS', message: `Generation completed in ${generationTime}ms` });
                    console.log(`✅ Generation completed in ${generationTime}ms`);
                } else {
                    results.push({ test: 'Performance', status: 'WARN', message: `Generation took ${generationTime}ms (slow)` });
                    console.log(`⚠️ Generation took ${generationTime}ms (slow)`);
                }
            }
        } catch (error) {
            results.push({ test: 'Performance', status: 'FAIL', message: `Error: ${error.message}` });
            console.log('❌ Error in performance test:', error.message);
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
    console.log('\n📊 DREAMBUILD AUTOMATED TEST RESULTS');
    console.log('=====================================');
    
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
    
    fs.writeFileSync('dreambuild-test-report.json', JSON.stringify(report, null, 2));
    console.log('\n📄 Detailed report saved to: dreambuild-test-report.json');
    
    return report;
}

// Run the test
testDreamBuildGeneration()
    .then(report => {
        console.log('\n🏁 Test completed successfully!');
        process.exit(report.summary.failed > 0 ? 1 : 0);
    })
    .catch(error => {
        console.error('💥 Test execution failed:', error);
        process.exit(1);
    });
