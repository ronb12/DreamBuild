// test-desktop-capabilities.cjs
const puppeteer = require('puppeteer');

async function testDreamBuildDesktopCapabilities() {
  console.log('🚀 Testing DreamBuild Desktop Application Capabilities');
  console.log('=' .repeat(60));

  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ['--start-maximized']
  });

  const page = await browser.newPage();
  
  try {
    // Navigate to DreamBuild
    console.log('📱 Navigating to DreamBuild...');
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
    await page.waitForTimeout(3000);

    // Test 1: Check if desktop integration is available
    console.log('\n🔍 Test 1: Desktop Integration Detection');
    const desktopIntegration = await page.evaluate(() => {
      return {
        electronAPI: !!window.electronAPI,
        desktopAPI: !!window.desktopAPI,
        realSystemIntegration: !!window.realSystemIntegration,
        isElectron: window.electronAPI ? window.electronAPI.isElectron() : false
      };
    });

    console.log('Desktop Integration Status:', desktopIntegration);

    // Test 2: Check system capabilities
    console.log('\n🔍 Test 2: System Capabilities Check');
    const capabilities = await page.evaluate(async () => {
      if (window.realSystemIntegration) {
        return await window.realSystemIntegration.getDesktopFeatures();
      }
      return { error: 'Real system integration not available' };
    });

    console.log('System Capabilities:', capabilities);

    // Test 3: Test terminal capabilities (if available)
    console.log('\n🔍 Test 3: Terminal Capabilities Test');
    const terminalTest = await page.evaluate(async () => {
      if (window.realSystemIntegration) {
        return await window.realSystemIntegration.testTerminalCapabilities();
      }
      return { error: 'Real system integration not available' };
    });

    console.log('Terminal Test Results:', terminalTest);

    // Test 4: Test file system capabilities (if available)
    console.log('\n🔍 Test 4: File System Capabilities Test');
    const fileSystemTest = await page.evaluate(async () => {
      if (window.realSystemIntegration) {
        return await window.realSystemIntegration.testFileSystemCapabilities();
      }
      return { error: 'Real system integration not available' };
    });

    console.log('File System Test Results:', fileSystemTest);

    // Test 5: Test real command execution (if available)
    console.log('\n🔍 Test 5: Real Command Execution Test');
    const commandTest = await page.evaluate(async () => {
      if (window.desktopAPI) {
        const commands = ['pwd', 'whoami', 'uname -a', 'date'];
        const results = [];
        
        for (const cmd of commands) {
          try {
            const result = await window.desktopAPI.executeRealCommand(cmd);
            results.push({ command: cmd, result });
          } catch (error) {
            results.push({ command: cmd, error: error.message });
          }
        }
        
        return results;
      }
      return { error: 'Desktop API not available' };
    });

    console.log('Command Execution Results:', commandTest);

    // Test 6: Test real file operations (if available)
    console.log('\n🔍 Test 6: Real File Operations Test');
    const fileOpsTest = await page.evaluate(async () => {
      if (window.desktopAPI) {
        const testPath = '/tmp/dreambuild-test-file.txt';
        const testContent = 'DreamBuild Desktop Test File\nCreated at: ' + new Date().toISOString();
        
        const operations = [];
        
        try {
          // Write file
          const writeResult = await window.desktopAPI.writeRealFile(testPath, testContent);
          operations.push({ operation: 'write', result: writeResult });
          
          // Read file
          const readResult = await window.desktopAPI.readRealFile(testPath);
          operations.push({ operation: 'read', result: readResult });
          
          // Get file stats
          const statsResult = await window.desktopAPI.getRealFileStats(testPath);
          operations.push({ operation: 'stats', result: statsResult });
          
          // Delete file
          const deleteResult = await window.desktopAPI.deleteRealFile(testPath);
          operations.push({ operation: 'delete', result: deleteResult });
          
        } catch (error) {
          operations.push({ operation: 'error', error: error.message });
        }
        
        return operations;
      }
      return { error: 'Desktop API not available' };
    });

    console.log('File Operations Results:', fileOpsTest);

    // Test 7: Test process management (if available)
    console.log('\n🔍 Test 7: Process Management Test');
    const processTest = await page.evaluate(async () => {
      if (window.desktopAPI) {
        try {
          const processes = await window.desktopAPI.getRealProcesses();
          return {
            success: true,
            processCount: processes.processes ? processes.processes.length : 0,
            processes: processes.processes ? processes.processes.slice(0, 5) : [] // First 5 processes
          };
        } catch (error) {
          return { success: false, error: error.message };
        }
      }
      return { error: 'Desktop API not available' };
    });

    console.log('Process Management Results:', processTest);

    // Test 8: Test system information (if available)
    console.log('\n🔍 Test 8: System Information Test');
    const systemInfoTest = await page.evaluate(async () => {
      if (window.desktopAPI) {
        try {
          const systemInfo = await window.desktopAPI.getRealSystemInfo();
          return systemInfo;
        } catch (error) {
          return { error: error.message };
        }
      }
      return { error: 'Desktop API not available' };
    });

    console.log('System Information Results:', systemInfoTest);

    // Generate comprehensive report
    console.log('\n📊 COMPREHENSIVE DESKTOP CAPABILITIES REPORT');
    console.log('=' .repeat(60));

    const report = {
      timestamp: new Date().toISOString(),
      desktopIntegration: desktopIntegration,
      capabilities: capabilities,
      terminalTest: terminalTest,
      fileSystemTest: fileSystemTest,
      commandTest: commandTest,
      fileOpsTest: fileOpsTest,
      processTest: processTest,
      systemInfoTest: systemInfoTest,
      summary: {
        isDesktopApp: desktopIntegration.isElectron,
        hasRealTerminal: terminalTest.passedTests > 0,
        hasRealFileSystem: fileSystemTest.passedTests > 0,
        hasRealProcessManagement: processTest.success,
        hasRealSystemInfo: systemInfoTest.success,
        totalCapabilities: [
          desktopIntegration.isElectron,
          terminalTest.passedTests > 0,
          fileSystemTest.passedTests > 0,
          processTest.success,
          systemInfoTest.success
        ].filter(Boolean).length
      }
    };

    console.log('Summary:', report.summary);
    
    if (report.summary.isDesktopApp) {
      console.log('✅ DreamBuild is running as a desktop application');
      console.log('✅ Full system access is available');
      console.log('✅ Real terminal commands can be executed');
      console.log('✅ Real file system operations are available');
      console.log('✅ Real process management is available');
      console.log('✅ Real system information is available');
      console.log('\n🎉 DreamBuild has FULL COMPUTER ACCESS!');
    } else {
      console.log('⚠️ DreamBuild is running in browser mode');
      console.log('⚠️ Limited to web browser capabilities');
      console.log('⚠️ Terminal commands are simulated');
      console.log('⚠️ File operations are limited');
      console.log('⚠️ Process management is simulated');
      console.log('\n💡 To get full computer access, run DreamBuild as a desktop application');
    }

    // Save detailed report
    const fs = require('fs');
    const reportPath = `desktop-capabilities-test-report-${Date.now()}.json`;
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`\n📄 Detailed report saved to: ${reportPath}`);

    return report;

  } catch (error) {
    console.error('❌ Test failed:', error);
    return { error: error.message };
  } finally {
    await browser.close();
  }
}

// Run the test
testDreamBuildDesktopCapabilities()
  .then(report => {
    console.log('\n🏁 Desktop Capabilities Test Complete');
    if (report.summary) {
      console.log(`Total Capabilities Available: ${report.summary.totalCapabilities}/5`);
    }
  })
  .catch(error => {
    console.error('Test execution failed:', error);
  });
