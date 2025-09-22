// DreamBuild Interface Detection Test with Puppeteer
// Tests for the main application interface and routing

const puppeteer = require('puppeteer');
const fs = require('fs');

console.log('🤖 Starting DreamBuild Interface Detection Test...');

async function testDreamBuildInterface() {
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
        
        // Test 1: Check if we're on the main page
        console.log('\n📋 Test 1: Main Page Detection');
        try {
            const currentUrl = page.url();
            console.log(`Current URL: ${currentUrl}`);
            
            if (currentUrl.includes('dreambuild-2024-app.web.app')) {
                results.push({ test: 'Main Page', status: 'PASS', message: `On main page: ${currentUrl}` });
                console.log('✅ On main page');
            } else {
                results.push({ test: 'Main Page', status: 'WARN', message: `Unexpected URL: ${currentUrl}` });
                console.log('⚠️ Unexpected URL');
            }
        } catch (error) {
            results.push({ test: 'Main Page', status: 'FAIL', message: `Error: ${error.message}` });
            console.log('❌ Error checking URL:', error.message);
        }
        
        // Test 2: Check for navigation elements
        console.log('\n📋 Test 2: Navigation Detection');
        try {
            const navElements = await page.$$eval('nav, [role="navigation"], [class*="nav"], [class*="menu"]', elements =>
                elements.map(el => ({
                    tagName: el.tagName,
                    text: el.textContent?.trim().substring(0, 100) || 'N/A',
                    className: el.className || 'N/A'
                }))
            );
            
            console.log('🔍 Found navigation elements:', navElements);
            
            if (navElements.length > 0) {
                results.push({ test: 'Navigation', status: 'PASS', message: `Found ${navElements.length} navigation elements` });
                console.log(`✅ Found ${navElements.length} navigation elements`);
            } else {
                results.push({ test: 'Navigation', status: 'WARN', message: 'No navigation elements found' });
                console.log('⚠️ No navigation elements found');
            }
        } catch (error) {
            results.push({ test: 'Navigation', status: 'FAIL', message: `Error: ${error.message}` });
            console.log('❌ Error finding navigation:', error.message);
        }
        
        // Test 3: Check for main content area
        console.log('\n📋 Test 3: Main Content Area Detection');
        try {
            const mainElements = await page.$$eval('main, [role="main"], [class*="main"], [class*="content"], [class*="app"]', elements =>
                elements.map(el => ({
                    tagName: el.tagName,
                    text: el.textContent?.trim().substring(0, 200) || 'N/A',
                    className: el.className || 'N/A'
                }))
            );
            
            console.log('🔍 Found main elements:', mainElements);
            
            if (mainElements.length > 0) {
                results.push({ test: 'Main Content', status: 'PASS', message: `Found ${mainElements.length} main content elements` });
                console.log(`✅ Found ${mainElements.length} main content elements`);
            } else {
                results.push({ test: 'Main Content', status: 'WARN', message: 'No main content elements found' });
                console.log('⚠️ No main content elements found');
            }
        } catch (error) {
            results.push({ test: 'Main Content', status: 'FAIL', message: `Error: ${error.message}` });
            console.log('❌ Error finding main content:', error.message);
        }
        
        // Test 4: Check for any input elements (broader search)
        console.log('\n📋 Test 4: Input Elements Detection');
        try {
            const allInputs = await page.$$eval('input, textarea, [contenteditable], [role="textbox"]', elements =>
                elements.map(el => ({
                    tagName: el.tagName,
                    type: el.type || 'N/A',
                    placeholder: el.placeholder || 'N/A',
                    className: el.className || 'N/A',
                    id: el.id || 'N/A',
                    text: el.textContent?.trim().substring(0, 50) || 'N/A'
                }))
            );
            
            console.log('🔍 Found all input elements:', allInputs);
            
            if (allInputs.length > 0) {
                results.push({ test: 'Input Elements', status: 'PASS', message: `Found ${allInputs.length} input elements` });
                console.log(`✅ Found ${allInputs.length} input elements`);
            } else {
                results.push({ test: 'Input Elements', status: 'FAIL', message: 'No input elements found' });
                console.log('❌ No input elements found');
            }
        } catch (error) {
            results.push({ test: 'Input Elements', status: 'FAIL', message: `Error: ${error.message}` });
            console.log('❌ Error finding input elements:', error.message);
        }
        
        // Test 5: Check for buttons
        console.log('\n📋 Test 5: Button Detection');
        try {
            const allButtons = await page.$$eval('button, [role="button"], input[type="button"], input[type="submit"]', elements =>
                elements.map(el => ({
                    tagName: el.tagName,
                    text: el.textContent?.trim() || 'N/A',
                    className: el.className || 'N/A',
                    id: el.id || 'N/A',
                    type: el.type || 'N/A'
                }))
            );
            
            console.log('🔍 Found all buttons:', allButtons);
            
            if (allButtons.length > 0) {
                results.push({ test: 'Buttons', status: 'PASS', message: `Found ${allButtons.length} buttons` });
                console.log(`✅ Found ${allButtons.length} buttons`);
            } else {
                results.push({ test: 'Buttons', status: 'FAIL', message: 'No buttons found' });
                console.log('❌ No buttons found');
            }
        } catch (error) {
            results.push({ test: 'Buttons', status: 'FAIL', message: `Error: ${error.message}` });
            console.log('❌ Error finding buttons:', error.message);
        }
        
        // Test 6: Check page content for specific text
        console.log('\n📋 Test 6: Page Content Analysis');
        try {
            const pageText = await page.evaluate(() => document.body.textContent);
            console.log('🔍 Page text content (first 500 chars):', pageText.substring(0, 500));
            
            const keywords = ['DreamBuild', 'AI', 'Generate', 'Create', 'Build', 'App', 'Application'];
            const foundKeywords = keywords.filter(keyword => 
                pageText.toLowerCase().includes(keyword.toLowerCase())
            );
            
            if (foundKeywords.length > 0) {
                results.push({ test: 'Page Content', status: 'PASS', message: `Found keywords: ${foundKeywords.join(', ')}` });
                console.log(`✅ Found keywords: ${foundKeywords.join(', ')}`);
            } else {
                results.push({ test: 'Page Content', status: 'WARN', message: 'No expected keywords found' });
                console.log('⚠️ No expected keywords found');
            }
        } catch (error) {
            results.push({ test: 'Page Content', status: 'FAIL', message: `Error: ${error.message}` });
            console.log('❌ Error analyzing page content:', error.message);
        }
        
        // Test 7: Check for React components
        console.log('\n📋 Test 7: React Components Detection');
        try {
            const reactElements = await page.$$eval('[data-reactroot], [data-reactid], [class*="react"]', elements =>
                elements.map(el => ({
                    tagName: el.tagName,
                    className: el.className || 'N/A',
                    id: el.id || 'N/A'
                }))
            );
            
            console.log('🔍 Found React elements:', reactElements);
            
            if (reactElements.length > 0) {
                results.push({ test: 'React Components', status: 'PASS', message: `Found ${reactElements.length} React elements` });
                console.log(`✅ Found ${reactElements.length} React elements`);
            } else {
                results.push({ test: 'React Components', status: 'WARN', message: 'No React elements found' });
                console.log('⚠️ No React elements found');
            }
        } catch (error) {
            results.push({ test: 'React Components', status: 'FAIL', message: `Error: ${error.message}` });
            console.log('❌ Error finding React elements:', error.message);
        }
        
        // Test 8: Try to navigate to different routes
        console.log('\n📋 Test 8: Route Navigation Test');
        try {
            const routes = ['/', '/home', '/app', '/generate', '/create'];
            let routeFound = false;
            
            for (const route of routes) {
                try {
                    await page.goto(`https://dreambuild-2024-app.web.app${route}`, { 
                        waitUntil: 'networkidle2',
                        timeout: 10000 
                    });
                    
                    // Check if this route has more content
                    const content = await page.evaluate(() => document.body.textContent);
                    if (content.length > 200) { // More than basic HTML
                        results.push({ test: 'Route Navigation', status: 'PASS', message: `Found content on route: ${route}` });
                        console.log(`✅ Found content on route: ${route}`);
                        routeFound = true;
                        break;
                    }
                } catch (e) {
                    // Continue to next route
                }
            }
            
            if (!routeFound) {
                results.push({ test: 'Route Navigation', status: 'WARN', message: 'No content found on any route' });
                console.log('⚠️ No content found on any route');
            }
        } catch (error) {
            results.push({ test: 'Route Navigation', status: 'FAIL', message: `Error: ${error.message}` });
            console.log('❌ Error testing routes:', error.message);
        }
        
        // Test 9: Take final screenshot
        console.log('\n📋 Test 9: Final Screenshot');
        try {
            await page.screenshot({ path: 'dreambuild-interface-final.png', fullPage: true });
            results.push({ test: 'Final Screenshot', status: 'PASS', message: 'Screenshot saved as dreambuild-interface-final.png' });
            console.log('📸 Final screenshot saved as dreambuild-interface-final.png');
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
    console.log('\n📊 DREAMBUILD INTERFACE DETECTION TEST RESULTS');
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
        console.log('\n🎉 ALL TESTS PASSED! DreamBuild interface is working correctly.');
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
    
    fs.writeFileSync('dreambuild-interface-test-report.json', JSON.stringify(report, null, 2));
    console.log('\n📄 Detailed report saved to: dreambuild-interface-test-report.json');
    
    return report;
}

// Run the test
testDreamBuildInterface()
    .then(report => {
        console.log('\n🏁 Interface detection test completed!');
        process.exit(report.summary.failed > 0 ? 1 : 0);
    })
    .catch(error => {
        console.error('💥 Interface detection test execution failed:', error);
        process.exit(1);
    });
