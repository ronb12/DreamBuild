// src/services/appNamingService.js

class AppNamingService {
  generateAppName(prompt, context = {}) {
    // Extract meaningful name from prompt
    if (typeof prompt === 'object' && prompt.prompt) {
      prompt = prompt.prompt;
    }
    
    if (!prompt || typeof prompt !== 'string') {
      return 'DreamBuildApp';
    }

    // Clean the prompt and extract key words
    const cleanPrompt = prompt.toLowerCase()
      .replace(/[^a-z0-9\s]/g, ' ')
      .trim();

    const words = cleanPrompt.split(/\s+/).filter(word => word.length > 2);
    
    if (words.length === 0) {
      return 'DreamBuildApp';
    }

    // Take first few meaningful words and capitalize
    const nameWords = words.slice(0, 2).map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    );

    // Add "App" suffix if not already present
    let appName = nameWords.join('');
    if (!appName.toLowerCase().includes('app')) {
      appName += 'App';
    }

    return appName;
  }

  generateVariableName(prompt) {
    const appName = this.generateAppName(prompt);
    // Convert to camelCase variable name
    return appName.charAt(0).toLowerCase() + appName.slice(1);
  }

  generateClassName(prompt) {
    // Return PascalCase class name
    return this.generateAppName(prompt);
  }

  generateFileName(prompt, extension = 'js') {
    const appName = this.generateAppName(prompt);
    // Convert to kebab-case file name
    return appName
      .replace(/([A-Z])/g, '-$1')
      .toLowerCase()
      .replace(/^-/, '') + '.' + extension;
  }
}

export default new AppNamingService();