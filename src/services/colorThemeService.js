// Color Theme Service
// Provides comprehensive color theme support for any color scheme

class ColorThemeService {
  constructor() {
    this.colorPalettes = this.initializeColorPalettes()
    this.themeTemplates = this.initializeThemeTemplates()
    this.colorSchemes = this.initializeColorSchemes()
  }

  // Initialize comprehensive color palettes
  initializeColorPalettes() {
    return {
      // Modern color palettes
      modern: {
        primary: '#667eea',
        secondary: '#764ba2',
        accent: '#f093fb',
        background: '#f8fafc',
        surface: '#ffffff',
        text: '#1a202c',
        textSecondary: '#4a5568',
        success: '#48bb78',
        warning: '#ed8936',
        error: '#f56565',
        info: '#4299e1'
      },
      
      // Dark theme
      dark: {
        primary: '#4c51bf',
        secondary: '#553c9a',
        accent: '#9f7aea',
        background: '#1a202c',
        surface: '#2d3748',
        text: '#f7fafc',
        textSecondary: '#e2e8f0',
        success: '#68d391',
        warning: '#f6ad55',
        error: '#fc8181',
        info: '#63b3ed'
      },
      
      // Vibrant colors
      vibrant: {
        primary: '#ff6b6b',
        secondary: '#4ecdc4',
        accent: '#45b7d1',
        background: '#f8f9fa',
        surface: '#ffffff',
        text: '#2c3e50',
        textSecondary: '#7f8c8d',
        success: '#2ecc71',
        warning: '#f39c12',
        error: '#e74c3c',
        info: '#3498db'
      },
      
      // Pastel colors
      pastel: {
        primary: '#a8e6cf',
        secondary: '#dcedc1',
        accent: '#ffd3a5',
        background: '#fefefe',
        surface: '#ffffff',
        text: '#2c3e50',
        textSecondary: '#7f8c8d',
        success: '#a8e6cf',
        warning: '#ffd3a5',
        error: '#ffaaa5',
        info: '#a8e6cf'
      },
      
      // Monochrome
      monochrome: {
        primary: '#2d3748',
        secondary: '#4a5568',
        accent: '#718096',
        background: '#ffffff',
        surface: '#f7fafc',
        text: '#1a202c',
        textSecondary: '#4a5568',
        success: '#38a169',
        warning: '#d69e2e',
        error: '#e53e3e',
        info: '#3182ce'
      },
      
      // Ocean theme
      ocean: {
        primary: '#0ea5e9',
        secondary: '#0284c7',
        accent: '#06b6d4',
        background: '#f0f9ff',
        surface: '#ffffff',
        text: '#0c4a6e',
        textSecondary: '#0369a1',
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        info: '#3b82f6'
      },
      
      // Sunset theme
      sunset: {
        primary: '#f97316',
        secondary: '#ea580c',
        accent: '#fb923c',
        background: '#fff7ed',
        surface: '#ffffff',
        text: '#9a3412',
        textSecondary: '#c2410c',
        success: '#22c55e',
        warning: '#eab308',
        error: '#dc2626',
        info: '#3b82f6'
      },
      
      // Forest theme
      forest: {
        primary: '#16a34a',
        secondary: '#15803d',
        accent: '#22c55e',
        background: '#f0fdf4',
        surface: '#ffffff',
        text: '#14532d',
        textSecondary: '#166534',
        success: '#16a34a',
        warning: '#ca8a04',
        error: '#dc2626',
        info: '#2563eb'
      },
      
      // Purple theme
      purple: {
        primary: '#8b5cf6',
        secondary: '#7c3aed',
        accent: '#a78bfa',
        background: '#faf5ff',
        surface: '#ffffff',
        text: '#581c87',
        textSecondary: '#7c2d12',
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        info: '#3b82f6'
      },
      
      // Custom user-defined themes
      custom: {}
    }
  }

