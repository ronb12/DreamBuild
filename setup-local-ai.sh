#!/bin/bash

# DreamBuild Local AI Setup Script
# This script sets up a completely local AI development environment
# No API keys required - everything runs on your machine

echo "🚀 DreamBuild Local AI Setup"
echo "=============================="

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed. Please install Docker first."
    echo "Visit: https://docs.docker.com/get-docker/"
    exit 1
fi

# Check if Ollama is installed
if ! command -v ollama &> /dev/null; then
    echo "📦 Installing Ollama..."
    
    # Install Ollama based on OS
    if [[ "$OSTYPE" == "darwin"* ]]; then
        # macOS
        curl -fsSL https://ollama.ai/install.sh | sh
    elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
        # Linux
        curl -fsSL https://ollama.ai/install.sh | sh
    else
        echo "❌ Unsupported OS. Please install Ollama manually from https://ollama.ai"
        exit 1
    fi
else
    echo "✅ Ollama is already installed"
fi

# Start Ollama service
echo "🔄 Starting Ollama service..."
ollama serve &

# Wait for Ollama to start
sleep 5

echo "📥 Downloading AI models..."
echo "This may take a while depending on your internet connection..."

# Download the best coding models
models=(
    "codellama:7b"           # Meta's CodeLlama 7B - Fast and efficient
    "codellama:13b"          # Meta's CodeLlama 13B - Better quality
    "codellama:34b"          # Meta's CodeLlama 34B - Best quality (if you have enough RAM)
    "starcoder:15b"          # BigCode StarCoder - Excellent for code completion
    "deepseek-coder:6.7b"    # DeepSeek Coder - High performance
    "wizardcoder:7b"         # WizardCoder - Great for instruction following
    "phi3:mini"             # Microsoft Phi-3 - Lightweight but powerful
    "llama3:8b"             # Meta Llama 3 - General purpose
)

# Download models in parallel
for model in "${models[@]}"; do
    echo "📥 Downloading $model..."
    ollama pull $model &
done

# Wait for all downloads to complete
wait

echo "✅ All models downloaded successfully!"
echo ""
echo "🎉 Local AI Setup Complete!"
echo "=============================="
echo ""
echo "Available Models:"
ollama list
echo ""
echo "🚀 Starting DreamBuild with Local AI..."
echo "Your AI models are now ready to use!"

# Create a simple test
echo ""
echo "🧪 Testing AI models..."
echo "Testing CodeLlama 7B:"
ollama run codellama:7b "Write a simple Python function to calculate fibonacci numbers" --verbose

echo ""
echo "✅ Setup complete! DreamBuild is now running with 100% local AI."
echo "No API keys required - everything runs on your machine!"
