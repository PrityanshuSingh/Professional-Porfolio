// components/Core/Image.js
import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/ImageHolder.module.css';

const ImageHolder = ({ src, alt, customStyles }) => {
  return (
    <div className={styles.imageContainer} style={customStyles}>
      <img src={src} alt={alt} className={styles.image} />
    </div>
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  customStyles: PropTypes.object,
};

Image.defaultProps = {
  customStyles: {},
};

export default ImageHolder;
