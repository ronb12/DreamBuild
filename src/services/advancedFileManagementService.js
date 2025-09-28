// Advanced File Management Service
// Provides comprehensive file management capabilities for DreamBuild

class AdvancedFileManagementService {
  constructor() {
    this.files = new Map();
    this.fileHistory = new Map();
    this.collaborators = new Map();
    this.fileComments = new Map();
    this.fileWatchers = new Set();
    this.autoSaveInterval = null;
    this.maxFileSize = 100 * 1024 * 1024; // 100MB
    this.supportedFileTypes = [
      'js', 'jsx', 'ts', 'tsx', 'py', 'java', 'cpp', 'c', 'go', 'rs', 'php', 'rb',
      'css', 'scss', 'sass', 'html', 'htm', 'xml', 'json', 'yaml', 'yml', 'md', 'txt',
      'pdf', 'doc', 'docx', 'jpg', 'jpeg', 'png', 'gif', 'svg', 'webp',
      'mp4', 'avi', 'mov', 'mp3', 'wav', 'zip', 'rar', '7z', 'tar', 'gz'
    ];
    
    this.initializeService();
  }

  // Initialize the service
  initializeService() {
    this.loadFromStorage();
    this.startAutoSave();
    this.setupFileWatchers();
  }

  // File Operations
  async createFile(fileName, fileType, content = '', parentPath = '/') {
    try {
      const fileId = this.generateFileId();
      const filePath = this.joinPath(parentPath, fileName);
      
      // Validate file type
      if (!this.isValidFileType(fileType)) {
        throw new Error(`Unsupported file type: ${fileType}`);
      }

      // Check if file already exists
      if (this.files.has(filePath)) {
        throw new Error(`File already exists: ${filePath}`);
      }

      const file = {
        id: fileId,
        name: fileName,
        path: filePath,
        type: 'file',
        fileType: fileType,
        content: content,
        size: content.length,
        created: new Date().toISOString(),
        modified: new Date().toISOString(),
        author: this.getCurrentUser(),
        permissions: {
          read: true,
          write: true,
          delete: true,
          share: true
        },
        metadata: {
          encoding: 'utf-8',
          lineEndings: 'lf',
          tabSize: 2,
          insertSpaces: true
        },
        tags: [],
        isFavorite: false,
        isPinned: false,
        version: 1
      };

      this.files.set(filePath, file);
      this.addToHistory(file, 'create', `Created file: ${fileName}`);
      this.saveToStorage();
      this.notifyWatchers('fileCreated', file);

      return file;
    } catch (error) {
      console.error('Error creating file:', error);
      throw error;
    }
  }

  async createFolder(folderName, parentPath = '/') {
    try {
      const folderId = this.generateFileId();
      const folderPath = this.joinPath(parentPath, folderName);
      
      // Check if folder already exists
      if (this.files.has(folderPath)) {
        throw new Error(`Folder already exists: ${folderPath}`);
      }

      const folder = {
        id: folderId,
        name: folderName,
        path: folderPath,
        type: 'folder',
        children: [],
        created: new Date().toISOString(),
        modified: new Date().toISOString(),
        author: this.getCurrentUser(),
        permissions: {
          read: true,
          write: true,
          delete: true,
          share: true
        },
        tags: [],
        isFavorite: false,
        isPinned: false
      };

      this.files.set(folderPath, folder);
      this.addToHistory(folder, 'create', `Created folder: ${folderName}`);
      this.saveToStorage();
      this.notifyWatchers('folderCreated', folder);

      return folder;
    } catch (error) {
      console.error('Error creating folder:', error);
      throw error;
    }
  }

