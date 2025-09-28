import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Settings as SettingsIcon, 
  Palette, 
  Keyboard, 
  Bell, 
  Shield, 
  Brain, 
  Code, 
  Globe, 
  Save, 
  RefreshCw,
  Download,
  Upload,
  Trash2,
  Eye,
  EyeOff,
  Sun,
  Moon,
  Monitor,
  ChevronRight,
  Check,
  AlertCircle,
  Info
} from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'
// import toast from 'react-hot-toast' // Removed toast import

const Settings = () => {
  const { theme, setTheme } = useTheme()
  const [activeTab, setActiveTab] = useState('appearance')
  const [settings, setSettings] = useState({
    appearance: {
      theme: theme,
      fontSize: 'medium',
      fontFamily: 'system',
      animations: true,
      compactMode: false
    },
    editor: {
      tabSize: 2,
      wordWrap: true,
      minimap: true,
      lineNumbers: true,
      autoSave: true,
      formatOnSave: true,
      autoComplete: true
    },
    ai: {
      defaultModel: 'codellama-7b',
      temperature: 0.7,
      maxTokens: 4000,
      autoGenerate: false,
      suggestions: true
    },
    notifications: {
      projectUpdates: true,
      aiCompletions: true,
      errors: true,
      sound: false,
      email: false
    },
    privacy: {
      analytics: true,
      crashReports: true,
      telemetry: false,
      shareUsage: false
    }
  })

  const [isLoading, setIsLoading] = useState(true)
  const [hasChanges, setHasChanges] = useState(false)

  useEffect(() => {
    // Load settings from localStorage
    const savedSettings = localStorage.getItem('dreambuild-settings')
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings))
    }
    setIsLoading(false)
  }, [])

  useEffect(() => {
    setHasChanges(true)
  }, [settings])

  const saveSettings = () => {
    localStorage.setItem('dreambuild-settings', JSON.stringify(settings))
    setHasChanges(false)
    console.log('Settings saved successfully!')
  }

  const resetSettings = () => {
    const defaultSettings = {
      appearance: {
        theme: 'system',
        fontSize: 'medium',
        fontFamily: 'system',
        animations: true,
        compactMode: false
      },
      editor: {
        tabSize: 2,
        wordWrap: true,
        minimap: true,
        lineNumbers: true,
        autoSave: true,
        formatOnSave: true,
        autoComplete: true
      },
      ai: {
        defaultModel: 'codellama-7b',
        temperature: 0.7,
        maxTokens: 4000,
        autoGenerate: false,
        suggestions: true
      },
      notifications: {
        projectUpdates: true,
        aiCompletions: true,
        errors: true,
        sound: false,
        email: false
      },
      privacy: {
        analytics: true,
        crashReports: true,
        telemetry: false,
        shareUsage: false
      }
    }
    setSettings(defaultSettings)
    console.log('Settings reset to defaults!')
  }

  const exportSettings = () => {
    const dataStr = JSON.stringify(settings, null, 2)
    const dataBlob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(dataBlob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'dreambuild-settings.json'
    link.click()
    URL.revokeObjectURL(url)
    console.log('Settings exported!')
  }

  const importSettings = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        try {
          const imported = JSON.parse(e.target.result)
          setSettings(imported)
          console.log('Settings imported successfully!')
        } catch (error) {
          console.error('Invalid settings file!')
        }
      }
      reader.readAsText(file)
    }
  }

  const updateSetting = (category, key, value) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [key]: value
      }
    }))
    if (category === 'appearance' && key === 'theme') {
      setTheme(value)
    }
  }

  const tabs = [
    { id: 'appearance', name: 'Appearance', icon: Palette },
    { id: 'editor', name: 'Editor', icon: Code },
    { id: 'ai', name: 'AI Settings', icon: Brain },
    { id: 'notifications', name: 'Notifications', icon: Bell },
    { id: 'privacy', name: 'Privacy', icon: Shield }
  ]

  const SettingItem = ({ title, description, children, warning }) => (
    <div className="flex items-start justify-between p-4 rounded-lg hover:bg-muted/50 transition-colors">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="font-medium text-foreground">{title}</h3>
          {warning && (
            <AlertCircle className="h-4 w-4 text-yellow-500" title={warning} />
          )}
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="ml-4">
        {children}
      </div>
    </div>
  )

  const Toggle = ({ checked, onChange, disabled = false }) => (
    <button
      onClick={() => onChange(!checked)}
      disabled={disabled}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
        checked ? 'bg-gray-700' : 'bg-muted'
      } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
          checked ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
  )

  const renderSettingsContent = () => {
    switch (activeTab) {
      case 'appearance':
        return (
          <div className="space-y-1">
            <SettingItem
              title="Theme"
              description="Choose your preferred color scheme"
            >
              <select
                value={settings.appearance.theme}
                onChange={(e) => updateSetting('appearance', 'theme', e.target.value)}
                className="px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="light">Light Theme</option>
                <option value="dark">Dark Theme</option>
                <option value="system">System Theme</option>
                <option value="blue">Blue Theme</option>
                <option value="purple">Purple Theme</option>
                <option value="green">Green Theme</option>
                <option value="orange">Orange Theme</option>
                <option value="red">Red Theme</option>
                <option value="pink">Pink Theme</option>
                <option value="cyan">Cyan Theme</option>
                <option value="amber">Amber Theme</option>
                <option value="emerald">Emerald Theme</option>
              </select>
            </SettingItem>

            <SettingItem
              title="Font Size"
              description="Adjust the text size throughout the interface"
            >
              <select
                value={settings.appearance.fontSize}
                onChange={(e) => updateSetting('appearance', 'fontSize', e.target.value)}
                className="px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </SettingItem>

            <SettingItem
              title="Font Family"
              description="Choose the font family for the editor"
            >
              <select
                value={settings.appearance.fontFamily}
                onChange={(e) => updateSetting('appearance', 'fontFamily', e.target.value)}
                className="px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="system">System Default</option>
                <option value="mono">Monospace</option>
                <option value="sans">Sans Serif</option>
                <option value="serif">Serif</option>
              </select>
            </SettingItem>

            <SettingItem
              title="Animations"
              description="Enable smooth animations and transitions"
            >
              <Toggle
                checked={settings.appearance.animations}
                onChange={(value) => updateSetting('appearance', 'animations', value)}
              />
            </SettingItem>

            <SettingItem
              title="Compact Mode"
              description="Reduce spacing for a more compact interface"
            >
              <Toggle
                checked={settings.appearance.compactMode}
                onChange={(value) => updateSetting('appearance', 'compactMode', value)}
              />
            </SettingItem>
          </div>
        )

      case 'editor':
        return (
          <div className="space-y-1">
            <SettingItem
              title="Tab Size"
              description="Number of spaces for indentation"
            >
              <select
                value={settings.editor.tabSize}
                onChange={(e) => updateSetting('editor', 'tabSize', parseInt(e.target.value))}
                className="px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value={2}>2 spaces</option>
                <option value={4}>4 spaces</option>
                <option value={8}>8 spaces</option>
              </select>
            </SettingItem>

            <SettingItem
              title="Word Wrap"
              description="Wrap long lines in the editor"
            >
              <Toggle
                checked={settings.editor.wordWrap}
                onChange={(value) => updateSetting('editor', 'wordWrap', value)}
              />
            </SettingItem>

            <SettingItem
              title="Minimap"
              description="Show a minimap of your code"
            >
              <Toggle
                checked={settings.editor.minimap}
                onChange={(value) => updateSetting('editor', 'minimap', value)}
              />
            </SettingItem>

            <SettingItem
              title="Line Numbers"
              description="Show line numbers in the editor"
            >
              <Toggle
                checked={settings.editor.lineNumbers}
                onChange={(value) => updateSetting('editor', 'lineNumbers', value)}
              />
            </SettingItem>

            <SettingItem
              title="Auto Save"
              description="Automatically save files as you type"
            >
              <Toggle
                checked={settings.editor.autoSave}
                onChange={(value) => updateSetting('editor', 'autoSave', value)}
              />
            </SettingItem>

            <SettingItem
              title="Format on Save"
              description="Automatically format code when saving"
            >
              <Toggle
                checked={settings.editor.formatOnSave}
                onChange={(value) => updateSetting('editor', 'formatOnSave', value)}
              />
            </SettingItem>

            <SettingItem
              title="Auto Complete"
              description="Enable intelligent code completion"
            >
              <Toggle
                checked={settings.editor.autoComplete}
                onChange={(value) => updateSetting('editor', 'autoComplete', value)}
              />
            </SettingItem>
          </div>
        )

      case 'ai':
        return (
          <div className="space-y-1">
            <SettingItem
              title="Default AI Model"
              description="Choose your preferred AI model for code generation"
            >
              <select
                value={settings.ai.defaultModel}
                onChange={(e) => updateSetting('ai', 'defaultModel', e.target.value)}
                className="px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="codellama-7b">CodeLlama 7B</option>
                <option value="codellama-13b">CodeLlama 13B</option>
                <option value="starcoder-15b">StarCoder 15B</option>
                <option value="deepseek-coder">DeepSeek Coder</option>
                <option value="wizardcoder-7b">WizardCoder 7B</option>
              </select>
            </SettingItem>

            <SettingItem
              title="Temperature"
              description="Controls randomness in AI responses (0.0 = deterministic, 1.0 = creative)"
            >
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={settings.ai.temperature}
                  onChange={(e) => updateSetting('ai', 'temperature', parseFloat(e.target.value))}
                  className="w-24"
                />
                <span className="text-sm text-muted-foreground w-8">{settings.ai.temperature}</span>
              </div>
            </SettingItem>

            <SettingItem
              title="Max Tokens"
              description="Maximum number of tokens in AI responses"
            >
              <select
                value={settings.ai.maxTokens}
                onChange={(e) => updateSetting('ai', 'maxTokens', parseInt(e.target.value))}
                className="px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value={1000}>1,000</option>
                <option value={2000}>2,000</option>
                <option value={4000}>4,000</option>
                <option value={8000}>8,000</option>
              </select>
            </SettingItem>

            <SettingItem
              title="Auto Generate"
              description="Automatically generate code suggestions as you type"
            >
              <Toggle
                checked={settings.ai.autoGenerate}
                onChange={(value) => updateSetting('ai', 'autoGenerate', value)}
              />
            </SettingItem>

            <SettingItem
              title="AI Suggestions"
              description="Show contextual AI suggestions in the editor"
            >
              <Toggle
                checked={settings.ai.suggestions}
                onChange={(value) => updateSetting('ai', 'suggestions', value)}
              />
            </SettingItem>
          </div>
        )

      case 'notifications':
        return (
          <div className="space-y-1">
            <SettingItem
              title="Project Updates"
              description="Get notified when projects are updated"
            >
              <Toggle
                checked={settings.notifications.projectUpdates}
                onChange={(value) => updateSetting('notifications', 'projectUpdates', value)}
              />
            </SettingItem>

            <SettingItem
              title="AI Completions"
              description="Get notified when AI completes code generation"
            >
              <Toggle
                checked={settings.notifications.aiCompletions}
                onChange={(value) => updateSetting('notifications', 'aiCompletions', value)}
              />
            </SettingItem>

            <SettingItem
              title="Error Notifications"
              description="Get notified about errors and issues"
            >
              <Toggle
                checked={settings.notifications.errors}
                onChange={(value) => updateSetting('notifications', 'errors', value)}
              />
            </SettingItem>

            <SettingItem
              title="Sound Notifications"
              description="Play sounds for notifications"
            >
              <Toggle
                checked={settings.notifications.sound}
                onChange={(value) => updateSetting('notifications', 'sound', value)}
              />
            </SettingItem>

            <SettingItem
              title="Email Notifications"
              description="Receive notifications via email"
            >
              <Toggle
                checked={settings.notifications.email}
                onChange={(value) => updateSetting('notifications', 'email', value)}
              />
            </SettingItem>
          </div>
        )

      case 'privacy':
        return (
          <div className="space-y-1">
            <SettingItem
              title="Analytics"
              description="Help improve DreamBuild by sharing anonymous usage data"
            >
              <Toggle
                checked={settings.privacy.analytics}
                onChange={(value) => updateSetting('privacy', 'analytics', value)}
              />
            </SettingItem>

            <SettingItem
              title="Crash Reports"
              description="Automatically send crash reports to help fix bugs"
            >
              <Toggle
                checked={settings.privacy.crashReports}
                onChange={(value) => updateSetting('privacy', 'crashReports', value)}
              />
            </SettingItem>

            <SettingItem
              title="Telemetry"
              description="Share performance and usage telemetry"
              warning="This may include personal information"
            >
              <Toggle
                checked={settings.privacy.telemetry}
                onChange={(value) => updateSetting('privacy', 'telemetry', value)}
              />
            </SettingItem>

            <SettingItem
              title="Share Usage Statistics"
              description="Share anonymous usage statistics with the community"
            >
              <Toggle
                checked={settings.privacy.shareUsage}
                onChange={(value) => updateSetting('privacy', 'shareUsage', value)}
              />
            </SettingItem>
          </div>
        )

      default:
        return null
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-muted rounded w-1/4 mb-6"></div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="lg:col-span-1">
                <div className="space-y-3">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="h-12 bg-muted rounded"></div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-3">
                <div className="bg-card/50 rounded-xl p-6">
                  <div className="space-y-4">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="h-16 bg-muted rounded"></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Settings</h1>
              <p className="text-muted-foreground">
                Customize your DreamBuild experience and preferences
              </p>
            </div>
            <div className="flex items-center gap-2">
              {hasChanges && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  onClick={saveSettings}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all duration-200"
                >
                  <Save className="h-4 w-4" />
                  Save Changes
                </motion.button>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Settings Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-4">
              <nav className="space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                        activeTab === tab.id
                          ? 'bg-gray-700 text-white shadow-sm'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      {tab.name}
                    </button>
                  )
                })}
              </nav>
            </div>

            {/* Import/Export */}
            <div className="mt-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-4">
              <h3 className="font-semibold text-foreground mb-3">Data Management</h3>
              <div className="space-y-2">
                <button
                  onClick={exportSettings}
                  className="w-full flex items-center gap-2 px-3 py-2 text-sm text-foreground hover:bg-muted/50 rounded-lg transition-colors"
                >
                  <Download className="h-4 w-4" />
                  Export Settings
                </button>
                <label className="w-full flex items-center gap-2 px-3 py-2 text-sm text-foreground hover:bg-muted/50 rounded-lg transition-colors cursor-pointer">
                  <Upload className="h-4 w-4" />
                  Import Settings
                  <input
                    type="file"
                    accept=".json"
                    onChange={importSettings}
                    className="hidden"
                  />
                </label>
                <button
                  onClick={resetSettings}
                  className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <RefreshCw className="h-4 w-4" />
                  Reset to Defaults
                </button>
              </div>
            </div>
          </div>

          {/* Settings Content */}
          <div className="lg:col-span-3">
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl overflow-hidden">
              <div className="p-6 border-b border-border/50">
                <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
                  {React.createElement(tabs.find(t => t.id === activeTab)?.icon, { className: "h-5 w-5 text-white" })}
                  {tabs.find(t => t.id === activeTab)?.name}
                </h2>
              </div>
              <div className="divide-y divide-border/50">
                {renderSettingsContent()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings