import React from 'react';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { Hero, About, Projects } from '../../components';

function Home() {

  const [ref, inView] = useInView({ threshold: 0.2 });
  return (
    <>
      <Element name="hero">
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{ perspective: 1000 }}
        >
          <Hero />
        </motion.div>
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="projects">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -10, scale: 0.5 }}
          animate={ inView ? {opacity: 1, y: 0, rotate: 0, scale: 1 } : { opacity: 0, y: -10, scale: 0.5 } }
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{ perspective: 1000 }}
        >
          <Projects />
        </motion.div>
      </Element>
    </>
  );
}

export default Home;
