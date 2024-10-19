import React from 'react'
import styles from '/src/styles/Header.module.css'

const Header: React.FC = () => {
  return (
    <nav className={styles.header}>
      <a className={styles.anchor} href="#">Home</a>
      <a className={styles.anchor} href="#">About Me</a>
      <a className={styles.anchor} href="#">Skills</a>
      <a className={styles.anchor} href="#">Projects</a>
      <a className={styles.anchor} href="#">Experience</a>
      <a className={styles.anchor} href="#">Contact</a>
    </nav>
  )
}

export default Header
