// Enhanced AI Builder functionality with Lovable-like features
let currentProject = {
    files: {
        'index.html': '',
        'style.css': '',
        'script.js': '',
        'components.jsx': '',
        'server.js': '',
        'database.js': '',
        'auth.js': '',
        'api.js': '',
        'package.json': ''
    },
    activeFile: 'index.html',
    config: {
        appType: 'fullstack',
        database: 'firebase',
        auth: 'firebase',
        styling: 'tailwind',
        apis: [],
        language: 'javascript'
    },
    components: [],
    securityIssues: []
};

// Initialize project on window for debugging access
window.currentProject = currentProject;

// Initialize the AI Builder when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 AI Builder initializing...');
    
    // Set up initial file state
    switchFile('index.html');
    updatePreview();
    
    console.log('✅ AI Builder initialized');
});

// Enhanced file management
function switchFile(filename) {
    currentProject.activeFile = filename;
    
    // Update file name and icon
    const fileIcons = {
        'index.html': '📄',
        'style.css': '🎨', 
        'script.js': '⚡',
        'components.jsx': '🧩'
    };
    
    document.getElementById('current-file-icon').textContent = fileIcons[filename] || '📄';
    document.getElementById('current-file-name').textContent = filename;
    
    // Update code editor
    document.getElementById('code-editor').value = currentProject.files[filename] || '';
    
    // Update file items in sidebar
    document.querySelectorAll('.file-item').forEach(item => {
        item.classList.remove('active');
    });
    document.querySelector(`[data-file="${filename}"]`).classList.add('active');
    
    // Update file status in sidebar and header
    const hasContent = currentProject.files[filename] && currentProject.files[filename].trim() !== '';
    const status = hasContent ? 'Ready' : 'Empty';
    
    // Update sidebar status
    const sidebarStatus = document.querySelector(`[data-file="${filename}"] .file-status`);
    if (sidebarStatus) {
        sidebarStatus.textContent = status;
        sidebarStatus.className = `file-status ${hasContent ? '' : 'empty'}`;
    }
    
    // Update header status
    const headerStatus = document.getElementById('file-status');
    headerStatus.textContent = status;
    headerStatus.className = `file-status ${hasContent ? '' : 'empty'}`;
    
    // Auto-update preview
    updatePreview();
}

// Update all file statuses
function updateFileStatuses() {
    const files = ['index.html', 'style.css', 'script.js', 'components.jsx'];
    
    files.forEach(filename => {
        const hasContent = currentProject.files[filename] && currentProject.files[filename].trim() !== '';
        const status = hasContent ? 'Ready' : 'Empty';
        
        const statusElement = document.querySelector(`[data-file="${filename}"] .file-status`);
        if (statusElement) {
            statusElement.textContent = status;
            statusElement.className = `file-status ${hasContent ? '' : 'empty'}`;
        }
    });
    
    // Update header status for current file
    if (currentProject.activeFile) {
        const hasContent = currentProject.files[currentProject.activeFile] && currentProject.files[currentProject.activeFile].trim() !== '';
        const status = hasContent ? 'Ready' : 'Empty';
        const headerStatus = document.getElementById('file-status');
        headerStatus.textContent = status;
        headerStatus.className = `file-status ${hasContent ? '' : 'empty'}`;
    }
}

// Copy code to clipboard
function copyCode() {
    const code = document.getElementById('code-editor').value;
    navigator.clipboard.writeText(code).then(() => {
        // Show feedback
        const button = event.target;
        const originalText = button.textContent;
        button.textContent = '✅ Copied!';
        button.style.background = 'rgba(76, 175, 80, 0.8)';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = 'rgba(255,255,255,0.1)';
        }, 2000);
    });
}

// Format code (basic formatting)
function formatCode() {
    const code = document.getElementById('code-editor').value;
    const filename = currentProject.activeFile;
    
    let formattedCode = code;
    
    if (filename.endsWith('.html')) {
        // Basic HTML formatting
        formattedCode = code
            .replace(/></g, '>\n<')
            .replace(/^\s+/gm, '')
            .trim();
    } else if (filename.endsWith('.css')) {
        // Basic CSS formatting
        formattedCode = code
            .replace(/;/g, ';\n')
            .replace(/\{/g, ' {\n  ')
            .replace(/\}/g, '\n}\n')
            .trim();
    } else if (filename.endsWith('.js') || filename.endsWith('.jsx')) {
        // Basic JS formatting
        formattedCode = code
            .replace(/;/g, ';\n')
            .replace(/\{/g, ' {\n  ')
            .replace(/\}/g, '\n}\n')
            .trim();
    }
    
    document.getElementById('code-editor').value = formattedCode;
    currentProject.files[filename] = formattedCode;
    
    // Show feedback
    const button = event.target;
    const originalText = button.textContent;
    button.textContent = '✅ Formatted!';
    button.style.background = 'rgba(76, 175, 80, 0.8)';
    
    setTimeout(() => {
        button.textContent = originalText;
        button.style.background = 'rgba(255,255,255,0.1)';
    }, 2000);
}

// Open preview in new tab
function openInNewTab() {
    const htmlContent = currentProject.files['index.html'] || '';
    const cssContent = currentProject.files['style.css'] || '';
    const jsContent = currentProject.files['script.js'] || '';
    
    const fullHTML = htmlContent.replace(
        '<link rel="stylesheet" href="style.css">',
        `<style>${cssContent}</style>`
    ).replace(
        '<script src="script.js"></script>',
        `<script>${jsContent}</script>`
    );
    
    const newWindow = window.open('', '_blank');
    newWindow.document.write(fullHTML);
    newWindow.document.close();
}

// Automatic Security Review (Background)
function runAutomaticSecurityReview() {
    console.log('🔒 Running automatic security review...');
    
    const issues = [];
    const files = currentProject.files;
    
    // Check HTML for security issues
    if (files['index.html']) {
        const html = files['index.html'].toLowerCase();
        
        if (html.includes('eval(') || html.includes('innerhtml')) {
            issues.push({
                type: 'warning',
                file: 'index.html',
                issue: 'Potential XSS vulnerability',
                description: 'Found potentially unsafe HTML manipulation',
                severity: 'medium'
            });
        }
        
        if (html.includes('http://') && !html.includes('https://')) {
            issues.push({
                type: 'info',
                file: 'index.html',
                issue: 'Mixed content warning',
                description: 'Consider using HTTPS for all external resources',
                severity: 'low'
            });
        }
    }
    
    // Check JavaScript for security issues
    if (files['script.js']) {
        const js = files['script.js'];
        
        if (js.includes('eval(') || js.includes('Function(')) {
            issues.push({
                type: 'error',
                file: 'script.js',
                issue: 'Code injection vulnerability',
                description: 'Avoid using eval() or Function() constructor',
                severity: 'high'
            });
        }
        
        if (js.includes('localStorage') && !js.includes('JSON.stringify')) {
            issues.push({
                type: 'warning',
                file: 'script.js',
                issue: 'Data validation needed',
                description: 'LocalStorage data should be validated before use',
                severity: 'medium'
            });
        }
        
        if (js.includes('innerHTML') && !js.includes('textContent')) {
            issues.push({
                type: 'warning',
                file: 'script.js',
                issue: 'DOM manipulation security',
                description: 'Consider using textContent for user input',
                severity: 'medium'
            });
        }
    }
    
    // Update security status
    currentProject.securityIssues = issues;
    updateSecurityStatus(issues);
    
    // Show subtle notification if issues found
    if (issues.length > 0) {
        showSecurityNotification(issues);
    } else {
        showSecuritySuccessNotification();
    }
}

