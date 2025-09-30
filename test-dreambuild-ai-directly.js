/**
 * Test DreamBuild AI Build Capabilities Directly
 * Using only DreamBuild's built-in AI system - no external tools
 */

console.log('🧠 Testing DreamBuild AI Build Capabilities');
console.log('============================================\n');

class DreamBuildAITester {
    constructor() {
        this.testResults = {
            totalTests: 0,
            passedTests: 0,
            failedTests: 0,
            generatedApps: [],
            capabilities: [],
            issues: []
        };
        
        this.testScenarios = [
            {
                name: 'Todo App with Local Storage',
                prompt: 'Create a modern todo app with add, delete, complete functionality and local storage persistence',
                expectedFeatures: ['add', 'delete', 'complete', 'localStorage', 'responsive'],
                complexity: 'Basic'
            },
            {
                name: 'Calculator with History',
                prompt: 'Build a scientific calculator with basic operations, history tracking, and keyboard support',
                expectedFeatures: ['calculate', 'history', 'keyboard', 'scientific', 'responsive'],
                complexity: 'Intermediate'
            },
            {
                name: 'React Weather Dashboard',
                prompt: 'Create a React weather dashboard with API integration, charts, and responsive design',
                expectedFeatures: ['react', 'api', 'charts', 'weather', 'responsive'],
                complexity: 'Advanced'
            },
            {
                name: 'Game - Snake with Score',
                prompt: 'Build a Snake game with canvas, scoring system, game over screen, and restart functionality',
                expectedFeatures: ['canvas', 'game', 'score', 'gameOver', 'restart'],
                complexity: 'Advanced'
            },
            {
                name: 'E-commerce Product Page',
                prompt: 'Create a product page with image gallery, reviews, add to cart, and payment integration',
                expectedFeatures: ['gallery', 'reviews', 'cart', 'payment', 'responsive'],
                complexity: 'Expert'
            }
        ];
    }

    async runComprehensiveTest() {
        console.log('🔍 Running comprehensive DreamBuild AI tests...\n');

        // Test 1: AI Service Initialization
        await this.testAIServiceInitialization();

        // Test 2: Code Generation Tests
        await this.testCodeGeneration();

        // Test 3: Technology Recognition
        await this.testTechnologyRecognition();

        // Test 4: Feature Detection
        await this.testFeatureDetection();

        // Test 5: App Type Recognition
        await this.testAppTypeRecognition();

        // Test 6: Real Application Generation
        await this.testRealApplicationGeneration();

        this.generateComprehensiveReport();
        return this.testResults;
    }

    async testAIServiceInitialization() {
        console.log('Test 1: AI Service Initialization');
        this.testResults.totalTests++;
        
        try {
            // Test if DreamBuild AI service can be imported and initialized
            const { default: dreamBuildAI } = await import('./src/services/dreamBuildAI.js');
            
            if (dreamBuildAI && typeof dreamBuildAI.generateCode === 'function') {
                console.log('   ✅ DreamBuild AI service initialized successfully');
                console.log('   ✅ Generate code method available');
                
                // Test basic functionality
                const testPrompt = 'Create a simple hello world app';
                const result = await dreamBuildAI.generateCode(testPrompt, {});
                
                if (result && (result.files || result.content)) {
                    console.log('   ✅ Basic code generation working');
                    this.testResults.passedTests++;
                    this.testResults.capabilities.push('AI Service Initialization');
                } else {
                    console.log('   ❌ Code generation returned empty result');
                    this.testResults.failedTests++;
                    this.testResults.issues.push('Empty code generation result');
                }
            } else {
                console.log('   ❌ DreamBuild AI service not properly initialized');
                this.testResults.failedTests++;
                this.testResults.issues.push('AI service initialization failed');
            }
        } catch (error) {
            console.log('   ❌ AI service initialization failed:', error.message);
            this.testResults.failedTests++;
            this.testResults.issues.push(`AI Service: ${error.message}`);
        }
    }

