import React from 'react';
import Container from '../components/Core/Container';
import Button from '../components/Core/Button';
import ImageHolder from '../components/Core/ImageHolder';
import styles from './styles/About.module.css';
import Image from '../assets/images/profile/profileImg.png';
import { FaLinkedin, FaGithub, FaInstagram, FaLink, FaFigma } from 'react-icons/fa';

const About = () => {
  const links = [
    {
      href: "https://linkedin.com/in/prityanshu-singh",
      icon: <FaLinkedin style={{ fontSize: '2.5rem' }} />,
      label: "LinkedIn"
    },
    {
      href: "https://github.com/PrityanshuSingh",
      icon: <FaGithub style={{ fontSize: '2.5rem' }} />,
      label: "GitHub"
    },
    {
      href: "https://www.instagram.com/prityanshu_singh?igsh=MXgzbzUzZWR6dTk2aw==",
      icon: <FaInstagram style={{ fontSize: '2.5rem' }} />,
      label: "Instagram"
    },
    {
      href: "https://linktr.ee/prityanshusingh",
      icon: <FaLink style={{ fontSize: '2.5rem' }} />,
      label: "Linktree"
    },
    {
      href: "https://www.figma.com/design/HHOFtWQXsyTxzqYOn6BAgw/AgriVision-App-Design?node-id=0-1&t=aYX1dkAgIRC1QXRu-1",
      icon: <FaFigma style={{ fontSize: '2.5rem' }} />,
      label: "Figma"
    }
  ];

  return (
    <Container
      customStyles={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
        borderRadius: "40px",
        marginTop: "50px",
        position: "relative",
        padding: "0px 24px",
        width: "95%",
      }}
    >
      <div className={styles.aboutGrid}>
        <div className={styles.imageAndLinks}>
          <h1 className={styles.aboutHeading}>About Me</h1>
          <ImageHolder
            src={Image}
            alt="Prityanshu Singh"
            customStyles={{
              width: "300px",
              height: "300px",
              borderRadius: "50%",
            }}
          />
          <div className={styles.links}>
            {links.map((link, index) => (
              <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        <div className={styles.cardContainer}>
          <p className={styles.aboutText}>
            Hi, I am Prityanshu Singh, <br /> a passionate web developer with extensive experience in building dynamic web applications using React, Node.js, MongoDB and Express. My journey in web development has equipped me with the skills to create scalable and efficient applications.
          </p>
          <a href="https://drive.google.com/file/d/1GC_qcUPNAFQ8pIrBNwn46oGOb5oVL9rc/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
            <Button text="Resume" customStyles={{ width: '300px' }} />
          </a>
        </div>
      </div>
    </Container>
  );
};

export default About;