  async updateFile(filePath, content, options = {}) {
    try {
      const file = this.files.get(filePath);
      if (!file) {
        throw new Error(`File not found: ${filePath}`);
      }

      if (file.type !== 'file') {
        throw new Error(`Cannot update folder: ${filePath}`);
      }

      // Create backup before updating
      const backup = { ...file };
      
      // Update file content
      file.content = content;
      file.size = content.length;
      file.modified = new Date().toISOString();
      file.version = (file.version || 0) + 1;
      
      // Update metadata if provided
      if (options.metadata) {
        file.metadata = { ...file.metadata, ...options.metadata };
      }

      this.files.set(filePath, file);
      this.addToHistory(file, 'update', `Updated file: ${file.name}`, backup);
      this.saveToStorage();
      this.notifyWatchers('fileUpdated', file);

      return file;
    } catch (error) {
      console.error('Error updating file:', error);
      throw error;
    }
  }

  async deleteFile(filePath) {
    try {
      const file = this.files.get(filePath);
      if (!file) {
        throw new Error(`File not found: ${filePath}`);
      }

      // Delete all children if it's a folder
      if (file.type === 'folder' && file.children) {
        for (const childPath of file.children) {
          await this.deleteFile(childPath);
        }
      }

      this.files.delete(filePath);
      this.addToHistory(file, 'delete', `Deleted ${file.type}: ${file.name}`);
      this.saveToStorage();
      this.notifyWatchers('fileDeleted', file);

      return true;
    } catch (error) {
      console.error('Error deleting file:', error);
      throw error;
    }
  }

  async renameFile(filePath, newName) {
    try {
      const file = this.files.get(filePath);
      if (!file) {
        throw new Error(`File not found: ${filePath}`);
      }

      const parentPath = this.getParentPath(filePath);
      const newPath = this.joinPath(parentPath, newName);
      
      // Check if new name already exists
      if (this.files.has(newPath)) {
        throw new Error(`File already exists: ${newPath}`);
      }

      const oldName = file.name;
      file.name = newName;
      file.path = newPath;
      file.modified = new Date().toISOString();

      // Update file in map
      this.files.delete(filePath);
      this.files.set(newPath, file);

      this.addToHistory(file, 'rename', `Renamed ${file.type}: ${oldName} → ${newName}`);
      this.saveToStorage();
      this.notifyWatchers('fileRenamed', { oldPath: filePath, newPath, file });

      return file;
    } catch (error) {
      console.error('Error renaming file:', error);
      throw error;
    }
  }

  async moveFile(filePath, newParentPath) {
    try {
      const file = this.files.get(filePath);
      if (!file) {
        throw new Error(`File not found: ${filePath}`);
      }

      const newPath = this.joinPath(newParentPath, file.name);
      
      // Check if destination already exists
      if (this.files.has(newPath)) {
        throw new Error(`File already exists: ${newPath}`);
      }

      const oldPath = filePath;
      file.path = newPath;
      file.modified = new Date().toISOString();

      // Update file in map
      this.files.delete(filePath);
      this.files.set(newPath, file);

      this.addToHistory(file, 'move', `Moved ${file.type}: ${oldPath} → ${newPath}`);
      this.saveToStorage();
      this.notifyWatchers('fileMoved', { oldPath, newPath, file });

      return file;
    } catch (error) {
      console.error('Error moving file:', error);
      throw error;
    }
  }

  async copyFile(filePath, newPath) {
    try {
      const file = this.files.get(filePath);
      if (!file) {
        throw new Error(`File not found: ${filePath}`);
      }

      // Check if destination already exists
      if (this.files.has(newPath)) {
        throw new Error(`File already exists: ${newPath}`);
      }

      const copiedFile = {
        ...file,
        id: this.generateFileId(),
        path: newPath,
        name: this.getFileName(newPath),
        created: new Date().toISOString(),
        modified: new Date().toISOString(),
        version: 1
      };

      this.files.set(newPath, copiedFile);
      this.addToHistory(copiedFile, 'copy', `Copied ${file.type}: ${file.name} → ${copiedFile.name}`);
      this.saveToStorage();
      this.notifyWatchers('fileCopied', copiedFile);

      return copiedFile;
    } catch (error) {
      console.error('Error copying file:', error);
      throw error;
    }
  }

