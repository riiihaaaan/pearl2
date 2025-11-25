import React from 'react';

const PearlCard = React.forwardRef(({ className = '', children, ...props }, ref) => {
  return (
    <div ref={ref} className={`pearl-card ${className}`} tabIndex={props.tabIndex} {...props}>
      {children}
    </div>
  );
});

PearlCard.displayName = 'PearlCard';

export default PearlCard;
