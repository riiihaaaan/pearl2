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
      className={`min-h-screen bg-pearl-background py-16 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Layout (side by side) */}
        <div className="hidden lg:flex gap-8 h-[600px]">
          {/* Chat Area */}
          <div className="flex-1 bg-white rounded-2xl border border-pearl-border overflow-hidden shadow-lg">
            <div className="bg-pearl-surface px-6 py-4 border-b border-pearl-border">
              <h2 className="text-xl font-semibold text-pearl-primary">Chat with PEARL</h2>
              <p className="text-sm text-pearl-secondary">Your AI medical companion</p>
            </div>
            <MessageList messages={messages} />
            {isLoading && <TypingIndicator />}
            <ChatInput onSendMessage={sendMessage} isDisabled={isLoading} />
          </div>

          {/* Side Panel */}
          <div className="w-80 bg-pearl-surface rounded-2xl border border-pearl-border p-6">
            <h3 className="text-lg font-semibold text-pearl-primary mb-4">Common Questions</h3>
            <div className="space-y-3">
              <button
                onClick={() => sendMessage("What does 'hypertension' mean?")}
                className="w-full text-left p-3 bg-white rounded-lg hover:bg-pearl-border transition-colors border border-pearl-border text-pearl-secondary hover:text-pearl-primary"
                disabled={isLoading}
              >
                What does "hypertension" mean?
              </button>
              <button
                onClick={() => sendMessage("How should I prepare for a doctor's visit?")}
                className="w-full text-left p-3 bg-white rounded-lg hover:bg-pearl-border transition-colors border border-pearl-border text-pearl-secondary hover:text-pearl-primary"
                disabled={isLoading}
              >
                How should I prepare for a doctor's visit?
              </button>
              <button
                onClick={() => sendMessage("What are common healthy eating guidelines?")}
                className="w-full text-left p-3 bg-white rounded-lg hover:bg-pearl-border transition-colors border border-pearl-border text-pearl-secondary hover:text-pearl-primary"
                disabled={isLoading}
              >
                What are common healthy eating guidelines?
              </button>
            </div>

            <div className="mt-8 p-4 bg-accent-light rounded-lg border border-accent-blue">
              <div className="flex items-start space-x-2">
                <span className="text-accent-blue mt-1">⚠️</span>
                <div>
                  <p className="text-sm font-medium text-pearl-primary mb-1">Safety Reminder</p>
                  <p className="text-xs text-pearl-secondary">PEARL provides information only. Always consult healthcare professionals for medical advice.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout (full width) */}
        <div className="lg:hidden">
          <div className="bg-white rounded-2xl border border-pearl-border overflow-hidden shadow-lg">
            <div className="bg-pearl-surface px-6 py-4 border-b border-pearl-border">
              <h2 className="text-xl font-semibold text-pearl-primary">Chat with PEARL</h2>
              <p className="text-sm text-pearl-secondary">Your AI medical companion</p>
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
