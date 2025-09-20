import { spawn } from 'node-pty';
import os from 'os';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export class TerminalService {
  constructor() {
    this.sessions = new Map();
    this.totalSessions = 0;
    this.maxSessions = 50; // Limit concurrent sessions
  }

  async createTerminal(sessionId, options = {}) {
    // Check session limit
    if (this.sessions.size >= this.maxSessions) {
      throw new Error('Maximum terminal sessions reached');
    }

    // Determine shell based on OS
    const shell = this.getShell();
    const shellArgs = this.getShellArgs();
    
    // Set working directory
    const cwd = options.cwd || path.join(__dirname, '../../projects');
    
    // Terminal options
    const terminalOptions = {
      name: 'xterm-256color',
      cols: options.cols || 80,
      rows: options.rows || 24,
      cwd,
      env: {
        ...process.env,
        TERM: 'xterm-256color',
        COLORTERM: 'truecolor',
        // Add project-specific environment variables
        DREAMBUILD_PROJECT: options.projectId || 'default',
        DREAMBUILD_SESSION: sessionId
      },
      ...options
    };

    try {
      // Create pseudo-terminal
      const ptyProcess = spawn(shell, shellArgs, terminalOptions);
      
      // Store session info
      this.sessions.set(sessionId, {
        process: ptyProcess,
        createdAt: new Date(),
        options: terminalOptions,
        status: 'active'
      });

      this.totalSessions++;
      
      console.log(`✅ Terminal session created: ${sessionId}`);
      console.log(`   Shell: ${shell}`);
      console.log(`   Working directory: ${cwd}`);
      console.log(`   Active sessions: ${this.sessions.size}`);
      
      // Handle process exit
      ptyProcess.on('exit', (code, signal) => {
        console.log(`❌ Terminal session ${sessionId} exited with code: ${code}, signal: ${signal}`);
        this.destroyTerminal(sessionId);
      });

      return ptyProcess;
    } catch (error) {
      console.error(`❌ Failed to create terminal session ${sessionId}:`, error);
      throw error;
    }
  }

  destroyTerminal(sessionId) {
    const session = this.sessions.get(sessionId);
    if (session) {
      try {
        // Kill the process if it's still running
        if (session.process && !session.process.killed) {
          session.process.kill();
        }
        
        this.sessions.delete(sessionId);
        console.log(`🗑️  Terminal session destroyed: ${sessionId}`);
        console.log(`   Active sessions: ${this.sessions.size}`);
      } catch (error) {
        console.error(`❌ Error destroying terminal session ${sessionId}:`, error);
      }
    }
  }

  getTerminal(sessionId) {
    const session = this.sessions.get(sessionId);
    return session ? session.process : null;
  }

  getActiveSessions() {
    return Array.from(this.sessions.keys());
  }

  getTotalSessions() {
    return this.totalSessions;
  }

  getSessionInfo(sessionId) {
    const session = this.sessions.get(sessionId);
    if (!session) return null;

    return {
      sessionId,
      createdAt: session.createdAt,
      status: session.status,
      options: session.options,
      uptime: Date.now() - session.createdAt.getTime()
    };
  }

  resizeTerminal(sessionId, cols, rows) {
    const session = this.sessions.get(sessionId);
    if (session && session.process) {
      try {
        session.process.resize(cols, rows);
        console.log(`📐 Terminal ${sessionId} resized to ${cols}x${rows}`);
      } catch (error) {
        console.error(`❌ Failed to resize terminal ${sessionId}:`, error);
      }
    }
  }

  writeToTerminal(sessionId, data) {
    const session = this.sessions.get(sessionId);
    if (session && session.process) {
      try {
        session.process.write(data);
      } catch (error) {
        console.error(`❌ Failed to write to terminal ${sessionId}:`, error);
      }
    }
  }

  getShell() {
    const platform = os.platform();
    
    switch (platform) {
      case 'win32':
        return process.env.COMSPEC || 'cmd.exe';
      case 'darwin':
        return process.env.SHELL || '/bin/zsh';
      case 'linux':
        return process.env.SHELL || '/bin/bash';
      default:
        return '/bin/sh';
    }
  }

  getShellArgs() {
    const platform = os.platform();
    
    switch (platform) {
      case 'win32':
        return [];
      case 'darwin':
      case 'linux':
        return ['-l']; // Login shell
      default:
        return [];
    }
  }

  // Create project-specific terminal
  async createProjectTerminal(sessionId, projectId, options = {}) {
    const projectPath = path.join(__dirname, '../../projects', projectId);
    
    return this.createTerminal(sessionId, {
      ...options,
      projectId,
      cwd: projectPath
    });
  }

  // Execute command in terminal
  async executeCommand(sessionId, command, timeout = 30000) {
    const session = this.sessions.get(sessionId);
    if (!session) {
      throw new Error('Terminal session not found');
    }

    return new Promise((resolve, reject) => {
      let output = '';
      let error = '';
      let resolved = false;

      // Set timeout
      const timer = setTimeout(() => {
        if (!resolved) {
          resolved = true;
          reject(new Error('Command timeout'));
        }
      }, timeout);

      // Handle output
      const onData = (data) => {
        output += data.toString();
      };

      // Handle exit
      const onExit = (code) => {
        if (!resolved) {
          resolved = true;
          clearTimeout(timer);
          session.process.removeListener('data', onData);
          session.process.removeListener('exit', onExit);
          
          if (code === 0) {
            resolve({ output, code });
          } else {
            reject(new Error(`Command failed with exit code ${code}: ${error || output}`));
          }
        }
      };

      session.process.on('data', onData);
      session.process.on('exit', onExit);
      
      // Write command
      session.process.write(command + '\n');
    });
  }

  // Get terminal statistics
  getStats() {
    const sessions = Array.from(this.sessions.values());
    
    return {
      activeSessions: this.sessions.size,
      totalSessions: this.totalSessions,
      maxSessions: this.maxSessions,
      averageUptime: sessions.reduce((acc, session) => 
        acc + (Date.now() - session.createdAt.getTime()), 0) / sessions.length,
      platform: os.platform(),
      shell: this.getShell()
    };
  }

  // Shutdown all terminals
  shutdown() {
    console.log('🛑 Shutting down all terminal sessions...');
    
    for (const [sessionId, session] of this.sessions) {
      try {
        if (session.process && !session.process.killed) {
          session.process.kill();
        }
      } catch (error) {
        console.error(`❌ Error killing terminal session ${sessionId}:`, error);
      }
    }
    
    this.sessions.clear();
    console.log('✅ All terminal sessions shut down');
  }
}

