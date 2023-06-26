import React from 'react';
import './style.css';

const ReusableButton = ({ onClick, children }) => {
  return (
    <button className="reusable-button" onClick={onClick}>
      {children}
    </button>
  );
};

export default ReusableButton;