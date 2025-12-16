import React from 'react';
import './FormInput.css';

const FormInput = ({ 
  label, 
  name, 
  type = 'text', 
  value, 
  onChange, 
  placeholder, 
  required = false,
  rows,
  ...props 
}) => {
  const isTextarea = type === 'textarea';

  return (
    <div className="form-group">
      {label && <label htmlFor={name}>{label}</label>}
      {isTextarea ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          rows={rows}
          {...props}
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          {...props}
        />
      )}
    </div>
  );
};

export default FormInput;

