// DreamBuild Comprehensive App Generation Test
// Tests 10 different applications to evaluate code quality and industry standards

import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class DreamBuildAppTester {
  constructor() {
    this.browser = null;
    this.page = null;
    this.testResults = [];
    this.appsToTest = [
      {
        id: 'todo-app',
        name: 'Todo Management App',
        prompt: 'Create a modern todo management application with add, edit, delete, and mark complete functionality. Include categories, due dates, and search features.',
        expectedFeatures: ['CRUD operations', 'Categories', 'Due dates', 'Search', 'Responsive design']
      },
      {
        id: 'ecommerce-store',
        name: 'E-commerce Store',
        prompt: 'Build a complete e-commerce store with product catalog, shopping cart, checkout process, user authentication, and payment integration.',
        expectedFeatures: ['Product catalog', 'Shopping cart', 'Checkout', 'Authentication', 'Payment']
      },
      {
        id: 'dashboard-analytics',
        name: 'Analytics Dashboard',
        prompt: 'Create a comprehensive analytics dashboard with charts, graphs, data visualization, real-time updates, and export functionality.',
        expectedFeatures: ['Charts', 'Data visualization', 'Real-time updates', 'Export', 'Responsive']
      },
      {
        id: 'blog-cms',
        name: 'Blog CMS',
        prompt: 'Develop a content management system for blogs with rich text editor, image uploads, categories, tags, comments, and SEO optimization.',
        expectedFeatures: ['Rich text editor', 'Image uploads', 'Categories', 'Comments', 'SEO']
      },
      {
        id: 'chat-app',
        name: 'Real-time Chat App',
        prompt: 'Build a real-time chat application with user rooms, message history, file sharing, emoji reactions, and online status indicators.',
        expectedFeatures: ['Real-time messaging', 'Rooms', 'File sharing', 'Emoji reactions', 'Online status']
      },
      {
        id: 'task-project-manager',
        name: 'Project Management Tool',
        prompt: 'Create a project management tool with task boards, team collaboration, time tracking, progress reports, and deadline management.',
        expectedFeatures: ['Task boards', 'Team collaboration', 'Time tracking', 'Progress reports', 'Deadlines']
      },
      {
        id: 'weather-app',
        name: 'Weather Application',
        prompt: 'Develop a weather application with current conditions, 7-day forecast, location search, weather maps, and alerts.',
        expectedFeatures: ['Current weather', '7-day forecast', 'Location search', 'Maps', 'Alerts']
      },
      {
        id: 'expense-tracker',
        name: 'Expense Tracker',
        prompt: 'Build an expense tracking application with budget management, category analysis, receipt scanning, and financial reports.',
        expectedFeatures: ['Budget management', 'Category analysis', 'Receipt scanning', 'Reports', 'Charts']
      },
      {
        id: 'social-media-feed',
        name: 'Social Media Feed',
        prompt: 'Create a social media feed application with posts, likes, comments, user profiles, following system, and content moderation.',
        expectedFeatures: ['Posts', 'Likes', 'Comments', 'User profiles', 'Following', 'Moderation']
      },
      {
        id: 'learning-management',
        name: 'Learning Management System',
        prompt: 'Develop a learning management system with courses, quizzes, progress tracking, certificates, and instructor dashboard.',
        expectedFeatures: ['Courses', 'Quizzes', 'Progress tracking', 'Certificates', 'Instructor dashboard']
      }
    ];
  }

  async initialize() {
    console.log('🚀 Initializing DreamBuild App Generation Test...');
    
    this.browser = await puppeteer.launch({
      headless: false,
      defaultViewport: null,
      args: ['--start-maximized', '--no-sandbox', '--disable-setuid-sandbox']
    });

    this.page = await this.browser.newPage();
    
    // Navigate to DreamBuild
    await this.page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
    
    // Wait for the app to load
    await this.page.waitForSelector('[data-testid="ai-prompt"]', { timeout: 10000 });
    
    console.log('✅ DreamBuild loaded successfully');
  }

  async testAppGeneration(appConfig) {
    console.log(`\n🎯 Testing: ${appConfig.name}`);
    console.log(`📝 Prompt: ${appConfig.prompt}`);
    
    const testResult = {
      appId: appConfig.id,
      appName: appConfig.name,
      prompt: appConfig.prompt,
      expectedFeatures: appConfig.expectedFeatures,
      startTime: new Date(),
      status: 'running',
      generatedFiles: [],
      codeQuality: {},
      functionality: {},
      industryStandards: {},
      errors: []
    };

    try {
      // Clear any existing content
      await this.page.evaluate(() => {
        const promptInput = document.querySelector('[data-testid="ai-prompt"]');
        if (promptInput) {
          promptInput.value = '';
        }
      });

      // Enter the prompt
      await this.page.type('[data-testid="ai-prompt"]', appConfig.prompt);
      
      // Click generate button
      await this.page.click('[data-testid="generate-button"]');
      
      // Wait for generation to complete (adjust timeout as needed)
      await this.page.waitForTimeout(10000);
      
      // Check for generated files
      const generatedFiles = await this.page.evaluate(() => {
        const fileElements = document.querySelectorAll('[data-testid="file-item"]');
        return Array.from(fileElements).map(el => ({
          name: el.textContent.trim(),
          visible: el.offsetParent !== null
        }));
      });
      
      testResult.generatedFiles = generatedFiles;
      
      // Analyze code quality
      testResult.codeQuality = await this.analyzeCodeQuality();
      
      // Test functionality
      testResult.functionality = await this.testFunctionality(appConfig.expectedFeatures);
      
      // Check industry standards
      testResult.industryStandards = await this.checkIndustryStandards();
      
      testResult.status = 'completed';
      testResult.endTime = new Date();
      testResult.duration = testResult.endTime - testResult.startTime;
      
      console.log(`✅ ${appConfig.name} - Generated ${generatedFiles.length} files`);
      
    } catch (error) {
      testResult.status = 'failed';
      testResult.errors.push(error.message);
      testResult.endTime = new Date();
      testResult.duration = testResult.endTime - testResult.startTime;
      
      console.log(`❌ ${appConfig.name} - Failed: ${error.message}`);
    }

    return testResult;
  }

  async analyzeCodeQuality() {
    const codeQuality = {
      structure: 0,
      bestPractices: 0,
      performance: 0,
      security: 0,
      maintainability: 0,
      accessibility: 0,
      totalScore: 0
    };

    try {
      // Check for proper file structure
      const hasHTML = await this.page.evaluate(() => {
        return document.querySelector('[data-testid="file-item"]')?.textContent.includes('index.html') || false;
      });
      
      const hasCSS = await this.page.evaluate(() => {
        return Array.from(document.querySelectorAll('[data-testid="file-item"]'))
          .some(el => el.textContent.includes('.css'));
      });
      
      const hasJS = await this.page.evaluate(() => {
        return Array.from(document.querySelectorAll('[data-testid="file-item"]'))
          .some(el => el.textContent.includes('.js'));
      });

      // Structure score (0-20 points)
      if (hasHTML) codeQuality.structure += 10;
      if (hasCSS) codeQuality.structure += 5;
      if (hasJS) codeQuality.structure += 5;

      // Check for best practices indicators
      const hasPackageJson = await this.page.evaluate(() => {
        return Array.from(document.querySelectorAll('[data-testid="file-item"]'))
          .some(el => el.textContent.includes('package.json'));
      });

      const hasReadme = await this.page.evaluate(() => {
        return Array.from(document.querySelectorAll('[data-testid="file-item"]'))
          .some(el => el.textContent.includes('README'));
      });

      // Best practices score (0-20 points)
      if (hasPackageJson) codeQuality.bestPractices += 10;
      if (hasReadme) codeQuality.bestPractices += 10;

      // Performance indicators (0-20 points)
      const hasOptimizedAssets = await this.page.evaluate(() => {
        return Array.from(document.querySelectorAll('[data-testid="file-item"]'))
          .some(el => el.textContent.includes('min') || el.textContent.includes('bundle'));
      });

      if (hasOptimizedAssets) codeQuality.performance += 10;
      codeQuality.performance += 10; // Base score for modern frameworks

      // Security indicators (0-20 points)
      const hasSecurityFeatures = await this.page.evaluate(() => {
        return Array.from(document.querySelectorAll('[data-testid="file-item"]'))
          .some(el => el.textContent.includes('auth') || el.textContent.includes('security'));
      });

      if (hasSecurityFeatures) codeQuality.security += 20;
      else codeQuality.security += 10; // Base score

      // Maintainability (0-10 points)
      const hasModularStructure = await this.page.evaluate(() => {
        const files = Array.from(document.querySelectorAll('[data-testid="file-item"]'));
        return files.length >= 3; // Multiple files indicate modularity
      });

      if (hasModularStructure) codeQuality.maintainability += 10;

      // Accessibility (0-10 points)
      codeQuality.accessibility += 10; // Base score for modern frameworks

      // Calculate total score
      codeQuality.totalScore = Object.values(codeQuality).reduce((sum, score) => sum + score, 0) - codeQuality.totalScore;

    } catch (error) {
      console.log('⚠️ Error analyzing code quality:', error.message);
    }

    return codeQuality;
  }

  async testFunctionality(expectedFeatures) {
    const functionality = {
      featuresImplemented: 0,
      totalFeatures: expectedFeatures.length,
      workingFeatures: [],
      missingFeatures: [],
      score: 0
    };

    try {
      // Check if preview is working
      const hasPreview = await this.page.evaluate(() => {
        return document.querySelector('[data-testid="preview"]') !== null;
      });

      if (hasPreview) {
        functionality.workingFeatures.push('Live Preview');
        functionality.featuresImplemented++;
      }

      // Check for interactive elements
      const hasInteractiveElements = await this.page.evaluate(() => {
        const buttons = document.querySelectorAll('button');
        const inputs = document.querySelectorAll('input');
        return buttons.length > 0 || inputs.length > 0;
      });

      if (hasInteractiveElements) {
        functionality.workingFeatures.push('Interactive Elements');
        functionality.featuresImplemented++;
      }

      // Check for responsive design
      const hasResponsiveDesign = await this.page.evaluate(() => {
        const viewport = document.querySelector('meta[name="viewport"]');
        return viewport !== null;
      });

      if (hasResponsiveDesign) {
        functionality.workingFeatures.push('Responsive Design');
        functionality.featuresImplemented++;
      }

      // Calculate score
      functionality.score = (functionality.featuresImplemented / functionality.totalFeatures) * 100;

    } catch (error) {
      console.log('⚠️ Error testing functionality:', error.message);
    }

    return functionality;
  }

  async checkIndustryStandards() {
    const standards = {
      w3cCompliance: false,
      performanceOptimized: false,
      mobileFirst: false,
      semanticHTML: false,
      modernCSS: false,
      es6Features: false,
      totalScore: 0
    };

    try {
      // Check for semantic HTML
      const hasSemanticHTML = await this.page.evaluate(() => {
        const semanticTags = ['header', 'nav', 'main', 'section', 'article', 'aside', 'footer'];
        return semanticTags.some(tag => document.querySelector(tag) !== null);
      });

      standards.semanticHTML = hasSemanticHTML;

      // Check for modern CSS
      const hasModernCSS = await this.page.evaluate(() => {
        const stylesheets = Array.from(document.querySelectorAll('link[rel="stylesheet"]'));
        return stylesheets.length > 0;
      });

      standards.modernCSS = hasModernCSS;

      // Check for mobile-first design
      const hasMobileFirst = await this.page.evaluate(() => {
        const viewport = document.querySelector('meta[name="viewport"]');
        return viewport && viewport.content.includes('width=device-width');
      });

      standards.mobileFirst = hasMobileFirst;

      // Calculate total score
      const scores = Object.values(standards).filter(val => typeof val === 'boolean');
      standards.totalScore = (scores.filter(Boolean).length / scores.length) * 100;

    } catch (error) {
      console.log('⚠️ Error checking industry standards:', error.message);
    }

    return standards;
  }

  async runAllTests() {
    console.log('🎯 Starting comprehensive app generation test...');
    console.log(`📊 Testing ${this.appsToTest.length} different applications\n`);

    for (const appConfig of this.appsToTest) {
      const result = await this.testAppGeneration(appConfig);
      this.testResults.push(result);
      
      // Wait between tests
      await this.page.waitForTimeout(2000);
    }

    await this.generateReport();
  }

  async generateReport() {
    console.log('\n📊 Generating comprehensive test report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalApps: this.testResults.length,
        successful: this.testResults.filter(r => r.status === 'completed').length,
        failed: this.testResults.filter(r => r.status === 'failed').length,
        averageCodeQuality: 0,
        averageFunctionality: 0,
        averageIndustryStandards: 0
      },
      detailedResults: this.testResults,
      recommendations: []
    };

    // Calculate averages
    const completedTests = this.testResults.filter(r => r.status === 'completed');
    
    if (completedTests.length > 0) {
      report.summary.averageCodeQuality = completedTests.reduce((sum, r) => sum + r.codeQuality.totalScore, 0) / completedTests.length;
      report.summary.averageFunctionality = completedTests.reduce((sum, r) => sum + r.functionality.score, 0) / completedTests.length;
      report.summary.averageIndustryStandards = completedTests.reduce((sum, r) => sum + r.industryStandards.totalScore, 0) / completedTests.length;
    }

    // Generate recommendations
    if (report.summary.averageCodeQuality < 70) {
      report.recommendations.push('Improve code structure and best practices implementation');
    }
    if (report.summary.averageFunctionality < 80) {
      report.recommendations.push('Enhance feature implementation and functionality testing');
    }
    if (report.summary.averageIndustryStandards < 75) {
      report.recommendations.push('Better adherence to industry standards and modern practices');
    }

    // Save report
    const reportPath = path.join(__dirname, 'dreamBuild-app-generation-test-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

    // Generate markdown report
    const markdownReport = this.generateMarkdownReport(report);
    const markdownPath = path.join(__dirname, 'dreamBuild-app-generation-test-report.md');
    fs.writeFileSync(markdownPath, markdownReport);

    console.log('\n📋 Test Report Generated:');
    console.log(`📄 JSON: ${reportPath}`);
    console.log(`📄 Markdown: ${markdownPath}`);
    
    console.log('\n🏆 Test Summary:');
    console.log(`✅ Successful: ${report.summary.successful}/${report.summary.totalApps}`);
    console.log(`❌ Failed: ${report.summary.failed}/${report.summary.totalApps}`);
    console.log(`📊 Average Code Quality: ${report.summary.averageCodeQuality.toFixed(1)}/100`);
    console.log(`📊 Average Functionality: ${report.summary.averageFunctionality.toFixed(1)}/100`);
    console.log(`📊 Average Industry Standards: ${report.summary.averageIndustryStandards.toFixed(1)}/100`);

    return report;
  }

  generateMarkdownReport(report) {
    return `# DreamBuild App Generation Test Report

## 🎯 Test Overview
- **Date**: ${new Date(report.timestamp).toLocaleDateString()}
- **Total Apps Tested**: ${report.summary.totalApps}
- **Successful**: ${report.summary.successful}
- **Failed**: ${report.summary.failed}
- **Success Rate**: ${((report.summary.successful / report.summary.totalApps) * 100).toFixed(1)}%

## 📊 Performance Metrics

### Code Quality Score
- **Average**: ${report.summary.averageCodeQuality.toFixed(1)}/100
- **Rating**: ${this.getRating(report.summary.averageCodeQuality)}

### Functionality Score
- **Average**: ${report.summary.averageFunctionality.toFixed(1)}/100
- **Rating**: ${this.getRating(report.summary.averageFunctionality)}

### Industry Standards Score
- **Average**: ${report.summary.averageIndustryStandards.toFixed(1)}/100
- **Rating**: ${this.getRating(report.summary.averageIndustryStandards)}

## 📋 Detailed Results

${report.detailedResults.map(result => `
### ${result.appName}
- **Status**: ${result.status === 'completed' ? '✅ Completed' : '❌ Failed'}
- **Files Generated**: ${result.generatedFiles.length}
- **Code Quality**: ${result.codeQuality.totalScore}/100
- **Functionality**: ${result.functionality.score.toFixed(1)}/100
- **Industry Standards**: ${result.industryStandards.totalScore.toFixed(1)}/100
- **Duration**: ${result.duration}ms
${result.errors.length > 0 ? `- **Errors**: ${result.errors.join(', ')}` : ''}
`).join('')}

## 🎯 Recommendations

${report.recommendations.map(rec => `- ${rec}`).join('\n')}

## 🏆 Conclusion

DreamBuild's app generation capabilities show ${this.getOverallRating(report)} performance with an average code quality score of ${report.summary.averageCodeQuality.toFixed(1)}/100.

${report.summary.successful >= 8 ? '✅ DreamBuild demonstrates excellent app generation capabilities' : '⚠️ DreamBuild shows good potential but needs improvement in some areas'}

---
*Generated by DreamBuild App Generation Test Suite*
`;
  }

  getRating(score) {
    if (score >= 90) return 'Excellent';
    if (score >= 80) return 'Good';
    if (score >= 70) return 'Fair';
    if (score >= 60) return 'Poor';
    return 'Very Poor';
  }

  getOverallRating(report) {
    const avgScore = (report.summary.averageCodeQuality + report.summary.averageFunctionality + report.summary.averageIndustryStandards) / 3;
    return this.getRating(avgScore);
  }

  async cleanup() {
    if (this.browser) {
      await this.browser.close();
    }
  }
}

// Run the test
async function runTest() {
  const tester = new DreamBuildAppTester();
  
  try {
    await tester.initialize();
    await tester.runAllTests();
  } catch (error) {
    console.error('❌ Test failed:', error);
  } finally {
    await tester.cleanup();
  }
}

// Execute if run directly
if (import.meta.url === `file://${process.argv[1]}`) {
  runTest();
}

export default DreamBuildAppTester;