  // Initialize theme templates
  initializeThemeTemplates() {
    return {
      // CSS template for themes
      css: `
/* Theme Variables */
:root {
  --primary-color: {primary};
  --secondary-color: {secondary};
  --accent-color: {accent};
  --background-color: {background};
  --surface-color: {surface};
  --text-color: {text};
  --text-secondary-color: {textSecondary};
  --success-color: {success};
  --warning-color: {warning};
  --error-color: {error};
  --info-color: {info};
  
  /* Gradients */
  --primary-gradient: linear-gradient(135deg, {primary} 0%, {secondary} 100%);
  --accent-gradient: linear-gradient(135deg, {accent} 0%, {primary} 100%);
  --background-gradient: linear-gradient(135deg, {background} 0%, {surface} 100%);
  
  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  
  /* Border radius */
  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;
  
  /* Spacing */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  --spacing-2xl: 3rem;
}

/* Base styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  background: var(--background-gradient);
  color: var(--text-color);
  line-height: 1.6;
  min-height: 100vh;
}

/* Container */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-md);
}

/* Cards */
.card {
  background: var(--surface-color);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-md);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-sm) var(--spacing-md);
  border: none;
  border-radius: var(--radius-md);
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: var(--shadow-sm);
}

.btn-primary {
  background: var(--primary-gradient);
  color: white;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.btn-secondary {
  background: var(--surface-color);
  color: var(--text-color);
  border: 1px solid var(--text-secondary-color);
}

.btn-secondary:hover {
  background: var(--text-secondary-color);
  color: var(--surface-color);
}

.btn-accent {
  background: var(--accent-gradient);
  color: white;
}

.btn-accent:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

/* Forms */
.form-group {
  margin-bottom: var(--spacing-md);
}

.form-label {
  display: block;
  margin-bottom: var(--spacing-xs);
  font-weight: 500;
  color: var(--text-color);
}

.form-input {
  width: 100%;
  padding: var(--spacing-sm);
  border: 1px solid var(--text-secondary-color);
  border-radius: var(--radius-md);
  font-size: 1rem;
  background: var(--surface-color);
  color: var(--text-color);
  transition: border-color 0.2s ease;
}

.form-input:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

/* Alerts */
.alert {
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  margin-bottom: var(--spacing-md);
  border-left: 4px solid;
}

.alert-success {
  background: rgba(72, 187, 120, 0.1);
  border-left-color: var(--success-color);
  color: var(--success-color);
}

.alert-warning {
  background: rgba(237, 137, 54, 0.1);
  border-left-color: var(--warning-color);
  color: var(--warning-color);
}

.alert-error {
  background: rgba(245, 101, 101, 0.1);
  border-left-color: var(--error-color);
  color: var(--error-color);
}

.alert-info {
  background: rgba(66, 153, 225, 0.1);
  border-left-color: var(--info-color);
  color: var(--info-color);
}

/* Responsive design */
@media (max-width: 768px) {
  .container {
    padding: var(--spacing-sm);
  }
  
  .card {
    padding: var(--spacing-md);
  }
  
  .btn {
    padding: var(--spacing-sm) var(--spacing-sm);
    font-size: 0.9rem;
  }
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  :root {
    --background-color: #1a202c;
    --surface-color: #2d3748;
    --text-color: #f7fafc;
    --text-secondary-color: #e2e8f0;
  }
}

/* Animation utilities */
.fade-in {
  animation: fadeIn 0.5s ease-in;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.slide-in {
  animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
}

.bounce-in {
  animation: bounceIn 0.6s ease-out;
}

@keyframes bounceIn {
  0% { transform: scale(0.3); opacity: 0; }
  50% { transform: scale(1.05); }
  70% { transform: scale(0.9); }
  100% { transform: scale(1); opacity: 1; }
}
`,
      
      // JavaScript template for theme switching
      js: `
// Theme Management
class ThemeManager {
  constructor() {
    this.currentTheme = 'modern';
    this.themes = {themes};
    this.init();
  }
  
  init() {
    this.loadTheme();
    this.bindEvents();
  }
  
  loadTheme() {
    const savedTheme = localStorage.getItem('app-theme') || this.currentTheme;
    this.applyTheme(savedTheme);
  }
  
  applyTheme(themeName) {
    if (!this.themes[themeName]) {
      console.warn('Theme not found:', themeName);
      return;
    }
    
    this.currentTheme = themeName;
    const theme = this.themes[themeName];
    
    // Apply CSS custom properties
    const root = document.documentElement;
    Object.entries(theme).forEach(([key, value]) => {
      root.style.setProperty('--' + key.replace(/([A-Z])/g, '-$1').toLowerCase(), value);
    });
    
    // Save to localStorage
    localStorage.setItem('app-theme', themeName);
    
    // Trigger theme change event
    document.dispatchEvent(new CustomEvent('themeChanged', {
      detail: { theme: themeName, colors: theme }
    }));
  }
  
  bindEvents() {
    // Theme selector
    const themeSelectors = document.querySelectorAll('[data-theme]');
    themeSelectors.forEach(selector => {
      selector.addEventListener('click', (e) => {
        const themeName = e.target.dataset.theme;
        this.applyTheme(themeName);
      });
    });
    
    // System theme detection
    if (window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      mediaQuery.addListener((e) => {
        if (e.matches) {
          this.applyTheme('dark');
        } else {
          this.applyTheme('modern');
        }
      });
    }
  }
  
  getCurrentTheme() {
    return this.currentTheme;
  }
  
  getAvailableThemes() {
    return Object.keys(this.themes);
  }
  
  createCustomTheme(name, colors) {
    this.themes[name] = colors;
    return this.themes[name];
  }
}

// Initialize theme manager
const themeManager = new ThemeManager();

// Export for use in other modules
window.themeManager = themeManager;
`
    }
  }