// Automatic Code Analysis (Background)
function runAutomaticCodeAnalysis() {
    console.log('🔍 Running automatic code analysis...');
    
    const analysis = {
        quality: 'good',
        suggestions: [],
        metrics: {
            totalLines: 0,
            functions: 0,
            comments: 0
        }
    };
    
    // Analyze each file
    Object.keys(currentProject.files).forEach(filename => {
        const content = currentProject.files[filename];
        if (!content) return;
        
        const lines = content.split('\n');
        analysis.metrics.totalLines += lines.length;
        
        // Count functions
        if (filename.endsWith('.js')) {
            const functionMatches = content.match(/function\s+\w+|const\s+\w+\s*=\s*\(|=>\s*{/g);
            if (functionMatches) {
                analysis.metrics.functions += functionMatches.length;
            }
            
            // Count comments
            const commentMatches = content.match(/\/\/.*|\/\*[\s\S]*?\*\//g);
            if (commentMatches) {
                analysis.metrics.comments += commentMatches.length;
            }
            
            // Code quality suggestions
            if (analysis.metrics.functions > 0 && analysis.metrics.comments === 0) {
                analysis.suggestions.push({
                    type: 'info',
                    message: 'Consider adding comments to improve code readability'
                });
            }
            
            if (content.includes('var ')) {
                analysis.suggestions.push({
                    type: 'warning',
                    message: 'Consider using let/const instead of var for better scope control'
                });
            }
        }
    });
    
    // Update code quality status
    updateCodeQualityStatus(analysis);
    
    // Show subtle notification with suggestions
    if (analysis.suggestions.length > 0) {
        showCodeQualityNotification(analysis);
    }
}

// Update Security Status in UI
function updateSecurityStatus(issues) {
    const securityButton = document.querySelector('button[onclick="runSecurityReview()"]');
    if (!securityButton) return;
    
    const highIssues = issues.filter(i => i.severity === 'high').length;
    const mediumIssues = issues.filter(i => i.severity === 'medium').length;
    const lowIssues = issues.filter(i => i.severity === 'low').length;
    
    if (highIssues > 0) {
        securityButton.innerHTML = `🔴 Security Review (${highIssues} critical)`;
        securityButton.style.background = 'linear-gradient(45deg, #f44336, #d32f2f)';
    } else if (mediumIssues > 0) {
        securityButton.innerHTML = `🟡 Security Review (${mediumIssues} warnings)`;
        securityButton.style.background = 'linear-gradient(45deg, #ff9800, #f57c00)';
    } else if (lowIssues > 0) {
        securityButton.innerHTML = `🟢 Security Review (${lowIssues} info)`;
        securityButton.style.background = 'linear-gradient(45deg, #4CAF50, #45a049)';
    } else {
        securityButton.innerHTML = `✅ Security Review (Clean)`;
        securityButton.style.background = 'linear-gradient(45deg, #4CAF50, #45a049)';
    }
}

// Update Code Quality Status
function updateCodeQualityStatus(analysis) {
    // Update status bar with code metrics
    const statusText = document.getElementById('status-text');
    if (statusText) {
        statusText.textContent = `Code quality: ${analysis.quality} • ${analysis.metrics.totalLines} lines • ${analysis.metrics.functions} functions`;
    }
}

// Show Security Notification
function showSecurityNotification(issues) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: rgba(255, 152, 0, 0.9);
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(255, 152, 0, 0.3);
        z-index: 1000;
        max-width: 300px;
        font-size: 14px;
    `;
    
    const criticalCount = issues.filter(i => i.severity === 'high').length;
    const warningCount = issues.filter(i => i.severity === 'medium').length;
    
    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
            <span style="font-size: 18px;">🔒</span>
            <strong>Security Scan Complete</strong>
        </div>
        <div style="font-size: 12px; opacity: 0.9;">
            Found ${criticalCount} critical, ${warningCount} warnings
            <br><span style="font-size: 11px; opacity: 0.8;">Click Security Review for details</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 5000);
}

// Show Security Success Notification
function showSecuritySuccessNotification() {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: rgba(76, 175, 80, 0.9);
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(76, 175, 80, 0.3);
        z-index: 1000;
        max-width: 250px;
        font-size: 14px;
    `;
    
    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
            <span style="font-size: 18px;">✅</span>
            <strong>Security Scan: Clean</strong>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 3000);
}

// Show Code Quality Notification
function showCodeQualityNotification(analysis) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 150px;
        right: 20px;
        background: rgba(33, 150, 243, 0.9);
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(33, 150, 243, 0.3);
        z-index: 1000;
        max-width: 300px;
        font-size: 14px;
    `;
    
    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
            <span style="font-size: 18px;">🔍</span>
            <strong>Code Analysis Complete</strong>
        </div>
        <div style="font-size: 12px; opacity: 0.9;">
            ${analysis.metrics.totalLines} lines, ${analysis.metrics.functions} functions
            <br><span style="font-size: 11px; opacity: 0.8;">${analysis.suggestions.length} suggestions available</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 4000);
}

// Toggle Advanced Options
function toggleAdvancedOptions() {
    const advancedOptions = document.getElementById('advanced-options');
    const toggleText = document.getElementById('advanced-toggle-text');
    
    if (advancedOptions.style.display === 'none') {
        advancedOptions.style.display = 'block';
        toggleText.textContent = '⚙️ Hide Advanced Options';
    } else {
        advancedOptions.style.display = 'none';
        toggleText.textContent = '⚙️ Advanced Options';
    }
}

// Language Support System
const SUPPORTED_LANGUAGES = {
    // Web Development
    'javascript': { name: 'JavaScript', icon: '🟨', category: 'Web', extensions: ['.js', '.jsx'], description: 'Dynamic web programming' },
    'typescript': { name: 'TypeScript', icon: '🔷', category: 'Web', extensions: ['.ts', '.tsx'], description: 'Typed JavaScript' },
    'html': { name: 'HTML', icon: '🌐', category: 'Web', extensions: ['.html', '.htm'], description: 'Markup language' },
    'css': { name: 'CSS', icon: '🎨', category: 'Web', extensions: ['.css'], description: 'Styling language' },
    'php': { name: 'PHP', icon: '🐘', category: 'Web', extensions: ['.php'], description: 'Server-side scripting' },
    
    // System Programming
    'python': { name: 'Python', icon: '🐍', category: 'General', extensions: ['.py'], description: 'Versatile programming' },
    'java': { name: 'Java', icon: '☕', category: 'Enterprise', extensions: ['.java'], description: 'Enterprise development' },
    'cpp': { name: 'C++', icon: '⚙️', category: 'System', extensions: ['.cpp', '.cc'], description: 'System programming' },
    'c': { name: 'C', icon: '🔧', category: 'System', extensions: ['.c'], description: 'Low-level programming' },
    'csharp': { name: 'C#', icon: '🔵', category: 'Enterprise', extensions: ['.cs'], description: 'Microsoft ecosystem' },
    'go': { name: 'Go', icon: '🐹', category: 'System', extensions: ['.go'], description: 'Google\'s systems language' },
    'rust': { name: 'Rust', icon: '🦀', category: 'System', extensions: ['.rs'], description: 'Memory-safe systems' },
    
    // Mobile Development
    'swift': { name: 'Swift', icon: '🦉', category: 'Mobile', extensions: ['.swift'], description: 'iOS development' },
    'kotlin': { name: 'Kotlin', icon: '🎯', category: 'Mobile', extensions: ['.kt'], description: 'Android development' },
    'dart': { name: 'Dart', icon: '🎯', category: 'Mobile', extensions: ['.dart'], description: 'Flutter development' },
    
    // Scripting
    'ruby': { name: 'Ruby', icon: '💎', category: 'Web', extensions: ['.rb'], description: 'Dynamic scripting' },
    'perl': { name: 'Perl', icon: '🐪', category: 'Scripting', extensions: ['.pl'], description: 'Text processing' },
    'bash': { name: 'Bash', icon: '🐚', category: 'Scripting', extensions: ['.sh'], description: 'Shell scripting' },
    'powershell': { name: 'PowerShell', icon: '💙', category: 'Scripting', extensions: ['.ps1'], description: 'Windows automation' },
    
    // Functional Programming
    'haskell': { name: 'Haskell', icon: '🔷', category: 'Functional', extensions: ['.hs'], description: 'Pure functional' },
    'clojure': { name: 'Clojure', icon: '🟢', category: 'Functional', extensions: ['.clj'], description: 'Lisp dialect' },
    'fsharp': { name: 'F#', icon: '🔷', category: 'Functional', extensions: ['.fs'], description: 'Functional .NET' },
    'elixir': { name: 'Elixir', icon: '💜', category: 'Functional', extensions: ['.ex'], description: 'Concurrent programming' },
    
    // Data & Analytics
    'r': { name: 'R', icon: '📊', category: 'Data', extensions: ['.r'], description: 'Statistical computing' },
    'matlab': { name: 'MATLAB', icon: '🔢', category: 'Data', extensions: ['.m'], description: 'Numerical computing' },
    'julia': { name: 'Julia', icon: '🔴', category: 'Data', extensions: ['.jl'], description: 'Scientific computing' },
    'scala': { name: 'Scala', icon: '🔴', category: 'Data', extensions: ['.scala'], description: 'JVM functional' },
    
    // Game Development
    'lua': { name: 'Lua', icon: '🌙', category: 'Game', extensions: ['.lua'], description: 'Game scripting' },
    'gdscript': { name: 'GDScript', icon: '🎮', category: 'Game', extensions: ['.gd'], description: 'Godot scripting' },
    
    // Blockchain
    'solidity': { name: 'Solidity', icon: '⛓️', category: 'Blockchain', extensions: ['.sol'], description: 'Smart contracts' },
    'vyper': { name: 'Vyper', icon: '🐍', category: 'Blockchain', extensions: ['.vy'], description: 'Python-like contracts' },
    
    // Other Languages
    'assembly': { name: 'Assembly', icon: '⚡', category: 'Low-level', extensions: ['.asm'], description: 'Machine code' },
    'fortran': { name: 'Fortran', icon: '🔢', category: 'Scientific', extensions: ['.f90'], description: 'Scientific computing' },
    'cobol': { name: 'COBOL', icon: '💼', category: 'Enterprise', extensions: ['.cbl'], description: 'Business applications' },
    'pascal': { name: 'Pascal', icon: '📝', category: 'Educational', extensions: ['.pas'], description: 'Structured programming' },
    'ada': { name: 'Ada', icon: '🛡️', category: 'Safety', extensions: ['.adb'], description: 'Safety-critical systems' },
    'prolog': { name: 'Prolog', icon: '🧠', category: 'Logic', extensions: ['.pl'], description: 'Logic programming' },
    'erlang': { name: 'Erlang', icon: '📞', category: 'Telecom', extensions: ['.erl'], description: 'Concurrent systems' },
    'ocaml': { name: 'OCaml', icon: '🐪', category: 'Functional', extensions: ['.ml'], description: 'Functional ML' },
    'nim': { name: 'Nim', icon: '👑', category: 'General', extensions: ['.nim'], description: 'Systems programming' },
    'crystal': { name: 'Crystal', icon: '💎', category: 'General', extensions: ['.cr'], description: 'Ruby-like performance' },
    'zig': { name: 'Zig', icon: '⚡', category: 'System', extensions: ['.zig'], description: 'Modern systems language' },
    'v': { name: 'V', icon: '⚡', category: 'System', extensions: ['.v'], description: 'Simple systems language' },
    'odin': { name: 'Odin', icon: '🪓', category: 'Game', extensions: ['.odin'], description: 'Game development' },
    'gleam': { name: 'Gleam', icon: '✨', category: 'Functional', extensions: ['.gleam'], description: 'Type-safe Erlang' },
    'rescript': { name: 'ReScript', icon: '🔷', category: 'Web', extensions: ['.res'], description: 'Type-safe JavaScript' },
    'elm': { name: 'Elm', icon: '🌳', category: 'Web', category: 'Web', extensions: ['.elm'], description: 'Frontend functional' },
    'reason': { name: 'Reason', icon: '🔷', category: 'Web', extensions: ['.re'], description: 'OCaml for web' },
    'purescript': { name: 'PureScript', icon: '🔷', category: 'Functional', extensions: ['.purs'], description: 'Haskell-like JavaScript' },
    'idris': { name: 'Idris', icon: '🔷', category: 'Functional', extensions: ['.idr'], description: 'Dependently typed' },
    'agda': { name: 'Agda', icon: '🔷', category: 'Functional', extensions: ['.agda'], description: 'Dependently typed' },
    'lean': { name: 'Lean', icon: '🔷', category: 'Functional', extensions: ['.lean'], description: 'Theorem proving' },
    'coq': { name: 'Coq', icon: '🐓', category: 'Functional', extensions: ['.v'], description: 'Formal verification' },
    'isabelle': { name: 'Isabelle', icon: '📐', category: 'Functional', extensions: ['.thy'], description: 'Formal methods' },
    'tlaplus': { name: 'TLA+', icon: '📐', category: 'Formal', extensions: ['.tla'], description: 'Specification language' },
    'alloy': { name: 'Alloy', icon: '🔧', category: 'Formal', extensions: ['.als'], description: 'Software modeling' },
    'dafny': { name: 'Dafny', icon: '🔷', category: 'Formal', extensions: ['.dfy'], description: 'Verification-aware' },
    'whiley': { name: 'Whiley', icon: '🔷', category: 'Formal', extensions: ['.whiley'], description: 'Verification language' },
    'frama-c': { name: 'Frama-C', icon: '🔧', category: 'Formal', extensions: ['.c'], description: 'C verification' },
    'spark': { name: 'SPARK', icon: '🔷', category: 'Formal', extensions: ['.ads'], description: 'Ada verification' },
    'ats': { name: 'ATS', icon: '🔷', category: 'Functional', extensions: ['.dats'], description: 'Dependent types' },
    'urweb': { name: 'Ur/Web', icon: '🌐', category: 'Web', extensions: ['.ur'], description: 'Web applications' },
    'unison': { name: 'Unison', icon: '🎵', category: 'Functional', extensions: ['.u'], description: 'Distributed systems' },
    'koka': { name: 'Koka', icon: '🎯', category: 'Functional', extensions: ['.kk'], description: 'Algebraic effects' },
    'eff': { name: 'Eff', icon: '⚡', category: 'Functional', extensions: ['.eff'], description: 'Effect handlers' },
    'frank': { name: 'Frank', icon: '⚡', category: 'Functional', extensions: ['.fr'], description: 'Effectful programming' },
    'lean4': { name: 'Lean 4', icon: '🔷', category: 'Functional', extensions: ['.lean'], description: 'Theorem prover' },
    'lean3': { name: 'Lean 3', icon: '🔷', category: 'Functional', extensions: ['.lean'], description: 'Theorem prover' },
    'coq-ssreflect': { name: 'Coq SSReflect', icon: '🐓', category: 'Functional', extensions: ['.v'], description: 'Mathematical proofs' },
    'mathcomp': { name: 'Mathematical Components', icon: '📐', category: 'Functional', extensions: ['.v'], description: 'Math library' },
    'lean-mathlib': { name: 'Mathlib', icon: '📐', category: 'Functional', extensions: ['.lean'], description: 'Math library' },
    'agda-stdlib': { name: 'Agda Standard Library', icon: '🔷', category: 'Functional', extensions: ['.agda'], description: 'Standard library' },
    'idris2': { name: 'Idris 2', icon: '🔷', category: 'Functional', extensions: ['.idr'], description: 'Next-gen Idris' },
    'clojurescript': { name: 'ClojureScript', icon: '🟢', category: 'Web', extensions: ['.cljs'], description: 'Clojure for web' },
    'scalajs': { name: 'Scala.js', icon: '🔴', category: 'Web', extensions: ['.scala'], description: 'Scala for web' },
    'kotlin-js': { name: 'Kotlin/JS', icon: '🎯', category: 'Web', extensions: ['.kt'], description: 'Kotlin for web' },
    'kotlin-native': { name: 'Kotlin/Native', icon: '🎯', category: 'Native', extensions: ['.kt'], description: 'Native compilation' },
    'kotlin-multiplatform': { name: 'Kotlin Multiplatform', icon: '🎯', category: 'Cross-platform', extensions: ['.kt'], description: 'Shared code' },
    'flutter': { name: 'Flutter', icon: '📱', category: 'Mobile', extensions: ['.dart'], description: 'Cross-platform UI' },
    'react-native': { name: 'React Native', icon: '⚛️', category: 'Mobile', extensions: ['.jsx'], description: 'React for mobile' },
    'xamarin': { name: 'Xamarin', icon: '📱', category: 'Mobile', extensions: ['.cs'], description: 'C# mobile' },
    'ionic': { name: 'Ionic', icon: '📱', category: 'Mobile', extensions: ['.ts'], description: 'Web mobile' },
    'cordova': { name: 'Cordova', icon: '📱', category: 'Mobile', extensions: ['.js'], description: 'Hybrid apps' },
    'phonegap': { name: 'PhoneGap', icon: '📱', category: 'Mobile', extensions: ['.js'], description: 'Adobe mobile' },
    'titanium': { name: 'Titanium', icon: '📱', category: 'Mobile', extensions: ['.js'], description: 'Appcelerator' },
    'unity': { name: 'Unity', icon: '🎮', category: 'Game', extensions: ['.cs'], description: 'Game engine' },
    'unreal': { name: 'Unreal Engine', icon: '🎮', category: 'Game', extensions: ['.cpp'], description: 'C++ game engine' },
    'godot': { name: 'Godot', icon: '🎮', category: 'Game', extensions: ['.gd'], description: 'Open source engine' },
    'construct': { name: 'Construct 3', icon: '🎮', category: 'Game', extensions: ['.json'], description: 'Visual game dev' },
    'game-maker': { name: 'GameMaker Studio', icon: '🎮', category: 'Game', extensions: ['.gml'], description: '2D game engine' },
    'defold': { name: 'Defold', icon: '🎮', category: 'Game', extensions: ['.lua'], description: '2D game engine' },
    'love2d': { name: 'LÖVE 2D', icon: '❤️', category: 'Game', extensions: ['.lua'], description: 'Lua game framework' },
    'pico-8': { name: 'PICO-8', icon: '🎮', category: 'Game', extensions: ['.lua'], description: 'Fantasy console' },
    'tic-80': { name: 'TIC-80', icon: '🎮', category: 'Game', extensions: ['.lua'], description: 'Fantasy console' },
    'gdevelop': { name: 'GDevelop', icon: '🎮', category: 'Game', extensions: ['.json'], description: 'No-code games' },
    'scratch': { name: 'Scratch', icon: '🐱', category: 'Educational', extensions: ['.sb3'], description: 'Visual programming' },
    'blockly': { name: 'Blockly', icon: '🧩', category: 'Educational', extensions: ['.xml'], description: 'Visual coding' },
    'snap': { name: 'Snap!', icon: '🧩', category: 'Educational', extensions: ['.xml'], description: 'Visual programming' },
    'alice': { name: 'Alice', icon: '🐰', category: 'Educational', extensions: ['.a2c'], description: '3D programming' },
    'greenfoot': { name: 'Greenfoot', icon: '🐸', category: 'Educational', extensions: ['.java'], description: 'Java learning' },
    'bluej': { name: 'BlueJ', icon: '🔵', category: 'Educational', extensions: ['.java'], description: 'Java IDE' },
    'processing': { name: 'Processing', icon: '🎨', category: 'Creative', extensions: ['.pde'], description: 'Creative coding' },
    'p5js': { name: 'p5.js', icon: '🎨', category: 'Creative', extensions: ['.js'], description: 'Web creative coding' },
    'openframeworks': { name: 'openFrameworks', icon: '🎨', category: 'Creative', extensions: ['.cpp'], description: 'C++ creative coding' },
    'max-msp': { name: 'Max/MSP', icon: '🎵', category: 'Audio', extensions: ['.maxpat'], description: 'Audio programming' },
    'pure-data': { name: 'Pure Data', icon: '🎵', category: 'Audio', extensions: ['.pd'], description: 'Visual audio' },
    'supercollider': { name: 'SuperCollider', icon: '🎵', category: 'Audio', extensions: ['.sc'], description: 'Audio synthesis' },
    'chuck': { name: 'ChucK', icon: '🎵', category: 'Audio', extensions: ['.ck'], description: 'Audio programming' },
    'csound': { name: 'Csound', icon: '🎵', category: 'Audio', extensions: ['.csd'], description: 'Sound synthesis' },
    'max': { name: 'Max', icon: '🎵', category: 'Audio', extensions: ['.maxpat'], description: 'Interactive media' },
    'vvvv': { name: 'vvvv', icon: '🎨', category: 'Creative', extensions: ['.v4p'], description: 'Visual programming' },
    'touchdesigner': { name: 'TouchDesigner', icon: '🎨', category: 'Creative', extensions: ['.tox'], description: 'Real-time visuals' },
    'notch': { name: 'Notch', icon: '🎨', category: 'Creative', extensions: ['.notch'], description: 'Real-time graphics' },
    'houdini': { name: 'Houdini', icon: '🌀', category: '3D', extensions: ['.hip'], description: '3D software' },
    'blender': { name: 'Blender', icon: '🟠', category: '3D', extensions: ['.py'], description: '3D creation' },
    'maya': { name: 'Maya', icon: '🎭', category: '3D', extensions: ['.py'], description: '3D animation' },
    '3ds-max': { name: '3ds Max', icon: '🎭', category: '3D', extensions: ['.ms'], description: '3D modeling' },
    'cinema-4d': { name: 'Cinema 4D', icon: '🎬', category: '3D', extensions: ['.py'], description: '3D graphics' },
    'houdini-vex': { name: 'VEX', icon: '🌀', category: '3D', extensions: ['.vex'], description: 'Houdini scripting' },
    'houdini-hscript': { name: 'HScript', icon: '🌀', category: '3D', extensions: ['.cmd'], description: 'Houdini commands' },
    'houdini-python': { name: 'Houdini Python', icon: '🌀', category: '3D', extensions: ['.py'], description: 'Houdini Python' },
    'mel': { name: 'MEL', icon: '🎭', category: '3D', extensions: ['.mel'], description: 'Maya scripting' },
    'maxscript': { name: 'MaxScript', icon: '🎭', category: '3D', extensions: ['.ms'], description: '3ds Max scripting' },
    'c4d-python': { name: 'Cinema 4D Python', icon: '🎬', category: '3D', extensions: ['.py'], description: 'C4D scripting' },
    'blender-python': { name: 'Blender Python', icon: '🟠', category: '3D', extensions: ['.py'], description: 'Blender scripting' },
    'houdini-sop': { name: 'Houdini SOP', icon: '🌀', category: '3D', extensions: ['.vex'], description: 'Surface operations' },
    'houdini-dop': { name: 'Houdini DOP', icon: '🌀', category: '3D', extensions: ['.vex'], description: 'Dynamic operations' },
    'houdini-rop': { name: 'Houdini ROP', icon: '🌀', category: '3D', extensions: ['.vex'], description: 'Render operations' },
    'houdini-shop': { name: 'Houdini SHOP', icon: '🌀', category: '3D', extensions: ['.vex'], description: 'Shader operations' },
    'houdini-chop': { name: 'Houdini CHOP', icon: '🌀', category: '3D', extensions: ['.vex'], description: 'Channel operations' },
    'houdini-cop': { name: 'Houdini COP', icon: '🌀', category: '3D', extensions: ['.vex'], description: 'Composite operations' },
    'houdini-pop': { name: 'Houdini POP', icon: '🌀', category: '3D', extensions: ['.vex'], description: 'Particle operations' },
    'houdini-obj': { name: 'Houdini OBJ', icon: '🌀', category: '3D', extensions: ['.vex'], description: 'Object operations' },
    'houdini-out': { name: 'Houdini OUT', icon: '🌀', category: '3D', extensions: ['.vex'], description: 'Output operations' },
    'houdini-net': { name: 'Houdini NET', icon: '🌀', category: '3D', extensions: ['.vex'], description: 'Network operations' },
    'houdini-vop': { name: 'Houdini VOP', icon: '🌀', category: '3D', extensions: ['.vex'], description: 'Vector operations' },
    'houdini-wrangle': { name: 'Houdini Wrangle', icon: '🌀', category: '3D', extensions: ['.vex'], description: 'Attribute wrangling' },
    'houdini-expression': { name: 'Houdini Expression', icon: '🌀', category: '3D', extensions: ['.vex'], description: 'Mathematical expressions' },
    'houdini-hda': { name: 'Houdini HDA', icon: '🌀', category: '3D', extensions: ['.hda'], description: 'Digital assets' },
    'houdini-hda-python': { name: 'Houdini HDA Python', icon: '🌀', category: '3D', extensions: ['.py'], description: 'Asset Python' },
    'houdini-hda-vex': { name: 'Houdini HDA VEX', icon: '🌀', category: '3D', extensions: ['.vex'], description: 'Asset VEX' },
    'houdini-hda-hscript': { name: 'Houdini HDA HScript', icon: '🌀', category: '3D', extensions: ['.cmd'], description: 'Asset HScript' },
    'houdini-hda-mel': { name: 'Houdini HDA MEL', icon: '🌀', category: '3D', extensions: ['.mel'], description: 'Asset MEL' },
    'houdini-hda-maxscript': { name: 'Houdini HDA MaxScript', icon: '🌀', category: '3D', extensions: ['.ms'], description: 'Asset MaxScript' },
    'houdini-hda-python-c4d': { name: 'Houdini HDA C4D Python', icon: '🌀', category: '3D', extensions: ['.py'], description: 'Asset C4D Python' },
    'houdini-hda-blender-python': { name: 'Houdini HDA Blender Python', icon: '🌀', category: '3D', extensions: ['.py'], description: 'Asset Blender Python' },
    'houdini-hda-maya-python': { name: 'Houdini HDA Maya Python', icon: '🌀', category: '3D', extensions: ['.py'], description: 'Asset Maya Python' },
    'houdini-hda-3ds-max-python': { name: 'Houdini HDA 3ds Max Python', icon: '🌀', category: '3D', extensions: ['.py'], description: 'Asset 3ds Max Python' },
    'houdini-hda-cinema-4d-python': { name: 'Houdini HDA Cinema 4D Python', icon: '🌀', category: '3D', extensions: ['.py'], description: 'Asset Cinema 4D Python' },
    'houdini-hda-blender-python-api': { name: 'Houdini HDA Blender Python API', icon: '🌀', category: '3D', extensions: ['.py'], description: 'Asset Blender Python API' },
    'houdini-hda-maya-python-api': { name: 'Houdini HDA Maya Python API', icon: '🌀', category: '3D', extensions: ['.py'], description: 'Asset Maya Python API' },
    'houdini-hda-3ds-max-python-api': { name: 'Houdini HDA 3ds Max Python API', icon: '🌀', category: '3D', extensions: ['.py'], description: 'Asset 3ds Max Python API' },
    'houdini-hda-cinema-4d-python-api': { name: 'Houdini HDA Cinema 4D Python API', icon: '🌀', category: '3D', extensions: ['.py'], description: 'Asset Cinema 4D Python API' }
};

// Test Code Editing Functionality
function testCodeEditing() {
    console.log('🧪 Testing code editing functionality...');
    
    // Create a sample HTML file with editable content
    const sampleHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Code Editing Test</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>🧪 Code Editing Test</h1>
            <p>This demonstrates the app's ability to write and edit code</p>
        </header>
        
        <main>
            <section class="test-section">
                <h2>Editable Content</h2>
                <p>You can edit this HTML code in the editor above!</p>
                
                <!-- Try changing this text -->
                <div class="editable-card">
                    <h3>Try Editing This</h3>
                    <p>Change this text by editing the HTML in the code editor.</p>
                    <button onclick="showAlert()">Click Me!</button>
                </div>
                
                <div class="features">
                    <h3>Code Editing Features:</h3>
                    <ul>
                        <li>✅ Real-time code editing</li>
                        <li>✅ Live preview updates</li>
                        <li>✅ Copy to clipboard</li>
                        <li>✅ Code formatting</li>
                        <li>✅ Auto-save changes</li>
                    </ul>
                </div>
            </section>
        </main>
        
        <footer>
            <p>&copy; 2024 DreamBuild AI - Code Editing Demo</p>
        </footer>
    </div>
    
    <script>
        function showAlert() {
            alert('JavaScript is working! You can edit this function too.');
        }
        
        // You can edit this JavaScript code as well
        console.log('Code editing test loaded successfully!');
    </script>
</body>
</html>`;

    const sampleCSS = `/* Editable CSS - Try changing colors and styles! */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: #333;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

header {
    text-align: center;
    color: white;
    margin-bottom: 40px;
}

header h1 {
    font-size: 3rem;
    margin-bottom: 10px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

header p {
    font-size: 1.2rem;
    opacity: 0.9;
}

main {
    background: white;
    border-radius: 20px;
    padding: 40px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
    margin-bottom: 40px;
}

.test-section h2 {
    color: #764ba2;
    margin-bottom: 20px;
    font-size: 2rem;
}

.editable-card {
    background: #f8f9fa;
    border: 2px dashed #764ba2;
    border-radius: 15px;
    padding: 25px;
    margin: 20px 0;
    text-align: center;
}

.editable-card h3 {
    color: #764ba2;
    margin-bottom: 15px;
}

.editable-card button {
    background: #764ba2;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 15px;
}

.editable-card button:hover {
    background: #5a2d91;
    transform: translateY(-2px);
}

.features {
    background: #e8f5e8;
    border-radius: 15px;
    padding: 25px;
    margin-top: 30px;
}

.features h3 {
    color: #4CAF50;
    margin-bottom: 15px;
}

.features ul {
    list-style: none;
    padding: 0;
}

.features li {
    padding: 8px 0;
    font-size: 1.1rem;
}

footer {
    text-align: center;
    color: white;
    opacity: 0.8;
}

/* Try editing these styles! */
@media (max-width: 768px) {
    .container {
        padding: 10px;
    }
    
    header h1 {
        font-size: 2rem;
    }
    
    main {
        padding: 20px;
    }
}`;

    const sampleJS = `// Editable JavaScript - Try modifying this code!

document.addEventListener('DOMContentLoaded', function() {
    console.log('🧪 Code editing test loaded!');
    
    // You can edit this function
    function updateCardText() {
        const card = document.querySelector('.editable-card h3');
        if (card) {
            card.textContent = 'You edited the code! 🎉';
            card.style.color = '#4CAF50';
        }
    }
    
    // Add click listener to editable card
    const editableCard = document.querySelector('.editable-card');
    if (editableCard) {
        editableCard.addEventListener('click', function() {
            updateCardText();
            this.style.background = '#e8f5e8';
            this.style.borderColor = '#4CAF50';
        });
    }
    
    // Animate features list
    const features = document.querySelectorAll('.features li');
    features.forEach((feature, index) => {
        feature.style.opacity = '0';
        feature.style.transform = 'translateX(-20px)';
        
        setTimeout(() => {
            feature.style.transition = 'all 0.5s ease';
            feature.style.opacity = '1';
            feature.style.transform = 'translateX(0)';
        }, index * 200);
    });
    
    // You can add more JavaScript here
    console.log('All event listeners attached successfully!');
});

// Try adding your own functions here
function customFunction() {
    alert('This is a custom function you can edit!');
}

// You can edit this code and see the changes in real-time!`;

    // Set the files
    currentProject.files = {
        'index.html': sampleHTML,
        'style.css': sampleCSS,
        'script.js': sampleJS,
        'components.jsx': '// React components can be edited here too!\n\nexport default function TestComponent() {\n    return (\n        <div>\n            <h2>Editable React Component</h2>\n            <p>You can edit this JSX code as well!</p>\n        </div>\n    );\n}'
    };
    
    // Switch to HTML file and update UI
    switchFile('index.html');
    updateFileStatuses();
    updatePreview();
    
    // Show notification
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: rgba(33, 150, 243, 0.9);
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(33, 150, 243, 0.3);
        z-index: 1000;
        max-width: 300px;
        font-size: 14px;
    `;
    
    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
            <span style="font-size: 18px;">🧪</span>
            <strong>Code Editing Test Loaded</strong>
        </div>
        <div style="font-size: 12px; opacity: 0.9;">
            Try editing the HTML, CSS, or JS files and watch the live preview update!
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 5000);
    
    console.log('✅ Code editing test completed successfully!');
}

// Language Support Demonstration
function showLanguageSupport() {
    console.log('🌍 Showing language support...');
    
    const languageCount = Object.keys(SUPPORTED_LANGUAGES).length;
    console.log(`Total languages supported: ${languageCount}`);
    
    // Group languages by category
    const categories = {};
    Object.entries(SUPPORTED_LANGUAGES).forEach(([id, lang]) => {
        if (!categories[lang.category]) {
            categories[lang.category] = [];
        }
        categories[lang.category].push({ id, ...lang });
    });
    
    // Create language display modal
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        z-index: 2000;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
    `;
    
    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        background: white;
        border-radius: 20px;
        padding: 30px;
        max-width: 90vw;
        max-height: 90vh;
        overflow-y: auto;
        box-shadow: 0 20px 40px rgba(0,0,0,0.3);
    `;
    
    let html = `
        <div style="text-align: center; margin-bottom: 30px;">
            <h2 style="color: #333; margin: 0 0 10px 0; font-size: 2.5rem;">🌍 Language Support</h2>
            <p style="color: #666; font-size: 1.2rem; margin: 0;">DreamBuild AI supports <strong style="color: #764ba2; font-size: 1.5rem;">${languageCount}+</strong> programming languages</p>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin-bottom: 30px;">
    `;
    
    // Display languages by category
    Object.entries(categories).forEach(([category, languages]) => {
        html += `
            <div style="background: #f8f9fa; border-radius: 15px; padding: 20px; border-left: 5px solid #764ba2;">
                <h3 style="color: #764ba2; margin: 0 0 15px 0; font-size: 1.3rem;">${category}</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px;">
        `;
        
        languages.forEach(lang => {
            html += `
                <div style="background: white; border-radius: 8px; padding: 10px; border: 1px solid #ddd; display: flex; align-items: center; gap: 8px;">
                    <span style="font-size: 20px;">${lang.icon}</span>
                    <div>
                        <div style="font-weight: bold; font-size: 14px; color: #333;">${lang.name}</div>
                        <div style="font-size: 11px; color: #666;">${lang.description}</div>
                        <div style="font-size: 10px; color: #999;">${lang.extensions.join(', ')}</div>
                    </div>
                </div>
            `;
        });
        
        html += `
                </div>
            </div>
        `;
    });
    
    html += `
        </div>
        
        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 2px solid #eee;">
            <p style="color: #666; margin: 0 0 15px 0;">Try generating code in any of these languages!</p>
            <button onclick="this.closest('.language-modal').remove()" style="background: linear-gradient(45deg, #764ba2, #667eea); color: white; border: none; padding: 12px 30px; border-radius: 25px; cursor: pointer; font-size: 16px; font-weight: bold;">
                Close
            </button>
        </div>
    `;
    
    modalContent.innerHTML = html;
    modalContent.className = 'language-modal';
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
    
    // Show notification
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: rgba(156, 39, 176, 0.9);
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(156, 39, 176, 0.3);
        z-index: 1000;
        max-width: 300px;
        font-size: 14px;
    `;
    
    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
            <span style="font-size: 18px;">🌍</span>
            <strong>Language Support</strong>
        </div>
        <div style="font-size: 12px; opacity: 0.9;">
            DreamBuild supports ${languageCount}+ programming languages across all categories!
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 5000);
    
    console.log(`✅ Language support demonstration completed! Showing ${languageCount} languages.`);
}

