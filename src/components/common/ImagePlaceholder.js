import React from 'react';
import './ImagePlaceholder.css';

const ImagePlaceholder = ({ 
  text, 
  size = 'large', 
  width = 400, 
  height = 500,
  shape = 'rect'
}) => {
  const isSmall = size === 'small';
  const isCircle = shape === 'circle';
  const viewBox = isCircle ? '0 0 200 200' : `0 0 ${width} ${height}`;
  const className = isSmall ? 'image-placeholder-small' : 'image-placeholder';

  if (isCircle) {
    return (
      <div className={className}>
        <svg width="100%" height="100%" viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="80" fill="#e0e0e0"/>
          <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fill="#999" fontSize="14">
            {text}
          </text>
        </svg>
      </div>
    );
  }

  return (
    <div className={className}>
      <svg width="100%" height="100%" viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width={width} height={height} fill="#f0f0f0"/>
        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fill="#999" fontSize="18">
          {text}
        </text>
      </svg>
    </div>
  );
};

export default ImagePlaceholder;

