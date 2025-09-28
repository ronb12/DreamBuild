// electron/main.js
const { app, BrowserWindow, ipcMain, shell } = require('electron');
const path = require('path');
const { exec } = require('child_process');
const fs = require('fs').promises;

let mainWindow;

function createWindow() {
  // Create the browser window
  mainWindow = new BrowserWindow({
    width: 1400,
    height: 900,
    minWidth: 1200,
    minHeight: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false,
      preload: path.join(__dirname, 'preload.cjs')
    },
    icon: path.join(__dirname, '../public/icons/icon.png'),
    titleBarStyle: 'default',
    show: false
  });

  // Load the app
  const isDev = process.env.NODE_ENV === 'development';
  
  if (isDev) {
    mainWindow.loadURL('http://localhost:3000');
    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadFile(path.join(__dirname, '../dist/index.html'));
  }

  // Show window when ready
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  // Handle window closed
  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  // Handle external links
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: 'deny' };
  });
}

// App event handlers
app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// IPC handlers for system integration
ipcMain.handle('execute-command', async (event, command) => {
  return new Promise((resolve) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        resolve({
          success: false,
          error: error.message,
          output: stderr
        });
      } else {
        resolve({
          success: true,
          output: stdout,
          error: null
        });
      }
    });
  });
});

ipcMain.handle('read-file', async (event, filePath) => {
  try {
    const content = await fs.readFile(filePath, 'utf8');
    return {
      success: true,
      content,
      error: null
    };
  } catch (error) {
    return {
      success: false,
      content: null,
      error: error.message
    };
  }
});

ipcMain.handle('write-file', async (event, filePath, content) => {
  try {
    await fs.writeFile(filePath, content, 'utf8');
    return {
      success: true,
      error: null
    };
  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
});

ipcMain.handle('get-processes', async () => {
  return new Promise((resolve) => {
    exec('ps aux', (error, stdout) => {
      if (error) {
        resolve({
          success: false,
          processes: [],
          error: error.message
        });
      } else {
        const processes = stdout.split('\n').slice(1).map(line => {
          const parts = line.trim().split(/\s+/);
          return {
            pid: parts[1],
            user: parts[0],
            cpu: parts[2],
            mem: parts[3],
            command: parts.slice(10).join(' ')
          };
        }).filter(p => p.pid);
        
        resolve({
          success: true,
          processes,
          error: null
        });
      }
    });
  });
});

ipcMain.handle('kill-process', async (event, pid) => {
  return new Promise((resolve) => {
    exec(`kill ${pid}`, (error) => {
      if (error) {
        resolve({
          success: false,
          error: error.message
        });
      } else {
        resolve({
          success: true,
          error: null
        });
      }
    });
  });
});

ipcMain.handle('get-system-info', async () => {
  const os = require('os');
  
  return {
    success: true,
    info: {
      platform: os.platform(),
      arch: os.arch(),
      release: os.release(),
      totalMemory: os.totalmem(),
      freeMemory: os.freemem(),
      cpus: os.cpus(),
      uptime: os.uptime(),
      hostname: os.hostname(),
      userInfo: os.userInfo()
    }
  };
});

ipcMain.handle('list-directory', async (event, dirPath) => {
  try {
    const files = await fs.readdir(dirPath, { withFileTypes: true });
    const fileList = files.map(file => ({
      name: file.name,
      isDirectory: file.isDirectory(),
      path: path.join(dirPath, file.name)
    }));
    
    return {
      success: true,
      files: fileList,
      error: null
    };
  } catch (error) {
    return {
      success: false,
      files: [],
      error: error.message
    };
  }
});

ipcMain.handle('create-directory', async (event, dirPath) => {
  try {
    await fs.mkdir(dirPath, { recursive: true });
    return {
      success: true,
      error: null
    };
  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
});

ipcMain.handle('delete-file', async (event, filePath) => {
  try {
    const stats = await fs.stat(filePath);
    if (stats.isDirectory()) {
      await fs.rmdir(filePath, { recursive: true });
    } else {
      await fs.unlink(filePath);
    }
    return {
      success: true,
      error: null
    };
  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
});

ipcMain.handle('get-file-stats', async (event, filePath) => {
  try {
    const stats = await fs.stat(filePath);
    return {
      success: true,
      stats: {
        size: stats.size,
        isFile: stats.isFile(),
        isDirectory: stats.isDirectory(),
        mtime: stats.mtime,
        ctime: stats.ctime,
        mode: stats.mode
      },
      error: null
    };
  } catch (error) {
    return {
      success: false,
      stats: null,
      error: error.message
    };
  }
});

// Handle app protocol for deep linking
app.setAsDefaultProtocolClient('dreambuild');

// Handle protocol URLs
app.on('open-url', (event, url) => {
  event.preventDefault();
  // Handle deep link URLs
  console.log('Deep link received:', url);
});
