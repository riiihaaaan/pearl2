import React, { useEffect, useRef } from 'react';
import ChatBubble from './ChatBubble';

/**
 * Message list component that displays chat messages and auto-scrolls
 */
const MessageList = ({ messages, className = '' }) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className={`flex-1 overflow-y-auto px-6 py-4 space-y-0 ${className}`}>
      {messages.map((message) => (
        <ChatBubble key={message.id} message={message} />
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default MessageList;
