import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check, Sparkles, Code, Cloud, Server, Loader2, ChevronUp, X } from 'lucide-react';
import simpleAIService from '../../services/simpleAIService';

const AIModelSelector = ({ aiModel, setAIModel, modelUpdateKey, setModelUpdateKey }) => {
  const [showModal, setShowModal] = useState(false);
  const [availableModels, setAvailableModels] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showScrollBottom, setShowScrollBottom] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollContainerRef = useRef(null);

  // Load available models from services
  useEffect(() => {
    const loadModels = async () => {
      try {
        setIsLoading(true);
        const services = simpleAIService.getServices();

        const models = [];

        // Add cloud AI models
        if (services['cloud-ai'] && services['cloud-ai'].models) {
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
          services['local-ai'].models.forEach(model => {
            models.push({
              id: `local-${model.model || model.name.toLowerCase().replace(/\s+/g, '-')}`,
              name: model.name,
              description: model.description,
              icon: Server,
              color: 'text-green-500',
              bgColor: 'bg-green-50 dark:bg-green-900/20',
              type: model.type || 'Code Generation',
              ram_required: model.ram_required,
              languages: model.languages,
              strengths: model.strengths
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
          type: 'Auto Selection',
          ram_required: 'variable',
          languages: ['all'],
          strengths: ['smart-selection', 'availability']
        });

        // Remove duplicates based on both id AND name
        const uniqueModels = models.filter((model, index, self) => {
          const isUniqueById = index === self.findIndex(m => m.id === model.id);
          const isUniqueByName = index === self.findIndex(m => m.name === model.name);
          return isUniqueById && isUniqueByName;
        });
        
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

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showModal && 
          !event.target.closest('.model-modal') && 
          !event.target.closest('button[class*="w-full p-2 rounded"]')) {
        setShowModal(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showModal]);

  // Check scroll indicators when modal opens
  useEffect(() => {
    if (showModal && scrollContainerRef.current) {
      setTimeout(() => {
        handleScroll();
      }, 100);
    }
  }, [showModal, availableModels]);

  const handleModelSelect = (modelId) => {
    setAIModel(modelId);
    setModelUpdateKey(prev => prev + 1);
    setShowModal(false);
  };

  // Handle scroll indicators
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;
      setShowScrollTop(scrollTop > 10);
      setShowScrollBottom(scrollTop < scrollHeight - clientHeight - 10);
      
      // Calculate scroll progress
      const progress = scrollTop / (scrollHeight - clientHeight);
      setScrollProgress(Math.min(progress, 1));
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
    <>
      {/* Model Selector Button */}
      <button
        onClick={() => setShowModal(true)}
        className="w-full p-3 rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 hover:from-primary/20 hover:to-primary/10 transition-all duration-300 text-left flex items-center justify-between border border-primary/20 hover:border-primary/30"
      >
        <div className="flex items-center gap-3">
          <div className={`w-8 h-8 rounded-lg ${selectedModel.bgColor} flex items-center justify-center`}>
            <selectedModel.icon className={`h-4 w-4 ${selectedModel.color}`} />
          </div>
          <div>
            <div className="font-medium text-sm">{selectedModel.name}</div>
            <div className="text-xs text-muted-foreground">{selectedModel.description}</div>
          </div>
        </div>
        <ChevronDown className="h-4 w-4 text-muted-foreground" />
      </button>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-10 flex items-center justify-center p-4"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="bg-card border border-border rounded-xl shadow-2xl w-full max-w-lg max-h-[90vh] flex flex-col model-modal"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b border-border">
                <h3 className="text-lg font-semibold">Select AI Model</h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="p-1 rounded-lg hover:bg-muted transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Scrollable content */}
              <div className="flex-1 overflow-hidden relative">
                {/* Scroll progress bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-muted/20 z-5">
                  <div 
                    className="h-full bg-primary transition-all duration-200"
                    style={{ width: `${scrollProgress * 100}%` }}
                  />
                </div>
                
                {/* Scroll to top indicator */}
                {showScrollTop && (
                  <div className="absolute top-2 left-0 right-0 bg-gradient-to-b from-card via-card/90 to-transparent p-2 z-5 rounded-t-xl">
                    <button
                      onClick={scrollToTop}
                      className="w-full flex items-center justify-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors bg-card/80 backdrop-blur-sm rounded-lg py-2 border border-border/50"
                    >
                      <ChevronUp className="h-3 w-3" />
                      Scroll to top
                    </button>
                  </div>
                )}
                
                <div 
                  ref={scrollContainerRef}
                  onScroll={handleScroll}
                  className="flex-1 overflow-y-auto relative"
                  style={{
                    scrollbarWidth: 'thin',
                    scrollbarColor: 'rgba(59, 130, 246, 0.5) rgba(0, 0, 0, 0.1)',
                    scrollBehavior: 'smooth',
                    maxHeight: '400px'
                  }}
                >
                  {/* Scroll indicator overlay */}
                  {showScrollBottom && (
                    <div className="absolute bottom-4 right-4 bg-primary/20 backdrop-blur-sm rounded-full p-2 z-5 shadow-lg border border-primary/30">
                      <ChevronDown className="h-4 w-4 text-primary animate-bounce" />
                    </div>
                  )}
                  
                  <div className="p-2">
                    {isLoading ? (
                      <div className="p-8 text-center text-muted-foreground">
                        <Loader2 className="h-6 w-6 animate-spin mx-auto mb-3" />
                        <p>Loading AI models...</p>
                      </div>
                    ) : (
                      <div className="space-y-1">
                        {availableModels.map((model) => {
                          const Icon = model.icon;
                          const isSelected = model.id === aiModel;
                          
                          return (
                            <button
                              key={model.id}
                              onClick={() => handleModelSelect(model.id)}
                              className={`w-full p-3 rounded-lg text-left transition-all duration-200 hover:bg-muted/50 border ${
                                isSelected 
                                  ? 'bg-primary/10 border-primary/30 shadow-sm' 
                                  : 'border-border hover:border-primary/20'
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <div className={`w-8 h-8 rounded-lg ${model.bgColor} flex items-center justify-center`}>
                                  <Icon className={`h-4 w-4 ${model.color}`} />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-2">
                                    <span className="font-medium text-sm truncate">{model.name}</span>
                                    {isSelected && <Check className="h-4 w-4 text-primary flex-shrink-0" />}
                                  </div>
                                  <p className="text-xs text-muted-foreground mt-0.5 truncate">{model.description}</p>
                                  <div className="flex items-center gap-2 mt-1">
                                    <span className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-full">
                                      {model.type}
                                    </span>
                                    {model.ram_required && (
                                      <span className="text-xs px-2 py-0.5 bg-muted text-muted-foreground rounded-full">
                                        {model.ram_required} RAM
                                      </span>
                                    )}
                                  </div>
                                  {model.languages && model.languages.length > 0 && (
                                    <div className="flex flex-wrap gap-1 mt-1">
                                      {model.languages.slice(0, 3).map((lang, idx) => (
                                        <span key={idx} className="text-xs px-1.5 py-0.5 bg-secondary/20 text-secondary-foreground rounded">
                                          {lang}
                                        </span>
                                      ))}
                                      {model.languages.length > 3 && (
                                        <span className="text-xs px-1.5 py-0.5 bg-muted text-muted-foreground rounded">
                                          +{model.languages.length - 3} more
                                        </span>
                                      )}
                                    </div>
                                  )}
                                </div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Scroll to bottom indicator */}
                {showScrollBottom && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-card via-card/90 to-transparent p-2 z-5 rounded-b-xl">
                    <button
                      onClick={scrollToBottom}
                      className="w-full flex items-center justify-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors bg-card/80 backdrop-blur-sm rounded-lg py-2 border border-border/50"
                    >
                      <ChevronDown className="h-3 w-3" />
                      Scroll to bottom
                    </button>
                  </div>
                )}
                
                {/* Floating scroll buttons */}
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-2 z-5">
                  {showScrollTop && (
                    <button
                      onClick={scrollToTop}
                      className="p-2 bg-primary/10 hover:bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30 transition-all duration-200 shadow-lg"
                    >
                      <ChevronUp className="h-4 w-4 text-primary" />
                    </button>
                  )}
                  {showScrollBottom && (
                    <button
                      onClick={scrollToBottom}
                      className="p-2 bg-primary/10 hover:bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30 transition-all duration-200 shadow-lg"
                    >
                      <ChevronDown className="h-4 w-4 text-primary" />
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIModelSelector;
