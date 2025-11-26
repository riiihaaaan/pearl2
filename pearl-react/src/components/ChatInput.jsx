import React, { useState, useRef } from 'react';

/**
 * ChatGPT-style pill input component with integrated send button
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
      // Restore focus after message is sent
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

    // Auto-resize textarea
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  return (
    <div className="chat-input-pill" role="region" aria-label="Message input">
      {/* Optional attachment button (placeholder for future feature) */}
      {/* <button className="attachment-btn" aria-label="Add attachment">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15V19a2 2 0 01-2 2H5a2 2 0 01-2-2V15"/>
          <rect x="7" y="9" width="10" height="8" rx="1" ry="1"/>
          <circle cx="9.5" cy="11.5" r="0.5"/>
          <circle cx="14.5" cy="11.5" r="0.5"/>
        </svg>
      </button> */}

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
    </div>
  );
};

export default ChatInput;