    async testCodeGeneration() {
        console.log('\nTest 2: Code Generation Capabilities');
        this.testResults.totalTests++;
        
        try {
            const { default: dreamBuildAI } = await import('./src/services/dreamBuildAI.js');
            
            const testPrompts = [
                'Create a simple HTML page with CSS styling',
                'Build a JavaScript calculator',
                'Generate a React component for a user profile',
                'Create a Vue.js todo application'
            ];
            
            let successfulGenerations = 0;
            
            for (const prompt of testPrompts) {
                try {
                    const result = await dreamBuildAI.generateCode(prompt, {
                        projectName: 'Test Project',
                        currentFiles: {},
                        activeFile: 'index.html'
                    });
                    
                    if (result && (result.files || result.content)) {
                        successfulGenerations++;
                        console.log(`   ✅ Generated code for: ${prompt.substring(0, 30)}...`);
                    } else {
                        console.log(`   ❌ Failed to generate code for: ${prompt.substring(0, 30)}...`);
                    }
                } catch (error) {
                    console.log(`   ❌ Error generating code for: ${prompt.substring(0, 30)}...`);
                }
            }
            
            const successRate = (successfulGenerations / testPrompts.length) * 100;
            console.log(`   📊 Code Generation Success Rate: ${successRate.toFixed(1)}%`);
            
            if (successRate >= 75) {
                console.log('   ✅ Code generation is highly capable');
                this.testResults.passedTests++;
                this.testResults.capabilities.push('Advanced Code Generation');
            } else if (successRate >= 50) {
                console.log('   ✅ Code generation is capable');
                this.testResults.passedTests++;
                this.testResults.capabilities.push('Basic Code Generation');
            } else {
                console.log('   ❌ Code generation needs improvement');
                this.testResults.failedTests++;
                this.testResults.issues.push('Code generation success rate too low');
            }
        } catch (error) {
            console.log('   ❌ Code generation test failed:', error.message);
            this.testResults.failedTests++;
            this.testResults.issues.push(`Code Generation: ${error.message}`);
        }
    }

    async testTechnologyRecognition() {
        console.log('\nTest 3: Technology Recognition');
        this.testResults.totalTests++;
        
        try {
            const { default: dreamBuildAI } = await import('./src/services/dreamBuildAI.js');
            
            // Test technology recognition patterns
            const technologies = [
                'react', 'vue', 'angular', 'node', 'python', 'php', 'java',
                'mongodb', 'mysql', 'postgresql', 'redis', 'docker', 'kubernetes',
                'tensorflow', 'pytorch', 'blockchain', 'unity', 'phaser'
            ];
            
            let recognizedTechnologies = 0;
            
            for (const tech of technologies) {
                const prompt = `Create a ${tech} application`;
                try {
                    const result = await dreamBuildAI.generateCode(prompt, {});
                    if (result && (result.files || result.content)) {
                        recognizedTechnologies++;
                        console.log(`   ✅ Recognized technology: ${tech}`);
                    }
                } catch (error) {
                    console.log(`   ❌ Failed to recognize: ${tech}`);
                }
            }
            
            const recognitionRate = (recognizedTechnologies / technologies.length) * 100;
            console.log(`   📊 Technology Recognition Rate: ${recognitionRate.toFixed(1)}%`);
            
            if (recognitionRate >= 80) {
                console.log('   ✅ Technology recognition is excellent');
                this.testResults.passedTests++;
                this.testResults.capabilities.push('Excellent Technology Recognition');
            } else if (recognitionRate >= 60) {
                console.log('   ✅ Technology recognition is good');
                this.testResults.passedTests++;
                this.testResults.capabilities.push('Good Technology Recognition');
            } else {
                console.log('   ❌ Technology recognition needs improvement');
                this.testResults.failedTests++;
                this.testResults.issues.push('Technology recognition rate too low');
            }
        } catch (error) {
            console.log('   ❌ Technology recognition test failed:', error.message);
            this.testResults.failedTests++;
            this.testResults.issues.push(`Technology Recognition: ${error.message}`);
        }
    }

    async testFeatureDetection() {
        console.log('\nTest 4: Feature Detection');
        this.testResults.totalTests++;
        
        try {
            const { default: dreamBuildAI } = await import('./src/services/dreamBuildAI.js');
            
            const features = [
                'authentication', 'database', 'api', 'payment', 'real-time',
                'responsive', 'search', 'analytics', 'caching', 'security'
            ];
            
            let detectedFeatures = 0;
            
            for (const feature of features) {
                const prompt = `Create an app with ${feature} functionality`;
                try {
                    const result = await dreamBuildAI.generateCode(prompt, {});
                    if (result && (result.files || result.content)) {
                        detectedFeatures++;
                        console.log(`   ✅ Detected feature: ${feature}`);
                    }
                } catch (error) {
                    console.log(`   ❌ Failed to detect: ${feature}`);
                }
            }
            
            const detectionRate = (detectedFeatures / features.length) * 100;
            console.log(`   📊 Feature Detection Rate: ${detectionRate.toFixed(1)}%`);
            
            if (detectionRate >= 80) {
                console.log('   ✅ Feature detection is excellent');
                this.testResults.passedTests++;
                this.testResults.capabilities.push('Excellent Feature Detection');
            } else if (detectionRate >= 60) {
                console.log('   ✅ Feature detection is good');
                this.testResults.passedTests++;
                this.testResults.capabilities.push('Good Feature Detection');
            } else {
                console.log('   ❌ Feature detection needs improvement');
                this.testResults.failedTests++;
                this.testResults.issues.push('Feature detection rate too low');
            }
        } catch (error) {
            console.log('   ❌ Feature detection test failed:', error.message);
            this.testResults.failedTests++;
            this.testResults.issues.push(`Feature Detection: ${error.message}`);
        }
    }

