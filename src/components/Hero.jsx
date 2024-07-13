import React, { useEffect, useState } from 'react';
import Container from '../components/Core/Container';
import Button from '../components/Core/Button';
import Card from '../components/Core/Card';
import styles from './styles/Hero.module.css';

const titles = [
  'Web Developer',
  'UI/UX Designer',
  'Frontend Developer',
  'Backend Developer',
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
        width: '95%',
        height: 'auto',
      }}
    >
      <div className={styles.heading}>
        <div className={styles.headingWrapper}>
          <h1 className={styles.typing}>{currentTitle}</h1>
        </div>
        <p className={styles.description}>
          Passionate about creating dynamic and responsive web applications
          using the latest technologies. I specialize in frontend development,
          backend technologies, and UI/UX design.
        </p>
        <Button text="Contact Me" customStyles={{ width: '250px' }} />
      </div>

      <div className={styles.cardGrid}>
        {CardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            content={card.content}
            customStyles={card.customStyles}
          />
        ))}
      </div>
    </Container>
  );
};

export default Hero;
