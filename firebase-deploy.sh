#!/bin/bash

# Firebase Deployment Script for DreamBuild
# Deploys Firestore rules, indexes, and hosting

echo "🚀 Starting Firebase deployment for DreamBuild..."

# Check if Firebase CLI is installed
if ! command -v firebase &> /dev/null; then
    echo "❌ Firebase CLI not found. Please install it first:"
    echo "npm install -g firebase-tools"
    exit 1
fi

# Check if user is logged in
if ! firebase projects:list &> /dev/null; then
    echo "❌ Not logged in to Firebase. Please login first:"
    echo "firebase login"
    exit 1
fi

# Build the project
echo "📦 Building project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please fix errors and try again."
    exit 1
fi

# Deploy Firestore rules
echo "📋 Deploying Firestore rules..."
firebase deploy --only firestore:rules

if [ $? -ne 0 ]; then
    echo "❌ Firestore rules deployment failed."
    exit 1
fi

# Deploy Firestore indexes
echo "📊 Deploying Firestore indexes..."
firebase deploy --only firestore:indexes

if [ $? -ne 0 ]; then
    echo "❌ Firestore indexes deployment failed."
    exit 1
fi

# Deploy Storage rules
echo "💾 Deploying Storage rules..."
firebase deploy --only storage

if [ $? -ne 0 ]; then
    echo "❌ Storage rules deployment failed."
    exit 1
fi

# Deploy hosting
echo "🌐 Deploying hosting..."
firebase deploy --only hosting

if [ $? -ne 0 ]; then
    echo "❌ Hosting deployment failed."
    exit 1
fi

# Run setup script to create initial data
echo "🔧 Setting up initial data..."
node firebase-setup.js

if [ $? -ne 0 ]; then
    echo "❌ Initial data setup failed."
    exit 1
fi

echo "✅ Firebase deployment completed successfully!"
echo "🌐 Your app is now live at: https://your-project.web.app"
echo "📊 Firestore rules and indexes are deployed"
echo "💾 Storage rules are deployed"
echo "🔧 Initial data has been created"

# Display deployment summary
echo ""
echo "📋 Deployment Summary:"
echo "  - Firestore rules: ✅ Deployed"
echo "  - Firestore indexes: ✅ Deployed"
echo "  - Storage rules: ✅ Deployed"
echo "  - Hosting: ✅ Deployed"
echo "  - Initial data: ✅ Created"
echo ""
echo "🎉 DreamBuild is ready to use!"
