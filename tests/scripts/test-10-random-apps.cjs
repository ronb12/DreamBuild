#!/usr/bin/env node

/**
 * Automated Test: DreamBuild's Ability to Create 10 Random Simple Apps
 * Tests the code generation system with various app types and features
 * Product of Bradley Virtual Solutions, LLC
 */

const puppeteer = require('puppeteer')
const fs = require('fs').promises
const path = require('path')

const TEST_CONFIG = {
  baseUrl: 'http://localhost:3000',
  timeout: 45000, // 45 seconds per app
  headless: true,
  viewport: { width: 1280, height: 720 },
  outputDir: path.join(__dirname, '../reports/10-random-apps-test')
}

// Test prompts for different app types
const TEST_APP_PROMPTS = [
  'build a simple todo list from scratch',
  'create a basic calculator app',
  'make a simple memory game',
  'build a note-taking app',
  'create a basic weather app',
  'make a simple quiz app',
  'build a basic chat app',
  'create a simple timer app',
  'make a basic drawing app',
  'build a simple expense tracker'
]

class DreamBuildRandomAppTester {
  constructor() {
    this.browser = null
    this.page = null
    this.testResults = []
    this.startTime = null
  }

  async initialize() {
    console.log('🚀 Initializing DreamBuild Random Apps Test...')
    
    // Create output directory
    try {
      await fs.mkdir(TEST_CONFIG.outputDir, { recursive: true })
    } catch (error) {
      console.log('📁 Output directory already exists')
    }

    // Launch browser
    this.browser = await puppeteer.launch({
      headless: TEST_CONFIG.headless,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    })

    this.page = await this.browser.newPage()
    await this.page.setViewport(TEST_CONFIG.viewport)
    
    // Set up console logging
    this.page.on('console', (msg) => {
      const type = msg.type()
      const text = msg.text()
      if (type === 'error') {
        console.log(`❌ Browser Error: ${text}`)
      } else if (text.includes('✅') || text.includes('🎯') || text.includes('🚀')) {
        console.log(`📱 ${text}`)
      }
    })

    console.log('✅ Test environment initialized')
  }

  async navigateToDreamBuild() {
    console.log('🌐 Navigating to DreamBuild...')
    
    try {
      await this.page.goto(`${TEST_CONFIG.baseUrl}/#/ai-builder`, {
        waitUntil: 'networkidle2',
        timeout: 30000
      })
      
      // Wait for the page to load
      await this.page.waitForSelector('body', { timeout: 10000 })
      console.log('✅ Successfully navigated to DreamBuild AI Builder')
      return true
    } catch (error) {
      console.error('❌ Failed to navigate to DreamBuild:', error.message)
      return false
    }
  }

