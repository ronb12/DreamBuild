/**
 * DreamBuild LLM Service
 * Integrates browser-based LLM (TinyLlama/Phi-3) for improved code generation
 * 100% FREE - Runs entirely in user's browser
 * Product of Bradley Virtual Solutions, LLC
 */

// Dynamic import to reduce initial bundle size
let CreateWebWorkerMLCEngine = null
const getMLCEngine = async () => {
  if (!CreateWebWorkerMLCEngine) {
    const module = await import("@mlc-ai/web-llm")
    CreateWebWorkerMLCEngine = module.CreateWebWorkerMLCEngine
  }
  return CreateWebWorkerMLCEngine
}

class DreamBuildLLMService {
  constructor() {
    this.isInitialized = false;
    this.isLoading = false;
    this.engine = null;
    this.modelName = "TinyLlama-1.1B-Chat-v1.0-q4f16_1"; // 1.1B params, ~600MB
    this.loadProgress = 0;
    this.capabilities = {
      intentDetection: true,
      codeGeneration: true,
      featureExtraction: true,
      naturalLanguageUnderstanding: true
    };
    
    console.log('🧠 DreamBuild LLM Service created (not loaded yet)');
  }

  /**
   * Initialize the LLM in browser
   * Downloads model once (~600MB), then caches forever
   */
  async initialize(onProgress = null) {
    if (this.isInitialized) {
      console.log('✅ DreamBuild LLM already initialized');
      return true;
    }

    if (this.isLoading) {
      console.log('⏳ DreamBuild LLM already loading...');
      return false;
    }

    this.isLoading = true;
    console.log('🚀 Initializing DreamBuild LLM v1.0...');
    console.log('📥 First-time download: ~600MB (cached after this!)');

    try {
      // Get the MLCEngine dynamically
      const MLCEngine = await getMLCEngine()
      
      // Create engine with progress tracking
      this.engine = await MLCEngine(
        this.modelName,
        {
          initProgressCallback: (progress) => {
            this.loadProgress = progress.progress * 100;
            console.log(`📥 Loading DreamBuild LLM: ${this.loadProgress.toFixed(0)}%`);
            
            if (onProgress) {
              onProgress(this.loadProgress);
            }
          }
        }
      );

      this.isInitialized = true;
      this.isLoading = false;
      console.log('✅ DreamBuild LLM v1.0 initialized successfully!');
      console.log('🎯 Model:', this.modelName);
      console.log('💡 Capabilities: Intent detection, Code generation, NLU');
      
      return true;
    } catch (error) {
      console.error('❌ Failed to initialize DreamBuild LLM:', error);
      this.isLoading = false;
      this.isInitialized = false;
      return false;
    }
  }

