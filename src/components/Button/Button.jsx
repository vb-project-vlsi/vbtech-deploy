import React from 'react';
import styles from './button.module.css'; // Optional: Import CSS for styling

const Button = ({ label, onClick, type = 'button', disabled = false, onChange}) => {
  return (
    <button 
      type={type} 
      onClick={onClick} 
      disabled={disabled} 
      className={styles.button}
    >
      {label}
    </button>
  );
};

export default Button;
