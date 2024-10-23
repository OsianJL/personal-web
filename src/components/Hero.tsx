import React from 'react'
import styles from '/src/styles/Hero.module.css'
import CodeAnimation from './CodeAnimation'

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
    
        <CodeAnimation />
      
      <div className={styles.overlay}>
      
        <img
          className={styles.img}
          src="/src/assets/Osian_Avatar.png"
          alt="Picture of Osian"
        />
     
        {/* <h6 className={styles.subtitle}>Go ahead and snoop around! 😉</h6> */}
        <a
          href="https://github.com/OsianJL"
          target="_blank"
          className={styles.cta}
        >
          GitHub
        </a>
      </div>
    </section>
  )
}

export default Hero
