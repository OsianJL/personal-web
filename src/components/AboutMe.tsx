// AboutMe.tsx
import React, { useEffect, useRef, useState } from 'react';
import styles from '/src/styles/AboutMe.module.css';

const AboutMe: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          } else {
            setInView(false);
          }
        });
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

  }, []);

  return (
    <div className={styles.backup}>
    <section
      ref={sectionRef}
      className={`${styles.aboutMeSection} ${inView ? styles.inView : ''}`}
      id='AboutMe'
    >
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
    </section>
    </div>
  );
};

export default AboutMe;
