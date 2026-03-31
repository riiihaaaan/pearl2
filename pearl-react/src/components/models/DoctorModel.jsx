import React from 'react';

/**
 * Placeholder component for a doctor model (future use)
 */
const DoctorModel = ({ className = '' }) => {
  return (
    <div className={`flex items-center justify-center h-48 bg-pearl-100 rounded-xl border border-pearl-border ${className}`}>
      <div className="text-center">
        <div className="text-4xl mb-2">👨‍⚕️</div>
        <p className="text-pearl-text">Doctor Model</p>
        <p className="text-sm text-pearl-muted">Coming soon...</p>
      </div>
    </div>
  );
};

export default DoctorModel;
