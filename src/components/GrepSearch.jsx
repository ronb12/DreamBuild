/**
 * Grep Search Component for DreamBuild
 * Powerful search interface for finding code across files
 * Product of Bradley Virtual Solutions, LLC
 */

import React, { useState, useEffect } from 'react';
import { Search, FileText, Filter, X, Copy, Download, ChevronRight, ChevronDown } from 'lucide-react';
import grepSearchService from '../services/grepSearchService';

const GrepSearch = ({ files = {}, onFileSelect }) => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
  const [expandedFiles, setExpandedFiles] = useState(new Set());
  
  // Search options
  const [caseSensitive, setCaseSensitive] = useState(false);
  const [wholeWord, setWholeWord] = useState(false);
  const [useRegex, setUseRegex] = useState(false);
  const [contextLines, setContextLines] = useState(0);
  const [fileTypes, setFileTypes] = useState([]);
  const [showAdvanced, setShowAdvanced] = useState(false);

  // Perform search
  const handleSearch = async () => {
    if (!query.trim()) return;

    setIsSearching(true);

    try {
      const results = await grepSearchService.search(query, files, {
        caseSensitive,
        wholeWord,
        regex: useRegex,
        contextLines,
        fileTypes: fileTypes.filter(t => t.trim())
      });

      setSearchResults(results);
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setIsSearching(false);
    }
  };

  // Handle Enter key
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  // Toggle file expansion
  const toggleFile = (filename) => {
    const newExpanded = new Set(expandedFiles);
    if (newExpanded.has(filename)) {
      newExpanded.delete(filename);
    } else {
      newExpanded.add(filename);
    }
    setExpandedFiles(newExpanded);
  };

  // Copy results
  const copyResults = () => {
    if (!searchResults) return;
    const text = grepSearchService.exportResults(searchResults, 'text');
    navigator.clipboard.writeText(text);
  };

  // Download results
  const downloadResults = () => {
    if (!searchResults) return;
    const markdown = grepSearchService.exportResults(searchResults, 'markdown');
    const blob = new Blob([markdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `search-results-${Date.now()}.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Get file types from files
  const availableFileTypes = Array.from(
    new Set(Object.keys(files).map(f => f.split('.').pop()).filter(Boolean))
  );

  return (
    <div className="h-full flex flex-col bg-background">
      {/* Search Header */}
      <div className="p-4 border-b border-border bg-card">
        <div className="flex items-center gap-2 mb-3">
          <Search className="h-5 w-5 text-primary" />
          <h2 className="text-lg font-semibold">Grep Search</h2>
        </div>

        {/* Search Input */}
        <div className="flex gap-2 mb-3">
          <div className="flex-1 relative">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Search in files... (supports regex)"
              className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-muted rounded"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
          
          <button
            onClick={handleSearch}
            disabled={!query.trim() || isSearching}
            className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {isSearching ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                Searching...
              </>
            ) : (
              <>
                <Search className="h-4 w-4" />
                Search
              </>
            )}
          </button>
        </div>

        {/* Search Options */}
        <div className="flex flex-wrap gap-3 items-center">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={caseSensitive}
              onChange={(e) => setCaseSensitive(e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">Case Sensitive (Aa)</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={wholeWord}
              onChange={(e) => setWholeWord(e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">Whole Word (\\b)</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={useRegex}
              onChange={(e) => setUseRegex(e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">Use Regex (.*)</span>
          </label>

          <button
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="flex items-center gap-1 text-sm text-primary hover:underline"
          >
            <Filter className="h-4 w-4" />
            {showAdvanced ? 'Hide' : 'Show'} Advanced
          </button>
        </div>

        {/* Advanced Options */}
        {showAdvanced && (
          <div className="mt-3 p-3 bg-muted rounded-lg space-y-2">
            <div className="flex items-center gap-4">
              <label className="text-sm font-medium">Context Lines:</label>
              <input
                type="number"
                min="0"
                max="10"
                value={contextLines}
                onChange={(e) => setContextLines(parseInt(e.target.value) || 0)}
                className="w-20 px-2 py-1 bg-background border border-border rounded"
              />
            </div>

            {availableFileTypes.length > 0 && (
              <div className="flex items-start gap-4">
                <label className="text-sm font-medium pt-1">File Types:</label>
                <div className="flex flex-wrap gap-2">
                  {availableFileTypes.map(type => (
                    <label key={type} className="flex items-center gap-1 text-sm cursor-pointer">
                      <input
                        type="checkbox"
                        checked={fileTypes.includes(type)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setFileTypes([...fileTypes, type]);
                          } else {
                            setFileTypes(fileTypes.filter(t => t !== type));
                          }
                        }}
                        className="rounded"
                      />
                      .{type}
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Results */}
      <div className="flex-1 overflow-auto p-4">
        {searchResults === null ? (
          <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
            <Search className="h-16 w-16 mb-4 opacity-20" />
            <p className="text-lg">Enter a search query to find code across files</p>
            <p className="text-sm mt-2">Supports regex patterns and advanced filters</p>
          </div>
        ) : searchResults.totalMatches === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
            <FileText className="h-16 w-16 mb-4 opacity-20" />
            <p className="text-lg">No matches found for "{searchResults.query}"</p>
            <p className="text-sm mt-2">Try adjusting your search query or options</p>
          </div>
        ) : (
          <>
            {/* Results Header */}
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-border">
              <div>
                <h3 className="text-lg font-semibold">
                  {searchResults.totalMatches} matches in {searchResults.filesWithMatches} files
                </h3>
                <p className="text-sm text-muted-foreground">
                  Found in {searchResults.duration}ms • Searched {searchResults.filesSearched} files
                </p>
              </div>
              
              <div className="flex gap-2">
                <button
                  onClick={copyResults}
                  className="px-3 py-2 bg-muted hover:bg-muted/80 rounded-lg flex items-center gap-2 text-sm"
                  title="Copy results"
                >
                  <Copy className="h-4 w-4" />
                  Copy
                </button>
                
                <button
                  onClick={downloadResults}
                  className="px-3 py-2 bg-muted hover:bg-muted/80 rounded-lg flex items-center gap-2 text-sm"
                  title="Download results"
                >
                  <Download className="h-4 w-4" />
                  Download
                </button>
              </div>
            </div>

            {/* Results List */}
            <div className="space-y-2">
              {searchResults.results.map((fileResult, idx) => (
                <div key={idx} className="border border-border rounded-lg overflow-hidden">
                  {/* File Header */}
                  <button
                    onClick={() => toggleFile(fileResult.filename)}
                    className="w-full px-4 py-3 bg-card hover:bg-muted/50 flex items-center justify-between transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      {expandedFiles.has(fileResult.filename) ? (
                        <ChevronDown className="h-4 w-4" />
                      ) : (
                        <ChevronRight className="h-4 w-4" />
                      )}
                      <FileText className="h-4 w-4 text-primary" />
                      <span className="font-mono text-sm font-medium">{fileResult.filename}</span>
                      <span className="text-xs text-muted-foreground">
                        ({fileResult.matchCount} matches)
                      </span>
                    </div>
                  </button>

                  {/* Matches */}
                  {expandedFiles.has(fileResult.filename) && (
                    <div className="bg-background">
                      {fileResult.matches.map((match, matchIdx) => (
                        <div
                          key={matchIdx}
                          className="border-t border-border px-4 py-2 hover:bg-muted/30 cursor-pointer"
                          onClick={() => onFileSelect && onFileSelect(fileResult.filename, match.lineNumber)}
                        >
                          <div className="flex items-start gap-3">
                            <span className="text-xs text-muted-foreground font-mono min-w-[3rem] text-right">
                              {match.lineNumber}:
                            </span>
                            <code className="text-sm font-mono flex-1">
                              {match.line.substring(0, match.matchStart)}
                              <span className="bg-yellow-200 dark:bg-yellow-800 px-0.5">
                                {match.matchText}
                              </span>
                              {match.line.substring(match.matchEnd)}
                            </code>
                          </div>

                          {/* Context Lines */}
                          {match.context && (
                            <div className="ml-14 mt-1 space-y-0.5 opacity-60">
                              {match.context.before?.map((ctx, ctxIdx) => (
                                <div key={`before-${ctxIdx}`} className="flex gap-3">
                                  <span className="text-xs text-muted-foreground font-mono min-w-[3rem] text-right">
                                    {ctx.lineNumber}:
                                  </span>
                                  <code className="text-xs font-mono">{ctx.line}</code>
                                </div>
                              ))}
                              {match.context.after?.map((ctx, ctxIdx) => (
                                <div key={`after-${ctxIdx}`} className="flex gap-3">
                                  <span className="text-xs text-muted-foreground font-mono min-w-[3rem] text-right">
                                    {ctx.lineNumber}:
                                  </span>
                                  <code className="text-xs font-mono">{ctx.line}</code>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default GrepSearch;

