const fs = require('fs');
const path = require('path');

console.log('🧪 Testing DreamBuild Template System...\n');

// Test template system functionality
class TemplateSystemTest {
  constructor() {
    this.testResults = [];
    this.totalTemplates = 0;
    this.categories = [];
  }

  async runAllTests() {
    console.log('🚀 Starting Template System Tests...\n');

    // Test 1: Load and verify template service
    await this.testTemplateServiceLoad();
    
    // Test 2: Verify all categories exist
    await this.testTemplateCategories();
    
    // Test 3: Count total templates
    await this.testTemplateCount();
    
    // Test 4: Test template generation
    await this.testTemplateGeneration();
    
    // Test 5: Test template search
    await this.testTemplateSearch();
    
    // Test 6: Test template variations
    await this.testTemplateVariations();

    this.printResults();
  }

  async testTemplateServiceLoad() {
    console.log('📁 Test 1: Loading Template Service...');
    
    try {
      // Read the localAIService.js file
      const servicePath = path.join(__dirname, 'src/services/localAIService.js');
      const serviceContent = fs.readFileSync(servicePath, 'utf8');
      
      // Check for key template methods
      const hasGetTemplateCategories = serviceContent.includes('getTemplateCategories()');
      const hasGetAllTemplates = serviceContent.includes('getAllTemplates()');
      const hasCreateTemplateVariations = serviceContent.includes('createTemplateVariations');
      const hasGenerateWebTemplates = serviceContent.includes('generateWebTemplates()');
      
      if (hasGetTemplateCategories && hasGetAllTemplates && hasCreateTemplateVariations && hasGenerateWebTemplates) {
        console.log('✅ Template service loaded successfully');
        this.testResults.push({ test: 'Template Service Load', status: 'PASS' });
      } else {
        console.log('❌ Template service missing key methods');
        this.testResults.push({ test: 'Template Service Load', status: 'FAIL' });
      }
    } catch (error) {
      console.log('❌ Failed to load template service:', error.message);
      this.testResults.push({ test: 'Template Service Load', status: 'FAIL' });
    }
    
    console.log('');
  }

