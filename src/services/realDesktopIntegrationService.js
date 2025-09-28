// src/services/realDesktopIntegrationService.js

class RealDesktopIntegrationService {
  constructor() {
    this.initialized = false;
    this.isElectron = false;
    this.systemCapabilities = {
      realTerminal: false,
      realFileSystem: false,
      realProcessManagement: false,
      realHardwareAccess: false,
      realSystemInfo: false
    };
  }

  async initialize() {
    if (this.initialized) {
      console.log('RealDesktopIntegrationService already initialized.');
      return;
    }

    console.log('Initializing RealDesktopIntegrationService...');

    // Check if running in Electron
    this.isElectron = window.electronAPI && window.electronAPI.isElectron && window.electronAPI.isElectron();
    
    if (this.isElectron) {
      console.log('🚀 Running in Electron - Full system access available');
      this.systemCapabilities = {
        realTerminal: true,
        realFileSystem: true,
        realProcessManagement: true,
        realHardwareAccess: true,
        realSystemInfo: true
      };
    } else {
      console.log('🌐 Running in browser - Limited to web APIs');
      this.systemCapabilities = {
        realTerminal: false,
        realFileSystem: false,
        realProcessManagement: false,
        realHardwareAccess: false,
        realSystemInfo: false
      };
    }

    this.initialized = true;
    console.log('RealDesktopIntegrationService initialized with capabilities:', this.systemCapabilities);
  }

  getSystemCapabilities() {
    return this.systemCapabilities;
  }

  isDesktopApp() {
    return this.isElectron;
  }

  // Real terminal execution
  async executeCommand(command) {
    if (!this.isElectron) {
      return {
        success: false,
        error: 'Not running in desktop mode',
        output: 'This command requires desktop application mode'
      };
    }

    try {
      const result = await window.desktopAPI.executeRealCommand(command);
      console.log(`Real command executed: ${command}`, result);
      return result;
    } catch (error) {
      console.error('Error executing real command:', error);
      return {
        success: false,
        error: error.message,
        output: ''
      };
    }
  }

  // Real file system operations
  async readFile(filePath) {
    if (!this.isElectron) {
      return {
        success: false,
        error: 'Not running in desktop mode',
        content: null
      };
    }

    try {
      const result = await window.desktopAPI.readRealFile(filePath);
      console.log(`Real file read: ${filePath}`, result);
      return result;
    } catch (error) {
      console.error('Error reading real file:', error);
      return {
        success: false,
        error: error.message,
        content: null
      };
    }
  }

