import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './styles/Carousel.module.css';
import ArrowButton from './ArrowButton';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className={styles.carousel}>
      <ArrowButton direction="left" onClick={handlePrevious} />
      <div className={styles.carouselItem}>{items[currentIndex]}</div>
      <ArrowButton direction="right" onClick={handleNext} />
    </div>
  );
};

Carousel.propTypes = {
  items: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default Carousel;
