import React from 'react';
import './Card.css';

const Card = ({ 
  children, 
  className = '', 
  hover = true,
  ...props 
}) => {
  const baseClass = 'card';
  const hoverClass = hover ? 'card-hover' : '';
  const classes = `${baseClass} ${hoverClass} ${className}`.trim();
  
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Card;

