import React, { useState, useEffect, useRef } from "react";
import { Link as ScrollLink } from "react-scroll";
import styles from "./styles/Navbar.module.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY.current) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    lastScrollY.current = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className={`${styles.navbar} ${isVisible ? styles.visible : styles.hidden}`}>
      <div className={styles.navbarContent}>
        <div className={`${styles.menuToggle} ${isMobile ? styles.active : ""}`} onClick={toggleMobileMenu}>
          {isMobile ? (
            <div className={styles.cross}>
              <div className={styles.crossBar}></div>
              <div className={styles.crossBar}></div>
            </div>
          ) : (
            <>
              <div className={styles.bar}></div>
              <div className={styles.bar}></div>
              <div className={styles.bar}></div>
            </>
          )}
        </div>
        <ul className={`${styles.navLinks} ${isMobile ? styles.active : ""}`}>
          <li>
            <ScrollLink to="hero" smooth={true} duration={500} onClick={() => setIsMobile(false)}>Home</ScrollLink>
          </li>
          <li>
            <ScrollLink to="about" smooth={true} duration={500} onClick={() => setIsMobile(false)}>About</ScrollLink>
          </li>
          <li>
            <ScrollLink to="projects" smooth={true} duration={500} onClick={() => setIsMobile(false)}>Projects</ScrollLink>
          </li>
          <li>
            <ScrollLink to="footer" smooth={true} duration={500} onClick={() => setIsMobile(false)}>Contact</ScrollLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
