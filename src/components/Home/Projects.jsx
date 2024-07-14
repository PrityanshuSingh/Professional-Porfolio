import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Container from '../Core/Container';
import Carousel from '../Core/Carousel';
import styles from './styles/Projects.module.css';
import projectData from '../../data/Projects.json';

const domains = [
  'Computer Science',
  'Web Development',
  'UI/UX Design',
  'Machine Learning',
];

const Projects = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <Container
      customStyles={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(19,19,21)',
        borderRadius: '40px',
        marginTop: '50px',
        position: 'relative',
        padding: '0px 24px',
      }}
    >
      <motion.div
        ref={ref}
        className={styles.aboutGrid}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.ProjectsGrid}>
          <h4 className={styles.projectsDomain}>WHAT I'M DOING</h4>
          <div className={styles.domains}>
            {domains.map((domain, index) => (
              <motion.div
                key={index}
                className={styles.domain}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h2>{domain}</h2>
              </motion.div>
            ))}
          </div>

          <h4 className={styles.projectsHeading}>PROJECTS</h4>
          <Carousel projectData={projectData} />
        </div>
      </motion.div>
    </Container>
  );
};

export default Projects;
