const chokidar = require('chokidar');
const { spawn } = require('child_process');
const path = require('path');

class AutoDeployWatcher {
  constructor() {
    this.isDeploying = false;
    this.deployQueue = [];
    this.watchPaths = [
      'src/**/*',
      'public/**/*',
      'package.json',
      'vite.config.js',
      'firebase.json'
    ];
    this.ignorePaths = [
      'node_modules/**',
      'dist/**',
      '.git/**',
      '*.log',
      '*.png',
      '*.jpg',
      '*.jpeg',
      '*.gif',
      '*.svg',
      'test-*.cjs',
      'test-*.js',
      '*.test.js',
      '*.spec.js'
    ];
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const colors = {
      info: '\x1b[34m',
      success: '\x1b[32m',
      warning: '\x1b[33m',
      error: '\x1b[31m',
      reset: '\x1b[0m'
    };
    
    console.log(`${colors[type]}[${timestamp}] ${message}${colors.reset}`);
  }

  async runDeploy() {
    if (this.isDeploying) {
      this.log('Deployment already in progress, queuing...', 'warning');
      this.deployQueue.push(true);
      return;
    }

    this.isDeploying = true;
    this.log('🚀 Starting auto deployment...', 'info');

    try {
      // Run the auto-deploy script
      const deployProcess = spawn('./auto-deploy.sh', [], {
        stdio: 'inherit',
        shell: true,
        cwd: process.cwd()
      });

      deployProcess.on('close', (code) => {
        this.isDeploying = false;
        
        if (code === 0) {
          this.log('✅ Auto deployment completed successfully!', 'success');
        } else {
          this.log(`❌ Auto deployment failed with code ${code}`, 'error');
        }

        // Process queued deployments
        if (this.deployQueue.length > 0) {
          this.deployQueue.shift();
          setTimeout(() => this.runDeploy(), 2000); // Wait 2 seconds before next deploy
        }
      });

      deployProcess.on('error', (error) => {
        this.isDeploying = false;
        this.log(`❌ Deployment process error: ${error.message}`, 'error');
      });

    } catch (error) {
      this.isDeploying = false;
      this.log(`❌ Failed to start deployment: ${error.message}`, 'error');
    }
  }

  startWatching() {
    this.log('👀 Starting file watcher for auto deployment...', 'info');
    this.log(`📁 Watching: ${this.watchPaths.join(', ')}`, 'info');
    this.log(`🚫 Ignoring: ${this.ignorePaths.join(', ')}`, 'info');

    const watcher = chokidar.watch(this.watchPaths, {
      ignored: this.ignorePaths,
      persistent: true,
      ignoreInitial: true,
      awaitWriteFinish: {
        stabilityThreshold: 1000, // Wait 1 second after file stops changing
        pollInterval: 100
      }
    });

    let debounceTimer;
    const debounceDelay = 3000; // Wait 3 seconds after last change

    watcher.on('change', (filePath) => {
      this.log(`📝 File changed: ${filePath}`, 'info');
      
      // Clear existing timer
      if (debounceTimer) {
        clearTimeout(debounceTimer);
      }

      // Set new timer
      debounceTimer = setTimeout(() => {
        this.log('⏰ Debounce timer expired, triggering deployment...', 'info');
        this.runDeploy();
      }, debounceDelay);
    });

    watcher.on('add', (filePath) => {
      this.log(`➕ File added: ${filePath}`, 'info');
      
      // Clear existing timer
      if (debounceTimer) {
        clearTimeout(debounceTimer);
      }

      // Set new timer
      debounceTimer = setTimeout(() => {
        this.log('⏰ Debounce timer expired, triggering deployment...', 'info');
        this.runDeploy();
      }, debounceDelay);
    });

    watcher.on('unlink', (filePath) => {
      this.log(`🗑️ File removed: ${filePath}`, 'info');
      
      // Clear existing timer
      if (debounceTimer) {
        clearTimeout(debounceTimer);
      }

      // Set new timer
      debounceTimer = setTimeout(() => {
        this.log('⏰ Debounce timer expired, triggering deployment...', 'info');
        this.runDeploy();
      }, debounceDelay);
    });

    watcher.on('error', (error) => {
      this.log(`❌ Watcher error: ${error.message}`, 'error');
    });

    // Handle process termination
    process.on('SIGINT', () => {
      this.log('🛑 Stopping file watcher...', 'warning');
      watcher.close();
      process.exit(0);
    });

    process.on('SIGTERM', () => {
      this.log('🛑 Stopping file watcher...', 'warning');
      watcher.close();
      process.exit(0);
    });

    this.log('✅ File watcher started successfully!', 'success');
    this.log('💡 Press Ctrl+C to stop watching', 'info');
  }
}

// Start the watcher
const watcher = new AutoDeployWatcher();
watcher.startWatching();
