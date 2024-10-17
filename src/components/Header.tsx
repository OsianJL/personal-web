import React from 'react';
import styles from '/src/styles/Header.module.css'

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1>Personal Web</h1>
      <nav className={styles.nav}>
        <a href="">Home</a>
        <a href="">Projects</a>
        <a href="">Pictures</a>
        <a href="">Contact</a>
      </nav>
      
      {/* <h2 className={styles.role}>Musician</h2>
      <h2 className={styles.role}>Traveler</h2> */}
      {/* <audio autoPlay loop>
        <source
          src="https://res.cloudinary.com/dg4q5s1fc/video/upload/v1729074644/Medicine_Cloud_llxqaz.mp3"
          type="audio/mpeg"
        />
        Your browser does not support the audio element.
      </audio> */}
    </header>
  );
};

export default Header;
