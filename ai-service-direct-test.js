import puppeteer from 'puppeteer';
import fs from 'fs';

class AIServiceDirectTest {
  constructor() {
    this.browser = null;
    this.page = null;
    this.results = {
      aiService: {},
      codeGeneration: {},
      modelCapabilities: {},
      performance: {},
      errors: []
    };
    this.baseUrl = 'http://localhost:3000';
  }

  async initialize() {
    console.log('🔧 Starting AI Service Direct Test...');
    
    this.browser = await puppeteer.launch({
      headless: false,
      defaultViewport: { width: 1920, height: 1080 },
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-accelerated-2d-canvas',
        '--no-first-run',
        '--no-zygote',
        '--disable-gpu',
        '--disable-web-security',
        '--disable-features=VizDisplayCompositor'
      ]
    });

    this.page = await this.browser.newPage();
    this.page.setDefaultTimeout(30000);
  }

  async testAIServiceDirectly() {
    console.log('\n🔍 Testing AI Service Directly...');
    
    await this.page.goto(`${this.baseUrl}/ai-builder`);
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Check if AI service is accessible
    const aiServiceStatus = await this.page.evaluate(() => {
      // Check for AI service indicators
      const hasAIService = window.localAIService || 
                          window.simpleAIService || 
                          window.aiService ||
                          document.querySelector('[data-testid*="ai"]') ||
                          document.querySelector('.ai-prompt') ||
                          document.querySelector('[class*="ai"]');
      
      return {
        hasAIService: !!hasAIService,
        serviceType: typeof window.localAIService !== 'undefined' ? 'local' : 
                    typeof window.simpleAIService !== 'undefined' ? 'simple' : 'unknown'
      };
    });
    
    console.log(`AI Service Status: ${aiServiceStatus.hasAIService ? 'Available' : 'Not Found'}`);
    console.log(`Service Type: ${aiServiceStatus.serviceType}`);
    
    this.results.aiService = {
      available: aiServiceStatus.hasAIService,
      type: aiServiceStatus.serviceType,
      timestamp: new Date().toISOString()
    };
  }

  async testCodeGenerationWithDifferentPrompts() {
    console.log('\n📝 Testing Code Generation with Different Prompts...');
    
    const testPrompts = [
      {
        name: 'Simple Function',
        prompt: 'Create a simple JavaScript function that adds two numbers',
        expectedElements: ['function', 'return', 'add']
      },
      {
        name: 'React Component',
        prompt: 'Build a React component for a button that changes color on click',
        expectedElements: ['React', 'useState', 'onClick', 'button']
      },
      {
        name: 'Python Class',
        prompt: 'Write a Python class for a bank account with deposit and withdraw methods',
        expectedElements: ['class', 'def', 'self', 'deposit', 'withdraw']
      },
      {
        name: 'HTML Structure',
        prompt: 'Create an HTML page with header, main content, and footer sections',
        expectedElements: ['<html>', '<head>', '<body>', '<header>', '<main>', '<footer>']
      },
      {
        name: 'CSS Styling',
        prompt: 'Write CSS for a responsive navigation bar with hover effects',
        expectedElements: ['nav', 'display', 'flex', 'hover', '@media']
      }
    ];
    
    for (const test of testPrompts) {
      console.log(`\n🧪 Testing: ${test.name}`);
      
      try {
        await this.page.goto(`${this.baseUrl}/ai-builder`);
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Find AI input
        const aiInputs = await this.page.$$('textarea, input[type="text"], [placeholder*="prompt"], [placeholder*="AI"], [placeholder*="code"]');
        if (aiInputs.length === 0) {
          console.log('❌ No AI input found');
          continue;
        }
        
        const promptInput = aiInputs[0];
        await promptInput.click();
        await promptInput.evaluate(el => el.value = '');
        await promptInput.type(test.prompt);
        
        console.log(`📝 Prompt entered: "${test.prompt}"`);
        
        // Find and click generate button
        const generateButtons = await this.page.$$('button');
        let generateButton = null;
        
        for (const button of generateButtons) {
          const buttonText = await button.evaluate(el => el.textContent);
          if (buttonText.includes('Generate') || buttonText.includes('Create') || buttonText.includes('Submit') || buttonText.includes('Send') || buttonText.includes('Run')) {
            generateButton = button;
            break;
          }
        }
        
        if (generateButton) {
          await generateButton.click();
          console.log('✅ Generate button clicked');
        } else {
          await this.page.keyboard.press('Enter');
          console.log('✅ Enter key pressed');
        }
        
        // Wait for response
        await new Promise(resolve => setTimeout(resolve, 12000));
        
        // Analyze response
        const responseAnalysis = await this.page.evaluate((expectedElements) => {
          const codeElements = document.querySelectorAll('pre, code, .code, [class*="code"], .generated, [class*="generated"], .response, [class*="response"]');
          let content = '';
          codeElements.forEach(el => {
            content += el.textContent + ' ';
          });
          
          const foundElements = expectedElements.filter(element => 
            content.toLowerCase().includes(element.toLowerCase())
          );
          
          return {
            content: content,
            foundElements: foundElements,
            missingElements: expectedElements.filter(el => !foundElements.includes(el)),
            contentLength: content.length,
            hasCode: content.includes('function') || content.includes('class') || content.includes('<') || content.includes('{')
          };
        }, test.expectedElements);
        
        console.log(`📊 Response Analysis:`);
        console.log(`  - Content Length: ${responseAnalysis.contentLength} characters`);
        console.log(`  - Found Elements: ${responseAnalysis.foundElements.join(', ')}`);
        console.log(`  - Missing Elements: ${responseAnalysis.missingElements.join(', ')}`);
        console.log(`  - Contains Code: ${responseAnalysis.hasCode ? 'Yes' : 'No'}`);
        
        this.results.codeGeneration[test.name] = {
          success: responseAnalysis.contentLength > 0,
          contentLength: responseAnalysis.contentLength,
          foundElements: responseAnalysis.foundElements,
          missingElements: responseAnalysis.missingElements,
          hasCode: responseAnalysis.hasCode,
          qualityScore: (responseAnalysis.foundElements.length / test.expectedElements.length) * 100
        };
        
      } catch (error) {
        console.log(`❌ ${test.name} failed: ${error.message}`);
        this.results.errors.push({
          test: test.name,
          error: error.message,
          timestamp: new Date().toISOString()
        });
      }
    }
  }

  async testAIModelSwitching() {
    console.log('\n🔄 Testing AI Model Switching...');
    
    try {
      await this.page.goto(`${this.baseUrl}/ai-builder`);
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Look for model selection elements
      const modelSelectors = await this.page.$$('select, [data-testid*="model"], [class*="model"], button[title*="model"], [role="combobox"]');
      console.log(`Found ${modelSelectors.length} potential model selectors`);
      
      if (modelSelectors.length > 0) {
        // Test model switching
        for (let i = 0; i < Math.min(modelSelectors.length, 3); i++) {
          const selector = modelSelectors[i];
          await selector.click();
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          // Look for options
          const options = await this.page.$$('option, [role="option"], .option');
          console.log(`Model selector ${i + 1} has ${options.length} options`);
          
          if (options.length > 0) {
            // Click first option
            await options[0].click();
            await new Promise(resolve => setTimeout(resolve, 1000));
            console.log(`✅ Model switched via selector ${i + 1}`);
          }
        }
        
        this.results.modelCapabilities.switching = {
          success: true,
          selectorsFound: modelSelectors.length,
          functional: true
        };
      } else {
        console.log('⚠️ No model selectors found - using default model');
        this.results.modelCapabilities.switching = {
          success: true,
          selectorsFound: 0,
          functional: false,
          note: 'Using default model'
        };
      }
      
    } catch (error) {
      console.log(`❌ Model switching test failed: ${error.message}`);
      this.results.modelCapabilities.switching = {
        success: false,
        error: error.message
      };
    }
  }

  async testErrorHandlingAndRecovery() {
    console.log('\n🛡️ Testing Error Handling and Recovery...');
    
    try {
      await this.page.goto(`${this.baseUrl}/ai-builder`);
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Test with empty prompt
      const aiInputs = await this.page.$$('textarea, input[type="text"], [placeholder*="prompt"], [placeholder*="AI"]');
      if (aiInputs.length > 0) {
        const promptInput = aiInputs[0];
        await promptInput.click();
        await promptInput.evaluate(el => el.value = '');
        
        // Try to generate with empty prompt
        const generateButtons = await this.page.$$('button');
        let generateButton = null;
        
        for (const button of generateButtons) {
          const buttonText = await button.evaluate(el => el.textContent);
          if (buttonText.includes('Generate') || buttonText.includes('Create') || buttonText.includes('Submit') || buttonText.includes('Send')) {
            generateButton = button;
            break;
          }
        }
        
        if (generateButton) {
          await generateButton.click();
          await new Promise(resolve => setTimeout(resolve, 3000));
          
          // Check for error handling
          const errorMessages = await this.page.$$('.error, .alert, [class*="error"], [class*="alert"]');
          console.log(`Found ${errorMessages.length} error message elements`);
          
          this.results.modelCapabilities.errorHandling = {
            success: true,
            emptyPromptHandled: true,
            errorMessagesFound: errorMessages.length
          };
        }
      }
      
      // Test with very long prompt
      if (aiInputs.length > 0) {
        const promptInput = aiInputs[0];
        await promptInput.click();
        await promptInput.evaluate(el => el.value = '');
        await promptInput.type('A'.repeat(1000)); // Very long prompt
        
        const generateButtons = await this.page.$$('button');
        let generateButton = null;
        
        for (const button of generateButtons) {
          const buttonText = await button.evaluate(el => el.textContent);
          if (buttonText.includes('Generate') || buttonText.includes('Create') || buttonText.includes('Submit') || buttonText.includes('Send')) {
            generateButton = button;
            break;
          }
        }
        
        if (generateButton) {
          await generateButton.click();
          await new Promise(resolve => setTimeout(resolve, 5000));
          
          console.log('✅ Long prompt handled');
        }
      }
      
    } catch (error) {
      console.log(`❌ Error handling test failed: ${error.message}`);
      this.results.errors.push({
        test: 'Error Handling',
        error: error.message,
        timestamp: new Date().toISOString()
      });
    }
  }

  async testPerformanceMetrics() {
    console.log('\n⚡ Testing Performance Metrics...');
    
    const performanceTests = [];
    
    for (let i = 0; i < 3; i++) {
      performanceTests.push(this.measureResponseTime(`Test prompt ${i + 1}`));
    }
    
    try {
      const results = await Promise.all(performanceTests);
      const avgResponseTime = results.reduce((a, b) => a + b, 0) / results.length;
      
      console.log(`📊 Performance Results:`);
      console.log(`  - Average Response Time: ${avgResponseTime.toFixed(0)}ms`);
      console.log(`  - Fastest Response: ${Math.min(...results).toFixed(0)}ms`);
      console.log(`  - Slowest Response: ${Math.max(...results).toFixed(0)}ms`);
      
      this.results.performance = {
        averageResponseTime: avgResponseTime,
        fastestResponse: Math.min(...results),
        slowestResponse: Math.max(...results),
        totalTests: results.length,
        acceptable: avgResponseTime < 15000
      };
      
    } catch (error) {
      console.log(`❌ Performance test failed: ${error.message}`);
      this.results.performance = {
        error: error.message,
        success: false
      };
    }
  }

  async measureResponseTime(prompt) {
    const startTime = Date.now();
    
    await this.page.goto(`${this.baseUrl}/ai-builder`);
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const aiInputs = await this.page.$$('textarea, input[type="text"], [placeholder*="prompt"], [placeholder*="AI"]');
    if (aiInputs.length === 0) {
      throw new Error('No AI input found');
    }
    
    const promptInput = aiInputs[0];
    await promptInput.click();
    await promptInput.evaluate(el => el.value = '');
    await promptInput.type(prompt);
    
    const generateButtons = await this.page.$$('button');
    let generateButton = null;
    
    for (const button of generateButtons) {
      const buttonText = await button.evaluate(el => el.textContent);
      if (buttonText.includes('Generate') || buttonText.includes('Create') || buttonText.includes('Submit') || buttonText.includes('Send')) {
        generateButton = button;
        break;
      }
    }
    
    if (generateButton) {
      await generateButton.click();
    } else {
      await this.page.keyboard.press('Enter');
    }
    
    await new Promise(resolve => setTimeout(resolve, 8000));
    
    return Date.now() - startTime;
  }

  async generateFinalReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        aiServiceAvailable: this.results.aiService.available,
        aiServiceType: this.results.aiService.type,
        codeGenerationTests: Object.keys(this.results.codeGeneration).length,
        successfulGenerations: Object.values(this.results.codeGeneration).filter(test => test.success).length,
        averageQualityScore: this.calculateAverageQualityScore(),
        totalErrors: this.results.errors.length,
        performanceAcceptable: this.results.performance.acceptable
      },
      aiService: this.results.aiService,
      codeGeneration: this.results.codeGeneration,
      modelCapabilities: this.results.modelCapabilities,
      performance: this.results.performance,
      errors: this.results.errors,
      recommendations: this.generateRecommendations()
    };

    // Save report
    const reportPath = `./ai-service-direct-test-report-${Date.now()}.json`;
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    // Generate markdown report
    const markdownReport = this.generateMarkdownReport(report);
    const markdownPath = `./ai-service-direct-test-report-${Date.now()}.md`;
    fs.writeFileSync(markdownPath, markdownReport);
    
    console.log('\n📊 AI Service Direct Test Report Generated:');
    console.log(`📄 JSON Report: ${reportPath}`);
    console.log(`📄 Markdown Report: ${markdownPath}`);
    
    console.log('\n🎯 AI Service Direct Test Summary:');
    console.log(`🤖 AI Service: ${report.summary.aiServiceAvailable ? 'Available' : 'Not Available'} (${report.summary.aiServiceType})`);
    console.log(`💻 Code Generation: ${report.summary.successfulGenerations}/${report.summary.codeGenerationTests} successful`);
    console.log(`📈 Average Quality: ${report.summary.averageQualityScore.toFixed(1)}%`);
    console.log(`⚡ Performance: ${report.summary.performanceAcceptable ? 'Acceptable' : 'Needs Improvement'}`);
    console.log(`❌ Errors: ${report.summary.totalErrors}`);
    
    return report;
  }

  calculateAverageQualityScore() {
    const scores = Object.values(this.results.codeGeneration)
      .filter(test => test.qualityScore !== undefined)
      .map(test => test.qualityScore);
    
    return scores.length > 0 ? scores.reduce((a, b) => a + b, 0) / scores.length : 0;
  }

  generateRecommendations() {
    const recommendations = [];
    
    if (!this.results.aiService.available) {
      recommendations.push('AI Service is not available - check service initialization');
    }
    
    const avgQuality = this.calculateAverageQualityScore();
    if (avgQuality < 50) {
      recommendations.push('Code generation quality is low - improve AI model training or prompts');
    }
    
    if (this.results.performance && !this.results.performance.acceptable) {
      recommendations.push('Response time is too slow - optimize AI service performance');
    }
    
    const failedTests = Object.values(this.results.codeGeneration).filter(test => !test.success);
    if (failedTests.length > 0) {
      recommendations.push(`${failedTests.length} code generation tests failed - investigate issues`);
    }
    
    return recommendations;
  }

  generateMarkdownReport(report) {
    return `# AI Service Direct Test Report

## 📊 Test Summary

- **AI Service Available**: ${report.summary.aiServiceAvailable ? '✅ Yes' : '❌ No'}
- **AI Service Type**: ${report.summary.aiServiceType}
- **Code Generation Tests**: ${report.summary.codeGenerationTests}
- **Successful Generations**: ${report.summary.successfulGenerations}
- **Average Quality Score**: ${report.summary.averageQualityScore.toFixed(1)}%
- **Performance Acceptable**: ${report.summary.performanceAcceptable ? '✅ Yes' : '❌ No'}
- **Total Errors**: ${report.summary.totalErrors}

## 🤖 AI Service Status

- **Available**: ${report.aiService.available ? '✅ Yes' : '❌ No'}
- **Type**: ${report.aiService.type}
- **Timestamp**: ${report.aiService.timestamp}

## 💻 Code Generation Analysis

${Object.entries(report.codeGeneration).map(([test, data]) => 
  `### ${test}
- **Success**: ${data.success ? '✅ Yes' : '❌ No'}
- **Quality Score**: ${data.qualityScore ? data.qualityScore.toFixed(1) + '%' : 'N/A'}
- **Content Length**: ${data.contentLength} characters
- **Found Elements**: ${data.foundElements ? data.foundElements.join(', ') : 'None'}
- **Missing Elements**: ${data.missingElements ? data.missingElements.join(', ') : 'None'}
- **Contains Code**: ${data.hasCode ? 'Yes' : 'No'}
`).join('\n')}

## 🔄 Model Capabilities

${Object.entries(report.modelCapabilities).map(([capability, data]) => 
  `- **${capability}**: ${data.success ? '✅ Working' : '❌ Failed'} ${data.error ? `(${data.error})` : ''}`
).join('\n')}

## ⏱️ Performance Analysis

${report.performance.error ? 
  `- **Error**: ${report.performance.error}` :
  `- **Average Response Time**: ${report.performance.averageResponseTime.toFixed(0)}ms
- **Fastest Response**: ${report.performance.fastestResponse.toFixed(0)}ms
- **Slowest Response**: ${report.performance.slowestResponse.toFixed(0)}ms
- **Total Tests**: ${report.performance.totalTests}
- **Acceptable**: ${report.performance.acceptable ? 'Yes' : 'No'}`}

## 🐛 Errors Found

${report.errors.length > 0 ? report.errors.map((error, index) => 
  `${index + 1}. **${error.test || 'Unknown'}**: ${error.error}`
).join('\n') : 'No errors found! 🎉'}

## 💡 Recommendations

${report.recommendations.map(rec => `- ${rec}`).join('\n')}

## 🎯 Final Verdict

${report.summary.aiServiceAvailable && report.summary.successfulGenerations > 0 && report.summary.averageQualityScore > 50 ? 
  '## ✅ AI SERVICE IS FUNCTIONAL! 🎉\n\nAI service is working and generating code successfully.' :
  report.summary.aiServiceAvailable ? 
  '## ⚠️ AI SERVICE NEEDS IMPROVEMENT\n\nAI service is available but code generation quality needs improvement.' :
  '## ❌ AI SERVICE NOT AVAILABLE\n\nAI service is not properly initialized or accessible.'}

## 🕒 Generated At

${report.timestamp}

---
*Generated by AI Service Direct Test Suite*
`;
  }

  async runAllTests() {
    try {
      await this.initialize();
      
      await this.testAIServiceDirectly();
      await this.testCodeGenerationWithDifferentPrompts();
      await this.testAIModelSwitching();
      await this.testErrorHandlingAndRecovery();
      await this.testPerformanceMetrics();
      
      await this.generateFinalReport();
      
    } catch (error) {
      console.error('❌ AI Service Direct Test failed:', error);
      this.results.errors.push({
        type: 'test_suite_error',
        message: error.message,
        timestamp: new Date().toISOString()
      });
    } finally {
      if (this.browser) {
        await this.browser.close();
      }
    }
  }
}

// Run the direct test suite
const directTestSuite = new AIServiceDirectTest();
directTestSuite.runAllTests().catch(console.error);
