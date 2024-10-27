import React, { useState } from 'react';
import styles from '/src/styles/Experience.module.css';

const experiences = [
  {
    title: 'Desarrollador Frontend',
    company: 'Empresa XYZ',
    city: 'Madrid',
    date: 'Enero 2020 - Presente',
    description: 'Responsable del desarrollo de interfaces de usuario...',
    responsibilities: [
      'Implementación de componentes reutilizables, optimización de rendimiento...',
      'Colaboración con el equipo de diseño para mejorar la experiencia de usuario...',
      // Agrega más responsabilidades aquí
    ],
  },
  // Agrega aquí las demás experiencias (total de 6)
];

const Experience: React.FC = () => {
  const [activeModal, setActiveModal] = useState<number | null>(null);

  return (
    <section className={styles.experience}>
      <h1>Experience</h1>
      <div className={styles.container}>
        {experiences.map((exp, index) => (
          <div className={styles.experienceItem} key={index}>
            <div className={styles.experienceContent}>
              <h3>{exp.title}</h3>
              <p>{exp.company}</p>
              <button onClick={() => setActiveModal(index)}>see more</button>
            </div>
            <div
              className={`${styles.modal} ${
                activeModal === index ? styles.modalVisible : ''
              }`}
            >
              <div className={styles.modalContent}>
                <nav className={styles.modalNav}>
                  <button onClick={() => setActiveModal(null)}>close</button>
                </nav>
                <h2>{exp.title}</h2>
                <p>
                  <strong>Empresa:</strong> {exp.company}
                </p>
                <p>
                  <strong>Ciudad:</strong> {exp.city}
                </p>
                <p>
                  <strong>Fecha:</strong> {exp.date}
                </p>
                <p>
                  <strong>Descripción:</strong> {exp.description}
                </p>
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
