import React, { useState } from 'react';
import { Link } from 'react-scroll';
import styles from '/src/styles/Header.module.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.header}>
      <div className={styles.menuToggle} onClick={toggleMenu}>
        <div className={`${styles.bar} ${isMenuOpen ? styles.open : ''}`}></div>
        <div className={`${styles.bar} ${isMenuOpen ? styles.open : ''}`}></div>
        <div className={`${styles.bar} ${isMenuOpen ? styles.open : ''}`}></div>
      </div>
      <ul className={`${styles.navList} ${isMenuOpen ? styles.showMenu : ''}`}>
        <li><a href='#' className={styles.link}>Home</a></li>
        <li><Link smooth={true} duration={500} className={styles.link} to="about">About Me</Link></li>
        <li><Link smooth={true} duration={500} className={styles.link} to="skills">Skills</Link></li>
        <li><Link smooth={true} duration={500} className={styles.link} to="projects">Projects</Link></li>
        <li><Link smooth={true} duration={500} className={styles.link} to="experience">Experience</Link></li>
        <li><Link smooth={true} duration={500} className={styles.link} to="contact">Contact</Link></li>
      </ul>
      <a href="tel:+34123456789">Llamar al +34 123 456 789</a>
    <a href="https://wa.me/34123456789" target='_blank'>Enviar WhatsApp</a>
    <a href="mailto:correo@ejemplo.com">Enviar correo</a>
    </nav>
  );
};

export default Header;
