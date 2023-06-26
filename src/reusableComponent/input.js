import React from 'react';
import './style.css';

const ReusableInputField = ({ label, value, onChange, name, placeholder, required, type }) => {
  return (
    <div className="input-field-container">
      <label>{label}</label>
      <input
        className="input-field"
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default ReusableInputField;