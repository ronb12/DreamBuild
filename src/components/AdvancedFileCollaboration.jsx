import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  UserPlus, 
  Share2, 
  Lock, 
  Unlock, 
  Eye, 
  Edit, 
  Trash2, 
  MoreVertical, 
  Copy, 
  Link, 
  Mail, 
  MessageCircle, 
  Bell, 
  Settings, 
  Crown, 
  Shield, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  X,
  Plus,
  Search
} from 'lucide-react';

const AdvancedFileCollaboration = ({ 
  file, 
  collaborators = [], 
  onInviteCollaborator, 
  onUpdatePermissions, 
  onRemoveCollaborator,
  onShareFile,
  onAddComment,
  onViewComments,
  className = "" 
}) => {
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [showCommentsModal, setShowCommentsModal] = useState(false);
  const [showPermissionsModal, setShowPermissionsModal] = useState(false);
  const [inviteEmail, setInviteEmail] = useState('');
  const [inviteRole, setInviteRole] = useState('viewer');
  const [shareLink, setShareLink] = useState('');
  const [shareExpiry, setShareExpiry] = useState('');
  const [sharePassword, setSharePassword] = useState('');
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCollaborator, setSelectedCollaborator] = useState(null);

  // Permission levels
  const permissionLevels = [
    { value: 'owner', label: 'Owner', icon: Crown, color: 'text-yellow-500', description: 'Full access including deletion' },
    { value: 'editor', label: 'Editor', icon: Edit, color: 'text-blue-500', description: 'Can view and edit files' },
    { value: 'commenter', label: 'Commenter', icon: MessageCircle, color: 'text-green-500', description: 'Can view and add comments' },
    { value: 'viewer', label: 'Viewer', icon: Eye, color: 'text-gray-500', description: 'Can only view files' }
  ];

  // Get permission icon and color
  const getPermissionInfo = (role) => {
    return permissionLevels.find(p => p.value === role) || permissionLevels[3];
  };

  // Handle invite collaborator
  const handleInviteCollaborator = () => {
    if (inviteEmail.trim()) {
      onInviteCollaborator?.(inviteEmail, inviteRole);
      setInviteEmail('');
      setShowInviteModal(false);
    }
  };

  // Handle share file
  const handleShareFile = () => {
    const link = `${window.location.origin}/shared/${file.id}`;
    setShareLink(link);
    onShareFile?.(file, {
      link,
      expiry: shareExpiry,
      password: sharePassword
    });
    setShowShareModal(false);
  };

  // Handle add comment
  const handleAddComment = () => {
    if (newComment.trim()) {
      const comment = {
        id: Date.now(),
        text: newComment,
        author: 'Current User', // In real app, get from auth context
        timestamp: new Date().toISOString(),
        file: file.path
      };
      setComments(prev => [comment, ...prev]);
      onAddComment?.(comment);
      setNewComment('');
    }
  };

  // Handle update permissions
  const handleUpdatePermissions = (collaboratorId, newRole) => {
    onUpdatePermissions?.(collaboratorId, newRole);
    setShowPermissionsModal(false);
    setSelectedCollaborator(null);
  };

  // Filter collaborators based on search
  const filteredCollaborators = collaborators.filter(collaborator =>
    collaborator.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    collaborator.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={`flex flex-col h-full bg-background border-l border-border ${className}`}>
      {/* Header */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <Users className="h-5 w-5" />
            Collaboration
          </h3>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowInviteModal(true)}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
              title="Invite Collaborator"
            >
              <UserPlus className="h-4 w-4" />
            </button>
            <button
              onClick={() => setShowShareModal(true)}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
              title="Share File"
            >
              <Share2 className="h-4 w-4" />
            </button>
            <button
              onClick={() => setShowCommentsModal(true)}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
              title="Comments"
            >
              <MessageCircle className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* File Info */}
        {file && (
          <div className="p-3 bg-muted/50 rounded-lg">
            <div className="text-sm font-medium">{file.name}</div>
            <div className="text-xs text-muted-foreground">{file.path}</div>
          </div>
        )}
      </div>

      {/* Search Collaborators */}
      <div className="p-4 border-b border-border">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search collaborators..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>

      {/* Collaborators List */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-3">
          {filteredCollaborators.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-32 text-muted-foreground">
              <Users className="h-8 w-8 mb-2" />
              <p className="text-sm">No collaborators found</p>
            </div>
          ) : (
            filteredCollaborators.map((collaborator) => {
              const permissionInfo = getPermissionInfo(collaborator.role);
              const PermissionIcon = permissionInfo.icon;
              
              return (
                <motion.div
                  key={collaborator.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-primary">
                      {collaborator.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium truncate">{collaborator.name}</div>
                    <div className="text-xs text-muted-foreground truncate">{collaborator.email}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={`flex items-center gap-1 text-xs ${permissionInfo.color}`}>
                      <PermissionIcon className="h-3 w-3" />
                      {permissionInfo.label}
                    </div>
                    <button
                      onClick={() => {
                        setSelectedCollaborator(collaborator);
                        setShowPermissionsModal(true);
                      }}
                      className="p-1 hover:bg-muted rounded"
                    >
                      <MoreVertical className="h-4 w-4 text-muted-foreground" />
                    </button>
                  </div>
                </motion.div>
              );
            })
          )}
        </div>
      </div>

      {/* Invite Modal */}
      <AnimatePresence>
        {showInviteModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowInviteModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-card border border-border rounded-lg shadow-lg w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">Invite Collaborator</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      value={inviteEmail}
                      onChange={(e) => setInviteEmail(e.target.value)}
                      className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="Enter email address"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Permission Level</label>
                    <select
                      value={inviteRole}
                      onChange={(e) => setInviteRole(e.target.value)}
                      className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                    >
                      {permissionLevels.map(level => (
                        <option key={level.value} value={level.value}>
                          {level.label} - {level.description}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="flex justify-end gap-2 mt-6">
                  <button
                    onClick={() => setShowInviteModal(false)}
                    className="px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleInviteCollaborator}
                    className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Send Invite
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Share Modal */}
      <AnimatePresence>
        {showShareModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowShareModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-card border border-border rounded-lg shadow-lg w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">Share File</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Share Link</label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={shareLink}
                        readOnly
                        className="flex-1 px-3 py-2 border border-border rounded-lg bg-muted text-sm"
                      />
                      <button
                        onClick={() => navigator.clipboard.writeText(shareLink)}
                        className="px-3 py-2 border border-border rounded-lg hover:bg-muted transition-colors"
                      >
                        <Copy className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Expiry Date (Optional)</label>
                    <input
                      type="datetime-local"
                      value={shareExpiry}
                      onChange={(e) => setShareExpiry(e.target.value)}
                      className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Password (Optional)</label>
                    <input
                      type="password"
                      value={sharePassword}
                      onChange={(e) => setSharePassword(e.target.value)}
                      className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="Set password for link"
                    />
                  </div>
                </div>
                <div className="flex justify-end gap-2 mt-6">
                  <button
                    onClick={() => setShowShareModal(false)}
                    className="px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleShareFile}
                    className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Create Link
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Comments Modal */}
      <AnimatePresence>
        {showCommentsModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowCommentsModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-card border border-border rounded-lg shadow-lg w-full max-w-2xl h-96"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 h-full flex flex-col">
                <h3 className="text-lg font-semibold mb-4">Comments</h3>
                <div className="flex-1 overflow-y-auto space-y-3 mb-4">
                  {comments.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-32 text-muted-foreground">
                      <MessageCircle className="h-8 w-8 mb-2" />
                      <p className="text-sm">No comments yet</p>
                    </div>
                  ) : (
                    comments.map((comment) => (
                      <div key={comment.id} className="p-3 bg-muted/50 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-sm font-medium">{comment.author}</span>
                          <span className="text-xs text-muted-foreground">
                            {new Date(comment.timestamp).toLocaleString()}
                          </span>
                        </div>
                        <p className="text-sm">{comment.text}</p>
                      </div>
                    ))
                  )}
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Add a comment..."
                    className="flex-1 px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                    onKeyPress={(e) => e.key === 'Enter' && handleAddComment()}
                  />
                  <button
                    onClick={handleAddComment}
                    className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Permissions Modal */}
      <AnimatePresence>
        {showPermissionsModal && selectedCollaborator && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowPermissionsModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-card border border-border rounded-lg shadow-lg w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">Update Permissions</h3>
                <div className="space-y-4">
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <div className="text-sm font-medium">{selectedCollaborator.name}</div>
                    <div className="text-xs text-muted-foreground">{selectedCollaborator.email}</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Permission Level</label>
                    <div className="space-y-2">
                      {permissionLevels.map(level => {
                        const PermissionIcon = level.icon;
                        return (
                          <label
                            key={level.value}
                            className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                              selectedCollaborator.role === level.value
                                ? 'border-primary bg-primary/10'
                                : 'border-border hover:bg-muted/50'
                            }`}
                          >
                            <input
                              type="radio"
                              name="permission"
                              value={level.value}
                              checked={selectedCollaborator.role === level.value}
                              onChange={(e) => setSelectedCollaborator({
                                ...selectedCollaborator,
                                role: e.target.value
                              })}
                              className="sr-only"
                            />
                            <PermissionIcon className={`h-4 w-4 ${level.color}`} />
                            <div className="flex-1">
                              <div className="text-sm font-medium">{level.label}</div>
                              <div className="text-xs text-muted-foreground">{level.description}</div>
                            </div>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="flex justify-end gap-2 mt-6">
                  <button
                    onClick={() => setShowPermissionsModal(false)}
                    className="px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => handleUpdatePermissions(selectedCollaborator.id, selectedCollaborator.role)}
                    className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Update
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

export default AdvancedFileCollaboration;
