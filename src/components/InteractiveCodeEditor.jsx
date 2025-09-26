import React, { useState, useEffect } from 'react';
import { Play, RotateCcw, CheckCircle, XCircle, Lightbulb } from 'lucide-react';

const InteractiveCodeEditor = ({ 
  initialCode = '', 
  expectedOutput = '', 
  instructions = '',
  hints = [],
  onComplete = () => {},
  language = 'javascript'
}) => {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const [currentHint, setCurrentHint] = useState(0);
  const [executionTime, setExecutionTime] = useState(0);

  const executeCode = async () => {
    setIsRunning(true);
    const startTime = Date.now();
    
    try {
      // Create a safe execution environment
      const result = await new Promise((resolve, reject) => {
        try {
          // For JavaScript, we can use eval in a controlled way
          if (language === 'javascript') {
            // Create a sandboxed environment
            const func = new Function(`
              // Safe execution environment
              ${code}
            `);
            const result = func();
            resolve(result);
          } else {
            resolve('Language not supported yet');
          }
        } catch (error) {
          reject(error);
        }
      });
      
      const endTime = Date.now();
      setExecutionTime(endTime - startTime);
      
      setOutput(String(result));
      
      // Check if output matches expected result
      if (expectedOutput && String(result).trim() === expectedOutput.trim()) {
        setIsCorrect(true);
        onComplete(true);
      } else {
        setIsCorrect(false);
      }
    } catch (error) {
      setOutput(`Error: ${error.message}`);
      setIsCorrect(false);
    } finally {
      setIsRunning(false);
    }
  };

  const resetCode = () => {
    setCode(initialCode);
    setOutput('');
    setIsCorrect(null);
    setShowHint(false);
    setCurrentHint(0);
  };

  const showNextHint = () => {
    if (currentHint < hints.length - 1) {
      setCurrentHint(currentHint + 1);
    } else {
      setShowHint(false);
    }
  };

  const getLanguageClass = () => {
    switch (language) {
      case 'javascript': return 'language-javascript';
      case 'python': return 'language-python';
      case 'html': return 'language-html';
      case 'css': return 'language-css';
      default: return 'language-javascript';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-gray-800 text-white p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Interactive Code Editor</h3>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-300">{language.toUpperCase()}</span>
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          </div>
        </div>
      </div>

      {instructions && (
        <div className="p-4 bg-blue-50 border-b">
          <div className="flex items-start gap-2">
            <Lightbulb className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Instructions</h4>
              <p className="text-gray-700">{instructions}</p>
            </div>
          </div>
        </div>
      )}

      <div className="p-4">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Your Code:
          </label>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full h-64 p-4 border border-gray-300 rounded-lg font-mono text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Write your code here..."
            spellCheck={false}
          />
        </div>

        <div className="flex items-center gap-4 mb-4">
          <button
            onClick={executeCode}
            disabled={isRunning}
            className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Play className="h-4 w-4" />
            {isRunning ? 'Running...' : 'Run Code'}
          </button>

          <button
            onClick={resetCode}
            className="flex items-center gap-2 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
          >
            <RotateCcw className="h-4 w-4" />
            Reset
          </button>

          {hints.length > 0 && (
            <button
              onClick={() => setShowHint(!showHint)}
              className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              <Lightbulb className="h-4 w-4" />
              {showHint ? 'Hide Hint' : 'Show Hint'}
            </button>
          )}
        </div>

        {showHint && hints.length > 0 && (
          <div className="mb-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <div className="flex items-start gap-2">
              <Lightbulb className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <h4 className="font-medium text-gray-900 mb-1">Hint {currentHint + 1}:</h4>
                <p className="text-gray-700">{hints[currentHint]}</p>
                {currentHint < hints.length - 1 && (
                  <button
                    onClick={showNextHint}
                    className="mt-2 text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    Next Hint →
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {output && (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Output:
            </label>
            <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
              <pre>{output}</pre>
            </div>
            {executionTime > 0 && (
              <p className="text-sm text-gray-500 mt-2">
                Execution time: {executionTime}ms
              </p>
            )}
          </div>
        )}

        {isCorrect !== null && (
          <div className={`p-4 rounded-lg flex items-center gap-2 ${
            isCorrect ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
          }`}>
            {isCorrect ? (
              <CheckCircle className="h-5 w-5" />
            ) : (
              <XCircle className="h-5 w-5" />
            )}
            <span className="font-medium">
              {isCorrect ? 'Correct! Well done!' : 'Not quite right. Try again!'}
            </span>
          </div>
        )}

        {expectedOutput && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-2">Expected Output:</h4>
            <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
              <pre>{expectedOutput}</pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InteractiveCodeEditor;

