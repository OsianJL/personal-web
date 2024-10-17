import React from 'react'
import styles from '/src/styles/Intro.module.css'

interface IntroProps {
  setShowIntro: React.Dispatch<React.SetStateAction<boolean>>
}

const Intro: React.FC<IntroProps> = ({ setShowIntro }) => {
  const handleClick = () => {
    setShowIntro(false)
  }

  return (
    <div className={styles.screen}>
      <div className={styles.pictures}></div>
      <h1 className={styles.name}>Osián Jorge Lezcano</h1>
      <h2 className={styles.role}>Software Developer</h2>
      <button className={styles.button} onClick={handleClick}>
        Open Portfolio
      </button>
    </div>
  )
}

export default Intro
