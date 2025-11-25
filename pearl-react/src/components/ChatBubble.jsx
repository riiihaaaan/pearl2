import React from 'react';
import MarkdownRenderer from './MarkdownRenderer';

/**
 * Chat bubble component for displaying messages
 */
const ChatBubble = ({ message, className = '' }) => {
  const isAssistant = message.role === 'assistant';

  return (
    <div
      className={`flex mb-4 ${
        isAssistant ? 'justify-start' : 'justify-end'
      } ${className}`}
    >
      <div
        className={`max-w-[85%] rounded-2xl px-6 py-4 ${
          isAssistant
            ? 'bg-pearl-base-200 text-pearl-text-primary border border-pearl-border-soft'
            : 'bg-accent-blue text-white ml-auto'
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