  // Initialize color schemes
  initializeColorSchemes() {
    return {
      // Predefined schemes
      schemes: [
        'modern', 'dark', 'vibrant', 'pastel', 'monochrome',
        'ocean', 'sunset', 'forest', 'purple'
      ],
      
      // Color combinations that work well together
      combinations: {
        'blue-green': ['#0ea5e9', '#10b981', '#06b6d4', '#22c55e'],
        'purple-pink': ['#8b5cf6', '#ec4899', '#a78bfa', '#f472b6'],
        'orange-red': ['#f97316', '#ef4444', '#fb923c', '#f87171'],
        'teal-cyan': ['#14b8a6', '#06b6d4', '#5eead4', '#67e8f9'],
        'yellow-amber': ['#eab308', '#f59e0b', '#fde047', '#fbbf24'],
        'indigo-violet': ['#6366f1', '#8b5cf6', '#a5b4fc', '#c4b5fd'],
        'emerald-lime': ['#10b981', '#84cc16', '#6ee7b7', '#bef264'],
        'rose-pink': ['#f43f5e', '#ec4899', '#fb7185', '#f472b6']
      }
    }
  }

  // Generate theme CSS
  generateThemeCSS(themeName, customColors = null) {
    const theme = customColors || this.colorPalettes[themeName] || this.colorPalettes.modern
    
    return this.themeTemplates.css.replace(/\{(\w+)\}/g, (match, key) => {
      return theme[key] || theme.primary
    })
  }

  // Generate theme JavaScript
  generateThemeJS(availableThemes = null) {
    const themes = availableThemes || this.colorPalettes
    
    return this.themeTemplates.js.replace('{themes}', JSON.stringify(themes, null, 2))
  }

  // Create custom theme
  createCustomTheme(name, colors) {
    this.colorPalettes.custom[name] = {
      primary: colors.primary || '#667eea',
      secondary: colors.secondary || '#764ba2',
      accent: colors.accent || '#f093fb',
      background: colors.background || '#f8fafc',
      surface: colors.surface || '#ffffff',
      text: colors.text || '#1a202c',
      textSecondary: colors.textSecondary || '#4a5568',
      success: colors.success || '#48bb78',
      warning: colors.warning || '#ed8936',
      error: colors.error || '#f56565',
      info: colors.info || '#4299e1'
    }
    
    return this.colorPalettes.custom[name]
  }

