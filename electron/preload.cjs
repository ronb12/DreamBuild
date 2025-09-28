// electron/preload.js
const { contextBridge, ipcRenderer } = require('electron');

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld('electronAPI', {
  // Terminal commands
  executeCommand: (command) => ipcRenderer.invoke('execute-command', command),
  
  // File system operations
  readFile: (filePath) => ipcRenderer.invoke('read-file', filePath),
  writeFile: (filePath, content) => ipcRenderer.invoke('write-file', filePath, content),
  listDirectory: (dirPath) => ipcRenderer.invoke('list-directory', dirPath),
  createDirectory: (dirPath) => ipcRenderer.invoke('create-directory', dirPath),
  deleteFile: (filePath) => ipcRenderer.invoke('delete-file', filePath),
  getFileStats: (filePath) => ipcRenderer.invoke('get-file-stats', filePath),
  
  // Process management
  getProcesses: () => ipcRenderer.invoke('get-processes'),
  killProcess: (pid) => ipcRenderer.invoke('kill-process', pid),
  
  // System information
  getSystemInfo: () => ipcRenderer.invoke('get-system-info'),
  
  // Platform detection
  isElectron: () => true,
  platform: () => process.platform,
  
  // Window controls
  minimize: () => ipcRenderer.send('window-minimize'),
  maximize: () => ipcRenderer.send('window-maximize'),
  close: () => ipcRenderer.send('window-close'),
  
  // Event listeners
  onWindowStateChange: (callback) => {
    ipcRenderer.on('window-state-changed', callback);
  },
  
  onSystemInfoUpdate: (callback) => {
    ipcRenderer.on('system-info-updated', callback);
  }
});

// Expose additional desktop-specific APIs
contextBridge.exposeInMainWorld('desktopAPI', {
  // Real system integration
  getRealSystemInfo: async () => {
    const info = await ipcRenderer.invoke('get-system-info');
    return info;
  },
  
  // Real terminal execution
  executeRealCommand: async (command) => {
    const result = await ipcRenderer.invoke('execute-command', command);
    return result;
  },
  
  // Real file operations
  readRealFile: async (filePath) => {
    const result = await ipcRenderer.invoke('read-file', filePath);
    return result;
  },
  
  writeRealFile: async (filePath, content) => {
    const result = await ipcRenderer.invoke('write-file', filePath, content);
    return result;
  },
  
  // Real process management
  getRealProcesses: async () => {
    const result = await ipcRenderer.invoke('get-processes');
    return result;
  },
  
  killRealProcess: async (pid) => {
    const result = await ipcRenderer.invoke('kill-process', pid);
    return result;
  },
  
  // Real directory operations
  listRealDirectory: async (dirPath) => {
    const result = await ipcRenderer.invoke('list-directory', dirPath);
    return result;
  },
  
  createRealDirectory: async (dirPath) => {
    const result = await ipcRenderer.invoke('create-directory', dirPath);
    return result;
  },
  
  deleteRealFile: async (filePath) => {
    const result = await ipcRenderer.invoke('delete-file', filePath);
    return result;
  },
  
  getRealFileStats: async (filePath) => {
    const result = await ipcRenderer.invoke('get-file-stats', filePath);
    return result;
  }
});

// Initialize desktop integration
window.addEventListener('DOMContentLoaded', () => {
  // Check if running in Electron
  if (window.electronAPI) {
    console.log('🚀 DreamBuild Desktop Application Initialized');
    console.log('✅ Real system integration available');
    console.log('✅ Real terminal commands available');
    console.log('✅ Real file system access available');
    console.log('✅ Real process management available');
    
    // Initialize desktop-specific features
    initializeDesktopFeatures();
  } else {
    console.log('🌐 DreamBuild Web Application Mode');
    console.log('⚠️ Limited to browser capabilities');
  }
});

function initializeDesktopFeatures() {
  // Set up desktop-specific event listeners
  if (window.electronAPI.onWindowStateChange) {
    window.electronAPI.onWindowStateChange((event, state) => {
      console.log('Window state changed:', state);
    });
  }
  
  if (window.electronAPI.onSystemInfoUpdate) {
    window.electronAPI.onSystemInfoUpdate((event, info) => {
      console.log('System info updated:', info);
    });
  }
  
  // Initialize real system integration
  initializeRealSystemIntegration();
}

function initializeRealSystemIntegration() {
  // Replace simulated services with real ones
  if (window.desktopAPI) {
    // Override the desktop integration service with real implementations
    window.realSystemIntegration = {
      // Real terminal execution
      executeCommand: async (command) => {
        const result = await window.desktopAPI.executeRealCommand(command);
        return result;
      },
      
      // Real file operations
      readFile: async (filePath) => {
        const result = await window.desktopAPI.readRealFile(filePath);
        return result;
      },
      
      writeFile: async (filePath, content) => {
        const result = await window.desktopAPI.writeRealFile(filePath, content);
        return result;
      },
      
      // Real process management
      getProcesses: async () => {
        const result = await window.desktopAPI.getRealProcesses();
        return result;
      },
      
      killProcess: async (pid) => {
        const result = await window.desktopAPI.killRealProcess(pid);
        return result;
      },
      
      // Real system information
      getSystemInfo: async () => {
        const result = await window.desktopAPI.getRealSystemInfo();
        return result;
      },
      
      // Real directory operations
      listDirectory: async (dirPath) => {
        const result = await window.desktopAPI.listRealDirectory(dirPath);
        return result;
      },
      
      createDirectory: async (dirPath) => {
        const result = await window.desktopAPI.createRealDirectory(dirPath);
        return result;
      },
      
      deleteFile: async (filePath) => {
        const result = await window.desktopAPI.deleteRealFile(filePath);
        return result;
      },
      
      getFileStats: async (filePath) => {
        const result = await window.desktopAPI.getRealFileStats(filePath);
        return result;
      }
    };
    
    console.log('✅ Real system integration initialized');
    console.log('✅ DreamBuild now has full computer access');
  }
}
