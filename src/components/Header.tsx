import React from 'react'
import { Link } from 'react-scroll';
import styles from '/src/styles/Header.module.css'

const Header: React.FC = () => {
  return (
    <nav className={styles.header}>
      <Link smooth={true} duration={500} className={styles.link} to="header">Home</Link>
      <Link smooth={true} duration={500} className={styles.link} to="about">About Me</Link>
      <Link smooth={true} duration={500} className={styles.link} to="">Skills</Link>
      <Link smooth={true} duration={500} className={styles.link} to="">Projects</Link>
      <Link smooth={true} duration={500} className={styles.link} to="">Experience</Link>
      <Link smooth={true} duration={500} className={styles.link} to="">Contact</Link>
    </nav>
  )
}

export default Header