  // Apply theme to existing code
  applyThemeToCode(code, themeName, customColors = null) {
    const theme = customColors || this.colorPalettes[themeName] || this.colorPalettes.modern
    
    // Replace common color patterns
    let themedCode = code
    
    // Replace hex colors
    const colorReplacements = {
      '#667eea': theme.primary,
      '#764ba2': theme.secondary,
      '#f093fb': theme.accent,
      '#f8fafc': theme.background,
      '#ffffff': theme.surface,
      '#1a202c': theme.text,
      '#4a5568': theme.textSecondary,
      '#48bb78': theme.success,
      '#ed8936': theme.warning,
      '#f56565': theme.error,
      '#4299e1': theme.info
    }
    
    Object.entries(colorReplacements).forEach(([oldColor, newColor]) => {
      themedCode = themedCode.replace(new RegExp(oldColor, 'g'), newColor)
    })
    
    // Replace CSS custom properties
    themedCode = themedCode.replace(/var\(--[\w-]+\)/g, (match) => {
      const prop = match.replace('var(--', '').replace(')', '')
      const themeKey = prop.replace(/-([a-z])/g, (g) => g[1].toUpperCase())
      return theme[themeKey] || match
    })
    
    return themedCode
  }

  // Generate theme selector HTML
  generateThemeSelector(availableThemes = null) {
    const themes = availableThemes || this.colorSchemes.schemes
    
    return `
<div class="theme-selector">
  <h3>Choose Theme</h3>
  <div class="theme-grid">
    ${themes.map(theme => `
      <button class="theme-option" data-theme="${theme}" title="${theme}">
        <div class="theme-preview" style="background: linear-gradient(135deg, ${this.colorPalettes[theme]?.primary || '#667eea'} 0%, ${this.colorPalettes[theme]?.secondary || '#764ba2'} 100%);"></div>
        <span>${theme.charAt(0).toUpperCase() + theme.slice(1)}</span>
      </button>
    `).join('')}
  </div>
</div>

<style>
.theme-selector {
  margin: 1rem 0;
}

.theme-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.theme-option {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border: 2px solid transparent;
  border-radius: 0.5rem;
  background: var(--surface-color);
  cursor: pointer;
  transition: all 0.2s ease;
}

.theme-option:hover {
  border-color: var(--primary-color);
  transform: translateY(-2px);
}

.theme-option.active {
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.theme-preview {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-bottom: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.theme-option span {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-color);
}
</style>`
  }

  // Get all available themes
  getAvailableThemes() {
    return Object.keys(this.colorPalettes)
  }

  // Get theme colors
  getThemeColors(themeName) {
    return this.colorPalettes[themeName] || this.colorPalettes.modern
  }

  // Validate color scheme
  validateColorScheme(colors) {
    const requiredKeys = ['primary', 'secondary', 'accent', 'background', 'surface', 'text']
    const missingKeys = requiredKeys.filter(key => !colors[key])
    
    if (missingKeys.length > 0) {
      throw new Error(`Missing required color keys: ${missingKeys.join(', ')}`)
    }
    
    return true
  }

  // Generate color palette from single color
  generatePaletteFromColor(baseColor) {
    // This is a simplified version - in a real implementation,
    // you'd use color theory to generate harmonious palettes
    const base = baseColor.replace('#', '')
    const r = parseInt(base.substr(0, 2), 16)
    const g = parseInt(base.substr(2, 2), 16)
    const b = parseInt(base.substr(4, 2), 16)
    
    return {
      primary: baseColor,
      secondary: `#${Math.max(0, r - 30).toString(16).padStart(2, '0')}${Math.max(0, g - 30).toString(16).padStart(2, '0')}${Math.max(0, b - 30).toString(16).padStart(2, '0')}`,
      accent: `#${Math.min(255, r + 30).toString(16).padStart(2, '0')}${Math.min(255, g + 30).toString(16).padStart(2, '0')}${Math.min(255, b + 30).toString(16).padStart(2, '0')}`,
      background: '#f8fafc',
      surface: '#ffffff',
      text: '#1a202c',
      textSecondary: '#4a5568',
      success: '#48bb78',
      warning: '#ed8936',
      error: '#f56565',
      info: '#4299e1'
    }
  }
}

export default new ColorThemeService()
