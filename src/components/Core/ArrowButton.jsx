import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/ArrowButton.module.css';

const ArrowButton = ({ direction, onClick, customStyles }) => {
  return (
    <div className={styles.circularButton} onClick={onClick} style={customStyles}>
      <span className={styles.arrow}>{direction === 'right' ? '>' : '<'}</span>
    </div>
  );
};

ArrowButton.propTypes = {
  direction: PropTypes.oneOf(['left', 'right']).isRequired,
  onClick: PropTypes.func,
  customStyles: PropTypes.object,
};

ArrowButton.defaultProps = {
  onClick: () => {},
  customStyles: {},
};

export default ArrowButton;
