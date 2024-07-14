import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Container from '../../components/Core/Container';
import styles from './styles/Footer.module.css';
import { FaLinkedin, FaGithub, FaInstagram, FaLink, FaFigma } from 'react-icons/fa';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import ArrowButton from '../../components/Core/ArrowButton';

const links = [
  {
    href: "https://linkedin.com/in/prityanshu-singh",
    icon: <FaLinkedin style={{ fontSize: '1.5rem', marginRight: '5px' }} />,
    label: "LinkedIn"
  },
  {
    href: "https://github.com/PrityanshuSingh",
    icon: <FaGithub style={{ fontSize: '1.5rem', marginRight: '5px' }} />,
    label: "GitHub"
  },
  {
    href: "https://www.instagram.com/prityanshu_singh?igsh=MXgzbzUzZWR6dTk2aw==",
    icon: <FaInstagram style={{ fontSize: '1.5rem', marginRight: '5px' }} />,
    label: "Instagram"
  },
  {
    href: "https://linktr.ee/prityanshusingh",
    icon: <FaLink style={{ fontSize: '1.5rem', marginRight: '5px' }} />,
    label: "Linktree"
  },
  {
    href: "https://www.figma.com/design/HHOFtWQXsyTxzqYOn6BAgw/AgriVision-App-Design?node-id=0-1&t=aYX1dkAgIRC1QXRu-1",
    icon: <FaFigma style={{ fontSize: '1.5rem', marginRight: '5px' }} />,
    label: "Figma"
  }
];

const Footer = () => {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <Container
      customStyles={{
        alignItems: 'center',
        backgroundColor: 'rgba(19,19,21)',
        borderRadius: '40px 40px 0 0',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <motion.h4
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className={styles.footerHeading}
      >
        CONNECT WITH ME
      </motion.h4>
      <div className={styles.links}>
        {links.map((link, index) => (
          <motion.a
            key={index}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className={styles.link}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {link.icon}
            <span>{link.label}</span>
          </motion.a>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className={styles.details}
      >
        <p className={styles.detail}>Bhubaneswar, India</p>
        <p className={styles.detail}>+91 8279420073</p>
        <p className={styles.detail}>prityanshusingh2003@gmail.com</p>
      </motion.div>

      <motion.nav
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className={styles.navigation}
      >
        <ScrollLink to="about" smooth={true} duration={500} className={styles.navLink}>About</ScrollLink>
        <ScrollLink to="projects" smooth={true} duration={500} className={styles.navLink}>Projects</ScrollLink>
        <ScrollLink to="footer" smooth={true} duration={500} className={styles.navLink}>Contact</ScrollLink>
      </motion.nav>

      <ArrowButton
        direction="up"
        onClick={() => scroll.scrollToTop()}
        customStyles={{
          position: 'absolute',
          bottom: '100px',
          right: '40px',
          width: '40px',
          cursor: 'pointer',
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      />

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className={styles.footerText}
      >
        &copy; {new Date().getFullYear()} Prityanshu Singh. Made with Passion.
      </motion.p>
    </Container>
  );
};

export default Footer;
