import React, { useEffect, useState } from 'react';

/**
 * Typing indicator component for when AI is generating a response
 */
const TypingIndicator = ({ className = '' }) => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => (prev.length >= 3 ? '' : prev + '.'));
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`flex mb-4 justify-start ${className}`}>
      <div className="bg-pearl-base-200 text-pearl-text-primary border border-pearl-border-soft rounded-2xl px-6 py-4 max-w-[85%]">
        <div className="flex items-center space-x-2">
          <span className="text-sm">PEARL is thinking</span>
          <span className="text-accent-blue font-bold">{dots}</span>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;
