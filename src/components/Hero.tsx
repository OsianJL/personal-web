import React from 'react'
import styles from '/src/styles/Hero.module.css'
import CodeAnimation from './CodeAnimation'

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      {/* <h1 className={styles.head1}>Osián Jorge Lezcano</h1> */}

      <CodeAnimation />

    </section>
  )
}

export default Hero