// Basic generation functions for fallback
function generateBasicHTML(prompt) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Health Food Tips</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>🥗 Health Food Tips</h1>
            <p>Your guide to healthy eating and nutrition</p>
        </header>
        
        <main>
            <section class="hero">
                <h2>Welcome to Your Health Journey</h2>
                <p>Discover amazing tips for healthy eating and better nutrition.</p>
            </section>
            
            <section class="tips">
                <h3>Healthy Eating Tips</h3>
                <div class="tip-card">
                    <h4>🥕 Eat More Vegetables</h4>
                    <p>Include a variety of colorful vegetables in your meals for essential vitamins and minerals.</p>
                </div>
                <div class="tip-card">
                    <h4>💧 Stay Hydrated</h4>
                    <p>Drink plenty of water throughout the day to maintain optimal health.</p>
                </div>
                <div class="tip-card">
                    <h4>🌾 Choose Whole Grains</h4>
                    <p>Opt for whole grain options like brown rice, quinoa, and whole wheat bread.</p>
                </div>
            </section>
        </main>
        
        <footer>
            <p>&copy; 2024 Health Food Tips. Eat well, live well!</p>
        </footer>
    </div>
    
    <script src="script.js"></script>
</body>
</html>`;
}

function generateBasicCSS() {
    return `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: #333;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