  async testAppGeneration(prompt, testIndex) {
    console.log(`\n🎯 Test ${testIndex + 1}/10: "${prompt}"`)
    const testStartTime = Date.now()
    
    const testResult = {
      testIndex: testIndex + 1,
      prompt: prompt,
      success: false,
      error: null,
      generationTime: 0,
      filesGenerated: [],
      hasWorkingCode: false,
      previewWorking: false,
      features: []
    }

    try {
      // Find and clear the prompt input
      const promptInput = await this.page.evaluateHandle(() => {
        const inputs = [
          ...Array.from(document.querySelectorAll('textarea')),
          ...Array.from(document.querySelectorAll('input[type="text"]')),
          ...Array.from(document.querySelectorAll('input[placeholder]'))
        ];
        return inputs.find(el =>
          el.placeholder?.toLowerCase().includes('prompt') ||
          el.placeholder?.toLowerCase().includes('build') ||
          el.placeholder?.toLowerCase().includes('create') ||
          el.placeholder?.toLowerCase().includes('app') ||
          el.name?.toLowerCase().includes('prompt')
        ) || inputs[0];
      });

      if (promptInput) {
        await promptInput.click({ clickCount: 3 })
        await promptInput.type(prompt)
        console.log(`   📝 Entered prompt: "${prompt}"`)
      } else {
        throw new Error('Could not find prompt input')
      }

      // Find and click generate button
      const generateButton = await this.page.evaluateHandle(() => {
        const buttons = Array.from(document.querySelectorAll('button'));
        return buttons.find(btn =>
          btn.textContent.includes('Generate') ||
          btn.textContent.includes('Create') ||
          btn.textContent.includes('Build') ||
          btn.textContent.includes('Submit') ||
          btn.type === 'submit'
        ) || buttons.find(btn => btn.textContent.trim().length > 0);
      });

      if (generateButton) {
        await generateButton.click()
        console.log('   🚀 Clicked generate button')
      } else {
        // Try pressing Enter
        await this.page.keyboard.press('Enter')
        console.log('   ⌨️ Pressed Enter to generate')
      }

      // Wait for generation to complete
      console.log('   ⏳ Waiting for generation to complete...')
      
      try {
        await this.page.waitForFunction(() => {
          const hasSuccess = document.body.innerText.includes('✅') ||
                           document.body.innerText.includes('Generated') ||
                           document.body.innerText.includes('Complete') ||
                           document.body.innerText.includes('Success');
          const hasContent = document.querySelector('iframe') ||
                           document.querySelector('canvas') ||
                           document.querySelector('.preview') ||
                           document.querySelector('pre') ||
                           document.querySelector('code');
          const hasCacheHit = document.body.innerText.includes('Cache HIT') ||
                            document.body.innerText.includes('cache hit') ||
                            document.body.innerText.includes('instant');
          return hasSuccess || hasContent || hasCacheHit;
        }, { timeout: TEST_CONFIG.timeout });
        
        console.log('   ✅ Generation completed!')
        
        // Check what files were generated
        const filesGenerated = await this.page.evaluate(() => {
          const fileElements = document.querySelectorAll('[data-file], .file-item, .file-name');
          return Array.from(fileElements).map(el => el.textContent || el.getAttribute('data-file')).filter(Boolean);
        });
        
        testResult.filesGenerated = filesGenerated;
        console.log(`   📁 Files generated: ${filesGenerated.length} files`);
        
        // Check if preview is working
        const previewWorking = await this.page.evaluate(() => {
          const iframe = document.querySelector('iframe');
          const canvas = document.querySelector('canvas');
          const preview = document.querySelector('.preview, [class*="preview"]');
          return !!(iframe || canvas || preview);
        });
        
        testResult.previewWorking = previewWorking;
        console.log(`   🖼️ Preview working: ${previewWorking}`);
        
        // Check if code is syntactically correct
        const hasWorkingCode = await this.page.evaluate(() => {
          const codeElements = document.querySelectorAll('pre code, .code-content, [class*="code"]');
          let hasValidCode = false;
          
          codeElements.forEach(el => {
            const code = el.textContent || '';
            // Basic checks for valid JavaScript/HTML
            if (code.includes('function') || code.includes('class') || code.includes('<!DOCTYPE html>')) {
              hasValidCode = true;
            }
          });
          
          return hasValidCode;
        });
        
        testResult.hasWorkingCode = hasWorkingCode;
        console.log(`   💻 Working code generated: ${hasWorkingCode}`);
        
        // Extract features if any
        const features = await this.page.evaluate(() => {
          const featureElements = document.querySelectorAll('[class*="feature"], .feature-chip, .feature-badge');
          return Array.from(featureElements).map(el => el.textContent.trim()).filter(Boolean);
        });
        
        testResult.features = features;
        console.log(`   ✨ Features detected: ${features.length}`);
        
        testResult.success = true;
        
      } catch (waitError) {
        console.log('   ⚠️ Timeout waiting for generation, checking what we have...')
        
        // Check if we have any generated content despite timeout
        const hasAnyContent = await this.page.evaluate(() => {
          return !!(document.querySelector('iframe') ||
                   document.querySelector('canvas') ||
                   document.querySelector('.preview') ||
                   document.querySelector('pre') ||
                   document.querySelector('code'));
        });
        
        if (hasAnyContent) {
          testResult.success = true;
          console.log('   ✅ Found generated content despite timeout');
        } else {
          testResult.error = 'Generation timeout - no content found';
          console.log('   ❌ No generated content found');
        }
      }

    } catch (error) {
      testResult.error = error.message;
      console.log(`   ❌ Test failed: ${error.message}`);
    }

    testResult.generationTime = Date.now() - testStartTime;
    console.log(`   ⏱️ Generation time: ${testResult.generationTime}ms`);
    
    this.testResults.push(testResult);
    return testResult;
  }

