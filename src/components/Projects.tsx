import React from 'react';
import styles from '/src/styles/Projects.module.css';


const Projects: React.FC = () => {
  return (
    
    <section className={styles.projects}>
      <h1>Projects</h1>
      <section className={styles.carrousel}>
 <img className={styles.img} src="https://picsum.photos/id/227/200/300" alt="" />
 <img className={styles.img} src="https://picsum.photos/id/228/200/300" alt="" />
 <img className={styles.img} src="https://picsum.photos/id/229/200/300" alt="" />
 <img className={styles.img} src="https://picsum.photos/id/230/200/300" alt="" />
 <img className={styles.img} src="https://picsum.photos/id/231/200/300" alt="" />
      </section>
    </section>
    
  );
};

export default Projects;
