import React from 'react';
import styles from '/src/styles/Contact.module.css';

const Contact: React.FC = () => {
  return (
    <section className={styles.contact}>
      <h1>Contact</h1>
      <form className={styles.contactForm}>
        <div className={styles.formGroup}>
          <input type="text" id="name" name="name" placeholder='Name' required />
        </div>
        <div className={styles.formGroup}>
          <input type="text" id="phone" name="phone" placeholder='Phone' required />
        </div>
        <div className={styles.formGroup}>
          <input type="email" id="email" name="email" placeholder='Email' required />
        </div>
        <div className={styles.formGroup}>
          <input type="text" id="concept" name="concept" placeholder='Concept' required />
        </div>
        <div className={styles.formGroup}>
          <textarea id="message" name="message" placeholder='Your message here...' required></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
