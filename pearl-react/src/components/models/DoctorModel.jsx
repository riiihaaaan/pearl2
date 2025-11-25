import React from 'react';

/**
 * Placeholder component for a doctor model (future use)
 */
const DoctorModel = ({ className = '' }) => {
  return (
    <div className={`flex items-center justify-center h-48 bg-pearl-base-200 rounded-xl border border-pearl-border-soft ${className}`}>
      <div className="text-center">
        <div className="text-4xl mb-2">👨‍⚕️</div>
        <p className="text-pearl-text-secondary">Doctor Model</p>
        <p className="text-sm text-pearl-text-secondary">Coming soon...</p>
      </div>
    </div>
  );
};

export default DoctorModel;
