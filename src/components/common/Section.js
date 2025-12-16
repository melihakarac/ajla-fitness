import React from 'react';
import './Section.css';

const Section = ({ 
  id, 
  className = '', 
  title, 
  subtitle, 
  children 
}) => {
  return (
    <section id={id} className={`section ${className}`.trim()}>
      {title && (
        <div className="section-header">
          <h2 className="section-title">{title}</h2>
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </div>
      )}
      {children}
    </section>
  );
};

export default Section;

