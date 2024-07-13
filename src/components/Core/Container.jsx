import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/Container.module.css';

const Container = ({ children, customStyles, ...props }) => {
  return (
    <div className={styles.container} style={{ ...customStyles }} {...props}>
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node,
  customStyles: PropTypes.object,
};

Container.defaultProps = {
  customStyles: {},
};

export default Container;