  // File Search
  async searchFiles(query, options = {}) {
    try {
      const {
        caseSensitive = false,
        wholeWord = false,
        useRegex = false,
        fileTypes = [],
        dateRange = null,
        sizeRange = null,
        tags = [],
        author = null
      } = options;

      const results = [];
      const searchTerm = caseSensitive ? query : query.toLowerCase();

      for (const [path, file] of this.files) {
        let matches = false;

        // Text search
        if (query) {
          const fileName = caseSensitive ? file.name : file.name.toLowerCase();
          const filePath = caseSensitive ? path : path.toLowerCase();
          const fileContent = caseSensitive ? (file.content || '') : (file.content || '').toLowerCase();

          if (useRegex) {
            try {
              const regex = new RegExp(searchTerm, caseSensitive ? 'g' : 'gi');
              matches = regex.test(fileName) || regex.test(filePath) || regex.test(fileContent);
            } catch (e) {
              // Fallback to simple search if regex is invalid
              matches = fileName.includes(searchTerm) || filePath.includes(searchTerm) || fileContent.includes(searchTerm);
            }
          } else {
            if (wholeWord) {
              const wordRegex = new RegExp(`\\b${searchTerm}\\b`, caseSensitive ? 'g' : 'gi');
              matches = wordRegex.test(fileName) || wordRegex.test(filePath) || wordRegex.test(fileContent);
            } else {
              matches = fileName.includes(searchTerm) || filePath.includes(searchTerm) || fileContent.includes(searchTerm);
            }
          }
        } else {
          matches = true; // Return all files if no query
        }

        // Filter by file types
        if (fileTypes.length > 0 && file.type === 'file') {
          const fileExtension = file.name.split('.').pop()?.toLowerCase();
          matches = matches && fileTypes.includes(fileExtension);
        }

        // Filter by date range
        if (dateRange && matches) {
          const fileDate = new Date(file.modified);
          matches = matches && fileDate >= dateRange.start && fileDate <= dateRange.end;
        }

        // Filter by size range
        if (sizeRange && matches && file.type === 'file') {
          matches = matches && file.size >= sizeRange.min && file.size <= sizeRange.max;
        }

        // Filter by tags
        if (tags.length > 0 && matches) {
          matches = matches && tags.some(tag => file.tags.includes(tag));
        }

        // Filter by author
        if (author && matches) {
          matches = matches && file.author === author;
        }

        if (matches) {
          results.push(file);
        }
      }

      // Sort results by relevance
      results.sort((a, b) => {
        // Exact name matches first
        const aExact = a.name.toLowerCase() === query.toLowerCase();
        const bExact = b.name.toLowerCase() === query.toLowerCase();
        if (aExact && !bExact) return -1;
        if (!aExact && bExact) return 1;
        
        // Then by modification date
        return new Date(b.modified) - new Date(a.modified);
      });

      return results;
    } catch (error) {
      console.error('Error searching files:', error);
      throw error;
    }
  }

  // File History Management
  addToHistory(file, action, message, previousVersion = null) {
    const historyEntry = {
      id: this.generateFileId(),
      fileId: file.id,
      filePath: file.path,
      action: action,
      message: message,
      timestamp: new Date().toISOString(),
      author: this.getCurrentUser(),
      version: file.version || 1,
      previousVersion: previousVersion,
      changes: this.calculateChanges(previousVersion, file)
    };

    if (!this.fileHistory.has(file.path)) {
      this.fileHistory.set(file.path, []);
    }
    
    const history = this.fileHistory.get(file.path);
    history.unshift(historyEntry);
    
    // Keep only last 100 entries per file
    if (history.length > 100) {
      history.splice(100);
    }
  }

  getFileHistory(filePath) {
    return this.fileHistory.get(filePath) || [];
  }

  async restoreFileVersion(filePath, versionId) {
    try {
      const history = this.getFileHistory(filePath);
      const version = history.find(h => h.id === versionId);
      
      if (!version) {
        throw new Error(`Version not found: ${versionId}`);
      }

      if (!version.previousVersion) {
        throw new Error(`No previous version available`);
      }

      const file = this.files.get(filePath);
      if (!file) {
        throw new Error(`File not found: ${filePath}`);
      }

      // Restore the file to the previous version
      Object.assign(file, version.previousVersion);
      file.modified = new Date().toISOString();
      file.version = (file.version || 0) + 1;

      this.files.set(filePath, file);
      this.addToHistory(file, 'restore', `Restored to version: ${version.message}`);
      this.saveToStorage();
      this.notifyWatchers('fileRestored', { file, version });

      return file;
    } catch (error) {
      console.error('Error restoring file version:', error);
      throw error;
    }
  }