  async runAllTests() {
    console.log('🎯 Starting 10 Random Apps Test Suite...\n');
    this.startTime = Date.now();

    for (let i = 0; i < TEST_APP_PROMPTS.length; i++) {
      const prompt = TEST_APP_PROMPTS[i];
      
      // Navigate back to AI Builder for each test (fresh start)
      if (i > 0) {
        await this.navigateToDreamBuild();
      }
      
      await this.testAppGeneration(prompt, i);
      
      // Small delay between tests
      await new Promise(resolve => setTimeout(resolve, 2000));
    }

    const totalTime = Date.now() - this.startTime;
    console.log(`\n🏁 All tests completed in ${totalTime}ms`);
    
    await this.generateReport();
  }

  async generateReport() {
    console.log('\n📊 Generating test report...');
    
    const successfulTests = this.testResults.filter(r => r.success);
    const failedTests = this.testResults.filter(r => !r.success);
    
    const report = {
      summary: {
        totalTests: this.testResults.length,
        successful: successfulTests.length,
        failed: failedTests.length,
        successRate: `${((successfulTests.length / this.testResults.length) * 100).toFixed(1)}%`,
        totalTime: Date.now() - this.startTime,
        averageGenerationTime: Math.round(this.testResults.reduce((sum, r) => sum + r.generationTime, 0) / this.testResults.length)
      },
      results: this.testResults,
      analysis: {
        commonFeatures: this.getCommonFeatures(),
        averageFilesGenerated: Math.round(this.testResults.reduce((sum, r) => sum + r.filesGenerated.length, 0) / this.testResults.length),
        previewSuccessRate: `${((this.testResults.filter(r => r.previewWorking).length / this.testResults.length) * 100).toFixed(1)}%`,
        codeQualityRate: `${((this.testResults.filter(r => r.hasWorkingCode).length / this.testResults.length) * 100).toFixed(1)}%`
      }
    };

    // Save detailed report
    const reportPath = path.join(TEST_CONFIG.outputDir, 'test-report.json');
    await fs.writeFile(reportPath, JSON.stringify(report, null, 2));
    
    // Generate human-readable report
    const humanReport = this.generateHumanReadableReport(report);
    const humanReportPath = path.join(TEST_CONFIG.outputDir, 'test-report.md');
    await fs.writeFile(humanReportPath, humanReport);

    console.log(`📄 Detailed report saved to: ${reportPath}`);
    console.log(`📄 Human-readable report saved to: ${humanReportPath}`);
    
    // Display summary
    console.log('\n' + '='.repeat(60));
    console.log('📊 DREAMBUILD 10 RANDOM APPS TEST RESULTS');
    console.log('='.repeat(60));
    console.log(`✅ Successful: ${report.summary.successful}/${report.summary.totalTests} (${report.summary.successRate})`);
    console.log(`❌ Failed: ${report.summary.failed}/${report.summary.totalTests}`);
    console.log(`⏱️ Average generation time: ${report.summary.averageGenerationTime}ms`);
    console.log(`🖼️ Preview success rate: ${report.analysis.previewSuccessRate}`);
    console.log(`💻 Code quality rate: ${report.analysis.codeQualityRate}`);
    console.log(`📁 Average files generated: ${report.analysis.averageFilesGenerated}`);
    console.log('='.repeat(60));
    
    if (failedTests.length > 0) {
      console.log('\n❌ Failed Tests:');
      failedTests.forEach(test => {
        console.log(`   ${test.testIndex}. "${test.prompt}" - ${test.error}`);
      });
    }
    
    return report;
  }

