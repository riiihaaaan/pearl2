import React from 'react';
import { STEPS } from '../constants';

/**
 * How It Works section
 */
const HowItWorks = ({ className = '', id = 'how-it-works' }) => {
  return (
    <section
      id={id}
      className={`py-24 bg-pearl-bg ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-pearl-text-primary mb-6">
            How It Works
          </h2>
          <p className="text-xl text-pearl-text-secondary max-w-3xl mx-auto mb-8">
            Your personal medical companion is always available to provide clear, actionable health information.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {STEPS.map((step, index) => (
            <React.Fragment key={step.number}>
              <div className="bg-pearl-surface/75 backdrop-blur-sm p-8 rounded-3xl border border-pearl-border-soft shadow-pearl-shadow hover:shadow-pearl-shadow transition-shadow cursor-default flex flex-col items-center text-center max-w-sm">
                <div className="w-16 h-16 bg-gradient-to-br from-pearl-accent to-pearl-accent-soft rounded-full flex items-center justify-center text-white font-bold text-2xl mb-6 shadow-pearl-shadow">
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
                <div className="hidden md:block text-pearl-accent text-3xl px-4">
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
