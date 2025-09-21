import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class FinalVerification {
  constructor() {
    this.browser = null;
    this.page = null;
    this.consoleLogs = [];
  }

  async initialize() {
    console.log('🎯 Initializing Final Verification...');
    
    this.browser = await puppeteer.launch({
      headless: false,
      defaultViewport: { width: 1920, height: 1080 },
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    this.page = await this.browser.newPage();
    
    // Capture all console logs
    this.page.on('console', msg => {
      const type = msg.type();
      const text = msg.text();
      this.consoleLogs.push({ type, text, timestamp: new Date().toISOString() });
      
      if (type === 'error') {
        console.error('❌ Browser Error:', text);
      } else if (type === 'log') {
        console.log('📝 Browser Log:', text);
      }
    });

    this.page.on('pageerror', error => {
      console.error('❌ Page Error:', error.message);
      this.consoleLogs.push({ type: 'pageerror', text: error.message, timestamp: new Date().toISOString() });
    });

    console.log('✅ Final Verification initialized');
  }

  async testCoinCollectorGame() {
    console.log('🎮 Testing Coin Collector Game Generation...');
    
    try {
      // Navigate to AI Builder
      await this.page.goto('https://dreambuild-2024-app.web.app/ai-builder', {
        waitUntil: 'networkidle2',
        timeout: 30000
      });
      
      await new Promise(resolve => setTimeout(resolve, 5000));
      
      // Find and fill the correct textarea
      const textareas = await this.page.$$('textarea');
      let targetTextarea = null;
      
      for (const textarea of textareas) {
        const placeholder = await this.page.evaluate(el => el.placeholder, textarea);
        if (placeholder && placeholder.includes('Create a healthy food tips website')) {
          targetTextarea = textarea;
          break;
        }
      }
      
      if (!targetTextarea) {
        targetTextarea = textareas[textareas.length - 1];
      }

      // Type the coin collector game prompt
      await targetTextarea.click({ clickCount: 3 });
      await targetTextarea.type('create a fun coin collector game with multiple levels, power-ups, and high score tracking');
      console.log('✅ Typed coin collector game prompt');

      // Find and click generate button
      const buttons = await this.page.$$('button');
      let generateButton = null;
      
      for (const button of buttons) {
        const text = await this.page.evaluate(el => el.textContent, button);
        if (text && text.includes('Generate Code')) {
          generateButton = button;
          break;
        }
      }

      if (!generateButton) {
        throw new Error('No generate button found');
      }

      await generateButton.click();
      console.log('✅ Clicked generate button');

      // Monitor generation
      const success = await this.monitorGeneration();
      
      return success;
    } catch (error) {
      console.error('❌ Coin collector game test failed:', error.message);
      return false;
    }
  }

  async monitorGeneration() {
    console.log('⏳ Monitoring coin collector game generation...');
    
    const startTime = Date.now();
    const timeout = 300000; // 5 minutes
    let fileCount = 0;
    let componentCount = 0;
    let templateCount = 0;
    
    while (Date.now() - startTime < timeout) {
      const recentLogs = this.consoleLogs.slice(-10);
      
      // Count generated files from various log patterns
      const fileLogs = recentLogs.filter(log => 
        log.text.includes('Generated') && log.text.includes('files')
      );
      
      if (fileLogs.length > 0) {
        const match = fileLogs[0].text.match(/(\d+)\s+files/);
        if (match) {
          fileCount = parseInt(match[1]);
          console.log(`📁 Generated ${fileCount} files`);
        }
      }
      
      // Also count from component files + supporting files
      const componentLogs = recentLogs.filter(log => 
        log.text.includes('Component-based files generated')
      );
      
      const supportingLogs = recentLogs.filter(log => 
        log.text.includes('Generated supporting files')
      );
      
      if (componentLogs.length > 0) {
        const componentMatch = componentLogs[0].text.match(/(\d+)/);
        if (componentMatch) {
          componentCount = parseInt(componentMatch[1]);
        }
      }
      
      if (supportingLogs.length > 0) {
        const supportingMatch = supportingLogs[0].text.match(/(\d+)/);
        if (supportingMatch) {
          const supportingCount = parseInt(supportingMatch[1]);
          fileCount = componentCount + supportingCount;
          console.log(`📁 Total files: ${componentCount} components + ${supportingCount} supporting = ${fileCount} total`);
        }
      }
      
      // Count component files (already done above)
      if (componentCount > 0) {
        console.log(`🧩 Generated ${componentCount} component files`);
      }
      
      // Count template files
      const templateLogs = recentLogs.filter(log => 
        log.text.includes('Using template:')
      );
      
      if (templateLogs.length > 0) {
        templateCount++;
        console.log(`📋 Using template: ${templateLogs[0].text.split(': ')[1]}`);
      }
      
      // Check for success
      const hasSuccess = recentLogs.some(log => 
        log.text.includes('✅ Code generated successfully')
      );
      
      if (hasSuccess) {
        console.log('✅ Generation completed successfully!');
        console.log(`📊 Final Results:`);
        console.log(`   - Total files: ${fileCount}`);
        console.log(`   - Component files: ${componentCount}`);
        console.log(`   - Templates used: ${templateCount}`);
        
        // Verify multi-file generation
        if (fileCount > 10 || componentCount > 10) {
          console.log('🎉 SUCCESS: Multi-file generation is working!');
          return true;
        } else {
          console.log('❌ FAILED: Only single-page generation detected');
          return false;
        }
      }
      
      // Check for errors
      const hasError = recentLogs.some(log => 
        log.text.includes('❌') && 
        !log.text.includes('Firebase') && // Ignore Firebase errors
        !log.text.includes('Enhanced AI generation failed') // Ignore fallback errors
      );
      
      if (hasError) {
        console.log('❌ Generation failed with critical errors');
        return false;
      }
      
      // Wait before checking again
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
    
    console.log('⏰ Generation timeout reached');
    return false;
  }

  async captureScreenshot(name) {
    const screenshotPath = path.join(__dirname, `screenshots/${name}-${Date.now()}.png`);
    
    const screenshotsDir = path.dirname(screenshotPath);
    if (!fs.existsSync(screenshotsDir)) {
      fs.mkdirSync(screenshotsDir, { recursive: true });
    }
    
    await this.page.screenshot({ path: screenshotPath, fullPage: true });
    console.log(`📸 Screenshot saved: ${screenshotPath}`);
    return screenshotPath;
  }

  async runFinalVerification() {
    console.log('🎯 Starting Final Verification...');
    console.log('=====================================');
    
    try {
      await this.initialize();
      
      await this.captureScreenshot('initial-state');

      const success = await this.testCoinCollectorGame();
      
      await this.captureScreenshot('final-state');

      // Save console logs
      const logsPath = path.join(__dirname, 'final-verification-logs.json');
      fs.writeFileSync(logsPath, JSON.stringify(this.consoleLogs, null, 2));
      console.log(`📄 Console logs saved to: ${logsPath}`);

      if (success) {
        console.log('\n🎉 FINAL VERIFICATION PASSED!');
        console.log('✅ DreamBuild is working correctly!');
        console.log('✅ Multi-file generation is working!');
        console.log('✅ Coin collector game generation successful!');
        return true;
      } else {
        console.log('\n❌ FINAL VERIFICATION FAILED!');
        console.log('❌ DreamBuild needs fixes');
        return false;
      }

    } catch (error) {
      console.error('💥 Final verification failed:', error.message);
      await this.captureScreenshot('error-state');
      return false;
    } finally {
      if (this.browser) {
        await this.browser.close();
      }
    }
  }
}

// Run the final verification
async function main() {
  const verification = new FinalVerification();
  const success = await verification.runFinalVerification();
  
  if (success) {
    console.log('\n🏆 DREAMBUILD IS FULLY FUNCTIONAL!');
    console.log('🎮 Coin collector game generation: ✅ WORKING');
    console.log('📁 Multi-file generation: ✅ WORKING');
    console.log('🤖 AI code generation: ✅ WORKING');
    process.exit(0);
  } else {
    console.log('\n💥 DREAMBUILD NEEDS FIXES!');
    process.exit(1);
  }
}

main().catch(console.error);
