import React from 'react'
import styles from '/src/styles/Experience.module.css'

const experiences = [
  {
    title: 'Desarrollador Frontend',
    company: 'Empresa XYZ',
    city: 'Madrid',
    date: 'Enero 2020 - Presente',
    description: 'Responsable del desarrollo de interfaces de usuario...',
    responsibilities:
      'Implementación de componentes reutilizables, optimización de rendimiento...',
  },
  {
    title: 'Desarrollador Frontend',
    company: 'Empresa XYZ',
    city: 'Madrid',
    date: 'Enero 2020 - Presente',
    description: 'Responsable del desarrollo de interfaces de usuario...',
    responsibilities:
      'Implementación de componentes reutilizables, optimización de rendimiento Implementación de componentes reutilizables, optimización de rendimientoImplementación de componentes reutilizables, optimización de rendimientoImplementación de componentes reutilizables, optimización de rendimientoImplementación de componentes reutilizables, optimización de rendimientoImplementación de componentes reutilizables, optimización de rendimientoImplementación de componentes reutilizables, optimización de rendimientoImplementación de componentes reutilizables, optimización de rendimientoImplementación de componentes reutilizables, optimización de rendimientoImplementación de componentes reutilizables, optimización de rendimientoImplementación de componentes reutilizables, optimización de rendimientoImplementación de componentes reutilizables, optimización de rendimientoImplementación de componentes reutilizables, optimización de rendimientoImplementación de componentes reutilizables, optimización de rendimientoImplementación de componentes reutilizables, optimización de rendimientoImplementación de componentes reutilizables, optimización de rendimientoImplementación de componentes reutilizables, optimización de rendimientoImplementación de componentes reutilizables, optimización de rendimientoImplementación de componentes reutilizables, optimización de rendimientoImplementación de componentes reutilizables, optimización de rendimiento...',
  },
  {
    title: 'Desarrollador Frontend',
    company: 'Empresa XYZ',
    city: 'Madrid',
    date: 'Enero 2020 - Presente',
    description: 'Responsable del desarrollo de interfaces de usuario...',
    responsibilities:
      'Implementación de componentes reutilizables, optimización de rendimiento...',
  },
  {
    title: 'Desarrollador Frontend',
    company: 'Empresa XYZ',
    city: 'Madrid',
    date: 'Enero 2020 - Presente',
    description: 'Responsable del desarrollo de interfaces de usuario...',
    responsibilities:
      'Implementación de componentes reutilizables, optimización de rendimiento...',
  },
  {
    title: 'Desarrollador Frontend',
    company: 'Empresa XYZ',
    city: 'Madrid',
    date: 'Enero 2020 - Presente',
    description: 'Responsable del desarrollo de interfaces de usuario...',
    responsibilities:
      'Implementación de componentes reutilizables, optimización de rendimiento...',
  },
  {
    title: 'Desarrollador Frontend',
    company: 'Empresa XYZ',
    city: 'Madrid',
    date: 'Enero 2020 - Presente',
    description: 'Responsable del desarrollo de interfaces de usuario...',
    responsibilities:
      'Implementación de componentes reutilizables, optimización de rendimiento...',
  },
  // Agrega aquí las demás experiencias (total de 6)
]

const Experience: React.FC = () => {
  return (
    <section className={styles.experience}>
      <div className={styles.container}>
        {experiences.map((exp, index) => (
          <div className={styles.experienceItem} key={index}>
            <div className={styles.experienceContent}>
              <h3>{exp.title}</h3>
              <p>{exp.company}</p>
              <button>see more</button>
            </div>
            <div className={styles.modal}>
              <div className={styles.modalContent}>
                <nav className={styles.nav}>
                  <button>close</button>
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
                  <strong>Responsabilidades:</strong> {exp.responsibilities}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
