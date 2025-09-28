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

  return (
    <div className={`flex flex-col h-full bg-background border-r border-border ${className}`}>
      {/* Header */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Advanced File Manager</h3>
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
                  className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-muted/50 transition-colors ${
                    isSelected ? 'bg-primary/10 border border-primary/20' : ''
                  }`}
                  onClick={() => onFileSelect?.(file)}
                >
                  <Icon className="h-4 w-4 text-muted-foreground" />
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium truncate">{file.name}</div>
                    <div className="text-xs text-muted-foreground truncate">{file.path}</div>
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onFileRename?.(file, prompt('Enter new name:', file.name));
                      }}
                      className="p-1 hover:bg-muted rounded"
                      title="Rename"
                    >
                      <Edit className="h-3 w-3" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onFileCopy?.(file);
                      }}
                      className="p-1 hover:bg-muted rounded"
                      title="Copy"
                    >
                      <Copy className="h-3 w-3" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onFileDownload?.(file);
                      }}
                      className="p-1 hover:bg-muted rounded"
                      title="Download"
                    >
                      <Download className="h-3 w-3" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onFileShare?.(file);
                      }}
                      className="p-1 hover:bg-muted rounded"
                      title="Share"
                    >
                      <Share className="h-3 w-3" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onFileHistory?.(file);
                      }}
                      className="p-1 hover:bg-muted rounded"
                      title="History"
                    >
                      <History className="h-3 w-3" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (confirm(`Delete ${file.name}?`)) {
                          onFileDelete?.(file);
                        }
                      }}
                      className="p-1 hover:bg-muted rounded text-destructive"
                      title="Delete"
                    >
                      <Trash2 className="h-3 w-3" />
                    </button>
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
    </div>
  );
};

export default SimpleAdvancedFileManager;
