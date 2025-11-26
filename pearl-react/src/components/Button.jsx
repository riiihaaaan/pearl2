import React from 'react';

/**
 * Reusable Button component with pearl theming
 */
const Button = React.forwardRef(({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}, ref) => {
  const baseStyles = 'font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 inline-flex items-center justify-center whitespace-normal';

  const variants = {
    primary: 'btn-pearl focus:ring-accent-iridescent border-none',
    secondary: 'pearl-card text-pearl-text border-pearl-border hover:border-accent-iridescent rounded-2xl shadow-pearl-soft focus:ring-accent-iridescent',
    ghost: 'bg-transparent hover:bg-pearl-surface text-pearl-text border border-transparent hover:border-pearl-border rounded-2xl focus:ring-accent-iridescent'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 py-3 text-base',
    lg: 'px-6 py-4 text-lg'
  };

  return (
    <button
      ref={ref}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
