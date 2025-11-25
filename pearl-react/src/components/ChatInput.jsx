import React, { useState, useRef, useEffect } from 'react';
import Button from './Button';

/**
 * Chat input component with textarea and send button
 */
const ChatInput = ({ onSendMessage, isDisabled = false }) => {
  const [message, setMessage] = useState('');
  const textareaRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() && !isDisabled) {
      onSendMessage(message);
      setMessage('');
      // Auto-resize after clearing
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const handleTextareaChange = (e) => {
    setMessage(e.target.value);

    // Auto-resize textarea
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  // Focus on mount
  useEffect(() => {
    if (textareaRef.current && !isDisabled) {
      textareaRef.current.focus();
    }
  }, [isDisabled]);

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 p-6 bg-pearl-bg border-t border-pearl-border-soft">
      <div className="flex-1 relative">
        <textarea
          ref={textareaRef}
          value={message}
          onChange={handleTextareaChange}
          onKeyDown={handleKeyDown}
          placeholder="Ask PEARL about health questions, medical terms, or prepare for your doctor's visit..."
          disabled={isDisabled}
          rows={1}
          className="w-full px-5 py-4 bg-pearl-surface/75 backdrop-blur-sm border border-pearl-border-soft rounded-3xl resize-none focus:outline-none focus:ring-2 focus:ring-pearl-accent focus:border-pearl-accent placeholder-pearl-text-secondary text-pearl-text-primary min-h-[48px] max-h-32 overflow-y-auto"
        />
      </div>
      <Button
        type="submit"
        variant="primary"
        disabled={!message.trim() || isDisabled}
        className="px-8 py-4 whitespace-nowrap shrink-0"
      >
        Send
      </Button>
    </form>
  );
};

export default ChatInput;
