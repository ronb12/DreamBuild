import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check, Sparkles, Code, Cloud, Server, Loader2, ChevronUp } from 'lucide-react';
import simpleAIService from '../../services/simpleAIService';

const AIModelSelector = ({ aiModel, setAIModel, modelUpdateKey, setModelUpdateKey }) => {
  const [showModelSelector, setShowModelSelector] = useState(false);
  const [availableModels, setAvailableModels] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showScrollBottom, setShowScrollBottom] = useState(false);
  const scrollContainerRef = useRef(null);

  // Load available models from services
  useEffect(() => {
    const loadModels = async () => {
      try {
        setIsLoading(true);
        console.log('🔧 Loading AI models...');

        const services = simpleAIService.getServices();
        console.log('🔧 Services:', services);

        const models = [];

        // Add cloud AI models
        if (services['cloud-ai'] && services['cloud-ai'].models) {
          console.log('🔧 Cloud AI models:', services['cloud-ai'].models);
          services['cloud-ai'].models.forEach(model => {
            models.push({
              id: `cloud-${model.model || model.name.toLowerCase().replace(/\s+/g, '-')}`,
              name: model.name,
              description: model.description,
              icon: Code,
              color: 'text-blue-500',
              bgColor: 'bg-blue-50 dark:bg-blue-900/20',
              type: 'cloud'
            });
          });
        }

        // Add local AI models
        if (services['local-ai'] && services['local-ai'].models) {
          console.log('🔧 Local AI models:', services['local-ai'].models);
          services['local-ai'].models.forEach(model => {
            models.push({
              id: `local-${model.model || model.name.toLowerCase().replace(/\s+/g, '-')}`,
              name: model.name,
              description: model.description,
              icon: Server,
              color: 'text-green-500',
              bgColor: 'bg-green-50 dark:bg-green-900/20',
              type: 'local'
            });
          });
        }

        // Add auto select option
        models.unshift({
          id: 'auto',
          name: 'Auto Select',
          description: 'Automatically selects the best available model',
          icon: Sparkles,
          color: 'text-purple-500',
          bgColor: 'bg-purple-50 dark:bg-purple-900/20',
          type: 'auto'
        });

        console.log('🔧 Final models before deduplication:', models);

        // Remove duplicates based on both id AND name
        const uniqueModels = models.filter((model, index, self) => {
          const isUniqueById = index === self.findIndex(m => m.id === model.id);
          const isUniqueByName = index === self.findIndex(m => m.name === model.name);
          return isUniqueById && isUniqueByName;
        });

        console.log('🔧 Unique models after deduplication:', uniqueModels.length);
        console.log('🔧 Final unique models:', uniqueModels.map(m => `${m.name} (${m.id})`));
        
        setAvailableModels(uniqueModels);
      } catch (error) {
        console.error('❌ Error loading models:', error);
        // Fallback to basic models
        const fallbackModels = [
          {
            id: 'auto',
            name: 'Auto Select',
            description: 'Automatically selects the best available model',
            icon: Sparkles,
            color: 'text-purple-500',
            bgColor: 'bg-purple-50 dark:bg-purple-900/20',
            type: 'auto'
          },
          {
            id: 'codellama-7b',
            name: 'CodeLlama 7B',
            description: 'Fast and efficient code generation',
            icon: Code,
            color: 'text-blue-500',
            bgColor: 'bg-blue-50 dark:bg-blue-900/20',
            type: 'cloud'
          },
          {
            id: 'codellama-13b',
            name: 'CodeLlama 13B',
            description: 'Higher quality code generation',
            icon: Code,
            color: 'text-blue-600',
            bgColor: 'bg-blue-50 dark:bg-blue-900/20',
            type: 'cloud'
          },
          {
            id: 'starcoder-15b',
            name: 'StarCoder 15B',
            description: 'Excellent code completion',
            icon: Code,
            color: 'text-indigo-500',
            bgColor: 'bg-indigo-50 dark:bg-indigo-900/20',
            type: 'cloud'
          },
          {
            id: 'deepseek-coder',
            name: 'DeepSeek Coder',
            description: 'High-performance generation',
            icon: Code,
            color: 'text-green-500',
            bgColor: 'bg-green-50 dark:bg-green-900/20',
            type: 'cloud'
          },
          {
            id: 'wizardcoder-7b',
            name: 'WizardCoder 7B',
            description: 'Great at following instructions',
            icon: Code,
            color: 'text-yellow-500',
            bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
            type: 'cloud'
          },
          {
            id: 'phi-3-mini',
            name: 'Phi-3 Mini',
            description: 'Lightweight but powerful',
            icon: Code,
            color: 'text-purple-500',
            bgColor: 'bg-purple-50 dark:bg-purple-900/20',
            type: 'cloud'
          },
          {
            id: 'llama3-8b',
            name: 'Llama 3 8B',
            description: 'General purpose model',
            icon: Code,
            color: 'text-red-500',
            bgColor: 'bg-red-50 dark:bg-red-900/20',
            type: 'cloud'
          },
          {
            id: 'mistral-7b',
            name: 'Mistral 7B',
            description: 'Fast and efficient coding assistant',
            icon: Code,
            color: 'text-indigo-500',
            bgColor: 'bg-indigo-50 dark:bg-indigo-900/20',
            type: 'cloud'
          },
          {
            id: 'gemma-7b',
            name: 'Gemma 7B',
            description: 'Google\'s lightweight model',
            icon: Code,
            color: 'text-pink-500',
            bgColor: 'bg-pink-50 dark:bg-pink-900/20',
            type: 'cloud'
          },
          {
            id: 'qwen-7b',
            name: 'Qwen 7B',
            description: 'Alibaba\'s coding model',
            icon: Code,
            color: 'text-teal-500',
            bgColor: 'bg-teal-50 dark:bg-teal-900/20',
            type: 'cloud'
          }
        ];
        setAvailableModels(fallbackModels);
      } finally {
        setIsLoading(false);
      }
    };

    loadModels();
  }, []);

  const selectedModel = availableModels.find(model => model.id === aiModel) || availableModels[0] || {
    id: 'auto',
    name: 'Auto Select',
    description: 'Automatically selects the best available model',
    icon: Sparkles,
    color: 'text-purple-500',
    bgColor: 'bg-purple-50 dark:bg-purple-900/20',
    type: 'auto'
  };

  // Close model selector when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showModelSelector && 
          !event.target.closest('.model-selector') && 
          !event.target.closest('button[class*="w-full p-2 rounded"]')) {
        setShowModelSelector(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showModelSelector]);

  // Check scroll indicators when dropdown opens
  useEffect(() => {
    if (showModelSelector && scrollContainerRef.current) {
      setTimeout(() => {
        handleScroll();
      }, 100);
    }
  }, [showModelSelector, availableModels]);

  const handleModelSelect = (modelId) => {
    setAIModel(modelId);
    setModelUpdateKey(prev => prev + 1);
    setShowModelSelector(false);
  };

  // Handle scroll indicators
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;
      setShowScrollTop(scrollTop > 0);
      setShowScrollBottom(scrollTop < scrollHeight - clientHeight - 10);
    }
  };

  // Scroll to top
  const scrollToTop = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Scroll to bottom
  const scrollToBottom = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: scrollContainerRef.current.scrollHeight, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowModelSelector(!showModelSelector)}
        className="w-full p-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors text-left flex items-center justify-between"
      >
        <div className="flex items-center gap-2">
          <selectedModel.icon className={`h-4 w-4 ${selectedModel.color}`} />
          <span className="text-sm font-medium">{selectedModel.name}</span>
        </div>
        <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform ${showModelSelector ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {showModelSelector && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-xl shadow-lg z-50 model-selector"
          >
            {/* Scroll to top indicator */}
            {showScrollTop && (
              <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-card to-transparent p-2 z-10 rounded-t-xl">
                <button
                  onClick={scrollToTop}
                  className="w-full flex items-center justify-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ChevronUp className="h-3 w-3" />
                  Scroll to top
                </button>
              </div>
            )}
            
            {/* Scrollable content */}
            <div 
              ref={scrollContainerRef}
              onScroll={handleScroll}
              className="max-h-80 overflow-y-auto"
              style={{
                scrollbarWidth: 'thin',
                scrollbarColor: 'rgba(156, 163, 175, 0.3) transparent'
              }}
            >
              <div className="p-2">
                {isLoading ? (
                  <div className="p-4 text-center text-muted-foreground">
                    <Loader2 className="h-4 w-4 animate-spin mx-auto mb-2" />
                    Loading models...
                  </div>
                ) : (
                  availableModels.map((model) => {
                    const Icon = model.icon;
                    const isSelected = model.id === aiModel;
                    
                    return (
                      <button
                        key={model.id}
                        onClick={() => handleModelSelect(model.id)}
                        className={`w-full p-3 rounded-lg text-left transition-colors hover:bg-muted/50 ${
                          isSelected ? 'bg-primary/10' : ''
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-lg ${model.bgColor} flex items-center justify-center`}>
                            <Icon className={`h-4 w-4 ${model.color}`} />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-sm">{model.name}</span>
                              {isSelected && <Check className="h-4 w-4 text-primary" />}
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">{model.description}</p>
                          </div>
                        </div>
                      </button>
                    );
                  })
                )}
              </div>
            </div>
            
            {/* Scroll to bottom indicator */}
            {showScrollBottom && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-card to-transparent p-2 z-10 rounded-b-xl">
                <button
                  onClick={scrollToBottom}
                  className="w-full flex items-center justify-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ChevronDown className="h-3 w-3" />
                  Scroll to bottom
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AIModelSelector;
