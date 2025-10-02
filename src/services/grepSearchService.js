/**
 * Grep Search Service for DreamBuild
 * Powerful code search functionality similar to grep, ripgrep, and IDEs
 * Product of Bradley Virtual Solutions, LLC
 */

class GrepSearchService {
  constructor() {
    this.searchHistory = [];
    this.maxHistorySize = 100;
    this.searchCache = new Map();
    this.cacheTimeout = 5 * 60 * 1000; // 5 minutes
    
    console.log('🔍 Grep Search Service initialized');
  }

  /**
   * Search through files with grep-like functionality
   */
  async search(query, files, options = {}) {
    const startTime = Date.now();
    
    const config = {
      caseSensitive: options.caseSensitive || false,
      wholeWord: options.wholeWord || false,
      regex: options.regex || false,
      includeLineNumbers: options.includeLineNumbers !== false,
      contextLines: options.contextLines || 0,
      maxResults: options.maxResults || 1000,
      fileTypes: options.fileTypes || [],
      excludePatterns: options.excludePatterns || [],
      includeHidden: options.includeHidden || false,
      ...options
    };

    console.log('🔍 Searching for:', query);
    console.log('📁 Files to search:', Object.keys(files).length);

    try {
      const results = await this.performSearch(query, files, config);
      
      const searchResult = {
        query,
        results: results.matches,
        totalMatches: results.totalMatches,
        filesSearched: results.filesSearched,
        filesWithMatches: results.filesWithMatches,
        duration: Date.now() - startTime,
        timestamp: new Date().toISOString()
      };

      // Add to history
      this.addToHistory(searchResult);

      console.log(`✅ Found ${results.totalMatches} matches in ${results.filesWithMatches} files (${searchResult.duration}ms)`);

      return searchResult;
    } catch (error) {
      console.error('❌ Search failed:', error);
      return {
        query,
        results: [],
        totalMatches: 0,
        error: error.message,
        duration: Date.now() - startTime
      };
    }
  }

  /**
   * Perform the actual search
   */
  async performSearch(query, files, config) {
    const matches = [];
    let totalMatches = 0;
    let filesSearched = 0;
    let filesWithMatches = 0;

    // Create search pattern
    const pattern = this.createSearchPattern(query, config);

    for (const [filename, content] of Object.entries(files)) {
      // Skip if file type not included
      if (config.fileTypes.length > 0) {
        const ext = filename.split('.').pop();
        if (!config.fileTypes.includes(ext)) continue;
      }

      // Skip if excluded pattern matches
      if (this.isExcluded(filename, config.excludePatterns)) continue;

      // Skip hidden files unless included
      if (!config.includeHidden && filename.startsWith('.')) continue;

      filesSearched++;

      const fileMatches = this.searchInFile(filename, content, pattern, config);
      
      if (fileMatches.length > 0) {
        filesWithMatches++;
        totalMatches += fileMatches.length;
        
        matches.push({
          filename,
          matches: fileMatches,
          matchCount: fileMatches.length
        });
      }

      // Stop if max results reached
      if (totalMatches >= config.maxResults) break;
    }

    return {
      matches,
      totalMatches,
      filesSearched,
      filesWithMatches
    };
  }

  /**
   * Search within a single file
   */
  searchInFile(filename, content, pattern, config) {
    const matches = [];
    const lines = content.split('\n');

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const match = pattern.exec(line);

      if (match) {
        const matchInfo = {
          lineNumber: i + 1,
          line: line,
          matchStart: match.index,
          matchEnd: match.index + match[0].length,
          matchText: match[0]
        };

        // Add context lines if requested
        if (config.contextLines > 0) {
          matchInfo.context = {
            before: this.getContextLines(lines, i, -config.contextLines, 0),
            after: this.getContextLines(lines, i, 1, config.contextLines + 1)
          };
        }

        matches.push(matchInfo);
      }

      // Reset regex for global search
      if (config.regex && pattern.global) {
        pattern.lastIndex = 0;
      }
    }

