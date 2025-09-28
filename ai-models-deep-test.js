import puppeteer from 'puppeteer';
import fs from 'fs';

class AIModelsDeepTest {
  constructor() {
    this.browser = null;
    this.page = null;
    this.results = {
      aiModels: {},
      codeQuality: {},
      languageSupport: {},
      performance: {},
      errors: []
    };
    this.baseUrl = 'http://localhost:3000';
  }

  async initialize() {
    console.log('🔬 Starting AI Models Deep Analysis...');
    
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

  async testSpecificLanguage(language, prompt, expectedKeywords) {
    console.log(`\n🔍 Testing ${language} Code Generation...`);
    
    await this.page.goto(`${this.baseUrl}/ai-builder`);
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const aiInputs = await this.page.$$('textarea, input[type="text"], [placeholder*="prompt"], [placeholder*="AI"]');
    if (aiInputs.length === 0) {
      throw new Error('No AI input found');
    }
    
    const promptInput = aiInputs[0];
    await promptInput.click();
    await promptInput.evaluate(el => el.value = '');
    await promptInput.type(prompt);
    
    const startTime = Date.now();
    
    // Generate code
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
    
    await new Promise(resolve => setTimeout(resolve, 10000));
    
    const endTime = Date.now();
    const responseTime = endTime - startTime;
    
    // Analyze generated code
    const codeContent = await this.page.evaluate(() => {
      const codeElements = document.querySelectorAll('pre, code, .code, [class*="code"], .generated, [class*="generated"]');
      let content = '';
      codeElements.forEach(el => {
        content += el.textContent + ' ';
      });
      return content;
    });
    
    // Check for expected keywords
    const foundKeywords = expectedKeywords.filter(keyword => 
      codeContent.toLowerCase().includes(keyword.toLowerCase())
    );
    
    const qualityScore = (foundKeywords.length / expectedKeywords.length) * 100;
    
    console.log(`✅ ${language} generation completed in ${responseTime}ms`);
    console.log(`📊 Quality Score: ${qualityScore.toFixed(1)}% (${foundKeywords.length}/${expectedKeywords.length} keywords found)`);
    
    this.results.languageSupport[language] = {
      success: true,
      responseTime: responseTime,
      qualityScore: qualityScore,
      foundKeywords: foundKeywords,
      missingKeywords: expectedKeywords.filter(k => !foundKeywords.includes(k)),
      codeLength: codeContent.length
    };
    
    return { codeContent, qualityScore, responseTime };
  }

  async testCodeQuality() {
    console.log('\n📊 Testing Code Quality Analysis...');
    
    const testCases = [
      {
        language: 'JavaScript',
        prompt: 'Create a complete e-commerce shopping cart with add, remove, update quantity, and calculate total functionality',
        expectedKeywords: ['function', 'const', 'let', 'class', 'addEventListener', 'JSON', 'localStorage', 'total', 'quantity', 'cart']
      },
      {
        language: 'React',
        prompt: 'Build a React component for a user dashboard with state management, API calls, and responsive design',
        expectedKeywords: ['import React', 'useState', 'useEffect', 'component', 'JSX', 'props', 'return', 'className', 'onClick']
      },
      {
        language: 'Python',
        prompt: 'Create a Python Flask REST API with user authentication, database models, and CRUD operations',
        expectedKeywords: ['from flask', 'import', 'class', 'def', 'route', 'jsonify', 'request', 'session', 'login', 'password']
      },
      {
        language: 'HTML/CSS',
        prompt: 'Design a responsive landing page with modern CSS Grid, animations, and mobile-first approach',
        expectedKeywords: ['<!DOCTYPE', '<html>', '<head>', '<body>', 'grid', 'flexbox', '@media', 'animation', 'responsive', 'mobile']
      },
      {
        language: 'Node.js',
        prompt: 'Build a Node.js Express server with middleware, error handling, and MongoDB integration',
        expectedKeywords: ['const express', 'require', 'app.use', 'middleware', 'mongoose', 'async', 'await', 'try', 'catch', 'error']
      }
    ];
    
    for (const testCase of testCases) {
      try {
        await this.testSpecificLanguage(
          testCase.language, 
          testCase.prompt, 
          testCase.expectedKeywords
        );
      } catch (error) {
        console.log(`❌ ${testCase.language} test failed: ${error.message}`);
        this.results.errors.push({
          language: testCase.language,
          error: error.message,
          timestamp: new Date().toISOString()
        });
      }
    }
  }

  async testAIModelCapabilities() {
    console.log('\n🤖 Testing AI Model Capabilities...');
    
    const capabilityTests = [
      {
        name: 'Code Completion',
        prompt: 'Complete this function: function calculateSum(',
        expectedBehavior: 'Should provide function completion'
      },
      {
        name: 'Bug Fixing',
        prompt: 'Fix this JavaScript code: function add(a, b) { return a - b; }',
        expectedBehavior: 'Should identify and fix the bug'
      },
      {
        name: 'Code Optimization',
        prompt: 'Optimize this code for better performance: for(let i=0; i<array.length; i++) { console.log(array[i]); }',
        expectedBehavior: 'Should suggest performance improvements'
      },
      {
        name: 'Documentation Generation',
        prompt: 'Generate JSDoc comments for this function: function processUserData(user) { return user.name.toUpperCase(); }',
        expectedBehavior: 'Should generate proper documentation'
      },
      {
        name: 'Test Generation',
        prompt: 'Write unit tests for this function: function divide(a, b) { if(b === 0) throw new Error("Division by zero"); return a / b; }',
        expectedBehavior: 'Should generate comprehensive tests'
      }
    ];
    
    for (const test of capabilityTests) {
      console.log(`\n🧪 Testing ${test.name}...`);
      
      try {
        await this.page.goto(`${this.baseUrl}/ai-builder`);
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        const aiInputs = await this.page.$$('textarea, input[type="text"], [placeholder*="prompt"], [placeholder*="AI"]');
        if (aiInputs.length === 0) {
          throw new Error('No AI input found');
        }
        
        const promptInput = aiInputs[0];
        await promptInput.click();
        await promptInput.evaluate(el => el.value = '');
        await promptInput.type(test.prompt);
        
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
        
        const responseContent = await this.page.evaluate(() => {
          const codeElements = document.querySelectorAll('pre, code, .code, [class*="code"], .generated, [class*="generated"]');
          let content = '';
          codeElements.forEach(el => {
            content += el.textContent + ' ';
          });
          return content;
        });
        
        if (responseContent.length > 50) {
          console.log(`✅ ${test.name} - Response generated`);
          this.results.aiModels[test.name] = {
            success: true,
            responseLength: responseContent.length,
            capability: test.expectedBehavior
          };
        } else {
          console.log(`⚠️ ${test.name} - Limited response`);
          this.results.aiModels[test.name] = {
            success: false,
            responseLength: responseContent.length,
            capability: test.expectedBehavior
          };
        }
        
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

  async testPerformanceUnderLoad() {
    console.log('\n⚡ Testing Performance Under Load...');
    
    const loadTests = [];
    const startTime = Date.now();
    
    for (let i = 0; i < 3; i++) {
      loadTests.push(this.generateCode(`Create a simple function ${i}`));
    }
    
    try {
      await Promise.all(loadTests);
      const endTime = Date.now();
      const totalTime = endTime - startTime;
      
      console.log(`✅ Load test completed in ${totalTime}ms`);
      this.results.performance.loadTest = {
        success: true,
        totalTime: totalTime,
        averageTime: totalTime / 3,
        concurrentRequests: 3
      };
    } catch (error) {
      console.log(`❌ Load test failed: ${error.message}`);
      this.results.performance.loadTest = {
        success: false,
        error: error.message
      };
    }
  }

  async generateCode(prompt) {
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
    
    await new Promise(resolve => setTimeout(resolve, 5000));
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalLanguages: Object.keys(this.results.languageSupport).length,
        totalCapabilities: Object.keys(this.results.aiModels).length,
        averageQualityScore: this.calculateAverageQualityScore(),
        totalErrors: this.results.errors.length
      },
      languageSupport: this.results.languageSupport,
      aiModels: this.results.aiModels,
      performance: this.results.performance,
      errors: this.results.errors,
      recommendations: this.generateRecommendations()
    };

    // Save report
    const reportPath = `./ai-models-deep-test-report-${Date.now()}.json`;
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    // Generate markdown report
    const markdownReport = this.generateMarkdownReport(report);
    const markdownPath = `./ai-models-deep-test-report-${Date.now()}.md`;
    fs.writeFileSync(markdownPath, markdownReport);
    
    console.log('\n📊 AI Models Deep Test Report Generated:');
    console.log(`📄 JSON Report: ${reportPath}`);
    console.log(`📄 Markdown Report: ${markdownPath}`);
    
    console.log('\n🎯 AI Models Deep Test Summary:');
    console.log(`📈 Average Quality Score: ${report.summary.averageQualityScore.toFixed(1)}%`);
    console.log(`🌐 Languages Tested: ${report.summary.totalLanguages}`);
    console.log(`🤖 Capabilities Tested: ${report.summary.totalCapabilities}`);
    console.log(`❌ Errors: ${report.summary.totalErrors}`);
    
    return report;
  }

  calculateAverageQualityScore() {
    const scores = Object.values(this.results.languageSupport)
      .filter(lang => lang.qualityScore !== undefined)
      .map(lang => lang.qualityScore);
    
    return scores.length > 0 ? scores.reduce((a, b) => a + b, 0) / scores.length : 0;
  }

  generateRecommendations() {
    const recommendations = [];
    
    const avgQuality = this.calculateAverageQualityScore();
    if (avgQuality < 70) {
      recommendations.push('Improve AI code generation quality - current average is below 70%');
    }
    
    const slowLanguages = Object.entries(this.results.languageSupport)
      .filter(([_, data]) => data.responseTime > 15000)
      .map(([lang, _]) => lang);
    
    if (slowLanguages.length > 0) {
      recommendations.push(`Optimize response time for: ${slowLanguages.join(', ')}`);
    }
    
    const failedCapabilities = Object.entries(this.results.aiModels)
      .filter(([_, data]) => !data.success)
      .map(([cap, _]) => cap);
    
    if (failedCapabilities.length > 0) {
      recommendations.push(`Fix failed capabilities: ${failedCapabilities.join(', ')}`);
    }
    
    return recommendations;
  }

  generateMarkdownReport(report) {
    return `# AI Models Deep Test Report

## 📊 Test Summary

- **Languages Tested**: ${report.summary.totalLanguages}
- **Capabilities Tested**: ${report.summary.totalCapabilities}
- **Average Quality Score**: ${report.summary.averageQualityScore.toFixed(1)}%
- **Total Errors**: ${report.summary.totalErrors}

## 🌐 Language Support Analysis

${Object.entries(report.languageSupport).map(([lang, data]) => 
  `### ${lang}
- **Quality Score**: ${data.qualityScore.toFixed(1)}%
- **Response Time**: ${data.responseTime}ms
- **Code Length**: ${data.codeLength} characters
- **Found Keywords**: ${data.foundKeywords.join(', ')}
- **Missing Keywords**: ${data.missingKeywords.join(', ')}
`).join('\n')}

## 🤖 AI Model Capabilities

${Object.entries(report.aiModels).map(([capability, data]) => 
  `- **${capability}**: ${data.success ? '✅ Working' : '❌ Failed'} (${data.responseLength} chars)`
).join('\n')}

## ⏱️ Performance Analysis

${Object.entries(report.performance).map(([test, data]) => 
  `- **${test}**: ${data.success ? '✅ Passed' : '❌ Failed'} ${data.totalTime ? `(${data.totalTime}ms)` : ''}`
).join('\n')}

## 🐛 Errors Found

${report.errors.length > 0 ? report.errors.map((error, index) => 
  `${index + 1}. **${error.test || error.language || 'Unknown'}**: ${error.error || error.message}`
).join('\n') : 'No errors found! 🎉'}

## 💡 Recommendations

${report.recommendations.map(rec => `- ${rec}`).join('\n')}

## 🎯 Final Verdict

${report.summary.averageQualityScore >= 80 && report.summary.totalErrors === 0 ? 
  '## ✅ AI MODELS ARE EXCELLENT! 🎉\n\nAll AI models demonstrate high-quality code generation and robust capabilities.' :
  report.summary.averageQualityScore >= 60 ? 
  '## ⚠️ AI MODELS ARE GOOD BUT NEED IMPROVEMENT\n\nAI models are functional but could benefit from quality improvements.' :
  '## ❌ AI MODELS NEED SIGNIFICANT IMPROVEMENT\n\nAI models require substantial improvements before being production ready.'}

## 🕒 Generated At

${report.timestamp}

---
*Generated by AI Models Deep Test Suite*
`;
  }

  async runAllTests() {
    try {
      await this.initialize();
      
      await this.testCodeQuality();
      await this.testAIModelCapabilities();
      await this.testPerformanceUnderLoad();
      
      await this.generateReport();
      
    } catch (error) {
      console.error('❌ AI Models Deep Test failed:', error);
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

// Run the deep test suite
const deepTestSuite = new AIModelsDeepTest();
deepTestSuite.runAllTests().catch(console.error);
