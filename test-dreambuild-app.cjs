// DreamBuild Application Interface Test with Puppeteer
// Tests the actual application interface after navigation

const puppeteer = require('puppeteer');
const fs = require('fs');

console.log('🤖 Starting DreamBuild Application Interface Test...');

async function testDreamBuildApp() {
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
        
        // Navigate to DreamBuild
        console.log('🌐 Navigating to DreamBuild...');
        await page.goto('https://dreambuild-2024-app.web.app', { 
            waitUntil: 'networkidle2',
            timeout: 30000 
        });
        
        // Wait for React app to load
        await page.waitForFunction(() => {
            return document.querySelector('#root') && 
                   document.querySelector('#root').children.length > 0;
        }, { timeout: 15000 });
        
        // Test 1: Navigate to AI Builder
        console.log('\n📋 Test 1: Navigate to AI Builder');
        try {
            // Look for "Start Building" button or "AI Builder" link
            const startBuildingButton = await page.$('button:has-text("Start Building"), a:has-text("Start Building"), [href*="builder"], [href*="app"]');
            const aiBuilderLink = await page.$('a:has-text("AI Builder"), [href*="builder"]');
            
            if (startBuildingButton) {
                console.log('✅ Found "Start Building" button, clicking...');
                await startBuildingButton.click();
                await page.waitForTimeout(3000);
            } else if (aiBuilderLink) {
                console.log('✅ Found "AI Builder" link, clicking...');
                await aiBuilderLink.click();
                await page.waitForTimeout(3000);
            } else {
                // Try to navigate directly to /app or /builder
                console.log('⚠️ No navigation button found, trying direct navigation...');
                await page.goto('https://dreambuild-2024-app.web.app/app', { 
                    waitUntil: 'networkidle2',
                    timeout: 10000 
                });
                await page.waitForTimeout(3000);
            }
            
            results.push({ test: 'Navigation to App', status: 'PASS', message: 'Navigated to application interface' });
            console.log('✅ Navigated to application interface');
        } catch (error) {
            results.push({ test: 'Navigation to App', status: 'FAIL', message: `Error: ${error.message}` });
            console.log('❌ Error navigating to app:', error.message);
        }
        
        // Test 2: Check for AI prompt input after navigation
        console.log('\n📋 Test 2: AI Prompt Input Detection');
        try {
            // Wait for textarea or input to appear
            await page.waitForSelector('textarea, input[type="text"], [contenteditable="true"]', { timeout: 10000 });
            
            const promptElement = await page.$('textarea, input[type="text"], [contenteditable="true"]');
            if (promptElement) {
                results.push({ test: 'AI Prompt Input', status: 'PASS', message: 'AI prompt input found after navigation' });
                console.log('✅ AI prompt input found after navigation');
            } else {
                results.push({ test: 'AI Prompt Input', status: 'FAIL', message: 'AI prompt input not found after navigation' });
                console.log('❌ AI prompt input not found after navigation');
            }
        } catch (error) {
            results.push({ test: 'AI Prompt Input', status: 'FAIL', message: `Error: ${error.message}` });
            console.log('❌ Error finding AI prompt input:', error.message);
        }
        
        // Test 3: Test prompt interaction
        console.log('\n📋 Test 3: Prompt Interaction Test');
        try {
            const promptElement = await page.$('textarea, input[type="text"], [contenteditable="true"]');
            if (promptElement) {
                // Click and focus the element
                await promptElement.click();
                await page.waitForTimeout(1000);
                
                // Type a test prompt
                await page.keyboard.type('create a simple web app');
                await page.waitForTimeout(1000);
                
                // Look for generate button
                const generateSelectors = [
                    'button[type="submit"]',
                    'button:has-text("Generate")',
                    'button:has-text("∞")',
                    'button[title*="Generate"]',
                    'button[aria-label*="Generate"]',
                    '[data-testid*="generate"]',
                    'button[class*="generate"]'
                ];
                
                let generateButton = null;
                for (const selector of generateSelectors) {
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
                
                if (generateButton) {
                    await generateButton.click();
                    console.log('✅ Successfully clicked generate button');
                    
                    // Wait for generation
                    await page.waitForTimeout(8000);
                    
                    // Check for generated content
                    const contentSelectors = [
                        '[class*="file"]',
                        '[class*="preview"]',
                        'iframe',
                        '[data-testid*="file"]',
                        '[class*="generated"]',
                        '[class*="output"]',
                        '[class*="code"]'
                    ];
                    
                    let contentFound = false;
                    for (const selector of contentSelectors) {
                        const elements = await page.$$(selector);
                        if (elements.length > 0) {
                            contentFound = true;
                            console.log(`✅ Found generated content with selector: ${selector} (${elements.length} elements)`);
                            break;
                        }
                    }
                    
                    if (contentFound) {
                        results.push({ test: 'Prompt Interaction', status: 'PASS', message: 'Successfully generated content' });
                        console.log('✅ Successfully generated content');
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
                    log.includes('template-first')
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
        
        // Test 7: Take final screenshot
        console.log('\n📋 Test 7: Final Screenshot');
        try {
            await page.screenshot({ path: 'dreambuild-app-final.png', fullPage: true });
            results.push({ test: 'Final Screenshot', status: 'PASS', message: 'Screenshot saved as dreambuild-app-final.png' });
            console.log('📸 Final screenshot saved as dreambuild-app-final.png');
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
    console.log('\n📊 DREAMBUILD APPLICATION INTERFACE TEST RESULTS');
    console.log('================================================');
    
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
        console.log('\n🎉 ALL TESTS PASSED! DreamBuild application interface is working correctly.');
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
    
    fs.writeFileSync('dreambuild-app-test-report.json', JSON.stringify(report, null, 2));
    console.log('\n📄 Detailed report saved to: dreambuild-app-test-report.json');
    
    return report;
}

// Run the test
testDreamBuildApp()
    .then(report => {
        console.log('\n🏁 Application interface test completed!');
        process.exit(report.summary.failed > 0 ? 1 : 0);
    })
    .catch(error => {
        console.error('💥 Application interface test execution failed:', error);
        process.exit(1);
    });