    return matches;
  }

  /**
   * Get context lines around a match
   */
  getContextLines(lines, currentIndex, start, end) {
    const contextLines = [];
    const startIndex = Math.max(0, currentIndex + start);
    const endIndex = Math.min(lines.length, currentIndex + end);

    for (let i = startIndex; i < endIndex; i++) {
      if (i !== currentIndex) {
        contextLines.push({
          lineNumber: i + 1,
          line: lines[i]
        });
      }
    }

    return contextLines;
  }

  /**
   * Create search pattern based on options
   */
  createSearchPattern(query, config) {
    if (config.regex) {
      try {
        const flags = config.caseSensitive ? 'g' : 'gi';
        return new RegExp(query, flags);
      } catch (error) {
        console.warn('Invalid regex, using literal search:', error.message);
        return this.createLiteralPattern(query, config);
      }
    }

    return this.createLiteralPattern(query, config);
  }

  /**
   * Create literal search pattern
   */
  createLiteralPattern(query, config) {
    let pattern = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // Escape special chars

    if (config.wholeWord) {
      pattern = `\\b${pattern}\\b`;
    }

    const flags = config.caseSensitive ? 'g' : 'gi';
    return new RegExp(pattern, flags);
  }

  /**
   * Check if filename matches exclusion patterns
   */
  isExcluded(filename, excludePatterns) {
    return excludePatterns.some(pattern => {
      if (typeof pattern === 'string') {
        return filename.includes(pattern);
      }
      if (pattern instanceof RegExp) {
        return pattern.test(filename);
      }
      return false;
    });
  }

  /**
   * Search and replace across files
   */
  async searchAndReplace(query, replacement, files, options = {}) {
    const searchResults = await this.search(query, files, options);
    
    if (searchResults.totalMatches === 0) {
      return {
        success: false,
        message: 'No matches found',
        filesModified: 0
      };
    }

    const modifiedFiles = {};
    let totalReplacements = 0;

    for (const fileResult of searchResults.results) {
      const { filename } = fileResult;
      let content = files[filename];
      const pattern = this.createSearchPattern(query, options);
      
      // Count matches before replacement
      const matches = (content.match(pattern) || []).length;
      
      // Perform replacement
      content = content.replace(pattern, replacement);
      
      modifiedFiles[filename] = content;
      totalReplacements += matches;
    }

    return {
      success: true,
      modifiedFiles,
      filesModified: Object.keys(modifiedFiles).length,
      totalReplacements,
      originalResults: searchResults
    };
  }

  /**
   * Find files by name pattern
   */
  async findFiles(pattern, files, options = {}) {
    const config = {
      caseSensitive: options.caseSensitive || false,
      regex: options.regex || false,
      includeHidden: options.includeHidden || false,
      excludePatterns: options.excludePatterns || []
    };

    const searchPattern = config.regex 
      ? new RegExp(pattern, config.caseSensitive ? '' : 'i')
      : new RegExp(pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), config.caseSensitive ? '' : 'i');

    const matches = [];

    for (const filename of Object.keys(files)) {
      // Skip hidden files unless included
      if (!config.includeHidden && filename.startsWith('.')) continue;

      // Skip if excluded
      if (this.isExcluded(filename, config.excludePatterns)) continue;

      if (searchPattern.test(filename)) {
        matches.push({
          filename,
          path: filename,
          size: files[filename].length
        });
      }
    }

    return {
      pattern,
      matches,
      totalMatches: matches.length
    };
  }

  /**
   * Find symbol/function/class definitions
   */
  async findDefinitions(symbol, files, options = {}) {
    const patterns = [
      // JavaScript/TypeScript
      `function\\s+${symbol}\\s*\\(`,
      `const\\s+${symbol}\\s*=`,
      `let\\s+${symbol}\\s*=`,
      `var\\s+${symbol}\\s*=`,
      `class\\s+${symbol}\\s*{`,
      `interface\\s+${symbol}\\s*{`,
      `type\\s+${symbol}\\s*=`,
      `export\\s+.*${symbol}`,
      
      // Python
      `def\\s+${symbol}\\s*\\(`,
      `class\\s+${symbol}\\s*:`,
      
      // Java/C#
      `class\\s+${symbol}`,
      `public\\s+.*${symbol}\\s*\\(`,
      `private\\s+.*${symbol}\\s*\\(`,
      
      // General
      `${symbol}\\s*=\\s*function`,
      `${symbol}:\\s*function`
    ];

    const results = [];

    for (const pattern of patterns) {
      const searchResult = await this.search(pattern, files, {
        ...options,
        regex: true,
        caseSensitive: false
      });

      if (searchResult.results.length > 0) {
        results.push(...searchResult.results);
      }
    }

    return {
      symbol,
      definitions: results,
      totalFound: results.length
    };
  }

  /**
   * Find all references to a symbol
   */
  async findReferences(symbol, files, options = {}) {
    return await this.search(symbol, files, {
      ...options,
      wholeWord: true,
      caseSensitive: false,
      contextLines: 2
    });
  }

  /**
   * Search with multiple patterns (OR logic)
   */
  async multiSearch(queries, files, options = {}) {
    const results = [];

    for (const query of queries) {
      const result = await this.search(query, files, options);
      results.push(result);
    }

    return {
      queries,
      results,
      totalMatches: results.reduce((sum, r) => sum + r.totalMatches, 0),
      filesWithMatches: new Set(
        results.flatMap(r => r.results.map(f => f.filename))
      ).size
    };
  }

  /**
   * Advanced search with filters
   */
  async advancedSearch(config, files) {
    const {
      includePatterns = [],
      excludePatterns = [],
      fileTypes = [],
      minFileSize = 0,
      maxFileSize = Infinity,
      modifiedAfter = null,
      modifiedBefore = null
    } = config;

    // Filter files first
    const filteredFiles = {};

    for (const [filename, content] of Object.entries(files)) {
      // File type filter
      if (fileTypes.length > 0) {
        const ext = filename.split('.').pop();
        if (!fileTypes.includes(ext)) continue;
      }

      // Size filter
      const size = content.length;
      if (size < minFileSize || size > maxFileSize) continue;

      // Exclusion filter
      if (this.isExcluded(filename, excludePatterns)) continue;

      // Include pattern filter
      if (includePatterns.length > 0) {
        const matches = includePatterns.some(pattern => 
          new RegExp(pattern).test(filename)
        );
        if (!matches) continue;
      }

      filteredFiles[filename] = content;
    }

    // Perform search on filtered files
    return await this.search(config.query, filteredFiles, config.options || {});
  }

  /**
   * Get search statistics
   */
  getStatistics() {
    return {
      totalSearches: this.searchHistory.length,
      recentSearches: this.searchHistory.slice(-10),
      cacheSize: this.searchCache.size,
      averageSearchTime: this.calculateAverageSearchTime()
    };
  }

  /**
   * Calculate average search time
   */
  calculateAverageSearchTime() {
    if (this.searchHistory.length === 0) return 0;
    
    const totalTime = this.searchHistory.reduce((sum, search) => sum + search.duration, 0);
    return (totalTime / this.searchHistory.length).toFixed(2);
  }

  /**
   * Add search to history
   */
  addToHistory(searchResult) {
    this.searchHistory.push({
      query: searchResult.query,
      totalMatches: searchResult.totalMatches,
      filesWithMatches: searchResult.filesWithMatches,
      duration: searchResult.duration,
      timestamp: searchResult.timestamp
    });

    // Limit history size
    if (this.searchHistory.length > this.maxHistorySize) {
      this.searchHistory.shift();
    }
  }

  /**
   * Clear search history
   */
  clearHistory() {
    this.searchHistory = [];
    this.searchCache.clear();
    console.log('🧹 Search history cleared');
  }

  /**
   * Export search results
   */
  exportResults(searchResult, format = 'json') {
    switch (format) {
      case 'json':
        return JSON.stringify(searchResult, null, 2);
      
      case 'text':
        return this.formatAsText(searchResult);
      
      case 'markdown':
        return this.formatAsMarkdown(searchResult);
      
      case 'csv':
        return this.formatAsCSV(searchResult);
      
      default:
        return JSON.stringify(searchResult);
    }
  }

  /**
   * Format results as text
   */
  formatAsText(searchResult) {
    let text = `Search Results for: "${searchResult.query}"\n`;
    text += `Total Matches: ${searchResult.totalMatches}\n`;
    text += `Files with Matches: ${searchResult.filesWithMatches}\n`;
    text += `Duration: ${searchResult.duration}ms\n\n`;

    for (const fileResult of searchResult.results) {
      text += `\n${fileResult.filename} (${fileResult.matchCount} matches):\n`;
      text += '─'.repeat(80) + '\n';

      for (const match of fileResult.matches) {
        text += `  Line ${match.lineNumber}: ${match.line}\n`;
      }
    }

    return text;
  }

  /**
   * Format results as Markdown
   */
  formatAsMarkdown(searchResult) {
    let md = `# Search Results: "${searchResult.query}"\n\n`;
    md += `- **Total Matches:** ${searchResult.totalMatches}\n`;
    md += `- **Files with Matches:** ${searchResult.filesWithMatches}\n`;
    md += `- **Duration:** ${searchResult.duration}ms\n\n`;

    for (const fileResult of searchResult.results) {
      md += `## ${fileResult.filename} (${fileResult.matchCount} matches)\n\n`;

      for (const match of fileResult.matches) {
        md += `**Line ${match.lineNumber}:**\n\`\`\`\n${match.line}\n\`\`\`\n\n`;
      }
    }

    return md;
  }

  /**
   * Format results as CSV
   */
  formatAsCSV(searchResult) {
    let csv = 'Filename,Line Number,Line Content,Match Text\n';

    for (const fileResult of searchResult.results) {
      for (const match of fileResult.matches) {
        const line = match.line.replace(/"/g, '""'); // Escape quotes
        csv += `"${fileResult.filename}",${match.lineNumber},"${line}","${match.matchText}"\n`;
      }
    }

    return csv;
  }
}

// Create singleton instance
const grepSearchService = new GrepSearchService();

export default grepSearchService;