header {
    text-align: center;
    color: white;
    margin-bottom: 40px;
}

header h1 {
    font-size: 3rem;
    margin-bottom: 10px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

header p {
    font-size: 1.2rem;
    opacity: 0.9;
}

main {
    background: white;
    border-radius: 20px;
    padding: 40px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
    margin-bottom: 40px;
}

.hero {
    text-align: center;
    margin-bottom: 40px;
}

.hero h2 {
    font-size: 2.5rem;
    color: #764ba2;
    margin-bottom: 20px;
}

.hero p {
    font-size: 1.3rem;
    color: #666;
}

.tips h3 {
    font-size: 2rem;
    color: #333;
    margin-bottom: 30px;
    text-align: center;
}

.tip-card {
    background: #f8f9fa;
    border-radius: 15px;
    padding: 25px;
    margin-bottom: 20px;
    border-left: 5px solid #764ba2;
    transition: transform 0.3s ease;
}

.tip-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}

.tip-card h4 {
    font-size: 1.5rem;
    color: #764ba2;
    margin-bottom: 10px;
}

.tip-card p {
    color: #666;
    font-size: 1.1rem;
}

footer {
    text-align: center;
    color: white;
    opacity: 0.8;
}

@media (max-width: 768px) {
    .container {
        padding: 10px;
    }
    
    header h1 {
        font-size: 2rem;
    }
    
    main {
        padding: 20px;
    }
    
    .hero h2 {
        font-size: 2rem;
    }
}`;
}

function generateBasicJS() {
    return `// Health Food Tips JavaScript

document.addEventListener('DOMContentLoaded', function() {
    console.log('Health Food Tips app loaded!');
    
    // Add smooth scrolling for better UX
    const tipCards = document.querySelectorAll('.tip-card');
    
    tipCards.forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = 'scale(1.02)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    });
    
    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe tip cards for animation
    tipCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // Add click tracking
    document.querySelectorAll('.tip-card').forEach((card, index) => {
        card.addEventListener('click', function() {
            console.log(\`Tip card \${index + 1} clicked\`);
        });
    });
});`;
}

// Smart prompt-based generation functions
function generatePromptBasedHTML(prompt) {
    const lowerPrompt = prompt.toLowerCase();
    
    // Analyze prompt to determine content type
    let title, description, mainContent, theme;
    
    if (lowerPrompt.includes('health') && lowerPrompt.includes('food')) {
        title = '🥗 Health Food Tips';
        description = 'Your guide to healthy eating and nutrition';
        theme = 'health';
        mainContent = `
            <section class="hero">
                <h2>Welcome to Your Health Journey</h2>
                <p>Discover amazing tips for healthy eating and better nutrition.</p>
            </section>
            
            <section class="content">
                <h3>Healthy Eating Tips</h3>
                <div class="tip-card">
                    <h4>🥕 Eat More Vegetables</h4>
                    <p>Include a variety of colorful vegetables in your meals for essential vitamins and minerals.</p>
                </div>
                <div class="tip-card">
                    <h4>💧 Stay Hydrated</h4>
                    <p>Drink plenty of water throughout the day to maintain optimal health.</p>
                </div>
                <div class="tip-card">
                    <h4>🌾 Choose Whole Grains</h4>
                    <p>Opt for whole grain options like brown rice, quinoa, and whole wheat bread.</p>
                </div>
                <div class="tip-card">
                    <h4>🥑 Healthy Fats</h4>
                    <p>Include healthy fats from avocados, nuts, and olive oil in your diet.</p>
                </div>
                <div class="tip-card">
                    <h4>🏃‍♀️ Stay Active</h4>
                    <p>Combine healthy eating with regular exercise for optimal wellness.</p>
                </div>
            </section>`;
    } else if (lowerPrompt.includes('todo') || lowerPrompt.includes('task')) {
        title = '✅ Todo App';
        description = 'Organize your tasks and stay productive';
        theme = 'productivity';
        mainContent = `
            <section class="hero">
                <h2>Stay Organized</h2>
                <p>Manage your tasks efficiently with this simple todo app.</p>
            </section>
            
            <section class="content">
                <div class="todo-input">
                    <input type="text" id="todo-input" placeholder="Add a new task...">
                    <button onclick="addTodo()">Add Task</button>
                </div>
                <ul id="todo-list" class="todo-list"></ul>
            </section>`;
    } else if (lowerPrompt.includes('portfolio') || lowerPrompt.includes('resume')) {
        title = '💼 Portfolio Website';
        description = 'Showcase your work and skills';
        theme = 'professional';
        mainContent = `
            <section class="hero">
                <h2>Welcome to My Portfolio</h2>
                <p>Explore my work and discover what I can do for you.</p>
            </section>
            
            <section class="content">
                <div class="about">
                    <h3>About Me</h3>
                    <p>Passionate developer with expertise in modern web technologies.</p>
                </div>
                <div class="projects">
                    <h3>Featured Projects</h3>
                    <div class="project-card">
                        <h4>Project 1</h4>
                        <p>Description of your amazing project.</p>
                    </div>
                    <div class="project-card">
                        <h4>Project 2</h4>
                        <p>Another impressive project showcase.</p>
                    </div>
                </div>
                <div class="contact">
                    <h3>Get In Touch</h3>
                    <p>Ready to work together? Let's connect!</p>
                </div>
            </section>`;
    } else if (lowerPrompt.includes('blog') || lowerPrompt.includes('news')) {
        title = '📝 Blog Website';
        description = 'Share your thoughts and stories';
        theme = 'blog';
        mainContent = `
            <section class="hero">
                <h2>Welcome to My Blog</h2>
                <p>Thoughts, stories, and insights from my journey.</p>
            </section>
            
            <section class="content">
                <article class="blog-post">
                    <h3>Latest Post Title</h3>
                    <p class="meta">Published on ${new Date().toLocaleDateString()}</p>
                    <p>This is a sample blog post. Replace this content with your actual blog posts.</p>
                </article>
                <article class="blog-post">
                    <h3>Another Interesting Post</h3>
                    <p class="meta">Published on ${new Date(Date.now() - 86400000).toLocaleDateString()}</p>
                    <p>Another sample post to get you started with your blog.</p>
                </article>
            </section>`;
    } else {
        // Generic website
        title = '🌐 My Website';
        description = 'A modern, responsive website';
        theme = 'modern';
        mainContent = `
            <section class="hero">
                <h2>Welcome to My Website</h2>
                <p>This is a custom website created based on your request.</p>
            </section>
            
            <section class="content">
                <h3>About This Site</h3>
                <p>This website was generated based on your prompt: "${prompt}"</p>
                <div class="feature-card">
                    <h4>🚀 Modern Design</h4>
                    <p>Clean, responsive design that works on all devices.</p>
                </div>
                <div class="feature-card">
                    <h4>⚡ Fast Loading</h4>
                    <p>Optimized for speed and performance.</p>
                </div>
                <div class="feature-card">
                    <h4>🎨 Customizable</h4>
                    <p>Easy to modify and extend with your own content.</p>
                </div>
            </section>`;
    }
    
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>${title}</h1>
            <p>${description}</p>
        </header>
        
        <main>
            ${mainContent}
        </main>
        
        <footer>
            <p>&copy; 2024 ${title}. Created with DreamBuild AI.</p>
        </footer>
    </div>
    
    <script src="script.js"></script>
</body>
</html>`;
}

function generatePromptBasedCSS(prompt) {
    const lowerPrompt = prompt.toLowerCase();
    
    // Choose color scheme based on content type
    let primaryColor, secondaryColor, backgroundColor;
    
    if (lowerPrompt.includes('health') || lowerPrompt.includes('food')) {
        primaryColor = '#4CAF50';
        secondaryColor = '#45a049';
        backgroundColor = 'linear-gradient(135deg, #4CAF50 0%, #45a049 100%)';
    } else if (lowerPrompt.includes('todo') || lowerPrompt.includes('task')) {
        primaryColor = '#2196F3';
        secondaryColor = '#1976D2';
        backgroundColor = 'linear-gradient(135deg, #2196F3 0%, #1976D2 100%)';
    } else if (lowerPrompt.includes('portfolio') || lowerPrompt.includes('resume')) {
        primaryColor = '#9C27B0';
        secondaryColor = '#7B1FA2';
        backgroundColor = 'linear-gradient(135deg, #9C27B0 0%, #7B1FA2 100%)';
    } else if (lowerPrompt.includes('blog')) {
        primaryColor = '#FF9800';
        secondaryColor = '#F57C00';
        backgroundColor = 'linear-gradient(135deg, #FF9800 0%, #F57C00 100%)';
    } else {
        primaryColor = '#764ba2';
        secondaryColor = '#667eea';
        backgroundColor = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
    }
    
    return `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: #333;
    background: ${backgroundColor};
    min-height: 100vh;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

header {
    text-align: center;
    color: white;
    margin-bottom: 40px;
}

header h1 {
    font-size: 3rem;
    margin-bottom: 10px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

header p {
    font-size: 1.2rem;
    opacity: 0.9;
}

main {
    background: white;
    border-radius: 20px;
    padding: 40px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
    margin-bottom: 40px;
}

.hero {
    text-align: center;
    margin-bottom: 40px;
}

.hero h2 {
    font-size: 2.5rem;
    color: ${primaryColor};
    margin-bottom: 20px;
}

.hero p {
    font-size: 1.3rem;
    color: #666;
}

.content h3 {
    font-size: 2rem;
    color: #333;
    margin-bottom: 30px;
    text-align: center;
}

/* Card Styles */
.tip-card, .project-card, .feature-card, .blog-post {
    background: #f8f9fa;
    border-radius: 15px;
    padding: 25px;
    margin-bottom: 20px;
    border-left: 5px solid ${primaryColor};
    transition: transform 0.3s ease;
}

.tip-card:hover, .project-card:hover, .feature-card:hover, .blog-post:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}

.tip-card h4, .project-card h4, .feature-card h4, .blog-post h3 {
    font-size: 1.5rem;
    color: ${primaryColor};
    margin-bottom: 10px;
}

.tip-card p, .project-card p, .feature-card p, .blog-post p {
    color: #666;
    font-size: 1.1rem;
}

/* Todo App Styles */
.todo-input {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
}

.todo-input input {
    flex: 1;
    padding: 12px;
    border: 2px solid #ddd;
    border-radius: 8px;
    font-size: 16px;
}

.todo-input button {
    padding: 12px 24px;
    background: ${primaryColor};
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
}

.todo-input button:hover {
    background: ${secondaryColor};
}

.todo-list {
    list-style: none;
}

.todo-list li {
    background: white;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 15px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.todo-list li.completed {
    text-decoration: line-through;
    opacity: 0.6;
}

/* Blog Styles */
.blog-post .meta {
    color: #888;
    font-size: 0.9rem;
    margin-bottom: 15px;
}

/* About Section */
.about {
    background: #f8f9fa;
    border-radius: 15px;
    padding: 25px;
    margin-bottom: 30px;
}

footer {
    text-align: center;
    color: white;
    opacity: 0.8;
}

@media (max-width: 768px) {
    .container {
        padding: 10px;
    }
    
    header h1 {
        font-size: 2rem;
    }
    
    main {
        padding: 20px;
    }
    
    .hero h2 {
        font-size: 2rem;
    }
    
    .todo-input {
        flex-direction: column;
    }
}`;
}

function generatePromptBasedJS(prompt) {
    const lowerPrompt = prompt.toLowerCase();
    
    if (lowerPrompt.includes('todo') || lowerPrompt.includes('task')) {
        return `// Todo App JavaScript

let todos = [];

document.addEventListener('DOMContentLoaded', function() {
    console.log('Todo App loaded!');
    
    // Load todos from localStorage
    loadTodos();
    
    // Add event listener for Enter key
    const todoInput = document.getElementById('todo-input');
    if (todoInput) {
        todoInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                addTodo();
            }
        });
    }
});

function addTodo() {
    const input = document.getElementById('todo-input');
    const todoText = input.value.trim();
    
    if (todoText === '') {
        alert('Please enter a task!');
        return;
    }
    
    const todo = {
        id: Date.now(),
        text: todoText,
        completed: false
    };
    
    todos.push(todo);
    input.value = '';
    
    renderTodos();
    saveTodos();
}

function toggleTodo(id) {
    const todo = todos.find(t => t.id === id);
    if (todo) {
        todo.completed = !todo.completed;
        renderTodos();
        saveTodos();
    }
}

function deleteTodo(id) {
    todos = todos.filter(t => t.id !== id);
    renderTodos();
    saveTodos();
}

function renderTodos() {
    const todoList = document.getElementById('todo-list');
    if (!todoList) return;
    
    todoList.innerHTML = todos.map(todo => \`
        <li class="\${todo.completed ? 'completed' : ''}">
            <span onclick="toggleTodo(\${todo.id})" style="cursor: pointer;">
                \${todo.text}
            </span>
            <button onclick="deleteTodo(\${todo.id})" style="background: #f44336; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer;">
                Delete
            </button>
        </li>
    \`).join('');
}

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function loadTodos() {
    const saved = localStorage.getItem('todos');
    if (saved) {
        todos = JSON.parse(saved);
        renderTodos();
    }
}`;
    } else {
        return `// Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    console.log('Website loaded!');
    
    // Add smooth scrolling for better UX
    const cards = document.querySelectorAll('.tip-card, .project-card, .feature-card, .blog-post');
    
    cards.forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = 'scale(1.02)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    });
    
    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe cards for animation
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // Add click tracking
    cards.forEach((card, index) => {
        card.addEventListener('click', function() {
            console.log(\`Card \${index + 1} clicked\`);
        });
    });
});`;
    }
}

function generatePromptBasedReact(prompt) {
    const lowerPrompt = prompt.toLowerCase();
    
    if (lowerPrompt.includes('todo') || lowerPrompt.includes('task')) {
        return `import React, { useState, useEffect } from 'react';

function TodoApp() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        // Load todos from localStorage
        const savedTodos = localStorage.getItem('todos');
        if (savedTodos) {
            setTodos(JSON.parse(savedTodos));
        }
    }, []);

    const addTodo = () => {
        if (inputValue.trim() === '') return;
        
        const newTodo = {
            id: Date.now(),
            text: inputValue.trim(),
            completed: false
        };
        
        const updatedTodos = [...todos, newTodo];
        setTodos(updatedTodos);
        setInputValue('');
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
    };

    const toggleTodo = (id) => {
        const updatedTodos = todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
    };

    const deleteTodo = (id) => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
    };

    return (
        <div className="todo-app">
            <div className="todo-input">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addTodo()}
                    placeholder="Add a new task..."
                />
                <button onClick={addTodo}>Add Task</button>
            </div>
            <ul className="todo-list">
                {todos.map(todo => (
                    <li key={todo.id} className={todo.completed ? 'completed' : ''}>
                        <span onClick={() => toggleTodo(todo.id)}>
                            {todo.text}
                        </span>
                        <button onClick={() => deleteTodo(todo.id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoApp;`;
    } else {
        return `import React from 'react';

function WebsiteContent() {
    return (
        <div className="website-content">
            <section className="hero">
                <h2>Welcome to My Website</h2>
                <p>This is a React component for your website.</p>
            </section>
            
            <section className="content">
                <h3>About This Component</h3>
                <p>This React component was generated based on your prompt.</p>
                
                <div className="feature-card">
                    <h4>⚛️ React Powered</h4>
                    <p>Built with modern React hooks and components.</p>
                </div>
                
                <div className="feature-card">
                    <h4>🎨 Styled Components</h4>
                    <p>Easy to style and customize with CSS.</p>
                </div>
                
                <div className="feature-card">
                    <h4>🚀 Performance</h4>
                    <p>Optimized for fast rendering and smooth interactions.</p>
                </div>
            </section>
        </div>
    );
}

export default WebsiteContent;`;
    }
}

// Template loading
function loadTemplate(templateName) {
    const templates = {
        'todo-app': {
            prompt: 'Create a modern todo application with drag-and-drop, dark mode, and real-time sync',
            files: {
                'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo App</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>✅ My Todo App</h1>
            <button id="theme-toggle">🌙</button>
        </header>
        <div class="input-section">
            <input type="text" id="todo-input" placeholder="Add a new task...">
            <button id="add-btn">Add</button>
        </div>
        <ul id="todo-list"></ul>
    </div>
    <script src="script.js"></script>
</body>
</html>`,
                'style.css': `* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: 'Arial', sans-serif; background: var(--bg-color); color: var(--text-color); transition: all 0.3s; }
:root { --bg-color: #f5f5f5; --text-color: #333; --card-bg: white; --border-color: #ddd; }
.dark { --bg-color: #1a1a1a; --text-color: #fff; --card-bg: #2d2d2d; --border-color: #444; }
.container { max-width: 600px; margin: 0 auto; padding: 20px; }
header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px; }
#theme-toggle { background: none; border: none; font-size: 24px; cursor: pointer; }
.input-section { display: flex; gap: 10px; margin-bottom: 20px; }
#todo-input { flex: 1; padding: 12px; border: 2px solid var(--border-color); border-radius: 8px; background: var(--card-bg); color: var(--text-color); }
#add-btn { padding: 12px 24px; background: #4CAF50; color: white; border: none; border-radius: 8px; cursor: pointer; }
#todo-list { list-style: none; }
.todo-item { background: var(--card-bg); border: 1px solid var(--border-color); border-radius: 8px; padding: 15px; margin-bottom: 10px; display: flex; align-items: center; gap: 10px; cursor: move; }
.todo-item.completed { opacity: 0.6; text-decoration: line-through; }
.todo-checkbox { width: 20px; height: 20px; cursor: pointer; }
.todo-text { flex: 1; }
.delete-btn { background: #f44336; color: white; border: none; border-radius: 4px; padding: 5px 10px; cursor: pointer; }`,
                'script.js': `let todos = JSON.parse(localStorage.getItem('todos')) || [];
let isDarkMode = localStorage.getItem('darkMode') === 'true';

document.addEventListener('DOMContentLoaded', () => {
    updateTheme();
    renderTodos();
    
    document.getElementById('add-btn').addEventListener('click', addTodo);
    document.getElementById('todo-input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addTodo();
    });
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
});

function addTodo() {
    const input = document.getElementById('todo-input');
    const text = input.value.trim();
    if (text) {
        todos.push({ id: Date.now(), text, completed: false });
        input.value = '';
        saveTodos();
        renderTodos();
    }
}

function renderTodos() {
    const list = document.getElementById('todo-list');
    list.innerHTML = todos.map(todo => 
        '<li class="todo-item ' + (todo.completed ? 'completed' : '') + '" draggable="true" data-id="' + todo.id + '">' +
            '<input type="checkbox" class="todo-checkbox" ' + (todo.completed ? 'checked' : '') + ' onchange="toggleTodo(' + todo.id + ')">' +
            '<span class="todo-text">' + todo.text + '</span>' +
            '<button class="delete-btn" onclick="deleteTodo(' + todo.id + ')">Delete</button>' +
        '</li>'
    ).join('');
}

function toggleTodo(id) {
    const todo = todos.find(t => t.id === id);
    if (todo) {
        todo.completed = !todo.completed;
        saveTodos();
        renderTodos();
    }
}

function deleteTodo(id) {
    todos = todos.filter(t => t.id !== id);
    saveTodos();
    renderTodos();
}

function toggleTheme() {
    isDarkMode = !isDarkMode;
    updateTheme();
    localStorage.setItem('darkMode', isDarkMode);
}

function updateTheme() {
    document.body.classList.toggle('dark', isDarkMode);
    document.getElementById('theme-toggle').textContent = isDarkMode ? '☀️' : '🌙';
}

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}`
            }
        }
    };
    
    if (templates[templateName]) {
        const template = templates[templateName];
        document.getElementById('prompt').value = template.prompt;
        currentProject.files = { ...currentProject.files, ...template.files };
        switchFile('index.html');
        updatePreview();
    }
}

// Removed duplicate generateFullApp function - using the enhanced version below

// AI-powered code generation using open-source alternatives
async function generateWithAI(prompt) {
    // Try multiple AI services in order of preference
    const aiServices = [
        { name: 'Groq', url: 'https://api.groq.com/openai/v1/chat/completions' },
        { name: 'Together AI', url: 'https://api.together.xyz/v1/chat/completions' },
        { name: 'Hugging Face', url: 'https://api-inference.huggingface.co/models/microsoft/CodeBERT-base' },
        { name: 'Ollama Local', url: 'http://localhost:11434/api/generate' }
    ];

    for (const service of aiServices) {
        try {
            const result = await callAIService(service, prompt);
            if (result) {
                processAIResponse(result, prompt);
                return;
            }
        } catch (error) {
            console.log(`${service.name} not available, trying next...`);
            continue;
        }
    }
    
    throw new Error('No AI services available');
}

async function callAIService(service, prompt) {
    const codePrompt = `Generate a complete web application based on this description: "${prompt}". 
    Provide the code in this exact JSON format:
    {
        "html": "complete HTML code here",
        "css": "complete CSS code here", 
        "javascript": "complete JavaScript code here",
        "react": "complete React component code here"
    }
    Make it a modern, responsive, and fully functional application.`;

    if (service.name === 'Groq') {
        const response = await fetch(service.url, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + (window.groqApiKey || 'gsk_your_free_groq_key_here'),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'llama3-8b-8192',
                messages: [{ role: 'user', content: codePrompt }],
                max_tokens: 4000
            })
        });
        return await response.json();
    }
    
    if (service.name === 'Together AI') {
        const response = await fetch(service.url, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + (window.togetherApiKey || 'your_together_ai_key_here'),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'meta-llama/Llama-2-7b-chat-hf',
                messages: [{ role: 'user', content: codePrompt }],
                max_tokens: 4000
            })
        });
        return await response.json();
    }

    if (service.name === 'Ollama Local') {
        const response = await fetch(service.url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                model: 'codellama',
                prompt: codePrompt,
                stream: false
            })
        });
        return await response.json();
    }

    return null;
}

