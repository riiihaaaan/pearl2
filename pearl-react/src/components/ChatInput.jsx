import React, { useState, useRef } from 'react';

/**
 * ChatGPT-style pill input component with integrated send button
 */
const ChatInput = ({ onSendMessage, isDisabled = false }) => {
  const [message, setMessage] = useState('');
  const textareaRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (message.trim() && !isDisabled) {
      const success = await onSendMessage(message);
      if (success) {
        setMessage('');
        // Auto-resize after clearing
        if (textareaRef.current) {
          textareaRef.current.style.height = 'auto';
        }
      }
      // Restore focus after message is sent (success or failure)
      setTimeout(() => {
        if (textareaRef.current) {
          textareaRef.current.focus();
        }
      }, 30);
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

    // Auto-resize textarea, max 3 lines (~63px)
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      const scrollHeight = textareaRef.current.scrollHeight;
      const maxHeight = 63; // approx 3 lines: font 15px, line-height 1.4 = ~21px per line
      const newHeight = Math.max(20, Math.min(scrollHeight, maxHeight));
      textareaRef.current.style.height = `${newHeight}px`;
    }
  };

  return (
    <div className="chat-input-pill" role="region" aria-label="Message input">
      {/* Microphone icon placeholder */}
      <button className="mic-btn" aria-label="Voice input (coming soon)">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 1a4 4 0 00-4 4v6a4 4 0 008 0V5a4 4 0 00-4-4z"/>
          <path d="M19 11a7 7 0 01-14 0"/>
        </svg>
      </button>

      <textarea
        ref={textareaRef}
        value={message}
        onChange={handleTextareaChange}
        onKeyDown={handleKeyDown}
        placeholder="Ask anything about health concerns, medical terms, or appointment questions..."
        disabled={isDisabled}
        aria-label="Type your health question here"
        aria-describedby="input-instructions"
      />

      <button
        onClick={handleSubmit}
        disabled={!message.trim() || isDisabled}
        aria-label={message.trim() ? "Send message" : "Type a message to send"}
        aria-describedby="input-instructions"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="22" y1="2" x2="11" y2="13"/>
          <polygon points="22,2 15,22 11,13 2,9"/>
        </svg>
      </button>

      {/* Visually hidden instruction text for screen readers */}
      <div id="input-instructions" className="sr-only">
        Press Enter to send message, Shift+Enter to insert new line.
      </div>
    </div>
  );
};

export default ChatInput;
