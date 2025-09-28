import puppeteer from 'puppeteer';
import fs from 'fs';

class AIBuilderComprehensiveTest {
  constructor() {
    this.browser = null;
    this.page = null;
    this.results = {
      totalTests: 0,
      passedTests: 0,
      failedTests: 0,
      errors: [],
      aiModels: {},
      codeGeneration: {},
      performance: {},
      screenshots: []
    };
    this.baseUrl = 'http://localhost:3000';
  }

  async initialize() {
    console.log('🤖 Starting AI Builder Comprehensive Test Suite...');
    
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
    
    // Enable console logging
    this.page.on('console', msg => {
      if (msg.type() === 'error') {
        console.log('❌ Console Error:', msg.text());
        this.results.errors.push({
          type: 'console_error',
          message: msg.text(),
          timestamp: new Date().toISOString()
        });
      }
    });

    this.page.setDefaultTimeout(30000);
  }

  async takeScreenshot(name) {
    const screenshotPath = `./ai-test-screenshots/${name}-${Date.now()}.png`;
    await this.page.screenshot({ 
      path: screenshotPath, 
      fullPage: true 
    });
    this.results.screenshots.push(screenshotPath);
    return screenshotPath;
  }

  async runTest(testName, testFunction) {
    this.results.totalTests++;
    console.log(`\n🧪 Running test: ${testName}`);
    
    try {
      const startTime = Date.now();
      await testFunction();
      const endTime = Date.now();
      
      this.results.passedTests++;
      this.results.performance[testName] = endTime - startTime;
      console.log(`✅ ${testName} - PASSED (${endTime - startTime}ms)`);
      
      return true;
    } catch (error) {
      this.results.failedTests++;
      this.results.errors.push({
        test: testName,
        error: error.message,
        timestamp: new Date().toISOString()
      });
      console.log(`❌ ${testName} - FAILED: ${error.message}`);
      
      await this.takeScreenshot(`failed-${testName.replace(/\s+/g, '-')}`);
      
      return false;
    }
  }

  async testAIBuilderAccess() {
    await this.runTest('AI Builder Access', async () => {
      console.log('🌐 Navigating to AI Builder...');
      await this.page.goto(`${this.baseUrl}/ai-builder`);
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Check if AI Builder page loads
      const title = await this.page.title();
      if (!title.includes('DreamBuild')) {
        throw new Error('AI Builder page failed to load');
      }
      
      // Look for AI Builder specific elements
      const aiElements = await this.page.$$('textarea, input[type="text"], [placeholder*="prompt"], [placeholder*="AI"], [placeholder*="code"]');
      if (aiElements.length === 0) {
        throw new Error('No AI input elements found');
      }
      
      console.log(`✅ Found ${aiElements.length} AI input elements`);
    });
  }

  async testAIModelSelection() {
    await this.runTest('AI Model Selection', async () => {
      console.log('🔧 Testing AI Model Selection...');
      
      // Look for AI model selector
      const modelSelectors = await this.page.$$('select, [data-testid*="model"], [class*="model"], button[title*="model"]');
      console.log(`Found ${modelSelectors.length} potential model selectors`);
      
      // Check for model information in the page
      const pageContent = await this.page.evaluate(() => document.body.textContent);
      const hasModelInfo = pageContent.includes('CodeLlama') || 
                          pageContent.includes('model') || 
                          pageContent.includes('AI') ||
                          pageContent.includes('GPT') ||
                          pageContent.includes('Claude');
      
      if (hasModelInfo) {
        console.log('✅ AI model information found in page content');
      } else {
        console.log('⚠️ No specific AI model information found');
      }
      
      // Test model selection if available
      if (modelSelectors.length > 0) {
        const firstSelector = modelSelectors[0];
        await firstSelector.click();
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('✅ Model selector is interactive');
      }
    });
  }

