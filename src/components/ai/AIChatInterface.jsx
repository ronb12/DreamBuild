import React, { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, 
  Bot,
  User,
  Copy,
  ThumbsUp,
  ThumbsDown,
  Loader2,
  Info
} from 'lucide-react';
import { toast } from 'react-hot-toast';

const AIChatInterface = ({ 
  messages, 
  prompt, 
  setPrompt, 
  isGenerating, 
  handleGenerate,
  textareaRef,
  messagesEndRef,
  appExplanation,
  setShowExplanation
}) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleGenerate();
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast.success('Copied to clipboard!');
  };

  const handleFeedback = (messageId, type) => {
    // Implement feedback logic here
    toast.success(`Feedback ${type === 'up' ? 'sent' : 'sent'}`);
  };

  return (
    <div className="flex flex-col h-full w-full max-w-full">
      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={`flex gap-3 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex gap-3 max-w-[80%] min-w-0 ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                {/* Avatar */}
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.type === 'user' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted text-muted-foreground'
                }`}>
                  {message.type === 'user' ? (
                    <User className="h-4 w-4" />
                  ) : (
                    <Bot className="h-4 w-4" />
                  )}
                </div>

                {/* Message Content */}
                <div className={`rounded-2xl px-4 py-3 min-w-0 max-w-full ${
                  message.type === 'user'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-foreground'
                }`}>
                  <div className="whitespace-pre-wrap text-sm break-words overflow-hidden">{message.content}</div>
                  
                  {/* Message Actions */}
                  {message.type === 'assistant' && (
                    <div className="flex items-center gap-2 mt-2">
                      {appExplanation && (
                        <button
                          onClick={() => setShowExplanation(true)}
                          className="p-1 hover:bg-white/10 rounded transition-colors"
                          title="View detailed explanation"
                        >
                          <Info className="h-3 w-3" />
                        </button>
                      )}
                      <button
                        onClick={() => copyToClipboard(message.content)}
                        className="p-1 hover:bg-white/10 rounded transition-colors"
                        title="Copy message"
                      >
                        <Copy className="h-3 w-3" />
                      </button>
                      <button
                        onClick={() => handleFeedback(message.id, 'up')}
                        className="p-1 hover:bg-white/10 rounded transition-colors"
                        title="Good response"
                      >
                        <ThumbsUp className="h-3 w-3" />
                      </button>
                      <button
                        onClick={() => handleFeedback(message.id, 'down')}
                        className="p-1 hover:bg-white/10 rounded transition-colors"
                        title="Poor response"
                      >
                        <ThumbsDown className="h-3 w-3" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {/* Loading indicator */}
        {isGenerating && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex gap-3 justify-start"
          >
            <div className="w-8 h-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center">
              <Bot className="h-4 w-4" />
            </div>
            <div className="bg-muted text-foreground rounded-2xl px-4 py-3">
              <div className="flex items-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin" />
                <span className="text-sm">AI is thinking...</span>
              </div>
            </div>
          </motion.div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-border">
        <div className="flex gap-2">
            <textarea
            ref={textareaRef}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Describe what you want to build..."
            className="flex-1 min-h-[44px] max-h-32 px-4 py-3 bg-background border border-border rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent"
            disabled={isGenerating}
          />
          <button
            onClick={() => {
              handleGenerate();
            }}
            disabled={!prompt.trim() || isGenerating}
            className="px-4 py-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
            data-testid="generate-button"
          >
            {isGenerating ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIChatInterface;
