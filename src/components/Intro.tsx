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
    </div>
  );
};

export default Intro;