  /**
   * Detect app type using LLM (much smarter than keyword matching!)
   */
  async detectIntent(prompt) {
    if (!this.isInitialized) {
      throw new Error('DreamBuild LLM not initialized');
    }

    console.log('🎯 Using DreamBuild LLM for intent detection...');

    try {
      const response = await this.engine.chat.completions.create({
        messages: [
          {
            role: "system",
            content: "You are an intent classifier for DreamBuild. Analyze the user's prompt and return ONLY a JSON object with: {\"appType\": \"todo|calculator|game|chat|weather|note|timer|web-app\", \"confidence\": 0-1, \"features\": [\"feature1\", \"feature2\"]}. Be precise."
          },
          {
            role: "user",
            content: prompt
          }
        ],
        temperature: 0.1, // Low temperature for consistent classification
        max_tokens: 150
      });

      const content = response.choices[0].message.content.trim();
      console.log('🤖 LLM Response:', content);

      // Parse JSON response
      const jsonMatch = content.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        const intent = JSON.parse(jsonMatch[0]);
        console.log('✅ Intent detected by LLM:', intent);
        return intent;
      }

      throw new Error('Could not parse LLM response');
    } catch (error) {
      console.error('❌ LLM intent detection failed:', error);
      throw error;
    }
  }

  /**
   * Generate code using LLM
   */
  async generateCode(prompt, context = {}) {
    if (!this.isInitialized) {
      throw new Error('DreamBuild LLM not initialized');
    }

    console.log('🤖 Generating code with DreamBuild LLM...');

    try {
      const systemPrompt = `You are DreamBuild LLM v1.0, an AI specialized in generating complete, functional web applications.

Generate clean, modern HTML, CSS, and JavaScript code based on the user's request.

REQUIREMENTS:
1. Return ONLY code (no explanations)
2. Include complete HTML structure with <!DOCTYPE html>
3. Include CSS for modern, beautiful styling (gradients, shadows, animations)
4. Include JavaScript with proper event listeners and functionality
5. Make all buttons work with event listeners
6. Use modern ES6+ JavaScript
7. Ensure code is production-ready

Format your response as:
<!-- HTML -->
[HTML code here]

/* CSS */
[CSS code here]

// JavaScript
[JavaScript code here]`;

      const response = await this.engine.chat.completions.create({
        messages: [
          {
            role: "system",
            content: systemPrompt
          },
          {
            role: "user",
            content: prompt
          }
        ],
        temperature: 0.7,
        max_tokens: 4000
      });

      const generatedCode = response.choices[0].message.content;
      console.log('✅ Code generated by DreamBuild LLM!');
      console.log('📊 Length:', generatedCode.length, 'characters');

      // Parse the generated code
      return this.parseGeneratedCode(generatedCode);
    } catch (error) {
      console.error('❌ DreamBuild LLM code generation failed:', error);
      throw error;
    }
  }

  /**
   * Parse LLM-generated code into DreamBuild file structure
   */
  parseGeneratedCode(content) {
    const files = {};

    // Extract HTML
    const htmlMatch = content.match(/<!--\s*HTML\s*-->([\s\S]*?)(?:\/\*|\/\/|$)/i);
    if (htmlMatch) {
      files['index.html'] = htmlMatch[1].trim();
    } else {
      // Try to find HTML structure
      const docMatch = content.match(/<!DOCTYPE html>[\s\S]*<\/html>/i);
      if (docMatch) {
        files['index.html'] = docMatch[0];
      }
    }

    // Extract CSS
    const cssMatch = content.match(/\/\*\s*CSS\s*\*\/([\s\S]*?)(?:\/\/|<!--)/i);
    if (cssMatch) {
      files['styles.css'] = cssMatch[1].trim();
    } else {
      // Try to find style tag content
      const styleMatch = content.match(/<style>([\s\S]*?)<\/style>/i);
      if (styleMatch) {
        files['styles.css'] = styleMatch[1].trim();
      }
    }

    // Extract JavaScript
    const jsMatch = content.match(/\/\/\s*JavaScript([\s\S]*?)$/i);
    if (jsMatch) {
      files['script.js'] = jsMatch[1].trim();
    } else {
      // Try to find script tag content
      const scriptMatch = content.match(/<script>([\s\S]*?)<\/script>/i);
      if (scriptMatch) {
        files['script.js'] = scriptMatch[1].trim();
      }
    }

    // If we couldn't parse properly, return the whole content as HTML
    if (Object.keys(files).length === 0) {
      console.warn('⚠️ Could not parse LLM output, returning as-is');
      files['index.html'] = content;
    }

    console.log('📦 Parsed files:', Object.keys(files));
    return {
      files,
      type: 'llm_generated',
      model: this.modelName,
      generatedBy: 'DreamBuild LLM v1.0'
    };
  }

  /**
   * Get service status
   */
  getStatus() {
    return {
      initialized: this.isInitialized,
      loading: this.isLoading,
      progress: this.loadProgress,
      model: this.modelName,
      capabilities: this.capabilities
    };
  }

  /**
   * Unload model to free memory
   */
  async unload() {
    if (this.engine) {
      // WebLLM doesn't have explicit unload yet
      this.engine = null;
      this.isInitialized = false;
      console.log('🗑️ DreamBuild LLM unloaded');
    }
  }
}

// Export singleton instance
const dreamBuildLLMService = new DreamBuildLLMService();
export default dreamBuildLLMService;

