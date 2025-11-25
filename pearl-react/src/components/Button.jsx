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
    primary: 'bg-gradient-to-r from-pearl-accent via-pearl-accent-soft to-pearl-accent hover:from-pearl-accent-soft hover:via-pearl-accent hover:to-pearl-accent text-white rounded-full shadow-pearl-shadow hover:shadow-pearl-shadow focus:ring-pearl-accent border-none',
    secondary: 'bg-pearl-surface/75 backdrop-blur-sm hover:bg-pearl-surface text-pearl-text-primary border border-pearl-border-soft hover:border-pearl-accent rounded-2xl shadow-pearl-shadow focus:ring-pearl-accent',
    ghost: 'bg-transparent hover:bg-pearl-surface/75 text-pearl-text-primary border border-transparent hover:border-pearl-border-soft rounded-2xl focus:ring-pearl-accent'
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
