import React from 'react';
import styles from '/src/styles/AboutMe.module.css';

const AboutMe: React.FC = () => {
  return (
    <section className={styles.aboutMeSection} id='AboutMe'>
        <div className={styles.textContent}>
          <h1 className={styles.heading}>About Me</h1>
          <p className={styles.paragraph}>
            Hi, I'm Osián Jorge Lezcano, a passionate software developer who loves crafting digital experiences.
            My journey began with a curiosity for technology, which quickly grew into a deep appreciation for software 
            craftsmanship, clean code, and creative problem-solving.
          </p>
          <p className={styles.paragraph}>
            Throughout my career, I have embraced challenges that push me beyond my comfort zone, constantly learning 
            and adapting to new tools and technologies. I have experience with modern web technologies such as 
            TypeScript, React, Node.js, and Python, and I'm always excited to work with innovative projects that 
            aim to make a difference.
          </p>
          <p className={styles.paragraph}>
            Besides coding, I have a passion for music, and I believe that creativity in one area of life fuels 
            creativity in others. When I'm not working, you'll likely find me jamming on my guitar or exploring new genres.
          </p>
        </div>
      <div className={styles.skillsGridContainer}>
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
      </div>
    </section>
  );
};

export default AboutMe;
