// Projects.tsx
import React from 'react';
import styles from '/src/styles/Projects.module.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

const Projects: React.FC = () => {
  const projects = [
    { id: 1, title: 'Project 1', image: 'project1.jpg', link: 'https://project1.com' },
    { id: 2, title: 'Project 2', image: 'project2.jpg', link: 'https://project2.com' },
    { id: 3, title: 'Project 3', image: 'project3.jpg', link: 'https://project3.com' },
    // Add more projects as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className={styles.projectsContainer}>
      <h2 className={styles.title}>My Projects</h2>
      <Slider {...settings}>
        {projects.map((project) => (
          <div key={project.id} className={styles.projectItem}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.title} className={styles.projectImage} />
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Projects;
