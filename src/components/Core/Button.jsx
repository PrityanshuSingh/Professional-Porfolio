import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/Button.module.css';
import ArrowButton from './ArrowButton';

const Button = ({ text, onClick, customStyles }) => {
  return (
    <button className={styles.button} onClick={onClick} style={customStyles}>
      <div className={styles.buttonContent}>
        <span className={styles.buttonText}>{text}</span>
        <div className={styles.arrowButtonContainer}>
        <ArrowButton 
          direction="right" 
          onClick={onClick} 
          customStyles={{ position: 'absolute', bottom: '10px', right: '10px' }} 
        />
      </div>
      </div>
      
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  customStyles: PropTypes.object,
};

Button.defaultProps = {
  onClick: () => {},
  customStyles: {},
};

export default Button;
