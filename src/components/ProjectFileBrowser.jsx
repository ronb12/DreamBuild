import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, 
  Folder, 
  FolderOpen, 
  File, 
  FileText, 
  Code, 
  Image, 
  Archive,
  Search,
  Filter,
  Grid,
  List,
  ChevronRight,
  ChevronDown,
  Star,
  Clock,
  User,
  MoreVertical,
  Eye,
  Edit,
  Trash2,
  Copy,
  Download,
  Upload,
  RefreshCw
} from 'lucide-react';
import multiWindowService from '../services/multiWindowService';
import toast from 'react-hot-toast';

const ProjectFileBrowser = ({ onProjectOpen, onClose, className = '' }) => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // grid or list
  const [sortBy, setSortBy] = useState('name'); // name, date, type
  const [selectedProject, setSelectedProject] = useState(null);
  const [showContextMenu, setShowContextMenu] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [expandedFolders, setExpandedFolders] = useState(new Set());

  // Sample project data - in real app this would come from a service
  const sampleProjects = [
    {
      id: '1',
      name: 'React Dashboard',
      type: 'project',
      path: '/projects/react-dashboard',
      lastModified: new Date('2024-01-15'),
      author: 'John Doe',
      description: 'Modern React dashboard with charts and analytics',
      tags: ['react', 'dashboard', 'charts'],
      files: [
        { name: 'package.json', type: 'file', size: 1024 },
        { name: 'src', type: 'folder', children: [
          { name: 'components', type: 'folder', children: [
            { name: 'Dashboard.jsx', type: 'file', size: 2048 },
            { name: 'Chart.jsx', type: 'file', size: 1536 }
          ]},
          { name: 'App.jsx', type: 'file', size: 1024 }
        ]}
      ],
      config: {
        appType: 'frontend',
        language: 'javascript',
        framework: 'react',
        styling: 'tailwind'
      }
    },
    {
      id: '2',
      name: 'E-commerce API',
      type: 'project',
      path: '/projects/ecommerce-api',
      lastModified: new Date('2024-01-10'),
      author: 'Jane Smith',
      description: 'RESTful API for e-commerce platform',
      tags: ['nodejs', 'api', 'backend'],
      files: [
        { name: 'package.json', type: 'file', size: 2048 },
        { name: 'src', type: 'folder', children: [
          { name: 'routes', type: 'folder', children: [
            { name: 'products.js', type: 'file', size: 3072 },
            { name: 'users.js', type: 'file', size: 2560 }
          ]},
          { name: 'app.js', type: 'file', size: 1024 }
        ]}
      ],
      config: {
        appType: 'backend',
        language: 'javascript',
        framework: 'express',
        database: 'mongodb'
      }
    },
    {
      id: '3',
      name: 'Mobile App',
      type: 'project',
      path: '/projects/mobile-app',
      lastModified: new Date('2024-01-05'),
      author: 'Mike Johnson',
      description: 'Cross-platform mobile application',
      tags: ['react-native', 'mobile', 'ios', 'android'],
      files: [
        { name: 'package.json', type: 'file', size: 1536 },
        { name: 'src', type: 'folder', children: [
          { name: 'screens', type: 'folder', children: [
            { name: 'HomeScreen.js', type: 'file', size: 2048 },
            { name: 'ProfileScreen.js', type: 'file', size: 1792 }
          ]}
        ]}
      ],
      config: {
        appType: 'mobile',
        language: 'javascript',
        framework: 'react-native',
        platform: 'cross-platform'
      }
    },
    {
      id: '4',
      name: 'Data Science Project',
      type: 'project',
      path: '/projects/data-science',
      lastModified: new Date('2024-01-01'),
      author: 'Sarah Wilson',
      description: 'Machine learning model for data analysis',
      tags: ['python', 'ml', 'data-science', 'jupyter'],
      files: [
        { name: 'requirements.txt', type: 'file', size: 512 },
        { name: 'notebooks', type: 'folder', children: [
          { name: 'analysis.ipynb', type: 'file', size: 4096 },
          { name: 'model_training.ipynb', type: 'file', size: 5120 }
        ]}
      ],
      config: {
        appType: 'data-science',
        language: 'python',
        framework: 'jupyter',
        libraries: ['pandas', 'scikit-learn', 'matplotlib']
      }
    }
  ];

  useEffect(() => {
    // Simulate loading projects
    const loadProjects = async () => {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      setProjects(sampleProjects);
      setFilteredProjects(sampleProjects);
      setIsLoading(false);
    };

    loadProjects();
  }, []);

  // Filter and sort projects
  useEffect(() => {
    let filtered = projects.filter(project =>
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    // Sort projects
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'date':
          return b.lastModified - a.lastModified;
        case 'type':
          return a.config.appType.localeCompare(b.config.appType);
        default:
          return 0;
      }
    });

    setFilteredProjects(filtered);
  }, [projects, searchQuery, sortBy]);

  // Get file icon
  const getFileIcon = (fileName, fileType) => {
    if (fileType === 'folder') return Folder;
    
    const extension = fileName.split('.').pop()?.toLowerCase();
    const iconMap = {
      'js': Code,
      'jsx': Code,
      'ts': Code,
      'tsx': Code,
      'py': Code,
      'json': FileText,
      'md': FileText,
      'txt': FileText,
      'jpg': Image,
      'jpeg': Image,
      'png': Image,
      'gif': Image,
      'zip': Archive,
      'rar': Archive
    };
    return iconMap[extension] || File;
  };

  // Get project icon
  const getProjectIcon = (project) => {
    const config = project.config;
    if (config.appType === 'mobile') return '📱';
    if (config.appType === 'backend') return '⚙️';
    if (config.appType === 'data-science') return '🔬';
    return '🌐';
  };

  // Handle project double click
  const handleProjectDoubleClick = (project) => {
    openProjectInNewWindow(project);
  };

  // Open project in new window
  const openProjectInNewWindow = (project) => {
    try {
      const windowId = multiWindowService.createWindow(project);
      toast.success(`Opened "${project.name}" in new window!`);
      onProjectOpen?.(project, windowId);
    } catch (error) {
      console.error('Failed to open project in new window:', error);
      toast.error('Failed to open project in new window');
    }
  };

  // Handle context menu
  const handleContextMenu = (e, project) => {
    e.preventDefault();
    setSelectedProject(project);
    setShowContextMenu({
      x: e.clientX,
      y: e.clientY
    });
  };

  // Close context menu
  const closeContextMenu = () => {
    setShowContextMenu(null);
    setSelectedProject(null);
  };

  // Handle context menu actions
  const handleContextAction = (action) => {
    if (!selectedProject) return;

    switch (action) {
      case 'open':
        openProjectInNewWindow(selectedProject);
        break;
      case 'duplicate':
        const duplicatedProject = {
          ...selectedProject,
          name: `${selectedProject.name} (Copy)`,
          id: `${selectedProject.id}_copy_${Date.now()}`
        };
        openProjectInNewWindow(duplicatedProject);
        break;
      case 'rename':
        const newName = prompt('Enter new name:', selectedProject.name);
        if (newName && newName !== selectedProject.name) {
          // Update project name (in real app, this would update the backend)
          setProjects(prev => prev.map(p => 
            p.id === selectedProject.id ? { ...p, name: newName } : p
          ));
          toast.success('Project renamed');
        }
        break;
      case 'delete':
        if (confirm(`Delete "${selectedProject.name}"? This action cannot be undone.`)) {
          setProjects(prev => prev.filter(p => p.id !== selectedProject.id));
          toast.success('Project deleted');
        }
        break;
    }
    closeContextMenu();
  };

  // Toggle folder expansion
  const toggleFolder = (folderPath) => {
    setExpandedFolders(prev => {
      const newSet = new Set(prev);
      if (newSet.has(folderPath)) {
        newSet.delete(folderPath);
      } else {
        newSet.add(folderPath);
      }
      return newSet;
    });
  };

  // Render file tree
  const renderFileTree = (files, level = 0) => {
    return files.map((file, index) => {
      const Icon = getFileIcon(file.name, file.type);
      const isExpanded = expandedFolders.has(file.path);
      const hasChildren = file.children && file.children.length > 0;

      return (
        <div key={index} className="ml-4">
          <div
            className={`flex items-center gap-2 py-1 px-2 rounded hover:bg-muted/50 cursor-pointer ${
              level === 0 ? 'font-medium' : 'text-sm'
            }`}
            style={{ marginLeft: `${level * 16}px` }}
          >
            {file.type === 'folder' && (
              <button
                onClick={() => toggleFolder(file.path)}
                className="p-0.5 hover:bg-muted rounded"
              >
                {isExpanded ? (
                  <ChevronDown className="h-3 w-3" />
                ) : (
                  <ChevronRight className="h-3 w-3" />
                )}
              </button>
            )}
            <Icon className="h-4 w-4 text-muted-foreground" />
            <span className="truncate">{file.name}</span>
            {file.size && (
              <span className="text-xs text-muted-foreground ml-auto">
                {(file.size / 1024).toFixed(1)}KB
              </span>
            )}
          </div>
          {file.type === 'folder' && isExpanded && hasChildren && (
            <div>
              {renderFileTree(file.children, level + 1)}
            </div>
          )}
        </div>
      );
    });
  };

  // Render project card
  const renderProjectCard = (project) => {
    const projectIcon = getProjectIcon(project);
    const isSelected = selectedProject?.id === project.id;

    return (
      <motion.div
        key={project.id}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className={`bg-card border border-border rounded-lg p-4 cursor-pointer hover:shadow-lg transition-all duration-200 ${
          isSelected ? 'ring-2 ring-primary' : ''
        }`}
        onDoubleClick={() => handleProjectDoubleClick(project)}
        onContextMenu={(e) => handleContextMenu(e, project)}
        onClick={() => setSelectedProject(project)}
      >
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{projectIcon}</span>
            <div>
              <h3 className="font-semibold text-sm truncate">{project.name}</h3>
              <p className="text-xs text-muted-foreground">{project.config.appType}</p>
            </div>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleContextMenu(e, project);
            }}
            className="p-1 hover:bg-muted rounded opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <MoreVertical className="h-4 w-4" />
          </button>
        </div>

        <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1 mb-3">
          {project.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-muted text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-2 py-1 bg-muted text-xs rounded-full">
              +{project.tags.length - 3}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {project.lastModified.toLocaleDateString()}
          </div>
          <div className="flex items-center gap-1">
            <User className="h-3 w-3" />
            {project.author}
          </div>
        </div>
      </motion.div>
    );
  };

  // Render project list item
  const renderProjectListItem = (project) => {
    const projectIcon = getProjectIcon(project);
    const isSelected = selectedProject?.id === project.id;

    return (
      <motion.div
        key={project.id}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        className={`flex items-center gap-4 p-3 rounded-lg cursor-pointer hover:bg-muted/50 transition-colors ${
          isSelected ? 'bg-primary/10' : ''
        }`}
        onDoubleClick={() => handleProjectDoubleClick(project)}
        onContextMenu={(e) => handleContextMenu(e, project)}
        onClick={() => setSelectedProject(project)}
      >
        <span className="text-xl">{projectIcon}</span>
        <div className="flex-1 min-w-0">
          <h3 className="font-medium truncate">{project.name}</h3>
          <p className="text-sm text-muted-foreground truncate">{project.description}</p>
        </div>
        <div className="text-sm text-muted-foreground">
          {project.lastModified.toLocaleDateString()}
        </div>
        <div className="text-sm text-muted-foreground">
          {project.author}
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleContextMenu(e, project);
          }}
          className="p-1 hover:bg-muted rounded opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <MoreVertical className="h-4 w-4" />
        </button>
      </motion.div>
    );
  };

  if (isLoading) {
    return (
      <div className={`flex items-center justify-center h-96 ${className}`}>
        <div className="text-center">
          <RefreshCw className="h-8 w-8 animate-spin mx-auto mb-4 text-primary" />
          <p className="text-muted-foreground">Loading projects...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-background border border-border rounded-lg shadow-lg ${className}`}>
      {/* Header */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Open Project in New Window</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-muted rounded"
          >
            ×
          </button>
        </div>

        {/* Search and Filters */}
        <div className="flex items-center gap-2 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-2 border border-border rounded-lg bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
          >
            <option value="name">Sort by Name</option>
            <option value="date">Sort by Date</option>
            <option value="type">Sort by Type</option>
          </select>
          <div className="flex items-center gap-1 border border-border rounded-lg">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 ${viewMode === 'grid' ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'}`}
            >
              <Grid className="h-4 w-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 ${viewMode === 'list' ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'}`}
            >
              <List className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-8">
            <Folder className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No projects found</h3>
            <p className="text-muted-foreground">
              {searchQuery ? 'Try adjusting your search terms' : 'Create a new project to get started'}
            </p>
          </div>
        ) : (
          <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' : 'space-y-2'}>
            {filteredProjects.map(project => 
              viewMode === 'grid' ? renderProjectCard(project) : renderProjectListItem(project)
            )}
          </div>
        )}
      </div>

      {/* Context Menu */}
      <AnimatePresence>
        {showContextMenu && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed bg-card border border-border rounded-lg shadow-xl z-50 py-1 min-w-[200px]"
            style={{
              left: showContextMenu.x,
              top: showContextMenu.y
            }}
            onClick={closeContextMenu}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleContextAction('open');
              }}
              className="w-full px-3 py-2 text-left hover:bg-muted rounded flex items-center gap-2 text-sm"
            >
              <Eye className="h-4 w-4" />
              Open in New Window
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleContextAction('duplicate');
              }}
              className="w-full px-3 py-2 text-left hover:bg-muted rounded flex items-center gap-2 text-sm"
            >
              <Copy className="h-4 w-4" />
              Duplicate
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleContextAction('rename');
              }}
              className="w-full px-3 py-2 text-left hover:bg-muted rounded flex items-center gap-2 text-sm"
            >
              <Edit className="h-4 w-4" />
              Rename
            </button>
            <hr className="my-1 border-border" />
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleContextAction('delete');
              }}
              className="w-full px-3 py-2 text-left hover:bg-destructive/10 rounded flex items-center gap-2 text-sm text-destructive"
            >
              <Trash2 className="h-4 w-4" />
              Delete
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectFileBrowser;
