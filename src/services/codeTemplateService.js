// Comprehensive Code Template Service
// Provides high-quality code templates for various languages and frameworks

class CodeTemplateService {
  constructor() {
    this.templates = {
      // React Templates
      react: {
        component: this.getReactComponentTemplate(),
        hook: this.getReactHookTemplate(),
        context: this.getReactContextTemplate(),
        page: this.getReactPageTemplate()
      },
      // Vue Templates
      vue: {
        component: this.getVueComponentTemplate(),
        page: this.getVuePageTemplate(),
        store: this.getVueStoreTemplate()
      },
      // Angular Templates
      angular: {
        component: this.getAngularComponentTemplate(),
        service: this.getAngularServiceTemplate(),
        module: this.getAngularModuleTemplate()
      },
      // Node.js Templates
      nodejs: {
        express: this.getExpressTemplate(),
        api: this.getNodeAPITemplate(),
        middleware: this.getNodeMiddlewareTemplate()
      },
      // Python Templates
      python: {
        flask: this.getFlaskTemplate(),
        django: this.getDjangoTemplate(),
        fastapi: this.getFastAPITemplate(),
        class: this.getPythonClassTemplate()
      },
      // HTML/CSS Templates
      html: {
        landing: this.getLandingPageTemplate(),
        portfolio: this.getPortfolioTemplate(),
        blog: this.getBlogTemplate(),
        dashboard: this.getDashboardTemplate()
      }
    }
  }

  // React Templates
  getReactComponentTemplate() {
    return {
      'Component.jsx': `import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Component.css';

const Component = ({ 
  title = 'Default Title', 
  description = 'Default description',
  onAction = () => {},
  className = '',
  ...props 
}) => {
  const [state, setState] = useState({
    loading: false,
    data: null,
    error: null
  });

  useEffect(() => {
    // Component initialization logic
    const initializeComponent = async () => {
      setState(prev => ({ ...prev, loading: true }));
      try {
        // Simulate API call or data fetching
        await new Promise(resolve => setTimeout(resolve, 1000));
        setState(prev => ({ 
          ...prev, 
          loading: false, 
          data: { message: 'Data loaded successfully' } 
        }));
      } catch (error) {
        setState(prev => ({ 
          ...prev, 
          loading: false, 
          error: error.message 
        }));
      }
    };

    initializeComponent();
  }, []);

  const handleAction = () => {
    onAction(state.data);
  };

  if (state.loading) {
    return (
      <div className={\`component-loading \${className}\`}>
        <div className="spinner" />
        <p>Loading...</p>
      </div>
    );
  }

  if (state.error) {
    return (
      <div className={\`component-error \${className}\`}>
        <p>Error: {state.error}</p>
        <button onClick={() => window.location.reload()}>
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className={\`component \${className}\`} {...props}>
      <header className="component-header">
        <h2 className="component-title">{title}</h2>
        <p className="component-description">{description}</p>
      </header>
      
      <main className="component-content">
        {state.data && (
          <div className="component-data">
            <p>{state.data.message}</p>
          </div>
        )}
        
        <button 
          className="component-button"
          onClick={handleAction}
          disabled={state.loading}
        >
          Perform Action
        </button>
      </main>
    </div>
  );
};

Component.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  onAction: PropTypes.func,
  className: PropTypes.string
};

export default Component;`,
      
      'Component.css': `/* Component Styles */
.component {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  margin: 1rem 0;
  transition: all 0.3s ease;
}

.component:hover {
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
}

.component-header {
  margin-bottom: 1.5rem;
  text-align: center;
}

.component-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
}

.component-description {
  color: #666;
  font-size: 1rem;
  line-height: 1.5;
}

.component-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.component-data {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #007bff;
}

.component-button {
  background: #007bff;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: center;
}

.component-button:hover:not(:disabled) {
  background: #0056b3;
  transform: translateY(-1px);
}

.component-button:disabled {
  background: #6c757d;
  cursor: not-allowed;
}

.component-loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #007bff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.component-error {
  background: #f8d7da;
  color: #721c24;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
}

.component-error button {
  background: #dc3545;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 0.5rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .component {
    padding: 1.5rem;
    margin: 0.5rem 0;
  }
  
  .component-title {
    font-size: 1.25rem;
  }
  
  .component-button {
    width: 100%;
  }
}`,
      
      'Component.test.js': `import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Component from './Component';

describe('Component', () => {
  const defaultProps = {
    title: 'Test Component',
    description: 'Test description'
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders with default props', () => {
    render(<Component {...defaultProps} />);
    
    expect(screen.getByText('Test Component')).toBeInTheDocument();
    expect(screen.getByText('Test description')).toBeInTheDocument();
  });

  it('shows loading state initially', () => {
    render(<Component {...defaultProps} />);
    
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('handles action button click', async () => {
    const mockOnAction = jest.fn();
    render(<Component {...defaultProps} onAction={mockOnAction} />);
    
    // Wait for loading to complete
    await waitFor(() => {
      expect(screen.getByText('Perform Action')).toBeInTheDocument();
    });
    
    fireEvent.click(screen.getByText('Perform Action'));
    
    await waitFor(() => {
      expect(mockOnAction).toHaveBeenCalled();
    });
  });

  it('applies custom className', () => {
    const { container } = render(
      <Component {...defaultProps} className="custom-class" />
    );
    
    expect(container.firstChild).toHaveClass('custom-class');
  });
});`
    }
  }

