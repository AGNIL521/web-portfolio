import React from 'react';
import '../styles/Contact.css';

const Contact = () => (
  <section className="contact" id="contact">
    <h2>Contact</h2>
    <form className="contact__form" onSubmit={e => e.preventDefault()}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" required />
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" required />
      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" rows="4" required></textarea>
      <button type="submit">Send</button>
    </form>
    <div className="contact__links">
      <a href="mailto:agnaouilyas4@gmail.com">agnaouilyas4@gmail.com</a>
      <a href="https://www.linkedin.com/in/ilyass-agnaou" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href="https://github.com/AGNIL521" target="_blank" rel="noopener noreferrer">GitHub</a>
    </div>
  </section>
);

export default Contact;
