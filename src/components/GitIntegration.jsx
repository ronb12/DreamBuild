// src/components/GitIntegration.jsx

import React, { useState, useEffect } from 'react';
import { GitBranch, GitCommit, GitPullRequest, Upload, Download, Plus, Minus, Eye, History, Settings } from 'lucide-react';
import gitIntegrationService from '../services/gitIntegrationService';

const GitIntegration = ({ className = '', onFileSelect }) => {
  const [gitStatus, setGitStatus] = useState(null);
  const [branches, setBranches] = useState([]);
  const [commits, setCommits] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('status');
  const [commitMessage, setCommitMessage] = useState('');
  const [selectedFiles, setSelectedFiles] = useState([]);

  useEffect(() => {
    initializeGit();
  }, []);

  const initializeGit = async () => {
    setIsLoading(true);
    try {
      await gitIntegrationService.initialize();
      await loadGitData();
    } catch (error) {
      console.error('Error initializing Git:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const loadGitData = async () => {
    try {
      const [status, branches, commits] = await Promise.all([
        gitIntegrationService.getStatus(),
        gitIntegrationService.getBranches(),
        gitIntegrationService.getCommitHistory(5)
      ]);
      
      setGitStatus(status);
      setBranches(branches);
      setCommits(commits);
    } catch (error) {
      console.error('Error loading Git data:', error);
    }
  };

  const handleStageFile = async (file) => {
    try {
      const result = await gitIntegrationService.stageFiles([file]);
      if (result.success) {
        await loadGitData();
      }
    } catch (error) {
      console.error('Error staging file:', error);
    }
  };

  const handleUnstageFile = async (file) => {
    try {
      const result = await gitIntegrationService.unstageFiles([file]);
      if (result.success) {
        await loadGitData();
      }
    } catch (error) {
      console.error('Error unstaging file:', error);
    }
  };

  const handleCommit = async () => {
    if (!commitMessage.trim()) return;
    
    try {
      const result = await gitIntegrationService.commit(commitMessage, selectedFiles);
      if (result.success) {
        setCommitMessage('');
        setSelectedFiles([]);
        await loadGitData();
      }
    } catch (error) {
      console.error('Error committing:', error);
    }
  };

  const handlePush = async () => {
    try {
      const result = await gitIntegrationService.push();
      if (result.success) {
        await loadGitData();
      }
    } catch (error) {
      console.error('Error pushing:', error);
    }
  };

  const handlePull = async () => {
    try {
      const result = await gitIntegrationService.pull();
      if (result.success) {
        await loadGitData();
      }
    } catch (error) {
      console.error('Error pulling:', error);
    }
  };

  const handleSwitchBranch = async (branchName) => {
    try {
      const result = await gitIntegrationService.switchBranch(branchName);
      if (result.success) {
        await loadGitData();
      }
    } catch (error) {
      console.error('Error switching branch:', error);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'clean':
        return 'text-green-500';
      case 'modified':
        return 'text-yellow-500';
      case 'staged':
        return 'text-blue-500';
      default:
        return 'text-gray-500';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'clean':
        return <GitCommit className="h-4 w-4 text-green-500" />;
      case 'modified':
        return <GitBranch className="h-4 w-4 text-yellow-500" />;
      case 'staged':
        return <GitPullRequest className="h-4 w-4 text-blue-500" />;
      default:
        return <GitBranch className="h-4 w-4 text-gray-500" />;
    }
  };

  if (isLoading) {
    return (
      <div className={`flex items-center justify-center h-full ${className}`}>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className={`flex flex-col h-full bg-card border border-border rounded-lg ${className}`}>
      {/* Header */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <GitBranch className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-semibold">Git Integration</h3>
          </div>
          <div className="flex items-center gap-2">
            {gitStatus && getStatusIcon(gitStatus.status)}
            <span className={`text-sm font-medium ${getStatusColor(gitStatus?.status)}`}>
              {gitStatus?.status || 'Unknown'}
            </span>
          </div>
        </div>

        {/* Repository Info */}
        {gitStatus && (
          <div className="space-y-2">
            <div className="text-sm">
              <span className="text-muted-foreground">Repository:</span>
              <span className="ml-2 font-medium">{gitStatus.repository?.name}</span>
            </div>
            <div className="text-sm">
              <span className="text-muted-foreground">Branch:</span>
              <span className="ml-2 font-medium">{gitStatus.branch}</span>
            </div>
            <div className="text-sm">
              <span className="text-muted-foreground">Remote:</span>
              <span className="ml-2 font-medium">{gitStatus.remote}</span>
            </div>
          </div>
        )}
      </div>

      {/* Tabs */}
      <div className="flex border-b border-border">
        {[
          { id: 'status', label: 'Status', icon: GitBranch },
          { id: 'branches', label: 'Branches', icon: GitBranch },
          { id: 'commits', label: 'History', icon: History }
        ].map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon className="h-4 w-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4">
        {activeTab === 'status' && (
          <div className="space-y-4">
            {/* Staged Files */}
            {gitStatus?.stagedFiles && gitStatus.stagedFiles.length > 0 && (
              <div>
                <h4 className="text-sm font-medium mb-2 text-green-600">Staged Files</h4>
                <div className="space-y-1">
                  {gitStatus.stagedFiles.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 p-2 bg-green-50 text-green-700 rounded-lg"
                    >
                      <Plus className="h-4 w-4" />
                      <span className="text-sm flex-1">{file}</span>
                      <button
                        onClick={() => handleUnstageFile(file)}
                        className="text-green-600 hover:text-green-800"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Unstaged Files */}
            {gitStatus?.unstagedFiles && gitStatus.unstagedFiles.length > 0 && (
              <div>
                <h4 className="text-sm font-medium mb-2 text-yellow-600">Modified Files</h4>
                <div className="space-y-1">
                  {gitStatus.unstagedFiles.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 p-2 bg-yellow-50 text-yellow-700 rounded-lg"
                    >
                      <Minus className="h-4 w-4" />
                      <span className="text-sm flex-1">{file}</span>
                      <button
                        onClick={() => handleStageFile(file)}
                        className="text-yellow-600 hover:text-yellow-800"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Untracked Files */}
            {gitStatus?.untrackedFiles && gitStatus.untrackedFiles.length > 0 && (
              <div>
                <h4 className="text-sm font-medium mb-2 text-blue-600">Untracked Files</h4>
                <div className="space-y-1">
                  {gitStatus.untrackedFiles.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 p-2 bg-blue-50 text-blue-700 rounded-lg"
                    >
                      <Eye className="h-4 w-4" />
                      <span className="text-sm flex-1">{file}</span>
                      <button
                        onClick={() => handleStageFile(file)}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Commit Section */}
            <div className="border-t border-border pt-4">
              <h4 className="text-sm font-medium mb-2">Commit Changes</h4>
              <div className="space-y-3">
                <textarea
                  value={commitMessage}
                  onChange={(e) => setCommitMessage(e.target.value)}
                  placeholder="Enter commit message..."
                  className="w-full p-3 border border-border rounded-lg text-sm resize-none"
                  rows={3}
                />
                <div className="flex gap-2">
                  <button
                    onClick={handleCommit}
                    disabled={!commitMessage.trim()}
                    className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/90"
                  >
                    Commit
                  </button>
                  <button
                    onClick={handlePush}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700"
                  >
                    <Upload className="h-4 w-4 inline mr-1" />
                    Push
                  </button>
                  <button
                    onClick={handlePull}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
                  >
                    <Download className="h-4 w-4 inline mr-1" />
                    Pull
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'branches' && (
          <div className="space-y-2">
            {branches.map((branch, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 p-3 rounded-lg border ${
                  branch.current
                    ? 'bg-primary/10 border-primary/20'
                    : 'bg-muted/30 border-border hover:bg-muted/50'
                }`}
              >
                <GitBranch className="h-4 w-4 text-primary" />
                <div className="flex-1">
                  <div className="text-sm font-medium">{branch.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {branch.remote || 'Local branch'}
                  </div>
                </div>
                {branch.current && (
                  <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded">
                    Current
                  </span>
                )}
                {!branch.current && (
                  <button
                    onClick={() => handleSwitchBranch(branch.name)}
                    className="text-primary hover:text-primary/80 text-sm"
                  >
                    Switch
                  </button>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === 'commits' && (
          <div className="space-y-3">
            {commits.map((commit, index) => (
              <div
                key={index}
                className="p-3 bg-muted/30 rounded-lg border border-border"
              >
                <div className="flex items-start gap-3">
                  <GitCommit className="h-4 w-4 text-primary mt-1" />
                  <div className="flex-1">
                    <div className="text-sm font-medium mb-1">{commit.message}</div>
                    <div className="text-xs text-muted-foreground mb-2">
                      {commit.author} • {new Date(commit.date).toLocaleString()}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Hash: {commit.hash}
                    </div>
                    {commit.files && commit.files.length > 0 && (
                      <div className="mt-2">
                        <div className="text-xs text-muted-foreground mb-1">Files:</div>
                        <div className="flex flex-wrap gap-1">
                          {commit.files.map((file, fileIndex) => (
                            <span
                              key={fileIndex}
                              className="text-xs bg-muted px-2 py-1 rounded"
                            >
                              {file}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-border bg-muted/20">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>Git Integration v1.0.0</span>
          <span>Repository: {gitStatus?.repository?.name || 'Unknown'}</span>
        </div>
      </div>
    </div>
  );
};

export default GitIntegration;
