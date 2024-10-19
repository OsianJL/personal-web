import React from 'react';
import styles from '/src/styles/Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>Hi! This is Osián</h1>
        <img className={styles.img} src="/src/assets/Osian_Avatar.png" alt="Picture of Osian" />
        <p className={styles.subtitle}>Web Developer | Digital Expert | Musician</p>
        <a href="#projects" className={styles.cta}>Projects</a>
      </div>
    </section>
  );
};

export default Hero;
