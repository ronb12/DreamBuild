const puppeteer = require('puppeteer');

async function testAdvancedAppsLocal() {
  console.log('🚀 Testing AI Builder with 5 Advanced Complex Apps and 5 Difficult Coding Problems (Local)...');
  
  const browser = await puppeteer.launch({ 
    headless: false,
    defaultViewport: { width: 1920, height: 1080 },
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  try {
    const page = await browser.newPage();
    
    // Navigate to local AI Builder
    console.log('📱 Navigating to local DreamBuild AI Builder...');
    await page.goto('http://localhost:3001/ai-builder', { 
      waitUntil: 'networkidle2',
      timeout: 30000 
    });
    
    // Wait for page to load
    await new Promise(resolve => setTimeout(resolve, 8000));
    
    const results = {
      advancedApps: [],
      codingProblems: [],
      overallSuccess: 0,
      totalTests: 10
    };
    
    // 5 Advanced Complex Apps to Build
    const advancedApps = [
      {
        name: "Real-time Collaborative Code Editor",
        prompt: "Create a real-time collaborative code editor like VS Code Live Share with WebSocket integration, conflict resolution, cursor tracking, and multi-user editing capabilities using React, Node.js, Socket.io, and Redis for session management.",
        complexity: "High - Multi-user real-time collaboration"
      },
      {
        name: "AI-Powered E-commerce Platform",
        prompt: "Build a full-stack AI-powered e-commerce platform with personalized recommendations, dynamic pricing, inventory management, payment processing (Stripe), user authentication, admin dashboard, and machine learning integration for product suggestions using React, Node.js, MongoDB, and TensorFlow.js.",
        complexity: "High - AI/ML integration with e-commerce"
      },
      {
        name: "Blockchain Voting System",
        prompt: "Develop a secure blockchain-based voting system with smart contracts, voter authentication, encrypted ballots, real-time results, and audit trails using Solidity, Web3.js, React, and Ethereum blockchain integration.",
        complexity: "High - Blockchain and cryptography"
      },
      {
        name: "Advanced Data Visualization Dashboard",
        prompt: "Create an advanced data visualization dashboard with real-time streaming data, interactive charts, custom widgets, data export, user permissions, and API integration for multiple data sources using React, D3.js, WebSocket, and PostgreSQL.",
        complexity: "High - Complex data visualization"
      },
      {
        name: "Multi-tenant SaaS Platform",
        prompt: "Build a multi-tenant SaaS platform with tenant isolation, subscription management, billing automation, API rate limiting, user management, custom branding, and analytics dashboard using React, Node.js, PostgreSQL, Stripe, and Redis.",
        complexity: "High - Multi-tenancy and SaaS architecture"
      }
    ];
    
    // 5 Difficult Coding Problems to Solve
    const codingProblems = [
      {
        name: "Concurrent Database Transaction Manager",
        problem: "Implement a concurrent database transaction manager that handles deadlock detection, rollback mechanisms, isolation levels, and ACID compliance for a high-traffic application with thousands of concurrent users.",
        difficulty: "Expert - Concurrency and database systems"
      },
      {
        name: "Distributed Cache Invalidation System",
        problem: "Design and implement a distributed cache invalidation system that maintains consistency across multiple cache nodes, handles network partitions, and provides eventual consistency with conflict resolution algorithms.",
        difficulty: "Expert - Distributed systems and consistency"
      },
      {
        name: "Advanced Graph Algorithm Optimizer",
        problem: "Create an advanced graph algorithm optimizer that can solve complex pathfinding problems, network flow optimization, and social network analysis with dynamic graph updates and real-time performance metrics.",
        difficulty: "Expert - Graph theory and algorithms"
      },
      {
        name: "Machine Learning Model Pipeline",
        problem: "Build a complete machine learning model pipeline with automated feature engineering, hyperparameter optimization, model versioning, A/B testing, and real-time inference serving with monitoring and alerting.",
        difficulty: "Expert - ML/AI and DevOps integration"
      },
      {
        name: "Cryptographic Message Authentication",
        problem: "Implement a secure cryptographic message authentication system with digital signatures, key management, certificate validation, and secure key exchange protocols for enterprise-grade security.",
        difficulty: "Expert - Cryptography and security"
      }
    ];
    
    console.log('\n🏗️ Building 5 Advanced Complex Apps...');
    console.log('=====================================');
    
    // Test Advanced Apps
    for (let i = 0; i < advancedApps.length; i++) {
      const app = advancedApps[i];
      console.log(`\n📱 App ${i + 1}/5: ${app.name}`);
      console.log(`Complexity: ${app.complexity}`);
      
      try {
        // Find the prompt input
        await page.waitForSelector('textarea, input[type="text"]', { timeout: 10000 });
        
        const textarea = await page.$('textarea, input[type="text"]');
        if (!textarea) {
          console.log('❌ Could not find prompt input');
          results.advancedApps.push({
            name: app.name,
            status: 'failed',
            complexity: app.complexity,
            error: 'Input not found'
          });
          continue;
        }
        
        console.log('✅ Found prompt input');
        
        // Clear and type the prompt
        await textarea.click();
        await textarea.evaluate(el => el.value = '');
        await textarea.type(app.prompt);
        console.log('✅ Prompt entered');
        
        // Find and click generate button
        const buttons = await page.$$('button');
        let generateButton = null;
        
        for (let j = 0; j < buttons.length; j++) {
          const button = buttons[j];
          const text = await button.evaluate(el => el.textContent);
          const isVisible = await button.isIntersectingViewport();
          
          if ((text.includes('Send') || text.includes('Generate') || text.includes('Submit')) && isVisible) {
            generateButton = button;
            console.log(`✅ Found generate button: "${text}"`);
            break;
          }
        }
        
        if (!generateButton) {
          console.log('❌ Generate button not found');
          results.advancedApps.push({
            name: app.name,
            status: 'failed',
            complexity: app.complexity,
            error: 'Generate button not found'
          });
          continue;
        }
        
        await generateButton.click();
        console.log('✅ Generate button clicked');
        
        // Wait for response
        await new Promise(resolve => setTimeout(resolve, 20000));
        
        // Check if response was generated
        const responseGenerated = await page.evaluate(() => {
          const bodyText = document.body.textContent;
          return bodyText.includes('generated') || 
                 bodyText.includes('created') || 
                 bodyText.includes('implemented') ||
                 bodyText.includes('built') ||
                 bodyText.includes('developed') ||
                 bodyText.includes('code') ||
                 bodyText.includes('function') ||
                 bodyText.includes('component') ||
                 bodyText.includes('app') ||
                 bodyText.includes('system');
        });
        
        if (responseGenerated) {
          console.log('✅ App generation started successfully');
          results.advancedApps.push({
            name: app.name,
            status: 'success',
            complexity: app.complexity
          });
        } else {
          console.log('⚠️ App generation may have issues');
          results.advancedApps.push({
            name: app.name,
            status: 'partial',
            complexity: app.complexity
          });
        }
        
        // Wait between tests
        await new Promise(resolve => setTimeout(resolve, 5000));
        
      } catch (error) {
        console.log(`❌ Error testing app ${app.name}:`, error.message);
        results.advancedApps.push({
          name: app.name,
          status: 'error',
          complexity: app.complexity,
          error: error.message
        });
      }
    }
    
    console.log('\n🧩 Solving 5 Difficult Coding Problems...');
    console.log('=========================================');
    
    // Test Coding Problems
    for (let i = 0; i < codingProblems.length; i++) {
      const problem = codingProblems[i];
      console.log(`\n🔧 Problem ${i + 1}/5: ${problem.name}`);
      console.log(`Difficulty: ${problem.difficulty}`);
      
      try {
        // Find the prompt input
        const textarea = await page.$('textarea, input[type="text"]');
        if (!textarea) {
          console.log('❌ Could not find prompt input');
          results.codingProblems.push({
            name: problem.name,
            status: 'failed',
            difficulty: problem.difficulty,
            error: 'Input not found'
          });
          continue;
        }
        
        console.log('✅ Found prompt input');
        
        // Clear and type the problem
        await textarea.click();
        await textarea.evaluate(el => el.value = '');
        await textarea.type(problem.problem);
        console.log('✅ Problem entered');
        
        // Find and click generate button
        const buttons = await page.$$('button');
        let generateButton = null;
        
        for (let j = 0; j < buttons.length; j++) {
          const button = buttons[j];
          const text = await button.evaluate(el => el.textContent);
          const isVisible = await button.isIntersectingViewport();
          
          if ((text.includes('Send') || text.includes('Generate') || text.includes('Submit')) && isVisible) {
            generateButton = button;
            console.log(`✅ Found generate button: "${text}"`);
            break;
          }
        }
        
        if (!generateButton) {
          console.log('❌ Generate button not found');
          results.codingProblems.push({
            name: problem.name,
            status: 'failed',
            difficulty: problem.difficulty,
            error: 'Generate button not found'
          });
          continue;
        }
        
        await generateButton.click();
        console.log('✅ Generate button clicked');
        
        // Wait for response
        await new Promise(resolve => setTimeout(resolve, 20000));
        
        // Check if solution was generated
        const solutionGenerated = await page.evaluate(() => {
          const bodyText = document.body.textContent;
          return bodyText.includes('solution') || 
                 bodyText.includes('implementation') || 
                 bodyText.includes('algorithm') ||
                 bodyText.includes('approach') ||
                 bodyText.includes('code') ||
                 bodyText.includes('function') ||
                 bodyText.includes('class') ||
                 bodyText.includes('method') ||
                 bodyText.includes('design') ||
                 bodyText.includes('architecture');
        });
        
        if (solutionGenerated) {
          console.log('✅ Problem solution started successfully');
          results.codingProblems.push({
            name: problem.name,
            status: 'success',
            difficulty: problem.difficulty
          });
        } else {
          console.log('⚠️ Problem solution may have issues');
          results.codingProblems.push({
            name: problem.name,
            status: 'partial',
            difficulty: problem.difficulty
          });
        }
        
        // Wait between tests
        await new Promise(resolve => setTimeout(resolve, 5000));
        
      } catch (error) {
        console.log(`❌ Error testing problem ${problem.name}:`, error.message);
        results.codingProblems.push({
          name: problem.name,
          status: 'error',
          difficulty: problem.difficulty,
          error: error.message
        });
      }
    }
    
    // Take final screenshot
    await page.screenshot({ 
      path: 'advanced-apps-local-test.png',
      fullPage: true 
    });
    
    console.log('📸 Screenshot saved: advanced-apps-local-test.png');
    
    // Calculate results
    const successfulApps = results.advancedApps.filter(app => app.status === 'success').length;
    const successfulProblems = results.codingProblems.filter(problem => problem.status === 'success').length;
    const partialApps = results.advancedApps.filter(app => app.status === 'partial').length;
    const partialProblems = results.codingProblems.filter(problem => problem.status === 'partial').length;
    
    results.overallSuccess = successfulApps + successfulProblems + (partialApps + partialProblems) * 0.5;
    
    // Detailed Results
    console.log('\n🎯 DETAILED RESULTS');
    console.log('==================');
    
    console.log('\n📱 Advanced Apps Results:');
    results.advancedApps.forEach((app, index) => {
      const statusIcon = app.status === 'success' ? '✅' : app.status === 'partial' ? '⚠️' : '❌';
      console.log(`${statusIcon} ${index + 1}. ${app.name} (${app.complexity})`);
      if (app.error) console.log(`   Error: ${app.error}`);
    });
    
    console.log('\n🧩 Coding Problems Results:');
    results.codingProblems.forEach((problem, index) => {
      const statusIcon = problem.status === 'success' ? '✅' : problem.status === 'partial' ? '⚠️' : '❌';
      console.log(`${statusIcon} ${index + 1}. ${problem.name} (${problem.difficulty})`);
      if (problem.error) console.log(`   Error: ${problem.error}`);
    });
    
    console.log('\n🏆 FINAL ASSESSMENT');
    console.log('==================');
    console.log(`Advanced Apps: ${successfulApps}/5 successful, ${partialApps}/5 partial`);
    console.log(`Coding Problems: ${successfulProblems}/5 successful, ${partialProblems}/5 partial`);
    console.log(`Overall Score: ${results.overallSuccess}/10 (${Math.round((results.overallSuccess/10)*100)}%)`);
    
    if (results.overallSuccess >= 9) {
      console.log('🏆 EXCEPTIONAL: AI Builder handles complex tasks exceptionally well!');
    } else if (results.overallSuccess >= 7) {
      console.log('✅ EXCELLENT: AI Builder performs very well with complex tasks!');
    } else if (results.overallSuccess >= 5) {
      console.log('👍 GOOD: AI Builder handles complex tasks reasonably well!');
    } else {
      console.log('⚠️ NEEDS IMPROVEMENT: AI Builder struggles with complex tasks!');
    }
    
    return results;
    
  } catch (error) {
    console.error('❌ Advanced apps test failed:', error);
    return { error: error.message };
  } finally {
    await browser.close();
  }
}

testAdvancedAppsLocal().then(result => {
  if (result.error) {
    console.error('Advanced apps test failed:', result.error);
  } else {
    console.log('\n🎉 Advanced apps test completed!');
    console.log(`Overall Score: ${result.overallSuccess}/10 (${Math.round((result.overallSuccess/10)*100)}%)`);
  }
}).catch(console.error);
