import React from 'react';
import { TESTIMONIALS } from '../constants';

/**
 * Testimonials section
 */
const Testimonials = ({ className = '' }) => {
  return (
    <section className={`py-16 bg-pearl-base-100 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-pearl-text-primary mb-4">
            What People Say
          </h2>
          <p className="text-xl text-pearl-text-secondary max-w-3xl mx-auto">
            Early experiences with PEARL from our community
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border border-pearl-border-soft"
            >
              <blockquote className="text-lg text-pearl-text-secondary mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <cite className="text-pearl-text-primary font-medium">
                {testimonial.author}
              </cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
