import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/ArrowButton.module.css';

const ArrowButton = ({ direction, onClick, customStyles }) => {
  let arrowSymbol;
  if (direction === 'right') arrowSymbol = '>';
  else if (direction === 'left') arrowSymbol = '<';
  else if (direction === 'up') arrowSymbol = '^';
  else if (direction === 'down') arrowSymbol = 'v';

  return (
    <div className={styles.circularButton} onClick={onClick} style={customStyles}>
      <span className={styles.arrow}>{arrowSymbol}</span>
    </div>
  );
};

ArrowButton.propTypes = {
  direction: PropTypes.oneOf(['left', 'right', 'up', 'down']).isRequired,
  onClick: PropTypes.func,
  customStyles: PropTypes.object,
};

ArrowButton.defaultProps = {
  onClick: () => {},
  customStyles: {},
};

export default ArrowButton;
