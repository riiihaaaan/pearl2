import React from 'react';
import { STEPS } from '../constants';

/**
 * How It Works section
 */
const HowItWorks = ({ className = '', id = 'how-it-works' }) => {
  return (
    <section
      id={id}
      className={`py-16 bg-pearl-base-100 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-pearl-text-primary mb-4">
            How It Works
          </h2>
          <p className="text-xl text-pearl-text-secondary max-w-3xl mx-auto">
            Your personal medical companion is always available to provide clear, actionable health information.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {STEPS.map((step, index) => (
            <React.Fragment key={step.number}>
              <div className="flex flex-col items-center text-center max-w-sm">
                <div className="w-16 h-16 bg-accent-blue rounded-full flex items-center justify-center text-white font-bold text-2xl mb-6">
                  {step.number}
                </div>
                <h3 className="text-2xl font-semibold text-pearl-text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-pearl-text-secondary">
                  {step.description}
                </p>
              </div>
              {index < STEPS.length - 1 && (
                <div className="hidden md:block text-accent-blue text-2xl px-4">
                  →
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