  getReactHookTemplate() {
    return {
      'useCustomHook.js': `import { useState, useEffect, useCallback } from 'react';

/**
 * Custom React Hook
 * @param {Object} options - Configuration options
 * @param {string} options.endpoint - API endpoint
 * @param {Object} options.defaultData - Default data value
 * @param {boolean} options.autoFetch - Whether to fetch data automatically
 * @returns {Object} Hook state and methods
 */
export const useCustomHook = ({
  endpoint = '',
  defaultData = null,
  autoFetch = true
} = {}) => {
  const [data, setData] = useState(defaultData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    if (!endpoint) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error(\`HTTP error! status: \${response.status}\`);
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching data:', err);
    } finally {
      setLoading(false);
    }
  }, [endpoint]);

  const refetch = useCallback(() => {
    fetchData();
  }, [fetchData]);

  const updateData = useCallback((newData) => {
    setData(prevData => ({
      ...prevData,
      ...newData
    }));
  }, []);

  const resetData = useCallback(() => {
    setData(defaultData);
    setError(null);
  }, [defaultData]);

  useEffect(() => {
    if (autoFetch && endpoint) {
      fetchData();
    }
  }, [autoFetch, endpoint, fetchData]);

  return {
    data,
    loading,
    error,
    refetch,
    updateData,
    resetData
  };
};

export default useCustomHook;`
    }
  }

  getReactContextTemplate() {
    return {
      'Context.jsx': `import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

// Initial state
const initialState = {
  user: null,
  theme: 'light',
  language: 'en',
  notifications: [],
  loading: false,
  error: null
};

// Action types
export const ActionTypes = {
  SET_USER: 'SET_USER',
  SET_THEME: 'SET_THEME',
  SET_LANGUAGE: 'SET_LANGUAGE',
  ADD_NOTIFICATION: 'ADD_NOTIFICATION',
  REMOVE_NOTIFICATION: 'REMOVE_NOTIFICATION',
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR',
  RESET_STATE: 'RESET_STATE'
};

// Reducer function
const appReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.SET_USER:
      return {
        ...state,
        user: action.payload,
        error: null
      };
    
    case ActionTypes.SET_THEME:
      return {
        ...state,
        theme: action.payload
      };
    
    case ActionTypes.SET_LANGUAGE:
      return {
        ...state,
        language: action.payload
      };
    
    case ActionTypes.ADD_NOTIFICATION:
      return {
        ...state,
        notifications: [...state.notifications, action.payload]
      };
    
    case ActionTypes.REMOVE_NOTIFICATION:
      return {
        ...state,
        notifications: state.notifications.filter(
          notification => notification.id !== action.payload
        )
      };
    
    case ActionTypes.SET_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    
    case ActionTypes.SET_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    
    case ActionTypes.RESET_STATE:
      return initialState;
    
    default:
      return state;
  }
};

// Create context
const AppContext = createContext();

// Provider component
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const value = {
    state,
    dispatch,
    // Helper functions
    setUser: (user) => dispatch({ type: ActionTypes.SET_USER, payload: user }),
    setTheme: (theme) => dispatch({ type: ActionTypes.SET_THEME, payload: theme }),
    setLanguage: (language) => dispatch({ type: ActionTypes.SET_LANGUAGE, payload: language }),
    addNotification: (notification) => dispatch({ 
      type: ActionTypes.ADD_NOTIFICATION, 
      payload: { ...notification, id: Date.now() }
    }),
    removeNotification: (id) => dispatch({ type: ActionTypes.REMOVE_NOTIFICATION, payload: id }),
    setLoading: (loading) => dispatch({ type: ActionTypes.SET_LOADING, payload: loading }),
    setError: (error) => dispatch({ type: ActionTypes.SET_ERROR, payload: error }),
    resetState: () => dispatch({ type: ActionTypes.RESET_STATE })
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired
};

// Custom hook to use the context
export const useAppContext = () => {
  const context = useContext(AppContext);
  
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  
  return context;
};

// Export context for direct access if needed
export { AppContext };

export default AppProvider;`
    }
  }

