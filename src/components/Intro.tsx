import React, { useEffect, useState } from 'react';
import styles from '/src/styles/Intro.module.css'

const Intro: React.FC = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className={styles.screen}>
      <h1 className={styles.name}>Osián</h1>
      <audio autoPlay loop>
        <source
          src="https://res.cloudinary.com/dg4q5s1fc/video/upload/v1729074644/Medicine_Cloud_llxqaz.mp3"
          type="audio/mpeg"
        />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default Intro;
