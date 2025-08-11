# AI Builder Setup Guide

## Overview
The AI Builder is now capable of generating complete, working applications and websites using real AI services, just like Cursor and Lovable. It can create production-ready code for any programming language, framework, and platform.

## Features
- **Real AI Integration**: Connects to OpenAI GPT-4, GitHub Copilot, and other AI services
- **Complete Project Generation**: Creates full project structures with all necessary files
- **Multiple Languages**: JavaScript, TypeScript, Python, Dart, Swift, Kotlin, Go, Rust
- **Multiple Frameworks**: React, Vue, Angular, Flask, Django, Flutter, and more
- **Multiple Platforms**: Web, Mobile, Desktop, API/Backend
- **Production Ready**: Generates working, runnable applications

## Setup Instructions

### 1. Environment Configuration
Create a `.env` file in your project root with your AI service API keys:

```bash
# OpenAI API Key (for GPT-4 code generation)
REACT_APP_OPENAI_API_KEY=your_openai_api_key_here

# GitHub Copilot API Key (alternative AI service)
REACT_APP_GITHUB_COPILOT_KEY=your_github_copilot_key_here
```

### 2. Get API Keys

#### OpenAI API Key
1. Go to [OpenAI Platform](https://platform.openai.com/api-keys)
2. Sign up or log in
3. Create a new API key
4. Copy the key to your `.env` file

#### GitHub Copilot API Key
1. Go to [GitHub Settings](https://github.com/settings/tokens)
2. Generate a new token with appropriate permissions
3. Copy the token to your `.env` file

### 3. Install Dependencies
```bash
npm install
```

## How It Works

### AI Service Priority
1. **OpenAI GPT-4**: Primary AI service for code generation
2. **GitHub Copilot**: Alternative AI service
3. **Enhanced Templates**: Fallback with sophisticated code patterns

### Code Generation Process
1. User describes what they want to build
2. AI analyzes requirements and generates complete project structure
3. AI creates all necessary source code files
4. AI generates configuration files (package.json, requirements.txt, etc.)
5. AI creates documentation and setup instructions
6. User can download complete project as ZIP file

### Generated Project Structure
- **Source Code**: Main application files
- **Configuration**: Dependencies and build settings
- **Documentation**: README with setup instructions
- **Project Structure**: Organized folder hierarchy
- **Additional Files**: CSS, HTML, configuration files

## Example Usage

### Web Application
```
Prompt: "Create a React e-commerce website with shopping cart and payment integration"
Result: Complete React app with components, routing, state management, and styling
```

### Mobile Application
```
Prompt: "Build a Flutter mobile app for task management with local storage"
Result: Complete Flutter app with screens, widgets, models, and services
```

### API/Backend
```
Prompt: "Develop a Python Flask API for user authentication and CRUD operations"
Result: Complete Flask API with models, routes, authentication, and database setup
```

## Features

### Preview System
- Real-time project preview as you type
- Live project structure visualization
- Build progress tracking
- Deployment status monitoring

### Download Options
- Individual file downloads
- Complete project ZIP download
- Organized project structure
- Ready-to-run applications

### AI Capabilities
- Natural language understanding
- Context-aware code generation
- Framework-specific optimizations
- Production-ready code quality

## Troubleshooting

### No AI Service Available
If no AI service is configured, the builder will use enhanced template generation, which still provides:
- Sophisticated project structures
- Production-ready code templates
- Multiple language/framework support
- Complete project files

### API Key Issues
- Ensure your API key is valid and has sufficient credits
- Check that the key is properly set in your `.env` file
- Verify the key has the necessary permissions

### Build Issues
- Ensure all dependencies are installed
- Check that the generated code is valid for your target environment
- Verify framework-specific requirements are met

## Advanced Configuration

### Custom AI Services
You can extend the AI Builder to support additional services by:
1. Adding new API integration functions
2. Updating the `generateCodeWithAI` function
3. Adding environment variables for new services

### Template Customization
The enhanced template system can be customized by:
1. Modifying template generation functions
2. Adding new language/framework combinations
3. Customizing project structures and file generation

## Support
For issues or questions about the AI Builder:
1. Check the console for error messages
2. Verify your API key configuration
3. Ensure all dependencies are properly installed
4. Check the generated code for syntax errors

The AI Builder is designed to be as powerful as Cursor and Lovable, generating complete, working applications from natural language descriptions.
