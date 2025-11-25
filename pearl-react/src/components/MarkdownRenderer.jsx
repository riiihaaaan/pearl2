import React from 'react';
import ReactMarkdown from 'react-markdown';

/**
 * Component to render markdown content with pearl theming
 */
const MarkdownRenderer = ({ content, className = '' }) => {
  return (
    <div className={`prose prose-sm max-w-none ${className}`}>
      <ReactMarkdown
        components={{
          p: ({ children }) => (
            <p className="mb-3 text-pearl-text-secondary leading-relaxed last:mb-0">
              {children}
            </p>
          ),
          strong: ({ children }) => (
            <strong className="font-semibold text-pearl-text-primary">
              {children}
            </strong>
          ),
          em: ({ children }) => (
            <em className="italic text-pearl-text-secondary">
              {children}
            </em>
          ),
          ul: ({ children }) => (
            <ul className="mb-3 pl-6 space-y-1">
              {children}
            </ul>
          ),
          li: ({ children }) => (
            <li className="text-pearl-text-secondary leading-relaxed">
              <span className="text-accent-blue mr-2">•</span>
              {children}
            </li>
          ),
          hr: () => (
            <hr className="my-6 border-pearl-border-soft" />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
