import React, { useRef, useEffect } from 'react';
import { usePearlChat } from '../hooks/usePearlChat';
import ChatLayout from '../components/ChatLayout/ChatLayout';
import ChatCard from '../components/ChatCard/ChatCard';
import CommonQuestions from '../components/CommonQuestions/CommonQuestions';
import PearlCard from '../components/PearlCard/PearlCard';

/**
 * Chat section component with AI conversation interface
 * Shows Common Questions sidebar initially, collapses after first user query
 */
const ChatSection = ({ className = '', id = 'chat' }) => {
  const { messages, isLoading, sendMessage, hasUserQueried, updateHasUserQueried } = usePearlChat();

  // Refs for layout elements
  const gridRef = useRef(null);

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
        <ChatLayout ref={gridRef} className={`hidden lg:grid h-[600px] ${hasUserQueried ? 'expanded' : ''}`}>
          {/* Chat Area */}
          <ChatCard
            messages={messages}
            isLoading={isLoading}
            handleSendMessage={handleSendMessage}
            hasUserQueried={hasUserQueried}
            updateHasUserQueried={updateHasUserQueried}
            className="overflow-hidden shadow-pearl-soft"
          />

          {/* Sidebar with independent scrolling - only show if user hasn't queried yet */}
          {!hasUserQueried && (
            <CommonQuestions
              handleSendMessage={handleSendMessage}
              className="shadow-pearl-soft"
            />
          )}
        </ChatLayout>

        {/* Mobile Layout (full width) */}
        <div className="lg:hidden">
          <ChatCard
            messages={messages}
            isLoading={isLoading}
            handleSendMessage={handleSendMessage}
            hasUserQueried={false}
            updateHasUserQueried={updateHasUserQueried}
            className="overflow-hidden shadow-pearl-soft"
          />

          {/* Show Common Questions below chat on mobile/tablet */}
          <div className="mt-8 space-y-4">
            <div className="max-w-md mx-auto">
              <CommonQuestions
                handleSendMessage={handleSendMessage}
                className="shadow-pearl-soft"
              />
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