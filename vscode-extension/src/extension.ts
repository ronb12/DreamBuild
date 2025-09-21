// DreamBuild VS Code Extension
// Provides AI-powered code generation and assistance

import * as vscode from 'vscode';
import axios from 'axios';

export function activate(context: vscode.ExtensionContext) {
    console.log('DreamBuild extension is now active!');

    // Register commands
    const generateCodeCommand = vscode.commands.registerCommand('dreambuild.generateCode', async () => {
        await generateCode();
    });

    const generateComponentCommand = vscode.commands.registerCommand('dreambuild.generateComponent', async () => {
        await generateComponent();
    });

    const generateTestCommand = vscode.commands.registerCommand('dreambuild.generateTest', async () => {
        await generateTest();
    });

    const explainCodeCommand = vscode.commands.registerCommand('dreambuild.explainCode', async () => {
        await explainCode();
    });

    const refactorCodeCommand = vscode.commands.registerCommand('dreambuild.refactorCode', async () => {
        await refactorCode();
    });

    const optimizeCodeCommand = vscode.commands.registerCommand('dreambuild.optimizeCode', async () => {
        await optimizeCode();
    });

    // Add commands to context
    context.subscriptions.push(
        generateCodeCommand,
        generateComponentCommand,
        generateTestCommand,
        explainCodeCommand,
        refactorCodeCommand,
        optimizeCodeCommand
    );

    // Register completion provider
    const completionProvider = vscode.languages.registerCompletionItemProvider(
        { scheme: 'file' },
        {
            provideCompletionItems(document, position, token, context) {
                return provideCompletionItems(document, position);
            }
        },
        '.'
    );

    context.subscriptions.push(completionProvider);
}

// Generate code based on prompt
async function generateCode() {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
        vscode.window.showWarningMessage('No active editor found');
        return;
    }

    const prompt = await vscode.window.showInputBox({
        prompt: 'Describe what code you want to generate',
        placeHolder: 'e.g., Create a React component for user authentication'
    });

    if (!prompt) {
        return;
    }

    try {
        vscode.window.showInformationMessage('Generating code...');
        
        const code = await callDreamBuildAPI('generate', {
            prompt,
            language: getLanguageFromEditor(editor),
            context: getEditorContext(editor)
        });

        if (code) {
            const position = editor.selection.active;
            editor.edit(editBuilder => {
                editBuilder.insert(position, code);
            });
            vscode.window.showInformationMessage('Code generated successfully!');
        }
    } catch (error) {
        vscode.window.showErrorMessage(`Failed to generate code: ${error}`);
    }
}

// Generate React component
async function generateComponent() {
    const componentName = await vscode.window.showInputBox({
        prompt: 'Enter component name',
        placeHolder: 'e.g., UserCard'
    });

    if (!componentName) {
        return;
    }

    const componentType = await vscode.window.showQuickPick([
        'Functional Component',
        'Class Component',
        'Hook Component',
        'Styled Component'
    ], {
        placeHolder: 'Select component type'
    });

    if (!componentType) {
        return;
    }

    try {
        const code = await callDreamBuildAPI('generateComponent', {
            name: componentName,
            type: componentType,
            language: 'typescript'
        });

        if (code) {
            const editor = vscode.window.activeTextEditor;
            if (editor) {
                const position = editor.selection.active;
                editor.edit(editBuilder => {
                    editBuilder.insert(position, code);
                });
            }
            vscode.window.showInformationMessage('Component generated successfully!');
        }
    } catch (error) {
        vscode.window.showErrorMessage(`Failed to generate component: ${error}`);
    }
}

// Generate test file
async function generateTest() {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
        vscode.window.showWarningMessage('No active editor found');
        return;
    }

    const testType = await vscode.window.showQuickPick([
        'Unit Test',
        'Integration Test',
        'E2E Test',
        'Component Test'
    ], {
        placeHolder: 'Select test type'
    });

    if (!testType) {
        return;
    }

    try {
        const code = await callDreamBuildAPI('generateTest', {
            fileContent: editor.document.getText(),
            testType,
            language: getLanguageFromEditor(editor)
        });

        if (code) {
            const fileName = editor.document.fileName;
            const testFileName = fileName.replace(/\.[^/.]+$/, '.test.ts');
            
            const uri = vscode.Uri.file(testFileName);
            const doc = await vscode.workspace.openTextDocument(uri);
            await vscode.window.showTextDocument(doc);
            
            const editor = vscode.window.activeTextEditor;
            if (editor) {
                editor.edit(editBuilder => {
                    editBuilder.insert(new vscode.Position(0, 0), code);
                });
            }
            vscode.window.showInformationMessage('Test file generated successfully!');
        }
    } catch (error) {
        vscode.window.showErrorMessage(`Failed to generate test: ${error}`);
    }
}