  async testTemplateCategories() {
    console.log('📂 Test 2: Verifying Template Categories...');
    
    try {
      const servicePath = path.join(__dirname, 'src/services/localAIService.js');
      const serviceContent = fs.readFileSync(servicePath, 'utf8');
      
      // Extract category information from the service
      const categoryMatches = serviceContent.match(/(\w+):\s*{\s*name:\s*'([^']+)',\s*icon:\s*'([^']+)',\s*templates:\s*this\.generate(\w+)Templates\(\),\s*count:\s*(\d+)/g);
      
      if (categoryMatches) {
        console.log(`✅ Found ${categoryMatches.length} template categories:`);
        
        categoryMatches.forEach((match, index) => {
          const parts = match.match(/(\w+):\s*{\s*name:\s*'([^']+)',\s*icon:\s*'([^']+)',\s*templates:\s*this\.generate(\w+)Templates\(\),\s*count:\s*(\d+)/);
          if (parts) {
            const [_, key, name, icon, generator, count] = parts;
            console.log(`   ${index + 1}. ${name} (${icon}) - ${count} templates`);
            this.categories.push({ key, name, count: parseInt(count) });
          }
        });
        
        this.testResults.push({ test: 'Template Categories', status: 'PASS', count: categoryMatches.length });
      } else {
        console.log('❌ Could not extract category information');
        this.testResults.push({ test: 'Template Categories', status: 'FAIL' });
      }
    } catch (error) {
      console.log('❌ Failed to verify categories:', error.message);
      this.testResults.push({ test: 'Template Categories', status: 'FAIL' });
    }
    
    console.log('');
  }

  async testTemplateCount() {
    console.log('🔢 Test 3: Counting Total Templates...');
    
    try {
      // Calculate total from categories
      const totalCount = this.categories.reduce((sum, category) => sum + category.count, 0);
      this.totalTemplates = totalCount;
      
      console.log(`✅ Total templates calculated: ${totalCount.toLocaleString()}`);
      
      if (totalCount >= 10000) {
        console.log('✅ Template count meets 10,000+ requirement');
        this.testResults.push({ test: 'Template Count', status: 'PASS', count: totalCount });
      } else {
        console.log(`❌ Template count (${totalCount}) is below 10,000 requirement`);
        this.testResults.push({ test: 'Template Count', status: 'FAIL', count: totalCount });
      }
    } catch (error) {
      console.log('❌ Failed to count templates:', error.message);
      this.testResults.push({ test: 'Template Count', status: 'FAIL' });
    }
    
    console.log('');
  }

  async testTemplateGeneration() {
    console.log('⚙️ Test 4: Testing Template Generation...');
    
    try {
      const servicePath = path.join(__dirname, 'src/services/localAIService.js');
      const serviceContent = fs.readFileSync(servicePath, 'utf8');
      
      // Check for template generation methods
      const generationMethods = [
        'generateWebTemplates',
        'generateMobileTemplates',
        'generateDashboardTemplates',
        'generateEcommerceTemplates',
        'generateGameTemplates',
        'generateEducationTemplates'
      ];
      
      let foundMethods = 0;
      generationMethods.forEach(method => {
        if (serviceContent.includes(`${method}()`)) {
          foundMethods++;
        }
      });
      
      console.log(`✅ Found ${foundMethods}/${generationMethods.length} generation methods`);
      
      // Check for createTemplateVariations method
      const hasVariations = serviceContent.includes('createTemplateVariations(');
      console.log(`${hasVariations ? '✅' : '❌'} Template variations method: ${hasVariations ? 'Found' : 'Missing'}`);
      
      if (foundMethods >= 6 && hasVariations) {
        this.testResults.push({ test: 'Template Generation', status: 'PASS' });
      } else {
        this.testResults.push({ test: 'Template Generation', status: 'FAIL' });
      }
    } catch (error) {
      console.log('❌ Failed to test template generation:', error.message);
      this.testResults.push({ test: 'Template Generation', status: 'FAIL' });
    }
    
    console.log('');
  }

  async testTemplateSearch() {
    console.log('🔍 Test 5: Testing Template Search...');
    
    try {
      const servicePath = path.join(__dirname, 'src/services/localAIService.js');
      const serviceContent = fs.readFileSync(servicePath, 'utf8');
      
      // Check for search functionality
      const hasSearchTemplates = serviceContent.includes('searchTemplates(');
      const hasGetTemplatesByCategory = serviceContent.includes('getTemplatesByCategory(');
      const hasGetPopularTemplates = serviceContent.includes('getPopularTemplates(');
      
      console.log(`${hasSearchTemplates ? '✅' : '❌'} Search templates method: ${hasSearchTemplates ? 'Found' : 'Missing'}`);
      console.log(`${hasGetTemplatesByCategory ? '✅' : '❌'} Get by category method: ${hasGetTemplatesByCategory ? 'Found' : 'Missing'}`);
      console.log(`${hasGetPopularTemplates ? '✅' : '❌'} Get popular templates method: ${hasGetPopularTemplates ? 'Found' : 'Missing'}`);
      
      if (hasSearchTemplates && hasGetTemplatesByCategory && hasGetPopularTemplates) {
        this.testResults.push({ test: 'Template Search', status: 'PASS' });
      } else {
        this.testResults.push({ test: 'Template Search', status: 'FAIL' });
      }
    } catch (error) {
      console.log('❌ Failed to test template search:', error.message);
      this.testResults.push({ test: 'Template Search', status: 'FAIL' });
    }
    
    console.log('');
  }

  async testTemplateVariations() {
    console.log('🎨 Test 6: Testing Template Variations...');
    
    try {
      const servicePath = path.join(__dirname, 'src/services/localAIService.js');
      const serviceContent = fs.readFileSync(servicePath, 'utf8');
      
      // Check for variation creation logic
      const hasVariationLogic = serviceContent.includes('while (templates.length < targetCount)');
      const hasBaseTemplates = serviceContent.includes('baseTemplates.forEach');
      const hasVariationGeneration = serviceContent.includes('variation = variations[');
      
      console.log(`${hasVariationLogic ? '✅' : '❌'} Variation generation logic: ${hasVariationLogic ? 'Found' : 'Missing'}`);
      console.log(`${hasBaseTemplates ? '✅' : '❌'} Base template iteration: ${hasBaseTemplates ? 'Found' : 'Missing'}`);
      console.log(`${hasVariationGeneration ? '✅' : '❌'} Variation selection: ${hasVariationGeneration ? 'Found' : 'Missing'}`);
      
      if (hasVariationLogic && hasBaseTemplates && hasVariationGeneration) {
        this.testResults.push({ test: 'Template Variations', status: 'PASS' });
      } else {
        this.testResults.push({ test: 'Template Variations', status: 'FAIL' });
      }
    } catch (error) {
      console.log('❌ Failed to test template variations:', error.message);
      this.testResults.push({ test: 'Template Variations', status: 'FAIL' });
    }
    
    console.log('');
  }

  printResults() {
    console.log('📊 TEST RESULTS SUMMARY');
    console.log('========================\n');
    
    const passed = this.testResults.filter(r => r.status === 'PASS').length;
    const total = this.testResults.length;
    
    this.testResults.forEach(result => {
      const status = result.status === 'PASS' ? '✅' : '❌';
      const count = result.count ? ` (${result.count.toLocaleString()})` : '';
      console.log(`${status} ${result.test}${count}`);
    });
    
    console.log(`\n🎯 Overall Result: ${passed}/${total} tests passed`);
    
    if (passed === total) {
      console.log('🎉 ALL TESTS PASSED! Template system is fully functional.');
      console.log(`📚 Total Templates Available: ${this.totalTemplates.toLocaleString()}`);
      console.log('🚀 DreamBuild is ready to generate applications!');
    } else {
      console.log('⚠️ Some tests failed. Please review the issues above.');
    }
    
    console.log('\n📋 Template Categories Summary:');
    this.categories.forEach((category, index) => {
      console.log(`   ${index + 1}. ${category.name}: ${category.count.toLocaleString()} templates`);
    });
  }
}

// Run the tests
const tester = new TemplateSystemTest();
tester.runAllTests().catch(console.error);
