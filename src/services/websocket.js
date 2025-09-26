class WebSocketService {
  constructor() {
    this.ws = null;
    this.reconnectAttempts = 0;
    this.maxReconnectAttempts = 5;
    this.reconnectDelay = 1000;
    this.maxReconnectDelay = 10000;
    this.listeners = new Map();
    this.isConnecting = false;
    this.sessionId = null;
    this.heartbeatInterval = null;
    this.heartbeatTimeout = null;
  }

  connect() {
    if (this.isConnecting || (this.ws && this.ws.readyState === WebSocket.OPEN)) {
      return Promise.resolve();
    }

    this.isConnecting = true;

    return new Promise((resolve, reject) => {
      try {
        const wsUrl = this.getWebSocketUrl();
        this.ws = new WebSocket(wsUrl);

        this.ws.onopen = () => {

          this.isConnecting = false;
          this.reconnectAttempts = 0;
          this.startHeartbeat();
          this.emit('connected');
          resolve();
        };

        this.ws.onmessage = (event) => {
          try {
            const message = JSON.parse(event.data);
            this.handleMessage(message);
          } catch (error) {
            console.error('❌ Error parsing WebSocket message:', error);
            this.emit('error', { type: 'parse_error', error: error.message });
          }
        };

        this.ws.onclose = (event) => {

          this.isConnecting = false;
          this.stopHeartbeat();
          this.emit('disconnected', { code: event.code, reason: event.reason });
          
          if (event.code !== 1000 && this.reconnectAttempts < this.maxReconnectAttempts) {
            this.scheduleReconnect();
          }
        };

        this.ws.onerror = (error) => {
          console.error('❌ WebSocket error:', error);
          this.isConnecting = false;
          this.emit('error', { type: 'connection_error', error });
          reject(error);
        };

        // Set connection timeout
        setTimeout(() => {
          if (this.isConnecting) {
            this.isConnecting = false;
            this.ws.close();
            reject(new Error('Connection timeout'));
          }
        }, 10000);

      } catch (error) {
        this.isConnecting = false;
        console.error('❌ Failed to create WebSocket connection:', error);
        reject(error);
      }
    });
  }

  disconnect() {
    this.stopHeartbeat();
    if (this.ws) {
      this.ws.close(1000, 'Client disconnect');
      this.ws = null;
    }
    this.sessionId = null;
    this.emit('disconnected', { code: 1000, reason: 'Client disconnect' });
  }

  send(message) {
    if (!this.isConnected()) {
      console.warn('⚠️ WebSocket not connected, message not sent:', message);
      return false;
    }

    try {
      const messageStr = typeof message === 'string' ? message : JSON.stringify(message);
      this.ws.send(messageStr);
      return true;
    } catch (error) {
      console.error('❌ Error sending WebSocket message:', error);
      this.emit('error', { type: 'send_error', error: error.message });
      return false;
    }
  }

  sendTerminalInput(command) {
    return this.send({
      type: 'terminal_input',
      command,
      sessionId: this.sessionId
    });
  }

  sendTerminalResize(cols, rows) {
    return this.send({
      type: 'terminal_resize',
      cols,
      rows,
      sessionId: this.sessionId
    });
  }

  sendFileOperation(operation, filePath, content = null) {
    return this.send({
      type: 'file_operation',
      operation,
      path: filePath,
      content,
      sessionId: this.sessionId
    });
  }

  sendProjectSync(projectId, files) {
    return this.send({
      type: 'project_sync',
      projectId,
      files,
      sessionId: this.sessionId
    });
  }

  handleMessage(message) {
    switch (message.type) {
      case 'session_created':
        this.sessionId = message.sessionId;
        this.emit('session_created', message);
        break;
        
      case 'terminal_output':
        this.emit('terminal_output', message);
        break;
        
      case 'terminal_exit':
        this.emit('terminal_exit', message);
        break;
        
      case 'terminal_error':
        this.emit('terminal_error', message);
        break;
        
      case 'file_content':
        this.emit('file_content', message);
        break;
        
      case 'file_saved':
        this.emit('file_saved', message);
        break;
        
      case 'file_list':
        this.emit('file_list', message);
        break;
        
      case 'directory_created':
        this.emit('directory_created', message);
        break;
        
      case 'file_deleted':
        this.emit('file_deleted', message);
        break;
        
      case 'file_error':
        this.emit('file_error', message);
        break;
        
      case 'project_synced':
        this.emit('project_synced', message);
        break;
        
      case 'sync_error':
        this.emit('sync_error', message);
        break;
        
      case 'error':
        this.emit('error', message);
        break;
        
      case 'pong':
        // Heartbeat response
        break;
        
      default:

        this.emit('unknown_message', message);
    }
  }

  scheduleReconnect() {
    const delay = Math.min(
      this.reconnectDelay * Math.pow(2, this.reconnectAttempts),
      this.maxReconnectDelay
    );
    
    console.log(`🔄 Scheduling reconnect in ${delay}ms (attempt ${this.reconnectAttempts + 1}/${this.maxReconnectAttempts})`);
    
    setTimeout(() => {
      this.reconnectAttempts++;
      this.connect().catch(error => {
        console.error('❌ Reconnect failed:', error);
      });
    }, delay);
  }

  startHeartbeat() {
    this.heartbeatInterval = setInterval(() => {
      if (this.isConnected()) {
        this.send({ type: 'ping' });
        
        // Set timeout for pong response
        this.heartbeatTimeout = setTimeout(() => {

          this.ws.close();
        }, 5000);
      }
    }, 30000); // Send ping every 30 seconds
  }

  stopHeartbeat() {
    if (this.heartbeatInterval) {
      clearInterval(this.heartbeatInterval);
      this.heartbeatInterval = null;
    }
    
    if (this.heartbeatTimeout) {
      clearTimeout(this.heartbeatTimeout);
      this.heartbeatTimeout = null;
    }
  }

  getWebSocketUrl() {
    if (process.env.NODE_ENV === 'production') {
      // In production, use your deployed WebSocket server
      return 'wss://your-domain.com';
    } else {
      // In development, use local WebSocket server
      return 'ws://localhost:3001';
    }
  }

  isConnected() {
    return this.ws && this.ws.readyState === WebSocket.OPEN;
  }

  getConnectionState() {
    if (!this.ws) return 'DISCONNECTED';
    
    switch (this.ws.readyState) {
      case WebSocket.CONNECTING:
        return 'CONNECTING';
      case WebSocket.OPEN:
        return 'CONNECTED';
      case WebSocket.CLOSING:
        return 'CLOSING';
      case WebSocket.CLOSED:
        return 'DISCONNECTED';
      default:
        return 'UNKNOWN';
    }
  }

  getSessionId() {
    return this.sessionId;
  }

  getStats() {
    return {
      connectionState: this.getConnectionState(),
      sessionId: this.sessionId,
      reconnectAttempts: this.reconnectAttempts,
      maxReconnectAttempts: this.maxReconnectAttempts,
      listeners: this.listeners.size
    };
  }

  // Event system
  on(event, callback) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }
    this.listeners.get(event).push(callback);
  }

  off(event, callback) {
    if (this.listeners.has(event)) {
      const callbacks = this.listeners.get(event);
      const index = callbacks.indexOf(callback);
      if (index > -1) {
        callbacks.splice(index, 1);
      }
    }
  }

  emit(event, data) {
    if (this.listeners.has(event)) {
      this.listeners.get(event).forEach(callback => {
        try {
          callback(data);
        } catch (error) {
          console.error(`❌ Error in event listener for ${event}:`, error);
        }
      });
    }
  }

  // File operations
  async readFile(filePath) {
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        reject(new Error('File read timeout'));
      }, 10000);

      const onFileContent = (message) => {
        clearTimeout(timeout);
        this.off('file_content', onFileContent);
        this.off('file_error', onFileError);
        resolve(message.content);
      };

      const onFileError = (message) => {
        clearTimeout(timeout);
        this.off('file_content', onFileContent);
        this.off('file_error', onFileError);
        reject(new Error(message.error));
      };

      this.on('file_content', onFileContent);
      this.on('file_error', onFileError);

      this.sendFileOperation('read', filePath);
    });
  }

  async writeFile(filePath, content) {
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        reject(new Error('File write timeout'));
      }, 10000);

      const onFileSaved = (message) => {
        clearTimeout(timeout);
        this.off('file_saved', onFileSaved);
        this.off('file_error', onFileError);
        resolve(message);
      };

      const onFileError = (message) => {
        clearTimeout(timeout);
        this.off('file_saved', onFileSaved);
        this.off('file_error', onFileError);
        reject(new Error(message.error));
      };

      this.on('file_saved', onFileSaved);
      this.on('file_error', onFileError);

      this.sendFileOperation('write', filePath, content);
    });
  }

  async listFiles(dirPath = '.') {
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        reject(new Error('File list timeout'));
      }, 10000);

      const onFileList = (message) => {
        clearTimeout(timeout);
        this.off('file_list', onFileList);
        this.off('file_error', onFileError);
        resolve(message.files);
      };

      const onFileError = (message) => {
        clearTimeout(timeout);
        this.off('file_list', onFileList);
        this.off('file_error', onFileError);
        reject(new Error(message.error));
      };

      this.on('file_list', onFileList);
      this.on('file_error', onFileError);

      this.sendFileOperation('list', dirPath);
    });
  }

  async createDirectory(dirPath) {
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        reject(new Error('Directory creation timeout'));
      }, 10000);

      const onDirectoryCreated = (message) => {
        clearTimeout(timeout);
        this.off('directory_created', onDirectoryCreated);
        this.off('file_error', onFileError);
        resolve(message);
      };

      const onFileError = (message) => {
        clearTimeout(timeout);
        this.off('directory_created', onDirectoryCreated);
        this.off('file_error', onFileError);
        reject(new Error(message.error));
      };

      this.on('directory_created', onDirectoryCreated);
      this.on('file_error', onFileError);

      this.sendFileOperation('create_directory', dirPath);
    });
  }

  async deleteFile(filePath) {
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        reject(new Error('File deletion timeout'));
      }, 10000);

      const onFileDeleted = (message) => {
        clearTimeout(timeout);
        this.off('file_deleted', onFileDeleted);
        this.off('file_error', onFileError);
        resolve(message);
      };

      const onFileError = (message) => {
        clearTimeout(timeout);
        this.off('file_deleted', onFileDeleted);
        this.off('file_error', onFileError);
        reject(new Error(message.error));
      };

      this.on('file_deleted', onFileDeleted);
      this.on('file_error', onFileError);

      this.sendFileOperation('delete', filePath);
    });
  }

  async syncProject(projectId, files) {
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        reject(new Error('Project sync timeout'));
      }, 30000);

      const onProjectSynced = (message) => {
        clearTimeout(timeout);
        this.off('project_synced', onProjectSynced);
        this.off('sync_error', onSyncError);
        resolve(message);
      };

      const onSyncError = (message) => {
        clearTimeout(timeout);
        this.off('project_synced', onProjectSynced);
        this.off('sync_error', onSyncError);
        reject(new Error(message.error));
      };

      this.on('project_synced', onProjectSynced);
      this.on('sync_error', onSyncError);

      this.sendProjectSync(projectId, files);
    });
  }
}

// Create singleton instance
const websocketService = new WebSocketService();

export default websocketService;

