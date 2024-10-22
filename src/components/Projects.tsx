import React from 'react';
import styles from '/src/styles/Projects.module.css';


const Hero: React.FC = () => {
  return (
    <section className={styles.projects}>
      <h1>Projects</h1>
      <section className={styles.carrousel}>

 <img className={styles.img} src="https://picsum.photos/id/237/200/300" alt="" />
 <img className={styles.img} src="https://picsum.photos/id/237/200/300" alt="" />
 <img className={styles.img} src="https://picsum.photos/id/237/200/300" alt="" />
 <img className={styles.img} src="https://picsum.photos/id/237/200/300" alt="" />
 <img className={styles.img} src="https://picsum.photos/id/237/200/300" alt="" />
      </section>
    </section>
  );
};

export default Hero;
