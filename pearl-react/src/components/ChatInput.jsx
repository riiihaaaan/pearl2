import React, { useState, useRef } from 'react';
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
      e.stopPropagation();
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

  // Optional: Re-enable focus if user has interacted, but not on initial mount
  // For now, removed to prevent auto-jumping to chat
  // useEffect(() => {
  //   if (textareaRef.current && !isDisabled) {
  //     textareaRef.current.focus();
  //   }
  // }, [isDisabled]);

  return (
    <div className="flex gap-3 p-6 bg-pearl-bg border-t border-pearl-border-soft">
      <div className="flex-1 relative">
        <textarea
          ref={textareaRef}
          value={message}
          onChange={handleTextareaChange}
          onKeyDown={handleKeyDown}
          placeholder="Describe a health concern, medical term, or appointment worry in your own words..."
          disabled={isDisabled}
          rows={1}
          className="w-full px-5 py-4 bg-pearl-surface/75 backdrop-blur-sm border border-pearl-border rounded-3xl resize-none focus:outline-none focus:ring-2 focus:ring-accent-iridescent focus:border-accent-iridescent placeholder-pearl-muted text-pearl-text min-h-[48px] max-h-32 overflow-y-auto"
        />
      </div>
      <Button
        onClick={handleSubmit}
        variant="primary"
        disabled={!message.trim() || isDisabled}
        className="px-8 py-4 whitespace-nowrap shrink-0"
      >
        Send
      </Button>
    </div>
  );
};

export default ChatInput;
