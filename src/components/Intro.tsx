import React from 'react';
import styles from '/src/styles/Intro.module.css'

interface IntroProps {
  setShowIntro: React.Dispatch<React.SetStateAction<boolean>>;
}

const Intro: React.FC<IntroProps> = ({setShowIntro}) => {

  const handleClick = () => {
    setShowIntro(false);
  };

  return (
    <>
    <div className={styles.screen}>
      <div>

      <h1 className={styles.name}>Osián Jorge Lezcano</h1>
      <h2 className={styles.role}>Software Developer</h2>
      </div>
      <div  className={styles.divButton}>

      <button className={styles.button} onClick={handleClick}>Open Portfolio</button>
      </div>
      
      

    
      {/* <h2 className={styles.role}>Musician</h2>
      <h2 className={styles.role}>Traveler</h2> */}
      {/* <audio autoPlay loop>
        <source
          src="https://res.cloudinary.com/dg4q5s1fc/video/upload/v1729074644/Medicine_Cloud_llxqaz.mp3"
          type="audio/mpeg"
        />
        Your browser does not support the audio element.
      </audio> */}
    </div>
 
    </>
  );
};

export default Intro;
