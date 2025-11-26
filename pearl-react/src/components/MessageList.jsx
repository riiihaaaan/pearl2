import React, { useEffect, useRef } from 'react';
import ChatBubble from './ChatBubble';

/**
 * Message list component that displays chat messages and auto-scrolls smartly
 */
const MessageList = ({ messages, className = '', isLoading = false, TypingIndicator }) => {
  const containerRef = useRef(null);
  const prevMessageCountRef = useRef(0);

  const scrollToBottom = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const currentCount = messages.length;
    const prevCount = prevMessageCountRef.current;

    // Skip auto-scroll on first mount
    if (prevCount === 0 && currentCount > 0) {
      prevMessageCountRef.current = currentCount;
      return;
    }

    // Only auto-scroll if new messages arrived and user was near bottom
    if (currentCount > prevCount) {
      const container = containerRef.current;
      if (container) {
        const { scrollTop, clientHeight, scrollHeight } = container;
        const distanceFromBottom = scrollHeight - (scrollTop + clientHeight);
        if (distanceFromBottom < 150) {
          scrollToBottom();
        }
      }
    }

    prevMessageCountRef.current = currentCount;
  }, [messages]);

  return (
    <div
      ref={containerRef}
      className={`h-full overflow-y-auto px-6 py-4 space-y-0 ${className}`}
      aria-live="polite"
    >
      {messages.map((message) => (
        <ChatBubble key={message.id} message={message} />
      ))}
      {isLoading && TypingIndicator && <TypingIndicator />}
    </div>
  );
};

export default MessageList;
