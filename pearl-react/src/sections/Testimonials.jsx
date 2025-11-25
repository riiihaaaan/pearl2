import React from 'react';
import { TESTIMONIALS } from '../constants';
import { useStaggeredAnimation, useScrollAnimation } from '../hooks/useScrollAnimation';

/**
 * Testimonials section
 */
const Testimonials = ({ className = '' }) => {
  const staggeredRef = useStaggeredAnimation(3, 0.15); // 3 testimonials, 0.15s stagger

  return (
    <section className={`py-24 bg-pearl-bg ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-pearl-text-primary mb-6">
            What People Say
          </h2>
          <p className="text-xl text-pearl-text-secondary max-w-3xl mx-auto mb-8">
            Early experiences with PEARL from our community
          </p>
        </div>

        <div ref={staggeredRef} className="grid md:grid-cols-3 gap-10">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={index}
              className="bg-pearl-surface/75 backdrop-blur-sm p-8 rounded-3xl shadow-pearl-shadow border border-pearl-border-soft hover:shadow-pearl-shadow transition-shadow cursor-default"
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
