import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Container from '../Core/Container';
import Button from '../Core/Button';
import Card from '../Core/Card';
import { Link as ScrollLink } from 'react-scroll';
import styles from './styles/Hero.module.css';

const titles = [
  'Web Developer',
  'UI/UX Designer',
  'Frontend Developer',
  'Backend Developer',
  'MERN Stack Developer',
  'React Developer',
  'Node.js Developer',
  'Python Developer',
  'C/C++ Developer',
  'Tech Enthusiast',
];

const CardData = [
  {
    title: 'Languages & Concepts',
    content: 'Python, Java, C/C++, MySQL, JavaScript, HTML, XML, CSS, DSA, OS, Database, Cybersecurity, UI/UX, AI/ML, Wireframing',
    customStyles: { backgroundColor: 'rgb(50, 50, 52, 0.5)', backDropFilter: 'blur(10px)' },
  },
  {
    title: 'Technologies and Toolsets',
    content: 'React, Node.js, Express, MongoDB, Prisma, Material UI, Bootstrap, Git/Github, Docker, Postman, Figma, Canva',
    customStyles: { backgroundColor: 'rgb(50, 50, 52, 0.5)', backDropFilter: 'blur(10px)' },
  },
];

const Hero = () => {
  const [currentTitle, setCurrentTitle] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    const title = titles[titleIndex];
    const typingSpeed = isDeleting ? 50 : 150;

    const interval = setInterval(() => {
      if (isDeleting) {
        setCurrentTitle(title.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else {
        setCurrentTitle(title.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }

      if (!isDeleting && charIndex === title.length) {
        setIsDeleting(true);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTitleIndex((titleIndex + 1) % titles.length);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [charIndex, isDeleting, titleIndex]);

  return (
    <Container
      customStyles={{
        alignItems: 'center',
        backgroundColor: 'rgba(19,19,21)',
        borderRadius: '40px',
        display: 'flex',
        fontSize: '42px',
        flexDirection: 'column',
        gap: '64px',
        justifyContent: 'center',
        padding: '100px 24px 24px',
        position: 'relative',
        height: 'auto',
      }}
    >
      <div ref={ref} className={styles.heading}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={inView ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.5 }}
        >
          <div className={styles.headingWrapper}>
            <h1 className={styles.typing}>{currentTitle}</h1>
          </div>
          <p className={styles.description}>
            Passionate about creating dynamic and responsive web applications
            using the latest technologies. I specialize in frontend development,
            backend technologies, and UI/UX design.
          </p>
          <ScrollLink to="footer" smooth={true} duration={500}>
            <Button text="Contact Me" customStyles={{ width: '250px' }} />
          </ScrollLink>
        </motion.div>
      </div>

      <div className={styles.cardGrid}>
        {CardData.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card
              title={card.title}
              content={card.content}
              customStyles={card.customStyles}
            />
          </motion.div>
        ))}
      </div>
    </Container>
  );
};

export default Hero;
