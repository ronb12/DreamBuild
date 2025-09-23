// Auto Deploy Configuration
module.exports = {
  // Files and directories to watch
  watchPaths: [
    'src/**/*',
    'public/**/*',
    'package.json',
    'vite.config.js',
    'firebase.json'
  ],

  // Files and directories to ignore
  ignorePaths: [
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
    '*.spec.js',
    'auto-deploy.sh',
    'watch-and-deploy.js',
    'auto-deploy.config.js'
  ],

  // Deployment settings
  deployment: {
    // Wait time after file changes before deploying (in milliseconds)
    debounceDelay: 3000,
    
    // Wait time after file stops changing before deploying (in milliseconds)
    stabilityThreshold: 1000,
    
    // Poll interval for file stability check (in milliseconds)
    pollInterval: 100,
    
    // Minimum time between deployments (in milliseconds)
    minDeployInterval: 10000
  },

  // Git settings
  git: {
    // Branch to push to
    branch: 'main',
    
    // Remote to push to
    remote: 'origin',
    
    // Commit message prefix
    commitPrefix: 'auto-deploy'
  },

  // Firebase settings
  firebase: {
    // Only deploy hosting (not functions, firestore, etc.)
    deployTarget: 'hosting',
    
    // Project ID (will be read from firebase.json)
    projectId: 'dreambuild-2024-app'
  },

  // Build settings
  build: {
    // Build command
    command: 'npm run build',
    
    // Build directory
    outputDir: 'dist'
  }
};
