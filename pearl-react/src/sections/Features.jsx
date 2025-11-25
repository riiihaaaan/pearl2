import React from 'react';
import { FEATURES } from '../constants';
import AnimatedCounter from '../components/AnimatedCounter';

/**
 * Features section showcasing what PEARL can do
 */
const Features = ({ className = '', id = 'features' }) => {
  return (
    <section
      id={id}
      className={`py-16 bg-white ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-pearl-text-primary mb-4">
            How PEARL Helps You
          </h2>
          <p className="text-xl text-pearl-text-secondary max-w-3xl mx-auto">
            Get clear, actionable information about your health without overwhelming jargon.
            PEARL provides helpful explanations and preparation tips for your medical journey.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {FEATURES.map((feature, index) => (
            <div
              key={index}
              className="bg-pearl-base-100 p-6 rounded-xl border border-pearl-border-soft hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-pearl-text-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-pearl-text-secondary">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-3 gap-8">
          <div className="text-center">
            <AnimatedCounter targetValue={100} suffix="%" className="text-4xl" />
            <p className="text-pearl-text-secondary mt-2">Privacy Focused</p>
          </div>
          <div className="text-center">
            <AnimatedCounter targetValue={0} suffix=" Cloud" className="text-4xl" />
            <p className="text-pearl-text-secondary mt-2">Cloud Usage</p>
          </div>
          <div className="text-center">
            <AnimatedCounter targetValue={24} suffix="/7" className="text-4xl" />
            <p className="text-pearl-text-secondary mt-2">Local Access</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
