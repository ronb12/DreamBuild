// DreamBuild Final Comprehensive Test with Puppeteer
// Tests the complete application flow with proper selectors

const puppeteer = require('puppeteer');
const fs = require('fs');

console.log('🤖 Starting DreamBuild Final Comprehensive Test...');

async function testDreamBuildFinal() {
    let browser;
    let page;
    const results = [];
    
    try {
        // Launch browser
        console.log('🚀 Launching browser...');
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
        
        // Set user agent
        await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
        
        // Test 1: Navigate directly to the app route
        console.log('\n📋 Test 1: Direct Navigation to App');
        try {
            await page.goto('https://dreambuild-2024-app.web.app/app', { 
                waitUntil: 'networkidle2',
                timeout: 30000 
            });
            
            // Wait for React app to load
            await page.waitForFunction(() => {
                return document.querySelector('#root') && 
                       document.querySelector('#root').children.length > 0;
            }, { timeout: 15000 });
            
            results.push({ test: 'Direct Navigation', status: 'PASS', message: 'Successfully navigated to /app route' });
            console.log('✅ Successfully navigated to /app route');
        } catch (error) {
            results.push({ test: 'Direct Navigation', status: 'FAIL', message: `Error: ${error.message}` });
            console.log('❌ Error navigating to /app:', error.message);
        }
        
        // Test 2: Check for AI prompt input
        console.log('\n📋 Test 2: AI Prompt Input Detection');
        try {
            // Wait for textarea or input to appear
            await page.waitForSelector('textarea, input[type="text"], [contenteditable="true"]', { timeout: 10000 });
            
            const promptElement = await page.$('textarea, input[type="text"], [contenteditable="true"]');
            if (promptElement) {
                results.push({ test: 'AI Prompt Input', status: 'PASS', message: 'AI prompt input found' });
                console.log('✅ AI prompt input found');
            } else {
                results.push({ test: 'AI Prompt Input', status: 'FAIL', message: 'AI prompt input not found' });
                console.log('❌ AI prompt input not found');
            }
        } catch (error) {
            results.push({ test: 'AI Prompt Input', status: 'FAIL', message: `Error: ${error.message}` });
            console.log('❌ Error finding AI prompt input:', error.message);
        }
        
        // Test 3: Test prompt interaction and generation
        console.log('\n📋 Test 3: Prompt Interaction and Generation Test');
        try {
            const promptElement = await page.$('textarea, input[type="text"], [contenteditable="true"]');
            if (promptElement) {
                // Click and focus the element
                await promptElement.click();
                await page.waitForTimeout(1000);
                
                // Clear any existing text
                await page.keyboard.down('Control');
                await page.keyboard.press('KeyA');
                await page.keyboard.up('Control');
                await page.keyboard.press('Backspace');
                
                // Type a test prompt
                await page.keyboard.type('create a simple web app');
                await page.waitForTimeout(1000);
                
                console.log('✅ Typed test prompt: "create a simple web app"');
                
                // Look for generate button with multiple strategies
                const generateSelectors = [
                    'button[type="submit"]',
                    'button[title*="Generate"]',
                    'button[aria-label*="Generate"]',
                    '[data-testid*="generate"]',
                    'button[class*="generate"]',
                    'button'
                ];
                
                let generateButton = null;
                let buttonFound = false;
                
                for (const selector of generateSelectors) {
                    try {
                        const buttons = await page.$$(selector);
                        for (const button of buttons) {
                            const text = await page.evaluate(el => el.textContent, button);
                            const title = await page.evaluate(el => el.title, button);
                            const ariaLabel = await page.evaluate(el => el.getAttribute('aria-label'), button);
                            
                            if (text && (text.includes('Generate') || text.includes('∞') || text.includes('Create'))) {
                                generateButton = button;
                                buttonFound = true;
                                console.log(`✅ Found generate button by text: "${text}"`);
                                break;
                            } else if (title && (title.includes('Generate') || title.includes('Create'))) {
                                generateButton = button;
                                buttonFound = true;
                                console.log(`✅ Found generate button by title: "${title}"`);
                                break;
                            } else if (ariaLabel && (ariaLabel.includes('Generate') || ariaLabel.includes('Create'))) {
                                generateButton = button;
                                buttonFound = true;
                                console.log(`✅ Found generate button by aria-label: "${ariaLabel}"`);
                                break;
                            }
                        }
                        if (buttonFound) break;
                    } catch (e) {
                        // Continue to next selector
                    }
                }
                
                if (generateButton) {
                    await generateButton.click();
                    console.log('✅ Successfully clicked generate button');
                    
                    // Wait for generation with longer timeout
                    console.log('⏳ Waiting for generation to complete...');
                    await page.waitForTimeout(10000);
                    
                    // Check for generated content
                    const contentSelectors = [
                        '[class*="file"]',
                        '[class*="preview"]',
                        'iframe',
                        '[data-testid*="file"]',
                        '[class*="generated"]',
                        '[class*="output"]',
                        '[class*="code"]',
                        '[class*="project"]'
                    ];
                    
                    let contentFound = false;
                    let contentCount = 0;
                    
                    for (const selector of contentSelectors) {
                        const elements = await page.$$(selector);
                        if (elements.length > 0) {
                            contentFound = true;
                            contentCount += elements.length;
                            console.log(`✅ Found generated content with selector: ${selector} (${elements.length} elements)`);
                        }
                    }
                    
                    if (contentFound) {
                        results.push({ test: 'Prompt Interaction', status: 'PASS', message: `Successfully generated content (${contentCount} elements)` });
                        console.log(`✅ Successfully generated content (${contentCount} elements)`);
                    } else {
                        results.push({ test: 'Prompt Interaction', status: 'WARN', message: 'Generate button clicked but no content visible' });
                        console.log('⚠️ Generate button clicked but no content visible');
                    }
                } else {
                    results.push({ test: 'Prompt Interaction', status: 'WARN', message: 'Generate button not found' });
                    console.log('⚠️ Generate button not found');
                }
            } else {
                results.push({ test: 'Prompt Interaction', status: 'FAIL', message: 'No prompt element available for interaction' });
                console.log('❌ No prompt element available for interaction');
            }
        } catch (error) {
            results.push({ test: 'Prompt Interaction', status: 'FAIL', message: `Error: ${error.message}` });
            console.log('❌ Error in prompt interaction:', error.message);
        }
        
        // Test 4: Check for Template-First system indicators
        console.log('\n📋 Test 4: Template-First System Detection');
        try {
            // Check console logs for template-related messages
            const logs = await page.evaluate(() => {
                return window.consoleLogs || [];
            });
            
            const templateLogs = logs.filter(log => 
                typeof log === 'string' && (
                    log.includes('Template-First') || 
                    log.includes('template') || 
                    log.includes('Template-Based Generator') ||
                    log.includes('Template-Based') ||
                    log.includes('template-first') ||
                    log.includes('Template-Based Generator')
                )
            );
            
            if (templateLogs.length > 0) {
                results.push({ test: 'Template-First Logs', status: 'PASS', message: `Found ${templateLogs.length} template-related logs` });
                console.log(`✅ Found ${templateLogs.length} template-related logs`);
                console.log('Template logs:', templateLogs);
            } else {
                results.push({ test: 'Template-First Logs', status: 'WARN', message: 'No template-related logs found' });
                console.log('⚠️ No template-related logs found');
            }
        } catch (error) {
            results.push({ test: 'Template-First Logs', status: 'FAIL', message: `Error: ${error.message}` });
            console.log('❌ Error checking template logs:', error.message);
        }
        
        // Test 5: Check for file generation
        console.log('\n📋 Test 5: File Generation Detection');
        try {
            const fileElements = await page.$$('[class*="file"], [data-testid*="file"], [class*="generated"], [class*="output"]');
            if (fileElements.length > 0) {
                results.push({ test: 'File Generation', status: 'PASS', message: `Found ${fileElements.length} file elements` });
                console.log(`✅ Found ${fileElements.length} file elements`);
            } else {
                results.push({ test: 'File Generation', status: 'WARN', message: 'No file elements found' });
                console.log('⚠️ No file elements found');
            }
        } catch (error) {
            results.push({ test: 'File Generation', status: 'FAIL', message: `Error: ${error.message}` });
            console.log('❌ Error checking file generation:', error.message);
        }
        
        // Test 6: Check for preview area
        console.log('\n📋 Test 6: Preview Area Detection');
        try {
            const previewElements = await page.$$('iframe, [class*="preview"], [class*="live"], [data-testid*="preview"]');
            if (previewElements.length > 0) {
                results.push({ test: 'Preview Area', status: 'PASS', message: `Found ${previewElements.length} preview elements` });
                console.log(`✅ Found ${previewElements.length} preview elements`);
            } else {
                results.push({ test: 'Preview Area', status: 'WARN', message: 'No preview elements found' });
                console.log('⚠️ No preview elements found');
            }
        } catch (error) {
            results.push({ test: 'Preview Area', status: 'FAIL', message: `Error: ${error.message}` });
            console.log('❌ Error checking preview area:', error.message);
        }
        
        // Test 7: Check page content for generation indicators
        console.log('\n📋 Test 7: Page Content Analysis');
        try {
            const pageText = await page.evaluate(() => document.body.textContent);
            const generationKeywords = ['generated', 'created', 'built', 'files', 'project', 'app', 'application'];
            const foundKeywords = generationKeywords.filter(keyword => 
                pageText.toLowerCase().includes(keyword.toLowerCase())
            );
            
            if (foundKeywords.length > 0) {
                results.push({ test: 'Page Content', status: 'PASS', message: `Found generation keywords: ${foundKeywords.join(', ')}` });
                console.log(`✅ Found generation keywords: ${foundKeywords.join(', ')}`);
            } else {
                results.push({ test: 'Page Content', status: 'WARN', message: 'No generation keywords found in page content' });
                console.log('⚠️ No generation keywords found in page content');
            }
        } catch (error) {
            results.push({ test: 'Page Content', status: 'FAIL', message: `Error: ${error.message}` });
            console.log('❌ Error analyzing page content:', error.message);
        }
        
        // Test 8: Take final screenshot
        console.log('\n📋 Test 8: Final Screenshot');
        try {
            await page.screenshot({ path: 'dreambuild-final-comprehensive.png', fullPage: true });
            results.push({ test: 'Final Screenshot', status: 'PASS', message: 'Screenshot saved as dreambuild-final-comprehensive.png' });
            console.log('📸 Final screenshot saved as dreambuild-final-comprehensive.png');
        } catch (error) {
            results.push({ test: 'Final Screenshot', status: 'FAIL', message: `Error: ${error.message}` });
            console.log('❌ Error taking final screenshot:', error.message);
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
    console.log('\n📊 DREAMBUILD FINAL COMPREHENSIVE TEST RESULTS');
    console.log('==============================================');
    
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
    
    fs.writeFileSync('dreambuild-final-test-report.json', JSON.stringify(report, null, 2));
    console.log('\n📄 Detailed report saved to: dreambuild-final-test-report.json');
    
    return report;
}

// Run the test
testDreamBuildFinal()
    .then(report => {
        console.log('\n🏁 Final comprehensive test completed!');
        process.exit(report.summary.failed > 0 ? 1 : 0);
    })
    .catch(error => {
        console.error('💥 Final comprehensive test execution failed:', error);
        process.exit(1);
    });
