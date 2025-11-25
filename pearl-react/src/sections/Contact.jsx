import React from 'react';
import Button from '../components/Button';

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
          <h2 className="text-4xl font-bold text-pearl-text-primary mb-6">
            Contact & Feedback
          </h2>
          <p className="text-xl text-pearl-text-secondary mb-8">
            Have questions or suggestions? We'd love to hear from you.
          </p>
        </div>

        <div className="bg-pearl-surface/75 backdrop-blur-sm rounded-3xl p-10 md:p-12 border border-pearl-border-soft shadow-pearl-shadow">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-pearl-text-primary mb-3">
                  Name (Optional)
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/70 border border-pearl-border-soft rounded-2xl focus:outline-none focus:ring-2 focus:ring-pearl-accent focus:border-pearl-accent backdrop-blur-sm"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-pearl-text-primary mb-3">
                  Email (Optional)
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/70 border border-pearl-border-soft rounded-2xl focus:outline-none focus:ring-2 focus:ring-pearl-accent focus:border-pearl-accent backdrop-blur-sm"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-pearl-text-primary mb-3">
                Feedback or Question
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 bg-white/70 border border-pearl-border-soft rounded-2xl focus:outline-none focus:ring-2 focus:ring-pearl-accent focus:border-pearl-accent backdrop-blur-sm resize-none"
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

          <div className="mt-10 pt-8 border-t border-pearl-border-soft text-center">
            <p className="text-pearl-text-secondary">
              For urgent matters, please contact local healthcare providers or emergency services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