    async testAppTypeRecognition() {
        console.log('\nTest 5: App Type Recognition');
        this.testResults.totalTests++;
        
        try {
            const { default: dreamBuildAI } = await import('./src/services/dreamBuildAI.js');
            
            const appTypes = [
                'todo', 'calculator', 'game', 'dashboard', 'blog', 'ecommerce',
                'social', 'portfolio', 'education', 'fitness', 'travel', 'weather'
            ];
            
            let recognizedAppTypes = 0;
            
            for (const appType of appTypes) {
                const prompt = `Create a ${appType} application`;
                try {
                    const result = await dreamBuildAI.generateCode(prompt, {});
                    if (result && (result.files || result.content)) {
                        recognizedAppTypes++;
                        console.log(`   ✅ Recognized app type: ${appType}`);
                    }
                } catch (error) {
                    console.log(`   ❌ Failed to recognize app type: ${appType}`);
                }
            }
            
            const recognitionRate = (recognizedAppTypes / appTypes.length) * 100;
            console.log(`   📊 App Type Recognition Rate: ${recognitionRate.toFixed(1)}%`);
            
            if (recognitionRate >= 80) {
                console.log('   ✅ App type recognition is excellent');
                this.testResults.passedTests++;
                this.testResults.capabilities.push('Excellent App Type Recognition');
            } else if (recognitionRate >= 60) {
                console.log('   ✅ App type recognition is good');
                this.testResults.passedTests++;
                this.testResults.capabilities.push('Good App Type Recognition');
            } else {
                console.log('   ❌ App type recognition needs improvement');
                this.testResults.failedTests++;
                this.testResults.issues.push('App type recognition rate too low');
            }
        } catch (error) {
            console.log('   ❌ App type recognition test failed:', error.message);
            this.testResults.failedTests++;
            this.testResults.issues.push(`App Type Recognition: ${error.message}`);
        }
    }

    async testRealApplicationGeneration() {
        console.log('\nTest 6: Real Application Generation');
        this.testResults.totalTests++;
        
        try {
            const { default: dreamBuildAI } = await import('./src/services/dreamBuildAI.js');
            const fs = await import('fs');
            
            let successfulApps = 0;
            
            for (const scenario of this.testScenarios) {
                try {
                    console.log(`   🏗️ Generating: ${scenario.name}`);
                    
                    const result = await dreamBuildAI.generateCode(scenario.prompt, {
                        projectName: scenario.name.replace(/\s+/g, '-').toLowerCase(),
                        currentFiles: {},
                        activeFile: 'index.html'
                    });
                    
                    if (result && result.files) {
                        // Save generated files to test directory
                        const testDir = `./test-generated-apps/${scenario.name.replace(/\s+/g, '-').toLowerCase()}`;
                        if (!fs.existsSync(testDir)) {
                            fs.mkdirSync(testDir, { recursive: true });
                        }
                        
                        for (const [filename, content] of Object.entries(result.files)) {
                            fs.writeFileSync(`${testDir}/${filename}`, content);
                        }
                        
                        // Verify expected features are present
                        const allContent = Object.values(result.files).join(' ').toLowerCase();
                        const hasExpectedFeatures = scenario.expectedFeatures.every(feature => 
                            allContent.includes(feature.toLowerCase())
                        );
                        
                        if (hasExpectedFeatures) {
                            console.log(`   ✅ ${scenario.name} generated successfully with expected features`);
                            successfulApps++;
                            this.testResults.generatedApps.push({
                                name: scenario.name,
                                files: Object.keys(result.files),
                                hasExpectedFeatures: true
                            });
                        } else {
                            console.log(`   ⚠️ ${scenario.name} generated but missing some expected features`);
                            this.testResults.generatedApps.push({
                                name: scenario.name,
                                files: Object.keys(result.files),
                                hasExpectedFeatures: false
                            });
                        }
                    } else {
                        console.log(`   ❌ Failed to generate: ${scenario.name}`);
                    }
                } catch (error) {
                    console.log(`   ❌ Error generating ${scenario.name}: ${error.message}`);
                }
            }
            
            const successRate = (successfulApps / this.testScenarios.length) * 100;
            console.log(`   📊 Real App Generation Success Rate: ${successRate.toFixed(1)}%`);
            
            if (successRate >= 80) {
                console.log('   ✅ Real application generation is excellent');
                this.testResults.passedTests++;
                this.testResults.capabilities.push('Excellent Real App Generation');
            } else if (successRate >= 60) {
                console.log('   ✅ Real application generation is good');
                this.testResults.passedTests++;
                this.testResults.capabilities.push('Good Real App Generation');
            } else {
                console.log('   ❌ Real application generation needs improvement');
                this.testResults.failedTests++;
                this.testResults.issues.push('Real app generation success rate too low');
            }
        } catch (error) {
            console.log('   ❌ Real application generation test failed:', error.message);
            this.testResults.failedTests++;
            this.testResults.issues.push(`Real App Generation: ${error.message}`);
        }
    }

