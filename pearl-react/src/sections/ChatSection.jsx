import React, { useRef, useEffect } from 'react';
import MessageList from '../components/MessageList';
import ChatInput from '../components/ChatInput';
import TypingIndicator from '../components/TypingIndicator';
import { usePearlChat } from '../hooks/usePearlChat';
import PearlCard from '../components/PearlCard';

/**
 * Chat section component with AI conversation interface
 * Shows Common Questions sidebar initially, collapses after first user query
 */
const ChatSection = ({ className = '', id = 'chat' }) => {
  const { messages, isLoading, sendMessage, hasUserQueried, updateHasUserQueried } = usePearlChat();

  // Refs for layout elements
  const gridRef = useRef(null);
  const sidebarRef = useRef(null);

  // Wrapper to send message and collapse sidebar on first query (CSS-only transition)
  const handleSendMessage = (text) => {
    sendMessage(text);
    if (!hasUserQueried) {
      // Toggle expanded class; CSS transitions handle the animation
      if (gridRef.current) gridRef.current.classList.add('expanded');
      updateHasUserQueried(true);
    }
  };

  // Ensure layout reflects persisted state on mount
  useEffect(() => {
    if (hasUserQueried && gridRef.current) {
      gridRef.current.classList.add('expanded');
    }
  }, [hasUserQueried]);

  return (
    <section
      id={id}
      className={`min-h-screen bg-pearl-bg py-16 ${className}`}
      style={{ position: 'relative', zIndex: 30 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Layout (two-column grid) */}
        <div ref={gridRef} className={`hidden lg:grid chat-layout-grid h-[600px] ${hasUserQueried ? 'expanded' : ''}`}>
          {/* Chat Area */}
          <PearlCard id="chat-area" className="chat-card overflow-hidden shadow-pearl-soft" role="region" aria-label="Chat with PEARL">
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
          </PearlCard>

          {/* Sidebar with independent scrolling - only show if user hasn't queried yet */}
          {!hasUserQueried && (
            <PearlCard as="aside" ref={sidebarRef} id="common-questions" className="chat-sidebar shadow-pearl-soft" role="complementary" aria-label="Common Questions">
              <h3 className="text-lg font-semibold text-pearl-text">Common Questions</h3>
              <div>
                <PearlCard
                  onClick={() => handleSendMessage("What does 'hypertension' mean?")}
                  className="w-full sidebar-card text-left text-pearl-muted hover:text-pearl-text no-hover"
                  role="button"
                  tabIndex={0}
                >
                  <h3 className="text-lg font-semibold text-pearl-text mb-2 max-w-prose">What does "hypertension" mean?</h3>
                  <p className="text-sm text-pearl-muted leading-relaxed">Understand blood pressure terminology</p>
                </PearlCard>
                <PearlCard
                  onClick={() => handleSendMessage("How should I prepare for a doctor's visit?")}
                  className="w-full sidebar-card text-left text-pearl-muted hover:text-pearl-text no-hover"
                  role="button"
                  tabIndex={0}
                >
                  <h3 className="text-lg font-semibold text-pearl-text mb-2 max-w-prose">How should I prepare for a doctor's visit?</h3>
                  <p className="text-sm text-pearl-muted leading-relaxed">Make the most of your appointment</p>
                </PearlCard>
                <PearlCard
                  onClick={() => handleSendMessage("What are common healthy eating guidelines?")}
                  className="w-full sidebar-card text-left text-pearl-muted hover:text-pearl-text no-hover"
                  role="button"
                  tabIndex={0}
                >
                  <h3 className="text-lg font-semibold text-pearl-text mb-2 max-w-prose">What are common healthy eating guidelines?</h3>
                  <p className="text-sm text-pearl-muted leading-relaxed">Nutrition basics for better health</p>
                </PearlCard>
              </div>

              <PearlCard className="sidebar-card shadow-pearl-soft no-hover">
                <div className="flex items-start space-x-2">
                  <span className="text-accent-iridescent mt-1">⚠️</span>
                  <div>
                    <h3 className="text-lg font-semibold text-pearl-text mb-3 max-w-prose">Safety Reminder</h3>
                    <p className="text-sm text-pearl-muted leading-relaxed">PEARL provides information only. Always consult healthcare professionals for medical advice.</p>
                  </div>
                </div>
              </PearlCard>
            </PearlCard>
          )}
        </div>

        {/* Mobile Layout (full width) */}
        <div className="lg:hidden">
          <PearlCard className="chat-card overflow-hidden shadow-pearl-soft">
            <div className="bg-pearl-surface px-6 py-4 border-b border-pearl-border shrink-0">
              <h2 className="text-xl font-semibold text-pearl-text">Chat with PEARL</h2>
              <p className="text-sm text-pearl-muted">Your AI medical companion</p>
            </div>
            <div className="chat-messages">
              <MessageList messages={messages} isLoading={isLoading} TypingIndicator={TypingIndicator} />
            </div>
            <div className="chat-footer">
              <ChatInput onSendMessage={(msg) => handleSendMessage(msg)} isDisabled={isLoading} />
            </div>
          </PearlCard>

          {/* Show Common Questions below chat on mobile/tablet */}
          <div className="mt-8 space-y-4">
            <div className="max-w-md mx-auto">
              <h3 className="text-lg font-semibold text-pearl-text text-center mb-4">Common Questions</h3>
              <div className="space-y-3">
                <PearlCard
                  onClick={() => handleSendMessage("What does 'hypertension' mean?")}
                  className="w-full p-4 text-left text-pearl-muted hover:text-pearl-text no-hover"
                  role="button"
                  tabIndex={0}
                >
                  <div className="font-semibold text-pearl-text">What does "hypertension" mean?</div>
                  <div className="text-sm text-pearl-muted">Understand blood pressure terminology</div>
                </PearlCard>
                <PearlCard
                  onClick={() => handleSendMessage("How should I prepare for a doctor's visit?")}
                  className="w-full p-4 text-left text-pearl-muted hover:text-pearl-text no-hover"
                  role="button"
                  tabIndex={0}
                >
                  <div className="font-semibold text-pearl-text">How should I prepare for a doctor's visit?</div>
                  <div className="text-sm text-pearl-muted">Make the most of your appointment</div>
                </PearlCard>
                <PearlCard
                  onClick={() => handleSendMessage("What are common healthy eating guidelines?")}
                  className="w-full p-4 text-left text-pearl-muted hover:text-pearl-text no-hover"
                  role="button"
                  tabIndex={0}
                >
                  <div className="font-semibold text-pearl-text">What are common healthy eating guidelines?</div>
                  <div className="text-sm text-pearl-muted">Nutrition basics for better health</div>
                </PearlCard>
              </div>

              <PearlCard className="mt-6 p-4 shadow-pearl-soft no-hover">
                <div className="flex items-start space-x-2">
                  <span className="text-accent-iridescent mt-1">⚠️</span>
                  <div>
                    <div className="font-semibold text-pearl-text">Safety Reminder</div>
                    <div className="text-sm text-pearl-muted">PEARL provides information only. Always consult healthcare professionals for medical advice.</div>
                  </div>
                </div>
              </PearlCard>
            </div>
          </div>
        </div>

        {/* Site-level disclaimer below chat card */}
        <div className="site-disclaimer">
          <p>
            <strong>Important:</strong> PEARL provides general health information only.
            Always consult licensed healthcare professionals for medical advice, diagnosis, or treatment.
            This is not a substitute for professional medical care.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChatSection;
