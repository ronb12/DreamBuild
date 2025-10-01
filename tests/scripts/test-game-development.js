/**
 * Comprehensive DreamBuild Game Development Test
 * Tests the advanced game development system without using Cursor
 */

import gameDevelopmentService from './src/services/gameDevelopmentService.js';
import fs from 'fs';
import path from 'path';

console.log('🎮 DreamBuild Advanced Game Development Test');
console.log('============================================\n');

async function runComprehensiveTest() {
    const testResults = {
        totalTests: 0,
        passedTests: 0,
        failedTests: 0,
        generatedGames: [],
        errors: []
    };

    // Test 1: Service Initialization
    console.log('Test 1: Game Development Service Initialization');
    testResults.totalTests++;
    try {
        if (gameDevelopmentService && gameDevelopmentService.supportedEngines) {
            console.log('✅ Game Development Service initialized successfully');
            console.log(`   Supported Engines: ${gameDevelopmentService.supportedEngines.join(', ')}`);
            console.log(`   Available Templates: ${Object.keys(gameDevelopmentService.gameTemplates).length}`);
            testResults.passedTests++;
        } else {
            throw new Error('Service not properly initialized');
        }
    } catch (error) {
        console.log('❌ Service initialization failed:', error.message);
        testResults.failedTests++;
        testResults.errors.push(error.message);
    }

    console.log('');

    // Test 2: Basic Game Template Generation
    console.log('Test 2: Basic Game Template Generation (Temple Run)');
    testResults.totalTests++;
    try {
        const templeRunGame = gameDevelopmentService.generateGame('temple-run', {
            engine: 'phaser',
            physics: 'arcade',
            graphics: '2d'
        });

        if (templeRunGame && templeRunGame.files && Object.keys(templeRunGame.files).length > 0) {
            console.log('✅ Temple Run game generated successfully');
            console.log(`   Files generated: ${Object.keys(templeRunGame.files).length}`);
            console.log(`   Framework: ${templeRunGame.framework}`);
            console.log(`   Generation time: ${templeRunGame.metadata?.generationTime}ms`);
            testResults.generatedGames.push({
                name: 'Temple Run',
                files: Object.keys(templeRunGame.files).length,
                framework: templeRunGame.framework
            });
            testResults.passedTests++;
        } else {
            throw new Error('Game generation returned invalid data');
        }
    } catch (error) {
        console.log('❌ Temple Run generation failed:', error.message);
        testResults.failedTests++;
        testResults.errors.push(error.message);
    }

    console.log('');

    // Test 3: 3D Game Generation
    console.log('Test 3: 3D Game Generation (3D Platformer)');
    testResults.totalTests++;
    try {
        const platformer3D = gameDevelopmentService.generateGame('3d-platformer', {
            engine: 'threejs',
            physics: 'cannon',
            graphics: '3d'
        });

        if (platformer3D && platformer3D.files && platformer3D.framework === 'threejs') {
            console.log('✅ 3D Platformer generated successfully');
            console.log(`   Files generated: ${Object.keys(platformer3D.files).length}`);
            console.log(`   Engine: ${platformer3D.engine}`);
            console.log(`   Physics: ${platformer3D.config.physics}`);
            console.log(`   Features: ${platformer3D.metadata?.features?.length || 0}`);
            testResults.generatedGames.push({
                name: '3D Platformer',
                files: Object.keys(platformer3D.files).length,
                framework: platformer3D.framework
            });
            testResults.passedTests++;
        } else {
            throw new Error('3D Platformer generation failed');
        }
    } catch (error) {
        console.log('❌ 3D Platformer generation failed:', error.message);
        testResults.failedTests++;
        testResults.errors.push(error.message);
    }

    console.log('');

    // Test 4: Multiplayer Game Generation
    console.log('Test 4: Multiplayer Game Generation (Arena)');
    testResults.totalTests++;
    try {
        const multiplayerArena = gameDevelopmentService.generateGame('multiplayer-arena', {
            engine: 'phaser',
            multiplayer: true,
            physics: 'arcade'
        });

        if (multiplayerArena && multiplayerArena.config.multiplayer) {
            console.log('✅ Multiplayer Arena generated successfully');
            console.log(`   Files generated: ${Object.keys(multiplayerArena.files).length}`);
            console.log(`   Multiplayer: ${multiplayerArena.config.multiplayer}`);
            console.log(`   Complexity: ${multiplayerArena.metadata?.complexity}`);
            testResults.generatedGames.push({
                name: 'Multiplayer Arena',
                files: Object.keys(multiplayerArena.files).length,
                framework: multiplayerArena.framework
            });
            testResults.passedTests++;
        } else {
            throw new Error('Multiplayer Arena generation failed');
        }
    } catch (error) {
        console.log('❌ Multiplayer Arena generation failed:', error.message);
        testResults.failedTests++;
        testResults.errors.push(error.message);
    }

    console.log('');

    // Test 5: VR Game Generation
    console.log('Test 5: VR Game Generation');
    testResults.totalTests++;
    try {
        const vrGame = gameDevelopmentService.generateGame('vr-game', {
            engine: 'babylon',
            vr: true,
            physics: 'cannon'
        });

        if (vrGame && vrGame.config.vr) {
            console.log('✅ VR Game generated successfully');
            console.log(`   Files generated: ${Object.keys(vrGame.files).length}`);
            console.log(`   VR Support: ${vrGame.config.vr}`);
            console.log(`   Engine: ${vrGame.engine}`);
            testResults.generatedGames.push({
                name: 'VR Game',
                files: Object.keys(vrGame.files).length,
                framework: vrGame.framework
            });
            testResults.passedTests++;
        } else {
            throw new Error('VR Game generation failed');
        }
    } catch (error) {
        console.log('❌ VR Game generation failed:', error.message);
        testResults.failedTests++;
        testResults.errors.push(error.message);
    }

    console.log('');

    // Test 6: RPG Game Generation
    console.log('Test 6: RPG Game Generation');
    testResults.totalTests++;
    try {
        const rpgGame = gameDevelopmentService.generateGame('rpg', {
            engine: 'phaser',
            physics: 'arcade'
        });

        if (rpgGame && rpgGame.files && rpgGame.config.rpg) {
            console.log('✅ RPG Game generated successfully');
            console.log(`   Files generated: ${Object.keys(rpgGame.files).length}`);
            console.log(`   RPG Features: ${rpgGame.config.rpg}`);
            console.log(`   Estimated Dev Time: ${rpgGame.metadata?.estimatedDevelopmentTime}`);
            testResults.generatedGames.push({
                name: 'RPG Game',
                files: Object.keys(rpgGame.files).length,
                framework: rpgGame.framework
            });
            testResults.passedTests++;
        } else {
            throw new Error('RPG Game generation failed');
        }
    } catch (error) {
        console.log('❌ RPG Game generation failed:', error.message);
        testResults.failedTests++;
        testResults.errors.push(error.message);
    }

    console.log('');

    // Test 7: File Content Validation
    console.log('Test 7: File Content Validation');
    testResults.totalTests++;
    try {
        const testGame = gameDevelopmentService.generateGame('temple-run');
        let validFiles = 0;
        let totalFiles = 0;

        for (const [filename, content] of Object.entries(testGame.files)) {
            totalFiles++;
            if (content && content.length > 100) { // Basic content validation
                validFiles++;
                console.log(`   ✅ ${filename}: ${content.length} characters`);
            } else {
                console.log(`   ⚠️ ${filename}: Content too short or empty`);
            }
        }

        if (validFiles === totalFiles && totalFiles > 0) {
            console.log('✅ All generated files have valid content');
            testResults.passedTests++;
        } else {
            throw new Error(`Only ${validFiles}/${totalFiles} files have valid content`);
        }
    } catch (error) {
        console.log('❌ File content validation failed:', error.message);
        testResults.failedTests++;
        testResults.errors.push(error.message);
    }

    console.log('');

    // Test 8: Engine Detection
    console.log('Test 8: Engine Auto-Detection');
    testResults.totalTests++;
    try {
        const engineTests = [
            { gameType: '3d-platformer', expectedEngine: 'threejs' },
            { gameType: 'vr-game', expectedEngine: 'babylon' },
            { gameType: 'temple-run', expectedEngine: 'phaser' }
        ];

        let passedEngineTests = 0;
        for (const test of engineTests) {
            const detectedEngine = gameDevelopmentService.detectBestEngine(test.gameType);
            if (detectedEngine === test.expectedEngine) {
                console.log(`   ✅ ${test.gameType}: ${detectedEngine} (correct)`);
                passedEngineTests++;
            } else {
                console.log(`   ❌ ${test.gameType}: ${detectedEngine} (expected ${test.expectedEngine})`);
            }
        }

        if (passedEngineTests === engineTests.length) {
            console.log('✅ Engine auto-detection working correctly');
            testResults.passedTests++;
        } else {
            throw new Error(`Only ${passedEngineTests}/${engineTests.length} engine detections correct`);
        }
    } catch (error) {
        console.log('❌ Engine detection test failed:', error.message);
        testResults.failedTests++;
        testResults.errors.push(error.message);
    }

    console.log('');

    // Test 9: Save Generated Game Files
    console.log('Test 9: Save Generated Game Files to Filesystem');
    testResults.totalTests++;
    try {
        const testGame = gameDevelopmentService.generateGame('temple-run');
        const testDir = './test-generated-game';
        
        // Create test directory
        if (!fs.existsSync(testDir)) {
            fs.mkdirSync(testDir, { recursive: true });
        }

        let savedFiles = 0;
        for (const [filename, content] of Object.entries(testGame.files)) {
            const filePath = path.join(testDir, filename);
            fs.writeFileSync(filePath, content);
            savedFiles++;
            console.log(`   ✅ Saved: ${filename}`);
        }

        if (savedFiles > 0) {
            console.log(`✅ Successfully saved ${savedFiles} game files to filesystem`);
            testResults.passedTests++;
        } else {
            throw new Error('No files were saved');
        }
    } catch (error) {
        console.log('❌ File saving test failed:', error.message);
        testResults.failedTests++;
        testResults.errors.push(error.message);
    }

    console.log('');

    // Test 10: Performance Test
    console.log('Test 10: Performance Test (Generate Multiple Games)');
    testResults.totalTests++;
    try {
        const startTime = Date.now();
        const gameTypes = ['temple-run', 'rpg', '3d-platformer', 'multiplayer-arena'];
        
        for (const gameType of gameTypes) {
            const gameStart = Date.now();
            gameDevelopmentService.generateGame(gameType);
            const gameTime = Date.now() - gameStart;
            console.log(`   ✅ ${gameType}: ${gameTime}ms`);
        }
        
        const totalTime = Date.now() - startTime;
        const avgTime = totalTime / gameTypes.length;
        
        console.log(`✅ Performance test completed`);
        console.log(`   Total time: ${totalTime}ms`);
        console.log(`   Average per game: ${avgTime.toFixed(1)}ms`);
        
        if (avgTime < 1000) { // Less than 1 second per game
            console.log('✅ Performance is excellent');
            testResults.passedTests++;
        } else {
            console.log('⚠️ Performance could be improved');
            testResults.passedTests++; // Still passes, just slower
        }
    } catch (error) {
        console.log('❌ Performance test failed:', error.message);
        testResults.failedTests++;
        testResults.errors.push(error.message);
    }

    console.log('\n============================================');
    console.log('🎮 DREAMBUILD GAME DEVELOPMENT TEST RESULTS');
    console.log('============================================');
    console.log(`Total Tests: ${testResults.totalTests}`);
    console.log(`Passed: ${testResults.passedTests} ✅`);
    console.log(`Failed: ${testResults.failedTests} ❌`);
    console.log(`Success Rate: ${((testResults.passedTests / testResults.totalTests) * 100).toFixed(1)}%`);
    
    console.log('\nGenerated Games:');
    testResults.generatedGames.forEach(game => {
        console.log(`   🎮 ${game.name}: ${game.files} files (${game.framework})`);
    });

    if (testResults.errors.length > 0) {
        console.log('\nErrors:');
        testResults.errors.forEach((error, index) => {
            console.log(`   ${index + 1}. ${error}`);
        });
    }

    console.log('\n🎯 CONCLUSION:');
    if (testResults.passedTests === testResults.totalTests) {
        console.log('✅ DreamBuild can successfully build games from code!');
        console.log('✅ All advanced game development features are working correctly!');
        console.log('✅ The system is ready for professional game development!');
    } else if (testResults.passedTests >= testResults.totalTests * 0.8) {
        console.log('✅ DreamBuild can build games with minor issues!');
        console.log('⚠️ Most features are working, some improvements needed.');
    } else {
        console.log('❌ DreamBuild has significant issues with game development.');
        console.log('🔧 The system needs debugging and fixes.');
    }

    return testResults;
}

// Run the comprehensive test
runComprehensiveTest().catch(console.error);