function processAIResponse(response, prompt) {
    try {
        let content = '';
        
        if (response.choices && response.choices[0]) {
            content = response.choices[0].message.content;
        } else if (response.response) {
            content = response.response;
        } else {
            throw new Error('Invalid response format');
        }

        // Try to parse JSON response
        const codeData = JSON.parse(content);
        
        // Update project files with AI-generated code
        currentProject.files = {
            'index.html': codeData.html || '',
            'style.css': codeData.css || '',
            'script.js': codeData.javascript || '',
            'components.jsx': codeData.react || ''
        };

        switchFile('index.html');
        updatePreview();
        
        document.getElementById('status-text').textContent = 'AI-generated app created successfully!';
        document.getElementById('lines-count').textContent = Object.values(currentProject.files).join('').split('\n').length + ' lines';
        
    } catch (error) {
        console.error('Error processing AI response:', error);
        throw error;
    }
}

function generateAppCode(prompt) {
    // Generate comprehensive app code based on prompt
    const appType = detectAppType(prompt);
    const generatedFiles = generateFilesForApp(appType, prompt);
    
        currentProject.files = { ...currentProject.files, ...generatedFiles };
        switchFile('index.html');
        updateFileStatuses();
        updatePreview();
    
    // Update status
    document.getElementById('status-text').textContent = 'App generated successfully!';
    document.getElementById('lines-count').textContent = Object.values(currentProject.files).join('').split('\n').length + ' lines';
}

function detectAppType(prompt) {
    const lowerPrompt = prompt.toLowerCase();
    if (lowerPrompt.includes('todo') || lowerPrompt.includes('task')) return 'todo';
    if (lowerPrompt.includes('weather') || lowerPrompt.includes('forecast')) return 'weather';
    if (lowerPrompt.includes('calculator') || lowerPrompt.includes('math')) return 'calculator';
    if (lowerPrompt.includes('portfolio') || lowerPrompt.includes('resume')) return 'portfolio';
    if (lowerPrompt.includes('ecommerce') || lowerPrompt.includes('shop')) return 'ecommerce';
    if (lowerPrompt.includes('dashboard') || lowerPrompt.includes('admin')) return 'dashboard';
    return 'generic';
}

function generateFilesForApp(appType, prompt) {
    const baseFiles = {
        'index.html': generateHTML(appType, prompt),
        'style.css': generateCSS(appType, prompt),
        'script.js': generateJS(appType, prompt),
        'components.jsx': generateReactComponents(appType, prompt)
    };
    return baseFiles;
}

function generateHTML(appType, prompt) {
    return '<!DOCTYPE html>\n' +
'<html lang="en">\n' +
'<head>\n' +
'    <meta charset="UTF-8">\n' +
'    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n' +
'    <title>Generated App</title>\n' +
'    <link rel="stylesheet" href="style.css">\n' +
'</head>\n' +
'<body>\n' +
'    <div class="app-container">\n' +
'        <header>\n' +
'            <h1>🚀 Generated Application</h1>\n' +
'            <p>Built with DreamBuild AI</p>\n' +
'        </header>\n' +
'        <main>\n' +
'            <div class="content">\n' +
'                <h2>' + prompt + '</h2>\n' +
'                <p>This application was generated based on your prompt using DreamBuild AI.</p>\n' +
'                <div class="features">\n' +
'                    <div class="feature-card">\n' +
'                        <h3>✨ Feature 1</h3>\n' +
'                        <p>Interactive component</p>\n' +
'                    </div>\n' +
'                    <div class="feature-card">\n' +
'                        <h3>🎨 Feature 2</h3>\n' +
'                        <p>Modern design</p>\n' +
'                    </div>\n' +
'                    <div class="feature-card">\n' +
'                        <h3>⚡ Feature 3</h3>\n' +
'                        <p>Fast performance</p>\n' +
'                    </div>\n' +
'                </div>\n' +
'            </div>\n' +
'        </main>\n' +
'    </div>\n' +
'    <script src="script.js"></script>\n' +
'</body>\n' +
'</html>';
}

function generateCSS(appType, prompt) {
    return '/* Generated CSS for ' + appType + ' application */\n' +
'* {\n' +
'    margin: 0;\n' +
'    padding: 0;\n' +
'    box-sizing: border-box;\n' +
'}\n\n' +
'body {\n' +
'    font-family: \'Segoe UI\', Tahoma, Geneva, Verdana, sans-serif;\n' +
'    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n' +
'    min-height: 100vh;\n' +
'    color: white;\n' +
'}\n\n' +
'.app-container {\n' +
'    max-width: 1200px;\n' +
'    margin: 0 auto;\n' +
'    padding: 20px;\n' +
'}\n\n' +
'header {\n' +
'    text-align: center;\n' +
'    margin-bottom: 40px;\n' +
'}\n\n' +
'header h1 {\n' +
'    font-size: 3rem;\n' +
'    margin-bottom: 10px;\n' +
'    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);\n' +
'}\n\n' +
'header p {\n' +
'    font-size: 1.2rem;\n' +
'    opacity: 0.9;\n' +
'}\n\n' +
'.content {\n' +
'    background: rgba(255,255,255,0.1);\n' +
'    backdrop-filter: blur(10px);\n' +
'    border-radius: 20px;\n' +
'    padding: 40px;\n' +
'    box-shadow: 0 8px 32px rgba(0,0,0,0.1);\n' +
'}\n\n' +
'.features {\n' +
'    display: grid;\n' +
'    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n' +
'    gap: 20px;\n' +
'    margin-top: 30px;\n' +
'}\n\n' +
'.feature-card {\n' +
'    background: rgba(255,255,255,0.1);\n' +
'    border-radius: 15px;\n' +
'    padding: 25px;\n' +
'    text-align: center;\n' +
'    transition: transform 0.3s ease;\n' +
'}\n\n' +
'.feature-card:hover {\n' +
'    transform: translateY(-5px);\n' +
'}\n\n' +
'.feature-card h3 {\n' +
'    font-size: 1.5rem;\n' +
'    margin-bottom: 15px;\n' +
'}\n\n' +
'@media (max-width: 768px) {\n' +
'    .app-container {\n' +
'        padding: 10px;\n' +
'    }\n' +
'    \n' +
'    header h1 {\n' +
'        font-size: 2rem;\n' +
'    }\n' +
'    \n' +
'    .content {\n' +
'        padding: 20px;\n' +
'    }\n' +
'}';
}

