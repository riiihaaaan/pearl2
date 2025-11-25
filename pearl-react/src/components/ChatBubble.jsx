import React from 'react';
import MarkdownRenderer from './MarkdownRenderer';

/**
 * Chat bubble component for displaying messages
 */
const ChatBubble = ({ message, className = '' }) => {
  const isAssistant = message.role === 'assistant';

  return (
    <div
      className={`flex mb-6 ${
        isAssistant ? 'justify-start' : 'justify-end'
      } ${className}`}
    >
      <div
        className={`max-w-[85%] px-6 py-4 ${
          isAssistant
            ? 'bubble-pearl shadow-pearl-soft'
            : 'bubble-user shadow-pearl-soft ml-auto'
        }`}
      >
        <MarkdownRenderer
          content={message.content}
          className={`${
            isAssistant ? 'prose-invert' : ''
          } child:last:mb-0`}
        />
      </div>
    </div>
  );
};

export default ChatBubble;