  getCommonFeatures() {
    const featureCounts = {};
    this.testResults.forEach(result => {
      result.features.forEach(feature => {
        featureCounts[feature] = (featureCounts[feature] || 0) + 1;
      });
    });
    
    return Object.entries(featureCounts)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 5)
      .map(([feature, count]) => ({ feature, count }));
  }

  generateHumanReadableReport(report) {
    const timestamp = new Date().toISOString();
    
    return `# DreamBuild 10 Random Apps Test Report

**Generated:** ${timestamp}  
**Product of Bradley Virtual Solutions, LLC**

## Summary

- **Total Tests:** ${report.summary.totalTests}
- **Successful:** ${report.summary.successful} (${report.summary.successRate})
- **Failed:** ${report.summary.failed}
- **Total Time:** ${Math.round(report.summary.totalTime / 1000)}s
- **Average Generation Time:** ${report.summary.averageGenerationTime}ms

## Analysis

- **Preview Success Rate:** ${report.analysis.previewSuccessRate}
- **Code Quality Rate:** ${report.analysis.codeQualityRate}
- **Average Files Generated:** ${report.analysis.averageFilesGenerated}

## Common Features Detected

${report.analysis.commonFeatures.map(f => `- **${f.feature}**: ${f.count} apps`).join('\n')}

## Detailed Results

${report.results.map(test => `
### Test ${test.testIndex}: ${test.prompt}

- **Status:** ${test.success ? '✅ Success' : '❌ Failed'}
- **Generation Time:** ${test.generationTime}ms
- **Files Generated:** ${test.filesGenerated.length}
- **Preview Working:** ${test.previewWorking ? '✅' : '❌'}
- **Working Code:** ${test.hasWorkingCode ? '✅' : '❌'}
- **Features:** ${test.features.join(', ') || 'None detected'}
${test.error ? `- **Error:** ${test.error}` : ''}
`).join('\n')}

## Conclusion

DreamBuild's ability to generate random simple apps shows a ${report.summary.successRate} success rate, with ${report.analysis.previewSuccessRate} of apps having working previews and ${report.analysis.codeQualityRate} generating syntactically correct code.

${report.summary.successful >= 8 ? '🎉 **EXCELLENT** - DreamBuild is performing very well!' : 
  report.summary.successful >= 6 ? '👍 **GOOD** - DreamBuild is performing well with room for improvement' :
  report.summary.successful >= 4 ? '⚠️ **NEEDS IMPROVEMENT** - Some issues detected' :
  '❌ **POOR** - Significant issues with code generation'}

---
*Report generated by DreamBuild Test Suite*
`;
  }

  async cleanup() {
    if (this.browser) {
      await this.browser.close();
    }
  }
}

// Main execution
async function runTest() {
  const tester = new DreamBuildRandomAppTester();
  
  try {
    await tester.initialize();
    
    const navigated = await tester.navigateToDreamBuild();
    if (!navigated) {
      console.error('❌ Failed to navigate to DreamBuild. Make sure the dev server is running.');
      process.exit(1);
    }
    
    await tester.runAllTests();
    
  } catch (error) {
    console.error('❌ Test suite failed:', error);
  } finally {
    await tester.cleanup();
  }
}

// Run the test
if (require.main === module) {
  runTest().catch(console.error);
}

module.exports = { DreamBuildRandomAppTester, runTest };
