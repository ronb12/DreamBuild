import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import chokidar from 'chokidar';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export class FileSystemService {
  constructor() {
    this.basePath = path.join(__dirname, '../../projects');
    this.maxFileSize = 10 * 1024 * 1024; // 10MB
    this.allowedExtensions = [
      // Web files
      '.html', '.htm', '.css', '.js', '.jsx', '.ts', '.tsx', '.json',
      // Markup
      '.md', '.txt', '.xml', '.yaml', '.yml',
      // Images
      '.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp', '.ico',
      // Fonts
      '.woff', '.woff2', '.ttf', '.otf', '.eot',
      // Archives
      '.zip', '.tar', '.gz', '.rar',
      // Documents
      '.pdf', '.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx',
      // Code files
      '.py', '.java', '.cpp', '.c', '.h', '.hpp', '.go', '.rs', '.php', '.rb',
      '.swift', '.kt', '.scala', '.sh', '.bash', '.zsh', '.fish',
      '.sql', '.r', '.m', '.pl', '.lua', '.dart', '.elm', '.hs',
      '.ml', '.fs', '.vb', '.cs', '.jl', '.nim', '.zig', '.v',
      // Config files
      '.conf', '.config', '.ini', '.toml', '.env', '.gitignore',
      '.dockerfile', '.dockerignore', '.gitattributes',
      // Package files
      '.lock', '.package', '.requirements', '.gemfile', '.cargo',
      // Other
      '.log', '.tmp', '.bak', '.orig', '.patch', '.diff'
    ];
    
    this.blockedExtensions = [
      '.exe', '.bat', '.cmd', '.com', '.scr', '.pif', '.msi',
      '.app', '.dmg', '.pkg', '.deb', '.rpm', '.apk',
      '.dll', '.so', '.dylib', '.bin', '.run'
    ];
    
    this.watchers = new Map();
    this.ensureBaseDirectory();
  }

  async ensureBaseDirectory() {
    try {
      await fs.ensureDir(this.basePath);
      console.log(`📁 Base directory ensured: ${this.basePath}`);
    } catch (error) {
      console.error('❌ Failed to ensure base directory:', error);
    }
  }

  async readFile(filePath) {
    try {
      const fullPath = this.resolvePath(filePath);
      
      // Check if file exists
      if (!await fs.pathExists(fullPath)) {
        throw new Error('File not found');
      }

      // Check file size
      const stats = await fs.stat(fullPath);
      if (stats.size > this.maxFileSize) {
        throw new Error('File too large');
      }

      // Check file extension
      const ext = path.extname(fullPath).toLowerCase();
      if (this.blockedExtensions.includes(ext)) {
        throw new Error('File type not allowed');
      }

      const content = await fs.readFile(fullPath, 'utf8');
      return content;
    } catch (error) {
      console.error(`❌ Error reading file ${filePath}:`, error);
      throw error;
    }
  }

  async writeFile(filePath, content) {
    try {
      const fullPath = this.resolvePath(filePath);
      
      // Check file extension
      const ext = path.extname(fullPath).toLowerCase();
      if (this.blockedExtensions.includes(ext)) {
        throw new Error('File type not allowed');
      }

      // Ensure directory exists
      await fs.ensureDir(path.dirname(fullPath));

      // Write file
      await fs.writeFile(fullPath, content, 'utf8');
      
      console.log(`✅ File written: ${filePath}`);
      return true;
    } catch (error) {
      console.error(`❌ Error writing file ${filePath}:`, error);
      throw error;
    }
  }

  async deleteFile(filePath) {
    try {
      const fullPath = this.resolvePath(filePath);
      
      // Check if file exists
      if (!await fs.pathExists(fullPath)) {
        throw new Error('File not found');
      }

      // Check if it's a directory
      const stats = await fs.stat(fullPath);
      if (stats.isDirectory()) {
        await fs.remove(fullPath);
      } else {
        await fs.unlink(fullPath);
      }
      
      console.log(`🗑️  File deleted: ${filePath}`);
      return true;
    } catch (error) {
      console.error(`❌ Error deleting file ${filePath}:`, error);
      throw error;
    }
  }

  async listFiles(dirPath = '.') {
    try {
      const fullPath = this.resolvePath(dirPath);
      
      // Check if directory exists
      if (!await fs.pathExists(fullPath)) {
        throw new Error('Directory not found');
      }

      const stats = await fs.stat(fullPath);
      if (!stats.isDirectory()) {
        throw new Error('Path is not a directory');
      }

      const items = await fs.readdir(fullPath);
      const files = [];

      for (const item of items) {
        const itemPath = path.join(fullPath, item);
        const itemStats = await fs.stat(itemPath);
        
        files.push({
          name: item,
          path: path.relative(this.basePath, itemPath),
          type: itemStats.isDirectory() ? 'directory' : 'file',
          size: itemStats.size,
          modified: itemStats.mtime,
          created: itemStats.birthtime
        });
      }

      // Sort: directories first, then files, both alphabetically
      files.sort((a, b) => {
        if (a.type === b.type) {
          return a.name.localeCompare(b.name);
        }
        return a.type === 'directory' ? -1 : 1;
      });

      return files;
    } catch (error) {
      console.error(`❌ Error listing files in ${dirPath}:`, error);
      throw error;
    }
  }

  async createDirectory(dirPath) {
    try {
      const fullPath = this.resolvePath(dirPath);
      
      // Check if directory already exists
      if (await fs.pathExists(fullPath)) {
        throw new Error('Directory already exists');
      }

      await fs.ensureDir(fullPath);
      console.log(`📁 Directory created: ${dirPath}`);
      return true;
    } catch (error) {
      console.error(`❌ Error creating directory ${dirPath}:`, error);
      throw error;
    }
  }

  async moveFile(sourcePath, destPath) {
    try {
      const fullSourcePath = this.resolvePath(sourcePath);
      const fullDestPath = this.resolvePath(destPath);
      
      // Check if source exists
      if (!await fs.pathExists(fullSourcePath)) {
        throw new Error('Source file not found');
      }

      // Ensure destination directory exists
      await fs.ensureDir(path.dirname(fullDestPath));

      // Move file
      await fs.move(fullSourcePath, fullDestPath);
      
      console.log(`📁 File moved: ${sourcePath} -> ${destPath}`);
      return true;
    } catch (error) {
      console.error(`❌ Error moving file ${sourcePath} to ${destPath}:`, error);
      throw error;
    }
  }

  async copyFile(sourcePath, destPath) {
    try {
      const fullSourcePath = this.resolvePath(sourcePath);
      const fullDestPath = this.resolvePath(destPath);
      
      // Check if source exists
      if (!await fs.pathExists(fullSourcePath)) {
        throw new Error('Source file not found');
      }

      // Ensure destination directory exists
      await fs.ensureDir(path.dirname(fullDestPath));

      // Copy file
      await fs.copy(fullSourcePath, fullDestPath);
      
      console.log(`📁 File copied: ${sourcePath} -> ${destPath}`);
      return true;
    } catch (error) {
      console.error(`❌ Error copying file ${sourcePath} to ${destPath}:`, error);
      throw error;
    }
  }

  async getFileInfo(filePath) {
    try {
      const fullPath = this.resolvePath(filePath);
      
      if (!await fs.pathExists(fullPath)) {
        throw new Error('File not found');
      }

      const stats = await fs.stat(fullPath);
      
      return {
        name: path.basename(fullPath),
        path: path.relative(this.basePath, fullPath),
        type: stats.isDirectory() ? 'directory' : 'file',
        size: stats.size,
        modified: stats.mtime,
        created: stats.birthtime,
        permissions: stats.mode,
        extension: path.extname(fullPath).toLowerCase()
      };
    } catch (error) {
      console.error(`❌ Error getting file info for ${filePath}:`, error);
      throw error;
    }
  }

  async searchFiles(query, dirPath = '.', options = {}) {
    try {
      const fullPath = this.resolvePath(dirPath);
      
      if (!await fs.pathExists(fullPath)) {
        throw new Error('Directory not found');
      }

      const results = [];
      const { caseSensitive = false, fileTypes = [], maxResults = 100 } = options;
      
      const searchRegex = new RegExp(
        caseSensitive ? query : query.toLowerCase(),
        caseSensitive ? 'g' : 'gi'
      );

      const searchDir = async (currentPath, depth = 0) => {
        if (depth > 10 || results.length >= maxResults) return; // Prevent infinite recursion
        
        const items = await fs.readdir(currentPath);
        
        for (const item of items) {
          if (results.length >= maxResults) break;
          
          const itemPath = path.join(currentPath, item);
          const stats = await fs.stat(itemPath);
          
          if (stats.isDirectory()) {
            await searchDir(itemPath, depth + 1);
          } else {
            const ext = path.extname(item).toLowerCase();
            
            // Filter by file types if specified
            if (fileTypes.length > 0 && !fileTypes.includes(ext)) {
              continue;
            }
            
            // Check filename match
            const filename = caseSensitive ? item : item.toLowerCase();
            if (searchRegex.test(filename)) {
              results.push({
                name: item,
                path: path.relative(this.basePath, itemPath),
                type: 'file',
                size: stats.size,
                modified: stats.mtime
              });
            }
          }
        }
      };

      await searchDir(fullPath);
      return results;
    } catch (error) {
      console.error(`❌ Error searching files:`, error);
      throw error;
    }
  }

  watchDirectory(dirPath, callback) {
    try {
      const fullPath = this.resolvePath(dirPath);
      
      if (this.watchers.has(fullPath)) {
        this.watchers.get(fullPath).close();
      }

      const watcher = chokidar.watch(fullPath, {
        ignored: /(^|[\/\\])\../, // ignore dotfiles
        persistent: true,
        ignoreInitial: true
      });

      watcher.on('add', (path) => callback('add', path));
      watcher.on('change', (path) => callback('change', path));
      watcher.on('unlink', (path) => callback('unlink', path));
      watcher.on('addDir', (path) => callback('addDir', path));
      watcher.on('unlinkDir', (path) => callback('unlinkDir', path));

      this.watchers.set(fullPath, watcher);
      console.log(`👀 Watching directory: ${dirPath}`);
      
      return watcher;
    } catch (error) {
      console.error(`❌ Error watching directory ${dirPath}:`, error);
      throw error;
    }
  }

  unwatchDirectory(dirPath) {
    try {
      const fullPath = this.resolvePath(dirPath);
      
      if (this.watchers.has(fullPath)) {
        this.watchers.get(fullPath).close();
        this.watchers.delete(fullPath);
        console.log(`👀 Stopped watching directory: ${dirPath}`);
      }
    } catch (error) {
      console.error(`❌ Error unwatching directory ${dirPath}:`, error);
    }
  }

  resolvePath(filePath) {
    // Normalize and resolve path
    const normalizedPath = path.normalize(filePath);
    
    // Check for path traversal attempts
    if (normalizedPath.includes('..') || normalizedPath.startsWith('/')) {
      throw new Error('Invalid path: path traversal not allowed');
    }

    const fullPath = path.resolve(this.basePath, normalizedPath);
    
    // Ensure the resolved path is within the base directory
    if (!fullPath.startsWith(this.basePath)) {
      throw new Error('Invalid path: outside allowed directory');
    }

    return fullPath;
  }

  async getDirectorySize(dirPath) {
    try {
      const fullPath = this.resolvePath(dirPath);
      
      if (!await fs.pathExists(fullPath)) {
        throw new Error('Directory not found');
      }

      let totalSize = 0;
      
      const calculateSize = async (currentPath) => {
        const items = await fs.readdir(currentPath);
        
        for (const item of items) {
          const itemPath = path.join(currentPath, item);
          const stats = await fs.stat(itemPath);
          
          if (stats.isDirectory()) {
            await calculateSize(itemPath);
          } else {
            totalSize += stats.size;
          }
        }
      };

      await calculateSize(fullPath);
      return totalSize;
    } catch (error) {
      console.error(`❌ Error calculating directory size for ${dirPath}:`, error);
      throw error;
    }
  }

  async cleanup() {
    try {
      // Close all watchers
      for (const [path, watcher] of this.watchers) {
        watcher.close();
      }
      this.watchers.clear();
      
      console.log('🧹 File system service cleaned up');
    } catch (error) {
      console.error('❌ Error cleaning up file system service:', error);
    }
  }

  getStats() {
    return {
      basePath: this.basePath,
      maxFileSize: this.maxFileSize,
      allowedExtensions: this.allowedExtensions.length,
      blockedExtensions: this.blockedExtensions.length,
      activeWatchers: this.watchers.size
    };
  }
}