  async writeFile(filePath, content) {
    if (!this.isElectron) {
      return {
        success: false,
        error: 'Not running in desktop mode'
      };
    }

    try {
      const result = await window.desktopAPI.writeRealFile(filePath, content);
      console.log(`Real file written: ${filePath}`, result);
      return result;
    } catch (error) {
      console.error('Error writing real file:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }

  async listDirectory(dirPath) {
    if (!this.isElectron) {
      return {
        success: false,
        error: 'Not running in desktop mode',
        files: []
      };
    }

    try {
      const result = await window.desktopAPI.listRealDirectory(dirPath);
      console.log(`Real directory listed: ${dirPath}`, result);
      return result;
    } catch (error) {
      console.error('Error listing real directory:', error);
      return {
        success: false,
        error: error.message,
        files: []
      };
    }
  }

  async createDirectory(dirPath) {
    if (!this.isElectron) {
      return {
        success: false,
        error: 'Not running in desktop mode'
      };
    }

    try {
      const result = await window.desktopAPI.createRealDirectory(dirPath);
      console.log(`Real directory created: ${dirPath}`, result);
      return result;
    } catch (error) {
      console.error('Error creating real directory:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }

  async deleteFile(filePath) {
    if (!this.isElectron) {
      return {
        success: false,
        error: 'Not running in desktop mode'
      };
    }

    try {
      const result = await window.desktopAPI.deleteRealFile(filePath);
      console.log(`Real file deleted: ${filePath}`, result);
      return result;
    } catch (error) {
      console.error('Error deleting real file:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }

  async getFileStats(filePath) {
    if (!this.isElectron) {
      return {
        success: false,
        error: 'Not running in desktop mode',
        stats: null
      };
    }

    try {
      const result = await window.desktopAPI.getRealFileStats(filePath);
      console.log(`Real file stats: ${filePath}`, result);
      return result;
    } catch (error) {
      console.error('Error getting real file stats:', error);
      return {
        success: false,
        error: error.message,
        stats: null
      };
    }
  }

  // Real process management
  async getProcesses() {
    if (!this.isElectron) {
      return {
        success: false,
        error: 'Not running in desktop mode',
        processes: []
      };
    }

    try {
      const result = await window.desktopAPI.getRealProcesses();
      console.log('Real processes retrieved:', result);
      return result;
    } catch (error) {
      console.error('Error getting real processes:', error);
      return {
        success: false,
        error: error.message,
        processes: []
      };
    }
  }

  async killProcess(pid) {
    if (!this.isElectron) {
      return {
        success: false,
        error: 'Not running in desktop mode'
      };
    }

    try {
      const result = await window.desktopAPI.killRealProcess(pid);
      console.log(`Real process killed: ${pid}`, result);
      return result;
    } catch (error) {
      console.error('Error killing real process:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }

  // Real system information
  async getSystemInfo() {
    if (!this.isElectron) {
      return {
        success: false,
        error: 'Not running in desktop mode',
        info: null
      };
    }

    try {
      const result = await window.desktopAPI.getRealSystemInfo();
      console.log('Real system info retrieved:', result);
      return result;
    } catch (error) {
      console.error('Error getting real system info:', error);
      return {
        success: false,
        error: error.message,
        info: null
      };
    }
  }

  // Get desktop features
  async getDesktopFeatures() {
    const capabilities = this.getSystemCapabilities();
    const isDesktop = this.isDesktopApp();
    
    return {
      isDesktopApp: isDesktop,
      capabilities: capabilities,
      features: {
        realTerminal: capabilities.realTerminal,
        realFileSystem: capabilities.realFileSystem,
        realProcessManagement: capabilities.realProcessManagement,
        realHardwareAccess: capabilities.realHardwareAccess,
        realSystemInfo: capabilities.realSystemInfo,
        webAPIs: !isDesktop,
        simulatedFeatures: !isDesktop
      },
      status: isDesktop ? 'Full Desktop Access' : 'Web Application Mode',
      message: isDesktop 
        ? 'DreamBuild is running as a desktop application with full system access'
        : 'DreamBuild is running in browser mode with limited capabilities'
    };
  }

  // Terminal capabilities test
  async testTerminalCapabilities() {
    const tests = [
      { command: 'pwd', description: 'Print working directory' },
      { command: 'ls -la', description: 'List files with details' },
      { command: 'ps aux', description: 'List running processes' },
      { command: 'whoami', description: 'Get current user' },
      { command: 'uname -a', description: 'Get system information' },
      { command: 'df -h', description: 'Get disk usage' },
      { command: 'free -h', description: 'Get memory usage' },
      { command: 'date', description: 'Get current date/time' }
    ];

    const results = [];
    
    for (const test of tests) {
      const result = await this.executeCommand(test.command);
      results.push({
        command: test.command,
        description: test.description,
        success: result.success,
        output: result.output,
        error: result.error
      });
    }

    return {
      isDesktop: this.isDesktopApp(),
      totalTests: tests.length,
      passedTests: results.filter(r => r.success).length,
      failedTests: results.filter(r => !r.success).length,
      results: results
    };
  }

  // File system capabilities test
  async testFileSystemCapabilities() {
    if (!this.isDesktopApp()) {
      return {
        isDesktop: false,
        message: 'File system tests require desktop application mode'
      };
    }

    const tests = [
      { operation: 'listDirectory', path: process.cwd(), description: 'List current directory' },
      { operation: 'getFileStats', path: process.cwd(), description: 'Get directory stats' },
      { operation: 'createDirectory', path: '/tmp/dreambuild-test', description: 'Create test directory' },
      { operation: 'deleteFile', path: '/tmp/dreambuild-test', description: 'Delete test directory' }
    ];

    const results = [];
    
    for (const test of tests) {
      let result;
      switch (test.operation) {
        case 'listDirectory':
          result = await this.listDirectory(test.path);
          break;
        case 'getFileStats':
          result = await this.getFileStats(test.path);
          break;
        case 'createDirectory':
          result = await this.createDirectory(test.path);
          break;
        case 'deleteFile':
          result = await this.deleteFile(test.path);
          break;
      }
      
      results.push({
        operation: test.operation,
        path: test.path,
        description: test.description,
        success: result.success,
        error: result.error
      });
    }

    return {
      isDesktop: this.isDesktopApp(),
      totalTests: tests.length,
      passedTests: results.filter(r => r.success).length,
      failedTests: results.filter(r => !r.success).length,
      results: results
    };
  }
}

export default new RealDesktopIntegrationService();
