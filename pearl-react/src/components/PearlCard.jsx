import React from 'react';

const PearlCard = React.forwardRef((props, ref) => {
  const {
    className = '',
    children,
    title,
    short,
    long,
    iconPath,
    alt,
    size = 'default',
    onClick,
    role,
    tabIndex,
    as,
    ...rest
  } = props;

  const handleKeyDown = (e) => {
    if (!onClick) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick(e);
    }
  };

  // If children are provided, render them (backwards compatible)
  const hasChildren = Boolean(children);

  const Component = as || 'div';

  return (
    <Component
      ref={ref}
      className={`pearl-card ${className}`}
      onClick={onClick}
      role={role || (onClick ? 'button' : undefined)}
      tabIndex={tabIndex ?? (onClick ? 0 : undefined)}
      onKeyDown={handleKeyDown}
      aria-pressed={onClick ? false : undefined}
      {...rest}
    >
      {hasChildren ? (
        children
      ) : (
        <div className={`pearl-card-inner size-${size}`}>
          {iconPath && (
            <img src={iconPath} alt={alt || title} className="icon" />
          )}
          {title && <h3>{title}</h3>}
          {short && <p className="short">{short}</p>}
          {long && <p className="long">{long}</p>}
        </div>
      )}
    </Component>
  );
});

PearlCard.displayName = 'PearlCard';

export default PearlCard;
