// src/components/DesktopFileManager.jsx
import React, { useState, useEffect, useRef } from 'react';
import { 
  Folder, 
  File, 
  Plus, 
  Upload, 
  Download, 
  Trash2, 
  Edit, 
  Copy, 
  Move, 
  Share, 
  History, 
  Search, 
  Filter,
  Grid,
  List,
  HardDrive,
  Monitor,
  Cpu,
  Wifi,
  Settings,
  Maximize2,
  Minimize2,
  X
} from 'lucide-react';
import desktopIntegrationService from '../services/desktopIntegrationService';

const DesktopFileManager = ({ onFileSelect, className = '' }) => {
  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('list'); // 'list' or 'grid'
  const [sortBy, setSortBy] = useState('name'); // 'name', 'size', 'modified', 'type'
  const [sortOrder, setSortOrder] = useState('asc'); // 'asc' or 'desc'
  const [showSettings, setShowSettings] = useState(false);
  const [systemInfo, setSystemInfo] = useState(null);
  const [performanceMetrics, setPerformanceMetrics] = useState(null);
  const [isMaximized, setIsMaximized] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    // Initialize desktop integration service
    desktopIntegrationService.initialize().then(() => {
      const status = desktopIntegrationService.getStatus();
      setSystemInfo(status.systemCapabilities);
      
      // Start performance monitoring
      const interval = desktopIntegrationService.performanceMonitor?.startMonitoring((metrics) => {
        setPerformanceMetrics(metrics);
      });
      
      // Load initial files
      loadFiles();
      
      return () => {
        if (interval) {
          desktopIntegrationService.performanceMonitor?.stopMonitoring(interval);
        }
      };
    });
  }, []);

  const loadFiles = async () => {
    try {
      // Simulate loading files with enhanced system integration
      const sampleFiles = [
        {
          id: 1,
          name: 'src',
          type: 'directory',
          size: 0,
          modified: new Date().toISOString(),
          permissions: 'drwxr-xr-x',
          owner: 'ronellbradley',
          group: 'staff'
        },
        {
          id: 2,
          name: 'package.json',
          type: 'file',
          size: 1234,
          modified: new Date(Date.now() - 3600000).toISOString(),
          permissions: '-rw-r--r--',
          owner: 'ronellbradley',
          group: 'staff',
          extension: 'json'
        },
        {
          id: 3,
          name: 'README.md',
          type: 'file',
          size: 5678,
          modified: new Date(Date.now() - 7200000).toISOString(),
          permissions: '-rw-r--r--',
          owner: 'ronellbradley',
          group: 'staff',
          extension: 'md'
        },
        {
          id: 4,
          name: 'firebase.json',
          type: 'file',
          size: 234,
          modified: new Date(Date.now() - 10800000).toISOString(),
          permissions: '-rw-r--r--',
          owner: 'ronellbradley',
          group: 'staff',
          extension: 'json'
        },
        {
          id: 5,
          name: 'node_modules',
          type: 'directory',
          size: 0,
          modified: new Date(Date.now() - 14400000).toISOString(),
          permissions: 'drwxr-xr-x',
          owner: 'ronellbradley',
          group: 'staff'
        },
        {
          id: 6,
          name: 'dist',
          type: 'directory',
          size: 0,
          modified: new Date(Date.now() - 18000000).toISOString(),
          permissions: 'drwxr-xr-x',
          owner: 'ronellbradley',
          group: 'staff'
        }
      ];
      
      setFiles(sampleFiles);
    } catch (error) {
      console.error('Error loading files:', error);
    }
  };

  const handleFileSelect = (file) => {
    setSelectedFile(file);
    onFileSelect?.(file);
  };

  const handleFileUpload = async (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      try {
        // Use desktop integration service for file operations
        const result = await desktopIntegrationService.fileSystemAccess?.writeFile(files[0].name, await files[0].text());
        
        if (result.success) {
          // Add to file list
          const newFile = {
            id: Date.now(),
            name: files[0].name,
            type: 'file',
            size: files[0].size,
            modified: new Date().toISOString(),
            permissions: '-rw-r--r--',
            owner: 'ronellbradley',
            group: 'staff',
            extension: files[0].name.split('.').pop()
          };
          
          setFiles(prev => [...prev, newFile]);
        }
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  };

  const handleFileDownload = async (file) => {
    try {
      // Use desktop integration service for file operations
      const result = await desktopIntegrationService.fileSystemAccess?.readFile(file.name);
      
      if (result.success) {
        // Create download link
        const blob = new Blob([result.content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = file.name;
        a.click();
        URL.revokeObjectURL(url);
      }
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  };

  const handleFileDelete = (file) => {
    if (window.confirm(`Are you sure you want to delete ${file.name}?`)) {
      setFiles(prev => prev.filter(f => f.id !== file.id));
      if (selectedFile?.id === file.id) {
        setSelectedFile(null);
      }
    }
  };

  const handleFileRename = (file, newName) => {
    setFiles(prev => prev.map(f => 
      f.id === file.id ? { ...f, name: newName } : f
    ));
  };

  const filteredFiles = files.filter(file => 
    file.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedFiles = [...filteredFiles].sort((a, b) => {
    let comparison = 0;
    
    switch (sortBy) {
      case 'name':
        comparison = a.name.localeCompare(b.name);
        break;
      case 'size':
        comparison = a.size - b.size;
        break;
      case 'modified':
        comparison = new Date(a.modified) - new Date(b.modified);
        break;
      case 'type':
        comparison = a.type.localeCompare(b.type);
        break;
      default:
        comparison = 0;
    }
    
    return sortOrder === 'asc' ? comparison : -comparison;
  });

  const getFileIcon = (file) => {
    if (file.type === 'directory') {
      return <Folder className="h-5 w-5 text-blue-500" />;
    }
    
    const extension = file.extension?.toLowerCase();
    const iconMap = {
      'js': '🟨',
      'jsx': '⚛️',
      'ts': '🔷',
      'tsx': '⚛️',
      'py': '🐍',
      'html': '🌐',
      'css': '🎨',
      'json': '📄',
      'md': '📝',
      'txt': '📄',
      'png': '🖼️',
      'jpg': '🖼️',
      'jpeg': '🖼️',
      'gif': '🖼️',
      'svg': '🖼️',
      'pdf': '📕',
      'doc': '📘',
      'docx': '📘',
      'xls': '📊',
      'xlsx': '📊',
      'ppt': '📽️',
      'pptx': '📽️',
      'zip': '📦',
      'rar': '📦',
      'tar': '📦',
      'gz': '📦'
    };
    
    return <span className="text-lg">{iconMap[extension] || '📄'}</span>;
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString();
  };

  const getPerformanceColor = (value, max) => {
    const percentage = (value / max) * 100;
    if (percentage > 80) return 'text-red-500';
    if (percentage > 60) return 'text-yellow-500';
    return 'text-green-500';
  };

  return (
    <div className={`h-full bg-white border border-gray-200 rounded-lg flex flex-col ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-gray-50 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <HardDrive className="h-5 w-5 text-blue-600" />
          <span className="font-medium text-gray-900">Desktop File Manager</span>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-xs text-gray-500">Online</span>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          {/* Performance Indicators */}
          {performanceMetrics && (
            <div className="flex items-center gap-3 text-xs">
              <div className="flex items-center gap-1">
                <Cpu className="h-3 w-3" />
                <span className={getPerformanceColor(performanceMetrics.cpuUsage, 100)}>
                  {performanceMetrics.cpuUsage}%
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Monitor className="h-3 w-3" />
                <span className={getPerformanceColor(performanceMetrics.frameRate, 60)}>
                  {performanceMetrics.frameRate}fps
                </span>
              </div>
              <div className="flex items-center gap-1">
                <HardDrive className="h-3 w-3" />
                <span className={getPerformanceColor(performanceMetrics.memory.used, performanceMetrics.memory.limit)}>
                  {Math.round(performanceMetrics.memory.used / 1024 / 1024)}MB
                </span>
              </div>
            </div>
          )}
          
          <button
            onClick={() => setShowSettings(!showSettings)}
            className="p-1 hover:bg-gray-200 rounded"
            title="Settings"
          >
            <Settings className="h-4 w-4" />
          </button>
          
          <button
            onClick={() => setIsMaximized(!isMaximized)}
            className="p-1 hover:bg-gray-200 rounded"
            title={isMaximized ? "Minimize" : "Maximize"}
          >
            {isMaximized ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Settings Panel */}
      {showSettings && (
        <div className="px-4 py-2 bg-gray-50 border-b border-gray-200">
          <div className="grid grid-cols-2 gap-4 text-xs">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">System Info</h4>
              {systemInfo && (
                <div className="space-y-1 text-gray-600">
                  <div>Platform: {systemInfo.platform}</div>
                  <div>CPU Cores: {systemInfo.hardwareConcurrency}</div>
                  <div>Screen: {systemInfo.screenWidth}x{systemInfo.screenHeight}</div>
                  <div>Timezone: {systemInfo.timezone}</div>
                </div>
              )}
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">File System</h4>
              <div className="space-y-1 text-gray-600">
                <div>File Access: {systemInfo?.hasFileSystemAccess ? '✅' : '❌'}</div>
                <div>Web Workers: {systemInfo?.hasWebWorkers ? '✅' : '❌'}</div>
                <div>WebGL: {systemInfo?.hasWebGL ? '✅' : '❌'}</div>
                <div>Notifications: {systemInfo?.hasNotifications ? '✅' : '❌'}</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Toolbar */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-50 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center gap-1 px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            <Plus className="h-4 w-4" />
            New
          </button>
          
          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center gap-1 px-3 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700"
          >
            <Upload className="h-4 w-4" />
            Upload
          </button>
          
          <input
            ref={fileInputRef}
            type="file"
            multiple
            onChange={handleFileUpload}
            className="hidden"
          />
        </div>
        
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="h-4 w-4 absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search files..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-8 pr-3 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="name">Name</option>
            <option value="size">Size</option>
            <option value="modified">Modified</option>
            <option value="type">Type</option>
          </select>
          
          <button
            onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
            className="p-1 hover:bg-gray-200 rounded"
            title={`Sort ${sortOrder === 'asc' ? 'Descending' : 'Ascending'}`}
          >
            <Filter className="h-4 w-4" />
          </button>
          
          <div className="flex items-center border border-gray-300 rounded">
            <button
              onClick={() => setViewMode('list')}
              className={`p-1 ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'hover:bg-gray-200'}`}
              title="List View"
            >
              <List className="h-4 w-4" />
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'hover:bg-gray-200'}`}
              title="Grid View"
            >
              <Grid className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* File List */}
      <div 
        className="flex-1 overflow-y-auto"
        style={{ maxHeight: isMaximized ? '80vh' : '400px' }}
      >
        {viewMode === 'list' ? (
          <div className="divide-y divide-gray-200">
            <div className="grid grid-cols-12 gap-4 px-4 py-2 text-xs font-medium text-gray-500 bg-gray-50">
              <div className="col-span-6">Name</div>
              <div className="col-span-2">Size</div>
              <div className="col-span-2">Modified</div>
              <div className="col-span-1">Owner</div>
              <div className="col-span-1">Actions</div>
            </div>
            
            {sortedFiles.map((file) => (
              <div
                key={file.id}
                className={`grid grid-cols-12 gap-4 px-4 py-2 hover:bg-gray-50 cursor-pointer ${
                  selectedFile?.id === file.id ? 'bg-blue-50 border-l-4 border-blue-500' : ''
                }`}
                onClick={() => handleFileSelect(file)}
              >
                <div className="col-span-6 flex items-center gap-2">
                  {getFileIcon(file)}
                  <span className="text-sm font-medium">{file.name}</span>
                </div>
                <div className="col-span-2 text-sm text-gray-600">
                  {file.type === 'directory' ? '--' : formatFileSize(file.size)}
                </div>
                <div className="col-span-2 text-sm text-gray-600">
                  {formatDate(file.modified)}
                </div>
                <div className="col-span-1 text-sm text-gray-600">
                  {file.owner}
                </div>
                <div className="col-span-1 flex items-center gap-1">
                  {file.type === 'file' && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleFileDownload(file);
                      }}
                      className="p-1 hover:bg-gray-200 rounded"
                      title="Download"
                    >
                      <Download className="h-4 w-4" />
                    </button>
                  )}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleFileDelete(file);
                    }}
                    className="p-1 hover:bg-gray-200 rounded text-red-600"
                    title="Delete"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-4 p-4">
            {sortedFiles.map((file) => (
              <div
                key={file.id}
                className={`p-4 border border-gray-200 rounded-lg hover:shadow-md cursor-pointer ${
                  selectedFile?.id === file.id ? 'ring-2 ring-blue-500 bg-blue-50' : ''
                }`}
                onClick={() => handleFileSelect(file)}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-2">
                    {getFileIcon(file)}
                  </div>
                  <div className="text-sm font-medium text-gray-900 truncate w-full">
                    {file.name}
                  </div>
                  <div className="text-xs text-gray-500">
                    {file.type === 'directory' ? 'Directory' : formatFileSize(file.size)}
                  </div>
                  <div className="text-xs text-gray-400">
                    {formatDate(file.modified)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Status Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-50 border-t border-gray-200 text-xs text-gray-600">
        <div>
          {sortedFiles.length} items
          {selectedFile && ` • Selected: ${selectedFile.name}`}
        </div>
        <div className="flex items-center gap-4">
          <div>Sort: {sortBy} ({sortOrder})</div>
          <div>View: {viewMode}</div>
        </div>
      </div>
    </div>
  );
};

export default DesktopFileManager;
