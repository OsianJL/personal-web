import React from 'react'
import { Link } from 'react-scroll';
import styles from '/src/styles/Header.module.css'

const Header: React.FC = () => {
  return (
    <nav className={styles.header}>
      <a href='#' className={styles.link} >Home</a>
      <Link smooth={true} duration={500} className={styles.link} to="about">About Me</Link>
      <Link smooth={true} duration={500} className={styles.link} to="skills">Skills</Link>
      <Link smooth={true} duration={500} className={styles.link} to="projects">Projects</Link>
      <Link smooth={true} duration={500} className={styles.link} to="experience">Experience</Link>
      <Link smooth={true} duration={500} className={styles.link} to="contact">Contact</Link>
    </nav>
  )
}

export default Header