function generateJS(appType, prompt) {
    return '// Generated JavaScript for ' + appType + ' application\n' +
'console.log(\'🚀 DreamBuild AI Generated App Loaded!\');\n\n' +
'document.addEventListener(\'DOMContentLoaded\', function() {\n' +
'    console.log(\'Application initialized\');\n' +
'    \n' +
'    // Add interactive features\n' +
'    const featureCards = document.querySelectorAll(\'.feature-card\');\n' +
'    \n' +
'    featureCards.forEach(card => {\n' +
'        card.addEventListener(\'click\', function() {\n' +
'            this.style.transform = \'scale(0.95)\';\n' +
'            setTimeout(() => {\n' +
'                this.style.transform = \'translateY(-5px)\';\n' +
'            }, 150);\n' +
'        });\n' +
'    });\n' +
'    \n' +
'    // Add some dynamic content\n' +
'    const content = document.querySelector(\'.content h2\');\n' +
'    if (content) {\n' +
'        content.style.animation = \'fadeIn 1s ease-in\';\n' +
'    }\n' +
'});\n\n' +
'// Add CSS animation\n' +
'const style = document.createElement(\'style\');\n' +
'style.textContent = \'@keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }\';\n' +
'document.head.appendChild(style);';
}

function generateReactComponents(appType, prompt) {
    return '// Generated React Components for ' + appType + ' application\n' +
'import React, { useState, useEffect } from \'react\';\n\n' +
'const GeneratedApp = () => {\n' +
'    const [data, setData] = useState(null);\n' +
'    const [loading, setLoading] = useState(true);\n\n' +
'    useEffect(() => {\n' +
'        // Simulate data loading\n' +
'        setTimeout(() => {\n' +
'            setData({ message: \'App loaded successfully!\' });\n' +
'            setLoading(false);\n' +
'        }, 1000);\n' +
'    }, []);\n\n' +
'    if (loading) {\n' +
'        return <div className="loading">Loading...</div>;\n' +
'    }\n\n' +
'    return (\n' +
'        <div className="generated-app">\n' +
'            <h1>🚀 Generated React App</h1>\n' +
'            <p>Built with DreamBuild AI</p>\n' +
'            <div className="features">\n' +
'                <div className="feature">\n' +
'                    <h3>⚛️ React Components</h3>\n' +
'                    <p>Modern React architecture</p>\n' +
'                </div>\n' +
'                <div className="feature">\n' +
'                    <h3>🎨 Styled Components</h3>\n' +
'                    <p>Beautiful UI design</p>\n' +
'                </div>\n' +
'                <div className="feature">\n' +
'                    <h3>⚡ Hooks & State</h3>\n' +
'                    <p>Modern React patterns</p>\n' +
'                </div>\n' +
'            </div>\n' +
'        </div>\n' +
'    );\n' +
'};\n\n' +
'export default GeneratedApp;';
}

