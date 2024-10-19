import React from 'react'
import styles from '/src/styles/Header.module.css'

const Header: React.FC = () => {
  return (
    <nav className={styles.header}>
      <a href="">Home</a>
      <a href="">About Me</a>
      <a href="">Skills</a>
      <a href="">Projects</a>
      <a href="">Experience</a>
      <a href="">Contact</a>
    </nav>
  )
}

export default Header