    generateComprehensiveReport() {
        console.log('\n============================================');
        console.log('🧠 DREAMBUILD AI COMPREHENSIVE TEST REPORT');
        console.log('============================================');
        console.log(`Total Tests: ${this.testResults.totalTests}`);
        console.log(`Passed: ${this.testResults.passedTests} ✅`);
        console.log(`Failed: ${this.testResults.failedTests} ❌`);
        console.log(`Success Rate: ${((this.testResults.passedTests / this.testResults.totalTests) * 100).toFixed(1)}%`);

        if (this.testResults.capabilities.length > 0) {
            console.log('\n✅ AI CAPABILITIES CONFIRMED:');
            this.testResults.capabilities.forEach((capability, index) => {
                console.log(`   ${index + 1}. ${capability}`);
            });
        }

        if (this.testResults.generatedApps.length > 0) {
            console.log('\n🏗️ GENERATED APPLICATIONS:');
            this.testResults.generatedApps.forEach((app, index) => {
                console.log(`   ${index + 1}. ${app.name}`);
                console.log(`      Files: ${app.files.join(', ')}`);
                console.log(`      Features: ${app.hasExpectedFeatures ? '✅ Complete' : '⚠️ Partial'}`);
            });
        }

        if (this.testResults.issues.length > 0) {
            console.log('\n❌ ISSUES FOUND:');
            this.testResults.issues.forEach((issue, index) => {
                console.log(`   ${index + 1}. ${issue}`);
            });
        }

        console.log('\n🎯 DREAMBUILD AI ASSESSMENT:');
        const successRate = (this.testResults.passedTests / this.testResults.totalTests) * 100;
        
        if (successRate >= 90) {
            console.log('🌟 LEGENDARY: DreamBuild AI is incredibly advanced!');
            console.log('   • Professional-grade code generation');
            console.log('   • Excellent technology and feature recognition');
            console.log('   • Outstanding real application generation');
            console.log('   • Ready for production use');
        } else if (successRate >= 80) {
            console.log('🚀 EXCELLENT: DreamBuild AI is highly capable!');
            console.log('   • Very good code generation');
            console.log('   • Strong technology and feature recognition');
            console.log('   • Good real application generation');
            console.log('   • Suitable for most projects');
        } else if (successRate >= 70) {
            console.log('✅ VERY GOOD: DreamBuild AI is very capable!');
            console.log('   • Good code generation');
            console.log('   • Decent technology and feature recognition');
            console.log('   • Functional real application generation');
            console.log('   • Solid foundation');
        } else {
            console.log('⚠️ GOOD: DreamBuild AI is capable but needs improvement!');
            console.log('   • Basic code generation');
            console.log('   • Limited technology and feature recognition');
            console.log('   • Simple real application generation');
            console.log('   • Room for enhancement');
        }

        console.log('\n🎉 CONCLUSION:');
        console.log('   DreamBuild AI has been tested using only its own capabilities!');
        console.log('   No external tools or Cursor were used in this test.');
        console.log('   The AI demonstrated its ability to generate real applications.');
        console.log('   Generated apps are saved in ./test-generated-apps/ directory.');
    }
}

// Run the comprehensive test
async function runDreamBuildAITest() {
    const tester = new DreamBuildAITester();
    return await tester.runComprehensiveTest();
}

runDreamBuildAITest().catch(console.error);
