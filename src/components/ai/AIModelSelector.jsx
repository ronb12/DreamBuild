import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check, Sparkles, Zap, Brain, Code } from 'lucide-react';

const AIModelSelector = ({ aiModel, setAIModel, modelUpdateKey, setModelUpdateKey }) => {
  const [showModelSelector, setShowModelSelector] = useState(false);

  const models = [
    {
      id: 'auto',
      name: 'Auto Select',
      description: 'Automatically selects the best available model',
      icon: Sparkles,
      color: 'text-blue-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      id: 'codellama-7b',
      name: 'CodeLlama 7B',
      description: 'Fast and efficient code generation',
      icon: Code,
      color: 'text-green-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20'
    },
    {
      id: 'deepseek-coder',
      name: 'DeepSeek Coder',
      description: 'Advanced code understanding and generation',
      icon: Brain,
      color: 'text-purple-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20'
    },
    {
      id: 'wizardcoder',
      name: 'WizardCoder',
      description: 'Specialized in complex programming tasks',
      icon: Zap,
      color: 'text-orange-500',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20'
    }
  ];

  const selectedModel = models.find(model => model.id === aiModel) || models[0];

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

  const handleModelSelect = (modelId) => {
    setAIModel(modelId);
    setModelUpdateKey(prev => prev + 1);
    setShowModelSelector(false);
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
            <div className="p-2">
              {models.map((model) => {
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
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AIModelSelector;
