import React from 'react';
import './ChatLayout.css';

export default function ChatLayout({ children, className='' }) {
  return (
    <div className={`chat-layout-grid ${className}`}>
      {children}
    </div>
  );
}
