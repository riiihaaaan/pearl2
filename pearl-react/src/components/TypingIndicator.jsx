import React from 'react';

/**
 * Typing indicator with three pulsing dots in a small rounded rectangle
 */
const TypingIndicator = ({ className = '' }) => {
  return (
    <div className={`flex mb-6 justify-start ${className}`}>
      <div className="bubble-pearl shadow-pearl-soft max-w-[85%] px-4 py-3">
        <div className="typing-dots">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;
