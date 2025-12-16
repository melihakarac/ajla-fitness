import React from 'react';
import './Grid.css';

const Grid = ({ 
  children, 
  className = '',
  minWidth = '300px',
  ...props 
}) => {
  const classes = `grid ${className}`.trim();
  const style = { '--grid-min-width': minWidth };
  
  return (
    <div className={classes} style={style} {...props}>
      {children}
    </div>
  );
};

export default Grid;

