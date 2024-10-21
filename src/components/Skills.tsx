import React from 'react';
import styles from '/src/styles/Skills.module.css';

const Skills: React.FC = () => {
  return (
    <section className={styles.skillsGridContainer} id='Skills'>
      <div className={styles.skillsCard}>
        <h2 className={styles.skillsHeading}>Technologies & Tools</h2>
        <div className={styles.skillsGrid}>
          <div className={styles.skillItem}>
            <img src="/src/assets/logos/react.svg" alt="React" className={styles.skillLogo} />
            <span>React</span>
          </div>
          <div className={styles.skillItem}>
            <img src="/src/assets/logos/typescript.svg" alt="TypeScript" className={styles.skillLogo} />
            <span>TypeScript</span>
          </div>
          <div className={styles.skillItem}>
            <img src="/src/assets/logos/nodejs.svg" alt="Node.js" className={styles.skillLogo} />
            <span>Node.js</span>
          </div>
          <div className={styles.skillItem}>
            <img src="/src/assets/logos/python.svg" alt="Python" className={styles.skillLogo} />
            <span>Python</span>
          </div>
          <div className={styles.skillItem}>
            <img src="/src/assets/logos/sql.svg" alt="SQL" className={styles.skillLogo} />
            <span>SQL</span>
          </div>
        </div>
      </div>
      <div className={styles.skillsCard}>
        <h2 className={styles.skillsHeading}>Soft Skills</h2>
        <div className={styles.skillsGrid}>
          <div className={styles.skillItem}>
            <span className={styles.softSkillIcon}>🧠</span>
            <span>Problem Solving</span>
          </div>
          <div className={styles.skillItem}>
            <span className={styles.softSkillIcon}>🎨</span>
            <span>Creativity</span>
          </div>
          <div className={styles.skillItem}>
            <span className={styles.softSkillIcon}>🤝</span>
            <span>Teamwork</span>
          </div>
          <div className={styles.skillItem}>
            <span className={styles.softSkillIcon}>⚙️</span>
            <span>Adaptability</span>
          </div>
          <div className={styles.skillItem}>
            <span className={styles.softSkillIcon}>🗣️</span>
            <span>Communication</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
