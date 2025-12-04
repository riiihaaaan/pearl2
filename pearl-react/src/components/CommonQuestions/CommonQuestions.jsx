import React from 'react';
import './CommonQuestions.css';
import PearlCard from '../PearlCard/PearlCard';

export default function CommonQuestions({ handleSendMessage, className = '' }) {
  return (
    <aside className={`chat-sidebar ${className}`} role="complementary" aria-label="Common Questions">
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
    </aside>
  );
}