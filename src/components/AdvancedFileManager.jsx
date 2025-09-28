import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  File, 
  Folder, 
  FolderOpen, 
  Plus, 
  Search, 
  Filter, 
  MoreVertical, 
  Edit, 
  Trash2, 
  Copy, 
  Move, 
  Download, 
  Upload, 
  Eye, 
  EyeOff, 
  Star, 
  Share, 
  History, 
  GitBranch,
  Code,
  Image,
  FileText,
  Archive,
  Music,
  Video,
  Settings,
  RefreshCw,
  Save,
  X,
  ChevronRight,
  ChevronDown
} from 'lucide-react';

const AdvancedFileManager = ({ 
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
  const [filterType, setFilterType] = useState('all');
  const [viewMode, setViewMode] = useState('tree'); // tree, grid, list
  const [expandedFolders, setExpandedFolders] = useState(new Set());
  const [contextMenu, setContextMenu] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newFileName, setNewFileName] = useState('');
  const [newFileType, setNewFileType] = useState('js');
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showHistoryModal, setShowHistoryModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [favorites, setFavorites] = useState(new Set());
  const [recentFiles, setRecentFiles] = useState([]);
  const fileInputRef = useRef(null);

  // File type icons mapping
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

  // Filter files based on search and type
  const filteredFiles = files.filter(file => {
    const matchesSearch = file.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         file.path.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = filterType === 'all' || 
                       (filterType === 'folders' && file.type === 'folder') ||
                       (filterType === 'files' && file.type === 'file') ||
                       (filterType !== 'all' && filterType !== 'folders' && filterType !== 'files' && 
                        file.name.toLowerCase().endsWith(`.${filterType}`));
    return matchesSearch && matchesType;
  });

  // Toggle folder expansion
  const toggleFolder = (folderPath) => {
    const newExpanded = new Set(expandedFolders);
    if (newExpanded.has(folderPath)) {
      newExpanded.delete(folderPath);
    } else {
      newExpanded.add(folderPath);
    }
    setExpandedFolders(newExpanded);
  };

  // Handle context menu
  const handleContextMenu = (e, file) => {
    e.preventDefault();
    setContextMenu({
      x: e.clientX,
      y: e.clientY,
      file: file
    });
  };

  // Close context menu
  const closeContextMenu = () => {
    setContextMenu(null);
  };

  // Handle file operations
  const handleFileOperation = (operation, file) => {
    switch (operation) {
      case 'rename':
        const newName = prompt('Enter new name:', file.name);
        if (newName && newName !== file.name) {
          onFileRename?.(file, newName);
        }
        break;
      case 'delete':
        if (confirm(`Are you sure you want to delete "${file.name}"?`)) {
          onFileDelete?.(file);
        }
        break;
      case 'copy':
        onFileCopy?.(file);
        break;
      case 'move':
        onFileMove?.(file);
        break;
      case 'download':
        onFileDownload?.(file);
        break;
      case 'share':
        setShowShareModal(true);
        break;
      case 'history':
        setShowHistoryModal(true);
        break;
      case 'favorite':
        const newFavorites = new Set(favorites);
        if (newFavorites.has(file.path)) {
          newFavorites.delete(file.path);
        } else {
          newFavorites.add(file.path);
        }
        setFavorites(newFavorites);
        break;
    }
    closeContextMenu();
  };

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

  // Render file tree
  const renderFileTree = (files, level = 0) => {
    return files.map((file, index) => {
      const Icon = file.type === 'folder' ? 
        (expandedFolders.has(file.path) ? FolderOpen : Folder) : 
        getFileIcon(file.name);
      const isSelected = selectedFile?.path === file.path;
      const isFavorite = favorites.has(file.path);

      return (
        <div key={file.path} style={{ marginLeft: `${level * 20}px` }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer hover:bg-muted/50 transition-colors ${
              isSelected ? 'bg-primary/10 border border-primary/20' : ''
            }`}
            onClick={() => file.type === 'folder' ? toggleFolder(file.path) : onFileSelect?.(file)}
            onContextMenu={(e) => handleContextMenu(e, file)}
          >
            {file.type === 'folder' && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFolder(file.path);
                }}
                className="p-1 hover:bg-muted rounded"
              >
                {expandedFolders.has(file.path) ? 
                  <ChevronDown className="h-4 w-4" /> : 
                  <ChevronRight className="h-4 w-4" />
                }
              </button>
            )}
            <Icon className="h-4 w-4 text-muted-foreground" />
            <span className="flex-1 text-sm truncate">{file.name}</span>
            {isFavorite && <Star className="h-4 w-4 text-yellow-500 fill-current" />}
            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleFileOperation('favorite', file);
                }}
                className="p-1 hover:bg-muted rounded"
              >
                <Star className={`h-4 w-4 ${isFavorite ? 'text-yellow-500 fill-current' : 'text-muted-foreground'}`} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setContextMenu({ x: e.clientX, y: e.clientY, file });
                }}
                className="p-1 hover:bg-muted rounded"
              >
                <MoreVertical className="h-4 w-4 text-muted-foreground" />
              </button>
            </div>
          </motion.div>
          {file.type === 'folder' && expandedFolders.has(file.path) && file.children && (
            <div className="mt-1">
              {renderFileTree(file.children, level + 1)}
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <div className={`flex flex-col h-full bg-background border-r border-border ${className}`}>
      {/* Header */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">File Manager</h3>
          <div className="flex items-center gap-2">
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
            <button
              onClick={() => window.location.reload()}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
              title="Refresh"
            >
              <RefreshCw className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="space-y-2">
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
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="flex-1 px-3 py-2 border border-border rounded-lg bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
            >
              <option value="all">All Files</option>
              <option value="folders">Folders</option>
              <option value="files">Files</option>
              <option value="js">JavaScript</option>
              <option value="ts">TypeScript</option>
              <option value="py">Python</option>
              <option value="css">CSS</option>
              <option value="html">HTML</option>
              <option value="json">JSON</option>
              <option value="md">Markdown</option>
            </select>
          </div>
        </div>
      </div>

      {/* File Tree */}
      <div className="flex-1 overflow-y-auto p-2">
        {filteredFiles.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-32 text-muted-foreground">
            <File className="h-8 w-8 mb-2" />
            <p className="text-sm">No files found</p>
          </div>
        ) : (
          <div className="space-y-1">
            {renderFileTree(filteredFiles)}
          </div>
        )}
      </div>

      {/* Context Menu */}
      <AnimatePresence>
        {contextMenu && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed bg-card border border-border rounded-lg shadow-lg z-50 py-2 min-w-[200px]"
            style={{
              left: contextMenu.x,
              top: contextMenu.y
            }}
            onClick={closeContextMenu}
          >
            <button
              onClick={() => handleFileOperation('rename', contextMenu.file)}
              className="w-full px-4 py-2 text-left hover:bg-muted flex items-center gap-2"
            >
              <Edit className="h-4 w-4" />
              Rename
            </button>
            <button
              onClick={() => handleFileOperation('copy', contextMenu.file)}
              className="w-full px-4 py-2 text-left hover:bg-muted flex items-center gap-2"
            >
              <Copy className="h-4 w-4" />
              Copy
            </button>
            <button
              onClick={() => handleFileOperation('move', contextMenu.file)}
              className="w-full px-4 py-2 text-left hover:bg-muted flex items-center gap-2"
            >
              <Move className="h-4 w-4" />
              Move
            </button>
            <button
              onClick={() => handleFileOperation('download', contextMenu.file)}
              className="w-full px-4 py-2 text-left hover:bg-muted flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              Download
            </button>
            <button
              onClick={() => handleFileOperation('share', contextMenu.file)}
              className="w-full px-4 py-2 text-left hover:bg-muted flex items-center gap-2"
            >
              <Share className="h-4 w-4" />
              Share
            </button>
            <button
              onClick={() => handleFileOperation('history', contextMenu.file)}
              className="w-full px-4 py-2 text-left hover:bg-muted flex items-center gap-2"
            >
              <History className="h-4 w-4" />
              History
            </button>
            <button
              onClick={() => handleFileOperation('favorite', contextMenu.file)}
              className="w-full px-4 py-2 text-left hover:bg-muted flex items-center gap-2"
            >
              <Star className="h-4 w-4" />
              {favorites.has(contextMenu.file.path) ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
            <hr className="my-2 border-border" />
            <button
              onClick={() => handleFileOperation('delete', contextMenu.file)}
              className="w-full px-4 py-2 text-left hover:bg-muted flex items-center gap-2 text-destructive"
            >
              <Trash2 className="h-4 w-4" />
              Delete
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Create File Modal */}
      <AnimatePresence>
        {showCreateModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowCreateModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-card border border-border rounded-lg shadow-lg w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Upload Modal */}
      <AnimatePresence>
        {showUploadModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowUploadModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-card border border-border rounded-lg shadow-lg w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">Upload Files</h3>
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                  <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground mb-4">
                    Drag and drop files here or click to browse
                  </p>
                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Choose Files
                  </button>
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hidden file input for upload */}
      <input
        ref={fileInputRef}
        type="file"
        multiple
        onChange={handleFileUpload}
        className="hidden"
      />
    </div>
  );
};

export default AdvancedFileManager;
