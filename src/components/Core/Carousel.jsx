import React, { useState, useEffect } from 'react';
import styles from './styles/Carousel.module.css';
import ArrowButton from './ArrowButton';

const Carousel = ({ projectData, customStyles }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === projectData.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [projectData.length]);

  const handlePaginationClick = (index) => {
    setCurrentIndex(index);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projectData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectData.length - 1 : prevIndex - 1
    );
  };

  const handleArrowButtonClick = () => {
    const projectLink = projectData[currentIndex].projectLink;
    window.open(projectLink, '_blank');
  };

  const isMobile = window.innerWidth < 768; // Adjust based on your breakpoint

  return (
    <div className={styles.carousel} style={customStyles}>
      <div className={styles.card}>
        <a href={projectData[currentIndex].projectLink} target="_blank" rel="noopener noreferrer">
          <img
            src={projectData[currentIndex].image}
            alt={projectData[currentIndex].projectName}
            className={styles.projectImage}
          />
          <div className={styles.overlay}>
            <h3 className={styles.projectTitle}>
              {projectData[currentIndex].projectName}
            </h3>
            <div className={styles.projectType}>
              <p className={styles.projectDescription}>
                <h4>Project Description</h4>
                {projectData[currentIndex].description}
              </p>
              <div className={styles.techStacks}>
                <h4>Tech <br/>Stacks</h4>
                {projectData[currentIndex].techStacks.join(', ')}
              </div>
            </div>
          </div>
        </a>
      </div>

      {!isMobile && (
        <div className={styles.pagination}>
          {projectData.map((_, index) => (
            <span
              key={index}
              className={`${styles.paginationCircle} ${currentIndex === index ? styles.active : ''}`}
              onClick={() => handlePaginationClick(index)}
            />
          ))}
        </div>
      )}

      {isMobile && (
        <div className={styles.arrowButtons}>
          <ArrowButton
            direction="left"
            onClick={handlePrevious}
            customStyles={{ position: 'absolute', width:'10%', height:'10%', backgroundColor:'grey', left: '20px', top: '50%' }}
          />
          <ArrowButton
            direction="right"
            onClick={handleNext}
            customStyles={{ position: 'absolute', width:'10%', height:'10%',backgroundColor:'grey', right: '20px', top: '50%' }}
          />
        </div>
      )}

      <ArrowButton
        direction="right"
        onClick={handleArrowButtonClick}
        customStyles={{ 
            position: 'absolute', 
            bottom: '30px',
            right: '30px', 
            fontSize: '28px' }}
      />
    </div>
  );
};

export default Carousel;
