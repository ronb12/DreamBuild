# DreamBuild AI Terminal Setup Guide

## 🚀 Overview

DreamBuild AI now includes a powerful terminal system that provides:
- **Real-time terminal access** via WebSocket
- **Secure command execution** with built-in security measures
- **File system integration** for seamless development
- **Project synchronization** between browser and filesystem
- **Multi-session support** with session management

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

## 🛠️ Installation

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Setup

Create a `.env` file in the root directory:

```env
# Development
NODE_ENV=development
PORT=3001

# Production (update with your domain)
NODE_ENV=production
PORT=3001
```

### 3. Start the Development Server

```bash
# Start both frontend and backend
npm run dev:full

# Or start them separately:
# Frontend only
npm run dev

# Backend only  
npm start
```

## 🔧 Configuration

### Terminal Server Configuration

The terminal server runs on port 3001 by default. You can configure this in:

- **Environment variables**: Set `PORT` in your `.env` file
- **Command line**: `PORT=3001 npm start`

### Security Configuration

The security service includes:

- **Command whitelisting**: Only allowed commands can be executed
- **Path traversal protection**: Prevents access outside project directory
- **File type restrictions**: Blocks dangerous file extensions
- **Rate limiting**: Prevents command spam
- **Input sanitization**: Cleans user input

### File System Configuration

- **Base directory**: `./projects/` (relative to server root)
- **Max file size**: 10MB per file
- **Allowed extensions**: Web files, code files, documents, images
- **Blocked extensions**: Executables, system files

## 🌐 WebSocket API

### Connection

```javascript
const ws = new WebSocket('ws://localhost:3001');
```

### Message Types

#### Terminal Input
```json
{
  "type": "terminal_input",
  "command": "ls -la",
  "sessionId": "session_123"
}
```

#### Terminal Resize
```json
{
  "type": "terminal_resize",
  "cols": 80,
  "rows": 24,
  "sessionId": "session_123"
}
```

#### File Operations
```json
{
  "type": "file_operation",
  "operation": "read|write|list|create_directory|delete",
  "path": "src/components/App.jsx",
  "content": "file content (for write operations)",
  "sessionId": "session_123"
}
```

#### Project Sync
```json
{
  "type": "project_sync",
  "projectId": "project_456",
  "files": {
    "index.html": "<!DOCTYPE html>...",
    "style.css": "body { margin: 0; }",
    "script.js": "console.log('Hello World');"
  },
  "sessionId": "session_123"
}
```

## 🔒 Security Features

### Command Restrictions

**Blocked Commands:**
- System commands: `rm -rf /`, `format`, `fdisk`
- Network commands: `nc -l`, `python -m http.server`
- Process commands: `killall`, `pkill`, `kill -9`
- File system: `chmod 777`, `sudo rm`, `chown -R`
- Package managers: `npm uninstall -g`, `pip uninstall`
- Git dangerous: `git reset --hard`, `git push --force`
- Shell commands: `exec`, `eval`, `source /dev/stdin`

**Allowed Commands:**
- File operations: `ls`, `pwd`, `cd`, `mkdir`, `touch`, `cat`
- Text operations: `echo`, `grep`, `sed`, `awk`, `sort`
- Git safe: `git status`, `git log`, `git diff`, `git add`, `git commit`
- Node.js: `npm install`, `npm run`, `node`, `npx`
- Python: `python`, `pip install`, `pip list`
- Build tools: `make`, `gcc`, `go build`, `cargo build`

### File System Security

- **Path traversal protection**: Blocks `../` and absolute paths
- **Extension filtering**: Blocks executables and system files
- **Size limits**: 10MB max file size
- **Directory isolation**: All operations within `./projects/`

### Rate Limiting

- **100 requests per minute** per IP address
- **Automatic reconnection** with exponential backoff
- **Session limits**: Maximum 50 concurrent sessions

## 📁 Project Structure

```
DreamBuild/
├── server/
│   ├── index.js              # Main server
│   └── services/
│       ├── terminal.js       # Terminal management
│       ├── filesystem.js     # File operations
│       └── security.js       # Security measures
├── src/
│   ├── components/
│   │   ├── Terminal.jsx      # Terminal UI component
│   │   ├── FileManager.jsx   # File management
│   │   ├── CodeEditor.jsx    # Code editor
│   │   ├── Preview.jsx       # Live preview
│   │   └── AIPrompt.jsx      # AI prompt interface
│   ├── services/
│   │   └── websocket.js      # WebSocket client
│   └── pages/
│       └── AIBuilder.jsx     # Main builder interface
├── projects/                 # Project files (auto-created)
└── package.json
```

## 🚀 Deployment

### Development

```bash
npm run dev:full
```

### Production

```bash
# Build frontend
npm run build

# Start production server
npm start
```

### Docker (Optional)

```dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3001
CMD ["npm", "start"]
```

## 🔧 Troubleshooting

### Common Issues

1. **WebSocket Connection Failed**
   - Check if backend server is running on port 3001
   - Verify firewall settings
   - Check browser console for errors

2. **Terminal Not Responding**
   - Check terminal session status
   - Verify command is in allowed list
   - Check security logs

3. **File Operations Failing**
   - Verify file path is valid
   - Check file size limits
   - Ensure directory exists

4. **Commands Blocked**
   - Check command against security whitelist
   - Use alternative commands
   - Contact admin for command approval

### Debug Mode

Enable debug logging:

```bash
DEBUG=terminal,security,filesystem npm start
```

### Health Check

Check server status:

```bash
curl http://localhost:3001/api/health
```

## 📊 Monitoring

### Terminal Sessions

```bash
curl http://localhost:3001/api/terminal/sessions
```

### Server Stats

The server provides real-time statistics:
- Active terminal sessions
- Total sessions created
- File operations count
- Security violations
- Memory usage

## 🔄 Updates

To update the terminal system:

1. Pull latest changes
2. Install new dependencies: `npm install`
3. Restart server: `npm start`

## 📞 Support

For issues or questions:
- Check the troubleshooting section
- Review server logs
- Open an issue on GitHub
- Contact Bradley Virtual Solutions, LLC

---

**Built with ❤️ by Bradley Virtual Solutions, LLC**

