import React from 'react';
import styles from '/src/styles/Footer.module.css'

const Footer: React.FC = () => {
  return (
    <footer>
      <nav className={styles.nav}>Footer Navigation</nav>  
      <p>&copy; 2024 Personal Web. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
