import React, { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

export function useTheme() {
  return useContext(ThemeContext)
}

// Theme configurations
const THEMES = {
  light: {
    name: 'Light Theme',
    cssVars: {
      '--primary': '#2563eb',
      '--primary-foreground': '#ffffff',
      '--background': '#ffffff',
      '--foreground': '#0f172a',
      '--card': '#ffffff',
      '--muted': '#f8fafc',
      '--border': '#e2e8f0',
    },
    isDark: false
  },
  dark: {
    name: 'Dark Theme',
    cssVars: {
      '--primary': '#3b82f6',
      '--primary-foreground': '#ffffff',
      '--background': '#0f172a',
      '--foreground': '#f8fafc',
      '--card': '#1e293b',
      '--muted': '#1e293b',
      '--border': '#334155',
    },
    isDark: true
  },
  blue: {
    name: 'Blue Theme',
    cssVars: {
      '--primary': '#1e40af',
      '--primary-foreground': '#ffffff',
      '--background': '#f0f9ff',
      '--foreground': '#0c4a6e',
      '--card': '#e0f2fe',
      '--muted': '#e0f2fe',
      '--border': '#7dd3fc',
    },
    isDark: false
  },
  purple: {
    name: 'Purple Theme',
    cssVars: {
      '--primary': '#7c3aed',
      '--primary-foreground': '#ffffff',
      '--background': '#faf5ff',
      '--foreground': '#581c87',
      '--card': '#f3e8ff',
      '--muted': '#f3e8ff',
      '--border': '#c4b5fd',
    },
    isDark: false
  },
  green: {
    name: 'Green Theme',
    cssVars: {
      '--primary': '#059669',
      '--primary-foreground': '#ffffff',
      '--background': '#f0fdf4',
      '--foreground': '#064e3b',
      '--card': '#dcfce7',
      '--muted': '#dcfce7',
      '--border': '#86efac',
    },
    isDark: false
  },
  orange: {
    name: 'Orange Theme',
    cssVars: {
      '--primary': '#ea580c',
      '--primary-foreground': '#ffffff',
      '--background': '#fff7ed',
      '--foreground': '#9a3412',
      '--card': '#fed7aa',
      '--muted': '#fed7aa',
      '--border': '#fdba74',
    },
    isDark: false
  },
  red: {
    name: 'Red Theme',
    cssVars: {
      '--primary': '#dc2626',
      '--primary-foreground': '#ffffff',
      '--background': '#fef2f2',
      '--foreground': '#991b1b',
      '--card': '#fecaca',
      '--muted': '#fecaca',
      '--border': '#fca5a5',
    },
    isDark: false
  },
  pink: {
    name: 'Pink Theme',
    cssVars: {
      '--primary': '#db2777',
      '--primary-foreground': '#ffffff',
      '--background': '#fdf2f8',
      '--foreground': '#9d174d',
      '--card': '#fce7f3',
      '--muted': '#fce7f3',
      '--border': '#f9a8d4',
    },
    isDark: false
  },
  cyan: {
    name: 'Cyan Theme',
    cssVars: {
      '--primary': '#0891b2',
      '--primary-foreground': '#ffffff',
      '--background': '#ecfeff',
      '--foreground': '#164e63',
      '--card': '#cffafe',
      '--muted': '#cffafe',
      '--border': '#67e8f9',
    },
    isDark: false
  },
  amber: {
    name: 'Amber Theme',
    cssVars: {
      '--primary': '#d97706',
      '--primary-foreground': '#ffffff',
      '--background': '#fffbeb',
      '--foreground': '#92400e',
      '--card': '#fef3c7',
      '--muted': '#fef3c7',
      '--border': '#fde68a',
    },
    isDark: false
  },
  emerald: {
    name: 'Emerald Theme',
    cssVars: {
      '--primary': '#10b981',
      '--primary-foreground': '#ffffff',
      '--background': '#ecfdf5',
      '--foreground': '#064e3b',
      '--card': '#d1fae5',
      '--muted': '#d1fae5',
      '--border': '#6ee7b7',
    },
    isDark: false
  }
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light'
    setTheme(savedTheme)
    applyTheme(savedTheme)
  }, [])

  const applyTheme = (themeName) => {
    const themeConfig = THEMES[themeName]
    if (themeConfig) {
      // Apply CSS variables
      Object.entries(themeConfig.cssVars).forEach(([key, value]) => {
        document.documentElement.style.setProperty(key, value)
      })
      
      // Apply dark class
      document.documentElement.classList.toggle('dark', themeConfig.isDark)
    }
  }

  const updateTheme = (newTheme) => {
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    applyTheme(newTheme)
  }

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    updateTheme(newTheme)
  }

  return (
    <ThemeContext.Provider value={{ 
      theme, 
      setTheme: updateTheme, 
      toggleTheme,
      themes: THEMES 
    }}>
      {children}
    </ThemeContext.Provider>
  )
}