  getReactPageTemplate() {
    return {
      'Page.jsx': `import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from '../utils/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Share, Heart, Bookmark } from 'lucide-react';
import './Page.css';

const Page = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        setLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setPageData({
          id,
          title: 'Sample Page Title',
          content: 'This is the main content of the page...',
          author: 'John Doe',
          date: new Date().toISOString(),
          tags: ['react', 'javascript', 'web-development'],
          likes: 42,
          bookmarks: 12
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchPageData();
    }
  }, [id]);

  const handleBack = () => {
    navigate(-1);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: pageData?.title,
        text: pageData?.content,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const handleLike = () => {
    setPageData(prev => ({
      ...prev,
      likes: prev.likes + 1
    }));
  };

  const handleBookmark = () => {
    setPageData(prev => ({
      ...prev,
      bookmarks: prev.bookmarks + 1
    }));
  };

  if (loading) {
    return (
      <div className="page-loading">
        <div className="spinner" />
        <p>Loading page...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="page-error">
        <h2>Error loading page</h2>
        <p>{error}</p>
        <button onClick={handleBack}>Go Back</button>
      </div>
    );
  }

  if (!pageData) {
    return (
      <div className="page-not-found">
        <h2>Page not found</h2>
        <button onClick={handleBack}>Go Back</button>
      </div>
    );
  }

  return (
    <motion.div
      className="page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <header className="page-header">
        <button className="back-button" onClick={handleBack}>
          <ArrowLeft className="icon" />
          Back
        </button>
        
        <div className="page-actions">
          <button className="action-button" onClick={handleLike}>
            <Heart className="icon" />
            {pageData.likes}
          </button>
          <button className="action-button" onClick={handleBookmark}>
            <Bookmark className="icon" />
            {pageData.bookmarks}
          </button>
          <button className="action-button" onClick={handleShare}>
            <Share className="icon" />
            Share
          </button>
        </div>
      </header>

      {/* Content */}
      <main className="page-content">
        <article className="page-article">
          <header className="article-header">
            <h1 className="article-title">{pageData.title}</h1>
            <div className="article-meta">
              <span className="author">By {pageData.author}</span>
              <span className="date">
                {new Date(pageData.date).toLocaleDateString()}
              </span>
            </div>
            <div className="article-tags">
              {pageData.tags.map(tag => (
                <span key={tag} className="tag">#{tag}</span>
              ))}
            </div>
          </header>
          
          <div className="article-content">
            <p>{pageData.content}</p>
            {/* Add more content sections as needed */}
          </div>
        </article>
      </main>
    </motion.div>
  );
};

export default Page;`,
      
      'Page.css': `/* Page Styles */
.page {
  min-height: 100vh;
  background: #f8f9fa;
  padding: 2rem;
}

.page-loading,
.page-error,
.page-not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  text-align: center;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #007bff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e9ecef;
}

.back-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: white;
  border: 1px solid #dee2e6;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.back-button:hover {
  background: #f8f9fa;
  border-color: #007bff;
}

.page-actions {
  display: flex;
  gap: 0.5rem;
}

.action-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: white;
  border: 1px solid #dee2e6;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.action-button:hover {
  background: #f8f9fa;
  border-color: #007bff;
}

.icon {
  width: 16px;
  height: 16px;
}

.page-content {
  max-width: 800px;
  margin: 0 auto;
}

.page-article {
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.article-header {
  padding: 2rem;
  border-bottom: 1px solid #e9ecef;
}

.article-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.article-meta {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  color: #666;
  font-size: 0.9rem;
}

.author {
  font-weight: 500;
}

.article-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background: #e9ecef;
  color: #495057;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
}

.article-content {
  padding: 2rem;
  line-height: 1.6;
  color: #333;
}

.article-content p {
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .page {
    padding: 1rem;
  }
  
  .page-header {
    flex-direction: column;
    gap: 1rem;
    align-items: stretch;
  }
  
  .page-actions {
    justify-content: center;
  }
  
  .article-title {
    font-size: 2rem;
  }
  
  .article-header,
  .article-content {
    padding: 1.5rem;
  }
}`
    }
  }

