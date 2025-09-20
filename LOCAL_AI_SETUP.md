# 🚀 DreamBuild Local AI Setup Guide

## Overview

DreamBuild now supports **100% local AI** - no API keys required! All AI models run on your machine using open source technologies.

## 🤖 Available AI Models

### CodeLlama Models (Meta)
- **CodeLlama 7B** - Fast and efficient (8GB RAM)
- **CodeLlama 13B** - Higher quality (16GB RAM) 
- **CodeLlama 34B** - Best quality (32GB RAM)

### StarCoder (BigCode)
- **StarCoder 15B** - Excellent code completion (24GB RAM)

### DeepSeek Coder
- **DeepSeek Coder 6.7B** - High performance (12GB RAM)

### WizardCoder
- **WizardCoder 7B** - Instruction following (10GB RAM)

### Phi-3 (Microsoft)
- **Phi-3 Mini** - Lightweight fallback (6GB RAM)

### Llama 3 (Meta)
- **Llama 3 8B** - General purpose (10GB RAM)

## 🛠️ Quick Setup

### Option 1: Automated Setup (Recommended)

```bash
# Make the setup script executable
chmod +x setup-local-ai.sh

# Run the automated setup
./setup-local-ai.sh
```

### Option 2: Manual Setup

#### 1. Install Ollama

**macOS:**
```bash
curl -fsSL https://ollama.ai/install.sh | sh
```

**Linux:**
```bash
curl -fsSL https://ollama.ai/install.sh | sh
```

**Windows:**
Download from [ollama.ai](https://ollama.ai/download)

#### 2. Start Ollama Service

```bash
ollama serve
```

#### 3. Download AI Models

```bash
# Essential models (choose based on your RAM)
ollama pull codellama:7b        # 8GB RAM
ollama pull codellama:13b       # 16GB RAM
ollama pull starcoder:15b       # 24GB RAM
ollama pull deepseek-coder:6.7b # 12GB RAM
ollama pull wizardcoder:7b      # 10GB RAM
ollama pull phi3:mini           # 6GB RAM (lightweight)
ollama pull llama3:8b           # 10GB RAM
```

#### 4. Test Installation

```bash
# Test CodeLlama 7B
ollama run codellama:7b "Write a Python function to calculate fibonacci numbers"

# Test StarCoder
ollama run starcoder:15b "Complete this JavaScript function: function factorial(n) {"
```

## 💻 System Requirements

### Minimum Requirements
- **RAM**: 8GB (for CodeLlama 7B)
- **Storage**: 20GB free space
- **CPU**: Modern multi-core processor
- **OS**: macOS, Linux, or Windows

### Recommended Requirements
- **RAM**: 16GB+ (for better models)
- **Storage**: 50GB+ free space
- **GPU**: NVIDIA GPU with CUDA support (optional, for faster inference)

## 🎯 Model Selection Guide

### For Development (8GB RAM)
```bash
ollama pull codellama:7b
ollama pull phi3:mini
```

### For Better Quality (16GB RAM)
```bash
ollama pull codellama:13b
ollama pull deepseek-coder:6.7b
ollama pull wizardcoder:7b
```

### For Best Quality (24GB+ RAM)
```bash
ollama pull codellama:34b
ollama pull starcoder:15b
ollama pull llama3:8b
```

## 🔧 Configuration

### DreamBuild will automatically:
1. **Detect available models** based on your system
2. **Select the best model** for each task
3. **Fall back gracefully** if models aren't available
4. **Use templates** as final fallback

### Manual Configuration (Optional)

Edit `src/services/localAIService.js` to customize:
- Model selection logic
- Response parsing
- Fallback behavior
- Template generation

## 🚀 Usage

1. **Start DreamBuild**: `npm run dev`
2. **Go to AI Builder**: Navigate to the AI Builder page
3. **Generate Code**: Type your prompt and click "Generate Code"
4. **Browse Templates**: Click the Code icon (📄) to browse 1000+ templates

## 🔍 Troubleshooting

### Model Not Loading
```bash
# Check if Ollama is running
ollama list

# Restart Ollama service
ollama serve
```

### Out of Memory
```bash
# Use smaller models
ollama pull phi3:mini        # 6GB RAM
ollama pull codellama:7b     # 8GB RAM
```

### Slow Performance
```bash
# Check available models
ollama list

# Use GPU acceleration (if available)
export OLLAMA_GPU=1
ollama serve
```

### Network Issues
```bash
# Test model connectivity
curl http://localhost:11434/api/tags
```

## 📊 Performance Tips

### 1. Choose the Right Model
- **CodeLlama 7B**: Fast, good for simple tasks
- **CodeLlama 13B**: Balanced speed and quality
- **StarCoder 15B**: Best for code completion
- **WizardCoder 7B**: Best for complex instructions

### 2. Optimize Your System
```bash
# Close unnecessary applications
# Ensure adequate RAM
# Use SSD storage
# Consider GPU acceleration
```

### 3. Batch Operations
- Generate multiple files at once
- Use template browser for quick starts
- Save frequently used prompts

## 🌟 Benefits of Local AI

### ✅ Advantages
- **No API Keys**: Completely free to use
- **Privacy**: Your code never leaves your machine
- **Speed**: No network latency
- **Reliability**: No service outages
- **Customization**: Full control over models
- **Offline**: Works without internet

### 📈 Performance
- **Response Time**: 2-10 seconds (depending on model)
- **Quality**: Comparable to commercial APIs
- **Languages**: Supports 170+ programming languages
- **Templates**: 1000+ pre-built templates

## 🔄 Updates

### Update Models
```bash
# Pull latest versions
ollama pull codellama:7b
ollama pull starcoder:15b
```

### Update Ollama
```bash
# Reinstall Ollama
curl -fsSL https://ollama.ai/install.sh | sh
```

## 📞 Support

### Common Issues
1. **Models not loading**: Check RAM and restart Ollama
2. **Slow performance**: Use smaller models or add GPU
3. **Memory errors**: Close other applications
4. **Connection refused**: Ensure Ollama is running

### Getting Help
- Check Ollama logs: `ollama logs`
- Test individual models: `ollama run [model-name]`
- Verify DreamBuild connection: Check browser console

## 🎉 Success!

Once set up, DreamBuild will use your local AI models for:
- ✅ Code generation
- ✅ Template creation  
- ✅ Code completion
- ✅ Documentation
- ✅ Bug fixes
- ✅ Feature implementation

**No API keys, no external dependencies, just pure local AI power!** 🚀
