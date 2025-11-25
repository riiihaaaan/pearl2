import React from 'react';
import MessageList from '../components/MessageList';
import ChatInput from '../components/ChatInput';
import TypingIndicator from '../components/TypingIndicator';
import { usePearlChat } from '../hooks/usePearlChat';

/**
 * Chat section component with AI conversation interface
 */
const ChatSection = ({ className = '', id = 'chat' }) => {
  const { messages, isLoading, sendMessage } = usePearlChat();

  return (
    <section
      id={id}
      className={`min-h-screen bg-pearl-bg py-16 ${className}`}
      style={{ position: 'relative', zIndex: 30 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Layout (side by side) */}
        <div className="hidden lg:flex gap-8 h-[600px]">
          {/* Chat Area */}
          <div className="flex-1 pearl-card overflow-hidden shadow-pearl-soft">
            <div className="bg-pearl-surface px-6 py-4 border-b border-pearl-border">
              <h2 className="text-xl font-semibold text-pearl-text">Chat with PEARL</h2>
              <p className="text-sm text-pearl-muted">Your AI medical companion</p>
            </div>
            <MessageList messages={messages} />
            {isLoading && <TypingIndicator />}
            <ChatInput onSendMessage={sendMessage} isDisabled={isLoading} />
          </div>

          {/* Side Panel */}
          <div className="w-80 pearl-card shadow-pearl-soft">
            <h3 className="text-lg font-semibold text-pearl-text mb-4">Common Questions</h3>
            <div className="space-y-3">
              <button
                onClick={() => sendMessage("What does 'hypertension' mean?")}
                className="w-full pearl-card text-left text-pearl-muted hover:text-pearl-text no-hover"
                disabled={isLoading}
              >
                <h3 className="text-lg font-semibold text-pearl-text mb-2 max-w-prose">What does "hypertension" mean?</h3>
                <p className="text-sm text-pearl-muted leading-relaxed">Understand blood pressure terminology</p>
              </button>
              <button
                onClick={() => sendMessage("How should I prepare for a doctor's visit?")}
                className="w-full pearl-card text-left text-pearl-muted hover:text-pearl-text no-hover"
                disabled={isLoading}
              >
                <h3 className="text-lg font-semibold text-pearl-text mb-2 max-w-prose">How should I prepare for a doctor's visit?</h3>
                <p className="text-sm text-pearl-muted leading-relaxed">Make the most of your appointment</p>
              </button>
              <button
                onClick={() => sendMessage("What are common healthy eating guidelines?")}
                className="w-full pearl-card text-left text-pearl-muted hover:text-pearl-text no-hover"
                disabled={isLoading}
              >
                <h3 className="text-lg font-semibold text-pearl-text mb-2 max-w-prose">What are common healthy eating guidelines?</h3>
                <p className="text-sm text-pearl-muted leading-relaxed">Nutrition basics for better health</p>
              </button>
            </div>

            <div className="mt-8 pearl-card shadow-pearl-soft no-hover">
              <div className="flex items-start space-x-2">
                <span className="text-accent-iridescent mt-1">⚠️</span>
                <div>
                  <h3 className="text-lg font-semibold text-pearl-text mb-3 max-w-prose">Safety Reminder</h3>
                  <p className="text-sm text-pearl-muted leading-relaxed">PEARL provides information only. Always consult healthcare professionals for medical advice.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout (full width) */}
        <div className="lg:hidden">
          <div className="pearl-card overflow-hidden shadow-pearl-soft">
            <div className="bg-pearl-surface px-6 py-4 border-b border-pearl-border">
              <h2 className="text-xl font-semibold text-pearl-text">Chat with PEARL</h2>
              <p className="text-sm text-pearl-muted">Your AI medical companion</p>
            </div>
            <MessageList messages={messages} />
            {isLoading && <TypingIndicator />}
            <ChatInput onSendMessage={sendMessage} isDisabled={isLoading} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatSection;
