import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  History, 
  GitBranch, 
  GitCommit, 
  GitMerge, 
  GitPullRequest, 
  Clock, 
  User, 
  MessageSquare, 
  Download, 
  Eye, 
  RotateCcw, 
  Compare, 
  Tag, 
  Hash, 
  Calendar, 
  File, 
  Code, 
  Image, 
  FileText, 
  Archive, 
  Music, 
  Video,
  ChevronDown,
  ChevronRight,
  CheckCircle,
  AlertCircle,
  Info,
  X,
  Search,
  Filter,
  SortAsc,
  SortDesc
} from 'lucide-react';

const AdvancedFileHistory = ({ 
  file, 
  history = [], 
  onRestoreVersion, 
  onCompareVersions, 
  onViewDiff, 
  onDownloadVersion,
  onViewVersion,
  className = "" 
}) => {
  const [expandedCommits, setExpandedCommits] = useState(new Set());
  const [selectedVersions, setSelectedVersions] = useState([]);
  const [showDiffModal, setShowDiffModal] = useState(false);
  const [showCompareModal, setShowCompareModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('date'); // date, author, message
  const [sortOrder, setSortOrder] = useState('desc'); // asc, desc
  const [filterType, setFilterType] = useState('all'); // all, commits, tags, branches
  const [showRestoreModal, setShowRestoreModal] = useState(false);
  const [restoreVersion, setRestoreVersion] = useState(null);

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

  // Filter and sort history
  const filteredHistory = history
    .filter(item => {
      const matchesSearch = item.message.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           item.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           item.hash.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFilter = filterType === 'all' || item.type === filterType;
      return matchesSearch && matchesFilter;
    })
    .sort((a, b) => {
      let comparison = 0;
      switch (sortBy) {
        case 'date':
          comparison = new Date(a.timestamp) - new Date(b.timestamp);
          break;
        case 'author':
          comparison = a.author.localeCompare(b.author);
          break;
        case 'message':
          comparison = a.message.localeCompare(b.message);
          break;
        default:
          comparison = 0;
      }
      return sortOrder === 'desc' ? -comparison : comparison;
    });

  // Toggle commit expansion
  const toggleCommit = (commitId) => {
    const newExpanded = new Set(expandedCommits);
    if (newExpanded.has(commitId)) {
      newExpanded.delete(commitId);
    } else {
      newExpanded.add(commitId);
    }
    setExpandedCommits(newExpanded);
  };

  // Handle version selection
  const handleVersionSelect = (version) => {
    if (selectedVersions.includes(version.id)) {
      setSelectedVersions(selectedVersions.filter(id => id !== version.id));
    } else {
      if (selectedVersions.length < 2) {
        setSelectedVersions([...selectedVersions, version.id]);
      }
    }
  };

  // Handle restore version
  const handleRestoreVersion = () => {
    if (restoreVersion) {
      onRestoreVersion?.(restoreVersion);
      setShowRestoreModal(false);
      setRestoreVersion(null);
    }
  };

  // Handle compare versions
  const handleCompareVersions = () => {
    if (selectedVersions.length === 2) {
      const version1 = history.find(v => v.id === selectedVersions[0]);
      const version2 = history.find(v => v.id === selectedVersions[1]);
      onCompareVersions?.(version1, version2);
      setShowCompareModal(true);
    }
  };

  // Get commit type icon
  const getCommitIcon = (type) => {
    switch (type) {
      case 'commit':
        return GitCommit;
      case 'merge':
        return GitMerge;
      case 'pull-request':
        return GitPullRequest;
      case 'tag':
        return Tag;
      case 'branch':
        return GitBranch;
      default:
        return GitCommit;
    }
  };

  // Get commit type color
  const getCommitColor = (type) => {
    switch (type) {
      case 'commit':
        return 'text-blue-500';
      case 'merge':
        return 'text-green-500';
      case 'pull-request':
        return 'text-purple-500';
      case 'tag':
        return 'text-yellow-500';
      case 'branch':
        return 'text-orange-500';
      default:
        return 'text-gray-500';
    }
  };

  // Format relative time
  const formatRelativeTime = (timestamp) => {
    const now = new Date();
    const date = new Date(timestamp);
    const diffInSeconds = Math.floor((now - date) / 1000);
    
    if (diffInSeconds < 60) return 'Just now';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
    if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 86400)}d ago`;
    return date.toLocaleDateString();
  };

  return (
    <div className={`flex flex-col h-full bg-background border-l border-border ${className}`}>
      {/* Header */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <History className="h-5 w-5" />
            File History
          </h3>
          <div className="flex items-center gap-2">
            {selectedVersions.length === 2 && (
              <button
                onClick={handleCompareVersions}
                className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Compare className="h-4 w-4 mr-1" />
                Compare
              </button>
            )}
            <button
              onClick={() => window.location.reload()}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
              title="Refresh"
            >
              <RotateCcw className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* File Info */}
        {file && (
          <div className="p-3 bg-muted/50 rounded-lg mb-4">
            <div className="flex items-center gap-2">
              {React.createElement(getFileIcon(file.name), { className: "h-4 w-4 text-muted-foreground" })}
              <div>
                <div className="text-sm font-medium">{file.name}</div>
                <div className="text-xs text-muted-foreground">{file.path}</div>
              </div>
            </div>
          </div>
        )}

        {/* Search and Filters */}
        <div className="space-y-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search history..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <div className="flex gap-2">
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="flex-1 px-3 py-2 border border-border rounded-lg bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
            >
              <option value="all">All Types</option>
              <option value="commit">Commits</option>
              <option value="merge">Merges</option>
              <option value="pull-request">Pull Requests</option>
              <option value="tag">Tags</option>
              <option value="branch">Branches</option>
            </select>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 border border-border rounded-lg bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
            >
              <option value="date">Date</option>
              <option value="author">Author</option>
              <option value="message">Message</option>
            </select>
            <button
              onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
              className="p-2 border border-border rounded-lg hover:bg-muted transition-colors"
              title={`Sort ${sortOrder === 'asc' ? 'Descending' : 'Ascending'}`}
            >
              {sortOrder === 'asc' ? <SortAsc className="h-4 w-4" /> : <SortDesc className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* History List */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-2">
          {filteredHistory.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-32 text-muted-foreground">
              <History className="h-8 w-8 mb-2" />
              <p className="text-sm">No history found</p>
            </div>
          ) : (
            filteredHistory.map((item, index) => {
              const CommitIcon = getCommitIcon(item.type);
              const isExpanded = expandedCommits.has(item.id);
              const isSelected = selectedVersions.includes(item.id);
              
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`border border-border rounded-lg overflow-hidden ${
                    isSelected ? 'ring-2 ring-primary/20' : ''
                  }`}
                >
                  <div
                    className="p-3 cursor-pointer hover:bg-muted/50 transition-colors"
                    onClick={() => handleVersionSelect(item)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        <CommitIcon className={`h-4 w-4 ${getCommitColor(item.type)}`} />
                        {item.type === 'commit' && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleCommit(item.id);
                            }}
                            className="p-1 hover:bg-muted rounded"
                          >
                            {isExpanded ? 
                              <ChevronDown className="h-3 w-3" /> : 
                              <ChevronRight className="h-3 w-3" />
                            }
                          </button>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium truncate">{item.message}</div>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <User className="h-3 w-3" />
                            {item.author}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {formatRelativeTime(item.timestamp)}
                          </span>
                          <span className="flex items-center gap-1">
                            <Hash className="h-3 w-3" />
                            {item.hash.substring(0, 7)}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        {isSelected && (
                          <CheckCircle className="h-4 w-4 text-primary" />
                        )}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onViewVersion?.(item);
                          }}
                          className="p-1 hover:bg-muted rounded"
                          title="View Version"
                        >
                          <Eye className="h-4 w-4 text-muted-foreground" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setRestoreVersion(item);
                            setShowRestoreModal(true);
                          }}
                          className="p-1 hover:bg-muted rounded"
                          title="Restore Version"
                        >
                          <RotateCcw className="h-4 w-4 text-muted-foreground" />
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Expanded Commit Details */}
                  <AnimatePresence>
                    {isExpanded && item.type === 'commit' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="border-t border-border bg-muted/20"
                      >
                        <div className="p-3 space-y-3">
                          <div className="text-sm">
                            <strong>Commit Hash:</strong> {item.hash}
                          </div>
                          <div className="text-sm">
                            <strong>Author:</strong> {item.author} &lt;{item.email}&gt;
                          </div>
                          <div className="text-sm">
                            <strong>Date:</strong> {new Date(item.timestamp).toLocaleString()}
                          </div>
                          {item.description && (
                            <div className="text-sm">
                              <strong>Description:</strong>
                              <p className="mt-1 text-muted-foreground">{item.description}</p>
                            </div>
                          )}
                          {item.changes && (
                            <div className="text-sm">
                              <strong>Changes:</strong>
                              <div className="mt-1 space-y-1">
                                {item.changes.map((change, idx) => (
                                  <div key={idx} className="flex items-center gap-2 text-xs">
                                    <span className={`px-2 py-1 rounded ${
                                      change.type === 'added' ? 'bg-green-100 text-green-800' :
                                      change.type === 'modified' ? 'bg-yellow-100 text-yellow-800' :
                                      'bg-red-100 text-red-800'
                                    }`}>
                                      {change.type}
                                    </span>
                                    <span>{change.file}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                          <div className="flex gap-2">
                            <button
                              onClick={() => onViewDiff?.(item)}
                              className="px-3 py-1 text-sm border border-border rounded hover:bg-muted transition-colors"
                            >
                              View Diff
                            </button>
                            <button
                              onClick={() => onDownloadVersion?.(item)}
                              className="px-3 py-1 text-sm border border-border rounded hover:bg-muted transition-colors"
                            >
                              Download
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })
          )}
        </div>
      </div>

      {/* Restore Version Modal */}
      <AnimatePresence>
        {showRestoreModal && restoreVersion && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowRestoreModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-card border border-border rounded-lg shadow-lg w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">Restore Version</h3>
                <div className="space-y-4">
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <div className="text-sm font-medium">{restoreVersion.message}</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {restoreVersion.author} • {formatRelativeTime(restoreVersion.timestamp)}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <AlertCircle className="h-4 w-4 text-yellow-600" />
                    <span className="text-sm text-yellow-800">
                      This will restore the file to this version. Current changes will be lost.
                    </span>
                  </div>
                </div>
                <div className="flex justify-end gap-2 mt-6">
                  <button
                    onClick={() => setShowRestoreModal(false)}
                    className="px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleRestoreVersion}
                    className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Restore
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdvancedFileHistory;
