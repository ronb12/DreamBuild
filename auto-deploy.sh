#!/bin/bash

# Auto Deploy Script for DreamBuild
# This script automatically commits changes and deploys to GitHub and Firebase

set -e  # Exit on any error

echo "🚀 Starting Auto Deploy Process..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    print_error "Not in a git repository. Please run this script from the project root."
    exit 1
fi

# Check if there are any changes to commit
if [ -z "$(git status --porcelain)" ]; then
    print_warning "No changes to commit. Nothing to deploy."
    exit 0
fi

print_status "Changes detected. Starting deployment process..."

# Get current timestamp
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')

# Add all changes
print_status "Adding all changes to git..."
git add .

# Create commit with timestamp
print_status "Creating commit with timestamp: $TIMESTAMP"
git commit -m "auto-deploy: Automatic deployment at $TIMESTAMP

- Auto-committed changes from development
- Deploying to GitHub main and Firebase hosting
- Timestamp: $TIMESTAMP"

# Push to GitHub main
print_status "Pushing to GitHub main branch..."
if git push origin main; then
    print_success "Successfully pushed to GitHub main"
else
    print_error "Failed to push to GitHub main"
    exit 1
fi

# Build the project
print_status "Building project for production..."
if npm run build; then
    print_success "Build completed successfully"
else
    print_error "Build failed"
    exit 1
fi

# Deploy to Firebase hosting
print_status "Deploying to Firebase hosting..."
if firebase deploy --only hosting; then
    print_success "Successfully deployed to Firebase hosting"
else
    print_error "Firebase deployment failed"
    exit 1
fi

# Get Firebase hosting URL
HOSTING_URL=$(firebase hosting:channel:list --format=json | jq -r '.channels[] | select(.channelId=="live") | .url')

print_success "🎉 Auto Deploy Complete!"
print_success "📊 GitHub: Updated main branch"
print_success "🔥 Firebase: https://dreambuild-2024-app.web.app"
print_success "⏰ Deployed at: $TIMESTAMP"

echo ""
echo "=========================================="
echo "🚀 DreamBuild Auto Deploy Summary"
echo "=========================================="
echo "✅ GitHub Main: Updated"
echo "✅ Firebase Hosting: Deployed"
echo "🌐 Live URL: https://dreambuild-2024-app.web.app"
echo "⏰ Timestamp: $TIMESTAMP"
echo "=========================================="
