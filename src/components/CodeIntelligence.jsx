// src/components/CodeIntelligence.jsx

import React, { useState, useEffect } from 'react';
import { Search, ArrowRight, FileText, AlertCircle, CheckCircle, Info, Zap, Eye, Code2 } from 'lucide-react';
import aiCodeIntelligenceService from '../services/aiCodeIntelligenceService';

const CodeIntelligence = ({ filePath, content, language, onNavigate, className = '' }) => {
  const [completions, setCompletions] = useState([]);
  const [errors, setErrors] = useState([]);
  const [definitions, setDefinitions] = useState([]);
  const [references, setReferences] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showCompletions, setShowCompletions] = useState(false);
  const [selectedCompletion, setSelectedCompletion] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    initializeCodeIntelligence();
  }, [filePath, content, language]);

  const initializeCodeIntelligence = async () => {
    try {
      await aiCodeIntelligenceService.initialize();
      await analyzeCode();
    } catch (error) {
      console.error('Error initializing code intelligence:', error);
    }
  };

  const analyzeCode = async () => {
    if (!content || !language) return;
    
    setIsLoading(true);
    try {
      // Get code completions
      const completions = await aiCodeIntelligenceService.getCodeCompletion(
        filePath, 
        content, 
        { line: 0, character: 0 }, 
        language
      );
      setCompletions(completions);

      // Get error detection
      const errors = await aiCodeIntelligenceService.detectErrors(filePath, content, language);
      setErrors(errors);

      // Get definitions and references
      const definitions = await aiCodeIntelligenceService.findDefinition(
        filePath, 
        content, 
        { line: 0, character: 0 }, 
        language
      );
      setDefinitions(definitions ? [definitions] : []);

      const references = await aiCodeIntelligenceService.findReferences(
        filePath, 
        content, 
        { line: 0, character: 0 }, 
        language
      );
      setReferences(references);

    } catch (error) {
      console.error('Error analyzing code:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = async (query) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    setIsLoading(true);
    try {
      // Simulate search results
      const results = [
        {
          file: filePath,
          line: 1,
          column: 0,
          text: `function ${query}() { ... }`,
          match: query
        },
        {
          file: filePath,
          line: 5,
          column: 10,
          text: `const ${query} = 'value';`,
          match: query
        }
      ];
      setSearchResults(results);
    } catch (error) {
      console.error('Error searching:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoToDefinition = (definition) => {
    if (onNavigate) {
      onNavigate(definition.file, definition.line, definition.column);
    }
  };

  const handleGoToReference = (reference) => {
    if (onNavigate) {
      onNavigate(reference.file, reference.line, reference.column);
    }
  };

  const getErrorIcon = (severity) => {
    switch (severity) {
      case 'error':
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      case 'warning':
        return <AlertCircle className="h-4 w-4 text-yellow-500" />;
      case 'info':
        return <Info className="h-4 w-4 text-blue-500" />;
      default:
        return <Info className="h-4 w-4 text-gray-500" />;
    }
  };

  const getErrorColor = (severity) => {
    switch (severity) {
      case 'error':
        return 'text-red-500';
      case 'warning':
        return 'text-yellow-500';
      case 'info':
        return 'text-blue-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <div className={`flex flex-col h-full bg-card border border-border rounded-lg ${className}`}>
      {/* Header */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-semibold">Code Intelligence</h3>
            {isLoading && (
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary"></div>
            )}
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-xs text-muted-foreground">Active</span>
          </div>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search symbols, functions, variables..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              handleSearch(e.target.value);
            }}
            className="w-full pl-10 pr-4 py-2 bg-muted/50 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {/* Code Completions */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Code2 className="h-4 w-4 text-primary" />
            <h4 className="text-sm font-medium">Code Completions</h4>
            <span className="text-xs text-muted-foreground">({completions.length})</span>
          </div>
          <div className="space-y-2">
            {completions.slice(0, 5).map((completion, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-2 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                onClick={() => setShowCompletions(!showCompletions)}
              >
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <div className="flex-1">
                  <div className="text-sm font-medium">{completion.label}</div>
                  <div className="text-xs text-muted-foreground">{completion.detail}</div>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
              </div>
            ))}
          </div>
        </div>

        {/* Error Detection */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <AlertCircle className="h-4 w-4 text-primary" />
            <h4 className="text-sm font-medium">Error Detection</h4>
            <span className="text-xs text-muted-foreground">({errors.length})</span>
          </div>
          <div className="space-y-2">
            {errors.length === 0 ? (
              <div className="flex items-center gap-2 p-2 bg-green-50 text-green-700 rounded-lg">
                <CheckCircle className="h-4 w-4" />
                <span className="text-sm">No errors found</span>
              </div>
            ) : (
              errors.map((error, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-2 bg-red-50 text-red-700 rounded-lg"
                >
                  {getErrorIcon(error.severity)}
                  <div className="flex-1">
                    <div className="text-sm font-medium">{error.message}</div>
                    <div className="text-xs text-red-600">
                      Line {error.line}, Column {error.column}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Definitions */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <FileText className="h-4 w-4 text-primary" />
            <h4 className="text-sm font-medium">Definitions</h4>
            <span className="text-xs text-muted-foreground">({definitions.length})</span>
          </div>
          <div className="space-y-2">
            {definitions.length === 0 ? (
              <div className="text-sm text-muted-foreground">No definitions found</div>
            ) : (
              definitions.map((definition, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-2 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                  onClick={() => handleGoToDefinition(definition)}
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">{definition.text}</div>
                    <div className="text-xs text-muted-foreground">
                      Line {definition.line}, Column {definition.column}
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </div>
              ))
            )}
          </div>
        </div>

        {/* References */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Eye className="h-4 w-4 text-primary" />
            <h4 className="text-sm font-medium">References</h4>
            <span className="text-xs text-muted-foreground">({references.length})</span>
          </div>
          <div className="space-y-2">
            {references.length === 0 ? (
              <div className="text-sm text-muted-foreground">No references found</div>
            ) : (
              references.slice(0, 5).map((reference, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-2 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                  onClick={() => handleGoToReference(reference)}
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">{reference.text}</div>
                    <div className="text-xs text-muted-foreground">
                      Line {reference.line}, Column {reference.column}
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </div>
              ))
            )}
          </div>
        </div>

        {/* Search Results */}
        {searchResults.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Search className="h-4 w-4 text-primary" />
              <h4 className="text-sm font-medium">Search Results</h4>
              <span className="text-xs text-muted-foreground">({searchResults.length})</span>
            </div>
            <div className="space-y-2">
              {searchResults.map((result, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-2 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                  onClick={() => handleGoToReference(result)}
                >
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">{result.text}</div>
                    <div className="text-xs text-muted-foreground">
                      Line {result.line}, Column {result.column}
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-border bg-muted/20">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>Language: {language || 'Unknown'}</span>
          <span>File: {filePath ? filePath.split('/').pop() : 'None'}</span>
        </div>
      </div>
    </div>
  );
};

export default CodeIntelligence;
