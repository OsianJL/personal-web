import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import styles from '/src/styles/Experience.module.css';

const experiences = [
    {
        title: 'Full Stack Software Developer',
        company: 'Bubbo',
        city: 'Zaragoza (Remote)',
        date: 'June 2024 - Present',
        description: 'Responsable del desarrollo de interfaces de usuario...',
        responsibilities: [
          'Implementación de componentes reutilizables, optimización de rendimiento...',
          'Colaboración con el equipo de diseño para mejorar la experiencia de usuario.,,,',
          'Colaboración con el equipo de diseño para mejorar la experiencia de usuario.,,,',
          'Colaboración con el equipo de diseño para mejorar la experiencia de usuario.,,,',
          'Colaboración con el equipo de diseño para mejorar la experiencia de usuario.,,,',
        ],
      },
];

const Experience: React.FC = () => {
  const [activeModal, setActiveModal] = useState<number | null>(null);

  useEffect(() => {
    if (activeModal !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [activeModal]);

  return (
    <section className={styles.experience} id="experience">
      <h1 className={styles.head1}>Experience</h1>
      <a
        href="https://www.linkedin.com/in/osianjorge/"
        target="_blank"
        className={styles.ctaLinkedin}
      >
        LinkedIn
      </a>
      <div className={styles.container}>
        {experiences.map((exp, index) => (
          <div className={styles.experienceItem} key={index}>
            <div className={styles.experienceContent}>
              <h3>{exp.title}</h3>
              <p>{exp.company}</p>
              <Link
                to={`modal-${index}`}
                smooth={true}
                duration={500}
                className={styles.link}
                onClick={() => setActiveModal(index)}
              >
                see more
              </Link>
            </div>
            <div
              id={`modal-${index}`}
              className={`${styles.modal} ${
                activeModal === index ? styles.modalVisible : ''
              }`}
            >
              <div className={styles.modalContent}>
                <nav className={styles.modalNav}>
                  <h1>{exp.title}</h1>
                  <Link
                    to="experience"
                    smooth={true}
                    duration={500}
                    className={styles.closeLink}
                    onClick={() => setActiveModal(null)}
                  >
                    close
                  </Link>
                </nav>

                <h2>{exp.company}</h2>
                <h3>{exp.city}</h3>
                <h3>{exp.date}</h3>
                <h4>{exp.description}</h4>

                <p>
                  <strong>Responsabilidades:</strong>
                </p>
                <ul>
                  {exp.responsibilities.map((resp, index) => (
                    <li key={index}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