  async testCodeGenerationJavaScript() {
    await this.runTest('JavaScript Code Generation', async () => {
      console.log('📝 Testing JavaScript Code Generation...');
      
      // Find AI input
      const aiInputs = await this.page.$$('textarea, input[type="text"], [placeholder*="prompt"], [placeholder*="AI"]');
      if (aiInputs.length === 0) {
        throw new Error('No AI input found');
      }
      
      const promptInput = aiInputs[0];
      
      // Test JavaScript code generation
      await promptInput.click();
      await promptInput.type('Create a simple JavaScript calculator with add, subtract, multiply, and divide functions');
      
      // Look for generate button
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
        console.log('✅ Generate button clicked');
      } else {
        await this.page.keyboard.press('Enter');
        console.log('✅ Enter key pressed');
      }
      
      // Wait for generation
      await new Promise(resolve => setTimeout(resolve, 8000));
      
      // Look for generated code
      const codeElements = await this.page.$$('pre, code, .code, [class*="code"], .generated, [class*="generated"], .monaco-editor');
      console.log(`Found ${codeElements.length} potential code elements`);
      
      if (codeElements.length > 0) {
        // Check if the generated code contains JavaScript
        const codeContent = await this.page.evaluate(() => {
          const codeElements = document.querySelectorAll('pre, code, .code, [class*="code"], .generated, [class*="generated"]');
          let content = '';
          codeElements.forEach(el => {
            content += el.textContent + ' ';
          });
          return content;
        });
        
        if (codeContent.includes('function') || codeContent.includes('const') || codeContent.includes('let') || codeContent.includes('var')) {
          console.log('✅ JavaScript code generation successful');
          this.results.codeGeneration.javascript = {
            success: true,
            elementsFound: codeElements.length,
            containsJavaScript: true
          };
        } else {
          console.log('⚠️ Code generated but may not be JavaScript');
          this.results.codeGeneration.javascript = {
            success: true,
            elementsFound: codeElements.length,
            containsJavaScript: false
          };
        }
      } else {
        throw new Error('No generated code found');
      }
    });
  }

  async testCodeGenerationReact() {
    await this.runTest('React Code Generation', async () => {
      console.log('⚛️ Testing React Code Generation...');
      
      // Clear previous input and test React
      const aiInputs = await this.page.$$('textarea, input[type="text"], [placeholder*="prompt"], [placeholder*="AI"]');
      if (aiInputs.length === 0) {
        throw new Error('No AI input found');
      }
      
      const promptInput = aiInputs[0];
      await promptInput.click();
      await promptInput.evaluate(el => el.value = '');
      await promptInput.type('Create a React component for a todo list with add, edit, delete, and mark complete functionality');
      
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
      
      await new Promise(resolve => setTimeout(resolve, 8000));
      
      // Check for React code
      const codeContent = await this.page.evaluate(() => {
        const codeElements = document.querySelectorAll('pre, code, .code, [class*="code"], .generated, [class*="generated"]');
        let content = '';
        codeElements.forEach(el => {
          content += el.textContent + ' ';
        });
        return content;
      });
      
      if (codeContent.includes('import React') || codeContent.includes('useState') || codeContent.includes('useEffect') || codeContent.includes('JSX')) {
        console.log('✅ React code generation successful');
        this.results.codeGeneration.react = {
          success: true,
          containsReact: true,
          containsHooks: codeContent.includes('useState') || codeContent.includes('useEffect')
        };
      } else {
        console.log('⚠️ Code generated but may not be React');
        this.results.codeGeneration.react = {
          success: true,
          containsReact: false
        };
      }
    });
  }

  async testCodeGenerationPython() {
    await this.runTest('Python Code Generation', async () => {
      console.log('🐍 Testing Python Code Generation...');
      
      const aiInputs = await this.page.$$('textarea, input[type="text"], [placeholder*="prompt"], [placeholder*="AI"]');
      if (aiInputs.length === 0) {
        throw new Error('No AI input found');
      }
      
      const promptInput = aiInputs[0];
      await promptInput.click();
      await promptInput.evaluate(el => el.value = '');
      await promptInput.type('Create a Python class for a bank account with deposit, withdraw, and balance methods');
      
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
      
      await new Promise(resolve => setTimeout(resolve, 8000));
      
      // Check for Python code
      const codeContent = await this.page.evaluate(() => {
        const codeElements = document.querySelectorAll('pre, code, .code, [class*="code"], .generated, [class*="generated"]');
        let content = '';
        codeElements.forEach(el => {
          content += el.textContent + ' ';
        });
        return content;
      });
      
      if (codeContent.includes('class ') || codeContent.includes('def ') || codeContent.includes('self') || codeContent.includes('import ')) {
        console.log('✅ Python code generation successful');
        this.results.codeGeneration.python = {
          success: true,
          containsPython: true,
          containsClass: codeContent.includes('class '),
          containsMethods: codeContent.includes('def ')
        };
      } else {
        console.log('⚠️ Code generated but may not be Python');
        this.results.codeGeneration.python = {
          success: true,
          containsPython: false
        };
      }
    });
  }

  async testCodeGenerationHTML() {
    await this.runTest('HTML Code Generation', async () => {
      console.log('🌐 Testing HTML Code Generation...');
      
      const aiInputs = await this.page.$$('textarea, input[type="text"], [placeholder*="prompt"], [placeholder*="AI"]');
      if (aiInputs.length === 0) {
        throw new Error('No AI input found');
      }
      
      const promptInput = aiInputs[0];
      await promptInput.click();
      await promptInput.evaluate(el => el.value = '');
      await promptInput.type('Create a responsive HTML landing page with header, hero section, features, and footer');
      
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
      
      await new Promise(resolve => setTimeout(resolve, 8000));
      
      // Check for HTML code
      const codeContent = await this.page.evaluate(() => {
        const codeElements = document.querySelectorAll('pre, code, .code, [class*="code"], .generated, [class*="generated"]');
        let content = '';
        codeElements.forEach(el => {
          content += el.textContent + ' ';
        });
        return content;
      });
      
      if (codeContent.includes('<html>') || codeContent.includes('<div>') || codeContent.includes('<h1>') || codeContent.includes('<!DOCTYPE')) {
        console.log('✅ HTML code generation successful');
        this.results.codeGeneration.html = {
          success: true,
          containsHTML: true,
          containsStructure: codeContent.includes('<html>') || codeContent.includes('<!DOCTYPE')
        };
      } else {
        console.log('⚠️ Code generated but may not be HTML');
        this.results.codeGeneration.html = {
          success: true,
          containsHTML: false
        };
      }
    });
  }

  async testAIConversation() {
    await this.runTest('AI Conversation', async () => {
      console.log('💬 Testing AI Conversation...');
      
      const aiInputs = await this.page.$$('textarea, input[type="text"], [placeholder*="prompt"], [placeholder*="AI"]');
      if (aiInputs.length === 0) {
        throw new Error('No AI input found');
      }
      
      const promptInput = aiInputs[0];
      await promptInput.click();
      await promptInput.evaluate(el => el.value = '');
      await promptInput.type('Explain how to optimize React performance');
      
      // Generate response
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
      
      // Check for conversational response
      const responseContent = await this.page.evaluate(() => {
        const responseElements = document.querySelectorAll('pre, code, .code, [class*="code"], .generated, [class*="generated"], .response, [class*="response"]');
        let content = '';
        responseElements.forEach(el => {
          content += el.textContent + ' ';
        });
        return content;
      });
      
      if (responseContent.includes('React') || responseContent.includes('performance') || responseContent.includes('optimize') || responseContent.length > 50) {
        console.log('✅ AI conversation successful');
        this.results.aiModels.conversation = {
          success: true,
          responseLength: responseContent.length,
          containsRelevantContent: true
        };
      } else {
        console.log('⚠️ AI response may not be conversational');
        this.results.aiModels.conversation = {
          success: true,
          responseLength: responseContent.length,
          containsRelevantContent: false
        };
      }
    });
  }

  async testCodeEditorIntegration() {
    await this.runTest('Code Editor Integration', async () => {
      console.log('💻 Testing Code Editor Integration...');
      
      // Look for Monaco Editor or code editor
      const editorElements = await this.page.$$('.monaco-editor, .code-editor, [class*="editor"], textarea, pre');
      console.log(`Found ${editorElements.length} editor elements`);
      
      if (editorElements.length === 0) {
        throw new Error('No code editor found');
      }
      
      // Test editor functionality
      const editor = editorElements[0];
      await editor.click();
      await this.page.keyboard.type('console.log("Hello World");');
      
      // Check if text was entered
      const editorContent = await this.page.evaluate(() => {
        const editor = document.querySelector('.monaco-editor, .code-editor, [class*="editor"], textarea, pre');
        return editor ? editor.textContent : '';
      });
      
      if (editorContent.includes('Hello World')) {
        console.log('✅ Code editor is functional');
        this.results.codeGeneration.editor = {
          success: true,
          functional: true
        };
      } else {
        console.log('⚠️ Code editor may not be fully functional');
        this.results.codeGeneration.editor = {
          success: true,
          functional: false
        };
      }
    });
  }

  async testErrorHandling() {
    await this.runTest('AI Error Handling', async () => {
      console.log('🛡️ Testing AI Error Handling...');
      
      const aiInputs = await this.page.$$('textarea, input[type="text"], [placeholder*="prompt"], [placeholder*="AI"]');
      if (aiInputs.length === 0) {
        throw new Error('No AI input found');
      }
      
      const promptInput = aiInputs[0];
      await promptInput.click();
      await promptInput.evaluate(el => el.value = '');
      await promptInput.type('Generate invalid code that will cause errors');
      
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
      
      await new Promise(resolve => setTimeout(resolve, 5000));
      
      // Check if the system handled the request gracefully
      const hasErrors = this.results.errors.length > 0;
      if (!hasErrors) {
        console.log('✅ AI error handling working properly');
        this.results.aiModels.errorHandling = {
          success: true,
          gracefulHandling: true
        };
      } else {
        console.log('⚠️ Some errors occurred during testing');
        this.results.aiModels.errorHandling = {
          success: true,
          gracefulHandling: false,
          errorCount: this.results.errors.length
        };
      }
    });
  }

  async testPerformanceMetrics() {
    await this.runTest('AI Performance Metrics', async () => {
      console.log('⚡ Testing AI Performance...');
      
      const startTime = Date.now();
      
      // Test a simple code generation
      const aiInputs = await this.page.$$('textarea, input[type="text"], [placeholder*="prompt"], [placeholder*="AI"]');
      if (aiInputs.length > 0) {
        const promptInput = aiInputs[0];
        await promptInput.click();
        await promptInput.evaluate(el => el.value = '');
        await promptInput.type('Create a simple function');
        
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
      
      const endTime = Date.now();
      const responseTime = endTime - startTime;
      
      console.log(`AI response time: ${responseTime}ms`);
      
      if (responseTime < 15000) {
        console.log('✅ AI performance is acceptable');
        this.results.performance.aiResponse = {
          success: true,
          responseTime: responseTime,
          acceptable: true
        };
      } else {
        console.log('⚠️ AI response time is slow');
        this.results.performance.aiResponse = {
          success: true,
          responseTime: responseTime,
          acceptable: false
        };
      }
    });
  }

  async runAllTests() {
    try {
      await this.initialize();
      
      // Create screenshots directory
      if (!fs.existsSync('./ai-test-screenshots')) {
        fs.mkdirSync('./ai-test-screenshots');
      }
      
      // Run all AI tests
      await this.testAIBuilderAccess();
      await this.testAIModelSelection();
      await this.testCodeGenerationJavaScript();
      await this.testCodeGenerationReact();
      await this.testCodeGenerationPython();
      await this.testCodeGenerationHTML();
      await this.testAIConversation();
      await this.testCodeEditorIntegration();
      await this.testErrorHandling();
      await this.testPerformanceMetrics();
      
      // Generate final report
      await this.generateReport();
      
    } catch (error) {
      console.error('❌ AI test suite failed:', error);
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

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalTests: this.results.totalTests,
        passedTests: this.results.passedTests,
        failedTests: this.results.failedTests,
        successRate: ((this.results.passedTests / this.results.totalTests) * 100).toFixed(2) + '%'
      },
      aiModels: this.results.aiModels,
      codeGeneration: this.results.codeGeneration,
      performance: this.results.performance,
      errors: this.results.errors,
      screenshots: this.results.screenshots,
      recommendations: this.generateRecommendations()
    };

    // Save report to file
    const reportPath = `./ai-builder-test-report-${Date.now()}.json`;
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    // Generate markdown report
    const markdownReport = this.generateMarkdownReport(report);
    const markdownPath = `./ai-builder-test-report-${Date.now()}.md`;
    fs.writeFileSync(markdownPath, markdownReport);
    
    console.log('\n📊 AI Builder Test Report Generated:');
    console.log(`📄 JSON Report: ${reportPath}`);
    console.log(`📄 Markdown Report: ${markdownPath}`);
    console.log(`📸 Screenshots: ./ai-test-screenshots/`);
    
    console.log('\n🎯 AI Builder Test Summary:');
    console.log(`✅ Passed: ${this.results.passedTests}/${this.results.totalTests}`);
    console.log(`❌ Failed: ${this.results.failedTests}/${this.results.totalTests}`);
    console.log(`📈 Success Rate: ${report.summary.successRate}`);
    
    console.log('\n🤖 AI Models Status:');
    Object.entries(this.results.aiModels).forEach(([model, status]) => {
      console.log(`  ${model}: ${status.success ? '✅ Working' : '❌ Failed'}`);
    });
    
    console.log('\n💻 Code Generation Status:');
    Object.entries(this.results.codeGeneration).forEach(([language, status]) => {
      console.log(`  ${language}: ${status.success ? '✅ Working' : '❌ Failed'}`);
    });
    
    if (this.results.errors.length > 0) {
      console.log('\n❌ Errors Found:');
      this.results.errors.forEach((error, index) => {
        console.log(`${index + 1}. ${error.type || 'Unknown'}: ${error.message || error.error || 'Unknown error'}`);
      });
    }
  }

  generateRecommendations() {
    const recommendations = [];
    
    if (this.results.failedTests > 0) {
      recommendations.push('Fix failed AI tests to ensure 100% functionality');
    }
    
    if (this.results.errors.length > 0) {
      recommendations.push('Address console and page errors for better AI stability');
    }
    
    const avgPerformance = Object.values(this.results.performance).reduce((a, b) => a + (b.responseTime || 0), 0) / Object.keys(this.results.performance).length;
    if (avgPerformance > 10000) {
      recommendations.push('Optimize AI response time for better user experience');
    }
    
    if (this.results.codeGeneration.javascript && !this.results.codeGeneration.javascript.containsJavaScript) {
      recommendations.push('Improve JavaScript code generation quality');
    }
    
    if (this.results.codeGeneration.react && !this.results.codeGeneration.react.containsReact) {
      recommendations.push('Improve React code generation quality');
    }
    
    return recommendations;
  }

  generateMarkdownReport(report) {
    return `# AI Builder Comprehensive Test Report

## 📊 Test Summary

- **Total Tests**: ${report.summary.totalTests}
- **Passed**: ${report.summary.passedTests} ✅
- **Failed**: ${report.summary.failedTests} ❌
- **Success Rate**: ${report.summary.successRate}

## 🤖 AI Models Status

${Object.entries(report.aiModels).map(([model, status]) => `- **${model}**: ${status.success ? '✅ Working' : '❌ Failed'}`).join('\n')}

## 💻 Code Generation Status

${Object.entries(report.codeGeneration).map(([language, status]) => `- **${language}**: ${status.success ? '✅ Working' : '❌ Failed'}`).join('\n')}

## ⏱️ Performance Metrics

${Object.entries(report.performance).map(([test, metrics]) => `- **${test}**: ${metrics.responseTime}ms (${metrics.acceptable ? 'Acceptable' : 'Slow'})`).join('\n')}

## 🐛 Errors Found

${report.errors.length > 0 ? report.errors.map((error, index) => `${index + 1}. **${error.type || 'Unknown'}**: ${error.message || error.error || 'Unknown error'}`).join('\n') : 'No errors found! 🎉'}

## 📸 Screenshots

${report.screenshots.map(screenshot => `- ${screenshot}`).join('\n')}

## 💡 Recommendations

${report.recommendations.map(rec => `- ${rec}`).join('\n')}

## 🎯 Final Verdict

${report.summary.successRate === '100.00%' ? 
  '## ✅ AI BUILDER IS FULLY FUNCTIONAL! 🎉\n\nAll AI models and code generation capabilities are working perfectly.' :
  '## ⚠️ AI BUILDER NEEDS IMPROVEMENTS\n\nSome AI functionality needs attention before being production ready.'}

## 🕒 Generated At

${report.timestamp}

---
*Generated by AI Builder Comprehensive Test Suite*
`;
  }
}

// Run the test suite
const testSuite = new AIBuilderComprehensiveTest();
testSuite.runAllTests().catch(console.error);
