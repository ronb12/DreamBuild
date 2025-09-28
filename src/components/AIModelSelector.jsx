import React, { useState, useEffect } from 'react';
import { ChevronDown, Brain, Zap, Settings } from 'lucide-react';

const AIModelSelector = ({ selectedModel, onModelChange, availableModels = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [models, setModels] = useState([]);

  useEffect(() => {
    // Default models if none provided
    const defaultModels = [
      {
        id: 'auto',
        name: 'Auto Select',
        description: 'Automatically selects the best available model',
        type: 'Auto Selection',
        icon: Brain,
        status: 'available'
      },
      {
        id: 'codellama-7b',
        name: 'CodeLlama 7B',
        description: 'Fast and efficient code generation (7B parameters)',
        type: 'Code Generation',
        icon: Zap,
        status: 'available'
      },
      {
        id: 'gpt-4',
        name: 'GPT-4',
        description: 'Advanced language model with excellent code understanding',
        type: 'Language Model',
        icon: Brain,
        status: 'available'
      },
      {
        id: 'claude-3',
        name: 'Claude 3',
        description: 'Anthropic\'s advanced AI assistant',
        type: 'Language Model',
        icon: Brain,
        status: 'available'
      },
      {
        id: 'local-ai',
        name: 'Local AI',
        description: 'Run AI models locally on your machine',
        type: 'Local Processing',
        icon: Settings,
        status: 'available'
      }
    ];

    setModels(availableModels.length > 0 ? availableModels : defaultModels);
  }, []); // Remove availableModels from dependency array to prevent infinite re-renders

  const selectedModelData = models.find(model => model.id === selectedModel) || models[0];

  const handleModelSelect = (model) => {
    onModelChange(model.id);
    setIsOpen(false);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'available': return 'text-green-500';
      case 'loading': return 'text-yellow-500';
      case 'error': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'available': return 'Available';
      case 'loading': return 'Loading...';
      case 'error': return 'Error';
      default: return 'Unknown';
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-4 py-3 bg-white border border-gray-300 rounded-lg shadow-sm hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
      >
        <div className="flex items-center space-x-3">
          {selectedModelData?.icon && (
            <selectedModelData.icon className="w-5 h-5 text-blue-600" />
          )}
          <div className="text-left">
            <div className="font-medium text-gray-900">{selectedModelData?.name || 'Select Model'}</div>
            <div className="text-sm text-gray-500">{selectedModelData?.description || 'Choose an AI model'}</div>
          </div>
        </div>
        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute z-50 w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg max-h-80 overflow-y-auto">
          <div className="p-2">
            {models.map((model) => {
              const IconComponent = model.icon;
              return (
                <button
                  key={model.id}
                  onClick={() => handleModelSelect(model)}
                  className={`w-full flex items-center space-x-3 px-3 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 ${
                    selectedModel === model.id ? 'bg-blue-50 border border-blue-200' : ''
                  }`}
                >
                  {IconComponent && (
                    <IconComponent className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  )}
                  <div className="flex-1 text-left">
                    <div className="flex items-center justify-between">
                      <div className="font-medium text-gray-900">{model.name}</div>
                      <div className={`text-xs ${getStatusColor(model.status)}`}>
                        {getStatusText(model.status)}
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">{model.description}</div>
                    <div className="text-xs text-gray-400 mt-1">{model.type}</div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default AIModelSelector;
