import React from 'react';
import styles from '/src/styles/Projects.module.css';

const projects = [
  {
    url: 'https://github.com/OsianJL/WanderBud',
    image: 'https://picsum.photos/id/227/200/300',
    alt: 'project 1'
  },
  {
    url: 'https://github.com/OsianJL/html_test',
    image: 'https://picsum.photos/id/228/200/300',
    alt: 'project 2'
  },
  {
    url: 'https://github.com/OsianJL/html_course',
    image: 'https://picsum.photos/id/229/200/300',
    alt: 'project 3'
  },
  {
    url: 'https://github.com/OsianJL/OsianJL-MyBackend-1',
    image: 'https://picsum.photos/id/230/200/300',
    alt: 'project 4'
  },
  {
    url: 'https://github.com/OsianJL/Fooball-Bet-Web-App',
    image: 'https://picsum.photos/id/231/200/300',
    alt: 'project 5'
  },
];

const Projects: React.FC = () => {

  const handleClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section className={styles.projects}>
      <h1>Projects</h1>
      <section className={styles.carrousel}>
        {projects.map((project, index) => (
          <img
            key={index}
            className={styles.img}
            src={project.image}
            alt={project.alt}
            onClick={() => handleClick(project.url)}
          />
        ))}
      </section>
    </section>
  );
};

export default Projects;
