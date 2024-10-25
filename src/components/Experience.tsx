import React from 'react';
import styles from '/src/styles/Experience.module.css';


const Experience: React.FC = () => {
  return (
    <section className={styles.experience}>
      <h1>Experience</h1>
      <div className={styles.experienceContainer}>
        <div className={styles.experienceItem}>
          <h2>Job Title</h2>
          <p>Company Name</p>
          <p>Duration</p>
          <p>Description</p>
        </div>
        <div className={styles.experienceItem}>
          <h2>Job Title</h2>
          <p>Company Name</p>
          <p>Duration</p>
          <p>Description</p>
        </div>
        {/* Add more experience items as needed */}
      </div>
     
    </section>
  );
};

export default Experience;