  // Add more template methods for other languages/frameworks...
  getVueComponentTemplate() {
    return {
      'Component.vue': `<!-- Vue Component Template -->
<template>
  <div class="component" :class="componentClass">
    <header class="component-header">
      <h2 class="component-title">{{ title }}</h2>
      <p class="component-description">{{ description }}</p>
    </header>
    
    <main class="component-content">
      <div v-if="loading" class="component-loading">
        <div class="spinner"></div>
        <p>Loading...</p>
      </div>
      
      <div v-else-if="error" class="component-error">
        <p>Error: {{ error }}</p>
        <button @click="retry">Retry</button>
      </div>
      
      <div v-else class="component-data">
        <p v-if="data">{{ data.message }}</p>
        <button 
          class="component-button"
          @click="handleAction"
          :disabled="loading"
        >
          Perform Action
        </button>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Component',
  props: {
    title: {
      type: String,
      default: 'Default Title'
    },
    description: {
      type: String,
      default: 'Default description'
    },
    onAction: {
      type: Function,
      default: () => {}
    },
    className: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      loading: false,
      data: null,
      error: null
    }
  },
  computed: {
    componentClass() {
      return this.className ? \`component \${this.className}\` : 'component'
    }
  },
  async mounted() {
    await this.initializeComponent()
  },
  methods: {
    async initializeComponent() {
      this.loading = true
      this.error = null
      
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000))
        this.data = { message: 'Data loaded successfully' }
      } catch (error) {
        this.error = error.message
      } finally {
        this.loading = false
      }
    },
    
    handleAction() {
      this.onAction(this.data)
    },
    
    retry() {
      this.initializeComponent()
    }
  }
}
</script>

<style scoped>
/* Component styles here */
.component {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  margin: 1rem 0;
  transition: all 0.3s ease;
}

.component:hover {
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
}

.component-header {
  margin-bottom: 1.5rem;
  text-align: center;
}

.component-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
}

.component-description {
  color: #666;
  font-size: 1rem;
  line-height: 1.5;
}

.component-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.component-data {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #007bff;
}

.component-button {
  background: #007bff;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: center;
}

.component-button:hover:not(:disabled) {
  background: #0056b3;
  transform: translateY(-1px);
}

.component-button:disabled {
  background: #6c757d;
  cursor: not-allowed;
}

.component-loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #007bff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.component-error {
  background: #f8d7da;
  color: #721c24;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
}

.component-error button {
  background: #dc3545;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 0.5rem;
}
</style>`
    }
  }

  // Get template by category and type
  getTemplate(category, type) {
    return this.templates[category]?.[type] || null
  }

  // Get all available templates
  getAvailableTemplates() {
    const result = {}
    Object.keys(this.templates).forEach(category => {
      result[category] = Object.keys(this.templates[category])
    })
    return result
  }

  // Get template by language
  getTemplatesByLanguage(language) {
    const languageMap = {
      'javascript': ['react', 'vue', 'nodejs'],
      'typescript': ['react', 'vue', 'nodejs'],
      'python': ['python'],
      'html': ['html'],
      'css': ['html']
    }
    
    const categories = languageMap[language] || []
    const result = {}
    
    categories.forEach(category => {
      if (this.templates[category]) {
        result[category] = this.templates[category]
      }
    })
    
    return result
  }
}

export default new CodeTemplateService()
