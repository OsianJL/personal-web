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
      <div className={styles.pictures}>
        <img className={styles.img} src="../src/assets/logos_tech_stack/react_logo.svg" alt="logo react" />
        <img className={styles.img} src="../src/assets/logos_tech_stack/html_logo.svg" alt="logo html" />
        <img className={styles.img} src="../src/assets/logos_tech_stack/css_logo.svg" alt="logo css" />
        <img className={styles.img} src="../src/assets/logos_tech_stack/typescript_logo.svg" alt="logo typescript" />
        <img className={styles.img} src="../src/assets/logos_tech_stack/sql_logo.svg" alt="logo postgres" />
      </div>
      <h1 className={styles.name}>Osián Jorge Lezcano </h1>
      <h2 className={styles.role}>Software Developer</h2>
      <button className={styles.button} onClick={handleClick}>
        Open Portfolio
      </button>
    </div>
  )
}

export default Intro
