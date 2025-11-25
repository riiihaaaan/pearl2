import React from 'react';

/**
 * Reusable Button component with pearl theming
 */
const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {
  const baseStyles = 'font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variants = {
    primary: 'bg-accent-blue hover:bg-accent-light text-white border border-accent-blue hover:border-accent-light focus:ring-accent-blue',
    secondary: 'bg-pearl-surface hover:bg-pearl-border text-pearl-primary border border-pearl-border hover:border-accent-blue focus:ring-accent-blue',
    ghost: 'bg-transparent hover:bg-pearl-surface text-pearl-primary border border-transparent hover:border-pearl-border focus:ring-accent-blue'
  };

  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-3 text-base',
    lg: 'px-6 py-4 text-lg'
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
