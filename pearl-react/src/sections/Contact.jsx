import React from 'react';

/**
 * Contact section
 */
const Contact = ({ className = '', id = 'contact' }) => {
  return (
    <section
      id={id}
      className={`py-16 bg-white ${className}`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-pearl-text-primary mb-4">
            Contact & Feedback
          </h2>
          <p className="text-xl text-pearl-text-secondary">
            Have questions or suggestions? We'd love to hear from you.
          </p>
        </div>

        <div className="bg-pearl-base-100 rounded-2xl p-8 md:p-12 border border-pearl-border-soft">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-pearl-text-primary mb-2">
                  Name (Optional)
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white border border-pearl-border-soft rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-accent-blue"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-pearl-text-primary mb-2">
                  Email (Optional)
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white border border-pearl-border-soft rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-accent-blue"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-pearl-text-primary mb-2">
                Feedback or Question
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 bg-white border border-pearl-border-soft rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-accent-blue resize-none"
                placeholder="Share your thoughts about PEARL..."
              />
            </div>

            <button
              type="submit"
              className="w-full md:w-auto px-8 py-3 bg-accent-blue text-white font-medium rounded-lg hover:bg-accent-blueSoft transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2"
            >
              Send Feedback
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-pearl-border-soft text-center">
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
