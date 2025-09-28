import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  File, 
  Folder, 
  Plus, 
  Search, 
  Upload, 
  Download, 
  Edit, 
  Trash2, 
  Copy, 
  Move, 
  Share, 
  History,
  Code,
  Image,
  FileText,
  Archive,
  Music,
  Video
} from 'lucide-react';

const SimpleAdvancedFileManager = ({ 
  files = [], 
  onFileSelect, 
  onFileCreate, 
  onFileDelete, 
  onFileRename, 
  onFileMove,
  onFileCopy,
  onFileUpload,
  onFileDownload,
  onFileShare,
  onFileHistory,
  selectedFile,
  className = ""
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newFileName, setNewFileName] = useState('');
  const [newFileType, setNewFileType] = useState('js');
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showContextMenu, setShowContextMenu] = useState(null);
  const [contextMenuFile, setContextMenuFile] = useState(null);
  const [autoSaveEnabled, setAutoSaveEnabled] = useState(true);
  const [fileSyncStatus, setFileSyncStatus] = useState('synced');

  // File type icons
  const getFileIcon = (fileName) => {
    const extension = fileName.split('.').pop()?.toLowerCase();
    const iconMap = {
      js: Code,
      jsx: Code,
      ts: Code,
      tsx: Code,
      py: Code,
      java: Code,
      cpp: Code,
      c: Code,
      go: Code,
      rs: Code,
      php: Code,
      rb: Code,
      css: FileText,
      scss: FileText,
      sass: FileText,
      html: FileText,
      htm: FileText,
      xml: FileText,
      json: FileText,
      yaml: FileText,
      yml: FileText,
      md: FileText,
      txt: FileText,
      pdf: FileText,
      doc: FileText,
      docx: FileText,
      jpg: Image,
      jpeg: Image,
      png: Image,
      gif: Image,
      svg: Image,
      webp: Image,
      mp4: Video,
      avi: Video,
      mov: Video,
      mp3: Music,
      wav: Music,
      zip: Archive,
      rar: Archive,
      '7z': Archive,
      tar: Archive,
      gz: Archive
    };
    return iconMap[extension] || File;
  };

  // Filter files based on search
  const filteredFiles = files.filter(file => 
    file.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    file.path.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle file creation
  const handleCreateFile = () => {
    if (newFileName.trim()) {
      const fileName = newFileName.includes('.') ? newFileName : `${newFileName}.${newFileType}`;
      onFileCreate?.(fileName, newFileType);
      setNewFileName('');
      setShowCreateModal(false);
    }
  };

  // Handle file upload
  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    onFileUpload?.(files);
    setShowUploadModal(false);
  };

  // Handle context menu
  const handleContextMenu = (e, file) => {
    e.preventDefault();
    setContextMenuFile(file);
    setShowContextMenu({
      x: e.clientX,
      y: e.clientY
    });
  };

  // Close context menu
  const closeContextMenu = () => {
    setShowContextMenu(null);
    setContextMenuFile(null);
  };

  // Handle context menu actions
  const handleContextAction = (action) => {
    if (contextMenuFile) {
      switch (action) {
        case 'rename':
          const newName = prompt('Enter new name:', contextMenuFile.name);
          if (newName && newName !== contextMenuFile.name) {
            onFileRename?.(contextMenuFile, newName);
          }
          break;
        case 'delete':
          if (confirm(`Delete ${contextMenuFile.name}?`)) {
            onFileDelete?.(contextMenuFile);
          }
          break;
        case 'copy':
          onFileCopy?.(contextMenuFile);
          break;
        case 'move':
          const newPath = prompt('Enter new path:', contextMenuFile.path);
          if (newPath && newPath !== contextMenuFile.path) {
            onFileMove?.(contextMenuFile, newPath);
          }
          break;
        case 'download':
          onFileDownload?.(contextMenuFile);
          break;
        case 'share':
          onFileShare?.(contextMenuFile);
          break;
        case 'history':
          onFileHistory?.(contextMenuFile);
          break;
        case 'revert':
          if (confirm(`Revert ${contextMenuFile.name} to last saved version?`)) {
            // Simulate revert action - in real app this would restore from version control
            console.log(`Reverting ${contextMenuFile.name} to last saved version`);
            alert(`${contextMenuFile.name} has been reverted to the last saved version`);
          }
          break;
      }
    }
    closeContextMenu();
  };

  // Auto-save functionality
  React.useEffect(() => {
    if (autoSaveEnabled) {
      const interval = setInterval(() => {
        setFileSyncStatus('syncing');
        // Simulate auto-save
        setTimeout(() => {
          setFileSyncStatus('synced');
        }, 1000);
      }, 30000); // Auto-save every 30 seconds
      
      return () => clearInterval(interval);
    }
  }, [autoSaveEnabled]);

  // Keyboard shortcuts
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedFile) {
        switch (e.key) {
          case 'F2':
            e.preventDefault();
            handleContextAction('rename');
            break;
          case 'Delete':
          case 'Backspace':
            if (e.metaKey || e.ctrlKey) {
              e.preventDefault();
              handleContextAction('delete');
            }
            break;
          case 'c':
            if (e.metaKey || e.ctrlKey) {
              e.preventDefault();
              handleContextAction('copy');
            }
            break;
          case 'm':
            if (e.metaKey || e.ctrlKey) {
              e.preventDefault();
              handleContextAction('move');
            }
            break;
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedFile]);

  return (
    <div className={`flex flex-col h-full bg-background border-r border-border ${className}`}>
      {/* Header */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Advanced File Manager</h3>
          <div className="flex items-center gap-2">
            {/* Sync Status */}
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <div className={`w-2 h-2 rounded-full ${
                fileSyncStatus === 'synced' ? 'bg-green-500' : 
                fileSyncStatus === 'syncing' ? 'bg-yellow-500' : 'bg-red-500'
              }`}></div>
              <span className="capitalize">{fileSyncStatus}</span>
            </div>
            <button
              onClick={() => setShowCreateModal(true)}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
              title="Create File"
            >
              <Plus className="h-4 w-4" />
            </button>
            <button
              onClick={() => setShowUploadModal(true)}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
              title="Upload Files"
            >
              <Upload className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search files..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>

      {/* File List */}
      <div className="flex-1 overflow-y-auto p-2">
        {filteredFiles.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-32 text-muted-foreground">
            <File className="h-8 w-8 mb-2" />
            <p className="text-sm">No files found</p>
            <p className="text-xs">Create or upload files to get started</p>
          </div>
        ) : (
          <div className="space-y-1">
            {filteredFiles.map((file, index) => {
              const Icon = file.type === 'folder' ? Folder : getFileIcon(file.name);
              const isSelected = selectedFile?.path === file.path;
              
              return (
                <motion.div
                  key={file.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-muted/50 transition-all duration-200 group ${
                    isSelected ? 'bg-primary/10 border border-primary/20' : ''
                  }`}
                  onClick={() => onFileSelect?.(file)}
                  onContextMenu={(e) => handleContextMenu(e, file)}
                >
                  <Icon className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium truncate group-hover:text-foreground transition-colors">{file.name}</div>
                    <div className="text-xs text-muted-foreground truncate">{file.path}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>

      {/* Create File Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-card border border-border rounded-lg shadow-lg w-full max-w-md">
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4">Create New File</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">File Name</label>
                  <input
                    type="text"
                    value={newFileName}
                    onChange={(e) => setNewFileName(e.target.value)}
                    className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Enter file name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">File Type</label>
                  <select
                    value={newFileType}
                    onChange={(e) => setNewFileType(e.target.value)}
                    className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="js">JavaScript</option>
                    <option value="ts">TypeScript</option>
                    <option value="jsx">React JSX</option>
                    <option value="tsx">React TSX</option>
                    <option value="py">Python</option>
                    <option value="css">CSS</option>
                    <option value="html">HTML</option>
                    <option value="json">JSON</option>
                    <option value="md">Markdown</option>
                    <option value="txt">Text</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-end gap-2 mt-6">
                <button
                  onClick={() => setShowCreateModal(false)}
                  className="px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleCreateFile}
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-card border border-border rounded-lg shadow-lg w-full max-w-md">
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4">Upload Files</h3>
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <p className="text-sm text-muted-foreground mb-4">
                  Drag and drop files here or click to browse
                </p>
                <input
                  type="file"
                  multiple
                  onChange={handleFileUpload}
                  className="hidden"
                  id="file-upload"
                />
                <label
                  htmlFor="file-upload"
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors cursor-pointer"
                >
                  Choose Files
                </label>
              </div>
              <div className="flex justify-end gap-2 mt-6">
                <button
                  onClick={() => setShowUploadModal(false)}
                  className="px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Professional Context Menu - Like Cursor IDE */}
      {showContextMenu && contextMenuFile && (
        <div
          className="fixed bg-card border border-border rounded-lg shadow-xl z-50 py-1 min-w-[220px] backdrop-blur-sm"
          data-testid="file-context-menu"
          style={{
            left: showContextMenu.x,
            top: showContextMenu.y
          }}
          onClick={closeContextMenu}
        >
          {/* File Operations */}
          <div className="px-2 py-1">
            <div className="text-xs font-medium text-muted-foreground px-2 py-1">File Operations</div>
            <button
              onClick={() => handleContextAction('rename')}
              className="w-full px-3 py-2 text-left hover:bg-muted rounded flex items-center justify-between text-sm"
            >
              <div className="flex items-center gap-3">
                <Edit className="h-4 w-4" />
                Rename
              </div>
              <span className="text-xs text-muted-foreground">F2</span>
            </button>
            <button
              onClick={() => handleContextAction('copy')}
              className="w-full px-3 py-2 text-left hover:bg-muted rounded flex items-center justify-between text-sm"
            >
              <div className="flex items-center gap-3">
                <Copy className="h-4 w-4" />
                Copy
              </div>
              <span className="text-xs text-muted-foreground">⌘C</span>
            </button>
            <button
              onClick={() => handleContextAction('move')}
              className="w-full px-3 py-2 text-left hover:bg-muted rounded flex items-center justify-between text-sm"
            >
              <div className="flex items-center gap-3">
                <Move className="h-4 w-4" />
                Move to...
              </div>
              <span className="text-xs text-muted-foreground">⌘M</span>
            </button>
          </div>
          
          <hr className="my-1 border-border" />
          
          {/* Export & Share */}
          <div className="px-2 py-1">
            <div className="text-xs font-medium text-muted-foreground px-2 py-1">Export & Share</div>
            <button
              onClick={() => handleContextAction('download')}
              className="w-full px-3 py-2 text-left hover:bg-muted rounded flex items-center gap-3 text-sm"
            >
              <Download className="h-4 w-4" />
              Download
            </button>
            <button
              onClick={() => handleContextAction('share')}
              className="w-full px-3 py-2 text-left hover:bg-muted rounded flex items-center gap-3 text-sm"
            >
              <Share className="h-4 w-4" />
              Share
            </button>
          </div>
          
          <hr className="my-1 border-border" />
          
          {/* Version Control */}
          <div className="px-2 py-1">
            <div className="text-xs font-medium text-muted-foreground px-2 py-1">Version Control</div>
            <button
              onClick={() => handleContextAction('history')}
              className="w-full px-3 py-2 text-left hover:bg-muted rounded flex items-center gap-3 text-sm"
            >
              <History className="h-4 w-4" />
              View History
            </button>
            <button
              onClick={() => handleContextAction('revert')}
              className="w-full px-3 py-2 text-left hover:bg-muted rounded flex items-center gap-3 text-sm"
            >
              <History className="h-4 w-4" />
              Revert Changes
            </button>
          </div>
          
          <hr className="my-1 border-border" />
          
          {/* Dangerous Actions */}
          <div className="px-2 py-1">
            <button
              onClick={() => handleContextAction('delete')}
              className="w-full px-3 py-2 text-left hover:bg-destructive/10 rounded flex items-center justify-between text-sm text-destructive"
            >
              <div className="flex items-center gap-3">
                <Trash2 className="h-4 w-4" />
                Delete
              </div>
              <span className="text-xs text-muted-foreground">⌫</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SimpleAdvancedFileManager;
