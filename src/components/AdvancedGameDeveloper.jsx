import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Gamepad2, 
  Code, 
  Zap, 
  Star,
  Settings,
  Play,
  Download,
  Upload,
  Eye,
  Edit3,
  Palette,
  Volume2,
  Users,
  Globe,
  Smartphone,
  Monitor,
  Headphones,
  Camera,
  Layers,
  Box,
  Cpu,
  Database,
  Network,
  Shield,
  BarChart3,
  Rocket,
  Sparkles,
  Plus,
  Filter,
  Search,
  ChevronDown,
  ChevronRight,
  Info,
  ExternalLink,
  Copy,
  Share2,
  Heart,
  Bookmark,
  Clock,
  Target,
  Award,
  TrendingUp
} from 'lucide-react'
import { toast } from 'react-hot-toast'
import gameDevelopmentService from '../services/gameDevelopmentService'
import { useProject } from '../contexts/ProjectContext'

const AdvancedGameDeveloper = ({ isVisible, onClose }) => {
  const { currentProject, updateFile, switchFile } = useProject()
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedEngine, setSelectedEngine] = useState('all')
  const [selectedComplexity, setSelectedComplexity] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [showAdvancedOptions, setShowAdvancedOptions] = useState(false)
  const [selectedTemplate, setSelectedTemplate] = useState(null)

  // Advanced game options
  const [gameOptions, setGameOptions] = useState({
    engine: 'auto',
    physics: 'arcade',
    graphics: '2d',
    multiplayer: false,
    vr: false,
    ar: false,
    assets: 'procedural',
    difficulty: 'medium',
    theme: 'modern'
  })

  // Game categories with advanced templates
  const gameCategories = [
    { 
      id: 'all', 
      name: 'All Games', 
      icon: Gamepad2, 
      color: 'text-purple-500',
      description: 'Browse all available game templates'
    },
    { 
      id: '2d-games', 
      name: '2D Games', 
      icon: Layers, 
      color: 'text-blue-500',
      description: 'Classic 2D games with modern features'
    },
    { 
      id: '3d-games', 
      name: '3D Games', 
      icon: Box, 
      color: 'text-green-500',
      description: 'Immersive 3D experiences with advanced graphics'
    },
    { 
      id: 'multiplayer', 
      name: 'Multiplayer', 
      icon: Users, 
      color: 'text-orange-500',
      description: 'Real-time multiplayer games with networking'
    },
    { 
      id: 'vr-ar', 
      name: 'VR/AR Games', 
      icon: Headphones, 
      color: 'text-pink-500',
      description: 'Virtual and Augmented Reality experiences'
    },
    { 
      id: 'specialized', 
      name: 'Specialized', 
      icon: Sparkles, 
      color: 'text-cyan-500',
      description: 'Unique game types with specialized mechanics'
    }
  ]

  // Game engines
  const gameEngines = [
    { id: 'all', name: 'All Engines', icon: Cpu, description: 'Any game engine' },
    { id: 'phaser', name: 'Phaser.js', icon: Globe, description: '2D games, HTML5 Canvas' },
    { id: 'threejs', name: 'Three.js', icon: Box, description: '3D graphics, WebGL' },
    { id: 'babylon', name: 'Babylon.js', icon: Monitor, description: '3D games, VR/AR support' },
    { id: 'unity', name: 'Unity WebGL', icon: Rocket, description: 'Professional 3D games' },
    { id: 'godot', name: 'Godot', icon: Target, description: '2D/3D games, open source' }
  ]

  // Complexity levels
  const complexityLevels = [
    { id: 'all', name: 'All Levels', icon: BarChart3, description: 'Any complexity' },
    { id: 'simple', name: 'Simple', icon: Star, description: '1-2 hours development' },
    { id: 'medium', name: 'Medium', icon: TrendingUp, description: '4-8 hours development' },
    { id: 'complex', name: 'Complex', icon: Award, description: '8-16 hours development' },
    { id: 'expert', name: 'Expert', icon: Rocket, description: '16+ hours development' }
  ]

  // Advanced game templates
  const gameTemplates = [
    // 2D Games
    {
      id: 'temple-run',
      name: 'Temple Run',
      category: '2d-games',
      engine: 'phaser',
      complexity: 'medium',
      description: 'Endless runner with lane switching, jumping, and sliding mechanics',
      features: ['3-lane gameplay', 'jump/slide mechanics', 'coin collection', 'progressive difficulty'],
      estimatedTime: '4-8 hours',
      tags: ['runner', 'endless', 'casual', 'mobile-friendly'],
      icon: '🏃‍♂️',
      popularity: 95
    },
    {
      id: 'rpg',
      name: '2D RPG',
      category: '2d-games',
      engine: 'phaser',
      complexity: 'complex',
      description: 'Full-featured RPG with inventory, quests, combat, and character progression',
      features: ['character progression', 'inventory system', 'quest system', 'combat mechanics', 'dialogue system'],
      estimatedTime: '24-48 hours',
      tags: ['rpg', 'adventure', 'story-driven', 'character-progression'],
      icon: '⚔️',
      popularity: 88
    },
    {
      id: 'tower-defense',
      name: 'Tower Defense',
      category: '2d-games',
      engine: 'phaser',
      complexity: 'complex',
      description: 'Strategic tower defense with wave-based gameplay and tower upgrades',
      features: ['wave system', 'tower upgrades', 'resource management', 'pathfinding', 'strategy'],
      estimatedTime: '16-32 hours',
      tags: ['strategy', 'tower-defense', 'waves', 'upgrades'],
      icon: '🏰',
      popularity: 82
    },
    {
      id: 'racing',
      name: '2D Racing',
      category: '2d-games',
      engine: 'phaser',
      complexity: 'medium',
      description: 'Top-down racing game with vehicle physics and AI opponents',
      features: ['vehicle physics', 'ai opponents', 'power-ups', 'multiple tracks'],
      estimatedTime: '12-24 hours',
      tags: ['racing', 'vehicles', 'multiplayer', 'physics'],
      icon: '🏎️',
      popularity: 76
    },

    // 3D Games
    {
      id: '3d-platformer',
      name: '3D Platformer',
      category: '3d-games',
      engine: 'threejs',
      complexity: 'complex',
      description: 'Full 3D platformer with advanced physics, lighting, and camera controls',
      features: ['3d graphics', 'physics-based movement', 'dynamic lighting', 'camera controls', 'level generation'],
      estimatedTime: '40-80 hours',
      tags: ['3d', 'platformer', 'physics', 'lighting'],
      icon: '🎮',
      popularity: 91
    },
    {
      id: '3d-racing',
      name: '3D Racing',
      category: '3d-games',
      engine: 'threejs',
      complexity: 'complex',
      description: 'Immersive 3D racing with realistic physics and multiple camera angles',
      features: ['3d tracks', 'vehicle physics', 'multiple cameras', 'ai racing', 'realistic lighting'],
      estimatedTime: '32-64 hours',
      tags: ['3d', 'racing', 'realistic', 'physics'],
      icon: '🏁',
      popularity: 85
    },
    {
      id: '3d-rpg',
      name: '3D RPG',
      category: '3d-games',
      engine: 'babylon',
      complexity: 'expert',
      description: 'Epic 3D RPG with open world, advanced graphics, and complex systems',
      features: ['open world', 'advanced graphics', 'complex combat', 'quest system', 'character customization'],
      estimatedTime: '80-160 hours',
      tags: ['3d', 'rpg', 'open-world', 'epic'],
      icon: '🗡️',
      popularity: 93
    },

    // Multiplayer Games
    {
      id: 'multiplayer-arena',
      name: 'Multiplayer Arena',
      category: 'multiplayer',
      engine: 'phaser',
      complexity: 'expert',
      description: 'Real-time multiplayer arena combat with matchmaking and leaderboards',
      features: ['real-time multiplayer', 'matchmaking', 'leaderboards', 'combat system', 'team battles'],
      estimatedTime: '100-200 hours',
      tags: ['multiplayer', 'arena', 'real-time', 'combat'],
      icon: '⚔️',
      popularity: 89
    },
    {
      id: 'battle-royale',
      name: 'Battle Royale',
      category: 'multiplayer',
      engine: 'babylon',
      complexity: 'expert',
      description: 'Large-scale battle royale with 100+ players and dynamic gameplay',
      features: ['100+ players', 'large map', 'loot system', 'shrinking zone', 'spectator mode'],
      estimatedTime: '200-400 hours',
      tags: ['multiplayer', 'battle-royale', 'large-scale', 'competitive'],
      icon: '🎯',
      popularity: 94
    },

    // VR/AR Games
    {
      id: 'vr-game',
      name: 'VR Experience',
      category: 'vr-ar',
      engine: 'babylon',
      complexity: 'expert',
      description: 'Immersive VR game with hand tracking and spatial audio',
      features: ['vr support', 'hand tracking', 'spatial audio', 'room-scale', 'immersive ui'],
      estimatedTime: '300-600 hours',
      tags: ['vr', 'immersive', 'hand-tracking', 'spatial-audio'],
      icon: '🥽',
      popularity: 87
    },
    {
      id: 'ar-game',
      name: 'AR Game',
      category: 'vr-ar',
      engine: 'threejs',
      complexity: 'expert',
      description: 'Augmented reality game with camera integration and marker tracking',
      features: ['ar support', 'camera integration', 'marker tracking', 'real-world interaction'],
      estimatedTime: '400-800 hours',
      tags: ['ar', 'camera', 'real-world', 'interactive'],
      icon: '📱',
      popularity: 83
    },

    // Specialized Games
    {
      id: 'physics-sandbox',
      name: 'Physics Sandbox',
      category: 'specialized',
      engine: 'threejs',
      complexity: 'complex',
      description: 'Advanced physics sandbox with object interaction and gravity control',
      features: ['advanced physics', 'object interaction', 'gravity control', 'material simulation'],
      estimatedTime: '24-48 hours',
      tags: ['physics', 'sandbox', 'interactive', 'simulation'],
      icon: '🧪',
      popularity: 79
    },
    {
      id: 'music-game',
      name: 'Music Game',
      category: 'specialized',
      engine: 'phaser',
      complexity: 'medium',
      description: 'Rhythm-based music game with audio processing and visual effects',
      features: ['audio processing', 'rhythm detection', 'visual effects', 'song editor'],
      estimatedTime: '16-32 hours',
      tags: ['music', 'rhythm', 'audio', 'visual-effects'],
      icon: '🎵',
      popularity: 74
    }
  ]

  // Filter templates based on selected criteria
  const filteredTemplates = gameTemplates.filter(template => {
    const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory
    const matchesEngine = selectedEngine === 'all' || template.engine === selectedEngine
    const matchesComplexity = selectedComplexity === 'all' || template.complexity === selectedComplexity
    const matchesSearch = searchQuery === '' || 
      template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    
    return matchesCategory && matchesEngine && matchesComplexity && matchesSearch
  })

  const handleGenerateGame = async (template) => {
    setIsGenerating(true)
    try {
      console.log('🎮 Generating advanced game:', template.id)
      
      // Generate game with advanced options
      const gameData = gameDevelopmentService.generateGame(template.id, {
        ...gameOptions,
        engine: gameOptions.engine === 'auto' ? template.engine : gameOptions.engine
      })
      
      // Add files to project
      Object.entries(gameData.files).forEach(([filename, content]) => {
        updateFile(filename, content)
      })
      
      // Set first file as active
      const firstFile = Object.keys(gameData.files)[0]
      if (firstFile) {
        switchFile(firstFile)
      }
      
      toast.success(`🎮 Generated ${template.name} successfully!`)
      
      if (onClose) {
        onClose()
      }
      
    } catch (error) {
      console.error('❌ Game generation failed:', error)
      toast.error(`Failed to generate ${template.name}`)
    } finally {
      setIsGenerating(false)
    }
  }

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template)
    setShowAdvancedOptions(true)
  }

  const getComplexityColor = (complexity) => {
    const colors = {
      simple: 'text-green-500',
      medium: 'text-yellow-500',
      complex: 'text-orange-500',
      expert: 'text-red-500'
    }
    return colors[complexity] || 'text-gray-500'
  }

  const getComplexityBg = (complexity) => {
    const colors = {
      simple: 'bg-green-50 border-green-200',
      medium: 'bg-yellow-50 border-yellow-200',
      complex: 'bg-orange-50 border-orange-200',
      expert: 'bg-red-50 border-red-200'
    }
    return colors[complexity] || 'bg-gray-50 border-gray-200'
  }

  if (!isVisible) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.95 }}
          className="bg-background border border-border rounded-xl shadow-2xl max-w-7xl w-full max-h-[90vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border bg-gradient-to-r from-purple-500/10 to-blue-500/10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
                <Gamepad2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">Advanced Game Developer</h2>
                <p className="text-sm text-muted-foreground">Professional-grade game development with multiple engines</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
              title="Close"
            >
              <span className="text-xl text-muted-foreground">×</span>
            </button>
          </div>

          {/* Filters and Search */}
          <div className="p-6 border-b border-border bg-muted/30">
            <div className="flex gap-4 mb-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search games, features, or tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                />
              </div>
              <button 
                onClick={() => setShowAdvancedOptions(!showAdvancedOptions)}
                className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors flex items-center gap-2"
              >
                <Settings className="h-4 w-4" />
                Advanced Options
              </button>
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {gameCategories.map((category) => {
                const Icon = category.icon
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${
                      selectedCategory === category.id
                        ? 'bg-purple-500 text-white'
                        : 'bg-background text-muted-foreground hover:bg-muted border border-border'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="text-sm font-medium">{category.name}</span>
                  </button>
                )
              })}
            </div>

            {/* Secondary Filters */}
            <div className="flex gap-4 mt-4">
              <select
                value={selectedEngine}
                onChange={(e) => setSelectedEngine(e.target.value)}
                className="px-3 py-2 bg-background border border-border rounded-lg text-foreground"
              >
                {gameEngines.map(engine => (
                  <option key={engine.id} value={engine.id}>{engine.name}</option>
                ))}
              </select>
              <select
                value={selectedComplexity}
                onChange={(e) => setSelectedComplexity(e.target.value)}
                className="px-3 py-2 bg-background border border-border rounded-lg text-foreground"
              >
                {complexityLevels.map(level => (
                  <option key={level.id} value={level.id}>{level.name}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Advanced Options Panel */}
          {showAdvancedOptions && (
            <div className="p-6 border-b border-border bg-muted/20">
              <h3 className="text-lg font-semibold mb-4">Advanced Game Options</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Engine</label>
                  <select
                    value={gameOptions.engine}
                    onChange={(e) => setGameOptions({...gameOptions, engine: e.target.value})}
                    className="w-full px-3 py-2 bg-background border border-border rounded-lg"
                  >
                    <option value="auto">Auto Select</option>
                    <option value="phaser">Phaser.js</option>
                    <option value="threejs">Three.js</option>
                    <option value="babylon">Babylon.js</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Physics</label>
                  <select
                    value={gameOptions.physics}
                    onChange={(e) => setGameOptions({...gameOptions, physics: e.target.value})}
                    className="w-full px-3 py-2 bg-background border border-border rounded-lg"
                  >
                    <option value="arcade">Arcade</option>
                    <option value="box2d">Box2D</option>
                    <option value="cannon">Cannon.js</option>
                    <option value="matter">Matter.js</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Graphics</label>
                  <select
                    value={gameOptions.graphics}
                    onChange={(e) => setGameOptions({...gameOptions, graphics: e.target.value})}
                    className="w-full px-3 py-2 bg-background border border-border rounded-lg"
                  >
                    <option value="2d">2D</option>
                    <option value="3d">3D</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Theme</label>
                  <select
                    value={gameOptions.theme}
                    onChange={(e) => setGameOptions({...gameOptions, theme: e.target.value})}
                    className="w-full px-3 py-2 bg-background border border-border rounded-lg"
                  >
                    <option value="modern">Modern</option>
                    <option value="retro">Retro</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="sci-fi">Sci-Fi</option>
                  </select>
                </div>
              </div>
              <div className="flex gap-4 mt-4">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={gameOptions.multiplayer}
                    onChange={(e) => setGameOptions({...gameOptions, multiplayer: e.target.checked})}
                    className="rounded"
                  />
                  <span className="text-sm">Multiplayer Support</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={gameOptions.vr}
                    onChange={(e) => setGameOptions({...gameOptions, vr: e.target.checked})}
                    className="rounded"
                  />
                  <span className="text-sm">VR Support</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={gameOptions.ar}
                    onChange={(e) => setGameOptions({...gameOptions, ar: e.target.checked})}
                    className="rounded"
                  />
                  <span className="text-sm">AR Support</span>
                </label>
              </div>
            </div>
          )}

          {/* Game Templates Grid */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">
                {filteredTemplates.length} Advanced Game Template{filteredTemplates.length !== 1 ? 's' : ''} Found
              </h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>Popularity</span>
                <TrendingUp className="h-4 w-4" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTemplates.map((template) => (
                <motion.div
                  key={template.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-card border border-border rounded-xl p-6 hover:border-purple-500/50 transition-all group cursor-pointer"
                  onClick={() => handleTemplateSelect(template)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="text-3xl">{template.icon}</div>
                      <div>
                        <h4 className="font-semibold text-foreground group-hover:text-purple-500 transition-colors">
                          {template.name}
                        </h4>
                        <div className="flex items-center gap-2 mt-1">
                          <span className={`text-xs px-2 py-1 rounded-full ${getComplexityBg(template.complexity)}`}>
                            <span className={getComplexityColor(template.complexity)}>
                              {template.complexity.charAt(0).toUpperCase() + template.complexity.slice(1)}
                            </span>
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {template.estimatedTime}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-yellow-500">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-sm font-medium">{template.popularity}</span>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {template.description}
                  </p>

                  <div className="mb-4">
                    <h5 className="text-xs font-medium text-muted-foreground mb-2">Key Features:</h5>
                    <div className="flex flex-wrap gap-1">
                      {template.features.slice(0, 3).map((feature, index) => (
                        <span key={index} className="text-xs px-2 py-1 bg-muted rounded text-muted-foreground">
                          {feature}
                        </span>
                      ))}
                      {template.features.length > 3 && (
                        <span className="text-xs px-2 py-1 bg-muted rounded text-muted-foreground">
                          +{template.features.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {template.tags.slice(0, 2).map((tag, index) => (
                        <span key={index} className="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        handleGenerateGame(template)
                      }}
                      disabled={isGenerating}
                      className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors flex items-center gap-2 text-sm disabled:opacity-50"
                    >
                      {isGenerating ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Generating...
                        </>
                      ) : (
                        <>
                          <Rocket className="h-4 w-4" />
                          Generate
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredTemplates.length === 0 && (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-muted-foreground" />
                </div>
                <h4 className="text-lg font-medium text-foreground mb-2">No games found</h4>
                <p className="text-muted-foreground">Try adjusting your search criteria or filters</p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-border bg-muted/30">
            <div className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground">
                <p>🎮 <strong>DreamBuild Advanced Game Developer</strong> - Professional game development with multiple engines</p>
                <p>Supports: Phaser.js, Three.js, Babylon.js, Unity WebGL, Godot, VR/AR, Multiplayer, and more!</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={onClose}
                  className="px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default AdvancedGameDeveloper
