import React from 'react';
import styles from '/src/styles/Contact.module.css';


const Contact: React.FC = () => {
  return (
    <section className={styles.contact}>
     <h1>Contact</h1>
    <form className={styles.contactForm}>
      <div className={styles.formGroup}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
      </div>
      <button type="submit">Send</button>
    </form>
    </section>
  );
};

export default Contact;