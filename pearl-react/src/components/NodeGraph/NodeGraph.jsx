import React from 'react';
import './NodeGraph.css';

export default function NodeGraph({ children, className='' }) {
  return (
    <div className={`node-graph ${className}`}>
      {children}
    </div>
  );
}
