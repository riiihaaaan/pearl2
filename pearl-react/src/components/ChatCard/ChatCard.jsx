import React from 'react';
import './ChatCard.css';
import MessageList from '../MessageList';
import ChatInput from '../ChatInput/ChatInput';
import TypingIndicator from '../TypingIndicator';

export default function ChatCard({
  messages,
  isLoading,
  handleSendMessage,
  hasUserQueried,
  updateHasUserQueried,
  className = '',
}) {
  return (
    <section className={`chat-card ${className}`} role="region" aria-label="Chat area">
      <div className="bg-pearl-surface px-6 py-4 border-b border-pearl-border shrink-0">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-pearl-text">Chat with PEARL</h2>
            <p className="text-sm text-pearl-muted">Your AI medical companion</p>
          </div>
          {/* Show suggestions button when sidebar is collapsed */}
          {hasUserQueried && (
            <button
              onClick={() => updateHasUserQueried(false)}
              className="px-4 py-2 text-sm font-medium text-pearl-text bg-white/80 border border-pearl-border rounded-lg hover:bg-white/90 transition-colors"
              aria-label="Show common questions suggestions"
              aria-pressed={!hasUserQueried}
            >
              Show suggestions
            </button>
          )}
        </div>
      </div>
      <div className="chat-messages">
        <MessageList messages={messages} isLoading={isLoading} TypingIndicator={TypingIndicator} />
      </div>
      <div className="chat-footer">
        <ChatInput onSendMessage={(msg) => handleSendMessage(msg)} isDisabled={isLoading} />
      </div>
    </section>
  );
}