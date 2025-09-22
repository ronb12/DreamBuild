// DreamBuild React App Loading Test with Puppeteer
// Tests for proper React app mounting and component rendering

const puppeteer = require('puppeteer');
const fs = require('fs');

console.log('🤖 Starting DreamBuild React App Test...');

async function testDreamBuildReact() {
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
        
        // Test 1: Wait for React app to load
        console.log('\n📋 Test 1: React App Loading');
        try {
            // Wait for React root to be mounted
            await page.waitForFunction(() => {
                return document.querySelector('#root') && 
                       document.querySelector('#root').children.length > 0;
            }, { timeout: 15000 });
            
            results.push({ test: 'React App Mount', status: 'PASS', message: 'React app mounted successfully' });
            console.log('✅ React app mounted successfully');
        } catch (error) {
            results.push({ test: 'React App Mount', status: 'FAIL', message: `React app failed to mount: ${error.message}` });
            console.log('❌ React app failed to mount:', error.message);
        }
        
        // Test 2: Wait for main content to load
        console.log('\n📋 Test 2: Main Content Loading');
        try {
            // Wait for main content elements
            await page.waitForFunction(() => {
                const root = document.querySelector('#root');
                if (!root) return false;
                
                // Look for common React app elements
                const hasTextarea = root.querySelector('textarea') !== null;
                const hasInput = root.querySelector('input[type="text"]') !== null;
                const hasContentEditable = root.querySelector('[contenteditable="true"]') !== null;
                const hasMainContent = root.textContent.length > 100; // More than just basic HTML
                
                return hasTextarea || hasInput || hasContentEditable || hasMainContent;
            }, { timeout: 10000 });
            
            results.push({ test: 'Main Content', status: 'PASS', message: 'Main content loaded' });
            console.log('✅ Main content loaded');
        } catch (error) {
            results.push({ test: 'Main Content', status: 'FAIL', message: `Main content failed to load: ${error.message}` });
            console.log('❌ Main content failed to load:', error.message);
        }
        
        // Test 3: Find AI prompt input with multiple strategies
        console.log('\n📋 Test 3: AI Prompt Input Detection');
        let promptElement = null;
        let promptStrategy = '';
        
        // Strategy 1: Wait for textarea
        try {
            await page.waitForSelector('textarea', { timeout: 5000 });
            promptElement = await page.$('textarea');
            promptStrategy = 'textarea';
            console.log('✅ Found textarea');
        } catch (e) {
            console.log('⚠️ No textarea found, trying other strategies...');
        }
        
        // Strategy 2: Look for input fields
        if (!promptElement) {
            try {
                await page.waitForSelector('input[type="text"], input[placeholder*="prompt"], input[placeholder*="describe"]', { timeout: 3000 });
                promptElement = await page.$('input[type="text"], input[placeholder*="prompt"], input[placeholder*="describe"]');
                promptStrategy = 'input';
                console.log('✅ Found input field');
            } catch (e) {
                console.log('⚠️ No input field found, trying other strategies...');
            }
        }
        
        // Strategy 3: Look for contenteditable
        if (!promptElement) {
            try {
                await page.waitForSelector('[contenteditable="true"]', { timeout: 3000 });
                promptElement = await page.$('[contenteditable="true"]');
                promptStrategy = 'contenteditable';
                console.log('✅ Found contenteditable element');
            } catch (e) {
                console.log('⚠️ No contenteditable element found, trying other strategies...');
            }
        }
        
        // Strategy 4: Look for any element that might be a prompt
        if (!promptElement) {
            try {
                const selectors = [
                    '[class*="prompt"]',
                    '[id*="prompt"]',
                    '[class*="input"]',
                    '[class*="textarea"]',
                    '[data-testid*="prompt"]',
                    '[data-testid*="input"]',
                    'div[role="textbox"]'
                ];
                
                for (const selector of selectors) {
                    try {
                        await page.waitForSelector(selector, { timeout: 2000 });
                        promptElement = await page.$(selector);
                        if (promptElement) {
                            promptStrategy = `selector: ${selector}`;
                            console.log(`✅ Found element with ${selector}`);
                            break;
                        }
                    } catch (e) {
                        // Continue to next selector
                    }
                }
            } catch (e) {
                console.log('⚠️ No prompt element found with any selector');
            }
        }
        
        if (promptElement) {
            results.push({ test: 'AI Prompt Input', status: 'PASS', message: `Found using ${promptStrategy}` });
            console.log(`✅ AI prompt input found using ${promptStrategy}`);
        } else {
            results.push({ test: 'AI Prompt Input', status: 'FAIL', message: 'No AI prompt input found' });
            console.log('❌ No AI prompt input found');
        }
        
        // Test 4: Test prompt interaction if element found
        if (promptElement) {
            console.log('\n📋 Test 4: Prompt Interaction Test');
            try {
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
                    '[data-testid*="generate"]'
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
                    await page.waitForTimeout(5000);
                    
                    // Check for generated content
                    const contentSelectors = [
                        '[class*="file"]',
                        '[class*="preview"]',
                        'iframe',
                        '[data-testid*="file"]',
                        '[class*="generated"]',
                        '[class*="output"]'
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
            } catch (error) {
                results.push({ test: 'Prompt Interaction', status: 'FAIL', message: `Error: ${error.message}` });
                console.log('❌ Error in prompt interaction:', error.message);
            }
        }
        
        // Test 5: Check for Template-First system indicators
        console.log('\n📋 Test 5: Template-First System Detection');
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
                    log.includes('Template-Based')
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
        
        // Test 6: Take final screenshot
        console.log('\n📋 Test 6: Final Screenshot');
        try {
            await page.screenshot({ path: 'dreambuild-final.png', fullPage: true });
            results.push({ test: 'Final Screenshot', status: 'PASS', message: 'Screenshot saved as dreambuild-final.png' });
            console.log('📸 Final screenshot saved as dreambuild-final.png');
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
    console.log('\n📊 DREAMBUILD REACT APP TEST RESULTS');
    console.log('====================================');
    
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
        console.log('\n🎉 ALL TESTS PASSED! DreamBuild React app is working correctly.');
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
    
    fs.writeFileSync('dreambuild-react-test-report.json', JSON.stringify(report, null, 2));
    console.log('\n📄 Detailed report saved to: dreambuild-react-test-report.json');
    
    return report;
}

// Run the test
testDreamBuildReact()
    .then(report => {
        console.log('\n🏁 React app test completed!');
        process.exit(report.summary.failed > 0 ? 1 : 0);
    })
    .catch(error => {
        console.error('💥 React app test execution failed:', error);
        process.exit(1);
    });
