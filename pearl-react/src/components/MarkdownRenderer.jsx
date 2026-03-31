import React from 'react';
import ReactMarkdown from 'react-markdown';

/**
 * Component to render markdown content with pearl theming
 */
const MarkdownRenderer = ({ content, className = '', tone = 'assistant' }) => {
  const isUserTone = tone === 'user';

  const subtleTextClass = isUserTone ? 'text-white/90' : 'text-pearl-muted';
  const strongClass = isUserTone ? 'text-white font-semibold' : 'text-pearl-text font-semibold';
  const bulletClass = isUserTone ? 'text-white/95' : 'text-accent-iridescent';
  const hrClass = isUserTone ? 'border-white/30' : 'border-pearl-border';
  const blockCodeClass = isUserTone
    ? 'bg-white/10 border-white/20 text-white/95'
    : 'bg-pearl-100 border-pearl-border text-pearl-text';

  return (
    <div className={`prose prose-base max-w-none ${className}`}>
      <ReactMarkdown
        components={{
          p: ({ children }) => (
            <p className={`mb-4 leading-relaxed last:mb-0 ${subtleTextClass}`}>
              {children}
            </p>
          ),
          strong: ({ children }) => (
            <strong className={strongClass}>
              {children}
            </strong>
          ),
          em: ({ children }) => (
            <em className={`italic ${subtleTextClass}`}>
              {children}
            </em>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className={isUserTone ? 'text-white underline decoration-white/60 underline-offset-2' : 'text-accent-iridescent underline decoration-accent-iridescent/60 underline-offset-2'}
            >
              {children}
            </a>
          ),
          ul: ({ children }) => (
            <ul className="mb-4 pl-6 space-y-2">
              {children}
            </ul>
          ),
          li: ({ children }) => (
            <li className={`leading-relaxed ${subtleTextClass}`}>
              <span className={`mr-2 ${bulletClass}`}>•</span>
              {children}
            </li>
          ),
          hr: () => (
            <hr className={`my-6 ${hrClass}`} />
          ),
          code: ({ inline, className, children, ...props }) => {
            return !inline ? (
              <pre className={`p-3 rounded-md overflow-x-auto text-sm border ${blockCodeClass}`}>
                <code className={className} {...props}>
                  {children}
                </code>
              </pre>
            ) : (
              <code className={`px-1.5 py-0.5 rounded text-sm font-mono border ${blockCodeClass}`} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