  // Collaboration Management
  async addCollaborator(filePath, email, role = 'viewer') {
    try {
      const file = this.files.get(filePath);
      if (!file) {
        throw new Error(`File not found: ${filePath}`);
      }

      const collaborator = {
        id: this.generateFileId(),
        email: email,
        role: role,
        addedAt: new Date().toISOString(),
        addedBy: this.getCurrentUser(),
        permissions: this.getRolePermissions(role)
      };

      if (!file.collaborators) {
        file.collaborators = [];
      }

      // Check if collaborator already exists
      const existingIndex = file.collaborators.findIndex(c => c.email === email);
      if (existingIndex >= 0) {
        file.collaborators[existingIndex] = collaborator;
      } else {
        file.collaborators.push(collaborator);
      }

      this.files.set(filePath, file);
      this.saveToStorage();
      this.notifyWatchers('collaboratorAdded', { file, collaborator });

      return collaborator;
    } catch (error) {
      console.error('Error adding collaborator:', error);
      throw error;
    }
  }

  async removeCollaborator(filePath, collaboratorId) {
    try {
      const file = this.files.get(filePath);
      if (!file) {
        throw new Error(`File not found: ${filePath}`);
      }

      if (!file.collaborators) {
        return;
      }

      const collaboratorIndex = file.collaborators.findIndex(c => c.id === collaboratorId);
      if (collaboratorIndex >= 0) {
        const collaborator = file.collaborators[collaboratorIndex];
        file.collaborators.splice(collaboratorIndex, 1);
        
        this.files.set(filePath, file);
        this.saveToStorage();
        this.notifyWatchers('collaboratorRemoved', { file, collaborator });
      }
    } catch (error) {
      console.error('Error removing collaborator:', error);
      throw error;
    }
  }

  // File Comments
  async addComment(filePath, comment) {
    try {
      const file = this.files.get(filePath);
      if (!file) {
        throw new Error(`File not found: ${filePath}`);
      }

      const commentObj = {
        id: this.generateFileId(),
        text: comment,
        author: this.getCurrentUser(),
        timestamp: new Date().toISOString(),
        filePath: filePath,
        lineNumber: null, // Can be set for line-specific comments
        resolved: false
      };

      if (!this.fileComments.has(filePath)) {
        this.fileComments.set(filePath, []);
      }

      const comments = this.fileComments.get(filePath);
      comments.push(commentObj);
      
      this.saveToStorage();
      this.notifyWatchers('commentAdded', { file, comment: commentObj });

      return commentObj;
    } catch (error) {
      console.error('Error adding comment:', error);
      throw error;
    }
  }

  getFileComments(filePath) {
    return this.fileComments.get(filePath) || [];
  }

  // File Watchers
  addFileWatcher(callback) {
    this.fileWatchers.add(callback);
  }

  removeFileWatcher(callback) {
    this.fileWatchers.delete(callback);
  }

  notifyWatchers(event, data) {
    this.fileWatchers.forEach(callback => {
      try {
        callback(event, data);
      } catch (error) {
        console.error('Error in file watcher:', error);
      }
    });
  }

