import React from 'react';
import styles from '/src/styles/Skills.module.css';

const Skills: React.FC = () => {
  return (
    
    <section className={styles.skillsGridContainer} id='Skills'>
      <h1 className={styles.skillsHeader}>Skills</h1>
      <div className={styles.divHeader}>
      <div className={styles.skillsCard}>
        <h2 className={styles.skillsHeading}>Technologies & Tools</h2>
        <div className={styles.skillsGrid}>
          <div className={styles.skillItem}>
            <img src="../src/assets/logos_tech_stack/react_logo.svg" alt="React" className={styles.skillLogo} />
            <span>React</span>
          </div>
          <div className={styles.skillItem}>
            <img src="../src/assets/logos_tech_stack/typescript_logo.svg" alt="TypeScript" className={styles.skillLogo} />
            <span>TypeScript</span>
          </div>
          <div className={styles.skillItem}>
            <img src="../src/assets/logos_tech_stack/css_logo.svg" alt="CSS" className={styles.skillLogo} />
            <span>CSS</span>
          </div>
          <div className={styles.skillItem}>
            <img src="../src/assets/logos_tech_stack/html_logo.svg" alt="html" className={styles.skillLogo} />
            <span>HTML</span>
          </div>
          <div className={styles.skillItem}>
            <img src="../src/assets/logos_tech_stack/python_logo.svg" alt="SQL" className={styles.skillLogo} />
            <span>Python</span>
          </div>
          <div className={styles.skillItem}>
            <img src="../src/assets/logos_tech_stack/sql_logo.svg" alt="SQL" className={styles.skillLogo} />
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
          <div className={styles.skillItem}>
            <span className={styles.softSkillIcon}>🖥️</span>
            <span>Organization</span>
          </div>
        </div>
      </div>
      </div>
    </section>
    
  );
};

export default Skills;
