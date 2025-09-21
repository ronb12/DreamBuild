import express from 'express';
import { createServer } from 'http';
import { WebSocketServer } from 'ws';
import cors from 'cors';
import helmet from 'helmet';
import { RateLimiterMemory } from 'rate-limiter-flexible';
import path from 'path';
import { fileURLToPath } from 'url';
import { TerminalService } from './services/terminal.js';
import { FileSystemService } from './services/filesystem.js';
import { SecurityService } from './services/security.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const server = createServer(app);
const wss = new WebSocketServer({ server });

// Security middleware
app.use(helmet({
  contentSecurityPolicy: false, // Disable for development
  crossOriginEmbedderPolicy: false
}));

// CORS configuration
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://dreambuild-2024-app.web.app', 'https://dreambuild-2024-app.firebaseapp.com']
    : ['http://localhost:3000', 'http://localhost:5173'],
  credentials: true
}));

// Rate limiting
const rateLimiter = new RateLimiterMemory({
  keyPrefix: 'terminal',
  points: 100, // Number of requests
  duration: 60, // Per 60 seconds
});

// Middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.static(path.join(__dirname, '../dist')));

// Initialize services
const terminalService = new TerminalService();
const fileSystemService = new FileSystemService();
const securityService = new SecurityService();

// WebSocket connection handling
wss.on('connection', async (ws, request) => {
  console.log('🔌 New WebSocket connection established');
  
  try {
    // Rate limiting check
    const clientIP = request.socket.remoteAddress;
    await rateLimiter.consume(clientIP);
    
    // Create terminal session
    const sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const terminal = await terminalService.createTerminal(sessionId);
    
    console.log(`✅ Terminal session created: ${sessionId}`);
    
    // Send session info to client
    ws.send(JSON.stringify({
      type: 'session_created',
      sessionId,
      message: 'Terminal session established'
    }));
    
    // Handle terminal output
    terminal.on('data', (data) => {
      ws.send(JSON.stringify({
        type: 'terminal_output',
        sessionId,
        data: data.toString()
      }));
    });
    
    // Handle terminal exit
    terminal.on('exit', (code) => {
      console.log(`❌ Terminal session ${sessionId} exited with code: ${code}`);
      ws.send(JSON.stringify({
        type: 'terminal_exit',
        sessionId,
        code
      }));
    });
    
    // Handle incoming messages
    ws.on('message', async (message) => {
      try {
        const parsed = JSON.parse(message.toString());
        
        switch (parsed.type) {
          case 'terminal_input':
            // Security check for commands
            if (securityService.isCommandAllowed(parsed.command)) {
              terminal.write(parsed.command);
            } else {
              ws.send(JSON.stringify({
                type: 'terminal_error',
                sessionId,
                error: 'Command not allowed for security reasons'
              }));
            }
            break;
            
          case 'terminal_resize':
            terminal.resize(parsed.cols, parsed.rows);
            break;
            
          case 'file_operation':
            await handleFileOperation(ws, parsed, sessionId);
            break;
            
          case 'project_sync':
            await handleProjectSync(ws, parsed, sessionId);
            break;
            
          default:
            console.log('Unknown message type:', parsed.type);
        }
      } catch (error) {
        console.error('Error processing message:', error);
        ws.send(JSON.stringify({
          type: 'error',
          sessionId,
          error: 'Invalid message format'
        }));
      }
    });
    
    // Handle file operations
    async function handleFileOperation(ws, data, sessionId) {
      try {
        const { operation, path: filePath, content } = data;
        
        switch (operation) {
          case 'read':
            const fileContent = await fileSystemService.readFile(filePath);
            ws.send(JSON.stringify({
              type: 'file_content',
              sessionId,
              path: filePath,
              content: fileContent
            }));
            break;
            
          case 'write':
            await fileSystemService.writeFile(filePath, content);
            ws.send(JSON.stringify({
              type: 'file_saved',
              sessionId,
              path: filePath
            }));
            break;
            
          case 'list':
            const files = await fileSystemService.listFiles(filePath);
            ws.send(JSON.stringify({
              type: 'file_list',
              sessionId,
              path: filePath,
              files
            }));
            break;
            
          case 'create_directory':
            await fileSystemService.createDirectory(filePath);
            ws.send(JSON.stringify({
              type: 'directory_created',
              sessionId,
              path: filePath
            }));
            break;
            
          case 'delete':
            await fileSystemService.deleteFile(filePath);
            ws.send(JSON.stringify({
              type: 'file_deleted',
              sessionId,
              path: filePath
            }));
            break;
        }
      } catch (error) {
        ws.send(JSON.stringify({
          type: 'file_error',
          sessionId,
          error: error.message
        }));
      }
    }
    
    // Handle project synchronization
    async function handleProjectSync(ws, data, sessionId) {
      try {
        const { projectId, files } = data;
        
        // Save project files to filesystem
        for (const [filename, content] of Object.entries(files)) {
          const filePath = path.join(__dirname, '../projects', projectId, filename);
          await fileSystemService.writeFile(filePath, content);
        }
        
        ws.send(JSON.stringify({
          type: 'project_synced',
          sessionId,
          projectId
        }));
        
        console.log(`📁 Project ${projectId} synchronized with filesystem`);
      } catch (error) {
        ws.send(JSON.stringify({
          type: 'sync_error',
          sessionId,
          error: error.message
        }));
      }
    }
    
    // Handle connection close
    ws.on('close', () => {
      console.log(`🔌 WebSocket connection closed for session: ${sessionId}`);
      terminalService.destroyTerminal(sessionId);
    });
    
    // Handle errors
    ws.on('error', (error) => {
      console.error(`❌ WebSocket error for session ${sessionId}:`, error);
      terminalService.destroyTerminal(sessionId);
    });
    
  } catch (error) {
    console.error('❌ Error establishing WebSocket connection:', error);
    ws.close(1011, 'Server error');
  }
});

// API Routes
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

app.get('/api/terminal/sessions', (req, res) => {
  res.json({
    activeSessions: terminalService.getActiveSessions(),
    totalSessions: terminalService.getTotalSessions()
  });
});

// Serve React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error('❌ Server error:', error);
  res.status(500).json({ 
    error: 'Internal server error',
    message: process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'
  });
});

// Start server
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`🚀 DreamBuild Terminal Server running on port ${PORT}`);
  console.log(`📡 WebSocket server ready for connections`);
  console.log(`🔒 Security measures active`);
  console.log(`📁 File system integration enabled`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('🛑 SIGTERM received, shutting down gracefully');
  server.close(() => {
    terminalService.shutdown();
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log('🛑 SIGINT received, shutting down gracefully');
  server.close(() => {
    terminalService.shutdown();
    process.exit(0);
  });
});

