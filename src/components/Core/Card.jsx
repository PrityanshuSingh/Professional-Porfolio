import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/Card.module.css';
import ArrowButton from './ArrowButton';

const Card = ({ title, content, image, customStyles }) => {
  const contentItems = content.split(',').map(item => item.trim());

  return (
    <div className={styles.card} style={customStyles}>
      {image && <img src={image} alt={title} className={styles.cardImage} />}
      <div className={styles.cardContent}>
        
        <div className={styles.contentContainer}>
          {contentItems.map((item, index) => (
            <div key={index} className={styles.contentItem}>
              {item}
            </div>
          ))}
        </div>
        <h2 className={styles.cardTitle}>{title}</h2>
      </div>
      <div className={styles.arrowButtonContainer}>
        <ArrowButton 
          direction="right" 
          onClick={() => {}} 
          customStyles={{ position: 'absolute', bottom: '10px', right: '10px' }} 
        />
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  image: PropTypes.string,
  customStyles: PropTypes.object,
};

Card.defaultProps = {
  image: null,
  customStyles: {},
};

export default Card;