  // Utility Methods
  generateFileId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }

  getCurrentUser() {
    // In a real app, this would come from authentication context
    return 'current-user@example.com';
  }

  isValidFileType(fileType) {
    return this.supportedFileTypes.includes(fileType.toLowerCase());
  }

  joinPath(...paths) {
    return paths.join('/').replace(/\/+/g, '/');
  }

  getParentPath(filePath) {
    const parts = filePath.split('/');
    parts.pop();
    return parts.join('/') || '/';
  }

  getFileName(filePath) {
    return filePath.split('/').pop();
  }

  getFileExtension(fileName) {
    return fileName.split('.').pop()?.toLowerCase();
  }

  calculateChanges(oldFile, newFile) {
    if (!oldFile || !newFile) return [];
    
    const changes = [];
    
    if (oldFile.name !== newFile.name) {
      changes.push({ type: 'renamed', field: 'name', old: oldFile.name, new: newFile.name });
    }
    
    if (oldFile.content !== newFile.content) {
      changes.push({ type: 'modified', field: 'content', old: oldFile.content, new: newFile.content });
    }
    
    if (oldFile.tags?.join(',') !== newFile.tags?.join(',')) {
      changes.push({ type: 'modified', field: 'tags', old: oldFile.tags, new: newFile.tags });
    }
    
    return changes;
  }

  getRolePermissions(role) {
    const permissions = {
      owner: { read: true, write: true, delete: true, share: true, admin: true },
      editor: { read: true, write: true, delete: false, share: true, admin: false },
      commenter: { read: true, write: false, delete: false, share: false, admin: false },
      viewer: { read: true, write: false, delete: false, share: false, admin: false }
    };
    return permissions[role] || permissions.viewer;
  }

  // Auto-save functionality
  startAutoSave() {
    this.autoSaveInterval = setInterval(() => {
      this.saveToStorage();
    }, 30000); // Save every 30 seconds
  }

  stopAutoSave() {
    if (this.autoSaveInterval) {
      clearInterval(this.autoSaveInterval);
      this.autoSaveInterval = null;
    }
  }

  // Storage management
  saveToStorage() {
    try {
      const data = {
        files: Array.from(this.files.entries()),
        fileHistory: Array.from(this.fileHistory.entries()),
        fileComments: Array.from(this.fileComments.entries()),
        timestamp: new Date().toISOString()
      };
      localStorage.setItem('dreamBuildFileManagement', JSON.stringify(data));
    } catch (error) {
      console.error('Error saving to storage:', error);
    }
  }

  loadFromStorage() {
    try {
      const data = localStorage.getItem('dreamBuildFileManagement');
      if (data) {
        const parsed = JSON.parse(data);
        this.files = new Map(parsed.files || []);
        this.fileHistory = new Map(parsed.fileHistory || []);
        this.fileComments = new Map(parsed.fileComments || []);
      }
    } catch (error) {
      console.error('Error loading from storage:', error);
    }
  }

  // Setup file watchers for real-time updates
  setupFileWatchers() {
    // In a real app, this would set up WebSocket connections
    // for real-time collaboration and file updates
  }

  // Get all files as a tree structure
  getFileTree() {
    const tree = [];
    const fileMap = new Map();
    
    // Create a map of all files
    for (const [path, file] of this.files) {
      fileMap.set(path, { ...file, children: [] });
    }
    
    // Build the tree structure
    for (const [path, file] of fileMap) {
      const parentPath = this.getParentPath(path);
      if (parentPath === '/' || parentPath === '') {
        tree.push(file);
      } else {
        const parent = fileMap.get(parentPath);
        if (parent) {
          parent.children.push(file);
        }
      }
    }
    
    return tree;
  }

  // Get file statistics
  getFileStatistics() {
    let totalFiles = 0;
    let totalFolders = 0;
    let totalSize = 0;
    const fileTypes = new Map();
    
    for (const [path, file] of this.files) {
      if (file.type === 'file') {
        totalFiles++;
        totalSize += file.size || 0;
        const ext = this.getFileExtension(file.name);
        if (ext) {
          fileTypes.set(ext, (fileTypes.get(ext) || 0) + 1);
        }
      } else {
        totalFolders++;
      }
    }
    
    return {
      totalFiles,
      totalFolders,
      totalSize,
      fileTypes: Object.fromEntries(fileTypes),
      lastModified: this.files.size > 0 ? 
        Math.max(...Array.from(this.files.values()).map(f => new Date(f.modified).getTime())) : null
    };
  }

  // Cleanup
  destroy() {
    this.stopAutoSave();
    this.fileWatchers.clear();
  }
}

// Export singleton instance
export default new AdvancedFileManagementService();