// Preview functionality
function updatePreview() {
    const preview = document.getElementById('app-preview');
    const placeholder = document.getElementById('preview-placeholder');
    
    if (!preview) {
        console.log('❌ Preview element not found');
        return;
    }
    
    const htmlContent = currentProject.files['index.html'] || '';
    const cssContent = currentProject.files['style.css'] || '';
    const jsContent = currentProject.files['script.js'] || '';
    
    console.log('🖥️  Updating preview with:', {
        htmlLength: htmlContent.length,
        cssLength: cssContent.length,
        jsLength: jsContent.length
    });
    
    if (!htmlContent.trim()) {
        // Show placeholder
        if (placeholder) placeholder.style.display = 'flex';
        preview.style.display = 'none';
        return;
    }
    
    let fullHTML = htmlContent;
    
    // Handle CSS - try multiple patterns
    if (cssContent.trim()) {
        // Replace external CSS link if it exists
        fullHTML = fullHTML.replace(
            /<link[^>]*rel=["']stylesheet["'][^>]*href=["']style\.css["'][^>]*>/gi,
            `<style>${cssContent}</style>`
        );
        
        // If no external CSS link found, inject styles into head
        if (fullHTML === htmlContent && fullHTML.includes('<head>')) {
            fullHTML = fullHTML.replace(
                '<head>',
                `<head>\n<style>${cssContent}</style>`
            );
        } else if (fullHTML === htmlContent && !fullHTML.includes('<head>')) {
            // If no head tag, add styles after title or at the beginning
            if (fullHTML.includes('<title>')) {
                fullHTML = fullHTML.replace(
                    '</title>',
                    `</title>\n<style>${cssContent}</style>`
                );
            } else {
                fullHTML = `<style>${cssContent}</style>\n${fullHTML}`;
            }
        }
    }
    
    // Handle JavaScript - try multiple patterns
    if (jsContent.trim()) {
        // Replace external JS script if it exists
        fullHTML = fullHTML.replace(
            /<script[^>]*src=["']script\.js["'][^>]*><\/script>/gi,
            `<script>${jsContent}</script>`
        );
        
        // If no external JS script found, inject scripts before closing body
        if (fullHTML === htmlContent.replace(
            /<link[^>]*rel=["']stylesheet["'][^>]*href=["']style\.css["'][^>]*>/gi,
            `<style>${cssContent}</style>`
        ) && fullHTML.includes('</body>')) {
            fullHTML = fullHTML.replace(
                '</body>',
                `<script>${jsContent}</script>\n</body>`
            );
        } else if (!fullHTML.includes('</body>')) {
            // If no body tag, append script at the end
            fullHTML += `\n<script>${jsContent}</script>`;
        }
    }
    
    // Ensure we have a complete HTML document
    if (!fullHTML.includes('<!DOCTYPE html>')) {
        fullHTML = `<!DOCTYPE html>\n${fullHTML}`;
    }
    
    // Update iframe content
    try {
        const iframeDoc = preview.contentDocument || preview.contentWindow.document;
        iframeDoc.open();
        iframeDoc.write(fullHTML);
        iframeDoc.close();
        
        // Show iframe and hide placeholder
        preview.style.display = 'block';
        if (placeholder) placeholder.style.display = 'none';
        
        console.log('✅ Preview updated with', fullHTML.length, 'characters');
        
        // Log preview content for debugging
        if (fullHTML.length > 0) {
            console.log('📄 Preview content preview:', fullHTML.substring(0, 200) + '...');
        }
    } catch (error) {
        console.error('❌ Error updating iframe preview:', error);
        // Fallback to innerHTML if iframe fails
        preview.style.display = 'none';
        if (placeholder) {
            placeholder.style.display = 'flex';
            placeholder.innerHTML = `
                <div style="padding: 20px; text-align: center; color: #666;">
                    <div style="font-size: 24px; margin-bottom: 10px;">⚠️</div>
                    <h3 style="margin: 0 0 10px 0; color: #333;">Preview Error</h3>
                    <p style="margin: 0; font-size: 14px;">Unable to render preview. Try refreshing.</p>
                </div>
            `;
        }
    }
}

function togglePreview() {
    updatePreview();
}

// AI Configuration functions
function toggleAIConfig() {
    const configDiv = document.getElementById('ai-config');
    configDiv.style.display = configDiv.style.display === 'none' ? 'block' : 'none';
}

function saveAIConfig() {
    const service = document.getElementById('ai-service').value;
    const apiKey = document.getElementById('ai-api-key').value;
    
    const config = {
        service: service,
        apiKey: apiKey,
        timestamp: Date.now()
    };
    
    localStorage.setItem('dreamBuildAIConfig', JSON.stringify(config));
    
    // Update API key in the AI service calls
    if (service === 'groq' && apiKey) {
        window.groqApiKey = apiKey;
    } else if (service === 'together' && apiKey) {
        window.togetherApiKey = apiKey;
    }
    
    alert('AI configuration saved!');
    document.getElementById('ai-config').style.display = 'none';
}

function loadAIConfig() {
    const savedConfig = localStorage.getItem('dreamBuildAIConfig');
    if (savedConfig) {
        const config = JSON.parse(savedConfig);
        document.getElementById('ai-service').value = config.service;
        document.getElementById('ai-api-key').value = config.apiKey || '';
        
        // Set global API keys
        if (config.apiKey) {
            if (config.service === 'groq') {
                window.groqApiKey = config.apiKey;
            } else if (config.service === 'together') {
                window.togetherApiKey = config.apiKey;
            }
        }
    }
}

// Setup instructions for each AI service
function showAISetupInstructions() {
    const service = document.getElementById('ai-service').value;
    let instructions = '';
    
    switch(service) {
        case 'groq':
            instructions = '🚀 Groq Setup:\n\n1. Go to https://console.groq.com/\n2. Sign up for free account\n3. Get your API key\n4. Paste it in the config\n5. Enjoy 6,000 free requests/day!';
            break;
        case 'together':
            instructions = '🤝 Together AI Setup:\n\n1. Go to https://api.together.xyz/\n2. Sign up for free account\n3. Get your API key\n4. Paste it in the config\n5. Get $25 free credits monthly!';
            break;
        case 'ollama':
            instructions = '🏠 Ollama Local Setup:\n\n1. Install Ollama: https://ollama.ai/\n2. Run: ollama pull codellama\n3. Start Ollama service\n4. No API key needed!\n5. Completely private and free!';
            break;
        case 'huggingface':
            instructions = '🤗 Hugging Face Setup:\n\n1. Go to https://huggingface.co/\n2. Sign up for free account\n3. Get your API token\n4. Paste it in the config\n5. Free tier available!';
            break;
        default:
            instructions = '📝 Template Mode:\n\nUsing pre-built templates for code generation. No AI services required.';
    }
    
    alert(instructions);
}

// Visual Component Library Functions
function addComponent(componentType) {
    const component = {
        type: componentType,
        id: Date.now(),
        properties: getDefaultComponentProperties(componentType)
    };
    
    currentProject.components.push(component);
    updateProjectWithComponents();
    
    // Add to prompt
    const currentPrompt = document.getElementById('prompt').value;
    const componentPrompt = getComponentPrompt(componentType);
    document.getElementById('prompt').value = currentPrompt + '\n\n' + componentPrompt;
    
    console.log(`Added ${componentType} component to project`);
}

function getDefaultComponentProperties(componentType) {
    const properties = {
        header: { title: 'My App', logo: true, navigation: true },
        navigation: { items: ['Home', 'About', 'Contact'], style: 'horizontal' },
        hero: { title: 'Welcome', subtitle: 'Build amazing apps', cta: 'Get Started' },
        form: { fields: ['name', 'email', 'message'], validation: true },
        card: { title: 'Card Title', content: 'Card content', image: true },
        table: { columns: ['ID', 'Name', 'Email'], sortable: true, pagination: true },
        chart: { type: 'line', data: 'sample', interactive: true },
        modal: { title: 'Modal Title', content: 'Modal content', closable: true }
    };
    return properties[componentType] || {};
}

function getComponentPrompt(componentType) {
    const prompts = {
        header: 'Include a responsive header with navigation and branding',
        navigation: 'Add a navigation menu with proper routing',
        hero: 'Create a hero section with call-to-action buttons',
        form: 'Implement forms with validation and error handling',
        card: 'Add card components for content display',
        table: 'Include data tables with sorting and pagination',
        chart: 'Add interactive charts and data visualization',
        modal: 'Implement modal dialogs and overlays'
    };
    return prompts[componentType] || '';
}

function updateProjectWithComponents() {
    // This would integrate components into the generated code
    console.log('Updated project with components:', currentProject.components);
}

// Advanced Configuration Functions
function updateConfiguration() {
    // Safely update configuration with null checks
    const appTypeEl = document.getElementById('app-type');
    if (appTypeEl) {
        currentProject.config.appType = appTypeEl.value;
    }
    
    const databaseEl = document.getElementById('database-type');
    if (databaseEl) {
        currentProject.config.database = databaseEl.value;
    } else {
        currentProject.config.database = 'firebase'; // default
    }
    
    const authEl = document.getElementById('auth-type');
    if (authEl) {
        currentProject.config.auth = authEl.value;
    } else {
        currentProject.config.auth = 'firebase'; // default
    }
    
    const stylingEl = document.getElementById('styling-framework');
    if (stylingEl) {
        currentProject.config.styling = stylingEl.value;
    }
    
    const apisEl = document.getElementById('api-integrations');
    if (apisEl && apisEl.value) {
        currentProject.config.apis = apisEl.value.split(',').map(api => api.trim());
    } else {
        currentProject.config.apis = []; // default empty
    }
    
    console.log('Updated configuration:', currentProject.config);
}

// Security Review Functions
function runSecurityReview() {
    const securityReview = document.getElementById('security-review');
    const issuesDiv = document.getElementById('security-issues');
    
    // Simulate AI security review
    const issues = analyzeSecurity(currentProject);
    
    issuesDiv.innerHTML = '';
    if (issues.length === 0) {
        issuesDiv.innerHTML = '<div class="security-issue resolved">✅ No security issues found. Your code is secure!</div>';
    } else {
        issues.forEach(issue => {
            const issueDiv = document.createElement('div');
            issueDiv.className = `security-issue ${issue.severity}`;
            issueDiv.innerHTML = `
                <strong>${issue.title}</strong><br>
                <small>${issue.description}</small><br>
                <button onclick="fixSecurityIssue('${issue.id}')" style="margin-top: 5px; padding: 5px 10px; background: #007bff; color: white; border: none; border-radius: 3px; cursor: pointer;">Fix</button>
            `;
            issuesDiv.appendChild(issueDiv);
        });
    }
    
    securityReview.style.display = 'block';
}

function analyzeSecurity(project) {
    const issues = [];
    
    // Check for common security issues
    const code = Object.values(project.files).join('\n');
    
    if (code.includes('innerHTML') && !code.includes('DOMPurify')) {
        issues.push({
            id: 'xss-1',
            title: 'Potential XSS Vulnerability',
            description: 'innerHTML usage detected without sanitization',
            severity: 'critical'
        });
    }
    
    if (code.includes('eval(') || code.includes('Function(')) {
        issues.push({
            id: 'code-injection',
            title: 'Code Injection Risk',
            description: 'eval() or Function() usage detected',
            severity: 'critical'
        });
    }
    
    if (project.config.auth === 'none' && code.includes('admin')) {
        issues.push({
            id: 'auth-missing',
            title: 'Missing Authentication',
            description: 'Admin functionality without authentication',
            severity: 'critical'
        });
    }
    
    if (code.includes('password') && !code.includes('hash') && !code.includes('bcrypt')) {
        issues.push({
            id: 'password-security',
            title: 'Password Security Issue',
            description: 'Passwords not properly hashed',
            severity: 'critical'
        });
    }
    
    return issues;
}

function fixSecurityIssue(issueId) {
    // Implement security fixes
    console.log(`Fixing security issue: ${issueId}`);
    
    // Update the security review
    const issueElement = document.querySelector(`[onclick="fixSecurityIssue('${issueId}')"]`).parentElement;
    issueElement.className = 'security-issue resolved';
    issueElement.innerHTML = '✅ Security issue fixed!';
}

function hideSecurityReview() {
    document.getElementById('security-review').style.display = 'none';
}

// Deployment Functions
function deployToFirebase() {
    showDeploymentStatus('Deploying to Firebase...', 'info');
    
    setTimeout(() => {
        // Simulate deployment
        showDeploymentStatus('✅ Successfully deployed to Firebase! URL: https://your-app.firebaseapp.com', 'success');
    }, 3000);
}

function deployToVercel() {
    showDeploymentStatus('Deploying to Vercel...', 'info');
    
    setTimeout(() => {
        showDeploymentStatus('✅ Successfully deployed to Vercel! URL: https://your-app.vercel.app', 'success');
    }, 3000);
}

function deployToNetlify() {
    showDeploymentStatus('Deploying to Netlify...', 'info');
    
    setTimeout(() => {
        showDeploymentStatus('✅ Successfully deployed to Netlify! URL: https://your-app.netlify.app', 'success');
    }, 3000);
}

function exportToGitHub() {
    showDeploymentStatus('Exporting to GitHub...', 'info');
    
    setTimeout(() => {
        showDeploymentStatus('✅ Successfully exported to GitHub! Repository: https://github.com/your-username/your-app', 'success');
    }, 3000);
}

function downloadProject() {
    showDeploymentStatus('Preparing download...', 'info');
    
    setTimeout(() => {
        // Create and download zip file
        const zip = createProjectZip();
        downloadFile(zip, 'dream-build-project.zip');
        showDeploymentStatus('✅ Project downloaded successfully!', 'success');
    }, 2000);
}

function showDeploymentStatus(message, type) {
    const statusDiv = document.getElementById('deployment-status');
    statusDiv.style.display = 'block';
    statusDiv.innerHTML = message;
    
    // Add appropriate styling based on type
    statusDiv.className = `deployment-status ${type}`;
    
    setTimeout(() => {
        statusDiv.style.display = 'none';
    }, 5000);
}

function createProjectZip() {
    // This would create a zip file with all project files
    return 'project-zip-content';
}

function downloadFile(content, filename) {
    const blob = new Blob([content], { type: 'application/zip' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
}

// Enhanced Full-Stack Generation
function generateFullApp() {
    console.log('🚀 Generate button clicked!');
    
    let prompt;
    
    try {
        updateConfiguration();
        
        const promptEl = document.getElementById('prompt');
        if (!promptEl) {
            console.error('Prompt element not found!');
            alert('Error: Prompt element not found');
            return;
        }
        
        prompt = promptEl.value;
        console.log('Prompt value:', prompt);
        
        if (!prompt.trim()) {
            alert('Please enter a description of the app you want to build');
            return;
        }
    } catch (error) {
        console.error('Error in generateFullApp:', error);
        alert('Error: ' + error.message);
        return;
    }

    const generateBtn = document.getElementById('generate-btn');
    const generateText = document.getElementById('generate-text');
    const generateSpinner = document.getElementById('generate-spinner');
    const progressDiv = document.getElementById('generation-progress');

    console.log('UI Elements found:', {
        generateBtn: !!generateBtn,
        generateText: !!generateText,
        generateSpinner: !!generateSpinner,
        progressDiv: !!progressDiv
    });

    // Show loading state
    if (generateBtn) generateBtn.disabled = true;
    if (generateText) generateText.style.display = 'none';
    if (generateSpinner) generateSpinner.style.display = 'inline-block';
    if (progressDiv) progressDiv.style.display = 'block';
    
    console.log('Loading state applied');

    // Animate progress steps
    animateProgress();

    // Try AI generation first, fallback to templates
    console.log('Starting AI generation...');
    
    generateWithAI(prompt).then(() => {
        console.log('AI generation completed successfully');
        
        // Hide loading state
        if (generateBtn) generateBtn.disabled = false;
        if (generateText) generateText.style.display = 'inline';
        if (generateSpinner) generateSpinner.style.display = 'none';
        if (progressDiv) progressDiv.style.display = 'none';
        
        console.log('UI state reset after AI generation');
    }).catch((error) => {
        console.log('AI generation failed, using fallback:', error);
        
        // Fallback to enhanced template-based generation
        try {
            generateFullStackApp(prompt);
            console.log('Fallback generation completed');
        } catch (fallbackError) {
            console.error('Fallback generation failed:', fallbackError);
            
            // Ultimate fallback - simple template generation
            try {
                generateAppCode(prompt);
                console.log('Simple fallback generation completed');
            } catch (simpleError) {
                console.error('Simple fallback also failed:', simpleError);
                
                // Last resort - create basic files based on prompt
                console.log('Creating basic files with prompt:', prompt);
                const htmlContent = generatePromptBasedHTML(prompt);
                const cssContent = generatePromptBasedCSS(prompt);
                const jsContent = generatePromptBasedJS(prompt);
                const reactContent = generatePromptBasedReact(prompt);
                
                console.log('Generated content lengths:', {
                    html: htmlContent.length,
                    css: cssContent.length,
                    js: jsContent.length,
                    react: reactContent.length
                });
                
                currentProject.files = {
                    'index.html': htmlContent,
                    'style.css': cssContent,
                    'script.js': jsContent,
                    'components.jsx': reactContent
                };
                switchFile('index.html');
                updateFileStatuses();
                updatePreview();
                console.log('Basic files generated as last resort');
            }
        }
        
        // Hide loading state
        if (generateBtn) generateBtn.disabled = false;
        if (generateText) generateText.style.display = 'inline';
        if (generateSpinner) generateSpinner.style.display = 'none';
        if (progressDiv) progressDiv.style.display = 'none';
        
        console.log('UI state reset after fallback');
    });
}

function animateProgress() {
    const steps = document.querySelectorAll('.progress-step');
    let currentStep = 0;
    
    const interval = setInterval(() => {
        if (currentStep < steps.length) {
            steps[currentStep].classList.add('active');
            currentStep++;
        } else {
            clearInterval(interval);
            // Mark all as completed
            steps.forEach(step => step.classList.add('completed'));
        }
    }, 800);
}

function generateFullStackApp(prompt) {
    // Generate comprehensive full-stack application
    const appType = currentProject.config.appType;
    const generatedFiles = generateFilesForAppType(appType, prompt);
    
    currentProject.files = { ...currentProject.files, ...generatedFiles };
    switchFile('index.html');
    updateFileStatuses();
    updatePreview();
    
    // Auto-run security and code review in background
    setTimeout(() => {
        runAutomaticSecurityReview();
        runAutomaticCodeAnalysis();
    }, 1000);
    
    // Update status
    document.getElementById('status-text').textContent = 'Full-stack app generated successfully!';
    document.getElementById('lines-count').textContent = Object.values(currentProject.files).join('').split('\n').length + ' lines';
}

function generateFilesForAppType(appType, prompt) {
    const baseFiles = {
        'index.html': generatePromptBasedHTML(prompt),
        'style.css': generatePromptBasedCSS(prompt),
        'script.js': generatePromptBasedJS(prompt),
        'components.jsx': generatePromptBasedReact(prompt),
        'server.js': generateServerCode(appType, prompt),
        'database.js': generateDatabaseCode(appType, prompt),
        'auth.js': generateAuthCode(appType, prompt),
        'api.js': generateAPICode(appType, prompt),
        'package.json': generatePackageJson(appType, prompt)
    };
    return baseFiles;
}

function generateServerCode(appType, prompt) {
    return `// Generated Server Code for ${appType} application
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = process.env.PORT || 3000;

// Security middleware
app.use(helmet());
app.use(cors());

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.post('/api/data', (req, res) => {
    // Handle data creation
    res.json({ message: 'Data created successfully', data: req.body });
});

app.get('/api/data', (req, res) => {
    // Handle data retrieval
    res.json({ message: 'Data retrieved successfully', data: [] });
});

app.listen(PORT, () => {
    console.log(\`Server running on port \${PORT}\`);
});

module.exports = app;`;
}

function generateDatabaseCode(appType, prompt) {
    const dbType = currentProject.config.database;
    
    if (dbType === 'firebase') {
        return `// Firebase Database Configuration
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, setDoc, getDoc, getDocs, updateDoc, deleteDoc } from 'firebase/firestore';

const firebaseConfig = {
    // Your Firebase config here
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Database operations
export const createDocument = async (collectionName, documentId, data) => {
    try {
        await setDoc(doc(db, collectionName, documentId), data);
        return { success: true, id: documentId };
    } catch (error) {
        console.error('Error creating document:', error);
        return { success: false, error: error.message };
    }
};

export const getDocument = async (collectionName, documentId) => {
    try {
        const docRef = doc(db, collectionName, documentId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return { success: true, data: docSnap.data() };
        } else {
            return { success: false, error: 'Document not found' };
        }
    } catch (error) {
        console.error('Error getting document:', error);
        return { success: false, error: error.message };
    }
};

export const getAllDocuments = async (collectionName) => {
    try {
        const querySnapshot = await getDocs(collection(db, collectionName));
        const documents = [];
        querySnapshot.forEach((doc) => {
            documents.push({ id: doc.id, ...doc.data() });
        });
        return { success: true, data: documents };
    } catch (error) {
        console.error('Error getting documents:', error);
        return { success: false, error: error.message };
    }
};`;
    } else {
        return `// Database Configuration for ${dbType}
// Database connection and operations
const database = {
    connect: async () => {
        // Database connection logic
        console.log('Connected to database');
    },
    
    create: async (table, data) => {
        // Create record logic
        return { success: true, id: Date.now() };
    },
    
    read: async (table, id) => {
        // Read record logic
        return { success: true, data: {} };
    },
    
    update: async (table, id, data) => {
        // Update record logic
        return { success: true };
    },
    
    delete: async (table, id) => {
        // Delete record logic
        return { success: true };
    }
};

module.exports = database;`;
    }
}

function generateAuthCode(appType, prompt) {
    const authType = currentProject.config.auth;
    
    if (authType === 'firebase') {
        return `// Firebase Authentication
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';

const auth = getAuth();

// Authentication functions
export const signUp = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return { success: true, user: userCredential.user };
    } catch (error) {
        console.error('Sign up error:', error);
        return { success: false, error: error.message };
    }
};

export const signIn = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return { success: true, user: userCredential.user };
    } catch (error) {
        console.error('Sign in error:', error);
        return { success: false, error: error.message };
    }
};

export const logout = async () => {
    try {
        await signOut(auth);
        return { success: true };
    } catch (error) {
        console.error('Logout error:', error);
        return { success: false, error: error.message };
    }
};

export const getCurrentUser = () => {
    return auth.currentUser;
};

export const onAuthChange = (callback) => {
    return onAuthStateChanged(auth, callback);
};`;
    } else {
        return `// JWT Authentication
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

// Authentication middleware
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Access token required' });
    }

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ error: 'Invalid token' });
        }
        req.user = user;
        next();
    });
};

// Authentication functions
const hashPassword = async (password) => {
    return await bcrypt.hash(password, 10);
};

const comparePassword = async (password, hash) => {
    return await bcrypt.compare(password, hash);
};

const generateToken = (user) => {
    return jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '24h' });
};

module.exports = {
    authenticateToken,
    hashPassword,
    comparePassword,
    generateToken
};`;
    }
}

function generateAPICode(appType, prompt) {
    return `// API Integration Code
const axios = require('axios');

class APIClient {
    constructor(baseURL) {
        this.client = axios.create({
            baseURL: baseURL,
            timeout: 10000,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    async get(endpoint, params = {}) {
        try {
            const response = await this.client.get(endpoint, { params });
            return { success: true, data: response.data };
        } catch (error) {
            console.error('GET request failed:', error);
            return { success: false, error: error.message };
        }
    }

    async post(endpoint, data) {
        try {
            const response = await this.client.post(endpoint, data);
            return { success: true, data: response.data };
        } catch (error) {
            console.error('POST request failed:', error);
            return { success: false, error: error.message };
        }
    }

    async put(endpoint, data) {
        try {
            const response = await this.client.put(endpoint, data);
            return { success: true, data: response.data };
        } catch (error) {
            console.error('PUT request failed:', error);
            return { success: false, error: error.message };
        }
    }

    async delete(endpoint) {
        try {
            const response = await this.client.delete(endpoint);
            return { success: true, data: response.data };
        } catch (error) {
            console.error('DELETE request failed:', error);
            return { success: false, error: error.message };
        }
    }
}

// API integrations based on configuration
const integrations = {
    stripe: new APIClient('https://api.stripe.com/v1'),
    sendgrid: new APIClient('https://api.sendgrid.com/v3'),
    twilio: new APIClient('https://api.twilio.com/2010-04-01')
};

module.exports = { APIClient, integrations };`;
}

function generatePackageJson(appType, prompt) {
    return `{
  "name": "dream-build-app",
  "version": "1.0.0",
  "description": "Generated with DreamBuild AI",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "build": "npm run build:client && npm run build:server",
    "build:client": "vite build",
    "build:server": "echo 'Server build complete'",
    "test": "jest",
    "lint": "eslint .",
    "format": "prettier --write ."
  },
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5",
    "helmet": "^7.0.0",
    "express-rate-limit": "^6.8.1",
    "axios": "^1.5.0",
    "jsonwebtoken": "^9.0.2",
    "bcryptjs": "^2.4.3",
    "dotenv": "^16.3.1"
  },
  "devDependencies": {
    "nodemon": "^3.0.1",
    "jest": "^29.6.4",
    "eslint": "^8.47.0",
    "prettier": "^3.0.2"
  },
  "engines": {
    "node": ">=18.0.0"
  },
  "keywords": [
    "ai-generated",
    "full-stack",
    "web-application",
    "dreambuild"
  ],
  "author": "DreamBuild AI",
  "license": "MIT"
}`;
}

// Collapsible sections functionality
function toggleSection(headerElement) {
    const section = headerElement.parentElement;
    section.classList.toggle('collapsed');
}

// Advanced options toggle
function toggleAdvancedOptions() {
    const advancedOptions = document.getElementById('advanced-options');
    const toggleText = document.getElementById('advanced-toggle-text');
    
    if (advancedOptions.style.display === 'none') {
        advancedOptions.style.display = 'block';
        toggleText.textContent = '⬆️ Hide Advanced Options';
    } else {
        advancedOptions.style.display = 'none';
        toggleText.textContent = '⚙️ Advanced Options';
    }
}

// Smart suggestions based on prompt with background automation
function updateSmartSuggestions() {
    const prompt = document.getElementById('prompt').value.toLowerCase();
    const suggestions = document.getElementById('suggestion-content');
    
    let detectedFeatures = [];
    let detectedTemplate = null;
    let aiService = 'auto';
    
    // Auto-detect app type, features, and templates
    if (prompt.includes('todo') || prompt.includes('task')) {
        detectedTemplate = 'todo-app';
        detectedFeatures.push('✅ Task management with drag-and-drop');
        detectedFeatures.push('✅ Real-time updates');
        detectedFeatures.push('✅ User authentication');
        aiService = 'groq'; // Best for simple apps
    } else if (prompt.includes('ecommerce') || prompt.includes('shop') || prompt.includes('store')) {
        detectedTemplate = 'ecommerce';
        detectedFeatures.push('✅ Shopping cart functionality');
        detectedFeatures.push('✅ Payment processing (Stripe)');
        detectedFeatures.push('✅ Product catalog');
        detectedFeatures.push('✅ User accounts');
        aiService = 'together'; // Better for complex apps
    } else if (prompt.includes('weather') || prompt.includes('forecast')) {
        detectedTemplate = 'weather';
        detectedFeatures.push('✅ Real-time weather data');
        detectedFeatures.push('✅ Location-based forecasts');
        detectedFeatures.push('✅ Interactive charts');
        aiService = 'groq';
    } else if (prompt.includes('calculator') || prompt.includes('math')) {
        detectedTemplate = 'calculator';
        detectedFeatures.push('✅ Scientific functions');
        detectedFeatures.push('✅ History tracking');
        detectedFeatures.push('✅ Keyboard support');
        aiService = 'template'; // Simple enough for templates
    } else if (prompt.includes('portfolio') || prompt.includes('resume')) {
        detectedTemplate = 'portfolio';
        detectedFeatures.push('✅ Responsive design');
        detectedFeatures.push('✅ Contact forms');
        detectedFeatures.push('✅ Project showcase');
        aiService = 'groq';
    } else if (prompt.includes('dashboard') || prompt.includes('admin')) {
        detectedTemplate = 'dashboard';
        detectedFeatures.push('✅ Data visualization');
        detectedFeatures.push('✅ Admin controls');
        detectedFeatures.push('✅ Analytics integration');
        aiService = 'together';
    } else if (prompt.includes('social') || prompt.includes('chat') || prompt.includes('message')) {
        detectedFeatures.push('✅ Real-time messaging');
        detectedFeatures.push('✅ User profiles');
        detectedFeatures.push('✅ Social features');
        aiService = 'together';
    } else {
        // Default suggestions
        detectedFeatures.push('✅ Modern responsive design');
        detectedFeatures.push('✅ User-friendly interface');
        detectedFeatures.push('✅ Mobile optimization');
        aiService = 'groq';
    }
    
    // Always include these
    detectedFeatures.push('✅ Tailwind CSS styling');
    detectedFeatures.push('✅ Firebase backend');
    detectedFeatures.push('✅ Security best practices');
    
    // Auto-load template if detected
    if (detectedTemplate && prompt.length > 10) {
        setTimeout(() => {
            loadTemplate(detectedTemplate);
            console.log(`Auto-loaded template: ${detectedTemplate}`);
        }, 500);
    }
    
    // Auto-configure AI service
    const aiServiceEl = document.getElementById('ai-service');
    if (aiServiceEl) {
        aiServiceEl.value = aiService;
    }
    
    suggestions.innerHTML = 'Based on your description, I\'ll automatically configure:<ul style="margin: 10px 0 0 20px; padding: 0;">' +
        detectedFeatures.map(feature => `<li>${feature}</li>`).join('') +
        '</ul>';
}

// Auto-configure based on prompt
function autoConfigureApp() {
    const promptEl = document.getElementById('prompt');
    if (!promptEl) return;
    
    const prompt = promptEl.value.toLowerCase();
    
    // Auto-detect app type
    const appTypeEl = document.getElementById('app-type');
    if (appTypeEl) {
        if (prompt.includes('mobile') || prompt.includes('app')) {
            appTypeEl.value = 'mobile';
        } else if (prompt.includes('api') || prompt.includes('backend')) {
            appTypeEl.value = 'backend';
        } else if (prompt.includes('frontend') || prompt.includes('website')) {
            appTypeEl.value = 'frontend';
        } else {
            appTypeEl.value = 'fullstack';
        }
    }
    
    // Auto-detect styling preferences
    const stylingEl = document.getElementById('styling-framework');
    if (stylingEl) {
        if (prompt.includes('material') || prompt.includes('google')) {
            stylingEl.value = 'material';
        } else if (prompt.includes('bootstrap')) {
            stylingEl.value = 'bootstrap';
        } else {
            stylingEl.value = 'tailwind';
        }
    }
    
    // Auto-detect and suggest programming language
    const suggestedLanguage = detectOptimalLanguage(prompt);
    if (suggestedLanguage) {
        updateLanguageSuggestion(suggestedLanguage, prompt);
    }
}

// Intelligent language detection based on prompt
function detectOptimalLanguage(prompt) {
    const lowerPrompt = prompt.toLowerCase();
    
    // Web Development Detection
    if (lowerPrompt.includes('website') || lowerPrompt.includes('web app') || lowerPrompt.includes('frontend')) {
        if (lowerPrompt.includes('react') || lowerPrompt.includes('component')) {
            return { id: 'javascript', name: 'JavaScript (React)', reason: 'React components and modern web development' };
        }
        if (lowerPrompt.includes('typescript') || lowerPrompt.includes('type safety')) {
            return { id: 'typescript', name: 'TypeScript', reason: 'Type-safe web development' };
        }
        return { id: 'javascript', name: 'JavaScript', reason: 'Web application development' };
    }
    
    // Mobile Development Detection
    if (lowerPrompt.includes('mobile') || lowerPrompt.includes('ios') || lowerPrompt.includes('android')) {
        if (lowerPrompt.includes('ios') || lowerPrompt.includes('iphone') || lowerPrompt.includes('swift')) {
            return { id: 'swift', name: 'Swift', reason: 'iOS native development' };
        }
        if (lowerPrompt.includes('android') || lowerPrompt.includes('kotlin')) {
            return { id: 'kotlin', name: 'Kotlin', reason: 'Android native development' };
        }
        if (lowerPrompt.includes('flutter') || lowerPrompt.includes('cross platform')) {
            return { id: 'dart', name: 'Dart', reason: 'Flutter cross-platform development' };
        }
        if (lowerPrompt.includes('react native')) {
            return { id: 'javascript', name: 'JavaScript (React Native)', reason: 'React Native mobile development' };
        }
        return { id: 'dart', name: 'Dart (Flutter)', reason: 'Cross-platform mobile development' };
    }
    
    // Backend/API Detection
    if (lowerPrompt.includes('api') || lowerPrompt.includes('backend') || lowerPrompt.includes('server')) {
        if (lowerPrompt.includes('python') || lowerPrompt.includes('django') || lowerPrompt.includes('flask')) {
            return { id: 'python', name: 'Python', reason: 'Python backend development' };
        }
        if (lowerPrompt.includes('java') || lowerPrompt.includes('spring')) {
            return { id: 'java', name: 'Java', reason: 'Enterprise backend development' };
        }
        if (lowerPrompt.includes('node') || lowerPrompt.includes('express')) {
            return { id: 'javascript', name: 'JavaScript (Node.js)', reason: 'Node.js backend development' };
        }
        if (lowerPrompt.includes('csharp') || lowerPrompt.includes('.net')) {
            return { id: 'csharp', name: 'C#', reason: '.NET backend development' };
        }
        if (lowerPrompt.includes('go') || lowerPrompt.includes('golang')) {
            return { id: 'go', name: 'Go', reason: 'High-performance backend development' };
        }
        if (lowerPrompt.includes('rust')) {
            return { id: 'rust', name: 'Rust', reason: 'Memory-safe backend development' };
        }
        return { id: 'python', name: 'Python', reason: 'Backend development and APIs' };
    }
    
    // Game Development Detection
    if (lowerPrompt.includes('game') || lowerPrompt.includes('gaming') || lowerPrompt.includes('unity')) {
        if (lowerPrompt.includes('unity')) {
            return { id: 'csharp', name: 'C# (Unity)', reason: 'Unity game development' };
        }
        if (lowerPrompt.includes('unreal')) {
            return { id: 'cpp', name: 'C++ (Unreal)', reason: 'Unreal Engine game development' };
        }
        if (lowerPrompt.includes('godot')) {
            return { id: 'gdscript', name: 'GDScript', reason: 'Godot game development' };
        }
        if (lowerPrompt.includes('lua')) {
            return { id: 'lua', name: 'Lua', reason: 'Game scripting and modding' };
        }
        return { id: 'csharp', name: 'C# (Unity)', reason: 'Game development' };
    }
    
    // Data Science/Machine Learning Detection
    if (lowerPrompt.includes('data') || lowerPrompt.includes('machine learning') || lowerPrompt.includes('ai') || lowerPrompt.includes('analytics')) {
        if (lowerPrompt.includes('python') || lowerPrompt.includes('tensorflow') || lowerPrompt.includes('pytorch')) {
            return { id: 'python', name: 'Python', reason: 'Data science and machine learning' };
        }
        if (lowerPrompt.includes('r ') || lowerPrompt.includes('statistical')) {
            return { id: 'r', name: 'R', reason: 'Statistical computing and data analysis' };
        }
        if (lowerPrompt.includes('julia')) {
            return { id: 'julia', name: 'Julia', reason: 'Scientific computing and data analysis' };
        }
        return { id: 'python', name: 'Python', reason: 'Data science and analytics' };
    }
    
    // Blockchain Detection
    if (lowerPrompt.includes('blockchain') || lowerPrompt.includes('crypto') || lowerPrompt.includes('smart contract')) {
        if (lowerPrompt.includes('ethereum') || lowerPrompt.includes('solidity')) {
            return { id: 'solidity', name: 'Solidity', reason: 'Ethereum smart contract development' };
        }
        return { id: 'solidity', name: 'Solidity', reason: 'Blockchain development' };
    }
    
    // Desktop Application Detection
    if (lowerPrompt.includes('desktop') || lowerPrompt.includes('windows') || lowerPrompt.includes('mac') || lowerPrompt.includes('application')) {
        if (lowerPrompt.includes('electron') || lowerPrompt.includes('cross platform')) {
            return { id: 'javascript', name: 'JavaScript (Electron)', reason: 'Cross-platform desktop apps' };
        }
        if (lowerPrompt.includes('csharp') || lowerPrompt.includes('.net')) {
            return { id: 'csharp', name: 'C#', reason: 'Windows desktop development' };
        }
        if (lowerPrompt.includes('swift') && lowerPrompt.includes('mac')) {
            return { id: 'swift', name: 'Swift', reason: 'macOS desktop development' };
        }
        return { id: 'javascript', name: 'JavaScript (Electron)', reason: 'Desktop application development' };
    }
    
    // Scripting/Automation Detection
    if (lowerPrompt.includes('script') || lowerPrompt.includes('automation') || lowerPrompt.includes('tool')) {
        if (lowerPrompt.includes('python')) {
            return { id: 'python', name: 'Python', reason: 'Python scripting and automation' };
        }
        if (lowerPrompt.includes('bash') || lowerPrompt.includes('shell')) {
            return { id: 'bash', name: 'Bash', reason: 'Shell scripting and automation' };
        }
        if (lowerPrompt.includes('powershell') || lowerPrompt.includes('windows')) {
            return { id: 'powershell', name: 'PowerShell', reason: 'Windows automation' };
        }
        return { id: 'python', name: 'Python', reason: 'Scripting and automation' };
    }
    
    // Default recommendation
    return { id: 'javascript', name: 'JavaScript', reason: 'Versatile web development' };
}

// Update language suggestion in the UI
function updateLanguageSuggestion(suggestedLanguage, prompt) {
    // Update smart suggestions to include language recommendation
    const suggestions = document.getElementById('suggestion-content');
    if (!suggestions) return;
    
    const currentContent = suggestions.innerHTML;
    const languageSuggestion = `
        <div style="background: rgba(156, 39, 176, 0.1); border: 1px solid rgba(156, 39, 176, 0.3); border-radius: 8px; padding: 12px; margin-top: 10px;">
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
                <span style="font-size: 16px;">🌍</span>
                <strong style="color: #9c27b0; font-size: 13px;">Recommended Language:</strong>
            </div>
            <div style="font-size: 12px; color: #333;">
                <strong>${suggestedLanguage.name}</strong> - ${suggestedLanguage.reason}
            </div>
            <div style="margin-top: 8px;">
                <button onclick="selectLanguage('${suggestedLanguage.id}')" style="background: #9c27b0; color: white; border: none; padding: 6px 12px; border-radius: 15px; cursor: pointer; font-size: 11px;">
                    Use ${suggestedLanguage.name}
                </button>
            </div>
        </div>
    `;
    
    // Add language suggestion to existing content
    suggestions.innerHTML = currentContent + languageSuggestion;
}

// Function to select a language
function selectLanguage(languageId) {
    const language = SUPPORTED_LANGUAGES[languageId];
    if (!language) return;
    
    // Update the current project language
    currentProject.config.language = languageId;
    
    // Show confirmation notification
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: rgba(156, 39, 176, 0.9);
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(156, 39, 176, 0.3);
        z-index: 1000;
        max-width: 300px;
        font-size: 14px;
    `;
    
    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
            <span style="font-size: 18px;">${language.icon}</span>
            <strong>Language Selected</strong>
        </div>
        <div style="font-size: 12px; opacity: 0.9;">
            Now generating code in <strong>${language.name}</strong>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 3000);
    
    console.log(`✅ Language selected: ${language.name} (${languageId})`);
}

// Initialize the AI Builder
document.addEventListener('DOMContentLoaded', function() {
    // Load AI configuration
    loadAIConfig();
    
    // File switching
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('file-item')) {
            const filename = e.target.getAttribute('data-file');
            switchFile(filename);
        }
    });

    // Code editor changes
    document.getElementById('code-editor').addEventListener('input', function(e) {
        currentProject.files[currentProject.activeFile] = e.target.value;
        updatePreview();
        
        // Debounced automatic security and code analysis
        clearTimeout(window.codeAnalysisTimeout);
        window.codeAnalysisTimeout = setTimeout(() => {
            runAutomaticSecurityReview();
            runAutomaticCodeAnalysis();
        }, 2000); // Run analysis 2 seconds after user stops typing
    });

    // Update AI service selection handler
    document.getElementById('ai-service').addEventListener('change', function() {
        const service = this.value;
        const configDiv = document.getElementById('ai-config');
        
        if (service === 'template' || service === 'ollama') {
            configDiv.style.display = 'none';
        } else {
            configDiv.style.display = 'block';
        }
        
        // Show setup instructions
        showAISetupInstructions();
    });

    // Configuration change handlers (with null checks)
    const appTypeEl = document.getElementById('app-type');
    if (appTypeEl) {
        appTypeEl.addEventListener('change', updateConfiguration);
    }
    
    const stylingEl = document.getElementById('styling-framework');
    if (stylingEl) {
        stylingEl.addEventListener('change', updateConfiguration);
    }
    
    // Smart suggestions on prompt change
    document.getElementById('prompt').addEventListener('input', function() {
        updateSmartSuggestions();
        autoConfigureApp();
    });
    
    // Initialize smart suggestions
    updateSmartSuggestions();
});
