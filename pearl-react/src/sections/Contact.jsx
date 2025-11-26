import React from 'react';
import Button from '../components/Button';
import PearlCard from '../components/PearlCard';

/**
 * Contact section
 */
const Contact = ({ className = '', id = 'contact' }) => {
  return (
    <section
      id={id}
      className={`py-24 bg-pearl-bg ${className}`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-pearl-text mb-6">
            Questions & Feedback
          </h2>
          <p className="text-xl text-pearl-muted mb-8">
            Have general questions about PEARL or suggestions for improvement? We're here to listen.
          </p>
        </div>

        <PearlCard className="p-8 md:p-10 shadow-pearl-soft">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-pearl-text mb-3">
                  Name (Optional)
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/50 border border-pearl-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent-iridescent focus:border-accent-iridescent backdrop-blur-sm"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-pearl-text mb-3">
                  Email (Optional)
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/50 border border-pearl-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent-iridescent focus:border-accent-iridescent backdrop-blur-sm"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-pearl-text mb-3">
                Feedback or Question
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 bg-white/50 border border-pearl-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent-iridescent focus:border-accent-iridescent backdrop-blur-sm resize-none"
                placeholder="Share your thoughts about PEARL..."
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full md:w-auto px-8 py-3"
            >
              Send Feedback
            </Button>
          </form>

          <div className="mt-10 pt-8 border-t border-pearl-border text-center">
            <p className="text-sm text-pearl-muted">
              For urgent matters, please contact local healthcare providers or emergency services.
            </p>
          </div>
        </PearlCard>
      </div>
    </section>
  );
};

export default Contact;