// Explain selected code
async function explainCode() {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
        vscode.window.showWarningMessage('No active editor found');
        return;
    }

    const selection = editor.selection;
    if (selection.isEmpty) {
        vscode.window.showWarningMessage('Please select code to explain');
        return;
    }

    const selectedCode = editor.document.getText(selection);

    try {
        const explanation = await callDreamBuildAPI('explain', {
            code: selectedCode,
            language: getLanguageFromEditor(editor)
        });

        if (explanation) {
            const panel = vscode.window.createWebviewPanel(
                'dreamBuildExplanation',
                'Code Explanation',
                vscode.ViewColumn.Beside,
                {}
            );

            panel.webview.html = getWebviewContent(explanation);
        }
    } catch (error) {
        vscode.window.showErrorMessage(`Failed to explain code: ${error}`);
    }
}

// Refactor selected code
async function refactorCode() {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
        vscode.window.showWarningMessage('No active editor found');
        return;
    }

    const selection = editor.selection;
    if (selection.isEmpty) {
        vscode.window.showWarningMessage('Please select code to refactor');
        return;
    }

    const selectedCode = editor.document.getText(selection);
    const refactorType = await vscode.window.showQuickPick([
        'Extract Function',
        'Extract Variable',
        'Simplify Logic',
        'Improve Readability',
        'Optimize Performance'
    ], {
        placeHolder: 'Select refactoring type'
    });

    if (!refactorType) {
        return;
    }

    try {
        const refactoredCode = await callDreamBuildAPI('refactor', {
            code: selectedCode,
            type: refactorType,
            language: getLanguageFromEditor(editor)
        });

        if (refactoredCode) {
            editor.edit(editBuilder => {
                editBuilder.replace(selection, refactoredCode);
            });
            vscode.window.showInformationMessage('Code refactored successfully!');
        }
    } catch (error) {
        vscode.window.showErrorMessage(`Failed to refactor code: ${error}`);
    }
}

// Optimize selected code
async function optimizeCode() {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
        vscode.window.showWarningMessage('No active editor found');
        return;
    }

    const selection = editor.selection;
    if (selection.isEmpty) {
        vscode.window.showWarningMessage('Please select code to optimize');
        return;
    }

    const selectedCode = editor.document.getText(selection);

    try {
        const optimizedCode = await callDreamBuildAPI('optimize', {
            code: selectedCode,
            language: getLanguageFromEditor(editor)
        });

        if (optimizedCode) {
            editor.edit(editBuilder => {
                editBuilder.replace(selection, optimizedCode);
            });
            vscode.window.showInformationMessage('Code optimized successfully!');
        }
    } catch (error) {
        vscode.window.showErrorMessage(`Failed to optimize code: ${error}`);
    }
}

// Call DreamBuild API
async function callDreamBuildAPI(endpoint: string, data: any) {
    const config = vscode.workspace.getConfiguration('dreambuild');
    const apiUrl = config.get('apiUrl', 'http://localhost:3000/api');
    const apiKey = config.get('apiKey', '');

    try {
        const response = await axios.post(`${apiUrl}/${endpoint}`, data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': apiKey ? `Bearer ${apiKey}` : ''
            }
        });

        return response.data.code || response.data;
    } catch (error) {
        throw new Error(`API call failed: ${error}`);
    }
}

// Get language from editor
function getLanguageFromEditor(editor: vscode.TextEditor): string {
    const language = editor.document.languageId;
    const languageMap: { [key: string]: string } = {
        'typescript': 'typescript',
        'javascript': 'javascript',
        'typescriptreact': 'typescript',
        'javascriptreact': 'javascript',
        'python': 'python',
        'java': 'java',
        'csharp': 'csharp',
        'go': 'go',
        'rust': 'rust',
        'php': 'php',
        'ruby': 'ruby'
    };

    return languageMap[language] || 'javascript';
}

// Get editor context
function getEditorContext(editor: vscode.TextEditor): string {
    const document = editor.document;
    const selection = editor.selection;
    
    const beforeSelection = document.getText(
        new vscode.Range(new vscode.Position(0, 0), selection.start)
    );
    
    const afterSelection = document.getText(
        new vscode.Range(selection.end, new vscode.Position(document.lineCount, 0))
    );

    return `Before: ${beforeSelection}\nAfter: ${afterSelection}`;
}

// Provide completion items
function provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
    const completions: vscode.CompletionItem[] = [];

    // Add DreamBuild-specific completions
    const dreamBuildCompletion = new vscode.CompletionItem('DreamBuild', vscode.CompletionItemKind.Snippet);
    dreamBuildCompletion.insertText = new vscode.SnippetString('// DreamBuild AI generated code\n$0');
    dreamBuildCompletion.documentation = new vscode.MarkdownString('Insert DreamBuild AI generated code');
    completions.push(dreamBuildCompletion);

    return completions;
}

// Get webview content for explanations
function getWebviewContent(explanation: string): string {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Code Explanation</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }
        .explanation {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 8px;
            border-left: 4px solid #007bff;
        }
        .header {
            color: #007bff;
            font-weight: bold;
            margin-bottom: 15px;
        }
    </style>
</head>
<body>
    <div class="header">DreamBuild AI Code Explanation</div>
    <div class="explanation">${explanation}</div>
</body>
</html>`;
}

export function deactivate() {
    console.log('DreamBuild extension deactivated');
}
