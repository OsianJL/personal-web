import React from 'react'
import styles from '/src/styles/Hero.module.css'
import CodeAnimation from './CodeAnimation'

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.head1}>Congrats!! You just found Osián!!</h1>
    
        <CodeAnimation />
      
      <div className={styles.overlay}>
      
        <img
          className={styles.img}
          src="/src/assets/Osian_Avatar.png"
          alt="Picture of Osian"
        />
        
      </div>
    </section>
  )
}

export default Hero
