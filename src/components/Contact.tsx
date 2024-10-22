import React from 'react';
import styles from '/src/styles/Contact.module.css';
import CodeAnimation from './CodeAnimation';

const Contact: React.FC = () => {
  return (
    <section className={styles.hero}>
      <CodeAnimation />
      <div className={styles.overlay}>
        <h1 className={styles.title}>Hi! This is Osián</h1>
        <img className={styles.img} src="/src/assets/Osian_Avatar.png" alt="Picture of Osian" />
        <p className={styles.subtitle}>Web Developer | Digital Expert | Musician</p>
        <a href="https://github.com/OsianJL" target='_blank' className={styles.cta}>GitHub</a>
      </div>
    </section>
  );
};

export default Contact;