import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  X, 
  File, 
  Folder, 
  Code, 
  Image, 
  FileText, 
  Archive, 
  Music, 
  Video,
  Clock,
  Star,
  GitBranch,
  Hash,
  Regex,
  CaseSensitive,
  WholeWord
} from 'lucide-react';

const AdvancedFileSearch = ({ 
  files = [], 
  onFileSelect, 
  onSearch, 
  className = "" 
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchOptions, setSearchOptions] = useState({
    caseSensitive: false,
    wholeWord: false,
    useRegex: false,
    fileTypes: [],
    dateRange: null,
    sizeRange: null
  });
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [recentSearches, setRecentSearches] = useState([]);
  const [savedSearches, setSavedSearches] = useState([]);
  const searchInputRef = useRef(null);

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

  // Perform search
  const performSearch = async (query) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    
    try {
      // Simulate search delay for better UX
      await new Promise(resolve => setTimeout(resolve, 300));
      
      let results = files.filter(file => {
        const fileName = searchOptions.caseSensitive ? file.name : file.name.toLowerCase();
        const filePath = searchOptions.caseSensitive ? file.path : file.path.toLowerCase();
        const searchTerm = searchOptions.caseSensitive ? query : query.toLowerCase();
        
        let matches = false;
        
        if (searchOptions.useRegex) {
          try {
            const regex = new RegExp(searchTerm, searchOptions.caseSensitive ? 'g' : 'gi');
            matches = regex.test(fileName) || regex.test(filePath);
          } catch (e) {
            // Fallback to simple search if regex is invalid
            matches = fileName.includes(searchTerm) || filePath.includes(searchTerm);
          }
        } else {
          if (searchOptions.wholeWord) {
            const wordRegex = new RegExp(`\\b${searchTerm}\\b`, searchOptions.caseSensitive ? 'g' : 'gi');
            matches = wordRegex.test(fileName) || wordRegex.test(filePath);
          } else {
            matches = fileName.includes(searchTerm) || filePath.includes(searchTerm);
          }
        }
        
        // Filter by file types
        if (searchOptions.fileTypes.length > 0) {
          const fileExtension = file.name.split('.').pop()?.toLowerCase();
          matches = matches && searchOptions.fileTypes.includes(fileExtension);
        }
        
        return matches;
      });
      
      // Sort results by relevance (exact matches first, then partial matches)
      results.sort((a, b) => {
        const aExact = a.name.toLowerCase() === query.toLowerCase();
        const bExact = b.name.toLowerCase() === query.toLowerCase();
        if (aExact && !bExact) return -1;
        if (!aExact && bExact) return 1;
        return a.name.localeCompare(b.name);
      });
      
      setSearchResults(results);
      
      // Add to recent searches
      if (query.trim() && !recentSearches.includes(query.trim())) {
        const newRecent = [query.trim(), ...recentSearches.slice(0, 9)];
        setRecentSearches(newRecent);
        localStorage.setItem('recentSearches', JSON.stringify(newRecent));
      }
      
      onSearch?.(results);
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setIsSearching(false);
    }
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    
    // Debounce search
    clearTimeout(searchInputRef.current);
    searchInputRef.current = setTimeout(() => {
      performSearch(value);
    }, 300);
  };

  // Handle search options change
  const handleSearchOptionsChange = (option, value) => {
    setSearchOptions(prev => ({
      ...prev,
      [option]: value
    }));
  };

  // Clear search
  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
    onSearch?.([]);
  };

  // Save search
  const saveSearch = () => {
    if (searchQuery.trim()) {
      const newSaved = [...savedSearches, {
        id: Date.now(),
        name: searchQuery,
        query: searchQuery,
        options: searchOptions
      }];
      setSavedSearches(newSaved);
      localStorage.setItem('savedSearches', JSON.stringify(newSaved));
    }
  };

  // Load saved searches
  useEffect(() => {
    const saved = localStorage.getItem('savedSearches');
    if (saved) {
      try {
        setSavedSearches(JSON.parse(saved));
      } catch (e) {
        console.error('Error loading saved searches:', e);
      }
    }
    
    const recent = localStorage.getItem('recentSearches');
    if (recent) {
      try {
        setRecentSearches(JSON.parse(recent));
      } catch (e) {
        console.error('Error loading recent searches:', e);
      }
    }
  }, []);

  // File type options
  const fileTypeOptions = [
    { value: 'js', label: 'JavaScript' },
    { value: 'ts', label: 'TypeScript' },
    { value: 'jsx', label: 'React JSX' },
    { value: 'tsx', label: 'React TSX' },
    { value: 'py', label: 'Python' },
    { value: 'css', label: 'CSS' },
    { value: 'html', label: 'HTML' },
    { value: 'json', label: 'JSON' },
    { value: 'md', label: 'Markdown' },
    { value: 'txt', label: 'Text' },
    { value: 'jpg', label: 'JPEG' },
    { value: 'png', label: 'PNG' },
    { value: 'pdf', label: 'PDF' }
  ];

  return (
    <div className={`flex flex-col h-full bg-background border-b border-border ${className}`}>
      {/* Search Header */}
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <Search className="h-5 w-5 text-muted-foreground" />
          <h3 className="text-lg font-semibold">Advanced Search</h3>
          <button
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="ml-auto p-1 hover:bg-muted rounded"
            title="Advanced Options"
          >
            <Filter className="h-4 w-4" />
          </button>
        </div>

        {/* Search Input */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search files by name, path, or content..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full pl-10 pr-10 py-2 border border-border rounded-lg bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          {searchQuery && (
            <button
              onClick={clearSearch}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-muted rounded"
            >
              <X className="h-4 w-4" />
            </button>
          )}
          {isSearching && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <div className="animate-spin rounded-full h-4 w-4 border-2 border-primary border-t-transparent"></div>
            </div>
          )}
        </div>

        {/* Search Options */}
        <AnimatePresence>
          {showAdvanced && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 space-y-4 p-4 bg-muted/50 rounded-lg"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={searchOptions.caseSensitive}
                      onChange={(e) => handleSearchOptionsChange('caseSensitive', e.target.checked)}
                      className="rounded"
                    />
                    <CaseSensitive className="h-4 w-4" />
                    Case Sensitive
                  </label>
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={searchOptions.wholeWord}
                      onChange={(e) => handleSearchOptionsChange('wholeWord', e.target.checked)}
                      className="rounded"
                    />
                    <WholeWord className="h-4 w-4" />
                    Whole Word
                  </label>
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={searchOptions.useRegex}
                      onChange={(e) => handleSearchOptionsChange('useRegex', e.target.checked)}
                      className="rounded"
                    />
                    <Regex className="h-4 w-4" />
                    Use Regex
                  </label>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">File Types</label>
                  <div className="max-h-32 overflow-y-auto space-y-1">
                    {fileTypeOptions.map(type => (
                      <label key={type.value} className="flex items-center gap-2 text-sm">
                        <input
                          type="checkbox"
                          checked={searchOptions.fileTypes.includes(type.value)}
                          onChange={(e) => {
                            const newTypes = e.target.checked
                              ? [...searchOptions.fileTypes, type.value]
                              : searchOptions.fileTypes.filter(t => t !== type.value);
                            handleSearchOptionsChange('fileTypes', newTypes);
                          }}
                          className="rounded"
                        />
                        {type.label}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={saveSearch}
                  className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded hover:bg-primary/90"
                >
                  Save Search
                </button>
                <button
                  onClick={() => setSearchOptions({
                    caseSensitive: false,
                    wholeWord: false,
                    useRegex: false,
                    fileTypes: [],
                    dateRange: null,
                    sizeRange: null
                  })}
                  className="px-3 py-1 text-sm border border-border rounded hover:bg-muted"
                >
                  Reset
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Search Results */}
      <div className="flex-1 overflow-y-auto">
        {searchResults.length > 0 ? (
          <div className="p-2 space-y-1">
            <div className="px-2 py-1 text-sm text-muted-foreground">
              {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} found
            </div>
            {searchResults.map((file, index) => {
              const Icon = file.type === 'folder' ? Folder : getFileIcon(file.name);
              return (
                <motion.div
                  key={file.path}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors"
                  onClick={() => onFileSelect?.(file)}
                >
                  <Icon className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium truncate">{file.name}</div>
                    <div className="text-xs text-muted-foreground truncate">{file.path}</div>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    {file.type === 'file' && (
                      <span>{file.size || 'Unknown size'}</span>
                    )}
                    {file.modified && (
                      <span>{new Date(file.modified).toLocaleDateString()}</span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : searchQuery ? (
          <div className="flex flex-col items-center justify-center h-32 text-muted-foreground">
            <Search className="h-8 w-8 mb-2" />
            <p className="text-sm">No files found</p>
            <p className="text-xs">Try adjusting your search terms</p>
          </div>
        ) : (
          <div className="p-4 space-y-4">
            {/* Recent Searches */}
            {recentSearches.length > 0 && (
              <div>
                <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Recent Searches
                </h4>
                <div className="space-y-1">
                  {recentSearches.slice(0, 5).map((search, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setSearchQuery(search);
                        performSearch(search);
                      }}
                      className="w-full text-left px-2 py-1 text-sm hover:bg-muted rounded"
                    >
                      {search}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Saved Searches */}
            {savedSearches.length > 0 && (
              <div>
                <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
                  <Star className="h-4 w-4" />
                  Saved Searches
                </h4>
                <div className="space-y-1">
                  {savedSearches.map((search) => (
                    <button
                      key={search.id}
                      onClick={() => {
                        setSearchQuery(search.query);
                        setSearchOptions(search.options);
                        performSearch(search.query);
                      }}
                      className="w-full text-left px-2 py-1 text-sm hover:bg-muted rounded flex items-center justify-between"
                    >
                      <span>{search.name}</span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          const newSaved = savedSearches.filter(s => s.id !== search.id);
                          setSavedSearches(newSaved);
                          localStorage.setItem('savedSearches', JSON.stringify(newSaved));
                        }}
                        className="p-1 hover:bg-muted rounded"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdvancedFileSearch;
